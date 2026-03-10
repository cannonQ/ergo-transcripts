---
title: 'Ergo: Year in Review 2023'
date: '2023-12-30'
author: Ergo Platform
tags:
- amm
- atomic-swaps
- chaincash
- collateral
- dexy
- duckpools
- ergo-blog
- ergo-foundation
- events
- fleet-sdk
- full-node
- lilium
- native-tokens
- nautilus
- nipopow
- oracle-pools
- paideia
- rosen-bridge
- sigmafi
- sigmao
- spectrum
- transaction
category: blog
blog_tag: Events
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Ergo-Year-in-Review
glossary_hits:
- AMM
- Atomic swaps
- ChainCash
- Collateral
- Dexy
- Duckpools
- Ergo Foundation
- Fleet SDK
- Full node
- Lilium
- Native tokens
- Nautilus
- NiPoPoW
- Oracle pools
- Paideia
- Rosen Bridge
- SigmaFi
- SigmaO
- Spectrum
- Transaction
---

# Ergo: Year in Review 2023

> **Published:** 2023-12-30 | **Author:** Ergo Platform | **Tag:** Events | **Type:** blog

**Related concepts:** AMM, Atomic swaps, ChainCash, Collateral, Dexy, Duckpools, Ergo Foundation, Fleet SDK, Full node, Lilium, Native tokens, Nautilus, NiPoPoW, Oracle pools, Paideia, Rosen Bridge, SigmaFi, SigmaO, Spectrum, Transaction

---

What a year it has been for Ergo! Grassroots initiatives and open source tooling continue to drive community growth, development, and new ecosystem dApps. The blockchain is demonstrating an all-time high for viable products, and Ergo as a hub for cross-chain interoperability is just around the corner. As markets start to show signs of growth again, Ergo has been steadily building to this moment, and it is poised to reach new milestones in the years to come. Let’s take a look back at some of the new tools and products 2023 yielded for the Ergo Platform.

## Rosen Bridge - The Future of Blockchain Swaps

Of all the projects on Ergo, few have garnered the hype and excitement that [Rosen Bridge](https://rosen.tech/) has recently brought to the ecosystem. It is one the most anticipated releases, and after more than a year in development, it has finally been deployed on the mainnet. The Rosen Bridge is a decentralized, secure bridge that allows for the bridging of tokens between different blockchains. It is open source and functions on a system of guards on watchers that watch for and approve transactions. Currently, it is being deployed to enable native token swaps between Ergo and Cardano, but the roadmap includes plans to facilitate bridges to Ethereum, Bitcoin, Dogecoin, and Binance Smart Chain. 

## ErgoHacks

The year featured two of Ergo’s flagship hackathons. These two ErgoHacks were inspired by the themes of privacy and future adoption of the blockchain, and they took place in February and November, respectively. Several notable projects came out of these Ergohacks, including metamask wallet integration, analog atomic swap market, hodlbox, Ergo tizen, SigmaO and Lithos protocol, to name a few.

ErgoHacks are a pinnacle of the ecosystem, and they offer an opportunity for developers and entrepreneurs to compete for prizes from the Ergo Foundation and other community projects. They are an important catalyst for development on the blockchain, and many of Ergo’s most popular dApps and tools were born from previous ErgoHacks.

## Oracle Pools V2

[Oracle pools V2](https://ergoplatform.org/en/blog/Ergo%E2%80%99s-Oracle-Pools-V2-An-Innovative-Design/) offer enhanced data reliability by utilizing decentralized oracle pools. These pools consist of oracles which aim to reach a consensus on data sources and then post the data to the blockchain. This collaborative approach improves data reliability. More specifically, after an epoch, the data points are averaged (excluding outliers) to produce a finalized datapoint.

Oracles play a crucial role in crypto ecosystems because they help dApps to interact with real-world events and execute smart contracts using real-time data. They also boost dApp security by verifying and authenticating external information.

## NiPoPoWs

NiPoPoW stands for Non-Interactive Proof of Proof of Work. [NiPoPoWs](https://docs.ergoplatform.com/dev/protocol/nipopows/) are a blockchain compression technique that allow super light clients to sync to the blockchain with less than 1MB of data. This immense reduction of data also essentially produces a reduced technological requirement, enabling more users to access Ergo and crypto technology. NiPoPoWs will allow devices with limited technology, such as flip phones, to operate with limited data service, and achieve the same security level as a full node. Users have deployed NiPoPoWs this year to sync nodes with lightning speed. However, speed is not the only thing that NiPoPoWs have improved with syncing nodes. Users are able to use lite clients to effectively run nodes, reducing the necessary infrastructure to make running nodes more accessible. This lowers the barrier to entry so that the ordinary citizen can run their own node to support decentralization. 

## DexyGold - Algorithmic Gold Stablecoin

DexyGold is a gold-pegged, algorithmic stablecoin that utilizes oracles on Ergo. [DexyGold](https://twitter.com/Dexy_Ergo/status/1651835830057721856) uses one token and two protocols. An on-chain AMM is used for trading $DexyGold against $ERG, and an algorithmic bank intervenes when the market price differs from the target price set by an oracle. The bank mints Dexy tokens by selling them for $ERG while using $ERG reserves for intervention. To learn more, please see the DexyGold [documentation](https://docs.ergoplatform.com/eco/dexy/). 

## Yield Farming on Spectrum DEX

Yield farming on a decentralized exchange (DEX) involves users providing liquidity for specific trading pairs by depositing their cryptocurrencies into liquidity pools. In return for contributing to the liquidity, users receive rewards in the form of additional tokens. These rewards often include the exchange's native governance or utility tokens and are distributed automatically through smart contracts. Yield farming on DEXs allow participants to earn passive income while actively participating in the decentralized finance ecosystem. Instructions on how to participate in yield farming on Spectrum can be found [here](https://docs.spectrum.fi/docs/user-guides/yield-farming/).

## Duckpools - Pooled Lending

The future of decentralized finance requires the ability to lend and borrow on the blockchain. [Duckpools](https://www.duckpools.io/) is a collateralized pool lending protocol on Ergo that allows users to deposit their $ERG (or native tokens) into a pool to earn passive rewards. Users can both borrow and/or lend on this platform. Throughout the last year, in addition to launching their platform, Duckpools has been developing tutorials and guides for prospective customers.

If you are interested in accessing this unique lending protocol on Ergo, the following links may be of assistance:
- [Duckpools lending](https://www.youtube.com/watch?v=xnzZEpcdCuA)
- [Risk Assumptions](https://medium.com/@hello_68287/a-comprehensive-risk-analysis-lending-with-duckpools-03b646c14291)
- [Duckpools Github](https://github.com/duckpools)

## SigmaFi - Peer-to-Peer Lending

Similar to Duckpools, [SigmaFi](https://sigmafi.app/#/) is another borrowing and lending dApp on Ergo. However, SigmaFi is designed for peer-to-peer (P2P) lending rather than pool lending. There are no middlemen and the code is open source. Interacting with this dApp is as simple as requesting a loan and/or agreeing to fund a loan. Interest rates and term lengths can be easily set and agreed upon by participating parties. 

## Paideia - DAO Software Suite

[Paideia](https://www.paideia.im/) is a decentralized autonomous organization (DAO) software suite. It recently launched its public beta and is now undergoing stringent testing of its governance proposals. Paideia brings fully decentralized governance to Ergo projects through smart contract enforcement. This powerful DAO suite has the potential to put an end to manipulated voting, groupthink, and discord voting systems. 

## Fleet SDK - An Ergo Software Development Kit

Nautilus wallet creator, Captain Nemo, provided a vital tool for onboarding new developers to Ergo. Developers now have the opportunity to leverage two of the world's most widely used programming languages, JavaScript and TypeScript, when building dApps on Ergo. This coding flexibility combined with Ergo's open-source nature, significantly reduces the entry barrier for development on Ergo. This inclusive approach holds the potential to encourage widespread adoption of Ergo by offering developers familiar tools and fostering a more accessible and diverse development ecosystem. [Fleet SDK](https://ergoplatform.org/en/blog/Build-on-Ergo-with-Ease-Fleet-SDK0-v0.1.3)

## Lilium - NFT Minter

Lilium is a mass NFT minter and sales distributor protocol. This tool allows artists and project leads on Ergo to produce and sell big collections without the need to hire additional developers. With Lilium, users simply input their collection’s metadata, selling price point, date, and royalty fees. As blockchain technology grows, the barrier to entry needs to continue to lower for those without coding and/or technical skills. Lilium is another excellent example of a user-friendly tool on the Ergo platform, and it is ready now to assist future artists and NFT creators with their projects.  

## Chaincash - Becoming the Bank

Chaincash has long been a project of Ergo’s founder, Alex Chepurnoy. With Chaincash, the intention is that the ordinary citizen can serve as their own bank and print cash. Users can decide if they want to accept cash issued by one’s bank based on one’s reserves and/or whether you are trusted by them. 

Chaincash is coming soon to Ergo, and it is quite a revolutionary way of approaching DeFi. For those who would like to explore this idea more, Alex Chepurnoy has created a Chaincash [video](https://www.youtube.com/watch?v=NxIlIpO6ZVI) that offers further details.

## The Future and Beyond

2023 was an incredible year for Ergo. Rosen Bridge is opening the blockchain to new markets without the need for a centralized exchange, and DeFi products are flourishing in the ecosystem. Ergo is ready for the masses and what that future holds. As we look forward to 2024, it will be exciting to see how all of these tools and products can improve the lives of the ordinary citizen. What kinds of new dApps may arise from cross-chain interoperability? What sorts of organizations will thrive from Paideia’s DAO software suite? Will Chaincash enable a new model for possibly banking the unbanked? 

As events unfold, we will be here to relay all of the ecosystem’s exciting updates! Stay in touch and up to date with all things Ergo on [Discord](https://discord.gg/ergo-platform-668903786361651200), [Telegram](http://t.me/ergoplatform), [Reddit](https://www.reddit.com/r/ergonauts/), and [Twitter](https://twitter.com/ergo_platform).
