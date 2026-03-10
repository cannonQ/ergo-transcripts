---
title: Reproducible Assets
description: 'ErgoForum discussion: Reproducible Assets'
tags:
- eip
- eip-4
- ergoforum
- ergoscript
- native-tokens
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/reproducible-assets/4040
created: '2022-11-06'
last_activity: '2022-11-06'
posts_count: 1
views: 651
likes: 6
glossary_hits:
- EIP
- EIP-4
- ErgoScript
- Native tokens
---

# Reproducible Assets

> **Forum thread:** [https://ergoforum.org/t/reproducible-assets/4040](https://ergoforum.org/t/reproducible-assets/4040)
> **Category:** Uncategorized | **Created:** 2022-11-06 | **Posts:** 1 | **Views:** 651

**Related concepts:** EIP, EIP-4, ErgoScript, Native tokens

---

### Post #1 — @oskin1 (2022-11-06)

In this EIP we propose an improvement of EIP-4 which wraps around existing token standard and adds a way to reissue assets in a programmable way.

See full text here:

[github.com](https://github.com/ergoplatform/eips/blob/reproducible-assets/eip-0040.md)

#### [ergoplatform/eips/blob/reproducible-assets/eip-0040.md](https://github.com/ergoplatform/eips/blob/reproducible-assets/eip-0040.md)

```ergoscript
# Reproducible assets

* Author: oskin1
* Status: Proposed
* Created: 05-Nov-2022
* License: CC0
* Forking: not needed 

## Abstract 

In this document we propose an improvement of [EIP-4](./eip-0004.md) which wraps around existing token standard and adds a way to reissue assets in a programmatic way. 

## Background

In October 2019 EIP-4 was introduced as a mandatory standard describing how to handle on-chain token metadata (name, descr, etc..) consistently. 
However a major limitation was that EIP-4 only covered asset metadata while defaulting the aspect of asset issuance to what bare Ergo protocol offers - one-time emission for each tokenId.

## Motivation

One-time emission limits those projects whose tokenomics assumes non-fixed supply or cross-chain usage of the token (bridges usually require minting and burning when the asset is moved back and forth between diferent chains)
```

This file has been truncated. [show original](https://github.com/ergoplatform/eips/blob/reproducible-assets/eip-0040.md)

Feel free to discuss the proposed design here and in the corresponding PR ([Reproducible Assets by oskin1 · Pull Request #84 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/84))
