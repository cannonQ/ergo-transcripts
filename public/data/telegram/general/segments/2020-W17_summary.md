---
title: "Ergo General Chat — 2020-W17"
date_start: "2020-04-20"
date_end: "2020-04-26"
type: telegram_weekly
channel: general
week: "2020-W17"
source: telegram
message_count: 171
categories: [mining, ecosystem, defi, technical, community, marketing]
key_terms: [node setup, mining instructions, github wiki, installation, Coinbarn wallet, ProBit, Tidex, HotBit, Waves.exchange, Bittrex, liquidity, USDT pairs, DEX contracts, partial filling, sigma-rust, ErgoTree, formal verification, mixer, anonymity, web app]
---
# Ergo General Chat — 2020-W17 Summary

## Key Topics Discussed

- **Ergo Node Setup & Mining**: Multiple requests for setup instructions and mining guidance. GitHub wiki pages on node setup and mining published; some users struggling with technical implementation.

- **Mixer Development**: Anon's mixer web app published and working well on developer's side. Privacy-preserving crowdfunding campaigns already possible by combining mixing with pledging, though without dedicated apps.

- **DEX Contracts Progress**: Denyz drafted DEX contracts with partial filling capability, modeled scenarios in playgrounds, exposed parameters/templates in ergo-contracts, and started formal verification. Deadit deployed testnet explorer with order book and token pages. Ilia began DEX matcher development.

- **Version 3.2.3 Release**: Features finalized, code ready and under review on GitHub. Release includes improvements to mixer UI and other protocol enhancements.

- **Stablecoin & Oracle Experiments**: First one-way convertible stablecoin experiment using rate oracle published on Ergo Forum. Developers exploring oracle pool integration.

- **Exchange Listing**: Discussions around fiat onramps, USDT pairs on ProBit and Citex (both with low liquidity). Bittrex had prior listing agreement but changed regulatory requirements. Inquiry from LBank Exchange about listing possibility.

- **EFYT Token Swap**: Swap period extended to July 1, 2021 minimum. EFYT/Ergo pair available on Waves exchange.

- **Block Parameters & Scalability**: Block time confirmed at 2 minutes with no current plan to reduce. Discussion of complexity limits per block similar to Ethereum. Storage rent mechanism protects long-term survival.

## Important Decisions or Announcements

- [@kushti khushi, msg#26236, 2020-04-23]: Version 3.2.3 is 90% ready before 3.3.0 release.

- [@kushti khushi, msg#26237, 2020-04-23]: Anon92048 published mixer web app.

- [@kushti khushi, msg#26242, 2020-04-23]: Jason to finish crowdfunding web tool after pool release and work on Ledger support.

- [@kushti khushi, msg#26244-26246, 2020-04-23]: 2020 roadmap will be "easily outperformed"—mixer done, DEX in progress, crowdfunding webapp mostly done, more DeFi expected.

- [@kushti khushi, msg#26302, 2020-04-24]: **Security warning**: Do not run any binaries from Telegram.

- [@kushti khushi, msg#26424, 2020-04-26]: First stablecoin experiment—one-way convertible stablecoin tokens being bought from holding contract published.

## Technical Q&A Worth Preserving

- **Q** (@Rich, msg#26358): Does ERGO operate without gas?
  **A** (@kushti khushi, msg#26377): Not quite. Each script has complexity estimation with a complexity limit per block (like Ethereum). Paying for computations is not part of the protocol (unlike storage rent, which is). Currently miners do not charge for script validation complexity, but they may in the future.

- **Q** (@Rich, msg#26364): What is the intended block time for Ergo?
  **A** (@filippounits, msg#26367): 2 minutes.

- **Q** (@Rich, msg#26368): Will block time be reduced in the future?
  **A** (@filippounits, msg#26369): AFAIK no, there's no plan to reduce the block time.

- **Q** (@Rich, msg#26370): What dApps can be created with such high block times?
  **A** (@Unknown, msg#26371): Every coin in Ergo is protected by a program in ErgoScript based on noninteractive zero-knowledge proofs, enabling real non-custodial and non-interactive DeFi. Additionally, custom tokens, powerful contracts in the extended UTXO model, support for crypto protocols via inbuilt composable Sigma protocols, storage rent for long-term survival, and efficient SPV security via NIPoPoWs make Ergo a crypto computer.

- **Q** (@Rich, msg#26365): Is there anything else missing from Ergo?
  **A** (@Unknown, msg#26371): See above comprehensive answer on zero-knowledge proofs, custom tokens, extended UTXO, Sigma protocols, storage rent, NIPoPoWs.

- **Q** (@Kookster, msg#26251): Timeframe for improved mixer UI completion?
  **A** (@kushti khushi, msg#26307): Anon promised to stabilize, then publish binaries and work on token mixing (enabling stablecoin mixing). Timeline not specified.

## Links Shared

- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node]: Ergo node setup instructions
- [https://github.com/ergoplatform/ergo/wiki/Mining-Ergo-for-Fun-and-Profit]: Ergo mining guide
- [https://ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/]: Welcome to Smart Money blog post
- [https://github.com/ergoplatform/awesome-ergo]: Awesome Ergo resources repository
- [https://github.com/ergoplatform/ergo/milestone/16]: Version 3.2.3 milestone (90% ready)
- [https://testnet.explorer.com/]: Testnet explorer with order book and token pages
- [https://www.ergoforum.org/t/tethering-a-token-to-usd-using-the-rate-oracle/118/9]: Stablecoin experiment using rate oracle
- [https://tidex.com/exchange/erg/btc]: Tidex ERG/BTC exchange pair
- [https://www.hotbit.io/exchange?symbol=ERG_BTC]: HotBit ERG/BTC pair
- [https://www.probit.com/app/exchange/ERG-BTC]: ProBit ERG/BTC pair
- [https://www.probit.com/app/exchange/ERG-USDT]: ProBit ERG/USDT pair (low liquidity)
- [https://www.gj.com/trade/ergusdt]: GJ.com ERG/USDT pair (low liquidity)
- [https://twitter.com/chepurnoy/status/1252163451901837312]: kushti's Twitter post (linked multiple times)

## Unresolved Questions

- Exchange listing strategy: Best approach to onboard fiat liquidity for Ergo unclear. LBank inquiry status unknown.
- Magnum wallet airdrop distribution: ANGELpool reported receiving ERG tokens from Magnum team but found no related airdrop in Magnum wallet interface (msg#26416).
- DEX matcher ETA: Ilia's DEX matcher development started but no timeline provided.
- Ledger support: Jason working on it but delivery date not specified.
- Community coordination: kushti raised possibility of joint community chat for dev updates, listing strategies, and marketing efforts (msg#26420)—no decision documented.