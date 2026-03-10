---
title: "Ergo Developer Chat — 2025-W39"
date_start: "2025-09-22"
date_end: "2025-09-28"
type: telegram_weekly
channel: developer
week: "2025-W39"
source: telegram
message_count: 76
categories: [technical, governance, defi, wallet, ecosystem, bridges]
key_terms: [dataInputCost, transaction inputs, mempool, miners, protocol parameters, 6.0 activation, soft-fork, protocol upgrade, testing, subblocks, input blocks, node wallet, devnet node, mining, node syncing, height decoupling, logs, coding agents, LLMs, test generation]
---
# Ergo Developer Chat Summary — Week 2025-W39

## Key Topics Discussed

- **Sub-blocks (input/ordering blocks) R&D**: kushti reported progress on fixing issues and successfully running transaction stream generation. Work ongoing on mempool and node wallet support for sub-blocks. [@kushti khushi, msg#36090, 2025-09-24]

- **6.0 Protocol Activation & Testing**: Multiple PRs under review for 6.0 activation tests in both the main Ergo repository and sigmastate-interpreter. Emphasis on expanding test coverage, especially for Sigma protocol operations. [@kushti khushi, msg#36092, 2025-09-24]

- **Coding Agent Guidelines (Crush)**: PR #2242 establishes rules for using AI coding agents—permitted for test generation (with 50% of meaningless code needing removal), but prohibited for non-testing code. kushti notes agents need multiple iterations and context management but can help address test coverage gaps, especially for tedious p2p layer tests. [@kushti khushi, msg#36071, msg#36074, 2025-09-23]

- **Data Input Limits & Mempool Parameters**: kushti clarified that the number of data inputs is limited by the `dataInputCost` parameter and transaction size limits. Recommends evaluating raising `dataInputCost` after 6.0 activation via miner voting. Maximum single-transaction inputs under Schnorr signature (p2pk) estimated at 500–600. [@kushti khushi, msg#36041, msg#36046, 2025-09-22]

- **USE Stablecoin Deployment**: Planning deployment this week; first required tokens to be issued. [@kushti khushi, msg#36094, 2025-09-24]

- **Basis/ChainCash Development**: Raw demo of basis tracker server completed; discussions ongoing regarding contract design and possible extensions. [@kushti khushi, msg#36093, 2025-09-24]

- **Nautilus Wallet Expansion**: Added Javanese and Malaysian (Melayu) language support. Anon_BR reports added Ergo node client and ongoing work on mempool tracking. [@anon_br Σ, msg#36091, 2025-09-24; CHRIS45 | NEW, msg#36098]

- **Hermes Development**: Realtime, mempool-aware box streamer on top of indexed node—initially designed for Machina Finance but intended for generic dApp use and potential GraphQL replacement on Nautilus. [@Michael, msg#36109, 2025-09-24]

- **Game of Prompts Progress**: Judge system implementation completed; main features now in place. Current scaling supports 20–50 participants; work underway to support unlimited/extremely high participant counts. Reputation system revision needed due to issues when judges have many opinions. [@Josemi, msg#36101, 2025-09-24]

- **Rosen Bridge Infrastructure**: ESLint configuration standardization across guard-app, rosen-app, and watcher-app; UI Kit package improvements. [@DiscordBridge (zargarzadehmoein), msg#36096, 2025-09-24]

- **CyberVerse Gameplay Updates**: NPC/player name styling improvements, ultra-smooth camera follow, and Character Dash first version in testing. [@DiscordBridge (pxl), msg#36113, 2025-09-25]

- **RocksDB Migration in Node v6.1**: Database upgrade from LevelDB (v6.0) to RocksDB (v6.1) reported as stable for months; Docker images available. [@Pulsarz, msg#36118, 2025-09-28]

## Important Decisions or Announcements

- **Weekly Ergo Developers Chat Scheduled**: [@DiscordBridge (kushti), msg#36075, 2025-09-23] — Session held Wed, Sep 24th at 1PM UTC; focus on financial contract development feedback, 6.0 soft-fork, sub-blocks, sidechains, L2, and AI research.

- **6.0 Node Version Update & Testing**: kushti asked @Patato55 to update to latest commit and avoid mining/transaction generation for controlled testing. Updated snapshot version `6.0.1-297-af443163-SNAPSHOT` deployed. [@kushti khushi, msg#36042, msg#36070, 2025-09-22–23]

- **Perps + LST + Yield Collateralization Protocol Idea**: @yeahokai proposed a multi-phase protocol using sub-blocks for perpetuals, protocol fees to power an LST for ERG, then yield collateralization. Seeking developer interest. [@yeahokai, msg#36079, 2025-09-23]

- **Node Database State Clarification**: When booting v6.1.0 from scratch, LevelDB folders (`ldb_main`, `ldb_undo`) still appear in `.ergo/state` — appears to be correct behavior per v6.1.0 migration. [@DiscordBridge (Luca D'Angelo), msg#36123, 2025-09-28]

## Technical Q&A Worth Preserving

- **Q** (@Josemi): What is the maximum number of inputs that have been spent in a single transaction?  
  **A** (@kushti khushi): Depends on the protecting condition. For Schnorr signature (p2pk address), approximately 500–600 inputs are feasible. [@kushti khushi, msg#36046, 2025-09-22]

- **Q** (@yeahokai): How can development costs be bootstrapped without creating a new token?  
  **A** (@HQΣr | Wont Dm): Multiple options exist: (1) use MewFinance fund with proportional token distribution, then lock those tokens on MewLock with APR; (2) alternatives available via Stability Nexus' Beene or other mechanisms. [@HQΣr, msg#36061, 2025-09-23]

- **Q** (@DiscordBridge, Josemi): What is USE [stablecoin]?  
  **A** (@Michael): dexyusd — USE stablecoin is part of the Dexy ecosystem. [@Michael, msg#36107, 2025-09-24]

- **Q** (@DiscordBridge, Josemi): What is hergmes?  
  **A** (@Michael): A realtime, mempool-aware box streamer on top of the indexed node. Initially designed for Machina Finance but intended to be generic enough for any dApp and potentially replace GraphQL on Nautilus. [@Michael, msg#36109, 2025-09-24]

- **Q** (@Luca D'Angelo): Is RocksDB already available in node release?  
  **A** (@Pulsarz): Yes; use v6.1 versions. v6.0 uses LevelDB; v6.1 uses RocksDB and has been stable for months. [@Pulsarz, msg#36118, 2025-09-28]

- **Q** (@Luca D'Angelo): Docker image availability for RocksDB version?  
  **A** (@Pgr456): Docker images available; provided Docker Hub link to v6.1.0 image. [@Pgr456, msg#36120, 2025-09-28]

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2240]: 6.0 activation tests PR (needs review)
- [https://github.com/ergoplatform/ergo/pull/2241]: Code coverage support PR (testing phase, do not review yet)
- [https://github.com/ergoplatform/ergo/pull/2242]: Crush coding agent rules PR (testing, review needed)
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1077]: More 6.0 tests for Sigma (needs review)
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1079]: Bulletproofs verification test (in progress, many items ahead)
- [https://github.com/nautls/nautilus-wallet/pull/316]: Nautilus Wallet Javanese language support
- [https://github.com/nautls/nautilus-wallet/pull/317]: Nautilus Wallet Malaysian language support
- [https://hub.docker.com/layers/ergoplatform/ergo/v6.1.0/images/sha256-a08635375b69c5ba277a206f9b290fd3d4adbb67899fa5469196a7b9f2af1712]: Ergo v6.1.0 Docker image with RocksDB
- [https://2e36604c10bc.ngrok-free.app/info]: Patato's devnet node (testnet mining setup)
- [https://ee8785ec6e42.ngrok-free.app/info]: Patato's updated devnet node (v6.0.1-320-4c6fd015-SNAPSHOT)
- [https://docs.stability.nexus/about-us/the-stable-order/cats]: CATs token standard documentation (for funding mechanism alternatives)

## Unresolved Questions

- **Bulletproofs Verification in ErgoScript**: kushti still working on completing bulletproofs verification test with "a lot of things ahead." Status: in progress, timeline unclear. [@kushti khushi, msg#36092, 2025-09-24]

- **Sub-blocks Mempool & Wallet Support**: Implementation partly done; full completion timeline not specified. [@kushti khushi, msg#36090, 2025-09-24]

- **Devnet Node Sync Issue**: @Patato's node became decoupled from seed node (stuck at height 26050 vs. seed at 27670) after 12+ hours with mining disabled. Logs requested but root cause undetermined. [@Patato, msg#36081; @kushti khushi, msg#36082, 2025-09-24]

- **Perps Protocol Developer Interest**: @yeahokai seeking developers to build multi-phase perps + LST + yield collateralization protocol; no commitments reported yet. [@yeahokai, msg#36100, 2025-09-24]

- **USE Stablecoin First Token Issuance**: Announced for "this week" (week of Sep 23) but no deployment confirmation yet. [@kushti khushi, msg#36094, 2025-09-24]

---

**Summary**: Week 2025-W39 was moderately active with steady protocol R&D on sub-blocks, 6.0 testing infrastructure, and ecosystem tool development (Nautilus, Hermes, Rosen Bridge). Focus shifted toward test expansion and coding agent governance. No major breaking announcements, but several projects (USE, perps protocol) in deployment/recruitment phases.