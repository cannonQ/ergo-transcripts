---
title: Sigma Chains 如何将比特币带入Ergo生态
description: 'ErgoForum discussion: Sigma Chains 如何将比特币带入Ergo生态'
tags:
- amm
- autolykos
- box
- ergoforum
- sigma-chains
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/sigma-chains-ergo/4842
created: '2024-08-22'
last_activity: '2024-08-22'
posts_count: 1
views: 101
likes: 1
glossary_hits:
- AMM
- Autolykos
- Box
- Sigma Chains
---

# Sigma Chains 如何将比特币带入Ergo生态

> **Forum thread:** [https://ergoforum.org/t/sigma-chains-ergo/4842](https://ergoforum.org/t/sigma-chains-ergo/4842)
> **Category:** Uncategorized | **Created:** 2024-08-22 | **Posts:** 1 | **Views:** 101

**Related concepts:** AMM, Autolykos, Box, Sigma Chains

---

### Post #1 — @ergonautgcn (2024-08-22)

作者：Ergo 平台

原文发布日期：2024 年7月16日

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/b/b78d14f2f9095aaf84fb9286c9343a80e5a9ae08_2_690x345.jpeg)

image865×433 53.2 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/b/b78d14f2f9095aaf84fb9286c9343a80e5a9ae08.jpeg "image")

Ergo 强大、灵活且安全的智能合约功能为 Ergo 上的比特币 DeFi 打开了一系列新用例的大门。以下是 Sigma Chains 如何在两个平台之间搭桥。

**什么是 Sigma Chains** **？**

Sigma Chains 是 Ergo 扩展其区块链生态系统的关键解决方案之一。

与比特币和其他类似的区块链一样，Ergo 在其基础链的速度、可扩展性和安全性之间做出了关键的权衡。Ergo 在其主区块链上支持有限的吞吐量，反而选择优先考虑安全性（尽管如此，它每 2 分钟处理一次区块，支持的交易量远远超过比特币）。

通过使用 Ergo 基础层保护的无限数量的 Sigma Chains 或侧链，可以实现更大的扩展。这些链也可以有自己的共识规则，也可以以不同的方式进行定制。这提供了一种两全其美的方法，其中 Sigma Chains提供了高度的灵活性，而不会牺牲安全性。

这在实践中意味着，Sigma Chains可以启动并针对特定用例进行定制，同时在 Ergo 上获得保护。这为扩展和在基于 UTXO 的链上创建各种去中心化金融 (DeFi) 应用程序提供了一个极其通用的模型。

**Sigma Chains** **有什么特别之处？**

Sigma Chains成为 Ergo 生态系统如此引人注目的补充的原因有很多。

首先，扩展 Ergo 本身就是一个有价值的目标。将交易移出主链可以减少拥塞并确保系统具有面向未来性，从而允许大量用户涌入，而不会影响其他平台的高成本和延迟。

然而，Sigma Chains不仅仅是一种扩展区块链的手段。该行业迫切需要安全且多样化的基础设施来实现跨链互操作性。这是区块链领域的一个重大挑战，其中不同链之间的跨链桥和通信是安全漏洞的长期来源。 Web3 世界中一些最大、最严重的黑客攻击都针对了跨链桥，攻击者有时会窃取价值数亿美元的代币。

Sigma Chains 使用零知识 (ZK) 证明和阈值签名（由 Ergo 的 Sigma 协议赋能的功能，可为复杂的加密操作提供原生、高效的支持）来提供链间无缝、安全且无需信任的通信。数据可以在 Ergo 生态系统以及链接到 Ergo 的其他区块链中顺畅无缝地移动。

与区块链领域的其他一些扩展解决方案不同，Sigma Chains 的安全模型很明确，这意味着开发者和最终用户可以放心地与这些平台交互。此外，可以根据设计用于支持的应用程序的需求，为侧链设置自己的安全功能。

同样，侧链可以通过其他方式进行定制 - 例如，它们的共识方法或挖矿模型。同样，这允许开发者创建适合其应用程序需求的链。

**侧链挖矿模型**

Sigma Chains不需要遵循与 Ergo 主链相同的方法，后者使用 GPU 友好、内存高占用的 Autolykos 共识挖矿算法。相反，Sigma Chains可以配置为使用任何算法和任何硬件，无论是 CPU、GPU 还是 ASIC，均可。

合并挖矿（Merged mining） - 使用主链上完成的工作来保护另一个平台 - 使矿工能够从保护多条链中受益。合并挖矿有不同的模型。

直接合并挖矿使矿工能够保护 Ergo 主链和 Sigma Chain。这允许这两条链之间实现无缝和无信任的互操作性。更复杂的选择是双重合并挖矿，它允许在 Ergo 和其他工作量证明链（包括比特币）之间建立桥接。使用 Autolykos 和 SHA256（比特币使用）的双重合并挖矿允许 Sigma Chain充当比特币侧链。比特币交易提交到比特币区块链，其他数据（例如与 dApp 执行相关的信息）存储在侧链上。

Sigma Chain 机会

Sigma Chains 提供的安全性和功能性相结合，可轻松将其他基于 UTXO 的加密货币桥接到 Ergo 生态系统，在那里它们可用作不同 dApp 的抵押品。

例如，可以使用双合并挖矿侧链将比特币桥接到Ergo。包装BTC（Wrapped BTC）将存在于 Ergo 侧链上。虽然这将通过比特币区块链上的提交来确保安全，但侧链上的进一步指令将允许用户将其视为原生资产并将其部署在 Ergo 的 DeFi 生态系统中。

这意味着比特币可以在 Ergo 的去中心化交易所和 AMM 上交换，存入流动性池，用作借贷协议的抵押品，或锁定在机枪池中以支持稳定币。

抵押品是 DeFi 的命脉。各平台的成败取决于它们吸引的总锁定价值（TVL）。没有这种关键的流动性，就不会有用户，也不会活跃。这就是为什么许多平台不遗余力地快速吸引新的流动性提供者。通过瞄准比特币持有者（除 ETH 持有者外，这是加密货币世界中最大的流动性来源），Ergo 寻求吸引大量 TVL，同时为比特币用户提供有价值的服务。可以使用 BTC 作为抵押品的地方相对较少，而且在比特币 L2 上几乎没有 DeFi 成功案例。

**链的安全性**

最后，Ergo 的智能合约非常灵活，因此允许许多创新用例将这些协议的使用与侧链本身的安全性联系起来。例如，可以将一定比例的 dApp 协议费用存入专用的智能合约并用于补充矿工的收入，从而根据生态系统内的活跃程度增加侧链的安全性。这意味着随着 TVL 和交易量的增加，哈希率也会增加，从而确保给定的链或 dApp 不会成为黑客的过于容易的目标。

阅读有关 [Ergo 上 DeFi 的机会和挑战](https://ergoplatform.org/en/blog/Three-Opportunities-And-Challenges-For-DeFi-On-Ergo/)的更多信息。要了解有关 Sigma Chains 的更多信息，请查看 [Ergo 文档](https://docs.ergoplatform.com/uses/sidechains/sigma-chains/)。

欢迎转发！

原文链接：[How Sigma Chains Will Bring Bitcoin To Ergo | Ergo Platform](https://ergoplatform.org/en/blog/How-Sigma-Chains-Will-Bring-Bitcoin-To-Ergo/)
