---
title: Ergo Mainnet 3.0.7 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.0.7 Release'
tags:
- addresses
- announcements
- box
- difficulty-adjustment
- ergoforum
- ergoscript
- full-node
- transaction
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-0-7-release/65
created: '2019-08-20'
last_activity: '2019-08-20'
posts_count: 1
views: 544
likes: 1
glossary_hits:
- Addresses
- Box
- Difficulty adjustment
- ErgoScript
- Full node
- Transaction
---

# Ergo Mainnet 3.0.7 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-0-7-release/65](https://ergoforum.org/t/ergo-mainnet-3-0-7-release/65)
> **Category:** Announcements | **Created:** 2019-08-20 | **Posts:** 1 | **Views:** 544

**Related concepts:** Addresses, Box, Difficulty adjustment, ErgoScript, Full node, Transaction

---

### Post #1 — @Martin-mx (2019-08-20)

This release is introducing new API methods and bugfixes, and also a new consensus rule for testnet only. Details are below.

The new /script API path is about providing access to scripting possibilities of the node and ErgoScript compiler.

* /wallet/with\_unconfirmed renamed into /wallet/withUnconfirmed
* /wallet/p2s\_address and /wallet/p2sh\_address API methods are moved into /script/p2sAddress and /script/p2shAddress
* new /script/addressToTree method to get serialized script for a box from address
* Fix for [#853](https://github.com/ergoplatform/ergo/issues/853) : “when trying to send transaction during the synchronization process, it is possible to achieve negative balance in wallet”
* Fix for [#875](https://github.com/ergoplatform/ergo/issues/875): improper UI description for “inputsRaw” parameter in transaction generation methods
* Fix for [#876](https://github.com/ergoplatform/ergo/issues/876): a filter for to prevent double spending of unconfirmed boxes introduced in 3.0.6 also filtered out user-provided boxes

Before mainnet launch difficulty got high in the testnet so now dev team can not generate blocks with our few GPUs. Thus we introduce the following breaking change in consensus for the testnet only.

* weaker difficulty validation rule for testnet: if there’s not block for 5 minutes then difficulty for a new block is set to 1

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.0.7)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.0.7)

Ergo protocol description & reference client implementation - ergoplatform/ergo
