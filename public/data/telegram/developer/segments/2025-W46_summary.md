---
title: "Ergo Developer Chat — 2025-W46"
date_start: "2025-11-10"
date_end: "2025-11-16"
type: telegram_weekly
channel: developer
week: "2025-W46"
source: telegram
message_count: 78
categories: [technical, wallet, defi, bridges, ecosystem]
key_terms: [testnet, devnet, LITHOS_NET, 6.0, known peers, database wipe, explorer-backend, explorer-frontend, PR review, README.md, sigmastate-interpreter, ergo-wallet-app, Android, "PR#188", @Superellipse, RWA hub, chaincash, developer recruitment, Basis contract, Rosen Bridge]
---
# Ergo Developer Chat Summary — W46 (2025-11-10 to 2025-11-16)

## Key Topics Discussed

- **Testnet Emission Contract Exhaustion**: The testnet emission contract ran out of ERG ~1 week before this period, resulting in junk transactions filling blocks. Discussion centered on restarting the testnet from scratch with fresh parameters.

- **Testnet 6.0 & Autolykos v2 Activation**: Community agreed to launch a new testnet (LITHOS_NET) with 6.0 capabilities immediately enabled and Autolykos v2 activated from genesis block. Target block time: 1–2 minutes.

- **Sub-blocks Implementation**: kushti finishing rework of fork processing logic with tests; new devnet to launch by 2025-11-13 or 2025-11-14.

- **ChainCash & Basis Protocol**: Redemption transaction building in progress; @madspectator working on bwallet updates.

- **Hermes (Mempool API)**: Mempool API edge cases handled; tracker complete; WebSocket API in progress.

- **Minotaur 3.2.0 Release**: Added BalanceDisplay component, Export/Import wallet functionality, currency symbol management, and fixed transaction display bugs.

- **Rosen Bridge Expansion**: Handshake (HNS) support PRs submitted by @AcoSmrkas across Utils, Scanner, Chains, Health Check, UI, Watcher, and Guard Service repos. DefiiLlama token mapping updated to include Doge.

- **DuckPools v2 Development**: Continuous Yield Delivery deployed; Smart Reserves UI, contract templates, and test pools targeting December 8 public feedback release.

- **Celaut & GitCircles**: Celaut progressing with Node-to-node payments via ChainCash Basis contract; GitCircles working on transaction formation and payment automation.

- **Lithos Protocol & GPU Mining**: Cheese Enthusiast inquired about using AVL trees for proof of prompt/datasets in context of GPU mining; discussion about how NIPoPoWs' "goodness" concept might translate to LLM work left unresolved.

- **Rust Maintenance Funding**: dusek now receiving constant payments for Rust library maintenance and feature development.

## Important Decisions or Announcements

- [@kushti khushi, msg#36830, 2025-11-13]: Testnet restart confirmed if emission contract needed; asked for list of testnet users to coordinate.
- [@kushti khushi, msg#36852, 2025-11-15]: Will launch devnet with 6.0 and Autolykos v2 activated from block 1; public testnet to follow.
- [@qx(), msg#36855–36856, 2025-11-16]: New LITHOS_NET testnet live; node operators instructed to wipe DB, update peers (128.253.41.110:9020, 213.239.193.208:9023), and build from PR #2252.
- [@C B, msg#36824, 2025-11-12]: Explorer-Backend PR #260 approved; PR #261 and Sigmastate-Interpreter PR #1086 ready for review.
- [@DiscordBridge (Cheese Enthusiast), msg#36844, 2025-11-14]: Testnet requirements: 6.0 support, 1–2 min block times, Autolykos v2 early activation, no reemission initially.

## Technical Q&A Worth Preserving

- **Q** (@Cheese Enthusiast): Testnet emission contract out of ERG; blocks filling with junk. Can we restart from scratch?
  **A** (@kushti khushi, msg#36830): Yes, restart recommended if emission needed. Current testnet has no reemission params. Asked for list of active testnet users.

- **Q** (@Michael, msg#36826): Any special env/config for explorer frontend? USD Oracle v2 addition caused Vercel errors weeks ago.
  **A**: No response recorded; flagged as unresolved.

- **Q** (@qx(), msg#36840): What does testnet restart involve?
  **A** (@kushti khushi, msg#36841): Starting new chain from scratch; latest releases allow starting at 5.0 or 6.0 immediately.

- **Q** (@Cheese Enthusiast, msg#36854): How would LLM inference work across miners in Lithos context? How does NIPoPoWs' "goodness" translate to LLM work?
  **A**: Not answered; Cheese acknowledged need for more explanation.

## Links Shared

- [https://github.com/ergoplatform/ergo-wallet-app/pull/188]: Android Ergo Wallet version update (under review).
- [https://github.com/ergoplatform/explorer-backend/pull/260]: Explorer-Backend README update (approved).
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1086]: Sigmastate-Interpreter PR (ready for review).
- [https://github.com/ergoplatform/explorer-frontend/pull/198]: Explorer frontend fix by chris45new.
- [https://github.com/rosen-bridge/{utils,scanner,rosen-chains,health-check,ui,watcher,guard-service}/pull/*]: Handshake (HNS) support PRs by @AcoSmrkas.
- [https://defillama.com/protocol/rosen-bridge]: Rosen Bridge on DefiLlama (updated with Doge mapping).
- [https://github.com/ergoplatform/ergo/pull/2252]: LITHOS_NET testnet JAR build branch.
- [https://testnet.ergoplatform.com/]: Testnet block explorer (updated to LITHOS_NET).
- [https://testnet.sigmaexplorer.org/]: Alternative testnet explorer (also synced to LITHOS_NET).
- [https://github.com/networkspore/NoteDaemon]: Secure IO daemon for Netnotes v1 (C++, Linux; prevents key loggers via kernel-level USB access).

## Unresolved Questions

- Explorer frontend Vercel deployment issue with USD Oracle v2 additions (@Michael, msg#36826) — no response provided.
- Lithos Protocol & LLM inference translation to NIPoPoWs "goodness" concept (@Cheese Enthusiast, msg#36854) — flagged as requiring more explanation but not answered.
- Exact config/setup procedure for LITHOS_NET testnet nodes — @TheStophe catching up; @qx() offering support but detailed docs not shared.

---

**Chat Activity Level**: Moderate; focused on testnet infrastructure, protocol development (6.0, Autolykos v2, sub-blocks), and cross-ecosystem integrations (Rosen, Handshake, DuckPools). Primarily technical coordination with minimal off-topic noise.