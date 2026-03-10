---
title: Ergo的西格玛协议兼顾数据透明性和隐私性
description: 'ErgoForum discussion: Ergo的西格玛协议兼顾数据透明性和隐私性'
tags:
- ergoforum
- eutxo
- sigma-protocols
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo/4413
created: '2023-07-21'
last_activity: '2023-07-21'
posts_count: 1
views: 285
likes: 1
glossary_hits:
- Sigma protocols
- eUTXO
---

# Ergo的西格玛协议兼顾数据透明性和隐私性

> **Forum thread:** [https://ergoforum.org/t/ergo/4413](https://ergoforum.org/t/ergo/4413)
> **Category:** Uncategorized | **Created:** 2023-07-21 | **Posts:** 1 | **Views:** 285

**Related concepts:** Sigma protocols, eUTXO

---

### Post #1 — @ergonautgcn (2023-07-21)

作者：Ergo平台

原文发布日期：2022年2月2日

[![Decentralized Finance and Optional Privacy on Ergo](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/1/13aa2e0650b03a16d84d3b076728896a97ded473_2_690x345.png)

Decentralized Finance and Optional Privacy on Ergo1280×640 227 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/1/13aa2e0650b03a16d84d3b076728896a97ded473.png "Decentralized Finance and Optional Privacy on Ergo")

**金融隐私和** **公链**

比特币是一个公共分布式账本网络，每个想要验证区块链状态的人都可以访问。有一些工具，例如[比特币浏览器](https://bitcoinexplorer.org/)，是用于查看链上数据和交易的界面。加密货币的透明性至关重要，因为比特币的发明是为了防止任何第三方操纵。人们在数字平台上保护自己的金融隐私也很重要。为此，Ergo开发了西格玛协议（Sigma Protocol）：支持[可选隐私功能](https://eprint.iacr.org/2020/560.pdf)而不损害安全性的加密证明。

中本聪（Satoshi Nakamoto）通过引入工作量证明共识来解决拜占庭将军问题，向我们展示了区块链技术的天才方法。比特币的设计通过允许每个人验证网络来消除欺诈。自比特币创世区块以来，随着最近的[比特币Taproot更新](https://ergoplatform.org/blog/2021-11-17-bitcoin-taproot-upgrade-and-ergos-sigma-protocols/)，加密技术不断发展。此更新整合了Schnorr证明，为多重签名钱包创建隐私属性，允许多人签署一笔交易，而无需透露合约中的所有信息。

除了西格玛协议之外，Ergo还通过实现多阶段合约进一步推进了比特币的UTXO设计。 比特币的模型与以太坊的长期账户模型不同，因为后者的地址余额是多个一次性UTXO盒子的总和。[Ergo的扩展UTXO模型](https://dav009.medium.com/learning-ergo-101-blockchain-paradigm-eutxo-c90b0274cf5ehttps:/docs.ergoplatform.com/dev/protocol/eutxo/)允许从同一种子密钥（Seed Key，即助记词）创建数量无限的新接收地址。用户可以轻松地从每个Ergo钱包创建可选的隐私功能，无论是手机钱包、浏览器扩展钱包还是全节点钱包皆可。然而，严格来说，Ergo并不是一个隐私区块链，因为您还可以使用公钥控制共享只读信息。扩展UTXO模型的剖析超出了本文的范围，但现在我们将重点关注**西格玛** **协议支持的可选隐私功能** 。

**西格玛** **协议：** **Ergo** **的零知识证明方法**

[西格玛协议](https://docs.ergoplatform.com/dev/scs/sigma/)是广义Schnorr证明的子集，广义Schnorr证明是帮助验证执行交易所需信息的数学证明。加密技术使服务器无需访问所有用户数据即可验证交易。创始人将西格玛协议纳入创世区块，并认为Ergo将成为未来的合约平台。区块链有可能成为广告公司和恶意行为者的大规模监控工具，但通过零知识证明的实现，可选的隐私功能是可能的。

例如，中央银行数字货币（CBDC）是分布式账本的私有版本。在这些网络上，用户可以在一定程度上验证和隐藏交易。然而，政府和/或网络上的其他受信任机构将能够使用大规模监控工具，审查我们的交易，或者可能以我们无法控制的方式使用我们存入的资金。在比特币中，身份并不直接与地址相关联，因此存在一定程度的链上隐私。另一方面，CBDC容易受到潜在的利用，因为每项操作都是在政府或银行拥有的集中服务器上处理的。

让我们讨论一下对加密货币洗钱和黑市交易的担忧。尽管只有[约1%的比特币交易被标记为非法](https://cryptoforinnovation.org/resources/Analysis_of_Bitcoin_in_Illicit_Finance.pdf)，但加密货币经常被批评为洗钱平台。[洗钱过程](https://corporatefinanceinstitute.com/resources/knowledge/finance/money-laundering/)涉及三个阶段：放置、分层和整合。加密货币通过向所有人开放跨境交易来促进分层阶段，但黑钱必须通过无法识别的渠道进出。由于黑市仍然以法币运作，政府可以轻松拦截这种非法活动，验证收入来源和生产设施。

**零知识系统不是洗钱的工具** ——它们是构建可验证系统的工具。目前，任何涉及多方的经济体都需要依赖中央数据源来保证资金安全。如果我们不是州长，我们就无法知道发生了多少交易或转移了多少资金。在这里，西格玛协议可用于创建此类经济体，利用智能合约的力量建立最低限度的信任。

**可选隐私示例：** **去信任本地交换交易系统（** **LETS** **）**

LETS是本地交换交易系统（Local Exchange Trading System）的缩写，是一种相互信用经济。当考虑小型经济体时，LETS在危机时期尤其有用。该系统也可以被视为基于票证的系统（Coupon-based system），人们可以在其特定的贸易共同体内使用该系统来交换服务和商品。传统上，票证日志由委员会数据库保存，因此很容易出现人为错误。

Ergo区块链提供了使用西格玛协议构建去信任本地交换交易系统的基础设施。在非隐私区块链中，一切都是透明的，但如果企业的数据暴露给公众，企业可能会受到伤害。在基于隐私的区块链中，我们无法验证实体（政府、慈善机构、银行等）如何使用金钱。 Ergo的西格玛协议通过保护区块链数据库上的资金，允许针对任何经济手段定制隐私模型。

如果西格玛协议赋予我们决定要披露哪些信息的权力，我们该如何使用它？让我们看看一个简单的经济共同体中几个参与者的需求：

**市政当局：** 税收分配方式需要高度透明

**慈善机构：** 需要高度透明以正确显示支出，同时保留混淆捐助者的选项

**企业：** 税控需要透明，但敏感数据需要高度隐私

**个人：** 税务控制需要透明，但敏感数据需要高度隐私

什么是敏感数据？它可以是您完成交易时间、地点和/或方式等任何内容。随着时间的推移，这些数据的积累形成了可供中心化实体利用的配置文件。例如：

您买巧克力的时间。

您购买资产的时间。

您所在的位置和财务习惯。

该信息根据法律隐私协议存储在您的银行/信用卡提供商的服务器上。在公链中，证明通过密码学存储在节点中，因此我们可以选择创建零知识交易。在我们的日常生活中，个人目前无法控制隐私选项。有了Ergo，每个实体的隐私需求都可以通过强大且实用的去中心化金融网络得到尊重和维护。

原文链接：

<https://ergoplatform.org/en/blog/2022-02-01-decentralized-finance-and-optional-privacy-on-ergo/>
