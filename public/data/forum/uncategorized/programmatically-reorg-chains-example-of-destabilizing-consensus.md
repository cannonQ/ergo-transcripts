---
title: Programmatically reorg chains example of destabilizing consensus
description: 'ErgoForum discussion: Programmatically reorg chains example of destabilizing
  consensus'
tags:
- box
- ergoforum
- eutxo
- layer-scaling
- mempool
- mev
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/programmatically-reorg-chains-example-of-destabilizing-consensus/3299
created: '2022-01-24'
last_activity: '2022-03-22'
posts_count: 3
views: 436
likes: 8
glossary_hits:
- Box
- Layer scaling
- MEV
- Mempool
- Spectrum
- Transaction
- eUTXO
---

# Programmatically reorg chains example of destabilizing consensus

> **Forum thread:** [https://ergoforum.org/t/programmatically-reorg-chains-example-of-destabilizing-consensus/3299](https://ergoforum.org/t/programmatically-reorg-chains-example-of-destabilizing-consensus/3299)
> **Category:** Uncategorized | **Created:** 2022-01-24 | **Posts:** 3 | **Views:** 436

**Related concepts:** Box, Layer scaling, MEV, Mempool, Spectrum, Transaction, eUTXO

---

### Post #1 — @Ergosmergo (2022-01-24)

Recently I read a medium article by Saneel and Dragonfly Research they explain how miners could use Flashbots to incentivize censorship. ![:open_mouth:](https://emoji.discourse-cdn.com/twitter/open_mouth.png?v=12 ":open_mouth:") I won’t go too far into their research as here is the link to read it yourself [Dr. Reorg or: How I Learned to Stop Worrying and Love MEV | by Saneel Sreeni | Dragonfly Research | Medium](https://medium.com/dragonfly-research/dr-reorg-or-how-i-learned-to-stop-worrying-and-love-mev-2ee72b428d1d). But essentially what they are saying is that due to Ethereum Mev developers have started to create programs and apps that can programmatically reorg chains by targeting blocks that has some empty transactions. This example of destabilizing consensus would it ever be possible for someone to create a program to retarget any reorg in ERGO by altering some mempool or something like or are we solid on that approach due to the UTXO model? What I’m basically trying to get at is Miner Extractable Value is a bigger problem that is often overlooked with consensus and remaining as trust-less as possible?

---

### Post #2 — @TypoDaPsycho (2022-02-28)

From what I understand (someone more knowledgeable may have a better answer), UTXO and Ergo’s 2 min block times make this a non-issue. At least on a layer 1 consensus level.

I know Ergo dapps can choose to use off-chain bots (ErgoDex for example), so similar issues may be more likely w/ dapps. But since dapps don’t play a part in consensus, there’d be zero possibility of chain-reorg attacks in those cases.

Account model fee system is absurd IMO and honestly I can’t wrap my head around some of the finer details, but I personally wouldn’t be at all worried.

EUTxO for the win!

---

### Post #3 — @kushti (2022-03-22)

The issue is known from times before MEV, there were some papers like 5 years ago on possible consensus instability for Bitcoin (in presence of transactions paying big fees in comparison with emission , see <https://dl.acm.org/doi/pdf/10.1145/2976749.2978408> or <http://www.cs.umd.edu/~jkatz/papers/whale-txs.pdf>). With MEV the problem could become bigger for sure.

I guess there could be some solutions to the problem, but it is early to consider them now probably as emission is high ATM.
