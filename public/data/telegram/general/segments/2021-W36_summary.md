---
title: "Ergo General Chat — 2021-W36"
date_start: "2021-09-06"
date_end: "2021-09-12"
type: telegram_weekly
channel: general
week: "2021-W36"
source: telegram
message_count: 1842
categories: [defi, ecosystem, mining, wallet, community, governance, nft, marketing, technical]
key_terms: [concurrency, ErgoDEX, off-chain bots, eUTXO, decentralized, Alonzo, Cardano, smart contracts, September 12, hard fork, Nanopool, hashrate, pool dominance, Flypool, 2miners, Binance, Changelly, Kucoin, CoinEx, exchange listings]
---
# Ergo General Chat — 2021-W36 Summary
## Key Topics Discussed

- **ErgoDEX Concurrency Solution**: ErgoDEX refined its solution to the UTXO concurrency issue, making the off-chain execution decentralized with minimal protocol changes. The solution involves distributing AMM bot code, though game theory for keeping operators honest remains unclear. Transactions expected to complete in "minutes."

- **Mining Pool Distribution**: Significant improvement in mining decentralization with Nanopool dominance dropping below 40% as Flypool and 2Miners gain hashrate. Network hashrate reached all-time highs. Community actively encouraging miners to switch away from Nanopool.

- **Yoroi Wallet Sync Issues**: Multiple users reported Yoroi failing to sync properly on September 9th, with transactions confirmed on explorer not appearing in wallet. Issues persisted for 12+ hours before resolution. Some users had problems restoring Ergo wallets from seed phrases showing different addresses than expected.

- **Exchange Listings Philosophy**: Discussion about why Ergo hasn't pursued Binance listing first. Team explained strategy of avoiding early Binance listing to prevent exchange from controlling 90%+ of volume and ERG supply, which could enable manipulation. Preference for building up on smaller exchanges first (KuCoin, CoinEx, Gate.io).

- **SigmaUSD/SigRSV Issues**: Reserve ratio dropped below 400%, preventing new SigmaUSD minting. Users reported problems redeeming SigRSV with multiple failed transactions requiring refunds. Suggestion to use ErgoDEX beta for trading rather than direct redemption.

- **Staking Discussion**: Repeated questions about staking for PoW chain. Solution proposed using ErgoDEX liquidity provision or future ErgoMixer LP options, with formal staking proposal at ergoforum.org/t/a-solution-for-staking/1057.

## Important Decisions or Announcements

- [@Armeanio, msg#205304, 2021-09-10]: Network hashrate at all-time high with Nanopool dominance being reduced.
- [@Glasgow｜WON'T DM, msg#205698, 2021-09-12]: ErgoDEX expected to launch on Cardano mid-October according to recent interview.
- [@kushti khushi, msg#204837, 2021-09-10]: Confirmed ErgoDEX will use ERG on Ergo network and ADA on Cardano network natively, no separate ErgoDEX token initially.
- [@Glasgow｜WON'T DM, msg#205832, 2021-09-12]: Ergo team congratulated Cardano on successful Alonzo hard fork event.

## Technical Q&A Worth Preserving

- **Q** (@Michael): What is the relationship between AgeUSD, SigUSD, SigRSV, and ERG?
  **A** (@leeva, msg#204178): AgeUSD is the algorithm name, SigUSD is the stablecoin implementation on Ergo, backed by SigRSV which is a liquidity pool containing ERG reserves.

- **Q** (@GoodHabits.xml, msg#205014): Would deploying bots for transactions make swapping more expensive? Ilya said transactions done in "minutes literally" - isn't that bad?
  **A** (@Green_Diamond II, msg#205023): Decentralized PoW isn't the best tool for high-speed trading, it's optimized for building trust, like a Swiss mountain bank vs crazy trading arena.

- **Q** (@Jon, msg#204029): What are the downsides of ERG?
  **A** (@Glasgow｜WON'T DM, msg#204031): The node breaks sometimes requiring resyncs. Not enough dev documentation yet.

- **Q** (@Minh Hòa, msg#205040): Has Ergo experienced any 51% attacks?
  **A** (@Unknown, msg#205047): None so far. Mining pool distribution can be checked at miningpoolstats.stream/ergo.

- **Q** (@jj, msg#205144): What are some popular tokens on Ergo?
  **A** (@CW/Gazza, msg#205149-157): Ergo has native tokens that don't require smart contracts to create. Examples include Erdoge, Kushtis, Gazzacoin. Can be created easily at ergoutils.org using ErgoScript, not Solidity.

- **Q** (@Pierre CF, msg#205114): On ErgoDEX Beta, are WT_ERG and WT_ADA testnets tokens?
  **A** (@Luivatra, msg#205116): Yes, those are test tokens. Real trading pairs are ERG/SigUSD and ERG/SigRSV.

- **Q** (@Jackson, msg#205444): Is there an option to stake Ergo?
  **A** (@Glasgow｜WON'T DM, msg#205446): Soon. See proposal at ergoforum.org/t/a-solution-for-staking/1057.

## Links Shared

- [https://youtu.be/xlDlNmIFrFM]: Trading With Paul interview with ErgoDEX team covering concurrency solution, launch timeline, and Ergo products (mixer, NFTs, oracles, Ledger status, marketing)
- [https://youtu.be/kStni_eslxE]: Max Maher video about Ergo reaching 86K+ views, driving significant new interest
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-september-8th-970e29b4fcc4]: Weekly dev update September 8th
- [https://ergoplatform.org/en/blog/2021-09-07-ergohack-ii/]: ErgoHack II announcement with registration deadline September 15th
- [https://beta.ergoraffle.com/]: ErgoRaffle platform for community fundraising
- [https://twitter.com/ergomergoadargo/status/1435572328671363078]: Infographic comparing Ergo's fair launch tokenomics vs other projects with VC/insider allocations
- [https://ergo101.org/]: Primer/introduction to Ergo (non-whitepaper)
- [https://ergoplatform.org/en/blog/2021-08-04-the-ergonaut-handbook/]: The Ergonaut Handbook covering tokenomics and ecosystem
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: The Ergo Manifesto
- [https://medium.com/meld-labs/concurrent-deterministic-batching-on-the-utxo-ledger-99040f809706]: Meld Labs paper on UTXO batching design
- [https://github.com/ergolabs/ergo-dex#off-chain-execution]: ErgoDEX GitHub documentation on off-chain execution
- [https://www.ergoforum.org/t/discuss-desired-future-exchange-listings/808]: Forum discussion on exchange listing strategy

## Unresolved Questions

- Exact mechanism for how ErgoDEX off-chain bots remain honest/trustless - game theory not fully explained
- Timeline for Ledger hardware wallet support - described as "soon" but no specific date given
- Whether ErgoDEX will eventually have a governance token - stated as "may be added later if needed with fair launch"
- How to properly redeem SigRSV when transactions keep failing - workaround is to trade on ErgoDEX instead
- Proper amount of ERG to send with SigRSV redemption transactions - not clearly documented
- Trezor hardware wallet support - dependent on Ergo reaching top 50 market cap ranking
- Resolution of Yoroi wallet restoration issue where Ergo wallet shows different address than expected despite correct seed phrase