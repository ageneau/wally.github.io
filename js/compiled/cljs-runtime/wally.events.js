goog.provide('wally.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('wally.db');
goog.require('wally.data');
goog.require('wally.wallet');
goog.require('cljs_web3.core');
goog.require('cljs_web3.eth');
goog.require('day8.re_frame.tracing');
wally.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
wally.events.w3 = (new Web3(window.ethereum));
wally.events.STREAM_START_DELTA = (300);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wally.events","initialize-db","wally.events/initialize-db",-458236584),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = wally.db.default_db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e42977){var e = e42977;
throw e;
}}):(function (_,___$1){
return wally.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wally.events","set-active-panel","wally.events/set-active-panel",1582357988),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__42978){
var vec__42979 = p__42978;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42979,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42979,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)));

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__42474__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__42475__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var opts__42474__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = active_panel;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__42475__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e42982){var e = e42982;
throw e;
}}):(function (db,p__42983){
var vec__42984 = p__42983;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42984,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42984,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872),wally.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (){
return null;
}):(function (){
return null;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("wally.events","load-accounts","wally.events/load-accounts",44703020),wally.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__42987){
var vec__42988 = p__42987;
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","call","web3/call",-479653525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Symbol(null,"w3","w3",-2124661586,null),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("web3-eth","accounts","web3-eth/accounts",417981182,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","accounts-loaded","wally.events/accounts-loaded",-2048538154)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null)], null)], null)], null)], null));

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","call","web3/call",-479653525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),wally.events.w3,new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs_web3.eth.accounts,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","accounts-loaded","wally.events/accounts-loaded",-2048538154)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null)], null)], null)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","call","web3/call",-479653525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Symbol(null,"w3","w3",-2124661586,null),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("web3-eth","accounts","web3-eth/accounts",417981182,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","accounts-loaded","wally.events/accounts-loaded",-2048538154)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e42991){var e = e42991;
throw e;
}}):(function (_,p__42992){
var vec__42993 = p__42992;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","call","web3/call",-479653525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),wally.events.w3,new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs_web3.eth.accounts,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","accounts-loaded","wally.events/accounts-loaded",-2048538154)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null)], null)], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("wally.events","accounts-loaded","wally.events/accounts-loaded",-2048538154),wally.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__42996,p__42997){
var map__42998 = p__42996;
var map__42998__$1 = (((((!((map__42998 == null))))?(((((map__42998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42998):map__42998);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42998__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42999 = p__42997;
var accounts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42999,(0),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Symbol(null,"accounts","accounts",705222851,null)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","load-ether-balances","wally.events/load-ether-balances",-949148968),new cljs.core.Symbol(null,"accounts","accounts",705222851,null)], null)], null)], null));

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"accounts","accounts",-935308676),accounts),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","load-ether-balances","wally.events/load-ether-balances",-949148968),accounts], null)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Symbol(null,"accounts","accounts",705222851,null)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","load-ether-balances","wally.events/load-ether-balances",-949148968),new cljs.core.Symbol(null,"accounts","accounts",705222851,null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e43003){var e = e43003;
throw e;
}}):(function (p__43004,p__43005){
var map__43006 = p__43004;
var map__43006__$1 = (((((!((map__43006 == null))))?(((((map__43006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43006):map__43006);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43006__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43007 = p__43005;
var accounts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43007,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"accounts","accounts",-935308676),accounts),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","load-ether-balances","wally.events/load-ether-balances",-949148968),accounts], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wally.events","load-ether-balances","wally.events/load-ether-balances",-949148968),(function (p__43011,p__43012){
var map__43013 = p__43011;
var map__43013__$1 = (((((!((map__43013 == null))))?(((((map__43013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43013):map__43013);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43013__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43014 = p__43012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43014,(0),null);
var addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43014,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-balances","web3/get-balances",-152059131),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),wally.events.w3,new cljs.core.Keyword(null,"addresses","addresses",-559529694),(function (){var iter__4582__auto__ = (function wally$events$iter__43018(s__43019){
return (new cljs.core.LazySeq(null,(function (){
var s__43019__$1 = s__43019;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43019__$1);
if(temp__5735__auto__){
var s__43019__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43019__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43019__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43021 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43020 = (0);
while(true){
if((i__43020 < size__4581__auto__)){
var address = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43020);
cljs.core.chunk_append(b__43021,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["balance-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address)].join(''),new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"watch?","watch?",-1976903168),true,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","ether-balance-loaded","wally.events/ether-balance-loaded",-999919417),address], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null)], null));

var G__43161 = (i__43020 + (1));
i__43020 = G__43161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43021),wally$events$iter__43018(cljs.core.chunk_rest(s__43019__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43021),null);
}
} else {
var address = cljs.core.first(s__43019__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["balance-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address)].join(''),new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"watch?","watch?",-1976903168),true,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","ether-balance-loaded","wally.events/ether-balance-loaded",-999919417),address], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null)], null),wally$events$iter__43018(cljs.core.rest(s__43019__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(addresses);
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("wally.events","ether-balance-loaded","wally.events/ether-balance-loaded",-999919417),wally.events.interceptors,(function (p__43022,p__43023){
var map__43024 = p__43022;
var map__43024__$1 = (((((!((map__43024 == null))))?(((((map__43024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43024):map__43024);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43024__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43025 = p__43023;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43025,(0),null);
var balance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43025,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"balances","balances",-1047003019),address], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(balance))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wally.events","load-token-balances","wally.events/load-token-balances",404805344),(function (p__43029,p__43030){
var map__43031 = p__43029;
var map__43031__$1 = (((((!((map__43031 == null))))?(((((map__43031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43031):map__43031);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43031__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43032 = p__43030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43032,(0),null);
var addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43032,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-balances","web3/get-balances",-152059131),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),wally.events.w3,new cljs.core.Keyword(null,"addresses","addresses",-559529694),(function (){var iter__4582__auto__ = (function wally$events$iter__43036(s__43037){
return (new cljs.core.LazySeq(null,(function (){
var s__43037__$1 = s__43037;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43037__$1);
if(temp__5735__auto__){
var s__43037__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43037__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43037__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43039 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43038 = (0);
while(true){
if((i__43038 < size__4581__auto__)){
var address = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43038);
cljs.core.chunk_append(b__43039,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),["balance-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address)].join(''),new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"instance","instance",-2121349050),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sablier","sablier",-419543152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mainnet","mainnet",1085077630),"0xA4fc358455Febe425536fd1878bE67FfDBDEC59a",new cljs.core.Keyword(null,"goerli","goerli",1521689201),"0xc04Ad234E01327b24a831e3718DBFcbE245904CC",new cljs.core.Keyword(null,"kovan","kovan",2099496952),"0xc04Ad234E01327b24a831e3718DBFcbE245904CC",new cljs.core.Keyword(null,"rinkeby","rinkeby",2002123603),"0xc04Ad234E01327b24a831e3718DBFcbE245904CC",new cljs.core.Keyword(null,"ropsten","ropsten",2140233529),"0xc04Ad234E01327b24a831e3718DBFcbE245904CC"], null)], null),new cljs.core.Keyword(null,"networks","networks",1319553937),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chain-id","chain-id",103171314),new cljs.core.PersistentArrayMap(null, 3, ["1",new cljs.core.Keyword(null,"mainnet","mainnet",1085077630),"3",new cljs.core.Keyword(null,"ropsten","ropsten",2140233529),"4",new cljs.core.Keyword(null,"rinkeby","rinkeby",2002123603)], null),new cljs.core.Keyword(null,"rinkeby","rinkeby",2002123603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weenus","weenus",939968780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),"0xaFF4481D10270F50f203E0763e2597776068CBc5",new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"WEENUS"], null),new cljs.core.Keyword(null,"fau","fau",539231304),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),"0xfab46e002bbf0b4509813474841e0716e6730136",new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"FAU"], null),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),"0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8",new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"DAI"], null)], null)], null),new cljs.core.Keyword(null,"ropsten","ropsten",2140233529),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weenus","weenus",939968780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),"0x101848D5C5bBca18E6b4431eEdF6B95E9ADF82FA",new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"WEENUS"], null),new cljs.core.Keyword(null,"fau","fau",539231304),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),"0xfab46e002bbf0b4509813474841e0716e6730136",new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"FAU"], null)], null)], null),new cljs.core.Keyword(null,"mainnet","mainnet",1085077630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fau","fau",539231304),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),"0xfab46e002bbf0b4509813474841e0716e6730136",new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"FAU"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networks","networks",1319553937),new cljs.core.Keyword(null,"rinkeby","rinkeby",2002123603),new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.Keyword(null,"address","address",559499426)], null)),new cljs.core.Keyword(null,"watch?","watch?",-1976903168),true,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","token-balance-loaded","wally.events/token-balance-loaded",2004322266),address], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null)], null));

var G__43162 = (i__43038 + (1));
i__43038 = G__43162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43039),wally$events$iter__43036(cljs.core.chunk_rest(s__43037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43039),null);
}
} else {
var address = cljs.core.first(s__43037__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),["balance-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address)].join(''),new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"instance","instance",-2121349050),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sablier","sablier",-419543152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mainnet","mainnet",1085077630),"0xA4fc358455Febe425536fd1878bE67FfDBDEC59a",new cljs.core.Keyword(null,"goerli","goerli",1521689201),"0xc04Ad234E01327b24a831e3718DBFcbE245904CC",new cljs.core.Keyword(null,"kovan","kovan",2099496952),"0xc04Ad234E01327b24a831e3718DBFcbE245904CC",new cljs.core.Keyword(null,"rinkeby","rinkeby",2002123603),"0xc04Ad234E01327b24a831e3718DBFcbE245904CC",new cljs.core.Keyword(null,"ropsten","ropsten",2140233529),"0xc04Ad234E01327b24a831e3718DBFcbE245904CC"], null)], null),new cljs.core.Keyword(null,"networks","networks",1319553937),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chain-id","chain-id",103171314),new cljs.core.PersistentArrayMap(null, 3, ["1",new cljs.core.Keyword(null,"mainnet","mainnet",1085077630),"3",new cljs.core.Keyword(null,"ropsten","ropsten",2140233529),"4",new cljs.core.Keyword(null,"rinkeby","rinkeby",2002123603)], null),new cljs.core.Keyword(null,"rinkeby","rinkeby",2002123603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weenus","weenus",939968780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),"0xaFF4481D10270F50f203E0763e2597776068CBc5",new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"WEENUS"], null),new cljs.core.Keyword(null,"fau","fau",539231304),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),"0xfab46e002bbf0b4509813474841e0716e6730136",new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"FAU"], null),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),"0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8",new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"DAI"], null)], null)], null),new cljs.core.Keyword(null,"ropsten","ropsten",2140233529),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weenus","weenus",939968780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),"0x101848D5C5bBca18E6b4431eEdF6B95E9ADF82FA",new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"WEENUS"], null),new cljs.core.Keyword(null,"fau","fau",539231304),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),"0xfab46e002bbf0b4509813474841e0716e6730136",new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"FAU"], null)], null)], null),new cljs.core.Keyword(null,"mainnet","mainnet",1085077630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fau","fau",539231304),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),"0xfab46e002bbf0b4509813474841e0716e6730136",new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"FAU"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networks","networks",1319553937),new cljs.core.Keyword(null,"rinkeby","rinkeby",2002123603),new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.Keyword(null,"address","address",559499426)], null)),new cljs.core.Keyword(null,"watch?","watch?",-1976903168),true,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","token-balance-loaded","wally.events/token-balance-loaded",2004322266),address], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null)], null),wally$events$iter__43036(cljs.core.rest(s__43037__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(addresses);
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("wally.events","token-balance-loaded","wally.events/token-balance-loaded",2004322266),wally.events.interceptors,(function (p__43040,p__43041){
var map__43042 = p__43040;
var map__43042__$1 = (((((!((map__43042 == null))))?(((((map__43042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43042):map__43042);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43042__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43043 = p__43041;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43043,(0),null);
var balance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43043,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token-balances","token-balances",-200521145),address], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(balance))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("login","metamask","login/metamask",1696747605),wally.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__43047){
var map__43048 = p__43047;
var map__43048__$1 = (((((!((map__43048 == null))))?(((((map__43048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43048):map__43048);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43048__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metamask","metamask",1995194798),new cljs.core.Keyword(null,"perm-requested","perm-requested",784029694)], null),true),new cljs.core.Keyword(null,"init-w3","init-w3",-1708561466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","logged-in","wally.events/logged-in",225903231)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","login-error","wally.events/login-error",-624115559)], null)], null)], null));

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metamask","metamask",1995194798),new cljs.core.Keyword(null,"perm-requested","perm-requested",784029694)], null),true),new cljs.core.Keyword(null,"init-w3","init-w3",-1708561466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","logged-in","wally.events/logged-in",225903231)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","login-error","wally.events/login-error",-624115559)], null)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metamask","metamask",1995194798),new cljs.core.Keyword(null,"perm-requested","perm-requested",784029694)], null),true),new cljs.core.Keyword(null,"init-w3","init-w3",-1708561466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","logged-in","wally.events/logged-in",225903231)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","login-error","wally.events/login-error",-624115559)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e43050){var e = e43050;
throw e;
}}):(function (p__43051){
var map__43052 = p__43051;
var map__43052__$1 = (((((!((map__43052 == null))))?(((((map__43052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43052):map__43052);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43052__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metamask","metamask",1995194798),new cljs.core.Keyword(null,"perm-requested","perm-requested",784029694)], null),true),new cljs.core.Keyword(null,"init-w3","init-w3",-1708561466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","logged-in","wally.events/logged-in",225903231)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","login-error","wally.events/login-error",-624115559)], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("wally.events","logged-in","wally.events/logged-in",225903231),wally.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__43054){
var map__43055 = p__43054;
var map__43055__$1 = (((((!((map__43055 == null))))?(((((map__43055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43055):map__43055);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43055__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"connected","connected",-169833045),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","load-accounts","wally.events/load-accounts",44703020)], null)], null));

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"connected","connected",-169833045),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","load-accounts","wally.events/load-accounts",44703020)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"connected","connected",-169833045),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","load-accounts","wally.events/load-accounts",44703020)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e43057){var e = e43057;
throw e;
}}):(function (p__43058){
var map__43059 = p__43058;
var map__43059__$1 = (((((!((map__43059 == null))))?(((((map__43059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43059):map__43059);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43059__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"connected","connected",-169833045),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","load-accounts","wally.events/load-accounts",44703020)], null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wally.events","login-error","wally.events/login-error",-624115559),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__43061){
var vec__43062 = p__43061;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43062,(0),null);
var reason = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43062,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"connected","connected",-169833045),false));

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__42474__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__42475__auto__;
})(),new cljs.core.Keyword(null,"connected","connected",-169833045),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"connected","connected",-169833045),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e43065){var e = e43065;
throw e;
}}):(function (db,p__43066){
var vec__43067 = p__43066;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43067,(0),null);
var reason = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43067,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"connected","connected",-169833045),false);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"dest-changed","dest-changed",1906989995),wally.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__43070,p__43071){
var map__43072 = p__43070;
var map__43072__$1 = (((((!((map__43072 == null))))?(((((map__43072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43072):map__43072);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43072__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43073 = p__43071;
var dest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43073,(0),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"dest","dest",-34569477)], null),new cljs.core.Symbol(null,"dest","dest",1605962050,null))], null));

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"dest","dest",-34569477)], null),dest)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"dest","dest",-34569477)], null),new cljs.core.Symbol(null,"dest","dest",1605962050,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e43077){var e = e43077;
throw e;
}}):(function (p__43078,p__43079){
var map__43080 = p__43078;
var map__43080__$1 = (((((!((map__43080 == null))))?(((((map__43080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43080):map__43080);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43080__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43081 = p__43079;
var dest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43081,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"dest","dest",-34569477)], null),dest)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"amount-changed","amount-changed",815260805),wally.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__43085,p__43086){
var map__43087 = p__43085;
var map__43087__$1 = (((((!((map__43087 == null))))?(((((map__43087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43087):map__43087);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43087__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43088 = p__43086;
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43088,(0),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null),new cljs.core.Symbol(null,"amount","amount",2005021031,null))], null));

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null),amount)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null),new cljs.core.Symbol(null,"amount","amount",2005021031,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e43092){var e = e43092;
throw e;
}}):(function (p__43093,p__43094){
var map__43095 = p__43093;
var map__43095__$1 = (((((!((map__43095 == null))))?(((((map__43095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43095):map__43095);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43095__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43096 = p__43094;
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43096,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null),amount)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"duration-changed","duration-changed",1562084370),wally.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__43100,p__43101){
var map__43102 = p__43100;
var map__43102__$1 = (((((!((map__43102 == null))))?(((((map__43102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43102):map__43102);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43102__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43103 = p__43101;
var duration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43103,(0),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),new cljs.core.Symbol(null,"duration","duration",-1210334701,null))], null));

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),duration)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),new cljs.core.Symbol(null,"duration","duration",-1210334701,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e43107){var e = e43107;
throw e;
}}):(function (p__43108,p__43109){
var map__43110 = p__43108;
var map__43110__$1 = (((((!((map__43110 == null))))?(((((map__43110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43110):map__43110);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43110__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43111 = p__43109;
var duration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43111,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),duration)], null);
})));
wally.events.compute_deposit = (function wally$events$compute_deposit(amount,duration){
var amount__$1 = BigInt(amount);
var duration__$1 = BigInt(duration);
var q = ((BigInt(1.0E18) * amount__$1) / (BigInt((60)) * duration__$1));
return ((q * BigInt((60))) * duration__$1);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"submit-clicked","submit-clicked",1769397283),wally.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__43115,_){
var map__43116 = p__43115;
var map__43116__$1 = (((((!((map__43116 == null))))?(((((map__43116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43116):map__43116);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43116__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"approve-spender","approve-spender",-245061955),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","spender-approved","wally.events/spender-approved",-2141860290)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.Keyword(null,"amount","amount",364489504),cljs.core.list(new cljs.core.Symbol(null,"compute-deposit","compute-deposit",-1044565362,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null)),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null)))], null)], null));

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"approve-spender","approve-spender",-245061955),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","spender-approved","wally.events/spender-approved",-2141860290)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.Keyword(null,"amount","amount",364489504),wally.events.compute_deposit(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null)))], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"approve-spender","approve-spender",-245061955),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","spender-approved","wally.events/spender-approved",-2141860290)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.Keyword(null,"amount","amount",364489504),cljs.core.list(new cljs.core.Symbol(null,"compute-deposit","compute-deposit",-1044565362,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null)),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null)))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e43118){var e = e43118;
throw e;
}}):(function (p__43119,_){
var map__43120 = p__43119;
var map__43120__$1 = (((((!((map__43120 == null))))?(((((map__43120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43120):map__43120);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43120__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"approve-spender","approve-spender",-245061955),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","spender-approved","wally.events/spender-approved",-2141860290)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.Keyword(null,"amount","amount",364489504),wally.events.compute_deposit(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null)))], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("wally.events","spender-approved","wally.events/spender-approved",-2141860290),wally.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__43122,_){
var map__43123 = p__43122;
var map__43123__$1 = (((((!((map__43123 == null))))?(((((map__43123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43123):map__43123);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43123__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"time","time",-1268547887,null),cljs.core.list(new cljs.core.Symbol("wallet","epoch-time-seconds","wallet/epoch-time-seconds",-359706030,null)),new cljs.core.Symbol(null,"start-time","start-time",-1839634383,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"STREAM-START-DELTA","STREAM-START-DELTA",744074178,null)),new cljs.core.Symbol(null,"stop-time","stop-time",890956149,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"start-time","start-time",-1839634383,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(60),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create-stream","create-stream",-422399452),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","stream-created","wally.events/stream-created",1823212920)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null),new cljs.core.Keyword(null,"recipient","recipient",1650072234),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"dest","dest",-34569477)], null)),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),cljs.core.list(new cljs.core.Symbol(null,"compute-deposit","compute-deposit",-1044565362,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null)),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Symbol(null,"start-time","start-time",-1839634383,null),new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),new cljs.core.Symbol(null,"stop-time","stop-time",890956149,null)], null)], null)));

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = (function (){var time = (function (){var opts__42474__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = wally.wallet.epoch_time_seconds();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("wallet","epoch-time-seconds","wallet/epoch-time-seconds",-359706030,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42475__auto__;
})();
var start_time = (function (){var opts__42474__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = ((function (){var opts__42474__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = time;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42475__auto__;
})() + (function (){var opts__42474__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = (300);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"STREAM-START-DELTA","STREAM-START-DELTA",744074178,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42475__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"STREAM-START-DELTA","STREAM-START-DELTA",744074178,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42475__auto__;
})();
var stop_time = (function (){var opts__42474__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = ((function (){var opts__42474__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = start_time;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start-time","start-time",-1839634383,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42475__auto__;
})() + (function (){var opts__42474__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = ((60) * (function (){var opts__42474__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__42474__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__42475__auto__;
})(),(function (){var opts__42474__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__42475__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42475__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(60),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42475__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"start-time","start-time",-1839634383,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(60),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42475__auto__;
})();
var opts__42474__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create-stream","create-stream",-422399452),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","stream-created","wally.events/stream-created",1823212920)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null),new cljs.core.Keyword(null,"recipient","recipient",1650072234),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"dest","dest",-34569477)], null)),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),wally.events.compute_deposit(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time,new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),stop_time], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create-stream","create-stream",-422399452),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","stream-created","wally.events/stream-created",1823212920)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null),new cljs.core.Keyword(null,"recipient","recipient",1650072234),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"dest","dest",-34569477)], null)),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),cljs.core.list(new cljs.core.Symbol(null,"compute-deposit","compute-deposit",-1044565362,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null)),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Symbol(null,"start-time","start-time",-1839634383,null),new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),new cljs.core.Symbol(null,"stop-time","stop-time",890956149,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__42475__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"time","time",-1268547887,null),cljs.core.list(new cljs.core.Symbol("wallet","epoch-time-seconds","wallet/epoch-time-seconds",-359706030,null)),new cljs.core.Symbol(null,"start-time","start-time",-1839634383,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"STREAM-START-DELTA","STREAM-START-DELTA",744074178,null)),new cljs.core.Symbol(null,"stop-time","stop-time",890956149,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"start-time","start-time",-1839634383,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(60),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create-stream","create-stream",-422399452),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","stream-created","wally.events/stream-created",1823212920)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null),new cljs.core.Keyword(null,"recipient","recipient",1650072234),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"dest","dest",-34569477)], null)),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),cljs.core.list(new cljs.core.Symbol(null,"compute-deposit","compute-deposit",-1044565362,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null)),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Symbol(null,"start-time","start-time",-1839634383,null),new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),new cljs.core.Symbol(null,"stop-time","stop-time",890956149,null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e43125){var e = e43125;
throw e;
}}):(function (p__43126,_){
var map__43127 = p__43126;
var map__43127__$1 = (((((!((map__43127 == null))))?(((((map__43127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43127):map__43127);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43127__$1,new cljs.core.Keyword(null,"db","db",993250759));
var time = wally.wallet.epoch_time_seconds();
var start_time = (time + (300));
var stop_time = (start_time + ((60) * cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create-stream","create-stream",-422399452),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","stream-created","wally.events/stream-created",1823212920)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.events","error","wally.events/error",-577553872)], null),new cljs.core.Keyword(null,"recipient","recipient",1650072234),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"dest","dest",-34569477)], null)),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),wally.events.compute_deposit(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"testdai","testdai",-612719215),new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time,new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),stop_time], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("wally.events","stream-created","wally.events/stream-created",1823212920),wally.events.interceptors,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__43129,_){
var map__43130 = p__43129;
var map__43130__$1 = (((((!((map__43130 == null))))?(((((map__43130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43130):map__43130);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43130__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.PersistentArrayMap.EMPTY);

var opts__42474__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__42475__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__42475__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42475__auto__;
}catch (e43132){var e = e43132;
throw e;
}}):(function (p__43133,_){
var map__43134 = p__43133;
var map__43134__$1 = (((((!((map__43134 == null))))?(((((map__43134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43134):map__43134);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43134__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.PersistentArrayMap.EMPTY;
})));

//# sourceMappingURL=wally.events.js.map
