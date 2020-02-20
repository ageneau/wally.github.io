goog.provide('wally.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('wally.events');
goog.require('wally.routes');
goog.require('wally.views');
goog.require('wally.config');
goog.require('wally.wallet');
goog.require('day8.re_frame.http_fx');
goog.require('district0x.re_frame.web3_fx');
wally.core.dev_setup = (function wally$core$dev_setup(){
if(wally.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
wally.core.mount_root = (function wally$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.main_panel], null),document.getElementById("app"));
});
wally.core.init = (function wally$core$init(){
wally.routes.app_routes();

var G__43158_43159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","initialize-db","wally.events/initialize-db",-458236584)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__43158_43159) : re_frame.core.dispatch_sync.call(null,G__43158_43159));

wally.core.dev_setup();

return wally.core.mount_root();
});

//# sourceMappingURL=wally.core.js.map
