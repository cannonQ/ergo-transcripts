---
title: Ergo区块链如何解决将来数据量过大的问题?
description: 'ErgoForum discussion: Ergo区块链如何解决将来数据量过大的问题?'
tags:
- box
- ergoforum
- nipopow
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo/4387
created: '2023-06-21'
last_activity: '2023-06-21'
posts_count: 1
views: 240
likes: 1
glossary_hits:
- Box
- NiPoPoW
---

# Ergo区块链如何解决将来数据量过大的问题?

> **Forum thread:** [https://ergoforum.org/t/ergo/4387](https://ergoforum.org/t/ergo/4387)
> **Category:** Uncategorized | **Created:** 2023-06-21 | **Posts:** 1 | **Views:** 240

**Related concepts:** Box, NiPoPoW

---

### Post #1 — @ergonautgcn (2023-06-21)

[![Mining in Logarithmic Space NIPoPoW Power and Ergo](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/d/d1b321aefd1144edc9f5ea21903da9631849b727_2_690x306.png)

Mining in Logarithmic Space NIPoPoW Power and Ergo1280×568 283 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/d/d1b321aefd1144edc9f5ea21903da9631849b727.png "Mining in Logarithmic Space NIPoPoW Power and Ergo")

本文基于IOHK[最近发表](https://eprint.iacr.org/2021/623.pdf)的一篇论文。如需其他资源，请观看该[视频](https://www.youtube.com/watch?v=s05ypkSC7gk)。

**介绍**

无论是Ergo、比特币，还是其他PoW共识模型，都需要矿工持续维护该区块链。除了使用计算资源之外，矿工还使用存储资源来维护自创世区块算起的所有区块链数据。

**问题**

新矿工的问题：下载自创世区块算起的所有数据是否绝对必要？为什么不能只下载最相关的区块来维护网络？

**解决方案**

区块链的区块头应该足以访问必要的数据。[NIPoPoW](https://nipopows.com/)（工作量证明之非交互式证明）可以整合，以形成互连的区块头集，从而减少历史数据存储。

当需要访问区块链中的关键区块时，矿工应该能够从旧区块的区块头有效地执行此操作。 这是因为每个新区块必须指示当前网络的全部。当创建新区块时，一组新的区块头足以检查当前的UTXO集。由于新区块包含旧的串接区块头集的数据，因此无需下载所有区块链数据即可实现轻挖矿（Light Mining）。

我们试图通过串接旧的PoW历史记录并将其编译成快照来优化什么？

如果我们说C=旧区块且K=新区块，那么当K=新区块为常数且 C=旧区块为线性时，快照中包含的区块会增大。但它也可能会缩小，具体取决于智能合约应用程序。矿工维护大量数据的问题可以通过NIPoPoW引导来解决。

**NIPoPoW** **实现**

超级区块（或轻客户端）足以验证所有区块，而不是访问所有区块。这是通过智能合约维护区块链的历史数据来实现的。在NIPoPoW上引入这些超级区块客户端可以通过丝绒软分叉来完成，此后“轻”矿工可以通过“在线”挖矿进行引导。

NIPoPoW使智能合约能够维护历史数据，以便新的“轻”矿工能够以所谓的“在线”方式工作。这就是对数空间挖矿的主要思想，即不是将所有区块链数据保存在本地节点上，而是可以将不需要的部分编译到区块链本身中。新矿工不需要携带历史数据，当他们继续挖矿时，新的“轻”矿工将帮助其他“轻”矿工引导。无需携带旧的历史数据，老矿工可以放弃历史数据进行更轻的挖矿。这就是整个矿工群体可以放弃旧区块并使系统更加高效的方式。

**论文摘要**

有社区用户提出：针对数据量随着时间推移将来会变得过大的问题，Ergo区块链是如何“瘦身”的？这里[IOHK等](https://eprint.iacr.org/2021/623.pdf)发表的《对数空间挖矿》的摘要部分给出了答案：对区块链进行修剪，即以垃圾的形式收集不再需要的旧区块。

*“* *区块链维护两种类型的数据：应用数据和共识数据。为了实现长期的区块链可扩展性，须对这两者进行修剪* *（Pruning）* *。虽然大量文献探讨了应用数据（UTXO、账户余额和合约状态）的修剪，但很少有人谈论共识数据（区块头）的永久修剪。我们提出了* *这样* *一个协议，* *即当旧区块不再被需要时，它* *允许通过* *以* *垃圾* *形式收集这些* *旧* *区块* *来修剪区块链。这些区块可以简单地丢弃，且不再被任何矿工存储。我们证明所有矿工都可以成为轻矿工* *（* *Light Miner* *）* *，且不会损害安全。我们的协议基于超级区块* *（* *S* *uperblock）* *的概念，超级区块* *指* *已达到异常高的难度* *的区块* *。我们利用它们来* *表示* *底层的工作量证明，而无需对其进行说明、存储或传输。应用我们的* *修剪* *后，共识数据的存储和通信需求呈指数级降低。*

*我们* *研发了* *新的概率数学方法来分析随机* *预言机* *模型中的协议。我们证明，在1/3对手的不间断诚实多数假设下，我们的协议既安全又简洁。我们的协议是第一个实现始终安全、始终简洁、在线工作量证明* *之非交互式证明（NIPoPoW）* *的协议，* *这些* *是对数空间* *挖矿机制* *的所有必要* *组成部分* *。我们的工作* *成果* *不仅应用于* *挖矿* *领域，还对最先进的超轻客户端和跨链桥进行了改进。* *”*

原文链接：[Mining in Logarithmic Space: NIPoPoW Power and Ergo | Ergo Platform](https://ergoplatform.org/en/blog/2021-07-19-mining-in-logarithmic-space-nipopow-power-and-ergo/)

[eprint.iacr.org](https://eprint.iacr.org/2021/623.pdf)

### [623.pdf](https://eprint.iacr.org/2021/623.pdf)

321.33 KB
