goog.provide('rewrite_clj.zip.base');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
/**
 * Create zipper over the given Clojure/EDN node.
 */
rewrite_clj.zip.base.edn_STAR_ = (function rewrite_clj$zip$base$edn_STAR_(node){
return clojure.zip.zipper(rewrite_clj.node.inner_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,rewrite_clj.node.children),rewrite_clj.node.replace_children,node);
});
/**
 * Create zipper over the given Clojure/EDN node and move
 * to the first non-whitespace/non-comment child.
 */
rewrite_clj.zip.base.edn = (function rewrite_clj$zip$base$edn(node){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1(node) : rewrite_clj.node.tag.call(null,node)),new cljs.core.Keyword(null,"forms","forms",2045992350))){
var top = rewrite_clj.zip.base.edn_STAR_(node);
var or__4185__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(clojure.zip.down(top));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return top;
}
} else {
var G__49977 = (function (){var G__49968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
return (rewrite_clj.node.forms_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.forms_node.cljs$core$IFn$_invoke$arity$1(G__49968) : rewrite_clj.node.forms_node.call(null,G__49968));
})();
node = G__49977;
continue;
}
break;
}
});
/**
 * Get tag of node at the current zipper location.
 */
rewrite_clj.zip.base.tag = (function rewrite_clj$zip$base$tag(zloc){
var G__49969 = zloc;
var G__49969__$1 = (((G__49969 == null))?null:clojure.zip.node(G__49969));
if((G__49969__$1 == null)){
return null;
} else {
return (rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1(G__49969__$1) : rewrite_clj.node.tag.call(null,G__49969__$1));
}
});
/**
 * Get sexpr represented by the given node.
 */
rewrite_clj.zip.base.sexpr = (function rewrite_clj$zip$base$sexpr(zloc){
var G__49970 = zloc;
var G__49970__$1 = (((G__49970 == null))?null:clojure.zip.node(G__49970));
if((G__49970__$1 == null)){
return null;
} else {
return (rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1(G__49970__$1) : rewrite_clj.node.sexpr.call(null,G__49970__$1));
}
});
/**
 * Get children as s-expressions.
 */
rewrite_clj.zip.base.child_sexprs = (function rewrite_clj$zip$base$child_sexprs(zloc){
var G__49971 = zloc;
var G__49971__$1 = (((G__49971 == null))?null:clojure.zip.node(G__49971));
if((G__49971__$1 == null)){
return null;
} else {
return (rewrite_clj.node.child_sexprs.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.child_sexprs.cljs$core$IFn$_invoke$arity$1(G__49971__$1) : rewrite_clj.node.child_sexprs.call(null,G__49971__$1));
}
});
/**
 * Get length of printable string for the given zipper location.
 */
rewrite_clj.zip.base.length = (function rewrite_clj$zip$base$length(zloc){
var or__4185__auto__ = (function (){var G__49973 = zloc;
var G__49973__$1 = (((G__49973 == null))?null:clojure.zip.node(G__49973));
if((G__49973__$1 == null)){
return null;
} else {
return (rewrite_clj.node.length.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.length.cljs$core$IFn$_invoke$arity$1(G__49973__$1) : rewrite_clj.node.length.call(null,G__49973__$1));
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
});
/**
 * Create zipper from String.
 */
rewrite_clj.zip.base.of_string = (function rewrite_clj$zip$base$of_string(s){
var G__49974 = s;
var G__49974__$1 = (((G__49974 == null))?null:rewrite_clj.parser.parse_string_all(G__49974));
if((G__49974__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.edn(G__49974__$1);
}
});
/**
 * Create string representing the current zipper location.
 */
rewrite_clj.zip.base.string = (function rewrite_clj$zip$base$string(zloc){
var G__49975 = zloc;
var G__49975__$1 = (((G__49975 == null))?null:clojure.zip.node(G__49975));
if((G__49975__$1 == null)){
return null;
} else {
return (rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1(G__49975__$1) : rewrite_clj.node.string.call(null,G__49975__$1));
}
});
/**
 * Create string representing the zipped-up zipper.
 */
rewrite_clj.zip.base.root_string = (function rewrite_clj$zip$base$root_string(zloc){
var G__49976 = zloc;
var G__49976__$1 = (((G__49976 == null))?null:clojure.zip.root(G__49976));
if((G__49976__$1 == null)){
return null;
} else {
return (rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1(G__49976__$1) : rewrite_clj.node.string.call(null,G__49976__$1));
}
});

//# sourceMappingURL=rewrite_clj.zip.base.js.map
