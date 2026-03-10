---
title: Daily Ergo Facts
description: 'ErgoForum discussion: Daily Ergo Facts'
tags:
- atomic-swaps
- bootstrapping
- box
- difficulty-adjustment
- eip
- ergoforum
- ergomixer
- ergoscript
- ergoscript-context
- ergotree
- eutxo
- fair-launch
- full-node
- kiosk
- minimum-transaction-fee
- native-tokens
- nipopow
- registers
- ring-signatures
- schnorr-signatures
- scorex
- sigma-chains
- sigma-protocols
- sigma-rust
- sigmastate-interpreter
- spv
- storage-rent
- transaction
- uncategorized
- zerojoin
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/daily-ergo-facts/166
created: '2020-01-17'
last_activity: '2020-09-25'
posts_count: 81
views: 5160
likes: 30
glossary_hits:
- Atomic swaps
- Bootstrapping
- Box
- Difficulty adjustment
- EIP
- ErgoMixer
- ErgoScript
- ErgoScript context
- ErgoTree
- Fair launch
- Full node
- Kiosk
- Minimum transaction fee
- Native tokens
- NiPoPoW
- Registers
- Ring signatures
- SPV
- Schnorr signatures
- Scorex
- Sigma Chains
- Sigma protocols
- Sigmastate interpreter
- Storage rent
- Transaction
- ZeroJoin
- eUTXO
- sigma-rust
---

# Daily Ergo Facts

> **Forum thread:** [https://ergoforum.org/t/daily-ergo-facts/166](https://ergoforum.org/t/daily-ergo-facts/166)
> **Category:** Uncategorized | **Created:** 2020-01-17 | **Posts:** 81 | **Views:** 5160

**Related concepts:** Atomic swaps, Bootstrapping, Box, Difficulty adjustment, EIP, ErgoMixer, ErgoScript, ErgoScript context, ErgoTree, Fair launch, Full node, Kiosk, Minimum transaction fee, Native tokens, NiPoPoW, Registers, Ring signatures, SPV, Schnorr signatures, Scorex, Sigma Chains, Sigma protocols, Sigmastate interpreter, Storage rent, Transaction, ZeroJoin, eUTXO, sigma-rust

---

### Post #1 — @Martin-mx (2020-01-17)

[twitter.com](https://twitter.com/chepurnoy/status/1218078668167286784)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy](https://twitter.com/chepurnoy/status/1218078668167286784)

[@chepurnoy](https://twitter.com/chepurnoy/status/1218078668167286784)

Signatures in Ergo preserve zero-knowlegde, e.g. from a signature for "pubkey1 or pubkey2" it is not possible to get who actually signed it. This is a real ring signature. ZK is preserved for complex statements like "(pk1 or pk2) and (pk3 or pk4)" as well. [#dailyergofact](https://twitter.com/search?q=%23dailyergofact)

[7:52 AM - 17 Jan 2020](https://twitter.com/chepurnoy/status/1218078668167286784)

16

7

---

### Post #2 — @Martin-mx (2020-01-20)

[twitter.com](https://twitter.com/chepurnoy/status/1219164353087311872)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1219164353087311872)

Ergo's support for sigma-protocols (aka generalized Schnorr proofs) is truly unique. As building bricks for composable statements, Ergo support Schnorr protocol and proof-of-Diffie-Hellman-tuple, but more can be added via soft-forks. Doc: https://t.co/TSXmedtwwc #dailyergofact

[11:46 PM - 19 Jan 2020](https://twitter.com/chepurnoy/status/1219164353087311872)

 3

 2

---

### Post #3 — @Martin-mx (2020-01-20)

[twitter.com](https://twitter.com/avslesarenko/status/1219203096833904641)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/5dd01ac780bc2777a85a96c45c8393ad8f3ca28b.jpeg)

#### [Alexander Slesarenko (avslesarenko)](https://twitter.com/avslesarenko/status/1219203096833904641)

@chepurnoy First Ergo transaction spending a coin protected by Diffie-Hellman-Tuple https://t.co/ndAes9A1Rt

[11:46 PM - 19 Jan 2020](https://twitter.com/avslesarenko/status/1219203096833904641)

 4

 3

---

### Post #4 — @Martin-mx (2020-01-21)

[twitter.com](https://twitter.com/chepurnoy/status/1219527770897899520)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1219527770897899520)

To do contracts on the Ergo blockchain, a dev is protecting outputs with scripts in ErgoScript, kinda Solidity of Ergo. ErgoScript compiles down to ErgoTree, kinda typed abstract syntax tree to be stored on the blockchain. #dailyergofact

[11:50 PM - 20 Jan 2020](https://twitter.com/chepurnoy/status/1219527770897899520)

 2

 1

---

### Post #5 — @Martin-mx (2020-01-22)

[twitter.com](https://twitter.com/chepurnoy/status/1219889082907623425)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1219889082907623425)

From Ergo whitepaper ( https://t.co/R9qztkC8F7 ), Sec. 2 (kinda Ergo Constitution): "Created for Regular People.Ergo is a platform for ordinary people, and their interests should not be infringed upon in favor of big parties." #dailyergofact

[11:46 PM - 21 Jan 2020](https://twitter.com/chepurnoy/status/1219889082907623425)

 7

 3

---

### Post #6 — @Martin-mx (2020-01-23)

[twitter.com](https://twitter.com/chepurnoy/status/1220357142361923584)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1220357142361923584)

With all the features achieved (stateless clients, ultra-efficient SPV, native support for composable ring, threshold signatures etc) Ergo relies only on solid and well-known cryptographic assumptions, hash fn and discrete log (involved protocols may rely on DDH) #dailyergofact

[6:46 AM - 23 Jan 2020](https://twitter.com/chepurnoy/status/1220357142361923584)

 5

 3

---

### Post #7 — @Martin-mx (2020-01-24)

[twitter.com](https://twitter.com/chepurnoy/status/1220723424462614531)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1220723424462614531)

A block in Ergo consists of four sections: header, block transactions, proofs of state transformation correctness, and extension. A protocol client may skip certain parts if not needed. This is flexible and democratic network! #dailyergofact

[7:01 AM - 24 Jan 2020](https://twitter.com/chepurnoy/status/1220723424462614531)

 4

 3

---

### Post #8 — @Martin-mx (2020-01-27)

[twitter.com](https://twitter.com/chepurnoy/status/1221738227134083072)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1221738227134083072)

Extension section of Ergo block could be up to 10Kb and contains key-value data. Some keys are predefined (NiPoPoW interlinks, parameters at the beginning of an epoch), others can be used freely. Simple and efficient support for soft-forks, anchored sidechains etc #dailyergofact

[2:14 AM - 27 Jan 2020](https://twitter.com/chepurnoy/status/1221738227134083072)

 8

 2

---

### Post #9 — @Martin-mx (2020-01-28)

[twitter.com](https://twitter.com/chepurnoy/status/1222161618299166720)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1222161618299166720)

Another principle from Ergo WP, Sec.2 (aka Ergo Constitution): "Ergo protocol does not restrict or limit any categories of usage. It should allow anyone to join the network and participate in the protocol without any preliminary actions." #dailyergofact

[6:16 AM - 28 Jan 2020](https://twitter.com/chepurnoy/status/1222161618299166720)

 2

 2

---

### Post #10 — @Martin-mx (2020-02-04)

[twitter.com](https://twitter.com/chepurnoy/status/1222547407801593862)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1222547407801593862)

Ergo protocol has better formalization of soft-forking: most of validation rules are stated explicitly (see Yellow Paper draft), and some are marked as soft-forkable, so node may skip some (non-critical) checks if 90+% of mining power deactivated them #dailyergofact

[7:49 AM - 29 Jan 2020](https://twitter.com/chepurnoy/status/1222547407801593862)

 13

 8

---

### Post #11 — @Martin-mx (2020-02-04)

[twitter.com](https://twitter.com/chepurnoy/status/1222907260969549824)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1222907260969549824)

Max block size, max block limit and few other parameters in Ergo can be readjusted by miners by a small step if 50+% miners within 1,024-blocks epoch supporting the change #dailyergofact

[7:39 AM - 30 Jan 2020](https://twitter.com/chepurnoy/status/1222907260969549824)

 8

 5

---

### Post #12 — @Martin-mx (2020-02-04)

[twitter.com](https://twitter.com/chepurnoy/status/1223320731909599232)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1223320731909599232)

Ergo implements stateless clients with full-node security (according to https://t.co/Qh6ShhZLBH ). Bootstrapping from pruned full-block chain is possible in this node (with no UTXO set download). Gives full security to constrained devices! #dailyergofact https://t.co/6bCXpZWrs6

[Filippo F @FilippoUnits](https://twitter.com/FilippoUnits/status/1223156793473454080)

So, finnally synced the @ergoplatformorg light node with Raspberry Pi Model 3 (1Gb RAM)!
Right now is syncing the headers for the full node. 144184 of 153913 blocks took about 12h.. GOGOGO! $ERG #Scorex pic.twitter.com/ny3az20e0y

[11:02 AM - 31 Jan 2020](https://twitter.com/chepurnoy/status/1223320731909599232)

 10

 4

---

### Post #13 — @Martin-mx (2020-02-04)

[twitter.com](https://twitter.com/chepurnoy/status/1224356935526494208)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1224356935526494208)

Another principle from the Ergo whitepaper, Sec. 2 (aka Ergo Constitution): "Ergo should be as decentralized as possible: any parties (...) whose absence or malicious behavior may affect the security of the network should be avoided ..." #dailyergofact

[7:40 AM - 3 Feb 2020](https://twitter.com/chepurnoy/status/1224356935526494208)

 8

 3

---

### Post #14 — @Martin-mx (2020-02-04)

[twitter.com](https://twitter.com/chepurnoy/status/1224715419442917378)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1224715419442917378)

Difficulty readjustment in Ergo takes into account 8 last epochs (1024 blocks each), it helps to stabilize block time in case of non-linear hashrate changes, and also reduces profitability of coin-hopping. A published paper on that https://t.co/n91wzocRFA #dailyergofact

[7:24 AM - 4 Feb 2020](https://twitter.com/chepurnoy/status/1224715419442917378)

 2

 2

---

### Post #15 — @Martin-mx (2020-02-07)

[twitter.com](https://twitter.com/chepurnoy/status/1225755939216744449)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1225755939216744449)

Contracts in Ergo are stored on the blockchain as serialized execution graph, a simplest declarative form of execution representation. The format is called ErgoTree. There're higher-level languages, such as ErgoScript, to be compiled into ErgoTree #dailyergofact

[4:19 AM - 7 Feb 2020](https://twitter.com/chepurnoy/status/1225755939216744449)

 1

 1

---

### Post #16 — @Martin-mx (2020-02-10)

[twitter.com](https://twitter.com/chepurnoy/status/1226879615559319557)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1226879615559319557)

Ergo is not a privacy coin, but a non-interactive mixing scheme (ErgoMix, https://t.co/bEgmJlE1Xf , pg. 6) already discovered #dailyergofact More to be discovered I believe!

[6:44 AM - 10 Feb 2020](https://twitter.com/chepurnoy/status/1226879615559319557)

 3

 3

---

### Post #17 — @Martin-mx (2020-02-11)

[twitter.com](https://twitter.com/chepurnoy/status/1227287506191667200)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1227287506191667200)

Ergo devs paid attention before the launch to things other cryptocurrencies resolve after attacks somehow. In particular, spam attacks using cheap but heavy to validate contracts were considered seriously, with a lot of tests implemented #dailyergofact

[9:45 AM - 11 Feb 2020](https://twitter.com/chepurnoy/status/1227287506191667200)

 6

 4

---

### Post #18 — @Martin-mx (2020-02-12)

[twitter.com](https://twitter.com/chepurnoy/status/1227618635683786753)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1227618635683786753)

Ergo is using Bitcoin's elliptic curve secp256k1 because of cofactor 1 (unlike ed25519, so no need to check protocols for cofactor-safety), and support in popular libs (unlike ristretto25519 , which is still very new) #dailyergofact

[7:41 AM - 12 Feb 2020](https://twitter.com/chepurnoy/status/1227618635683786753)

 4

 3

---

### Post #19 — @Martin-mx (2020-02-13)

[twitter.com](https://twitter.com/chepurnoy/status/1227988989665103872)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1227988989665103872)

Ergo supports NiPoPoWs (https://t.co/HF3QR5rBLO), a building block for efficient SPV clients and sidechains! #dailyergofact

[8:12 AM - 13 Feb 2020](https://twitter.com/chepurnoy/status/1227988989665103872)

 4

 3

---

### Post #20 — @Martin-mx (2020-02-14)

[twitter.com](https://twitter.com/chepurnoy/status/1228343457703325696)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1228343457703325696)

In the simplest case a signature in Ergo transaction is a Schnorr signature, in general case it is a signature corresponding to a subset of Generalized Schnorr Proofs #dailyergofact

[7:41 AM - 14 Feb 2020](https://twitter.com/chepurnoy/status/1228343457703325696)

 5

 2

---

### Post #21 — @Martin-mx (2020-02-18)

[twitter.com](https://twitter.com/chepurnoy/status/1229858351158349824)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1229858351158349824)

The very basic idea behind contracts in Ergo was that they are whether financial or not needed at all on top of a blockchain #dailyergofact

[12:00 PM - 18 Feb 2020](https://twitter.com/chepurnoy/status/1229858351158349824)

 3

 3

---

### Post #22 — @Martin-mx (2020-02-20)

[twitter.com](https://twitter.com/chepurnoy/status/1230236923295346688)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1230236923295346688)

A threshold signature in Ergo (e.g. 2-out-of-3) is preserving zero-knowledge, unlike multisig in Bitcoin: by observing a signature not possible to know these 2 guys who signed (only the ring of 3 is known) #dailyergofact

[1:05 PM - 19 Feb 2020](https://twitter.com/chepurnoy/status/1230236923295346688)

 6

 3

---

### Post #23 — @Martin-mx (2020-02-25)

[twitter.com](https://twitter.com/chepurnoy/status/1230604550794629120)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1230604550794629120)

More from Ergo whitepaper ( https://t.co/R9qztkC8F7 ), Sec. 2 (kinda Ergo Constitution): "Ergo protocol does not restrict or limit any cat-egories of usage. It should allow anyone to join the network and participatein the protocol without any preliminary actions." #dailyergofact

[1:26 PM - 20 Feb 2020](https://twitter.com/chepurnoy/status/1230604550794629120)

 12

 6

---

### Post #24 — @Martin-mx (2020-02-25)

[twitter.com](https://twitter.com/chepurnoy/status/1230977795016265728)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1230977795016265728)

Ergo is very generic by nature, so it can catch up with trends (DeFi and better privacy now, tomorrow something else) without protocol modifications #dailyergofact

[2:09 PM - 21 Feb 2020](https://twitter.com/chepurnoy/status/1230977795016265728)

 12

 5

---

### Post #25 — @Martin-mx (2020-02-25)

[twitter.com](https://twitter.com/chepurnoy/status/1232383682540982273)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1232383682540982273)

Ergo Platform blockchain is provably Turing-complete, a published paper preprint on that https://t.co/HrLG3xMFAd #dailyergofact

[11:15 AM - 25 Feb 2020](https://twitter.com/chepurnoy/status/1232383682540982273)

---

### Post #26 — @Martin-mx (2020-02-26)

[twitter.com](https://twitter.com/chepurnoy/status/1232778420683235329)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1232778420683235329)

Ergo has "A Systematic Approach to Cryptocurrency Fees", and this it the title of a paper published https://t.co/Ezs5l39oBA #dailyergofact

[1:24 PM - 26 Feb 2020](https://twitter.com/chepurnoy/status/1232778420683235329)

 1

 1

---

### Post #27 — @Martin-mx (2020-02-28)

[twitter.com](https://twitter.com/chepurnoy/status/1233510443907473408)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1233510443907473408)

Mixing sigma protocols (efficient, composable, well-studied class of zero-knowledge proofs) with predicates on spending context makes Ergo contracts truly unique by capabilities #dailyergofact

[1:53 PM - 28 Feb 2020](https://twitter.com/chepurnoy/status/1233510443907473408)

 2

 2

---

### Post #28 — @Martin-mx (2020-03-03)

[twitter.com](https://twitter.com/chepurnoy/status/1234601355685367810)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1234601355685367810)

A lot of proposals for Ergo were rejected for the sake of the sound and relatively simple design, such as the Rollerchain protocol https://t.co/aGgXQPydqp #dailyergofact

[2:07 PM - 2 Mar 2020](https://twitter.com/chepurnoy/status/1234601355685367810)

 4

 1

---

### Post #29 — @Martin-mx (2020-03-03)

[twitter.com](https://twitter.com/chepurnoy/status/1234952743342821384)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1234952743342821384)

Low-level contract representation in Ergo is called ErgoTree, it is typed AST basically. There's higher-level language ErgoScript, and also it is possible to write contracts in small subset of popular Scala language! #dailyergofact

[1:24 PM - 3 Mar 2020](https://twitter.com/chepurnoy/status/1234952743342821384)

 2

 2

---

### Post #30 — @Martin-mx (2020-03-07)

[twitter.com](https://twitter.com/chepurnoy/status/1235523152618360832)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1235523152618360832)

Ergo is doing superior L1 scaling possible with simple tools (just hash function), but also friendly to L2: Lightning / Rainbow networks support, FastSwap-style protocols, some statechannel schemes also possible I guess #dailyergofact

[3:10 AM - 5 Mar 2020](https://twitter.com/chepurnoy/status/1235523152618360832)

 14

 5

---

### Post #31 — @Martin-mx (2020-03-10)

[twitter.com](https://twitter.com/chepurnoy/status/1237193375977279490)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1237193375977279490)

Ergo has straightforward support for data persistence on the blockchain, a data provider (such as notarization tool https://t.co/xyHnXl0H86 ) is just writing values into registers of a box (aka UTXO) #dailyergofact $erg

[6:47 PM - 9 Mar 2020](https://twitter.com/chepurnoy/status/1237193375977279490)

 6

 3

---

### Post #32 — @Martin-mx (2020-03-10)

[twitter.com](https://twitter.com/chepurnoy/status/1237492236725751815)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1237492236725751815)

Storage rent is enforced by miners protocol (miners can reduce this fee to zero), other than that fees are not part of the protocol and enforced by clients like in Bitcoin #dailyergofact $erg #altcoin

[2:35 PM - 10 Mar 2020](https://twitter.com/chepurnoy/status/1237492236725751815)

 1

 1

---

### Post #33 — @Martin-mx (2020-03-16)

[twitter.com](https://twitter.com/chepurnoy/status/1239567782485819395)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1239567782485819395)

While others are just talking about "banking the unbanked", Ergo Platform has concrete examples for targeted loans, local exchange trading systems, and so on. The platform is ready to to have ecosystems on top of it aiming to replace failing banking systems #dailyergofact $erg

[8:02 AM - 16 Mar 2020](https://twitter.com/chepurnoy/status/1239567782485819395)

 6

 5

---

### Post #34 — @Martin-mx (2020-03-16)

[twitter.com](https://twitter.com/chepurnoy/status/1238510322668965888)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1238510322668965888)

Ergo Platform protocol allows to build crypto applications like complex signature schemes (ring signatures, threshold signatures etc), non-interactive mixers (in development) and more! Other blockchains just hardcode some crypto functionality, Ergo allows for apps! #dailyergofact

[10:00 AM - 13 Mar 2020](https://twitter.com/chepurnoy/status/1238510322668965888)

 18

 8

---

### Post #35 — @Martin-mx (2020-03-18)

[twitter.com](https://twitter.com/chepurnoy/status/1239936086106935296)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1239936086106935296)

Ergo Platform had first formally verified p2p crowdfunding contract (https://t.co/GQG800Jwfk) deployed just three months after the network launch #dailyergofact $erg

[8:26 AM - 17 Mar 2020](https://twitter.com/chepurnoy/status/1239936086106935296)

 11

 3

---

### Post #36 — @Martin-mx (2020-03-19)

[twitter.com](https://twitter.com/chepurnoy/status/1240656684596502546)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1240656684596502546)

Ergo Platform with its extended UTXO model is ready for Hydra (https://t.co/2xhWHWvzZi) #dailyergofact

[8:09 AM - 19 Mar 2020](https://twitter.com/chepurnoy/status/1240656684596502546)

 11

 4

---

### Post #37 — @Martin-mx (2020-03-23)

[twitter.com](https://twitter.com/chepurnoy/status/1242097559990083584)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1242097559990083584)

Ergo core team has 2020 roadmap with crowdfunding UI, non-interactive mixer, DEX, and so on https://t.co/ZJq2E9xSVj , likely the plan will be completed earlier than the end of the year #dailyergofact

[7:35 AM - 23 Mar 2020](https://twitter.com/chepurnoy/status/1242097559990083584)

 8

 5

---

### Post #38 — @Martin-mx (2020-03-31)

[twitter.com](https://twitter.com/chepurnoy/status/1244744344009138186)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1244744344009138186)

ErgoTree is simple low-level description of Ergo contracts in form of typed abstract syntax trees, specification is available now #dailyergofact $erg https://t.co/MJ0xQKToC3

[Alex Chepurnoy @chepurnoy](https://twitter.com/chepurnoy/status/1244573755948642307)

ErgoTree & ErgoScript interpreter 3.2.1 has been released https://github.com/ScorexFoundation/sigmastate-interpreter/releases/tag/v3.2.1 …

[2:52 PM - 30 Mar 2020](https://twitter.com/chepurnoy/status/1244744344009138186)

 4

 1

[twitter.com](https://twitter.com/chepurnoy/status/1243639548908834816)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1243639548908834816)

Certified Ergo contracts repository: https://t.co/VuvV4pyvOf #dailyergofact $erg

[1:42 PM - 27 Mar 2020](https://twitter.com/chepurnoy/status/1243639548908834816)

 16

 6

---

### Post #39 — @Martin-mx (2020-04-02)

[twitter.com](https://twitter.com/chepurnoy/status/1245736813551128577)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1245736813551128577)

Atomic swap based DEX is done in CLI demo form, UI is following #dailyergofact $erg https://t.co/Gl0MQ8NG22

[Ergo @ergoplatformorg](https://twitter.com/ergoplatformorg/status/1245387097101537280)

A Command Line Interface for Decentralized Exchange on Ergo Blockchain https://github.com/ergoplatform/ergo-dex … #DexDemo
#Scorex #ZKProof #Cryptocurrency #ErgoScript #Privacy #DeFi #Blockchain #ProofOfWork $ERG pic.twitter.com/I9V97MhlF2

[8:36 AM - 2 Apr 2020](https://twitter.com/chepurnoy/status/1245736813551128577)

 6

---

### Post #40 — @Martin-mx (2020-04-08)

[twitter.com](https://twitter.com/chepurnoy/status/1247588976795541504)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1247588976795541504)

Ergo Platform has been built from scratch since 2015, decoupled into open-sourced frameworks (Scorex2, scrypto, sigma-interpreter etc) with a most relaxed license possible #dailyergofact $erg

[11:16 AM - 7 Apr 2020](https://twitter.com/chepurnoy/status/1247588976795541504)

 14

 6

---

### Post #42 — @Martin-mx (2020-04-24)

[twitter.com](https://twitter.com/chepurnoy/status/1245066290320023553)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1245066290320023553)

Smart Contracts should be easy to use for the people, and also be useful, one of the key propositions of Ergo https://t.co/V2DV55MuQJ #dailyergofact $erg

[12:11 PM - 31 Mar 2020](https://twitter.com/chepurnoy/status/1245066290320023553)

 15

 4

---

### Post #43 — @Martin-mx (2020-04-24)

[twitter.com](https://twitter.com/chepurnoy/status/1246147684228050945)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1246147684228050945)

Ergo is not just about Extended UTXO model, but also Multi-Stage UTXO model https://t.co/zuTNCdhIHN #dailyergofacts $erg

[11:48 AM - 3 Apr 2020](https://twitter.com/chepurnoy/status/1246147684228050945)

 14

 5

---

### Post #44 — @Martin-mx (2020-04-24)

[twitter.com](https://twitter.com/chepurnoy/status/1247233855901270021)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/c74dbb46642d6d2a49490c8b950e49cda7661d7e_2_690x68.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1247233855901270021)

Oracles delivering data on Ergo blockchain (ERG-USD-CMC oracle), details https://t.co/LJr0pOgram #dailyergofact $erg

[11:44 AM - 6 Apr 2020](https://twitter.com/chepurnoy/status/1247233855901270021)

 9

 3

---

### Post #46 — @Martin-mx (2020-04-24)

[twitter.com](https://twitter.com/chepurnoy/status/1247985430039068674)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1247985430039068674)

"Advanced ErgoScript Tutorial" has examples of enhanced spending contracts and two-party protocols (such as rock-paper-scissors game and also s mixer) https://t.co/bEgmJlVDlP #dailyergofact $erg

[1:31 PM - 8 Apr 2020](https://twitter.com/chepurnoy/status/1247985430039068674)

 13

 5

---

### Post #47 — @Martin-mx (2020-04-24)

[twitter.com](https://twitter.com/chepurnoy/status/1248359528128819203)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1248359528128819203)

Ergo box (aka coin aka UTXO) is just a set of 10 registers, every contains typed data, 4 with predefined semantics, others for contracts #dailyergofact $erg

[2:17 PM - 9 Apr 2020](https://twitter.com/chepurnoy/status/1248359528128819203)

 15

 4

---

### Post #48 — @Martin-mx (2020-04-24)

[twitter.com](https://twitter.com/chepurnoy/status/1250190838132604931)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1250190838132604931)

Contracts for a local exchange trading system (LETS) on top of Ergo. A lot of thinking about community finance (CoFi) here! https://t.co/FpbgYrymy6 $erg #dailyergofact

[3:34 PM - 14 Apr 2020](https://twitter.com/chepurnoy/status/1250190838132604931)

 9

 4

---

### Post #49 — @Martin-mx (2020-04-24)

[twitter.com](https://twitter.com/chepurnoy/status/1250551093244973057)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1250551093244973057)

Shortest overview of the Ergo Platform is this teaser: https://t.co/94iiEoFBxU #dailyergofact $erg

[3:26 PM - 15 Apr 2020](https://twitter.com/chepurnoy/status/1250551093244973057)

 13

 3

---

### Post #50 — @Martin-mx (2020-04-24)

[twitter.com](https://twitter.com/chepurnoy/status/1252361360513490945)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1252361360513490945)

Ergo devs community is exploring more and more complex contracts https://t.co/3kJxbIXIz8 #dailyergofact $erg

[3:19 PM - 20 Apr 2020](https://twitter.com/chepurnoy/status/1252361360513490945)

 10

 4

---

### Post #51 — @Martin-mx (2020-04-24)

[twitter.com](https://twitter.com/chepurnoy/status/1253078102198099980)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1253078102198099980)

Non-interactive ErgoMixer is just the first crypto-application on top of the Ergo platform. Much more is possible without modifying the protocol e.g. larger-scale mixing, privacy-preserving auctions and votings (moving funds on chain) #dailyergofact $erg

[2:47 PM - 22 Apr 2020](https://twitter.com/chepurnoy/status/1253078102198099980)

 12

 7

---

### Post #52 — @Martin-mx (2020-04-30)

[twitter.com](https://twitter.com/chepurnoy/status/1253806379162316801)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1253806379162316801)

Scarce Ergo Platform tokens ( $erg ) have novel utility: they are needed to pay for storage rent. Unspent coins set growth is economically good then! #dailyergofact

[3:01 PM - 24 Apr 2020](https://twitter.com/chepurnoy/status/1253806379162316801)

 12

 4

---

### Post #53 — @Martin-mx (2020-04-30)

[twitter.com](https://twitter.com/chepurnoy/status/1254542576880889858)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1254542576880889858)

First stablecoin experiment on top of Ergo Platform) one-way convertible stablecoin tokens being bought from the holding contract https://t.co/cachhAKuY7 #dailyergofact $erg

[3:47 PM - 26 Apr 2020](https://twitter.com/chepurnoy/status/1254542576880889858)

 19

 4

---

### Post #54 — @Martin-mx (2020-04-30)

[twitter.com](https://twitter.com/chepurnoy/status/1255241651011883011)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1255241651011883011)

Ergo Platform clients can be run in different modes (stateful / stateless), totally fine as verification protocol is still the same. A theory behind that: https://t.co/WBGqoof12n $erg #dailyergofact

[2:05 PM - 28 Apr 2020](https://twitter.com/chepurnoy/status/1255241651011883011)

 12

 5

---

### Post #55 — @Martin-mx (2020-04-30)

[twitter.com](https://twitter.com/chepurnoy/status/1255949781270233094)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1255949781270233094)

While non-interactive mixer for Bitcoin (SNICKER) is in spec draft stage, truly non-interactive ErgoMix for Ergo Platform has runnable PoC implementation https://t.co/uEZAFOp51U $erg #dailyergofact

[12:58 PM - 30 Apr 2020](https://twitter.com/chepurnoy/status/1255949781270233094)

 3

 3

---

### Post #56 — @Martin-mx (2020-05-05)

[twitter.com](https://twitter.com/chepurnoy/status/1257447220107980800)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1257447220107980800)

On-chain ring and threshold signatures are supported by Ergo Platform, as well as MuSig and other off-chain Schnorr-based schemes #dailyergofact $erg

[4:09 PM - 4 May 2020](https://twitter.com/chepurnoy/status/1257447220107980800)

 8

 5

---

### Post #57 — @Martin-mx (2020-05-07)

[twitter.com](https://twitter.com/chepurnoy/status/1257791349744680960)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1257791349744680960)

Ergo was built with something like 2020 in mind, as contractual sound money for hard times https://t.co/gkGsHkpHqr #dailyergofact $erg

[2:56 PM - 5 May 2020](https://twitter.com/chepurnoy/status/1257791349744680960)

 9

 4

---

### Post #58 — @Martin-mx (2020-05-07)

[twitter.com](https://twitter.com/chepurnoy/status/1258163125091807233)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1258163125091807233)

Extracting maximum from simple cryptography with well-known assumptions, and no trusted setup, that's what Ergo Platform is about #dailyergofact $erg

[3:33 PM - 6 May 2020](https://twitter.com/chepurnoy/status/1258163125091807233)

 12

 4

---

### Post #59 — @Martin-mx (2020-05-15)

[twitter.com](https://twitter.com/chepurnoy/status/1258515834219069440)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1258515834219069440)

Unlike Ravencoin and other Bitcoins with tokens, Ergo Platform (complete PoW cryptocurrency rework) allows to attach contracts to tokens. #dailyergofact $erg

[2:55 PM - 7 May 2020](https://twitter.com/chepurnoy/status/1258515834219069440)

 19

 5

---

### Post #60 — @Martin-mx (2020-05-15)

[twitter.com](https://twitter.com/chepurnoy/status/1259802375159758853)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1259802375159758853)

Ergo Platform protocol allows for signatures corresponding to complex statements like "(Alice OR Bob) AND (Carol OR Dave)", the first distributed proving test for this https://t.co/bn6FdqaI1X #dailyergofact $erg

[4:07 AM - 11 May 2020](https://twitter.com/chepurnoy/status/1259802375159758853)

 76

 34

---

### Post #61 — @Martin-mx (2020-05-15)

[twitter.com](https://twitter.com/chepurnoy/status/1261049519266988032)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1261049519266988032)

Many modern cryptocurrencies extending UTXO model: Ergo Platform, Cardano, Nervos, Alephium. Interesting design patterns appear on the way, such as https://t.co/Gf1EQU6yge #dailyergofact $erg

[2:43 PM - 14 May 2020](https://twitter.com/chepurnoy/status/1261049519266988032)

 26

 9

---

### Post #62 — @Martin-mx (2020-05-15)

[twitter.com](https://twitter.com/chepurnoy/status/1261368536892444673)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1261368536892444673)

Non-interactive (using only blockchain) mixing on application level, means for more sophisticated schemes and bugfixes there's no need to fork like Monero! #dailyergofact $erg https://t.co/ZDHxYqmH48

[IACR ePrint Updates @IACRePrint](https://twitter.com/IACRePrint/status/1261243230202605571)

[New] ZeroJoin: Combining ZeroCoin and CoinJoin (Alexander Chepurnoy and Amitabh Saxena) http://ia.cr/2020/560

[11:51 AM - 15 May 2020](https://twitter.com/chepurnoy/status/1261368536892444673)

 4

 3

---

### Post #63 — @Martin-mx (2020-05-20)

[twitter.com](https://twitter.com/chepurnoy/status/1263207501065043971)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1263207501065043971)

Distributed signing (of true threshold sigs preserving ZK) is finally coming to the Ergo Platform reference client! EIP-11: https://t.co/eAFoZXV6wo #dailyergofact $erg

[1:38 PM - 20 May 2020](https://twitter.com/chepurnoy/status/1263207501065043971)

 3

 2

---

### Post #64 — @Martin-mx (2020-05-20)

[twitter.com](https://twitter.com/chepurnoy/status/1262853595218796546)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1262853595218796546)

An UTXO (a box) in Ergo is just about 10 registers, and each has a type. Everything is typed in the Ergo Platform machine https://t.co/JsnT4wpMXL #dailyergofact $erg

[2:12 PM - 19 May 2020](https://twitter.com/chepurnoy/status/1262853595218796546)

 14

 5

---

### Post #65 — @Martin-mx (2020-05-24)

[twitter.com](https://twitter.com/chepurnoy/status/1263588876444033027)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1263588876444033027)

Ergo Platform community discovering contractual capabilities of its extended and multi-stage UTXO model, and new design patterns appear on the way https://t.co/w345uPrCQX #dailyergofact $erg

[2:53 PM - 21 May 2020](https://twitter.com/chepurnoy/status/1263588876444033027)

 19

 7

---

### Post #66 — @Martin-mx (2020-06-09)

Ergo Platform has a plan for scalability ! [https://ergoforum.org/t/a-scalability-plan-for-ergo/226…](https://t.co/Aw9NS1tTo3?amp=1) [#dailyergofact](https://twitter.com/hashtag/dailyergofact?src=hashtag_click) [$erg](https://twitter.com/search?q=%24erg&src=cashtag_click)

---

### Post #67 — @Martin-mx (2020-06-09)

Weekly chats in the Ergo community become more and more crowded and hot [#dailyergofact](https://twitter.com/hashtag/dailyergofact?src=hashtag_click) [$erg](https://twitter.com/search?q=%24erg&src=cashtag_click)

---

### Post #68 — @Martin-mx (2020-06-09)

Some people in the community already have deeper understanding of smart contracts in Ergo than ErgoTree & ErgoScript designers likely ) today’s example [https://ergoforum.org/t/secure-user-entry-bootstrap-funneling-in-multi-stage-protocols/228…](https://t.co/msktGSPCvF?amp=1) [#dailyergofact](https://twitter.com/hashtag/dailyergofact?src=hashtag_click) [$erg](https://twitter.com/search?q=%24erg&src=cashtag_click)

---

### Post #69 — @Martin-mx (2020-06-09)

Devs, want to play with Ergo contracts during the weekend? This playground (not supporting context vars yet unfortunately) [https://ergoforum.org/t/ergo-p2s-playground/77…](https://t.co/1qPRlUBgTG?amp=1) and ErgoScript whitepaper [https://ergoplatform.org/docs/ErgoScript.pdf…](https://t.co/TSXmedtwwc?amp=1) for you! [#dailyergofact](https://twitter.com/hashtag/dailyergofact?src=hashtag_click) [$erg](https://twitter.com/search?q=%24erg&src=cashtag_click)

---

### Post #70 — @Martin-mx (2020-06-09)

Building applications on top of Ergo, a natural business model is to use a custom fee token , like [https://ergoforum.org/t/paying-fee-in-ergomix-in-primary-tokens/73…](https://t.co/V6Gm0LZSSx?amp=1) [#dailyergofact](https://twitter.com/hashtag/dailyergofact?src=hashtag_click) [$erg](https://twitter.com/search?q=%24erg&src=cashtag_click)

---

### Post #71 — @Martin-mx (2020-06-09)

Non-interactive mixing fixes this [#dailyergofact](https://twitter.com/hashtag/dailyergofact?src=hashtag_click) [$erg](https://twitter.com/search?q=%24erg&src=cashtag_click)

<https://twitter.com/SamouraiWallet/status/1267437708105994242>

---

### Post #72 — @Martin-mx (2020-06-09)

[@ergoplatformorg](https://twitter.com/ergoplatformorg) protocol enforces to put some ERG in every output, thus sending tokens to anyone, you should also send him some ERGs.

[@coinbarn](https://twitter.com/coinbarn) considers these coins as a part of the fee, that’s why it’s transaction fee is shown as 0.0011 ERG rather than 0.001. [#dailyergofact](https://twitter.com/hashtag/dailyergofact?src=hashtag_click)

<https://twitter.com/coinbarn/status/1268454893276332032>

---

### Post #73 — @Martin-mx (2020-06-09)

Another hacker tool for Ergo Platform is Kiosk [https://ergoforum.org/t/issuing-a-new-token-using-kiosk/234…](https://t.co/LQCmkC334S?amp=1) [#dailyergofact](https://twitter.com/hashtag/dailyergofact?src=hashtag_click) [$erg](https://twitter.com/search?q=%24erg&src=cashtag_click)

<https://twitter.com/chepurnoy/status/1270076245724798981>

---

### Post #74 — @Martin-mx (2020-06-10)

“Extended UTXO systems enable full fledged turing complete (across transactions) smart contracts”

<https://twitter.com/chepurnoy/status/1270808501812703234>

---

### Post #75 — @Martin-mx (2020-06-14)

“In Ergo, there are no coinbase transactions, implicit fees, and so no tricky security issues like [https://bitcoinops.org/en/newsletters/2020/06/10/#fee-overpayment-attack-on-multi-input-segwit-transactions…](https://t.co/AbTjhIRlQF?amp=1)”

<https://twitter.com/chepurnoy/status/1272204911007215617>

---

### Post #76 — @Martin-mx (2020-06-28)

"In one week, Ergo miners raised computational cost limit per block from 1.58M to 1.628M (+3%) without any recommendations from devs. "

<https://twitter.com/chepurnoy/status/1274348728283992071>

---

### Post #77 — @Martin-mx (2020-06-28)

" Storage rent is Ergo Platform plan to stabilize mining income in the long-term (and also to tackle with blockchain bloat), and now explained with details [https://ergoforum.org/t/storage-rent-details/256…](https://t.co/V6rzRpJHLN?amp=1)"

<https://twitter.com/chepurnoy/status/1275019912797396994>

---

### Post #78 — @Martin-mx (2020-06-28)

“ErgoMix (aka ZeroJoin) implementations are the first applications of ring signatures in Ergo Platform”

<https://twitter.com/chepurnoy/status/1275547525718687746>

---

### Post #79 — @Martin-mx (2020-06-28)

“Ergo Platform is not selling TPS numbers, miners can set any number eventually.”

<https://twitter.com/chepurnoy/status/1276240103896211456>

---

### Post #80 — @Martin-mx (2020-06-28)

“Self-Sovereign DeFi [https://ergoforum.org/t/self-sovereign-defi/260…](https://t.co/j3fj6RcScO?amp=1) UTXO contracts friendly to flexibility of interactions!”

<https://twitter.com/chepurnoy/status/1276639328727425024>

---

### Post #81 — @Martin-mx (2020-07-02)

“ErgoMixer GUI is using a token under the hood, for a good reason (eliminating privacy leaks caused by mining fees to be paid), making some profit , but no ICO and other shady things. Tokens could be good (also, unnoticed by users thanks to nice UI)”

<https://twitter.com/chepurnoy/status/1278726572674072577>

---

### Post #82 — @Martin-mx (2020-07-29)

[twitter.com](https://twitter.com/chepurnoy/status/1285579142310887424)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a40119d1a28319f4ae588edd820ad25e965277ba.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1285579142310887424)

In addition to ErgoScript, you can write contracts for Ergo Platform in ErgoScala (a subset of Scala language), see https://t.co/wyNcnCbI8x #dailyergofact $erg

[7:15 AM - 21 Jul 2020](https://twitter.com/chepurnoy/status/1285579142310887424)

 19

 9

[twitter.com](https://twitter.com/chepurnoy/status/1280574913921851394)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1280574913921851394)

sigma-rust (by @greenden ) already has 2 users in the middle of development . Join the open-source Ergo movement! #dailyergofact $ergo

[11:50 AM - 7 Jul 2020](https://twitter.com/chepurnoy/status/1280574913921851394)

 16

 3

[twitter.com](https://twitter.com/chepurnoy/status/1280901151463014402)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1280901151463014402)

Difficulty recalculation works perfectly in Ergo, anniversary block #262,800 appeared on June, 30th instead of July, 1st, so less than 1% error over the year #dailyergofact $erg

[9:26 AM - 8 Jul 2020](https://twitter.com/chepurnoy/status/1280901151463014402)

 20

 2

[twitter.com](https://twitter.com/chepurnoy/status/1288239392088358915)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ad74ce842d59d2698c86cdecdffa390d96b2cce.png)

#### [Alex Chepurnoy (chepurnoy)](https://twitter.com/chepurnoy/status/1288239392088358915)

Most of consensus-critical rules of the Ergo protocol are explicitly stated in one file, ValidationRules.scala: https://t.co/g24kVXipkt #dailyergofact $erg

[3:26 PM - 28 Jul 2020](https://twitter.com/chepurnoy/status/1288239392088358915)

 6

 2

---

### Post #83 — @Martin-mx (2020-09-25)

[twitter.com](https://twitter.com/ergoplatformorg/status/1309245427020161024)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/841241c0542986c94b7829642295e0ed2d8a8fbf.jpeg)

#### [Ergo (ergoplatformorg)](https://twitter.com/ergoplatformorg/status/1309245427020161024)

The first #PoW-backed #NFT token has been issued on Ergo👀
https://t.co/7V1eDyFd25

[2:36 PM - 24 Sep 2020](https://twitter.com/ergoplatformorg/status/1309245427020161024)

 60

 17
