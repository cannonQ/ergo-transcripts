---
title: "Ergo Developer Chat — 2024-W20"
date_start: "2024-05-13"
date_end: "2024-05-19"
type: telegram_weekly
channel: developer
week: "2024-W20"
source: telegram
message_count: 208
categories: [technical, mining, governance, defi, ecosystem, bridges, nft]
key_terms: [deserialize, DataSerializer, serialization, round-trip property, deserializeRaw, Option, Some, None, constructors, ErgoScript, getVar, context variables, inputIndex, varId, AVL tree proof, AvlTree, bytes, modular arithmetic, executeFromVar, EIP-50]
---
# Ergo Developer Chat Summary — 2024-W20
**Period:** 2024-05-13 to 2024-05-19  
**Participants:** 9 active developers  
**Message Count:** 208

---

## Key Topics Discussed

- **Sigma State Interpreter v6.0 Deserialization**: kushti and ergomorphic debated serialization formats for `deserialize[T]`, `deserializeRaw` (now `deserializeTo[T]`), and whether a unified `DataSerializer` should replace multiple type-specific serializers. Merkle tree (AVL tree) serialization and `Option[T]` support were added. ([msg#26814–27025](https://github.com/ScorexFoundation/sigmastate-interpreter/pulls))

- **ErgoScript Language Extensions**: Support for `Context.getVar(inputIndex, varId)` to read context variables from other inputs was proposed as a bounty ([msg#26869–26880](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/983)); `Some()`/`None()` constructors for `Option[T]` construction were considered but deferred to compiler level ([msg#26871–26881](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/979)).

- **Testnet Mining Instability**: Testnet became stuck multiple times; difficulty adjustment happens every 128 blocks (1 epoch), causing prolonged delays when active miners go offline. kushti proposed implementing Bitcoin-style minimal difficulty after prolonged gaps ([msg#26948](https://github.com/ScorexFoundation/sigmastate-interpreter/issues)). Multiple miners reported crashes or incomplete share submission when mining to testnet Stratum; issues persisted across TeamRedMiner, nbminer, and local Stratum setups, but were stable on mainnet and Sigmanauts pool ([msg#26941–27019](https://github.com/mhssamadani/ErgoStratumServer)).

- **DDoS/Network Resilience**: Pool operator reported OVH anti-DDoS triggers 10–20 times daily on Ergo node v5.0.21; kushti suggested nodes might be triggering false positives via inter-node requests interpreted as port scanning. Recommended blacklisting OVH subnets in firewall ([msg#26868–26884](https://github.com/ergoplatform)).

- **Rosen Bridge Bitcoin Integration**: Scanner improvements for Bitcoin RPC; implemented Bitcoin Observation extractor and Rosen Extractor. Changed `fromAddress` value to box ID for Bitcoin (pending future discussion) since RPC transactions don't expose input address directly ([msg#26923](https://github.com/rosen-bridge)).

- **Fleet SDK Documentation**: anon_BR (Nautilus lead) flagged lack of Fleet SDK documentation; offered to prioritize it next semester and invited ErgoDevs to attach bounties for community contributions ([msg#26908–26913](https://github.com/fleet-sdk/docs)).

- **Reputation System Implementation**: jossemii reimplemented Rust graph service in TypeScript due to WASM issues; noted TS version crashes at depth >30 nodes while Rust handles 30+ nodes, likely a memory efficiency issue rather than pure speed difference ([msg#26905–26924](https://reputation-systems.github.io/sigma-reputation-panel/)).

- **Paideia DAO & Ergopad**: EIP-5 template compiler fixes merged; Paideia frontend near completion. Ergopad identified critical off-chain bot bug: global transaction index from explorer API was incorrect, causing bots to operate on mempool only and miss blocks; migrated to indexed node for stability ([msg#26912–26918](https://github.com/flux-finance/paideia-dao)).

- **CyberVerse Expansion**: Car racing minigame v2 released with procedural maps, tunnels, elevation, NPCs, new audio (to be minted as AudioNFT), and depth-of-field effects. Partnership announced with OMEN (Cardano project); additional Cardano partnership TBA ([msg#26927](https://github.com/cyberverse-project)).

- **New dApp Projects**: "The Field" (peer-to-pool pledging DAO) MVP contracts complete, dApp UI integration wrapping up this week. RosenPort addresses >$10 USD minimum fee barrier on Rosen Bridge for sub-$2K transfers ([msg#26928–26932](https://discord.gg/wa38bX57tY)).

---

## Important Decisions or Announcements

- [@kushti, msg#26821, 2024-05-13]: Removed `deserializeTyped` from v6.0 scope; will revisit as low priority (7.0 or later) if use cases emerge.

- [@kushti, msg#26867, 2024-05-13]: Approved and merged PR #2145 (node improvements); requested tests.

- [@kushti, msg#26880, 2024-05-14]: Created GitHub issue #983 with bounty for `getVar(inputIndex, varId)` feature; assigned to v6.0.

- [@kushti, msg#26906, 2024-05-15]: **Weekly R&D Summary**: Sigma State Interpreter deserialization PR split complete with expanded type support; EIP-50 updated; AVL tree serialization in progress; node v5.0.22 merged fixes; investigating API crash under additional indices (fork-join executor bottleneck). Dexy extract action awaiting testnet validation. SigmaUSD update key holders notified. ChainCash protocol submitted to conference. ErgoDevs DAO: multisig tested, 7K+ ERG donation received, governance rules in discussion.

- [@kushti, msg#26948, 2024-05-15]: Proposed implementing testnet difficulty floor after prolonged block gaps (Bitcoin precedent, prior buggy 2019 attempt to be revisited).

- [@anon_BR, msg#26913, 2024-05-15]: Fleet SDK documentation roadmap: full semester focus; bounties welcome from ErgoDevs. Opened GitHub issues for community contributions.

- [@ergomorphic, msg#26968, 2024-05-16]: Proposed unified `serialize()/deserialize[T]` using `DataSerializer` for consistency; deprecate old `longToByteArray`/`.propBytes` formats to avoid serialization format fragmentation.

- [@kushti, msg#26971, 2024-05-16]: Created GitHub issue #988 formalizing single `serialize()` proposal to replace multiple type-specific methods.

- [@kushti, msg#27007, 2024-05-17]: Updated `6.0-deserialize` branch: all deserializers now `DataSerializer`-based, `deserializeRaw` renamed to `deserializeTo[T]`, `SOption[T]` (de)serialization merged.

---

## Technical Q&A Worth Preserving

- **Q** (@ergomorphic, msg#26819): Is the `6.0-deserialize` branch buildable?
  **A** (@kushti, msg#26820): Yes, all new tests passing.

- **Q** (@ergomorphic, msg#26822): Build error: `deserializeRaw is not a member of sigma.SigmaDslBuilder` on branch `6.0-deserialize`.
  **A** (@kushti, msg#26824): `SigmaDslBuilder` does have the method; `sbt clean` resolved it for ergomorphic (msg#26825).

- **Q** (@ergomorphic, msg#26830): Why do we need both `deserializeRaw` and `deserializeTyped`?
  **A** (@kushti, msg#26832–26853): `deserializeRaw` needed for round-trip property (e.g., `Box.bytes` → `deserializeRaw` → `Box`). `deserializeTyped` use case unclear at present; use a single unified format via `DataSerializer` instead (msg#26834–26857).

- **Q** (@luivatra, msg#26870): Would `getVar(inputIndex, varId)` help avoid redundant proof resubmission in multi-input contracts?
  **A** (@kushti, msg#26880): Yes, created bounty issue #983 for v6.0.

- **Q** (@luivatra, msg#26875): Can we construct `Option[Long]` from computed values, e.g., `Some(R5[Long].get + R6[Long].get)` as function parameter?
  **A** (@kushti, msg#26879–26881): Will explore `Some()`/`None()` constructors at ErgoTree or compiler level alongside bytes/deserialize pattern.

- **Q** (@andrei_krx, msg#26868): Ergo node v5.0.21 triggers OVH anti-DDoS 10–20 times daily; what causes it?
  **A** (@kushti, msg#26872): Nodes may request other OVH nodes, triggering false "port scanning" detection. Blacklist OVH subnets in firewall. Confirmed (@andrei_krx, msg#26883): attack originates from other nodes, not from operator's server.

- **Q** (@jossemii, msg#26934): Does mining difficulty drop when no nodes mine testnet, or remain computationally hard?
  **A** (@dΣathgripson, msg#26939): Difficulty won't decrease significantly without block production; enough nodes exist but few miners actively mine testnet.

- **Q** (@dΣathgripson, msg#26941): Stratum error "Miner has not started yet" after node restart—glitch or normal delay?
  **A** (@kushti, msg#26949): `offlineGeneration` defaults to true on mainnet only; testnet node waits for first block post-launch before mining. Should be true for testnet too. (@dΣathgripson, msg#26944 later): Turning `offlineGeneration=true` and `externalMiner=true` resolved it.

- **Q** (@jossemii, msg#26961): Does Ergo adjust difficulty per block or in epochs? Why didn't it adjust during testnet halt?
  **A** (@Pulsarz, msg#26962): Adjusts every epoch (128 blocks). Long gaps between miner activity prevent timely adjustment.

- **Q** (@kii, msg#26958): Bitcoin oracle possibility for RosenPort?
  **A** (@kushti, msg#26966): BTC already on Ergo via Rosen Bridge; DuckPools uses Spectrum price. Other use cases unclear—what's the goal?

---

## Links Shared

- [github.com/ScorexFoundation/sigmastate-interpreter/pull/979](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/979): Deserialization PR with expanded type support (Global.deserialize[T]) and Option[T] handling.

- [github.com/ScorexFoundation/sigmastate-interpreter/issues/978](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/978): createAvlTree and Global.Some/None constructors tracking.

- [github.com/ScorexFoundation/sigmastate-interpreter/issues/983](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/983): Bounty for `getVar(inputIndex, varId)` feature (v6.0).

- [github.com/ScorexFoundation/sigmastate-interpreter/pull/982](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/982): AVL tree serialization (`.bytes`) implementation in progress.

- [github.com/ergoplatform/ergo/pull/2145](https://github.com/ergoplatform/ergo/pull/2145): Node v5.0.22 fix (merged).

- [github.com/ergoplatform/ergo/pull/2158](https://github.com/ergoplatform/ergo/pull/2158): Possible fork-join executor bottleneck fix for API/indexer dispatcher contention.

- [github.com/rosen-bridge/scanner](https://github.com/rosen-bridge/scanner): Bitcoin RPC scanner improvements; single API call for block transactions.

- [github.com/rosen-bridge/utils](https://github.com/rosen-bridge/utils): Bitcoin RPC Rosen Extractor implementation (fromAddress → box ID change).

- [github.com/rosen-bridge/rosenet](https://github.com/rosen-bridge/rosenet): Pub-sub implementation completed.

- [github.com/fleet-sdk/docs](https://github.com/fleet-sdk/docs): Fleet SDK documentation roadmap (anon_BR leading next semester).

- [fleet-sdk.github.io/docs](https://fleet-sdk.github.io/docs/): Existing Fleet SDK docs (sparse).

- [reputation-systems.github.io/sigma-reputation-panel](https://reputation-systems.github.io/sigma-reputation-panel/): jossemii's Reputation System testnet implementation (TS-based post-WASM pivot).

- [github.com/reputation-systems/reputation-graph-service](https://github.com/reputation-systems/reputation-graph-service): Rust reputation graph service (30+ node depth benchmarks).

- [github.com/flux-finance/paideia-dao](https://github.com/flux-finance/paideia-dao): Paideia DAO (Create DAO frontend near completion; EIP-5 tracking).

- [github.com/Ergopad/ergopad-api](https://github.com/Ergopad/ergopad-api): Ergopad off-chain bot migration to indexed node.

- [github.com/mhssamadani/ErgoStratumServer](https://github.com/mhssamadani/ErgoStratumServer): Standard Ergo Stratum server (testnet mining issues).

- [github.com/Satergo/stratum4ergo](https://github.com/Satergo/stratum4ergo): Aberg's custom Ergo Stratum implementation (debugging ongoing).

- [github.com/ChainCashLabs/chaincash](https://github.com/ChainCashLabs/chaincash): ChainCash contracts; _victory_413 onboarded as contributor.

- [github.com/ChainCashLabs/chaincash-rs](https://github.com/ChainCashLabs/chaincash-rs): Rust server draft (soysor); issue #41 open for backend work.

- [discord.gg/wa38bX57tY](https://discord.gg/wa38bX57tY): "The Field" peer-to-pool pledging DAO Discord (MVP dApp UI in progress).

- [github.com/cyberverse-project](https://github.com/cyberverse-project): CyberVerse car racing minigame v2 (procedural maps, audio NFT integration).

- [github.com/Satergo/stratum4ergo/blob/solo-mining-pool](https://github.com/Satergo/stratum4ergo): Satergo solo-mining-pool branch alternative.

- [http://147.182.244.219/ergobabelfees.html](http://147.182.244.219/ergobabelfees.html): justblake3911's Babel Fees tutorial and working example.

- [github.com/Luivatra/ergotipper-tokens/pull/43](https://github.com/Luivatra/ergotipper-tokens/pull/43): Ergo tipperbot GIF feature PR (#43, Yulius contribution).

- [github.com/ScorexFoundation/sigmastate-interpreter/issues/988](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/988): Unified `serialize()/deserialize[T]` proposal (formal issue).

---

## Unresolved Questions

- **Serialization Format Standardization** ([msg#26832–27025](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/979)): Should `DataSerializer` replace all type-specific serializers (`longToByteArray`, `.propBytes`, etc.), or maintain backward compatibility? Decision pending PR review (ergomorphic, msg#27024–27025).

- **Testnet Mining Stability Root Cause** ([msg#27003–27019](https://github.com/mhssamadani/ErgoStratumServer)): PC crashes when