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

(def field-size
  {:x 9 :y 9})

(def enemy-line
  3)

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
   :nhu (get basic-type-vec :ki)
   :nky (get basic-type-vec :ki)
   :nke (get basic-type-vec :ki)
   :ngi (get basic-type-vec :ki)
   :nka (conj (get basic-type-vec :ka ) {:short [[ 0 -1] [ 0  1] [-1  0] [ 1  0]]})
   :nhi (conj (get basic-type-vec :hi ) {:short [[-1 -1] [-1  1] [ 1 -1] [ 1  1]]})})

(defn promotable? [_type]
  (= -1 (.indexOf (str _type) "n")))

(defn enemy-area? [y player]
  (if (= :white player)
    (< y enemy-line)
    (> y (- (:y field-size) enemy-line 1))))

(defn promoted [_type]
  (keyword (string/join ["n" (subs (str _type) 1)])))

(defn promote-unless-selected-movable! [dst]
  (let [selected (:selected @app-state)
        _type    (-> selected :src :koma :type)]
    (if
      (some #(= _type %) [:hu :ky :ke])
      (let [y-move (* (last (direction (-> selected :src :koma :owner)))
                    (-> basic-type-vec _type vals first first last))]
        (if-not (field-contains? {:x 0 :y (+ (:y dst) y-move)})
          (promote-selected-koma!))))))

(defn field-contains? [coordinate]
  (and
    (>= (:x coordinate) 0)
    (<  (:x coordinate) (:x field-size))
    (>= (:y coordinate) 0)
    (<  (:y coordinate) (:y field-size))))

(def direction
  {:white [1 1] :black [1 -1]})

(defn xy [masu]
  (str (:x masu) (:y masu)))

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

(defn promote-selected-koma! [_]
  (println "promote!")
  (swap! app-state assoc-in [:selected :src :koma :type] (promoted (-> @app-state :selected :src :koma :type))))

(defn operate-next [dst]
     (promote-unless-selected-movable! dst)
     (let [selected (-> @app-state :selected)
           selected-koma (-> selected :src :koma)]
       (if
         (and
           (= :move (-> selected :type))
           (enemy-area? (:y dst) (-> selected-koma :owner))
           (promotable? (-> selected-koma :type))
           (js/confirm "promote?"))
         (promote-selected-koma!)))

     (put! input-chan (conj (:selected @app-state) {:dst dst})))

(defn on-masu-click [data owner]
  (println (-> @app-state :selected))
  (println @data)
  (cond
    (:highlight @data) (operate-next @data)
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
        (next! turn))
      ;    (if (= (:turn @app-state) :black)
      ;      (!> input-chan (best-choice @app-state)))
      )))                             ;;L: 再)

(main)

(defn next! [turn]
  (swap! app-state conj (turned-state @app-state turn))
  (neutral!))

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
