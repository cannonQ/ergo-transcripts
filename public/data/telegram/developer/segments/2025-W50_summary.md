---
title: "Ergo Developer Chat — 2025-W50"
date_start: "2025-12-08"
date_end: "2025-12-14"
type: telegram_weekly
channel: developer
week: "2025-W50"
source: telegram
message_count: 76
categories: [wallet, technical, bridges, ecosystem, defi, research]
key_terms: ["PR#188", "PR#183", "PR#182", release candidate, wallet-app, sub-blocks, Matrix protocol, devnet, input/ordering blocks, deployment scenario, 6.0.2 release, PR review, node implementation, protocol updates, LSP, ErgoScript, language server, code checker, IDE support, Rosen Bridge]
---
# Ergo Developer Chat Summary — 2025-W50

## Key Topics Discussed

- **Sub-blocks (Matrix Protocol)**: kushti deployed latest version to seed devnet, expanded test coverage for pruning, and published deployment strategy involving gradual miner adoption with lock-in voting at 90%+ hashrate support. Whitepaper release expected soon pending travel.

- **Ergo 6.0.2 Release**: Multiple PRs (#2244, #2247, #2252, #2253, #2250, #2255) submitted for review targeting 2025 release, with 6.0.2 finalization planned after PR merges.

- **Rosen Bridge Expansion**: Base chain integration research underway; on-chain token map feature integrated with UI; new support for unbridgeable tokens architecture; guard service updated for multiple bridge fee destinations and sign status pulling; watcher service v6.0.2 and guard service v8.1.0 released with USE and NIGHT token support.

- **Ergo-Wallet**: PR #188 by Superellipse reviewed and approved; release candidate to be created. PRs #182 and #183 queued for later merge if no conflicts arise.

- **Explorer Infrastructure**: Current Hetzner cost ~$725/month; plan to consolidate to two high-performance machines (64 threads, 128GB RAM at cornell.edu and 48-thread AMD Threadripper, 128GB RAM for community node) with p2p infra as fallback. Proposal to whitelist main explorer APIs for major users vs. letting natural load distribution occur.

- **Language Server Protocol (LSP) for ErgoScript**: Multiple developers (anon_br, mgPai) have long-standing interest. anon_br investigating native ErgoScript checker from sigmastate-interpreter without JVM dependency; debug functions and code coverage tooling identified as future needs.

- **Game of Prompts Contracts**: Josemi fixing and adding tests; discussion ongoing about ERG wrapper usage for contract simplification.

- **DuckPools v2**: Quote contract and interest rate contract templates with documentation released; v2 token test pool going live with multi-collateral borrowing support; smart reserves documentation and UI deferred due to multi-asset complexity.

- **Crux Finance**: Backend created for token-to-ERG swap pricing; direct pool interaction chosen over proxy model for transparency and UX; swap component on token pages in progress.

- **USE Stablecoin**: Offchain bots deployed; LP implementation in progress (pgr456); full-fledged USE implementation being added to current DexyGold (c8).

- **Basis/ChainCash**: Paper presentation scheduled for First Stability Workshop on Monday; tracker box functionality testing and config updates ongoing.

- **Degens.World**: Context.md created for LLM/agent contract auditing with testing underway; MemeVSMeme Comet meme contest launched; Xergon integrating LM Studio for local model inference on cloud nodes (currently 5 CPU models, GPU expansion planned).

- **Unstoppable Hackathon**: kushti submitted Silvercents, LSP for ErgoScript, private offchain cash research (Basis), and other ideas; additional proposals solicited.

- **GitCircles**: Wish You Balance still featured on website and promo materials; Bro Etiket vibe-coding Ergo integration bit-by-bit; help needed on transactions documentation.

- **Rust Chain & Gaming**: AutoJanitor deployed 3 nodes and multiple miners; forked Xonotic FPS with AI-designed levels using Claude/Sophia via MCP; custom Halo-style physics and SDK added; in-game advertising for projects planned.

- **FAKU Payouts**: Not Jumei experimenting with FAKU payouts in Half-Life 2: Deathmatch; FAKU website v2 ~80% complete.

- **Blockly No-Code Tool**: Next iteration started by c8 and hackathon team.

## Important Decisions or Announcements

- [@kushti, msg#37406, 2025-12-10]: Sub-blocks deployment plan finalized — gradual miner adoption phase followed by lock-in voting at 90%+ hashrate threshold.

- [@kushti, msg#37403, 2025-12-10]: Ergo 6.0.2 release targeted for 2025; six PRs flagged for review and merge.

- [@kushti, msg#37409, 2025-12-10]: Ergo-Wallet PR #188 approved; release candidate to be created.

- [@kushti, msg#37381, 2025-12-08]: Unstoppable Hackathon (hackathon.stability.nexus/) soliciting Ergo-related issues and bounties; kushti submitted initial proposals.

- [@qx(), msg#37429, 2025-12-12]: Explorer infrastructure consolidation plan announced; seeking feedback on whitelisting main explorer APIs vs. natural load distribution.

- [@cannon_q, msg#37427, 2025-12-12]: DuckPools v2 token test pool going live tomorrow with multi-collateral borrowing; quote and interest rate contract templates released on GitHub.

## Technical Q&A Worth Preserving

- **Q** (@kushti, msg#37396): Does anyone have experience with LSP (Language Server Provider)? Feasible to mostly write one these days for ErgoScript?
  **A** (@anon_br, msg#37397): On my todo list long-term. Do you think it's feasible to have an ErgoScript checker from sigmastate-interpreter natively built so we don't need JVM? Also, debug function instrumentation and code coverage tool would be amazing.

- **Q** (@anon_br, msg#37397): Is native ErgoScript checking from sigmastate-interpreter possible without JVM?
  **A** (implied interest from @mgPai, msg#37398-#37400): mgPai was looking into it ~2 years ago, attempting to copy approach from Aiken. Confirmed active research area.

- **Q** (@Josemi, msg#37425): Opinions about using an ERG wrapper? (with forum link to contract simplification discussion)
  **A** (no direct response in segment; flagged as ongoing discussion on ergoforum)

- **Q** (@qx(), msg#37429): Should we whitelist main explorer APIs for CEX and major users, or let nature take its course with load distribution?
  **A** (posed to community, seeking feedback; no resolution in segment)

## Links Shared

- [hackathon.stability.nexus/]: Unstoppable Hackathon platform; kushti submitted Silvercents, LSP for ErgoScript, and Basis/private offchain cash proposals.

- [github.com/ergoplatform/ergo-wallet-app/pull/188]: Ergo-Wallet PR approved by kushti, going into release candidate.

- [github.com/ergoplatform/ergo/pull/2244, #2247, #2252, #2253, #2250, #2255]: Six PRs for Ergo 6.0.2 release targeting 2025.

- [github.com/ergoplatform/ergo_avltree_rust/issues/7]: AVL tree issue with bounty attached for Unstoppable Hackathon participants.

- [claude.com/blog/skills]: Claude projects folder for organizing LLM-based workflows; kushti suggested creating Ergo contract audit skill.

- [github.com/duckpools/logic-contracts]: DuckPools v2 quote contract template and documentation.

- [github.com/duckpools/interest-contracts]: DuckPools v2 interest rate contract template and documentation.

- [ergoforum.aap.cornell.edu/t/simplifying-game-of-prompts-contracts-why-not-use-only-tokens/5293]: Forum discussion on Game of Prompts contract simplification using ERG wrapper.

- [ergexplorer.com/addressbook]: Known Ergo address book (exchanges, pools, etc.).

- [213.239.193.208:9058/info]: Sub-blocks devnet node deployed by kushti for public testing.

- [ergo.aap.cornell.edu]: High-performance explorer (64 threads, 128GB RAM) planned as primary machine for large queries.

- [testnet.ergoplatform.com]: Testnet transaction lookup (used for distributing testnet ERG).

## Unresolved Questions

- **LSP for ErgoScript**: Feasibility and approach still under research; native sigmastate-interpreter integration vs. JVM dependency trade-offs not finalized.

- **Explorer Infrastructure Whitelist Policy**: Decision pending on whether to formally whitelist main explorer APIs for CEX/major users or allow organic load distribution; feedback solicited from community.

- **DuckPools Smart Reserves Documentation**: Deferred due to multi-asset support complexity; timeline not committed.

- **Game of Prompts ERG Wrapper**: Forum discussion ongoing; no consensus reached on contract simplification approach.

- **Debug & Code Coverage for ErgoScript**: Identified as future need by anon_br; no timeline or champion assigned.

- **Crux Finance UX with Sub-blocks**: Referenced as improved UX expected "once sub-blocks are live" but no specific feature dependencies articulated.