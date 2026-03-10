---
title: 'Sigma 6.0: A Smarter, More Flexible Ergo'
date: '2025-07-23'
author: Ergo Platform
tags:
- autolykos
- context-extension
- core
- eip
- ergo-blog
- ergoscript-context
- ergotree
- registers
- sigmastate-interpreter
- soft-fork
- sub-blocks
- transaction
category: blog
blog_tag: Core, Explaining Ergo, Tooling
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Sigma-6-0-A-Smarter-More-Flexible-Ergo
glossary_hits:
- Autolykos
- Context extension
- EIP
- ErgoScript context
- ErgoTree
- Registers
- Sigmastate interpreter
- Soft fork
- Sub-blocks
- Transaction
---

# Sigma 6.0: A Smarter, More Flexible Ergo

> **Published:** 2025-07-23 | **Author:** Ergo Platform | **Tag:** Core, Explaining Ergo, Tooling | **Type:** blog

**Related concepts:** Autolykos, Context extension, EIP, ErgoScript context, ErgoTree, Registers, Sigmastate interpreter, Soft fork, Sub-blocks, Transaction

---

**Sigma 6.0** is a major proposed upgrade to the Ergo blockchain. It gives developers more powerful tools to build smart contracts, fixes long-standing limitations, and prepares the network for future improvements—all without breaking compatibility with existing contracts or nodes.

The upgrade is happening through a soft-fork, meaning existing non-mining nodes can continue operating, while upgraded mining nodes are required to activate and enforce the new features.

Voting by miners is already underway, with support currently over 90%, and a devnet is live for early testing. If this continues, Sigma 6.0 will activate in late September 2025.

---

## Why Is Sigma 6.0 Needed?

Since Ergo launched in 2019, its smart contract language (ErgoTree) has stayed stable. That stability has helped the network stay secure, but it also made it harder for developers to add new features or simplify their logic. Some improvements were planned as far back as the testnet days in 2018 but never made it to mainnet—until now.

Sigma 6.0 brings those upgrades forward. It expands what’s possible in a contract, removes technical limitations, and clears a path for future governance and scaling improvements.

---

## What’s Changing?

* **More powerful numbers** with a new unsigned 256-bit integer type for cryptographic and financial operations
* **Better data handling** through full support for serializing and deserializing complex types in contracts
* **Smarter transactions** that can access context variables from other inputs for more coordinated logic
* **New math and list tools** including bitwise operations, shifting, and enhanced collection methods like `.get` and `.startsWith`
* **Built-in PoW validation** so contracts can check block headers or custom messages against Autolykos2
* **Upgradable governance** allowing the network to vote on new parameters through future soft-forks, starting with support for sub-blocks

---

## Activation Timeline

Sigma 6.0 is going through a soft-fork activation process that requires two phases: a voting period and an update period. Each lasts about 45 days, making the full rollout take roughly 90 days.

Miners began voting in early July 2025, and support is already over the required 90% threshold. If that level of support holds, the upgrade will activate in late September 2025.

Even if consensus is reached early, the protocol still waits for the full voting and update periods before going live.

A devnet is already live for Sigma 6.0, and developers can find information on how to join in the community dev chat. In July, testing of sub-block–supporting mining nodes began on testnet. After that, focus will shift to refining documentation and improving formal reasoning around security throughout August, ensuring that the upgrade remains research-driven. Once complete, attention can turn toward a potential mainnet deployment.

---

## For Developers

The new features require ErgoTree version 3 or higher. Some types—like `Option`, `Header`, and `UnsignedBigInt`—can’t be stored directly in registers or context extensions, but can be stored as byte data and restored inside the contract.

Example usage can be found in the [Sigma test suite on GitHub](https://github.com/ergoplatform/sigmastate-interpreter/blob/b754e143cf38ed86d95698ede744a470dfa053d6/sigmastate/src/test/scala/special/sigma/SigmaDslSpecification.scala#L10040).

---

## Why It Matters

Sigma 6.0 is the biggest upgrade to Ergo’s smart contract layer since the network launched. It gives developers more freedom, unlocks entirely new use cases, and strengthens the protocol’s foundations—while staying fully backward-compatible.

With miner support now above 90%, the upgrade is on track to activate this September. Sigma 6.0 puts Ergo in a stronger position for the future.

## Resources

- Full technical proposal: [EIP-0050: Sigma 6.0 on GitHub](https://github.com/ergoplatform/eips/blob/6102112617fff96fe88013858c307c2cf363babf/eip-0050.md)
- [6.0 Soft-Fork Proposal (ergoforum)](https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005)
- [Sigma 6.0 Documentation Summary](https://docs.ergoplatform.com/dev/protocol/sigma-6/)
