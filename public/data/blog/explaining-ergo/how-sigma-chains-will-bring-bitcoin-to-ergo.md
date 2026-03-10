---
title: How Sigma Chains Will Bring Bitcoin To Ergo
date: '2024-07-15'
author: Ergo Platform
tags:
- autolykos
- box
- collateral
- ergo-blog
- explaining-ergo
- native-tokens
- ring-signatures
- sigma-chains
- sigma-protocols
- transaction
category: blog
blog_tag: Explaining Ergo, Tooling, Core, Ecosystem
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/How-Sigma-Chains-Will-Bring-Bitcoin-To-Ergo
glossary_hits:
- Autolykos
- Box
- Collateral
- Native tokens
- Ring signatures
- Sigma Chains
- Sigma protocols
- Transaction
---

# How Sigma Chains Will Bring Bitcoin To Ergo

> **Published:** 2024-07-15 | **Author:** Ergo Platform | **Tag:** Explaining Ergo, Tooling, Core, Ecosystem | **Type:** blog

**Related concepts:** Autolykos, Box, Collateral, Native tokens, Ring signatures, Sigma Chains, Sigma protocols, Transaction

---

Ergo’s powerful, flexible, and secure smart contract functionality opens the door to a whole host of new use cases for Bitcoin DeFi on Ergo. Here’s how Sigma Chains can bridge the gap between the two platforms.

## What Is A Sigma Chain?

Sigma Chains are one of Ergo’s key solutions for scaling its blockchain ecosystem. 

Like Bitcoin and other similar blockchains, Ergo makes critical trade-offs between speed, scalability, and security for its base chain. Ergo supports limited throughput on its main blockchain, instead choosing to prioritize security (it nonetheless processes blocks every 2 minutes, supporting significantly greater transaction volumes than Bitcoin).

More significant scaling is achieved through an unlimited number of Sigma Chains, or sidechains, that are secured using the Ergo base layer. These can also have their own rules for consensus as well as be customized in different ways. This offers a best of both worlds approach, where Sigma chains provide a high degree of flexibility, without sacrificing security.

What this means in practice is that a Sigma Chain can be launched and tailored to a specific use case, all while secured on Ergo. This offers an extremely versatile model for scaling and creating a wide range of decentralized finance (DeFi) applications on UTXO-based chains.

## What’s Special About Sigma Chains?

There are a number of reasons why Sigma Chains are such a compelling addition to the Ergo ecosystem.

Firstly, scaling Ergo is a valuable goal in its own right. Moving transactions off the main chain reduces congestion and ensures a system that is future-proof, allowing an influx of users without the high costs and delays that have affected other platforms. 

However, Sigma Chains are not simply a means of scaling the blockchain. The industry desperately needs secure and diversified infrastructure for cross-chain interoperability. This is a significant challenge in the blockchain space, where bridges and communication between chains is a perennial source of security vulnerabilities. Some of the largest and most serious hacks in the Web3 world have targeted bridges, with attackers sometimes stealing hundreds of millions of dollars in tokens.

Sigma Chains use zero-knowledge (ZK) proofs and threshold signatures – functionality enabled by Ergo’s Sigma Protocols, which enable native, efficient support for sophisticated cryptographic operations – to provide seamless, secure, and trustless communication between chains. Data can move around the Ergo ecosystem, and other blockchains linked to Ergo, smoothly and seamlessly.

Unlike some other scaling solutions in the blockchain space, the security model for Sigma Chains is clear, meaning that developers and end users can interact with these platforms with confidence. Moreover, sidechains can be set up with their own security features, depending on the needs of the applications they are designed to support.

Similarly, sidechains can be customized in other ways – for example, their consensus approach or mining model. Again, this allows developers to create a chain that suits their applications’ needs.

## Sidechain Mining Models

Sigma Chains do not need to follow the same approach as the Ergo main chain, which uses a GPU-friendly, memory-hard Autolykos consensus mining algorithm. Instead, they can be configured to use any algorithm and any hardware, whether it be CPU, GPU and/or ASIC.

Merged mining – using work done on the main chain to secure another platform – enables miners to benefit from securing multiple chains. There are different models for merged mining.

Straightforward merged mining enables miners to secure both the Ergo main chain and a Sigma chain. This allows for seamless and trustless interoperability between the two chains. A more sophisticated option is double merged mining, which allows for bridging between Ergo and other proof-of-work chains, including Bitcoin. Double merged mining using Autolykos and SHA256 (used by Bitcoin) allows a Sigma Chain to act as a Bitcoin sidechain. Bitcoin transactions are submitted to the Bitcoin blockchain, and additional data – for instance, information relating to the execution of dApps – is stored on the sidechain. 

## Sigma Chain Opportunities

The combination of security and functionality provided by Sigma Chains allows bridging of other UTXO-based cryptos easily to the Ergo ecosystem, where they can be used as collateral for different dApps. 

For example, a double merge-mined sidechain could be used to bridge bitcoin to Ergo. Wrapped BTC would then exist on the Ergo sidechain. While this would be secured with a commitment on the Bitcoin blockchain, further instructions on the sidechain would allow users to treat it as a native asset and deploy it within Ergo’s DeFi ecosystem.

This means Bitcoin could be swapped on Ergo’s decentralized exchanges and AMMs, deposited to liquidity pools, used as collateral for lending protocols, or locked in a vault to back stablecoins.

Collateral is the lifeblood of DeFi. Platforms stand and fall on the TVL they attract. Without this crucial liquidity, there will be no users and no activity. This is why many platforms go to such extreme lengths to attract new liquidity providers quickly. By targeting bitcoin holders – barring ETH holders, the largest source of liquidity in the crypto world by an order of magnitude – Ergo seeks to attract significant TVL, while providing a valuable service to Bitcoiners. There are relatively few places where BTC can be used as collateral, and there has been little DeFi success on Bitcoin L2s.

## Chain Security

Lastly, Ergo’s smart contracts are highly flexible, and so allow for a number of innovative use cases that link the use of these protocols to the security of the sidechains themselves. For example, a percentage of dApp protocol fees can be deposited to a dedicated smart contract and used to supplement miners’ earnings, increasing the security of the sidechain in proportion to the level of activity within the ecosystem. This means that as TVL and transaction volumes increase, so will hashrate, ensuring that a given chain or dApp does not present an overly easy target for hackers.

Read more about the [opportunities and challenges for DeFi on Ergo](https://ergoplatform.org/en/blog/Three-Opportunities-And-Challenges-For-DeFi-On-Ergo/). To find out more about Sigma Chains, check out the [Ergo docs](https://docs.ergoplatform.com/uses/sidechains/sigma-chains/).
