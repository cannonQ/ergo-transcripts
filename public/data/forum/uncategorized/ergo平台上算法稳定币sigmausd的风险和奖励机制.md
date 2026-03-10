---
title: ERGO平台上算法稳定币SigmaUSD的风险和奖励机制
description: 'ErgoForum discussion: ERGO平台上算法稳定币SigmaUSD的风险和奖励机制'
tags:
- ergoforum
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-sigmausd/4326
created: '2023-05-03'
last_activity: '2023-05-03'
posts_count: 1
views: 264
likes: 1
glossary_hits:
- SigmaUSD
---

# ERGO平台上算法稳定币SigmaUSD的风险和奖励机制

> **Forum thread:** [https://ergoforum.org/t/ergo-sigmausd/4326](https://ergoforum.org/t/ergo-sigmausd/4326)
> **Category:** Uncategorized | **Created:** 2023-05-03 | **Posts:** 1 | **Views:** 264

**Related concepts:** SigmaUSD

---

### Post #1 — @ergonautgcn (2023-05-03)

# ERGO平台上算法稳定币SigmaUSD的风险和奖励机制

作者：Verium Fellow

原文发布日期：2021年3月1日

几天前，Ergo社区开发者推出了其算法稳定币**SigmaUSD**。在撰写本文时，储备金中已经有440万美元，且该金额正在稳步增长。

许多人难以理解它是如何运作的，甚至还很难理解潜在的回报和风险。

在第一个月里，储备金率（Reserve Ratio）（总储备金/总负债）没有上限，但是之后，它将保持在400%到800%之间。低于400%时，你便不能将储备金代币（Reserve coin）兑换成ERG，高于800%时，你将无法铸造新的储备金代币。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/optimized/2X/1/1d9b758561a93c6e955b19a81bd0b6aa7d5ab83a_2_551x500.jpeg)

558×506 74.7 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/1/1d9b758561a93c6e955b19a81bd0b6aa7d5ab83a.jpeg)

SigmaUSD官网[SigmaUSD](https://sigmausd.io/%E4%B8%8A%E7%9A%84%E6%88%AA%E5%9B%BE)

**稳定币**

让我们从最简单的方面开始：SigmaUSD稳定币。

这很容易理解：你可以获得稳定币。但是，你可能会问：**100%** **稳定吗？答案是否定的**。

当你使用Ergo购买SigmaUSD时，你将获得SigmaUSD代币，该代币可以兑换成以ERG支付的等值美元。如果你的初始ERG不够，你将从储备金中获得其他ERG。但是，随着ERG的价格下降，你需要越来越多的ERG来保护良好稳定性。因此在某个点，储备金中的ERG数量会不足。在非常简单的两步场景中，如果ERG价格跌幅达到储备金率，就会达到这一点。

在标的资产跌幅达到储备金率之前，\*\*不能保证但能保护稳定性。\*\*例如，如果储备金率为800%，则在1枚SigmaUSD的价格跌至1美元以下之前，须将价格除以8。

可以从下图观察到取决于储备金率的损益差异曲线图。

如果需要更高的储备金率，则将来可以为了一定价格单独（但同时）购买第二层保险（例如保险单），且可能会使用另一种不相关的资产（例如代币化资产）进行风险脱钩（因此，与不可能将储备金率提高至无穷大相比，这意味着较低的保险费用）。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/2/2b882459462acedde6eea3379b81f440b57fe733.jpeg)

553×376 24.5 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/2/2b882459462acedde6eea3379b81f440b57fe733.jpeg)

储备金率为400%和800%（不含手续费）时持有SigmaUSD的损益

**储备金代币**

储备金代币（SigmaRSV或SigRSV）的购买者为稳定币用户提供稳定服务。为此，只要储备金率低于400%，他们就无法将其SigmaRSV兑换成ERG，因为稳定币用户有权优先从储备金中将其稳定币兑换成为以ERG支付的等值稳定美元（并取自SigmaRSV持有者的利润）。

一旦达到800%的储备金率，智能合约也将不允许购买SigmaRSV，以免将风险（和回报）摊薄太多。

作为这种冒险的交换，如果Ergo价格上涨，则将奖励SigmaRSV持有者。智能合约收取的手续费也可以用来奖励他们。

以下解释将侧重于Ergo价格波动时的损益曲线图，且不包括手续费部分。这些奖励或罚金以SigmaRSV的价格表示，该价格由智能合约计算为（抵押资产的净值/流通中的代币数量）。

这意味着，当SigmaRSV的“当前价格”为0.001时，在智能合约资产负债表中，ERG资产将覆盖所有ERG负债而没有利润。当SigRSV> 0.001 ERG时，你可以推算出合约中的资产大于负债，且有利润。该价格是智能合约的进入和退出价。这意味着你退出时会获利，当新参与者加入合约时，摊薄计算中会考虑利润的价值，因此过去的利润还是你的。

撰写本文时，SigmaRSV的当前价格：

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/8/89d9102f606f746fda61612fe85df5c532070c04.jpeg)

269×108 10.3 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/8/89d9102f606f746fda61612fe85df5c532070c04.jpeg)

**由于储备金率将在400%** **至800%** **之间波动，因此我们将在这两种情况下检查损益曲线图。**

**储备金率为400%** **：**储备金率为4枚ERG（从SigmaUSD持有者收取1枚ERG +从SigmaRSV持有者收取**3** **枚ERG**作为储备金）以覆盖稳定币用户支付的1枚ERG。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/4/462ecdbaaa92c17fd449ccfcea6d16bdf1bccd3a.jpeg)

554×376 31.3 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/4/462ecdbaaa92c17fd449ccfcea6d16bdf1bccd3a.jpeg)

储备金率为400%（不含手续费）时持有SigmaUSD或SigmaRSV与ERG的损益

**储备金率为800%** **：**储备金率为8枚ERG（从SigmaUSD持有者收取1枚ERG +从SigmaRSV持有者收取**7** **枚ERG**作为储备金）以覆盖稳定币用户支付的1枚ERG。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/b/b909150f769eb2c4f582fc2314fc16a5964c28ca.jpeg)

545×369 32 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/b/b909150f769eb2c4f582fc2314fc16a5964c28ca.jpeg)

储备金率为800%（不含手续费影响）时持有SigmaUSD或SigmaRSV与ERG的损益

当储备金率为800%参与者人数增加就会摊薄风险时，回报也会被摊薄，损益与持有单纯的ERG更为相似。但是，当储备金率接近400%时，加入合约并增铸SigmaRSV的动机就更高，风险也更高。

有趣的是，一旦智能合约达到更大的交易量，要看储备金率稳定在什么位置。我的猜测是，**我们将接近** **800%** **。**

**常见问答**

**400%** **的储备金率是否意味着进入价更好？**

储备金率可以让你可以了解智能合约中当前的风险量。在上图中，你可以将你的进入点看作交点：你看到要有所作为，必须更改ERG价格，但是对于任何储备金率，交点始终是相同的。

你进入后，储备金率随时间的变化会影响曲线的斜率，因此你的风险始终在变化。

此外，智能合约收取的手续费百分比仅为SigRSV当前持有者创造价值，因此储备金率越低，该价值创造的稀释度就越小。因此，当储备金率较低时，可以看到继续留在或加入智能合约的动机更高。最低时，在这方面更好。

**如果储备金率低于** **400%** **会怎样** **？**

**在这种情况下，智能合约将：**

1. 禁止铸造任何新的SigmaUSD
2. 禁止SigRSV提现，请注意，你将无法随时提取SigRSV，在一定时期内SigRSV将不可提现。但也请记住，这种情况给你带来了非常吸引力的位置，因为你有资格更好地分享手续费，因为这些手续费不会在太多SigRSV持有者之间分配。

**SigUSD** **用户和SigRSV** **投资者须事先了解规则才能有一定洞察力：**

1. SigUSD用户知道，低于400%时，没有人能铸造新的SigUSD，这是在保护他们。
2. 它也可以保护SigRSV用户，即防止任何人铸造过多SigUSD造成SigRSV用户风险增加过多。

**当储备金率低于400%** **时，仅允许以下两种情况：**

1. SigUSD用户可以提取自己的SigUSD并将其兑换为ERG，这会增加储备金率
2. SigRSV投资者可以购买额外的SigRSV，以提高储备金率

**如果储备金率超过800%** **会怎样？**

在这种情况下，你将无法铸造新的SigUSD，因为否则，持有SigUSD或纯粹持有ERG的风险/回报曲线图非常相似。

**如果我已经拥有ERG** **，那么等待ERG** **的价格下跌是否有意义？**

如果你已经投资了ERG，那你将处于蓝线，如果ERG的美元价值正在下降，但仅比SigRSV代币的美元价值少一点，正是处于蓝线。因此，在这种情况下，你的进入价差异不会很大。还有一个要问自己的主要问题是：在这段时间内，交易手续费将使储备金增加多少利润，而ERG的价格下降是否会抵消该利润率？

如果你拥有法币且ERG价格下降了，那么你的ERG和SigRSV进入价更好，但两者的差额大致相同，在这里你也可以问自己，是值得等待，还是在你做空的时候，成为对你不利的价值创造的一部分更好？

**是什么赋予SigRSV** **价值？怎么计算呢？**

SigmaRSV的价格=抵押资产的净值/流通中的RSV代币数量

以ERG计的负债= SigUSD流通量/ 以美元计的ERG价格

抵押资产的净值+负债=资产负债表总额

这是资产负债表中负债方面的内容。

对于资产负债表的资产方面，你可以使用储备金率来推算在稳定币用户和SigRSV持有者之间如何分配来源或ERG。

**当储备金较高或较低时，购买SigRSV** **更好吗？**

进入时的储备金金额（较高或较低）并不能增加你的回报，这只是在储备金率发生变化之前有多少投资将分享当前的利润产生，所以这确实很短期的指标，因为它随时可能变化，并且对你的利润的影响实际上是持有SigRSV时随时间推移的加权平均值，该平均值经储备金率值每一步所获利润加权。

**其他疑问**

如果你还有其他疑问，请随时通过Twitter与我联系。

如果你想进一步研究SigmaUSD，请点击以下链接：

在Github上的PDF报告： <https://bit.ly/3kvHiPM>

Ergo 2021峰会稳定币报告：<https://youtu.be/zG-rxMCDIa0?t=8281>

<https://ergo101.org/videos>

**译注：**

SigmaUSD是由Ergo平台社区开发者最近启动的算法稳定币。SigmaUSD基于优于Maker DAO的AgeUSD算法稳定币协议，也是Ergo平台上的首个算法稳定币，是Ergo生态的一部分，进一步推动了Ergo生态发展。

\*\*原文链接：\*\*<https://veriumfellow.medium.com/introduction-to-ergos-sigmausd-stablecoin-risk-and-reward-mechanism-18690b52d672>
