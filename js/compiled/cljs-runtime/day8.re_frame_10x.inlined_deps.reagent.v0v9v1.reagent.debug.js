goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug');
goog.require('cljs.core');
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__43843__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__43843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43848__i = 0, G__43848__a = new Array(arguments.length -  0);
while (G__43848__i < G__43848__a.length) {G__43848__a[G__43848__i] = arguments[G__43848__i + 0]; ++G__43848__i;}
  args = new cljs.core.IndexedSeq(G__43848__a,0,null);
} 
return G__43843__delegate.call(this,args);};
G__43843.cljs$lang$maxFixedArity = 0;
G__43843.cljs$lang$applyTo = (function (arglist__43849){
var args = cljs.core.seq(arglist__43849);
return G__43843__delegate(args);
});
G__43843.cljs$core$IFn$_invoke$arity$variadic = G__43843__delegate;
return G__43843;
})()
);

(o.error = (function() { 
var G__43850__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__43850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43855__i = 0, G__43855__a = new Array(arguments.length -  0);
while (G__43855__i < G__43855__a.length) {G__43855__a[G__43855__i] = arguments[G__43855__i + 0]; ++G__43855__i;}
  args = new cljs.core.IndexedSeq(G__43855__a,0,null);
} 
return G__43850__delegate.call(this,args);};
G__43850.cljs$lang$maxFixedArity = 0;
G__43850.cljs$lang$applyTo = (function (arglist__43857){
var args = cljs.core.seq(arglist__43857);
return G__43850__delegate(args);
});
G__43850.cljs$core$IFn$_invoke$arity$variadic = G__43850__delegate;
return G__43850;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.tracking = true);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.js.map
