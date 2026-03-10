---
title: Overview of Ergo PoW called Autolykos
description: 'ErgoForum discussion: Overview of Ergo PoW called Autolykos'
tags:
- autolykos
- box
- context-extension
- difficulty-adjustment
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- mempool
- schnorr-signatures
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/overview-of-ergo-pow-called-autolykos/63
created: '2019-08-12'
last_activity: '2019-08-13'
posts_count: 2
views: 4711
likes: 4
glossary_hits:
- Autolykos
- Box
- Context extension
- Difficulty adjustment
- ErgoScript
- ErgoScript context
- ErgoTree
- Mempool
- Schnorr signatures
- Transaction
---

# Overview of Ergo PoW called Autolykos

> **Forum thread:** [https://ergoforum.org/t/overview-of-ergo-pow-called-autolykos/63](https://ergoforum.org/t/overview-of-ergo-pow-called-autolykos/63)
> **Category:** Uncategorized | **Created:** 2019-08-12 | **Posts:** 2 | **Views:** 4711

**Related concepts:** Autolykos, Box, Context extension, Difficulty adjustment, ErgoScript, ErgoScript context, ErgoTree, Mempool, Schnorr signatures, Transaction

---

### Post #1 — @scalahub (2019-08-12)

Ergo is designed with many improvements over existing blockchain systems, such as a better smart contract language, enriched context for guard scripts, support for light clients and a pool-resistant proof of work (PoW) algorithm. This post contains of the Ergo PoW, named Autolykos.

Ergo is a proof-of-work protocol, which means that similar to Bitcoin, miners must solve a hard problem using brute force in order to get rewards.

# Bitcoin

Before discussing Ergo, let us look at the steps in solving Bitcoin’s PoW.

1. **Merkle Root construction:** A miner arranges a bunch of unconfirmed transactions in a merkle tree and generates a Merkle root **r**.
2. **Header Construction**: Find a nonce **n** such that **d** = **Hash(r||n||h)** has a certain number of leading zeros defined using a difficulty parameter. Here **h** is the hash of the previous block header and **Hash** outputs 256-bit strings.  
   In particular, **d** must be less than or equal to another integer **b**, computed using the “difficulty” as  
   **b = 2^256/difficulty**.

# Ergo

Ergo is similar to Bitcoin but instead of symmetric cryptography, it uses public-key cryptography. Thus, **Hash** is replaced by a signature under some public key pk.

In particular, miner has to find **n** such that **d = Sign(r||n||h||pk||w)** has a certain number of leading zeros. Here **w** is a random value used in the underlying (Schnorr) signature scheme.

The output of **Sign** is a number uniformly distributed in the range **0…j\*2^256**, where **j** is very close to 1. In particular, **j = 1-1/2^224**. Thus, we can assume that **d** is uniformly distributed 256-bit number.

Similar to Bitcoin, we require **d < b**, so the hardness of finding a solution is given by the number **b = 2^256/difficulty**

# How is this “Pool-resistant”?

One of the things we hear about Ergo and Autolykos is it “pool resistant” because it utilized the concepts from “[non-outsourcable puzzles](http://soc1024.ece.illinois.edu/nonoutsourceable_full.pdf)”. But what exactly is pool resistant and how is the above achieving it?

It is important to note that what makes Ergo pool resistant is not actually the Autolykos protocol but instead the expressiveness of Ergo’s underlying scripting language (called ErgoScript) and the extended context in guard scripts.

All coins to be ever emitted in Ergo are locked inside an “emission box”, which is essentially a UTXO with a special script. One of the conditions required in the script is that the reward must be stored in a box that is spendable by the public key **pk** in the mining solution (available as a context variable in ErgoScript). The other condition is that the unemitted reward must be stored in an emission box with the same script as the current emission box.

Thus, if any miner wants to obtain rewards, he must store the rewards in a box protected by **pk**. A miner is free to mine blocks without reward in a non-pool resistant manner.

Note that while Ergo’s rich context allows us to create pool resistance, it also allows us to sort of break it (as described in [this post](https://www.ergoforum.org/t/creating-an-ergo-mining-pool/42/7?u=scalahub))

This is based on my understanding of Autolykos and Ergo from the online documents, so there could be some mistakes. If so [@kushti](/u/kushti) or someone else please correct me.

---

### Post #2 — @kushti (2019-08-13)

Seems about right, I will check details against a paper draft. On sort of breaking the pool-resistance, the proposed solution for a “pool” is kind of collective contract (w. trusted manager) and probably suitable all the pool-resistant schemes if enough information is available in a context of a guarding script.
