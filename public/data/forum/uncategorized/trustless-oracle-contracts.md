---
title: Trustless Oracle Contracts
description: 'ErgoForum discussion: Trustless Oracle Contracts'
tags:
- auction-house
- avl-tree
- box
- ergoforum
- ergoscript
- spv
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/trustless-oracle-contracts/3793
created: '2022-08-18'
last_activity: '2022-08-18'
posts_count: 1
views: 784
likes: 9
glossary_hits:
- AVL tree
- Auction House
- Box
- ErgoScript
- SPV
---

# Trustless Oracle Contracts

> **Forum thread:** [https://ergoforum.org/t/trustless-oracle-contracts/3793](https://ergoforum.org/t/trustless-oracle-contracts/3793)
> **Category:** Uncategorized | **Created:** 2022-08-18 | **Posts:** 1 | **Views:** 784

**Related concepts:** AVL tree, Auction House, Box, ErgoScript, SPV

---

### Post #1 — @kushti (2022-08-18)

It is known that data is whether available during contract execution, or available via oracles, and in the latter case some trust is involved.

However, in some cases we can commit to data via contracts, and then access the data when it is not available in execution context anymore. We can say about *trustless oracle contracts* here.

One good example here, and already used in practice, is certification of spent boxes , discovered by [@anon\_real](/u/anon_real) and used in Auction House for royalties , [ErgoScript Design patterns - #23 by kushti](https://www.ergoforum.org/t/ergoscript-design-patterns/222/23) .

Another example (not implemented yet) is a contract which is storing commitments to all the block headers in the Ergo blockchain. In execution context, last 10 headers are available. Thus we can have a contract, with trusted setup initially, which is about all the headers to the moment stored under AVL tree, and the contract allows to add a header to the tree if it contains in the execution context (so last 10 headers). Then this contract can be used as an oracle, and can be used e.g. to prove that there was some box in the UTXO set even if it spent now.

Also, we can do the same for storing e.g. Bitcoin headers under AVL tree, we need to implement Bitcoin SPV client as a contract though (but there could be some techniques to execute this contract optimistically in a lightweight way I guess).
