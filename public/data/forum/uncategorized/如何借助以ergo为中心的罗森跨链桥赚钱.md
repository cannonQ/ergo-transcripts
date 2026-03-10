---
title: 如何借助以Ergo为中心的罗森跨链桥赚钱
description: 'ErgoForum discussion: 如何借助以Ergo为中心的罗森跨链桥赚钱'
tags:
- duckpools
- ergoforum
- ergoscript
- rosen-bridge
- sigmafi
- spectrum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo/4838
created: '2024-08-15'
last_activity: '2024-08-15'
posts_count: 1
views: 130
likes: 2
glossary_hits:
- Duckpools
- ErgoScript
- Rosen Bridge
- SigmaFi
- Spectrum
---

# 如何借助以Ergo为中心的罗森跨链桥赚钱

> **Forum thread:** [https://ergoforum.org/t/ergo/4838](https://ergoforum.org/t/ergo/4838)
> **Category:** Uncategorized | **Created:** 2024-08-15 | **Posts:** 1 | **Views:** 130

**Related concepts:** Duckpools, ErgoScript, Rosen Bridge, SigmaFi, Spectrum

---

### Post #1 — @ergonautgcn (2024-08-15)

原文作者：Ergo Platform  
原文发布日期：2024年8月9日

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/8/8725c4b0684a7cefce7eae4a53093dff6df79741_2_690x345.jpeg)

image865×433 120 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/8/8725c4b0684a7cefce7eae4a53093dff6df79741.jpeg "image")

比特币已通过罗森跨链桥（Rosen Bridge）正式接入 Ergo 生态系统！罗森跨链桥这个新建的去中心化基础设施实现了 BTC 和 Ergo 之间的无需信任转移，允许比特币以 rsnBTC 的形式部署在 Ergo 不断增长的 DeFi 生态系统中。作为扩展UTXO区块链，Ergo的智能合约由 ErgoScript 和 Sigma 协议提供支持，支持开发在极其安全的基础层上运行的强大 dApp——现在可以使用比特币作为抵押品。

让我们仔细看看罗森跨链桥、保护它的无需信任实体，以及如何通过参与和推动 Ergo 基础设施的这一创新元素来赚取收入。

**那些希望通过罗森跨链桥转移资产的人可以在 [app.rosen.tech](https://t.co/SBhBAhWvWV)** **上访问它。目前，该跨链桥支持 Ergo** **、Cardano** **和比特币资产，但该桥也将在不久的将来支持其他链，包括 EVM** **。**

**什么是罗森跨链桥？**

罗森跨链桥是跨链桥，曾经为 Ergo 区块链定制开发。它允许在不同的区块链（最初是 Cardano 和 Ergo，现在还有比特币）之间安全地转移资产，使用户能够享受多个网络的好处。

跨链桥有许多不同的模型，但总的来说，跨链桥技术历来是区块链领域一个独特的薄弱元素。跨链桥的复杂性通常需要在两个或多个区块链之间同时执行大量智能合约。这意味着跨链桥通常会带来特别大的攻击面，过去黑客利用这些漏洞提取和窃取锁定的资金。

Ergo 采取了一种简单明了的方法来最大限度地减少智能合约在 Rosen 桥接的链上的作用。**它通过将所有智能合约功能的执行限制在** **Ergo** **区块链上来实现这一** 点，且安全模型依赖于两个关键方：Watcher（观察者）和Guard（守卫）。

Watcher监视目标区块链的关键事件。然后，它们通过在 Ergo 上创建交易将这些事件传递给Guard，Guard解析这些事件，检查事件和共识是否准确，并在相关区块链上执行交易。Rosen 旨在在扩展时保持安全性，为每个新链添加单独的模块，并将其集成到生态系统中。

值得注意的是，Ergo 之所以被选为罗森跨链桥智能合约的中心，是因为该平台具有经过了时间考验的安全性。作为一个鼓励开源开发的网络，Ergo 的脚本语言和智能合约已被确立为整个行业中最稳健且最安全的语言和合约之一。

**Rosen** **费用和** **RSN** **代币**

使用罗森跨链桥的费用为总交易金额的 0.5% 或 10 美元（以较大者为准），外加网络费用。Guard可以集体调整跨链桥费用，而网络费用则根据区块链平台而有所不同（Ergo 的费用是静态的）。

此外，RSN 代币在确保跨链桥安全方面发挥着重要作用。总之，费用和 RSN 代币的使用提供了多种通过支持 Rosen 基础设施来赚钱的方式。

**Watcher** **费用**

Watcher可以被视为预言机，监控各自区块链的存款事件（接入罗森跨链桥的每个链都需要Watcher）并将该信息传递给Guard。Watcher提供一项重要服务，它们共同构成一个去中心化的 p2p 节点网络，确保没有单点故障。

每个Watcher集没有理论限值（目前为999软限值），其中 60% + 1 必须就发生的事件达成一致，然后才被视为有效并传达给Guard。此参数可以由Guard集调整。假设有一个完整的Watcher集，则需要 601 名Watcher同意，从而降低串通的可能性。可以有多个Watcher集，但从长远来看，不太可能需要两个以上的Watcher集。

Watcher从罗森跨链桥获得 70% 的交易费用。

**Guard** **费**

当Watcher收集和传达有关其目标网络的信息时，Guard会根据这些信息执行交易。该模式有点类似于比特币网络的全节点基础设施，这些全节点确保在网络周围可靠地传达信息，而矿工则负责安全。在比特币的情况下，每个挖矿节点都是一个全节点，但并非每个全节点都是挖矿节点。

Guard 集是一个联合节点组，共同负责管理 Rosen 核心。Guard 必须锁定一定数额的资金作为抵押品，以 RSN 代币支付，以确保它们的诚实。如果 Guard 恶意行事，它们的抵押品将立即被大幅削减。即使一些 Guard 被证明不可靠，Guard 集也可以安全运行。Guard 总共获得 30% 的跨链桥交易费。

**另外两种赚钱方式**

Ergo 的罗森跨链桥依赖于 RSN 和流动市场的准确定价。因此，将 RSN 纳入 Ergo 的 DeFi 生态系统对于服务的顺利运行至关重要。

拥有 RSN 的用户可以将他们的代币存入 Spectrum/Splash 上的[流动性池](https://app.spectrum.fi/ergo/liquidity)， Spectrum/Splash 是Ergo 的主要去中心化交易所。为了做到这一点，您将需要 ERG 和 RSN。流动性可以随时提取，但流动性提供者 (LP) 需要注意，他们可能会受到无常损失 (IL) 的影响。当资产价格比率在存入流动性池后上升或下降时，就会发生这种情况。如果流动性提供者从池中提取资产，他们获得的美元等值金额可能比他们仅仅持有资产而不提供流动性时获得的金额要少。这种损失被描述为“无常损失”，因为它只有在提取时才会具体化。如果流动性提供者等待且价格比率回到起点，他们将能够提取代币的初始价值。发生这种情况的原因是流动性提供者拥有池的一定比例，而不是绝对数量的代币。

为了补偿用户无常损失的风险，流动性提供者会获得池中交易费的一部分。他们还可能获得额外的代币，称为流动性挖矿奖励。流动性提供者的当前回报率可以在 Spectrum/Splash 的[流动性池页面](https://app.spectrum.fi/ergo/liquidity)上查看。

使用 RSN 赚钱的另一种选择是在 Ergo 的借贷协议 [Duck Pools](https://www.duckpools.io/) 上借出代币。与将 RSN 存入流动性池一样，回报率也各不相同。

此外，有兴趣的各方可以在 [SigmaFi](https://sigmafi.app/#/) 创建债券，以借出或借入 Rosen。SigmaFi 的独特之处在于，在到期之前不会采取清算行动，借款人可以在债券请求中设定自己的利率。

**了解更多**

您可以通过阅读 [Ergo 的文档](https://docs.ergoplatform.com/eco/rosen/)了解有关罗森跨链桥的更多信息，或者从 Ergo 网站获取有关 Ergo 及其生态系统的更多信息。

加入 [Ergo Discord](https://discord.gg/ergo-platform-668903786361651200) 与社区联系并与专家讨论罗森跨链桥和 DeFi 机会。了解如何设置 Watcher 或 Guard，并探索如何使用 Ergo 的去中心化交易和借贷应用程序。

欢迎转发

原文链接：[Earning With The Rosen Bridge | Ergo Platform](https://ergoplatform.org/en/blog/Earning-With-The-Rosen-Bridge/)
