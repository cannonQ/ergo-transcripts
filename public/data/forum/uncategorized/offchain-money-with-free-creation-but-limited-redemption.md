---
title: Offchain money with free creation but limited redemption
description: 'ErgoForum discussion: Offchain money with free creation but limited
  redemption'
tags:
- box
- ergoforum
- ergotree
- layer-scaling
- rosen-bridge
- sigmausd
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/offchain-money-with-free-creation-but-limited-redemption/5122
created: '2025-03-31'
last_activity: '2025-03-31'
posts_count: 1
views: 146
likes: 5
glossary_hits:
- Box
- ErgoTree
- Layer scaling
- Rosen Bridge
- SigmaUSD
- Spectrum
- Transaction
---

# Offchain money with free creation but limited redemption

> **Forum thread:** [https://ergoforum.org/t/offchain-money-with-free-creation-but-limited-redemption/5122](https://ergoforum.org/t/offchain-money-with-free-creation-but-limited-redemption/5122)
> **Category:** Uncategorized | **Created:** 2025-03-31 | **Posts:** 1 | **Views:** 146

**Related concepts:** Box, ErgoTree, Layer scaling, Rosen Bridge, SigmaUSD, Spectrum, Transaction

---

### Post #1 — @kushti (2025-03-31)

Motivation #1: imagine you’re visiting some modern censorship-resistant media, and it offers to do appreciation in form of sats using Bitcoin’s Lightning, but you dont’ have an open Lightning channel.

Motivation #2: imagine that a community wants to create IOUs freely and exchange with very low fees and only sometimes fix disbalances on-chain, to trade with other communities

Motivation #3: as such community there could be a digital social network with internal currency, and onchain deposits would be needed only when certain level of debt is reached, and withdraws may happen only when certain profit is reached, additionally, social network administration may also approve withdrawals (after checking that no fraud happened)

To solve the issues, the following design is proposed:

* there are some trusted validators, in most centralized option just one, normally, federation, could be double federation like in Rosen, or Hydra can be reused here (or a form of Vault contract from Spectrum Network with up to 1,024 cosigners) . They collect transactions from users , agree on balance sheet, calculate a tree on top of it and regularly post its digest on the Ergo blockchain (like in “Offchain Bank operating at Layer 2” design [Offchain Bank operating at Layer 2](https://www.ergoforum.org/t/offchain-bank-operating-at-layer-2/3367) ).

A transaction is transferring value (maybe, in form of debt) from one public key to another, and signed by both participants. Balance sheet under the tree is then about public keys and their balances at the moment, e.g.  
pk\_Alice → -10  
pk\_Bob → 5  
pk\_Carrol → 5

* A box with tree has following spending condition:

1. tree update by validators multi-signature
2. Alice can reduce or eliminate her debt, with updating the tree for her public key just, by providing on-chain assets (Erg, rsBTC, SigUSD etc). If on-chain asset has the same unit of account (gold unit / USD etc) as L2 , an oracle is not needed, otherwise, it is needed. Only Alice’s record is updated in the output box’ tree.
3. Bob can reduce his balance by getting on-chain withdrawal is the box has it. Only Bob’s record is updated in the output box’ tree.

This basic structure may have additional features, e.g. DAO (or trusted party) approval for withdrawals. min value for withdrawals, and so on. It could be the case that external vault may be charged instead the box, allowing for some entity to sponsor a community (or recognizing only certain economic activities there).

This scheme is allowing for free money creation offchain , with on-chain deposits and withdrawals happen only when needed.
