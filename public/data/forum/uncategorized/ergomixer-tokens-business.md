---
title: ErgoMixer tokens business
description: 'ErgoForum discussion: ErgoMixer tokens business'
tags:
- box
- ergoforum
- ergomixer
- ergoscript-context
- native-tokens
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergomixer-tokens-business/396
created: '2020-09-25'
last_activity: '2021-02-12'
posts_count: 3
views: 1001
likes: 9
glossary_hits:
- Box
- ErgoMixer
- ErgoScript context
- Native tokens
---

# ErgoMixer tokens business

> **Forum thread:** [https://ergoforum.org/t/ergomixer-tokens-business/396](https://ergoforum.org/t/ergomixer-tokens-business/396)
> **Category:** Uncategorized | **Created:** 2020-09-25 | **Posts:** 3 | **Views:** 1001

**Related concepts:** Box, ErgoMixer, ErgoScript context, Native tokens

---

### Post #1 — @DarkSideOfBrrrrr (2020-09-25)

I read from kushti that ErgoMixer has tokens under the hood and making some profit. [@kushti](/u/kushti) can you elaborate on this ?

It would be interesting to consider how tokenization, especially for privacy-enhancing applications, can be made in the context of Ergo.

---

### Post #2 — @kushti (2020-09-25)

The mixer is using tokens inside to avoid privacy leaks inferred from fees paid to miners during mix operations. So before you going into mixes, you’re buying enough mix tokens and then pay fees using them via fee-emission boxes ( [Paying fee in ErgoMix in primary tokens](https://www.ergoforum.org/t/paying-fee-in-ergomix-in-primary-tokens/73) ), with fee tokens equally distributed in outputs which is about approximate fairness. See ErgoMixer paper for details: <https://eprint.iacr.org/2020/044>

All the complexity is hidden in the application, end user do not know about fee tokens at all. And mixer dev (devs?) doing some profit by having a difference between token sell price and fee being paid later.

---

### Post #3 — @anon2020s (2021-02-12)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/anon2020s/48/309_2.png)
[ErgoMixer Tokenization](https://www.ergoforum.org/t/ergomixer-tokenization/648) [Ecosystem Development](/c/dev/ecosystem-development/9)

> In order to have multiple shareholders and distribute the mixer’s income in a decentralized manner, we propose a fairly simple approach.
> Let’s say we issue share tokens with the quantity of 1000, meaning that the mixer has 1000 shares. In this approach, shareholders keep their share tokens in their wallet (doesn’t matter where) and receive the mixer’s profit proportionate to their tokens every week for example.
> The most important aspect of this approach is the income contract. A contract that …
