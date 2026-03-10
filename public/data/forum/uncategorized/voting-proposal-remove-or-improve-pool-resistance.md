---
title: '[Voting Proposal] Remove or improve pool-resistance'
description: 'ErgoForum discussion: [Voting Proposal] Remove or improve pool-resistance'
tags:
- collateral
- ergoforum
- ergoscript
- full-node
- storage-rent
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/voting-proposal-remove-or-improve-pool-resistance/192
created: '2020-03-11'
last_activity: '2020-03-11'
posts_count: 2
views: 1307
likes: 5
glossary_hits:
- Collateral
- ErgoScript
- Full node
- Storage rent
---

# [Voting Proposal] Remove or improve pool-resistance

> **Forum thread:** [https://ergoforum.org/t/voting-proposal-remove-or-improve-pool-resistance/192](https://ergoforum.org/t/voting-proposal-remove-or-improve-pool-resistance/192)
> **Category:** Uncategorized | **Created:** 2020-03-11 | **Posts:** 2 | **Views:** 1307

**Related concepts:** Collateral, ErgoScript, Full node, Storage rent

---

### Post #1 — @kushti (2020-03-11)

Dear miners,

Most of the mining hashrate supported memory-hardness hard-fork it seems, and in regards with mining there are also voices in the community (mining and trading channels in discord) in regards with non-outsourceability (aka pool-resistance).

The motivation for pool-resistance was to avoid dominance and possible censorship by big pools. However, with pool-resistance the mining seems to be dominated by large farms and maybe private pools.

Some semi-decentralized pooling schemes appeared for Ergo , there is a paper on that [Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts](https://eprint.iacr.org/2020/044) and <https://ergopool.io/> which is in testing mode. There is also [ezpool.io](http://ezpool.io) pool which is just launched, and this pool is doing a trick with a private key passed to a miner.

With this in mind, there are three options:

1. leave things as is and see what will happen
2. switch non-outsourceability off , let any pool join the game
3. improve non-outsourceability, so only schemes like [ergopool.io](http://ergopool.io) will survive (see next post for details)

Let’s use “storage fee factor” parameter (so cost of storing 1 byte for 4 years). Current value is 1,250,000.

So if you support switching non-outsourceability (option 2), please vote for increasing this parameter, e.g.

```ergoscript
voting {
    1 = 1400000
  }
```

If you support improving non-outsourceability (option 3), please vote for decreasing this parameter, e.g.

```ergoscript
voting {
    1 = 1000000
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

---

### Post #2 — @kushti (2020-03-11)

On improving non-outsourceability, proposal by [@mhs\_sam](/u/mhs_sam) :  
" According to Ergo’s WP, memory-harness (fpga and asic resistance) and non-outsourceability (pool resistance) are two core properties of ergo. There are lots of statements in WP and other papers, blog posts, tweets bolding these two features. These are core features and makes ergo different and interesting. I know that, some economics which could not be predicted before launch is against these two features, but we cannot predict the future. Giving up at this early stage makes other claims in doubt too. I am a fan of ergo since the first time I heard about it because of its novel and revolutionary features, it was a new and different chain. It was the most distributed and decentralized protocol I’ve ever seen. I mean it, even the development of ergo is not centralized, consider me, rsmmt, Bigevil, york as a few examples. I saw in the discussions that it is possible to fork only of security features. I see these two features beyond security. These are the philosophy of ergo, the nature of it. Without these features ergo is like many other blockchains with less and more features. Ergo claimed something and these claims are broken somehow, so what is the action? I see the only option is to insist and fix them. These core features and maybe others may have flaws in the future again and should be fixed again and again.

Regarding technical discussions, I think it is not hard to maintain memory hardness with some modifications in the prehash computation and its parameters. Also, the bigevil’s magic works due to predictable output of the signature function, It could be avoided easily by replacing the signature<d with hash(signature)<d."
