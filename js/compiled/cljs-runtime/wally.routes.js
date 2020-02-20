goog.provide('wally.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('goog.history.EventType');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('re_frame.core');
goog.require('wally.events');
wally.routes.hook_browser_navigation_BANG_ = (function wally$routes$hook_browser_navigation_BANG_(){
var G__43136 = (new goog.History());
var G__43137_43154 = G__43136;
var G__43138_43155 = goog.history.EventType.NAVIGATE;
var G__43139_43156 = (function (event){
return secretary.core.dispatch_BANG_(event.token);
});
goog.events.listen(G__43137_43154,G__43138_43155,G__43139_43156);

G__43136.setEnabled(true);

return G__43136;
});
wally.routes.app_routes = (function wally$routes$app_routes(){
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__42021__auto___43157 = (function (params__42022__auto__){
if(cljs.core.map_QMARK_(params__42022__auto__)){
var map__43140 = params__42022__auto__;
var map__43140__$1 = (((((!((map__43140 == null))))?(((((map__43140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43140):map__43140);
var G__43142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","set-active-panel","wally.events/set-active-panel",1582357988),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43142) : re_frame.core.dispatch.call(null,G__43142));
} else {
if(cljs.core.vector_QMARK_(params__42022__auto__)){
var vec__43143 = params__42022__auto__;
var G__43146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","set-active-panel","wally.events/set-active-panel",1582357988),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43146) : re_frame.core.dispatch.call(null,G__43146));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__42021__auto___43157);


var action__42021__auto___43160 = (function (params__42022__auto__){
if(cljs.core.map_QMARK_(params__42022__auto__)){
var map__43147 = params__42022__auto__;
var map__43147__$1 = (((((!((map__43147 == null))))?(((((map__43147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43147):map__43147);
var G__43149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","set-active-panel","wally.events/set-active-panel",1582357988),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43149) : re_frame.core.dispatch.call(null,G__43149));
} else {
if(cljs.core.vector_QMARK_(params__42022__auto__)){
var vec__43150 = params__42022__auto__;
var G__43153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","set-active-panel","wally.events/set-active-panel",1582357988),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43153) : re_frame.core.dispatch.call(null,G__43153));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__42021__auto___43160);


return wally.routes.hook_browser_navigation_BANG_();
});

//# sourceMappingURL=wally.routes.js.map
