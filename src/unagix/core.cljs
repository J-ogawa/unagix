(ns ^:figwheel-always unagix.core
  (:require
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [timeout put! chan <!]]
    [clojure.data :as data]
    [clojure.string :as string])
  (:require-macros [cljs.core.async.macros :refer [go]]))

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

(def field-size {:x 9 :y 9})

(def enemy-line 3)

(defn koma [mapping x y]
  (if-let [_str (-> (get mapping y) (get x))]
    {:type (keyword (string/join (rest _str)))
     :owner (if (= "+" (first _str))
              :white
              :black)}))

(defn field-data [koma-mapping]
  "{00 {:x 0 :y 0 :koma {:type 'ky'}} 01 {...} 02 {...}}"
  (reduce
    conj
    (for [x (range 9) y (range 9)]
      {(str x y) {:x x :y y :koma (koma koma-mapping x y)}})))

(defonce app-state
  (atom
    {:field (field-data def-koma-mapping)
     :stock {:black {} :white {}} ; {:hu 1 :ky 1}
     :phasing :white
     :history []}))


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
   :nka (conj {:long  [[-1 -1] [-1  1] [ 1 -1] [ 1  1]]} {:short [[ 0 -1] [ 0  1] [-1  0] [ 1  0]]})
   :nhi (conj {:long  [[-1  0] [ 0 -1] [ 0  1] [ 1  0]]} {:short [[-1 -1] [-1  1] [ 1 -1] [ 1  1]]})})

(defn enemy-area? [y player]
  (if (= :white player)
    (< y enemy-line)
    (> y (- (:y field-size) enemy-line 1))))

(def direction {:white [1 1] :black [1 -1]})

(defn field-contains? [coordinate]
  (and
    (>= (:x coordinate) 0)
    (<  (:x coordinate) (:x field-size))
    (>= (:y coordinate) 0)
    (<  (:y coordinate) (:y field-size))))

(defn xy [masu] (str (:x masu) (:y masu)))

(defn all-moves [app-state player]
  (let [srcs (->> app-state
                  :field
                  (map second)
                  (filter #(and ((complement nil?) (:koma %))
                                (= (-> % :koma :owner) player))))]
    (flatten (map (fn[src] (map
                             (fn[dst] {:type :move :src src :dst dst})
                             (movable-masus (:field app-state) src)))
                  srcs))))

(defn check-dst [owner dst]
  (cond
    (nil? dst)                         :out-of-field
    (nil? (:koma dst))                 :empty-space
    (not= (-> dst :koma :owner) owner) :enemy
    :else                              :mine))

(defn destination [field src reach-vec]
  (get field (string/join (map + [(:x src) (:y src)] reach-vec))))

(defn reach-short [field src reach-vec]
  (let [dst (destination field src reach-vec)]
    (case (check-dst (-> src :koma :owner) dst)
      :out-of-field nil
      :empty-space  dst
      :enemy        dst
      :mine         nil)))

(defn reach-long
  ([field src reach-vec]
   (reach-long field (-> src :koma :owner) src reach-vec []))

  ([field owner src reach-vec reaching]
   (let [dst (destination field src reach-vec)]
     (case (check-dst owner dst)
       :out-of-field reaching
       :empty-space  (reach-long field owner dst reach-vec (conj reaching dst))
       :enemy        (conj reaching dst)
       :mine         reaching))))

(defn reach-vecs [koma vec-kind]
  (map #(map * (direction (-> koma :owner)) %)
       ((get basic-type-vec (-> koma :type)) vec-kind)))

(defn movable-masus [field src]
  (->> (conj (map #(reach-short field src %) (reach-vecs (:koma src) :short))
             (map #(reach-long field src %) (reach-vecs (:koma src) :long)))
       (filter (complement nil?))
       (flatten)))


; --- put ---

(defn movable? [masu koma-type owner]
  (cond
    (or (= koma-type :hu)
        (= koma-type :ky)) (or (and (= owner :white) (> (:y masu) 0))
                               (and (= owner :black) (< (:y masu) 8)))
    (= koma-type :ke)      (or (and (= owner :white) (> (:y masu) 1))
                               (and (= owner :black) (< (:y masu) 7)))
    :else                  true))

(defn not-nihu? [masu field koma-type owner]
  (if (= koma-type :hu)
    (->> field
         (map second)
         (filter #(and ((complement nil?) (:koma %))
                       (= (-> % :koma :owner) owner)
                       (= (-> % :koma :type) :hu)))
         (map #(:x %)) ;(map :x) if can
         (distinct)
         (some #(= (:x masu) %))
         (nil?))
    true))

(defn putable-masus [field koma-type owner]
  (->> field
       (map second)
       (filter #(nil? (:koma %)))
       (filter #(movable? % koma-type owner))
       (filter #(not-nihu? % field koma-type owner))))

; --- state after turn ---

(def players {0 :white 1 :black})

(defn next-player [player]
  (players (rem
             (inc ((clojure.set/map-invert players) player))
             2)))

(defn moved-state [app-state src dst promote]
  (cond-> app-state
    (-> dst :koma)   (update-in [:stock (-> src :koma :owner) (-> dst :koma :type)] inc)
    true             (update :field #(conj %
                                           {(xy src) (dissoc src :koma)}
                                           {(xy dst) (assoc dst :koma (:koma src))}))
    (= promote true) (update-in [:field (xy dst) :koma :type] #(keyword (str "n" (name %))))
    true             (update :phasing next-player)))

(defn put-state [app-state koma-type dst]
  (-> app-state
      (update-in [:stock (:phasing app-state) koma-type] dec)
      (update :field #(conj % {(xy dst) {:x (:x dst) :y (:y dst) :koma {:type koma-type :owner (:phasing app-state)}}}))
      (update :phasing next-player)))

(defn turned-state [app-state turn]
  (cond-> app-state
    (= (:type turn) :move) (moved-state (:src turn) (:dst turn) (:promote turn))
    (= (:type turn) :put)  (put-state (:koma-type turn) (:dst turn))
    true                   (update :history conj turn)
    true                   (dissoc :selected)))


; --- user action ---

(def input-chan
  (chan))

(defn promotable? [selected dst]
  (and
    (= :move (:type selected))
    (enemy-area? (:y dst) (-> selected :src :koma :owner))
    (= -1 (.indexOf (str (-> selected :src :koma :type)) "n"))))

(defn workable-after? [selected dst]
  (let [_type (-> selected :src :koma :type)]
    (or
      (not (some #(= _type %) [:hu :ky :ke]))
      (let [y-move (* (last (direction (-> selected :src :koma :owner)))
                      (-> basic-type-vec _type vals first first last))]
        (field-contains? {:x 0 :y (+ (:y dst) y-move)})))))

(defn promote [selected dst]
  (and (promotable? selected dst)
       (or (not (workable-after? selected dst)) (js/confirm "成りますか?"))))

(defn operate-next! [dst]
  (put! input-chan (-> (:selected @app-state)
                       (assoc :promote (promote (:selected @app-state) dst))
                       (assoc :dst dst))))

(defn update-values [m f & args]
  (reduce (fn [r [k v]] (assoc r k (apply f v args))) {} m))

(defn highlight! [masus]
  (swap! app-state assoc :field
         (->
           (:field @app-state)
           (update-values #(dissoc % :highlight))
           (as-> field
             (reduce #(assoc %1 (xy %2) %2)
                     field
                     (map #(assoc % :highlight true) masus))))))

(defn select! [turn]
  (let [targets
        (cond
          (= (:type turn) :move) (movable-masus (:field @app-state) (:src turn))
          (= (:type turn) :put) (putable-masus (:field @app-state) (:koma-type turn) (:phasing @app-state)))]
    (highlight! targets)
    (swap! app-state assoc :selected turn)))

(defn neutral! []
  (swap! app-state assoc :field (update-values (:field @app-state) #(dissoc % :highlight))))

(defn on-masu-click [data owner]
  (cond
    (:highlight @data)                             (operate-next! @data)
    (= (-> @data :koma :owner) (:phasing @app-state)) (select! {:type :move :src @data})
    :else                                          (neutral!)))

(defn on-stock-koma-click [data owner]
  (select! {:type :put :koma-type data}))


; --- game process ---

(defn next! [turn]
  (reset! app-state (turned-state @app-state turn))
  (neutral!)

  (println @app-state)

  ; (if (= (:phasing @app-state) :black)
  ;   (println (nega-max (root-point @app-state) 3)))

  (if (= (:phasing @app-state) :black)
    (let [ch (chan)]
      (go
        (while true
          (println "1111")
          (let [_best-choice (<! ch)]
            (next! _best-choice))))
      (go
        (println "2222")
        (println "send 1")
        (>! ch (-> (nega-max @app-state 2 nil)
                   :history
                   (get (count (:history @app-state)))))
        )))
  )

(defn main []
  (go
    (while true
      (let [turn (<! input-chan)]
        (next! turn)))))

(main)


; --- AI ---

(defn all-turns [app-state]
  (all-moves app-state (:phasing app-state)))

(defn children [state]
  (->> state
       all-turns
       (map #(turned-state state %))))

; (defn nega-max [state depth border]
;   (if (= depth 0)
;     state
;     (loop [_children (children state)
;            best-end nil]
;
;       (let [end-of-first (nega-max (first _children) (dec depth) best-end)]
;         (cond
;           (= (count _children) 0) best-end
;           (and
;             (= depth 1)
;             (not (nil? border))
;             ((comparison (:phasing state)) (score border) (score end-of-first))) border
;           :else (recur (rest _children)
;                        (if (and (not (nil? best-end))
;                                 ((comparison (:phasing state)) (score best-end) (score end-of-first)))
;                          best-end
;                          end-of-first)))))))

(defn nega-max [state depth]
  (if (= depth 0)
    state
    (loop [_children (children state)
           best-end nil]

      (let [end-of-first (nega-max (first _children) (dec depth) best-end)]
        (cond
          (= (count _children) 0) best-end
          (and
            (= depth 1)
            (not (nil? best-end))
            ((comparison (:phasing state)) (score best-end) (score end-of-first))) best-end
          :else (recur (rest _children) end-of-first))))))

(defn nega-max2 [state depth]
  (if (= depth 0)
    state
    (cond->> (children state)
         true (map #(nega-max2 % (dec depth)))
         true (sort #(compare (score %1) (score %2)))
         (= (:phasing state) :white) (last)
         (= (:phasing state) :black) (first))))


(defn adopt [owner a b]
  (if ((comparison (:phasing state)) (score a) (score b))
    a
    b))

(defn comparison [owner]
  (if (= owner :white) >= <=))

(defn score [app-state]
  ;  (+ (move-range-score app-state)
  ;     (field-unit-score app-state)))
  (+
 ;  (move-range-score app-state)
   (field-unit-score app-state)
   ; (stock-unit-score app-state)
   ))
;  (field-unit-score app-state))

(defn move-range-score [app-state]
  (- (count (all-turns app-state :white)) (count (all-turns app-state :black))))

(defn field-unit-score [app-state]
  (reduce + (map #(koma-score %)
                 (filter #((complement nil?) %)
                         (map #(:koma %) (vals (:field app-state)))))))

(defn stock-unit-score [app-state]
  (->>
    app-state
    :stock
    (map #(hash-map (first %) (second %))) ; {:black {:hu 1 :ky 2 ...}} {:white {:hu 1 ...}}
    (map #(+ (* (owner-score first %) (type-score (-> % second first)) (-> % second second)) 4))
    (reduce +)))

(def aaa
  (atom 0))

(defn koma-score [koma]
  (*
   (type-score (:type koma))
   (owner-score (:owner koma))))

(defn type-score [_type]
  ({:hu 4 :ky 5 :ke 6 :gi 9 :ki 10 :gy 10000 :ka 15 :hi 17 :nhu 11 :nky 11 :nke 11 :ngi 11 :nka 30 :nhi 35} _type))

(defn owner-score [owner]
  ({:white 1 :black -1} owner))

(defn print-des []
  (print "---ndants")
  (print (root-point @app-state))
  (print (-descendants (root-point @app-state) 1))
  (print "+++ndants"))

(defn print-best2 []
  (println "---best2")
  (println (best-choice2 @app-state))
  (println "+++best2"))

;(print (nega-max @app-state 3 nil))
;(print @aaa)
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
                   (dom/img #js {:src (str "http://unagi.xyz/img/" (name (:type koma)) ".png")
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
                 (dom/img #js {:src (str "http://unagi.xyz/img/" (name (:koma-type app)) ".png")
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
               (om/build side {:role :white :stock (-> app :stock :white)})))))

(om/root
  container
  app-state
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

