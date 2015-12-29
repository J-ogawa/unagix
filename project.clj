(defproject unagix "0.1.0-SNAPSHOT"
  :min-lein-version "2.0.0"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.189"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [sablono "0.3.4"]
                 [ring/ring-defaults "0.1.2"]
                 [ring/ring-jetty-adapter "1.3.2"]
                 [compojure "1.1.8"]
                 [hiccup "1.0.5"]
                 [org.omcljs/om "1.0.0-alpha24"]
                 [figwheel-sidecar "0.5.0-2" :scope "test"]]

  :web-content "resources/public"

  :aot [server.core]
  :main server.core
  :ring {:handler server.core/app}

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.3.1"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]

              :figwheel { :on-jsload "unagix.core/on-js-reload" }

              :compiler {:main unagix.core
                         :asset-path "js/compiled/out"
                         :output-to "resources/public/js/compiled/unagix.js"
                         :output-dir "resources/public/js/compiled/out"
                         :source-map-timestamp true }}
             {:id "min"
              :source-paths ["src"]
              :compiler {:output-to "resources/public/js/compiled/unagix.js"
                         :main unagix.core
                         :optimizations :advanced
                         :pretty-print false}}]}

  :uberjar-name "unagix-standalone.jar")
