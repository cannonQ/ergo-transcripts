---
title: Multi-Stage Protocol Off-Chain & On-Chain Development Workflow
description: 'ErgoForum discussion: Multi-Stage Protocol Off-Chain & On-Chain Development
  Workflow'
tags:
- box
- ergoforum
- ergotree
- multi-stage-contracts
- oracle-pools
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/multi-stage-protocol-off-chain-on-chain-development-workflow/269
created: '2020-07-06'
last_activity: '2020-07-06'
posts_count: 1
views: 674
likes: 4
glossary_hits:
- Box
- ErgoTree
- Multi-stage contracts
- Oracle pools
---

# Multi-Stage Protocol Off-Chain & On-Chain Development Workflow

> **Forum thread:** [https://ergoforum.org/t/multi-stage-protocol-off-chain-on-chain-development-workflow/269](https://ergoforum.org/t/multi-stage-protocol-off-chain-on-chain-development-workflow/269)
> **Category:** Uncategorized | **Created:** 2020-07-06 | **Posts:** 1 | **Views:** 674

**Related concepts:** Box, ErgoTree, Multi-stage contracts, Oracle pools

---

### Post #1 — @robert (2020-07-06)

An interesting realization came to me while working on the off-chain portion, dubbed the “oracle core”, for oracle pools:

If you write an informal specification first for your multi-stage smart contract protocol, you have all of the logic laid out for both the off-chain and on-chain portions. What this means is that it’s easy to have the development of these two halves cleanly separated and worked on by different individuals.

For the off-chain portion, what is specifically neat is that you can essentially use “stub contracts” in place of the real contracts that you will be using. The task of the off-chain part of the dApp is to:

1. Read the current dApp state across all boxes.
2. Perform automated reasoning based on said state.
3. Take user input/submit txs automatically which perform actions in the protocol.

Thus, you can write all of said logic while using a “stub contract” that has an open ended spending condition (for example, spendable by any of your own PKs). This theoretically even allows testing UX for protocols before contracts are fully written, which is rather neat.

Once the off-chain portion is finished, and the contracts are completed as well, then they can be subbed in for the stubs (one at a time) to verify that the off-chain code matches the on-chain code and they work flawlessly in tandem.

Because we have this more dispersed multi-stage model that uses multiple contracts, we thus have a much more modular approach which is a great benefit. It allows for clean code separation and provides the potential for many individuals to work separately on their own portion of the protocol. As each portion is completed, they can be tested separately to verify they match the spec, and at the end be seamlessly brought together and tested as a whole.

This differs quite a bit from account-based contracts because execution in the UTXO model is pushed off-chain and only validating correctness is performed in the contract itself. Thus it is possible for the off-chain code in the UTXO model to run a mock version of the protocol without a single line of on-chain code being written or used, which was never possible previously.
