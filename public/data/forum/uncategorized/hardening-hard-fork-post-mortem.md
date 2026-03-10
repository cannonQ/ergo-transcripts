---
title: '"Hardening" Hard Fork Post-Mortem'
description: 'ErgoForum discussion: "Hardening" Hard Fork Post-Mortem'
tags:
- difficulty-adjustment
- ergoforum
- ergoscript
- ergoscript-context
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/hardening-hard-fork-post-mortem/599
created: '2021-02-03'
last_activity: '2021-02-03'
posts_count: 1
views: 2930
likes: 8
glossary_hits:
- Difficulty adjustment
- ErgoScript
- ErgoScript context
---

# "Hardening" Hard Fork Post-Mortem

> **Forum thread:** [https://ergoforum.org/t/hardening-hard-fork-post-mortem/599](https://ergoforum.org/t/hardening-hard-fork-post-mortem/599)
> **Category:** Uncategorized | **Created:** 2021-02-03 | **Posts:** 1 | **Views:** 2930

**Related concepts:** Difficulty adjustment, ErgoScript, ErgoScript context

---

### Post #1 — @jasondavies (2021-02-03)

[@kushti](/u/kushti) asked me to write up a description of what happened today during the hard fork. There were a couple of bugs that resulted in miners being unable to produce blocks until the bugs were patched.

## Round-Trip Encoding Failure in version2ActivationDifficultyHex

The main reason for the hard fork was to switch to a new proof-of-work. The new proof-of-work should be theoretically harder to mine, and as a result, the difficulty was adjusted alongside the proof-of-work switch.

The new difficulty was a predefined value, set using:

```ergoscript
version2ActivationDifficultyHex = "6f98d5555555"
```

The encoding of Ergo block headers is inspired by that of Bitcoin, in which the difficulty is encoded using a shorter 4-byte value instead of a 256-bit target value.

However, when converting this value to nBits when encoding a block header, it loses some precision, and decoding the block header results in a different difficulty value, which fails validation.

The fix was to use the following:

```ergoscript
version2ActivationDifficultyHex = "6f98d5000000"
```

## Off-By-One in version2ActivationHeight

Strictly speaking, the activation height could be any reasonable height, so why is this an off-by-one error? The reason has to do with the difficulty change mentioned above.

In Ergo, difficulty changes every epoch. An epoch is 1024 blocks long. The difficulty is automatically adjusted based on the block timestamps used in the previous 8 epochs to obtain the target block interval of 120s (2 minutes).

The crucial thing about the difficulty adjustment is that it happens in the *first block* of a new epoch, i.e. at height `n * 1024 + 1`. Unfortunately, the activation height chosen was `417792 = 408 * 1024`, which meant that the difficulty change was applied to the *last block* of an epoch.

The fix was to adjust the code so that the v2 difficulty change was also applied to the next block, i.e. the first block of the new epoch.

Both of these fixes are mandatory, as they involve consensus-critical fixes.

As a result, all nodes **must** update to release [v4.0.4](https://github.com/ergoplatform/ergo/releases/tag/v4.0.4).
