---
title: "Ergo General Chat — 2022-W42"
date_start: "2022-10-17"
date_end: "2022-10-23"
type: telegram_weekly
channel: general
week: "2022-W42"
source: telegram
message_count: 606
categories: [ecosystem, wallet, governance, defi, bridges, mining, nft, marketing, community]
key_terms: [KuCoin, withdrawals, deposits, UTXO dust, miner consolidation, exchange friction, Ledger, Nano S, Nano X, RAM constraints, TX display, security audit, Tesseract, Paideia, DAO creation, web2 demo, community space, giveaway, Twitter space, Night Owl Casino]
---
# Ergo General Chat — 2022-W42 Summary

## Key Topics Discussed

- **KuCoin Withdrawal Issues & UTXO Consolidation**: KuCoin suspended ERG deposits/withdrawals for ~1.5 weeks due to improper UTXO handling from miner dust. Issue resolved by 2022-10-21. Users advised to consolidate UTXOs themselves or use wallets like Nautilus with built-in consolidation; normal blockchain usage consolidates transactions naturally.

- **Ledger Hardware Wallet Integration**: Integration nearly complete but encountered security audit requirement: Ledger devices have severe RAM constraints (<1MB), making it difficult to display all TX outputs as required. Workaround being explored; third-party teams (Tesseract, anon_br) working on implementation with uncertain timeline.

- **Stable Coin Protocol Clarification**: Community clarified relationships: AgeUSD is the protocol/style; SigmaUSD is Ergo's implementation of AgeUSD; Djed is the renamed version (same thing). SigmaUSD comprises SigUSD (stablecoin) + SigRSV (reserve token), over-collateralized at 400-800%. Dexy Protocol is an alternative using DEX incentives rather than collateral.

- **Paideia DAO Web2 Demo Launch**: Paideia DAO web2 demo went live 2022-10-21 with community space on Twitter. Teams able to request manual DAO configuration to handle traffic surge on launch day. Demo linked at paideia.im.

- **Rosen Bridge Status**: Multiple requests for timeline; Armeanio indicated work in progress, no ETA provided. Speculation that bridge availability would enable Cardano-based Ergo trading (especially via Spectrum DEX on Cardano).

- **Exchange Listing & Volume Questions**: Discussion of KuCoin volume collapse post-suspension; Huobi volumes suspected faked; Gate.io and CoinEx noted as more reliable. Community discussed tier-1 exchange listing demand; Bybit article about Ergo noted but not confirmed as listing.

- **Node & Protocol Updates**: Node 5.0 rollout discussed; users uncertain whether to update to 5.0 or stay on 4.0.105. Governance parameter changes in 5.0 required community education; even mining pool operators had misconceptions about auto-vote mechanics.

- **Mining & Hashrate Context**: Nervos (CKB) hashrate comparison noted as not comparable (different algorithms; CKB exclusively ASIC-mined). Ergo maintains GPU-mineable design. Discussion of solo mining hashrate minimums and negative price pressure from miners selling to BTC.

- **Spectrum DEX Airdrop**: Trading rewards airdrop based on usage; details at Twitter. Token sale planned; tokenomics to be released. Community interest in how airdrop amounts calculated and distribution timeline.

- **Twitter Account Controversy**: Ergo_Platform account (formerly Ethereum Classic handle) briefly suspended; Bob Summerville clarified it was a bot sweep, account restored. Minimal formal community discussion; Armeanio delegated resolution to Twitter support.

## Important Decisions or Announcements

- [@CW, msg#338948, 2022-10-17]: Ledger integration security audit revealed RAM display limitation; solution being researched.

- [@Ergo NEWS $ERG, msg#339199, 2022-10-19]: Weekly AMA with Alephium co-sponsor Cheng Wang scheduled Thursday 2022-10-20, 1 PM UTC.

- [@Unknown, msg#339004, 2022-10-18]: Paideia DAO web2 demo + community Twitter space scheduled Friday 2022-10-21, 17:00 UTC with DAO team participation and giveaways.

- [@Unknown, msg#339350, 2022-10-20]: Paideia web2 demo released live; manual DAO configuration available via DM to @Tefcek21 to prevent opening-day technical issues.

- [@HQΣr | Wont Dm, msg#339583, 2022-10-21]: KuCoin withdrawals confirmed working again after ~1.5 week suspension.

- [@Unknown, msg#339895, 2022-10-22]: Auction House seed round extended to 2022-10-24 22:00 UTC due to KuCoin withdrawal troubles.

- [@Glasgow｜WON'T DM, msg#340001, 2022-10-23]: Ledger integration work "back with Tesseract now for changes."

## Technical Q&A Worth Preserving

- **Q** (@NΣssim, msg#338956): Is Ledger integration status tracked in weekly dev updates?  
  **A** (@CW, msg#338957-958): Integration being worked on; CW can slot in updates if team provides them. 3rd-party dev (later clarified as Tesseract team) leading work.

- **Q** (@rubens, msg#339848): Can I block random airdrop entries in my wallet to increase privacy?  
  **A** (@Unknown, msg#339850): You can burn unwanted tokens. Airdrops typically sent to addresses meeting certain criteria (e.g., holding thresholds).

- **Q** (@rubens, msg#339849): Can mixer handle any Ergo token or just ERG?  
  **A** (@Unknown, msg#339851): Mixer can theoretically mix any token, but practical problem is finding other users to mix with—may take indefinite time.

- **Q** (@Hassen | Launch imminent, msg#339485): What blockchain did AgeUSD originate from?  
  **A** (@Unknown, msg#339493): Ergo team partnered with Emurgo and IOHK (Cardano) to create AgeUSD, which later evolved into Djed.

- **Q** (@Hassen, msg#339513): How can they make an algorithmic stablecoin if you need ability to mint the currency (ERG)?  
  **A** (@Unknown, msg#339516): You mint using either SigUSD or SigRSV backed by ERG collateral. Cannot mint SigRSV above 800% collateral or SigUSD below 400%.

- **Q** (@Unknown, msg#339487): Is AgeUSD a protocol or implementation?  
  **A** (@Unknown, msg#339491, 339499): AgeUSD is the protocol/style; SigmaUSD and Djed are implementations of it.

- **Q** (@Fred Clark Jr, msg#339320): What minimum hashrate for solo mining Ergo?  
  **A** (@Jesper Agger, msg#339321): 6-10 GH/s suggested, though context-dependent on network difficulty.

- **Q** (@w18, msg#339178): Why isn't rich list loading on Explorer?  
  **A** (@Gazza, msg#339294): Alternative explorer at ergo-explorer-cdn.getblok.io/en/rich-list works.

- **Q** (@Vladiслав, msg#339625-641): KuCoin account access issues after withdrawal re-enable (2FA codes failing, password reset not sending).  
  **A** (@Abu Salih, msg#339741): Contact KuCoin support at kucoin.zendesk.com/hc/en-us/requests/new. Later resolved with SMS verification instead of email.

- **Q** (@Benny, msg#339249): Is Bybit listing Ergo or just posting an article?  
  **A**: No definitive answer; article shared but listing not confirmed.

## Links Shared

- [https://ergo.watch/emission]: Ergo emission chart and tokenomics visualization.

- [https://sigmaverse.io/all-projects/?category=dApps]: Comprehensive Ergo dApps directory.

- [https://ergoplatform.org/en/blog/2021-07-30-ergos-ageusd-protocol-sigrsv-and-sigusd/]: Official blog post explaining AgeUSD protocol, SigRSV, and SigmaUSD.

- [https://github.com/Emurgo/age-usd]: AgeUSD protocol GitHub repository (Emurgo).

- [https://github.com/tesseract-one/]: Tesseract team ledger integration work.

- [https://github.com/anon-br/ledger…]: anon_br's ledger integration branch (last updated 3 months prior to chat date).

- [https://www.youtube.com/watch?v=AzTlwT2Weg4]: AgeUSD protocol explainer video.

- [https://youtu.be/7q3Jq_OvhKY]: CW's video on Mr. S cold wallet advantages.

- [https://www.paideia.im/dao]: Paideia web2 demo interface.

- [https://www.youtube.com/watch?v=uAzTDMAVrqQ]: Paideia demo usage tutorial.

- [https://kucoin.zendesk.com/hc/en-us/requests/new]: KuCoin support ticket submission.

- [https://airdrop.spectrum.fi/v1/airdrop/traders?address=]: Spectrum DEX trading reward lookup (requires wallet address appended after `=`).

- [https://ergoraffle.com/raffle/show/…]: Ergo Raffle fundraiser tracking (example: Bro's Label of art raffle).

- [https://ergo-explorer-cdn.getblok.io/en/rich-list]: Alternative Ergo Explorer rich-list viewer (getblok CDN).

- [https://sigmaverse.io/]: Ergo ecosystem project directory.

- [https://zeamerch.com/collections/ergo]: Ergo merchandise shop.

- [https://twitter.com/SpectrumLabs_/status/1583502586078187520]: Spectrum Labs official airdrop details.

- [https://www.ergopad.io/contribute/auctionhouse/seed]: Auction House seed round contribution (extended to 2022-10-24).

## Unresolved Questions

- **Ledger Integration Timeline**: No ETA provided; dependencies on 3rd-party teams (Tesseract, anon_br). RAM constraint workaround status unclear (msg#338948-961, 2022-10-17).

- **KuCoin Account Access Issues**: One user (Vladiслав) reported account access failure after withdrawal re-enable; partially resolved via SMS 2FA rather than email verification, but root cause of email verification failure not identified (msg#339625-820).

- **Rosen Bridge Delivery Date**: Requested multiple times; Armeanio consistently deferred to "work in progress" with no ETA (msg#339122-123, 339809-812).

- **Tier-1 Exchange Listing**: Community expressed demand; Bybit article noted but listing unconfirmed. No foundation commitment or timeline discussed (msg#339141, 339810-812).

- **Spectrum Token Distribution Timing**: "preTGE" concept unclear; tokenomics promised "next week" (from 2022-10-22); airdrop timing estimated "a few weeks after" tokenomics release (msg#339792).

- **Paideia DAO Creation Function Public Release**: Web2 demo manual DAO setup noted as precaution; public DAO creation function timeline not specified (msg#339167).

- **Node 5.0 vs 4.0.105 Upgrade Path**: User confusion about which version to adopt; no clear migration guidance provided in chat (msg#339622).