goog.provide('wally.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('wally.subs');
goog.require('cljs_web3.core');
wally.views.home_title = (function wally$views$home_title(){
var name = (function (){var G__49582 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.subs","name","wally.subs/name",1010698495)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49582) : re_frame.core.subscribe.call(null,G__49582));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Stream DAI tokens over time",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
wally.views.link_to_about_page = (function wally$views$link_to_about_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"go to About Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null);
});
wally.views.networks = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"label","label",1718410804),"Main Ethereum Network"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ropsten","ropsten",2140233529),new cljs.core.Keyword(null,"label","label",1718410804),"Ropsten Test Network"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rinkeby","rinkeby",2002123603),new cljs.core.Keyword(null,"label","label",1718410804),"Rinkeby Test Network"], null)], null);
wally.views.valid_dest_QMARK_ = cljs_web3.core.address_QMARK_;
wally.views.valid_amount_QMARK_ = cljs.core.pos_QMARK_;
wally.views.valid_duration_QMARK_ = cljs.core.pos_QMARK_;
wally.views.valid_form_QMARK_ = (function wally$views$valid_form_QMARK_(form){
var and__4174__auto__ = (function (){var G__49585 = new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(form);
return (wally.views.valid_duration_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wally.views.valid_duration_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49585) : wally.views.valid_duration_QMARK_.call(null,G__49585));
})();
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = (function (){var G__49588 = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(form);
return (wally.views.valid_amount_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wally.views.valid_amount_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49588) : wally.views.valid_amount_QMARK_.call(null,G__49588));
})();
if(cljs.core.truth_(and__4174__auto____$1)){
var G__49589 = new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(form);
return (wally.views.valid_dest_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wally.views.valid_dest_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49589) : wally.views.valid_dest_QMARK_.call(null,G__49589));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
});
wally.views.recipient_input = (function wally$views$recipient_input(){
var dest = cljs.core.deref((function (){var G__49591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.subs","dest","wally.subs/dest",663665485)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49591) : re_frame.core.subscribe.call(null,G__49591));
})());
var status = (cljs.core.truth_((wally.views.valid_dest_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wally.views.valid_dest_QMARK_.cljs$core$IFn$_invoke$arity$1(dest) : wally.views.valid_dest_QMARK_.call(null,dest)))?new cljs.core.Keyword(null,"success","success",1890645906):null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),dest,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),true,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),"valid address",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"recipient address",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49590_SHARP_){
var G__49592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dest-changed","dest-changed",1906989995),p1__49590_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49592) : re_frame.core.dispatch.call(null,G__49592));
})], null);
});
wally.views.amount_input = (function wally$views$amount_input(){
var amount = cljs.core.deref((function (){var G__49594 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.subs","amount","wally.subs/amount",1682731854)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49594) : re_frame.core.subscribe.call(null,G__49594));
})());
var status = (cljs.core.truth_((wally.views.valid_amount_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wally.views.valid_amount_QMARK_.cljs$core$IFn$_invoke$arity$1(amount) : wally.views.valid_amount_QMARK_.call(null,amount)))?new cljs.core.Keyword(null,"success","success",1890645906):null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),amount,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),true,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),"valid amount",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Amount to send",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49593_SHARP_){
var G__49595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amount-changed","amount-changed",815260805),p1__49593_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49595) : re_frame.core.dispatch.call(null,G__49595));
})], null);
});
wally.views.duration_input = (function wally$views$duration_input(){
var duration = cljs.core.deref((function (){var G__49597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.subs","duration","wally.subs/duration",-1551596326)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49597) : re_frame.core.subscribe.call(null,G__49597));
})());
var status = (cljs.core.truth_((wally.views.valid_duration_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wally.views.valid_duration_QMARK_.cljs$core$IFn$_invoke$arity$1(duration) : wally.views.valid_duration_QMARK_.call(null,duration)))?new cljs.core.Keyword(null,"success","success",1890645906):null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),duration,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),true,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),"valid duration",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Stream duration in minutes",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49596_SHARP_){
var G__49598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration-changed","duration-changed",1562084370),p1__49596_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49598) : re_frame.core.dispatch.call(null,G__49598));
})], null);
});
wally.views.send_button = (function wally$views$send_button(){
var form = cljs.core.deref((function (){var G__49599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.subs","form","wally.subs/form",-238551473)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49599) : re_frame.core.subscribe.call(null,G__49599));
})());
var valid_QMARK_ = wally.views.valid_form_QMARK_(form);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Stream funds",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.not(valid_QMARK_),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4d90fe"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submit-clicked","submit-clicked",1769397283)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49600) : re_frame.core.dispatch.call(null,G__49600));
})], null);
});
wally.views.account_label = (function wally$views$account_label(){
var accounts = cljs.core.deref((function (){var G__49601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.subs","accounts","wally.subs/accounts",401184974)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49601) : re_frame.core.subscribe.call(null,G__49601));
})());
var account = cljs.core.first(accounts);
var balance = cljs.core.deref((function (){var G__49602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.subs","balance","wally.subs/balance",-873285553),account], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49602) : re_frame.core.subscribe.call(null,G__49602));
})());
var token_balance = cljs.core.deref((function (){var G__49603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.subs","token-balance","wally.subs/token-balance",-2043949173),account], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49603) : re_frame.core.subscribe.call(null,G__49603));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49604 = new cljs.core.Keyword(null,"label","label",1718410804);
var G__49605 = ["Account: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account)].join('');
return (re_com.core.label.cljs$core$IFn$_invoke$arity$2 ? re_com.core.label.cljs$core$IFn$_invoke$arity$2(G__49604,G__49605) : re_com.core.label.call(null,G__49604,G__49605));
})(),(function (){var G__49606 = new cljs.core.Keyword(null,"label","label",1718410804);
var G__49607 = ["Balance: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_web3.core.from_wei.cljs$core$IFn$_invoke$arity$2(balance,new cljs.core.Keyword(null,"ether","ether",-911152777)))," ETH"].join('');
return (re_com.core.label.cljs$core$IFn$_invoke$arity$2 ? re_com.core.label.cljs$core$IFn$_invoke$arity$2(G__49606,G__49607) : re_com.core.label.call(null,G__49606,G__49607));
})()], null)], null);
});
wally.views.home_panel = (function wally$views$home_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"30px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.home_title], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Connect to MetaMask "], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","metamask","login/metamask",1696747605)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49608) : re_frame.core.dispatch.call(null,G__49608));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4d90fe"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.account_label], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.recipient_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.amount_input], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.duration_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.send_button], null)], null)], null);
});
wally.views.about_title = (function wally$views$about_title(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"This is the About Page.",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
wally.views.link_to_home_page = (function wally$views$link_to_home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"go to Home Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null);
});
wally.views.about_panel = (function wally$views$about_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.about_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.link_to_home_page], null)], null)], null);
});
wally.views.panels = (function wally$views$panels(panel_name){
var G__49609 = panel_name;
var G__49609__$1 = (((G__49609 instanceof cljs.core.Keyword))?G__49609.fqn:null);
switch (G__49609__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.home_panel], null);

break;
case "about-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.about_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
wally.views.show_panel = (function wally$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.panels,panel_name], null);
});
wally.views.main_panel = (function wally$views$main_panel(){
var active_panel = (function (){var G__49610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wally.subs","active-panel","wally.subs/active-panel",-969867416)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49610) : re_frame.core.subscribe.call(null,G__49610));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wally.views.panels,cljs.core.deref(active_panel)], null)], null)], null);
});

//# sourceMappingURL=wally.views.js.map
