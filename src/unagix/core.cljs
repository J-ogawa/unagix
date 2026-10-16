(ns ^:figwheel-always unagix.core
  (:require
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [timeout put! chan <!]]
    [clojure.data :as data]
    [clojure.string :as string])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

; クエリ文字列は "?" + 1文字 + 棋譜 の形式で、"&view=gote" のようなパラメータを後ろに付けられる。
(defonce query-parts
  (string/split (apply str (drop 1 (-> js/window .-location .-search))) #"&"))

(defonce kifu
  (apply str (drop 1 (first query-parts))))

; 手数。初期配置 36 文字の後ろは 2 文字で 1 手。末尾の余りの文字は手として扱わない
(defonce total-moves
  (max 0 (quot (- (count kifu) 36) 2)))

(defonce query-params
  (into {} (for [part (rest query-parts)
                 :when (re-find #"=" part)]
             (string/split part #"=" 2))))

(defn- decode-param [v]
  (try
    (js/decodeURIComponent (string/replace v "+" " "))
    (catch :default _ v)))

; 対局者名: sente / gote パラメータ (なければ空)
(defonce player-names
  {:+ (some-> (get query-params "sente") decode-param)
   :- (some-> (get query-params "gote") decode-param)})

; 視点: :+ (先手) / :- (後手)。view パラメータがなければ先手。
(defonce app-state
  (atom {:move-index 0
         :view (if (= (get query-params "view") "gote") :- :+)}))

; --- move ---

(def basic-type-vec
  {:hu  {:short [[ 0 -1]]}
   :ky  {:long  [[ 0 -1]]}
   :ke  {:short [[-1 -2] [ 1 -2]]}
   :gi  {:short [[-1 -1] [-1  1] [ 0 -1] [ 1 -1] [ 1  1]]}
   :ki  {:short [[-1 -1] [-1  0] [ 0 -1] [ 0  1] [ 1 -1] [ 1  0]]}
   :ka  {:long  [[-1 -1] [-1  1] [ 1 -1] [ 1  1]]}
   :hi  {:long  [[-1  0] [ 0 -1] [ 0  1] [ 1  0]]}
   :gy  {:short [[-1 -1] [-1  0] [-1  1] [ 0 -1] [ 0  1] [ 1 -1] [ 1  0] [ 1  1]]}
   :nhu {:short [[-1 -1] [-1  0] [ 0 -1] [ 0  1] [ 1 -1] [ 1  0]]}
   :nky {:short [[-1 -1] [-1  0] [ 0 -1] [ 0  1] [ 1 -1] [ 1  0]]}
   :nke {:short [[-1 -1] [-1  0] [ 0 -1] [ 0  1] [ 1 -1] [ 1  0]]}
   :ngi {:short [[-1 -1] [-1  0] [ 0 -1] [ 0  1] [ 1 -1] [ 1  0]]}
   :nka (conj {:long  [[-1 -1] [-1  1] [ 1 -1] [ 1  1]]} {:short [[-1  0] [ 0 -1] [ 0  1] [ 1  0]]})
   :nhi (conj {:long  [[-1  0] [ 0 -1] [ 0  1] [ 1  0]]} {:short [[-1 -1] [-1  1] [ 1 -1] [ 1  1]]})})
(def direction {:+ [1 1] :- [1 -1]})

(defn check-dst [field owner dst]
  (cond
    (some #(= "-" %) (seq (name dst))) :out-of-field
    (some #(> % 5) (map js/parseInt (seq (name dst)))) :out-of-field
    (nil? (field dst))                         :empty-space
    (not= (subs (name (field dst)) 0 1) owner) :enemy
    :else                              :mine))

(defn destination [field src reach-vec]
  (keyword (string/join (map + [(js/parseInt (subs (name src) 0 1)) (js/parseInt (subs (name src) 1 2))] reach-vec))))

(defn reach-short [field src reach-vec]
  (let [dst (destination field src reach-vec)]
    (case (check-dst field (subs (name (field src)) 0 1) dst)
      :out-of-field nil
      :empty-space  dst
      :enemy        dst
      :mine         nil)))

(defn reach-long
  ([field src reach-vec]
   (reach-long field (subs (name (field src)) 0 1) src reach-vec []))

  ([field owner src reach-vec reaching]
   (let [dst (destination field src reach-vec)]
     (case (check-dst field owner dst)
       :out-of-field reaching
       :empty-space  (reach-long field owner dst reach-vec (conj reaching dst))
       :enemy        (conj reaching dst)
       :mine         reaching))))

(defn reach-vecs [koma vec-kind]
  (map #(map * (direction (keyword (subs (name koma) 0 1))) %)
       ((get basic-type-vec (keyword (apply str (drop 1 (name koma))))) vec-kind)))

(defn to-int [coordinate]
  (+ (->> coordinate name first js/parseInt)
     (* (->> coordinate name last js/parseInt) 6)))

(defn movable-masus [field src]
  (->> (conj (map #(reach-short field src %) (reach-vecs (field src) :short))
             (map #(reach-long field src %) (reach-vecs (field src) :long)))
       (filter (complement nil?))
       (flatten)
       (sort-by to-int)))

(def stock-types [:hu :ky :ke :gi :ki :ka :hi :gy])

(defn- to-koma-type [kifu_char]
  (case kifu_char
    "a" "hu"
    "b" "ky"
    "c" "ke"
    "d" "gi"
    "e" "ki"
    "f" "ka"
    "g" "hi"
    "h" "gy"
    "_" nil))

(defn- to-coordinate [kifu_char]
  (let [value (js/parseInt kifu_char 36)]
    (keyword (str (rem value 6) (quot value 6)))))

(defn- next-turn [current]
  (if (= current :+) :- :+))

(defn- convert-koma [pair]
  (if-let [koma-type (to-koma-type (last pair))]
    (keyword (str (if (< (first pair) 18) "-" "+") koma-type))))

(defn- first-field [strs]
  (->>
    strs
    (map-indexed vector)
    (map #(hash-map (keyword (str (rem (first %) 6) (quot (first %) 6))) (convert-koma %)))
    (apply merge)))

(defn- promote [koma]
  (let [string (name koma)]
    (keyword (str (subs string 0 1) "n" (subs string 1 3)))))

(defn- reflected-state [state move]
  (let [target (->> move first to-coordinate)
        move-value (js/parseInt (last move) 36)]
    (if (nil? (->> state :field target))
      (let [stock-type (get stock-types move-value)]
        (->
          state
          (assoc-in [:field target] (keyword (str (name (:turn state)) (name stock-type))))
          (update-in [:stock (:turn state) stock-type] dec)
          (update :turn next-turn)))
      (let [dst (get (vec (movable-masus (state :field) target)) (rem move-value 20))]
        (cond->
          state
          (and ((complement nil?) (-> state :field dst))
               (not= "gy" (apply str (take-last 2 (name (-> state :field dst)))))) (update-in [:stock (state :turn) (keyword (apply str (take-last 2 (name (-> state :field dst)))))] inc)
          true                      (assoc-in [:field dst] (-> state :field target))
          (> (quot move-value 20) 0) (update-in [:field dst] promote)
          true                      (assoc-in [:field target] nil)
          true                      (update :turn next-turn))))))

(defn- status [kifu]
  (->
    {:stock {:+ {:hu 0 :ky 0 :ke 0 :gi 0 :ki 0 :ka 0 :hi 0 :gy 0}
             :- {:hu 0 :ky 0 :ke 0 :gi 0 :ki 0 :ka 0 :hi 0 :gy 0}}
     :turn :+}
    (assoc :field (first-field (take 36 (seq kifu))))
    (as-> status (reduce #(reflected-state %1 %2) status (map (fn[x](apply str x)) (partition 2 (drop 36 (seq kifu))))))))

; --- virtual DOM ---

; 駒種 ("hu", "nhu" など) を resources/public/images の画像パス ("/images/Hu.png", "/images/NHu.png") に変換する
(defn- koma-image [koma-type]
  (let [promoted? (= 3 (count koma-type))
        base (if promoted? (subs koma-type 1) koma-type)]
    (str "/images/" (if promoted? "N" "") (string/capitalize base) ".png")))

(defn- koma-class [koma-owner view]
  (if (= koma-owner view) "koma-up" "koma-down"))

(defn- koma-img [koma-type class-name]
  (dom/img #js {:src (koma-image koma-type) :className (str "koma " class-name)}))

(defn masu [data owner]
  (reify
    om/IRender
    (render [self]
      (dom/div #js {:className "masu" }
               (if-let [koma (:koma data)]
                 (koma-img (apply str (drop 1 (name koma)))
                           (koma-class (keyword (subs (name koma) 0 1)) (:view data))))))))

(defn masu-row [app owner]
  (reify
    om/IRender
    (render [self]
      (apply dom/div #js {:className "masu-row"}
             (om/build-all masu app)))))

(def turn-marks {:+ "☗" :- "☖"})

(defn center [app owner]
  (reify
    om/IRender
    (render [self]
      (let [view (:view app)
            masus (map #(hash-map :koma (last %) :view view) (sort-by first (:field app)))]
        (dom/div #js {:className "center"}
                 ; 上に相手、下に自分(視点側)の手番マークと対局者名。上側は左右も反対に置く
                 (dom/div #js {:className "bar"}
                          (dom/div #js {:className "player player-top"}
                                   (dom/span #js {:className "player-name"} (player-names (next-turn view)))
                                   (dom/span #js {:className "turn-mark turn-mark-opponent"} (turn-marks (next-turn view)))))
                 ; 後手視点では盤を 180 度回転させるため、マスを逆順に並べる
                 (apply dom/div #js {:className "ban"}
                        (om/build-all masu-row (partition 6 (if (= view :-) (reverse masus) masus))))
                 (dom/div #js {:className "bar"}
                          (dom/div #js {:className "player player-bottom"}
                                   (dom/span #js {:className "turn-mark"} (turn-marks view))
                                   (dom/span #js {:className "player-name"} (player-names view)))))))))

(defn stock-koma [app owner]
  (reify
    om/IRender
    (render [self]
      (if (> (:amount app) 0)
        (dom/div #js {:className "stock-koma"}
                 (koma-img (name (:koma-type app)) (koma-class (:role app) (:view app)))
                 (when (> (:amount app) 1)
                   (dom/span #js {:className "stock-amount"} (:amount app))))
        (dom/div nil)))))

(defn komadai [player owner]
  (reify
    om/IRender
    (render [self]
      (apply
        dom/div #js {:className (str "komadai " (if (= (:role player) (:view player)) "komadai-bottom" "komadai-top"))}
        (om/build-all stock-koma
                      (seq
                        (map #(hash-map :role (:role player) :view (:view player) :koma-type (first %) :amount (last %))
                             (:stock player))))))))

(defn side [player owner]
  (reify
    om/IRender
    (render [self]
      (dom/div #js {:className "side"}
               (om/build komadai player)))))

(defn container [app owner]
  (let [move-index (:move-index app)
        view (:view app)
        opponent (next-turn view)
        state (status (subs kifu 0 (+ 36 (* move-index 2))))]
  (reify
    om/IRender
    (render [self]
      (dom/div #js {:className "field"}
               ; 左上に相手、右下に自分(視点側)の駒台
               (om/build side {:role opponent :view view :stock (-> state :stock opponent)})
               (om/build center {:field (:field state) :view view})
               (om/build side {:role view :view view :stock (-> state :stock view)})
               (if (< 0 move-index) (dom/button #js {:id "triangle-left" :aria-label "前の手" :onClick #(om/transact! app :move-index dec)}))
               (if (< move-index total-moves) (dom/button #js {:id "triangle-right" :aria-label "次の手" :onClick #(om/transact! app :move-index inc)})))))))

(om/root
  container
  app-state
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
