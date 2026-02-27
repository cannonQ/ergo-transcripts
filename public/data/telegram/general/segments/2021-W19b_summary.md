# Ergo General Chat — 2021-W19b Summary
**Period:** 2021-05-12 to 2021-05-14

---

## Key Topics Discussed

- **ERG Price Rally and Market Behavior**: ERG experienced a significant price rally from ~$4.80 to nearly $10 during this period, holding up well relative to BTC/market-wide dumps triggered by Elon Musk's Tesla-Bitcoin announcement. Community attributed the rally to growing awareness, organic discovery (especially from Cardano community), and upcoming exchange listings.

- **SigmaUSD Bear Whale Saga**: A bear whale who had been front-running oracles and exploiting the SigmaUSD protocol in v1 lost approximately 75K ERG and 170K ERG in separate incidents after the v2 deployment. kushti repeatedly urged SigmaRSV holders to redeem if in profit, warning that a reserve ratio of 2089-2300% was unhealthy and attracted manipulation. The reserve ratio lock mechanism (400-800%) was explained to new users.

- **Spectrum DEX (ErgoDex) and Cardano Integration**: Multiple community members shared the ErgoDex announcement for Cardano, with testing on Ergo expected in July. The DEX is described as combining AMM and order book models, deployable on both ERG and ADA chains. Community expressed anticipation for direct ERG/ADA swaps.

- **Exchange Listings Under NDA**: Armeanio (biz dev) confirmed that announcements for new exchange listings were under NDA and would be revealed the following week (week of 2021-05-17). Community member Gazza cited this as confirmation of 4 new exchanges; Glasgow confirmed Armeanio's credibility as biz dev lead.

- **Hotbit Withdrawal Issues**: Widespread reports of failed or stuck ERG withdrawals from Hotbit following a hack. Community consensus was to use CoinEx or Gate.io instead. Dmitry Usov advised contacting Hotbit support and warned against using Hotbit until issues resolved.

- **ErgoMixer Tokenomics and Liquidity Provision**: Discussion of upcoming ErgoMixer token for rewarding liquidity providers (boxes). Providing ERG to mixer boxes also achieves mixing of one's own ERG. Token distribution details and yield rates were described as still in discussion.

- **Ledger Hardware Wallet Support**: Ledger had integrated Ergo network (blog post shared). Full Yoroi+Ledger support estimated ~2 months out. Workaround discussed: using Waves Exchange with a Ledger hardware wallet to hold ERG with user-controlled private keys, though these are wrapped Waves tokens, not native ERG.

- **Wallet Landscape**: Yoroi Chrome extension confirmed as the primary wallet. Mobile Yoroi not yet supported for ERG. Yoroi dApp connector in nightly build (not yet public release). No Android/iOS native wallets yet. Ledger integration in progress.

---

## Important Decisions or Announcements

- [@Armeanio, msg#133166, 2021-05-14]: Gate.io lowered ERG withdrawal fee from 2 ERG to 0.5 ERG due to the price increase.
- [@Armeanio, msg#134456, 2021-05-14]: Confirmed working on adding more mining pools; "Already have some things in motion." Hashrate distribution described as a priority.
- [@Armeanio, msg#134444, 2021-05-14]: Offered to provide official graphics to community members making ERG merchandise.
- [@Glasgow, msg#134555/134707, 2021-05-14]: Confirmed Armeanio stated new exchange listing NDAs expire next week (week of 2021-05-17), with 4 new exchanges anticipated.
- [@kushti, msg#134087, 2021-05-14]: Tweeted that the bear whale "fixed another loss of ~75K ERG" and urged RSV holders to redeem profits; reserve ratio described as unhealthy for RSV holders.
- [@kushti, msg#133189, 2021-05-14]: Repeated urgent call for SigmaRSV holders to redeem if in profit, stating 2300% reserve ratio is not safe.
- [@Dmitry Usov, msg#134546, 2021-05-14]: Advised community: "Do not use Hotbit. Many withdrawal issues."
- [@Glasgow, msg#133995, 2021-05-14]: Confirmed ErgoDex is an AMM+order book DEX running on both ERG and ADA chains.

---

## Technical Q&A Worth Preserving

- **Q** (@Team Team, msg#132726): Can a PoS coin implement privacy functions like ErgoMixer? Or is it only possible with PoW?
  **A** (@kushti, msg#132727): Privacy tech is not related to consensus.

- **Q** (@HGTP://SNAFU, msg#132513): Did SigmaUSD play a significant role in ERG's stable price during the flash market dump?
  **A** (@Glasgow, msg#132514): SigmaUSD remains more stable due to price smoothing. It doesn't directly impact the ERG spot price — rather, the bear whale was trying to suppress the ERG price while holding a short position (SigmaUSD minting is equivalent to shorting ERG).

- **Q** (@Unknown, msg#134013): Is there a supply cap on SigmaRSV?
  **A** (@Glasgow, msg#134084): You can only mint within the contract bounds, but there is no supply cap on SigmaRSV as far as known.

- **Q** (@Ada's Dream, msg#134254): Why would anyone want to buy/mint AgeUSD if it cannot be used anywhere?
  **A** (@Glasgow, msg#134258-134259): SigmaUSD can be used as a short position on ERG, or as decentralized stability without going through an exchange (e.g., a miner who wants to secure profits without dumping ERG). It is also accepted on Cryptocurrency Checkout and will be available on ErgoDex. Glasgow noted low current utilization is why RSV redemption is recommended.

- **Q** (@Ada's Dream, msg#134269): What is a healthy reserve ratio for SigmaUSD?
  **A** (@Glasgow, msg#134271): The contract locks between 400–800%. The current ratio above that range is due to the bootstrapping period where there was no upper limit imposed.

- **Q** (@DD RUFF, msg#133975): Why does kushti keep recommending withdrawal from the SigmaUSD reserve? Doesn't constant in/out prevent a robust reserve from forming?
  **A** (@Unknown, msg#133982): Nobody will mint SigmaUSD at the oracle price of $6.40 when market price is $8.70 (i.e., minting is not incentivized when the oracle lags). **A** (@Glasgow, msg#133983): The healthy range for the reserve is 400–800%; the current 2300%+ is not a healthy state.

- **Q** (@Srotapanna, msg#134490): What chain/network should be selected when withdrawing ERG from an exchange to Yoroi?
  **A** (implied by context, @Dmitry Usov/community): Select ERG chain; Yoroi only supports native ERG, not wrapped versions. Use the Chrome extension, not mobile.

- **Q** (@Unknown, msg#134451): Do Ergo devs have a strategy to onboard ETH miners when ETH 2.0 rolls out?
  **A** (@Armeanio, msg#134453-134454): Pointed to WhatToMine — ERG ranks 3rd. Working on adding more pools. **A** (@Glasgow, msg#134495): "We won't need to — Erg's algorithm is pretty great."

- **Q** (@Gazza, msg#134568): Is there Ledger support available now for ERG?
  **A** (@Gazza, msg#134574/134579): Workaround available via Waves Exchange — set up a Waves account authenticated by Ledger, send ERG to that address. User controls private key via Ledger; Waves never owns the coins. Official native Ledger support estimated ~2 months out.

- **Q** (@Dmitry Usov, msg#132336): What does the balance shown in the Yoroi dApp connector represent (showing 1.198216776)?
  **A** (@c8, msg#132339): That figure is in nanoERGs, not ERG.

- **Q** (@Unknown, msg#134057): Why does SigmaUSD show ERG price at $6 when market is $8+?
  **A** (@Unknown, msg#134075): SigmaUSD uses price smoothing (oracle averaging), so the displayed price lags the spot market.

---

## Links Shared

- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-may-12th-cb89a8a138]: Weekly developer update for May 12th, shared by Armeanio and Glasgow.
- [https://ergoplatform.org/en/blog/2021-05-13-bearwhale-saga/]: Official blog post documenting the SigmaUSD bear whale exploit and the v2 deployment outcome.
- [https://www.reddit.com/r/ergonauts/comments/naz917/weekly_dev_discord_pdf_dump/]: Weekly dev Discord PDF dump on Reddit.
- [https://www.reddit.com/r/CryptoCurrency/comments/nbp72z/ergo_erg_some_actual_dd/]: Due diligence post on r/CryptoCurrency — community urged upvotes without brigading comments to avoid removal.
- [https://www.reddit.com/r/cardano/comments/nbbcen/ergodex_for_cardano_will_be_turn_on_in_july_for/]: Reddit post about ErgoDex for Cardano launching for testing on Ergo in July.
- [https://ergoplatform.org/en/blog/2021-05-07-ledger-network-integrates-ergo-network/]: Official blog post confirming Ledger network integration for Ergo.
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: The Ergo Manifesto — shared repeatedly to orient new community members.
- [https://www.reddit.com/r/ergonauts/comments/mye6xh/faq/]: Community FAQ on Reddit, repeatedly shared for new members.
- [https://ergonaut.space/ergodex]: ErgoDex wiki page.
- [https://ergodex.io/]: ErgoDex landing page (noted as not finished yet by yasha/ErgoDex dev).
- [https://explorer.ergoplatform.com/en/rich-list]: Ergo rich list / top holders.
- [https://www.ergoforum.org/t/ergo-contributors-donation-list/295]: Ergo contributors donation list on the forum.
- [https://ergoplatform.org/en/blog/2021_03_26_eth_vs_erg/]: Blog post comparing ETH vs ERG (shared in context of gas fees discussion).
- [https://thecryptodrip.com/ergo-deep-dive/]: Third-party deep dive article on Ergo.
- [https://www.reddit.com/r/ergonauts/comments/nc699k/please_redeem_if_you_are_in_profit_reduce_the/]: Reddit post urging SigmaRSV holders to redeem profits to reduce manipulable reserve.
- [https://ergoplatform.org/en/blog/2021-05-12-ergomixer/]: Blog post on ErgoMixer.
- [https://ergoplatform.org/docs/CBT_2020_ZeroJoin_Combining_Zerocoin_and_CoinJoin_v3.pdf]: ZeroJoin academic paper — describes ErgoMixer's cryptographic basis combining CoinJoin and ZeroCoin.
- [https://cryptocurrencycheckout.com/coin/sigmausd]: SigmaUSD accepted as payment on Cryptocurrency Checkout.
- [https://www.ergoforum.org/t/a-solution-for-staking/1057]: Forum post discussing a staking solution for Ergo (PoW-based, via ErgoMixer liquidity provision).
- [https://twitter.com/ergoplatformorg/status/1393220618884091905]: Official Ergo tweet (context: bearwhale/SigmaUSD situation update).
- [https://twitter.com/ergoplatformorg/status/1393101963986968577]: Official Ergo tweet about bearwhale losses.
- [https://ergonaut.space/en/Mining]: Ergo mining wiki page.
- [https://ergo.herominers.com/]: Herominers ERG pool.
- [https://www.reddit.com/r/ergonauts/comments/n9usw5/how_to_purchase_ergo_on_coinex_using_cardano_or/]: Guide for purchasing ERG on CoinEx using ADA or other assets.
- [https://ergoplatform.org/en/exchanges/]: Official list of exchanges supporting ERG.
- [https://www.ergoforum.org/t/discuss-desired-future-exchange-listings/808]: Forum thread on desired exchange listings.
- [https://sigmaverse.io/]: Ergo dApps directory.
- [https://twitter.com/CuriaCrypto/status/1393252456952258561]: Curia Crypto tweet (shared by Armeanio, context: exchange/trading update).

---

## Unresolved Questions

- **New exchange listing details**: Armeanio confirmed 4+ new exchange listings were under NDA, to be announced the following week. Names of exchanges unknown at time of chat.
- **Hotbit withdrawal resolution**: Multiple users had stuck ERG withdrawals from Hotbit with unresolvable TXIDs. No confirmed timeline for full resolution; Dmitry Usov advised using support channel.
- **ErgoMixer token yield rate**: Yield rate and full tokenomics for the ErgoMixer liquidity provision token were described as "still in discussion" — no figures confirmed.
- **iOS/Android wallet**: No native mobile wallet available; no confirmed release date.
- **Ledger + Yoroi official integration**: Estimated ~2 months but no confirmed date. The Waves Exchange workaround involves wrapped tokens, not native ERG.
- **SigmaUSD oracle price lag**: Users noted the SigmaUSD oracle was showing ~$6 while spot was ~$8.70+. Whether/when the price smoothing would catch up was not addressed technically.
- **Gravity Protocol cross-chain swaps**: Mentioned as enabling BSC and multi-chain swaps but no technical details or timeline provided.
- **ErgoDex ADA/ERG cross-chain swap timeline**: Glasgow indicated ADA/ERG swaps would not be available at the June launch — timeline for cross-chain functionality not specified.