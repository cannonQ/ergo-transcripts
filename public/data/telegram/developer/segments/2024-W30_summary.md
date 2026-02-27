# Ergo Developer Chat — 2024-W30 Summary

## Key Topics Discussed

- **Schnorr Signature Verification in ErgoScript**: kushti fixed an issue with Schnorr signature verification in a forum post and applied the same fix to ChainCash. Related to enabling cryptographic operations within smart contracts.

- **Sub-blocks Scalability Proposal**: kushti reworked the sub-blocks proposal with a soft fork where only miners need to update; protocol clients benefit from updates but don't require them. Better inclusion guarantees but requires miner node updates.

- **Transaction Sorting & API Ordering**: Transaction sorting in the blockchain/getTxsByAddress API was producing inconsistent ordering. Discussions around whether to sort oldest-to-newest or newest-to-oldest to match explorer behavior, with complications in internal batch processing.

- **ErgoScript Compiler & Language Tooling**: Extended discussion on whether Rust/alternative language compilers for ErgoScript are needed. Consensus that having multiple compilers for the same language risks producing different ErgoTree outputs, making them problematic for on-chain contracts. Focus shifted to needing LSP support and better debugging tools instead.

- **SigmaChain Development Plan**: kushti outlined a multi-phase plan for SigmaChain (generic contractual platform for UTXO blockchains): Sigma 6.0 release (95% complete), making blockchain context more flexible, Ergo node modifications for merge-mined sidechains, then first sigma-chain implementation. Key decision point: merge-mined sidechain vs. standalone blockchain.

- **Paideia DAO Update**: luivatra reported near-real-time backend updates using ZMQ pub/sub, RC1 SDK deployment, modified endpoints to interact directly with singletons (reducing UTXO contention), mempool support with rollback capabilities for forks, and plan to treat last 10 blocks as unconfirmed for safety.

- **Fleet SDK & Mock-Chain**: arobsn working on global stores refactoring in Nautilus wallet and mock-chain fixes for party balance miscalculation with multiple inputs. c8 creating stripped version of Crystal Pool contracts as reference implementation with partial fills and multiple box/seller/token support in single transaction.

- **ChainCash Progress**: Top-up transaction builder completed by dusek; blockchain scanner in progress. CI/CD issue attached with bounty.

- **Rosen Bridge Updates**: Multiple decimal drop refactors across chains (Bitcoin, Cardano, Ergo, EVM), eRSN token support added to watcher, health check notification support under review, raffle v2 integration testing ongoing.

- **Fee Structures & Mempool Management**: Discussion on explicit fees in Ergo (not baked into protocol), fee estimation APIs underutilized by wallets, spam protection in reference client 4.0.44+ with limits per peer, and mempool timeout behavior for low-fee transactions.

- **SigmaUSD Scaling Pattern**: c8 proposed splitting/merging liquidity pools to scale SigmaUSD (AgeUSD v0.4) during peak demand without requiring sequencing, though reserve ratio alignment remains a challenge across separate UTXOs.

- **Analog Ergo Atomic Swaps**: deathgripson implemented event logging, automated swap state reloading tests (recover from client/server offline), fixed JVM subprocess detach bug causing 5-min delays, migrating to importlib for Python framework modules instead of subprocesses, working on simplified market UI.

- **MewPad Launch**: c8 launched meme token launchpad "mewpad" with clean, simple UI using Fleet SDK.

- **Keystone Wallet Integration**: mgpai started diving into Keystone codebase for Ergo wallet support.

- **ErgoNames Permanent Registration**: mgpai clarified ErgoNames have permanent registration (no renewal period), sparking discussion on whether this is sustainable for long-term name market utility.

## Important Decisions or Announcements

- [@kushti, msg#28846, 2024-07-22]: Fixed Schnorr signature issue in forum post (verified by dusek); same fix applied to ChainCash.

- [@kushti, msg#28848, 2024-07-22]: Published reworked sub-blocks proposal on forum requiring miner updates only (soft fork); provides better inclusion guarantees.

- [@kushti, msg#28887, 2024-07-23]: Announced weekly Ergo Developers chat on 2024-07-24, 1PM UTC.

- [@c8, msg#28884, 2024-07-23]: Completed tests for limit order contracts (Crystal Pool); requested default setup with `.es` contract files and vitest file-change reactions.

- [@arobsn, msg#28919, 2024-07-24]: Nautilus wallet global stores refactoring PR ongoing; Fleet SDK mock-chain bug fixed for party balance miscalculation; docs structured approach with first issue completed.

- [@luivatra, msg#28920, 2024-07-24]: Paideia near-real-time backend via ZMQ pub/sub; RC1 SDK deployed; direct singleton interaction endpoints to avoid proxy delays; mempool support with 10-block confirmation window; bootstrap code finishing, bug bounty testing underway, live launch expected in coming weeks.

- [@kushti, msg#28923, 2024-07-24]: Sigma 6.0 PRs polished and under review; unsigned big int PR next; node: finish /blockchain fixes, release 5.0.22 and 5.1.0, then 5.0.23 testing and sub-blocks implementation; ErgoDevs DAO public task management repository launched.

- [@mohammmmmad & zzzzbye, msg#28929-28930, 2024-07-24]: Rosen Bridge: health-check notifications under review, eRSN support added to watcher, decimals drop refactoring across all chains (Bitcoin, Cardano, Ergo, EVM), raffle v2 integration tests in progress.

- [@mgpai, msg#28940, 2024-07-24]: ErgoNames offchain implementation continuing; Keystone integration started.

- [@c8, msg#28962, 2024-07-25]: Created meme token launchpad **MewPad** with clean UI.

- [@kushti, msg#28990, 2024-07-26]: Published SigmaChain development plan: Sigma 6.0 (95% done), flexible blockchain context, Ergo node mods for merge-mined sidechains, first sigma-chain implementation. Key decision point on merge-mined vs. standalone blockchain pending partner identification.

- [@ergomorphic, msg#29002, 2024-07-26]: Implemented alternative "direct" compiler for ErgoScript passing all LanguageSpecification tests; will add debug function and val logging in separate PR.

- [@kushti, msg#29000, 2024-07-26]: Fixed transaction sorting on 213 server; order now preserved (newest to oldest); please test.

- [@kushti, msg#29034, 2024-07-26]: Deployed 5.0.22 candidate to 213 server; testing requested for box/transaction sorting, mempool spent exclusion flag.

- [@kushti, msg#29031, 2024-07-26]: Mining rewards locked in contract with 720-block timelock; cannot be found by ordinary wallet; /peers/connect API method should be used with password-protected unlocking.

## Technical Q&A Worth Preserving

- **Q** (@kvarckvarc, msg#28861): How to get or generate `inputsRaw` and `dataInputsRaw` fields in transaction?
  **A** (@kushti, msg#28862): Usually skip them if you don't know why they are needed. Full response: use `/wallet/payment/send` for simple transactions; if building custom transactions with `/wallet/transaction/sign` and `/transactions`, just skip these fields.

- **Q** (@kvarckvarc, msg#28872): How does balance work if input balance ≠ output balance? Should difference equal fee?
  **A** (@pulsarz & @kushti, msg#28874-28877): Fee is explicit in Ergo (not implicit in balance difference). The protocol doesn't know about fees—they're purely an agreement between sender and miners. You must construct a separate fee output box. Sum of all inputs always equals sum of all outputs (ERG-wise).

- **Q** (@kvarckvarc, msg#28876): Where to put fee in transaction struct?
  **A** (@HQΣr, msg#28879): Create a fee box using OutputBuilder and add the fee amount as `feeBox.ergValue`.

- **Q** (@ccellado, msg#28856 & #28880): How to implement validation recheck for unconfirmed transactions when flag is set?
  **A** (@kushti, msg#28878 & #28886): Check that every input still exists in the validator state after `withUnconfirmedTransactions()`. For each input, verify `state.boxById()` is defined; if any input is spent by another transaction in the pool, mark that transaction as invalid.

- **Q** (@mgpai, msg#28858): What is `executeFromVar`?
  **A** (@luivatra, msg#28859): Provide ErgoTree in context var and evaluate it into SigmaProp.

- **Q** (@c8, msg#28931): Is there a way to set additional registers for the change box in Fleet SDK's `sendChangeTo`?
  **A** (@arobsn, msg#28933): Currently not possible because a single transaction can produce multiple change boxes depending on token count in inputs, and there's no token order guarantee (unsafe for contracts). Suggests creating a Fleet plugin per contract to handle changes individually (see Babel Fees plugin example).

- **Q** (@mgpai, msg#28941): What's the planned renewal period for ErgoNames?
  **A** (@mgpai, msg#28942): Permanent (no renewal). Discussion followed on sustainability vs. collectible rarity model.

- **Q** (@riceandbeans, msg#28964): Where are docs for developing smart contracts for Ergo in Rust?
  **A** (@mgpai, @luivatra, @kushti, msg#28965-28975): Best to develop contracts in ErgoScript (simple language in LangSpec), then create offchain part in Rust using Sigma-rust. Cannot compile contracts to ErgoTree using Rust directly; use JS in browser (escript.online via sigmastate-js) or Scala. Example: oracle pools (contracts + Rust offchain). Understand UTXO transactional model first.

- **Q** (@mgpai, msg#28978): Can you compile ErgoScript contracts using Rust?
  **A** (@pulsarz, @kushti, @mgpai, msg#28979-28981): JS compilation via Fleet (sigmastate-js) and escript.online works; doesn't matter much as you won't recompile on-the-fly usually. Sigma-rust compiler exists but not actively used in oracle-core. Different compilers producing different trees is problematic (risk of tracking discrepancies on-chain).

- **Q** (@mgpai, msg#28985): What would be the best tooling improvement for ErgoScript?
  **A** (@mgpai & @kushti, msg#28985-28988): LSP (Language Server Protocol) would be valuable. Alternative compilers are problematic because producing same output for same program is highly desirable and hard to replicate across languages.

- **Q** (@c8, msg#28943): Is permanent registration for ErgoNames sustainable? Names mint, forgotten, taken out of market forever.
  **A** (@mgpai, msg#28950): Link to previous discussion in Discord (1196946041606525058); design choice trade-offs already evaluated.

- **Q** (@c8, msg#29036-29043): How to scale SigmaUSD during peak demand?
  **A** (@c8 & @luivatra): Split liquidity (multiply pools) or merge (combine pools) without requiring sequencing. Reserve ratio alignment is challenge across separate UTXOs, but market forces could balance them out; take more profitable operations first.

- **Q** (@luivatra, msg#29053): Who is maintaining sigma-rust?
  **A** (@kushti, msg#29056): dusek_ to review issue on sigma-rust signing failure (issue #757).

- **Q** (@danshkr, msg#29050): How to configure Ergo node to connect only to specified peer IPs?
  **A** (@aberg, msg#29052): Use config: `scorex { network { knownPeers = ["host:port"] } }`. Note: only used on first start; delete peer database if node already ran.
  **A** (@kushti, msg#29055): Can also use `/peers/connect` API with POST request and API key.

## Links Shared

- [https://www.ergoforum.org/t/verifying-schnorr-signatures-in-ergoscript/3407/2]: kushti's Schnorr signature verification forum post with fix.

- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/10]: Sub-blocks scalability proposal (reworked).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/976]: Sigma 6.0 PR (under review).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1007]: Sigma 6.0 PR (under review).

- [https://github.com/ergoplatform/ergo/issues/2092]: Cleanup worker validation issue.

- [https://github.com/SavonarolaLabs/fleet-by-example/tree/master/tests/crystal-pool]: Crystal Pool limit order contract tests.

- [https://github.com/fleet-sdk/fleet-by-example/pull/1]: Stripped Crystal Pool contracts for learning (buy/sell/swap with partial fills).

- [https://github.com/nautls/nautilus-wallet/pull/157/files]: Nautilus global stores refactoring PR.

- [https://github.com/fleet-sdk/docs/issues/10]: Fleet SDK docs structured approach (first issue complete).

- [https://github.com/cruxfinance/ergo-node-zmqpub]: ZMQ pub/sub integration for real-time backend updates.

- [https://github.com/ergoplatform/ergo/pull/2164]: Mining candidate caching PR (check against current + previous).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1022]: Alternative "direct" compiler for ErgoScript.

- [https://github.com/ergoplatform/ergo/pull/2131]: UTXO API pagination PR.

- [https://github.com/ergoplatform/ergo/pull/2170]: PR for review (unspecified).

- [https://github.com/rosen-bridge/health-check/commit/7299dcf42894cbb2bfbb1758a31b6e169b3976f5]: Rosen health-check notification support.

- [https://github.com/rosen-bridge/watcher/commit/bf3124dc0817e770fc60a0dcbd2094cb239abf75]: Rosen watcher eRSN support.

- [https://github.com/rosen-bridge/utils/commit/2986e83f103cac9e639de08b23fb7524d2d3fc17]: Rosen utils decimals drop fix.

- [https://github.com/rosen-bridge/rosen-chains/commit/a16a126e4c687baef04a1086eee7a193238a1948]: Rosen chains base refactor.

- [https://github.com/ChainCashLabs/chaincash-rs/issues/46]: ChainCash CI/CD issue with bounty.

- [https://github.com/mgpai22/ergo-miner-reward-consolidator]: Ergo miner reward consolidator script (deathgripson).

- [https://github.com/FlyingPig69/Ergo_Token_Minter]: Ergo token minter (Python-based).

- [https://github.com/FlyingPig69/FP_Consolidate]: UTXO consolidation tool using Python + indexed node wallet.

- [https://github.com/SavonarolaLabs/mewpad]: MewPad meme token launchpad.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md]: ErgoScript language specification.