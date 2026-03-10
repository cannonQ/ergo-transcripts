---
title: "Ergo General Chat — 2023-W49"
date_start: "2023-12-04"
date_end: "2023-12-10"
type: telegram_weekly
channel: general
week: "2023-W49"
source: telegram
message_count: 708
categories: [defi, technical, bridges, mining, governance, wallet, community, marketing, ecosystem, nft]
key_terms: [SigUSD, collateralization, oracle, governance, risk, subblocks, soft confirmations, block time, ETA, Rosen, watcher, guard, ADA, cross-chain, protocol development, sigmastate, ChainCash, sidechains, Dexy, hashrate]
---
# Ergo General Chat — 2023-W49 Summary

## Key Topics Discussed

- **sub-blocks (microblocks) Implementation**: Core protocol upgrade being implemented to improve block confirmation speed. @kushti indicates ongoing R&D on sub-blocks EIP with consideration of on-chain commitment requirements and non-invasive (velvet-fork) deployment methods.

- **Rosen Bridge Launch Imminent**: Bridge to Cardano approaching readiness with 35 Ergo watchers and 18 Cardano watchers deployed. Initial supported tokens: ERG, SigmaUSD, SigRSV, RSN, and ADA. @Glasgow confirms launch dependent on sufficient watcher setup; could go live "any day now."

- **SigmaUSD Liquidity and Adoption Stagnation**: Reserve ratio healthy at 535%, but limited pool activity and hesitancy to mint during bull market. Discussion around low demand, lack of farming incentives (vs. Spectrum Farming), and potential use cases for yield-seeking demographics (miners, retirees).

- **Dexy Protocol and Dexy Gold**: @kushti deployed new Dexy contracts with updated fee structure matching Spectrum; awaiting testing. Dexy Gold (stablecoin variant) expected on testnet soon with GORT reward distribution.

- **ChainCash Development**: Peer-to-peer monetary system. First note transactions completed on server; @kushti planning contract finalization and CCIP #0 completion.

- **Oracle Pool v1 and v2**: v1 operational with EF and non-EF members; v2 running for Dexy Gold with GORT rewards. Discussion of potential investment in native Ergo oracles to reduce Chainlink dependency.

- **Palmyra Ecosystem and Chainlink Partnership**: Cross-chain trade financing via on-chain warehouse receipts, proof of reserve, and IoT sensors (weight, motion, camera). Utility beyond Ergo; Rosen Bridge enables broader ecosystem access.

- **GPU Mining and Autolykos Resistance**: Karlsen network analysis; Blake3 hash is ASIC-friendly despite claims. Speculation around hidden premine and keylogger concerns. Ergo maintains GPU-friendliness; miner migration to trending chains noted.

- **SigmaFi Lending Bonds**: Active new bond issuance observed. Users borrowing SigmaUSD against ERG collateral with 24-month terms at ~138% collateralization ratios, suggesting continued bearish sentiment on ERG price in 2025.

- **GitHub Activity Clarification**: Community member questioned low GitHub commits on ergo-core repo. @kushti and @qx() clarified: main development spread across ChainCash, Dexy, Oracle, sidechains (ErgoHack), and sigma-state-interpreter repos; substantial PR queue exists.

---

## Important Decisions or Announcements

- [@Glasgow, msg#456434, 2023-12-04]: sub-blocks "Being implemented now, no ETA."

- [@Glasgow, msg#456437, 2023-12-04]: sub-blocks implementation "at least 2wks" from that date.

- [@kushti, msg#456535, 2023-12-04]: Confirmed 6.0 implementation in sigma started; subblocks R&D ongoing; sidechains ErgoHack project in presentation phase.

- [@Glasgow, msg#457075, 2023-12-07]: Initial Rosen Bridge token support list confirmed: ERG, SigmaUSD, SigRSV, RSN, ADA. "We'll add more tokens from both sides after launch."

- [@kushti, msg#456865, 2023-12-06]: Weekly protocol R&D update: finished ergo-core extraction refactoring PR, versioning discussions ongoing, sub-blocks EIP under consideration, ErgoSummit videos in progress (sidechains, future of finance).

- [@kushti, msg#456868, 2023-12-06]: "so protocol dev still takes most of the time"

- [@Glasgow, msg#457250, 2023-12-08]: "Rosen could go live any day now, only need a few more watchers. Subblocks are still a WIP, no ETA."

- [@Glasgow, msg#457252, 2023-12-08]: Reaffirmed timelines: "Rosen within 2wks; Subblocks at least 2wks"

- [@Glasgow, msg#457368, 2023-12-08]: Projects on the horizon: "DexyGold, ChainCash, Paideia, Rosen, Thz all on the horizon"

- [@Glasgow, msg#457383, 2023-12-08]: "dexy should be on testnet soon"

- [@Glasgow, msg#457514-457515, 2023-12-08]: Rosen watcher updates: new Cardano watcher (total 18); new Ergo watcher (total 35).

- [@Andy L, msg#458020, 2023-12-09]: "special dev update coming tomorrow ergonauts - with an in-depth chat between qx() and mhs_sam about rosen bridge" [posted 2023-12-09, aired 2023-12-10].

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#456433): "When will subblocks be implemented? Any ETA?"
  **A** (@Glasgow, msg#456434, msg#456437): "Being implemented now, no ETA" → later clarified "at least 2wks"

- **Q** (@HQΣr, msg#456436): "Soon or 2 weeks?" [colloquial meme]
  **A** (@Glasgow, msg#456437): "at least 2wks"

- **Q** (@BS, msg#456515-456517): GitHub activity appears low (~4 additions last month vs. 500 prior year); is development slowing?
  **A** (@qx(), msg#456527, msg#456529, msg#456531): @kushti working on ChainCash, Dexy, Oracle, etc. Pointed to GitHub accounts: kushti's personal repos and ergoplatform org repos show ongoing work.

- **Q** (@MavΣrickBg, msg#456625): "Can I run an Ergo node on HiveOS mining rig alongside mining?"
  **A** (@Glasgow, msg#456626): "I'd guess it's not supported there? Can you install other things on hiveOS? If you have access to a command line just try the regular install pathway"
  **A** (@Benny, msg#456664): "I have done this. DM me if you want some help setting it up"

- **Q** (@Unknown, msg#456600): "I accidentally pasted receive address twice in send field; transaction shows complete but funds missing. Can anything be done?"
  **A** (@Unknown, msg#457614-457617): Transaction analysis suggested outputs may have been returned to TradeOgre's wallet, not recipient's. Advised to contact TradeOgre support.

- **Q** (@Sulla, msg#457589): "Just updated Yoroi and my Ergo wallet disappeared. What's happening?"
  **A** (@Unknown, msg#457596-457598): Advised to check Yoroi settings/restore; seed phrase can be imported to new wallet.

- **Q** (@HQΣr, msg#457228): "I have 77 ERG but max I can send is 3.4 ERG. Why?" [UTXO consolidation issue]
  **A** (@GliTcH_, msg#457227): "I just left 1 erg and transferred the balance. That consolidated everything else"
  **A** (@CW, msg#457232): "Gets real painful at .25 erg or less per tx to consolidate"

- **Q** (@Peter M, msg#458046): "How does one become a watcher?"
  **A** (implicit): No direct answer in logs; see Rosen Bridge telegram and tutorial by @qx() (msg#457673).

- **Q** (@Unknown, msg#457710): "What's minimum hardware requirements for watchers?"
  **A** (not answered in chat segment provided)

- **Q** (@Johnny, msg#457106): "Is there a platform on Ergo for buying/selling social media accounts for ERG?" [escrowed transfers]
  **A** (no direct response; topic abandoned as impractical/out-of-scope)

- **Q** (@Me, msg#457928): "Is it possible to build a private messaging dApp on Ergo?"
  **A** (@HQΣr, msg#457930): "We already have that in ergo i guess" → referenced ErgoSanta group for encrypted hex→ASCII message conversion; suggested on-chain validation and ErgoAuth for signature-gated message reading.

- **Q** (@Unknown, msg#457984): "Could Rosen watchers or guards host mixers? Could there be an option on the bridge to mix tokens?"
  **A** (no direct answer; concern about liability raised)

- **Q** (@Mar Bondicat, msg#457175): "Why does Karlsen have such high hashrate (540 THS) if it claims ASIC-resistance like Ergo?"
  **A** (@Unknown, msg#457184-457194): ~44k miners on Karlsen vs. 8k on Ergo (chasing hype); unit conversion issue—1 TH on Karlsen ≠ 1 TH on Ergo due to different algorithms.
  **A** (@Mar Bondicat, msg#457196): Karlsen whitepaper lists Blake3 as algorithm.
  **A** (@kushti, msg#457908): "Blake3 is asic friendly"

- **Q** (@OxCapitulation, msg#458181): "How can we improve Ergo's Certik rating? We score low on governance strength despite voting via miners."
  **A** (@HQΣr, msg#458185): "Most metrics are not done by Certik team; they want payment for audit unless you get 50k votes"
  **A** (@OxCapitulation, msg#458186): CyberScope audit shows better scores; website improvements in progress.

---

## Links Shared

- [https://cruxfinance.io/portfolio]: New Crux Finance build live with positions table; staking/vesting/liquidity position tables coming soon.

- [https://cruxfinance.io/tokens/8b08cdd5449a9592a9e79711d7d79249d7a03c535d17efaee83e216e80a44c4b]: Token detail page (shared by @Rj, msg#456413).

- [https://github.com/satsen/yoroi-ergo-wallet-recover]: Ergo wallet recovery tool for Yoroi; made by @mewtoshi (msg#456589).

- [https://docs.ergoplatform.com/mining/os/]: Official mining OS documentation.

- [https://ergoplatform.org/en/blog/2022-03-22-mining-ergo-on-hiveos/]: HiveOS mining tutorial (shared by @Glasgow, msg#456624).

- [https://teamup.com/ks7p73qvckhcxg63ry]: Events calendar started by @Glasgow (msg#456898) for tracking Ergo community activities.

- [https://t.me/ergopad_chat]: ErgoPad Telegram group for staking/wallet consolidation help.

- [https://t.me/rosenbridge_erg]: Rosen Bridge Telegram group (shared by @Mint LkV, msg#457550; @qx(), msg#458033).

- [https://x.com/cometmooning/status/1731763554309570777]: Comet NFT related tweet.

- [https://twitter.com/ergo_platform/status/1731789374558216307]: Ergo platform vote/poll tweet (shared by @qx(), msg#456540).

- [https://twitter.com/auction_house_/status/1731850589045203217]: Auction House tweet.

- [https://twitter.com/ergo_platform/status/1731851361518587912]: Ergo platform tweet.

- [https://t.me/Ergosanta]: ErgoSanta Telegram group for encrypted messaging experiments (@HQΣr, msg#457931).

- [https://github.com/ChainCashLabs]: ChainCash development repository (shared by @Glasgow, msg#457380).

- [https://dark.fi/manifesto.html]: Dark DeFi manifesto (shared by @Me, msg#457754).

- [https://t.me/darkfichat]: Dark DeFi Telegram group owner: Amir (shared by @Me, msg#457759).

- [https://www.tabbylab.io/]: TabbyPOS point-of-sale system for Ergo payments (shared by @Glasgow, msg#457407).

- [https://ergonaut.space/en/Guides/yield]: Yield opportunities across Ergo ecosystem (shared by @Glasgow, msg#457407).

- [https://sigmafi.app/#/]: SigmaFi bonding/lending interface.

- [https://duckpools.io]: DuckPools trustless yield platform (shared by @Me, msg#457018 and others).

- [https://spectrum.fi/ergo/liquidity]: Spectrum DEX liquidity provision (shared by @qx(), msg#457636).

- [https://www.ergopad.io/]: ErgoPad staking platform.

- [https://phoenixfi.app/]: PhoenixFi (hodlERG) gaming/yield.

- [https://auctioncoin.app/]: Auction House dApp.

- [https://github.com/ergoplatform/sips#governance]: EIP governance voting mechanism (shared by @Glasgow, msg#456807).

- [https://www.ergoforum.org/t/artifical-economic-intelligence-on-ergo-blockchain/4429]: Ergo Forum post on Artificial Economic Intelligence (shared by @Glasgow, msg#457488).

- [https://twitter.com/HouseofChimera/status/1733187756233286023]: House of Chimera explainer on Rosen Bridge (shared by @Diederick, msg#457537).

- [https://x.com/RosenBridge_erg/status/1733178289525833906]: Rosen Bridge Twitter post (shared by @HQΣr, msg#457541).

- [https://youtu.be/bQ2sviHtOQA]: Windows Watcher tutorial by @qx() (msg#457673).

- [https://youtu.be/fF6VmCYcfKY]: Dev update with qx() and mhs_sam on Rosen Bridge (shared by @Andy L, msg#458201).

- [https://www.youtube.com/watch?v=WETVsri4KGI]: Additional Rosen-related video (shared by @qx(), msg#458255).

- [https://rosen.tech/]: Rosen Bridge official website (shared by @qx(), msg#458227).

- [https://rss.com/podcasts/erg/1260024/]: Ergo podcast episode (shared @Unknown, msg#458232).

- [https://docs.ergoplatform.com/uses/chaincash/]: ChainCash documentation (shared by @Glasgow, msg#457376).

- [https://docs.ergoplatform.com/ergo-foundation-2022/#exchanges]: Ergo Foundation exchange listing documentation (shared by @Glasgow, msg#457319).

- [https://docs.ergoplatform.com/ergo-foundation-2022/#ergo-foundation-members]: EF members list (shared by @Glasgow, msg#458222).

- [https://skynet.certik.com/projects/ergo]: Certik Skynet security rating for Ergo (shared by @OxCapitulation, msg#458181).

- [https://www.cyberscope.io/audits/coin-ergo]: CyberScope audit report with higher Ergo scores (shared by @OxCapitulation, msg#458186).

- [https://discord.gg/ergo-platform-668903786361651200]: Ergo Discord invite (shared by @Glasgow, msg#457657).

- [https://t.me/ergcubeswaps]: ErgoCube Swaps channel for DuckPools action tracking (shared by @HQΣr, msg#457902).

- [https://bitcointalk.org