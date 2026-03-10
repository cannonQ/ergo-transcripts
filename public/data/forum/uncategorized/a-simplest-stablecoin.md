---
title: A Simplest Stablecoin?
description: 'ErgoForum discussion: A Simplest Stablecoin?'
tags:
- box
- ergoforum
- ergoscript-context
- native-tokens
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/a-simplest-stablecoin/413
created: '2020-10-05'
last_activity: '2021-07-02'
posts_count: 3
views: 836
likes: 5
glossary_hits:
- Box
- ErgoScript context
- Native tokens
- Transaction
---

# A Simplest Stablecoin?

> **Forum thread:** [https://ergoforum.org/t/a-simplest-stablecoin/413](https://ergoforum.org/t/a-simplest-stablecoin/413)
> **Category:** Uncategorized | **Created:** 2020-10-05 | **Posts:** 3 | **Views:** 836

**Related concepts:** Box, ErgoScript context, Native tokens, Transaction

---

### Post #1 — @kushti (2020-10-05)

The very simple approach to stablecoin would be as follows:

* there’s a bank box holding stablecoin tokens (e.g. sJPY)
* there’s also a trusted oracle with JPY/ERG data

The bank’s box is protected with such script that:

* to get 100 JPY out of the bank, one needs to re-create bank box in the outputs of a spending transaction with 100 JPY deducted, and create swap buy order for 100 JPY according to current price (got from the oracle via a read-only box). Other outputs are not fixed, presumably, they will pay 100 JPY to receivers.

Then it is always possible to sell 100 JPY back. However, sometimes price for swapping back can be terrible even if price is not going down, as someone else can use your box to swap back leaving you with a worse option. This problem can be relaxed with using more complicated DEX orders I guess.

---

### Post #2 — @kushti (2020-10-05)

Another option is to lock orders, maybe with arbitrary locks to be set by the users even.

---

### Post #4 — @scalahub (2021-07-02)

Definitely an interesting approach. Somehow appears very similar to the idea of bypassing NO puzzles ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=9 ":slight_smile:")

What about the reverse when we want to redeem stable coins? Do we wait for someone to create such a box and then redeem them?
