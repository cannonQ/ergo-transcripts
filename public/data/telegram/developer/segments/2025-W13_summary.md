---
title: "Ergo Developer Chat — 2025-W13"
date_start: "2025-03-24"
date_end: "2025-03-30"
type: telegram_weekly
channel: developer
week: "2025-W13"
source: telegram
message_count: 134
categories: [technical, ecosystem, defi, wallet, mining]
key_terms: [6.0.0-RC, sigmastate-interpreter, mainnet blockchain processing, versioning, sigma-rust, ergo-appkit, global_allocator issue, cdylib, Keystone firmware, debug node, AST reduction, trace functionality, DeserializeRegister, expression evaluation, sub-blocks, p2p protocol spec, oracle pools, big data commitments, Scala 3, cross-compilation]
---
# Ergo Developer Chat Summary — 2025-W13

## Key Topics Discussed

- **Protocol 6.0.0 Release Candidate (RC4)**: kushti finishing sigmastate-interpreter PR #1043 with additional tests and versioning fixes; mainnet blockchain processing testing with 6.0 candidate against 5.0 testnet nodes underway. RC4 release planned this week with tree version-based versioning.

- **Sub-blocks P2P Protocol**: Work in progress on peer-to-peer protocol specification for sub-blocks as part of throughput optimization research.

- **Oracle Pool Big Data Commitments**: kushti preparing documentation on how Oracle Pools can post large data commitments on-chain and enable piece-wise processing of big datasets on Ergo blockchain.

- **ChainCash Paper Update**: Updated ChainCash paper completed and available; reflects current research status.

- **Dexy Protocol Mainnet Launch Preparation**: UI by c8e4d2a performing well on testnet; update key holder assignment is primary blocker. Core team seeking community members willing to hold update keys (keys will be burned after months of successful operation).

- **Lithos Protocol Development**: Still working on rollup contracts with testing delays due to stratum issues. Mainnet voting proposed to start May 1st, 2025.

- **Debug/Tracing Infrastructure for ErgoScript**: Multi-faceted discussion on implementing debug traces in ErgoScript. Key approaches: (1) simple debug() passthrough function returning values with labels, (2) implicit trace-on-false (?) operator similar to Aiken, (3) Debug Adapter Protocol integration for IDE-level debugging. Complexity: ErgoTree is AST-reduced bottom-up, not VM-executed; requires special handling for trace nodes.

- **Nautilus Wallet Improvements**: Migrated from lodash to es-toolkit for bundle size reduction and performance gains. i18n support in progress with lazy loading and performance optimizations completed.

- **Sigma-Rust Contributions**: dusek_ identified good first issues for Rustacean contributors. PR #810 awaiting review from dusek_ and pgr456.

- **Sigmastate-Interpreter Testing Failures**: ReducedErgoLikeTransactionSpec fails intermittently in CI but reproduces locally for jozinek.; novamon_25735 identified and fixed AST node reflection issue (DeserializeRegister added to sigma.SigmaDataReflection).

- **Intents & Account Abstraction**: kushti discussing whether Ethereum's account abstraction is slowly catching up to Ergo's UTXO model where everything can be a contract; multistep requirements achievable via MAST/MFSM or signed order execution in contracts.

- **Ergo Basic Template for Developers**: EddNorris released new developer template (https://github.com/ERGnomes/ergo-basic-template) with React integration and AI-assisted scaffolding.

## Important Decisions or Announcements

- [@kushti, msg#33753-33754, 2025-03-26]: PR #1043 finalizes 6.0.0 protocol; other pending PRs will be updated to merge. 6.0.0 PR for node (ergo/pull/2192) and current mainnet blockchain processing testing underway.

- [@kushti, msg#33756, 2025-03-26]: Dexy Protocol mainnet launch discussion; **seeking update key holders** from community. Keys will be burned after months of successful operation.

- [@kushti, msg#33782, 2025-03-26]: RC4 release of 6.0.0 planned for this week; tree version-based versioning was missing from current RC and will be merged.

- [@cheeseenthusiast, msg#33786, 2025-03-27]: Lithos Protocol **mainnet voting proposed for May 1st, 2025**. No rush on launch; project still in active development on rollup contracts.

- [@novamon_25735, msg#33788, 2025-03-27]: Addressed kushti's notes on PR #1055; removed ForceDefault and ScriptReduction tests from default set due to RuntimeException handling for ScriptReduction.

- [@kushti, msg#33795, 2025-03-28]: 5.0.16 release planned with 2 PRs merged (kushti notes PRs #1061, #1062 ready for review before release).

## Technical Q&A Worth Preserving

- **Q** (@ddobreff, msg#33727): Does anyone have a working MiningCore configuration with no duplicate share rejections?  
  **A** (@Aberg, msg#33730): MiningCore has been discontinued.

- **Q** (@watchmekleinarif31, msg#33732-33737): Needs help with mining-related issue.  
  **A** (@kushti, msg#33736): If mining-related, discuss here; kushti lacks MiningCore experience. Issue turned out to be MiningCore configuration question.

- **Q** (@jozinek, msg#33738): ReducedErgoLikeTransactionSpec randomly fails on different CI workflows; cannot reproduce locally.  
  **A** (@kushti, msg#33743): Will check in few days; asks what jozinek is currently working on.

- **Q** (@novamon_25735, msg#33741): JS tests failing in sigmastate-interpreter; executeFromSelfReg failing CI; passing locally (911/911 tests pass).  
  **A** (@kushti, msg#33742): Likely missing AST node translation to JS; can fix. Proposes another round for PR #1055.

- **Q** (@kushti, msg#33744): Are there good first issues in sigma-rust for Rustacean contributors?  
  **A** (@dusek_, msg#33747): Two good first issues listed; dusek_ will clarify benchmarks issue description further.

- **Q** (@kushti, msg#33809): What feedback channel and injection method for debug info in tooling? Consulting @c8e4d2a, @mgpai, @arobsn, @luivatra.  
  **A** (@novamon_25735, msg#33812-33814): Most compilers use AST node walk from input node to generate debug output; can put output in register/var or console with command-line flag; highly use-case dependent. Function can eval(input) to return value and feed it forward.  
  **A** (@mgpai, msg#33815-33823): Suggests Aiken as inspiration: CLI tool compiles to JSON with optional debug traces; traces shown on contract evaluation failure via /script/executeWithContext endpoint (which already exists since 2020). Implicit traces (?) useful for pinpointing which boolean subexpression caused failure.  
  **A** (@kushti, msg#33824): /script/executeWithContext API endpoint available since 2020.  
  **A** (@mgpai, msg#33826, 33841-33843, 33851-33860): Traces in Aiken compile to UPLC Trace builtin; execution VM-based. Supports implicit ? operator on booleans to trace-if-false; shows which exact subexpression failed in nested logic chains.

- **Q** (@mgpai, msg#33828): What does "trace" mean in ErgoScript context?  
  **A** (@kushti, msg#33828): ErgoScript execution is not VM-based; rather AST reduction (bottom-up). Traces cannot work the same way as in Aiken (which is VM-based).  
  **A** (@novamon_25735, msg#33869): Could work without VM but requires serializable node to backstop and operate.

- **Q** (@c8e4d2a, msg#33834): What would ideal ErgoScript debug tracing show?  
  **A** (@c8e4d2a, msg#33832): As DeFi dev interested in calculations; wants to see numbers and evaluation results of individual expressions. Original source code (pre-optimization) preferred over optimized ErgoTree.  
  **A** (@novamon_25735, msg#33835, 33837): Example: `val ergPricePerToken: Long = debug(SELF.R5[Long].get, "ergPricePerToken")` acts as manual passthrough tracer; debug node disappears after job is done; no footprint in resulting AST. This approach "will work."

- **Q** (@ldgaetano, msg#33872): Any prior tools for ErgoScript debugging?  
  **A** (@ldgaetano, msg#33872): References Spectrum's ergoscript-simulator tool (https://github.com/spectrum-finance/ergoscript-simulator).

## Links Shared

- [https://github.com/ChainCashLabs/chaincash/blob/master/docs/conf/conf.pdf]: Updated ChainCash paper

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1043]: PR #1043 finalizes 6.0.0 protocol (tests, versioning fixes)

- [https://github.com/ergoplatform/ergo/pull/2192]: Node PR for 6.0.0; mainnet blockchain processing testing underway

- [https://github.com/ergoplatform/sigma-rust/pull/810]: Pending review from dusek_ and pgr456

- [https://github.com/ergoplatform/sigma-rust/issues?q=is%3Aissue+state%3Aopen+label%3A%22good+first+issue%22]: Good first issues for Rustacean contributors

- [https://github.com/ERGnomes/ergo-basic-template]: New Ergo developer template by EddNorris with React scaffolding

- [https://serv.services/]: Service referenced as example of AI-assisted development tool

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1055]: PR with debug info implementation; passed after DeserializeRegister fix

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1061]: Pending more comprehensive tests before 5.0.16 release

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1062]: Pending review before 5.0.16 release; intermittent CI test failure

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1063]: Approved and merged 2025-03-27

- [https://github.com/spectrum-finance/ergoscript-simulator]: Spectrum's ErgoScript debugging/simulation tool

- [https://x.com/chepurnoy/status/1906478041062068642]: kushti's Twitter thread on protocol 6.0.0 and app ideas

- [https://gitdiagram.com/]: Git repository visualization tool (shared as interesting reference by Marc the Shark)

## Unresolved Questions

- **Debug Trace Output Format**: kushti needs to review output format for debug print (PR #1064, issue #1035); novamon_25735 awaiting feedback on whether format changes needed before finalization.

- **AST Reflection for JS Translation**: novamon_25735 working on AST node reflection edge cases for JavaScript codegen; passed initial tests but full integration still in progress.

- **Scala 3 Cross-Compilation**: jozinek started cross-compiling sigmastate to Scala 3 but hit scala-js compatibility issues; unclear if solvable soon; seeking alternative parallel work for newcomers.

- **Implicit Trace-If-False (?) Operator**: mgpai proposed Aiken-style implicit ? operator for ErgoScript (trace-on-false for boolean expressions), but kushti noted ErgoTree is AST-reduced, not VM-executed, requiring special handling. Implementation approach for ? operator unresolved.

- **Dexy Update Key Holders**: Seeking community volunteers to hold Dexy update keys post-launch; no responses recorded in chat segment.

- **Lithos Stratum Issues**: cheeseenthusiast notes testing delays due to stratum issues on rollup contracts; status not updated in segment.