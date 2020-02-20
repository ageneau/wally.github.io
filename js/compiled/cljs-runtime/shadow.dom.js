goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__57438 = coll;
var G__57439 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57438,G__57439) : shadow.dom.lazy_native_coll_seq.call(null,G__57438,G__57439));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__57454 = arguments.length;
switch (G__57454) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__57460 = arguments.length;
switch (G__57460) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__57470 = arguments.length;
switch (G__57470) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__57483 = arguments.length;
switch (G__57483) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__57531 = arguments.length;
switch (G__57531) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__57534 = document;
var G__57535 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57534,G__57535);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__57538 = shadow.dom.dom_node(parent);
var G__57539 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57538,G__57539);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__57542 = shadow.dom.dom_node(el);
var G__57543 = cls;
return goog.dom.classlist.add(G__57542,G__57543);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__57544 = shadow.dom.dom_node(el);
var G__57545 = cls;
return goog.dom.classlist.remove(G__57544,G__57545);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57549 = arguments.length;
switch (G__57549) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__57553 = shadow.dom.dom_node(el);
var G__57554 = cls;
return goog.dom.classlist.toggle(G__57553,G__57554);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e57580){if((e57580 instanceof Object)){
var e = e57580;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57580;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__57588 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57589 = null;
var count__57590 = (0);
var i__57591 = (0);
while(true){
if((i__57591 < count__57590)){
var el = chunk__57589.cljs$core$IIndexed$_nth$arity$2(null,i__57591);
var handler_58200__$1 = ((function (seq__57588,chunk__57589,count__57590,i__57591,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57588,chunk__57589,count__57590,i__57591,el))
;
var G__57617_58202 = el;
var G__57618_58203 = cljs.core.name(ev);
var G__57619_58204 = handler_58200__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57617_58202,G__57618_58203,G__57619_58204) : shadow.dom.dom_listen.call(null,G__57617_58202,G__57618_58203,G__57619_58204));


var G__58206 = seq__57588;
var G__58207 = chunk__57589;
var G__58208 = count__57590;
var G__58209 = (i__57591 + (1));
seq__57588 = G__58206;
chunk__57589 = G__58207;
count__57590 = G__58208;
i__57591 = G__58209;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57588);
if(temp__5735__auto__){
var seq__57588__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57588__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57588__$1);
var G__58210 = cljs.core.chunk_rest(seq__57588__$1);
var G__58211 = c__4609__auto__;
var G__58212 = cljs.core.count(c__4609__auto__);
var G__58213 = (0);
seq__57588 = G__58210;
chunk__57589 = G__58211;
count__57590 = G__58212;
i__57591 = G__58213;
continue;
} else {
var el = cljs.core.first(seq__57588__$1);
var handler_58214__$1 = ((function (seq__57588,chunk__57589,count__57590,i__57591,el,seq__57588__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57588,chunk__57589,count__57590,i__57591,el,seq__57588__$1,temp__5735__auto__))
;
var G__57623_58216 = el;
var G__57624_58217 = cljs.core.name(ev);
var G__57625_58218 = handler_58214__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57623_58216,G__57624_58217,G__57625_58218) : shadow.dom.dom_listen.call(null,G__57623_58216,G__57624_58217,G__57625_58218));


var G__58220 = cljs.core.next(seq__57588__$1);
var G__58221 = null;
var G__58222 = (0);
var G__58223 = (0);
seq__57588 = G__58220;
chunk__57589 = G__58221;
count__57590 = G__58222;
i__57591 = G__58223;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__57632 = arguments.length;
switch (G__57632) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__57640 = shadow.dom.dom_node(el);
var G__57641 = cljs.core.name(ev);
var G__57642 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57640,G__57641,G__57642) : shadow.dom.dom_listen.call(null,G__57640,G__57641,G__57642));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__57643 = shadow.dom.dom_node(el);
var G__57644 = cljs.core.name(ev);
var G__57645 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__57643,G__57644,G__57645) : shadow.dom.dom_listen_remove.call(null,G__57643,G__57644,G__57645));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__57655 = cljs.core.seq(events);
var chunk__57656 = null;
var count__57657 = (0);
var i__57658 = (0);
while(true){
if((i__57658 < count__57657)){
var vec__57669 = chunk__57656.cljs$core$IIndexed$_nth$arity$2(null,i__57658);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57669,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57669,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58230 = seq__57655;
var G__58231 = chunk__57656;
var G__58232 = count__57657;
var G__58233 = (i__57658 + (1));
seq__57655 = G__58230;
chunk__57656 = G__58231;
count__57657 = G__58232;
i__57658 = G__58233;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57655);
if(temp__5735__auto__){
var seq__57655__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57655__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57655__$1);
var G__58236 = cljs.core.chunk_rest(seq__57655__$1);
var G__58237 = c__4609__auto__;
var G__58238 = cljs.core.count(c__4609__auto__);
var G__58239 = (0);
seq__57655 = G__58236;
chunk__57656 = G__58237;
count__57657 = G__58238;
i__57658 = G__58239;
continue;
} else {
var vec__57674 = cljs.core.first(seq__57655__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57674,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57674,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58241 = cljs.core.next(seq__57655__$1);
var G__58242 = null;
var G__58243 = (0);
var G__58244 = (0);
seq__57655 = G__58241;
chunk__57656 = G__58242;
count__57657 = G__58243;
i__57658 = G__58244;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__57679 = cljs.core.seq(styles);
var chunk__57680 = null;
var count__57681 = (0);
var i__57682 = (0);
while(true){
if((i__57682 < count__57681)){
var vec__57714 = chunk__57680.cljs$core$IIndexed$_nth$arity$2(null,i__57682);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57714,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57714,(1),null);
var G__57718_58249 = dom;
var G__57719_58250 = cljs.core.name(k);
var G__57720_58251 = (((v == null))?"":v);
goog.style.setStyle(G__57718_58249,G__57719_58250,G__57720_58251);


var G__58253 = seq__57679;
var G__58254 = chunk__57680;
var G__58255 = count__57681;
var G__58256 = (i__57682 + (1));
seq__57679 = G__58253;
chunk__57680 = G__58254;
count__57681 = G__58255;
i__57682 = G__58256;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57679);
if(temp__5735__auto__){
var seq__57679__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57679__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57679__$1);
var G__58257 = cljs.core.chunk_rest(seq__57679__$1);
var G__58258 = c__4609__auto__;
var G__58259 = cljs.core.count(c__4609__auto__);
var G__58260 = (0);
seq__57679 = G__58257;
chunk__57680 = G__58258;
count__57681 = G__58259;
i__57682 = G__58260;
continue;
} else {
var vec__57725 = cljs.core.first(seq__57679__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57725,(1),null);
var G__57729_58261 = dom;
var G__57730_58262 = cljs.core.name(k);
var G__57731_58263 = (((v == null))?"":v);
goog.style.setStyle(G__57729_58261,G__57730_58262,G__57731_58263);


var G__58266 = cljs.core.next(seq__57679__$1);
var G__58267 = null;
var G__58268 = (0);
var G__58269 = (0);
seq__57679 = G__58266;
chunk__57680 = G__58267;
count__57681 = G__58268;
i__57682 = G__58269;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__57735_58270 = key;
var G__57735_58271__$1 = (((G__57735_58270 instanceof cljs.core.Keyword))?G__57735_58270.fqn:null);
switch (G__57735_58271__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_58276 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_58276,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_58276,"aria-");
}
})())){
el.setAttribute(ks_58276,value);
} else {
(el[ks_58276] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__57738 = shadow.dom.dom_node(el);
var G__57739 = cls;
return goog.dom.classlist.contains(G__57738,G__57739);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57740){
var map__57741 = p__57740;
var map__57741__$1 = (((((!((map__57741 == null))))?(((((map__57741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57741):map__57741);
var props = map__57741__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57741__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57743 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57743,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57743,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57743,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__57746 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__57746,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__57746;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__57750 = arguments.length;
switch (G__57750) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__57758){
var vec__57759 = p__57758;
var seq__57760 = cljs.core.seq(vec__57759);
var first__57761 = cljs.core.first(seq__57760);
var seq__57760__$1 = cljs.core.next(seq__57760);
var nn = first__57761;
var first__57761__$1 = cljs.core.first(seq__57760__$1);
var seq__57760__$2 = cljs.core.next(seq__57760__$1);
var np = first__57761__$1;
var nc = seq__57760__$2;
var node = vec__57759;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57764 = nn;
var G__57765 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57764,G__57765) : create_fn.call(null,G__57764,G__57765));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57766 = nn;
var G__57767 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57766,G__57767) : create_fn.call(null,G__57766,G__57767));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__57770 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57770,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57770,(1),null);
var seq__57773_58306 = cljs.core.seq(node_children);
var chunk__57774_58307 = null;
var count__57775_58308 = (0);
var i__57776_58309 = (0);
while(true){
if((i__57776_58309 < count__57775_58308)){
var child_struct_58310 = chunk__57774_58307.cljs$core$IIndexed$_nth$arity$2(null,i__57776_58309);
var children_58312 = shadow.dom.dom_node(child_struct_58310);
if(cljs.core.seq_QMARK_(children_58312)){
var seq__57801_58314 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58312));
var chunk__57803_58315 = null;
var count__57804_58316 = (0);
var i__57805_58317 = (0);
while(true){
if((i__57805_58317 < count__57804_58316)){
var child_58318 = chunk__57803_58315.cljs$core$IIndexed$_nth$arity$2(null,i__57805_58317);
if(cljs.core.truth_(child_58318)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58318);


var G__58320 = seq__57801_58314;
var G__58321 = chunk__57803_58315;
var G__58322 = count__57804_58316;
var G__58323 = (i__57805_58317 + (1));
seq__57801_58314 = G__58320;
chunk__57803_58315 = G__58321;
count__57804_58316 = G__58322;
i__57805_58317 = G__58323;
continue;
} else {
var G__58325 = seq__57801_58314;
var G__58326 = chunk__57803_58315;
var G__58327 = count__57804_58316;
var G__58328 = (i__57805_58317 + (1));
seq__57801_58314 = G__58325;
chunk__57803_58315 = G__58326;
count__57804_58316 = G__58327;
i__57805_58317 = G__58328;
continue;
}
} else {
var temp__5735__auto___58329 = cljs.core.seq(seq__57801_58314);
if(temp__5735__auto___58329){
var seq__57801_58330__$1 = temp__5735__auto___58329;
if(cljs.core.chunked_seq_QMARK_(seq__57801_58330__$1)){
var c__4609__auto___58331 = cljs.core.chunk_first(seq__57801_58330__$1);
var G__58332 = cljs.core.chunk_rest(seq__57801_58330__$1);
var G__58333 = c__4609__auto___58331;
var G__58334 = cljs.core.count(c__4609__auto___58331);
var G__58335 = (0);
seq__57801_58314 = G__58332;
chunk__57803_58315 = G__58333;
count__57804_58316 = G__58334;
i__57805_58317 = G__58335;
continue;
} else {
var child_58337 = cljs.core.first(seq__57801_58330__$1);
if(cljs.core.truth_(child_58337)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58337);


var G__58338 = cljs.core.next(seq__57801_58330__$1);
var G__58339 = null;
var G__58340 = (0);
var G__58341 = (0);
seq__57801_58314 = G__58338;
chunk__57803_58315 = G__58339;
count__57804_58316 = G__58340;
i__57805_58317 = G__58341;
continue;
} else {
var G__58342 = cljs.core.next(seq__57801_58330__$1);
var G__58343 = null;
var G__58344 = (0);
var G__58345 = (0);
seq__57801_58314 = G__58342;
chunk__57803_58315 = G__58343;
count__57804_58316 = G__58344;
i__57805_58317 = G__58345;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58312);
}


var G__58346 = seq__57773_58306;
var G__58347 = chunk__57774_58307;
var G__58348 = count__57775_58308;
var G__58349 = (i__57776_58309 + (1));
seq__57773_58306 = G__58346;
chunk__57774_58307 = G__58347;
count__57775_58308 = G__58348;
i__57776_58309 = G__58349;
continue;
} else {
var temp__5735__auto___58372 = cljs.core.seq(seq__57773_58306);
if(temp__5735__auto___58372){
var seq__57773_58373__$1 = temp__5735__auto___58372;
if(cljs.core.chunked_seq_QMARK_(seq__57773_58373__$1)){
var c__4609__auto___58374 = cljs.core.chunk_first(seq__57773_58373__$1);
var G__58375 = cljs.core.chunk_rest(seq__57773_58373__$1);
var G__58376 = c__4609__auto___58374;
var G__58377 = cljs.core.count(c__4609__auto___58374);
var G__58378 = (0);
seq__57773_58306 = G__58375;
chunk__57774_58307 = G__58376;
count__57775_58308 = G__58377;
i__57776_58309 = G__58378;
continue;
} else {
var child_struct_58379 = cljs.core.first(seq__57773_58373__$1);
var children_58380 = shadow.dom.dom_node(child_struct_58379);
if(cljs.core.seq_QMARK_(children_58380)){
var seq__57817_58382 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58380));
var chunk__57819_58383 = null;
var count__57820_58384 = (0);
var i__57821_58385 = (0);
while(true){
if((i__57821_58385 < count__57820_58384)){
var child_58387 = chunk__57819_58383.cljs$core$IIndexed$_nth$arity$2(null,i__57821_58385);
if(cljs.core.truth_(child_58387)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58387);


var G__58388 = seq__57817_58382;
var G__58389 = chunk__57819_58383;
var G__58390 = count__57820_58384;
var G__58391 = (i__57821_58385 + (1));
seq__57817_58382 = G__58388;
chunk__57819_58383 = G__58389;
count__57820_58384 = G__58390;
i__57821_58385 = G__58391;
continue;
} else {
var G__58392 = seq__57817_58382;
var G__58393 = chunk__57819_58383;
var G__58394 = count__57820_58384;
var G__58395 = (i__57821_58385 + (1));
seq__57817_58382 = G__58392;
chunk__57819_58383 = G__58393;
count__57820_58384 = G__58394;
i__57821_58385 = G__58395;
continue;
}
} else {
var temp__5735__auto___58396__$1 = cljs.core.seq(seq__57817_58382);
if(temp__5735__auto___58396__$1){
var seq__57817_58397__$1 = temp__5735__auto___58396__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57817_58397__$1)){
var c__4609__auto___58398 = cljs.core.chunk_first(seq__57817_58397__$1);
var G__58399 = cljs.core.chunk_rest(seq__57817_58397__$1);
var G__58400 = c__4609__auto___58398;
var G__58401 = cljs.core.count(c__4609__auto___58398);
var G__58402 = (0);
seq__57817_58382 = G__58399;
chunk__57819_58383 = G__58400;
count__57820_58384 = G__58401;
i__57821_58385 = G__58402;
continue;
} else {
var child_58403 = cljs.core.first(seq__57817_58397__$1);
if(cljs.core.truth_(child_58403)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58403);


var G__58404 = cljs.core.next(seq__57817_58397__$1);
var G__58405 = null;
var G__58406 = (0);
var G__58407 = (0);
seq__57817_58382 = G__58404;
chunk__57819_58383 = G__58405;
count__57820_58384 = G__58406;
i__57821_58385 = G__58407;
continue;
} else {
var G__58408 = cljs.core.next(seq__57817_58397__$1);
var G__58409 = null;
var G__58410 = (0);
var G__58411 = (0);
seq__57817_58382 = G__58408;
chunk__57819_58383 = G__58409;
count__57820_58384 = G__58410;
i__57821_58385 = G__58411;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58380);
}


var G__58412 = cljs.core.next(seq__57773_58373__$1);
var G__58413 = null;
var G__58414 = (0);
var G__58415 = (0);
seq__57773_58306 = G__58412;
chunk__57774_58307 = G__58413;
count__57775_58308 = G__58414;
i__57776_58309 = G__58415;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__57839 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__57839);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__57844 = cljs.core.seq(node);
var chunk__57845 = null;
var count__57846 = (0);
var i__57847 = (0);
while(true){
if((i__57847 < count__57846)){
var n = chunk__57845.cljs$core$IIndexed$_nth$arity$2(null,i__57847);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58416 = seq__57844;
var G__58417 = chunk__57845;
var G__58418 = count__57846;
var G__58419 = (i__57847 + (1));
seq__57844 = G__58416;
chunk__57845 = G__58417;
count__57846 = G__58418;
i__57847 = G__58419;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57844);
if(temp__5735__auto__){
var seq__57844__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57844__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57844__$1);
var G__58421 = cljs.core.chunk_rest(seq__57844__$1);
var G__58422 = c__4609__auto__;
var G__58423 = cljs.core.count(c__4609__auto__);
var G__58424 = (0);
seq__57844 = G__58421;
chunk__57845 = G__58422;
count__57846 = G__58423;
i__57847 = G__58424;
continue;
} else {
var n = cljs.core.first(seq__57844__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58425 = cljs.core.next(seq__57844__$1);
var G__58426 = null;
var G__58427 = (0);
var G__58428 = (0);
seq__57844 = G__58425;
chunk__57845 = G__58426;
count__57846 = G__58427;
i__57847 = G__58428;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__57852 = shadow.dom.dom_node(new$);
var G__57853 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__57852,G__57853);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__57855 = arguments.length;
switch (G__57855) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__57857 = arguments.length;
switch (G__57857) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__57862 = arguments.length;
switch (G__57862) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58441 = arguments.length;
var i__4790__auto___58442 = (0);
while(true){
if((i__4790__auto___58442 < len__4789__auto___58441)){
args__4795__auto__.push((arguments[i__4790__auto___58442]));

var G__58443 = (i__4790__auto___58442 + (1));
i__4790__auto___58442 = G__58443;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__57867_58444 = cljs.core.seq(nodes);
var chunk__57868_58445 = null;
var count__57869_58446 = (0);
var i__57870_58447 = (0);
while(true){
if((i__57870_58447 < count__57869_58446)){
var node_58448 = chunk__57868_58445.cljs$core$IIndexed$_nth$arity$2(null,i__57870_58447);
fragment.appendChild(shadow.dom._to_dom(node_58448));


var G__58449 = seq__57867_58444;
var G__58450 = chunk__57868_58445;
var G__58451 = count__57869_58446;
var G__58452 = (i__57870_58447 + (1));
seq__57867_58444 = G__58449;
chunk__57868_58445 = G__58450;
count__57869_58446 = G__58451;
i__57870_58447 = G__58452;
continue;
} else {
var temp__5735__auto___58453 = cljs.core.seq(seq__57867_58444);
if(temp__5735__auto___58453){
var seq__57867_58454__$1 = temp__5735__auto___58453;
if(cljs.core.chunked_seq_QMARK_(seq__57867_58454__$1)){
var c__4609__auto___58455 = cljs.core.chunk_first(seq__57867_58454__$1);
var G__58456 = cljs.core.chunk_rest(seq__57867_58454__$1);
var G__58457 = c__4609__auto___58455;
var G__58458 = cljs.core.count(c__4609__auto___58455);
var G__58459 = (0);
seq__57867_58444 = G__58456;
chunk__57868_58445 = G__58457;
count__57869_58446 = G__58458;
i__57870_58447 = G__58459;
continue;
} else {
var node_58460 = cljs.core.first(seq__57867_58454__$1);
fragment.appendChild(shadow.dom._to_dom(node_58460));


var G__58461 = cljs.core.next(seq__57867_58454__$1);
var G__58462 = null;
var G__58463 = (0);
var G__58464 = (0);
seq__57867_58444 = G__58461;
chunk__57868_58445 = G__58462;
count__57869_58446 = G__58463;
i__57870_58447 = G__58464;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq57866){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57866));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__57875_58465 = cljs.core.seq(scripts);
var chunk__57876_58466 = null;
var count__57877_58467 = (0);
var i__57878_58468 = (0);
while(true){
if((i__57878_58468 < count__57877_58467)){
var vec__57892_58469 = chunk__57876_58466.cljs$core$IIndexed$_nth$arity$2(null,i__57878_58468);
var script_tag_58470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57892_58469,(0),null);
var script_body_58471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57892_58469,(1),null);
eval(script_body_58471);


var G__58472 = seq__57875_58465;
var G__58473 = chunk__57876_58466;
var G__58474 = count__57877_58467;
var G__58475 = (i__57878_58468 + (1));
seq__57875_58465 = G__58472;
chunk__57876_58466 = G__58473;
count__57877_58467 = G__58474;
i__57878_58468 = G__58475;
continue;
} else {
var temp__5735__auto___58476 = cljs.core.seq(seq__57875_58465);
if(temp__5735__auto___58476){
var seq__57875_58477__$1 = temp__5735__auto___58476;
if(cljs.core.chunked_seq_QMARK_(seq__57875_58477__$1)){
var c__4609__auto___58478 = cljs.core.chunk_first(seq__57875_58477__$1);
var G__58479 = cljs.core.chunk_rest(seq__57875_58477__$1);
var G__58480 = c__4609__auto___58478;
var G__58481 = cljs.core.count(c__4609__auto___58478);
var G__58482 = (0);
seq__57875_58465 = G__58479;
chunk__57876_58466 = G__58480;
count__57877_58467 = G__58481;
i__57878_58468 = G__58482;
continue;
} else {
var vec__57896_58483 = cljs.core.first(seq__57875_58477__$1);
var script_tag_58484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57896_58483,(0),null);
var script_body_58485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57896_58483,(1),null);
eval(script_body_58485);


var G__58486 = cljs.core.next(seq__57875_58477__$1);
var G__58487 = null;
var G__58488 = (0);
var G__58489 = (0);
seq__57875_58465 = G__58486;
chunk__57876_58466 = G__58487;
count__57877_58467 = G__58488;
i__57878_58468 = G__58489;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__57901){
var vec__57902 = p__57901;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57902,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57902,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__57910 = shadow.dom.dom_node(el);
var G__57911 = cls;
return goog.dom.getAncestorByClass(G__57910,G__57911);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__57916 = arguments.length;
switch (G__57916) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__57919 = shadow.dom.dom_node(el);
var G__57920 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__57919,G__57920);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__57923 = shadow.dom.dom_node(el);
var G__57924 = cljs.core.name(tag);
var G__57925 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__57923,G__57924,G__57925);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__57927 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__57927);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__57931 = shadow.dom.dom_node(dom);
var G__57932 = value;
return goog.dom.forms.setValue(G__57931,G__57932);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__57944 = cljs.core.seq(style_keys);
var chunk__57945 = null;
var count__57946 = (0);
var i__57947 = (0);
while(true){
if((i__57947 < count__57946)){
var it = chunk__57945.cljs$core$IIndexed$_nth$arity$2(null,i__57947);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58498 = seq__57944;
var G__58499 = chunk__57945;
var G__58500 = count__57946;
var G__58501 = (i__57947 + (1));
seq__57944 = G__58498;
chunk__57945 = G__58499;
count__57946 = G__58500;
i__57947 = G__58501;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57944);
if(temp__5735__auto__){
var seq__57944__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57944__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57944__$1);
var G__58502 = cljs.core.chunk_rest(seq__57944__$1);
var G__58503 = c__4609__auto__;
var G__58504 = cljs.core.count(c__4609__auto__);
var G__58505 = (0);
seq__57944 = G__58502;
chunk__57945 = G__58503;
count__57946 = G__58504;
i__57947 = G__58505;
continue;
} else {
var it = cljs.core.first(seq__57944__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58506 = cljs.core.next(seq__57944__$1);
var G__58507 = null;
var G__58508 = (0);
var G__58509 = (0);
seq__57944 = G__58506;
chunk__57945 = G__58507;
count__57946 = G__58508;
i__57947 = G__58509;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k57954,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__57961 = k57954;
var G__57961__$1 = (((G__57961 instanceof cljs.core.Keyword))?G__57961.fqn:null);
switch (G__57961__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57954,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__57962){
var vec__57963 = p__57962;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57963,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57963,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57953){
var self__ = this;
var G__57953__$1 = this;
return (new cljs.core.RecordIter((0),G__57953__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__57967 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__57967(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57955,other57956){
var self__ = this;
var this57955__$1 = this;
return (((!((other57956 == null)))) && ((this57955__$1.constructor === other57956.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57955__$1.x,other57956.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57955__$1.y,other57956.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57955__$1.__extmap,other57956.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__57953){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__57968 = cljs.core.keyword_identical_QMARK_;
var expr__57969 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__57971 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__57972 = expr__57969;
return (pred__57968.cljs$core$IFn$_invoke$arity$2 ? pred__57968.cljs$core$IFn$_invoke$arity$2(G__57971,G__57972) : pred__57968.call(null,G__57971,G__57972));
})())){
return (new shadow.dom.Coordinate(G__57953,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57973 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__57974 = expr__57969;
return (pred__57968.cljs$core$IFn$_invoke$arity$2 ? pred__57968.cljs$core$IFn$_invoke$arity$2(G__57973,G__57974) : pred__57968.call(null,G__57973,G__57974));
})())){
return (new shadow.dom.Coordinate(self__.x,G__57953,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__57953),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__57953){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__57953,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__57958){
var extmap__4478__auto__ = (function (){var G__57976 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57958,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__57958)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57976);
} else {
return G__57976;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__57958),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__57958),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__57977 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__57977);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__57979 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__57979);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__57983 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__57983);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k57986,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__57997 = k57986;
var G__57997__$1 = (((G__57997 instanceof cljs.core.Keyword))?G__57997.fqn:null);
switch (G__57997__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57986,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__57999){
var vec__58002 = p__57999;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58002,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58002,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57985){
var self__ = this;
var G__57985__$1 = this;
return (new cljs.core.RecordIter((0),G__57985__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__58011 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58011(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57987,other57988){
var self__ = this;
var this57987__$1 = this;
return (((!((other57988 == null)))) && ((this57987__$1.constructor === other57988.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57987__$1.w,other57988.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57987__$1.h,other57988.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57987__$1.__extmap,other57988.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__57985){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58016 = cljs.core.keyword_identical_QMARK_;
var expr__58017 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58019 = new cljs.core.Keyword(null,"w","w",354169001);
var G__58020 = expr__58017;
return (pred__58016.cljs$core$IFn$_invoke$arity$2 ? pred__58016.cljs$core$IFn$_invoke$arity$2(G__58019,G__58020) : pred__58016.call(null,G__58019,G__58020));
})())){
return (new shadow.dom.Size(G__57985,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58021 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__58022 = expr__58017;
return (pred__58016.cljs$core$IFn$_invoke$arity$2 ? pred__58016.cljs$core$IFn$_invoke$arity$2(G__58021,G__58022) : pred__58016.call(null,G__58021,G__58022));
})())){
return (new shadow.dom.Size(self__.w,G__57985,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__57985),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__57985){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__57985,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__57990){
var extmap__4478__auto__ = (function (){var G__58029 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57990,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__57990)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58029);
} else {
return G__58029;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__57990),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__57990),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__58031 = shadow.dom.dom_node(el);
return goog.style.getSize(G__58031);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__58529 = (i + (1));
var G__58530 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58529;
ret = G__58530;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58046){
var vec__58047 = p__58046;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58047,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58052 = arguments.length;
switch (G__58052) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58053_58542 = new_node;
var G__58054_58543 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__58053_58542,G__58054_58543);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58055_58544 = new_node;
var G__58056_58545 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__58055_58544,G__58056_58545);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__58546 = ps;
var G__58547 = (i + (1));
el__$1 = G__58546;
i = G__58547;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__58057 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__58057);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__58058 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__58058);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__58059 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__58059);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58060 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58060,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58060,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58060,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58063_58554 = cljs.core.seq(props);
var chunk__58064_58555 = null;
var count__58065_58556 = (0);
var i__58066_58557 = (0);
while(true){
if((i__58066_58557 < count__58065_58556)){
var vec__58073_58558 = chunk__58064_58555.cljs$core$IIndexed$_nth$arity$2(null,i__58066_58557);
var k_58559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58073_58558,(0),null);
var v_58560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58073_58558,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_58559);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58559),v_58560);


var G__58561 = seq__58063_58554;
var G__58562 = chunk__58064_58555;
var G__58563 = count__58065_58556;
var G__58564 = (i__58066_58557 + (1));
seq__58063_58554 = G__58561;
chunk__58064_58555 = G__58562;
count__58065_58556 = G__58563;
i__58066_58557 = G__58564;
continue;
} else {
var temp__5735__auto___58565 = cljs.core.seq(seq__58063_58554);
if(temp__5735__auto___58565){
var seq__58063_58566__$1 = temp__5735__auto___58565;
if(cljs.core.chunked_seq_QMARK_(seq__58063_58566__$1)){
var c__4609__auto___58567 = cljs.core.chunk_first(seq__58063_58566__$1);
var G__58568 = cljs.core.chunk_rest(seq__58063_58566__$1);
var G__58569 = c__4609__auto___58567;
var G__58570 = cljs.core.count(c__4609__auto___58567);
var G__58571 = (0);
seq__58063_58554 = G__58568;
chunk__58064_58555 = G__58569;
count__58065_58556 = G__58570;
i__58066_58557 = G__58571;
continue;
} else {
var vec__58076_58573 = cljs.core.first(seq__58063_58566__$1);
var k_58574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58076_58573,(0),null);
var v_58575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58076_58573,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_58574);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58574),v_58575);


var G__58579 = cljs.core.next(seq__58063_58566__$1);
var G__58580 = null;
var G__58581 = (0);
var G__58582 = (0);
seq__58063_58554 = G__58579;
chunk__58064_58555 = G__58580;
count__58065_58556 = G__58581;
i__58066_58557 = G__58582;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__58080 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58080,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58080,(1),null);
var seq__58083_58583 = cljs.core.seq(node_children);
var chunk__58085_58584 = null;
var count__58086_58585 = (0);
var i__58087_58586 = (0);
while(true){
if((i__58087_58586 < count__58086_58585)){
var child_struct_58587 = chunk__58085_58584.cljs$core$IIndexed$_nth$arity$2(null,i__58087_58586);
if((!((child_struct_58587 == null)))){
if(typeof child_struct_58587 === 'string'){
var text_58588 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58588),child_struct_58587].join(''));
} else {
var children_58589 = shadow.dom.svg_node(child_struct_58587);
if(cljs.core.seq_QMARK_(children_58589)){
var seq__58125_58590 = cljs.core.seq(children_58589);
var chunk__58127_58591 = null;
var count__58128_58592 = (0);
var i__58129_58593 = (0);
while(true){
if((i__58129_58593 < count__58128_58592)){
var child_58594 = chunk__58127_58591.cljs$core$IIndexed$_nth$arity$2(null,i__58129_58593);
if(cljs.core.truth_(child_58594)){
node.appendChild(child_58594);


var G__58595 = seq__58125_58590;
var G__58596 = chunk__58127_58591;
var G__58597 = count__58128_58592;
var G__58598 = (i__58129_58593 + (1));
seq__58125_58590 = G__58595;
chunk__58127_58591 = G__58596;
count__58128_58592 = G__58597;
i__58129_58593 = G__58598;
continue;
} else {
var G__58599 = seq__58125_58590;
var G__58600 = chunk__58127_58591;
var G__58601 = count__58128_58592;
var G__58602 = (i__58129_58593 + (1));
seq__58125_58590 = G__58599;
chunk__58127_58591 = G__58600;
count__58128_58592 = G__58601;
i__58129_58593 = G__58602;
continue;
}
} else {
var temp__5735__auto___58603 = cljs.core.seq(seq__58125_58590);
if(temp__5735__auto___58603){
var seq__58125_58604__$1 = temp__5735__auto___58603;
if(cljs.core.chunked_seq_QMARK_(seq__58125_58604__$1)){
var c__4609__auto___58605 = cljs.core.chunk_first(seq__58125_58604__$1);
var G__58606 = cljs.core.chunk_rest(seq__58125_58604__$1);
var G__58607 = c__4609__auto___58605;
var G__58608 = cljs.core.count(c__4609__auto___58605);
var G__58609 = (0);
seq__58125_58590 = G__58606;
chunk__58127_58591 = G__58607;
count__58128_58592 = G__58608;
i__58129_58593 = G__58609;
continue;
} else {
var child_58610 = cljs.core.first(seq__58125_58604__$1);
if(cljs.core.truth_(child_58610)){
node.appendChild(child_58610);


var G__58611 = cljs.core.next(seq__58125_58604__$1);
var G__58612 = null;
var G__58613 = (0);
var G__58614 = (0);
seq__58125_58590 = G__58611;
chunk__58127_58591 = G__58612;
count__58128_58592 = G__58613;
i__58129_58593 = G__58614;
continue;
} else {
var G__58615 = cljs.core.next(seq__58125_58604__$1);
var G__58616 = null;
var G__58617 = (0);
var G__58618 = (0);
seq__58125_58590 = G__58615;
chunk__58127_58591 = G__58616;
count__58128_58592 = G__58617;
i__58129_58593 = G__58618;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58589);
}
}


var G__58619 = seq__58083_58583;
var G__58620 = chunk__58085_58584;
var G__58621 = count__58086_58585;
var G__58622 = (i__58087_58586 + (1));
seq__58083_58583 = G__58619;
chunk__58085_58584 = G__58620;
count__58086_58585 = G__58621;
i__58087_58586 = G__58622;
continue;
} else {
var G__58625 = seq__58083_58583;
var G__58626 = chunk__58085_58584;
var G__58627 = count__58086_58585;
var G__58628 = (i__58087_58586 + (1));
seq__58083_58583 = G__58625;
chunk__58085_58584 = G__58626;
count__58086_58585 = G__58627;
i__58087_58586 = G__58628;
continue;
}
} else {
var temp__5735__auto___58629 = cljs.core.seq(seq__58083_58583);
if(temp__5735__auto___58629){
var seq__58083_58630__$1 = temp__5735__auto___58629;
if(cljs.core.chunked_seq_QMARK_(seq__58083_58630__$1)){
var c__4609__auto___58631 = cljs.core.chunk_first(seq__58083_58630__$1);
var G__58632 = cljs.core.chunk_rest(seq__58083_58630__$1);
var G__58633 = c__4609__auto___58631;
var G__58634 = cljs.core.count(c__4609__auto___58631);
var G__58635 = (0);
seq__58083_58583 = G__58632;
chunk__58085_58584 = G__58633;
count__58086_58585 = G__58634;
i__58087_58586 = G__58635;
continue;
} else {
var child_struct_58636 = cljs.core.first(seq__58083_58630__$1);
if((!((child_struct_58636 == null)))){
if(typeof child_struct_58636 === 'string'){
var text_58637 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58637),child_struct_58636].join(''));
} else {
var children_58638 = shadow.dom.svg_node(child_struct_58636);
if(cljs.core.seq_QMARK_(children_58638)){
var seq__58131_58639 = cljs.core.seq(children_58638);
var chunk__58133_58640 = null;
var count__58134_58641 = (0);
var i__58135_58642 = (0);
while(true){
if((i__58135_58642 < count__58134_58641)){
var child_58644 = chunk__58133_58640.cljs$core$IIndexed$_nth$arity$2(null,i__58135_58642);
if(cljs.core.truth_(child_58644)){
node.appendChild(child_58644);


var G__58645 = seq__58131_58639;
var G__58646 = chunk__58133_58640;
var G__58647 = count__58134_58641;
var G__58648 = (i__58135_58642 + (1));
seq__58131_58639 = G__58645;
chunk__58133_58640 = G__58646;
count__58134_58641 = G__58647;
i__58135_58642 = G__58648;
continue;
} else {
var G__58649 = seq__58131_58639;
var G__58650 = chunk__58133_58640;
var G__58651 = count__58134_58641;
var G__58652 = (i__58135_58642 + (1));
seq__58131_58639 = G__58649;
chunk__58133_58640 = G__58650;
count__58134_58641 = G__58651;
i__58135_58642 = G__58652;
continue;
}
} else {
var temp__5735__auto___58653__$1 = cljs.core.seq(seq__58131_58639);
if(temp__5735__auto___58653__$1){
var seq__58131_58654__$1 = temp__5735__auto___58653__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58131_58654__$1)){
var c__4609__auto___58655 = cljs.core.chunk_first(seq__58131_58654__$1);
var G__58656 = cljs.core.chunk_rest(seq__58131_58654__$1);
var G__58657 = c__4609__auto___58655;
var G__58658 = cljs.core.count(c__4609__auto___58655);
var G__58659 = (0);
seq__58131_58639 = G__58656;
chunk__58133_58640 = G__58657;
count__58134_58641 = G__58658;
i__58135_58642 = G__58659;
continue;
} else {
var child_58660 = cljs.core.first(seq__58131_58654__$1);
if(cljs.core.truth_(child_58660)){
node.appendChild(child_58660);


var G__58661 = cljs.core.next(seq__58131_58654__$1);
var G__58662 = null;
var G__58663 = (0);
var G__58664 = (0);
seq__58131_58639 = G__58661;
chunk__58133_58640 = G__58662;
count__58134_58641 = G__58663;
i__58135_58642 = G__58664;
continue;
} else {
var G__58665 = cljs.core.next(seq__58131_58654__$1);
var G__58666 = null;
var G__58667 = (0);
var G__58668 = (0);
seq__58131_58639 = G__58665;
chunk__58133_58640 = G__58666;
count__58134_58641 = G__58667;
i__58135_58642 = G__58668;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58638);
}
}


var G__58669 = cljs.core.next(seq__58083_58630__$1);
var G__58670 = null;
var G__58671 = (0);
var G__58672 = (0);
seq__58083_58583 = G__58669;
chunk__58085_58584 = G__58670;
count__58086_58585 = G__58671;
i__58087_58586 = G__58672;
continue;
} else {
var G__58673 = cljs.core.next(seq__58083_58630__$1);
var G__58674 = null;
var G__58675 = (0);
var G__58676 = (0);
seq__58083_58583 = G__58673;
chunk__58085_58584 = G__58674;
count__58086_58585 = G__58675;
i__58087_58586 = G__58676;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__58142_58677 = shadow.dom._to_svg;
var G__58143_58678 = "string";
var G__58144_58679 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__58142_58677,G__58143_58678,G__58144_58679);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__58151_58681 = shadow.dom._to_svg;
var G__58152_58682 = "null";
var G__58153_58683 = (function (_){
return null;
});
goog.object.set(G__58151_58681,G__58152_58682,G__58153_58683);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58685 = arguments.length;
var i__4790__auto___58686 = (0);
while(true){
if((i__4790__auto___58686 < len__4789__auto___58685)){
args__4795__auto__.push((arguments[i__4790__auto___58686]));

var G__58687 = (i__4790__auto___58686 + (1));
i__4790__auto___58686 = G__58687;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58154){
var G__58155 = cljs.core.first(seq58154);
var seq58154__$1 = cljs.core.next(seq58154);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58155,seq58154__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__58159 = arguments.length;
switch (G__58159) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__58160_58695 = shadow.dom.dom_node(el);
var G__58161_58696 = cljs.core.name(event);
var G__58162_58697 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58160_58695,G__58161_58696,G__58162_58697) : shadow.dom.dom_listen.call(null,G__58160_58695,G__58161_58696,G__58162_58697));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__55908__auto___58698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55807__auto__ = (function (state_58167){
var state_val_58168 = (state_58167[(1)]);
if((state_val_58168 === (1))){
var state_58167__$1 = state_58167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58167__$1,(2),once_or_cleanup);
} else {
if((state_val_58168 === (2))){
var inst_58164 = (state_58167[(2)]);
var inst_58165 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58167__$1 = (function (){var statearr_58169 = state_58167;
(statearr_58169[(7)] = inst_58164);

return statearr_58169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58167__$1,inst_58165);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55808__auto__ = null;
var shadow$dom$state_machine__55808__auto____0 = (function (){
var statearr_58170 = [null,null,null,null,null,null,null,null];
(statearr_58170[(0)] = shadow$dom$state_machine__55808__auto__);

(statearr_58170[(1)] = (1));

return statearr_58170;
});
var shadow$dom$state_machine__55808__auto____1 = (function (state_58167){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_58167);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e58171){if((e58171 instanceof Object)){
var ex__55811__auto__ = e58171;
var statearr_58172_58700 = state_58167;
(statearr_58172_58700[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58705 = state_58167;
state_58167 = G__58705;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
shadow$dom$state_machine__55808__auto__ = function(state_58167){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55808__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55808__auto____1.call(this,state_58167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55808__auto____0;
shadow$dom$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55808__auto____1;
return shadow$dom$state_machine__55808__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_58173 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_58173[(6)] = c__55908__auto___58698);

return statearr_58173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
