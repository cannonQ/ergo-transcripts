---
title: "Ergo General Chat — 2025-W15"
date_start: "2025-04-07"
date_end: "2025-04-13"
type: telegram_weekly
channel: general
week: "2025-W15"
source: telegram
message_count: 168
categories: [bridges, technical, defi, wallet, community, ecosystem, marketing]
key_terms: [NFT bridge, cross-chain, Cardano, Mew Finance, DiscoSolaris, v6.0.0-RC4, reference client, mainnet, protocol upgrade, Rosen Bridge, watcher-service, v4.1.3, PALM, SOCKZ, oracle, multiple instances, SigEUR, stablecoin, Ledger, app-ergo]
---
# Ergo General Chat — 2025-W15 Summary

## Key Topics Discussed

- **Rosen Bridge NFT Cross-Chain Integration**: MewFinance launched a seamless 2-way NFT bridge connecting Cardano and Ergo ecosystems, with DiscoSolaris as the initial partner collection. Bridge functionality now live at bridge.mewfinance.com.

- **Ergo Node 6.0.0-RC4 Release**: Reference client RC4 released and usable on mainnet, though voting details not yet finalized and further changes expected toward final 6.0 release.

- **Watcher Service 4.1.3 Update**: Critical update request for Rosen Bridge Watcher operators, adding support for PALM and SOCKZ tokens. Docker image pull and service restart required.

- **Multiple Oracle Instance Architecture**: Post-wallet-dependency removal, Oracle Pool infrastructure can now run multiple instances against the same node, with potential for multiple wallet support and data point reporting expansion.

- **Layer 2 and Speed Improvement Proposals**: Community discussion of potential sub-blocks, faster block times, and throughput improvements; consensus that concrete use-case analysis needed before optimization path selection.

- **MewMart Token Exploration**: Token query filtering by ID now available on MewMart; Ergo Explorer integration shows token listing status.

- **Ledger Hardware Wallet Integration**: Final change requested by Ledger before official Ergo app release has been merged; Keystone firmware team progressing on cypherpunk version including Ergo support.

- **SigmaUSD Multi-Currency Discussion**: Community inquiry about SigmaEUR launch possibility for MewMart online store use cases; Richi indicated oracle instances typically require dedicated coins (GORT, DORT, SORT pattern).

- **ChainCash Documentation**: Updated ChainCash paper published on GitHub with finalized specification.

## Important Decisions or Announcements

- [@kushti_ru, msg#553935, 2025-04-11]: Watcher operators requested to update watcher-service to version 4.1.3 immediately; docker compose commands provided for both new and old versions.

- [@Ergo NEWS $ERG, msg#553763, 2025-04-09]: Ergo 6.0.0-RC4 released and mainnet-usable; Ergo Basic Template published as modular React foundation for dApp development; new Layer 2 scheme and BtcFi insurance scheme published on Ergoforum.

- [@HQΣr, msg#553662, 2025-04-08]: MewMart token statistics dashboard deployed; DiscoSolaris NFT offers now live with community creation enabled.

- [@kushti_ru, msg#554141, 2025-04-13]: Urgent update request for Watcher operators before UI upgrade; rsPalm rewards dependent on current version compliance.

- [@Pgr456, msg#553988, 2025-04-12]: New Oracle setup enables running multiple Oracle instances against same node (wallet dependency removed).

## Technical Q&A Worth Preserving

- **Q** (@LIFΣ OF IF₳, msg#553837): Can I run a full node on Ergo by installing Satergo and selecting full node option, or must I use the setup guide for paired Rosen Watcher operation?
  **A** (@HQΣr, msg#553838): Yes, you can use Satergo's full node option.

- **Q** (@cannon_q, msg#553995): With current Oracle setup, can only one data point be reported per oracle type? Is there opportunity for vector reporting?
  **A** (@Pgr456, msg#554015): Currently one data point per oracle type; unsure if vector approach is possible.

- **Q** (@HQΣr, msg#553982): Can we run multiple Oracle instances from the same setup?
  **A** (@Moein Zargarzadeh, msg#554052): After node wallet dependency removal, multiple oracle instances can run easily with same node. (@Pgr456, msg#553988): New setup supports multiple oracles against same node; mapping with multiple wallets per oracle feasible.

- **Q** (@Giufa OnliאΣ, msg#553978): Would SigmaUSD-style stablecoin in EUR (SigmaEUR) be viable for MewMart online store use?
  **A** (@Richi [MANA], msg#553983): Each oracle typically requires dedicated coin; historical pattern: GORT, DORT, SORT. (@Pgr456): Multiple mapping approach could allow same infrastructure with different wallet/pool configurations.

## Links Shared

- [https://bridge.mewfinance.com]: MewFinance 2-way cross-chain NFT bridge (Cardano ↔ Ergo)
- [https://mart.mewfinance.com/explore]: MewMart token explorer with collection statistics and offer creation
- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC4]: Ergo Node 6.0.0-RC4 release
- [https://github.com/ERGnomes/ergo-basic-template]: Ergo Basic Template — modular React dApp foundation
- [https://www.ergoforum.org/t/offchain-money-with-free-creation-but-limited-redemption/5122]: Layer 2 scheme proposal (off-chain money with limited redemption)
- [https://www.ergoforum.org/t/insuring-bitcoin-on-ramp-with-ergo-contracts/5121]: BtcFi insurance via Ergo contracts
- [https://medium.com/@themewfinance/mew-finance-quarterly-business-update-q1-2025-f864bb9b9454]: MewFinance Q1 2025 report
- [https://github.com/kushti/ergo-book/blob/master/Ideological%20Background/The%20Money%20Game%3A%20Rewriting%20the%20Rules%20with%20Cryptocurrency]: ErgoBook article by Armeanio: "The Money Game: Rewriting the Rules with Cryptocurrency"
- [https://github.com/ChainCashLabs/chaincash/blob/master/docs/conf/conf.pdf]: ChainCash updated specification paper
- [https://github.com/arkadianet/ergo-vanitygen-rust]: Ergo Vanity Address Generator (updated)
- [https://github.com/KeystoneHQ/keystone3-firmware/pull/1676]: Keystone firmware Ergo integration progress
- [https://github.com/skyharbor-market/frontend-skyharbor-ts]: SkyHarbor v2 frontend (open source)
- [https://github.com/LedgerHQ/app-ergo/pull/12#event-17186403649]: Ledger Ergo app final changes (merged)
- [https://youtube.com/live/lLpcD9MX2TU]: Weekly Update and AMA (2025-04-10, 13:00 UTC)
- [https://deco-education.github.io/deco-docs/docs/intro]: DECO documentation (education resources)
- [https://discord.com/channels/944916819133759539/1360873606543970454]: DeCo Colchis Discord channel
- [https://x.com/Haskell_plus/status/1911317896640225487]: DeCo Colchis ideation meeting announcement (Twitter/X)

## Unresolved Questions

- **Ergo Binance Listing**: Community members asked "Wen Binance?" with no response from foundation or team members (msg#554149).

- **DECO Video Archives**: YouTube channel containing DECO educational videos was deleted/nuked; recovery possibility unclear. Documentation exists but video content status unresolved (msg#554163, msg#554500).

- **NightOwl Project Status**: User inquired "What happened to NightOwl?" (msg#554025) — no response provided; project appears dormant or abandoned.

- **Sub-blocks vs. Alternative Speed Improvements**: kushti raised discussion of potential approaches (sub-blocks, faster confirmations, sidechains, layer 2) but noted concrete use-case analysis needed before committing to optimization path; path selection still TBD.

- **Block Time Dependencies in Contracts**: kushti noted difficulty in assessing dApps that rely on block height vs. timestamp; impact of faster blocks on existing contracts not fully mapped.

---

**Summary Notes:**
- Week was moderately active with infrastructure updates, product launches, and forward-looking technical discussions
- Primary focus: Rosen Bridge ecosystem expansion, Node 6.0 maturation, and Oracle architecture improvements
- Community health: Engaged on technical questions; some organizational/archival gaps (DECO video loss)