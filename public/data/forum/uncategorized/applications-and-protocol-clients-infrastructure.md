---
title: Applications and protocol clients infrastructure
description: 'ErgoForum discussion: Applications and protocol clients infrastructure'
tags:
- addresses
- box
- eip
- ergoforum
- full-node
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/applications-and-protocol-clients-infrastructure/289
created: '2020-08-04'
last_activity: '2020-08-04'
posts_count: 1
views: 449
likes: 4
glossary_hits:
- Addresses
- Box
- EIP
- Full node
- Transaction
---

# Applications and protocol clients infrastructure

> **Forum thread:** [https://ergoforum.org/t/applications-and-protocol-clients-infrastructure/289](https://ergoforum.org/t/applications-and-protocol-clients-infrastructure/289)
> **Category:** Uncategorized | **Created:** 2020-08-04 | **Posts:** 1 | **Views:** 449

**Related concepts:** Addresses, Box, EIP, Full node, Transaction

---

### Post #1 — @kushti (2020-08-04)

Ergo already has a lot of signing facilities: Ergo node, web-wallets (Magnum, UrlWallet for hackers), desktop wallets (CoinBarn, Cypra and one more coming), with different entities stored (nothing stored, UTXOs stored with access by id only, address -> UTXO index stored, full history stored for all the addresses etc). Ledger is coming.

And we have applications coming, currently they store secrets inside (like in mixer), but usually an application will send an unsigned transaction to a signing facility to sign.

So let’s specify some signing protocol, also a protocol to get storage capabilities of a signing facility.

I am not very proficient in such things, how can we can maximally unified protocol for all the signing facilities? Anyone can do an EIP?
