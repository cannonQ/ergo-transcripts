---
title: "Ergo Developer Chat — 2024-W37"
date_start: "2024-09-09"
date_end: "2024-09-15"
type: telegram_weekly
channel: developer
week: "2024-W37"
source: telegram
message_count: 85
categories: [technical, defi, mining, governance, wallet, bridges, community]
key_terms: [node wallet, MaxInputsExceededError, 100 inputs limit, ergo.conf, transaction assembly, 5.0.23 release candidate, thread pools, block processing, mining, Raspberry Pi testing, Sigma 6.0, numeric methods, unsigned big int, devnet, sigmastate-interpreter, sub-blocks, P2P messages, candidate generation, internal miner, ChainCash]
---
# Ergo Developer Chat Summary — 2024-W37
**Period:** 2024-09-09 to 2024-09-15  
**Participants:** 11 community developers and core team members  
**Message Count:** 85

---

## Key Topics Discussed

- **Node Wallet UTXO Input Limits**: Discussion of the 100-box maximum transaction input restriction in the node wallet, which differs from the actual node protocol limit. Configurable via `application.conf` parameter.

- **Ergo Protocol 5.0.23 & 5.0.24 Release Candidates**: Thread pool reworking in 5.0.23 now uses a single non-default pool for critical threads (block processing and mining). Candidate being tested on production servers; Raspberry Pi testing encouraged.

- **Sigma 6.0 Unsigned BigInt Implementation**: New numeric methods being tested; unsigned big int PR mostly complete and will enable new testnet (DevNet) release for sub-blocks feature.

- **Sub-Blocks P2P Protocol**: Basic p2p messages implemented for announcing/requesting sub-blocks and transmitting transactions. Internal miner modifications underway for candidate generation to begin initial DevNet testing.

- **ChainCash Development**: API methods documentation added to README; note redemption and indexing features completed and reviewed (PRs #55, #56).

- **Dexy Token Issuance & ErgoDex Integration**: All tokens issued; final PR for ErgoDex integration in progress. Payout action under review before deployment.

- **Storage Rent Dashboard**: New sigmaspace.io storage rent tracking tool launched, indexing completed in under 24 hours. Tracks upcoming rent-liable boxes and collects statistics for 24h/7d/30d windows.

- **Rosen Bridge MetaMask Integration & eRSN Support**: Watcher app v2.3.0 and service v3.2.1 released with eRSN token support, message retry implementation, and periodic reward collection.

- **Sigmanauts Mining Pool Storage Rent Testing**: Test server running on mainnet collecting ~30 ERG in storage rent over ~24 hours from cleanup starting at block 287000. New server deployment underway.

- **Fleet SDK v0.6.4 Release**: Blockchain provider retry logic, stream method fixes, and UTXO diff calculation corrections for multi-token scenarios.

- **Nautilus Wallet TX History Improvements**: Roadblocks identified in current explorer; community progress resumed with @pgr456 assistance for smoother mempool chaining UX.

- **Paideia DAO for Cornell AAP Students**: Student DAO created with token staking tutorial. Planned digital economy features: printing/plotting payments, tool trading, fines, and p2p transactions. DAO reset annually as cohorts graduate.

- **Celaut Reputation & Payment System**: Reputation system for nodes completed; payment system actively under development with Sigma reputation panel updates.

- **Stable Order Apprenticeship Programme**: Mentorship program seeking experienced Ergo developers to guide apprentices on contract implementation (e.g., HODLcoin). Simple, interesting starter projects.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#30128, 2024-09-11]: Weekly Ergo Developers chat scheduled for Wed, Sep 11th 1PM UTC to discuss development updates, 5.0.23/5.0.24/6.0 releases, and dApp feedback.

- [@kushti khushi, msg#30157, 2024-09-12]: Bounty attached to GitHub issue #2184 for development work; simpler starter issue #2185 also available.

- [@qx(), msg#30131, 2024-09-11]: Sigmanauts Mining Pool storage rent test server running on mainnet; automatic rent collection operational; hash migration to cheaper server in progress.

- [@Pgr456, msg#30139, 2024-09-11]: Launched sigmaspace.io storage rent dashboard with full blockchain indexer and public explorer API (compatible drop-in replacement for ergoplatform.org API) planned for roadmap.

- [@moein_z, msg#30138, 2024-09-11]: Rosen Bridge watcher-app v2.3.0 and watcher-service v3.2.1 released with eRSN support and improved health monitoring.

- [@arobsn, msg#30137, 2024-09-11]: Fleet SDK v0.6.4 released with blockchain provider reliability and UTXO handling improvements.

- [@kushti khushi, msg#30170, 2024-09-15]: AppKit release planned for Tuesday; depends on sigmastate snapshot dependency resolution.

---

## Technical Q&A Worth Preserving

- **Q** (@Michael, msg#30099): Node wallet failing with "MaxInputsExceededError" when attempting to send more than 100 UTXOs in a single transaction.
  **A** (@Pulsarz, msg#30101-102): Input limit is configurable in `ergo.conf` via the parameter at [application.conf#L309](https://github.com/ergoplatform/ergo/blob/0850e07a4556256193beac7cac1a563d3a73a486/src/main/resources/application.conf#L309). Not a hard protocol restriction—wallet-level setting only.

- **Q** (@Aberg Satergo dev, msg#30166-167): Why does `DerivationPath.fromEncoded("m/44'/429'/0'")` return a path with an initial 0 in decodedPath, breaking equality checks with DerivationPaths created from ints?
  **A** (@kushti khushi): Unresolved; discussion ongoing regarding idiomatic Scala/Java interop for serialization (msg#30173-174).

- **Q** (@jossemii, msg#30122): Should `getInputBoxCovering` parameters filter boxes for those with specific token amounts, or does it return all boxes from the sender's spending script?
  **A** (@mgpai, msg#30123-124): Function returns boxes meeting specified value, address, and token requirements. For custom filtering, write a custom box selector; referenced working example in [miner-rewarder input-selecter.ts](https://github.com/mgpai22/miner-rewarder/blob/e15c23ac62c2a990bb002376295c51fcddd443ca/src/utils/input-selecter.ts#L4).

- **Q** (@nicolavon, msg#30160): How to securely construct ECDSA signatures locally without passing private key to `/wallet/transaction/sign` endpoint?
  **A** (@kushti khushi, msg#30163-164): Use external libraries: ErgoAppKit (Java/JVM), SigmaRust (Rust + bindings), Fleet (JS/TS), or ergo-wallet (Java) for local signing.

- **Q** (@qx(), msg#30179): Why does miner lock when deathgripson's testnet node goes ahead and offline?
  **A** (@deathgripson, msg#30181-182): Enable offline generation in node config; resolved a prior restart issue. Note: (@qx(), msg#30186) questioned whether both nodes should have offline generation disabled to avoid choking each other.

- **Q** (@Aberg Satergo dev, msg#30173-174): How to idiomatically call `ContextExtension.serializer$.MODULE$.serialize()` from Java without Scala module syntax?
  **A** (@ergomorphic): Unresolved; standard `.serialize()` method access attempted but failed.

---

## Links Shared

- [Ergo AppKit PR #239](https://github.com/ergoplatform/ergo-appkit/pull/239): DerivationPath and signing improvements; awaiting review and Tuesday release.

- [Ergo Protocol PR #2169](https://github.com/ergoplatform/ergo/pull/2169): 5.0.23 thread pool reworking; Raspberry Pi testing requested.

- [SigmaState PR #1017](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1017): New numeric methods for Sigma 6.0 unsigned BigInt (merged into unsigned PR).

- [ChainCash PR #56](https://github.com/ChainCashLabs/chaincash-rs/pull/56): Note redemption implementation; reviewed and approved.

- [ChainCash PR #55](https://github.com/ChainCashLabs/chaincash-rs/pull/55): Note indexing by holder pubkey; reviewed and approved.

- [ChainCash API Documentation](https://github.com/ChainCashLabs/chaincash-rs): README updated with API method descriptions.

- [Rosen Bridge Watcher v2.3.0](https://github.com/rosen-bridge/ui/releases/tag/watcher-app-2.3.0): eRSN integration and bug fixes.

- [Rosen Bridge Watcher Service v3.2.1](https://github.com/rosen-bridge/watcher/releases/tag/3.2.1): eRSN support and health check improvements.

- [SigmaSpace Storage Rent Dashboard](https://sigmaspace.io/en/storage-rent): Live tracking of upcoming storage rent claims and statistics.

- [Sigmanauts Mining Pool Mega Core](https://github.com/marctheshark3/sigs-mega-core): Containerized pool operator tooling (ongoing maturation).

- [Mining Wave Containers](https://github.com/marctheshark3/mining-wave): Database mirroring containers.

- [Miner View UI](https://github.com/marctheshark3/miner-view): Minimal dashboard containers.

- [MewFinance Smart Contracts](https://escript.online/?s=eJztV21P40YQ...): Escrow and order matching contract implementations referenced via escript.online.

- [Ergo GitHub Issue #2184](https://github.com/ergoplatform/ergo/issues/2184): Bounty-attached development task.

- [Ergo GitHub Issue #2185](https://github.com/ergoplatform/ergo/issues/2185): Starter-friendly bounty task.

- [Cornell AAP DAO](https://app.paideia.im/cornellaapdao24-25): Live student governance and digital economy pilot.

- [Stable Order Apprenticeship Programme](https://docs.stability.nexus/about-us/the-stable-order/join-the-stable-order/apprenticeship): Mentor recruitment for smart contract learning.

- [ErgoPy AppKit Reference](https://github.com/mgpai22/ergpy/blob/3216540c163dc6382c93e3288b7871aa0eeeea8e/ergpy/appkit.py#L169): Input box covering function documentation.

- [MinerRewarder Input Selector Example](https://github.com/mgpai22/miner-rewarder/blob/e15c23ac62c2a990bb002376295c51fcddd443ca/src/utils/input-selecter.ts#L4): Custom box selection pattern for Ergo.

---

## Unresolved Questions

- **AppKit DerivationPath Equality Issue** (@Aberg Satergo dev, msg#30166-167): Root cause of `.fromEncoded()` initialization with leading 0 breaking int-constructed path equality not yet diagnosed.

- **Java Serialization Idiom** (@Aberg Satergo dev, msg#30173-174): No idiomatic Java syntax found for calling Scala module-based serializer; standard method approach fails.

- **Testnet Offline Generation Trade-off** (@qx(), msg#30186-187): Unclear whether both miner and node should enable/disable offline generation simultaneously or if asymmetric config is acceptable.

- **ErgoDex/MewFinance Source & Maintenance** (@kushti khushi, msg#30113): Clarification sought on which contracts are currently active in MewFinance and where canonical source code lives (response: Aco provided Escript links but maintainer unclear).

- **Unknown Fork Operator** (@qx(), msg#30107-111): Identity of https://www.ergodex.com operator remains unconfirmed; possible selective scam flagged but not investigated.

---

**Note:** This week featured primarily implementation updates and mentorship/education initiatives. No major protocol disagreements or blocked decisions identified. Release cadence for AppKit/node versions on track.