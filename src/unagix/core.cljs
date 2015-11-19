(ns ^:figwheel-always unagix.core
  (:require
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
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
    #(conj %1 %2)
    {}
    (for [x (range 9) y (range 9)] {(str x y) {:x x :y y :koma (koma koma-mapping x y)}})))

(defonce app-state
  (atom
    {:field (field-data def-koma-mapping)
     :stock {:black {} :white {}} ; {:hu 1 :ky 1}
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

(defn check-dst [owner dst]
  (cond
    (nil? dst)                        :out-of-field
    (nil? (:koma dst))                :empty-space
    (not= (-> dst :koma :owner) owner) :enemy
    :else                             :mine))

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

(defn reach-masus [field src]
  (->> (conj (map #(reach-short field src %) (reach-vecs (:koma src) :short))
             (map #(reach-long field src %) (reach-vecs (:koma src) :long)))
       (filter (complement nil?))
       (flatten)))


; --- put ---

; (defn unbackable-cond [koma-type owner]
;   (let [scalar (cond
;                  (= koma-type :hu) 1
;                  (= koma-type :ky) 1
;                  (= koma-type :ke) 2
;                  :else 0)
;         border (owner {:white scalar :black (- 8 scalar)})]
;     #((owner {:white >= :black <=}) (:y %) border)))

; (defn unbackable-length [koma-type]
;   (cond
;     (= koma-type :hu) 1
;     (= koma-type :ky) 1
;     (= koma-type :ke) 2
;     :else 0))
;
; (defn unbackable-cond [koma-type owner]
;   #((if (= owner :white) >= <=)
;     (:y %)
;     (if (= owner :white) unbackable-length (- 8 unbackable-length))))

(defn backable? [masu koma-type owner]
  (cond
    (or (= koma-type :hu)
        (= koma-type :ky)) (or (and (= owner :white) (> (:y masu) 0))
                               (and (= owner :black) (< (:y masu) 8)))
    (= koma-type :ke)      (or (and (= owner :white) (> (:y masu) 1))
                               (and (= owner :black) (< (:y masu) 7)))
    :else                  true))





(defn exist-hu-y-lines [field owner]
  (->> field
       (map second)
       (filter #(and ((complement nil?) (:koma %))
                     (= (-> % :koma :owner) owner)
                     (= (-> % :koma :type) :hu)))
       (map #(:x %)) ;(map :x) if can
       (distinct)))
;  (let [exist-masus (filter #(and ((complement nil?) (:koma %))
;                                  (= (-> % :koma :owner) owner)
;                                  (= (-> % :koma :type) :hu))
;                            (map second field))]
;    (distinct
;      (map #(:x %) exist-masus))))

(defn non-nihu-cond [field owner]
  #(nil? (some #{(:x %)} (exist-hu-y-lines field owner))))

(defn not-nihu? [masu field owner]
  (->> (exist-hu-y-lines field owner)
       (some #(= (:x masu) %))
       (nil?)))

(defn putable-masus [field koma-type owner]
  (cond->> field
    true              (map second)
    true              (filter #(nil? (:koma %)))
    true              (filter #(backable? % koma-type owner))
    (= koma-type :hu) (filter #(not-nihu? % field owner))))

;       (let [empty-cond      #(nil? (:koma %))
;             unbackable-cond (unbackable-cond koma-type owner)
;             conditions (cond
;                          (= koma-type :hu)      [empty-cond unbackable-cond (non-nihu-cond field owner)]
;                          (or (= koma-type :ky)
;                              (= koma-type :ke)) [empty-cond unbackable-cond]
;                          :else                  [empty-cond])]
;         (reduce #(filter %2 %1) (map second field) conditions)))


; --- state after turn ---

(def players {0 :white 1 :black})

(defn next-player [player]
  (players (rem
             (inc ((clojure.set/map-invert players) player))
             2)))

(defn moved-state [app-state src dst]
  (cond-> app-state
    (-> dst :koma) (update-in [:stock (-> src :koma :owner) (-> dst :koma :type)] inc)
    true           (update :field #(conj %
                                         {(xy src) (dissoc src :koma)}
                                         {(xy dst) (assoc dst :koma (:koma src))}))
    true           (update :turn next-player)))

(defn put-state [app-state koma-type dst]
  (-> app-state
      (update-in [:stock (:turn app-state) koma-type] dec)
      (update :field #(conj % {(xy dst) {:x (:x dst) :y (:y dst) :koma {:type koma-type :owner (:turn app-state)}}}))
      (update :turn next-player)))

(defn turned-state [app-state turn]
  (cond-> app-state
    (= (:type turn) :move) (moved-state (:src turn) (:dst turn))
    (= (:type turn) :put)  (put-state (:koma-type turn) (:dst turn))))


; --- user action ---

(def input-chan
  (chan))

(defn promote-selected-koma! []
  (swap! app-state update-in [:selected :src :koma :type] #(keyword (str "n" (name %)))))

(defn promote-unless-selected-movable! [dst]
  (let [selected (:selected @app-state)
        _type    (-> selected :src :koma :type)]
    (if
      (some #(= _type %) [:hu :ky :ke])
      (let [y-move (* (last (direction (-> selected :src :koma :owner)))
                      (-> basic-type-vec _type vals first first last))]
        (if-not (field-contains? {:x 0 :y (+ (:y dst) y-move)})
          (promote-selected-koma!))))))
;   (if
;     (some #(= (-> @app-state :selected :src :koma :type) %) [:hu :ky :ke])
;     (let [y-move (* (last (direction (-> @app-state :selected :src :koma :owner)))
;                     (-> basic-type-vec (-> @app-state :selected :src :koma :type) vals first first last))]
;       (if-not (field-contains? {:x 0 :y (+ (:y dst) y-move)})
;         (promote-selected-koma!)))))

(defn promote-if-owner-want-to! [dst]
  (if
    (and
      (= :move (-> @app-state :selected :type))
      (= -1 (.indexOf (str (-> @app-state :selected :src :koma :type)) "n"))
      (enemy-area? (:y dst) (-> @app-state :selected :src :koma :owner))
      (js/confirm "成りますか?"))
    (promote-selected-koma!)))

(defn operate-next! [dst]
  (promote-unless-selected-movable! dst)
  (promote-if-owner-want-to! dst)
  (put! input-chan (conj (:selected @app-state) {:dst dst})))

(defn update-values [m f & args]
  (reduce (fn [r [k v]] (assoc r k (apply f v args))) {} m))

(defn highlight! [masus]
  (let [non-highlight-field (update-values (:field @app-state) #(dissoc % :highlight))
        highlight-masus (map #(assoc % :highlight true) masus)
        highlighted-field (reduce #(assoc %1 (xy %2) %2)
                                  non-highlight-field
                                  highlight-masus)]
    (swap! app-state assoc :field highlighted-field)))

(defn select! [turn]
  (let [targets
        (cond
          (= (:type turn) :move) (reach-masus (:field @app-state) (:src turn))
          (= (:type turn) :put) (putable-masus (:field @app-state) (:koma-type turn) (:turn @app-state)))]
    (highlight! targets)
    (swap! app-state assoc :selected turn)))

(defn neutral! []
  (swap! app-state assoc :field (update-values (:field @app-state) #(dissoc % :highlight))))

(defn on-masu-click [data owner]
  (cond
    (:highlight @data) (operate-next! @data)
    (= (-> @data :koma :owner) (:turn @app-state)) (select! {:type :move :src @data})
    :else (neutral!)))

(defn on-stock-koma-click [data owner]
  (select! {:type :put :koma-type data}))


; --- game process ---

(defn next! [turn]
  (swap! app-state conj (turned-state @app-state turn))
  (neutral!))

(defn main []
  (go
    (while true
      (let [turn (<! input-chan)]
        (next! turn)))))

(main)


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

