---
title: "Ergo General Chat — 2021-W40"
date_start: "2021-10-04"
date_end: "2021-10-10"
type: telegram_weekly
channel: general
week: "2021-W40"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2021-W40 Summary

## Key Topics Discussed

- **Mixer privacy and traceability**: Discussion about ERG tracking from exchanges through the mixer. Exchanges can track funds to the mixer but not beyond. Chain analysis tools for eUTXO models are not yet developed like they are for Bitcoin, though this will likely change. Address hopping withdrawals help circumvent blacklisting.

- **Storage rent and transaction lifecycle**: Explanation of how the eUTXO model handles transactions differently from account-based models. Each transaction creates new boxes, and balance is the sum of all boxes linked to addresses. Only smart contract validation happens on-chain; other contract aspects are off-chain and can be decentralized via bots.

- **ErgoLend uncollateralized lending**: Team developing a trust-based micro-lending platform for ErgoHack II. Borrowers and sponsors build credit history; lenders can contribute to crowdfunded loans. Interest rates set by borrowers, full funding required before distribution to prevent scams. SigmaUSD implementation planned for future iterations.

- **Ergo Pay implementation**: New protocol (EIP) allows dApps to construct complete transactions that wallets sign via QR code or link. Enables functionality like one-click NFT minting, ErgoBox integration, and simplifies complex operations. Already implemented in Android wallet with QR code support.

- **ErgoHack II projects**: Multiple teams building: ErgoLend (uncollateralized lending), Ergo Casino (roulette), Graviton ETH bridge, Ergo Dashboard, Ergo Audio (on-chain music streaming), Ergo Wallet, Ergo Fund, Ergo Subpooling, Ergo Earn, C# Node, plus ~20 solo projects.

- **Ergo Foundation logo contest**: 500 SigmaUSD bounty for designing Ergo Foundation logo. Submissions accepted until Friday via ergoplatform@protonmail.com or team@ergoplatform.org. Community vote to select winner.

- **Ledger hardware wallet integration**: Backend development complete; Yoroi developer working on integration. No specific timeline but progress underway.

- **Network speed improvements and testing**: Discussion of faster confirmation protocols, microblocks, and sidechains. Community testnet available for parameter tweaking (block time, difficulty). Need passionate developers to lead experimentation with scientific observations.

- **SigmaUSD/SigmaRSV mechanics**: Formula clarified: sigRSV value = circulating sigRSV / Equity. To increase RSV value, increase circulating RSV or decrease equity (when people sell at a loss). 2% fee on both minting and redeeming goes to reserves, increasing RSV value.

- **Merge-mined sidechains**: Detailed explanation of how Ergo will implement merge-mined sidechains with trustless pegging via smart contracts and emission contract rewards for mainchain miners delivering sidechain data. Better security model than BIP 301 due to native sidechain data recognition.

## Important Decisions or Announcements

- [@Armeanio, msg#215039, 2021-10-05]: Contacted CoinGecko to request Ergo be added to their DeFi Coins list. Support ticket opened for follow-up.

- [@Armeanio, msg#215360, 2021-10-08]: Ergo Foundation non-profit status will provide legal protection for future partners and counterparty liability. Filing in Singapore. Assists with exchange listings and business partnerships where pure DAO structure is insufficient.

- [@Armeanio, msg#215378, 2021-10-08]: Will not support raffle for exchange listing fundraising if it includes fee percentage going to listing creator. Only direct community funding acceptable.

- [@Armeanio, msg#215923, 2021-10-09]: Logo contest submissions must be emailed to ergoplatform@protonmail.com. Voting next Friday.

- [@Glasgow｜WON'T DM, msg#215888-890, 2021-10-09]: ErgoHack II projects overview published to Discord. Full proposals due by end of hackathon.

- [@kushti khushi, msg#215760, 2021-10-09]: Next Ergo Summit will be virtual around January 2022. Potential in-person gathering for Ergo Summit III around January 2023.

## Technical Q&A Worth Preserving

- **Q** (@Tommy): Is there any option to earn yield on ERG?  
  **A** (@Gazza ｜WON'T DM, msg#214349-356): No native staking yet as ERG is PoW. Staking solution in development (https://www.ergoforum.org/t/a-solution-for-staking/1057). Can provide liquidity on ErgoDEX beta to earn fees. Future tokenization of dApps will enable staking-like functionality.

- **Q** (@TMR.ΣRG): Does anyone know how to calculate the erg:rsv value?  
  **A** (@TMR.ΣRG, msg#214531): sigRSV value = circulating sigRSV / Equity. To raise RSV value, increase circulating sigRSV or decrease equity.

- **Q** (@Michael): Are there any guides for properly utilizing the box-model for smart contracts?  
  **A** (@Luivatra/@Glasgow｜WON'T DM, msg#214955-956): Start with https://github.com/ergoplatform/ergoscript-by-example and https://ergohack.io/solving-for-sigma/

- **Q** (@A): Will Android wallet integrate with DEX like Yoroi does with MetaMask-type function?  
  **A** (@MrStahlfelge, msg#215396-400): Yes, Ergo Pay enables this. dApp constructs entire transaction and sends to wallet for signing. Needed for ErgoDEX integration. Already implemented with QR codes and link support.

- **Q** (@José Ferreira): Is there any way to invest ERG in farm or pool?  
  **A** (@Glasgow｜WON'T DM, msg#215917): ErgoDEX, swop.fi, CoinEx. Must understand impermanent loss before providing liquidity.

- **Q** (@Steven): How does merge-mining work from mining perspective?  
  **A** (@kushti, msg#215809-810): Miners earn both ERG and sidechain tokens. Sidechain constructions will be published soon. Emission contract rewards mainchain miners for delivering sidechain data. Trustless pegging via smart contracts, similar to but better than BIP 301.

- **Q** (@Mo A): How is ERG different from ALGO/SOL/ETH in terms of Cardano interoperability?  
  **A** (@A/@CW, msg#216298-327): Both use eUTXO model, core devs are former Cardano developers, worked jointly on SigmaUSD. Gravity network provides interoperability. SuSy bridge in eUTXO sorted; awaits Cardano PAB/wallet backend. Liquidity pools (ERG:ADA, ERG:AGIX, etc.) will enable cross-chain swaps.

## Links Shared

- [https://www.ergoforum.org/t/a-solution-for-staking/1057]: Proposed staking solution for Ergo
- [https://www.youtube.com/watch?v=P_ED5KN7oOg]: Video tutorial on using ErgoDEX
- [https://github.com/ergoplatform/eips/pull/37]: Ergo Pay EIP proposal
- [https://sigusd.abchris.xyz/]: SigmaUSD calculator for modeling reserve ratios
- [https://ergo.watch/sigmausd]: SigmaUSD statistics and RSV value tracking
- [https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/]: Blog post on off-chain logic and eUTXO efficiency
- [https://ergoplatform.org/en/blog/2021-10-07-utxo-model-transaction/]: Explanation of UTXO model transactions
- [https://github.com/ergoplatform/ergoscript-by-example]: ErgoScript examples repository
- [https://ergohack.io/solving-for-sigma/]: ErgoScript learning resource
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-october-6th-b17b199ff142]: Weekly dev update October 6th
- [https://www.youtube.com/watch?v=Nw3ehU3ILLI]: Armeanio's ErgoHack II introduction video
- [https://www.youtube.com/watch?v=d7C3lyyhSP0]: Root7Z interview with kushti Part 1 (with subtitles)
- [https://www.youtube.com/watch?v=RjeGG0kbxZs]: Root7Z interview Part 2 (PoW vs PoS, energy consumption, Ergo uniqueness)
- [https://www.youtube.com/watch?v=gj2AxhT68yg]: Root7Z interview Part 3 (BPSAA, Cardano relationship, ERG value proposition)
- [https://www.youtube.com/watch?v=vQGSzJHZJNE]: Interview with Patrick Tobler (NFT Maker founder)
- [https://www.youtube.com/watch?v=0tA7ZSRCodE]: ErgoHack II interview with Long Nguyen (MinswapDEX founder)
- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226]: Scalability plan including Taproot atomic swaps and velvet fork
- [https://www.ergoforum.org/t/discuss-desired-future-exchange-listings/808/33]: Discussion on exchange listing strategy and challenges
- [https://utxo-alliance.org/]: UTXO Alliance information
- [https://ergoplatform.org/en/blog/2021-08-16-ergo-graviton-partnership/]: Graviton partnership announcement
- [https://ergoplatform.org/en/blog/2021-05-17-ergo-%C4%B1ntegration-with-gravity-network/]: Gravity network integration details
- [https://docs.cardano.org/plutus/eutxo-explainer]: Cardano eUTXO explainer
- [r/CryptoCurrency post]: Comprehensive Ergo deep dive on Reddit front page (msg#216223-229)

## Unresolved Questions

- Exact timeline for full ErgoDEX launch: Expected end of October for basic release on Ergo, November for Cardano version, but no definitive dates due to development complexity.

- Role of ERG token in ErgoDEX governance: Confirmed ERG is not a governance token for ErgoDEX. Relationship between ERG value and ErgoDEX usage remains unclear to some community members.

- Ergo vs ETC for ETH 2.0 miners: Discussion of which chain miners will migrate to, with gradual migration already happening to Ergo. Network can currently handle ~1% of ETH hashrate; 50x increase would be ~750 TH/s ETH = ~1500 TH/s Ergo.

- Russian-language kushti interview: Community interest in having kushti interviewed in Russian (possibly by Lex Fridman) with subtitles to allow more natural technical discussion. Would need fluent Russian/English interviewer and translator.

- Bitcoin price predictions affecting ERG: Debate over whether BTC hitting $100k by EOY is realistic and how it would affect ERG targets. General consensus that ERG should outperform BTC percentage-wise during bull run.