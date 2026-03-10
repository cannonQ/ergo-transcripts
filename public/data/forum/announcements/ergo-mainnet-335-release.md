---
title: Ergo Mainnet 3.3.5 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.3.5 Release'
tags:
- announcements
- box
- ergoforum
- ergoscript
- mempool
- transaction
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-3-5-release/436
created: '2020-10-24'
last_activity: '2020-10-24'
posts_count: 1
views: 482
likes: 1
glossary_hits:
- Box
- ErgoScript
- Mempool
- Transaction
---

# Ergo Mainnet 3.3.5 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-3-5-release/436](https://ergoforum.org/t/ergo-mainnet-3-3-5-release/436)
> **Category:** Announcements | **Created:** 2020-10-24 | **Posts:** 1 | **Views:** 482

**Related concepts:** Box, ErgoScript, Mempool, Transaction

---

### Post #1 — @Martin-mx (2020-10-24)

Ergo protocol client 3.3.5. It includes following PRs:

```ergoscript
#1224 : inactive connections being dropped, last seen message time added to /info
#1223 : Consider mempool if minConfirmations==-1 in /wallet/boxes and /wallet/boxes/unspent
#1213 : Fix for #1165 : double-spending transactions not allowed in mempool (with RBF replacement strategy)
#1220 : Fix for panel issues during wallet init/restore (issue #1212 )
```

For update from 3.2.x and 3.3.x (where x < 4), see migration notes in <https://github.com/ergoplatform/ergo/releases/tag/v3.3.0> and <https://github.com/ergoplatform/ergo/releases/tag/v3.3.4>

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.3.5)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [Release Ergo Protocol Reference Client 3.3.5 · ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.3.5)

Ergo protocol client 3.3.5. It includes following PRs:
#1224 : inactive connections being dropped, last seen message time added to /info
#1223 : Consider mempool if minConfirmations==-1 in /wallet/...
