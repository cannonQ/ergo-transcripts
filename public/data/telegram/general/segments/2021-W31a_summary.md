---
title: "Ergo General Chat — 2021-W31 (Part A)"
date_start: "2021-08-02"
date_end: "2021-08-08"
type: telegram_weekly
channel: general
week: "2021-W31"
part: "a"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2021-W31a Summary
**Period:** 2021-08-02 to 2021-08-04

---

## Key Topics Discussed

- **KuCoin Listing Announcement**: KuCoin announced ERG listing with deposits open immediately, trading starting 10:00 UTC August 5, 2021, and withdrawals from August 6. This was the "tier 1 exchange" announcement teased by the Ergo Foundation earlier in the week. Community reaction was strongly positive.

- **Bitcoin.com Exchange Listing**: ERG was listed on Bitcoin.com exchange on August 3, 2021. This had been delayed from the prior week due to a technical issue. Confirmed as a separate event from the KuCoin tier 1 announcement.

- **ErgoExplorer Outage from Malformed ErgoTree**: The Ergo explorer was stuck for approximately one hour due to a transaction containing a non-standard (malformed) ErgoTree script. kushti confirmed the protocol itself was unaffected — the explorer assumed all trees are valid, which caused the failure. The issue was resolved same day.

- **ErgoDEX Development Status**: Community discussed ErgoDEX beta being close to release but held up by a bug in the Yoroi dApp connector (refund fix). July updates confirmed included: design guidelines, beta AMM UI, swap page UI, Haskell SDK for AMM DEX, and AMM bots for Cardano. The ErgoDEX roadmap on ergodex.io was noted as outdated.

- **SigmaUSD / AgeUSD Reserve Ratio Discussion**: The reserve ratio was observed to have risen sharply (above 2000%), blocking new SigmaRSV minting. A community member asked whether SigmaRSV could be converted directly to SigmaUSD without routing through ERG first. The answer was that this is not currently possible on sigmausd.io but could be implemented as a front-end feature on top of the AgeUSD protocol, potentially via ErgoDEX.

- **NIPoPoWs and Light Client Functionality**: Discussed as a scaling and accessibility feature enabling light nodes and low-bandwidth blockchain interaction, relevant to Ergo's Africa/developing-world use cases in conjunction with Cardano.

- **Ergo NFT Ecosystem Growth**: Multiple NFT projects were active on ergoauctions.org, including a National Parks series by Peppers CK (with 20% proceeds donated to national parks) and the first audio NFT on the platform by Ron. ERGnomes also minted its first Cardano NFT. A Discord server for Ergo NFT artists was established.

- **Oracle Pool Discussion**: Community discussed Ergo's oracle pools (developed partly from kushti's prior work with Sergey Nazarov pre-Chainlink). Oracle Pool v1 is run by Ergo Foundation members and some outside contributors; Oracle Pool v2 is running for Dexy Gold with GORT rewards. It was noted that Ergo oracles are native/more secure but need more tooling and network scale.

- **Ergo/Cardano Relationship**: Several new users asked about the relationship. Community clarified: Ergo is an independent PoW eUTXO blockchain; kushti previously worked as a researcher at IOHK; Emurgo is a key partner; AgeUSD was jointly developed with Emurgo/IOHK and implemented on Ergo first; ErgoDEX will run natively on both chains.

- **ERG Transaction Fees**: Clarified that the minimum network fee is 0.001 ERG; Yoroi hardcodes 0.0011 ERG; the Android wallet uses 0.001 ERG. Exchange withdrawal fees (e.g., Gate.io charging 0.5 ERG) are set by exchanges independently of the protocol.

- **Gate.io Mining Dust Collection**: kushti revealed that the July 7 block size spike on the explorer was Gate.io collecting miner dust — hundreds of transactions with 100 inputs each, collecting over 500,000 ERG in a single day.

- **SigmaUSD Minting from ErgoMixer**: kushti noted that ERG native tokens (including SigmaUSD) can be minted directly from the ErgoMixer — described as one of many interesting on-chain interactions happening daily.

---

## Important Decisions or Announcements

- [@Glasgow｜WON'T DM, msg#176541, 2021-08-03]: KuCoin listing confirmed via official KuCoin Twitter announcement.
- [@Glasgow｜WON'T DM, msg#176567, 2021-08-03]: KuCoin has grid trading, described as "a better version of AMM" for liquidity provision.
- [@kushti khushi, msg#175794, 2021-08-02]: Ergo explorer stuck ~1 hour due to non-standard ErgoTree script in a transaction; network unaffected; explorer devs fixed it.
- [@kushti khushi, msg#175805, 2021-08-02]: Confirmed the problematic transaction contained a malformed ErgoTree that is valid per protocol but broke the explorer's assumption of tree validity.
- [@kushti khushi, msg#175818, 2021-08-02]: Revealed the July 7 block size spike was Gate.io collecting miner dust — 500,000+ ERG collected in one day via hundreds of 100-input transactions.
- [@kushti khushi, msg#175839, 2021-08-02]: Confirmed SigmaUSD minting directly from the ErgoMixer is possible.
- [@kushti khushi, msg#176999, 2021-08-03]: Commented positively on the self-growing NFT community on Ergo.
- [@Dmitry Usov, msg#175286, 2021-08-02]: Confirmed Ergo Foundation has only 4.43% of total emission for dev/marketing support.
- [@Miles, msg#177615, 2021-08-03]: KuCoin trading opens 10:00 UTC August 5, 2021; withdrawals open 10:00 UTC August 6, 2021.
- [@Luivatra, msg#177753, 2021-08-04]: ErgoDEX release is currently blocked by the Yoroi dApp connector bug (refund fix pending).

---

## Technical Q&A Worth Preserving

- **Q** (@Jake Nguyen): What are the use cases for ERG on the network, particularly on ErgoDEX?
  **A** (@Dmitry Usov, msg#175257-175262): ERG is the main coin of the Ergo blockchain. Any transaction on the chain requires ERG as a fee. UTXOs cannot exist without ERG (analogous to ADA on Cardano). ErgoDEX will have two networks — fees on Ergo network paid in ERG, fees on Cardano network paid in ADA.

- **Q** (@Jake Nguyen, msg#175326): Is the 0.001 ERG transaction fee fixed permanently?
  **A** (@MrStahlfelge, msg#175349): The fee can be changed; minimum is 0.001 ERG. Yoroi hardcodes 0.0011 ERG for unknown reasons; the Android wallet uses 0.001 ERG.

- **Q** (@s F, msg#175352): Are SigmaUSD and AgeUSD separate stablecoin projects?
  **A** (@Dmitry Usov, msg#175353): AgeUSD is the protocol name; SigmaUSD is the implementation name for Ergo's deployment of the AgeUSD protocol.

- **Q** (@Josh, msg#176665): What is the difference between an oracle and an oracle pool?
  **A** (@Hero Grinder, msg#176675): Oracle pools use more than a single data point and provide hierarchy for the data feed, making them more reliable than traditional single-oracle approaches. kushti previously worked with Sergey Nazarov on smartcontracts.com (which became Chainlink). In-depth: https://ergonaut.space/en/Oracle-Pools

- **Q** (@TMR.ΣRG, msg#177168): With the SigmaUSD reserve ratio above 2000% (blocking SigmaRSV minting), is it possible to convert SigmaRSV to SigmaUSD directly without routing through ERG first?
  **A** (@Lorem, msg#177182-177185): sigmausd.io is just a front end. Any dApp can be built on top of the AgeUSD protocol to facilitate that conversion. ErgoDEX may add SigmaRSV/SigmaUSD pairs. The direct swap would effectively be a DEX function, not a core protocol function.

- **Q** (@Unknown, msg#177514): Is NIPoPoWs a scaling solution? Can it be leveraged for payment speed?
  **A** (@TMR.ΣRG, msg#177530): Yes, NIPoPoWs enable scaling, light node functionality, and low-bandwidth/low-internet transacting. See https://nipopows.com/ for the full paper.

- **Q** (@Unknown, msg#176978): Could Ergo theoretically support the same functionality as Ethereum?
  **A** (@Ron, msg#176982-176986 & @Glasgow, msg#176987): Yes, but smart contracts would need to be rewritten. Ergo/Cardano use the eUTXO accounting model (like Bitcoin); Ethereum uses an account model — different paradigms. Glasgow noted Ergo can do ~99% of what Ethereum does, without gas fees.

- **Q** (@Unknown, msg#177485): What can Ergo do that Cardano cannot?
  **A** (@Unknown, msg#177485-177487): Ergo supports read-only inputs in transactions (Cardano does not currently). ErgoScript allows contracts to process step-wise across many blocks. These enable more complex DeFi constructions.

- **Q** (@SipSipSlurp, msg#177110-177120): Why does the explorer show a different ERG balance than the wallet?
  **A** (@TMR.ΣRG, msg#177127 & msg#177143): In eUTXO, a wallet's balance is spread across multiple boxes. The explorer may only show boxes involved in a specific transaction, not the full wallet balance. The total is correct when all boxes are aggregated by the wallet.

---

## Links Shared

- [https://twitter.com/kucoincom/status/1422499558546804737]: Official KuCoin announcement of ERG listing
- [https://twitter.com/BitcoinComExch/status/1422486905581674497]: Bitcoin.com Exchange ERG listing announcement
- [https://explorer.ergoplatform.com/en/transactions/3a8555a63904527a70b4f1896d4c265dff86152db5837820398c5531db143ac2]: The problematic transaction with malformed ErgoTree that caused the explorer outage
- [https://ergoplatform.org/en/blog/2019_05_20-curve/]: Ergo emission schedule and treasury breakdown (4.43% treasury, emitted within first 2.5 years)
- [https://ergonaut.space/en/Oracle-Pools]: In-depth explanation of Ergo Oracle Pools
- [https://ergonaut.space/en/home]: Main Ergo community wiki / knowledge base
- [https://ergonaut.space/en/roadmap]: Ergo roadmap
- [https://ergonaut.space/Cardano]: Ergo-Cardano relationship explainer
- [https://nipopows.com/]: NIPoPoWs website and whitepaper
- [https://sigmausd.io/#/]: SigmaUSD dApp
- [https://ergosites.github.io]: Community-built utilities and infographics index
- [https://ergoauctions.org/#/auction/specific/ddb80ec8973fe78fff9f0c3e21c8045f3d3be5d051a563597e7468f2a9322692]: Ron's audio NFT auction (first audio NFT on Ergo)
- [https://www.graphiko.net/]: Peppers CK's National Parks NFT collection
- [https://ergoplatform.org/en/blog/2021-07-13-updated-2021-roadmap-from-kushti/]: kushti's updated 2021 Ergo roadmap blog post
- [https://ergoplatform.org/en/blog/2021-07-01-lets-start-the-discussion/]: Ergo LETS (Local Exchange Trading System) proposal blog post
- [https://www.reddit.com/r/ergonauts/comments/ohftim/ergoteam_a_simpler_collective_spending_approach]: ErgoTeam proposal — a simpler collective spending/governance contract replacing the ZK Treasury dApp
- [https://ergoplatform.org/en/exchanges/]: Official list of exchanges supporting ERG
- [https://forum.cardano.org/t/ergo-will-complement-cardano/45412]: Cardano forum post on Ergo/Cardano complementary relationship
- [https://coinmarketcal.com/en/event/kucoin-listing-81930]: CoinMarketCal event entry for KuCoin ERG listing (community asked to upvote)
- [https://github.com/ergolabs/ergo-dex]: ErgoDEX open-source GitHub repository
- [https://discord.gg/8KdWfpHNZR]: Ergo NFT Discord server for artists and collectors

---

## Unresolved Questions

- **ErgoDEX release date**: Still blocked pending Yoroi dApp connector refund bug fix; no ETA given beyond "soon."
- **Ledger hardware wallet support for ERG via Yoroi**: Confirmed as in development with weekly updates from devs; no timeline provided.
- **Direct SigmaRSV → SigmaUSD conversion**: Technically possible to build on top of AgeUSD protocol but not implemented anywhere yet; flagged as a potential ErgoDEX feature.
- **Ergo Oracle Pool expansion**: Dan (Armeanio) indicated interest in using token sale proceeds to build out Ergo's native Oracle Pools (currently only ~2 active), but no formal commitment or timeline confirmed.
- **Changelly / Changelly Pro listings**: Mentioned as coming "shortly after" KuCoin week but no confirmed date.
- **ErgoTeam dApp**: Replacing ZK Treasury; referenced in a Reddit post but not yet released — governance/voting weight mechanics (whether contribution size affects vote weight) were debated but unresolved in chat.
- **Yoroi "send all assets" button**: Flagged as dangerous (could accidentally send SigmaRSV, NFTs, or other tokens to exchanges). Armeanio noted as pushing for a fix; Emurgo acknowledged the issue but no timeline given.