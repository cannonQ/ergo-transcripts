# Ergo Developer Chat Summary — 2025-W09
**Period:** 2025-02-24 to 2025-02-28  
**Participants:** 6 active developers + DiscordBridge relay

---

## Key Topics Discussed

- **Limit Order Contracts & Template Hash Verification**: Developer working on verified DexLimitOrder contracts from Ergo Platform unable to match published template hashes; unclear if contracts are actively used or if order matching bots exist. Questions whether implementation or compilation approach is incorrect.

- **Nautilus Wallet Refactor (Beta)**: First refactored beta released to Google Play (Abyss channel). Significant UI/UX improvements including redesigned dApp Connector views, upgraded Tailwind v4, reka-ui v2 migration, chart.js integration, and token logo additions (rsBNB, rsETH).

- **Paideia DAO Updates**: Fixed stake-fetching bug that returned stale box values; switched to creation-height sorting. Frontend bug identified: incorrect token display when proposals send same token to multiple addresses with different amounts.

- **SigmaUSD Bank Contract Upgrade**: Decision to update SigmaUSD bank contract; planned for this week with contract hash voting. Will refresh update box ahead of mainnet Dexy token issuance and contract deployment next week.

- **Ergo Protocol 6.0 Soft-Fork & sub-blocks**: Final audit, testing, and code cleanup ongoing for sigmastate-interpreter PR#1054. sub-blocks implementation still working on fork resolution and missing parent handling. Context extensions API methods identified as missing; fix planned for v5.0.26 release.

- **Ledger Integration (Hardware Wallet)**: Third-party audit completed; production-ready status confirmed. Awaiting official release date from Ledger HQ.

- **Lithos Protocol Rollup**: Iterating on fraud proofs and contract robustness; significant codebase cleanup underway, aiming for public release before testnet launch. Stratum implementation being reworked due to nbminer compatibility issues.

- **Rosen Bridge QA & Feature Expansion**: Full test coverage achieved across 5 scenarios (invalid to-address, cold storage, arbitrary order, event reprocess, event synchronization). Dashboard improvements, form streamlining, and Binance token support added. Nami wallet support discontinued.

- **Atomic Swap Contract Research**: Historical atomic swap contracts from 2020 identified but barely used (4 executions, template hashes: `19cc2521a45fcfb714ad741d53e6672ca4b02f62ead459664bde8793d9a4513d` seller, `9b5296026271044bb4ef5cf12dd2781f660a4e0d36a32924062a8beabc293398` buyer). Question raised whether atomic swaps have been abandoned or could bridge with Spectrum DEX pool liquidity.

- **Compiler Design & ErgoTree Verification**: Extended discussion on ErgoScript/ErgoTree compilation, reproducibility, and template hash tracking. Developer with embedded systems and RISC-V background joining compiler work; emphasized need for robust test coverage given critical nature of compilation layer.

---

## Important Decisions or Announcements

- [@kushti0978, msg#33145, 2025-02-25]: Weekly Ergo Developer chat scheduled for Wed Feb 26, 1PM UTC. Feedback on financial contracts, 6.0 protocol soft-fork, input/ordering blocks EIP, and L2 research requested.

- [@c8e4d2a, msg#33162, 2025-02-26]: ergfi.xyz ready for release next week; mempool server integration, swap widget, TX building, and history complete. Dexy Gold contract widget in progress.

- [@kushti0978, msg#33165-33166, 2025-02-26]: SigmaUSD bank contract update planned this week; votes (contract hash) to be sent for submission. Mainnet Dexy token issuance and contract deployment target next week.

- [@HQΣr, msg#33179, 2025-02-26]: Keystone hardware wallet development resources tight; test phase targeting **March** (revised from earlier timeline).

- [@arobsn, msg#33203, 2025-02-28]: Redesigned Nautilus wallet (Abyss channel) released for testing; feedback requested.

---

## Technical Q&A Worth Preserving

- **Q** (@iospore, msg#33143): DexLimitOrder contract template hashes don't match published GitHub contracts. Using AppKit to compile ErgoScript; getting hashes via `Sha256.hash(ergoTree.template)`. Are these correct hashes, or are updated/more-used contracts available?  
  **A** (@greenhat, referenced msg#33192): Implied atomic swaps from 2020 exist but barely used (4 explorer hits). Suggested bridge mechanism between atomic swap contracts and Spectrum DEX pool-based swaps could improve liquidity.

- **Q** (@novamon_25735, msg#33157): Script verification critical; want to add validation steps post-changes to #1035. How to debug ErgoTree (direct AST interpretation, not bytecode)?  
  **A** (@kushti0978, msg#33160): ErgoTree is direct-style interpretation of typed ASTs (compact on-chain representation). ErgoScript compiles to ErgoTree with optimizations. Debug not straightforward (unlike bytecode) but done in systems like GraalVM; approach needs review.

- **Q** (@c8e4d2a, msg#33164): With 0-conf support, should Nautilus stream UTXO changes via `window.postMessage()`? Or poll Nautilus every 10s for new UTXOs?  
  **A** (@arobsn, msg#33176): Streaming is ideal but challenging in Manifest v3 (service workers designed to passively respond). Hacks exist to keep workers active indefinitely but may fail Google Play review without justification. Requires research.

- **Q** (@iospore, msg#33191): Can compiler accept a variable controlling code generation for reproducible results? Or hash original script instead of template/bytecode to track contracts?  
  **A** (Implicit in context): Contracts compiled once; template matching prevents forward/backward compatibility. Requested solution would allow contract updates alongside compiler improvements without breaking existing swaps.

- **Q** (@krasaviceblasen, msg#33193): Will SigmaUSD upgrade move away from fixed output/input indices (context vars or general output logic)? Valuable for other dApps.  
  **A** (@c8e4d2a, msg#33194, @Luivatra, msg#33195): No PR/audit yet for index-agnostic update. Main goal: save update UTXO from storage rent. (@krasaviceblasen, msg#33199): Willing to make PR; proposed changes trivial to audit (1-line change) but needs clarity on SigUSD update roadmap (minting limits, destroy key, etc.).

- **Q** (@mgpai, msg#33200): Does Base blockchain implement sub-blocks per their recent post?  
  **A** (@kushti0978, msg#33201): No — Base is corporate EVM execution environment, not PoW blockchain. Sub-blocks unnecessary for such applications; more performant solutions exist.

---

## Links Shared

- [GitHub: DexLimitOrder.scala](https://github.com/ergoplatform/ergo-contracts/blob/develop/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala): Verified limit order contract implementation (template hashes unconfirmed).

- [GitHub Issue #1053](https://github.com/ergoplatform/sigmastate-interpreter/issues/1053): Compiler work (@ccellado assigned).

- [GitHub PR #1054](https://github.com/ergoplatform/sigmastate-interpreter/pull/1054): 6.0 protocol audit, testing, and code cleanup in progress.

- [GitHub Release: ergo-node-interface-rust v0.5.0](https://github.com/ergoplatform/ergo-node-interface-rust/releases/tag/v0.5.0): Released 2025-02-26.

- [YouTube: Ergo Developer Update](https://www.youtube.com/watch?v=nYqX9VC6mYw): Sunday podcast covering weekly community developer updates.

- [Chrome Web Store: Nautilus Abyss](https://chromewebstore.google.com/detail/nautilus-abyss/moaohjebjfiodfiegjnjkbnalepemcpf): Redesigned Nautilus wallet beta for testing.

---

## Unresolved Questions

- **DexLimitOrder Template Hash Validation**: Are published contract hashes correct? Are limit order contracts actively used, or have they been superseded? (Outstanding since msg#33143)

- **Atomic Swap Viability**: Have atomic swaps been abandoned, or can bridge contracts connect them to Spectrum DEX liquidity? What would incentivize such bridges? (msg#33192)

- **SigmaUSD Index-Agnostic Update Scope**: Will the bank contract upgrade include migration away from fixed input/output indices? Timing and roadmap unclear. (msg#33193, msg#33199)

- **Nautilus 0-Conf UTXO Streaming**: How to implement passive streaming within Manifest v3 constraints without jeopardizing Google Play review? (msg#33164, msg#33176)

- **Compiler Reproducibility & Template Hash Tracking**: Can ErgoScript compiler accept determinism parameters or use source-level hashing to decouple contract identity from binary representation? (msg#33191)

- **sub-blocks Fork Resolution**: Status of fork handling and missing parent reconstruction in implementation. Expected timeline not stated. (msg#33170)