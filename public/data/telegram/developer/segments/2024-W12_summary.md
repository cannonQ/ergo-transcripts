---
title: "Ergo Developer Chat — 2024-W12"
date_start: "2024-03-18"
date_end: "2024-03-24"
type: telegram_weekly
channel: developer
week: "2024-W12"
source: telegram
message_count: 171
categories: [technical, ecosystem, mining, defi, bridges, governance, wallet, community]
key_terms: [release, PR review, compilation, v5.0.21, v5.1.0, sidechains, BIP 300/301, merged mining, PoS, peg designs, blockly, visual programming, offchain generator, DApp development, miner rewarder, Dark Erdoge, hashrate decentralization, DErdoge token, Paideia, DAO contracts]
---
# Ergo Developer Chat — 2024-W12 Summary

## Key Topics Discussed

- **Sidechain Research & Publishing**: kushti completed review of sidechain peg designs (BIP 300/301, relay constructions from ErgoHack), and plans to publish comprehensive sidechaining documentation covering merge-mined, dedicated mining, and PoS variants on Ergo [@DiscordBridge, msg#26016, 2024-03-20].

- **Ergo Protocol Releases (5.0.21 & 5.1.0)**: PR reviews ongoing for 5.0.21 finalization; P2SH disabled again via PR #2140 pending Sigma 5.0.14 release decision [@DiscordBridge, msg#26016, 2024-03-20].

- **Dexy Mainnet Deployment**: Pay-to-dev-emission script for GORT deployed on mainnet; buyback contract, tracking contracts, bank and LP pending; offchain integration being verified with modified Spectrum bots [@DiscordBridge, msg#26016, 2024-03-20].

- **Paideia DAO MVP Progress**: Implemented ErgoScript preprocessor for code reuse (`#import` directive), refactored staking rewards to draw from DAO treasury on emission rather than pre-locking, added generic refund and config deserialization logic; targeting EIP-5 migration after MVP completion [@DiscordBridge, msg#26017, 2024-03-20].

- **SigmaUSD Contract Work**: Minting, updating, and v1/v2 comparison bank scripts under PR review [@DiscordBridge, msg#26022, 2024-03-20].

- **Sigmanauts Mining Pool UI v2**: Dashboard multi-user bug investigation; complete redesign with front page, mobile-friendly main dashboard, URL navigation by mining address; target launch 3/29; new effort feedback visualization plot implemented [@Marc the Shark, msg#26018, msg#26020, 2024-03-20].

- **DarkErdoge Miner Rewarder**: Live since 2024-03-17 (100k DarkErdoge); distributes 20 DarkErdoge every 144 blocks to solo miners or random pool miners <25% hashrate; 10k sent to Erdoge revival event, 15k to Sigmanauts pool [@DiscordBridge, msg#26014, 2024-03-20].

- **ChainCash**: New video published; private contributor group transitioning to public with recruitment underway [@DiscordBridge, msg#26016, 2024-03-20].

- **Blockly/Block Diagram Support for Non-Technical Users**: kushti proposes Blockly support for ErgoScript generation (e.g., signature and timelock combinations) with 1K SigmaUSD bounty; Christophe Garant expresses interest in using Simulink/Stateflow-style visual coding [@kushti khushi, msg#26000, msg#26009, 2024-03-18 to 2024-03-19].

- **THz.FM Music & Cyberverse Partnership**: Live streamed 30+ hours music event (19h + 13h streams); in talks with UI/frontend developers; provided original music for Cyberverse default soundtrack [@DiscordBridge, msg#26021, 2024-03-20].

- **Atomic Swap Software**: Password encryption integration, code refactoring, live pricefeed and UI improvements pending; modularity for chain switching and BTC Lightning/L1 swap integration planned [@DiscordBridge, msg#26023, 2024-03-20].

- **Stablecoin Design Inquiry**: New team (10 developers) seeks guidance on building fiat-backed stablecoin with on-chain verification and non-custodial backing; qx() notes SigmaUSD exists and challenges custody model feasibility; proposal to leverage NFT tokenization discussed [@DiscordBridge, msg#26065 onwards, 2024-03-24].

- **Node Extra Indexes Issue**: v5.0.20 users report error enabling extra indexes; unconfirmed whether linked to RocksDB or v5.0.20 changes; test suite gap identified [@arobsn, msg#26107, 2024-03-24; kushti, msg#26144].

## Important Decisions or Announcements

- [@DiscordBridge/ccellado, msg#25968, 2024-03-18]: Integration tests for Ergo node PR #2139 approved and merged.

- [@DiscordBridge/kushti, msg#26016, 2024-03-20]: Weekly Ergo Developers chat scheduled for Wed, Mar 20, 1PM UTC with core & community developers.

- [@DiscordBridge/kushti, msg#26016, 2024-03-20]: Community chat on Gluon / Dexy / SigmaUSD stablecoin variants and ChainCash planned for Friday; see https://x.com/ergo_platform/status/1770277931975106810

- [@DiscordBridge/kushti, msg#26027, 2024-03-21]: PR #2100 merged for mainnet.

- [@DiscordBridge/kushti, msg#26040, 2024-03-21]: `Some(...)` type handling planned for Sigma v6.0 per sigmastate-interpreter issue #462.

- [@DiscordBridge/kushti, msg#26045, 2024-03-22]: Develop branch now on par with master; new PRs target v5.0.14-RC branch directly, then master; master will merge back to develop post-release.

- [@DiscordBridge/kushti, msg#26144, 2024-03-24]: Issue #2141 opened for extra indexes test suite gap to diagnose v5.0.20 behavior.

## Technical Q&A Worth Preserving

- **Q** (@jossemii, msg#25972): Which Rust crate is current for connecting reputation system to Ergo — ergo-headless-dapp-framework (last commit 2 years ago) or ergo-node-interface-rust?
  **A** (@DiscordBridge/kushti, msg#25974): The latter (ergo-node-interface-rust) is more reliable; Headless Dapp framework likely unused since SigmaUsd.io backend.

- **Q** (@dusek_, msg#26024): Will PR #2100 be merged for 5.0.21?
  **A** (@DiscordBridge/kushti, msg#26025, msg#26027): PR will be checked; subsequently merged on 2024-03-21.

- **Q** (@ergomorphic, msg#26029): What is the difference between master and develop branches in Sigma now?
  **A** (@DiscordBridge/ergomorphic, msg#26043): Develop is default branch for PRs, master is for releases (standard practice).
  **Counter**: (@kushti, msg#26044, msg#26045): Develop and master are currently on same commit (v5.0.14-RC); new PRs go directly into v5.0.14-RC, then to master; master merges back to develop post-release.

- **Q** (@tonymas31, msg#26067): Does Ergo have a development kit link? Do Ergo oracles only work with Ergo tokens?
  **A** (@DiscordBridge/qx, msg#26068): Dev tools: https://ergoplatform.org/en/blog/2021-06-10-building-ergo-developer-tools/ ; Oracle reports on-chain for Ergo only but can be programmed with any data feed (open source). Ergo Mobile Wallet has Mosaik framework for dApp integration.

- **Q** (@tonymas31, msg#26075): Is your stablecoin fiat-backed or algorithmic?
  **A** (@DiscordBridge/tonymas31, msg#26078): Fiat-backed; DAO creates Ergo wallet, deposits fiat to generate stablecoins with advance mining/equity reserves.

- **Q** (@__daddychill__, msg#26145): Is there a CLI utility (like ergo-paper-wallet) to generate wallets offline?
  **A** (@Unknown, msg#26146, msg#26148): Ergo node itself can initialize offline and generate seed via CLI using `/wallet/init` API endpoint with curl (requires api_key and password strings).

- **Q** (@arobsn, msg#26107): Node user reports error enabling extra indexes; what is root cause?
  **A** (@DiscordBridge/kushti, msg#26144): Likely not v5.0.20 or RocksDB-related (RocksDB not in 5.0.x); test suite gap identified; issue #2141 opened.

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2139#pullrequestreview-1942519805]: PR review for integration tests (kushti approval comments).

- [https://github.com/ergoplatform/ergo-headless-dapp-framework/tree/main]: Ergo Headless Dapp Framework (2 years since last commit; superseded by ergo-node-interface-rust).

- [https://github.com/ergoplatform/ergo-node-interface-rust]: Recommended Rust interface for Ergo node integration.

- [https://github.com/ergoplatform/ergo/pull/2131]: PR under review for 5.0.21/5.1.0 with compilation failures.

- [https://cdn.discordapp.com/attachments/669989266478202917/1219400605592850463/image.png]: Article on scalability as adoption driver (from @upwindstrategy).

- [https://twitter.com/TheAvatarNick/status/1769797248802574600]: Source tweet on scalability needs.

- [https://www.ergoforum.org/t/physical-or-digital-gold-simple-insurance-on-ergo/4715]: Ergo Forum thread on gold insurance use case (motivation for Blockly support).

- [https://github.com/ergoplatform/ergo/pull/2140]: PR disabling P2SH pending Sigma 5.0.14 decision.

- [https://github.com/ergoplatform/ergo/pull/2139]: Merged integration tests PR.

- [https://youtu.be/fk8ZFvNFDYc]: ChainCash video (newly published).

- [https://x.com/ergo_platform/status/1770277931975106810]: Twitter announcement for community chat on Gluon/Dexy/SigmaUSD variants & ChainCash (Fri).

- [https://github.com/ergoplatform/eips]: EIP repository (README table missing EIP-15 and others; editorial guidelines needed per BIP-0001 model).

- [https://github.com/ergoplatform/ergo/issues/2141]: Issue for extra indexes test suite gap.

- [https://github.com/ergoplatform/ergo/issues/2133]: Existing issue on extra indexes error in v5.0.20.

- [https://github.com/ergomorphic/sigma/issues/462]: Sigmastate-interpreter issue on `Some(...)` type for v6.0.

- [https://www.ergoforum.org/t/bootstrapping-of-gold-oracle-pool-and-dexy/4660/2]: Dexy & Dexy Gold Oracle Pool bootstrap discussion.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/issues/462]: Same as above (Sigma v6.0 feature tracking).

- [https://explorer.ergoplatform.com/en/addresses/9hZt38EaMTfrh8xNhQAgdpHdMp6H2nveKV1P2AgNdjD4PPRHi5m]: DarkErdoge miner rewarder wallet tracker.

- [https://ergexplorer.com/transactions#bcdec8e6a5f6d6550a726d5270ba11bce48e26c46447e941204b86917242fcb8]: Transaction link for 100k DarkErdoge to MGpai.

- [https://twitter.com/THz__fm/status/1769433987205017617]: THz.FM 19-hour music livestream.

- [https://twitter.com/THz__fm/status/1769407939427946587]: THz.FM 13-hour music livestream.

- [https://twitter.com/CyberVerse_io/status/1768997939056173144]: Cyberverse partnership announcement (THz.FM music collab).

- [https://github.com/mgpai22/miner-rewarder]: DarkErdoge miner rewarder codebase (live 2024-03-17).

- [https://twitter.com/c8e4d2/status/1770862730620051603]: Tweet shared by @CW (content not specified in log).

- [https://ergoplatform.org/en/blog/2021-06-10-building-ergo-developer-tools/]: Ergo Developer Tools documentation.

- [https://discord.gg/WpGMk8jV]: Bruno's Stability Alliance Discord (SigmaUSD/Gluon/Djed stablecoin community).

- [https://en.wikipedia.org/wiki/AMD–Chinese_joint_venture]: AMD–China joint venture background (hardware security discussion).

- [https://github.com/ergoplatform/ergo/pull/2100]: PR merged for mainnet (date 2024-03-21).

## Unresolved Questions

- **Blockly Code Generation for Non-Technical Users**: kushti proposed 1K SigmaUSD bounty for Blockly ErgoScript generator (signature & timelock combinations) and preprocessor; Christophe Garant interested but implementation status unclear — awaiting volunteer developer [@kushti khushi, msg#26000, msg#26009, 2024-03-18 to 2024-03-19].

- **EIP Editorial Standards & README Table Maintenance**: EIP repository README lacks EIP-15 and possibly others; @CannonQ acknowledged but on holiday; no assigned owner or standard process defined [@kushti, msg#26026, msg#26028, 2024-03-20 to 2024-03-21].

- **Stablecoin Self-Custody Model Viability**: New team proposes fiat-backed stablecoin with on-chain verification, non-expiring self-custody, and mandatory payments (fee model) for storage; qx() argues true self-custody incompatible with payment-enforcing smart contracts; team acknowledged challenge but deferred technical solution to testnet iteration [@DiscordBridge, msg#26073 onwards, 2024-03-24].

- **Faster Block Times & Timestamp-Based Contracts**: Discussion on whether reducing block time (<2 min) would affect contracts dependent on block height vs. timestamp; no conclusive decision reached; kushti offered testnet channel for empirical research if volunteer leader steps forward [@DiscordBridge, msg#26016, 2024-03-20].

- **Merge Sidechain Data Delivery & Trustless Relay**: kushti mentioned intent to publish Ergo-specific sidechain constructions (BIP 301-style pegging, emission contracts for mainchain miner rewards) but implementation details for trustless relay still in progress [@DiscordBridge, msg#26016, 2024-03-20].

- **Spectrum Bot Integration for Dexy Mainnet**: offchain component for Dexy buyback/tracking/bank/LP contracts requires verification with Spectrum bots; exact blockers not detailed [@DiscordBridge, msg#26016, 2024-03-20].

- **Dark Erdoge Nautilus Icon PR Approval**: PR pending since January 5 for Dark Erdoge icon addition to Nautilus wallet; blocked on @capt_nemo429 review [@DiscordBridge, msg#26015, 2024-03-20].

- **Node Extra Indexes Error Root Cause**: v5.0.20 users unable to enable extra indexes; suspected not v5.0.20 or RocksDB-related but no tests exist to isolate cause [@DiscordBridge/kushti, msg#26144, 2024-03-24].