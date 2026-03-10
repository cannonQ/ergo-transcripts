---
title: "Ergo General Chat — 2021-W18"
date_start: "2021-05-03"
date_end: "2021-05-09"
type: telegram_weekly
channel: general
week: "2021-W18"
source: telegram
message_count: 2249
categories: [ecosystem, wallet, defi, bridges, nft, mining, marketing]
key_terms: [binance, kucoin, huobi, exchange listings, liquidity, premine, coinex, gate.io, withdrawal suspended, maintenance, deposit problems, ledger, hardware wallet, tesseract, opolo, yoroi, sigmausd, sigrsv, bearwhale, reserve ratio]
---
# Ergo General Chat — 2021-W18 Summary
**Period:** 2021-05-03 to 2021-05-09

---

## Key Topics Discussed

- **Exchange listing challenges and strategy**: Extensive discussion about Ergo's absence from major exchanges like Binance, which require large coin donations for listing—difficult without a premine. Community debated whether to crowdfund listing fees, but team emphasized organic growth strategy. Gate.io (#8 exchange) and Biki (higher volume than KuCoin) already support ERG. Multiple exchanges under NDA per @Armeanio.

- **SigmaUSD bearwhale exit and reserve ratio dynamics**: A large holder ("bearwhale") exited their SigmaUSD short position, losing 110k ERG (~$500k in potential gains) while maintaining dollar value. @kushti and @Armeanio repeatedly warned RSV holders to consider exiting when reserve ratio hit 3400%, as there was insufficient SigmaUSD to drain from and price wouldn't increase much relative to ERG.

- **Liqwid Finance criticism of AgeUSD protocol**: DC from Liqwid Finance criticized AgeUSD/SigmaUSD design on Twitter, claiming it wouldn't scale to billions and comparing it unfavorably to MakerDAO. Community responded noting AgeUSD was co-designed by IOHK/Emurgo and Charles Hoskinson, and that DC misunderstood the mechanism. @Armeanio clarified that true functional DeFi needs cost efficiency, not artificially high yields.

- **Ledger hardware wallet integration announcement**: Major announcement that Tesseract firm hired to develop native Ledger support for Nano S and X models, estimated 2 months timeline. Also announced partnership with Opolo hardware wallet. Temporary solution available via Waves Exchange bridge with Ledger.

- **Coinex and exchange wallet maintenance issues**: Recurring deposits/withdrawals suspended on Coinex due to script processing issues with miner dust problem. @kushti reached out to exchange. Hotbit still down from prior hack. Community repeatedly warned against mining directly to exchange addresses.

- **ErgoDEX naming confusion**: Multiple names circulating (ErgoDEX, ErgoSwap, SigmaDEX) causing confusion. Roadmap and different sources inconsistent. Community requested single consistent name. Launch targeted June 2021 on Ergo first, then port to Cardano after Goguen.

- **Autolykos v2 and pool resistance**: Discussion about why Ergo enabled mining pools in v2 after originally being pool-resistant in v1. @Glasgow explained that smart contracts make non-outsourceable PoW impossible (per research paper "Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts"). Focus shifted to memory-hardness to prevent ASICs.

- **Graviton/Gravity cross-chain integration**: Announcement of partnership with Graviton for cross-chain interoperability. Ergo will provide oracle services to Gravity protocol and collaborate on Graviton development for liquidity incentivization across chains.

- **Marketing and awareness growth**: Community efforts to increase visibility on Reddit r/cardano and r/cryptocurrency. Multiple posts about Alex Chepurnoy being "smartest dev in crypto" gained traction. Concern about lack of professional marketing/AMAs compared to projects like Liqwid Finance.

---

## Important Decisions or Announcements

- [@kushti, msg#128686/128747/128996, 2021-05-09]: "RSV holders might want to consider an exit. The price won't increase much for now relative to ERG as there is not much SigUSD to drain from. The bearwhale exited the SigmaUSD position. The net dollar loss was just the fees involved to mint and redeem. The ERG loss was 110k. That short position cost about 500K in potential gains."

- [@Armeanio, msg#128854, 2021-05-09]: "As the bizdev getting a few better exchanges is my main priority in the short term. I'm working to chase that down. It's a process kind of like buying a house, its slower and more bureaucratic than the average user imagines but talks are in motion on multiple fronts. I can't say much due to NDAs."

- [@Armeanio, msg#128862/128863, 2021-05-09]: "Ledger is in development we hired a firm tesseract they are working on it. You can have native ledger support through waves.exchange with erg."

- [@Armeanio, msg#128635, 2021-05-05]: "The community has been asking for a payment gateway. Here you go everyone. Non custodial, flexible across multiple platforms and also allows for ERG invoices. Small businesses, get to work ✊ https://cryptocurrencycheckout.com/coin/ergo"

- [@Armeanio, msg#128642, 2021-05-05]: "We need to start building an ERGconomy. Anyone who integrates that, let us know, we will give you some free marketing promo."

- [@Armeanio, msg#129096, 2021-05-08]: "Running a business is a matter of managing costs. Accepting ERG as payment is great… but isn't crypto volatile? If you want to run a crypto gateway and require predictability, we now have you covered. https://cryptocurrencycheckout.com/coin/sigmausd"

- [@kushti, msg#129035, 2021-05-09]: "Please send your marketing proposals, proposals to create new national groups etc to @AngieHar, do not bother developers or community managers with that."

- [@Glasgow, msg#128833, 2021-05-08]: "Ergo and Graviton teams are 🤝 more to come"

- [msg#128758, 2021-05-09]: Roadmap published at https://ergoplatform.org/en/blog/2021-05-09-ergo-platform-roadmap/

---

## Technical Q&A Worth Preserving

- **Q** (@user): "Can someone explain, or point me to resources that go over the reasoning behind [Autolykos v2 enabling mining pools]?"
  **A** (@Glasgow, msg#128218): "Autolykos v1 originally had non-outsourcability built-in, however, it became apparent that with smart contracts it's basically impossible to prevent pools, so they turned it off so that not only larger players were able to take advantage of the loophole. Ergo is now focusing on memory hardness in an attempt to keep mining as fair as possible, which should help prevent ASICs mining at least. There are also some improvements for pooling, e.g. Stratum 2 protocol. 'Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts' https://ia.cr/2020/044 was presented by Alex Chepurnoy at WTSC workshop associated with Financial Cryptography and Data Security 2020 in Malaysia."

- **Q** (@user): "Can Eth project use Oracle pool of Ergo instead of using Chainlink? Is it cheaper and better?"
  **A** (@Glasgow, msg#126317): "The concept of oracles pools was designed for the extended UTXO smart contract model, though the high-level overview can be adapted for use in Account-based systems (like Ethereum). Anyone can use the price feed as its just a number."

- **Q** (@user): "What does this mean for mining decentralization? With mining pools allowed, is the environment at risk of falling into a situation like that of Bitcoin or Ethereum?"
  **A** (@Glasgow, msg#128225): "In terms of like Bitcoin - yes, ergo is designed to be that way. If 51% want to change something they should be able to. More pools will be added as we grow."

- **Q** (@user): "How much is sigmarsv?"
  **A** (@Ron, msg#127369): "about $3.87 usd"

- **Q** (@user): "What are the disadvantages of ergo listed on binance?"
  **A** (@Snowman Jason, msg#127600): "Binance historically requests large sums of money or coins annually to list coins, severely affecting their decentralization with binance holding 5-15%"
  **A** (@Glasgow, msg#126776): "Erg had no premine so they don't have coins to give out"

- **Q** (@Olli Tiainen): "Who are the users [of Ergo's go-to-market strategy]? What is their problem? What is the solution? Where do we find the users? How do we convert them?"
  **A** (@Glasgow, msg#126967): "* The people and devs building on top * see: manifesto * Ergo is, with all its bells and whistles. For some people its decentralised stablecoins - for others its schnorr signatures - others sick of gas fees, etc. * Social Media, SEO, Hackathons, other chains, partners, linear marketing * Clear communication mostly. Simplifying ideas."

- **Q** (@user): "what happens to the staking rewards while someone is providing liquidity [on Cardano DeFi]? do they get sent to the defi contract and the contract controls what pool to stake the ada to?"
  **A** (@DD RUFF, msg#128112): "I don't think the staking rewards are that big of a problem. The entire protocol could act as one stake pool in essence and divide the rewards in proportion to the ada staked in lp"
  **A** (@user, msg#128129): "DC said that LP providers just need to move their ADA back to their wallets before each epoch snapshot and then back to providing LP after the snapshot. He said further that the Oroborous protocol was built precisely to be liquid in this way"

- **Q** (@user): "Why does me Rsv purchase keep failing?"
  **A** (@Armeanio, msg#128974): "There is a period where the current oracle price is updating where it can have tx issues."
  **A** (@Glasgow, msg#128968): "if you try and redeem at 4.56 and the price changes to 4.61 - then your order isn't valid. Do it again and it should work"

---

## Links Shared

- [https://ergonaut.space/en/Cardano]: Explanation of Ergo-Cardano relationship
- [https://ergonaut.space/en/roadmap]: Official roadmap
- [https://www.ergoforum.org/t/discuss-desired-future-exchange-listings/808]: Community discussion thread on exchange listing strategy
- [https://thecoinperspective.com/?c=ERG]: Market cap comparison tool for price targets
- [https://ia.cr/2020/044]: Research paper "Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts" by Alex Chepurnoy
- [https://decrypt.co/40264/cardanos-stablecoin-will-be-better-than-makerdao-says-hoskinson]: Charles Hoskinson article on AgeUSD design superiority
- [https://github.com/Emurgo/age-usd]: AgeUSD GitHub repository
- [https://ergoplatform.org/en/blog/2021-05-09-ergo-platform-roadmap/]: Official roadmap blog post
- [https://ergoplatform.org/en/blog/2021-05-07-ledger-network-integrates-ergo-network/]: Ledger integration announcement
- [https://ergoplatform.org/en/blog/2021-04-19-youtube-video-competition/]: YouTube video competition announcement
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: Ergo Manifesto
- [https://cryptocurrencycheckout.com/coin/ergo]: Non-custodial ERG payment gateway
- [https://cryptocurrencycheckout.com/coin/sigmausd]: SigmaUSD payment gateway for businesses
- [https://cardano.ideascale.com/a/dtd/ErgoDex-Plutus-Port/352410-48088]: ErgoDEX Catalyst proposal (trending/accepted)
- [https://github.com/ergoplatform/ergo/wiki/A-Local-Exchange-Trading-System-On-Top-Of-Ergo]: LETS protocol design document
- [https://medium.com/graviton-one/introduction-to-graviton-defi-liquidity-incentivization-with-a-seamless-borderless-inter-chain-ux-a142b988fbff]: Graviton partnership details
- [https://ergonfts.org]: New NFT portfolio viewer launched by @Enea Kao
- [https://nipopows.com/]: NIPoPoWs information (Ergo, Nimiq, WebDollar have built-in support)
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-may-5th-1c243012d8a5]: Weekly dev update by @Armeanio
- [https://explorer.ergoplatform.com/en/addresses/9gCAzRVgur9a8vx2eYwvEFCKZ8ErpSUQUeCrP3wNS7p5oMip9Mp]: Hotbit exchange wallet (locked, funds safe)

---

## Unresolved Questions

- **ErgoDEX vs ErgoSwap naming**: Multiple names (ErgoDEX, ErgoSwap, SigmaDEX) appearing in different official sources causing confusion. No clear resolution on final branding despite community requests for consistency.

- **Exact launch timeline for ErgoDEX**: "June 2021" mentioned but no specific date confirmed. Unclear if this is testnet or mainnet, and what features will be in initial release (AMM, order book, both).

- **Cardano smart contracts dependency**: Multiple mentions of "once smart contracts released on Cardano" but no firm date confirmed for Goguen/Alonzo release.

- **Charles Hoskinson interview with kushti**: @Mint LkV asked about rumored interview, no confirmation provided on timing or format.

- **Oracle Pool v2 details**: Mentioned as "running for Dexy Gold with GORT rewards" but full specification and incentive structure not detailed.

- **Mobile Yoroi ERG support**: Repeatedly requested, no ETA provided beyond "in progress" and "several people are working on a mobile wallet."

- **Coinex withdrawal restoration**: Ongoing maintenance issue, @Armeanio investigating but no timeline given for resolution.

- **Marketing strategy formalization**: Community expressed concerns about lack of professional AMAs, YouTube presence, and cohesive brand design compared to competitors. @Armeanio acknowledged exchange listings are priority but broader marketing strategy not detailed.

- **Merge-mined sidechains implementation**: @kushti mentioned will "publish sidechain constructions soon" but no specific timeline or technical spec provided.