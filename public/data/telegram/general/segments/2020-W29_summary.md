---
title: "Ergo General Chat — 2020-W29"
date_start: "2020-07-13"
date_end: "2020-07-19"
type: telegram_weekly
channel: general
week: "2020-W29"
source: telegram
message_count: 402
categories: [ecosystem, wallet, technical, governance, defi, community, mining]
key_terms: [Tidex, HotBit, ProBit, CITEX, liquidity, slippage, volume, Magnum Wallet, Coinbarn, Yoroi, desktop wallet, mobile app, browser extension, storage rent, lost coins, circulation, whitepaper, hard fork, v3.3.0, release]
---
# Ergo General Chat — 2020-W29 Summary

## Key Topics Discussed

- **Wallet ecosystem and exchange listings**: Discussion of available wallets (Magnum, Coinbarn, Yoroi integration planned) and active exchanges (ProBit, HotBit, Tidex, Waves.Exchange, CoinsBit) with emphasis on liquidity differences and reliability concerns at CITEX.

- **Storage rent mechanism**: Clarification that storage rent naturally handles lost coins by returning them to circulation, addressing concerns about how the protocol identifies abandoned funds.

- **Mixer implementation and privacy**: Discussion of ErgoMix mixer availability via Docker, mention of ring and threshold signature support in Ergo's Sigma protocol design, and privacy-preserving smart contracts as differentiator from Cardano.

- **TPS and network scaling**: kushti clarified that transaction throughput depends on transaction weight (mixer and DEX transactions are heavy) and that miners vote to increase computational limits per block. TPS increased 100% during first year of mainnet.

- **Hard fork and mining distribution**: Discussion of upcoming hard fork expected to improve hashrate distribution among miners, potentially reducing selling pressure. DEX contracts completed and published, matcher testing planned.

- **NIPoPoWs and cross-chain capability**: Brief mention that Ergo has NIPoPoWs enabling cross-chain interactivity, positioning it as complementary to Cardano rather than redundant.

- **Stablecoin roadmap**: Oracle pools must be released first, then stablecoin design will be published. Community invited to share thoughts on stablecoin properties.

- **Twitter security incident (2020-07-15)**: Major hack affecting multiple crypto accounts (Binance, Coinbase, Elon Musk, etc.). Warnings issued against clicking links or sending funds to unverified addresses.

- **Chainlink criticism**: kushti shared a critical report on Chainlink alleging market manipulation and tokenomic conflicts of interest, but noted the report source appeared faked while facts remained publicly verifiable.

## Important Decisions or Announcements

- [@kushti khushi, msg#39675, 2020-07-14]: Development updates will be provided after devs chat; welcome message confirming Ergo is a multi-asset PoW platform with extended UTXO model, sigma-protocols, storage rent, and SPV client support.

- [@kushti khushi, msg#39920, 2020-07-16]: **Release update** — 3.3.0 finished and needs documentation; DEX contracts done and published in Ergo-Contracts; DEX matcher testing to follow.

- [@kushti khushi, msg#39949-39951, 2020-07-16]: Miners will likely increase computational limit per block to 2M units in ~3 days (2x increase over first year), resulting in 2x increase in transactions per second.

- [@kushti khushi, msg#40018-40019, 2020-07-17]: Next Wednesday general community chat to discuss listings and Ergo Foundation reorganization.

- [@kushti khushi, msg#39896-39901, 2020-07-16]: Oracle pools will be released first, then stablecoin design will be published; community invited to share thoughts on stablecoin design and properties.

## Technical Q&A Worth Preserving

- **Q** (@cyw0rx, msg#39493): Is there realistic chance of big price increase for Ergo?
  **A** (@Emm Ess, msg#39500): "I certainly don't see why not" — emphasis on team, protocol, and community quality.

- **Q** (@Unknown, msg#39593): What wallet is everyone using?
  **A** (@Kookster, msg#39595-39596): Coinbarn is recommended; Ergo is its own chain.

- **Q** (@CryptoTeller | TREEINCAT, msg#39623): What wallet to use?
  **A** (@Unknown, msg#39627; @ponte, msg#39718-39719): Magnum Wallet recommended; has desktop and mobile versions available at magnumwallet.co.

- **Q** (@kushti khushi, msg#39626): Does Vite have a desktop wallet now?
  **A** (@Unknown, msg#39627): Yes, they made a desktop wallet recently.

- **Q** (@Steph, msg#39742): How is it possible to know if a coin is lost?
  **A** (@Unknown, msg#39744-39745): Storage rent takes care of lost coins naturally — referenced positioning blog post.

- **Q** (@Unknown, msg#39715): Which wallet can I use on Android?
  **A** (@ponte, msg#39718-39719): Check Magnum Wallet (magnumwallet.co).

- **Q** (@cyw0rx, msg#39725): Can CITEX exchange be trusted for buying ERG?
  **A** (@kushti khushi, msg#39731-39736): CITEX currently has issues — Ergo wallet is closed, staff unreachable, volumes are fake. Request support ticket to reopen wallet. Recommended exchanges are ProBit, HotBit, Tidex, Waves.exchange, CoinsBit with most liquidity currently at ProBit.

- **Q** (@Steph, msg#40011): How many TPS can Ergo do?
  **A** (@kushti khushi, msg#40013): TPS depends on transaction weight. Mixer and DEX transactions are heavy; simple transfers are light. Can send to 100 addresses in one transaction. More important: TPS rises when miners vote for it. TPS up 100% during first year since mainnet launch.

- **Q** (@Unknown, msg#39924): How can Ergo do something Cardano won't be able to for crowdfunding, oracles, DEXes, stablecoins, auctions?
  **A** (@Unknown, msg#39929-39931): Ergo has Sigma protocols enabling privacy-preserving smart contracts (e.g., ErgoMix mixer already deployed); NIPoPoWs allow cross-chain interactivity. Cardano and Ergo will be complementary with benefits unique to each.

- **Q** (@kushti khushi, msg#39938): Is Magnum Wallet producing errors with certain amounts?
  **A** (@kushti khushi, msg#39941-39942): Magnum has rounding bug in JavaScript library with amounts like "1.15" (same issue was in node panel, now fixed). Can be bypassed by changing amount slightly. Also, sending before previous transaction confirmation may fail because ergo-js library doesn't support spending outputs of unconfirmed transactions.

- **Q** (@Unknown, msg#39969): Do you give the address of the mixer?
  **A** (@kushti khushi, msg#39970-39971): Docker image available at hub.docker.com/r/ergomixer/mixer.

- **Q** (@Steph, msg#40073): What happens after 2.5 years when treasury funds for development run out?
  **A** (@kushti khushi, msg#40078): Fund will likely exist after 2.5 years due to extra funds already present. Crowdfunding in 2020 roadmap for experimenting with ecosystem development funding. Standard OSS funding models apply: consulting, sponsorships of development work that pay back (e.g., mixing scheme research funded by Dev Fund; mixer already earning ERGs). Contract-based pools coming.

- **Q** (@Steph, msg#40112): Will stablecoin mixing happen this year?
  **A** (not answered — flagged as open question).

- **Q** (@Unknown, msg#40231): Will oracle pool research result in a new token or be done with ERG?
  **A** (not answered in chat).

## Links Shared

- [https://ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/]: Welcome to Smart Money blog post introducing Ergo Platform positioning.

- [https://ergoplatform.org/en/exchanges/]: Exchange listings page.

- [https://twitter.com/chepurnoy/status/1283170084165431296]: kushti's Twitter announcement.

- [https://ergoplatform.org/en/blog/2020_04_21_ergo_positioning/]: Storage rent and coin circulation blog post.

- [https://github.com/coinbarn/coinbarn-extension/blob/master/docs/add-to-chrome.md]: Coinbarn browser extension installation instructions for Chrome/Brave.

- [https://magnumwallet.co/]: Magnum Wallet official website.

- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263]: Oracle Pools technical forum discussion.

- [https://medium.com/gains-associates/search?q=ergo]: Gains Associates Ergo articles series.

- [https://chainlink.docsend.com/view/nfrvnyuuzrf2d5va]: Critical report on Chainlink alleging market manipulation (source verification unclear).

- [https://hub.docker.com/r/ergomixer/mixer]: ErgoMix mixer Docker image.

- [https://www.dropbox.com/s/wwhs9ihcls2d0vc/ergo_whitepaper.pdf?dl=0]: Persian translation of Ergo whitepaper.

- [https://ergoplatform.org/en/blog/2019_05_20-curve/]: Mining distribution curve blog post.

- [https://explorer.ergoplatform.com/en/charts]: Ergo Explorer mining info charts.

## Unresolved Questions

- **Stablecoin deployment timeline**: When will stablecoin mixing be operational? (@Unknown, msg#40112 — no answer provided).

- **Oracle pool token structure**: Will oracle pool research result in a new token or operate within ERG ecosystem? (@Unknown, msg#40231 — not addressed in chat).

- **Ledger Nano integration ETA**: When will Ergo be available on Ledger Nano hardware wallet? (@Steph, msg#39905; kushti asked @Jasndavies for ETA but no response in chat).

- **Yoroi integration timeline**: Multiple participants asking about Yoroi wallet integration; kushti mentioned it but no specific timeline provided (@Ollie, msg#40040-40042, @Unknown, msg#40209).

- **CITEX wallet status**: What is the actual cause of CITEX Ergo wallet closure and staff unavailability? (@kushti khushi, msg#39731 — described as "mess" with no further resolution).

- **Chainlink report credibility**: kushti flagged the critical Chainlink report as potentially faked source despite publicly verifiable facts — credibility status remains unclear.

---

**Chat Health Note**: Week was moderately active with 402 messages. Signal-to-noise ratio reasonable; significant discussion of exchange mechanics, wallet availability, and protocol-level questions. Twitter security incident (2020-07-15) drove substantial off-topic discussion but was handled professionally with security warnings. One moderation issue flagged (msg#39807-39826) regarding political statements from community member, resolved via admin discussion.