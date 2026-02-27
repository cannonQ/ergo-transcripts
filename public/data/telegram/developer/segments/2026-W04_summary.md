# Ergo Developer Chat Summary — 2026-W04
**Period:** 2026-01-19 to 2026-01-25  
**Participants:** 10  
**Message Count:** 95

---

## Key Topics Discussed

- **Node 6.0.2 / 6.1.2 Release & Extra Indices Bug**: Node versions with extra indices had a critical bug affecting the blockchain indexer. A fix was applied in the final commit of PR #2236. Both versions released 2026-01-23; users with extra indices enabled must update immediately.

- **Sub-blocks DevNet Testing**: kushti testing sub-blocks with two mining peers, fixing bugs and improving tests. Plan is to release initial public testnet sub-blocks supporting node in 6.0.3 (2-3 weeks out). Performance findings should be documented in GitHub issues, not ephemeral chat.

- **Bulletproofs Verification in ErgoScript**: Bulletproofs verification test can be completed via vibe-coding with cryptographic guidance. Purpose: enable variety of zero-knowledge protocols (Groth one-out-of-many, Zcoin-style proofs, verifiable credentials) to be verified on-chain in Ergo contracts.

- **USE Improvement Proposal #1 (UIP-001)**: Proposal on balancing interventions for USE stablecoin. Flagged as good vibe-coding test (contract update + tests). 1 gram Dexy Gold offered as bounty.

- **ChainCash Non-Custodial dApp**: Fitz building real non-custodial dApp using Nautilus wallet (EIP-12 signing, no server-held keys). Discovered earlier "demo" activity was P2PK simulation, not actual contract execution. Built inspector UI to verify contract boxes on testnet. Reserve contract box creation on testnet verified; next is issuing Note contract box. Blocker: ChainCash transfer/endorsement requires raw Schnorr signature format not exposed via sign_data.

- **Schnorr Signature Node Support**: kushti proposed adding schnorr_sign for messages to node. This would help ChainCash and other contracts (Basis, gold insurance) that need message signing. PR #2290 adds node API method to Schnorr-sign a message for a wallet address; Basis tracker now using node for tracker's signature during redemption.

- **Keystone Hardware Wallet Integration**: anon_BR (Nautilus lead) concerned about 160+ transient dependencies from Keystone SDK. Spent 2025 reducing transient dependencies from 120→90; adding 160 more is major drawback. Working to extract minimal Keystone functionality for secure integration; bounty assignment discussed.

- **Machina Finance SDK/Fleet Plugins**: GridOrder module done with 100% test coverage. LimitOrder module in progress with unit tests.

- **Lithos Protocol Mining**: Cheese Enthusiast fixing stratum difficulty commitment bugs, optimizing Stratum code for efficient extra nonce iteration, making blockchain state upgrades. AppKit 6.0 work on sigma 6.0 compatibility, fixed transaction ID quotation mark issue, started IndexedNodeDataSource for new API calls.

- **Oracle Pools v2 & GORT Rewards**: CannonQ built GORT/DORT buyback bot. Automated 2x daily for 1% of smart contract balance (~2 ERG/day accumulation, ~80-85 ERG balance). Logic designed to drain over ~month without interrupting USE replenishment. Blocker: sending from buyback SC to Oracle Rewards Pool needs Oracle Operator NFT permission and likely depends on Oracle Pool v2 refresh action injection.

- **Ergo Rust Node & AVL Tree Implementation**: Luivatra made significant optimizations but struggled with AVL tree building via Claude LLM. Sync not 100% stable yet; soft issues like slowdown-after-time need manual debugging. Using ergo_avltree_rust library; copying Scala node tests for compatibility verification. Issue: Claude forgot to include genesis boxes in tree, causing wrong state from height 1.

- **Rosen Bridge Watcher & Rosen App**: Updated Material UI to 7.3.5, improved lazy loading, moved token aggregation to database layer, added colored network logos, refactored form code, fixed decimal wording. Support for Bitcoin Runes via Xverse wallet (non-native SegWit blocking). Both apps show multiple UI/UX refinements.

- **Crux Finance UI & Swap Improvements**: Multiple UI fixes; swapped output now open for user input. Charts show combined liquidity-weighted price data across multiple pools (important for RSN pair). Swap widget picks best-price pool automatically, shows better fee breakdown (including LP fee).

- **Game of Prompts & Celaut Node**: Game of Prompts shared video/docs/app; adding new contract action. Celaut abandoned rootless node config (dead end); distributing .ova image for users unwilling to run with sudo. Isolated Docker use from user's own Docker setup.

- **Explorer Backend & Unparseable ErgoTree Handling**: EF explorer and sigmaspace.io both stuck at block height 1705794 due to node 6.0 incompatibility. Root cause: output with unparseable ErgoScript. Consensus protocol allows unparseable scripts for soft-forkability; explorer backends were more strict. Fix nearly complete; need to address pretty-printing scope (testing-only in Sigma 6.0). sigmaspace (Pgr456) added sigmastate-js fallback to tree parsing via embedded JS engine.

- **Dexy Service in Nautilus Mobile**: Michael building Dexy service for Nautilus to fetch USE and Dexy Gold prices; awaiting review before PR.

- **Spectrum DEX Backend Outage**: Backend offline as of 2026-01-24. Spectrum team pinged; Pgr offering alternate DEX API at dex-api.sigmaspace.io/v1/price-tracking/markets.

---

## Important Decisions or Announcements

- [@kushti, msg#37914, 2026-01-19]: Unstoppable Hackathon PRs reviewed; multiple AI-generated PRs rejected as "AI slop", but some CI/docs/comments improvements accepted.

- [@kushti, msg#37917, 2026-01-20]: USE Improvement Proposal #1 is good vibe-coding test; 1 gram Dexy Gold offered as bounty for contract update + tests.

- [@kushti, msg#37924, 2026-01-21]: Node 6.0.2 finalized in PR #2236; pushing for release this week. 6.0.3 assembly underway; 2-3 week target for initial public testnet sub-blocks supporting node release.

- [@Cheese Enthusiast, msg#37940, 2026-01-21]: AppKit 6.0 ready next week after IndexedNodeDataSource implementation complete.

- [@CannonQ, msg#37946, 2026-01-21]: GORT/DORT buyback bot built and automated; running 2x daily for 1% of SC balance.

- [@kushti, msg#37954, 2026-01-21]: Oracle pool refresh action should inject buyback→reward pool transfer (permissioned via Oracle Operator NFT).

- [@ArØhβΣ @Arohbe, msg#37962, 2026-01-21]: Ergo Mobile Wallet UI/UX overhaul in progress; beta launch next week for StableMiner/LocalDex; Xergon AI inference still needs P2P testing.

- [@kushti, msg#37988, 2026-01-23]: Node versions 6.1.2 and 6.0.2 released. Users with extra indices must update immediately.

- [@kushti, msg#37994, 2026-01-23]: Planning to include sigmastate version 3 by default in Sigma 6.0.3; working on release candidate.

- [@Pgr456, msg#38001, 2026-01-24]: sigmaspace.io back online. Added indexer service for unparseable ErgoTree handling and sigmastate-js fallback via embedded JS engine.

---

## Technical Q&A Worth Preserving

- **Q** (@kushti, msg#37949): Will sign_data work for Schnorr signatures, or do we need a separate schnorr_sign for messages?  
  **A** (@kushti, msg#37947, reference): PR #2290 adds node API method to Schnorr-sign a message for a wallet address; Basis tracker now using this for tracker's signature during redemption. Useful for ChainCash, Basis, gold insurance contracts.

- **Q** (@kushti, msg#37922): What is needed to complete Keystone integration?  
  **A** (@anon_BR, msg#37928): 160+ transient dependencies from Keystone SDK; major concern (120→90 transient deps reduced in 2025, adding 160 is large regression). Extracting minimal functionality set for secure integration; will provide update in few days on clear path forward.

- **Q** (@kushti, msg#37926): Any updates on AppKit 6.0 PR?  
  **A** (@Cheese Enthusiast, msg#37940): Should be ready next week after IndexedNodeDataSource implementation (takes advantage of new sigma 6.0 calls, provides explorer-compatible alternative).

- **Q** (@kushti, msg#37936): Any news on new ergo-lib release?  
  **A** (@dusek, implicit context): No response recorded; request remains open.

- **Q** (@kushti, msg#37965): Are you using ergo_avltree_rust library?  
  **A** (@Luivatra, msg#37967): Yes, library is fine. Issue was Claude code not including genesis boxes and not performing tree actions in same order as Scala reference. Copying Scala node tests over for compatibility verification (99% correctness causes complete failure in AVL tree).

- **Q** (@kushti, msg#37969): How is genesis state handled in AVL tree?  
  **A** (@kushti, msg#37969): Genesis state is commitment to three genesis boxes. (@Luivatra, msg#37970): Claude forgot this step, making AVL tree wrong from height 1.

- **Q** (@kushti, msg#37971): How to join Xergon testing?  
  **A** (@ArØhβΣ @Arohbe, msg#37972): Will add trusted contributors to repo; need ability to run full indexed node + Ollama (CPU or GPU), ~100GB storage for full node + LLM models.

- **Q** (@Josemi, msg#37983): Some explorer working?  
  **A** (@kushti, msg#37984): explorer.ergoplatform.com working; sigmaspace.io still in progress.

- **Q** (@kushti, msg#38002): Who hosts Spectrum backend? Offline since yesterday.  
  **A** (@Aco Šmrkas, msg#38003): Spectrum team hosts it. Alternate: Pgr hosting DEX API at dex-api.sigmaspace.io/v1/price-tracking/markets.

---

## Links Shared

- [https://x.com/chepurnoy/status/2013205592140038481]: kushti's tweet on Unstoppable Hackathon PR reviews.

- [https://github.com/ergoplatform/sigmastate-interpreter/issues/1032]: Bulletproofs verification test issue; can be finished with vibe-coding.

- [https://github.com/kushti/dexy-stable/blob/fa321c6f6332ed976bac3705de48acc0c6e9e550/Uips/UIP-001-balancing-interventions.md]: USE Improvement Proposal #1 (balancing interventions).

- [https://github.com/ergoplatform/ergo/pull/2236]: Node 6.0.2 finalization PR (extra indexer fix in final commit).

- [https://github.com/ergoplatform/ergo/pull/2290]: Node API method for Schnorr-signing messages for wallet addresses.

- [https://github.com/nautls/nautilus-wallet/pull/317]: CHRIS45 Nautilus wallet PR awaiting review.

- [https://github.com/nautls/nautilus-wallet/pull/316]: CHRIS45 Nautilus wallet PR awaiting review.

- [https://github.com/ergoplatform/explorer-backend/issues/265]: Explorer backend performance findings repository (kushti request to preserve chat discussions here).

- [https://github.com/ErgoTester/nautilus-wallet/blob/Mobile/src/chains/ergo/services/dexyService.ts]: Michael's Dexy service for Nautilus Mobile (awaiting review).

- [https://ergexplorer.com/addresses#TBHrt7kYkmxqwSo2EEPDQkTn1R76iPw919ep4y1sZMqRN9SXLnm8FM2...]: CannonQ's GORT/DORT buyback bot smart contract (long address).

- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.2]: Node 6.0.2 release (extra indices fix).

- [https://github.com/ergoplatform/ergo/pull/2291]: Plan for 6.0.3 node release; review & testing requested.

- [https://github.com/ergoplatform/ergo_avltree_rust]: Ergo Rust AVL tree library.

- [https://dex-api.sigmaspace.io/v1/price-tracking/markets]: Pgr's alternate DEX API (during Spectrum backend outage).

---

## Unresolved Questions

- **ChainCash Note Transfer Blocker** (@Fitz, msg#37948): ChainCash transfer/endorsement requires raw Schnorr signature format not exposed via Nautilus sign_data. Needs either contract-side adjustment, node-assisted signing path, or hybrid key approach. Status: investigating.

- **Oracle Pool v2 & Buyback→Reward Transfer** (@CannonQ, msg#37953–37957): Unclear if sending from DORT buyback SC to Oracle Rewards Pool is permissioned or needs separate transaction flow. kushti noted it should inject into Oracle pool refresh action; CannonQ to read notes and follow up.

- **Ergo Rust Node Sync Stability** (@Luivatra, msg#37960): Sync not 100% stable; sync speed slows after time, restart fixes it. Soft issue difficult for LLM to diagnose; parking until manual investigation possible.

- **Explorer Pretty-Printing in Sigma 6.0** (@kushti, msg#37999): Sigma 6.0 restricted pretty-printing to testing scope only; kushti needs to remember why before completing explorer backend update.

- **ergo-lib Release Timeline** (@kushti, msg#37936): No response recorded from dusek; release status unknown.

- **Spectrum DEX Backend Status** (@Moein Zargarzadeh, msg#38002): Backend offline as of 2026-01-24; kushti pinged Spectrum team; ongoing investigation.

---