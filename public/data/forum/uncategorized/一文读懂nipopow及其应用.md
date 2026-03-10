---
title: 一文读懂NIPoPoW及其应用
description: 'ErgoForum discussion: 一文读懂NIPoPoW及其应用'
tags:
- ergoforum
- full-node
- nipopow
- sigma-chains
- spv
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/nipopow/4385
created: '2023-06-19'
last_activity: '2023-06-19'
posts_count: 1
views: 287
likes: 1
glossary_hits:
- Full node
- NiPoPoW
- SPV
- Sigma Chains
---

# 一文读懂NIPoPoW及其应用

> **Forum thread:** [https://ergoforum.org/t/nipopow/4385](https://ergoforum.org/t/nipopow/4385)
> **Category:** Uncategorized | **Created:** 2023-06-19 | **Posts:** 1 | **Views:** 287

**Related concepts:** Full node, NiPoPoW, SPV, Sigma Chains

---

### Post #1 — @ergonautgcn (2023-06-19)

[![NIPoPow and its applications](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/5/527c4ce261c750effbc143ecc0671024ee0a7c9e_2_690x345.jpeg)

NIPoPow and its applications1920×960 193 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/5/527c4ce261c750effbc143ecc0671024ee0a7c9e.jpeg "NIPoPow and its applications")

**工作量证明之非交互式证明**

Ergo区块链包含一个强大的功能，称为NIPoPoW，或工作量证明之非交互式证明。简而言之，NIPoPoW是一种紧凑型数据结构，它对工作量证明区块链上事件的发生进行验证，而无需连接到该区块链网络或下载所有区块头。此功能实际上可用于确认加密货币交易。

Ergo的[区块](https://docs.ergoplatform.com/dev/data-model/block/)不仅包含您可能在比特币等系统中遇到的标准区块头和交易格式，还提供了用于扩展功能的**附加部分** 。例如，“扩展”部分包含必填字段（包括每1,024个区块时段(Epoch)更新一次的NIPoPoW链接）和矿工投票参数，例如当前区块大小。它还拟存储任意字段。

**这种独特的结构使各种类型的节点和客户端能够选择性地只下载必要的区块部分，优化存储空间、带宽和CPU使用率。**

**应用**

以下是NIPoPoW在Ergo生态中的一些创新应用：

[轻客户端](https://docs.ergoplatform.com/dev/protocol/nipopow/nipopow_nodes/)

[轻矿工](https://docs.ergoplatform.com/dev/protocol/nipopow/logspace/)

[侧链](https://docs.ergoplatform.com/dev/protocol/nipopow/nipopow-sidechains/)

NIPoPoW自Ergo区块链创世以来一直是它的基本组成部分。我们致力于不断探索 NIPoPoW的潜力，与我们在[IOHK](https://iohk.io/)的合作伙伴合作扩展这一研究领域。我们期待着看到 NIPoPoW的使用越来越多，我们充满活力的开发者社区不断做出贡献。

**对数空间挖矿**

NIPoPoW的一个显着应用是[对数空间挖矿](https://www.youtube.com/watch?v=s05ypkSC7gk)。这项技术使“轻矿工”能够像轻客户端一样从区块头开始，而无需下载整个区块链。事实上，您可以只保留几个重要的区块来验证整个区块链，从而无需矿工存储完整的区块链集。这种方法可以通过丝绒分叉/软分叉跟Ergo整合，从而避免复杂的硬分叉。

**提高去中心化程度**

NIPoPoW的另一个令人激动的应用是由名为SmartPools的团队在首届Ergo黑客松期间提出的。他们的方法旨在改进**中本聪系数** ，这是一种用于估计网络去中心化程度的指标。 该团队寻求通过为挖矿实体提供抵押智能合约来提高Ergo的去中心化程度，旨在为非矿工投资者提供回报，防止大型GPU矿场主导该系统。

**实现Layer 2区块链**

也许，NIPoPoW最重要的应用是开发Layer 2区块链。这些Layer 2与各种区块链交互，以提高可扩展性并为企业级应用创建私有侧链。他们在Layer 1区块链之上为多样化的用例生成区块链。由于这些Layer 2上的交易不需要持续同步更新，我们可以通过始终维护主链上的所有内容来显着降低网络负载。

**轻客户端**

在考虑大规模采用加密货币所面临的障碍时，**轻客户端** 是必不可少的。大多数加密货币用户没有运行全节点的必需工具。运行一个全节点意味着拥有强大的处理器、电力成本，以及可能需要数百GB的内存来存储整个区块链。

NIPoPoW使Ergo能够构建一个移动[SPV](https://docs.ergoplatform.com/node/modes/light-spv-node/)客户端，只需要下载大约100KB的区块头。 验证交易是否发生在该区块链上变得简单，使用户能够使用更高效、更便捷的手机钱包与区块链进行交互。

NIPoPoW也可用于使用UTXO集快照创建[修剪版全节点](https://docs.ergoplatform.com/node/modes/pruned-full-node/)（Pruned Full-Node）。

**对数挖矿**

矿工须不断维护区块链，无论是Ergo、比特币还是其他PoW共识模型。除了使用计算资源外，矿工还使用存储资源来维护自创世区块起的所有区块链数据。

一位新矿工的疑问：从创世区块下载所有数据是否绝对必要？为什么不能只下载最相关的区块来维护网络？

区块链的区块头应该足以访问必要的数据。[NIPoPoW](https://nipopows.com/)（工作量证明之非交互式证明）可以整合以形成相互关联的区块头集，从而减少历史数据存储。

当需要访问区块链中的关键区块时，矿工应该能够从旧区块的区块头高效地执行此操作。 那是因为每个新区块必须指示所有当前网络。随着新区块的创建，一组新的区块头足以检查当前的UTXO集。由于新区块包含旧的字符串区块头集的数据，因此无需下载所有区块链数据即可实现轻挖矿（Light Mining）。

我们试图通过串接旧的PoW历史记录并将其编译成快照来优化什么？

如果我们说**C=old** 区块和**K=new** 区块，那么当**K=new** 区块是常量且**C=old** 区块是线性的时，快照中包含的区块可以增长。但它也可能会缩小，具体取决于智能合约应用。 矿工维护大量数据的问题可以通过NIPoPoW进行引导来解决。

**NIPoPoW实现**

超级区块（或轻客户端）无需访问所有区块，就足以验证所有区块。这是通过智能合约维护区块链的历史数据来实现的。可以通过“丝绒”分叉或软分叉在NIPoPoW上引入这些超级区块客户端，然后“*轻* ”矿工可以通过“在线”挖矿进行引导。

NIPoPoW使智能合约能够维护历史数据，以便新的“*轻* ”矿工可以以所谓的“在线”方式工作。这就是对数空间挖矿的主要思想。不需要的部分可以编译到区块链本身，而不是将所有区块链数据本地保存在节点上。新矿工不需要携带历史数据，随着他们继续挖矿，新的“轻”矿工将帮助其他“轻”矿工引导。不再需要携带旧的历史数据，老矿工可以放弃历史数据进行更轻的挖矿。这就是矿工群体可以放弃旧区块并使系统更加高效的方式。

**NiPoPoW侧链**

NiPoPoW通过***简化支付验证*** (SPV)证明赋能无需信任的侧链，且可以抵抗此类攻击，同时也足够小，它们实际上可以通过网络发送。

虽然之前已经提出了“紧凑型 SPV证明”，但事实证明它们容易受到某些攻击，这些攻击可能会让矿工窃取留在侧链上的钱。

简单来说，NIPoPoW在侧链中可以大有作为。两个或多个独立的链可以通过NIPoPoW整合，而无需更改其他链。这种整合将消除对依赖于DAO治理的代币的需求，例如“包装代币”。

原文链接:

<https://docs.ergoplatform.com/dev/protocol/nipopows/>

**欢迎转发！**
