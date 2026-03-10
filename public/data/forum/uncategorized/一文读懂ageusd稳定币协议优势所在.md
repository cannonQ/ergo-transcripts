---
title: 一文读懂AgeUSD稳定币协议优势所在
description: 'ErgoForum discussion: 一文读懂AgeUSD稳定币协议优势所在'
tags:
- ergoforum
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ageusd/4246
created: '2023-03-09'
last_activity: '2023-03-09'
posts_count: 2
views: 248
likes: 3
glossary_hits:
- SigmaUSD
---

# 一文读懂AgeUSD稳定币协议优势所在

> **Forum thread:** [https://ergoforum.org/t/ageusd/4246](https://ergoforum.org/t/ageusd/4246)
> **Category:** Uncategorized | **Created:** 2023-03-09 | **Posts:** 2 | **Views:** 248

**Related concepts:** SigmaUSD

---

### Post #1 — @ergonautgcn (2023-03-09)

## 一文读懂AgeUSD稳定币协议优势所在

来源：金色财经  
发布日期：2022/02/14  
<https://m.jinse.com/news/blockchain/1055325.html>

2021/04/08 14:31 ![](https://staticn.jinse.cn/resource/v2/m/static/img/article-hot.svg) 70428

[image]

[image]

[关注](javascript:![:wink:](https://ergoforum.org/images/emoji/twitter/wink.png?v=15 ":wink:")

[![gUnRqC0gCRbGfCVzAcOTeTEZreTYm3pDwAaqOCoI.jpeg](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/9/91b18bacfd309fbe12cdc95a075ce83f9e896e09.jpeg)

gUnRqC0gCRbGfCVzAcOTeTEZreTYm3pDwAaqOCoI.jpeg320×138 21.6 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/9/91b18bacfd309fbe12cdc95a075ce83f9e896e09.jpeg "gUnRqC0gCRbGfCVzAcOTeTEZreTYm3pDwAaqOCoI.jpeg")

AgeUSD是一种加密货币支持的全新算法稳定币协议，由Ergo社区开发者、EMURGO和IOG在Ergo公链上共同合作开发。该存储库包含AgeUSD的规范/智能合约/链下代码（无头dApp），且包含社区开发者在Ergo公链上部署自己的AgeUSD实例所需的一切。

AgeUSD不像当前流行的加密货币支持的稳定币设计模式那样依赖CDP（抵押债务头寸）。由于基于CDP的协议在面对剧烈波动和/或区块链拥堵时存在脆弱性，这是一个有意识的设计决策。在黑色星期四（即2020年3月12日大暴跌事件）期间就体现了这些弱点，当时MakerDAO的CDP由于波动而被触发清算，然后又因为区块链拥堵而阻止其他人竞标，以$ 0的价格出售。

由于其设计，AgeUSD协议则不可能发生黑色星期四发生的这种情况。没有CDP，我们就没有清算事件，也不会要求用户执行交易以确保清算实际上正常发挥作用（而不是让作恶者从协议中窃取资金）。这些是使用CDP铸造稳定币时固有的漏洞，因此给最终用户带来了更多风险。

AgeUSD协议旨在缩小可能出现此类问题的表面积。目标是尝试在协议本身的数学范围内尽可能地实现自动化，而不是依赖动态交易发布，因为动态交易发布可能会因区块链拥堵而中断。这并不是说AgeUSD协议可以解决稳定币的所有问题，但它是一种尝试，旨在为加密货币领域的当前趋势提供更高保证的替代方案。

[![qYyoWGbUVP3zJhye1aOoop2qWhNobKGJRT9HMOQJ.jpeg](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/e/e06d95f516baa881e40887d99ca18bfa41dba492.jpeg)

qYyoWGbUVP3zJhye1aOoop2qWhNobKGJRT9HMOQJ.jpeg600×309 41.6 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/e/e06d95f516baa881e40887d99ca18bfa41dba492.jpeg "qYyoWGbUVP3zJhye1aOoop2qWhNobKGJRT9HMOQJ.jpeg")

**目录**

1. AgeUSD协议如何工作？
2. 手续费
3. 遍历此存储库
4. 相关作品

**AgeUSD协议如何工作？**

从本质上来说，AgeUSD协议很容易理解。有两种与协议交互的参与方：

1. 储备金提供者
2. AgeUSD用户

储备金提供者将Erg（Ergo原生代币）提交到dApp的储备金中，并通过这种方式铸造“储备金代币（ReserveCoin）”。每一枚储备金代币均是dApp中所持有标的Erg储备金的一部分。

AgeUSD用户也将Erg提交到dApp的储备金中，但在这种情况下，他们是在铸造AgeUSD。只有在dApp内有足够的储备金（储备金高于最小储备金率）时，协议才允许这样做。在任何给定的时刻，AgeUSD用户可以按照Erg-USD预言机池所提供的当前汇率将其AgeUSD兑换成一定数额的Erg，该Erg来自储备金。

如果Erg的价格上涨（或收取了大量协议费），则储备金提供者只能将其储备金代币兑换为Erg，以保护所有现有已铸造的AgeUSD的价值及额外利润。通过兑换自己的储备金代币，与铸造储备金代币时相比，他们获得了更多标的储备金加密货币（从铸造AgeUSD的用户那里获得的金额增加），从而获利。

因此，储备金提供者让AgeUSD用户享受价格的稳定性。最终，储备金提供者吸收了潜在的上涨空间（如果储备金价格因ERG相对美元价格上涨而上涨），但也吸收了潜在的下跌空间（如果储备金中的标的加密货币价格下跌了）。

这使个人能够选择“做多” Erg（通过铸造储备金代币），或选择稳定性（通过铸造AgeUSD）。

有关更多详细说明，请查看：

1. 《挂钩和加密货币支持的算法稳定币——Bruno Woltzenlogel Paleo——2021 Ergo峰会》
2. 《AgeUSD智能合约协议概述——Amitabh Saxena——2021 Ergo峰会》
3. 《AgeUSD来龙去脉简短摘要文件》。

**费用**

AgeUSD协议费参数默认值为：

1. 2%的协议费（Protocol Fee）
2. 0.25%前端实现者费用（Frontend Implementor Fee）

协议费是针对协议中关于AgeUSD和储备金代币（ReserveCoin）的所有铸造/兑换操作收取的。从这笔费用中产生的Erg会返回到协议储备金中，因而直接使储备金代币持有者获利。换言之，如果你持有储备金代币，则不仅在Erg价格上涨的情况下得到奖励，而且如果很多人使用AgeUSD协议，你也会得到奖励。这为储备金提供者提供了进一步的激励机制，以确保始终有足够的流动性，因此，AgeUSD用户始终可以铸造AgeUSD。

前端实现者费用是支付给在AgeUSD无头dApp之上构建图形用户界面（GUI）的前端实现者的费用。该费用支付是作为每次铸造/兑换操作的一部分自动执行，且前端实现者只需提供其地址作为该操作方法的输入，从而激励构建去中心化、具有竞争性的AgeUSD前端未来生态系统。

这些费用可由AgeUSD协议链上的部署者调整，因此只是推荐的默认值。

**遍历此存储库**

此存储库包含AgeUSD协议的规范、智能合约和链下代码（无头dApp）。

**AgeUSD** **规范**

AgeUSD规范是Ergo平台上的扩展UTXO模型中AgeUSD协议的高级规范。这些规范从v0.1开始，展示了AgeUSD协议设计过程中各种功能的添加。

**AgeUSD智能合约**

AgeUSD智能合约以ErgoScript语言编写，也是从v0.1开始，随着新功能的添加或Bug的修复而不断增加。

**AgeUSD无头dApp**

AgeUSD无头dApp是链下代码，它为开发者提供了一个纯粹、可移植的界面，用于读取AgeUSD链上已部署实例的当前状态，在协议中执行操作以及包含一些辅助方法来使前端实现者的生活更加轻松。

可读AgeUSD状态：

* 基础储备金
* 负债
* 抵押资产的净值
* 流通稳定币数量
* 流通储备金代币数量
* 稳定币名义价格
* 储备金代币名义价格

操作：

* 铸造稳定币
* 铸造储备金代币
* 兑换稳定币
* 兑换储备金代币

辅助方法：

铸造X稳定币的成本

铸造Y储备金代币的成本

兑换X稳定币收到的金额

兑换Y储备金代币收到的金额

**AgeUSD** **客户端**

AgeUSD客户端使用AgeUSD无头dApp，并实现命令行界面以与链上协议的部署进行交互。CLI使用Ergo节点进行UTXO设置扫描以查找所需的币盒并发布交易。

客户端主要用于技术用户与AgeUSD的部署进行交互，且是前端开发者了解如何在创建GUI时实现前端的一个示例。 （请注意，AgeUSD无头dApp提供了一个界面，可在不使用UTXO设置扫描的情况下查找所有输入UTXO，从而使开发者的体验非常流畅）

**相关作品**

AgeUSD协议的灵感来自于staticoin协议（Staticoin Protocol），但是从头开始进行了重新设计，以适应扩展UTXO模型，同时提供了几项改进以大大提高稳定币的稳定性。这样，我们就获得了避免使用CDP的好处，同时克服了Staticoin 协议所遇到的一些缺陷（缺乏过度补偿储备金以管理波动性的机制是最大的缺陷）。

**译注：**

**[![AKZg0Vx6vnm2XVWHjVe9TEzvHDBVBbscNT2Ndq4w.jpeg](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/e/e7a6c277357b92b18f6438c8184e0ea1934274e3.jpeg)

AKZg0Vx6vnm2XVWHjVe9TEzvHDBVBbscNT2Ndq4w.jpeg309×264 12.9 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/e/e7a6c277357b92b18f6438c8184e0ea1934274e3.jpeg "AKZg0Vx6vnm2XVWHjVe9TEzvHDBVBbscNT2Ndq4w.jpeg")**

AgeUSD只是由Ergo社区开发者、EMURGO和IOG在Ergo公链上共同合作开发的一款算法稳定币协议。由Ergo社区开发者启动SigmaUSD正是基于AgeUSD算法稳定币协议，据国外区块链媒体报道，Cardano将部署的算法稳定币也将基于AgeUSD协议。

**原文链接：**

[github.com](https://github.com/Emurgo/age-usd)

![](https://ergoforum.org/uploads/default/optimized/2X/2/2587007aa16007de69a2789dd1ddb0332bb5074e_2_690x344.png)

### [GitHub - Emurgo/age-usd: The AgeUSD protocol specifications/smart...](https://github.com/Emurgo/age-usd)

The AgeUSD protocol specifications/smart contracts/off-chain code.

---

### Post #2 — @Grayman (2023-03-09)

Dude, you are even more wordy than me!

But you are doing great work here, based on my google translations.

Some of it is out of date, but that is OK, because you are making our home bigger.

Thank you.
