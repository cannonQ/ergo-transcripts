---
title: Autolykos v. 2 details
description: 'ErgoForum discussion: Autolykos v. 2 details'
tags:
- autolykos
- difficulty-adjustment
- ergoforum
- ergoscript-context
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/autolykos-v-2-details/480
created: '2020-11-18'
last_activity: '2021-12-05'
posts_count: 2
views: 21226
likes: 6
glossary_hits:
- Autolykos
- Difficulty adjustment
- ErgoScript context
---

# Autolykos v. 2 details

> **Forum thread:** [https://ergoforum.org/t/autolykos-v-2-details/480](https://ergoforum.org/t/autolykos-v-2-details/480)
> **Category:** Uncategorized | **Created:** 2020-11-18 | **Posts:** 2 | **Views:** 21226

**Related concepts:** Autolykos, Difficulty adjustment, ErgoScript context

---

### Post #1 — @kushti (2020-11-18)

[Significantly updated on Dec, 24th, 2020]

The goal of this post is to explain and discuss upcoming proof-of-work function change.

Autolykos v.2 is following Autolykos v.1, but with certain modifications made:

* non-outsourceability switched off. It turns out (based on more than 1 year of non-outsourceable PoW experience) that non-outsourceable PoW is not attractive to small miners.
* now algorithm is trying to bind an efficient solving procedure with a single table of ~2 GB (initially), which is significantly reducing memory optimizations possibilities
* table size (memory requirements of a solving algorithm) grows with time
* now table is depending on block height only, so there is no penalization for recalculating block candidate for the same height

Autolykos v.2 is briefly described at [ErgoPow.pdf | DocDroid](https://www.docdroid.net/mcoitvK/ergopow-pdf) ,

main algorithms for verification and proving are below:

[![verify2](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/58fffca07fe33848ba52fe957dfb077a3c1c6c8e_2_690x310.png)

verify2710×320 42.8 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/58fffca07fe33848ba52fe957dfb077a3c1c6c8e.png "verify2")

[![prove2](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/5c0458e1f6d30db02e1e84e60b99a563642e2874_2_690x433.png)

prove2878×552 65.9 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/5c0458e1f6d30db02e1e84e60b99a563642e2874.png "prove2")

and auxiliary *genIndexes* algorithm is

[![genindexes](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/931de65767c4b6621dbf61d6fc69b83054fed6c0_2_690x173.png)

genindexes1127×283 37.6 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/931de65767c4b6621dbf61d6fc69b83054fed6c0.png "genindexes")

(takeRight(n, \*) is taking least significant n bytes, dropMsb is dropping the most significant byte, so for 32 bytes, dropMsb(…) == takeRight(31, …)).

So basic ideas behind the algo:

1. Like Autlykos-1, based on k-sum problem, so a miner needs to finds *k* (k=32) out of *N* (2^n = 2^26) elements, and hash of their sum must be less than target value (inverse of difficulty)
2. *k* indexes are pseudorandom values derived from block candidate and nonce
3. *N* elements are derived from block height and constants just, unlike Autolykos v.1, so miners can recalculate block candidates easily now (so only indexes are depending on them)
4. Indexes calculation also involving the same table (which elements are last 31 bytes of H(i | | h | | M ), where *i* is in [0, N), *h* is block height, *M* is padding to slow down hash calculation (8kb of constant data).

So algorithm trying to make mining efficient for ones who store the table which size is 2^26 \* 31 = 2,080,374,784 bytes initially (about 2GB). Thus algo now is friendly to all the GPUs basically.

Also, table size (N value) is growing with time as follows. Until block 614,400, N = 2^{26} = 67,108,864 elements (31 bytes each). From this block, and until block 4,198,400, every 51,200 blocks $N$ is increased by 5 percent. Since block 4,198,400, value of N is fixed and equals to 2,143,944,600. Test vectors for N values are provided in the paper.

---

### Post #2 — @renato (2021-12-05)

Can I find query complexity of this algorithm anywhere?
