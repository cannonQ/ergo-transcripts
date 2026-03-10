---
title: 创新：Ergo稳定币协议Gluon引入波动币概念
description: 'ErgoForum discussion: 创新：Ergo稳定币协议Gluon引入波动币概念'
tags:
- ergoforum
- gluon
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-gluon/4712
created: '2024-03-16'
last_activity: '2024-03-16'
posts_count: 1
views: 265
likes: 1
glossary_hits:
- Gluon
- SigmaUSD
---

# 创新：Ergo稳定币协议Gluon引入波动币概念

> **Forum thread:** [https://ergoforum.org/t/ergo-gluon/4712](https://ergoforum.org/t/ergo-gluon/4712)
> **Category:** Uncategorized | **Created:** 2024-03-16 | **Posts:** 1 | **Views:** 265

**Related concepts:** Gluon, SigmaUSD

---

### Post #1 — @ergonautgcn (2024-03-16)

作者：Ergo平台  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/d/d2059ac53a6acf1dd8f14201946e25726c8b60ee.jpeg)

image865×434 54.3 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/d/d2059ac53a6acf1dd8f14201946e25726c8b60ee.jpeg "image")

Gluon 是一种全新的创新稳定币协议，构建目的是为了硬升级Ergo上现有的稳定币，例如 SigmaUSD。 这个全新的协议由 Bruno Woltzenlogel Paleo 博士设计，代表了 Ergo 区块链上稳定币技术的巨大飞跃。在本文中，我们将揭示使其成为一个硬货级且万无一失的协议的技术细节和机制。

**全新的创新模式**

Gluon 出自Bruno之手，他在研究了 Djed 和 SigmaUSD 的经验教训后，探索了流动性池，并从核物理学中汲取灵感，设计了一种针对预言机缺陷更加稳健的稳定币协议（译注：Bruno博士是一位技术大咖，学术成就颇丰，发表过大量论文，包括区块链领域的，曾是Cardano背后技术公司IOHK的技术负责人，曾参与Cardano算法稳定币Djed的开发工作）。

Bruno、Alexander Chepurnoy（Ergo 创始人）、Kii、Sangeet 以及 Djed 联盟早在 2023 年 [Ergo周年庆峰会](https://www.youtube.com/watch?v=tnvm1we6xts&list=PL8-KVrs6vXLRxmOmprVdXkHDcO4IaQZOY&index=23&t=803s)期间就开始致力于在 Ergo 上实现新的稳定币协议。

了解当前的流动性池如何保护流动性提供者免受大型交易的影响后，Gluon使用类似（但双重机制）来保护用户免受可能利用预言机缺陷的大型交易的影响。流动性池的“二重性”源于使用储备金中的一种基础资产，同时发行两种可以相互交换的新资产（稳定币和**波动币**）。

之前的稳定币协议主要关注 ERG 和稳定币之间的相互作用，而 Gluon的新颖思维方式创造了一个新的焦点，即稳定币和波动币之间的关系。这两项新创建的资产存在于储备金之外。

**受物理学启发的方法**

受到一系列行动和反应的启发，包括裂变、聚变、β 衰减加和 β 衰减减的启发，Gluon 为用户提供了前所未有的灵活性来管理稳定币和储备金币资产。

裂变（Fission）是支撑二重性的机制，允许ERG代币分裂为稳定币和储备金币。另一方面，聚变(Fusion)将这两者结合起来以逆转该过程并重获ERG代币。 最后，β衰减加和β衰减减类似于传统的流动性池互换，允许人们将不稳定的代币交换为稳定币，反之亦然。

这种方法的主要收获是，最终，Gluon 协议利用上述机理来受益于：

**可逆性（** **Reversibility** **）：** 指将中子和质子融合变回原始资产（ERG）的能力。

**自主性（** **Autonomy** **）：** 指协议一旦部署在区块链上，就会自行运行和维护。不需要第三方来监督 Gluon，这也意味着该协议具备以下特征：

**零治理（** **Zero-governance** **）：** 指该协议不需要中央机构。

**不可篡改（** **Immutable** **）：** 指协议保持不变，这保证了作恶者无法修改智能合约的逻辑以从中获利。

**免寻租（****Rent-seeking free****）\*\*\*\*：** 指由于该协议是自主且无需许可的，因此任何第三方都无法从其部署中收取费用。 因此，该协议变得免费，并充当区块链上的公共基础设施。

**用户友好且透明的方法**

Gluon的核心是一个由严格的反应方程式和价格方程式驱动的透明定价框架。 通过利用 Q 函数并结合Beta 衰减费用公式，Gluon 确保其稳定币和储备金币资产的定价公平透明，这意味着用户可以验证费用是如何达成的，从而通过该模型创造一种信任感和安全感。

此外，Gluon 通过直观的界面优先考虑用户体验，简化了稳定币和储备金币的买卖。 通过将复杂的交易简化为用户友好的操作，Gluon 使所有技术知识水平的用户都能无缝参与稳定币生态系统。

**Gluon** **的首次亮相**

在去年Ergo周年庆峰会上介绍这一创新协议后，积极的开发工作就开始了，严格的软件开发流程正在进行中。 Kii 主导后端合约开发，Sangeet 专注于前端，Gluon 正在等待其正式亮相。 通过 [Djed Alliance](https://docs.djed.one/about-us/the-djed-alliance)、[The Stable Order](https://docs.djed.one/about-us/the-stable-order) 和 Ergo 社区的持续合作和参与，Gluon 将定义 Ergo 上稳定币的未来，提供新的稳定性和创新。

截至目前，一场为 Gluon 选择徽标的公开竞赛正在进行中，公共测试网的发布也即将到来，您可以在 [Djed Alliance Discord](https://discord.com/invite/xYuTecYRhn) 中了解更多相关信息。

原文链接：

<https://ergoplatform.org/en/blog/Introducing-Gluon-the-future-of-stablecoin-protocols-on-Ergo/>

**免责声明：本文是中文译文，是从英文原文翻译过来的，仅供** **Web 3** **爱好者学习参考使用，不作任何投资建议！读者的一切投资决策和行为皆与本文及作者无关。**
