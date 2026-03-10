---
title: L0 & L1 improvements plan
description: 'ErgoForum discussion: L0 & L1 improvements plan'
tags:
- bootstrapping
- ergoforum
- full-node
- nipopow
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/l0-l1-improvements-plan/374
created: '2020-09-13'
last_activity: '2020-09-16'
posts_count: 2
views: 1058
likes: 8
glossary_hits:
- Bootstrapping
- Full node
- NiPoPoW
---

# L0 & L1 improvements plan

> **Forum thread:** [https://ergoforum.org/t/l0-l1-improvements-plan/374](https://ergoforum.org/t/l0-l1-improvements-plan/374)
> **Category:** Uncategorized | **Created:** 2020-09-13 | **Posts:** 2 | **Views:** 1058

**Related concepts:** Bootstrapping, Full node, NiPoPoW

---

### Post #1 — @kushti (2020-09-13)

It is a good time to start working towards the scalability plan ([A Scalability Plan for Ergo](https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226)). As it is too early likely to have concrete plans for offchain and sidechain solutions (they will depend on applications profile), I am going to provide a sketch for networking (L0) and blockchain processing (L1) improvements which we can done in coming months:

## Networking Layer

Currently this layer is not efficient. Some issues already resolved recently ( <https://github.com/ergoplatform/ergo/pull/1166> ), what’s ahead:

* P2P layer documentation ( <https://github.com/ergoplatform/ergo/issues/1151> ), needed for some applications as well, e.g. Cypra guys asking for it
* Improve syncing process. Currently syncing messages are large, and the process is not efficient.
* Improve propagation of new blocks. Currently a node generating a block is announcing identifiers of the block sections , while in e.g. Bitcoin it sends the sections immediately
* Consider what other nodes have. E.g. do not ask digest nodes for proofs, pruned nodes for blocks etc. Let’s call it smart *downloading*.

## Blockchain Clients (L1)

* After the smart downloading is done, we can promote stateless clients. Some problems found with light clients also needed to be resolved (<https://github.com/ergoplatform/ergo/issues/1176> , <https://github.com/ergoplatform/ergo/issues/1159> ).
* Nipopow bootstrapping.

Nipopow bootstrapping + stateless clients give possibility to bootstrap a node with full-node security basically within few minutes.

---

### Post #2 — @jasondavies (2020-09-16)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> Nipopow bootstrapping + stateless clients give possibility to bootstrap a node with full-node security basically within few minutes.

This would be amazing.
