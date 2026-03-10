---
title: Ergo Mainnet 3.0.6 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.0.6 Release'
tags:
- announcements
- box
- ergoforum
- ergoscript-context
- transaction
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-0-6-release/56
created: '2019-08-06'
last_activity: '2019-08-06'
posts_count: 1
views: 606
likes: 0
glossary_hits:
- Box
- ErgoScript context
- Transaction
---

# Ergo Mainnet 3.0.6 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-0-6-release/56](https://ergoforum.org/t/ergo-mainnet-3-0-6-release/56)
> **Category:** Announcements | **Created:** 2019-08-06 | **Posts:** 1 | **Views:** 606

**Related concepts:** Box, ErgoScript context, Transaction

---

### Post #1 — @Martin-mx (2019-08-06)

This release includes:

* filter for cumulative transaction input scripts complexity for the miners (PR [#829](https://github.com/ergoplatform/ergo/pull/829))
* wallet now does not try to spend already spent but unconfirmed outputs (PR [#859](https://github.com/ergoplatform/ergo/pull/859) )
* updated /wallet/transaction/generate (and /wallet/transaction/send) request now allows to specify boxes to spend (useful for external applications), also, the following API methods removed (use generic /wallet/transaction/… instead): /wallet/payment/generate, /wallet/assets/issue, /wallet/assets/generate (PR [#840](https://github.com/ergoplatform/ergo/pull/840) )
* Swagger UI updated

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.0.6)

![](https://avatars1.githubusercontent.com/u/27490654?s=400&v=4)

### [ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.0.6)

Ergo protocol description & reference client implementation - ergoplatform/ergo
