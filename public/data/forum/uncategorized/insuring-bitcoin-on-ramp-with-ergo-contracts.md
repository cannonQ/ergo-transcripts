---
title: Insuring Bitcoin on-ramp with Ergo contracts
description: 'ErgoForum discussion: Insuring Bitcoin on-ramp with Ergo contracts'
tags:
- box
- ergoforum
- ergohack
- ergoscript
- mempool
- registers
- rosen-bridge
- schnorr-signatures
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/insuring-bitcoin-on-ramp-with-ergo-contracts/5121
created: '2025-03-30'
last_activity: '2025-03-30'
posts_count: 1
views: 145
likes: 6
glossary_hits:
- Box
- ERGOHACK
- ErgoScript
- Mempool
- Registers
- Rosen Bridge
- Schnorr signatures
- Transaction
---

# Insuring Bitcoin on-ramp with Ergo contracts

> **Forum thread:** [https://ergoforum.org/t/insuring-bitcoin-on-ramp-with-ergo-contracts/5121](https://ergoforum.org/t/insuring-bitcoin-on-ramp-with-ergo-contracts/5121)
> **Category:** Uncategorized | **Created:** 2025-03-30 | **Posts:** 1 | **Views:** 145

**Related concepts:** Box, ERGOHACK, ErgoScript, Mempool, Registers, Rosen Bridge, Schnorr signatures, Transaction

---

### Post #1 — @kushti (2025-03-30)

Assume an OTC deal where cash is exchanged for Bitcoin: one party is handling cash over, another is sending a Bitcoin transaction in result. However, while average block time in Bitcoin is 10 minutes, sometimes there is need to wait for one or two hours. During network congestions things may be even worse. And while transaction is in mempool, it can be overwritten if RBF is enabled, so it could be not safe for an average Bitcoin buyer to leave the place where the deal is taking place if there is no trust in seller. But with Rosen Bridge’s rsBTC and Ergo contracts, Ergo could help here, with the most popular Bitcoin real-world application (on-ramp) as a smart layer for Bitcoin for real.

A trustless Bitcoin relay would be needed. A video presentation can be found on [Youtube](https://www.youtube.com/watch?v=mx3n6j3OsdE), contracts and tests can be found at <https://github.com/ross-weir/ergohack-sidechain>.

Then the solution is following:

* the BTC seller also has a vault box on Ergo blockchain, which is locking rsBTC under a contract which will be described below
* during the deal the BTC seller also signing a message which contains BTC amount, Bitcoin transaction id and timestamp of the deal
* the vault contract allowing on message submission (see <https://www.ergoforum.org/t/verifying-schnorr-signatures-in-ergoscript/3407> on how to verify a Schnorr signature in ErgoScript), if the message is fresh enough (e.g. no more than 4 hours passed) to create a box with following spending paths:

1. after some deadline (e.g. 6 hours) the Bitcoin buyer can proceed with withdrawing rsBTC
2. the seller can cancel withdrawal and get rsBTC back on presenting a proof of inclusion into the Bitcoin blockchain a transaction with id in the signed message (which can be projected into some register of this box automatically on spending from the vault). Example of such check can be found at <https://github.com/ross-weir/ergohack-sidechain/blob/main/contracts/relay/BtcTxCheck.es>

The buyer can start dispute immediately (1 Ergo transaction), or, in case of big vault and some trust postpone it a bit (zero onchain transactions). No trusted parties are involved in dispute resolution.

So along with [insuring physical gold](https://www.ergoforum.org/t/physical-or-digital-gold-simple-insurance-on-ergo/4715) Ergo contracts can be useful for insuring Bitcoin on-ramp as well.
