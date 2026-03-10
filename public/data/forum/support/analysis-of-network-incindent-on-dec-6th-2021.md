---
title: Analysis of network incindent on Dec, 6th, 2021
description: 'ErgoForum discussion: Analysis of network incindent on Dec, 6th, 2021'
tags:
- ergoforum
- ergotree
- soft-fork
- support
- transaction
category: forum
forum_category: Support
source: ergoforum
source_url: https://ergoforum.org/t/analysis-of-network-incindent-on-dec-6th-2021/3071
created: '2021-12-06'
last_activity: '2021-12-23'
posts_count: 3
views: 1126
likes: 7
glossary_hits:
- ErgoTree
- Soft fork
- Transaction
---

# Analysis of network incindent on Dec, 6th, 2021

> **Forum thread:** [https://ergoforum.org/t/analysis-of-network-incindent-on-dec-6th-2021/3071](https://ergoforum.org/t/analysis-of-network-incindent-on-dec-6th-2021/3071)
> **Category:** Support | **Created:** 2021-12-06 | **Posts:** 3 | **Views:** 1126

**Related concepts:** ErgoTree, Soft fork, Transaction

---

### Post #1 — @kushti (2021-12-06)

Really weird thing happened on Dec, 6th, 2021, between 4 and 7 AM UTC. Somehow miners generate blocks which failed validation (except of few ones generated with no transactions and finished in the widely recognized blockchain).

In short, the issue was about a transaction which passed checks during block generation but then failed verification on other nodes with an error during AOT costing, the most complex part of the ErgoTree interpreter. Unfortunately, logs did not contain full information to replay the issue with confidence. After some time the tx got into a block which passed validation.

While we’re still doing investigation, we recommend miners to update to a minor release 4.0.16.1 [Release Ergo Protocol Reference Client 4.0.16.1 · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/releases/tag/v4.0.16.1) , which tries to use interpreter during candidate generation in the same way as during block verification, also fixing possible context inconsistency issues. This version also dumping execution context into logs when transaction verification fails, to make verification easily reproducible with logs given.

However, complexity of interpreter with AOT costing is a problem per se, thus we will propose 5.0 soft-fork introducing simplified interpreter with JIT costing soon. Another long-term direction to follow is to incentivize developing alternative block assemblers.

---

### Post #2 — @Ergosmergo (2021-12-07)

Is this hiccup what caused a large amount of hash rate to drop yesterday? developing alternative block assemblers is a very good idea.

[![ergohashdrop](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/2/20e3cd15d1f1625077b8b795a33f1ec2270f6b9e_2_690x292.png)

ergohashdrop1151×488 50.1 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/2/20e3cd15d1f1625077b8b795a33f1ec2270f6b9e.png "ergohashdrop")

---

### Post #3 — @glasgowm (2021-12-23)

Believe this chart is inaccurate and was due to 2miners being out of sync. Drop was about half that.
