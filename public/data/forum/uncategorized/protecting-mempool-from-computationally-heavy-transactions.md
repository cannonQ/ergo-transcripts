---
title: Protecting mempool from computationally heavy transactions
description: 'ErgoForum discussion: Protecting mempool from computationally heavy
  transactions'
tags:
- box
- context-extension
- ergoforum
- ergoscript-context
- ergotree
- full-node
- mempool
- ring-signatures
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/protecting-mempool-from-computationally-heavy-transactions/231
created: '2020-05-31'
last_activity: '2020-05-31'
posts_count: 1
views: 959
likes: 4
glossary_hits:
- Box
- Context extension
- ErgoScript context
- ErgoTree
- Full node
- Mempool
- Ring signatures
- Transaction
---

# Protecting mempool from computationally heavy transactions

> **Forum thread:** [https://ergoforum.org/t/protecting-mempool-from-computationally-heavy-transactions/231](https://ergoforum.org/t/protecting-mempool-from-computationally-heavy-transactions/231)
> **Category:** Uncategorized | **Created:** 2020-05-31 | **Posts:** 1 | **Views:** 959

**Related concepts:** Box, Context extension, ErgoScript context, ErgoTree, Full node, Mempool, Ring signatures, Transaction

---

### Post #1 — @kushti (2020-05-31)

In regards with a switch from AOT to JIT costing being discussed recently, a lot of talks on how to protect from computationally heavy (and possibly adversarial) transaction is going on.

In the first place, block validation (consensus-critical verification protocol) works in the same way regardless a costing procedure, if the procedure ensures that maximum time to validate a block (on commodity hardware) is defined by the cost limit per block, and also validation time is secure ( << expected block interval, so 1-2 seconds at most in case of Ergo). If costing procedure is correct (there are no mispriced instructions leading to spam attacks like Ethereum suffering from back in Autumn’2016), then there are no critical spam issues on this level, thanks to PoW making producing blocks a costly venture. Thus we should look and fix problems on other levels, namely, mostly propagation.

In Bitcoin, a node propagating transactions is doing following steps:  
network transfer -> parsing -> UTXO fetching (from db) -> signature checks

Similarly, in AOT-Ergo:  
network transfer -> parsing -> UTXO fetching (from db) -> AOT -> interpretation -> signature checks

in JIT-Ergo:  
network transfer -> parsing -> UTXO fetching (from db) -> interpretation -> signature checks

Which is different from Ethereum, where stages as network transfer -> parsing -> account fetching (from db) -> signature check, and propagating nodes do not execute contracts (at least this is true for the parity client).

The best attack in case of Ergo (and Bitcoin also likely) is to produce a transaction with proper format and contract about a limit but invalid signature. A peer sending such a transaction will be penalized though and after some number of attempts banned. Then another attack is about to send a transaction which is valid but will be invalidated when about to be packed into a block (thus the transaction is tied to blockchain context).

These observations lead us to breaking transactions into the following three classes:

1. Class I, where a script does not depend on context at all. As ErgoTree does not have collection constructors (so you can not do iterations also then), execution time is linear to the size of the script. Still, it is better to estimate a cost of the script, as e.g. ring signature “pk1 || pk2 || … || pk100” would be heavy. AOT works perfectly here.
2. Class II, where a script using only context from a spending transactions (inputs and outputs of the transaction, context extension variables from the corresponding input). Such scripts may have superlinear cost in regards with the script size, but validity of the script can not be changed with time, thus can be cached (so no need to check again the script already checked in the mempool when it comes in a block), also, toxic peer sending heavy scripts of this class will be isolated.
3. Class III, where a script is using blockchain-specific context (data from last headers and a pre-header). For such scripts validity can be changed with time, thus a peer sending invalid transactions can not be easily isolated.

Now how to prioritize transactions. Currently Ergo client is working in the same way as Bitcoin clients, so sorting families of transactions (where a child is spending outputs of its unconfirmed parent) by ergs per byte.

To consider also computational cost, at least two transactions are needed. So, for example, a client may start with two transactions from Class I and having their sizes, costs and fees (S1,C1, F1) and (S2,C2,F2), bandwidth fee per byte “x” and computational fee per cost unit “y” can be obtained easily via solving a system of two equations:

S1 \* x + C1 \* y = F1  
S2 \* x + C2 \* y = F2

(Class I transaction = all the input scripts from Class 1, if at least one input from Class 2, then transaction is from Class 2, similarly, in at least one input from Class 3, then the transaction is from Class3).

Having x and y, the node can check then following transactions by considering also some tolerance factor T, so if a transaction pays F3 and has a size S2, then its maximum cost to be C3\_max = T \* (F3 - S3 \* x) / y . On each validated transaction (from Class I and Class II?) x and y to be updated .

However, there’s problem with possible flooding of Class III transactions still, so for them we need to consider limits (the most harsh solution is to make them non-propagable, like  
non-standard transactions in Bitcoin).
