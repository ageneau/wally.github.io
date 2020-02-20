goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__52900_53559 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__52901_53560 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52900_53559,G__52901_53560) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52900_53559,G__52901_53560));
var G__52902_53565 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__52903_53566 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52904_53567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52905_53568 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52902_53565,G__52903_53566,G__52904_53567,G__52905_53568) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52902_53565,G__52903_53566,G__52904_53567,G__52905_53568));
var G__52906_53569 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__52907_53570 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52908_53571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__52909_53572 = (function (panel_width_PERCENT_,p__52924){
var vec__52926 = p__52924;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52926,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52926,(1),null);
return (((function (){var G__52929 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__52929);
})() * n) / 100.0);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52906_53569,G__52907_53570,G__52908_53571,G__52909_53572) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52906_53569,G__52907_53570,G__52908_53571,G__52909_53572));
var G__52930_53603 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__52931_53604 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52932_53605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52933_53606 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52930_53603,G__52931_53604,G__52932_53605,G__52933_53606) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52930_53603,G__52931_53604,G__52932_53605,G__52933_53606));
var G__52934_53609 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__52935_53610 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52936_53611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__52937_53612 = (function (width,p__52942){
var vec__52943 = p__52942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52943,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52943,(1),null);
return ((function (){var G__52950 = (width / n);
return Math.ceil(G__52950);
})() * n);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52934_53609,G__52935_53610,G__52936_53611,G__52937_53612) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52934_53609,G__52935_53610,G__52936_53611,G__52937_53612));
var G__52955_53616 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__52956_53617 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52957_53618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52958_53619 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52955_53616,G__52956_53617,G__52957_53618,G__52958_53619) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52955_53616,G__52956_53617,G__52957_53618,G__52958_53619));
var G__52959_53621 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__52960_53622 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52961_53623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52962_53624 = (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52959_53621,G__52960_53622,G__52961_53623,G__52962_53624) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52959_53621,G__52960_53622,G__52961_53623,G__52962_53624));
var G__52965_53625 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__52966_53626 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52967_53627 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52968_53628 = (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52965_53625,G__52966_53626,G__52967_53627,G__52968_53628) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52965_53625,G__52966_53626,G__52967_53627,G__52968_53628));
var G__52969_53629 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__52970_53630 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52971_53631 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52972_53632 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52969_53629,G__52970_53630,G__52971_53631,G__52972_53632) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52969_53629,G__52970_53630,G__52971_53631,G__52972_53632));
var G__52973_53637 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__52974_53638 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52975_53639 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52976_53640 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52973_53637,G__52974_53638,G__52975_53639,G__52976_53640) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52973_53637,G__52974_53638,G__52975_53639,G__52976_53640));
var G__52977_53641 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__52978_53642 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52979_53643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52980_53644 = (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52977_53641,G__52978_53642,G__52979_53643,G__52980_53644) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52977_53641,G__52978_53642,G__52979_53643,G__52980_53644));
var G__52981_53645 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__52982_53646 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52983_53647 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52984_53648 = (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52981_53645,G__52982_53646,G__52983_53647,G__52984_53648) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52981_53645,G__52982_53646,G__52983_53647,G__52984_53648));
var G__52985_53649 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__52986_53650 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52987_53651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52988_53652 = (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52985_53649,G__52986_53650,G__52987_53651,G__52988_53652) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52985_53649,G__52986_53650,G__52987_53651,G__52988_53652));
var G__52989_53654 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__52990_53655 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52989_53654,G__52990_53655) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52989_53654,G__52990_53655));
var G__52991_53658 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__52992_53659 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52993_53660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__52994_53661 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52991_53658,G__52992_53659,G__52993_53660,G__52994_53661) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52991_53658,G__52992_53659,G__52993_53660,G__52994_53661));
var G__52995_53664 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__52996_53665 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52997_53666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__52998_53667 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52995_53664,G__52996_53665,G__52997_53666,G__52998_53667) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52995_53664,G__52996_53665,G__52997_53666,G__52998_53667));
var G__53000_53668 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__53001_53669 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53002_53670 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53003_53671 = (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52999_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__52999_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__52999_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53000_53668,G__53001_53669,G__53002_53670,G__53003_53671) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53000_53668,G__53001_53669,G__53002_53670,G__53003_53671));
var G__53004_53673 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__53005_53674 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53006_53675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53007_53676 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53004_53673,G__53005_53674,G__53006_53675,G__53007_53676) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53004_53673,G__53005_53674,G__53006_53675,G__53007_53676));
var G__53008_53679 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__53009_53680 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53010_53681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53011_53682 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53008_53679,G__53009_53680,G__53010_53681,G__53011_53682) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53008_53679,G__53009_53680,G__53010_53681,G__53011_53682));
var G__53012_53685 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__53013_53686 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53014_53687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__53015_53688 = (function (expansions,p__53016){
var vec__53017 = p__53016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53017,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53017,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53012_53685,G__53013_53686,G__53014_53687,G__53015_53688) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53012_53685,G__53013_53686,G__53014_53687,G__53015_53688));
var G__53020_53689 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__53021_53690 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53022_53691 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53023_53692 = (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53020_53689,G__53021_53690,G__53022_53691,G__53023_53692) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53020_53689,G__53021_53690,G__53022_53691,G__53023_53692));
var G__53024_53695 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__53025_53696 = (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53024_53695,G__53025_53696) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53024_53695,G__53025_53696));
var G__53043_53697 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__53044_53698 = (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53043_53697,G__53044_53698) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53043_53697,G__53044_53698));
var G__53045_53699 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__53046_53700 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53045_53699,G__53046_53700) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53045_53699,G__53046_53700));
var G__53047_53702 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__53048_53703 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53047_53702,G__53048_53703) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53047_53702,G__53048_53703));
var G__53049_53705 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__53050_53706 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53049_53705,G__53050_53706) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53049_53705,G__53050_53706));
var G__53052_53710 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__53053_53711 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53054_53712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__53055_53713 = (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53052_53710,G__53053_53711,G__53054_53712,G__53055_53713) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53052_53710,G__53053_53711,G__53054_53712,G__53055_53713));
var G__53056_53715 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__53057_53716 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53058_53717 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53059_53718 = (function (traces,_){
return cljs.core.count(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53056_53715,G__53057_53716,G__53058_53717,G__53059_53718) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53056_53715,G__53057_53716,G__53058_53717,G__53059_53718));
var G__53060_53719 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__53061_53720 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53062_53721 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53063_53722 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53064_53723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__53065_53724 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53066_53725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__53067_53726 = (function (p__53068,_){
var vec__53069 = p__53068;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53069,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53069,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53069,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__53060_53719,G__53061_53720,G__53062_53721,G__53063_53722,G__53064_53723,G__53065_53724,G__53066_53725,G__53067_53726) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53060_53719,G__53061_53720,G__53062_53721,G__53063_53722,G__53064_53723,G__53065_53724,G__53066_53725,G__53067_53726));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__53072,_){
var vec__53073 = p__53072;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53073,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53073,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
})),traces);
});
var G__53076_53755 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__53077_53756 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53078_53757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53079_53758 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53080_53759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__53081_53760 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53076_53755,G__53077_53756,G__53078_53757,G__53079_53758,G__53080_53759,G__53081_53760) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53076_53755,G__53077_53756,G__53078_53757,G__53079_53758,G__53080_53759,G__53081_53760));
var G__53082_53765 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__53083_53766 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53084_53767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53085_53768 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53086_53769 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__53087_53770 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53082_53765,G__53083_53766,G__53084_53767,G__53085_53768,G__53086_53769,G__53087_53770) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53082_53765,G__53083_53766,G__53084_53767,G__53085_53768,G__53086_53769,G__53087_53770));
var G__53088_53786 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__53089_53787 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53090_53788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__53091_53789 = (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53088_53786,G__53089_53787,G__53090_53788,G__53091_53789) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53088_53786,G__53089_53787,G__53090_53788,G__53091_53789));
var G__53092_53791 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__53093_53792 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53092_53791,G__53093_53792) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53092_53791,G__53093_53792));
var G__53094_53798 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__53095_53799 = (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53094_53798,G__53095_53799) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53094_53798,G__53095_53799));
var G__53096_53801 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__53097_53802 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53098_53803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__53099_53804 = (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53096_53801,G__53097_53802,G__53098_53803,G__53099_53804) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53096_53801,G__53097_53802,G__53098_53803,G__53099_53804));
var G__53105_53806 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__53106_53807 = (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53105_53806,G__53106_53807) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53105_53806,G__53106_53807));
var G__53107_53816 = new cljs.core.Keyword("epochs","all-events-by-id","epochs/all-events-by-id",-1225664812);
var G__53108_53817 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53109_53818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53110_53819 = (function (epochs,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"tags","tags",1771418977),day8.re_frame_10x.metamorphic.matched_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"match-info","match-info",666319879),cljs.core.val], 0))),new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53107_53816,G__53108_53817,G__53109_53818,G__53110_53819) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53107_53816,G__53108_53817,G__53109_53818,G__53110_53819));
var G__53111_53821 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__53112_53822 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53113_53823 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53114_53824 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53115_53825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53116_53826 = (function (p__53117,_){
var vec__53118 = p__53117;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53118,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53118,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53111_53821,G__53112_53822,G__53113_53823,G__53114_53824,G__53115_53825,G__53116_53826) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53111_53821,G__53112_53822,G__53113_53823,G__53114_53824,G__53115_53825,G__53116_53826));
var G__53121_53849 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__53122_53850 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53123_53851 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53124_53852 = (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53121_53849,G__53122_53850,G__53123_53851,G__53124_53852) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53121_53849,G__53122_53850,G__53123_53851,G__53124_53852));
var G__53125_53853 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__53126_53854 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53127_53855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53128_53856 = (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53125_53853,G__53126_53854,G__53127_53855,G__53128_53856) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53125_53853,G__53126_53854,G__53127_53855,G__53128_53856));
var G__53129_53858 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__53130_53859 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53131_53860 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__53132_53861 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53129_53858,G__53130_53859,G__53131_53860,G__53132_53861) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53129_53858,G__53130_53859,G__53131_53860,G__53132_53861));
var G__53137_53868 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__53138_53869 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53139_53870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53140_53871 = (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53137_53868,G__53138_53869,G__53139_53870,G__53140_53871) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53137_53868,G__53138_53869,G__53139_53870,G__53140_53871));
var G__53141_53872 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__53142_53873 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53143_53874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53144_53875 = (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53141_53872,G__53142_53873,G__53143_53874,G__53144_53875) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53141_53872,G__53142_53873,G__53143_53874,G__53144_53875));
var G__53145_53876 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__53146_53877 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53147_53878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53148_53879 = (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53145_53876,G__53146_53877,G__53147_53878,G__53148_53879) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53145_53876,G__53146_53877,G__53147_53878,G__53148_53879));
var G__53149_53880 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__53150_53881 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53151_53882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53152_53883 = (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53149_53880,G__53150_53881,G__53151_53882,G__53152_53883) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53149_53880,G__53150_53881,G__53151_53882,G__53152_53883));
var G__53153_53884 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__53154_53885 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53155_53886 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53156_53887 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53153_53884,G__53154_53885,G__53155_53886,G__53156_53887) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53153_53884,G__53154_53885,G__53155_53886,G__53156_53887));
var G__53157_53888 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__53158_53889 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53159_53890 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53160_53891 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53157_53888,G__53158_53889,G__53159_53890,G__53160_53891) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53157_53888,G__53158_53889,G__53159_53890,G__53160_53891));
var G__53161_53892 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__53162_53893 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53163_53894 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__53164_53895 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53165_53896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53166_53897 = (function (p__53173){
var vec__53174 = p__53173;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53174,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53174,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53161_53892,G__53162_53893,G__53163_53894,G__53164_53895,G__53165_53896,G__53166_53897) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53161_53892,G__53162_53893,G__53163_53894,G__53164_53895,G__53165_53896,G__53166_53897));
var G__53177_53898 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__53178_53899 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53179_53900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__53180_53901 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53181_53902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53182_53903 = (function (p__53183){
var vec__53184 = p__53183;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53184,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53184,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53177_53898,G__53178_53899,G__53179_53900,G__53180_53901,G__53181_53902,G__53182_53903) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53177_53898,G__53178_53899,G__53179_53900,G__53180_53901,G__53181_53902,G__53182_53903));
var G__53187_53904 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__53188_53905 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53189_53906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53190_53907 = (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53187_53904,G__53188_53905,G__53189_53906,G__53190_53907) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53187_53904,G__53188_53905,G__53189_53906,G__53190_53907));
var G__53192_53913 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__53193_53914 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53194_53915 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53195_53916 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53191_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__53191_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__53191_SHARP_)));
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53192_53913,G__53193_53914,G__53194_53915,G__53195_53916) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53192_53913,G__53193_53914,G__53194_53915,G__53195_53916));
var G__53196_53934 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__53197_53935 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53198_53936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__53199_53937 = (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53196_53934,G__53197_53935,G__53198_53936,G__53199_53937) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53196_53934,G__53197_53935,G__53198_53936,G__53199_53937));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__53204 = arguments.length;
switch (G__53204) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___53939 = arguments.length;
var i__4790__auto___53941 = (0);
while(true){
if((i__4790__auto___53941 < len__4789__auto___53939)){
args_arr__4810__auto__.push((arguments[i__4790__auto___53941]));

var G__53945 = (i__4790__auto___53941 + (1));
i__4790__auto___53941 = G__53945;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
}));

/** @this {Function} */
(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq53201){
var G__53202 = cljs.core.first(seq53201);
var seq53201__$1 = cljs.core.next(seq53201);
var G__53203 = cljs.core.first(seq53201__$1);
var seq53201__$2 = cljs.core.next(seq53201__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53202,G__53203,seq53201__$2);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2));

var G__53205_53980 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__53206_53981 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53207_53982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__53208_53983 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53209_53984 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53210_53985 = (function (p__53211,p__53212){
var vec__53213 = p__53211;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53213,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53213,(1),null);
var vec__53216 = p__53212;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53216,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53216,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__53219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53219,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53219,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53205_53980,G__53206_53981,G__53207_53982,G__53208_53983,G__53209_53984,G__53210_53985) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53205_53980,G__53206_53981,G__53207_53982,G__53208_53983,G__53209_53984,G__53210_53985));
var G__53231_53991 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__53232_53992 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53233_53993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53234_53994 = (function (match){
var map__53235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__53235__$1 = (((((!((map__53235 == null))))?(((((map__53235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53235):map__53235);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53235__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53235__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53235__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53235__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53231_53991,G__53232_53992,G__53233_53993,G__53234_53994) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53231_53991,G__53232_53992,G__53233_53993,G__53234_53994));
var G__53237_54005 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__53238_54006 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53239_54007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53240_54008 = (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53237_54005,G__53238_54006,G__53239_54007,G__53240_54008) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53237_54005,G__53238_54006,G__53239_54007,G__53240_54008));
var G__53241_54009 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__53242_54010 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53243_54011 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53244_54012 = (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53241_54009,G__53242_54010,G__53243_54011,G__53244_54012) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53241_54009,G__53242_54010,G__53243_54011,G__53244_54012));
var G__53245_54014 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__53246_54015 = (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53245_54014,G__53246_54015) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53245_54014,G__53246_54015));
var G__53247_54016 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__53248_54017 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53249_54018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53250_54019 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53247_54016,G__53248_54017,G__53249_54018,G__53250_54019) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53247_54016,G__53248_54017,G__53249_54018,G__53250_54019));
var G__53251_54020 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__53252_54021 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53253_54022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53254_54023 = (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53251_54020,G__53252_54021,G__53253_54022,G__53254_54023) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53251_54020,G__53252_54021,G__53253_54022,G__53254_54023));
var G__53255_54026 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__53256_54027 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53257_54028 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53258_54029 = (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53255_54026,G__53256_54027,G__53257_54028,G__53258_54029) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53255_54026,G__53256_54027,G__53257_54028,G__53258_54029));
var G__53259_54031 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__53260_54032 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53261_54033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53262_54034 = (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53259_54031,G__53260_54032,G__53261_54033,G__53262_54034) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53259_54031,G__53260_54032,G__53261_54033,G__53262_54034));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__53263_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__53263_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53264){
return cljs.core.coll_QMARK_(G__53264);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__53265){
return cljs.core.map_QMARK_(G__53265);
}),(function (G__53265){
return cljs.core.contains_QMARK_(G__53265,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__53265){
return cljs.core.contains_QMARK_(G__53265,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__53265){
return cljs.core.contains_QMARK_(G__53265,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__53265){
return cljs.core.contains_QMARK_(G__53265,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__53265){
return cljs.core.contains_QMARK_(G__53265,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__53265){
return cljs.core.contains_QMARK_(G__53265,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__53265){
return ((cljs.core.map_QMARK_(G__53265)) && (cljs.core.contains_QMARK_(G__53265,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__53265,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__53265,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__53265,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__53265,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__53265,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53272){
return cljs.core.coll_QMARK_(G__53272);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__53273 = sub_type;
var G__53273__$1 = (((G__53273 instanceof cljs.core.Keyword))?G__53273.fqn:null);
switch (G__53273__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__54089 = (exp - (1));
var G__54090 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__54091 = cljs.core.rest(order__$1);
exp = G__54089;
total = G__54090;
order__$1 = G__54091;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__53278 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__53278__$1 = (((G__53278 instanceof cljs.core.Keyword))?G__53278.fqn:null);
switch (G__53278__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__53283,p__53284){
var vec__53287 = p__53283;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53287,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53287,(1),null);
var vec__53290 = p__53284;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53290,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?(function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
}):cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__53308_54125 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__53309_54126 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53310_54127 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__53311_54128 = (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53308_54125,G__53309_54126,G__53310_54127,G__53311_54128) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53308_54125,G__53309_54126,G__53310_54127,G__53311_54128));
var G__53312_54129 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__53313_54130 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53314_54131 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__53315_54132 = (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53312_54129,G__53313_54130,G__53314_54131,G__53315_54132) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53312_54129,G__53313_54130,G__53314_54131,G__53315_54132));
var G__53317_54134 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__53318_54135 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53319_54136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__53320_54137 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53321_54138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__53322_54139 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53317_54134,G__53318_54135,G__53319_54136,G__53320_54137,G__53321_54138,G__53322_54139) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53317_54134,G__53318_54135,G__53319_54136,G__53320_54137,G__53321_54138,G__53322_54139));
var G__53340_54140 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__53341_54141 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53342_54142 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__53343_54143 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53344_54144 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__53345_54145 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53340_54140,G__53341_54141,G__53342_54142,G__53343_54143,G__53344_54144,G__53345_54145) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53340_54140,G__53341_54141,G__53342_54142,G__53343_54143,G__53344_54144,G__53345_54145));
var G__53347_54150 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__53348_54151 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53349_54152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53350_54153 = (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53347_54150,G__53348_54151,G__53349_54152,G__53350_54153) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53347_54150,G__53348_54151,G__53349_54152,G__53350_54153));
var G__53355_54154 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__53356_54155 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53357_54156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__53358_54157 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53359_54158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__53360_54159 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53361_54160 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__53362_54161 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53363_54162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__53364_54163 = (function (p__53365){
var vec__53367 = p__53365;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53367,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53367,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53367,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53367,(3),null);
var compare_fn = (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});
var G__53370 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__53370__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__53370):G__53370);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53375){
var map__53376 = p__53375;
var map__53376__$1 = (((((!((map__53376 == null))))?(((((map__53376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53376):map__53376);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53376__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53376__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4185__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
}),G__53370__$1);
} else {
return G__53370__$1;
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__53355_54154,G__53356_54155,G__53357_54156,G__53358_54157,G__53359_54158,G__53360_54159,G__53361_54160,G__53362_54161,G__53363_54162,G__53364_54163) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53355_54154,G__53356_54155,G__53357_54156,G__53358_54157,G__53359_54158,G__53360_54159,G__53361_54160,G__53362_54161,G__53363_54162,G__53364_54163));
var G__53378_54182 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__53379_54183 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53380_54184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__53381_54185 = (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53378_54182,G__53379_54183,G__53380_54184,G__53381_54185) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53378_54182,G__53379_54183,G__53380_54184,G__53381_54185));
var G__53382_54186 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__53383_54187 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53384_54188 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53385_54189 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53382_54186,G__53383_54187,G__53384_54188,G__53385_54189) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53382_54186,G__53383_54187,G__53384_54188,G__53385_54189));
var G__53387_54190 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__53388_54191 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53389_54192 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53390_54193 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53387_54190,G__53388_54191,G__53389_54192,G__53390_54193) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53387_54190,G__53388_54191,G__53389_54192,G__53390_54193));
var G__53391_54194 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__53392_54195 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53393_54196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53394_54197 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53391_54194,G__53392_54195,G__53393_54196,G__53394_54197) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53391_54194,G__53392_54195,G__53393_54196,G__53394_54197));
var G__53396_54198 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__53397_54199 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53398_54200 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53399_54201 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53396_54198,G__53397_54199,G__53398_54200,G__53399_54201) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53396_54198,G__53397_54199,G__53398_54200,G__53399_54201));
var G__53400_54202 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__53401_54203 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53402_54204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__53403_54205 = (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53400_54202,G__53401_54203,G__53402_54204,G__53403_54205) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53400_54202,G__53401_54203,G__53402_54204,G__53403_54205));
var G__53405_54206 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__53406_54207 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53407_54208 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53408_54209 = (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53405_54206,G__53406_54207,G__53407_54208,G__53408_54209) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53405_54206,G__53406_54207,G__53407_54208,G__53408_54209));
var G__53409_54210 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__53410_54211 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53411_54212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53412_54213 = (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53409_54210,G__53410_54211,G__53411_54212,G__53412_54213) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53409_54210,G__53410_54211,G__53411_54212,G__53412_54213));
var G__53413_54214 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__53414_54215 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53415_54216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53416_54217 = (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53413_54214,G__53414_54215,G__53415_54216,G__53416_54217) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53413_54214,G__53414_54215,G__53415_54216,G__53416_54217));
var G__53442_54233 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__53443_54234 = (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53442_54233,G__53443_54234) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53442_54233,G__53443_54234));
var G__53448_54235 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__53449_54236 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53450_54237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53451_54238 = (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53448_54235,G__53449_54236,G__53450_54237,G__53451_54238) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53448_54235,G__53449_54236,G__53450_54237,G__53451_54238));
var G__53452_54247 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__53453_54248 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53454_54249 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__53455_54250 = (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53452_54247,G__53453_54248,G__53454_54249,G__53455_54250) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53452_54247,G__53453_54248,G__53454_54249,G__53455_54250));
var G__53456_54251 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__53457_54252 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53458_54253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__53459_54254 = (function (form,_){
return zprint.core.zprint_str(form);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53456_54251,G__53457_54252,G__53458_54253,G__53459_54254) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53456_54251,G__53457_54252,G__53458_54253,G__53459_54254));
var G__53464_54255 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__53465_54256 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53466_54257 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53467_54258 = (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53464_54255,G__53465_54256,G__53466_54257,G__53467_54258) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53464_54255,G__53465_54256,G__53466_54257,G__53467_54258));
var G__53473_54259 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__53474_54260 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53475_54261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53476_54262 = (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53473_54259,G__53474_54260,G__53475_54261,G__53476_54262) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53473_54259,G__53474_54260,G__53475_54261,G__53476_54262));
var G__53499_54263 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__53500_54264 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53501_54265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53502_54266 = (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53499_54263,G__53500_54264,G__53501_54265,G__53502_54266) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53499_54263,G__53500_54264,G__53501_54265,G__53502_54266));
var G__53503_54267 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__53504_54268 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53505_54269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53506_54270 = (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53503_54267,G__53504_54268,G__53505_54269,G__53506_54270) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53503_54267,G__53504_54268,G__53505_54269,G__53506_54270));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__53507_54271 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__53508_54272 = (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53507_54271,G__53508_54272) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53507_54271,G__53508_54272));
var G__53513_54273 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__53514_54274 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53515_54275 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__53516_54276 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53517_54277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__53518_54278 = (function (p__53519,_){
var vec__53523 = p__53519;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53523,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53523,(1),null);
var G__53530 = (window_width / char_width);
return Math.ceil(G__53530);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53513_54273,G__53514_54274,G__53515_54275,G__53516_54276,G__53517_54277,G__53518_54278) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53513_54273,G__53514_54274,G__53515_54275,G__53516_54276,G__53517_54277,G__53518_54278));
var G__53532_54279 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__53535_54280 = (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53532_54279,G__53535_54280) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53532_54279,G__53535_54280));
var G__53541_54281 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__53542_54282 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53543_54283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__53544_54284 = (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53541_54281,G__53542_54282,G__53543_54283,G__53544_54284) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53541_54281,G__53542_54282,G__53543_54283,G__53544_54284));
var G__53545_54285 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__53546_54286 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53545_54285,G__53546_54286) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53545_54285,G__53546_54286));
var G__53551_54287 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__53552_54288 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53553_54289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__53554_54290 = (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53551_54287,G__53552_54288,G__53553_54289,G__53554_54290) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53551_54287,G__53552_54288,G__53553_54289,G__53554_54290));
var G__53557_54291 = new cljs.core.Keyword("history","showing-history?","history/showing-history?",896856376);
var G__53558_54292 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"showing-history?","showing-history?",2100610492)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53557_54291,G__53558_54292) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53557_54291,G__53558_54292));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
