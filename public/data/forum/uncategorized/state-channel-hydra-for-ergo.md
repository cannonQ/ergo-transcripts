---
title: State channel (Hydra) for Ergo
description: 'ErgoForum discussion: State channel (Hydra) for Ergo'
tags:
- box
- ergoforum
- full-node
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/state-channel-hydra-for-ergo/4446
created: '2023-08-16'
last_activity: '2023-08-16'
posts_count: 1
views: 304
likes: 4
glossary_hits:
- Box
- Full node
- Transaction
---

# State channel (Hydra) for Ergo

> **Forum thread:** [https://ergoforum.org/t/state-channel-hydra-for-ergo/4446](https://ergoforum.org/t/state-channel-hydra-for-ergo/4446)
> **Category:** Uncategorized | **Created:** 2023-08-16 | **Posts:** 1 | **Views:** 304

**Related concepts:** Box, Full node, Transaction

---

### Post #1 — @PGWAD (2023-08-16)

The Hydra paper <https://eprint.iacr.org/2020/299.pdf>  
From the paper  
“In more detail, in Hydra, a set of parties coordinates to commit a set of UTxOs (owned by the parties) into an offchain protocol, called the head protocol. That UTxO set constitutes the initial head state, which the parties can then evolve by handling smart contracts and transactions among themselves without blockchain interaction—in the optimistic case.”

The Cardano blockchain has the implementation of Hydra [Specification | Hydra: Head Protocol](https://hydra.family/head-protocol/core-concepts/specification)

The idea is to take these smart contract implementations and migrate them to Ergo. Certain nuances have to be taken care like time-locked transactions etc. But Ergo being PoW some of that is easier to solve.

I had a twitter thread about this. <https://twitter.com/PgwadaS/status/1691492007515164672>

One of the comments was “Hydra node implementation might even be reusable out of the box, as long as you guys adapt the smart contract portion of it and observer.”

So I am creating this topic for discussion.
