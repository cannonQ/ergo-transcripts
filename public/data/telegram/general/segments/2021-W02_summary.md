---
title: "Ergo General Chat — 2021-W02"
date_start: "2021-01-11"
date_end: "2021-01-17"
type: telegram_weekly
channel: general
week: "2021-W02"
source: telegram
message_count: 1282
categories: [marketing, defi, technical, wallet, ecosystem, bridges, mining, community, nft]
key_terms: [Ergo Summit, January 23, announcements, roadmap, presentations, AgeUSD, stablecoin, Yoroi, Q2 release, algo stablecoin, privacy, oracle pools, dark pools, sigma protocols, blockchain data, ErgoDEX, DEX, atomic swaps, Cardano interoperability, tipbot bugs]
---
# Ergo General Chat — 2021-W02 Summary

## Key Topics Discussed

- **Tip Bot Double-Spending Bug**: The ErgoTip bot had a critical issue where multiple tips sent rapidly from the same account would cause balance inconsistencies due to the library not properly tracking off-chain spent inputs. A fix was planned for the following week. The full node had already resolved this issue months prior.

- **Wallet Migration from Magnum**: Magnum wallet was closing; users were directed to migrate ERG holdings to Yoroi browser extension using ErgoMixer with their seed phrase. Yoroi mobile support for ERG was still in development.

- **Oracle Pools Design**: Dark pools were discussed in the context of blockchain implementation. kushti shared a paper (https://arxiv.org/abs/1910.02359) on dark pool design and noted that most of the implementation requirements already existed in Ergo via Sigma protocols. Oracle Pools v2 was mentioned as running for Dexy Gold with GORT rewards.

- **Stablecoin (AgeUSD) Anticipation**: Community was excited about the algorithmic stablecoin announcement expected at the Ergo Summit (2021-01-23). Questions about issuance mechanics and Cardano integration were common but unresolved pending summit presentation.

- **Exchange Listings**: Ergo was available on Hotbit (no KYC), ProBit, Gate.io, CoinEx (no KYC up to $10k/day). Significant liquidity walls and lack of major exchange presence (Binance, Kraken, Coinbase) were recognized friction points for adoption.

- **ErgoSummit 2021 Hype**: High anticipation building for 2021-01-23 event. Jinse (major Chinese media) published coverage; mainstream media coverage during 2021 was promised. Marketing was acknowledged as historically weak but improving.

- **Hardware Wallet Support**: Ledger integration was under development but not yet available. Full node wallet existed but required entering seed phrase each time.

---

## Important Decisions or Announcements

- [@V (Savo RPC), msg#75236, 2021-01-12]: First business-side announcement coming during summit speech.

- [@V (Savo RPC), msg#76575, 2021-01-17]: Marketing improvements confirmed; Jinse article published; crypto YouTube and press coverage of summit planned; real-life mainstream media coverage expected during 2021.

- [@Dmitry Usov, msg#75692, 2021-01-15]: Mining hashrate calculator from pool.plutomonkey.com discussed for potential addition to official website.

- [@kushti, msg#76604-76605, 2021-01-17]: ErgoMixer can be used to import Magnum mnemonic as alternative to direct Yoroi migration (forum link provided).

- [@Armeanio, msg#76679-76681, 2021-01-17]: Atomic swaps with major coins (Ergodex Gateway) confirmed in roadmap.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#74985-74986): Why does the tip bot show balance issues after multiple rapid tips from same account?
  **A** (@kushti, msg#74985 + @Unknown msg#74986): A library is using the same one-time coin to generate different transactions, and ergo-ts is not considering inputs spent off-chain. The full node was already fixed months prior; library update scheduled for next weeks.

- **Q** (@Unknown, msg#75314): How can Ergo prevent Bitcoin-like fee market issues as adoption grows and tx fees rise? Won't miners vote to keep fees high?
  **A** (@kushti): Not directly answered; storage rent is part of the solution but questions remained unresolved pending deeper discussion.

- **Q** (@Unknown, msg#76636-76648): What does the fork/upgrade change about Ergo mining? Will it make mining harder or easier?
  **A** (@chrom, msg#76638): Linked to technical announcement; responder suggested it makes mining easier at start, harder over time. Non-outsourceability was questioned but not fully explained.

- **Q** (@Jami, msg#76275): Where can I find good YouTube channels about Ergo for research on making informative video?
  **A** (@chrom, msg#76276; @Richi, msg#76280-76281): CR202020 and Sakata_ZK (Ergo101 channel) recommended as brilliant resources.

- **Q** (@Unknown, msg#75898): Where does the Oracle Pool get price data? Price on explorer differs from CoinGecko/CMC.
  **A** (@Dmitry Usov, msg#75911-75912): Both sources showed same price (~0.35 ADA), indicating oracle was tracking correctly; responder provided CoinGecko link for comparison.

- **Q** (@pepeblue, msg#76205-76206): Is ergowallet.io (gagarin55 on GitHub) legit?
  **A** (@chrom, msg#76207): It's a work in progress.

---

## Links Shared

- [https://ergosummit.org]: Official Ergo Summit 2021 event page (2021-01-23).
- [https://www.ergoforum.org/t/magnum-wallet-closing-in-20-days/468/6]: Magnum wallet closure instructions and ErgoMixer migration guide.
- [https://explorer.ergoplatform.com/en/charts/hash-rate]: Hashrate chart for Ergo mainnet (updated 2021-01-16).
- [https://arxiv.org/abs/1910.02359]: Academic paper on dark pools implementation, referenced for blockchain context.
- [https://www.investopedia.com/terms/a/atomic-swaps.asp]: Atomic swaps explanation (referenced for Ergodex Gateway roadmap item).
- [https://pool.plutomonkey.com/]: Mining hashrate calculator for Ergo.
- [https://twitter.com/ergoplatformorg/status/1350506690031071234]: Jinse article announcement about Ergo (Chinese media coverage).
- [https://twitter.com/thinkgrowcrypto/status/1350217498348589057]: Professional Ergo promotional video (heavily shared, called "beautiful" and "badass").
- [https://t.me/ergopoker]: Ergo poker tournament organizing group (100 ERG buy-in announced).
- [https://t.me/ERGtrading]: Dedicated ERG trading discussion channel (referenced multiple times).

---

## Unresolved Questions

- **Hashrate Spike Cause**: Community noted hashrate doubled to 26 TH/s (all-time high at time) but root cause of miner influx was debated (summit anticipation vs. profitability shift vs. news effect).

- **Fee Market Dynamics**: How will Ergo's storage rent + miner voting prevent fee explosion during high adoption? Partially addressed but deeper analysis pending.

- **Exchange Listing Timeline**: When will Ergo list on Binance, Kraken, or Coinbase? No concrete timeline given; described as dependent on exchange fees and community outreach.

- **Stablecoin Technical Details**: How exactly will AgeUSD work? How will it integrate with Cardano? Deferred to summit presentation (2021-01-23).

- **Ledger Integration ETA**: No specific date given beyond "in development."

- **Charles Hoskinson Summit Appearance**: Rumored to attend summit based on "of course I will attend Ergo summit" statement; unclear if he will speak formally or just attend.

- **Dark Pools Viability on Ergo**: kushti identified the paper and design feasibility but indicated further careful study needed before committing to implementation.

- **Marketing Strategy Details**: Acknowledged past weaknesses; improvement promised but specific tactics/budget/timeline not disclosed beyond "doing it right now."

---

## Community Sentiment

- **Overwhelmingly Bullish**: High anticipation for summit; multiple "this is beautiful/badass" reactions to promotional materials.
- **FOMO Building**: Concern that price run-up and media exposure (Jinse) would attract retail before summit; some members deliberately holding back purchases to accumulate at dips.
- **Cautionary Voices**: A few members (e.g., @mensrea, msg#76451-76466) expressed concern about "alt season" hype and overexcitement, drawing parallels to 2017 bubble dynamics.
- **Generosity Culture**: Frequent tipping via tip bot; kushti tipped generously and often; community rewarded quality contributions.