---
title: "Ergo Developer Chat — 2025-W12"
date_start: "2025-03-17"
date_end: "2025-03-23"
type: telegram_weekly
channel: developer
week: "2025-W12"
source: telegram
message_count: 101
categories: [technical, wallet, defi, ecosystem, governance, nft]
key_terms: [sigma-rust, sigmastate-interpreter, ergo, pull requests, code review, 6.0 release, executeFromSelfReg, type system, default arguments, ErgoScript, LangSpec, scrypto, Scala 3, release, scorex-utils, debox, ergo 6.0, release candidate, testnet, docker]
---
# Ergo Developer Chat — 2025-W12 Summary

## Key Topics Discussed

- **Scrypto 3.1.0 Release & Scala 3 Support**: New version released with updated JavaScript dependencies and Scala 3 support, unblocking dependent projects.

- **Ergo 6.0.0-RC3 Release**: Reference client RC3 released for testnet only, now buildable locally without issues with Docker image published on DockerHub. Focus on protocol improvements including sub-blocks P2P layer implementation.

- **ExecuteFromSelfReg Function Design**: Debate over whether `executeFromSelfReg[T]` should have `Option[T]` as default or just `T`, with consensus to implement two separate methods (with and without default) and document both in LangSpec.

- **Sub-Blocks Implementation**: Fork resolution completed with test coverage; P2P layer propagation for sub-blocks in progress.

- **Secp256k1 Library Integration**: Discussion on whether to use existing JNI wrapper from BitcoinS or build C library maintenance in-house; decided to leverage existing solutions to minimize maintenance burden.

- **ChainCash Research**: Paper completed and scheduled for preprint server publication.

- **Dexy Testnet UI**: Test UI deployed at https://test.ergfi.xyz/ for community testing.

- **Sigma-Rust Python Bindings**: Python bindings completed and pushed to PyPI (v0.28.0).

- **Nautilus Wallet v1.1.0**: Released with SigmaUSD dApp integration, Ledger connection bug fix, Firefox compatibility improvements, and semi-automatic CI release workflow.

- **Paideia & Crux Updates**: Fixed token amount display bug in send proposals; tracking staking cycle state corruption issue; added better error handling for endpoints.

- **Ergo Bounty Board Rework**: System now supports claiming bounties and requesting payment with daily automated updates; seeking community review for accuracy.

- **Testnet Reliability**: Community concern raised about needing reliable testnet for non-interactive innovation without centralized dependency on maintainers.

## Important Decisions or Announcements

- [@kushti0978, msg#33650, 2025-03-18]: Scrypto 3.1.0 with Scala 3 support and updated JS dependencies released.

- [@kushti0978, msg#33659, 2025-03-18]: Ergo protocol reference client 6.0.0-RC3 released for testnets only; can now be built locally and Docker image published.

- [@arobsn, msg#33660, 2025-03-18]: Nautilus v1.1.0 with SigmaUSD dApp integration released and live in Mozilla Add-on Store.

- [@cannon_q, msg#33652, 2025-03-18]: Ergo Ecosystem Bounty Board reworked with claim/payment request functionality and daily automated updates.

- [@kushti0978, msg#33708, 2025-03-21]: Decision to implement two separate `executeFromSelfReg` methods (with and without default) and document both in LangSpec.

## Technical Q&A Worth Preserving

- **Q** (@novamon_25735, msg#33626): Getting byte overflow from `getVarInt` in `executeFromSelfReg` test—is this connected to the test itself?
  **A** (@kushti0978, msg#33628): The issue is that `executeFromSelfReg[T]`'s default argument is `Option[T]` when it should be `T`; frontend should handle the wrapping. Similar operation `DeserializeRegister` has no default and apps handle it fine.

- **Q** (@luivatra, msg#33624): Would it be possible to generalize `executeFromVar` to `executeFrom(ergotree: Coll[Byte])` to enable reference scripts similar to Cardano?
  **A** (no direct response recorded; request acknowledged)

- **Q** (@novamon_25735, msg#33682): What's the best approach for integrating secp256k1 in Java—build C library ourselves with JNI or use existing library?
  **A** (@kushti0978, msg#33686): BitcoinS already does JNI for libsecp256k1; leverage existing solutions. (@novamon_25735, msg#33693): Agreed on avoiding maintenance burden; prefer using already-built library if targets are covered.

- **Q** (@novamon_25735, msg#33685): What's the norm for establishing maintenance of certain libraries like secp256k1 in C?
  **A** (implicit): Use existing well-maintained solutions (BitcoinS JNI) rather than forking maintenance responsibility.

- **Q** (@novamon_25735, msg#33704): How should `executeFromSelfReg` variant without default be implemented?
  **A** (@kushti0978, msg#33708): Implement two methods—one with default and one without (renamed `executeFromSelfRegWithDefault`); document both in LangSpec.

## Links Shared

- [https://github.com/input-output-hk/scrypto/pull/114](https://github.com/input-output-hk/scrypto/pull/114): Scrypto PR requiring review
- [https://github.com/input-output-hk/scrypto/pull/115](https://github.com/input-output-hk/scrypto/pull/115): Scrypto PR requiring review
- [https://github.com/ergoplatform/ergo/pull/2209](https://github.com/ergoplatform/ergo/pull/2209): Ergo node PR requiring review
- [https://github.com/ergoplatform/ergo-appkit/pull/249](https://github.com/ergoplatform/ergo-appkit/pull/249): AppKit PR requiring review
- [https://github.com/input-output-hk/scrypto/releases/tag/v3.1.0](https://github.com/input-output-hk/scrypto/releases/tag/v3.1.0): Scrypto 3.1.0 release with Scala 3 support
- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC3](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC3): Ergo 6.0.0-RC3 release (testnet)
- [https://pypi.org/project/ergo-lib-python/0.28.0/](https://pypi.org/project/ergo-lib-python/0.28.0/): Sigma-Rust Python bindings on PyPI
- [https://test.ergfi.xyz/](https://test.ergfi.xyz/): Dexy testnet UI for community testing
- [https://github.com/nautls/nautilus-wallet/releases/tag/v1.1.0](https://github.com/nautls/nautilus-wallet/releases/tag/v1.1.0): Nautilus v1.1.0 release with SigmaUSD integration
- [https://github.com/ErgoDevs/Ergo-Bounties/](https://github.com/ErgoDevs/Ergo-Bounties/): Reworked Ergo Ecosystem Bounty Board with claim and payment request features
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1062](https://github.com/ergoplatform/sigmastate-interpreter/pull/1062): Unit type support PR
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1061](https://github.com/ergoplatform/sigmastate-interpreter/pull/1061): PoC draft PR for original issue
- [https://github.com/ergoplatform/ergo-appkit/pulls/248](https://github.com/ergoplatform/ergo-appkit/pulls/248): Merge develop to 5.0.15 to unblock #235
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1063](https://github.com/ergoplatform/sigmastate-interpreter/pull/1063): Scala 3 cherry-pick for subsequent work
- [https://thehackernews.com/2025/03/github-supply-chain-breach-coinbase.html](https://thehackernews.com/2025/03/github-supply-chain-breach-coinbase.html): GitHub supply chain breach (security alert shared)
- [https://github.com/utxo-company/bullet/blob/main/paper/bullet.pdf](https://github.com/utxo-company/bullet/blob/main/paper/bullet.pdf): Bullet paper (referenced as good read by mgPai)

## Unresolved Questions

- **Merkle Tree Integration for SigmaScript** (@ccellado, msg#33688): Working on understanding how to integrate Merkle trees into Sigma script for issue #1053; status and approach not finalized.

- **Testnet Reliability & Decentralization** (@c8e4d2a, msg#33697): Need for reliable testnet for non-interactive innovation without centralized dependency on maintainers; no concrete solution proposed.

- **Reference Scripts via ErgoTree** (@luivatra, msg#33624): Generalization of `executeFromVar` to accept arbitrary ErgoTree bytes for Cardano-like reference script functionality—feasibility not addressed in chat.

- **PoWJPGs Hexspeak Minting** (@powjpgs, msg#33719): Originally wanted 5x PoW NFT configuration where minting address starts/ends/contains hexspeak name; partial solution achieved but full specification unclear.