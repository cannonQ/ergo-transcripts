# Ergo Developer Chat Summary — 2025-W25
**Period:** 2025-06-16 to 2025-06-27  
**Participants:** 10 core developers + Discord bridge relay

---

## Key Topics Discussed

- **Ergo 6.0.0 Release & 6.1.0 RocksDB Migration**: Core protocol client v6.0.0 released on 2025-06-23; v6.1.0 with RocksDB 10.2 upgrade released 2025-06-26. Extra indices resync required; smooth upgrade path confirmed via testing.

- **Sub-blocks Implementation**: Multiple peers mining support and transaction propagation testing underway. Public testnet injection planned for July. Logging and event tracing improvements completed.

- **Merged-Mined Sidechains Research**: kushti exploring merge-mined sidechain designs, including double Bitcoin + Ergo merge-mined sidechains with ordering blocks and input blocks split across chains. Bitcoin UTXO set commitments via AVL+ tree for smart contract access proposed.

- **Machina Finance Grid Contracts**: T2T (Token-to-Token) grid contract unit tests completed; E2T (ERG-to-Token) contract undergoing size optimizations before review.

- **Nautilus Wallet Keystone Integration**: Custom ErgoTree serialization for reduced transactions and signed transactions in progress. Wallet connection, QR code scanning, and transaction signing workflow being implemented.

- **Fleet SDK Updates**: SigmaJS direct integration for faster builds and memoized compiler instances; lazy loading improvements deployed.

- **DexyGold Protocol Growth**: Bank reserves growing faster than LP size; next phase: USD pool v2 upgrade and launch of GluonUSD and DexyUSD stablecoins.

- **Oracle Pool v1 & v2 Architecture**: Oracle Pool v1 operational with EF members and external participants; v2 running Dexy Gold with GORT rewards. Plan to build native Ergo oracles with additional capital from token sales.

- **CodeUTXO Infrastructure**: Mempool visualizer (with CEX/oracle/P2P colorization) and dead-simple explorer interface released; PostgreSQL direct lookups and server migration planned.

- **Cortex GPU Mining Dashboard**: Random Forest ML analysis of GPU conditions for mining efficiency; solo miner debugging (Autolykos solution timeout issues); Artifact Arena NFT gamification prototype open-sourced pending.

- **SkyHarbor NFT Marketplace Backend**: Year-long development funded by raffle; backend 99% complete and open-sourced.

---

## Important Decisions or Announcements

- [@kushti, msg#34701, 2025-06-23]: **Ergo protocol reference client 6.0.0 released** — https://github.com/ergoplatform/ergo/releases/tag/v6.0.0

- [@kushti, msg#34753, 2025-06-26]: **Ergo protocol reference client 6.1.0 released** with RocksDB 10.2 upgrade — https://github.com/ergoplatform/ergo/releases/tag/v6.1.0

- [@kushti, msg#34703-34704, 2025-06-23]: Voting start height set to 1,561,601 for 6.0 soft-fork; approximately 11.5 days until majority miners expected to vote if updating before that height.

- [@kushti, msg#34777, 2025-06-26]: **"latest" Docker tag removed** to avoid auto-install conflicts between 6.0.0 and 6.1.0; tagging strategy to be reconsidered.

- [@kushti, msg#34758, 2025-06-26]: **3-month grace period** announced for non-mining nodes to update to 6.x; no urgency.

- [@Pgr456 & Pulsarz, msg#34709-34713, 2025-06-23]: Decision to **upgrade RocksDB to 10.x** (from 9.x) for 6.1.0 after Docker base image issues with 9.x resolved.

- [@kushti, msg#34667, 2025-06-18]: **Merged-mined sidechain designs** published for discussion at https://www.ergoforum.org/t/sigmachains-refactoring-plan/5167

- [@kushti, msg#34652, 2025-06-18]: **Stable-to-stable LP development** proposed; ErgoScript experimentation with potential crowdfunding via Ergo Raffle.

---

## Technical Q&A Worth Preserving

- **Q** (@kushti, msg#34658): What is the best tool to work with the Ergo node from Rust?  
  **A** (@kushti): No explicit answer; context suggests ergo-node-interface or similar node APIs, but response incomplete in transcript.

- **Q** (@Pgr456, msg#34653): How to handle custom serialization of ErgoTree when working with reduced transactions within Nautilus?  
  **A** (@anon_br, msg#34656): Look at Fleet's box serializer and use SigmaByteWriter for custom serialization; can be assembled if needed.  
  **Follow-up A** (@anon_br, msg#34785-34789): Use `SPair` (not `STuple`); tuples with >2 elements unsupported; Fleet SDK v0.10.0 enforces this.

- **Q** (@Pgr456, msg#34686): Can you provide test vectors for Keystone custom serialization?  
  **A** (@Pgr456, msg#34688): Provided reduced transaction and signed transaction hex test vectors with custom serialization in Rust; reference implementation at https://github.com/Alesfatalis/sigma-rust-mini/pull/3/files

- **Q** (@arobsn, msg#34734): Are boxes with size flag enabled ErgoTrees being touched by custom serialization?  
  **A** (@Pgr456, msg#34735): Tree stays unparsed (VLQ + unparsed tree); tree header untouched (VLQ before); reference implementation provided.

- **Q** (@Josemi, msg#34689): Is the API at api.ergoplatform.com working?  
  **A** (@kushti, msg#34696): API functional; Josemi confirms resolution after caching issue cleared (@msg#34697).

- **Q** (@HQΣr, msg#34782): Example of how to include tuple (Coll[Byte], Long) in register using Fleet SDK?  
  **A** (@anon_br, msg#34785): Use `SPair` for 2-element tuples; tuples >2 elements unsupported per EIP.

- **Q** (@kushti, msg#34708): For 6.1.0 with RocksDB, rollback to 8.x or upgrade to 10.x?  
  **A** (@Pgr456, msg#34709): Push forward with 10.x.  
  **A** (@Pulsarz, msg#34710-34717): No known blockers for 10.x; previous 9.x issues were Docker base image specific, not RocksDB itself; willing to test custom build.

- **Q** (@Aco, msg#34754): Can I update from 5.1.2 to 6.1.0 without full resync?  
  **A** (@kushti, msg#34756): Extra indices resync required for 5.0.27/6.0.0/6.1.0 (indexing does not require network, uses local database).

---

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0]: Ergo protocol reference client 6.0.0 release notes
- [https://github.com/ergoplatform/ergo/releases/tag/v6.1.0]: Ergo protocol reference client 6.1.0 with RocksDB 10.2
- [https://www.ergoforum.org/t/sigmachains-refactoring-plan/5167]: Sigmachains refactoring & merged-mined sidechain design discussion
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1074]: Fix for leading Upcast node removal in sigma serializers (v3 trees)
- [https://github.com/ergoplatform/sigma-rust/pull/818]: dusek approval on Sigma Rust PR
- [https://github.com/ergoplatform/sigma-rust/pull/813]: dusek approval on Sigma Rust PR
- [https://github.com/reputation-systems/sigma-reputation-panel]: Reputation system UI & README (Josemi's Celaut reputation proof implementation)
- [https://github.com/marctheshark3/FintelligenceAI]: Marc the Shark's Finintelligence AI agents with code generation and smart contract validation
- [https://github.com/a-shannon/Aletheia-Protocol]: Upwind's Aletheia Protocol research repo
- [https://github.com/Alesfatalis/sigma-rust-mini/pull/3/files]: Reference implementation for custom ErgoTree serialization in Rust
- [https://t.co/zJizyCFHBI]: SkyHarbor NFT Marketplace open-source backend release announcement
- [https://ergonaut.space/id/manifesto-malaysian]: Ergo Manifesto translated to Bahasa Melayu (Malaysian)
- [http://159.89.116.15:11088/]: Testing node for 5.0.27 extra indices resync verification
- [http://165.227.26.175:16042/info]: Node deployed with 6.0 code merged to master
- [https://explorer.ergoplatform.com/]: Official Ergo Explorer
- [https://ergo.aap.cornell.edu/]: Cornell Ergo Explorer mirror
- [https://explorer.codeutxo.com/]: CodeUTXO Explorer
- [https://sigmaspace.io/]: SigmaSpace Explorer
- [https://api.ergoplatform.com/api/v1/docs/]: Official Ergo API documentation
- [https://gql.ergoplatform.com/]: Official Ergo GraphQL endpoint

---

## Unresolved Questions

- **Docker tagging strategy post-6.1.0** (@kushti, msg#34777, 2025-06-26): "latest" tag removed to avoid conflicts; future strategy unclear. @Luivatra proposed `ergo:rocks-v6.0.0`, `ergo:level-v6.0.0`, with separate "rocks" and "level" latest tags (@msg#34778-34779), but no decision recorded.

- **Cortex Autolykos CUDA miner timeout issue** (@Cortex, msg#34678, 2025-06-18): Solutions being rejected with 5000ms AskTimeoutException; root cause undetermined (CUDA miner vs. stratum proxy vs. both). Debugging ongoing; no resolution in transcript.

- **Stable-to-stable LP implementation feasibility** (@kushti, msg#34652, 2025-06-18): Proposed as next step for DexyGold ecosystem; whether to pursue ErgoScript implementation first or investigate existing chain implementations unclear.

- **Merged-mined sidechain detailed design** (@kushti, msg#34667, 2025-06-18): Double Bitcoin + Ergo merge-mined sidechain with ordering/input block split proposed; community interest solicitation pending forum discussion outcomes.

- **Node Interface mobile browser improvements** (@TheStophe, msg#34781, 2025-06-26): Requested more mobile-friendly Node Interface; rustinmyeye attempted effort now closed pending further work.

---

**End Summary**