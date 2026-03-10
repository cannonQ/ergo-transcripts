---
title: "Ergo Developer Chat — 2023-W51"
date_start: "2023-12-18"
date_end: "2023-12-24"
type: telegram_weekly
channel: developer
week: "2023-W51"
source: telegram
message_count: 160
categories: [technical, community, ecosystem, bridges, governance]
key_terms: [LevelDB, RocksDB, LMDB, database, storage, JNI drivers, performance, NIPoPoW, UTXO snapshot, NipopowAlgos, UnsupportedOperationException, LevelDB errors, crash, manifest, version automation, release version, Satergo, ergonodes.net, update prompts, logging]
---
# Ergo Developer Chat Summary — 2023-W51
**Period:** 2023-12-19 to 2023-12-24  
**Participants:** 11 | **Messages:** 160

---

## Key Topics Discussed

- **Database Performance and Migration**: Discussion of LevelDB vs. RocksDB vs. LMDB for node storage. kushti confirmed Ergo uses LevelDB; RocksDB noted as superior with better JNI drivers. Solana and Kaspa use RocksDB. LMDB mentioned as Monero's choice with potential multi-process safety advantages.

- **NIPoPoWs and UTXO Snapshot Bootstrap**: Aberg reported critical errors (`empty.last` exception in NipopowAlgos, manifest corruption) when running node 5.0.17 with `nipopowBootstrap=true` and `utxoBootstrap=true`. Issue appeared intermittent; restart resolved it. Root cause under investigation by kushti.

- **Rosen Bridge Transaction Volume Implications**: Pulsarz raised concern that with 77 Ergo watchers online, each bridge event generates 77 watcher transactions across 2 chains. Questioned whether Ergo fee wars imminent and what throughput increase strategy is prioritized (sub-blocks vs. other approaches).

- **Block Time vs. Block Height Contract Dependencies**: Extended technical debate about reducing block time from 2 minutes. Core issue: emission contracts, time-locked boxes, and other dApps rely on `blockHeight` context variable with implicit 2-minute assumption. Reducing block time without addressing this would cause early unlocks and emission acceleration. Pulsarz proposed ErgoTree version flag as opt-in workaround; consensus that any solution is "messy."

- **Sub-Blocks Design Status**: Luivatra expressed preference for sub-blocks over simple block-time reduction. Pulsarz unclear how dApps (e.g., Spectrum DEX) would leverage sub-blocks; design details and developer migration path TBD.

- **Logging Infrastructure Issue**: Aberg reported that critical ERROR-level exceptions appear in console but do not persist to ergo.log file, indicating multiple uncoordinated loggers. Referenced prior GitHub issue #2056. Suggested need for centralized logging or logger coordination.

- **Node Version Auto-Update**: Aberg flagged that kushti repeatedly forgets to update version number in node releases, causing downstream tools (Satergo, ergonodes.net) to continuously prompt for updates even when running latest. Requested automation to prevent recurrence.

- **Fee Market and Mempool Behavior**: Pulsarz inquired about timestamp context in ErgoTree verification and mempool timeout mechanics. Established that timestamp in context represents previous block + 1 (future estimate); contracts cannot know exact timestamp of block being mined. Fee estimation API exists but untested and unused by applications.

---

## Important Decisions or Announcements

- [@Yulius Kristianto, msg#22785, 2023-12-19]: Ergo wiki Indonesian language instance restructured and reorganized per English wiki order; marked as complete.

- [@HQΣr, msg#22842–22850, 2023-12-20]: ErgoSanta initiative launched with key creator bot, inbox bot, and chest redeeming bot operational. Chest currently holds $150 in tokens; accepting contributions; reward mechanism in development.

- [@Aberg, msg#22881–22883, 2023-12-20]: Flagged that Satergo users receiving false update prompts every 4 hours due to missing node version bump; also causing incorrect stats on ergonodes.net.

- [@qx(), msg#22963–22964, 2023-12-21]: Suggested disabling UTXO snapshot temporarily to isolate NIPoPoWs issue during video recording session.

- [@kushti, msg#22944, 2023-12-21]: Acknowledged NIPoPoWs/UTXO snapshot error; will investigate.

---

## Technical Q&A Worth Preserving

- **Q** (@Pulsarz, msg#22795–22802, 2023-12-19): After updating dockerized nodes from v5.0.16 to v5.0.17, one node fails with LevelDB manifest error (`/home/ergo/.ergo/history/extra/MANIFEST-489013: No such file or directory`). Other node on same setup runs fine. Probable cause?  
  **A** (@kushti, implied, msg#22798): Corrupt history index; safe to delete history folder and resync.

- **Q** (@Flying Pig, msg#23007, 2023-12-22): Is there a node endpoint to return only transaction IDs for a given address (not full TX data)? `/blockchain/transaction/byAddress` returns all data; looking for leaner equivalent to `/blocks/{headerid}/transactions`.  
  **A**: No direct answer provided in transcript; remains open technical request.

- **Q** (@Lee, msg#23015–23024, 2023-12-22): How to get current extra index height when extra indexing is not enabled?  
  **A** (@mgPai, implied): Check via API or node config; resolved with user follow-up thanks (msg#23029).

- **Q** (@Pulsarz, msg#23060–23098, 2023-12-23): If block time decreases from 2 to ~15 seconds, how do contracts using `blockHeight` context behave? Does timestamp in context represent current block or previous block? If a contract checks mint-open timestamp, when can the transaction be submitted?  
  **A** (@Pulsarz clarification, msgs#23101–23120): ErgoTree evaluated at submission (last block + 1 timestamp); rechecked on each block if in mempool. Off-by-one timing edge case if mint opens at 3 PM but last block was 2:59 PM — tx cannot be submitted until first block after 3 PM is mined.

- **Q** (@Pulsarz, msg#23149–23158, 2023-12-23): Can block size be increased without a hard fork? What is the practical constraint—block size or computational cost limit?  
  **A** (@Pulsarz, msgs#23149–23158): Miners can vote to increase block size via governance (no fork needed per docs.ergoplatform.com/mining/governance/). Max total execution cost is often the binding constraint. v5 improved cost efficiency significantly. kushti suggested max cost per block could fairly safely double.

- **Q** (@Pulsarz, msg#23163–23168, 2023-12-23): Are block sizes hitting the limit vs. cost limit in practice?  
  **A** (@Luivatra, msg#23168): Since v5, hitting size limit before complexity on transactions; likely similar for blocks.

- **Q** (@Pulsarz, msg#23186–23192, 2023-12-23): How would dApps (e.g., Spectrum DEX) take advantage of sub-blocks? What changes are needed?  
  **A**: No detailed answer provided; flagged as design clarity gap.

---

## Links Shared

- [https://docs.solana.com/proposals/blockstore-rocksdb-compaction](https://docs.solana.com/proposals/blockstore-rocksdb-compaction): Solana blockstore RocksDB compaction proposal (referenced by Pulsarz, msg#22819).

- [https://en.m.wikipedia.org/wiki/Lightning_Memory-Mapped_Database](https://en.m.wikipedia.org/wiki/Lightning_Memory-Mapped_Database): LMDB overview (referenced by Aberg, msg#22821).

- [https://github.com/ross-weir/go-ergo](https://github.com/ross-weir/go-ergo): Go Ergo library (mentioned by Aberg, msg#22867, language and library knowledge not available).

- [https://github.com/ergoplatform/ergo/issues/2056](https://github.com/ergoplatform/ergo/issues/2056): Prior GitHub issue on logging coordination (referenced by Aberg, msg#22974).

- [https://docs.ergoplatform.com/mining/governance/](https://docs.ergoplatform.com/mining/governance/): Mining governance and block size voting (referenced by Pulsarz, msg#23151).

- [ErgoSanta contribution address](https://ergoplatform.org/): `9eq54XD5C7o78HgxyZ94SjNzhoesp4FCczAgggzqCnUBcFFBGkv` (announced by HQΣr, msg#22842).

---

## Unresolved Questions

- **NIPoPoWs Bootstrap Crash Root Cause**: Aberg's error with `empty.last` and LevelDB manifest corruption remains under investigation by kushti. Intermittent nature suggests race condition or state-machine edge case.

- **Node Logging Aggregation**: Multiple logger instances (console vs. ergo.log) are not synchronized; ERROR-level messages in console do not persist to file. Cause and fix strategy TBD.

- **Block Time Reduction Feasibility**: No consensus reached on whether reducing block time is viable given contract dependencies on 2-minute blockHeight assumption. Flag-based opt-in and backward compatibility workarounds discussed but not approved.

- **Sub-Blocks Developer Adoption**: How existing dApps would integrate sub-blocks, changes required, and detailed technical spec remain unclear.

- **Rosen Bridge Fee Pressure Mitigation**: With 77 watchers generating ~154 transactions per bridge event, strategy to prevent fee market saturation not finalized. Pulsarz queried whether increased throughput is planned before mainnet expansion.

- **Transaction ID Endpoint**: No lean endpoint exists to retrieve only transaction IDs (not full data) for an address; feature request remains open.

---

## Summary

Week 2023-W51 was moderate-activity, dominated by infrastructure troubleshooting (database choice, bootstrap crashes, logging) and forward-looking scalability debates. Rosen Bridge's transaction volume raised practical concerns about throughput. Block time reduction emerged as complex due to contract-level blockHeight dependencies. ErgoSanta community project launched. No major protocol changes approved, but several design discussions warrant follow-up once sub-blocks RFC and NIPoPoWs stability improve.