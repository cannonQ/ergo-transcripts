---
title: Ergo peer to peer futures market
description: 'ErgoForum discussion: Ergo peer to peer futures market'
tags:
- box
- collateral
- ergoforum
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-peer-to-peer-futures-market/1841
created: '2021-06-22'
last_activity: '2021-12-09'
posts_count: 3
views: 579
likes: 7
glossary_hits:
- Box
- Collateral
- SigmaUSD
---

# Ergo peer to peer futures market

> **Forum thread:** [https://ergoforum.org/t/ergo-peer-to-peer-futures-market/1841](https://ergoforum.org/t/ergo-peer-to-peer-futures-market/1841)
> **Category:** Uncategorized | **Created:** 2021-06-22 | **Posts:** 3 | **Views:** 579

**Related concepts:** Box, Collateral, SigmaUSD

---

### Post #1 — @Vesi_Hiisi (2021-06-22)

I suggest an idea of a marketplace for speculative bets on Ergo market price.

For example, assume erg price is 10$. I could offer a bet where I deposit 400 erg, and a bet taker deposits 100 erg into a contract. In one month, the contract checks the oracle price, and returns erg relative to the price. The aim is that the bet taker retains his dollar value, like in sigmaUSD.

* if price is 20$, I get 450 erg, bet taker gets 50 erg
* if price is 5$, I get 300 erg, bet taker gets 200 erg.
* if price is 1$, bet taker gets all 500 erg, which still is not enough to cover the 1000$ initial investment. The collateral was chosen too low in hindsight.

The size of the deposits and the time length could be chosen by the one who lists the bet into the marketplace. It might require additional fee variable that can be adjusted according to the market sentiment. For example, in a bear market, speculators might demand an extra fee for betting against the trend.

The market would then contain a list of bets that people are willing to offer. Some equilibrium of the bet conditions would emerge. Those conditions would be market optimized, instead of having arbitrary conditions like in sigmaUSD. The high collateral requirement in sigmaUSD safeguards stability, but the market on speculative bets might arrive at a smaller collateral requirement, and therefore higher leverage on a bet.

The advantage of the futures market for speculators is that it is very simple to understand the rules and risks. The conditions are set in the contract, there are only two participants, and the bet will be resolved one way or the other at the given time point. In comparison, a position in sigRSV is affected by all others who interact with the contract, and overall risk of the contract.

The advantage from system resilience perspective is that there are multiple small contracts, instead of one central contract. It does not matter if the collateral fails in a contract, because both participants were well aware of the possibility. Also, this could divert speculation induced instability away from the sigmaUSD. Separating real use cases and financial gambling should be a goal for the Ergo ecosystem. The traditional finance world is a dire example how the latter can ruin the former.

Futures markets could be extended to any asset that has oracle data feed.

I am not a dev, and I don’t have time to start learning for at least another year. If anyone would be interested to use this idea, then feel free to do so.

Do you think there would be demand for such a futures marketplace?

---

### Post #2 — @kushti (2021-09-22)

The proposal is very interesting, and for UTXO model of Ergo P2P contracts are better simply, I guess collateral requirements should be standard though ? Otherwise quality and so value of different bets would be different.

---

### Post #3 — @Vesi_Hiisi (2021-12-09)

What is the argument for setting standards? Consumer protection could be an argument, but the futures market is not intended for an average Joe.

I envision that the speculative activity on sigUSD would be channeled into this futures market. Therefore, participants should understand the risks, and contract conditions. This could be emphasized in the product description too. Traders do like the flexibility in the conditions.

I would not set standard collateral requirement, or any other standard parameters.
