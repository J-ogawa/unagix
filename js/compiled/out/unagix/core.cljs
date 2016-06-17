(ns ^:figwheel-always unagix.core
  (:require
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [timeout put! chan <!]]
    [clojure.data :as data]
    [clojure.string :as string])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(defonce kifu
  (apply str (drop 1 (-> js/window .-location .-search))))

(defonce move-index (atom 0))

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

(defn movable-masus [field src]
  (->> (conj (map #(reach-short field src %) (reach-vecs (field src) :short))
             (map #(reach-long field src %) (reach-vecs (field src) :long)))
       (filter (complement nil?))
       (flatten)))

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
    (as-> status (reduce #(reflected-state %1 %2) status (map (fn[x](apply str x)) (partition-all 2 (drop 36 (seq kifu))))))))

; --- virtual DOM ---

(defn masu [data owner]
  (reify
    om/IRender
    (render [self]
      (dom/div #js {:className "masu" }
               (if (last data)
                 (dom/img #js {:src (str "images/" (apply str (drop 1 (name (last data)))) ".png")
                               :className (if (= (subs (name (last data)) 0 1) "-")
                                            "koma-white"
                                            "koma-black")}))))))

(defn masu-row [app owner]
  (reify
    om/IRender
    (render [self]
      (apply dom/div #js {:className "masu-row"}
             (om/build-all masu app)))))

(defn center [app owner]
  (reify
    om/IRender
    (render [self]
      (dom/div #js {:className "center"}
               (dom/div #js {:className "button"})
               (apply dom/div #js {:className "ban"}(om/build-all masu-row (partition 6 (sort-by first app))))
               (dom/div #js {:className "button"})))))

(defn stock-koma [app owner]
  (reify
    om/IRender
    (render [self]
      (dom/div #js {}
               (when (> (:amount app) 0)
                 (dom/img #js {:src (str "images/" (name (:koma-type app)) ".png")
                               :className (str "koma-" (name (:role app)))
                               }))
               (when (> (:amount app) 1)
                 (:amount app))))))

(defn komadai [player owner]
  (reify
    om/IRender
    (render [self]
      (apply
        dom/div #js {:className "komadai"
                     :id (str "komadai-" (name (:role player)))}
        (om/build-all stock-koma
                      (seq
                        (map #(hash-map :role (:role player) :koma-type (first %) :amount (last %))
                             (:stock player))))))))

(defn side [player owner]
  (reify
    om/IRender
    (render [self]
      (dom/div #js {:className "side"}
               (om/build komadai player)))))

(defn container [app owner]
  (let [state (status (subs kifu 0 (+ 36 (* app 2))))]
  (reify
    om/IRender
    (render [self]
      (dom/div #js {:className "field"}
               (om/build side {:role :white :stock (-> state :stock :-)})
               (om/build center (:field state))
               (om/build side {:role :black :stock (-> state :stock :+)})
               (if (< 0 app) (dom/div #js {:id "triangle-left" :onClick #(swap! move-index dec)}))
               (if (< (+ 36 (* app 2)) (count kifu)) (dom/div #js {:id "triangle-right" :onClick #(swap! move-index inc)})))))))

(om/root
  container
  move-index
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
