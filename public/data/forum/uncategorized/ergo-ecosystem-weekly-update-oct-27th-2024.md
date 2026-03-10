---
title: Ergo Ecosystem Weekly Update - Oct 27th, 2024
description: 'ErgoForum discussion: Ergo Ecosystem Weekly Update - Oct 27th, 2024'
tags:
- addresses
- amm
- cyberverse
- eip
- ergo-explorer
- ergoforum
- ergohack
- full-node
- mew-finance
- nautilus
- rosen-bridge
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-ecosystem-weekly-update-oct-27th-2024/4993
created: '2024-10-28'
last_activity: '2024-10-28'
posts_count: 1
views: 64
likes: 1
glossary_hits:
- AMM
- Addresses
- Cyberverse
- EIP
- ERGOHACK
- Ergo Explorer
- Full node
- Mew Finance
- Nautilus
- Rosen Bridge
- Spectrum
- Transaction
---

# Ergo Ecosystem Weekly Update - Oct 27th, 2024

> **Forum thread:** [https://ergoforum.org/t/ergo-ecosystem-weekly-update-oct-27th-2024/4993](https://ergoforum.org/t/ergo-ecosystem-weekly-update-oct-27th-2024/4993)
> **Category:** Uncategorized | **Created:** 2024-10-28 | **Posts:** 1 | **Views:** 64

**Related concepts:** AMM, Addresses, Cyberverse, EIP, ERGOHACK, Ergo Explorer, Full node, Mew Finance, Nautilus, Rosen Bridge, Spectrum, Transaction

---

### Post #1 — @kushti (2024-10-28)

* Rosen is now processing transactions to and from Ethereum, there is still small but growing rsERG/ETH liquidity pool on uniswap [DEXTools.io](https://www.dextools.io/app/en/ether/pair-explorer/0x85bb44d0a6f2a5844975ef19149d9c4b0bb77b7d?t=1730104926034) , so another way to get onboarded, and also small but growing rsETH/ERG pool on ErgoDex / MewFinance. So consider to profit from liquidity provision and arbitrage!
* RoseNet - the new implementation of Rosen guards’ p2p communication layer is in its final stages of testing. In simple words, it solves the problems of current p2p layer: it aims to 1. be more fault tolerant, improving bridging pace a bit and preventing stuck events, and 2. capable of being scaled to a larger guard set, securing the protocol even more. As part of these final test phases, we need a global decentralized network of RoseNet nodes that communicate with each other. It’s not simple to achieve this level of decentralization without spending a lot of resources; so, to get as close as possible to this scenario, we are asking the community members to participate in this test from anywhere around the world. The more participations, the more decentralized the network will be, and results will be far more real. To participate, you need a computer with a preferably stable internet connection, capable of sending and receiving a considerable amount of messages (probably tens of GBs of data during the test duration). It also need to have a modern hardware config - a system with at least 8GB of RAM and 8 cores of CPU is preferred in order to handle the huge amound of data. The instructions to run a node will be provided later (a non-permanent link of the draft version of instructions is available in RoseNet GitHub repo ([rosenet/tests/global at feat/global-test · rosen-bridge/rosenet · GitHub](https://github.com/rosen-bridge/rosenet/tree/feat/global-test/tests/global)), but in short, it will be far easier than setting up a Watcher, which is already simple :).) The test will take around a day, and we appreciate if you don’t bring your node down meanwhile (otherwise some wrong data may be collected as part of test results, which is to be avoided).
* ErgoHack IX is going on, watch videos being released on the way! <https://www.youtube.com/@ErgoPlatform/videos>
* MewFinance is now supporting rsSNEK as payment asset, has added several Cardano natives to ergo and built Intial LP’s, and implemented verified collections following the latest eip standards <https://mewfinance.com/>
* Pgr456 Started working on Ergo integration into Keystone hardware wallet. Got the address generation working (see attached video) and now I am working on wallet connection and transaction signing. Currently waiting on some additional info from the Keystone team.
* Cyberverse done Rocket Rush Fix update with a lot of fixes and improvements
* Nautilus v0.15.0-beta.0 with 0-conf enabled is finally reviewed and released on the Abyss channel, please test and let me know about any issue/thoughts.
* ZenGate pre-announced Lithium-pegged stablecoin [x.com](https://x.com/danieltetsuyama/status/1850247429179969926)
