goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47529 = arguments.length;
var i__4790__auto___47530 = (0);
while(true){
if((i__4790__auto___47530 < len__4789__auto___47529)){
args__4795__auto__.push((arguments[i__4790__auto___47530]));

var G__47531 = (i__4790__auto___47530 + (1));
i__4790__auto___47530 = G__47531;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((4) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4796__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__47521){
var map__47522 = p__47521;
var map__47522__$1 = (((((!((map__47522 == null))))?(((((map__47522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47522):map__47522);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47522__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__47524 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__47525 = cljs.core.seq(vec__47524);
var first__47526 = cljs.core.first(seq__47525);
var seq__47525__$1 = cljs.core.next(seq__47525);
var first = first__47526;
var rest = seq__47525__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq47516){
var G__47517 = cljs.core.first(seq47516);
var seq47516__$1 = cljs.core.next(seq47516);
var G__47518 = cljs.core.first(seq47516__$1);
var seq47516__$2 = cljs.core.next(seq47516__$1);
var G__47519 = cljs.core.first(seq47516__$2);
var seq47516__$3 = cljs.core.next(seq47516__$2);
var G__47520 = cljs.core.first(seq47516__$3);
var seq47516__$4 = cljs.core.next(seq47516__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47517,G__47518,G__47519,G__47520,seq47516__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4185__auto__ = (function (){var G__47528 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__47528) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__47528));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
