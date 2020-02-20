goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__47547){
var vec__47548 = p__47547;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47548,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47548,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__47551 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__47551);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__47554){
var map__47555 = p__47554;
var map__47555__$1 = (((((!((map__47555 == null))))?(((((map__47555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47555):map__47555);
var request = map__47555__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47555__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47555__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__47552_SHARP_){
var G__47560 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__47552_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47560) : re_frame.core.dispatch.call(null,G__47560));
}),(function (p1__47553_SHARP_){
var G__47561 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__47553_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47561) : re_frame.core.dispatch.call(null,G__47561));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__47563 = cljs.core.seq(seq_request_maps);
var chunk__47564 = null;
var count__47565 = (0);
var i__47566 = (0);
while(true){
if((i__47566 < count__47565)){
var request__$1 = chunk__47564.cljs$core$IIndexed$_nth$arity$2(null,i__47566);
var G__47572_47592 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__47572_47592) : ajax.core.ajax_request.call(null,G__47572_47592));


var G__47593 = seq__47563;
var G__47594 = chunk__47564;
var G__47595 = count__47565;
var G__47596 = (i__47566 + (1));
seq__47563 = G__47593;
chunk__47564 = G__47594;
count__47565 = G__47595;
i__47566 = G__47596;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47563);
if(temp__5735__auto__){
var seq__47563__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47563__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47563__$1);
var G__47597 = cljs.core.chunk_rest(seq__47563__$1);
var G__47598 = c__4609__auto__;
var G__47599 = cljs.core.count(c__4609__auto__);
var G__47600 = (0);
seq__47563 = G__47597;
chunk__47564 = G__47598;
count__47565 = G__47599;
i__47566 = G__47600;
continue;
} else {
var request__$1 = cljs.core.first(seq__47563__$1);
var G__47574_47601 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__47574_47601) : ajax.core.ajax_request.call(null,G__47574_47601));


var G__47602 = cljs.core.next(seq__47563__$1);
var G__47603 = null;
var G__47604 = (0);
var G__47605 = (0);
seq__47563 = G__47602;
chunk__47564 = G__47603;
count__47565 = G__47604;
i__47566 = G__47605;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__47577_47606 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__47578_47607 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__47577_47606,G__47578_47607) : re_frame.core.reg_fx.call(null,G__47577_47606,G__47578_47607));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
