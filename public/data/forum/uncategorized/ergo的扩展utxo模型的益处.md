---
title: Ergo的扩展UTXO模型的益处
description: 'ErgoForum discussion: Ergo的扩展UTXO模型的益处'
tags:
- box
- ergoforum
- eutxo
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-utxo/4381
created: '2023-06-14'
last_activity: '2023-06-14'
posts_count: 1
views: 333
likes: 0
glossary_hits:
- Box
- eUTXO
---

# Ergo的扩展UTXO模型的益处

> **Forum thread:** [https://ergoforum.org/t/ergo-utxo/4381](https://ergoforum.org/t/ergo-utxo/4381)
> **Category:** Uncategorized | **Created:** 2023-06-14 | **Posts:** 1 | **Views:** 333

**Related concepts:** Box, eUTXO

---

### Post #1 — @ergonautgcn (2023-06-14)

[![eUTXO_model _05062023](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/9/9c9db2f0457a0e93ecdf7251f7118912a5937815_2_690x345.jpeg)

eUTXO\_model \_050620231280×640 64.1 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/9/9c9db2f0457a0e93ecdf7251f7118912a5937815.jpeg "eUTXO_model _05062023")

Ergo是Layer 1工作量证明区块链，它采用的是扩展UTXO（eUTXO）模型。eUTXO指扩展未花费交易输出，并被其他几个著名的区块链使用，例如Cardano、Komodo和Nervos Network等。相比之下，以太坊网络使用账户模型作为区块链上记录交易的框架。

Ergo的扩展UTXO模型继续为加密货币行业带来新的创新，在本文中，我们将探讨扩展UTXO的诸多益处。

**Babel** **费用**

Babel费用是一种灵活的交易手续费支付方式。在Ergo上，目前完成交易的手续费为0.001 ERG。然而，Babel费用允许用户使用Ergo上的原生代币（译注：例如Ergo上的Spectrum去中心化交易所的SPF），而非只能使用ERG支付交易手续费。如果一个人不想花掉他们的ERG或者他们的钱包里没有任何ERG，这时，Babel费用便会发挥它的作用。

**链式交易**

链式交易是扩展UTXO模型为区块链提供的最大益处之一。使用扩展UTXO模型时，交易会创建剩余资金（称为UTXO），它可用于未来交易。从本质上讲，UTXO代表了你支付某个东西后的找零。当谈到链式交易时，我们指的是将链接到一笔交易中的多笔交易。

Ergo的链式交易记录是在单笔交易中执行10,000个输出。链式交易是有益的，因为它们可用于同时发送ERG、多个NFT或多种原生代币。例如，如果你想向某人发送50个NFT，你实际上可以在一次交易中完成，而不必执行50笔单独的交易。这不仅省时，而且Ergo上的交易手续费仍保持在0.001 ERG（译注：即省手续费）。

**链下计算**

扩展UTXO模型通过链下计算为智能合约提供更大的灵活性。将账户模型与扩展UTXO 进行比较时，账户模型在链上执行所有智能合约逻辑。随着区块链的增长和交易数量的增加，这可能会导致可扩展性问题。然而，扩展UTXO模型通过将大部分智能合约逻辑移到链下的方式克服了这个问题。它只在区块链上执行验证过程，从而提高了区块链的效率和可扩展性。

随着用户数量的增加，账户模型区块链可能面临严重的拥堵和高额手续费等问题。 “[可扩展性](https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/)问题是以太坊试图将交易推向由链下代码管理的Layer 2/侧链扩展解决方案的主要原因之一。本质上，以太坊正在探索解决其可扩展性问题的解决方案实际上就是在模仿扩展UTXO模型。” 应当注意Ergo没有Gas费，使其成为可扩展的理想区块链。在Ergo上，交易手续费稳定在0.001 ERG，且随着价格的潜在上升而可预测。

**元数据**

使用扩展UTXO模型，元数据可以附加到交易中以提供附加信息。通常使用两种类型的元数据。首先是交易元数据，它描述了整个交易。其次，输出元数据，它描述了特定的输出。交易元数据存储在交易本身中，而输出元数据存储在输出的锁定脚本中。这为交易提供了更大的灵活性并支持更复杂的用例。

**UTXO模型的** **益处** **及其与** **扩展** **UTXO模型的区别**

[UTXO](#utxo)模型为区块链提供了许多益处。其中一些益处包括通过使用一次性对象来**提高** **隐私** **性** ，这可以允许识别和管理隐私泄漏。简单来说，当有人说UTXO充当一次性对象时，这意味着它们有点像只能使用一次的特殊代币或价值单位。UTXO的这一独特特性通过提供一种有效识别和管理它们的方法来帮助防止隐私泄露。它通过**支持** **并行** **交易** **处理来增强可扩展性** ，同时还促进与链下和侧链协议的互操作性。UTXO模型的另一个益处是它通过消除对复杂的Gas计算的需要来促成交易成本的可预测性。

如前所述，Ergo采用的是基于比特币原始模型的扩展UTXO模型，但后者通过部署智能合约提供了更多功能。使用扩展UTXO 模型，智能合约可以使用UTXO作为输入数据，而无需任何修改。因此，节点可以主要验证交易而不是专注于余额核查——这与以太坊的账户模型不同。同样应当注意的是，Ergo的多阶段UTXO模型允许实现图灵完备的智能合约。在区块链上使用智能合约时，扩展UTXO模型允许更大的灵活性和复杂性。

**结论**

在可扩展性和效率方面，扩展UTXO模型提供了灵活性和更大的输出技术支持。即使ERG达到每枚1000美元，交易手续费仍仅为1美元。多笔交易可以在一笔交易中链接，这一事实使得Ergo的手续费可以持续大幅增长。随着未来区块链的采用，该技术需要轻松适应大规模增长和可扩展性。Ergo解决了这个问题。

欢迎转发

原文链接：[The Benefits of the eUTXO Model | Ergo Platform](https://ergoplatform.org/en/blog/The-Benefits-of-the-eUTXO-Model/)
