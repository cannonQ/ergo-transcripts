---
title: Ergo Block Header Format
description: 'ErgoForum discussion: Ergo Block Header Format'
tags:
- autolykos
- avl-tree
- box
- dev
- difficulty-adjustment
- ergoforum
- ergoscript-context
- soft-fork
- transaction
category: forum
forum_category: Development
source: ergoforum
source_url: https://ergoforum.org/t/ergo-block-header-format/4185
created: '2023-01-24'
last_activity: '2023-01-24'
posts_count: 3
views: 532
likes: 4
glossary_hits:
- AVL tree
- Autolykos
- Box
- Difficulty adjustment
- ErgoScript context
- Soft fork
- Transaction
---

# Ergo Block Header Format

> **Forum thread:** [https://ergoforum.org/t/ergo-block-header-format/4185](https://ergoforum.org/t/ergo-block-header-format/4185)
> **Category:** Development | **Created:** 2023-01-24 | **Posts:** 3 | **Views:** 532

**Related concepts:** AVL tree, Autolykos, Box, Difficulty adjustment, ErgoScript context, Soft fork, Transaction

---

### Post #1 — @kushti (2023-01-24)

A block in Ergo consists of four sections: header, block transactions, proofs of state transformation correctness, and extension. A protocol client may skip certain parts of a block if they are not needed. This leads to democratic network which is open to different clients, even to very limited ones.

Header is the most fundamental block section, committing to others, and Proof-of-Work is done on header bytes.

* **version** - protocol version , 1 byte, during the mainnet launch version was equal to 1, currently 3 (1 == Mainnet launch version, 2 == Hardening hard-fork, 3 == “5.0” soft-fork)
* **parentId** - id of a parent block header (32 bytes)
* **aDProofsRoot** - digest of UTXO set transformation proofs (hash of proofs block section bytes, 32 bytes)
* **stateRoot** - AVL+ tree digest of UTXO set (after the block application!), 33! bytes, includes 32 bytes root hash with tree height (as 1-byte number) appended
* **transactionsRoot** - Merkle tree digest of transactions in the block (BlockTransactions section), 32 bytes
* **timestamp** - block generation time reported by a miner, as 64 bits (8 bytes) signed number. Time is presented in Java Virtual Machine format, so number of milliseconds since the beginning of Unix epoch
* **nBits** - difficulty encoded as nBits (the same format as in Bitcoin), encoded as signed 64 bits (8 bytes) number, but actually it is unsigned 32 bits number
* **height** - height of the block (genesis block height == 1)
* **extensionRoot** - Merkle tree digest of the extension section of the block, 32 bytes
* **powSolution** - solution for the proof-of-work puzzle , 41 bytes in Autolykos v2
* **votes** - votes for changing system parameters (3 bytes)

and since version 2 (hardening hard-fork), block header also has additional byte, which value is 0 for now, but could contain length of additional fields, thus header can be extended in principle (way to do that is not paved yet though)

---

### Post #2 — @kushti (2023-01-24)

[reserved for PoW solution format and PoW validation]

---

### Post #3 — @kushti (2023-01-24)

[reserved for Merkle tree format]
