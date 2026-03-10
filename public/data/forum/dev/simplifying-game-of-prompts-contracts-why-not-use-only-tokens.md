---
title: 'Simplifying Game of Prompts Contracts: Why Not Use Only Tokens?'
description: 'ErgoForum discussion: Simplifying Game of Prompts Contracts: Why Not
  Use Only Tokens?'
tags:
- box
- dev
- ergoforum
- multi-stage-contracts
- native-tokens
- transaction
category: forum
forum_category: Development
source: ergoforum
source_url: https://ergoforum.org/t/simplifying-game-of-prompts-contracts-why-not-use-only-tokens/5293
created: '2025-12-11'
last_activity: '2025-12-11'
posts_count: 1
views: 50
likes: 0
glossary_hits:
- Box
- Multi-stage contracts
- Native tokens
- Transaction
---

# Simplifying Game of Prompts Contracts: Why Not Use Only Tokens?

> **Forum thread:** [https://ergoforum.org/t/simplifying-game-of-prompts-contracts-why-not-use-only-tokens/5293](https://ergoforum.org/t/simplifying-game-of-prompts-contracts-why-not-use-only-tokens/5293)
> **Category:** Development | **Created:** 2025-12-11 | **Posts:** 1 | **Views:** 50

**Related concepts:** Box, Multi-stage contracts, Native tokens, Transaction

---

### Post #1 — @jossemii (2025-12-11)

Hi everyone,

I’ve been working on the **Game of Prompts** contracts, which currently support **prize distribution in both ERG and tokens**. While the logic works, handling ERG distribution gets quite complicated: you have to ensure the minimum value in each box, mix ERG and token logic, and the calculation functions become cumbersome.

This made me wonder: why not simplify things and work exclusively with tokens? My proposal:

* Create a **wrappedERG** that represents ERG 1:1, issued by a contract that locks the original ERG.
* The prize contract would then operate entirely with tokens, eliminating conditionals for asset type.
* Anyone who wants actual ERG would simply unwrap the wrappedERG at the end.
* With **chained transactions**, users wouldn’t even need to notice that wrappedERG is being used instead of ERG, both when participating and when receiving the prize.

**Advantages I see:**

1. Homogeneous logic: everything is calculated as tokens, no branching between ERG and tokens.
2. Avoids errors with ERG minimums in boxes.
3. Scalable and maintainable.
4. Works for users who want ERG without complicating the contract.

**Minor drawbacks:**

* Requires a bridge contract for wrappedERG.
* One extra step for users who want real ERG.

**Another alternative I can think of:**

* Require the party executing the prize distribution transaction to **cover the ERG minimums** if they are not met.
* However, I still wonder if it’s **better design to just use tokens**, to keep the contract logic simpler and more robust.

In my view, using tokens internally and wrappedERG when real ERG is needed greatly simplifies the contract while retaining flexibility.

What do you think? Has anyone implemented something similar on Ergo? Do you see any risks I might be missing?
