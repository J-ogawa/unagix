// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async9907 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9907 = (function (fn_handler,f,meta9908){
this.fn_handler = fn_handler;
this.f = f;
this.meta9908 = meta9908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9909,meta9908__$1){
var self__ = this;
var _9909__$1 = this;
return (new cljs.core.async.t_cljs$core$async9907(self__.fn_handler,self__.f,meta9908__$1));
});

cljs.core.async.t_cljs$core$async9907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9909){
var self__ = this;
var _9909__$1 = this;
return self__.meta9908;
});

cljs.core.async.t_cljs$core$async9907.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta9908","meta9908",-1887627586,null)], null);
});

cljs.core.async.t_cljs$core$async9907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9907";

cljs.core.async.t_cljs$core$async9907.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9907");
});

cljs.core.async.__GT_t_cljs$core$async9907 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async9907(fn_handler__$1,f__$1,meta9908){
return (new cljs.core.async.t_cljs$core$async9907(fn_handler__$1,f__$1,meta9908));
});

}

return (new cljs.core.async.t_cljs$core$async9907(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args9912 = [];
var len__5726__auto___9915 = arguments.length;
var i__5727__auto___9916 = (0);
while(true){
if((i__5727__auto___9916 < len__5726__auto___9915)){
args9912.push((arguments[i__5727__auto___9916]));

var G__9917 = (i__5727__auto___9916 + (1));
i__5727__auto___9916 = G__9917;
continue;
} else {
}
break;
}

var G__9914 = args9912.length;
switch (G__9914) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9912.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args9919 = [];
var len__5726__auto___9922 = arguments.length;
var i__5727__auto___9923 = (0);
while(true){
if((i__5727__auto___9923 < len__5726__auto___9922)){
args9919.push((arguments[i__5727__auto___9923]));

var G__9924 = (i__5727__auto___9923 + (1));
i__5727__auto___9923 = G__9924;
continue;
} else {
}
break;
}

var G__9921 = args9919.length;
switch (G__9921) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9919.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9926 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9926);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9926,ret){
return (function (){
return fn1.call(null,val_9926);
});})(val_9926,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args9927 = [];
var len__5726__auto___9930 = arguments.length;
var i__5727__auto___9931 = (0);
while(true){
if((i__5727__auto___9931 < len__5726__auto___9930)){
args9927.push((arguments[i__5727__auto___9931]));

var G__9932 = (i__5727__auto___9931 + (1));
i__5727__auto___9931 = G__9932;
continue;
} else {
}
break;
}

var G__9929 = args9927.length;
switch (G__9929) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9927.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5571__auto___9934 = n;
var x_9935 = (0);
while(true){
if((x_9935 < n__5571__auto___9934)){
(a[x_9935] = (0));

var G__9936 = (x_9935 + (1));
x_9935 = G__9936;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9937 = (i + (1));
i = G__9937;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9941 = (function (alt_flag,flag,meta9942){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9942 = meta9942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9943,meta9942__$1){
var self__ = this;
var _9943__$1 = this;
return (new cljs.core.async.t_cljs$core$async9941(self__.alt_flag,self__.flag,meta9942__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9943){
var self__ = this;
var _9943__$1 = this;
return self__.meta9942;
});})(flag))
;

cljs.core.async.t_cljs$core$async9941.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9941.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9942","meta9942",-1963673604,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9941";

cljs.core.async.t_cljs$core$async9941.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9941");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9941 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9941(alt_flag__$1,flag__$1,meta9942){
return (new cljs.core.async.t_cljs$core$async9941(alt_flag__$1,flag__$1,meta9942));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9941(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9947 = (function (alt_handler,flag,cb,meta9948){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9948 = meta9948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9949,meta9948__$1){
var self__ = this;
var _9949__$1 = this;
return (new cljs.core.async.t_cljs$core$async9947(self__.alt_handler,self__.flag,self__.cb,meta9948__$1));
});

cljs.core.async.t_cljs$core$async9947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9949){
var self__ = this;
var _9949__$1 = this;
return self__.meta9948;
});

cljs.core.async.t_cljs$core$async9947.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9948","meta9948",-1238970603,null)], null);
});

cljs.core.async.t_cljs$core$async9947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9947";

cljs.core.async.t_cljs$core$async9947.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9947");
});

cljs.core.async.__GT_t_cljs$core$async9947 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9947(alt_handler__$1,flag__$1,cb__$1,meta9948){
return (new cljs.core.async.t_cljs$core$async9947(alt_handler__$1,flag__$1,cb__$1,meta9948));
});

}

return (new cljs.core.async.t_cljs$core$async9947(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9950_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9950_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9951_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9951_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4668__auto__ = wport;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9952 = (i + (1));
i = G__9952;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4668__auto__ = ret;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4656__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___9958 = arguments.length;
var i__5727__auto___9959 = (0);
while(true){
if((i__5727__auto___9959 < len__5726__auto___9958)){
args__5733__auto__.push((arguments[i__5727__auto___9959]));

var G__9960 = (i__5727__auto___9959 + (1));
i__5727__auto___9959 = G__9960;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9955){
var map__9956 = p__9955;
var map__9956__$1 = ((((!((map__9956 == null)))?((((map__9956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9956):map__9956);
var opts = map__9956__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9953){
var G__9954 = cljs.core.first.call(null,seq9953);
var seq9953__$1 = cljs.core.next.call(null,seq9953);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9954,seq9953__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args9961 = [];
var len__5726__auto___10011 = arguments.length;
var i__5727__auto___10012 = (0);
while(true){
if((i__5727__auto___10012 < len__5726__auto___10011)){
args9961.push((arguments[i__5727__auto___10012]));

var G__10013 = (i__5727__auto___10012 + (1));
i__5727__auto___10012 = G__10013;
continue;
} else {
}
break;
}

var G__9963 = args9961.length;
switch (G__9963) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9961.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9859__auto___10015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___10015){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___10015){
return (function (state_9987){
var state_val_9988 = (state_9987[(1)]);
if((state_val_9988 === (7))){
var inst_9983 = (state_9987[(2)]);
var state_9987__$1 = state_9987;
var statearr_9989_10016 = state_9987__$1;
(statearr_9989_10016[(2)] = inst_9983);

(statearr_9989_10016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (1))){
var state_9987__$1 = state_9987;
var statearr_9990_10017 = state_9987__$1;
(statearr_9990_10017[(2)] = null);

(statearr_9990_10017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (4))){
var inst_9966 = (state_9987[(7)]);
var inst_9966__$1 = (state_9987[(2)]);
var inst_9967 = (inst_9966__$1 == null);
var state_9987__$1 = (function (){var statearr_9991 = state_9987;
(statearr_9991[(7)] = inst_9966__$1);

return statearr_9991;
})();
if(cljs.core.truth_(inst_9967)){
var statearr_9992_10018 = state_9987__$1;
(statearr_9992_10018[(1)] = (5));

} else {
var statearr_9993_10019 = state_9987__$1;
(statearr_9993_10019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (13))){
var state_9987__$1 = state_9987;
var statearr_9994_10020 = state_9987__$1;
(statearr_9994_10020[(2)] = null);

(statearr_9994_10020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (6))){
var inst_9966 = (state_9987[(7)]);
var state_9987__$1 = state_9987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9987__$1,(11),to,inst_9966);
} else {
if((state_val_9988 === (3))){
var inst_9985 = (state_9987[(2)]);
var state_9987__$1 = state_9987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9987__$1,inst_9985);
} else {
if((state_val_9988 === (12))){
var state_9987__$1 = state_9987;
var statearr_9995_10021 = state_9987__$1;
(statearr_9995_10021[(2)] = null);

(statearr_9995_10021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (2))){
var state_9987__$1 = state_9987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9987__$1,(4),from);
} else {
if((state_val_9988 === (11))){
var inst_9976 = (state_9987[(2)]);
var state_9987__$1 = state_9987;
if(cljs.core.truth_(inst_9976)){
var statearr_9996_10022 = state_9987__$1;
(statearr_9996_10022[(1)] = (12));

} else {
var statearr_9997_10023 = state_9987__$1;
(statearr_9997_10023[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (9))){
var state_9987__$1 = state_9987;
var statearr_9998_10024 = state_9987__$1;
(statearr_9998_10024[(2)] = null);

(statearr_9998_10024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (5))){
var state_9987__$1 = state_9987;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9999_10025 = state_9987__$1;
(statearr_9999_10025[(1)] = (8));

} else {
var statearr_10000_10026 = state_9987__$1;
(statearr_10000_10026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (14))){
var inst_9981 = (state_9987[(2)]);
var state_9987__$1 = state_9987;
var statearr_10001_10027 = state_9987__$1;
(statearr_10001_10027[(2)] = inst_9981);

(statearr_10001_10027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (10))){
var inst_9973 = (state_9987[(2)]);
var state_9987__$1 = state_9987;
var statearr_10002_10028 = state_9987__$1;
(statearr_10002_10028[(2)] = inst_9973);

(statearr_10002_10028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (8))){
var inst_9970 = cljs.core.async.close_BANG_.call(null,to);
var state_9987__$1 = state_9987;
var statearr_10003_10029 = state_9987__$1;
(statearr_10003_10029[(2)] = inst_9970);

(statearr_10003_10029[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__9859__auto___10015))
;
return ((function (switch__9747__auto__,c__9859__auto___10015){
return (function() {
var cljs$core$async$state_machine__9748__auto__ = null;
var cljs$core$async$state_machine__9748__auto____0 = (function (){
var statearr_10007 = [null,null,null,null,null,null,null,null];
(statearr_10007[(0)] = cljs$core$async$state_machine__9748__auto__);

(statearr_10007[(1)] = (1));

return statearr_10007;
});
var cljs$core$async$state_machine__9748__auto____1 = (function (state_9987){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_9987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e10008){if((e10008 instanceof Object)){
var ex__9751__auto__ = e10008;
var statearr_10009_10030 = state_9987;
(statearr_10009_10030[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10031 = state_9987;
state_9987 = G__10031;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$state_machine__9748__auto__ = function(state_9987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9748__auto____1.call(this,state_9987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9748__auto____0;
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9748__auto____1;
return cljs$core$async$state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___10015))
})();
var state__9861__auto__ = (function (){var statearr_10010 = f__9860__auto__.call(null);
(statearr_10010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___10015);

return statearr_10010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___10015))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10215){
var vec__10216 = p__10215;
var v = cljs.core.nth.call(null,vec__10216,(0),null);
var p = cljs.core.nth.call(null,vec__10216,(1),null);
var job = vec__10216;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9859__auto___10398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___10398,res,vec__10216,v,p,job,jobs,results){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___10398,res,vec__10216,v,p,job,jobs,results){
return (function (state_10221){
var state_val_10222 = (state_10221[(1)]);
if((state_val_10222 === (1))){
var state_10221__$1 = state_10221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10221__$1,(2),res,v);
} else {
if((state_val_10222 === (2))){
var inst_10218 = (state_10221[(2)]);
var inst_10219 = cljs.core.async.close_BANG_.call(null,res);
var state_10221__$1 = (function (){var statearr_10223 = state_10221;
(statearr_10223[(7)] = inst_10218);

return statearr_10223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10221__$1,inst_10219);
} else {
return null;
}
}
});})(c__9859__auto___10398,res,vec__10216,v,p,job,jobs,results))
;
return ((function (switch__9747__auto__,c__9859__auto___10398,res,vec__10216,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0 = (function (){
var statearr_10227 = [null,null,null,null,null,null,null,null];
(statearr_10227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__);

(statearr_10227[(1)] = (1));

return statearr_10227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1 = (function (state_10221){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_10221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e10228){if((e10228 instanceof Object)){
var ex__9751__auto__ = e10228;
var statearr_10229_10399 = state_10221;
(statearr_10229_10399[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10400 = state_10221;
state_10221 = G__10400;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__ = function(state_10221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1.call(this,state_10221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___10398,res,vec__10216,v,p,job,jobs,results))
})();
var state__9861__auto__ = (function (){var statearr_10230 = f__9860__auto__.call(null);
(statearr_10230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___10398);

return statearr_10230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___10398,res,vec__10216,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10231){
var vec__10232 = p__10231;
var v = cljs.core.nth.call(null,vec__10232,(0),null);
var p = cljs.core.nth.call(null,vec__10232,(1),null);
var job = vec__10232;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5571__auto___10401 = n;
var __10402 = (0);
while(true){
if((__10402 < n__5571__auto___10401)){
var G__10233_10403 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10233_10403) {
case "compute":
var c__9859__auto___10405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10402,c__9859__auto___10405,G__10233_10403,n__5571__auto___10401,jobs,results,process,async){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (__10402,c__9859__auto___10405,G__10233_10403,n__5571__auto___10401,jobs,results,process,async){
return (function (state_10246){
var state_val_10247 = (state_10246[(1)]);
if((state_val_10247 === (1))){
var state_10246__$1 = state_10246;
var statearr_10248_10406 = state_10246__$1;
(statearr_10248_10406[(2)] = null);

(statearr_10248_10406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10247 === (2))){
var state_10246__$1 = state_10246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10246__$1,(4),jobs);
} else {
if((state_val_10247 === (3))){
var inst_10244 = (state_10246[(2)]);
var state_10246__$1 = state_10246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10246__$1,inst_10244);
} else {
if((state_val_10247 === (4))){
var inst_10236 = (state_10246[(2)]);
var inst_10237 = process.call(null,inst_10236);
var state_10246__$1 = state_10246;
if(cljs.core.truth_(inst_10237)){
var statearr_10249_10407 = state_10246__$1;
(statearr_10249_10407[(1)] = (5));

} else {
var statearr_10250_10408 = state_10246__$1;
(statearr_10250_10408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10247 === (5))){
var state_10246__$1 = state_10246;
var statearr_10251_10409 = state_10246__$1;
(statearr_10251_10409[(2)] = null);

(statearr_10251_10409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10247 === (6))){
var state_10246__$1 = state_10246;
var statearr_10252_10410 = state_10246__$1;
(statearr_10252_10410[(2)] = null);

(statearr_10252_10410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10247 === (7))){
var inst_10242 = (state_10246[(2)]);
var state_10246__$1 = state_10246;
var statearr_10253_10411 = state_10246__$1;
(statearr_10253_10411[(2)] = inst_10242);

(statearr_10253_10411[(1)] = (3));


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
});})(__10402,c__9859__auto___10405,G__10233_10403,n__5571__auto___10401,jobs,results,process,async))
;
return ((function (__10402,switch__9747__auto__,c__9859__auto___10405,G__10233_10403,n__5571__auto___10401,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0 = (function (){
var statearr_10257 = [null,null,null,null,null,null,null];
(statearr_10257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__);

(statearr_10257[(1)] = (1));

return statearr_10257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1 = (function (state_10246){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_10246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e10258){if((e10258 instanceof Object)){
var ex__9751__auto__ = e10258;
var statearr_10259_10412 = state_10246;
(statearr_10259_10412[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10413 = state_10246;
state_10246 = G__10413;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__ = function(state_10246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1.call(this,state_10246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__;
})()
;})(__10402,switch__9747__auto__,c__9859__auto___10405,G__10233_10403,n__5571__auto___10401,jobs,results,process,async))
})();
var state__9861__auto__ = (function (){var statearr_10260 = f__9860__auto__.call(null);
(statearr_10260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___10405);

return statearr_10260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(__10402,c__9859__auto___10405,G__10233_10403,n__5571__auto___10401,jobs,results,process,async))
);


break;
case "async":
var c__9859__auto___10414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10402,c__9859__auto___10414,G__10233_10403,n__5571__auto___10401,jobs,results,process,async){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (__10402,c__9859__auto___10414,G__10233_10403,n__5571__auto___10401,jobs,results,process,async){
return (function (state_10273){
var state_val_10274 = (state_10273[(1)]);
if((state_val_10274 === (1))){
var state_10273__$1 = state_10273;
var statearr_10275_10415 = state_10273__$1;
(statearr_10275_10415[(2)] = null);

(statearr_10275_10415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (2))){
var state_10273__$1 = state_10273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10273__$1,(4),jobs);
} else {
if((state_val_10274 === (3))){
var inst_10271 = (state_10273[(2)]);
var state_10273__$1 = state_10273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10273__$1,inst_10271);
} else {
if((state_val_10274 === (4))){
var inst_10263 = (state_10273[(2)]);
var inst_10264 = async.call(null,inst_10263);
var state_10273__$1 = state_10273;
if(cljs.core.truth_(inst_10264)){
var statearr_10276_10416 = state_10273__$1;
(statearr_10276_10416[(1)] = (5));

} else {
var statearr_10277_10417 = state_10273__$1;
(statearr_10277_10417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (5))){
var state_10273__$1 = state_10273;
var statearr_10278_10418 = state_10273__$1;
(statearr_10278_10418[(2)] = null);

(statearr_10278_10418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (6))){
var state_10273__$1 = state_10273;
var statearr_10279_10419 = state_10273__$1;
(statearr_10279_10419[(2)] = null);

(statearr_10279_10419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (7))){
var inst_10269 = (state_10273[(2)]);
var state_10273__$1 = state_10273;
var statearr_10280_10420 = state_10273__$1;
(statearr_10280_10420[(2)] = inst_10269);

(statearr_10280_10420[(1)] = (3));


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
});})(__10402,c__9859__auto___10414,G__10233_10403,n__5571__auto___10401,jobs,results,process,async))
;
return ((function (__10402,switch__9747__auto__,c__9859__auto___10414,G__10233_10403,n__5571__auto___10401,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0 = (function (){
var statearr_10284 = [null,null,null,null,null,null,null];
(statearr_10284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__);

(statearr_10284[(1)] = (1));

return statearr_10284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1 = (function (state_10273){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_10273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e10285){if((e10285 instanceof Object)){
var ex__9751__auto__ = e10285;
var statearr_10286_10421 = state_10273;
(statearr_10286_10421[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10422 = state_10273;
state_10273 = G__10422;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__ = function(state_10273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1.call(this,state_10273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__;
})()
;})(__10402,switch__9747__auto__,c__9859__auto___10414,G__10233_10403,n__5571__auto___10401,jobs,results,process,async))
})();
var state__9861__auto__ = (function (){var statearr_10287 = f__9860__auto__.call(null);
(statearr_10287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___10414);

return statearr_10287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(__10402,c__9859__auto___10414,G__10233_10403,n__5571__auto___10401,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10423 = (__10402 + (1));
__10402 = G__10423;
continue;
} else {
}
break;
}

var c__9859__auto___10424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___10424,jobs,results,process,async){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___10424,jobs,results,process,async){
return (function (state_10309){
var state_val_10310 = (state_10309[(1)]);
if((state_val_10310 === (1))){
var state_10309__$1 = state_10309;
var statearr_10311_10425 = state_10309__$1;
(statearr_10311_10425[(2)] = null);

(statearr_10311_10425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10310 === (2))){
var state_10309__$1 = state_10309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10309__$1,(4),from);
} else {
if((state_val_10310 === (3))){
var inst_10307 = (state_10309[(2)]);
var state_10309__$1 = state_10309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10309__$1,inst_10307);
} else {
if((state_val_10310 === (4))){
var inst_10290 = (state_10309[(7)]);
var inst_10290__$1 = (state_10309[(2)]);
var inst_10291 = (inst_10290__$1 == null);
var state_10309__$1 = (function (){var statearr_10312 = state_10309;
(statearr_10312[(7)] = inst_10290__$1);

return statearr_10312;
})();
if(cljs.core.truth_(inst_10291)){
var statearr_10313_10426 = state_10309__$1;
(statearr_10313_10426[(1)] = (5));

} else {
var statearr_10314_10427 = state_10309__$1;
(statearr_10314_10427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10310 === (5))){
var inst_10293 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10309__$1 = state_10309;
var statearr_10315_10428 = state_10309__$1;
(statearr_10315_10428[(2)] = inst_10293);

(statearr_10315_10428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10310 === (6))){
var inst_10290 = (state_10309[(7)]);
var inst_10295 = (state_10309[(8)]);
var inst_10295__$1 = cljs.core.async.chan.call(null,(1));
var inst_10296 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10297 = [inst_10290,inst_10295__$1];
var inst_10298 = (new cljs.core.PersistentVector(null,2,(5),inst_10296,inst_10297,null));
var state_10309__$1 = (function (){var statearr_10316 = state_10309;
(statearr_10316[(8)] = inst_10295__$1);

return statearr_10316;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10309__$1,(8),jobs,inst_10298);
} else {
if((state_val_10310 === (7))){
var inst_10305 = (state_10309[(2)]);
var state_10309__$1 = state_10309;
var statearr_10317_10429 = state_10309__$1;
(statearr_10317_10429[(2)] = inst_10305);

(statearr_10317_10429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10310 === (8))){
var inst_10295 = (state_10309[(8)]);
var inst_10300 = (state_10309[(2)]);
var state_10309__$1 = (function (){var statearr_10318 = state_10309;
(statearr_10318[(9)] = inst_10300);

return statearr_10318;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10309__$1,(9),results,inst_10295);
} else {
if((state_val_10310 === (9))){
var inst_10302 = (state_10309[(2)]);
var state_10309__$1 = (function (){var statearr_10319 = state_10309;
(statearr_10319[(10)] = inst_10302);

return statearr_10319;
})();
var statearr_10320_10430 = state_10309__$1;
(statearr_10320_10430[(2)] = null);

(statearr_10320_10430[(1)] = (2));


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
}
}
});})(c__9859__auto___10424,jobs,results,process,async))
;
return ((function (switch__9747__auto__,c__9859__auto___10424,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0 = (function (){
var statearr_10324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__);

(statearr_10324[(1)] = (1));

return statearr_10324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1 = (function (state_10309){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_10309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e10325){if((e10325 instanceof Object)){
var ex__9751__auto__ = e10325;
var statearr_10326_10431 = state_10309;
(statearr_10326_10431[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10432 = state_10309;
state_10309 = G__10432;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__ = function(state_10309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1.call(this,state_10309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___10424,jobs,results,process,async))
})();
var state__9861__auto__ = (function (){var statearr_10327 = f__9860__auto__.call(null);
(statearr_10327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___10424);

return statearr_10327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___10424,jobs,results,process,async))
);


var c__9859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto__,jobs,results,process,async){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto__,jobs,results,process,async){
return (function (state_10365){
var state_val_10366 = (state_10365[(1)]);
if((state_val_10366 === (7))){
var inst_10361 = (state_10365[(2)]);
var state_10365__$1 = state_10365;
var statearr_10367_10433 = state_10365__$1;
(statearr_10367_10433[(2)] = inst_10361);

(statearr_10367_10433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (20))){
var state_10365__$1 = state_10365;
var statearr_10368_10434 = state_10365__$1;
(statearr_10368_10434[(2)] = null);

(statearr_10368_10434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (1))){
var state_10365__$1 = state_10365;
var statearr_10369_10435 = state_10365__$1;
(statearr_10369_10435[(2)] = null);

(statearr_10369_10435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (4))){
var inst_10330 = (state_10365[(7)]);
var inst_10330__$1 = (state_10365[(2)]);
var inst_10331 = (inst_10330__$1 == null);
var state_10365__$1 = (function (){var statearr_10370 = state_10365;
(statearr_10370[(7)] = inst_10330__$1);

return statearr_10370;
})();
if(cljs.core.truth_(inst_10331)){
var statearr_10371_10436 = state_10365__$1;
(statearr_10371_10436[(1)] = (5));

} else {
var statearr_10372_10437 = state_10365__$1;
(statearr_10372_10437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (15))){
var inst_10343 = (state_10365[(8)]);
var state_10365__$1 = state_10365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10365__$1,(18),to,inst_10343);
} else {
if((state_val_10366 === (21))){
var inst_10356 = (state_10365[(2)]);
var state_10365__$1 = state_10365;
var statearr_10373_10438 = state_10365__$1;
(statearr_10373_10438[(2)] = inst_10356);

(statearr_10373_10438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (13))){
var inst_10358 = (state_10365[(2)]);
var state_10365__$1 = (function (){var statearr_10374 = state_10365;
(statearr_10374[(9)] = inst_10358);

return statearr_10374;
})();
var statearr_10375_10439 = state_10365__$1;
(statearr_10375_10439[(2)] = null);

(statearr_10375_10439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (6))){
var inst_10330 = (state_10365[(7)]);
var state_10365__$1 = state_10365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10365__$1,(11),inst_10330);
} else {
if((state_val_10366 === (17))){
var inst_10351 = (state_10365[(2)]);
var state_10365__$1 = state_10365;
if(cljs.core.truth_(inst_10351)){
var statearr_10376_10440 = state_10365__$1;
(statearr_10376_10440[(1)] = (19));

} else {
var statearr_10377_10441 = state_10365__$1;
(statearr_10377_10441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (3))){
var inst_10363 = (state_10365[(2)]);
var state_10365__$1 = state_10365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10365__$1,inst_10363);
} else {
if((state_val_10366 === (12))){
var inst_10340 = (state_10365[(10)]);
var state_10365__$1 = state_10365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10365__$1,(14),inst_10340);
} else {
if((state_val_10366 === (2))){
var state_10365__$1 = state_10365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10365__$1,(4),results);
} else {
if((state_val_10366 === (19))){
var state_10365__$1 = state_10365;
var statearr_10378_10442 = state_10365__$1;
(statearr_10378_10442[(2)] = null);

(statearr_10378_10442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (11))){
var inst_10340 = (state_10365[(2)]);
var state_10365__$1 = (function (){var statearr_10379 = state_10365;
(statearr_10379[(10)] = inst_10340);

return statearr_10379;
})();
var statearr_10380_10443 = state_10365__$1;
(statearr_10380_10443[(2)] = null);

(statearr_10380_10443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (9))){
var state_10365__$1 = state_10365;
var statearr_10381_10444 = state_10365__$1;
(statearr_10381_10444[(2)] = null);

(statearr_10381_10444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (5))){
var state_10365__$1 = state_10365;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10382_10445 = state_10365__$1;
(statearr_10382_10445[(1)] = (8));

} else {
var statearr_10383_10446 = state_10365__$1;
(statearr_10383_10446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (14))){
var inst_10345 = (state_10365[(11)]);
var inst_10343 = (state_10365[(8)]);
var inst_10343__$1 = (state_10365[(2)]);
var inst_10344 = (inst_10343__$1 == null);
var inst_10345__$1 = cljs.core.not.call(null,inst_10344);
var state_10365__$1 = (function (){var statearr_10384 = state_10365;
(statearr_10384[(11)] = inst_10345__$1);

(statearr_10384[(8)] = inst_10343__$1);

return statearr_10384;
})();
if(inst_10345__$1){
var statearr_10385_10447 = state_10365__$1;
(statearr_10385_10447[(1)] = (15));

} else {
var statearr_10386_10448 = state_10365__$1;
(statearr_10386_10448[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (16))){
var inst_10345 = (state_10365[(11)]);
var state_10365__$1 = state_10365;
var statearr_10387_10449 = state_10365__$1;
(statearr_10387_10449[(2)] = inst_10345);

(statearr_10387_10449[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (10))){
var inst_10337 = (state_10365[(2)]);
var state_10365__$1 = state_10365;
var statearr_10388_10450 = state_10365__$1;
(statearr_10388_10450[(2)] = inst_10337);

(statearr_10388_10450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (18))){
var inst_10348 = (state_10365[(2)]);
var state_10365__$1 = state_10365;
var statearr_10389_10451 = state_10365__$1;
(statearr_10389_10451[(2)] = inst_10348);

(statearr_10389_10451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (8))){
var inst_10334 = cljs.core.async.close_BANG_.call(null,to);
var state_10365__$1 = state_10365;
var statearr_10390_10452 = state_10365__$1;
(statearr_10390_10452[(2)] = inst_10334);

(statearr_10390_10452[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9859__auto__,jobs,results,process,async))
;
return ((function (switch__9747__auto__,c__9859__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0 = (function (){
var statearr_10394 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__);

(statearr_10394[(1)] = (1));

return statearr_10394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1 = (function (state_10365){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_10365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e10395){if((e10395 instanceof Object)){
var ex__9751__auto__ = e10395;
var statearr_10396_10453 = state_10365;
(statearr_10396_10453[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10454 = state_10365;
state_10365 = G__10454;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__ = function(state_10365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1.call(this,state_10365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9748__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto__,jobs,results,process,async))
})();
var state__9861__auto__ = (function (){var statearr_10397 = f__9860__auto__.call(null);
(statearr_10397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto__);

return statearr_10397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto__,jobs,results,process,async))
);

return c__9859__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args10455 = [];
var len__5726__auto___10458 = arguments.length;
var i__5727__auto___10459 = (0);
while(true){
if((i__5727__auto___10459 < len__5726__auto___10458)){
args10455.push((arguments[i__5727__auto___10459]));

var G__10460 = (i__5727__auto___10459 + (1));
i__5727__auto___10459 = G__10460;
continue;
} else {
}
break;
}

var G__10457 = args10455.length;
switch (G__10457) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10455.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args10462 = [];
var len__5726__auto___10465 = arguments.length;
var i__5727__auto___10466 = (0);
while(true){
if((i__5727__auto___10466 < len__5726__auto___10465)){
args10462.push((arguments[i__5727__auto___10466]));

var G__10467 = (i__5727__auto___10466 + (1));
i__5727__auto___10466 = G__10467;
continue;
} else {
}
break;
}

var G__10464 = args10462.length;
switch (G__10464) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10462.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args10469 = [];
var len__5726__auto___10522 = arguments.length;
var i__5727__auto___10523 = (0);
while(true){
if((i__5727__auto___10523 < len__5726__auto___10522)){
args10469.push((arguments[i__5727__auto___10523]));

var G__10524 = (i__5727__auto___10523 + (1));
i__5727__auto___10523 = G__10524;
continue;
} else {
}
break;
}

var G__10471 = args10469.length;
switch (G__10471) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10469.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9859__auto___10526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___10526,tc,fc){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___10526,tc,fc){
return (function (state_10497){
var state_val_10498 = (state_10497[(1)]);
if((state_val_10498 === (7))){
var inst_10493 = (state_10497[(2)]);
var state_10497__$1 = state_10497;
var statearr_10499_10527 = state_10497__$1;
(statearr_10499_10527[(2)] = inst_10493);

(statearr_10499_10527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10498 === (1))){
var state_10497__$1 = state_10497;
var statearr_10500_10528 = state_10497__$1;
(statearr_10500_10528[(2)] = null);

(statearr_10500_10528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10498 === (4))){
var inst_10474 = (state_10497[(7)]);
var inst_10474__$1 = (state_10497[(2)]);
var inst_10475 = (inst_10474__$1 == null);
var state_10497__$1 = (function (){var statearr_10501 = state_10497;
(statearr_10501[(7)] = inst_10474__$1);

return statearr_10501;
})();
if(cljs.core.truth_(inst_10475)){
var statearr_10502_10529 = state_10497__$1;
(statearr_10502_10529[(1)] = (5));

} else {
var statearr_10503_10530 = state_10497__$1;
(statearr_10503_10530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10498 === (13))){
var state_10497__$1 = state_10497;
var statearr_10504_10531 = state_10497__$1;
(statearr_10504_10531[(2)] = null);

(statearr_10504_10531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10498 === (6))){
var inst_10474 = (state_10497[(7)]);
var inst_10480 = p.call(null,inst_10474);
var state_10497__$1 = state_10497;
if(cljs.core.truth_(inst_10480)){
var statearr_10505_10532 = state_10497__$1;
(statearr_10505_10532[(1)] = (9));

} else {
var statearr_10506_10533 = state_10497__$1;
(statearr_10506_10533[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10498 === (3))){
var inst_10495 = (state_10497[(2)]);
var state_10497__$1 = state_10497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10497__$1,inst_10495);
} else {
if((state_val_10498 === (12))){
var state_10497__$1 = state_10497;
var statearr_10507_10534 = state_10497__$1;
(statearr_10507_10534[(2)] = null);

(statearr_10507_10534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10498 === (2))){
var state_10497__$1 = state_10497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10497__$1,(4),ch);
} else {
if((state_val_10498 === (11))){
var inst_10474 = (state_10497[(7)]);
var inst_10484 = (state_10497[(2)]);
var state_10497__$1 = state_10497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10497__$1,(8),inst_10484,inst_10474);
} else {
if((state_val_10498 === (9))){
var state_10497__$1 = state_10497;
var statearr_10508_10535 = state_10497__$1;
(statearr_10508_10535[(2)] = tc);

(statearr_10508_10535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10498 === (5))){
var inst_10477 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10478 = cljs.core.async.close_BANG_.call(null,fc);
var state_10497__$1 = (function (){var statearr_10509 = state_10497;
(statearr_10509[(8)] = inst_10477);

return statearr_10509;
})();
var statearr_10510_10536 = state_10497__$1;
(statearr_10510_10536[(2)] = inst_10478);

(statearr_10510_10536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10498 === (14))){
var inst_10491 = (state_10497[(2)]);
var state_10497__$1 = state_10497;
var statearr_10511_10537 = state_10497__$1;
(statearr_10511_10537[(2)] = inst_10491);

(statearr_10511_10537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10498 === (10))){
var state_10497__$1 = state_10497;
var statearr_10512_10538 = state_10497__$1;
(statearr_10512_10538[(2)] = fc);

(statearr_10512_10538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10498 === (8))){
var inst_10486 = (state_10497[(2)]);
var state_10497__$1 = state_10497;
if(cljs.core.truth_(inst_10486)){
var statearr_10513_10539 = state_10497__$1;
(statearr_10513_10539[(1)] = (12));

} else {
var statearr_10514_10540 = state_10497__$1;
(statearr_10514_10540[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__9859__auto___10526,tc,fc))
;
return ((function (switch__9747__auto__,c__9859__auto___10526,tc,fc){
return (function() {
var cljs$core$async$state_machine__9748__auto__ = null;
var cljs$core$async$state_machine__9748__auto____0 = (function (){
var statearr_10518 = [null,null,null,null,null,null,null,null,null];
(statearr_10518[(0)] = cljs$core$async$state_machine__9748__auto__);

(statearr_10518[(1)] = (1));

return statearr_10518;
});
var cljs$core$async$state_machine__9748__auto____1 = (function (state_10497){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_10497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e10519){if((e10519 instanceof Object)){
var ex__9751__auto__ = e10519;
var statearr_10520_10541 = state_10497;
(statearr_10520_10541[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10542 = state_10497;
state_10497 = G__10542;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$state_machine__9748__auto__ = function(state_10497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9748__auto____1.call(this,state_10497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9748__auto____0;
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9748__auto____1;
return cljs$core$async$state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___10526,tc,fc))
})();
var state__9861__auto__ = (function (){var statearr_10521 = f__9860__auto__.call(null);
(statearr_10521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___10526);

return statearr_10521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___10526,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__9859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto__){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto__){
return (function (state_10589){
var state_val_10590 = (state_10589[(1)]);
if((state_val_10590 === (1))){
var inst_10575 = init;
var state_10589__$1 = (function (){var statearr_10591 = state_10589;
(statearr_10591[(7)] = inst_10575);

return statearr_10591;
})();
var statearr_10592_10607 = state_10589__$1;
(statearr_10592_10607[(2)] = null);

(statearr_10592_10607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10590 === (2))){
var state_10589__$1 = state_10589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10589__$1,(4),ch);
} else {
if((state_val_10590 === (3))){
var inst_10587 = (state_10589[(2)]);
var state_10589__$1 = state_10589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10589__$1,inst_10587);
} else {
if((state_val_10590 === (4))){
var inst_10578 = (state_10589[(8)]);
var inst_10578__$1 = (state_10589[(2)]);
var inst_10579 = (inst_10578__$1 == null);
var state_10589__$1 = (function (){var statearr_10593 = state_10589;
(statearr_10593[(8)] = inst_10578__$1);

return statearr_10593;
})();
if(cljs.core.truth_(inst_10579)){
var statearr_10594_10608 = state_10589__$1;
(statearr_10594_10608[(1)] = (5));

} else {
var statearr_10595_10609 = state_10589__$1;
(statearr_10595_10609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10590 === (5))){
var inst_10575 = (state_10589[(7)]);
var state_10589__$1 = state_10589;
var statearr_10596_10610 = state_10589__$1;
(statearr_10596_10610[(2)] = inst_10575);

(statearr_10596_10610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10590 === (6))){
var inst_10575 = (state_10589[(7)]);
var inst_10578 = (state_10589[(8)]);
var inst_10582 = f.call(null,inst_10575,inst_10578);
var inst_10575__$1 = inst_10582;
var state_10589__$1 = (function (){var statearr_10597 = state_10589;
(statearr_10597[(7)] = inst_10575__$1);

return statearr_10597;
})();
var statearr_10598_10611 = state_10589__$1;
(statearr_10598_10611[(2)] = null);

(statearr_10598_10611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10590 === (7))){
var inst_10585 = (state_10589[(2)]);
var state_10589__$1 = state_10589;
var statearr_10599_10612 = state_10589__$1;
(statearr_10599_10612[(2)] = inst_10585);

(statearr_10599_10612[(1)] = (3));


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
});})(c__9859__auto__))
;
return ((function (switch__9747__auto__,c__9859__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9748__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9748__auto____0 = (function (){
var statearr_10603 = [null,null,null,null,null,null,null,null,null];
(statearr_10603[(0)] = cljs$core$async$reduce_$_state_machine__9748__auto__);

(statearr_10603[(1)] = (1));

return statearr_10603;
});
var cljs$core$async$reduce_$_state_machine__9748__auto____1 = (function (state_10589){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_10589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e10604){if((e10604 instanceof Object)){
var ex__9751__auto__ = e10604;
var statearr_10605_10613 = state_10589;
(statearr_10605_10613[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10614 = state_10589;
state_10589 = G__10614;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9748__auto__ = function(state_10589){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9748__auto____1.call(this,state_10589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9748__auto____0;
cljs$core$async$reduce_$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9748__auto____1;
return cljs$core$async$reduce_$_state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto__))
})();
var state__9861__auto__ = (function (){var statearr_10606 = f__9860__auto__.call(null);
(statearr_10606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto__);

return statearr_10606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto__))
);

return c__9859__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args10615 = [];
var len__5726__auto___10667 = arguments.length;
var i__5727__auto___10668 = (0);
while(true){
if((i__5727__auto___10668 < len__5726__auto___10667)){
args10615.push((arguments[i__5727__auto___10668]));

var G__10669 = (i__5727__auto___10668 + (1));
i__5727__auto___10668 = G__10669;
continue;
} else {
}
break;
}

var G__10617 = args10615.length;
switch (G__10617) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10615.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto__){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto__){
return (function (state_10642){
var state_val_10643 = (state_10642[(1)]);
if((state_val_10643 === (7))){
var inst_10624 = (state_10642[(2)]);
var state_10642__$1 = state_10642;
var statearr_10644_10671 = state_10642__$1;
(statearr_10644_10671[(2)] = inst_10624);

(statearr_10644_10671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (1))){
var inst_10618 = cljs.core.seq.call(null,coll);
var inst_10619 = inst_10618;
var state_10642__$1 = (function (){var statearr_10645 = state_10642;
(statearr_10645[(7)] = inst_10619);

return statearr_10645;
})();
var statearr_10646_10672 = state_10642__$1;
(statearr_10646_10672[(2)] = null);

(statearr_10646_10672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (4))){
var inst_10619 = (state_10642[(7)]);
var inst_10622 = cljs.core.first.call(null,inst_10619);
var state_10642__$1 = state_10642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10642__$1,(7),ch,inst_10622);
} else {
if((state_val_10643 === (13))){
var inst_10636 = (state_10642[(2)]);
var state_10642__$1 = state_10642;
var statearr_10647_10673 = state_10642__$1;
(statearr_10647_10673[(2)] = inst_10636);

(statearr_10647_10673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (6))){
var inst_10627 = (state_10642[(2)]);
var state_10642__$1 = state_10642;
if(cljs.core.truth_(inst_10627)){
var statearr_10648_10674 = state_10642__$1;
(statearr_10648_10674[(1)] = (8));

} else {
var statearr_10649_10675 = state_10642__$1;
(statearr_10649_10675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (3))){
var inst_10640 = (state_10642[(2)]);
var state_10642__$1 = state_10642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10642__$1,inst_10640);
} else {
if((state_val_10643 === (12))){
var state_10642__$1 = state_10642;
var statearr_10650_10676 = state_10642__$1;
(statearr_10650_10676[(2)] = null);

(statearr_10650_10676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (2))){
var inst_10619 = (state_10642[(7)]);
var state_10642__$1 = state_10642;
if(cljs.core.truth_(inst_10619)){
var statearr_10651_10677 = state_10642__$1;
(statearr_10651_10677[(1)] = (4));

} else {
var statearr_10652_10678 = state_10642__$1;
(statearr_10652_10678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (11))){
var inst_10633 = cljs.core.async.close_BANG_.call(null,ch);
var state_10642__$1 = state_10642;
var statearr_10653_10679 = state_10642__$1;
(statearr_10653_10679[(2)] = inst_10633);

(statearr_10653_10679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (9))){
var state_10642__$1 = state_10642;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10654_10680 = state_10642__$1;
(statearr_10654_10680[(1)] = (11));

} else {
var statearr_10655_10681 = state_10642__$1;
(statearr_10655_10681[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (5))){
var inst_10619 = (state_10642[(7)]);
var state_10642__$1 = state_10642;
var statearr_10656_10682 = state_10642__$1;
(statearr_10656_10682[(2)] = inst_10619);

(statearr_10656_10682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (10))){
var inst_10638 = (state_10642[(2)]);
var state_10642__$1 = state_10642;
var statearr_10657_10683 = state_10642__$1;
(statearr_10657_10683[(2)] = inst_10638);

(statearr_10657_10683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (8))){
var inst_10619 = (state_10642[(7)]);
var inst_10629 = cljs.core.next.call(null,inst_10619);
var inst_10619__$1 = inst_10629;
var state_10642__$1 = (function (){var statearr_10658 = state_10642;
(statearr_10658[(7)] = inst_10619__$1);

return statearr_10658;
})();
var statearr_10659_10684 = state_10642__$1;
(statearr_10659_10684[(2)] = null);

(statearr_10659_10684[(1)] = (2));


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
}
}
}
}
}
}
});})(c__9859__auto__))
;
return ((function (switch__9747__auto__,c__9859__auto__){
return (function() {
var cljs$core$async$state_machine__9748__auto__ = null;
var cljs$core$async$state_machine__9748__auto____0 = (function (){
var statearr_10663 = [null,null,null,null,null,null,null,null];
(statearr_10663[(0)] = cljs$core$async$state_machine__9748__auto__);

(statearr_10663[(1)] = (1));

return statearr_10663;
});
var cljs$core$async$state_machine__9748__auto____1 = (function (state_10642){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_10642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e10664){if((e10664 instanceof Object)){
var ex__9751__auto__ = e10664;
var statearr_10665_10685 = state_10642;
(statearr_10665_10685[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10686 = state_10642;
state_10642 = G__10686;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$state_machine__9748__auto__ = function(state_10642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9748__auto____1.call(this,state_10642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9748__auto____0;
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9748__auto____1;
return cljs$core$async$state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto__))
})();
var state__9861__auto__ = (function (){var statearr_10666 = f__9860__auto__.call(null);
(statearr_10666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto__);

return statearr_10666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto__))
);

return c__9859__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,_);
} else {
var m__5324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10908 = (function (mult,ch,cs,meta10909){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10909 = meta10909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10910,meta10909__$1){
var self__ = this;
var _10910__$1 = this;
return (new cljs.core.async.t_cljs$core$async10908(self__.mult,self__.ch,self__.cs,meta10909__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10910){
var self__ = this;
var _10910__$1 = this;
return self__.meta10909;
});})(cs))
;

cljs.core.async.t_cljs$core$async10908.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10908.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10908.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10908.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10908.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10908.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10909","meta10909",-774518607,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10908";

cljs.core.async.t_cljs$core$async10908.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async10908");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10908 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10908(mult__$1,ch__$1,cs__$1,meta10909){
return (new cljs.core.async.t_cljs$core$async10908(mult__$1,ch__$1,cs__$1,meta10909));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10908(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9859__auto___11129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___11129,cs,m,dchan,dctr,done){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___11129,cs,m,dchan,dctr,done){
return (function (state_11041){
var state_val_11042 = (state_11041[(1)]);
if((state_val_11042 === (7))){
var inst_11037 = (state_11041[(2)]);
var state_11041__$1 = state_11041;
var statearr_11043_11130 = state_11041__$1;
(statearr_11043_11130[(2)] = inst_11037);

(statearr_11043_11130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (20))){
var inst_10942 = (state_11041[(7)]);
var inst_10952 = cljs.core.first.call(null,inst_10942);
var inst_10953 = cljs.core.nth.call(null,inst_10952,(0),null);
var inst_10954 = cljs.core.nth.call(null,inst_10952,(1),null);
var state_11041__$1 = (function (){var statearr_11044 = state_11041;
(statearr_11044[(8)] = inst_10953);

return statearr_11044;
})();
if(cljs.core.truth_(inst_10954)){
var statearr_11045_11131 = state_11041__$1;
(statearr_11045_11131[(1)] = (22));

} else {
var statearr_11046_11132 = state_11041__$1;
(statearr_11046_11132[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (27))){
var inst_10984 = (state_11041[(9)]);
var inst_10913 = (state_11041[(10)]);
var inst_10982 = (state_11041[(11)]);
var inst_10989 = (state_11041[(12)]);
var inst_10989__$1 = cljs.core._nth.call(null,inst_10982,inst_10984);
var inst_10990 = cljs.core.async.put_BANG_.call(null,inst_10989__$1,inst_10913,done);
var state_11041__$1 = (function (){var statearr_11047 = state_11041;
(statearr_11047[(12)] = inst_10989__$1);

return statearr_11047;
})();
if(cljs.core.truth_(inst_10990)){
var statearr_11048_11133 = state_11041__$1;
(statearr_11048_11133[(1)] = (30));

} else {
var statearr_11049_11134 = state_11041__$1;
(statearr_11049_11134[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (1))){
var state_11041__$1 = state_11041;
var statearr_11050_11135 = state_11041__$1;
(statearr_11050_11135[(2)] = null);

(statearr_11050_11135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (24))){
var inst_10942 = (state_11041[(7)]);
var inst_10959 = (state_11041[(2)]);
var inst_10960 = cljs.core.next.call(null,inst_10942);
var inst_10922 = inst_10960;
var inst_10923 = null;
var inst_10924 = (0);
var inst_10925 = (0);
var state_11041__$1 = (function (){var statearr_11051 = state_11041;
(statearr_11051[(13)] = inst_10959);

(statearr_11051[(14)] = inst_10924);

(statearr_11051[(15)] = inst_10925);

(statearr_11051[(16)] = inst_10923);

(statearr_11051[(17)] = inst_10922);

return statearr_11051;
})();
var statearr_11052_11136 = state_11041__$1;
(statearr_11052_11136[(2)] = null);

(statearr_11052_11136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (39))){
var state_11041__$1 = state_11041;
var statearr_11056_11137 = state_11041__$1;
(statearr_11056_11137[(2)] = null);

(statearr_11056_11137[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (4))){
var inst_10913 = (state_11041[(10)]);
var inst_10913__$1 = (state_11041[(2)]);
var inst_10914 = (inst_10913__$1 == null);
var state_11041__$1 = (function (){var statearr_11057 = state_11041;
(statearr_11057[(10)] = inst_10913__$1);

return statearr_11057;
})();
if(cljs.core.truth_(inst_10914)){
var statearr_11058_11138 = state_11041__$1;
(statearr_11058_11138[(1)] = (5));

} else {
var statearr_11059_11139 = state_11041__$1;
(statearr_11059_11139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (15))){
var inst_10924 = (state_11041[(14)]);
var inst_10925 = (state_11041[(15)]);
var inst_10923 = (state_11041[(16)]);
var inst_10922 = (state_11041[(17)]);
var inst_10938 = (state_11041[(2)]);
var inst_10939 = (inst_10925 + (1));
var tmp11053 = inst_10924;
var tmp11054 = inst_10923;
var tmp11055 = inst_10922;
var inst_10922__$1 = tmp11055;
var inst_10923__$1 = tmp11054;
var inst_10924__$1 = tmp11053;
var inst_10925__$1 = inst_10939;
var state_11041__$1 = (function (){var statearr_11060 = state_11041;
(statearr_11060[(18)] = inst_10938);

(statearr_11060[(14)] = inst_10924__$1);

(statearr_11060[(15)] = inst_10925__$1);

(statearr_11060[(16)] = inst_10923__$1);

(statearr_11060[(17)] = inst_10922__$1);

return statearr_11060;
})();
var statearr_11061_11140 = state_11041__$1;
(statearr_11061_11140[(2)] = null);

(statearr_11061_11140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (21))){
var inst_10963 = (state_11041[(2)]);
var state_11041__$1 = state_11041;
var statearr_11065_11141 = state_11041__$1;
(statearr_11065_11141[(2)] = inst_10963);

(statearr_11065_11141[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (31))){
var inst_10989 = (state_11041[(12)]);
var inst_10993 = done.call(null,null);
var inst_10994 = cljs.core.async.untap_STAR_.call(null,m,inst_10989);
var state_11041__$1 = (function (){var statearr_11066 = state_11041;
(statearr_11066[(19)] = inst_10993);

return statearr_11066;
})();
var statearr_11067_11142 = state_11041__$1;
(statearr_11067_11142[(2)] = inst_10994);

(statearr_11067_11142[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (32))){
var inst_10984 = (state_11041[(9)]);
var inst_10981 = (state_11041[(20)]);
var inst_10983 = (state_11041[(21)]);
var inst_10982 = (state_11041[(11)]);
var inst_10996 = (state_11041[(2)]);
var inst_10997 = (inst_10984 + (1));
var tmp11062 = inst_10981;
var tmp11063 = inst_10983;
var tmp11064 = inst_10982;
var inst_10981__$1 = tmp11062;
var inst_10982__$1 = tmp11064;
var inst_10983__$1 = tmp11063;
var inst_10984__$1 = inst_10997;
var state_11041__$1 = (function (){var statearr_11068 = state_11041;
(statearr_11068[(22)] = inst_10996);

(statearr_11068[(9)] = inst_10984__$1);

(statearr_11068[(20)] = inst_10981__$1);

(statearr_11068[(21)] = inst_10983__$1);

(statearr_11068[(11)] = inst_10982__$1);

return statearr_11068;
})();
var statearr_11069_11143 = state_11041__$1;
(statearr_11069_11143[(2)] = null);

(statearr_11069_11143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (40))){
var inst_11009 = (state_11041[(23)]);
var inst_11013 = done.call(null,null);
var inst_11014 = cljs.core.async.untap_STAR_.call(null,m,inst_11009);
var state_11041__$1 = (function (){var statearr_11070 = state_11041;
(statearr_11070[(24)] = inst_11013);

return statearr_11070;
})();
var statearr_11071_11144 = state_11041__$1;
(statearr_11071_11144[(2)] = inst_11014);

(statearr_11071_11144[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (33))){
var inst_11000 = (state_11041[(25)]);
var inst_11002 = cljs.core.chunked_seq_QMARK_.call(null,inst_11000);
var state_11041__$1 = state_11041;
if(inst_11002){
var statearr_11072_11145 = state_11041__$1;
(statearr_11072_11145[(1)] = (36));

} else {
var statearr_11073_11146 = state_11041__$1;
(statearr_11073_11146[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (13))){
var inst_10932 = (state_11041[(26)]);
var inst_10935 = cljs.core.async.close_BANG_.call(null,inst_10932);
var state_11041__$1 = state_11041;
var statearr_11074_11147 = state_11041__$1;
(statearr_11074_11147[(2)] = inst_10935);

(statearr_11074_11147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (22))){
var inst_10953 = (state_11041[(8)]);
var inst_10956 = cljs.core.async.close_BANG_.call(null,inst_10953);
var state_11041__$1 = state_11041;
var statearr_11075_11148 = state_11041__$1;
(statearr_11075_11148[(2)] = inst_10956);

(statearr_11075_11148[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (36))){
var inst_11000 = (state_11041[(25)]);
var inst_11004 = cljs.core.chunk_first.call(null,inst_11000);
var inst_11005 = cljs.core.chunk_rest.call(null,inst_11000);
var inst_11006 = cljs.core.count.call(null,inst_11004);
var inst_10981 = inst_11005;
var inst_10982 = inst_11004;
var inst_10983 = inst_11006;
var inst_10984 = (0);
var state_11041__$1 = (function (){var statearr_11076 = state_11041;
(statearr_11076[(9)] = inst_10984);

(statearr_11076[(20)] = inst_10981);

(statearr_11076[(21)] = inst_10983);

(statearr_11076[(11)] = inst_10982);

return statearr_11076;
})();
var statearr_11077_11149 = state_11041__$1;
(statearr_11077_11149[(2)] = null);

(statearr_11077_11149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (41))){
var inst_11000 = (state_11041[(25)]);
var inst_11016 = (state_11041[(2)]);
var inst_11017 = cljs.core.next.call(null,inst_11000);
var inst_10981 = inst_11017;
var inst_10982 = null;
var inst_10983 = (0);
var inst_10984 = (0);
var state_11041__$1 = (function (){var statearr_11078 = state_11041;
(statearr_11078[(9)] = inst_10984);

(statearr_11078[(27)] = inst_11016);

(statearr_11078[(20)] = inst_10981);

(statearr_11078[(21)] = inst_10983);

(statearr_11078[(11)] = inst_10982);

return statearr_11078;
})();
var statearr_11079_11150 = state_11041__$1;
(statearr_11079_11150[(2)] = null);

(statearr_11079_11150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (43))){
var state_11041__$1 = state_11041;
var statearr_11080_11151 = state_11041__$1;
(statearr_11080_11151[(2)] = null);

(statearr_11080_11151[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (29))){
var inst_11025 = (state_11041[(2)]);
var state_11041__$1 = state_11041;
var statearr_11081_11152 = state_11041__$1;
(statearr_11081_11152[(2)] = inst_11025);

(statearr_11081_11152[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (44))){
var inst_11034 = (state_11041[(2)]);
var state_11041__$1 = (function (){var statearr_11082 = state_11041;
(statearr_11082[(28)] = inst_11034);

return statearr_11082;
})();
var statearr_11083_11153 = state_11041__$1;
(statearr_11083_11153[(2)] = null);

(statearr_11083_11153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (6))){
var inst_10973 = (state_11041[(29)]);
var inst_10972 = cljs.core.deref.call(null,cs);
var inst_10973__$1 = cljs.core.keys.call(null,inst_10972);
var inst_10974 = cljs.core.count.call(null,inst_10973__$1);
var inst_10975 = cljs.core.reset_BANG_.call(null,dctr,inst_10974);
var inst_10980 = cljs.core.seq.call(null,inst_10973__$1);
var inst_10981 = inst_10980;
var inst_10982 = null;
var inst_10983 = (0);
var inst_10984 = (0);
var state_11041__$1 = (function (){var statearr_11084 = state_11041;
(statearr_11084[(9)] = inst_10984);

(statearr_11084[(29)] = inst_10973__$1);

(statearr_11084[(20)] = inst_10981);

(statearr_11084[(21)] = inst_10983);

(statearr_11084[(11)] = inst_10982);

(statearr_11084[(30)] = inst_10975);

return statearr_11084;
})();
var statearr_11085_11154 = state_11041__$1;
(statearr_11085_11154[(2)] = null);

(statearr_11085_11154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (28))){
var inst_10981 = (state_11041[(20)]);
var inst_11000 = (state_11041[(25)]);
var inst_11000__$1 = cljs.core.seq.call(null,inst_10981);
var state_11041__$1 = (function (){var statearr_11086 = state_11041;
(statearr_11086[(25)] = inst_11000__$1);

return statearr_11086;
})();
if(inst_11000__$1){
var statearr_11087_11155 = state_11041__$1;
(statearr_11087_11155[(1)] = (33));

} else {
var statearr_11088_11156 = state_11041__$1;
(statearr_11088_11156[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (25))){
var inst_10984 = (state_11041[(9)]);
var inst_10983 = (state_11041[(21)]);
var inst_10986 = (inst_10984 < inst_10983);
var inst_10987 = inst_10986;
var state_11041__$1 = state_11041;
if(cljs.core.truth_(inst_10987)){
var statearr_11089_11157 = state_11041__$1;
(statearr_11089_11157[(1)] = (27));

} else {
var statearr_11090_11158 = state_11041__$1;
(statearr_11090_11158[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (34))){
var state_11041__$1 = state_11041;
var statearr_11091_11159 = state_11041__$1;
(statearr_11091_11159[(2)] = null);

(statearr_11091_11159[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (17))){
var state_11041__$1 = state_11041;
var statearr_11092_11160 = state_11041__$1;
(statearr_11092_11160[(2)] = null);

(statearr_11092_11160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (3))){
var inst_11039 = (state_11041[(2)]);
var state_11041__$1 = state_11041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11041__$1,inst_11039);
} else {
if((state_val_11042 === (12))){
var inst_10968 = (state_11041[(2)]);
var state_11041__$1 = state_11041;
var statearr_11093_11161 = state_11041__$1;
(statearr_11093_11161[(2)] = inst_10968);

(statearr_11093_11161[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (2))){
var state_11041__$1 = state_11041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11041__$1,(4),ch);
} else {
if((state_val_11042 === (23))){
var state_11041__$1 = state_11041;
var statearr_11094_11162 = state_11041__$1;
(statearr_11094_11162[(2)] = null);

(statearr_11094_11162[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (35))){
var inst_11023 = (state_11041[(2)]);
var state_11041__$1 = state_11041;
var statearr_11095_11163 = state_11041__$1;
(statearr_11095_11163[(2)] = inst_11023);

(statearr_11095_11163[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (19))){
var inst_10942 = (state_11041[(7)]);
var inst_10946 = cljs.core.chunk_first.call(null,inst_10942);
var inst_10947 = cljs.core.chunk_rest.call(null,inst_10942);
var inst_10948 = cljs.core.count.call(null,inst_10946);
var inst_10922 = inst_10947;
var inst_10923 = inst_10946;
var inst_10924 = inst_10948;
var inst_10925 = (0);
var state_11041__$1 = (function (){var statearr_11096 = state_11041;
(statearr_11096[(14)] = inst_10924);

(statearr_11096[(15)] = inst_10925);

(statearr_11096[(16)] = inst_10923);

(statearr_11096[(17)] = inst_10922);

return statearr_11096;
})();
var statearr_11097_11164 = state_11041__$1;
(statearr_11097_11164[(2)] = null);

(statearr_11097_11164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (11))){
var inst_10942 = (state_11041[(7)]);
var inst_10922 = (state_11041[(17)]);
var inst_10942__$1 = cljs.core.seq.call(null,inst_10922);
var state_11041__$1 = (function (){var statearr_11098 = state_11041;
(statearr_11098[(7)] = inst_10942__$1);

return statearr_11098;
})();
if(inst_10942__$1){
var statearr_11099_11165 = state_11041__$1;
(statearr_11099_11165[(1)] = (16));

} else {
var statearr_11100_11166 = state_11041__$1;
(statearr_11100_11166[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (9))){
var inst_10970 = (state_11041[(2)]);
var state_11041__$1 = state_11041;
var statearr_11101_11167 = state_11041__$1;
(statearr_11101_11167[(2)] = inst_10970);

(statearr_11101_11167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (5))){
var inst_10920 = cljs.core.deref.call(null,cs);
var inst_10921 = cljs.core.seq.call(null,inst_10920);
var inst_10922 = inst_10921;
var inst_10923 = null;
var inst_10924 = (0);
var inst_10925 = (0);
var state_11041__$1 = (function (){var statearr_11102 = state_11041;
(statearr_11102[(14)] = inst_10924);

(statearr_11102[(15)] = inst_10925);

(statearr_11102[(16)] = inst_10923);

(statearr_11102[(17)] = inst_10922);

return statearr_11102;
})();
var statearr_11103_11168 = state_11041__$1;
(statearr_11103_11168[(2)] = null);

(statearr_11103_11168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (14))){
var state_11041__$1 = state_11041;
var statearr_11104_11169 = state_11041__$1;
(statearr_11104_11169[(2)] = null);

(statearr_11104_11169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (45))){
var inst_11031 = (state_11041[(2)]);
var state_11041__$1 = state_11041;
var statearr_11105_11170 = state_11041__$1;
(statearr_11105_11170[(2)] = inst_11031);

(statearr_11105_11170[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (26))){
var inst_10973 = (state_11041[(29)]);
var inst_11027 = (state_11041[(2)]);
var inst_11028 = cljs.core.seq.call(null,inst_10973);
var state_11041__$1 = (function (){var statearr_11106 = state_11041;
(statearr_11106[(31)] = inst_11027);

return statearr_11106;
})();
if(inst_11028){
var statearr_11107_11171 = state_11041__$1;
(statearr_11107_11171[(1)] = (42));

} else {
var statearr_11108_11172 = state_11041__$1;
(statearr_11108_11172[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (16))){
var inst_10942 = (state_11041[(7)]);
var inst_10944 = cljs.core.chunked_seq_QMARK_.call(null,inst_10942);
var state_11041__$1 = state_11041;
if(inst_10944){
var statearr_11109_11173 = state_11041__$1;
(statearr_11109_11173[(1)] = (19));

} else {
var statearr_11110_11174 = state_11041__$1;
(statearr_11110_11174[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (38))){
var inst_11020 = (state_11041[(2)]);
var state_11041__$1 = state_11041;
var statearr_11111_11175 = state_11041__$1;
(statearr_11111_11175[(2)] = inst_11020);

(statearr_11111_11175[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (30))){
var state_11041__$1 = state_11041;
var statearr_11112_11176 = state_11041__$1;
(statearr_11112_11176[(2)] = null);

(statearr_11112_11176[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (10))){
var inst_10925 = (state_11041[(15)]);
var inst_10923 = (state_11041[(16)]);
var inst_10931 = cljs.core._nth.call(null,inst_10923,inst_10925);
var inst_10932 = cljs.core.nth.call(null,inst_10931,(0),null);
var inst_10933 = cljs.core.nth.call(null,inst_10931,(1),null);
var state_11041__$1 = (function (){var statearr_11113 = state_11041;
(statearr_11113[(26)] = inst_10932);

return statearr_11113;
})();
if(cljs.core.truth_(inst_10933)){
var statearr_11114_11177 = state_11041__$1;
(statearr_11114_11177[(1)] = (13));

} else {
var statearr_11115_11178 = state_11041__$1;
(statearr_11115_11178[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (18))){
var inst_10966 = (state_11041[(2)]);
var state_11041__$1 = state_11041;
var statearr_11116_11179 = state_11041__$1;
(statearr_11116_11179[(2)] = inst_10966);

(statearr_11116_11179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (42))){
var state_11041__$1 = state_11041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11041__$1,(45),dchan);
} else {
if((state_val_11042 === (37))){
var inst_11009 = (state_11041[(23)]);
var inst_10913 = (state_11041[(10)]);
var inst_11000 = (state_11041[(25)]);
var inst_11009__$1 = cljs.core.first.call(null,inst_11000);
var inst_11010 = cljs.core.async.put_BANG_.call(null,inst_11009__$1,inst_10913,done);
var state_11041__$1 = (function (){var statearr_11117 = state_11041;
(statearr_11117[(23)] = inst_11009__$1);

return statearr_11117;
})();
if(cljs.core.truth_(inst_11010)){
var statearr_11118_11180 = state_11041__$1;
(statearr_11118_11180[(1)] = (39));

} else {
var statearr_11119_11181 = state_11041__$1;
(statearr_11119_11181[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11042 === (8))){
var inst_10924 = (state_11041[(14)]);
var inst_10925 = (state_11041[(15)]);
var inst_10927 = (inst_10925 < inst_10924);
var inst_10928 = inst_10927;
var state_11041__$1 = state_11041;
if(cljs.core.truth_(inst_10928)){
var statearr_11120_11182 = state_11041__$1;
(statearr_11120_11182[(1)] = (10));

} else {
var statearr_11121_11183 = state_11041__$1;
(statearr_11121_11183[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9859__auto___11129,cs,m,dchan,dctr,done))
;
return ((function (switch__9747__auto__,c__9859__auto___11129,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9748__auto__ = null;
var cljs$core$async$mult_$_state_machine__9748__auto____0 = (function (){
var statearr_11125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11125[(0)] = cljs$core$async$mult_$_state_machine__9748__auto__);

(statearr_11125[(1)] = (1));

return statearr_11125;
});
var cljs$core$async$mult_$_state_machine__9748__auto____1 = (function (state_11041){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_11041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e11126){if((e11126 instanceof Object)){
var ex__9751__auto__ = e11126;
var statearr_11127_11184 = state_11041;
(statearr_11127_11184[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11185 = state_11041;
state_11041 = G__11185;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9748__auto__ = function(state_11041){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9748__auto____1.call(this,state_11041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9748__auto____0;
cljs$core$async$mult_$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9748__auto____1;
return cljs$core$async$mult_$_state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___11129,cs,m,dchan,dctr,done))
})();
var state__9861__auto__ = (function (){var statearr_11128 = f__9860__auto__.call(null);
(statearr_11128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___11129);

return statearr_11128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___11129,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args11186 = [];
var len__5726__auto___11189 = arguments.length;
var i__5727__auto___11190 = (0);
while(true){
if((i__5727__auto___11190 < len__5726__auto___11189)){
args11186.push((arguments[i__5727__auto___11190]));

var G__11191 = (i__5727__auto___11190 + (1));
i__5727__auto___11190 = G__11191;
continue;
} else {
}
break;
}

var G__11188 = args11186.length;
switch (G__11188) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11186.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,state_map);
} else {
var m__5324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,mode);
} else {
var m__5324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___11203 = arguments.length;
var i__5727__auto___11204 = (0);
while(true){
if((i__5727__auto___11204 < len__5726__auto___11203)){
args__5733__auto__.push((arguments[i__5727__auto___11204]));

var G__11205 = (i__5727__auto___11204 + (1));
i__5727__auto___11204 = G__11205;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11197){
var map__11198 = p__11197;
var map__11198__$1 = ((((!((map__11198 == null)))?((((map__11198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11198):map__11198);
var opts = map__11198__$1;
var statearr_11200_11206 = state;
(statearr_11200_11206[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__11198,map__11198__$1,opts){
return (function (val){
var statearr_11201_11207 = state;
(statearr_11201_11207[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11198,map__11198__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_11202_11208 = state;
(statearr_11202_11208[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11193){
var G__11194 = cljs.core.first.call(null,seq11193);
var seq11193__$1 = cljs.core.next.call(null,seq11193);
var G__11195 = cljs.core.first.call(null,seq11193__$1);
var seq11193__$2 = cljs.core.next.call(null,seq11193__$1);
var G__11196 = cljs.core.first.call(null,seq11193__$2);
var seq11193__$3 = cljs.core.next.call(null,seq11193__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11194,G__11195,G__11196,seq11193__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11372 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11373){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11373 = meta11373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11374,meta11373__$1){
var self__ = this;
var _11374__$1 = this;
return (new cljs.core.async.t_cljs$core$async11372(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11373__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11374){
var self__ = this;
var _11374__$1 = this;
return self__.meta11373;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11372.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11372.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async11372.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11372.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11372.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11372.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11372.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11372.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11373","meta11373",-1535131248,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11372";

cljs.core.async.t_cljs$core$async11372.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async11372");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11372 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11372(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11373){
return (new cljs.core.async.t_cljs$core$async11372(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11373));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11372(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9859__auto___11535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___11535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___11535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11472){
var state_val_11473 = (state_11472[(1)]);
if((state_val_11473 === (7))){
var inst_11390 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
var statearr_11474_11536 = state_11472__$1;
(statearr_11474_11536[(2)] = inst_11390);

(statearr_11474_11536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (20))){
var inst_11402 = (state_11472[(7)]);
var state_11472__$1 = state_11472;
var statearr_11475_11537 = state_11472__$1;
(statearr_11475_11537[(2)] = inst_11402);

(statearr_11475_11537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (27))){
var state_11472__$1 = state_11472;
var statearr_11476_11538 = state_11472__$1;
(statearr_11476_11538[(2)] = null);

(statearr_11476_11538[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (1))){
var inst_11378 = (state_11472[(8)]);
var inst_11378__$1 = calc_state.call(null);
var inst_11380 = (inst_11378__$1 == null);
var inst_11381 = cljs.core.not.call(null,inst_11380);
var state_11472__$1 = (function (){var statearr_11477 = state_11472;
(statearr_11477[(8)] = inst_11378__$1);

return statearr_11477;
})();
if(inst_11381){
var statearr_11478_11539 = state_11472__$1;
(statearr_11478_11539[(1)] = (2));

} else {
var statearr_11479_11540 = state_11472__$1;
(statearr_11479_11540[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (24))){
var inst_11432 = (state_11472[(9)]);
var inst_11425 = (state_11472[(10)]);
var inst_11446 = (state_11472[(11)]);
var inst_11446__$1 = inst_11425.call(null,inst_11432);
var state_11472__$1 = (function (){var statearr_11480 = state_11472;
(statearr_11480[(11)] = inst_11446__$1);

return statearr_11480;
})();
if(cljs.core.truth_(inst_11446__$1)){
var statearr_11481_11541 = state_11472__$1;
(statearr_11481_11541[(1)] = (29));

} else {
var statearr_11482_11542 = state_11472__$1;
(statearr_11482_11542[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (4))){
var inst_11393 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
if(cljs.core.truth_(inst_11393)){
var statearr_11483_11543 = state_11472__$1;
(statearr_11483_11543[(1)] = (8));

} else {
var statearr_11484_11544 = state_11472__$1;
(statearr_11484_11544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (15))){
var inst_11419 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
if(cljs.core.truth_(inst_11419)){
var statearr_11485_11545 = state_11472__$1;
(statearr_11485_11545[(1)] = (19));

} else {
var statearr_11486_11546 = state_11472__$1;
(statearr_11486_11546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (21))){
var inst_11424 = (state_11472[(12)]);
var inst_11424__$1 = (state_11472[(2)]);
var inst_11425 = cljs.core.get.call(null,inst_11424__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11426 = cljs.core.get.call(null,inst_11424__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11427 = cljs.core.get.call(null,inst_11424__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11472__$1 = (function (){var statearr_11487 = state_11472;
(statearr_11487[(12)] = inst_11424__$1);

(statearr_11487[(10)] = inst_11425);

(statearr_11487[(13)] = inst_11426);

return statearr_11487;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11472__$1,(22),inst_11427);
} else {
if((state_val_11473 === (31))){
var inst_11454 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
if(cljs.core.truth_(inst_11454)){
var statearr_11488_11547 = state_11472__$1;
(statearr_11488_11547[(1)] = (32));

} else {
var statearr_11489_11548 = state_11472__$1;
(statearr_11489_11548[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (32))){
var inst_11431 = (state_11472[(14)]);
var state_11472__$1 = state_11472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11472__$1,(35),out,inst_11431);
} else {
if((state_val_11473 === (33))){
var inst_11424 = (state_11472[(12)]);
var inst_11402 = inst_11424;
var state_11472__$1 = (function (){var statearr_11490 = state_11472;
(statearr_11490[(7)] = inst_11402);

return statearr_11490;
})();
var statearr_11491_11549 = state_11472__$1;
(statearr_11491_11549[(2)] = null);

(statearr_11491_11549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (13))){
var inst_11402 = (state_11472[(7)]);
var inst_11409 = inst_11402.cljs$lang$protocol_mask$partition0$;
var inst_11410 = (inst_11409 & (64));
var inst_11411 = inst_11402.cljs$core$ISeq$;
var inst_11412 = (inst_11410) || (inst_11411);
var state_11472__$1 = state_11472;
if(cljs.core.truth_(inst_11412)){
var statearr_11492_11550 = state_11472__$1;
(statearr_11492_11550[(1)] = (16));

} else {
var statearr_11493_11551 = state_11472__$1;
(statearr_11493_11551[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (22))){
var inst_11432 = (state_11472[(9)]);
var inst_11431 = (state_11472[(14)]);
var inst_11430 = (state_11472[(2)]);
var inst_11431__$1 = cljs.core.nth.call(null,inst_11430,(0),null);
var inst_11432__$1 = cljs.core.nth.call(null,inst_11430,(1),null);
var inst_11433 = (inst_11431__$1 == null);
var inst_11434 = cljs.core._EQ_.call(null,inst_11432__$1,change);
var inst_11435 = (inst_11433) || (inst_11434);
var state_11472__$1 = (function (){var statearr_11494 = state_11472;
(statearr_11494[(9)] = inst_11432__$1);

(statearr_11494[(14)] = inst_11431__$1);

return statearr_11494;
})();
if(cljs.core.truth_(inst_11435)){
var statearr_11495_11552 = state_11472__$1;
(statearr_11495_11552[(1)] = (23));

} else {
var statearr_11496_11553 = state_11472__$1;
(statearr_11496_11553[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (36))){
var inst_11424 = (state_11472[(12)]);
var inst_11402 = inst_11424;
var state_11472__$1 = (function (){var statearr_11497 = state_11472;
(statearr_11497[(7)] = inst_11402);

return statearr_11497;
})();
var statearr_11498_11554 = state_11472__$1;
(statearr_11498_11554[(2)] = null);

(statearr_11498_11554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (29))){
var inst_11446 = (state_11472[(11)]);
var state_11472__$1 = state_11472;
var statearr_11499_11555 = state_11472__$1;
(statearr_11499_11555[(2)] = inst_11446);

(statearr_11499_11555[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (6))){
var state_11472__$1 = state_11472;
var statearr_11500_11556 = state_11472__$1;
(statearr_11500_11556[(2)] = false);

(statearr_11500_11556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (28))){
var inst_11442 = (state_11472[(2)]);
var inst_11443 = calc_state.call(null);
var inst_11402 = inst_11443;
var state_11472__$1 = (function (){var statearr_11501 = state_11472;
(statearr_11501[(7)] = inst_11402);

(statearr_11501[(15)] = inst_11442);

return statearr_11501;
})();
var statearr_11502_11557 = state_11472__$1;
(statearr_11502_11557[(2)] = null);

(statearr_11502_11557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (25))){
var inst_11468 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
var statearr_11503_11558 = state_11472__$1;
(statearr_11503_11558[(2)] = inst_11468);

(statearr_11503_11558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (34))){
var inst_11466 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
var statearr_11504_11559 = state_11472__$1;
(statearr_11504_11559[(2)] = inst_11466);

(statearr_11504_11559[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (17))){
var state_11472__$1 = state_11472;
var statearr_11505_11560 = state_11472__$1;
(statearr_11505_11560[(2)] = false);

(statearr_11505_11560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (3))){
var state_11472__$1 = state_11472;
var statearr_11506_11561 = state_11472__$1;
(statearr_11506_11561[(2)] = false);

(statearr_11506_11561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (12))){
var inst_11470 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11472__$1,inst_11470);
} else {
if((state_val_11473 === (2))){
var inst_11378 = (state_11472[(8)]);
var inst_11383 = inst_11378.cljs$lang$protocol_mask$partition0$;
var inst_11384 = (inst_11383 & (64));
var inst_11385 = inst_11378.cljs$core$ISeq$;
var inst_11386 = (inst_11384) || (inst_11385);
var state_11472__$1 = state_11472;
if(cljs.core.truth_(inst_11386)){
var statearr_11507_11562 = state_11472__$1;
(statearr_11507_11562[(1)] = (5));

} else {
var statearr_11508_11563 = state_11472__$1;
(statearr_11508_11563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (23))){
var inst_11431 = (state_11472[(14)]);
var inst_11437 = (inst_11431 == null);
var state_11472__$1 = state_11472;
if(cljs.core.truth_(inst_11437)){
var statearr_11509_11564 = state_11472__$1;
(statearr_11509_11564[(1)] = (26));

} else {
var statearr_11510_11565 = state_11472__$1;
(statearr_11510_11565[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (35))){
var inst_11457 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
if(cljs.core.truth_(inst_11457)){
var statearr_11511_11566 = state_11472__$1;
(statearr_11511_11566[(1)] = (36));

} else {
var statearr_11512_11567 = state_11472__$1;
(statearr_11512_11567[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (19))){
var inst_11402 = (state_11472[(7)]);
var inst_11421 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11402);
var state_11472__$1 = state_11472;
var statearr_11513_11568 = state_11472__$1;
(statearr_11513_11568[(2)] = inst_11421);

(statearr_11513_11568[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (11))){
var inst_11402 = (state_11472[(7)]);
var inst_11406 = (inst_11402 == null);
var inst_11407 = cljs.core.not.call(null,inst_11406);
var state_11472__$1 = state_11472;
if(inst_11407){
var statearr_11514_11569 = state_11472__$1;
(statearr_11514_11569[(1)] = (13));

} else {
var statearr_11515_11570 = state_11472__$1;
(statearr_11515_11570[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (9))){
var inst_11378 = (state_11472[(8)]);
var state_11472__$1 = state_11472;
var statearr_11516_11571 = state_11472__$1;
(statearr_11516_11571[(2)] = inst_11378);

(statearr_11516_11571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (5))){
var state_11472__$1 = state_11472;
var statearr_11517_11572 = state_11472__$1;
(statearr_11517_11572[(2)] = true);

(statearr_11517_11572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (14))){
var state_11472__$1 = state_11472;
var statearr_11518_11573 = state_11472__$1;
(statearr_11518_11573[(2)] = false);

(statearr_11518_11573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (26))){
var inst_11432 = (state_11472[(9)]);
var inst_11439 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11432);
var state_11472__$1 = state_11472;
var statearr_11519_11574 = state_11472__$1;
(statearr_11519_11574[(2)] = inst_11439);

(statearr_11519_11574[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (16))){
var state_11472__$1 = state_11472;
var statearr_11520_11575 = state_11472__$1;
(statearr_11520_11575[(2)] = true);

(statearr_11520_11575[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (38))){
var inst_11462 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
var statearr_11521_11576 = state_11472__$1;
(statearr_11521_11576[(2)] = inst_11462);

(statearr_11521_11576[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (30))){
var inst_11432 = (state_11472[(9)]);
var inst_11425 = (state_11472[(10)]);
var inst_11426 = (state_11472[(13)]);
var inst_11449 = cljs.core.empty_QMARK_.call(null,inst_11425);
var inst_11450 = inst_11426.call(null,inst_11432);
var inst_11451 = cljs.core.not.call(null,inst_11450);
var inst_11452 = (inst_11449) && (inst_11451);
var state_11472__$1 = state_11472;
var statearr_11522_11577 = state_11472__$1;
(statearr_11522_11577[(2)] = inst_11452);

(statearr_11522_11577[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (10))){
var inst_11378 = (state_11472[(8)]);
var inst_11398 = (state_11472[(2)]);
var inst_11399 = cljs.core.get.call(null,inst_11398,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11400 = cljs.core.get.call(null,inst_11398,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11401 = cljs.core.get.call(null,inst_11398,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11402 = inst_11378;
var state_11472__$1 = (function (){var statearr_11523 = state_11472;
(statearr_11523[(16)] = inst_11400);

(statearr_11523[(7)] = inst_11402);

(statearr_11523[(17)] = inst_11401);

(statearr_11523[(18)] = inst_11399);

return statearr_11523;
})();
var statearr_11524_11578 = state_11472__$1;
(statearr_11524_11578[(2)] = null);

(statearr_11524_11578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (18))){
var inst_11416 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
var statearr_11525_11579 = state_11472__$1;
(statearr_11525_11579[(2)] = inst_11416);

(statearr_11525_11579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (37))){
var state_11472__$1 = state_11472;
var statearr_11526_11580 = state_11472__$1;
(statearr_11526_11580[(2)] = null);

(statearr_11526_11580[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (8))){
var inst_11378 = (state_11472[(8)]);
var inst_11395 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11378);
var state_11472__$1 = state_11472;
var statearr_11527_11581 = state_11472__$1;
(statearr_11527_11581[(2)] = inst_11395);

(statearr_11527_11581[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9859__auto___11535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9747__auto__,c__9859__auto___11535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9748__auto__ = null;
var cljs$core$async$mix_$_state_machine__9748__auto____0 = (function (){
var statearr_11531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11531[(0)] = cljs$core$async$mix_$_state_machine__9748__auto__);

(statearr_11531[(1)] = (1));

return statearr_11531;
});
var cljs$core$async$mix_$_state_machine__9748__auto____1 = (function (state_11472){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_11472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e11532){if((e11532 instanceof Object)){
var ex__9751__auto__ = e11532;
var statearr_11533_11582 = state_11472;
(statearr_11533_11582[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11583 = state_11472;
state_11472 = G__11583;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9748__auto__ = function(state_11472){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9748__auto____1.call(this,state_11472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9748__auto____0;
cljs$core$async$mix_$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9748__auto____1;
return cljs$core$async$mix_$_state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___11535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9861__auto__ = (function (){var statearr_11534 = f__9860__auto__.call(null);
(statearr_11534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___11535);

return statearr_11534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___11535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11584 = [];
var len__5726__auto___11587 = arguments.length;
var i__5727__auto___11588 = (0);
while(true){
if((i__5727__auto___11588 < len__5726__auto___11587)){
args11584.push((arguments[i__5727__auto___11588]));

var G__11589 = (i__5727__auto___11588 + (1));
i__5727__auto___11588 = G__11589;
continue;
} else {
}
break;
}

var G__11586 = args11584.length;
switch (G__11586) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11584.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args11592 = [];
var len__5726__auto___11717 = arguments.length;
var i__5727__auto___11718 = (0);
while(true){
if((i__5727__auto___11718 < len__5726__auto___11717)){
args11592.push((arguments[i__5727__auto___11718]));

var G__11719 = (i__5727__auto___11718 + (1));
i__5727__auto___11718 = G__11719;
continue;
} else {
}
break;
}

var G__11594 = args11592.length;
switch (G__11594) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11592.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4668__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4668__auto__,mults){
return (function (p1__11591_SHARP_){
if(cljs.core.truth_(p1__11591_SHARP_.call(null,topic))){
return p1__11591_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11591_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11595 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11596){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11596 = meta11596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11597,meta11596__$1){
var self__ = this;
var _11597__$1 = this;
return (new cljs.core.async.t_cljs$core$async11595(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11596__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11597){
var self__ = this;
var _11597__$1 = this;
return self__.meta11596;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11595.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11595.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async11595.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11595.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11595.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11595.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11595.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11596","meta11596",-1807657920,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11595";

cljs.core.async.t_cljs$core$async11595.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async11595");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11595 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11595(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11596){
return (new cljs.core.async.t_cljs$core$async11595(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11596));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11595(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9859__auto___11721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___11721,mults,ensure_mult,p){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___11721,mults,ensure_mult,p){
return (function (state_11669){
var state_val_11670 = (state_11669[(1)]);
if((state_val_11670 === (7))){
var inst_11665 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
var statearr_11671_11722 = state_11669__$1;
(statearr_11671_11722[(2)] = inst_11665);

(statearr_11671_11722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (20))){
var state_11669__$1 = state_11669;
var statearr_11672_11723 = state_11669__$1;
(statearr_11672_11723[(2)] = null);

(statearr_11672_11723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (1))){
var state_11669__$1 = state_11669;
var statearr_11673_11724 = state_11669__$1;
(statearr_11673_11724[(2)] = null);

(statearr_11673_11724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (24))){
var inst_11648 = (state_11669[(7)]);
var inst_11657 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11648);
var state_11669__$1 = state_11669;
var statearr_11674_11725 = state_11669__$1;
(statearr_11674_11725[(2)] = inst_11657);

(statearr_11674_11725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (4))){
var inst_11600 = (state_11669[(8)]);
var inst_11600__$1 = (state_11669[(2)]);
var inst_11601 = (inst_11600__$1 == null);
var state_11669__$1 = (function (){var statearr_11675 = state_11669;
(statearr_11675[(8)] = inst_11600__$1);

return statearr_11675;
})();
if(cljs.core.truth_(inst_11601)){
var statearr_11676_11726 = state_11669__$1;
(statearr_11676_11726[(1)] = (5));

} else {
var statearr_11677_11727 = state_11669__$1;
(statearr_11677_11727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (15))){
var inst_11642 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
var statearr_11678_11728 = state_11669__$1;
(statearr_11678_11728[(2)] = inst_11642);

(statearr_11678_11728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (21))){
var inst_11662 = (state_11669[(2)]);
var state_11669__$1 = (function (){var statearr_11679 = state_11669;
(statearr_11679[(9)] = inst_11662);

return statearr_11679;
})();
var statearr_11680_11729 = state_11669__$1;
(statearr_11680_11729[(2)] = null);

(statearr_11680_11729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (13))){
var inst_11624 = (state_11669[(10)]);
var inst_11626 = cljs.core.chunked_seq_QMARK_.call(null,inst_11624);
var state_11669__$1 = state_11669;
if(inst_11626){
var statearr_11681_11730 = state_11669__$1;
(statearr_11681_11730[(1)] = (16));

} else {
var statearr_11682_11731 = state_11669__$1;
(statearr_11682_11731[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (22))){
var inst_11654 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
if(cljs.core.truth_(inst_11654)){
var statearr_11683_11732 = state_11669__$1;
(statearr_11683_11732[(1)] = (23));

} else {
var statearr_11684_11733 = state_11669__$1;
(statearr_11684_11733[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (6))){
var inst_11648 = (state_11669[(7)]);
var inst_11600 = (state_11669[(8)]);
var inst_11650 = (state_11669[(11)]);
var inst_11648__$1 = topic_fn.call(null,inst_11600);
var inst_11649 = cljs.core.deref.call(null,mults);
var inst_11650__$1 = cljs.core.get.call(null,inst_11649,inst_11648__$1);
var state_11669__$1 = (function (){var statearr_11685 = state_11669;
(statearr_11685[(7)] = inst_11648__$1);

(statearr_11685[(11)] = inst_11650__$1);

return statearr_11685;
})();
if(cljs.core.truth_(inst_11650__$1)){
var statearr_11686_11734 = state_11669__$1;
(statearr_11686_11734[(1)] = (19));

} else {
var statearr_11687_11735 = state_11669__$1;
(statearr_11687_11735[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (25))){
var inst_11659 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
var statearr_11688_11736 = state_11669__$1;
(statearr_11688_11736[(2)] = inst_11659);

(statearr_11688_11736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (17))){
var inst_11624 = (state_11669[(10)]);
var inst_11633 = cljs.core.first.call(null,inst_11624);
var inst_11634 = cljs.core.async.muxch_STAR_.call(null,inst_11633);
var inst_11635 = cljs.core.async.close_BANG_.call(null,inst_11634);
var inst_11636 = cljs.core.next.call(null,inst_11624);
var inst_11610 = inst_11636;
var inst_11611 = null;
var inst_11612 = (0);
var inst_11613 = (0);
var state_11669__$1 = (function (){var statearr_11689 = state_11669;
(statearr_11689[(12)] = inst_11611);

(statearr_11689[(13)] = inst_11613);

(statearr_11689[(14)] = inst_11610);

(statearr_11689[(15)] = inst_11635);

(statearr_11689[(16)] = inst_11612);

return statearr_11689;
})();
var statearr_11690_11737 = state_11669__$1;
(statearr_11690_11737[(2)] = null);

(statearr_11690_11737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (3))){
var inst_11667 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11669__$1,inst_11667);
} else {
if((state_val_11670 === (12))){
var inst_11644 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
var statearr_11691_11738 = state_11669__$1;
(statearr_11691_11738[(2)] = inst_11644);

(statearr_11691_11738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (2))){
var state_11669__$1 = state_11669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11669__$1,(4),ch);
} else {
if((state_val_11670 === (23))){
var state_11669__$1 = state_11669;
var statearr_11692_11739 = state_11669__$1;
(statearr_11692_11739[(2)] = null);

(statearr_11692_11739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (19))){
var inst_11600 = (state_11669[(8)]);
var inst_11650 = (state_11669[(11)]);
var inst_11652 = cljs.core.async.muxch_STAR_.call(null,inst_11650);
var state_11669__$1 = state_11669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11669__$1,(22),inst_11652,inst_11600);
} else {
if((state_val_11670 === (11))){
var inst_11610 = (state_11669[(14)]);
var inst_11624 = (state_11669[(10)]);
var inst_11624__$1 = cljs.core.seq.call(null,inst_11610);
var state_11669__$1 = (function (){var statearr_11693 = state_11669;
(statearr_11693[(10)] = inst_11624__$1);

return statearr_11693;
})();
if(inst_11624__$1){
var statearr_11694_11740 = state_11669__$1;
(statearr_11694_11740[(1)] = (13));

} else {
var statearr_11695_11741 = state_11669__$1;
(statearr_11695_11741[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (9))){
var inst_11646 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
var statearr_11696_11742 = state_11669__$1;
(statearr_11696_11742[(2)] = inst_11646);

(statearr_11696_11742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (5))){
var inst_11607 = cljs.core.deref.call(null,mults);
var inst_11608 = cljs.core.vals.call(null,inst_11607);
var inst_11609 = cljs.core.seq.call(null,inst_11608);
var inst_11610 = inst_11609;
var inst_11611 = null;
var inst_11612 = (0);
var inst_11613 = (0);
var state_11669__$1 = (function (){var statearr_11697 = state_11669;
(statearr_11697[(12)] = inst_11611);

(statearr_11697[(13)] = inst_11613);

(statearr_11697[(14)] = inst_11610);

(statearr_11697[(16)] = inst_11612);

return statearr_11697;
})();
var statearr_11698_11743 = state_11669__$1;
(statearr_11698_11743[(2)] = null);

(statearr_11698_11743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (14))){
var state_11669__$1 = state_11669;
var statearr_11702_11744 = state_11669__$1;
(statearr_11702_11744[(2)] = null);

(statearr_11702_11744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (16))){
var inst_11624 = (state_11669[(10)]);
var inst_11628 = cljs.core.chunk_first.call(null,inst_11624);
var inst_11629 = cljs.core.chunk_rest.call(null,inst_11624);
var inst_11630 = cljs.core.count.call(null,inst_11628);
var inst_11610 = inst_11629;
var inst_11611 = inst_11628;
var inst_11612 = inst_11630;
var inst_11613 = (0);
var state_11669__$1 = (function (){var statearr_11703 = state_11669;
(statearr_11703[(12)] = inst_11611);

(statearr_11703[(13)] = inst_11613);

(statearr_11703[(14)] = inst_11610);

(statearr_11703[(16)] = inst_11612);

return statearr_11703;
})();
var statearr_11704_11745 = state_11669__$1;
(statearr_11704_11745[(2)] = null);

(statearr_11704_11745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (10))){
var inst_11611 = (state_11669[(12)]);
var inst_11613 = (state_11669[(13)]);
var inst_11610 = (state_11669[(14)]);
var inst_11612 = (state_11669[(16)]);
var inst_11618 = cljs.core._nth.call(null,inst_11611,inst_11613);
var inst_11619 = cljs.core.async.muxch_STAR_.call(null,inst_11618);
var inst_11620 = cljs.core.async.close_BANG_.call(null,inst_11619);
var inst_11621 = (inst_11613 + (1));
var tmp11699 = inst_11611;
var tmp11700 = inst_11610;
var tmp11701 = inst_11612;
var inst_11610__$1 = tmp11700;
var inst_11611__$1 = tmp11699;
var inst_11612__$1 = tmp11701;
var inst_11613__$1 = inst_11621;
var state_11669__$1 = (function (){var statearr_11705 = state_11669;
(statearr_11705[(12)] = inst_11611__$1);

(statearr_11705[(17)] = inst_11620);

(statearr_11705[(13)] = inst_11613__$1);

(statearr_11705[(14)] = inst_11610__$1);

(statearr_11705[(16)] = inst_11612__$1);

return statearr_11705;
})();
var statearr_11706_11746 = state_11669__$1;
(statearr_11706_11746[(2)] = null);

(statearr_11706_11746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (18))){
var inst_11639 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
var statearr_11707_11747 = state_11669__$1;
(statearr_11707_11747[(2)] = inst_11639);

(statearr_11707_11747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (8))){
var inst_11613 = (state_11669[(13)]);
var inst_11612 = (state_11669[(16)]);
var inst_11615 = (inst_11613 < inst_11612);
var inst_11616 = inst_11615;
var state_11669__$1 = state_11669;
if(cljs.core.truth_(inst_11616)){
var statearr_11708_11748 = state_11669__$1;
(statearr_11708_11748[(1)] = (10));

} else {
var statearr_11709_11749 = state_11669__$1;
(statearr_11709_11749[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9859__auto___11721,mults,ensure_mult,p))
;
return ((function (switch__9747__auto__,c__9859__auto___11721,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9748__auto__ = null;
var cljs$core$async$state_machine__9748__auto____0 = (function (){
var statearr_11713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11713[(0)] = cljs$core$async$state_machine__9748__auto__);

(statearr_11713[(1)] = (1));

return statearr_11713;
});
var cljs$core$async$state_machine__9748__auto____1 = (function (state_11669){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_11669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e11714){if((e11714 instanceof Object)){
var ex__9751__auto__ = e11714;
var statearr_11715_11750 = state_11669;
(statearr_11715_11750[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11751 = state_11669;
state_11669 = G__11751;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$state_machine__9748__auto__ = function(state_11669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9748__auto____1.call(this,state_11669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9748__auto____0;
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9748__auto____1;
return cljs$core$async$state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___11721,mults,ensure_mult,p))
})();
var state__9861__auto__ = (function (){var statearr_11716 = f__9860__auto__.call(null);
(statearr_11716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___11721);

return statearr_11716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___11721,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args11752 = [];
var len__5726__auto___11755 = arguments.length;
var i__5727__auto___11756 = (0);
while(true){
if((i__5727__auto___11756 < len__5726__auto___11755)){
args11752.push((arguments[i__5727__auto___11756]));

var G__11757 = (i__5727__auto___11756 + (1));
i__5727__auto___11756 = G__11757;
continue;
} else {
}
break;
}

var G__11754 = args11752.length;
switch (G__11754) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11752.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args11759 = [];
var len__5726__auto___11762 = arguments.length;
var i__5727__auto___11763 = (0);
while(true){
if((i__5727__auto___11763 < len__5726__auto___11762)){
args11759.push((arguments[i__5727__auto___11763]));

var G__11764 = (i__5727__auto___11763 + (1));
i__5727__auto___11763 = G__11764;
continue;
} else {
}
break;
}

var G__11761 = args11759.length;
switch (G__11761) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11759.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args11766 = [];
var len__5726__auto___11837 = arguments.length;
var i__5727__auto___11838 = (0);
while(true){
if((i__5727__auto___11838 < len__5726__auto___11837)){
args11766.push((arguments[i__5727__auto___11838]));

var G__11839 = (i__5727__auto___11838 + (1));
i__5727__auto___11838 = G__11839;
continue;
} else {
}
break;
}

var G__11768 = args11766.length;
switch (G__11768) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11766.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__9859__auto___11841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___11841,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___11841,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11807){
var state_val_11808 = (state_11807[(1)]);
if((state_val_11808 === (7))){
var state_11807__$1 = state_11807;
var statearr_11809_11842 = state_11807__$1;
(statearr_11809_11842[(2)] = null);

(statearr_11809_11842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11808 === (1))){
var state_11807__$1 = state_11807;
var statearr_11810_11843 = state_11807__$1;
(statearr_11810_11843[(2)] = null);

(statearr_11810_11843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11808 === (4))){
var inst_11771 = (state_11807[(7)]);
var inst_11773 = (inst_11771 < cnt);
var state_11807__$1 = state_11807;
if(cljs.core.truth_(inst_11773)){
var statearr_11811_11844 = state_11807__$1;
(statearr_11811_11844[(1)] = (6));

} else {
var statearr_11812_11845 = state_11807__$1;
(statearr_11812_11845[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11808 === (15))){
var inst_11803 = (state_11807[(2)]);
var state_11807__$1 = state_11807;
var statearr_11813_11846 = state_11807__$1;
(statearr_11813_11846[(2)] = inst_11803);

(statearr_11813_11846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11808 === (13))){
var inst_11796 = cljs.core.async.close_BANG_.call(null,out);
var state_11807__$1 = state_11807;
var statearr_11814_11847 = state_11807__$1;
(statearr_11814_11847[(2)] = inst_11796);

(statearr_11814_11847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11808 === (6))){
var state_11807__$1 = state_11807;
var statearr_11815_11848 = state_11807__$1;
(statearr_11815_11848[(2)] = null);

(statearr_11815_11848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11808 === (3))){
var inst_11805 = (state_11807[(2)]);
var state_11807__$1 = state_11807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11807__$1,inst_11805);
} else {
if((state_val_11808 === (12))){
var inst_11793 = (state_11807[(8)]);
var inst_11793__$1 = (state_11807[(2)]);
var inst_11794 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11793__$1);
var state_11807__$1 = (function (){var statearr_11816 = state_11807;
(statearr_11816[(8)] = inst_11793__$1);

return statearr_11816;
})();
if(cljs.core.truth_(inst_11794)){
var statearr_11817_11849 = state_11807__$1;
(statearr_11817_11849[(1)] = (13));

} else {
var statearr_11818_11850 = state_11807__$1;
(statearr_11818_11850[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11808 === (2))){
var inst_11770 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11771 = (0);
var state_11807__$1 = (function (){var statearr_11819 = state_11807;
(statearr_11819[(9)] = inst_11770);

(statearr_11819[(7)] = inst_11771);

return statearr_11819;
})();
var statearr_11820_11851 = state_11807__$1;
(statearr_11820_11851[(2)] = null);

(statearr_11820_11851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11808 === (11))){
var inst_11771 = (state_11807[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11807,(10),Object,null,(9));
var inst_11780 = chs__$1.call(null,inst_11771);
var inst_11781 = done.call(null,inst_11771);
var inst_11782 = cljs.core.async.take_BANG_.call(null,inst_11780,inst_11781);
var state_11807__$1 = state_11807;
var statearr_11821_11852 = state_11807__$1;
(statearr_11821_11852[(2)] = inst_11782);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11807__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11808 === (9))){
var inst_11771 = (state_11807[(7)]);
var inst_11784 = (state_11807[(2)]);
var inst_11785 = (inst_11771 + (1));
var inst_11771__$1 = inst_11785;
var state_11807__$1 = (function (){var statearr_11822 = state_11807;
(statearr_11822[(10)] = inst_11784);

(statearr_11822[(7)] = inst_11771__$1);

return statearr_11822;
})();
var statearr_11823_11853 = state_11807__$1;
(statearr_11823_11853[(2)] = null);

(statearr_11823_11853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11808 === (5))){
var inst_11791 = (state_11807[(2)]);
var state_11807__$1 = (function (){var statearr_11824 = state_11807;
(statearr_11824[(11)] = inst_11791);

return statearr_11824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11807__$1,(12),dchan);
} else {
if((state_val_11808 === (14))){
var inst_11793 = (state_11807[(8)]);
var inst_11798 = cljs.core.apply.call(null,f,inst_11793);
var state_11807__$1 = state_11807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11807__$1,(16),out,inst_11798);
} else {
if((state_val_11808 === (16))){
var inst_11800 = (state_11807[(2)]);
var state_11807__$1 = (function (){var statearr_11825 = state_11807;
(statearr_11825[(12)] = inst_11800);

return statearr_11825;
})();
var statearr_11826_11854 = state_11807__$1;
(statearr_11826_11854[(2)] = null);

(statearr_11826_11854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11808 === (10))){
var inst_11775 = (state_11807[(2)]);
var inst_11776 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11807__$1 = (function (){var statearr_11827 = state_11807;
(statearr_11827[(13)] = inst_11775);

return statearr_11827;
})();
var statearr_11828_11855 = state_11807__$1;
(statearr_11828_11855[(2)] = inst_11776);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11807__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11808 === (8))){
var inst_11789 = (state_11807[(2)]);
var state_11807__$1 = state_11807;
var statearr_11829_11856 = state_11807__$1;
(statearr_11829_11856[(2)] = inst_11789);

(statearr_11829_11856[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__9859__auto___11841,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9747__auto__,c__9859__auto___11841,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9748__auto__ = null;
var cljs$core$async$state_machine__9748__auto____0 = (function (){
var statearr_11833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11833[(0)] = cljs$core$async$state_machine__9748__auto__);

(statearr_11833[(1)] = (1));

return statearr_11833;
});
var cljs$core$async$state_machine__9748__auto____1 = (function (state_11807){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_11807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e11834){if((e11834 instanceof Object)){
var ex__9751__auto__ = e11834;
var statearr_11835_11857 = state_11807;
(statearr_11835_11857[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11858 = state_11807;
state_11807 = G__11858;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$state_machine__9748__auto__ = function(state_11807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9748__auto____1.call(this,state_11807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9748__auto____0;
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9748__auto____1;
return cljs$core$async$state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___11841,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9861__auto__ = (function (){var statearr_11836 = f__9860__auto__.call(null);
(statearr_11836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___11841);

return statearr_11836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___11841,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args11860 = [];
var len__5726__auto___11916 = arguments.length;
var i__5727__auto___11917 = (0);
while(true){
if((i__5727__auto___11917 < len__5726__auto___11916)){
args11860.push((arguments[i__5727__auto___11917]));

var G__11918 = (i__5727__auto___11917 + (1));
i__5727__auto___11917 = G__11918;
continue;
} else {
}
break;
}

var G__11862 = args11860.length;
switch (G__11862) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11860.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9859__auto___11920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___11920,out){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___11920,out){
return (function (state_11892){
var state_val_11893 = (state_11892[(1)]);
if((state_val_11893 === (7))){
var inst_11872 = (state_11892[(7)]);
var inst_11871 = (state_11892[(8)]);
var inst_11871__$1 = (state_11892[(2)]);
var inst_11872__$1 = cljs.core.nth.call(null,inst_11871__$1,(0),null);
var inst_11873 = cljs.core.nth.call(null,inst_11871__$1,(1),null);
var inst_11874 = (inst_11872__$1 == null);
var state_11892__$1 = (function (){var statearr_11894 = state_11892;
(statearr_11894[(7)] = inst_11872__$1);

(statearr_11894[(9)] = inst_11873);

(statearr_11894[(8)] = inst_11871__$1);

return statearr_11894;
})();
if(cljs.core.truth_(inst_11874)){
var statearr_11895_11921 = state_11892__$1;
(statearr_11895_11921[(1)] = (8));

} else {
var statearr_11896_11922 = state_11892__$1;
(statearr_11896_11922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11893 === (1))){
var inst_11863 = cljs.core.vec.call(null,chs);
var inst_11864 = inst_11863;
var state_11892__$1 = (function (){var statearr_11897 = state_11892;
(statearr_11897[(10)] = inst_11864);

return statearr_11897;
})();
var statearr_11898_11923 = state_11892__$1;
(statearr_11898_11923[(2)] = null);

(statearr_11898_11923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11893 === (4))){
var inst_11864 = (state_11892[(10)]);
var state_11892__$1 = state_11892;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11892__$1,(7),inst_11864);
} else {
if((state_val_11893 === (6))){
var inst_11888 = (state_11892[(2)]);
var state_11892__$1 = state_11892;
var statearr_11899_11924 = state_11892__$1;
(statearr_11899_11924[(2)] = inst_11888);

(statearr_11899_11924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11893 === (3))){
var inst_11890 = (state_11892[(2)]);
var state_11892__$1 = state_11892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11892__$1,inst_11890);
} else {
if((state_val_11893 === (2))){
var inst_11864 = (state_11892[(10)]);
var inst_11866 = cljs.core.count.call(null,inst_11864);
var inst_11867 = (inst_11866 > (0));
var state_11892__$1 = state_11892;
if(cljs.core.truth_(inst_11867)){
var statearr_11901_11925 = state_11892__$1;
(statearr_11901_11925[(1)] = (4));

} else {
var statearr_11902_11926 = state_11892__$1;
(statearr_11902_11926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11893 === (11))){
var inst_11864 = (state_11892[(10)]);
var inst_11881 = (state_11892[(2)]);
var tmp11900 = inst_11864;
var inst_11864__$1 = tmp11900;
var state_11892__$1 = (function (){var statearr_11903 = state_11892;
(statearr_11903[(10)] = inst_11864__$1);

(statearr_11903[(11)] = inst_11881);

return statearr_11903;
})();
var statearr_11904_11927 = state_11892__$1;
(statearr_11904_11927[(2)] = null);

(statearr_11904_11927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11893 === (9))){
var inst_11872 = (state_11892[(7)]);
var state_11892__$1 = state_11892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11892__$1,(11),out,inst_11872);
} else {
if((state_val_11893 === (5))){
var inst_11886 = cljs.core.async.close_BANG_.call(null,out);
var state_11892__$1 = state_11892;
var statearr_11905_11928 = state_11892__$1;
(statearr_11905_11928[(2)] = inst_11886);

(statearr_11905_11928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11893 === (10))){
var inst_11884 = (state_11892[(2)]);
var state_11892__$1 = state_11892;
var statearr_11906_11929 = state_11892__$1;
(statearr_11906_11929[(2)] = inst_11884);

(statearr_11906_11929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11893 === (8))){
var inst_11872 = (state_11892[(7)]);
var inst_11864 = (state_11892[(10)]);
var inst_11873 = (state_11892[(9)]);
var inst_11871 = (state_11892[(8)]);
var inst_11876 = (function (){var cs = inst_11864;
var vec__11869 = inst_11871;
var v = inst_11872;
var c = inst_11873;
return ((function (cs,vec__11869,v,c,inst_11872,inst_11864,inst_11873,inst_11871,state_val_11893,c__9859__auto___11920,out){
return (function (p1__11859_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11859_SHARP_);
});
;})(cs,vec__11869,v,c,inst_11872,inst_11864,inst_11873,inst_11871,state_val_11893,c__9859__auto___11920,out))
})();
var inst_11877 = cljs.core.filterv.call(null,inst_11876,inst_11864);
var inst_11864__$1 = inst_11877;
var state_11892__$1 = (function (){var statearr_11907 = state_11892;
(statearr_11907[(10)] = inst_11864__$1);

return statearr_11907;
})();
var statearr_11908_11930 = state_11892__$1;
(statearr_11908_11930[(2)] = null);

(statearr_11908_11930[(1)] = (2));


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
}
}
}
}
});})(c__9859__auto___11920,out))
;
return ((function (switch__9747__auto__,c__9859__auto___11920,out){
return (function() {
var cljs$core$async$state_machine__9748__auto__ = null;
var cljs$core$async$state_machine__9748__auto____0 = (function (){
var statearr_11912 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11912[(0)] = cljs$core$async$state_machine__9748__auto__);

(statearr_11912[(1)] = (1));

return statearr_11912;
});
var cljs$core$async$state_machine__9748__auto____1 = (function (state_11892){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_11892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e11913){if((e11913 instanceof Object)){
var ex__9751__auto__ = e11913;
var statearr_11914_11931 = state_11892;
(statearr_11914_11931[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11932 = state_11892;
state_11892 = G__11932;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$state_machine__9748__auto__ = function(state_11892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9748__auto____1.call(this,state_11892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9748__auto____0;
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9748__auto____1;
return cljs$core$async$state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___11920,out))
})();
var state__9861__auto__ = (function (){var statearr_11915 = f__9860__auto__.call(null);
(statearr_11915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___11920);

return statearr_11915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___11920,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args11933 = [];
var len__5726__auto___11982 = arguments.length;
var i__5727__auto___11983 = (0);
while(true){
if((i__5727__auto___11983 < len__5726__auto___11982)){
args11933.push((arguments[i__5727__auto___11983]));

var G__11984 = (i__5727__auto___11983 + (1));
i__5727__auto___11983 = G__11984;
continue;
} else {
}
break;
}

var G__11935 = args11933.length;
switch (G__11935) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11933.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9859__auto___11986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___11986,out){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___11986,out){
return (function (state_11959){
var state_val_11960 = (state_11959[(1)]);
if((state_val_11960 === (7))){
var inst_11941 = (state_11959[(7)]);
var inst_11941__$1 = (state_11959[(2)]);
var inst_11942 = (inst_11941__$1 == null);
var inst_11943 = cljs.core.not.call(null,inst_11942);
var state_11959__$1 = (function (){var statearr_11961 = state_11959;
(statearr_11961[(7)] = inst_11941__$1);

return statearr_11961;
})();
if(inst_11943){
var statearr_11962_11987 = state_11959__$1;
(statearr_11962_11987[(1)] = (8));

} else {
var statearr_11963_11988 = state_11959__$1;
(statearr_11963_11988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11960 === (1))){
var inst_11936 = (0);
var state_11959__$1 = (function (){var statearr_11964 = state_11959;
(statearr_11964[(8)] = inst_11936);

return statearr_11964;
})();
var statearr_11965_11989 = state_11959__$1;
(statearr_11965_11989[(2)] = null);

(statearr_11965_11989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11960 === (4))){
var state_11959__$1 = state_11959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11959__$1,(7),ch);
} else {
if((state_val_11960 === (6))){
var inst_11954 = (state_11959[(2)]);
var state_11959__$1 = state_11959;
var statearr_11966_11990 = state_11959__$1;
(statearr_11966_11990[(2)] = inst_11954);

(statearr_11966_11990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11960 === (3))){
var inst_11956 = (state_11959[(2)]);
var inst_11957 = cljs.core.async.close_BANG_.call(null,out);
var state_11959__$1 = (function (){var statearr_11967 = state_11959;
(statearr_11967[(9)] = inst_11956);

return statearr_11967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11959__$1,inst_11957);
} else {
if((state_val_11960 === (2))){
var inst_11936 = (state_11959[(8)]);
var inst_11938 = (inst_11936 < n);
var state_11959__$1 = state_11959;
if(cljs.core.truth_(inst_11938)){
var statearr_11968_11991 = state_11959__$1;
(statearr_11968_11991[(1)] = (4));

} else {
var statearr_11969_11992 = state_11959__$1;
(statearr_11969_11992[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11960 === (11))){
var inst_11936 = (state_11959[(8)]);
var inst_11946 = (state_11959[(2)]);
var inst_11947 = (inst_11936 + (1));
var inst_11936__$1 = inst_11947;
var state_11959__$1 = (function (){var statearr_11970 = state_11959;
(statearr_11970[(8)] = inst_11936__$1);

(statearr_11970[(10)] = inst_11946);

return statearr_11970;
})();
var statearr_11971_11993 = state_11959__$1;
(statearr_11971_11993[(2)] = null);

(statearr_11971_11993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11960 === (9))){
var state_11959__$1 = state_11959;
var statearr_11972_11994 = state_11959__$1;
(statearr_11972_11994[(2)] = null);

(statearr_11972_11994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11960 === (5))){
var state_11959__$1 = state_11959;
var statearr_11973_11995 = state_11959__$1;
(statearr_11973_11995[(2)] = null);

(statearr_11973_11995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11960 === (10))){
var inst_11951 = (state_11959[(2)]);
var state_11959__$1 = state_11959;
var statearr_11974_11996 = state_11959__$1;
(statearr_11974_11996[(2)] = inst_11951);

(statearr_11974_11996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11960 === (8))){
var inst_11941 = (state_11959[(7)]);
var state_11959__$1 = state_11959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11959__$1,(11),out,inst_11941);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9859__auto___11986,out))
;
return ((function (switch__9747__auto__,c__9859__auto___11986,out){
return (function() {
var cljs$core$async$state_machine__9748__auto__ = null;
var cljs$core$async$state_machine__9748__auto____0 = (function (){
var statearr_11978 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11978[(0)] = cljs$core$async$state_machine__9748__auto__);

(statearr_11978[(1)] = (1));

return statearr_11978;
});
var cljs$core$async$state_machine__9748__auto____1 = (function (state_11959){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_11959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e11979){if((e11979 instanceof Object)){
var ex__9751__auto__ = e11979;
var statearr_11980_11997 = state_11959;
(statearr_11980_11997[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11998 = state_11959;
state_11959 = G__11998;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$state_machine__9748__auto__ = function(state_11959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9748__auto____1.call(this,state_11959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9748__auto____0;
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9748__auto____1;
return cljs$core$async$state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___11986,out))
})();
var state__9861__auto__ = (function (){var statearr_11981 = f__9860__auto__.call(null);
(statearr_11981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___11986);

return statearr_11981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___11986,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12006 = (function (map_LT_,f,ch,meta12007){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12007 = meta12007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12008,meta12007__$1){
var self__ = this;
var _12008__$1 = this;
return (new cljs.core.async.t_cljs$core$async12006(self__.map_LT_,self__.f,self__.ch,meta12007__$1));
});

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12008){
var self__ = this;
var _12008__$1 = this;
return self__.meta12007;
});

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12009 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12009 = (function (map_LT_,f,ch,meta12007,_,fn1,meta12010){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12007 = meta12007;
this._ = _;
this.fn1 = fn1;
this.meta12010 = meta12010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12011,meta12010__$1){
var self__ = this;
var _12011__$1 = this;
return (new cljs.core.async.t_cljs$core$async12009(self__.map_LT_,self__.f,self__.ch,self__.meta12007,self__._,self__.fn1,meta12010__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12011){
var self__ = this;
var _12011__$1 = this;
return self__.meta12010;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12009.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11999_SHARP_){
return f1.call(null,(((p1__11999_SHARP_ == null))?null:self__.f.call(null,p1__11999_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12009.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12007","meta12007",2069406054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12006","cljs.core.async/t_cljs$core$async12006",898965259,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12010","meta12010",2073975473,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12009.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12009";

cljs.core.async.t_cljs$core$async12009.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async12009");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12009 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12009(map_LT___$1,f__$1,ch__$1,meta12007__$1,___$2,fn1__$1,meta12010){
return (new cljs.core.async.t_cljs$core$async12009(map_LT___$1,f__$1,ch__$1,meta12007__$1,___$2,fn1__$1,meta12010));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12009(self__.map_LT_,self__.f,self__.ch,self__.meta12007,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4656__auto__ = ret;
if(cljs.core.truth_(and__4656__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12007","meta12007",2069406054,null)], null);
});

cljs.core.async.t_cljs$core$async12006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12006";

cljs.core.async.t_cljs$core$async12006.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async12006");
});

cljs.core.async.__GT_t_cljs$core$async12006 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12006(map_LT___$1,f__$1,ch__$1,meta12007){
return (new cljs.core.async.t_cljs$core$async12006(map_LT___$1,f__$1,ch__$1,meta12007));
});

}

return (new cljs.core.async.t_cljs$core$async12006(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12015 = (function (map_GT_,f,ch,meta12016){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta12016 = meta12016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12017,meta12016__$1){
var self__ = this;
var _12017__$1 = this;
return (new cljs.core.async.t_cljs$core$async12015(self__.map_GT_,self__.f,self__.ch,meta12016__$1));
});

cljs.core.async.t_cljs$core$async12015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12017){
var self__ = this;
var _12017__$1 = this;
return self__.meta12016;
});

cljs.core.async.t_cljs$core$async12015.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12015.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12015.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12015.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12015.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12015.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12016","meta12016",-1764160090,null)], null);
});

cljs.core.async.t_cljs$core$async12015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12015";

cljs.core.async.t_cljs$core$async12015.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async12015");
});

cljs.core.async.__GT_t_cljs$core$async12015 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12015(map_GT___$1,f__$1,ch__$1,meta12016){
return (new cljs.core.async.t_cljs$core$async12015(map_GT___$1,f__$1,ch__$1,meta12016));
});

}

return (new cljs.core.async.t_cljs$core$async12015(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12021 = (function (filter_GT_,p,ch,meta12022){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta12022 = meta12022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12023,meta12022__$1){
var self__ = this;
var _12023__$1 = this;
return (new cljs.core.async.t_cljs$core$async12021(self__.filter_GT_,self__.p,self__.ch,meta12022__$1));
});

cljs.core.async.t_cljs$core$async12021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12023){
var self__ = this;
var _12023__$1 = this;
return self__.meta12022;
});

cljs.core.async.t_cljs$core$async12021.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12021.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12021.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12021.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12022","meta12022",19430144,null)], null);
});

cljs.core.async.t_cljs$core$async12021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12021";

cljs.core.async.t_cljs$core$async12021.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async12021");
});

cljs.core.async.__GT_t_cljs$core$async12021 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12021(filter_GT___$1,p__$1,ch__$1,meta12022){
return (new cljs.core.async.t_cljs$core$async12021(filter_GT___$1,p__$1,ch__$1,meta12022));
});

}

return (new cljs.core.async.t_cljs$core$async12021(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args12024 = [];
var len__5726__auto___12068 = arguments.length;
var i__5727__auto___12069 = (0);
while(true){
if((i__5727__auto___12069 < len__5726__auto___12068)){
args12024.push((arguments[i__5727__auto___12069]));

var G__12070 = (i__5727__auto___12069 + (1));
i__5727__auto___12069 = G__12070;
continue;
} else {
}
break;
}

var G__12026 = args12024.length;
switch (G__12026) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12024.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9859__auto___12072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___12072,out){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___12072,out){
return (function (state_12047){
var state_val_12048 = (state_12047[(1)]);
if((state_val_12048 === (7))){
var inst_12043 = (state_12047[(2)]);
var state_12047__$1 = state_12047;
var statearr_12049_12073 = state_12047__$1;
(statearr_12049_12073[(2)] = inst_12043);

(statearr_12049_12073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (1))){
var state_12047__$1 = state_12047;
var statearr_12050_12074 = state_12047__$1;
(statearr_12050_12074[(2)] = null);

(statearr_12050_12074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (4))){
var inst_12029 = (state_12047[(7)]);
var inst_12029__$1 = (state_12047[(2)]);
var inst_12030 = (inst_12029__$1 == null);
var state_12047__$1 = (function (){var statearr_12051 = state_12047;
(statearr_12051[(7)] = inst_12029__$1);

return statearr_12051;
})();
if(cljs.core.truth_(inst_12030)){
var statearr_12052_12075 = state_12047__$1;
(statearr_12052_12075[(1)] = (5));

} else {
var statearr_12053_12076 = state_12047__$1;
(statearr_12053_12076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (6))){
var inst_12029 = (state_12047[(7)]);
var inst_12034 = p.call(null,inst_12029);
var state_12047__$1 = state_12047;
if(cljs.core.truth_(inst_12034)){
var statearr_12054_12077 = state_12047__$1;
(statearr_12054_12077[(1)] = (8));

} else {
var statearr_12055_12078 = state_12047__$1;
(statearr_12055_12078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (3))){
var inst_12045 = (state_12047[(2)]);
var state_12047__$1 = state_12047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12047__$1,inst_12045);
} else {
if((state_val_12048 === (2))){
var state_12047__$1 = state_12047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12047__$1,(4),ch);
} else {
if((state_val_12048 === (11))){
var inst_12037 = (state_12047[(2)]);
var state_12047__$1 = state_12047;
var statearr_12056_12079 = state_12047__$1;
(statearr_12056_12079[(2)] = inst_12037);

(statearr_12056_12079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (9))){
var state_12047__$1 = state_12047;
var statearr_12057_12080 = state_12047__$1;
(statearr_12057_12080[(2)] = null);

(statearr_12057_12080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (5))){
var inst_12032 = cljs.core.async.close_BANG_.call(null,out);
var state_12047__$1 = state_12047;
var statearr_12058_12081 = state_12047__$1;
(statearr_12058_12081[(2)] = inst_12032);

(statearr_12058_12081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (10))){
var inst_12040 = (state_12047[(2)]);
var state_12047__$1 = (function (){var statearr_12059 = state_12047;
(statearr_12059[(8)] = inst_12040);

return statearr_12059;
})();
var statearr_12060_12082 = state_12047__$1;
(statearr_12060_12082[(2)] = null);

(statearr_12060_12082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (8))){
var inst_12029 = (state_12047[(7)]);
var state_12047__$1 = state_12047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12047__$1,(11),out,inst_12029);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9859__auto___12072,out))
;
return ((function (switch__9747__auto__,c__9859__auto___12072,out){
return (function() {
var cljs$core$async$state_machine__9748__auto__ = null;
var cljs$core$async$state_machine__9748__auto____0 = (function (){
var statearr_12064 = [null,null,null,null,null,null,null,null,null];
(statearr_12064[(0)] = cljs$core$async$state_machine__9748__auto__);

(statearr_12064[(1)] = (1));

return statearr_12064;
});
var cljs$core$async$state_machine__9748__auto____1 = (function (state_12047){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_12047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e12065){if((e12065 instanceof Object)){
var ex__9751__auto__ = e12065;
var statearr_12066_12083 = state_12047;
(statearr_12066_12083[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12084 = state_12047;
state_12047 = G__12084;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$state_machine__9748__auto__ = function(state_12047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9748__auto____1.call(this,state_12047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9748__auto____0;
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9748__auto____1;
return cljs$core$async$state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___12072,out))
})();
var state__9861__auto__ = (function (){var statearr_12067 = f__9860__auto__.call(null);
(statearr_12067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___12072);

return statearr_12067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___12072,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args12085 = [];
var len__5726__auto___12088 = arguments.length;
var i__5727__auto___12089 = (0);
while(true){
if((i__5727__auto___12089 < len__5726__auto___12088)){
args12085.push((arguments[i__5727__auto___12089]));

var G__12090 = (i__5727__auto___12089 + (1));
i__5727__auto___12089 = G__12090;
continue;
} else {
}
break;
}

var G__12087 = args12085.length;
switch (G__12087) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12085.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto__){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto__){
return (function (state_12257){
var state_val_12258 = (state_12257[(1)]);
if((state_val_12258 === (7))){
var inst_12253 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12259_12300 = state_12257__$1;
(statearr_12259_12300[(2)] = inst_12253);

(statearr_12259_12300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (20))){
var inst_12223 = (state_12257[(7)]);
var inst_12234 = (state_12257[(2)]);
var inst_12235 = cljs.core.next.call(null,inst_12223);
var inst_12209 = inst_12235;
var inst_12210 = null;
var inst_12211 = (0);
var inst_12212 = (0);
var state_12257__$1 = (function (){var statearr_12260 = state_12257;
(statearr_12260[(8)] = inst_12209);

(statearr_12260[(9)] = inst_12212);

(statearr_12260[(10)] = inst_12211);

(statearr_12260[(11)] = inst_12234);

(statearr_12260[(12)] = inst_12210);

return statearr_12260;
})();
var statearr_12261_12301 = state_12257__$1;
(statearr_12261_12301[(2)] = null);

(statearr_12261_12301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (1))){
var state_12257__$1 = state_12257;
var statearr_12262_12302 = state_12257__$1;
(statearr_12262_12302[(2)] = null);

(statearr_12262_12302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (4))){
var inst_12198 = (state_12257[(13)]);
var inst_12198__$1 = (state_12257[(2)]);
var inst_12199 = (inst_12198__$1 == null);
var state_12257__$1 = (function (){var statearr_12263 = state_12257;
(statearr_12263[(13)] = inst_12198__$1);

return statearr_12263;
})();
if(cljs.core.truth_(inst_12199)){
var statearr_12264_12303 = state_12257__$1;
(statearr_12264_12303[(1)] = (5));

} else {
var statearr_12265_12304 = state_12257__$1;
(statearr_12265_12304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (15))){
var state_12257__$1 = state_12257;
var statearr_12269_12305 = state_12257__$1;
(statearr_12269_12305[(2)] = null);

(statearr_12269_12305[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (21))){
var state_12257__$1 = state_12257;
var statearr_12270_12306 = state_12257__$1;
(statearr_12270_12306[(2)] = null);

(statearr_12270_12306[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (13))){
var inst_12209 = (state_12257[(8)]);
var inst_12212 = (state_12257[(9)]);
var inst_12211 = (state_12257[(10)]);
var inst_12210 = (state_12257[(12)]);
var inst_12219 = (state_12257[(2)]);
var inst_12220 = (inst_12212 + (1));
var tmp12266 = inst_12209;
var tmp12267 = inst_12211;
var tmp12268 = inst_12210;
var inst_12209__$1 = tmp12266;
var inst_12210__$1 = tmp12268;
var inst_12211__$1 = tmp12267;
var inst_12212__$1 = inst_12220;
var state_12257__$1 = (function (){var statearr_12271 = state_12257;
(statearr_12271[(8)] = inst_12209__$1);

(statearr_12271[(9)] = inst_12212__$1);

(statearr_12271[(10)] = inst_12211__$1);

(statearr_12271[(12)] = inst_12210__$1);

(statearr_12271[(14)] = inst_12219);

return statearr_12271;
})();
var statearr_12272_12307 = state_12257__$1;
(statearr_12272_12307[(2)] = null);

(statearr_12272_12307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (22))){
var state_12257__$1 = state_12257;
var statearr_12273_12308 = state_12257__$1;
(statearr_12273_12308[(2)] = null);

(statearr_12273_12308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (6))){
var inst_12198 = (state_12257[(13)]);
var inst_12207 = f.call(null,inst_12198);
var inst_12208 = cljs.core.seq.call(null,inst_12207);
var inst_12209 = inst_12208;
var inst_12210 = null;
var inst_12211 = (0);
var inst_12212 = (0);
var state_12257__$1 = (function (){var statearr_12274 = state_12257;
(statearr_12274[(8)] = inst_12209);

(statearr_12274[(9)] = inst_12212);

(statearr_12274[(10)] = inst_12211);

(statearr_12274[(12)] = inst_12210);

return statearr_12274;
})();
var statearr_12275_12309 = state_12257__$1;
(statearr_12275_12309[(2)] = null);

(statearr_12275_12309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (17))){
var inst_12223 = (state_12257[(7)]);
var inst_12227 = cljs.core.chunk_first.call(null,inst_12223);
var inst_12228 = cljs.core.chunk_rest.call(null,inst_12223);
var inst_12229 = cljs.core.count.call(null,inst_12227);
var inst_12209 = inst_12228;
var inst_12210 = inst_12227;
var inst_12211 = inst_12229;
var inst_12212 = (0);
var state_12257__$1 = (function (){var statearr_12276 = state_12257;
(statearr_12276[(8)] = inst_12209);

(statearr_12276[(9)] = inst_12212);

(statearr_12276[(10)] = inst_12211);

(statearr_12276[(12)] = inst_12210);

return statearr_12276;
})();
var statearr_12277_12310 = state_12257__$1;
(statearr_12277_12310[(2)] = null);

(statearr_12277_12310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (3))){
var inst_12255 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12257__$1,inst_12255);
} else {
if((state_val_12258 === (12))){
var inst_12243 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12278_12311 = state_12257__$1;
(statearr_12278_12311[(2)] = inst_12243);

(statearr_12278_12311[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (2))){
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12257__$1,(4),in$);
} else {
if((state_val_12258 === (23))){
var inst_12251 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12279_12312 = state_12257__$1;
(statearr_12279_12312[(2)] = inst_12251);

(statearr_12279_12312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (19))){
var inst_12238 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12280_12313 = state_12257__$1;
(statearr_12280_12313[(2)] = inst_12238);

(statearr_12280_12313[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (11))){
var inst_12209 = (state_12257[(8)]);
var inst_12223 = (state_12257[(7)]);
var inst_12223__$1 = cljs.core.seq.call(null,inst_12209);
var state_12257__$1 = (function (){var statearr_12281 = state_12257;
(statearr_12281[(7)] = inst_12223__$1);

return statearr_12281;
})();
if(inst_12223__$1){
var statearr_12282_12314 = state_12257__$1;
(statearr_12282_12314[(1)] = (14));

} else {
var statearr_12283_12315 = state_12257__$1;
(statearr_12283_12315[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (9))){
var inst_12245 = (state_12257[(2)]);
var inst_12246 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12257__$1 = (function (){var statearr_12284 = state_12257;
(statearr_12284[(15)] = inst_12245);

return statearr_12284;
})();
if(cljs.core.truth_(inst_12246)){
var statearr_12285_12316 = state_12257__$1;
(statearr_12285_12316[(1)] = (21));

} else {
var statearr_12286_12317 = state_12257__$1;
(statearr_12286_12317[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (5))){
var inst_12201 = cljs.core.async.close_BANG_.call(null,out);
var state_12257__$1 = state_12257;
var statearr_12287_12318 = state_12257__$1;
(statearr_12287_12318[(2)] = inst_12201);

(statearr_12287_12318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (14))){
var inst_12223 = (state_12257[(7)]);
var inst_12225 = cljs.core.chunked_seq_QMARK_.call(null,inst_12223);
var state_12257__$1 = state_12257;
if(inst_12225){
var statearr_12288_12319 = state_12257__$1;
(statearr_12288_12319[(1)] = (17));

} else {
var statearr_12289_12320 = state_12257__$1;
(statearr_12289_12320[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (16))){
var inst_12241 = (state_12257[(2)]);
var state_12257__$1 = state_12257;
var statearr_12290_12321 = state_12257__$1;
(statearr_12290_12321[(2)] = inst_12241);

(statearr_12290_12321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12258 === (10))){
var inst_12212 = (state_12257[(9)]);
var inst_12210 = (state_12257[(12)]);
var inst_12217 = cljs.core._nth.call(null,inst_12210,inst_12212);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12257__$1,(13),out,inst_12217);
} else {
if((state_val_12258 === (18))){
var inst_12223 = (state_12257[(7)]);
var inst_12232 = cljs.core.first.call(null,inst_12223);
var state_12257__$1 = state_12257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12257__$1,(20),out,inst_12232);
} else {
if((state_val_12258 === (8))){
var inst_12212 = (state_12257[(9)]);
var inst_12211 = (state_12257[(10)]);
var inst_12214 = (inst_12212 < inst_12211);
var inst_12215 = inst_12214;
var state_12257__$1 = state_12257;
if(cljs.core.truth_(inst_12215)){
var statearr_12291_12322 = state_12257__$1;
(statearr_12291_12322[(1)] = (10));

} else {
var statearr_12292_12323 = state_12257__$1;
(statearr_12292_12323[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9859__auto__))
;
return ((function (switch__9747__auto__,c__9859__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9748__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9748__auto____0 = (function (){
var statearr_12296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12296[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9748__auto__);

(statearr_12296[(1)] = (1));

return statearr_12296;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9748__auto____1 = (function (state_12257){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_12257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e12297){if((e12297 instanceof Object)){
var ex__9751__auto__ = e12297;
var statearr_12298_12324 = state_12257;
(statearr_12298_12324[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12325 = state_12257;
state_12257 = G__12325;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9748__auto__ = function(state_12257){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9748__auto____1.call(this,state_12257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9748__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9748__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto__))
})();
var state__9861__auto__ = (function (){var statearr_12299 = f__9860__auto__.call(null);
(statearr_12299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto__);

return statearr_12299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto__))
);

return c__9859__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12326 = [];
var len__5726__auto___12329 = arguments.length;
var i__5727__auto___12330 = (0);
while(true){
if((i__5727__auto___12330 < len__5726__auto___12329)){
args12326.push((arguments[i__5727__auto___12330]));

var G__12331 = (i__5727__auto___12330 + (1));
i__5727__auto___12330 = G__12331;
continue;
} else {
}
break;
}

var G__12328 = args12326.length;
switch (G__12328) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12326.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args12333 = [];
var len__5726__auto___12336 = arguments.length;
var i__5727__auto___12337 = (0);
while(true){
if((i__5727__auto___12337 < len__5726__auto___12336)){
args12333.push((arguments[i__5727__auto___12337]));

var G__12338 = (i__5727__auto___12337 + (1));
i__5727__auto___12337 = G__12338;
continue;
} else {
}
break;
}

var G__12335 = args12333.length;
switch (G__12335) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12333.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args12340 = [];
var len__5726__auto___12391 = arguments.length;
var i__5727__auto___12392 = (0);
while(true){
if((i__5727__auto___12392 < len__5726__auto___12391)){
args12340.push((arguments[i__5727__auto___12392]));

var G__12393 = (i__5727__auto___12392 + (1));
i__5727__auto___12392 = G__12393;
continue;
} else {
}
break;
}

var G__12342 = args12340.length;
switch (G__12342) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12340.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9859__auto___12395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___12395,out){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___12395,out){
return (function (state_12366){
var state_val_12367 = (state_12366[(1)]);
if((state_val_12367 === (7))){
var inst_12361 = (state_12366[(2)]);
var state_12366__$1 = state_12366;
var statearr_12368_12396 = state_12366__$1;
(statearr_12368_12396[(2)] = inst_12361);

(statearr_12368_12396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (1))){
var inst_12343 = null;
var state_12366__$1 = (function (){var statearr_12369 = state_12366;
(statearr_12369[(7)] = inst_12343);

return statearr_12369;
})();
var statearr_12370_12397 = state_12366__$1;
(statearr_12370_12397[(2)] = null);

(statearr_12370_12397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (4))){
var inst_12346 = (state_12366[(8)]);
var inst_12346__$1 = (state_12366[(2)]);
var inst_12347 = (inst_12346__$1 == null);
var inst_12348 = cljs.core.not.call(null,inst_12347);
var state_12366__$1 = (function (){var statearr_12371 = state_12366;
(statearr_12371[(8)] = inst_12346__$1);

return statearr_12371;
})();
if(inst_12348){
var statearr_12372_12398 = state_12366__$1;
(statearr_12372_12398[(1)] = (5));

} else {
var statearr_12373_12399 = state_12366__$1;
(statearr_12373_12399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (6))){
var state_12366__$1 = state_12366;
var statearr_12374_12400 = state_12366__$1;
(statearr_12374_12400[(2)] = null);

(statearr_12374_12400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (3))){
var inst_12363 = (state_12366[(2)]);
var inst_12364 = cljs.core.async.close_BANG_.call(null,out);
var state_12366__$1 = (function (){var statearr_12375 = state_12366;
(statearr_12375[(9)] = inst_12363);

return statearr_12375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12366__$1,inst_12364);
} else {
if((state_val_12367 === (2))){
var state_12366__$1 = state_12366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12366__$1,(4),ch);
} else {
if((state_val_12367 === (11))){
var inst_12346 = (state_12366[(8)]);
var inst_12355 = (state_12366[(2)]);
var inst_12343 = inst_12346;
var state_12366__$1 = (function (){var statearr_12376 = state_12366;
(statearr_12376[(7)] = inst_12343);

(statearr_12376[(10)] = inst_12355);

return statearr_12376;
})();
var statearr_12377_12401 = state_12366__$1;
(statearr_12377_12401[(2)] = null);

(statearr_12377_12401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (9))){
var inst_12346 = (state_12366[(8)]);
var state_12366__$1 = state_12366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12366__$1,(11),out,inst_12346);
} else {
if((state_val_12367 === (5))){
var inst_12346 = (state_12366[(8)]);
var inst_12343 = (state_12366[(7)]);
var inst_12350 = cljs.core._EQ_.call(null,inst_12346,inst_12343);
var state_12366__$1 = state_12366;
if(inst_12350){
var statearr_12379_12402 = state_12366__$1;
(statearr_12379_12402[(1)] = (8));

} else {
var statearr_12380_12403 = state_12366__$1;
(statearr_12380_12403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (10))){
var inst_12358 = (state_12366[(2)]);
var state_12366__$1 = state_12366;
var statearr_12381_12404 = state_12366__$1;
(statearr_12381_12404[(2)] = inst_12358);

(statearr_12381_12404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (8))){
var inst_12343 = (state_12366[(7)]);
var tmp12378 = inst_12343;
var inst_12343__$1 = tmp12378;
var state_12366__$1 = (function (){var statearr_12382 = state_12366;
(statearr_12382[(7)] = inst_12343__$1);

return statearr_12382;
})();
var statearr_12383_12405 = state_12366__$1;
(statearr_12383_12405[(2)] = null);

(statearr_12383_12405[(1)] = (2));


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
}
}
}
}
});})(c__9859__auto___12395,out))
;
return ((function (switch__9747__auto__,c__9859__auto___12395,out){
return (function() {
var cljs$core$async$state_machine__9748__auto__ = null;
var cljs$core$async$state_machine__9748__auto____0 = (function (){
var statearr_12387 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12387[(0)] = cljs$core$async$state_machine__9748__auto__);

(statearr_12387[(1)] = (1));

return statearr_12387;
});
var cljs$core$async$state_machine__9748__auto____1 = (function (state_12366){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_12366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e12388){if((e12388 instanceof Object)){
var ex__9751__auto__ = e12388;
var statearr_12389_12406 = state_12366;
(statearr_12389_12406[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12407 = state_12366;
state_12366 = G__12407;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$state_machine__9748__auto__ = function(state_12366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9748__auto____1.call(this,state_12366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9748__auto____0;
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9748__auto____1;
return cljs$core$async$state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___12395,out))
})();
var state__9861__auto__ = (function (){var statearr_12390 = f__9860__auto__.call(null);
(statearr_12390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___12395);

return statearr_12390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___12395,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12408 = [];
var len__5726__auto___12478 = arguments.length;
var i__5727__auto___12479 = (0);
while(true){
if((i__5727__auto___12479 < len__5726__auto___12478)){
args12408.push((arguments[i__5727__auto___12479]));

var G__12480 = (i__5727__auto___12479 + (1));
i__5727__auto___12479 = G__12480;
continue;
} else {
}
break;
}

var G__12410 = args12408.length;
switch (G__12410) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12408.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9859__auto___12482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___12482,out){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___12482,out){
return (function (state_12448){
var state_val_12449 = (state_12448[(1)]);
if((state_val_12449 === (7))){
var inst_12444 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12450_12483 = state_12448__$1;
(statearr_12450_12483[(2)] = inst_12444);

(statearr_12450_12483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (1))){
var inst_12411 = (new Array(n));
var inst_12412 = inst_12411;
var inst_12413 = (0);
var state_12448__$1 = (function (){var statearr_12451 = state_12448;
(statearr_12451[(7)] = inst_12412);

(statearr_12451[(8)] = inst_12413);

return statearr_12451;
})();
var statearr_12452_12484 = state_12448__$1;
(statearr_12452_12484[(2)] = null);

(statearr_12452_12484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (4))){
var inst_12416 = (state_12448[(9)]);
var inst_12416__$1 = (state_12448[(2)]);
var inst_12417 = (inst_12416__$1 == null);
var inst_12418 = cljs.core.not.call(null,inst_12417);
var state_12448__$1 = (function (){var statearr_12453 = state_12448;
(statearr_12453[(9)] = inst_12416__$1);

return statearr_12453;
})();
if(inst_12418){
var statearr_12454_12485 = state_12448__$1;
(statearr_12454_12485[(1)] = (5));

} else {
var statearr_12455_12486 = state_12448__$1;
(statearr_12455_12486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (15))){
var inst_12438 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12456_12487 = state_12448__$1;
(statearr_12456_12487[(2)] = inst_12438);

(statearr_12456_12487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (13))){
var state_12448__$1 = state_12448;
var statearr_12457_12488 = state_12448__$1;
(statearr_12457_12488[(2)] = null);

(statearr_12457_12488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (6))){
var inst_12413 = (state_12448[(8)]);
var inst_12434 = (inst_12413 > (0));
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12434)){
var statearr_12458_12489 = state_12448__$1;
(statearr_12458_12489[(1)] = (12));

} else {
var statearr_12459_12490 = state_12448__$1;
(statearr_12459_12490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (3))){
var inst_12446 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12448__$1,inst_12446);
} else {
if((state_val_12449 === (12))){
var inst_12412 = (state_12448[(7)]);
var inst_12436 = cljs.core.vec.call(null,inst_12412);
var state_12448__$1 = state_12448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12448__$1,(15),out,inst_12436);
} else {
if((state_val_12449 === (2))){
var state_12448__$1 = state_12448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12448__$1,(4),ch);
} else {
if((state_val_12449 === (11))){
var inst_12428 = (state_12448[(2)]);
var inst_12429 = (new Array(n));
var inst_12412 = inst_12429;
var inst_12413 = (0);
var state_12448__$1 = (function (){var statearr_12460 = state_12448;
(statearr_12460[(7)] = inst_12412);

(statearr_12460[(8)] = inst_12413);

(statearr_12460[(10)] = inst_12428);

return statearr_12460;
})();
var statearr_12461_12491 = state_12448__$1;
(statearr_12461_12491[(2)] = null);

(statearr_12461_12491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (9))){
var inst_12412 = (state_12448[(7)]);
var inst_12426 = cljs.core.vec.call(null,inst_12412);
var state_12448__$1 = state_12448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12448__$1,(11),out,inst_12426);
} else {
if((state_val_12449 === (5))){
var inst_12421 = (state_12448[(11)]);
var inst_12412 = (state_12448[(7)]);
var inst_12413 = (state_12448[(8)]);
var inst_12416 = (state_12448[(9)]);
var inst_12420 = (inst_12412[inst_12413] = inst_12416);
var inst_12421__$1 = (inst_12413 + (1));
var inst_12422 = (inst_12421__$1 < n);
var state_12448__$1 = (function (){var statearr_12462 = state_12448;
(statearr_12462[(11)] = inst_12421__$1);

(statearr_12462[(12)] = inst_12420);

return statearr_12462;
})();
if(cljs.core.truth_(inst_12422)){
var statearr_12463_12492 = state_12448__$1;
(statearr_12463_12492[(1)] = (8));

} else {
var statearr_12464_12493 = state_12448__$1;
(statearr_12464_12493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (14))){
var inst_12441 = (state_12448[(2)]);
var inst_12442 = cljs.core.async.close_BANG_.call(null,out);
var state_12448__$1 = (function (){var statearr_12466 = state_12448;
(statearr_12466[(13)] = inst_12441);

return statearr_12466;
})();
var statearr_12467_12494 = state_12448__$1;
(statearr_12467_12494[(2)] = inst_12442);

(statearr_12467_12494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (10))){
var inst_12432 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12468_12495 = state_12448__$1;
(statearr_12468_12495[(2)] = inst_12432);

(statearr_12468_12495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (8))){
var inst_12421 = (state_12448[(11)]);
var inst_12412 = (state_12448[(7)]);
var tmp12465 = inst_12412;
var inst_12412__$1 = tmp12465;
var inst_12413 = inst_12421;
var state_12448__$1 = (function (){var statearr_12469 = state_12448;
(statearr_12469[(7)] = inst_12412__$1);

(statearr_12469[(8)] = inst_12413);

return statearr_12469;
})();
var statearr_12470_12496 = state_12448__$1;
(statearr_12470_12496[(2)] = null);

(statearr_12470_12496[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__9859__auto___12482,out))
;
return ((function (switch__9747__auto__,c__9859__auto___12482,out){
return (function() {
var cljs$core$async$state_machine__9748__auto__ = null;
var cljs$core$async$state_machine__9748__auto____0 = (function (){
var statearr_12474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12474[(0)] = cljs$core$async$state_machine__9748__auto__);

(statearr_12474[(1)] = (1));

return statearr_12474;
});
var cljs$core$async$state_machine__9748__auto____1 = (function (state_12448){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_12448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e12475){if((e12475 instanceof Object)){
var ex__9751__auto__ = e12475;
var statearr_12476_12497 = state_12448;
(statearr_12476_12497[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12498 = state_12448;
state_12448 = G__12498;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$state_machine__9748__auto__ = function(state_12448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9748__auto____1.call(this,state_12448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9748__auto____0;
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9748__auto____1;
return cljs$core$async$state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___12482,out))
})();
var state__9861__auto__ = (function (){var statearr_12477 = f__9860__auto__.call(null);
(statearr_12477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___12482);

return statearr_12477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___12482,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12499 = [];
var len__5726__auto___12573 = arguments.length;
var i__5727__auto___12574 = (0);
while(true){
if((i__5727__auto___12574 < len__5726__auto___12573)){
args12499.push((arguments[i__5727__auto___12574]));

var G__12575 = (i__5727__auto___12574 + (1));
i__5727__auto___12574 = G__12575;
continue;
} else {
}
break;
}

var G__12501 = args12499.length;
switch (G__12501) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12499.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9859__auto___12577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9859__auto___12577,out){
return (function (){
var f__9860__auto__ = (function (){var switch__9747__auto__ = ((function (c__9859__auto___12577,out){
return (function (state_12543){
var state_val_12544 = (state_12543[(1)]);
if((state_val_12544 === (7))){
var inst_12539 = (state_12543[(2)]);
var state_12543__$1 = state_12543;
var statearr_12545_12578 = state_12543__$1;
(statearr_12545_12578[(2)] = inst_12539);

(statearr_12545_12578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (1))){
var inst_12502 = [];
var inst_12503 = inst_12502;
var inst_12504 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12543__$1 = (function (){var statearr_12546 = state_12543;
(statearr_12546[(7)] = inst_12503);

(statearr_12546[(8)] = inst_12504);

return statearr_12546;
})();
var statearr_12547_12579 = state_12543__$1;
(statearr_12547_12579[(2)] = null);

(statearr_12547_12579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (4))){
var inst_12507 = (state_12543[(9)]);
var inst_12507__$1 = (state_12543[(2)]);
var inst_12508 = (inst_12507__$1 == null);
var inst_12509 = cljs.core.not.call(null,inst_12508);
var state_12543__$1 = (function (){var statearr_12548 = state_12543;
(statearr_12548[(9)] = inst_12507__$1);

return statearr_12548;
})();
if(inst_12509){
var statearr_12549_12580 = state_12543__$1;
(statearr_12549_12580[(1)] = (5));

} else {
var statearr_12550_12581 = state_12543__$1;
(statearr_12550_12581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (15))){
var inst_12533 = (state_12543[(2)]);
var state_12543__$1 = state_12543;
var statearr_12551_12582 = state_12543__$1;
(statearr_12551_12582[(2)] = inst_12533);

(statearr_12551_12582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (13))){
var state_12543__$1 = state_12543;
var statearr_12552_12583 = state_12543__$1;
(statearr_12552_12583[(2)] = null);

(statearr_12552_12583[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (6))){
var inst_12503 = (state_12543[(7)]);
var inst_12528 = inst_12503.length;
var inst_12529 = (inst_12528 > (0));
var state_12543__$1 = state_12543;
if(cljs.core.truth_(inst_12529)){
var statearr_12553_12584 = state_12543__$1;
(statearr_12553_12584[(1)] = (12));

} else {
var statearr_12554_12585 = state_12543__$1;
(statearr_12554_12585[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (3))){
var inst_12541 = (state_12543[(2)]);
var state_12543__$1 = state_12543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12543__$1,inst_12541);
} else {
if((state_val_12544 === (12))){
var inst_12503 = (state_12543[(7)]);
var inst_12531 = cljs.core.vec.call(null,inst_12503);
var state_12543__$1 = state_12543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12543__$1,(15),out,inst_12531);
} else {
if((state_val_12544 === (2))){
var state_12543__$1 = state_12543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12543__$1,(4),ch);
} else {
if((state_val_12544 === (11))){
var inst_12511 = (state_12543[(10)]);
var inst_12507 = (state_12543[(9)]);
var inst_12521 = (state_12543[(2)]);
var inst_12522 = [];
var inst_12523 = inst_12522.push(inst_12507);
var inst_12503 = inst_12522;
var inst_12504 = inst_12511;
var state_12543__$1 = (function (){var statearr_12555 = state_12543;
(statearr_12555[(7)] = inst_12503);

(statearr_12555[(11)] = inst_12521);

(statearr_12555[(8)] = inst_12504);

(statearr_12555[(12)] = inst_12523);

return statearr_12555;
})();
var statearr_12556_12586 = state_12543__$1;
(statearr_12556_12586[(2)] = null);

(statearr_12556_12586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (9))){
var inst_12503 = (state_12543[(7)]);
var inst_12519 = cljs.core.vec.call(null,inst_12503);
var state_12543__$1 = state_12543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12543__$1,(11),out,inst_12519);
} else {
if((state_val_12544 === (5))){
var inst_12511 = (state_12543[(10)]);
var inst_12507 = (state_12543[(9)]);
var inst_12504 = (state_12543[(8)]);
var inst_12511__$1 = f.call(null,inst_12507);
var inst_12512 = cljs.core._EQ_.call(null,inst_12511__$1,inst_12504);
var inst_12513 = cljs.core.keyword_identical_QMARK_.call(null,inst_12504,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12514 = (inst_12512) || (inst_12513);
var state_12543__$1 = (function (){var statearr_12557 = state_12543;
(statearr_12557[(10)] = inst_12511__$1);

return statearr_12557;
})();
if(cljs.core.truth_(inst_12514)){
var statearr_12558_12587 = state_12543__$1;
(statearr_12558_12587[(1)] = (8));

} else {
var statearr_12559_12588 = state_12543__$1;
(statearr_12559_12588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (14))){
var inst_12536 = (state_12543[(2)]);
var inst_12537 = cljs.core.async.close_BANG_.call(null,out);
var state_12543__$1 = (function (){var statearr_12561 = state_12543;
(statearr_12561[(13)] = inst_12536);

return statearr_12561;
})();
var statearr_12562_12589 = state_12543__$1;
(statearr_12562_12589[(2)] = inst_12537);

(statearr_12562_12589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (10))){
var inst_12526 = (state_12543[(2)]);
var state_12543__$1 = state_12543;
var statearr_12563_12590 = state_12543__$1;
(statearr_12563_12590[(2)] = inst_12526);

(statearr_12563_12590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12544 === (8))){
var inst_12511 = (state_12543[(10)]);
var inst_12507 = (state_12543[(9)]);
var inst_12503 = (state_12543[(7)]);
var inst_12516 = inst_12503.push(inst_12507);
var tmp12560 = inst_12503;
var inst_12503__$1 = tmp12560;
var inst_12504 = inst_12511;
var state_12543__$1 = (function (){var statearr_12564 = state_12543;
(statearr_12564[(14)] = inst_12516);

(statearr_12564[(7)] = inst_12503__$1);

(statearr_12564[(8)] = inst_12504);

return statearr_12564;
})();
var statearr_12565_12591 = state_12543__$1;
(statearr_12565_12591[(2)] = null);

(statearr_12565_12591[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__9859__auto___12577,out))
;
return ((function (switch__9747__auto__,c__9859__auto___12577,out){
return (function() {
var cljs$core$async$state_machine__9748__auto__ = null;
var cljs$core$async$state_machine__9748__auto____0 = (function (){
var statearr_12569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12569[(0)] = cljs$core$async$state_machine__9748__auto__);

(statearr_12569[(1)] = (1));

return statearr_12569;
});
var cljs$core$async$state_machine__9748__auto____1 = (function (state_12543){
while(true){
var ret_value__9749__auto__ = (function (){try{while(true){
var result__9750__auto__ = switch__9747__auto__.call(null,state_12543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9750__auto__;
}
break;
}
}catch (e12570){if((e12570 instanceof Object)){
var ex__9751__auto__ = e12570;
var statearr_12571_12592 = state_12543;
(statearr_12571_12592[(5)] = ex__9751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12593 = state_12543;
state_12543 = G__12593;
continue;
} else {
return ret_value__9749__auto__;
}
break;
}
});
cljs$core$async$state_machine__9748__auto__ = function(state_12543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9748__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9748__auto____1.call(this,state_12543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9748__auto____0;
cljs$core$async$state_machine__9748__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9748__auto____1;
return cljs$core$async$state_machine__9748__auto__;
})()
;})(switch__9747__auto__,c__9859__auto___12577,out))
})();
var state__9861__auto__ = (function (){var statearr_12572 = f__9860__auto__.call(null);
(statearr_12572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9859__auto___12577);

return statearr_12572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9861__auto__);
});})(c__9859__auto___12577,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1466192278364