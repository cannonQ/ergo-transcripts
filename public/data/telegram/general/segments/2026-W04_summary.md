---
title: "Ergo General Chat — 2026-W04"
date_start: "2026-01-19"
date_end: "2026-01-25"
type: telegram_weekly
channel: general
week: "2026-W04"
source: telegram
message_count: 168
categories: [technical, defi, ecosystem, bridges, wallet, governance]
key_terms: [app store, direct publish, iOS, mobile wallet, VoltPay, integration, stables, testing, merchandise, mug, transaction, SigUSD, popup issue, Rosen, bridge, Nervos, Firo, cross-chain, USD pricing, backend]
---
# Ergo General Chat — 2026-W04 Summary

## Key Topics Discussed

- **Rosen Bridge integration progress**: USD price integration for all amounts in the Rosen app; backend and design ready, frontend team integrating. Icon support for tokens integrated and under review. Monitoring and alerting system improvements to prevent downtime on events page.

- **Minotaur wallet 3.4.0 release**: Added node support, backend selection between node and explorer, monthly/weekly balance chart periods, and multisig wallet improvements.

- **Explorer infrastructure issues with 6.0 upgrade**: Both EF explorer and Sigmaspace stuck at block 1705794. Root cause: unparseable script outputs (allowed by consensus for soft-fork flexibility, but strict parsers failed). Extra indices also affected. Fix released in v6.0.2.

- **Degens.World ecosystem development**:
  - **LocalDex**: AMM quick deploy, limit orders, arbitrage scanner, batch token purchases, auto-swap, order cancellation
  - **LithosPanel**: Live deployment for node, Lithos client, and miner with direct API sync
  - **Ergo Mobile Wallet**: UI/UX overhaul with dApp browser, swap, chat features; iOS App Store integration strategy TBD
  - **Xergon**: Local AI inference P2P network—beta testers needed

- **Dexy Gold unit-of-measurement discussion**: Community debate over measuring gold in milligrams vs. international troy ounces. Tether Gold uses 1 ounce (31.1035g), creating adoption friction. Proposal to show both unit prices on tracking (CruxFinance) and create redundant smart contracts for troy ounce conversion.

- **ChainCash/Basis use cases**: Proposed applications include paying Rosen Bridge watchers to avoid dusting, developer compensation via trust notes partially backed by reserves, and sybil resistance via web-of-trust for community voting/airdrops.

- **NPM supply chain security concern (Keystone integration)**: Integration adds 160+ transient dependencies from different authors, representing major attack vectors. Team spent 2025 reducing from 120 to ~90; attempting minimal SDK extraction instead.

- **Nervos and Firo coming to Rosen Bridge** (@kushti, msg#588687, 2026-01-21).

## Important Decisions or Announcements

- [@kushti, msg#588776, 2026-01-23]: If you have extra indices enabled on node 6.0, please update to v6.0.2 ([GitHub release](https://github.com/ergoplatform/ergo/releases/tag/v6.0.2))

- [@ArØhβΣ @Arohbe 🍪, msg#588764, 2026-01-22]: **LithosPanel is live** — Deploy node, Lithos client, and miner from one panel with direct API sync ([GitHub repo](https://github.com/Lithos-Protocol/LithosPanel))

- [@kushti, msg#588795, 2026-01-23]: Plan for 6.0.3 node release with multiple PRs queued; requesting community help with reviewing and testing

- [@Armeanio, msg#588831-832, 2026-01-24]: Stance on CEX listings — undisclosed incentives erode credibility, especially for meme tokens that collapse. Transparency is essential.

- [@kushti, msg#588833, 2026-01-24]: Transparency is the key to long-term success; pass this to CEX managers

- [@Richi [MANA], msg#588854, 2026-01-24]: Dexy Gold needs better commercial branding and alignment with international gold measurement standards for adoption; USE stablecoin should lead adoption efforts

## Technical Q&A Worth Preserving

- **Q** (@qx(), msg#588646-654): How many addresses can Nautilus handle in a single airdrop transaction?
  **A** (@qx()): Successfully tested 1,000 token recipients in a single TX (~2 seconds to build, ~2 seconds to send). App warns after 20 recipients at your own risk. ([Explorer TX](https://explorer.ergoplatform.com/en/transactions/925b35c289fa00703f7cfb24e4501f171cc14db21091a56940de4ada54b261a2))

- **Q** (@HQΣr, msg#588610): User unable to complete purchase on MewMart—no TX created despite SigmaUSD balance. 
  **A** (@HQΣr, msg#588612): Issue was browser popup blocking. After allowing popups on dex.mewfinance.com, TX created successfully. Use `dex.mewfinance.com` for swaps, not marketplace interface.

- **Q** (@DiscordBridge, msg#588671-672): What coin can generate 50+ cents/day on RX 6600 XT GPU (assuming free electricity)?
  **A** (@DiscordBridge, msg#588673): Use hashrate.no calculator; refer to #⛏-│mining or #sig-mining channels for current mining pool status.

- **Q** (@kushti, msg#588804): Why did explorer backend parsing fail on block 1705794?
  **A** (@kushti, msg#588804): Output contained unparseable script. Consensus protocol allows this (soft-fork flexibility + non-Ergo protocol support in UTXOs), but strict parsers failed. Main explorer had similar issue in 2021-22 (fixed). Explorer update to Sigma 6.0 nearly complete; pretty-printing needs fixing.

- **Q** (@bob, msg#588829): Is there US access to Ergo? Are CEX listing fees disclosed?
  **A** (@Armeanio, msg#588831): Undisclosed incentives erode credibility. (@bob, msg#588839): Ease of account creation matters for new buyers, but non-T1 CEX listings often resemble extortion.

- **Q** (@DiscordBridge, msg#588883): Why adoption requires CEX listings rather than community adoption.
  **A** (@HQΣr, msg#588849-850): Alternative paths exist (VoltPay, DEX swaps, stablecoin bridges via TON). Demonstrated workflow: sell FAKU on DEX, swap ERG, get USDT on TON, invest in Dexy Gold, convert back to ERG.

- **Q** (@Richi [MANA], msg#588857): Why measure Dexy Gold in milligrams instead of troy ounces like Tether Gold?
  **A** (@cannon_q, msg#588858-860): Could display both (1mg × ~31,103 = troy ounce price). Proposal: Create redundant SC accepting milligrams, issuing troy ounce denomination ("layers of DeFi").

## Links Shared

- [Lithos Protocol Twitter announcement](https://x.com/LithosProtocol/status/2013062789460287765): Storage rent feature context
- [kushti Twitter on protocol design](https://x.com/chepurnoy/status/2013205592140038481): Ongoing protocol discussions
- [BuildOnErgo Twitter updates](https://x.com/BuildOnErgo/status/2013250285485932812)
- [Armeanio Twitter](https://x.com/armeanio/status/2013298296295653580)
- [Fitz Doud Twitter](https://x.com/Fitz_Doud/status/2013832111849971841): Community updates
- [Multiple kushti Twitter posts](https://x.com/chepurnoy) (msgs #588684, #588728, #588730, #588743, #588794, #588796): Protocol development, release planning
- [Rosen Bridge on MoneroTalk podcast](https://x.com/MoneroTalk/status/2014127713397923960): Mentioned ~40:00 mark
- [Xergon GitHub repository](https://github.com/ArOhBeK/Xergon-Network): Local AI inference network for Ergo
- [LithosPanel GitHub](https://github.com/Lithos-Protocol/LithosPanel): Node/client/miner deployment panel
- [IPFS airdrop tool](https://bafkreiabigyrl2laopgwcllt53gapvmaech4dizs34p337opdo256yme7m.ipfs.dweb.link/): Single-file Nautilus TX builder for token airdrops
- [Ergo Explorer (P2P)](https://explorer-p2p.ergoplatform.com/): Up-to-date explorer post-6.0.2
- [Ergo Explorer (main)](https://explorer.ergoplatform.com/): Fixed and operational
- [Node v6.0.2 release](https://github.com/ergoplatform/ergo/releases/tag/v6.0.2): Extra indices fix
- [GitHub PR #2291](https://github.com/ergoplatform/ergo/pull/2291): Node 6.0.3 planning discussion
- [AgenC project](https://github.com/tetsuo-ai/AgenC): AI agent framework; feasibility on Ergo raised but not answered
- [Tether Gold (XAUT) on CoinGecko](https://www.coingecko.com/en/coins/tether-gold): Reference for troy ounce gold tokenization

## Unresolved Questions

- **iOS App Store strategy for Ergo Mobile Wallet**: Updated UI/UX in development; security, dependency stability, and App Store distribution approach TBD (@kushti, msg#588731)

- **Xergon P2P integration testing**: Network development stalled awaiting beta testers with full indexed node capability (~100GB storage), Ollama (CPU or GPU), and trusted contributor status (@ArØhβΣ @Arohbe 🍪, msgs #588742, #588751)

- **Strategic exchange partnerships**: Unknown party queried who handles business development (@Unknown, msg#588797). Response: open community process, but nothing moves forward without community input/review. No specific business development lead named (@cannon_q, msg#588799).

- **Sub-blocks development timeline**: New subblock DevNet coming soon, but mainnet deployment date unspecified (@Patato, msg#588821)

- **AgenC AI framework compatibility with Ergo**: Whether AgenC framework is buildable on Ergo blockchain raised but no technical response provided (@blake starky, msg#588803)

- **Keystone SDK minimal extraction scope**: Work in progress to reduce NPM supply chain attack surface; specific timeline and final dependency count target not communicated (@kushti, msg#588749)