---
title: '[Voting Proposal] Opinion on Memory-Hardness hard-fork'
description: 'ErgoForum discussion: [Voting Proposal] Opinion on Memory-Hardness hard-fork'
tags:
- ergoforum
- ergoscript
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/voting-proposal-opinion-on-memory-hardness-hard-fork/189
created: '2020-03-04'
last_activity: '2020-03-04'
posts_count: 2
views: 979
likes: 3
glossary_hits:
- ErgoScript
- Full node
---

# [Voting Proposal] Opinion on Memory-Hardness hard-fork

> **Forum thread:** [https://ergoforum.org/t/voting-proposal-opinion-on-memory-hardness-hard-fork/189](https://ergoforum.org/t/voting-proposal-opinion-on-memory-hardness-hard-fork/189)
> **Category:** Uncategorized | **Created:** 2020-03-04 | **Posts:** 2 | **Views:** 979

**Related concepts:** ErgoScript, Full node

---

### Post #1 — @kushti (2020-03-04)

Dear miners,

please express your opinion on whether Ergo PoW function should be tweaked for better non-outsourceability

The tweak is simple:

“Change indexes calculation formula in PoW from H(j | M | pk | m | w) to H(j | pk|w|M|m) in order to have memory-hard PoW (as with the current formula miners can do optimizations based on hash midstate)”

See discussions in the discord ([Ergo Platform](https://discordapp.com/invite/kj7s7nb)), mining channel

If you suppose such a hard-fork, please increase block size parameter, and from that voting we will see your recommendations.

For that, please put following “voting” section in your configs:

```ergoscript
  voting {
    3 = 700000
  }
```

under “ergo”, e.g.

```ergoscript
ergo {
  node {
    mining = true
  }

  voting {
    3 = 700000
  }
}
```

and restart the node.

---

### Post #2 — @mhs_sam (2020-03-04)

About forking for memory hardness, I guess we need a more Prospective idea. I mean rather than this simple modification we need a parametrized solution. In the future, if any changes to memory harness is required the only thing to change is some parameters. These parameter can also be voted by miners in the future for example.
