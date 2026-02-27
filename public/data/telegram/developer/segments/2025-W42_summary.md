# Ergo Developer Chat Summary — 2025-W42
**Period:** 2025-10-13 to 2025-10-19  
**Participants:** 10 | **Messages:** 70

---

## Key Topics Discussed

- **AI/LLM Agents in Development**: kushti proposed restricting coding agents to test generation and documentation only; production code in security-critical modules (Ergo node, cryptography) must remain human-written. A proposed `agents.md` (to be renamed `AGENTS.md`) was shared for the Ergo node establishing strict dev boundaries (`src/test/` only, no `src/main/` modifications).

- **Sub-blocks vs. Layer 2 Architecture**: Discussion on whether sub-blocks add unnecessary L1 complexity versus L2 solutions. Consensus emerged that sub-blocks serve specific use cases (faster sidechains, settlement layer confirmations) while L2s remain better for most applications requiring decentralization and fee markets.

- **ErgoScript Verification Model**: Clarification that ErgoScript contracts can be verified off-chain during transaction signing (when not dependent on blockchain context like block height), reducing redundant on-chain computation.

- **Basis Tracker Deployment**: Initial version of Basis tracker server deployed at `http://213.239.193.208:3001/` for testing; integration work ongoing.

- **USE Stablecoin Parameters**: Finalizing bank intervention simulations before token issuance; liquidity bootstrapping event to be announced shortly.

- **Explorer Indexer Bug**: Critical issue affecting wallet history queries for accounts older than 2023; qx() deployed temporary Perl proxy script on `gql.ergoplatform.com` to patch HISTORY query results while full indexer fix is investigated.

- **Sigma-Rust Documentation Gaps**: JS/WASM bindings (`sigma-rust/bindings/ergo-lib-wasm`) lack formal documentation; developers currently reverse-engineering from code examples. LLM-assisted doc generation proposed as solution.

- **GitCircles Expansion**: New contributor onboarded; one PR away from expanding test coverage to new communities.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#36310, 2025-10-15]: AI agents **prohibited** from modifying production code in security-critical Ergo repos; restricted to `src/test/` and documentation generation.

- [@kushti khushi, msg#36333, 2025-10-15]: Created AppKit 6.0 update issue with 100 ERG bounty (GH #250).

- [@kushti khushi, msg#36337, 2025-10-15]: **New USD oracle pool launched**; USE stablecoin liquidity bootstrapping event to be announced; Basis tracker server in testing phase; wallet development started.

- [@kushti khushi, msg#36329, 2025-10-15]: **Weekly Community Chat scheduled** for Thursday, 2025-10-16, 13:00 UTC on Zoom/YouTube (link in video description).

- [@Ody Bhoja, msg#36334-335, 2025-10-15]: Flagged Hacktoberfest 2025 (ends Oct 31) as opportunity to attract contributors to Ergo GitHub repos.

- [@DiscordBridge (qx()), msg#36365-369, 2025-10-16]: **Explorer `gql.ergoplatform.com` indexer bug**: Deployed temporary Perl proxy script to fix HISTORY query results for wallets older than 2023; full indexer redesign needed.

---

## Technical Q&A Worth Preserving

- **Q** (@Dũng Nguyễn, msg#36348): Is ErgoScript verified off-chain when signing a transaction?  
  **A** (@kushti khushi, msg#36354): Yes—when a transaction is not dependent on blockchain context (e.g., block height), it executes identically off-chain and on-chain. Off-chain computation generates a proof; on-chain verification confirms it.

- **Q** (@Dũng Nguyễn, msg#36361): Why implement sub-blocks instead of L2? Won't sub-blocks add unnecessary L1 complexity?  
  **A** (@DiscordBridge [Jayedii], msg#36363-364; @kushti khushi, msg#36373): Sub-blocks and L2s solve different problems. Sub-blocks optimize L1 for true P2P currency (faster throughput, native fees market, decentralization); L2s are less secure but reduce computational load. Sub-blocks motivated by: (1) faster sidechains, (2) faster settlement-layer confirmations. L2s remain strictly better for most applications requiring decentralization.

- **Q** (@User, msg#36323): Where is documentation for Sigma-Rust JS/WASM bindings?  
  **A** (@User, msg#36322): Formal documentation missing; developers using code examples from `sigma-rust/bindings/ergo-lib-wasm` tree. Suggested solution (@Wish Balance, msg#36326): LLM-assisted doc generation via PocketFlow-style tutorials.

- **Q** (@Dũng Nguyễn, msg#36356): If I input a wrong PIN to a pin-lock contract, can the transaction be signed?  
  **A** (@kushti khushi, msg#36357): No—only the correct input unlocks the contract both off-chain and on-chain.

---

## Links Shared

- [https://github.com/GitCircles/GitCircles-Github/pull/10]: PR awaiting merge; kushti requested review.
- [https://github.com/ergoplatform/ergo/pull/2242]: Agents.md (to rename AGENTS.md) establishing development restrictions for AI agents in Ergo node.
- [https://www.ergoforum.org/t/physical-or-digital-gold-simple-insurance-on-ergo/4715]: Physical/digital gold insurance example in SigmaSDK (under review).
- [https://github.com/ergoplatform/ergo/issues/2223]: Fix needed (referenced in progress).
- [http://213.239.193.208:3001/]: Basis tracker server (initial deployment, under testing).
- [https://github.com/ergoplatform/ergo-appkit/issues/250]: AppKit 6.0 update issue (100 ERG bounty).
- [https://www.ergoforum.org/t/ergo-addresses-details/40]: Ergo address validation documentation.
- [https://docs.ergoplatform.com/dev/wallet/address/address_types/]: Address type reference.
- [https://github.com/ergoplatform/sigma-rust/blob/2f840d3872367d6181d66d4a168194dbefad77f1/ergotree-ir/src/chain/address.rs#L305]: Rust address parsing functions with validation.
- [https://github.com/The-Pocket/PocketFlow-Tutorial-Codebase-Knowledge]: Example of LLM-assisted doc generation framework.
- [https://code2tutorial.com/]: Demo of auto-generated code tutorials.
- [https://youtube.com/live/hqrPQ24mLdY]: Weekly Community Chat live stream (2025-10-16, 13:00 UTC).
- [https://hacktoberfest.com/]: Hacktoberfest 2025 (deadline Oct 31).
- [https://github.com/GitCircles/GitCircles-Github/issues/18]: GitHub wallet address validation issue.
- [https://github.com/ErgoDevs/Ergo-Bounties/blob/main/data/all.md]: Ergo bounties list (flagged as outdated by new contributor).

---

## Unresolved Questions

- **Explorer Indexer Root Cause** (msg#36365-372): Full technical details of indexer bug causing history query failures for wallets >2023 not yet documented; requires investigation by @anon_br (Nautilus/Machina Finance lead). Temporary Perl proxy in place pending permanent fix.

- **Sigma-Rust JS/WASM Documentation** (msg#36317, 36323): Formal docs still missing; LLM-assisted generation approach proposed but not yet assigned or started.

- **Bounties List Currency** (msg#36374): Developer reported Ergo-Bounties GitHub list as out-of-date; no confirmation of update status or maintenance timeline given.

- **AppKit 6.0 Difficulty** (msg#36333): kushti noted update "shouldn't be hard" but no technical blockers identified yet; actual scope unclear.

---

## Notable Absences

- No protocol-level consensus changes proposed.
- No major dependency updates or breaking changes announced.
- Sidechain and layer 2 design work discussed conceptually; no concrete roadmap or timeline provided.
- No response from bounties maintainer on outdated list issue (msg#36374).