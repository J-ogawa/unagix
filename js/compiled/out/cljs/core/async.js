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
if(typeof cljs.core.async.t_cljs$core$async7188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7188 = (function (fn_handler,f,meta7189){
this.fn_handler = fn_handler;
this.f = f;
this.meta7189 = meta7189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7190,meta7189__$1){
var self__ = this;
var _7190__$1 = this;
return (new cljs.core.async.t_cljs$core$async7188(self__.fn_handler,self__.f,meta7189__$1));
});

cljs.core.async.t_cljs$core$async7188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7190){
var self__ = this;
var _7190__$1 = this;
return self__.meta7189;
});

cljs.core.async.t_cljs$core$async7188.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta7189","meta7189",-788411278,null)], null);
});

cljs.core.async.t_cljs$core$async7188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7188";

cljs.core.async.t_cljs$core$async7188.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7188");
});

cljs.core.async.__GT_t_cljs$core$async7188 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async7188(fn_handler__$1,f__$1,meta7189){
return (new cljs.core.async.t_cljs$core$async7188(fn_handler__$1,f__$1,meta7189));
});

}

return (new cljs.core.async.t_cljs$core$async7188(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args7193 = [];
var len__5726__auto___7196 = arguments.length;
var i__5727__auto___7197 = (0);
while(true){
if((i__5727__auto___7197 < len__5726__auto___7196)){
args7193.push((arguments[i__5727__auto___7197]));

var G__7198 = (i__5727__auto___7197 + (1));
i__5727__auto___7197 = G__7198;
continue;
} else {
}
break;
}

var G__7195 = args7193.length;
switch (G__7195) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7193.length)].join('')));

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
var args7200 = [];
var len__5726__auto___7203 = arguments.length;
var i__5727__auto___7204 = (0);
while(true){
if((i__5727__auto___7204 < len__5726__auto___7203)){
args7200.push((arguments[i__5727__auto___7204]));

var G__7205 = (i__5727__auto___7204 + (1));
i__5727__auto___7204 = G__7205;
continue;
} else {
}
break;
}

var G__7202 = args7200.length;
switch (G__7202) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7200.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7207 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7207);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7207,ret){
return (function (){
return fn1.call(null,val_7207);
});})(val_7207,ret))
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
var args7208 = [];
var len__5726__auto___7211 = arguments.length;
var i__5727__auto___7212 = (0);
while(true){
if((i__5727__auto___7212 < len__5726__auto___7211)){
args7208.push((arguments[i__5727__auto___7212]));

var G__7213 = (i__5727__auto___7212 + (1));
i__5727__auto___7212 = G__7213;
continue;
} else {
}
break;
}

var G__7210 = args7208.length;
switch (G__7210) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7208.length)].join('')));

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
var n__5571__auto___7215 = n;
var x_7216 = (0);
while(true){
if((x_7216 < n__5571__auto___7215)){
(a[x_7216] = (0));

var G__7217 = (x_7216 + (1));
x_7216 = G__7217;
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

var G__7218 = (i + (1));
i = G__7218;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7222 = (function (alt_flag,flag,meta7223){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7223 = meta7223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7224,meta7223__$1){
var self__ = this;
var _7224__$1 = this;
return (new cljs.core.async.t_cljs$core$async7222(self__.alt_flag,self__.flag,meta7223__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7224){
var self__ = this;
var _7224__$1 = this;
return self__.meta7223;
});})(flag))
;

cljs.core.async.t_cljs$core$async7222.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7222.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7223","meta7223",-399938547,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7222";

cljs.core.async.t_cljs$core$async7222.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7222");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7222 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7222(alt_flag__$1,flag__$1,meta7223){
return (new cljs.core.async.t_cljs$core$async7222(alt_flag__$1,flag__$1,meta7223));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7222(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7228 = (function (alt_handler,flag,cb,meta7229){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7229 = meta7229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7230,meta7229__$1){
var self__ = this;
var _7230__$1 = this;
return (new cljs.core.async.t_cljs$core$async7228(self__.alt_handler,self__.flag,self__.cb,meta7229__$1));
});

cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7230){
var self__ = this;
var _7230__$1 = this;
return self__.meta7229;
});

cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7228.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7229","meta7229",1380345695,null)], null);
});

cljs.core.async.t_cljs$core$async7228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7228";

cljs.core.async.t_cljs$core$async7228.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7228");
});

cljs.core.async.__GT_t_cljs$core$async7228 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7228(alt_handler__$1,flag__$1,cb__$1,meta7229){
return (new cljs.core.async.t_cljs$core$async7228(alt_handler__$1,flag__$1,cb__$1,meta7229));
});

}

return (new cljs.core.async.t_cljs$core$async7228(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__7231_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7231_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7232_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7232_SHARP_,port], null));
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
var G__7233 = (i + (1));
i = G__7233;
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
var len__5726__auto___7239 = arguments.length;
var i__5727__auto___7240 = (0);
while(true){
if((i__5727__auto___7240 < len__5726__auto___7239)){
args__5733__auto__.push((arguments[i__5727__auto___7240]));

var G__7241 = (i__5727__auto___7240 + (1));
i__5727__auto___7240 = G__7241;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7236){
var map__7237 = p__7236;
var map__7237__$1 = ((((!((map__7237 == null)))?((((map__7237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7237):map__7237);
var opts = map__7237__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7234){
var G__7235 = cljs.core.first.call(null,seq7234);
var seq7234__$1 = cljs.core.next.call(null,seq7234);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7235,seq7234__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args7242 = [];
var len__5726__auto___7292 = arguments.length;
var i__5727__auto___7293 = (0);
while(true){
if((i__5727__auto___7293 < len__5726__auto___7292)){
args7242.push((arguments[i__5727__auto___7293]));

var G__7294 = (i__5727__auto___7293 + (1));
i__5727__auto___7293 = G__7294;
continue;
} else {
}
break;
}

var G__7244 = args7242.length;
switch (G__7244) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7242.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7140__auto___7296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___7296){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___7296){
return (function (state_7268){
var state_val_7269 = (state_7268[(1)]);
if((state_val_7269 === (7))){
var inst_7264 = (state_7268[(2)]);
var state_7268__$1 = state_7268;
var statearr_7270_7297 = state_7268__$1;
(statearr_7270_7297[(2)] = inst_7264);

(statearr_7270_7297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7269 === (1))){
var state_7268__$1 = state_7268;
var statearr_7271_7298 = state_7268__$1;
(statearr_7271_7298[(2)] = null);

(statearr_7271_7298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7269 === (4))){
var inst_7247 = (state_7268[(7)]);
var inst_7247__$1 = (state_7268[(2)]);
var inst_7248 = (inst_7247__$1 == null);
var state_7268__$1 = (function (){var statearr_7272 = state_7268;
(statearr_7272[(7)] = inst_7247__$1);

return statearr_7272;
})();
if(cljs.core.truth_(inst_7248)){
var statearr_7273_7299 = state_7268__$1;
(statearr_7273_7299[(1)] = (5));

} else {
var statearr_7274_7300 = state_7268__$1;
(statearr_7274_7300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7269 === (13))){
var state_7268__$1 = state_7268;
var statearr_7275_7301 = state_7268__$1;
(statearr_7275_7301[(2)] = null);

(statearr_7275_7301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7269 === (6))){
var inst_7247 = (state_7268[(7)]);
var state_7268__$1 = state_7268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7268__$1,(11),to,inst_7247);
} else {
if((state_val_7269 === (3))){
var inst_7266 = (state_7268[(2)]);
var state_7268__$1 = state_7268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7268__$1,inst_7266);
} else {
if((state_val_7269 === (12))){
var state_7268__$1 = state_7268;
var statearr_7276_7302 = state_7268__$1;
(statearr_7276_7302[(2)] = null);

(statearr_7276_7302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7269 === (2))){
var state_7268__$1 = state_7268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7268__$1,(4),from);
} else {
if((state_val_7269 === (11))){
var inst_7257 = (state_7268[(2)]);
var state_7268__$1 = state_7268;
if(cljs.core.truth_(inst_7257)){
var statearr_7277_7303 = state_7268__$1;
(statearr_7277_7303[(1)] = (12));

} else {
var statearr_7278_7304 = state_7268__$1;
(statearr_7278_7304[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7269 === (9))){
var state_7268__$1 = state_7268;
var statearr_7279_7305 = state_7268__$1;
(statearr_7279_7305[(2)] = null);

(statearr_7279_7305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7269 === (5))){
var state_7268__$1 = state_7268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7280_7306 = state_7268__$1;
(statearr_7280_7306[(1)] = (8));

} else {
var statearr_7281_7307 = state_7268__$1;
(statearr_7281_7307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7269 === (14))){
var inst_7262 = (state_7268[(2)]);
var state_7268__$1 = state_7268;
var statearr_7282_7308 = state_7268__$1;
(statearr_7282_7308[(2)] = inst_7262);

(statearr_7282_7308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7269 === (10))){
var inst_7254 = (state_7268[(2)]);
var state_7268__$1 = state_7268;
var statearr_7283_7309 = state_7268__$1;
(statearr_7283_7309[(2)] = inst_7254);

(statearr_7283_7309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7269 === (8))){
var inst_7251 = cljs.core.async.close_BANG_.call(null,to);
var state_7268__$1 = state_7268;
var statearr_7284_7310 = state_7268__$1;
(statearr_7284_7310[(2)] = inst_7251);

(statearr_7284_7310[(1)] = (10));


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
});})(c__7140__auto___7296))
;
return ((function (switch__7028__auto__,c__7140__auto___7296){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_7288 = [null,null,null,null,null,null,null,null];
(statearr_7288[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_7288[(1)] = (1));

return statearr_7288;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_7268){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_7268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e7289){if((e7289 instanceof Object)){
var ex__7032__auto__ = e7289;
var statearr_7290_7311 = state_7268;
(statearr_7290_7311[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7312 = state_7268;
state_7268 = G__7312;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_7268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_7268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___7296))
})();
var state__7142__auto__ = (function (){var statearr_7291 = f__7141__auto__.call(null);
(statearr_7291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___7296);

return statearr_7291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___7296))
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
return (function (p__7496){
var vec__7497 = p__7496;
var v = cljs.core.nth.call(null,vec__7497,(0),null);
var p = cljs.core.nth.call(null,vec__7497,(1),null);
var job = vec__7497;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7140__auto___7679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___7679,res,vec__7497,v,p,job,jobs,results){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___7679,res,vec__7497,v,p,job,jobs,results){
return (function (state_7502){
var state_val_7503 = (state_7502[(1)]);
if((state_val_7503 === (1))){
var state_7502__$1 = state_7502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7502__$1,(2),res,v);
} else {
if((state_val_7503 === (2))){
var inst_7499 = (state_7502[(2)]);
var inst_7500 = cljs.core.async.close_BANG_.call(null,res);
var state_7502__$1 = (function (){var statearr_7504 = state_7502;
(statearr_7504[(7)] = inst_7499);

return statearr_7504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7502__$1,inst_7500);
} else {
return null;
}
}
});})(c__7140__auto___7679,res,vec__7497,v,p,job,jobs,results))
;
return ((function (switch__7028__auto__,c__7140__auto___7679,res,vec__7497,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0 = (function (){
var statearr_7508 = [null,null,null,null,null,null,null,null];
(statearr_7508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__);

(statearr_7508[(1)] = (1));

return statearr_7508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1 = (function (state_7502){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_7502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e7509){if((e7509 instanceof Object)){
var ex__7032__auto__ = e7509;
var statearr_7510_7680 = state_7502;
(statearr_7510_7680[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7681 = state_7502;
state_7502 = G__7681;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = function(state_7502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1.call(this,state_7502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___7679,res,vec__7497,v,p,job,jobs,results))
})();
var state__7142__auto__ = (function (){var statearr_7511 = f__7141__auto__.call(null);
(statearr_7511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___7679);

return statearr_7511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___7679,res,vec__7497,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7512){
var vec__7513 = p__7512;
var v = cljs.core.nth.call(null,vec__7513,(0),null);
var p = cljs.core.nth.call(null,vec__7513,(1),null);
var job = vec__7513;
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
var n__5571__auto___7682 = n;
var __7683 = (0);
while(true){
if((__7683 < n__5571__auto___7682)){
var G__7514_7684 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__7514_7684) {
case "compute":
var c__7140__auto___7686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7683,c__7140__auto___7686,G__7514_7684,n__5571__auto___7682,jobs,results,process,async){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (__7683,c__7140__auto___7686,G__7514_7684,n__5571__auto___7682,jobs,results,process,async){
return (function (state_7527){
var state_val_7528 = (state_7527[(1)]);
if((state_val_7528 === (1))){
var state_7527__$1 = state_7527;
var statearr_7529_7687 = state_7527__$1;
(statearr_7529_7687[(2)] = null);

(statearr_7529_7687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (2))){
var state_7527__$1 = state_7527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7527__$1,(4),jobs);
} else {
if((state_val_7528 === (3))){
var inst_7525 = (state_7527[(2)]);
var state_7527__$1 = state_7527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7527__$1,inst_7525);
} else {
if((state_val_7528 === (4))){
var inst_7517 = (state_7527[(2)]);
var inst_7518 = process.call(null,inst_7517);
var state_7527__$1 = state_7527;
if(cljs.core.truth_(inst_7518)){
var statearr_7530_7688 = state_7527__$1;
(statearr_7530_7688[(1)] = (5));

} else {
var statearr_7531_7689 = state_7527__$1;
(statearr_7531_7689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (5))){
var state_7527__$1 = state_7527;
var statearr_7532_7690 = state_7527__$1;
(statearr_7532_7690[(2)] = null);

(statearr_7532_7690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (6))){
var state_7527__$1 = state_7527;
var statearr_7533_7691 = state_7527__$1;
(statearr_7533_7691[(2)] = null);

(statearr_7533_7691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (7))){
var inst_7523 = (state_7527[(2)]);
var state_7527__$1 = state_7527;
var statearr_7534_7692 = state_7527__$1;
(statearr_7534_7692[(2)] = inst_7523);

(statearr_7534_7692[(1)] = (3));


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
});})(__7683,c__7140__auto___7686,G__7514_7684,n__5571__auto___7682,jobs,results,process,async))
;
return ((function (__7683,switch__7028__auto__,c__7140__auto___7686,G__7514_7684,n__5571__auto___7682,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0 = (function (){
var statearr_7538 = [null,null,null,null,null,null,null];
(statearr_7538[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__);

(statearr_7538[(1)] = (1));

return statearr_7538;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1 = (function (state_7527){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_7527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e7539){if((e7539 instanceof Object)){
var ex__7032__auto__ = e7539;
var statearr_7540_7693 = state_7527;
(statearr_7540_7693[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7694 = state_7527;
state_7527 = G__7694;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = function(state_7527){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1.call(this,state_7527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__;
})()
;})(__7683,switch__7028__auto__,c__7140__auto___7686,G__7514_7684,n__5571__auto___7682,jobs,results,process,async))
})();
var state__7142__auto__ = (function (){var statearr_7541 = f__7141__auto__.call(null);
(statearr_7541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___7686);

return statearr_7541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(__7683,c__7140__auto___7686,G__7514_7684,n__5571__auto___7682,jobs,results,process,async))
);


break;
case "async":
var c__7140__auto___7695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7683,c__7140__auto___7695,G__7514_7684,n__5571__auto___7682,jobs,results,process,async){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (__7683,c__7140__auto___7695,G__7514_7684,n__5571__auto___7682,jobs,results,process,async){
return (function (state_7554){
var state_val_7555 = (state_7554[(1)]);
if((state_val_7555 === (1))){
var state_7554__$1 = state_7554;
var statearr_7556_7696 = state_7554__$1;
(statearr_7556_7696[(2)] = null);

(statearr_7556_7696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7555 === (2))){
var state_7554__$1 = state_7554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7554__$1,(4),jobs);
} else {
if((state_val_7555 === (3))){
var inst_7552 = (state_7554[(2)]);
var state_7554__$1 = state_7554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7554__$1,inst_7552);
} else {
if((state_val_7555 === (4))){
var inst_7544 = (state_7554[(2)]);
var inst_7545 = async.call(null,inst_7544);
var state_7554__$1 = state_7554;
if(cljs.core.truth_(inst_7545)){
var statearr_7557_7697 = state_7554__$1;
(statearr_7557_7697[(1)] = (5));

} else {
var statearr_7558_7698 = state_7554__$1;
(statearr_7558_7698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7555 === (5))){
var state_7554__$1 = state_7554;
var statearr_7559_7699 = state_7554__$1;
(statearr_7559_7699[(2)] = null);

(statearr_7559_7699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7555 === (6))){
var state_7554__$1 = state_7554;
var statearr_7560_7700 = state_7554__$1;
(statearr_7560_7700[(2)] = null);

(statearr_7560_7700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7555 === (7))){
var inst_7550 = (state_7554[(2)]);
var state_7554__$1 = state_7554;
var statearr_7561_7701 = state_7554__$1;
(statearr_7561_7701[(2)] = inst_7550);

(statearr_7561_7701[(1)] = (3));


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
});})(__7683,c__7140__auto___7695,G__7514_7684,n__5571__auto___7682,jobs,results,process,async))
;
return ((function (__7683,switch__7028__auto__,c__7140__auto___7695,G__7514_7684,n__5571__auto___7682,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0 = (function (){
var statearr_7565 = [null,null,null,null,null,null,null];
(statearr_7565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__);

(statearr_7565[(1)] = (1));

return statearr_7565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1 = (function (state_7554){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_7554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e7566){if((e7566 instanceof Object)){
var ex__7032__auto__ = e7566;
var statearr_7567_7702 = state_7554;
(statearr_7567_7702[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7703 = state_7554;
state_7554 = G__7703;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = function(state_7554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1.call(this,state_7554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__;
})()
;})(__7683,switch__7028__auto__,c__7140__auto___7695,G__7514_7684,n__5571__auto___7682,jobs,results,process,async))
})();
var state__7142__auto__ = (function (){var statearr_7568 = f__7141__auto__.call(null);
(statearr_7568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___7695);

return statearr_7568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(__7683,c__7140__auto___7695,G__7514_7684,n__5571__auto___7682,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__7704 = (__7683 + (1));
__7683 = G__7704;
continue;
} else {
}
break;
}

var c__7140__auto___7705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___7705,jobs,results,process,async){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___7705,jobs,results,process,async){
return (function (state_7590){
var state_val_7591 = (state_7590[(1)]);
if((state_val_7591 === (1))){
var state_7590__$1 = state_7590;
var statearr_7592_7706 = state_7590__$1;
(statearr_7592_7706[(2)] = null);

(statearr_7592_7706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7591 === (2))){
var state_7590__$1 = state_7590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7590__$1,(4),from);
} else {
if((state_val_7591 === (3))){
var inst_7588 = (state_7590[(2)]);
var state_7590__$1 = state_7590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7590__$1,inst_7588);
} else {
if((state_val_7591 === (4))){
var inst_7571 = (state_7590[(7)]);
var inst_7571__$1 = (state_7590[(2)]);
var inst_7572 = (inst_7571__$1 == null);
var state_7590__$1 = (function (){var statearr_7593 = state_7590;
(statearr_7593[(7)] = inst_7571__$1);

return statearr_7593;
})();
if(cljs.core.truth_(inst_7572)){
var statearr_7594_7707 = state_7590__$1;
(statearr_7594_7707[(1)] = (5));

} else {
var statearr_7595_7708 = state_7590__$1;
(statearr_7595_7708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7591 === (5))){
var inst_7574 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7590__$1 = state_7590;
var statearr_7596_7709 = state_7590__$1;
(statearr_7596_7709[(2)] = inst_7574);

(statearr_7596_7709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7591 === (6))){
var inst_7571 = (state_7590[(7)]);
var inst_7576 = (state_7590[(8)]);
var inst_7576__$1 = cljs.core.async.chan.call(null,(1));
var inst_7577 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7578 = [inst_7571,inst_7576__$1];
var inst_7579 = (new cljs.core.PersistentVector(null,2,(5),inst_7577,inst_7578,null));
var state_7590__$1 = (function (){var statearr_7597 = state_7590;
(statearr_7597[(8)] = inst_7576__$1);

return statearr_7597;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7590__$1,(8),jobs,inst_7579);
} else {
if((state_val_7591 === (7))){
var inst_7586 = (state_7590[(2)]);
var state_7590__$1 = state_7590;
var statearr_7598_7710 = state_7590__$1;
(statearr_7598_7710[(2)] = inst_7586);

(statearr_7598_7710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7591 === (8))){
var inst_7576 = (state_7590[(8)]);
var inst_7581 = (state_7590[(2)]);
var state_7590__$1 = (function (){var statearr_7599 = state_7590;
(statearr_7599[(9)] = inst_7581);

return statearr_7599;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7590__$1,(9),results,inst_7576);
} else {
if((state_val_7591 === (9))){
var inst_7583 = (state_7590[(2)]);
var state_7590__$1 = (function (){var statearr_7600 = state_7590;
(statearr_7600[(10)] = inst_7583);

return statearr_7600;
})();
var statearr_7601_7711 = state_7590__$1;
(statearr_7601_7711[(2)] = null);

(statearr_7601_7711[(1)] = (2));


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
});})(c__7140__auto___7705,jobs,results,process,async))
;
return ((function (switch__7028__auto__,c__7140__auto___7705,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0 = (function (){
var statearr_7605 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7605[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__);

(statearr_7605[(1)] = (1));

return statearr_7605;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1 = (function (state_7590){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_7590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e7606){if((e7606 instanceof Object)){
var ex__7032__auto__ = e7606;
var statearr_7607_7712 = state_7590;
(statearr_7607_7712[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7713 = state_7590;
state_7590 = G__7713;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = function(state_7590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1.call(this,state_7590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___7705,jobs,results,process,async))
})();
var state__7142__auto__ = (function (){var statearr_7608 = f__7141__auto__.call(null);
(statearr_7608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___7705);

return statearr_7608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___7705,jobs,results,process,async))
);


var c__7140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto__,jobs,results,process,async){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto__,jobs,results,process,async){
return (function (state_7646){
var state_val_7647 = (state_7646[(1)]);
if((state_val_7647 === (7))){
var inst_7642 = (state_7646[(2)]);
var state_7646__$1 = state_7646;
var statearr_7648_7714 = state_7646__$1;
(statearr_7648_7714[(2)] = inst_7642);

(statearr_7648_7714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (20))){
var state_7646__$1 = state_7646;
var statearr_7649_7715 = state_7646__$1;
(statearr_7649_7715[(2)] = null);

(statearr_7649_7715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (1))){
var state_7646__$1 = state_7646;
var statearr_7650_7716 = state_7646__$1;
(statearr_7650_7716[(2)] = null);

(statearr_7650_7716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (4))){
var inst_7611 = (state_7646[(7)]);
var inst_7611__$1 = (state_7646[(2)]);
var inst_7612 = (inst_7611__$1 == null);
var state_7646__$1 = (function (){var statearr_7651 = state_7646;
(statearr_7651[(7)] = inst_7611__$1);

return statearr_7651;
})();
if(cljs.core.truth_(inst_7612)){
var statearr_7652_7717 = state_7646__$1;
(statearr_7652_7717[(1)] = (5));

} else {
var statearr_7653_7718 = state_7646__$1;
(statearr_7653_7718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (15))){
var inst_7624 = (state_7646[(8)]);
var state_7646__$1 = state_7646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7646__$1,(18),to,inst_7624);
} else {
if((state_val_7647 === (21))){
var inst_7637 = (state_7646[(2)]);
var state_7646__$1 = state_7646;
var statearr_7654_7719 = state_7646__$1;
(statearr_7654_7719[(2)] = inst_7637);

(statearr_7654_7719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (13))){
var inst_7639 = (state_7646[(2)]);
var state_7646__$1 = (function (){var statearr_7655 = state_7646;
(statearr_7655[(9)] = inst_7639);

return statearr_7655;
})();
var statearr_7656_7720 = state_7646__$1;
(statearr_7656_7720[(2)] = null);

(statearr_7656_7720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (6))){
var inst_7611 = (state_7646[(7)]);
var state_7646__$1 = state_7646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7646__$1,(11),inst_7611);
} else {
if((state_val_7647 === (17))){
var inst_7632 = (state_7646[(2)]);
var state_7646__$1 = state_7646;
if(cljs.core.truth_(inst_7632)){
var statearr_7657_7721 = state_7646__$1;
(statearr_7657_7721[(1)] = (19));

} else {
var statearr_7658_7722 = state_7646__$1;
(statearr_7658_7722[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (3))){
var inst_7644 = (state_7646[(2)]);
var state_7646__$1 = state_7646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7646__$1,inst_7644);
} else {
if((state_val_7647 === (12))){
var inst_7621 = (state_7646[(10)]);
var state_7646__$1 = state_7646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7646__$1,(14),inst_7621);
} else {
if((state_val_7647 === (2))){
var state_7646__$1 = state_7646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7646__$1,(4),results);
} else {
if((state_val_7647 === (19))){
var state_7646__$1 = state_7646;
var statearr_7659_7723 = state_7646__$1;
(statearr_7659_7723[(2)] = null);

(statearr_7659_7723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (11))){
var inst_7621 = (state_7646[(2)]);
var state_7646__$1 = (function (){var statearr_7660 = state_7646;
(statearr_7660[(10)] = inst_7621);

return statearr_7660;
})();
var statearr_7661_7724 = state_7646__$1;
(statearr_7661_7724[(2)] = null);

(statearr_7661_7724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (9))){
var state_7646__$1 = state_7646;
var statearr_7662_7725 = state_7646__$1;
(statearr_7662_7725[(2)] = null);

(statearr_7662_7725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (5))){
var state_7646__$1 = state_7646;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7663_7726 = state_7646__$1;
(statearr_7663_7726[(1)] = (8));

} else {
var statearr_7664_7727 = state_7646__$1;
(statearr_7664_7727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (14))){
var inst_7624 = (state_7646[(8)]);
var inst_7626 = (state_7646[(11)]);
var inst_7624__$1 = (state_7646[(2)]);
var inst_7625 = (inst_7624__$1 == null);
var inst_7626__$1 = cljs.core.not.call(null,inst_7625);
var state_7646__$1 = (function (){var statearr_7665 = state_7646;
(statearr_7665[(8)] = inst_7624__$1);

(statearr_7665[(11)] = inst_7626__$1);

return statearr_7665;
})();
if(inst_7626__$1){
var statearr_7666_7728 = state_7646__$1;
(statearr_7666_7728[(1)] = (15));

} else {
var statearr_7667_7729 = state_7646__$1;
(statearr_7667_7729[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (16))){
var inst_7626 = (state_7646[(11)]);
var state_7646__$1 = state_7646;
var statearr_7668_7730 = state_7646__$1;
(statearr_7668_7730[(2)] = inst_7626);

(statearr_7668_7730[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (10))){
var inst_7618 = (state_7646[(2)]);
var state_7646__$1 = state_7646;
var statearr_7669_7731 = state_7646__$1;
(statearr_7669_7731[(2)] = inst_7618);

(statearr_7669_7731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (18))){
var inst_7629 = (state_7646[(2)]);
var state_7646__$1 = state_7646;
var statearr_7670_7732 = state_7646__$1;
(statearr_7670_7732[(2)] = inst_7629);

(statearr_7670_7732[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7647 === (8))){
var inst_7615 = cljs.core.async.close_BANG_.call(null,to);
var state_7646__$1 = state_7646;
var statearr_7671_7733 = state_7646__$1;
(statearr_7671_7733[(2)] = inst_7615);

(statearr_7671_7733[(1)] = (10));


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
});})(c__7140__auto__,jobs,results,process,async))
;
return ((function (switch__7028__auto__,c__7140__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0 = (function (){
var statearr_7675 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__);

(statearr_7675[(1)] = (1));

return statearr_7675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1 = (function (state_7646){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_7646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e7676){if((e7676 instanceof Object)){
var ex__7032__auto__ = e7676;
var statearr_7677_7734 = state_7646;
(statearr_7677_7734[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7735 = state_7646;
state_7646 = G__7735;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__ = function(state_7646){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1.call(this,state_7646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto__,jobs,results,process,async))
})();
var state__7142__auto__ = (function (){var statearr_7678 = f__7141__auto__.call(null);
(statearr_7678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto__);

return statearr_7678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto__,jobs,results,process,async))
);

return c__7140__auto__;
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
var args7736 = [];
var len__5726__auto___7739 = arguments.length;
var i__5727__auto___7740 = (0);
while(true){
if((i__5727__auto___7740 < len__5726__auto___7739)){
args7736.push((arguments[i__5727__auto___7740]));

var G__7741 = (i__5727__auto___7740 + (1));
i__5727__auto___7740 = G__7741;
continue;
} else {
}
break;
}

var G__7738 = args7736.length;
switch (G__7738) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7736.length)].join('')));

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
var args7743 = [];
var len__5726__auto___7746 = arguments.length;
var i__5727__auto___7747 = (0);
while(true){
if((i__5727__auto___7747 < len__5726__auto___7746)){
args7743.push((arguments[i__5727__auto___7747]));

var G__7748 = (i__5727__auto___7747 + (1));
i__5727__auto___7747 = G__7748;
continue;
} else {
}
break;
}

var G__7745 = args7743.length;
switch (G__7745) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7743.length)].join('')));

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
var args7750 = [];
var len__5726__auto___7803 = arguments.length;
var i__5727__auto___7804 = (0);
while(true){
if((i__5727__auto___7804 < len__5726__auto___7803)){
args7750.push((arguments[i__5727__auto___7804]));

var G__7805 = (i__5727__auto___7804 + (1));
i__5727__auto___7804 = G__7805;
continue;
} else {
}
break;
}

var G__7752 = args7750.length;
switch (G__7752) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7750.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7140__auto___7807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___7807,tc,fc){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___7807,tc,fc){
return (function (state_7778){
var state_val_7779 = (state_7778[(1)]);
if((state_val_7779 === (7))){
var inst_7774 = (state_7778[(2)]);
var state_7778__$1 = state_7778;
var statearr_7780_7808 = state_7778__$1;
(statearr_7780_7808[(2)] = inst_7774);

(statearr_7780_7808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7779 === (1))){
var state_7778__$1 = state_7778;
var statearr_7781_7809 = state_7778__$1;
(statearr_7781_7809[(2)] = null);

(statearr_7781_7809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7779 === (4))){
var inst_7755 = (state_7778[(7)]);
var inst_7755__$1 = (state_7778[(2)]);
var inst_7756 = (inst_7755__$1 == null);
var state_7778__$1 = (function (){var statearr_7782 = state_7778;
(statearr_7782[(7)] = inst_7755__$1);

return statearr_7782;
})();
if(cljs.core.truth_(inst_7756)){
var statearr_7783_7810 = state_7778__$1;
(statearr_7783_7810[(1)] = (5));

} else {
var statearr_7784_7811 = state_7778__$1;
(statearr_7784_7811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7779 === (13))){
var state_7778__$1 = state_7778;
var statearr_7785_7812 = state_7778__$1;
(statearr_7785_7812[(2)] = null);

(statearr_7785_7812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7779 === (6))){
var inst_7755 = (state_7778[(7)]);
var inst_7761 = p.call(null,inst_7755);
var state_7778__$1 = state_7778;
if(cljs.core.truth_(inst_7761)){
var statearr_7786_7813 = state_7778__$1;
(statearr_7786_7813[(1)] = (9));

} else {
var statearr_7787_7814 = state_7778__$1;
(statearr_7787_7814[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7779 === (3))){
var inst_7776 = (state_7778[(2)]);
var state_7778__$1 = state_7778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7778__$1,inst_7776);
} else {
if((state_val_7779 === (12))){
var state_7778__$1 = state_7778;
var statearr_7788_7815 = state_7778__$1;
(statearr_7788_7815[(2)] = null);

(statearr_7788_7815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7779 === (2))){
var state_7778__$1 = state_7778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7778__$1,(4),ch);
} else {
if((state_val_7779 === (11))){
var inst_7755 = (state_7778[(7)]);
var inst_7765 = (state_7778[(2)]);
var state_7778__$1 = state_7778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7778__$1,(8),inst_7765,inst_7755);
} else {
if((state_val_7779 === (9))){
var state_7778__$1 = state_7778;
var statearr_7789_7816 = state_7778__$1;
(statearr_7789_7816[(2)] = tc);

(statearr_7789_7816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7779 === (5))){
var inst_7758 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7759 = cljs.core.async.close_BANG_.call(null,fc);
var state_7778__$1 = (function (){var statearr_7790 = state_7778;
(statearr_7790[(8)] = inst_7758);

return statearr_7790;
})();
var statearr_7791_7817 = state_7778__$1;
(statearr_7791_7817[(2)] = inst_7759);

(statearr_7791_7817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7779 === (14))){
var inst_7772 = (state_7778[(2)]);
var state_7778__$1 = state_7778;
var statearr_7792_7818 = state_7778__$1;
(statearr_7792_7818[(2)] = inst_7772);

(statearr_7792_7818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7779 === (10))){
var state_7778__$1 = state_7778;
var statearr_7793_7819 = state_7778__$1;
(statearr_7793_7819[(2)] = fc);

(statearr_7793_7819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7779 === (8))){
var inst_7767 = (state_7778[(2)]);
var state_7778__$1 = state_7778;
if(cljs.core.truth_(inst_7767)){
var statearr_7794_7820 = state_7778__$1;
(statearr_7794_7820[(1)] = (12));

} else {
var statearr_7795_7821 = state_7778__$1;
(statearr_7795_7821[(1)] = (13));

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
});})(c__7140__auto___7807,tc,fc))
;
return ((function (switch__7028__auto__,c__7140__auto___7807,tc,fc){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_7799 = [null,null,null,null,null,null,null,null,null];
(statearr_7799[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_7799[(1)] = (1));

return statearr_7799;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_7778){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_7778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e7800){if((e7800 instanceof Object)){
var ex__7032__auto__ = e7800;
var statearr_7801_7822 = state_7778;
(statearr_7801_7822[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7823 = state_7778;
state_7778 = G__7823;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_7778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_7778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___7807,tc,fc))
})();
var state__7142__auto__ = (function (){var statearr_7802 = f__7141__auto__.call(null);
(statearr_7802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___7807);

return statearr_7802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___7807,tc,fc))
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
var c__7140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto__){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto__){
return (function (state_7870){
var state_val_7871 = (state_7870[(1)]);
if((state_val_7871 === (1))){
var inst_7856 = init;
var state_7870__$1 = (function (){var statearr_7872 = state_7870;
(statearr_7872[(7)] = inst_7856);

return statearr_7872;
})();
var statearr_7873_7888 = state_7870__$1;
(statearr_7873_7888[(2)] = null);

(statearr_7873_7888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7871 === (2))){
var state_7870__$1 = state_7870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7870__$1,(4),ch);
} else {
if((state_val_7871 === (3))){
var inst_7868 = (state_7870[(2)]);
var state_7870__$1 = state_7870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7870__$1,inst_7868);
} else {
if((state_val_7871 === (4))){
var inst_7859 = (state_7870[(8)]);
var inst_7859__$1 = (state_7870[(2)]);
var inst_7860 = (inst_7859__$1 == null);
var state_7870__$1 = (function (){var statearr_7874 = state_7870;
(statearr_7874[(8)] = inst_7859__$1);

return statearr_7874;
})();
if(cljs.core.truth_(inst_7860)){
var statearr_7875_7889 = state_7870__$1;
(statearr_7875_7889[(1)] = (5));

} else {
var statearr_7876_7890 = state_7870__$1;
(statearr_7876_7890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7871 === (5))){
var inst_7856 = (state_7870[(7)]);
var state_7870__$1 = state_7870;
var statearr_7877_7891 = state_7870__$1;
(statearr_7877_7891[(2)] = inst_7856);

(statearr_7877_7891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7871 === (6))){
var inst_7859 = (state_7870[(8)]);
var inst_7856 = (state_7870[(7)]);
var inst_7863 = f.call(null,inst_7856,inst_7859);
var inst_7856__$1 = inst_7863;
var state_7870__$1 = (function (){var statearr_7878 = state_7870;
(statearr_7878[(7)] = inst_7856__$1);

return statearr_7878;
})();
var statearr_7879_7892 = state_7870__$1;
(statearr_7879_7892[(2)] = null);

(statearr_7879_7892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7871 === (7))){
var inst_7866 = (state_7870[(2)]);
var state_7870__$1 = state_7870;
var statearr_7880_7893 = state_7870__$1;
(statearr_7880_7893[(2)] = inst_7866);

(statearr_7880_7893[(1)] = (3));


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
});})(c__7140__auto__))
;
return ((function (switch__7028__auto__,c__7140__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7029__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7029__auto____0 = (function (){
var statearr_7884 = [null,null,null,null,null,null,null,null,null];
(statearr_7884[(0)] = cljs$core$async$reduce_$_state_machine__7029__auto__);

(statearr_7884[(1)] = (1));

return statearr_7884;
});
var cljs$core$async$reduce_$_state_machine__7029__auto____1 = (function (state_7870){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_7870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e7885){if((e7885 instanceof Object)){
var ex__7032__auto__ = e7885;
var statearr_7886_7894 = state_7870;
(statearr_7886_7894[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7895 = state_7870;
state_7870 = G__7895;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7029__auto__ = function(state_7870){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7029__auto____1.call(this,state_7870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7029__auto____0;
cljs$core$async$reduce_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7029__auto____1;
return cljs$core$async$reduce_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto__))
})();
var state__7142__auto__ = (function (){var statearr_7887 = f__7141__auto__.call(null);
(statearr_7887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto__);

return statearr_7887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto__))
);

return c__7140__auto__;
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
var args7896 = [];
var len__5726__auto___7948 = arguments.length;
var i__5727__auto___7949 = (0);
while(true){
if((i__5727__auto___7949 < len__5726__auto___7948)){
args7896.push((arguments[i__5727__auto___7949]));

var G__7950 = (i__5727__auto___7949 + (1));
i__5727__auto___7949 = G__7950;
continue;
} else {
}
break;
}

var G__7898 = args7896.length;
switch (G__7898) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7896.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto__){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto__){
return (function (state_7923){
var state_val_7924 = (state_7923[(1)]);
if((state_val_7924 === (7))){
var inst_7905 = (state_7923[(2)]);
var state_7923__$1 = state_7923;
var statearr_7925_7952 = state_7923__$1;
(statearr_7925_7952[(2)] = inst_7905);

(statearr_7925_7952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7924 === (1))){
var inst_7899 = cljs.core.seq.call(null,coll);
var inst_7900 = inst_7899;
var state_7923__$1 = (function (){var statearr_7926 = state_7923;
(statearr_7926[(7)] = inst_7900);

return statearr_7926;
})();
var statearr_7927_7953 = state_7923__$1;
(statearr_7927_7953[(2)] = null);

(statearr_7927_7953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7924 === (4))){
var inst_7900 = (state_7923[(7)]);
var inst_7903 = cljs.core.first.call(null,inst_7900);
var state_7923__$1 = state_7923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7923__$1,(7),ch,inst_7903);
} else {
if((state_val_7924 === (13))){
var inst_7917 = (state_7923[(2)]);
var state_7923__$1 = state_7923;
var statearr_7928_7954 = state_7923__$1;
(statearr_7928_7954[(2)] = inst_7917);

(statearr_7928_7954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7924 === (6))){
var inst_7908 = (state_7923[(2)]);
var state_7923__$1 = state_7923;
if(cljs.core.truth_(inst_7908)){
var statearr_7929_7955 = state_7923__$1;
(statearr_7929_7955[(1)] = (8));

} else {
var statearr_7930_7956 = state_7923__$1;
(statearr_7930_7956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7924 === (3))){
var inst_7921 = (state_7923[(2)]);
var state_7923__$1 = state_7923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7923__$1,inst_7921);
} else {
if((state_val_7924 === (12))){
var state_7923__$1 = state_7923;
var statearr_7931_7957 = state_7923__$1;
(statearr_7931_7957[(2)] = null);

(statearr_7931_7957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7924 === (2))){
var inst_7900 = (state_7923[(7)]);
var state_7923__$1 = state_7923;
if(cljs.core.truth_(inst_7900)){
var statearr_7932_7958 = state_7923__$1;
(statearr_7932_7958[(1)] = (4));

} else {
var statearr_7933_7959 = state_7923__$1;
(statearr_7933_7959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7924 === (11))){
var inst_7914 = cljs.core.async.close_BANG_.call(null,ch);
var state_7923__$1 = state_7923;
var statearr_7934_7960 = state_7923__$1;
(statearr_7934_7960[(2)] = inst_7914);

(statearr_7934_7960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7924 === (9))){
var state_7923__$1 = state_7923;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7935_7961 = state_7923__$1;
(statearr_7935_7961[(1)] = (11));

} else {
var statearr_7936_7962 = state_7923__$1;
(statearr_7936_7962[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7924 === (5))){
var inst_7900 = (state_7923[(7)]);
var state_7923__$1 = state_7923;
var statearr_7937_7963 = state_7923__$1;
(statearr_7937_7963[(2)] = inst_7900);

(statearr_7937_7963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7924 === (10))){
var inst_7919 = (state_7923[(2)]);
var state_7923__$1 = state_7923;
var statearr_7938_7964 = state_7923__$1;
(statearr_7938_7964[(2)] = inst_7919);

(statearr_7938_7964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7924 === (8))){
var inst_7900 = (state_7923[(7)]);
var inst_7910 = cljs.core.next.call(null,inst_7900);
var inst_7900__$1 = inst_7910;
var state_7923__$1 = (function (){var statearr_7939 = state_7923;
(statearr_7939[(7)] = inst_7900__$1);

return statearr_7939;
})();
var statearr_7940_7965 = state_7923__$1;
(statearr_7940_7965[(2)] = null);

(statearr_7940_7965[(1)] = (2));


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
});})(c__7140__auto__))
;
return ((function (switch__7028__auto__,c__7140__auto__){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_7944 = [null,null,null,null,null,null,null,null];
(statearr_7944[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_7944[(1)] = (1));

return statearr_7944;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_7923){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_7923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e7945){if((e7945 instanceof Object)){
var ex__7032__auto__ = e7945;
var statearr_7946_7966 = state_7923;
(statearr_7946_7966[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7967 = state_7923;
state_7923 = G__7967;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_7923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_7923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto__))
})();
var state__7142__auto__ = (function (){var statearr_7947 = f__7141__auto__.call(null);
(statearr_7947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto__);

return statearr_7947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto__))
);

return c__7140__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async8189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8189 = (function (mult,ch,cs,meta8190){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8190 = meta8190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8191,meta8190__$1){
var self__ = this;
var _8191__$1 = this;
return (new cljs.core.async.t_cljs$core$async8189(self__.mult,self__.ch,self__.cs,meta8190__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8191){
var self__ = this;
var _8191__$1 = this;
return self__.meta8190;
});})(cs))
;

cljs.core.async.t_cljs$core$async8189.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8189.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8189.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8189.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8189.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8189.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8190","meta8190",-2131670311,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8189";

cljs.core.async.t_cljs$core$async8189.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8189");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8189 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8189(mult__$1,ch__$1,cs__$1,meta8190){
return (new cljs.core.async.t_cljs$core$async8189(mult__$1,ch__$1,cs__$1,meta8190));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8189(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7140__auto___8410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___8410,cs,m,dchan,dctr,done){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___8410,cs,m,dchan,dctr,done){
return (function (state_8322){
var state_val_8323 = (state_8322[(1)]);
if((state_val_8323 === (7))){
var inst_8318 = (state_8322[(2)]);
var state_8322__$1 = state_8322;
var statearr_8324_8411 = state_8322__$1;
(statearr_8324_8411[(2)] = inst_8318);

(statearr_8324_8411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (20))){
var inst_8223 = (state_8322[(7)]);
var inst_8233 = cljs.core.first.call(null,inst_8223);
var inst_8234 = cljs.core.nth.call(null,inst_8233,(0),null);
var inst_8235 = cljs.core.nth.call(null,inst_8233,(1),null);
var state_8322__$1 = (function (){var statearr_8325 = state_8322;
(statearr_8325[(8)] = inst_8234);

return statearr_8325;
})();
if(cljs.core.truth_(inst_8235)){
var statearr_8326_8412 = state_8322__$1;
(statearr_8326_8412[(1)] = (22));

} else {
var statearr_8327_8413 = state_8322__$1;
(statearr_8327_8413[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (27))){
var inst_8270 = (state_8322[(9)]);
var inst_8194 = (state_8322[(10)]);
var inst_8265 = (state_8322[(11)]);
var inst_8263 = (state_8322[(12)]);
var inst_8270__$1 = cljs.core._nth.call(null,inst_8263,inst_8265);
var inst_8271 = cljs.core.async.put_BANG_.call(null,inst_8270__$1,inst_8194,done);
var state_8322__$1 = (function (){var statearr_8328 = state_8322;
(statearr_8328[(9)] = inst_8270__$1);

return statearr_8328;
})();
if(cljs.core.truth_(inst_8271)){
var statearr_8329_8414 = state_8322__$1;
(statearr_8329_8414[(1)] = (30));

} else {
var statearr_8330_8415 = state_8322__$1;
(statearr_8330_8415[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (1))){
var state_8322__$1 = state_8322;
var statearr_8331_8416 = state_8322__$1;
(statearr_8331_8416[(2)] = null);

(statearr_8331_8416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (24))){
var inst_8223 = (state_8322[(7)]);
var inst_8240 = (state_8322[(2)]);
var inst_8241 = cljs.core.next.call(null,inst_8223);
var inst_8203 = inst_8241;
var inst_8204 = null;
var inst_8205 = (0);
var inst_8206 = (0);
var state_8322__$1 = (function (){var statearr_8332 = state_8322;
(statearr_8332[(13)] = inst_8203);

(statearr_8332[(14)] = inst_8206);

(statearr_8332[(15)] = inst_8204);

(statearr_8332[(16)] = inst_8240);

(statearr_8332[(17)] = inst_8205);

return statearr_8332;
})();
var statearr_8333_8417 = state_8322__$1;
(statearr_8333_8417[(2)] = null);

(statearr_8333_8417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (39))){
var state_8322__$1 = state_8322;
var statearr_8337_8418 = state_8322__$1;
(statearr_8337_8418[(2)] = null);

(statearr_8337_8418[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (4))){
var inst_8194 = (state_8322[(10)]);
var inst_8194__$1 = (state_8322[(2)]);
var inst_8195 = (inst_8194__$1 == null);
var state_8322__$1 = (function (){var statearr_8338 = state_8322;
(statearr_8338[(10)] = inst_8194__$1);

return statearr_8338;
})();
if(cljs.core.truth_(inst_8195)){
var statearr_8339_8419 = state_8322__$1;
(statearr_8339_8419[(1)] = (5));

} else {
var statearr_8340_8420 = state_8322__$1;
(statearr_8340_8420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (15))){
var inst_8203 = (state_8322[(13)]);
var inst_8206 = (state_8322[(14)]);
var inst_8204 = (state_8322[(15)]);
var inst_8205 = (state_8322[(17)]);
var inst_8219 = (state_8322[(2)]);
var inst_8220 = (inst_8206 + (1));
var tmp8334 = inst_8203;
var tmp8335 = inst_8204;
var tmp8336 = inst_8205;
var inst_8203__$1 = tmp8334;
var inst_8204__$1 = tmp8335;
var inst_8205__$1 = tmp8336;
var inst_8206__$1 = inst_8220;
var state_8322__$1 = (function (){var statearr_8341 = state_8322;
(statearr_8341[(18)] = inst_8219);

(statearr_8341[(13)] = inst_8203__$1);

(statearr_8341[(14)] = inst_8206__$1);

(statearr_8341[(15)] = inst_8204__$1);

(statearr_8341[(17)] = inst_8205__$1);

return statearr_8341;
})();
var statearr_8342_8421 = state_8322__$1;
(statearr_8342_8421[(2)] = null);

(statearr_8342_8421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (21))){
var inst_8244 = (state_8322[(2)]);
var state_8322__$1 = state_8322;
var statearr_8346_8422 = state_8322__$1;
(statearr_8346_8422[(2)] = inst_8244);

(statearr_8346_8422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (31))){
var inst_8270 = (state_8322[(9)]);
var inst_8274 = done.call(null,null);
var inst_8275 = cljs.core.async.untap_STAR_.call(null,m,inst_8270);
var state_8322__$1 = (function (){var statearr_8347 = state_8322;
(statearr_8347[(19)] = inst_8274);

return statearr_8347;
})();
var statearr_8348_8423 = state_8322__$1;
(statearr_8348_8423[(2)] = inst_8275);

(statearr_8348_8423[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (32))){
var inst_8262 = (state_8322[(20)]);
var inst_8265 = (state_8322[(11)]);
var inst_8263 = (state_8322[(12)]);
var inst_8264 = (state_8322[(21)]);
var inst_8277 = (state_8322[(2)]);
var inst_8278 = (inst_8265 + (1));
var tmp8343 = inst_8262;
var tmp8344 = inst_8263;
var tmp8345 = inst_8264;
var inst_8262__$1 = tmp8343;
var inst_8263__$1 = tmp8344;
var inst_8264__$1 = tmp8345;
var inst_8265__$1 = inst_8278;
var state_8322__$1 = (function (){var statearr_8349 = state_8322;
(statearr_8349[(22)] = inst_8277);

(statearr_8349[(20)] = inst_8262__$1);

(statearr_8349[(11)] = inst_8265__$1);

(statearr_8349[(12)] = inst_8263__$1);

(statearr_8349[(21)] = inst_8264__$1);

return statearr_8349;
})();
var statearr_8350_8424 = state_8322__$1;
(statearr_8350_8424[(2)] = null);

(statearr_8350_8424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (40))){
var inst_8290 = (state_8322[(23)]);
var inst_8294 = done.call(null,null);
var inst_8295 = cljs.core.async.untap_STAR_.call(null,m,inst_8290);
var state_8322__$1 = (function (){var statearr_8351 = state_8322;
(statearr_8351[(24)] = inst_8294);

return statearr_8351;
})();
var statearr_8352_8425 = state_8322__$1;
(statearr_8352_8425[(2)] = inst_8295);

(statearr_8352_8425[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (33))){
var inst_8281 = (state_8322[(25)]);
var inst_8283 = cljs.core.chunked_seq_QMARK_.call(null,inst_8281);
var state_8322__$1 = state_8322;
if(inst_8283){
var statearr_8353_8426 = state_8322__$1;
(statearr_8353_8426[(1)] = (36));

} else {
var statearr_8354_8427 = state_8322__$1;
(statearr_8354_8427[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (13))){
var inst_8213 = (state_8322[(26)]);
var inst_8216 = cljs.core.async.close_BANG_.call(null,inst_8213);
var state_8322__$1 = state_8322;
var statearr_8355_8428 = state_8322__$1;
(statearr_8355_8428[(2)] = inst_8216);

(statearr_8355_8428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (22))){
var inst_8234 = (state_8322[(8)]);
var inst_8237 = cljs.core.async.close_BANG_.call(null,inst_8234);
var state_8322__$1 = state_8322;
var statearr_8356_8429 = state_8322__$1;
(statearr_8356_8429[(2)] = inst_8237);

(statearr_8356_8429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (36))){
var inst_8281 = (state_8322[(25)]);
var inst_8285 = cljs.core.chunk_first.call(null,inst_8281);
var inst_8286 = cljs.core.chunk_rest.call(null,inst_8281);
var inst_8287 = cljs.core.count.call(null,inst_8285);
var inst_8262 = inst_8286;
var inst_8263 = inst_8285;
var inst_8264 = inst_8287;
var inst_8265 = (0);
var state_8322__$1 = (function (){var statearr_8357 = state_8322;
(statearr_8357[(20)] = inst_8262);

(statearr_8357[(11)] = inst_8265);

(statearr_8357[(12)] = inst_8263);

(statearr_8357[(21)] = inst_8264);

return statearr_8357;
})();
var statearr_8358_8430 = state_8322__$1;
(statearr_8358_8430[(2)] = null);

(statearr_8358_8430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (41))){
var inst_8281 = (state_8322[(25)]);
var inst_8297 = (state_8322[(2)]);
var inst_8298 = cljs.core.next.call(null,inst_8281);
var inst_8262 = inst_8298;
var inst_8263 = null;
var inst_8264 = (0);
var inst_8265 = (0);
var state_8322__$1 = (function (){var statearr_8359 = state_8322;
(statearr_8359[(20)] = inst_8262);

(statearr_8359[(11)] = inst_8265);

(statearr_8359[(12)] = inst_8263);

(statearr_8359[(27)] = inst_8297);

(statearr_8359[(21)] = inst_8264);

return statearr_8359;
})();
var statearr_8360_8431 = state_8322__$1;
(statearr_8360_8431[(2)] = null);

(statearr_8360_8431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (43))){
var state_8322__$1 = state_8322;
var statearr_8361_8432 = state_8322__$1;
(statearr_8361_8432[(2)] = null);

(statearr_8361_8432[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (29))){
var inst_8306 = (state_8322[(2)]);
var state_8322__$1 = state_8322;
var statearr_8362_8433 = state_8322__$1;
(statearr_8362_8433[(2)] = inst_8306);

(statearr_8362_8433[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (44))){
var inst_8315 = (state_8322[(2)]);
var state_8322__$1 = (function (){var statearr_8363 = state_8322;
(statearr_8363[(28)] = inst_8315);

return statearr_8363;
})();
var statearr_8364_8434 = state_8322__$1;
(statearr_8364_8434[(2)] = null);

(statearr_8364_8434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (6))){
var inst_8254 = (state_8322[(29)]);
var inst_8253 = cljs.core.deref.call(null,cs);
var inst_8254__$1 = cljs.core.keys.call(null,inst_8253);
var inst_8255 = cljs.core.count.call(null,inst_8254__$1);
var inst_8256 = cljs.core.reset_BANG_.call(null,dctr,inst_8255);
var inst_8261 = cljs.core.seq.call(null,inst_8254__$1);
var inst_8262 = inst_8261;
var inst_8263 = null;
var inst_8264 = (0);
var inst_8265 = (0);
var state_8322__$1 = (function (){var statearr_8365 = state_8322;
(statearr_8365[(30)] = inst_8256);

(statearr_8365[(20)] = inst_8262);

(statearr_8365[(29)] = inst_8254__$1);

(statearr_8365[(11)] = inst_8265);

(statearr_8365[(12)] = inst_8263);

(statearr_8365[(21)] = inst_8264);

return statearr_8365;
})();
var statearr_8366_8435 = state_8322__$1;
(statearr_8366_8435[(2)] = null);

(statearr_8366_8435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (28))){
var inst_8262 = (state_8322[(20)]);
var inst_8281 = (state_8322[(25)]);
var inst_8281__$1 = cljs.core.seq.call(null,inst_8262);
var state_8322__$1 = (function (){var statearr_8367 = state_8322;
(statearr_8367[(25)] = inst_8281__$1);

return statearr_8367;
})();
if(inst_8281__$1){
var statearr_8368_8436 = state_8322__$1;
(statearr_8368_8436[(1)] = (33));

} else {
var statearr_8369_8437 = state_8322__$1;
(statearr_8369_8437[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (25))){
var inst_8265 = (state_8322[(11)]);
var inst_8264 = (state_8322[(21)]);
var inst_8267 = (inst_8265 < inst_8264);
var inst_8268 = inst_8267;
var state_8322__$1 = state_8322;
if(cljs.core.truth_(inst_8268)){
var statearr_8370_8438 = state_8322__$1;
(statearr_8370_8438[(1)] = (27));

} else {
var statearr_8371_8439 = state_8322__$1;
(statearr_8371_8439[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (34))){
var state_8322__$1 = state_8322;
var statearr_8372_8440 = state_8322__$1;
(statearr_8372_8440[(2)] = null);

(statearr_8372_8440[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (17))){
var state_8322__$1 = state_8322;
var statearr_8373_8441 = state_8322__$1;
(statearr_8373_8441[(2)] = null);

(statearr_8373_8441[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (3))){
var inst_8320 = (state_8322[(2)]);
var state_8322__$1 = state_8322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8322__$1,inst_8320);
} else {
if((state_val_8323 === (12))){
var inst_8249 = (state_8322[(2)]);
var state_8322__$1 = state_8322;
var statearr_8374_8442 = state_8322__$1;
(statearr_8374_8442[(2)] = inst_8249);

(statearr_8374_8442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (2))){
var state_8322__$1 = state_8322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8322__$1,(4),ch);
} else {
if((state_val_8323 === (23))){
var state_8322__$1 = state_8322;
var statearr_8375_8443 = state_8322__$1;
(statearr_8375_8443[(2)] = null);

(statearr_8375_8443[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (35))){
var inst_8304 = (state_8322[(2)]);
var state_8322__$1 = state_8322;
var statearr_8376_8444 = state_8322__$1;
(statearr_8376_8444[(2)] = inst_8304);

(statearr_8376_8444[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (19))){
var inst_8223 = (state_8322[(7)]);
var inst_8227 = cljs.core.chunk_first.call(null,inst_8223);
var inst_8228 = cljs.core.chunk_rest.call(null,inst_8223);
var inst_8229 = cljs.core.count.call(null,inst_8227);
var inst_8203 = inst_8228;
var inst_8204 = inst_8227;
var inst_8205 = inst_8229;
var inst_8206 = (0);
var state_8322__$1 = (function (){var statearr_8377 = state_8322;
(statearr_8377[(13)] = inst_8203);

(statearr_8377[(14)] = inst_8206);

(statearr_8377[(15)] = inst_8204);

(statearr_8377[(17)] = inst_8205);

return statearr_8377;
})();
var statearr_8378_8445 = state_8322__$1;
(statearr_8378_8445[(2)] = null);

(statearr_8378_8445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (11))){
var inst_8223 = (state_8322[(7)]);
var inst_8203 = (state_8322[(13)]);
var inst_8223__$1 = cljs.core.seq.call(null,inst_8203);
var state_8322__$1 = (function (){var statearr_8379 = state_8322;
(statearr_8379[(7)] = inst_8223__$1);

return statearr_8379;
})();
if(inst_8223__$1){
var statearr_8380_8446 = state_8322__$1;
(statearr_8380_8446[(1)] = (16));

} else {
var statearr_8381_8447 = state_8322__$1;
(statearr_8381_8447[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (9))){
var inst_8251 = (state_8322[(2)]);
var state_8322__$1 = state_8322;
var statearr_8382_8448 = state_8322__$1;
(statearr_8382_8448[(2)] = inst_8251);

(statearr_8382_8448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (5))){
var inst_8201 = cljs.core.deref.call(null,cs);
var inst_8202 = cljs.core.seq.call(null,inst_8201);
var inst_8203 = inst_8202;
var inst_8204 = null;
var inst_8205 = (0);
var inst_8206 = (0);
var state_8322__$1 = (function (){var statearr_8383 = state_8322;
(statearr_8383[(13)] = inst_8203);

(statearr_8383[(14)] = inst_8206);

(statearr_8383[(15)] = inst_8204);

(statearr_8383[(17)] = inst_8205);

return statearr_8383;
})();
var statearr_8384_8449 = state_8322__$1;
(statearr_8384_8449[(2)] = null);

(statearr_8384_8449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (14))){
var state_8322__$1 = state_8322;
var statearr_8385_8450 = state_8322__$1;
(statearr_8385_8450[(2)] = null);

(statearr_8385_8450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (45))){
var inst_8312 = (state_8322[(2)]);
var state_8322__$1 = state_8322;
var statearr_8386_8451 = state_8322__$1;
(statearr_8386_8451[(2)] = inst_8312);

(statearr_8386_8451[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (26))){
var inst_8254 = (state_8322[(29)]);
var inst_8308 = (state_8322[(2)]);
var inst_8309 = cljs.core.seq.call(null,inst_8254);
var state_8322__$1 = (function (){var statearr_8387 = state_8322;
(statearr_8387[(31)] = inst_8308);

return statearr_8387;
})();
if(inst_8309){
var statearr_8388_8452 = state_8322__$1;
(statearr_8388_8452[(1)] = (42));

} else {
var statearr_8389_8453 = state_8322__$1;
(statearr_8389_8453[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (16))){
var inst_8223 = (state_8322[(7)]);
var inst_8225 = cljs.core.chunked_seq_QMARK_.call(null,inst_8223);
var state_8322__$1 = state_8322;
if(inst_8225){
var statearr_8390_8454 = state_8322__$1;
(statearr_8390_8454[(1)] = (19));

} else {
var statearr_8391_8455 = state_8322__$1;
(statearr_8391_8455[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (38))){
var inst_8301 = (state_8322[(2)]);
var state_8322__$1 = state_8322;
var statearr_8392_8456 = state_8322__$1;
(statearr_8392_8456[(2)] = inst_8301);

(statearr_8392_8456[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (30))){
var state_8322__$1 = state_8322;
var statearr_8393_8457 = state_8322__$1;
(statearr_8393_8457[(2)] = null);

(statearr_8393_8457[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (10))){
var inst_8206 = (state_8322[(14)]);
var inst_8204 = (state_8322[(15)]);
var inst_8212 = cljs.core._nth.call(null,inst_8204,inst_8206);
var inst_8213 = cljs.core.nth.call(null,inst_8212,(0),null);
var inst_8214 = cljs.core.nth.call(null,inst_8212,(1),null);
var state_8322__$1 = (function (){var statearr_8394 = state_8322;
(statearr_8394[(26)] = inst_8213);

return statearr_8394;
})();
if(cljs.core.truth_(inst_8214)){
var statearr_8395_8458 = state_8322__$1;
(statearr_8395_8458[(1)] = (13));

} else {
var statearr_8396_8459 = state_8322__$1;
(statearr_8396_8459[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (18))){
var inst_8247 = (state_8322[(2)]);
var state_8322__$1 = state_8322;
var statearr_8397_8460 = state_8322__$1;
(statearr_8397_8460[(2)] = inst_8247);

(statearr_8397_8460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (42))){
var state_8322__$1 = state_8322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8322__$1,(45),dchan);
} else {
if((state_val_8323 === (37))){
var inst_8290 = (state_8322[(23)]);
var inst_8281 = (state_8322[(25)]);
var inst_8194 = (state_8322[(10)]);
var inst_8290__$1 = cljs.core.first.call(null,inst_8281);
var inst_8291 = cljs.core.async.put_BANG_.call(null,inst_8290__$1,inst_8194,done);
var state_8322__$1 = (function (){var statearr_8398 = state_8322;
(statearr_8398[(23)] = inst_8290__$1);

return statearr_8398;
})();
if(cljs.core.truth_(inst_8291)){
var statearr_8399_8461 = state_8322__$1;
(statearr_8399_8461[(1)] = (39));

} else {
var statearr_8400_8462 = state_8322__$1;
(statearr_8400_8462[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8323 === (8))){
var inst_8206 = (state_8322[(14)]);
var inst_8205 = (state_8322[(17)]);
var inst_8208 = (inst_8206 < inst_8205);
var inst_8209 = inst_8208;
var state_8322__$1 = state_8322;
if(cljs.core.truth_(inst_8209)){
var statearr_8401_8463 = state_8322__$1;
(statearr_8401_8463[(1)] = (10));

} else {
var statearr_8402_8464 = state_8322__$1;
(statearr_8402_8464[(1)] = (11));

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
});})(c__7140__auto___8410,cs,m,dchan,dctr,done))
;
return ((function (switch__7028__auto__,c__7140__auto___8410,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7029__auto__ = null;
var cljs$core$async$mult_$_state_machine__7029__auto____0 = (function (){
var statearr_8406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8406[(0)] = cljs$core$async$mult_$_state_machine__7029__auto__);

(statearr_8406[(1)] = (1));

return statearr_8406;
});
var cljs$core$async$mult_$_state_machine__7029__auto____1 = (function (state_8322){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_8322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e8407){if((e8407 instanceof Object)){
var ex__7032__auto__ = e8407;
var statearr_8408_8465 = state_8322;
(statearr_8408_8465[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8466 = state_8322;
state_8322 = G__8466;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7029__auto__ = function(state_8322){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7029__auto____1.call(this,state_8322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7029__auto____0;
cljs$core$async$mult_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7029__auto____1;
return cljs$core$async$mult_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___8410,cs,m,dchan,dctr,done))
})();
var state__7142__auto__ = (function (){var statearr_8409 = f__7141__auto__.call(null);
(statearr_8409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___8410);

return statearr_8409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___8410,cs,m,dchan,dctr,done))
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
var args8467 = [];
var len__5726__auto___8470 = arguments.length;
var i__5727__auto___8471 = (0);
while(true){
if((i__5727__auto___8471 < len__5726__auto___8470)){
args8467.push((arguments[i__5727__auto___8471]));

var G__8472 = (i__5727__auto___8471 + (1));
i__5727__auto___8471 = G__8472;
continue;
} else {
}
break;
}

var G__8469 = args8467.length;
switch (G__8469) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8467.length)].join('')));

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
var len__5726__auto___8484 = arguments.length;
var i__5727__auto___8485 = (0);
while(true){
if((i__5727__auto___8485 < len__5726__auto___8484)){
args__5733__auto__.push((arguments[i__5727__auto___8485]));

var G__8486 = (i__5727__auto___8485 + (1));
i__5727__auto___8485 = G__8486;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8478){
var map__8479 = p__8478;
var map__8479__$1 = ((((!((map__8479 == null)))?((((map__8479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8479):map__8479);
var opts = map__8479__$1;
var statearr_8481_8487 = state;
(statearr_8481_8487[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__8479,map__8479__$1,opts){
return (function (val){
var statearr_8482_8488 = state;
(statearr_8482_8488[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8479,map__8479__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_8483_8489 = state;
(statearr_8483_8489[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8474){
var G__8475 = cljs.core.first.call(null,seq8474);
var seq8474__$1 = cljs.core.next.call(null,seq8474);
var G__8476 = cljs.core.first.call(null,seq8474__$1);
var seq8474__$2 = cljs.core.next.call(null,seq8474__$1);
var G__8477 = cljs.core.first.call(null,seq8474__$2);
var seq8474__$3 = cljs.core.next.call(null,seq8474__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8475,G__8476,G__8477,seq8474__$3);
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
if(typeof cljs.core.async.t_cljs$core$async8653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8653 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta8654){
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
this.meta8654 = meta8654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8655,meta8654__$1){
var self__ = this;
var _8655__$1 = this;
return (new cljs.core.async.t_cljs$core$async8653(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta8654__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8655){
var self__ = this;
var _8655__$1 = this;
return self__.meta8654;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async8653.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta8654","meta8654",-95031072,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8653";

cljs.core.async.t_cljs$core$async8653.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8653");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async8653 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8653(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8654){
return (new cljs.core.async.t_cljs$core$async8653(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8654));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8653(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7140__auto___8816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___8816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___8816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8753){
var state_val_8754 = (state_8753[(1)]);
if((state_val_8754 === (7))){
var inst_8671 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
var statearr_8755_8817 = state_8753__$1;
(statearr_8755_8817[(2)] = inst_8671);

(statearr_8755_8817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (20))){
var inst_8683 = (state_8753[(7)]);
var state_8753__$1 = state_8753;
var statearr_8756_8818 = state_8753__$1;
(statearr_8756_8818[(2)] = inst_8683);

(statearr_8756_8818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (27))){
var state_8753__$1 = state_8753;
var statearr_8757_8819 = state_8753__$1;
(statearr_8757_8819[(2)] = null);

(statearr_8757_8819[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (1))){
var inst_8659 = (state_8753[(8)]);
var inst_8659__$1 = calc_state.call(null);
var inst_8661 = (inst_8659__$1 == null);
var inst_8662 = cljs.core.not.call(null,inst_8661);
var state_8753__$1 = (function (){var statearr_8758 = state_8753;
(statearr_8758[(8)] = inst_8659__$1);

return statearr_8758;
})();
if(inst_8662){
var statearr_8759_8820 = state_8753__$1;
(statearr_8759_8820[(1)] = (2));

} else {
var statearr_8760_8821 = state_8753__$1;
(statearr_8760_8821[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (24))){
var inst_8727 = (state_8753[(9)]);
var inst_8706 = (state_8753[(10)]);
var inst_8713 = (state_8753[(11)]);
var inst_8727__$1 = inst_8706.call(null,inst_8713);
var state_8753__$1 = (function (){var statearr_8761 = state_8753;
(statearr_8761[(9)] = inst_8727__$1);

return statearr_8761;
})();
if(cljs.core.truth_(inst_8727__$1)){
var statearr_8762_8822 = state_8753__$1;
(statearr_8762_8822[(1)] = (29));

} else {
var statearr_8763_8823 = state_8753__$1;
(statearr_8763_8823[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (4))){
var inst_8674 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
if(cljs.core.truth_(inst_8674)){
var statearr_8764_8824 = state_8753__$1;
(statearr_8764_8824[(1)] = (8));

} else {
var statearr_8765_8825 = state_8753__$1;
(statearr_8765_8825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (15))){
var inst_8700 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
if(cljs.core.truth_(inst_8700)){
var statearr_8766_8826 = state_8753__$1;
(statearr_8766_8826[(1)] = (19));

} else {
var statearr_8767_8827 = state_8753__$1;
(statearr_8767_8827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (21))){
var inst_8705 = (state_8753[(12)]);
var inst_8705__$1 = (state_8753[(2)]);
var inst_8706 = cljs.core.get.call(null,inst_8705__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8707 = cljs.core.get.call(null,inst_8705__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8708 = cljs.core.get.call(null,inst_8705__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_8753__$1 = (function (){var statearr_8768 = state_8753;
(statearr_8768[(12)] = inst_8705__$1);

(statearr_8768[(10)] = inst_8706);

(statearr_8768[(13)] = inst_8707);

return statearr_8768;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8753__$1,(22),inst_8708);
} else {
if((state_val_8754 === (31))){
var inst_8735 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
if(cljs.core.truth_(inst_8735)){
var statearr_8769_8828 = state_8753__$1;
(statearr_8769_8828[(1)] = (32));

} else {
var statearr_8770_8829 = state_8753__$1;
(statearr_8770_8829[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (32))){
var inst_8712 = (state_8753[(14)]);
var state_8753__$1 = state_8753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8753__$1,(35),out,inst_8712);
} else {
if((state_val_8754 === (33))){
var inst_8705 = (state_8753[(12)]);
var inst_8683 = inst_8705;
var state_8753__$1 = (function (){var statearr_8771 = state_8753;
(statearr_8771[(7)] = inst_8683);

return statearr_8771;
})();
var statearr_8772_8830 = state_8753__$1;
(statearr_8772_8830[(2)] = null);

(statearr_8772_8830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (13))){
var inst_8683 = (state_8753[(7)]);
var inst_8690 = inst_8683.cljs$lang$protocol_mask$partition0$;
var inst_8691 = (inst_8690 & (64));
var inst_8692 = inst_8683.cljs$core$ISeq$;
var inst_8693 = (inst_8691) || (inst_8692);
var state_8753__$1 = state_8753;
if(cljs.core.truth_(inst_8693)){
var statearr_8773_8831 = state_8753__$1;
(statearr_8773_8831[(1)] = (16));

} else {
var statearr_8774_8832 = state_8753__$1;
(statearr_8774_8832[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (22))){
var inst_8713 = (state_8753[(11)]);
var inst_8712 = (state_8753[(14)]);
var inst_8711 = (state_8753[(2)]);
var inst_8712__$1 = cljs.core.nth.call(null,inst_8711,(0),null);
var inst_8713__$1 = cljs.core.nth.call(null,inst_8711,(1),null);
var inst_8714 = (inst_8712__$1 == null);
var inst_8715 = cljs.core._EQ_.call(null,inst_8713__$1,change);
var inst_8716 = (inst_8714) || (inst_8715);
var state_8753__$1 = (function (){var statearr_8775 = state_8753;
(statearr_8775[(11)] = inst_8713__$1);

(statearr_8775[(14)] = inst_8712__$1);

return statearr_8775;
})();
if(cljs.core.truth_(inst_8716)){
var statearr_8776_8833 = state_8753__$1;
(statearr_8776_8833[(1)] = (23));

} else {
var statearr_8777_8834 = state_8753__$1;
(statearr_8777_8834[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (36))){
var inst_8705 = (state_8753[(12)]);
var inst_8683 = inst_8705;
var state_8753__$1 = (function (){var statearr_8778 = state_8753;
(statearr_8778[(7)] = inst_8683);

return statearr_8778;
})();
var statearr_8779_8835 = state_8753__$1;
(statearr_8779_8835[(2)] = null);

(statearr_8779_8835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (29))){
var inst_8727 = (state_8753[(9)]);
var state_8753__$1 = state_8753;
var statearr_8780_8836 = state_8753__$1;
(statearr_8780_8836[(2)] = inst_8727);

(statearr_8780_8836[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (6))){
var state_8753__$1 = state_8753;
var statearr_8781_8837 = state_8753__$1;
(statearr_8781_8837[(2)] = false);

(statearr_8781_8837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (28))){
var inst_8723 = (state_8753[(2)]);
var inst_8724 = calc_state.call(null);
var inst_8683 = inst_8724;
var state_8753__$1 = (function (){var statearr_8782 = state_8753;
(statearr_8782[(7)] = inst_8683);

(statearr_8782[(15)] = inst_8723);

return statearr_8782;
})();
var statearr_8783_8838 = state_8753__$1;
(statearr_8783_8838[(2)] = null);

(statearr_8783_8838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (25))){
var inst_8749 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
var statearr_8784_8839 = state_8753__$1;
(statearr_8784_8839[(2)] = inst_8749);

(statearr_8784_8839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (34))){
var inst_8747 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
var statearr_8785_8840 = state_8753__$1;
(statearr_8785_8840[(2)] = inst_8747);

(statearr_8785_8840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (17))){
var state_8753__$1 = state_8753;
var statearr_8786_8841 = state_8753__$1;
(statearr_8786_8841[(2)] = false);

(statearr_8786_8841[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (3))){
var state_8753__$1 = state_8753;
var statearr_8787_8842 = state_8753__$1;
(statearr_8787_8842[(2)] = false);

(statearr_8787_8842[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (12))){
var inst_8751 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8753__$1,inst_8751);
} else {
if((state_val_8754 === (2))){
var inst_8659 = (state_8753[(8)]);
var inst_8664 = inst_8659.cljs$lang$protocol_mask$partition0$;
var inst_8665 = (inst_8664 & (64));
var inst_8666 = inst_8659.cljs$core$ISeq$;
var inst_8667 = (inst_8665) || (inst_8666);
var state_8753__$1 = state_8753;
if(cljs.core.truth_(inst_8667)){
var statearr_8788_8843 = state_8753__$1;
(statearr_8788_8843[(1)] = (5));

} else {
var statearr_8789_8844 = state_8753__$1;
(statearr_8789_8844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (23))){
var inst_8712 = (state_8753[(14)]);
var inst_8718 = (inst_8712 == null);
var state_8753__$1 = state_8753;
if(cljs.core.truth_(inst_8718)){
var statearr_8790_8845 = state_8753__$1;
(statearr_8790_8845[(1)] = (26));

} else {
var statearr_8791_8846 = state_8753__$1;
(statearr_8791_8846[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (35))){
var inst_8738 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
if(cljs.core.truth_(inst_8738)){
var statearr_8792_8847 = state_8753__$1;
(statearr_8792_8847[(1)] = (36));

} else {
var statearr_8793_8848 = state_8753__$1;
(statearr_8793_8848[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (19))){
var inst_8683 = (state_8753[(7)]);
var inst_8702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8683);
var state_8753__$1 = state_8753;
var statearr_8794_8849 = state_8753__$1;
(statearr_8794_8849[(2)] = inst_8702);

(statearr_8794_8849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (11))){
var inst_8683 = (state_8753[(7)]);
var inst_8687 = (inst_8683 == null);
var inst_8688 = cljs.core.not.call(null,inst_8687);
var state_8753__$1 = state_8753;
if(inst_8688){
var statearr_8795_8850 = state_8753__$1;
(statearr_8795_8850[(1)] = (13));

} else {
var statearr_8796_8851 = state_8753__$1;
(statearr_8796_8851[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (9))){
var inst_8659 = (state_8753[(8)]);
var state_8753__$1 = state_8753;
var statearr_8797_8852 = state_8753__$1;
(statearr_8797_8852[(2)] = inst_8659);

(statearr_8797_8852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (5))){
var state_8753__$1 = state_8753;
var statearr_8798_8853 = state_8753__$1;
(statearr_8798_8853[(2)] = true);

(statearr_8798_8853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (14))){
var state_8753__$1 = state_8753;
var statearr_8799_8854 = state_8753__$1;
(statearr_8799_8854[(2)] = false);

(statearr_8799_8854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (26))){
var inst_8713 = (state_8753[(11)]);
var inst_8720 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_8713);
var state_8753__$1 = state_8753;
var statearr_8800_8855 = state_8753__$1;
(statearr_8800_8855[(2)] = inst_8720);

(statearr_8800_8855[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (16))){
var state_8753__$1 = state_8753;
var statearr_8801_8856 = state_8753__$1;
(statearr_8801_8856[(2)] = true);

(statearr_8801_8856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (38))){
var inst_8743 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
var statearr_8802_8857 = state_8753__$1;
(statearr_8802_8857[(2)] = inst_8743);

(statearr_8802_8857[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (30))){
var inst_8706 = (state_8753[(10)]);
var inst_8707 = (state_8753[(13)]);
var inst_8713 = (state_8753[(11)]);
var inst_8730 = cljs.core.empty_QMARK_.call(null,inst_8706);
var inst_8731 = inst_8707.call(null,inst_8713);
var inst_8732 = cljs.core.not.call(null,inst_8731);
var inst_8733 = (inst_8730) && (inst_8732);
var state_8753__$1 = state_8753;
var statearr_8803_8858 = state_8753__$1;
(statearr_8803_8858[(2)] = inst_8733);

(statearr_8803_8858[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (10))){
var inst_8659 = (state_8753[(8)]);
var inst_8679 = (state_8753[(2)]);
var inst_8680 = cljs.core.get.call(null,inst_8679,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8681 = cljs.core.get.call(null,inst_8679,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8682 = cljs.core.get.call(null,inst_8679,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_8683 = inst_8659;
var state_8753__$1 = (function (){var statearr_8804 = state_8753;
(statearr_8804[(16)] = inst_8680);

(statearr_8804[(17)] = inst_8681);

(statearr_8804[(7)] = inst_8683);

(statearr_8804[(18)] = inst_8682);

return statearr_8804;
})();
var statearr_8805_8859 = state_8753__$1;
(statearr_8805_8859[(2)] = null);

(statearr_8805_8859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (18))){
var inst_8697 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
var statearr_8806_8860 = state_8753__$1;
(statearr_8806_8860[(2)] = inst_8697);

(statearr_8806_8860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (37))){
var state_8753__$1 = state_8753;
var statearr_8807_8861 = state_8753__$1;
(statearr_8807_8861[(2)] = null);

(statearr_8807_8861[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8754 === (8))){
var inst_8659 = (state_8753[(8)]);
var inst_8676 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8659);
var state_8753__$1 = state_8753;
var statearr_8808_8862 = state_8753__$1;
(statearr_8808_8862[(2)] = inst_8676);

(statearr_8808_8862[(1)] = (10));


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
});})(c__7140__auto___8816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7028__auto__,c__7140__auto___8816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7029__auto__ = null;
var cljs$core$async$mix_$_state_machine__7029__auto____0 = (function (){
var statearr_8812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8812[(0)] = cljs$core$async$mix_$_state_machine__7029__auto__);

(statearr_8812[(1)] = (1));

return statearr_8812;
});
var cljs$core$async$mix_$_state_machine__7029__auto____1 = (function (state_8753){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_8753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e8813){if((e8813 instanceof Object)){
var ex__7032__auto__ = e8813;
var statearr_8814_8863 = state_8753;
(statearr_8814_8863[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8864 = state_8753;
state_8753 = G__8864;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7029__auto__ = function(state_8753){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7029__auto____1.call(this,state_8753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7029__auto____0;
cljs$core$async$mix_$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7029__auto____1;
return cljs$core$async$mix_$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___8816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7142__auto__ = (function (){var statearr_8815 = f__7141__auto__.call(null);
(statearr_8815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___8816);

return statearr_8815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___8816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args8865 = [];
var len__5726__auto___8868 = arguments.length;
var i__5727__auto___8869 = (0);
while(true){
if((i__5727__auto___8869 < len__5726__auto___8868)){
args8865.push((arguments[i__5727__auto___8869]));

var G__8870 = (i__5727__auto___8869 + (1));
i__5727__auto___8869 = G__8870;
continue;
} else {
}
break;
}

var G__8867 = args8865.length;
switch (G__8867) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8865.length)].join('')));

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
var args8873 = [];
var len__5726__auto___8998 = arguments.length;
var i__5727__auto___8999 = (0);
while(true){
if((i__5727__auto___8999 < len__5726__auto___8998)){
args8873.push((arguments[i__5727__auto___8999]));

var G__9000 = (i__5727__auto___8999 + (1));
i__5727__auto___8999 = G__9000;
continue;
} else {
}
break;
}

var G__8875 = args8873.length;
switch (G__8875) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8873.length)].join('')));

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
return (function (p1__8872_SHARP_){
if(cljs.core.truth_(p1__8872_SHARP_.call(null,topic))){
return p1__8872_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__8872_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async8876 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8876 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8877){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8877 = meta8877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8878,meta8877__$1){
var self__ = this;
var _8878__$1 = this;
return (new cljs.core.async.t_cljs$core$async8876(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8877__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8878){
var self__ = this;
var _8878__$1 = this;
return self__.meta8877;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8876.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8876.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async8876.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8876.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async8876.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8876.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8876.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta8877","meta8877",-746212578,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8876.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8876";

cljs.core.async.t_cljs$core$async8876.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8876");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async8876 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8876(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8877){
return (new cljs.core.async.t_cljs$core$async8876(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8877));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8876(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7140__auto___9002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___9002,mults,ensure_mult,p){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___9002,mults,ensure_mult,p){
return (function (state_8950){
var state_val_8951 = (state_8950[(1)]);
if((state_val_8951 === (7))){
var inst_8946 = (state_8950[(2)]);
var state_8950__$1 = state_8950;
var statearr_8952_9003 = state_8950__$1;
(statearr_8952_9003[(2)] = inst_8946);

(statearr_8952_9003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (20))){
var state_8950__$1 = state_8950;
var statearr_8953_9004 = state_8950__$1;
(statearr_8953_9004[(2)] = null);

(statearr_8953_9004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (1))){
var state_8950__$1 = state_8950;
var statearr_8954_9005 = state_8950__$1;
(statearr_8954_9005[(2)] = null);

(statearr_8954_9005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (24))){
var inst_8929 = (state_8950[(7)]);
var inst_8938 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_8929);
var state_8950__$1 = state_8950;
var statearr_8955_9006 = state_8950__$1;
(statearr_8955_9006[(2)] = inst_8938);

(statearr_8955_9006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (4))){
var inst_8881 = (state_8950[(8)]);
var inst_8881__$1 = (state_8950[(2)]);
var inst_8882 = (inst_8881__$1 == null);
var state_8950__$1 = (function (){var statearr_8956 = state_8950;
(statearr_8956[(8)] = inst_8881__$1);

return statearr_8956;
})();
if(cljs.core.truth_(inst_8882)){
var statearr_8957_9007 = state_8950__$1;
(statearr_8957_9007[(1)] = (5));

} else {
var statearr_8958_9008 = state_8950__$1;
(statearr_8958_9008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (15))){
var inst_8923 = (state_8950[(2)]);
var state_8950__$1 = state_8950;
var statearr_8959_9009 = state_8950__$1;
(statearr_8959_9009[(2)] = inst_8923);

(statearr_8959_9009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (21))){
var inst_8943 = (state_8950[(2)]);
var state_8950__$1 = (function (){var statearr_8960 = state_8950;
(statearr_8960[(9)] = inst_8943);

return statearr_8960;
})();
var statearr_8961_9010 = state_8950__$1;
(statearr_8961_9010[(2)] = null);

(statearr_8961_9010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (13))){
var inst_8905 = (state_8950[(10)]);
var inst_8907 = cljs.core.chunked_seq_QMARK_.call(null,inst_8905);
var state_8950__$1 = state_8950;
if(inst_8907){
var statearr_8962_9011 = state_8950__$1;
(statearr_8962_9011[(1)] = (16));

} else {
var statearr_8963_9012 = state_8950__$1;
(statearr_8963_9012[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (22))){
var inst_8935 = (state_8950[(2)]);
var state_8950__$1 = state_8950;
if(cljs.core.truth_(inst_8935)){
var statearr_8964_9013 = state_8950__$1;
(statearr_8964_9013[(1)] = (23));

} else {
var statearr_8965_9014 = state_8950__$1;
(statearr_8965_9014[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (6))){
var inst_8881 = (state_8950[(8)]);
var inst_8929 = (state_8950[(7)]);
var inst_8931 = (state_8950[(11)]);
var inst_8929__$1 = topic_fn.call(null,inst_8881);
var inst_8930 = cljs.core.deref.call(null,mults);
var inst_8931__$1 = cljs.core.get.call(null,inst_8930,inst_8929__$1);
var state_8950__$1 = (function (){var statearr_8966 = state_8950;
(statearr_8966[(7)] = inst_8929__$1);

(statearr_8966[(11)] = inst_8931__$1);

return statearr_8966;
})();
if(cljs.core.truth_(inst_8931__$1)){
var statearr_8967_9015 = state_8950__$1;
(statearr_8967_9015[(1)] = (19));

} else {
var statearr_8968_9016 = state_8950__$1;
(statearr_8968_9016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (25))){
var inst_8940 = (state_8950[(2)]);
var state_8950__$1 = state_8950;
var statearr_8969_9017 = state_8950__$1;
(statearr_8969_9017[(2)] = inst_8940);

(statearr_8969_9017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (17))){
var inst_8905 = (state_8950[(10)]);
var inst_8914 = cljs.core.first.call(null,inst_8905);
var inst_8915 = cljs.core.async.muxch_STAR_.call(null,inst_8914);
var inst_8916 = cljs.core.async.close_BANG_.call(null,inst_8915);
var inst_8917 = cljs.core.next.call(null,inst_8905);
var inst_8891 = inst_8917;
var inst_8892 = null;
var inst_8893 = (0);
var inst_8894 = (0);
var state_8950__$1 = (function (){var statearr_8970 = state_8950;
(statearr_8970[(12)] = inst_8893);

(statearr_8970[(13)] = inst_8916);

(statearr_8970[(14)] = inst_8892);

(statearr_8970[(15)] = inst_8891);

(statearr_8970[(16)] = inst_8894);

return statearr_8970;
})();
var statearr_8971_9018 = state_8950__$1;
(statearr_8971_9018[(2)] = null);

(statearr_8971_9018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (3))){
var inst_8948 = (state_8950[(2)]);
var state_8950__$1 = state_8950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8950__$1,inst_8948);
} else {
if((state_val_8951 === (12))){
var inst_8925 = (state_8950[(2)]);
var state_8950__$1 = state_8950;
var statearr_8972_9019 = state_8950__$1;
(statearr_8972_9019[(2)] = inst_8925);

(statearr_8972_9019[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (2))){
var state_8950__$1 = state_8950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8950__$1,(4),ch);
} else {
if((state_val_8951 === (23))){
var state_8950__$1 = state_8950;
var statearr_8973_9020 = state_8950__$1;
(statearr_8973_9020[(2)] = null);

(statearr_8973_9020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (19))){
var inst_8881 = (state_8950[(8)]);
var inst_8931 = (state_8950[(11)]);
var inst_8933 = cljs.core.async.muxch_STAR_.call(null,inst_8931);
var state_8950__$1 = state_8950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8950__$1,(22),inst_8933,inst_8881);
} else {
if((state_val_8951 === (11))){
var inst_8891 = (state_8950[(15)]);
var inst_8905 = (state_8950[(10)]);
var inst_8905__$1 = cljs.core.seq.call(null,inst_8891);
var state_8950__$1 = (function (){var statearr_8974 = state_8950;
(statearr_8974[(10)] = inst_8905__$1);

return statearr_8974;
})();
if(inst_8905__$1){
var statearr_8975_9021 = state_8950__$1;
(statearr_8975_9021[(1)] = (13));

} else {
var statearr_8976_9022 = state_8950__$1;
(statearr_8976_9022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (9))){
var inst_8927 = (state_8950[(2)]);
var state_8950__$1 = state_8950;
var statearr_8977_9023 = state_8950__$1;
(statearr_8977_9023[(2)] = inst_8927);

(statearr_8977_9023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (5))){
var inst_8888 = cljs.core.deref.call(null,mults);
var inst_8889 = cljs.core.vals.call(null,inst_8888);
var inst_8890 = cljs.core.seq.call(null,inst_8889);
var inst_8891 = inst_8890;
var inst_8892 = null;
var inst_8893 = (0);
var inst_8894 = (0);
var state_8950__$1 = (function (){var statearr_8978 = state_8950;
(statearr_8978[(12)] = inst_8893);

(statearr_8978[(14)] = inst_8892);

(statearr_8978[(15)] = inst_8891);

(statearr_8978[(16)] = inst_8894);

return statearr_8978;
})();
var statearr_8979_9024 = state_8950__$1;
(statearr_8979_9024[(2)] = null);

(statearr_8979_9024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (14))){
var state_8950__$1 = state_8950;
var statearr_8983_9025 = state_8950__$1;
(statearr_8983_9025[(2)] = null);

(statearr_8983_9025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (16))){
var inst_8905 = (state_8950[(10)]);
var inst_8909 = cljs.core.chunk_first.call(null,inst_8905);
var inst_8910 = cljs.core.chunk_rest.call(null,inst_8905);
var inst_8911 = cljs.core.count.call(null,inst_8909);
var inst_8891 = inst_8910;
var inst_8892 = inst_8909;
var inst_8893 = inst_8911;
var inst_8894 = (0);
var state_8950__$1 = (function (){var statearr_8984 = state_8950;
(statearr_8984[(12)] = inst_8893);

(statearr_8984[(14)] = inst_8892);

(statearr_8984[(15)] = inst_8891);

(statearr_8984[(16)] = inst_8894);

return statearr_8984;
})();
var statearr_8985_9026 = state_8950__$1;
(statearr_8985_9026[(2)] = null);

(statearr_8985_9026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (10))){
var inst_8893 = (state_8950[(12)]);
var inst_8892 = (state_8950[(14)]);
var inst_8891 = (state_8950[(15)]);
var inst_8894 = (state_8950[(16)]);
var inst_8899 = cljs.core._nth.call(null,inst_8892,inst_8894);
var inst_8900 = cljs.core.async.muxch_STAR_.call(null,inst_8899);
var inst_8901 = cljs.core.async.close_BANG_.call(null,inst_8900);
var inst_8902 = (inst_8894 + (1));
var tmp8980 = inst_8893;
var tmp8981 = inst_8892;
var tmp8982 = inst_8891;
var inst_8891__$1 = tmp8982;
var inst_8892__$1 = tmp8981;
var inst_8893__$1 = tmp8980;
var inst_8894__$1 = inst_8902;
var state_8950__$1 = (function (){var statearr_8986 = state_8950;
(statearr_8986[(12)] = inst_8893__$1);

(statearr_8986[(14)] = inst_8892__$1);

(statearr_8986[(15)] = inst_8891__$1);

(statearr_8986[(17)] = inst_8901);

(statearr_8986[(16)] = inst_8894__$1);

return statearr_8986;
})();
var statearr_8987_9027 = state_8950__$1;
(statearr_8987_9027[(2)] = null);

(statearr_8987_9027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (18))){
var inst_8920 = (state_8950[(2)]);
var state_8950__$1 = state_8950;
var statearr_8988_9028 = state_8950__$1;
(statearr_8988_9028[(2)] = inst_8920);

(statearr_8988_9028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (8))){
var inst_8893 = (state_8950[(12)]);
var inst_8894 = (state_8950[(16)]);
var inst_8896 = (inst_8894 < inst_8893);
var inst_8897 = inst_8896;
var state_8950__$1 = state_8950;
if(cljs.core.truth_(inst_8897)){
var statearr_8989_9029 = state_8950__$1;
(statearr_8989_9029[(1)] = (10));

} else {
var statearr_8990_9030 = state_8950__$1;
(statearr_8990_9030[(1)] = (11));

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
});})(c__7140__auto___9002,mults,ensure_mult,p))
;
return ((function (switch__7028__auto__,c__7140__auto___9002,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_8994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8994[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_8994[(1)] = (1));

return statearr_8994;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_8950){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_8950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e8995){if((e8995 instanceof Object)){
var ex__7032__auto__ = e8995;
var statearr_8996_9031 = state_8950;
(statearr_8996_9031[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9032 = state_8950;
state_8950 = G__9032;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_8950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_8950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___9002,mults,ensure_mult,p))
})();
var state__7142__auto__ = (function (){var statearr_8997 = f__7141__auto__.call(null);
(statearr_8997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___9002);

return statearr_8997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___9002,mults,ensure_mult,p))
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
var args9033 = [];
var len__5726__auto___9036 = arguments.length;
var i__5727__auto___9037 = (0);
while(true){
if((i__5727__auto___9037 < len__5726__auto___9036)){
args9033.push((arguments[i__5727__auto___9037]));

var G__9038 = (i__5727__auto___9037 + (1));
i__5727__auto___9037 = G__9038;
continue;
} else {
}
break;
}

var G__9035 = args9033.length;
switch (G__9035) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9033.length)].join('')));

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
var args9040 = [];
var len__5726__auto___9043 = arguments.length;
var i__5727__auto___9044 = (0);
while(true){
if((i__5727__auto___9044 < len__5726__auto___9043)){
args9040.push((arguments[i__5727__auto___9044]));

var G__9045 = (i__5727__auto___9044 + (1));
i__5727__auto___9044 = G__9045;
continue;
} else {
}
break;
}

var G__9042 = args9040.length;
switch (G__9042) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9040.length)].join('')));

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
var args9047 = [];
var len__5726__auto___9118 = arguments.length;
var i__5727__auto___9119 = (0);
while(true){
if((i__5727__auto___9119 < len__5726__auto___9118)){
args9047.push((arguments[i__5727__auto___9119]));

var G__9120 = (i__5727__auto___9119 + (1));
i__5727__auto___9119 = G__9120;
continue;
} else {
}
break;
}

var G__9049 = args9047.length;
switch (G__9049) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9047.length)].join('')));

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
var c__7140__auto___9122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___9122,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___9122,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9088){
var state_val_9089 = (state_9088[(1)]);
if((state_val_9089 === (7))){
var state_9088__$1 = state_9088;
var statearr_9090_9123 = state_9088__$1;
(statearr_9090_9123[(2)] = null);

(statearr_9090_9123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9089 === (1))){
var state_9088__$1 = state_9088;
var statearr_9091_9124 = state_9088__$1;
(statearr_9091_9124[(2)] = null);

(statearr_9091_9124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9089 === (4))){
var inst_9052 = (state_9088[(7)]);
var inst_9054 = (inst_9052 < cnt);
var state_9088__$1 = state_9088;
if(cljs.core.truth_(inst_9054)){
var statearr_9092_9125 = state_9088__$1;
(statearr_9092_9125[(1)] = (6));

} else {
var statearr_9093_9126 = state_9088__$1;
(statearr_9093_9126[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9089 === (15))){
var inst_9084 = (state_9088[(2)]);
var state_9088__$1 = state_9088;
var statearr_9094_9127 = state_9088__$1;
(statearr_9094_9127[(2)] = inst_9084);

(statearr_9094_9127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9089 === (13))){
var inst_9077 = cljs.core.async.close_BANG_.call(null,out);
var state_9088__$1 = state_9088;
var statearr_9095_9128 = state_9088__$1;
(statearr_9095_9128[(2)] = inst_9077);

(statearr_9095_9128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9089 === (6))){
var state_9088__$1 = state_9088;
var statearr_9096_9129 = state_9088__$1;
(statearr_9096_9129[(2)] = null);

(statearr_9096_9129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9089 === (3))){
var inst_9086 = (state_9088[(2)]);
var state_9088__$1 = state_9088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9088__$1,inst_9086);
} else {
if((state_val_9089 === (12))){
var inst_9074 = (state_9088[(8)]);
var inst_9074__$1 = (state_9088[(2)]);
var inst_9075 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9074__$1);
var state_9088__$1 = (function (){var statearr_9097 = state_9088;
(statearr_9097[(8)] = inst_9074__$1);

return statearr_9097;
})();
if(cljs.core.truth_(inst_9075)){
var statearr_9098_9130 = state_9088__$1;
(statearr_9098_9130[(1)] = (13));

} else {
var statearr_9099_9131 = state_9088__$1;
(statearr_9099_9131[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9089 === (2))){
var inst_9051 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9052 = (0);
var state_9088__$1 = (function (){var statearr_9100 = state_9088;
(statearr_9100[(7)] = inst_9052);

(statearr_9100[(9)] = inst_9051);

return statearr_9100;
})();
var statearr_9101_9132 = state_9088__$1;
(statearr_9101_9132[(2)] = null);

(statearr_9101_9132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9089 === (11))){
var inst_9052 = (state_9088[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9088,(10),Object,null,(9));
var inst_9061 = chs__$1.call(null,inst_9052);
var inst_9062 = done.call(null,inst_9052);
var inst_9063 = cljs.core.async.take_BANG_.call(null,inst_9061,inst_9062);
var state_9088__$1 = state_9088;
var statearr_9102_9133 = state_9088__$1;
(statearr_9102_9133[(2)] = inst_9063);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9088__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9089 === (9))){
var inst_9052 = (state_9088[(7)]);
var inst_9065 = (state_9088[(2)]);
var inst_9066 = (inst_9052 + (1));
var inst_9052__$1 = inst_9066;
var state_9088__$1 = (function (){var statearr_9103 = state_9088;
(statearr_9103[(7)] = inst_9052__$1);

(statearr_9103[(10)] = inst_9065);

return statearr_9103;
})();
var statearr_9104_9134 = state_9088__$1;
(statearr_9104_9134[(2)] = null);

(statearr_9104_9134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9089 === (5))){
var inst_9072 = (state_9088[(2)]);
var state_9088__$1 = (function (){var statearr_9105 = state_9088;
(statearr_9105[(11)] = inst_9072);

return statearr_9105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9088__$1,(12),dchan);
} else {
if((state_val_9089 === (14))){
var inst_9074 = (state_9088[(8)]);
var inst_9079 = cljs.core.apply.call(null,f,inst_9074);
var state_9088__$1 = state_9088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9088__$1,(16),out,inst_9079);
} else {
if((state_val_9089 === (16))){
var inst_9081 = (state_9088[(2)]);
var state_9088__$1 = (function (){var statearr_9106 = state_9088;
(statearr_9106[(12)] = inst_9081);

return statearr_9106;
})();
var statearr_9107_9135 = state_9088__$1;
(statearr_9107_9135[(2)] = null);

(statearr_9107_9135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9089 === (10))){
var inst_9056 = (state_9088[(2)]);
var inst_9057 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9088__$1 = (function (){var statearr_9108 = state_9088;
(statearr_9108[(13)] = inst_9056);

return statearr_9108;
})();
var statearr_9109_9136 = state_9088__$1;
(statearr_9109_9136[(2)] = inst_9057);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9088__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9089 === (8))){
var inst_9070 = (state_9088[(2)]);
var state_9088__$1 = state_9088;
var statearr_9110_9137 = state_9088__$1;
(statearr_9110_9137[(2)] = inst_9070);

(statearr_9110_9137[(1)] = (5));


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
});})(c__7140__auto___9122,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7028__auto__,c__7140__auto___9122,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_9114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9114[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_9114[(1)] = (1));

return statearr_9114;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_9088){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_9088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e9115){if((e9115 instanceof Object)){
var ex__7032__auto__ = e9115;
var statearr_9116_9138 = state_9088;
(statearr_9116_9138[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9139 = state_9088;
state_9088 = G__9139;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_9088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_9088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___9122,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7142__auto__ = (function (){var statearr_9117 = f__7141__auto__.call(null);
(statearr_9117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___9122);

return statearr_9117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___9122,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args9141 = [];
var len__5726__auto___9197 = arguments.length;
var i__5727__auto___9198 = (0);
while(true){
if((i__5727__auto___9198 < len__5726__auto___9197)){
args9141.push((arguments[i__5727__auto___9198]));

var G__9199 = (i__5727__auto___9198 + (1));
i__5727__auto___9198 = G__9199;
continue;
} else {
}
break;
}

var G__9143 = args9141.length;
switch (G__9143) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9141.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7140__auto___9201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___9201,out){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___9201,out){
return (function (state_9173){
var state_val_9174 = (state_9173[(1)]);
if((state_val_9174 === (7))){
var inst_9153 = (state_9173[(7)]);
var inst_9152 = (state_9173[(8)]);
var inst_9152__$1 = (state_9173[(2)]);
var inst_9153__$1 = cljs.core.nth.call(null,inst_9152__$1,(0),null);
var inst_9154 = cljs.core.nth.call(null,inst_9152__$1,(1),null);
var inst_9155 = (inst_9153__$1 == null);
var state_9173__$1 = (function (){var statearr_9175 = state_9173;
(statearr_9175[(7)] = inst_9153__$1);

(statearr_9175[(9)] = inst_9154);

(statearr_9175[(8)] = inst_9152__$1);

return statearr_9175;
})();
if(cljs.core.truth_(inst_9155)){
var statearr_9176_9202 = state_9173__$1;
(statearr_9176_9202[(1)] = (8));

} else {
var statearr_9177_9203 = state_9173__$1;
(statearr_9177_9203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9174 === (1))){
var inst_9144 = cljs.core.vec.call(null,chs);
var inst_9145 = inst_9144;
var state_9173__$1 = (function (){var statearr_9178 = state_9173;
(statearr_9178[(10)] = inst_9145);

return statearr_9178;
})();
var statearr_9179_9204 = state_9173__$1;
(statearr_9179_9204[(2)] = null);

(statearr_9179_9204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9174 === (4))){
var inst_9145 = (state_9173[(10)]);
var state_9173__$1 = state_9173;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9173__$1,(7),inst_9145);
} else {
if((state_val_9174 === (6))){
var inst_9169 = (state_9173[(2)]);
var state_9173__$1 = state_9173;
var statearr_9180_9205 = state_9173__$1;
(statearr_9180_9205[(2)] = inst_9169);

(statearr_9180_9205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9174 === (3))){
var inst_9171 = (state_9173[(2)]);
var state_9173__$1 = state_9173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9173__$1,inst_9171);
} else {
if((state_val_9174 === (2))){
var inst_9145 = (state_9173[(10)]);
var inst_9147 = cljs.core.count.call(null,inst_9145);
var inst_9148 = (inst_9147 > (0));
var state_9173__$1 = state_9173;
if(cljs.core.truth_(inst_9148)){
var statearr_9182_9206 = state_9173__$1;
(statearr_9182_9206[(1)] = (4));

} else {
var statearr_9183_9207 = state_9173__$1;
(statearr_9183_9207[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9174 === (11))){
var inst_9145 = (state_9173[(10)]);
var inst_9162 = (state_9173[(2)]);
var tmp9181 = inst_9145;
var inst_9145__$1 = tmp9181;
var state_9173__$1 = (function (){var statearr_9184 = state_9173;
(statearr_9184[(10)] = inst_9145__$1);

(statearr_9184[(11)] = inst_9162);

return statearr_9184;
})();
var statearr_9185_9208 = state_9173__$1;
(statearr_9185_9208[(2)] = null);

(statearr_9185_9208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9174 === (9))){
var inst_9153 = (state_9173[(7)]);
var state_9173__$1 = state_9173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9173__$1,(11),out,inst_9153);
} else {
if((state_val_9174 === (5))){
var inst_9167 = cljs.core.async.close_BANG_.call(null,out);
var state_9173__$1 = state_9173;
var statearr_9186_9209 = state_9173__$1;
(statearr_9186_9209[(2)] = inst_9167);

(statearr_9186_9209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9174 === (10))){
var inst_9165 = (state_9173[(2)]);
var state_9173__$1 = state_9173;
var statearr_9187_9210 = state_9173__$1;
(statearr_9187_9210[(2)] = inst_9165);

(statearr_9187_9210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9174 === (8))){
var inst_9153 = (state_9173[(7)]);
var inst_9145 = (state_9173[(10)]);
var inst_9154 = (state_9173[(9)]);
var inst_9152 = (state_9173[(8)]);
var inst_9157 = (function (){var cs = inst_9145;
var vec__9150 = inst_9152;
var v = inst_9153;
var c = inst_9154;
return ((function (cs,vec__9150,v,c,inst_9153,inst_9145,inst_9154,inst_9152,state_val_9174,c__7140__auto___9201,out){
return (function (p1__9140_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9140_SHARP_);
});
;})(cs,vec__9150,v,c,inst_9153,inst_9145,inst_9154,inst_9152,state_val_9174,c__7140__auto___9201,out))
})();
var inst_9158 = cljs.core.filterv.call(null,inst_9157,inst_9145);
var inst_9145__$1 = inst_9158;
var state_9173__$1 = (function (){var statearr_9188 = state_9173;
(statearr_9188[(10)] = inst_9145__$1);

return statearr_9188;
})();
var statearr_9189_9211 = state_9173__$1;
(statearr_9189_9211[(2)] = null);

(statearr_9189_9211[(1)] = (2));


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
});})(c__7140__auto___9201,out))
;
return ((function (switch__7028__auto__,c__7140__auto___9201,out){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_9193 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9193[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_9193[(1)] = (1));

return statearr_9193;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_9173){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_9173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e9194){if((e9194 instanceof Object)){
var ex__7032__auto__ = e9194;
var statearr_9195_9212 = state_9173;
(statearr_9195_9212[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9213 = state_9173;
state_9173 = G__9213;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_9173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_9173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___9201,out))
})();
var state__7142__auto__ = (function (){var statearr_9196 = f__7141__auto__.call(null);
(statearr_9196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___9201);

return statearr_9196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___9201,out))
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
var args9214 = [];
var len__5726__auto___9263 = arguments.length;
var i__5727__auto___9264 = (0);
while(true){
if((i__5727__auto___9264 < len__5726__auto___9263)){
args9214.push((arguments[i__5727__auto___9264]));

var G__9265 = (i__5727__auto___9264 + (1));
i__5727__auto___9264 = G__9265;
continue;
} else {
}
break;
}

var G__9216 = args9214.length;
switch (G__9216) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9214.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7140__auto___9267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___9267,out){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___9267,out){
return (function (state_9240){
var state_val_9241 = (state_9240[(1)]);
if((state_val_9241 === (7))){
var inst_9222 = (state_9240[(7)]);
var inst_9222__$1 = (state_9240[(2)]);
var inst_9223 = (inst_9222__$1 == null);
var inst_9224 = cljs.core.not.call(null,inst_9223);
var state_9240__$1 = (function (){var statearr_9242 = state_9240;
(statearr_9242[(7)] = inst_9222__$1);

return statearr_9242;
})();
if(inst_9224){
var statearr_9243_9268 = state_9240__$1;
(statearr_9243_9268[(1)] = (8));

} else {
var statearr_9244_9269 = state_9240__$1;
(statearr_9244_9269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9241 === (1))){
var inst_9217 = (0);
var state_9240__$1 = (function (){var statearr_9245 = state_9240;
(statearr_9245[(8)] = inst_9217);

return statearr_9245;
})();
var statearr_9246_9270 = state_9240__$1;
(statearr_9246_9270[(2)] = null);

(statearr_9246_9270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9241 === (4))){
var state_9240__$1 = state_9240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9240__$1,(7),ch);
} else {
if((state_val_9241 === (6))){
var inst_9235 = (state_9240[(2)]);
var state_9240__$1 = state_9240;
var statearr_9247_9271 = state_9240__$1;
(statearr_9247_9271[(2)] = inst_9235);

(statearr_9247_9271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9241 === (3))){
var inst_9237 = (state_9240[(2)]);
var inst_9238 = cljs.core.async.close_BANG_.call(null,out);
var state_9240__$1 = (function (){var statearr_9248 = state_9240;
(statearr_9248[(9)] = inst_9237);

return statearr_9248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9240__$1,inst_9238);
} else {
if((state_val_9241 === (2))){
var inst_9217 = (state_9240[(8)]);
var inst_9219 = (inst_9217 < n);
var state_9240__$1 = state_9240;
if(cljs.core.truth_(inst_9219)){
var statearr_9249_9272 = state_9240__$1;
(statearr_9249_9272[(1)] = (4));

} else {
var statearr_9250_9273 = state_9240__$1;
(statearr_9250_9273[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9241 === (11))){
var inst_9217 = (state_9240[(8)]);
var inst_9227 = (state_9240[(2)]);
var inst_9228 = (inst_9217 + (1));
var inst_9217__$1 = inst_9228;
var state_9240__$1 = (function (){var statearr_9251 = state_9240;
(statearr_9251[(8)] = inst_9217__$1);

(statearr_9251[(10)] = inst_9227);

return statearr_9251;
})();
var statearr_9252_9274 = state_9240__$1;
(statearr_9252_9274[(2)] = null);

(statearr_9252_9274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9241 === (9))){
var state_9240__$1 = state_9240;
var statearr_9253_9275 = state_9240__$1;
(statearr_9253_9275[(2)] = null);

(statearr_9253_9275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9241 === (5))){
var state_9240__$1 = state_9240;
var statearr_9254_9276 = state_9240__$1;
(statearr_9254_9276[(2)] = null);

(statearr_9254_9276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9241 === (10))){
var inst_9232 = (state_9240[(2)]);
var state_9240__$1 = state_9240;
var statearr_9255_9277 = state_9240__$1;
(statearr_9255_9277[(2)] = inst_9232);

(statearr_9255_9277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9241 === (8))){
var inst_9222 = (state_9240[(7)]);
var state_9240__$1 = state_9240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9240__$1,(11),out,inst_9222);
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
});})(c__7140__auto___9267,out))
;
return ((function (switch__7028__auto__,c__7140__auto___9267,out){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_9259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9259[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_9259[(1)] = (1));

return statearr_9259;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_9240){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_9240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e9260){if((e9260 instanceof Object)){
var ex__7032__auto__ = e9260;
var statearr_9261_9278 = state_9240;
(statearr_9261_9278[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9279 = state_9240;
state_9240 = G__9279;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_9240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_9240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___9267,out))
})();
var state__7142__auto__ = (function (){var statearr_9262 = f__7141__auto__.call(null);
(statearr_9262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___9267);

return statearr_9262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___9267,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9287 = (function (map_LT_,f,ch,meta9288){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9288 = meta9288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9289,meta9288__$1){
var self__ = this;
var _9289__$1 = this;
return (new cljs.core.async.t_cljs$core$async9287(self__.map_LT_,self__.f,self__.ch,meta9288__$1));
});

cljs.core.async.t_cljs$core$async9287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9289){
var self__ = this;
var _9289__$1 = this;
return self__.meta9288;
});

cljs.core.async.t_cljs$core$async9287.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9287.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9287.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9290 = (function (map_LT_,f,ch,meta9288,_,fn1,meta9291){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9288 = meta9288;
this._ = _;
this.fn1 = fn1;
this.meta9291 = meta9291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9292,meta9291__$1){
var self__ = this;
var _9292__$1 = this;
return (new cljs.core.async.t_cljs$core$async9290(self__.map_LT_,self__.f,self__.ch,self__.meta9288,self__._,self__.fn1,meta9291__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9292){
var self__ = this;
var _9292__$1 = this;
return self__.meta9291;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9290.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9290.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9290.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9280_SHARP_){
return f1.call(null,(((p1__9280_SHARP_ == null))?null:self__.f.call(null,p1__9280_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9290.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9288","meta9288",-1637312006,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9287","cljs.core.async/t_cljs$core$async9287",-1105518952,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9291","meta9291",-1300488884,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9290";

cljs.core.async.t_cljs$core$async9290.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9290");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9290 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9290(map_LT___$1,f__$1,ch__$1,meta9288__$1,___$2,fn1__$1,meta9291){
return (new cljs.core.async.t_cljs$core$async9290(map_LT___$1,f__$1,ch__$1,meta9288__$1,___$2,fn1__$1,meta9291));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9290(self__.map_LT_,self__.f,self__.ch,self__.meta9288,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async9287.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9288","meta9288",-1637312006,null)], null);
});

cljs.core.async.t_cljs$core$async9287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9287";

cljs.core.async.t_cljs$core$async9287.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9287");
});

cljs.core.async.__GT_t_cljs$core$async9287 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9287(map_LT___$1,f__$1,ch__$1,meta9288){
return (new cljs.core.async.t_cljs$core$async9287(map_LT___$1,f__$1,ch__$1,meta9288));
});

}

return (new cljs.core.async.t_cljs$core$async9287(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9296 = (function (map_GT_,f,ch,meta9297){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9297 = meta9297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9298,meta9297__$1){
var self__ = this;
var _9298__$1 = this;
return (new cljs.core.async.t_cljs$core$async9296(self__.map_GT_,self__.f,self__.ch,meta9297__$1));
});

cljs.core.async.t_cljs$core$async9296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9298){
var self__ = this;
var _9298__$1 = this;
return self__.meta9297;
});

cljs.core.async.t_cljs$core$async9296.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9296.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9296.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9297","meta9297",-22154866,null)], null);
});

cljs.core.async.t_cljs$core$async9296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9296";

cljs.core.async.t_cljs$core$async9296.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9296");
});

cljs.core.async.__GT_t_cljs$core$async9296 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9296(map_GT___$1,f__$1,ch__$1,meta9297){
return (new cljs.core.async.t_cljs$core$async9296(map_GT___$1,f__$1,ch__$1,meta9297));
});

}

return (new cljs.core.async.t_cljs$core$async9296(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9302 = (function (filter_GT_,p,ch,meta9303){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9303 = meta9303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9304,meta9303__$1){
var self__ = this;
var _9304__$1 = this;
return (new cljs.core.async.t_cljs$core$async9302(self__.filter_GT_,self__.p,self__.ch,meta9303__$1));
});

cljs.core.async.t_cljs$core$async9302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9304){
var self__ = this;
var _9304__$1 = this;
return self__.meta9303;
});

cljs.core.async.t_cljs$core$async9302.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9302.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9302.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9302.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9302.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9302.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9302.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9303","meta9303",2008657121,null)], null);
});

cljs.core.async.t_cljs$core$async9302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9302";

cljs.core.async.t_cljs$core$async9302.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9302");
});

cljs.core.async.__GT_t_cljs$core$async9302 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9302(filter_GT___$1,p__$1,ch__$1,meta9303){
return (new cljs.core.async.t_cljs$core$async9302(filter_GT___$1,p__$1,ch__$1,meta9303));
});

}

return (new cljs.core.async.t_cljs$core$async9302(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args9305 = [];
var len__5726__auto___9349 = arguments.length;
var i__5727__auto___9350 = (0);
while(true){
if((i__5727__auto___9350 < len__5726__auto___9349)){
args9305.push((arguments[i__5727__auto___9350]));

var G__9351 = (i__5727__auto___9350 + (1));
i__5727__auto___9350 = G__9351;
continue;
} else {
}
break;
}

var G__9307 = args9305.length;
switch (G__9307) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9305.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7140__auto___9353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___9353,out){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___9353,out){
return (function (state_9328){
var state_val_9329 = (state_9328[(1)]);
if((state_val_9329 === (7))){
var inst_9324 = (state_9328[(2)]);
var state_9328__$1 = state_9328;
var statearr_9330_9354 = state_9328__$1;
(statearr_9330_9354[(2)] = inst_9324);

(statearr_9330_9354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9329 === (1))){
var state_9328__$1 = state_9328;
var statearr_9331_9355 = state_9328__$1;
(statearr_9331_9355[(2)] = null);

(statearr_9331_9355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9329 === (4))){
var inst_9310 = (state_9328[(7)]);
var inst_9310__$1 = (state_9328[(2)]);
var inst_9311 = (inst_9310__$1 == null);
var state_9328__$1 = (function (){var statearr_9332 = state_9328;
(statearr_9332[(7)] = inst_9310__$1);

return statearr_9332;
})();
if(cljs.core.truth_(inst_9311)){
var statearr_9333_9356 = state_9328__$1;
(statearr_9333_9356[(1)] = (5));

} else {
var statearr_9334_9357 = state_9328__$1;
(statearr_9334_9357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9329 === (6))){
var inst_9310 = (state_9328[(7)]);
var inst_9315 = p.call(null,inst_9310);
var state_9328__$1 = state_9328;
if(cljs.core.truth_(inst_9315)){
var statearr_9335_9358 = state_9328__$1;
(statearr_9335_9358[(1)] = (8));

} else {
var statearr_9336_9359 = state_9328__$1;
(statearr_9336_9359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9329 === (3))){
var inst_9326 = (state_9328[(2)]);
var state_9328__$1 = state_9328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9328__$1,inst_9326);
} else {
if((state_val_9329 === (2))){
var state_9328__$1 = state_9328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9328__$1,(4),ch);
} else {
if((state_val_9329 === (11))){
var inst_9318 = (state_9328[(2)]);
var state_9328__$1 = state_9328;
var statearr_9337_9360 = state_9328__$1;
(statearr_9337_9360[(2)] = inst_9318);

(statearr_9337_9360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9329 === (9))){
var state_9328__$1 = state_9328;
var statearr_9338_9361 = state_9328__$1;
(statearr_9338_9361[(2)] = null);

(statearr_9338_9361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9329 === (5))){
var inst_9313 = cljs.core.async.close_BANG_.call(null,out);
var state_9328__$1 = state_9328;
var statearr_9339_9362 = state_9328__$1;
(statearr_9339_9362[(2)] = inst_9313);

(statearr_9339_9362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9329 === (10))){
var inst_9321 = (state_9328[(2)]);
var state_9328__$1 = (function (){var statearr_9340 = state_9328;
(statearr_9340[(8)] = inst_9321);

return statearr_9340;
})();
var statearr_9341_9363 = state_9328__$1;
(statearr_9341_9363[(2)] = null);

(statearr_9341_9363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9329 === (8))){
var inst_9310 = (state_9328[(7)]);
var state_9328__$1 = state_9328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9328__$1,(11),out,inst_9310);
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
});})(c__7140__auto___9353,out))
;
return ((function (switch__7028__auto__,c__7140__auto___9353,out){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_9345 = [null,null,null,null,null,null,null,null,null];
(statearr_9345[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_9345[(1)] = (1));

return statearr_9345;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_9328){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_9328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e9346){if((e9346 instanceof Object)){
var ex__7032__auto__ = e9346;
var statearr_9347_9364 = state_9328;
(statearr_9347_9364[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9365 = state_9328;
state_9328 = G__9365;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_9328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_9328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___9353,out))
})();
var state__7142__auto__ = (function (){var statearr_9348 = f__7141__auto__.call(null);
(statearr_9348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___9353);

return statearr_9348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___9353,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args9366 = [];
var len__5726__auto___9369 = arguments.length;
var i__5727__auto___9370 = (0);
while(true){
if((i__5727__auto___9370 < len__5726__auto___9369)){
args9366.push((arguments[i__5727__auto___9370]));

var G__9371 = (i__5727__auto___9370 + (1));
i__5727__auto___9370 = G__9371;
continue;
} else {
}
break;
}

var G__9368 = args9366.length;
switch (G__9368) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9366.length)].join('')));

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
var c__7140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto__){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto__){
return (function (state_9538){
var state_val_9539 = (state_9538[(1)]);
if((state_val_9539 === (7))){
var inst_9534 = (state_9538[(2)]);
var state_9538__$1 = state_9538;
var statearr_9540_9581 = state_9538__$1;
(statearr_9540_9581[(2)] = inst_9534);

(statearr_9540_9581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (20))){
var inst_9504 = (state_9538[(7)]);
var inst_9515 = (state_9538[(2)]);
var inst_9516 = cljs.core.next.call(null,inst_9504);
var inst_9490 = inst_9516;
var inst_9491 = null;
var inst_9492 = (0);
var inst_9493 = (0);
var state_9538__$1 = (function (){var statearr_9541 = state_9538;
(statearr_9541[(8)] = inst_9515);

(statearr_9541[(9)] = inst_9490);

(statearr_9541[(10)] = inst_9492);

(statearr_9541[(11)] = inst_9493);

(statearr_9541[(12)] = inst_9491);

return statearr_9541;
})();
var statearr_9542_9582 = state_9538__$1;
(statearr_9542_9582[(2)] = null);

(statearr_9542_9582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (1))){
var state_9538__$1 = state_9538;
var statearr_9543_9583 = state_9538__$1;
(statearr_9543_9583[(2)] = null);

(statearr_9543_9583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (4))){
var inst_9479 = (state_9538[(13)]);
var inst_9479__$1 = (state_9538[(2)]);
var inst_9480 = (inst_9479__$1 == null);
var state_9538__$1 = (function (){var statearr_9544 = state_9538;
(statearr_9544[(13)] = inst_9479__$1);

return statearr_9544;
})();
if(cljs.core.truth_(inst_9480)){
var statearr_9545_9584 = state_9538__$1;
(statearr_9545_9584[(1)] = (5));

} else {
var statearr_9546_9585 = state_9538__$1;
(statearr_9546_9585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (15))){
var state_9538__$1 = state_9538;
var statearr_9550_9586 = state_9538__$1;
(statearr_9550_9586[(2)] = null);

(statearr_9550_9586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (21))){
var state_9538__$1 = state_9538;
var statearr_9551_9587 = state_9538__$1;
(statearr_9551_9587[(2)] = null);

(statearr_9551_9587[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (13))){
var inst_9490 = (state_9538[(9)]);
var inst_9492 = (state_9538[(10)]);
var inst_9493 = (state_9538[(11)]);
var inst_9491 = (state_9538[(12)]);
var inst_9500 = (state_9538[(2)]);
var inst_9501 = (inst_9493 + (1));
var tmp9547 = inst_9490;
var tmp9548 = inst_9492;
var tmp9549 = inst_9491;
var inst_9490__$1 = tmp9547;
var inst_9491__$1 = tmp9549;
var inst_9492__$1 = tmp9548;
var inst_9493__$1 = inst_9501;
var state_9538__$1 = (function (){var statearr_9552 = state_9538;
(statearr_9552[(9)] = inst_9490__$1);

(statearr_9552[(10)] = inst_9492__$1);

(statearr_9552[(14)] = inst_9500);

(statearr_9552[(11)] = inst_9493__$1);

(statearr_9552[(12)] = inst_9491__$1);

return statearr_9552;
})();
var statearr_9553_9588 = state_9538__$1;
(statearr_9553_9588[(2)] = null);

(statearr_9553_9588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (22))){
var state_9538__$1 = state_9538;
var statearr_9554_9589 = state_9538__$1;
(statearr_9554_9589[(2)] = null);

(statearr_9554_9589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (6))){
var inst_9479 = (state_9538[(13)]);
var inst_9488 = f.call(null,inst_9479);
var inst_9489 = cljs.core.seq.call(null,inst_9488);
var inst_9490 = inst_9489;
var inst_9491 = null;
var inst_9492 = (0);
var inst_9493 = (0);
var state_9538__$1 = (function (){var statearr_9555 = state_9538;
(statearr_9555[(9)] = inst_9490);

(statearr_9555[(10)] = inst_9492);

(statearr_9555[(11)] = inst_9493);

(statearr_9555[(12)] = inst_9491);

return statearr_9555;
})();
var statearr_9556_9590 = state_9538__$1;
(statearr_9556_9590[(2)] = null);

(statearr_9556_9590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (17))){
var inst_9504 = (state_9538[(7)]);
var inst_9508 = cljs.core.chunk_first.call(null,inst_9504);
var inst_9509 = cljs.core.chunk_rest.call(null,inst_9504);
var inst_9510 = cljs.core.count.call(null,inst_9508);
var inst_9490 = inst_9509;
var inst_9491 = inst_9508;
var inst_9492 = inst_9510;
var inst_9493 = (0);
var state_9538__$1 = (function (){var statearr_9557 = state_9538;
(statearr_9557[(9)] = inst_9490);

(statearr_9557[(10)] = inst_9492);

(statearr_9557[(11)] = inst_9493);

(statearr_9557[(12)] = inst_9491);

return statearr_9557;
})();
var statearr_9558_9591 = state_9538__$1;
(statearr_9558_9591[(2)] = null);

(statearr_9558_9591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (3))){
var inst_9536 = (state_9538[(2)]);
var state_9538__$1 = state_9538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9538__$1,inst_9536);
} else {
if((state_val_9539 === (12))){
var inst_9524 = (state_9538[(2)]);
var state_9538__$1 = state_9538;
var statearr_9559_9592 = state_9538__$1;
(statearr_9559_9592[(2)] = inst_9524);

(statearr_9559_9592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (2))){
var state_9538__$1 = state_9538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9538__$1,(4),in$);
} else {
if((state_val_9539 === (23))){
var inst_9532 = (state_9538[(2)]);
var state_9538__$1 = state_9538;
var statearr_9560_9593 = state_9538__$1;
(statearr_9560_9593[(2)] = inst_9532);

(statearr_9560_9593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (19))){
var inst_9519 = (state_9538[(2)]);
var state_9538__$1 = state_9538;
var statearr_9561_9594 = state_9538__$1;
(statearr_9561_9594[(2)] = inst_9519);

(statearr_9561_9594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (11))){
var inst_9490 = (state_9538[(9)]);
var inst_9504 = (state_9538[(7)]);
var inst_9504__$1 = cljs.core.seq.call(null,inst_9490);
var state_9538__$1 = (function (){var statearr_9562 = state_9538;
(statearr_9562[(7)] = inst_9504__$1);

return statearr_9562;
})();
if(inst_9504__$1){
var statearr_9563_9595 = state_9538__$1;
(statearr_9563_9595[(1)] = (14));

} else {
var statearr_9564_9596 = state_9538__$1;
(statearr_9564_9596[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (9))){
var inst_9526 = (state_9538[(2)]);
var inst_9527 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_9538__$1 = (function (){var statearr_9565 = state_9538;
(statearr_9565[(15)] = inst_9526);

return statearr_9565;
})();
if(cljs.core.truth_(inst_9527)){
var statearr_9566_9597 = state_9538__$1;
(statearr_9566_9597[(1)] = (21));

} else {
var statearr_9567_9598 = state_9538__$1;
(statearr_9567_9598[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (5))){
var inst_9482 = cljs.core.async.close_BANG_.call(null,out);
var state_9538__$1 = state_9538;
var statearr_9568_9599 = state_9538__$1;
(statearr_9568_9599[(2)] = inst_9482);

(statearr_9568_9599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (14))){
var inst_9504 = (state_9538[(7)]);
var inst_9506 = cljs.core.chunked_seq_QMARK_.call(null,inst_9504);
var state_9538__$1 = state_9538;
if(inst_9506){
var statearr_9569_9600 = state_9538__$1;
(statearr_9569_9600[(1)] = (17));

} else {
var statearr_9570_9601 = state_9538__$1;
(statearr_9570_9601[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (16))){
var inst_9522 = (state_9538[(2)]);
var state_9538__$1 = state_9538;
var statearr_9571_9602 = state_9538__$1;
(statearr_9571_9602[(2)] = inst_9522);

(statearr_9571_9602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9539 === (10))){
var inst_9493 = (state_9538[(11)]);
var inst_9491 = (state_9538[(12)]);
var inst_9498 = cljs.core._nth.call(null,inst_9491,inst_9493);
var state_9538__$1 = state_9538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9538__$1,(13),out,inst_9498);
} else {
if((state_val_9539 === (18))){
var inst_9504 = (state_9538[(7)]);
var inst_9513 = cljs.core.first.call(null,inst_9504);
var state_9538__$1 = state_9538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9538__$1,(20),out,inst_9513);
} else {
if((state_val_9539 === (8))){
var inst_9492 = (state_9538[(10)]);
var inst_9493 = (state_9538[(11)]);
var inst_9495 = (inst_9493 < inst_9492);
var inst_9496 = inst_9495;
var state_9538__$1 = state_9538;
if(cljs.core.truth_(inst_9496)){
var statearr_9572_9603 = state_9538__$1;
(statearr_9572_9603[(1)] = (10));

} else {
var statearr_9573_9604 = state_9538__$1;
(statearr_9573_9604[(1)] = (11));

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
});})(c__7140__auto__))
;
return ((function (switch__7028__auto__,c__7140__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7029__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7029__auto____0 = (function (){
var statearr_9577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9577[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7029__auto__);

(statearr_9577[(1)] = (1));

return statearr_9577;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7029__auto____1 = (function (state_9538){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_9538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e9578){if((e9578 instanceof Object)){
var ex__7032__auto__ = e9578;
var statearr_9579_9605 = state_9538;
(statearr_9579_9605[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9606 = state_9538;
state_9538 = G__9606;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7029__auto__ = function(state_9538){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7029__auto____1.call(this,state_9538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7029__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7029__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto__))
})();
var state__7142__auto__ = (function (){var statearr_9580 = f__7141__auto__.call(null);
(statearr_9580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto__);

return statearr_9580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto__))
);

return c__7140__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args9607 = [];
var len__5726__auto___9610 = arguments.length;
var i__5727__auto___9611 = (0);
while(true){
if((i__5727__auto___9611 < len__5726__auto___9610)){
args9607.push((arguments[i__5727__auto___9611]));

var G__9612 = (i__5727__auto___9611 + (1));
i__5727__auto___9611 = G__9612;
continue;
} else {
}
break;
}

var G__9609 = args9607.length;
switch (G__9609) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9607.length)].join('')));

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
var args9614 = [];
var len__5726__auto___9617 = arguments.length;
var i__5727__auto___9618 = (0);
while(true){
if((i__5727__auto___9618 < len__5726__auto___9617)){
args9614.push((arguments[i__5727__auto___9618]));

var G__9619 = (i__5727__auto___9618 + (1));
i__5727__auto___9618 = G__9619;
continue;
} else {
}
break;
}

var G__9616 = args9614.length;
switch (G__9616) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9614.length)].join('')));

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
var args9621 = [];
var len__5726__auto___9672 = arguments.length;
var i__5727__auto___9673 = (0);
while(true){
if((i__5727__auto___9673 < len__5726__auto___9672)){
args9621.push((arguments[i__5727__auto___9673]));

var G__9674 = (i__5727__auto___9673 + (1));
i__5727__auto___9673 = G__9674;
continue;
} else {
}
break;
}

var G__9623 = args9621.length;
switch (G__9623) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9621.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7140__auto___9676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___9676,out){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___9676,out){
return (function (state_9647){
var state_val_9648 = (state_9647[(1)]);
if((state_val_9648 === (7))){
var inst_9642 = (state_9647[(2)]);
var state_9647__$1 = state_9647;
var statearr_9649_9677 = state_9647__$1;
(statearr_9649_9677[(2)] = inst_9642);

(statearr_9649_9677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9648 === (1))){
var inst_9624 = null;
var state_9647__$1 = (function (){var statearr_9650 = state_9647;
(statearr_9650[(7)] = inst_9624);

return statearr_9650;
})();
var statearr_9651_9678 = state_9647__$1;
(statearr_9651_9678[(2)] = null);

(statearr_9651_9678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9648 === (4))){
var inst_9627 = (state_9647[(8)]);
var inst_9627__$1 = (state_9647[(2)]);
var inst_9628 = (inst_9627__$1 == null);
var inst_9629 = cljs.core.not.call(null,inst_9628);
var state_9647__$1 = (function (){var statearr_9652 = state_9647;
(statearr_9652[(8)] = inst_9627__$1);

return statearr_9652;
})();
if(inst_9629){
var statearr_9653_9679 = state_9647__$1;
(statearr_9653_9679[(1)] = (5));

} else {
var statearr_9654_9680 = state_9647__$1;
(statearr_9654_9680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9648 === (6))){
var state_9647__$1 = state_9647;
var statearr_9655_9681 = state_9647__$1;
(statearr_9655_9681[(2)] = null);

(statearr_9655_9681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9648 === (3))){
var inst_9644 = (state_9647[(2)]);
var inst_9645 = cljs.core.async.close_BANG_.call(null,out);
var state_9647__$1 = (function (){var statearr_9656 = state_9647;
(statearr_9656[(9)] = inst_9644);

return statearr_9656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9647__$1,inst_9645);
} else {
if((state_val_9648 === (2))){
var state_9647__$1 = state_9647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9647__$1,(4),ch);
} else {
if((state_val_9648 === (11))){
var inst_9627 = (state_9647[(8)]);
var inst_9636 = (state_9647[(2)]);
var inst_9624 = inst_9627;
var state_9647__$1 = (function (){var statearr_9657 = state_9647;
(statearr_9657[(7)] = inst_9624);

(statearr_9657[(10)] = inst_9636);

return statearr_9657;
})();
var statearr_9658_9682 = state_9647__$1;
(statearr_9658_9682[(2)] = null);

(statearr_9658_9682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9648 === (9))){
var inst_9627 = (state_9647[(8)]);
var state_9647__$1 = state_9647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9647__$1,(11),out,inst_9627);
} else {
if((state_val_9648 === (5))){
var inst_9627 = (state_9647[(8)]);
var inst_9624 = (state_9647[(7)]);
var inst_9631 = cljs.core._EQ_.call(null,inst_9627,inst_9624);
var state_9647__$1 = state_9647;
if(inst_9631){
var statearr_9660_9683 = state_9647__$1;
(statearr_9660_9683[(1)] = (8));

} else {
var statearr_9661_9684 = state_9647__$1;
(statearr_9661_9684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9648 === (10))){
var inst_9639 = (state_9647[(2)]);
var state_9647__$1 = state_9647;
var statearr_9662_9685 = state_9647__$1;
(statearr_9662_9685[(2)] = inst_9639);

(statearr_9662_9685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9648 === (8))){
var inst_9624 = (state_9647[(7)]);
var tmp9659 = inst_9624;
var inst_9624__$1 = tmp9659;
var state_9647__$1 = (function (){var statearr_9663 = state_9647;
(statearr_9663[(7)] = inst_9624__$1);

return statearr_9663;
})();
var statearr_9664_9686 = state_9647__$1;
(statearr_9664_9686[(2)] = null);

(statearr_9664_9686[(1)] = (2));


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
});})(c__7140__auto___9676,out))
;
return ((function (switch__7028__auto__,c__7140__auto___9676,out){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_9668 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9668[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_9668[(1)] = (1));

return statearr_9668;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_9647){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_9647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e9669){if((e9669 instanceof Object)){
var ex__7032__auto__ = e9669;
var statearr_9670_9687 = state_9647;
(statearr_9670_9687[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9688 = state_9647;
state_9647 = G__9688;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_9647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_9647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___9676,out))
})();
var state__7142__auto__ = (function (){var statearr_9671 = f__7141__auto__.call(null);
(statearr_9671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___9676);

return statearr_9671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___9676,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args9689 = [];
var len__5726__auto___9759 = arguments.length;
var i__5727__auto___9760 = (0);
while(true){
if((i__5727__auto___9760 < len__5726__auto___9759)){
args9689.push((arguments[i__5727__auto___9760]));

var G__9761 = (i__5727__auto___9760 + (1));
i__5727__auto___9760 = G__9761;
continue;
} else {
}
break;
}

var G__9691 = args9689.length;
switch (G__9691) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9689.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7140__auto___9763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___9763,out){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___9763,out){
return (function (state_9729){
var state_val_9730 = (state_9729[(1)]);
if((state_val_9730 === (7))){
var inst_9725 = (state_9729[(2)]);
var state_9729__$1 = state_9729;
var statearr_9731_9764 = state_9729__$1;
(statearr_9731_9764[(2)] = inst_9725);

(statearr_9731_9764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9730 === (1))){
var inst_9692 = (new Array(n));
var inst_9693 = inst_9692;
var inst_9694 = (0);
var state_9729__$1 = (function (){var statearr_9732 = state_9729;
(statearr_9732[(7)] = inst_9694);

(statearr_9732[(8)] = inst_9693);

return statearr_9732;
})();
var statearr_9733_9765 = state_9729__$1;
(statearr_9733_9765[(2)] = null);

(statearr_9733_9765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9730 === (4))){
var inst_9697 = (state_9729[(9)]);
var inst_9697__$1 = (state_9729[(2)]);
var inst_9698 = (inst_9697__$1 == null);
var inst_9699 = cljs.core.not.call(null,inst_9698);
var state_9729__$1 = (function (){var statearr_9734 = state_9729;
(statearr_9734[(9)] = inst_9697__$1);

return statearr_9734;
})();
if(inst_9699){
var statearr_9735_9766 = state_9729__$1;
(statearr_9735_9766[(1)] = (5));

} else {
var statearr_9736_9767 = state_9729__$1;
(statearr_9736_9767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9730 === (15))){
var inst_9719 = (state_9729[(2)]);
var state_9729__$1 = state_9729;
var statearr_9737_9768 = state_9729__$1;
(statearr_9737_9768[(2)] = inst_9719);

(statearr_9737_9768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9730 === (13))){
var state_9729__$1 = state_9729;
var statearr_9738_9769 = state_9729__$1;
(statearr_9738_9769[(2)] = null);

(statearr_9738_9769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9730 === (6))){
var inst_9694 = (state_9729[(7)]);
var inst_9715 = (inst_9694 > (0));
var state_9729__$1 = state_9729;
if(cljs.core.truth_(inst_9715)){
var statearr_9739_9770 = state_9729__$1;
(statearr_9739_9770[(1)] = (12));

} else {
var statearr_9740_9771 = state_9729__$1;
(statearr_9740_9771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9730 === (3))){
var inst_9727 = (state_9729[(2)]);
var state_9729__$1 = state_9729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9729__$1,inst_9727);
} else {
if((state_val_9730 === (12))){
var inst_9693 = (state_9729[(8)]);
var inst_9717 = cljs.core.vec.call(null,inst_9693);
var state_9729__$1 = state_9729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9729__$1,(15),out,inst_9717);
} else {
if((state_val_9730 === (2))){
var state_9729__$1 = state_9729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9729__$1,(4),ch);
} else {
if((state_val_9730 === (11))){
var inst_9709 = (state_9729[(2)]);
var inst_9710 = (new Array(n));
var inst_9693 = inst_9710;
var inst_9694 = (0);
var state_9729__$1 = (function (){var statearr_9741 = state_9729;
(statearr_9741[(10)] = inst_9709);

(statearr_9741[(7)] = inst_9694);

(statearr_9741[(8)] = inst_9693);

return statearr_9741;
})();
var statearr_9742_9772 = state_9729__$1;
(statearr_9742_9772[(2)] = null);

(statearr_9742_9772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9730 === (9))){
var inst_9693 = (state_9729[(8)]);
var inst_9707 = cljs.core.vec.call(null,inst_9693);
var state_9729__$1 = state_9729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9729__$1,(11),out,inst_9707);
} else {
if((state_val_9730 === (5))){
var inst_9694 = (state_9729[(7)]);
var inst_9702 = (state_9729[(11)]);
var inst_9693 = (state_9729[(8)]);
var inst_9697 = (state_9729[(9)]);
var inst_9701 = (inst_9693[inst_9694] = inst_9697);
var inst_9702__$1 = (inst_9694 + (1));
var inst_9703 = (inst_9702__$1 < n);
var state_9729__$1 = (function (){var statearr_9743 = state_9729;
(statearr_9743[(11)] = inst_9702__$1);

(statearr_9743[(12)] = inst_9701);

return statearr_9743;
})();
if(cljs.core.truth_(inst_9703)){
var statearr_9744_9773 = state_9729__$1;
(statearr_9744_9773[(1)] = (8));

} else {
var statearr_9745_9774 = state_9729__$1;
(statearr_9745_9774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9730 === (14))){
var inst_9722 = (state_9729[(2)]);
var inst_9723 = cljs.core.async.close_BANG_.call(null,out);
var state_9729__$1 = (function (){var statearr_9747 = state_9729;
(statearr_9747[(13)] = inst_9722);

return statearr_9747;
})();
var statearr_9748_9775 = state_9729__$1;
(statearr_9748_9775[(2)] = inst_9723);

(statearr_9748_9775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9730 === (10))){
var inst_9713 = (state_9729[(2)]);
var state_9729__$1 = state_9729;
var statearr_9749_9776 = state_9729__$1;
(statearr_9749_9776[(2)] = inst_9713);

(statearr_9749_9776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9730 === (8))){
var inst_9702 = (state_9729[(11)]);
var inst_9693 = (state_9729[(8)]);
var tmp9746 = inst_9693;
var inst_9693__$1 = tmp9746;
var inst_9694 = inst_9702;
var state_9729__$1 = (function (){var statearr_9750 = state_9729;
(statearr_9750[(7)] = inst_9694);

(statearr_9750[(8)] = inst_9693__$1);

return statearr_9750;
})();
var statearr_9751_9777 = state_9729__$1;
(statearr_9751_9777[(2)] = null);

(statearr_9751_9777[(1)] = (2));


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
});})(c__7140__auto___9763,out))
;
return ((function (switch__7028__auto__,c__7140__auto___9763,out){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_9755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9755[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_9755[(1)] = (1));

return statearr_9755;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_9729){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_9729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e9756){if((e9756 instanceof Object)){
var ex__7032__auto__ = e9756;
var statearr_9757_9778 = state_9729;
(statearr_9757_9778[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9779 = state_9729;
state_9729 = G__9779;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_9729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_9729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___9763,out))
})();
var state__7142__auto__ = (function (){var statearr_9758 = f__7141__auto__.call(null);
(statearr_9758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___9763);

return statearr_9758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___9763,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args9780 = [];
var len__5726__auto___9854 = arguments.length;
var i__5727__auto___9855 = (0);
while(true){
if((i__5727__auto___9855 < len__5726__auto___9854)){
args9780.push((arguments[i__5727__auto___9855]));

var G__9856 = (i__5727__auto___9855 + (1));
i__5727__auto___9855 = G__9856;
continue;
} else {
}
break;
}

var G__9782 = args9780.length;
switch (G__9782) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9780.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7140__auto___9858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7140__auto___9858,out){
return (function (){
var f__7141__auto__ = (function (){var switch__7028__auto__ = ((function (c__7140__auto___9858,out){
return (function (state_9824){
var state_val_9825 = (state_9824[(1)]);
if((state_val_9825 === (7))){
var inst_9820 = (state_9824[(2)]);
var state_9824__$1 = state_9824;
var statearr_9826_9859 = state_9824__$1;
(statearr_9826_9859[(2)] = inst_9820);

(statearr_9826_9859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (1))){
var inst_9783 = [];
var inst_9784 = inst_9783;
var inst_9785 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_9824__$1 = (function (){var statearr_9827 = state_9824;
(statearr_9827[(7)] = inst_9784);

(statearr_9827[(8)] = inst_9785);

return statearr_9827;
})();
var statearr_9828_9860 = state_9824__$1;
(statearr_9828_9860[(2)] = null);

(statearr_9828_9860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (4))){
var inst_9788 = (state_9824[(9)]);
var inst_9788__$1 = (state_9824[(2)]);
var inst_9789 = (inst_9788__$1 == null);
var inst_9790 = cljs.core.not.call(null,inst_9789);
var state_9824__$1 = (function (){var statearr_9829 = state_9824;
(statearr_9829[(9)] = inst_9788__$1);

return statearr_9829;
})();
if(inst_9790){
var statearr_9830_9861 = state_9824__$1;
(statearr_9830_9861[(1)] = (5));

} else {
var statearr_9831_9862 = state_9824__$1;
(statearr_9831_9862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (15))){
var inst_9814 = (state_9824[(2)]);
var state_9824__$1 = state_9824;
var statearr_9832_9863 = state_9824__$1;
(statearr_9832_9863[(2)] = inst_9814);

(statearr_9832_9863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (13))){
var state_9824__$1 = state_9824;
var statearr_9833_9864 = state_9824__$1;
(statearr_9833_9864[(2)] = null);

(statearr_9833_9864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (6))){
var inst_9784 = (state_9824[(7)]);
var inst_9809 = inst_9784.length;
var inst_9810 = (inst_9809 > (0));
var state_9824__$1 = state_9824;
if(cljs.core.truth_(inst_9810)){
var statearr_9834_9865 = state_9824__$1;
(statearr_9834_9865[(1)] = (12));

} else {
var statearr_9835_9866 = state_9824__$1;
(statearr_9835_9866[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (3))){
var inst_9822 = (state_9824[(2)]);
var state_9824__$1 = state_9824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9824__$1,inst_9822);
} else {
if((state_val_9825 === (12))){
var inst_9784 = (state_9824[(7)]);
var inst_9812 = cljs.core.vec.call(null,inst_9784);
var state_9824__$1 = state_9824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9824__$1,(15),out,inst_9812);
} else {
if((state_val_9825 === (2))){
var state_9824__$1 = state_9824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9824__$1,(4),ch);
} else {
if((state_val_9825 === (11))){
var inst_9792 = (state_9824[(10)]);
var inst_9788 = (state_9824[(9)]);
var inst_9802 = (state_9824[(2)]);
var inst_9803 = [];
var inst_9804 = inst_9803.push(inst_9788);
var inst_9784 = inst_9803;
var inst_9785 = inst_9792;
var state_9824__$1 = (function (){var statearr_9836 = state_9824;
(statearr_9836[(7)] = inst_9784);

(statearr_9836[(11)] = inst_9802);

(statearr_9836[(12)] = inst_9804);

(statearr_9836[(8)] = inst_9785);

return statearr_9836;
})();
var statearr_9837_9867 = state_9824__$1;
(statearr_9837_9867[(2)] = null);

(statearr_9837_9867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (9))){
var inst_9784 = (state_9824[(7)]);
var inst_9800 = cljs.core.vec.call(null,inst_9784);
var state_9824__$1 = state_9824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9824__$1,(11),out,inst_9800);
} else {
if((state_val_9825 === (5))){
var inst_9792 = (state_9824[(10)]);
var inst_9788 = (state_9824[(9)]);
var inst_9785 = (state_9824[(8)]);
var inst_9792__$1 = f.call(null,inst_9788);
var inst_9793 = cljs.core._EQ_.call(null,inst_9792__$1,inst_9785);
var inst_9794 = cljs.core.keyword_identical_QMARK_.call(null,inst_9785,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_9795 = (inst_9793) || (inst_9794);
var state_9824__$1 = (function (){var statearr_9838 = state_9824;
(statearr_9838[(10)] = inst_9792__$1);

return statearr_9838;
})();
if(cljs.core.truth_(inst_9795)){
var statearr_9839_9868 = state_9824__$1;
(statearr_9839_9868[(1)] = (8));

} else {
var statearr_9840_9869 = state_9824__$1;
(statearr_9840_9869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (14))){
var inst_9817 = (state_9824[(2)]);
var inst_9818 = cljs.core.async.close_BANG_.call(null,out);
var state_9824__$1 = (function (){var statearr_9842 = state_9824;
(statearr_9842[(13)] = inst_9817);

return statearr_9842;
})();
var statearr_9843_9870 = state_9824__$1;
(statearr_9843_9870[(2)] = inst_9818);

(statearr_9843_9870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (10))){
var inst_9807 = (state_9824[(2)]);
var state_9824__$1 = state_9824;
var statearr_9844_9871 = state_9824__$1;
(statearr_9844_9871[(2)] = inst_9807);

(statearr_9844_9871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (8))){
var inst_9784 = (state_9824[(7)]);
var inst_9792 = (state_9824[(10)]);
var inst_9788 = (state_9824[(9)]);
var inst_9797 = inst_9784.push(inst_9788);
var tmp9841 = inst_9784;
var inst_9784__$1 = tmp9841;
var inst_9785 = inst_9792;
var state_9824__$1 = (function (){var statearr_9845 = state_9824;
(statearr_9845[(7)] = inst_9784__$1);

(statearr_9845[(14)] = inst_9797);

(statearr_9845[(8)] = inst_9785);

return statearr_9845;
})();
var statearr_9846_9872 = state_9824__$1;
(statearr_9846_9872[(2)] = null);

(statearr_9846_9872[(1)] = (2));


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
});})(c__7140__auto___9858,out))
;
return ((function (switch__7028__auto__,c__7140__auto___9858,out){
return (function() {
var cljs$core$async$state_machine__7029__auto__ = null;
var cljs$core$async$state_machine__7029__auto____0 = (function (){
var statearr_9850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9850[(0)] = cljs$core$async$state_machine__7029__auto__);

(statearr_9850[(1)] = (1));

return statearr_9850;
});
var cljs$core$async$state_machine__7029__auto____1 = (function (state_9824){
while(true){
var ret_value__7030__auto__ = (function (){try{while(true){
var result__7031__auto__ = switch__7028__auto__.call(null,state_9824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7031__auto__;
}
break;
}
}catch (e9851){if((e9851 instanceof Object)){
var ex__7032__auto__ = e9851;
var statearr_9852_9873 = state_9824;
(statearr_9852_9873[(5)] = ex__7032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9874 = state_9824;
state_9824 = G__9874;
continue;
} else {
return ret_value__7030__auto__;
}
break;
}
});
cljs$core$async$state_machine__7029__auto__ = function(state_9824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7029__auto____1.call(this,state_9824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7029__auto____0;
cljs$core$async$state_machine__7029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7029__auto____1;
return cljs$core$async$state_machine__7029__auto__;
})()
;})(switch__7028__auto__,c__7140__auto___9858,out))
})();
var state__7142__auto__ = (function (){var statearr_9853 = f__7141__auto__.call(null);
(statearr_9853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7140__auto___9858);

return statearr_9853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7142__auto__);
});})(c__7140__auto___9858,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1456070388804