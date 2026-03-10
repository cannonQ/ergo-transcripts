---
title: Ergo Mainnet 3.2.5 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.2.5 Release'
tags:
- announcements
- box
- ergoforum
- ergoscript
- full-node
- storage-rent
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-2-5-release/225
created: '2020-05-26'
last_activity: '2020-05-26'
posts_count: 1
views: 653
likes: 2
glossary_hits:
- Box
- ErgoScript
- Full node
- Storage rent
---

# Ergo Mainnet 3.2.5 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-2-5-release/225](https://ergoforum.org/t/ergo-mainnet-3-2-5-release/225)
> **Category:** Announcements | **Created:** 2020-05-26 | **Posts:** 1 | **Views:** 653

**Related concepts:** Box, ErgoScript, Full node, Storage rent

---

### Post #1 — @Martin-mx (2020-05-26)

Release 3.2.5. It contains:

```ergoscript
Support for offchain boxes spending ( #1032 )
Downloading logic fix for the case when best full block is not on the best header-chain
Improved storage rent tests ( #1114 )
```

Contributors: [@jasondavies](https://github.com/jasondavies) , [@kushti](https://github.com/kushti), [@polarker](https://github.com/polarker)

This version is recommended as it is resolving some possible stuck issues, see technical details below.

If your node running a previous version is stuck, just run this version and wait for some time (you can also restart it if its not starting to sync in 1-2 minutes, restart helps to find peers in the network having needed block, but the node will find them eventually anyway).

Some note on the issues, during fork download and processing best full-block and best header could be on different chain (there was an issue on that [#328](https://github.com/ergoplatform/ergo/issues/328) ), however, downloading logic considered that they are on the same chain. Currently it is fixed by downloading logic now considering children blocks in the past (for last 100 blocks), However, careful investigation and polishing of forking and downloading is needed.

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.2.5)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.2.5)

Ergo protocol description & reference client implementation - ergoplatform/ergo
