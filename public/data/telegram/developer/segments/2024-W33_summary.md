# Ergo Developer Chat Summary — 2024-W33
**Period:** 2024-08-12 to 2024-08-18  
**Messages:** 162 | **Participants:** 15

---

## Key Topics Discussed

- **Sigma 6.0 Development & Testing**: Multiple PRs polished and awaiting review for new cryptographic operations. A devnet PR (#1025) created for testing Lithos protocol features (`checkPoW`, nBits methods, header serialization/deserialization). Public testnet activation timeline pending.

- **Sub-blocks & Microblock Architecture**: Discussion of optional sub-blocks for AI training data packaging with mining; consensus that implementation must maintain utility and not impose mandatory overhead. Research-stage proposal; no formal adoption decision yet.

- **Box Minimum Value Calculation (storage rent)**: Developers discovered that box value calculation (bytes × 360 nanoErgs) must account for transaction output index serialization (variable-length quantity integers), token ID map overhead, and contract script size — not just output candidate size.

- **ChainCash HTTP API & Reserve Mechanics**: First transactions executed with server HTTP API (reserve mint, note mint, note spending); contract bug found and fixed preventing note double-spend per pubkey. RAMICS paper in progress.

- **Nautilus & Fleet SDK Updates**: Nautilus Abyss v0.13.0-beta.3 released with mempool support at dApp Connector level; migrated to Fleet SDK blockchain providers. Fleet SDK v0.6.1: fixed Header#votes encoding, query pagination for 20+ addresses, set default token limit to 100 per box.

- **Paideia Generic Notification Service**: Infrastructure finished; plugins being created for on-chain transaction notifications (stake, vote confirmations) with user warnings for unconfirmed TXs.

- **Rosen Bridge EVM Integration Progress**: Health checks, guard service, watcher, and scanner now support Ethereum. First round EVM testing completed with issues being fixed; second round ongoing.

- **Explorer Rewrite in Rust**: pragmaxim returning with new RocksDB-based indexer (chain-indexer) written in Rust; expects prototype API compatibility by late October, production-ready by winter. Performance target: raspberry pi-level hardware viability.

- **Satergo Multi-Address Transfers & Token Tooling**: Unreleased features include batch sending of coins/tokens, token price feeds from Spectrum DEX, airdrop/consolidation/token-burning/demurrage tools, and optimized ERG amounts for token-only transactions.

- **Analog Ergo / Atomic Swap UI**: Simple swap market UI modeled on popular DEX interfaces; integrated pyo3 Rust library to eliminate subprocess overhead. Nautilus and Metamask integration planned.

- **Crystal Pool Mempool Monitoring**: Ongoing work on mempool monitoring service with tests; RBF (Replace-by-Fee) experimentation underway.

- **Dexy LP Redemption & Bank Actions**: LP redemption deployed; arb mint and other bank actions queued for deployment.

- **Ergo Node Refactoring**: Pre-subblocks refactoring merged (#2180); p2p message layer for subblocks under development.

- **Leveldbjni Repository Issue**: Bintray dependency no longer available (repo closed ~4 years ago). Solution options: use jar directly in lib folder (short-term) or switch to rocksdb-jni maintained by RocksDB team (long-term).

---

## Important Decisions or Announcements

- [@kushti0978, msg#29503, 2024-08-14]: Sigma 6.0 devnet PR ready; Ergo node 6.0 activation work commencing.
- [@kushti0978, msg#29427, 2024-08-12]: Bug fix for issue #2178 merged, landing in 5.0.23 release.
- [@arobsn, msg#29507, 2024-08-14]: Nautilus Abyss v0.13.0-beta.3 released with mempool support and sigma-rust v0.28.0.
- [@arobsn, msg#29507, 2024-08-14]: Fleet SDK v0.6.1 released with token limit enforcement (100 per box) and query fixes.
- [@pragmaxim, msg#29510, 2024-08-14]: New Rust-based explorer indexer announced; prototype API expected late October, production winter 2024.
- [@Pgr456, msg#29567, 2024-08-16]: Proposal to resolve leveldbjni dependency via jar inclusion or rocksdb-jni switch.

---

## Technical Q&A Worth Preserving

- **Q** (@Aberg Satergo dev, msg#29443): What is the correct way to get box size in AppKit?
  **A** (@kushti0978, msg#29471, msg#29474): Take output candidate, add 34 bytes (transaction ID + output index, both serialized with VLQ encoding). For 1000 outputs, use correct box indices instead of dummy "0" values to account for variable-length serialization. (@Aberg, msg#29480 confirmed working).

- **Q** (@Aberg Satergo dev, msg#29449): Minimum box value calculation fails at scale (1000 outputs): error says too low box value despite using bytes × 360 formula.
  **A** (@kushti0978, msg#29464): Tokens also consume space in serialization. The formula only accounts for output candidate bytes, not transaction-level overhead or token ID map size. Formula must include all contributing factors.

- **Q** (@Luivatra, msg#29542): "Malformed transaction: Scripts of all transaction inputs should pass verification" error with verification code 403 — where does this originate?
  **A** (@dusek_, msg#29548–msg#29549): Code 403 is not an error code but script cost; it indicates input script reduced to `false` on Ergo node but passed on sigma-rust. Likely difference in preheader or P2PK input construction. (@Luivatra, msg#29564 found root cause: P2S input with time-based condition had expired by submission time).

- **Q** (@Luivatra, msg#29589): What is included in tx ID calculation?
  **A** (@kushti0978, msg#29592): Tx ID is hash of transaction bytes without signatures (Ergo implements "witnesses segregation"). Different tx IDs between sigma-rust and node submission suggest serialization differences upstream.

- **Q** (@Unknown, msg#29590): Can new elliptic curves be added via soft fork?
  **A** (@kushti0978, msg#29593): Theoretically possible but complex; requires data type support and ops matching secp256k1 level of integration. Questions motivation first.

- **Q** (@mgpai, msg#29591): Does 5.0.23 have the indexed node thread issue fix?
  **A** (@kushti0978, msg#29594): Yes.

---

## Links Shared

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1025]: Sigma 6.0 devnet PR for Lithos protocol testing.
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/972, #968, #1008]: Sigma 6.0 feature PRs awaiting review.
- [https://github.com/ergoplatform/ergo/pull/2181]: Fix for issue #2178 (landing in 5.0.23).
- [https://github.com/ergoplatform/ergo/pull/2180]: Pre-subblocks refactoring.
- [https://github.com/pragmaxim-com/chain-indexer/tree/ergo-boxes]: New Rust-based Ergo indexer (RocksDB, MVP stage).
- [https://github.com/pragmaxim-com/ergo-uexplorer]: Previous Scala/ZIO explorer (reference for REST API).
- [https://github.com/ChainCashLabs/chaincash/commit/fd6eaa7955349eeaf544080a33c12e0608c3ab46]: ChainCash note double-spend fix.
- [https://explorer.ergoplatform.com/en/transactions/8df629ab852ac5e80250c193f0e842fbcd8c28fb99eb2d10e5d54081b6b77938]: ChainCash reserve mint TX.
- [https://explorer.ergoplatform.com/en/transactions/7a5f964fd95d8f4b65a9b5fae29e4dee291133b4a3d8d3222e34a24caa590e96]: ChainCash note mint TX.
- [https://explorer.ergoplatform.com/en/transactions/3fb703693bb104130f1a87b30560fd2e2bb1fca5de4f9a35fc20f619293dcf37]: ChainCash note spending TX.
- [https://github.com/rosen-bridge/]: Rosen Bridge repositories (multiple commits linked in msg#29513).
- [https://maven.scijava.org/content/repositories/public/]: Alternative Maven repo suggested for leveldbjni-all (msg#29569).
- [https://discord.gg/JaDhFjw4]: Analog Ergo community Discord (msg#29524).

---

## Unresolved Questions

- **Sub-blocks for AI data processing**: Proposal needs deeper integration research; unclear how economic incentives align with meaningful utility. (@deathgripson skeptical; @brendan8201 acknowledges technical knowledge gap).

- **Faster block times (Sigma 6.0 context)**: kushti raised implications for dApps relying on block height vs. timestamp; consensus that optimization depends on concrete application profiles. No decision on whether to pursue in 6.0.

- **Leveldbjni-all replacement timeline**: Short-term jar solution acceptable; rocksdb-jni switch deferred to post-optimization milestone. No formal timeline set.

- **Transaction ID difference (sigma-rust vs. node)**: Root cause partially identified (time-based condition expiry) but serialization discrepancy between client and node not fully debugged. Ongoing investigation.

- **Git alternative research**: @deathgripson raised force-push regressions and merge conflict brittleness; community has no consensus on replacement tool. Acknowledged as ongoing personal grievance, not ecosystem priority.

---

## Participant Summary

**Core Contributors Active This Week:**
- **kushti** (Chepurnoy): Sigma 6.0 features, Ergo node refactoring, ChainCash, response to technical questions
- **arobsn** (Alison Robson): Nautilus & Fleet SDK releases, ecosystem coordination
- **Aberg**: Satergo development (batch transfers, token tools), box sizing troubleshooting
- **pragmaxim**: Explorer rewrite announcement (returning after paternity leave)
- **Marc the Shark**: Sigmanauts Mining Pool proposal drafting
- **Luivatra**: Paideia notifications, transaction verification debugging
- **c8**: Crystal Pool mempool monitoring
- **moein_z** (via DiscordBridge): Rosen Bridge EVM integration updates

**Notable External Interest:**
- Emilio Aguilar Gutierrez: PoW blockchain fork inquiry; requirements: SHA-256, BTC-mine-compatible, Polygon bridging, multiplatform wallet, block explorer.