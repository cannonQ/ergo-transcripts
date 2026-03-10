---
title: Ergo Mainnet 3.2.3 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.2.3 Release'
tags:
- announcements
- box
- box-selection
- data-input
- ergoforum
- ergoscript-context
- transaction
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-2-3-release/216
created: '2020-05-18'
last_activity: '2020-05-18'
posts_count: 1
views: 649
likes: 1
glossary_hits:
- Box
- Box selection
- Data input
- ErgoScript context
- Transaction
---

# Ergo Mainnet 3.2.3 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-2-3-release/216](https://ergoforum.org/t/ergo-mainnet-3-2-3-release/216)
> **Category:** Announcements | **Created:** 2020-05-18 | **Posts:** 1 | **Views:** 649

**Related concepts:** Box, Box selection, Data input, ErgoScript context, Transaction

---

### Post #1 — @Martin-mx (2020-05-18)

Version 3.2.3. It is including following features and fixes:

* Transaction signing with secrets provided (/wallet/transaction/sign) (PR [#1089](https://github.com/ergoplatform/ergo/pull/1089) )
* Allow unconfirmed boxes to be spent via /transactions API method call (PR [#1092](https://github.com/ergoplatform/ergo/pull/1092) )
* /transactions/check API method to check a transaction without propagating it (PR [#1091](https://github.com/ergoplatform/ergo/pull/1091) )
* Data inputs added to API methods /wallet/transaction/{generate, sent} ( PR [#1086](https://github.com/ergoplatform/ergo/pull/1086) )
* Setting up native LevelDB buffer (for better performance) ( PR [#1073](https://github.com/ergoplatform/ergo/pull/1073) )
* Fixing rounding issues in /panel (PR [#1087](https://github.com/ergoplatform/ergo/pull/1087))
* Implementation of transaction membership proof and extension element proof (PR [#1076](https://github.com/ergoplatform/ergo/pull/1076) [#1081](https://github.com/ergoplatform/ergo/pull/1081) )
* Extract abstract box selection and add transaction building (PR [#1071](https://github.com/ergoplatform/ergo/pull/1071) )
* Fixing some typos in openapi.yaml (PR [#1088](https://github.com/ergoplatform/ergo/pull/1088) )
* build.sbt: Upgrade an http resolver to https (PR [#1098](https://github.com/ergoplatform/ergo/pull/1098) )

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.2.3)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.2.3)

Ergo protocol description & reference client implementation - ergoplatform/ergo
