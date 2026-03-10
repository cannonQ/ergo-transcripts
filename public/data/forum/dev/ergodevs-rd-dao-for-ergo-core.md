---
title: ErgoDevs - R&D DAO for Ergo core
description: 'ErgoForum discussion: ErgoDevs - R&D DAO for Ergo core'
tags:
- amm
- appkit
- box
- chaincash
- collateral
- dev
- dexy
- duckpools
- eip
- ergoforum
- ergohack
- ergomixer
- ergoraffle
- ergoscript
- ergotree
- exle
- fleet-sdk
- full-node
- gluon
- native-tokens
- nautilus
- oracle-pools
- paideia
- phoenix-finance
- rosen-bridge
- scorex
- sigma-chains
- sigma-protocols
- sigma-rust
- sigmafi
- sigmao
- sigmastate-interpreter
- sigmausd
- spectrum
- sub-blocks
category: forum
forum_category: Development
source: ergoforum
source_url: https://ergoforum.org/t/ergodevs-r-d-dao-for-ergo-core/4663
created: '2024-02-18'
last_activity: '2024-03-06'
posts_count: 13
views: 1518
likes: 47
glossary_hits:
- AMM
- AppKit
- Box
- ChainCash
- Collateral
- Dexy
- Duckpools
- EIP
- ERGOHACK
- EXLE
- ErgoMixer
- ErgoRaffle
- ErgoScript
- ErgoTree
- Fleet SDK
- Full node
- Gluon
- Native tokens
- Nautilus
- Oracle pools
- Paideia
- Phoenix Finance
- Rosen Bridge
- Scorex
- Sigma Chains
- Sigma protocols
- SigmaFi
- SigmaO
- SigmaUSD
- Sigmastate interpreter
- Spectrum
- Sub-blocks
- sigma-rust
---

# ErgoDevs - R&D DAO for Ergo core

> **Forum thread:** [https://ergoforum.org/t/ergodevs-r-d-dao-for-ergo-core/4663](https://ergoforum.org/t/ergodevs-r-d-dao-for-ergo-core/4663)
> **Category:** Development | **Created:** 2024-02-18 | **Posts:** 13 | **Views:** 1518

**Related concepts:** AMM, AppKit, Box, ChainCash, Collateral, Dexy, Duckpools, EIP, ERGOHACK, EXLE, ErgoMixer, ErgoRaffle, ErgoScript, ErgoTree, Fleet SDK, Full node, Gluon, Native tokens, Nautilus, Oracle pools, Paideia, Phoenix Finance, Rosen Bridge, Scorex, Sigma Chains, Sigma protocols, SigmaFi, SigmaO, SigmaUSD, Sigmastate interpreter, Spectrum, Sub-blocks, sigma-rust

---

### Post #1 — @kushti (2024-02-18)

With this writing I would like to start discussions on ErgoDevs DAO, a cyberspace-based entity to be created to do  
research and development around Ergo protocol and maintenance of basic functionalities needed for off-chain  
infrastructure (explorers, wallet libraries).

# Motivation

Currently, development of core repositories is not transparent enough, and also not scalable. Maintenance of many  
infrastructure related projects is done chaotically. Promotion of Ergo protocol, ErgoScript and dapps development on  
Ergo is done poorly now, and also not scalable.

Establishment of DAO is aiming to scale core development and education efforts.

# Scope

* research: blockchain (PoW and PoW-based protocols, privacy enhancing protocols,  
  sidechains, optimistic and ZK verification of off-chain computations)  
  and monetary (alternative monetary systems on the blockchain, stablecoins, mechanism design in tokenomics)
* core development: reference client done in Scala repositories (debox, scorex-util, scrypto, sigmastate-interpreter, ergo),  
  parts of protocol implemented in Rust (sigma-rust)
* infrastructure: libraries and open-source wallets(AppKit, Fleet, Nautilus, ergo-wallet)
* oracle pool framework
* ChainCash (as assembler level for monetary innovations, such as local exchange trading systems etc)

# Goals

* organize discussions on research topics, EIPs, workshops
* find funding for bounties and salaries
* maintain existing infrastructure, improve existing protocol related code and libraries, explorers
* bring thousands of new developers into Ergo dapps development by doing and promoting tutorials, dapp examples etc
* support needs of dapps and wallets
* help with auditing and testing dapps

# Committees

To track achievement of goals provided above, ErgoDevs DAO has few committees. Every ErgoDevs DAO member may be a member  
of one or more committees:

* research committee
* Scala core committee
* Rust core committee
* infrastructure committee
* education committee
* ChainCash and monetary innovations committee

# Funding Sources

* EF
* projects on Ergo. For example, Gold Cooperative already sponsoring Oracle Pools and ChainCash development
* crypto funds

# Funding mechanisms

* bounties
* sponsorship of part-time and full-time developers
* grants

# We need for You!

We are looking for:

* Scala, Java and Rust developers
* folks willing to help with accounting, promotion of ErgoDevs DAO among developers, fundraising

Development plan

Q1 2024:

* Research: initial sidechain prototyping (no p2p, tests showing block generation, verification and transfer for a  
  sidechain having only cross-chain support features mentioned in the ErgoHack whitepaper)
* Node: RocksDB, UTXO set scanner, sub-block based blocks propagation EIP and basic entities
* Sigma: 6.0 planning and versioning code for serializers, new methods, new types
* Sigma-Rust: planning further development (costing, 6.0 support)
* ChainCash: tests for refund, contracts for custom tokens, another presentation
* Oracle pools: planning further development, final audit of EIP, considering dev rewards in contracts
* AppKit: ???
* other repos: planning further development
* education: ???

Q2 2024:

* Research: design docs for concrete sidechains, plan for research in other fields, forming research group
* Node: the simplest sidechain with p2p support, subblocks based propagation in the testnet
* Oracle pools: EIP merging, releasing oracle pool version with dev rewards support, considering extensions  
  (for delivering sport events etc)
* Sigma: 6.0 implementation
* Sigma-Rust: ???
* AppKit: ???
* other repos: ???
* education: ???

Q3-Q4 2024:

* Research: ???
* Node: sub-blocks support in mining API and weak confirmations API, another p2p level audit, refactoring, tests for p2p layer
* Oracle pools:
* Sigma: 6.0 audit and tests, 6.0 activation, planning further development
* Sigma-Rust: ???
* AppKit: ???
* other repos: ???
* education: ???

??? means that it is hard to plan how a direction will be shaped in a time period, as it depends on people contributing,  
including you! With establishment of ErgoDevs DAO things should be more transparent and better planned.

---

### Post #2 — @cannon_q (2024-02-19)

I can help with accounting (necessary evil I suppose), organizing and fundraising.  
Only understand very basic html/php/js… so useless otherwise ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=12 ":slight_smile:")  
Looking forward to the oracle pools Q2 opportunity

---

### Post #3 — @jossemii (2024-02-19)

First of all, a DAO focused on development seems like a very good idea to help the ecosystem progress. \*

However, to encourage some discussion and do a bit of brainstorming:

* What does the DAO provide that cannot already be contributed through the forum, Discord, or GitHub?
* I understand that we are talking about a series of contracts on the blockchain. If so, what functions do it provide?
* What kind of entry mechanisms are there? Do I need approval from a committee to be part of it? Or, on the contrary, can I join like someone entering one of the Discord channels, without permission?

(I’m not sure if the idea of this thread is to discuss these issues or similar ones to arrive at a solid idea, or if, on the contrary, the idea is already more mature.)

---

On the other hand, I don’t have much experience with Scala or Rust (I’m currently developing part of the reputation system with Rust, so I’m learning). Although I do have some experience with distributed systems and P2P networks. I will be happy to lend a hand if I can be of help in any way.

---

\*Those who saw my ErgoHack video will already know about my interest in building the community and development with a more P2P approach. (I’m not sure if that is exactly the goal of the DAO)

---

### Post #4 — @lgd (2024-02-20)

I would like to contribute somehow in the future.

---

### Post #6 — @ErgOne (2024-02-20)

If in any way we can make a contribution

Count on us !

---

### Post #7 — @Ccgarant (2024-02-21)

Sounds like a great idea to take Ergo to the next level. Count me in.

---

### Post #8 — @Ccgarant (2024-02-21)

Good questions for brainstorming. I might add a few to play devil’s advocate :

* Do we envision legally filing as a DAO say in Wyoming (they actually have DAO laws)
* Will the DAOs seek some kind of Grant / Donation system to pay core devs? Fundraising could really use some TLC.
* Do we expect dev R&D work to be voluntary and the reward is higher price of Ergo itself from utility?

I’m fine with keeping it cyber verse realm but it would be nice to have a vehicle for tax deductible donations or ways to support core devs and R&D from the fiat world potentially too.

---

### Post #9 — @kushti (2024-02-22)

I think it is better to consider legal entity (or entities) when processes are already established.

Ideally, all the contributions should be rewarded, and that is one of the reasons to create the DAO

---

### Post #10 — @kushti (2024-02-22)

I am thinking about proposing Paideia-based DAO with on-chain treasury and also offchain tools , including Github, chats ETC!

Please join!

---

### Post #11 — @kushti (2024-02-23)

Thanks a lot for feedback!

Current list of people willing to contribute:

kushti  
ccellado  
lgd  
cannon\_q  
ErgOne  
сcgarant  
mgpai

---

### Post #13 — @jossemii (2024-02-24)

That sounds like a good idea.  
Count me in, you can rely on me for whatever is needed.

---

### Post #14 — @filippounits (2024-02-26)

As asked on Dev Telegram chat, count me in.

As always, proud to bring my grain of sand to help the ecosystem grow in a healthy and decentralized way.

---

### Post #17 — @kushti (2024-03-06)

Some ideas on one of possible development vectors:

## Developing Digital Gold 2.0 and its infrastructure

Bitcoin has proven over years that it is successfully operating as digital gold, and there is technical explanation for  
it based on plausible assumptions[1]. However, Bitcoin has no expressive contracts and so trustless derivatives.

Ergo can be considered as digital gold 2.0, a mineable digital commodity with no trusted issuer, but also  
with possibility to have trustless derivatives (along other features, such as possibility to have cryptographic  
protocols as applications), which come with nearly zero cost (as trust assumptions are still the same).

Since the mainnet launch, a lot of basic infrastructure (wallets, explorers), DeFi tools, trustless derivatives etc were  
developed, including but not limited to:

* SigmaUSD stablecoin, first instantiation of Djed protocol (Djed, Zephyr etc)
* Spectrum DEX - AMM based decentralized exchange
* ErgoMixer - first in the cryptocurrency space non-interactive and non-custodial mixer on application level
* ErgoAuctionHouse - peer-to-peer auctions
* SigmaFi - peer-to-peer loans via bonds
* Duckpools - lending pools
* ErgoRaffle - decentralized crowdfunding
* EXLE - uncollateralized lending
* SigmaO - trustless options
* HodlCoin - trustless ERG derivative which price is always non-declining against ERG
* AuctionCoin - new emission principle via auctions
* Oracle Pools - federated transparent data providing
* Rosen Bridge - two-layered federated bridge to and from other blockchains

and more! (see [sigmaverse.io](http://sigmaverse.io))

and more to come! (Paideia, Dexy and Gluon stablecoins, ChainCash, Analog Ergo, OptionCoin and so on)

All those tools help to create more trustless collateral (via auctioncoin / option coin / fair initial mining offerings)  
and expand decentralized monetary base as well as derivative money supply.

All the DeFi on Ergo is built on its own unique ErgoTree / ErgoScript contractual layer (also known as sigma).

And with sidechains with trustless transfers [2, 3] (where transfers security is reduced to sidechain consensus security),  
it is possible to go further by having sidechains with different kinds of consensus (merged mined w. ERG, merged mined  
with other blockchains, double merged mined etc), different additions to the contractual layer (Bulletproofs based  
sigma protocols, certain contracts made first class citizens etc), different experiments with scalability (sharding etc),  
ERG and other tokens on Ergo can be utilized there since launch (along with sidechain tokens), sidechains tokens will enrich  
Ergo DeFi ecosystem.

And sidechains will get existing applications ready to be launched since the launch in many cases (depending on  
modification contractual layer).

Thus Ergo and its Sigma layer can be viewed as a hub for UTXO PoW blockchains with contracts.

And in such environment, ErgoDevs DAO can profit from:

* getting % from sidechains tokens emission (like done in Ergo Treasury contract)
* providing consultancy and helping with rolling out apps on other sigma chains

References:

1. Know Your Assumptions. [GitHub - kushti/kya: Know Your Assumptions](https://github.com/kushti/kya)
2. Two-Way Pegged Sidechains On Ergo (ErgoHack report) [ergohack-sidechain/docs/whitepaper/sidechain.pdf at main · ross-weir/ergohack-sidechain · GitHub](https://github.com/ross-weir/ergohack-sidechain/blob/main/docs/whitepaper/sidechain.pdf)
3. Ergo Sidechains (ErgoSummit video) <https://www.youtube.com/watch?v=G6xggrwA8ys>
