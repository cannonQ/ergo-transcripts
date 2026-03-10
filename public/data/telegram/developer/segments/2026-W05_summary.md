---
title: "Ergo Developer Chat — 2026-W05"
date_start: "2026-01-26"
date_end: "2026-02-01"
type: telegram_weekly
channel: developer
week: "2026-W05"
source: telegram
message_count: 187
categories: [technical, wallet, defi, ecosystem, community]
key_terms: [node release, version 6.0.2, version 6.1.2, extra indices, docker integration tests, sub-blocks, input blocks, ordering blocks, devnet, fork synchronization, blockInterval, explorer-backend, sigma-rust, deserialization versioning, ergo tree pretty printing, DEX code removal, GraphQL, node health checks, load balancer, endpoint routing]
---
# Ergo Developer Chat — 2026-W05 Summary

## Key Topics Discussed

- **Sub-blocks / Input-ordering blocks testing**: kushti deployed a devnet to test input-ordering blocks (weak-blocks branch) with two mining peers. Initial parameters (30s block interval, 60 input blocks per ordering) caused severe fork proliferation in RAM. After fixing bugs and re-launching with 60s block interval, the network stabilized. Multiple testers (Patato, Netim, Sigmanaut) joined testing, though some encountered sync issues requiring database resets.

- **Explorer backend and sigma-rust compatibility**: Explorer backend updated to sigma-rust 6.0.x with deserialization versioning. A parsing divergence in sigma-rust v0.28.0 broke Spectrum DEX backend; switching to develop branch resolved it. Removed DEX-related API methods and moved ErgoTree pretty-printing from unmerged sigma branch to explorer.

- **Node infrastructure and monitoring**: Infrastructure dashboard enhanced to check both indexed height and full height on nodes (5-minute refresh), flagging mismatches >5 blocks to detect stuck indexers. GQL server pointed to single node (.49 was syncing; redirected to .213). Single URL redirect created at `infra-p2p.ergoplatform.com`. Health-check and failover mechanisms for GQL identified as needed.

- **Vibe-coded projects and hackathon feedback**: kushti reviewed Unstoppable hackathon submissions and assessed most as 100% AI-generated (vibe-coded). Concluded hackathons in their current form are ineffective as discovery mechanisms. arkadia shared a desktop Ergo DeFi app (Tauri + Rust/React) with ErgoPay, Nautilus, SigmaUSD, Dexy, and DuckPools Lending integration—node-only, no third-party APIs, keys never touch app.

- **Contract development (Machina Finance)**: anon_br fixed critical input aggregation bug in limit order contract when fulfilling orders and refunding to owner. E2T limit contract finished with 100% test coverage, ready for review. SDK progressing.

- **Stable swap pools on Ergo**: Luivatra (from Cardano Sundae stable swap launch) exploring stable pool implementation on Ergo. kushti noted Spectrum may have a prototype; stable math more complex than constant product but feasible with offline implementation + ErgoScript + UI.

- **ZK rollups research**: greenhat proposed compiling ErgoTree to MidenVM to obtain zkSTARKs, with sha256/blake2b hash plugging for on-chain verification.

- **Dexy Protocol**: arkadia contributed PR on kushti/dexy-stable implementing UIP-001 (Balancing Interventions). DexyGold and DexyUSD variants being integrated into desktop app.

- **ChainCash and Basis refactoring**: Unified signature verification algorithms into new core crate, removed outdated specs, continuing redemption testing.

- **Infrastructure monitoring suite**: qx() documented node, GraphQL, API, explorer, and website status checks—endpoint definitions, timeouts, collected metrics. Will share monitoring details with kushti for replication.

---

## Important Decisions or Announcements

- [@kushti, msg#38124, 2026-01-28]: Ergo node **6.0.2 / 6.1.2 released**. Urges update for nodes using extra indices.

- [@kushti, msg#38165, 2026-01-29]: Sub-blocks devnet testing stabilized after fixing fork-explosion bugs. Ready for broader Sigmanauts testing if no overnight issues.

- [@kushti, msg#38226, 2026-02-01]: Sub-blocks devnet **relaunched with 60s block interval** (was 30s). Input block chains no longer forking excessively. Testers asked to rejoin with new parameter.

- [@qx(), msg#38156, 2026-01-28]: Dashboard now checks node indexed height + GraphQL reported height; flags >5 block discrepancies to detect stuck indexers.

- [@qx(), msg#38158, 2026-01-28]: Single-URL redirect created: `https://infra-p2p.ergoplatform.com/`

---

## Technical Q&A Worth Preserving

- **Q** (@kusht): Can GQL server switch to another node when one is unavailable/out-of-sync, like Explorer does?  
  **A** (@qx()): Unsure if code supports it; currently manual failover. Proposed writing health-check script to test TXs and rewrite `.yml` + rebuild GQL if failure detected.

- **Q** (@kushti): What is the state of your Vibe Coding?  
  **A** (@arkadia): Building Ergo DeFi desktop app (Tauri). Fully working: SigmaUSD (mint/redeem), ErgoPay, Nautilus desktop signing. WIP: Dexy (both variants scaffolded, UI built, debugging TXs), DuckPools Lending (8 markets, lend/withdraw/borrow/repay/refund flows, debugging). No repo yet.

- **Q** (@cannon_q): Need someone to help audit a simple smart contract.  
  **A** (@Arohbe): Send it over; I'll run it through audit tool I have.

- **Q** (@Luivatra): What would implementing a stable pool type on Ergo take?  
  **A** (@kushti): Spectrum may have a prototype. Stable math more complex than constant product; feasible via ErgoScript + offline math implementation + UI.

- **Q** (@Netim, @Patato): Node stuck syncing; what should we do?  
  **A** (@kushti): Delete `.ergo` folder and resync. If stuck again, will relaunch devnet with less aggressive parameters (reduced block interval from 30s to 60s, fewer input blocks per ordering).

- **Q** (@Patato): Unresolved dependency (sigma-state_2.12:6.0.2-30-59782d92-SNAPSHOT) when running sbt assembly.  
  **A** (@kushti): Need to publish sigma locally or get jar file from kushti.

---

## Links Shared

- [https://github.com/ergoplatform/sigma-rust/issues/842]: sigma-rust parsing divergence broke ErgoDex backend; fixed by switching to develop branch.

- [https://github.com/ergoplatform/ergo/pull/2252]: PR awaiting review (kushti requested review 2026-01-28).

- [https://github.com/ergoplatform/ergo/pull/2260]: Integration tests PR reviewed by kushti.

- [https://github.com/cannonQ/ergo-transcripts]: Ergo Knowledge Base—50+ ecosystem meetings (31+ hours) transcribed with executive summaries, Q&A, timestamps, speaker IDs, searchable by keyword/date/topic.

- [https://ergo-transcripts.vercel.app/]: Live Knowledge Base search interface.

- [https://provably-fair-games.vercel.app/]: Updated with server-side secret (not revealed until play complete).

- [https://github.com/kushti/dexy-stable/pull/7]: Dexy Protocol PR implementing UIP-001 (Balancing Interventions).

- [https://github.com/maticnetwork/miden]: MidenVM—proposed target for ErgoTree ZK rollup compilation.

- [https://termbin.com/hr8s]: Patato's ergo.conf for sub-blocks testing (penalty threshold 500000).

- [http://194.135.83.36:9052/panel/]: Netim's sub-blocks node panel (testnet).

- [https://cff9f5ae9712.ngrok-free.app/panel]: Patato's sub-blocks node panel (initial).

- [https://f7975003d056.ngrok-free.app/panel]: Patato's sub-blocks node panel (after restart).

- [https://f7975003d056.ngrok-free.app/info]: Patato's node info (after blockInterval = 60s update).

- [https://x.com/ergo_platform/status/2018048607681970224]: Ergo Platform X/Twitter post (content not shown in chat).

- [https://clawbot.ai]: ClawBot hackathon—9 repos active with no human involvement; kushti notes bots now have their own hackathon.

---

## Unresolved Questions

- **GQL failover mechanism**: How should GQL server automatically switch to backup node if primary is unavailable/out-of-sync? Health-check script proposed but not yet implemented. (@qx(), @kushti discuss msg#38107–38122)

- **Sub-blocks sync stalling**: Multiple testers (Patato, Netim, Sigmanaut) experienced nodes desyncing at similar heights (~79731, ~80365) despite identical config. kushti to study logs and determine root cause. Possibly related to old JAR usage mixed with fresh DB (msg#38212–38215).

- **AppKit 6.0 status**: kushti asked for updates on AppKit 6.0; no response recorded in this segment.

- **Stable pool contract specs**: Whether Spectrum's stable pool prototype is shareable and what timeline for integration on Ergo is unclear.

- **ZK rollup security model**: greenhat's MidenVM + ErgoTree compilation proposal for zkSTARKs incomplete—hash verification strategy and on-chain proof costs not detailed.