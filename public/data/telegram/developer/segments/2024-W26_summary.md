---
title: "Ergo Developer Chat — 2024-W26"
date_start: "2024-06-24"
date_end: "2024-06-30"
type: telegram_weekly
channel: developer
week: "2024-W26"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo Developer Chat Summary — 2024-W26

## Key Topics Discussed

- **Oracle Pool Bootstrap & Configuration**: Michael encountered issues with Oracle Pool v1 initialization, requiring manual rescans from specific block heights (around 1M). kushti confirmed the pool was launched after block 1.2M. Configuration validation is essential for proper operation.

- **Node Version 5.0.22 Stability**: kushti reported 5.0.22 still exhibits instability issues. The team discussed splitting changes: releasing 5.0.22 with only `/blockchain` slicing fixes, deferring larger changeset to 5.0.23 for extended testing.

- **Block Time & Network Security**: Discussion on whether Ergo could support 15-second block times. kushti explained the security argument against shorter blocks: max execution cost per block (8M units) requires ~8 seconds validation on average hardware, plus network propagation delays. Shorter blocks would force smaller block sizes, reducing throughput gains.

- **Atomic Transaction Dependency (ATD) Mempool Proposal**: ergomorphic presented a mempool-level design for chaining transactions atomically. Discussion covered propagation, eviction policies, mempool admission criteria, and potential spam vectors. Consensus: dApps must still handle non-atomic inclusion as failsafe; L1 enforcement would require protocol fork.

- **Light Client & Mobile Wallet Architecture**: Extended discussion on building mobile apps with Ergo. c8 advocated for automatic Ergo node bootstrapping as a system service in desktop apps (Satergo) to enable peer-to-peer trading apps without reliance on centralized explorers. Current circular problem: users don't run nodes because apps don't incentivize it; apps don't assume local nodes exist.

- **Token Registry & Metadata**: c8 explored immutable token registries, concluding a GitHub repo with CI validation is preferable to centralized service. Nautilus adding signing support for metadata changes; ergo-meta draft available as reference.

- **Storage Limits & Data Availability**: kii questioned maximum storable data on Ergo. Team confirmed ~5.7 GB daily (8 MB blocks), single TX limit 96 KB, and high miner fees for large submissions. Ergo intentionally constrains block size to prevent full-node centralization.

- **Wallet UX: BIP39 Passphrase Presentation**: Aberg discussed terminology and UI placement for mnemonic extension passphrases across wallets (Sparrow, Electrum, Satergo). Consensus: move passphrase option outside main form to prevent confusion with wallet password; label as "extend seed with passphrase" to allow arbitrary characters.

- **DeFi Contracts Ready for Optimization**: kushti noted Ergo now has concrete, stable contracts (GARD protocols, Oracle Pools, Rosen bridges, Spectrum AMM, Trade House order books) making layer-2 optimization discussions practical. Previous abstract discussions can be revisited with real workload profiling.

## Important Decisions or Announcements

- [@kushti, msg#28182, 2024-06-28]: Plan to split 5.0.22 release: include only `/blockchain` slicing fixes; defer larger changeset to 5.0.23 for stability testing.

- [@kushti, msg#28187, 2024-06-28]: Release roadmap: 5.0.22 (slicing only), 5.0.23 (current large changeset), 5.0.24 & 5.0.25 will address candidate regeneration and PR #2072.

- [@Aberg, msg#28040, 2024-06-26]: **Satergo dev update**: Improved keyboard navigation, screen reader accessibility for blind users, refined BIP39 passphrase UX, smaller app build. Upcoming: Tools section (burn tokens, combine UTXOs, airdrop).

- [@c8, msg#28041, 2024-06-26]: **Crystal Pool**: Mnemonic encryption with password in LocalStorage (survives refresh, shared across tabs via ServiceWorker). Token selection widget added; working on deposit proxy for mobile.

- [@kushti, msg#28042, 2024-06-26]: **Ergo protocol R&D**: Completed major rewrite of paging logic (PR #2167) with tests; testing 5.0.22; nearly finished Sigma 6.0 BigInt type work. **Dexy**: Discussing mainnet LP launch. **ChainCash**: Fixed Fiat-Shamir issue.

- [@arobsn, msg#28043, 2024-06-26]: **Nautilus v0.11.0 stable released** with EIP-44 support (arbitrary data signing). **Fleet SDK v0.5.0 released**. **SigmaFi**: UI revamp for usability. **sigma-rust**: Fixed WASM bundler compatibility.

- [@luivatra, msg#28044, 2024-06-26]: **Paideia**: UI fixes, migrating Danaides calls to indexed node/Crux API, contract work on treasury consolidation and min-stake proposal creation. **Crux**: Refactored DEX data backend for Spectrum/Trade House, integrating order history; Crystal Pool addition planned.

- [@Marc the Shark, msg#28045, 2024-06-26]: **Sigmanauts Mining Pool**: Dash UI moving to Flux infrastructure to reduce server load. Miner NFT register exploration (r9 register). **rsBTC Bonus Raffle passed**; finalizing swap APIs for beta.

- [@mohammmmmad, msg#28046-047, 2024-06-26]: **Rosen Bridge**: Scanner improvements (Bitcoin RPC auth, random IDs, duplicate prevention). UI: fee fetching/caching, rate limiting, Xverse wallet core logic, asset page optimization. Health-check and CLI enhancements. Discord notification package in progress.

- [@luivatra, msg#28048, 2024-06-26]: **Indexed Node GraphQL Facade** for Nautilus: Uses indexed node instead of explorer, exposes mempool as "confirmed" for real-time balance (caveat: can show incorrect balances with double-spend). Instance: http://ergolui.com:9050/graphql

- [@dΣathgripson, msg#28050, 2024-06-26]: **Analog Ergo / Atomic Swap Software**: Integrated market price APIs (Bitpanda, Kraken), automated order type updates, account generalization, fixed market server blocking with `tokio::task::spawn_blocking`, fixed ErgoScript verification bug (multiple `getHeight()` calls causing nondeterministic lock heights).

## Technical Q&A Worth Preserving

- **Q** (@Michael, msg#27979-980): Oracle Pool not found after manual rescan from 1.2M; reward datapoint box missing.  
  **A** (@kushti, msg#27981-976): Config must be in place. Oracle Pool was launched after block 1.2M, so rescan from ~1M. Verify configuration setup.

- **Q** (@mgpai, msg#27987): What is the security argument against 15-second block time on Ergo?  
  **A** (@kushti, msg#27988): Max execution cost per block (8M units) requires ~8 seconds validation on average laptop. Network propagation delays (multiple hops) compound this. Even 2 minutes is conservative; shorter blocks would force smaller block sizes, reducing throughput benefits. Miners could also issue heavy blocks to handicap competitors (verification dilemma).

- **Q** (@c8, msg#28003): How would Ergo handle DDoS spam like Cardano (10,000 TXs/min costing $15k/day) when Ergo TXs cost tiny?  
  **A** (@c8 + team, msgs#28004-028): Fee market solves this. Network has spam protection limits (ref client 4.0.44+). Nodes reject excessive TXs from single peer. Multiple peers needed for distributed spam. Mempool timeout flushes unpicked low-fee spammy TXs after ~1-2 hours.

- **Q** (@mgpai, msg#27995): WLOG?  
  **A** (@kushti, msg#27996): Without loss of generality.

- **Q** (@c8, msg#28089-093): At what layer would a mobile node communicate with full nodes using Blink SPV? How does it avoid trusting peers?  
  **A** (@kushti, msg#28087-088, msg#28094): NIPoPoWs bootstrapping queries multiple peers and compares proofs. As long as ≥1 honest peer exists, you cannot be cheated. Mobile nodes can talk to predefined + random peers for mixed trust model.

- **Q** (@c8, msg#28098-099): If I can talk to my home node, why use Blink? How do consumer trading apps work without Blink?  
  **A** (@c8, implied): Blink is for users without home nodes who want trustless mobile apps. Consumer apps need to minimize battery/traffic while maintaining security. Direct node connection works for power users; Blink + predefined/random peer mix better for mainstream users.

- **Q** (@c8, msg#28159): Any stats on how often and how deep chain reorgs occur on Ergo?  
  **A** (no response recorded).

- **Q** (@kii, msg#28139-142): If someone stores 100 GB/day on chain, what are technical consequences?  
  **A** (@Flying Pig, msg#28143): Nodes would be bloated but manageable. (@Michael, msg#28146): ~8 MB blocks = ~5.7 GB/day max. (@Michael, msg#28148, msg#28149): High miner fees required; single TX limit 96 KB; very expensive to achieve. (@c8, msg#28151): Radiant better for large data storage.

- **Q** (@Aberg, msg#28015-020): BIP39 passphrase vs. mnemonic password—best terminology and UX placement?  
  **A** (@Aberg, @Michael): "Extend seed with passphrase" clearer (allows non-words). Move to separate options section outside main form to prevent confusion with wallet password. Sparrow/Electrum/Satergo should converge on terminology.

- **Q** (@c8, msg#28068): Does Ergo have ledger/commitment to UTXO state like shown in paper?  
  **A** (@kushti, msg#28077-079): Yes. Ergo includes commitment to ledger state in block header (AVL+ tree digest over UTXO set). Enables partially stateless clients. See YouTube: https://m.youtube.com/watch?v=PHY7JnLrK5o

- **Q** (@c8, msg#28174): Can I bulk-submit chained transactions in one API request instead of one-by-one?  
  **A** (@ergomorphic, msg#28176): Proposed in ATD discussion—one API request with TX list possible, but needs mempool admission/eviction policy design. Currently requires sequential submission.

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2167](https://github.com/ergoplatform/ergo/pull/2167): `/blockchain` slicing & paging logic rewrite (kushti's major ongoing work)
- [https://github.com/ergoplatform/ergo-appkit/blob/19d8f18797f42d06a183f046c4111e0b025651d9/common/src/main/java/org/ergoplatform/appkit/SecretStorage.java#L21](https://github.com/ergoplatform/ergo-appkit/blob/19d8f18797f42d06a183f046c4111e0b025651d9/common/src/main/java/org/ergoplatform/appkit/SecretStorage.java#L21): SecretStorage class in AppKit (ergomorphic)
- [https://api.spectrum.fi/v1/price-tracking/markets](https://api.spectrum.fi/v1/price-tracking/markets): Spectrum DEX price data API (qx())
- [https://github.com/nautls/ergo-meta](https://github.com/nautls/ergo-meta): Ergo token metadata registry draft (Pgr456)
- [https://github.com/Satergo/Satergo/pull/22](https://github.com/Satergo/Satergo/pull/22): Satergo BIP39 passphrase UX PR (Aberg)
- [https://github.com/Luivatra/indexed-node-graphql](https://github.com/Luivatra/indexed-node-graphql): Indexed node GraphQL facade for Nautilus (Luivatra)
- [http://ergolui.com:9050/graphql](http://ergolui.com:9050/graphql): Test instance of indexed-node-graphql (Luivatra)
- [https://bitcoin/bips/blob/master/bip-0331.mediawiki](https://bitcoin/bips/blob/master/bip-0331.mediawiki): BIP 331 package relay (dusek_ - comparison to ATD proposal)
- [https://github.com/ergoplatform/ergo/blob/d3d95e19b37c83b98de13bdf71d6d62b398e8f0d/metrics/Report.ipynb](https://github.com/ergoplatform/ergo/blob/d3d95e19b37c83b98de13bdf71d6d62b398e8f0d/metrics/Report.ipynb): Node performance & costing report (zkastn reference)
- [https://x.com/avslesarenko/status/1806443871032979766](https://x.com/avslesarenko/status/1806443871032979766): ATD proposal announcement (ergomorphic)
- [https://github.com/ergoplatform/ergo/pull/2072](https://github.com/ergoplatform/ergo/pull/2072): Candidate regeneration work (kushti roadmap)
- [https://m.youtube.com/watch?v=PHY7JnLrK5o](https://m.youtube.com/watch?v=PHY7JnLrK5o): AVL+ tree commitment explanation (kushti)

## Unresolved Questions

- **Chain reorganization statistics** (@c8, msg#28159): Request for Ergo reorg frequency/depth data left unanswered.
- **ATD spam vector mitigation** (@Pulsarz, msg#28163-178): How eviction policy prevents mempool flooding with incomplete ATD chains remains open; ergomorphic confirmed trade-off between ATD size and propagation time but specifics TBD.
- **Mobile node architecture finalization** (@c8 vs. @dΣathgripson, msgs#28108-119): Debate ongoing whether to auto-provision light nodes in consumer apps or allow node-selection options for server-focused applications. No consensus reached.
- **Satergo auto-start of Ergo node service** (@c8, msgs#28117-131): Technical design for automatic background Ergo node bootstrapping in Satergo as system service discussed but not yet committed. Aberg confirmed Satergo already downloads latest build but autostart/system service integration status unclear.
- **5.0.22 release timeline** (@kushti, msg#28182): Final decision on whether to release 5.0.22 with slicing-only fixes vs. postpone pending confirmed on msg#28187 (slicing-only approach chosen, but timing TBD).