// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t38744 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38744 = (function (f,fn_handler,meta38745){
this.f = f;
this.fn_handler = fn_handler;
this.meta38745 = meta38745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38744.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t38744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t38744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38746){
var self__ = this;
var _38746__$1 = this;
return self__.meta38745;
});

cljs.core.async.t38744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38746,meta38745__$1){
var self__ = this;
var _38746__$1 = this;
return (new cljs.core.async.t38744(self__.f,self__.fn_handler,meta38745__$1));
});

cljs.core.async.t38744.cljs$lang$type = true;

cljs.core.async.t38744.cljs$lang$ctorStr = "cljs.core.async/t38744";

cljs.core.async.t38744.cljs$lang$ctorPrWriter = (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"cljs.core.async/t38744");
});

cljs.core.async.__GT_t38744 = (function __GT_t38744(f__$1,fn_handler__$1,meta38745){
return (new cljs.core.async.t38744(f__$1,fn_handler__$1,meta38745));
});

}

return (new cljs.core.async.t38744(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__38748 = buff;
if(G__38748){
var bit__4598__auto__ = null;
if(cljs.core.truth_((function (){var or__3917__auto__ = bit__4598__auto__;
if(cljs.core.truth_(or__3917__auto__)){
return or__3917__auto__;
} else {
return G__38748.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__38748.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__38748);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__38748);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38749 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38749);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38749,ret){
return (function (){
return fn1.call(null,val_38749);
});})(val_38749,ret))
);
}
} else {
}

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
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4804__auto___38750 = n;
var x_38751 = (0);
while(true){
if((x_38751 < n__4804__auto___38750)){
(a[x_38751] = (0));

var G__38752 = (x_38751 + (1));
x_38751 = G__38752;
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

var G__38753 = (i + (1));
i = G__38753;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t38757 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38757 = (function (flag,alt_flag,meta38758){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta38758 = meta38758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38757.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t38757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t38757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38759){
var self__ = this;
var _38759__$1 = this;
return self__.meta38758;
});})(flag))
;

cljs.core.async.t38757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38759,meta38758__$1){
var self__ = this;
var _38759__$1 = this;
return (new cljs.core.async.t38757(self__.flag,self__.alt_flag,meta38758__$1));
});})(flag))
;

cljs.core.async.t38757.cljs$lang$type = true;

cljs.core.async.t38757.cljs$lang$ctorStr = "cljs.core.async/t38757";

cljs.core.async.t38757.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"cljs.core.async/t38757");
});})(flag))
;

cljs.core.async.__GT_t38757 = ((function (flag){
return (function __GT_t38757(flag__$1,alt_flag__$1,meta38758){
return (new cljs.core.async.t38757(flag__$1,alt_flag__$1,meta38758));
});})(flag))
;

}

return (new cljs.core.async.t38757(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t38763 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38763 = (function (cb,flag,alt_handler,meta38764){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta38764 = meta38764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38763.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t38763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t38763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38765){
var self__ = this;
var _38765__$1 = this;
return self__.meta38764;
});

cljs.core.async.t38763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38765,meta38764__$1){
var self__ = this;
var _38765__$1 = this;
return (new cljs.core.async.t38763(self__.cb,self__.flag,self__.alt_handler,meta38764__$1));
});

cljs.core.async.t38763.cljs$lang$type = true;

cljs.core.async.t38763.cljs$lang$ctorStr = "cljs.core.async/t38763";

cljs.core.async.t38763.cljs$lang$ctorPrWriter = (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"cljs.core.async/t38763");
});

cljs.core.async.__GT_t38763 = (function __GT_t38763(cb__$1,flag__$1,alt_handler__$1,meta38764){
return (new cljs.core.async.t38763(cb__$1,flag__$1,alt_handler__$1,meta38764));
});

}

return (new cljs.core.async.t38763(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
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
return (function (p1__38766_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38766_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38767_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38767_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3917__auto__ = wport;
if(cljs.core.truth_(or__3917__auto__)){
return or__3917__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38768 = (i + (1));
i = G__38768;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3917__auto__ = ret;
if(cljs.core.truth_(or__3917__auto__)){
return or__3917__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3905__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3905__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3905__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
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
var alts_BANG___delegate = function (ports,p__38769){
var map__38771 = p__38769;
var map__38771__$1 = ((cljs.core.seq_QMARK_.call(null,map__38771))?cljs.core.apply.call(null,cljs.core.hash_map,map__38771):map__38771);
var opts = map__38771__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

};
var alts_BANG_ = function (ports,var_args){
var p__38769 = null;
if (arguments.length > 1) {
var G__38772__i = 0, G__38772__a = new Array(arguments.length -  1);
while (G__38772__i < G__38772__a.length) {G__38772__a[G__38772__i] = arguments[G__38772__i + 1]; ++G__38772__i;}
  p__38769 = new cljs.core.IndexedSeq(G__38772__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__38769);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__38773){
var ports = cljs.core.first(arglist__38773);
var p__38769 = cljs.core.rest(arglist__38773);
return alts_BANG___delegate(ports,p__38769);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t38781 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38781 = (function (ch,f,map_LT_,meta38782){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta38782 = meta38782;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38781.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38781.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t38781.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38781.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t38784 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38784 = (function (fn1,_,meta38782,map_LT_,f,ch,meta38785){
this.fn1 = fn1;
this._ = _;
this.meta38782 = meta38782;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38785 = meta38785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38784.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38784.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t38784.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t38784.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38774_SHARP_){
return f1.call(null,(((p1__38774_SHARP_ == null))?null:self__.f.call(null,p1__38774_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t38784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38786){
var self__ = this;
var _38786__$1 = this;
return self__.meta38785;
});})(___$1))
;

cljs.core.async.t38784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38786,meta38785__$1){
var self__ = this;
var _38786__$1 = this;
return (new cljs.core.async.t38784(self__.fn1,self__._,self__.meta38782,self__.map_LT_,self__.f,self__.ch,meta38785__$1));
});})(___$1))
;

cljs.core.async.t38784.cljs$lang$type = true;

cljs.core.async.t38784.cljs$lang$ctorStr = "cljs.core.async/t38784";

cljs.core.async.t38784.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"cljs.core.async/t38784");
});})(___$1))
;

cljs.core.async.__GT_t38784 = ((function (___$1){
return (function __GT_t38784(fn1__$1,___$2,meta38782__$1,map_LT___$1,f__$1,ch__$1,meta38785){
return (new cljs.core.async.t38784(fn1__$1,___$2,meta38782__$1,map_LT___$1,f__$1,ch__$1,meta38785));
});})(___$1))
;

}

return (new cljs.core.async.t38784(fn1,___$1,self__.meta38782,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3905__auto__ = ret;
if(cljs.core.truth_(and__3905__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3905__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t38781.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38781.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38781.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38783){
var self__ = this;
var _38783__$1 = this;
return self__.meta38782;
});

cljs.core.async.t38781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38783,meta38782__$1){
var self__ = this;
var _38783__$1 = this;
return (new cljs.core.async.t38781(self__.ch,self__.f,self__.map_LT_,meta38782__$1));
});

cljs.core.async.t38781.cljs$lang$type = true;

cljs.core.async.t38781.cljs$lang$ctorStr = "cljs.core.async/t38781";

cljs.core.async.t38781.cljs$lang$ctorPrWriter = (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"cljs.core.async/t38781");
});

cljs.core.async.__GT_t38781 = (function __GT_t38781(ch__$1,f__$1,map_LT___$1,meta38782){
return (new cljs.core.async.t38781(ch__$1,f__$1,map_LT___$1,meta38782));
});

}

return (new cljs.core.async.t38781(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t38790 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38790 = (function (ch,f,map_GT_,meta38791){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta38791 = meta38791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38790.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t38790.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38790.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38792){
var self__ = this;
var _38792__$1 = this;
return self__.meta38791;
});

cljs.core.async.t38790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38792,meta38791__$1){
var self__ = this;
var _38792__$1 = this;
return (new cljs.core.async.t38790(self__.ch,self__.f,self__.map_GT_,meta38791__$1));
});

cljs.core.async.t38790.cljs$lang$type = true;

cljs.core.async.t38790.cljs$lang$ctorStr = "cljs.core.async/t38790";

cljs.core.async.t38790.cljs$lang$ctorPrWriter = (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"cljs.core.async/t38790");
});

cljs.core.async.__GT_t38790 = (function __GT_t38790(ch__$1,f__$1,map_GT___$1,meta38791){
return (new cljs.core.async.t38790(ch__$1,f__$1,map_GT___$1,meta38791));
});

}

return (new cljs.core.async.t38790(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t38796 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38796 = (function (ch,p,filter_GT_,meta38797){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta38797 = meta38797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38796.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t38796.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38796.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38796.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38798){
var self__ = this;
var _38798__$1 = this;
return self__.meta38797;
});

cljs.core.async.t38796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38798,meta38797__$1){
var self__ = this;
var _38798__$1 = this;
return (new cljs.core.async.t38796(self__.ch,self__.p,self__.filter_GT_,meta38797__$1));
});

cljs.core.async.t38796.cljs$lang$type = true;

cljs.core.async.t38796.cljs$lang$ctorStr = "cljs.core.async/t38796";

cljs.core.async.t38796.cljs$lang$ctorPrWriter = (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"cljs.core.async/t38796");
});

cljs.core.async.__GT_t38796 = (function __GT_t38796(ch__$1,p__$1,filter_GT___$1,meta38797){
return (new cljs.core.async.t38796(ch__$1,p__$1,filter_GT___$1,meta38797));
});

}

return (new cljs.core.async.t38796(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11350__auto___38881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___38881,out){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___38881,out){
return (function (state_38860){
var state_val_38861 = (state_38860[(1)]);
if((state_val_38861 === (7))){
var inst_38856 = (state_38860[(2)]);
var state_38860__$1 = state_38860;
var statearr_38862_38882 = state_38860__$1;
(statearr_38862_38882[(2)] = inst_38856);

(statearr_38862_38882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38861 === (1))){
var state_38860__$1 = state_38860;
var statearr_38863_38883 = state_38860__$1;
(statearr_38863_38883[(2)] = null);

(statearr_38863_38883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38861 === (4))){
var inst_38842 = (state_38860[(7)]);
var inst_38842__$1 = (state_38860[(2)]);
var inst_38843 = (inst_38842__$1 == null);
var state_38860__$1 = (function (){var statearr_38864 = state_38860;
(statearr_38864[(7)] = inst_38842__$1);

return statearr_38864;
})();
if(cljs.core.truth_(inst_38843)){
var statearr_38865_38884 = state_38860__$1;
(statearr_38865_38884[(1)] = (5));

} else {
var statearr_38866_38885 = state_38860__$1;
(statearr_38866_38885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38861 === (6))){
var inst_38842 = (state_38860[(7)]);
var inst_38847 = p.call(null,inst_38842);
var state_38860__$1 = state_38860;
if(cljs.core.truth_(inst_38847)){
var statearr_38867_38886 = state_38860__$1;
(statearr_38867_38886[(1)] = (8));

} else {
var statearr_38868_38887 = state_38860__$1;
(statearr_38868_38887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38861 === (3))){
var inst_38858 = (state_38860[(2)]);
var state_38860__$1 = state_38860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38860__$1,inst_38858);
} else {
if((state_val_38861 === (2))){
var state_38860__$1 = state_38860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38860__$1,(4),ch);
} else {
if((state_val_38861 === (11))){
var inst_38850 = (state_38860[(2)]);
var state_38860__$1 = state_38860;
var statearr_38869_38888 = state_38860__$1;
(statearr_38869_38888[(2)] = inst_38850);

(statearr_38869_38888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38861 === (9))){
var state_38860__$1 = state_38860;
var statearr_38870_38889 = state_38860__$1;
(statearr_38870_38889[(2)] = null);

(statearr_38870_38889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38861 === (5))){
var inst_38845 = cljs.core.async.close_BANG_.call(null,out);
var state_38860__$1 = state_38860;
var statearr_38871_38890 = state_38860__$1;
(statearr_38871_38890[(2)] = inst_38845);

(statearr_38871_38890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38861 === (10))){
var inst_38853 = (state_38860[(2)]);
var state_38860__$1 = (function (){var statearr_38872 = state_38860;
(statearr_38872[(8)] = inst_38853);

return statearr_38872;
})();
var statearr_38873_38891 = state_38860__$1;
(statearr_38873_38891[(2)] = null);

(statearr_38873_38891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38861 === (8))){
var inst_38842 = (state_38860[(7)]);
var state_38860__$1 = state_38860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38860__$1,(11),out,inst_38842);
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
});})(c__11350__auto___38881,out))
;
return ((function (switch__11253__auto__,c__11350__auto___38881,out){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_38877 = [null,null,null,null,null,null,null,null,null];
(statearr_38877[(0)] = state_machine__11254__auto__);

(statearr_38877[(1)] = (1));

return statearr_38877;
});
var state_machine__11254__auto____1 = (function (state_38860){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_38860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e38878){if((e38878 instanceof Object)){
var ex__11257__auto__ = e38878;
var statearr_38879_38892 = state_38860;
(statearr_38879_38892[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38893 = state_38860;
state_38860 = G__38893;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_38860){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_38860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___38881,out))
})();
var state__11352__auto__ = (function (){var statearr_38880 = f__11351__auto__.call(null);
(statearr_38880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___38881);

return statearr_38880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___38881,out))
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
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__11350__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto__){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto__){
return (function (state_39059){
var state_val_39060 = (state_39059[(1)]);
if((state_val_39060 === (7))){
var inst_39055 = (state_39059[(2)]);
var state_39059__$1 = state_39059;
var statearr_39061_39102 = state_39059__$1;
(statearr_39061_39102[(2)] = inst_39055);

(statearr_39061_39102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (20))){
var inst_39025 = (state_39059[(7)]);
var inst_39036 = (state_39059[(2)]);
var inst_39037 = cljs.core.next.call(null,inst_39025);
var inst_39011 = inst_39037;
var inst_39012 = null;
var inst_39013 = (0);
var inst_39014 = (0);
var state_39059__$1 = (function (){var statearr_39062 = state_39059;
(statearr_39062[(8)] = inst_39013);

(statearr_39062[(9)] = inst_39014);

(statearr_39062[(10)] = inst_39012);

(statearr_39062[(11)] = inst_39011);

(statearr_39062[(12)] = inst_39036);

return statearr_39062;
})();
var statearr_39063_39103 = state_39059__$1;
(statearr_39063_39103[(2)] = null);

(statearr_39063_39103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (1))){
var state_39059__$1 = state_39059;
var statearr_39064_39104 = state_39059__$1;
(statearr_39064_39104[(2)] = null);

(statearr_39064_39104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (4))){
var inst_39000 = (state_39059[(13)]);
var inst_39000__$1 = (state_39059[(2)]);
var inst_39001 = (inst_39000__$1 == null);
var state_39059__$1 = (function (){var statearr_39065 = state_39059;
(statearr_39065[(13)] = inst_39000__$1);

return statearr_39065;
})();
if(cljs.core.truth_(inst_39001)){
var statearr_39066_39105 = state_39059__$1;
(statearr_39066_39105[(1)] = (5));

} else {
var statearr_39067_39106 = state_39059__$1;
(statearr_39067_39106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (15))){
var state_39059__$1 = state_39059;
var statearr_39071_39107 = state_39059__$1;
(statearr_39071_39107[(2)] = null);

(statearr_39071_39107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (21))){
var state_39059__$1 = state_39059;
var statearr_39072_39108 = state_39059__$1;
(statearr_39072_39108[(2)] = null);

(statearr_39072_39108[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (13))){
var inst_39013 = (state_39059[(8)]);
var inst_39014 = (state_39059[(9)]);
var inst_39012 = (state_39059[(10)]);
var inst_39011 = (state_39059[(11)]);
var inst_39021 = (state_39059[(2)]);
var inst_39022 = (inst_39014 + (1));
var tmp39068 = inst_39013;
var tmp39069 = inst_39012;
var tmp39070 = inst_39011;
var inst_39011__$1 = tmp39070;
var inst_39012__$1 = tmp39069;
var inst_39013__$1 = tmp39068;
var inst_39014__$1 = inst_39022;
var state_39059__$1 = (function (){var statearr_39073 = state_39059;
(statearr_39073[(8)] = inst_39013__$1);

(statearr_39073[(9)] = inst_39014__$1);

(statearr_39073[(10)] = inst_39012__$1);

(statearr_39073[(14)] = inst_39021);

(statearr_39073[(11)] = inst_39011__$1);

return statearr_39073;
})();
var statearr_39074_39109 = state_39059__$1;
(statearr_39074_39109[(2)] = null);

(statearr_39074_39109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (22))){
var state_39059__$1 = state_39059;
var statearr_39075_39110 = state_39059__$1;
(statearr_39075_39110[(2)] = null);

(statearr_39075_39110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (6))){
var inst_39000 = (state_39059[(13)]);
var inst_39009 = f.call(null,inst_39000);
var inst_39010 = cljs.core.seq.call(null,inst_39009);
var inst_39011 = inst_39010;
var inst_39012 = null;
var inst_39013 = (0);
var inst_39014 = (0);
var state_39059__$1 = (function (){var statearr_39076 = state_39059;
(statearr_39076[(8)] = inst_39013);

(statearr_39076[(9)] = inst_39014);

(statearr_39076[(10)] = inst_39012);

(statearr_39076[(11)] = inst_39011);

return statearr_39076;
})();
var statearr_39077_39111 = state_39059__$1;
(statearr_39077_39111[(2)] = null);

(statearr_39077_39111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (17))){
var inst_39025 = (state_39059[(7)]);
var inst_39029 = cljs.core.chunk_first.call(null,inst_39025);
var inst_39030 = cljs.core.chunk_rest.call(null,inst_39025);
var inst_39031 = cljs.core.count.call(null,inst_39029);
var inst_39011 = inst_39030;
var inst_39012 = inst_39029;
var inst_39013 = inst_39031;
var inst_39014 = (0);
var state_39059__$1 = (function (){var statearr_39078 = state_39059;
(statearr_39078[(8)] = inst_39013);

(statearr_39078[(9)] = inst_39014);

(statearr_39078[(10)] = inst_39012);

(statearr_39078[(11)] = inst_39011);

return statearr_39078;
})();
var statearr_39079_39112 = state_39059__$1;
(statearr_39079_39112[(2)] = null);

(statearr_39079_39112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (3))){
var inst_39057 = (state_39059[(2)]);
var state_39059__$1 = state_39059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39059__$1,inst_39057);
} else {
if((state_val_39060 === (12))){
var inst_39045 = (state_39059[(2)]);
var state_39059__$1 = state_39059;
var statearr_39080_39113 = state_39059__$1;
(statearr_39080_39113[(2)] = inst_39045);

(statearr_39080_39113[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (2))){
var state_39059__$1 = state_39059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39059__$1,(4),in$);
} else {
if((state_val_39060 === (23))){
var inst_39053 = (state_39059[(2)]);
var state_39059__$1 = state_39059;
var statearr_39081_39114 = state_39059__$1;
(statearr_39081_39114[(2)] = inst_39053);

(statearr_39081_39114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (19))){
var inst_39040 = (state_39059[(2)]);
var state_39059__$1 = state_39059;
var statearr_39082_39115 = state_39059__$1;
(statearr_39082_39115[(2)] = inst_39040);

(statearr_39082_39115[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (11))){
var inst_39025 = (state_39059[(7)]);
var inst_39011 = (state_39059[(11)]);
var inst_39025__$1 = cljs.core.seq.call(null,inst_39011);
var state_39059__$1 = (function (){var statearr_39083 = state_39059;
(statearr_39083[(7)] = inst_39025__$1);

return statearr_39083;
})();
if(inst_39025__$1){
var statearr_39084_39116 = state_39059__$1;
(statearr_39084_39116[(1)] = (14));

} else {
var statearr_39085_39117 = state_39059__$1;
(statearr_39085_39117[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (9))){
var inst_39047 = (state_39059[(2)]);
var inst_39048 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39059__$1 = (function (){var statearr_39086 = state_39059;
(statearr_39086[(15)] = inst_39047);

return statearr_39086;
})();
if(cljs.core.truth_(inst_39048)){
var statearr_39087_39118 = state_39059__$1;
(statearr_39087_39118[(1)] = (21));

} else {
var statearr_39088_39119 = state_39059__$1;
(statearr_39088_39119[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (5))){
var inst_39003 = cljs.core.async.close_BANG_.call(null,out);
var state_39059__$1 = state_39059;
var statearr_39089_39120 = state_39059__$1;
(statearr_39089_39120[(2)] = inst_39003);

(statearr_39089_39120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (14))){
var inst_39025 = (state_39059[(7)]);
var inst_39027 = cljs.core.chunked_seq_QMARK_.call(null,inst_39025);
var state_39059__$1 = state_39059;
if(inst_39027){
var statearr_39090_39121 = state_39059__$1;
(statearr_39090_39121[(1)] = (17));

} else {
var statearr_39091_39122 = state_39059__$1;
(statearr_39091_39122[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (16))){
var inst_39043 = (state_39059[(2)]);
var state_39059__$1 = state_39059;
var statearr_39092_39123 = state_39059__$1;
(statearr_39092_39123[(2)] = inst_39043);

(statearr_39092_39123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (10))){
var inst_39014 = (state_39059[(9)]);
var inst_39012 = (state_39059[(10)]);
var inst_39019 = cljs.core._nth.call(null,inst_39012,inst_39014);
var state_39059__$1 = state_39059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39059__$1,(13),out,inst_39019);
} else {
if((state_val_39060 === (18))){
var inst_39025 = (state_39059[(7)]);
var inst_39034 = cljs.core.first.call(null,inst_39025);
var state_39059__$1 = state_39059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39059__$1,(20),out,inst_39034);
} else {
if((state_val_39060 === (8))){
var inst_39013 = (state_39059[(8)]);
var inst_39014 = (state_39059[(9)]);
var inst_39016 = (inst_39014 < inst_39013);
var inst_39017 = inst_39016;
var state_39059__$1 = state_39059;
if(cljs.core.truth_(inst_39017)){
var statearr_39093_39124 = state_39059__$1;
(statearr_39093_39124[(1)] = (10));

} else {
var statearr_39094_39125 = state_39059__$1;
(statearr_39094_39125[(1)] = (11));

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
});})(c__11350__auto__))
;
return ((function (switch__11253__auto__,c__11350__auto__){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_39098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39098[(0)] = state_machine__11254__auto__);

(statearr_39098[(1)] = (1));

return statearr_39098;
});
var state_machine__11254__auto____1 = (function (state_39059){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_39059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e39099){if((e39099 instanceof Object)){
var ex__11257__auto__ = e39099;
var statearr_39100_39126 = state_39059;
(statearr_39100_39126[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39127 = state_39059;
state_39059 = G__39127;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_39059){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_39059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto__))
})();
var state__11352__auto__ = (function (){var statearr_39101 = f__11351__auto__.call(null);
(statearr_39101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto__);

return statearr_39101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto__))
);

return c__11350__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__11350__auto___39222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___39222){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___39222){
return (function (state_39198){
var state_val_39199 = (state_39198[(1)]);
if((state_val_39199 === (7))){
var inst_39194 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
var statearr_39200_39223 = state_39198__$1;
(statearr_39200_39223[(2)] = inst_39194);

(statearr_39200_39223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (1))){
var state_39198__$1 = state_39198;
var statearr_39201_39224 = state_39198__$1;
(statearr_39201_39224[(2)] = null);

(statearr_39201_39224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (4))){
var inst_39177 = (state_39198[(7)]);
var inst_39177__$1 = (state_39198[(2)]);
var inst_39178 = (inst_39177__$1 == null);
var state_39198__$1 = (function (){var statearr_39202 = state_39198;
(statearr_39202[(7)] = inst_39177__$1);

return statearr_39202;
})();
if(cljs.core.truth_(inst_39178)){
var statearr_39203_39225 = state_39198__$1;
(statearr_39203_39225[(1)] = (5));

} else {
var statearr_39204_39226 = state_39198__$1;
(statearr_39204_39226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (13))){
var state_39198__$1 = state_39198;
var statearr_39205_39227 = state_39198__$1;
(statearr_39205_39227[(2)] = null);

(statearr_39205_39227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (6))){
var inst_39177 = (state_39198[(7)]);
var state_39198__$1 = state_39198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39198__$1,(11),to,inst_39177);
} else {
if((state_val_39199 === (3))){
var inst_39196 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39198__$1,inst_39196);
} else {
if((state_val_39199 === (12))){
var state_39198__$1 = state_39198;
var statearr_39206_39228 = state_39198__$1;
(statearr_39206_39228[(2)] = null);

(statearr_39206_39228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (2))){
var state_39198__$1 = state_39198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39198__$1,(4),from);
} else {
if((state_val_39199 === (11))){
var inst_39187 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
if(cljs.core.truth_(inst_39187)){
var statearr_39207_39229 = state_39198__$1;
(statearr_39207_39229[(1)] = (12));

} else {
var statearr_39208_39230 = state_39198__$1;
(statearr_39208_39230[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (9))){
var state_39198__$1 = state_39198;
var statearr_39209_39231 = state_39198__$1;
(statearr_39209_39231[(2)] = null);

(statearr_39209_39231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (5))){
var state_39198__$1 = state_39198;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39210_39232 = state_39198__$1;
(statearr_39210_39232[(1)] = (8));

} else {
var statearr_39211_39233 = state_39198__$1;
(statearr_39211_39233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (14))){
var inst_39192 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
var statearr_39212_39234 = state_39198__$1;
(statearr_39212_39234[(2)] = inst_39192);

(statearr_39212_39234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (10))){
var inst_39184 = (state_39198[(2)]);
var state_39198__$1 = state_39198;
var statearr_39213_39235 = state_39198__$1;
(statearr_39213_39235[(2)] = inst_39184);

(statearr_39213_39235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39199 === (8))){
var inst_39181 = cljs.core.async.close_BANG_.call(null,to);
var state_39198__$1 = state_39198;
var statearr_39214_39236 = state_39198__$1;
(statearr_39214_39236[(2)] = inst_39181);

(statearr_39214_39236[(1)] = (10));


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
});})(c__11350__auto___39222))
;
return ((function (switch__11253__auto__,c__11350__auto___39222){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_39218 = [null,null,null,null,null,null,null,null];
(statearr_39218[(0)] = state_machine__11254__auto__);

(statearr_39218[(1)] = (1));

return statearr_39218;
});
var state_machine__11254__auto____1 = (function (state_39198){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_39198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e39219){if((e39219 instanceof Object)){
var ex__11257__auto__ = e39219;
var statearr_39220_39237 = state_39198;
(statearr_39220_39237[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39238 = state_39198;
state_39198 = G__39238;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_39198){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_39198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___39222))
})();
var state__11352__auto__ = (function (){var statearr_39221 = f__11351__auto__.call(null);
(statearr_39221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___39222);

return statearr_39221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___39222))
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
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11350__auto___39339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___39339,tc,fc){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___39339,tc,fc){
return (function (state_39314){
var state_val_39315 = (state_39314[(1)]);
if((state_val_39315 === (7))){
var inst_39310 = (state_39314[(2)]);
var state_39314__$1 = state_39314;
var statearr_39316_39340 = state_39314__$1;
(statearr_39316_39340[(2)] = inst_39310);

(statearr_39316_39340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (1))){
var state_39314__$1 = state_39314;
var statearr_39317_39341 = state_39314__$1;
(statearr_39317_39341[(2)] = null);

(statearr_39317_39341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (4))){
var inst_39291 = (state_39314[(7)]);
var inst_39291__$1 = (state_39314[(2)]);
var inst_39292 = (inst_39291__$1 == null);
var state_39314__$1 = (function (){var statearr_39318 = state_39314;
(statearr_39318[(7)] = inst_39291__$1);

return statearr_39318;
})();
if(cljs.core.truth_(inst_39292)){
var statearr_39319_39342 = state_39314__$1;
(statearr_39319_39342[(1)] = (5));

} else {
var statearr_39320_39343 = state_39314__$1;
(statearr_39320_39343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (13))){
var state_39314__$1 = state_39314;
var statearr_39321_39344 = state_39314__$1;
(statearr_39321_39344[(2)] = null);

(statearr_39321_39344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (6))){
var inst_39291 = (state_39314[(7)]);
var inst_39297 = p.call(null,inst_39291);
var state_39314__$1 = state_39314;
if(cljs.core.truth_(inst_39297)){
var statearr_39322_39345 = state_39314__$1;
(statearr_39322_39345[(1)] = (9));

} else {
var statearr_39323_39346 = state_39314__$1;
(statearr_39323_39346[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (3))){
var inst_39312 = (state_39314[(2)]);
var state_39314__$1 = state_39314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39314__$1,inst_39312);
} else {
if((state_val_39315 === (12))){
var state_39314__$1 = state_39314;
var statearr_39324_39347 = state_39314__$1;
(statearr_39324_39347[(2)] = null);

(statearr_39324_39347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (2))){
var state_39314__$1 = state_39314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39314__$1,(4),ch);
} else {
if((state_val_39315 === (11))){
var inst_39291 = (state_39314[(7)]);
var inst_39301 = (state_39314[(2)]);
var state_39314__$1 = state_39314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39314__$1,(8),inst_39301,inst_39291);
} else {
if((state_val_39315 === (9))){
var state_39314__$1 = state_39314;
var statearr_39325_39348 = state_39314__$1;
(statearr_39325_39348[(2)] = tc);

(statearr_39325_39348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (5))){
var inst_39294 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39295 = cljs.core.async.close_BANG_.call(null,fc);
var state_39314__$1 = (function (){var statearr_39326 = state_39314;
(statearr_39326[(8)] = inst_39294);

return statearr_39326;
})();
var statearr_39327_39349 = state_39314__$1;
(statearr_39327_39349[(2)] = inst_39295);

(statearr_39327_39349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (14))){
var inst_39308 = (state_39314[(2)]);
var state_39314__$1 = state_39314;
var statearr_39328_39350 = state_39314__$1;
(statearr_39328_39350[(2)] = inst_39308);

(statearr_39328_39350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (10))){
var state_39314__$1 = state_39314;
var statearr_39329_39351 = state_39314__$1;
(statearr_39329_39351[(2)] = fc);

(statearr_39329_39351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (8))){
var inst_39303 = (state_39314[(2)]);
var state_39314__$1 = state_39314;
if(cljs.core.truth_(inst_39303)){
var statearr_39330_39352 = state_39314__$1;
(statearr_39330_39352[(1)] = (12));

} else {
var statearr_39331_39353 = state_39314__$1;
(statearr_39331_39353[(1)] = (13));

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
});})(c__11350__auto___39339,tc,fc))
;
return ((function (switch__11253__auto__,c__11350__auto___39339,tc,fc){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_39335 = [null,null,null,null,null,null,null,null,null];
(statearr_39335[(0)] = state_machine__11254__auto__);

(statearr_39335[(1)] = (1));

return statearr_39335;
});
var state_machine__11254__auto____1 = (function (state_39314){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_39314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e39336){if((e39336 instanceof Object)){
var ex__11257__auto__ = e39336;
var statearr_39337_39354 = state_39314;
(statearr_39337_39354[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39355 = state_39314;
state_39314 = G__39355;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_39314){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_39314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___39339,tc,fc))
})();
var state__11352__auto__ = (function (){var statearr_39338 = f__11351__auto__.call(null);
(statearr_39338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___39339);

return statearr_39338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___39339,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__11350__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto__){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto__){
return (function (state_39402){
var state_val_39403 = (state_39402[(1)]);
if((state_val_39403 === (7))){
var inst_39398 = (state_39402[(2)]);
var state_39402__$1 = state_39402;
var statearr_39404_39420 = state_39402__$1;
(statearr_39404_39420[(2)] = inst_39398);

(statearr_39404_39420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (6))){
var inst_39388 = (state_39402[(7)]);
var inst_39391 = (state_39402[(8)]);
var inst_39395 = f.call(null,inst_39388,inst_39391);
var inst_39388__$1 = inst_39395;
var state_39402__$1 = (function (){var statearr_39405 = state_39402;
(statearr_39405[(7)] = inst_39388__$1);

return statearr_39405;
})();
var statearr_39406_39421 = state_39402__$1;
(statearr_39406_39421[(2)] = null);

(statearr_39406_39421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (5))){
var inst_39388 = (state_39402[(7)]);
var state_39402__$1 = state_39402;
var statearr_39407_39422 = state_39402__$1;
(statearr_39407_39422[(2)] = inst_39388);

(statearr_39407_39422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (4))){
var inst_39391 = (state_39402[(8)]);
var inst_39391__$1 = (state_39402[(2)]);
var inst_39392 = (inst_39391__$1 == null);
var state_39402__$1 = (function (){var statearr_39408 = state_39402;
(statearr_39408[(8)] = inst_39391__$1);

return statearr_39408;
})();
if(cljs.core.truth_(inst_39392)){
var statearr_39409_39423 = state_39402__$1;
(statearr_39409_39423[(1)] = (5));

} else {
var statearr_39410_39424 = state_39402__$1;
(statearr_39410_39424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (3))){
var inst_39400 = (state_39402[(2)]);
var state_39402__$1 = state_39402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39402__$1,inst_39400);
} else {
if((state_val_39403 === (2))){
var state_39402__$1 = state_39402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39402__$1,(4),ch);
} else {
if((state_val_39403 === (1))){
var inst_39388 = init;
var state_39402__$1 = (function (){var statearr_39411 = state_39402;
(statearr_39411[(7)] = inst_39388);

return statearr_39411;
})();
var statearr_39412_39425 = state_39402__$1;
(statearr_39412_39425[(2)] = null);

(statearr_39412_39425[(1)] = (2));


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
var statearr_39416 = [null,null,null,null,null,null,null,null,null];
(statearr_39416[(0)] = state_machine__11254__auto__);

(statearr_39416[(1)] = (1));

return statearr_39416;
});
var state_machine__11254__auto____1 = (function (state_39402){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_39402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e39417){if((e39417 instanceof Object)){
var ex__11257__auto__ = e39417;
var statearr_39418_39426 = state_39402;
(statearr_39418_39426[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39427 = state_39402;
state_39402 = G__39427;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_39402){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_39402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto__))
})();
var state__11352__auto__ = (function (){var statearr_39419 = f__11351__auto__.call(null);
(statearr_39419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto__);

return statearr_39419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto__))
);

return c__11350__auto__;
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
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__11350__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto__){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto__){
return (function (state_39501){
var state_val_39502 = (state_39501[(1)]);
if((state_val_39502 === (7))){
var inst_39483 = (state_39501[(2)]);
var state_39501__$1 = state_39501;
var statearr_39503_39526 = state_39501__$1;
(statearr_39503_39526[(2)] = inst_39483);

(statearr_39503_39526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (1))){
var inst_39477 = cljs.core.seq.call(null,coll);
var inst_39478 = inst_39477;
var state_39501__$1 = (function (){var statearr_39504 = state_39501;
(statearr_39504[(7)] = inst_39478);

return statearr_39504;
})();
var statearr_39505_39527 = state_39501__$1;
(statearr_39505_39527[(2)] = null);

(statearr_39505_39527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (4))){
var inst_39478 = (state_39501[(7)]);
var inst_39481 = cljs.core.first.call(null,inst_39478);
var state_39501__$1 = state_39501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39501__$1,(7),ch,inst_39481);
} else {
if((state_val_39502 === (13))){
var inst_39495 = (state_39501[(2)]);
var state_39501__$1 = state_39501;
var statearr_39506_39528 = state_39501__$1;
(statearr_39506_39528[(2)] = inst_39495);

(statearr_39506_39528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (6))){
var inst_39486 = (state_39501[(2)]);
var state_39501__$1 = state_39501;
if(cljs.core.truth_(inst_39486)){
var statearr_39507_39529 = state_39501__$1;
(statearr_39507_39529[(1)] = (8));

} else {
var statearr_39508_39530 = state_39501__$1;
(statearr_39508_39530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (3))){
var inst_39499 = (state_39501[(2)]);
var state_39501__$1 = state_39501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39501__$1,inst_39499);
} else {
if((state_val_39502 === (12))){
var state_39501__$1 = state_39501;
var statearr_39509_39531 = state_39501__$1;
(statearr_39509_39531[(2)] = null);

(statearr_39509_39531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (2))){
var inst_39478 = (state_39501[(7)]);
var state_39501__$1 = state_39501;
if(cljs.core.truth_(inst_39478)){
var statearr_39510_39532 = state_39501__$1;
(statearr_39510_39532[(1)] = (4));

} else {
var statearr_39511_39533 = state_39501__$1;
(statearr_39511_39533[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (11))){
var inst_39492 = cljs.core.async.close_BANG_.call(null,ch);
var state_39501__$1 = state_39501;
var statearr_39512_39534 = state_39501__$1;
(statearr_39512_39534[(2)] = inst_39492);

(statearr_39512_39534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (9))){
var state_39501__$1 = state_39501;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39513_39535 = state_39501__$1;
(statearr_39513_39535[(1)] = (11));

} else {
var statearr_39514_39536 = state_39501__$1;
(statearr_39514_39536[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (5))){
var inst_39478 = (state_39501[(7)]);
var state_39501__$1 = state_39501;
var statearr_39515_39537 = state_39501__$1;
(statearr_39515_39537[(2)] = inst_39478);

(statearr_39515_39537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (10))){
var inst_39497 = (state_39501[(2)]);
var state_39501__$1 = state_39501;
var statearr_39516_39538 = state_39501__$1;
(statearr_39516_39538[(2)] = inst_39497);

(statearr_39516_39538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (8))){
var inst_39478 = (state_39501[(7)]);
var inst_39488 = cljs.core.next.call(null,inst_39478);
var inst_39478__$1 = inst_39488;
var state_39501__$1 = (function (){var statearr_39517 = state_39501;
(statearr_39517[(7)] = inst_39478__$1);

return statearr_39517;
})();
var statearr_39518_39539 = state_39501__$1;
(statearr_39518_39539[(2)] = null);

(statearr_39518_39539[(1)] = (2));


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
});})(c__11350__auto__))
;
return ((function (switch__11253__auto__,c__11350__auto__){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_39522 = [null,null,null,null,null,null,null,null];
(statearr_39522[(0)] = state_machine__11254__auto__);

(statearr_39522[(1)] = (1));

return statearr_39522;
});
var state_machine__11254__auto____1 = (function (state_39501){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_39501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e39523){if((e39523 instanceof Object)){
var ex__11257__auto__ = e39523;
var statearr_39524_39540 = state_39501;
(statearr_39524_39540[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39541 = state_39501;
state_39501 = G__39541;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_39501){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_39501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto__))
})();
var state__11352__auto__ = (function (){var statearr_39525 = f__11351__auto__.call(null);
(statearr_39525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto__);

return statearr_39525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto__))
);

return c__11350__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj39543 = {};
return obj39543;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3905__auto__ = _;
if(and__3905__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3905__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4561__auto__ = (((_ == null))?null:_);
return (function (){var or__3917__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj39545 = {};
return obj39545;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3905__auto__ = m;
if(and__3905__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3905__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4561__auto__ = (((m == null))?null:m);
return (function (){var or__3917__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3905__auto__ = m;
if(and__3905__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3905__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4561__auto__ = (((m == null))?null:m);
return (function (){var or__3917__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3905__auto__ = m;
if(and__3905__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3905__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4561__auto__ = (((m == null))?null:m);
return (function (){var or__3917__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t39767 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39767 = (function (cs,ch,mult,meta39768){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta39768 = meta39768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39767.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t39767.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t39767.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t39767.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t39767.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t39767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t39767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39769){
var self__ = this;
var _39769__$1 = this;
return self__.meta39768;
});})(cs))
;

cljs.core.async.t39767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39769,meta39768__$1){
var self__ = this;
var _39769__$1 = this;
return (new cljs.core.async.t39767(self__.cs,self__.ch,self__.mult,meta39768__$1));
});})(cs))
;

cljs.core.async.t39767.cljs$lang$type = true;

cljs.core.async.t39767.cljs$lang$ctorStr = "cljs.core.async/t39767";

cljs.core.async.t39767.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"cljs.core.async/t39767");
});})(cs))
;

cljs.core.async.__GT_t39767 = ((function (cs){
return (function __GT_t39767(cs__$1,ch__$1,mult__$1,meta39768){
return (new cljs.core.async.t39767(cs__$1,ch__$1,mult__$1,meta39768));
});})(cs))
;

}

return (new cljs.core.async.t39767(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11350__auto___39988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___39988,cs,m,dchan,dctr,done){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___39988,cs,m,dchan,dctr,done){
return (function (state_39900){
var state_val_39901 = (state_39900[(1)]);
if((state_val_39901 === (7))){
var inst_39896 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39902_39989 = state_39900__$1;
(statearr_39902_39989[(2)] = inst_39896);

(statearr_39902_39989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (20))){
var inst_39801 = (state_39900[(7)]);
var inst_39811 = cljs.core.first.call(null,inst_39801);
var inst_39812 = cljs.core.nth.call(null,inst_39811,(0),null);
var inst_39813 = cljs.core.nth.call(null,inst_39811,(1),null);
var state_39900__$1 = (function (){var statearr_39903 = state_39900;
(statearr_39903[(8)] = inst_39812);

return statearr_39903;
})();
if(cljs.core.truth_(inst_39813)){
var statearr_39904_39990 = state_39900__$1;
(statearr_39904_39990[(1)] = (22));

} else {
var statearr_39905_39991 = state_39900__$1;
(statearr_39905_39991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (27))){
var inst_39848 = (state_39900[(9)]);
var inst_39772 = (state_39900[(10)]);
var inst_39841 = (state_39900[(11)]);
var inst_39843 = (state_39900[(12)]);
var inst_39848__$1 = cljs.core._nth.call(null,inst_39841,inst_39843);
var inst_39849 = cljs.core.async.put_BANG_.call(null,inst_39848__$1,inst_39772,done);
var state_39900__$1 = (function (){var statearr_39906 = state_39900;
(statearr_39906[(9)] = inst_39848__$1);

return statearr_39906;
})();
if(cljs.core.truth_(inst_39849)){
var statearr_39907_39992 = state_39900__$1;
(statearr_39907_39992[(1)] = (30));

} else {
var statearr_39908_39993 = state_39900__$1;
(statearr_39908_39993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (1))){
var state_39900__$1 = state_39900;
var statearr_39909_39994 = state_39900__$1;
(statearr_39909_39994[(2)] = null);

(statearr_39909_39994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (24))){
var inst_39801 = (state_39900[(7)]);
var inst_39818 = (state_39900[(2)]);
var inst_39819 = cljs.core.next.call(null,inst_39801);
var inst_39781 = inst_39819;
var inst_39782 = null;
var inst_39783 = (0);
var inst_39784 = (0);
var state_39900__$1 = (function (){var statearr_39910 = state_39900;
(statearr_39910[(13)] = inst_39781);

(statearr_39910[(14)] = inst_39784);

(statearr_39910[(15)] = inst_39818);

(statearr_39910[(16)] = inst_39783);

(statearr_39910[(17)] = inst_39782);

return statearr_39910;
})();
var statearr_39911_39995 = state_39900__$1;
(statearr_39911_39995[(2)] = null);

(statearr_39911_39995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (39))){
var state_39900__$1 = state_39900;
var statearr_39915_39996 = state_39900__$1;
(statearr_39915_39996[(2)] = null);

(statearr_39915_39996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (4))){
var inst_39772 = (state_39900[(10)]);
var inst_39772__$1 = (state_39900[(2)]);
var inst_39773 = (inst_39772__$1 == null);
var state_39900__$1 = (function (){var statearr_39916 = state_39900;
(statearr_39916[(10)] = inst_39772__$1);

return statearr_39916;
})();
if(cljs.core.truth_(inst_39773)){
var statearr_39917_39997 = state_39900__$1;
(statearr_39917_39997[(1)] = (5));

} else {
var statearr_39918_39998 = state_39900__$1;
(statearr_39918_39998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (15))){
var inst_39781 = (state_39900[(13)]);
var inst_39784 = (state_39900[(14)]);
var inst_39783 = (state_39900[(16)]);
var inst_39782 = (state_39900[(17)]);
var inst_39797 = (state_39900[(2)]);
var inst_39798 = (inst_39784 + (1));
var tmp39912 = inst_39781;
var tmp39913 = inst_39783;
var tmp39914 = inst_39782;
var inst_39781__$1 = tmp39912;
var inst_39782__$1 = tmp39914;
var inst_39783__$1 = tmp39913;
var inst_39784__$1 = inst_39798;
var state_39900__$1 = (function (){var statearr_39919 = state_39900;
(statearr_39919[(13)] = inst_39781__$1);

(statearr_39919[(18)] = inst_39797);

(statearr_39919[(14)] = inst_39784__$1);

(statearr_39919[(16)] = inst_39783__$1);

(statearr_39919[(17)] = inst_39782__$1);

return statearr_39919;
})();
var statearr_39920_39999 = state_39900__$1;
(statearr_39920_39999[(2)] = null);

(statearr_39920_39999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (21))){
var inst_39822 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39924_40000 = state_39900__$1;
(statearr_39924_40000[(2)] = inst_39822);

(statearr_39924_40000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (31))){
var inst_39848 = (state_39900[(9)]);
var inst_39852 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_39853 = cljs.core.async.untap_STAR_.call(null,m,inst_39848);
var state_39900__$1 = (function (){var statearr_39925 = state_39900;
(statearr_39925[(19)] = inst_39852);

return statearr_39925;
})();
var statearr_39926_40001 = state_39900__$1;
(statearr_39926_40001[(2)] = inst_39853);

(statearr_39926_40001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (32))){
var inst_39840 = (state_39900[(20)]);
var inst_39842 = (state_39900[(21)]);
var inst_39841 = (state_39900[(11)]);
var inst_39843 = (state_39900[(12)]);
var inst_39855 = (state_39900[(2)]);
var inst_39856 = (inst_39843 + (1));
var tmp39921 = inst_39840;
var tmp39922 = inst_39842;
var tmp39923 = inst_39841;
var inst_39840__$1 = tmp39921;
var inst_39841__$1 = tmp39923;
var inst_39842__$1 = tmp39922;
var inst_39843__$1 = inst_39856;
var state_39900__$1 = (function (){var statearr_39927 = state_39900;
(statearr_39927[(22)] = inst_39855);

(statearr_39927[(20)] = inst_39840__$1);

(statearr_39927[(21)] = inst_39842__$1);

(statearr_39927[(11)] = inst_39841__$1);

(statearr_39927[(12)] = inst_39843__$1);

return statearr_39927;
})();
var statearr_39928_40002 = state_39900__$1;
(statearr_39928_40002[(2)] = null);

(statearr_39928_40002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (40))){
var inst_39868 = (state_39900[(23)]);
var inst_39872 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_39873 = cljs.core.async.untap_STAR_.call(null,m,inst_39868);
var state_39900__$1 = (function (){var statearr_39929 = state_39900;
(statearr_39929[(24)] = inst_39872);

return statearr_39929;
})();
var statearr_39930_40003 = state_39900__$1;
(statearr_39930_40003[(2)] = inst_39873);

(statearr_39930_40003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (33))){
var inst_39859 = (state_39900[(25)]);
var inst_39861 = cljs.core.chunked_seq_QMARK_.call(null,inst_39859);
var state_39900__$1 = state_39900;
if(inst_39861){
var statearr_39931_40004 = state_39900__$1;
(statearr_39931_40004[(1)] = (36));

} else {
var statearr_39932_40005 = state_39900__$1;
(statearr_39932_40005[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (13))){
var inst_39791 = (state_39900[(26)]);
var inst_39794 = cljs.core.async.close_BANG_.call(null,inst_39791);
var state_39900__$1 = state_39900;
var statearr_39933_40006 = state_39900__$1;
(statearr_39933_40006[(2)] = inst_39794);

(statearr_39933_40006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (22))){
var inst_39812 = (state_39900[(8)]);
var inst_39815 = cljs.core.async.close_BANG_.call(null,inst_39812);
var state_39900__$1 = state_39900;
var statearr_39934_40007 = state_39900__$1;
(statearr_39934_40007[(2)] = inst_39815);

(statearr_39934_40007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (36))){
var inst_39859 = (state_39900[(25)]);
var inst_39863 = cljs.core.chunk_first.call(null,inst_39859);
var inst_39864 = cljs.core.chunk_rest.call(null,inst_39859);
var inst_39865 = cljs.core.count.call(null,inst_39863);
var inst_39840 = inst_39864;
var inst_39841 = inst_39863;
var inst_39842 = inst_39865;
var inst_39843 = (0);
var state_39900__$1 = (function (){var statearr_39935 = state_39900;
(statearr_39935[(20)] = inst_39840);

(statearr_39935[(21)] = inst_39842);

(statearr_39935[(11)] = inst_39841);

(statearr_39935[(12)] = inst_39843);

return statearr_39935;
})();
var statearr_39936_40008 = state_39900__$1;
(statearr_39936_40008[(2)] = null);

(statearr_39936_40008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (41))){
var inst_39859 = (state_39900[(25)]);
var inst_39875 = (state_39900[(2)]);
var inst_39876 = cljs.core.next.call(null,inst_39859);
var inst_39840 = inst_39876;
var inst_39841 = null;
var inst_39842 = (0);
var inst_39843 = (0);
var state_39900__$1 = (function (){var statearr_39937 = state_39900;
(statearr_39937[(20)] = inst_39840);

(statearr_39937[(21)] = inst_39842);

(statearr_39937[(11)] = inst_39841);

(statearr_39937[(12)] = inst_39843);

(statearr_39937[(27)] = inst_39875);

return statearr_39937;
})();
var statearr_39938_40009 = state_39900__$1;
(statearr_39938_40009[(2)] = null);

(statearr_39938_40009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (43))){
var state_39900__$1 = state_39900;
var statearr_39939_40010 = state_39900__$1;
(statearr_39939_40010[(2)] = null);

(statearr_39939_40010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (29))){
var inst_39884 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39940_40011 = state_39900__$1;
(statearr_39940_40011[(2)] = inst_39884);

(statearr_39940_40011[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (44))){
var inst_39893 = (state_39900[(2)]);
var state_39900__$1 = (function (){var statearr_39941 = state_39900;
(statearr_39941[(28)] = inst_39893);

return statearr_39941;
})();
var statearr_39942_40012 = state_39900__$1;
(statearr_39942_40012[(2)] = null);

(statearr_39942_40012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (6))){
var inst_39832 = (state_39900[(29)]);
var inst_39831 = cljs.core.deref.call(null,cs);
var inst_39832__$1 = cljs.core.keys.call(null,inst_39831);
var inst_39833 = cljs.core.count.call(null,inst_39832__$1);
var inst_39834 = cljs.core.reset_BANG_.call(null,dctr,inst_39833);
var inst_39839 = cljs.core.seq.call(null,inst_39832__$1);
var inst_39840 = inst_39839;
var inst_39841 = null;
var inst_39842 = (0);
var inst_39843 = (0);
var state_39900__$1 = (function (){var statearr_39943 = state_39900;
(statearr_39943[(20)] = inst_39840);

(statearr_39943[(21)] = inst_39842);

(statearr_39943[(29)] = inst_39832__$1);

(statearr_39943[(30)] = inst_39834);

(statearr_39943[(11)] = inst_39841);

(statearr_39943[(12)] = inst_39843);

return statearr_39943;
})();
var statearr_39944_40013 = state_39900__$1;
(statearr_39944_40013[(2)] = null);

(statearr_39944_40013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (28))){
var inst_39840 = (state_39900[(20)]);
var inst_39859 = (state_39900[(25)]);
var inst_39859__$1 = cljs.core.seq.call(null,inst_39840);
var state_39900__$1 = (function (){var statearr_39945 = state_39900;
(statearr_39945[(25)] = inst_39859__$1);

return statearr_39945;
})();
if(inst_39859__$1){
var statearr_39946_40014 = state_39900__$1;
(statearr_39946_40014[(1)] = (33));

} else {
var statearr_39947_40015 = state_39900__$1;
(statearr_39947_40015[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (25))){
var inst_39842 = (state_39900[(21)]);
var inst_39843 = (state_39900[(12)]);
var inst_39845 = (inst_39843 < inst_39842);
var inst_39846 = inst_39845;
var state_39900__$1 = state_39900;
if(cljs.core.truth_(inst_39846)){
var statearr_39948_40016 = state_39900__$1;
(statearr_39948_40016[(1)] = (27));

} else {
var statearr_39949_40017 = state_39900__$1;
(statearr_39949_40017[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (34))){
var state_39900__$1 = state_39900;
var statearr_39950_40018 = state_39900__$1;
(statearr_39950_40018[(2)] = null);

(statearr_39950_40018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (17))){
var state_39900__$1 = state_39900;
var statearr_39951_40019 = state_39900__$1;
(statearr_39951_40019[(2)] = null);

(statearr_39951_40019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (3))){
var inst_39898 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39900__$1,inst_39898);
} else {
if((state_val_39901 === (12))){
var inst_39827 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39952_40020 = state_39900__$1;
(statearr_39952_40020[(2)] = inst_39827);

(statearr_39952_40020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (2))){
var state_39900__$1 = state_39900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39900__$1,(4),ch);
} else {
if((state_val_39901 === (23))){
var state_39900__$1 = state_39900;
var statearr_39953_40021 = state_39900__$1;
(statearr_39953_40021[(2)] = null);

(statearr_39953_40021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (35))){
var inst_39882 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39954_40022 = state_39900__$1;
(statearr_39954_40022[(2)] = inst_39882);

(statearr_39954_40022[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (19))){
var inst_39801 = (state_39900[(7)]);
var inst_39805 = cljs.core.chunk_first.call(null,inst_39801);
var inst_39806 = cljs.core.chunk_rest.call(null,inst_39801);
var inst_39807 = cljs.core.count.call(null,inst_39805);
var inst_39781 = inst_39806;
var inst_39782 = inst_39805;
var inst_39783 = inst_39807;
var inst_39784 = (0);
var state_39900__$1 = (function (){var statearr_39955 = state_39900;
(statearr_39955[(13)] = inst_39781);

(statearr_39955[(14)] = inst_39784);

(statearr_39955[(16)] = inst_39783);

(statearr_39955[(17)] = inst_39782);

return statearr_39955;
})();
var statearr_39956_40023 = state_39900__$1;
(statearr_39956_40023[(2)] = null);

(statearr_39956_40023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (11))){
var inst_39781 = (state_39900[(13)]);
var inst_39801 = (state_39900[(7)]);
var inst_39801__$1 = cljs.core.seq.call(null,inst_39781);
var state_39900__$1 = (function (){var statearr_39957 = state_39900;
(statearr_39957[(7)] = inst_39801__$1);

return statearr_39957;
})();
if(inst_39801__$1){
var statearr_39958_40024 = state_39900__$1;
(statearr_39958_40024[(1)] = (16));

} else {
var statearr_39959_40025 = state_39900__$1;
(statearr_39959_40025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (9))){
var inst_39829 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39960_40026 = state_39900__$1;
(statearr_39960_40026[(2)] = inst_39829);

(statearr_39960_40026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (5))){
var inst_39779 = cljs.core.deref.call(null,cs);
var inst_39780 = cljs.core.seq.call(null,inst_39779);
var inst_39781 = inst_39780;
var inst_39782 = null;
var inst_39783 = (0);
var inst_39784 = (0);
var state_39900__$1 = (function (){var statearr_39961 = state_39900;
(statearr_39961[(13)] = inst_39781);

(statearr_39961[(14)] = inst_39784);

(statearr_39961[(16)] = inst_39783);

(statearr_39961[(17)] = inst_39782);

return statearr_39961;
})();
var statearr_39962_40027 = state_39900__$1;
(statearr_39962_40027[(2)] = null);

(statearr_39962_40027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (14))){
var state_39900__$1 = state_39900;
var statearr_39963_40028 = state_39900__$1;
(statearr_39963_40028[(2)] = null);

(statearr_39963_40028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (45))){
var inst_39890 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39964_40029 = state_39900__$1;
(statearr_39964_40029[(2)] = inst_39890);

(statearr_39964_40029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (26))){
var inst_39832 = (state_39900[(29)]);
var inst_39886 = (state_39900[(2)]);
var inst_39887 = cljs.core.seq.call(null,inst_39832);
var state_39900__$1 = (function (){var statearr_39965 = state_39900;
(statearr_39965[(31)] = inst_39886);

return statearr_39965;
})();
if(inst_39887){
var statearr_39966_40030 = state_39900__$1;
(statearr_39966_40030[(1)] = (42));

} else {
var statearr_39967_40031 = state_39900__$1;
(statearr_39967_40031[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (16))){
var inst_39801 = (state_39900[(7)]);
var inst_39803 = cljs.core.chunked_seq_QMARK_.call(null,inst_39801);
var state_39900__$1 = state_39900;
if(inst_39803){
var statearr_39968_40032 = state_39900__$1;
(statearr_39968_40032[(1)] = (19));

} else {
var statearr_39969_40033 = state_39900__$1;
(statearr_39969_40033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (38))){
var inst_39879 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39970_40034 = state_39900__$1;
(statearr_39970_40034[(2)] = inst_39879);

(statearr_39970_40034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (30))){
var state_39900__$1 = state_39900;
var statearr_39971_40035 = state_39900__$1;
(statearr_39971_40035[(2)] = null);

(statearr_39971_40035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (10))){
var inst_39784 = (state_39900[(14)]);
var inst_39782 = (state_39900[(17)]);
var inst_39790 = cljs.core._nth.call(null,inst_39782,inst_39784);
var inst_39791 = cljs.core.nth.call(null,inst_39790,(0),null);
var inst_39792 = cljs.core.nth.call(null,inst_39790,(1),null);
var state_39900__$1 = (function (){var statearr_39972 = state_39900;
(statearr_39972[(26)] = inst_39791);

return statearr_39972;
})();
if(cljs.core.truth_(inst_39792)){
var statearr_39973_40036 = state_39900__$1;
(statearr_39973_40036[(1)] = (13));

} else {
var statearr_39974_40037 = state_39900__$1;
(statearr_39974_40037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (18))){
var inst_39825 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39975_40038 = state_39900__$1;
(statearr_39975_40038[(2)] = inst_39825);

(statearr_39975_40038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (42))){
var state_39900__$1 = state_39900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39900__$1,(45),dchan);
} else {
if((state_val_39901 === (37))){
var inst_39868 = (state_39900[(23)]);
var inst_39772 = (state_39900[(10)]);
var inst_39859 = (state_39900[(25)]);
var inst_39868__$1 = cljs.core.first.call(null,inst_39859);
var inst_39869 = cljs.core.async.put_BANG_.call(null,inst_39868__$1,inst_39772,done);
var state_39900__$1 = (function (){var statearr_39976 = state_39900;
(statearr_39976[(23)] = inst_39868__$1);

return statearr_39976;
})();
if(cljs.core.truth_(inst_39869)){
var statearr_39977_40039 = state_39900__$1;
(statearr_39977_40039[(1)] = (39));

} else {
var statearr_39978_40040 = state_39900__$1;
(statearr_39978_40040[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (8))){
var inst_39784 = (state_39900[(14)]);
var inst_39783 = (state_39900[(16)]);
var inst_39786 = (inst_39784 < inst_39783);
var inst_39787 = inst_39786;
var state_39900__$1 = state_39900;
if(cljs.core.truth_(inst_39787)){
var statearr_39979_40041 = state_39900__$1;
(statearr_39979_40041[(1)] = (10));

} else {
var statearr_39980_40042 = state_39900__$1;
(statearr_39980_40042[(1)] = (11));

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
});})(c__11350__auto___39988,cs,m,dchan,dctr,done))
;
return ((function (switch__11253__auto__,c__11350__auto___39988,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_39984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39984[(0)] = state_machine__11254__auto__);

(statearr_39984[(1)] = (1));

return statearr_39984;
});
var state_machine__11254__auto____1 = (function (state_39900){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_39900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e39985){if((e39985 instanceof Object)){
var ex__11257__auto__ = e39985;
var statearr_39986_40043 = state_39900;
(statearr_39986_40043[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40044 = state_39900;
state_39900 = G__40044;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_39900){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_39900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___39988,cs,m,dchan,dctr,done))
})();
var state__11352__auto__ = (function (){var statearr_39987 = f__11351__auto__.call(null);
(statearr_39987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___39988);

return statearr_39987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___39988,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

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
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj40046 = {};
return obj40046;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3905__auto__ = m;
if(and__3905__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3905__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4561__auto__ = (((m == null))?null:m);
return (function (){var or__3917__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3905__auto__ = m;
if(and__3905__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3905__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4561__auto__ = (((m == null))?null:m);
return (function (){var or__3917__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3905__auto__ = m;
if(and__3905__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3905__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4561__auto__ = (((m == null))?null:m);
return (function (){var or__3917__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3905__auto__ = m;
if(and__3905__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3905__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4561__auto__ = (((m == null))?null:m);
return (function (){var or__3917__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3905__auto__ = m;
if(and__3905__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3905__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4561__auto__ = (((m == null))?null:m);
return (function (){var or__3917__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

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
cljs.core.async.mix = (function mix(out){
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
if(typeof cljs.core.async.t40166 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40166 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40167){
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
this.meta40167 = meta40167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40166.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t40166.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40166.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40166.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40166.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40166.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t40166.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t40166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40168){
var self__ = this;
var _40168__$1 = this;
return self__.meta40167;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40168,meta40167__$1){
var self__ = this;
var _40168__$1 = this;
return (new cljs.core.async.t40166(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40167__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40166.cljs$lang$type = true;

cljs.core.async.t40166.cljs$lang$ctorStr = "cljs.core.async/t40166";

cljs.core.async.t40166.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"cljs.core.async/t40166");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t40166 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t40166(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40167){
return (new cljs.core.async.t40166(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40167));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t40166(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11350__auto___40285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___40285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___40285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40238){
var state_val_40239 = (state_40238[(1)]);
if((state_val_40239 === (7))){
var inst_40182 = (state_40238[(7)]);
var inst_40187 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40182);
var state_40238__$1 = state_40238;
var statearr_40240_40286 = state_40238__$1;
(statearr_40240_40286[(2)] = inst_40187);

(statearr_40240_40286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (20))){
var inst_40197 = (state_40238[(8)]);
var state_40238__$1 = state_40238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40238__$1,(23),out,inst_40197);
} else {
if((state_val_40239 === (1))){
var inst_40172 = (state_40238[(9)]);
var inst_40172__$1 = calc_state.call(null);
var inst_40173 = cljs.core.seq_QMARK_.call(null,inst_40172__$1);
var state_40238__$1 = (function (){var statearr_40241 = state_40238;
(statearr_40241[(9)] = inst_40172__$1);

return statearr_40241;
})();
if(inst_40173){
var statearr_40242_40287 = state_40238__$1;
(statearr_40242_40287[(1)] = (2));

} else {
var statearr_40243_40288 = state_40238__$1;
(statearr_40243_40288[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (24))){
var inst_40190 = (state_40238[(10)]);
var inst_40182 = inst_40190;
var state_40238__$1 = (function (){var statearr_40244 = state_40238;
(statearr_40244[(7)] = inst_40182);

return statearr_40244;
})();
var statearr_40245_40289 = state_40238__$1;
(statearr_40245_40289[(2)] = null);

(statearr_40245_40289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (4))){
var inst_40172 = (state_40238[(9)]);
var inst_40178 = (state_40238[(2)]);
var inst_40179 = cljs.core.get.call(null,inst_40178,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40180 = cljs.core.get.call(null,inst_40178,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40181 = cljs.core.get.call(null,inst_40178,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40182 = inst_40172;
var state_40238__$1 = (function (){var statearr_40246 = state_40238;
(statearr_40246[(11)] = inst_40181);

(statearr_40246[(12)] = inst_40179);

(statearr_40246[(13)] = inst_40180);

(statearr_40246[(7)] = inst_40182);

return statearr_40246;
})();
var statearr_40247_40290 = state_40238__$1;
(statearr_40247_40290[(2)] = null);

(statearr_40247_40290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (15))){
var state_40238__$1 = state_40238;
var statearr_40248_40291 = state_40238__$1;
(statearr_40248_40291[(2)] = null);

(statearr_40248_40291[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (21))){
var inst_40190 = (state_40238[(10)]);
var inst_40182 = inst_40190;
var state_40238__$1 = (function (){var statearr_40249 = state_40238;
(statearr_40249[(7)] = inst_40182);

return statearr_40249;
})();
var statearr_40250_40292 = state_40238__$1;
(statearr_40250_40292[(2)] = null);

(statearr_40250_40292[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (13))){
var inst_40234 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40251_40293 = state_40238__$1;
(statearr_40251_40293[(2)] = inst_40234);

(statearr_40251_40293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (22))){
var inst_40232 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40252_40294 = state_40238__$1;
(statearr_40252_40294[(2)] = inst_40232);

(statearr_40252_40294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (6))){
var inst_40236 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40238__$1,inst_40236);
} else {
if((state_val_40239 === (25))){
var state_40238__$1 = state_40238;
var statearr_40253_40295 = state_40238__$1;
(statearr_40253_40295[(2)] = null);

(statearr_40253_40295[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (17))){
var inst_40212 = (state_40238[(14)]);
var state_40238__$1 = state_40238;
var statearr_40254_40296 = state_40238__$1;
(statearr_40254_40296[(2)] = inst_40212);

(statearr_40254_40296[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (3))){
var inst_40172 = (state_40238[(9)]);
var state_40238__$1 = state_40238;
var statearr_40255_40297 = state_40238__$1;
(statearr_40255_40297[(2)] = inst_40172);

(statearr_40255_40297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (12))){
var inst_40193 = (state_40238[(15)]);
var inst_40198 = (state_40238[(16)]);
var inst_40212 = (state_40238[(14)]);
var inst_40212__$1 = inst_40193.call(null,inst_40198);
var state_40238__$1 = (function (){var statearr_40256 = state_40238;
(statearr_40256[(14)] = inst_40212__$1);

return statearr_40256;
})();
if(cljs.core.truth_(inst_40212__$1)){
var statearr_40257_40298 = state_40238__$1;
(statearr_40257_40298[(1)] = (17));

} else {
var statearr_40258_40299 = state_40238__$1;
(statearr_40258_40299[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (2))){
var inst_40172 = (state_40238[(9)]);
var inst_40175 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40172);
var state_40238__$1 = state_40238;
var statearr_40259_40300 = state_40238__$1;
(statearr_40259_40300[(2)] = inst_40175);

(statearr_40259_40300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (23))){
var inst_40223 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
if(cljs.core.truth_(inst_40223)){
var statearr_40260_40301 = state_40238__$1;
(statearr_40260_40301[(1)] = (24));

} else {
var statearr_40261_40302 = state_40238__$1;
(statearr_40261_40302[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (19))){
var inst_40220 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
if(cljs.core.truth_(inst_40220)){
var statearr_40262_40303 = state_40238__$1;
(statearr_40262_40303[(1)] = (20));

} else {
var statearr_40263_40304 = state_40238__$1;
(statearr_40263_40304[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (11))){
var inst_40197 = (state_40238[(8)]);
var inst_40203 = (inst_40197 == null);
var state_40238__$1 = state_40238;
if(cljs.core.truth_(inst_40203)){
var statearr_40264_40305 = state_40238__$1;
(statearr_40264_40305[(1)] = (14));

} else {
var statearr_40265_40306 = state_40238__$1;
(statearr_40265_40306[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (9))){
var inst_40190 = (state_40238[(10)]);
var inst_40190__$1 = (state_40238[(2)]);
var inst_40191 = cljs.core.get.call(null,inst_40190__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40192 = cljs.core.get.call(null,inst_40190__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40193 = cljs.core.get.call(null,inst_40190__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_40238__$1 = (function (){var statearr_40266 = state_40238;
(statearr_40266[(17)] = inst_40192);

(statearr_40266[(15)] = inst_40193);

(statearr_40266[(10)] = inst_40190__$1);

return statearr_40266;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_40238__$1,(10),inst_40191);
} else {
if((state_val_40239 === (5))){
var inst_40182 = (state_40238[(7)]);
var inst_40185 = cljs.core.seq_QMARK_.call(null,inst_40182);
var state_40238__$1 = state_40238;
if(inst_40185){
var statearr_40267_40307 = state_40238__$1;
(statearr_40267_40307[(1)] = (7));

} else {
var statearr_40268_40308 = state_40238__$1;
(statearr_40268_40308[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (14))){
var inst_40198 = (state_40238[(16)]);
var inst_40205 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40198);
var state_40238__$1 = state_40238;
var statearr_40269_40309 = state_40238__$1;
(statearr_40269_40309[(2)] = inst_40205);

(statearr_40269_40309[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (26))){
var inst_40228 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40270_40310 = state_40238__$1;
(statearr_40270_40310[(2)] = inst_40228);

(statearr_40270_40310[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (16))){
var inst_40208 = (state_40238[(2)]);
var inst_40209 = calc_state.call(null);
var inst_40182 = inst_40209;
var state_40238__$1 = (function (){var statearr_40271 = state_40238;
(statearr_40271[(18)] = inst_40208);

(statearr_40271[(7)] = inst_40182);

return statearr_40271;
})();
var statearr_40272_40311 = state_40238__$1;
(statearr_40272_40311[(2)] = null);

(statearr_40272_40311[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (10))){
var inst_40198 = (state_40238[(16)]);
var inst_40197 = (state_40238[(8)]);
var inst_40196 = (state_40238[(2)]);
var inst_40197__$1 = cljs.core.nth.call(null,inst_40196,(0),null);
var inst_40198__$1 = cljs.core.nth.call(null,inst_40196,(1),null);
var inst_40199 = (inst_40197__$1 == null);
var inst_40200 = cljs.core._EQ_.call(null,inst_40198__$1,change);
var inst_40201 = (inst_40199) || (inst_40200);
var state_40238__$1 = (function (){var statearr_40273 = state_40238;
(statearr_40273[(16)] = inst_40198__$1);

(statearr_40273[(8)] = inst_40197__$1);

return statearr_40273;
})();
if(cljs.core.truth_(inst_40201)){
var statearr_40274_40312 = state_40238__$1;
(statearr_40274_40312[(1)] = (11));

} else {
var statearr_40275_40313 = state_40238__$1;
(statearr_40275_40313[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (18))){
var inst_40192 = (state_40238[(17)]);
var inst_40193 = (state_40238[(15)]);
var inst_40198 = (state_40238[(16)]);
var inst_40215 = cljs.core.empty_QMARK_.call(null,inst_40193);
var inst_40216 = inst_40192.call(null,inst_40198);
var inst_40217 = cljs.core.not.call(null,inst_40216);
var inst_40218 = (inst_40215) && (inst_40217);
var state_40238__$1 = state_40238;
var statearr_40276_40314 = state_40238__$1;
(statearr_40276_40314[(2)] = inst_40218);

(statearr_40276_40314[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (8))){
var inst_40182 = (state_40238[(7)]);
var state_40238__$1 = state_40238;
var statearr_40277_40315 = state_40238__$1;
(statearr_40277_40315[(2)] = inst_40182);

(statearr_40277_40315[(1)] = (9));


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
});})(c__11350__auto___40285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11253__auto__,c__11350__auto___40285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_40281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40281[(0)] = state_machine__11254__auto__);

(statearr_40281[(1)] = (1));

return statearr_40281;
});
var state_machine__11254__auto____1 = (function (state_40238){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_40238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e40282){if((e40282 instanceof Object)){
var ex__11257__auto__ = e40282;
var statearr_40283_40316 = state_40238;
(statearr_40283_40316[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40317 = state_40238;
state_40238 = G__40317;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_40238){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_40238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___40285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11352__auto__ = (function (){var statearr_40284 = f__11351__auto__.call(null);
(statearr_40284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___40285);

return statearr_40284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___40285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj40319 = {};
return obj40319;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3905__auto__ = p;
if(and__3905__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3905__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4561__auto__ = (((p == null))?null:p);
return (function (){var or__3917__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3905__auto__ = p;
if(and__3905__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3905__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4561__auto__ = (((p == null))?null:p);
return (function (){var or__3917__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3905__auto__ = p;
if(and__3905__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3905__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4561__auto__ = (((p == null))?null:p);
return (function (){var or__3917__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3905__auto__ = p;
if(and__3905__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3905__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4561__auto__ = (((p == null))?null:p);
return (function (){var or__3917__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4561__auto__)]);
if(or__3917__auto__){
return or__3917__auto__;
} else {
var or__3917__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3917__auto____$1){
return or__3917__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3917__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3917__auto__)){
return or__3917__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3917__auto__,mults){
return (function (p1__40320_SHARP_){
if(cljs.core.truth_(p1__40320_SHARP_.call(null,topic))){
return p1__40320_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40320_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3917__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t40435 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40435 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta40436){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta40436 = meta40436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40435.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t40435.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t40435.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t40435.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t40435.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t40435.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t40435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t40435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40437){
var self__ = this;
var _40437__$1 = this;
return self__.meta40436;
});})(mults,ensure_mult))
;

cljs.core.async.t40435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40437,meta40436__$1){
var self__ = this;
var _40437__$1 = this;
return (new cljs.core.async.t40435(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta40436__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t40435.cljs$lang$type = true;

cljs.core.async.t40435.cljs$lang$ctorStr = "cljs.core.async/t40435";

cljs.core.async.t40435.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4504__auto__,writer__4505__auto__,opt__4506__auto__){
return cljs.core._write.call(null,writer__4505__auto__,"cljs.core.async/t40435");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t40435 = ((function (mults,ensure_mult){
return (function __GT_t40435(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta40436){
return (new cljs.core.async.t40435(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta40436));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t40435(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11350__auto___40549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___40549,mults,ensure_mult,p){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___40549,mults,ensure_mult,p){
return (function (state_40505){
var state_val_40506 = (state_40505[(1)]);
if((state_val_40506 === (7))){
var inst_40501 = (state_40505[(2)]);
var state_40505__$1 = state_40505;
var statearr_40507_40550 = state_40505__$1;
(statearr_40507_40550[(2)] = inst_40501);

(statearr_40507_40550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (20))){
var state_40505__$1 = state_40505;
var statearr_40508_40551 = state_40505__$1;
(statearr_40508_40551[(2)] = null);

(statearr_40508_40551[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (1))){
var state_40505__$1 = state_40505;
var statearr_40509_40552 = state_40505__$1;
(statearr_40509_40552[(2)] = null);

(statearr_40509_40552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (4))){
var inst_40440 = (state_40505[(7)]);
var inst_40440__$1 = (state_40505[(2)]);
var inst_40441 = (inst_40440__$1 == null);
var state_40505__$1 = (function (){var statearr_40510 = state_40505;
(statearr_40510[(7)] = inst_40440__$1);

return statearr_40510;
})();
if(cljs.core.truth_(inst_40441)){
var statearr_40511_40553 = state_40505__$1;
(statearr_40511_40553[(1)] = (5));

} else {
var statearr_40512_40554 = state_40505__$1;
(statearr_40512_40554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (15))){
var inst_40482 = (state_40505[(2)]);
var state_40505__$1 = state_40505;
var statearr_40513_40555 = state_40505__$1;
(statearr_40513_40555[(2)] = inst_40482);

(statearr_40513_40555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (21))){
var inst_40488 = (state_40505[(8)]);
var inst_40496 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40488);
var state_40505__$1 = state_40505;
var statearr_40514_40556 = state_40505__$1;
(statearr_40514_40556[(2)] = inst_40496);

(statearr_40514_40556[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (13))){
var inst_40464 = (state_40505[(9)]);
var inst_40466 = cljs.core.chunked_seq_QMARK_.call(null,inst_40464);
var state_40505__$1 = state_40505;
if(inst_40466){
var statearr_40515_40557 = state_40505__$1;
(statearr_40515_40557[(1)] = (16));

} else {
var statearr_40516_40558 = state_40505__$1;
(statearr_40516_40558[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (22))){
var inst_40498 = (state_40505[(2)]);
var state_40505__$1 = (function (){var statearr_40517 = state_40505;
(statearr_40517[(10)] = inst_40498);

return statearr_40517;
})();
var statearr_40518_40559 = state_40505__$1;
(statearr_40518_40559[(2)] = null);

(statearr_40518_40559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (6))){
var inst_40488 = (state_40505[(8)]);
var inst_40440 = (state_40505[(7)]);
var inst_40488__$1 = topic_fn.call(null,inst_40440);
var inst_40489 = cljs.core.deref.call(null,mults);
var inst_40490 = cljs.core.get.call(null,inst_40489,inst_40488__$1);
var inst_40491 = cljs.core.async.muxch_STAR_.call(null,inst_40490);
var state_40505__$1 = (function (){var statearr_40519 = state_40505;
(statearr_40519[(8)] = inst_40488__$1);

return statearr_40519;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40505__$1,(19),inst_40491,inst_40440);
} else {
if((state_val_40506 === (17))){
var inst_40464 = (state_40505[(9)]);
var inst_40473 = cljs.core.first.call(null,inst_40464);
var inst_40474 = cljs.core.async.muxch_STAR_.call(null,inst_40473);
var inst_40475 = cljs.core.async.close_BANG_.call(null,inst_40474);
var inst_40476 = cljs.core.next.call(null,inst_40464);
var inst_40450 = inst_40476;
var inst_40451 = null;
var inst_40452 = (0);
var inst_40453 = (0);
var state_40505__$1 = (function (){var statearr_40520 = state_40505;
(statearr_40520[(11)] = inst_40451);

(statearr_40520[(12)] = inst_40475);

(statearr_40520[(13)] = inst_40452);

(statearr_40520[(14)] = inst_40453);

(statearr_40520[(15)] = inst_40450);

return statearr_40520;
})();
var statearr_40521_40560 = state_40505__$1;
(statearr_40521_40560[(2)] = null);

(statearr_40521_40560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (3))){
var inst_40503 = (state_40505[(2)]);
var state_40505__$1 = state_40505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40505__$1,inst_40503);
} else {
if((state_val_40506 === (12))){
var inst_40484 = (state_40505[(2)]);
var state_40505__$1 = state_40505;
var statearr_40522_40561 = state_40505__$1;
(statearr_40522_40561[(2)] = inst_40484);

(statearr_40522_40561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (2))){
var state_40505__$1 = state_40505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40505__$1,(4),ch);
} else {
if((state_val_40506 === (19))){
var inst_40493 = (state_40505[(2)]);
var state_40505__$1 = state_40505;
if(cljs.core.truth_(inst_40493)){
var statearr_40523_40562 = state_40505__$1;
(statearr_40523_40562[(1)] = (20));

} else {
var statearr_40524_40563 = state_40505__$1;
(statearr_40524_40563[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (11))){
var inst_40464 = (state_40505[(9)]);
var inst_40450 = (state_40505[(15)]);
var inst_40464__$1 = cljs.core.seq.call(null,inst_40450);
var state_40505__$1 = (function (){var statearr_40525 = state_40505;
(statearr_40525[(9)] = inst_40464__$1);

return statearr_40525;
})();
if(inst_40464__$1){
var statearr_40526_40564 = state_40505__$1;
(statearr_40526_40564[(1)] = (13));

} else {
var statearr_40527_40565 = state_40505__$1;
(statearr_40527_40565[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (9))){
var inst_40486 = (state_40505[(2)]);
var state_40505__$1 = state_40505;
var statearr_40528_40566 = state_40505__$1;
(statearr_40528_40566[(2)] = inst_40486);

(statearr_40528_40566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (5))){
var inst_40447 = cljs.core.deref.call(null,mults);
var inst_40448 = cljs.core.vals.call(null,inst_40447);
var inst_40449 = cljs.core.seq.call(null,inst_40448);
var inst_40450 = inst_40449;
var inst_40451 = null;
var inst_40452 = (0);
var inst_40453 = (0);
var state_40505__$1 = (function (){var statearr_40529 = state_40505;
(statearr_40529[(11)] = inst_40451);

(statearr_40529[(13)] = inst_40452);

(statearr_40529[(14)] = inst_40453);

(statearr_40529[(15)] = inst_40450);

return statearr_40529;
})();
var statearr_40530_40567 = state_40505__$1;
(statearr_40530_40567[(2)] = null);

(statearr_40530_40567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (14))){
var state_40505__$1 = state_40505;
var statearr_40534_40568 = state_40505__$1;
(statearr_40534_40568[(2)] = null);

(statearr_40534_40568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (16))){
var inst_40464 = (state_40505[(9)]);
var inst_40468 = cljs.core.chunk_first.call(null,inst_40464);
var inst_40469 = cljs.core.chunk_rest.call(null,inst_40464);
var inst_40470 = cljs.core.count.call(null,inst_40468);
var inst_40450 = inst_40469;
var inst_40451 = inst_40468;
var inst_40452 = inst_40470;
var inst_40453 = (0);
var state_40505__$1 = (function (){var statearr_40535 = state_40505;
(statearr_40535[(11)] = inst_40451);

(statearr_40535[(13)] = inst_40452);

(statearr_40535[(14)] = inst_40453);

(statearr_40535[(15)] = inst_40450);

return statearr_40535;
})();
var statearr_40536_40569 = state_40505__$1;
(statearr_40536_40569[(2)] = null);

(statearr_40536_40569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (10))){
var inst_40451 = (state_40505[(11)]);
var inst_40452 = (state_40505[(13)]);
var inst_40453 = (state_40505[(14)]);
var inst_40450 = (state_40505[(15)]);
var inst_40458 = cljs.core._nth.call(null,inst_40451,inst_40453);
var inst_40459 = cljs.core.async.muxch_STAR_.call(null,inst_40458);
var inst_40460 = cljs.core.async.close_BANG_.call(null,inst_40459);
var inst_40461 = (inst_40453 + (1));
var tmp40531 = inst_40451;
var tmp40532 = inst_40452;
var tmp40533 = inst_40450;
var inst_40450__$1 = tmp40533;
var inst_40451__$1 = tmp40531;
var inst_40452__$1 = tmp40532;
var inst_40453__$1 = inst_40461;
var state_40505__$1 = (function (){var statearr_40537 = state_40505;
(statearr_40537[(11)] = inst_40451__$1);

(statearr_40537[(13)] = inst_40452__$1);

(statearr_40537[(14)] = inst_40453__$1);

(statearr_40537[(16)] = inst_40460);

(statearr_40537[(15)] = inst_40450__$1);

return statearr_40537;
})();
var statearr_40538_40570 = state_40505__$1;
(statearr_40538_40570[(2)] = null);

(statearr_40538_40570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (18))){
var inst_40479 = (state_40505[(2)]);
var state_40505__$1 = state_40505;
var statearr_40539_40571 = state_40505__$1;
(statearr_40539_40571[(2)] = inst_40479);

(statearr_40539_40571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (8))){
var inst_40452 = (state_40505[(13)]);
var inst_40453 = (state_40505[(14)]);
var inst_40455 = (inst_40453 < inst_40452);
var inst_40456 = inst_40455;
var state_40505__$1 = state_40505;
if(cljs.core.truth_(inst_40456)){
var statearr_40540_40572 = state_40505__$1;
(statearr_40540_40572[(1)] = (10));

} else {
var statearr_40541_40573 = state_40505__$1;
(statearr_40541_40573[(1)] = (11));

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
});})(c__11350__auto___40549,mults,ensure_mult,p))
;
return ((function (switch__11253__auto__,c__11350__auto___40549,mults,ensure_mult,p){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_40545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40545[(0)] = state_machine__11254__auto__);

(statearr_40545[(1)] = (1));

return statearr_40545;
});
var state_machine__11254__auto____1 = (function (state_40505){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_40505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e40546){if((e40546 instanceof Object)){
var ex__11257__auto__ = e40546;
var statearr_40547_40574 = state_40505;
(statearr_40547_40574[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40575 = state_40505;
state_40505 = G__40575;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_40505){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_40505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___40549,mults,ensure_mult,p))
})();
var state__11352__auto__ = (function (){var statearr_40548 = f__11351__auto__.call(null);
(statearr_40548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___40549);

return statearr_40548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___40549,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
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
var c__11350__auto___40712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___40712,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___40712,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40682){
var state_val_40683 = (state_40682[(1)]);
if((state_val_40683 === (7))){
var state_40682__$1 = state_40682;
var statearr_40684_40713 = state_40682__$1;
(statearr_40684_40713[(2)] = null);

(statearr_40684_40713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (1))){
var state_40682__$1 = state_40682;
var statearr_40685_40714 = state_40682__$1;
(statearr_40685_40714[(2)] = null);

(statearr_40685_40714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (4))){
var inst_40646 = (state_40682[(7)]);
var inst_40648 = (inst_40646 < cnt);
var state_40682__$1 = state_40682;
if(cljs.core.truth_(inst_40648)){
var statearr_40686_40715 = state_40682__$1;
(statearr_40686_40715[(1)] = (6));

} else {
var statearr_40687_40716 = state_40682__$1;
(statearr_40687_40716[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (15))){
var inst_40678 = (state_40682[(2)]);
var state_40682__$1 = state_40682;
var statearr_40688_40717 = state_40682__$1;
(statearr_40688_40717[(2)] = inst_40678);

(statearr_40688_40717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (13))){
var inst_40671 = cljs.core.async.close_BANG_.call(null,out);
var state_40682__$1 = state_40682;
var statearr_40689_40718 = state_40682__$1;
(statearr_40689_40718[(2)] = inst_40671);

(statearr_40689_40718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (6))){
var state_40682__$1 = state_40682;
var statearr_40690_40719 = state_40682__$1;
(statearr_40690_40719[(2)] = null);

(statearr_40690_40719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (3))){
var inst_40680 = (state_40682[(2)]);
var state_40682__$1 = state_40682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40682__$1,inst_40680);
} else {
if((state_val_40683 === (12))){
var inst_40668 = (state_40682[(8)]);
var inst_40668__$1 = (state_40682[(2)]);
var inst_40669 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40668__$1);
var state_40682__$1 = (function (){var statearr_40691 = state_40682;
(statearr_40691[(8)] = inst_40668__$1);

return statearr_40691;
})();
if(cljs.core.truth_(inst_40669)){
var statearr_40692_40720 = state_40682__$1;
(statearr_40692_40720[(1)] = (13));

} else {
var statearr_40693_40721 = state_40682__$1;
(statearr_40693_40721[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (2))){
var inst_40645 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40646 = (0);
var state_40682__$1 = (function (){var statearr_40694 = state_40682;
(statearr_40694[(7)] = inst_40646);

(statearr_40694[(9)] = inst_40645);

return statearr_40694;
})();
var statearr_40695_40722 = state_40682__$1;
(statearr_40695_40722[(2)] = null);

(statearr_40695_40722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (11))){
var inst_40646 = (state_40682[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40682,(10),Object,null,(9));
var inst_40655 = chs__$1.call(null,inst_40646);
var inst_40656 = done.call(null,inst_40646);
var inst_40657 = cljs.core.async.take_BANG_.call(null,inst_40655,inst_40656);
var state_40682__$1 = state_40682;
var statearr_40696_40723 = state_40682__$1;
(statearr_40696_40723[(2)] = inst_40657);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40682__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (9))){
var inst_40646 = (state_40682[(7)]);
var inst_40659 = (state_40682[(2)]);
var inst_40660 = (inst_40646 + (1));
var inst_40646__$1 = inst_40660;
var state_40682__$1 = (function (){var statearr_40697 = state_40682;
(statearr_40697[(10)] = inst_40659);

(statearr_40697[(7)] = inst_40646__$1);

return statearr_40697;
})();
var statearr_40698_40724 = state_40682__$1;
(statearr_40698_40724[(2)] = null);

(statearr_40698_40724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (5))){
var inst_40666 = (state_40682[(2)]);
var state_40682__$1 = (function (){var statearr_40699 = state_40682;
(statearr_40699[(11)] = inst_40666);

return statearr_40699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40682__$1,(12),dchan);
} else {
if((state_val_40683 === (14))){
var inst_40668 = (state_40682[(8)]);
var inst_40673 = cljs.core.apply.call(null,f,inst_40668);
var state_40682__$1 = state_40682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40682__$1,(16),out,inst_40673);
} else {
if((state_val_40683 === (16))){
var inst_40675 = (state_40682[(2)]);
var state_40682__$1 = (function (){var statearr_40700 = state_40682;
(statearr_40700[(12)] = inst_40675);

return statearr_40700;
})();
var statearr_40701_40725 = state_40682__$1;
(statearr_40701_40725[(2)] = null);

(statearr_40701_40725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (10))){
var inst_40650 = (state_40682[(2)]);
var inst_40651 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40682__$1 = (function (){var statearr_40702 = state_40682;
(statearr_40702[(13)] = inst_40650);

return statearr_40702;
})();
var statearr_40703_40726 = state_40682__$1;
(statearr_40703_40726[(2)] = inst_40651);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40682__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (8))){
var inst_40664 = (state_40682[(2)]);
var state_40682__$1 = state_40682;
var statearr_40704_40727 = state_40682__$1;
(statearr_40704_40727[(2)] = inst_40664);

(statearr_40704_40727[(1)] = (5));


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
});})(c__11350__auto___40712,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11253__auto__,c__11350__auto___40712,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_40708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40708[(0)] = state_machine__11254__auto__);

(statearr_40708[(1)] = (1));

return statearr_40708;
});
var state_machine__11254__auto____1 = (function (state_40682){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_40682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e40709){if((e40709 instanceof Object)){
var ex__11257__auto__ = e40709;
var statearr_40710_40728 = state_40682;
(statearr_40710_40728[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40729 = state_40682;
state_40682 = G__40729;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_40682){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_40682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___40712,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11352__auto__ = (function (){var statearr_40711 = f__11351__auto__.call(null);
(statearr_40711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___40712);

return statearr_40711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___40712,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11350__auto___40837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___40837,out){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___40837,out){
return (function (state_40813){
var state_val_40814 = (state_40813[(1)]);
if((state_val_40814 === (7))){
var inst_40793 = (state_40813[(7)]);
var inst_40792 = (state_40813[(8)]);
var inst_40792__$1 = (state_40813[(2)]);
var inst_40793__$1 = cljs.core.nth.call(null,inst_40792__$1,(0),null);
var inst_40794 = cljs.core.nth.call(null,inst_40792__$1,(1),null);
var inst_40795 = (inst_40793__$1 == null);
var state_40813__$1 = (function (){var statearr_40815 = state_40813;
(statearr_40815[(7)] = inst_40793__$1);

(statearr_40815[(9)] = inst_40794);

(statearr_40815[(8)] = inst_40792__$1);

return statearr_40815;
})();
if(cljs.core.truth_(inst_40795)){
var statearr_40816_40838 = state_40813__$1;
(statearr_40816_40838[(1)] = (8));

} else {
var statearr_40817_40839 = state_40813__$1;
(statearr_40817_40839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40814 === (1))){
var inst_40784 = cljs.core.vec.call(null,chs);
var inst_40785 = inst_40784;
var state_40813__$1 = (function (){var statearr_40818 = state_40813;
(statearr_40818[(10)] = inst_40785);

return statearr_40818;
})();
var statearr_40819_40840 = state_40813__$1;
(statearr_40819_40840[(2)] = null);

(statearr_40819_40840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40814 === (4))){
var inst_40785 = (state_40813[(10)]);
var state_40813__$1 = state_40813;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_40813__$1,(7),inst_40785);
} else {
if((state_val_40814 === (6))){
var inst_40809 = (state_40813[(2)]);
var state_40813__$1 = state_40813;
var statearr_40820_40841 = state_40813__$1;
(statearr_40820_40841[(2)] = inst_40809);

(statearr_40820_40841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40814 === (3))){
var inst_40811 = (state_40813[(2)]);
var state_40813__$1 = state_40813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40813__$1,inst_40811);
} else {
if((state_val_40814 === (2))){
var inst_40785 = (state_40813[(10)]);
var inst_40787 = cljs.core.count.call(null,inst_40785);
var inst_40788 = (inst_40787 > (0));
var state_40813__$1 = state_40813;
if(cljs.core.truth_(inst_40788)){
var statearr_40822_40842 = state_40813__$1;
(statearr_40822_40842[(1)] = (4));

} else {
var statearr_40823_40843 = state_40813__$1;
(statearr_40823_40843[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40814 === (11))){
var inst_40785 = (state_40813[(10)]);
var inst_40802 = (state_40813[(2)]);
var tmp40821 = inst_40785;
var inst_40785__$1 = tmp40821;
var state_40813__$1 = (function (){var statearr_40824 = state_40813;
(statearr_40824[(11)] = inst_40802);

(statearr_40824[(10)] = inst_40785__$1);

return statearr_40824;
})();
var statearr_40825_40844 = state_40813__$1;
(statearr_40825_40844[(2)] = null);

(statearr_40825_40844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40814 === (9))){
var inst_40793 = (state_40813[(7)]);
var state_40813__$1 = state_40813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40813__$1,(11),out,inst_40793);
} else {
if((state_val_40814 === (5))){
var inst_40807 = cljs.core.async.close_BANG_.call(null,out);
var state_40813__$1 = state_40813;
var statearr_40826_40845 = state_40813__$1;
(statearr_40826_40845[(2)] = inst_40807);

(statearr_40826_40845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40814 === (10))){
var inst_40805 = (state_40813[(2)]);
var state_40813__$1 = state_40813;
var statearr_40827_40846 = state_40813__$1;
(statearr_40827_40846[(2)] = inst_40805);

(statearr_40827_40846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40814 === (8))){
var inst_40793 = (state_40813[(7)]);
var inst_40785 = (state_40813[(10)]);
var inst_40794 = (state_40813[(9)]);
var inst_40792 = (state_40813[(8)]);
var inst_40797 = (function (){var c = inst_40794;
var v = inst_40793;
var vec__40790 = inst_40792;
var cs = inst_40785;
return ((function (c,v,vec__40790,cs,inst_40793,inst_40785,inst_40794,inst_40792,state_val_40814,c__11350__auto___40837,out){
return (function (p1__40730_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40730_SHARP_);
});
;})(c,v,vec__40790,cs,inst_40793,inst_40785,inst_40794,inst_40792,state_val_40814,c__11350__auto___40837,out))
})();
var inst_40798 = cljs.core.filterv.call(null,inst_40797,inst_40785);
var inst_40785__$1 = inst_40798;
var state_40813__$1 = (function (){var statearr_40828 = state_40813;
(statearr_40828[(10)] = inst_40785__$1);

return statearr_40828;
})();
var statearr_40829_40847 = state_40813__$1;
(statearr_40829_40847[(2)] = null);

(statearr_40829_40847[(1)] = (2));


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
});})(c__11350__auto___40837,out))
;
return ((function (switch__11253__auto__,c__11350__auto___40837,out){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_40833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40833[(0)] = state_machine__11254__auto__);

(statearr_40833[(1)] = (1));

return statearr_40833;
});
var state_machine__11254__auto____1 = (function (state_40813){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_40813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e40834){if((e40834 instanceof Object)){
var ex__11257__auto__ = e40834;
var statearr_40835_40848 = state_40813;
(statearr_40835_40848[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40849 = state_40813;
state_40813 = G__40849;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_40813){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_40813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___40837,out))
})();
var state__11352__auto__ = (function (){var statearr_40836 = f__11351__auto__.call(null);
(statearr_40836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___40837);

return statearr_40836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___40837,out))
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
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11350__auto___40942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___40942,out){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___40942,out){
return (function (state_40919){
var state_val_40920 = (state_40919[(1)]);
if((state_val_40920 === (7))){
var inst_40901 = (state_40919[(7)]);
var inst_40901__$1 = (state_40919[(2)]);
var inst_40902 = (inst_40901__$1 == null);
var inst_40903 = cljs.core.not.call(null,inst_40902);
var state_40919__$1 = (function (){var statearr_40921 = state_40919;
(statearr_40921[(7)] = inst_40901__$1);

return statearr_40921;
})();
if(inst_40903){
var statearr_40922_40943 = state_40919__$1;
(statearr_40922_40943[(1)] = (8));

} else {
var statearr_40923_40944 = state_40919__$1;
(statearr_40923_40944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40920 === (1))){
var inst_40896 = (0);
var state_40919__$1 = (function (){var statearr_40924 = state_40919;
(statearr_40924[(8)] = inst_40896);

return statearr_40924;
})();
var statearr_40925_40945 = state_40919__$1;
(statearr_40925_40945[(2)] = null);

(statearr_40925_40945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40920 === (4))){
var state_40919__$1 = state_40919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40919__$1,(7),ch);
} else {
if((state_val_40920 === (6))){
var inst_40914 = (state_40919[(2)]);
var state_40919__$1 = state_40919;
var statearr_40926_40946 = state_40919__$1;
(statearr_40926_40946[(2)] = inst_40914);

(statearr_40926_40946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40920 === (3))){
var inst_40916 = (state_40919[(2)]);
var inst_40917 = cljs.core.async.close_BANG_.call(null,out);
var state_40919__$1 = (function (){var statearr_40927 = state_40919;
(statearr_40927[(9)] = inst_40916);

return statearr_40927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40919__$1,inst_40917);
} else {
if((state_val_40920 === (2))){
var inst_40896 = (state_40919[(8)]);
var inst_40898 = (inst_40896 < n);
var state_40919__$1 = state_40919;
if(cljs.core.truth_(inst_40898)){
var statearr_40928_40947 = state_40919__$1;
(statearr_40928_40947[(1)] = (4));

} else {
var statearr_40929_40948 = state_40919__$1;
(statearr_40929_40948[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40920 === (11))){
var inst_40896 = (state_40919[(8)]);
var inst_40906 = (state_40919[(2)]);
var inst_40907 = (inst_40896 + (1));
var inst_40896__$1 = inst_40907;
var state_40919__$1 = (function (){var statearr_40930 = state_40919;
(statearr_40930[(8)] = inst_40896__$1);

(statearr_40930[(10)] = inst_40906);

return statearr_40930;
})();
var statearr_40931_40949 = state_40919__$1;
(statearr_40931_40949[(2)] = null);

(statearr_40931_40949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40920 === (9))){
var state_40919__$1 = state_40919;
var statearr_40932_40950 = state_40919__$1;
(statearr_40932_40950[(2)] = null);

(statearr_40932_40950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40920 === (5))){
var state_40919__$1 = state_40919;
var statearr_40933_40951 = state_40919__$1;
(statearr_40933_40951[(2)] = null);

(statearr_40933_40951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40920 === (10))){
var inst_40911 = (state_40919[(2)]);
var state_40919__$1 = state_40919;
var statearr_40934_40952 = state_40919__$1;
(statearr_40934_40952[(2)] = inst_40911);

(statearr_40934_40952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40920 === (8))){
var inst_40901 = (state_40919[(7)]);
var state_40919__$1 = state_40919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40919__$1,(11),out,inst_40901);
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
});})(c__11350__auto___40942,out))
;
return ((function (switch__11253__auto__,c__11350__auto___40942,out){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_40938 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40938[(0)] = state_machine__11254__auto__);

(statearr_40938[(1)] = (1));

return statearr_40938;
});
var state_machine__11254__auto____1 = (function (state_40919){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_40919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e40939){if((e40939 instanceof Object)){
var ex__11257__auto__ = e40939;
var statearr_40940_40953 = state_40919;
(statearr_40940_40953[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40954 = state_40919;
state_40919 = G__40954;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_40919){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_40919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___40942,out))
})();
var state__11352__auto__ = (function (){var statearr_40941 = f__11351__auto__.call(null);
(statearr_40941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___40942);

return statearr_40941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___40942,out))
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
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11350__auto___41051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___41051,out){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___41051,out){
return (function (state_41026){
var state_val_41027 = (state_41026[(1)]);
if((state_val_41027 === (7))){
var inst_41021 = (state_41026[(2)]);
var state_41026__$1 = state_41026;
var statearr_41028_41052 = state_41026__$1;
(statearr_41028_41052[(2)] = inst_41021);

(statearr_41028_41052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (1))){
var inst_41003 = null;
var state_41026__$1 = (function (){var statearr_41029 = state_41026;
(statearr_41029[(7)] = inst_41003);

return statearr_41029;
})();
var statearr_41030_41053 = state_41026__$1;
(statearr_41030_41053[(2)] = null);

(statearr_41030_41053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (4))){
var inst_41006 = (state_41026[(8)]);
var inst_41006__$1 = (state_41026[(2)]);
var inst_41007 = (inst_41006__$1 == null);
var inst_41008 = cljs.core.not.call(null,inst_41007);
var state_41026__$1 = (function (){var statearr_41031 = state_41026;
(statearr_41031[(8)] = inst_41006__$1);

return statearr_41031;
})();
if(inst_41008){
var statearr_41032_41054 = state_41026__$1;
(statearr_41032_41054[(1)] = (5));

} else {
var statearr_41033_41055 = state_41026__$1;
(statearr_41033_41055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (6))){
var state_41026__$1 = state_41026;
var statearr_41034_41056 = state_41026__$1;
(statearr_41034_41056[(2)] = null);

(statearr_41034_41056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (3))){
var inst_41023 = (state_41026[(2)]);
var inst_41024 = cljs.core.async.close_BANG_.call(null,out);
var state_41026__$1 = (function (){var statearr_41035 = state_41026;
(statearr_41035[(9)] = inst_41023);

return statearr_41035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41026__$1,inst_41024);
} else {
if((state_val_41027 === (2))){
var state_41026__$1 = state_41026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41026__$1,(4),ch);
} else {
if((state_val_41027 === (11))){
var inst_41006 = (state_41026[(8)]);
var inst_41015 = (state_41026[(2)]);
var inst_41003 = inst_41006;
var state_41026__$1 = (function (){var statearr_41036 = state_41026;
(statearr_41036[(10)] = inst_41015);

(statearr_41036[(7)] = inst_41003);

return statearr_41036;
})();
var statearr_41037_41057 = state_41026__$1;
(statearr_41037_41057[(2)] = null);

(statearr_41037_41057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (9))){
var inst_41006 = (state_41026[(8)]);
var state_41026__$1 = state_41026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41026__$1,(11),out,inst_41006);
} else {
if((state_val_41027 === (5))){
var inst_41006 = (state_41026[(8)]);
var inst_41003 = (state_41026[(7)]);
var inst_41010 = cljs.core._EQ_.call(null,inst_41006,inst_41003);
var state_41026__$1 = state_41026;
if(inst_41010){
var statearr_41039_41058 = state_41026__$1;
(statearr_41039_41058[(1)] = (8));

} else {
var statearr_41040_41059 = state_41026__$1;
(statearr_41040_41059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (10))){
var inst_41018 = (state_41026[(2)]);
var state_41026__$1 = state_41026;
var statearr_41041_41060 = state_41026__$1;
(statearr_41041_41060[(2)] = inst_41018);

(statearr_41041_41060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (8))){
var inst_41003 = (state_41026[(7)]);
var tmp41038 = inst_41003;
var inst_41003__$1 = tmp41038;
var state_41026__$1 = (function (){var statearr_41042 = state_41026;
(statearr_41042[(7)] = inst_41003__$1);

return statearr_41042;
})();
var statearr_41043_41061 = state_41026__$1;
(statearr_41043_41061[(2)] = null);

(statearr_41043_41061[(1)] = (2));


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
});})(c__11350__auto___41051,out))
;
return ((function (switch__11253__auto__,c__11350__auto___41051,out){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_41047 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41047[(0)] = state_machine__11254__auto__);

(statearr_41047[(1)] = (1));

return statearr_41047;
});
var state_machine__11254__auto____1 = (function (state_41026){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_41026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e41048){if((e41048 instanceof Object)){
var ex__11257__auto__ = e41048;
var statearr_41049_41062 = state_41026;
(statearr_41049_41062[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41063 = state_41026;
state_41026 = G__41063;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_41026){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_41026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___41051,out))
})();
var state__11352__auto__ = (function (){var statearr_41050 = f__11351__auto__.call(null);
(statearr_41050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___41051);

return statearr_41050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___41051,out))
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
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11350__auto___41198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___41198,out){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___41198,out){
return (function (state_41168){
var state_val_41169 = (state_41168[(1)]);
if((state_val_41169 === (7))){
var inst_41164 = (state_41168[(2)]);
var state_41168__$1 = state_41168;
var statearr_41170_41199 = state_41168__$1;
(statearr_41170_41199[(2)] = inst_41164);

(statearr_41170_41199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41169 === (1))){
var inst_41131 = (new Array(n));
var inst_41132 = inst_41131;
var inst_41133 = (0);
var state_41168__$1 = (function (){var statearr_41171 = state_41168;
(statearr_41171[(7)] = inst_41132);

(statearr_41171[(8)] = inst_41133);

return statearr_41171;
})();
var statearr_41172_41200 = state_41168__$1;
(statearr_41172_41200[(2)] = null);

(statearr_41172_41200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41169 === (4))){
var inst_41136 = (state_41168[(9)]);
var inst_41136__$1 = (state_41168[(2)]);
var inst_41137 = (inst_41136__$1 == null);
var inst_41138 = cljs.core.not.call(null,inst_41137);
var state_41168__$1 = (function (){var statearr_41173 = state_41168;
(statearr_41173[(9)] = inst_41136__$1);

return statearr_41173;
})();
if(inst_41138){
var statearr_41174_41201 = state_41168__$1;
(statearr_41174_41201[(1)] = (5));

} else {
var statearr_41175_41202 = state_41168__$1;
(statearr_41175_41202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41169 === (15))){
var inst_41158 = (state_41168[(2)]);
var state_41168__$1 = state_41168;
var statearr_41176_41203 = state_41168__$1;
(statearr_41176_41203[(2)] = inst_41158);

(statearr_41176_41203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41169 === (13))){
var state_41168__$1 = state_41168;
var statearr_41177_41204 = state_41168__$1;
(statearr_41177_41204[(2)] = null);

(statearr_41177_41204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41169 === (6))){
var inst_41133 = (state_41168[(8)]);
var inst_41154 = (inst_41133 > (0));
var state_41168__$1 = state_41168;
if(cljs.core.truth_(inst_41154)){
var statearr_41178_41205 = state_41168__$1;
(statearr_41178_41205[(1)] = (12));

} else {
var statearr_41179_41206 = state_41168__$1;
(statearr_41179_41206[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41169 === (3))){
var inst_41166 = (state_41168[(2)]);
var state_41168__$1 = state_41168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41168__$1,inst_41166);
} else {
if((state_val_41169 === (12))){
var inst_41132 = (state_41168[(7)]);
var inst_41156 = cljs.core.vec.call(null,inst_41132);
var state_41168__$1 = state_41168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41168__$1,(15),out,inst_41156);
} else {
if((state_val_41169 === (2))){
var state_41168__$1 = state_41168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41168__$1,(4),ch);
} else {
if((state_val_41169 === (11))){
var inst_41148 = (state_41168[(2)]);
var inst_41149 = (new Array(n));
var inst_41132 = inst_41149;
var inst_41133 = (0);
var state_41168__$1 = (function (){var statearr_41180 = state_41168;
(statearr_41180[(7)] = inst_41132);

(statearr_41180[(10)] = inst_41148);

(statearr_41180[(8)] = inst_41133);

return statearr_41180;
})();
var statearr_41181_41207 = state_41168__$1;
(statearr_41181_41207[(2)] = null);

(statearr_41181_41207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41169 === (9))){
var inst_41132 = (state_41168[(7)]);
var inst_41146 = cljs.core.vec.call(null,inst_41132);
var state_41168__$1 = state_41168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41168__$1,(11),out,inst_41146);
} else {
if((state_val_41169 === (5))){
var inst_41132 = (state_41168[(7)]);
var inst_41136 = (state_41168[(9)]);
var inst_41133 = (state_41168[(8)]);
var inst_41141 = (state_41168[(11)]);
var inst_41140 = (inst_41132[inst_41133] = inst_41136);
var inst_41141__$1 = (inst_41133 + (1));
var inst_41142 = (inst_41141__$1 < n);
var state_41168__$1 = (function (){var statearr_41182 = state_41168;
(statearr_41182[(12)] = inst_41140);

(statearr_41182[(11)] = inst_41141__$1);

return statearr_41182;
})();
if(cljs.core.truth_(inst_41142)){
var statearr_41183_41208 = state_41168__$1;
(statearr_41183_41208[(1)] = (8));

} else {
var statearr_41184_41209 = state_41168__$1;
(statearr_41184_41209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41169 === (14))){
var inst_41161 = (state_41168[(2)]);
var inst_41162 = cljs.core.async.close_BANG_.call(null,out);
var state_41168__$1 = (function (){var statearr_41186 = state_41168;
(statearr_41186[(13)] = inst_41161);

return statearr_41186;
})();
var statearr_41187_41210 = state_41168__$1;
(statearr_41187_41210[(2)] = inst_41162);

(statearr_41187_41210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41169 === (10))){
var inst_41152 = (state_41168[(2)]);
var state_41168__$1 = state_41168;
var statearr_41188_41211 = state_41168__$1;
(statearr_41188_41211[(2)] = inst_41152);

(statearr_41188_41211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41169 === (8))){
var inst_41132 = (state_41168[(7)]);
var inst_41141 = (state_41168[(11)]);
var tmp41185 = inst_41132;
var inst_41132__$1 = tmp41185;
var inst_41133 = inst_41141;
var state_41168__$1 = (function (){var statearr_41189 = state_41168;
(statearr_41189[(7)] = inst_41132__$1);

(statearr_41189[(8)] = inst_41133);

return statearr_41189;
})();
var statearr_41190_41212 = state_41168__$1;
(statearr_41190_41212[(2)] = null);

(statearr_41190_41212[(1)] = (2));


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
});})(c__11350__auto___41198,out))
;
return ((function (switch__11253__auto__,c__11350__auto___41198,out){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_41194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41194[(0)] = state_machine__11254__auto__);

(statearr_41194[(1)] = (1));

return statearr_41194;
});
var state_machine__11254__auto____1 = (function (state_41168){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_41168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e41195){if((e41195 instanceof Object)){
var ex__11257__auto__ = e41195;
var statearr_41196_41213 = state_41168;
(statearr_41196_41213[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41214 = state_41168;
state_41168 = G__41214;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_41168){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_41168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___41198,out))
})();
var state__11352__auto__ = (function (){var statearr_41197 = f__11351__auto__.call(null);
(statearr_41197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___41198);

return statearr_41197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___41198,out))
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
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11350__auto___41357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___41357,out){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___41357,out){
return (function (state_41327){
var state_val_41328 = (state_41327[(1)]);
if((state_val_41328 === (7))){
var inst_41323 = (state_41327[(2)]);
var state_41327__$1 = state_41327;
var statearr_41329_41358 = state_41327__$1;
(statearr_41329_41358[(2)] = inst_41323);

(statearr_41329_41358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41328 === (1))){
var inst_41286 = [];
var inst_41287 = inst_41286;
var inst_41288 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41327__$1 = (function (){var statearr_41330 = state_41327;
(statearr_41330[(7)] = inst_41287);

(statearr_41330[(8)] = inst_41288);

return statearr_41330;
})();
var statearr_41331_41359 = state_41327__$1;
(statearr_41331_41359[(2)] = null);

(statearr_41331_41359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41328 === (4))){
var inst_41291 = (state_41327[(9)]);
var inst_41291__$1 = (state_41327[(2)]);
var inst_41292 = (inst_41291__$1 == null);
var inst_41293 = cljs.core.not.call(null,inst_41292);
var state_41327__$1 = (function (){var statearr_41332 = state_41327;
(statearr_41332[(9)] = inst_41291__$1);

return statearr_41332;
})();
if(inst_41293){
var statearr_41333_41360 = state_41327__$1;
(statearr_41333_41360[(1)] = (5));

} else {
var statearr_41334_41361 = state_41327__$1;
(statearr_41334_41361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41328 === (15))){
var inst_41317 = (state_41327[(2)]);
var state_41327__$1 = state_41327;
var statearr_41335_41362 = state_41327__$1;
(statearr_41335_41362[(2)] = inst_41317);

(statearr_41335_41362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41328 === (13))){
var state_41327__$1 = state_41327;
var statearr_41336_41363 = state_41327__$1;
(statearr_41336_41363[(2)] = null);

(statearr_41336_41363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41328 === (6))){
var inst_41287 = (state_41327[(7)]);
var inst_41312 = inst_41287.length;
var inst_41313 = (inst_41312 > (0));
var state_41327__$1 = state_41327;
if(cljs.core.truth_(inst_41313)){
var statearr_41337_41364 = state_41327__$1;
(statearr_41337_41364[(1)] = (12));

} else {
var statearr_41338_41365 = state_41327__$1;
(statearr_41338_41365[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41328 === (3))){
var inst_41325 = (state_41327[(2)]);
var state_41327__$1 = state_41327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41327__$1,inst_41325);
} else {
if((state_val_41328 === (12))){
var inst_41287 = (state_41327[(7)]);
var inst_41315 = cljs.core.vec.call(null,inst_41287);
var state_41327__$1 = state_41327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41327__$1,(15),out,inst_41315);
} else {
if((state_val_41328 === (2))){
var state_41327__$1 = state_41327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41327__$1,(4),ch);
} else {
if((state_val_41328 === (11))){
var inst_41295 = (state_41327[(10)]);
var inst_41291 = (state_41327[(9)]);
var inst_41305 = (state_41327[(2)]);
var inst_41306 = [];
var inst_41307 = inst_41306.push(inst_41291);
var inst_41287 = inst_41306;
var inst_41288 = inst_41295;
var state_41327__$1 = (function (){var statearr_41339 = state_41327;
(statearr_41339[(11)] = inst_41305);

(statearr_41339[(7)] = inst_41287);

(statearr_41339[(8)] = inst_41288);

(statearr_41339[(12)] = inst_41307);

return statearr_41339;
})();
var statearr_41340_41366 = state_41327__$1;
(statearr_41340_41366[(2)] = null);

(statearr_41340_41366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41328 === (9))){
var inst_41287 = (state_41327[(7)]);
var inst_41303 = cljs.core.vec.call(null,inst_41287);
var state_41327__$1 = state_41327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41327__$1,(11),out,inst_41303);
} else {
if((state_val_41328 === (5))){
var inst_41295 = (state_41327[(10)]);
var inst_41291 = (state_41327[(9)]);
var inst_41288 = (state_41327[(8)]);
var inst_41295__$1 = f.call(null,inst_41291);
var inst_41296 = cljs.core._EQ_.call(null,inst_41295__$1,inst_41288);
var inst_41297 = cljs.core.keyword_identical_QMARK_.call(null,inst_41288,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41298 = (inst_41296) || (inst_41297);
var state_41327__$1 = (function (){var statearr_41341 = state_41327;
(statearr_41341[(10)] = inst_41295__$1);

return statearr_41341;
})();
if(cljs.core.truth_(inst_41298)){
var statearr_41342_41367 = state_41327__$1;
(statearr_41342_41367[(1)] = (8));

} else {
var statearr_41343_41368 = state_41327__$1;
(statearr_41343_41368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41328 === (14))){
var inst_41320 = (state_41327[(2)]);
var inst_41321 = cljs.core.async.close_BANG_.call(null,out);
var state_41327__$1 = (function (){var statearr_41345 = state_41327;
(statearr_41345[(13)] = inst_41320);

return statearr_41345;
})();
var statearr_41346_41369 = state_41327__$1;
(statearr_41346_41369[(2)] = inst_41321);

(statearr_41346_41369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41328 === (10))){
var inst_41310 = (state_41327[(2)]);
var state_41327__$1 = state_41327;
var statearr_41347_41370 = state_41327__$1;
(statearr_41347_41370[(2)] = inst_41310);

(statearr_41347_41370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41328 === (8))){
var inst_41295 = (state_41327[(10)]);
var inst_41287 = (state_41327[(7)]);
var inst_41291 = (state_41327[(9)]);
var inst_41300 = inst_41287.push(inst_41291);
var tmp41344 = inst_41287;
var inst_41287__$1 = tmp41344;
var inst_41288 = inst_41295;
var state_41327__$1 = (function (){var statearr_41348 = state_41327;
(statearr_41348[(7)] = inst_41287__$1);

(statearr_41348[(14)] = inst_41300);

(statearr_41348[(8)] = inst_41288);

return statearr_41348;
})();
var statearr_41349_41371 = state_41327__$1;
(statearr_41349_41371[(2)] = null);

(statearr_41349_41371[(1)] = (2));


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
});})(c__11350__auto___41357,out))
;
return ((function (switch__11253__auto__,c__11350__auto___41357,out){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_41353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41353[(0)] = state_machine__11254__auto__);

(statearr_41353[(1)] = (1));

return statearr_41353;
});
var state_machine__11254__auto____1 = (function (state_41327){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_41327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e41354){if((e41354 instanceof Object)){
var ex__11257__auto__ = e41354;
var statearr_41355_41372 = state_41327;
(statearr_41355_41372[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41373 = state_41327;
state_41327 = G__41373;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_41327){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_41327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___41357,out))
})();
var state__11352__auto__ = (function (){var statearr_41356 = f__11351__auto__.call(null);
(statearr_41356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___41357);

return statearr_41356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___41357,out))
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