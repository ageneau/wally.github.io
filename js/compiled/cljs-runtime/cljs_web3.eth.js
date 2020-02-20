goog.provide('cljs_web3.eth');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
/**
 * Gets eth object from web3-instance.
 * 
 *   Parameter:
 *   web3 - web3 instance
 */
cljs_web3.eth.eth = (function cljs_web3$eth$eth(web3){
return (web3["eth"]);
});
/**
 * Gets compile object from web3-instance.
 * 
 *   Parameter:
 *   web3 - web3 instance
 */
cljs_web3.eth.get_compile = (function cljs_web3$eth$get_compile(web3){
return (cljs_web3.eth.eth(web3)["compile"]);
});
/**
 * Gets the default address that is used for the following methods (optionally
 *   you can overwrite it by specifying the :from key in their options map):
 * 
 *   - `send-transaction!`
 *   - `call!`
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns the default address HEX string.
 * 
 *   Example:
 *   user> `(default-account web3-instance)`
 *   "0x85d85715218895ae964a750d9a92f13a8951de3d"
 */
cljs_web3.eth.default_account = (function cljs_web3$eth$default_account(web3){
return (web3["eth"]["defaultAccount"]);
});
/**
 * Sets the default address that is used for the following methods (optionally
 *   you can overwrite it by specifying the :from key in their options map):
 * 
 *   - `send-transaction!`
 *   - `call!`
 * 
 *   Parameters:
 *   web3    - web3 instance
 *   hex-str - Any 20 bytes address you own, or where you have the private key for
 * 
 * 
 *   Returns a 20 bytes HEX string representing the currently set address.
 * 
 *   Example:
 *   user> (set-default-account! web3-instance
 *                            "0x85d85715218895ae964a750d9a92f13a8951de3d")
 *   "0x85d85715218895ae964a750d9a92f13a8951de3d"
 */
cljs_web3.eth.set_default_account_BANG_ = (function cljs_web3$eth$set_default_account_BANG_(web3,hex_str){
return (cljs_web3.eth.eth(web3)["defaultAccount"] = hex_str);
});
/**
 * This default block is used for the following methods (optionally you can
 *   override it by passing the default-block parameter):
 * 
 *   - `get-balance`
 *   - `get-code`
 *   - `get-transactionCount`
 *   - `get-storageAt`
 *   - `call`
 *   - `contract-call`
 *   - `estimate-gas`
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns one of:
 *   - a block number
 *   - "earliest", the genisis block
 *   - "latest", the latest block (current head of the blockchain)
 *   - "pending", the currently mined block (including pending transactions)
 * 
 *   Example:
 *   user> `(default-block web3-instance)`
 *   "latest"
 */
cljs_web3.eth.default_block = (function cljs_web3$eth$default_block(web3){
return (web3["eth"]["defaultBlock"]);
});
/**
 * Sets default block that is used for the following methods (optionally you can
 *   override it by passing the default-block parameter):
 * 
 *   - `get-balance`
 *   - `get-code`
 *   - `get-transactionCount`
 *   - `get-storageAt`
 *   - `call`
 *   - `contract-call`
 *   - `estimate-gas`
 * 
 *   Parameters:
 *   web3  - web3 instance
 *   block - one of:
 *          - a block number
 *          - "earliest", the genisis block
 *          - "latest", the latest block (current head of the blockchain)
 *          - "pending", the currently mined block (including pending
 *            transactions)
 * 
 *   Example:
 *   user> `(set-default-block! web3-instance "earliest")`
 *   "earliest"
 */
cljs_web3.eth.set_default_block_BANG_ = (function cljs_web3$eth$set_default_block_BANG_(web3,block){
return (cljs_web3.eth.eth(web3)["defaultBlock"] = block);
});
/**
 * This property is read only and returns the either a sync object, when the
 *   node is syncing or false.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Returns a sync object as follows, when the node is currently syncing or false:
 *   - startingBlock: The block number where the sync started.
 *   - currentBlock:  The block number where at which block the node currently
 *                 synced to already.
 *   - highestBlock:  The estimated block number to sync to.
 * 
 *   Example:
 *   user> `(syncing web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> `false`
 */
cljs_web3.eth.syncing = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","syncing"], 0));
/**
 * This convenience function calls the callback everytime a sync starts, updates
 *   and stops.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns an isSyncing object with the following methods:
 *   - `.addCallback`  Adds another callback, which will be called when the node
 *                  starts or stops syncing.
 *   - `.stopWatching` Stops the syncing callbacks
 * 
 *   Callback return value:
 * 
 *  The callback will be fired with true when the syncing starts and with false
 *  when it stopped.
 * 
 *  While syncing it will return the syncing object:
 *  - startingBlock: The block number where the sync started.
 *  - currentBlock:  The block number where at which block the node currently
 *                   synced to already.
 *  - highestBlock:  The estimated block number to sync to
 * 
 *   Example:
 *   user> `(.addCallback (web3-eth/syncing? web3-instance) (fn [err res] ...))`
 *   #object[s [object Object]]
 */
cljs_web3.eth.syncing_QMARK_ = (function cljs_web3$eth$syncing_QMARK_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47277 = arguments.length;
var i__4790__auto___47278 = (0);
while(true){
if((i__4790__auto___47278 < len__4789__auto___47277)){
args__4795__auto__.push((arguments[i__4790__auto___47278]));

var G__47279 = (i__4790__auto___47278 + (1));
i__4790__auto___47278 = G__47279;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.syncing_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.syncing_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"isSyncing",args);
}));

(cljs_web3.eth.syncing_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.syncing_QMARK_.cljs$lang$applyTo = (function (seq47119){
var G__47120 = cljs.core.first(seq47119);
var seq47119__$1 = cljs.core.next(seq47119);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47120,seq47119__$1);
}));

/**
 * This property is read only and returns the coinbase address where the mining
 *   rewards go to.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns a string representing the coinbase address of the client.
 * 
 *   Example:
 *   user> `(coinbase web3-instance)`
 *   "0x85d85715218895ae964a750d9a92f13a8951de3d"
 */
cljs_web3.eth.coinbase = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","coinbase"], 0));
/**
 * This property is read only and says whether the node is mining or not.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns a boolean: true if the client is mining, otherwise false.
 * 
 *   Example:
 *   `(mining? web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> `false`
 */
cljs_web3.eth.mining_QMARK_ = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","mining"], 0));
/**
 * This property is read only and returns the number of hashes per second that
 *   the node is mining with.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns a number representing the hashes per second.
 * 
 *   user> `(hashrate web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 0
 *   
 */
cljs_web3.eth.hashrate = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","hashrate"], 0));
/**
 * This property is read only and returns the current gas price. The gas price
 *   is determined by the x latest blocks median gas price.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Returns a BigNumber instance of the current gas price in wei.
 * 
 *   Example:
 *   user> `(gas-price web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> #object[e 90000000000]
 */
cljs_web3.eth.gas_price = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","gasPrice"], 0));
/**
 * This property is read only and returns a list of accounts the node controls.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Returns an array of addresses controlled by client.
 * 
 *   Example:
 *   user> `(accounts web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> `[0x85d85715218895ae964a750d9a92f13a8951de3d]`
 */
cljs_web3.eth.accounts = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","accounts"], 0));
/**
 * This property is read only and returns the current block number.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Returns the number of the most recent block.
 * 
 *   Example:
 *   `(block-number web3-instance
 *               (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> `1783426`
 */
cljs_web3.eth.block_number = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","blockNumber"], 0));
/**
 * (Not Implemented yet) Registers the given address to be included in
 *   `accounts`. This allows non-private-key owned accounts to be associated
 *   as an owned account (e.g., contract wallets).
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   address     - string representing the address
 *   callback-fn - callback with two parameters, error and result.
 */
cljs_web3.eth.register = (function cljs_web3$eth$register(web3,address){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"register",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [address], null));
});
/**
 * (Not Implemented yet) Unregisters a given address.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   address     - string representing the address
 *   callback-fn - callback with two parameters, error and result.
 */
cljs_web3.eth.unregister = (function cljs_web3$eth$unregister(web3,address){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"unRegister",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [address], null));
});
/**
 * Get the balance of an address at a given block.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to get the balance of.
 *   default-block - If you pass this parameter it will not use the default block
 *                set with set-default-block.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns a BigNumber instance of the current balance for the given address in
 *   wei.
 * 
 *   Example:
 *   user> `(get-balance web3-instance
 *                    "0x85d85715218895ae964a750d9a92f13a8951de3d"
 *                    "latest"
 *                    (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> #object[e 1729597111000000000]
 */
cljs_web3.eth.get_balance = (function cljs_web3$eth$get_balance(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47281 = arguments.length;
var i__4790__auto___47282 = (0);
while(true){
if((i__4790__auto___47282 < len__4789__auto___47281)){
args__4795__auto__.push((arguments[i__4790__auto___47282]));

var G__47283 = (i__4790__auto___47282 + (1));
i__4790__auto___47282 = G__47283;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47126){
var vec__47127 = p__47126;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47127,(0),null);
var default_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47127,(1),null);
var args = vec__47127;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getBalance",args);
}));

(cljs_web3.eth.get_balance.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_balance.cljs$lang$applyTo = (function (seq47124){
var G__47125 = cljs.core.first(seq47124);
var seq47124__$1 = cljs.core.next(seq47124);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47125,seq47124__$1);
}));

/**
 * Get the storage at a specific position of an address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to get the storage from.
 *   position      - The index position of the storage.
 *   default-block - If you pass this parameter it will not use the default block
 *                set with web3.eth.defaultBlock.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the value in storage at the given position.
 * 
 *   Example:
 *   user> `(get-storage-at web3-instance
 *                       "0x85d85715218895ae964a750d9a92f13a8951de3d"
 *                       0
 *                       "latest"
 *                       (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> "0x0000000000000000000000000000000000000000000000000000000000000000" 
 */
cljs_web3.eth.get_storage_at = (function cljs_web3$eth$get_storage_at(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47285 = arguments.length;
var i__4790__auto___47286 = (0);
while(true){
if((i__4790__auto___47286 < len__4789__auto___47285)){
args__4795__auto__.push((arguments[i__4790__auto___47286]));

var G__47287 = (i__4790__auto___47286 + (1));
i__4790__auto___47286 = G__47287;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_storage_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_storage_at.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47132){
var vec__47133 = p__47132;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47133,(0),null);
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47133,(1),null);
var default_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47133,(2),null);
var args = vec__47133;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getStorageAt",args);
}));

(cljs_web3.eth.get_storage_at.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_storage_at.cljs$lang$applyTo = (function (seq47130){
var G__47131 = cljs.core.first(seq47130);
var seq47130__$1 = cljs.core.next(seq47130);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47131,seq47130__$1);
}));

/**
 * Get the code at a specific address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to get the code from.
 *   default-block - If you pass this parameter it will not use the default block set
 *                with `get-default-block!`.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the data at given address HEX string.
 * 
 *   Example:
 *   user> (get-code web3-instance
 *                "0x85d85715218895ae964a750d9a92f13a8951de3d
 *                0
 *                "latest"
 *                (fn [err res] (when-not err (println res))))
 *   nil
 *   user> `0x`
 *   
 */
cljs_web3.eth.get_code = (function cljs_web3$eth$get_code(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47289 = arguments.length;
var i__4790__auto___47290 = (0);
while(true){
if((i__4790__auto___47290 < len__4789__auto___47289)){
args__4795__auto__.push((arguments[i__4790__auto___47290]));

var G__47291 = (i__4790__auto___47290 + (1));
i__4790__auto___47290 = G__47291;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_code.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47138){
var vec__47139 = p__47138;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47139,(0),null);
var default_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47139,(1),null);
var args = vec__47139;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getCode",args);
}));

(cljs_web3.eth.get_code.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_code.cljs$lang$applyTo = (function (seq47136){
var G__47137 = cljs.core.first(seq47136);
var seq47136__$1 = cljs.core.next(seq47136);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47137,seq47136__$1);
}));

/**
 * Returns a block matching the block number or block hash.
 * 
 *   Parameters:
 *   web3                        - web3 instance
 * 
 *   block-hash-or-number        - The block number or hash. Or the string
 *                              "earliest", "latest" or "pending"
 *                              as in the default block parameter.
 * 
 *   return-transaction-objects? - If true, the returned block will contain all
 *                              transactions as objects, if false it will
 *                              only contains the transaction hashes.
 *   callback-fn                 - callback with two parameters, error and result
 * 
 *   Returns the block object:
 * 
 *   - number: Number - the block number. null when its pending block.
 *   - hash: String, 32 Bytes - hash of the block. null when its pending block.
 *   - parent-hash: String, 32 Bytes - hash of the parent block.
 *   - nonce: String, 8 Bytes - hash of the generated proof-of-work. null when its
 *                           pending block.
 *   - sha3-uncles: String, 32 Bytes - SHA3 of the uncles data in the block.
 *   - logs-bloom: String, 256 Bytes - the bloom filter for the logs of the block.
 *                                 null when its pending block.
 *   - transactions-root: String, 32 Bytes - the root of the transaction trie of the
 *                                        block
 *   - state-root: String, 32 Bytes - the root of the final state trie of the block.
 *   - miner: String, 20 Bytes - the address of the beneficiary to whom the mining
 *                            rewards were given.
 *   - difficulty: BigNumber - integer of the difficulty for this block.
 *   - total-difficulty: BigNumber - integer of the total difficulty of the chain
 *                                until this block.
 *   - extra- data: String - the "extra data" field of this block.
 *   - size: Number - integer the size of this block in bytes.
 *   - gas- limit: Number - the maximum gas allowed in this block.
 *   - gas-used: Number - the total used gas by all transactions in this block.
 *   - timestamp: Number - the unix timestamp for when the block was collated.
 *   - transactions: Array - Array of transaction objects, or 32 Bytes transaction
 *                        hashes depending on the last given parameter.
 *   - uncles: Array - Array of uncle hashes.
 * 
 *   Example:
 *   user> `(get-block web3-instance
 *                  0
 *                  false
 *                  (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> {:state-root 0x.., :hash 0x.., :number 0, :difficulty #object[e 1048576],
 *       ...}
 */
cljs_web3.eth.get_block = (function cljs_web3$eth$get_block(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47295 = arguments.length;
var i__4790__auto___47296 = (0);
while(true){
if((i__4790__auto___47296 < len__4789__auto___47295)){
args__4795__auto__.push((arguments[i__4790__auto___47296]));

var G__47297 = (i__4790__auto___47296 + (1));
i__4790__auto___47296 = G__47297;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_block.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47144){
var vec__47145 = p__47144;
var block_hash_or_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47145,(0),null);
var return_transaction_objects_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47145,(1),null);
var args = vec__47145;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getBlock",args);
}));

(cljs_web3.eth.get_block.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_block.cljs$lang$applyTo = (function (seq47142){
var G__47143 = cljs.core.first(seq47142);
var seq47142__$1 = cljs.core.next(seq47142);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47143,seq47142__$1);
}));

/**
 * Returns the number of transaction in a given block.
 * 
 *   Parameters
 *   web3                 - web3 instance
 *   block-hash-or-number - The block number or hash. Or the string "earliest",
 *                       "latest" or "pending" as in the default block
 *                       parameter.
 *   callback-fn          - callback with two parameters, error and result
 * 
 *   Example:
 *   user> `(get-block-transaction-count
 *         web3-instance
 *         0
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 0
 */
cljs_web3.eth.get_block_transaction_count = (function cljs_web3$eth$get_block_transaction_count(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47298 = arguments.length;
var i__4790__auto___47299 = (0);
while(true){
if((i__4790__auto___47299 < len__4789__auto___47298)){
args__4795__auto__.push((arguments[i__4790__auto___47299]));

var G__47300 = (i__4790__auto___47299 + (1));
i__4790__auto___47299 = G__47300;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_block_transaction_count.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_block_transaction_count.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47150){
var vec__47151 = p__47150;
var block_hash_or_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47151,(0),null);
var args = vec__47151;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getBlockTransactionCount",args);
}));

(cljs_web3.eth.get_block_transaction_count.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_block_transaction_count.cljs$lang$applyTo = (function (seq47148){
var G__47149 = cljs.core.first(seq47148);
var seq47148__$1 = cljs.core.next(seq47148);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47149,seq47148__$1);
}));

/**
 * Returns a blocks uncle by a given uncle index position.
 *   Parameters
 * 
 *   Parameters:
 *   web3                        - web3 instance
 *   block-hash-or-number        - The block number or hash. Or the string
 *                              "earliest", "latest" or "pending" as in
 *                              the default block parameter
 *   uncle-number                - The index position of the uncle
 *   return-transaction-objects? - If true, the returned block will contain all
 *                              transactions as objects, if false it will only
 *                              contains the transaction hashes
 *   default-block               - If you pass this parameter it will not use the
 *                              default block set with (set-default-block)
 *   callback-fn                 - callback with two parameters, error and result
 * 
 *   Returns the returned uncle. For a return value see `(get-block)`.
 * 
 *   Note: An uncle doesn't contain individual transactions.
 */
cljs_web3.eth.get_uncle = (function cljs_web3$eth$get_uncle(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47301 = arguments.length;
var i__4790__auto___47302 = (0);
while(true){
if((i__4790__auto___47302 < len__4789__auto___47301)){
args__4795__auto__.push((arguments[i__4790__auto___47302]));

var G__47303 = (i__4790__auto___47302 + (1));
i__4790__auto___47302 = G__47303;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_uncle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_uncle.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47156){
var vec__47157 = p__47156;
var block_hash_or_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47157,(0),null);
var uncle_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47157,(1),null);
var return_transaction_objects_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47157,(2),null);
var args = vec__47157;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getUncle",args);
}));

(cljs_web3.eth.get_uncle.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_uncle.cljs$lang$applyTo = (function (seq47154){
var G__47155 = cljs.core.first(seq47154);
var seq47154__$1 = cljs.core.next(seq47154);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47155,seq47154__$1);
}));

/**
 * Returns a transaction matching the given transaction hash.
 * 
 *   Parameters:
 *   web3             - web3 instance
 *   transaction-hash - The transaction hash.
 *   callback-fn      - callback with two parameters, error and result
 * 
 *   Returns a transaction object its hash transaction-hash:
 * 
 *   - hash: String, 32 Bytes - hash of the transaction.
 *   - nonce: Number - the number of transactions made by the sender prior to this
 *  one.
 *   - block-hash: String, 32 Bytes - hash of the block where this transaction was
 *                                 in. null when its pending.
 *   - block-number: Number - block number where this transaction was in. null when
 *                         its pending.
 *   - transaction-index: Number - integer of the transactions index position in the
 *                              block. null when its pending.
 *   - from: String, 20 Bytes - address of the sender.
 *   - to: String, 20 Bytes - address of the receiver. null when its a contract
 *                         creation transaction.
 *   - value: BigNumber - value transferred in Wei.
 *   - gas-price: BigNumber - gas price provided by the sender in Wei.
 *   - gas: Number - gas provided by the sender.
 *   - input: String - the data sent along with the transaction.
 * 
 *   Example:
 *   user> `(get-transaction
 *         web3-instance
 *         "0x..."
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> {:r 0x...
 *       :v 0x2a
 *       :hash 0xf...
 *       :transaction-index 3 ...
 *       (...)
 *       :to 0x...}
 */
cljs_web3.eth.get_transaction = (function cljs_web3$eth$get_transaction(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47304 = arguments.length;
var i__4790__auto___47305 = (0);
while(true){
if((i__4790__auto___47305 < len__4789__auto___47304)){
args__4795__auto__.push((arguments[i__4790__auto___47305]));

var G__47306 = (i__4790__auto___47305 + (1));
i__4790__auto___47305 = G__47306;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_transaction.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47162){
var vec__47163 = p__47162;
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47163,(0),null);
var args = vec__47163;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getTransaction",args);
}));

(cljs_web3.eth.get_transaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_transaction.cljs$lang$applyTo = (function (seq47160){
var G__47161 = cljs.core.first(seq47160);
var seq47160__$1 = cljs.core.next(seq47160);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47161,seq47160__$1);
}));

/**
 * Returns a transaction based on a block hash or number and the transactions
 *   index position.
 * 
 *   Parameters:
 *   web3                 - web3 instance
 *   block-hash-or-number - A block number or hash. Or the string "earliest",
 *                       "latest" or "pending" as in the default block
 *                       parameter.
 *   index                - The transactions index position.
 *   callback-fn          - callback with two parameters, error and result
 *   Number               - The transactions index position.
 * 
 *   Returns a transaction object, see `(get-transaction)`
 * 
 *   Example:
 *   user> `(get-transaction-from-block
 *         web3-instance
 *         1799402
 *         0
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> {:r 0x...
 *       :v 0x2a
 *       :hash 0xf...
 *       :transaction-index 0 ...
 *       (...)
 *       :to 0x...}
 */
cljs_web3.eth.get_transaction_from_block = (function cljs_web3$eth$get_transaction_from_block(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47307 = arguments.length;
var i__4790__auto___47308 = (0);
while(true){
if((i__4790__auto___47308 < len__4789__auto___47307)){
args__4795__auto__.push((arguments[i__4790__auto___47308]));

var G__47312 = (i__4790__auto___47308 + (1));
i__4790__auto___47308 = G__47312;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_from_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_transaction_from_block.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47168){
var vec__47169 = p__47168;
var block_hash_or_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47169,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47169,(1),null);
var args = vec__47169;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getTransactionFromBlock",args);
}));

(cljs_web3.eth.get_transaction_from_block.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_transaction_from_block.cljs$lang$applyTo = (function (seq47166){
var G__47167 = cljs.core.first(seq47166);
var seq47166__$1 = cljs.core.next(seq47166);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47167,seq47166__$1);
}));

/**
 * Returns the receipt of a transaction by transaction hash.
 * 
 *   Note That the receipt is not available for pending transactions.
 * 
 *   Parameters:
 *   web3              - web3 instance
 *   transaction-hash  - The transaction hash.
 *   callback-fn       - callback with two parameters, error and result
 * 
 *   Returns transaction receipt object, or null when no receipt was found:
 * 
 *   - blockHash: String, 32 Bytes - hash of the block where this transaction was
 *                                in.
 *   - blockNumber: Number - block number where this transaction was in.
 *   - transactionHash: String, 32 Bytes - hash of the transaction.
 *   - transactionIndex: Number - integer of the transactions index position in the
 *                             block.
 *   - from: String, 20 Bytes - address of the sender.
 *   - to: String, 20 Bytes - address of the receiver. null when its a contract
 *                         creation transaction.
 *   - cumulativeGasUsed: Number - The total amount of gas used when this
 *                              transaction was executed in the block.
 *   - gasUsed: Number - The amount of gas used by this specific transaction alone.
 *   - contractAddress: String - 20 Bytes - The contract address created, if the
 *                                       transaction was a contract creation,
 *                                       otherwise null.
 *   - logs: Array - Array of log objects, which this transaction generated.
 * 
 *   Example
 */
cljs_web3.eth.get_transaction_receipt = (function cljs_web3$eth$get_transaction_receipt(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47313 = arguments.length;
var i__4790__auto___47314 = (0);
while(true){
if((i__4790__auto___47314 < len__4789__auto___47313)){
args__4795__auto__.push((arguments[i__4790__auto___47314]));

var G__47315 = (i__4790__auto___47314 + (1));
i__4790__auto___47314 = G__47315;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47174){
var vec__47175 = p__47174;
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47175,(0),null);
var args = vec__47175;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getTransactionReceipt",args);
}));

(cljs_web3.eth.get_transaction_receipt.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_transaction_receipt.cljs$lang$applyTo = (function (seq47172){
var G__47173 = cljs.core.first(seq47172);
var seq47172__$1 = cljs.core.next(seq47172);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47173,seq47172__$1);
}));

/**
 * Get the numbers of transactions sent from this address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to get the numbers of transactions from.
 *   default-block - If you pass this parameter it will not use the default block
 *                set with set-default-block.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the number of transactions sent from the given address.
 * 
 *   Example:
 *   user> `(get-transaction-count web3-instance "0x8"
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 16
 */
cljs_web3.eth.get_transaction_count = (function cljs_web3$eth$get_transaction_count(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47316 = arguments.length;
var i__4790__auto___47317 = (0);
while(true){
if((i__4790__auto___47317 < len__4789__auto___47316)){
args__4795__auto__.push((arguments[i__4790__auto___47317]));

var G__47318 = (i__4790__auto___47317 + (1));
i__4790__auto___47317 = G__47318;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_count.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_transaction_count.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47180){
var vec__47181 = p__47180;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47181,(0),null);
var default_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47181,(1),null);
var args = vec__47181;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getTransactionCount",args);
}));

(cljs_web3.eth.get_transaction_count.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_transaction_count.cljs$lang$applyTo = (function (seq47178){
var G__47179 = cljs.core.first(seq47178);
var seq47178__$1 = cljs.core.next(seq47178);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47179,seq47178__$1);
}));

/**
 * Sends a transaction to the network.
 * 
 *   Parameters:
 *   web3               - web3 instance
 *   transaction-object - The transaction object to send:
 * 
 *  :from: String - The address for the sending account. Uses the
 *                  `default-account` property, if not specified.
 * 
 *  :to: String   - (optional) The destination address of the message, left
 *                             undefined for a contract-creation
 *                             transaction.
 * 
 *  :value        - (optional) The value transferred for the transaction in
 *                             Wei, also the endowment if it's a
 *                             contract-creation transaction.
 * 
 *  :gas:         - (optional, default: To-Be-Determined) The amount of gas
 *                  to use for the transaction (unused gas is refunded).
 *  :gas-price:   - (optional, default: To-Be-Determined) The price of gas
 *                  for this transaction in wei, defaults to the mean network
 *                  gas price.
 *  :data:        - (optional) Either a byte string containing the associated
 *                  data of the message, or in the case of a contract-creation
 *                  transaction, the initialisation code.
 *  :nonce:       - (optional) Integer of a nonce. This allows to overwrite your
 *                             own pending transactions that use the same nonce.
 *   callback-fn   - callback with two parameters, error and result, where result
 *                is the transaction hash
 * 
 *   Returns the 32 Bytes transaction hash as HEX string.
 * 
 *   If the transaction was a contract creation use `(get-transaction-receipt)` to
 *   get the contract address, after the transaction was mined.
 * 
 *   Example:
 *   user> (send-transaction! web3-instance {:to "0x.."}
 *        (fn [err res] (when-not err (println res))))
 *   nil
 *   user> 0x...
 */
cljs_web3.eth.send_transaction_BANG_ = (function cljs_web3$eth$send_transaction_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47319 = arguments.length;
var i__4790__auto___47320 = (0);
while(true){
if((i__4790__auto___47320 < len__4789__auto___47319)){
args__4795__auto__.push((arguments[i__4790__auto___47320]));

var G__47321 = (i__4790__auto___47320 + (1));
i__4790__auto___47320 = G__47321;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.send_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47186){
var vec__47187 = p__47186;
var transaction_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47187,(0),null);
var args = vec__47187;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"sendTransaction",args);
}));

(cljs_web3.eth.send_transaction_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.send_transaction_BANG_.cljs$lang$applyTo = (function (seq47184){
var G__47185 = cljs.core.first(seq47184);
var seq47184__$1 = cljs.core.next(seq47184);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47185,seq47184__$1);
}));

/**
 * Sends an already signed transaction. For example can be signed using:
 *   https://github.com/SilentCicero/ethereumjs-accounts
 * 
 *   Parameters:
 *   web3                    - web3 instance
 *   signed-transaction-data - Signed transaction data in HEX format
 * 
 *   callback-fn             - callback with two parameters, error and result
 * 
 *   Returns the 32 Bytes transaction hash as HEX string.
 * 
 *   If the transaction was a contract creation use `(get-transaction-receipt)`
 *   to get the contract address, after the transaction was mined.
 * 
 *   See https://github.com/ethereum/wiki/wiki/JavaScript-API#example-46 for a
 *   JavaScript example.
 */
cljs_web3.eth.send_raw_transaction_BANG_ = (function cljs_web3$eth$send_raw_transaction_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47322 = arguments.length;
var i__4790__auto___47323 = (0);
while(true){
if((i__4790__auto___47323 < len__4789__auto___47322)){
args__4795__auto__.push((arguments[i__4790__auto___47323]));

var G__47324 = (i__4790__auto___47323 + (1));
i__4790__auto___47323 = G__47324;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_raw_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.send_raw_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47192){
var vec__47193 = p__47192;
var signed_transaction_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47193,(0),null);
var args = vec__47193;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"sendRawTransaction",args);
}));

(cljs_web3.eth.send_raw_transaction_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.send_raw_transaction_BANG_.cljs$lang$applyTo = (function (seq47190){
var G__47191 = cljs.core.first(seq47190);
var seq47190__$1 = cljs.core.next(seq47190);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47191,seq47190__$1);
}));

/**
 * Sends IBAN transaction from user account to destination IBAN address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   from          - address from which we want to send transaction
 *   iban-address  - IBAN address to which we want to send transaction
 *   value         - value that we want to send in IBAN transaction
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Note: uses smart contract to transfer money to IBAN account.
 * 
 *   Example:
 *   user> `(send-iban-transaction! '0xx'
 *                               'NL88YADYA02'
 *                                0x100
 *                                (fn [err res] (prn res)))`
 */
cljs_web3.eth.send_iban_transaction_BANG_ = (function cljs_web3$eth$send_iban_transaction_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47326 = arguments.length;
var i__4790__auto___47328 = (0);
while(true){
if((i__4790__auto___47328 < len__4789__auto___47326)){
args__4795__auto__.push((arguments[i__4790__auto___47328]));

var G__47329 = (i__4790__auto___47328 + (1));
i__4790__auto___47328 = G__47329;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_iban_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.send_iban_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47198){
var vec__47199 = p__47198;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47199,(0),null);
var iban_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47199,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47199,(2),null);
var args = vec__47199;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"sendIBANTransaction",args);
}));

(cljs_web3.eth.send_iban_transaction_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.send_iban_transaction_BANG_.cljs$lang$applyTo = (function (seq47196){
var G__47197 = cljs.core.first(seq47196);
var seq47196__$1 = cljs.core.next(seq47196);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47197,seq47196__$1);
}));

/**
 * Signs data from a specific account. This account needs to be unlocked.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to sign with
 *   data-to-sign  - Data to sign
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the signed data.
 * 
 *   After the hex prefix, characters correspond to ECDSA values like this:
 * 
 *   r = signature[0:64]
 *   s = signature[64:128]
 *   v = signature[128:130]
 * 
 *   Note that if you are using ecrecover, v will be either "00" or "01". As a
 *   result, in order to use this value, you will have to parse it to an integer
 *   and then add 27. This will result in either a 27 or a 28.
 * 
 *   Example:
 *   user> `(sign web3-instance
 *             "0x135a7de83802408321b74c322f8558db1679ac20"
 *             "0x9dd2c369a187b4e6b9c402f030e50743e619301ea62aa4c0737d4ef7e10a3d49"
 *             (fn [err res] (when-not err (println res))))`
 * 
 *   user> 0x3...
 */
cljs_web3.eth.sign = (function cljs_web3$eth$sign(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47332 = arguments.length;
var i__4790__auto___47333 = (0);
while(true){
if((i__4790__auto___47333 < len__4789__auto___47332)){
args__4795__auto__.push((arguments[i__4790__auto___47333]));

var G__47334 = (i__4790__auto___47333 + (1));
i__4790__auto___47333 = G__47334;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.sign.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.sign.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47204){
var vec__47205 = p__47204;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47205,(0),null);
var data_to_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47205,(1),null);
var args = vec__47205;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"sign",args);
}));

(cljs_web3.eth.sign.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.sign.cljs$lang$applyTo = (function (seq47202){
var G__47203 = cljs.core.first(seq47202);
var seq47202__$1 = cljs.core.next(seq47202);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47203,seq47202__$1);
}));

/**
 * Sign a transaction. Method is not documented in the web3.js docs. Not sure if it is safe.
 * 
 *   Parameters:
 *   web3           - web3 instance
 *   sign-tx-params - Parameters of transaction
 *                 See `(send-transaction!)`
 *   private-key    - Private key to sign the transaction with
 *   callback-fn    - callback with two parameters, error and result
 * 
 *   Returns signed transaction data.
 */
cljs_web3.eth.sign_transaction = (function cljs_web3$eth$sign_transaction(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47336 = arguments.length;
var i__4790__auto___47337 = (0);
while(true){
if((i__4790__auto___47337 < len__4789__auto___47336)){
args__4795__auto__.push((arguments[i__4790__auto___47337]));

var G__47338 = (i__4790__auto___47337 + (1));
i__4790__auto___47337 = G__47338;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.sign_transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.sign_transaction.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47210){
var vec__47211 = p__47210;
var sign_tx_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(0),null);
var private_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(1),null);
var signed_tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(2),null);
var args = vec__47211;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"signTransaction",args);
}));

(cljs_web3.eth.sign_transaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.sign_transaction.cljs$lang$applyTo = (function (seq47208){
var G__47209 = cljs.core.first(seq47208);
var seq47208__$1 = cljs.core.next(seq47208);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47209,seq47208__$1);
}));

/**
 * Executes a message call transaction, which is directly executed in the VM of
 *   the node, but never mined into the blockchain.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   call-object   - A transaction object see web3.eth.sendTransaction, with the
 *                difference that for calls the from property is optional as
 *                well.
 *   default-block - If you pass this parameter it will not use the default block
 *                set with set-default-block.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the returned data of the call as string, e.g. a codes functions return
 *   value.
 * 
 *   Example:
 *   user> `(call! web3-instance {:to   "0x"
 *                             :data "0x"}
 *              (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 0x
 */
cljs_web3.eth.call_BANG_ = (function cljs_web3$eth$call_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47339 = arguments.length;
var i__4790__auto___47340 = (0);
while(true){
if((i__4790__auto___47340 < len__4789__auto___47339)){
args__4795__auto__.push((arguments[i__4790__auto___47340]));

var G__47341 = (i__4790__auto___47340 + (1));
i__4790__auto___47340 = G__47341;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.call_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.call_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47216){
var vec__47217 = p__47216;
var call_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47217,(0),null);
var default_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47217,(1),null);
var args = vec__47217;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"call",args);
}));

(cljs_web3.eth.call_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.call_BANG_.cljs$lang$applyTo = (function (seq47214){
var G__47215 = cljs.core.first(seq47214);
var seq47214__$1 = cljs.core.next(seq47214);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47215,seq47214__$1);
}));

/**
 * Executes a message call or transaction, which is directly executed in the VM
 *   of the node, but never mined into the blockchain and returns the amount of the
 *   gas used.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   call-object   - See `(send-transaction!)`, except that all properties are
 *                optional.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the used gas for the simulated call/transaction.
 * 
 *   Example:
 *   user> `(estimate-gas web3-instance
 *         {:to   "0x135a7de83802408321b74c322f8558db1679ac20",
 *          :data "0x135a7de83802408321b74c322f8558db1679ac20"}
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 22361
 */
cljs_web3.eth.estimate_gas = (function cljs_web3$eth$estimate_gas(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47344 = arguments.length;
var i__4790__auto___47345 = (0);
while(true){
if((i__4790__auto___47345 < len__4789__auto___47344)){
args__4795__auto__.push((arguments[i__4790__auto___47345]));

var G__47346 = (i__4790__auto___47345 + (1));
i__4790__auto___47345 = G__47346;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.estimate_gas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.estimate_gas.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47222){
var vec__47223 = p__47222;
var call_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47223,(0),null);
var args = vec__47223;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"estimateGas",args);
}));

(cljs_web3.eth.estimate_gas.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.estimate_gas.cljs$lang$applyTo = (function (seq47220){
var G__47221 = cljs.core.first(seq47220);
var seq47220__$1 = cljs.core.next(seq47220);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47221,seq47220__$1);
}));

/**
 * Parameters:
 *   web3          - web3 instance
 *   block-or-transaction  - The string "latest" or "pending" to watch
 *                        for changes in the latest block or pending
 *                        transactions respectively. Or a filter options
 *                        object as follows:
 * 
 *  from-block: Number|String - The number of the earliest block (latest may be
 *                              given to mean the most recent and pending
 *                              currently mining, block). By default
 *                             latest.
 *  to-block: Number|String   - The number of the latest block (latest may be
 *                              given to mean the most recent and pending
 *                              currently mining, block). By default latest.
 * 
 *  address: String           - An address or a list of addresses to only get
 *                              logs from particular account(s).
 * 
 *  :topics: Array of Strings - An array of values which must each appear in the
 *                              log entries. The order is important, if you want
 *                              to leave topics out use null, e.g.
 *                              `[null, '0x00...']`. You can also pass another array
 *                              for each topic with options for that topic e.g.
 *                              `[null, ['option1', 'option2']]`
 * 
 *   Returns a filter object with the following methods:
 * 
 *  `(.get filter callback-fn)`:   Returns all of the log entries that fit the
 *                                 filter.
 *  `(.watch filter callback-fn)`: Watches for state changes that fit the
 *                                 filter and calls the callback.
 *  `(.stopWatching filter)`:      Stops the watch and uninstalls the filter in the
 *                                 node. Should always be called once it is done.
 * 
 *   Watch callback return value
 * 
 *  String - When using the "latest" parameter, it returns the block hash of
 *           the last incoming block.
 * 
 *  String - When using the "pending" parameter, it returns a transaction hash
 *           of the most recent pending transaction.
 *  Object - When using manual filter options, it returns a log object as follows:
 * 
 *      logIndex: Number - integer of the log index position in the block. null
 *                         when its pending log.
 *      transactionIndex: Number - integer of the transactions index position log
 *                                 was created from. null when its pending log.
 *      transactionHash: String, 32 Bytes - hash of the transactions this log was
 *                                          created from. null when its pending log.
 *      blockHash: String, 32 Bytes - hash of the block where this log was in. null
 *                                    when its pending. null when its pending log.
 *      blockNumber: Number - the block number where this log was in. null when its
 *                            pending. null when its pending log.
 *      address: String, 32 Bytes - address from which this log originated.
 *      data: String - contains one or more 32 Bytes non-indexed arguments of the log.
 * 
 *      topics: Array of Strings - Array of 0 to 4 32 Bytes DATA of indexed log
 *                                 arguments. (In solidity: The first topic is the hash
 *                                 of the signature of the event, except if you declared the
 *                                 event with the anonymous specifier.)
 * 
 *   Note for event filter return values see Contract Events at
 *   https://github.com/ethereum/wiki/wiki/JavaScript-API#contract-events
 */
cljs_web3.eth.filter = (function cljs_web3$eth$filter(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47347 = arguments.length;
var i__4790__auto___47348 = (0);
while(true){
if((i__4790__auto___47348 < len__4789__auto___47347)){
args__4795__auto__.push((arguments[i__4790__auto___47348]));

var G__47349 = (i__4790__auto___47348 + (1));
i__4790__auto___47348 = G__47349;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"filter",args);
}));

(cljs_web3.eth.filter.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.filter.cljs$lang$applyTo = (function (seq47226){
var G__47227 = cljs.core.first(seq47226);
var seq47226__$1 = cljs.core.next(seq47226);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47227,seq47226__$1);
}));

/**
 * Compiling features being deprecated https://github.com/ethereum/EIPs/issues/209
 */
cljs_web3.eth.get_compilers = (function cljs_web3$eth$get_compilers(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47355 = arguments.length;
var i__4790__auto___47356 = (0);
while(true){
if((i__4790__auto___47356 < len__4789__auto___47355)){
args__4795__auto__.push((arguments[i__4790__auto___47356]));

var G__47357 = (i__4790__auto___47356 + (1));
i__4790__auto___47356 = G__47357;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_compilers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_compilers.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getCompilers",args);
}));

(cljs_web3.eth.get_compilers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_compilers.cljs$lang$applyTo = (function (seq47228){
var G__47229 = cljs.core.first(seq47228);
var seq47228__$1 = cljs.core.next(seq47228);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47229,seq47228__$1);
}));

/**
 * Compiling features being deprecated https://github.com/ethereum/EIPs/issues/209
 */
cljs_web3.eth.compile_solidity = (function cljs_web3$eth$compile_solidity(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47359 = arguments.length;
var i__4790__auto___47360 = (0);
while(true){
if((i__4790__auto___47360 < len__4789__auto___47359)){
args__4795__auto__.push((arguments[i__4790__auto___47360]));

var G__47362 = (i__4790__auto___47360 + (1));
i__4790__auto___47360 = G__47362;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_solidity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.compile_solidity.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47232){
var vec__47233 = p__47232;
var source_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47233,(0),null);
var args = vec__47233;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.get_compile(web3),"solidity",args);
}));

(cljs_web3.eth.compile_solidity.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.compile_solidity.cljs$lang$applyTo = (function (seq47230){
var G__47231 = cljs.core.first(seq47230);
var seq47230__$1 = cljs.core.next(seq47230);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47231,seq47230__$1);
}));

/**
 * Compiling features being deprecated https://github.com/ethereum/EIPs/issues/209
 */
cljs_web3.eth.compile_lll = (function cljs_web3$eth$compile_lll(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47363 = arguments.length;
var i__4790__auto___47364 = (0);
while(true){
if((i__4790__auto___47364 < len__4789__auto___47363)){
args__4795__auto__.push((arguments[i__4790__auto___47364]));

var G__47365 = (i__4790__auto___47364 + (1));
i__4790__auto___47364 = G__47365;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_lll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.compile_lll.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47238){
var vec__47239 = p__47238;
var source_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47239,(0),null);
var args = vec__47239;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.get_compile(web3),"lll",args);
}));

(cljs_web3.eth.compile_lll.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.compile_lll.cljs$lang$applyTo = (function (seq47236){
var G__47237 = cljs.core.first(seq47236);
var seq47236__$1 = cljs.core.next(seq47236);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47237,seq47236__$1);
}));

/**
 * Compiling features being deprecated https://github.com/ethereum/EIPs/issues/209
 */
cljs_web3.eth.compile_serpent = (function cljs_web3$eth$compile_serpent(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47370 = arguments.length;
var i__4790__auto___47371 = (0);
while(true){
if((i__4790__auto___47371 < len__4789__auto___47370)){
args__4795__auto__.push((arguments[i__4790__auto___47371]));

var G__47372 = (i__4790__auto___47371 + (1));
i__4790__auto___47371 = G__47372;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_serpent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.compile_serpent.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47244){
var vec__47245 = p__47244;
var source_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47245,(0),null);
var args = vec__47245;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.get_compile(web3),"serpent",args);
}));

(cljs_web3.eth.compile_serpent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.compile_serpent.cljs$lang$applyTo = (function (seq47242){
var G__47243 = cljs.core.first(seq47242);
var seq47242__$1 = cljs.core.next(seq47242);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47243,seq47242__$1);
}));

/**
 * Returns GlobalRegistrar object.
 * 
 *   See https://github.com/ethereum/web3.js/blob/master/example/namereg.html
 *   for an example in JavaScript.
 */
cljs_web3.eth.namereg = (function cljs_web3$eth$namereg(web3){
return (cljs_web3.eth.eth(web3)["namereg"]);
});
/**
 * Creates a contract object for a solidity contract, which can be used to
 *   initiate contracts on an address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   abi           - ABI array with descriptions of functions and events of
 *                the contract
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns a contract object.
 */
cljs_web3.eth.contract = (function cljs_web3$eth$contract(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47373 = arguments.length;
var i__4790__auto___47374 = (0);
while(true){
if((i__4790__auto___47374 < len__4789__auto___47373)){
args__4795__auto__.push((arguments[i__4790__auto___47374]));

var G__47375 = (i__4790__auto___47374 + (1));
i__4790__auto___47374 = G__47375;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__47250){
var vec__47251 = p__47250;
var abi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47251,(0),null);
var args = vec__47251;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"contract",args);
}));

(cljs_web3.eth.contract.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.contract.cljs$lang$applyTo = (function (seq47248){
var G__47249 = cljs.core.first(seq47248);
var seq47248__$1 = cljs.core.next(seq47248);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47249,seq47248__$1);
}));

/**
 * Initiate an existing contract on an address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   abi           - ABI array with descriptions of functions and events of
 *                the contract
 *   address       - The address of the existing contract
 * 
 *   Example:
 *   user> `(contract-at web3-instance
 *                    abi
 *                    address)`
 */
cljs_web3.eth.contract_at = (function cljs_web3$eth$contract_at(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47378 = arguments.length;
var i__4790__auto___47379 = (0);
while(true){
if((i__4790__auto___47379 < len__4789__auto___47378)){
args__4795__auto__.push((arguments[i__4790__auto___47379]));

var G__47380 = (i__4790__auto___47379 + (1));
i__4790__auto___47379 = G__47380;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs_web3.eth.contract_at.cljs$core$IFn$_invoke$arity$variadic = (function (web3,abi,p__47257){
var vec__47258 = p__47257;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47258,(0),null);
var args = vec__47258;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([abi], 0)),"at",args);
}));

(cljs_web3.eth.contract_at.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_web3.eth.contract_at.cljs$lang$applyTo = (function (seq47254){
var G__47255 = cljs.core.first(seq47254);
var seq47254__$1 = cljs.core.next(seq47254);
var G__47256 = cljs.core.first(seq47254__$1);
var seq47254__$2 = cljs.core.next(seq47254__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47255,G__47256,seq47254__$2);
}));

/**
 * Deploy a contract asynchronous from a Solidity file.
 * 
 *   Parameters:
 *   web3             - web3 instance
 *   abi              - ABI array with descriptions of functions and events of
 *                   the contract
 *   transaction-data - map that contains
 *  - :gas - max gas to use
 *  - :data the BIN of the contract
 *  - :from account to use
 *   callback-fn      - callback with two parameters, error and contract.
 *                   From the contract the "address" property can be used to
 *                   obtain the address. And the "transactionHash" to obtain
 *                   the hash of the transaction, which created the contract.
 * 
 *   Example:
 *   `(contract-new web3-instance
 *               abi
 *               {:from "0x.."
 *                :data bin
 *                :gas  4000000}
 *               (fn [err contract]
 *                 (if-not err
 *                  (let [address (aget contract "address")
 *                        tx-hash (aget contract "transactionHash")]
 *                    ;; Two calls: transaction received
 *                    ;; and contract deployed.
 *                    ;; Check address on the second call
 *                    (when (address? address)
 *                      (do-something-with-contract contract)
 *                      (do-something-with-address address)))
 *                  (println "error deploying contract" err))))`
 * nil
 */
cljs_web3.eth.contract_new = (function cljs_web3$eth$contract_new(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47399 = arguments.length;
var i__4790__auto___47401 = (0);
while(true){
if((i__4790__auto___47401 < len__4789__auto___47399)){
args__4795__auto__.push((arguments[i__4790__auto___47401]));

var G__47402 = (i__4790__auto___47401 + (1));
i__4790__auto___47401 = G__47402;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_new.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs_web3.eth.contract_new.cljs$core$IFn$_invoke$arity$variadic = (function (web3,abi,p__47264){
var vec__47265 = p__47264;
var transaction_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47265,(0),null);
var callback_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47265,(1),null);
var args = vec__47265;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([abi], 0)),"new",args);
}));

(cljs_web3.eth.contract_new.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_web3.eth.contract_new.cljs$lang$applyTo = (function (seq47261){
var G__47262 = cljs.core.first(seq47261);
var seq47261__$1 = cljs.core.next(seq47261);
var G__47263 = cljs.core.first(seq47261__$1);
var seq47261__$2 = cljs.core.next(seq47261__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47262,G__47263,seq47261__$2);
}));

/**
 * Explicitly call a method on a contract.
 * 
 *   Use the kebab-cases version of the original method.
 *   E.g., function fooBar() can be addressed with :foo-bar.
 * 
 *   Parameters:
 *   contract-instance - an instance of the contract (obtained via `contract` or
 *                    `contract-at`)
 *   method            - the kebab-cased version of the method
 *   args              - arguments to the method
 * 
 *   Example:
 *   user> `(web3-eth/contract-call ContractInstance :multiply 5)`
 *   25
 */
cljs_web3.eth.contract_call = (function cljs_web3$eth$contract_call(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47403 = arguments.length;
var i__4790__auto___47404 = (0);
while(true){
if((i__4790__auto___47404 < len__4789__auto___47403)){
args__4795__auto__.push((arguments[i__4790__auto___47404]));

var G__47405 = (i__4790__auto___47404 + (1));
i__4790__auto___47404 = G__47405;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic = (function (contract_instance,method,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(contract_instance,method,args);
}));

(cljs_web3.eth.contract_call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_web3.eth.contract_call.cljs$lang$applyTo = (function (seq47268){
var G__47269 = cljs.core.first(seq47268);
var seq47268__$1 = cljs.core.next(seq47268);
var G__47270 = cljs.core.first(seq47268__$1);
var seq47268__$2 = cljs.core.next(seq47268__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47269,G__47270,seq47268__$2);
}));

/**
 * Gets binary data of a contract method call.
 * 
 *   Use the kebab-cases version of the original method.
 *   E.g., function fooBar() can be addressed with :foo-bar.
 * 
 *   Parameters:
 *   contract-instance - an instance of the contract (obtained via `contract` or
 *                    `contract-at`)
 *   method            - the kebab-cased version of the method
 *   args              - arguments to the method
 * 
 *   Example:
 *   user> `(web3-eth/contract-call ContractInstance :multiply 5)`
 *   25
 */
cljs_web3.eth.contract_get_data = (function cljs_web3$eth$contract_get_data(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47418 = arguments.length;
var i__4790__auto___47419 = (0);
while(true){
if((i__4790__auto___47419 < len__4789__auto___47418)){
args__4795__auto__.push((arguments[i__4790__auto___47419]));

var G__47420 = (i__4790__auto___47419 + (1));
i__4790__auto___47419 = G__47420;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_get_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs_web3.eth.contract_get_data.cljs$core$IFn$_invoke$arity$variadic = (function (contract_instance,method,args){
var method_name = (function (){var G__47274 = cljs.core.name(method);
return (cljs_web3.utils.camel_case.cljs$core$IFn$_invoke$arity$1 ? cljs_web3.utils.camel_case.cljs$core$IFn$_invoke$arity$1(G__47274) : cljs_web3.utils.camel_case.call(null,G__47274));
})();
var method_fn = (contract_instance[method_name]);
if(cljs.core.truth_(method_fn)){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(method_fn,"getData",args);
} else {
throw ["Method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name)," was not found in object."].join('');
}
}));

(cljs_web3.eth.contract_get_data.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_web3.eth.contract_get_data.cljs$lang$applyTo = (function (seq47271){
var G__47272 = cljs.core.first(seq47271);
var seq47271__$1 = cljs.core.next(seq47271);
var G__47273 = cljs.core.first(seq47271__$1);
var seq47271__$2 = cljs.core.next(seq47271__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47272,G__47273,seq47271__$2);
}));

/**
 * Stops and uninstalls the filter.
 * 
 *   Arguments:
 *   filter - the filter to stop
 */
cljs_web3.eth.stop_watching_BANG_ = (function cljs_web3$eth$stop_watching_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47421 = arguments.length;
var i__4790__auto___47422 = (0);
while(true){
if((i__4790__auto___47422 < len__4789__auto___47421)){
args__4795__auto__.push((arguments[i__4790__auto___47422]));

var G__47423 = (i__4790__auto___47422 + (1));
i__4790__auto___47422 = G__47423;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (filter,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(filter,"stopWatching",args);
}));

(cljs_web3.eth.stop_watching_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.stop_watching_BANG_.cljs$lang$applyTo = (function (seq47275){
var G__47276 = cljs.core.first(seq47275);
var seq47275__$1 = cljs.core.next(seq47275);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47276,seq47275__$1);
}));


//# sourceMappingURL=cljs_web3.eth.js.map
