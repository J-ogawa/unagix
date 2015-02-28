// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11993 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11993 = (function (f,fn_handler,meta11994){
this.f = f;
this.fn_handler = fn_handler;
this.meta11994 = meta11994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11993.cljs$lang$type = true;
cljs.core.async.t11993.cljs$lang$ctorStr = "cljs.core.async/t11993";
cljs.core.async.t11993.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t11993");
});
cljs.core.async.t11993.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11995){var self__ = this;
var _11995__$1 = this;return self__.meta11994;
});
cljs.core.async.t11993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11995,meta11994__$1){var self__ = this;
var _11995__$1 = this;return (new cljs.core.async.t11993(self__.f,self__.fn_handler,meta11994__$1));
});
cljs.core.async.__GT_t11993 = (function __GT_t11993(f__$1,fn_handler__$1,meta11994){return (new cljs.core.async.t11993(f__$1,fn_handler__$1,meta11994));
});
}
return (new cljs.core.async.t11993(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11997 = buff;if(G__11997)
{var bit__4263__auto__ = null;if(cljs.core.truth_((function (){var or__3599__auto__ = bit__4263__auto__;if(cljs.core.truth_(or__3599__auto__))
{return or__3599__auto__;
} else
{return G__11997.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11997.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11997);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11997);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11998 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11998);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11998,ret){
return (function (){return fn1.call(null,val_11998);
});})(val_11998,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4469__auto___11999 = n;var x_12000 = (0);while(true){
if((x_12000 < n__4469__auto___11999))
{(a[x_12000] = (0));
{
var G__12001 = (x_12000 + (1));
x_12000 = G__12001;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12002 = (i + (1));
i = G__12002;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12006 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12006 = (function (flag,alt_flag,meta12007){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12007 = meta12007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12006.cljs$lang$type = true;
cljs.core.async.t12006.cljs$lang$ctorStr = "cljs.core.async/t12006";
cljs.core.async.t12006.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t12006");
});})(flag))
;
cljs.core.async.t12006.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12008){var self__ = this;
var _12008__$1 = this;return self__.meta12007;
});})(flag))
;
cljs.core.async.t12006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12008,meta12007__$1){var self__ = this;
var _12008__$1 = this;return (new cljs.core.async.t12006(self__.flag,self__.alt_flag,meta12007__$1));
});})(flag))
;
cljs.core.async.__GT_t12006 = ((function (flag){
return (function __GT_t12006(flag__$1,alt_flag__$1,meta12007){return (new cljs.core.async.t12006(flag__$1,alt_flag__$1,meta12007));
});})(flag))
;
}
return (new cljs.core.async.t12006(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12012 = (function (cb,flag,alt_handler,meta12013){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12013 = meta12013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12012.cljs$lang$type = true;
cljs.core.async.t12012.cljs$lang$ctorStr = "cljs.core.async/t12012";
cljs.core.async.t12012.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t12012");
});
cljs.core.async.t12012.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12014){var self__ = this;
var _12014__$1 = this;return self__.meta12013;
});
cljs.core.async.t12012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12014,meta12013__$1){var self__ = this;
var _12014__$1 = this;return (new cljs.core.async.t12012(self__.cb,self__.flag,self__.alt_handler,meta12013__$1));
});
cljs.core.async.__GT_t12012 = (function __GT_t12012(cb__$1,flag__$1,alt_handler__$1,meta12013){return (new cljs.core.async.t12012(cb__$1,flag__$1,alt_handler__$1,meta12013));
});
}
return (new cljs.core.async.t12012(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12015_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12015_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12016_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12016_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3599__auto__ = wport;if(cljs.core.truth_(or__3599__auto__))
{return or__3599__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12017 = (i + (1));
i = G__12017;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3599__auto__ = ret;if(cljs.core.truth_(or__3599__auto__))
{return or__3599__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3587__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3587__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3587__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12018){var map__12020 = p__12018;var map__12020__$1 = ((cljs.core.seq_QMARK_.call(null,map__12020))?cljs.core.apply.call(null,cljs.core.hash_map,map__12020):map__12020);var opts = map__12020__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12018 = null;if (arguments.length > 1) {
  p__12018 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12018);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12021){
var ports = cljs.core.first(arglist__12021);
var p__12018 = cljs.core.rest(arglist__12021);
return alts_BANG___delegate(ports,p__12018);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6439__auto___12116 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___12116){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___12116){
return (function (state_12092){var state_val_12093 = (state_12092[(1)]);if((state_val_12093 === (7)))
{var inst_12088 = (state_12092[(2)]);var state_12092__$1 = state_12092;var statearr_12094_12117 = state_12092__$1;(statearr_12094_12117[(2)] = inst_12088);
(statearr_12094_12117[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12093 === (1)))
{var state_12092__$1 = state_12092;var statearr_12095_12118 = state_12092__$1;(statearr_12095_12118[(2)] = null);
(statearr_12095_12118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12093 === (4)))
{var inst_12071 = (state_12092[(7)]);var inst_12071__$1 = (state_12092[(2)]);var inst_12072 = (inst_12071__$1 == null);var state_12092__$1 = (function (){var statearr_12096 = state_12092;(statearr_12096[(7)] = inst_12071__$1);
return statearr_12096;
})();if(cljs.core.truth_(inst_12072))
{var statearr_12097_12119 = state_12092__$1;(statearr_12097_12119[(1)] = (5));
} else
{var statearr_12098_12120 = state_12092__$1;(statearr_12098_12120[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12093 === (13)))
{var state_12092__$1 = state_12092;var statearr_12099_12121 = state_12092__$1;(statearr_12099_12121[(2)] = null);
(statearr_12099_12121[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12093 === (6)))
{var inst_12071 = (state_12092[(7)]);var state_12092__$1 = state_12092;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12092__$1,(11),to,inst_12071);
} else
{if((state_val_12093 === (3)))
{var inst_12090 = (state_12092[(2)]);var state_12092__$1 = state_12092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12092__$1,inst_12090);
} else
{if((state_val_12093 === (12)))
{var state_12092__$1 = state_12092;var statearr_12100_12122 = state_12092__$1;(statearr_12100_12122[(2)] = null);
(statearr_12100_12122[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12093 === (2)))
{var state_12092__$1 = state_12092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12092__$1,(4),from);
} else
{if((state_val_12093 === (11)))
{var inst_12081 = (state_12092[(2)]);var state_12092__$1 = state_12092;if(cljs.core.truth_(inst_12081))
{var statearr_12101_12123 = state_12092__$1;(statearr_12101_12123[(1)] = (12));
} else
{var statearr_12102_12124 = state_12092__$1;(statearr_12102_12124[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12093 === (9)))
{var state_12092__$1 = state_12092;var statearr_12103_12125 = state_12092__$1;(statearr_12103_12125[(2)] = null);
(statearr_12103_12125[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12093 === (5)))
{var state_12092__$1 = state_12092;if(cljs.core.truth_(close_QMARK_))
{var statearr_12104_12126 = state_12092__$1;(statearr_12104_12126[(1)] = (8));
} else
{var statearr_12105_12127 = state_12092__$1;(statearr_12105_12127[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12093 === (14)))
{var inst_12086 = (state_12092[(2)]);var state_12092__$1 = state_12092;var statearr_12106_12128 = state_12092__$1;(statearr_12106_12128[(2)] = inst_12086);
(statearr_12106_12128[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12093 === (10)))
{var inst_12078 = (state_12092[(2)]);var state_12092__$1 = state_12092;var statearr_12107_12129 = state_12092__$1;(statearr_12107_12129[(2)] = inst_12078);
(statearr_12107_12129[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12093 === (8)))
{var inst_12075 = cljs.core.async.close_BANG_.call(null,to);var state_12092__$1 = state_12092;var statearr_12108_12130 = state_12092__$1;(statearr_12108_12130[(2)] = inst_12075);
(statearr_12108_12130[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___12116))
;return ((function (switch__6424__auto__,c__6439__auto___12116){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12112 = [null,null,null,null,null,null,null,null];(statearr_12112[(0)] = state_machine__6425__auto__);
(statearr_12112[(1)] = (1));
return statearr_12112;
});
var state_machine__6425__auto____1 = (function (state_12092){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12092);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12113){if((e12113 instanceof Object))
{var ex__6428__auto__ = e12113;var statearr_12114_12131 = state_12092;(statearr_12114_12131[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12113;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12132 = state_12092;
state_12092 = G__12132;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12092){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___12116))
})();var state__6441__auto__ = (function (){var statearr_12115 = f__6440__auto__.call(null);(statearr_12115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12116);
return statearr_12115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___12116))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__12316){var vec__12317 = p__12316;var v = cljs.core.nth.call(null,vec__12317,(0),null);var p = cljs.core.nth.call(null,vec__12317,(1),null);var job = vec__12317;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6439__auto___12499 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___12499,res,vec__12317,v,p,job,jobs,results){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___12499,res,vec__12317,v,p,job,jobs,results){
return (function (state_12322){var state_val_12323 = (state_12322[(1)]);if((state_val_12323 === (2)))
{var inst_12319 = (state_12322[(2)]);var inst_12320 = cljs.core.async.close_BANG_.call(null,res);var state_12322__$1 = (function (){var statearr_12324 = state_12322;(statearr_12324[(7)] = inst_12319);
return statearr_12324;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12322__$1,inst_12320);
} else
{if((state_val_12323 === (1)))
{var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12322__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6439__auto___12499,res,vec__12317,v,p,job,jobs,results))
;return ((function (switch__6424__auto__,c__6439__auto___12499,res,vec__12317,v,p,job,jobs,results){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12328 = [null,null,null,null,null,null,null,null];(statearr_12328[(0)] = state_machine__6425__auto__);
(statearr_12328[(1)] = (1));
return statearr_12328;
});
var state_machine__6425__auto____1 = (function (state_12322){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12322);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12329){if((e12329 instanceof Object))
{var ex__6428__auto__ = e12329;var statearr_12330_12500 = state_12322;(statearr_12330_12500[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12322);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12329;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12501 = state_12322;
state_12322 = G__12501;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12322){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___12499,res,vec__12317,v,p,job,jobs,results))
})();var state__6441__auto__ = (function (){var statearr_12331 = f__6440__auto__.call(null);(statearr_12331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12499);
return statearr_12331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___12499,res,vec__12317,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12332){var vec__12333 = p__12332;var v = cljs.core.nth.call(null,vec__12333,(0),null);var p = cljs.core.nth.call(null,vec__12333,(1),null);var job = vec__12333;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4469__auto___12502 = n;var __12503 = (0);while(true){
if((__12503 < n__4469__auto___12502))
{var G__12334_12504 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12334_12504) {
case "async":
var c__6439__auto___12506 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12503,c__6439__auto___12506,G__12334_12504,n__4469__auto___12502,jobs,results,process,async){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (__12503,c__6439__auto___12506,G__12334_12504,n__4469__auto___12502,jobs,results,process,async){
return (function (state_12347){var state_val_12348 = (state_12347[(1)]);if((state_val_12348 === (7)))
{var inst_12343 = (state_12347[(2)]);var state_12347__$1 = state_12347;var statearr_12349_12507 = state_12347__$1;(statearr_12349_12507[(2)] = inst_12343);
(statearr_12349_12507[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (6)))
{var state_12347__$1 = state_12347;var statearr_12350_12508 = state_12347__$1;(statearr_12350_12508[(2)] = null);
(statearr_12350_12508[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (5)))
{var state_12347__$1 = state_12347;var statearr_12351_12509 = state_12347__$1;(statearr_12351_12509[(2)] = null);
(statearr_12351_12509[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (4)))
{var inst_12337 = (state_12347[(2)]);var inst_12338 = async.call(null,inst_12337);var state_12347__$1 = state_12347;if(cljs.core.truth_(inst_12338))
{var statearr_12352_12510 = state_12347__$1;(statearr_12352_12510[(1)] = (5));
} else
{var statearr_12353_12511 = state_12347__$1;(statearr_12353_12511[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12348 === (3)))
{var inst_12345 = (state_12347[(2)]);var state_12347__$1 = state_12347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12347__$1,inst_12345);
} else
{if((state_val_12348 === (2)))
{var state_12347__$1 = state_12347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12347__$1,(4),jobs);
} else
{if((state_val_12348 === (1)))
{var state_12347__$1 = state_12347;var statearr_12354_12512 = state_12347__$1;(statearr_12354_12512[(2)] = null);
(statearr_12354_12512[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12503,c__6439__auto___12506,G__12334_12504,n__4469__auto___12502,jobs,results,process,async))
;return ((function (__12503,switch__6424__auto__,c__6439__auto___12506,G__12334_12504,n__4469__auto___12502,jobs,results,process,async){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12358 = [null,null,null,null,null,null,null];(statearr_12358[(0)] = state_machine__6425__auto__);
(statearr_12358[(1)] = (1));
return statearr_12358;
});
var state_machine__6425__auto____1 = (function (state_12347){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12347);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12359){if((e12359 instanceof Object))
{var ex__6428__auto__ = e12359;var statearr_12360_12513 = state_12347;(statearr_12360_12513[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12359;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12514 = state_12347;
state_12347 = G__12514;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12347){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(__12503,switch__6424__auto__,c__6439__auto___12506,G__12334_12504,n__4469__auto___12502,jobs,results,process,async))
})();var state__6441__auto__ = (function (){var statearr_12361 = f__6440__auto__.call(null);(statearr_12361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12506);
return statearr_12361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(__12503,c__6439__auto___12506,G__12334_12504,n__4469__auto___12502,jobs,results,process,async))
);

break;
case "compute":
var c__6439__auto___12515 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12503,c__6439__auto___12515,G__12334_12504,n__4469__auto___12502,jobs,results,process,async){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (__12503,c__6439__auto___12515,G__12334_12504,n__4469__auto___12502,jobs,results,process,async){
return (function (state_12374){var state_val_12375 = (state_12374[(1)]);if((state_val_12375 === (7)))
{var inst_12370 = (state_12374[(2)]);var state_12374__$1 = state_12374;var statearr_12376_12516 = state_12374__$1;(statearr_12376_12516[(2)] = inst_12370);
(statearr_12376_12516[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12375 === (6)))
{var state_12374__$1 = state_12374;var statearr_12377_12517 = state_12374__$1;(statearr_12377_12517[(2)] = null);
(statearr_12377_12517[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12375 === (5)))
{var state_12374__$1 = state_12374;var statearr_12378_12518 = state_12374__$1;(statearr_12378_12518[(2)] = null);
(statearr_12378_12518[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12375 === (4)))
{var inst_12364 = (state_12374[(2)]);var inst_12365 = process.call(null,inst_12364);var state_12374__$1 = state_12374;if(cljs.core.truth_(inst_12365))
{var statearr_12379_12519 = state_12374__$1;(statearr_12379_12519[(1)] = (5));
} else
{var statearr_12380_12520 = state_12374__$1;(statearr_12380_12520[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12375 === (3)))
{var inst_12372 = (state_12374[(2)]);var state_12374__$1 = state_12374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12374__$1,inst_12372);
} else
{if((state_val_12375 === (2)))
{var state_12374__$1 = state_12374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12374__$1,(4),jobs);
} else
{if((state_val_12375 === (1)))
{var state_12374__$1 = state_12374;var statearr_12381_12521 = state_12374__$1;(statearr_12381_12521[(2)] = null);
(statearr_12381_12521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12503,c__6439__auto___12515,G__12334_12504,n__4469__auto___12502,jobs,results,process,async))
;return ((function (__12503,switch__6424__auto__,c__6439__auto___12515,G__12334_12504,n__4469__auto___12502,jobs,results,process,async){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12385 = [null,null,null,null,null,null,null];(statearr_12385[(0)] = state_machine__6425__auto__);
(statearr_12385[(1)] = (1));
return statearr_12385;
});
var state_machine__6425__auto____1 = (function (state_12374){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12374);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12386){if((e12386 instanceof Object))
{var ex__6428__auto__ = e12386;var statearr_12387_12522 = state_12374;(statearr_12387_12522[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12374);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12386;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12523 = state_12374;
state_12374 = G__12523;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12374){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(__12503,switch__6424__auto__,c__6439__auto___12515,G__12334_12504,n__4469__auto___12502,jobs,results,process,async))
})();var state__6441__auto__ = (function (){var statearr_12388 = f__6440__auto__.call(null);(statearr_12388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12515);
return statearr_12388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(__12503,c__6439__auto___12515,G__12334_12504,n__4469__auto___12502,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12524 = (__12503 + (1));
__12503 = G__12524;
continue;
}
} else
{}
break;
}
var c__6439__auto___12525 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___12525,jobs,results,process,async){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___12525,jobs,results,process,async){
return (function (state_12410){var state_val_12411 = (state_12410[(1)]);if((state_val_12411 === (9)))
{var inst_12403 = (state_12410[(2)]);var state_12410__$1 = (function (){var statearr_12412 = state_12410;(statearr_12412[(7)] = inst_12403);
return statearr_12412;
})();var statearr_12413_12526 = state_12410__$1;(statearr_12413_12526[(2)] = null);
(statearr_12413_12526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12411 === (8)))
{var inst_12396 = (state_12410[(8)]);var inst_12401 = (state_12410[(2)]);var state_12410__$1 = (function (){var statearr_12414 = state_12410;(statearr_12414[(9)] = inst_12401);
return statearr_12414;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12410__$1,(9),results,inst_12396);
} else
{if((state_val_12411 === (7)))
{var inst_12406 = (state_12410[(2)]);var state_12410__$1 = state_12410;var statearr_12415_12527 = state_12410__$1;(statearr_12415_12527[(2)] = inst_12406);
(statearr_12415_12527[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12411 === (6)))
{var inst_12396 = (state_12410[(8)]);var inst_12391 = (state_12410[(10)]);var inst_12396__$1 = cljs.core.async.chan.call(null,(1));var inst_12397 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12398 = [inst_12391,inst_12396__$1];var inst_12399 = (new cljs.core.PersistentVector(null,2,(5),inst_12397,inst_12398,null));var state_12410__$1 = (function (){var statearr_12416 = state_12410;(statearr_12416[(8)] = inst_12396__$1);
return statearr_12416;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12410__$1,(8),jobs,inst_12399);
} else
{if((state_val_12411 === (5)))
{var inst_12394 = cljs.core.async.close_BANG_.call(null,jobs);var state_12410__$1 = state_12410;var statearr_12417_12528 = state_12410__$1;(statearr_12417_12528[(2)] = inst_12394);
(statearr_12417_12528[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12411 === (4)))
{var inst_12391 = (state_12410[(10)]);var inst_12391__$1 = (state_12410[(2)]);var inst_12392 = (inst_12391__$1 == null);var state_12410__$1 = (function (){var statearr_12418 = state_12410;(statearr_12418[(10)] = inst_12391__$1);
return statearr_12418;
})();if(cljs.core.truth_(inst_12392))
{var statearr_12419_12529 = state_12410__$1;(statearr_12419_12529[(1)] = (5));
} else
{var statearr_12420_12530 = state_12410__$1;(statearr_12420_12530[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12411 === (3)))
{var inst_12408 = (state_12410[(2)]);var state_12410__$1 = state_12410;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12410__$1,inst_12408);
} else
{if((state_val_12411 === (2)))
{var state_12410__$1 = state_12410;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12410__$1,(4),from);
} else
{if((state_val_12411 === (1)))
{var state_12410__$1 = state_12410;var statearr_12421_12531 = state_12410__$1;(statearr_12421_12531[(2)] = null);
(statearr_12421_12531[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___12525,jobs,results,process,async))
;return ((function (switch__6424__auto__,c__6439__auto___12525,jobs,results,process,async){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12425 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12425[(0)] = state_machine__6425__auto__);
(statearr_12425[(1)] = (1));
return statearr_12425;
});
var state_machine__6425__auto____1 = (function (state_12410){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12410);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12426){if((e12426 instanceof Object))
{var ex__6428__auto__ = e12426;var statearr_12427_12532 = state_12410;(statearr_12427_12532[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12410);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12426;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12533 = state_12410;
state_12410 = G__12533;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12410){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___12525,jobs,results,process,async))
})();var state__6441__auto__ = (function (){var statearr_12428 = f__6440__auto__.call(null);(statearr_12428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12525);
return statearr_12428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___12525,jobs,results,process,async))
);
var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__,jobs,results,process,async){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__,jobs,results,process,async){
return (function (state_12466){var state_val_12467 = (state_12466[(1)]);if((state_val_12467 === (7)))
{var inst_12462 = (state_12466[(2)]);var state_12466__$1 = state_12466;var statearr_12468_12534 = state_12466__$1;(statearr_12468_12534[(2)] = inst_12462);
(statearr_12468_12534[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (20)))
{var state_12466__$1 = state_12466;var statearr_12469_12535 = state_12466__$1;(statearr_12469_12535[(2)] = null);
(statearr_12469_12535[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (1)))
{var state_12466__$1 = state_12466;var statearr_12470_12536 = state_12466__$1;(statearr_12470_12536[(2)] = null);
(statearr_12470_12536[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (4)))
{var inst_12431 = (state_12466[(7)]);var inst_12431__$1 = (state_12466[(2)]);var inst_12432 = (inst_12431__$1 == null);var state_12466__$1 = (function (){var statearr_12471 = state_12466;(statearr_12471[(7)] = inst_12431__$1);
return statearr_12471;
})();if(cljs.core.truth_(inst_12432))
{var statearr_12472_12537 = state_12466__$1;(statearr_12472_12537[(1)] = (5));
} else
{var statearr_12473_12538 = state_12466__$1;(statearr_12473_12538[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (15)))
{var inst_12444 = (state_12466[(8)]);var state_12466__$1 = state_12466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12466__$1,(18),to,inst_12444);
} else
{if((state_val_12467 === (21)))
{var inst_12457 = (state_12466[(2)]);var state_12466__$1 = state_12466;var statearr_12474_12539 = state_12466__$1;(statearr_12474_12539[(2)] = inst_12457);
(statearr_12474_12539[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (13)))
{var inst_12459 = (state_12466[(2)]);var state_12466__$1 = (function (){var statearr_12475 = state_12466;(statearr_12475[(9)] = inst_12459);
return statearr_12475;
})();var statearr_12476_12540 = state_12466__$1;(statearr_12476_12540[(2)] = null);
(statearr_12476_12540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (6)))
{var inst_12431 = (state_12466[(7)]);var state_12466__$1 = state_12466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12466__$1,(11),inst_12431);
} else
{if((state_val_12467 === (17)))
{var inst_12452 = (state_12466[(2)]);var state_12466__$1 = state_12466;if(cljs.core.truth_(inst_12452))
{var statearr_12477_12541 = state_12466__$1;(statearr_12477_12541[(1)] = (19));
} else
{var statearr_12478_12542 = state_12466__$1;(statearr_12478_12542[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (3)))
{var inst_12464 = (state_12466[(2)]);var state_12466__$1 = state_12466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12466__$1,inst_12464);
} else
{if((state_val_12467 === (12)))
{var inst_12441 = (state_12466[(10)]);var state_12466__$1 = state_12466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12466__$1,(14),inst_12441);
} else
{if((state_val_12467 === (2)))
{var state_12466__$1 = state_12466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12466__$1,(4),results);
} else
{if((state_val_12467 === (19)))
{var state_12466__$1 = state_12466;var statearr_12479_12543 = state_12466__$1;(statearr_12479_12543[(2)] = null);
(statearr_12479_12543[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (11)))
{var inst_12441 = (state_12466[(2)]);var state_12466__$1 = (function (){var statearr_12480 = state_12466;(statearr_12480[(10)] = inst_12441);
return statearr_12480;
})();var statearr_12481_12544 = state_12466__$1;(statearr_12481_12544[(2)] = null);
(statearr_12481_12544[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (9)))
{var state_12466__$1 = state_12466;var statearr_12482_12545 = state_12466__$1;(statearr_12482_12545[(2)] = null);
(statearr_12482_12545[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (5)))
{var state_12466__$1 = state_12466;if(cljs.core.truth_(close_QMARK_))
{var statearr_12483_12546 = state_12466__$1;(statearr_12483_12546[(1)] = (8));
} else
{var statearr_12484_12547 = state_12466__$1;(statearr_12484_12547[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (14)))
{var inst_12446 = (state_12466[(11)]);var inst_12444 = (state_12466[(8)]);var inst_12444__$1 = (state_12466[(2)]);var inst_12445 = (inst_12444__$1 == null);var inst_12446__$1 = cljs.core.not.call(null,inst_12445);var state_12466__$1 = (function (){var statearr_12485 = state_12466;(statearr_12485[(11)] = inst_12446__$1);
(statearr_12485[(8)] = inst_12444__$1);
return statearr_12485;
})();if(inst_12446__$1)
{var statearr_12486_12548 = state_12466__$1;(statearr_12486_12548[(1)] = (15));
} else
{var statearr_12487_12549 = state_12466__$1;(statearr_12487_12549[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (16)))
{var inst_12446 = (state_12466[(11)]);var state_12466__$1 = state_12466;var statearr_12488_12550 = state_12466__$1;(statearr_12488_12550[(2)] = inst_12446);
(statearr_12488_12550[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (10)))
{var inst_12438 = (state_12466[(2)]);var state_12466__$1 = state_12466;var statearr_12489_12551 = state_12466__$1;(statearr_12489_12551[(2)] = inst_12438);
(statearr_12489_12551[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (18)))
{var inst_12449 = (state_12466[(2)]);var state_12466__$1 = state_12466;var statearr_12490_12552 = state_12466__$1;(statearr_12490_12552[(2)] = inst_12449);
(statearr_12490_12552[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (8)))
{var inst_12435 = cljs.core.async.close_BANG_.call(null,to);var state_12466__$1 = state_12466;var statearr_12491_12553 = state_12466__$1;(statearr_12491_12553[(2)] = inst_12435);
(statearr_12491_12553[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto__,jobs,results,process,async))
;return ((function (switch__6424__auto__,c__6439__auto__,jobs,results,process,async){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12495 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12495[(0)] = state_machine__6425__auto__);
(statearr_12495[(1)] = (1));
return statearr_12495;
});
var state_machine__6425__auto____1 = (function (state_12466){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12466);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12496){if((e12496 instanceof Object))
{var ex__6428__auto__ = e12496;var statearr_12497_12554 = state_12466;(statearr_12497_12554[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12466);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12496;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12555 = state_12466;
state_12466 = G__12555;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12466){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__,jobs,results,process,async))
})();var state__6441__auto__ = (function (){var statearr_12498 = f__6440__auto__.call(null);(statearr_12498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_12498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__,jobs,results,process,async))
);
return c__6439__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6439__auto___12656 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___12656,tc,fc){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___12656,tc,fc){
return (function (state_12631){var state_val_12632 = (state_12631[(1)]);if((state_val_12632 === (7)))
{var inst_12627 = (state_12631[(2)]);var state_12631__$1 = state_12631;var statearr_12633_12657 = state_12631__$1;(statearr_12633_12657[(2)] = inst_12627);
(statearr_12633_12657[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12632 === (1)))
{var state_12631__$1 = state_12631;var statearr_12634_12658 = state_12631__$1;(statearr_12634_12658[(2)] = null);
(statearr_12634_12658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12632 === (4)))
{var inst_12608 = (state_12631[(7)]);var inst_12608__$1 = (state_12631[(2)]);var inst_12609 = (inst_12608__$1 == null);var state_12631__$1 = (function (){var statearr_12635 = state_12631;(statearr_12635[(7)] = inst_12608__$1);
return statearr_12635;
})();if(cljs.core.truth_(inst_12609))
{var statearr_12636_12659 = state_12631__$1;(statearr_12636_12659[(1)] = (5));
} else
{var statearr_12637_12660 = state_12631__$1;(statearr_12637_12660[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12632 === (13)))
{var state_12631__$1 = state_12631;var statearr_12638_12661 = state_12631__$1;(statearr_12638_12661[(2)] = null);
(statearr_12638_12661[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12632 === (6)))
{var inst_12608 = (state_12631[(7)]);var inst_12614 = p.call(null,inst_12608);var state_12631__$1 = state_12631;if(cljs.core.truth_(inst_12614))
{var statearr_12639_12662 = state_12631__$1;(statearr_12639_12662[(1)] = (9));
} else
{var statearr_12640_12663 = state_12631__$1;(statearr_12640_12663[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12632 === (3)))
{var inst_12629 = (state_12631[(2)]);var state_12631__$1 = state_12631;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12631__$1,inst_12629);
} else
{if((state_val_12632 === (12)))
{var state_12631__$1 = state_12631;var statearr_12641_12664 = state_12631__$1;(statearr_12641_12664[(2)] = null);
(statearr_12641_12664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12632 === (2)))
{var state_12631__$1 = state_12631;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12631__$1,(4),ch);
} else
{if((state_val_12632 === (11)))
{var inst_12608 = (state_12631[(7)]);var inst_12618 = (state_12631[(2)]);var state_12631__$1 = state_12631;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12631__$1,(8),inst_12618,inst_12608);
} else
{if((state_val_12632 === (9)))
{var state_12631__$1 = state_12631;var statearr_12642_12665 = state_12631__$1;(statearr_12642_12665[(2)] = tc);
(statearr_12642_12665[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12632 === (5)))
{var inst_12611 = cljs.core.async.close_BANG_.call(null,tc);var inst_12612 = cljs.core.async.close_BANG_.call(null,fc);var state_12631__$1 = (function (){var statearr_12643 = state_12631;(statearr_12643[(8)] = inst_12611);
return statearr_12643;
})();var statearr_12644_12666 = state_12631__$1;(statearr_12644_12666[(2)] = inst_12612);
(statearr_12644_12666[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12632 === (14)))
{var inst_12625 = (state_12631[(2)]);var state_12631__$1 = state_12631;var statearr_12645_12667 = state_12631__$1;(statearr_12645_12667[(2)] = inst_12625);
(statearr_12645_12667[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12632 === (10)))
{var state_12631__$1 = state_12631;var statearr_12646_12668 = state_12631__$1;(statearr_12646_12668[(2)] = fc);
(statearr_12646_12668[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12632 === (8)))
{var inst_12620 = (state_12631[(2)]);var state_12631__$1 = state_12631;if(cljs.core.truth_(inst_12620))
{var statearr_12647_12669 = state_12631__$1;(statearr_12647_12669[(1)] = (12));
} else
{var statearr_12648_12670 = state_12631__$1;(statearr_12648_12670[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___12656,tc,fc))
;return ((function (switch__6424__auto__,c__6439__auto___12656,tc,fc){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12652 = [null,null,null,null,null,null,null,null,null];(statearr_12652[(0)] = state_machine__6425__auto__);
(statearr_12652[(1)] = (1));
return statearr_12652;
});
var state_machine__6425__auto____1 = (function (state_12631){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12631);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12653){if((e12653 instanceof Object))
{var ex__6428__auto__ = e12653;var statearr_12654_12671 = state_12631;(statearr_12654_12671[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12631);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12653;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12672 = state_12631;
state_12631 = G__12672;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12631){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___12656,tc,fc))
})();var state__6441__auto__ = (function (){var statearr_12655 = f__6440__auto__.call(null);(statearr_12655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12656);
return statearr_12655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___12656,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__){
return (function (state_12719){var state_val_12720 = (state_12719[(1)]);if((state_val_12720 === (7)))
{var inst_12715 = (state_12719[(2)]);var state_12719__$1 = state_12719;var statearr_12721_12737 = state_12719__$1;(statearr_12721_12737[(2)] = inst_12715);
(statearr_12721_12737[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12720 === (6)))
{var inst_12705 = (state_12719[(7)]);var inst_12708 = (state_12719[(8)]);var inst_12712 = f.call(null,inst_12705,inst_12708);var inst_12705__$1 = inst_12712;var state_12719__$1 = (function (){var statearr_12722 = state_12719;(statearr_12722[(7)] = inst_12705__$1);
return statearr_12722;
})();var statearr_12723_12738 = state_12719__$1;(statearr_12723_12738[(2)] = null);
(statearr_12723_12738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12720 === (5)))
{var inst_12705 = (state_12719[(7)]);var state_12719__$1 = state_12719;var statearr_12724_12739 = state_12719__$1;(statearr_12724_12739[(2)] = inst_12705);
(statearr_12724_12739[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12720 === (4)))
{var inst_12708 = (state_12719[(8)]);var inst_12708__$1 = (state_12719[(2)]);var inst_12709 = (inst_12708__$1 == null);var state_12719__$1 = (function (){var statearr_12725 = state_12719;(statearr_12725[(8)] = inst_12708__$1);
return statearr_12725;
})();if(cljs.core.truth_(inst_12709))
{var statearr_12726_12740 = state_12719__$1;(statearr_12726_12740[(1)] = (5));
} else
{var statearr_12727_12741 = state_12719__$1;(statearr_12727_12741[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12720 === (3)))
{var inst_12717 = (state_12719[(2)]);var state_12719__$1 = state_12719;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12719__$1,inst_12717);
} else
{if((state_val_12720 === (2)))
{var state_12719__$1 = state_12719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12719__$1,(4),ch);
} else
{if((state_val_12720 === (1)))
{var inst_12705 = init;var state_12719__$1 = (function (){var statearr_12728 = state_12719;(statearr_12728[(7)] = inst_12705);
return statearr_12728;
})();var statearr_12729_12742 = state_12719__$1;(statearr_12729_12742[(2)] = null);
(statearr_12729_12742[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6439__auto__))
;return ((function (switch__6424__auto__,c__6439__auto__){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12733 = [null,null,null,null,null,null,null,null,null];(statearr_12733[(0)] = state_machine__6425__auto__);
(statearr_12733[(1)] = (1));
return statearr_12733;
});
var state_machine__6425__auto____1 = (function (state_12719){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12719);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12734){if((e12734 instanceof Object))
{var ex__6428__auto__ = e12734;var statearr_12735_12743 = state_12719;(statearr_12735_12743[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12719);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12734;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12744 = state_12719;
state_12719 = G__12744;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12719){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__))
})();var state__6441__auto__ = (function (){var statearr_12736 = f__6440__auto__.call(null);(statearr_12736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_12736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__))
);
return c__6439__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__){
return (function (state_12818){var state_val_12819 = (state_12818[(1)]);if((state_val_12819 === (7)))
{var inst_12800 = (state_12818[(2)]);var state_12818__$1 = state_12818;var statearr_12820_12843 = state_12818__$1;(statearr_12820_12843[(2)] = inst_12800);
(statearr_12820_12843[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12819 === (1)))
{var inst_12794 = cljs.core.seq.call(null,coll);var inst_12795 = inst_12794;var state_12818__$1 = (function (){var statearr_12821 = state_12818;(statearr_12821[(7)] = inst_12795);
return statearr_12821;
})();var statearr_12822_12844 = state_12818__$1;(statearr_12822_12844[(2)] = null);
(statearr_12822_12844[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12819 === (4)))
{var inst_12795 = (state_12818[(7)]);var inst_12798 = cljs.core.first.call(null,inst_12795);var state_12818__$1 = state_12818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12818__$1,(7),ch,inst_12798);
} else
{if((state_val_12819 === (13)))
{var inst_12812 = (state_12818[(2)]);var state_12818__$1 = state_12818;var statearr_12823_12845 = state_12818__$1;(statearr_12823_12845[(2)] = inst_12812);
(statearr_12823_12845[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12819 === (6)))
{var inst_12803 = (state_12818[(2)]);var state_12818__$1 = state_12818;if(cljs.core.truth_(inst_12803))
{var statearr_12824_12846 = state_12818__$1;(statearr_12824_12846[(1)] = (8));
} else
{var statearr_12825_12847 = state_12818__$1;(statearr_12825_12847[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12819 === (3)))
{var inst_12816 = (state_12818[(2)]);var state_12818__$1 = state_12818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12818__$1,inst_12816);
} else
{if((state_val_12819 === (12)))
{var state_12818__$1 = state_12818;var statearr_12826_12848 = state_12818__$1;(statearr_12826_12848[(2)] = null);
(statearr_12826_12848[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12819 === (2)))
{var inst_12795 = (state_12818[(7)]);var state_12818__$1 = state_12818;if(cljs.core.truth_(inst_12795))
{var statearr_12827_12849 = state_12818__$1;(statearr_12827_12849[(1)] = (4));
} else
{var statearr_12828_12850 = state_12818__$1;(statearr_12828_12850[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12819 === (11)))
{var inst_12809 = cljs.core.async.close_BANG_.call(null,ch);var state_12818__$1 = state_12818;var statearr_12829_12851 = state_12818__$1;(statearr_12829_12851[(2)] = inst_12809);
(statearr_12829_12851[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12819 === (9)))
{var state_12818__$1 = state_12818;if(cljs.core.truth_(close_QMARK_))
{var statearr_12830_12852 = state_12818__$1;(statearr_12830_12852[(1)] = (11));
} else
{var statearr_12831_12853 = state_12818__$1;(statearr_12831_12853[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12819 === (5)))
{var inst_12795 = (state_12818[(7)]);var state_12818__$1 = state_12818;var statearr_12832_12854 = state_12818__$1;(statearr_12832_12854[(2)] = inst_12795);
(statearr_12832_12854[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12819 === (10)))
{var inst_12814 = (state_12818[(2)]);var state_12818__$1 = state_12818;var statearr_12833_12855 = state_12818__$1;(statearr_12833_12855[(2)] = inst_12814);
(statearr_12833_12855[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12819 === (8)))
{var inst_12795 = (state_12818[(7)]);var inst_12805 = cljs.core.next.call(null,inst_12795);var inst_12795__$1 = inst_12805;var state_12818__$1 = (function (){var statearr_12834 = state_12818;(statearr_12834[(7)] = inst_12795__$1);
return statearr_12834;
})();var statearr_12835_12856 = state_12818__$1;(statearr_12835_12856[(2)] = null);
(statearr_12835_12856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto__))
;return ((function (switch__6424__auto__,c__6439__auto__){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12839 = [null,null,null,null,null,null,null,null];(statearr_12839[(0)] = state_machine__6425__auto__);
(statearr_12839[(1)] = (1));
return statearr_12839;
});
var state_machine__6425__auto____1 = (function (state_12818){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12818);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12840){if((e12840 instanceof Object))
{var ex__6428__auto__ = e12840;var statearr_12841_12857 = state_12818;(statearr_12841_12857[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12840;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12858 = state_12818;
state_12818 = G__12858;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12818){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__))
})();var state__6441__auto__ = (function (){var statearr_12842 = f__6440__auto__.call(null);(statearr_12842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_12842;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__))
);
return c__6439__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12860 = {};return obj12860;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3587__auto__ = _;if(and__3587__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3587__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4236__auto__ = (((_ == null))?null:_);return (function (){var or__3599__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12862 = {};return obj12862;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13084 = (function (cs,ch,mult,meta13085){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13085 = meta13085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13084.cljs$lang$type = true;
cljs.core.async.t13084.cljs$lang$ctorStr = "cljs.core.async/t13084";
cljs.core.async.t13084.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t13084");
});})(cs))
;
cljs.core.async.t13084.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13084.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13084.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13084.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13084.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13084.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13086){var self__ = this;
var _13086__$1 = this;return self__.meta13085;
});})(cs))
;
cljs.core.async.t13084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13086,meta13085__$1){var self__ = this;
var _13086__$1 = this;return (new cljs.core.async.t13084(self__.cs,self__.ch,self__.mult,meta13085__$1));
});})(cs))
;
cljs.core.async.__GT_t13084 = ((function (cs){
return (function __GT_t13084(cs__$1,ch__$1,mult__$1,meta13085){return (new cljs.core.async.t13084(cs__$1,ch__$1,mult__$1,meta13085));
});})(cs))
;
}
return (new cljs.core.async.t13084(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6439__auto___13305 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___13305,cs,m,dchan,dctr,done){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___13305,cs,m,dchan,dctr,done){
return (function (state_13217){var state_val_13218 = (state_13217[(1)]);if((state_val_13218 === (7)))
{var inst_13213 = (state_13217[(2)]);var state_13217__$1 = state_13217;var statearr_13219_13306 = state_13217__$1;(statearr_13219_13306[(2)] = inst_13213);
(statearr_13219_13306[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (20)))
{var inst_13118 = (state_13217[(7)]);var inst_13128 = cljs.core.first.call(null,inst_13118);var inst_13129 = cljs.core.nth.call(null,inst_13128,(0),null);var inst_13130 = cljs.core.nth.call(null,inst_13128,(1),null);var state_13217__$1 = (function (){var statearr_13220 = state_13217;(statearr_13220[(8)] = inst_13129);
return statearr_13220;
})();if(cljs.core.truth_(inst_13130))
{var statearr_13221_13307 = state_13217__$1;(statearr_13221_13307[(1)] = (22));
} else
{var statearr_13222_13308 = state_13217__$1;(statearr_13222_13308[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (27)))
{var inst_13165 = (state_13217[(9)]);var inst_13160 = (state_13217[(10)]);var inst_13089 = (state_13217[(11)]);var inst_13158 = (state_13217[(12)]);var inst_13165__$1 = cljs.core._nth.call(null,inst_13158,inst_13160);var inst_13166 = cljs.core.async.put_BANG_.call(null,inst_13165__$1,inst_13089,done);var state_13217__$1 = (function (){var statearr_13223 = state_13217;(statearr_13223[(9)] = inst_13165__$1);
return statearr_13223;
})();if(cljs.core.truth_(inst_13166))
{var statearr_13224_13309 = state_13217__$1;(statearr_13224_13309[(1)] = (30));
} else
{var statearr_13225_13310 = state_13217__$1;(statearr_13225_13310[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (1)))
{var state_13217__$1 = state_13217;var statearr_13226_13311 = state_13217__$1;(statearr_13226_13311[(2)] = null);
(statearr_13226_13311[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (24)))
{var inst_13118 = (state_13217[(7)]);var inst_13135 = (state_13217[(2)]);var inst_13136 = cljs.core.next.call(null,inst_13118);var inst_13098 = inst_13136;var inst_13099 = null;var inst_13100 = (0);var inst_13101 = (0);var state_13217__$1 = (function (){var statearr_13227 = state_13217;(statearr_13227[(13)] = inst_13135);
(statearr_13227[(14)] = inst_13098);
(statearr_13227[(15)] = inst_13101);
(statearr_13227[(16)] = inst_13099);
(statearr_13227[(17)] = inst_13100);
return statearr_13227;
})();var statearr_13228_13312 = state_13217__$1;(statearr_13228_13312[(2)] = null);
(statearr_13228_13312[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (39)))
{var state_13217__$1 = state_13217;var statearr_13232_13313 = state_13217__$1;(statearr_13232_13313[(2)] = null);
(statearr_13232_13313[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (4)))
{var inst_13089 = (state_13217[(11)]);var inst_13089__$1 = (state_13217[(2)]);var inst_13090 = (inst_13089__$1 == null);var state_13217__$1 = (function (){var statearr_13233 = state_13217;(statearr_13233[(11)] = inst_13089__$1);
return statearr_13233;
})();if(cljs.core.truth_(inst_13090))
{var statearr_13234_13314 = state_13217__$1;(statearr_13234_13314[(1)] = (5));
} else
{var statearr_13235_13315 = state_13217__$1;(statearr_13235_13315[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (15)))
{var inst_13098 = (state_13217[(14)]);var inst_13101 = (state_13217[(15)]);var inst_13099 = (state_13217[(16)]);var inst_13100 = (state_13217[(17)]);var inst_13114 = (state_13217[(2)]);var inst_13115 = (inst_13101 + (1));var tmp13229 = inst_13098;var tmp13230 = inst_13099;var tmp13231 = inst_13100;var inst_13098__$1 = tmp13229;var inst_13099__$1 = tmp13230;var inst_13100__$1 = tmp13231;var inst_13101__$1 = inst_13115;var state_13217__$1 = (function (){var statearr_13236 = state_13217;(statearr_13236[(14)] = inst_13098__$1);
(statearr_13236[(15)] = inst_13101__$1);
(statearr_13236[(16)] = inst_13099__$1);
(statearr_13236[(17)] = inst_13100__$1);
(statearr_13236[(18)] = inst_13114);
return statearr_13236;
})();var statearr_13237_13316 = state_13217__$1;(statearr_13237_13316[(2)] = null);
(statearr_13237_13316[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (21)))
{var inst_13139 = (state_13217[(2)]);var state_13217__$1 = state_13217;var statearr_13241_13317 = state_13217__$1;(statearr_13241_13317[(2)] = inst_13139);
(statearr_13241_13317[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (31)))
{var inst_13165 = (state_13217[(9)]);var inst_13169 = done.call(null,null);var inst_13170 = cljs.core.async.untap_STAR_.call(null,m,inst_13165);var state_13217__$1 = (function (){var statearr_13242 = state_13217;(statearr_13242[(19)] = inst_13169);
return statearr_13242;
})();var statearr_13243_13318 = state_13217__$1;(statearr_13243_13318[(2)] = inst_13170);
(statearr_13243_13318[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (32)))
{var inst_13159 = (state_13217[(20)]);var inst_13160 = (state_13217[(10)]);var inst_13157 = (state_13217[(21)]);var inst_13158 = (state_13217[(12)]);var inst_13172 = (state_13217[(2)]);var inst_13173 = (inst_13160 + (1));var tmp13238 = inst_13159;var tmp13239 = inst_13157;var tmp13240 = inst_13158;var inst_13157__$1 = tmp13239;var inst_13158__$1 = tmp13240;var inst_13159__$1 = tmp13238;var inst_13160__$1 = inst_13173;var state_13217__$1 = (function (){var statearr_13244 = state_13217;(statearr_13244[(20)] = inst_13159__$1);
(statearr_13244[(10)] = inst_13160__$1);
(statearr_13244[(22)] = inst_13172);
(statearr_13244[(21)] = inst_13157__$1);
(statearr_13244[(12)] = inst_13158__$1);
return statearr_13244;
})();var statearr_13245_13319 = state_13217__$1;(statearr_13245_13319[(2)] = null);
(statearr_13245_13319[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (40)))
{var inst_13185 = (state_13217[(23)]);var inst_13189 = done.call(null,null);var inst_13190 = cljs.core.async.untap_STAR_.call(null,m,inst_13185);var state_13217__$1 = (function (){var statearr_13246 = state_13217;(statearr_13246[(24)] = inst_13189);
return statearr_13246;
})();var statearr_13247_13320 = state_13217__$1;(statearr_13247_13320[(2)] = inst_13190);
(statearr_13247_13320[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (33)))
{var inst_13176 = (state_13217[(25)]);var inst_13178 = cljs.core.chunked_seq_QMARK_.call(null,inst_13176);var state_13217__$1 = state_13217;if(inst_13178)
{var statearr_13248_13321 = state_13217__$1;(statearr_13248_13321[(1)] = (36));
} else
{var statearr_13249_13322 = state_13217__$1;(statearr_13249_13322[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (13)))
{var inst_13108 = (state_13217[(26)]);var inst_13111 = cljs.core.async.close_BANG_.call(null,inst_13108);var state_13217__$1 = state_13217;var statearr_13250_13323 = state_13217__$1;(statearr_13250_13323[(2)] = inst_13111);
(statearr_13250_13323[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (22)))
{var inst_13129 = (state_13217[(8)]);var inst_13132 = cljs.core.async.close_BANG_.call(null,inst_13129);var state_13217__$1 = state_13217;var statearr_13251_13324 = state_13217__$1;(statearr_13251_13324[(2)] = inst_13132);
(statearr_13251_13324[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (36)))
{var inst_13176 = (state_13217[(25)]);var inst_13180 = cljs.core.chunk_first.call(null,inst_13176);var inst_13181 = cljs.core.chunk_rest.call(null,inst_13176);var inst_13182 = cljs.core.count.call(null,inst_13180);var inst_13157 = inst_13181;var inst_13158 = inst_13180;var inst_13159 = inst_13182;var inst_13160 = (0);var state_13217__$1 = (function (){var statearr_13252 = state_13217;(statearr_13252[(20)] = inst_13159);
(statearr_13252[(10)] = inst_13160);
(statearr_13252[(21)] = inst_13157);
(statearr_13252[(12)] = inst_13158);
return statearr_13252;
})();var statearr_13253_13325 = state_13217__$1;(statearr_13253_13325[(2)] = null);
(statearr_13253_13325[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (41)))
{var inst_13176 = (state_13217[(25)]);var inst_13192 = (state_13217[(2)]);var inst_13193 = cljs.core.next.call(null,inst_13176);var inst_13157 = inst_13193;var inst_13158 = null;var inst_13159 = (0);var inst_13160 = (0);var state_13217__$1 = (function (){var statearr_13254 = state_13217;(statearr_13254[(20)] = inst_13159);
(statearr_13254[(10)] = inst_13160);
(statearr_13254[(27)] = inst_13192);
(statearr_13254[(21)] = inst_13157);
(statearr_13254[(12)] = inst_13158);
return statearr_13254;
})();var statearr_13255_13326 = state_13217__$1;(statearr_13255_13326[(2)] = null);
(statearr_13255_13326[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (43)))
{var state_13217__$1 = state_13217;var statearr_13256_13327 = state_13217__$1;(statearr_13256_13327[(2)] = null);
(statearr_13256_13327[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (29)))
{var inst_13201 = (state_13217[(2)]);var state_13217__$1 = state_13217;var statearr_13257_13328 = state_13217__$1;(statearr_13257_13328[(2)] = inst_13201);
(statearr_13257_13328[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (44)))
{var inst_13210 = (state_13217[(2)]);var state_13217__$1 = (function (){var statearr_13258 = state_13217;(statearr_13258[(28)] = inst_13210);
return statearr_13258;
})();var statearr_13259_13329 = state_13217__$1;(statearr_13259_13329[(2)] = null);
(statearr_13259_13329[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (6)))
{var inst_13149 = (state_13217[(29)]);var inst_13148 = cljs.core.deref.call(null,cs);var inst_13149__$1 = cljs.core.keys.call(null,inst_13148);var inst_13150 = cljs.core.count.call(null,inst_13149__$1);var inst_13151 = cljs.core.reset_BANG_.call(null,dctr,inst_13150);var inst_13156 = cljs.core.seq.call(null,inst_13149__$1);var inst_13157 = inst_13156;var inst_13158 = null;var inst_13159 = (0);var inst_13160 = (0);var state_13217__$1 = (function (){var statearr_13260 = state_13217;(statearr_13260[(20)] = inst_13159);
(statearr_13260[(30)] = inst_13151);
(statearr_13260[(10)] = inst_13160);
(statearr_13260[(21)] = inst_13157);
(statearr_13260[(12)] = inst_13158);
(statearr_13260[(29)] = inst_13149__$1);
return statearr_13260;
})();var statearr_13261_13330 = state_13217__$1;(statearr_13261_13330[(2)] = null);
(statearr_13261_13330[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (28)))
{var inst_13176 = (state_13217[(25)]);var inst_13157 = (state_13217[(21)]);var inst_13176__$1 = cljs.core.seq.call(null,inst_13157);var state_13217__$1 = (function (){var statearr_13262 = state_13217;(statearr_13262[(25)] = inst_13176__$1);
return statearr_13262;
})();if(inst_13176__$1)
{var statearr_13263_13331 = state_13217__$1;(statearr_13263_13331[(1)] = (33));
} else
{var statearr_13264_13332 = state_13217__$1;(statearr_13264_13332[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (25)))
{var inst_13159 = (state_13217[(20)]);var inst_13160 = (state_13217[(10)]);var inst_13162 = (inst_13160 < inst_13159);var inst_13163 = inst_13162;var state_13217__$1 = state_13217;if(cljs.core.truth_(inst_13163))
{var statearr_13265_13333 = state_13217__$1;(statearr_13265_13333[(1)] = (27));
} else
{var statearr_13266_13334 = state_13217__$1;(statearr_13266_13334[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (34)))
{var state_13217__$1 = state_13217;var statearr_13267_13335 = state_13217__$1;(statearr_13267_13335[(2)] = null);
(statearr_13267_13335[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (17)))
{var state_13217__$1 = state_13217;var statearr_13268_13336 = state_13217__$1;(statearr_13268_13336[(2)] = null);
(statearr_13268_13336[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (3)))
{var inst_13215 = (state_13217[(2)]);var state_13217__$1 = state_13217;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13217__$1,inst_13215);
} else
{if((state_val_13218 === (12)))
{var inst_13144 = (state_13217[(2)]);var state_13217__$1 = state_13217;var statearr_13269_13337 = state_13217__$1;(statearr_13269_13337[(2)] = inst_13144);
(statearr_13269_13337[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (2)))
{var state_13217__$1 = state_13217;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13217__$1,(4),ch);
} else
{if((state_val_13218 === (23)))
{var state_13217__$1 = state_13217;var statearr_13270_13338 = state_13217__$1;(statearr_13270_13338[(2)] = null);
(statearr_13270_13338[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (35)))
{var inst_13199 = (state_13217[(2)]);var state_13217__$1 = state_13217;var statearr_13271_13339 = state_13217__$1;(statearr_13271_13339[(2)] = inst_13199);
(statearr_13271_13339[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (19)))
{var inst_13118 = (state_13217[(7)]);var inst_13122 = cljs.core.chunk_first.call(null,inst_13118);var inst_13123 = cljs.core.chunk_rest.call(null,inst_13118);var inst_13124 = cljs.core.count.call(null,inst_13122);var inst_13098 = inst_13123;var inst_13099 = inst_13122;var inst_13100 = inst_13124;var inst_13101 = (0);var state_13217__$1 = (function (){var statearr_13272 = state_13217;(statearr_13272[(14)] = inst_13098);
(statearr_13272[(15)] = inst_13101);
(statearr_13272[(16)] = inst_13099);
(statearr_13272[(17)] = inst_13100);
return statearr_13272;
})();var statearr_13273_13340 = state_13217__$1;(statearr_13273_13340[(2)] = null);
(statearr_13273_13340[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (11)))
{var inst_13098 = (state_13217[(14)]);var inst_13118 = (state_13217[(7)]);var inst_13118__$1 = cljs.core.seq.call(null,inst_13098);var state_13217__$1 = (function (){var statearr_13274 = state_13217;(statearr_13274[(7)] = inst_13118__$1);
return statearr_13274;
})();if(inst_13118__$1)
{var statearr_13275_13341 = state_13217__$1;(statearr_13275_13341[(1)] = (16));
} else
{var statearr_13276_13342 = state_13217__$1;(statearr_13276_13342[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (9)))
{var inst_13146 = (state_13217[(2)]);var state_13217__$1 = state_13217;var statearr_13277_13343 = state_13217__$1;(statearr_13277_13343[(2)] = inst_13146);
(statearr_13277_13343[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (5)))
{var inst_13096 = cljs.core.deref.call(null,cs);var inst_13097 = cljs.core.seq.call(null,inst_13096);var inst_13098 = inst_13097;var inst_13099 = null;var inst_13100 = (0);var inst_13101 = (0);var state_13217__$1 = (function (){var statearr_13278 = state_13217;(statearr_13278[(14)] = inst_13098);
(statearr_13278[(15)] = inst_13101);
(statearr_13278[(16)] = inst_13099);
(statearr_13278[(17)] = inst_13100);
return statearr_13278;
})();var statearr_13279_13344 = state_13217__$1;(statearr_13279_13344[(2)] = null);
(statearr_13279_13344[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (14)))
{var state_13217__$1 = state_13217;var statearr_13280_13345 = state_13217__$1;(statearr_13280_13345[(2)] = null);
(statearr_13280_13345[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (45)))
{var inst_13207 = (state_13217[(2)]);var state_13217__$1 = state_13217;var statearr_13281_13346 = state_13217__$1;(statearr_13281_13346[(2)] = inst_13207);
(statearr_13281_13346[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (26)))
{var inst_13149 = (state_13217[(29)]);var inst_13203 = (state_13217[(2)]);var inst_13204 = cljs.core.seq.call(null,inst_13149);var state_13217__$1 = (function (){var statearr_13282 = state_13217;(statearr_13282[(31)] = inst_13203);
return statearr_13282;
})();if(inst_13204)
{var statearr_13283_13347 = state_13217__$1;(statearr_13283_13347[(1)] = (42));
} else
{var statearr_13284_13348 = state_13217__$1;(statearr_13284_13348[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (16)))
{var inst_13118 = (state_13217[(7)]);var inst_13120 = cljs.core.chunked_seq_QMARK_.call(null,inst_13118);var state_13217__$1 = state_13217;if(inst_13120)
{var statearr_13285_13349 = state_13217__$1;(statearr_13285_13349[(1)] = (19));
} else
{var statearr_13286_13350 = state_13217__$1;(statearr_13286_13350[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (38)))
{var inst_13196 = (state_13217[(2)]);var state_13217__$1 = state_13217;var statearr_13287_13351 = state_13217__$1;(statearr_13287_13351[(2)] = inst_13196);
(statearr_13287_13351[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (30)))
{var state_13217__$1 = state_13217;var statearr_13288_13352 = state_13217__$1;(statearr_13288_13352[(2)] = null);
(statearr_13288_13352[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (10)))
{var inst_13101 = (state_13217[(15)]);var inst_13099 = (state_13217[(16)]);var inst_13107 = cljs.core._nth.call(null,inst_13099,inst_13101);var inst_13108 = cljs.core.nth.call(null,inst_13107,(0),null);var inst_13109 = cljs.core.nth.call(null,inst_13107,(1),null);var state_13217__$1 = (function (){var statearr_13289 = state_13217;(statearr_13289[(26)] = inst_13108);
return statearr_13289;
})();if(cljs.core.truth_(inst_13109))
{var statearr_13290_13353 = state_13217__$1;(statearr_13290_13353[(1)] = (13));
} else
{var statearr_13291_13354 = state_13217__$1;(statearr_13291_13354[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (18)))
{var inst_13142 = (state_13217[(2)]);var state_13217__$1 = state_13217;var statearr_13292_13355 = state_13217__$1;(statearr_13292_13355[(2)] = inst_13142);
(statearr_13292_13355[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (42)))
{var state_13217__$1 = state_13217;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13217__$1,(45),dchan);
} else
{if((state_val_13218 === (37)))
{var inst_13185 = (state_13217[(23)]);var inst_13176 = (state_13217[(25)]);var inst_13089 = (state_13217[(11)]);var inst_13185__$1 = cljs.core.first.call(null,inst_13176);var inst_13186 = cljs.core.async.put_BANG_.call(null,inst_13185__$1,inst_13089,done);var state_13217__$1 = (function (){var statearr_13293 = state_13217;(statearr_13293[(23)] = inst_13185__$1);
return statearr_13293;
})();if(cljs.core.truth_(inst_13186))
{var statearr_13294_13356 = state_13217__$1;(statearr_13294_13356[(1)] = (39));
} else
{var statearr_13295_13357 = state_13217__$1;(statearr_13295_13357[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13218 === (8)))
{var inst_13101 = (state_13217[(15)]);var inst_13100 = (state_13217[(17)]);var inst_13103 = (inst_13101 < inst_13100);var inst_13104 = inst_13103;var state_13217__$1 = state_13217;if(cljs.core.truth_(inst_13104))
{var statearr_13296_13358 = state_13217__$1;(statearr_13296_13358[(1)] = (10));
} else
{var statearr_13297_13359 = state_13217__$1;(statearr_13297_13359[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___13305,cs,m,dchan,dctr,done))
;return ((function (switch__6424__auto__,c__6439__auto___13305,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13301[(0)] = state_machine__6425__auto__);
(statearr_13301[(1)] = (1));
return statearr_13301;
});
var state_machine__6425__auto____1 = (function (state_13217){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13217);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13302){if((e13302 instanceof Object))
{var ex__6428__auto__ = e13302;var statearr_13303_13360 = state_13217;(statearr_13303_13360[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13217);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13302;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13361 = state_13217;
state_13217 = G__13361;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13217){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___13305,cs,m,dchan,dctr,done))
})();var state__6441__auto__ = (function (){var statearr_13304 = f__6440__auto__.call(null);(statearr_13304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___13305);
return statearr_13304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___13305,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13363 = {};return obj13363;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13364){var map__13369 = p__13364;var map__13369__$1 = ((cljs.core.seq_QMARK_.call(null,map__13369))?cljs.core.apply.call(null,cljs.core.hash_map,map__13369):map__13369);var opts = map__13369__$1;var statearr_13370_13373 = state;(statearr_13370_13373[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13369,map__13369__$1,opts){
return (function (val){var statearr_13371_13374 = state;(statearr_13371_13374[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13369,map__13369__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_13372_13375 = state;(statearr_13372_13375[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13364 = null;if (arguments.length > 3) {
  p__13364 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13364);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13376){
var state = cljs.core.first(arglist__13376);
arglist__13376 = cljs.core.next(arglist__13376);
var cont_block = cljs.core.first(arglist__13376);
arglist__13376 = cljs.core.next(arglist__13376);
var ports = cljs.core.first(arglist__13376);
var p__13364 = cljs.core.rest(arglist__13376);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13364);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13496 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13496 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13497){
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
this.meta13497 = meta13497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13496.cljs$lang$type = true;
cljs.core.async.t13496.cljs$lang$ctorStr = "cljs.core.async/t13496";
cljs.core.async.t13496.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t13496");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13496.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13496.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13496.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13496.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13496.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13496.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13496.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13498){var self__ = this;
var _13498__$1 = this;return self__.meta13497;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13498,meta13497__$1){var self__ = this;
var _13498__$1 = this;return (new cljs.core.async.t13496(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13497__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13496 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13496(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13497){return (new cljs.core.async.t13496(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13497));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13496(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6439__auto___13615 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___13615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___13615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13568){var state_val_13569 = (state_13568[(1)]);if((state_val_13569 === (7)))
{var inst_13512 = (state_13568[(7)]);var inst_13517 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13512);var state_13568__$1 = state_13568;var statearr_13570_13616 = state_13568__$1;(statearr_13570_13616[(2)] = inst_13517);
(statearr_13570_13616[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (20)))
{var inst_13527 = (state_13568[(8)]);var state_13568__$1 = state_13568;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13568__$1,(23),out,inst_13527);
} else
{if((state_val_13569 === (1)))
{var inst_13502 = (state_13568[(9)]);var inst_13502__$1 = calc_state.call(null);var inst_13503 = cljs.core.seq_QMARK_.call(null,inst_13502__$1);var state_13568__$1 = (function (){var statearr_13571 = state_13568;(statearr_13571[(9)] = inst_13502__$1);
return statearr_13571;
})();if(inst_13503)
{var statearr_13572_13617 = state_13568__$1;(statearr_13572_13617[(1)] = (2));
} else
{var statearr_13573_13618 = state_13568__$1;(statearr_13573_13618[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (24)))
{var inst_13520 = (state_13568[(10)]);var inst_13512 = inst_13520;var state_13568__$1 = (function (){var statearr_13574 = state_13568;(statearr_13574[(7)] = inst_13512);
return statearr_13574;
})();var statearr_13575_13619 = state_13568__$1;(statearr_13575_13619[(2)] = null);
(statearr_13575_13619[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (4)))
{var inst_13502 = (state_13568[(9)]);var inst_13508 = (state_13568[(2)]);var inst_13509 = cljs.core.get.call(null,inst_13508,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13510 = cljs.core.get.call(null,inst_13508,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13511 = cljs.core.get.call(null,inst_13508,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13512 = inst_13502;var state_13568__$1 = (function (){var statearr_13576 = state_13568;(statearr_13576[(11)] = inst_13509);
(statearr_13576[(12)] = inst_13510);
(statearr_13576[(13)] = inst_13511);
(statearr_13576[(7)] = inst_13512);
return statearr_13576;
})();var statearr_13577_13620 = state_13568__$1;(statearr_13577_13620[(2)] = null);
(statearr_13577_13620[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (15)))
{var state_13568__$1 = state_13568;var statearr_13578_13621 = state_13568__$1;(statearr_13578_13621[(2)] = null);
(statearr_13578_13621[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (21)))
{var inst_13520 = (state_13568[(10)]);var inst_13512 = inst_13520;var state_13568__$1 = (function (){var statearr_13579 = state_13568;(statearr_13579[(7)] = inst_13512);
return statearr_13579;
})();var statearr_13580_13622 = state_13568__$1;(statearr_13580_13622[(2)] = null);
(statearr_13580_13622[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (13)))
{var inst_13564 = (state_13568[(2)]);var state_13568__$1 = state_13568;var statearr_13581_13623 = state_13568__$1;(statearr_13581_13623[(2)] = inst_13564);
(statearr_13581_13623[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (22)))
{var inst_13562 = (state_13568[(2)]);var state_13568__$1 = state_13568;var statearr_13582_13624 = state_13568__$1;(statearr_13582_13624[(2)] = inst_13562);
(statearr_13582_13624[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (6)))
{var inst_13566 = (state_13568[(2)]);var state_13568__$1 = state_13568;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13568__$1,inst_13566);
} else
{if((state_val_13569 === (25)))
{var state_13568__$1 = state_13568;var statearr_13583_13625 = state_13568__$1;(statearr_13583_13625[(2)] = null);
(statearr_13583_13625[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (17)))
{var inst_13542 = (state_13568[(14)]);var state_13568__$1 = state_13568;var statearr_13584_13626 = state_13568__$1;(statearr_13584_13626[(2)] = inst_13542);
(statearr_13584_13626[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (3)))
{var inst_13502 = (state_13568[(9)]);var state_13568__$1 = state_13568;var statearr_13585_13627 = state_13568__$1;(statearr_13585_13627[(2)] = inst_13502);
(statearr_13585_13627[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (12)))
{var inst_13542 = (state_13568[(14)]);var inst_13523 = (state_13568[(15)]);var inst_13528 = (state_13568[(16)]);var inst_13542__$1 = inst_13523.call(null,inst_13528);var state_13568__$1 = (function (){var statearr_13586 = state_13568;(statearr_13586[(14)] = inst_13542__$1);
return statearr_13586;
})();if(cljs.core.truth_(inst_13542__$1))
{var statearr_13587_13628 = state_13568__$1;(statearr_13587_13628[(1)] = (17));
} else
{var statearr_13588_13629 = state_13568__$1;(statearr_13588_13629[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (2)))
{var inst_13502 = (state_13568[(9)]);var inst_13505 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13502);var state_13568__$1 = state_13568;var statearr_13589_13630 = state_13568__$1;(statearr_13589_13630[(2)] = inst_13505);
(statearr_13589_13630[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (23)))
{var inst_13553 = (state_13568[(2)]);var state_13568__$1 = state_13568;if(cljs.core.truth_(inst_13553))
{var statearr_13590_13631 = state_13568__$1;(statearr_13590_13631[(1)] = (24));
} else
{var statearr_13591_13632 = state_13568__$1;(statearr_13591_13632[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (19)))
{var inst_13550 = (state_13568[(2)]);var state_13568__$1 = state_13568;if(cljs.core.truth_(inst_13550))
{var statearr_13592_13633 = state_13568__$1;(statearr_13592_13633[(1)] = (20));
} else
{var statearr_13593_13634 = state_13568__$1;(statearr_13593_13634[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (11)))
{var inst_13527 = (state_13568[(8)]);var inst_13533 = (inst_13527 == null);var state_13568__$1 = state_13568;if(cljs.core.truth_(inst_13533))
{var statearr_13594_13635 = state_13568__$1;(statearr_13594_13635[(1)] = (14));
} else
{var statearr_13595_13636 = state_13568__$1;(statearr_13595_13636[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (9)))
{var inst_13520 = (state_13568[(10)]);var inst_13520__$1 = (state_13568[(2)]);var inst_13521 = cljs.core.get.call(null,inst_13520__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13522 = cljs.core.get.call(null,inst_13520__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13523 = cljs.core.get.call(null,inst_13520__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13568__$1 = (function (){var statearr_13596 = state_13568;(statearr_13596[(17)] = inst_13522);
(statearr_13596[(15)] = inst_13523);
(statearr_13596[(10)] = inst_13520__$1);
return statearr_13596;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_13568__$1,(10),inst_13521);
} else
{if((state_val_13569 === (5)))
{var inst_13512 = (state_13568[(7)]);var inst_13515 = cljs.core.seq_QMARK_.call(null,inst_13512);var state_13568__$1 = state_13568;if(inst_13515)
{var statearr_13597_13637 = state_13568__$1;(statearr_13597_13637[(1)] = (7));
} else
{var statearr_13598_13638 = state_13568__$1;(statearr_13598_13638[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (14)))
{var inst_13528 = (state_13568[(16)]);var inst_13535 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13528);var state_13568__$1 = state_13568;var statearr_13599_13639 = state_13568__$1;(statearr_13599_13639[(2)] = inst_13535);
(statearr_13599_13639[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (26)))
{var inst_13558 = (state_13568[(2)]);var state_13568__$1 = state_13568;var statearr_13600_13640 = state_13568__$1;(statearr_13600_13640[(2)] = inst_13558);
(statearr_13600_13640[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (16)))
{var inst_13538 = (state_13568[(2)]);var inst_13539 = calc_state.call(null);var inst_13512 = inst_13539;var state_13568__$1 = (function (){var statearr_13601 = state_13568;(statearr_13601[(7)] = inst_13512);
(statearr_13601[(18)] = inst_13538);
return statearr_13601;
})();var statearr_13602_13641 = state_13568__$1;(statearr_13602_13641[(2)] = null);
(statearr_13602_13641[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (10)))
{var inst_13527 = (state_13568[(8)]);var inst_13528 = (state_13568[(16)]);var inst_13526 = (state_13568[(2)]);var inst_13527__$1 = cljs.core.nth.call(null,inst_13526,(0),null);var inst_13528__$1 = cljs.core.nth.call(null,inst_13526,(1),null);var inst_13529 = (inst_13527__$1 == null);var inst_13530 = cljs.core._EQ_.call(null,inst_13528__$1,change);var inst_13531 = (inst_13529) || (inst_13530);var state_13568__$1 = (function (){var statearr_13603 = state_13568;(statearr_13603[(8)] = inst_13527__$1);
(statearr_13603[(16)] = inst_13528__$1);
return statearr_13603;
})();if(cljs.core.truth_(inst_13531))
{var statearr_13604_13642 = state_13568__$1;(statearr_13604_13642[(1)] = (11));
} else
{var statearr_13605_13643 = state_13568__$1;(statearr_13605_13643[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (18)))
{var inst_13522 = (state_13568[(17)]);var inst_13523 = (state_13568[(15)]);var inst_13528 = (state_13568[(16)]);var inst_13545 = cljs.core.empty_QMARK_.call(null,inst_13523);var inst_13546 = inst_13522.call(null,inst_13528);var inst_13547 = cljs.core.not.call(null,inst_13546);var inst_13548 = (inst_13545) && (inst_13547);var state_13568__$1 = state_13568;var statearr_13606_13644 = state_13568__$1;(statearr_13606_13644[(2)] = inst_13548);
(statearr_13606_13644[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13569 === (8)))
{var inst_13512 = (state_13568[(7)]);var state_13568__$1 = state_13568;var statearr_13607_13645 = state_13568__$1;(statearr_13607_13645[(2)] = inst_13512);
(statearr_13607_13645[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___13615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6424__auto__,c__6439__auto___13615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13611[(0)] = state_machine__6425__auto__);
(statearr_13611[(1)] = (1));
return statearr_13611;
});
var state_machine__6425__auto____1 = (function (state_13568){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13568);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13612){if((e13612 instanceof Object))
{var ex__6428__auto__ = e13612;var statearr_13613_13646 = state_13568;(statearr_13613_13646[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13568);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13612;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13647 = state_13568;
state_13568 = G__13647;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13568){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___13615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6441__auto__ = (function (){var statearr_13614 = f__6440__auto__.call(null);(statearr_13614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___13615);
return statearr_13614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___13615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13649 = {};return obj13649;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3587__auto__ = p;if(and__3587__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3587__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4236__auto__ = (((p == null))?null:p);return (function (){var or__3599__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3587__auto__ = p;if(and__3587__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3587__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4236__auto__ = (((p == null))?null:p);return (function (){var or__3599__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3587__auto__ = p;if(and__3587__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3587__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4236__auto__ = (((p == null))?null:p);return (function (){var or__3599__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3587__auto__ = p;if(and__3587__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3587__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4236__auto__ = (((p == null))?null:p);return (function (){var or__3599__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3599__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3599__auto__))
{return or__3599__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3599__auto__,mults){
return (function (p1__13650_SHARP_){if(cljs.core.truth_(p1__13650_SHARP_.call(null,topic)))
{return p1__13650_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13650_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3599__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13773 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13774){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13774 = meta13774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13773.cljs$lang$type = true;
cljs.core.async.t13773.cljs$lang$ctorStr = "cljs.core.async/t13773";
cljs.core.async.t13773.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t13773");
});})(mults,ensure_mult))
;
cljs.core.async.t13773.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13773.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13773.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13773.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13775){var self__ = this;
var _13775__$1 = this;return self__.meta13774;
});})(mults,ensure_mult))
;
cljs.core.async.t13773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13775,meta13774__$1){var self__ = this;
var _13775__$1 = this;return (new cljs.core.async.t13773(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13774__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13773 = ((function (mults,ensure_mult){
return (function __GT_t13773(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13774){return (new cljs.core.async.t13773(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13774));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13773(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6439__auto___13895 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___13895,mults,ensure_mult,p){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___13895,mults,ensure_mult,p){
return (function (state_13847){var state_val_13848 = (state_13847[(1)]);if((state_val_13848 === (7)))
{var inst_13843 = (state_13847[(2)]);var state_13847__$1 = state_13847;var statearr_13849_13896 = state_13847__$1;(statearr_13849_13896[(2)] = inst_13843);
(statearr_13849_13896[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (20)))
{var state_13847__$1 = state_13847;var statearr_13850_13897 = state_13847__$1;(statearr_13850_13897[(2)] = null);
(statearr_13850_13897[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (1)))
{var state_13847__$1 = state_13847;var statearr_13851_13898 = state_13847__$1;(statearr_13851_13898[(2)] = null);
(statearr_13851_13898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (24)))
{var inst_13826 = (state_13847[(7)]);var inst_13835 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13826);var state_13847__$1 = state_13847;var statearr_13852_13899 = state_13847__$1;(statearr_13852_13899[(2)] = inst_13835);
(statearr_13852_13899[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (4)))
{var inst_13778 = (state_13847[(8)]);var inst_13778__$1 = (state_13847[(2)]);var inst_13779 = (inst_13778__$1 == null);var state_13847__$1 = (function (){var statearr_13853 = state_13847;(statearr_13853[(8)] = inst_13778__$1);
return statearr_13853;
})();if(cljs.core.truth_(inst_13779))
{var statearr_13854_13900 = state_13847__$1;(statearr_13854_13900[(1)] = (5));
} else
{var statearr_13855_13901 = state_13847__$1;(statearr_13855_13901[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (15)))
{var inst_13820 = (state_13847[(2)]);var state_13847__$1 = state_13847;var statearr_13856_13902 = state_13847__$1;(statearr_13856_13902[(2)] = inst_13820);
(statearr_13856_13902[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (21)))
{var inst_13840 = (state_13847[(2)]);var state_13847__$1 = (function (){var statearr_13857 = state_13847;(statearr_13857[(9)] = inst_13840);
return statearr_13857;
})();var statearr_13858_13903 = state_13847__$1;(statearr_13858_13903[(2)] = null);
(statearr_13858_13903[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (13)))
{var inst_13802 = (state_13847[(10)]);var inst_13804 = cljs.core.chunked_seq_QMARK_.call(null,inst_13802);var state_13847__$1 = state_13847;if(inst_13804)
{var statearr_13859_13904 = state_13847__$1;(statearr_13859_13904[(1)] = (16));
} else
{var statearr_13860_13905 = state_13847__$1;(statearr_13860_13905[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (22)))
{var inst_13832 = (state_13847[(2)]);var state_13847__$1 = state_13847;if(cljs.core.truth_(inst_13832))
{var statearr_13861_13906 = state_13847__$1;(statearr_13861_13906[(1)] = (23));
} else
{var statearr_13862_13907 = state_13847__$1;(statearr_13862_13907[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (6)))
{var inst_13778 = (state_13847[(8)]);var inst_13828 = (state_13847[(11)]);var inst_13826 = (state_13847[(7)]);var inst_13826__$1 = topic_fn.call(null,inst_13778);var inst_13827 = cljs.core.deref.call(null,mults);var inst_13828__$1 = cljs.core.get.call(null,inst_13827,inst_13826__$1);var state_13847__$1 = (function (){var statearr_13863 = state_13847;(statearr_13863[(11)] = inst_13828__$1);
(statearr_13863[(7)] = inst_13826__$1);
return statearr_13863;
})();if(cljs.core.truth_(inst_13828__$1))
{var statearr_13864_13908 = state_13847__$1;(statearr_13864_13908[(1)] = (19));
} else
{var statearr_13865_13909 = state_13847__$1;(statearr_13865_13909[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (25)))
{var inst_13837 = (state_13847[(2)]);var state_13847__$1 = state_13847;var statearr_13866_13910 = state_13847__$1;(statearr_13866_13910[(2)] = inst_13837);
(statearr_13866_13910[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (17)))
{var inst_13802 = (state_13847[(10)]);var inst_13811 = cljs.core.first.call(null,inst_13802);var inst_13812 = cljs.core.async.muxch_STAR_.call(null,inst_13811);var inst_13813 = cljs.core.async.close_BANG_.call(null,inst_13812);var inst_13814 = cljs.core.next.call(null,inst_13802);var inst_13788 = inst_13814;var inst_13789 = null;var inst_13790 = (0);var inst_13791 = (0);var state_13847__$1 = (function (){var statearr_13867 = state_13847;(statearr_13867[(12)] = inst_13789);
(statearr_13867[(13)] = inst_13790);
(statearr_13867[(14)] = inst_13788);
(statearr_13867[(15)] = inst_13813);
(statearr_13867[(16)] = inst_13791);
return statearr_13867;
})();var statearr_13868_13911 = state_13847__$1;(statearr_13868_13911[(2)] = null);
(statearr_13868_13911[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (3)))
{var inst_13845 = (state_13847[(2)]);var state_13847__$1 = state_13847;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13847__$1,inst_13845);
} else
{if((state_val_13848 === (12)))
{var inst_13822 = (state_13847[(2)]);var state_13847__$1 = state_13847;var statearr_13869_13912 = state_13847__$1;(statearr_13869_13912[(2)] = inst_13822);
(statearr_13869_13912[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (2)))
{var state_13847__$1 = state_13847;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13847__$1,(4),ch);
} else
{if((state_val_13848 === (23)))
{var state_13847__$1 = state_13847;var statearr_13870_13913 = state_13847__$1;(statearr_13870_13913[(2)] = null);
(statearr_13870_13913[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (19)))
{var inst_13778 = (state_13847[(8)]);var inst_13828 = (state_13847[(11)]);var inst_13830 = cljs.core.async.muxch_STAR_.call(null,inst_13828);var state_13847__$1 = state_13847;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13847__$1,(22),inst_13830,inst_13778);
} else
{if((state_val_13848 === (11)))
{var inst_13802 = (state_13847[(10)]);var inst_13788 = (state_13847[(14)]);var inst_13802__$1 = cljs.core.seq.call(null,inst_13788);var state_13847__$1 = (function (){var statearr_13871 = state_13847;(statearr_13871[(10)] = inst_13802__$1);
return statearr_13871;
})();if(inst_13802__$1)
{var statearr_13872_13914 = state_13847__$1;(statearr_13872_13914[(1)] = (13));
} else
{var statearr_13873_13915 = state_13847__$1;(statearr_13873_13915[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (9)))
{var inst_13824 = (state_13847[(2)]);var state_13847__$1 = state_13847;var statearr_13874_13916 = state_13847__$1;(statearr_13874_13916[(2)] = inst_13824);
(statearr_13874_13916[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (5)))
{var inst_13785 = cljs.core.deref.call(null,mults);var inst_13786 = cljs.core.vals.call(null,inst_13785);var inst_13787 = cljs.core.seq.call(null,inst_13786);var inst_13788 = inst_13787;var inst_13789 = null;var inst_13790 = (0);var inst_13791 = (0);var state_13847__$1 = (function (){var statearr_13875 = state_13847;(statearr_13875[(12)] = inst_13789);
(statearr_13875[(13)] = inst_13790);
(statearr_13875[(14)] = inst_13788);
(statearr_13875[(16)] = inst_13791);
return statearr_13875;
})();var statearr_13876_13917 = state_13847__$1;(statearr_13876_13917[(2)] = null);
(statearr_13876_13917[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (14)))
{var state_13847__$1 = state_13847;var statearr_13880_13918 = state_13847__$1;(statearr_13880_13918[(2)] = null);
(statearr_13880_13918[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (16)))
{var inst_13802 = (state_13847[(10)]);var inst_13806 = cljs.core.chunk_first.call(null,inst_13802);var inst_13807 = cljs.core.chunk_rest.call(null,inst_13802);var inst_13808 = cljs.core.count.call(null,inst_13806);var inst_13788 = inst_13807;var inst_13789 = inst_13806;var inst_13790 = inst_13808;var inst_13791 = (0);var state_13847__$1 = (function (){var statearr_13881 = state_13847;(statearr_13881[(12)] = inst_13789);
(statearr_13881[(13)] = inst_13790);
(statearr_13881[(14)] = inst_13788);
(statearr_13881[(16)] = inst_13791);
return statearr_13881;
})();var statearr_13882_13919 = state_13847__$1;(statearr_13882_13919[(2)] = null);
(statearr_13882_13919[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (10)))
{var inst_13789 = (state_13847[(12)]);var inst_13790 = (state_13847[(13)]);var inst_13788 = (state_13847[(14)]);var inst_13791 = (state_13847[(16)]);var inst_13796 = cljs.core._nth.call(null,inst_13789,inst_13791);var inst_13797 = cljs.core.async.muxch_STAR_.call(null,inst_13796);var inst_13798 = cljs.core.async.close_BANG_.call(null,inst_13797);var inst_13799 = (inst_13791 + (1));var tmp13877 = inst_13789;var tmp13878 = inst_13790;var tmp13879 = inst_13788;var inst_13788__$1 = tmp13879;var inst_13789__$1 = tmp13877;var inst_13790__$1 = tmp13878;var inst_13791__$1 = inst_13799;var state_13847__$1 = (function (){var statearr_13883 = state_13847;(statearr_13883[(12)] = inst_13789__$1);
(statearr_13883[(17)] = inst_13798);
(statearr_13883[(13)] = inst_13790__$1);
(statearr_13883[(14)] = inst_13788__$1);
(statearr_13883[(16)] = inst_13791__$1);
return statearr_13883;
})();var statearr_13884_13920 = state_13847__$1;(statearr_13884_13920[(2)] = null);
(statearr_13884_13920[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (18)))
{var inst_13817 = (state_13847[(2)]);var state_13847__$1 = state_13847;var statearr_13885_13921 = state_13847__$1;(statearr_13885_13921[(2)] = inst_13817);
(statearr_13885_13921[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13848 === (8)))
{var inst_13790 = (state_13847[(13)]);var inst_13791 = (state_13847[(16)]);var inst_13793 = (inst_13791 < inst_13790);var inst_13794 = inst_13793;var state_13847__$1 = state_13847;if(cljs.core.truth_(inst_13794))
{var statearr_13886_13922 = state_13847__$1;(statearr_13886_13922[(1)] = (10));
} else
{var statearr_13887_13923 = state_13847__$1;(statearr_13887_13923[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___13895,mults,ensure_mult,p))
;return ((function (switch__6424__auto__,c__6439__auto___13895,mults,ensure_mult,p){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13891[(0)] = state_machine__6425__auto__);
(statearr_13891[(1)] = (1));
return statearr_13891;
});
var state_machine__6425__auto____1 = (function (state_13847){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13847);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13892){if((e13892 instanceof Object))
{var ex__6428__auto__ = e13892;var statearr_13893_13924 = state_13847;(statearr_13893_13924[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13847);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13892;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13925 = state_13847;
state_13847 = G__13925;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13847){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___13895,mults,ensure_mult,p))
})();var state__6441__auto__ = (function (){var statearr_13894 = f__6440__auto__.call(null);(statearr_13894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___13895);
return statearr_13894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___13895,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6439__auto___14062 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___14062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___14062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14032){var state_val_14033 = (state_14032[(1)]);if((state_val_14033 === (7)))
{var state_14032__$1 = state_14032;var statearr_14034_14063 = state_14032__$1;(statearr_14034_14063[(2)] = null);
(statearr_14034_14063[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14033 === (1)))
{var state_14032__$1 = state_14032;var statearr_14035_14064 = state_14032__$1;(statearr_14035_14064[(2)] = null);
(statearr_14035_14064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14033 === (4)))
{var inst_13996 = (state_14032[(7)]);var inst_13998 = (inst_13996 < cnt);var state_14032__$1 = state_14032;if(cljs.core.truth_(inst_13998))
{var statearr_14036_14065 = state_14032__$1;(statearr_14036_14065[(1)] = (6));
} else
{var statearr_14037_14066 = state_14032__$1;(statearr_14037_14066[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14033 === (15)))
{var inst_14028 = (state_14032[(2)]);var state_14032__$1 = state_14032;var statearr_14038_14067 = state_14032__$1;(statearr_14038_14067[(2)] = inst_14028);
(statearr_14038_14067[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14033 === (13)))
{var inst_14021 = cljs.core.async.close_BANG_.call(null,out);var state_14032__$1 = state_14032;var statearr_14039_14068 = state_14032__$1;(statearr_14039_14068[(2)] = inst_14021);
(statearr_14039_14068[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14033 === (6)))
{var state_14032__$1 = state_14032;var statearr_14040_14069 = state_14032__$1;(statearr_14040_14069[(2)] = null);
(statearr_14040_14069[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14033 === (3)))
{var inst_14030 = (state_14032[(2)]);var state_14032__$1 = state_14032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14032__$1,inst_14030);
} else
{if((state_val_14033 === (12)))
{var inst_14018 = (state_14032[(8)]);var inst_14018__$1 = (state_14032[(2)]);var inst_14019 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14018__$1);var state_14032__$1 = (function (){var statearr_14041 = state_14032;(statearr_14041[(8)] = inst_14018__$1);
return statearr_14041;
})();if(cljs.core.truth_(inst_14019))
{var statearr_14042_14070 = state_14032__$1;(statearr_14042_14070[(1)] = (13));
} else
{var statearr_14043_14071 = state_14032__$1;(statearr_14043_14071[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14033 === (2)))
{var inst_13995 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13996 = (0);var state_14032__$1 = (function (){var statearr_14044 = state_14032;(statearr_14044[(9)] = inst_13995);
(statearr_14044[(7)] = inst_13996);
return statearr_14044;
})();var statearr_14045_14072 = state_14032__$1;(statearr_14045_14072[(2)] = null);
(statearr_14045_14072[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14033 === (11)))
{var inst_13996 = (state_14032[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14032,(10),Object,null,(9));var inst_14005 = chs__$1.call(null,inst_13996);var inst_14006 = done.call(null,inst_13996);var inst_14007 = cljs.core.async.take_BANG_.call(null,inst_14005,inst_14006);var state_14032__$1 = state_14032;var statearr_14046_14073 = state_14032__$1;(statearr_14046_14073[(2)] = inst_14007);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14032__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14033 === (9)))
{var inst_13996 = (state_14032[(7)]);var inst_14009 = (state_14032[(2)]);var inst_14010 = (inst_13996 + (1));var inst_13996__$1 = inst_14010;var state_14032__$1 = (function (){var statearr_14047 = state_14032;(statearr_14047[(10)] = inst_14009);
(statearr_14047[(7)] = inst_13996__$1);
return statearr_14047;
})();var statearr_14048_14074 = state_14032__$1;(statearr_14048_14074[(2)] = null);
(statearr_14048_14074[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14033 === (5)))
{var inst_14016 = (state_14032[(2)]);var state_14032__$1 = (function (){var statearr_14049 = state_14032;(statearr_14049[(11)] = inst_14016);
return statearr_14049;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14032__$1,(12),dchan);
} else
{if((state_val_14033 === (14)))
{var inst_14018 = (state_14032[(8)]);var inst_14023 = cljs.core.apply.call(null,f,inst_14018);var state_14032__$1 = state_14032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14032__$1,(16),out,inst_14023);
} else
{if((state_val_14033 === (16)))
{var inst_14025 = (state_14032[(2)]);var state_14032__$1 = (function (){var statearr_14050 = state_14032;(statearr_14050[(12)] = inst_14025);
return statearr_14050;
})();var statearr_14051_14075 = state_14032__$1;(statearr_14051_14075[(2)] = null);
(statearr_14051_14075[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14033 === (10)))
{var inst_14000 = (state_14032[(2)]);var inst_14001 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14032__$1 = (function (){var statearr_14052 = state_14032;(statearr_14052[(13)] = inst_14000);
return statearr_14052;
})();var statearr_14053_14076 = state_14032__$1;(statearr_14053_14076[(2)] = inst_14001);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14032__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14033 === (8)))
{var inst_14014 = (state_14032[(2)]);var state_14032__$1 = state_14032;var statearr_14054_14077 = state_14032__$1;(statearr_14054_14077[(2)] = inst_14014);
(statearr_14054_14077[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___14062,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6424__auto__,c__6439__auto___14062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14058[(0)] = state_machine__6425__auto__);
(statearr_14058[(1)] = (1));
return statearr_14058;
});
var state_machine__6425__auto____1 = (function (state_14032){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14032);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14059){if((e14059 instanceof Object))
{var ex__6428__auto__ = e14059;var statearr_14060_14078 = state_14032;(statearr_14060_14078[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14032);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14059;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14079 = state_14032;
state_14032 = G__14079;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14032){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___14062,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6441__auto__ = (function (){var statearr_14061 = f__6440__auto__.call(null);(statearr_14061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___14062);
return statearr_14061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___14062,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___14187 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___14187,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___14187,out){
return (function (state_14163){var state_val_14164 = (state_14163[(1)]);if((state_val_14164 === (7)))
{var inst_14142 = (state_14163[(7)]);var inst_14143 = (state_14163[(8)]);var inst_14142__$1 = (state_14163[(2)]);var inst_14143__$1 = cljs.core.nth.call(null,inst_14142__$1,(0),null);var inst_14144 = cljs.core.nth.call(null,inst_14142__$1,(1),null);var inst_14145 = (inst_14143__$1 == null);var state_14163__$1 = (function (){var statearr_14165 = state_14163;(statearr_14165[(7)] = inst_14142__$1);
(statearr_14165[(8)] = inst_14143__$1);
(statearr_14165[(9)] = inst_14144);
return statearr_14165;
})();if(cljs.core.truth_(inst_14145))
{var statearr_14166_14188 = state_14163__$1;(statearr_14166_14188[(1)] = (8));
} else
{var statearr_14167_14189 = state_14163__$1;(statearr_14167_14189[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14164 === (1)))
{var inst_14134 = cljs.core.vec.call(null,chs);var inst_14135 = inst_14134;var state_14163__$1 = (function (){var statearr_14168 = state_14163;(statearr_14168[(10)] = inst_14135);
return statearr_14168;
})();var statearr_14169_14190 = state_14163__$1;(statearr_14169_14190[(2)] = null);
(statearr_14169_14190[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14164 === (4)))
{var inst_14135 = (state_14163[(10)]);var state_14163__$1 = state_14163;return cljs.core.async.ioc_alts_BANG_.call(null,state_14163__$1,(7),inst_14135);
} else
{if((state_val_14164 === (6)))
{var inst_14159 = (state_14163[(2)]);var state_14163__$1 = state_14163;var statearr_14170_14191 = state_14163__$1;(statearr_14170_14191[(2)] = inst_14159);
(statearr_14170_14191[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14164 === (3)))
{var inst_14161 = (state_14163[(2)]);var state_14163__$1 = state_14163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14163__$1,inst_14161);
} else
{if((state_val_14164 === (2)))
{var inst_14135 = (state_14163[(10)]);var inst_14137 = cljs.core.count.call(null,inst_14135);var inst_14138 = (inst_14137 > (0));var state_14163__$1 = state_14163;if(cljs.core.truth_(inst_14138))
{var statearr_14172_14192 = state_14163__$1;(statearr_14172_14192[(1)] = (4));
} else
{var statearr_14173_14193 = state_14163__$1;(statearr_14173_14193[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14164 === (11)))
{var inst_14135 = (state_14163[(10)]);var inst_14152 = (state_14163[(2)]);var tmp14171 = inst_14135;var inst_14135__$1 = tmp14171;var state_14163__$1 = (function (){var statearr_14174 = state_14163;(statearr_14174[(11)] = inst_14152);
(statearr_14174[(10)] = inst_14135__$1);
return statearr_14174;
})();var statearr_14175_14194 = state_14163__$1;(statearr_14175_14194[(2)] = null);
(statearr_14175_14194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14164 === (9)))
{var inst_14143 = (state_14163[(8)]);var state_14163__$1 = state_14163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14163__$1,(11),out,inst_14143);
} else
{if((state_val_14164 === (5)))
{var inst_14157 = cljs.core.async.close_BANG_.call(null,out);var state_14163__$1 = state_14163;var statearr_14176_14195 = state_14163__$1;(statearr_14176_14195[(2)] = inst_14157);
(statearr_14176_14195[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14164 === (10)))
{var inst_14155 = (state_14163[(2)]);var state_14163__$1 = state_14163;var statearr_14177_14196 = state_14163__$1;(statearr_14177_14196[(2)] = inst_14155);
(statearr_14177_14196[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14164 === (8)))
{var inst_14142 = (state_14163[(7)]);var inst_14143 = (state_14163[(8)]);var inst_14144 = (state_14163[(9)]);var inst_14135 = (state_14163[(10)]);var inst_14147 = (function (){var c = inst_14144;var v = inst_14143;var vec__14140 = inst_14142;var cs = inst_14135;return ((function (c,v,vec__14140,cs,inst_14142,inst_14143,inst_14144,inst_14135,state_val_14164,c__6439__auto___14187,out){
return (function (p1__14080_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14080_SHARP_);
});
;})(c,v,vec__14140,cs,inst_14142,inst_14143,inst_14144,inst_14135,state_val_14164,c__6439__auto___14187,out))
})();var inst_14148 = cljs.core.filterv.call(null,inst_14147,inst_14135);var inst_14135__$1 = inst_14148;var state_14163__$1 = (function (){var statearr_14178 = state_14163;(statearr_14178[(10)] = inst_14135__$1);
return statearr_14178;
})();var statearr_14179_14197 = state_14163__$1;(statearr_14179_14197[(2)] = null);
(statearr_14179_14197[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___14187,out))
;return ((function (switch__6424__auto__,c__6439__auto___14187,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14183 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14183[(0)] = state_machine__6425__auto__);
(statearr_14183[(1)] = (1));
return statearr_14183;
});
var state_machine__6425__auto____1 = (function (state_14163){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14163);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14184){if((e14184 instanceof Object))
{var ex__6428__auto__ = e14184;var statearr_14185_14198 = state_14163;(statearr_14185_14198[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14163);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14184;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14199 = state_14163;
state_14163 = G__14199;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14163){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___14187,out))
})();var state__6441__auto__ = (function (){var statearr_14186 = f__6440__auto__.call(null);(statearr_14186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___14187);
return statearr_14186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___14187,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___14292 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___14292,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___14292,out){
return (function (state_14269){var state_val_14270 = (state_14269[(1)]);if((state_val_14270 === (7)))
{var inst_14251 = (state_14269[(7)]);var inst_14251__$1 = (state_14269[(2)]);var inst_14252 = (inst_14251__$1 == null);var inst_14253 = cljs.core.not.call(null,inst_14252);var state_14269__$1 = (function (){var statearr_14271 = state_14269;(statearr_14271[(7)] = inst_14251__$1);
return statearr_14271;
})();if(inst_14253)
{var statearr_14272_14293 = state_14269__$1;(statearr_14272_14293[(1)] = (8));
} else
{var statearr_14273_14294 = state_14269__$1;(statearr_14273_14294[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14270 === (1)))
{var inst_14246 = (0);var state_14269__$1 = (function (){var statearr_14274 = state_14269;(statearr_14274[(8)] = inst_14246);
return statearr_14274;
})();var statearr_14275_14295 = state_14269__$1;(statearr_14275_14295[(2)] = null);
(statearr_14275_14295[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14270 === (4)))
{var state_14269__$1 = state_14269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14269__$1,(7),ch);
} else
{if((state_val_14270 === (6)))
{var inst_14264 = (state_14269[(2)]);var state_14269__$1 = state_14269;var statearr_14276_14296 = state_14269__$1;(statearr_14276_14296[(2)] = inst_14264);
(statearr_14276_14296[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14270 === (3)))
{var inst_14266 = (state_14269[(2)]);var inst_14267 = cljs.core.async.close_BANG_.call(null,out);var state_14269__$1 = (function (){var statearr_14277 = state_14269;(statearr_14277[(9)] = inst_14266);
return statearr_14277;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14269__$1,inst_14267);
} else
{if((state_val_14270 === (2)))
{var inst_14246 = (state_14269[(8)]);var inst_14248 = (inst_14246 < n);var state_14269__$1 = state_14269;if(cljs.core.truth_(inst_14248))
{var statearr_14278_14297 = state_14269__$1;(statearr_14278_14297[(1)] = (4));
} else
{var statearr_14279_14298 = state_14269__$1;(statearr_14279_14298[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14270 === (11)))
{var inst_14246 = (state_14269[(8)]);var inst_14256 = (state_14269[(2)]);var inst_14257 = (inst_14246 + (1));var inst_14246__$1 = inst_14257;var state_14269__$1 = (function (){var statearr_14280 = state_14269;(statearr_14280[(10)] = inst_14256);
(statearr_14280[(8)] = inst_14246__$1);
return statearr_14280;
})();var statearr_14281_14299 = state_14269__$1;(statearr_14281_14299[(2)] = null);
(statearr_14281_14299[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14270 === (9)))
{var state_14269__$1 = state_14269;var statearr_14282_14300 = state_14269__$1;(statearr_14282_14300[(2)] = null);
(statearr_14282_14300[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14270 === (5)))
{var state_14269__$1 = state_14269;var statearr_14283_14301 = state_14269__$1;(statearr_14283_14301[(2)] = null);
(statearr_14283_14301[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14270 === (10)))
{var inst_14261 = (state_14269[(2)]);var state_14269__$1 = state_14269;var statearr_14284_14302 = state_14269__$1;(statearr_14284_14302[(2)] = inst_14261);
(statearr_14284_14302[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14270 === (8)))
{var inst_14251 = (state_14269[(7)]);var state_14269__$1 = state_14269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14269__$1,(11),out,inst_14251);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___14292,out))
;return ((function (switch__6424__auto__,c__6439__auto___14292,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14288 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14288[(0)] = state_machine__6425__auto__);
(statearr_14288[(1)] = (1));
return statearr_14288;
});
var state_machine__6425__auto____1 = (function (state_14269){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14269);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14289){if((e14289 instanceof Object))
{var ex__6428__auto__ = e14289;var statearr_14290_14303 = state_14269;(statearr_14290_14303[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14269);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14289;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14304 = state_14269;
state_14269 = G__14304;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14269){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___14292,out))
})();var state__6441__auto__ = (function (){var statearr_14291 = f__6440__auto__.call(null);(statearr_14291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___14292);
return statearr_14291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___14292,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14312 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14312 = (function (ch,f,map_LT_,meta14313){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14313 = meta14313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14312.cljs$lang$type = true;
cljs.core.async.t14312.cljs$lang$ctorStr = "cljs.core.async/t14312";
cljs.core.async.t14312.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t14312");
});
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14315 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14315 = (function (fn1,_,meta14313,ch,f,map_LT_,meta14316){
this.fn1 = fn1;
this._ = _;
this.meta14313 = meta14313;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14316 = meta14316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14315.cljs$lang$type = true;
cljs.core.async.t14315.cljs$lang$ctorStr = "cljs.core.async/t14315";
cljs.core.async.t14315.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t14315");
});})(___$1))
;
cljs.core.async.t14315.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14305_SHARP_){return f1.call(null,(((p1__14305_SHARP_ == null))?null:self__.f.call(null,p1__14305_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14317){var self__ = this;
var _14317__$1 = this;return self__.meta14316;
});})(___$1))
;
cljs.core.async.t14315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14317,meta14316__$1){var self__ = this;
var _14317__$1 = this;return (new cljs.core.async.t14315(self__.fn1,self__._,self__.meta14313,self__.ch,self__.f,self__.map_LT_,meta14316__$1));
});})(___$1))
;
cljs.core.async.__GT_t14315 = ((function (___$1){
return (function __GT_t14315(fn1__$1,___$2,meta14313__$1,ch__$2,f__$2,map_LT___$2,meta14316){return (new cljs.core.async.t14315(fn1__$1,___$2,meta14313__$1,ch__$2,f__$2,map_LT___$2,meta14316));
});})(___$1))
;
}
return (new cljs.core.async.t14315(fn1,___$1,self__.meta14313,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3587__auto__ = ret;if(cljs.core.truth_(and__3587__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3587__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14312.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14314){var self__ = this;
var _14314__$1 = this;return self__.meta14313;
});
cljs.core.async.t14312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14314,meta14313__$1){var self__ = this;
var _14314__$1 = this;return (new cljs.core.async.t14312(self__.ch,self__.f,self__.map_LT_,meta14313__$1));
});
cljs.core.async.__GT_t14312 = (function __GT_t14312(ch__$1,f__$1,map_LT___$1,meta14313){return (new cljs.core.async.t14312(ch__$1,f__$1,map_LT___$1,meta14313));
});
}
return (new cljs.core.async.t14312(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14321 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14321 = (function (ch,f,map_GT_,meta14322){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14322 = meta14322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14321.cljs$lang$type = true;
cljs.core.async.t14321.cljs$lang$ctorStr = "cljs.core.async/t14321";
cljs.core.async.t14321.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t14321");
});
cljs.core.async.t14321.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14321.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14321.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14321.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14321.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14321.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14323){var self__ = this;
var _14323__$1 = this;return self__.meta14322;
});
cljs.core.async.t14321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14323,meta14322__$1){var self__ = this;
var _14323__$1 = this;return (new cljs.core.async.t14321(self__.ch,self__.f,self__.map_GT_,meta14322__$1));
});
cljs.core.async.__GT_t14321 = (function __GT_t14321(ch__$1,f__$1,map_GT___$1,meta14322){return (new cljs.core.async.t14321(ch__$1,f__$1,map_GT___$1,meta14322));
});
}
return (new cljs.core.async.t14321(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14327 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14327 = (function (ch,p,filter_GT_,meta14328){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14328 = meta14328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14327.cljs$lang$type = true;
cljs.core.async.t14327.cljs$lang$ctorStr = "cljs.core.async/t14327";
cljs.core.async.t14327.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t14327");
});
cljs.core.async.t14327.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14327.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14327.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14327.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14329){var self__ = this;
var _14329__$1 = this;return self__.meta14328;
});
cljs.core.async.t14327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14329,meta14328__$1){var self__ = this;
var _14329__$1 = this;return (new cljs.core.async.t14327(self__.ch,self__.p,self__.filter_GT_,meta14328__$1));
});
cljs.core.async.__GT_t14327 = (function __GT_t14327(ch__$1,p__$1,filter_GT___$1,meta14328){return (new cljs.core.async.t14327(ch__$1,p__$1,filter_GT___$1,meta14328));
});
}
return (new cljs.core.async.t14327(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___14412 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___14412,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___14412,out){
return (function (state_14391){var state_val_14392 = (state_14391[(1)]);if((state_val_14392 === (7)))
{var inst_14387 = (state_14391[(2)]);var state_14391__$1 = state_14391;var statearr_14393_14413 = state_14391__$1;(statearr_14393_14413[(2)] = inst_14387);
(statearr_14393_14413[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14392 === (1)))
{var state_14391__$1 = state_14391;var statearr_14394_14414 = state_14391__$1;(statearr_14394_14414[(2)] = null);
(statearr_14394_14414[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14392 === (4)))
{var inst_14373 = (state_14391[(7)]);var inst_14373__$1 = (state_14391[(2)]);var inst_14374 = (inst_14373__$1 == null);var state_14391__$1 = (function (){var statearr_14395 = state_14391;(statearr_14395[(7)] = inst_14373__$1);
return statearr_14395;
})();if(cljs.core.truth_(inst_14374))
{var statearr_14396_14415 = state_14391__$1;(statearr_14396_14415[(1)] = (5));
} else
{var statearr_14397_14416 = state_14391__$1;(statearr_14397_14416[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14392 === (6)))
{var inst_14373 = (state_14391[(7)]);var inst_14378 = p.call(null,inst_14373);var state_14391__$1 = state_14391;if(cljs.core.truth_(inst_14378))
{var statearr_14398_14417 = state_14391__$1;(statearr_14398_14417[(1)] = (8));
} else
{var statearr_14399_14418 = state_14391__$1;(statearr_14399_14418[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14392 === (3)))
{var inst_14389 = (state_14391[(2)]);var state_14391__$1 = state_14391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14391__$1,inst_14389);
} else
{if((state_val_14392 === (2)))
{var state_14391__$1 = state_14391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14391__$1,(4),ch);
} else
{if((state_val_14392 === (11)))
{var inst_14381 = (state_14391[(2)]);var state_14391__$1 = state_14391;var statearr_14400_14419 = state_14391__$1;(statearr_14400_14419[(2)] = inst_14381);
(statearr_14400_14419[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14392 === (9)))
{var state_14391__$1 = state_14391;var statearr_14401_14420 = state_14391__$1;(statearr_14401_14420[(2)] = null);
(statearr_14401_14420[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14392 === (5)))
{var inst_14376 = cljs.core.async.close_BANG_.call(null,out);var state_14391__$1 = state_14391;var statearr_14402_14421 = state_14391__$1;(statearr_14402_14421[(2)] = inst_14376);
(statearr_14402_14421[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14392 === (10)))
{var inst_14384 = (state_14391[(2)]);var state_14391__$1 = (function (){var statearr_14403 = state_14391;(statearr_14403[(8)] = inst_14384);
return statearr_14403;
})();var statearr_14404_14422 = state_14391__$1;(statearr_14404_14422[(2)] = null);
(statearr_14404_14422[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14392 === (8)))
{var inst_14373 = (state_14391[(7)]);var state_14391__$1 = state_14391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14391__$1,(11),out,inst_14373);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___14412,out))
;return ((function (switch__6424__auto__,c__6439__auto___14412,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14408 = [null,null,null,null,null,null,null,null,null];(statearr_14408[(0)] = state_machine__6425__auto__);
(statearr_14408[(1)] = (1));
return statearr_14408;
});
var state_machine__6425__auto____1 = (function (state_14391){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14391);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14409){if((e14409 instanceof Object))
{var ex__6428__auto__ = e14409;var statearr_14410_14423 = state_14391;(statearr_14410_14423[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14391);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14409;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14424 = state_14391;
state_14391 = G__14424;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14391){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___14412,out))
})();var state__6441__auto__ = (function (){var statearr_14411 = f__6440__auto__.call(null);(statearr_14411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___14412);
return statearr_14411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___14412,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__){
return (function (state_14590){var state_val_14591 = (state_14590[(1)]);if((state_val_14591 === (7)))
{var inst_14586 = (state_14590[(2)]);var state_14590__$1 = state_14590;var statearr_14592_14633 = state_14590__$1;(statearr_14592_14633[(2)] = inst_14586);
(statearr_14592_14633[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (20)))
{var inst_14556 = (state_14590[(7)]);var inst_14567 = (state_14590[(2)]);var inst_14568 = cljs.core.next.call(null,inst_14556);var inst_14542 = inst_14568;var inst_14543 = null;var inst_14544 = (0);var inst_14545 = (0);var state_14590__$1 = (function (){var statearr_14593 = state_14590;(statearr_14593[(8)] = inst_14545);
(statearr_14593[(9)] = inst_14542);
(statearr_14593[(10)] = inst_14544);
(statearr_14593[(11)] = inst_14567);
(statearr_14593[(12)] = inst_14543);
return statearr_14593;
})();var statearr_14594_14634 = state_14590__$1;(statearr_14594_14634[(2)] = null);
(statearr_14594_14634[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (1)))
{var state_14590__$1 = state_14590;var statearr_14595_14635 = state_14590__$1;(statearr_14595_14635[(2)] = null);
(statearr_14595_14635[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (4)))
{var inst_14531 = (state_14590[(13)]);var inst_14531__$1 = (state_14590[(2)]);var inst_14532 = (inst_14531__$1 == null);var state_14590__$1 = (function (){var statearr_14596 = state_14590;(statearr_14596[(13)] = inst_14531__$1);
return statearr_14596;
})();if(cljs.core.truth_(inst_14532))
{var statearr_14597_14636 = state_14590__$1;(statearr_14597_14636[(1)] = (5));
} else
{var statearr_14598_14637 = state_14590__$1;(statearr_14598_14637[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (15)))
{var state_14590__$1 = state_14590;var statearr_14602_14638 = state_14590__$1;(statearr_14602_14638[(2)] = null);
(statearr_14602_14638[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (21)))
{var state_14590__$1 = state_14590;var statearr_14603_14639 = state_14590__$1;(statearr_14603_14639[(2)] = null);
(statearr_14603_14639[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (13)))
{var inst_14545 = (state_14590[(8)]);var inst_14542 = (state_14590[(9)]);var inst_14544 = (state_14590[(10)]);var inst_14543 = (state_14590[(12)]);var inst_14552 = (state_14590[(2)]);var inst_14553 = (inst_14545 + (1));var tmp14599 = inst_14542;var tmp14600 = inst_14544;var tmp14601 = inst_14543;var inst_14542__$1 = tmp14599;var inst_14543__$1 = tmp14601;var inst_14544__$1 = tmp14600;var inst_14545__$1 = inst_14553;var state_14590__$1 = (function (){var statearr_14604 = state_14590;(statearr_14604[(8)] = inst_14545__$1);
(statearr_14604[(9)] = inst_14542__$1);
(statearr_14604[(10)] = inst_14544__$1);
(statearr_14604[(14)] = inst_14552);
(statearr_14604[(12)] = inst_14543__$1);
return statearr_14604;
})();var statearr_14605_14640 = state_14590__$1;(statearr_14605_14640[(2)] = null);
(statearr_14605_14640[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (22)))
{var state_14590__$1 = state_14590;var statearr_14606_14641 = state_14590__$1;(statearr_14606_14641[(2)] = null);
(statearr_14606_14641[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (6)))
{var inst_14531 = (state_14590[(13)]);var inst_14540 = f.call(null,inst_14531);var inst_14541 = cljs.core.seq.call(null,inst_14540);var inst_14542 = inst_14541;var inst_14543 = null;var inst_14544 = (0);var inst_14545 = (0);var state_14590__$1 = (function (){var statearr_14607 = state_14590;(statearr_14607[(8)] = inst_14545);
(statearr_14607[(9)] = inst_14542);
(statearr_14607[(10)] = inst_14544);
(statearr_14607[(12)] = inst_14543);
return statearr_14607;
})();var statearr_14608_14642 = state_14590__$1;(statearr_14608_14642[(2)] = null);
(statearr_14608_14642[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (17)))
{var inst_14556 = (state_14590[(7)]);var inst_14560 = cljs.core.chunk_first.call(null,inst_14556);var inst_14561 = cljs.core.chunk_rest.call(null,inst_14556);var inst_14562 = cljs.core.count.call(null,inst_14560);var inst_14542 = inst_14561;var inst_14543 = inst_14560;var inst_14544 = inst_14562;var inst_14545 = (0);var state_14590__$1 = (function (){var statearr_14609 = state_14590;(statearr_14609[(8)] = inst_14545);
(statearr_14609[(9)] = inst_14542);
(statearr_14609[(10)] = inst_14544);
(statearr_14609[(12)] = inst_14543);
return statearr_14609;
})();var statearr_14610_14643 = state_14590__$1;(statearr_14610_14643[(2)] = null);
(statearr_14610_14643[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (3)))
{var inst_14588 = (state_14590[(2)]);var state_14590__$1 = state_14590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14590__$1,inst_14588);
} else
{if((state_val_14591 === (12)))
{var inst_14576 = (state_14590[(2)]);var state_14590__$1 = state_14590;var statearr_14611_14644 = state_14590__$1;(statearr_14611_14644[(2)] = inst_14576);
(statearr_14611_14644[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (2)))
{var state_14590__$1 = state_14590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14590__$1,(4),in$);
} else
{if((state_val_14591 === (23)))
{var inst_14584 = (state_14590[(2)]);var state_14590__$1 = state_14590;var statearr_14612_14645 = state_14590__$1;(statearr_14612_14645[(2)] = inst_14584);
(statearr_14612_14645[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (19)))
{var inst_14571 = (state_14590[(2)]);var state_14590__$1 = state_14590;var statearr_14613_14646 = state_14590__$1;(statearr_14613_14646[(2)] = inst_14571);
(statearr_14613_14646[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (11)))
{var inst_14542 = (state_14590[(9)]);var inst_14556 = (state_14590[(7)]);var inst_14556__$1 = cljs.core.seq.call(null,inst_14542);var state_14590__$1 = (function (){var statearr_14614 = state_14590;(statearr_14614[(7)] = inst_14556__$1);
return statearr_14614;
})();if(inst_14556__$1)
{var statearr_14615_14647 = state_14590__$1;(statearr_14615_14647[(1)] = (14));
} else
{var statearr_14616_14648 = state_14590__$1;(statearr_14616_14648[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (9)))
{var inst_14578 = (state_14590[(2)]);var inst_14579 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14590__$1 = (function (){var statearr_14617 = state_14590;(statearr_14617[(15)] = inst_14578);
return statearr_14617;
})();if(cljs.core.truth_(inst_14579))
{var statearr_14618_14649 = state_14590__$1;(statearr_14618_14649[(1)] = (21));
} else
{var statearr_14619_14650 = state_14590__$1;(statearr_14619_14650[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (5)))
{var inst_14534 = cljs.core.async.close_BANG_.call(null,out);var state_14590__$1 = state_14590;var statearr_14620_14651 = state_14590__$1;(statearr_14620_14651[(2)] = inst_14534);
(statearr_14620_14651[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (14)))
{var inst_14556 = (state_14590[(7)]);var inst_14558 = cljs.core.chunked_seq_QMARK_.call(null,inst_14556);var state_14590__$1 = state_14590;if(inst_14558)
{var statearr_14621_14652 = state_14590__$1;(statearr_14621_14652[(1)] = (17));
} else
{var statearr_14622_14653 = state_14590__$1;(statearr_14622_14653[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (16)))
{var inst_14574 = (state_14590[(2)]);var state_14590__$1 = state_14590;var statearr_14623_14654 = state_14590__$1;(statearr_14623_14654[(2)] = inst_14574);
(statearr_14623_14654[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14591 === (10)))
{var inst_14545 = (state_14590[(8)]);var inst_14543 = (state_14590[(12)]);var inst_14550 = cljs.core._nth.call(null,inst_14543,inst_14545);var state_14590__$1 = state_14590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14590__$1,(13),out,inst_14550);
} else
{if((state_val_14591 === (18)))
{var inst_14556 = (state_14590[(7)]);var inst_14565 = cljs.core.first.call(null,inst_14556);var state_14590__$1 = state_14590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14590__$1,(20),out,inst_14565);
} else
{if((state_val_14591 === (8)))
{var inst_14545 = (state_14590[(8)]);var inst_14544 = (state_14590[(10)]);var inst_14547 = (inst_14545 < inst_14544);var inst_14548 = inst_14547;var state_14590__$1 = state_14590;if(cljs.core.truth_(inst_14548))
{var statearr_14624_14655 = state_14590__$1;(statearr_14624_14655[(1)] = (10));
} else
{var statearr_14625_14656 = state_14590__$1;(statearr_14625_14656[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto__))
;return ((function (switch__6424__auto__,c__6439__auto__){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14629[(0)] = state_machine__6425__auto__);
(statearr_14629[(1)] = (1));
return statearr_14629;
});
var state_machine__6425__auto____1 = (function (state_14590){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14590);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14630){if((e14630 instanceof Object))
{var ex__6428__auto__ = e14630;var statearr_14631_14657 = state_14590;(statearr_14631_14657[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14630;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14658 = state_14590;
state_14590 = G__14658;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14590){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__))
})();var state__6441__auto__ = (function (){var statearr_14632 = f__6440__auto__.call(null);(statearr_14632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_14632;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__))
);
return c__6439__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___14755 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___14755,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___14755,out){
return (function (state_14730){var state_val_14731 = (state_14730[(1)]);if((state_val_14731 === (7)))
{var inst_14725 = (state_14730[(2)]);var state_14730__$1 = state_14730;var statearr_14732_14756 = state_14730__$1;(statearr_14732_14756[(2)] = inst_14725);
(statearr_14732_14756[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14731 === (1)))
{var inst_14707 = null;var state_14730__$1 = (function (){var statearr_14733 = state_14730;(statearr_14733[(7)] = inst_14707);
return statearr_14733;
})();var statearr_14734_14757 = state_14730__$1;(statearr_14734_14757[(2)] = null);
(statearr_14734_14757[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14731 === (4)))
{var inst_14710 = (state_14730[(8)]);var inst_14710__$1 = (state_14730[(2)]);var inst_14711 = (inst_14710__$1 == null);var inst_14712 = cljs.core.not.call(null,inst_14711);var state_14730__$1 = (function (){var statearr_14735 = state_14730;(statearr_14735[(8)] = inst_14710__$1);
return statearr_14735;
})();if(inst_14712)
{var statearr_14736_14758 = state_14730__$1;(statearr_14736_14758[(1)] = (5));
} else
{var statearr_14737_14759 = state_14730__$1;(statearr_14737_14759[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14731 === (6)))
{var state_14730__$1 = state_14730;var statearr_14738_14760 = state_14730__$1;(statearr_14738_14760[(2)] = null);
(statearr_14738_14760[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14731 === (3)))
{var inst_14727 = (state_14730[(2)]);var inst_14728 = cljs.core.async.close_BANG_.call(null,out);var state_14730__$1 = (function (){var statearr_14739 = state_14730;(statearr_14739[(9)] = inst_14727);
return statearr_14739;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14730__$1,inst_14728);
} else
{if((state_val_14731 === (2)))
{var state_14730__$1 = state_14730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14730__$1,(4),ch);
} else
{if((state_val_14731 === (11)))
{var inst_14710 = (state_14730[(8)]);var inst_14719 = (state_14730[(2)]);var inst_14707 = inst_14710;var state_14730__$1 = (function (){var statearr_14740 = state_14730;(statearr_14740[(7)] = inst_14707);
(statearr_14740[(10)] = inst_14719);
return statearr_14740;
})();var statearr_14741_14761 = state_14730__$1;(statearr_14741_14761[(2)] = null);
(statearr_14741_14761[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14731 === (9)))
{var inst_14710 = (state_14730[(8)]);var state_14730__$1 = state_14730;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14730__$1,(11),out,inst_14710);
} else
{if((state_val_14731 === (5)))
{var inst_14707 = (state_14730[(7)]);var inst_14710 = (state_14730[(8)]);var inst_14714 = cljs.core._EQ_.call(null,inst_14710,inst_14707);var state_14730__$1 = state_14730;if(inst_14714)
{var statearr_14743_14762 = state_14730__$1;(statearr_14743_14762[(1)] = (8));
} else
{var statearr_14744_14763 = state_14730__$1;(statearr_14744_14763[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14731 === (10)))
{var inst_14722 = (state_14730[(2)]);var state_14730__$1 = state_14730;var statearr_14745_14764 = state_14730__$1;(statearr_14745_14764[(2)] = inst_14722);
(statearr_14745_14764[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14731 === (8)))
{var inst_14707 = (state_14730[(7)]);var tmp14742 = inst_14707;var inst_14707__$1 = tmp14742;var state_14730__$1 = (function (){var statearr_14746 = state_14730;(statearr_14746[(7)] = inst_14707__$1);
return statearr_14746;
})();var statearr_14747_14765 = state_14730__$1;(statearr_14747_14765[(2)] = null);
(statearr_14747_14765[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___14755,out))
;return ((function (switch__6424__auto__,c__6439__auto___14755,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14751 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14751[(0)] = state_machine__6425__auto__);
(statearr_14751[(1)] = (1));
return statearr_14751;
});
var state_machine__6425__auto____1 = (function (state_14730){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14730);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14752){if((e14752 instanceof Object))
{var ex__6428__auto__ = e14752;var statearr_14753_14766 = state_14730;(statearr_14753_14766[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14730);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14752;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14767 = state_14730;
state_14730 = G__14767;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14730){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___14755,out))
})();var state__6441__auto__ = (function (){var statearr_14754 = f__6440__auto__.call(null);(statearr_14754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___14755);
return statearr_14754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___14755,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___14902 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___14902,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___14902,out){
return (function (state_14872){var state_val_14873 = (state_14872[(1)]);if((state_val_14873 === (7)))
{var inst_14868 = (state_14872[(2)]);var state_14872__$1 = state_14872;var statearr_14874_14903 = state_14872__$1;(statearr_14874_14903[(2)] = inst_14868);
(statearr_14874_14903[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (1)))
{var inst_14835 = (new Array(n));var inst_14836 = inst_14835;var inst_14837 = (0);var state_14872__$1 = (function (){var statearr_14875 = state_14872;(statearr_14875[(7)] = inst_14836);
(statearr_14875[(8)] = inst_14837);
return statearr_14875;
})();var statearr_14876_14904 = state_14872__$1;(statearr_14876_14904[(2)] = null);
(statearr_14876_14904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (4)))
{var inst_14840 = (state_14872[(9)]);var inst_14840__$1 = (state_14872[(2)]);var inst_14841 = (inst_14840__$1 == null);var inst_14842 = cljs.core.not.call(null,inst_14841);var state_14872__$1 = (function (){var statearr_14877 = state_14872;(statearr_14877[(9)] = inst_14840__$1);
return statearr_14877;
})();if(inst_14842)
{var statearr_14878_14905 = state_14872__$1;(statearr_14878_14905[(1)] = (5));
} else
{var statearr_14879_14906 = state_14872__$1;(statearr_14879_14906[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (15)))
{var inst_14862 = (state_14872[(2)]);var state_14872__$1 = state_14872;var statearr_14880_14907 = state_14872__$1;(statearr_14880_14907[(2)] = inst_14862);
(statearr_14880_14907[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (13)))
{var state_14872__$1 = state_14872;var statearr_14881_14908 = state_14872__$1;(statearr_14881_14908[(2)] = null);
(statearr_14881_14908[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (6)))
{var inst_14837 = (state_14872[(8)]);var inst_14858 = (inst_14837 > (0));var state_14872__$1 = state_14872;if(cljs.core.truth_(inst_14858))
{var statearr_14882_14909 = state_14872__$1;(statearr_14882_14909[(1)] = (12));
} else
{var statearr_14883_14910 = state_14872__$1;(statearr_14883_14910[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (3)))
{var inst_14870 = (state_14872[(2)]);var state_14872__$1 = state_14872;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14872__$1,inst_14870);
} else
{if((state_val_14873 === (12)))
{var inst_14836 = (state_14872[(7)]);var inst_14860 = cljs.core.vec.call(null,inst_14836);var state_14872__$1 = state_14872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14872__$1,(15),out,inst_14860);
} else
{if((state_val_14873 === (2)))
{var state_14872__$1 = state_14872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14872__$1,(4),ch);
} else
{if((state_val_14873 === (11)))
{var inst_14852 = (state_14872[(2)]);var inst_14853 = (new Array(n));var inst_14836 = inst_14853;var inst_14837 = (0);var state_14872__$1 = (function (){var statearr_14884 = state_14872;(statearr_14884[(7)] = inst_14836);
(statearr_14884[(8)] = inst_14837);
(statearr_14884[(10)] = inst_14852);
return statearr_14884;
})();var statearr_14885_14911 = state_14872__$1;(statearr_14885_14911[(2)] = null);
(statearr_14885_14911[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (9)))
{var inst_14836 = (state_14872[(7)]);var inst_14850 = cljs.core.vec.call(null,inst_14836);var state_14872__$1 = state_14872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14872__$1,(11),out,inst_14850);
} else
{if((state_val_14873 === (5)))
{var inst_14840 = (state_14872[(9)]);var inst_14836 = (state_14872[(7)]);var inst_14845 = (state_14872[(11)]);var inst_14837 = (state_14872[(8)]);var inst_14844 = (inst_14836[inst_14837] = inst_14840);var inst_14845__$1 = (inst_14837 + (1));var inst_14846 = (inst_14845__$1 < n);var state_14872__$1 = (function (){var statearr_14886 = state_14872;(statearr_14886[(12)] = inst_14844);
(statearr_14886[(11)] = inst_14845__$1);
return statearr_14886;
})();if(cljs.core.truth_(inst_14846))
{var statearr_14887_14912 = state_14872__$1;(statearr_14887_14912[(1)] = (8));
} else
{var statearr_14888_14913 = state_14872__$1;(statearr_14888_14913[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (14)))
{var inst_14865 = (state_14872[(2)]);var inst_14866 = cljs.core.async.close_BANG_.call(null,out);var state_14872__$1 = (function (){var statearr_14890 = state_14872;(statearr_14890[(13)] = inst_14865);
return statearr_14890;
})();var statearr_14891_14914 = state_14872__$1;(statearr_14891_14914[(2)] = inst_14866);
(statearr_14891_14914[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (10)))
{var inst_14856 = (state_14872[(2)]);var state_14872__$1 = state_14872;var statearr_14892_14915 = state_14872__$1;(statearr_14892_14915[(2)] = inst_14856);
(statearr_14892_14915[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (8)))
{var inst_14836 = (state_14872[(7)]);var inst_14845 = (state_14872[(11)]);var tmp14889 = inst_14836;var inst_14836__$1 = tmp14889;var inst_14837 = inst_14845;var state_14872__$1 = (function (){var statearr_14893 = state_14872;(statearr_14893[(7)] = inst_14836__$1);
(statearr_14893[(8)] = inst_14837);
return statearr_14893;
})();var statearr_14894_14916 = state_14872__$1;(statearr_14894_14916[(2)] = null);
(statearr_14894_14916[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___14902,out))
;return ((function (switch__6424__auto__,c__6439__auto___14902,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14898[(0)] = state_machine__6425__auto__);
(statearr_14898[(1)] = (1));
return statearr_14898;
});
var state_machine__6425__auto____1 = (function (state_14872){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14872);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14899){if((e14899 instanceof Object))
{var ex__6428__auto__ = e14899;var statearr_14900_14917 = state_14872;(statearr_14900_14917[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14872);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14899;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14918 = state_14872;
state_14872 = G__14918;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14872){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___14902,out))
})();var state__6441__auto__ = (function (){var statearr_14901 = f__6440__auto__.call(null);(statearr_14901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___14902);
return statearr_14901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___14902,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___15061 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___15061,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___15061,out){
return (function (state_15031){var state_val_15032 = (state_15031[(1)]);if((state_val_15032 === (7)))
{var inst_15027 = (state_15031[(2)]);var state_15031__$1 = state_15031;var statearr_15033_15062 = state_15031__$1;(statearr_15033_15062[(2)] = inst_15027);
(statearr_15033_15062[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15032 === (1)))
{var inst_14990 = [];var inst_14991 = inst_14990;var inst_14992 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15031__$1 = (function (){var statearr_15034 = state_15031;(statearr_15034[(7)] = inst_14991);
(statearr_15034[(8)] = inst_14992);
return statearr_15034;
})();var statearr_15035_15063 = state_15031__$1;(statearr_15035_15063[(2)] = null);
(statearr_15035_15063[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15032 === (4)))
{var inst_14995 = (state_15031[(9)]);var inst_14995__$1 = (state_15031[(2)]);var inst_14996 = (inst_14995__$1 == null);var inst_14997 = cljs.core.not.call(null,inst_14996);var state_15031__$1 = (function (){var statearr_15036 = state_15031;(statearr_15036[(9)] = inst_14995__$1);
return statearr_15036;
})();if(inst_14997)
{var statearr_15037_15064 = state_15031__$1;(statearr_15037_15064[(1)] = (5));
} else
{var statearr_15038_15065 = state_15031__$1;(statearr_15038_15065[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15032 === (15)))
{var inst_15021 = (state_15031[(2)]);var state_15031__$1 = state_15031;var statearr_15039_15066 = state_15031__$1;(statearr_15039_15066[(2)] = inst_15021);
(statearr_15039_15066[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15032 === (13)))
{var state_15031__$1 = state_15031;var statearr_15040_15067 = state_15031__$1;(statearr_15040_15067[(2)] = null);
(statearr_15040_15067[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15032 === (6)))
{var inst_14991 = (state_15031[(7)]);var inst_15016 = inst_14991.length;var inst_15017 = (inst_15016 > (0));var state_15031__$1 = state_15031;if(cljs.core.truth_(inst_15017))
{var statearr_15041_15068 = state_15031__$1;(statearr_15041_15068[(1)] = (12));
} else
{var statearr_15042_15069 = state_15031__$1;(statearr_15042_15069[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15032 === (3)))
{var inst_15029 = (state_15031[(2)]);var state_15031__$1 = state_15031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15031__$1,inst_15029);
} else
{if((state_val_15032 === (12)))
{var inst_14991 = (state_15031[(7)]);var inst_15019 = cljs.core.vec.call(null,inst_14991);var state_15031__$1 = state_15031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15031__$1,(15),out,inst_15019);
} else
{if((state_val_15032 === (2)))
{var state_15031__$1 = state_15031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15031__$1,(4),ch);
} else
{if((state_val_15032 === (11)))
{var inst_14995 = (state_15031[(9)]);var inst_14999 = (state_15031[(10)]);var inst_15009 = (state_15031[(2)]);var inst_15010 = [];var inst_15011 = inst_15010.push(inst_14995);var inst_14991 = inst_15010;var inst_14992 = inst_14999;var state_15031__$1 = (function (){var statearr_15043 = state_15031;(statearr_15043[(7)] = inst_14991);
(statearr_15043[(11)] = inst_15009);
(statearr_15043[(12)] = inst_15011);
(statearr_15043[(8)] = inst_14992);
return statearr_15043;
})();var statearr_15044_15070 = state_15031__$1;(statearr_15044_15070[(2)] = null);
(statearr_15044_15070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15032 === (9)))
{var inst_14991 = (state_15031[(7)]);var inst_15007 = cljs.core.vec.call(null,inst_14991);var state_15031__$1 = state_15031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15031__$1,(11),out,inst_15007);
} else
{if((state_val_15032 === (5)))
{var inst_14995 = (state_15031[(9)]);var inst_14992 = (state_15031[(8)]);var inst_14999 = (state_15031[(10)]);var inst_14999__$1 = f.call(null,inst_14995);var inst_15000 = cljs.core._EQ_.call(null,inst_14999__$1,inst_14992);var inst_15001 = cljs.core.keyword_identical_QMARK_.call(null,inst_14992,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15002 = (inst_15000) || (inst_15001);var state_15031__$1 = (function (){var statearr_15045 = state_15031;(statearr_15045[(10)] = inst_14999__$1);
return statearr_15045;
})();if(cljs.core.truth_(inst_15002))
{var statearr_15046_15071 = state_15031__$1;(statearr_15046_15071[(1)] = (8));
} else
{var statearr_15047_15072 = state_15031__$1;(statearr_15047_15072[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15032 === (14)))
{var inst_15024 = (state_15031[(2)]);var inst_15025 = cljs.core.async.close_BANG_.call(null,out);var state_15031__$1 = (function (){var statearr_15049 = state_15031;(statearr_15049[(13)] = inst_15024);
return statearr_15049;
})();var statearr_15050_15073 = state_15031__$1;(statearr_15050_15073[(2)] = inst_15025);
(statearr_15050_15073[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15032 === (10)))
{var inst_15014 = (state_15031[(2)]);var state_15031__$1 = state_15031;var statearr_15051_15074 = state_15031__$1;(statearr_15051_15074[(2)] = inst_15014);
(statearr_15051_15074[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15032 === (8)))
{var inst_14995 = (state_15031[(9)]);var inst_14991 = (state_15031[(7)]);var inst_14999 = (state_15031[(10)]);var inst_15004 = inst_14991.push(inst_14995);var tmp15048 = inst_14991;var inst_14991__$1 = tmp15048;var inst_14992 = inst_14999;var state_15031__$1 = (function (){var statearr_15052 = state_15031;(statearr_15052[(14)] = inst_15004);
(statearr_15052[(7)] = inst_14991__$1);
(statearr_15052[(8)] = inst_14992);
return statearr_15052;
})();var statearr_15053_15075 = state_15031__$1;(statearr_15053_15075[(2)] = null);
(statearr_15053_15075[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___15061,out))
;return ((function (switch__6424__auto__,c__6439__auto___15061,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_15057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15057[(0)] = state_machine__6425__auto__);
(statearr_15057[(1)] = (1));
return statearr_15057;
});
var state_machine__6425__auto____1 = (function (state_15031){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_15031);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e15058){if((e15058 instanceof Object))
{var ex__6428__auto__ = e15058;var statearr_15059_15076 = state_15031;(statearr_15059_15076[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15031);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15058;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15077 = state_15031;
state_15031 = G__15077;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_15031){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_15031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___15061,out))
})();var state__6441__auto__ = (function (){var statearr_15060 = f__6440__auto__.call(null);(statearr_15060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___15061);
return statearr_15060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___15061,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map