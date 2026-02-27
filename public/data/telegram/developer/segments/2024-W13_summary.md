# Ergo Developer Chat Summary — 2024-W13

## Key Topics Discussed

- **Sub-blocks development tracking**: Discussion on how to follow sub-blocks work; kushti confirmed development happens in the weak blocks branch with sidechains branch building on top. PR #2107 and #2055 are active references.

- **Sigma 6.0 finalization**: kushti identified likely final issues (#945, #958) for Sigma 6.0 and began composing an EIP. Version 5.0.21 / 5.1.0 are finalized with PR #2131 reviewed and fixed.

- **GORT emission contract & Dexy testing**: GORT dev emission contract deployed on testnet with buyback token issued. Dexy deliberately depegged in testnet to test bank interventions and develop offchain code for extract-to-the-future actions.

- **Oracle integration for smart contracts**: Question raised about SC communication to outside APIs; answer confirmed oracles are required for SC to interact with off-chain data sources.

- **Nautilus Manifest v3 migration**: Wallet v0.93 released; extension ⟷ dApp bridge module requires full rewrite. Fleet SDK receiving library-agnostic Prover/Verifier modules with adapters for sigma-rust and SigmaJS.

- **ADProof for light clients & sub-blocks**: Confirmed that sub-blocks will provide ADProofs (Authenticated Dictionary Proofs) for stateless clients, enabling proofs of state transformations without storing full UTXO set.

- **Stealth address support in wallets**: Satergo supports sending to stealth addresses; question remains open on receiving stealth addresses and full stealth address scanning features across wallet implementations.

## Important Decisions or Announcements

- [@kushti0978, msg#26168, 2024-03-26]: Made likely last issues for Sigma 6.0; versions 5.0.21 / 5.1.0 finalized.

- [@mhs_sam (Minotaur), msg#26183, 2024-03-27]: Minotaur wallet v2.0.1 released for production; cold signing and personal multisig wallets now available. Signing server for multisig and dApp connector under development. Bitcoin logic finalized for Rosen; integration starting.

- [@Marc the Shark, msg#26185, 2024-03-27]: Sigmanauts mining pool UI v2 beta release targeted end of week; full version early next week. Stress testing with Locust integrated; switching from per-container API queries to database queries to sustain 1K+ users.

- [@LowKeyNerd - Blitz TCG, msg#26182, 2024-03-27]: Pack Sale launch in 2-3 weeks. All 150 cards rendered pending final accuracy review. Burn contract development near completion.

- [@luivatra (Crux/Paideia), msg#26177, 2024-03-27]: Crux accounting section live. Paideia working on long-living contracts with automatic refresh mechanism (~3 year lifecycle); removing unfinished features before EIP-5 port.

- [@c8, msg#26178, 2024-03-27]: escript.online now supports "copy as html" to embed smart contracts as HTML widgets on project websites.

- [@CannonQ, msg#26192, 2024-03-27]: "The Field" project (DAO-driven peer-to-pool pledging protocol) seeking team members; MVP targeted for late May. Uses guards-oracles similar to Rosen for consensus-based winner determination.

- [@reqlez, msg#26188, 2024-03-27]: ergohost.io infrastructure upgrade planned (~1 hour downtime). Future failover instance deployment planned using freed 64-core ARM server capacity.

- [@CannonQ, msg#26187, 2024-03-27]: Marshall Islands DAO LLC structure appears most flexible for crypto (allows no-KYC members); discount negotiated from reputable formation service.

## Technical Q&A Worth Preserving

- **Q** (@kii, msg#26158): How do we follow development of sub-blocks?
  **A** (@omniawaha, msg#26160; @dusek_, msg#26162; @Glasgow, msg#26164; @kushti0978, msg#26167): Code available on GitHub but not fully pulled yet. Check PR #2107 and #2055. Development occurs in the weak blocks branch (sidechains branch builds on top); not a dedicated repo.

- **Q** (@aquaritek, msg#26173): Is it possible for a SC on Ergo to communicate to the outside world to get data? Can communication to an outside API or oracle verify off-chain state?
  **A** (@mgpai, msg#26174-26175): You would need to run an oracle. Then SC can interact with the oracle.

- **Q** (@zkastn, msg#26213): Will sub-blocks provide ADProofs for light clients like full blocks?
  **A** (@kushti0978, msg#26219): Yes.

- **Q** (@omniawaha, msg#26216): What is ADproof?
  **A** (@zkastn, msg#26217; @kushti0978, msg#26220): Stands for Authenticated Dictionary Proof. UTXO-set stored in special data structure allowing miners to provide small proofs for each transaction block change. Enables stateless clients and light clients to verify transaction validity without storing full UTXO set. Reference: https://docs.ergoplatform.com/node/modes/light-full-node/

- **Q** (@__daddychill__, msg#26204-26206): Which wallets support stealth address receiving (generating stealth address, payment address, scanning for stealth boxes)?
  **A** (@dusek_, msg#26205): Satergo supports sending to stealth addresses; receiving support status unclear.

- **Q** (@kii, msg#26194): How are you [The Field project] importing these oracles?
  **A** (@CannonQ, msg#26195): Initially will use guards similar to Rosen from an approved standpoint. Guards need to reach consensus to pick winner from scenario options.

- **Q** (@kii, msg#26196): [On The Field project] That sounds like a huge project needing lots of dev work.
  **A** (implied context): Confirmed; developer previously researched sports betting on Ergo but oracle implementation was a barrier to pursuit.

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2131](https://github.com/ergoplatform/ergo/pull/2131): Compilation fixes for versions 5.0.21 / 5.1.0 finalization.

- [https://github.com/ergoplatform/ergo/tree/i2093](https://github.com/ergoplatform/ergo/tree/i2093): Additional fixes referenced by kushti.

- [https://github.com/ergoplatform/ergo/pull/2107/](https://github.com/ergoplatform/ergo/pull/2107/): Sub-blocks PR.

- [https://github.com/ergoplatform/ergo/pull/2055](https://github.com/ergoplatform/ergo/pull/2055): Sub-blocks/sidechains related PR.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/issues/945](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/945): Sigma 6.0 final issue.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/issues/958](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/958): Sigma 6.0 final issue.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/957](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/957): Sigma code cleaning PR.

- [https://github.com/ergoplatform/ergo/issues/2141](https://github.com/ergoplatform/ergo/issues/2141): ExtraIndexer test issue (needs assignment).

- [https://www.ergoforum.org/t/bootstrapping-of-gold-oracle-pool-and-dexy/4660/](https://www.ergoforum.org/t/bootstrapping-of-gold-oracle-pool-and-dexy/4660/): GORT emission & buyback token deployment details.

- [https://gluon.gold](https://gluon.gold): Live Gluon testnet testing.

- [https://github.com/minotaur-ergo/minotaur-wallet/releases/tag/v2.0.1](https://github.com/minotaur-ergo/minotaur-wallet/releases/tag/v2.0.1): Minotaur wallet v2.0.1 release.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/953](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/953): Sigma v5.0.14 p2sh rollback PR.

- [https://github.com/ergoplatform/sigma-rust/pull/736](https://github.com/ergoplatform/sigma-rust/pull/736): Rust implementation PR (review requested).

- [https://github.com/ergoplatform/ergo/pull/2111](https://github.com/ergoplatform/ergo/pull/2111): PR requesting review from ccellado, mgpai, ergomorphic, fantaerik.

- [https://docs.ergoplatform.com/node/modes/light-full-node/](https://docs.ergoplatform.com/node/modes/light-full-node/): ADProof documentation.

- [https://www.youtube.com/watch?v=PHY7JnLrK5o](https://www.youtube.com/watch?v=PHY7JnLrK5o): ADProof explanation video by kushti.

- [https://x.com/Blitz_TCG/status/1773190966364557542](https://x.com/Blitz_TCG/status/1773190966364557542): Blitz TCG 10-video launch marketing campaign.

## Unresolved Questions

- Stealth address receiving functionality across Ergo wallets remains unclear beyond Satergo's sending support (@__daddychill__, @dusek_, msg#26204-26206).

- Full scope of "The Field" project oracle implementation (guards consensus mechanism) needs technical deep-dive as developer noted barrier to sports betting adoption on Ergo (@kii, msg#26196).

- Ledger hardware wallet signing issue with proveDlog(userPK) in contracts reported but no resolution provided (@krasaviceblasen, msg#26207; contact escalated to @ypopovych, msg#26208).

- Whether Manifest v3 migration for Nautilus will impact existing dApp integrations remains to be detailed (@capt_nemo429, msg#26181).