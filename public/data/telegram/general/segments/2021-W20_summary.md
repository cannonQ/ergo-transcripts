---
title: "Ergo General Chat — 2021-W20"
date_start: "2021-05-17"
date_end: "2021-05-23"
type: telegram_weekly
channel: general
week: "2021-W20"
source: telegram
message_count: 3520
categories: [wallet, defi, ecosystem, marketing, mining, nft, bridges, governance, technical]
key_terms: [yoroi, wallet, transfer, confirmations, coinex, sigusd, reserve ratio, minting, sigrsv, exchange, listing, NDA, binance, kucoin, charles hoskinson, video, shilling, difficulty control, difficulty, hashrate]
---
## Key Topics Discussed

- **Ergo Integration with Gravity Network**: After months of work, cross-chain tests completed and Gravity-Ergo-Proxy contracts are almost complete. This partnership enables Ergo to access different chains through Gravity Network, opening up digital assets from blockchain networks integrated with Gravity.

- **Exchange Listing Delays**: Four new exchange listings were in progress but delayed on the exchange side. NDAs remain in place preventing announcement. Armeanio confirmed deals are done, awaiting technical integration assessment from exchanges to estimate listing timing. Community speculation includes KuCoin as potential listing.

- **NFT Minting Guide Published**: Ergo Platform published step-by-step guide for minting picture and audio NFTs on Ergo, demonstrating the ease of creating NFTs using Ergo Utils and Ergo Auction House.

- **Mining Difficulty Adjustment Lag**: Ergo's difficulty adjustment algorithm (linear least-squares over 8-9 epochs) was experiencing lag as miners jumped on during profitability spike then left. This caused temporary transaction delays as difficulty remained high while hashrate dropped. System designed to smooth adjustments over time.

- **Treasury Emission Ending**: The 2.5 year treasury emission period is ending soon. After this, block rewards go entirely to miners. Future funding expected to come from storage rent, community donations, ErgoFundMe dApp, and DeFi application fees.

- **AMM Liquidity Pool Risks**: Discussion of impermanent loss on CoinEx AMM liquidity pools. Users learned that price volatility causes loss of principal in AMM pools, with stability being key to profitability. Several users tested and withdrew from pools after understanding risks.

- **Yoroi Wallet Delays**: Multiple users reported slow transaction processing with Yoroi wallet, particularly during high network activity. Confirmations taking longer than usual due to mining difficulty lag.

## Important Decisions or Announcements

- [@kushti_ru, msg#144391, 2021-05-21]: Announced Swop.fi ERG/USDN pool is live for liquidity provision
- [@Armeanio, msg#144505, 2021-05-22]: BitMart exchange scheduled system upgrade notice shared
- [@Armeanio, msg#144523, 2021-05-22]: Clarified Ergo Foundation strategy to avoid burning treasury on expensive exchange listings, prioritizing organic growth over short-term exchange listing gains
- [@Glasgow｜WON'T DM, msg#144068, 2021-05-21]: Updated pinned welcome message with latest community resources and channels

## Technical Q&A Worth Preserving

- **Q** (@Eijaz): Is Ergo a direct competitor to Bitcoin and does the core team expect to overtake it? Can it be considered as a store of value?
  **A** (@Glasgow｜WON'T DM): Ergo is based on an extended version of Bitcoin's UTXO model. It's "Bitcoin + 10 years of experience and research." Not necessarily competing to replace Bitcoin, but is "much better than bitcoin in terms of usability and pretty much every other measure."

- **Q** (@Syafiq Ramli): What is the main purpose of Ergo? How does it interact with Cardano blockchain?
  **A** (@Ron): Ergo shares the eUTXO accounting model with Cardano, making smart contracts very compatible. Ergo will be an oracle for Cardano. Both are in partnership with Emurgo. Essentially "ERG = UNI + LINK + DAI + XMR for cardano ecosystem, and is its own ecosystem."

- **Q** (@J): Can I send ERG from Yoroi into the node wallet?
  **A** (@Nikita): Yes, use the longer address from Ergo Explorer rather than the shortened one shown in node interface. Transaction worked in ~30 mins.

- **Q** (@Kader): How does the difficulty level of Ergo work? Why is difficulty rising while network hashrates have gone down?
  **A** (@Glasgow｜WON'T DM): Ergo uses linear least-squares adjustment algorithm that smooths over 8 epochs (1 epoch = 1024 blocks). There is a lag between hashrate changes and difficulty adjustment.

- **Q** (@~): Is there a way to reverse a wrong transaction in ERG (Yoroi)?
  **A** (@Unknown): No such thing as a wrong transaction (cannot be reversed).

- **Q** (@leeva): Without pre-sale, from where do Ergo Foundation funds come from?
  **A** (@Armeanio, @Andrey Andreev): From the whitepaper - treasury receives portion of block rewards. Current block reward is 75 ERG: 67.5 to miners, rest to fund. This continues for first 2.5 years, ending soon.

- **Q** (@Guilherme): When Cardano launches DeFi is there a possibility that Ergo will appreciate or has nothing to do with it?
  **A** (@Ron): When DeFi launches for Cardano, access to buy Ergo opens up immediately when ADA and ERG can swap natively. The 50 billion in Cardano's market cap can flow into ERG - just a matter of people knowing about ERG.

## Links Shared

- [ergoplatform.org/en/blog/2021-05-17-ergo-integration-with-gravity-network/]: Announcement of Gravity Network integration completion
- [ergoplatform.org/en/blog/2021-05-18-mint-picture-and-audio-nfts-on-ergo/]: Step-by-step guide for minting NFTs on Ergo
- [ergoplatform.org/en/blog/2021-05-19-ergo-what-are-bitcoin-mixers/]: Blog post explaining Bitcoin mixers and privacy
- [curiaregiscrypto.medium.com/sigmausd-bank-whale-protection-team-db14ed13c407]: Article about SigmaUSD bank whale protection during market volatility
- [curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-may-19th-2086d6670f86]: Weekly dev update May 19th
- [ergonaut.space/en/Cardano]: Detailed explanation of Ergo-Cardano relationship
- [dailydefi.org/tools/impermanent-loss-calculator/]: Calculator for AMM impermanent loss
- [coinmarketcal.com/en/]: Site for tracking exchange listing dates across crypto
- [ergoforum.org/t/discuss-desired-future-exchange-listings/808/18]: Forum discussion on exchange listing strategy
- [swop.fi/info/3PGVJvV8Ep1u7qMkvUs1DYhRyfvArdRbMsD]: ERG/USDN pool on Swop.fi
- [thecryptodrip.com/how-to-mine-erg-guide/]: Mining guide using HiveOS

## Unresolved Questions

- Exact timeline for exchange listing announcements remains TBD pending NDA lift from exchanges
- Mobile Yoroi wallet support for ERG - timeline unclear beyond "coming soon"
- Ledger hardware wallet integration - approximately 2 months mentioned but not confirmed
- Trezor support mentioned to start "soon" after ERG hits top 50
- ErgoDex shared liquidity with Spectrum pools and cross-chain atomic swaps between ADA/ERG - details on implementation TBD
- NFT royalties on resales - not currently implemented, suggested for future development
- Exact mechanics of "tokenising the mixer" for staking-like functionality - implementation details unclear
- Whether ErgoDex will support direct ADA-only swaps or require ERG for fees on Ergo side