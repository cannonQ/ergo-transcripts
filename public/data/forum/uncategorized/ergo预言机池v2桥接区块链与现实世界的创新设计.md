---
title: Ergo预言机池V2：桥接区块链与现实世界的创新设计
description: 'ErgoForum discussion: Ergo预言机池V2：桥接区块链与现实世界的创新设计'
tags:
- ergoforum
- eutxo
- oracle-pools
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-v2/4406
created: '2023-07-13'
last_activity: '2023-07-13'
posts_count: 1
views: 242
likes: 1
glossary_hits:
- Oracle pools
- eUTXO
---

# Ergo预言机池V2：桥接区块链与现实世界的创新设计

> **Forum thread:** [https://ergoforum.org/t/ergo-v2/4406](https://ergoforum.org/t/ergo-v2/4406)
> **Category:** Uncategorized | **Created:** 2023-07-13 | **Posts:** 1 | **Views:** 242

**Related concepts:** Oracle pools, eUTXO

---

### Post #1 — @ergonautgcn (2023-07-13)

作者：Ergo平台

[![Ergo’s Oracle Pools V2 - An Innovative Design](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/e/eb3fd440ddcbb9406c2ce596176bdbd711c8c792_2_690x345.jpeg)

Ergo’s Oracle Pools V2 - An Innovative Design1280×640 54.7 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/e/eb3fd440ddcbb9406c2ce596176bdbd711c8c792.jpeg "Ergo’s Oracle Pools V2 - An Innovative Design")

[预言机池](https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263)（Oracle Pool）是一项创新技术，对于通过提供对外部数据源的访问来弥合区块链与现实世界之间的差距至关重要。预言机池的用途是将数据可靠地转发到区块链（与dApp或其他产品的需求相关）并提高该数据的有效性和准确性。

去中心化应用程序（dApp）是区块链生态系统的支柱，而可靠的预言机框架对于促进生态系统繁荣至关重要。因此，Ergo开发者高度重视开发可靠的预言机。

**何谓预言机池** **？** **其工作原理** **又是什么** **？**

Ergo提供了预言机池，可让数据提供实现去中心化，确保获取外部数据的过程和数据本身都更加可靠。预言机池中的预言机组就数据源达成一致，并将各自的数据点发布到区块链上。这增加了数据的可靠性和有效性。在一个时段（Epoch）结束时，这些数据点在读取每个数据点的最终事务中进行平均（去除异常值后）。这会导致预言池产生一个新的最终数据点。预言机对于加密生态系统如此重要的原因是预言机使dApp能够与现实世界的事件进行交互并基于实时数据执行智能合约。预言机还可以通过验证和认证外部信息来增强应用程序的安全性和可靠性。例如，预言机的一项主要应用是增强用户的DeFi体验。这可以通过提供准确的价格馈入（喂价）和市场数据信息来实现，这对于借贷协议和去中心化交易所（DEX）上的去中心化交易至关重要。

**Ergo** **预言机池** **与Chainlink** **预言机之比较**

目前，按市值计算，Chainlink是预言机领域的领导者，但Ergo多年来一直在对现有预言机框架进行改进。

[Chainlink和Ergo预言机技术之间存在许多差异](https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263)。$LINK代币是Chainlink的重要组成部分，因为它用作使用户能够访问其预言机服务的代币。用户使用$LINK为预言机从外部来源获取的数据付费，然后这些数据可以在智能合约中使用。LINK代币本质上是激励节点运营者贡献准确可靠的数据，确保Chainlink生态系统的可靠性和可信度。

Ergo的预言机池以多种方式运行。首先，Ergo的预言机池利用Ergo区块链的原生加密货币（$ERG）进行支付，无需额外的预言机代币（如$LINK）。 因此，用户无需购买额外的代币即可使用区块链服务。

Ergo的预言机池使用时段（Epoch）来确保定期数据更新并阻止串通，从而使数据馈入更加可靠。这些预言机池中的预言机需要在特定时间间隔内发布外部数据点，这为及时更新创造了更强的激励。这些激励措施包括通过准确的数据更新赚取奖励，同时在预言机池中建立良好的声誉。这样可以吸引更多的用户，并维持预言机池的诚信和可靠性。 预言机池的目标是从本质上可靠地转发外部数据并提高该数据的有效性和准确性。

还需要注意的是，扩展UTXO模型允许用户轻松创建层级预言机数据点结构，包括预言机池之池。这可以提高扩展准确性并使预言机更加高效。Chainlink的设计不支持此功能，因为Chainlink中的预言机是单个发挥作用，无法组合发挥效应。

**预言机池V2**

Ergo目前正在开发[预言机池V2](https://docs.ergoplatform.com/eco/oracles-v2/)，它是在现有技术的基础上进行改进的。一项关键改进是能够从多个来源收集数据，包括CoinGecko、CoinMarketCap、XAU等。这种扩展的数据收集增强了预言机池的准确性和可靠性，为智能合约提供全面的数据馈入。

Ergo的预言机池V1是一项极其有价值的技术，但开发者正在不断寻找方法改进现有技术。对于预言机池V1，存在一些难题，例如产生过多的粉尘作为奖励、奖励较低，且在管理与两种类型的预言机池盒相关的复杂性方面遇到了困难。预言机池V2对该系统进行了重大更改和改进。这些改进包括：

将预言机池地址合并为单个实体；

在预言机池盒内接入时段（Epoch）计数器以支持高级去中心化应用程序（dApp）；

将预言机池盒与预言机池管理逻辑分开，以实现更顺畅的操作；

从ERG过渡到代币作为奖励；

支持转移两种预言机代币。

虽然实现了这些改进，但更新机制以及预言机池盒在其他dApp中的作用仍然与之前的预言机池版本类似。这意味着，尽管预言机池V2引入了改进，但更新的基本功能以及预言机池盒在其他去中心化应用程序（dApp）中发挥的作用基本保持不变。

Ergo预言机池V2为预言机技术带来了受人瞩目的进步。 这些技术改进旨在克服预言机池V1的限制，建立更具适应性且高效的预言机框架。

如要深入研究Ergo的核心预言机框架，请查阅 [GitHub](https://github.com/ergoplatform/oracle-core) 以及有关 Ergo 所有内容的[教育视频](https://www.youtube.com/watch?v=CzGqYAlQRWQ&t=445s&ab_channel=HashitOutw%2FCW)（预言机池信息的时间索引11:30）。

原文链接：

<https://docs.ergoplatform.com/dev/protocol/eutxo/atomic/#cross-chain-swaps>
