---
title: Lessons for sigmausd from the DJED paper
description: 'ErgoForum discussion: Lessons for sigmausd from the DJED paper'
tags:
- collateral
- ergoforum
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/lessons-for-sigmausd-from-the-djed-paper/2345
created: '2021-08-31'
last_activity: '2021-08-31'
posts_count: 1
views: 1479
likes: 7
glossary_hits:
- Collateral
- SigmaUSD
---

# Lessons for sigmausd from the DJED paper

> **Forum thread:** [https://ergoforum.org/t/lessons-for-sigmausd-from-the-djed-paper/2345](https://ergoforum.org/t/lessons-for-sigmausd-from-the-djed-paper/2345)
> **Category:** Uncategorized | **Created:** 2021-08-31 | **Posts:** 1 | **Views:** 1479

**Related concepts:** Collateral, SigmaUSD

---

### Post #1 — @Vesi_Hiisi (2021-08-31)

Dear all,

DJED paper:

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/35984bf48c27d41d0076b7a55e8a9bff4a54c3f0.png)
[IOHK](https://iohk.io/en/research/library/papers/djeda-formally-verified-crypto-backed-pegged-algorithmic-stablecoin/)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6ddaa9cd6102a55f417821b8ceece43dbe730113.jpeg)

### [Djed: A Formally Verified Crypto-Backed Pegged Algorithmic Stablecoin - IOHK...](https://iohk.io/en/research/library/papers/djeda-formally-verified-crypto-backed-pegged-algorithmic-stablecoin/)

Djed: A Formally Verified Crypto-Backed Pegged Algorithmic Stablecoin, , August/2021

TLDR

minimal djed = sigmausd

Extended djed seeks to correct the following shortcomings: **Reserve draining attack** (read bearwhale), **wholesale discount** (buying in one tx is cheaper than the same amount with multiple tx, because the price changes in between), **Zero equity** (at 100% reserve ratio, reservecoin is worthless), **rigid fees** (can be changed to incentivize optimal reserve ratio), **stablecoin loss of peg at <100%** (mechanism to cover the losses) and **bank runs** (reservecoin holders may rush to sell, when close to 400% RR). The following changes are proposed:

1. When stablecoin is close to losing peg, e.g. 150%, then ERG is moved from liabilities (stablecoin holders) to equity (reservecoin holders). Effectively losing the peg starts at 150% in this case. This solves the **zero equity** problem.
2. When stablecoin starts to lose its peg, then the stablecoin holders are compensated by printing them reservecoin (debt for equity swap). This solves the **stablecoin loss of peg at <100%** problem.
3. Dynamic fees for buying and selling reservecoin and stablecoin. E.g. when reserve ratio is below 600%, then minting fee of stablecoin and redeeming fee of reservecoin go linearly up to 100%. This solves the **rigid fees** and **bank runs** problems.

My comments:

1. This is a good addition. It keeps the system running, and gives it a chance of recovery at any point, if the reserve ratio is critically low. The downside is that it is not as simple for stablecoin holders to follow their position.
2. I have mixed feelings about this. On one hand, this might improve the chances of the system recovering, but on the other hand it is just hope of the recovery offered as a compensation. At this stage, I would prefer the transparency. In minimal djed / sigmausd, stablecoin holders can follow the health of the collateral, and they have reasonable time to exit, if peg loss is imminent. Adding a further mechanism that entails hopes of market recovery seems to just muddy the waters. The collateral backing the liabilities is simply not there. That being said, Worse systems run on plain hope too, so maybe I am not fully grasping the importance of this change.
3. Dynamic fees are a good idea, but I would avoid doing it for the case of selling the stablecoin. This means effectively losing the peg, which should not happen before the collateral is gone. For buying the stablecoin, buying the reservecoin and selling the reservecoin, it is a good idea to add incentives that push the reserve ratio to an optimum. This would greatly reduce need to lock the contract. The downside again, is a loss of simplicity.

The paper proposes linear change of fees up to 100%. It might be good to discuss if this is sensible. Instead, the fees could range between 0% and 10% for example. The trade-off is between the preference to lock the contract actions, and people ending up paying huge fees.

Glasgow called for discussion on changes to sigmausd recently. I agree that it is good to start the discussion, but we need to keep a close eye on how external sigUSD/RSV markets change the dynamics. Those dynamics are still unknown, but I expect **draining attacks** and taking **advantage of oracle price** delay to remain as main problems. The dynamic fees might alleviate both of these concerns. Further ideas for change include maximum minting size ( **wholesale discount** ), no consecutive minting ( **draining attacks** ), differing reserve ratio limitations for purchasing/redeeming sigUSD and sigRSV (e.g. minting sigUSD until 500% only), and auction based price (for the case of large price swing and everyone wanting to exploit **lagging oracle price** ). Some time-lock based solution on the lagging oracle price could work too, but I can’t quite figure out a good solution.

I consider draining attacks and laggin oracle price to be the main issues in sigmausd currently. I think a mix of these solutions can reduce both to a tolerable level. Traders might still retain some advantage, as they do in all markets. However, adjustements can be made to achieve the goals of the protocol. That is, stablecoin holders having a safe position that does require them to be expert traders and up to date on price swings, and sigRSV holders carrying the risk of price fluctuations while generating a stream of income based on the contract usage.
