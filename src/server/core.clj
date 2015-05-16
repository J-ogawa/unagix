(ns server.core
  (:gen-class)
  (:use server.views)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defroutes app-routes
  (GET "/" []
       (println "root")
       "root")
  (GET "/sss/:id" [id]
       (println id)
       id)
  (GET "/shogi" [id]
       (index-page))
  (route/files "/")
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))

(defn -main [& [port]]
  (let [port (Integer. (or port 5000))]
    (jetty/run-jetty app {:port port :join? false})))