# Ergo Developer Chat Summary — 2025-W29
**Period:** 2025-07-14 to 2025-07-19  
**Participants:** 8 active  
**Message Count:** 72

---

## Key Topics Discussed

- **Node API Endpoints for Spent UTXO Data**: Discussion around implementing indexed-node-only endpoints to retrieve spent UTXO information with spending proofs. mgPai proposed a `/blockchain/blocks/...` endpoint specifically for indexed nodes, since standard nodes don't retain spent UTXO history.

- **Fleet SDK v0.10.0 — AvlTree Serialization**: arobsn reported that Fleet SDK now supports serialization/deserialization of AVL trees and other constant types (Byte, Bool, Short, Int, Long, BigInt, GroupElement, SigmaProp, Unit, Coll, Tuple, Box), with additional types (Header, Option, UnsignedBigInt) coming in Ergo 6.0. UnsignedBigInt is critical for cryptographic operations including signature verification and modular arithmetic.

- **Ergo 6.0 Protocol Updates — Sub-blocks & Sidechain Research**: kushti reported progress on a whitepaper for Braid (double merge-mined sidechain with Bitcoin), elimination of "todo:" markers around sub-block code, and testnet mining resolution. Sub-block injection into mainnet targeting late July.

- **Oracle Pool v2 & SigmaUSD**: kushti announced need for 2–3 testnet operators to help test SigmaUSD Oracle Pool v2 voting mechanism. Instructions for v1→v2 migration to be written in coming days.

- **Storage Rent Contract & Lithos Protocol Testing**: Michael reported Lithos storage rent contract now in testing, Fraud proof NIPoPoWs-based contracts resumed, and a "holding contract" (initial rollup component) successfully deployed on devnet, moving to 6.0 testnet this week.

- **Machina Finance — AVL Tree Operations & Real-time Order Aggregation**: AVL tree serializations complete; community review of Machina contracts underway; real-time order aggregation backend in Rust in development.

- **Rosen Bridge Progress**: Doge Bridge deployed; Runes integration in progress; Monero integration framework under investigation.

- **DarkERG Monetary System Proposal**: kushti proposed implementing Bulletproof-based range proof verification in ErgoScript to enable DarkERG (hidden-amount stablecoin with virtual UTXOs, stealth addresses, and 1:1 contract-based swaps with ERG). Bounty issue created: https://github.com/ergoplatform/sigmastate-interpreter/issues/1032

- **Node Sync & Version Stability Issues**: Multiple reports of sync issues on 5.0.25 (indexer errors, unknown tokens). Moein advised upgrading to 5.0.27 or 6.0.0. Michael reported testnet stuck at height 801365 with parser failure; kushti reproduced and fixed via PR #2229.

- **Full Node Performance on 6.0.0**: Sheetoshi achieved 1.5-day sync on Raspberry Pi (6.0.0) vs. 3+ days on 5.0.25—significant improvement.

---

## Important Decisions or Announcements

- [@arobsn, msg#34979, 2025-07-16]: Fleet SDK v0.10.0 released with AvlTree serialization support; Nautilus Wallet fixed reactivity bug and removed max ledger tokens warning; ergoc v0.4.0 released with constant placeholder tracking.

- [@Michael, msg#34993, 2025-07-16]: Lithos storage rent contract entered testing phase; "holding contract" (rollup initial component) deployed on devnet, moving to public 6.0 testnet later in week.

- [@kushti, msg#34983, 2025-07-16]: Whitepaper for Braid (double merge-mined Ergo–Bitcoin sidechain) in progress; sub-block mining support expected on mainnet by late July; testnet mining issues resolved; in talks with MEXC.

- [@Marc the Shark, msg#34999 & msg#35000, 2025-07-16]: Sigmanauts Mining Pool launched new calculator (https://calc.ergominers.com/); working on admin tools, alerts, UI; sigmapy Python library based on Ergo lib bindings in development; Top Byte site for explorer queries.

- [@kushti, msg#34995, 2025-07-16]: Bounty created for Bulletproof-based range proof verification in ErgoScript to enable DarkERG.

- [@kushti, msg#35018, 2025-07-18]: Fixed testnet parser issue (PR #2229); requested review from community.

---

## Technical Q&A Worth Preserving

- **Q** (@MGpai, msg#34961): Is it viable to have an API method for fetching spent UTXO data (Issue #2225)?  
  **A** (@kushti, msg#34966): "Possible if a node is storing UTXO set only. What if not? What should an output be about then?"  
  **Resolution** (@MGpai, msg#34969): Proposed as indexed-node-only endpoint; (@MGpai, msg#34974–35): "It won't [work for non-indexed nodes]. This is a new API method under /blockchain/blocks/... It's a specific indexed node endpoint."

- **Q** (@arobsn, msg#34980): Are there any constant-supported types missing from Fleet SDK's serialization (currently: Byte, Bool, Short, Int, Long, BigInt, GroupElement, SigmaProp, Unit, Coll, Tuple, Box, AvlTree)?  
  **A** (@kushti, msg#34987): "From 6.0, also Header, Option, UnsignedBigInt"

- **Q** (@MGpai, msg#34988): Why is UnsignedBigInt needed?  
  **A** (@kushti, msg#34991): "Critically for cryptographic apps, such as checking sig etc. The new type has support for modular ops etc"

- **Q** (@Michael, msg#34993 & msg#35006, msg#35008): Testnet stuck at height 801365 with parser error "Failed to parse modifier with declared id...from ConnectedPeer"  
  **A** (@kushti, msg#35011): Reproduced locally, checking. Fixed via PR #2229 (@kushti, msg#35018).

- **Q** (@MGpai, msg#35029): When `CONTEXT.HEIGHT` is used in ErgoScript executing in the mempool, is height = (confirmed tip height of network) + 1?  
  **A** (unresolved at end of week)

---

## Links Shared

- [https://x.com/root7Z/status/1944810335694737870]: Orhan reference (context unclear from transcript)

- [https://github.com/ergoplatform/ergo/issues/2225]: MGpai's question about spent UTXO endpoint viability

- [https://github.com/ergoplatform/ergo/pull/2226]: PR related to UTXO retrieval

- [https://github.com/ergoplatform/ergo/pull/2227]: mgPai's working PR for block/UTXO endpoint with spending proof inclusion

- [https://github.com/ergoplatform/sigmastate-interpreter/issues/1032]: Bounty for Bulletproof range proof verification in ErgoScript (kushti, msg#34995)

- [https://github.com/ergoplatform/ergo/issues/2228]: API documentation/implementation issue (mgPai)

- [https://github.com/ergoplatform/ergo/pull/2229]: Fix for testnet parser failure at height 801365 (kushti, msg#35018)

- [https://github.com/ergoplatform/ergo/issues/2230]: Unresolved API behavior issue (mgPai, msg#35019)

- [https://node.phoenixfi.app/panel]: mgPai's test node running PR for new endpoints (msg#34982)

- [https://calc.ergominers.com/]: Sigmanauts Mining Pool calculator (Marc the Shark, msg#34999)

- [https://deepwiki.com/ergoplatform/ergo/1-ergo-node-overview]: Ergo node system structure reference (mgPai, msg#35041)

---

## Unresolved Questions

- **CONTEXT.HEIGHT in Mempool**: Does `CONTEXT.HEIGHT` in ErgoScript during mempool execution evaluate to (confirmed tip height) + 1, or something else? (@MGpai, msg#35029) — no answer provided by week end.

- **API Endpoint Auto-generation**: How to auto-generate OpenAPI YAML for new Swagger endpoints? (@MGpai, msg#34970) — kushti replied manual updates are used (msg#34985), but workflow for contributors unclear.

- **Swagger/API Implementation Status**: Unclear whether issue #2230 is purely a documentation bug or indicates missing API implementation (@MGpai, msg#35019, msg#35020). Status TBD.

- **Ergo Node System Structure Consultation**: DJ (AutoJanitor dev) requested detailed explanation of Ergo node system structure from kushti (@DJ, msg#35037–39); availability/scheduling unresolved at week end.

---

## Notable Absences

- No discussion of Dexy Protocol or Dexy Gold updates
- No Paideia or governance DAO activity reported
- No wallet security or user-facing feature work mentioned beyond Nautilus reactivity fix
- No mining pool competition or performance comparisons (Sigmanauts updates only)