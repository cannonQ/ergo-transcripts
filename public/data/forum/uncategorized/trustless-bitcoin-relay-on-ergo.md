---
title: Trustless Bitcoin relay on Ergo
description: 'ErgoForum discussion: Trustless Bitcoin relay on Ergo'
tags:
- autolykos
- ergoforum
- ergohack
- ergoscript-context
- full-node
- spv
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/trustless-bitcoin-relay-on-ergo/4798
created: '2024-06-09'
last_activity: '2024-06-10'
posts_count: 2
views: 508
likes: 4
glossary_hits:
- Autolykos
- ERGOHACK
- ErgoScript context
- Full node
- SPV
- Transaction
---

# Trustless Bitcoin relay on Ergo

> **Forum thread:** [https://ergoforum.org/t/trustless-bitcoin-relay-on-ergo/4798](https://ergoforum.org/t/trustless-bitcoin-relay-on-ergo/4798)
> **Category:** Uncategorized | **Created:** 2024-06-09 | **Posts:** 2 | **Views:** 508

**Related concepts:** Autolykos, ERGOHACK, ErgoScript context, Full node, SPV, Transaction

---

### Post #1 — @kushti (2024-06-09)

In this post I am going to provide some details on my ErgoHack VIII project, a trustless Bitcoin relay on Ergo.

To fully check all the Bitcoin blocks with transactions, you need to run a full-node. There’s more lean option, called SPV (Simple Payment Verification) client (initially described in the Satoshi’s Bitcoin whitepaper <http://satoshinakamoto.me/bitcoin.pdf> , Section 8). SPV client is checking block headers just and trusts one with most work spent on it. Then SPV client can receive a transaction from the heaviest blockchain along of Merkle proof of its inclusion into blockchain and validate that the transaction is indeed from the blockchain, to process transaction (e.g. spend its outputs or read data from an output with OP\_RETURN).

A trustless relay can be seen then as a simplest SPV client done as a smart contract. This contract on Ergo is processing a Bitcoin header submitted, validating its proof-of-work, attaching to parent header previously submitted and builds a headers-chain with best cumulative work.

Then other contracts can interact with the Bitcoin blockchain trustlessly by using relay contract. For the ErgoHack, I’ve made a contract which is checking that a Bitcoin transaction provided along with a Merkle proof of its inclusion into a block is indeed included into a best Bitcoin blockchain and has enough confirmations (6 in this case).

Both contracts can be found in the <https://github.com/ross-weir/ergohack-sidechain> repo, namely:

* [relay/BtcRelay.es](https://github.com/ross-weir/ergohack-sidechain/contracts/relay/BtcRelay.es) - processing submitted Bitcoin headers and building a commitment  
  to a best Bitcoin chain which can be built out of them (thus operating as a Bitcoin SPV client), for client applications
* [relay/BtcTxCheck.es](https://github.com/ross-weir/ergohack-sidechain/contracts/relay/BtcTxCheck.es) - using relay contract to check if provided Bitcoin transaction  
  is included into Bitcoin blockchain and has enough confirmations

There are also tests which can be found in [src/test/scala/sidechain/relay](https://github.com/ross-weir/ergohack-sidechain/src/test/scala/sidechain/relay) folder.

Slides: [docs/relays.pdf](https://github.com/ross-weir/ergohack-sidechain/docs/relays.pdf)

Possible use cases:

Use cases:

* Trustless Bitcoin hashrate derivatives on Ergo (i.e. Bitcoin miners can do contracts on Bitcoin hashrate on Ergo, to hedge against possible hashrate increase)
* Making Ergo a smart layer for Bitcoin (Ergo contracts can do actions based on Bitcoin transactions and data written on Bitcoin, e.g. in OP\_RETURN fields, that is how RGB/RGB++ etc operate)
* Trustless bridging from Bitcoin to Ergo (but how to send back ?)
* Trustless cross-chain DEXes

and more.

All the code is released under Public Domain (CC0) license, so please feel free to use it and build on it without any limits!

Similarly, a trustless relay can be easily build for other sha256 PoW chains and PoW chains with simple PoW algorithms. For Autolykos2 PoW chains(such as Blocx) a relay can be easily done as well. For PoW chains with complex PoW algorithms (such as EthHash) validation is not so trivial, but could be done (see eg. <https://dsg.tuwien.ac.at/team/sschulte/paper/bc2020a.pdf> and other research on efficient EthHash chains relays, there are a lot of proposals around actually). For Proof-of-Stake and other PoX chains it is not clear how efficient relay can be done. So simplified trustless cross-chaining is another PoW advantage.

---

### Post #2 — @jossemii (2024-06-10)

Corrected contract URLs:

* [BtcRelay.es](https://github.com/ross-weir/ergohack-sidechain/blob/main/contracts/relay/BtcRelay.es)
* [BtcTxCheck.es](https://github.com/ross-weir/ergohack-sidechain/blob/main/contracts/relay/BtcTxCheck.es)

Tests

* [Relay](https://github.com/ross-weir/ergohack-sidechain/tree/main/src/test/scala/sidechain/relay)

Docs:

* [Slides](https://github.com/ross-weir/ergohack-sidechain/blob/main/docs/relays.pdf)
