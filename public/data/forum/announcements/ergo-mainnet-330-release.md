---
title: Ergo Mainnet 3.3.0 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.3.0 Release'
tags:
- addresses
- announcements
- box
- eip
- ergoforum
- full-node
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-3-0-release/307
created: '2020-08-08'
last_activity: '2020-08-08'
posts_count: 1
views: 538
likes: 0
glossary_hits:
- Addresses
- Box
- EIP
- Full node
---

# Ergo Mainnet 3.3.0 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-3-0-release/307](https://ergoforum.org/t/ergo-mainnet-3-3-0-release/307)
> **Category:** Announcements | **Created:** 2020-08-08 | **Posts:** 1 | **Views:** 538

**Related concepts:** Addresses, Box, EIP, Full node

---

### Post #1 — @Martin-mx (2020-08-08)

3.3.0 Release

It contains:

* EIP-1 support. EIP-1 is described at <https://github.com/ergoplatform/eips/blob/master/eip-0001.md>
* Rewritten wallet persistence
* Rewritten wallet scanning. Now the scan is using Bloom filters for P2PK (wallet) keys, external scans still use byte array comparisons mostly (slow). Also, there are not checks for scanning consistency.
* API method /wallet/check to check whether mnemonic corresponds to wallet’s seed
* API method /script/addressToBytes/{address} to convert an address to hex-encoded Sigma byte array constant which contains script bytes

Notes:

* 3.3.0 does not require for wallet to be unlocked. On the first on 3.2.x database unlock is needed though, to convert keys stored into new database format.
* it is possible to rescan wallet without full re-sync. However, currently manual deletion of wallet/registry subfolder in the data folder is needed. API endpoint will be added later (issue [#1161](https://github.com/ergoplatform/ergo/issues/1161))
* external scans are prioritized over the node wallet! So if P2PK protected box belongs to external scan, it is not recorded as wallet’s.
* manual addition of boxes to scan and the wallet will be added in 3.3.0

Migration:

* If you’re running 3.2.x node, just remove wallet/registry subfolder in your ergo data folder (e.g. ~/.ergo). Unlock the wallet after running the node (you can lock it a minute later). If you had only one key in your wallet, lock it and unlock again to have the master key unlocked.

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.3.0)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [Release Ergo Platform Reference Client 3.3.0 · ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.3.0)

3.3.0 Release
It contains:
EIP-1 support. EIP-1 is described at https://github.com/ergoplatform/eips/blob/master/eip-0001.md
Rewritten wallet persistence
Rewritten wallet scanning. Now the scan is...
