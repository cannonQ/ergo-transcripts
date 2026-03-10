---
title: Ergo Mainnet 3.0.3 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.0.3 Release'
tags:
- announcements
- box
- ergoforum
- ergoscript-context
- full-node
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-0-3-release/47
created: '2019-07-18'
last_activity: '2019-07-18'
posts_count: 1
views: 485
likes: 1
glossary_hits:
- Box
- ErgoScript context
- Full node
---

# Ergo Mainnet 3.0.3 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-0-3-release/47](https://ergoforum.org/t/ergo-mainnet-3-0-3-release/47)
> **Category:** Announcements | **Created:** 2019-07-18 | **Posts:** 1 | **Views:** 485

**Related concepts:** Box, ErgoScript context, Full node

---

### Post #1 — @Martin-mx (2019-07-18)

This release is introducing new API methods:

* /blocks/chainSlice to get headers in a specified range
* /utxo/byId to get box by an id (if the node is holding UTXO set, e.g. working in “utxo” mode)
* /utxo/byIdBinary to get hex-encoded box bytes by an id (if the node is holding UTXO set, e.g. working in “utxo” mode)
* /utxo/genesis to get genesis state of the blockchain (before the genesis block)

Also, optimizations made in 3.0.2 made “height” field in /wallet/balances showing height of a last block affecting the wallet. This behavior has been reverted, so the “height” field shows current height now.

No database reset is needed!

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.0.3)

![](https://avatars1.githubusercontent.com/u/27490654?s=400&v=4)

### [ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.0.3)

Ergo protocol description & reference client implementation - ergoplatform/ergo
