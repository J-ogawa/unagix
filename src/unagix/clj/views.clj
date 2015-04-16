(ns unagix.clj.views
  (:use [hiccup core page]))

(defn index-page []
  (html5
    [:head
     [:title "unagix"]
     (include-css "/css/style.css")]
     (include-js "http://fb.me/react-0.11.1.js")
     (include-js "js/compiled/out/goog/base.js")
     (include-js "js/compiled/unagix.js")
    [:body
     [:div#main-area
      [:div#app]]
     [:script {:type "text/javascript"} "goog.require(\"unagix.cljs.core\");"]]))
