---
title: 原创：ErgoScript树立区块链编程语言新范式
description: 'ErgoForum discussion: 原创：ErgoScript树立区块链编程语言新范式'
tags:
- box
- ergoforum
- ergoscript
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergoscript/4725
created: '2024-03-29'
last_activity: '2024-03-29'
posts_count: 1
views: 155
likes: 1
glossary_hits:
- Box
- ErgoScript
---

# 原创：ErgoScript树立区块链编程语言新范式

> **Forum thread:** [https://ergoforum.org/t/ergoscript/4725](https://ergoforum.org/t/ergoscript/4725)
> **Category:** Uncategorized | **Created:** 2024-03-29 | **Posts:** 1 | **Views:** 155

**Related concepts:** Box, ErgoScript

---

### Post #1 — @ergonautgcn (2024-03-29)

作者：Ergo平台  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/0/065f8025d26fb5d200ca356a75ebf24271fc5bb1.jpeg)

image865×434 41.2 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/0/065f8025d26fb5d200ca356a75ebf24271fc5bb1.jpeg "image")

**区块链编程语言**

计算机编程领域的编码语言数目繁多且种类各异。没有一种语言适合所有情况，每种语言都有不同程度的优缺点。如果您熟悉编码，那么您无疑听说过JavaScript、Python、Java、C#、C++、Solidity、Rust 等等。

在区块链设计方面，下面几种编码语言已用于构建著名的加密货币网络。  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/9/98db322b0957e46b3fb184804cf49d1837ff9233_2_690x220.png)

image864×276 34.5 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/9/98db322b0957e46b3fb184804cf49d1837ff9233.png "image")

**Ergo** **平台：脚本编写和工作量证明区块链的新范式**

当 Alex Chepurnoy（又名 kushti）和 Dmitry Meshkov 开始设计新的第三代智能合约区块链时，他们希望创建一个将比特币的工作量证明和未花费交易支出（UTXO）设计与富有表达性的智能合约结合起来的网络。 本质上，目标是将比特币经过时间考验的UTXO模型与以太坊支持智能合约和去中心化应用程序的能力结合起来。这项努力的核心是希望构建一条造福众生的区块链。优先考虑改善普通人生活的产品。通过这一努力，他们创建并推出了Ergo 平台。

为了构建 Ergo，他们需要创建一种满足其独特需求的编程语言。kushti 和 Meshkov 共同开发了一种新的脚本语言 ErgoScript，以便他们可以在Ergo平台上编写灵活且安全的智能合约。

**什么是** **ErgoScript** **？**

ErgoScript 是用于在 Ergo 区块链上编写智能合约的编程语言。它尤其以其创建先进的金融工具和去中心化应用程序（dApp）的能力而闻名，重点关注安全性和可扩展性。它的设计源自Scala，Scala是一种多范式编程语言，旨在以简洁、优雅和类型安全的方式表达常见的编程模式。 根据 Ergo 白皮书，ErgoScript 被描述为：

*“…* *一种强大且协议友好的加密货币脚本语言。使用 ErgoScript* *编写的程序用于指定可以花费货币的条件。* *该语言支持一种称为西格玛（* *Σ(Sigma)* *）* *协议的非交互式零知识证明，并且足够灵活，可允许环签名、多重签名、多种货币、原子交换、自我复制脚本和长期计算* *”。*

ErgoScript 的主要特征如下：

1. 基于 Sigma 协议：ErgoScript 基于西格玛协议（或 Σ 协议）构建，它是一种加密协议。 在此基础上可以创建灵活且高度安全的智能合约。
2. 声明式方法：与描述如何做某事的命令式语言不同，在 ErgoScript 中，您需要描述须满足哪些条件。 它是一种声明性语言，其中区块链的状态决定脚本是否有效。
3. 链下代码：Ergo允许在链下执行复杂的操作，从而减少区块链上的负载。 ErgoScript 用于确保这些操作在提交到区块链时遵守约定的规则。
4. 灵活性和安全性：该语言旨在为创建合约提供高度的灵活性，同时确保强大的安全性。这对于 Ergo 平台上的金融合约和去中心化金融 (DeFi) 应用程序来说尤为重要。
5. 成本效益：Ergo 的设计与 ErgoScript 相结合，旨在最大限度地降低智能合约的计算成本。 这对于维护可扩展且高效的区块链系统至关重要。
6. 与 Ergo 功能整合：ErgoScript利用了Ergo的独特功能，例如盒子存储模型，其中数据和代币存储在区块链上的“盒子”中，且可以设置关于如何转换和使用这些盒子的复杂条件。

**ErgoScript** **代码：示例**

以下脚本包含花费交易输出的条件：  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/5/561d65ea8bf9250ab277875d7edb8276ab954b68_2_690x437.png)

image865×548 190 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/5/561d65ea8bf9250ab277875d7edb8276ab954b68.png "image")

当此脚本附加到 Ergo 区块链上未花费交易输出 (UTXO) 时，它会施加以下条件：区块链须已超过区块高度 1000，且输出须发送到指定的公钥才能花费。 这种脚本可用于时间锁定合约或确保资金仅发送给特定接收者。

如果您是一名开发者，且对Ergo平台如何适用于您想要构建的产品感到好奇，建议您深入了解 Ergo 文档的[入门部分](https://docs.ergoplatform.com/dev/get-started/)。

**结论**

虽然 ErgoScript 具有多种优势，但值得注意的是，区块链构建的“最佳”语言可能会根据项目的具体需求和目标而有所调整。然而，ErgoScript 特别适合需要高安全性、高级合约功能和交易处理效率的项目。随着时间的推移，ErgoScript已被证明是Ergo 生态系统中开发者经过时间考验的必备工具，为构建各种去中心化解决方案提供了稳健的框架。

原文链接：

[https://ergoplatform.org/en/blog/Exploring-ErgoScript-Ergo’s-Native-Scripting-Language/](https://ergoplatform.org/en/blog/Exploring-ErgoScript-Ergo%E2%80%99s-Native-Scripting-Language/)

**免责声明：本文是中文译文，是从英文原文翻译过来的，仅供** **Web 3** **爱好者学习参考使用，不作任何投资建议！读者的一切投资决策和行为皆与本文及作者无关。**
