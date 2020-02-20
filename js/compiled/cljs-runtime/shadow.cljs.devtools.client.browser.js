goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59835 = arguments.length;
var i__4790__auto___59836 = (0);
while(true){
if((i__4790__auto___59836 < len__4789__auto___59835)){
args__4795__auto__.push((arguments[i__4790__auto___59836]));

var G__59838 = (i__4790__auto___59836 + (1));
i__4790__auto___59836 = G__59838;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq59520){
var G__59521 = cljs.core.first(seq59520);
var seq59520__$1 = cljs.core.next(seq59520);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59521,seq59520__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__59554){
var map__59555 = p__59554;
var map__59555__$1 = (((((!((map__59555 == null))))?(((((map__59555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59555):map__59555);
var src = map__59555__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59555__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59555__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__59562 = cljs.core.seq(sources);
var chunk__59563 = null;
var count__59564 = (0);
var i__59565 = (0);
while(true){
if((i__59565 < count__59564)){
var map__59595 = chunk__59563.cljs$core$IIndexed$_nth$arity$2(null,i__59565);
var map__59595__$1 = (((((!((map__59595 == null))))?(((((map__59595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59595):map__59595);
var src = map__59595__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59595__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59595__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59595__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59595__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59670){var e_59842 = e59670;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_59842);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_59842.message)].join('')));
}

var G__59843 = seq__59562;
var G__59844 = chunk__59563;
var G__59845 = count__59564;
var G__59846 = (i__59565 + (1));
seq__59562 = G__59843;
chunk__59563 = G__59844;
count__59564 = G__59845;
i__59565 = G__59846;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59562);
if(temp__5735__auto__){
var seq__59562__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59562__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59562__$1);
var G__59847 = cljs.core.chunk_rest(seq__59562__$1);
var G__59848 = c__4609__auto__;
var G__59849 = cljs.core.count(c__4609__auto__);
var G__59850 = (0);
seq__59562 = G__59847;
chunk__59563 = G__59848;
count__59564 = G__59849;
i__59565 = G__59850;
continue;
} else {
var map__59671 = cljs.core.first(seq__59562__$1);
var map__59671__$1 = (((((!((map__59671 == null))))?(((((map__59671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59671):map__59671);
var src = map__59671__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59671__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59671__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59671__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59671__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59673){var e_59851 = e59673;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_59851);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_59851.message)].join('')));
}

var G__59852 = cljs.core.next(seq__59562__$1);
var G__59853 = null;
var G__59854 = (0);
var G__59855 = (0);
seq__59562 = G__59852;
chunk__59563 = G__59853;
count__59564 = G__59854;
i__59565 = G__59855;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__59674 = cljs.core.seq(js_requires);
var chunk__59675 = null;
var count__59676 = (0);
var i__59677 = (0);
while(true){
if((i__59677 < count__59676)){
var js_ns = chunk__59675.cljs$core$IIndexed$_nth$arity$2(null,i__59677);
var require_str_59856 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_59856);


var G__59857 = seq__59674;
var G__59858 = chunk__59675;
var G__59859 = count__59676;
var G__59860 = (i__59677 + (1));
seq__59674 = G__59857;
chunk__59675 = G__59858;
count__59676 = G__59859;
i__59677 = G__59860;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59674);
if(temp__5735__auto__){
var seq__59674__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59674__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59674__$1);
var G__59861 = cljs.core.chunk_rest(seq__59674__$1);
var G__59862 = c__4609__auto__;
var G__59863 = cljs.core.count(c__4609__auto__);
var G__59864 = (0);
seq__59674 = G__59861;
chunk__59675 = G__59862;
count__59676 = G__59863;
i__59677 = G__59864;
continue;
} else {
var js_ns = cljs.core.first(seq__59674__$1);
var require_str_59865 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_59865);


var G__59866 = cljs.core.next(seq__59674__$1);
var G__59867 = null;
var G__59868 = (0);
var G__59869 = (0);
seq__59674 = G__59866;
chunk__59675 = G__59867;
count__59676 = G__59868;
i__59677 = G__59869;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__59687 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__59687) : callback.call(null,G__59687));
} else {
var G__59688 = shadow.cljs.devtools.client.env.files_url();
var G__59689 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__59690 = "POST";
var G__59691 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__59692 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59688,G__59689,G__59690,G__59691,G__59692);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__59695){
var map__59696 = p__59695;
var map__59696__$1 = (((((!((map__59696 == null))))?(((((map__59696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59696):map__59696);
var msg = map__59696__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59696__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59696__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__59702 = info;
var map__59702__$1 = (((((!((map__59702 == null))))?(((((map__59702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59702):map__59702);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59702__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59702__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59704(s__59705){
return (new cljs.core.LazySeq(null,(function (){
var s__59705__$1 = s__59705;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59705__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__59711 = cljs.core.first(xs__6292__auto__);
var map__59711__$1 = (((((!((map__59711 == null))))?(((((map__59711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59711):map__59711);
var src = map__59711__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59711__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59711__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__59705__$1,map__59711,map__59711__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59702,map__59702__$1,sources,compiled,map__59696,map__59696__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59704_$_iter__59706(s__59707){
return (new cljs.core.LazySeq(null,((function (s__59705__$1,map__59711,map__59711__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59702,map__59702__$1,sources,compiled,map__59696,map__59696__$1,msg,info,reload_info){
return (function (){
var s__59707__$1 = s__59707;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59707__$1);
if(temp__5735__auto____$1){
var s__59707__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59707__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59707__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59709 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59708 = (0);
while(true){
if((i__59708 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59708);
cljs.core.chunk_append(b__59709,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__59871 = (i__59708 + (1));
i__59708 = G__59871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59709),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59704_$_iter__59706(cljs.core.chunk_rest(s__59707__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59709),null);
}
} else {
var warning = cljs.core.first(s__59707__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59704_$_iter__59706(cljs.core.rest(s__59707__$2)));
}
} else {
return null;
}
break;
}
});})(s__59705__$1,map__59711,map__59711__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59702,map__59702__$1,sources,compiled,map__59696,map__59696__$1,msg,info,reload_info))
,null,null));
});})(s__59705__$1,map__59711,map__59711__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59702,map__59702__$1,sources,compiled,map__59696,map__59696__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59704(cljs.core.rest(s__59705__$1)));
} else {
var G__59874 = cljs.core.rest(s__59705__$1);
s__59705__$1 = G__59874;
continue;
}
} else {
var G__59875 = cljs.core.rest(s__59705__$1);
s__59705__$1 = G__59875;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__59714_59876 = cljs.core.seq(warnings);
var chunk__59715_59877 = null;
var count__59716_59878 = (0);
var i__59717_59879 = (0);
while(true){
if((i__59717_59879 < count__59716_59878)){
var map__59722_59880 = chunk__59715_59877.cljs$core$IIndexed$_nth$arity$2(null,i__59717_59879);
var map__59722_59881__$1 = (((((!((map__59722_59880 == null))))?(((((map__59722_59880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59722_59880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59722_59880):map__59722_59880);
var w_59882 = map__59722_59881__$1;
var msg_59883__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722_59881__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_59884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722_59881__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_59885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722_59881__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_59886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722_59881__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_59886)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_59884),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_59885),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_59883__$1)].join(''));


var G__59887 = seq__59714_59876;
var G__59888 = chunk__59715_59877;
var G__59889 = count__59716_59878;
var G__59890 = (i__59717_59879 + (1));
seq__59714_59876 = G__59887;
chunk__59715_59877 = G__59888;
count__59716_59878 = G__59889;
i__59717_59879 = G__59890;
continue;
} else {
var temp__5735__auto___59891 = cljs.core.seq(seq__59714_59876);
if(temp__5735__auto___59891){
var seq__59714_59892__$1 = temp__5735__auto___59891;
if(cljs.core.chunked_seq_QMARK_(seq__59714_59892__$1)){
var c__4609__auto___59893 = cljs.core.chunk_first(seq__59714_59892__$1);
var G__59894 = cljs.core.chunk_rest(seq__59714_59892__$1);
var G__59895 = c__4609__auto___59893;
var G__59896 = cljs.core.count(c__4609__auto___59893);
var G__59897 = (0);
seq__59714_59876 = G__59894;
chunk__59715_59877 = G__59895;
count__59716_59878 = G__59896;
i__59717_59879 = G__59897;
continue;
} else {
var map__59725_59898 = cljs.core.first(seq__59714_59892__$1);
var map__59725_59899__$1 = (((((!((map__59725_59898 == null))))?(((((map__59725_59898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59725_59898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59725_59898):map__59725_59898);
var w_59900 = map__59725_59899__$1;
var msg_59901__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725_59899__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_59902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725_59899__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_59903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725_59899__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_59904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725_59899__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_59904)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_59902),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_59903),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_59901__$1)].join(''));


var G__59905 = cljs.core.next(seq__59714_59892__$1);
var G__59906 = null;
var G__59907 = (0);
var G__59908 = (0);
seq__59714_59876 = G__59905;
chunk__59715_59877 = G__59906;
count__59716_59878 = G__59907;
i__59717_59879 = G__59908;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59734){
var map__59735 = p__59734;
var map__59735__$1 = (((((!((map__59735 == null))))?(((((map__59735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59735):map__59735);
var src = map__59735__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59735__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59735__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59737){
var map__59738 = p__59737;
var map__59738__$1 = (((((!((map__59738 == null))))?(((((map__59738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59738):map__59738);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59738__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59744){
var map__59745 = p__59744;
var map__59745__$1 = (((((!((map__59745 == null))))?(((((map__59745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59745):map__59745);
var rc = map__59745__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59745__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__59694_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__59694_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__59747){
var map__59748 = p__59747;
var map__59748__$1 = (((((!((map__59748 == null))))?(((((map__59748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59748):map__59748);
var msg = map__59748__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59748__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__59750 = cljs.core.seq(updates);
var chunk__59752 = null;
var count__59753 = (0);
var i__59754 = (0);
while(true){
if((i__59754 < count__59753)){
var path = chunk__59752.cljs$core$IIndexed$_nth$arity$2(null,i__59754);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59780_59909 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59783_59910 = null;
var count__59784_59911 = (0);
var i__59785_59912 = (0);
while(true){
if((i__59785_59912 < count__59784_59911)){
var node_59913 = chunk__59783_59910.cljs$core$IIndexed$_nth$arity$2(null,i__59785_59912);
var path_match_59914 = shadow.cljs.devtools.client.browser.match_paths(node_59913.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59914)){
var new_link_59915 = (function (){var G__59791 = node_59913.cloneNode(true);
G__59791.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59914),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59791;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59914], 0));

goog.dom.insertSiblingAfter(new_link_59915,node_59913);

goog.dom.removeNode(node_59913);


var G__59916 = seq__59780_59909;
var G__59917 = chunk__59783_59910;
var G__59918 = count__59784_59911;
var G__59919 = (i__59785_59912 + (1));
seq__59780_59909 = G__59916;
chunk__59783_59910 = G__59917;
count__59784_59911 = G__59918;
i__59785_59912 = G__59919;
continue;
} else {
var G__59920 = seq__59780_59909;
var G__59921 = chunk__59783_59910;
var G__59922 = count__59784_59911;
var G__59923 = (i__59785_59912 + (1));
seq__59780_59909 = G__59920;
chunk__59783_59910 = G__59921;
count__59784_59911 = G__59922;
i__59785_59912 = G__59923;
continue;
}
} else {
var temp__5735__auto___59924 = cljs.core.seq(seq__59780_59909);
if(temp__5735__auto___59924){
var seq__59780_59925__$1 = temp__5735__auto___59924;
if(cljs.core.chunked_seq_QMARK_(seq__59780_59925__$1)){
var c__4609__auto___59926 = cljs.core.chunk_first(seq__59780_59925__$1);
var G__59927 = cljs.core.chunk_rest(seq__59780_59925__$1);
var G__59928 = c__4609__auto___59926;
var G__59929 = cljs.core.count(c__4609__auto___59926);
var G__59930 = (0);
seq__59780_59909 = G__59927;
chunk__59783_59910 = G__59928;
count__59784_59911 = G__59929;
i__59785_59912 = G__59930;
continue;
} else {
var node_59931 = cljs.core.first(seq__59780_59925__$1);
var path_match_59932 = shadow.cljs.devtools.client.browser.match_paths(node_59931.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59932)){
var new_link_59933 = (function (){var G__59793 = node_59931.cloneNode(true);
G__59793.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59932),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59793;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59932], 0));

goog.dom.insertSiblingAfter(new_link_59933,node_59931);

goog.dom.removeNode(node_59931);


var G__59934 = cljs.core.next(seq__59780_59925__$1);
var G__59935 = null;
var G__59936 = (0);
var G__59937 = (0);
seq__59780_59909 = G__59934;
chunk__59783_59910 = G__59935;
count__59784_59911 = G__59936;
i__59785_59912 = G__59937;
continue;
} else {
var G__59938 = cljs.core.next(seq__59780_59925__$1);
var G__59939 = null;
var G__59940 = (0);
var G__59941 = (0);
seq__59780_59909 = G__59938;
chunk__59783_59910 = G__59939;
count__59784_59911 = G__59940;
i__59785_59912 = G__59941;
continue;
}
}
} else {
}
}
break;
}


var G__59942 = seq__59750;
var G__59943 = chunk__59752;
var G__59944 = count__59753;
var G__59945 = (i__59754 + (1));
seq__59750 = G__59942;
chunk__59752 = G__59943;
count__59753 = G__59944;
i__59754 = G__59945;
continue;
} else {
var G__59946 = seq__59750;
var G__59947 = chunk__59752;
var G__59948 = count__59753;
var G__59949 = (i__59754 + (1));
seq__59750 = G__59946;
chunk__59752 = G__59947;
count__59753 = G__59948;
i__59754 = G__59949;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59750);
if(temp__5735__auto__){
var seq__59750__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59750__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59750__$1);
var G__59950 = cljs.core.chunk_rest(seq__59750__$1);
var G__59951 = c__4609__auto__;
var G__59952 = cljs.core.count(c__4609__auto__);
var G__59953 = (0);
seq__59750 = G__59950;
chunk__59752 = G__59951;
count__59753 = G__59952;
i__59754 = G__59953;
continue;
} else {
var path = cljs.core.first(seq__59750__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59794_59954 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59797_59955 = null;
var count__59798_59956 = (0);
var i__59799_59957 = (0);
while(true){
if((i__59799_59957 < count__59798_59956)){
var node_59958 = chunk__59797_59955.cljs$core$IIndexed$_nth$arity$2(null,i__59799_59957);
var path_match_59959 = shadow.cljs.devtools.client.browser.match_paths(node_59958.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59959)){
var new_link_59960 = (function (){var G__59804 = node_59958.cloneNode(true);
G__59804.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59959),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59804;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59959], 0));

goog.dom.insertSiblingAfter(new_link_59960,node_59958);

goog.dom.removeNode(node_59958);


var G__59961 = seq__59794_59954;
var G__59962 = chunk__59797_59955;
var G__59963 = count__59798_59956;
var G__59964 = (i__59799_59957 + (1));
seq__59794_59954 = G__59961;
chunk__59797_59955 = G__59962;
count__59798_59956 = G__59963;
i__59799_59957 = G__59964;
continue;
} else {
var G__59965 = seq__59794_59954;
var G__59966 = chunk__59797_59955;
var G__59967 = count__59798_59956;
var G__59968 = (i__59799_59957 + (1));
seq__59794_59954 = G__59965;
chunk__59797_59955 = G__59966;
count__59798_59956 = G__59967;
i__59799_59957 = G__59968;
continue;
}
} else {
var temp__5735__auto___59969__$1 = cljs.core.seq(seq__59794_59954);
if(temp__5735__auto___59969__$1){
var seq__59794_59970__$1 = temp__5735__auto___59969__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59794_59970__$1)){
var c__4609__auto___59971 = cljs.core.chunk_first(seq__59794_59970__$1);
var G__59972 = cljs.core.chunk_rest(seq__59794_59970__$1);
var G__59973 = c__4609__auto___59971;
var G__59974 = cljs.core.count(c__4609__auto___59971);
var G__59975 = (0);
seq__59794_59954 = G__59972;
chunk__59797_59955 = G__59973;
count__59798_59956 = G__59974;
i__59799_59957 = G__59975;
continue;
} else {
var node_59976 = cljs.core.first(seq__59794_59970__$1);
var path_match_59977 = shadow.cljs.devtools.client.browser.match_paths(node_59976.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59977)){
var new_link_59978 = (function (){var G__59805 = node_59976.cloneNode(true);
G__59805.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59977),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59805;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59977], 0));

goog.dom.insertSiblingAfter(new_link_59978,node_59976);

goog.dom.removeNode(node_59976);


var G__59979 = cljs.core.next(seq__59794_59970__$1);
var G__59980 = null;
var G__59981 = (0);
var G__59982 = (0);
seq__59794_59954 = G__59979;
chunk__59797_59955 = G__59980;
count__59798_59956 = G__59981;
i__59799_59957 = G__59982;
continue;
} else {
var G__59983 = cljs.core.next(seq__59794_59970__$1);
var G__59984 = null;
var G__59985 = (0);
var G__59986 = (0);
seq__59794_59954 = G__59983;
chunk__59797_59955 = G__59984;
count__59798_59956 = G__59985;
i__59799_59957 = G__59986;
continue;
}
}
} else {
}
}
break;
}


var G__59987 = cljs.core.next(seq__59750__$1);
var G__59988 = null;
var G__59989 = (0);
var G__59990 = (0);
seq__59750 = G__59987;
chunk__59752 = G__59988;
count__59753 = G__59989;
i__59754 = G__59990;
continue;
} else {
var G__59991 = cljs.core.next(seq__59750__$1);
var G__59992 = null;
var G__59993 = (0);
var G__59994 = (0);
seq__59750 = G__59991;
chunk__59752 = G__59992;
count__59753 = G__59993;
i__59754 = G__59994;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__59806){
var map__59807 = p__59806;
var map__59807__$1 = (((((!((map__59807 == null))))?(((((map__59807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59807):map__59807);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59807__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59807__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__59809,done){
var map__59810 = p__59809;
var map__59810__$1 = (((((!((map__59810 == null))))?(((((map__59810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59810):map__59810);
var msg = map__59810__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59810__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59810__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59810__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59810__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59812){
var map__59813 = p__59812;
var map__59813__$1 = (((((!((map__59813 == null))))?(((((map__59813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59813):map__59813);
var src = map__59813__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e59815){var e = e59815;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__59816,done){
var map__59817 = p__59816;
var map__59817__$1 = (((((!((map__59817 == null))))?(((((map__59817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59817):map__59817);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59817__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59817__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__59819){
var map__59820 = p__59819;
var map__59820__$1 = (((((!((map__59820 == null))))?(((((map__59820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59820):map__59820);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59820__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59820__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__59822,done){
var map__59823 = p__59822;
var map__59823__$1 = (((((!((map__59823 == null))))?(((((map__59823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59823):map__59823);
var msg = map__59823__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59823__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__59825_60005 = type;
var G__59825_60006__$1 = (((G__59825_60005 instanceof cljs.core.Keyword))?G__59825_60005.fqn:null);
switch (G__59825_60006__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__59826 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__59827 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__59828 = "POST";
var G__59829 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__59830 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59826,G__59827,G__59828,G__59829,G__59830);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__59832 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__59831 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__59831.cljs$core$IFn$_invoke$arity$1 ? fexpr__59831.cljs$core$IFn$_invoke$arity$1(G__59832) : fexpr__59831.call(null,G__59832));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e59833){var e = e59833;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___60024 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___60024)){
var s_60025 = temp__5735__auto___60024;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_60025.onclose = (function (e){
return null;
}));

s_60025.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
