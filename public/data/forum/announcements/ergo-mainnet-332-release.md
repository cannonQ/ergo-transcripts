---
title: Ergo Mainnet 3.3.2 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.3.2 Release'
tags:
- announcements
- box
- ergoforum
- ergoscript
- full-node
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-3-2-release/371
created: '2020-09-11'
last_activity: '2020-09-11'
posts_count: 1
views: 543
likes: 4
glossary_hits:
- Box
- ErgoScript
- Full node
---

# Ergo Mainnet 3.3.2 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-3-2-release/371](https://ergoforum.org/t/ergo-mainnet-3-3-2-release/371)
> **Category:** Announcements | **Created:** 2020-09-11 | **Posts:** 1 | **Views:** 543

**Related concepts:** Box, ErgoScript, Full node

---

### Post #1 — @Martin-mx (2020-09-11)

* [#1182](https://github.com/ergoplatform/ergo/pull/1182) : Dockerfile: configurable java heap
* wallet/boxes fix. This API method now correctly return all the wallet boxes, spent or not.
* wallet scan has been reworked to have improved efficiency and memory footprint

Migration from 3.2.x:

```ergoscript
If you're running 3.2.x node, just remove wallet/registry subfolder in your ergo data folder (e.g. ~/.ergo). Unlock the wallet after running the node (you can lock it a minute later).
```

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.3.2)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [Release Ergo Platform Reference Client 3.3.2 · ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.3.2)

Ergo protocol reference client 3.3.1. It includes following changes:
#1182 : Dockerfile: configurable java heap
wallet/boxes fix. This API method now correctly return all the wallet boxes, spent o...
