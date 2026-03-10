---
title: "Ergo Developer Chat — 2022-W16"
date_start: "2022-04-18"
date_end: "2022-04-24"
type: telegram_weekly
channel: developer
week: "2022-W16"
source: telegram
message_count: 53
categories: [wallet, technical, ecosystem, governance]
key_terms: [EIP27, wallet settings, mining rewards, appkit, box selector, HOCON, config format, .conf, lightbend, script, guardian condition, box spending, proof size, cost estimation, transaction ordering, UTXO, block inclusion, same block, ergodocs, P2P network]
---
# Ergo Developer Chat Summary — 2022-W16

## Key Topics Discussed

- **EIP-27 Wallet Settings & Box Selection**: Discussion of EIP-27 flag requirements in wallet implementations and how AppKit can leverage the ergo-wallet box selector from the Ergo node repository after updates.

- **HOCON Configuration Format**: Clarification that `.conf` files use HOCON (Human-Optimized Config Object Notation) format, with reference to the Lightbend specification.

- **Script Execution & Box Spending**: Technical discussion of script reduction semantics — when a script reduces to false, the box cannot be spent because its guardian condition is not satisfied.

- **Transaction Ordering & UTXO Atomicity**: Exploration of whether transactions can be guaranteed inclusion in the same block; conclusion that UTXO ordering (not block-level guarantees) defines execution sequence, and a UTXO cannot be spent before being created.

- **Proof Size in Cost Estimation**: Discovery that proof size (not just time) is the dominating factor in cost estimation, with proof size being O(log n) according to referenced cryptographic research on authenticated dynamic dictionaries.

- **Node Decentralization Risk**: Significant concern raised about over-reliance on single nodes (specifically kushti's node at 213.239.193.208) used by most wallets, with identified risks including government shutdown, DDoS attacks, and potential compromise.

- **P2P vs HTTP Node Access**: Architectural discussion questioning the necessity of HTTP node APIs, proposing direct P2P connections as a more decentralized alternative.

## Important Decisions or Announcements

- [@kushti, msg#2403, 2022-05-04]: Plan to release 4.0.28 with additional PRs that week, then assemble 4.0.29 with sufficient PRs already prepared.

- [@kushti, msg#2419, 2022-05-04]: Expressed interest in having outstanding work finished and tested at ErgoHack.

- [@Aberg, msg#2470, 2022-05-05]: Documented that most software lacks good decentralization; majority of wallets rely on kushti's nodes except Satergo wallet (which can host locally).

## Technical Q&A Worth Preserving

- **Q** (@unknown, msg#2153): What Scala versions are supported?  
  **A** (@kushti, msg#2154): 2.12 and 2.13 supported.

- **Q** (@Aberg, msg#2326-2330): What are the differences between old and new sync info formats, which version introduced the change, are they backwards compatible, and is the code identical?  
  **A** (@kushti, msg#2331): Confirmed backwards compatibility and provided context; Aberg noted his local git clone was outdated and he had missed the changes.

- **Q** (@unknown, msg#2371): What developer tools should be listed in Cyberverse similar to the TxPipe example?  
  **A** (@Glasgow, msg#2373, #2375): Acknowledged the request; provided helpful guidance (full details not shown in provided excerpt).

- **Q** (@unknown, msg#2401): Regarding pass assembly timing?  
  **A** (@kushti, msg#2402): Will be addressed during 4.0.29 assembly.

## Links Shared

- [HOCON specification](https://github.com/lightbend/config/blob/main/HOCON.md): Lightbend's Human-Optimized Config Object Notation documentation.

- [Cryptology ePrint Archive: Report 2016/994](https://eprint.iacr.org/2016/994): "Improving Authenticated Dynamic Dictionaries, with Applications to Cryptocurrencies" — referenced for O(log n) proof size complexity.

- [ErgoBox Docs PR #9](https://github.com/ergoplatform/ergodocs/pull/9): Network P2P documentation PR with rendered preview at https://satsen.github.io/ergodocs/dev/p2p/network.

- [ErgoBox Docs PR #11](https://github.com/ergoplatform/ergodocs/pull/11): Sync info documentation update (submitted week prior, multiple follow-up requests for review).

- [Ergo Reference Client PR #1691](https://github.com/ergoplatform/ergo/pull/1691): Minor fix PR on main ergo repository.

- [Ergo 4.0.27 Release](https://ift.tt/zYDHPQu): Protocol Reference Client release announcement via IFTTT.

## Unresolved Questions

- **Transaction Block Inclusion Guarantee**: Whether transactions can be guaranteed inclusion in the same block remains unresolved; kushti indicated no good mechanism exists for this guarantee [@kushti, msg#2270].

- **Node Decentralization Solutions**: Aberg flagged the centralization risk as "a big problem" and stated he was "working on some things" to minimize it [@Aberg, msg#2476-2478], but specific solutions were not detailed in this segment.

- **Fee Estimation API Adoption**: Quality and testing status of the fee estimation API unclear; kushti noted it exists but lacks application usage and testing [@kushti, referenced in broader context but specifics in msg#2364 context].