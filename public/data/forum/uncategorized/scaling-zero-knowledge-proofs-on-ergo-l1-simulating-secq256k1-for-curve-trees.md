---
title: 'Scaling Zero-Knowledge Proofs on Ergo L1: Simulating secq256k1 for Curve Trees'
description: 'ErgoForum discussion: Scaling Zero-Knowledge Proofs on Ergo L1: Simulating
  secq256k1 for Curve Trees'
tags:
- avl-tree
- box
- collateral
- context-extension
- ergoforum
- ergoscript
- eutxo
- full-node
- mev
- native-tokens
- registers
- sub-blocks
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/scaling-zero-knowledge-proofs-on-ergo-l1-simulating-secq256k1-for-curve-trees/5307
created: '2026-02-24'
last_activity: '2026-02-24'
posts_count: 1
views: 20
likes: 1
glossary_hits:
- AVL tree
- Box
- Collateral
- Context extension
- ErgoScript
- Full node
- MEV
- Native tokens
- Registers
- Sub-blocks
- Transaction
- eUTXO
---

# Scaling Zero-Knowledge Proofs on Ergo L1: Simulating secq256k1 for Curve Trees

> **Forum thread:** [https://ergoforum.org/t/scaling-zero-knowledge-proofs-on-ergo-l1-simulating-secq256k1-for-curve-trees/5307](https://ergoforum.org/t/scaling-zero-knowledge-proofs-on-ergo-l1-simulating-secq256k1-for-curve-trees/5307)
> **Category:** Uncategorized | **Created:** 2026-02-24 | **Posts:** 1 | **Views:** 20

**Related concepts:** AVL tree, Box, Collateral, Context extension, ErgoScript, Full node, MEV, Native tokens, Registers, Sub-blocks, Transaction, eUTXO

---

### Post #1 — @a-shannon (2026-02-24)

Hello Ergo developers and community,

Following kushti’s recent comments regarding the feasibility of Curve Trees on Ergo, I’ve been researching exactly how this theoretical breakthrough maps onto ErgoScript 6.0 and the eUTXO model.

What initially appeared to be a mathematical roadblock—the fact that Ergo only supports the `secp256k1` curve natively—has actually been completely solved by Ergo 6.0’s introduction of `UnsignedBigInt` modular arithmetic.

I have successfully written and executed the first ErgoScript test proving that **we can natively perform elliptic curve mathematics on the `secq256k1` sister curve directly on L1.**

I have published a formal research paper detailing the complete architecture, the exact mathematics, and the novel execution model that makes this possible:

> **![:page_facing_up:](https://ergoforum.org/images/emoji/twitter/page_facing_up.png?v=15 ":page_facing_up:") Read the Formal Research Paper**

> For the complete mathematical proofs, `secq256k1` simulation formulas, the eUTXO Affine Anomaly, and exact Execution Pipelining economics, please read the accompanying research paper:

> **Scaling Zero-Knowledge Proofs on Ergo: Native secq256k1 Simulation and eUTXO Pipelining (PDF)**

> Available at: `github . com / a-shannon / ergo-research` (papers/curve-trees/)

---

## The 2-Chain Cryptographic Breakthrough

To efficiently verify a Curve Tree [1], the prover must compute Pedersen hashes on alternating elliptic curves. The output of a hash on Curve A (a base field coordinate) must perfectly match the scalar input for Curve B. This requires a **2-chain**: two curves where the field-order relationship holds in one direction per tree level.

* **Curve A (`secp256k1`):** Ergo’s native curve.
* **Curve B (`secq256k1`):** Evaluates the exact same equation ($y^2 = x^3 + 7$), but over a prime field $p’$ that exactly equals $n$ (the group order of `secp256k1`).

Because $p\_{secq} = n\_{secp}$, we can manually program point-addition and point-doubling formulas for `secq256k1` within ErgoScript using the `multiplyMod`, `plusMod`, `subtractMod`, and `modInverse` opcodes introduced in Node v6.0.

---

## The eUTXO Affine Anomaly

A surprising finding from this research: Ergo’s JIT compiler prices `modInverse` at only 150 JitCost, compared to 40 for `multiplyMod`. This means that the normally inefficient Affine coordinate representation (which requires a modular inverse per operation) is **strictly cheaper** than the standard Jacobian coordinates used in every other blockchain:

* **Affine point addition:** 450 JitCost
* **Jacobian point addition:** ~690 JitCost

Ergo’s unique opcode pricing flips standard cryptographic dogma on its head, making our simulated curve operations 35% cheaper than the textbook approach.

---

## The Cost Reality & Execution Pipelining

Verifying a Curve Tree of depth 20 (~1,000,000 leaves) produces ~8,192 constraints. Evaluating the full Multi-Scalar Multiplication sequentially costs roughly **1.2 Billion JitCost** — shattering Ergo’s 1M JitCost block limit by three orders of magnitude.

To solve this without Optimistic Rollup assumptions, we use **Execution Pipelining** — a deterministic eUTXO design pattern where:

1. The 8,192 fixed Bulletproof generators are stored in a **global AVL Tree** deployed once at protocol genesis.
2. The prover submits only a tiny ~1-2 KB proof transcript in the transaction registers.
3. A `ProofInProgress` box chains through **~1,200 sequential transactions**, each evaluating ~900K JitCost of MSM math.
4. **Permissionless Cranking** ensures liveness: any MEV bot can advance the pipeline state, incentivized by an ERG-denominated Execution Bounty.
5. An anti-griefing collateral bond protects relayers from invalid-proof denial-of-service.
6. Upon completion, a `Verified_Proof` token is minted. Multiple users’ proofs can then batch-update the global accumulator in a single block.

The network acts as a **decentralized, stateful Turing tape** — reading context variables, executing alternating-curve MSM, and committing state transformations, all without any protocol modifications.

### Settlement Time & Sub-blocks

The full pipeline takes approximately 24-40 hours for absolute L1 cryptographic finality. With Ergo’s pending Sub-blocks upgrade (weak confirmations every ~1 second), the dApp UI shows real-time progress as each step enters a sub-block, providing Web2-style fluid UX.

---

## What This Means for Ergo

By combining the Generalized Bulletproof architecture, the `secq256k1` 2-chain simulation via `UnsignedBigInt`, and eUTXO Execution Pipelining, massive zero-knowledge accumulators like Curve Trees are **completely viable on Ergo today** — purely at the smart-contract layer, requiring **zero soft or hard forks**.

This is something no other eUTXO chain has demonstrated. Ergo’s unique combination of `UnsignedBigInt` modular arithmetic and deterministic UTXO topology makes it the only blockchain where this architecture is possible without protocol-level changes.

I am continuing development on Phase 2 (Pedersen hashing across both curves) and would love to hear thoughts, feedback, and potential optimizations from kushti and the core team.

**Full paper:** `github . com / a-shannon / ergo-research`

---

*References:*

[1] Campanelli et al., “Curve Trees: Practical and Transparent Zero-Knowledge Accumulators,” IACR 2022. [Curve Trees: Practical and Transparent Zero-Knowledge Accumulators](https://eprint.iacr.org/2022/756)
