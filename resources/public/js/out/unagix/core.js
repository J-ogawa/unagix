// Compiled by ClojureScript 0.0-2371
goog.provide('unagix.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof unagix.core.def_koma_mapping !== 'undefined')
{} else
{unagix.core.def_koma_mapping = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-ky","-ke","-gi","-ki","-gy","-ki","-gi","-ke","-ky"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"-ka",null,null,null,null,null,"-hi",null], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-hu","-hu","-hu","-hu","-hu","-hu","-hu","-hu","-hu"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+hu","+hu","+hu","+hu","+hu","+hu","+hu","+hu","+hu"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"+hi",null,null,null,null,null,"+ka",null], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+ky","+ke","+gi","+ki","+gy","+ki","+gi","+ke","+ky"], null)], null);
}
unagix.core.koma = (function koma(daf_koma_mapping,x,y){var temp__4124__auto__ = cljs.core.get.call(null,cljs.core.get.call(null,unagix.core.def_koma_mapping,y),x);if(cljs.core.truth_(temp__4124__auto__))
{var _str = temp__4124__auto__;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,clojure.string.join.call(null,cljs.core.rest.call(null,_str))),new cljs.core.Keyword(null,"owner","owner",-392611939),((cljs.core._EQ_.call(null,"+",cljs.core.first.call(null,_str)))?new cljs.core.Keyword(null,"white","white",-483998618):new cljs.core.Keyword(null,"black","black",1294279647))], null);
} else
{return null;
}
});
unagix.core.field_data = (function field_data(koma_mapping){return cljs.core.reduce.call(null,(function (p1__12421_SHARP_,p2__12422_SHARP_){return cljs.core.conj.call(null,p1__12421_SHARP_,p2__12422_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4338__auto__ = (function iter__12429(s__12430){return (new cljs.core.LazySeq(null,(function (){var s__12430__$1 = s__12430;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12430__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x = cljs.core.first.call(null,xs__4624__auto__);var iterys__4334__auto__ = ((function (s__12430__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function iter__12431(s__12432){return (new cljs.core.LazySeq(null,((function (s__12430__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__12432__$1 = s__12432;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12432__$1);if(temp__4126__auto____$1)
{var s__12432__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12432__$2))
{var c__4336__auto__ = cljs.core.chunk_first.call(null,s__12432__$2);var size__4337__auto__ = cljs.core.count.call(null,c__4336__auto__);var b__12434 = cljs.core.chunk_buffer.call(null,size__4337__auto__);if((function (){var i__12433 = (0);while(true){
if((i__12433 < size__4337__auto__))
{var y = cljs.core._nth.call(null,c__4336__auto__,i__12433);cljs.core.chunk_append.call(null,b__12434,new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"koma","koma",965480009),unagix.core.koma.call(null,koma_mapping,x,y)], null)], true, false));
{
var G__12435 = (i__12433 + (1));
i__12433 = G__12435;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12434),iter__12431.call(null,cljs.core.chunk_rest.call(null,s__12432__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12434),null);
}
} else
{var y = cljs.core.first.call(null,s__12432__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"koma","koma",965480009),unagix.core.koma.call(null,koma_mapping,x,y)], null)], true, false),iter__12431.call(null,cljs.core.rest.call(null,s__12432__$2)));
}
} else
{return null;
}
break;
}
});})(s__12430__$1,x,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__12430__$1,x,xs__4624__auto__,temp__4126__auto__))
;var fs__4335__auto__ = cljs.core.seq.call(null,iterys__4334__auto__.call(null,cljs.core.range.call(null,(9))));if(fs__4335__auto__)
{return cljs.core.concat.call(null,fs__4335__auto__,iter__12429.call(null,cljs.core.rest.call(null,s__12430__$1)));
} else
{{
var G__12436 = cljs.core.rest.call(null,s__12430__$1);
s__12430__$1 = G__12436;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4338__auto__.call(null,cljs.core.range.call(null,(9)));
})());
});
if(typeof unagix.core.app_state !== 'undefined')
{} else
{unagix.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),unagix.core.field_data.call(null,unagix.core.koma_mapping),new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hu","hu",-1762884758),(5),new cljs.core.Keyword(null,"ky","ky",-1069334593),(0),new cljs.core.Keyword(null,"ke","ke",388998741),(0),new cljs.core.Keyword(null,"gi","gi",615521304),(0),new cljs.core.Keyword(null,"ki","ki",688764251),(0),new cljs.core.Keyword(null,"ka","ka",-2014845534),(0),new cljs.core.Keyword(null,"hi","hi",-1821422114),(0)], null),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hu","hu",-1762884758),(5),new cljs.core.Keyword(null,"ky","ky",-1069334593),(0),new cljs.core.Keyword(null,"ke","ke",388998741),(0),new cljs.core.Keyword(null,"gi","gi",615521304),(0),new cljs.core.Keyword(null,"ki","ki",688764251),(0),new cljs.core.Keyword(null,"ka","ka",-2014845534),(0),new cljs.core.Keyword(null,"hi","hi",-1821422114),(0)], null)], null),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"white","white",-483998618)], null));
}
unagix.core.basic_type_vec = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ka","ka",-2014845534),new cljs.core.Keyword(null,"ngi","ngi",1315069379),new cljs.core.Keyword(null,"nky","nky",-541763033),new cljs.core.Keyword(null,"nke","nke",-261840662),new cljs.core.Keyword(null,"hu","hu",-1762884758),new cljs.core.Keyword(null,"nhi","nhi",2104569163),new cljs.core.Keyword(null,"gy","gy",483233100),new cljs.core.Keyword(null,"ke","ke",388998741),new cljs.core.Keyword(null,"gi","gi",615521304),new cljs.core.Keyword(null,"nhu","nhu",-2032454310),new cljs.core.Keyword(null,"ki","ki",688764251),new cljs.core.Keyword(null,"nka","nka",317092222),new cljs.core.Keyword(null,"hi","hi",-1821422114),new cljs.core.Keyword(null,"ky","ky",-1069334593)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),cljs.core.get.call(null,unagix.core.basic_type_vec,"ki"),cljs.core.get.call(null,unagix.core.basic_type_vec,"ki"),cljs.core.get.call(null,unagix.core.basic_type_vec,"ki"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null)], null),cljs.core.conj.call(null,cljs.core.get.call(null,unagix.core.basic_type_vec,"hi"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-2)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),cljs.core.get.call(null,unagix.core.basic_type_vec,"ki"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null),cljs.core.conj.call(null,cljs.core.get.call(null,unagix.core.basic_type_vec,"ka"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null)], null)]);
unagix.core.xy = (function xy(masu){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(masu))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(masu)));
});
unagix.core.all_moves = (function all_moves(app_state,player){var turn_masus = cljs.core.filter.call(null,(function (p1__12437_SHARP_){var and__3587__auto__ = cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(p1__12437_SHARP_));if(cljs.core.truth_(and__3587__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(p1__12437_SHARP_)),player);
} else
{return and__3587__auto__;
}
}),cljs.core.map.call(null,cljs.core.second,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(app_state)));return cljs.core.flatten.call(null,cljs.core.map.call(null,((function (turn_masus){
return (function (src){return cljs.core.map.call(null,((function (turn_masus){
return (function (dst){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"dst","dst",844682948),dst], null);
});})(turn_masus))
,unagix.core.reach_masus.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(app_state),src));
});})(turn_masus))
,turn_masus));
});
unagix.core.check_dst = (function check_dst(turn,dst){if((dst == null))
{return new cljs.core.Keyword(null,"out-of-field","out-of-field",676261408);
} else
{if((new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(dst) == null))
{return new cljs.core.Keyword(null,"empty-space","empty-space",-2083677523);
} else
{if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(dst)),turn))
{return new cljs.core.Keyword(null,"enemy","enemy",-956472047);
} else
{return new cljs.core.Keyword(null,"mine","mine",-130428525);

}
}
}
});
unagix.core.destination = (function destination(field,src,reach_vec){return cljs.core.get.call(null,field,clojure.string.join.call(null,cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(src),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(src)], null),reach_vec)));
});
unagix.core.reach_short = (function reach_short(field,src,reach_vec){var dst = unagix.core.destination.call(null,field,src,reach_vec);var G__12439 = (((unagix.core.check_dst.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src)),dst) instanceof cljs.core.Keyword))?unagix.core.check_dst.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src)),dst).fqn:null);switch (G__12439) {
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
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unagix.core.check_dst.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src)),dst)))));

}
});
unagix.core.reach_long = (function() {
var reach_long = null;
var reach_long__3 = (function (field,src,reach_vec){return reach_long.call(null,field,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src)),src,reach_vec,cljs.core.PersistentVector.EMPTY);
});
var reach_long__5 = (function (field,turn,src,reach_vec,reaching){var dst = unagix.core.destination.call(null,field,src,reach_vec);var G__12442 = (((unagix.core.check_dst.call(null,turn,dst) instanceof cljs.core.Keyword))?unagix.core.check_dst.call(null,turn,dst).fqn:null);switch (G__12442) {
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
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unagix.core.check_dst.call(null,turn,dst)))));

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
unagix.core.reach_masus = (function reach_masus(field,src){var type_vec = unagix.core.basic_type_vec.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src)));var direction = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)], null);return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.flatten.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,((function (type_vec,direction){
return (function (p1__12444_SHARP_){return unagix.core.reach_short.call(null,field,src,p1__12444_SHARP_);
});})(type_vec,direction))
,cljs.core.map.call(null,((function (type_vec,direction){
return (function (p1__12445_SHARP_){return cljs.core.map.call(null,cljs.core._STAR_,direction.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src))),p1__12445_SHARP_);
});})(type_vec,direction))
,type_vec.call(null,new cljs.core.Keyword(null,"short","short",1928760516)))),cljs.core.map.call(null,((function (type_vec,direction){
return (function (p1__12446_SHARP_){return unagix.core.reach_long.call(null,field,src,p1__12446_SHARP_);
});})(type_vec,direction))
,cljs.core.map.call(null,((function (type_vec,direction){
return (function (p1__12447_SHARP_){return cljs.core.map.call(null,cljs.core._STAR_,direction.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src))),p1__12447_SHARP_);
});})(type_vec,direction))
,type_vec.call(null,new cljs.core.Keyword(null,"long","long",-171452093)))))));
});
unagix.core.putable_masus = (function putable_masus(field,koma_type,owner){var empty_cond = (function (p1__12448_SHARP_){return (new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(p1__12448_SHARP_) == null);
});var unbackable_cond = unagix.core.unbackable_cond.call(null,koma_type,owner);var conditions = ((cljs.core._EQ_.call(null,koma_type,new cljs.core.Keyword(null,"hu","hu",-1762884758)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [empty_cond,unbackable_cond,unagix.core.non_nihu_cond.call(null,field,owner)], null):(((cljs.core._EQ_.call(null,koma_type,new cljs.core.Keyword(null,"ky","ky",-1069334593))) || (cljs.core._EQ_.call(null,koma_type,new cljs.core.Keyword(null,"ke","ke",388998741))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [empty_cond,unbackable_cond], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [empty_cond], null)
));return cljs.core.reduce.call(null,((function (empty_cond,unbackable_cond,conditions){
return (function (p1__12450_SHARP_,p2__12449_SHARP_){return cljs.core.filter.call(null,p2__12449_SHARP_,p1__12450_SHARP_);
});})(empty_cond,unbackable_cond,conditions))
,cljs.core.map.call(null,cljs.core.second,field),conditions);
});
unagix.core.unbackable_cond = (function unbackable_cond(koma_type,owner){var scalar = ((cljs.core._EQ_.call(null,koma_type,new cljs.core.Keyword(null,"hu","hu",-1762884758)))?(1):((cljs.core._EQ_.call(null,koma_type,new cljs.core.Keyword(null,"ky","ky",-1069334593)))?(1):((cljs.core._EQ_.call(null,koma_type,new cljs.core.Keyword(null,"ke","ke",388998741)))?(2):(0)
)));var border = owner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),scalar,new cljs.core.Keyword(null,"black","black",1294279647),((8) - scalar)], null));return ((function (scalar,border){
return (function (p1__12451_SHARP_){return owner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),cljs.core._GT__EQ_,new cljs.core.Keyword(null,"black","black",1294279647),cljs.core._LT__EQ_], null)).call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__12451_SHARP_),border);
});
;})(scalar,border))
});
unagix.core.exist_hu_y_lines = (function exist_hu_y_lines(field,owner){var exist_masus = cljs.core.filter.call(null,(function (p1__12452_SHARP_){var and__3587__auto__ = cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(p1__12452_SHARP_));if(cljs.core.truth_(and__3587__auto__))
{return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(p1__12452_SHARP_)),owner)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(p1__12452_SHARP_)),new cljs.core.Keyword(null,"hu","hu",-1762884758)));
} else
{return and__3587__auto__;
}
}),cljs.core.map.call(null,cljs.core.second,field));return cljs.core.distinct.call(null,cljs.core.map.call(null,((function (exist_masus){
return (function (p1__12453_SHARP_){return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__12453_SHARP_);
});})(exist_masus))
,exist_masus));
});
unagix.core.non_nihu_cond = (function non_nihu_cond(field,owner){return (function (p1__12454_SHARP_){return (cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__12454_SHARP_)], true),unagix.core.exist_hu_y_lines.call(null,field,owner)) == null);
});
});
unagix.core.turned_state = (function turned_state(app_state,turn){var G__12456 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(turn) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(turn).fqn:null);switch (G__12456) {
case "put":
return unagix.core.put_state.call(null,app_state,new cljs.core.Keyword(null,"koma-type","koma-type",1128170803).cljs$core$IFn$_invoke$arity$1(turn),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(turn));

break;
case "move":
return unagix.core.moved_state.call(null,app_state,new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(turn),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(turn));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(turn)))));

}
});
unagix.core.moved_state = (function moved_state(app_state,src,dst){var stocked_state = (function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(dst);if(cljs.core.truth_(temp__4124__auto__))
{var dst_koma = temp__4124__auto__;return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(dst_koma)], null),cljs.core.inc);
} else
{return app_state;
}
})();var moved_field = cljs.core.conj.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(app_state),new cljs.core.PersistentArrayMap.fromArray([unagix.core.xy.call(null,src),cljs.core.dissoc.call(null,src,new cljs.core.Keyword(null,"koma","koma",965480009))], true, false),new cljs.core.PersistentArrayMap.fromArray([unagix.core.xy.call(null,dst),cljs.core.assoc.call(null,dst,new cljs.core.Keyword(null,"koma","koma",965480009),new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src))], true, false));return cljs.core.assoc.call(null,cljs.core.assoc.call(null,stocked_state,new cljs.core.Keyword(null,"field","field",-1302436500),moved_field),new cljs.core.Keyword(null,"turn","turn",75759344),unagix.core.next_player.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(src))));
});
unagix.core.put_state = (function put_state(app_state,koma_type,dst){var putter = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(app_state);var used_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stock","stock",-877288674),putter,koma_type], null),cljs.core.dec);var put_field = cljs.core.conj.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(app_state),new cljs.core.PersistentArrayMap.fromArray([unagix.core.xy.call(null,dst),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dst),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dst),new cljs.core.Keyword(null,"koma","koma",965480009),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),koma_type,new cljs.core.Keyword(null,"owner","owner",-392611939),putter], null)], null)], true, false));return cljs.core.assoc.call(null,used_state,new cljs.core.Keyword(null,"field","field",-1302436500),put_field,new cljs.core.Keyword(null,"turn","turn",75759344),unagix.core.next_player.call(null,putter));
});
unagix.core.players = new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.Keyword(null,"white","white",-483998618),(1),new cljs.core.Keyword(null,"black","black",1294279647)], null);
unagix.core.next_player = (function next_player(player){return unagix.core.players.call(null,cljs.core.rem.call(null,(clojure.set.map_invert.call(null,unagix.core.players).call(null,player) + (1)),(2)));
});
unagix.core.on_masu_click = (function on_masu_click(data,owner){if(cljs.core.truth_(new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{return unagix.core.next_BANG_.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.core.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dst","dst",844682948),cljs.core.deref.call(null,data)], null)));
} else
{if(cljs.core.truth_((function (){var and__3587__auto__ = cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));if(cljs.core.truth_(and__3587__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.core.app_state)));
} else
{return and__3587__auto__;
}
})()))
{return unagix.core.select_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,data)], null));
} else
{return unagix.core.neutral_BANG_.call(null);

}
}
});
unagix.core.on_stock_koma_click = (function on_stock_koma_click(data,owner){return unagix.core.select_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"koma-type","koma-type",1128170803),data], null));
});
unagix.core.next_BANG_ = (function next_BANG_(turn){cljs.core.swap_BANG_.call(null,unagix.core.app_state,cljs.core.conj,unagix.core.turned_state.call(null,cljs.core.deref.call(null,unagix.core.app_state),turn));
unagix.core.neutral_BANG_.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.core.app_state)),new cljs.core.Keyword(null,"black","black",1294279647)))
{var _best_choice = unagix.core.best_choice.call(null,cljs.core.deref.call(null,unagix.core.app_state));cljs.core.println.call(null," ");
cljs.core.println.call(null,cljs.core.deref.call(null,unagix.core.aaa));
return next_BANG_.call(null,cljs.core.first.call(null,_best_choice));
} else
{return null;
}
});
unagix.core.neutral_BANG_ = (function neutral_BANG_(_){return cljs.core.swap_BANG_.call(null,unagix.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"field","field",-1302436500),unagix.core.update_values.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.core.app_state)),(function (p1__12458_SHARP_){return cljs.core.dissoc.call(null,p1__12458_SHARP_,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
})));
});
unagix.core.select_BANG_ = (function select_BANG_(turn){var targets = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(turn),new cljs.core.Keyword(null,"move","move",-2110884309)))?unagix.core.reach_masus.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.core.app_state)),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(turn)):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(turn),new cljs.core.Keyword(null,"put","put",1299772570)))?unagix.core.putable_masus.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.core.app_state)),new cljs.core.Keyword(null,"koma-type","koma-type",1128170803).cljs$core$IFn$_invoke$arity$1(turn),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.core.app_state))):null));unagix.core.highlight_BANG_.call(null,targets);
return cljs.core.swap_BANG_.call(null,unagix.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),turn);
});
unagix.core.highlight_BANG_ = (function highlight_BANG_(masus){var non_highlight_field = unagix.core.update_values.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unagix.core.app_state)),(function (p1__12459_SHARP_){return cljs.core.dissoc.call(null,p1__12459_SHARP_,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
}));var highlight_masus = cljs.core.map.call(null,((function (non_highlight_field){
return (function (p1__12460_SHARP_){return cljs.core.assoc.call(null,p1__12460_SHARP_,new cljs.core.Keyword(null,"highlight","highlight",-800930873),true);
});})(non_highlight_field))
,masus);var highlighted_field = cljs.core.reduce.call(null,((function (non_highlight_field,highlight_masus){
return (function (p1__12461_SHARP_,p2__12462_SHARP_){return cljs.core.assoc.call(null,p1__12461_SHARP_,unagix.core.xy.call(null,p2__12462_SHARP_),p2__12462_SHARP_);
});})(non_highlight_field,highlight_masus))
,non_highlight_field,highlight_masus);return cljs.core.swap_BANG_.call(null,unagix.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"field","field",-1302436500),highlighted_field);
});
/**
* @param {...*} var_args
*/
unagix.core.update_values = (function() { 
var update_values__delegate = function (m,f,args){return cljs.core.reduce.call(null,(function (r,p__12465){var vec__12466 = p__12465;var k = cljs.core.nth.call(null,vec__12466,(0),null);var v = cljs.core.nth.call(null,vec__12466,(1),null);return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
};
var update_values = function (m,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_values__delegate.call(this,m,f,args);};
update_values.cljs$lang$maxFixedArity = 2;
update_values.cljs$lang$applyTo = (function (arglist__12467){
var m = cljs.core.first(arglist__12467);
arglist__12467 = cljs.core.next(arglist__12467);
var f = cljs.core.first(arglist__12467);
var args = cljs.core.rest(arglist__12467);
return update_values__delegate(m,f,args);
});
update_values.cljs$core$IFn$_invoke$arity$variadic = update_values__delegate;
return update_values;
})()
;
unagix.core.choices = (function() {
var choices = null;
var choices__1 = (function (app_state){return choices.call(null,app_state,new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(app_state));
});
var choices__2 = (function (app_state,player){return unagix.core.all_moves.call(null,app_state,player);
});
choices = function(app_state,player){
switch(arguments.length){
case 1:
return choices__1.call(this,app_state);
case 2:
return choices__2.call(this,app_state,player);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
choices.cljs$core$IFn$_invoke$arity$1 = choices__1;
choices.cljs$core$IFn$_invoke$arity$2 = choices__2;
return choices;
})()
;
unagix.core.best_choice = (function() {
var best_choice = null;
var best_choice__1 = (function (app_state){return best_choice.call(null,app_state,unagix.core.choices.call(null,app_state),null);
});
var best_choice__3 = (function (app_state,targets,candity_tree){while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,targets),(0)))
{return candity_tree;
} else
{var target_state = unagix.core.turned_state.call(null,app_state,cljs.core.first.call(null,targets));if((candity_tree == null))
{{
var G__12468 = app_state;
var G__12469 = cljs.core.rest.call(null,targets);
var G__12470 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,targets),best_choice.call(null,target_state,unagix.core.choices.call(null,target_state),null,null)], null);
app_state = G__12468;
targets = G__12469;
candity_tree = G__12470;
continue;
}
} else
{var best_child = best_choice.call(null,target_state,unagix.core.choices.call(null,target_state),candity_tree,null);if((unagix.core.score.call(null,best_child) < unagix.core.score.call(null,cljs.core.last.call(null,candity_tree))))
{{
var G__12471 = app_state;
var G__12472 = cljs.core.rest.call(null,targets);
var G__12473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,targets),best_child], null);
app_state = G__12471;
targets = G__12472;
candity_tree = G__12473;
continue;
}
} else
{{
var G__12474 = app_state;
var G__12475 = cljs.core.rest.call(null,targets);
var G__12476 = candity_tree;
app_state = G__12474;
targets = G__12475;
candity_tree = G__12476;
continue;
}
}
}
}
break;
}
});
var best_choice__4 = (function (app_state,targets,candity_tree,candity){while(true){
cljs.core.swap_BANG_.call(null,unagix.core.aaa,cljs.core.inc);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,targets),(0)))
{return candity;
} else
{var target_state = unagix.core.turned_state.call(null,app_state,cljs.core.first.call(null,targets));if(cljs.core.truth_((function (){var and__3587__auto__ = cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,cljs.core.last.call(null,candity_tree));if(cljs.core.truth_(and__3587__auto__))
{return (unagix.core.score.call(null,cljs.core.last.call(null,candity_tree)) <= unagix.core.score.call(null,target_state));
} else
{return and__3587__auto__;
}
})()))
{return target_state;
} else
{if(((candity == null)) || ((unagix.core.score.call(null,candity) < unagix.core.score.call(null,target_state))))
{{
var G__12477 = app_state;
var G__12478 = cljs.core.rest.call(null,targets);
var G__12479 = candity_tree;
var G__12480 = target_state;
app_state = G__12477;
targets = G__12478;
candity_tree = G__12479;
candity = G__12480;
continue;
}
} else
{{
var G__12481 = app_state;
var G__12482 = cljs.core.rest.call(null,targets);
var G__12483 = candity_tree;
var G__12484 = candity;
app_state = G__12481;
targets = G__12482;
candity_tree = G__12483;
candity = G__12484;
continue;
}

}
}
}
break;
}
});
best_choice = function(app_state,targets,candity_tree,candity){
switch(arguments.length){
case 1:
return best_choice__1.call(this,app_state);
case 3:
return best_choice__3.call(this,app_state,targets,candity_tree);
case 4:
return best_choice__4.call(this,app_state,targets,candity_tree,candity);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
best_choice.cljs$core$IFn$_invoke$arity$1 = best_choice__1;
best_choice.cljs$core$IFn$_invoke$arity$3 = best_choice__3;
best_choice.cljs$core$IFn$_invoke$arity$4 = best_choice__4;
return best_choice;
})()
;
unagix.core.score = (function score(app_state){return (unagix.core.move_range_score.call(null,app_state) + unagix.core.field_unit_score.call(null,app_state));
});
unagix.core.move_range_score = (function move_range_score(app_state){return (cljs.core.count.call(null,unagix.core.choices.call(null,app_state,new cljs.core.Keyword(null,"white","white",-483998618))) - cljs.core.count.call(null,unagix.core.choices.call(null,app_state,new cljs.core.Keyword(null,"black","black",1294279647))));
});
unagix.core.field_unit_score = (function field_unit_score(app_state){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__12485_SHARP_){return unagix.core.koma_score.call(null,p1__12485_SHARP_);
}),cljs.core.filter.call(null,(function (p1__12486_SHARP_){return cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,p1__12486_SHARP_);
}),cljs.core.map.call(null,(function (p1__12487_SHARP_){return new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(p1__12487_SHARP_);
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(app_state))))));
});
unagix.core.aaa = cljs.core.atom.call(null,(0));
unagix.core.koma_score = (function koma_score(koma){return (new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(koma).call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ka","ka",-2014845534),new cljs.core.Keyword(null,"ngi","ngi",1315069379),new cljs.core.Keyword(null,"nke","nke",-261840662),new cljs.core.Keyword(null,"hu","hu",-1762884758),new cljs.core.Keyword(null,"gy","gy",483233100),new cljs.core.Keyword(null,"ke","ke",388998741),new cljs.core.Keyword(null,"gi","gi",615521304),new cljs.core.Keyword(null,"nhu","nhu",-2032454310),new cljs.core.Keyword(null,"ki","ki",688764251),new cljs.core.Keyword(null,"hi","hi",-1821422114)],[(15),(11),(11),(4),(10000),(6),(9),(11),(10),(17)])) * new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(koma).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),(1),new cljs.core.Keyword(null,"black","black",1294279647),(-1)], null)));
});
unagix.core.masu = (function masu(data,owner){if(typeof unagix.core.t12491 !== 'undefined')
{} else
{
/**
* @constructor
*/
unagix.core.t12491 = (function (owner,data,masu,meta12492){
this.owner = owner;
this.data = data;
this.masu = masu;
this.meta12492 = meta12492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.core.t12491.cljs$lang$type = true;
unagix.core.t12491.cljs$lang$ctorStr = "unagix.core/t12491";
unagix.core.t12491.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"unagix.core/t12491");
});
unagix.core.t12491.prototype.om$core$IRender$ = true;
unagix.core.t12491.prototype.om$core$IRender$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var koma = new cljs.core.Keyword(null,"koma","koma",965480009).cljs$core$IFn$_invoke$arity$1(self__.data);return React.DOM.div({"onClick": ((function (koma,self__$1){
return (function (){return unagix.core.on_masu_click.call(null,self__.data,self__.owner);
});})(koma,self__$1))
, "className": (cljs.core.truth_(new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(self__.data))?"masu highlight":"masu")},(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(koma))?React.DOM.img({"className": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(koma),new cljs.core.Keyword(null,"white","white",-483998618)))?"koma-white":"koma-black"), "src": ("img/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(koma)))+".png")}):null));
});
unagix.core.t12491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12493){var self__ = this;
var _12493__$1 = this;return self__.meta12492;
});
unagix.core.t12491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12493,meta12492__$1){var self__ = this;
var _12493__$1 = this;return (new unagix.core.t12491(self__.owner,self__.data,self__.masu,meta12492__$1));
});
unagix.core.__GT_t12491 = (function __GT_t12491(owner__$1,data__$1,masu__$1,meta12492){return (new unagix.core.t12491(owner__$1,data__$1,masu__$1,meta12492));
});
}
return (new unagix.core.t12491(owner,data,masu,null));
});
unagix.core.masu_row = (function masu_row(app,owner){if(typeof unagix.core.t12497 !== 'undefined')
{} else
{
/**
* @constructor
*/
unagix.core.t12497 = (function (owner,app,masu_row,meta12498){
this.owner = owner;
this.app = app;
this.masu_row = masu_row;
this.meta12498 = meta12498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.core.t12497.cljs$lang$type = true;
unagix.core.t12497.cljs$lang$ctorStr = "unagix.core/t12497";
unagix.core.t12497.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"unagix.core/t12497");
});
unagix.core.t12497.prototype.om$core$IRender$ = true;
unagix.core.t12497.prototype.om$core$IRender$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "masu-row"},om.core.build_all.call(null,unagix.core.masu,self__.app));
});
unagix.core.t12497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12499){var self__ = this;
var _12499__$1 = this;return self__.meta12498;
});
unagix.core.t12497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12499,meta12498__$1){var self__ = this;
var _12499__$1 = this;return (new unagix.core.t12497(self__.owner,self__.app,self__.masu_row,meta12498__$1));
});
unagix.core.__GT_t12497 = (function __GT_t12497(owner__$1,app__$1,masu_row__$1,meta12498){return (new unagix.core.t12497(owner__$1,app__$1,masu_row__$1,meta12498));
});
}
return (new unagix.core.t12497(owner,app,masu_row,null));
});
unagix.core.center = (function center(app,owner){if(typeof unagix.core.t12503 !== 'undefined')
{} else
{
/**
* @constructor
*/
unagix.core.t12503 = (function (owner,app,center,meta12504){
this.owner = owner;
this.app = app;
this.center = center;
this.meta12504 = meta12504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.core.t12503.cljs$lang$type = true;
unagix.core.t12503.cljs$lang$ctorStr = "unagix.core/t12503";
unagix.core.t12503.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"unagix.core/t12503");
});
unagix.core.t12503.prototype.om$core$IRender$ = true;
unagix.core.t12503.prototype.om$core$IRender$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "ban"},om.core.build_all.call(null,unagix.core.masu_row,cljs.core.partition.call(null,(9),cljs.core.map.call(null,cljs.core.second,cljs.core.sort.call(null,self__.app)))));
});
unagix.core.t12503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12505){var self__ = this;
var _12505__$1 = this;return self__.meta12504;
});
unagix.core.t12503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12505,meta12504__$1){var self__ = this;
var _12505__$1 = this;return (new unagix.core.t12503(self__.owner,self__.app,self__.center,meta12504__$1));
});
unagix.core.__GT_t12503 = (function __GT_t12503(owner__$1,app__$1,center__$1,meta12504){return (new unagix.core.t12503(owner__$1,app__$1,center__$1,meta12504));
});
}
return (new unagix.core.t12503(owner,app,center,null));
});
unagix.core.stock_koma = (function stock_koma(app,owner){if(typeof unagix.core.t12509 !== 'undefined')
{} else
{
/**
* @constructor
*/
unagix.core.t12509 = (function (owner,app,stock_koma,meta12510){
this.owner = owner;
this.app = app;
this.stock_koma = stock_koma;
this.meta12510 = meta12510;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.core.t12509.cljs$lang$type = true;
unagix.core.t12509.cljs$lang$ctorStr = "unagix.core/t12509";
unagix.core.t12509.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"unagix.core/t12509");
});
unagix.core.t12509.prototype.om$core$IRender$ = true;
unagix.core.t12509.prototype.om$core$IRender$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return React.DOM.div({},React.DOM.img({"onClick": ((function (self__$1){
return (function (){return unagix.core.on_stock_koma_click.call(null,new cljs.core.Keyword(null,"koma-type","koma-type",1128170803).cljs$core$IFn$_invoke$arity$1(self__.app),self__.owner);
});})(self__$1))
, "className": ("koma-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(self__.app)))), "src": ("img/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"koma-type","koma-type",1128170803).cljs$core$IFn$_invoke$arity$1(self__.app)))+".png")}),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.app));
});
unagix.core.t12509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12511){var self__ = this;
var _12511__$1 = this;return self__.meta12510;
});
unagix.core.t12509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12511,meta12510__$1){var self__ = this;
var _12511__$1 = this;return (new unagix.core.t12509(self__.owner,self__.app,self__.stock_koma,meta12510__$1));
});
unagix.core.__GT_t12509 = (function __GT_t12509(owner__$1,app__$1,stock_koma__$1,meta12510){return (new unagix.core.t12509(owner__$1,app__$1,stock_koma__$1,meta12510));
});
}
return (new unagix.core.t12509(owner,app,stock_koma,null));
});
unagix.core.komadai = (function komadai(player,owner){if(typeof unagix.core.t12516 !== 'undefined')
{} else
{
/**
* @constructor
*/
unagix.core.t12516 = (function (owner,player,komadai,meta12517){
this.owner = owner;
this.player = player;
this.komadai = komadai;
this.meta12517 = meta12517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.core.t12516.cljs$lang$type = true;
unagix.core.t12516.cljs$lang$ctorStr = "unagix.core/t12516";
unagix.core.t12516.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"unagix.core/t12516");
});
unagix.core.t12516.prototype.om$core$IRender$ = true;
unagix.core.t12516.prototype.om$core$IRender$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": ("komadai-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(self__.player)))), "className": "komadai"},om.core.build_all.call(null,unagix.core.stock_koma,cljs.core.seq.call(null,cljs.core.map.call(null,((function (self__$1){
return (function (p1__12512_SHARP_){return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"koma-type","koma-type",1128170803),new cljs.core.Keyword(null,"amount","amount",364489504)],[new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(self__.player),cljs.core.first.call(null,p1__12512_SHARP_),cljs.core.last.call(null,p1__12512_SHARP_)]);
});})(self__$1))
,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(self__.player)))));
});
unagix.core.t12516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12518){var self__ = this;
var _12518__$1 = this;return self__.meta12517;
});
unagix.core.t12516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12518,meta12517__$1){var self__ = this;
var _12518__$1 = this;return (new unagix.core.t12516(self__.owner,self__.player,self__.komadai,meta12517__$1));
});
unagix.core.__GT_t12516 = (function __GT_t12516(owner__$1,player__$1,komadai__$1,meta12517){return (new unagix.core.t12516(owner__$1,player__$1,komadai__$1,meta12517));
});
}
return (new unagix.core.t12516(owner,player,komadai,null));
});
unagix.core.side = (function side(player,owner){if(typeof unagix.core.t12522 !== 'undefined')
{} else
{
/**
* @constructor
*/
unagix.core.t12522 = (function (owner,player,side,meta12523){
this.owner = owner;
this.player = player;
this.side = side;
this.meta12523 = meta12523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.core.t12522.cljs$lang$type = true;
unagix.core.t12522.cljs$lang$ctorStr = "unagix.core/t12522";
unagix.core.t12522.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"unagix.core/t12522");
});
unagix.core.t12522.prototype.om$core$IRender$ = true;
unagix.core.t12522.prototype.om$core$IRender$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return React.DOM.div({"className": "side"},om.core.build.call(null,unagix.core.komadai,self__.player));
});
unagix.core.t12522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12524){var self__ = this;
var _12524__$1 = this;return self__.meta12523;
});
unagix.core.t12522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12524,meta12523__$1){var self__ = this;
var _12524__$1 = this;return (new unagix.core.t12522(self__.owner,self__.player,self__.side,meta12523__$1));
});
unagix.core.__GT_t12522 = (function __GT_t12522(owner__$1,player__$1,side__$1,meta12523){return (new unagix.core.t12522(owner__$1,player__$1,side__$1,meta12523));
});
}
return (new unagix.core.t12522(owner,player,side,null));
});
unagix.core.container = (function container(app,owner){if(typeof unagix.core.t12528 !== 'undefined')
{} else
{
/**
* @constructor
*/
unagix.core.t12528 = (function (owner,app,container,meta12529){
this.owner = owner;
this.app = app;
this.container = container;
this.meta12529 = meta12529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
unagix.core.t12528.cljs$lang$type = true;
unagix.core.t12528.cljs$lang$ctorStr = "unagix.core/t12528";
unagix.core.t12528.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"unagix.core/t12528");
});
unagix.core.t12528.prototype.om$core$IRender$ = true;
unagix.core.t12528.prototype.om$core$IRender$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return React.DOM.div({"className": "field"},om.core.build.call(null,unagix.core.side,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(self__.app))], null)),om.core.build.call(null,unagix.core.center,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build.call(null,unagix.core.side,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(self__.app))], null)));
});
unagix.core.t12528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12530){var self__ = this;
var _12530__$1 = this;return self__.meta12529;
});
unagix.core.t12528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12530,meta12529__$1){var self__ = this;
var _12530__$1 = this;return (new unagix.core.t12528(self__.owner,self__.app,self__.container,meta12529__$1));
});
unagix.core.__GT_t12528 = (function __GT_t12528(owner__$1,app__$1,container__$1,meta12529){return (new unagix.core.t12528(owner__$1,app__$1,container__$1,meta12529));
});
}
return (new unagix.core.t12528(owner,app,container,null));
});
om.core.root.call(null,unagix.core.container,unagix.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map