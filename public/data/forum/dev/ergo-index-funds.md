---
title: Ergo Index Funds
description: 'ErgoForum discussion: Ergo Index Funds'
tags:
- chaincash
- collateral
- dev
- dexy
- ergoforum
- gluon
- native-tokens
- sigmafi
- sigmausd
category: forum
forum_category: Development
source: ergoforum
source_url: https://ergoforum.org/t/ergo-index-funds/5070
created: '2025-01-25'
last_activity: '2025-01-28'
posts_count: 4
views: 414
likes: 15
glossary_hits:
- ChainCash
- Collateral
- Dexy
- Gluon
- Native tokens
- SigmaFi
- SigmaUSD
---

# Ergo Index Funds

> **Forum thread:** [https://ergoforum.org/t/ergo-index-funds/5070](https://ergoforum.org/t/ergo-index-funds/5070)
> **Category:** Development | **Created:** 2025-01-25 | **Posts:** 4 | **Views:** 414

**Related concepts:** ChainCash, Collateral, Dexy, Gluon, Native tokens, SigmaFi, SigmaUSD

---

### Post #1 — @anon_real (2025-01-25)

# Introducing Ergo Index Funds

Hello Ergonauts! It’s been a while since my last post )

These days, I’ve been working on two projects: one related to TradeHouse and another new one that I’m excited about—**Ergo Index Funds**.

---

## What Are Index Funds?

From Investopedia: *“Index funds are defined as investments that mirror the performance of benchmarks like the S&P 500 by mimicking their makeup.”*

The concept is simple: invest in a basket of tokens with predefined proportions by holding a single token—the **index fund token**.

For example, an index fund could consist of:

* 50% SigUSD
* 30% GluonW GAU
* 20% Dexy Gold

Let’s call this index fund **Stable Index Fund**. Each Stable Index Fund token represents the underlying assets in these proportions. The price of 1 Stable Index Fund token (in SigUSD) would therefore be:

`0.5 SigUSD + 0.3 (GluonW GAU price in SigUSD) + 0.2 (Dexy Gold price in SigUSD)`  
And in ERG it would be:  
`0.5 (SigUSD price in ERG) + 0.3 (GluonW GAU price in ERG) + 0.2 (Dexy Gold price in ERG)`

Anyone can:

* Invest in this fund by providing the underlying assets.
* Redeem their Stable Index Fund tokens for the underlying assets.
* Trade these tokens on decentralized exchanges (DEXes) such as [TradeHouse](https://ergoauctions.org/trade?pair=AHT-ERG).

---

## Use Cases

* **Simplified investments**: Diversify, hold, or trade using a single index fund token instead of managing multiple tokens.
* **Cross-chain transfers**: Transferring tokens across chains can be costly and time-consuming. Index fund tokens are a more efficient alternative, as they represent a basket of tokens.
* **Customizable risk levels**: Different index funds can cater to varying risk tolerances. For example:
  + A memecoin index fund with several memecoins.
  + A memecoin index fund that includes some stablecoins for reduced volatility.
* **dApp integration**: Index fund tokens can simplify workflows in other dApps. For example:
  + An index fund token can be used as collateral in [SigmaFi](https://sigmafi.app).
  + As the token represents a basket of assets, this simplifies contract implementation and may reduce volatility, giving users greater confidence in lending.

Another usecase, although may suffer from low liquidity, is that one can mix index fund tokens instead of mixing the underlying assets one by one.  
These are only what comes to mind right now. I’m sure there will be more and more use cases found by the community.

---

## What’s Coming

The first implementation will be simple:

* Anyone can create an index fund with tokens of their choice and their desired proportions.
* An index fund token will be issued to represent the basket.
* Users can invest in the fund by providing assets in the correct proportions.
* Users can redeem the underlying assets by providing the fund token.

Each fund can include a fee (e.g., 0.1%) that goes to the fund creator, incentivizing them to create, promote, and build an ecosystem around the funds.

---

## Future

* The third point above which explains the investment in the fund is not user-friendly of course as the user needs to have all the assets to invest. However, another layer could be on top of this to get ERG from the user, directly buy the assets in the correct proportions, and invest in the fund.
* The idea can quite easily be combined with DAOs, letting the community change the index fund proportions and tokens, like how NASDAQ adds/removes stocks. Concretely, let’s say an index fund is supposed to track the top 10 tokens on Ergo by marketcap. Every few months, the community could assess the current token marketcaps and decide to add/remove tokens from the fund.

---

I would appreciate any feedbacks that could result in a better design and usability.

---

### Post #2 — @Luivatra (2025-01-25)

If a secondary market pops up (on DEX for example) then the complexity of minting and redeeming might not be that bad. The basic idea seems quite simple and shouldn’t be that complex to implement!

---

### Post #3 — @kushti (2025-01-28)

As another potential use-case, there could be e.g. a USD stablecoin backed by a basket of algorithmic commodities (e.g. GluonGold, Gluon Silver, Gluon Lithium, or Dexy\*). Oracle price for the basket to USD can be derived from individual commodity oracles.

Similarly, could be used for a composite ChainCash reserve.

---

### Post #4 — @Zimulakra (2025-01-28)

I think it would be interesting to have automated rebalancing on a memecoin index fund. If one meme is mooning and the RSI (or whatever indicator) hits a threshold a portion could be sold and the profits redistributed into things undervalued or into a gold buffer waiting to be deployed.
