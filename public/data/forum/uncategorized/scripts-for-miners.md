---
title: Scripts for miners
description: 'ErgoForum discussion: Scripts for miners'
tags:
- box
- ergoforum
- ergoscript-context
- full-node
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/scripts-for-miners/74
created: '2019-09-04'
last_activity: '2019-09-04'
posts_count: 1
views: 1368
likes: 4
glossary_hits:
- Box
- ErgoScript context
- Full node
- Transaction
---

# Scripts for miners

> **Forum thread:** [https://ergoforum.org/t/scripts-for-miners/74](https://ergoforum.org/t/scripts-for-miners/74)
> **Category:** Uncategorized | **Created:** 2019-09-04 | **Posts:** 1 | **Views:** 1368

**Related concepts:** Box, ErgoScript context, Full node, Transaction

---

### Post #1 — @lorien (2019-09-04)

Dear miners, I would like to introduce a repository with helpful scripts.

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/lorien/ergotools)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/a/a117d9868ebfa215f1452ef6d9e4512a4bfb3dac_2_690x345.png)

### [GitHub - lorien/ergotools](https://github.com/lorien/ergotools)

Contribute to lorien/ergotools development by creating an account on GitHub.

This repository is to help a miner to find and withdraw rewards mined, with no need for wallet sync. The repository contains two scripts.

The first one, “Rewards Finding Script” is looking for mining rewards and fees associated with a public key from mining software config. It performs scan independently of the node wallet. The script is filtering out boxes (coins aka outputs) already spent.

The second script, “Merge Rewards Script”, is generating transactions from mined boxes. Depending on arguments, it can whether dump generated transactions to files (and then you need to post tx-X.json files contents manually to /wallet/transaction/send) or send transactions to wallet (you need to provide API key which has is provided in “apiKeyHash” setting of the node then).
