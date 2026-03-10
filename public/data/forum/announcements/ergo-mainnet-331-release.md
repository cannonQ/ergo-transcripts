---
title: Ergo Mainnet 3.3.1 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.3.1 Release'
tags:
- announcements
- box
- eip
- eip-4
- ergoforum
- ergoscript
- full-node
- transaction
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-3-1-release/343
created: '2020-08-20'
last_activity: '2020-08-20'
posts_count: 1
views: 550
likes: 0
glossary_hits:
- Box
- EIP
- EIP-4
- ErgoScript
- Full node
- Transaction
---

# Ergo Mainnet 3.3.1 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-3-1-release/343](https://ergoforum.org/t/ergo-mainnet-3-3-1-release/343)
> **Category:** Announcements | **Created:** 2020-08-20 | **Posts:** 1 | **Views:** 550

**Related concepts:** Box, EIP, EIP-4, ErgoScript, Full node, Transaction

---

### Post #1 — @Martin-mx (2020-08-20)

Ergo protocol reference client 3.3.1. It includes following PRs:

```ergoscript
#1170: /scan/addBox endpoint to add a box to scans, or change scans of a box (including transferring it to the wallet by setting scanIds to contain 10, which is wallet's scan id)
#1166: fixes for transaction downloading: the node now is not downloading transactions during the sync (#1146), and asking a peer for a transaction only once (#1137)
#1162: /wallet/rescan API endpoint added to rescan the wallet
#1168: /wallet/transactions endpoint now shows only wallet-related transactions
#1142: decimals encoding changed according to EIP-4 
#1167: easier migration from 3.2 for wallets with a single root key just
#1163: unused code and dependencies removed, including code for no-premine proof generation ceremony
#1172: fixes for some texts in the UI panel
```

Migration from 3.2:

```ergoscript
If you're running 3.2.x node, just remove wallet/registry subfolder in your ergo data folder (e.g. ~/.ergo). Unlock the wallet after running the node (you can lock it a minute later).
```

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.3.1)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [Release Ergo Platform Reference Client 3.3.1 · ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.3.1)

Ergo protocol reference client 3.3.1. It includes following PRs:
#1170: /scan/addBox endpoint to add a box to scans, or change scans of a box (including transferring it to the wallet by setting sc...
