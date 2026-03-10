---
title: Setup Help please
description: 'ErgoForum discussion: Setup Help please'
tags:
- addresses
- ergoforum
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/setup-help-please/2698
created: '2021-10-06'
last_activity: '2021-10-07'
posts_count: 2
views: 857
likes: 1
glossary_hits:
- Addresses
- Full node
---

# Setup Help please

> **Forum thread:** [https://ergoforum.org/t/setup-help-please/2698](https://ergoforum.org/t/setup-help-please/2698)
> **Category:** Uncategorized | **Created:** 2021-10-06 | **Posts:** 2 | **Views:** 857

**Related concepts:** Addresses, Full node

---

### Post #1 — @sledge42hammer (2021-10-06)

Quick back story. I intend to mine. followed instructions on platform how to create desktop node and wallet. The link, <http://127.0.0.1:9053/swagger#/utils/hashBlake2b>, doesn’t work. Gave up on desktop and made mobile node for wallet address. Configured bat file for NBminer on bitfly pool

Problem i have- miner launches identifies gpus and crashes. Doesnt stay open long enough to read error. bat file set up as follows

nbminer -a ergo -o stratum+tcp://stratum-ergo.flypool.org -u 9hwGFxQhRyy4ye8GLEYthZVDMkxUi2XiS4jK1bwiSJfCRmCKZ8v.ergopc -log

Any ideas?

---

### Post #2 — @Azot (2021-10-07)

![](https://avatars.discourse-cdn.com/v4/letter/s/a8b319/48.png) sledge42hammer:

> nbminer -a ergo -o stratum + tcp: <//stratum-ergo.flypool.org> -u 9hwGFxQhRyy4ye8GLEYthZVDMkxUi2XiS4jK1bwiSJfCRmCKZ8v.ergopc -log
>
> Любые идеи?

nbminer -a ergo -o stratum+tcp://ergo.flypool.org: 3333 -u 9hwGFxQhRyy4ye8GLEYthZVDMkxUi2XiS4jK1bwiSJfCRmCKZ8v.ergopc -log
