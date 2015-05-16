// Compiled by ClojureScript 0.0-2913 {}
goog.provide('unagix.cljs.core');
goog.require('cljs.core');
goog.require('servant.worker');
goog.require('om.dom');
goog.require('clojure.data');
goog.require('figwheel.client');
goog.require('servant.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof unagix.cljs.core.def_koma_mapping !== 'undefined'){
} else {
unagix.cljs.core.def_koma_mapping = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-ky","-ke","-gi","-ki","-gy","-ki","-gi","-ke","-ky"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"-ka",null,null,null,null,null,"-hi",null], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-hu","-hu","-hu","-hu","-hu","-hu","-hu","-hu","-hu"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+hu","+hu","+hu","+hu","+hu","+hu","+hu","+hu","+hu"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"+hi",null,null,null,null,null,"+ka",null], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+ky","+ke","+gi","+ki","+gy","+ki","+gi","+ke","+ky"], null)], null);
}
unagix.cljs.core.field_size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(9),new cljs.core.Keyword(null,"y","y",-1757859776),(9)], null);
unagix.cljs.core.enemy_line = (3);
unagix.cljs.core.koma = (function koma(daf_koma_mapping,x,y){
var temp__4124__auto__ = cljs.core.get.call(null,cljs.core.get.call(null,unagix.cljs.core.def_koma_mapping,y),x);
if(cljs.core.truth_(temp__4124__auto__)){
var _str = temp__4124__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,clojure.string.join.call(null,cljs.core.rest.call(null,_str))),new cljs.core.Keyword(null,"owner","owner",-392611939),((cljs.core._EQ_.call(null,"+",cljs.core.first.call(null,_str)))?new cljs.core.Keyword(null,"white","white",-483998618):new cljs.core.Keyword(null,"black","black",1294279647))], null);
} else {
return null;
}
});
unagix.cljs.core.field_data = (function field_data(koma_mapping){

return cljs.core.reduce.call(null,(function (p1__32079_SHARP_,p2__32080_SHARP_){
return cljs.core.conj.call(null,p1__32079_SHARP_,p2__32080_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4673__auto__ = (function iter__32087(s__32088){
return (new cljs.core.LazySeq(null,(function (){
var s__32088__$1 = s__32088;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32088__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var x = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4669__auto__ = ((function (s__32088__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function iter__32089(s__32090){
return (new cljs.core.LazySeq(null,((function (s__32088__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__32090__$1 = s__32090;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32090__$1);
if(temp__4126__auto____$1){
var s__32090__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32090__$2)){
var c__4671__auto__ = cljs.core.chunk_first.call(null,s__32090__$2);
var size__4672__auto__ = cljs.core.count.call(null,c__4671__auto__);
var b__32092 = cljs.core.chunk_buffer.call(null,size__4672__auto__);
if((function (){var i__32091 = (0);
while(true){
if((i__32091 < size__4672__auto__)){
var y = cljs.core._nth.call(null,c__4671__auto__,i__32091);
cljs.core.chunk_append.call(null,b__32092,new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(x),cljs.core.str(y)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"koma","koma",965480009),unagix.cljs.core.koma.call(null,koma_mapping,x,y)], null)], true, false));

var G__32093 = (i__32091 + (1));
i__32091 = G__32093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32092),iter__32089.call(null,cljs.core.chunk_rest.call(null,s__32090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32092),null);
}
} else {
var y = cljs.core.first.call(null,s__32090__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(x),cljs.core.str(y)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"koma","koma",965480009),unagix.cljs.core.koma.call(null,koma_mapping,x,y)], null)], true, false),iter__32089.call(null,cljs.core.rest.call(null,s__32090__$2)));
}
} else {
return null;
}
break;
}
});})(s__32088__$1,x,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__32088__$1,x,xs__4624__auto__,temp__4126__auto__))
;
var fs__4670__auto__ = cljs.core.seq.call(null,iterys__4669__auto__.call(null,cljs.core.range.call(null,(9))));
if(fs__4670__auto__){
return cljs.core.concat.call(null,fs__4670__auto__,iter__32087.call(null,cljs.core.rest.call(null,s__32088__$1)));
} else {
var G__32094 = cljs.core.rest.call(null,s__32088__$1);
s__32088__$1 = G__32094;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4673__auto__.call(null,cljs.core.range.call(null,(9)));
})());
});
if(typeof unagix.cljs.core.app_state !== 'undefined'){
} else {
unagix.cljs.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),unagix.cljs.core.field_data.call(null,unagix.cljs.core.koma_mapping),new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1294279647),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"white","white",-483998618),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"white","white",-483998618)], null));
}
unagix.cljs.core.basic_type_vec = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ka","ka",-2014845534),new cljs.core.Keyword(null,"ngi","ngi",1315069379),new cljs.core.Keyword(null,"nky","nky",-541763033),new cljs.core.Keyword(null,"nke","nke",-261840662),new cljs.core.Keyword(null,"hu","hu",-1762884758),new cljs.core.Keyword(null,"nhi","nhi",2104569163),new cljs.core.Keyword(null,"gy","gy",483233100),new cljs.core.Keyword(null,"ke","ke",388998741),new cljs.core.Keyword(null,"gi","gi",615521304),new cljs.core.Keyword(null,"nhu","nhu",-2032454310),new cljs.core.Keyword(null,"ki","ki",688764251),new cljs.core.Keyword(null,"nka","nka",317092222),new cljs.core.Keyword(null,"hi","hi",-1821422114),new cljs.core.Keyword(null,"ky","ky",-1069334593)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),cljs.core.get.call(null,unagix.cljs.core.basic_type_vec,new cljs.core.Keyword(null,"ki","ki",688764251)),cljs.core.get.call(null,unagix.cljs.core.basic_type_vec,new cljs.core.Keyword(null,"ki","ki",688764251)),cljs.core.get.call(null,unagix.cljs.core.basic_type_vec,new cljs.core.Keyword(null,"ki","ki",688764251)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null)], null),cljs.core.conj.call(null,cljs.core.get.call(null,unagix.cljs.core.basic_type_vec,new cljs.core.Keyword(null,"hi","hi",-1821422114)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-2)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),cljs.core.get.call(null,unagix.cljs.core.basic_type_vec,new cljs.core.Keyword(null,"ki","ki",688764251)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null),cljs.core.conj.call(null,cljs.core.get.call(null,unagix.cljs.core.basic_type_vec,new cljs.core.Keyword(null,"ka","ka",-2014845534)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null)], null)]);
unagix.cljs.core.promotable_QMARK_ = (function promotable_QMARK_(_type){
return cljs.core._EQ_.call(null,(-1),[cljs.core.str(_type)].join('').indexOf("n"));
});
unagix.cljs.core.enemy_area_QMARK_ = (function enemy_area_QMARK_(y,player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",-483998618),player)){
return (y < unagix.cljs.core.enemy_line);
} else {
return (y > ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(unagix.cljs.core.field_size) - unagix.cljs.core.enemy_line) - (1)));
}
});
unagix.cljs.core.promoted = (function promoted(_type){
return cljs.core.keyword.call(null,clojure.string.join.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["n",cljs.core.subs.call(null,[cljs.core.str(_type)].join(''),(1))], null)));
});
unagix.cljs.core.promote_unless_selected_movable_BANG_ = (function promote_unless_selected_movable_BANG_(dst){
var selected = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.cljs.core.app_state));
var _type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(selected)));
if(cljs.core.truth_(cljs.core.some.call(null,((function (selected,_type){
return (function (p1__32095_SHARP_){
return cljs.core._EQ_.call(null,_type,p1__32095_SHARP_);
});})(selected,_type))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu","hu",-1762884758),new cljs.core.Keyword(null,"ky","ky",-1069334593),new cljs.core.Keyword(null,"ke","ke",388998741)], null)))){
var y_move = (cljs.core.last.call(null,unagix.cljs.core.direction.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(selected))))) * cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.vals.call(null,_type.call(null,unagix.cljs.core.basic_type_vec))))));
if(cljs.core.not.call(null,unagix.cljs.core.field_contains_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dst) + y_move)], null)))){
return unagix.cljs.core.promote_selected_koma_BANG_.call(null);
} else {
return null;
}
} else {
return null;
}
});
unagix.cljs.core.field_contains_QMARK_ = (function field_contains_QMARK_(coordinate){
return ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coordinate) >= (0))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coordinate) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(unagix.cljs.core.field_size))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coordinate) >= (0))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coordinate) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(unagix.cljs.core.field_size)));
});
unagix.cljs.core.direction = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)], null);
unagix.cljs.core.xy = (function xy(masu){
return [cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(masu)),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(masu))].join('');
});
unagix.cljs.core.check_dst = (function check_dst(turn,dst){
if((dst == null)){
return new cljs.core.Keyword(null,"out-of-field","out-of-field",676261408);
} else {
if((new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(dst) == null)){
return new cljs.core.Keyword(null,"empty-space","empty-space",-2083677523);
} else {
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(dst)),turn)){
return new cljs.core.Keyword(null,"enemy","enemy",-956472047);
} else {
return new cljs.core.Keyword(null,"mine","mine",-130428525);

}
}
}
});
unagix.cljs.core.destination = (function destination(field,src,reach_vec){
return cljs.core.get.call(null,field,clojure.string.join.call(null,cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(src),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(src)], null),reach_vec)));
});
unagix.cljs.core.reach_short = (function reach_short(field,src,reach_vec){
var dst = unagix.cljs.core.destination.call(null,field,src,reach_vec);
var G__32097 = (((unagix.cljs.core.check_dst.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src)),dst) instanceof cljs.core.Keyword))?unagix.cljs.core.check_dst.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src)),dst).fqn:null);
switch (G__32097) {
case "mine":
return null;

break;
case "enemy":
return dst;

break;
case "empty-space":
return dst;

break;
case "out-of-field":
return null;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(unagix.cljs.core.check_dst.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src)),dst))].join('')));

}
});
unagix.cljs.core.reach_long = (function() {
var reach_long = null;
var reach_long__3 = (function (field,src,reach_vec){
return reach_long.call(null,field,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src)),src,reach_vec,cljs.core.PersistentVector.EMPTY);
});
var reach_long__5 = (function (field,turn,src,reach_vec,reaching){
var dst = unagix.cljs.core.destination.call(null,field,src,reach_vec);
var G__32100 = (((unagix.cljs.core.check_dst.call(null,turn,dst) instanceof cljs.core.Keyword))?unagix.cljs.core.check_dst.call(null,turn,dst).fqn:null);
switch (G__32100) {
case "mine":
return reaching;

break;
case "enemy":
return cljs.core.conj.call(null,reaching,dst);

break;
case "empty-space":
return reach_long.call(null,field,turn,dst,reach_vec,cljs.core.conj.call(null,reaching,dst));

break;
case "out-of-field":
return reaching;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(unagix.cljs.core.check_dst.call(null,turn,dst))].join('')));

}
});
reach_long = function(field,turn,src,reach_vec,reaching){
switch(arguments.length){
case 3:
return reach_long__3.call(this,field,turn,src);
case 5:
return reach_long__5.call(this,field,turn,src,reach_vec,reaching);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reach_long.cljs$core$IFn$_invoke$arity$3 = reach_long__3;
reach_long.cljs$core$IFn$_invoke$arity$5 = reach_long__5;
return reach_long;
})()
;
unagix.cljs.core.reach_masus = (function reach_masus(field,src){
var type_vec = unagix.cljs.core.basic_type_vec.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src)));
var direction = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)], null);
return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.flatten.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,((function (type_vec,direction){
return (function (p1__32102_SHARP_){
return unagix.cljs.core.reach_short.call(null,field,src,p1__32102_SHARP_);
});})(type_vec,direction))
,cljs.core.map.call(null,((function (type_vec,direction){
return (function (p1__32103_SHARP_){
return cljs.core.map.call(null,cljs.core._STAR_,direction.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src))),p1__32103_SHARP_);
});})(type_vec,direction))
,type_vec.call(null,new cljs.core.Keyword(null,"short","short",1928760516)))),cljs.core.map.call(null,((function (type_vec,direction){
return (function (p1__32104_SHARP_){
return unagix.cljs.core.reach_long.call(null,field,src,p1__32104_SHARP_);
});})(type_vec,direction))
,cljs.core.map.call(null,((function (type_vec,direction){
return (function (p1__32105_SHARP_){
return cljs.core.map.call(null,cljs.core._STAR_,direction.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src))),p1__32105_SHARP_);
});})(type_vec,direction))
,type_vec.call(null,new cljs.core.Keyword(null,"long","long",-171452093)))))));
});
unagix.cljs.core.putable_masus = (function putable_masus(field,koma_type,owner){
var empty_cond = (function (p1__32106_SHARP_){
return (new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(p1__32106_SHARP_) == null);
});
var unbackable_cond = unagix.cljs.core.unbackable_cond.call(null,koma_type,owner);
var conditions = ((cljs.core._EQ_.call(null,koma_type,new cljs.core.Keyword(null,"hu","hu",-1762884758)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [empty_cond,unbackable_cond,unagix.cljs.core.non_nihu_cond.call(null,field,owner)], null):(((cljs.core._EQ_.call(null,koma_type,new cljs.core.Keyword(null,"ky","ky",-1069334593))) || (cljs.core._EQ_.call(null,koma_type,new cljs.core.Keyword(null,"ke","ke",388998741))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [empty_cond,unbackable_cond], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [empty_cond], null)
));
return cljs.core.reduce.call(null,((function (empty_cond,unbackable_cond,conditions){
return (function (p1__32108_SHARP_,p2__32107_SHARP_){
return cljs.core.filter.call(null,p2__32107_SHARP_,p1__32108_SHARP_);
});})(empty_cond,unbackable_cond,conditions))
,cljs.core.map.call(null,cljs.core.second,field),conditions);
});
unagix.cljs.core.unbackable_cond = (function unbackable_cond(koma_type,owner){
var scalar = ((cljs.core._EQ_.call(null,koma_type,new cljs.core.Keyword(null,"hu","hu",-1762884758)))?(1):((cljs.core._EQ_.call(null,koma_type,new cljs.core.Keyword(null,"ky","ky",-1069334593)))?(1):((cljs.core._EQ_.call(null,koma_type,new cljs.core.Keyword(null,"ke","ke",388998741)))?(2):(0)
)));
var border = owner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),scalar,new cljs.core.Keyword(null,"black","black",1294279647),((8) - scalar)], null));
return ((function (scalar,border){
return (function (p1__32109_SHARP_){
return owner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),cljs.core._GT__EQ_,new cljs.core.Keyword(null,"black","black",1294279647),cljs.core._LT__EQ_], null)).call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__32109_SHARP_),border);
});
;})(scalar,border))
});
unagix.cljs.core.exist_hu_y_lines = (function exist_hu_y_lines(field,owner){
var exist_masus = cljs.core.filter.call(null,(function (p1__32110_SHARP_){
var and__3905__auto__ = cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(p1__32110_SHARP_));
if(cljs.core.truth_(and__3905__auto__)){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(p1__32110_SHARP_)),owner)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(p1__32110_SHARP_)),new cljs.core.Keyword(null,"hu","hu",-1762884758)));
} else {
return and__3905__auto__;
}
}),cljs.core.map.call(null,cljs.core.second,field));
return cljs.core.distinct.call(null,cljs.core.map.call(null,((function (exist_masus){
return (function (p1__32111_SHARP_){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__32111_SHARP_);
});})(exist_masus))
,exist_masus));
});
unagix.cljs.core.non_nihu_cond = (function non_nihu_cond(field,owner){
return (function (p1__32112_SHARP_){
return (cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__32112_SHARP_)], true),unagix.cljs.core.exist_hu_y_lines.call(null,field,owner)) == null);
});
});
unagix.cljs.core.turned_state = (function turned_state(app_state,turn){
var G__32114 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(turn) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(turn).fqn:null);
switch (G__32114) {
case "put":
return unagix.cljs.core.put_state.call(null,app_state,new cljs.core.Keyword(null,"koma-type","koma-type",1128170803).cljs$core$IFn$_invoke$arity$1(turn),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(turn));

break;
case "move":
return unagix.cljs.core.moved_state.call(null,app_state,new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(turn),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(turn));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(turn))].join('')));

}
});
unagix.cljs.core.moved_state = (function moved_state(app_state,src,dst){
var stocked_state = (function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(dst);
if(cljs.core.truth_(temp__4124__auto__)){
var dst_koma = temp__4124__auto__;
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(dst_koma)], null),cljs.core.inc);
} else {
return app_state;
}
})();
var moved_field = cljs.core.conj.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(app_state),new cljs.core.PersistentArrayMap.fromArray([unagix.cljs.core.xy.call(null,src),cljs.core.dissoc.call(null,src,new cljs.core.Keyword(null,"koma","koma",965480009))], true, false),new cljs.core.PersistentArrayMap.fromArray([unagix.cljs.core.xy.call(null,dst),cljs.core.assoc.call(null,dst,new cljs.core.Keyword(null,"koma","koma",965480009),new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src))], true, false));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,stocked_state,new cljs.core.Keyword(null,"field","field",-1302436500),moved_field),new cljs.core.Keyword(null,"turn","turn",75759344),unagix.cljs.core.next_player.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src))));
});
unagix.cljs.core.put_state = (function put_state(app_state,koma_type,dst){
var putter = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(app_state);
var used_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stock","stock",-877288674),putter,koma_type], null),cljs.core.dec);
var put_field = cljs.core.conj.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(app_state),new cljs.core.PersistentArrayMap.fromArray([unagix.cljs.core.xy.call(null,dst),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dst),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dst),new cljs.core.Keyword(null,"koma","koma",965480009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),koma_type,new cljs.core.Keyword(null,"owner","owner",-392611939),putter], null)], null)], true, false));
return cljs.core.assoc.call(null,used_state,new cljs.core.Keyword(null,"field","field",-1302436500),put_field,new cljs.core.Keyword(null,"turn","turn",75759344),unagix.cljs.core.next_player.call(null,putter));
});
unagix.cljs.core.players = new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.Keyword(null,"white","white",-483998618),(1),new cljs.core.Keyword(null,"black","black",1294279647)], null);
unagix.cljs.core.next_player = (function next_player(player){
return unagix.cljs.core.players.call(null,cljs.core.rem.call(null,(clojure.set.map_invert.call(null,unagix.cljs.core.players).call(null,player) + (1)),(2)));
});
unagix.cljs.core.input_chan = cljs.core.async.chan.call(null);
unagix.cljs.core.promote_selected_koma_BANG_ = (function promote_selected_koma_BANG_(_){
cljs.core.println.call(null,"promote!");

return cljs.core.swap_BANG_.call(null,unagix.cljs.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"koma","koma",965480009),new cljs.core.Keyword(null,"type","type",1174270348)], null),unagix.cljs.core.promoted.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.cljs.core.app_state)))))));
});
unagix.cljs.core.operate_next = (function operate_next(dst){
unagix.cljs.core.promote_unless_selected_movable_BANG_.call(null,dst);

var selected_32116 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.cljs.core.app_state));
var selected_koma_32117 = new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(selected_32116));
if(cljs.core.truth_((function (){var and__3905__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(selected_32116));
if(and__3905__auto__){
var and__3905__auto____$1 = unagix.cljs.core.enemy_area_QMARK_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dst),new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(selected_koma_32117));
if(and__3905__auto____$1){
var and__3905__auto____$2 = unagix.cljs.core.promotable_QMARK_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(selected_koma_32117));
if(and__3905__auto____$2){
return confirm("promote?");
} else {
return and__3905__auto____$2;
}
} else {
return and__3905__auto____$1;
}
} else {
return and__3905__auto__;
}
})())){
unagix.cljs.core.promote_selected_koma_BANG_.call(null);
} else {
}

return cljs.core.async.put_BANG_.call(null,unagix.cljs.core.input_chan,cljs.core.conj.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.cljs.core.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dst","dst",844682948),dst], null)));
});
unagix.cljs.core.on_masu_click = (function on_masu_click(data,owner){
cljs.core.println.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.cljs.core.app_state)));

cljs.core.println.call(null,cljs.core.deref.call(null,data));

if(cljs.core.truth_(new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))){
return unagix.cljs.core.operate_next.call(null,cljs.core.deref.call(null,data));
} else {
if(cljs.core.truth_((function (){var and__3905__auto__ = cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));
if(cljs.core.truth_(and__3905__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.cljs.core.app_state)));
} else {
return and__3905__auto__;
}
})())){
return unagix.cljs.core.select_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,data)], null));
} else {
return unagix.cljs.core.neutral_BANG_.call(null);

}
}
});
unagix.cljs.core.on_stock_koma_click = (function on_stock_koma_click(data,owner){
return unagix.cljs.core.select_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"koma-type","koma-type",1128170803),data], null));
});
unagix.cljs.core.main = (function main(){
var c__11350__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto__){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto__){
return (function (state_32158){
var state_val_32159 = (state_32158[(1)]);
if((state_val_32159 === (7))){
var inst_32149 = (state_32158[(2)]);
var inst_32150 = unagix.cljs.core.next_BANG_.call(null,inst_32149);
var state_32158__$1 = (function (){var statearr_32160 = state_32158;
(statearr_32160[(7)] = inst_32150);

return statearr_32160;
})();
var statearr_32161_32174 = state_32158__$1;
(statearr_32161_32174[(2)] = null);

(statearr_32161_32174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (6))){
var inst_32154 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32162_32175 = state_32158__$1;
(statearr_32162_32175[(2)] = inst_32154);

(statearr_32162_32175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (5))){
var state_32158__$1 = state_32158;
var statearr_32163_32176 = state_32158__$1;
(statearr_32163_32176[(2)] = null);

(statearr_32163_32176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (4))){
var state_32158__$1 = state_32158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32158__$1,(7),unagix.cljs.core.input_chan);
} else {
if((state_val_32159 === (3))){
var inst_32156 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32158__$1,inst_32156);
} else {
if((state_val_32159 === (2))){
var state_32158__$1 = state_32158;
var statearr_32164_32177 = state_32158__$1;
(statearr_32164_32177[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (1))){
var state_32158__$1 = state_32158;
var statearr_32166_32178 = state_32158__$1;
(statearr_32166_32178[(2)] = null);

(statearr_32166_32178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__11350__auto__))
;
return ((function (switch__11253__auto__,c__11350__auto__){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_32170 = [null,null,null,null,null,null,null,null];
(statearr_32170[(0)] = state_machine__11254__auto__);

(statearr_32170[(1)] = (1));

return statearr_32170;
});
var state_machine__11254__auto____1 = (function (state_32158){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_32158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e32171){if((e32171 instanceof Object)){
var ex__11257__auto__ = e32171;
var statearr_32172_32179 = state_32158;
(statearr_32172_32179[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32180 = state_32158;
state_32158 = G__32180;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_32158){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_32158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto__))
})();
var state__11352__auto__ = (function (){var statearr_32173 = f__11351__auto__.call(null);
(statearr_32173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto__);

return statearr_32173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto__))
);

return c__11350__auto__;
});
unagix.cljs.core.main.call(null);
unagix.cljs.core.next_BANG_ = (function next_BANG_(turn){
cljs.core.swap_BANG_.call(null,unagix.cljs.core.app_state,cljs.core.conj,unagix.cljs.core.turned_state.call(null,cljs.core.deref.call(null,unagix.cljs.core.app_state),turn));

return unagix.cljs.core.neutral_BANG_.call(null);
});
unagix.cljs.core.neutral_BANG_ = (function neutral_BANG_(_){
return cljs.core.swap_BANG_.call(null,unagix.cljs.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"field","field",-1302436500),unagix.cljs.core.update_values.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.cljs.core.app_state)),(function (p1__32181_SHARP_){
return cljs.core.dissoc.call(null,p1__32181_SHARP_,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
})));
});
unagix.cljs.core.select_BANG_ = (function select_BANG_(turn){
var targets = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(turn),new cljs.core.Keyword(null,"move","move",-2110884309)))?unagix.cljs.core.reach_masus.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.cljs.core.app_state)),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(turn)):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(turn),new cljs.core.Keyword(null,"put","put",1299772570)))?unagix.cljs.core.putable_masus.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.cljs.core.app_state)),new cljs.core.Keyword(null,"koma-type","koma-type",1128170803).cljs$core$IFn$_invoke$arity$1(turn),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.cljs.core.app_state))):null));
unagix.cljs.core.highlight_BANG_.call(null,targets);

return cljs.core.swap_BANG_.call(null,unagix.cljs.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),turn);
});
unagix.cljs.core.highlight_BANG_ = (function highlight_BANG_(masus){
var non_highlight_field = unagix.cljs.core.update_values.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.cljs.core.app_state)),(function (p1__32182_SHARP_){
return cljs.core.dissoc.call(null,p1__32182_SHARP_,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
}));
var highlight_masus = cljs.core.map.call(null,((function (non_highlight_field){
return (function (p1__32183_SHARP_){
return cljs.core.assoc.call(null,p1__32183_SHARP_,new cljs.core.Keyword(null,"highlight","highlight",-800930873),true);
});})(non_highlight_field))
,masus);
var highlighted_field = cljs.core.reduce.call(null,((function (non_highlight_field,highlight_masus){
return (function (p1__32184_SHARP_,p2__32185_SHARP_){
return cljs.core.assoc.call(null,p1__32184_SHARP_,unagix.cljs.core.xy.call(null,p2__32185_SHARP_),p2__32185_SHARP_);
});})(non_highlight_field,highlight_masus))
,non_highlight_field,highlight_masus);
return cljs.core.swap_BANG_.call(null,unagix.cljs.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"field","field",-1302436500),highlighted_field);
});
/**
* @param {...*} var_args
*/
unagix.cljs.core.update_values = (function() { 
var update_values__delegate = function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__32188){
var vec__32189 = p__32188;
var k = cljs.core.nth.call(null,vec__32189,(0),null);
var v = cljs.core.nth.call(null,vec__32189,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
};
var update_values = function (m,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__32190__i = 0, G__32190__a = new Array(arguments.length -  2);
while (G__32190__i < G__32190__a.length) {G__32190__a[G__32190__i] = arguments[G__32190__i + 2]; ++G__32190__i;}
  args = new cljs.core.IndexedSeq(G__32190__a,0);
} 
return update_values__delegate.call(this,m,f,args);};
update_values.cljs$lang$maxFixedArity = 2;
update_values.cljs$lang$applyTo = (function (arglist__32191){
var m = cljs.core.first(arglist__32191);
arglist__32191 = cljs.core.next(arglist__32191);
var f = cljs.core.first(arglist__32191);
var args = cljs.core.rest(arglist__32191);
return update_values__delegate(m,f,args);
});
update_values.cljs$core$IFn$_invoke$arity$variadic = update_values__delegate;
return update_values;
})()
;
unagix.cljs.core.masu = (function masu(data,owner){
if(typeof unagix.cljs.core.t32195 !== 'undefined'){
} else {

/**
* @constructor
*/
unagix.cljs.core.t32195 = (function (owner,data,masu,meta32196){
this.owner = owner;
this.data = data;
this.masu = masu;
this.meta32196 = meta32196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.cljs.core.t32195.prototype.om$core$IRender$ = true;

unagix.cljs.core.t32195.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
var koma = new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.div({"onClick": ((function (koma,self__$1){
return (function (){
return unagix.cljs.core.on_masu_click.call(null,self__.data,self__.owner);
});})(koma,self__$1))
, "className": (cljs.core.truth_(new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(self__.data))?"masu highlight":"masu")},(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(koma))?React.DOM.img({"className": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(koma),new cljs.core.Keyword(null,"white","white",-483998618)))?"koma-white":"koma-black"), "src": [cljs.core.str("img/"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(koma))),cljs.core.str(".png")].join('')}):null));
});

unagix.cljs.core.t32195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32197){
var self__ = this;
var _32197__$1 = this;
return self__.meta32196;
});

unagix.cljs.core.t32195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32197,meta32196__$1){
var self__ = this;
var _32197__$1 = this;
return (new unagix.cljs.core.t32195(self__.owner,self__.data,self__.masu,meta32196__$1));
});

unagix.cljs.core.t32195.cljs$lang$type = true;

unagix.cljs.core.t32195.cljs$lang$ctorStr = "unagix.cljs.core/t32195";

unagix.cljs.core.t32195.cljs$lang$ctorPrWriter = (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"unagix.cljs.core/t32195");
});

unagix.cljs.core.__GT_t32195 = (function __GT_t32195(owner__$1,data__$1,masu__$1,meta32196){
return (new unagix.cljs.core.t32195(owner__$1,data__$1,masu__$1,meta32196));
});

}

return (new unagix.cljs.core.t32195(owner,data,masu,cljs.core.PersistentArrayMap.EMPTY));
});
unagix.cljs.core.masu_row = (function masu_row(app,owner){
if(typeof unagix.cljs.core.t32201 !== 'undefined'){
} else {

/**
* @constructor
*/
unagix.cljs.core.t32201 = (function (owner,app,masu_row,meta32202){
this.owner = owner;
this.app = app;
this.masu_row = masu_row;
this.meta32202 = meta32202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.cljs.core.t32201.prototype.om$core$IRender$ = true;

unagix.cljs.core.t32201.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "masu-row"},om.core.build_all.call(null,unagix.cljs.core.masu,self__.app));
});

unagix.cljs.core.t32201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32203){
var self__ = this;
var _32203__$1 = this;
return self__.meta32202;
});

unagix.cljs.core.t32201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32203,meta32202__$1){
var self__ = this;
var _32203__$1 = this;
return (new unagix.cljs.core.t32201(self__.owner,self__.app,self__.masu_row,meta32202__$1));
});

unagix.cljs.core.t32201.cljs$lang$type = true;

unagix.cljs.core.t32201.cljs$lang$ctorStr = "unagix.cljs.core/t32201";

unagix.cljs.core.t32201.cljs$lang$ctorPrWriter = (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"unagix.cljs.core/t32201");
});

unagix.cljs.core.__GT_t32201 = (function __GT_t32201(owner__$1,app__$1,masu_row__$1,meta32202){
return (new unagix.cljs.core.t32201(owner__$1,app__$1,masu_row__$1,meta32202));
});

}

return (new unagix.cljs.core.t32201(owner,app,masu_row,cljs.core.PersistentArrayMap.EMPTY));
});
unagix.cljs.core.center = (function center(app,owner){
if(typeof unagix.cljs.core.t32207 !== 'undefined'){
} else {

/**
* @constructor
*/
unagix.cljs.core.t32207 = (function (owner,app,center,meta32208){
this.owner = owner;
this.app = app;
this.center = center;
this.meta32208 = meta32208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.cljs.core.t32207.prototype.om$core$IRender$ = true;

unagix.cljs.core.t32207.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "ban"},om.core.build_all.call(null,unagix.cljs.core.masu_row,cljs.core.partition.call(null,(9),cljs.core.map.call(null,cljs.core.second,cljs.core.sort.call(null,self__.app)))));
});

unagix.cljs.core.t32207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32209){
var self__ = this;
var _32209__$1 = this;
return self__.meta32208;
});

unagix.cljs.core.t32207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32209,meta32208__$1){
var self__ = this;
var _32209__$1 = this;
return (new unagix.cljs.core.t32207(self__.owner,self__.app,self__.center,meta32208__$1));
});

unagix.cljs.core.t32207.cljs$lang$type = true;

unagix.cljs.core.t32207.cljs$lang$ctorStr = "unagix.cljs.core/t32207";

unagix.cljs.core.t32207.cljs$lang$ctorPrWriter = (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"unagix.cljs.core/t32207");
});

unagix.cljs.core.__GT_t32207 = (function __GT_t32207(owner__$1,app__$1,center__$1,meta32208){
return (new unagix.cljs.core.t32207(owner__$1,app__$1,center__$1,meta32208));
});

}

return (new unagix.cljs.core.t32207(owner,app,center,cljs.core.PersistentArrayMap.EMPTY));
});
unagix.cljs.core.stock_koma = (function stock_koma(app,owner){
if(typeof unagix.cljs.core.t32213 !== 'undefined'){
} else {

/**
* @constructor
*/
unagix.cljs.core.t32213 = (function (owner,app,stock_koma,meta32214){
this.owner = owner;
this.app = app;
this.stock_koma = stock_koma;
this.meta32214 = meta32214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.cljs.core.t32213.prototype.om$core$IRender$ = true;

unagix.cljs.core.t32213.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return React.DOM.div({},(((new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.app) > (0)))?React.DOM.img({"onClick": ((function (self__$1){
return (function (){
return unagix.cljs.core.on_stock_koma_click.call(null,new cljs.core.Keyword(null,"koma-type","koma-type",1128170803).cljs$core$IFn$_invoke$arity$1(self__.app),self__.owner);
});})(self__$1))
, "className": [cljs.core.str("koma-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(self__.app)))].join(''), "src": [cljs.core.str("img/"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"koma-type","koma-type",1128170803).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str(".png")].join('')}):null),(((new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.app) > (1)))?new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.app):null));
});

unagix.cljs.core.t32213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32215){
var self__ = this;
var _32215__$1 = this;
return self__.meta32214;
});

unagix.cljs.core.t32213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32215,meta32214__$1){
var self__ = this;
var _32215__$1 = this;
return (new unagix.cljs.core.t32213(self__.owner,self__.app,self__.stock_koma,meta32214__$1));
});

unagix.cljs.core.t32213.cljs$lang$type = true;

unagix.cljs.core.t32213.cljs$lang$ctorStr = "unagix.cljs.core/t32213";

unagix.cljs.core.t32213.cljs$lang$ctorPrWriter = (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"unagix.cljs.core/t32213");
});

unagix.cljs.core.__GT_t32213 = (function __GT_t32213(owner__$1,app__$1,stock_koma__$1,meta32214){
return (new unagix.cljs.core.t32213(owner__$1,app__$1,stock_koma__$1,meta32214));
});

}

return (new unagix.cljs.core.t32213(owner,app,stock_koma,cljs.core.PersistentArrayMap.EMPTY));
});
unagix.cljs.core.komadai = (function komadai(player,owner){
if(typeof unagix.cljs.core.t32220 !== 'undefined'){
} else {

/**
* @constructor
*/
unagix.cljs.core.t32220 = (function (owner,player,komadai,meta32221){
this.owner = owner;
this.player = player;
this.komadai = komadai;
this.meta32221 = meta32221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.cljs.core.t32220.prototype.om$core$IRender$ = true;

unagix.cljs.core.t32220.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"id": [cljs.core.str("komadai-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(self__.player)))].join(''), "className": "komadai"},om.core.build_all.call(null,unagix.cljs.core.stock_koma,cljs.core.seq.call(null,cljs.core.map.call(null,((function (self__$1){
return (function (p1__32216_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"koma-type","koma-type",1128170803),new cljs.core.Keyword(null,"amount","amount",364489504)],[new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(self__.player),cljs.core.first.call(null,p1__32216_SHARP_),cljs.core.last.call(null,p1__32216_SHARP_)]);
});})(self__$1))
,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(self__.player)))));
});

unagix.cljs.core.t32220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32222){
var self__ = this;
var _32222__$1 = this;
return self__.meta32221;
});

unagix.cljs.core.t32220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32222,meta32221__$1){
var self__ = this;
var _32222__$1 = this;
return (new unagix.cljs.core.t32220(self__.owner,self__.player,self__.komadai,meta32221__$1));
});

unagix.cljs.core.t32220.cljs$lang$type = true;

unagix.cljs.core.t32220.cljs$lang$ctorStr = "unagix.cljs.core/t32220";

unagix.cljs.core.t32220.cljs$lang$ctorPrWriter = (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"unagix.cljs.core/t32220");
});

unagix.cljs.core.__GT_t32220 = (function __GT_t32220(owner__$1,player__$1,komadai__$1,meta32221){
return (new unagix.cljs.core.t32220(owner__$1,player__$1,komadai__$1,meta32221));
});

}

return (new unagix.cljs.core.t32220(owner,player,komadai,cljs.core.PersistentArrayMap.EMPTY));
});
unagix.cljs.core.side = (function side(player,owner){
if(typeof unagix.cljs.core.t32226 !== 'undefined'){
} else {

/**
* @constructor
*/
unagix.cljs.core.t32226 = (function (owner,player,side,meta32227){
this.owner = owner;
this.player = player;
this.side = side;
this.meta32227 = meta32227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.cljs.core.t32226.prototype.om$core$IRender$ = true;

unagix.cljs.core.t32226.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return React.DOM.div({"className": "side"},om.core.build.call(null,unagix.cljs.core.komadai,self__.player));
});

unagix.cljs.core.t32226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32228){
var self__ = this;
var _32228__$1 = this;
return self__.meta32227;
});

unagix.cljs.core.t32226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32228,meta32227__$1){
var self__ = this;
var _32228__$1 = this;
return (new unagix.cljs.core.t32226(self__.owner,self__.player,self__.side,meta32227__$1));
});

unagix.cljs.core.t32226.cljs$lang$type = true;

unagix.cljs.core.t32226.cljs$lang$ctorStr = "unagix.cljs.core/t32226";

unagix.cljs.core.t32226.cljs$lang$ctorPrWriter = (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"unagix.cljs.core/t32226");
});

unagix.cljs.core.__GT_t32226 = (function __GT_t32226(owner__$1,player__$1,side__$1,meta32227){
return (new unagix.cljs.core.t32226(owner__$1,player__$1,side__$1,meta32227));
});

}

return (new unagix.cljs.core.t32226(owner,player,side,cljs.core.PersistentArrayMap.EMPTY));
});
unagix.cljs.core.container = (function container(app,owner){
if(typeof unagix.cljs.core.t32232 !== 'undefined'){
} else {

/**
* @constructor
*/
unagix.cljs.core.t32232 = (function (owner,app,container,meta32233){
this.owner = owner;
this.app = app;
this.container = container;
this.meta32233 = meta32233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.cljs.core.t32232.prototype.om$core$IRender$ = true;

unagix.cljs.core.t32232.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return React.DOM.div({"className": "field"},om.core.build.call(null,unagix.cljs.core.side,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(self__.app))], null)),om.core.build.call(null,unagix.cljs.core.center,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build.call(null,unagix.cljs.core.side,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(self__.app))], null)));
});

unagix.cljs.core.t32232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32234){
var self__ = this;
var _32234__$1 = this;
return self__.meta32233;
});

unagix.cljs.core.t32232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32234,meta32233__$1){
var self__ = this;
var _32234__$1 = this;
return (new unagix.cljs.core.t32232(self__.owner,self__.app,self__.container,meta32233__$1));
});

unagix.cljs.core.t32232.cljs$lang$type = true;

unagix.cljs.core.t32232.cljs$lang$ctorStr = "unagix.cljs.core/t32232";

unagix.cljs.core.t32232.cljs$lang$ctorPrWriter = (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"unagix.cljs.core/t32232");
});

unagix.cljs.core.__GT_t32232 = (function __GT_t32232(owner__$1,app__$1,container__$1,meta32233){
return (new unagix.cljs.core.t32232(owner__$1,app__$1,container__$1,meta32233));
});

}

return (new unagix.cljs.core.t32232(owner,app,container,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,unagix.cljs.core.container,unagix.cljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
figwheel.client.watch_and_reload.call(null);

//# sourceMappingURL=core.js.map