---
title: "Ergo General Chat — 2021-W42"
date_start: "2021-10-18"
date_end: "2021-10-24"
type: telegram_weekly
channel: general
week: "2021-W42"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2021-W42 Summary
## Period: 2021-10-18 to 2021-10-24

---

## Key Topics Discussed

- **ERGnome NFT auction success**: The "kushti" edition ERGnome NFT by @FoeniculumNFTs had a successful auction reaching over 700 ERG, marking a significant moment for Ergo NFTs. The auction concluded at 705 ERG.

- **ErgoDex governance token clarification**: Significant community confusion arose from ErgoDex's announcement that they will have their own governance token and are not a direct investment in ERG. This led to price volatility and required multiple explanations that ErgoDex is a separate organization built on Ergo, similar to how Uniswap relates to Ethereum. ERG is still used for transaction fees on the DEX.

- **Emission schedule discussion**: Active discussion about potentially extending Ergo's emission schedule through a soft fork. Miners would vote via config parameters. kushti indicated a community chat would be held in coming days to discuss this alongside storage rent parameters.

- **Block time anomaly**: A 30-minute block occurred on October 24, followed by an 8-minute block. After investigation, determined to be normal PoW variance and large transactions (10x normal block size), likely exchange dust collection paying priority fees, not an attack.

- **Wallet development progress**: Android wallet v1.4 released with cold wallet functionality allowing users to create air-gapped signing devices. Ledger integration being worked into Yoroi. Desktop wallet port of Android wallet in progress.

- **Marketing and growth concerns**: Multiple users raised concerns about marketing approach, price performance, and visibility compared to competitors. Community emphasized grassroots approach is intentional during development phase, with more structured marketing planned once core infrastructure (wallets, incorporation, etc.) is complete.

---

## Important Decisions or Announcements

- [@kushti, msg#221600, 2021-10-22]: Directed developers to ErgoScript by Example repository: https://github.com/ergoplatform/ergoscript-by-example

- [@Glasgow｜WON'T DM, msg#220850, 2021-10-19]: Weekly dev update blog format improved with detailed summaries of each team member's contributions.

- [@Glasgow｜WON'T DM, msg#220824, 2021-10-21]: ErgoHack II results published with winning projects announced.

- [@kushti, msg#220801, 2021-10-21]: Announced AMA scheduled for October 25 (Monday) via Twitter/Telegram.

- [@kushti, msg#221654, 2021-10-22]: Ergo protocol reference client v4.0.15 released.

- [@Armeanio, msg#222156, 2021-10-23]: Confirmed Ergo.meta (unified L2/sidechain framework) currently in R&D phase with more concrete development expected in 2022. Possibility of new framework emerging from UTxO Alliance.

- [@MrStahlfelge, msg#218985, 2021-10-18]: Released video tutorial on Android wallet cold wallet feature.

---

## Technical Q&A Worth Preserving

- **Q** (@unknown, msg#220487): From oracle pool section of ergonaut handbook: "There shouldn't be more complex governance ideas...anyone who has skin in oracle pools should have a vote." This means no oracle pool token, correct?
  **A** (@Glasgow｜WON'T DM, msg#220488): Yes, you don't need one for that, governed with stake slashing.

- **Q** (@unknown, msg#220497): Will there be implementation of "oracle pools" on Cardano or would a Cardano smart contract that wanted to leverage oracle pools always need to come to Ergo blockchain?
  **A** (@Glasgow｜WON'T DM, msg#220152): Discussion linked to https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263 about implementing oracle pools on top of Ergo first.

- **Q** (@Cowbless, msg#222128): Isn't proof of stake basically plutocracy?
  **A** (@ArØhβΣ, msg#222222): There are many that treat mining as a source of income. PoW allows participation without requiring capital to buy tokens upfront, only hardware investment.

- **Q** (@atomicallen, msg#222283): Is ErgoDex on mainnet now?
  **A** (@TMR.ΣRG, msg#222284): Yeah! Graphics will be updated soon. ERG pairs available with SigRSV and SigUSD. Cardano side will be up soon as well, with new pairs.

- **Q** (@Yusuf, msg#222568): How many TPS can ergo do? Is it very scalable?
  **A** (@CW, msg#222576): TPS doesn't mean much, we can bundle thousands of transactions into a block. Also depends on the size of tx. Scaling and throughput are the next bits being built up. Current block time is ~2min.

- **Q** (@unknown, msg#220454): Did the emissions box soft fork go live or was that just proposed?
  **A** (@Glasgow｜WON'T DM, msg#220453): Just a proposal. (@kushti, msg#220456): Let's have a community chat on that in coming days.

- **Q** (@unknown, msg#222150): Is ergo.meta still a project that is being worked on?
  **A** (@Armeanio, msg#222154, msg#222156): Currently in R&D. Ergo.meta is a unified framework for L2 solutions and sidechains. Ergo was designed with this in mind from day 1. More concrete development expected in 2022. Possibility of new framework from UTxO Alliance.

- **Q** (@ragnar, msg#221375): Is there any way to earn interest on ergo? Like lending platforms?
  **A** (@Glasgow｜WON'T DM, msg#221151): You can't stake - it's PoW. Innovative solutions on the way: https://reddit.com/r/ergonauts/comments/q80kju/github_mhssamadaniergoprofitsharingdapp/hgnblfl/

- **Q** (@Jimmy, msg#220760): What's the "redeem" option on ErgoDex?
  **A** (@Glasgow｜WON'T DM, msg#220762): Redeeming from liquidity pool.

- **Q** (@unknown, msg#219076): How do I buy ergodex?
  **A** (@Jennie D, msg#219145): There is no need for a native token :)

- **Q** (@Michael, msg#222258): Does ergo and ergodex are the same company?
  **A** (Multiple users): No, ErgoDex is a separate organization building on Ergo blockchain, similar to how Uniswap is separate from Ethereum.

---

## Links Shared

- [https://curiaregiscrypto.medium.com/understanding-ergo-a-community-driven-ecosystem-6b2037d3ee33]: Article by Armeanio clarifying Ergo/ErgoDex relationship and ecosystem structure
- [https://ergoplatform.org/en/blog/2021-10-15-ergohack-ii-wrap-up/]: ErgoHack II results and wrap-up
- [https://ergoplatform.org/en/blog/2021-10-21-ergohack-ii-results/]: Detailed ErgoHack II winners announcement
- [https://reddit.com/r/ergonauts/comments/qcunei/whats_going_on_behind_the_screens_ergo_weekly_dev/]: Improved weekly dev update format
- [https://reddit.com/r/ergonauts/comments/qcqjpj/ama/]: AMA announcement thread for October 25
- [https://www.nicehash.com/blog/post/join-us-live-with-ergo-on-nice-talk-on-the-29th]: NiceHash livestream scheduled for October 29 with kushti, Armeanio, and Glasgow
- [https://github.com/ergoplatform/ergoscript-by-example]: ErgoScript learning resource
- [https://ergonaut.space/en/Mining]: Mining guide with broad Ergo education
- [https://beta.ergodex.io/]: ErgoDex beta interface
- [https://ergofaucet.org/]: Ergo faucet for testnet tokens
- [https://reddit.com/r/ergonauts/comments/q80kju/github_mhssamadaniergoprofitsharingdapp/]: Profit sharing dapp discussion (ErgoMixer will use this)
- [https://www.ergoforum.org/t/ergo-emission-details-retargeting-via-a-soft-fork/2778]: Emission schedule discussion thread
- [https://www.ergoforum.org/t/good-whales-grant-fund/2779]: Good Whales Grant Fund ($20k grants available)
- [https://docs.google.com/spreadsheets/d/19DlP1nWFvB_LCCsBVC4ryuy--QtlztPQ5cNGuaj2BlI/edit]: Top 20 wallet tracking spreadsheet
- [https://docs.google.com/spreadsheets/d/1c8fa4Qalf49WbdStwNaexLa4qOybwgvDBDiyzrIH9D4/edit]: Emission schedule spreadsheet
- [https://ergonaut.space/en/guerrilla-marketing]: Grassroots marketing guide
- [https://ergoplatform.org/en/hall_of_fame/]: Ergo team and founders page
- [https://beta.ergoraffle.com/raffle/b1a77d249024e30fd965a2a7f4caae6396b12520ad3df37e1cc22e6fe3afc011]: Grassroots marketing fundraising raffle
- [https://beta.ergoraffle.com/raffle/87f18fdfbdd396c5cc3d4940f99be862458d880e143a44f6545b6ad69eb7bb4a]: Charity raffle for Kenyan farmers
- [https://twitter.com/CryptoDomF/status/1451119567762296833]: Community thread explaining Ergo
- [https://www.youtube.com/watch?v=d7C3lyyhSP0&list=PL8-KVrs6vXLTnYjc0Kj43Nbe5r6OfRxUi]: kushti interview series

---

## Unresolved Questions

- Exact timeline for Ergo Foundation incorporation in Singapore (in progress, estimated couple weeks from October 20)
- Emission schedule soft fork parameters and voting mechanism - awaiting community chat
- Storage rent time threshold adjustment (kushti previously proposed 3 years instead of 4, was rejected before hard fork)
- ErgoDex mainnet launch date on Cardano (estimated early November)
- Binance/major exchange listing timeline (no specific date, "eventually")
- iOS wallet development status (being worked on, no ETA given)
- Desktop wallet development timeline (Android wallet being ported, no specific date)
- Ergo.meta concrete implementation timeline (R&D phase, more details expected 2022)
- Logo competition winner announcement (delayed due to most submissions not following guidelines)
- ErgoLend launch timeline (in development post-ErgoHack II)
- Detailed emission schedule change modeling with storage rent revenue projections