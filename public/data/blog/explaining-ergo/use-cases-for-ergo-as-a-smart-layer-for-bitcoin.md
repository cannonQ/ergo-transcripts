---
title: Use Cases For Ergo As A Smart Layer For Bitcoin
date: '2024-05-16'
author: Ergo Platform
tags:
- addresses
- autolykos
- box
- chaincash
- collateral
- ergo-blog
- ergohack
- ergoscript
- ergoscript-context
- eutxo
- explaining-ergo
- fair-launch
- native-tokens
- rosen-bridge
- sigma-protocols
- sigmausd
- transaction
category: blog
blog_tag: Explaining Ergo, Events
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Use-Cases-For-Ergo-As-A-Smart-Layer-For-Bitcoin
glossary_hits:
- Addresses
- Autolykos
- Box
- ChainCash
- Collateral
- ERGOHACK
- ErgoScript
- ErgoScript context
- Fair launch
- Native tokens
- Rosen Bridge
- Sigma protocols
- SigmaUSD
- Transaction
- eUTXO
---

# Use Cases For Ergo As A Smart Layer For Bitcoin

> **Published:** 2024-05-16 | **Author:** Ergo Platform | **Tag:** Explaining Ergo, Events | **Type:** blog

**Related concepts:** Addresses, Autolykos, Box, ChainCash, Collateral, ERGOHACK, ErgoScript, ErgoScript context, Fair launch, Native tokens, Rosen Bridge, Sigma protocols, SigmaUSD, Transaction, eUTXO

---

_Proposals for ErgoHack VIII (May 24 to June 2, 2024) have raised a number of promising applications in which Ergo can extend Bitcoin’s functionality._

A series of recent community proposals for [ErgoHack VIII](https://ergohack.io/) have explored the potential for Ergo to bring new features to Bitcoin. 

ErgoHacks are a regular feature for the Ergo ecosystem. They are opportunities for individuals and teams of developers to work intensively on new dApps and services for the platform, with help from experienced mentors.

## Ergo As Bitcoin’s Smart Layer

This year’s ErgoHack theme is “Ergo as a smart layer”. Both Ergo’s technical approach and ethos make it the ideal partner for the Bitcoin blockchain, holding the potential to extend Bitcoin’s functionality with DeFi capabilities – without the controversial need to build these directly into the Bitcoin network.

The idea is straightforward. DeFi has emerged as one of the major use cases for blockchain technology. A large number of smart contract platforms have been launched over the past nine years, starting with Ethereum, and each offers different features and advantages. Solana, for example, aims to address Ethereum’s lack of capacity, with a high-throughput blockchain network.

DeFi services include decentralized exchanges, stablecoins (something Vitalik Buterin has called DeFi’s “killer application”), borrowing and lending services, derivatives, and much more.

In every case, though, DeFi is dependent on collateral to exist and thrive. First and foremost, this collateral takes the form of a platform’s own tokens, including its native asset (ETH, SOL, etc) as well as stablecoins (USDT, USDC) and project tokens (COMP, AAVE, UNI). Another source of collateral is assets that have been bridged from other platforms, typically existing in the form of wrapped tokens on the target blockchain. 

Bitcoin is a first-generation blockchain network that was launched to do one thing well: secure decentralized value storage. It is the largest cryptocurrency by market cap by a considerable margin. Its current value is around $1.25 trillion: Over three times larger than Ethereum, 15 times larger than Binance Chain, and 20 times larger than Solana. This represents a huge amount of collateral – but this value cannot easily be deployed in DeFi dApps, because Bitcoin does not natively support smart contracts. Moreover, holders are generally reluctant to transfer coins to other platforms and use them in “wrapped” form on DeFi applications.

There are several ongoing efforts to bring smart contracts to Bitcoin itself, though they have proven controversial within the community for several reasons. Ergo’s aim is to become a “smart layer” for Bitcoin, offering powerful, flexible and secure new functionality via the platform’s Sigma Protocols, eUTXO model, and ErgoScript smart contract language.

## Decentralization And Security

While there is nothing to stop people using Bitcoin as collateral on other blockchain platforms, this has not yet happened to any meaningful extent. Assets like Wrapped Bitcoin (WBTC) are used on Ethereum, but not widely. Less than one percent of the available supply of Bitcoin has been wrapped to WBTC. It’s likely that centralization risk deters many users. Additionally, there may be differences in culture and priorities that prevent users from deploying BTC, as well as security concerns.

Ergo is the natural complement to Bitcoin in several ways. Culturally and technologically, there is a broad overlap, which should serve to reassure users that they are in good hands:
- Proof-of-Work consensus model (using Autolykos in Ergo’s case to maintain ASIC-resistance)
- Emphasis on full decentralization, with community developers and diverse ecosystem participants
- No ICO, pre-mine, or VC investors in either case
- UTXO/eUTXO model for enhanced security

Broadly speaking, then, Bitcoin and Ergo have a similar vision for decentralization and security, and a similar ethos of being community-driven.

## The eUTXO Vs The Account Model

One of the key benefits of Ergo is its eUTXO model for smart contracts and advanced scripting, which builds on Bitcoin’s UTXO model.

In Bitcoin, every address’s balance is made up of one or more unspent transaction outputs, or UTXOs. These can be thought of as “bags” of coins, which are registered to an address. When a user wants to send funds, they (or their wallet software) select one or more UTXOs, and cryptographically assign them to a new address. The UTXOs are bundled together and consumed, and a new UTXO is created. There may also be “change”, which is returned to the sender as a new UTXO.

Every Satoshi on Bitcoin therefore belongs to a UTXO, and every UTXO can be traced back through its history of prior UTXOs, to the coinbase transaction in which it was first mined into existence.

The UTXO model contrasts with the Account-based model, used by Ethereum and many other smart contract platforms. In the Account model, addresses are simply credited with a balance, and this is changed when a transaction is made, a lot like a bank balance is updated.

Ergo’s eUTXO model extends the functionality of UTXOs, allowing them to be used to execute smart contracts and contain information beyond address balances. As an overall approach, use of eUTXOs is starkly different from Ethereum’s Account-based approach. 

**Read: [What Are eUTXOs?](https://ergoplatform.org/en/blog/What-Are-eUTXOs/)**

There are various pros and cons to each of these, which are explored in more detail in another article. In summary, though, the benefits of eUTXOs include simplified state tracking (and therefore clearer security benefits), better privacy, better scalability, and reduced blockchain bloat.

Altogether, the overlap of features and ethos makes building on Ergo a great option for Bitcoin DeFi developers.

## Bitcoin DeFi, Powered By Ergo

We think there’s a massive untapped opportunity for Ergo to unleash Bitcoin's DeFi potential. While there are custom platforms seeking to do this directly on Bitcoin, they have proven controversial – and for good reason. There are many unanswered questions about security models, convenience, and community support. The debate around Ordinals should be warning enough that major players in the Bitcoin space are divided about the idea of adding further utility to the Bitcoin network itself. (Some miners even filter out Ordinals transactions, showing just how contentious this additional functionality has become.)

Here are three promising use cases for Bitcoin on Ergo, which are set to be explored in the coming ErgoHack.

### 1. Enhancing Privacy

Improved privacy is a huge use case for Bitcoin on Ergo. The Bitcoin community has always valued financial privacy, and Bitcoin was originally promoted as an anonymous (or pseudonymous) online currency. In reality, this is only the case if it is used very carefully, and steps are taken to avoid leaking any information that links addresses with real-world identities.

The popularity of Samourai Wallet and similar solutions demonstrates that privacy is still an important priority for the community. However, the recent arrest of Samourai’s developers by US authorities is cause for concern – both for those who use the wallet to facilitate illegal activities, and those who risk being criminalized simply for wanting to legitimately preserve their financial privacy. 

Ergo’s Sigma Protocols – highly composable, zero-knowledge proofs – offer solutions whereby funds can be effectively anonymized to protect users, yet information can be selectively revealed to those parties who require it, and to whom users are prepared to provide it.

While this is feasible using other platforms, Sigma Protocols provide an efficient means of creating custom cryptographic conditions that offer the flexibility for users to disclose the information they want while robustly protecting their identities from malicious parties.

### 2. Bitcoin-Collateralized Stablecoins

Stablecoins are arguably the most important use case in DeFi, and one of crypto’s killer applications. The ability to park funds on-chain in a price-stable token is hugely valuable – hence the popularity of USDT, USDC, and other fiat-backed stablecoins. Tether alone has a market cap of $110 billion, and is the third-largest crypto token after BTC and ETH.

More valuable still is the possibility of maintaining full decentralization as well as price stability. To date, there have been only a few successful decentralized stablecoins. MakerDAO’s Dai is the best-known and most widely-used, with a market cap of around $5 billion. The decentralized stablecoin sector has been hit hard by the collapse of Terra/Luna – which, though it used a completely different economic model to Dai, has colored the entire space and undermined trust in decentralized stablecoins across the board.

Decentralized backed stablecoins (as opposed to algorithmic decentralized coins, like UST) require collateral, and there is no bigger pool of potential collateral within the crypto world than Bitcoin. This is a $1 trillion+ asset, and moving even a small fraction of that to Ergo would offer huge potential for DeFi, including decentralized stablecoins.

SigmaUSD offers one model for a decentralized stablecoin on Ergo. [ChainCash](https://docs.ergoplatform.com/uses/chaincash/) provides another. A third possibility is deploying a Dai-like model, as pioneered by MakerDAO. Broadly speaking, synthetic assets of any type can be created in the same way; for example, a synthetic asset backed by Bitcoin that tracks gold or the S&P 500 would not be appreciably different to a dollar-pegged asset, only needing different oracle feeds.

### 3. Yield Farming

The existence of a Bitcoin-backed DeFi ecosystem opens the door to secure yield farming, allowing holders to earn a return on their BTC without the counterparty problems that they have previously had to accept. 

Many Bitcoin holders have made significant gains on paper, but are unwilling to sell their BTC for various reasons. Partly, they may want to hold them in anticipation of further price rises, especially if they are believers in the long-term future of Bitcoin. In other cases, they may be reluctant to incur capital gains, and the tax liabilities that come with selling. Still others may not have reliable off-ramps.

At the same time, they want to put that capital to good use to earn a return. Unfortunately, the market for this has led to the rise of centralized crypto lending platforms, including Celsius and BlockFi, both of which collapsed in the bear market of 2022, resulting in the loss of billions of dollars of users’ assets.

Allowing holders to deploy their BTC within a decentralized financial ecosystem would avoid the biggest risk that affected these platforms. While individual protocols still have varying risk profiles, fostering a true Bitcoin DeFi ecosystem allows users to maximize the value of their bitcoins in as secure a way as possible.

#### Conclusion

These are just three possible use cases and wider benefits of fostering a Bitcoin DeFi ecosystem on Ergo. With the launch of the secure, decentralized Rosen Bridge, moving BTC trustlessly and quickly between the two chains will enable the creation of new applications for Bitcoin – independently of the Bitcoin blockchain, and avoiding the controversies that surround building on it directly.
