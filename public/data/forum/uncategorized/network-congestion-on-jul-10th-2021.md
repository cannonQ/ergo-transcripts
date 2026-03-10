---
title: Network congestion on Jul, 10th, 2021
description: 'ErgoForum discussion: Network congestion on Jul, 10th, 2021'
tags:
- ergoforum
- ergoscript-context
- full-node
- mempool
- oracle-pools
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/network-congestion-on-jul-10th-2021/1945
created: '2021-07-12'
last_activity: '2021-07-14'
posts_count: 3
views: 724
likes: 4
glossary_hits:
- ErgoScript context
- Full node
- Mempool
- Oracle pools
- Transaction
---

# Network congestion on Jul, 10th, 2021

> **Forum thread:** [https://ergoforum.org/t/network-congestion-on-jul-10th-2021/1945](https://ergoforum.org/t/network-congestion-on-jul-10th-2021/1945)
> **Category:** Uncategorized | **Created:** 2021-07-12 | **Posts:** 3 | **Views:** 724

**Related concepts:** ErgoScript context, Full node, Mempool, Oracle pools, Transaction

---

### Post #1 — @kushti (2021-07-12)

On July, 10th, 2021, there was network congestion caused many transactions to stuck in the mempool for many hours with a lot of bad side-effects (oracle pools not updating prices, RSV minting stuck etc).

The anatomy of the issue was as follows:

* [gate.io](http://gate.io) exchange started to collect miners dust for many months. Every transaction had 100 inputs. There were hundreds of txs.
* the exchange paid 0.01/kilobyte for collecting transactions
* currently, all the miners rely on the node to assemble block candidates. And block assembler simply sort transactions by fee/kilobyte.
* applications are not flexible. Some time ago fee estimation API got landed into the node (in 4.0.3 release <https://github.com/ergoplatform/ergo/pull/1253> ), but it is still not used by any app it seems.
* many blocks were empty at the same time

So many transactions did wait for (inefficient) inclusion of [gate.io](http://gate.io) transactions for long time.

Mitigation plan:

1. There will be a fix for block assembly to reduce number of empty blocks. Already done and will be landed in 4.0.13.
2. Transactions sort order for inclusion should not be strictly deterministic. As for some time all the miners will use the node only, its block assembler should be randomized to certain degree.
3. Verification cost for a transaction should be reflected in fee.
4. Ideally, apps should start using fee estimation algos instead of setting flat fee. That would take long time though.

---

### Post #2 — @bigoogawoogla (2021-07-13)

Sorry for my ignorance. How does them pushing 10,000+ txs at 0.01erg/kilobyte congest the network? Couldn’t others on the network just pay slightly higher fees?

Without knowing how many kilobytes per transaction, this seems like the network could be pretty susceptible to intentional transaciton spam attacks. Could it be that the network will just need to get bigger for that to not be the case?

---

### Post #3 — @WilfordGrimley (2021-07-14)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> Ideally, apps should start using fee estimation algos instead of setting flat fee. That would take long time though.

I’ll wrap this into my SmartPools research out of necessity.
