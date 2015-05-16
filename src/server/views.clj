(ns server.views
  (:use [hiccup core page]))

(defn index-page []
  (html5
    [:head
     [:title "unagix"]
     (include-css "/css/style.css")]
    [:body
     [:div#main-area
      [:div#app]]]
     (include-js "js/compiled/unagix.js")

    ))
