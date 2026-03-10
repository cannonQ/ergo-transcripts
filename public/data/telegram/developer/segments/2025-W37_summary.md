---
title: "Ergo Developer Chat — 2025-W37"
date_start: "2025-09-08"
date_end: "2025-09-14"
type: telegram_weekly
channel: developer
week: "2025-W37"
source: telegram
message_count: 52
categories: [technical, defi, ecosystem, wallet, community, bridges]
key_terms: [6.0, protocol, soft-fork, node, PR review, sub-blocks, SigmaSDK, sigmastate-interpreter, "PR #1069", p2p, synchronization, peers, penalties, seed node, blacklisting, extraIndex, v6 node, explorer mode, configuration, Basis]
---
# Ergo Developer Chat Summary — 2025-W37
**Period:** 2025-09-08 to 2025-09-14  
**Participants:** 7 | **Messages:** 52

---

## Key Topics Discussed

- **Protocol 6.0 and sub-blocks development**: kushti progressing with PR #1069 towards sub-blocks in SigmaSDK, with design doc discussion pending. Testing p2p layer improvements with Patato.

- **Node configuration and indexing**: Luivatra troubleshooting v6 node `extraIndex` mode; kushti confirmed extra index starts after full sync completes.

- **Basis (ChainCash) micropayments contract**: Rework underway to support micropayments and improved security; Rust backend contributor needed for Telegram wallet development.

- **Nautilus Wallet and Fleet SDK**: anon_br investigating Ledger connection issue; Fleet SDK migrated from tsup to tsdown for TypeScript building with new IIFE exports for browser access.

- **Machina Finance**: Finishing limit orders unit tests.

- **GitCircles integration**: Migration from secp256k1 to Ergo addresses; implementation plan improvements in progress.

- **CyberVerse**: Combat animation and auto-recovery system added.

- **Sigma Rust issues**: kushti flagged issues #811, #817, and attached bounty to #193 for community contributor action.

---

## Important Decisions or Announcements

- [@kushti, msg#35821, 2025-09-09]: Community Chat moved to Thursday sessions (replacing Weekly Update/AMA); everyone welcome on Zoom + YouTube livestream; developer update included. **Schedule: Thursday 11 Sept, 13:00 UTC**

- [@kushti, msg#35837, 2025-09-10]: Ergo protocol R&D priorities: PR #2239 (minor 6.0 improvements), PR #1069 (sub-blocks design pending), next phase includes Sigma refactoring and extensible context for sidechain/offchain reuse.

- [@kushti, msg#35862, 2025-09-13]: **Call for action** — Rust developer needed to build Basis tracker; discussion in ChainCash Telegram group.

- [@anon_br, msg#35839, 2025-09-10]: Fleet SDK build system migration complete (tsup → tsdown); IIFE export support for direct browser access.

---

## Technical Q&A Worth Preserving

- **Q** (@Luivatra, msg#35825): Has the `extraIndex` config changed in v6 node?  
  **A** (@kushti, msg#35832): Looks correct in config shown; extra index starts after syncing completes — may have been awaiting initial sync.

- **Q** (@Michael, msg#35850): Will wallet be able to update (balance, transactions) as fast as sub-blocks deployment?  
  **A** (@HQΣr, msg#35851 / @kushti, msg#35852): Yes, if wallet endpoints support sub-blocks; rest depends on wallet implementation.

- **Q** (@Patato, msg#35859): After self-to-self transaction test, node lost all peers and couldn't reconnect — suspected IP blacklist?  
  **A** (@kushti, msg#35864/msg#35866): Suggested cleaning peer DB and node state on both sides; identified seed node downtime and issues with unreachable peer affecting bootstrap. Root cause investigation pending log review.

- **Q** (@Patato, msg#35872): Node stuck at height 543 while seed at 1200+; many penalty entries in logs blacklisting seed node — what triggers penalties?  
  **A** (@kushti, msg#35873): Will investigate logs in detail; penalty mechanism behavior under investigation.

---

## Links Shared

- [https://fasterthanli.me/articles/color-npm-package-compromised]: Security alert on compromised npm `color` package (TypeScript/JavaScript users).

- [https://jdstaerk.substack.com/p/we-just-found-malicious-code-in-the]: Malicious code discovery in npm dependency (follow-up security context).

- [https://github.com/ergoplatform/ergo/pull/2239]: PR for minor 6.0 node improvements — awaiting review.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1069]: Sub-blocks design PR in SigmaSDK — awaiting design doc approval before merge.

- [https://github.com/GitCircles/GitCircles-Github/pull/3]: GitCircles migration to Ergo addresses (merged).

- [https://www.ergoforum.org/t/basis-a-foundational-on-chain-reserve-approach-to-support-a-variety-of-offchain-protocols/5153/2]: Basis contract rework discussion.

- [https://www.ergoforum.org/t/call-for-action-building-peer-to-peer-economies-and-free-banking-on-ergo/5221]: Call for Rust developer for Basis tracker.

- [https://www.ergoforum.org/t/ergo-precious-metal-expansion-using-p2p-transfers-paideia-dao-and-dexygold/5230/2]: Proposal: P2P metal expansion using Paideia DAO and Dexy Gold; seeking contributors and capital partners.

---

## Unresolved Questions

- **Sub-blocks design approval timeline**: PR #1069 awaiting design document discussion and community approval before merge (kushti, msg#35837).

- **Ledger wallet connection issue**: anon_br investigating Nautilus Wallet Ledger integration failure — no resolution reported by week end.

- **Node penalty mechanism clarification**: Patato's logs show extensive penalties and blacklisting during sync failure; root cause of penalty triggers not yet diagnosed (kushti flagged for investigation).

- **Basis tracker ownership**: Call for action posted but no developer assigned as of 2025-09-14.

- **Wallet endpoint sub-blocks support**: Timeline for wallet providers to implement sub-blocks API not specified.

---