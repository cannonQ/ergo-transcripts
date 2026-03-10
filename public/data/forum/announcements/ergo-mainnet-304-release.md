---
title: Ergo Mainnet 3.0.4 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.0.4 Release'
tags:
- announcements
- ergoforum
- full-node
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-0-4-release/48
created: '2019-07-19'
last_activity: '2019-07-19'
posts_count: 1
views: 634
likes: 1
glossary_hits:
- Full node
---

# Ergo Mainnet 3.0.4 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-0-4-release/48](https://ergoforum.org/t/ergo-mainnet-3-0-4-release/48)
> **Category:** Announcements | **Created:** 2019-07-19 | **Posts:** 1 | **Views:** 634

**Related concepts:** Full node

---

### Post #1 — @Martin-mx (2019-07-19)

This release is introducing a bugfix in block candidate generation algorithm. Thus the release is highly recommended for miners!

Before this release, block candidate has timestamp got from NTP (or local clocks if connection to NTP failed). However, there’s the rule that timestamp of a block should be not less than timestamp of its parent (to has less problems with time drifting attacks). So the node had a chance to generate an invalid block candidate for mining.

With the fix done, node is generating strictly increased timestamp for a block candidate.

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.0.4)

![](https://avatars1.githubusercontent.com/u/27490654?s=400&v=4)

### [ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.0.4)

Ergo protocol description & reference client implementation - ergoplatform/ergo
