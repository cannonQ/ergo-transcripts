---
title: DexyGold Stablecoin Live on Testnet
date: '2024-03-16'
author: Ergo Platform
tags:
- amm
- dexy
- ecosystem
- ergo-blog
- lp-tokens
- native-tokens
- oracle-pools
- sigmausd
category: blog
blog_tag: Ecosystem, DeFi
type: news
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/DexyGold-Stablecoin-Live-on-Testnet
glossary_hits:
- AMM
- Dexy
- LP tokens
- Native tokens
- Oracle pools
- SigmaUSD
---

# DexyGold Stablecoin Live on Testnet

> **Published:** 2024-03-16 | **Author:** Ergo Platform | **Tag:** Ecosystem, DeFi | **Type:** news

*If you are new to Ergo, you may not yet know that the blockchain has successfully deployed a crypto-backed algorithmic stablecoin, SigUSD. SigUSD is pegged to the price of the US dollar and has maintained its peg despite the volatility of the crypto asset class during the bear market. As DeFi expands on Ergo and new products are being built, an exciting development will add a new native stablecoin to the ecosystem: the DexyGold stablecoin. *

**Related concepts:** AMM, Dexy, LP tokens, Native tokens, Oracle pools, SigmaUSD

---

## What is DexyGold?

DexyGold is an algorithmic stablecoin that will be on Ergo, and it represents something new and exciting for the crypto industry. When most people think of a stablecoin, they think of a native token that is pegged to the US dollar. DexyGold will be pegged to the price of gold, an asset that is viewed as a strong store of value by many in traditional finance. DexyGold gives users in the Ergo ecosystem a fascinating and creative alternative when converting $ERG and/or other native tokens to a stablecoin. 

## DexyGold’s Design

[The DexyGold design](https://docs.ergoplatform.com/eco/dexy/#design-overview) is extremely intricate and integrates essential features to ensure that it remains a reliable option for those who wish to use it on Ergo. During the bear market, many stablecoins collapsed and lost their pegs, and so it is imperative that any design of a new stablecoin be rigorously tested to ensure it is safe to use.

DexyGold will operate through the Emission (Minting) Contract. This implements the one-way minting of Dexy tokens by selling $ERG at the oracle pool’s rate. However, selling Dexy for $ERG is not possible with this contract. 

The next feature of its design is the Liquidity Pool (LP) that facilitates Dexy trading with $ERG. The Liquidity Pool employs a sort of Uniswap V2 logic which makes adjustments according to the oracle pool rate. It also restricts LP token redemptions when the oracle rate falls significantly below the LP rate. 

The third feature is an arbitrage mechanism. When the oracle rate surpasses that of the LP, arbitrageurs can mint Dexy from the emission contract and sell it to the LP. This generates profit and aligns the Dexy price with the peg. Arbitrage is an important part of the cryptocurrency world and incentivizes users to use the protocol. 

The fourth feature of DexyGold is called Top-Up Swaps. Essentially, when the oracle rate is lower than the LP rate, $ERG from the emission contract can be used to buy Dexy from the LP, which in turn pushes the price back up. This process is overseen by a swapping contract that monitors both rates - please note that it requires a minimum number of blocks for swaps to occur.

Lastly, DexyGold features anti-draining measures. This is arguably one of the more important security mechanisms. Whenever money is involved, bad actors are sure to arise. DexyGold’s design aims to avoid cyclical draining of the emission contract by locking minted Dexy tokens (or $ERG) for a specific period and disabling minting during profitable periods (based on certain rates). 

## Are There Any Potential Vulnerabilities?

Like most DeFi protocols, almost anything can have potential vulnerabilities and attack vectors. As mentioned before, draining attacks where bad actors alternate between minting and selling (and then topping up the LP) could potentially drain the emission contract’s $ERG. However, the anti-draining measures mentioned earlier are meant to combat this. The DexyGold design also relies heavily on the oracle it is using. The oracle price feeds need to be accurate or a bad actor could take advantage of this. Significant selling pressure could also pose a risk and therefore the stabilizing mechanisms of the stablecoin need to be robust enough to combat the volatility. 

## Live on Testnet

DexyGold has been in development for quite some time now, and it has recently gone live on testnet. No official date has been given for its launch on mainnet, but the testing phase indicates that it could be close. DexyGold will be the first of its kind, and it brings unique and exciting DeFi opportunities for Ergo users.

To learn more about DexyGold, please see this [document](https://docs.ergoplatform.com/eco/dexy/#design-overview). There is also an in depth [video](https://www.youtube.com/watch?v=n2hU8DCLLp0) on DexyGold by the founder of Ergo, Alexander Chepurnoy.

Stay tuned to Ergo’s blog and social media channels for future announcements on the mainnet launch of DexyGold!
