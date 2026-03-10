---
title: '# ErgoDEX 破解不同类型交易所无法共享流动性的难题'
description: 'ErgoForum discussion: # ErgoDEX 破解不同类型交易所无法共享流动性的难题'
tags:
- amm
- box
- ergoforum
- ergoscript
- eutxo
- slippage
- spectrum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergodex/4327
created: '2023-05-03'
last_activity: '2023-05-03'
posts_count: 1
views: 207
likes: 0
glossary_hits:
- AMM
- Box
- ErgoScript
- Slippage
- Spectrum
- eUTXO
---

# # ErgoDEX 破解不同类型交易所无法共享流动性的难题

> **Forum thread:** [https://ergoforum.org/t/ergodex/4327](https://ergoforum.org/t/ergodex/4327)
> **Category:** Uncategorized | **Created:** 2023-05-03 | **Posts:** 1 | **Views:** 207

**Related concepts:** AMM, Box, ErgoScript, Slippage, Spectrum, eUTXO

---

### Post #1 — @ergonautgcn (2023-05-03)

# ErgoDEX 破解不同类型交易所无法共享流动性的难题

kushti • 2021-11-22

得益于扩展UTXO（eUTXO）模型，ErgoDEX可让AMM DEX和委托单薄DEX共用流动性池，破解了不同类型交易所无法共享流动性的难题。

ErgoDEX是一种非托管、去中心化交易所，允许在 Ergo 网络 和 Cardano 网络之间快速、轻松和安全地转移流动性，也是Ergo网络与Cardano网络之间、首个基于扩展UTXO模型的跨链去中心化交易所，于近日上线Ergo网络。扩展UTXO模型为在Ergo和Cardano生态上不同类型的交易所之间共享流动性提供了独特的可能性。截止目前，Ergo生态上的经典AMM功能已完成开发和测试。去中心化委托单簿功能即将推出。在ErgoDEX中，每个角色都受到激励去尽可能地履行自己的职责。用户受益于DEX服务，流动性提供者受益于协议费用，而DEX受益于固定交易手续费。

下面是由ErgoDEX首席开发者Ilya Oskin等人攥写并发布在Github上的ErgoDEX协议，译为中文旨在方便大家深入了解ErgoDEX的工作原理和代币经济学。

**介绍**

在传统中心化金融中，交易行为由受信任第三方推动，例如做市商、经纪人或其他中介。这是使用委托单簿完成的，它匹配了买入和卖出的委托单。这些纸质委托单簿最终变成了中心化交易所（CEX），就像股票市场中使用的那样。

无受信方的交易行为是区块链上去中心化金融（DeFi）所必需的最基本特征之一。去中心化交易所（DEX）使用受信任的智能合约而不是受信任的中介机构。中心化委托单簿交易所的许多功能（例如委托单的部分成交、回购保证等）已在智能合约中成功实现。在智能合约中，这些功能通常是可组合的。出于多种原因，智能合约中的可组合要素对交易者有利，例如它们更易于理解和使用。

在DeFi中，有两种类型的DEX：委托单簿型（类似于传统金融交易所）和自动做市商（AMM）型。交换委托单合约（Swap Order Contract）允许存在基于委托单簿的DEX，这些合约遵循传统金融模型。它们相当成熟，且在流动性高的市场中效果最佳。AMM DEX也可以在具有先进智能合约的区块链上运行。AMM使用数学模型来设定价格并匹配买家和卖家，而不仅仅像在传统委托单簿中一样匹配买单和卖单。AMM最适合流动性低的市场。其特点之一是流动性提供者向交易所添加资产以赚取费用，当使用这种额外的流动性时，则市场受益于流动性的增加、更小的延迟、有限的价格滑点和更少的市场波动。

**有趣的是，Ergo和Cardano的独特之处在于，由于** **它们** **使用了** **扩展** **UTXO** **（** **eUTXO** **）** **账本模型，AMM** **DEX的流动性池合约可以与委托单簿DEX中使用的委托单合约相结合。这种能力可以使Ergo和Cardano区块链上不同类型的交易所共享流动性，这在以前是不可能的。**

本文档描述了基于Ergo和Cardano的自动去中心化交易所协议。

**协议架构概述**

**委托单簿DEX**

委托单正在等待其他委托单与之匹配，或等待撤单。有以下三种类型的委托单：“买入”（为原生资产买入代币）、“卖出”（为原生资产卖出代币）和“交换”（Swap）（为其他代币购买代币）委托单。委托单簿DEX的优势在于，它最适合那些具有高流动性的交易对。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/optimized/2X/7/7b5eac8a74099343180196fc00e35b2979bc61b5_2_359x500.jpeg)

374×520 41.1 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/7/7b5eac8a74099343180196fc00e35b2979bc61b5.jpeg)

**原子限价委托单** **（Atomic** **L** **imit** **O** **rder）**

原子委托单只能完全执行，否则退款。此类委托单可以由ErgoDEX客户端聚合，以便用户可以从中进行选择，或者在委托单簿中与接下来将定义的部分委托单进行匹配。

**部分限价委托单** **（Partial** **L** **imit** **O** **rder）**

部分委托单对于那些曾经使用过经典中心化交易所的人来说更为熟悉。这些委托单可以部分执行，因此处理它们的最佳方式是委托单簿，它们可以在其中由ErgoDEX机器人聚合、匹配和执行。

**AMM** **DEX**

委托单簿DEX依赖委托单簿来表示流动性和确定价格；与之不同，AMM DEX使用自动做市商机制来提供有关费率和滑点的即时反馈。AMM DEX最适合流动性低的交易对。

每个AMM流动性池都是某对资产的交易场所。为了促成交易，流动性池接受与其价格成比例的标的资产存款。每当存款发生时，都会铸造一定数量的独特代币，称为流动性代币。铸造的流动性代币按其存款比例在流动性提供者之间分配。流动性提供者之后可以将他们的流动性代币份额换成一定比例的标的储备金。

**恒定函数做市商（CFMM，经典AMM池）**

经典AMM池基于常数乘积公式，即x\*y=c，其中x和y分别是代币X和Y的存款，c是它们的乘积，在交换操作后必须保持恒定不变。CFMM在整个价格范围内提供流动性。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/9/9f15056c28c23bcd6782d50a1e20e4ea3f5cc410.jpeg)

348×311 5.38 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/9/9f15056c28c23bcd6782d50a1e20e4ea3f5cc410.jpeg)

**集中AMM池**

在CFMM中，流动性沿储备金曲线均匀分布，这有点低效，因为池中保留的大部分储备金从未使用过。而集中AMM允许流动性提供者（LP）为较小的价格范围提供流动性。每个交易对由较小的池组成，每个池对应某个价格范围。我们称这种池为集中流动性池（CLP）。CLP只需要维持足够的储备金来支持其价格范围内的交易，因此可以像在该范围内拥有更大储备金（我们称之为虚拟储备金）的常数乘积池一样发挥作用。同时，LP不受某些特定CLP和价格范围的约束，可以为多个相邻的CLP提供流动性，因此形成所谓的头寸。虽然资产的价格在头寸的价格范围内，但该头寸在赚取协议费用。当价格超出头寸的价格范围时，它的流动性不再赚取费用，因为它不再起作用。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/1/1893d4ce566269cbd96a7df8810da55ad6d589a7.jpeg)

350×348 14.1 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/1/1893d4ce566269cbd96a7df8810da55ad6d589a7.jpeg)

**链下执行**

为了效率起见，大多数DEX操作分为两个阶段：1.委托单创建2.执行。一旦委托单提交到网络，它就可以由链下机器人执行。链下机器人是一种软件，用于跟踪委托单并让委托单产生的交易执行所有必要的状态转换。所有转换的合法性由验证脚本在链上核查。任何愿意支持ErgoDEX并赚取执行费的人都可以运行链下机器人。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/b/bf661ff7ee34db4974d8b6cba0713423d485a78e.jpeg)

600×429 48.8 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/b/bf661ff7ee34db4974d8b6cba0713423d485a78e.jpeg)

**代币经济学**

在ErgoDEX中，每个参与者都受到激励尽可能地履行自己的角色。

ErgoDEX生态系统中有五种类型的经济主体：

**主体类型**

**激励目标**

矿工

处理交易

用户界面（UI）提供者

提供更好的UI

链下执行者

执行委托单

流动性提供者

提供流动性

交易者

使用DEX

每种类型的主体都以自己的方式从使用DEX中受益：

· 矿工赚取以原生代币支付的矿工费

· UI提供者赚取以原生代币支付的费用，即针对通过UI完成的每项操作而收取的费用

· 链下执行者通过委托单簿和AMM服务赚取以原生代币支付的费用

o 在AMM中：对流动性池上的每项操作收费

§ 用户定义的用于存款/赎回操作的原生代币金额

§ 用户为交易的每单位报价资产定义的原生代币金额

o 在委托单簿中：交易的每单位报价资产单位以原生代币收费

· 流动性提供者受益于以代币支付并在流动性池中累积的协议费用

· 交易者从他们使用的DEX服务中受益

作者：ErgoDEX首席开发者Ilya Oskin等人

原文发布日期：2021年9月10日

\*\*原文链接：\*\*<https://ergodex.io/>

[github.com/spectrum-finance/ergo-dex](https://github.com/spectrum-finance/ergo-dex/blob/master/README.md)

#### [README.md](https://github.com/spectrum-finance/ergo-dex/blob/master/README.md)

[`master`](https://github.com/spectrum-finance/ergo-dex/blob/master/README.md)

```ergoscript
# Ergo DEX - An Automatic Decentralized Exchange

## Table of contents
1. Introduction
2. Protocol architecture overview
   1. Order-Book
   2. AMM
3. Tokenomics

## Introduction

In traditional, centralized finance, the act of exchange is facilitated by a trusted third-party, such as a market maker, bookie, or other intermediary. This was accomplished using order-books, where buy and sell orders were matched. These paper order-books eventually turned into centralized exchanges (CEXes), like those used in stock markets.

The act of exchange without trusted parties is one of the most basic features necessary for decentralized finance (DeFi) on top of blockchains. Instead of trusted intermediaries, a decentralized exchange (DEX) works using trusted smart contracts. Many features of centralized, order-book exchanges - such as partial filling of orders, buyback guarantees and so on - have been successfully implemented within smart contracts. In smart contracts, these features are usually composable. Composable elements in smart contracts are good for traders for a number of reasons, such as they make them easier to understand and use. 

In DeFi, there are two types of decentralized exchanges (DEXes): order-book, similar to traditional, financial exchanges and Automated Market Maker (AMM). Swap order contracts allows for order-book based DEXes, and these follow traditional financial models. They are well established, and they work best in markets with high liquidity. AMM DEXes are also becoming possible on blockchains with advanced smart contracts. AMM uses mathematical models to set the price and match buyers and sellers rather than merely matching buy and sell orders, as in traditional order-books. AMM is best in markets with low liquidity. One of the features of AMM is that liquidity providers add assets to the exchange for a fee, and the market benefits from an increase in liquidity, smaller latency, limited price slippage, and less market volatility when using this additional liquidity.

Interestingly, one of the unique features of Ergo and Cardano is that, thanks to the eUTXO ledger model they use, liquidity pool contracts for AMM DEXes can be combined with the order contracts used in order-book DEXes. This capability enables shared liquidity among different types of exchanges on the Ergo and Cardano blockchains, which was not possible to do before. 

This document provides a description of the Automated Decentralized Exchange protocol on top of Ergo and Cardano.
```

This file has been truncated. [show original](https://github.com/spectrum-finance/ergo-dex/blob/master/README.md)

\*\*声明：\*\*本文著作权归原作者所有，所写内容仅代表原作者观点，不做投资理财建议。
