---
title: 金融游戏hodlCoin白皮书
description: 'ErgoForum discussion: 金融游戏hodlCoin白皮书'
tags:
- ergoforum
- phoenix-finance
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/hodlcoin/4428
created: '2023-08-08'
last_activity: '2023-08-08'
posts_count: 1
views: 177
likes: 1
glossary_hits:
- Phoenix Finance
- SigmaUSD
---

# 金融游戏hodlCoin白皮书

> **Forum thread:** [https://ergoforum.org/t/hodlcoin/4428](https://ergoforum.org/t/hodlcoin/4428)
> **Category:** Uncategorized | **Created:** 2023-08-08 | **Posts:** 1 | **Views:** 177

**Related concepts:** Phoenix Finance, SigmaUSD

---

### Post #1 — @ergonautgcn (2023-08-08)

**hodlCoin：** **一种** **金融游戏**

Joachim Zahnentferner

[zahnentferner@gmail.com](mailto:zahnentferner@gmail.com)

**一、简介**

hodlCoin游戏是一种竞争性大型多人零和金融游戏，其目标是长期持有一种资产。通过*HODL（长期持有）* ，玩家将给定资产原生币存入公共储备金中，并收到一定比例的*hodlCoin* 。*UN* *HODL（* *取消* *长期持有）* 的玩家需支付一笔手续费，该手续费累积在公共储备金中。因此，与其他玩家相比，该玩家长期持有时间越长，他从较早取消长期持有的玩家支付的手续费中受益就越多。令人惊讶的是，我们在这里证明，由于手续费的累积，hodlCoin的价格相对标的资产永远不会下降！

**二、HODLCOIN游戏**

该游戏的状态是一个币对（R, S），其中：

• *R* 是储备金中的原生币数量，

• *S* 是hodlCoin的供应量。

hodlCoin的*价格* *为* ：

![|247x41](file:///C:\Users\Sky\AppData\Local\Temp\ksohtml23548\wps1.jpg)

用户可以执行2个操作：

1）**hodl：** 用户将n个原生币存入游戏的储备金中，游戏铸造并给予用户n个![|57x26](file:///C:\Users\Sky\AppData\Local\Temp\ksohtml23548\wps2.jpg)hodlCoin。

2）**un-hodl：** 用户将n个hodlCoin返还给游戏，游戏将其销毁并给予用户![|124x21](file:///C:\Users\Sky\AppData\Local\Temp\ksohtml23548\wps3.jpg)个原生币，其中Φ表示手续费，因而，0 <Φ< 1。

假设游戏以*R* = 1和*S* = 1进行初始化，且如果*un-hodl* 操作会导致*S* =0，则不允许该操作。这保证了*P* (*R* , *S* )最初等于1且始终定义良好。

**三、相关** **作品**

hodlCoin类似于Djed/SigmaUSD [1]、[2] 中的ReserveCoin（储备金币），只不过没有稳定币。hodl操作是买入ReserveCoin操作，unhodl操作是卖出ReserveCoin，但以下情况除外：

1） 手续费不同。在Djed/SigmaUSD中，用户在执行这两个操作中的任何一个时都必须支付手续费。在hodlCoin中，用户只有在执行*un-hodl* 操作时才会支付一定的手续费。

2） 在Djed/SigmaUSD中，当储备金率高于最高储备金率阈值时，不允许执行买入reserveCoin操作，而hodlCoin中的hodl操作则没有限制。

因此，hodlCoin 可以通过分叉SigmaUSD的合约、后端和前端、从中删除与SigUSD相关的任何代码并调整其余两个操作的手续费来快速实现。

**四、定理**

**定理 1** （价格永不下降）。hodlCoin的价格永远不会下降：对于任何动作序列*a* 1, … , *a* k, *P* k ≥*P* 0，其中*P* 0和*P* k分别是操作序列之前和之后的价格。

*证明。* 归纳证明：

• 基础情况（Base Case）（当k = 0 时证明Pk ≥ P0）：在这种情况下，

简单地说，*P* k = *P* 0。

• 归纳情况（Induction Case）（证明*P* k+1≥*P* 0，通过归纳假设，假设*P* k≥*P* 0。令*R* k和*S* k为动作*a* k后的*R* 和*S* 。通过情况分析证明：

– 情况*a* k+1是一个hodl操作：令n为用户存入的原生币数量。 ![|462x86](file:///C:\Users\Sky\AppData\Local\Temp\ksohtml23548\wps4.jpg)

– 情况*a* k+1 是一个un-hodl操作：令*n* 为用户回馈的hodlCoin数量。![|0x0](file:///C:\Users\Sky\AppData\Local\Temp\ksohtml23548\wps5.png)

![|429x165](file:///C:\Users\Sky\AppData\Local\Temp\ksohtml23548\wps6.jpg)

**五、讨论**

hodlCoin游戏可以被视为含庞氏机制的**双重** **机制** 。在庞氏机制中，较早进入的投资者将获得较晚进入的投资者的资金，而在hodlCoin游戏中，较晚退出的玩家将获得较早退出的玩家的资金。此外，庞氏机制欺骗了不了解该机制运作的投资者，而hodlCoin游戏是**完全透明的** ，其规则清晰，玩家也了解这些规则。最后，虽然庞氏机制不稳定且总是会导致崩溃，但hodlCoin被推测具有自我稳定效应：如果标的资产的价格下跌且玩家开始unhodl出售标的资产，这可能会鼓励其他玩家从由执行unhold操作的玩家支付的手续费中受益；**这可能会减轻标的资产的抛售压力。**

**六、致谢**

我感谢Alexander Chepurnoy对hodlCoin游戏和其他金融游戏的讨论，感谢 Pulsarz 在 Ergo区块链上首次实现该游戏。

**参考文献**

[1] J. Zahnentferner, D. Kaidalov, J.-F. Etienne, and J. Díaz, “Djed: A formally verified crypto-backed pegged algorithmic stablecoin,” Cryptology ePrint Archive, Report 2021/1069, 2021, [Djed: A Formally Verified Crypto-Backed Pegged Algorithmic Stablecoin](https://eprint.iacr.org/2021/1069).

[2] ——, “Djed: A formally verified crypto-backed pegged autonomous stablecoin,” in IEEE International Conference on Blockchain and Cryptocurrency, 2023, [ICBC 2023 FINAL PROGRAM | 2023 IEEE ICBC - IEEE International Conference on Blockchain and Cryptocurrency](https://icbc2023.ieee-icbc.org/program/icbc-2023-final-program).
