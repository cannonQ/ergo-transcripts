---
title: "Ergo General Chat — 2024-W24"
date_start: "2024-06-10"
date_end: "2024-06-16"
type: telegram_weekly
channel: general
week: "2024-W24"
source: telegram
message_count: 0
categories: [bridges, wallet, ecosystem, governance, community, defi, technical, marketing]
key_terms: [rsBTC, BTC bridge, Rosen Bridge, guard service, watcher update, Ledger, dev mode, audit, app-ergo, three-year integration, Gluon Gold SDK, raffle, ErgoScript SDK, funding, blocklist, flagging, ergexplorer, YAML repository, NFT content filter, ErgoHack VIII]
---
# Ergo General Chat — 2024-W24 Summary

## Key Topics Discussed

- **Ledger Integration Progress**: Ledger app for Ergo has completed requested audit changes and is pending final audit approval before moving out of dev mode after ~3 years of development [@Glasgow｜WON'T DM, msg#496478, 2024-06-10].

- **Rosen Bridge Bitcoin Support Launch**: The Bitcoin-to-Ergo/Cardano bridge went live with UI support launching Friday, June 14. Watcher operators required to update to version 3.0.0 by June 18 UTC deadline or risk losing permits [@CW, msg#496833, 2024-06-12].

- **Token Blacklist/Whitelist System**: Community-flagged token blocklist implemented via Ergo Explorer with 10-report threshold for flagging. Manual GitHub pull requests also accepted for speed [@qx(), msg#496619-621, 2024-06-11; @Aco Šmrkas, msg#496622-624, 2024-06-11].

- **Gluon Gold SDK Raffle**: Raffle for Gluon Gold SDK development successfully funded 100.32% by 36 contributors (4645 ERG raised) [@kushti khushi, msg#496409-411, 2024-06-10].

- **ErgoHack VIII Community Voting**: Paideia DAO voting open for community reward distribution (18k SigmaUSD, 100k RSN, 7k+ community ERG). DuckPools leading in votes. Votes changeable until deadline [@qx(), msg#496869, 2024-06-13; msg#496984-988, 2024-06-13].

- **Speed Improvements & Consensus Parameters Discussion**: Multi-block (sub-blocks) and sidechain options discussed for throughput. Testnet 6.0 being prepared for parameter tweaking (block time, difficulty). No final decision made on implementation path [@kushti khushi, discussion in msgs#496794+, 2024-06-12].

- **Order Book DEX Design**: Trade House exemplifies order book model vs. AMM pools—allows transparent depth, full slippage control, partial fills, peer-to-peer trading with execution conditions [@qx(), extended discussion msg#496825+, 2024-06-12].

- **SigmaUSD & Stability Mechanisms**: Discussion of leverage/shorting games and options-based structures using SigmaUSD for price discovery during downturns. Kushti raised possibility of auction-based liquidity pools for low-liquidity assets [@Saphuza, @kushti khushi, msgs#496779-795, 2024-06-12].

- **Merge-Mined Sidechains**: Sidechain construction designs being finalized. Emission contracts reward mainchain miners for delivering sidechain data. Trustless pegging via smart contracts. BIP-301 reference discussed [@kushti khushi, extended Q&A, 2024-06-11 timestamp in earlier context].

- **Quantum Security Considerations**: Discussion of quantum computer preimage attacks on p2pkh addresses. Consensus that unused p2pkh poses minimal risk; possibility of quantum-proof Ergo sidechain as "insurance policy" [@Rj, @qx(), @kushti khushi, msgs#497067-072, 2024-06-14].

## Important Decisions or Announcements

- [@kushti khushi, msg#496551, 2024-06-11]: **Watcher Service Breaking Change** — All watcher operators must update to version 3.0.0 and UI to 2.2.0 by June 18, 12 AM UTC. Older versions will no longer be supported; permits may be considered fraudulent if not updated.

- [@CW, msg#496833, 2024-06-12]: **Bitcoin Bridge UI Live Friday** — Rosen Bridge UI supporting Bitcoin transfers confirmed live on Friday, June 14 after test transfers complete.

- [@kushti khushi, msg#496782, 2024-06-12]: **Stability Mechanisms Inquiry** — Kushti asked about SigmaUSD's role and suggested options protocols as potential solutions for price discovery during bear markets.

- [@qx(), msg#496869, 2024-06-13]: **ErgoHack VIII Voting** — Community can vote on funded projects on Paideia DAO to distribute 18k SigmaUSD + 100k RSN + 7k+ ERG in community rewards.

- [@Armeanio, msg#496559, 2024-06-11]: **Palmyra Video Announced** — Zengate (Palmyra) video coming to Armeanio's Twitter soon.

- [@kushti khushi, msg#496794, 2024-06-12]: **DeFi Summit Proposed** — Kushti suggested organizing a degenfi summit ~2 months after Ergoversary.

## Technical Q&A Worth Preserving

- **Q** (@boy, msg#496528-540, 2024-06-11): Which APK to download for Ergo Mobile cold wallet setup? Latest GitHub version appears debug-only and larger than expected.
  **A** (@Glasgow｜WON'T DM, msg#496543, 2024-06-11): Use previous stable release unless needing Indonesian translation support.

- **Q** (@kii, msg#496972, 2024-06-13): Do I need Paideia token to use Paideia DAO? Cannot stake with DAO token alone.
  **A** (@unknown responder, msg#496979): [Answer inferred but not explicitly shown in log].

- **Q** (@unknown, msg#496518-519, 2024-06-11): What is transaction 4c45a75c... on Ergo Explorer showing token activity?
  **A** (@HQΣr, msg#496527, 2024-06-11): Token not yet launched but minted on-chain.

- **Q** (@unknown, msg#496625-628, 2024-06-11): Does Rustinmyeye's script overwrite or append to blocklist YAML?
  **A** (@rustinmyeye, msg#496634, 2024-06-11): Script not recently run; will be changed to append new entries from ErgoExplorer while preserving manual entries.

- **Q** (@Daskre, msg#496636, 2024-06-11): Why do blocks from hqGm miner show repeated identical timestamps?
  **A** (@kushti khushi, msg#496637, 2024-06-11): Likely server time desynchronization; mining pools typically use NTP. If first miner used future timestamp, others add milliseconds to match.

- **Q** (@qx(), msg#496900-901, 2024-06-13): Spectrum Bot showing "PWS not set" warning. How to configure?
  **A** (@qx(), msg#496901-906, 2024-06-13): See docs at https://docs.spectrum.fi/docs/user-guides/advanced/setup-ergo-bots/. Must set mnemonic (wallet seed) and node URI in config.env. Localhost may not work in Docker; use LAN IP instead.

- **Q** (@Saphuza, msg#496718-719, 2024-06-11): Would airdropping to 100k token holders break UTXO utilities? Does it apply to all tokens or just one?
  **A** [Unresolved in chat — flagged but not answered definitively].

- **Q** (@Alex, msg#497272, 2024-06-16): In one sentence, what is Ergo's vision? Short-term target? Why conservative marketing?
  **A** (@qx(), msg#497298, 2024-06-16): Vision = "smart money (eUTXO) built with true resiliency (PoW) creating unstoppable financial tooling for anybody." Short-term goal = create real system/store of value. Target = those suffering inflation/corruption (not speculators). Marketing focuses on tools & base-layer adoption via projects/teams, not influencer hype. Success of adoption goals = price appreciation.

## Links Shared

- [https://github.com/rosen-bridge/guard-service/releases/tag/3.0.0]: Rosen Guard Service 3.0.0 release notes [@kushti khushi, msg#496418, 2024-06-10].

- [https://github.com/rosen-bridge/watcher/releases/tag/3.0.0]: Rosen Watcher 3.0.0 with breaking changes, Bitcoin network support, RPC scanner integration [@kushti khushi, msg#496551, 2024-06-11].

- [https://github.com/rosen-bridge/ui/releases/tag/watcher-app-2.2.0]: Watcher UI 2.2.0 [@kushti khushi, msg#496551, 2024-06-11].

- [https://github.com/LedgerHQ/app-ergo/pull/11]: Ledger Ergo app pull request in review [@Glasgow｜WON'T DM, msg#496434, 2024-06-10].

- [https://sigmanauts.com/podcast/]: Sigmanauts podcast with weekly AMA recordings [@unknown, msg#496889, 2024-06-13].

- [https://sigmaverse.io/all-projects/?category=dApps]: Comprehensive Ergo dApps ecosystem list [@qx(), msg#496742, 2024-06-12].

- [https://docs.spectrum.fi/docs/user-guides/advanced/setup-ergo-bots/]: Spectrum bot setup guide with config.env requirements [@qx(), msg#496901, 2024-06-13].

- [https://dao.duckpools.io/ido]: DuckPools Phase 2 sale (QUACKS token, $0.0193 USD, 6-month vesting) [@Σddie Lin, msg#496509, 2024-06-10].

- [https://t.me/ErgoDevelopers]: Weekly Ergo Developers chat (Wednesdays, 1 PM UTC) [@kushti khushi, msg#496549-550, 2024-06-11].

- [https://curiaregiscrypto.medium.com/cryptocurrencies-permissionless-and-open-source-monetary-systems-b89f28da0346]: Armeanio's essay on permissionless crypto systems [@Armeanio, msg#497283, 2024-06-16].

- [https://x.com/Sigmanauts/status/1800714668924908012]: ErgoHack VIII community voting announcement [@qx(), msg#496720, 2024-06-11; @qx(), msg#496984, 2024-06-13].

- [https://ergexplorer.com]: Ergo Explorer for transaction lookup, token blacklist flagging [@HQΣr, msg#496677, 2024-06-11].

- [https://dex.crooks-fi.com/ergo/swap?...]: CrooksFi DEX rsBTC/ERG pool (live post-launch) [@HQΣr, msg#497144, 2024-06-15].

## Unresolved Questions

- **Airdrop Token Mechanics**: Does airdropping to 100k holders apply to all tokens or only one specific token? Utility impact unclear [@Saphuza, msg#496718-719, 2024-06-11].

- **Palmyra Token Launch Timeline**: User asked "When $PALM token?" — no confirmed date provided [@Bye H8er, msg#496709, 2024-06-11].

- **Uniswap Integration for rsBTC**: User asked "Uniswap wen?" — Kushti stated he has not been in talks with Rosen team for weeks [@Mewbie, @kushti khushi, msgs#497141-142, 2024-06-15].

- **Auction House Code Quality**: HQΣr described Auction House code as "spaghetti," but no timeline for refactoring mentioned [@HQΣr, msg#497273, 2024-06-16].

- **Sub-block Implementation Path**: Discussion of faster blocks, sub-blocks (microblocks), and sidechains for throughput — no consensus reached on which path to prioritize [@kushti khushi, msgs#496794+, 2024-06-12].

- **Speed Improvements Testnet**: Kushti invited volunteers to run testnet 6.0 with parameter tweaks, but no formal launch date given [@kushti khushi, msg#496794+, 2024-06-12].