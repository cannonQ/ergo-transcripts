---
title: 'Ergo’s Emission Schedule: Latest Block Reduction'
date: '2024-02-28'
author: Ergo Platform
tags:
- eip
- emission-schedule
- ergo-blog
- ergoscript-context
- events
- native-tokens
- transaction
category: blog
blog_tag: Events, Core, Mining
type: news
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Ergo’s-Emission-Schedule-Latest-Block-Reduction
glossary_hits:
- EIP
- Emission schedule
- ErgoScript context
- Native tokens
- Transaction
---

# Ergo’s Emission Schedule: Latest Block Reduction

> **Published:** 2024-02-28 | **Author:** Ergo Platform | **Tag:** Events, Core, Mining | **Type:** news

*Ergo’s token supply is capped at 97,739,935 ERG. This is fixed and can never be altered.*

**Related concepts:** EIP, Emission schedule, ErgoScript context, Native tokens, Transaction

---

As a Proof of Work (PoW) blockchain, the Ergo Platform requires miners to maintain and secure the network. In exchange for providing this vital service, miners are rewarded with $ERG tokens each time a block is created.

When the blockchain first launched, Ergo’s emission schedule was set to be completed within eight (8) years. This meant that all block rewards (except for network transaction fees) would have ended in 2027. The first two years after mainnet launch, the mining protocol released 75 ERG/block, after which the emission rate was scheduled to drop by 3 ERG/block every three months. 

In 2022, Ergo’s core developers, miners, and ecosystem community began to discuss the emission schedule and its fast-approaching conclusion. Out of a concern for the long-term economic sustainability of the blockchain, it was agreed that a new direction needed to be explored so that the network had ample time to develop self-sustaining levels. EIP-27 was the result of numerous debates and forums, and after the miners voted to approve the proposal, the new emission schedule was implemented and activated on mainnet in June 2022 (block #777217).

## New Emission Schedule

>[“If block rewards is not less than 15 ERG, send 12 ERG from it to the remission contract[…] Otherwise, block reward R is less than 15 ERG, send R-3 ERG from it to the remission contract.”](https://www.ergoforum.org/t/eip-27-mainnet-activation-voting-and-final-details/3585)
- Alex Chepurnoy, Ergo Forum

As per [EIP-27](https://docs.ergoplatform.com/mining/standards/eip27/), the new emission schedule will see the network release block rewards until 2045. In essence, the schedule uses a set of rules to decide how ERG are to be allocated to or from the remission contract in order to extend ERG emissions. Using the original schedule, if a block was scheduled to have 15 or more ERG released, then 12 ERG from that block will be sent to the remission contract for future block rewards. Once block rewards are less than 15 ERG/block, 3 ERG/block will be sent to the remission contract.

Since block rewards are reduced by 3 ERG/block approximately every three months (this rule was maintained from the original emission schedule), there is a simpler way of looking at the new emission schedule. EIP-27 was activated in June 2022, and the new block size was set at 51 ERG/block (based on the new EIP-27 rules). From that point onwards, the emission schedule reduces the ERG/block by 3 ERG every three months until the block size is 3 ERG. Once the emission schedule reaches 3 ERG/block, mining emissions will hold steady at 3 ERG/block until Ergo’s supply has been fully mined. 

## Latest Emission Reduction

Recently, the mining protocol reached the latest emission reduction. This occurred on Jan. 8 2024 with block 1173599. As a result, new block emissions have been reduced from 33 ERG/block to 30 ERG/block. The next reduction in block emissions is scheduled for early April 2024 and will yield block rewards of 27 ERG/block.
