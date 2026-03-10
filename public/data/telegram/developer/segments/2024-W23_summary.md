---
title: "Ergo Developer Chat — 2024-W23"
date_start: "2024-06-03"
date_end: "2024-06-09"
type: telegram_weekly
channel: developer
week: "2024-W23"
source: telegram
message_count: 192
categories: [technical, wallet, governance, ecosystem, bridges, mining, defi, nft, community]
key_terms: [release, PR review, version finalization, sigmastate-interpreter, "Option[] serialization", Header serialization, Global.serialize, MethodCall tests, EIP-50, wallet deletion, seed phrase, Tag Mismatch error, encryption, password reset, PR dependencies, test coverage, code organization, cherry-picking, commit authorship, multisig hints]
---
# Ergo Developer Chat Summary — 2024-W23
**Period:** 2024-06-03 to 2024-06-09  
**Messages:** 192 | **Participants:** 12

---

## Key Topics Discussed

- **Sigma 6.0 Development**: Multiple PRs in review for v6.0 features including SOption[] serialization (#990), Header serialization (#972), Header.checkPoW method (#968), and unsigned big integer support. Focus on expanding cryptographic capabilities and ErgoScript verification.

- **ErgoHack VIII Submissions**: kushti completed Bitcoin relay and transaction inclusion proof validation with public domain code available at https://github.com/ross-weir/ergohack-sidechain. Multiple projects in production/testing phases including Blitz TCG, CrystalPool, and Atomic Swap (Analog Ergo).

- **Dexy Protocol Testing**: Fixed tests for failed bank updates, added extraction and intervention contract updates, and delivered `code_for_uss` UI implementation.

- **Nautilus Wallet Major Refactor**: Manifest v3 completed, dApp bridge layer rewritten, major codebase refactoring. Ledger integration changes ready for review. Nautilus Abyss (canary distribution) released for community testing with major infrastructure changes.

- **Rosen Bridge Bitcoin Launch**: Keygen ceremony for Bitcoin completed. Guards prepared for BTC network configuration. Added Bitcoin observation/event trigger extractors, health check parameters, and fixed native Bitcoin token support in APIs.

- **Sigmanauts Mining Pool**: Production implementation with PPLNS payout system. Mining Core database mirrored, miners can designate pool preference via miner config, RSN payouts to selected miners via custom scripts. API endpoints constructed for dashboard integration.

- **Cyberverse Multi-Chain Expansion**: Added Cardano wallet support (ETERNL + Nami), NFT skins for Ergo FT and Cardano NFTs, monthly leaderboard with activity-based point earning, friends list/chat feature, and partnerships with OMEN and HOUSE OF TITANS.

- **Fleet SDK / Appkit Relationship**: Clarified that Appkit depends on sigmastate-interpreter transitively; multisig hints added to transaction signing in Sigma. JS implementations of multisig signing support still in progress.

- **Wallet API Issues**: Node wallet password change problematic with full indexing enabled; documented workaround of deleting `.ergo/wallet` directory and restoring from seed phrase. `/wallet/balances` and `/wallet/balancesWithUnconfirmed` endpoints available for wallet-level asset queries.

- **Documentation Gaps**: Developers flagged lack of practical examples and tutorials for Fleet SDK, register serialization, multisig workflows, and transaction building. Community interest in bounty-driven documentation creation.

---

## Important Decisions or Announcements

- [@kushti, msg#27217, 2024-06-03]: Finalizing Ergo 5.0.22 release candidate
- [@kushti, msg#27273, 2024-06-04]: Attached 200 SigmaUSD + 200 GORT bounty to ChainCash relay contract issue #41 for Ergoversary hackathon participation
- [@capt_nemo429, msg#27304, 2024-06-05]: **Nautilus Abyss** (canary distribution) released; major refactoring across codebase; community urgently asked to test dApps against it
- [@qx(), msg#27312, 2024-06-05]: Sigmanauts Mining Pool production implementation active with limited testers; uses PPLNS for RSN payouts; Mining Core intentionally untouched
- [@Unknown, msg#27327, 2024-06-05]: Sigmanauts DAO proposal to fund all ErgoHack participants under vote
- [@vorujack, msg#27322, 2024-06-05]: Rosen Bridge keygen ceremony for Bitcoin completed; Bitcoin launch preparation underway
- [@kushti, msg#27414, 2024-06-09]: Announced 1K SigmaUSD bounty for Blockly support for ErgoScript (multisig schemes); 500 SigmaUSD for BulletProofs verification
- [@kushti, msg#27347, 2024-06-06]: Attached 200 ERG bounty to issue #993 for implementing EIP-50 instructions

---

## Technical Q&A Worth Preserving

- **Q** (@justblake3911, msg#27219): Node wallet password error ("Tag Mismatch") after adding full indexing config (`extraIndex = true`, `extraCacheSize = 500`)
  **A** (@Aberg, msg#27224): Delete `.ergo/wallet` directory and restore with different password using seed phrase

- **Q** (@justblake3911, msg#27226): Can Swagger test if mnemonic matches node wallet without Unlock Password?
  **A** (@kushti, msg#27258): `/wallet/check` compares seeds (wallet must be unlocked); alternative is to restore in Nautilus and compare public addresses

- **Q** (@justblake3911, msg#27260): How to obtain total balance of all assets in a multi-address wallet via API?
  **A** (@kushti, msg#27262): Use `/wallet/balances` or `/wallet/balancesWithUnconfirmed` endpoints

- **Q** (@c8, msg#27357): Multisig support needed in JavaScript; currently unable to sign individual multisig inputs. Referenced sigma-rust PR #751 for review
  **A** (@kushti, msg#27358): PR approved; asked if tested. (@dusek_, msg#27365): Alpha version `ergo-lib-wasm-nodejs@0.28.0-alpha-03551ca` published with `sign_tx_input_multi` support

- **Q** (@mgpai, msg#27282): Relationship between sigmastate-interpreter and Appkit?
  **A** (@ergomorphic, msg#27283-27284): Appkit depends on sigmastate-interpreter transitively via build.sbt; can use SNAPSHOT versions directly. Same dependency relationship as any Scala project to Appkit.

- **Q** (@mgpai, msg#27290): How to add new prefix (like `ergoauth://`) for mobile wallet?
  **A** (@MrStahlfelge, msg#27294): Asked for elaboration on use case

- **Q** (@HQΣr, msg#27348): Does ErgoScript support `fromBase64` for token ID conversion?
  **A** (@kushti khushi, msg#27349-27350): Yes, `fromBase64` and `fromBase58` supported since early compiler versions; can convert hex to base64 using tools like https://math.tools/calculator/base/16-64

- **Q** (@Flying Pig, msg#27370): Need real-world Fleet SDK examples for transaction sending, token operations, minting, register data, and Nautilus dApp connector integration
  **A** (@arobsn, msg#27378): Docs contain most information; use `@fleet-sdk/serializer` with constructors like `SInt(2)` or `SBool(true)` for serialization; tag arobsn for help

- **Q** (@__del, msg#27410): Can cold Bitcoin ownership be proven on Ergo to use as DeFi collateral?
  **A** (@dΣathgripson, msg#27411): Rosen Bridge uses collateral-holding nodes with watchers/guards for safety (produces rsBTC); Analog Ergo working on atomic swaps with time-locked contracts; direct BTC collateral use complicated but potentially possible via bearer asset qualities

---

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2142]: Ergo 5.0.22 finalization PR
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/990]: SOption[] serialization for Sigma 6.0
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/972]: Header serialization for Sigma 6.0
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/968]: Header.checkPoW method for Sigma 6.0
- [https://github.com/ross-weir/ergohack-sidechain]: ErgoHack VIII Bitcoin relay submission (public domain)
- [https://github.com/ergoplatform/dexy-usd-bank-ui/pull/6]: Dexy USD bank UI with code delivery
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/996]: Sigma v6.0 PR (ready for review)
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/984]: Sigma v6.0 PR (ready for review)
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/995]: Sigma v6.0 PR (ready for review)
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/989]: Sigma v6.0 PR (ready for review)
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1000]: Multisig hints for transaction signing
- [https://github.com/fleet-sdk/fleet/pull/96]: proveDLog signing PR merged
- [https://github.com/tesseract-one/ledger-app-ergo/issues/12]: Ledger solution for wallets with 20+ tokens in single UTXO
- [https://chromewebstore.google.com/detail/nautilus-abyss/moaohjebjfiodfiegjnjkbnalepemcpf]: Nautilus Abyss canary distribution
- [https://ergohack.io/]: ErgoHack VIII information and submissions
- [https://www.npmjs.com/package/ergo-lib-wasm-nodejs/v/0.28.0-alpha-03551ca]: Alpha WASM with multisig input signing
- [https://github.com/Moria-Finance/multi-sig-test/blob/39593804027870963db899058ecb1cd273cf92ac/src/app/instance1_commit.ts#L45]: Multi-sig test implementation example
- [https://github.com/ergoplatform/sigma-rust/pull/751]: Sigma Rust PR needing review
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1001]: Extracted common code PR
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1002]: Extracted code PR follow-up
- [https://math.tools/calculator/base/16-64]: Hex to Base64 converter
- [https://escript.online/?s=eJyr5lJQKEvMUchMUbBVSCvKz3VKLE41M9FQcikKNPAyyI7KtjBP9ss19vd2zEt1Lq9KLXLVdi4xC/QILEoODC1ILQoPsVRShBqSnJ8HMgZolqKtggaQ0tYGckCyxZnpuYkBRfkFGiA1mly1AJXoJBo=]: ErgoScript playground example
- [https://developers.google.com/blockly/]: Blockly reference (for ErgoScript bounty)
- [https://eprint.iacr.org/2017/1066.pdf]: BulletProofs paper
- [https://github.com/bbuenz/BulletProofLib]: Original BulletProofs Java implementation
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/997]: Unsigned big integer type PR
- [https://github.com/ergoplatform/eips/pull/100]: EIP-50 instructions reference
- [https://docs.ergoplatform.com/contribute/bounties/#development-reward-program]: Development reward program bounties list
- [https://sigmanauts.com/minutes/2024-06-02-meeting/]: Sigmanauts DAO meeting notes

---

## Unresolved Questions

- **Merkle tree support priority**: kushti deferred Merkle trees support to Sigma 7.0 or potentially removed entirely, noting Merkle proof validation works fine without native support for Bitcoin transaction inclusion proof. Seeking example of reading block extension data with Merkle proof validation for Ergo transactions.

- **PR dependency and sequencing conflict** (msg#27228–27250): ergomorphic and kushti disagreed on PR merge order and scope. kushti insisted PRs should be sequential and logically independent; ergomorphic pushed for flexibility. Resolved by deferring work pending completion of prerequisite PRs, but underlying process tension remains.

- **Test harness expansion scope**: kushti extracted common test code from multiple PRs into PR #1001 without prior coordination with ergomorphic. ergomorphic questioned necessity of changes; kushti argued reusability for other PRs (deserialize). Resolved with authorship credit, but raises open question of when to extract vs. keep changes in feature PRs.

- **Fleet SDK documentation**: Multiple developers flagged lack of practical tutorials for register serialization, transaction building, and Nautilus connector integration. Suggested bounty approach for documentation, but no decision made on priority or allocation.

- **ErgoScript register handling in multisig**: HQΣr attempting to use `fromBase64` for token ID in smart contract; implementation details remain unclear (msg#27355, 27362, 27364).

- **Mempool pagination bug**: Original issue (@yee0576, msg#27314–27331): frontend pagination broken when transactions excluded from response; anon-yum added database fetch workaround, but now `offset` parameter broken on original dataset. Root cause and fix status unclear.

---