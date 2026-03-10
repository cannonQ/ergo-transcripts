---
title: "Ergo Developer Chat — 2025-W15"
date_start: "2025-04-07"
date_end: "2025-04-13"
type: telegram_weekly
channel: developer
week: "2025-W15"
source: telegram
message_count: 53
categories: [technical, governance, wallet, ecosystem]
key_terms: [transaction verification, blockchain polling, transaction ID, chain reorgs, 5 second interval, 6.0.0-RC4, mainnet sync, protocol upgrade, tree version check, soft-fork, Merklized ASTs, one-of-many scripts, ErgoScript, wallet policies, MAST, JDK 24, CompactObjectHeaders, performance, Satergo node, Java 22]
---
# Ergo Developer Chat Summary — 2025-W15

## Key Topics Discussed

- **JDK 24 Performance**: JDK 24 with `-XX:+UseCompactObjectHeaders` provides reasonable speedups for Scala/Java applications. Satergo node currently runs on Java 22 but may adopt this default in the future.

- **Transaction Verification On-Chain**: Developers discussed best practices for verifying transaction inclusion. Using transaction ID to query the blockchain is recommended over singleton token tracking. Nautilus polls at 5-second intervals; chain reorgs must be accounted for since confirmed transactions can disappear.

- **Ergo 6.0 Protocol Release Candidate**: Ergo 6.0.0-RC4 released and successfully synced with mainnet. Fixes included ErgoTree version checks (tree v5 announced before 5.0 activation). Version 5.0.26 review pending; voting for 6.0 protocol upgrade being prepared.

- **Sub-blocks Development**: P2P layer implementation mostly complete. Private devnet being set up to test mining and APIs. Transaction classification, packing, and validation logic in progress (currently all transactions included in sub-blocks).

- **Nautilus Wallet i18n**: Language fallback mechanism implemented; en-US dictionary near completion. Ledger integration awaiting final approval before official release.

- **Documentation Improvements**: docs.ergoplatform.com refresh including grammar fixes, inter-link improvements, FleetSDK recipes, blockchain indexing tutorials, MiningCore refresh, debugging guides, and FSM examples. Ecosystem section next priority.

- **Merklized ASTs and One-of-Many Scripts**: ErgoScript example merged showing efficient wallet policy storage using Merkle hashes on-chain with compact one-out-of-many scripts. Enables multi-policy wallets with minimal on-chain footprint.

- **Sigma-Rust for iOS Mobile Development**: Current approach faces Scala 2.11-2.12 version compatibility hurdles with MoboVM. Native bindings for Android/iOS platforms may be more practical than maintaining cross-platform Scala wallet app.

- **Reduced Transaction Serialization**: Discussion on parsing reduced transactions in sigma-rust-mini. Miner fee box includes opcodes (HEIGHT, if, substituteconstants) requiring full opcode support even for minimal implementations. Proposal to extend serialization schema to skip ErgoTree parsing and reduce transaction size for single-key signing scenarios.

- **BigInt Declaration in ErgoScript**: Large BigInt constants should be declared using `bigInt("7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF")` syntax (Base16 encoding at compile-time), not Scala's `.pow()` method which isn't available in ErgoScript.

- **LinkedHashMap Serialization Issue**: Sigma 5.0.13 fixed LinkedHashMap usage introduced in 5.0.12 due to serialization disagreement with older clients on context extension with >4 values. Traversal order consistency critical.

## Important Decisions or Announcements

- [@kushti0978, msg#33981, 2025-04-09]: Ergo protocol reference client **6.0.0-RC4 released** and now able to sync with mainnet
- [@kushti0978, msg#33984, 2025-04-09]: Multiple PRs approved and merged for Ergo R&D (sigma-interpreter #1043); 6.0.0-RC4 released; next: 5.0.26 review and voting preparation for 6.0
- [@Glasgow, msg#33988, 2025-04-09]: **Significant docs.ergoplatform.com improvements** completed across tagging, navigation, ErgoHack section, tutorials, mining core, and off-chain documentation
- [@ccellado, msg#33990, 2025-04-09]: Merklized ASTs PR ready for review (merged by kushti msg#33991)

## Technical Q&A Worth Preserving

- **Q** (@Dmitriy B., msg#33963): What's the best way to verify that a transaction is on-chain? Is extracting a singleton token ID and saving to DB reliable?
  **A** (@anon_br Σ, msg#33965): Use the transaction ID to query the blockchain directly to confirm inclusion.

- **Q** (@Dmitriy B., msg#33966): Should there be a blockchain listener for transaction inclusion notifications? What timeout is appropriate before marking a transaction failed?
  **A** (@anon_br Σ, msg#33967): Nautilus polls at 5-second intervals, which balances responsiveness with server load. No listener service exists currently; HTTP API polling is standard.

- **Q** (@mgpai, msg#33976–33977): What about chain reorgs when verifying transactions?
  **A** (@mgpai, msg#33977): A confirmed transaction may disappear due to chain reorgs; account for this in verification logic.

- **Q** (@iospore, msg#34002): Are standard Scala methods available on ErgoScript types? For example, is `BigInt.pow()` available?
  **A** (@ccellado, msg#34004): No. Consult the [ErgoScript Language Specification](https://github.com/ergoplatform/sigmastate-interpreter/blob/develop/docs/LangSpec.md).

- **Q** (@iospore, msg#34023 follow-up): How should large BigInt constants be declared in ErgoScript?
  **A** (@iospore, msg#34023): Use `bigInt("7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF")` (Base16 compile-time operation). Calculate hex in Java with `BigInteger.TWO.pow(127-1).subtract(BigInteger.ONE).toString(16)`.

- **Q** (@ccellado, msg#34001): Why can't `collection.mutable.LinkedHashMap` be used?
  **A** (@kushti0978, msg#34005): LinkedHashMap causes serialization disagreement with older clients on transactions with >4 context extension values. Sigma 5.0.13 fixed the issue introduced in 5.0.12. Maps must maintain consistent traversal order across clients.

- **Q** (@ccellado, msg#34010): Is sigma-rust complete enough to create an iOS native mobile app?
  **A** (@dusek_, msg#34013): Yes.
  **Additional context** (@ccellado, msg#34012): MoboVM compatibility issues and Scala 2.11-2.12 version maintenance burden suggest native bindings may be preferable to cross-platform Scala wallet app.

- **Q** (@Pgr456, msg#34016): Why do opcodes fail when parsing reduced transactions in sigma-rust-mini?
  **A** (@dusek_, msg#34018): Miner fee box contains opcodes (HEIGHT, if, substituteconstants). Without full opcode parsing, reduced transactions with size bit set cannot be parsed.

- **Q** (@Pgr456, msg#34019): What are options for working with minified sigma-rust that lacks full opcode support?
  **A** (@arobsn, msg#34020): Extend the serialization schema to include ErgoTree size so parsing can be skipped regardless of size flag. A new schema could also reduce transaction size for single-key signing scenarios.

- **Q** (@HQΣr, msg#34024): Can Nautilus dashboard show total balance across all imported wallets for multiple users (e.g., Alice's + Bob's = total)?
  **A** (unresolved): Directed to @anon_br for feasibility assessment.

## Links Shared

- [Reddit: JDK 24 `-XX:+UseCompactObjectHeaders`](https://www.reddit.com/r/scala/comments/1jptiv3/xxusecompactobjectheaders_is_your_new_turbo/): Performance optimization for Scala on JDK 24
- [Ergo API Documentation](https://api.ergoplatform.com/api/v1/docs/): HTTP API reference for blockchain queries
- [Ergo 6.0.0-RC4 Release](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC4): Release notes and mainnet sync confirmation
- [sigma-interpreter PR #1043](https://github.com/ergoplatform/sigmastate-interpreter/pull/1043): Approved and merged R&D improvements
- [sigma-interpreter PR #1047 & #1050](https://github.com/ergoplatform/sigmastate-interpreter/pull/1047): Under review for 6.0 protocol updates
- [sigma-interpreter PR #1066](https://github.com/ergoplatform/sigmastate-interpreter/pull/1066): Merklized ASTs and one-of-many script example
- [ErgoScript Language Specification](https://github.com/ergoplatform/sigmastate-interpreter/blob/develop/docs/LangSpec.md): Complete type and method reference
- [Sigma 5.0.13 Release](https://github.com/ergoplatform/sigmastate-interpreter/releases/tag/v5.0.13): LinkedHashMap serialization fix
- [sigma-rust-mini Repository](https://github.com/aslesarenko/sigma-rust-mini): Minified sigma-rust implementation with opcode limitations

## Unresolved Questions

- **iOS Mobile App Architecture**: Scala 2.11-2.12 version compatibility with MoboVM remains unresolved. Decision pending on whether to ditch Scala wallet app in favor of native Android/iOS bindings.
- **Reduced Transaction Serialization Schema**: Discussion of extending serialization schema for Keystone hardware wallet is ongoing; implementation location and client compatibility requirements TBD.
- **Nautilus Multi-wallet Dashboard**: Whether to implement aggregated balance view across multiple imported wallets for multiple users flagged for @anon_br assessment.
- **Opcode Support in sigma-rust-mini**: Trade-off between minimal implementation (risks losing reduced transaction parsing) vs. full opcode support (firmware bloat concerns) unresolved.

---

**Summary Statistics:**
- **Message Count**: 53 (2025-04-07 to 2025-04-13)
- **Active Participants**: 6 (Aberg, Anastasia Polozova, DiscordBridge, Dmitriy B., HQΣr, anon_br)
- **Primary Focus**: Ergo 6.0 protocol release, wallet/transaction verification, mobile app compatibility, serialization improvements