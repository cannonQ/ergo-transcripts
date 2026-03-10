---
title: 'Call for Action: Building Peer-to-Peer Economies and Free Banking on Ergo'
description: 'ErgoForum discussion: Call for Action: Building Peer-to-Peer Economies
  and Free Banking on Ergo'
tags:
- chaincash
- ergoforum
- native-tokens
- sigma-chains
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/call-for-action-building-peer-to-peer-economies-and-free-banking-on-ergo/5221
created: '2025-08-19'
last_activity: '2025-08-19'
posts_count: 1
views: 207
likes: 4
glossary_hits:
- ChainCash
- Native tokens
- Sigma Chains
- Transaction
---

# Call for Action: Building Peer-to-Peer Economies and Free Banking on Ergo

> **Forum thread:** [https://ergoforum.org/t/call-for-action-building-peer-to-peer-economies-and-free-banking-on-ergo/5221](https://ergoforum.org/t/call-for-action-building-peer-to-peer-economies-and-free-banking-on-ergo/5221)
> **Category:** Uncategorized | **Created:** 2025-08-19 | **Posts:** 1 | **Views:** 207

**Related concepts:** ChainCash, Native tokens, Sigma Chains, Transaction

---

### Post #1 — @kushti (2025-08-19)

Since Satoshi’s and Hal Finney’s early posts and through years of discussions stimulated by Bitcoin experiment and thousands  
other attempts to get better money for reworking economies for the better outcomes, some things are now clear. In particular,  
the “best” and still realistic monetary system to replace fiat would emerge through competition, not design. There will be some obvious building  
blocks though:

* Ergo as a neutral base layer for store-of-value transactions, trustless derivatives and smart reserves.
* Bitcoin as a neutral base digital commodity (would be relevant for some decades to come)
* Private tokens and/or reputation-based systems for niche communities and tight-knit networks
* Tokenized real world assets

Theories aside, in recent months a plan for nice toolset for peer-to-peer networks based economies and free banking has been crystallized:

* merged-mined sidechains, such as Braid, double-merged mined sidechain of both Bitcoin and Ergo, tailored for stablecoins and RWAs issuers and users:

We need for a couple of Rust developers for Ergo merged-mined sidechains, then Bitcoin merged-mined sidechains framework, for starters.

Better Money Labs is proposing first merged-mined sidechain Braid [braid/whitepaper/whitepaper.pdf at master · BetterMoneyLabs/braid · GitHub](https://github.com/BetterMoneyLabs/braid/blob/master/whitepaper/whitepaper.pdf) ,  
intended for trusted stablecoin and RWAs, and looking for possibilities to sponsor merged-mined Ergo sidechains.

* Git Circles, framework for community currencies for developing communities

Call for contributors has been started for Git Circles! Git Circles is a framework for making community currencies for  
developing communities, based on measurable contributions to git repositories. More info can be found at  
[GitHub - GitCircles/GitCircles-Roadmap: Use `Issues` to start a discussion 🤝. Applied decisions will be released as docs at the repo.](https://github.com/GitCircles/GitCircles-Roadmap/) .

GitCircles would allow for hundreds of thousands of open-source developers along with sponsors and enthusiasts.

There is need for 1-2 Rust developers to work on git oracle and other offchain code towards the roadmap.

* P2P networks incentivization

There were a lot of attempts to incentivize activities which were mostly done voluntarily before the blockchain in peer-to-peer networks via tokens, mostly failed  
due to “bad” tokenomics, but it is impossible to make good tokenomics for uncertain future anyway. We think that money for rewarding activities in peer-to-peer networks,  
potentially unbacked where trust or limits for new untrusted peers allow, should be created along with demand. We have efficient offchain cash constructions based on on-chain reserves for that, such as Basis.

The current plan is to implement Basis-based reward mechanism for Celaut, and then spread it to other p2p networks, making Ergo basis for peer-to-peer economies.

Total market cap of DePIN cryptocurrencies is about $23B (according to Messari’s DePIN tracker), and this is just a tip  
of an iceberg when we talk about rewarding activities in digital peer-to-peer networks.

There is need for 1-2 Rust developers to work on offchain part behind Basis, add support for trackers and notes exchange  
(forking current ChainCash Server would work)

* ChainCash based payment network

ChainCash is unique way to create money with elastic supply via trust and blockchain assets in global digital peer-to-peer  
environment, kinda revival of free banking, now with blockchain transparency and automatic contractual enforcement over  
global neutral settlement layer (Ergo). ChainCash whitepaper can be found at  
[chaincash/docs/conf/conf.pdf at master · BetterMoneyLabs/chaincash · GitHub](https://github.com/ChainCashLabs/chaincash/blob/master/docs/conf/conf.pdf) .

Currently we have rough API and database prototype for ChainCash Server, along with contracts corresponding to CCIP-0.  
There is need to design and develop UI. There is need for 1 or 2 Rust developers to improve server and develop UI as well.

# Coordination

So in total there is need for 4 to 8 Rust developers for starters. Developers, tet’s coordinate over Ergo development  
group: [Telegram: View @ErgoDevelopers](https://t.me/ErgoDevelopers) (bridged with Discord: [Ergo Platform](https://discord.gg/ergo-platform-668903786361651200),  
#development channel).

There is need for business development, community building and so on, there are following groups to coordinate on that:

* GitCircles: [Telegram: View @gitcircles](https://t.me/gitcircles)
* ChainCash / Basis (P2P networks incentivization): [Telegram: View @chaincashtalks](https://t.me/chaincashtalks)
* Merged-mined sidechains: just Ergo developers chat [Telegram: View @ErgoDevelopers](https://t.me/ErgoDevelopers)

Better Money Labs is looking for partners to drive real-world use cases and adoption with the groundbreaking technologies  
from above. The current focus is on the Braid sidechain. Would be awesome to see other companies building here!

In addition to that, there is strict need to discuss and solve funding issues, aside of getting tokens generated with GitCircles!
