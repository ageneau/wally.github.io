goog.provide('cljs_web3.utils');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_web3.utils.safe_case = (function cljs_web3$utils$safe_case(case_f){
return (function (x){
var G__47085 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(x),(1));
var G__47085__$1 = clojure.string.replace(G__47085,"_","*")
;
var G__47085__$2 = (case_f.cljs$core$IFn$_invoke$arity$1 ? case_f.cljs$core$IFn$_invoke$arity$1(G__47085__$1) : case_f.call(null,G__47085__$1))
;
var G__47085__$3 = clojure.string.replace(G__47085__$2,"*","_")
;
var G__47085__$4 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.name(x))),G__47085__$3].join('')
;
if((x instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__47085__$4);
} else {
return G__47085__$4;
}
});
});
cljs_web3.utils.camel_case = cljs_web3.utils.safe_case(camel_snake_kebab.core.__GT_camelCase);
cljs_web3.utils.kebab_case = cljs_web3.utils.safe_case(camel_snake_kebab.core.__GT_kebab_case);
cljs_web3.utils.js__GT_cljk = (function cljs_web3$utils$js__GT_cljk(p1__47086_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__47086_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
/**
 * From JavaScript to Clojure with kekab-cased keywords.
 */
cljs_web3.utils.js__GT_cljkk = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.extras.transform_keys,cljs_web3.utils.kebab_case),cljs_web3.utils.js__GT_cljk);
/**
 * From Clojure with kebab-cased keywords to JavaScript.
 */
cljs_web3.utils.cljkk__GT_js = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.extras.transform_keys,cljs_web3.utils.camel_case));
cljs_web3.utils.callback_js__GT_clj = (function cljs_web3$utils$callback_js__GT_clj(x){
if(cljs.core.fn_QMARK_(x)){
return (function (err,res){
if(cljs.core.truth_((function (){var and__4174__auto__ = res;
if(cljs.core.truth_(and__4174__auto__)){
return (res["v"]);
} else {
return and__4174__auto__;
}
})())){
(res["v"] = (res["v"]));
} else {
}

var G__47087 = err;
var G__47088 = (cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1 ? cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1(res) : cljs_web3.utils.js__GT_cljkk.call(null,res));
return (x.cljs$core$IFn$_invoke$arity$2 ? x.cljs$core$IFn$_invoke$arity$2(G__47087,G__47088) : x.call(null,G__47087,G__47088));
});
} else {
return x;
}
});
cljs_web3.utils.args_cljkk__GT_js = (function cljs_web3$utils$args_cljkk__GT_js(args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_web3.utils.cljkk__GT_js,cljs_web3.utils.callback_js__GT_clj),args);
});
cljs_web3.utils.js_apply = (function cljs_web3$utils$js_apply(var_args){
var G__47090 = arguments.length;
switch (G__47090) {
case 2:
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$2 = (function (this$,method_name){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(this$,method_name,null);
}));

(cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3 = (function (this$,method_name,args){
var method_name__$1 = (function (){var G__47091 = cljs.core.name(method_name);
return (cljs_web3.utils.camel_case.cljs$core$IFn$_invoke$arity$1 ? cljs_web3.utils.camel_case.cljs$core$IFn$_invoke$arity$1(G__47091) : cljs_web3.utils.camel_case.call(null,G__47091));
})();
if(cljs.core.truth_((this$[method_name__$1]))){
var G__47092 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,this$,method_name__$1,cljs_web3.utils.args_cljkk__GT_js(args));
return (cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1 ? cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1(G__47092) : cljs_web3.utils.js__GT_cljkk.call(null,G__47092));
} else {
throw ["Method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name__$1)," was not found in object."].join('');
}
}));

(cljs_web3.utils.js_apply.cljs$lang$maxFixedArity = 3);

cljs_web3.utils.js_prototype_apply = (function cljs_web3$utils$js_prototype_apply(js_obj,method_name,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3((js_obj["prototype"]),method_name,args);
});
/**
 * Constructor to create an fn to get properties or to get properties and apply a
 *   callback fn.
 */
cljs_web3.utils.prop_or_clb_fn = (function cljs_web3$utils$prop_or_clb_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47111 = arguments.length;
var i__4790__auto___47112 = (0);
while(true){
if((i__4790__auto___47112 < len__4789__auto___47111)){
args__4795__auto__.push((arguments[i__4790__auto___47112]));

var G__47113 = (i__4790__auto___47112 + (1));
i__4790__auto___47112 = G__47113;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic = (function (ks){
return (function() { 
var G__47114__delegate = function (web3,args){
if(cljs.core.fn_QMARK_(cljs.core.first(args))){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.aget,web3,cljs.core.butlast(ks)),["get",cljs.core.str.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.core.__GT_PascalCase(cljs.core.last(ks)))].join(''),args);
} else {
var G__47094 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.aget,web3,ks);
return (cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1 ? cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1(G__47094) : cljs_web3.utils.js__GT_cljkk.call(null,G__47094));
}
};
var G__47114 = function (web3,var_args){
var args = null;
if (arguments.length > 1) {
var G__47115__i = 0, G__47115__a = new Array(arguments.length -  1);
while (G__47115__i < G__47115__a.length) {G__47115__a[G__47115__i] = arguments[G__47115__i + 1]; ++G__47115__i;}
  args = new cljs.core.IndexedSeq(G__47115__a,0,null);
} 
return G__47114__delegate.call(this,web3,args);};
G__47114.cljs$lang$maxFixedArity = 1;
G__47114.cljs$lang$applyTo = (function (arglist__47116){
var web3 = cljs.core.first(arglist__47116);
var args = cljs.core.rest(arglist__47116);
return G__47114__delegate(web3,args);
});
G__47114.cljs$core$IFn$_invoke$arity$variadic = G__47114__delegate;
return G__47114;
})()
;
}));

(cljs_web3.utils.prop_or_clb_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs_web3.utils.prop_or_clb_fn.cljs$lang$applyTo = (function (seq47093){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47093));
}));

cljs_web3.utils.create_async_fn = (function cljs_web3$utils$create_async_fn(f){
return (function() { 
var G__47117__delegate = function (args){
var vec__47095 = (((cljs.core.first(args) instanceof cljs.core.async.impl.channels.ManyToManyChannel))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),args], null));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47095,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47095,(1),null);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (err,res){
var c__45988__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45989__auto__ = (function (){var switch__45965__auto__ = (function (state_47104){
var state_val_47105 = (state_47104[(1)]);
if((state_val_47105 === (1))){
var inst_47098 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47099 = [err,res];
var inst_47100 = (new cljs.core.PersistentVector(null,2,(5),inst_47098,inst_47099,null));
var state_47104__$1 = state_47104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47104__$1,(2),ch,inst_47100);
} else {
if((state_val_47105 === (2))){
var inst_47102 = (state_47104[(2)]);
var state_47104__$1 = state_47104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47104__$1,inst_47102);
} else {
return null;
}
}
});
return (function() {
var cljs_web3$utils$create_async_fn_$_state_machine__45966__auto__ = null;
var cljs_web3$utils$create_async_fn_$_state_machine__45966__auto____0 = (function (){
var statearr_47106 = [null,null,null,null,null,null,null];
(statearr_47106[(0)] = cljs_web3$utils$create_async_fn_$_state_machine__45966__auto__);

(statearr_47106[(1)] = (1));

return statearr_47106;
});
var cljs_web3$utils$create_async_fn_$_state_machine__45966__auto____1 = (function (state_47104){
while(true){
var ret_value__45967__auto__ = (function (){try{while(true){
var result__45968__auto__ = switch__45965__auto__(state_47104);
if(cljs.core.keyword_identical_QMARK_(result__45968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45968__auto__;
}
break;
}
}catch (e47107){if((e47107 instanceof Object)){
var ex__45969__auto__ = e47107;
var statearr_47108_47118 = state_47104;
(statearr_47108_47118[(5)] = ex__45969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47121 = state_47104;
state_47104 = G__47121;
continue;
} else {
return ret_value__45967__auto__;
}
break;
}
});
cljs_web3$utils$create_async_fn_$_state_machine__45966__auto__ = function(state_47104){
switch(arguments.length){
case 0:
return cljs_web3$utils$create_async_fn_$_state_machine__45966__auto____0.call(this);
case 1:
return cljs_web3$utils$create_async_fn_$_state_machine__45966__auto____1.call(this,state_47104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_web3$utils$create_async_fn_$_state_machine__45966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_web3$utils$create_async_fn_$_state_machine__45966__auto____0;
cljs_web3$utils$create_async_fn_$_state_machine__45966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_web3$utils$create_async_fn_$_state_machine__45966__auto____1;
return cljs_web3$utils$create_async_fn_$_state_machine__45966__auto__;
})()
})();
var state__45990__auto__ = (function (){var statearr_47109 = (f__45989__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45989__auto__.cljs$core$IFn$_invoke$arity$0() : f__45989__auto__.call(null));
(statearr_47109[(6)] = c__45988__auto__);

return statearr_47109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45990__auto__);
}));

return c__45988__auto__;
})], null)));

return ch;
};
var G__47117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47122__i = 0, G__47122__a = new Array(arguments.length -  0);
while (G__47122__i < G__47122__a.length) {G__47122__a[G__47122__i] = arguments[G__47122__i + 0]; ++G__47122__i;}
  args = new cljs.core.IndexedSeq(G__47122__a,0,null);
} 
return G__47117__delegate.call(this,args);};
G__47117.cljs$lang$maxFixedArity = 0;
G__47117.cljs$lang$applyTo = (function (arglist__47123){
var args = cljs.core.seq(arglist__47123);
return G__47117__delegate(args);
});
G__47117.cljs$core$IFn$_invoke$arity$variadic = G__47117__delegate;
return G__47117;
})()
;
});

//# sourceMappingURL=cljs_web3.utils.js.map
