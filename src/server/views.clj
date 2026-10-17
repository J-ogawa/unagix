(ns server.views
  (:use [hiccup core page]))

(defn index-page []
  (html5
    [:head
     [:meta {:charset "utf-8"}]
     [:meta {:name "viewport" :content "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}]
     [:title "unagix"]
     (include-css "/css/style.css")]
    [:body
     [:div#main-area
      [:div#app]]]
     (include-js "js/compiled/unagix.js")

    ))
