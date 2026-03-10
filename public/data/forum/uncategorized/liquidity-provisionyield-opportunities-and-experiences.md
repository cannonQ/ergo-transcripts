---
title: Liquidity Provision/Yield Opportunities and Experiences
description: 'ErgoForum discussion: Liquidity Provision/Yield Opportunities and Experiences'
tags:
- amm
- collateral
- duckpools
- ergoforum
- ergohack
- ergopad
- exle
- native-tokens
- sigmafi
- sigmao
- sigmausd
- slippage
- spectrum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/liquidity-provision-yield-opportunities-and-experiences/4220
created: '2023-02-22'
last_activity: '2023-02-22'
posts_count: 1
views: 473
likes: 2
glossary_hits:
- AMM
- Collateral
- Duckpools
- ERGOHACK
- EXLE
- ErgoPad
- Native tokens
- SigmaFi
- SigmaO
- SigmaUSD
- Slippage
- Spectrum
---

# Liquidity Provision/Yield Opportunities and Experiences

> **Forum thread:** [https://ergoforum.org/t/liquidity-provision-yield-opportunities-and-experiences/4220](https://ergoforum.org/t/liquidity-provision-yield-opportunities-and-experiences/4220)
> **Category:** Uncategorized | **Created:** 2023-02-22 | **Posts:** 1 | **Views:** 473

**Related concepts:** AMM, Collateral, Duckpools, ERGOHACK, EXLE, ErgoPad, Native tokens, SigmaFi, SigmaO, SigmaUSD, Slippage, Spectrum

---

### Post #1 — @glasgowm (2023-02-22)

Let’s discuss all the various ways you can put your ERG to work. Any insight or experience reports are welcomed; what works and what doesn’t?

## Exchanges

* Grid bots on KuCoin
* AMM Pool on CoinEx
* AMM Pool on [Swop.fi](http://Swop.fi)
* Lending on [Gate.io](http://Gate.io)
* Trading bots on Huobi
* Custom bots ([shrimpy.io](http://shrimpy.io), 3commas)

## Short-term Offers

* [Huobi Earn](https://account.huobi.com/support/en-us/detail/44916960013648)

## Ergo Ecosystem

### Live

* Spectrum Finance AMM (See [SigmaUSD on Spectrum](#sigmausd-on-spectrum-4))
* Staking (ErgoPad, anetaBTC)

### Public Beta

* [SigmaFi](https://sigmafi.app/#/): P2P-Focused Financial Services Platform
* [SigmaO](https://www.sigmao.cc/): Options on Ergo
* [Duckpools](https://www.duckpools.io/) (Algorithmic Lending Pools & Collateralized Loans)

### Private Beta

* [Spectrum Finance](https://spectrum.fi/) Farming (Earn tokens on your LPs)
* Decentralised Grid Bots [(In Development)](https://www.ergoforum.org/t/decentralized-grid-trading-on-ergo/3750)
* [EXLE](https://exle.io/): Global P2P Lending.

### Inactive

* [Ergo Index](https://github.com/ergo-index) From an early ERGOHACK, source code may be useful as a base.

### What is an *AMM*?

An Automated Market Maker (AMM) uses mathematical models to set prices and match buyers and sellers rather than merely matching buy and sell orders, as in traditional order books. AMM is best in markets with low liquidity.

One of the features of AMM is that liquidity providers add assets to the exchange for a fee. The market benefits from increased liquidity, smaller latency, limited price slippage, and less market volatility when using this additional liquidity.

#### Impermanent Loss

Please be aware of **impermanent loss.**

Impermanent loss (IL) occurs when the mathematical formula of an AMM adjusts the asset ratio in a pool to ensure both assets remain at an even value.

Example: You enter an AMM pool of Erg/SigUSD when the prices of each asset are at $10 and $1. So, you put in 1 Erg for every $10 SigUSD into the pool.

Then, Erg’s price goes to $20 a month later. Let’s assume you earned $2 in fees. You’ll have 0.8 Erg and $16 SigUSD to have even amounts in the pool, or $32. The higher the price of Erg relative to SigUSD, the less Erg you have.

So, why would anyone provide liquidity to an AMM in an asset they expected to go up and a stablecoin like SigUSD? The answer: volatility harvesting.

There’s an [involved paper](https://research.paradigm.xyz/uniswaps-alchemy), but here’s the central idea: digital assets like Erg don’t just increase. They have a lot of volatility, ups and downs, and if you are in an AMM liquidity pool, balancing the AMM of the pool works as a kind of dollar cost averaging. It buys more of the asset that costs less when it is down and less of the asset that costs more when it is up.

### Trading Bots

* **Spot Grid** trades with a grid, selling high and buying low. If ERG goes way above your range, you will have sold all your ERG and be left holding USDT.
* **Infinity Grid** works like the spot gird but has no set range, and your bids with the price.
* **DCA** reduces the risk of purchasing high by investing at consistent intervals.

## SigmaUSD on Spectrum

The dynamics of [SigmaUSD](https://docs.ergoplatform.com/uses/sigmausd/) allow for some unique LP opportunities on Spectrum.

* SigRSV/ERG pair
  + Minimises impermanent loss (both coins move in the same direction price-wise)
* SigUSD/ERG
  + High IL risk, however, a solid investment if you want to earn fees off your nest egg. SigUSD has never come close to losing its peg.

## Trading chats

* [@ErgoTrading](https://t.me/ErgoTrading) on Telegram
* [#trading](https://discord.gg/ergo-platform-668903786361651200) on Discord
* [r/ErgoTrading](https://www.reddit.com/r/ErgoTrading/) on Reddit

## Glossary

* IL: [Impermanent Loss](#impermanent-loss-2)
* LP: Liquidity Providing
* DCA: Daily cost average
* AMM: [Automated Market Maker (AMM)](#what-is-an-amm-1)
