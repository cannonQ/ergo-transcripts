---
title: '[Voting proposal] Increasing maximum computational cost for block again'
description: 'ErgoForum discussion: [Voting proposal] Increasing maximum computational
  cost for block again'
tags:
- ergoforum
- ergoscript
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/voting-proposal-increasing-maximum-computational-cost-for-block-again/722
created: '2021-02-26'
last_activity: '2021-02-26'
posts_count: 1
views: 683
likes: 1
glossary_hits:
- ErgoScript
- Full node
---

# [Voting proposal] Increasing maximum computational cost for block again

> **Forum thread:** [https://ergoforum.org/t/voting-proposal-increasing-maximum-computational-cost-for-block-again/722](https://ergoforum.org/t/voting-proposal-increasing-maximum-computational-cost-for-block-again/722)
> **Category:** Uncategorized | **Created:** 2021-02-26 | **Posts:** 1 | **Views:** 683

**Related concepts:** ErgoScript, Full node

---

### Post #1 — @kushti (2021-02-26)

For initial period of the mainnet life, very conservative settings were chosen in order to prevent attacks and be sure everything will run smoothly. Now developers would like to propose to change maximum computational cost limit per block (similar to gas limit per block in Ethereum).

With optimizations we’re doing, it is reasonable to consider higher value for cost limit per block. Currently the limit is about 4.7M, 7-8M looks good.

Please vote for cost limit increase with setting higher value (please also consider offlineGeneration = true flag so your node will be generating block candidates immediately after node restart), e.g. :

```ergoscript
ergo {
  node {
    mining = true
    offlineGeneration = true
  }

  voting {
    4 = 7000000
  }
}
```

If 50+% will vote for the limit increasement, it will be increased by 1% per epoch.
