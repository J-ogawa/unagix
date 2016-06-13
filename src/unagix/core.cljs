(ns ^:figwheel-always unagix.core
  (:require
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [timeout put! chan <!]]
    [clojure.data :as data]
    [clojure.string :as string])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(defonce app-state
  (atom {}))

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
(def direction {:+ [1 1] :- [1 -1]})

(defn check-dst [owner dst]
  (cond
    (nil? dst)                         :out-of-field
    (nil? (:koma dst))                 :empty-space
    (not= (-> dst :koma :owner) owner) :enemy
    :else                              :mine))

(defn destination [field src reach-vec]
  (get field (keyword (string/join (map + [(subs (name src) 1 2) (subs (name src) 2 3)] reach-vec)))))

(defn reach-short [field src reach-vec]
  (let [dst (destination field src reach-vec)]
    (case (check-dst (subs (name src) 0 1) dst)
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
  (print "movable-masus")
  (print field)
  (print src)
  (->> (conj (map #(reach-short field src %) (reach-vecs (field src) :short))
             (map #(reach-long field src %) (reach-vecs (field src) :long)))
       (filter (complement nil?))
       (flatten)))

(def stock-types ["hu" "ky" "ke" "gi" "ki" "ka" "hi" "gy"])

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

(defn- reflected-state [state move]
  (let [target (->> move first to-coordinate)]
    (if (nil? (->> state :field target))
      (let [
            stock-type (stock-types (> (rem (js/parseInt (last move) 36)) 0))]
        (->
          state
          (assoc-in [:field target] (str (:turn state) stock-type))
          (update-in [:stock (:turn state) stock-type] dec)
          (update :turn next-turn)))
      (let [move-value (js/parseInt (last move) 36)
            dst ((rem move-value 20) (movable-masus (state :field) target))]
        (cond->
          state
          ((complement nil?) (->> state :field dst)) (update-in [:stock (-> state :field dst (subs 1 3))] inc)
          true (assoc-in [:field dst] (-> state :field target))
          true (assoc-in [:field target] nil)
          true (update :turn next-turn))))))


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
                   (dom/img #js {:src (str "http://unagi.xyz/img/" (subs (name (last data)) 1 3) ".png")
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
(print (partition 6 (sort-by first app)))
  (reify
    om/IRender
    (render [self]
      (apply dom/div #js {:className "ban"}
             (om/build-all masu-row (partition 6 (sort-by first app)))))))

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
           ;    (om/build side {:role :black :stock (-> app :stock :+)})
               (om/build center (:field app)) ))))
           ;    (om/build side {:role :white :stock (-> app :stock :-)})))))

(println (status "abcdef__________a__________________a"))
(reset! app-state (status "abcdef__________a__________________a"))

(om/root
  container
  app-state
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

