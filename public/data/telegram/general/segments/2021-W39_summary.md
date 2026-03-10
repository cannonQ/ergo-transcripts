---
title: "Ergo General Chat — 2021-W39"
date_start: "2021-09-27"
date_end: "2021-10-03"
type: telegram_weekly
channel: general
week: "2021-W39"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2021-W39 Summary
**Period:** 2021-09-27 to 2021-10-03

---

## Key Topics Discussed

- **UTXO Alliance Formation**: Ergo joined the UTXO Alliance alongside Cardano, Nervos, Topl, and other UTXO-based blockchains to collaborate on scalability, security, and interoperability. The alliance aims to promote research and development across UTXO model implementations.

- **Cardano-Chainlink Partnership**: Cardano announced integration with Chainlink oracles at the Cardano Summit, causing some community concern about Ergo's oracle role. Clarified that Cardano will use multiple oracle solutions — Chainlink provides data feeds (especially for Ethereum assets), while Ergo oracle pools offer hierarchical trust architecture and programmable oracle functionality. Data-inputs feature required for full Ergo oracle deployment on Cardano.

- **Djed/SigmaUSD Stablecoin on Cardano**: Cardano announced Djed stablecoin (based on AgeUSD protocol) will be issued by COTI. Djed on Cardano and SigmaUSD on Ergo share the same underlying protocol design. SigmaUSD will be available on Cardano via ErgoDEX once launched.

- **ErgoDEX Development Progress**: Beta live on Ergo blockchain with real assets. Cardano deployment targeting mid-October 2021 for public testing with AMM swaps and liquidity provision. No governance token at launch; if needed later, will be distributed to minimize plutocracy. Fees paid natively in ERG or ADA depending on chain.

- **Storage Rent Mechanism**: Discussion about storage rent economics post-emission. Estimated 7.49 ERG/block from storage rent during final emission months. Rent charged on UTXOs inactive for 4 years — sending all assets to yourself resets timer and consolidates boxes. Most rent expected from unused miner addresses with many small boxes.

- **Changelly Listing and Yoroi Integration**: ERG listed on Changelly exchange, enabling future "buy ERG" button directly in Yoroi wallet. Some users reported UI glitches requiring ad-blocker disable or toggling fixed rate mode.

- **Ergo Auction House V2**: Major update announced with custom token support for auction purchases, artist royalties system, and improved NFT tooling. Launch expected within 1-2 weeks pending testing.

- **ErgoHack II Preparation**: Second hackathon scheduled for October 8-10, 2021, with "Social Transformation" theme. ~160 participants registered (4x first hackathon). Teams working on ETH bridge, GameFi oracle API, and other projects.

- **Mining Difficulty Adjustment**: Difficulty dropped significantly as epoch changed, adjusting to lower hashrate following price decline and some miners switching to other coins.

- **Ledger Hardware Wallet Support**: Integration in late development stage, being implemented into Yoroi first.

- **NIPoPoWs and Data-Inputs**: Discussed Cardano implementation of data-inputs (Ergo invention) necessary for efficient oracle pools and other read-only reference functionality without burning boxes.

---

## Important Decisions or Announcements

- [@Glasgow, msg#213102, 2021-09-26]: "Cardano will allow developers to pick from a variety of oracles. Wolfram alpha and ergo were already announced. [...] Cardano is implementing data-inputs which will allow Ergo's oracle pools to work natively."

- [@Armeanio, msg#213217, 2021-09-30]: "https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-september-29th-44baf7302fd8" — Weekly dev update published covering oracle pools, mixer, auction house v2, and ErgoDEX progress.

- [@Armeanio, msg#213494, 2021-09-30]: "https://curiaregiscrypto.medium.com/auctionhouse-v2-update-7acf7627bb80" — Auction House V2 launching in next week or two with custom token support and royalty system.

- [@Glasgow, msg#214135, 2021-10-03]: Refreshed roadmap published: "https://www.reddit.com/r/ergonauts/comments/q0iyqn/the_road_ahead/" showing ErgoRaffle nearing completion, ErgoDEX phases, and other ecosystem projects.

- [@Armeanio, msg#214236, 2021-10-03]: "New: 10 erg bounty on the best video for installing ergomixer, mixing kushtis w/mixer hops and a stealth address. I want to see a video guide your grandmother could follow"

- [@Glasgow, msg#213293, 2021-09-30]: UTXO Alliance announcement: "Interoperability is the future. It legitimizes the blockchain industry and makes it more functional and accessible. The list of partners we work with continues to grow."

---

## Technical Q&A Worth Preserving

- **Q** (@Stefan A, msg#212100): Why did Cardano choose Chainlink as oracle provider? Is that why Ergo price is going down?
  **A** (@Glasgow, msg#212102): "Cardano will allow developers to pick from a variety of oracles. Wolfram alpha and ergo were already announced. [...] The design of Ergo's oracle pools are more efficient and programmable than using multiple single oracle data points such as in Chainlink's oracle design. We build hierarchies of confidence using oracle pools and pools of oracle pools in Ergo. It's faster, cheaper, and more beneficial to the end user."

- **Q** (@Autolykos Megistos, msg#213130): In video @kushti_ru talks about ErgoDEX presenting "different composability" — what does he mean?
  **A** (@Ilya Oskin, msg#213220-221): "Limit orders can be filled from AMM pools etc. Different types of DEXes can interoperate [...] Different types of smart-contracts can be composed"

- **Q** (@Unknown, msg#213735): Does Ergo focus on financial contracts mean it's not well-equipped for data storage?
  **A** (@Glasgow, msg#213771-772): "It can pretty much do everything - except some types of games due to the blocktime. it's positioned as contractual money"

- **Q** (@TMR.ΣRG, msg#214022-025): Questions about ErgoMixer statistics and covert addresses
  **A** (@Glasgow, msg#214033): "Yes you can give them that addresses then set it to withdraw to your normal address and it'll be untraceable. Pending erg is to fill the box. Can't mix until its full."

- **Q** (@Unknown, msg#212830): Will ergoscript be Turing complete like Plutus?
  **A** (@Gazza, msg#213849): "Both are Turing complete so they can complete any algorithm. Neither is better or worse than the other really, they have a number of different instructions so you can't run ergoscript code on cardano and vice versa but you can use the ergoscript code to get a good idea of how to rewrite it on Plutus."

- **Q** (@MrStahlfelge, msg#213747-748): How does storage rent work exactly?
  **A** (@MrStahlfelge, msg#213747-748): "Exactly. I think most storage fees will be withdrawn from unused miner addresses because they have a lot of small boxes. Rent is withdrawn when a box is 4 years old. Most traders have big boxes, pool minors have a lot of small boxes - more storage fee per ERG. Solution: send to yourself, makes a new box and combines all the small ones to a big."

- **Q** (@Unknown, msg#213242): Is it true that Ergo's oracles is not a working product?
  **A** (@Glasgow, msg#213249-250): "We need to wait until ADA adds data-inputs for them to be able to run properly. You can still do it and burn a box each time. I believe LINK will need to wait for that too though, unless they're just burning a box"

- **Q** (@Autolykos Megistos, msg#213226): Why does ErgoDEX beta use Yoroi Nightly and not just Yoroi?
  **A** (@Ilya Oskin, msg#213232): "Yoroi Dapp Connector only works with Nightly for now. Once stable dapp connector is released we will migrate to it and you'll be able to use Yoroi"

---

## Links Shared

- [https://ergoplatform.org/en/blog/2021-09-26-the-utxo-alliance/]: UTXO Alliance announcement and explanation
- [https://ergoplatform.org/en/blog/2021-04-27-chainlink-oracles-vs-ergo-oracle-pools/]: Comparison of Chainlink oracle design vs Ergo oracle pools
- [https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md]: EMURGO research on UTXO model enhancements including data-inputs
- [https://ergoplatform.org/en/blog/2021-09-28-hacking-social-transformation/]: ErgoHack II theme discussion on social transformation
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-september-29th-44baf7302fd8]: Weekly dev update September 29th
- [https://curiaregiscrypto.medium.com/auctionhouse-v2-update-7acf7627bb80]: Auction House V2 announcement and features
- [https://www.reddit.com/r/ergonauts/comments/q0iyqn/the_road_ahead/]: Updated roadmap showing project statuses
- [https://ergohack.io/]: ErgoHack II website with registration and resources
- [https://beta.ergoraffle.com/]: ErgoRaffle beta launch
- [https://docs.ergoplatform.com/ErgoScript.pdf]: ErgoScript language specification
- [https://ergoplatform.org/en/blog/2021-06-09-building-ergo-ergoscript/]: Building with ErgoScript guide
- [https://ergo.watch/emission]: Emission schedule and circulating supply tracker
- [https://explorer.ergoplatform.com/en/charts/total]: Blockchain explorer with supply charts
- [https://github.com/ergoplatform/ergo/wiki/A-Local-Exchange-Trading-System-On-Top-Of-Ergo]: LETS implementation specification
- [https://forms.gle/dW7tNi7Dw7yiaUbG7]: ErgoHack II idea voting form
- [https://twitter.com/chepurnoy/status/1443179045034811395]: ErgoScript example: payments with timing conditions
- [https://twitter.com/changelly_team/status/1443970625308090376]: Changelly listing announcement

---

## Unresolved Questions

- **Ethereum PoS Timeline Impact**: Discussion about ETH moving to PoS potentially happening end of 2021/early 2022 (consensus: likely delayed to 2022). Impact on Ergo hashrate from GPU miners switching remains uncertain.

- **Post-Emission Mining Economics**: Concerns raised about long-term mining sustainability after emission ends in 2027. Storage rent projected to provide ~7.49 ERG/block but uncertainty remains about whether storage rent + transaction fees will be sufficient for network security. Hard fork would be needed to adjust emission schedule.

- **ErgoDEX Stage 6 Completion Timeline**: Stage 6 (full feature completion) not expected in 2021. Cardano beta targeting mid-October, but full launch timeline unclear.

- **Yoroi Mobile ERG Support**: Android wallet exists, iOS port in development. Yoroi mobile ERG support discussed but no firm timeline given.

- **Oracle Pool v2 Deployment**: Oracle Pool v2 running for Dexy Gold with GORT rewards, but full deployment timeline and broader oracle pool expansion not specified.

- **Coinbase/Kraken Listings**: Community questions about major exchange listings. Standard response: exchange discussions under NDA, no timeline available.

- **Transaction Throughput (TPS)**: Question raised about Ergo's TPS capacity. Answer: depends on smart contract construction, no fixed TPS value. Layer 2 scaling solutions being researched.