---
title: "Ergo Developer Chat — 2024-W28"
date_start: "2024-07-08"
date_end: "2024-07-14"
type: telegram_weekly
channel: developer
week: "2024-W28"
source: telegram
message_count: 64
categories: [technical, wallet, bridges, defi, ecosystem]
key_terms: [AVL trees, Go, Rust bindings, C-bindings, ErgoNames, headless wallet, Fleet SDK, Nautilus, Sigma.js, multi-sig, cross-platform, Sigma 6.0, Numeric ops, soft-fork, testnet, bitwise operations, reference client, block candidate generation, faster confirmations, sidechains]
---
# Ergo Developer Chat Summary — 2024-W28

## Key Topics Discussed

- **AVL Trees in Go**: Discussion on whether Rust implementations of AVL trees can be exposed via C-bindings to Go, or if Go implementations should be built from scratch. mgPai is exploring Go for ErgoNames off-chain work and shared relevant Cardano precedent.

- **Sigma 6.0 Development**: kushti outlined completion of Numeric operations (bitwise ops, shifts), work on issues #847 and #905, and preparation for 6.0 testnet launch. New features being tested for soft-fork compatibility.

- **Faster Confirmations & Block Candidate Generation**: Pgr456 proposed generating block candidates in intervals (cached with previous candidate) rather than on-demand polling, to improve miner acceptance and confirmation times overall.

- **Headless JavaScript Wallet**: C8 raised a critical gap: existing JS wallets (Nautilus, Fleet) serve browsers only; mobile apps and games need a common headless wallet library. Three options discussed: refactor Nautilus into headless + UI, create a new common library, or let each app build its own via sigma-rust.

- **Fleet SDK Wallet Package**: arobsn announced [`@fleet-sdk/wallet`](https://github.com/fleet-sdk/fleet/tree/master/packages/wallet) already provides wallet generation, key derivation, and blind `proveDLog` signing. Plans to add Sigma.JS and sigma-rust prover wrappers for multi-sig and Diffie-Hellman tuple support.

- **Rosen Bridge Decimal Handling**: Major refactor to handle EVM assets with high decimals (e.g., ETH with 18 places) by dropping insignificant decimal places. Also working on xVerse wallet integration for Bitcoin hardware wallet PSBT signing after xDefi showed limitations.

- **Paideia DAO Contracts**: Luivatra detailed garbage collection logic (boxes burned after 3 years to prevent protocol token leaks), treasury persistence refactoring, and DAO origin ownership changes. Bug bounty opening by week's end; launch expected in ~2 weeks pending testing.

- **ChainCash**: Dusek completed spend note transaction builder with tests; persistence layer under review.

- **duckpools Development**: New lending pools (rsBTC, SPF) added; v2 preliminary testing complete with continuous yield delivery design; duckDAO voting live for RSN and rsADA collateral options.

- **Crystal Pool**: Deposit history and progress widget added; revertible transaction tree execution on mempool deposits in progress.

- **Rosen Bridge Emission Contract**: Implemented contract allowing ERSN to be converted to RSN; guard service now supports configurable emission tokens (not just RSN).

## Important Decisions or Announcements

- [@kushti, msg#28339, 2024-07-09]: Weekly Ergo Developers chat scheduled for Wed, July 10th, 1PM UTC.

- [@kushti, msg#28343, 2024-07-10]: **Ergo Protocol R&D**: Compiler layer issue fixed; Numeric ops progressing (shifts left remaining); PoEM implementation discussion with Dionysis Zindros, EIP feasible in coming weeks; "sub-blocks" design space exploration (Bitcoin-NG, PRISM) underway.

- [@kushti, msg#28348, 2024-07-10]: **Reference Client Development Roadmap**: Polish current PRs → 6.0 activation testing → refactor for sidechains → refactor for faster confirmations → implement faster confirmations.

- [@kushti, msg#28349, 2024-07-10]: **Sigma 6.0 Completion Path**: Finish Numeric ops shifts left, complete issues #847 and #905, then polish PRs for merge and plan 6.0 testnet launch.

- [@luivatra, msg#28345, 2024-07-10]: **Paideia Bug Bounty & Launch**: Contract bug bounty launching by week's end; off-chain code changes and final testnet deployment during bounty period; mainnet launch projected in ~2 weeks.

- [@krasaviceblasen, msg#28346, 2024-07-10]: **duckDAO Vote**: First vote for RSN and rsADA as collateral options goes live in 20 hours; v2 UX/UI overhaul discussions begun.

- [@cannon_q, msg#28357, 2024-07-10]: **"The Field" DAO Project**: MVP smart contracts complete; dApp front-end UI integration wrapping up; private testing pools/pledges this week.

- [@mgpai, msg#28373, 2024-07-13]: Planning Go implementation for ErgoNames off-chain component; seeking AVL tree implementation guidance.

## Technical Q&A Worth Preserving

- **Q** (@mgpai, msg#28319): Can we get AVL trees in Go?  
  **A** (@pgr456, msg#28325): Should be possible; need to check if Rust impl can be exposed via C-bindings.

- **Q** (@kushti, msg#28327): Why not Rust?  
  **A** (@Aberg, msg#28329): Go is much easier than Rust.

- **Q** (@C8, msg#28347): What are chances of a headless JavaScript wallet?  
  **A** (@arobsn, msg#28363): [`@fleet-sdk/wallet`](https://github.com/fleet-sdk/fleet/tree/master/packages/wallet) does this now—generates wallets, derives keys, signs transactions with blind `proveDLog`. Sigma.JS and sigma-rust wrappers planned for multi-sig and Diffie-Hellman tuples.

- **Q** (@C8, msg#28367): Can Fleet sign `AlicePK && BobPK` transactions and individual inputs?  
  **A** (@arobsn, msg#28369): Not yet; working on Sigma.JS wrappers with Nautilus as priority. (See also PR https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1012/files)

- **Q** (@zkastn, msg#28366): Does Fleet's wallet support reduced TX signing?  
  **A** (@arobsn, msg#28368): Not yet; exploring idiomatic approach to avoid large bundle sizes for dApps not using it.

- **Q** (@mgpai, msg#28372): Have you looked into AVL trees in Go?  
  **A** (@zkastn, msg#28377): Cosmos iavl library might help (linked). kushti clarified their AVL+ trees are likely different (msg#28378).

## Links Shared

- [ErgoDevs DAO bounty—Fleet tutorials](https://github.com/fleet-sdk/docs/issues/8): First bounty for Fleet SDK documentation.

- [Rosen Bridge utils—wrap/unwrap and decimals drop](https://github.com/rosen-bridge/utils/commit/cc5eef2e4fa25ecbe160e2cbf7684ce77b13b9b4): EVM asset decimal handling refactor.

- [Rosen Bridge minimum-fee implementation](https://github.com/rosen-bridge/utils/commit/94d9113eb16c61b5f5f2105c7ec588d8ee9189f6): Fee config extraction and conversion.

- [Rosen Bridge guard-service configurable emission token](https://github.com/rosen-bridge/guard-service/commit/e4538136e307bc141671573236ff94058a6f5b06): Guards can now use any token for reward distribution.

- [Rosen Bridge CORS enablement](https://github.com/rosen-bridge/ui/commit/afe6c81ea256589c50886b9d8f951fbefe3ac230): Rosen app API access.

- [Rosen Bridge Emission contract](https://github.com/rosen-bridge/contract/commit/798a0e605cca485308566c94c904f2701e9fabfb): ERSN to RSN conversion.

- [Sigma-rust release PR #1019—error messages](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1019): 225 error messages being improved for user support (first 50 completed).

- [Numeric ops PR #1017](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1017): Bitwise ops, shifts, tests in progress.

- [TX ordering issue #2167](https://github.com/ergoplatform/ergo/pull/2167): Under investigation by Fanta.

- [Block candidate generation discussion](https://github.com/orgs/ergoplatform/discussions): Pgr456 proposed interval-based generation vs. polling.

- [duckpools informal proposals document](https://docs.google.com/document/d/1X0NFmHz9nxOdG1sGcshD-P6B1eC343nl29D1QTqrP6g/edit): Feature tracking and discussion.

- [duckpools lending guide](https://medium.com/@duckpools/exploring-duckpools-for-the-first-time-heres-what-you-need-to-know-b4dd749917cc): First-time lender resource.

- [Blink Labs Merkle-Patricia forestry (Cardano precedent)](https://github.com/blinklabs-io/merkle-patricia-forestry): Reference implementation for tree structures in Go.

- [Cosmos iavl library](https://github.com/cosmos/iavl): Potential Go AVL tree library (noted as different from Ergo's needs).

- [B+ AVL hybrid implementation](https://github.com/MicheleCattaneo/B_plus_AVL): Hybrid tree structure with desirable properties.

- [AVL tree paper (Yale)](https://www.cs.yale.edu/homes/soule/pubs/opodis2022.pdf): Research on AVL tree properties.

- [Fleet SDK wallet package](https://github.com/fleet-sdk/fleet/tree/master/packages/wallet): Headless wallet implementation with proveDLog signing.

- [Fleet prover spec (transaction signing example)](https://github.com/fleet-sdk/fleet/blob/master/packages/wallet/src/prover/prover.spec.ts#L39-L47): Reference for signing and verification.

- [Sigma.JS integration attempt PR #1012](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1012/files): C8's work on multi-sig signing; awaiting review.

- [Fleet contributing guide](https://github.com/fleet-sdk/docs/blob/master/.github/contributing.md): Documentation contribution path.

- [The Field project Discord](https://discord.gg/wa38bX57tY): DAO-driven peer-to-pool pledging protocol.

- [ErgoNames API endpoint issue](https://api.ergo.watch/tokens/0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b/supply): Broken endpoint reported by mgPai.

## Unresolved Questions

- **AVL Trees in Go**: Whether Rust impl can be exposed via C-bindings, or if dedicated Go implementation needed. Ergo's AVL+ trees differ from Cosmos iavl; feasibility unclear.

- **Reduced TX Signing in Fleet**: arobsn flagged bundle size concerns and hasn't finalized approach; marked for later iteration.

- **Sigma.JS Multi-sig Support**: C8 submitted PR #1012 for multi-sig (`AlicePK && BobPK`) signing but flagged potential "stupid mistake"; awaiting review from arobsn or morphic.

- **Block Candidate Generation Optimization**: Pgr456 proposed interval-based caching vs. polling; needs broader technical discussion and testing before commit.

- **Faster Confirmations Scope**: Sub-blocks vs. sidechains vs. faster confirmation protocols design space still open; kushti exploring Bitcoin-NG and PRISM feasibility via state frameworks.

- **Fleet Headless Wallet Adoption**: Whether projects will adopt common `@fleet-sdk/wallet` vs. building custom solutions; discipline/standardization needed but not enforced.

- **6.0 Testnet Timing**: Kushti noted testnet can launch before full 6.0 finalization but exact timeline TBD pending issue completions.