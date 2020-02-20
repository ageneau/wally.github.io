goog.provide('wally.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
wally.subs.contract = (function wally$subs$contract(db){
return new cljs.core.Keyword(null,"contract","contract",798152745).cljs$core$IFn$_invoke$arity$1(db);
});
wally.subs.accounts = (function wally$subs$accounts(db){
return new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(db);
});
wally.subs.balance = (function wally$subs$balance(db,address){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"balances","balances",-1047003019),address], null));
});
wally.subs.total_supply = (function wally$subs$total_supply(db){
return new cljs.core.Keyword(null,"total-supply","total-supply",1447638579).cljs$core$IFn$_invoke$arity$1(db);
});
wally.subs.token_balance = (function wally$subs$token_balance(db,address){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token-balances","token-balances",-200521145),address], null));
});
var G__54336_54365 = new cljs.core.Keyword("wally.subs","name","wally.subs/name",1010698495);
var G__54337_54366 = (function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54336_54365,G__54337_54366) : re_frame.core.reg_sub.call(null,G__54336_54365,G__54337_54366));
var G__54338_54367 = new cljs.core.Keyword("wally.subs","active-panel","wally.subs/active-panel",-969867416);
var G__54339_54368 = (function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54338_54367,G__54339_54368) : re_frame.core.reg_sub.call(null,G__54338_54367,G__54339_54368));
var G__54340_54375 = new cljs.core.Keyword("wally.subs","contract","wally.subs/contract",-60420357);
var G__54341_54376 = wally.subs.contract;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54340_54375,G__54341_54376) : re_frame.core.reg_sub.call(null,G__54340_54375,G__54341_54376));
var G__54342_54377 = new cljs.core.Keyword("wally.subs","accounts","wally.subs/accounts",401184974);
var G__54343_54378 = wally.subs.accounts;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54342_54377,G__54343_54378) : re_frame.core.reg_sub.call(null,G__54342_54377,G__54343_54378));
var G__54344_54379 = new cljs.core.Keyword("wally.subs","token-balance","wally.subs/token-balance",-2043949173);
var G__54345_54380 = (function (db,p__54346){
var vec__54347 = p__54346;
var seq__54348 = cljs.core.seq(vec__54347);
var first__54349 = cljs.core.first(seq__54348);
var seq__54348__$1 = cljs.core.next(seq__54348);
var _ = first__54349;
var args = seq__54348__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(wally.subs.token_balance,db,args);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54344_54379,G__54345_54380) : re_frame.core.reg_sub.call(null,G__54344_54379,G__54345_54380));
var G__54350_54381 = new cljs.core.Keyword("wally.subs","balance","wally.subs/balance",-873285553);
var G__54351_54382 = (function (db,p__54352){
var vec__54353 = p__54352;
var seq__54354 = cljs.core.seq(vec__54353);
var first__54355 = cljs.core.first(seq__54354);
var seq__54354__$1 = cljs.core.next(seq__54354);
var _ = first__54355;
var args = seq__54354__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(wally.subs.balance,db,args);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54350_54381,G__54351_54382) : re_frame.core.reg_sub.call(null,G__54350_54381,G__54351_54382));
var G__54356_54389 = new cljs.core.Keyword("wally.subs","dest","wally.subs/dest",663665485);
var G__54357_54390 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"dest","dest",-34569477)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54356_54389,G__54357_54390) : re_frame.core.reg_sub.call(null,G__54356_54389,G__54357_54390));
var G__54359_54391 = new cljs.core.Keyword("wally.subs","amount","wally.subs/amount",1682731854);
var G__54360_54392 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"amount","amount",364489504)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54359_54391,G__54360_54392) : re_frame.core.reg_sub.call(null,G__54359_54391,G__54360_54392));
var G__54361_54393 = new cljs.core.Keyword("wally.subs","duration","wally.subs/duration",-1551596326);
var G__54362_54394 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"duration","duration",1444101068)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54361_54393,G__54362_54394) : re_frame.core.reg_sub.call(null,G__54361_54393,G__54362_54394));
var G__54363_54395 = new cljs.core.Keyword("wally.subs","form","wally.subs/form",-238551473);
var G__54364_54396 = (function (db){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54363_54395,G__54364_54396) : re_frame.core.reg_sub.call(null,G__54363_54395,G__54364_54396));

//# sourceMappingURL=wally.subs.js.map
