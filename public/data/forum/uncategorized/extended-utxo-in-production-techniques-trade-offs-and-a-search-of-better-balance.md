---
title: 'Extended UTxO in production: techniques, trade-offs and a search of better
  balance'
description: 'ErgoForum discussion: Extended UTxO in production: techniques, trade-offs
  and a search of better balance'
tags:
- box
- ergoforum
- ergoscript-context
- eutxo
- registers
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/extended-utxo-in-production-techniques-trade-offs-and-a-search-of-better-balance/4555
created: '2023-11-13'
last_activity: '2023-11-21'
posts_count: 4
views: 340
likes: 9
glossary_hits:
- Box
- ErgoScript context
- Registers
- Spectrum
- Transaction
- eUTXO
---

# Extended UTxO in production: techniques, trade-offs and a search of better balance

> **Forum thread:** [https://ergoforum.org/t/extended-utxo-in-production-techniques-trade-offs-and-a-search-of-better-balance/4555](https://ergoforum.org/t/extended-utxo-in-production-techniques-trade-offs-and-a-search-of-better-balance/4555)
> **Category:** Uncategorized | **Created:** 2023-11-13 | **Posts:** 4 | **Views:** 340

**Related concepts:** Box, ErgoScript context, Registers, Spectrum, Transaction, eUTXO

---

### Post #1 — @oskin1 (2023-11-13)

Publishing an article prepared for Ergo meetup in Dubai where I analyze my experience of building DeFi (and not only) on eUTxO and trying to come up with a better framework as part of research for Spectrum Network.

[spectrum.fi](https://spectrum.fi/eutxo_in_production.pdf)

### [eutxo\_in\_production.pdf](https://spectrum.fi/eutxo_in_production.pdf)

668.05 KB

---

### Post #2 — @lgd (2023-11-17)

1. When you do State.Copy(), is the unchanged state data still included in the new TX or just the new data being changed, I was confused a bit by the wording? If the latter, then how does information get propagated over time/how do you access unchanged data?
2. Is it correct to interpret Ref = Stable x Version as being the new box id or is that just Version? So there are now multiple ways to reference an eUTXO?

---

### Post #3 — @oskin1 (2023-11-18)

1. State (box) which is consumed by the transaction is already available in the ledger, thus transaction only contains instructions on how to modify it to produce new version of that piece of state.
2. Yes, that’s the idea. Static and dynamic way of referencing utxo

---

### Post #4 — @kushti (2023-11-21)

As inputs and outputs are already encoded in transaction differently (outputs are encoded as ergo box candidates, so boxes without transaction id and output number), maybe, it is enough to inject alternative encoding there, which would contain input index and only registers changed? The only issue is that input boxes are needed to get transaction hash, which would complicate clients, but bandwidth and storage would be optimized.
