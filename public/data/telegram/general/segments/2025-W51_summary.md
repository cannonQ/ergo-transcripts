# Ergo General Chat — 2025-W51 Summary

## Key Topics Discussed

- **ErgoForum Migration & Infrastructure**: The ErgoForum was successfully rebuilt with the original hostname (ergoforum.org). Users experiencing redirect caching issues in Chrome were advised to clear site data or use shift-refresh; DNS propagation was expected to complete within hours. [@qx(), msg#585510-585512, 2025-12-15]

- **Storage Rent & Token Economics**: Data from sigmaspace.io shows tokens are adding a significant percentage of value to storage rent profits for miners. Discussion centered on whether demurrage-based token burning should be implemented, with miners showing resistance. [@kushti, msg#585559, msg#585598, 2025-12-15/16]

- **Native Token vs Wrapped ERG Design Trade-offs**: Historical context revealed that ErgoDex and early DeFi products adopted native token support somewhat accidentally rather than standardizing on wrapped ERG (wERG). Both approaches have trade-offs: wERG requires an additional input step when converting ERG, but provides unified contract logic; native tokens avoid that overhead but lack unified handling. [@kushti, msg#585560 & msg#585600, 2025-12-15/16]

- **Rosen Bridge Watcher Updates**: Watcher operators were requested to update to version 6.0.2 and watcher-app to 3.7.0, adding support for USE and NIGHT tokens. Docker pull/down/up procedure documented. [@Armeanio, msg#585633 & msg#585854, 2025-12-16/20]

- **Palmyra & Chainlink Partnership**: Dan Friedman outlined on-chain warehouse receipts for decentralized trade financing using Chainlink oracles for proof of reserve and IoT devices (weight sensors, motion sensors, cameras) for continuous auditing. Plan includes building out native Ergo oracles with capital from ongoing token sale. Partnership framed as complementary, not exclusive. [@Armeanio, msg#585538 (referenced) & community chat discussion, 2025-12-15/18]

- **ErgoHack Outcomes**: The innovation track had ~10 projects submitted, with approximately half focused on Ergo. Results and details to be shared later; organizers reported exhaustion after intensive 3-day event. [@kushti, msg#585621, 2025-12-16]

- **Block Speed & Testnet Optimization**: Community discussed potential for faster block times and micro-blocks. Challenges include dependencies on block height and timestamp in dApps. A testnet is available for tweaking parameters (difficulty level, block time); interested community members can join the testing effort with minimal code knowledge required. [@kushti (via community chat discussion), 2025-12-18]

- **USE Stablecoin Adoption & Visibility**: Community lead Richi emphasized the underestimated potential of USE, noting barriers to understanding until post-launch. Discussed need for better graphics and launch materials; grid-orders UI work planned. Nautilus wallet logo updates for USE, CLB, and DORT pending. [@Richi, msg#585841-845, 2025-12-20]

- **Community Translation Efforts**: Yulius Kristianto coordinated Javanese translations across multiple Ergo projects (Nautilus Wallet, Ergo Explorer, Ergo Wallet Apps, SigmaUSD), with PRs requiring review. Successfully updated social links and explorer/community website references on 13 major cryptocurrency information sites. [@Yulius, msg#585735-737 & msg#585837, 2025-12-18/20]

- **Quantum Resistance**: Ergo uses the same elliptic curve cryptography as Bitcoin, making it subject to the same cryptographic assumptions and not quantum-resistant. [@kushti, msg#585925, 2025-12-21]

## Important Decisions or Announcements

- **ErgoForum DNS Resolution**: Permanent hostname restored to ergoforum.org; temporary hostname removed; 302 redirect strategy to be used in future migrations instead of 301. [@qx(), msg#585510-512, 2025-12-15]

- **Nautilus Wallet v1.3.2 Released**: Updated logos for USE, CLB, DORT tokens merged and released; Chrome Store publication pending Google review. [@anon_br, msg#585895, 2025-12-21]

- **Ergo Explorer Token Tracking**: Now tracking USE and Dexy Gold LP swaps live. [@Aco Šmrkas, msg#585646, 2025-12-17]

- **Community Chat Time Adjustment**: New Wednesday community chat time moved to 17:00 UTC (from previous time) to accommodate broader timezone coverage. Format: developer updates followed by open discussion; streamed on YouTube with Zoom option for participant interaction. [@Andy L, msg#585713, 2025-12-18]

- **Ergoblockchain.org Site Launch**: New patterns and infographics pages published; community feedback requested for improvement. [@Ergo Platform, msg#585792, 2025-12-19]

- **Testnet Explorer Migration**: Testnet explorer moved to new servers. [@DiscordBridge, msg#585801, 2025-12-19]

- **ErgoSanta 2025 Holiday Event**: Token airdrop event launched with letter-writing participation and DEX trades on MewDex; $1.2k current airdrop pool. [@HQΣr & Aco Šmrkas, msg#585878-885, 2025-12-21]

- **Ergo Foundation Status Clarified**: Glasgow (Ergo Foundation member) confirmed that the Foundation will not be dissolved, refuting earlier speculation. Discussion noted Foundation's original 2.5-year support mandate has evolved; DevDAO expected to take on community development support role. [@DiscordBridge (mx comment), msg#585654-658, 2025-12-17]

## Technical Q&A Worth Preserving

- **Q** (@Josemi, msg#585514): What was the final policy decision on EIP-33 regarding demurrage with tokens?
  **A** (@kushti, msg#585559): No strong consensus emerged on whether to burn tokens; miners in particular opposed token burning. Data still early but tokens appear to add significant percentage value to storage rent profits for miners. Current policy remains unresolved.

- **Q** (@Josemi, msg#585561): Regarding wrapped ERG design—do you mean they should have used wERG instead of native token support everywhere?
  **A** (@kushti, msg#585600): Both approaches have trade-offs. Using wERG everywhere requires an additional input step (taking ERG and issuing wERG), making contracts more lengthy, but provides unified approach. The native token choice was somewhat accidental, driven by early DeFi product decisions (ErgoDex and others) rather than deliberate architectural choice.

- **Q** (@Josemi, msg#585515): Regarding Game of Prompts contract design—why not use only tokens instead of mixed approach?
  **A** (@Mewbie, msg#585563 & @kushti, msg#585560): Legacy context: Jason Davies published wrapped ERG concept before ErgoDex launched. Early DeFi products chose ERG-first then added token support afterward; this choice became somewhat accidental standard rather than deliberate design decision.

- **Q** (@Giufa OnliאΣ, msg#585567): Testnet node won't synchronize after 24h; "no peers available" error.
  **A** (@qx(), msg#585573 & msg#585575): Provided known peer list and full testnet configuration template with reemission activation height 100000001, testnet voting parameters, and required API key hash. Peer discovery should resolve with: `knownPeers = ["213.239.193.208:9023","176.9.15.237:9021","128.253.41.110:9020"]`

- **Q** (@Yulius, msg#585571): Javanese translation PR pending review for 2+ weeks on explorer.
  **A** (@qx(), msg#585745-749 & @kushti, msg#585748): qx() confirmed corrections were made and PR looked fine; kushti requested testing before merge due to past incidents with blindly trusted PRs. qx() agreed to test when reaching that step.

- **Q** (@Anonymous, msg#585920): Is Ergo quantum-resistant?
  **A** (@kushti, msg#585925): No. Ergo uses the same elliptic curve cryptography as Bitcoin and shares the same cryptographic assumptions, therefore not quantum-resistant.

## Links Shared

- [https://ergoforum.org/login]: ErgoForum login page; clear browser cache for redirect resolution
- [https://github.com/ergoplatform/eips/pull/68]: EIP-33 demurrage discussion
- [https://www.ergoforum.org/t/simplifying-game-of-prompts-contracts-why-not-use-only-tokens/5293]: Game of Prompts contract design discussion
- [https://sigmaspace.io/en/storage-rent]: Storage rent data visualization and miner token earnings
- [https://github.com/Lithos-Protocol/Lithos-Client/blob/master/TestnetNode.md]: Lithos testnet node setup instructions with peer configuration
- [https://ergexplorer.com/token/a55b8735ed1a99e46c2c89f8994aacdf4b1109bdcf682f1e5b34479c6e392669]: Ergo Explorer USE token tracking
- [https://ergexplorer.com/token/6122f7289e7bb2df2de273e09d4b2756cda6aeb0f40438dc9d257688f45183ad]: Ergo Explorer Dexy Gold LP tracking
- [https://x.com/chepurnoy/status/2000474762674659372]: kushti Twitter post (content: Ergo-related)
- [https://x.com/chepurnoy/status/2000658621454278801]: kushti Twitter post (content: Ergo-related)
- [https://x.com/mrtn_ergo/status/2000679499008995667]: Mark the Shark Twitter post (content: Ergo-related)
- [https://x.com/rajshah1302/status/2001021332092563572]: External post shared by kushti
- [https://x.com/TheVladCostea/status/2001264758201430289 & status/2001285652663697663]: Vlad Costea posts; kushti promoting "Bitcoin Takeover Podcast" guest appearance
- [https://twitter.com/LADOPIXEL/status/2001387627249897969]: External post shared by kushti
- [https://twitter.com/BTCTKVR/status/2001531686631453036]: External post shared by kushti
- [https://x.com/ergo_platform/status/2001674639106289802]: Ergo Platform social post
- [https://twitter.com/StabilityNexus/status/2001635471563329987]: Stability Nexus post
- [https://x.com/ERG_Armeanio/status/2001749469633843243]: Armeanio post
- [https://creators.spotify.com/pod/profile/ergopodcast/episodes/Ergo-PoW-Blockchain---Dev-Update--Community-Chat---December-18th-e3ci5ht]: Ergo Podcast episode (dev update & community chat)
- [https://sigmanauts.com/podcast/]: Sigmanauts Podcast feed
- [https://podcasts.apple.com/gb/podcast/ergo-pow-blockchain-dev-update-community-chat-december/id1631767451?i=1000741903525]: Apple Podcasts episode
- [https://ergoblockchain.org/patterns]: Ergo blockchain patterns documentation (feedback requested)
- [https://ergoblockchain.org/infographics]: Ergo blockchain infographics
- [https://www.youtube.com/watch?v=1L0z-Gw2HII]: Community chat livestream (2025-12-19)
- [https://github.com/rosen-bridge/watcher/releases/tag/6.0.2]: Rosen Bridge Watcher v6.0.2 release notes
- [https://github.com/rosen-bridge/ui/releases/tag/watcher-app-3.7.0]: Rosen Bridge Watcher App v3.7.0 release notes
- [https://github.com/nautls/nautilus-wallet/pull/317 & 316]: Nautilus Wallet Javanese translation PRs
- [https://github.com/ergoplatform/explorer-frontend/pull/198]: Ergo Explorer Javanese translation PR
- [https://github.com/ergoplatform/ergo-wallet-app/pull/183]: Ergo Wallet Apps Javanese translation PR
- [https://github.com/anon-real/sigma-usd/pull/71]: SigmaUSD Javanese translation PR
- [https://x.com/degens_worldX/status/2002489279705239782]: Degens.world post
- [https://santa.mewfinance.com]: ErgoSanta 2025 letter submission
- [https://t.me/ErgosantaInbox]: ErgoSanta Telegram inbox (letter repository)
- [https://www.coingecko.com/en/coins/ergo]: CoinGecko Ergo listing (updated social links)
- [https://blockspot.io/coin/ergo/]: Blockspot.io Ergo profile (updated)
- [https://www.coincarp.com/currencies/ergoplatform/]: Coincarp Ergo listing (updated)
- [https://ergonaut.space/en/home]: Ergo Wikipedia community portal
- [https://coinpaprika.com/coin/efyt-ergo/]: CoinPaprika Ergo listing (updated)
- [https://cryptorank.io/price/ergo]: CryptoRank Ergo profile (updated)
- [https://digitalcoinprice.com/coins/ergo]: DigitalCoinPrice Ergo listing (updated)
- [https://coincodex.com/crypto/ergo/]: CoinCodex Ergo listing (updated)
- [https://www.cryptocompare.com/coins/erg/overview]: CryptoCompare Ergo overview (updated)
- [https://www.coinglass.com/currencies/ERG]: CoinGlass Ergo data (updated)
- [https://www.coindesk.com/price/erg]: CoinDesk Ergo price (updated)
- [https://coinmarketcap.com/currencies/ergo/]: CoinMarketCap Ergo listing (updated)
- [https://www.livecoinwatch.com/price/Ergo-ERG]: LiveCoinWatch Ergo price (updated)
- [https://github.com/StabilityNexus/BenefactionPlatform-Ergo/tree/main/contracts]: Beene smart contracts repository
- [https://github.com/StabilityNexus/BenefactionPlatform-Ergo/issues/78]: Beene bug bounty program
- [https://github.com/nautls/nautilus-wallet/releases/tag/v1.3.2]: Nautilus Wallet v1.3.2 release (updated token logos)
- [https://twitter.com/chepurnoy/status/2002892475330080844]: kushti Twitter post (2025-12-21, content: Ergo-related)
- [https://x.com/erg_armeanio/status/2002912053078712752]: Armeanio Twitter post (2025-12-21, content: Ergo-related)

## Unresolved Questions

- **Storage Rent & Token Burning Policy**: Whether tokens should be burned as part of demurrage mechanism remains unresolved; miners have shown resistance. Data collection ongoing at sigmaspace.io. [@kushti, msg#585559, 2025-12-15]

- **Block Speed Optimization Direction**: Community discussed faster blocks and micro-blocks but no consensus reached on optimal approach. Dependencies on block height and timestamp in existing dApps create implementation constraints. Testing on dedicated testnet needed. [@kushti discussion, 2025-12-18]

- **Nautilus Wallet Logo Update Timeline**: PR merged and released to Chrome Store but pending Google review publication; exact timeline for user availability unclear. [@anon_br, msg#585895, 2025-