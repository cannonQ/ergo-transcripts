---
title: Ergo Mainnet 3.2.0 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.2.0 Release'
tags:
- announcements
- avl-tree
- bootstrapping
- box
- ergoforum
- ergoscript-context
- full-node
- native-tokens
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-2-0-release/160
created: '2020-01-07'
last_activity: '2020-01-07'
posts_count: 1
views: 582
likes: 2
glossary_hits:
- AVL tree
- Bootstrapping
- Box
- ErgoScript context
- Full node
- Native tokens
---

# Ergo Mainnet 3.2.0 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-2-0-release/160](https://ergoforum.org/t/ergo-mainnet-3-2-0-release/160)
> **Category:** Announcements | **Created:** 2020-01-07 | **Posts:** 1 | **Views:** 582

**Related concepts:** AVL tree, Bootstrapping, Box, ErgoScript context, Full node, Native tokens

---

### Post #1 — @Martin-mx (2020-01-07)

**Attention!** This version contains breaking changes in database structure, so please remove “state”, “history”, “wallet/registry” in your data folder (.ergo by default), and do re-sync. If you did not make derived keys, you can delete the whole folder and recover from mnemonic. Please unlock wallet before the height of the first tokens retrieval!

Main changes:

* PR [#969](https://github.com/ergoplatform/ergo/pull/969) , [#1011](https://github.com/ergoplatform/ergo/pull/1011) - LevelDB is used now for storing the state (UTXO set + authenticated AVL+ tree on top of it)
* PR [#1004](https://github.com/ergoplatform/ergo/pull/1004) - a fix for light mode with blocksToKeep set (pruning switched on)

Additionally (fixes for minor issues not related to client functionality):

* PR [#1010](https://github.com/ergoplatform/ergo/pull/1010) - support for native-image generation in ergo-wallet
* PR [#997](https://github.com/ergoplatform/ergo/pull/997) - from now every new release will be checked for bootstrapping in 3 full-node regimes (w. UTXO set, w/out UTXO set, w/out UTXO set and blockchain pruning)
* PR [#1014](https://github.com/ergoplatform/ergo/pull/1014) - improvements and fixes in ergo-installer.sh
* PR [#1015](https://github.com/ergoplatform/ergo/pull/1015) - fix for Docker build
* PR [#1016](https://github.com/ergoplatform/ergo/pull/1016) - fix for empty gitHeadCommit (minor building issue)

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.2.0)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.2.0)

Ergo protocol description & reference client implementation - ergoplatform/ergo
