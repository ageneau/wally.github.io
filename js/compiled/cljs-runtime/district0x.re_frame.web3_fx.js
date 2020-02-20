goog.provide('district0x.re_frame.web3_fx');
goog.require('cljs.core');
goog.require('cljs_web3.eth');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
district0x.re_frame.web3_fx._STAR_listeners_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
district0x.re_frame.web3_fx.block_filter_opts_QMARK_ = (function district0x$re_frame$web3_fx$block_filter_opts_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) || (typeof x === 'string') || ((x == null)));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),cljs.core.list(new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.complement(cljs.core.nil_QMARK_));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Symbol("district0x.re-frame.web3-fx","block-filter-opts?","district0x.re-frame.web3-fx/block-filter-opts?",-1491416411,null),district0x.re_frame.web3_fx.block_filter_opts_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),cljs.core.list(new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.complement(cljs.core.nil_QMARK_));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","event-ids","district0x.re-frame.web3-fx/event-ids",171623322),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__47087_SHARP_){
return ((cljs.core.fn_QMARK_(p1__47087_SHARP_)) || ((p1__47087_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__47087_SHARP_ === 'string'));
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421),new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__47088){
return cljs.core.coll_QMARK_(G__47088);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","event-id","district0x.re-frame.web3-fx/event-id",2011956357),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Symbol("district0x.re-frame.web3-fx","block-filter-opts?","district0x.re-frame.web3-fx/block-filter-opts?",-1491416411,null),district0x.re_frame.web3_fx.block_filter_opts_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hashes","district0x.re-frame.web3-fx/tx-hashes",89248703),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__47089){
return cljs.core.coll_QMARK_(G__47089);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null)))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47091){
return cljs.core.map_QMARK_(G__47091);
})], null),(function (G__47091){
return cljs.core.map_QMARK_(G__47091);
}),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__47090){
return cljs.core.coll_QMARK_(G__47090);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null))))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","call","district0x.re-frame.web3-fx/call",-644577399),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47092){
return cljs.core.map_QMARK_(G__47092);
}),(function (G__47092){
return cljs.core.contains_QMARK_(G__47092,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (G__47092){
return cljs.core.contains_QMARK_(G__47092,new cljs.core.Keyword(null,"fns","fns",1185138786));
})], null),(function (G__47092){
return ((cljs.core.map_QMARK_(G__47092)) && (cljs.core.contains_QMARK_(G__47092,new cljs.core.Keyword(null,"web3","web3",-879451640))) && (cljs.core.contains_QMARK_(G__47092,new cljs.core.Keyword(null,"fns","fns",1185138786))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"fns","fns",1185138786)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"fns","fns",1185138786)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null)))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47094){
return cljs.core.map_QMARK_(G__47094);
}),(function (G__47094){
return cljs.core.contains_QMARK_(G__47094,new cljs.core.Keyword(null,"instance","instance",-2121349050));
}),(function (G__47094){
return cljs.core.contains_QMARK_(G__47094,new cljs.core.Keyword(null,"event","event",301435442));
})], null),(function (G__47094){
return ((cljs.core.map_QMARK_(G__47094)) && (cljs.core.contains_QMARK_(G__47094,new cljs.core.Keyword(null,"instance","instance",-2121349050))) && (cljs.core.contains_QMARK_(G__47094,new cljs.core.Keyword(null,"event","event",301435442))));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"event","event",301435442)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"instance","instance",-2121349050))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"event","event",301435442)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__47093){
return cljs.core.coll_QMARK_(G__47093);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null))))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-events","district0x.re-frame.web3-fx/watch-events",-1055414721),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47095){
return cljs.core.map_QMARK_(G__47095);
}),(function (G__47095){
return cljs.core.contains_QMARK_(G__47095,new cljs.core.Keyword(null,"events","events",1792552201));
})], null),(function (G__47095){
return ((cljs.core.map_QMARK_(G__47095)) && (cljs.core.contains_QMARK_(G__47095,new cljs.core.Keyword(null,"events","events",1792552201))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"events","events",1792552201)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47097){
return cljs.core.map_QMARK_(G__47097);
}),(function (G__47097){
return cljs.core.contains_QMARK_(G__47097,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
})], null),(function (G__47097){
return ((cljs.core.map_QMARK_(G__47097)) && (cljs.core.contains_QMARK_(G__47097,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200))));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__47096){
return cljs.core.coll_QMARK_(G__47096);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-transactions","district0x.re-frame.web3-fx/watch-transactions",-1867553294),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47098){
return cljs.core.map_QMARK_(G__47098);
}),(function (G__47098){
return cljs.core.contains_QMARK_(G__47098,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (G__47098){
return cljs.core.contains_QMARK_(G__47098,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
})], null),(function (G__47098){
return ((cljs.core.map_QMARK_(G__47098)) && (cljs.core.contains_QMARK_(G__47098,new cljs.core.Keyword(null,"web3","web3",-879451640))) && (cljs.core.contains_QMARK_(G__47098,new cljs.core.Keyword(null,"transactions","transactions",-1425846118))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"transactions","transactions",-1425846118)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"transactions","transactions",-1425846118)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47100){
return cljs.core.map_QMARK_(G__47100);
}),(function (G__47100){
return cljs.core.contains_QMARK_(G__47100,new cljs.core.Keyword(null,"address","address",559499426));
}),(function (G__47100){
return cljs.core.contains_QMARK_(G__47100,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
})], null),(function (G__47100){
return ((cljs.core.map_QMARK_(G__47100)) && (cljs.core.contains_QMARK_(G__47100,new cljs.core.Keyword(null,"address","address",559499426))) && (cljs.core.contains_QMARK_(G__47100,new cljs.core.Keyword(null,"on-success","on-success",1786904109))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"watch?","watch?",-1976903168),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"address","address",559499426))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__47099){
return cljs.core.coll_QMARK_(G__47099);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","get-balances","district0x.re-frame.web3-fx/get-balances",1560627875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47101){
return cljs.core.map_QMARK_(G__47101);
}),(function (G__47101){
return cljs.core.contains_QMARK_(G__47101,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
}),(function (G__47101){
return cljs.core.contains_QMARK_(G__47101,new cljs.core.Keyword(null,"web3","web3",-879451640));
})], null),(function (G__47101){
return ((cljs.core.map_QMARK_(G__47101)) && (cljs.core.contains_QMARK_(G__47101,new cljs.core.Keyword(null,"addresses","addresses",-559529694))) && (cljs.core.contains_QMARK_(G__47101,new cljs.core.Keyword(null,"web3","web3",-879451640))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"web3","web3",-879451640)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"addresses","addresses",-559529694))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","listen","district0x.re-frame.web3-fx/listen",-1948149550),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47102){
return cljs.core.map_QMARK_(G__47102);
}),(function (G__47102){
return cljs.core.contains_QMARK_(G__47102,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
}),(function (G__47102){
return cljs.core.contains_QMARK_(G__47102,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
}),(function (G__47102){
return cljs.core.contains_QMARK_(G__47102,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (G__47102){
return cljs.core.contains_QMARK_(G__47102,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
})], null),(function (G__47102){
return ((cljs.core.map_QMARK_(G__47102)) && (cljs.core.contains_QMARK_(G__47102,new cljs.core.Keyword(null,"on-success","on-success",1786904109))) && (cljs.core.contains_QMARK_(G__47102,new cljs.core.Keyword(null,"on-error","on-error",1728533530))) && (cljs.core.contains_QMARK_(G__47102,new cljs.core.Keyword(null,"web3","web3",-879451640))) && (cljs.core.contains_QMARK_(G__47102,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-error","on-error",1728533530))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672)))], null),null])));
district0x.re_frame.web3_fx.dispach_fn = (function district0x$re_frame$web3_fx$dispach_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47256 = arguments.length;
var i__4790__auto___47257 = (0);
while(true){
if((i__4790__auto___47257 < len__4789__auto___47256)){
args__4795__auto__.push((arguments[i__4790__auto___47257]));

var G__47258 = (i__4790__auto___47257 + (1));
i__4790__auto___47257 = G__47258;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return district0x.re_frame.web3_fx.dispach_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(district0x.re_frame.web3_fx.dispach_fn.cljs$core$IFn$_invoke$arity$variadic = (function (on_success,on_error,args){
return (function (err,res){
if(cljs.core.truth_(err)){
var G__47106 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(on_error,cljs.core.cons(err,args)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47106) : re_frame.core.dispatch.call(null,G__47106));
} else {
var G__47107 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(on_success,cljs.core.cons(res,args)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47107) : re_frame.core.dispatch.call(null,G__47107));
}
});
}));

(district0x.re_frame.web3_fx.dispach_fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(district0x.re_frame.web3_fx.dispach_fn.cljs$lang$applyTo = (function (seq47103){
var G__47104 = cljs.core.first(seq47103);
var seq47103__$1 = cljs.core.next(seq47103);
var G__47105 = cljs.core.first(seq47103__$1);
var seq47103__$2 = cljs.core.next(seq47103__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47104,G__47105,seq47103__$2);
}));

district0x.re_frame.web3_fx.contract_event_dispach_fn = (function district0x$re_frame$web3_fx$contract_event_dispach_fn(on_success,on_error){
return (function (err,res){
if(cljs.core.truth_(err)){
var G__47108 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(on_error,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err], null)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47108) : re_frame.core.dispatch.call(null,G__47108));
} else {
var G__47109 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(on_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(res),res], null)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47109) : re_frame.core.dispatch.call(null,G__47109));
}
});
});
district0x.re_frame.web3_fx.stop_listener_BANG_ = (function district0x$re_frame$web3_fx$stop_listener_BANG_(id){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(district0x.re_frame.web3_fx._STAR_listeners_STAR_),id);
if(cljs.core.truth_(temp__5735__auto__)){
var filters = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(district0x.re_frame.web3_fx._STAR_listeners_STAR_,cljs.core.dissoc,id);

var seq__47110 = cljs.core.seq(filters);
var chunk__47111 = null;
var count__47112 = (0);
var i__47113 = (0);
while(true){
if((i__47113 < count__47112)){
var filter = chunk__47111.cljs$core$IIndexed$_nth$arity$2(null,i__47113);
cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic(filter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__47110,chunk__47111,count__47112,i__47113,filter,filters,temp__5735__auto__){
return (function (){
return null;
});})(seq__47110,chunk__47111,count__47112,i__47113,filter,filters,temp__5735__auto__))
], 0));


var G__47259 = seq__47110;
var G__47260 = chunk__47111;
var G__47261 = count__47112;
var G__47262 = (i__47113 + (1));
seq__47110 = G__47259;
chunk__47111 = G__47260;
count__47112 = G__47261;
i__47113 = G__47262;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__47110);
if(temp__5735__auto____$1){
var seq__47110__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__47110__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47110__$1);
var G__47263 = cljs.core.chunk_rest(seq__47110__$1);
var G__47264 = c__4609__auto__;
var G__47265 = cljs.core.count(c__4609__auto__);
var G__47266 = (0);
seq__47110 = G__47263;
chunk__47111 = G__47264;
count__47112 = G__47265;
i__47113 = G__47266;
continue;
} else {
var filter = cljs.core.first(seq__47110__$1);
cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic(filter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__47110,chunk__47111,count__47112,i__47113,filter,seq__47110__$1,temp__5735__auto____$1,filters,temp__5735__auto__){
return (function (){
return null;
});})(seq__47110,chunk__47111,count__47112,i__47113,filter,seq__47110__$1,temp__5735__auto____$1,filters,temp__5735__auto__))
], 0));


var G__47267 = cljs.core.next(seq__47110__$1);
var G__47268 = null;
var G__47269 = (0);
var G__47270 = (0);
seq__47110 = G__47267;
chunk__47111 = G__47268;
count__47112 = G__47269;
i__47113 = G__47270;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
district0x.re_frame.web3_fx.start_listener_BANG_ = (function district0x$re_frame$web3_fx$start_listener_BANG_(p__47114){
var map__47115 = p__47114;
var map__47115__$1 = (((((!((map__47115 == null))))?(((((map__47115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47115):map__47115);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47115__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47115__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47115__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47115__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var id__$1 = (cljs.core.truth_(id)?id:callback);
district0x.re_frame.web3_fx.stop_listener_BANG_(id__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(district0x.re_frame.web3_fx._STAR_listeners_STAR_,cljs.core.update,id__$1,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_filter_opts,callback], 0))], 0));

return id__$1;
});
district0x.re_frame.web3_fx.start_event_listener_BANG_ = (function district0x$re_frame$web3_fx$start_event_listener_BANG_(p__47117){
var map__47118 = p__47117;
var map__47118__$1 = (((((!((map__47118 == null))))?(((((map__47118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47118):map__47118);
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47118__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47118__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47118__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47118__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47118__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47118__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var id__$1 = (cljs.core.truth_(id)?id:callback);
district0x.re_frame.web3_fx.stop_listener_BANG_(id__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(district0x.re_frame.web3_fx._STAR_listeners_STAR_,cljs.core.update,id__$1,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_filter_opts,block_filter_opts,callback], 0))], 0));

return id__$1;
});
district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn = (function district0x$re_frame$web3_fx$dispatch_on_tx_receipt_fn(p__47122){
var map__47123 = p__47122;
var map__47123__$1 = (((((!((map__47123 == null))))?(((((map__47123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47123):map__47123);
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47123__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47123__$1,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47123__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47123__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47123__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47123__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47123__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var on_tx_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47123__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47123__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
return cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx_hash,(function (_,receipt){
if(cljs.core.truth_(new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(receipt))){
district0x.re_frame.web3_fx.stop_listener_BANG_(id);

if(cljs.core.truth_(on_tx_receipt)){
var G__47125_47271 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_receipt),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47125_47271) : re_frame.core.dispatch.call(null,G__47125_47271));
} else {
}

var pred__47126 = (function (p1__47120_SHARP_,p2__47121_SHARP_){
return cljs.core.contains_QMARK_(p1__47120_SHARP_,p2__47121_SHARP_);
});
var expr__47127 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(receipt);
if(pred__47126(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,"0x00",null,"0x0",null], null), null),expr__47127)){
if(cljs.core.truth_(on_tx_error)){
var G__47129_47272 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_error),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47129_47272) : re_frame.core.dispatch.call(null,G__47129_47272));
} else {
}

if(cljs.core.truth_(on_tx_error_n)){
var seq__47130 = cljs.core.seq(on_tx_error_n);
var chunk__47131 = null;
var count__47132 = (0);
var i__47133 = (0);
while(true){
if((i__47133 < count__47132)){
var callback = chunk__47131.cljs$core$IIndexed$_nth$arity$2(null,i__47133);
var G__47136_47273 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47136_47273) : re_frame.core.dispatch.call(null,G__47136_47273));


var G__47274 = seq__47130;
var G__47275 = chunk__47131;
var G__47276 = count__47132;
var G__47277 = (i__47133 + (1));
seq__47130 = G__47274;
chunk__47131 = G__47275;
count__47132 = G__47276;
i__47133 = G__47277;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47130);
if(temp__5735__auto__){
var seq__47130__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47130__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47130__$1);
var G__47278 = cljs.core.chunk_rest(seq__47130__$1);
var G__47279 = c__4609__auto__;
var G__47280 = cljs.core.count(c__4609__auto__);
var G__47281 = (0);
seq__47130 = G__47278;
chunk__47131 = G__47279;
count__47132 = G__47280;
i__47133 = G__47281;
continue;
} else {
var callback = cljs.core.first(seq__47130__$1);
var G__47137_47282 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47137_47282) : re_frame.core.dispatch.call(null,G__47137_47282));


var G__47283 = cljs.core.next(seq__47130__$1);
var G__47284 = null;
var G__47285 = (0);
var G__47286 = (0);
seq__47130 = G__47283;
chunk__47131 = G__47284;
count__47132 = G__47285;
i__47133 = G__47286;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
if(pred__47126(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,"0x1",null,"0x01",null], null), null),expr__47127)){
if(cljs.core.truth_(on_tx_success)){
var G__47138_47287 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_success),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47138_47287) : re_frame.core.dispatch.call(null,G__47138_47287));
} else {
}

if(cljs.core.truth_(on_tx_success_n)){
var seq__47139 = cljs.core.seq(on_tx_success_n);
var chunk__47140 = null;
var count__47141 = (0);
var i__47142 = (0);
while(true){
if((i__47142 < count__47141)){
var callback = chunk__47140.cljs$core$IIndexed$_nth$arity$2(null,i__47142);
var G__47145_47288 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47145_47288) : re_frame.core.dispatch.call(null,G__47145_47288));


var G__47289 = seq__47139;
var G__47290 = chunk__47140;
var G__47291 = count__47141;
var G__47292 = (i__47142 + (1));
seq__47139 = G__47289;
chunk__47140 = G__47290;
count__47141 = G__47291;
i__47142 = G__47292;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47139);
if(temp__5735__auto__){
var seq__47139__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47139__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47139__$1);
var G__47293 = cljs.core.chunk_rest(seq__47139__$1);
var G__47294 = c__4609__auto__;
var G__47295 = cljs.core.count(c__4609__auto__);
var G__47296 = (0);
seq__47139 = G__47293;
chunk__47140 = G__47294;
count__47141 = G__47295;
i__47142 = G__47296;
continue;
} else {
var callback = cljs.core.first(seq__47139__$1);
var G__47146_47297 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47146_47297) : re_frame.core.dispatch.call(null,G__47146_47297));


var G__47298 = cljs.core.next(seq__47139__$1);
var G__47299 = null;
var G__47300 = (0);
var G__47301 = (0);
seq__47139 = G__47298;
chunk__47140 = G__47299;
count__47141 = G__47300;
i__47142 = G__47301;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__47127)].join('')));
}
}
} else {
return null;
}
})], 0));
}
});
});
district0x.re_frame.web3_fx.contract_state_call_callback = (function district0x$re_frame$web3_fx$contract_state_call_callback(p__47147){
var map__47148 = p__47147;
var map__47148__$1 = (((((!((map__47148 == null))))?(((((map__47148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47148):map__47148);
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47148__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var on_tx_hash_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47148__$1,new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502));
var on_tx_hash_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47148__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47148__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var on_tx_hash_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47148__$1,new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47148__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47148__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47148__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47148__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47148__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47148__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
return (function (err,tx_hash){
if(cljs.core.truth_(err)){
if(cljs.core.truth_(on_tx_hash_error)){
var G__47150_47302 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_hash_error),err);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47150_47302) : re_frame.core.dispatch.call(null,G__47150_47302));
} else {
}

if(cljs.core.truth_(on_tx_hash_error_n)){
var seq__47151 = cljs.core.seq(on_tx_hash_error_n);
var chunk__47152 = null;
var count__47153 = (0);
var i__47154 = (0);
while(true){
if((i__47154 < count__47153)){
var callback = chunk__47152.cljs$core$IIndexed$_nth$arity$2(null,i__47154);
var G__47157_47303 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),err);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47157_47303) : re_frame.core.dispatch.call(null,G__47157_47303));


var G__47304 = seq__47151;
var G__47305 = chunk__47152;
var G__47306 = count__47153;
var G__47307 = (i__47154 + (1));
seq__47151 = G__47304;
chunk__47152 = G__47305;
count__47153 = G__47306;
i__47154 = G__47307;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47151);
if(temp__5735__auto__){
var seq__47151__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47151__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47151__$1);
var G__47308 = cljs.core.chunk_rest(seq__47151__$1);
var G__47309 = c__4609__auto__;
var G__47310 = cljs.core.count(c__4609__auto__);
var G__47311 = (0);
seq__47151 = G__47308;
chunk__47152 = G__47309;
count__47153 = G__47310;
i__47154 = G__47311;
continue;
} else {
var callback = cljs.core.first(seq__47151__$1);
var G__47158_47312 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),err);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47158_47312) : re_frame.core.dispatch.call(null,G__47158_47312));


var G__47313 = cljs.core.next(seq__47151__$1);
var G__47314 = null;
var G__47315 = (0);
var G__47316 = (0);
seq__47151 = G__47313;
chunk__47152 = G__47314;
count__47153 = G__47315;
i__47154 = G__47316;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(on_tx_hash)){
var G__47159_47317 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_hash),tx_hash);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47159_47317) : re_frame.core.dispatch.call(null,G__47159_47317));
} else {
}

if(cljs.core.truth_(on_tx_hash_n)){
var seq__47160_47318 = cljs.core.seq(on_tx_hash_n);
var chunk__47161_47319 = null;
var count__47162_47320 = (0);
var i__47163_47321 = (0);
while(true){
if((i__47163_47321 < count__47162_47320)){
var callback_47322 = chunk__47161_47319.cljs$core$IIndexed$_nth$arity$2(null,i__47163_47321);
var G__47166_47323 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback_47322),tx_hash);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47166_47323) : re_frame.core.dispatch.call(null,G__47166_47323));


var G__47324 = seq__47160_47318;
var G__47325 = chunk__47161_47319;
var G__47326 = count__47162_47320;
var G__47327 = (i__47163_47321 + (1));
seq__47160_47318 = G__47324;
chunk__47161_47319 = G__47325;
count__47162_47320 = G__47326;
i__47163_47321 = G__47327;
continue;
} else {
var temp__5735__auto___47328 = cljs.core.seq(seq__47160_47318);
if(temp__5735__auto___47328){
var seq__47160_47329__$1 = temp__5735__auto___47328;
if(cljs.core.chunked_seq_QMARK_(seq__47160_47329__$1)){
var c__4609__auto___47330 = cljs.core.chunk_first(seq__47160_47329__$1);
var G__47331 = cljs.core.chunk_rest(seq__47160_47329__$1);
var G__47332 = c__4609__auto___47330;
var G__47333 = cljs.core.count(c__4609__auto___47330);
var G__47334 = (0);
seq__47160_47318 = G__47331;
chunk__47161_47319 = G__47332;
count__47162_47320 = G__47333;
i__47163_47321 = G__47334;
continue;
} else {
var callback_47335 = cljs.core.first(seq__47160_47329__$1);
var G__47167_47336 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback_47335),tx_hash);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__47167_47336) : re_frame.core.dispatch.call(null,G__47167_47336));


var G__47337 = cljs.core.next(seq__47160_47329__$1);
var G__47338 = null;
var G__47339 = (0);
var G__47340 = (0);
seq__47160_47318 = G__47337;
chunk__47161_47319 = G__47338;
count__47162_47320 = G__47339;
i__47163_47321 = G__47340;
continue;
}
} else {
}
}
break;
}
} else {
}

var listener_id = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((9999999));
return district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),listener_id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475),new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560),new cljs.core.Keyword(null,"id","id",-1388402092)],[on_tx_error,tx_hash,web3,on_tx_success,on_tx_receipt_n,on_tx_receipt,on_tx_success_n,on_tx_error_n,listener_id]))], null));
}
});
});
var G__47168_47341 = new cljs.core.Keyword("web3","watch-events","web3/watch-events",-1449844963);
var G__47169_47342 = (function (p__47170){
var map__47171 = p__47170;
var map__47171__$1 = (((((!((map__47171 == null))))?(((((map__47171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47171):map__47171);
var params = map__47171__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47171__$1,new cljs.core.Keyword(null,"events","events",1792552201));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-events","district0x.re-frame.web3-fx/watch-events",-1055414721),params);
} else {
}
} else {
}

var seq__47173 = cljs.core.seq(events);
var chunk__47174 = null;
var count__47175 = (0);
var i__47176 = (0);
while(true){
if((i__47176 < count__47175)){
var map__47181 = chunk__47174.cljs$core$IIndexed$_nth$arity$2(null,i__47176);
var map__47181__$1 = (((((!((map__47181 == null))))?(((((map__47181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47181):map__47181);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47181__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47181__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47181__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var event_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47181__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47181__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47181__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47181__$1,new cljs.core.Keyword(null,"event","event",301435442));
district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),event_filter_opts,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),block_filter_opts,new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.contract_event_dispach_fn(on_success,on_error)], null));


var G__47343 = seq__47173;
var G__47344 = chunk__47174;
var G__47345 = count__47175;
var G__47346 = (i__47176 + (1));
seq__47173 = G__47343;
chunk__47174 = G__47344;
count__47175 = G__47345;
i__47176 = G__47346;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47173);
if(temp__5735__auto__){
var seq__47173__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47173__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47173__$1);
var G__47347 = cljs.core.chunk_rest(seq__47173__$1);
var G__47348 = c__4609__auto__;
var G__47349 = cljs.core.count(c__4609__auto__);
var G__47350 = (0);
seq__47173 = G__47347;
chunk__47174 = G__47348;
count__47175 = G__47349;
i__47176 = G__47350;
continue;
} else {
var map__47183 = cljs.core.first(seq__47173__$1);
var map__47183__$1 = (((((!((map__47183 == null))))?(((((map__47183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47183):map__47183);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var event_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183__$1,new cljs.core.Keyword(null,"event","event",301435442));
district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),event_filter_opts,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),block_filter_opts,new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.contract_event_dispach_fn(on_success,on_error)], null));


var G__47351 = cljs.core.next(seq__47173__$1);
var G__47352 = null;
var G__47353 = (0);
var G__47354 = (0);
seq__47173 = G__47351;
chunk__47174 = G__47352;
count__47175 = G__47353;
i__47176 = G__47354;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__47168_47341,G__47169_47342) : re_frame.core.reg_fx.call(null,G__47168_47341,G__47169_47342));
var G__47185_47355 = new cljs.core.Keyword("web3","watch-transactions","web3/watch-transactions",-1296047084);
var G__47186_47356 = (function (p__47187){
var map__47188 = p__47187;
var map__47188__$1 = (((((!((map__47188 == null))))?(((((map__47188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47188):map__47188);
var params = map__47188__$1;
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var transactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-transactions","district0x.re-frame.web3-fx/watch-transactions",-1867553294),params);
} else {
}
} else {
}

var seq__47190 = cljs.core.seq(transactions);
var chunk__47191 = null;
var count__47192 = (0);
var i__47193 = (0);
while(true){
if((i__47193 < count__47192)){
var map__47198 = chunk__47191.cljs$core$IIndexed$_nth$arity$2(null,i__47193);
var map__47198__$1 = (((((!((map__47198 == null))))?(((((map__47198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47198):map__47198);
var tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47198__$1,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47198__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47198__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47198__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47198__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var listener_id_47357 = (function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1((9999999));
}
})();
district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_47357,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_47357,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),on_tx_receipt,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),on_tx_success,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),on_tx_error,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,new cljs.core.Keyword(null,"web3","web3",-879451640),web3], null))], null));


var G__47358 = seq__47190;
var G__47359 = chunk__47191;
var G__47360 = count__47192;
var G__47361 = (i__47193 + (1));
seq__47190 = G__47358;
chunk__47191 = G__47359;
count__47192 = G__47360;
i__47193 = G__47361;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47190);
if(temp__5735__auto__){
var seq__47190__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47190__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47190__$1);
var G__47362 = cljs.core.chunk_rest(seq__47190__$1);
var G__47363 = c__4609__auto__;
var G__47364 = cljs.core.count(c__4609__auto__);
var G__47365 = (0);
seq__47190 = G__47362;
chunk__47191 = G__47363;
count__47192 = G__47364;
i__47193 = G__47365;
continue;
} else {
var map__47200 = cljs.core.first(seq__47190__$1);
var map__47200__$1 = (((((!((map__47200 == null))))?(((((map__47200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47200):map__47200);
var tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47200__$1,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47200__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47200__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47200__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47200__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var listener_id_47366 = (function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1((9999999));
}
})();
district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_47366,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_47366,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),on_tx_receipt,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),on_tx_success,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),on_tx_error,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,new cljs.core.Keyword(null,"web3","web3",-879451640),web3], null))], null));


var G__47367 = cljs.core.next(seq__47190__$1);
var G__47368 = null;
var G__47369 = (0);
var G__47370 = (0);
seq__47190 = G__47367;
chunk__47191 = G__47368;
count__47192 = G__47369;
i__47193 = G__47370;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__47185_47355,G__47186_47356) : re_frame.core.reg_fx.call(null,G__47185_47355,G__47186_47356));
var G__47202_47371 = new cljs.core.Keyword("web3","call","web3/call",-479653525);
var G__47203_47372 = (function (p__47204){
var map__47205 = p__47204;
var map__47205__$1 = (((((!((map__47205 == null))))?(((((map__47205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47205):map__47205);
var params = map__47205__$1;
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47205__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47205__$1,new cljs.core.Keyword(null,"fns","fns",1185138786));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","call","district0x.re-frame.web3-fx/call",-644577399),params);
} else {
}
} else {
}

var seq__47207 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,fns));
var chunk__47208 = null;
var count__47209 = (0);
var i__47210 = (0);
while(true){
if((i__47210 < count__47209)){
var map__47215 = chunk__47208.cljs$core$IIndexed$_nth$arity$2(null,i__47210);
var map__47215__$1 = (((((!((map__47215 == null))))?(((((map__47215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47215):map__47215);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var tx_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var on_tx_hash_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502));
var on_tx_hash_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var on_tx_hash_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_tx_success_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(instance)){
if(cljs.core.truth_(tx_opts)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_web3.eth.contract_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.contract_state_call_callback(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560)],[on_tx_error,on_tx_hash_error_n,on_tx_hash_error,web3,on_tx_hash_n,on_tx_success,on_tx_receipt_n,on_tx_receipt,on_tx_success_n,on_tx_hash,on_tx_error_n]))], null)], 0)));
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_web3.eth.contract_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null)], 0)));
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web3], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null)], 0)));
}


var G__47373 = seq__47207;
var G__47374 = chunk__47208;
var G__47375 = count__47209;
var G__47376 = (i__47210 + (1));
seq__47207 = G__47373;
chunk__47208 = G__47374;
count__47209 = G__47375;
i__47210 = G__47376;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47207);
if(temp__5735__auto__){
var seq__47207__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47207__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47207__$1);
var G__47377 = cljs.core.chunk_rest(seq__47207__$1);
var G__47378 = c__4609__auto__;
var G__47379 = cljs.core.count(c__4609__auto__);
var G__47380 = (0);
seq__47207 = G__47377;
chunk__47208 = G__47378;
count__47209 = G__47379;
i__47210 = G__47380;
continue;
} else {
var map__47217 = cljs.core.first(seq__47207__$1);
var map__47217__$1 = (((((!((map__47217 == null))))?(((((map__47217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47217):map__47217);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var tx_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var on_tx_hash_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502));
var on_tx_hash_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var on_tx_hash_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_tx_success_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47217__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(instance)){
if(cljs.core.truth_(tx_opts)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_web3.eth.contract_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.contract_state_call_callback(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560)],[on_tx_error,on_tx_hash_error_n,on_tx_hash_error,web3,on_tx_hash_n,on_tx_success,on_tx_receipt_n,on_tx_receipt,on_tx_success_n,on_tx_hash,on_tx_error_n]))], null)], 0)));
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_web3.eth.contract_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null)], 0)));
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web3], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null)], 0)));
}


var G__47381 = cljs.core.next(seq__47207__$1);
var G__47382 = null;
var G__47383 = (0);
var G__47384 = (0);
seq__47207 = G__47381;
chunk__47208 = G__47382;
count__47209 = G__47383;
i__47210 = G__47384;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__47202_47371,G__47203_47372) : re_frame.core.reg_fx.call(null,G__47202_47371,G__47203_47372));
var G__47219_47385 = new cljs.core.Keyword("web3","get-balances","web3/get-balances",-152059131);
var G__47220_47386 = (function (p__47221){
var map__47222 = p__47221;
var map__47222__$1 = (((((!((map__47222 == null))))?(((((map__47222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47222):map__47222);
var params = map__47222__$1;
var addresses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47222__$1,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47222__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","get-balances","district0x.re-frame.web3-fx/get-balances",1560627875),params);
} else {
}
} else {
}

var seq__47224 = cljs.core.seq(addresses);
var chunk__47225 = null;
var count__47226 = (0);
var i__47227 = (0);
while(true){
if((i__47227 < count__47226)){
var map__47232 = chunk__47225.cljs$core$IIndexed$_nth$arity$2(null,i__47227);
var map__47232__$1 = (((((!((map__47232 == null))))?(((((map__47232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47232):map__47232);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47232__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47232__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47232__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var watch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47232__$1,new cljs.core.Keyword(null,"watch?","watch?",-1976903168));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47232__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.not(instance)){
cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
} else {
cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
}

if(cljs.core.truth_((function (){var and__4174__auto__ = watch_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.seq(addresses);
} else {
return and__4174__auto__;
}
})())){
if(cljs.core.not(instance)){
district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__47224,chunk__47225,count__47226,i__47227,map__47232,map__47232__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__47222,map__47222__$1,params,addresses,web3,G__47219_47385){
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
}
});})(seq__47224,chunk__47225,count__47226,i__47227,map__47232,map__47232__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__47222,map__47222__$1,params,addresses,web3,G__47219_47385))
], null));
} else {
district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__47224,chunk__47225,count__47226,i__47227,map__47232,map__47232__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__47222,map__47222__$1,params,addresses,web3,G__47219_47385){
return (function (){
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
});})(seq__47224,chunk__47225,count__47226,i__47227,map__47232,map__47232__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__47222,map__47222__$1,params,addresses,web3,G__47219_47385))
], null));

district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__47224,chunk__47225,count__47226,i__47227,map__47232,map__47232__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__47222,map__47222__$1,params,addresses,web3,G__47219_47385){
return (function (){
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
});})(seq__47224,chunk__47225,count__47226,i__47227,map__47232,map__47232__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__47222,map__47222__$1,params,addresses,web3,G__47219_47385))
], null));
}
} else {
}


var G__47387 = seq__47224;
var G__47388 = chunk__47225;
var G__47389 = count__47226;
var G__47390 = (i__47227 + (1));
seq__47224 = G__47387;
chunk__47225 = G__47388;
count__47226 = G__47389;
i__47227 = G__47390;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47224);
if(temp__5735__auto__){
var seq__47224__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47224__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47224__$1);
var G__47391 = cljs.core.chunk_rest(seq__47224__$1);
var G__47392 = c__4609__auto__;
var G__47393 = cljs.core.count(c__4609__auto__);
var G__47394 = (0);
seq__47224 = G__47391;
chunk__47225 = G__47392;
count__47226 = G__47393;
i__47227 = G__47394;
continue;
} else {
var map__47234 = cljs.core.first(seq__47224__$1);
var map__47234__$1 = (((((!((map__47234 == null))))?(((((map__47234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47234):map__47234);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47234__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47234__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47234__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var watch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47234__$1,new cljs.core.Keyword(null,"watch?","watch?",-1976903168));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47234__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47234__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.not(instance)){
cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
} else {
cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
}

if(cljs.core.truth_((function (){var and__4174__auto__ = watch_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.seq(addresses);
} else {
return and__4174__auto__;
}
})())){
if(cljs.core.not(instance)){
district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__47224,chunk__47225,count__47226,i__47227,map__47234,map__47234__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__47224__$1,temp__5735__auto__,map__47222,map__47222__$1,params,addresses,web3,G__47219_47385){
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
}
});})(seq__47224,chunk__47225,count__47226,i__47227,map__47234,map__47234__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__47224__$1,temp__5735__auto__,map__47222,map__47222__$1,params,addresses,web3,G__47219_47385))
], null));
} else {
district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__47224,chunk__47225,count__47226,i__47227,map__47234,map__47234__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__47224__$1,temp__5735__auto__,map__47222,map__47222__$1,params,addresses,web3,G__47219_47385){
return (function (){
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
});})(seq__47224,chunk__47225,count__47226,i__47227,map__47234,map__47234__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__47224__$1,temp__5735__auto__,map__47222,map__47222__$1,params,addresses,web3,G__47219_47385))
], null));

district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__47224,chunk__47225,count__47226,i__47227,map__47234,map__47234__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__47224__$1,temp__5735__auto__,map__47222,map__47222__$1,params,addresses,web3,G__47219_47385){
return (function (){
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
});})(seq__47224,chunk__47225,count__47226,i__47227,map__47234,map__47234__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__47224__$1,temp__5735__auto__,map__47222,map__47222__$1,params,addresses,web3,G__47219_47385))
], null));
}
} else {
}


var G__47395 = cljs.core.next(seq__47224__$1);
var G__47396 = null;
var G__47397 = (0);
var G__47398 = (0);
seq__47224 = G__47395;
chunk__47225 = G__47396;
count__47226 = G__47397;
i__47227 = G__47398;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__47219_47385,G__47220_47386) : re_frame.core.reg_fx.call(null,G__47219_47385,G__47220_47386));
var G__47236_47399 = new cljs.core.Keyword("web3","watch-blocks","web3/watch-blocks",98499474);
var G__47237_47400 = (function (p__47238){
var map__47239 = p__47238;
var map__47239__$1 = (((((!((map__47239 == null))))?(((((map__47239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47239):map__47239);
var config = map__47239__$1;
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47239__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47239__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47239__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47239__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47239__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","listen","district0x.re-frame.web3-fx/listen",-1948149550),config);
} else {
}
} else {
}

return district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),block_filter_opts,new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__47236_47399,G__47237_47400) : re_frame.core.reg_fx.call(null,G__47236_47399,G__47237_47400));
var G__47241_47401 = new cljs.core.Keyword("web3","stop-watching","web3/stop-watching",-1379727666);
var G__47242_47402 = (function (p__47243){
var map__47244 = p__47243;
var map__47244__$1 = (((((!((map__47244 == null))))?(((((map__47244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47244):map__47244);
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47244__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var seq__47246 = cljs.core.seq(ids);
var chunk__47247 = null;
var count__47248 = (0);
var i__47249 = (0);
while(true){
if((i__47249 < count__47248)){
var id = chunk__47247.cljs$core$IIndexed$_nth$arity$2(null,i__47249);
district0x.re_frame.web3_fx.stop_listener_BANG_(id);


var G__47403 = seq__47246;
var G__47404 = chunk__47247;
var G__47405 = count__47248;
var G__47406 = (i__47249 + (1));
seq__47246 = G__47403;
chunk__47247 = G__47404;
count__47248 = G__47405;
i__47249 = G__47406;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47246);
if(temp__5735__auto__){
var seq__47246__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47246__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47246__$1);
var G__47407 = cljs.core.chunk_rest(seq__47246__$1);
var G__47408 = c__4609__auto__;
var G__47409 = cljs.core.count(c__4609__auto__);
var G__47410 = (0);
seq__47246 = G__47407;
chunk__47247 = G__47408;
count__47248 = G__47409;
i__47249 = G__47410;
continue;
} else {
var id = cljs.core.first(seq__47246__$1);
district0x.re_frame.web3_fx.stop_listener_BANG_(id);


var G__47411 = cljs.core.next(seq__47246__$1);
var G__47412 = null;
var G__47413 = (0);
var G__47414 = (0);
seq__47246 = G__47411;
chunk__47247 = G__47412;
count__47248 = G__47413;
i__47249 = G__47414;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__47241_47401,G__47242_47402) : re_frame.core.reg_fx.call(null,G__47241_47401,G__47242_47402));
var G__47250_47415 = new cljs.core.Keyword("web3","stop-watching-all","web3/stop-watching-all",-2047858581);
var G__47251_47416 = (function (){
var seq__47252 = cljs.core.seq(cljs.core.keys(cljs.core.deref(district0x.re_frame.web3_fx._STAR_listeners_STAR_)));
var chunk__47253 = null;
var count__47254 = (0);
var i__47255 = (0);
while(true){
if((i__47255 < count__47254)){
var id = chunk__47253.cljs$core$IIndexed$_nth$arity$2(null,i__47255);
district0x.re_frame.web3_fx.stop_listener_BANG_(id);


var G__47417 = seq__47252;
var G__47418 = chunk__47253;
var G__47419 = count__47254;
var G__47420 = (i__47255 + (1));
seq__47252 = G__47417;
chunk__47253 = G__47418;
count__47254 = G__47419;
i__47255 = G__47420;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47252);
if(temp__5735__auto__){
var seq__47252__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47252__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47252__$1);
var G__47421 = cljs.core.chunk_rest(seq__47252__$1);
var G__47422 = c__4609__auto__;
var G__47423 = cljs.core.count(c__4609__auto__);
var G__47424 = (0);
seq__47252 = G__47421;
chunk__47253 = G__47422;
count__47254 = G__47423;
i__47255 = G__47424;
continue;
} else {
var id = cljs.core.first(seq__47252__$1);
district0x.re_frame.web3_fx.stop_listener_BANG_(id);


var G__47425 = cljs.core.next(seq__47252__$1);
var G__47426 = null;
var G__47427 = (0);
var G__47428 = (0);
seq__47252 = G__47425;
chunk__47253 = G__47426;
count__47254 = G__47427;
i__47255 = G__47428;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__47250_47415,G__47251_47416) : re_frame.core.reg_fx.call(null,G__47250_47415,G__47251_47416));

//# sourceMappingURL=district0x.re_frame.web3_fx.js.map
