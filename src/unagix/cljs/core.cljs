(ns unagix.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [figwheel.client :as fw]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [timeout put! chan <!]]
    [clojure.data :as data]
    [clojure.string :as string]))

(enable-console-print!)


; --- init ---

(defonce def-koma-mapping
  [["-ky" "-ke" "-gi" "-ki" "-gy" "-ki" "-gi" "-ke" "-ky"]
   [ nil  "-ka"  nil   nil   nil   nil   nil  "-hi"  nil ]
   ["-hu" "-hu" "-hu" "-hu" "-hu" "-hu" "-hu" "-hu" "-hu"]
   [ nil   nil   nil   nil   nil   nil   nil   nil   nil ]
   [ nil   nil   nil   nil   nil   nil   nil   nil   nil ]
   [ nil   nil   nil   nil   nil   nil   nil   nil   nil ]
   ["+hu" "+hu" "+hu" "+hu" "+hu" "+hu" "+hu" "+hu" "+hu"]
   [ nil  "+hi"  nil   nil   nil   nil   nil  "+ka"  nil ]
   ["+ky" "+ke" "+gi" "+ki" "+gy" "+ki" "+gi" "+ke" "+ky"]])

(defn koma [daf-koma-mapping x y]
  (if-let [_str (get (get def-koma-mapping y) x)]
    {:type (keyword (string/join (rest _str)))
     :owner (if (= "+" (first _str))
              :white
              :black)}))

(defn field-data [koma-mapping]
  "{00 {:x 0 :y 0 :koma {:type 'ky'}} 01 {...} 02 {...}}"
  (reduce
    #(conj %1 %2)
    {}
    (for [x (range 9) y (range 9)] {(str x y) {:x x :y y :koma (koma koma-mapping x y)}})))

(defonce app-state
  (atom
    {:field (field-data koma-mapping)
     :stock {:black {} :white {}}
;     :stock {:black {:hu 5 :ky 0 :ke 0 :gi 0 :ki 0 :ka 0 :hi 0}
;             :white {:hu 5 :ky 0 :ke 0 :gi 0 :ki 0 :ka 0 :hi 0} }
     :turn :white}))


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
   :nhu (get basic-type-vec "ki")
   :nky (get basic-type-vec "ki")
   :nke (get basic-type-vec "ki")
   :ngi (get basic-type-vec "ki")
   :nka (conj (get basic-type-vec "ka" ) {:short [[ 0 -1] [ 0  1] [-1  0] [ 1  0]]})
   :nhi (conj (get basic-type-vec "hi" ) {:short [[-1 -1] [-1  1] [ 1 -1] [ 1  1]]})})

(defn xy [masu]
  (str (:x masu) (:y masu)))

(defn all-moves [app-state player]
  (let [turn-masus (filter
                     #(and ((complement nil?) (:koma %))
                           (= (-> % :koma :owner) player))
                     (map second (:field app-state)))]
    (flatten (map (fn[src] (map
                             (fn[dst] {:type :move :src src :dst dst})
                             (reach-masus (:field app-state) src)))
                  turn-masus))))

(defn check-dst [turn dst]
  (cond
    (nil? dst) :out-of-field
    (nil? (:koma dst)) :empty-space
    (not= (-> dst :koma :owner) turn) :enemy
    :else :mine))

(defn destination [field src reach-vec]
  (get field (string/join (map + [(:x src) (:y src)] reach-vec))))

(defn reach-short [field src reach-vec]
  (let [dst (destination field src reach-vec)]
    (case (check-dst (-> src :koma :owner) dst)
      :out-of-field nil
      :empty-space dst
      :enemy dst
      :mine nil)))

(defn reach-long
  ([field src reach-vec]
   (reach-long field (-> src :koma :owner) src reach-vec []))

  ([field turn src reach-vec reaching]
   (let [dst (destination field src reach-vec)]
     (case (check-dst turn dst)
       :out-of-field reaching
       :empty-space (reach-long field turn dst reach-vec (conj reaching dst))
       :enemy (conj reaching dst)
       :mine  reaching))))

(defn reach-masus [field src]
  (let [type-vec (basic-type-vec (-> src :koma :type))
        direction {:white [1 1] :black [1 -1]}]
    (filter (complement nil?)
            (flatten
              (conj (map #(reach-short field src %)
                         (map #(map * (direction (-> src :koma :owner)) %) (type-vec :short)))
                    (map #(reach-long field src %)
                         (map #(map * (direction (-> src :koma :owner)) %) (type-vec :long))))))))


; --- put ---

(defn putable-masus [field koma-type owner]
  (let [empty-cond      #(nil? (:koma %))
        unbackable-cond (unbackable-cond koma-type owner)
        conditions (cond
                     (= koma-type :hu)      [empty-cond unbackable-cond (non-nihu-cond field owner)]
                     (or (= koma-type :ky)
                         (= koma-type :ke)) [empty-cond unbackable-cond]
                     :else                  [empty-cond])]
    (reduce #(filter %2 %1) (map second field) conditions)))

(defn unbackable-cond [koma-type owner]
  (let [scalar (cond
                 (= koma-type :hu) 1
                 (= koma-type :ky) 1
                 (= koma-type :ke) 2
                :else 0)
        border (owner {:white scalar :black (- 8 scalar)})]
  #((owner {:white >= :black <=}) (:y %) border)))

(defn exist-hu-y-lines [field owner]
  (let [exist-masus (filter #(and ((complement nil?) (:koma %))
                                  (= (-> % :koma :owner) owner)
                                  (= (-> % :koma :type) :hu))
                            (map second field))]
    (distinct
      (map #(:x %) exist-masus))))

(defn non-nihu-cond [field owner]
  #(nil? (some #{(:x %)} (exist-hu-y-lines field owner))))


; --- state after turn ---

(defn turned-state [app-state turn]
  (case (:type turn)
    :move (moved-state app-state (:src turn) (:dst turn))
    :put (put-state app-state (:koma-type turn) (:dst turn))))

(defn moved-state [app-state src dst]
  (let [stocked-state
        (if-let [dst-koma (-> dst :koma)]
          (update-in app-state [:stock (-> src :koma :owner) (:type dst-koma)] inc)
          app-state)
        moved-field (conj (:field app-state)
                          {(xy src) (dissoc src :koma)}
                          {(xy dst) (assoc dst :koma (:koma src))})]
    (assoc
      (assoc stocked-state :field moved-field)
      :turn
      (next-player (-> src :koma :owner)))))

(defn put-state [app-state koma-type dst]
  (let [putter (:turn app-state)
        used-state (update-in app-state [:stock putter koma-type] dec)
        put-field (conj (:field app-state) {(xy dst) {:x (:x dst) :y (:y dst) :koma {:type koma-type :owner putter}}})]
    (assoc used-state :field put-field :turn (next-player putter))))

(def players
  {0 :white 1 :black})

(defn next-player [player]
  (players
    (rem
      (inc ((clojure.set/map-invert players) player))
      2)))


; --- user action ---

(def input-chan
  (chan))

(defn on-masu-click [data owner]


;  (let [ch (chan)]
;    (go
;      (while true
;        (let [v (<! ch)]
;          (println "Read: " v))))
;    (go
;      (>! ch 1)))

  (cond
    ;(:highlight @data) (next! (conj (:selected @app-state) {:dst @data}))
    (:highlight @data) (put! input-chan (conj (:selected @app-state) {:dst @data}))
    (and ((complement nil?) (-> @data :koma))
         (= (-> @data :koma :owner) (:turn @app-state))) (select! {:type :move :src @data})
    :else (neutral!)))

(defn on-stock-koma-click [data owner]
  (select! {:type :put :koma-type data}))


; --- game process ---

(defn main []
  (go
    (while true
      (let [turn (<! input-chan)]                ;;R: 入力を待つ
    (println "===")
    (println turn)
        (next! turn))
  ;    (if (= (:turn @app-state) :black)
  ;      (!> input-chan (best-choice @app-state)))
      )))                             ;;L: 再)

(defn com []
  (go
    (loop []
      (<! (timeout 1000))
      (println "---")
      (if (= (:turn @app-state) :black)
        (if-not (= (:com-thinking @app-state) true)
          ((swap! app-state assoc :com-thinking true)
          (put! input-chan (first (best-choice @app-state)))
          (swap! app-state assoc :com-thinking false))))
      (recur))))

(main)
(com)

(defn next! [turn]
  (swap! app-state conj (turned-state @app-state turn))
  (neutral!)

;
;(go
;  (loop
;  (if (= (:turn @app-state) :black)
;   (let [_best-choice (<! (best-choice @app-state))]
;     (println " ")
;     (println @aaa)
;   (next! (first _best-choice))))
;  ))

;  (if (= (:turn @app-state) :black)
;  (let [ch (chan)]
;    (go
;      (while true
;        (println "1111")
;        (let [_best-choice (<! ch)]
;          (next! (first _best-choice)))))
;    (go
;        (println "2222")
;      (println "send 1")
;      (>! ch (best-choice @app-state))
;        ))) ; [1]


  )

(defn neutral! [_]
  (swap! app-state assoc :field (update-values (:field @app-state) #(dissoc % :highlight))))

(defn select! [turn]
  (let [targets
        (cond
          (= (:type turn) :move) (reach-masus (:field @app-state) (:src turn))
          (= (:type turn) :put) (putable-masus (:field @app-state) (:koma-type turn) (:turn @app-state)))]
  (highlight! targets)
  (swap! app-state assoc :selected turn)))

(defn highlight! [masus]
  (let [non-highlight-field (update-values (:field @app-state) #(dissoc % :highlight))
        highlight-masus (map #(assoc % :highlight true) masus)
        highlighted-field (reduce #(assoc %1 (xy %2) %2)
                                  non-highlight-field
                                  highlight-masus)]
    (swap! app-state assoc :field highlighted-field)))

(defn update-values [m f & args]
  (reduce (fn [r [k v]] (assoc r k (apply f v args))) {} m))


; --- AI ---

(defn choices
  ([app-state]
   (choices app-state (:turn app-state)))

  ([app-state player]
   (all-moves app-state player)))
;        all-puts[app-state]))

;(defn aaaa [depth bafore after

;(defn best [depth tree state targets candity]
;  (println :-----)
;  (println tree)
;  (println state)
;  (println targets)
;  (println candity)
;  (println ((operator state) 1 2))
;  (println :-----)
;  (if (> (count tree) depth)
;    tree
;    (if (= (count targets) 0)
;      (if (nil? candity)
;        (recur depth tree state (choices state) candity)
;        (recur depth (conj tree candity) (turned-state state candity) nil nil))
;      (if (nil? candity)
;        (recur depth tree state (rest targets) (first targets))
;        (let [target-state (turned-state state (first targets))]
;          (cond
;  ;          (and ((complement nil?) (last tree))
;  ;               (<= (score (last tree)) (score target-state)))  target-state
;            (or (nil? candity)
;                ((operator state) (score candity) (score target-state))) (recur depth tree state (rest targets) (first targets))
;            :else                                         (recur depth tree state (rest targets) candity)))))))
;
;(defn operator [state]
;  (if (= (:turn state) :white)
;    <=
;    >=))

(defn best-choice
  ([app-state]
;  (best 2 nil app-state nil nil)))
   (best-choice app-state (choices app-state) nil))

  ([app-state targets candity-tree]
   (if (= (count targets) 0)
     candity-tree
     (let [target-state (turned-state app-state (first targets))]
       (if (nil? candity-tree)
         (recur app-state (rest targets) [(first targets) (best-choice target-state (choices target-state) nil nil)])
         (let [best-child (best-choice target-state (choices target-state) candity-tree nil)]
           (if (< (score best-child) (score (last candity-tree)))
             (recur app-state (rest targets) [(first targets) best-child])
             (recur app-state (rest targets) candity-tree)))))))

  ([app-state targets candity-tree candity]
   (swap! aaa inc)
   (if (= (count targets) 0)
     candity
     (let [target-state (turned-state app-state (first targets))]
       (cond
         (and ((complement nil?) (last candity-tree))
              (<= (score (last candity-tree))
                  (score target-state)))               target-state
         (or (nil? candity)
             (< (score candity) (score target-state))) (recur app-state (rest targets) candity-tree target-state)
         :else                                         (recur app-state (rest targets) candity-tree candity))))))

(defn score [app-state]
;  (+ (move-range-score app-state)
;     (field-unit-score app-state)))
   (field-unit-score app-state))

(defn move-range-score [app-state]
  (- (count (choices app-state :white)) (count (choices app-state :black))))

(defn field-unit-score [app-state]
  (reduce + (map #(koma-score %)
                 (filter #((complement nil?) %)
                         (map #(:koma %) (vals (:field app-state)))))))

(def aaa
  (atom 0))

(defn koma-score [koma]
  (*
    ((:type koma) {:hu 4 :ke 6 :gi 9 :ki 10 :gy 10000 :ka 15 :hi 17 :nhu 11 :nke 11 :ngi 11})
    ((:owner koma) {:white 1 :black -1})))


; --- virtual DOM ---

(defn masu [data owner]
  (reify
    om/IRender
    (render [self]
      (let [koma (:koma data)]
        (dom/div #js {:className (if (:highlight data)
                                   "masu highlight"
                                   "masu")
                      :onClick #(on-masu-click data owner)}
                 (if (:type koma)
                   (dom/img #js {:src (str "img/" (name (:type koma)) ".png")
                                 :className (if (= (:owner koma) :white)
                                              "koma-white"
                                              "koma-black")})))))))

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
      (apply dom/div #js {:className "ban"}
             (om/build-all masu-row (partition 9 (map second (sort app))))))))

(defn stock-koma [app owner]
  (reify
    om/IRender
    (render [self]
      (dom/div #js {}
               (when (> (:amount app) 0)
                 (dom/img #js {:src (str "img/" (name (:koma-type app)) ".png")
                               :className (str "koma-" (name (:role app)))
                               :onClick #(on-stock-koma-click (:koma-type app) owner)}))
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
  (reify
    om/IRender
    (render [self]
      (dom/div #js {:className "field"}
               (om/build side {:role :black :stock (-> app :stock :black)})
               (om/build center (:field app))
               (om/build side {:role :white :stock (-> app :stock :white)})
               (if (= (:turn @app-state) :black)
                 "thinking...")))))

(om/root
  container
  app-state
  {:target (. js/document (getElementById "app"))})

(fw/watch-and-reload)
