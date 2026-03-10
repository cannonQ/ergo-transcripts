---
title: "Ergo Developer Chat — 2024-W25"
date_start: "2024-06-17"
date_end: "2024-06-23"
type: telegram_weekly
channel: developer
week: "2024-W25"
source: telegram
message_count: 0
categories: [technical, wallet, defi, mining, ecosystem, governance, community]
key_terms: [multisig, SigmaProp, ErgoTree, serialization, ErgoAddressEncoder, Nautilus, Abyss, Ledger, dataInputs, Sigma 6.0, mod operations, bulletproofs, range proof, sigmastate-interpreter, LevelDB, corruption, RocksDB, database repair, power outage, blockly]
---
# Ergo Developer Chat Summary — 2024-W25
**Period:** 2024-06-17 to 2024-06-23  
**Participants:** 14 (kushti, Aberg, qx(), anon_BR, c8, and others)  
**Message Count:** 286

---

## Key Topics Discussed

- **Sigma 6.0 Development**: kushti implemented modular arithmetic operations (mod, modInverse, plusMod, multiplyMod, subtractMod), toSigned/toUnsigned conversions, and is working toward bulletproof range proof verification in ErgoScript. Multiple collection method PRs in flight for costing and equality improvements.

- **Multisig Address Handling**: Technical challenge converting Minotaur-generated multisig addresses to SigmaProp for ErgoScript contracts. Solution involves extracting ErgoTree via `fromString()`, calling `.script.toProposition(true)`, and wrapping in `SigmaPropConstant()` rather than attempting direct deserialization.

- **Trade House (Order Book DEX)**: Decentralized exchange with partial order filling capabilities launched. Compatible with UTXO model; allows full control over slippage, fee enforcement via smart contracts, and peer-to-peer trading without matching engine dependency.

- **Nautilus/Abyss Wallet**: Released v0.10.4 with refactored prover implementation and fixed Ledger dataInputs serialization. Stable enough for main channel release after no reported bugs in past week. Fleet SDK added EIP-44 arbitrary data signing/verification support.

- **Paideia DAO Contracts**: Major refactor nearing completion—parameter-driven register handling via shared library functions, generic long-living contract update mechanism, treasury consolidation with dust handling, composable contract design moving away from hardcoded input/output indexes.

- **ChainCash Vulnerability**: kushti identified and is fixing a vulnerability allowing forging of note signatures; will update Schnorr verification examples on forum and repos.

- **Database Corruption Post-Outage**: Two nodes corrupted simultaneously after power loss due to LevelDB issues. kushti recommends RocksDB but testing 5.1.0 stability first; PR #2031 provides repair flag (works as "lottery"). Alternative: backup wallet keystore, delete `.ergo/` except `/wallet/keystore/`, restore from seed.

- **Box Selection & Transaction Building**: Discussion of knapsack problem in UTXO selection. Node wallet uses two-phase selector (greedy + descending value replacement + dust consolidation + append). Fleet, AppKit, Sigma-rust, and Nautilus all support multiple change box generation, though defaults vary. MAX_TOKENS_COUNT = 122 in sigma-rust.

- **Storage Rent Economics**: Storage rent adjustable by miners in 25,000 ERG increments; can theoretically reach 0. Rate per byte ensures it scales with box size, not ERG price—miners cannot more than double initial rate. Economic incentives align miner behavior with network health.

- **ErgoScript Playground & No-Code Development**: c8 released `ergoblocks` npm package with Blockly integration for zero-code smart contract creation. escript.online now has working no-code interface. All client-side via GitHub Pages—no server required.

---

## Important Decisions or Announcements

- [@kushti, msg#27678, 2024-06-17]: All ErgoHack VIII videos dropping throughout the day; multiple high-quality projects participated.

- [@qx(), msg#27741, 2024-06-18]: Will lead June 19 developer chat in kushti's absence (traveling).

- [@arobsn via DiscordBridge, msg#27771, 2024-06-19]: Nautilus Abyss v0.10.4 stable; ready for main channel release within days pending continued zero-bug reports.

- [@luivatra via DiscordBridge, msg#27772, 2024-06-19]: Paideia contract refactor on track for community review by week's end; includes parameter-driven approach, treasury consolidation, composable design.

- [@c8 via DiscordBridge, msg#27810, 2024-06-20]: Published `ergoblocks` npm package and completed "personal hackathon" (no-code Blockly dApp). Bounty claiming process to follow via PM.

- [@kushti via DiscordBridge, msg#27817, 2024-06-20]: Confirmed no-code app development is "finally here"; reward processing via PM.

---

## Technical Q&A Worth Preserving

- **Q** (@kii, msg#27671): How to extract SigmaProp from a testnet multisig address created in Minotaur for use in ErgoScript contracts?  
  **A** (@kushti, msg#27699–27701): Use `ErgoAddressEncoder(TestnetNetworkPrefix).fromString(addr).get.script.toProposition(true)` to get the proposition with constants substituted. Wrap in `SigmaPropConstant(script)` to put into a register. For mainnet, consider constructing directly from keys via `CTHRESHOLD(1, keys)` to avoid address parsing complexity.

- **Q** (@kii, msg#27698): How to serialize an ErgoTree into a SigmaProp?  
  **A** (@kushti, msg#27699–27702): `.script.toProposition(true)` returns the SigmaProp with constants substituted. For register placement, wrap in `SigmaPropConstant()`. If you want bytes for contract comparison, kushti provided the hex representation.

- **Q** (@c8, msg#27724): Definition of full mempool and how to measure mempool space utilization?  
  **A** (@kushti, msg#27725): Mempool size limited via `ergo.node.mempoolCapacity` (default 1000 transactions). Max tx size from P2P ~100KB; no limit from local. No direct % utilization metric in standard API.

- **Q** (@c8, msg#27726): How does a node with full mempool (1000 txs) handle incoming RBF transactions?  
  **A** (@Pulsarz, msg#27729): Higher-fee RBF transactions replace lower-fee ones. @Pulsarz notes contracts can enforce fixed/max tx fees to prevent fee-based competition. @Luivatra cautions that multiple branches can exist in mempool simultaneously due to propagation delays.

- **Q** (@Pulsarz, msg#27852): Why is token limit 32 in some contexts but 120 in Fleet SDK?  
  **A** (@kushti, msg#27857): sigma-rust defines `MAX_TOKENS_COUNT = 122`. Wallet implementations may have different limits or use different box selection strategies.

- **Q** (@Pulsarz, msg#27849): Maximum unspent box count before wallets break?  
  **A** (@kushti, msg#27855): Node wallet with specific settings handles tens of thousands of UTXOs, but tx construction becomes terribly slow. @kushti notes optimization work from CEX overload scenarios (2020–21). @Luivatra notes Nautilus and Ergomobile may struggle with dust addresses containing many boxes due to scanner limits, but this is orthogonal to smart contract interaction.

- **Q** (@Aberg, msg#27774): How to convert new `Ecp` type (return value of `CryptoConstants.dlogGroup().generator()`) to BouncyCastle `SecP256K1Point`?  
  **A** (@ergomorphic via DiscordBridge, msg#27775): On JVM, use `.value` to extract the underlying point.

- **Q** (@Aberg, msg#27778): Alternative to removed `sigmastate.basics.SecP256K1` class for decoding points?  
  **A** (@ergomorphic via DiscordBridge, msg#27780): Use `Platform.createContext().decodePoint(pointBytes)`, which returns `Ecp`. Method reference: [CryptoContextJvm#L29](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/e1626652fedba1de359a75a2af61371d1396d49a/core/jvm/src/main/scala/sigma/crypto/CryptoContextJvm.scala#L29).

- **Q** (@Michael, msg#27755–27765): How to restore wallet on active node without deleting existing wallet or re-syncing entire chain?  
  **A** (@Glasgow & @Flying Pig, msg#27759, msg#27770): Rename `/wallet/` folder to backup; node will allow new restore. After restoring, set wallet scan height to desired block height to avoid full rescan. Then rename backup folder back when switching.

- **Q** (@c8, msg#27760): Is RBF possible without re-signing the fee transaction?  
  **A** (@kushti, msg#27723): Yes, mempool supports RBF since day one (only RBF, not CPFP). However, no answer given on whether signature is required for updated fee.

- **Q** (@Aberg, msg#27888–27925): How to encrypt data and update file later without keeping password in memory?  
  **A** (@kushti, msg#27900, msg#27903): Use AES + PBKDF2; do not invent own crypto. JVM garbage collection makes strong guarantees about memory wiping difficult. See `SecretString` class in node. @Aberg reviewed Electrum's approach (dual-level encryption: AES-256-CBC for seeds/keys, ECIES for wallet file metadata), but asymmetric encryption doesn't solve the core problem—decryption still requires a secret in RAM.

- **Q** (@HQΣr, msg#27849): Maximum unspent box count for smart contract storage without breaking wallets?  
  **A** (@c8, msg#27854): No clear data; max tx size ~100KB. @kushti notes tens of thousands possible but tx construction slow. Actual limits depend on wallet implementation (Nautilus, ErgoMobile may struggle with dust addresses).

- **Q** (@HQΣr, msg#27884): Is there a way to copy a smart contract address and input it into escript.online to decompile the contract?  
  **A** (@c8, msg#27885): Not in UI, but clone repo on GitHub and use the sigmastate-js parsing function triggered when switching from "code" to "tree" view. @kushti notes (msg#27894): ErgoTree decoding is possible; ErgoScript restoration from ErgoTree is non-trivial but possible (unfinished work exists).

---

## Links Shared

- [YouTube: ErgoHack VIII Playlist](https://youtube.com/playlist?list=PL8-KVrs6vXLRp_oUjngJiiWMTFo4qZbAk): All hackathon project videos dropping throughout 2024-06-17.

- [Nautilus Abyss Extension](https://chromewebstore.google.com/detail/nautilus-abyss/moaohjebjfiodfiegjnjkbnalepemcpf?hl=en&authuser=0): Chrome Web Store link for Nautilus Abyss wallet (as of 2024-06-17).

- [GitHub PR #2145](https://github.com/ergoplatform/ergo/pull/2145): Node stability issue in 5.0.22; under investigation.

- [GitHub PR #2167](https://github.com/ergoplatform/ergo/pull/2167): kushti's rewrite of paged result building to eliminate duplicate boxes in synthetic test (1,706 boxes).

- [Trade House DEX](https://ergoauctions.org/trade?pair=ERG-SigUSD): Decentralized order book exchange with partial filling support.

- [GitHub: Spectrum Finance Contracts](https://github.com/spectrum-finance/spectrum/blob/master/spectrum-ergo-connector/contracts/deposit.sc): Design pattern reference for register handling and box structure.

- [GitHub: ErgoNames Registry Contract](https://github.com/ergonames/ergonames-contracts/blob/main/contracts/v1/ergonames_v1_registry.es): Best-practice contract design pattern with function-based register access.

- [escript.online](https://escript.online/blockly): Ergo Script Playground with new Blockly no-code interface (live demo).

- [GitHub: SavonarolaLabs/blockly-ergoscript](https://github.com/SavonarolaLabs/blockly-ergoscript): Main Blockly-to-ErgoScript project repo.

- [npm: ergoblocks](https://www.npmjs.com/package/ergoblocks): Blockly integration library for ErgoScript (published 2024-06-20).

- [Twitter: Auction House Update](https://twitter.com/auction_house_/status/1802874118527656332): Trade House announcement (2024-06-17).

- [Twitter: Rosen Bridge Update](https://x.com/ERG_Armeanio/status/1804607199999664163): Joseph Armeanio's Rosen Bridge update (2024-06-22).

- [GitHub: Multisig Input Examples](https://github.com/SavonarolaLabs/multisig-input): Test suite for multisig transaction signing with `ergo-lib-wasm-nodejs`.

- [GitHub: sigmastate-js PR #1012](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1012): JavaScript multisig setup for sigmastate-js.

- [GitHub: Indexed Node GraphQL Layer](https://github.com/Luivatra/indexed-node-graphql): Experimental GraphQL wrapper for indexed node with mempool-as-confirmed support (created 2024-06-20).

- [GitHub: Sigmanauts Mining Pool Repository](https://github.com/marctheshark3/Mining-Reward-Tokens): NFT and token reward integration for mining pool.

- [Discord: The Field DAO](https://discord.gg/wa38bX57tY): Peer-to-pool pledging protocol community.

- [Ergo Forum: Storage Rent Details](https://www.ergoforum.org/t/storage-rent-details/256): Comprehensive storage rent specification reference.

- [GitHub: Ergo Issue #2166](https://github.com/ergoplatform/ergo/issues/2166): Node issue flagged by kushti for fantaerik review.

- [GitHub: Ergo Issue #2165](https://github.com/ergoplatform/ergo/issues/2165): Constant serialization API proposal (msg#27816).

- [GitHub: PR #2031](https://github.com/ergoplatform/ergo/pull/2031): LevelDB repair flag for post-outage corruption recovery.

---

## Unresolved Questions

- **Stable RocksDB timeline**: kushti testing 5.1.0 stability post-merge of 5.0.22 changes; recommends waiting before production rollout. Timeline unclear.

- **Node wallet box selection strategy**: Knapsack problem acknowledged as unsolved; current greedy+descending algorithm suboptimal for dusty wallets. @Pulsarz flagged need for improved selector but noted it's a general problem, not Trade House-specific.

- **Fleet SDK RBF without re-signing**: @c8 asked if RBF possible without re-signing fee transaction; no explicit answer given.

- **Mempool explorer holding old submissions**: @deathgripson noted testnet explorer retaining very old mempool submissions (msg#27836); cause unclear.

- **Smart contract constant serialization API**: @Flying Pig and @kushti discussed need for bidirectional API to serialize/deserialize constants (e.g., "5" ↔ hex), but no implementation timeline set.

- **Bulletproof range proof verification in ErgoScript**: kushti working on implementation; status as of 2024-06-19 is "working towards" completion.

- **Sigma 5.x stability**: 5.0.22 "not very stable"; further testing/fixing needed. 5.1.0 merged 5.0.22 changes, inheriting instability. Testing ongoing.

- **AppKit modularization**: @Aberg wants to exclude ErgoScript compiler dependencies to reduce app size. @ergomorphic noted sigma modularization underway but AppKit will continue depending on `sc` module. Workaround: exclude more classes from ProGuard, but requires testing.

---

## Notable