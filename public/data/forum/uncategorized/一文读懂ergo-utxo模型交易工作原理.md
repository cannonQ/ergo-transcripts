---
title: 一文读懂Ergo UTXO模型交易工作原理
description: 'ErgoForum discussion: 一文读懂Ergo UTXO模型交易工作原理'
tags:
- auction-house
- ergoforum
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-utxo/4247
created: '2023-03-09'
last_activity: '2023-03-09'
posts_count: 1
views: 255
likes: 3
glossary_hits:
- Auction House
- SigmaUSD
---

# 一文读懂Ergo UTXO模型交易工作原理

> **Forum thread:** [https://ergoforum.org/t/ergo-utxo/4247](https://ergoforum.org/t/ergo-utxo/4247)
> **Category:** Uncategorized | **Created:** 2023-03-09 | **Posts:** 1 | **Views:** 255

**Related concepts:** Auction House, SigmaUSD

---

### Post #1 — @ergonautgcn (2023-03-09)

## 一文读懂Ergo UTXO模型交易工作原理

来源：金色财经  
发布日期：2022/02/05  
<https://m.jinse.com/news/blockchain/1178435.html>

2022/02/05 16:03 ![](https://staticn.jinse.cn/resource/v2/m/static/img/article-hot.svg) 96125

[image]

[image]

[关注](javascript:![:wink:](https://ergoforum.org/images/emoji/twitter/wink.png?v=15 ":wink:")

[![oOSaTdVDhPEVmQUg4PveyMm6HK84RNz2YUwuR9wc.png](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/f/fa8a742da9523f7592a242a8234053e7f6336b83.jpeg)

oOSaTdVDhPEVmQUg4PveyMm6HK84RNz2YUwuR9wc.png600×295 71.3 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/f/fa8a742da9523f7592a242a8234053e7f6336b83.jpeg "oOSaTdVDhPEVmQUg4PveyMm6HK84RNz2YUwuR9wc.png")

随着Ergo生态发展壮大，我们的社区现在可以享用几个关键dApp的功能。Ergo有一个稳定币协议，用户可以在其中铸造SigUSD和SigRSV代币。Ergo拍卖行（Ergo Auction House）提供铸造NFT的能力，而ErgoDEX（Beta版）允许您交换代币并提供流动性。这些是UTXO模型（由比特币开创）上的首批、独特且复杂的DeFi dApp。UTXO模型是否可以表达丰富的智能合约，就像账户模型一样，这经常被争论。这就是Ergo平台从头开始构建ErgoScript语言的原因，以努力在比特币的基础上传承并取得进步。

有关UTXO和账户模型的深入比较，请阅读我们之前的文章：《Ergo：在比特币的基础上进化》

作为 Ergonaut，如果在区块浏览器中查看过交易详情，您可能会有一些困惑。UTXO模型通过使用“币盒”来保存数据，这与账户模型有本质的不同。在账户模型中，有一个您可以接收币的账户。然而，在UTXO模型中，每笔交易都会创建一个新币盒，您的余额是链接到您地址的所有币盒之总和。

需要明确的是，您的Yoroi私钥可以在一个地址中包含多个币盒来存放您的币。

[![qRqGlz31iZYTEG6VPvSSjvam7xC5NxMKhn5b7z60.png](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/0/027a750a59b4f58d61ac922963141aa432d9cb41.jpeg)

qRqGlz31iZYTEG6VPvSSjvam7xC5NxMKhn5b7z60.png600×329 36 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/0/027a750a59b4f58d61ac922963141aa432d9cb41.jpeg "qRqGlz31iZYTEG6VPvSSjvam7xC5NxMKhn5b7z60.png")

当您生成一个新地址时，您将创建一个辅助币盒来存放币。创建后，您可以将资金发送到这个新地址，您的资金将被视为带有您的私钥。您可以创建无限数量的新币盒来存币。因此，每个接收和支出操作也将创建一个额外的独特币盒。

初看起来，此功能可能会引起用户的误解。当您进行交易时，网络会扫描您的“币盒”以验证您是否拥有代币，然后启动交易。

在此之后事情变得复杂，因为您无法猜测将要花费哪些币盒。假设您有三个不同的接收地址。其中每个地址里都收到了几个币，并且您想花费一些币。在Yoroi钱包中，您可以持有任何Ergo原生币，例如SigRSV或SigUSD。当发起访问这些存币币盒的交易时，您会看到它们被取走然后重新存入。最近，一位Ergonaut提出了以下问题：

“我刚刚创建了一个Yoroi Nightly钱包。我将31枚ERG从我的主Yoroi钱包转移到了Yoroi Nightly钱包。交易显示31枚ERG加上少量手续费0.0011。但它也表示+92000 SigRSV。我的余额显示SigRSV没有变化。交易中的+92000 SigRSV是什么意思？”

让我们来看看这个特定交易的细节：

[![U2fWX5jUCyDAX4i1lM6LtPL5oOPL32wz76P5lMae.png](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/6/69f4df3e4617691ee48963d2fe7a4598fd16a258.jpeg)

U2fWX5jUCyDAX4i1lM6LtPL5oOPL32wz76P5lMae.png600×225 29.5 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/6/69f4df3e4617691ee48963d2fe7a4598fd16a258.jpeg "U2fWX5jUCyDAX4i1lM6LtPL5oOPL32wz76P5lMae.png")

进行31枚ERG的交易时，钱包选择了三个带有ERG的币盒：

21年7月19日收到一个包含0.02959枚5ERG的币盒

21年7月19日收到第二个装有19.76枚ERG的币盒

21年7月19日收到第三个包含208.26枚ERG的币盒

在上图的左侧部分，您将看到大约228枚ERG被取走，而在右侧部分，您将看到31枚ERG被发送和197枚ERG重新存入您的钱包。

所以你的钱包用了三个币盒来花费所需的金额。此操作将该币盒中的所有资产并入了交易。

在花费了所需的金额后，您的资金将直接退还到您在新创建UTXO币盒中的地址。因此，在一个币盒里花费任何币意味着花费整个币盒并创建一个新的UTXO币盒，这就是为什么你看到代币被取走然后重新存入（译注：这就是UTXO模型的“找零”功能）。

选择花费哪些币盒是钱包随机选择策略的机密。所选币盒中的任何币，无论是SigRSV、SigUSD还是NFT，都将如例中所示。

总结：

账户模型包含一个币盒，这个币盒没有被花费。它保持不变，因此不相关的币将不受影响。

另一方面，UTXO模型包含一组代表用户余额总量的币盒，并且未花费的交易输出必须随着每笔花费交易而变化。

仅交换5枚SigRSV时，您可能会看到一长串代币，如下所示：

[![Sw0CXyKvibgGZNHZjDRJXPjQn9f8EWcyBo67OdFg.png](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/3/304efb2527454846b81381fd11db66e1969ba605.jpeg)

Sw0CXyKvibgGZNHZjDRJXPjQn9f8EWcyBo67OdFg.png600×427 48.6 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/3/304efb2527454846b81381fd11db66e1969ba605.jpeg "Sw0CXyKvibgGZNHZjDRJXPjQn9f8EWcyBo67OdFg.png")

这就是UTXO模型交易的工作原理——它的存储与账户模型不同。在UTXO模型中，币将存储在一次性UTXO币盒中，而不是存储在长期账户中。

作者：Ergo平台

原文发布日期：2021年10月7日
