---
title: '[Voting proposal] Increasing maximum computational cost for block'
description: 'ErgoForum discussion: [Voting proposal] Increasing maximum computational
  cost for block'
tags:
- box
- ergoforum
- ergoscript
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/voting-proposal-increasing-maximum-computational-cost-for-block/179
created: '2020-01-30'
last_activity: '2020-12-18'
posts_count: 2
views: 909
likes: 4
glossary_hits:
- Box
- ErgoScript
- Full node
---

# [Voting proposal] Increasing maximum computational cost for block

> **Forum thread:** [https://ergoforum.org/t/voting-proposal-increasing-maximum-computational-cost-for-block/179](https://ergoforum.org/t/voting-proposal-increasing-maximum-computational-cost-for-block/179)
> **Category:** Uncategorized | **Created:** 2020-01-30 | **Posts:** 2 | **Views:** 909

**Related concepts:** Box, ErgoScript, Full node

---

### Post #1 — @kushti (2020-01-30)

Dear Ergo miners!

For initial period of the mainnet life, very conservative settings were chosen in order to prevent attacks and be sure everything will run smoothly. Now developers would like to propose to change maximum computational cost limit per block (similar to gas limit per block in Ethereum).

Initial value for that parameter is 1,000,000. It is very restrictive value (enough to spend ~36 P2PK-protected boxes per block). In testnet miners have successfully risen the limit to 1,126,822 at the moment (+12.6%) during an experiment.

Please put following “voting” section in your configs:

```ergoscript
  voting {
    4 = 2000000
  }
```

under “ergo”, e.g.

```ergoscript
ergo {
  node {
    mining = true
  }

  voting {
    4 = 2000000
  }
}
```

and restart the node.

And then the node will automatically create blocks voting for increasing or decreasing the target parameter (4 = max block cost) till it reaches the target value. Voting will be started in the beginning of a next voting epoch (1,024 blocks) if miner generating the first block of a new epoch is proposing the change.

You can set up another value or skip the voting. Developers are just providing recommendations.

---

### Post #2 — @kushti (2020-12-18)

Dear miners, core devs are suggesting to increase the limit to 7-8M!
