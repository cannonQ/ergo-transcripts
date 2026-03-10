---
title: "Ergo General Chat — 2025-W25"
date_start: "2025-06-16"
date_end: "2025-06-22"
type: telegram_weekly
channel: general
week: "2025-W25"
source: telegram
message_count: 261
categories: [technical, bridges, marketing, wallet, governance, community, mining, nft, ecosystem, defi]
key_terms: [sub-blocks, mining peers, testing, optimizations, events tracing, ErgoMixer, privacy, anonymity, ring signatures, mixing strategy, user count, Rosen Protocol, Dogecoin watcher, token emission, cross-chain, CoinGecko ranking, voting, native ranking, market visibility, explorer]
---
# Ergo General Chat — Week 2025-W25 Summary

## Key Topics Discussed

- **ErgoMixer Privacy & Usage Patterns**: Discussion on mixer effectiveness, anonymity set size, and practical usage strategies. kushti emphasized that mixer works best with multiple incomplete mixes over time, treating it like a desktop wallet rather than a one-shot tool, with education needed on proper configuration [@kushti khushi, msg#564209-564230].

- **Rosen Protocol v2 Token Issuance**: Three new tokens issued for Rosen v2 infrastructure: rspv2DogeRWT (watcher token), rspv2DogeCleanup (cleanup job NFT), and rspv2DogeAWC (collateral identifier) [@kushti khushi, msg#564236-564238].

- **6.0 Node Release**: kushti confirmed 6.0 code merged into master with deployment at testnet, will release after final blockchain resync. Recent optimizations include event tracing support and sub-blocks implementation testing [@kushti khushi, msg#564147, msg#564459, msg#564483].

- **Storage Rent (Demurrage) Mechanics**: Community education on how storage rent works — ~0.14 ERG maximum fee charged after 4 years of box inactivity, based on box size in bytes not ERG amount. Wallets like Nautilus have "optimize" button to consolidate boxes and reset demurrage timer [@Flying Pig, msg#564662; @cannon_q, msg#564658].

- **Mining Rewards & Emission Schedule**: Discussion on upcoming block reward reduction from 15 to 3 ERG in ~10 months. kushti noted that on-chain emission contracts allow for miner voting on storage rent increases (up to 2x current value) without hardfork, no planned hardforks since 2022 [@kushti khushi, msg#564449-564458].

- **CodeUTXO Explorer Launch**: New simple explorer interface launched at explorer.codeutxo.com and simpleexplorer.codeutxo.com, with direct Perl link access for transactions [@qx(), msg#564245-564249].

- **Adoption & Visibility Strategy**: Discussion on Ergo needing merchandising, mainstream marketing, accepting ERG for goods/services, and making tools more user-friendly. Challenges identified: lack of US exchange access (most critical market), need for VC funding/promotions like competitors, and awareness of unique features like SigmaUSD [@Alx, msg#564546; @cannon_q, msg#564563].

## Important Decisions or Announcements

- [@kushti khushi, msg#564236-564238, 2025-06-17]: Rosen Protocol v2 tokens issued for dogecoin bridge infrastructure (watcher, cleanup, and collateral tokens).

- [@kushti khushi, msg#564483, 2025-06-19]: 6.0 code merged into master, deployed to testnet (165.227.26.175:16042/info), awaiting final blockchain resync before mainnet release.

- [@qx(), msg#564204, 2025-06-17]: CodeUTXO explorer (codeutxo.com) launched as simple, straightforward blockchain explorer for understanding UTXO mechanics.

- [@cannon_q, msg#564590, 2025-06-21]: Banxa payment integration timeline: "a few weeks" until implementation complete.

- [@kushti khushi, msg#564449, 2025-06-19]: Storage rent boxes claimed recently; emphasized need for external communication about storage rent as miner income opportunity.

## Technical Q&A Worth Preserving

- **Q** (@Flying Pig): ErgoMixer has low user count (2-3 users historically), making it vulnerable to process-of-elimination deanonymization. How effective can it really be?
  **A** (@kushti khushi): Mixer works best with incomplete mixes over time, periodic withdrawal/remix cycles, and batch operations. Unlike single-session mixers, Ergo mixer acts as a wallet with historical UTXOs of different ages, creating complex analysis. Also noted incomplete mixes from past years remain in contract, adding to the anonymity set retroactively [@kushti khushi, msg#564209-564228].

- **Q** (@Flying Pig): Shouldn't announcing a mixing day to encourage usage compromise anonymity?
  **A** (@HQΣr): Use stealth addresses and Pulse encrypted messaging instead [@HQΣr, msg#564234].

- **Q** (@Turkish Delight): I have a 3-year-old box in Nautilus wallet, worried about 4-year demurrage limit. What does "optimize" do?
  **A** (@cannon_q): Consolidates all boxes by sending them to yourself, refreshing all into one new box and resetting the 4-year demurrage timeline. Allows old box history to be recycled [@cannon_q, msg#564658].

- **Q** (@Alx): How can Ergo address upcoming block reward drop from 15→3 ERG in 10 months without a hardfork, like Radiant did?
  **A** (@kushti khushi): Radiant failed for different reasons (ASIC takeover). Ergo has options: miners can vote to increase storage rent collection up to 2x current value without hardfork. Emission is on-chain contract, not hardcoded. No hardforks planned since 2022 [@kushti khushi, msg#564449-564458].

- **Q** (@tyja Discord): Could a miner with hashpower push a reward-changing hardfork through social engineering?
  **A** (@kushti khushi): Hardforks require active adoption by community—CEXes, services, nodes must upgrade. Without community consensus, dissenting miner launches own chain fork [@kushti khushi, msg#564464-564471].

## Links Shared

- [https://explorer.codeutxo.com/]: Main CodeUTXO explorer interface for simple UTXO visualization.
- [https://simpleexplorer.codeutxo.com/transactions/...]: Simplified transaction explorer (redirect for Nautilus integration).
- [https://webui.codeutxo.com/cgi-bin/byaddres.pl?a=...]: Direct Perl CGI interface for address/transaction lookup.
- [https://coinmarketleague.com/coin/ergo]: CoinMarketLeague voting page for Ergo ranking (campaign ongoing: 137+ votes achieved).
- [https://x.com/CML_Crypto/status/1934175300318888051/photo/1]: CoinMarketLeague Ergo rank #1 announcement.
- [https://kasmixer.com/]: Kas hosted non-custodial mixer (referenced as problematic for privacy vs. self-hosted Ergo Mixer).
- [https://youtu.be/LvkSm2MMaXc?feature=share]: TMR.ERG space invader game livestream.
- [https://x.com/KeystoneWallet/status/1936099225479074116]: Keystone Hardware Wallet partnership/support announcement.

## Unresolved Questions

- **Ergo Adoption Strategy**: How to increase mainstream adoption given lack of easy US exchange access (most critical market) and lack of VC-backed marketing campaigns that competitors use [@Alx, @Ioannis, msg#564552-564565].

- **ErgoMixer Accessibility**: Should mixer be wrapped in hosted web UI (like Tornado Cash) or kept self-hosted only? Privacy implications of each approach unresolved [@Alx, msg#564632; @qx(), msg#564548].

- **Mobile Wallet Integration**: Community interest in integrating ErgoMixer into mobile wallets, but technical feasibility and privacy implications not fully scoped [@DiscordBridge, msg#564551].

- **Game Prize Pool Cheating Prevention**: TMR.ERG working on SpaceInvaderERG with on-chain prize pool. Backend-side scoring prevents some cheating, but client-side game-state forgery still possible; solution TBD [@TMR.ERG, msg#564611-564619].

- **Devnet/Testnet for 6.0 Block Speed Research**: kushti offered to invite interested community members to run faster-block testnet with 6.0, but needs someone to lead the effort. Timeline and parameters not yet fixed [@kushti khushi, msg#564459].

- **StreamVault Token Economics**: HQΣr proposing on-chain token for StreamVault multimedia platform (content creation fees, tipping, gifts). Community feedback on viability sought [@HQΣr, msg#564669].