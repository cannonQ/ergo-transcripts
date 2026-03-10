---
title: 'DeFi Lending and Borrowing: Duckpools'
date: '2024-02-15'
author: Ergo Platform
tags:
- amm
- collateral
- duckpools
- ergo-blog
- layer-scaling
- native-tokens
- rosen-bridge
- sigmausd
- transaction
- tutorials
category: blog
blog_tag: Tutorials, Ecosystem, DeFi
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/DeFi-Lending-and-Borrowing-Duckpools
glossary_hits:
- AMM
- Collateral
- Duckpools
- Layer scaling
- Native tokens
- Rosen Bridge
- SigmaUSD
- Transaction
---

# DeFi Lending and Borrowing: Duckpools

> **Published:** 2024-02-15 | **Author:** Ergo Platform | **Tag:** Tutorials, Ecosystem, DeFi | **Type:** blog

**Related concepts:** AMM, Collateral, Duckpools, Layer scaling, Native tokens, Rosen Bridge, SigmaUSD, Transaction

---

One of the goals of DeFi (decentralized finance) is to provide a new way of lending and borrowing, one that removes TradFi (traditional finance) gatekeepers and/or 3rd party intermediaries. With blockchain technology, people can lend and borrow directly from one another, trustless and through the application of smart contracts. As lenders, individuals can leverage smart contracts to essentially operate as a bank, and borrowers can use their digital assets as collateral for loan liquidity.
 
With the [recent approval](https://www.sec.gov/news/statement/gensler-statement-spot-bitcoin-011023) of the first Bitcoin spot ETFs, it is no longer a question of whether traditional investors will participate in DeFi, but rather when. Now that crypto ETFs are tradable within investment bank portfolios, the doors have been swung open on the crypto industry. Where the future takes us is unknown, but with institutional money entering the blockchain industry, there is a great deal of potential for how TradFi and DeFi will interact and operate going forward. What kind of impact will this have on lending and borrowing protocols? Will increasing institutional investment spark a fresh wave of new blockchain customers?
 
With that in mind, let’s look at lending platforms on several prominent blockchains to get a sense of how DeFi lending has fared up to this moment.
 
## DeFi Lending Protocols
 
### AAVE (Ethereum)

·  	Locked liquidity: Just under $11 Billion
·  	Aave Market Capitalization: $1.34 Billion
 
Known for its wide range of Ethereum-based cryptocurrencies available for borrowing and lending, Aave has pioneered several innovations in the DeFi crypto loan space. It is an open-source service, accessible worldwide, and does not require approval times for transactions. However, it is primarily limited to Ethereum-based (ERC-20) coins and tokens and does not support Bitcoin or fiat currencies.
 
Lenders deposit their cryptocurrency into Aave's liquidity pools, and these pools are smart contracts that contain the collective funds from multiple lenders. From these pools, lenders earn interest on the assets they deposited, which is determined by the supply and demand for each asset within the pool. After depositing assets into these liquidity pools, lenders receive aTokens in return, which represent their stake in the pool. These aTokens accrue interest in real-time, directly into the lender's wallet.
 
To borrow from Aave, users must provide collateral, and the platform supports a wide range of cryptocurrencies as collateral. Once collateral is provided, users can borrow different cryptocurrencies. The amount that can be borrowed depends on the collateral's value and Aave's Loan-to-Value (LTV) ratio for that particular asset.
 
When it comes to interest rates, Aave offers both stable and variable interest rates to borrowers. The stable rate remains consistent over the loan period, while the variable rate can fluctuate based on market conditions.
 
Borrowers can repay their loans at any time. If the value of the collateral falls below a certain threshold, it may be liquidated to repay the loan.
 
### Compound (Ethereum)

·  	Locked Liquidity: ~$1.62 Billion
·  	COMP Market Cap: $440 Million
 
Compound is another significant player in the Ethereum DeFi space, especially after the launch of its governance token, COMP, which contributed to a surge in the protocol’s total value locked. Token support is primarily limited to ETH and ERC-20 tokens, but it also offers its users access to USDC.
 
Similar to Aave, Compound users deposit cryptocurrencies into Compound's liquidity pools, where these pools (managed by smart contracts) serve as collections of funds from multiple lenders. Lenders earn interest on their deposits, and the interest rates are algorithmically determined based on the supply and demand of each specific asset in the pool. Also similar to Aave, lenders receive cTokens, which represent their stake in the pool. cTokens accrue interest over time and can be redeemed for the underlying asset plus earned interest.
 
To borrow, users must first supply collateral. The amount a user can borrow depends on the value of their collateral and the platform's collateral factor (different assets have different collateral factors). Users can borrow different cryptocurrencies and are charged interest on their loans. Compound offers variable interest rates that fluctuate based on market dynamics.
 
Borrowers can repay their loans at any time. If the value of the collateral falls below a certain threshold (due to market volatility), the collateral may be liquidated to repay the loan.
 
### MakerDAO (Ethereum)

·  	Locked Liquidity: $2.94 Billion
·  	DAI Market Cap (DAI and MKR combined): $7.17 Billion
 
MakerDAO’s platform centers around the DAI stablecoin and allows users to deposit Ethereum and other assets as collateral to generate DAI. MakerDAO's significance lies in its role in maintaining the stability of DAI and providing a decentralized, collateral-backed cryptocurrency pegged to the US dollar.
 
Users lock up collateral assets, such as Ethereum (ETH), in a smart contract known as a Vault (previously called a Collateralized Debt Position or CDP). In exchange for their deposited collateral, users can generate DAI, a stablecoin whose value is soft-pegged to the US dollar - the amount of DAI that can be minted is determined by the collateral ratio and the type of collateral asset.
 
When users decide to retrieve their collateral, they must pay back the DAI they generated along with a stability fee, which is effectively the interest rate. This fee can be paid in DAI or in the platform's governance token, MKR. Holders of MKR have voting rights in the system's governance decisions, such as adjusting stability fees, collateral types, and other system parameters. MKR tokens are also used for system stability and risk management. In the event of a system deficit, additional MKR tokens can be minted and sold in the open market to raise funds.

### Duckpools: Ergo’s Newest Lending Protocol

·  	Locked Liquidity: $341,532
·  	QUACKS Market Cap: $328,294
 
Designed as a blockchain for contractual money, the Ergo Platform prioritizes decentralization and open-source development. The blockchain is positioning itself as one of the most technologically innovative networks in the crypto sector and has recently launched the Rosen Bridge cross-chain hub.
 
Still a relatively young blockchain, the Ergo Platform has witnessed extensive dApp development during the bear market these last couple of years. One of the ecosystem's signature dApps is the Duckpools lending protocol.
 
Duckpools allows users to lend and borrow Ergo native assets through several liquidity pools. Depending on the native asset liquidity pool, lenders will earn varying degrees of interest. Borrowers are required to provide $ERG as collateral, and they can choose their level of risk by setting the collateral loan ratio as either 135%, 150%, 170%, or a custom amount.
 
**Duckpools Lending/Borrowing Pools**
 
**ERG Pool**
·  	Total Value Locked: 12094.03 ERG
·  	APY 2.41%
·  	Pool Utilization: 39.4%
 
**SigUSD Pool**
·  	Total Value Locked: 75785.26 SigUSD
·  	APY 93.64%
·  	Pool Utilization 95.47%
 
**SigRSV Pool**
·  	Total Value Locked: 3.25 Million SigRSV
·  	APY: 0.11%
·  	Pool Utilization: 6.55%
 
**RSN Pool**
·  	Total Value Locked: 1.217 Million RSN
·  	APY 0.1%
·  	Pool Utilization: 5.49%
 
As one will note, there is liquidity in some of these pools, but there is also opportunity for investors. The SigUSD Pool is currently offering an APY of 93.64%. That’s right, almost 94%!

### Solend (Solana)

·  	Locked Liquidity: $211 Million
·  	SLND Market Cap: $78 Million
 
Solend is a prominent money market on Solana. Users can engage in activities like borrowing, earning interest on loans, and using leverage for both short and long positions. The platform supports various assets including SOL, USDC, USDT, ETH, BTC, SRM, FTT, and RAY.
 
Similar to the previously mentioned lending protocols, users pool their assets in liquidity pools and earn interest for those respective pools. After depositing their assets in Solend liquidity pools, users receive SLND tokens (representing their share of the pool) and accrue interest from these tokens over time. As with the other lending protocols that have been reviewed in this article, borrowers need to provide collateral to qualify for a loan.
 
### Mango Markets (Solana)

·  	Locked Liquidity: $175 Million (need confirmation)
·  	MNGO Market Cap: $14.4 Million
 
Mango Markets, a decentralized derivatives exchange on the Solana blockchain, offers a platform for users to lend, borrow, swap, and leverage trade crypto assets. It allows assets deposited on the platform to be cross-collateralized, meaning the same assets can be used as collateral for both borrowing/lending and leverage trading. The assets automatically earn interest and can be used as available collateral. Mango Markets leverages the Serum DEX for spot margin trading while running its own order book for perpetual futures. It also features its governance token, MNGO, which enables holders to participate in governance decisions within the Mango DAO. Mango Markets focuses on combining the liquidity and usability of centralized finance (CeFi) with DeFi at lower costs to the user.
 
### Liqwid Finance (Cardano)

·  	Total Value Locked: $35 Million
·  	LQ Market Cap: $907K
 
This protocol is an open-source, algorithmic, and non-custodial interest rate platform designed for lenders and borrowers. It employs an algorithmic approach to determine interest rates based on supply and demand. Liqwid Finance offers pooled lending and lenders are given qTokens for the liquidity deposits.
 
### Levvy Finance (Cardano)

·  	Total Loan Volume: 54.05 Million $ADA ($26 Million)
·  	SOC Market Cap: 37 Million $ADA ($18.01 Million)
 
In the last 6 months, Levvy Finance has created a lending and borrowing protocol for Cardano NFTs and native assets. Borrowers can access instant liquidity by borrowing against their NFTs or native assets, while lenders can deposit liquidity into the pools for various NFTs and native assets. Interest rates are set when funds are lent, and loans are typically paid back within 2 weeks.
 
### Lenfi (Cardano)

·  	Total Value Locked: 18.876 Million $ADA ($9.19 Million)
·  	LENFI Market Cap: 103.46 Million $ADA ($50.39 Million)
 
Lenfi is a decentralized, non-custodial lending and borrowing protocol on the Cardano blockchain. It enables users to participate either as depositors or borrowers. Deposit options include providing liquidity directly to the protocol's liquidity pools or setting pre-determined terms. Depositors can earn passive income through their contributions. Borrowers, on the other hand, can engage in peer-to-peer borrowing with over-collateralized requests or borrow from the liquidity pools under an over-collateralized agreement.
 
#### Conclusion

When looking at the amount of liquidity and TVL within the various lending platforms highlighted, it’s clear that Decentralized Finance is thriving thanks to the substantial demand generated in and around the crypto industry.

Ethereum (as the blockchain with the most active developers right now) is the more senior network, and it is dominating the DeFi landscape when looking at sheer numbers, such as TVL. However, as more people adopt blockchain technology, it stands to reason that they will research and look for different platforms to meet their needs. For instance, gas fees on Ethereum, even after the switch to Proof-of-Stake, still present a long-term obstacle for mainstream adoption and can be a deterrent for those who are looking for an economical blockchain protocol.

Ergo is a game-changing Layer 1 blockchain, and it’s just a matter of time before the platform attracts an even larger user base. Rosen Bridge is already on-boarding new users, and with Ethereum set to be added to the bridge infrastructure, Ethereum users will have a direct line of access to the unique tools and products that Ergo offers. The blockchain features unique and innovative technological features, including robust PoW security coupled with a truly decentralized network and commitment to open source development. Gas fees are not an issue on Ergo as each transaction costs a meager 0.0011 ERG. If the value of ERG ever reaches a point where transaction fees start to become expensive, the blockchain is designed so that miners have the power to vote on and change network parameters (including transaction fees).

With time, we will start to see how these lending platforms grow and serve their clientele, but with the increasing investment by traditional finance, it seems likely that the TVL of blockchain lending platforms may reach heights we have not yet seen.
