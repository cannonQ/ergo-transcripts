---
title: Data Inputs Semantics
description: 'ErgoForum discussion: Data Inputs Semantics'
tags:
- box
- data-input
- ergoforum
- ergoscript-context
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/data-inputs-semantics/654
created: '2021-02-13'
last_activity: '2021-02-13'
posts_count: 3
views: 818
likes: 4
glossary_hits:
- Box
- Data input
- ErgoScript context
- Transaction
---

# Data Inputs Semantics

> **Forum thread:** [https://ergoforum.org/t/data-inputs-semantics/654](https://ergoforum.org/t/data-inputs-semantics/654)
> **Category:** Uncategorized | **Created:** 2021-02-13 | **Posts:** 3 | **Views:** 818

**Related concepts:** Box, Data input, ErgoScript context, Transaction

---

### Post #1 — @kushti (2021-02-13)

Ergo derives from Bitcoin UTXO model, where a transaction is consuming some one-time coins (inputs) and creating new one-time coins (outputs). But it also allows for read-only inputs, also called data inputs.

Data inputs are very efficient (about just 32 bytes per data input is to be put into transaction), provide possibility to read arbitrary element (unspent output0 of the current Ergo state, and read it efficiently, also in light-client friendly way (light fullnodes able to fully validate transactions with data inputs without storing UTXO set).

Some subtle nuances to be considered by application developers though:

* data inputs of a transaction may be duplicated
* data input may refer to UTXO set before the first transaction of the block, or any UTXO created in the block (before the transaction or after)

---

### Post #2 — @anon_real (2021-02-13)

The second point seems very tricky indeed. So for example, a tx may have data input that is being spent in the same block + the newly created box from that data input. So in the case of oracles, in the block that the oracle data is being changed, both the old and new oracle boxes can be used as references. Right?

---

### Post #3 — @kushti (2021-02-13)

Yes, both boxes can be used for that block.
