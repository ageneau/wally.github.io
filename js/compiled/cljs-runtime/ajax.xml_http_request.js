goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__47436 = e.target.readyState;
var fexpr__47435 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__47435.cljs$core$IFn$_invoke$arity$1 ? fexpr__47435.cljs$core$IFn$_invoke$arity$1(G__47436) : fexpr__47435.call(null,G__47436));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__47438,handler){
var map__47439 = p__47438;
var map__47439__$1 = (((((!((map__47439 == null))))?(((((map__47439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47439):map__47439);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47439__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47439__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47439__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47439__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47439__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47439__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47439__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__47437_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__47437_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___47463 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___47463)){
var response_type_47464 = temp__5735__auto___47463;
(this$__$1.responseType = cljs.core.name(response_type_47464));
} else {
}

var seq__47441_47465 = cljs.core.seq(headers);
var chunk__47442_47466 = null;
var count__47443_47467 = (0);
var i__47444_47468 = (0);
while(true){
if((i__47444_47468 < count__47443_47467)){
var vec__47451_47469 = chunk__47442_47466.cljs$core$IIndexed$_nth$arity$2(null,i__47444_47468);
var k_47470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47451_47469,(0),null);
var v_47471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47451_47469,(1),null);
this$__$1.setRequestHeader(k_47470,v_47471);


var G__47485 = seq__47441_47465;
var G__47486 = chunk__47442_47466;
var G__47487 = count__47443_47467;
var G__47488 = (i__47444_47468 + (1));
seq__47441_47465 = G__47485;
chunk__47442_47466 = G__47486;
count__47443_47467 = G__47487;
i__47444_47468 = G__47488;
continue;
} else {
var temp__5735__auto___47489 = cljs.core.seq(seq__47441_47465);
if(temp__5735__auto___47489){
var seq__47441_47490__$1 = temp__5735__auto___47489;
if(cljs.core.chunked_seq_QMARK_(seq__47441_47490__$1)){
var c__4609__auto___47491 = cljs.core.chunk_first(seq__47441_47490__$1);
var G__47492 = cljs.core.chunk_rest(seq__47441_47490__$1);
var G__47493 = c__4609__auto___47491;
var G__47494 = cljs.core.count(c__4609__auto___47491);
var G__47495 = (0);
seq__47441_47465 = G__47492;
chunk__47442_47466 = G__47493;
count__47443_47467 = G__47494;
i__47444_47468 = G__47495;
continue;
} else {
var vec__47454_47496 = cljs.core.first(seq__47441_47490__$1);
var k_47497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47454_47496,(0),null);
var v_47498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47454_47496,(1),null);
this$__$1.setRequestHeader(k_47497,v_47498);


var G__47499 = cljs.core.next(seq__47441_47490__$1);
var G__47500 = null;
var G__47501 = (0);
var G__47502 = (0);
seq__47441_47465 = G__47499;
chunk__47442_47466 = G__47500;
count__47443_47467 = G__47501;
i__47444_47468 = G__47502;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
