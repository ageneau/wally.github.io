goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47865 = arguments.length;
var i__4790__auto___47866 = (0);
while(true){
if((i__4790__auto___47866 < len__4789__auto___47865)){
args__4795__auto__.push((arguments[i__4790__auto___47866]));

var G__47867 = (i__4790__auto___47866 + (1));
i__4790__auto___47866 = G__47867;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((4) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq47804){
var G__47805 = cljs.core.first(seq47804);
var seq47804__$1 = cljs.core.next(seq47804);
var G__47806 = cljs.core.first(seq47804__$1);
var seq47804__$2 = cljs.core.next(seq47804__$1);
var G__47807 = cljs.core.first(seq47804__$2);
var seq47804__$3 = cljs.core.next(seq47804__$2);
var G__47808 = cljs.core.first(seq47804__$3);
var seq47804__$4 = cljs.core.next(seq47804__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47805,G__47806,G__47807,G__47808,seq47804__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47886 = arguments.length;
var i__4790__auto___47887 = (0);
while(true){
if((i__4790__auto___47887 < len__4789__auto___47886)){
args__4795__auto__.push((arguments[i__4790__auto___47887]));

var G__47888 = (i__4790__auto___47887 + (1));
i__4790__auto___47887 = G__47888;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__47761__auto__,rest__47762__auto__){
var convert_case__47763__auto__ = (function (p1__47760__47764__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__47760__47764__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47762__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47761__auto__,convert_case__47763__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq47809){
var G__47810 = cljs.core.first(seq47809);
var seq47809__$1 = cljs.core.next(seq47809);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47810,seq47809__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47889 = arguments.length;
var i__4790__auto___47890 = (0);
while(true){
if((i__4790__auto___47890 < len__4789__auto___47889)){
args__4795__auto__.push((arguments[i__4790__auto___47890]));

var G__47891 = (i__4790__auto___47890 + (1));
i__4790__auto___47890 = G__47891;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq47811){
var G__47812 = cljs.core.first(seq47811);
var seq47811__$1 = cljs.core.next(seq47811);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47812,seq47811__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47892 = arguments.length;
var i__4790__auto___47893 = (0);
while(true){
if((i__4790__auto___47893 < len__4789__auto___47892)){
args__4795__auto__.push((arguments[i__4790__auto___47893]));

var G__47894 = (i__4790__auto___47893 + (1));
i__4790__auto___47893 = G__47894;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq47813){
var G__47814 = cljs.core.first(seq47813);
var seq47813__$1 = cljs.core.next(seq47813);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47814,seq47813__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47895 = arguments.length;
var i__4790__auto___47896 = (0);
while(true){
if((i__4790__auto___47896 < len__4789__auto___47895)){
args__4795__auto__.push((arguments[i__4790__auto___47896]));

var G__47897 = (i__4790__auto___47896 + (1));
i__4790__auto___47896 = G__47897;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq47815){
var G__47816 = cljs.core.first(seq47815);
var seq47815__$1 = cljs.core.next(seq47815);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47816,seq47815__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47898 = arguments.length;
var i__4790__auto___47899 = (0);
while(true){
if((i__4790__auto___47899 < len__4789__auto___47898)){
args__4795__auto__.push((arguments[i__4790__auto___47899]));

var G__47900 = (i__4790__auto___47899 + (1));
i__4790__auto___47899 = G__47900;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47761__auto__,rest__47762__auto__){
var convert_case__47763__auto__ = (function (p1__47760__47764__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__47760__47764__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47762__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47761__auto__,convert_case__47763__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq47817){
var G__47818 = cljs.core.first(seq47817);
var seq47817__$1 = cljs.core.next(seq47817);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47818,seq47817__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47919 = arguments.length;
var i__4790__auto___47920 = (0);
while(true){
if((i__4790__auto___47920 < len__4789__auto___47919)){
args__4795__auto__.push((arguments[i__4790__auto___47920]));

var G__47921 = (i__4790__auto___47920 + (1));
i__4790__auto___47920 = G__47921;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq47819){
var G__47820 = cljs.core.first(seq47819);
var seq47819__$1 = cljs.core.next(seq47819);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47820,seq47819__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47922 = arguments.length;
var i__4790__auto___47923 = (0);
while(true){
if((i__4790__auto___47923 < len__4789__auto___47922)){
args__4795__auto__.push((arguments[i__4790__auto___47923]));

var G__47924 = (i__4790__auto___47923 + (1));
i__4790__auto___47923 = G__47924;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq47821){
var G__47822 = cljs.core.first(seq47821);
var seq47821__$1 = cljs.core.next(seq47821);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47822,seq47821__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47925 = arguments.length;
var i__4790__auto___47926 = (0);
while(true){
if((i__4790__auto___47926 < len__4789__auto___47925)){
args__4795__auto__.push((arguments[i__4790__auto___47926]));

var G__47927 = (i__4790__auto___47926 + (1));
i__4790__auto___47926 = G__47927;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq47823){
var G__47824 = cljs.core.first(seq47823);
var seq47823__$1 = cljs.core.next(seq47823);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47824,seq47823__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47928 = arguments.length;
var i__4790__auto___47929 = (0);
while(true){
if((i__4790__auto___47929 < len__4789__auto___47928)){
args__4795__auto__.push((arguments[i__4790__auto___47929]));

var G__47930 = (i__4790__auto___47929 + (1));
i__4790__auto___47929 = G__47930;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__47761__auto__,rest__47762__auto__){
var convert_case__47763__auto__ = (function (p1__47760__47764__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__47760__47764__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47762__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47761__auto__,convert_case__47763__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq47825){
var G__47826 = cljs.core.first(seq47825);
var seq47825__$1 = cljs.core.next(seq47825);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47826,seq47825__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47931 = arguments.length;
var i__4790__auto___47932 = (0);
while(true){
if((i__4790__auto___47932 < len__4789__auto___47931)){
args__4795__auto__.push((arguments[i__4790__auto___47932]));

var G__47933 = (i__4790__auto___47932 + (1));
i__4790__auto___47932 = G__47933;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq47827){
var G__47828 = cljs.core.first(seq47827);
var seq47827__$1 = cljs.core.next(seq47827);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47828,seq47827__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47942 = arguments.length;
var i__4790__auto___47943 = (0);
while(true){
if((i__4790__auto___47943 < len__4789__auto___47942)){
args__4795__auto__.push((arguments[i__4790__auto___47943]));

var G__47944 = (i__4790__auto___47943 + (1));
i__4790__auto___47943 = G__47944;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq47829){
var G__47830 = cljs.core.first(seq47829);
var seq47829__$1 = cljs.core.next(seq47829);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47830,seq47829__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47945 = arguments.length;
var i__4790__auto___47946 = (0);
while(true){
if((i__4790__auto___47946 < len__4789__auto___47945)){
args__4795__auto__.push((arguments[i__4790__auto___47946]));

var G__47947 = (i__4790__auto___47946 + (1));
i__4790__auto___47946 = G__47947;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq47831){
var G__47832 = cljs.core.first(seq47831);
var seq47831__$1 = cljs.core.next(seq47831);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47832,seq47831__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47950 = arguments.length;
var i__4790__auto___47951 = (0);
while(true){
if((i__4790__auto___47951 < len__4789__auto___47950)){
args__4795__auto__.push((arguments[i__4790__auto___47951]));

var G__47952 = (i__4790__auto___47951 + (1));
i__4790__auto___47951 = G__47952;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__47761__auto__,rest__47762__auto__){
var convert_case__47763__auto__ = (function (p1__47760__47764__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__47760__47764__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47762__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47761__auto__,convert_case__47763__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq47833){
var G__47834 = cljs.core.first(seq47833);
var seq47833__$1 = cljs.core.next(seq47833);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47834,seq47833__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47953 = arguments.length;
var i__4790__auto___47954 = (0);
while(true){
if((i__4790__auto___47954 < len__4789__auto___47953)){
args__4795__auto__.push((arguments[i__4790__auto___47954]));

var G__47955 = (i__4790__auto___47954 + (1));
i__4790__auto___47954 = G__47955;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq47835){
var G__47836 = cljs.core.first(seq47835);
var seq47835__$1 = cljs.core.next(seq47835);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47836,seq47835__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47971 = arguments.length;
var i__4790__auto___47972 = (0);
while(true){
if((i__4790__auto___47972 < len__4789__auto___47971)){
args__4795__auto__.push((arguments[i__4790__auto___47972]));

var G__47973 = (i__4790__auto___47972 + (1));
i__4790__auto___47972 = G__47973;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq47837){
var G__47838 = cljs.core.first(seq47837);
var seq47837__$1 = cljs.core.next(seq47837);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47838,seq47837__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47974 = arguments.length;
var i__4790__auto___47975 = (0);
while(true){
if((i__4790__auto___47975 < len__4789__auto___47974)){
args__4795__auto__.push((arguments[i__4790__auto___47975]));

var G__47976 = (i__4790__auto___47975 + (1));
i__4790__auto___47975 = G__47976;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq47839){
var G__47840 = cljs.core.first(seq47839);
var seq47839__$1 = cljs.core.next(seq47839);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47840,seq47839__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47977 = arguments.length;
var i__4790__auto___47978 = (0);
while(true){
if((i__4790__auto___47978 < len__4789__auto___47977)){
args__4795__auto__.push((arguments[i__4790__auto___47978]));

var G__47979 = (i__4790__auto___47978 + (1));
i__4790__auto___47978 = G__47979;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47761__auto__,rest__47762__auto__){
var convert_case__47763__auto__ = (function (p1__47760__47764__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__47760__47764__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47762__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47761__auto__,convert_case__47763__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq47841){
var G__47842 = cljs.core.first(seq47841);
var seq47841__$1 = cljs.core.next(seq47841);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47842,seq47841__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47980 = arguments.length;
var i__4790__auto___47981 = (0);
while(true){
if((i__4790__auto___47981 < len__4789__auto___47980)){
args__4795__auto__.push((arguments[i__4790__auto___47981]));

var G__47982 = (i__4790__auto___47981 + (1));
i__4790__auto___47981 = G__47982;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq47843){
var G__47844 = cljs.core.first(seq47843);
var seq47843__$1 = cljs.core.next(seq47843);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47844,seq47843__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47983 = arguments.length;
var i__4790__auto___47984 = (0);
while(true){
if((i__4790__auto___47984 < len__4789__auto___47983)){
args__4795__auto__.push((arguments[i__4790__auto___47984]));

var G__47985 = (i__4790__auto___47984 + (1));
i__4790__auto___47984 = G__47985;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq47845){
var G__47846 = cljs.core.first(seq47845);
var seq47845__$1 = cljs.core.next(seq47845);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47846,seq47845__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47986 = arguments.length;
var i__4790__auto___47987 = (0);
while(true){
if((i__4790__auto___47987 < len__4789__auto___47986)){
args__4795__auto__.push((arguments[i__4790__auto___47987]));

var G__47988 = (i__4790__auto___47987 + (1));
i__4790__auto___47987 = G__47988;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq47847){
var G__47848 = cljs.core.first(seq47847);
var seq47847__$1 = cljs.core.next(seq47847);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47848,seq47847__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47997 = arguments.length;
var i__4790__auto___47998 = (0);
while(true){
if((i__4790__auto___47998 < len__4789__auto___47997)){
args__4795__auto__.push((arguments[i__4790__auto___47998]));

var G__47999 = (i__4790__auto___47998 + (1));
i__4790__auto___47998 = G__47999;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47761__auto__,rest__47762__auto__){
var convert_case__47763__auto__ = (function (p1__47760__47764__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__47760__47764__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47762__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47761__auto__,convert_case__47763__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq47849){
var G__47850 = cljs.core.first(seq47849);
var seq47849__$1 = cljs.core.next(seq47849);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47850,seq47849__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48000 = arguments.length;
var i__4790__auto___48001 = (0);
while(true){
if((i__4790__auto___48001 < len__4789__auto___48000)){
args__4795__auto__.push((arguments[i__4790__auto___48001]));

var G__48002 = (i__4790__auto___48001 + (1));
i__4790__auto___48001 = G__48002;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq47851){
var G__47852 = cljs.core.first(seq47851);
var seq47851__$1 = cljs.core.next(seq47851);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47852,seq47851__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48003 = arguments.length;
var i__4790__auto___48004 = (0);
while(true){
if((i__4790__auto___48004 < len__4789__auto___48003)){
args__4795__auto__.push((arguments[i__4790__auto___48004]));

var G__48005 = (i__4790__auto___48004 + (1));
i__4790__auto___48004 = G__48005;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq47853){
var G__47854 = cljs.core.first(seq47853);
var seq47853__$1 = cljs.core.next(seq47853);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47854,seq47853__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48006 = arguments.length;
var i__4790__auto___48007 = (0);
while(true){
if((i__4790__auto___48007 < len__4789__auto___48006)){
args__4795__auto__.push((arguments[i__4790__auto___48007]));

var G__48008 = (i__4790__auto___48007 + (1));
i__4790__auto___48007 = G__48008;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq47855){
var G__47856 = cljs.core.first(seq47855);
var seq47855__$1 = cljs.core.next(seq47855);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47856,seq47855__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48010 = arguments.length;
var i__4790__auto___48011 = (0);
while(true){
if((i__4790__auto___48011 < len__4789__auto___48010)){
args__4795__auto__.push((arguments[i__4790__auto___48011]));

var G__48012 = (i__4790__auto___48011 + (1));
i__4790__auto___48011 = G__48012;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47761__auto__,rest__47762__auto__){
var convert_case__47763__auto__ = (function (p1__47760__47764__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__47760__47764__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47762__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47761__auto__,convert_case__47763__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq47857){
var G__47858 = cljs.core.first(seq47857);
var seq47857__$1 = cljs.core.next(seq47857);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47858,seq47857__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48016 = arguments.length;
var i__4790__auto___48017 = (0);
while(true){
if((i__4790__auto___48017 < len__4789__auto___48016)){
args__4795__auto__.push((arguments[i__4790__auto___48017]));

var G__48018 = (i__4790__auto___48017 + (1));
i__4790__auto___48017 = G__48018;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq47859){
var G__47860 = cljs.core.first(seq47859);
var seq47859__$1 = cljs.core.next(seq47859);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47860,seq47859__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48019 = arguments.length;
var i__4790__auto___48020 = (0);
while(true){
if((i__4790__auto___48020 < len__4789__auto___48019)){
args__4795__auto__.push((arguments[i__4790__auto___48020]));

var G__48021 = (i__4790__auto___48020 + (1));
i__4790__auto___48020 = G__48021;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq47861){
var G__47862 = cljs.core.first(seq47861);
var seq47861__$1 = cljs.core.next(seq47861);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47862,seq47861__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48028 = arguments.length;
var i__4790__auto___48029 = (0);
while(true){
if((i__4790__auto___48029 < len__4789__auto___48028)){
args__4795__auto__.push((arguments[i__4790__auto___48029]));

var G__48030 = (i__4790__auto___48029 + (1));
i__4790__auto___48029 = G__48030;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47766__auto__,rest__47767__auto__){
if((!((s__47766__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__47766__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47766__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47767__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq47863){
var G__47864 = cljs.core.first(seq47863);
var seq47863__$1 = cljs.core.next(seq47863);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47864,seq47863__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
