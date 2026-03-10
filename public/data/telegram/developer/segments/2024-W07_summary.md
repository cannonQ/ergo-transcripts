---
title: "Ergo Developer Chat — 2024-W07"
date_start: "2024-02-12"
date_end: "2024-02-18"
type: telegram_weekly
channel: developer
week: "2024-W07"
source: telegram
message_count: 144
categories: [technical, wallet, defi, bridges, ecosystem, nft, mining, governance]
key_terms: [v5.0.20, reference client, release, SigmaMap, ErgoLikeContext, Scala3, opaque types, Digest32, Digest64, supertagged, runtime type checks, wallet/payment/send, 400 Bad Request, maxInputs, timeout, UTXO boxes, Nautilus, message signing, EIP-44, SigmaProp]
---
# Ergo Developer Chat — 2024-W07 Summary

## Key Topics Discussed

- **Ergo Node 5.0.20 Release**: Reference client released with protocol improvements; scrypto library updated and merged after Scala 3 migration work completed.

- **SigmaMap Implementation Rework**: Optimization of context extension variable representation to avoid inefficient sparse arrays (e.g., P2SH addresses containing 126 empty cells for 1 value); addresses ErgoLikeContext handling.

- **Dexy Protocol Testing**: Closed testing progressing well; issue identified with absent chained transactions in bank logic being addressed by @dmitryusov; redemption support in offchain code under development by @code_for_uss.

- **Nautilus Wallet Refactoring & Manifest v3 Migration**: Arbitrary message signing capability added; EIP-44 changes discussed for SigmaProp signature support; guidance sought on displaying signed data similar to MetaMask implementation.

- **Scala 2/3 Type Testing Discrepancy**: Broken test in scrypto Hash specifications revealed—Scala 2 silently passed type checks that Scala 3 fails; tests should be disabled or rewritten as they don't reflect actual usage. Root cause: opaque type behavior differs between compiler versions; runtime `isInstanceOf` checks impossible without boxing values or recreating supertagged machinery.

- **Sidechain Construction**: Continued R&D on verified sidechain prototypes; merge-mined sidechain implementation with trustless pegging and smart contract emission rewards for mainchain miners.

- **2024 Ergo R&D Roadmap**: Phases-based plan in preparation for formal proposal; expected announcement same day.

## Important Decisions or Announcements

- [@kushti, msg#24983, 2024-02-14]: Ergo protocol reference client **5.0.20 released**; scrypto library PR #109 merged; new scrypto release planned.

- [@kushti, msg#24935, 2024-02-12]: Bounties for 5.0.20-related work approved for execution.

- [@ccellado, msg#24970, 2024-02-13]: Broken hash type test confirmed in scrypto master branch; test library silently passed broken assertions in Scala 2, caught by Scala 3 compiler stricter evaluation.

- [@capt_nemo429, msg#24985, 2024-02-14]: Nautilus wallet release planned this week with arbitrary message signing capability added.

- [@cheeseenthusiast, msg#25027, 2024-02-14]: Lithos client basic work ongoing; Stratum integration into client initiated; statistical testing of NISP parameters underway.

- [@mhs_sam, msg#25105, 2024-02-18]: **Minotaur wallet v2.0.0-rc1 released** for testing (not production); major redesign, bug fixes, performance optimizations across all components.

## Technical Q&A Worth Preserving

- **Q** (@peterpan0708, msg#24940-24943): Wallet payment send endpoint returns `400 Bad Request` when transfer amount exceeds 20,000 ERG; increasing maxInputs doesn't resolve issue.
  **A** (@peterpan0708, msg#24949): Resolved by increasing maxInputs further and raising timeout to 180 seconds. (@kushti, msg#24950): Inquired about total UTXO count via `/wallet/boxes/unspent` endpoint.

- **Q** (@Aco Šmrkas, msg#25039-25041): Transaction signing fails with "Prover error: not enough witnesses" when using ergo-lib-wasm; suspected incorrect mnemonic wallet restoration.
  **A** (@HQΣr, msg#25045-25046): Asks for repo details and suggests @Pulsarz or @alex_slesarenko; unresolved.

- **Q** (@dusek_, msg#25035): Is there a node endpoint for fetching minting info for multiple token IDs in one request (batch equivalent of `/blockchain/token/byId/{tokenId}`)?
  **A**: Unresolved.

- **Q** (@kushti, msg#24986): How critical are EIP-44 changes currently?
  **A** (@capt_nemo429, msg#24998): Not critical but EIP-44 change for SigmaProp-based signatures already in progress; GroupElement signing sufficient for Nautilus now.

- **Q** (@mgpai, msg#25001-25009): Should signed data display guarantees be implemented in Nautilus, given user should know what they sign and interface could misrepresent content?
  **A** (@capt_nemo429, msg#25004-25005): Notes ledger/screen-constrained devices problem; proposes MIME type specifications as workaround but acknowledges issue remains. (@mgpai, msg#25006): Suggests warning for oversized content with download option.

- **Q** (@peterpan0708, msg#25099): Wallet has 40,000+ unspent boxes causing `/wallet/payment/send` slowness; how to improve?
  **A**: Unresolved.

## Links Shared

- [https://github.com/ergoplatform/ergodocs/pull/53](https://github.com/ergoplatform/ergodocs/pull/53): Documentation PR approved and merged (@kushti, msg#24930).

- [https://github.com/ergoplatform/ergodocs/pull/54](https://github.com/ergoplatform/ergodocs/pull/54): Documentation PR awaiting review (@kushti, msg#24931).

- [https://github.com/ergoplatform/ergo/pull/2086](https://github.com/ergoplatform/ergo/pull/2086): DeepRollbackSpec PR; linked for review (@ccellado, msg#24932).

- [https://github.com/input-output-hk/scrypto/pull/109](https://github.com/input-output-hk/scrypto/pull/109): Scrypto Scala 3 migration PR merged (@kushti, msg#24968).

- [https://github.com/ergoplatform/ergo/pull/2113](https://github.com/ergoplatform/ergo/pull/2113): PR reminder by @ccellado (msg#24969); awaiting action.

- [https://github.com/ergoplatform/sigma-rust/pull/736](https://github.com/ergoplatform/sigma-rust/pull/736): Bounty attached by @dusek_ (@kushti, msg#24999).

- [https://github.com/ergoplatform/ergo/issues/2093](https://github.com/ergoplatform/ergo/issues/2093): Issue raised by @mgpai (msg#25000).

- [https://github.com/ergoplatform/ergo/issues/2108](https://github.com/ergoplatform/ergo/issues/2108): Issue raised by @mgpai (msg#25000).

- [https://docs.metamask.io/wallet/how-to/sign-data/](https://docs.metamask.io/wallet/how-to/sign-data/): MetaMask signing documentation shared as reference for EIP-44 implementation (@mgpai, msg#25996).

- [https://github.com/ergoplatform/eips/blob/master/eip-0044.md#encoding](https://github.com/ergoplatform/eips/blob/master/eip-0044.md#encoding): EIP-44 encoding pattern reference (@capt_nemo429, msg#24997).

- [https://github.com/kushti/dexy-stable/blob/master/paper/dexy.pdf](https://github.com/kushti/dexy-stable/blob/master/paper/dexy.pdf): Dexy protocol whitepaper (@Pulsarz, msg#25038).

- [https://ergo.getgrist.com/jf9KPR1HUDJH/Project-Management](https://ergo.getgrist.com/jf9KPR1HUDJH/Project-Management): Ergo repository project management sheet categorized by department, category, person, language (@Glasgow, msg#25033).

- [https://github.com/minotaur-ergo/minotaur-wallet/releases/tag/v2.0.0-rc1](https://github.com/minotaur-ergo/minotaur-wallet/releases/tag/v2.0.0-rc1): Minotaur wallet v2.0.0-rc1 release candidate (@mhs_sam, msg#25105).

## Unresolved Questions

- Type test compatibility between Scala 2 and Scala 3 for opaque types: whether to recreate supertagged behavior or write new tests. Debate ongoing between @ergomorphic and @ccellado on feasibility and necessity (@ccellado, msg#25101-25104). Resolution: disable test and create separate issue.

- Batch token minting info endpoint: no existing API identified (@dusek_, msg#25035).

- Ergo-lib-wasm transaction signing failure: root cause unclear; possible mnemonic restoration issue (@Aco Šmrkas, msg#25041).

- UTXO optimization for wallets with 40,000+ unspent boxes: performance improvement strategy unidentified (@peterpan0708, msg#25099).

- Ledger/hardware wallet support for signed data display on screen-constrained devices: architectural concern raised but no concrete solution proposed (@capt_nemo429, msg#25004-25005).