---
title: "Ergo Developer Chat — 2024-W39"
date_start: "2024-09-23"
date_end: "2024-09-29"
type: telegram_weekly
channel: developer
week: "2024-W39"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo Developer Chat Summary — 2024-W39
**Period:** 2024-09-23 to 2024-09-29  
**Message Range:** #30314–#30476  
**Participants:** 16 (kushti, Armeanio, mgPai, anon_BR, HQΣr, Luca, and others)

---

## Key Topics Discussed

- **Ergo 6.0 Protocol Devnet Release**: Alpha1 released with support for higher-order functions, unsigned big integers, and `Box.getReg` with computable indices. Testing ongoing; next devnet release expected in 7–10 days with additional features (Some/None constructors, AVL+ trees ops semantics).

- **Sub-blocks / Input & Ordering Blocks**: Work in progress on candidate generation. Kushti notes this addresses block propagation efficiency; inspired by Prism protocol but with formal security proofs (GKL-15 based or Prism style).

- **ErgoHack IX (Oct 25–31, 2024)**: Theme: UI/UX Design & Mining Solutions. Nine community-submitted ideas crowdsourced (limit orders for Spectrum DEX, mempool visualization, routing layer, token transaction explorer, SigmaFi UI, procedural NFTs, FIMO launch tool, anonymous voting via stealth addresses, user-friendly L2 wallet).

- **Nautilus Wallet & ergo-graphql**: v0.14.1 released; fixed non-standard token minting register parsing, set IPFS default gateway. ergo-graphql v0.5.2 released with bug fix for unconfirmed chained transactions (blocking Spectrum LP creation).

- **Rosen Bridge Testing**: Final round requires 30+ volunteers; testbed available within 2 days. Temporary channel to be created.

- **Dexy Protocol / Paideia DAO**: Payout contract audit report received; issues flagged for fixing. Paideia context vars compressed; off-chain code updated; final testing round deploying over weekend.

- **Celaut Project**: Payment system completed; Ergo node configuration options added (local wallet mnemonic, cold wallet, node URL). Benefactor Platform implementation beginning to allow other projects to use CAT benefaction system.

- **SkyHarbor (NFT Platform)**: UI v2 nearly complete (token pages, price form, small updates pending). Smart contract updates done; transaction building underway. Backend scanner update in progress.

- **Sigmanauts Mining Pool**: Swapping mining rewards in beta (dev.ergominers.com). PPLNS calculation validated against MiningCore. Bug found in bonus system (in progress).

- **sigmaspace.io Explorer API**: More endpoints added; Rosen Bridge watcher endpoints in progress. Ergo Foundation now sponsoring server costs.

- **Block Propagation & TPS Claims Skepticism**: Kushti emphasizes that extreme TPS numbers (40k, 70k) from other chains rely on aggressive pruning, datacenter testbeds, hybrid networks, and empty state assumptions—not applicable to real production networks. Prism protocol claims 70k TPS under similar conditions; no real Prism network launched yet.

---

## Important Decisions or Announcements

- [@kushti, msg#30369, 2024-09-25]: Ergo 6.0.0-alpha1 released for devnets with higher-order functions, unsigned big integers, `Box.getReg` with computable indices.

- [@HQΣr, msg#30338, 2024-09-24]: MewFinance cannot be submitted to ErgoHack IX (projects under active development ineligible).

- [@Crypto Quokka, msg#30316–#30317, 2024-09-23]: Full site rehaul underway; completion within one month. Fix for "Request header field too large" on boxes/byaddress queries deployed.

- [@Pgr456, msg#30396, 2024-09-25]: sigmaspace.io API sponsored by Ergo Foundation for server costs.

- [@kushti, msg#30404, 2024-09-25]: Rosen Bridge Alert—30+ volunteers needed for final testing round. Testbed available privately in ~2 days.

- [@Austen Milbarge, msg#30399, 2024-09-25]: Proposed ErgoHack IX idea #10: Complete the new ErgoPlatform website (design integration phase).

- [@kushti, msg#30428, 2024-09-27]: Proposal to begin foundation/education discussions in November covering hash functions, PoW, Merkle trees, AVL+ trees, NIPoPoWs, Sigma protocols, Schnorr signatures, P2P networks, UTXO model, ErgoScript, client modes, protocol rules, emission contracts, storage rent.

- [@kushti, msg#30453, 2024-09-28]: Articulated three core protocol development principles: flat P2P network, non-breaking/research-driven development, prioritize non-consensus over consensus when outcomes similar.

---

## Technical Q&A Worth Preserving

- **Q** (@Michael, msg#30315): Request header field too large when trying boxes/byaddress for Gluon contract.  
  **A** (@Pgr456, msg#30320): Fixed.

- **Q** (@Pgr456, msg#30412): How to go from ErgoTree to template? Documentation on constants position/index?  
  **A** (@luivatra, msg#30413–#30415): You go from EIP-5 script → template (exported to JSON) → tree by applying parameters. Constant indices visible in JSON.  
  **Example** (@luivatra, msg#30417): https://github.com/paideiadao/paideia-sdk/blob/dev/src/main/resources/ergoscript/ActionSendFundsBasic/1.0.0/ActionSendFundsBasic.json

- **Q** (@Broly, msg#30441): Why can't token creators add logo and social media links on-chain during creation?  
  **A** (@HQΣr, msg#30457): Ergexplorer.com supports links if projects follow token minting EIP and provide metadata in registers. No mechanism to change them later if account compromised.

- **Q** (@ioannisleontiadis, msg#30465): Is it possible to build a tutoring platform where Ergo funds release in chunks after session validation? Feasible in one year?  
  **A** (@ldgaetano, msg#30471): Similar contracts already written; offered guidance. @kushti (@msg#30474) asked for concrete bottlenecks—none identified yet by asker.

- **Q** (@dusek_, msg#30460): Could Nexa's efficient block propagation (transaction diff instead of full transactions) be useful for Ergo?  
  **A** (@kushti, msg#30461): Already done in Bitcoin (compact blocks) years ago, and part of Ergo's subblocks implementation.

- **Q** (@ioannisleontiadis, msg#30469): What is the "psy workshop" mentioned?  
  **A** (@ldgaetano, msg#30471): Project name for contracts implementing tutoring/session validation (the same use case as thesis proposal).

---

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-alpha1]: Ergo 6.0.0-alpha1 devnet release notes.
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/979]: Polished sigmastate PR under review.
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1010]: Higher-order functions PR.
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/997]: AVL+ trees ops semantics PR.
- [https://github.com/K-Singh/Sigma-Finance/tree/master/contracts]: SigmaFi lender-side contracts (ErgoHack9 Idea #1).
- [https://github.com/LiliumErgo/fetch-collection-holders]: Code to fetch NFT collection holders (for indexing).
- [https://www.instagram.com/ergoplatformindonesia]: Ergo Indonesia Instagram community.
- [https://api.sigmaspace.io/docs#/]: sigmaspace.io alternative explorer API documentation.
- [https://ergo-node-explorer.vercel.app/]: Ergo node explorer for NFT token ID scanning (down during indexing periods).
- [https://sigmaspace.io/en/token/09fe0a68151c238bee4ecce065ef29ca1c896fdd64284c0a51e80ce0c5b30b33]: Example token page on sigmaspace.io.
- [https://ergexplorer.com/token#09fe0a68151c238bee4ecce065ef29ca1c896fdd64284c0a51e80ce0c5b30b33]: Ergo Explorer token page.
- [https://github.com/paideiadao/paideia-sdk/blob/dev/src/main/resources/ergoscript/ActionSendFundsBasic/1.0.0/ActionSendFundsBasic.json]: Example Paideia ErgoTree template JSON with constant indices.
- [https://forum.nexa.org/t/nexa-how-it-solves-the-scalability-trilemma/28]: Nexa block propagation mechanism (compact diff-based).
- [https://www.semanticscholar.org/paper/Speeding-up-Block-Propagation-in-Blockchain-Uncoded-Zhang-Wang/4ab76973ebada1b1748e8c358392992f4e431141]: Research paper on block propagation protocols (100x TPS claim, Kushti skeptical).
- [https://m.youtube.com/watch?v=gTJyDtuWvUQ&pp=ygURLiBQcmlzbWJsb2NrY2hhaW4%3D]: Prism blockchain protocol presentation (70k TPS testbed claim).
- [https://www.ergoforum.org/t/core-protocol-development-principles/4866]: Forum post on core protocol development principles (referenced by Kushti for archive).
- [https://sigma.gallery/]: Sigma Gallery (NFT platform) currently non-functional; flagged by Maritsa Art.
- [dev.ergominers.com]: Sigmanauts Mining Pool beta testing site for miner ID token minting/burning.

---

## Unresolved Questions

- **ErgoTree Template Documentation**: Pgr456 requested forum post on ErgoTree template specification; Kushti acknowledged but not confirmed.

- **Java 7 / Scala 2.11 Deprecation**: Kushti asked @ccellado (@msg#30425) to outline steps for dropping legacy dependency support; response pending.

- **Keystone Hardware Wallet Status**: Kushti asked for update (@msg#30421); no response recorded.

- **Token Logo/Metadata On-Chain Standard**: No concrete EIP or standard established for token creators to publish immutable metadata on-chain during creation or via dashboard.

- **Mempool Visualization Tool (ErgoHack9 Idea #5)**: Proposed but no development lead assigned.

- **Anonymous Voting via Stealth Addresses (ErgoHack9 Idea #8)**: Kushti suggested it could be incorporated into Paideia DAO tooling (@msg#30386); Luca acknowledged but design details TBD.

- **L2 Wallet for Non-Crypto Users (ErgoHack9 Idea #9)**: Kushti outlined concept (magic Internet gold + ERG dual currency, Holding/Instant Payments accounts). Lightning Network reuse proposed; no prototype in progress.

- **Sigma.Gallery Platform**: Not working; repair status unknown.

- **Rosen Bridge Testnet Availability**: Scheduled for 2 days after msg#30404 (i.e., ~2024-09-27); recruitment status uncertain.

---

**Archive Note:** This week focused on Ergo 6.0 devnet progress, ErgoHack IX community brainstorming, and ecosystem tooling maturation (Nautilus, sigmaspace, SkyHarbor, Celaut, Paideia). Protocol research on sub-blocks and block propagation dominated technical discussion. No critical breaking changes or security incidents reported.