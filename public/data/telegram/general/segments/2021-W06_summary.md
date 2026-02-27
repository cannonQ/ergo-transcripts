# Ergo General Chat — 2021-W06 (Feb 8-14, 2021)

## Key Topics Discussed

- **Stablecoin naming debate**: Community extensively discussed naming for the AgeUSD protocol's stablecoin and reservecoin. Consensus emerged around SigmaUSD (SigUSD) for the stablecoin and SigmaRSV (SigRSV) for the reservecoin, with alternative representations ΣUSD and ΣRSV for dApps. Discussion centered on uniqueness, branding alignment with Sigma protocols, and avoiding existing ticker conflicts.

- **AgeUSD protocol mechanics**: Multiple discussions clarified that reservecoin holders can only redeem when reserves exceed minimum ratio multiplied by stablecoin value, preventing protocol insolvency. Reservecoins represent proportional share of reserves, not absolute value. Fees accumulate in the contract over time, benefiting reservecoin holders.

- **Hardfork aftermath and mining difficulty**: Network experienced elevated difficulty post-Autolykos v2 hardfork, causing slow block times (10-15 minutes vs. target 2 minutes). Difficulty adjustment expected after epoch 419840. Miners received 75% bonus during transition, leading to significant ERG minting and subsequent sell pressure.

- **Yoroi wallet integration issues**: Backend synchronization problems caused delayed balance updates and transaction confirmations. Yoroi team addressed issues over the week. Desktop extension only supports ERG; mobile wallet support planned for Q1 2021.

- **Ledger hardware wallet delays**: Community member Jason Davies received grant nearly 1 year ago, repeatedly failed to deliver. Foundation now engaging professional developers for proper implementation with realistic timeline.

## Important Decisions or Announcements

- [@kushti, msg#86534, 2021-02-12]: Announced departure of Savo from marketing role after 2-month trial due to irreconcilable differences. Foundation seeking replacement for marketing/business development position.

- [@kushti, msg#86228-229, 2021-02-08]: Announced two additional exchanges listing ERG in February 2021, with one being TradeOgre (announced February 8).

- [@kushti, msg#89163, 2021-02-13]: Announced fourth exchange listing scheduled for February 15, 2021.

- [@kushti, msg#86411, 2021-02-08]: Confirmed Hotbit will add ERG/USDT trading pair within days (previously only BTC pair available).

- [@Armeanio, msg#89142, 2021-02-13]: DarkSideOfBrrrrr targeting February 16-17 for SigmaUSD deployment, pending UI bootstrap testing completion. Emphasized priority on stable, secure rollout over speed.

- [@kushti, msg#89170, 2021-02-13]: Clarified Ergo Foundation operates through voting on all expenditures, maintaining conservative spending approach. Called for community help with transparency improvements.

## Technical Q&A Worth Preserving

- **Q** (@David F, msg#88468): If I reserve 10,000 ERG and price goes up 1000% to $20, do I get 100,000 ERG back?
  **A** (@Unknown, msg#88472): There is a threshold preventing withdrawal of all reserves. Reservecoins represent proportion of reserves (book value per share), not multiplication factor. Per the protocol article: "Reserve Providers can only redeem their tokens if the reserves cover the value of all issued stablecoins multiplied by the minimum reserve ratio."

- **Q** (@Gazza, msg#88468): Can reserve providers be liquidated or lose ERG?
  **A** (@Armeanio, msg#88483): Possibility of contract locking if everyone tries to exit simultaneously. Reservecoin functions as book value per share (BVPS) call on dApp reserves. Cannot redeem until reserves cover all stablecoin obligations.

- **Q** (@John, msg#89762): How does stablecoin success influence ERG valuation?
  **A** (@John, msg#89776, @Orhan, msg#89783): To mint stablecoins, ERG must be locked as collateral, reducing circulating supply. Increased stablecoin demand increases ERG demand and value.

- **Q** (@Josh, msg#89341): Will Cardano use AgeUSD on Ergo platform or separate implementation?
  **A** (@Armeanio, msg#89157): Cardano will implement AgeUSD framework in Plutus (separate deployment on Cardano). Ergo and Cardano are different chains with compatible eUTXO designs allowing easy contract translation, but they are not the same platform.

- **Q** (@$yuji, msg#89213): Does ERG have staking?
  **A** (@Unknown, msg#89229): Not possible — ERG is proof of work. Protocol-level staking requires proof of stake. DeFi-based yield opportunities will be available through collateral mechanisms.

- **Q** (@A_A_, msg#89293): If Dapp users transact in stablecoins, do they need ERG for fees?
  **A** (@Unknown, msg#89625): Yes, fees are paid in ERG. The stablecoin contracts use ERG as the base currency.

- **Q** (@Unknown, msg#90093): Minting reservecoin is essentially longing ERG — can't lose more than 100% of initial balance?
  **A** (@A, msg#90095): Correct for reservecoin. Stablecoin maintains stable value regardless of ERG price movement.

- **Q** (@Olli Tiainen, msg#89798): Why do miners flood market if they believe in long-term potential?
  **A** (@Unknown, msg#89800): Most miners switched from Ethereum for short-term profit (coin-hopping). Switching cost is minimal — just configuration file changes in mining OS.

## Links Shared

- [https://twitter.com/luke_arnolds/status/1360681886633365510]: Luke Arnolds video highlighting Charles Hoskinson quote: "Ergo should be a top 10 or top 15 coin... it shows you marketing and liquidity matters just as much as research"

- [https://ergoplatform.org/en/blog/2021-02-05-building-ergo-how-the-ageusd-stablecoin-works/]: Official AgeUSD protocol explanation blog post

- [https://github.com/Emurgo/age-usd#how-does-the-ageusd-protocol-work]: AgeUSD protocol GitHub documentation

- [https://ergo101.org/]: Community-created educational resource with videos and written content

- [https://www.ergoforum.org/t/stablecoin-and-reservecoin-names/601]: Forum thread for stablecoin/reservecoin naming discussion

- [https://www.ergoforum.org/t/ergo-node-bootstrapping-optimizations/655]: Kushti post on node bootstrapping optimization work

- [https://www.ergoforum.org/t/ergomixer-tokenization/648]: Forum proposal for ErgoMixer tokenization

- [https://ergoplatform.org/en/blog/2021-02-12-2000-erg-in-prizes-to-be-won-in-the-ergo-digital-art-competition/]: Announcement of 2000 ERG digital art competition

- [https://www.youtube.com/watch?v=S7fBdiNFNBc&t=2309]: Charles Hoskinson interview discussing Ergo and Cardano Africa project

- [https://adanorthpool.medium.com/ergo-node-setup-on-windows-10-6570b36e8fa8]: Tutorial for setting up Ergo full node on Windows 10

- [https://tradeogre.com/exchange/BTC-ERG]: TradeOgre exchange listing announcement

- [https://www.ergoforum.org/t/magnum-wallet-closing-in-20-days/468]: Instructions for recovering ERG from deprecated Magnum wallet

## Unresolved Questions

- Specific exchanges for the two February 2021 listings remain unannounced (one scheduled for February 15 announcement)

- Timeline for Yoroi mobile wallet support stated as Q1 2021 but specific date not confirmed

- Ledger hardware wallet integration timeline now depends on engagement with professional developers; no new ETA provided

- Marketing strategy post-Savo departure: Foundation seeking new marketing lead but no candidate or timeline announced

- Binance listing timeline remains uncertain despite community demand; Foundation noted exchange greed and lack of ICO funds as barriers

- ErgoDEX deployment timeline mentioned as Q4 2021 but not officially confirmed in this discussion period

- Confusion around stablecoin deployment date: community expected February 10 based on earlier hints, but actual target was February 16-17 pending testing