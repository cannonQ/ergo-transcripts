---
title: 5.0 Testnet Launched
description: 'ErgoForum discussion: 5.0 Testnet Launched'
tags:
- eip
- emission-schedule
- ergoforum
- ergoscript-context
- full-node
- soft-fork
- support
category: forum
forum_category: Support
source: ergoforum
source_url: https://ergoforum.org/t/5-0-testnet-launched/3713
created: '2022-06-30'
last_activity: '2022-07-25'
posts_count: 2
views: 883
likes: 7
glossary_hits:
- EIP
- Emission schedule
- ErgoScript context
- Full node
- Soft fork
---

# 5.0 Testnet Launched

> **Forum thread:** [https://ergoforum.org/t/5-0-testnet-launched/3713](https://ergoforum.org/t/5-0-testnet-launched/3713)
> **Category:** Support | **Created:** 2022-06-30 | **Posts:** 2 | **Views:** 883

**Related concepts:** EIP, Emission schedule, ErgoScript context, Full node, Soft fork

---

### Post #1 — @kushti (2022-06-30)

New testnet with 5.0 support launched (old one is abandoned). Please use new client with clean db folder and default peers:

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/5.0-testnet-RC1)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/5/5854a9c32cc5a2701b9dc0c6cc5ab13acf0dfcbd_2_690x345.png)

### [Release 5.0.0 RC1 (for testnet) · ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/5.0-testnet-RC1)

5.0.0 RC1 release for testnet.
It has auto-voting for 5.0 soft-fork by default, starting from height 4,096.
Please note, from this release the node has 9021 port for p2p interactions for the testne...

It has auto-voting for 5.0 soft-fork by default, starting from height 4,096. In this testnet, average delay between blocks is 5 seconds just. 5.0 activation is expected @ height 12,289

Please note, from this release the node has 9021 port for p2p interactions for the testnet by default (before, it was 9020). Magic network bytes also changed. Testnet relaunched with this release.

---

### Post #2 — @kushti (2022-07-25)

More details on the new testnet.

The following consensus-critical settings have been changed:

`ergo.chain.protocolVersion = 3` - with this setting, a node will vote for a soft-fork and use 5.0 soft-fork code (JIT costing etc) after voting and since activation. Node users should not set value for this setting manually, and so should use default value provided by developers

`ergo.chain.blockInterval = 5s` - new testnet has 5 sec delay between blocks on average

`ergo.chain.monetary.minerRewardDelay = 720` - now there’s no difference in mining fee scripts between mainnet and testnet (previously, scripts were different as testnet had 72 blocks lock, now both mainnet and testnet use 720)

And for non consensus critical changes, the following default values set:

`ergo.chain.reemission.checkReemissionRules = false` - no EIP-27 data set for the new testnet (yet)

The following setting means voting for soft-fork(5.0 soft-fork in this case), if node’s supported protocol version is above network’s

`ergo.voting = { 120 = 1 }`

To make voting started at the same time, additional hard-coded filter starting voting from height 4,096 only. Similar thing will be done in the mainnet.

And magic bytes now set to [2,0,0,3] to avoid peers from previous testnet to join
