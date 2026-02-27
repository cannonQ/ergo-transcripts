# Ergo Developer Chat Summary — 2025-W03

## Key Topics Discussed

- **6.0 Protocol Soft-Fork Status** — Under audit with fixes in progress; testnet launch imminent pending audit completion. Sub-blocks EIP published with local miner prototyping underway; pools stratum implementation needs updating for sub-block submission.

- **Sub-blocks Implementation** — Pointer to previous input block now written into extension section; incremental transaction accumulation and proof regeneration in progress. Pool stratum implementation and explorer updates still needed before testnet/mainnet deployment.

- **L2 and Sidechains (Sigmachains)** — Initial sketches for lightning-like and rollup contracts drafted; Lithos rollup design (unpublished) exists. Core need: find L2 architectures compatible with established Ergo DeFi and secure sigmachain partners for development.

- **Sigma-Rust 6.0 Implementation** — Review of 6.0 methods implementation by @dusek_ underway; new contributor joined. Costing implementation and performance improvements pending; compatibility with reference implementation and alt client possibilities under discussion.

- **Lithos Optimistic Rollup** — Design focuses on temporary NISP (Non-Interactive Schnorr Proof) storage with off-chain fraud checking. Fraud proof contracts verify conditions (low difficulty shares, wrong timestamps) on-chain; fraudulent proofs removed via contract execution. Mainnet targeted June or slightly later; beta testing with larger miner cohorts on public testnet.

- **Oracle Pool v2 Migration** — Code written to allow Oracle Pool upgrade to v2 (only update contract modified). Testing in progress; pool refresh and bank update planned after validation. Oracle core switching from scans to extra indices to simplify multiple lightweight oracle instances on same node.

- **Vector Oracles for Collateralized Lending** — Proposed as dynamic key-value maps `Coll[(Coll[Byte], Int)]` for oracle ticker symbols and values with deprecation capability. All values must be same market type; consensus ensures all oracles publish identical maps. Status: not yet started; Palmyra potentially interested for commodity vector oracles.

- **Data Input Semantics & Oracle Transaction Failure** — Spent data inputs readable in same block; oracle-dependent transactions do not fail if oracle input spent before confirmation, provided both occur in same block. Mempool chaining delay (4–6 min average) combined with oracle updates can cause chained transactions to drop if oracle input becomes spent before dependent tx confirms.

- **Input/Ordering Blocks EIP** — Draft specification published; aims to improve handling of input ordering for transaction validation and block construction efficiency.

- **Nautilus Wallet UI Redesigns** — SendView, AboutView, WalletOptimizationDapp, AssetSelector, FeeSelector redesigned; search functionality added to AssetSelector; several minor UI fixes and code quality improvements completed.

- **Keystone Hardware Wallet Integration** — Transaction parsing and user display completed; final signing steps and code polishing underway. SDK integration next before Nautilus and other wallet integrations begin. Demo shows full address generation and signing workflow.

- **Ledger Audit Progress** — Quarkslab audit (required to exit developer mode) officially underway as of 2025-01-15; progress updates expected soon.

- **SCypher (BIP39 Implementation)** — BIP39 seed phrase checksum process implemented entirely in memory with local variable cleanup (no temp files). Core functionality complete; secondary functions and UI/UX refinements next.

- **Ergo Bounties Registry** — Centralized listing of open bounties across ecosystem published; goal to increase visibility and accelerate resolution. Repos to be added ongoing.

- **Go Bindings for Sigma-Rust** — Ergo-lib-go bindings created and tested in production (off-chain bots, blockchain scanner). Small memory management bug discovered and fix currently under testing.

- **Keystone Address Generation & Signing** — Full workflow demo shows Ergo address generation via QR code scanning and transaction signing. Wallet connection and code finalization planned.

- **Spam Attack Vectors in 6.0** — New `coll.distinct` method investigated for potential spam attack vector; fix being developed.

- **Encryption Length Leakage in AES-GCM** — Aberg (Satergo dev) reports that AES-GCM padding reveals unencrypted byte length via linear relation. Padding cannot be used with GCM streaming; random garbage length injection possible but better solutions sought.

- **Celaut (Decentralized Service Execution)** — Nodes can compile, execute, share services and exchange resources for ERG or reputation proofs. Primary 2025 goal: enable payments for services without network connection (leveraging PoW); more complex than current infrastructure.

## Important Decisions or Announcements

- [@kushti, msg#32544, 2025-01-13]: Initiated developer sync on 2025 roadmap across core, infra, stablecoins/RWA, DeFi, and real-world adoption tracks.

- [@kushti, msg#32578, 2025-01-15]: Launched Ergo Raffle fundraiser for 6.0 code audit: `https://ergoraffle.com/raffle/show/850d0c68a883b1d6822148fc20708948e0aa97a768fb976ce3b20fad878ef89a`

- [@kushti, msg#32566, 2025-01-15]: Node 213 rescanning extra indices; requested users of Rosen watchers and SafeW wallets to switch to alternative public nodes; new extra index deployed at `http://159.89.116.15:11088/`

- [@cannon_q, msg#32609, 2025-01-15]: Ergo Bounties GitHub registry launched for visibility of open ecosystem bounties; repo contributions to be added weekly.

- [@c8e4d2a, msg#32601, 2025-01-15]: Dexy Protocol integration with SigmaUSD unofficially started.

- [@cheeseenthusiast, msg#32592, 2025-01-15]: Lithos mainnet targeting June or slightly later; beta testing on public testnet after activation (planned within days if no further issues).

## Technical Q&A Worth Preserving

- **Q** (@Aberg): AES-GCM encryption leaks unencrypted byte length due to linear relation to encrypted byte length; padding cannot be used with GCM streaming—any alternative solutions?
  **A** (@kushti): Can padding help? (@Aberg: No, padding incompatible with GCM streaming; random garbage injection possible but suboptimal.)

- **Q** (@jossemii): How can a receiver (Alice) validate a proof without consulting gateways if condition is proof from block above mining difficulty threshold?
  **A** (@kushti): NIPoPoW + transaction proof as proposed at ergoforum.org; sender (Bob) requires gateway, but receiver only needs to verify mining difficulty of block.

- **Q** (@c8e4d2a): Can vector oracles use dynamic key-value maps instead of static lists, allowing easy deprecation and addition of new values?
  **A** (@c8e4d2a): Proposed `Coll[(Coll[Byte], Int)]` structure with consensus ensuring all oracles publish identical maps; same market type required for all values.

- **Q** (@luivatra): Why switch from Rust to Go for Crux aggregator backend? Rust has more Ergo libs; what's the advantage?
  **A** (@kushti): Foreign function interfaces are "most cursed part of any codebase" across decades of observation. (@Pgr456): Go bindings for Sigma-Rust exist and are production-tested; memory management bug discovered in testing.

- **Q** (@c8e4d2a): Will oracle-dependent transactions fail if oracle input spent before confirmation due to 4–6 min mempool delay?
  **A** (@mgpai): Yes, if oracle input X spent before dependent tx using X as data input, tx becomes invalid. (@kushti): False—spent data input readable in same block; whole block required for SPV client validation. (@mgpai): So if X spent and used as data input in same block, no problem?

- **Q** (@mgpai): Are oracle-based chained transactions doomed to fail during certain block intervals when oracle inputs update?
  **A** (@kushti): See data-inputs-semantics forum post (ergoforum.org/t/data-inputs-semantics/654); spent data input valid in same block.

- **Q** (@c8e4d2a): Code variables used for Dexy mainnet: what oracleNFT and initialLp values?
  **A** (@kushti): oracleNFT = "3c45f29a5165b030fdb5eaf5d81f8108f9d8f507b31487dd51f4ae08fe07cf4a"; initialLp = 100000000000; proper mainnet contracts not yet deployed.

- **Q** (@patato.55): Can AI-assisted smart contract development approach be extended to automated test suite generation?
  **A** (@kushti): Testing methodology evolved with @scalahub from Oracle Pools/SigmaUSD iterations. AI could help generate tests where condition X falsifies transaction validation, or exhaustively test all contract conditions.

## Links Shared

- [https://www.ergoforum.org/t/scaling-oracle-price-feeds-with-vector-oracles/4772/3]: Vector oracle scaling proposal and discussion.

- [https://github.com/ergoplatform/bounded-vec/pull/29]: New contributor PRs to bounded-vec library.

- [https://github.com/ergoplatform/bounded-vec/pull/28]: Bounded-vec contribution.

- [https://github.com/ergoplatform/sigmastate-interpreter/issues/1035]: Bounty-assigned GitHub issue in sigmastate-interpreter.

- [https://www.ergoforum.org/t/e-mail-client-for-limited-or-blocked-internet/134]: NIPoPoW + transaction proof for offline validation.

- [https://ergoraffle.com/raffle/show/850d0c68a883b1d6822148fc20708948e0aa97a768fb976ce3b20fad878ef89a]: 6.0 code audit fundraiser raffle.

- [https://github.com/sigmaspace-io/ergo-lib-go]: Go bindings for Sigma-Rust; production-tested in off-chain bots and blockchain scanner.

- [https://ergfi.xyz/]: ErgFi SigmaUSD integration status dashboard.

- [https://github.com/ergoplatform/ergo/pull/2164]: Delayed confirmations fix PR.

- [https://github.com/ergoplatform/ergo/pull/2191]: Input/ordering blocks EIP-related PR.

- [https://github.com/ergoplatform/ergo/pull/2193]: Additional protocol PR for review.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1045]: Sigmastate-interpreter PR pending review.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1036]: Sigmastate-interpreter PR ready for review round.

- [https://github.com/ergoplatform/ergo/pull/2055/files#diff-1486bd567ce1b0f024d158c212eb5be9769407f8c79baa0deca66893e0f37ec2R1]: Input/ordering blocks EIP draft specification.

- [https://github.com/kushti/dexy-stable/blob/master/src/test/scala/dexy/bank/FreeMintSpec.scala]: Dexy Protocol test suite example (contract testing methodology).

- [https://github.com/kushti/dexy-stable/blob/master/contracts/lp/pool/redeem.es]: Dexy Protocol LP pool redeem contract source.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1052]: Distinct method removal from 6.0.

- [https://github.com/ErgoDevs/Ergo-Bounties]: Centralized Ergo Bounties registry.

- [https://github.com/ergoplatform/sigma-rust/issues/780#issuecomment-2594702831]: Sigma-Rust issue comment requiring review.

- [https://www.ergoforum.org/t/data-inputs-semantics/654]: Data inputs semantics specification (foundational for oracle transaction validation).

## Unresolved Questions

- **Sub-blocks pool stratum implementation**: Timeline and technical details of pool update for sub-block submission not finalized.

- **L2 architecture selection**: Which rollup/sidechain architectures best fit existing Ergo DeFi contracts remains open; sigmachain partner identification still pending.

- **Sigma-Rust alt client**: Viability of minimal Rust client supporting core modes (without wallet, indexing, miner initially) under discussion; scope definition needed.

- **Vector oracle consensus mechanism**: How consensus rules enforce identical oracle maps across network not fully specified; static vs. dynamic value deprecation still being designed.

- **AES-GCM encryption length leakage**: Better solution to random garbage padding needed; Aberg's use case and constraints not clarified.

- **Dexy Protocol mainnet deployment**: Timing for mainnet contracts deployment following SigmaUSD integration not announced.

- **Oracle input update race conditions**: While theory clarified (same-block data input validity), practical mitigation for mempool chaining race conditions (4–6 min delay) during oracle updates not addressed.

- **Celaut offline payment proof**: Technical mechanism for proving transaction without network connection using PoW still under design; feasibility assessment pending.

---

**Summary Statistics**
- **Active participants**: kushti, dusek_, c8e4d2a, mgpai, arobsn, Pgr456, cheeseenthusiast, Aberg, luivatra, Marc the Shark, patato.55, cannon_q, others
- **Key repos**: ergo, sigmastate-interpreter, sigma-rust, bounded-vec, dexy-stable, ergo-lib-go
- **Status**: High-velocity 6.0 finalization; Lithos rollup design advancing; Oracle Pool v2 testing imminent; Keystone hardware wallet approaching wallet integration phase