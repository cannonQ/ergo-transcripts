---
title: "Ergo General Chat — 2024-W16"
date_start: "2024-04-15"
date_end: "2024-04-21"
type: telegram_weekly
channel: general
week: "2024-W16"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — Week 2024-W16 Summary

## Key Topics Discussed

- **Sigmanauts Mining Pool Growth**: The community-run mining pool reached the top 10 on MiningPoolStats (~68GH/s by week end) with bonus token distributions every 420 blocks (Comet from darkerdoge, with plans to add Erdoge, GreasyCex, and rsHOSKY). Pool now listed on HiveOn with multiple port configurations for different hashrates.

- **Palmyra Economy Launch**: Rosen-based token PALM launched on Cardano side with IDO completed; discussions around bridged pricing between Ergo and Cardano, and liquidity pair creation on Spectrum Finance using whitelisted pools.

- **ErgOne Community Marketing Initiative**: New decentralized marketing protocol using limited 1M token supply, Proof-of-Commitment reward system, and expansion beyond Twitter to YouTube; aimed at community-driven organic promotion of Ergo projects.

- **Oracle Pool v2 (Dexy Gold)**: Running on Dexy Gold with GORT rewards; plans to expand Oracle Pools beyond current EF and community operators and build native Ergo oracles with dedicated tooling for Palmyra use case.

- **MEXC Exchange Listing Progress**: Testing phase ongoing with mandatory KYC; expected launch "sometime next week" per @Glasgow｜WON'T DM (msg#488525), though some community members estimated 2 weeks.

- **Block Speed Improvements Discussion**: Community interest in faster blocks and layer 2 solutions; technical constraints flagged (timestamp/block height dependencies, emission schedules); testnet 6.0 available for parameter tweaking with call for interested developers to lead experiments.

- **Mining as Anonymous ERG Acquisition**: kushti emphasized that mining offers a jurisdictionally neutral way to acquire ERG anonymously using only electricity (msg#488332, msg#488820).

- **Cyberverse Daily Rewards**: Documented exploitation of Cyber Citizens NFTs earning ~350 CYPX/day (~0.57 ERG/day) through daily reward mechanics; multiple holders unaware of the opportunity until prompted.

- **Trade House / Order Book DEX Design**: Extended discussion of Trade House significance vs AMM pools; order book DEXes offer full price control, slippage transparency, and partial fill support; contrast with Spectrum's AMM model.

- **Community vs. Commercial Meme Projects**: Debate over legitimacy of GreasyCex, Bober, Comet as social/financial tools vs. "shitcoins"; community consensus that transparent, lock-verified projects with LP locks and real utility differ from Solana-style rug-heavy memecoins.

## Important Decisions or Announcements

- [@kushti, msg#488330 & msg#488332, 2024-04-15]: Tipped 10,000 COMET to qx() recognizing Sigmanauts mining pool top-10 status and emphasizing mining as anonymous ERG acquisition method.

- [@Glasgow｜WON'T DM, msg#488241-249, 2024-04-15]: Announced "The Field" peer-to-pool pledging protocol in development (MVP by late May), seeking team members (admins, marketers, designers, developers); Discord link provided.

- [@qx(), msg#488329, 2024-04-15]: Announced Sigmanauts mining pool achievement in top ten on MiningPoolStats.

- [@qx(), msg#488374, 2024-04-15]: Noted Sigmanauts pool added random participant reward script with darkerdoge donation (30 tokens/420 blocks for 3 years); code reusable for new project launchers distributing tokens to pool members.

- [@qx(), msg#488385-386, 2024-04-16]: Shared Ergo Platform Twitter post; noted extraordinary Cyberverse Citizens daily CYPX rewards (350/day = 0.57 ERG/day equivalent).

- [@Glasgow｜WON'T DM, msg#488409-412, 2024-04-16]: Published ErgOne feature summary: community-engagement-driven marketing, limited 1M token supply, Proof-of-Commitment rewards, Twitter-first with YouTube expansion planned.

- [@kushti, msg#488413, 2024-04-16]: Tipped 10,000 COMET to mgPai0 in response to shishirpai tweet about ErgOne.

- [@qx(), msg#488422, 2024-04-16]: Posted Ergo Platform announcement; replied to tweet about wrapped token network support.

- [@qx(), msg#488430-432, 2024-04-16-17]: Encouraged participation in Ergo event/announcement; clarified ErgoScript as original network token value source in discussion with CannonQ.

- [@Bye H8er, msg#488412, 2024-04-16]: Summarized ErgOne creation purpose, community engagement mechanics, Great Mass Sharing (GMS), decentralized marketing, reward system based on engagement level, and future goals.

- [@Glasgow｜WON'T DM, msg#488525, 2024-04-18]: MEXC rolling out with mandatory KYC for new users; testing phase ongoing.

- [@R, msg#488529, 2024-04-18]: Mentioned Seychelles digital residency (rns.id, ~250 USD/year) as alternative KYC for exchange access.

- [@qx(), msg#488556, 2024-04-18]: Announced weekly update and AMA available on Ergo podcast via Sigmacast web page (sigmanauts.com/podcast).

- [@Glasgow｜WON'T DM & @Rj, msg#488559-506, 2024-04-17-18]: Clarified Palmyra token launch timing and page status ("GET PALM" button to update next day, ~5 hours from 22:38 UTC on 2024-04-17).

- [@HQΣr | Wont Dm, msg#488436, 2024-04-17]: Posted CrooksFi DEX statistics (819 swaps total, 13 in 24h, $39.5K total volume, 117.19 ERG fees); lottery at 1000 swaps for 5% fee payout.

- [@qx(), msg#488490, 2024-04-17]: Posted Ergo Platform tweet (no content detail in excerpt).

- [@qx(), msg#488579-586, 2024-04-18]: Noted "very little left" in current Palmyra round; discussed token account identifiers and photograph timestamps from Token 2049 Dubai event.

- [@MGpai, msg#488472, 2024-04-17]: Reported ErgoNames contracts completed for 2 weeks, review/implementation delayed by illness and school; expected to resume this weekend with major push in summer.

- [@Armeanio, msg#488113, 2024-04-21]: Quipped about attire ("Shirt and tie vs the wiener suit") at Token 2049 Dubai conference.

- [@qx(), msg#488110-112, 2024-04-21]: Announced Sigmanauts mining pool configuration now live on HiveOn with four port options (3052-3055) for different hashrates and TLS requirements.

- [@qx(), msg#488160, 2024-04-21]: Announced GoodThingsDAO token sent to ~50 people who donated to two Kenyan raffles; DAO starting fresh with open discussion on operations; Paideia integration available.

## Technical Q&A Worth Preserving

- **Q** (@Mki, msg#488338): What language do I have to learn for the Ergo chain?  
  **A** (@Glasgow｜WON'T DM, msg#488340): Depends what you do. SDKs for JVM/JS/Rust available. [Reference: https://docs.ergoplatform.com/dev/get-started/#app-development]

- **Q** (@Man ish, msg#488390 & 489080): How to use Cyber Citizens NFTs to earn rewards? Where can I see daily transaction data (Ergo Watch replacement)?  
  **A** (@qx(), msg#488391): You have to utilize them (claim daily rewards), not just hold. [Note: defillama.com suggested as TVL resource; specific tx data source unresolved.]

- **Q** (@Bye H8er, msg#488698-701): Will PALM have different prices on Ergo vs Cardano? How do I create a liquidity pair on Spectrum Finance?  
  **A** (@qx(), msg#488699-710): Anyone can create LP pairs on Spectrum or CrooksFi (same liquidity); arbitrage across bridge will keep prices synchronized. Must whitelist pools on Spectrum UI; need Rosen PALM + matching token (ERG, etc.) + initial price setting. Offered to create tutorial video.

- **Q** (@Sheetoshi, msg#488628): Can I restore a Ledger wallet 24-word seed phrase in Nautilus or other Ergo wallets?  
  **A** (@cannon_q, msg#488629-631): Confirmed compatibility with Nautilus and other wallets supporting 24-word seed phrases.

- **Q** (@Jack Σ, msg#488488): Can a global crypto oracle for the entire industry be built on Ergo or layer 2?  
  **A** [Unresolved; no direct technical response in transcript.]

- **Q** (@Chris Ray, msg#489138-154): What is the best way to buy ERG in the US? Should I use Rosen Bridge from Cardano, or TradeOgre, or SwapSpace?  
  **A** (@qx() & others, msg#489144, 489151-158): SwapSpace.co available with small fee (~few cents above market); Rosen Bridge from Cardano reliable for transfers (small fees); TradeOgre KAS incident raised caution; only BTC/ERG pairs on TradeOgre (no USD pairs). Current US listing situation remains suboptimal pending MEXC launch.

## Links Shared

- [https://github.com/sigmaspace-io/ergo-lib-go](https://github.com/sigmaspace-io/ergo-lib-go): ergo-lib-go v0.26.0 release (Go wrapper for sigma-rust C bindings); repository with transaction/token/contract examples.

- [https://pkg.go.dev/github.com/sigmaspace-io/ergo-lib-go](https://pkg.go.dev/github.com/sigmaspace-io/ergo-lib-go): ergo-lib-go package documentation.

- [https://discord.com/invite/wa38bX57tY](https://discord.com/invite/wa38bX57tY): "The Field" peer-to-pool pledging protocol Discord (msg#488249).

- [https://ergonaut.space/en/Guides/yield/gaming](https://ergonaut.space/en/Guides/yield/gaming): Gaming yield guide (msg#488246).

- [https://open.spotify.com/episode/3SFTB8SNy5SbJDcgcOGGas](https://open.spotify.com/episode/3SFTB8SNy5SbJDcgcOGGas): Ergo podcast dev update (msg#488262).

- [https://anchor.fm/s/f21c6414/podcast/rss](https://anchor.fm/s/f21c6414/podcast/rss): Ergo podcast RSS feed (msg#488265).

- [https://docs.ergoplatform.com/dev/get-started/#app-development](https://docs.ergoplatform.com/dev/get-started/#app-development): Ergo dev docs with SDK references (msg#488340).

- [https://www.usenix.org/conference/woot16/workshop-program/presentation/wustrow](https://www.usenix.org/conference/woot16/workshop-program/presentation/wustrow): "Real PoUW" academic paper reference (msg#488341).

- [https://www.coingecko.com/en/chains](https://www.coingecko.com/en/chains): CoinGecko blockchain ecosystem rankings (msg#488352).

- [https://www.coingecko.com/en/chains/ordinals](https://www.coingecko.com/en/chains/ordinals): CoinGecko Ordinals ecosystem (msg#488354).

- [https://defillama.com](https://defillama.com): DefiLlama TVL tracking and "Bridged TVL" section (msg#488355).

- [https://twitter.com/HawkMiningCo/status/1780047386326241327](https://twitter.com/HawkMiningCo/status/1780047386326241327): Hawk Mining Co. post about hardware/clothing (msg#488415).

- [https://ergone.io/](https://ergone.io/): ErgOne project site (msg#488409).

- [https://fxtwitter.com/Erg0ne/status/1780269381538189353](https://fxtwitter.com/Erg0ne/status/1780269381538189353): ErgOne Twitter thread (msg#488410).

- [https://twitter.com/shishirpai/status/1780272220842942948](https://twitter.com/shishirpai/status/1780272220842942948): shishirpai tweet (msg#488411).

- [https://reddit.com/r/CryptoCurrency/s/BvYGaoCKFI](https://reddit.com/r/CryptoCurrency/s/BvYGaoCKFI): Reddit r/CryptoCurrency post (Rosen Bridge spam discussion) (msg#488315).

- [https://miningpoolstats.stream/ergo](https://miningpoolstats.stream/ergo): Ergo mining pool statistics (msg#488780).

- [https://sigmanauts.com/mining/](https://sigmanauts.com/mining/): Sigmanauts mining pool setup guide (msg#488780, 488826).

- [https://t.me/+TPc9MRparGFjZjYx](https://t.me/+TPc9MRparGFjZjYx): Sigmanauts mining pool Telegram (msg#488780).

- [https://kyc.tminusone.pro/#/](https://kyc.tminusone.pro/#/): Palmyra IDO KYC gateway (msg#488542).

- [https://ergoraffle.com/raffle/show/8752bf087d1c65f2767f2bf2aa0e8330a26ccbf54b8db55f6a8130bd5e176bf6](https://ergoraffle.com/raffle/show/8752bf087d1c65f2767f2bf2aa0e8330a26ccbf54b8db55f6a8130bd5e176bf6): Token First NFT in Space Contest raffle (msg#489005).

- [https://ergoauctions.org/artwork/b0bca7111c5d25ae59b5b5e60bbc86044198201f93833301c762b45343a9666c](https://ergoauctions.org/artwork/b0bca7111c5d25ae59b5b5e60bbc86044198201f93833301c762b45343a9666c): "Proof of Work JPGs #02 Bobcat" auction (msg#489058).

- [https://ipfs.io/ipns/k51qzi5uqu5dmcgzuwz86d2q3w276s3oul284ixx0j9bskdimqvixmy6heartz/](https://ipfs.io/ipns/k51qzi5uqu5dmcgzuwz86d2q3w276s3oul284ixx0j9bskdimqvixmy6heartz/): "Proof of Work JPGs" collection IPFS (msg#489058).

- [https://sigmanauts.com/podcast/](https://sigmanauts.com/podcast/): Sigmacast podcast web page (weekly dev update and AMA) (msg#488555, 489107).

- [https://app.paideia.im/goodthingsdao](https://app.