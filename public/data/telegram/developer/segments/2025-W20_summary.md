# Ergo Developer Chat Summary — 2025-W20
**Period:** 2025-05-13 to 2025-05-18  
**Participants:** 8  
**Messages:** 59

---

## Key Topics Discussed

- **Ergo 6.0.0 Protocol Soft-Fork**: kushti approved Sigma 6.0.0 and is polishing Ergo 6.0.0 for review. Voting start planned at block 1,548,000 with optional flag in node config. Sub-blocks support merged and ordering block announcement implemented to avoid full block transaction section downloads [@msg#34322, 2025-05-14].

- **Sub-Blocks Devnet**: CPU mining devnet node deployed at 213.239.193.208:9058 on weak-blocks branch. Multiple nodes joining for testing, with sync stability issues reported and being investigated [@msg#34336, 2025-05-17].

- **AVL+ Tree Implementation in Fleet SDK**: anon_br researched AVL+ tree support in JavaScript; no suitable lib in JS ecosystem, requiring implementation from scratch. Sigma-JS exposes AVL+ tree ops but carries ~9mb of non-tree-shakeable code overhead for frontend use [@msg#34321, msg#34330, 2025-05-14/15].

- **Rosen Bridge Development**: Updates across watcher-app, guard-app, scanner (multi-network connectors with rate-limiting strategy), and rosen-clients. Doge network integration and successful Doge-to-Ergo event testing completed [@msg#34320, msg#34325, 2025-05-14].

- **Dexy Protocol LP Contracts**: Deployed LP swap/mint/redeem contracts; payout contract under review before deployment of remaining non-bank, non-LP contracts [@msg#34326, 2025-05-14].

- **ChainCash / Basis Design**: Design for first off-chain application with on-chain reserves considered with interested party; implementation plan to follow [@msg#34327, 2025-05-14].

- **Fleet SDK v0.8.5 Release**: Added SBox constant serialization/parsing; simplified min box value estimation via `estimateMinBoxValue()` function [@msg#34321, msg#34375, msg#34376, 2025-05-14/18].

- **EIP-4 Metadata Updates (ergo-meta)**: Prototyped with NIPoPoWs for CI verification of minting transaction inclusion; later decided to use trustable node pingging instead [@msg#34321, msg#34330, 2025-05-14/15].

---

## Important Decisions or Announcements

- [@kushti, msg#34322, 2025-05-14]: Sigma 6.0.0 approved; Ergo 6.0.0 polishing underway with review proposal soon.
- [@kushti, msg#34336, 2025-05-17]: Sub-blocks devnet CPU mining node deployed; weak-blocks branch build released for community testing.
- [@arobsn, msg#34321, 2025-05-14]: Fleet SDK v0.8.5 released with SBox constant serialization and parsing.
- [@c8, msg#34326, 2025-05-14]: Dexy LP swap/mint/redeem contracts deployed; payout contract in review.

---

## Technical Q&A Worth Preserving

- **Q** (@kushti): Sigma-JS is not exposing AVL+ tree ops? What is minting tx doing in ergo-meta, why NIPoPoWs needed? [@msg#34328, 2025-05-14]  
  **A** (@arobsn): Sigma-JS does expose AVL+ tree ops but carries ~9mb non-tree-shakeable code overhead for frontend use. For metadata, needed efficient way to verify minting transaction inclusion from CI without relying on full node; later decided to ping trustable node with txID instead [@msg#34330, 2025-05-15].

- **Q** (@Luca): Is updating metadata an extension of the EIP? [@msg#34331, 2025-05-16]  
  **A** (@arobsn): No, done off-chain in a git repo; minting transaction included in metadata file for verification purposes [@msg#34374, 2025-05-18].

- **Q** (@c8): To this day it's not clear how to do multisig with sigmastate-js [@msg#34334, 2025-05-16]  
  **A** (@kushti): Interesting, will check. If multisig aggregation support not yet implemented, should not be hard to add [@msg#34356, 2025-05-17].

- **Q** (@HQΣr): What's the minimum box value? Can it be lowered further? [@msg#34357, 2025-05-18]  
  **A** (@Luivatra): Box value is a function of box size in bytes; 360 nanoERG per byte. (@Aco): Use `estimateMinBoxValue()` function from Fleet SDK to calculate required value; can pass custom value per byte if needed [@msg#34358, msg#34365, msg#34375, 2025-05-18].

---

## Links Shared

- [https://github.com/marctheshark3/AI-Project-Starter-Kit/tree/main]: AI Project Starter Kit for ErgoHack participants [@msg#34317, 2025-05-14].
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/930]: Sigma 6.0.0 PR [@msg#34322, 2025-05-14].
- [https://github.com/ergoplatform/ergo/pull/2152]: Ergo 6.0.0 PR with 6.0 voting start block proposal [@msg#34322, 2025-05-14].
- [https://gist.github.com/kushti/8f0753c454cab46244dbaee3b4d842c8]: Sub-blocks devnet client config example [@msg#34336, 2025-05-17].
- [https://github.com/ergoplatform/sigma-rust/pull/825]: Sigma Rust PR approved by dusek [@msg#34332, 2025-05-16].
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1012/files#diff-36512a711d18b76c6205a1af1b1f885bd01ea41fd47dbb13604adb88521db93c]: Multisig support in sigmastate-js discussion [@msg#34334, 2025-05-16].
- [https://github.com/nautls/ergo-meta/blob/master/metadata/tokens/36aba4b4a97b65be491cf9f5ca57b5408b0da8d0194f30ec8330d1e8946161c1.json]: Example EIP-4 metadata file with minting transaction [@msg#34374, 2025-05-18].
- [https://github.com/fleet-sdk/fleet/blob/452415bec3d4c0e95254914c560dea3ba69fb6cf/packages/core/src/builder/outputBuilder.spec.ts#L524-L525]: Fleet SDK estimateMinBoxValue example [@msg#34375, 2025-05-18].

---

## Unresolved Questions

- **Sub-blocks devnet sync stability**: Nodes getting stuck at lower heights; kushti identified possible fork issues in sync protocol, flagged for rework in coming days [@kushti, msg#34355, 2025-05-17].
- **Multisig aggregation in sigmastate-js**: Support status unclear; kushti indicated implementation should not be hard if not yet present [@msg#34356, 2025-05-17].
- **EIP-4 metadata verification approach**: Initially explored NIPoPoWs; settled on trustable node pingging, but broader design for metadata signing key verification remains in discussion phase [@msg#34330, msg#34374, 2025-05-15/18].