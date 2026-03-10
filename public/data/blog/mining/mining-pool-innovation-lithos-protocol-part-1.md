---
title: 'Mining Pool Innovation: Lithos Protocol Part 1'
date: '2023-03-13'
author: Ergo Platform
tags:
- autolykos
- box
- collateral
- eip
- emission-schedule
- ergo-blog
- ergohack
- eutxo
- mining
- transaction
category: blog
blog_tag: Mining, Ecosystem
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Mining-Pool-Innovation-Lithos-Protocol-Part-1
glossary_hits:
- Autolykos
- Box
- Collateral
- EIP
- ERGOHACK
- Emission schedule
- Transaction
- eUTXO
---

# Mining Pool Innovation: Lithos Protocol Part 1

> **Published:** 2023-03-13 | **Author:** Ergo Platform | **Tag:** Mining, Ecosystem | **Type:** blog

**Related concepts:** Autolykos, Box, Collateral, EIP, ERGOHACK, Emission schedule, Transaction, eUTXO

---

[Mining](https://www.coinbase.com/learn/crypto-basics/what-is-mining) is the process by which Ergo (or any other PoW (Proof of Work) blockchain) secures the network, generates new coins and verifies transactions. Mining is largely incentive driven, and in return for providing mining hash power, miners are rewarded with the type of cryptocurrency they are mining. The miners secure the blockchain and the blockchain in turn provides coins.

[Mining on Ergo](https://ergoplatform.org/en/get-erg/#Mining) is based on Autolykos II, a fairly launched, efficient ASIC-resistant Proof of Work algorithm.This mining algorithm is more energy efficient than other PoW protocols, and it has demonstrated that it puts much less wear and tear on GPU hardware with lower mining temperatures.

## Why is Mining Important to Ergo?

The primary role of miners is to secure the network. Bitcoin’s PoW UTXO model is time tested, and with Ergo, the creators drew inspiration from this design. They built a protocol that enabled Ergo’s PoW network to deploy smart contracts through the eUTXO model.

In order to secure the network and validate transactions, Ergo (like other PoW blockchains) needs hash power. Miners offer a vital service to the ecosystem by providing this necessary hashing power, thereby securing the network and validating transactions. As an ASIC-resistant blockchain, Ergo prioritizes GPU miners, allowing those with consumer grade hardware the opportunity to participate in the network. 

## What Innovation does Ergo Bring to the Mining Industry?

One of the innovations that Ergo offers its mining community is governance responsibilities over the network. For those who have been actively mining PoW cryptocurrencies over the last decade, you will note that this decentralization of power is incredibly rare in the blockchain industry. With Ergo, miners have the power to collectively vote on any EIP proposal, thereby having a say in the future of the network. This feature has allowed miners to vote on several important proposals, including [EIP-27](https://ergoplatform.org/en/blog/A-New-Era-for-Ergo-EIP-27-Begins-Today/).

## What is a Mining Pool?
 
When a miner chooses to mine Ergo, they need to decide if they will solo mine or mine as part of a pool. A mining pool is a collaborative effort among miners to combine their hash power. By participating in a mining pool, a miner has a better chance of receiving steady mining rewards. Whenever a miner within the pool hits a block, everyone else in the pool gets paid. In this scenario, a miner receives block rewards proportional to their hashrate contribution within the pool. 

Solo miners often go longer periods of time before hitting a block, but when they do they receive the whole block’s reward. Choosing to solo mine or mine within a pool is a personal choice - some miners prefer the peace of mind knowing that they will receive regular rewards while mining within a pool. 

## Innovation on Ergo and the Future of Mining Pools

During the most recent [Ergohack](https://ergohack.io/) (ErgoHack VI: Cypherpunk Finance), one of the submissions proposed working on developing a way to fully decentralize collateralized mining pools. The[ Lithos Protocol team](https://github.com/Lithos-Protocol/Lithos/blob/ErgoHack/documents/ErgoHack.MD) seeks “...to create the contracts needed to support collateralization by third parties, in a way which allows for miners to select their collateral, while at the same time supporting novel concepts in PoW, such as PoW-DeFi and Fair Initial Mining Offerings.” Collateralized mining pools essentially allow miners to have increased flexibility, giving them greater control over the transactions they choose to include in their blocks and how they establish governance frameworks for the network. 

In their [Litepaper](https://github.com/Lithos-Protocol/LitePaper#readme), Lithos also states that “Collateralized mining pools allow for local block creation and full censorship resistance. Miners may choose whatever transactions make it into their block, and may also set parameters related to governance of the Ergo blockchain. Collateralization also supports a native DeFi application built into the Lithos protocol, in which lenders provide collateral to miners in return for fees.” This gives miners more [freedom and power](https://twitter.com/LithosProtocol/status/1632552516406632450) over their hashrate because miners will no longer have to worry about the possibility of mining pools cheating them out of shares and payments. Share and payment data will be processed and stored on the Ergo blockchain instead of a pool operator's centralized database.

## Looking to the Future

Those in the Ergo ecosystem are keenly aware that blockchain research did not stop with the advent of Bitcoin and subsequent launch of smart contracts on Ethereum. Ergo developers have continued to actively research and build during the recent bear market, and all eyes are focused on creating a blockchain that improves the lives of ordinary citizens. With Ergo, users are accessing a blockchain that prioritizes open source coding, decentralization and transparency. With tools like the Lithos Protocol, Ergo is revolutionizing the way miners operate in the industry. Stay tuned to Ergo’s social media channels for the release of _Mining Pool Innovation: Lithos Protocol Part II_ for a more in-depth look at what Lithos is building.
