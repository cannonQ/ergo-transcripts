---
title: Pool regulating
description: 'ErgoForum discussion: Pool regulating'
tags:
- addresses
- difficulty-adjustment
- ergoforum
- ergohack
- ergoscript-context
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/pool-regulating/3918
created: '2022-09-23'
last_activity: '2022-11-01'
posts_count: 3
views: 318
likes: 3
glossary_hits:
- Addresses
- Difficulty adjustment
- ERGOHACK
- ErgoScript context
---

# Pool regulating

> **Forum thread:** [https://ergoforum.org/t/pool-regulating/3918](https://ergoforum.org/t/pool-regulating/3918)
> **Category:** Uncategorized | **Created:** 2022-09-23 | **Posts:** 3 | **Views:** 318

**Related concepts:** Addresses, Difficulty adjustment, ERGOHACK, ErgoScript context

---

### Post #1 — @NoVegas (2022-09-23)

New to the forum here, been mining for a while though. I really enjoy mining Ergo as it excites me alot more then most other Crypto projects out there. However, i always took issue with how much hashrate was dominated by the top 5 pools. I think addressing this issue may also help address the current hashrate problem to a certain degree. Ive come up with two idea, the first to address the pool issue, the other to address the difficultly problem. combined together, these ideas may force Pools to self regulate in order to maining their profit, and more importantly Ergo. I dont expect miners who are hopping from different algorithms to learn about every mining algorythm and they will only see they are not getting alot of profit when they try to band wagon Ergo.

1. We place a soft cap on hashrate (by percentage). an example would be if we placed a 13% hashrate cap on all pools. if a pool exceeds 13% hashrate, they will be taxed (taxes go back to community pool). tax would be be mathmatically based on how much they exceed the 13% threshold. maybe a tax of 2.7% per 1% over threshold (this is an example and doesnt have to be this). This way it taxes 100% profits if one pool dominates 50% of hash power (thus highly discouraging a 51% attack)
2. Can we implement some algorithm that looks a pools hash rate for the last 3 epochs, takes the highest and lowest, subtracts them from each and then taxes the pool based on the difference against the current difficulty percentage? The idea here is to tax pools with alot of hashrate volatility. this will force pools to self regulate who they are letting into their pools in order to stabilize their hashrate. this tax shouldnt be as harsh and should be what ever the the percentage is.

Im asking about the viability of these options as i know they are not perfect ideas, but something needs to be done.

---

### Post #2 — @WilfordGrimley (2022-09-23)

There are a few ideas discussed in [this paper](https://eprint.iacr.org/2021/846.pdf) that can not work however it does directly address your question. It was an entrant in the first Ergo Hackathon and has inspired the work of CheeseEnthusiast and the team at [GetBlok.io](http://GetBlok.io) to start building smart pools.

They do not yet function as described in the paper, and are still reliant on centralised stratum servers, but the ground work and modular design will allow schemes that tax pools (that volunteer) and redistribute to pools with smaller hashrate capabilities in the future.

---

### Post #3 — @erg-latam-pool (2022-11-01)

I join this topic, since I am a pool operator, I am supporting the project, and the only thing I see is only 5 huge pools handling the block float. they have to find a solution for this, otherwise it would be impossible to move forward with decentralization
