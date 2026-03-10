---
title: On Contractual Money
description: 'ErgoForum discussion: On Contractual Money'
tags:
- addresses
- amm
- box
- chaincash
- ergoforum
- ergomixer
- ergoscript-context
- ergotree
- sigmausd
- transaction
- uncategorized
- zerojoin
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/on-contractual-money/4848
created: '2024-09-02'
last_activity: '2024-09-02'
posts_count: 1
views: 246
likes: 3
glossary_hits:
- AMM
- Addresses
- Box
- ChainCash
- ErgoMixer
- ErgoScript context
- ErgoTree
- SigmaUSD
- Transaction
- ZeroJoin
---

# On Contractual Money

> **Forum thread:** [https://ergoforum.org/t/on-contractual-money/4848](https://ergoforum.org/t/on-contractual-money/4848)
> **Category:** Uncategorized | **Created:** 2024-09-02 | **Posts:** 1 | **Views:** 246

**Related concepts:** AMM, Addresses, Box, ChainCash, ErgoMixer, ErgoScript context, ErgoTree, SigmaUSD, Transaction, ZeroJoin

---

### Post #1 — @kushti (2024-09-02)

The original [Ergo whitepaper](https://ergoplatform.org/docs/whitepaper.pdf) was titled “The Resilient Platform For Contractual Money”, however, the term “Contractual Money” was only briefly described in Section 7 of it. Then the general idea on high level was described in “On Contractual Money” [paper](https://www.researchgate.net/profile/Amitabh-Saxena-2/publication/336135293_On_Contractual_Money/links/5d91e101a6fdcc2554a6ed83/On-Contractual-Money.pdf)(presented @ RAMICS 2019 conference). In short, the paper says, that while for money there are some definitional properties, such as unit-of-account , store of value, medium of exchange, in digital programmable deterministic environment thus properties can be precisely defined via a contract given as a program executable against environment, and properties can be changed with time or based on other conditions, and so only contract defines money. These days what we had in mind could be called “CBDCs for the people” , however, there was no CBDC term back then, and CBDCs are more loosely defined even now to the best of my knowledge. The paper provides local exchange trading system (LETS) contract on Ergo blockchain.

In this post, I am going to fill the gap between current understanding of Ergo blockchain , DeFi, P2PFi, etc , and high-level idea of contractual money from the paper from 2019 a little bit.

The state of Ergo blockchain (economy) at given moment is defined via unspent boxes (aka transaction outputs / UTXOs / digital notes). Every box has some value, guarding script, and possibly some data. When you are using a wallet and see a balance associated with some address, under the hood, you have one or more unspent boxes with guarding script corresponding to you key just. So you can spend those boxes freely at any time.

However, there could be boxes with contracts different from just public keys (i.e. requests to sign with a secret key corresponding to public key provided). Some contracts (for SigUSD bank, or a liquidity pool) are acting like contracts in account-based cryptocurrencies, such as Ethereum, i.e. there is a contract living in one box ( and every user of it is working with a single box, or one box per liquidity pool etc). In this case there is no mass-parallelization advantage of UTXO systems here, as the single contract is a bottleneck.

However, there is another option, which is corresponding to what we call P2PFi. Let’s use ErgoMixer ([ZeroJoin protocol](https://eprint.iacr.org/2020/560.pdf)) as a first example. Here, the mixer is creating half-mix boxes, which can also be re-mixed into full-mix boxes or withdrawn. From full-mix box it is possible to withdraw, possibly, to half-mix address. Sometimes there are thousands of boxes associated with ErgoMixer contracts, and there is no any central contract here. Which is what called p2pFi, but also boxes during mixing can be seen as subcurrency on Ergo.

Subcurrencies, however, are much more visible when monetary systems are implemented on Ergo. Take [ChainCash](https://github.com/ChainCashLabs/chaincash), for example. Every note here can be spent with new notes moving value from the note on, or redeemed against a reserve. Thus every note , and the whole ChainCash system is UTXO based subcurrency projected on Ergo UTXO system. And again, there is no central contract here, so every participant (associated with his boxes) is self-sovereign. The same is true for LETS implementation from “On Contractual Money” paper.

Thus under the same Ergo blockchain umbrella we can have multiple financial (UTXO based) subcurrencies, with self-sovereignity of every participants and peer-to-peer financial interactions, enjoying mass parallelism of UTXO operations also.
