---
title: Ergo Mainnet 3.2.1 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.2.1 Release'
tags:
- announcements
- ergoforum
- ergoscript
- ergoscript-context
- full-node
- mempool
- scorex
- transaction
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-2-1-release/183
created: '2020-02-19'
last_activity: '2020-02-19'
posts_count: 1
views: 533
likes: 0
glossary_hits:
- ErgoScript
- ErgoScript context
- Full node
- Mempool
- Scorex
- Transaction
---

# Ergo Mainnet 3.2.1 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-2-1-release/183](https://ergoforum.org/t/ergo-mainnet-3-2-1-release/183)
> **Category:** Announcements | **Created:** 2020-02-19 | **Posts:** 1 | **Views:** 533

**Related concepts:** ErgoScript, ErgoScript context, Full node, Mempool, Scorex, Transaction

---

### Post #1 — @Martin-mx (2020-02-19)

**Please note that resync is needed if you are upgrading the node from 3.0.x or 3.1.x.**

This minor release includes:

It includes following PRs:

Ergo:  
[#1012](https://github.com/ergoplatform/ergo/pull/1012) and [#1045](https://github.com/ergoplatform/ergo/pull/1045) : mempool and miner made friendly to transactions spending outputs of offchain transactions  
[#1044](https://github.com/ergoplatform/ergo/pull/1044) : pure-Java LevelDB dependency got back (to make possible to run the node on 32-bit platforms such as Raspberry Pi, see [#1038](https://github.com/ergoplatform/ergo/issues/1038) )  
[#1042](https://github.com/ergoplatform/ergo/pull/1042): seed node list updates for both mainnet and testnet  
[#1020](https://github.com/ergoplatform/ergo/pull/1020): IODB dependency finally removed  
[#1019](https://github.com/ergoplatform/ergo/pull/1019): configurable parameter for syncing detection during headers-chain download

Scorex:

```ergoscript
ScorexFoundation/Scorex#361 - Circe updated to 0.9.0
ScorexFoundation/Scorex#359 - keep-alive flag removed from socket options
ScorexFoundation/Scorex#358 - improved banning of peers for sending inappropriate messages
ScorexFoundation/Scorex#355 - terminate application if port to bind is in use
```

![](https://github.githubassets.com/favicon.ico)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.2.1)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.2.1)

Ergo protocol description & reference client implementation - ergoplatform/ergo
