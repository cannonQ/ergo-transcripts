---
title: Ergo Mainnet 3.0.5 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.0.5 Release'
tags:
- announcements
- box
- ergoforum
- ergoscript
- ergoscript-context
- transaction
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-0-5-release/54
created: '2019-07-30'
last_activity: '2019-07-30'
posts_count: 1
views: 745
likes: 0
glossary_hits:
- Box
- ErgoScript
- ErgoScript context
- Transaction
---

# Ergo Mainnet 3.0.5 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-0-5-release/54](https://ergoforum.org/t/ergo-mainnet-3-0-5-release/54)
> **Category:** Announcements | **Created:** 2019-07-30 | **Posts:** 1 | **Views:** 745

**Related concepts:** Box, ErgoScript, ErgoScript context, Transaction

---

### Post #1 — @Martin-mx (2019-07-30)

This release is introducing an improved box selector (aka transaction assembler) and also memory footprint reduction, mostly due to optimized (de-)serialization.

The new replace-compact-collect is parameterized by maximum number of inputs a transaction can have, and optimal number of inputs.

Say, the selector is given boxes denoted by their values (1,2,3,4,…10). Then the selector is working as follows:

```ergoscript
1) the selector first picking up boxes in given order (1,2,3,4,...)
2) if number of inputs exceeds the limit, the selector is sorting remaining boxes(actually, only 3*maximum inputs of them) by value in descending order and replaces small-value boxes in the inputs by big-value from the tail (1,2,3,4 => 10)
3) if the number of inputs still exceeds the limit, the selector is trying to throw away the dust if possible. E.g. if inputs are (100, 200, 1, 2, 1000), target value is 1300 and maximum number of inputs is 3, the selector kicks out (1, 2)
 4) if number of inputs after the previous steps is below optimal, the selector is trying to append the dust, by sorting remaining boxes in ascending order and appending them till optimal number of inputs.
```

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.0.5)

![](https://avatars1.githubusercontent.com/u/27490654?s=400&v=4)

### [ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.0.5)

Ergo protocol description & reference client implementation - ergoplatform/ergo
