---
title: Ergo nonce distribution
description: 'ErgoForum discussion: Ergo nonce distribution'
tags:
- difficulty-adjustment
- ergo-explorer
- ergoforum
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-nonce-distribution/243
created: '2020-06-13'
last_activity: '2020-06-13'
posts_count: 1
views: 1270
likes: 7
glossary_hits:
- Difficulty adjustment
- Ergo Explorer
- Full node
---

# Ergo nonce distribution

> **Forum thread:** [https://ergoforum.org/t/ergo-nonce-distribution/243](https://ergoforum.org/t/ergo-nonce-distribution/243)
> **Category:** Uncategorized | **Created:** 2020-06-13 | **Posts:** 1 | **Views:** 1270

**Related concepts:** Difficulty adjustment, Ergo Explorer, Full node

---

### Post #1 — @Cheng (2020-06-13)

People have used nonce distribution to speculate on the dynamics of the mining industry of PoW coins. In theory, block nonces should be randomly distributed. However, in practice, nonces might show patterns due to ASIC hardware, special optimizations.

For those interested in nonce analysis for Bitcoin, here is a good article from BitMex ([Bitmex-Nonce](https://blog.bitmex.com/the-mystery-of-the-bitcoin-nonce-pattern/)). In this thread, I will show a similar analysis I have done for Ergo mining.

Here is the nonce distribution graph of Ergo mining. The blue dots are nonces of all the blocks (until end of 2020.05), and the red curve is the difficulty of Ergo mining.

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/6d8fab87411af5dba203124645b2671b62944f98_2_690x470.png)

image727×496 71.4 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6d8fab87411af5dba203124645b2671b62944f98.png "image")

There are two steps to make such a graph: 1) download all the nonces and difficulty data from a full node using curl/wget etc. (Ergo explorer might be too slow for this); 2) use plot library to draw such graph. I used `pyplot.plot_date`.

From the graph, we could observe interesting patterns:

1. Around middle of 2020-03, there is a significant blank area at the bottom of the graph with almost zero nonces. According to [@kushti](/u/kushti), this might be due to @BigEvilSoloMiner 's “*hidden group*” trick.
2. Since early 2020-05, the nonces are less random than before as the color of the dots gets dark (which means more small clusters). This change matches well with the increase in difficulty. However, I cannot tell what is the root cause of this change.

Overall, the nonces are pretty random, which is great news. We don’t see strong patterns as shown in the article of BitMex. I will keep monitoring in the future just in case strong patterns might appear.
