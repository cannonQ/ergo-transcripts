---
title: '[Voting Proposal] Autolykos v.2'
description: 'ErgoForum discussion: [Voting Proposal] Autolykos v.2'
tags:
- autolykos
- eip
- ergoforum
- ergoscript
- full-node
- storage-rent
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/voting-proposal-autolykos-v-2/288
created: '2020-08-03'
last_activity: '2020-08-03'
posts_count: 1
views: 1062
likes: 2
glossary_hits:
- Autolykos
- EIP
- ErgoScript
- Full node
- Storage rent
---

# [Voting Proposal] Autolykos v.2

> **Forum thread:** [https://ergoforum.org/t/voting-proposal-autolykos-v-2/288](https://ergoforum.org/t/voting-proposal-autolykos-v-2/288)
> **Category:** Uncategorized | **Created:** 2020-08-03 | **Posts:** 1 | **Views:** 1062

**Related concepts:** Autolykos, EIP, ErgoScript, Full node, Storage rent

---

### Post #1 — @kushti (2020-08-03)

Dear miners!

We are starting a new poll on improving memory-hardness of the Autolykos, Ergo’s Proof-of-Work scheme. Last poll did show support for the updated Autolykos, but mining hashrate changed a lot since then.

Algorithm changes draft is available at [EIP-0010: Autolykos v.2 by kushti · Pull Request #22 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/22/files) .

In short changes to the <https://ergoplatform.org/docs/ErgoPow.pdf> are as follows:

he proposed changes are:

Alg. 2, line 4: m || nonce => pk || w || m || nonce  
Alg. 2, line 5: H(j|M|pk|m|w) => H(j|pk|w|M|m)

And lines 3 and 6 in the Alg. 1 to be changed correspondingly.

Let’s use “storage fee factor” parameter (so cost of storing 1 byte for 4 years) for the voting. Current value is 1,250,000.

So if you support Autolykos v.2, please vote for increasing this parameter, e.g.

```ergoscript
voting {
    1 = 1400000
  }
```

otherwise, skip voting.

Example of the node config:

```ergoscript
ergo {
  node {
    mining = true
  }

  voting {
    1 = 1500000
  }
}
```
