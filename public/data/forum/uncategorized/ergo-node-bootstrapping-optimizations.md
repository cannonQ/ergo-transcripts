---
title: Ergo node bootstrapping optimizations
description: 'ErgoForum discussion: Ergo node bootstrapping optimizations'
tags:
- avl-tree
- bootstrapping
- box
- ergoforum
- ergotree
- full-node
- nipopow
- schnorr-signatures
- sigmastate-interpreter
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-node-bootstrapping-optimizations/655
created: '2021-02-13'
last_activity: '2021-02-13'
posts_count: 4
views: 638
likes: 3
glossary_hits:
- AVL tree
- Bootstrapping
- Box
- ErgoTree
- Full node
- NiPoPoW
- Schnorr signatures
- Sigmastate interpreter
- Transaction
---

# Ergo node bootstrapping optimizations

> **Forum thread:** [https://ergoforum.org/t/ergo-node-bootstrapping-optimizations/655](https://ergoforum.org/t/ergo-node-bootstrapping-optimizations/655)
> **Category:** Uncategorized | **Created:** 2021-02-13 | **Posts:** 4 | **Views:** 638

**Related concepts:** AVL tree, Bootstrapping, Box, ErgoTree, Full node, NiPoPoW, Schnorr signatures, Sigmastate interpreter, Transaction

---

### Post #1 — @kushti (2021-02-13)

I think now it is a good time to start new round of Ergo node bootstrapping optimizations. The goal would be to keep bootstrapping time under 3-4 hours on commodity hardware (e.g. laptops with 8GB RAM and 30 Mbps download speed), and also reduce memory footprint. I am already doing some work towards that.

The plan would be as follows:

* avoid unnecessary (de)serializations and allocations. I already eliminated unnecessary Header deserializations during *sync* network message construction in this PR: [P2P layer optimizations - part I by kushti · Pull Request #1290 · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/pull/1290) . Also, passing ergoTreeBytes instead of ErgoTree in ErgoBox ( [Avoid duplicates of ErgoTrees and Constants · Issue #694 · ScorexFoundation/sigmastate-interpreter · GitHub](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/694#issuecomment-778589689) ) would help to avoid unnecessary tree construction when we just need to e.g. pass block transactions to a peer. Even more, we can just read bytes and pass them to the network with no doing serialization & deserialization on the way.
* like in Bitcoin Core, we can avoid signature and cost validation for old blocks. Unlike Bitcoin Core, no need to hard-code state commitment checkpoints as with UTXO-set commitments we have state checkpoints written down into each block-header. I think at the moment we can skip validation for all the V1 blocks (so before 417,792). There will be a flag to skip sigs validation (enabled by default), so it will be possible to do sig validation if a user is willing to do so.
* avoid state versioning for old blocks

Should be enough for now, along with P2P layer improvements, then we can add bootstrapping with UTXO-set snapshot, nipopows, more efficient storage implementation for AVL+ tree authenticating UTXO set, JIT+AOT costing instead of just AOT, simplified interpreter etc.

---

### Post #2 — @jasondavies (2021-02-13)

Is it possible to use batch Schnorr verification across an entire block (or within a transaction)?

---

### Post #3 — @kushti (2021-02-13)

Which form of batching? Do you have a link?

For improving sig validation, there are different techniques for improving multiple exponentiations (for the same generator) by using e.g. LL algorithm [scapi/DlogGroupAbs.java at master · ddunwoody/scapi · GitHub](https://github.com/ddunwoody/scapi/blob/master/src/java/edu/biu/scapi/primitives/dlog/DlogGroupAbs.java#L172) . Would be interesting to check what Bitcoin Core is doing.

---

### Post #4 — @jasondavies (2021-02-13)

[Pippenger’s](https://cr.yp.to/papers/pippenger.pdf) for large batches, but I’m not sure what the state-of-the-art is currently. If you look at Bitcoin Core they’ve done a lot of [research](https://github.com/bitcoin-core/secp256k1/pull/760) into this already along with benchmarks.
