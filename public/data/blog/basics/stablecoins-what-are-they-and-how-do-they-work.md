---
title: 'Stablecoins: What Are They and How Do They Work?

  '
date: '2023-05-04'
author: Ergo Platform
tags:
- addresses
- amm
- basics
- box
- chaincash
- collateral
- dexy
- ergo-blog
- liquidation
- lp-tokens
- native-tokens
- oracle-pools
- sigmausd
- transaction
category: blog
blog_tag: Basics
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Stablecoins-What-Are-They-and-How-Do-They-Work
glossary_hits:
- AMM
- Addresses
- Box
- ChainCash
- Collateral
- Dexy
- LP tokens
- Liquidation
- Native tokens
- Oracle pools
- SigmaUSD
- Transaction
---

# Stablecoins: What Are They and How Do They Work?


> **Published:** 2023-05-04 | **Author:** Ergo Platform | **Tag:** Basics | **Type:** blog

**Related concepts:** AMM, Addresses, Box, ChainCash, Collateral, Dexy, LP tokens, Liquidation, Native tokens, Oracle pools, SigmaUSD, Transaction

---

Stablecoins are a type of cryptocurrency that have their market value pegged to another currency, commodity, or financial instrument. For those who have been active in the cryptocurrency industry, you are no doubt aware of the high volatility of crypto assets. Although they may fuel speculation, it can hinder real-world adoption. With stablecoins, investors can temper their risk exposure with a medium of exchange that is pegged to traditional markets. These assets provide a ‘stable’ currency for everyday transactions.  

Today, the stablecoin market is worth about $150 billion and is rapidly growing. However, with massive growth comes the risk of failure. Collapses of widely used stablecoin projects have had significant consequences for the crypto space. With the collapse of Terra’s UST during the 2022 bear market, the contagion had a domino effect across the entire cryptocurrency industry. The rapid growth, and subsequent criticisms, of USDT have garnered increased scrutiny from regulators, especially since stablecoin failures have had a significant impact on broader financial systems.

## What Makes a Stablecoin Stable?

Simply put, stablecoins remain pegged to the value of an asset through algorithmic formulas or by maintaining reserve assets as collateral. There are three main types of stablecoins:

### Fiat-collateralized stablecoins: 
These stablecoins are backed by a reserve of real-world assets, such as U.S. dollars, euros, or gold. These assets are held in a bank or other financial institution and can be redeemed for cash at a rate of 1:1. Examples of fiat-collateralized stablecoins include Tether (USDT), USD Coin (USDC), and Paxos Standard (PAX).

### Crypto-collateralized stablecoins:
These stablecoins are backed by a reserve of cryptocurrency assets, such as Bitcoin or Ethereum. These assets are held in a smart contract on a blockchain and can be redeemed for the stablecoin at a rate determined by the value of the collateral. Examples of crypto-collateralized stablecoins include DAI and sUSD.

### Non-collateralized stablecoins:
These stablecoins are not backed by any physical assets or reserves. Instead, they rely on complex mathematical algorithms to control the supply of the stablecoin in order to keep its value stable. Examples of non-collateralized stablecoins include Ampleforth (AMPL) and Basis (BAS).

## Fiat-Collateralized Stablecoins
The simplest type of stablecoin to comprehend are those that are redeemable for the external reference to which they are pegged. That is, these stablecoins are collateralized 1:1 by fiat. For example, a fiat-collateralized stablecoin pegged to 1 USD can be redeemed for 1 USD fiat. This is less of a peg and more of a digital representation of a dollar, where it requires a centralized custodian to hold the reserve. Not only do you have to trust this custodian, but you also have to trust that auditors ensure the custodian is using best practices to maintain the proper reserves. If the centralized entities in charge of the reserve truly maintain the proper collateral, then fiat-collateralized stablecoins can withstand any amount of cryptocurrency volatility.

_Benefits_

- 1:1 price stability through fiat reserves.
- Simple mechanism that makes it easy to understand.
- Collateral is held off the blockchain, so this system is less vulnerable to hacks.

_Drawbacks_

- Antithetical to the adoption of DeFi - it requires a trusted custodian to manage a fiat reserve (centralized).
- Expensive and slow to liquidate into fiat.
- Requires regular audits to maintain transparency and ensure that fiat reserves are maintained.

Tether’s USDT is a stablecoin with the largest market cap (among stablecoins), and is an example of a stablecoin backed by a reserve. Between 2014 and 2017, Tether promoted that USDT was 100% backed by fiat reserves and could be exchanged 1:1 for USD at any time. Since 2017 however, Tether has been embroiled in controversies. In 2019, [Tether admitted](https://www.marketwatch.com/story/tether-reverses-claim-of-100-dollar-backing-sparking-criticism-2019-03-14) that their reserves were not backed by fiat, but instead were a mix of “traditional currency, cash equivalents, [and] other assets and receivables from loans made by Tether to third parties, which may include affiliated parties.”

Since then, [Tether has disclosed](https://tether.to/en/transparency/) that only ≅8% of reserves were actually held as cash. Tether has also had consistent delays when it comes to the audits on its finances, which were finally completed in [December 2022](https://cointelegraph.com/news/tether-assets-exceed-liabilities-in-new-reserves-report-by-bdo). The current breakdown of Tether Reserves are highlighted in the graphic below:

![Tether Reserves Breakdown.png](https://storage.googleapis.com/ergo-cms-media/Tether_Reserves_Breakdown_68b94f905d/Tether_Reserves_Breakdown_68b94f905d.png)

Unfortunately, the need to trust centralized entities maintains the status quo and handcuffs the crypto industry to the very thing it is trying to evolve away from: traditional finance.

The next two biggest fiat-collateralized stablecoins by market cap are USDC and BUSD. They both have reserves containing mostly US treasury bills and some fiat (<25%), and [they advertise](https://www.thecoinrepublic.com/2022/07/15/circle-releases-usdc-reserves-breakdown-report/) that they wish to be transparent with their collateral. 

## Crypto-collateralized Stablecoins

If a crypto project is committed to DeFi, it stands to reason that the founders of such a project would want to avoid the fiat system and centralization. To have a stablecoin that moves completely away from fiat (but still relies on the concept of reserves), it is possible to use another cryptocurrency as a store of reserve. The problem with this model is that cryptocurrencies have volatile prices, so the value of collateral stored in reserves can be subject to similar fluctuations. The only way to ensure that reserves are sufficient against massive downward price action on the reserve cryptocurrency is to over-collateralize the stablecoin, so it can absorb the significant price fluctuations of the collateral.

An example of a crypto-collateralized stablecoin is DAI, which is issued by the makerDAO project on Ethereum. DAI is pegged to USD and its value is maintained through collateralized debt positions (CDPs).

SigmaUSD is an example of a decentralized stablecoin issuance protocol that uses reserves and is not collateralized by debt positions.

Everyone can mint [SigUSD](https://sigmausd.io/#/) as well as SigRSV (to provide reserve to the platform). This protocol allows people to hold USD backed by Ergo and earn commission fees by locking their ERG as reserve capital. The reserve based model is superior to using collateral debt positions, since it is able to prevent cascading liquidations during extreme volatility of collateral assets.

The protocol uses a reserve ratio between 400% and 800% to create healthy liquidity for buyers, sellers and holders. The reserve ratio is the value of SigUSD in circulation to the value of the ERG stored in the reserve. So, if 1000 SigUSD is in circulation and 1000 Erg valued at 5 USD is stored in the reserves, then the reserve ratio is 500%.

You may be wondering, what does it mean to keep the reserve ratio between 400% and 800%? If the reserve ratio is below 400%, then the contract stops users from redeeming SigRSV for the ERG stored within the reserve. By doing so, the protocol can maintain USD and SigUSD parity. Additionally, while the reserve ratio is under 400%, users will not be able to mint SigUSD. If  the value of ERG goes up and brings the reserve ratio above 400%, then more SigUSD can be issued. Likewise, if the value of ERG goes down and the reserve ratio is under 400%, then minting of SigUSD will be locked.

This means that if someone mints $100 worth of SigUSD, then there will be $400 worth of SigRSV backing it. This makes it equal to a 75% collateralized debt position. The system protects SigUSD’s peg to USD and prevents flash crashes if the reserve ratio falls below 400%. 

![unnamed (1).png](https://storage.googleapis.com/ergo-cms-media/unnamed_1_5a458dad9c/unnamed_1_5a458dad9c.png)

Holders of SigRSV benefit from transactions on the protocol. Users who mint or redeem SigUSD pay a 2.25% fee, which goes to the reserve holders. 

## Non-Collateralized Stablecoins

Non-collateralized stablecoins are also known as algorithmic, seigniorage-style stablecoins or future-growth-backed stablecoins. These stablecoins do not rely on collateral assets to maintain their value, but instead use mathematical algorithms to control the supply of the stablecoin to keep its value stable. Dexy is an example of a seigniorage-style stablecoin. 

The Dexy protocol uses ERG as the reserve and Dexy as the stablecoin. There are two contracts that function together: a bank and a DEX (CP-AMM). The bank holds the reserves for deployment and mints new Dexy into the DEX. The DEX attempts to maintain an oracle price and has buy and sell functions.

The first product being built with the Dexy framework is DexyGold, where the price of the stablecoin is pegged to the USD/XAU v2 [oracle pool](https://docs.ergoplatform.com/uses/oracles/). Dexy uses a one-way tethering mechanism, where the Dexy tokens are minted from an emission contract based on the oracle pool rate, and can be sold on a Liquidity Pool (LP), similar to Uniswap V2. To ensure the stability of the protocol, the redeeming of LP tokens is not allowed when the oracle pool rate is below a certain percent of the LP rate.

If the oracle pool rate is higher than the LP rate, then traders can arbitrage by minting Dexy tokens from the emission box and selling them to the LP. If the oracle pool rate is lower than the LP rate, then the ERG collected in the emission box can be used to bring the rate back up by performing a swap.

## Beyond Stablecoins: Peer-to-Peer Money

ChainCash is a decentralized, peer-to-peer monetary system that aims to create money collectively through trust and blockchain assets. It addresses the issue of inelasticity in blockchain asset supply, which can hinder their real-world usage. Chaincash allows for the elastic creation of money in a decentralized manner, while maintaining the quality of the currency.

Users of ChainCash can create notes of arbitrary values, which may or may not be backed by reserves in various digital tokens or real-world assets. These notes are like digital representations of money that can be used for transactions within the ChainCash system. To maintain the quality of the currency, the acceptance of a note depends on the collateral or trust in the issuer. As notes circulate, their quality generally improves due to the collective collateral and trust backing them.

The implementation of ChainCash will use two contracts: one for notes and one for reserves. The system can track different note and reserve contracts, support various acceptance predicates and redemption mechanisms, and accommodate complementary currency systems, such as Local Exchange Trading Systems (LETS) and local currencies.

While Layer Two implementation is still being considered, ChainCash offers a flexible and decentralized monetary system that has the potential to cater to different economic agents globally, addressing the limitations of traditional blockchain assets.

### Conclusion

Stablecoins are a vital part of the cryptocurrency industry because they act as a bridge, integrating traditional finance with the new blockchain-based crypto systems. Even though the SigUSD protocol has been incredibly successful, developers on Ergo continue to innovate the potential designs of a crypto stablecoin. Currently, two major financial frameworks are being developed: Dexy and ChainCash. With the development of cross-chain bridges (such as Rosenbridge), Ergo’s stablecoins have the potential to offer many other blockchain users a secure and stable store of value - one the industry desperately needs.
