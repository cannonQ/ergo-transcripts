---
title: "Ergo General Chat — 2021-W31 (Part B)"
date_start: "2021-08-02"
date_end: "2021-08-08"
type: telegram_weekly
channel: general
week: "2021-W31"
part: "b"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2021-W31b Summary
**Period:** 2021-08-04 to 2021-08-06

---

## Key Topics Discussed

- **KuCoin Listing**: ERG trading went live on KuCoin on 2021-08-05 at 10:00 UTC with ERG/BTC and ERG/USDT pairs. Deposits experienced multi-hour delays due to KuCoin infrastructure issues on launch day; KuCoin support acknowledged the delay. Withdrawals opened 24 hours after trading.

- **KuCoin $30,000 ERG Prize Pool Campaign**: KuCoin launched a listing campaign with a $30,000 ERG prize pool for qualified users. Activities included early deposit bonuses (first 200 users) and a trading volume competition. ERG/USDT pair was made available for KuCoin Grid Trading bot at launch.

- **ErgoDEX Beta Status**: Private beta was confirmed live on Ergo mainchain. A developer noted that on launch it would not have a native token, and the first version would support limited pairs (ERG, SigmaUSD, SigmaRSV). A Discord post indicated public release targeting Monday 2021-08-09. Cardano testing was pending Alonzo White access.

- **US Senate Crypto Amendment (Infrastructure Bill)**: The White House endorsed the Warner-Portman amendment which exempts only PoW miners from new crypto broker reporting requirements, potentially disadvantaging PoS networks. This was noted as bullish for Ergo specifically as a PoW chain.

- **eUTXO Model Discussion**: Community members explained the eUTXO model to newcomers. Points raised included: eUTXO is more efficient for scaling than account-based models, UTXO change addresses are a normal part of transactions (not a bug), and parallel transaction processing properties.

- **UTXO Change Address Confusion**: A miner (`smash`) reported apparent missing ERG after transactions showing a third unfamiliar output address. Community members identified this as standard UTXO change address behavior, not an attack or loss.

- **Ergo Manifesto Translations**: Community members (Juan/Peppers CK in Spanish, RETRO in Hindi) were actively translating the Ergo Manifesto. Glasgow ran a tip giveaway incentivizing community members to read the manifesto.

- **NIPoPoWs and Cardano Interoperability**: Brief technical discussion clarifying that Cardano uses NIPoPoWs to communicate with PoW eUTXO blockchains (Ergo, CKB, LTC), and that ErgoDEX is a Plutus port built on Ergo rather than a native Cardano DEX.

- **Nanopool Mining Pool Centralization**: Nanopool's share of Ergo hashrate was cited at ~54% of the last 1,000 blocks (down from ~60%). Community members noted this as a concern and referenced ongoing discussion in the Ergo Discord #smart-pools channel.

---

## Important Decisions or Announcements

- [@Glasgow, msg#177893, 2021-08-04]: KuCoin ERG trading confirmed live tomorrow at 10:00 UTC, withdrawals open 24 hours later.
- [@CW, msg#177821, 2021-08-04]: ErgoDEX timeline updated.
- [@Dmitry Usov, msg#179554-179556, 2021-08-05]: ErgoDEX first version will not have a native token; beta running, refund feature pending completion before public launch.
- [@Glasgow, msg#179671, 2021-08-05]: ErgoDEX private beta live on Ergo; Alonzo White testnet access expected within days for Cardano testing.
- [@Foeniculum NFTs, msg#180251, 2021-08-05]: ErgoDEX dev stated on Discord that public release targeting Monday (2021-08-09).
- [@Glasgow, msg#179824-179825, 2021-08-05]: ErgoMixer is being tokenized so users can earn yield off mixer fees.
- [@CW, msg#177941, 2021-08-04]: Ergonaut Handbook published at ergoplatform.org.
- [@Glasgow, msg#179489, 2021-08-05]: KuCoin $30,000 ERG listing campaign announced.
- [@Dmitry Usov, msg#179588, 2021-08-05]: ERG/USDT pair available for KuCoin Grid Trading bot.
- [@Angie H, msg#179579, 2021-08-05]: ERG now live on KuCoin and TradingView.
- [@Bardamug, msg#178823, 2021-08-04]: Yoroi 4.6.1 fix incoming for the "send all assets" checkbox issue, following community bug report.

---

## Technical Q&A Worth Preserving

- **Q** (@smash, msg#180482): After sending ERG from the desktop wallet, a third unfamiliar address appeared in transactions with extra ERG going to it. Where did this address come from and is ERG missing?
  **A** (@Gazza, msg#180493): This is standard eUTXO behavior. In UTXO-based systems, when you send a partial amount, the wallet must spend the entire input UTXO and send the change back to a new change address controlled by your wallet. The "third address" is your own change address. Looking at the explorer transactions, the amounts appear consistent with this pattern rather than an attack.

- **Q** (@Unknown, msg#179703-179705): What is the benefit of eUTXO over account-based models?
  **A** (@Glasgow, msg#179710-179712): UTXO is Bitcoin's original simpler design. Account-based models store more state making them easier to develop on, while UTXO is more efficient for scaling. Each UTXO transaction is self-contained and can be validated independently.

- **Q** (@Unknown, msg#179718): In account-based systems, do concurrent transactions on the same account require sequential locking?
  **A** (@Kryptik, msg#179721): The technical requirement is "serializability" — the result must be the same as if transactions were executed in some sequential order, but this doesn't guarantee a specific ordering of concurrent transactions.

- **Q** (@Unknown, msg#179724): Is MEV less of a problem in PoS?
  **A** (@Kryptik, msg#179727): Generally yes, but it's not a non-problem and depends on implementation. [Linked Dragonfly Research MEV article for detail.]

- **Q** (@Unknown, msg#179553): Will ErgoDEX have a governance token similar to AAVE?
  **A** (@Dmitry Usov, msg#179556): First versions will not have a token. Focus is on running the beta first.

- **Q** (@Unknown, msg#180210): Is Ergo built on the Cardano blockchain?
  **A** (@Foeniculum NFTs, msg#180212, 180216, 180222): No. Ergo has its own independent blockchain with its own scripting language (ErgoScript). It is PoW-based. ErgoDEX is a Plutus port built on Ergo, not a native Cardano application. Ergo also implements NIPoPoWs enabling interoperability with Cardano.

- **Q** (@Cancian, msg#180468-180470): Are there tokens on the Ergo blockchain other than ERG? Is the stablecoin released?
  **A** (@Gazza/leeva, msg#180472-180473): Yes, SigmaUSD (the Ergo stablecoin) has been live for months at sigmausd.io.

- **Q** (@Unknown, msg#179621): Is there a way to earn passive income on ERG?
  **A** (@Dmitry Usov/Glasgow, msg#179626-179634): Options include: SigmaUSD (for leveraged long/short exposure), AMM liquidity provision on Coinex or ErgoDEX (coming), and the KuCoin Grid Trading bot. ErgoMixer tokenization will also provide fee yield. Glasgow noted that with a wide enough grid range the bot can be left running passively for months.

---

## Links Shared

- [https://ergoplatform.org/en/blog/2021-08-04-the-ergonaut-handbook/]: Ergonaut Handbook — onboarding guide for new community members
- [https://www.kucoin.com/news/en-ergo-listing-campaign-enjoy-a-30000-in-erg-prize-pool]: KuCoin $30,000 ERG listing campaign details
- [https://trade.kucoin.com/ERG-USDT]: KuCoin ERG/USDT trading pair
- [https://trade.kucoin.com/ERG-BTC]: KuCoin ERG/BTC trading pair
- [https://robot.kucoin.com/web/index]: KuCoin Grid Trading bot — ERG/USDT pair available
- [https://exchange.bitcoin.com/erg-to-btc]: Bitcoin.com Exchange ERG/BTC pair
- [https://sigmausd.io/#/]: SigmaUSD stablecoin interface
- [https://ergoauctions.org]: Ergo Auctions NFT marketplace
- [https://uk.tradingview.com/chart/OyOIbUDA/?symbol=KUCOIN%3AERGUSDT]: ERG/USDT chart on TradingView (first appearance)
- [https://curiaregiscrypto.medium.com/whats-going-on-behing-the-screens-ergo-weekly-dev-update-august-4th-bd62aa93a621]: Ergo weekly dev update for August 4th
- [https://twitter.com/YoroiWallet/status/1422905221793996809]: Yoroi dApp connector development update
- [https://www.tradingview.com/chart/ERGUSDT/eaCLkJIY-Ergo-Chart-finally-available-on-Tradingview/]: Community post confirming ERG chart now on TradingView
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: The Ergo Manifesto
- [https://ergoplatform.org/en/blog/2021-04-08-heres-how-ergo-seeks-to-boost-interoperability-for-cardanos-eutxo-model/]: Blog post on Ergo-Cardano eUTXO interoperability
- [https://forum.cardano.org/t/ergo-will-complement-cardano/45412]: Cardano forum post on Ergo-Cardano complementarity
- [https://medium.com/dragonfly-research/dr-reorg-or-how-i-learned-to-stop-worrying-and-love-mev-2ee72b428d1d]: Dragonfly Research article on MEV
- [https://explorer.ergoplatform.com/en/transactions/75f1bdf39c82590babd291308dd832d6419b884861c8d57bbaa947649e3180b3]: Example transaction showing UTXO change address behavior (referenced in support query)
- [https://ergonaut.space/es/home]: Ergonaut Handbook in Spanish
- [https://youtu.be/FhGCPjlGXF4]: YouTube video about Ergo (~250k subscriber channel), cited as contributing to price action on 2021-08-05
- [https://t.me/ergo_mining]: Ergo Mining Telegram group
- [https://t.me/ergosupport]: Ergo Support Telegram group
- [https://coinmarketcap.com/events/]: CMC events page — community voting campaign for KuCoin listing visibility

---

## Unresolved Questions

- **KuCoin deposit delays**: Multiple users reported ERG deposits taking 4–8+ hours on 2021-08-04. KuCoin support acknowledged a delay; deposits appeared to resolve by late 2021-08-04/early 2021-08-05, but no root cause was confirmed publicly.
- **KuCoin withdrawal fees for ERG**: Speculated at 0.1–1 ERG but withdrawals were not yet open during the chat period; no confirmed figure.
- **ErgoDEX Cardano token support timing**: Whether ErgoDEX would support native Cardano tokens (beyond ADA/ERG pairing) and the timeline for this remained unclear pending Alonzo mainnet.
- **UTXO change address issue (smash)**: While community members identified the behavior as likely standard UTXO change, the user's claim of ~4 ERG missing was not fully resolved in chat. Directed to Ergo Support group.
- **Nanopool centralization**: ~54% hashrate concentration acknowledged as a concern with no resolved mitigation; ongoing discussion noted in Discord #smart-pools channel.
- **US Infrastructure Bill crypto amendment**: Senate vote outcome and final legislative text were pending during the chat period; implications for Ergo and PoW chains noted as TBD.
- **Ledger hardware wallet integration for Ergo**: Mentioned as still missing; no ETA provided.
- **iOS Ergo mobile wallet**: Referenced as unavailable; no ETA confirmed.