goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_progress = goog.define("shadow.cljs.devtools.client.hud.show_progress",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_warnings = goog.define("shadow.cljs.devtools.client.hud.show_warnings",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_errors = goog.define("shadow.cljs.devtools.client.hud.show_errors",true);
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[shadow.cljs.devtools.client.env.get_url_base(),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__55908__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_59343){
var state_val_59344 = (state_59343[(1)]);
if((state_val_59344 === (7))){
var state_59343__$1 = state_59343;
var statearr_59345_59597 = state_59343__$1;
(statearr_59345_59597[(2)] = false);

(statearr_59345_59597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (1))){
var state_59343__$1 = state_59343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59343__$1,(2),req);
} else {
if((state_val_59344 === (4))){
var inst_59303 = (state_59343[(7)]);
var inst_59309 = (inst_59303 == null);
var inst_59310 = cljs.core.not(inst_59309);
var state_59343__$1 = state_59343;
if(inst_59310){
var statearr_59346_59602 = state_59343__$1;
(statearr_59346_59602[(1)] = (6));

} else {
var statearr_59347_59603 = state_59343__$1;
(statearr_59347_59603[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (15))){
var state_59343__$1 = state_59343;
var statearr_59348_59610 = state_59343__$1;
(statearr_59348_59610[(2)] = null);

(statearr_59348_59610[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (13))){
var inst_59303 = (state_59343[(7)]);
var state_59343__$1 = state_59343;
var statearr_59349_59611 = state_59343__$1;
(statearr_59349_59611[(2)] = inst_59303);

(statearr_59349_59611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (6))){
var inst_59303 = (state_59343[(7)]);
var inst_59312 = inst_59303.cljs$lang$protocol_mask$partition0$;
var inst_59313 = (inst_59312 & (64));
var inst_59314 = inst_59303.cljs$core$ISeq$;
var inst_59315 = (cljs.core.PROTOCOL_SENTINEL === inst_59314);
var inst_59316 = ((inst_59313) || (inst_59315));
var state_59343__$1 = state_59343;
if(cljs.core.truth_(inst_59316)){
var statearr_59350_59612 = state_59343__$1;
(statearr_59350_59612[(1)] = (9));

} else {
var statearr_59351_59613 = state_59343__$1;
(statearr_59351_59613[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (17))){
var inst_59339 = (state_59343[(2)]);
var state_59343__$1 = state_59343;
var statearr_59352_59619 = state_59343__$1;
(statearr_59352_59619[(2)] = inst_59339);

(statearr_59352_59619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (3))){
var state_59343__$1 = state_59343;
var statearr_59353_59626 = state_59343__$1;
(statearr_59353_59626[(2)] = null);

(statearr_59353_59626[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (12))){
var inst_59303 = (state_59343[(7)]);
var inst_59329 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59303);
var state_59343__$1 = state_59343;
var statearr_59354_59633 = state_59343__$1;
(statearr_59354_59633[(2)] = inst_59329);

(statearr_59354_59633[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (2))){
var inst_59303 = (state_59343[(7)]);
var inst_59303__$1 = (state_59343[(2)]);
var inst_59304 = (inst_59303__$1 == null);
var state_59343__$1 = (function (){var statearr_59355 = state_59343;
(statearr_59355[(7)] = inst_59303__$1);

return statearr_59355;
})();
if(cljs.core.truth_(inst_59304)){
var statearr_59356_59634 = state_59343__$1;
(statearr_59356_59634[(1)] = (3));

} else {
var statearr_59357_59635 = state_59343__$1;
(statearr_59357_59635[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (11))){
var inst_59320 = (state_59343[(2)]);
var state_59343__$1 = state_59343;
var statearr_59358_59640 = state_59343__$1;
(statearr_59358_59640[(2)] = inst_59320);

(statearr_59358_59640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (9))){
var state_59343__$1 = state_59343;
var statearr_59359_59641 = state_59343__$1;
(statearr_59359_59641[(2)] = true);

(statearr_59359_59641[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (5))){
var inst_59341 = (state_59343[(2)]);
var state_59343__$1 = state_59343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59343__$1,inst_59341);
} else {
if((state_val_59344 === (14))){
var inst_59332 = (state_59343[(8)]);
var inst_59332__$1 = (state_59343[(2)]);
var inst_59333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59332__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_59334 = (inst_59333 === (0));
var state_59343__$1 = (function (){var statearr_59360 = state_59343;
(statearr_59360[(8)] = inst_59332__$1);

return statearr_59360;
})();
if(cljs.core.truth_(inst_59334)){
var statearr_59361_59643 = state_59343__$1;
(statearr_59361_59643[(1)] = (15));

} else {
var statearr_59362_59645 = state_59343__$1;
(statearr_59362_59645[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (16))){
var inst_59332 = (state_59343[(8)]);
var inst_59337 = console.warn("file open failed",inst_59332);
var state_59343__$1 = state_59343;
var statearr_59363_59650 = state_59343__$1;
(statearr_59363_59650[(2)] = inst_59337);

(statearr_59363_59650[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (10))){
var state_59343__$1 = state_59343;
var statearr_59364_59655 = state_59343__$1;
(statearr_59364_59655[(2)] = false);

(statearr_59364_59655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59344 === (8))){
var inst_59327 = (state_59343[(2)]);
var state_59343__$1 = state_59343;
if(cljs.core.truth_(inst_59327)){
var statearr_59365_59657 = state_59343__$1;
(statearr_59365_59657[(1)] = (12));

} else {
var statearr_59366_59658 = state_59343__$1;
(statearr_59366_59658[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__55808__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__55808__auto____0 = (function (){
var statearr_59367 = [null,null,null,null,null,null,null,null,null];
(statearr_59367[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__55808__auto__);

(statearr_59367[(1)] = (1));

return statearr_59367;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__55808__auto____1 = (function (state_59343){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_59343);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e59368){if((e59368 instanceof Object)){
var ex__55811__auto__ = e59368;
var statearr_59369_59664 = state_59343;
(statearr_59369_59664[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59368;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59665 = state_59343;
state_59343 = G__59665;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__55808__auto__ = function(state_59343){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__55808__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__55808__auto____1.call(this,state_59343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__55808__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__55808__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_59370 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_59370[(6)] = c__55908__auto__);

return statearr_59370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));

return c__55908__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__59378 = arguments.length;
switch (G__59378) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
}));

(shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5739__auto___59669 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5739__auto___59669 == null)){
} else {
var x_59693 = temp__5739__auto___59669;
shadow.dom.remove(x_59693);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
}));

(shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
if(shadow.cljs.devtools.client.hud.show_progress){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
if(shadow.cljs.devtools.client.hud.show_progress){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var container_el = temp__5739__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__55908__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_59398){
var state_val_59399 = (state_59398[(1)]);
if((state_val_59399 === (1))){
var inst_59386 = cljs.core.async.timeout((250));
var state_59398__$1 = state_59398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59398__$1,(2),inst_59386);
} else {
if((state_val_59399 === (2))){
var inst_59388 = (state_59398[(2)]);
var inst_59389 = [el];
var inst_59390 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_59391 = [inst_59390];
var inst_59392 = cljs.core.PersistentHashMap.fromArrays(inst_59389,inst_59391);
var inst_59393 = shadow.animate.start((250),inst_59392);
var state_59398__$1 = (function (){var statearr_59400 = state_59398;
(statearr_59400[(7)] = inst_59388);

return statearr_59400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59398__$1,(3),inst_59393);
} else {
if((state_val_59399 === (3))){
var inst_59395 = (state_59398[(2)]);
var inst_59396 = shadow.dom.remove(container_el);
var state_59398__$1 = (function (){var statearr_59401 = state_59398;
(statearr_59401[(8)] = inst_59395);

return statearr_59401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59398__$1,inst_59396);
} else {
return null;
}
}
}
});
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55808__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55808__auto____0 = (function (){
var statearr_59402 = [null,null,null,null,null,null,null,null,null];
(statearr_59402[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55808__auto__);

(statearr_59402[(1)] = (1));

return statearr_59402;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55808__auto____1 = (function (state_59398){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_59398);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e59403){if((e59403 instanceof Object)){
var ex__55811__auto__ = e59403;
var statearr_59404_59700 = state_59398;
(statearr_59404_59700[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59403;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59713 = state_59398;
state_59398 = G__59713;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55808__auto__ = function(state_59398){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55808__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55808__auto____1.call(this,state_59398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55808__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55808__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_59405 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_59405[(6)] = c__55908__auto__);

return statearr_59405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));

return c__55908__auto__;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var el = temp__5739__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var d = temp__5739__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4582__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__59407(s__59408){
return (new cljs.core.LazySeq(null,(function (){
var s__59408__$1 = s__59408;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59408__$1);
if(temp__5735__auto__){
var s__59408__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59408__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59408__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59410 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59409 = (0);
while(true){
if((i__59409 < size__4581__auto__)){
var vec__59413 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59409);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59413,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59413,(1),null);
cljs.core.chunk_append(b__59410,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__59416 = "%4d | %s";
var G__59417 = (((1) + idx) + start_idx);
var G__59418 = text;
return goog.string.format(G__59416,G__59417,G__59418);
})()], null));

var G__59726 = (i__59409 + (1));
i__59409 = G__59726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59410),shadow$cljs$devtools$client$hud$source_line_html_$_iter__59407(cljs.core.chunk_rest(s__59408__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59410),null);
}
} else {
var vec__59423 = cljs.core.first(s__59408__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59423,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59423,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__59426 = "%4d | %s";
var G__59427 = (((1) + idx) + start_idx);
var G__59428 = text;
return goog.string.format(G__59426,G__59427,G__59428);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__59407(cljs.core.rest(s__59408__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__59430 = arguments.length;
switch (G__59430) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
}));

(shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});
return [sep(offset),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),sep((sep_len - (offset + len)))].join('');
}));

(shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__59440){
var map__59441 = p__59440;
var map__59441__$1 = (((((!((map__59441 == null))))?(((((map__59441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59441):map__59441);
var warning = map__59441__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59441__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59441__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59441__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59441__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
})], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__59453){
var map__59454 = p__59453;
var map__59454__$1 = (((((!((map__59454 == null))))?(((((map__59454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59454):map__59454);
var warning = map__59454__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__59461 = source_excerpt;
var map__59461__$1 = (((((!((map__59461 == null))))?(((((map__59461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59461):map__59461);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59461__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59461__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59461__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59461__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4185__auto__ = column;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__59468){
var map__59469 = p__59468;
var map__59469__$1 = (((((!((map__59469 == null))))?(((((map__59469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59469):map__59469);
var msg = map__59469__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59469__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59469__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__59471 = info;
var map__59471__$1 = (((((!((map__59471 == null))))?(((((map__59471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59471):map__59471);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59471__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59467_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__59467_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

if(shadow.cljs.devtools.client.hud.show_warnings){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__59473(s__59474){
return (new cljs.core.LazySeq(null,(function (){
var s__59474__$1 = s__59474;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59474__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__59480 = cljs.core.first(xs__6292__auto__);
var map__59480__$1 = (((((!((map__59480 == null))))?(((((map__59480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59480):map__59480);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59480__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4578__auto__ = ((function (s__59474__$1,map__59480,map__59480__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__59471,map__59471__$1,sources,sources_with_warnings,map__59469,map__59469__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__59473_$_iter__59475(s__59476){
return (new cljs.core.LazySeq(null,((function (s__59474__$1,map__59480,map__59480__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__59471,map__59471__$1,sources,sources_with_warnings,map__59469,map__59469__$1,msg,type,info){
return (function (){
var s__59476__$1 = s__59476;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59476__$1);
if(temp__5735__auto____$1){
var s__59476__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59476__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59476__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59478 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59477 = (0);
while(true){
if((i__59477 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59477);
cljs.core.chunk_append(b__59478,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__59790 = (i__59477 + (1));
i__59477 = G__59790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59478),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__59473_$_iter__59475(cljs.core.chunk_rest(s__59476__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59478),null);
}
} else {
var warning = cljs.core.first(s__59476__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__59473_$_iter__59475(cljs.core.rest(s__59476__$2)));
}
} else {
return null;
}
break;
}
});})(s__59474__$1,map__59480,map__59480__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__59471,map__59471__$1,sources,sources_with_warnings,map__59469,map__59469__$1,msg,type,info))
,null,null));
});})(s__59474__$1,map__59480,map__59480__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__59471,map__59471__$1,sources,sources_with_warnings,map__59469,map__59469__$1,msg,type,info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__59473(cljs.core.rest(s__59474__$1)));
} else {
var G__59792 = cljs.core.rest(s__59474__$1);
s__59474__$1 = G__59792;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__59496){
var map__59497 = p__59496;
var map__59497__$1 = (((((!((map__59497 == null))))?(((((map__59497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59497):map__59497);
var msg = map__59497__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59497__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var x = temp__5739__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
