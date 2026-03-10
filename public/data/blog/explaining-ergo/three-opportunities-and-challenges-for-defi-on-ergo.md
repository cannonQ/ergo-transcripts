---
title: Three Opportunities And Challenges For DeFi On Ergo
date: '2024-06-11'
author: Ergo Platform
tags:
- amm
- box
- collateral
- ergo-blog
- ergoscript
- ergoscript-context
- eutxo
- explaining-ergo
- full-node
- rosen-bridge
- transaction
category: blog
blog_tag: Explaining Ergo
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Three-Opportunities-And-Challenges-For-DeFi-On-Ergo
glossary_hits:
- AMM
- Box
- Collateral
- ErgoScript
- ErgoScript context
- Full node
- Rosen Bridge
- Transaction
- eUTXO
---

# Three Opportunities And Challenges For DeFi On Ergo

> **Published:** 2024-06-11 | **Author:** Ergo Platform | **Tag:** Explaining Ergo | **Type:** blog

**Related concepts:** AMM, Box, Collateral, ErgoScript, ErgoScript context, Full node, Rosen Bridge, Transaction, eUTXO

---

Every blockchain platform encounters unique circumstances and challenges as it seeks to carve out a niche in the competitive DeFi space. As is often the case for Ergo, the benefits and difficulties are two sides of the same coin.

## DeFi: The New Frontier

DeFi has emerged as blockchain’s premiere use case. Bitcoin, as the first cryptocurrency, remains the leading decentralized platform for secure value storage and transfer: Digital gold. No other first-generation platform comes close to rivaling Bitcoin in this regard. Even networks that offer special features such as enhanced privacy (Monero), or higher throughput (Litecoin), cannot compete. As Michael Saylor, founder and CEO of Microstrategy, says, “There is no second best.”

For second-generation blockchains, which offer more far-reaching functionality, the picture is different. Smart contracts enable the creation of decentralized applications (dApps), and many networks have built thriving DeFi ecosystems. While Ethereum mainnet remains the most popular, high gas prices and limited throughput have allowed other networks to gain a foothold. Unlike with Bitcoin, there is no clear front-runner. A number of Ethereum L2s, Solana, Binance Chain, and others, have all attracted significant liquidity.

Almost every new blockchain or L2 quickly establishes a DeFi ecosystem with one or more AMMs, lending protocols, and various other DeFi dApps. There are occasional exceptions. SKALE Network, for example, supports a large number of gaming and AI dApps, which were attracted by its zero-gas model. While these have millions of users, the DeFi scene on SKALE remains limited. In most cases, the total liquidity (Total Value Locked, or TVL) in DeFi dApps is effectively a measure of the success of the blockchain. 

Ergo is not a new blockchain, having launched in 2019. However, it is now expanding as the ecosystem matures and a series of DeFi applications attract users and liquidity. While Ergo faces some of the same challenges of other platforms, there are also some key differences. 

## 1. Starting From Scratch

One of the major challenges for any blockchain platform seeking to establish a DeFi ecosystem is the risk – and opportunity – of starting from scratch.

The blockchain world is built on the principle of network effect. Sustainable security and liquidity both rely on drawing a large enough group of users to reach a kind of escape velocity, where it makes more sense to join the crowd than attack or compete with them. In particular, users are attracted to deep liquidity, and so this becomes a self-reinforcing benefit.

Establishing sufficient liquidity in the first place is the challenge, and with so many smart contract platforms available, any new addition must offer a reason for users to shift their funds to the platform. That incentive may be intrinsic, in the form of low gas fees or a great user experience. Alternatively, it may be extrinsic, and take the form of yield farming rewards or similar ways to earn.

Ergo is exactly in the same position as any other blockchain platform with a relatively new DeFi ecosystem. Once the flywheel effect of growing liquidity takes effect, all is well, but in the early days, it can be difficult to convince users to come to the platform.

However, new ecosystems also have unique attractions.

A “greenfield” site, in which there are few or no existing DeFi services, can be a fantastic opportunity for dApp builders and entrepreneurs. 

The largest DeFi service in its category on any chain enjoys the benefits of network effect and liquidity, becoming a hub for future users. For example, the leading AMM attracts funds from the entire chain ecosystem, and benefits from the TVL and fees that this brings. 

Builders who believe in the future of a chain therefore seek to position early, deploying DeFi services that will allow them to capitalize on future network effects. The sooner they can do this, the better, since gaining an early foothold when there is low competition allows them to position for a time when liquidity is moving into the ecosystem at scale.

## 2. Ergo’s eUTXO Model

Another challenge and benefit, depending on how you look at it, is Ergo’s use of the eUTXO model. 

eUTXOs offer a fundamentally different approach to creating dApps than the prevailing Account-based model used by Ethereum and most other smart contract platforms. By extending the UTXO model used by Bitcoin to track balances, the eUTXO model enables sophisticated scripting without many of the downsides that have created problems and vulnerabilities on EVM platforms. The differences between the Account and eUTXO models have been explored in detail in other articles. 

Read: [What Are eUTXOs?](https://ergoplatform.org/en/blog/What-Are-eUTXOs/)
Read: [How The eUTXO Model Is Revolutionizing Blockchain](https://ergoplatform.org/en/blog/How-The-eUTXO-Model-Is-Revolutionizing-Blockchain/)

For the purposes of this article, we can summarize the benefits as:

- **Certainty**: Transactions using the eUTXO model can be checked off-chain before execution, meaning they will always be confirmed successfully when they are submitted to the network.
- **Known costs**: Because transactions have pre-determined and known complexity, the costs can also be calculated reliably before a transaction is made. This is not the case with EVM platforms, where users have to rely on estimated gas costs, and transactions can fail if they run out of gas.
- **Predictability**: Because an eUTXO is spent once and is used up when it is included in a transaction, Ergo smart contracts are more safe and predictable than Account-based contracts. There is a limited range of possible outcomes, making Ergo dApps simpler and more secure.

These are significant advantages for any developer or end user, but Ergo’s use of eUTXOs also poses a potential barrier. It’s a different model to the more popular EVM approach, so dApps are structured differently. There’s a learning curve that developers need to overcome. This includes getting familiar with ErgoScript, Ergo’s smart contract language. Ethereum-based smart contracts are generally written in Solidity, which is JavaScript-like, though alternatives like Vyper (similar to Python) are gaining popularity. Solana dApps are written in Rust. ErgoScript is based on Scala, which is widely-used but less well known than many alternatives.

As it is with the question of network effect, there are challenges to being the first movers – but also an advantage to being early for those prepared to work for the prize of being a major established DeFi service.

## Bridging Liquidity

One more perennial problem for any blockchain or L2 seeking to build network effect is the need to bridge funds from other platforms. Even now, with so many different chains to choose from, this can be a slow, complicated, and sometimes risky process. 

For various reasons, bridges have historically proven to be a major point of vulnerability in the blockchain world. One reason for this is because they can be so complex. They present a huge attack surface, which hackers often figure out how to exploit in different ways. Lazarus Group, the North Korea-affiliated hacker organization, has attacked cross-chain bridges numerous times. In March 2022, Lazarus Group stole $600 million from the Ronin Bridge, which was used to move funds into and out of the Axie Infinity game ecosystem. Three months later, they stole $100 million in the Harmony Bridge hack.

Bridges between blockchains typically have to make compromises to remain user friendly. It is very difficult to create a truly decentralized and trustless bridge that is also fast and user friendly. Many bridges prioritize speed, at the cost of including a degree of centralization. Others are more decentralized but much slower. 

This is a problem that the Ergo ecosystem intends to solve using the Rosen Bridge. Rosen offers a new model for bridging that avoids some of the most serious drawbacks and vulnerabilities of previously failed bridges. As of today, the bridge is set up to facilitate the bridging of assets between Ergo, Cardano, and Bitcoin.

One of Rosen’s key benefits is that it does not require smart contracts to be deployed on other chains. Consensus around asset transfers is achieved on the Ergo network by Guards: A federated group of entities who manage the Rosen core and maintain security. Each Guard has a certain amount of funds locked as collateral, incentivizing honest behavior. The group of Guards generates a signed transaction on Ergo or another supported chain, which is broadcast to the relevant network. Guards are kept informed by Watchers, who monitor activity on the bridge and relay events to Guards. The Watchers network is widely dispersed amongst hundreds of nodes, achieving a high degree of decentralization. Anyone can set up a node and run a Watcher for any, or all, of the bridged blockchains. 

## Ergo, The Smart Layer For Bitcoin

Ergo’s intention is to leverage these features to offer a new set of capabilities for Bitcoin. Rather than rely on smart contracts on the Bitcoin network itself (which is a [controversial and potentially problematic development](https://ergoplatform.org/en/blog/Ergo-The-Smart-Layer-For-Bitcoin/)), Ergo can act as a smart layer for Bitcoin.

Bitcoin can be securely transferred using the Rosen Bridge. Once it has been moved to Ergo, the BTC can then be used within complex DeFi apps, powered by Ergo’s safe but versatile eUTXO model. This dramatically extends the functionality of Bitcoin, without requiring any changes to the Bitcoin blockchain itself.

The challenges for Ergo – or any DeFi platform – are significant, but these same challenges present vast opportunities. Moreover, Ergo has a credible plan for tackling them, bringing the benefits of a powerful and secure smart contract platform to Bitcoin.
