# Ergo Developer Chat Summary — 2024-W09

## Key Topics Discussed

- **Dexy Protocol launch readiness**: Private UI testing completed with transaction chaining fixes pending. Public testnet can start imminently. Last items: audit round (preferably by Four Eyes Consulting for GORT rewards), public testnet testing, and mainnet deployment.

- **SigmaMap implementation**: Context rework using map-like structure instead of sparse arrays. Efficient implementations planned for 1-4 key variants; polishing underway before PR review.

- **Sidechain prototyping**: Stub interpreter for transaction verification created; progress on verification pipeline ongoing.

- **Gluon private UI testing**: Active testing phase with positive results.

- **Lithos Protocol roadmap**: Released; client config work finishing, Java-based Stratum research, NISP parameter exploration.

- **Sigmanauts Mining Pool**: Storage rent feature marked "SOON"; consensus payment calculations reportedly accurate; dashboard prototype created by Marc the Shark using on-chain data and Python CLI instead of central UI.

- **Rosen Bridge progress**: Bitcoin chain implementation under review; EVM RPC extractor under review; Bitcoin UTXO selection package completed; WID hash calculation fixes in guard-service and scanner.

- **RocksDB integration issues**: macOS test runner encountering "Too many open files" errors during initialization; error reproducible on fresh clones; appears to be upstream RocksDB issue #10367.

- **Ledger + Nautilus integration**: `proveDlog(currentUserPk)` failing with Ledger-connected Nautilus wallet (script verification error); issue flagged for triage.

- **selfBoxIndex semantics change (v5.0)**: sigma-rust does not perform version checks; currently planning to skip <5.0 blocks in Rust clients; versioning/activation design deferred.

- **Storage rent transactions**: Discussion about availability of mainnet/testnet examples; confirmed on mainnet around initial activation period.

- **Alephium sharding tradeoffs**: Max 16 parallel blockchains (scalability factor ~4 due to 2N+1 chain requirement); mainnet sync takes ~1 week; DEX liquidity fragmentation across shards not solved (devs deploy to group 0, defeating parallelization).

- **Mempool spam protection**: Per-peer transaction limits by cumulative cost; global per-block limits; spam isolated to small clusters of peers even with multi-peer attacks.

- **Node wallet constraints**: Single wallet per node at a time (can swap/rename); multiple dApps (DuckPools, Oracle Pools, Spectrum) can share one node+wallet if they don't require node wallet inputs; seed-in-config pattern would allow multi-dApp setup without node wallet dependency (requested as future standard).

## Important Decisions or Announcements

- [@kushti0978, msg#25372, 2024-02-28]: Dexy preparing for mainnet deployment; Gluon private UI testing active; SigmaMap and sidechain work ongoing.

- [@cheeseenthusiast, msg#25379, 2024-02-28]: Lithos roadmap released; Sigmanauts Mining Pool storage rent implementation imminent.

- [@wombo22, msg#25369, 2024-02-28]: Sigmanauts pool payment consensus now accurate; final 3 market maker candidates under consideration for vote this weekend; on-chain data dashboard prototype available.

- [@zzzzbye, msg#25378, 2024-02-28]: Rosen Bridge: BitcoinChain implementation and EVM RPC extractor both under review; Bitcoin UTXO selection package merged.

- [@kushti0978, msg#25430, 2024-03-01]: Called for test suite contributors for SigmaUSD contracts (Scala or other); @kushti khushi will create one using EIP-15 contracts and Dexy-style tests.

- [@ergomorphic, msg#25425, 2024-03-01]: v5.0.14 delayed by Pay2SHAddress backward compatibility issue (test + fix in new PR); fromIds PR uncertain, will prioritize in March.

- [@Yee, msg#25433, 2024-03-01]: PR #2131 created for issue #2093; tests needed but no existing endpoint tests found to base them on.

- [@stenolog_79565, msg#25465, 2024-03-02]: PRs #2116 and #2121 ready for merge.

- [@qx(), msg#25498, 2024-03-03]: Community requested to submit memorial paragraphs/stories about Scalahub for potential Ergo platform website memorial page.

## Technical Q&A Worth Preserving

- **Q** (@kushti khushi): How to handle R4 register data in transaction display? Hex2Ascii produces gibberish for non-obvious formats.  
  **A** (@Aco Šmrkas): Pushed update to show R4 data (int, long, col[sbyte]) in transaction view. Query depends on data type; for unknown formats use manual inspection.

- **Q** (@dusek_): Why does a transaction pass node validation but fail sigma-rust validation on `box2.R4[Int].get == CONTEXT.selfBoxIndex` when R4=-1 and selfBoxIndex=2?  
  **A** (@dusek_, self-resolved): Fixed in v5.0 via PR #772; selfBoxIndex semantics changed.

- **Q** (@dusek_): Does sigma-rust properly handle selfBoxIndex?  
  **A** (@kushti0978): Correctly handled, but no version checks; sigma-rust can't validate 4.0 transactions using selfBoxIndex. (@dusek_ plans to skip <5.0 blocks in Rust clients for now).

- **Q** (@mgpai): How close to Dexy launch? What's left?  
  **A** (@kushti0978): Last round of audit (4Eyes preferred, rewards in GORT), public testnet testing (can start today), mainnet deployment (parallelizable). Non-constant product LP proposals exist but need analysis; complexity TBD.

- **Q** (@omniawaha): How does Ergo defend mempool against spam attacks given no punishment for failed transactions due to UTXO race conditions?  
  **A** (@kushti0978): Per-peer cumulative transaction cost limits (since 4.0.4x); global per-block limit; failed tx cost recorded per peer; spam isolated to small node clusters even with multi-peer attacks.

- **Q** (@mgpai): What does "allowed caller of contract" update mean in context of mempool tx ordering?  
  **A** (@mgpai): Updated contract's allowed caller while previous tx in mempool used old owner. Mempool accepted old tx, but block validation failed; exemplifies UTXO race condition where state changes between mempool acceptance and block inclusion.

- **Q** (@Michael): Can one node support multiple wallets simultaneously?  
  **A** (@krasaviceblasen): No; only one wallet active at a time (can swap/rename). Multiple dApps can share one node+wallet if dApps don't require node wallet inputs (e.g., DuckPools, Spectrum, Oracle Pools). Seed-in-config would enable multi-wallet without node wallet dependency.

- **Q** (@Christophe Garant): Can Spectrum off-chain batcher run with a separate wallet on same node?  
  **A** (@Michael): Spectrum supports mnemonics; wallet can be generated separately. Node IP used in config but node wallet not strictly required; public node acceptable. (@Michael advocates this be standard for all dApps).

- **Q** (@kii): Does blockchain have quantum computing security measures?  
  **A** (@kushti0978): PoW secure; dlog-based Sigma protocols and signatures will be compromised. (@Glasgow): Hard-fork recovery option if quantum threat materializes. No concrete changes yet (threat timeline unclear, post-quantum alternatives still impractical).

## Links Shared

- [GitHub PR #2116](https://github.com/ergoplatform/ergo/pull/2116): Test fixes; ready for merge (msg#25465).
- [GitHub PR #2121](https://github.com/ergoplatform/ergo/pull/2121): Ready for merge (msg#25465).
- [GitHub PR #2128](https://github.com/ergoplatform/ergo/pull/2128): kushti request for review (msg#25353).
- [GitHub PR #2129](https://github.com/ergoplatform/ergo/pull/2129): DeepRollBackSpec integration test (msg#25361).
- [GitHub PR #2098](https://github.com/ergoplatform/ergo/pull/2098): RocksDB integration; macos-latest runner failing with "Too many open files" (msg#25396).
- [GitHub PR #2130](https://github.com/ergoplatform/ergo/pull/2130): RocksDB test reproduction on macOS (msg#25396).
- [GitHub PR #2131](https://github.com/ergoplatform/ergo/pull/2131): Implementation for issue #2093; tests pending (msg#25433).
- [GitHub PR #2132](https://github.com/ergoplatform/ergo/pull/2132): ergo-core tests migration from ergo-node (msg#25455).
- [ScorexFoundation sigma-rust PR #953](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/953): v5.0.14 VersionContext tests (msg#25496).
- [Rosen Bridge BitcoinChain](https://github.com/rosen-bridge/rosen-chains/tree/83-bitcoin-bitcoinchain-implementation): Under review (msg#25378).
- [Rosen Bridge EVM RPC Extractor](https://github.com/rosen-bridge/utils/tree/158-evm-rpc-rosen-extractor): Under review (msg#25378).
- [Sigmanauts Mining Pool Dashboard](https://github.com/marctheshark3/sigma-dashboard): Prototype by Marc the Shark; testing feedback requested (msg#25369).
- [kushti's SigmaUSD test suite](https://github.com/kushti/sigmausd): Contracts + build.sbt; Scala tests to be added (msg#25463).
- [EIP-15 (SigmaUSD contracts)](https://github.com/ergoplatform/eips/blob/master/eip-0015.md): Reference for test suite (msg#25445).
- [ResearchGate: "Analysis of layer-one sharding on an extended-UTxO model"](https://www.researchgate.net/profile/Cayo_Fletcher-Smith/publication/371990150_Analysis_of_layer-one_sharding_on_an_extended-UTxO_model/links/64a26ceeb9ed6874a5f238bb/Analysis-of-layer-one-sharding-on-an-extended-UTxO-model.pdf): Newer sharding writing (Ergo mentioned); PDF shared via Discord (msg#25408).
- [RocksDB issue #10367](https://github.com/facebook/rocksdb/issues/10367): "Too many open files" on macOS (msg#25396).
- [Ergo Docs: Quantum Computing FAQ](https://docs.ergoplatform.com/faq/#quantum): Post-quantum strategy and rationale (msg#25400).
- [Scalahub Twitter memorial](https://twitter.com/PSILOBLOX/status/1764037069582843999?s=20): Community member passed (msg#25500).

## Unresolved Questions

- **Dexy non-constant product LP**: Proposals exist to improve capital efficiency but require complex analysis; complexity/benefits TBD (msg#25287).

- **v5.0.14 release timeline**: Pay2SHAddress backward compatibility issue identified; fix PR to be created. Target release date unclear (msg#25425).

- **fromIds PR timeline**: "Hard to say, lots of distractions," will prioritize in March; no firm ETA (msg#25425).

- **RocksDB macOS issue**: "Too many open files" error reproducible on fresh clones; root cause unclear (upstream or Ergo integration); blocker for testing (msg#25396).

- **Node wallet multi-dApp support**: Seed-in-config pattern would solve; no decision yet on adoption (msg#25483).

- **sigma-rust versioning**: Full versioning/activation support deferred; currently only handles skip <5.0 blocks (msg#25350).

- **ErgoExplorer decompilation bugs**: `true && if(something)` fails to compile (sigmastate-interpreter constraint); operator precedence issue on line 29 reported but not resolved (msg#25344-25346).

- **SigmaUSD test suite ownership**: Called for contributors; @kushti khushi volunteered but anyone can contribute; scope TBD (msg#25443-25446).

- **Scalahub memorial format**: Decision between story paragraphs and repo list; community gathering stories (msg#25498-25502).