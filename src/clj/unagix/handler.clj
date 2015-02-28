(ns unagix.handler
  (:gen-class)
  (:use ring.adapter.jetty)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.handler :as handler]
   ;         [ring.adapter.jetty :as run-jetty]
            [ring.util.response :refer [resource-response response]]
            [ring.middleware.json :as middleware]))
            ;[ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defroutes app-routes
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (GET "/widgets" [] (response [{:name "Widget 1"} {:name "Widget 2"}]))
  (route/resources "/")
  (route/not-found "Not Found"))

;(def app
;  (wrap-defaults app-routes site-defaults))

(def app
  (-> (handler/api app-routes)
      (middleware/wrap-json-body)
      (middleware/wrap-json-response)))

(defn -main []
    (let [port (Integer/parseInt (get (System/getenv) "PORT" "80"))]
          (run-jetty app-routes {:port port})))
