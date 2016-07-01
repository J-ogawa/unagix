// Compiled by ClojureScript 1.7.170 {}
goog.provide('unagix.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof unagix.core.kifu !== 'undefined'){
} else {
unagix.core.kifu = cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,(2),window.location.search));
}
if(typeof unagix.core.move_index !== 'undefined'){
} else {
unagix.core.move_index = cljs.core.atom.call(null,(0));
}
unagix.core.basic_type_vec = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ka","ka",-2014845534),new cljs.core.Keyword(null,"ngi","ngi",1315069379),new cljs.core.Keyword(null,"nky","nky",-541763033),new cljs.core.Keyword(null,"nke","nke",-261840662),new cljs.core.Keyword(null,"hu","hu",-1762884758),new cljs.core.Keyword(null,"nhi","nhi",2104569163),new cljs.core.Keyword(null,"gy","gy",483233100),new cljs.core.Keyword(null,"ke","ke",388998741),new cljs.core.Keyword(null,"gi","gi",615521304),new cljs.core.Keyword(null,"nhu","nhu",-2032454310),new cljs.core.Keyword(null,"ki","ki",688764251),new cljs.core.Keyword(null,"nka","nka",317092222),new cljs.core.Keyword(null,"hi","hi",-1821422114),new cljs.core.Keyword(null,"ky","ky",-1069334593)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null)], null),cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-2)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null),cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null)], null)]);
unagix.core.direction = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)], null);
unagix.core.check_dst = (function unagix$core$check_dst(field,owner,dst){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9378_SHARP_){
return cljs.core._EQ_.call(null,"-",p1__9378_SHARP_);
}),cljs.core.seq.call(null,cljs.core.name.call(null,dst))))){
return new cljs.core.Keyword(null,"out-of-field","out-of-field",676261408);
} else {
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9379_SHARP_){
return (p1__9379_SHARP_ > (5));
}),cljs.core.map.call(null,parseInt,cljs.core.seq.call(null,cljs.core.name.call(null,dst)))))){
return new cljs.core.Keyword(null,"out-of-field","out-of-field",676261408);
} else {
if((field.call(null,dst) == null)){
return new cljs.core.Keyword(null,"empty-space","empty-space",-2083677523);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.subs.call(null,cljs.core.name.call(null,field.call(null,dst)),(0),(1)),owner)){
return new cljs.core.Keyword(null,"enemy","enemy",-956472047);
} else {
return new cljs.core.Keyword(null,"mine","mine",-130428525);

}
}
}
}
});
unagix.core.destination = (function unagix$core$destination(field,src,reach_vec){
return cljs.core.keyword.call(null,clojure.string.join.call(null,cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,cljs.core.name.call(null,src),(0),(1))),parseInt(cljs.core.subs.call(null,cljs.core.name.call(null,src),(1),(2)))], null),reach_vec)));
});
unagix.core.reach_short = (function unagix$core$reach_short(field,src,reach_vec){
var dst = unagix.core.destination.call(null,field,src,reach_vec);
var G__9381 = (((unagix.core.check_dst.call(null,field,cljs.core.subs.call(null,cljs.core.name.call(null,field.call(null,src)),(0),(1)),dst) instanceof cljs.core.Keyword))?unagix.core.check_dst.call(null,field,cljs.core.subs.call(null,cljs.core.name.call(null,field.call(null,src)),(0),(1)),dst).fqn:null);
switch (G__9381) {
case "out-of-field":
return null;

break;
case "empty-space":
return dst;

break;
case "enemy":
return dst;

break;
case "mine":
return null;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(unagix.core.check_dst.call(null,field,cljs.core.subs.call(null,cljs.core.name.call(null,field.call(null,src)),(0),(1)),dst))].join('')));

}
});
unagix.core.reach_long = (function unagix$core$reach_long(var_args){
var args9383 = [];
var len__5726__auto___9387 = arguments.length;
var i__5727__auto___9388 = (0);
while(true){
if((i__5727__auto___9388 < len__5726__auto___9387)){
args9383.push((arguments[i__5727__auto___9388]));

var G__9389 = (i__5727__auto___9388 + (1));
i__5727__auto___9388 = G__9389;
continue;
} else {
}
break;
}

var G__9385 = args9383.length;
switch (G__9385) {
case 3:
return unagix.core.reach_long.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return unagix.core.reach_long.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9383.length)].join('')));

}
});

unagix.core.reach_long.cljs$core$IFn$_invoke$arity$3 = (function (field,src,reach_vec){
return unagix.core.reach_long.call(null,field,cljs.core.subs.call(null,cljs.core.name.call(null,field.call(null,src)),(0),(1)),src,reach_vec,cljs.core.PersistentVector.EMPTY);
});

unagix.core.reach_long.cljs$core$IFn$_invoke$arity$5 = (function (field,owner,src,reach_vec,reaching){
var dst = unagix.core.destination.call(null,field,src,reach_vec);
var G__9386 = (((unagix.core.check_dst.call(null,field,owner,dst) instanceof cljs.core.Keyword))?unagix.core.check_dst.call(null,field,owner,dst).fqn:null);
switch (G__9386) {
case "out-of-field":
return reaching;

break;
case "empty-space":
return unagix.core.reach_long.call(null,field,owner,dst,reach_vec,cljs.core.conj.call(null,reaching,dst));

break;
case "enemy":
return cljs.core.conj.call(null,reaching,dst);

break;
case "mine":
return reaching;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(unagix.core.check_dst.call(null,field,owner,dst))].join('')));

}
});

unagix.core.reach_long.cljs$lang$maxFixedArity = 5;
unagix.core.reach_vecs = (function unagix$core$reach_vecs(koma,vec_kind){
return cljs.core.map.call(null,(function (p1__9392_SHARP_){
return cljs.core.map.call(null,cljs.core._STAR_,unagix.core.direction.call(null,cljs.core.keyword.call(null,cljs.core.subs.call(null,cljs.core.name.call(null,koma),(0),(1)))),p1__9392_SHARP_);
}),cljs.core.get.call(null,unagix.core.basic_type_vec,cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,(1),cljs.core.name.call(null,koma))))).call(null,vec_kind));
});
unagix.core.movable_masus = (function unagix$core$movable_masus(field,src){
return cljs.core.flatten.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.conj.call(null,cljs.core.map.call(null,(function (p1__9393_SHARP_){
return unagix.core.reach_short.call(null,field,src,p1__9393_SHARP_);
}),unagix.core.reach_vecs.call(null,field.call(null,src),new cljs.core.Keyword(null,"short","short",1928760516))),cljs.core.map.call(null,(function (p1__9394_SHARP_){
return unagix.core.reach_long.call(null,field,src,p1__9394_SHARP_);
}),unagix.core.reach_vecs.call(null,field.call(null,src),new cljs.core.Keyword(null,"long","long",-171452093))))));
});
unagix.core.stock_types = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu","hu",-1762884758),new cljs.core.Keyword(null,"ky","ky",-1069334593),new cljs.core.Keyword(null,"ke","ke",388998741),new cljs.core.Keyword(null,"gi","gi",615521304),new cljs.core.Keyword(null,"ki","ki",688764251),new cljs.core.Keyword(null,"ka","ka",-2014845534),new cljs.core.Keyword(null,"hi","hi",-1821422114),new cljs.core.Keyword(null,"gy","gy",483233100)], null);
unagix.core.to_koma_type = (function unagix$core$to_koma_type(kifu_char){
var G__9396 = kifu_char;
switch (G__9396) {
case "a":
return "hu";

break;
case "b":
return "ky";

break;
case "c":
return "ke";

break;
case "d":
return "gi";

break;
case "e":
return "ki";

break;
case "f":
return "ka";

break;
case "g":
return "hi";

break;
case "h":
return "gy";

break;
case "_":
return null;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(kifu_char)].join('')));

}
});
unagix.core.to_coordinate = (function unagix$core$to_coordinate(kifu_char){
var value = parseInt(kifu_char,(36));
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.rem.call(null,value,(6))),cljs.core.str(cljs.core.quot.call(null,value,(6)))].join(''));
});
unagix.core.next_turn = (function unagix$core$next_turn(current){
if(cljs.core._EQ_.call(null,current,new cljs.core.Keyword(null,"+","+",1913524883))){
return new cljs.core.Keyword(null,"-","-",-2112348439);
} else {
return new cljs.core.Keyword(null,"+","+",1913524883);
}
});
unagix.core.convert_koma = (function unagix$core$convert_koma(pair){
var temp__4423__auto__ = unagix.core.to_koma_type.call(null,cljs.core.last.call(null,pair));
if(cljs.core.truth_(temp__4423__auto__)){
var koma_type = temp__4423__auto__;
return cljs.core.keyword.call(null,[cljs.core.str((((cljs.core.first.call(null,pair) < (18)))?"-":"+")),cljs.core.str(koma_type)].join(''));
} else {
return null;
}
});
unagix.core.first_field = (function unagix$core$first_field(strs){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__9398_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.keyword.call(null,[cljs.core.str(cljs.core.rem.call(null,cljs.core.first.call(null,p1__9398_SHARP_),(6))),cljs.core.str(cljs.core.quot.call(null,cljs.core.first.call(null,p1__9398_SHARP_),(6)))].join(''))],[unagix.core.convert_koma.call(null,p1__9398_SHARP_)]);
}),cljs.core.map_indexed.call(null,cljs.core.vector,strs)));
});
unagix.core.promote = (function unagix$core$promote(koma){
var string = cljs.core.name.call(null,koma);
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.subs.call(null,string,(0),(1))),cljs.core.str("n"),cljs.core.str(cljs.core.subs.call(null,string,(1),(3)))].join(''));
});
unagix.core.reflected_state = (function unagix$core$reflected_state(state,move){
var target = unagix.core.to_coordinate.call(null,cljs.core.first.call(null,move));
var move_value = parseInt(cljs.core.last.call(null,move),(36));
if((target.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(state)) == null)){
var stock_type = cljs.core.get.call(null,unagix.core.stock_types,move_value);
return cljs.core.update.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),target], null),cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.str(cljs.core.name.call(null,stock_type))].join(''))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(state),stock_type], null),cljs.core.dec),new cljs.core.Keyword(null,"turn","turn",75759344),unagix.core.next_turn);
} else {
var dst = cljs.core.get.call(null,cljs.core.vec.call(null,unagix.core.movable_masus.call(null,state.call(null,new cljs.core.Keyword(null,"field","field",-1302436500)),target)),cljs.core.rem.call(null,move_value,(20)));
var G__9400 = state;
var G__9400__$1 = (cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,dst.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.not_EQ_.call(null,"gy",cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,(2),cljs.core.name.call(null,dst.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(state))))));
} else {
return and__4656__auto__;
}
})())?cljs.core.update_in.call(null,G__9400,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stock","stock",-877288674),state.call(null,new cljs.core.Keyword(null,"turn","turn",75759344)),cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,(2),cljs.core.name.call(null,dst.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(state))))))], null),cljs.core.inc):G__9400);
var G__9400__$2 = cljs.core.assoc_in.call(null,G__9400__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),dst], null),target.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(state)))
;
var G__9400__$3 = (((cljs.core.quot.call(null,move_value,(20)) > (0)))?cljs.core.update_in.call(null,G__9400__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),dst], null),unagix.core.promote):G__9400__$2);
var G__9400__$4 = cljs.core.assoc_in.call(null,G__9400__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),target], null),null)
;
var G__9400__$5 = cljs.core.update.call(null,G__9400__$4,new cljs.core.Keyword(null,"turn","turn",75759344),unagix.core.next_turn)
;
return G__9400__$5;
}
});
unagix.core.status = (function unagix$core$status(kifu){
var status__$1 = cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"hu","hu",-1762884758),(0),new cljs.core.Keyword(null,"ky","ky",-1069334593),(0),new cljs.core.Keyword(null,"ke","ke",388998741),(0),new cljs.core.Keyword(null,"gi","gi",615521304),(0),new cljs.core.Keyword(null,"ki","ki",688764251),(0),new cljs.core.Keyword(null,"ka","ka",-2014845534),(0),new cljs.core.Keyword(null,"hi","hi",-1821422114),(0),new cljs.core.Keyword(null,"gy","gy",483233100),(0)], null),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"hu","hu",-1762884758),(0),new cljs.core.Keyword(null,"ky","ky",-1069334593),(0),new cljs.core.Keyword(null,"ke","ke",388998741),(0),new cljs.core.Keyword(null,"gi","gi",615521304),(0),new cljs.core.Keyword(null,"ki","ki",688764251),(0),new cljs.core.Keyword(null,"ka","ka",-2014845534),(0),new cljs.core.Keyword(null,"hi","hi",-1821422114),(0),new cljs.core.Keyword(null,"gy","gy",483233100),(0)], null)], null),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"+","+",1913524883)], null),new cljs.core.Keyword(null,"field","field",-1302436500),unagix.core.first_field.call(null,cljs.core.take.call(null,(36),cljs.core.seq.call(null,kifu))));
var status__$2 = cljs.core.reduce.call(null,((function (status__$1){
return (function (p1__9401_SHARP_,p2__9402_SHARP_){
return unagix.core.reflected_state.call(null,p1__9401_SHARP_,p2__9402_SHARP_);
});})(status__$1))
,status__$1,cljs.core.map.call(null,((function (status__$1){
return (function (x){
return cljs.core.apply.call(null,cljs.core.str,x);
});})(status__$1))
,cljs.core.partition_all.call(null,(2),cljs.core.drop.call(null,(36),cljs.core.seq.call(null,kifu)))));
return status__$2;
});
unagix.core.masu = (function unagix$core$masu(data,owner){
if(typeof unagix.core.t_unagix$core9406 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
unagix.core.t_unagix$core9406 = (function (masu,data,owner,meta9407){
this.masu = masu;
this.data = data;
this.owner = owner;
this.meta9407 = meta9407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
unagix.core.t_unagix$core9406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9408,meta9407__$1){
var self__ = this;
var _9408__$1 = this;
return (new unagix.core.t_unagix$core9406(self__.masu,self__.data,self__.owner,meta9407__$1));
});

unagix.core.t_unagix$core9406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9408){
var self__ = this;
var _9408__$1 = this;
return self__.meta9407;
});

unagix.core.t_unagix$core9406.prototype.om$core$IRender$ = true;

unagix.core.t_unagix$core9406.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return React.DOM.div({"className": "masu"},(cljs.core.truth_(cljs.core.last.call(null,self__.data))?React.DOM.img({"src": [cljs.core.str("images/"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,(1),cljs.core.name.call(null,cljs.core.last.call(null,self__.data))))),cljs.core.str(".png")].join(''), "className": ((cljs.core._EQ_.call(null,cljs.core.subs.call(null,cljs.core.name.call(null,cljs.core.last.call(null,self__.data)),(0),(1)),"-"))?"koma-white":"koma-black")}):null));
});

unagix.core.t_unagix$core9406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"masu","masu",1176107066,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9407","meta9407",894165617,null)], null);
});

unagix.core.t_unagix$core9406.cljs$lang$type = true;

unagix.core.t_unagix$core9406.cljs$lang$ctorStr = "unagix.core/t_unagix$core9406";

unagix.core.t_unagix$core9406.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"unagix.core/t_unagix$core9406");
});

unagix.core.__GT_t_unagix$core9406 = (function unagix$core$masu_$___GT_t_unagix$core9406(masu__$1,data__$1,owner__$1,meta9407){
return (new unagix.core.t_unagix$core9406(masu__$1,data__$1,owner__$1,meta9407));
});

}

return (new unagix.core.t_unagix$core9406(unagix$core$masu,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
unagix.core.masu_row = (function unagix$core$masu_row(app,owner){
if(typeof unagix.core.t_unagix$core9412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
unagix.core.t_unagix$core9412 = (function (masu_row,app,owner,meta9413){
this.masu_row = masu_row;
this.app = app;
this.owner = owner;
this.meta9413 = meta9413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
unagix.core.t_unagix$core9412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9414,meta9413__$1){
var self__ = this;
var _9414__$1 = this;
return (new unagix.core.t_unagix$core9412(self__.masu_row,self__.app,self__.owner,meta9413__$1));
});

unagix.core.t_unagix$core9412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9414){
var self__ = this;
var _9414__$1 = this;
return self__.meta9413;
});

unagix.core.t_unagix$core9412.prototype.om$core$IRender$ = true;

unagix.core.t_unagix$core9412.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "masu-row"},om.core.build_all.call(null,unagix.core.masu,self__.app));
});

unagix.core.t_unagix$core9412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"masu-row","masu-row",1259738966,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9413","meta9413",-584391053,null)], null);
});

unagix.core.t_unagix$core9412.cljs$lang$type = true;

unagix.core.t_unagix$core9412.cljs$lang$ctorStr = "unagix.core/t_unagix$core9412";

unagix.core.t_unagix$core9412.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"unagix.core/t_unagix$core9412");
});

unagix.core.__GT_t_unagix$core9412 = (function unagix$core$masu_row_$___GT_t_unagix$core9412(masu_row__$1,app__$1,owner__$1,meta9413){
return (new unagix.core.t_unagix$core9412(masu_row__$1,app__$1,owner__$1,meta9413));
});

}

return (new unagix.core.t_unagix$core9412(unagix$core$masu_row,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
unagix.core.center = (function unagix$core$center(app,owner){
if(typeof unagix.core.t_unagix$core9418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
unagix.core.t_unagix$core9418 = (function (center,app,owner,meta9419){
this.center = center;
this.app = app;
this.owner = owner;
this.meta9419 = meta9419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
unagix.core.t_unagix$core9418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9420,meta9419__$1){
var self__ = this;
var _9420__$1 = this;
return (new unagix.core.t_unagix$core9418(self__.center,self__.app,self__.owner,meta9419__$1));
});

unagix.core.t_unagix$core9418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9420){
var self__ = this;
var _9420__$1 = this;
return self__.meta9419;
});

unagix.core.t_unagix$core9418.prototype.om$core$IRender$ = true;

unagix.core.t_unagix$core9418.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return React.DOM.div({"className": "center"},React.DOM.div({"className": "button"}),cljs.core.apply.call(null,om.dom.div,{"className": "ban"},om.core.build_all.call(null,unagix.core.masu_row,cljs.core.partition.call(null,(6),cljs.core.sort_by.call(null,cljs.core.first,self__.app)))),React.DOM.div({"className": "button"}));
});

unagix.core.t_unagix$core9418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"center","center",891587159,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9419","meta9419",124336654,null)], null);
});

unagix.core.t_unagix$core9418.cljs$lang$type = true;

unagix.core.t_unagix$core9418.cljs$lang$ctorStr = "unagix.core/t_unagix$core9418";

unagix.core.t_unagix$core9418.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"unagix.core/t_unagix$core9418");
});

unagix.core.__GT_t_unagix$core9418 = (function unagix$core$center_$___GT_t_unagix$core9418(center__$1,app__$1,owner__$1,meta9419){
return (new unagix.core.t_unagix$core9418(center__$1,app__$1,owner__$1,meta9419));
});

}

return (new unagix.core.t_unagix$core9418(unagix$core$center,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
unagix.core.stock_koma = (function unagix$core$stock_koma(app,owner){
if(typeof unagix.core.t_unagix$core9424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
unagix.core.t_unagix$core9424 = (function (stock_koma,app,owner,meta9425){
this.stock_koma = stock_koma;
this.app = app;
this.owner = owner;
this.meta9425 = meta9425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
unagix.core.t_unagix$core9424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9426,meta9425__$1){
var self__ = this;
var _9426__$1 = this;
return (new unagix.core.t_unagix$core9424(self__.stock_koma,self__.app,self__.owner,meta9425__$1));
});

unagix.core.t_unagix$core9424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9426){
var self__ = this;
var _9426__$1 = this;
return self__.meta9425;
});

unagix.core.t_unagix$core9424.prototype.om$core$IRender$ = true;

unagix.core.t_unagix$core9424.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return React.DOM.div({},(((new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.app) > (0)))?React.DOM.img({"src": [cljs.core.str("images/"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"koma-type","koma-type",1128170803).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str(".png")].join(''), "className": [cljs.core.str("koma-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(self__.app)))].join('')}):null),(((new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.app) > (1)))?new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(self__.app):null));
});

unagix.core.t_unagix$core9424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"stock-koma","stock-koma",-1367534591,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9425","meta9425",-486978521,null)], null);
});

unagix.core.t_unagix$core9424.cljs$lang$type = true;

unagix.core.t_unagix$core9424.cljs$lang$ctorStr = "unagix.core/t_unagix$core9424";

unagix.core.t_unagix$core9424.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"unagix.core/t_unagix$core9424");
});

unagix.core.__GT_t_unagix$core9424 = (function unagix$core$stock_koma_$___GT_t_unagix$core9424(stock_koma__$1,app__$1,owner__$1,meta9425){
return (new unagix.core.t_unagix$core9424(stock_koma__$1,app__$1,owner__$1,meta9425));
});

}

return (new unagix.core.t_unagix$core9424(unagix$core$stock_koma,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
unagix.core.komadai = (function unagix$core$komadai(player,owner){
if(typeof unagix.core.t_unagix$core9431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
unagix.core.t_unagix$core9431 = (function (komadai,player,owner,meta9432){
this.komadai = komadai;
this.player = player;
this.owner = owner;
this.meta9432 = meta9432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
unagix.core.t_unagix$core9431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9433,meta9432__$1){
var self__ = this;
var _9433__$1 = this;
return (new unagix.core.t_unagix$core9431(self__.komadai,self__.player,self__.owner,meta9432__$1));
});

unagix.core.t_unagix$core9431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9433){
var self__ = this;
var _9433__$1 = this;
return self__.meta9432;
});

unagix.core.t_unagix$core9431.prototype.om$core$IRender$ = true;

unagix.core.t_unagix$core9431.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "komadai", "id": [cljs.core.str("komadai-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(self__.player)))].join('')},om.core.build_all.call(null,unagix.core.stock_koma,cljs.core.seq.call(null,cljs.core.map.call(null,((function (self__$1){
return (function (p1__9427_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"koma-type","koma-type",1128170803),new cljs.core.Keyword(null,"amount","amount",364489504)],[new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(self__.player),cljs.core.first.call(null,p1__9427_SHARP_),cljs.core.last.call(null,p1__9427_SHARP_)]);
});})(self__$1))
,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(self__.player)))));
});

unagix.core.t_unagix$core9431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"komadai","komadai",43900357,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9432","meta9432",-871980307,null)], null);
});

unagix.core.t_unagix$core9431.cljs$lang$type = true;

unagix.core.t_unagix$core9431.cljs$lang$ctorStr = "unagix.core/t_unagix$core9431";

unagix.core.t_unagix$core9431.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"unagix.core/t_unagix$core9431");
});

unagix.core.__GT_t_unagix$core9431 = (function unagix$core$komadai_$___GT_t_unagix$core9431(komadai__$1,player__$1,owner__$1,meta9432){
return (new unagix.core.t_unagix$core9431(komadai__$1,player__$1,owner__$1,meta9432));
});

}

return (new unagix.core.t_unagix$core9431(unagix$core$komadai,player,owner,cljs.core.PersistentArrayMap.EMPTY));
});
unagix.core.side = (function unagix$core$side(player,owner){
if(typeof unagix.core.t_unagix$core9437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
unagix.core.t_unagix$core9437 = (function (side,player,owner,meta9438){
this.side = side;
this.player = player;
this.owner = owner;
this.meta9438 = meta9438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
unagix.core.t_unagix$core9437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9439,meta9438__$1){
var self__ = this;
var _9439__$1 = this;
return (new unagix.core.t_unagix$core9437(self__.side,self__.player,self__.owner,meta9438__$1));
});

unagix.core.t_unagix$core9437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9439){
var self__ = this;
var _9439__$1 = this;
return self__.meta9438;
});

unagix.core.t_unagix$core9437.prototype.om$core$IRender$ = true;

unagix.core.t_unagix$core9437.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return React.DOM.div({"className": "side"},om.core.build.call(null,unagix.core.komadai,self__.player));
});

unagix.core.t_unagix$core9437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"side","side",2030183806,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9438","meta9438",-1286838676,null)], null);
});

unagix.core.t_unagix$core9437.cljs$lang$type = true;

unagix.core.t_unagix$core9437.cljs$lang$ctorStr = "unagix.core/t_unagix$core9437";

unagix.core.t_unagix$core9437.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"unagix.core/t_unagix$core9437");
});

unagix.core.__GT_t_unagix$core9437 = (function unagix$core$side_$___GT_t_unagix$core9437(side__$1,player__$1,owner__$1,meta9438){
return (new unagix.core.t_unagix$core9437(side__$1,player__$1,owner__$1,meta9438));
});

}

return (new unagix.core.t_unagix$core9437(unagix$core$side,player,owner,cljs.core.PersistentArrayMap.EMPTY));
});
unagix.core.container = (function unagix$core$container(app,owner){
var state = unagix.core.status.call(null,cljs.core.subs.call(null,unagix.core.kifu,(0),((36) + (app * (2)))));
if(typeof unagix.core.t_unagix$core9443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
unagix.core.t_unagix$core9443 = (function (container,app,owner,state,meta9444){
this.container = container;
this.app = app;
this.owner = owner;
this.state = state;
this.meta9444 = meta9444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
unagix.core.t_unagix$core9443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state){
return (function (_9445,meta9444__$1){
var self__ = this;
var _9445__$1 = this;
return (new unagix.core.t_unagix$core9443(self__.container,self__.app,self__.owner,self__.state,meta9444__$1));
});})(state))
;

unagix.core.t_unagix$core9443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state){
return (function (_9445){
var self__ = this;
var _9445__$1 = this;
return self__.meta9444;
});})(state))
;

unagix.core.t_unagix$core9443.prototype.om$core$IRender$ = true;

unagix.core.t_unagix$core9443.prototype.om$core$IRender$render$arity$1 = ((function (state){
return (function (self){
var self__ = this;
var self__$1 = this;
return React.DOM.div({"className": "field"},om.core.build.call(null,unagix.core.side,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.Keyword(null,"-","-",-2112348439).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(self__.state))], null)),om.core.build.call(null,unagix.core.center,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(self__.state)),om.core.build.call(null,unagix.core.side,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.Keyword(null,"+","+",1913524883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(self__.state))], null)),((((0) < self__.app))?React.DOM.button({"id": "triangle-left", "onClick": ((function (self__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,unagix.core.move_index,cljs.core.dec);
});})(self__$1,state))
}):null),(((((36) + (self__.app * (2))) < cljs.core.count.call(null,unagix.core.kifu)))?React.DOM.button({"id": "triangle-right", "onClick": ((function (self__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,unagix.core.move_index,cljs.core.inc);
});})(self__$1,state))
}):null));
});})(state))
;

unagix.core.t_unagix$core9443.getBasis = ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta9444","meta9444",2003848911,null)], null);
});})(state))
;

unagix.core.t_unagix$core9443.cljs$lang$type = true;

unagix.core.t_unagix$core9443.cljs$lang$ctorStr = "unagix.core/t_unagix$core9443";

unagix.core.t_unagix$core9443.cljs$lang$ctorPrWriter = ((function (state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"unagix.core/t_unagix$core9443");
});})(state))
;

unagix.core.__GT_t_unagix$core9443 = ((function (state){
return (function unagix$core$container_$___GT_t_unagix$core9443(container__$1,app__$1,owner__$1,state__$1,meta9444){
return (new unagix.core.t_unagix$core9443(container__$1,app__$1,owner__$1,state__$1,meta9444));
});})(state))
;

}

return (new unagix.core.t_unagix$core9443(unagix$core$container,app,owner,state,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,unagix.core.container,unagix.core.move_index,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
unagix.core.on_js_reload = (function unagix$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1467394614715