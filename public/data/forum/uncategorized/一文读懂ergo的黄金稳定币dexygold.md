---
title: 一文读懂Ergo的黄金稳定币DexyGold
description: 'ErgoForum discussion: 一文读懂Ergo的黄金稳定币DexyGold'
tags:
- dexy
- ergoforum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-dexygold/4745
created: '2024-04-14'
last_activity: '2024-04-14'
posts_count: 1
views: 201
likes: 2
glossary_hits:
- Dexy
---

# 一文读懂Ergo的黄金稳定币DexyGold

> **Forum thread:** [https://ergoforum.org/t/ergo-dexygold/4745](https://ergoforum.org/t/ergo-dexygold/4745)
> **Category:** Uncategorized | **Created:** 2024-04-14 | **Posts:** 1 | **Views:** 201

**Related concepts:** Dexy

---

### Post #1 — @ergonautgcn (2024-04-14)

作者：Ergo Platform

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/e/ec6446853eca67859b3013a3c7d6876129d36bc7.jpeg)

image865×430 54.1 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/e/ec6446853eca67859b3013a3c7d6876129d36bc7.jpeg "image")

如果您是刚接触Ergo的新人，您可能还不知道Ergo区块链已经成功部署了加密货币支持的算法稳定币SigUSD。SigUSD与美元价格挂钩，且尽管加密资产类别在熊市期间出现波动，但仍保持其挂钩状态。随着 DeFi 在 Ergo 上的扩展和新产品的构建，一项令人激动的发展将为Ergo生态系统添加一种新的原生稳定币：DexyGold稳定币。

**何谓** **DexyGold** **？**

DexyGold是一种将在Ergo 上运行的算法稳定币，它代表了加密行业的一些新的、令人激动的东西。 当大多数人想到稳定币时，他们会想到与美元挂钩的原生代币。 DexyGold 将与黄金价格挂钩，黄金被传统金融领域的许多人士视为强大的价值储存手段。 当将 $ERG 和/或其他原生代币转换为稳定币时，DexyGold 为 Ergo 生态系统中的用户提供了一个令人着迷且富有创意的替代方案。

**DexyGold** **的设计**

[DexyGold的设计](https://docs.ergoplatform.com/eco/dexy/#design-overview)极其复杂，集成了基本功能，以确保它对于那些希望在 Ergo 上使用它的人来说仍然是一个可靠的选择。在熊市期间，许多稳定币出现崩溃并脱钩，因此任何新稳定币的设计都必须经过严格的测试，以确保其使用安全。

DexyGold 将通过释放（铸币）合约来运作。 这通过按照预言机池价格出售 $ERG 来实现 Dexy 代币的单向铸造。 然而，通过此合约无法卖出Dexy以换回$ERG。

其设计的另一个特点是流动性池（LP），它旨在促进 Dexy 与 $ERG 的交易。 流动性池采用了一种 Uniswap V2 逻辑，该逻辑会根据预言机池价格进行调整。当预言机价格明显低于流动性池价格时，它还会限制流动性池代币的赎回。

第三个特点是套利机制。 当预言机价格超过流动性池价格时，套利者可以从释放合约中铸造 Dexy 并将其出售给流动性池。这会产生利润并使 Dexy 价格与挂钩保持一致。 套利是加密货币世界的重要组成部分，可以激励用户使用该协议。

DexyGold的第四个功能称为充值交换（Top-Up Swap）。本质上，当预言机价格低于流动性池价格时，释放合约中的$ERG可用于从流动性池购买Dexy，从而推高价格。 此过程由监控两边价格的交换合约监督 - 请注意，它需要最少数量的区块才能进行交换。

最后，DexyGold具有防耗尽措施（Anti-draining Measure）。 这可以说是更重要的安全机制之一。只要涉及到金钱，就一定会出现作恶者。DexyGold 的设计旨在通过在特定时期锁定铸造的 Dexy 代币（或 $ERG）并在盈利期间（基于特定价格）禁用铸造功能来避免释放合约的周期性耗尽。

**是否存在任何潜在的漏洞？**

与大多数 DeFi 协议一样，几乎任何东西都可能存在潜在的漏洞和攻击向量（Attack Vector）（译注：攻击向量是一种路径或手段，黑客可以通过它访问计算机或网络服务器，以传递有效负载或恶意结果。）。如前所述，作恶者交替进行铸造和出售（然后充值流动性池）的耗尽攻击（Draining Attack）可能会耗尽释放合约中的$ERG。 然而，前面提到的防耗尽措施就是为了解决这个问题。DexyGold 的设计也很大程度上依赖于它所使用的预言机。 预言机价格喂入须准确，否则作恶者可能会利用这一点。 巨大的抛售压力也可能构成风险，因此稳定币的稳定机制需要足够稳健以应对波动。

**上线测试网**

DexyGold已经开发了一段时间，最近在测试网上上线。目前尚未给出在主网上发布的正式日期，但测试阶段表明上线主网应该快了。DexyGold 将是同类产品中的头一个，它为 Ergo 用户带来独特且令人激动的 DeFi 机会。

要了解有关 DexyGold 的更多信息，请参阅此[文档](https://docs.ergoplatform.com/eco/dexy/#design-overview)。 还有 Ergo 创始人 Alexander Chepurnoy 制作的关于 DexyGold 的深度[视频](https://www.youtube.com/watch?v=n2hU8DCLLp0)。

请继续关注 Ergo 的博客和社交媒体渠道，了解将来DexyGold上线主网的公告！

原文链接：

<https://ergoplatform.org/en/news/DexyGold-Stablecoin-Live-on-Testnet/>

**免责声明：本文是中文译文，是从英文原文翻译过来的，仅供** **Web 3** **爱好者学习参考使用，不作任何投资建议！读者的一切投资决策和行为皆与本文及作者无关。**
