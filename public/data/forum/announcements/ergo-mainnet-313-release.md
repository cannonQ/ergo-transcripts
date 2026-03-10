---
title: Ergo Mainnet 3.1.3 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.1.3 Release'
tags:
- addresses
- announcements
- difficulty-adjustment
- ergoforum
- ergoscript
- ergotree
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-1-3-release/121
created: '2019-10-29'
last_activity: '2019-10-29'
posts_count: 1
views: 618
likes: 2
glossary_hits:
- Addresses
- Difficulty adjustment
- ErgoScript
- ErgoTree
---

# Ergo Mainnet 3.1.3 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-1-3-release/121](https://ergoforum.org/t/ergo-mainnet-3-1-3-release/121)
> **Category:** Announcements | **Created:** 2019-10-29 | **Posts:** 1 | **Views:** 618

**Related concepts:** Addresses, Difficulty adjustment, ErgoScript, ErgoTree

---

### Post #1 — @Martin-mx (2019-10-29)

This release contains simplified Wallet UI (available by default at <http://127.0.0.1:9053/panel>), improved memory footprint due to more efficient ErgoTree interpreter, and some bugfixes:

* Native LevelDB library loading failure handling (PR [#950](https://github.com/ergoplatform/ergo/pull/950) )
* Testnet difficulty fallback procedure removed (PR [#948](https://github.com/ergoplatform/ergo/pull/948) )
* Simplified wallet UI (PR [#943](https://github.com/ergoplatform/ergo/pull/943) )
* Updated ErgoTree interpreter and ErgoScript compiler (ver. 3.1.0) (PR [#852](https://github.com/ergoplatform/ergo/pull/852) ). This version should have improved memory footprint because of that.
* Fix for [#955](https://github.com/ergoplatform/ergo/issues/955): example values in /utils/{hash/blake2b, seed, seed/{length}} are without required quotes (PR [#956](https://github.com/ergoplatform/ergo/pull/956))
* Now wallet uses root address as a default one for a change instead of random one (PR [#954](https://github.com/ergoplatform/ergo/pull/954))

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.1.3)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.1.3)

Ergo protocol description & reference client implementation - ergoplatform/ergo
