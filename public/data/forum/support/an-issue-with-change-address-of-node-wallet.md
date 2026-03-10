---
title: An Issue With Change address of Node Wallet
description: 'ErgoForum discussion: An Issue With Change address of Node Wallet'
tags:
- addresses
- eip
- ergoforum
- full-node
- support
category: forum
forum_category: Support
source: ergoforum
source_url: https://ergoforum.org/t/an-issue-with-change-address-of-node-wallet/2940
created: '2021-11-10'
last_activity: '2021-11-10'
posts_count: 1
views: 395
likes: 0
glossary_hits:
- Addresses
- EIP
- Full node
---

# An Issue With Change address of Node Wallet

> **Forum thread:** [https://ergoforum.org/t/an-issue-with-change-address-of-node-wallet/2940](https://ergoforum.org/t/an-issue-with-change-address-of-node-wallet/2940)
> **Category:** Support | **Created:** 2021-11-10 | **Posts:** 1 | **Views:** 395

**Related concepts:** Addresses, EIP, Full node

---

### Post #1 — @kushti (2021-11-10)

A lot of complaints were given on a change address to be used which is not shown in the node (but balance is correct, at least, after rescan). Affected version are 4.0.13 - 4.0.15.

Since very early versions, Ergo node used root secret key (derived from seed) for change address. After switching to EIP-3, supported by CoinBarn and Yoroi around that time, the node switched to the same change address as in the wallets, thus derived address corresponding to *m/44’/429’/0’/0/0*.

A bug introduced during wallet refactoring made change address to be corresponding to the root secret again.

The issue is fixed in [Change address fix by kushti · Pull Request #1488 · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/pull/1488) , merged into upcoming 4.0.16 release.

If no address was derived in the wallet, the wallet will try to fix change address under the hood.

Please note, that a public key corresponding to the root secret is still tracked (and will be so).
