---
title: 'Blockchain-based trustless derivatives: HashrateCoin and RandomCoin'
description: 'ErgoForum discussion: Blockchain-based trustless derivatives: HashrateCoin
  and RandomCoin'
tags:
- box
- dexy
- difficulty-adjustment
- ergoforum
- gluon
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/blockchain-based-trustless-derivatives-hashratecoin-and-randomcoin/4999
created: '2024-11-15'
last_activity: '2024-11-15'
posts_count: 1
views: 168
likes: 6
glossary_hits:
- Box
- Dexy
- Difficulty adjustment
- Gluon
---

# Blockchain-based trustless derivatives: HashrateCoin and RandomCoin

> **Forum thread:** [https://ergoforum.org/t/blockchain-based-trustless-derivatives-hashratecoin-and-randomcoin/4999](https://ergoforum.org/t/blockchain-based-trustless-derivatives-hashratecoin-and-randomcoin/4999)
> **Category:** Uncategorized | **Created:** 2024-11-15 | **Posts:** 1 | **Views:** 168

**Related concepts:** Box, Dexy, Difficulty adjustment, Gluon

---

### Post #1 — @kushti (2024-11-15)

In this post, I am going to propose two financial instruments which pricing can be derived from blockchain state deterministically, so the price is trustless in this regard:

**Hashrate coin**

Set initial price and initial (current) difficulty in an trustless oracle box. Then on every difficulty epoch (128 blocks), readjust price according to difficulty change. E.g. if price is 10 ERG per Hashrate coin, and difficulty raised up by 2% in an epoch, next price is 10.2 ERG per Hashrate coin

Then, based on oracle data, different instruments can be build, such as dexyHashrateCoin, GluonHashrateCoin, hodlHashrateCoin etc.

They can be used for miners to hedge against difficulty growth, and also difficulty usually not falling as sharp as ERG price during dips, and can perform better during long lasting periods of bull, thus Hashrate Coin can be interesting for traders also.

**Random Coin**

Initial price of Random Coin is set (e.g. to 10 Erg). Then every epoch (sequence of blocks) we extract one bit per header (from header id, pseudorandom value protected by PoW), and if more ones than zeros, for next epoch price is up 1%, otherwise, if more zeros than ones, down 1%, with equality stays the same.

Such an oracle can be just a contract (trustless oracle).

Thus we have random walk of the price, which can be finished anywhere.

And on top of this we can build different primitives, such as DexyRandom, GluonRandom, SigRandom, hodlRandom etc.

RandomCoin would be close to casino in form of DeFi.

I would be glad to help with oracle contracts, but for other parts (offchain, launching dexy/gluon/etc) I dont have enough time, unfortunately. So I hope someone can pick it up.
