---
title: "Ergo Developer Chat — 2024-W19"
date_start: "2024-05-06"
date_end: "2024-05-12"
type: telegram_weekly
channel: developer
week: "2024-W19"
source: telegram
message_count: 0
categories: [technical, nft, ecosystem, bridges, defi, governance, mining, wallet]
key_terms: [Sigma 6.0, serialization, deserialization, Header support, ErgoTree, ErgoScript, executeFromVar, executeFromReg, P2SH scripts, macro expansion, Merkleized FSM, DeserializeContext, sigma-rust, transaction validation, interpreter performance, 300-400x speedup, bindings, Lithos, Header.checkPow, Header.bytes]
---
# Ergo Developer Chat Summary — 2024-W19
**Period:** 2024-05-06 to 2024-05-12  
**Participants:** 8 core contributors + DiscordBridge relay

---

## Key Topics Discussed

### Sigma 6.0 Protocol Development
- [@kushti, msg#26737, 2024-05-06]: Sigma 6.0 ready for DApp implementation with support for (de)serialization of all types (beneficial for rollups, sidechains, Lithos Protocol), nbits en/de coding (for trustless hashrate derivatives), and Header serialization improvements. Post-6.0, focus shifts to generic Sigma protocol compression and bulletproofs verification support.
- [@kushti, msg#26790, 2024-05-09]: `executeFromVar`/`executeFromReg` implemented, enabling ErgoScript execution from input variables or registers — similar to P2SH scripts. Enables Merkleized Finite State Machines (MFSMs) and optimistic verification schemes like FairSwap in ErgoScript.

### Lithos Protocol Integration
- [@kushti, msg#26738-26740, 2024-05-06]: Header serialization support (`Header.checkPow`, `Header.bytes`) completed for Lithos. DevNet with 6.0 candidate can be deployed for Lithos testing.

### Sub-blocks Roadmap
- [@kushti, msg#26745, 2024-05-07]: Sub-blocks implementation targeted for late June (post-Sigma 6.0), contingent on contributor availability.

### Sigma-rust Release Cycle
- [@dusek_, msg#26759, 2024-05-08]: Performance improvements (300-400x faster in extreme cases), transaction validation support landed, ExtSecretKey/ExtPubKey/DerivationPath bindings completed for C/Swift/Go. Release imminent pending final PR (#743).
- [@dusek_, msg#26762, 2024-05-08]: Ready for release after fix in discussion #742; ideally included in next release.

### Dexy Protocol LP Contracts
- [@kushti, msg#26758, 2024-05-08]: Checking LP contract differences from Spectrum; mainnet deployment this week pending update key holders (currently only kushti and code_for_uss).

### Mempool Spam Mitigation
- [@kushti, msg#26758, 2024-05-08]: New node PR (#2156) cleans mempool of transactions double-spent in blocks immediately after block processing.

### Rosen Bridge Development
- [@zzzzbye, msg#26775, 2024-05-08]: Pub-sub APIs implementation started; SDK structure proposals drafted and team outreach for outsourcing begun. Guard-service TSS key config revamp; scanner extractor initialization status now stored in database. Abstract Ergo extractors being developed to unify format.

### ChainCash Server Development
- [@kushti, msg#26758, 2024-05-08]: Finalizing abstract for submission; actively recruiting Rust developers for ChainCash server implementation.

### ErgoDevs DAO Multisig
- [@kushti, msg#26758, 2024-05-08]: Multisig set up, withdrawal testing pending. Structure discussions and ErgoHack support planning ongoing.

### Blitz TCG Marketplace
- [@Mick, msg#26764, 2024-05-08]: Native marketplace on blitztcg.com launching using existing framework. UI for burn contract completed; users soon able to burn cards for BLTZ tokens.

### Paideia DAO Frontend
- [@Luivatra, msg#26765, 2024-05-08]: Create DAO frontend in development; beta testing of full DAO creation capability coming soon.

### Cyberverse Game Economy Rebalancing
- [@Pixel, msg#26780, 2024-05-08]: NPC Market overhauled to prevent farming—three merchants with 12 deals each (prices 80-170% base), reset every 6 hours. NFT reward accumulation system added with declining claim fees (20% → 0% over 28 days). Halving events: 50% cuts on May 1st and future timeline. Sketchy Dealer added (25% below base with 5-25% scam chance).

### Sigmanauts DAO
- [@Unknown, msg#26776, 2024-05-08]: New Sig-Cans Abhishek P and Maritsa Art welcomed. Lycan and Paul promoted to Sigmanauts (votes passed). Mining pool approaching 100 GH/s; DB integration with Docker completed to reduce API load. Cornell Blockchain Conference gold sponsorship funded (4000 ERG); treasury balance 25,297.529 ERG.

### "The Field" Pledging Protocol
- [@CannonQ, msg#26777, 2024-05-08]: MVP smart contracts complete; dApp frontend integration ongoing. Back-door mechanism for stuck assets drafted (temporary, emergency-only). Pitch deck and FAQ due Friday; marketing shift next week. Discord: https://discord.gg/wa38bX57tY

### Atomic Swap Software
- [@deathgripson, msg#26778, 2024-05-08]: Basic UI for password-encrypted account login integrated. Hot-reloading swap states in progress (auto-resume after interruption). Customizable price feed system for optional market making/taking planned.

### Satergo Wallet Development
- [@Aberg, msg#26767, 2024-05-08]: Remote node connection test added. Next: demurrage/storage rent warning and UTXO consolidation (solo mining pool issues unresolved).

### $COMET Liquidity Rewards
- [@Koutelier, msg#26774, 2024-05-08]: LP rewards active—lock 1M COMET for 1 year → 20% HODLCOMET; lock 3 years → 50% HODLCOMET.

### Atomic Swap Reputation System
- [@jossemii, msg#26766, 2024-05-08]: Rust component compilation in WASM for web version in progress. Research into Bitcoin/Runes integration and closed network integration (X, GitHub) ongoing for ErgoHack.

---

## Important Decisions or Announcements

- [@kushti, msg#26746, 2024-05-07]: **Weekly Ergo Developers chat confirmed** for Wednesday, May 8th, 1 PM UTC.
- [@kushti, msg#26741, 2024-05-06]: **Post-Sigma 6.0 idea**: Generic bulletproofs/compressed Sigma protocol support could enable updateable Sigma protocol sets via miner voting using ZKPDL-like language (reference: Meiklejohn et al., USENIX Security 2010).
- [@dusek_, msg#26762, 2024-05-08]: **Sigma-rust release imminent** pending final PR; bindings complete (C/Swift/Go).
- [@Unknown, msg#26776, 2024-05-08]: **Sigmanauts promoted**: Lycan and Paul voted to full Sigmanauts status.

---

## Technical Q&A Worth Preserving

### Fleet SDK + Babel Fees Integration
- **Q** (@justblake3911, msg#26749, 2024-05-07): How to sign a transaction with a wallet holding 0 ERG but 10,000 custom tokens using Babel Fees plugin for transaction fees?
  **A** (@anon_BR, msg#26784, 2024-05-08): Babel boxes must be fetched by filtering the blockchain using the Babel ErgoTree contract with target tokenId as parameter. Example: query the contract's hexadecimal representation (with tokenId substituted) against the ergoplatform API `/boxes/unspent/byErgoTree` endpoint. Reference EIP-0031 for details and exact contract hex.

- **Q** (@justblake3911, msg#26799, 2024-05-09): After fetching correct Babel box, receiving "Empty Constant" error.
  **A** (unresolved as of msg#26799)

### executeFromVar Recursion
- **Q** (@dusek_, msg#26793, 2024-05-11): Is recursion possible with `executeFromVar`?
  **A** (@kushti, msg#26803, 2024-05-10): No recursion during substitution—`executeFromVar` works like macros (frontend synonym for DeserializeContext ErgoTree node). Macro expansion is non-recursive and happens before AST reduction.

### executeFromVar Example
- **Q** (@Pulsarz, msg#26795, 2024-05-09): Short example of `executeFromVar` would be useful.
  **A** (@Luivatra, msg#26796-26798, 2024-05-09): 
  ```
  Blake2b256(SELF.propositionBytes) == getVar[Coll[Byte]](0) && executeFromVar(getVar[Coll[Byte]](0))
  ```
  (Note: Self-corrected—hash should wrap getVar and compare to hardcoded value for P2SH-style validation.)

### Merkleized FSM Applications
- **Q** (implied, msg#26804): How to extend P2SH pattern to FSM contracts?
  **A** (@kushti, msg#26804, 2024-05-10): Script allows `executeFromVar` only if script hash matches hardcoded digest; add condition on current state to obtain Merkleized FSM contract.

---

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2156]: Mempool cleanup PR—removes double-spent transactions from mempool after block processing.
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/972]: Header serialization support (Sigma 6.0).
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/975]: Header serialization in ErgoTree/ErgoScript.
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/976]: Generic `deserialize[T]` and `executeFromVar`/`executeFromReg` implementation.
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/973]: Sigma codebase cleanup.
- [https://github.com/ergoplatform/sigma-rust/pull/740]: Performance improvements (300-400x speedup).
- [https://github.com/ergoplatform/sigma-rust/pull/742]: ExtSecretKey/ExtPubKey/DerivationPath bindings.
- [https://github.com/ergoplatform/sigma-rust/pull/736]: Transaction validation support (merged).
- [https://github.com/ergoplatform/sigma-rust/pull/743]: Final PR for sigma-rust 0.27 release.
- [https://github.com/SavonarolaLabs/turbo-mempool/blob/main/src/lib/server/turbo-mempool/sell-contract/contract-sell-token-for-erg.ts]: Shadowpool token sell contract.
- [https://www.usenix.org/event/sec10/tech/full_papers/Meiklejohn.pdf]: Meiklejohn et al. on updateable cryptographic protocols.
- [https://github.com/ergoplatform/eips/blob/master/eip-0031.md]: Babel Fees EIP-0031 specification.
- [https://api.ergoplatform.com/api/v1/docs/#operation/getApiV1BoxesUnspentByergotreeP1]: Ergo Platform API docs for unspent boxes by ErgoTree.
- [https://api.ergoplatform.com/api/v1/boxes/unspent/byErgoTree/...]: Example Babel Fees SigmaUSD box query endpoint.
- [https://sigmanauts.com/minutes/2024-05-05-meeting/]: Sigmanauts DAO meeting notes (May 5, 2024).
- [https://discord.gg/wa38bX57tY]: "The Field" protocol Discord server.
- [https://blitztcg.com/]: Blitz TCG marketplace.
- [https://cyberverse.fandom.com/wiki/Updates]: Cyberverse Wiki update log.
- [https://github.com/ScorexFoundation/sigmastate-interpreter/issues/486]: Issue for contributor ergomorphic to start with (Sigma 6.0 work).
- [https://github.com/ScorexFoundation/sigmastate-interpreter/issues/667]: Related issue for contributor context.
- [https://github.com/ScorexFoundation/sigmastate-interpreter/issues/978]: New issue opened by kushti for ergomorphic.
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/977]: PR #977 requiring review (ergomorphic contribution).
- [https://eprint.iacr.org/2019/1296.pdf]: FairSwap/FastSwap optimistic verification schemes paper.
- [http://147.182.244.219/ergobabelfees.html]: justblake3911's Babel Fees test code.

---

## Unresolved Questions

- **Babel Fees "Empty Constant" Error** (@justblake3911, msg#26799, 2024-05-09): Despite fetching correct Babel box and following EIP-0031 structure, integration still returns "Empty Constant" error. Requires further debugging.
- **Shadowpool Deposit Extension** (@c8, msg#26800, 2024-05-09): One more proof-of-concept needed for "extending deposit time in intervals" before publishing contracts for community discussion. Estimated 1-2 weeks.
- **Satergo Solo Mining Pool** (@Aberg, msg#26773, 2024-05-08): Still unresolved why solo mining pool breaks; postponed in favor of demurrage/storage rent warnings and UTXO consolidation.
- **Dexy Gold Update Key Holders** (@kushti, msg#26758, 2024-05-08): Still searching for additional update key holders beyond kushti and code_for_uss for mainnet LP contract deployment.

---

## Activity Assessment

Moderate-to-high activity week with substantive protocol development (Sigma 6.0 nearing completion), ecosystem project updates (Rosen Bridge, Palmyra/Paideia, Cyberverse), and production releases queued (sigma-rust 0.27). Technical questions focused on Fleet SDK integration and new ErgoScript capabilities. Most discussions technical and forward-looking.