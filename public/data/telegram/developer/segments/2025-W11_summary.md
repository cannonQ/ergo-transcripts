---
title: "Ergo Developer Chat — 2025-W11"
date_start: "2025-03-10"
date_end: "2025-03-16"
type: telegram_weekly
channel: developer
week: "2025-W11"
source: telegram
message_count: 178
categories: [ecosystem, technical, defi, wallet, community]
key_terms: [explorer, downtime, frontend, backend, ergobackup, ergexplorer, Scala 3, scrypto, debox, scorex-util, sigmastate, migration, executeFromSelfReg, DeserializeRegister, default values, Option types, ErgoTree, sub-blocks, fork switching, consensus]
---
# Ergo Developer Chat Summary — 2025-W11 (Mar 10–16)

## Key Topics Discussed

- **Explorer Infrastructure Issues**: Main Ergo Explorer frontend server experienced downtime over the weekend; infrastructure being moved to backup servers. Alternative explorers (ergexplorer.com, sigmaspace.io) available during maintenance. [@kushti khushi, msg#33446-33453, Mar 10-12]

- **Sub-blocks Implementation**: Initial fork-switching logic completed for sub-blocks protocol; both common and non-common sub-block fork resolution tested. P2P messaging work in progress. Contributors needed for testing, efficiency improvements, and stylistic refinements. [@kushti khushi, msg#33562, Mar 13; msg#33570, Mar 14]

- **Scala 3 Migration Across Core Libraries**: Coordinated effort to migrate scrypto, scorex-util, sigmastate-interpreter, and ergo-appkit to Scala 3. Multiple PRs reviewed and merged (scrypto 3.1.0, debox 0.11.0, scorex-util 0.2.2). Python bindings for sigma-rust in alpha, hosted on PyPI and ReadTheDocs. [@kushti khushi, msg#33461, msg#33475-33476; @dusek_, msg#33501, Mar 12-13]

- **DeserializeRegister & executeFromSelfReg Semantics**: Discussion on how default values are handled in register deserialization—whether defaults should remain at ErgoTree level or be exposed in ErgoScript, and how Option wrapping affects script reduction. Relates to spec compliance in C.0.47 (DeserializeRegister, OpCode 213). [@novamon_25735 & @kushti khushi, msg#33494-33533, Mar 12-13]

- **SigmaUSD Bank Contract Update**: SigmaUSD bank updated to match core contract code; now safe with respect to storage rent for decades. [@kushti khushi, msg#33498, Mar 12]

- **Mobile Ergo Node via NIPoPoWs + UTXO Snapshot**: Successfully bootstrapped Ergo node on Android using NIPoPoWs and UTXO set snapshots via RocksDB (leveldb has aarch64 compatibility issues in Termux). Node syncs to ~2.85 GB; works with Ergo Mobile Wallet. Stateless mode uses minimal power; full sync generates heat but allows multitasking. [@rustinmyeye/@Unknown, msg#33535-33561, Mar 12-13]

- **Bounty Program Status**: 108 open issues across Ergo bounties with 50,920.01 ERG allocated. Keystone Wallet Integration (3,000 ERG), Fleet SDK Tutorials (775 SigUSD), total. 1 bounty cleared this week; process streamlining form in progress. [@cannon_q, msg#33506, Mar 12]

- **Satergo v1.9.0 Release**: Added Ledger hardware wallet support, Satergo Offline Vault (Android), in-app update functionality, more secure wallet format. [@Aberg Satergo dev, msg#33509, Mar 12]

- **Nautilus Wallet v1.0.0 Stable Release**: Bug fix for ergo.get_used_addresses on unused wallets; SigmaUSD protocol dApp integration planned for v1.1.0. [@arobsn, msg#33495, Mar 12]

- **SkyHarbor v2 UI Launch**: New UI faster and cleaner; address asset retrieval bugs still being fixed. [@Quokka via DiscordBridge, msg#33456, Mar 11]

- **BouncyCastle Version Inconsistencies**: Multiple variants of BouncyCastle in use across libraries (bcprov-jdk15on v1.66, bcprov-jdk15to18 v1.80, etc.). Concern raised about standardization; v18on (Java 8+) recommended. [@Aberg Satergo dev, msg#33571-33577, Mar 14]

- **Ergo Book Initiative**: New collaborative documentation effort on ideological background of p2p money, grassroots finance, programmable money, and monetary expansion on-chain. Contributors include @louislibre, @armeanio, @grayman_48142, @kushti. [@kushti khushi, msg#33500, Mar 12]

---

## Important Decisions or Announcements

- [@kushti khushi, msg#33453, Mar 10]: explorer.ergoplatform.com redirect active during original server maintenance.

- [@kushti khushi, msg#33461, Mar 12]: Approved and merged Scala 3 support in scrypto. Python bindings PR ready for review (sigma-rust#812).

- [@kushti khushi, msg#33475-33476, Mar 12]: Released scrypto 3.1.0 with Scala 3 support and debox 0.11.0.

- [@kushti khushi, msg#33478, Mar 12]: Debox 0.11.0 released (following scorex-util dependency updates).

- [@kushti khushi, msg#33485, Mar 12]: Merged scorex-util PR#33 (Scala 3 support).

- [@kushti khushi, msg#33518, Mar 12]: Approved and merged scorex-util PR#34.

- [@kushti khushi, msg#33550, Mar 13]: Releasing scorex-util 0.2.2.

- [@kushti khushi, msg#33562, Mar 13]: Sub-blocks initial fork-switching implementation done; P2P work in progress. Contributors invited.

- [@kushti khushi, msg#33568, Mar 14]: Decision to move remaining ScorexFoundation repos under ErgoFoundation/ergoplatform for cleaner releases.

- [@kushti khushi, msg#33600, Mar 15]: Approved and merged scrypto#113 (scorex-util dependency update).

- [@kushti khushi, msg#33603, Mar 15]: Approved and merged ergo#2205 (cleanup of outdated 2017 plugins).

- [@kushti khushi, msg#33615, Mar 16]: Approved sigma-rust#812 (Python bindings).

---

## Technical Q&A Worth Preserving

- **Q** (@Flying Pig): What does explorer API provide that node API doesn't, and that dApps need?
  **A** (@kushti khushi, implicit in context): Frontend server provides web UI layer; both APIs complement each other. No explicit answer given, but infrastructure split evident.

- **Q** (@novamon_25735): Should DeserializeRegister include eval() to minimize cost and avoid duplicate work in executeFromSelfReg?
  **A** (@kushti khushi, msg#33555): DeserializeRegister is processed in a dedicated substitution pass, not during AST reduction. It should not have eval()—eval is for the AST reduction pass. Two separate passes occur during interpretation. DeserializeRegister nodes are replaced with values first, then AST reduction happens. (Reference: ErgoLikeInterpreter for how substitution is handled.)

- **Q** (@novamon_25735): Why is default value wrapped in Option for executeFromSelfReg, and what is the real-world None case representation?
  **A** (@kushti khushi, msg#33524 & msg#33529): Default values remain at ErgoTree level but can be hidden from ErgoScript. In 6.0, Option constructors will be supported (currently can only read Options from registers/context extensions, not create on-fly). May use two functions (executeFromSelfReg vs executeFromSelfRegWithDefault) or combine both with "hackery" depending on implementation choice. Decision TBD.

- **Q** (@ccellado): Are there examples of Merkle tree + ErgoScript tests available?
  **A** (@Glasgow, msg#33547): Added recent docs: https://docs.ergoplatform.com/dev/protocol/tx/tx-merkle/, merkle-batch-testing, merkle-light-proof, merkle-validation. Also example: https://github.com/ross-weir/ergohack-sidechain/blob/be57af9cb5c1832fb61b8cef919105bfc62487dc/src/test/scala/sidechain/relay/BitcoinMerkleProofSpec.scala

  Additional resources: https://www.ergoforum.org/t/offchain-bank-operating-at-layer-2/3367 (ChainCash contracts: note.es, reserve.es); AVLTreeScriptsSpecification in sigma repo.

- **Q** (@Unknown): Can bootstrap via NIPoPoWs + UTXO snapshot work on mobile devices? How much storage and power needed?
  **A** (@Unknown, msg#33535-33561): Yes, working with RocksDB on Android (leveldb has aarch64 issues). Initial sync: ~2.85 GB total (app + Alpine Linux + dependencies + .ergo folder). Syncing: 100% CPU, device gets hot but still allows multitasking. Synced: minimal power (~160 mAh battery, ~5.8 MB data/hour). Works with Ergo Mobile Wallet. Setup: https://github.com/rustinmyeye/ErgoNodeAndroid

- **Q** (@Unknown): Can send transactions from mobile node?
  **A** (@Unknown, msg#33549): Yes, runs fine with Ergo Mobile for transaction submission.

- **Q** (@HQΣr): LevelDB corruption error—missing files in history/extra. How to fix?
  **A** (@kushti khushi, msg#33604): Remove the extra folder; node will rebuild extra indices automatically.

- **Q** (@Aberg Satergo dev): Which BouncyCastle variant is recommended across libraries?
  **A** (@Aberg, msg#33577): bcprov-jdk15to18 (Java 8 onwards) is recommended. Current state: scrypto uses jdk15to18 v1.80; sigmastate-interpreter uses jdk15on v1.66; ergo-appkit uses jdk15to18 v1.66; wallet gradle lists 1.49, 1.56, 1.66, 1.67 multiple versions. Standardization needed.

- **Q** (@jozinek): Why does apex:apex-jorje-semantic SNAPSHOT dependency appear in build, and where does it come from?
  **A** (@jozinek, msg#33591-33597): Not in declared dependency tree. Discovered old unmaintained plugins from 2017 in build config were causing transitive pull. Removed plugins; build now works. (ergo#2205)

---

## Links Shared

- [https://github.com/abchrisxyz/ergowatch](https://github.com/abchrisxyz/ergowatch): Ergo blockchain monitoring tool.

- [https://ergobackup.aap.cornell.edu/](https://ergobackup.aap.cornell.edu/): Backup Ergo Explorer instance (during main explorer downtime).

- [https://ergexplorer.com/](https://ergexplorer.com/): Alternative Ergo Explorer.

- [https://sigmaspace.io/](https://sigmaspace.io/): Alternative Ergo Explorer.

- [https://github.com/ErgoDevs/Ergo-Bounties](https://github.com/ErgoDevs/Ergo-Bounties): Ergo bounty program tracking.

- [https://v2ui.skyharbor.io/](https://v2ui.skyharbor.io/): SkyHarbor v2 UI (order book DEX).

- [https://github.com/input-output-hk/scrypto/releases/tag/v3.1.0](https://github.com/input-output-hk/scrypto/releases/tag/v3.1.0): Scrypto 3.1.0 release (Scala 3 support).

- [https://docs.ergoplatform.com/dev/protocol/tx/tx-merkle/](https://docs.ergoplatform.com/dev/protocol/tx/tx-merkle/): Merkle tree documentation.

- [https://www.ergoforum.org/t/offchain-bank-operating-at-layer-2/3367](https://www.ergoforum.org/t/offchain-bank-operating-at-layer-2/3367): Offchain bank (AVL+ tree examples).

- [https://github.com/ChainCashLabs/chaincash](https://github.com/ChainCashLabs/chaincash): ChainCash contracts (note.es, reserve.es).

- [https://github.com/rustinmyeye/ErgoNodeAndroid](https://github.com/rustinmyeye/ErgoNodeAndroid): Ergo node Android app (NIPoPoWs + UTXO snapshot setup).

- [https://ergo-lib-python.readthedocs.io/en/latest/](https://ergo-lib-python.readthedocs.io/en/latest/): Python bindings documentation (sigma-rust).

- [https://pypi.org/project/ergo-lib-python/](https://pypi.org/project/ergo-lib-python/): Ergo-lib Python package (alpha).

- [https://build-launch-win.lovable.app/](https://build-launch-win.lovable.app/): AI Hackathon (proposal to build Ergo dApp).

- [https://github.com/input-output-hk/scrypto/pull/113](https://github.com/input-output-hk/scrypto/pull/113): Scrypto Scala 3 & scorex-util dependency update.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1060](https://github.com/ergoplatform/sigmastate-interpreter/pull/1060): Scala 3 groundwork PR for sigmastate-interpreter.

- [https://github.com/ergoplatform/ergo-appkit/pull/248](https://github.com/ergoplatform/ergo-appkit/pull/248): Ergo AppKit develop merge to sigma-5.0.14.

- [https://github.com/ergoplatform/ergo/pull/2205](https://github.com/ergoplatform/ergo/pull/2205): Cleanup of outdated build plugins (ergo#2205).

---

## Unresolved Questions

- **DeserializeRegister default value semantics** (@novamon_25735, @kushti khushi, msg#33554-33612): How should default values be represented in executeFromSelfReg—at ErgoTree level only, or exposed in ErgoScript? Should there be two functions (executeFromSelfReg vs executeFromSelfRegWithDefault) or a combined approach? Real-world None case representation unclear. Decision pending confirmation.

- **BouncyCastle standardization** (@Aberg, msg#33571): Should all Ergo libraries standardize on bcprov-jdk15to18 v1.80? Current inconsistency across scrypto, sigmastate-interpreter, ergo-appkit, and wallet requires audit and alignment.

- **Sonatype repository maintenance** (@jozinek, msg#33567): Should orgscorexfoundation Sonatype repository be refreshed/migrated to ergoplatform namespace? Artifact publishing restrictions encountered due to stale repo.

- **Block time parameters and faster blocks trade-offs** (@kushti khushi, msg#33521-33559): If block time is decreased, which contracts/dApps rely on block height vs timestamp for security? What are worst-case security implications? Research needed on concrete dependency analysis.

- **Sub-blocks P2P messages** (@kushti khushi, msg#33570): P2P message design for sub-blocks protocol in early stages; efficiency and stylistic improvements flagged for contributor input.

- **GitHub Actions SNAPSHOT dependency issue** (@jozinek, msg#33586-33594): apex:apex-jorje-semantic:1.0-sfdc-187-SNAPSHOT-55042bfc2e fails in CI but works locally. Root cause unclear; may require deeper Maven/SBT cache investigation.

---

**Activity Level**: Moderate-to-high technical development week. Focus on Scala 3 migration, sub-blocks protocol advancement, infrastructure maintenance, and ecosystem tooling (Nautilus v1.0, Satergo v1.