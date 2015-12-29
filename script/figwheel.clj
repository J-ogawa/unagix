(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
 {:figwheel-options {}
  :build-ids ["dev"]
  :all-builds
  [{:id "dev"
    :figwheel true
    :source-paths ["src"]
    :compiler {:main 'server.core
               :asset-path "js"
               :output-to "resources/public/js/compiled/unagix.js"
               :output-dir "resources/public/js/compiled/out"
               :verbose true}}]})

(ra/cljs-repl)
