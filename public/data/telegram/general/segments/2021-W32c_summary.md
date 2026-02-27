# Ergo General Chat — 2021-W32c Summary
**Period:** 2021-08-12 to 2021-08-15

---

## Key Topics Discussed

- **ErgoDEX Beta Launch**: The first eUTXO DEX beta launched on 2021-08-11, requiring Yoroi Nightly and the dApp connector. Users reported common issues including silent swap failures due to slippage, requiring manual refunds from the transaction history. Test tokens (not real value) were distributed via faucet, causing confusion among new users who expected them to have monetary worth.

- **Ledger Hardware Wallet Support**: Community members asked about Ledger support. Progress was confirmed on a Ledger app via Tesseract integration, with a "working version next week" reportedly targeted. End-user availability estimated at a few months out, pending wallet integration (likely Android wallet first).

- **Exchange Listings**: KuCoin had recently listed ERG with ERG/BTC and ERG/USDT pairs. Changelly and Changelly Pro listings were confirmed as "next week" (approximately Tuesday 2021-08-17 per community speculation). Bitcoin.com Exchange listing was also recent. KuCoin lowered withdrawal fees from 1 ERG to 0.01 ERG following community feedback.

- **Wallet Derivation Path Issue**: A recurring issue was identified where users restoring Yoroi wallets in the Android Ergo wallet could not see their ERG, due to derived addresses not being regenerated. The fix in Yoroi was to repeatedly generate new addresses in the Receive tab until the correct derived address appeared — a deterministic but manual process.

- **AgeUSD / SigmaUSD Protocol Clarification**: Community discussion clarified that AgeUSD is the base protocol created in collaboration between the Ergo Foundation, EMURGO, and IOG. SigmaUSD is Ergo's implementation. A Cardano implementation, if pursued by IOHK, would be separately named. ErgoDEX may enable cross-chain ADA/SigmaUSD trading pairs.

- **Ergo NFT Ecosystem Activity**: Multiple community members minted NFTs on the Ergo Auction House during this period, including audio NFTs (REROLABS rapping Biggie Smalls' "Juicy"), pixel art of kushti, and artwork collections (samurai theme by "David" from the Spanish community, ERGnomes). The ergoutils.org Mixer Hops tool was discussed as distinct from ErgoMixer — it obfuscates mixer withdrawal history from wallet viewers without full privacy guarantees.

- **ErgoFund Contracts**: kushti announced a new round of ErgoFund contract testing on-chain, with a Medium post released for community review and feedback.

- **Phishing / Scam Site**: A fraudulent clone of the Ergo platform website was identified. Community was directed to report it via abuse@verisign-grs.com and Google Safe Browsing. The site's registrant was traced to Helsinki, Finland.

- **Ergo LETS**: Discussion referenced the July 2021 blog post on Local Exchange Trading Systems (LETS) on Ergo, with interest in its potential application for economic inclusion in Africa in conjunction with Cardano's mission.

---

## Important Decisions or Announcements

- [@Angie H, msg#187831, 2021-08-12]: ErgoDEX Beta officially launched — first eUTXO DEX. Requires Yoroi Nightly + dApp connector. Blog post: https://ergoplatform.org/en/blog/2021-08-11-ergodex-beta/
- [@Angie H / @Peppers CK, msg#189026 / msg#189032, 2021-08-13]: Weekly roundup confirmed: ErgoDEX Beta live, KuCoin listing live, Changelly + Changelly Pro listing "next week", Graviton partnership announced, ErgoHack 2.0 scheduled for September 24–26, Emurgo to add ERG buy button in Yoroi.
- [@Armeanio, msg#188327, 2021-08-12]: Confirmed additional exchange listings are in progress, under NDA.
- [@kushti khushi, msg#187985–187986, 2021-08-12]: New round of ErgoFund contract testing deployed on-chain (tx: 80ac1bc2...).
- [@MrStahlfelge, msg#190102–190103, 2021-08-15]: Android Ergo wallet v1.1 supports sending to P2S addresses (e.g., Auction House); v1.2 will support sending assets/tokens.
- [@Luivatra, msg#187817, 2021-08-12]: Ledger Tesseract integration — "working version next week" per Tesseract developer update.
- [@Glasgow, msg#189507, 2021-08-14]: Trezor support requires ERG to be in the top 50 by market cap.

---

## Technical Q&A Worth Preserving

- **Q** (@Sambhav, msg#189472): Once all 97M ERG are in circulation, how will transactions be validated / miners be incentivized?
  **A** (@Glasgow / @A, msg#189491 / msg#189479): Miners will be incentivized via transaction fees. Additionally, Ergo's storage rent mechanism charges ~0.14 ERG every 4 years from inactive boxes, recycling lost coins back to miners. This provides long-term miner revenue beyond block subsidies.

- **Q** (@Sambhav, msg#189472): Will the 0.0011 ERG network fee scale adequately as ERG price increases?
  **A** (@Glasgow, msg#189491): Ergo does not use gas fees like Ethereum. It is a self-amendable protocol capable of absorbing new ideas. It can scale using most layer 2 solutions and is referenced in the IOHK Hydra whitepaper.

- **Q** (@blake starky, msg#188918): What does the Mixer Hops tool on ergoutils.org do?
  **A** (@Glasgow, msg#188919 / msg#188925): It routes funds through additional addresses after ErgoMixer withdrawal to obscure the connection to the mixer from casual wallet history inspection. It does not provide full cryptographic privacy — a determined investigator could still trace it. It is distinct from ErgoMixer itself.

- **Q** (multiple users, msg#188740): Users report restoring a Yoroi wallet in the Android Ergo wallet and seeing zero balance / missing addresses. How is this resolved?
  **A** (@MrStahlfelge, msg#188743 / msg#188746): In Yoroi, go to the Receive tab and generate new addresses repeatedly. Yoroi uses a deterministic derivation path (incrementing index), so the same addresses will be derived each time. The Android wallet does not destroy derived addresses but cannot yet restore them — restoration must be done via Yoroi or the full node wallet.

- **Q** (@Unknown, msg#188260–188261): How are Ergo and EMURGO linked for AgeUSD / SigmaUSD?
  **A** (@Ron, msg#188263 / msg#188271–188274): AgeUSD is a novel crypto-backed algorithmic stablecoin protocol created jointly by the Ergo Foundation, EMURGO, and IOG. SigmaUSD (sigmausd.io) is Ergo's blockchain implementation of AgeUSD. A Cardano implementation would be separate. ErgoDEX may enable ADA/SigmaUSD cross-chain pairs.

- **Q** (@Unknown, msg#188739): With which app was the wallet generated, relevant to derivation path issues?
  **A** (@MrStahlfelge, msg#188743–188746): The issue is specific to how Yoroi manages derived addresses. You must navigate to the Receive tab to regenerate the derived address sequence. The derivation is deterministic and will reproduce the same addresses. Android wallet currently cannot restore derived paths from Yoroi.

- **Q** (@DanTheRayMan, msg#189198): Mobile wallet doesn't work with Auction House — says "not a P2P address."
  **A** (@MrStahlfelge, msg#190102): This is expected behavior in Android wallet v1.0. Version 1.1 adds support for sending to P2S addresses such as the Auction House.

- **Q** (@Arc / general): What is the typical block/transfer confirmation time for Ergo?
  **A** (community, msg#189395–189413): ~2 minute block time; exchanges (e.g., CoinEx) may require additional confirmations before crediting, causing apparent delays of 10+ minutes.

---

## Links Shared

- [https://ergoplatform.org/en/blog/2021-08-11-ergodex-beta/]: ErgoDEX Beta launch blog post with setup instructions
- [https://beta.ergodex.io/]: ErgoDEX beta interface
- [https://mint.ergodex.io/]: ErgoDEX test token minting interface
- [https://explorer.ergoplatform.com/en/transactions/80ac1bc2eaf9a770f258b15b5710790ba97d7832dc4f5917fda6c58ba2482dee]: ErgoFund contract testing transaction
- [https://curiaregiscrypto.medium.com/ergofund-code-released-for-review-feedback-2d7a05ed93d5]: ErgoFund smart contract code released for community review
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: Ergo Manifesto
- [https://ergonaut.space/en/SigmaUSD]: SigmaUSD documentation on Ergonaut wiki
- [https://ergoplatform.org/en/wallets/]: Official Ergo wallets page
- [https://ergoplatform.org/en/blog/2021-07-01-lets-start-the-discussion/]: LETS (Local Exchange Trading System) blog post
- [https://github.com/ergoplatform/awesome-ergo/tree/master/graphics/Logo]: Ergo logo assets in SVG and other formats
- [https://safebrowsing.google.com/safebrowsing/report_phish]: Google Safe Browsing phishing report URL (for fraudulent Ergo clone site)
- [https://ergonaut.space/de/ergo-manifest]: German translation of the Ergo Manifesto
- [https://en.cryptonomist.ch/2021/08/14/interview-ergodex-decentralized-exchange-ergo/]: Interview with ErgoDEX developer covering eUTXO model, Ergo uniqueness, Cardano relationship
- [https://www.reddit.com/r/ergonauts/wiki/index]: Community wiki / FAQ
- [https://www.reddit.com/r/ergonauts/comments/p2z0lp/ergodex_performing_a_swap/]: Step-by-step guide to performing a swap on the ErgoDEX beta
- [https://www.reddit.com/r/ergonauts/comments/p2yluz/about_storage_rent_fee_what_exactly_do_erg/]: Reddit discussion on storage rent mechanics
- [https://ergonfts.org/]: Ergo NFT viewer
- [https://t.me/ergo_nft_trading]: Ergo NFT trading Telegram group
- [https://t.me/ErdogeCommunity]: Erdoge community Telegram (also heavily abused by scammers during this period)
- [https://www.fool.com/the-ascent/cryptocurrency/articles/what-is-ergo-erg-and-should-you-buy-it/]: Motley Fool article on Ergo published 2021-08-12

---

## Unresolved Questions

- **Changelly listing date**: Confirmed as "next week" by Armeanio (msg#190045) but no specific date given. Community speculation suggested Tuesday 2021-08-17; Changelly Pro expected slightly later.
- **Yoroi mobile (iOS) ERG support**: Confirmed on to-do list but no timeline. Android wallet confirmed; iOS version of Android wallet described as "in the works" (msg#189785).
- **Ledger Live integration**: No plans confirmed; Ledger app in development for use with dedicated wallets only (not Ledger Live natively).
- **ErgoDEX Cardano launch timeline**: No firm date for ErgoDEX live on Cardano post-Goguen/Alonzo. "Beta live on Cardano on Goguen release date" mentioned informally (msg#189589) but not officially confirmed.
- **ErgoFund**: Code released for review; no deployment or governance timeline announced.
- **Fee estimation API**: Not directly raised this week but touched on in passing; the node's fee estimation API was noted in prior discussions as untested by applications.
- **Audio/video NFT format support**: REROLABS asked about supported formats (MP4 vs GIF) for picture NFTs on the Auction House (msg#189686) — no definitive answer recorded in this segment.