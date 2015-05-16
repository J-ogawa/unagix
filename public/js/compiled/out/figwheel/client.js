// Compiled by ClojureScript 0.0-2913 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__41938,args){
var map__41940 = p__41938;
var map__41940__$1 = ((cljs.core.seq_QMARK_.call(null,map__41940))?cljs.core.apply.call(null,cljs.core.hash_map,map__41940):map__41940);
var debug = cljs.core.get.call(null,map__41940__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__41938,var_args){
var args = null;
if (arguments.length > 1) {
var G__41941__i = 0, G__41941__a = new Array(arguments.length -  1);
while (G__41941__i < G__41941__a.length) {G__41941__a[G__41941__i] = arguments[G__41941__i + 1]; ++G__41941__i;}
  args = new cljs.core.IndexedSeq(G__41941__a,0);
} 
return log__delegate.call(this,p__41938,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__41942){
var p__41938 = cljs.core.first(arglist__41942);
var args = cljs.core.rest(arglist__41942);
return log__delegate(p__41938,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__41943){
var map__41945 = p__41943;
var map__41945__$1 = ((cljs.core.seq_QMARK_.call(null,map__41945))?cljs.core.apply.call(null,cljs.core.hash_map,map__41945):map__41945);
var websocket_url = cljs.core.get.call(null,map__41945__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__41946,callback){
var map__41948 = p__41946;
var map__41948__$1 = ((cljs.core.seq_QMARK_.call(null,map__41948))?cljs.core.apply.call(null,cljs.core.hash_map,map__41948):map__41948);
var msg = map__41948__$1;
var dependency_file = cljs.core.get.call(null,map__41948__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__41948__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__41948__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__3917__auto__ = dependency_file;
if(cljs.core.truth_(or__3917__auto__)){
return or__3917__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__41948,map__41948__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__41948,map__41948__$1,msg,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){

return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__41949,p__41950){
var map__41953 = p__41949;
var map__41953__$1 = ((cljs.core.seq_QMARK_.call(null,map__41953))?cljs.core.apply.call(null,cljs.core.hash_map,map__41953):map__41953);
var opts = map__41953__$1;
var url_rewriter = cljs.core.get.call(null,map__41953__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__41954 = p__41950;
var map__41954__$1 = ((cljs.core.seq_QMARK_.call(null,map__41954))?cljs.core.apply.call(null,cljs.core.hash_map,map__41954):map__41954);
var d = map__41954__$1;
var file = cljs.core.get.call(null,map__41954__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__41955,p__41956){
var map__41998 = p__41955;
var map__41998__$1 = ((cljs.core.seq_QMARK_.call(null,map__41998))?cljs.core.apply.call(null,cljs.core.hash_map,map__41998):map__41998);
var opts = map__41998__$1;
var on_jsload = cljs.core.get.call(null,map__41998__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__41998__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__41999 = p__41956;
var map__41999__$1 = ((cljs.core.seq_QMARK_.call(null,map__41999))?cljs.core.apply.call(null,cljs.core.hash_map,map__41999):map__41999);
var files = cljs.core.get.call(null,map__41999__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__11350__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto__,map__41998,map__41998__$1,opts,on_jsload,before_jsload,map__41999,map__41999__$1,files){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto__,map__41998,map__41998__$1,opts,on_jsload,before_jsload,map__41999,map__41999__$1,files){
return (function (state_42022){
var state_val_42023 = (state_42022[(1)]);
if((state_val_42023 === (6))){
var inst_42004 = (state_42022[(7)]);
var inst_42013 = (state_42022[(2)]);
var inst_42014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42015 = [inst_42004];
var inst_42016 = (new cljs.core.PersistentVector(null,1,(5),inst_42014,inst_42015,null));
var inst_42017 = cljs.core.apply.call(null,on_jsload,inst_42016);
var state_42022__$1 = (function (){var statearr_42024 = state_42022;
(statearr_42024[(8)] = inst_42013);

return statearr_42024;
})();
var statearr_42025_42039 = state_42022__$1;
(statearr_42025_42039[(2)] = inst_42017);

(statearr_42025_42039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (5))){
var inst_42020 = (state_42022[(2)]);
var state_42022__$1 = state_42022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42022__$1,inst_42020);
} else {
if((state_val_42023 === (4))){
var state_42022__$1 = state_42022;
var statearr_42026_42040 = state_42022__$1;
(statearr_42026_42040[(2)] = null);

(statearr_42026_42040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (3))){
var inst_42004 = (state_42022[(7)]);
var inst_42007 = console.debug("Figwheel: loaded these files");
var inst_42008 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42004);
var inst_42009 = cljs.core.prn_str.call(null,inst_42008);
var inst_42010 = console.log(inst_42009);
var inst_42011 = cljs.core.async.timeout.call(null,(10));
var state_42022__$1 = (function (){var statearr_42027 = state_42022;
(statearr_42027[(9)] = inst_42007);

(statearr_42027[(10)] = inst_42010);

return statearr_42027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42022__$1,(6),inst_42011);
} else {
if((state_val_42023 === (2))){
var inst_42004 = (state_42022[(7)]);
var inst_42004__$1 = (state_42022[(2)]);
var inst_42005 = cljs.core.not_empty.call(null,inst_42004__$1);
var state_42022__$1 = (function (){var statearr_42028 = state_42022;
(statearr_42028[(7)] = inst_42004__$1);

return statearr_42028;
})();
if(cljs.core.truth_(inst_42005)){
var statearr_42029_42041 = state_42022__$1;
(statearr_42029_42041[(1)] = (3));

} else {
var statearr_42030_42042 = state_42022__$1;
(statearr_42030_42042[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (1))){
var inst_42000 = before_jsload.call(null,files);
var inst_42001 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_42002 = figwheel.client.load_all_js_files.call(null,inst_42001);
var state_42022__$1 = (function (){var statearr_42031 = state_42022;
(statearr_42031[(11)] = inst_42000);

return statearr_42031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42022__$1,(2),inst_42002);
} else {
return null;
}
}
}
}
}
}
});})(c__11350__auto__,map__41998,map__41998__$1,opts,on_jsload,before_jsload,map__41999,map__41999__$1,files))
;
return ((function (switch__11253__auto__,c__11350__auto__,map__41998,map__41998__$1,opts,on_jsload,before_jsload,map__41999,map__41999__$1,files){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_42035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42035[(0)] = state_machine__11254__auto__);

(statearr_42035[(1)] = (1));

return statearr_42035;
});
var state_machine__11254__auto____1 = (function (state_42022){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_42022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e42036){if((e42036 instanceof Object)){
var ex__11257__auto__ = e42036;
var statearr_42037_42043 = state_42022;
(statearr_42037_42043[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42044 = state_42022;
state_42022 = G__42044;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_42022){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_42022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto__,map__41998,map__41998__$1,opts,on_jsload,before_jsload,map__41999,map__41999__$1,files))
})();
var state__11352__auto__ = (function (){var statearr_42038 = f__11351__auto__.call(null);
(statearr_42038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto__);

return statearr_42038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto__,map__41998,map__41998__$1,opts,on_jsload,before_jsload,map__41999,map__41999__$1,files))
);

return c__11350__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__42045,link_href){
var map__42047 = p__42045;
var map__42047__$1 = ((cljs.core.seq_QMARK_.call(null,map__42047))?cljs.core.apply.call(null,cljs.core.hash_map,map__42047):map__42047);
var request_url = cljs.core.get.call(null,map__42047__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__42047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.add_cache_buster.call(null,url);

return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__11350__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto__,parent){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto__,parent){
return (function (state_42068){
var state_val_42069 = (state_42068[(1)]);
if((state_val_42069 === (2))){
var inst_42065 = (state_42068[(2)]);
var inst_42066 = parent.removeChild(orig_link);
var state_42068__$1 = (function (){var statearr_42070 = state_42068;
(statearr_42070[(7)] = inst_42065);

return statearr_42070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42068__$1,inst_42066);
} else {
if((state_val_42069 === (1))){
var inst_42063 = cljs.core.async.timeout.call(null,(200));
var state_42068__$1 = state_42068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42068__$1,(2),inst_42063);
} else {
return null;
}
}
});})(c__11350__auto__,parent))
;
return ((function (switch__11253__auto__,c__11350__auto__,parent){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_42074 = [null,null,null,null,null,null,null,null];
(statearr_42074[(0)] = state_machine__11254__auto__);

(statearr_42074[(1)] = (1));

return statearr_42074;
});
var state_machine__11254__auto____1 = (function (state_42068){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_42068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e42075){if((e42075 instanceof Object)){
var ex__11257__auto__ = e42075;
var statearr_42076_42078 = state_42068;
(statearr_42076_42078[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42079 = state_42068;
state_42068 = G__42079;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_42068){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_42068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto__,parent))
})();
var state__11352__auto__ = (function (){var statearr_42077 = f__11351__auto__.call(null);
(statearr_42077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto__);

return statearr_42077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto__,parent))
);

return c__11350__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__42080){
var map__42082 = p__42080;
var map__42082__$1 = ((cljs.core.seq_QMARK_.call(null,map__42082))?cljs.core.apply.call(null,cljs.core.hash_map,map__42082):map__42082);
var f_data = map__42082__$1;
var request_url = cljs.core.get.call(null,map__42082__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__42082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__42083,files_msg){
var map__42105 = p__42083;
var map__42105__$1 = ((cljs.core.seq_QMARK_.call(null,map__42105))?cljs.core.apply.call(null,cljs.core.hash_map,map__42105):map__42105);
var opts = map__42105__$1;
var on_cssload = cljs.core.get.call(null,map__42105__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__42106_42126 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__42107_42127 = null;
var count__42108_42128 = (0);
var i__42109_42129 = (0);
while(true){
if((i__42109_42129 < count__42108_42128)){
var f_42130 = cljs.core._nth.call(null,chunk__42107_42127,i__42109_42129);
figwheel.client.reload_css_file.call(null,f_42130);

var G__42131 = seq__42106_42126;
var G__42132 = chunk__42107_42127;
var G__42133 = count__42108_42128;
var G__42134 = (i__42109_42129 + (1));
seq__42106_42126 = G__42131;
chunk__42107_42127 = G__42132;
count__42108_42128 = G__42133;
i__42109_42129 = G__42134;
continue;
} else {
var temp__4126__auto___42135 = cljs.core.seq.call(null,seq__42106_42126);
if(temp__4126__auto___42135){
var seq__42106_42136__$1 = temp__4126__auto___42135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42106_42136__$1)){
var c__4704__auto___42137 = cljs.core.chunk_first.call(null,seq__42106_42136__$1);
var G__42138 = cljs.core.chunk_rest.call(null,seq__42106_42136__$1);
var G__42139 = c__4704__auto___42137;
var G__42140 = cljs.core.count.call(null,c__4704__auto___42137);
var G__42141 = (0);
seq__42106_42126 = G__42138;
chunk__42107_42127 = G__42139;
count__42108_42128 = G__42140;
i__42109_42129 = G__42141;
continue;
} else {
var f_42142 = cljs.core.first.call(null,seq__42106_42136__$1);
figwheel.client.reload_css_file.call(null,f_42142);

var G__42143 = cljs.core.next.call(null,seq__42106_42136__$1);
var G__42144 = null;
var G__42145 = (0);
var G__42146 = (0);
seq__42106_42126 = G__42143;
chunk__42107_42127 = G__42144;
count__42108_42128 = G__42145;
i__42109_42129 = G__42146;
continue;
}
} else {
}
}
break;
}

var c__11350__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto__,map__42105,map__42105__$1,opts,on_cssload){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto__,map__42105,map__42105__$1,opts,on_cssload){
return (function (state_42116){
var state_val_42117 = (state_42116[(1)]);
if((state_val_42117 === (2))){
var inst_42112 = (state_42116[(2)]);
var inst_42113 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_42114 = on_cssload.call(null,inst_42113);
var state_42116__$1 = (function (){var statearr_42118 = state_42116;
(statearr_42118[(7)] = inst_42112);

return statearr_42118;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42116__$1,inst_42114);
} else {
if((state_val_42117 === (1))){
var inst_42110 = cljs.core.async.timeout.call(null,(100));
var state_42116__$1 = state_42116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42116__$1,(2),inst_42110);
} else {
return null;
}
}
});})(c__11350__auto__,map__42105,map__42105__$1,opts,on_cssload))
;
return ((function (switch__11253__auto__,c__11350__auto__,map__42105,map__42105__$1,opts,on_cssload){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_42122 = [null,null,null,null,null,null,null,null];
(statearr_42122[(0)] = state_machine__11254__auto__);

(statearr_42122[(1)] = (1));

return statearr_42122;
});
var state_machine__11254__auto____1 = (function (state_42116){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_42116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e42123){if((e42123 instanceof Object)){
var ex__11257__auto__ = e42123;
var statearr_42124_42147 = state_42116;
(statearr_42124_42147[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42148 = state_42116;
state_42116 = G__42148;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_42116){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_42116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto__,map__42105,map__42105__$1,opts,on_cssload))
})();
var state__11352__auto__ = (function (){var statearr_42125 = f__11351__auto__.call(null);
(statearr_42125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto__);

return statearr_42125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto__,map__42105,map__42105__$1,opts,on_cssload))
);

return c__11350__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){
return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__42149){
var map__42154 = p__42149;
var map__42154__$1 = ((cljs.core.seq_QMARK_.call(null,map__42154))?cljs.core.apply.call(null,cljs.core.hash_map,map__42154):map__42154);
var opts = map__42154__$1;
var on_compile_fail = cljs.core.get.call(null,map__42154__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__42154__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__42154__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__42154__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__42154,map__42154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__42155 = cljs.core._EQ_;
var expr__42156 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__42155.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__42156))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__42155.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__42156))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__42155.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42156))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__42154,map__42154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__42154,map__42154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__42154,map__42154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__42154,map__42154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__42154,map__42154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__42154,map__42154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__42154,map__42154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__42154,map__42154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__42154,map__42154__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj42161 = {"detail":url};
return obj42161;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__42162){
var map__42164 = p__42162;
var map__42164__$1 = ((cljs.core.seq_QMARK_.call(null,map__42164))?cljs.core.apply.call(null,cljs.core.hash_map,map__42164):map__42164);
var class$ = cljs.core.get.call(null,map__42164__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__42164__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__42165){
var map__42171 = p__42165;
var map__42171__$1 = ((cljs.core.seq_QMARK_.call(null,map__42171))?cljs.core.apply.call(null,cljs.core.hash_map,map__42171):map__42171);
var ed = map__42171__$1;
var exception_data = cljs.core.get.call(null,map__42171__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__42171__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__42172_42176 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42173_42177 = null;
var count__42174_42178 = (0);
var i__42175_42179 = (0);
while(true){
if((i__42175_42179 < count__42174_42178)){
var msg_42180 = cljs.core._nth.call(null,chunk__42173_42177,i__42175_42179);
console.log(msg_42180);

var G__42181 = seq__42172_42176;
var G__42182 = chunk__42173_42177;
var G__42183 = count__42174_42178;
var G__42184 = (i__42175_42179 + (1));
seq__42172_42176 = G__42181;
chunk__42173_42177 = G__42182;
count__42174_42178 = G__42183;
i__42175_42179 = G__42184;
continue;
} else {
var temp__4126__auto___42185 = cljs.core.seq.call(null,seq__42172_42176);
if(temp__4126__auto___42185){
var seq__42172_42186__$1 = temp__4126__auto___42185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42172_42186__$1)){
var c__4704__auto___42187 = cljs.core.chunk_first.call(null,seq__42172_42186__$1);
var G__42188 = cljs.core.chunk_rest.call(null,seq__42172_42186__$1);
var G__42189 = c__4704__auto___42187;
var G__42190 = cljs.core.count.call(null,c__4704__auto___42187);
var G__42191 = (0);
seq__42172_42176 = G__42188;
chunk__42173_42177 = G__42189;
count__42174_42178 = G__42190;
i__42175_42179 = G__42191;
continue;
} else {
var msg_42192 = cljs.core.first.call(null,seq__42172_42186__$1);
console.log(msg_42192);

var G__42193 = cljs.core.next.call(null,seq__42172_42186__$1);
var G__42194 = null;
var G__42195 = (0);
var G__42196 = (0);
seq__42172_42176 = G__42193;
chunk__42173_42177 = G__42194;
count__42174_42178 = G__42195;
i__42175_42179 = G__42196;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: loading files");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){
if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton"))){
return null;
} else {
figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3917__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3917__auto__)){
return or__3917__auto__;
} else {
return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__42197){
var map__42199 = p__42197;
var map__42199__$1 = ((cljs.core.seq_QMARK_.call(null,map__42199))?cljs.core.apply.call(null,cljs.core.hash_map,map__42199):map__42199);
var opts = map__42199__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__42197 = null;
if (arguments.length > 0) {
var G__42200__i = 0, G__42200__a = new Array(arguments.length -  0);
while (G__42200__i < G__42200__a.length) {G__42200__a[G__42200__i] = arguments[G__42200__i + 0]; ++G__42200__i;}
  p__42197 = new cljs.core.IndexedSeq(G__42200__a,0);
} 
return watch_and_reload__delegate.call(this,p__42197);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__42201){
var p__42197 = cljs.core.seq(arglist__42201);
return watch_and_reload__delegate(p__42197);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map