goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__55966 = arguments.length;
switch (G__55966) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55967 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55967 = (function (f,blockable,meta55968){
this.f = f;
this.blockable = blockable;
this.meta55968 = meta55968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55969,meta55968__$1){
var self__ = this;
var _55969__$1 = this;
return (new cljs.core.async.t_cljs$core$async55967(self__.f,self__.blockable,meta55968__$1));
}));

(cljs.core.async.t_cljs$core$async55967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55969){
var self__ = this;
var _55969__$1 = this;
return self__.meta55968;
}));

(cljs.core.async.t_cljs$core$async55967.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55967.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async55967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async55967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta55968","meta55968",-1448939347,null)], null);
}));

(cljs.core.async.t_cljs$core$async55967.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55967");

(cljs.core.async.t_cljs$core$async55967.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async55967");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55967.
 */
cljs.core.async.__GT_t_cljs$core$async55967 = (function cljs$core$async$__GT_t_cljs$core$async55967(f__$1,blockable__$1,meta55968){
return (new cljs.core.async.t_cljs$core$async55967(f__$1,blockable__$1,meta55968));
});

}

return (new cljs.core.async.t_cljs$core$async55967(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__55974 = arguments.length;
switch (G__55974) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__55976 = arguments.length;
switch (G__55976) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__55978 = arguments.length;
switch (G__55978) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_57423 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57423) : fn1.call(null,val_57423));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57423) : fn1.call(null,val_57423));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__55980 = arguments.length;
switch (G__55980) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___57429 = n;
var x_57430 = (0);
while(true){
if((x_57430 < n__4666__auto___57429)){
(a[x_57430] = x_57430);

var G__57431 = (x_57430 + (1));
x_57430 = G__57431;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55981 = (function (flag,meta55982){
this.flag = flag;
this.meta55982 = meta55982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55983,meta55982__$1){
var self__ = this;
var _55983__$1 = this;
return (new cljs.core.async.t_cljs$core$async55981(self__.flag,meta55982__$1));
}));

(cljs.core.async.t_cljs$core$async55981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55983){
var self__ = this;
var _55983__$1 = this;
return self__.meta55982;
}));

(cljs.core.async.t_cljs$core$async55981.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async55981.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async55981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta55982","meta55982",341837294,null)], null);
}));

(cljs.core.async.t_cljs$core$async55981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55981");

(cljs.core.async.t_cljs$core$async55981.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async55981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55981.
 */
cljs.core.async.__GT_t_cljs$core$async55981 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async55981(flag__$1,meta55982){
return (new cljs.core.async.t_cljs$core$async55981(flag__$1,meta55982));
});

}

return (new cljs.core.async.t_cljs$core$async55981(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55984 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55984 = (function (flag,cb,meta55985){
this.flag = flag;
this.cb = cb;
this.meta55985 = meta55985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55986,meta55985__$1){
var self__ = this;
var _55986__$1 = this;
return (new cljs.core.async.t_cljs$core$async55984(self__.flag,self__.cb,meta55985__$1));
}));

(cljs.core.async.t_cljs$core$async55984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55986){
var self__ = this;
var _55986__$1 = this;
return self__.meta55985;
}));

(cljs.core.async.t_cljs$core$async55984.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async55984.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async55984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta55985","meta55985",828549658,null)], null);
}));

(cljs.core.async.t_cljs$core$async55984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55984");

(cljs.core.async.t_cljs$core$async55984.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async55984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55984.
 */
cljs.core.async.__GT_t_cljs$core$async55984 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async55984(flag__$1,cb__$1,meta55985){
return (new cljs.core.async.t_cljs$core$async55984(flag__$1,cb__$1,meta55985));
});

}

return (new cljs.core.async.t_cljs$core$async55984(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__55987_SHARP_){
var G__55989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55987_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__55989) : fret.call(null,G__55989));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__55988_SHARP_){
var G__55990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55988_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__55990) : fret.call(null,G__55990));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__57444 = (i + (1));
i = G__57444;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4795__auto__ = [];
var len__4789__auto___57445 = arguments.length;
var i__4790__auto___57446 = (0);
while(true){
if((i__4790__auto___57446 < len__4789__auto___57445)){
args__4795__auto__.push((arguments[i__4790__auto___57446]));

var G__57447 = (i__4790__auto___57446 + (1));
i__4790__auto___57446 = G__57447;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__55993){
var map__55994 = p__55993;
var map__55994__$1 = (((((!((map__55994 == null))))?(((((map__55994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55994):map__55994);
var opts = map__55994__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq55991){
var G__55992 = cljs.core.first(seq55991);
var seq55991__$1 = cljs.core.next(seq55991);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55992,seq55991__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__55997 = arguments.length;
switch (G__55997) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__55908__auto___57450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56021){
var state_val_56022 = (state_56021[(1)]);
if((state_val_56022 === (7))){
var inst_56017 = (state_56021[(2)]);
var state_56021__$1 = state_56021;
var statearr_56023_57451 = state_56021__$1;
(statearr_56023_57451[(2)] = inst_56017);

(statearr_56023_57451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56022 === (1))){
var state_56021__$1 = state_56021;
var statearr_56024_57453 = state_56021__$1;
(statearr_56024_57453[(2)] = null);

(statearr_56024_57453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56022 === (4))){
var inst_56000 = (state_56021[(7)]);
var inst_56000__$1 = (state_56021[(2)]);
var inst_56001 = (inst_56000__$1 == null);
var state_56021__$1 = (function (){var statearr_56025 = state_56021;
(statearr_56025[(7)] = inst_56000__$1);

return statearr_56025;
})();
if(cljs.core.truth_(inst_56001)){
var statearr_56026_57455 = state_56021__$1;
(statearr_56026_57455[(1)] = (5));

} else {
var statearr_56027_57456 = state_56021__$1;
(statearr_56027_57456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56022 === (13))){
var state_56021__$1 = state_56021;
var statearr_56028_57457 = state_56021__$1;
(statearr_56028_57457[(2)] = null);

(statearr_56028_57457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56022 === (6))){
var inst_56000 = (state_56021[(7)]);
var state_56021__$1 = state_56021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56021__$1,(11),to,inst_56000);
} else {
if((state_val_56022 === (3))){
var inst_56019 = (state_56021[(2)]);
var state_56021__$1 = state_56021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56021__$1,inst_56019);
} else {
if((state_val_56022 === (12))){
var state_56021__$1 = state_56021;
var statearr_56029_57458 = state_56021__$1;
(statearr_56029_57458[(2)] = null);

(statearr_56029_57458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56022 === (2))){
var state_56021__$1 = state_56021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56021__$1,(4),from);
} else {
if((state_val_56022 === (11))){
var inst_56010 = (state_56021[(2)]);
var state_56021__$1 = state_56021;
if(cljs.core.truth_(inst_56010)){
var statearr_56030_57461 = state_56021__$1;
(statearr_56030_57461[(1)] = (12));

} else {
var statearr_56031_57462 = state_56021__$1;
(statearr_56031_57462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56022 === (9))){
var state_56021__$1 = state_56021;
var statearr_56032_57463 = state_56021__$1;
(statearr_56032_57463[(2)] = null);

(statearr_56032_57463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56022 === (5))){
var state_56021__$1 = state_56021;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56033_57464 = state_56021__$1;
(statearr_56033_57464[(1)] = (8));

} else {
var statearr_56034_57465 = state_56021__$1;
(statearr_56034_57465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56022 === (14))){
var inst_56015 = (state_56021[(2)]);
var state_56021__$1 = state_56021;
var statearr_56035_57466 = state_56021__$1;
(statearr_56035_57466[(2)] = inst_56015);

(statearr_56035_57466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56022 === (10))){
var inst_56007 = (state_56021[(2)]);
var state_56021__$1 = state_56021;
var statearr_56036_57467 = state_56021__$1;
(statearr_56036_57467[(2)] = inst_56007);

(statearr_56036_57467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56022 === (8))){
var inst_56004 = cljs.core.async.close_BANG_(to);
var state_56021__$1 = state_56021;
var statearr_56037_57469 = state_56021__$1;
(statearr_56037_57469[(2)] = inst_56004);

(statearr_56037_57469[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__55808__auto__ = null;
var cljs$core$async$state_machine__55808__auto____0 = (function (){
var statearr_56038 = [null,null,null,null,null,null,null,null];
(statearr_56038[(0)] = cljs$core$async$state_machine__55808__auto__);

(statearr_56038[(1)] = (1));

return statearr_56038;
});
var cljs$core$async$state_machine__55808__auto____1 = (function (state_56021){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56021);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56039){if((e56039 instanceof Object)){
var ex__55811__auto__ = e56039;
var statearr_56040_57472 = state_56021;
(statearr_56040_57472[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56039;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57477 = state_56021;
state_56021 = G__57477;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$state_machine__55808__auto__ = function(state_56021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55808__auto____1.call(this,state_56021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55808__auto____0;
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55808__auto____1;
return cljs$core$async$state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_56041 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56041[(6)] = c__55908__auto___57450);

return statearr_56041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__56042){
var vec__56043 = p__56042;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56043,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56043,(1),null);
var job = vec__56043;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__55908__auto___57485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56050){
var state_val_56051 = (state_56050[(1)]);
if((state_val_56051 === (1))){
var state_56050__$1 = state_56050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56050__$1,(2),res,v);
} else {
if((state_val_56051 === (2))){
var inst_56047 = (state_56050[(2)]);
var inst_56048 = cljs.core.async.close_BANG_(res);
var state_56050__$1 = (function (){var statearr_56052 = state_56050;
(statearr_56052[(7)] = inst_56047);

return statearr_56052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56050__$1,inst_56048);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0 = (function (){
var statearr_56053 = [null,null,null,null,null,null,null,null];
(statearr_56053[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__);

(statearr_56053[(1)] = (1));

return statearr_56053;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1 = (function (state_56050){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56050);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56054){if((e56054 instanceof Object)){
var ex__55811__auto__ = e56054;
var statearr_56055_57492 = state_56050;
(statearr_56055_57492[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57493 = state_56050;
state_56050 = G__57493;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__ = function(state_56050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1.call(this,state_56050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_56056 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56056[(6)] = c__55908__auto___57485);

return statearr_56056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__56057){
var vec__56058 = p__56057;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56058,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56058,(1),null);
var job = vec__56058;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___57497 = n;
var __57499 = (0);
while(true){
if((__57499 < n__4666__auto___57497)){
var G__56061_57501 = type;
var G__56061_57502__$1 = (((G__56061_57501 instanceof cljs.core.Keyword))?G__56061_57501.fqn:null);
switch (G__56061_57502__$1) {
case "compute":
var c__55908__auto___57504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57499,c__55908__auto___57504,G__56061_57501,G__56061_57502__$1,n__4666__auto___57497,jobs,results,process,async){
return (function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = ((function (__57499,c__55908__auto___57504,G__56061_57501,G__56061_57502__$1,n__4666__auto___57497,jobs,results,process,async){
return (function (state_56074){
var state_val_56075 = (state_56074[(1)]);
if((state_val_56075 === (1))){
var state_56074__$1 = state_56074;
var statearr_56076_57507 = state_56074__$1;
(statearr_56076_57507[(2)] = null);

(statearr_56076_57507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56075 === (2))){
var state_56074__$1 = state_56074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56074__$1,(4),jobs);
} else {
if((state_val_56075 === (3))){
var inst_56072 = (state_56074[(2)]);
var state_56074__$1 = state_56074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56074__$1,inst_56072);
} else {
if((state_val_56075 === (4))){
var inst_56064 = (state_56074[(2)]);
var inst_56065 = process(inst_56064);
var state_56074__$1 = state_56074;
if(cljs.core.truth_(inst_56065)){
var statearr_56077_57509 = state_56074__$1;
(statearr_56077_57509[(1)] = (5));

} else {
var statearr_56078_57510 = state_56074__$1;
(statearr_56078_57510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56075 === (5))){
var state_56074__$1 = state_56074;
var statearr_56079_57513 = state_56074__$1;
(statearr_56079_57513[(2)] = null);

(statearr_56079_57513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56075 === (6))){
var state_56074__$1 = state_56074;
var statearr_56080_57516 = state_56074__$1;
(statearr_56080_57516[(2)] = null);

(statearr_56080_57516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56075 === (7))){
var inst_56070 = (state_56074[(2)]);
var state_56074__$1 = state_56074;
var statearr_56081_57518 = state_56074__$1;
(statearr_56081_57518[(2)] = inst_56070);

(statearr_56081_57518[(1)] = (3));


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
});})(__57499,c__55908__auto___57504,G__56061_57501,G__56061_57502__$1,n__4666__auto___57497,jobs,results,process,async))
;
return ((function (__57499,switch__55807__auto__,c__55908__auto___57504,G__56061_57501,G__56061_57502__$1,n__4666__auto___57497,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0 = (function (){
var statearr_56082 = [null,null,null,null,null,null,null];
(statearr_56082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__);

(statearr_56082[(1)] = (1));

return statearr_56082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1 = (function (state_56074){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56074);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56083){if((e56083 instanceof Object)){
var ex__55811__auto__ = e56083;
var statearr_56084_57524 = state_56074;
(statearr_56084_57524[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57525 = state_56074;
state_56074 = G__57525;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__ = function(state_56074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1.call(this,state_56074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__;
})()
;})(__57499,switch__55807__auto__,c__55908__auto___57504,G__56061_57501,G__56061_57502__$1,n__4666__auto___57497,jobs,results,process,async))
})();
var state__55910__auto__ = (function (){var statearr_56085 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56085[(6)] = c__55908__auto___57504);

return statearr_56085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
});})(__57499,c__55908__auto___57504,G__56061_57501,G__56061_57502__$1,n__4666__auto___57497,jobs,results,process,async))
);


break;
case "async":
var c__55908__auto___57528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57499,c__55908__auto___57528,G__56061_57501,G__56061_57502__$1,n__4666__auto___57497,jobs,results,process,async){
return (function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = ((function (__57499,c__55908__auto___57528,G__56061_57501,G__56061_57502__$1,n__4666__auto___57497,jobs,results,process,async){
return (function (state_56098){
var state_val_56099 = (state_56098[(1)]);
if((state_val_56099 === (1))){
var state_56098__$1 = state_56098;
var statearr_56100_57532 = state_56098__$1;
(statearr_56100_57532[(2)] = null);

(statearr_56100_57532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56099 === (2))){
var state_56098__$1 = state_56098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56098__$1,(4),jobs);
} else {
if((state_val_56099 === (3))){
var inst_56096 = (state_56098[(2)]);
var state_56098__$1 = state_56098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56098__$1,inst_56096);
} else {
if((state_val_56099 === (4))){
var inst_56088 = (state_56098[(2)]);
var inst_56089 = async(inst_56088);
var state_56098__$1 = state_56098;
if(cljs.core.truth_(inst_56089)){
var statearr_56101_57533 = state_56098__$1;
(statearr_56101_57533[(1)] = (5));

} else {
var statearr_56102_57536 = state_56098__$1;
(statearr_56102_57536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56099 === (5))){
var state_56098__$1 = state_56098;
var statearr_56103_57537 = state_56098__$1;
(statearr_56103_57537[(2)] = null);

(statearr_56103_57537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56099 === (6))){
var state_56098__$1 = state_56098;
var statearr_56104_57540 = state_56098__$1;
(statearr_56104_57540[(2)] = null);

(statearr_56104_57540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56099 === (7))){
var inst_56094 = (state_56098[(2)]);
var state_56098__$1 = state_56098;
var statearr_56105_57541 = state_56098__$1;
(statearr_56105_57541[(2)] = inst_56094);

(statearr_56105_57541[(1)] = (3));


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
});})(__57499,c__55908__auto___57528,G__56061_57501,G__56061_57502__$1,n__4666__auto___57497,jobs,results,process,async))
;
return ((function (__57499,switch__55807__auto__,c__55908__auto___57528,G__56061_57501,G__56061_57502__$1,n__4666__auto___57497,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0 = (function (){
var statearr_56106 = [null,null,null,null,null,null,null];
(statearr_56106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__);

(statearr_56106[(1)] = (1));

return statearr_56106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1 = (function (state_56098){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56098);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56107){if((e56107 instanceof Object)){
var ex__55811__auto__ = e56107;
var statearr_56108_57546 = state_56098;
(statearr_56108_57546[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57547 = state_56098;
state_56098 = G__57547;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__ = function(state_56098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1.call(this,state_56098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__;
})()
;})(__57499,switch__55807__auto__,c__55908__auto___57528,G__56061_57501,G__56061_57502__$1,n__4666__auto___57497,jobs,results,process,async))
})();
var state__55910__auto__ = (function (){var statearr_56109 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56109[(6)] = c__55908__auto___57528);

return statearr_56109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
});})(__57499,c__55908__auto___57528,G__56061_57501,G__56061_57502__$1,n__4666__auto___57497,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56061_57502__$1)].join('')));

}

var G__57550 = (__57499 + (1));
__57499 = G__57550;
continue;
} else {
}
break;
}

var c__55908__auto___57551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56131){
var state_val_56132 = (state_56131[(1)]);
if((state_val_56132 === (7))){
var inst_56127 = (state_56131[(2)]);
var state_56131__$1 = state_56131;
var statearr_56133_57552 = state_56131__$1;
(statearr_56133_57552[(2)] = inst_56127);

(statearr_56133_57552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56132 === (1))){
var state_56131__$1 = state_56131;
var statearr_56134_57555 = state_56131__$1;
(statearr_56134_57555[(2)] = null);

(statearr_56134_57555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56132 === (4))){
var inst_56112 = (state_56131[(7)]);
var inst_56112__$1 = (state_56131[(2)]);
var inst_56113 = (inst_56112__$1 == null);
var state_56131__$1 = (function (){var statearr_56135 = state_56131;
(statearr_56135[(7)] = inst_56112__$1);

return statearr_56135;
})();
if(cljs.core.truth_(inst_56113)){
var statearr_56136_57556 = state_56131__$1;
(statearr_56136_57556[(1)] = (5));

} else {
var statearr_56137_57557 = state_56131__$1;
(statearr_56137_57557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56132 === (6))){
var inst_56117 = (state_56131[(8)]);
var inst_56112 = (state_56131[(7)]);
var inst_56117__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_56118 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56119 = [inst_56112,inst_56117__$1];
var inst_56120 = (new cljs.core.PersistentVector(null,2,(5),inst_56118,inst_56119,null));
var state_56131__$1 = (function (){var statearr_56138 = state_56131;
(statearr_56138[(8)] = inst_56117__$1);

return statearr_56138;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56131__$1,(8),jobs,inst_56120);
} else {
if((state_val_56132 === (3))){
var inst_56129 = (state_56131[(2)]);
var state_56131__$1 = state_56131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56131__$1,inst_56129);
} else {
if((state_val_56132 === (2))){
var state_56131__$1 = state_56131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56131__$1,(4),from);
} else {
if((state_val_56132 === (9))){
var inst_56124 = (state_56131[(2)]);
var state_56131__$1 = (function (){var statearr_56139 = state_56131;
(statearr_56139[(9)] = inst_56124);

return statearr_56139;
})();
var statearr_56140_57562 = state_56131__$1;
(statearr_56140_57562[(2)] = null);

(statearr_56140_57562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56132 === (5))){
var inst_56115 = cljs.core.async.close_BANG_(jobs);
var state_56131__$1 = state_56131;
var statearr_56141_57564 = state_56131__$1;
(statearr_56141_57564[(2)] = inst_56115);

(statearr_56141_57564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56132 === (8))){
var inst_56117 = (state_56131[(8)]);
var inst_56122 = (state_56131[(2)]);
var state_56131__$1 = (function (){var statearr_56142 = state_56131;
(statearr_56142[(10)] = inst_56122);

return statearr_56142;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56131__$1,(9),results,inst_56117);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0 = (function (){
var statearr_56143 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__);

(statearr_56143[(1)] = (1));

return statearr_56143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1 = (function (state_56131){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56131);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56144){if((e56144 instanceof Object)){
var ex__55811__auto__ = e56144;
var statearr_56145_57568 = state_56131;
(statearr_56145_57568[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57569 = state_56131;
state_56131 = G__57569;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__ = function(state_56131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1.call(this,state_56131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_56146 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56146[(6)] = c__55908__auto___57551);

return statearr_56146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


var c__55908__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56184){
var state_val_56185 = (state_56184[(1)]);
if((state_val_56185 === (7))){
var inst_56180 = (state_56184[(2)]);
var state_56184__$1 = state_56184;
var statearr_56186_57571 = state_56184__$1;
(statearr_56186_57571[(2)] = inst_56180);

(statearr_56186_57571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (20))){
var state_56184__$1 = state_56184;
var statearr_56187_57572 = state_56184__$1;
(statearr_56187_57572[(2)] = null);

(statearr_56187_57572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (1))){
var state_56184__$1 = state_56184;
var statearr_56188_57573 = state_56184__$1;
(statearr_56188_57573[(2)] = null);

(statearr_56188_57573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (4))){
var inst_56149 = (state_56184[(7)]);
var inst_56149__$1 = (state_56184[(2)]);
var inst_56150 = (inst_56149__$1 == null);
var state_56184__$1 = (function (){var statearr_56189 = state_56184;
(statearr_56189[(7)] = inst_56149__$1);

return statearr_56189;
})();
if(cljs.core.truth_(inst_56150)){
var statearr_56190_57575 = state_56184__$1;
(statearr_56190_57575[(1)] = (5));

} else {
var statearr_56191_57576 = state_56184__$1;
(statearr_56191_57576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (15))){
var inst_56162 = (state_56184[(8)]);
var state_56184__$1 = state_56184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56184__$1,(18),to,inst_56162);
} else {
if((state_val_56185 === (21))){
var inst_56175 = (state_56184[(2)]);
var state_56184__$1 = state_56184;
var statearr_56192_57577 = state_56184__$1;
(statearr_56192_57577[(2)] = inst_56175);

(statearr_56192_57577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (13))){
var inst_56177 = (state_56184[(2)]);
var state_56184__$1 = (function (){var statearr_56193 = state_56184;
(statearr_56193[(9)] = inst_56177);

return statearr_56193;
})();
var statearr_56194_57578 = state_56184__$1;
(statearr_56194_57578[(2)] = null);

(statearr_56194_57578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (6))){
var inst_56149 = (state_56184[(7)]);
var state_56184__$1 = state_56184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56184__$1,(11),inst_56149);
} else {
if((state_val_56185 === (17))){
var inst_56170 = (state_56184[(2)]);
var state_56184__$1 = state_56184;
if(cljs.core.truth_(inst_56170)){
var statearr_56195_57579 = state_56184__$1;
(statearr_56195_57579[(1)] = (19));

} else {
var statearr_56196_57581 = state_56184__$1;
(statearr_56196_57581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (3))){
var inst_56182 = (state_56184[(2)]);
var state_56184__$1 = state_56184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56184__$1,inst_56182);
} else {
if((state_val_56185 === (12))){
var inst_56159 = (state_56184[(10)]);
var state_56184__$1 = state_56184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56184__$1,(14),inst_56159);
} else {
if((state_val_56185 === (2))){
var state_56184__$1 = state_56184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56184__$1,(4),results);
} else {
if((state_val_56185 === (19))){
var state_56184__$1 = state_56184;
var statearr_56197_57582 = state_56184__$1;
(statearr_56197_57582[(2)] = null);

(statearr_56197_57582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (11))){
var inst_56159 = (state_56184[(2)]);
var state_56184__$1 = (function (){var statearr_56198 = state_56184;
(statearr_56198[(10)] = inst_56159);

return statearr_56198;
})();
var statearr_56199_57583 = state_56184__$1;
(statearr_56199_57583[(2)] = null);

(statearr_56199_57583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (9))){
var state_56184__$1 = state_56184;
var statearr_56200_57584 = state_56184__$1;
(statearr_56200_57584[(2)] = null);

(statearr_56200_57584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (5))){
var state_56184__$1 = state_56184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56201_57585 = state_56184__$1;
(statearr_56201_57585[(1)] = (8));

} else {
var statearr_56202_57586 = state_56184__$1;
(statearr_56202_57586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (14))){
var inst_56162 = (state_56184[(8)]);
var inst_56162__$1 = (state_56184[(2)]);
var inst_56163 = (inst_56162__$1 == null);
var inst_56164 = cljs.core.not(inst_56163);
var state_56184__$1 = (function (){var statearr_56203 = state_56184;
(statearr_56203[(8)] = inst_56162__$1);

return statearr_56203;
})();
if(inst_56164){
var statearr_56204_57587 = state_56184__$1;
(statearr_56204_57587[(1)] = (15));

} else {
var statearr_56205_57592 = state_56184__$1;
(statearr_56205_57592[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (16))){
var state_56184__$1 = state_56184;
var statearr_56206_57593 = state_56184__$1;
(statearr_56206_57593[(2)] = false);

(statearr_56206_57593[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (10))){
var inst_56156 = (state_56184[(2)]);
var state_56184__$1 = state_56184;
var statearr_56207_57594 = state_56184__$1;
(statearr_56207_57594[(2)] = inst_56156);

(statearr_56207_57594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (18))){
var inst_56167 = (state_56184[(2)]);
var state_56184__$1 = state_56184;
var statearr_56208_57598 = state_56184__$1;
(statearr_56208_57598[(2)] = inst_56167);

(statearr_56208_57598[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56185 === (8))){
var inst_56153 = cljs.core.async.close_BANG_(to);
var state_56184__$1 = state_56184;
var statearr_56209_57599 = state_56184__$1;
(statearr_56209_57599[(2)] = inst_56153);

(statearr_56209_57599[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0 = (function (){
var statearr_56210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__);

(statearr_56210[(1)] = (1));

return statearr_56210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1 = (function (state_56184){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56184);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56211){if((e56211 instanceof Object)){
var ex__55811__auto__ = e56211;
var statearr_56212_57600 = state_56184;
(statearr_56212_57600[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56211;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57601 = state_56184;
state_56184 = G__57601;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__ = function(state_56184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1.call(this,state_56184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55808__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_56213 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56213[(6)] = c__55908__auto__);

return statearr_56213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));

return c__55908__auto__;
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
var G__56215 = arguments.length;
switch (G__56215) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__56217 = arguments.length;
switch (G__56217) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__56219 = arguments.length;
switch (G__56219) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__55908__auto___57620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56245){
var state_val_56246 = (state_56245[(1)]);
if((state_val_56246 === (7))){
var inst_56241 = (state_56245[(2)]);
var state_56245__$1 = state_56245;
var statearr_56247_57621 = state_56245__$1;
(statearr_56247_57621[(2)] = inst_56241);

(statearr_56247_57621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (1))){
var state_56245__$1 = state_56245;
var statearr_56248_57622 = state_56245__$1;
(statearr_56248_57622[(2)] = null);

(statearr_56248_57622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (4))){
var inst_56222 = (state_56245[(7)]);
var inst_56222__$1 = (state_56245[(2)]);
var inst_56223 = (inst_56222__$1 == null);
var state_56245__$1 = (function (){var statearr_56249 = state_56245;
(statearr_56249[(7)] = inst_56222__$1);

return statearr_56249;
})();
if(cljs.core.truth_(inst_56223)){
var statearr_56250_57626 = state_56245__$1;
(statearr_56250_57626[(1)] = (5));

} else {
var statearr_56251_57627 = state_56245__$1;
(statearr_56251_57627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (13))){
var state_56245__$1 = state_56245;
var statearr_56252_57628 = state_56245__$1;
(statearr_56252_57628[(2)] = null);

(statearr_56252_57628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (6))){
var inst_56222 = (state_56245[(7)]);
var inst_56228 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56222) : p.call(null,inst_56222));
var state_56245__$1 = state_56245;
if(cljs.core.truth_(inst_56228)){
var statearr_56253_57630 = state_56245__$1;
(statearr_56253_57630[(1)] = (9));

} else {
var statearr_56254_57631 = state_56245__$1;
(statearr_56254_57631[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (3))){
var inst_56243 = (state_56245[(2)]);
var state_56245__$1 = state_56245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56245__$1,inst_56243);
} else {
if((state_val_56246 === (12))){
var state_56245__$1 = state_56245;
var statearr_56255_57633 = state_56245__$1;
(statearr_56255_57633[(2)] = null);

(statearr_56255_57633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (2))){
var state_56245__$1 = state_56245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56245__$1,(4),ch);
} else {
if((state_val_56246 === (11))){
var inst_56222 = (state_56245[(7)]);
var inst_56232 = (state_56245[(2)]);
var state_56245__$1 = state_56245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56245__$1,(8),inst_56232,inst_56222);
} else {
if((state_val_56246 === (9))){
var state_56245__$1 = state_56245;
var statearr_56256_57634 = state_56245__$1;
(statearr_56256_57634[(2)] = tc);

(statearr_56256_57634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (5))){
var inst_56225 = cljs.core.async.close_BANG_(tc);
var inst_56226 = cljs.core.async.close_BANG_(fc);
var state_56245__$1 = (function (){var statearr_56257 = state_56245;
(statearr_56257[(8)] = inst_56225);

return statearr_56257;
})();
var statearr_56258_57635 = state_56245__$1;
(statearr_56258_57635[(2)] = inst_56226);

(statearr_56258_57635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (14))){
var inst_56239 = (state_56245[(2)]);
var state_56245__$1 = state_56245;
var statearr_56259_57636 = state_56245__$1;
(statearr_56259_57636[(2)] = inst_56239);

(statearr_56259_57636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (10))){
var state_56245__$1 = state_56245;
var statearr_56260_57637 = state_56245__$1;
(statearr_56260_57637[(2)] = fc);

(statearr_56260_57637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (8))){
var inst_56234 = (state_56245[(2)]);
var state_56245__$1 = state_56245;
if(cljs.core.truth_(inst_56234)){
var statearr_56261_57638 = state_56245__$1;
(statearr_56261_57638[(1)] = (12));

} else {
var statearr_56262_57639 = state_56245__$1;
(statearr_56262_57639[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__55808__auto__ = null;
var cljs$core$async$state_machine__55808__auto____0 = (function (){
var statearr_56263 = [null,null,null,null,null,null,null,null,null];
(statearr_56263[(0)] = cljs$core$async$state_machine__55808__auto__);

(statearr_56263[(1)] = (1));

return statearr_56263;
});
var cljs$core$async$state_machine__55808__auto____1 = (function (state_56245){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56245);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56264){if((e56264 instanceof Object)){
var ex__55811__auto__ = e56264;
var statearr_56265_57652 = state_56245;
(statearr_56265_57652[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57654 = state_56245;
state_56245 = G__57654;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$state_machine__55808__auto__ = function(state_56245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55808__auto____1.call(this,state_56245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55808__auto____0;
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55808__auto____1;
return cljs$core$async$state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_56266 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56266[(6)] = c__55908__auto___57620);

return statearr_56266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__55908__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56287){
var state_val_56288 = (state_56287[(1)]);
if((state_val_56288 === (7))){
var inst_56283 = (state_56287[(2)]);
var state_56287__$1 = state_56287;
var statearr_56289_57659 = state_56287__$1;
(statearr_56289_57659[(2)] = inst_56283);

(statearr_56289_57659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (1))){
var inst_56267 = init;
var state_56287__$1 = (function (){var statearr_56290 = state_56287;
(statearr_56290[(7)] = inst_56267);

return statearr_56290;
})();
var statearr_56291_57663 = state_56287__$1;
(statearr_56291_57663[(2)] = null);

(statearr_56291_57663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (4))){
var inst_56270 = (state_56287[(8)]);
var inst_56270__$1 = (state_56287[(2)]);
var inst_56271 = (inst_56270__$1 == null);
var state_56287__$1 = (function (){var statearr_56292 = state_56287;
(statearr_56292[(8)] = inst_56270__$1);

return statearr_56292;
})();
if(cljs.core.truth_(inst_56271)){
var statearr_56293_57664 = state_56287__$1;
(statearr_56293_57664[(1)] = (5));

} else {
var statearr_56294_57668 = state_56287__$1;
(statearr_56294_57668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (6))){
var inst_56270 = (state_56287[(8)]);
var inst_56267 = (state_56287[(7)]);
var inst_56274 = (state_56287[(9)]);
var inst_56274__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_56267,inst_56270) : f.call(null,inst_56267,inst_56270));
var inst_56275 = cljs.core.reduced_QMARK_(inst_56274__$1);
var state_56287__$1 = (function (){var statearr_56295 = state_56287;
(statearr_56295[(9)] = inst_56274__$1);

return statearr_56295;
})();
if(inst_56275){
var statearr_56296_57672 = state_56287__$1;
(statearr_56296_57672[(1)] = (8));

} else {
var statearr_56297_57673 = state_56287__$1;
(statearr_56297_57673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (3))){
var inst_56285 = (state_56287[(2)]);
var state_56287__$1 = state_56287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56287__$1,inst_56285);
} else {
if((state_val_56288 === (2))){
var state_56287__$1 = state_56287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56287__$1,(4),ch);
} else {
if((state_val_56288 === (9))){
var inst_56274 = (state_56287[(9)]);
var inst_56267 = inst_56274;
var state_56287__$1 = (function (){var statearr_56298 = state_56287;
(statearr_56298[(7)] = inst_56267);

return statearr_56298;
})();
var statearr_56299_57677 = state_56287__$1;
(statearr_56299_57677[(2)] = null);

(statearr_56299_57677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (5))){
var inst_56267 = (state_56287[(7)]);
var state_56287__$1 = state_56287;
var statearr_56300_57678 = state_56287__$1;
(statearr_56300_57678[(2)] = inst_56267);

(statearr_56300_57678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (10))){
var inst_56281 = (state_56287[(2)]);
var state_56287__$1 = state_56287;
var statearr_56301_57683 = state_56287__$1;
(statearr_56301_57683[(2)] = inst_56281);

(statearr_56301_57683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (8))){
var inst_56274 = (state_56287[(9)]);
var inst_56277 = cljs.core.deref(inst_56274);
var state_56287__$1 = state_56287;
var statearr_56302_57687 = state_56287__$1;
(statearr_56302_57687[(2)] = inst_56277);

(statearr_56302_57687[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__55808__auto__ = null;
var cljs$core$async$reduce_$_state_machine__55808__auto____0 = (function (){
var statearr_56303 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56303[(0)] = cljs$core$async$reduce_$_state_machine__55808__auto__);

(statearr_56303[(1)] = (1));

return statearr_56303;
});
var cljs$core$async$reduce_$_state_machine__55808__auto____1 = (function (state_56287){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56287);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56304){if((e56304 instanceof Object)){
var ex__55811__auto__ = e56304;
var statearr_56305_57691 = state_56287;
(statearr_56305_57691[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57698 = state_56287;
state_56287 = G__57698;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__55808__auto__ = function(state_56287){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__55808__auto____1.call(this,state_56287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__55808__auto____0;
cljs$core$async$reduce_$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__55808__auto____1;
return cljs$core$async$reduce_$_state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_56306 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56306[(6)] = c__55908__auto__);

return statearr_56306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));

return c__55908__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__55908__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56312){
var state_val_56313 = (state_56312[(1)]);
if((state_val_56313 === (1))){
var inst_56307 = cljs.core.async.reduce(f__$1,init,ch);
var state_56312__$1 = state_56312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56312__$1,(2),inst_56307);
} else {
if((state_val_56313 === (2))){
var inst_56309 = (state_56312[(2)]);
var inst_56310 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_56309) : f__$1.call(null,inst_56309));
var state_56312__$1 = state_56312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56312__$1,inst_56310);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__55808__auto__ = null;
var cljs$core$async$transduce_$_state_machine__55808__auto____0 = (function (){
var statearr_56314 = [null,null,null,null,null,null,null];
(statearr_56314[(0)] = cljs$core$async$transduce_$_state_machine__55808__auto__);

(statearr_56314[(1)] = (1));

return statearr_56314;
});
var cljs$core$async$transduce_$_state_machine__55808__auto____1 = (function (state_56312){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56312);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56315){if((e56315 instanceof Object)){
var ex__55811__auto__ = e56315;
var statearr_56316_57703 = state_56312;
(statearr_56316_57703[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57704 = state_56312;
state_56312 = G__57704;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__55808__auto__ = function(state_56312){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__55808__auto____1.call(this,state_56312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__55808__auto____0;
cljs$core$async$transduce_$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__55808__auto____1;
return cljs$core$async$transduce_$_state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_56317 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56317[(6)] = c__55908__auto__);

return statearr_56317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));

return c__55908__auto__;
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
var G__56319 = arguments.length;
switch (G__56319) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__55908__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56344){
var state_val_56345 = (state_56344[(1)]);
if((state_val_56345 === (7))){
var inst_56326 = (state_56344[(2)]);
var state_56344__$1 = state_56344;
var statearr_56346_57709 = state_56344__$1;
(statearr_56346_57709[(2)] = inst_56326);

(statearr_56346_57709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56345 === (1))){
var inst_56320 = cljs.core.seq(coll);
var inst_56321 = inst_56320;
var state_56344__$1 = (function (){var statearr_56347 = state_56344;
(statearr_56347[(7)] = inst_56321);

return statearr_56347;
})();
var statearr_56348_57710 = state_56344__$1;
(statearr_56348_57710[(2)] = null);

(statearr_56348_57710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56345 === (4))){
var inst_56321 = (state_56344[(7)]);
var inst_56324 = cljs.core.first(inst_56321);
var state_56344__$1 = state_56344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56344__$1,(7),ch,inst_56324);
} else {
if((state_val_56345 === (13))){
var inst_56338 = (state_56344[(2)]);
var state_56344__$1 = state_56344;
var statearr_56349_57711 = state_56344__$1;
(statearr_56349_57711[(2)] = inst_56338);

(statearr_56349_57711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56345 === (6))){
var inst_56329 = (state_56344[(2)]);
var state_56344__$1 = state_56344;
if(cljs.core.truth_(inst_56329)){
var statearr_56350_57712 = state_56344__$1;
(statearr_56350_57712[(1)] = (8));

} else {
var statearr_56351_57713 = state_56344__$1;
(statearr_56351_57713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56345 === (3))){
var inst_56342 = (state_56344[(2)]);
var state_56344__$1 = state_56344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56344__$1,inst_56342);
} else {
if((state_val_56345 === (12))){
var state_56344__$1 = state_56344;
var statearr_56352_57717 = state_56344__$1;
(statearr_56352_57717[(2)] = null);

(statearr_56352_57717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56345 === (2))){
var inst_56321 = (state_56344[(7)]);
var state_56344__$1 = state_56344;
if(cljs.core.truth_(inst_56321)){
var statearr_56353_57721 = state_56344__$1;
(statearr_56353_57721[(1)] = (4));

} else {
var statearr_56354_57722 = state_56344__$1;
(statearr_56354_57722[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56345 === (11))){
var inst_56335 = cljs.core.async.close_BANG_(ch);
var state_56344__$1 = state_56344;
var statearr_56355_57723 = state_56344__$1;
(statearr_56355_57723[(2)] = inst_56335);

(statearr_56355_57723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56345 === (9))){
var state_56344__$1 = state_56344;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56356_57724 = state_56344__$1;
(statearr_56356_57724[(1)] = (11));

} else {
var statearr_56357_57728 = state_56344__$1;
(statearr_56357_57728[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56345 === (5))){
var inst_56321 = (state_56344[(7)]);
var state_56344__$1 = state_56344;
var statearr_56358_57732 = state_56344__$1;
(statearr_56358_57732[(2)] = inst_56321);

(statearr_56358_57732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56345 === (10))){
var inst_56340 = (state_56344[(2)]);
var state_56344__$1 = state_56344;
var statearr_56359_57733 = state_56344__$1;
(statearr_56359_57733[(2)] = inst_56340);

(statearr_56359_57733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56345 === (8))){
var inst_56321 = (state_56344[(7)]);
var inst_56331 = cljs.core.next(inst_56321);
var inst_56321__$1 = inst_56331;
var state_56344__$1 = (function (){var statearr_56360 = state_56344;
(statearr_56360[(7)] = inst_56321__$1);

return statearr_56360;
})();
var statearr_56361_57734 = state_56344__$1;
(statearr_56361_57734[(2)] = null);

(statearr_56361_57734[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__55808__auto__ = null;
var cljs$core$async$state_machine__55808__auto____0 = (function (){
var statearr_56362 = [null,null,null,null,null,null,null,null];
(statearr_56362[(0)] = cljs$core$async$state_machine__55808__auto__);

(statearr_56362[(1)] = (1));

return statearr_56362;
});
var cljs$core$async$state_machine__55808__auto____1 = (function (state_56344){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56344);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56363){if((e56363 instanceof Object)){
var ex__55811__auto__ = e56363;
var statearr_56364_57736 = state_56344;
(statearr_56364_57736[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57737 = state_56344;
state_56344 = G__57737;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$state_machine__55808__auto__ = function(state_56344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55808__auto____1.call(this,state_56344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55808__auto____0;
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55808__auto____1;
return cljs$core$async$state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_56365 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56365[(6)] = c__55908__auto__);

return statearr_56365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));

return c__55908__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56366 = (function (ch,cs,meta56367){
this.ch = ch;
this.cs = cs;
this.meta56367 = meta56367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56368,meta56367__$1){
var self__ = this;
var _56368__$1 = this;
return (new cljs.core.async.t_cljs$core$async56366(self__.ch,self__.cs,meta56367__$1));
}));

(cljs.core.async.t_cljs$core$async56366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56368){
var self__ = this;
var _56368__$1 = this;
return self__.meta56367;
}));

(cljs.core.async.t_cljs$core$async56366.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56366.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56366.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async56366.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async56366.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async56366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta56367","meta56367",1245877124,null)], null);
}));

(cljs.core.async.t_cljs$core$async56366.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56366");

(cljs.core.async.t_cljs$core$async56366.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56366");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56366.
 */
cljs.core.async.__GT_t_cljs$core$async56366 = (function cljs$core$async$mult_$___GT_t_cljs$core$async56366(ch__$1,cs__$1,meta56367){
return (new cljs.core.async.t_cljs$core$async56366(ch__$1,cs__$1,meta56367));
});

}

return (new cljs.core.async.t_cljs$core$async56366(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__55908__auto___57747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56503){
var state_val_56504 = (state_56503[(1)]);
if((state_val_56504 === (7))){
var inst_56499 = (state_56503[(2)]);
var state_56503__$1 = state_56503;
var statearr_56505_57748 = state_56503__$1;
(statearr_56505_57748[(2)] = inst_56499);

(statearr_56505_57748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (20))){
var inst_56402 = (state_56503[(7)]);
var inst_56414 = cljs.core.first(inst_56402);
var inst_56415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56414,(0),null);
var inst_56416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56414,(1),null);
var state_56503__$1 = (function (){var statearr_56506 = state_56503;
(statearr_56506[(8)] = inst_56415);

return statearr_56506;
})();
if(cljs.core.truth_(inst_56416)){
var statearr_56507_57751 = state_56503__$1;
(statearr_56507_57751[(1)] = (22));

} else {
var statearr_56508_57752 = state_56503__$1;
(statearr_56508_57752[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (27))){
var inst_56444 = (state_56503[(9)]);
var inst_56371 = (state_56503[(10)]);
var inst_56451 = (state_56503[(11)]);
var inst_56446 = (state_56503[(12)]);
var inst_56451__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56444,inst_56446);
var inst_56452 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56451__$1,inst_56371,done);
var state_56503__$1 = (function (){var statearr_56509 = state_56503;
(statearr_56509[(11)] = inst_56451__$1);

return statearr_56509;
})();
if(cljs.core.truth_(inst_56452)){
var statearr_56510_57753 = state_56503__$1;
(statearr_56510_57753[(1)] = (30));

} else {
var statearr_56511_57754 = state_56503__$1;
(statearr_56511_57754[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (1))){
var state_56503__$1 = state_56503;
var statearr_56512_57755 = state_56503__$1;
(statearr_56512_57755[(2)] = null);

(statearr_56512_57755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (24))){
var inst_56402 = (state_56503[(7)]);
var inst_56421 = (state_56503[(2)]);
var inst_56422 = cljs.core.next(inst_56402);
var inst_56380 = inst_56422;
var inst_56381 = null;
var inst_56382 = (0);
var inst_56383 = (0);
var state_56503__$1 = (function (){var statearr_56513 = state_56503;
(statearr_56513[(13)] = inst_56382);

(statearr_56513[(14)] = inst_56380);

(statearr_56513[(15)] = inst_56383);

(statearr_56513[(16)] = inst_56421);

(statearr_56513[(17)] = inst_56381);

return statearr_56513;
})();
var statearr_56514_57756 = state_56503__$1;
(statearr_56514_57756[(2)] = null);

(statearr_56514_57756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (39))){
var state_56503__$1 = state_56503;
var statearr_56518_57757 = state_56503__$1;
(statearr_56518_57757[(2)] = null);

(statearr_56518_57757[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (4))){
var inst_56371 = (state_56503[(10)]);
var inst_56371__$1 = (state_56503[(2)]);
var inst_56372 = (inst_56371__$1 == null);
var state_56503__$1 = (function (){var statearr_56519 = state_56503;
(statearr_56519[(10)] = inst_56371__$1);

return statearr_56519;
})();
if(cljs.core.truth_(inst_56372)){
var statearr_56520_57762 = state_56503__$1;
(statearr_56520_57762[(1)] = (5));

} else {
var statearr_56521_57763 = state_56503__$1;
(statearr_56521_57763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (15))){
var inst_56382 = (state_56503[(13)]);
var inst_56380 = (state_56503[(14)]);
var inst_56383 = (state_56503[(15)]);
var inst_56381 = (state_56503[(17)]);
var inst_56398 = (state_56503[(2)]);
var inst_56399 = (inst_56383 + (1));
var tmp56515 = inst_56382;
var tmp56516 = inst_56380;
var tmp56517 = inst_56381;
var inst_56380__$1 = tmp56516;
var inst_56381__$1 = tmp56517;
var inst_56382__$1 = tmp56515;
var inst_56383__$1 = inst_56399;
var state_56503__$1 = (function (){var statearr_56522 = state_56503;
(statearr_56522[(13)] = inst_56382__$1);

(statearr_56522[(14)] = inst_56380__$1);

(statearr_56522[(18)] = inst_56398);

(statearr_56522[(15)] = inst_56383__$1);

(statearr_56522[(17)] = inst_56381__$1);

return statearr_56522;
})();
var statearr_56523_57768 = state_56503__$1;
(statearr_56523_57768[(2)] = null);

(statearr_56523_57768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (21))){
var inst_56425 = (state_56503[(2)]);
var state_56503__$1 = state_56503;
var statearr_56527_57769 = state_56503__$1;
(statearr_56527_57769[(2)] = inst_56425);

(statearr_56527_57769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (31))){
var inst_56451 = (state_56503[(11)]);
var inst_56455 = done(null);
var inst_56456 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56451);
var state_56503__$1 = (function (){var statearr_56528 = state_56503;
(statearr_56528[(19)] = inst_56455);

return statearr_56528;
})();
var statearr_56529_57777 = state_56503__$1;
(statearr_56529_57777[(2)] = inst_56456);

(statearr_56529_57777[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (32))){
var inst_56444 = (state_56503[(9)]);
var inst_56443 = (state_56503[(20)]);
var inst_56445 = (state_56503[(21)]);
var inst_56446 = (state_56503[(12)]);
var inst_56458 = (state_56503[(2)]);
var inst_56459 = (inst_56446 + (1));
var tmp56524 = inst_56444;
var tmp56525 = inst_56443;
var tmp56526 = inst_56445;
var inst_56443__$1 = tmp56525;
var inst_56444__$1 = tmp56524;
var inst_56445__$1 = tmp56526;
var inst_56446__$1 = inst_56459;
var state_56503__$1 = (function (){var statearr_56530 = state_56503;
(statearr_56530[(9)] = inst_56444__$1);

(statearr_56530[(20)] = inst_56443__$1);

(statearr_56530[(21)] = inst_56445__$1);

(statearr_56530[(22)] = inst_56458);

(statearr_56530[(12)] = inst_56446__$1);

return statearr_56530;
})();
var statearr_56531_57784 = state_56503__$1;
(statearr_56531_57784[(2)] = null);

(statearr_56531_57784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (40))){
var inst_56471 = (state_56503[(23)]);
var inst_56475 = done(null);
var inst_56476 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56471);
var state_56503__$1 = (function (){var statearr_56532 = state_56503;
(statearr_56532[(24)] = inst_56475);

return statearr_56532;
})();
var statearr_56533_57785 = state_56503__$1;
(statearr_56533_57785[(2)] = inst_56476);

(statearr_56533_57785[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (33))){
var inst_56462 = (state_56503[(25)]);
var inst_56464 = cljs.core.chunked_seq_QMARK_(inst_56462);
var state_56503__$1 = state_56503;
if(inst_56464){
var statearr_56534_57786 = state_56503__$1;
(statearr_56534_57786[(1)] = (36));

} else {
var statearr_56535_57787 = state_56503__$1;
(statearr_56535_57787[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (13))){
var inst_56392 = (state_56503[(26)]);
var inst_56395 = cljs.core.async.close_BANG_(inst_56392);
var state_56503__$1 = state_56503;
var statearr_56536_57788 = state_56503__$1;
(statearr_56536_57788[(2)] = inst_56395);

(statearr_56536_57788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (22))){
var inst_56415 = (state_56503[(8)]);
var inst_56418 = cljs.core.async.close_BANG_(inst_56415);
var state_56503__$1 = state_56503;
var statearr_56537_57789 = state_56503__$1;
(statearr_56537_57789[(2)] = inst_56418);

(statearr_56537_57789[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (36))){
var inst_56462 = (state_56503[(25)]);
var inst_56466 = cljs.core.chunk_first(inst_56462);
var inst_56467 = cljs.core.chunk_rest(inst_56462);
var inst_56468 = cljs.core.count(inst_56466);
var inst_56443 = inst_56467;
var inst_56444 = inst_56466;
var inst_56445 = inst_56468;
var inst_56446 = (0);
var state_56503__$1 = (function (){var statearr_56538 = state_56503;
(statearr_56538[(9)] = inst_56444);

(statearr_56538[(20)] = inst_56443);

(statearr_56538[(21)] = inst_56445);

(statearr_56538[(12)] = inst_56446);

return statearr_56538;
})();
var statearr_56539_57796 = state_56503__$1;
(statearr_56539_57796[(2)] = null);

(statearr_56539_57796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (41))){
var inst_56462 = (state_56503[(25)]);
var inst_56478 = (state_56503[(2)]);
var inst_56479 = cljs.core.next(inst_56462);
var inst_56443 = inst_56479;
var inst_56444 = null;
var inst_56445 = (0);
var inst_56446 = (0);
var state_56503__$1 = (function (){var statearr_56540 = state_56503;
(statearr_56540[(9)] = inst_56444);

(statearr_56540[(27)] = inst_56478);

(statearr_56540[(20)] = inst_56443);

(statearr_56540[(21)] = inst_56445);

(statearr_56540[(12)] = inst_56446);

return statearr_56540;
})();
var statearr_56541_57797 = state_56503__$1;
(statearr_56541_57797[(2)] = null);

(statearr_56541_57797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (43))){
var state_56503__$1 = state_56503;
var statearr_56542_57798 = state_56503__$1;
(statearr_56542_57798[(2)] = null);

(statearr_56542_57798[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (29))){
var inst_56487 = (state_56503[(2)]);
var state_56503__$1 = state_56503;
var statearr_56543_57799 = state_56503__$1;
(statearr_56543_57799[(2)] = inst_56487);

(statearr_56543_57799[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (44))){
var inst_56496 = (state_56503[(2)]);
var state_56503__$1 = (function (){var statearr_56544 = state_56503;
(statearr_56544[(28)] = inst_56496);

return statearr_56544;
})();
var statearr_56545_57800 = state_56503__$1;
(statearr_56545_57800[(2)] = null);

(statearr_56545_57800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (6))){
var inst_56435 = (state_56503[(29)]);
var inst_56434 = cljs.core.deref(cs);
var inst_56435__$1 = cljs.core.keys(inst_56434);
var inst_56436 = cljs.core.count(inst_56435__$1);
var inst_56437 = cljs.core.reset_BANG_(dctr,inst_56436);
var inst_56442 = cljs.core.seq(inst_56435__$1);
var inst_56443 = inst_56442;
var inst_56444 = null;
var inst_56445 = (0);
var inst_56446 = (0);
var state_56503__$1 = (function (){var statearr_56546 = state_56503;
(statearr_56546[(9)] = inst_56444);

(statearr_56546[(30)] = inst_56437);

(statearr_56546[(29)] = inst_56435__$1);

(statearr_56546[(20)] = inst_56443);

(statearr_56546[(21)] = inst_56445);

(statearr_56546[(12)] = inst_56446);

return statearr_56546;
})();
var statearr_56547_57807 = state_56503__$1;
(statearr_56547_57807[(2)] = null);

(statearr_56547_57807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (28))){
var inst_56462 = (state_56503[(25)]);
var inst_56443 = (state_56503[(20)]);
var inst_56462__$1 = cljs.core.seq(inst_56443);
var state_56503__$1 = (function (){var statearr_56548 = state_56503;
(statearr_56548[(25)] = inst_56462__$1);

return statearr_56548;
})();
if(inst_56462__$1){
var statearr_56549_57808 = state_56503__$1;
(statearr_56549_57808[(1)] = (33));

} else {
var statearr_56550_57809 = state_56503__$1;
(statearr_56550_57809[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (25))){
var inst_56445 = (state_56503[(21)]);
var inst_56446 = (state_56503[(12)]);
var inst_56448 = (inst_56446 < inst_56445);
var inst_56449 = inst_56448;
var state_56503__$1 = state_56503;
if(cljs.core.truth_(inst_56449)){
var statearr_56551_57810 = state_56503__$1;
(statearr_56551_57810[(1)] = (27));

} else {
var statearr_56552_57811 = state_56503__$1;
(statearr_56552_57811[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (34))){
var state_56503__$1 = state_56503;
var statearr_56553_57812 = state_56503__$1;
(statearr_56553_57812[(2)] = null);

(statearr_56553_57812[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (17))){
var state_56503__$1 = state_56503;
var statearr_56554_57813 = state_56503__$1;
(statearr_56554_57813[(2)] = null);

(statearr_56554_57813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (3))){
var inst_56501 = (state_56503[(2)]);
var state_56503__$1 = state_56503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56503__$1,inst_56501);
} else {
if((state_val_56504 === (12))){
var inst_56430 = (state_56503[(2)]);
var state_56503__$1 = state_56503;
var statearr_56555_57814 = state_56503__$1;
(statearr_56555_57814[(2)] = inst_56430);

(statearr_56555_57814[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (2))){
var state_56503__$1 = state_56503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56503__$1,(4),ch);
} else {
if((state_val_56504 === (23))){
var state_56503__$1 = state_56503;
var statearr_56556_57815 = state_56503__$1;
(statearr_56556_57815[(2)] = null);

(statearr_56556_57815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (35))){
var inst_56485 = (state_56503[(2)]);
var state_56503__$1 = state_56503;
var statearr_56557_57816 = state_56503__$1;
(statearr_56557_57816[(2)] = inst_56485);

(statearr_56557_57816[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (19))){
var inst_56402 = (state_56503[(7)]);
var inst_56406 = cljs.core.chunk_first(inst_56402);
var inst_56407 = cljs.core.chunk_rest(inst_56402);
var inst_56408 = cljs.core.count(inst_56406);
var inst_56380 = inst_56407;
var inst_56381 = inst_56406;
var inst_56382 = inst_56408;
var inst_56383 = (0);
var state_56503__$1 = (function (){var statearr_56558 = state_56503;
(statearr_56558[(13)] = inst_56382);

(statearr_56558[(14)] = inst_56380);

(statearr_56558[(15)] = inst_56383);

(statearr_56558[(17)] = inst_56381);

return statearr_56558;
})();
var statearr_56559_57823 = state_56503__$1;
(statearr_56559_57823[(2)] = null);

(statearr_56559_57823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (11))){
var inst_56402 = (state_56503[(7)]);
var inst_56380 = (state_56503[(14)]);
var inst_56402__$1 = cljs.core.seq(inst_56380);
var state_56503__$1 = (function (){var statearr_56560 = state_56503;
(statearr_56560[(7)] = inst_56402__$1);

return statearr_56560;
})();
if(inst_56402__$1){
var statearr_56561_57824 = state_56503__$1;
(statearr_56561_57824[(1)] = (16));

} else {
var statearr_56562_57825 = state_56503__$1;
(statearr_56562_57825[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (9))){
var inst_56432 = (state_56503[(2)]);
var state_56503__$1 = state_56503;
var statearr_56563_57826 = state_56503__$1;
(statearr_56563_57826[(2)] = inst_56432);

(statearr_56563_57826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (5))){
var inst_56378 = cljs.core.deref(cs);
var inst_56379 = cljs.core.seq(inst_56378);
var inst_56380 = inst_56379;
var inst_56381 = null;
var inst_56382 = (0);
var inst_56383 = (0);
var state_56503__$1 = (function (){var statearr_56564 = state_56503;
(statearr_56564[(13)] = inst_56382);

(statearr_56564[(14)] = inst_56380);

(statearr_56564[(15)] = inst_56383);

(statearr_56564[(17)] = inst_56381);

return statearr_56564;
})();
var statearr_56565_57827 = state_56503__$1;
(statearr_56565_57827[(2)] = null);

(statearr_56565_57827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (14))){
var state_56503__$1 = state_56503;
var statearr_56566_57828 = state_56503__$1;
(statearr_56566_57828[(2)] = null);

(statearr_56566_57828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (45))){
var inst_56493 = (state_56503[(2)]);
var state_56503__$1 = state_56503;
var statearr_56567_57829 = state_56503__$1;
(statearr_56567_57829[(2)] = inst_56493);

(statearr_56567_57829[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (26))){
var inst_56435 = (state_56503[(29)]);
var inst_56489 = (state_56503[(2)]);
var inst_56490 = cljs.core.seq(inst_56435);
var state_56503__$1 = (function (){var statearr_56568 = state_56503;
(statearr_56568[(31)] = inst_56489);

return statearr_56568;
})();
if(inst_56490){
var statearr_56569_57830 = state_56503__$1;
(statearr_56569_57830[(1)] = (42));

} else {
var statearr_56570_57831 = state_56503__$1;
(statearr_56570_57831[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (16))){
var inst_56402 = (state_56503[(7)]);
var inst_56404 = cljs.core.chunked_seq_QMARK_(inst_56402);
var state_56503__$1 = state_56503;
if(inst_56404){
var statearr_56571_57832 = state_56503__$1;
(statearr_56571_57832[(1)] = (19));

} else {
var statearr_56572_57833 = state_56503__$1;
(statearr_56572_57833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (38))){
var inst_56482 = (state_56503[(2)]);
var state_56503__$1 = state_56503;
var statearr_56573_57834 = state_56503__$1;
(statearr_56573_57834[(2)] = inst_56482);

(statearr_56573_57834[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (30))){
var state_56503__$1 = state_56503;
var statearr_56574_57835 = state_56503__$1;
(statearr_56574_57835[(2)] = null);

(statearr_56574_57835[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (10))){
var inst_56383 = (state_56503[(15)]);
var inst_56381 = (state_56503[(17)]);
var inst_56391 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56381,inst_56383);
var inst_56392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56391,(0),null);
var inst_56393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56391,(1),null);
var state_56503__$1 = (function (){var statearr_56575 = state_56503;
(statearr_56575[(26)] = inst_56392);

return statearr_56575;
})();
if(cljs.core.truth_(inst_56393)){
var statearr_56576_57836 = state_56503__$1;
(statearr_56576_57836[(1)] = (13));

} else {
var statearr_56577_57837 = state_56503__$1;
(statearr_56577_57837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (18))){
var inst_56428 = (state_56503[(2)]);
var state_56503__$1 = state_56503;
var statearr_56578_57838 = state_56503__$1;
(statearr_56578_57838[(2)] = inst_56428);

(statearr_56578_57838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (42))){
var state_56503__$1 = state_56503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56503__$1,(45),dchan);
} else {
if((state_val_56504 === (37))){
var inst_56462 = (state_56503[(25)]);
var inst_56371 = (state_56503[(10)]);
var inst_56471 = (state_56503[(23)]);
var inst_56471__$1 = cljs.core.first(inst_56462);
var inst_56472 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56471__$1,inst_56371,done);
var state_56503__$1 = (function (){var statearr_56579 = state_56503;
(statearr_56579[(23)] = inst_56471__$1);

return statearr_56579;
})();
if(cljs.core.truth_(inst_56472)){
var statearr_56580_57840 = state_56503__$1;
(statearr_56580_57840[(1)] = (39));

} else {
var statearr_56581_57841 = state_56503__$1;
(statearr_56581_57841[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56504 === (8))){
var inst_56382 = (state_56503[(13)]);
var inst_56383 = (state_56503[(15)]);
var inst_56385 = (inst_56383 < inst_56382);
var inst_56386 = inst_56385;
var state_56503__$1 = state_56503;
if(cljs.core.truth_(inst_56386)){
var statearr_56582_57843 = state_56503__$1;
(statearr_56582_57843[(1)] = (10));

} else {
var statearr_56583_57848 = state_56503__$1;
(statearr_56583_57848[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__55808__auto__ = null;
var cljs$core$async$mult_$_state_machine__55808__auto____0 = (function (){
var statearr_56584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56584[(0)] = cljs$core$async$mult_$_state_machine__55808__auto__);

(statearr_56584[(1)] = (1));

return statearr_56584;
});
var cljs$core$async$mult_$_state_machine__55808__auto____1 = (function (state_56503){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56503);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56585){if((e56585 instanceof Object)){
var ex__55811__auto__ = e56585;
var statearr_56586_57849 = state_56503;
(statearr_56586_57849[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56585;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57850 = state_56503;
state_56503 = G__57850;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__55808__auto__ = function(state_56503){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__55808__auto____1.call(this,state_56503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__55808__auto____0;
cljs$core$async$mult_$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__55808__auto____1;
return cljs$core$async$mult_$_state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_56587 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56587[(6)] = c__55908__auto___57747);

return statearr_56587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__56589 = arguments.length;
switch (G__56589) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57858 = arguments.length;
var i__4790__auto___57859 = (0);
while(true){
if((i__4790__auto___57859 < len__4789__auto___57858)){
args__4795__auto__.push((arguments[i__4790__auto___57859]));

var G__57860 = (i__4790__auto___57859 + (1));
i__4790__auto___57859 = G__57860;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__56594){
var map__56595 = p__56594;
var map__56595__$1 = (((((!((map__56595 == null))))?(((((map__56595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56595):map__56595);
var opts = map__56595__$1;
var statearr_56597_57863 = state;
(statearr_56597_57863[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_56598_57864 = state;
(statearr_56598_57864[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_56599_57865 = state;
(statearr_56599_57865[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq56590){
var G__56591 = cljs.core.first(seq56590);
var seq56590__$1 = cljs.core.next(seq56590);
var G__56592 = cljs.core.first(seq56590__$1);
var seq56590__$2 = cljs.core.next(seq56590__$1);
var G__56593 = cljs.core.first(seq56590__$2);
var seq56590__$3 = cljs.core.next(seq56590__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56591,G__56592,G__56593,seq56590__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56600 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta56601){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta56601 = meta56601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56602,meta56601__$1){
var self__ = this;
var _56602__$1 = this;
return (new cljs.core.async.t_cljs$core$async56600(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta56601__$1));
}));

(cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56602){
var self__ = this;
var _56602__$1 = this;
return self__.meta56601;
}));

(cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56600.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta56601","meta56601",1039568511,null)], null);
}));

(cljs.core.async.t_cljs$core$async56600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56600");

(cljs.core.async.t_cljs$core$async56600.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56600.
 */
cljs.core.async.__GT_t_cljs$core$async56600 = (function cljs$core$async$mix_$___GT_t_cljs$core$async56600(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56601){
return (new cljs.core.async.t_cljs$core$async56600(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56601));
});

}

return (new cljs.core.async.t_cljs$core$async56600(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__55908__auto___57871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56704){
var state_val_56705 = (state_56704[(1)]);
if((state_val_56705 === (7))){
var inst_56619 = (state_56704[(2)]);
var state_56704__$1 = state_56704;
var statearr_56706_57872 = state_56704__$1;
(statearr_56706_57872[(2)] = inst_56619);

(statearr_56706_57872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (20))){
var inst_56631 = (state_56704[(7)]);
var state_56704__$1 = state_56704;
var statearr_56707_57873 = state_56704__$1;
(statearr_56707_57873[(2)] = inst_56631);

(statearr_56707_57873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (27))){
var state_56704__$1 = state_56704;
var statearr_56708_57874 = state_56704__$1;
(statearr_56708_57874[(2)] = null);

(statearr_56708_57874[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (1))){
var inst_56606 = (state_56704[(8)]);
var inst_56606__$1 = calc_state();
var inst_56608 = (inst_56606__$1 == null);
var inst_56609 = cljs.core.not(inst_56608);
var state_56704__$1 = (function (){var statearr_56709 = state_56704;
(statearr_56709[(8)] = inst_56606__$1);

return statearr_56709;
})();
if(inst_56609){
var statearr_56710_57879 = state_56704__$1;
(statearr_56710_57879[(1)] = (2));

} else {
var statearr_56711_57880 = state_56704__$1;
(statearr_56711_57880[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (24))){
var inst_56664 = (state_56704[(9)]);
var inst_56678 = (state_56704[(10)]);
var inst_56655 = (state_56704[(11)]);
var inst_56678__$1 = (inst_56655.cljs$core$IFn$_invoke$arity$1 ? inst_56655.cljs$core$IFn$_invoke$arity$1(inst_56664) : inst_56655.call(null,inst_56664));
var state_56704__$1 = (function (){var statearr_56712 = state_56704;
(statearr_56712[(10)] = inst_56678__$1);

return statearr_56712;
})();
if(cljs.core.truth_(inst_56678__$1)){
var statearr_56713_57884 = state_56704__$1;
(statearr_56713_57884[(1)] = (29));

} else {
var statearr_56714_57885 = state_56704__$1;
(statearr_56714_57885[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (4))){
var inst_56622 = (state_56704[(2)]);
var state_56704__$1 = state_56704;
if(cljs.core.truth_(inst_56622)){
var statearr_56715_57889 = state_56704__$1;
(statearr_56715_57889[(1)] = (8));

} else {
var statearr_56716_57890 = state_56704__$1;
(statearr_56716_57890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (15))){
var inst_56649 = (state_56704[(2)]);
var state_56704__$1 = state_56704;
if(cljs.core.truth_(inst_56649)){
var statearr_56717_57891 = state_56704__$1;
(statearr_56717_57891[(1)] = (19));

} else {
var statearr_56718_57895 = state_56704__$1;
(statearr_56718_57895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (21))){
var inst_56654 = (state_56704[(12)]);
var inst_56654__$1 = (state_56704[(2)]);
var inst_56655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56654__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56654__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56654__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_56704__$1 = (function (){var statearr_56719 = state_56704;
(statearr_56719[(13)] = inst_56656);

(statearr_56719[(12)] = inst_56654__$1);

(statearr_56719[(11)] = inst_56655);

return statearr_56719;
})();
return cljs.core.async.ioc_alts_BANG_(state_56704__$1,(22),inst_56657);
} else {
if((state_val_56705 === (31))){
var inst_56686 = (state_56704[(2)]);
var state_56704__$1 = state_56704;
if(cljs.core.truth_(inst_56686)){
var statearr_56720_57899 = state_56704__$1;
(statearr_56720_57899[(1)] = (32));

} else {
var statearr_56721_57900 = state_56704__$1;
(statearr_56721_57900[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (32))){
var inst_56663 = (state_56704[(14)]);
var state_56704__$1 = state_56704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56704__$1,(35),out,inst_56663);
} else {
if((state_val_56705 === (33))){
var inst_56654 = (state_56704[(12)]);
var inst_56631 = inst_56654;
var state_56704__$1 = (function (){var statearr_56722 = state_56704;
(statearr_56722[(7)] = inst_56631);

return statearr_56722;
})();
var statearr_56723_57905 = state_56704__$1;
(statearr_56723_57905[(2)] = null);

(statearr_56723_57905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (13))){
var inst_56631 = (state_56704[(7)]);
var inst_56638 = inst_56631.cljs$lang$protocol_mask$partition0$;
var inst_56639 = (inst_56638 & (64));
var inst_56640 = inst_56631.cljs$core$ISeq$;
var inst_56641 = (cljs.core.PROTOCOL_SENTINEL === inst_56640);
var inst_56642 = ((inst_56639) || (inst_56641));
var state_56704__$1 = state_56704;
if(cljs.core.truth_(inst_56642)){
var statearr_56724_57906 = state_56704__$1;
(statearr_56724_57906[(1)] = (16));

} else {
var statearr_56725_57907 = state_56704__$1;
(statearr_56725_57907[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (22))){
var inst_56664 = (state_56704[(9)]);
var inst_56663 = (state_56704[(14)]);
var inst_56662 = (state_56704[(2)]);
var inst_56663__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56662,(0),null);
var inst_56664__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56662,(1),null);
var inst_56665 = (inst_56663__$1 == null);
var inst_56666 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56664__$1,change);
var inst_56667 = ((inst_56665) || (inst_56666));
var state_56704__$1 = (function (){var statearr_56726 = state_56704;
(statearr_56726[(9)] = inst_56664__$1);

(statearr_56726[(14)] = inst_56663__$1);

return statearr_56726;
})();
if(cljs.core.truth_(inst_56667)){
var statearr_56727_57908 = state_56704__$1;
(statearr_56727_57908[(1)] = (23));

} else {
var statearr_56728_57909 = state_56704__$1;
(statearr_56728_57909[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (36))){
var inst_56654 = (state_56704[(12)]);
var inst_56631 = inst_56654;
var state_56704__$1 = (function (){var statearr_56729 = state_56704;
(statearr_56729[(7)] = inst_56631);

return statearr_56729;
})();
var statearr_56730_57912 = state_56704__$1;
(statearr_56730_57912[(2)] = null);

(statearr_56730_57912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (29))){
var inst_56678 = (state_56704[(10)]);
var state_56704__$1 = state_56704;
var statearr_56731_57913 = state_56704__$1;
(statearr_56731_57913[(2)] = inst_56678);

(statearr_56731_57913[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (6))){
var state_56704__$1 = state_56704;
var statearr_56732_57915 = state_56704__$1;
(statearr_56732_57915[(2)] = false);

(statearr_56732_57915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (28))){
var inst_56674 = (state_56704[(2)]);
var inst_56675 = calc_state();
var inst_56631 = inst_56675;
var state_56704__$1 = (function (){var statearr_56733 = state_56704;
(statearr_56733[(15)] = inst_56674);

(statearr_56733[(7)] = inst_56631);

return statearr_56733;
})();
var statearr_56734_57917 = state_56704__$1;
(statearr_56734_57917[(2)] = null);

(statearr_56734_57917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (25))){
var inst_56700 = (state_56704[(2)]);
var state_56704__$1 = state_56704;
var statearr_56735_57918 = state_56704__$1;
(statearr_56735_57918[(2)] = inst_56700);

(statearr_56735_57918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (34))){
var inst_56698 = (state_56704[(2)]);
var state_56704__$1 = state_56704;
var statearr_56736_57921 = state_56704__$1;
(statearr_56736_57921[(2)] = inst_56698);

(statearr_56736_57921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (17))){
var state_56704__$1 = state_56704;
var statearr_56737_57922 = state_56704__$1;
(statearr_56737_57922[(2)] = false);

(statearr_56737_57922[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (3))){
var state_56704__$1 = state_56704;
var statearr_56738_57926 = state_56704__$1;
(statearr_56738_57926[(2)] = false);

(statearr_56738_57926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (12))){
var inst_56702 = (state_56704[(2)]);
var state_56704__$1 = state_56704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56704__$1,inst_56702);
} else {
if((state_val_56705 === (2))){
var inst_56606 = (state_56704[(8)]);
var inst_56611 = inst_56606.cljs$lang$protocol_mask$partition0$;
var inst_56612 = (inst_56611 & (64));
var inst_56613 = inst_56606.cljs$core$ISeq$;
var inst_56614 = (cljs.core.PROTOCOL_SENTINEL === inst_56613);
var inst_56615 = ((inst_56612) || (inst_56614));
var state_56704__$1 = state_56704;
if(cljs.core.truth_(inst_56615)){
var statearr_56739_57928 = state_56704__$1;
(statearr_56739_57928[(1)] = (5));

} else {
var statearr_56740_57929 = state_56704__$1;
(statearr_56740_57929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (23))){
var inst_56663 = (state_56704[(14)]);
var inst_56669 = (inst_56663 == null);
var state_56704__$1 = state_56704;
if(cljs.core.truth_(inst_56669)){
var statearr_56741_57930 = state_56704__$1;
(statearr_56741_57930[(1)] = (26));

} else {
var statearr_56742_57933 = state_56704__$1;
(statearr_56742_57933[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (35))){
var inst_56689 = (state_56704[(2)]);
var state_56704__$1 = state_56704;
if(cljs.core.truth_(inst_56689)){
var statearr_56743_57934 = state_56704__$1;
(statearr_56743_57934[(1)] = (36));

} else {
var statearr_56744_57935 = state_56704__$1;
(statearr_56744_57935[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (19))){
var inst_56631 = (state_56704[(7)]);
var inst_56651 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56631);
var state_56704__$1 = state_56704;
var statearr_56745_57936 = state_56704__$1;
(statearr_56745_57936[(2)] = inst_56651);

(statearr_56745_57936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (11))){
var inst_56631 = (state_56704[(7)]);
var inst_56635 = (inst_56631 == null);
var inst_56636 = cljs.core.not(inst_56635);
var state_56704__$1 = state_56704;
if(inst_56636){
var statearr_56746_57937 = state_56704__$1;
(statearr_56746_57937[(1)] = (13));

} else {
var statearr_56747_57938 = state_56704__$1;
(statearr_56747_57938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (9))){
var inst_56606 = (state_56704[(8)]);
var state_56704__$1 = state_56704;
var statearr_56748_57939 = state_56704__$1;
(statearr_56748_57939[(2)] = inst_56606);

(statearr_56748_57939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (5))){
var state_56704__$1 = state_56704;
var statearr_56749_57940 = state_56704__$1;
(statearr_56749_57940[(2)] = true);

(statearr_56749_57940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (14))){
var state_56704__$1 = state_56704;
var statearr_56750_57941 = state_56704__$1;
(statearr_56750_57941[(2)] = false);

(statearr_56750_57941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (26))){
var inst_56664 = (state_56704[(9)]);
var inst_56671 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_56664);
var state_56704__$1 = state_56704;
var statearr_56751_57942 = state_56704__$1;
(statearr_56751_57942[(2)] = inst_56671);

(statearr_56751_57942[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (16))){
var state_56704__$1 = state_56704;
var statearr_56752_57943 = state_56704__$1;
(statearr_56752_57943[(2)] = true);

(statearr_56752_57943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (38))){
var inst_56694 = (state_56704[(2)]);
var state_56704__$1 = state_56704;
var statearr_56753_57948 = state_56704__$1;
(statearr_56753_57948[(2)] = inst_56694);

(statearr_56753_57948[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (30))){
var inst_56664 = (state_56704[(9)]);
var inst_56656 = (state_56704[(13)]);
var inst_56655 = (state_56704[(11)]);
var inst_56681 = cljs.core.empty_QMARK_(inst_56655);
var inst_56682 = (inst_56656.cljs$core$IFn$_invoke$arity$1 ? inst_56656.cljs$core$IFn$_invoke$arity$1(inst_56664) : inst_56656.call(null,inst_56664));
var inst_56683 = cljs.core.not(inst_56682);
var inst_56684 = ((inst_56681) && (inst_56683));
var state_56704__$1 = state_56704;
var statearr_56754_57949 = state_56704__$1;
(statearr_56754_57949[(2)] = inst_56684);

(statearr_56754_57949[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (10))){
var inst_56606 = (state_56704[(8)]);
var inst_56627 = (state_56704[(2)]);
var inst_56628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56627,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56627,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56627,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_56631 = inst_56606;
var state_56704__$1 = (function (){var statearr_56755 = state_56704;
(statearr_56755[(16)] = inst_56630);

(statearr_56755[(17)] = inst_56629);

(statearr_56755[(18)] = inst_56628);

(statearr_56755[(7)] = inst_56631);

return statearr_56755;
})();
var statearr_56756_57950 = state_56704__$1;
(statearr_56756_57950[(2)] = null);

(statearr_56756_57950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (18))){
var inst_56646 = (state_56704[(2)]);
var state_56704__$1 = state_56704;
var statearr_56757_57951 = state_56704__$1;
(statearr_56757_57951[(2)] = inst_56646);

(statearr_56757_57951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (37))){
var state_56704__$1 = state_56704;
var statearr_56758_57952 = state_56704__$1;
(statearr_56758_57952[(2)] = null);

(statearr_56758_57952[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (8))){
var inst_56606 = (state_56704[(8)]);
var inst_56624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56606);
var state_56704__$1 = state_56704;
var statearr_56759_57957 = state_56704__$1;
(statearr_56759_57957[(2)] = inst_56624);

(statearr_56759_57957[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__55808__auto__ = null;
var cljs$core$async$mix_$_state_machine__55808__auto____0 = (function (){
var statearr_56760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56760[(0)] = cljs$core$async$mix_$_state_machine__55808__auto__);

(statearr_56760[(1)] = (1));

return statearr_56760;
});
var cljs$core$async$mix_$_state_machine__55808__auto____1 = (function (state_56704){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56704);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56761){if((e56761 instanceof Object)){
var ex__55811__auto__ = e56761;
var statearr_56762_57959 = state_56704;
(statearr_56762_57959[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57960 = state_56704;
state_56704 = G__57960;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__55808__auto__ = function(state_56704){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__55808__auto____1.call(this,state_56704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__55808__auto____0;
cljs$core$async$mix_$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__55808__auto____1;
return cljs$core$async$mix_$_state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_56763 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56763[(6)] = c__55908__auto___57871);

return statearr_56763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__56765 = arguments.length;
switch (G__56765) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__56768 = arguments.length;
switch (G__56768) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__56766_SHARP_){
if(cljs.core.truth_((p1__56766_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__56766_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__56766_SHARP_.call(null,topic)))){
return p1__56766_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56766_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56769 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta56770){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta56770 = meta56770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56771,meta56770__$1){
var self__ = this;
var _56771__$1 = this;
return (new cljs.core.async.t_cljs$core$async56769(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta56770__$1));
}));

(cljs.core.async.t_cljs$core$async56769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56771){
var self__ = this;
var _56771__$1 = this;
return self__.meta56770;
}));

(cljs.core.async.t_cljs$core$async56769.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56769.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56769.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56769.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async56769.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async56769.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async56769.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async56769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta56770","meta56770",-317929784,null)], null);
}));

(cljs.core.async.t_cljs$core$async56769.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56769");

(cljs.core.async.t_cljs$core$async56769.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56769");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56769.
 */
cljs.core.async.__GT_t_cljs$core$async56769 = (function cljs$core$async$__GT_t_cljs$core$async56769(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56770){
return (new cljs.core.async.t_cljs$core$async56769(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56770));
});

}

return (new cljs.core.async.t_cljs$core$async56769(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__55908__auto___57978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56843){
var state_val_56844 = (state_56843[(1)]);
if((state_val_56844 === (7))){
var inst_56839 = (state_56843[(2)]);
var state_56843__$1 = state_56843;
var statearr_56845_57980 = state_56843__$1;
(statearr_56845_57980[(2)] = inst_56839);

(statearr_56845_57980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (20))){
var state_56843__$1 = state_56843;
var statearr_56846_57981 = state_56843__$1;
(statearr_56846_57981[(2)] = null);

(statearr_56846_57981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (1))){
var state_56843__$1 = state_56843;
var statearr_56847_57982 = state_56843__$1;
(statearr_56847_57982[(2)] = null);

(statearr_56847_57982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (24))){
var inst_56822 = (state_56843[(7)]);
var inst_56831 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_56822);
var state_56843__$1 = state_56843;
var statearr_56848_57984 = state_56843__$1;
(statearr_56848_57984[(2)] = inst_56831);

(statearr_56848_57984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (4))){
var inst_56774 = (state_56843[(8)]);
var inst_56774__$1 = (state_56843[(2)]);
var inst_56775 = (inst_56774__$1 == null);
var state_56843__$1 = (function (){var statearr_56849 = state_56843;
(statearr_56849[(8)] = inst_56774__$1);

return statearr_56849;
})();
if(cljs.core.truth_(inst_56775)){
var statearr_56850_57989 = state_56843__$1;
(statearr_56850_57989[(1)] = (5));

} else {
var statearr_56851_57991 = state_56843__$1;
(statearr_56851_57991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (15))){
var inst_56816 = (state_56843[(2)]);
var state_56843__$1 = state_56843;
var statearr_56852_57992 = state_56843__$1;
(statearr_56852_57992[(2)] = inst_56816);

(statearr_56852_57992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (21))){
var inst_56836 = (state_56843[(2)]);
var state_56843__$1 = (function (){var statearr_56853 = state_56843;
(statearr_56853[(9)] = inst_56836);

return statearr_56853;
})();
var statearr_56854_57993 = state_56843__$1;
(statearr_56854_57993[(2)] = null);

(statearr_56854_57993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (13))){
var inst_56798 = (state_56843[(10)]);
var inst_56800 = cljs.core.chunked_seq_QMARK_(inst_56798);
var state_56843__$1 = state_56843;
if(inst_56800){
var statearr_56855_57994 = state_56843__$1;
(statearr_56855_57994[(1)] = (16));

} else {
var statearr_56856_57995 = state_56843__$1;
(statearr_56856_57995[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (22))){
var inst_56828 = (state_56843[(2)]);
var state_56843__$1 = state_56843;
if(cljs.core.truth_(inst_56828)){
var statearr_56857_57996 = state_56843__$1;
(statearr_56857_57996[(1)] = (23));

} else {
var statearr_56858_57998 = state_56843__$1;
(statearr_56858_57998[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (6))){
var inst_56824 = (state_56843[(11)]);
var inst_56822 = (state_56843[(7)]);
var inst_56774 = (state_56843[(8)]);
var inst_56822__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_56774) : topic_fn.call(null,inst_56774));
var inst_56823 = cljs.core.deref(mults);
var inst_56824__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56823,inst_56822__$1);
var state_56843__$1 = (function (){var statearr_56859 = state_56843;
(statearr_56859[(11)] = inst_56824__$1);

(statearr_56859[(7)] = inst_56822__$1);

return statearr_56859;
})();
if(cljs.core.truth_(inst_56824__$1)){
var statearr_56860_58000 = state_56843__$1;
(statearr_56860_58000[(1)] = (19));

} else {
var statearr_56861_58001 = state_56843__$1;
(statearr_56861_58001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (25))){
var inst_56833 = (state_56843[(2)]);
var state_56843__$1 = state_56843;
var statearr_56862_58005 = state_56843__$1;
(statearr_56862_58005[(2)] = inst_56833);

(statearr_56862_58005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (17))){
var inst_56798 = (state_56843[(10)]);
var inst_56807 = cljs.core.first(inst_56798);
var inst_56808 = cljs.core.async.muxch_STAR_(inst_56807);
var inst_56809 = cljs.core.async.close_BANG_(inst_56808);
var inst_56810 = cljs.core.next(inst_56798);
var inst_56784 = inst_56810;
var inst_56785 = null;
var inst_56786 = (0);
var inst_56787 = (0);
var state_56843__$1 = (function (){var statearr_56863 = state_56843;
(statearr_56863[(12)] = inst_56785);

(statearr_56863[(13)] = inst_56809);

(statearr_56863[(14)] = inst_56787);

(statearr_56863[(15)] = inst_56786);

(statearr_56863[(16)] = inst_56784);

return statearr_56863;
})();
var statearr_56864_58006 = state_56843__$1;
(statearr_56864_58006[(2)] = null);

(statearr_56864_58006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (3))){
var inst_56841 = (state_56843[(2)]);
var state_56843__$1 = state_56843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56843__$1,inst_56841);
} else {
if((state_val_56844 === (12))){
var inst_56818 = (state_56843[(2)]);
var state_56843__$1 = state_56843;
var statearr_56865_58007 = state_56843__$1;
(statearr_56865_58007[(2)] = inst_56818);

(statearr_56865_58007[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (2))){
var state_56843__$1 = state_56843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56843__$1,(4),ch);
} else {
if((state_val_56844 === (23))){
var state_56843__$1 = state_56843;
var statearr_56866_58008 = state_56843__$1;
(statearr_56866_58008[(2)] = null);

(statearr_56866_58008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (19))){
var inst_56824 = (state_56843[(11)]);
var inst_56774 = (state_56843[(8)]);
var inst_56826 = cljs.core.async.muxch_STAR_(inst_56824);
var state_56843__$1 = state_56843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56843__$1,(22),inst_56826,inst_56774);
} else {
if((state_val_56844 === (11))){
var inst_56798 = (state_56843[(10)]);
var inst_56784 = (state_56843[(16)]);
var inst_56798__$1 = cljs.core.seq(inst_56784);
var state_56843__$1 = (function (){var statearr_56867 = state_56843;
(statearr_56867[(10)] = inst_56798__$1);

return statearr_56867;
})();
if(inst_56798__$1){
var statearr_56868_58009 = state_56843__$1;
(statearr_56868_58009[(1)] = (13));

} else {
var statearr_56869_58010 = state_56843__$1;
(statearr_56869_58010[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (9))){
var inst_56820 = (state_56843[(2)]);
var state_56843__$1 = state_56843;
var statearr_56870_58012 = state_56843__$1;
(statearr_56870_58012[(2)] = inst_56820);

(statearr_56870_58012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (5))){
var inst_56781 = cljs.core.deref(mults);
var inst_56782 = cljs.core.vals(inst_56781);
var inst_56783 = cljs.core.seq(inst_56782);
var inst_56784 = inst_56783;
var inst_56785 = null;
var inst_56786 = (0);
var inst_56787 = (0);
var state_56843__$1 = (function (){var statearr_56871 = state_56843;
(statearr_56871[(12)] = inst_56785);

(statearr_56871[(14)] = inst_56787);

(statearr_56871[(15)] = inst_56786);

(statearr_56871[(16)] = inst_56784);

return statearr_56871;
})();
var statearr_56872_58013 = state_56843__$1;
(statearr_56872_58013[(2)] = null);

(statearr_56872_58013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (14))){
var state_56843__$1 = state_56843;
var statearr_56876_58014 = state_56843__$1;
(statearr_56876_58014[(2)] = null);

(statearr_56876_58014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (16))){
var inst_56798 = (state_56843[(10)]);
var inst_56802 = cljs.core.chunk_first(inst_56798);
var inst_56803 = cljs.core.chunk_rest(inst_56798);
var inst_56804 = cljs.core.count(inst_56802);
var inst_56784 = inst_56803;
var inst_56785 = inst_56802;
var inst_56786 = inst_56804;
var inst_56787 = (0);
var state_56843__$1 = (function (){var statearr_56877 = state_56843;
(statearr_56877[(12)] = inst_56785);

(statearr_56877[(14)] = inst_56787);

(statearr_56877[(15)] = inst_56786);

(statearr_56877[(16)] = inst_56784);

return statearr_56877;
})();
var statearr_56878_58015 = state_56843__$1;
(statearr_56878_58015[(2)] = null);

(statearr_56878_58015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (10))){
var inst_56785 = (state_56843[(12)]);
var inst_56787 = (state_56843[(14)]);
var inst_56786 = (state_56843[(15)]);
var inst_56784 = (state_56843[(16)]);
var inst_56792 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56785,inst_56787);
var inst_56793 = cljs.core.async.muxch_STAR_(inst_56792);
var inst_56794 = cljs.core.async.close_BANG_(inst_56793);
var inst_56795 = (inst_56787 + (1));
var tmp56873 = inst_56785;
var tmp56874 = inst_56786;
var tmp56875 = inst_56784;
var inst_56784__$1 = tmp56875;
var inst_56785__$1 = tmp56873;
var inst_56786__$1 = tmp56874;
var inst_56787__$1 = inst_56795;
var state_56843__$1 = (function (){var statearr_56879 = state_56843;
(statearr_56879[(17)] = inst_56794);

(statearr_56879[(12)] = inst_56785__$1);

(statearr_56879[(14)] = inst_56787__$1);

(statearr_56879[(15)] = inst_56786__$1);

(statearr_56879[(16)] = inst_56784__$1);

return statearr_56879;
})();
var statearr_56880_58023 = state_56843__$1;
(statearr_56880_58023[(2)] = null);

(statearr_56880_58023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (18))){
var inst_56813 = (state_56843[(2)]);
var state_56843__$1 = state_56843;
var statearr_56881_58024 = state_56843__$1;
(statearr_56881_58024[(2)] = inst_56813);

(statearr_56881_58024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (8))){
var inst_56787 = (state_56843[(14)]);
var inst_56786 = (state_56843[(15)]);
var inst_56789 = (inst_56787 < inst_56786);
var inst_56790 = inst_56789;
var state_56843__$1 = state_56843;
if(cljs.core.truth_(inst_56790)){
var statearr_56882_58025 = state_56843__$1;
(statearr_56882_58025[(1)] = (10));

} else {
var statearr_56883_58026 = state_56843__$1;
(statearr_56883_58026[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__55808__auto__ = null;
var cljs$core$async$state_machine__55808__auto____0 = (function (){
var statearr_56884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56884[(0)] = cljs$core$async$state_machine__55808__auto__);

(statearr_56884[(1)] = (1));

return statearr_56884;
});
var cljs$core$async$state_machine__55808__auto____1 = (function (state_56843){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56843);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56885){if((e56885 instanceof Object)){
var ex__55811__auto__ = e56885;
var statearr_56886_58027 = state_56843;
(statearr_56886_58027[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56885;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58028 = state_56843;
state_56843 = G__58028;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$state_machine__55808__auto__ = function(state_56843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55808__auto____1.call(this,state_56843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55808__auto____0;
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55808__auto____1;
return cljs$core$async$state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_56887 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56887[(6)] = c__55908__auto___57978);

return statearr_56887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__56889 = arguments.length;
switch (G__56889) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__56891 = arguments.length;
switch (G__56891) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__56893 = arguments.length;
switch (G__56893) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__55908__auto___58034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56932){
var state_val_56933 = (state_56932[(1)]);
if((state_val_56933 === (7))){
var state_56932__$1 = state_56932;
var statearr_56934_58035 = state_56932__$1;
(statearr_56934_58035[(2)] = null);

(statearr_56934_58035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56933 === (1))){
var state_56932__$1 = state_56932;
var statearr_56935_58036 = state_56932__$1;
(statearr_56935_58036[(2)] = null);

(statearr_56935_58036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56933 === (4))){
var inst_56896 = (state_56932[(7)]);
var inst_56898 = (inst_56896 < cnt);
var state_56932__$1 = state_56932;
if(cljs.core.truth_(inst_56898)){
var statearr_56936_58037 = state_56932__$1;
(statearr_56936_58037[(1)] = (6));

} else {
var statearr_56937_58038 = state_56932__$1;
(statearr_56937_58038[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56933 === (15))){
var inst_56928 = (state_56932[(2)]);
var state_56932__$1 = state_56932;
var statearr_56938_58039 = state_56932__$1;
(statearr_56938_58039[(2)] = inst_56928);

(statearr_56938_58039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56933 === (13))){
var inst_56921 = cljs.core.async.close_BANG_(out);
var state_56932__$1 = state_56932;
var statearr_56939_58044 = state_56932__$1;
(statearr_56939_58044[(2)] = inst_56921);

(statearr_56939_58044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56933 === (6))){
var state_56932__$1 = state_56932;
var statearr_56940_58045 = state_56932__$1;
(statearr_56940_58045[(2)] = null);

(statearr_56940_58045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56933 === (3))){
var inst_56930 = (state_56932[(2)]);
var state_56932__$1 = state_56932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56932__$1,inst_56930);
} else {
if((state_val_56933 === (12))){
var inst_56918 = (state_56932[(8)]);
var inst_56918__$1 = (state_56932[(2)]);
var inst_56919 = cljs.core.some(cljs.core.nil_QMARK_,inst_56918__$1);
var state_56932__$1 = (function (){var statearr_56941 = state_56932;
(statearr_56941[(8)] = inst_56918__$1);

return statearr_56941;
})();
if(cljs.core.truth_(inst_56919)){
var statearr_56942_58050 = state_56932__$1;
(statearr_56942_58050[(1)] = (13));

} else {
var statearr_56943_58091 = state_56932__$1;
(statearr_56943_58091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56933 === (2))){
var inst_56895 = cljs.core.reset_BANG_(dctr,cnt);
var inst_56896 = (0);
var state_56932__$1 = (function (){var statearr_56944 = state_56932;
(statearr_56944[(9)] = inst_56895);

(statearr_56944[(7)] = inst_56896);

return statearr_56944;
})();
var statearr_56945_58092 = state_56932__$1;
(statearr_56945_58092[(2)] = null);

(statearr_56945_58092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56933 === (11))){
var inst_56896 = (state_56932[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_56932,(10),Object,null,(9));
var inst_56905 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_56896) : chs__$1.call(null,inst_56896));
var inst_56906 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_56896) : done.call(null,inst_56896));
var inst_56907 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_56905,inst_56906);
var state_56932__$1 = state_56932;
var statearr_56946_58093 = state_56932__$1;
(statearr_56946_58093[(2)] = inst_56907);


cljs.core.async.impl.ioc_helpers.process_exception(state_56932__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56933 === (9))){
var inst_56896 = (state_56932[(7)]);
var inst_56909 = (state_56932[(2)]);
var inst_56910 = (inst_56896 + (1));
var inst_56896__$1 = inst_56910;
var state_56932__$1 = (function (){var statearr_56947 = state_56932;
(statearr_56947[(7)] = inst_56896__$1);

(statearr_56947[(10)] = inst_56909);

return statearr_56947;
})();
var statearr_56948_58094 = state_56932__$1;
(statearr_56948_58094[(2)] = null);

(statearr_56948_58094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56933 === (5))){
var inst_56916 = (state_56932[(2)]);
var state_56932__$1 = (function (){var statearr_56949 = state_56932;
(statearr_56949[(11)] = inst_56916);

return statearr_56949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56932__$1,(12),dchan);
} else {
if((state_val_56933 === (14))){
var inst_56918 = (state_56932[(8)]);
var inst_56923 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_56918);
var state_56932__$1 = state_56932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56932__$1,(16),out,inst_56923);
} else {
if((state_val_56933 === (16))){
var inst_56925 = (state_56932[(2)]);
var state_56932__$1 = (function (){var statearr_56950 = state_56932;
(statearr_56950[(12)] = inst_56925);

return statearr_56950;
})();
var statearr_56951_58095 = state_56932__$1;
(statearr_56951_58095[(2)] = null);

(statearr_56951_58095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56933 === (10))){
var inst_56900 = (state_56932[(2)]);
var inst_56901 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_56932__$1 = (function (){var statearr_56952 = state_56932;
(statearr_56952[(13)] = inst_56900);

return statearr_56952;
})();
var statearr_56953_58096 = state_56932__$1;
(statearr_56953_58096[(2)] = inst_56901);


cljs.core.async.impl.ioc_helpers.process_exception(state_56932__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56933 === (8))){
var inst_56914 = (state_56932[(2)]);
var state_56932__$1 = state_56932;
var statearr_56954_58097 = state_56932__$1;
(statearr_56954_58097[(2)] = inst_56914);

(statearr_56954_58097[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__55808__auto__ = null;
var cljs$core$async$state_machine__55808__auto____0 = (function (){
var statearr_56955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56955[(0)] = cljs$core$async$state_machine__55808__auto__);

(statearr_56955[(1)] = (1));

return statearr_56955;
});
var cljs$core$async$state_machine__55808__auto____1 = (function (state_56932){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56932);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e56956){if((e56956 instanceof Object)){
var ex__55811__auto__ = e56956;
var statearr_56957_58098 = state_56932;
(statearr_56957_58098[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56956;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58099 = state_56932;
state_56932 = G__58099;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$state_machine__55808__auto__ = function(state_56932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55808__auto____1.call(this,state_56932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55808__auto____0;
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55808__auto____1;
return cljs$core$async$state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_56958 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_56958[(6)] = c__55908__auto___58034);

return statearr_56958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__56961 = arguments.length;
switch (G__56961) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55908__auto___58101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_56993){
var state_val_56994 = (state_56993[(1)]);
if((state_val_56994 === (7))){
var inst_56972 = (state_56993[(7)]);
var inst_56973 = (state_56993[(8)]);
var inst_56972__$1 = (state_56993[(2)]);
var inst_56973__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56972__$1,(0),null);
var inst_56974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56972__$1,(1),null);
var inst_56975 = (inst_56973__$1 == null);
var state_56993__$1 = (function (){var statearr_56995 = state_56993;
(statearr_56995[(7)] = inst_56972__$1);

(statearr_56995[(9)] = inst_56974);

(statearr_56995[(8)] = inst_56973__$1);

return statearr_56995;
})();
if(cljs.core.truth_(inst_56975)){
var statearr_56996_58102 = state_56993__$1;
(statearr_56996_58102[(1)] = (8));

} else {
var statearr_56997_58103 = state_56993__$1;
(statearr_56997_58103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (1))){
var inst_56962 = cljs.core.vec(chs);
var inst_56963 = inst_56962;
var state_56993__$1 = (function (){var statearr_56998 = state_56993;
(statearr_56998[(10)] = inst_56963);

return statearr_56998;
})();
var statearr_56999_58104 = state_56993__$1;
(statearr_56999_58104[(2)] = null);

(statearr_56999_58104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (4))){
var inst_56963 = (state_56993[(10)]);
var state_56993__$1 = state_56993;
return cljs.core.async.ioc_alts_BANG_(state_56993__$1,(7),inst_56963);
} else {
if((state_val_56994 === (6))){
var inst_56989 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
var statearr_57000_58105 = state_56993__$1;
(statearr_57000_58105[(2)] = inst_56989);

(statearr_57000_58105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (3))){
var inst_56991 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56993__$1,inst_56991);
} else {
if((state_val_56994 === (2))){
var inst_56963 = (state_56993[(10)]);
var inst_56965 = cljs.core.count(inst_56963);
var inst_56966 = (inst_56965 > (0));
var state_56993__$1 = state_56993;
if(cljs.core.truth_(inst_56966)){
var statearr_57002_58106 = state_56993__$1;
(statearr_57002_58106[(1)] = (4));

} else {
var statearr_57003_58107 = state_56993__$1;
(statearr_57003_58107[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (11))){
var inst_56963 = (state_56993[(10)]);
var inst_56982 = (state_56993[(2)]);
var tmp57001 = inst_56963;
var inst_56963__$1 = tmp57001;
var state_56993__$1 = (function (){var statearr_57004 = state_56993;
(statearr_57004[(10)] = inst_56963__$1);

(statearr_57004[(11)] = inst_56982);

return statearr_57004;
})();
var statearr_57005_58112 = state_56993__$1;
(statearr_57005_58112[(2)] = null);

(statearr_57005_58112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (9))){
var inst_56973 = (state_56993[(8)]);
var state_56993__$1 = state_56993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56993__$1,(11),out,inst_56973);
} else {
if((state_val_56994 === (5))){
var inst_56987 = cljs.core.async.close_BANG_(out);
var state_56993__$1 = state_56993;
var statearr_57006_58113 = state_56993__$1;
(statearr_57006_58113[(2)] = inst_56987);

(statearr_57006_58113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (10))){
var inst_56985 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
var statearr_57007_58114 = state_56993__$1;
(statearr_57007_58114[(2)] = inst_56985);

(statearr_57007_58114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (8))){
var inst_56972 = (state_56993[(7)]);
var inst_56963 = (state_56993[(10)]);
var inst_56974 = (state_56993[(9)]);
var inst_56973 = (state_56993[(8)]);
var inst_56977 = (function (){var cs = inst_56963;
var vec__56968 = inst_56972;
var v = inst_56973;
var c = inst_56974;
return (function (p1__56959_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__56959_SHARP_);
});
})();
var inst_56978 = cljs.core.filterv(inst_56977,inst_56963);
var inst_56963__$1 = inst_56978;
var state_56993__$1 = (function (){var statearr_57008 = state_56993;
(statearr_57008[(10)] = inst_56963__$1);

return statearr_57008;
})();
var statearr_57009_58115 = state_56993__$1;
(statearr_57009_58115[(2)] = null);

(statearr_57009_58115[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__55808__auto__ = null;
var cljs$core$async$state_machine__55808__auto____0 = (function (){
var statearr_57010 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57010[(0)] = cljs$core$async$state_machine__55808__auto__);

(statearr_57010[(1)] = (1));

return statearr_57010;
});
var cljs$core$async$state_machine__55808__auto____1 = (function (state_56993){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_56993);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e57011){if((e57011 instanceof Object)){
var ex__55811__auto__ = e57011;
var statearr_57012_58116 = state_56993;
(statearr_57012_58116[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57011;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58117 = state_56993;
state_56993 = G__58117;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$state_machine__55808__auto__ = function(state_56993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55808__auto____1.call(this,state_56993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55808__auto____0;
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55808__auto____1;
return cljs$core$async$state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_57013 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_57013[(6)] = c__55908__auto___58101);

return statearr_57013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__57015 = arguments.length;
switch (G__57015) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55908__auto___58137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_57039){
var state_val_57040 = (state_57039[(1)]);
if((state_val_57040 === (7))){
var inst_57021 = (state_57039[(7)]);
var inst_57021__$1 = (state_57039[(2)]);
var inst_57022 = (inst_57021__$1 == null);
var inst_57023 = cljs.core.not(inst_57022);
var state_57039__$1 = (function (){var statearr_57041 = state_57039;
(statearr_57041[(7)] = inst_57021__$1);

return statearr_57041;
})();
if(inst_57023){
var statearr_57042_58138 = state_57039__$1;
(statearr_57042_58138[(1)] = (8));

} else {
var statearr_57043_58139 = state_57039__$1;
(statearr_57043_58139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57040 === (1))){
var inst_57016 = (0);
var state_57039__$1 = (function (){var statearr_57044 = state_57039;
(statearr_57044[(8)] = inst_57016);

return statearr_57044;
})();
var statearr_57045_58140 = state_57039__$1;
(statearr_57045_58140[(2)] = null);

(statearr_57045_58140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57040 === (4))){
var state_57039__$1 = state_57039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57039__$1,(7),ch);
} else {
if((state_val_57040 === (6))){
var inst_57034 = (state_57039[(2)]);
var state_57039__$1 = state_57039;
var statearr_57046_58141 = state_57039__$1;
(statearr_57046_58141[(2)] = inst_57034);

(statearr_57046_58141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57040 === (3))){
var inst_57036 = (state_57039[(2)]);
var inst_57037 = cljs.core.async.close_BANG_(out);
var state_57039__$1 = (function (){var statearr_57047 = state_57039;
(statearr_57047[(9)] = inst_57036);

return statearr_57047;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57039__$1,inst_57037);
} else {
if((state_val_57040 === (2))){
var inst_57016 = (state_57039[(8)]);
var inst_57018 = (inst_57016 < n);
var state_57039__$1 = state_57039;
if(cljs.core.truth_(inst_57018)){
var statearr_57048_58145 = state_57039__$1;
(statearr_57048_58145[(1)] = (4));

} else {
var statearr_57049_58146 = state_57039__$1;
(statearr_57049_58146[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57040 === (11))){
var inst_57016 = (state_57039[(8)]);
var inst_57026 = (state_57039[(2)]);
var inst_57027 = (inst_57016 + (1));
var inst_57016__$1 = inst_57027;
var state_57039__$1 = (function (){var statearr_57050 = state_57039;
(statearr_57050[(8)] = inst_57016__$1);

(statearr_57050[(10)] = inst_57026);

return statearr_57050;
})();
var statearr_57051_58147 = state_57039__$1;
(statearr_57051_58147[(2)] = null);

(statearr_57051_58147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57040 === (9))){
var state_57039__$1 = state_57039;
var statearr_57052_58148 = state_57039__$1;
(statearr_57052_58148[(2)] = null);

(statearr_57052_58148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57040 === (5))){
var state_57039__$1 = state_57039;
var statearr_57053_58149 = state_57039__$1;
(statearr_57053_58149[(2)] = null);

(statearr_57053_58149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57040 === (10))){
var inst_57031 = (state_57039[(2)]);
var state_57039__$1 = state_57039;
var statearr_57054_58150 = state_57039__$1;
(statearr_57054_58150[(2)] = inst_57031);

(statearr_57054_58150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57040 === (8))){
var inst_57021 = (state_57039[(7)]);
var state_57039__$1 = state_57039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57039__$1,(11),out,inst_57021);
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
});
return (function() {
var cljs$core$async$state_machine__55808__auto__ = null;
var cljs$core$async$state_machine__55808__auto____0 = (function (){
var statearr_57055 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57055[(0)] = cljs$core$async$state_machine__55808__auto__);

(statearr_57055[(1)] = (1));

return statearr_57055;
});
var cljs$core$async$state_machine__55808__auto____1 = (function (state_57039){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_57039);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e57056){if((e57056 instanceof Object)){
var ex__55811__auto__ = e57056;
var statearr_57057_58156 = state_57039;
(statearr_57057_58156[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57056;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58157 = state_57039;
state_57039 = G__58157;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$state_machine__55808__auto__ = function(state_57039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55808__auto____1.call(this,state_57039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55808__auto____0;
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55808__auto____1;
return cljs$core$async$state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_57058 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_57058[(6)] = c__55908__auto___58137);

return statearr_57058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57060 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57060 = (function (f,ch,meta57061){
this.f = f;
this.ch = ch;
this.meta57061 = meta57061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57062,meta57061__$1){
var self__ = this;
var _57062__$1 = this;
return (new cljs.core.async.t_cljs$core$async57060(self__.f,self__.ch,meta57061__$1));
}));

(cljs.core.async.t_cljs$core$async57060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57062){
var self__ = this;
var _57062__$1 = this;
return self__.meta57061;
}));

(cljs.core.async.t_cljs$core$async57060.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57060.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57060.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57060.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57060.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57063 = (function (f,ch,meta57061,_,fn1,meta57064){
this.f = f;
this.ch = ch;
this.meta57061 = meta57061;
this._ = _;
this.fn1 = fn1;
this.meta57064 = meta57064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57065,meta57064__$1){
var self__ = this;
var _57065__$1 = this;
return (new cljs.core.async.t_cljs$core$async57063(self__.f,self__.ch,self__.meta57061,self__._,self__.fn1,meta57064__$1));
}));

(cljs.core.async.t_cljs$core$async57063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57065){
var self__ = this;
var _57065__$1 = this;
return self__.meta57064;
}));

(cljs.core.async.t_cljs$core$async57063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async57063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__57059_SHARP_){
var G__57066 = (((p1__57059_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__57059_SHARP_) : self__.f.call(null,p1__57059_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__57066) : f1.call(null,G__57066));
});
}));

(cljs.core.async.t_cljs$core$async57063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57061","meta57061",-93184397,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async57060","cljs.core.async/t_cljs$core$async57060",814424711,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta57064","meta57064",294999591,null)], null);
}));

(cljs.core.async.t_cljs$core$async57063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57063");

(cljs.core.async.t_cljs$core$async57063.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57063.
 */
cljs.core.async.__GT_t_cljs$core$async57063 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57063(f__$1,ch__$1,meta57061__$1,___$2,fn1__$1,meta57064){
return (new cljs.core.async.t_cljs$core$async57063(f__$1,ch__$1,meta57061__$1,___$2,fn1__$1,meta57064));
});

}

return (new cljs.core.async.t_cljs$core$async57063(self__.f,self__.ch,self__.meta57061,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__57067 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__57067) : self__.f.call(null,G__57067));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async57060.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57060.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async57060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57061","meta57061",-93184397,null)], null);
}));

(cljs.core.async.t_cljs$core$async57060.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57060");

(cljs.core.async.t_cljs$core$async57060.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57060");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57060.
 */
cljs.core.async.__GT_t_cljs$core$async57060 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57060(f__$1,ch__$1,meta57061){
return (new cljs.core.async.t_cljs$core$async57060(f__$1,ch__$1,meta57061));
});

}

return (new cljs.core.async.t_cljs$core$async57060(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57068 = (function (f,ch,meta57069){
this.f = f;
this.ch = ch;
this.meta57069 = meta57069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57070,meta57069__$1){
var self__ = this;
var _57070__$1 = this;
return (new cljs.core.async.t_cljs$core$async57068(self__.f,self__.ch,meta57069__$1));
}));

(cljs.core.async.t_cljs$core$async57068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57070){
var self__ = this;
var _57070__$1 = this;
return self__.meta57069;
}));

(cljs.core.async.t_cljs$core$async57068.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57068.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57068.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57068.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57068.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57068.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async57068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57069","meta57069",1097874283,null)], null);
}));

(cljs.core.async.t_cljs$core$async57068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57068");

(cljs.core.async.t_cljs$core$async57068.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57068.
 */
cljs.core.async.__GT_t_cljs$core$async57068 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async57068(f__$1,ch__$1,meta57069){
return (new cljs.core.async.t_cljs$core$async57068(f__$1,ch__$1,meta57069));
});

}

return (new cljs.core.async.t_cljs$core$async57068(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57071 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57071 = (function (p,ch,meta57072){
this.p = p;
this.ch = ch;
this.meta57072 = meta57072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57073,meta57072__$1){
var self__ = this;
var _57073__$1 = this;
return (new cljs.core.async.t_cljs$core$async57071(self__.p,self__.ch,meta57072__$1));
}));

(cljs.core.async.t_cljs$core$async57071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57073){
var self__ = this;
var _57073__$1 = this;
return self__.meta57072;
}));

(cljs.core.async.t_cljs$core$async57071.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57071.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57071.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57071.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async57071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57072","meta57072",1620559457,null)], null);
}));

(cljs.core.async.t_cljs$core$async57071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57071");

(cljs.core.async.t_cljs$core$async57071.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57071.
 */
cljs.core.async.__GT_t_cljs$core$async57071 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async57071(p__$1,ch__$1,meta57072){
return (new cljs.core.async.t_cljs$core$async57071(p__$1,ch__$1,meta57072));
});

}

return (new cljs.core.async.t_cljs$core$async57071(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__57075 = arguments.length;
switch (G__57075) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55908__auto___58175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_57096){
var state_val_57097 = (state_57096[(1)]);
if((state_val_57097 === (7))){
var inst_57092 = (state_57096[(2)]);
var state_57096__$1 = state_57096;
var statearr_57098_58176 = state_57096__$1;
(statearr_57098_58176[(2)] = inst_57092);

(statearr_57098_58176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (1))){
var state_57096__$1 = state_57096;
var statearr_57099_58177 = state_57096__$1;
(statearr_57099_58177[(2)] = null);

(statearr_57099_58177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (4))){
var inst_57078 = (state_57096[(7)]);
var inst_57078__$1 = (state_57096[(2)]);
var inst_57079 = (inst_57078__$1 == null);
var state_57096__$1 = (function (){var statearr_57100 = state_57096;
(statearr_57100[(7)] = inst_57078__$1);

return statearr_57100;
})();
if(cljs.core.truth_(inst_57079)){
var statearr_57101_58179 = state_57096__$1;
(statearr_57101_58179[(1)] = (5));

} else {
var statearr_57102_58180 = state_57096__$1;
(statearr_57102_58180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (6))){
var inst_57078 = (state_57096[(7)]);
var inst_57083 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57078) : p.call(null,inst_57078));
var state_57096__$1 = state_57096;
if(cljs.core.truth_(inst_57083)){
var statearr_57103_58181 = state_57096__$1;
(statearr_57103_58181[(1)] = (8));

} else {
var statearr_57104_58182 = state_57096__$1;
(statearr_57104_58182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (3))){
var inst_57094 = (state_57096[(2)]);
var state_57096__$1 = state_57096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57096__$1,inst_57094);
} else {
if((state_val_57097 === (2))){
var state_57096__$1 = state_57096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57096__$1,(4),ch);
} else {
if((state_val_57097 === (11))){
var inst_57086 = (state_57096[(2)]);
var state_57096__$1 = state_57096;
var statearr_57105_58184 = state_57096__$1;
(statearr_57105_58184[(2)] = inst_57086);

(statearr_57105_58184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (9))){
var state_57096__$1 = state_57096;
var statearr_57106_58186 = state_57096__$1;
(statearr_57106_58186[(2)] = null);

(statearr_57106_58186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (5))){
var inst_57081 = cljs.core.async.close_BANG_(out);
var state_57096__$1 = state_57096;
var statearr_57107_58187 = state_57096__$1;
(statearr_57107_58187[(2)] = inst_57081);

(statearr_57107_58187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (10))){
var inst_57089 = (state_57096[(2)]);
var state_57096__$1 = (function (){var statearr_57108 = state_57096;
(statearr_57108[(8)] = inst_57089);

return statearr_57108;
})();
var statearr_57109_58189 = state_57096__$1;
(statearr_57109_58189[(2)] = null);

(statearr_57109_58189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (8))){
var inst_57078 = (state_57096[(7)]);
var state_57096__$1 = state_57096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57096__$1,(11),out,inst_57078);
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
});
return (function() {
var cljs$core$async$state_machine__55808__auto__ = null;
var cljs$core$async$state_machine__55808__auto____0 = (function (){
var statearr_57110 = [null,null,null,null,null,null,null,null,null];
(statearr_57110[(0)] = cljs$core$async$state_machine__55808__auto__);

(statearr_57110[(1)] = (1));

return statearr_57110;
});
var cljs$core$async$state_machine__55808__auto____1 = (function (state_57096){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_57096);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e57111){if((e57111 instanceof Object)){
var ex__55811__auto__ = e57111;
var statearr_57112_58191 = state_57096;
(statearr_57112_58191[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58192 = state_57096;
state_57096 = G__58192;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$state_machine__55808__auto__ = function(state_57096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55808__auto____1.call(this,state_57096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55808__auto____0;
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55808__auto____1;
return cljs$core$async$state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_57113 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_57113[(6)] = c__55908__auto___58175);

return statearr_57113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57115 = arguments.length;
switch (G__57115) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__55908__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_57177){
var state_val_57178 = (state_57177[(1)]);
if((state_val_57178 === (7))){
var inst_57173 = (state_57177[(2)]);
var state_57177__$1 = state_57177;
var statearr_57179_58195 = state_57177__$1;
(statearr_57179_58195[(2)] = inst_57173);

(statearr_57179_58195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (20))){
var inst_57143 = (state_57177[(7)]);
var inst_57154 = (state_57177[(2)]);
var inst_57155 = cljs.core.next(inst_57143);
var inst_57129 = inst_57155;
var inst_57130 = null;
var inst_57131 = (0);
var inst_57132 = (0);
var state_57177__$1 = (function (){var statearr_57180 = state_57177;
(statearr_57180[(8)] = inst_57132);

(statearr_57180[(9)] = inst_57129);

(statearr_57180[(10)] = inst_57131);

(statearr_57180[(11)] = inst_57130);

(statearr_57180[(12)] = inst_57154);

return statearr_57180;
})();
var statearr_57181_58196 = state_57177__$1;
(statearr_57181_58196[(2)] = null);

(statearr_57181_58196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (1))){
var state_57177__$1 = state_57177;
var statearr_57182_58197 = state_57177__$1;
(statearr_57182_58197[(2)] = null);

(statearr_57182_58197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (4))){
var inst_57118 = (state_57177[(13)]);
var inst_57118__$1 = (state_57177[(2)]);
var inst_57119 = (inst_57118__$1 == null);
var state_57177__$1 = (function (){var statearr_57183 = state_57177;
(statearr_57183[(13)] = inst_57118__$1);

return statearr_57183;
})();
if(cljs.core.truth_(inst_57119)){
var statearr_57184_58198 = state_57177__$1;
(statearr_57184_58198[(1)] = (5));

} else {
var statearr_57185_58199 = state_57177__$1;
(statearr_57185_58199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (15))){
var state_57177__$1 = state_57177;
var statearr_57189_58201 = state_57177__$1;
(statearr_57189_58201[(2)] = null);

(statearr_57189_58201[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (21))){
var state_57177__$1 = state_57177;
var statearr_57190_58205 = state_57177__$1;
(statearr_57190_58205[(2)] = null);

(statearr_57190_58205[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (13))){
var inst_57132 = (state_57177[(8)]);
var inst_57129 = (state_57177[(9)]);
var inst_57131 = (state_57177[(10)]);
var inst_57130 = (state_57177[(11)]);
var inst_57139 = (state_57177[(2)]);
var inst_57140 = (inst_57132 + (1));
var tmp57186 = inst_57129;
var tmp57187 = inst_57131;
var tmp57188 = inst_57130;
var inst_57129__$1 = tmp57186;
var inst_57130__$1 = tmp57188;
var inst_57131__$1 = tmp57187;
var inst_57132__$1 = inst_57140;
var state_57177__$1 = (function (){var statearr_57191 = state_57177;
(statearr_57191[(14)] = inst_57139);

(statearr_57191[(8)] = inst_57132__$1);

(statearr_57191[(9)] = inst_57129__$1);

(statearr_57191[(10)] = inst_57131__$1);

(statearr_57191[(11)] = inst_57130__$1);

return statearr_57191;
})();
var statearr_57192_58215 = state_57177__$1;
(statearr_57192_58215[(2)] = null);

(statearr_57192_58215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (22))){
var state_57177__$1 = state_57177;
var statearr_57193_58219 = state_57177__$1;
(statearr_57193_58219[(2)] = null);

(statearr_57193_58219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (6))){
var inst_57118 = (state_57177[(13)]);
var inst_57127 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57118) : f.call(null,inst_57118));
var inst_57128 = cljs.core.seq(inst_57127);
var inst_57129 = inst_57128;
var inst_57130 = null;
var inst_57131 = (0);
var inst_57132 = (0);
var state_57177__$1 = (function (){var statearr_57194 = state_57177;
(statearr_57194[(8)] = inst_57132);

(statearr_57194[(9)] = inst_57129);

(statearr_57194[(10)] = inst_57131);

(statearr_57194[(11)] = inst_57130);

return statearr_57194;
})();
var statearr_57195_58225 = state_57177__$1;
(statearr_57195_58225[(2)] = null);

(statearr_57195_58225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (17))){
var inst_57143 = (state_57177[(7)]);
var inst_57147 = cljs.core.chunk_first(inst_57143);
var inst_57148 = cljs.core.chunk_rest(inst_57143);
var inst_57149 = cljs.core.count(inst_57147);
var inst_57129 = inst_57148;
var inst_57130 = inst_57147;
var inst_57131 = inst_57149;
var inst_57132 = (0);
var state_57177__$1 = (function (){var statearr_57196 = state_57177;
(statearr_57196[(8)] = inst_57132);

(statearr_57196[(9)] = inst_57129);

(statearr_57196[(10)] = inst_57131);

(statearr_57196[(11)] = inst_57130);

return statearr_57196;
})();
var statearr_57197_58226 = state_57177__$1;
(statearr_57197_58226[(2)] = null);

(statearr_57197_58226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (3))){
var inst_57175 = (state_57177[(2)]);
var state_57177__$1 = state_57177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57177__$1,inst_57175);
} else {
if((state_val_57178 === (12))){
var inst_57163 = (state_57177[(2)]);
var state_57177__$1 = state_57177;
var statearr_57198_58227 = state_57177__$1;
(statearr_57198_58227[(2)] = inst_57163);

(statearr_57198_58227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (2))){
var state_57177__$1 = state_57177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57177__$1,(4),in$);
} else {
if((state_val_57178 === (23))){
var inst_57171 = (state_57177[(2)]);
var state_57177__$1 = state_57177;
var statearr_57199_58228 = state_57177__$1;
(statearr_57199_58228[(2)] = inst_57171);

(statearr_57199_58228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (19))){
var inst_57158 = (state_57177[(2)]);
var state_57177__$1 = state_57177;
var statearr_57200_58229 = state_57177__$1;
(statearr_57200_58229[(2)] = inst_57158);

(statearr_57200_58229[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (11))){
var inst_57129 = (state_57177[(9)]);
var inst_57143 = (state_57177[(7)]);
var inst_57143__$1 = cljs.core.seq(inst_57129);
var state_57177__$1 = (function (){var statearr_57201 = state_57177;
(statearr_57201[(7)] = inst_57143__$1);

return statearr_57201;
})();
if(inst_57143__$1){
var statearr_57202_58234 = state_57177__$1;
(statearr_57202_58234[(1)] = (14));

} else {
var statearr_57203_58235 = state_57177__$1;
(statearr_57203_58235[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (9))){
var inst_57165 = (state_57177[(2)]);
var inst_57166 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_57177__$1 = (function (){var statearr_57204 = state_57177;
(statearr_57204[(15)] = inst_57165);

return statearr_57204;
})();
if(cljs.core.truth_(inst_57166)){
var statearr_57205_58240 = state_57177__$1;
(statearr_57205_58240[(1)] = (21));

} else {
var statearr_57206_58245 = state_57177__$1;
(statearr_57206_58245[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (5))){
var inst_57121 = cljs.core.async.close_BANG_(out);
var state_57177__$1 = state_57177;
var statearr_57207_58246 = state_57177__$1;
(statearr_57207_58246[(2)] = inst_57121);

(statearr_57207_58246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (14))){
var inst_57143 = (state_57177[(7)]);
var inst_57145 = cljs.core.chunked_seq_QMARK_(inst_57143);
var state_57177__$1 = state_57177;
if(inst_57145){
var statearr_57208_58247 = state_57177__$1;
(statearr_57208_58247[(1)] = (17));

} else {
var statearr_57209_58248 = state_57177__$1;
(statearr_57209_58248[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (16))){
var inst_57161 = (state_57177[(2)]);
var state_57177__$1 = state_57177;
var statearr_57210_58252 = state_57177__$1;
(statearr_57210_58252[(2)] = inst_57161);

(statearr_57210_58252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57178 === (10))){
var inst_57132 = (state_57177[(8)]);
var inst_57130 = (state_57177[(11)]);
var inst_57137 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_57130,inst_57132);
var state_57177__$1 = state_57177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57177__$1,(13),out,inst_57137);
} else {
if((state_val_57178 === (18))){
var inst_57143 = (state_57177[(7)]);
var inst_57152 = cljs.core.first(inst_57143);
var state_57177__$1 = state_57177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57177__$1,(20),out,inst_57152);
} else {
if((state_val_57178 === (8))){
var inst_57132 = (state_57177[(8)]);
var inst_57131 = (state_57177[(10)]);
var inst_57134 = (inst_57132 < inst_57131);
var inst_57135 = inst_57134;
var state_57177__$1 = state_57177;
if(cljs.core.truth_(inst_57135)){
var statearr_57211_58264 = state_57177__$1;
(statearr_57211_58264[(1)] = (10));

} else {
var statearr_57212_58265 = state_57177__$1;
(statearr_57212_58265[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__55808__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__55808__auto____0 = (function (){
var statearr_57213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57213[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__55808__auto__);

(statearr_57213[(1)] = (1));

return statearr_57213;
});
var cljs$core$async$mapcat_STAR__$_state_machine__55808__auto____1 = (function (state_57177){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_57177);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e57214){if((e57214 instanceof Object)){
var ex__55811__auto__ = e57214;
var statearr_57215_58273 = state_57177;
(statearr_57215_58273[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57214;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58274 = state_57177;
state_57177 = G__58274;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__55808__auto__ = function(state_57177){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__55808__auto____1.call(this,state_57177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__55808__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__55808__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_57216 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_57216[(6)] = c__55908__auto__);

return statearr_57216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));

return c__55908__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__57218 = arguments.length;
switch (G__57218) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__57220 = arguments.length;
switch (G__57220) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__57222 = arguments.length;
switch (G__57222) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55908__auto___58279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_57246){
var state_val_57247 = (state_57246[(1)]);
if((state_val_57247 === (7))){
var inst_57241 = (state_57246[(2)]);
var state_57246__$1 = state_57246;
var statearr_57248_58280 = state_57246__$1;
(statearr_57248_58280[(2)] = inst_57241);

(statearr_57248_58280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57247 === (1))){
var inst_57223 = null;
var state_57246__$1 = (function (){var statearr_57249 = state_57246;
(statearr_57249[(7)] = inst_57223);

return statearr_57249;
})();
var statearr_57250_58281 = state_57246__$1;
(statearr_57250_58281[(2)] = null);

(statearr_57250_58281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57247 === (4))){
var inst_57226 = (state_57246[(8)]);
var inst_57226__$1 = (state_57246[(2)]);
var inst_57227 = (inst_57226__$1 == null);
var inst_57228 = cljs.core.not(inst_57227);
var state_57246__$1 = (function (){var statearr_57251 = state_57246;
(statearr_57251[(8)] = inst_57226__$1);

return statearr_57251;
})();
if(inst_57228){
var statearr_57252_58282 = state_57246__$1;
(statearr_57252_58282[(1)] = (5));

} else {
var statearr_57253_58283 = state_57246__$1;
(statearr_57253_58283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57247 === (6))){
var state_57246__$1 = state_57246;
var statearr_57254_58284 = state_57246__$1;
(statearr_57254_58284[(2)] = null);

(statearr_57254_58284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57247 === (3))){
var inst_57243 = (state_57246[(2)]);
var inst_57244 = cljs.core.async.close_BANG_(out);
var state_57246__$1 = (function (){var statearr_57255 = state_57246;
(statearr_57255[(9)] = inst_57243);

return statearr_57255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57246__$1,inst_57244);
} else {
if((state_val_57247 === (2))){
var state_57246__$1 = state_57246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57246__$1,(4),ch);
} else {
if((state_val_57247 === (11))){
var inst_57226 = (state_57246[(8)]);
var inst_57235 = (state_57246[(2)]);
var inst_57223 = inst_57226;
var state_57246__$1 = (function (){var statearr_57256 = state_57246;
(statearr_57256[(7)] = inst_57223);

(statearr_57256[(10)] = inst_57235);

return statearr_57256;
})();
var statearr_57257_58286 = state_57246__$1;
(statearr_57257_58286[(2)] = null);

(statearr_57257_58286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57247 === (9))){
var inst_57226 = (state_57246[(8)]);
var state_57246__$1 = state_57246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57246__$1,(11),out,inst_57226);
} else {
if((state_val_57247 === (5))){
var inst_57223 = (state_57246[(7)]);
var inst_57226 = (state_57246[(8)]);
var inst_57230 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57226,inst_57223);
var state_57246__$1 = state_57246;
if(inst_57230){
var statearr_57259_58287 = state_57246__$1;
(statearr_57259_58287[(1)] = (8));

} else {
var statearr_57260_58288 = state_57246__$1;
(statearr_57260_58288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57247 === (10))){
var inst_57238 = (state_57246[(2)]);
var state_57246__$1 = state_57246;
var statearr_57261_58289 = state_57246__$1;
(statearr_57261_58289[(2)] = inst_57238);

(statearr_57261_58289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57247 === (8))){
var inst_57223 = (state_57246[(7)]);
var tmp57258 = inst_57223;
var inst_57223__$1 = tmp57258;
var state_57246__$1 = (function (){var statearr_57262 = state_57246;
(statearr_57262[(7)] = inst_57223__$1);

return statearr_57262;
})();
var statearr_57263_58290 = state_57246__$1;
(statearr_57263_58290[(2)] = null);

(statearr_57263_58290[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__55808__auto__ = null;
var cljs$core$async$state_machine__55808__auto____0 = (function (){
var statearr_57264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57264[(0)] = cljs$core$async$state_machine__55808__auto__);

(statearr_57264[(1)] = (1));

return statearr_57264;
});
var cljs$core$async$state_machine__55808__auto____1 = (function (state_57246){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_57246);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e57265){if((e57265 instanceof Object)){
var ex__55811__auto__ = e57265;
var statearr_57266_58291 = state_57246;
(statearr_57266_58291[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58292 = state_57246;
state_57246 = G__58292;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$state_machine__55808__auto__ = function(state_57246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55808__auto____1.call(this,state_57246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55808__auto____0;
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55808__auto____1;
return cljs$core$async$state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_57267 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_57267[(6)] = c__55908__auto___58279);

return statearr_57267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__57269 = arguments.length;
switch (G__57269) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55908__auto___58294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_57307){
var state_val_57308 = (state_57307[(1)]);
if((state_val_57308 === (7))){
var inst_57303 = (state_57307[(2)]);
var state_57307__$1 = state_57307;
var statearr_57309_58295 = state_57307__$1;
(statearr_57309_58295[(2)] = inst_57303);

(statearr_57309_58295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (1))){
var inst_57270 = (new Array(n));
var inst_57271 = inst_57270;
var inst_57272 = (0);
var state_57307__$1 = (function (){var statearr_57310 = state_57307;
(statearr_57310[(7)] = inst_57272);

(statearr_57310[(8)] = inst_57271);

return statearr_57310;
})();
var statearr_57311_58296 = state_57307__$1;
(statearr_57311_58296[(2)] = null);

(statearr_57311_58296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (4))){
var inst_57275 = (state_57307[(9)]);
var inst_57275__$1 = (state_57307[(2)]);
var inst_57276 = (inst_57275__$1 == null);
var inst_57277 = cljs.core.not(inst_57276);
var state_57307__$1 = (function (){var statearr_57312 = state_57307;
(statearr_57312[(9)] = inst_57275__$1);

return statearr_57312;
})();
if(inst_57277){
var statearr_57313_58297 = state_57307__$1;
(statearr_57313_58297[(1)] = (5));

} else {
var statearr_57314_58299 = state_57307__$1;
(statearr_57314_58299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (15))){
var inst_57297 = (state_57307[(2)]);
var state_57307__$1 = state_57307;
var statearr_57315_58301 = state_57307__$1;
(statearr_57315_58301[(2)] = inst_57297);

(statearr_57315_58301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (13))){
var state_57307__$1 = state_57307;
var statearr_57316_58302 = state_57307__$1;
(statearr_57316_58302[(2)] = null);

(statearr_57316_58302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (6))){
var inst_57272 = (state_57307[(7)]);
var inst_57293 = (inst_57272 > (0));
var state_57307__$1 = state_57307;
if(cljs.core.truth_(inst_57293)){
var statearr_57317_58303 = state_57307__$1;
(statearr_57317_58303[(1)] = (12));

} else {
var statearr_57318_58304 = state_57307__$1;
(statearr_57318_58304[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (3))){
var inst_57305 = (state_57307[(2)]);
var state_57307__$1 = state_57307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57307__$1,inst_57305);
} else {
if((state_val_57308 === (12))){
var inst_57271 = (state_57307[(8)]);
var inst_57295 = cljs.core.vec(inst_57271);
var state_57307__$1 = state_57307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57307__$1,(15),out,inst_57295);
} else {
if((state_val_57308 === (2))){
var state_57307__$1 = state_57307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57307__$1,(4),ch);
} else {
if((state_val_57308 === (11))){
var inst_57287 = (state_57307[(2)]);
var inst_57288 = (new Array(n));
var inst_57271 = inst_57288;
var inst_57272 = (0);
var state_57307__$1 = (function (){var statearr_57319 = state_57307;
(statearr_57319[(7)] = inst_57272);

(statearr_57319[(10)] = inst_57287);

(statearr_57319[(8)] = inst_57271);

return statearr_57319;
})();
var statearr_57320_58305 = state_57307__$1;
(statearr_57320_58305[(2)] = null);

(statearr_57320_58305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (9))){
var inst_57271 = (state_57307[(8)]);
var inst_57285 = cljs.core.vec(inst_57271);
var state_57307__$1 = state_57307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57307__$1,(11),out,inst_57285);
} else {
if((state_val_57308 === (5))){
var inst_57280 = (state_57307[(11)]);
var inst_57272 = (state_57307[(7)]);
var inst_57275 = (state_57307[(9)]);
var inst_57271 = (state_57307[(8)]);
var inst_57279 = (inst_57271[inst_57272] = inst_57275);
var inst_57280__$1 = (inst_57272 + (1));
var inst_57281 = (inst_57280__$1 < n);
var state_57307__$1 = (function (){var statearr_57321 = state_57307;
(statearr_57321[(11)] = inst_57280__$1);

(statearr_57321[(12)] = inst_57279);

return statearr_57321;
})();
if(cljs.core.truth_(inst_57281)){
var statearr_57322_58311 = state_57307__$1;
(statearr_57322_58311[(1)] = (8));

} else {
var statearr_57323_58313 = state_57307__$1;
(statearr_57323_58313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (14))){
var inst_57300 = (state_57307[(2)]);
var inst_57301 = cljs.core.async.close_BANG_(out);
var state_57307__$1 = (function (){var statearr_57325 = state_57307;
(statearr_57325[(13)] = inst_57300);

return statearr_57325;
})();
var statearr_57326_58319 = state_57307__$1;
(statearr_57326_58319[(2)] = inst_57301);

(statearr_57326_58319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (10))){
var inst_57291 = (state_57307[(2)]);
var state_57307__$1 = state_57307;
var statearr_57327_58324 = state_57307__$1;
(statearr_57327_58324[(2)] = inst_57291);

(statearr_57327_58324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57308 === (8))){
var inst_57280 = (state_57307[(11)]);
var inst_57271 = (state_57307[(8)]);
var tmp57324 = inst_57271;
var inst_57271__$1 = tmp57324;
var inst_57272 = inst_57280;
var state_57307__$1 = (function (){var statearr_57328 = state_57307;
(statearr_57328[(7)] = inst_57272);

(statearr_57328[(8)] = inst_57271__$1);

return statearr_57328;
})();
var statearr_57329_58336 = state_57307__$1;
(statearr_57329_58336[(2)] = null);

(statearr_57329_58336[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__55808__auto__ = null;
var cljs$core$async$state_machine__55808__auto____0 = (function (){
var statearr_57330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57330[(0)] = cljs$core$async$state_machine__55808__auto__);

(statearr_57330[(1)] = (1));

return statearr_57330;
});
var cljs$core$async$state_machine__55808__auto____1 = (function (state_57307){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_57307);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e57331){if((e57331 instanceof Object)){
var ex__55811__auto__ = e57331;
var statearr_57332_58350 = state_57307;
(statearr_57332_58350[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58351 = state_57307;
state_57307 = G__58351;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$state_machine__55808__auto__ = function(state_57307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55808__auto____1.call(this,state_57307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55808__auto____0;
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55808__auto____1;
return cljs$core$async$state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_57333 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_57333[(6)] = c__55908__auto___58294);

return statearr_57333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__57335 = arguments.length;
switch (G__57335) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55908__auto___58353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_57377){
var state_val_57378 = (state_57377[(1)]);
if((state_val_57378 === (7))){
var inst_57373 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57379_58354 = state_57377__$1;
(statearr_57379_58354[(2)] = inst_57373);

(statearr_57379_58354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (1))){
var inst_57336 = [];
var inst_57337 = inst_57336;
var inst_57338 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_57377__$1 = (function (){var statearr_57380 = state_57377;
(statearr_57380[(7)] = inst_57337);

(statearr_57380[(8)] = inst_57338);

return statearr_57380;
})();
var statearr_57381_58355 = state_57377__$1;
(statearr_57381_58355[(2)] = null);

(statearr_57381_58355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (4))){
var inst_57341 = (state_57377[(9)]);
var inst_57341__$1 = (state_57377[(2)]);
var inst_57342 = (inst_57341__$1 == null);
var inst_57343 = cljs.core.not(inst_57342);
var state_57377__$1 = (function (){var statearr_57382 = state_57377;
(statearr_57382[(9)] = inst_57341__$1);

return statearr_57382;
})();
if(inst_57343){
var statearr_57383_58356 = state_57377__$1;
(statearr_57383_58356[(1)] = (5));

} else {
var statearr_57384_58357 = state_57377__$1;
(statearr_57384_58357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (15))){
var inst_57367 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57385_58358 = state_57377__$1;
(statearr_57385_58358[(2)] = inst_57367);

(statearr_57385_58358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (13))){
var state_57377__$1 = state_57377;
var statearr_57386_58359 = state_57377__$1;
(statearr_57386_58359[(2)] = null);

(statearr_57386_58359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (6))){
var inst_57337 = (state_57377[(7)]);
var inst_57362 = inst_57337.length;
var inst_57363 = (inst_57362 > (0));
var state_57377__$1 = state_57377;
if(cljs.core.truth_(inst_57363)){
var statearr_57387_58360 = state_57377__$1;
(statearr_57387_58360[(1)] = (12));

} else {
var statearr_57388_58361 = state_57377__$1;
(statearr_57388_58361[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (3))){
var inst_57375 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57377__$1,inst_57375);
} else {
if((state_val_57378 === (12))){
var inst_57337 = (state_57377[(7)]);
var inst_57365 = cljs.core.vec(inst_57337);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57377__$1,(15),out,inst_57365);
} else {
if((state_val_57378 === (2))){
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57377__$1,(4),ch);
} else {
if((state_val_57378 === (11))){
var inst_57345 = (state_57377[(10)]);
var inst_57341 = (state_57377[(9)]);
var inst_57355 = (state_57377[(2)]);
var inst_57356 = [];
var inst_57357 = inst_57356.push(inst_57341);
var inst_57337 = inst_57356;
var inst_57338 = inst_57345;
var state_57377__$1 = (function (){var statearr_57389 = state_57377;
(statearr_57389[(7)] = inst_57337);

(statearr_57389[(11)] = inst_57355);

(statearr_57389[(8)] = inst_57338);

(statearr_57389[(12)] = inst_57357);

return statearr_57389;
})();
var statearr_57390_58364 = state_57377__$1;
(statearr_57390_58364[(2)] = null);

(statearr_57390_58364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (9))){
var inst_57337 = (state_57377[(7)]);
var inst_57353 = cljs.core.vec(inst_57337);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57377__$1,(11),out,inst_57353);
} else {
if((state_val_57378 === (5))){
var inst_57345 = (state_57377[(10)]);
var inst_57341 = (state_57377[(9)]);
var inst_57338 = (state_57377[(8)]);
var inst_57345__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57341) : f.call(null,inst_57341));
var inst_57346 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57345__$1,inst_57338);
var inst_57347 = cljs.core.keyword_identical_QMARK_(inst_57338,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_57348 = ((inst_57346) || (inst_57347));
var state_57377__$1 = (function (){var statearr_57391 = state_57377;
(statearr_57391[(10)] = inst_57345__$1);

return statearr_57391;
})();
if(cljs.core.truth_(inst_57348)){
var statearr_57392_58366 = state_57377__$1;
(statearr_57392_58366[(1)] = (8));

} else {
var statearr_57393_58367 = state_57377__$1;
(statearr_57393_58367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (14))){
var inst_57370 = (state_57377[(2)]);
var inst_57371 = cljs.core.async.close_BANG_(out);
var state_57377__$1 = (function (){var statearr_57395 = state_57377;
(statearr_57395[(13)] = inst_57370);

return statearr_57395;
})();
var statearr_57396_58368 = state_57377__$1;
(statearr_57396_58368[(2)] = inst_57371);

(statearr_57396_58368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (10))){
var inst_57360 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57397_58370 = state_57377__$1;
(statearr_57397_58370[(2)] = inst_57360);

(statearr_57397_58370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (8))){
var inst_57337 = (state_57377[(7)]);
var inst_57345 = (state_57377[(10)]);
var inst_57341 = (state_57377[(9)]);
var inst_57350 = inst_57337.push(inst_57341);
var tmp57394 = inst_57337;
var inst_57337__$1 = tmp57394;
var inst_57338 = inst_57345;
var state_57377__$1 = (function (){var statearr_57398 = state_57377;
(statearr_57398[(7)] = inst_57337__$1);

(statearr_57398[(14)] = inst_57350);

(statearr_57398[(8)] = inst_57338);

return statearr_57398;
})();
var statearr_57399_58371 = state_57377__$1;
(statearr_57399_58371[(2)] = null);

(statearr_57399_58371[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__55808__auto__ = null;
var cljs$core$async$state_machine__55808__auto____0 = (function (){
var statearr_57400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57400[(0)] = cljs$core$async$state_machine__55808__auto__);

(statearr_57400[(1)] = (1));

return statearr_57400;
});
var cljs$core$async$state_machine__55808__auto____1 = (function (state_57377){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_57377);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e57401){if((e57401 instanceof Object)){
var ex__55811__auto__ = e57401;
var statearr_57402_58381 = state_57377;
(statearr_57402_58381[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57401;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58386 = state_57377;
state_57377 = G__58386;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
cljs$core$async$state_machine__55808__auto__ = function(state_57377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55808__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55808__auto____1.call(this,state_57377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55808__auto____0;
cljs$core$async$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55808__auto____1;
return cljs$core$async$state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_57403 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_57403[(6)] = c__55908__auto___58353);

return statearr_57403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
