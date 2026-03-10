---
title: "Ergo Developer Chat — 2024-W29"
date_start: "2024-07-15"
date_end: "2024-07-21"
type: telegram_weekly
channel: developer
week: "2024-W29"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo Developer Chat Summary — 2024-W29

## Key Topics Discussed

- **AVL Trees vs. Merkle Patricia Trees**: Discussion on why Ergo uses AVL trees instead of MPTs for state commitment. kushti noted AVL trees are 2-party ADS (Authenticated Data Structures) while MPT design goals are unclear, and Ethereum's MPT implementation is inefficient (losing ~40% space in proofs). Reference paper: https://eprint.iacr.org/2016/994.pdf

- **ErgoScript Debugging & Developer Experience**: Extended discussion on tooling gaps. Current state: ErgoScript lacks LSP, debugger, and EBNF specification. c8 highlighted that intermediate variable inspection during contract execution would be critical for testing and debugging; ergomorphic proposed alternative compilation path without optimizations to enable debug() operations in ErgoTree.

- **Mock Chain Test Framework Improvements**: c8 identified that Fleet SDK's mock-chain lacks enforcement of storage rent (360 nanoerg/byte), miner fees, and realistic UTXO constraints, making transaction chaining tests impractical. arobsn fixed a UTXO invalidation bug (v0.5.1) and added configurable box selector via `ensureInclusion()`.

- **Sigma Protocols & Zero-Knowledge Proofs**: kushti explained bulletproofs as compact Sigma protocols for zero-knowledge statements, enabling generic proofs without trusted setup. Discussed possibilities for ErgoScript verification of similar proofs (Groth one-out-of-many, etc.) to unlock hybrid contract patterns combining on-chain and zero-knowledge execution.

- **Ergo 6.0 Sigma Improvements**: kushti reported progress on PRs #1017, #1020, #997 (BigInt type finalization), and remaining issue #905. Plan: finalize Sigma 6.0 candidate by end of week, then polish and test in DevNets.

- **Scalability via Sub-blocks & Merged Mining Sidechains**: kushti revisiting sub-blocks design after evaluating Prism and Flux proposals. Separately, working on trustless sidechain construction similar to BIP 301, with emission contracts rewarding mainchain miners for delivering sidechain data.

- **ChainCash Monetary System**: Spending note and storage implementation merged; API design ongoing. Intended as pure p2p protocol for Bitcoin-like peer-to-peer cash, potentially scaling to mixed server-client models with shared payment servers.

- **Oracle Pools v2.0.2**: Released with reward distribution improvements forthcoming in v2.0.3. Maintains two active implementations: Oracle Pool v1 (run by EF members and external operators) and Oracle Pool v2 (running for Dexy Gold with GORT rewards).

- **SigmaChains & Chain Commitments**: kushti published forum post on chain commitment options; actively coordinating with multiple parties on SigmaChains launch strategy.

- **Nautilus Wallet Refactoring**: Refactoring global stores for improved speed and modularization as foundation for mempool transaction chaining support. Ledger integration changes requested by Ledger HQ completed by Tesseract team; status pending Ledger team review.

- **Paideia DAO Contracts Optimization**: Luca reduced contract size from 4.5kb to <2kb by storing only hash of concatenated config key hashes (instead of individual blake2b256 hashes as constants), with keys provided in context variables. Starting bug bounty for 1.0.0 contracts; remaining contracts to reach 1.0.0 by end of week.

- **Crystal Pool DEX**: c8 completed deposit/withdraw UI and began testing contracts with Fleet SDK mock-chain; discovered and reported UTXO invalidation bug.

- **ErgoNames Deployment Tool**: mgpai developed CLI for contract deployment with ability to clone boxes from mainnet to testnet for scenarios requiring specific inputs (LP, oracle boxes).

- **Lithos Protocol Mining Hardware Expansion**: Cheese Enthusiast (Lithos lead) confirmed original mainnet launch plan unchanged; Nov–Dec 2024 reserved for NISP contract work using 6.0 features.

- **Sigmanauts Mining Pool DAO**: Marc the Shark reported official DAO creation, token distribution (~12–13 tokens), tx token swap code ready for MiningCore integration, miner ID minting vote pending (consensus ~3 ERG), beta testing imminent. Integrating "fan clubs" theme selector and "degen mode" random token distribution.

- **Block Template Regeneration**: Pgr456 proposed periodic regeneration of block candidates (PR #2164); discussion clarified that mining pools already poll for new jobs every 400ms, mitigating share loss concerns. Decided to cache 2 candidates to handle valid solution submissions for old candidates.

---

## Important Decisions or Announcements

- [@kushti, msg#28559, 2024-07-17]: Ergo protocol R&D roadmap post-6.0: finalizing Sigma improvements by end of week, polishing PRs, assembling Sigma 6.0 candidate for DevNet testing. Sub-blocks revisited after Prism/Flux evaluation; Flux proposal analysis ongoing.

- [@kushti, msg#28559, 2024-07-17]: ChainCash spending note & initial storage implementation merged; API design next. Oracle Pools v2.0.2 released; v2.0.3 with reward distribution PR forthcoming.

- [@kushti, msg#28825, 2024-07-21]: Release plan: 5.0.22 with PR #2167 and issue #2093 support, followed by 5.0.23 after testing. 5.1.0 aligned with 5.0.22. Potential release next week.

- [@kushti, msg#28826, 2024-07-21]: `executeFromVar` support available in ErgoTree since early testnets; ErgoScript compiler support missing. Can be polished now for landing in 5.0.15 if needed.

- [@Cheese Enthusiast (Kirat), msg#28608–28609, 2024-07-18]: Lithos Protocol: original mainnet launch plan unchanged for next year (Nov–Dec reserved for NISP contracts using 6.0 features).

- [@Marc the Shark, msg#28588, 2024-07-17]: Sigmanauts Mining Pool DAO officially created; tx token swap code ready for MiningCore integration. Miner ID minting consensus ~3 ERG; vote this week. Beta testing scheduled "real real soon."

- [@Luivatra, msg#28583, 2024-07-17]: Paideia bug bounty launched for 1.0.0 contracts (severity-based rewards); remaining contracts pushed to 1.0.0 by next day.

---

## Technical Q&A Worth Preserving

- **Q** (@mgpai, msg#28388): Why does Ergo use AVL trees instead of Merkle Patricia Trees?
  **A** (@kushti, msg#28390, msg#28406): MPT design goals are unclear/undefined. Unknown if MPT qualifies as 2-party ADS. Ethereum's MPT implementation loses ~50% space in proofs due to encoding; even corrected, ~40% worse than AVL. MPT structure itself is inefficient; requires checking source code for root cause.

- **Q** (@mgpai, msg#28396): Where can documentation on MPT inefficiency be found?
  **A** (@kushti, msg#28406): See paper https://eprint.iacr.org/2016/994.pdf; comparison of blockchain optimizations and design trade-offs.

- **Q** (@c8, msg#28560): How many input boxes can safely be used in a limit order fill transaction?
  **A** (@kushti, msg#28564): What does "safely" mean? For mempool acceptance? (@mgpai, msg#28565): As long as under tx size limit (~96kb propagation limit protecting p2p network), should be fine. Block size limit slightly over 1MB; initially 512kb, raised several times by miners.

- **Q** (@c8, msg#28530): Does a transaction require miner fee to be accepted in mempool?
  **A** (@kushti, msg#28531–28533): Transaction won't be accepted by other peers without fee. Mempool will accept via API (default minimum 0.001 ERG). (@Flying Pig, msg#28537): Node has minimum miner fee setting; default 0.001 ERG.

- **Q** (@kushti, msg#28418, msg#28424): How does Alephium implement p2p contracts if account model is standard there?
  **A** (@mgpai, msg#28422–28475): Alephium created SigmaFi equivalent (linxotc.com). Contracts depend on marketplace contract; only marketplace can call take(). Not true p2p. (@kushti, msg#28502): Different trust assumptions from true SigmaFi; marketplace controls lending enable/disable, admin key updates.

- **Q** (@c8, msg#28592): Does scriptname lookup exist for ErgoScript compiled code?
  **A** (@c8, msg#28597): No interpreter/stepper/debugger exists. (@mgpai, msg#28598): i.oskin had something in Scala, unclear translation outside Scala stack.

- **Q** (@c8, msg#28620–28631): Can intermediate ErgoScript variable values be exposed during contract execution for unit testing?
  **A** (@ergomorphic, msg#28629–msg#28664): Simplest approach: make interpreter log values as calculated. (@ergomorphic, msg#28635–msg#28638): ErgoTree has ValDef(id, expr) nodes; name lost during compilation but can be saved. ValDef evaluated during execution, enabling `name: value` emission. Optimizations (CSE) may break ValDef relation; optimizations can theoretically be disabled but practically not implemented. Alternative: direct compilation path without optimizations; requires changes in compiler & interpreter multiple places.

- **Q** (@c8, msg#28807–msg#28809): What is minimum nanoerg amount per box? What is SAFE_MIN_BOX_VALUE?
  **A** (@Luivatra, msg#28810): 360 nanoerg per byte. (@arobsn, msg#28828): SAFE_MIN_BOX_VALUE is convention for 2,777-byte boxes, suitable for most use cases. (@arobsn, msg#28829): Can use Fleet's `estimateMinBoxValue()` in OutputBuilder to automate calculation.

- **Q** (@Unknown, msg#28802–msg#28804): Can Paideia DAOs nest (DAO as member of another)? Will `executeFromVar` in 6.0 optimize "companion contracts"?
  **A** (@Luivatra, msg#28806): Treasury can send to p2s with filled registers, enabling proxy contract pattern. (@kushti, msg#28826): `executeFromVar` supported in ErgoTree since early testnets but missing ErgoScript compiler support; can be polished for 5.0.15.

- **Q** (@c8, msg#28727): Why does Fleet mock-chain show 500 rsBTC after swap starting with 400?
  **A** (@arobsn, msg#28740): UTXO invalidation algorithm bug; fixed in v0.5.1.

- **Q** (@c8, msg#28814–msg#28815): How to calculate minimum box value? Should mock-chain enforce storage rent & miner fees?
  **A** (@c8, msg#28811): Minimum = size × 360 nanoerg (query `/api/v1/info` for current `minValuePerByte`). (@arobsn, msg#28829): Use Fleet's `estimateMinBoxValue()`. (@c8, msg#28815–msg#28817): mock-chain should enforce storage rent & miner fees by default; currently impractical for transaction chaining tests.

- **Q** (@c8, msg#28493): Is SString usable to input text into registers?
  **A** (@kushti, msg#28496): SString is virtual compiler-only type; no way to store value of that type in registers. Use SColl(SByte, stringToBytes("utf8", text)). (@c8, msg#28508): Fleet SDK should provide `SString()` convenience function wrapping this pattern.

- **Q** (@mgpai, msg#28511): How do you define p2p contracts?
  **A** (@kushti, msg#28517): Only two parties participate, without marketplace or intermediary contract.

- **Q** (@c8, msg#28626–msg#28633): Can prover.reduce() expose ErgoScript variable values for debugging?
  **A** (@ergomorphic, msg#28629, msg#28635): Interpreter can log values during calculation. ValDef nodes in ErgoTree track variable names; can emit `name: value` during evaluation. Constraint: optimizations (CSE) alter ValDef structure; direct compilation path without optimizations required for stable mapping.

---

## Links Shared

- [https://eprint.iacr.org/2016/994.pdf]: Merkle Patricia tree design vs. AVL trees research comparison
- [https://github.com/ergoplatform/ergo/issues/2168]: Testnet documentation errors
- [https://github.com/ergoplatform/ergo/issues/2092]: Optimization PR (#2092) included in 5.0.14 release candidate
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1017]: Sigma 6.0 PR (costing finalization)
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1020]: Sigma 6.0 PR (fix needed)
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/997]: Sigma 6.0 BigInt type finalization
- [https://github.com/ScorexFoundation/sigmastate-interpreter/issues/905]: Remaining Sigma 6.0 issue
- [https://www.ergoforum.org/t/sigmachains-pt-1-chain-commitments/4817]: SigmaChains chain commitment design post
- [https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.2]: Oracle Core v2.0.2 release
- [https://github.com/ergonames/ergonames-deployment]: ErgoNames CLI deployment tool
- [https://github.com/zenGate-Global/winter-cardano-contracts]: Alephium/Cardano SigmaFi equivalent (Linx OTC contracts)
- [https://linxotc.com/]: Alephium SigmaFi implementation
- [https://github.com/ThinEdgeLabs/linx_otc/tree/main/contracts]: Linx OTC contract source
- [https://github.com/aiken-lang/merkle-patricia-forestry/tree/main/on-chain#readme]: Aiken MPT data structure abstractions
- [https://github.com/PhoenixErgo/phoenix/blob/main/src/test/scala/mockchain/hodlERG/PhoenixSpec.scala]: Scala test patterns for ErgoScript
- [https://github.com/ScorexFoundation/sigmastate-interpreter/blob/3fce4d720dce436ac79f90d6029bc98cf17134e4/sc/shared/src/test/scala/sigmastate/utxo/examples/AssetsAtomicExchange.scala#L15]: Mini-DSL for ErgoScript debugging in Scala tests
- [https://github.com/SavonarolaLabs/squared]: Vitest real-time contract test example
- [https://github.com/fleet-sdk/fleet-by-example/blob/master/tests/timedFundContract.spec.ts]: Fleet mock-chain usage example
- [https://savonarolalabs.github.io/crystal-pool/#/05-Smart-Contracts?id=_2-swap-contract]: Crystal Pool swap contract & design
- [https://escript.online/]: ErgoScript online playground with tree visualization
- [https://github.com/ergoplatform/ergo/pull/2167]: PR for 5.0.22 release
- [https://github.com/ergoplatform/ergo/issues/2093]: Block template candidate storage issue
- [https://github.com/ergoplatform/ergo/pull/2169]: PR #2169 (block candidate feature)
- [https://github.com/fleet-sdk/fleet/pull/90/files]: Fleet SDK