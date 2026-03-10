---
title: Paying fee in ErgoMix in primary tokens
description: 'ErgoForum discussion: Paying fee in ErgoMix in primary tokens'
tags:
- box
- ergoforum
- ergoscript
- native-tokens
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/paying-fee-in-ergomix-in-primary-tokens/73
created: '2019-09-03'
last_activity: '2019-09-03'
posts_count: 1
views: 1384
likes: 5
glossary_hits:
- Box
- ErgoScript
- Native tokens
- Transaction
---

# Paying fee in ErgoMix in primary tokens

> **Forum thread:** [https://ergoforum.org/t/paying-fee-in-ergomix-in-primary-tokens/73](https://ergoforum.org/t/paying-fee-in-ergomix-in-primary-tokens/73)
> **Category:** Uncategorized | **Created:** 2019-09-03 | **Posts:** 1 | **Views:** 1384

**Related concepts:** Box, ErgoScript, Native tokens, Transaction

---

### Post #1 — @scalahub (2019-09-03)

I propose the following idea for ErgoMix where the miners don’t have to receive the fee in tokens but they can receive fee in Ergs (the primary token in Ergo) like in other transactions.

For an overview of ErgoMix, please refer to Section 3.3 of the [Advanced ErgoScript Tutorial](https://ergoplatform.org/docs/AdvancedErgoScriptTutorial.pdf).

The following section assumes that the reader is familiar with Section 3.3.3 of the tutorial (Handling Fee In ErgoMix),

We will extend the basic approach where the fee is paid in tokens, so the approach handles both perfect and approximate fairness.

In the original approach, we assumed that each mix transaction pays two “mixing tokens” to the miner as a fee.

The modified approach also uses mixing tokens but in a slightly different way.  
In the modified approach, each mixing transaction destroys two mixing tokens in exchange for the mining fee for the transaction. This fee is taken by spending another box created by the token issuer, which we call the “fee emission box”. This box contains several Ergs and is protected by a script requiring that each token destroyed in the transaction will be compensated by fee for one unit of fee in Ergs and the balance Ergs must be stored in a new fee emission box with the same script.

Before starting mixing, each party purchases several tokens from the issuer as in the original approach.

To handle multiple mixing transactions concurrently, the token issuer creates several fee emission boxes.

This idea of “tokens as fee” can be used in other protocols that don’t want to handle fee explicitly.
