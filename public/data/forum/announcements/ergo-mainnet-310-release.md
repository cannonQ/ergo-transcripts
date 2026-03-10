---
title: Ergo Mainnet 3.1.0 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.1.0 Release'
tags:
- announcements
- box
- ergoforum
- full-node
- transaction
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-1-0-release/69
created: '2019-08-27'
last_activity: '2019-08-27'
posts_count: 1
views: 618
likes: 0
glossary_hits:
- Box
- Full node
- Transaction
---

# Ergo Mainnet 3.1.0 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-1-0-release/69](https://ergoforum.org/t/ergo-mainnet-3-1-0-release/69)
> **Category:** Announcements | **Created:** 2019-08-27 | **Posts:** 1 | **Views:** 618

**Related concepts:** Box, Full node, Transaction

---

### Post #1 — @Martin-mx (2019-08-27)

This version is introducing database layer changes. FULL RESYNC FROM SCRATCH IS NEEDED. Please remove your data folder (.ergo by default) before running the node.

IODB is replaced with LevelDB for blockchain and wallet storage. On testing machine this is resulting in significantly faster bootstrap & database takes few times less on a disk, also reduced memory footprint.

No changes in functionality, just “applicationId” field added to boxes and transactions tracked by the wallet.

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.1.0)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.1.0)

Ergo protocol description & reference client implementation - ergoplatform/ergo
