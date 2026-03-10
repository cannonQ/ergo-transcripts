---
title: Long-term vision for Ergo
description: 'ErgoForum discussion: Long-term vision for Ergo'
tags:
- bootstrapping
- box
- eip
- emission-schedule
- ergo-foundation
- ergoforum
- full-node
- minimum-transaction-fee
- native-tokens
- nipopow
- sigma-chains
- soft-fork
- storage-rent
- sub-blocks
- transaction
- uncategorized
- utxo-set-snapshot
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/long-term-vision-for-ergo/2629
created: '2021-09-26'
last_activity: '2021-10-14'
posts_count: 7
views: 5995
likes: 42
glossary_hits:
- Bootstrapping
- Box
- EIP
- Emission schedule
- Ergo Foundation
- Full node
- Minimum transaction fee
- Native tokens
- NiPoPoW
- Sigma Chains
- Soft fork
- Storage rent
- Sub-blocks
- Transaction
- UTXO Set Snapshot
---

# Long-term vision for Ergo

> **Forum thread:** [https://ergoforum.org/t/long-term-vision-for-ergo/2629](https://ergoforum.org/t/long-term-vision-for-ergo/2629)
> **Category:** Uncategorized | **Created:** 2021-09-26 | **Posts:** 7 | **Views:** 5995

**Related concepts:** Bootstrapping, Box, EIP, Emission schedule, Ergo Foundation, Full node, Minimum transaction fee, Native tokens, NiPoPoW, Sigma Chains, Soft fork, Storage rent, Sub-blocks, Transaction, UTXO Set Snapshot

---

### Post #1 — @kushti (2021-09-26)

First of all, this post is about my personal thoughts only and does not represent position of Ergo Foundation.

I think this is a very good moment to discuss long-term vision and development plans. Black swans appear frequently these days, fear of financial markets turmoil is in the air, a lot of uncertainty around cryptocurrency-related regulations, biggest ever hacks in the DeFi space, loss of first principles by critical part of the broad cryptocurrency-related community, ATH Ergo price - the background can be used for paving a way for long-term success of Ergo.

In the first place, we want to make Ergo ecosystem what it should be, namely:

* digital-gold native token - thus Proof-of-Work and limited total emission must be preserved
* community-oriented - selloffs to Big Tech and governments should be avoided, decision-making should be more transparent and open with time
* avoiding breaking changes and hard-forks
* research-driven
* prioritizing decentralization and uncensorability over fancy TPS numbers and other metrics
* intended for powering regular people with new economic tools

For that, as a core developer I see several aspects to take care off:

* protocol development - hard-forks and breaking changes should be avoided. 5.0 soft-fork is on the way and will be proposed to miners in coming months. Main change there is about just-in-time (JIT) costing for contracts instead of ahead-of-time(AOT) costing which is used now. Then next soft-fork will be about adding new operations to contracts.
* cryptoeconomic security of the protocol - as emission is limited to just 8 years, it is good time now to estimate how stable will be miners incentivization after. We can soften effects of no-emission by standardizing a new emission contract paying after 8th year of mainnet existence according to some schedule (flat 1-3 ERG payment in a simplest case), and the contract will be funded from transaction fees (thus a part of transaction fee is going to miner immediately, another part is going into the re-emission contract), or storage rent (with a similar split), or even current emission (via a soft-fork limiting miner withdraw).
* reference protocol client (node) development - most important developments needed already started, such as new sync protocol (will be landed in 4.0.15), bootstrapping with UTXO set snapshot and bootstrapping with NiPoPoW proofs. After that a lot of incremental improvements in regards with efficiency, stability and security will be needed, that is normal endless process though
* crosschain, sidechain and offchain solutions - complete Ergo.meta, find most efficient offchain solutions for most popular applications, translate lightning network implementation made for Bitcoin (when lightning network will be more popular). Partner on atomic and private swaps with other UTXO cryptocurrencies. Make first experimental sidechains in 2022.
* light clients developments - building blocks are in place, we need to describe workflows in EIPs and support implementations, also, test them for real in places with limited or filtered internet
* improve documentation for existing libraries, make more tutorials on contracts development
* make Ergo Foundation activities and spendings more transparent
* do research around community-empowering tools, work more with communities, especially in need, and charities
* make hackathons and summits regular

---

### Post #2 — @Armeanio (2021-09-26)

The loss of first principles by the broader crypto community is sad to see.

I do think Ergo should always work to be a research-driven project.

I believe the most helpful areas are research grants, development grants, and educational initiatives.

We can start to lay out a longer-term series of goals and principles to prioritize how the Ergo Foundation can help push development towards this end.

---

### Post #3 — @bigoogawoogla (2021-09-26)

> standardizing a new emission contract paying after 8th year of mainnet existence according to some schedule

Seems like a perfect use of storage rent. Just send a portion of current emissions to empty wallets. Effectively “burning” ERG for later use.

I like the idea of a community grant for anyone demonstrating real-world use case with feedback for improvement. I.E. if someone implements LETS in their community, and gives proper documentation of the real world experiment.

---

### Post #4 — @thegeologist (2021-09-27)

I like this vision. First principles! We need an unstoppable, uncompromising alternative to centralized finance, and Ergo can fill that roll. Ground up

---

### Post #5 — @Ccgarant (2021-09-27)

here here on first principles!

---

### Post #6 — @vegycslol (2021-10-01)

Is there a plan to somehow speed up (probabilistic) finality on L1? I feel like people are getting used to a few sec finality because there are so many pos projects and sadly they don’t care about lower security, so few minutes finality is a thing that might turn off regular users, that’s why I’m wondering if you plan to tackle this and how fast good enough finality can we realistically achieve with solutions that exist today. Thanks for writing this, i agree with this vision

---

### Post #7 — @kushti (2021-10-14)

Possible with sub-block confirmation protocols
