goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52659 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52660 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52660);

try{try{var seq__52661 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52662 = null;
var count__52663 = (0);
var i__52664 = (0);
while(true){
if((i__52664 < count__52663)){
var vec__52671 = chunk__52662.cljs$core$IIndexed$_nth$arity$2(null,i__52664);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52671,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52671,(1),null);
var temp__5733__auto___52751 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52751)){
var effect_fn_52752 = temp__5733__auto___52751;
(effect_fn_52752.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52752.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52752.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52753 = seq__52661;
var G__52754 = chunk__52662;
var G__52755 = count__52663;
var G__52756 = (i__52664 + (1));
seq__52661 = G__52753;
chunk__52662 = G__52754;
count__52663 = G__52755;
i__52664 = G__52756;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52661);
if(temp__5735__auto__){
var seq__52661__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52661__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52661__$1);
var G__52757 = cljs.core.chunk_rest(seq__52661__$1);
var G__52758 = c__4609__auto__;
var G__52759 = cljs.core.count(c__4609__auto__);
var G__52760 = (0);
seq__52661 = G__52757;
chunk__52662 = G__52758;
count__52663 = G__52759;
i__52664 = G__52760;
continue;
} else {
var vec__52675 = cljs.core.first(seq__52661__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52675,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52675,(1),null);
var temp__5733__auto___52761 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52761)){
var effect_fn_52762 = temp__5733__auto___52761;
(effect_fn_52762.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52762.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52762.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52763 = cljs.core.next(seq__52661__$1);
var G__52764 = null;
var G__52765 = (0);
var G__52766 = (0);
seq__52661 = G__52763;
chunk__52662 = G__52764;
count__52663 = G__52765;
i__52664 = G__52766;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52393__auto___52767 = re_frame.interop.now();
var duration__52394__auto___52768 = (end__52393__auto___52767 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52394__auto___52768,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52393__auto___52767);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52659);
}} else {
var seq__52678 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52679 = null;
var count__52680 = (0);
var i__52681 = (0);
while(true){
if((i__52681 < count__52680)){
var vec__52688 = chunk__52679.cljs$core$IIndexed$_nth$arity$2(null,i__52681);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52688,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52688,(1),null);
var temp__5733__auto___52769 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52769)){
var effect_fn_52770 = temp__5733__auto___52769;
(effect_fn_52770.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52770.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52770.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52771 = seq__52678;
var G__52772 = chunk__52679;
var G__52773 = count__52680;
var G__52774 = (i__52681 + (1));
seq__52678 = G__52771;
chunk__52679 = G__52772;
count__52680 = G__52773;
i__52681 = G__52774;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52678);
if(temp__5735__auto__){
var seq__52678__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52678__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52678__$1);
var G__52775 = cljs.core.chunk_rest(seq__52678__$1);
var G__52776 = c__4609__auto__;
var G__52777 = cljs.core.count(c__4609__auto__);
var G__52778 = (0);
seq__52678 = G__52775;
chunk__52679 = G__52776;
count__52680 = G__52777;
i__52681 = G__52778;
continue;
} else {
var vec__52692 = cljs.core.first(seq__52678__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52692,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52692,(1),null);
var temp__5733__auto___52779 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52779)){
var effect_fn_52780 = temp__5733__auto___52779;
(effect_fn_52780.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52780.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52780.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52781 = cljs.core.next(seq__52678__$1);
var G__52782 = null;
var G__52783 = (0);
var G__52784 = (0);
seq__52678 = G__52781;
chunk__52679 = G__52782;
count__52680 = G__52783;
i__52681 = G__52784;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52695 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52696 = null;
var count__52697 = (0);
var i__52698 = (0);
while(true){
if((i__52698 < count__52697)){
var map__52707 = chunk__52696.cljs$core$IIndexed$_nth$arity$2(null,i__52698);
var map__52707__$1 = (((((!((map__52707 == null))))?(((((map__52707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52707):map__52707);
var effect = map__52707__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52707__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52707__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52695,chunk__52696,count__52697,i__52698,map__52707,map__52707__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52695,chunk__52696,count__52697,i__52698,map__52707,map__52707__$1,effect,ms,dispatch))
,ms);
}


var G__52788 = seq__52695;
var G__52789 = chunk__52696;
var G__52790 = count__52697;
var G__52791 = (i__52698 + (1));
seq__52695 = G__52788;
chunk__52696 = G__52789;
count__52697 = G__52790;
i__52698 = G__52791;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52695);
if(temp__5735__auto__){
var seq__52695__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52695__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52695__$1);
var G__52792 = cljs.core.chunk_rest(seq__52695__$1);
var G__52793 = c__4609__auto__;
var G__52794 = cljs.core.count(c__4609__auto__);
var G__52795 = (0);
seq__52695 = G__52792;
chunk__52696 = G__52793;
count__52697 = G__52794;
i__52698 = G__52795;
continue;
} else {
var map__52709 = cljs.core.first(seq__52695__$1);
var map__52709__$1 = (((((!((map__52709 == null))))?(((((map__52709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52709):map__52709);
var effect = map__52709__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52709__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52709__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52695,chunk__52696,count__52697,i__52698,map__52709,map__52709__$1,effect,ms,dispatch,seq__52695__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52695,chunk__52696,count__52697,i__52698,map__52709,map__52709__$1,effect,ms,dispatch,seq__52695__$1,temp__5735__auto__))
,ms);
}


var G__52796 = cljs.core.next(seq__52695__$1);
var G__52797 = null;
var G__52798 = (0);
var G__52799 = (0);
seq__52695 = G__52796;
chunk__52696 = G__52797;
count__52697 = G__52798;
i__52698 = G__52799;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52723 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52724 = null;
var count__52725 = (0);
var i__52726 = (0);
while(true){
if((i__52726 < count__52725)){
var event = chunk__52724.cljs$core$IIndexed$_nth$arity$2(null,i__52726);
re_frame.router.dispatch(event);


var G__52800 = seq__52723;
var G__52801 = chunk__52724;
var G__52802 = count__52725;
var G__52803 = (i__52726 + (1));
seq__52723 = G__52800;
chunk__52724 = G__52801;
count__52725 = G__52802;
i__52726 = G__52803;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52723);
if(temp__5735__auto__){
var seq__52723__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52723__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52723__$1);
var G__52804 = cljs.core.chunk_rest(seq__52723__$1);
var G__52805 = c__4609__auto__;
var G__52806 = cljs.core.count(c__4609__auto__);
var G__52807 = (0);
seq__52723 = G__52804;
chunk__52724 = G__52805;
count__52725 = G__52806;
i__52726 = G__52807;
continue;
} else {
var event = cljs.core.first(seq__52723__$1);
re_frame.router.dispatch(event);


var G__52808 = cljs.core.next(seq__52723__$1);
var G__52809 = null;
var G__52810 = (0);
var G__52811 = (0);
seq__52723 = G__52808;
chunk__52724 = G__52809;
count__52725 = G__52810;
i__52726 = G__52811;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52727 = cljs.core.seq(value);
var chunk__52728 = null;
var count__52729 = (0);
var i__52730 = (0);
while(true){
if((i__52730 < count__52729)){
var event = chunk__52728.cljs$core$IIndexed$_nth$arity$2(null,i__52730);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52812 = seq__52727;
var G__52813 = chunk__52728;
var G__52814 = count__52729;
var G__52815 = (i__52730 + (1));
seq__52727 = G__52812;
chunk__52728 = G__52813;
count__52729 = G__52814;
i__52730 = G__52815;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52727);
if(temp__5735__auto__){
var seq__52727__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52727__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52727__$1);
var G__52816 = cljs.core.chunk_rest(seq__52727__$1);
var G__52817 = c__4609__auto__;
var G__52818 = cljs.core.count(c__4609__auto__);
var G__52819 = (0);
seq__52727 = G__52816;
chunk__52728 = G__52817;
count__52729 = G__52818;
i__52730 = G__52819;
continue;
} else {
var event = cljs.core.first(seq__52727__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52820 = cljs.core.next(seq__52727__$1);
var G__52821 = null;
var G__52822 = (0);
var G__52823 = (0);
seq__52727 = G__52820;
chunk__52728 = G__52821;
count__52729 = G__52822;
i__52730 = G__52823;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
