---
title: Scalability and smooth mining rewards for Ergo with Prism
description: 'ErgoForum discussion: Scalability and smooth mining rewards for Ergo
  with Prism'
tags:
- difficulty-adjustment
- eip
- emission-schedule
- ergoforum
- layer-scaling
- nipopow
- spv
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/scalability-and-smooth-mining-rewards-for-ergo-with-prism/3954
created: '2022-09-27'
last_activity: '2023-01-03'
posts_count: 12
views: 780
likes: 16
glossary_hits:
- Difficulty adjustment
- EIP
- Emission schedule
- Layer scaling
- NiPoPoW
- SPV
- Transaction
---

# Scalability and smooth mining rewards for Ergo with Prism

> **Forum thread:** [https://ergoforum.org/t/scalability-and-smooth-mining-rewards-for-ergo-with-prism/3954](https://ergoforum.org/t/scalability-and-smooth-mining-rewards-for-ergo-with-prism/3954)
> **Category:** Uncategorized | **Created:** 2022-09-27 | **Posts:** 12 | **Views:** 780

**Related concepts:** Difficulty adjustment, EIP, Emission schedule, Layer scaling, NiPoPoW, SPV, Transaction

---

### Post #1 — @Hans (2022-09-27)

Layer 1 Proof-of-Work (PoW) has made big advances in blockchain research, but not in implementations, mostly due to Bitcoin’s reluctance to upgrade its protocol. Ergo is in a prime position to leverage state-of-the-art PoW research and fully cement its place as the ultimate PoW blockchain. In this forum post I introduce Prism and why it’s a good fit for Ergo as a long term Layer 1 goal.

Researchers at Stanford have developed the first PoW consensus protocol scaling up to network throughput with fast finality. The core logic stays very similar to Ergo’s PoW we know and love, and doesn’t sacrifice decentralization to achieve better performance.

# Core idea

Instead of having a single chain handle adding transactions and voting for the main chain, Prism separates these functions into separate types of blocks:

* Transaction blocks, contain the transactions and can be referenced by their short header.
* Proposer blocks, links to transaction blocks and is the equivalent of regular PoW’s main chain
* Voter blocks, vote on the canonical proposer blocks to achieve consensus.

The main chain of proposer blocks is decided by the vote of multiple voter chains, each run by longest-chain consensus. Votes by voter blocks become confirmed as their depth in their respective chain increases, same as a regular PoW chain. With all the voter chains combined, Confirmation on the proposer chain is achieved much faster than by waiting for a single chain to achieve confirmation.

Miners can randomly mint either of these blocks and broadcast them. The frequency of proposer blocks would be the same as Ergo’s current block frequency, while transaction and voter blocks could be more frequent depending on the current needs of the chain.

I recommend understanding more details with this well explained presentation by one of the authors Dr. Giulia Fanti: <https://www.youtube.com/watch?v=2IhcNNi183o>

Full paper: <https://dl.acm.org/doi/pdf/10.1145/3319535.3363213>

# Bonus smooth mining rewards benefit

In the basic PoW protocol, miners are able to mint a block when they find a hash value under the difficulty threshold d, let’s say in the range [0, d]. Other types of blocks can be minted in other ranges, [d, 2d] or [2d, 3d] etc.. This means it is easier to mint “something”, although probably with lower rewards per block to keep the emission schedule on track. The added benefit is the better viability of solo mining, as less hash power is needed to mint “something” from time to time.

# Step by Step roadmap

Prism doesn’t have to be implemented all at once thanks to its structure. Just adding transaction blocks and having the main chain link to transaction blocks instead of including the transactions itself would already greatly increase scalability and offer miners more chances at rewards.

The voter chains system is more complex and actually just brings fast confirmation, which might not be necessary for Ergo depending on Layer 2s’ progress

---

### Post #2 — @TypoDaPsycho (2022-10-01)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/hans/48/1424_2.png) Hans:

> Prism doesn’t have to be implemented all at once thanks to its structure. Just adding transaction blocks and having the main chain link to transaction blocks instead of including the transactions itself would already greatly increase scalability and offer miners more chances at rewards.

Interesting concept. I don’t understand how transaction blocks would offer miners more chances at rewards though. Are you saying that “transaction blocks” would offer miners more rewards, or offer the same rewards just at a more steady rate? These rewards are the network transaction fees that are already charged to users in current system?

---

### Post #3 — @Hans (2022-10-02)

Same rewards at a more steady rate. Say now it’s 48 ERG per block but solo mining you get that once in a blue moon. With Prism you have a lot higher chances of minting either a transaction block or proposer block, that give like 8 ERG each (example number). The parameters should be set to match the current ERG emission rate basically

---

### Post #4 — @Francos (2022-10-03)

If it hit big farms solo mining than i agree.

How can i vote for this??

---

### Post #5 — @Hans (2022-10-04)

The main benefit is scalability up to network throughput lol, but yes it would make solo mining rewards a lot smoother, incentivizing more people with good rigs to solo mine.

---

### Post #6 — @Francos (2022-10-04)

i don’t like solo mine, then i’ll vote no for this

---

### Post #7 — @Hans (2022-10-05)

it doesn’t force anyone to solo mine, it just makes it a bit more viable for people who want to. It’s also not the main benefit, this is a scalability solution

---

### Post #8 — @Francos (2022-10-05)

This new eip is stabilizing everything very good, we don’t need anything to incentivize solo mine imho.

---

### Post #9 — @Hans (2022-10-06)

The main point of this upgrade is reaching scalability up to the network bandwidth of the network. Smoother mining rewards is a bonus side effect.

I agree it is definitely not necessary in the short term, it’s a long term vision for Ergo to be the best possible PoW Layer-1 protocol

---

### Post #10 — @kushti (2023-01-02)

Prism is a very interesting proposal, aiming to achieve faster confirmations and better bandwidth utilization.

However, it is not clear how to adopt it to existing block structure, how to upgrade protocol not breaking everything in the mining part of the ecosystem (and maybe more), also, how to prune Prism parallel chains structure, do SPV clients, rework NiPoPoWs etc.

Prism paper is nicely classifying PoW improvements into following groups:

* alternative forking rules: Ghost, Conflux, Inclusive, Phantom, Spectre
* decoupling transactions from consensus: Bitcoin-NG, Flux, subchains, weak-blocks
* hybrid consensus: ByzCoin, TwinsCoin, Thunderella etc

I think, the most realistic, secure and fruitful option is decoupling transactions from consensus (just). We need to compare those approaches by efficiency with compact blocks and other block propagation improvements (such as <https://arxiv.org/pdf/2101.00378> )

---

### Post #11 — @HelixEvo (2023-01-03)

Is this new way of PoW running in any newish PoW chains right now or something comparable, or is this fully just theoretical ideas?

---

### Post #12 — @Hans (2023-01-03)

There is a rust implementation on github by the researchers to reproduce their test results ( [GitHub - yangl1996/prism-rust: Rust implementation of the Prism consensus protocol](https://github.com/yangl1996/prism-rust)) but no product/cryptocurrency as far as I know.
