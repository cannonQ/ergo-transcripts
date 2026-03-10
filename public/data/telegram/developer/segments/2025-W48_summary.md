---
title: "Ergo Developer Chat — 2025-W48"
date_start: "2025-11-24"
date_end: "2025-11-30"
type: telegram_weekly
channel: developer
week: "2025-W48"
source: telegram
message_count: 128
categories: [wallet, technical, bridges, marketing, defi, ecosystem, community]
key_terms: [ergo-wallet-app, pull requests, compilation issues, testing, gradle, JVM, ErgoScript, AI agents, context management, security issues, LLM instruction, Celaut, NiPoPoW, blockchain verification, trustless design, service isolation, explorer-backend, circulating supply, reemission, database sync]
---
# Ergo Developer Chat Summary — 2025-W48

## Key Topics Discussed

- **Sub-blocks implementation**: kushti testing improved rollbacks processing in sub-blocks locally with two mining peers; whitepaper in progress [@kushti khushi, msg#37254, 2025-11-26]

- **NIPoPoWs for offline verification**: Discussion on using NIPoPoWs for trustless verification without internet connection (e.g., coconut shop payment verification scenario); consensus that NIPoPoW proofs can work with sufficient confirmations and work difficulty checks [@Josemi, @kushti khushi, msg#37216, 2025-11-26]

- **Celaut service trust model**: Clarification that Celaut services cannot rely on external interactions for pay-per-use models because the hosting node could simulate the entire network; proposed solution using mined block verification with random seed [@kushti khushi, msg#37184-37185, 2025-11-24]

- **Ergo Explorer supply discrepancy**: Local explorer showing different circulating supply than mainnet API; identified as reemission/emission proxy accounting issue, resolved by using latest explorer version [@Sheetoshi, @Michael, msg#37209-37212, 2025-11-25]

- **AI agent context management for ErgoScript**: Discussion on providing LLM agents with proper security context and instruction—simple markdown files insufficient; need registry of examples, security guidelines, and explicit instructions to prevent web searches injecting malicious code [@kushti khushi, @Arohbe, msg#37175-37181, 2025-11-24]

- **Dexy stablecoin configuration**: New oracle data normalization and payout parameters for USE deployment; 1200% overcollateralization requirement and 0.1% weekly payment max [@kushti khushi, msg#37282, 2025-11-29]

- **Explorer backend bounties**: Open issues seeking contributors: #264 (bounties support) and #263; also ErgoDex Dexy pool integration bounty planned [@kushti khushi, msg#37233, 2025-11-26]

- **Rosen Bridge watcher update**: Users instructed to update watchers; Rosen requires 60%+1 consensus on each network to update [@kushti khushi, msg#37189, 2025-11-25]

- **Basis/ChainCash development**: Finishing tracker box update and starting redemption tests; planning remote area trading test without internet using mesh networks [@kushti khushi, msg#37257, 2025-11-26]

## Important Decisions or Announcements

- [@kushti khushi, msg#37208, 2025-11-25]: Weekly developer chat scheduled for 7 PM UTC starting 2025-11-26

- [@kushti khushi, msg#37189, 2025-11-25]: Rosen Bridge requires updating watchers; 60%+1 consensus needed per network

- [@kushti khushi, msg#37235, 2025-11-26]: Bounty assigned for ergo-wallet-app issue #189

- [@kushti khushi, msg#37282, 2025-11-29]: Dexy configuration changes published for USE deployment with updated oracle normalization and payout parameters

- [@Michael, msg#37250, 2025-11-26]: Gluon.gold wallet connection fix and UI improvements completed; CruxFinance added trending/gainers/losers functionality

- [@Pgr456, msg#37263, 2025-11-26]: Provided DORT token data for USE deployment (pool NFT, oracle token ID, LP NFT)

- [@ArØhβΣ @Arohbe, msg#37267, 2025-11-26]: Degens.World launched API Explorer and Node Explorer; working on "Xergon" decentralized proof-of-node-work network for AI compute

## Technical Q&A Worth Preserving

- **Q** (@Sheetoshi): Why does local explorer show 93B ERG supply vs 82B on mainnet?
  **A** (@Michael, @Michael): Difference due to reemission and emission proxy accounting; supply should be "minus reemission and emission proxy" [@msg#37209-37211, 2025-11-25]

- **Q** (@Sheetoshi): Is this a version issue?
  **A** (@kushti khushi): Confirms need to use latest explorer version (9.17.4+) [@msg#37215, 2025-11-26]

- **Q** (@Josemi): Can NIPoPoWs verify transactions without a trusted node?
  **A** (@kushti khushi): Yes; use NIPoPoW with minimum work amount (from mainnet) plus sufficient confirmations; proofs can be printed on paper [@msg#37187, 2025-11-24]

- **Q** (@Josemi): Is there a library to validate NIPoPoWs?
  **A** (@kushti khushi): Use sigma-rust or Ergo core (JVM side) [@msg#37243, 2025-11-26]

- **Q** (@ArØhβΣ): How to manage LLM context for ErgoScript safely?
  **A** (@kushti khushi, @Arohbe): Create dedicated repo with master agent.md directory structure; add explicit instructions like "only use details within agent files, notify user if not found" to prevent web searches [@msg#37180-37181, 2025-11-24]

- **Q** (@C B): Should I separate mixed changes in PR #261?
  **A** (@Pgr456): Yes, split into separate PRs; currently schema/doc changes are in indexing issue PR but should be split by related issue [@msg#37253-37255, 2025-11-26]

- **Q** (@Pgr456): How to persist AVL+ trees on disk?
  **A** (@kushti khushi): Created bounty issue; dusek consulted [@msg#37258, 2025-11-26]

## Links Shared

- [https://github.com/ergoplatform/ergo/actions/runs/19602203144/job/56210992254]: Compilation issues flagged for fix [@msg#37146, 2025-11-24]

- [https://github.com/ergoplatform/ergo-wallet-app/pull/188]: PR awaiting testing [@msg#37147, 2025-11-24]

- [https://github.com/ergoplatform/ergo-wallet-app/pull/183, #182]: Wallet app PRs requiring testing [@msg#37148, 2025-11-24]

- [https://github.com/anon-real/sigma-usd/pull/71]: SigmaUSD PR requiring review [@msg#37150, 2025-11-24; msg#37229, 2025-11-26]

- [https://github.com/ErgoDevs/Ergo-Bounties]: Open source bounties directory [@msg#37197, 2025-11-24]

- [https://app.rosen.tech/events/43acfb9f8b44abe197d5e01e2f3724195d047fd15df22878fc4502669e70c436]: Rosen Bridge event page with null reference error (fixed in next version) [@msg#37205-37206, 2025-11-25]

- [https://www.ergoforum.org/t/e-mail-client-for-limited-or-blocked-internet/134]: Forum post on offline blockchain verification (related to NIPoPoW discussion) [@msg#37216, 2025-11-26]

- [https://github.com/ergoplatform/explorer-backend/pull/256, #261]: Explorer backend PRs for reemission/emission indexing [@msg#37230, 2025-11-26]

- [https://github.com/ergoplatform/explorer-backend/issues/264, #263]: Open bounty issues for bounties support and schema improvements [@msg#37233, 2025-11-26]

- [https://github.com/ergoplatform/ergo-wallet-app/issues/189]: Wallet app bounty issue assigned [@msg#37235, 2025-11-26]

- [https://www.coingecko.com/en/coins/ergo]: Ergo page updated with explorer and YouTube channel links [@msg#37241, 2025-11-26]

- [https://github.com/ergoplatform/explorer-frontend/pull/198]: Explorer frontend PR adding Javanese language support [@msg#37227, 2025-11-26]

- [https://gluon.gold]: Gluon Gold dApp with wallet connection and UI fixes [@msg#37250, 2025-11-26]

- [https://cruxfinance.io]: CruxFinance with trending/gainers/losers functionality [@msg#37250, 2025-11-26]

- [https://ergonexus.degens.world/]: API Explorer launched [@msg#37267, 2025-11-26]

- [https://ergonodeexplorer.degens.world/]: Node Explorer launched [@msg#37267, 2025-11-26]

- [https://github.com/ArOhBeK/Xergon-Network]: Xergon decentralized proof-of-node-work network for AI compute [@msg#37267, 2025-11-26]

- [https://github.com/kushti/dexy-stable/pull/5]: Dexy configuration changes for USE deployment [@msg#37282, 2025-11-29]

- [https://www.youtube.com/watch?v=oLJG6r4C7PE]: Link shared (context unclear) [@msg#37281, 2025-11-29]

- [https://twitter.com/LADOPIXEL/status/1994822454381089172]: Tweet reference (context unclear) [@msg#37284, 2025-11-30]

## Unresolved Questions

- How to add support for Dexy pools in ErgoDex / proper repo location for bounty (@kushti khushi, @Pgr456) [@msg#37239, 2025-11-26]

- ErgoTree template changes for USE vs DexyGold—need confirmation if pool contract template differs (@Luivatra) [@msg#37285-37289, 2025-11-30]

- Appropriate bounty amount for ErgoDex Dexy integration (500 ERG proposed) [@msg#37283, 2025-11-30]

- Exact root cause of explorer PR #261 issue (Pgr456 noted unrelated changes mixed in) [@msg#37238, 2025-11-26]

- How to add Bahasa Indonesia language support to explorer (@CHRIS45) [@msg#37269, 2025-11-27]