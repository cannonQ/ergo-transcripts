---
title: "Ergo General Chat — 2022-W06"
date_start: "2022-02-07"
date_end: "2022-02-13"
type: telegram_weekly
channel: general
week: "2022-W06"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W06 Summary

## Key Topics Discussed

- **EIP-27 Voting & Block Emission**: Community discussing miner voting on emission schedule changes. Vote is indicative until block #699,393 (early March). Emission reduces by 3 ERG every 3 months (~90 days based on 2-minute block time), declining gradually until tail emission.

- **Nautilus Wallet Development**: Privacy-focused browser extension wallet in active development. Ledger support in private testing (~2 weeks timeframe). Implements mixer integration and focuses on privacy features. Multiple community wallets (Nautilus, Satergo, SafeW) collaborating on Ledger support via ErgoHack.

- **Rosen Bridge (Susy)**: Watcher UI nearly complete; UI integration and final testing remaining (10-15 days total to live launch). Currently one-way (Solana→Ergo) by mining agreement, though bridge supports two-way technically. Ergo-Cardano bridge discussed as simpler due to eUTXO model compatibility; data inputs needed from Cardano side for future optimization.

- **ErgoHack III Progress**: Community-driven hackathon with multiple projects: Ledger wallet integrations, privacy mixer, new NFT projects, casino/gaming dApps, stealth addresses. Significant momentum in ecosystem development.

- **ErgoDex & Spectrum**: Order book DEX live and functioning well. Partial order fills supported. Spectrum (AMM pools) working. Trading House (auction house) mentioned. Integration discussions with ErgoPay for mobile support.

- **Explorer Update**: New Ergo Explorer header released with improved UI/UX across desktop and mobile.

- **Block Time & Network Parameters**: Block time is not adjustable via voting — determined by difficulty algorithm targeting ~2 minutes. Discussion about increasing block speed for throughput (6.0 testnet proposed for experimentation).

- **NIPoPoWs Implementation**: UTXO set dumping and P2P messaging infrastructure complete. Downloading and reconstruction logic next phase. Not yet in production but on roadmap for sidechain support.

- **Wallet Ecosystem**: Yoroi experiencing issues (memory leaks, sync problems). Community pivoting to Nautilus, Satergo, SafeW, and Ergo Mobile Wallet. Trade-offs between privacy (Nautilus) and usability (SafeW, Satergo).

- **Storage Rent & Token Burning**: Community proposing integration of token burn mechanisms into dApps to reduce inflation and offset storage rent. Discussed but not formally adopted.

- **Mining & Emission**: Current ~1.425M ERG/month emission. Reduction to ~1.36M in April 2022, then declining 64.8k/3 months in both EIP-27 and non-EIP scenarios. Dual mining (ETH+ERG) possible; RVN+ERG not recommended (resource conflict).

- **Marketing vs. Ecosystem Development**: Debate on whether Ergo should invest in aggressive marketing now. Consensus that ecosystem maturity (working dApps, stable wallets, bridges) should precede heavy marketing; "build first, market later."

- **LETS Protocol**: Early-stage discussion of trustless local exchange trading system using Ergo smart contracts. Draft contracts exist; framework not yet built. EF does not build dApps directly but can incentivize bounties.

## Important Decisions or Announcements

- [@glasgowm, msg#254281, 2022-02-10]: Ergo NFT Telegram channel renamed to `@ErgoNFTs`; linktree to be updated.

- [@Glasgow｜WON'T DM, msg#254913, 2022-02-07]: Voting results page live at ergo.getblok.io/vote/index.html, updating every 20 minutes.

- [@Armeanio, msg#254984, 2022-02-13]: Will check and update circulating supply data (noted discrepancy: article stated 97.4M, should be 97.7M).

- [@MHS_SAM, msg#254205, 2022-02-09]: Rosen Bridge Watcher completion timeline: UI integration + testing = 10-15 days total before live launch.

- [@MrStahlfelge, msg#254454, 2022-02-11]: Committing to add wallet transaction history feature (CSV export with token amounts, not just ERG) to Ergo Mobile Wallet soon.

- [@Aberg Satergo dev, msg#254013, 2022-02-08]: Confirmed participation in ErgoHack Ledger integration effort with Nautilus, SafeW teams.

- [@Glasgow｜WON'T DM, msg#254993, 2022-02-07]: CMC circulating supply for ERG listed as 32M; Glasgow has repeatedly contacted CMC to correct to ~50M; issue remains unresolved.

- [@kushti khushi, msg#254964, 2022-02-08]: Promoted Ergo Developers Telegram channel for developer recruitment.

- [@MHS_SAM, msg#254568, 2022-02-11]: Shifted Minotaur wallet development priority from urgency to bridge work as Nautilus, Mobile, and SafeW wallets matured; hopes to release "very first multi-platform wallet for Ergo" soon.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#253617): What is Ergo's minimum attack vector compared to other chains (Cardano 22, Bitcoin 4, Ethereum 3)?
  **A** (@Glasgow, msg#253621): This is not a real metric and not directly comparable across chains.

- **Q** (@Unknown, msg#253874): What does "3 months" mean for block emission reduction — 90 days or block height?
  **A** (@CW, msg#253875-876): Block height (~2M blocks over 3 months, roughly 3 months at ~2-minute block time). Next reduction at block height 720,000; current block 681,218; roughly April 3rd.

- **Q** (@VeganCatLover, msg#253617): What is Ergo's minimum attack vector?
  **A** (@Glasgow, msg#253621): Not a real metric; depends on hashrate, price, and various factors rather than a single number.

- **Q** (@Unknown, msg#254516): Has there been a vote to change block time?
  **A** (@Glasgow, msg#254517-520): Block time is not an adjustable parameter and cannot be voted on; difficulty algorithm maintains ~2-minute target.

- **Q** (@Unknown, msg#254526): Is block time a function of hashrate?
  **A** (@Glasgow, msg#254528): Difficulty algorithm tries to keep it at ~2 minutes depending on hash; reference: [eprint.iacr.org/2017/731.pdf](https://eprint.iacr.org/2017/731.pdf)

- **Q** (@André, msg#254695): How to limit Docker log output? Will setting `mining = true` start mining on that node?
  **A** (@Glasgow, msg#254701-703): Add `-Dlogback.stdout.level=WARN -Dlogback.file.level=ERR` to Java command. Need dedicated mining software (not just node flag). Config template: [github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf)

- **Q** (@Arcadian Computers, msg#254053): Getting blank screen at 127.0.0.1:9053/panel after upgrading to 4.0.23; works in Chromium 98 but not Firefox.
  **A** (@Glasgow, msg#254054): Not reported elsewhere; check logs. (@CW, msg#254067): Try actual IP instead of localhost.

- **Q** (@MHS_SAM, msg#254205-208): Is Rosen Bridge one-way or two-way? Timeline?
  **A** (@MHS_SAM): Two-way technically, one-way by current agreement. One-way goes live first; two-way agreement can be made post-launch. Ergo-Cardano bridge simpler due to eUTXO compatibility; Solana bridge (Susy) required tricks for account model conversion.

- **Q** (@Igor Gabaydulin, msg#254610): Where should tokens be sent to burn them properly?
  **A** (@Igor): Don't send to "burn address" — storage rent will recover them in 4 years. Instead, create transaction with input box containing tokens but no output box. Feature not yet in wallets.

- **Unknown, msg#254186-191**: Are NIPoPoWs for sidechains stable/production-ready?
  **A** (@Glasgow, msg#254190): Can be used for different things; implementation on L0 not far off. [docs.ergoplatform.com/dev/protocol/nipopow/](https://docs.ergoplatform.com/dev/protocol/nipopow/)

- **Q** (@Alysson, msg#254913): Why does Nautilus transfer funds to another address when importing seed?
  **A** (@MrStahlfelge, msg#254914): Nautilus has privacy focus; moves funds to obfuscate transaction history. Setting to disable will be added. (@Gazza, msg#254933): New release turns this off by default.

## Links Shared

- [ergo.getblok.io/vote/](https://ergo.getblok.io/vote/): Live voting results for EIP-27 (updates every 20 minutes)
- [explorer.ergoplatform.com/en/](https://explorer.ergoplatform.com/en/): Updated Ergo Explorer with new header
- [ergoplatform.org/en/blog/2020_04_02_use_cases/](https://ergoplatform.org/en/blog/2020_04_02_use_cases/): LETS (Local Exchange Trading System) use case overview
- [ergoplatform.org/en/blog/2021-07-01-lets-start-the-discussion/](https://ergoplatform.org/en/blog/2021-07-01-lets-start-the-discussion/): LETS protocol deep dive
- [github.com/ergoplatform/ergo/wiki/A-Trustless-Local-Exchange-Trading-System](https://github.com/ergoplatform/ergo/wiki/A-Trustless-Local-Exchange-Trading-System): LETS implementation wiki
- [docs.ergoplatform.com/dev/protocol/scaling/](https://docs.ergoplatform.com/dev/protocol/scaling/): L2 scaling documentation
- [github.com/ergoplatform/ergo-jde/blob/main/kiosk/src/test/scala/kiosk/avltree/](https://github.com/ergoplatform/ergo-jde/blob/main/kiosk/src/test/scala/kiosk/avltree/): AVL tree plasma tutorials (pending documentation)
- [sigmaverse.io/](https://sigmaverse.io/): Existing Ergo dApps and projects directory
- [reddit.com/r/ergonauts/comments/qrrsga/ergo_tokens_minter_and_burner/](https://reddit.com/r/ergonauts/comments/qrrsga/ergo_tokens_minter_and_burner/): Ergo token burner tool discussion
- [twitter.com/NautilusWallet/status/1490354631678955522](https://twitter.com/NautilusWallet/status/1490354631678955522): Nautilus Ledger support update (2 weeks private testing)
- [youtu.be/mIf4wnN5xI4](https://youtu.be/mIf4wnN5xI4): Ergo Pulse episode with Dan Friedman, Joe Armeanio, Marty (ErgoPad)
- [docs.ergoplatform.com/dev/protocol/nipopow/](https://docs.ergoplatform.com/dev/protocol/nipopow/): NIPoPoWs specification
- [ergoplatform.org/en/wallets/](https://ergoplatform.org/en/wallets/): Official wallet list (noted as needing updates)
- [github.com/minotaur-ergo/minotaur-wallet](https://github.com/minotaur-ergo/minotaur-wallet): Minotaur multi-platform wallet (updated 5 days prior to week)
- [t.me/NautilusWallet](https://t.me/NautilusWallet): Nautilus Wallet Telegram support
- [t.me/LedgerErgohack](https://t.me/LedgerErgohack): ErgoHack Ledger integration team Telegram group
- [t.me/ErgoDevelopers](https://t.me/ErgoDevelopers): Ergo Developers recruitment channel
- [eprint.iacr.org/2017/731.pdf](https://eprint.iacr.org/2017/731.pdf): Difficulty algorithm paper reference

## Unresolved Questions

- **Block Speed Increase Feasibility**: Discussion of faster blocks (6.0 testnet proposed) but no formal proposal adopted. Requires community testing and parameter tweaking; volunteers sought but limited uptake.

- **Binance Listing**: Multiple community members asking "wen Binance listing?" No official timeline or statement; directed to trading channel.

- **LETS Protocol Development**: Draft contracts exist but framework not built. EF does not develop dApps; relies on community bounties. No timeline announced.

- **NiPoPoWs on L0**: Download and reconstruction logic still in progress. Sidechain constructions promised "soon" but not finalized.

- **Marketing Strategy**: Unresolved debate on whether to pursue aggressive influencer/social media marketing now vs. wait for ecosystem maturity. No official position stated.

- **CMC Circulating Supply Error**: Glasgow repeatedly flagged 32M vs. ~50M discrepancy; CMC refuses correction. Ongoing issue.

- **Exodus Wallet Support**: Community interest in Exodus integration. No indication Exodus team is working on it; concerns about UTXO vs. account model support.

- **ErgoPay Mobile Integration**: Discussed for ErgoDex and other dApps but not yet live. Referenced as "coming soon" in multiple contexts.

- **Storage Rent & Token Burning**: Proposal to embed burn mechanisms in dApps to offset inflation. Interesting but not formally evaluated or adopted.