---
title: Token emission to loyal miner
description: 'ErgoForum discussion: Token emission to loyal miner'
tags:
- box
- collateral
- difficulty-adjustment
- emission-schedule
- ergoforum
- fleet-sdk
- getblok-plasma
- native-tokens
- token-id-rule
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/token-emission-to-loyal-miner/3909
created: '2022-09-22'
last_activity: '2022-09-27'
posts_count: 9
views: 953
likes: 37
glossary_hits:
- Box
- Collateral
- Difficulty adjustment
- Emission schedule
- Fleet SDK
- GetBlok Plasma
- Native tokens
- Token ID rule
---

# Token emission to loyal miner

> **Forum thread:** [https://ergoforum.org/t/token-emission-to-loyal-miner/3909](https://ergoforum.org/t/token-emission-to-loyal-miner/3909)
> **Category:** Uncategorized | **Created:** 2022-09-22 | **Posts:** 9 | **Views:** 953

**Related concepts:** Box, Collateral, Difficulty adjustment, Emission schedule, Fleet SDK, GetBlok Plasma, Native tokens, Token ID rule

---

### Post #1 — @mhs_sam (2022-09-22)

Aside from the current discussion on Difficulty adjustment, there are some general benefits in rewarding the loyal miners. A quick definition of a loyal miner would be a miner that mines in the long run regardless of the price, difficulty, direct profitability, etc to secure the network. There is a need for more technical definition here though.

The emission of Erg itself is empowered by smart contracts, unlike any other known chain. A direct implication of this would be the ability to emit any other token using smart contracts.

The idea simply is to have an emission contract for arbitrary tokens that emission is dedicated to loyal miners. For example, if we define loyalty to be mining in 10 consecutive epochs, this contract emits the tokens to a miner that mines at least one block in every 10 consecutive epochs and none otherwise.

I can think of different ways to implement such an emission contract. let me think loud here:  
1- This contract can be implemented at pool level, like what getblok is doing with smart pools. The idea of proof of vote could be helpful here. In each epoch, a miner receives some vote tokens and these tokens are different in each epoch. Having 10 different but consecutive voting tokens (at least one of each), a miner can claim its share from the emission contract.

2- This contract can be implemented natively so doesn’t matter if you mine solo or in any pool. When a miner mines a block, he includes a claim for the tokens and additional claims for previously claimed tokens. When the claims reach a threshold (here 10) the tokens are emitted. “claim” is a rough word here and can be defined/implemented in several ways.

3- at the same level, tokens are actually emitted by the miner at each block to a specific unspendable box. This box will be spendable to the miner if being deposited into in 10 consecutive epochs, or spendable by anyone to the bank (back to emission contract repository) if not satisfied.

4- probably several other approaches.

Having this general emission contract, some projects can put some token shares into, and distribute their tokens only to loyal miners. win-win-win for Ergo, projects, and loyal miners.

let’s discuss the idea, definitions, and its implications now, later we can design the specific contracts.

---

### Post #2 — @CheeseEnthusiast (2022-09-22)

Can be made even simpler at the pool level. Since current plasma-based pools can hold any arbitrary data including balance, we can simply track number of blocks that a miner has consecutively mined for, and update the number everytime a balance is added. Once the threshold is hit, the second emission contract can take AVL proofs to emit tokens to loyal miners.

This would mean loyal miners could get an additional incentive outside of normal subpool emissions.

---

### Post #3 — @lgd (2022-09-22)

This would be cool for FIMO projects as well. They could setup different subpools with different reward amount based on time spent mining.

---

### Post #4 — @WilfordGrimley (2022-09-23)

We needn’t even have a secondary token if implemented at the pool level: A percentage of the pool fee can be redistributed to loyal miners similarly to a PPLNS model, but over a longer period of time.

The redistribution could even be tied in some way to the difficulty adjustment, specifically rewarding loyal miners when the difficulty increases for a sustained period of time. See discussion [here](https://www.ergoforum.org/t/diff-adjustment-potential-design-tradeoffs/3875/11).

If a pool implementation is combined with a native implementation, loyal miners can be rewarded with very smooth rewards

I really like your second and third solutions as they would enable more decentralized collateralized mining pools to be formed:  
Solo miners could still participate and smooth out their rewards if we can create the right economic incentives and inverse disincentives for cheating (i.e. loans for joining collaterlized pools as a solo miner.)

---

### Post #5 — @Armeanio (2022-09-26)

Very interesting idea.

---

### Post #6 — @mhs_sam (2022-09-26)

That’s cool and I think more viable.  
Actually, it is pretty easy to implement at the network level but the concern is pooled mining.  
Pools will be present in each epoch, but the pooled miners will switch.  
So, it needs a pool accounting solution for pools to reward based on miners’ royalty.  
Do pools care? I guess not. At least if all the pools care except one pool, hopping miners can mine in that pool and still benefit from switching.  
So, it seems the pool level is the viable option here and your idea about it is very clean and exciting.

---

### Post #7 — @USCMigs (2022-09-27)

Maybe I’m misunderstanding on the part about tracking the number of blocks a miner mines, but couldn’t a person mine during low periods, set all their GPUs bar a lone card to another coin for profit hunting and still be eligible… Not sure if the plasma data that would be used would hold additional information, but just thinking about how this could be gamed, because people will try.

---

### Post #8 — @USCMigs (2022-09-27)

Another point I think is fair to mention is that the concept of “loyal” miners and rewarding them is bizarre in the game theory and incentivization context. What would be the context to incentivize beyond the normal reward scheme, purely from an objective standpoint? Is it to buy loyalty? Is it to reward altruism? I pose the question just based on why would a second reward scheme be feasible. Take a look at few edge cases if a “loyal miner” reward scheme was enacted:

1. Loyalty is unaffected - Miners will mine until they reach the min threshold for additional reward and will hop off to another coin if profitability dictates it
2. Loyalty is gamed - Miner leaves a sole GPU on Ergo to attain loyalty status and rest of the GPU fleet is profit chasing
3. Loyalty is bought - Incentives are so good no on leaves, which then begs the question, why not just alter the emission schedule to be more attractive and offer a higher yield, since that is the only thing that can be controlled by the protocol, with price being market-driven.

I guess the main point I’m getting at is why have different rewards systems if the end goal is to get more hashrate to secure the network. It just looks to be anti-KISS rule by making additional clauses, contracts, and other things that might be necessary when the end goal is to attract more hashrate. I think the narrative that miners control the network is a little bit of a stretch and the role of a miner in a PoW network is to secure and validate a network and to receive compensation/incentive for doing so.

---

### Post #9 — @CheeseEnthusiast (2022-09-27)

[@USCMigs](/u/uscmigs)  
In the case of things being gamed, just pay miners the bonus the same way they are paid their normal rewards, using their hashrate / shares as their proportion of the reward.

Doesn’t necessarily have to be some large game theory involved in this in regards to the network itself (outside of making sure things are not easily gamed by rational actors). If the goal is to incentivize loyal miners using funds provided by a community, then the proposals above provide a solution to that. The best part being that none of these require forks or anything, they use the inherent programmability of Ergo to do the job.

I agree, It’s best not to use this as a network/protocol wide rule or anything, though I don’t think that was ever suggested in the first place. I see it more as charity/goodwill from projects who wish to support loyal miners.
