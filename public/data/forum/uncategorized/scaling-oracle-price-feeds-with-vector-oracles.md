---
title: Scaling Oracle price feeds with Vector Oracles
description: 'ErgoForum discussion: Scaling Oracle price feeds with Vector Oracles'
tags:
- ergoforum
- gort
- native-tokens
- oracle-pools
- rosen-bridge
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/scaling-oracle-price-feeds-with-vector-oracles/4772
created: '2024-04-28'
last_activity: '2024-05-02'
posts_count: 3
views: 256
likes: 7
glossary_hits:
- GORT
- Native tokens
- Oracle pools
- Rosen Bridge
---

# Scaling Oracle price feeds with Vector Oracles

> **Forum thread:** [https://ergoforum.org/t/scaling-oracle-price-feeds-with-vector-oracles/4772](https://ergoforum.org/t/scaling-oracle-price-feeds-with-vector-oracles/4772)
> **Category:** Uncategorized | **Created:** 2024-04-28 | **Posts:** 3 | **Views:** 256

**Related concepts:** GORT, Native tokens, Oracle pools, Rosen Bridge

---

### Post #1 — @c8e4 (2024-04-28)

With RosenBridge live on Ergo there is growing need for multiple oracle price feeds. Running an oracle pool for each single price feed seems an overkill. My proposition is simple:  
Instead of publishing a single value like ERG\_USD the oracle pool can publish a predefined list of let’s say 64 values with predefined indices.

Is this a viable idea? Are there any security concerns?

---

### Post #2 — @kushti (2024-05-01)

I guess possible, there is need to modify contracts for oracle pools 2.0 a bit I guess. And some questions to consider:

* is it okay to deliver multiple data point at the same interval. Probably okay for e.g. gold and silver, but for gold and USD ?
* oracles are getting paid in custom token, e.g. GORT in case of gold oracle pool. Is it okay to reward for multiple data points with the same token ?

---

### Post #3 — @c8e4 (2024-05-02)

We have an Erg-USD Oracle Pool. In a dreamworld we would have Erg-USD Oracle Pool publishing 100 values for crypto spot price.

> * is it okay to deliver multiple data point at the same interval. Probably okay for e.g. gold and silver, but for gold and USD ?

I would not mix Gold and crypto spot price feeds.

> Is it okay to reward for multiple data points with the same token

Only if the data verctor is homogenous (crypto spot prices).

One more thought on extensibility of the the price data feed. The oracle pool could initially post only ERG\_USD price in a fixed length vector with other values beeing 0:  
[ERG\_USD, 0, 0, 0, 0].

New tickers can be added later (e.g. for a new rosen bridged asset), but can never be removed.
