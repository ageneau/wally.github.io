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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__42635_SHARP_){
return ((cljs.core.fn_QMARK_(p1__42635_SHARP_)) || ((p1__42635_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__42635_SHARP_ === 'string'));
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421),new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__42636){
return cljs.core.coll_QMARK_(G__42636);
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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hashes","district0x.re-frame.web3-fx/tx-hashes",89248703),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__42637){
return cljs.core.coll_QMARK_(G__42637);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null)))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__42639){
return cljs.core.map_QMARK_(G__42639);
})], null),(function (G__42639){
return cljs.core.map_QMARK_(G__42639);
}),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__42638){
return cljs.core.coll_QMARK_(G__42638);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null))))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","call","district0x.re-frame.web3-fx/call",-644577399),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__42640){
return cljs.core.map_QMARK_(G__42640);
}),(function (G__42640){
return cljs.core.contains_QMARK_(G__42640,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (G__42640){
return cljs.core.contains_QMARK_(G__42640,new cljs.core.Keyword(null,"fns","fns",1185138786));
})], null),(function (G__42640){
return ((cljs.core.map_QMARK_(G__42640)) && (cljs.core.contains_QMARK_(G__42640,new cljs.core.Keyword(null,"web3","web3",-879451640))) && (cljs.core.contains_QMARK_(G__42640,new cljs.core.Keyword(null,"fns","fns",1185138786))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"fns","fns",1185138786)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"fns","fns",1185138786)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null)))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__42642){
return cljs.core.map_QMARK_(G__42642);
}),(function (G__42642){
return cljs.core.contains_QMARK_(G__42642,new cljs.core.Keyword(null,"instance","instance",-2121349050));
}),(function (G__42642){
return cljs.core.contains_QMARK_(G__42642,new cljs.core.Keyword(null,"event","event",301435442));
})], null),(function (G__42642){
return ((cljs.core.map_QMARK_(G__42642)) && (cljs.core.contains_QMARK_(G__42642,new cljs.core.Keyword(null,"instance","instance",-2121349050))) && (cljs.core.contains_QMARK_(G__42642,new cljs.core.Keyword(null,"event","event",301435442))));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"event","event",301435442)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"instance","instance",-2121349050))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"event","event",301435442)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__42641){
return cljs.core.coll_QMARK_(G__42641);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null))))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-events","district0x.re-frame.web3-fx/watch-events",-1055414721),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__42643){
return cljs.core.map_QMARK_(G__42643);
}),(function (G__42643){
return cljs.core.contains_QMARK_(G__42643,new cljs.core.Keyword(null,"events","events",1792552201));
})], null),(function (G__42643){
return ((cljs.core.map_QMARK_(G__42643)) && (cljs.core.contains_QMARK_(G__42643,new cljs.core.Keyword(null,"events","events",1792552201))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"events","events",1792552201)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__42645){
return cljs.core.map_QMARK_(G__42645);
}),(function (G__42645){
return cljs.core.contains_QMARK_(G__42645,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
})], null),(function (G__42645){
return ((cljs.core.map_QMARK_(G__42645)) && (cljs.core.contains_QMARK_(G__42645,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200))));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__42644){
return cljs.core.coll_QMARK_(G__42644);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-transactions","district0x.re-frame.web3-fx/watch-transactions",-1867553294),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__42646){
return cljs.core.map_QMARK_(G__42646);
}),(function (G__42646){
return cljs.core.contains_QMARK_(G__42646,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (G__42646){
return cljs.core.contains_QMARK_(G__42646,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
})], null),(function (G__42646){
return ((cljs.core.map_QMARK_(G__42646)) && (cljs.core.contains_QMARK_(G__42646,new cljs.core.Keyword(null,"web3","web3",-879451640))) && (cljs.core.contains_QMARK_(G__42646,new cljs.core.Keyword(null,"transactions","transactions",-1425846118))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"transactions","transactions",-1425846118)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"transactions","transactions",-1425846118)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__42648){
return cljs.core.map_QMARK_(G__42648);
}),(function (G__42648){
return cljs.core.contains_QMARK_(G__42648,new cljs.core.Keyword(null,"address","address",559499426));
}),(function (G__42648){
return cljs.core.contains_QMARK_(G__42648,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
})], null),(function (G__42648){
return ((cljs.core.map_QMARK_(G__42648)) && (cljs.core.contains_QMARK_(G__42648,new cljs.core.Keyword(null,"address","address",559499426))) && (cljs.core.contains_QMARK_(G__42648,new cljs.core.Keyword(null,"on-success","on-success",1786904109))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"watch?","watch?",-1976903168),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"address","address",559499426))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__42647){
return cljs.core.coll_QMARK_(G__42647);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","get-balances","district0x.re-frame.web3-fx/get-balances",1560627875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__42649){
return cljs.core.map_QMARK_(G__42649);
}),(function (G__42649){
return cljs.core.contains_QMARK_(G__42649,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
}),(function (G__42649){
return cljs.core.contains_QMARK_(G__42649,new cljs.core.Keyword(null,"web3","web3",-879451640));
})], null),(function (G__42649){
return ((cljs.core.map_QMARK_(G__42649)) && (cljs.core.contains_QMARK_(G__42649,new cljs.core.Keyword(null,"addresses","addresses",-559529694))) && (cljs.core.contains_QMARK_(G__42649,new cljs.core.Keyword(null,"web3","web3",-879451640))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"web3","web3",-879451640)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"addresses","addresses",-559529694))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","listen","district0x.re-frame.web3-fx/listen",-1948149550),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__42650){
return cljs.core.map_QMARK_(G__42650);
}),(function (G__42650){
return cljs.core.contains_QMARK_(G__42650,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
}),(function (G__42650){
return cljs.core.contains_QMARK_(G__42650,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
}),(function (G__42650){
return cljs.core.contains_QMARK_(G__42650,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (G__42650){
return cljs.core.contains_QMARK_(G__42650,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
})], null),(function (G__42650){
return ((cljs.core.map_QMARK_(G__42650)) && (cljs.core.contains_QMARK_(G__42650,new cljs.core.Keyword(null,"on-success","on-success",1786904109))) && (cljs.core.contains_QMARK_(G__42650,new cljs.core.Keyword(null,"on-error","on-error",1728533530))) && (cljs.core.contains_QMARK_(G__42650,new cljs.core.Keyword(null,"web3","web3",-879451640))) && (cljs.core.contains_QMARK_(G__42650,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-error","on-error",1728533530))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672)))], null),null])));
district0x.re_frame.web3_fx.dispach_fn = (function district0x$re_frame$web3_fx$dispach_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42804 = arguments.length;
var i__4790__auto___42805 = (0);
while(true){
if((i__4790__auto___42805 < len__4789__auto___42804)){
args__4795__auto__.push((arguments[i__4790__auto___42805]));

var G__42806 = (i__4790__auto___42805 + (1));
i__4790__auto___42805 = G__42806;
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
var G__42654 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(on_error,cljs.core.cons(err,args)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42654) : re_frame.core.dispatch.call(null,G__42654));
} else {
var G__42655 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(on_success,cljs.core.cons(res,args)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42655) : re_frame.core.dispatch.call(null,G__42655));
}
});
}));

(district0x.re_frame.web3_fx.dispach_fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(district0x.re_frame.web3_fx.dispach_fn.cljs$lang$applyTo = (function (seq42651){
var G__42652 = cljs.core.first(seq42651);
var seq42651__$1 = cljs.core.next(seq42651);
var G__42653 = cljs.core.first(seq42651__$1);
var seq42651__$2 = cljs.core.next(seq42651__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42652,G__42653,seq42651__$2);
}));

district0x.re_frame.web3_fx.contract_event_dispach_fn = (function district0x$re_frame$web3_fx$contract_event_dispach_fn(on_success,on_error){
return (function (err,res){
if(cljs.core.truth_(err)){
var G__42656 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(on_error,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err], null)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42656) : re_frame.core.dispatch.call(null,G__42656));
} else {
var G__42657 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(on_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(res),res], null)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42657) : re_frame.core.dispatch.call(null,G__42657));
}
});
});
district0x.re_frame.web3_fx.stop_listener_BANG_ = (function district0x$re_frame$web3_fx$stop_listener_BANG_(id){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(district0x.re_frame.web3_fx._STAR_listeners_STAR_),id);
if(cljs.core.truth_(temp__5735__auto__)){
var filters = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(district0x.re_frame.web3_fx._STAR_listeners_STAR_,cljs.core.dissoc,id);

var seq__42658 = cljs.core.seq(filters);
var chunk__42659 = null;
var count__42660 = (0);
var i__42661 = (0);
while(true){
if((i__42661 < count__42660)){
var filter = chunk__42659.cljs$core$IIndexed$_nth$arity$2(null,i__42661);
cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic(filter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__42658,chunk__42659,count__42660,i__42661,filter,filters,temp__5735__auto__){
return (function (){
return null;
});})(seq__42658,chunk__42659,count__42660,i__42661,filter,filters,temp__5735__auto__))
], 0));


var G__42807 = seq__42658;
var G__42808 = chunk__42659;
var G__42809 = count__42660;
var G__42810 = (i__42661 + (1));
seq__42658 = G__42807;
chunk__42659 = G__42808;
count__42660 = G__42809;
i__42661 = G__42810;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__42658);
if(temp__5735__auto____$1){
var seq__42658__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42658__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42658__$1);
var G__42811 = cljs.core.chunk_rest(seq__42658__$1);
var G__42812 = c__4609__auto__;
var G__42813 = cljs.core.count(c__4609__auto__);
var G__42814 = (0);
seq__42658 = G__42811;
chunk__42659 = G__42812;
count__42660 = G__42813;
i__42661 = G__42814;
continue;
} else {
var filter = cljs.core.first(seq__42658__$1);
cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic(filter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__42658,chunk__42659,count__42660,i__42661,filter,seq__42658__$1,temp__5735__auto____$1,filters,temp__5735__auto__){
return (function (){
return null;
});})(seq__42658,chunk__42659,count__42660,i__42661,filter,seq__42658__$1,temp__5735__auto____$1,filters,temp__5735__auto__))
], 0));


var G__42815 = cljs.core.next(seq__42658__$1);
var G__42816 = null;
var G__42817 = (0);
var G__42818 = (0);
seq__42658 = G__42815;
chunk__42659 = G__42816;
count__42660 = G__42817;
i__42661 = G__42818;
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
district0x.re_frame.web3_fx.start_listener_BANG_ = (function district0x$re_frame$web3_fx$start_listener_BANG_(p__42662){
var map__42663 = p__42662;
var map__42663__$1 = (((((!((map__42663 == null))))?(((((map__42663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42663):map__42663);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var id__$1 = (cljs.core.truth_(id)?id:callback);
district0x.re_frame.web3_fx.stop_listener_BANG_(id__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(district0x.re_frame.web3_fx._STAR_listeners_STAR_,cljs.core.update,id__$1,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_filter_opts,callback], 0))], 0));

return id__$1;
});
district0x.re_frame.web3_fx.start_event_listener_BANG_ = (function district0x$re_frame$web3_fx$start_event_listener_BANG_(p__42665){
var map__42666 = p__42665;
var map__42666__$1 = (((((!((map__42666 == null))))?(((((map__42666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42666):map__42666);
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42666__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42666__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42666__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42666__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42666__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42666__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var id__$1 = (cljs.core.truth_(id)?id:callback);
district0x.re_frame.web3_fx.stop_listener_BANG_(id__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(district0x.re_frame.web3_fx._STAR_listeners_STAR_,cljs.core.update,id__$1,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_filter_opts,block_filter_opts,callback], 0))], 0));

return id__$1;
});
district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn = (function district0x$re_frame$web3_fx$dispatch_on_tx_receipt_fn(p__42670){
var map__42671 = p__42670;
var map__42671__$1 = (((((!((map__42671 == null))))?(((((map__42671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42671):map__42671);
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42671__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42671__$1,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42671__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42671__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42671__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42671__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42671__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var on_tx_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42671__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42671__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
return cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx_hash,(function (_,receipt){
if(cljs.core.truth_(new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(receipt))){
district0x.re_frame.web3_fx.stop_listener_BANG_(id);

if(cljs.core.truth_(on_tx_receipt)){
var G__42673_42819 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_receipt),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42673_42819) : re_frame.core.dispatch.call(null,G__42673_42819));
} else {
}

var pred__42674 = (function (p1__42668_SHARP_,p2__42669_SHARP_){
return cljs.core.contains_QMARK_(p1__42668_SHARP_,p2__42669_SHARP_);
});
var expr__42675 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(receipt);
if(pred__42674(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,"0x00",null,"0x0",null], null), null),expr__42675)){
if(cljs.core.truth_(on_tx_error)){
var G__42677_42820 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_error),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42677_42820) : re_frame.core.dispatch.call(null,G__42677_42820));
} else {
}

if(cljs.core.truth_(on_tx_error_n)){
var seq__42678 = cljs.core.seq(on_tx_error_n);
var chunk__42679 = null;
var count__42680 = (0);
var i__42681 = (0);
while(true){
if((i__42681 < count__42680)){
var callback = chunk__42679.cljs$core$IIndexed$_nth$arity$2(null,i__42681);
var G__42684_42821 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42684_42821) : re_frame.core.dispatch.call(null,G__42684_42821));


var G__42822 = seq__42678;
var G__42823 = chunk__42679;
var G__42824 = count__42680;
var G__42825 = (i__42681 + (1));
seq__42678 = G__42822;
chunk__42679 = G__42823;
count__42680 = G__42824;
i__42681 = G__42825;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42678);
if(temp__5735__auto__){
var seq__42678__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42678__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42678__$1);
var G__42826 = cljs.core.chunk_rest(seq__42678__$1);
var G__42827 = c__4609__auto__;
var G__42828 = cljs.core.count(c__4609__auto__);
var G__42829 = (0);
seq__42678 = G__42826;
chunk__42679 = G__42827;
count__42680 = G__42828;
i__42681 = G__42829;
continue;
} else {
var callback = cljs.core.first(seq__42678__$1);
var G__42685_42830 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42685_42830) : re_frame.core.dispatch.call(null,G__42685_42830));


var G__42831 = cljs.core.next(seq__42678__$1);
var G__42832 = null;
var G__42833 = (0);
var G__42834 = (0);
seq__42678 = G__42831;
chunk__42679 = G__42832;
count__42680 = G__42833;
i__42681 = G__42834;
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
if(pred__42674(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,"0x1",null,"0x01",null], null), null),expr__42675)){
if(cljs.core.truth_(on_tx_success)){
var G__42686_42835 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_success),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42686_42835) : re_frame.core.dispatch.call(null,G__42686_42835));
} else {
}

if(cljs.core.truth_(on_tx_success_n)){
var seq__42687 = cljs.core.seq(on_tx_success_n);
var chunk__42688 = null;
var count__42689 = (0);
var i__42690 = (0);
while(true){
if((i__42690 < count__42689)){
var callback = chunk__42688.cljs$core$IIndexed$_nth$arity$2(null,i__42690);
var G__42693_42836 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42693_42836) : re_frame.core.dispatch.call(null,G__42693_42836));


var G__42837 = seq__42687;
var G__42838 = chunk__42688;
var G__42839 = count__42689;
var G__42840 = (i__42690 + (1));
seq__42687 = G__42837;
chunk__42688 = G__42838;
count__42689 = G__42839;
i__42690 = G__42840;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42687);
if(temp__5735__auto__){
var seq__42687__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42687__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42687__$1);
var G__42841 = cljs.core.chunk_rest(seq__42687__$1);
var G__42842 = c__4609__auto__;
var G__42843 = cljs.core.count(c__4609__auto__);
var G__42844 = (0);
seq__42687 = G__42841;
chunk__42688 = G__42842;
count__42689 = G__42843;
i__42690 = G__42844;
continue;
} else {
var callback = cljs.core.first(seq__42687__$1);
var G__42694_42845 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42694_42845) : re_frame.core.dispatch.call(null,G__42694_42845));


var G__42846 = cljs.core.next(seq__42687__$1);
var G__42847 = null;
var G__42848 = (0);
var G__42849 = (0);
seq__42687 = G__42846;
chunk__42688 = G__42847;
count__42689 = G__42848;
i__42690 = G__42849;
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42675)].join('')));
}
}
} else {
return null;
}
})], 0));
}
});
});
district0x.re_frame.web3_fx.contract_state_call_callback = (function district0x$re_frame$web3_fx$contract_state_call_callback(p__42695){
var map__42696 = p__42695;
var map__42696__$1 = (((((!((map__42696 == null))))?(((((map__42696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42696):map__42696);
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var on_tx_hash_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502));
var on_tx_hash_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var on_tx_hash_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42696__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
return (function (err,tx_hash){
if(cljs.core.truth_(err)){
if(cljs.core.truth_(on_tx_hash_error)){
var G__42698_42850 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_hash_error),err);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42698_42850) : re_frame.core.dispatch.call(null,G__42698_42850));
} else {
}

if(cljs.core.truth_(on_tx_hash_error_n)){
var seq__42699 = cljs.core.seq(on_tx_hash_error_n);
var chunk__42700 = null;
var count__42701 = (0);
var i__42702 = (0);
while(true){
if((i__42702 < count__42701)){
var callback = chunk__42700.cljs$core$IIndexed$_nth$arity$2(null,i__42702);
var G__42705_42851 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),err);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42705_42851) : re_frame.core.dispatch.call(null,G__42705_42851));


var G__42852 = seq__42699;
var G__42853 = chunk__42700;
var G__42854 = count__42701;
var G__42855 = (i__42702 + (1));
seq__42699 = G__42852;
chunk__42700 = G__42853;
count__42701 = G__42854;
i__42702 = G__42855;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42699);
if(temp__5735__auto__){
var seq__42699__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42699__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42699__$1);
var G__42856 = cljs.core.chunk_rest(seq__42699__$1);
var G__42857 = c__4609__auto__;
var G__42858 = cljs.core.count(c__4609__auto__);
var G__42859 = (0);
seq__42699 = G__42856;
chunk__42700 = G__42857;
count__42701 = G__42858;
i__42702 = G__42859;
continue;
} else {
var callback = cljs.core.first(seq__42699__$1);
var G__42706_42860 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),err);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42706_42860) : re_frame.core.dispatch.call(null,G__42706_42860));


var G__42861 = cljs.core.next(seq__42699__$1);
var G__42862 = null;
var G__42863 = (0);
var G__42864 = (0);
seq__42699 = G__42861;
chunk__42700 = G__42862;
count__42701 = G__42863;
i__42702 = G__42864;
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
var G__42707_42865 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_hash),tx_hash);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42707_42865) : re_frame.core.dispatch.call(null,G__42707_42865));
} else {
}

if(cljs.core.truth_(on_tx_hash_n)){
var seq__42708_42866 = cljs.core.seq(on_tx_hash_n);
var chunk__42709_42867 = null;
var count__42710_42868 = (0);
var i__42711_42869 = (0);
while(true){
if((i__42711_42869 < count__42710_42868)){
var callback_42870 = chunk__42709_42867.cljs$core$IIndexed$_nth$arity$2(null,i__42711_42869);
var G__42714_42871 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback_42870),tx_hash);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42714_42871) : re_frame.core.dispatch.call(null,G__42714_42871));


var G__42872 = seq__42708_42866;
var G__42873 = chunk__42709_42867;
var G__42874 = count__42710_42868;
var G__42875 = (i__42711_42869 + (1));
seq__42708_42866 = G__42872;
chunk__42709_42867 = G__42873;
count__42710_42868 = G__42874;
i__42711_42869 = G__42875;
continue;
} else {
var temp__5735__auto___42876 = cljs.core.seq(seq__42708_42866);
if(temp__5735__auto___42876){
var seq__42708_42877__$1 = temp__5735__auto___42876;
if(cljs.core.chunked_seq_QMARK_(seq__42708_42877__$1)){
var c__4609__auto___42878 = cljs.core.chunk_first(seq__42708_42877__$1);
var G__42879 = cljs.core.chunk_rest(seq__42708_42877__$1);
var G__42880 = c__4609__auto___42878;
var G__42881 = cljs.core.count(c__4609__auto___42878);
var G__42882 = (0);
seq__42708_42866 = G__42879;
chunk__42709_42867 = G__42880;
count__42710_42868 = G__42881;
i__42711_42869 = G__42882;
continue;
} else {
var callback_42883 = cljs.core.first(seq__42708_42877__$1);
var G__42715_42884 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback_42883),tx_hash);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42715_42884) : re_frame.core.dispatch.call(null,G__42715_42884));


var G__42885 = cljs.core.next(seq__42708_42877__$1);
var G__42886 = null;
var G__42887 = (0);
var G__42888 = (0);
seq__42708_42866 = G__42885;
chunk__42709_42867 = G__42886;
count__42710_42868 = G__42887;
i__42711_42869 = G__42888;
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
var G__42716_42889 = new cljs.core.Keyword("web3","watch-events","web3/watch-events",-1449844963);
var G__42717_42890 = (function (p__42718){
var map__42719 = p__42718;
var map__42719__$1 = (((((!((map__42719 == null))))?(((((map__42719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42719):map__42719);
var params = map__42719__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42719__$1,new cljs.core.Keyword(null,"events","events",1792552201));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-events","district0x.re-frame.web3-fx/watch-events",-1055414721),params);
} else {
}
} else {
}

var seq__42721 = cljs.core.seq(events);
var chunk__42722 = null;
var count__42723 = (0);
var i__42724 = (0);
while(true){
if((i__42724 < count__42723)){
var map__42729 = chunk__42722.cljs$core$IIndexed$_nth$arity$2(null,i__42724);
var map__42729__$1 = (((((!((map__42729 == null))))?(((((map__42729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42729):map__42729);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42729__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42729__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42729__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var event_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42729__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42729__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42729__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42729__$1,new cljs.core.Keyword(null,"event","event",301435442));
district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),event_filter_opts,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),block_filter_opts,new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.contract_event_dispach_fn(on_success,on_error)], null));


var G__42891 = seq__42721;
var G__42892 = chunk__42722;
var G__42893 = count__42723;
var G__42894 = (i__42724 + (1));
seq__42721 = G__42891;
chunk__42722 = G__42892;
count__42723 = G__42893;
i__42724 = G__42894;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42721);
if(temp__5735__auto__){
var seq__42721__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42721__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42721__$1);
var G__42895 = cljs.core.chunk_rest(seq__42721__$1);
var G__42896 = c__4609__auto__;
var G__42897 = cljs.core.count(c__4609__auto__);
var G__42898 = (0);
seq__42721 = G__42895;
chunk__42722 = G__42896;
count__42723 = G__42897;
i__42724 = G__42898;
continue;
} else {
var map__42731 = cljs.core.first(seq__42721__$1);
var map__42731__$1 = (((((!((map__42731 == null))))?(((((map__42731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42731):map__42731);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42731__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42731__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42731__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var event_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42731__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42731__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42731__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42731__$1,new cljs.core.Keyword(null,"event","event",301435442));
district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),event_filter_opts,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),block_filter_opts,new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.contract_event_dispach_fn(on_success,on_error)], null));


var G__42899 = cljs.core.next(seq__42721__$1);
var G__42900 = null;
var G__42901 = (0);
var G__42902 = (0);
seq__42721 = G__42899;
chunk__42722 = G__42900;
count__42723 = G__42901;
i__42724 = G__42902;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42716_42889,G__42717_42890) : re_frame.core.reg_fx.call(null,G__42716_42889,G__42717_42890));
var G__42733_42903 = new cljs.core.Keyword("web3","watch-transactions","web3/watch-transactions",-1296047084);
var G__42734_42904 = (function (p__42735){
var map__42736 = p__42735;
var map__42736__$1 = (((((!((map__42736 == null))))?(((((map__42736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42736):map__42736);
var params = map__42736__$1;
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42736__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var transactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42736__$1,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-transactions","district0x.re-frame.web3-fx/watch-transactions",-1867553294),params);
} else {
}
} else {
}

var seq__42738 = cljs.core.seq(transactions);
var chunk__42739 = null;
var count__42740 = (0);
var i__42741 = (0);
while(true){
if((i__42741 < count__42740)){
var map__42746 = chunk__42739.cljs$core$IIndexed$_nth$arity$2(null,i__42741);
var map__42746__$1 = (((((!((map__42746 == null))))?(((((map__42746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42746):map__42746);
var tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42746__$1,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42746__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42746__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42746__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42746__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var listener_id_42905 = (function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1((9999999));
}
})();
district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_42905,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_42905,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),on_tx_receipt,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),on_tx_success,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),on_tx_error,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,new cljs.core.Keyword(null,"web3","web3",-879451640),web3], null))], null));


var G__42906 = seq__42738;
var G__42907 = chunk__42739;
var G__42908 = count__42740;
var G__42909 = (i__42741 + (1));
seq__42738 = G__42906;
chunk__42739 = G__42907;
count__42740 = G__42908;
i__42741 = G__42909;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42738);
if(temp__5735__auto__){
var seq__42738__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42738__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42738__$1);
var G__42910 = cljs.core.chunk_rest(seq__42738__$1);
var G__42911 = c__4609__auto__;
var G__42912 = cljs.core.count(c__4609__auto__);
var G__42913 = (0);
seq__42738 = G__42910;
chunk__42739 = G__42911;
count__42740 = G__42912;
i__42741 = G__42913;
continue;
} else {
var map__42748 = cljs.core.first(seq__42738__$1);
var map__42748__$1 = (((((!((map__42748 == null))))?(((((map__42748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42748):map__42748);
var tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var listener_id_42914 = (function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1((9999999));
}
})();
district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_42914,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_42914,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),on_tx_receipt,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),on_tx_success,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),on_tx_error,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,new cljs.core.Keyword(null,"web3","web3",-879451640),web3], null))], null));


var G__42915 = cljs.core.next(seq__42738__$1);
var G__42916 = null;
var G__42917 = (0);
var G__42918 = (0);
seq__42738 = G__42915;
chunk__42739 = G__42916;
count__42740 = G__42917;
i__42741 = G__42918;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42733_42903,G__42734_42904) : re_frame.core.reg_fx.call(null,G__42733_42903,G__42734_42904));
var G__42750_42919 = new cljs.core.Keyword("web3","call","web3/call",-479653525);
var G__42751_42920 = (function (p__42752){
var map__42753 = p__42752;
var map__42753__$1 = (((((!((map__42753 == null))))?(((((map__42753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42753):map__42753);
var params = map__42753__$1;
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42753__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42753__$1,new cljs.core.Keyword(null,"fns","fns",1185138786));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","call","district0x.re-frame.web3-fx/call",-644577399),params);
} else {
}
} else {
}

var seq__42755 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,fns));
var chunk__42756 = null;
var count__42757 = (0);
var i__42758 = (0);
while(true){
if((i__42758 < count__42757)){
var map__42763 = chunk__42756.cljs$core$IIndexed$_nth$arity$2(null,i__42758);
var map__42763__$1 = (((((!((map__42763 == null))))?(((((map__42763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42763):map__42763);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var tx_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var on_tx_hash_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502));
var on_tx_hash_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var on_tx_hash_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_tx_success_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(instance)){
if(cljs.core.truth_(tx_opts)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_web3.eth.contract_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.contract_state_call_callback(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560)],[on_tx_error,on_tx_hash_error_n,on_tx_hash_error,web3,on_tx_hash_n,on_tx_success,on_tx_receipt_n,on_tx_receipt,on_tx_success_n,on_tx_hash,on_tx_error_n]))], null)], 0)));
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_web3.eth.contract_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null)], 0)));
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web3], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null)], 0)));
}


var G__42921 = seq__42755;
var G__42922 = chunk__42756;
var G__42923 = count__42757;
var G__42924 = (i__42758 + (1));
seq__42755 = G__42921;
chunk__42756 = G__42922;
count__42757 = G__42923;
i__42758 = G__42924;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42755);
if(temp__5735__auto__){
var seq__42755__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42755__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42755__$1);
var G__42925 = cljs.core.chunk_rest(seq__42755__$1);
var G__42926 = c__4609__auto__;
var G__42927 = cljs.core.count(c__4609__auto__);
var G__42928 = (0);
seq__42755 = G__42925;
chunk__42756 = G__42926;
count__42757 = G__42927;
i__42758 = G__42928;
continue;
} else {
var map__42765 = cljs.core.first(seq__42755__$1);
var map__42765__$1 = (((((!((map__42765 == null))))?(((((map__42765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42765):map__42765);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var tx_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var on_tx_hash_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502));
var on_tx_hash_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var on_tx_hash_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_tx_success_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(instance)){
if(cljs.core.truth_(tx_opts)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_web3.eth.contract_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.contract_state_call_callback(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560)],[on_tx_error,on_tx_hash_error_n,on_tx_hash_error,web3,on_tx_hash_n,on_tx_success,on_tx_receipt_n,on_tx_receipt,on_tx_success_n,on_tx_hash,on_tx_error_n]))], null)], 0)));
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_web3.eth.contract_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null)], 0)));
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web3], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null)], 0)));
}


var G__42929 = cljs.core.next(seq__42755__$1);
var G__42930 = null;
var G__42931 = (0);
var G__42932 = (0);
seq__42755 = G__42929;
chunk__42756 = G__42930;
count__42757 = G__42931;
i__42758 = G__42932;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42750_42919,G__42751_42920) : re_frame.core.reg_fx.call(null,G__42750_42919,G__42751_42920));
var G__42767_42933 = new cljs.core.Keyword("web3","get-balances","web3/get-balances",-152059131);
var G__42768_42934 = (function (p__42769){
var map__42770 = p__42769;
var map__42770__$1 = (((((!((map__42770 == null))))?(((((map__42770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42770):map__42770);
var params = map__42770__$1;
var addresses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42770__$1,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42770__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","get-balances","district0x.re-frame.web3-fx/get-balances",1560627875),params);
} else {
}
} else {
}

var seq__42772 = cljs.core.seq(addresses);
var chunk__42773 = null;
var count__42774 = (0);
var i__42775 = (0);
while(true){
if((i__42775 < count__42774)){
var map__42780 = chunk__42773.cljs$core$IIndexed$_nth$arity$2(null,i__42775);
var map__42780__$1 = (((((!((map__42780 == null))))?(((((map__42780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42780):map__42780);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42780__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42780__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42780__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var watch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42780__$1,new cljs.core.Keyword(null,"watch?","watch?",-1976903168));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42780__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42780__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__42772,chunk__42773,count__42774,i__42775,map__42780,map__42780__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__42770,map__42770__$1,params,addresses,web3,G__42767_42933){
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
}
});})(seq__42772,chunk__42773,count__42774,i__42775,map__42780,map__42780__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__42770,map__42770__$1,params,addresses,web3,G__42767_42933))
], null));
} else {
district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__42772,chunk__42773,count__42774,i__42775,map__42780,map__42780__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__42770,map__42770__$1,params,addresses,web3,G__42767_42933){
return (function (){
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
});})(seq__42772,chunk__42773,count__42774,i__42775,map__42780,map__42780__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__42770,map__42770__$1,params,addresses,web3,G__42767_42933))
], null));

district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__42772,chunk__42773,count__42774,i__42775,map__42780,map__42780__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__42770,map__42770__$1,params,addresses,web3,G__42767_42933){
return (function (){
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
});})(seq__42772,chunk__42773,count__42774,i__42775,map__42780,map__42780__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__42770,map__42770__$1,params,addresses,web3,G__42767_42933))
], null));
}
} else {
}


var G__42935 = seq__42772;
var G__42936 = chunk__42773;
var G__42937 = count__42774;
var G__42938 = (i__42775 + (1));
seq__42772 = G__42935;
chunk__42773 = G__42936;
count__42774 = G__42937;
i__42775 = G__42938;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42772);
if(temp__5735__auto__){
var seq__42772__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42772__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42772__$1);
var G__42939 = cljs.core.chunk_rest(seq__42772__$1);
var G__42940 = c__4609__auto__;
var G__42941 = cljs.core.count(c__4609__auto__);
var G__42942 = (0);
seq__42772 = G__42939;
chunk__42773 = G__42940;
count__42774 = G__42941;
i__42775 = G__42942;
continue;
} else {
var map__42782 = cljs.core.first(seq__42772__$1);
var map__42782__$1 = (((((!((map__42782 == null))))?(((((map__42782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42782):map__42782);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42782__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42782__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42782__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var watch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42782__$1,new cljs.core.Keyword(null,"watch?","watch?",-1976903168));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42782__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42782__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__42772,chunk__42773,count__42774,i__42775,map__42782,map__42782__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__42772__$1,temp__5735__auto__,map__42770,map__42770__$1,params,addresses,web3,G__42767_42933){
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
}
});})(seq__42772,chunk__42773,count__42774,i__42775,map__42782,map__42782__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__42772__$1,temp__5735__auto__,map__42770,map__42770__$1,params,addresses,web3,G__42767_42933))
], null));
} else {
district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__42772,chunk__42773,count__42774,i__42775,map__42782,map__42782__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__42772__$1,temp__5735__auto__,map__42770,map__42770__$1,params,addresses,web3,G__42767_42933){
return (function (){
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
});})(seq__42772,chunk__42773,count__42774,i__42775,map__42782,map__42782__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__42772__$1,temp__5735__auto__,map__42770,map__42770__$1,params,addresses,web3,G__42767_42933))
], null));

district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__42772,chunk__42773,count__42774,i__42775,map__42782,map__42782__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__42772__$1,temp__5735__auto__,map__42770,map__42770__$1,params,addresses,web3,G__42767_42933){
return (function (){
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
});})(seq__42772,chunk__42773,count__42774,i__42775,map__42782,map__42782__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__42772__$1,temp__5735__auto__,map__42770,map__42770__$1,params,addresses,web3,G__42767_42933))
], null));
}
} else {
}


var G__42943 = cljs.core.next(seq__42772__$1);
var G__42944 = null;
var G__42945 = (0);
var G__42946 = (0);
seq__42772 = G__42943;
chunk__42773 = G__42944;
count__42774 = G__42945;
i__42775 = G__42946;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42767_42933,G__42768_42934) : re_frame.core.reg_fx.call(null,G__42767_42933,G__42768_42934));
var G__42784_42947 = new cljs.core.Keyword("web3","watch-blocks","web3/watch-blocks",98499474);
var G__42785_42948 = (function (p__42786){
var map__42787 = p__42786;
var map__42787__$1 = (((((!((map__42787 == null))))?(((((map__42787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42787):map__42787);
var config = map__42787__$1;
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42787__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42787__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42787__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42787__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42787__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","listen","district0x.re-frame.web3-fx/listen",-1948149550),config);
} else {
}
} else {
}

return district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),block_filter_opts,new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42784_42947,G__42785_42948) : re_frame.core.reg_fx.call(null,G__42784_42947,G__42785_42948));
var G__42789_42949 = new cljs.core.Keyword("web3","stop-watching","web3/stop-watching",-1379727666);
var G__42790_42950 = (function (p__42791){
var map__42792 = p__42791;
var map__42792__$1 = (((((!((map__42792 == null))))?(((((map__42792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42792):map__42792);
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42792__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var seq__42794 = cljs.core.seq(ids);
var chunk__42795 = null;
var count__42796 = (0);
var i__42797 = (0);
while(true){
if((i__42797 < count__42796)){
var id = chunk__42795.cljs$core$IIndexed$_nth$arity$2(null,i__42797);
district0x.re_frame.web3_fx.stop_listener_BANG_(id);


var G__42951 = seq__42794;
var G__42952 = chunk__42795;
var G__42953 = count__42796;
var G__42954 = (i__42797 + (1));
seq__42794 = G__42951;
chunk__42795 = G__42952;
count__42796 = G__42953;
i__42797 = G__42954;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42794);
if(temp__5735__auto__){
var seq__42794__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42794__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42794__$1);
var G__42955 = cljs.core.chunk_rest(seq__42794__$1);
var G__42956 = c__4609__auto__;
var G__42957 = cljs.core.count(c__4609__auto__);
var G__42958 = (0);
seq__42794 = G__42955;
chunk__42795 = G__42956;
count__42796 = G__42957;
i__42797 = G__42958;
continue;
} else {
var id = cljs.core.first(seq__42794__$1);
district0x.re_frame.web3_fx.stop_listener_BANG_(id);


var G__42959 = cljs.core.next(seq__42794__$1);
var G__42960 = null;
var G__42961 = (0);
var G__42962 = (0);
seq__42794 = G__42959;
chunk__42795 = G__42960;
count__42796 = G__42961;
i__42797 = G__42962;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42789_42949,G__42790_42950) : re_frame.core.reg_fx.call(null,G__42789_42949,G__42790_42950));
var G__42798_42963 = new cljs.core.Keyword("web3","stop-watching-all","web3/stop-watching-all",-2047858581);
var G__42799_42964 = (function (){
var seq__42800 = cljs.core.seq(cljs.core.keys(cljs.core.deref(district0x.re_frame.web3_fx._STAR_listeners_STAR_)));
var chunk__42801 = null;
var count__42802 = (0);
var i__42803 = (0);
while(true){
if((i__42803 < count__42802)){
var id = chunk__42801.cljs$core$IIndexed$_nth$arity$2(null,i__42803);
district0x.re_frame.web3_fx.stop_listener_BANG_(id);


var G__42965 = seq__42800;
var G__42966 = chunk__42801;
var G__42967 = count__42802;
var G__42968 = (i__42803 + (1));
seq__42800 = G__42965;
chunk__42801 = G__42966;
count__42802 = G__42967;
i__42803 = G__42968;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42800);
if(temp__5735__auto__){
var seq__42800__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42800__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42800__$1);
var G__42969 = cljs.core.chunk_rest(seq__42800__$1);
var G__42970 = c__4609__auto__;
var G__42971 = cljs.core.count(c__4609__auto__);
var G__42972 = (0);
seq__42800 = G__42969;
chunk__42801 = G__42970;
count__42802 = G__42971;
i__42803 = G__42972;
continue;
} else {
var id = cljs.core.first(seq__42800__$1);
district0x.re_frame.web3_fx.stop_listener_BANG_(id);


var G__42973 = cljs.core.next(seq__42800__$1);
var G__42974 = null;
var G__42975 = (0);
var G__42976 = (0);
seq__42800 = G__42973;
chunk__42801 = G__42974;
count__42802 = G__42975;
i__42803 = G__42976;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42798_42963,G__42799_42964) : re_frame.core.reg_fx.call(null,G__42798_42963,G__42799_42964));

//# sourceMappingURL=district0x.re_frame.web3_fx.js.map
