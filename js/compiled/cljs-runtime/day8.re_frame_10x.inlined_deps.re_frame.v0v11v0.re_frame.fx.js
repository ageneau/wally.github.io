goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__47722 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47723 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47723);

try{try{var seq__47725 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47726 = null;
var count__47727 = (0);
var i__47728 = (0);
while(true){
if((i__47728 < count__47727)){
var vec__47735 = chunk__47726.cljs$core$IIndexed$_nth$arity$2(null,i__47728);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47735,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47735,(1),null);
var temp__5733__auto___47832 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47832)){
var effect_fn_47833 = temp__5733__auto___47832;
(effect_fn_47833.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47833.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47833.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47834 = seq__47725;
var G__47835 = chunk__47726;
var G__47836 = count__47727;
var G__47837 = (i__47728 + (1));
seq__47725 = G__47834;
chunk__47726 = G__47835;
count__47727 = G__47836;
i__47728 = G__47837;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47725);
if(temp__5735__auto__){
var seq__47725__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47725__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47725__$1);
var G__47838 = cljs.core.chunk_rest(seq__47725__$1);
var G__47839 = c__4609__auto__;
var G__47840 = cljs.core.count(c__4609__auto__);
var G__47841 = (0);
seq__47725 = G__47838;
chunk__47726 = G__47839;
count__47727 = G__47840;
i__47728 = G__47841;
continue;
} else {
var vec__47738 = cljs.core.first(seq__47725__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47738,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47738,(1),null);
var temp__5733__auto___47842 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47842)){
var effect_fn_47843 = temp__5733__auto___47842;
(effect_fn_47843.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47843.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47843.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47844 = cljs.core.next(seq__47725__$1);
var G__47845 = null;
var G__47846 = (0);
var G__47847 = (0);
seq__47725 = G__47844;
chunk__47726 = G__47845;
count__47727 = G__47846;
i__47728 = G__47847;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__47477__auto___47848 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__47478__auto___47849 = (end__47477__auto___47848 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47478__auto___47849,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__47477__auto___47848);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47722);
}} else {
var seq__47741 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47742 = null;
var count__47743 = (0);
var i__47744 = (0);
while(true){
if((i__47744 < count__47743)){
var vec__47751 = chunk__47742.cljs$core$IIndexed$_nth$arity$2(null,i__47744);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47751,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47751,(1),null);
var temp__5733__auto___47850 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47850)){
var effect_fn_47851 = temp__5733__auto___47850;
(effect_fn_47851.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47851.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47851.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47852 = seq__47741;
var G__47853 = chunk__47742;
var G__47854 = count__47743;
var G__47855 = (i__47744 + (1));
seq__47741 = G__47852;
chunk__47742 = G__47853;
count__47743 = G__47854;
i__47744 = G__47855;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47741);
if(temp__5735__auto__){
var seq__47741__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47741__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47741__$1);
var G__47856 = cljs.core.chunk_rest(seq__47741__$1);
var G__47857 = c__4609__auto__;
var G__47858 = cljs.core.count(c__4609__auto__);
var G__47859 = (0);
seq__47741 = G__47856;
chunk__47742 = G__47857;
count__47743 = G__47858;
i__47744 = G__47859;
continue;
} else {
var vec__47754 = cljs.core.first(seq__47741__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47754,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47754,(1),null);
var temp__5733__auto___47860 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47860)){
var effect_fn_47861 = temp__5733__auto___47860;
(effect_fn_47861.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47861.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47861.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47862 = cljs.core.next(seq__47741__$1);
var G__47863 = null;
var G__47864 = (0);
var G__47865 = (0);
seq__47741 = G__47862;
chunk__47742 = G__47863;
count__47743 = G__47864;
i__47744 = G__47865;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47758 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47759 = null;
var count__47760 = (0);
var i__47761 = (0);
while(true){
if((i__47761 < count__47760)){
var map__47783 = chunk__47759.cljs$core$IIndexed$_nth$arity$2(null,i__47761);
var map__47783__$1 = (((((!((map__47783 == null))))?(((((map__47783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47783):map__47783);
var effect = map__47783__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47783__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47783__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47758,chunk__47759,count__47760,i__47761,map__47783,map__47783__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47758,chunk__47759,count__47760,i__47761,map__47783,map__47783__$1,effect,ms,dispatch))
,ms);
}


var G__47866 = seq__47758;
var G__47867 = chunk__47759;
var G__47868 = count__47760;
var G__47869 = (i__47761 + (1));
seq__47758 = G__47866;
chunk__47759 = G__47867;
count__47760 = G__47868;
i__47761 = G__47869;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47758);
if(temp__5735__auto__){
var seq__47758__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47758__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47758__$1);
var G__47870 = cljs.core.chunk_rest(seq__47758__$1);
var G__47871 = c__4609__auto__;
var G__47872 = cljs.core.count(c__4609__auto__);
var G__47873 = (0);
seq__47758 = G__47870;
chunk__47759 = G__47871;
count__47760 = G__47872;
i__47761 = G__47873;
continue;
} else {
var map__47789 = cljs.core.first(seq__47758__$1);
var map__47789__$1 = (((((!((map__47789 == null))))?(((((map__47789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47789):map__47789);
var effect = map__47789__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47789__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47789__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47758,chunk__47759,count__47760,i__47761,map__47789,map__47789__$1,effect,ms,dispatch,seq__47758__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47758,chunk__47759,count__47760,i__47761,map__47789,map__47789__$1,effect,ms,dispatch,seq__47758__$1,temp__5735__auto__))
,ms);
}


var G__47874 = cljs.core.next(seq__47758__$1);
var G__47875 = null;
var G__47876 = (0);
var G__47877 = (0);
seq__47758 = G__47874;
chunk__47759 = G__47875;
count__47760 = G__47876;
i__47761 = G__47877;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__47799 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47800 = null;
var count__47801 = (0);
var i__47802 = (0);
while(true){
if((i__47802 < count__47801)){
var event = chunk__47800.cljs$core$IIndexed$_nth$arity$2(null,i__47802);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__47879 = seq__47799;
var G__47880 = chunk__47800;
var G__47881 = count__47801;
var G__47882 = (i__47802 + (1));
seq__47799 = G__47879;
chunk__47800 = G__47880;
count__47801 = G__47881;
i__47802 = G__47882;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47799);
if(temp__5735__auto__){
var seq__47799__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47799__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47799__$1);
var G__47883 = cljs.core.chunk_rest(seq__47799__$1);
var G__47884 = c__4609__auto__;
var G__47885 = cljs.core.count(c__4609__auto__);
var G__47886 = (0);
seq__47799 = G__47883;
chunk__47800 = G__47884;
count__47801 = G__47885;
i__47802 = G__47886;
continue;
} else {
var event = cljs.core.first(seq__47799__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__47887 = cljs.core.next(seq__47799__$1);
var G__47888 = null;
var G__47889 = (0);
var G__47890 = (0);
seq__47799 = G__47887;
chunk__47800 = G__47888;
count__47801 = G__47889;
i__47802 = G__47890;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__47828 = cljs.core.seq(value);
var chunk__47829 = null;
var count__47830 = (0);
var i__47831 = (0);
while(true){
if((i__47831 < count__47830)){
var event = chunk__47829.cljs$core$IIndexed$_nth$arity$2(null,i__47831);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47891 = seq__47828;
var G__47892 = chunk__47829;
var G__47893 = count__47830;
var G__47894 = (i__47831 + (1));
seq__47828 = G__47891;
chunk__47829 = G__47892;
count__47830 = G__47893;
i__47831 = G__47894;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47828);
if(temp__5735__auto__){
var seq__47828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47828__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47828__$1);
var G__47895 = cljs.core.chunk_rest(seq__47828__$1);
var G__47896 = c__4609__auto__;
var G__47897 = cljs.core.count(c__4609__auto__);
var G__47898 = (0);
seq__47828 = G__47895;
chunk__47829 = G__47896;
count__47830 = G__47897;
i__47831 = G__47898;
continue;
} else {
var event = cljs.core.first(seq__47828__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47899 = cljs.core.next(seq__47828__$1);
var G__47900 = null;
var G__47901 = (0);
var G__47902 = (0);
seq__47828 = G__47899;
chunk__47829 = G__47900;
count__47830 = G__47901;
i__47831 = G__47902;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
