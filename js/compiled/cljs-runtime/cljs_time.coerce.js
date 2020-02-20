goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4487__auto__ = (((obj == null))?null:obj);
var m__4488__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4488__auto__.call(null,obj));
} else {
var m__4485__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4485__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__63187 = millis;
if((G__63187 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__63187) : goog.date.UtcDateTime.fromTimestamp.call(null,G__63187));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4582__auto__ = (function cljs_time$coerce$from_string_$_iter__63188(s__63189){
return (new cljs.core.LazySeq(null,(function (){
var s__63189__$1 = s__63189;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63189__$1);
if(temp__5735__auto__){
var s__63189__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63189__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63189__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63191 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63190 = (0);
while(true){
if((i__63190 < size__4581__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63190);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e63192){if((e63192 instanceof Error)){
var _ = e63192;
return null;
} else {
throw e63192;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__63191,d);

var G__63237 = (i__63190 + (1));
i__63190 = G__63237;
continue;
} else {
var G__63238 = (i__63190 + (1));
i__63190 = G__63238;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63191),cljs_time$coerce$from_string_$_iter__63188(cljs.core.chunk_rest(s__63189__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63191),null);
}
} else {
var f = cljs.core.first(s__63189__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e63193){if((e63193 instanceof Error)){
var _ = e63193;
return null;
} else {
throw e63193;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__63188(cljs.core.rest(s__63189__$2)));
} else {
var G__63242 = cljs.core.rest(s__63189__$2);
s__63189__$1 = G__63242;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__63194 = date;
var G__63194__$1 = (((G__63194 == null))?null:G__63194.getTime());
if((G__63194__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__63194__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__63195 = obj;
var G__63195__$1 = (((G__63195 == null))?null:cljs_time.coerce.to_date_time(G__63195));
if((G__63195__$1 == null)){
return null;
} else {
return G__63195__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__4174__auto__ = millis;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__4174__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__63196 = obj;
var G__63196__$1 = (((G__63196 == null))?null:cljs_time.coerce.to_date_time(G__63196));
var G__63196__$2 = (((G__63196__$1 == null))?null:G__63196__$1.getTime());
if((G__63196__$2 == null)){
return null;
} else {
return (new Date(G__63196__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__63197 = obj;
var G__63197__$1 = (((G__63197 == null))?null:cljs_time.coerce.to_date_time(G__63197));
if((G__63197__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__63197__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5733__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5733__auto__)){
var dt = temp__5733__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5733__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5733__auto__)){
var dt = temp__5733__auto__;
var G__63199 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__63199.setHours(dt.getHours());

G__63199.setMinutes(dt.getMinutes());

G__63199.setSeconds(dt.getSeconds());

G__63199.setMilliseconds(dt.getMilliseconds());

return G__63199;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__63200_63244 = cljs_time.coerce.to_date_time;
var G__63201_63245 = "null";
var G__63202_63246 = (function (_){
return null;
});
goog.object.set(G__63200_63244,G__63201_63245,G__63202_63246);

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__63203_63247 = cljs_time.coerce.to_date_time;
var G__63204_63248 = "number";
var G__63205_63249 = (function (long$){
return cljs_time.coerce.from_long(long$);
});
goog.object.set(G__63203_63247,G__63204_63248,G__63205_63249);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__63207_63250 = cljs_time.coerce.to_date_time;
var G__63208_63251 = "string";
var G__63209_63252 = (function (string){
return cljs_time.coerce.from_string(string);
});
goog.object.set(G__63207_63250,G__63208_63251,G__63209_63252);

//# sourceMappingURL=cljs_time.coerce.js.map
