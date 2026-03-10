---
title: "Ergo Developer Chat — 2024-W10"
date_start: "2024-03-04"
date_end: "2024-03-10"
type: telegram_weekly
channel: developer
week: "2024-W10"
source: telegram
message_count: 151
categories: [technical, defi, bridges, mining, wallet, nft, ecosystem, governance]
key_terms: [P2SH, ErgoTree, script version, tree version byte, ScalaCheck, generator functions, recursion, flatMap, conditionals, RocksDB, ARM32, ARM64, JNI, Raspberry Pi, SigmaUSD, contracts, test suite, protocol v2, kiosk, Sonatype]
---
# Ergo Developer Chat — 2024-W10 Summary

## Key Topics Discussed

- **ErgoTree versioning and P2SH addresses**: Discussion on whether ErgoTree version should be fixed for P2SH scripts to prevent payments to different scripts after updates. Two options proposed: fix tree version or include version byte in P2SH address (requires documentation updates). [@kushti, msg#25511-25512]

- **RocksDB ARM support**: Testing and troubleshooting RocksDB JNI binaries across ARM32, ARM64, macOS, and Windows ARM platforms. ARM32 not supported by RocksDB JNI; ARM64 and x86 working. [@kushti, @ccellado, @filippounits, msg#25555-25643]

- **SigmaUSD contract testing and updates**: Started new repository with SigmaUSD contracts and tests to work on protocol updates. v2 contract cleanup underway (removed coolingOff height). [@kushti, msg#25546]

- **Ergo 5.0.21 release preparation**: Assembling release candidate with merged PRs. Plan to release 5.0.21 next week and 5.1.0 in 2 weeks; 5.0.x and 5.1.x will coexist through 2024. [@kushti, msg#25576]

- **Sidechain development**: ErgoDevs DAO R&D umbrella for sidechain work. Verification code for sidechain prototype completed; time to write EIP. [@kushti, msg#25569, msg#25576]

- **Scala code generation best practices**: Discussion on using flatMap with recursion for conditional generator functions in ScalaCheck. Example provided for safe recursive patterns in generator definitions. [@liquid_phase, @stenolog_79565, msg#25521-25536]

- **Git workflow standardization**: Proposal to enforce rebase/squash on merge for cleaner git history, enabling better bug attribution and code evolution tracking. Suggested as part of core-dev manual rather than DAO governance. [@stenolog_79565, msg#25657, msg#25663-25667]

- **Dexy public testing**: Dexy testnet UI and Bank UI deployed; requires testnet Nautilus v0.9.2 for interaction. [@kushti, msg#25594]

- **Chainlink Palmyra partnership**: Using Chainlink oracles for proof of reserve in on-chain warehouse receipts. Plan to build out native Ergo oracles with capital raised from token sale. [@Dan Friedman, msg#25552 context]

## Important Decisions or Announcements

- [@kushti, msg#25513-25515]: Approved and merged PR #2132; closed issues #2118 and #2117 (though stenolog noted these were closed too quickly for processing).

- [@kushti, msg#25545]: Approved and merged PR #2116 (Scala code generation fix).

- [@kushti, msg#25546]: Created bounty issues for SigmaUSD tests in GORT (convertible on Spectrum DEX). Issue #1 recommended as starting point.

- [@ccellado, msg#25553]: `ergo-core` tests merged; IT tests ongoing in draft PR #2129; RocksDB PR reviewed with macOS error reproduced.

- [@kushti, msg#25568]: Provided ARM test binary for Raspberry Pi testing: `ergo-5.0.20-26-3974f64a-20240305-1715-SNAPSHOT.jar`

- [@ccellado, msg#25607]: Decision to publish Kiosk library under Ergo account approved by kushti.

- [@ccellado, msg#25613]: Kiosk repository created under ergo org; awaiting sonatype secrets for publishing.

- [@ccellado, msg#25656]: PR #2135 (ergo-core CI publishing fix) approved and merged by kushti.

- [@ccellado, msg#25654]: SigmaUSD test PR created (#3 in kushti/sigmausd). Deps updated, tokens injected; unresolved: negative tests not added due to positive test reduction to false.

- [@stenolog_79565, msg#25657]: Issue #2137 opened proposing rebase/squash as standard git workflow rule for core developers.

- [@kushti, msg#25628-29]: ErgoDevs contributor list published; seeking EIPs secretary and Minotaur-based multisig cosigners for incoming donation. [@cannon_q, @ccellado, @filippounits, @ldgaetano volunteered for multisig roles, msg#25645-25649]

## Technical Q&A Worth Preserving

- **Q** (@omniawaha, msg#25520): Can the interpreter process different ErgoTree versions? Can newer versions add new operations and functions?
  **A** (@ergomorphic, msg#25519): The interpreter is the same, but each version may add new operations so behavior is versioned. Current p2sh address implementation doesn't depend on ErgoTree version — script can contain code not yet implemented in v5.0 but slated for v6.0, making boxes unspendable until v6.0 activation. [@ergomorphic, msg#25537]

- **Q** (@stenolog_79565, msg#25521): Scala code issue with conditionals within generator functions in ScalaCheck.
  **A** (@liquid_phase, msg#25523-26): Provided flatMap solution with recursive construct. Recursion safe because ScalaCheck handles generator execution. Condition at 0.5% rarity expected to cause sporadic failures; solution provided. [@liquid_phase, msg#25526]

- **Q** (@dusek_, msg#25620): Is langspec.md outdated? Can compiler compile arbitrary lambdas in flatMap in v5.0?
  **A** (@ergomorphic, msg#25621): Yes, no restriction. For sigma-rust development, check sigma sources `_eval` methods in methods.scala. [@ergomorphic, msg#25623]

- **Q** (@ccellado, msg#25610): Should ARM64 macOS test be lite full node sync or any sync?
  **A** (@kushti, msg#25611): Any kind of sync acceptable for testing.

- **Q** (@ccellado, msg#25615-25618): macOS testnet sync stuck at headers; what platform?
  **A** (@kushti): Restart helped; macOS full sync progressing normally. [@ccellado, msg#25617-25619]

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2132]: P2SH/ErgoTree versioning discussion PR (merged).
- [https://github.com/ergoplatform/ergo/issues/2118, #2117]: Closed issues (closed too quickly per stenolog).
- [https://github.com/ergoplatform/ergo/pull/2116#issuecomment-1976886863]: Scala conditional generator problem with solution.
- [https://github.com/ergoplatform/ergo/pull/2116#issuecomment-1977000243]: Corrected Scala code and stress test passing.
- [https://github.com/ScorexFoundation/sigmastate-interpreter/blob/22f058625a15767926d53b23ce5812a0e78a7845/data/shared/src/main/scala/sigma/ast/methods.scala#L800]: Sigma interpreter `_eval` methods reference.
- [https://github.com/kushti/sigmausd/issues]: SigmaUSD bounty issues list.
- [https://github.com/fleet-sdk/fleet/blob/master/plugins/ageusd/src/exchangePlugin.spec.ts]: Fleet SDK SigmaUSD tests for reference.
- [https://ergoplatform.org/docs/AdvancedErgoScriptTutorial.pdf]: Advanced ErgoScript Tutorial (kushti's contributions).
- [https://pdfs.semanticscholar.org/d51b/51fd136b1b74ece7caa6a7cb9c8f74b1b829.pdf]: "On Contractual Money" paper.
- [https://ergoplatform.org/docs/paper_26.pdf]: "Multi-stage Contracts in the UTXO Model".
- [https://eprint.iacr.org/2020/560.pdf]: "ZeroJoin: Combining ZeroCoin and CoinJoin" (used in ErgoMixer).
- [https://eprint.iacr.org/2020/044.pdf]: "Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts".
- [https://github.com/ergoplatform/ergo-jde/blob/main/kiosk/src/test/scala/kiosk/mixer/doc/main.pdf]: SigmaJoin outsourceable mixing documentation.
- [https://www.ergoforum.org/t/ergodevs-r-d-dao-for-ergo-core/4663/17]: ErgoDevs DAO sidechain development proposal.
- [https://dexy.interface-ggd.pages.dev/]: Dexy LP UI (public testnet).
- [https://dexy-test.dexygold.com/]: Dexy Bank UI (public testnet).
- [https://github.com/nautls/nautilus-wallet/releases/tag/v0.9.2]: Nautilus testnet wallet release.
- [https://github.com/ccellado/Kiosk/tree/renew-kiosk]: Kiosk renewal branch (ergo-core 5.0.19 master required).
- [https://github.com/ergoplatform/kiosk]: Kiosk published under ergo org.
- [https://github.com/ladopixel/fleet-sdk-sendnft]: Fleet SDK NFT send tutorial.
- [https://github.com/ladopixel/fleet-sdk-createtoken]: Fleet SDK token creation tutorial.
- [https://github.com/ladopixel/fleet-sdk-burntokens]: Fleet SDK token burn tutorial.
- [https://github.com/ladopixel/fleetERG]: Sample Fleet SDK web app (create token, send ERG/tokens/NFT, burn).
- [https://github.com/ergoplatform/ergo/pull/2135]: ergo-core CI publishing fix (merged).
- [https://github.com/kushti/sigmausd/pull/3]: SigmaUSD test PR with updated deps.
- [https://github.com/ergoplatform/ergo/pull/2111]: 5.0.21 release candidate (un-rebased).
- [https://github.com/ergoplatform/ergo/pull/2136]: 5.0.21 rebased/squashed version (example of clean history).
- [https://github.com/ergoplatform/ergo/issues/2137]: Git workflow standardization issue proposal.
- [https://github.com/stenolog/ergo/issues/5]: Standard procedure for core-dev workflow.
- [https://twitter.com/kitlangton/status/1765464144067661927]: Scala3 refined types library reference.
- [https://github.com/facebook/rocksdb/wiki/Platform-Requirements]: RocksDB platform support matrix.
- [https://www.udrop.com/Lz7N/ergo-5.0.20-26-3974f64a-20240305-1715-SNAPSHOT.jar]: ARM test binary for RaspberryPi.

## Unresolved Questions

- **P2SH script versioning approach**: Two solutions proposed (fix tree version or include version byte in address); requires decision on which approach to take and documentation scope. [@kushti, msg#25511-25512]

- **ARM32 RocksDB support**: ARM32 not supported by RocksDB JNI; planned to deliver 5.0.x through 2024 for ARM32 users, but build-from-source option still unresolved. [@kushti, msg#25555-25557]

- **Windows ARM64 testing**: Failed with AMD 64-bit DLL loading error. Awaiting proper ARM64 Windows build. [@ccellado, msg#25643]

- **SigmaUSD negative tests**: Positive update test "reduced to false" preventing negative test addition; requires troubleshooting. [@ccellado, msg#25654]

- **V5.0 JIT vs AOT costing**: Whether JIT costing always less than AOT; dusek_ considering starting with JIT then legacy AOT for v4.0 block validation. [@dusek_, msg#25564-25565]

- **Sub-blocks implementation**: No updates reported on progress; timing and scope still TBD. [@gilgamesh_98, msg#25516]

- **Git workflow adoption**: Rebase/squash proposal needs formalization as binding rule for core developers; currently no enforcement mechanism. [@stenolog_79565, msg#25657]