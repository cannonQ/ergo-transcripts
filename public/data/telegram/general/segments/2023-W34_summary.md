---
title: "Ergo General Chat — 2023-W34"
date_start: "2023-08-21"
date_end: "2023-08-27"
type: telegram_weekly
channel: general
week: "2023-W34"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2023-W34 Summary

## Key Topics Discussed

- **Bitpanda Listing Fundraiser**: Community successfully raised 8,575 ERG through an Ergo Raffle to support Bitpanda GmbH listing marketing activities. Raffle completed on 2023-08-21, with 215 participants and multiple whale donations, including matched contributions from core team members (kushti, Armeanio).

- **HodlERG Burning Mechanism**: GreasyCEX continuously burns HodlERG3 tokens as part of mission stages, creating deflationary pressure. Users minting 100 ERG into HodlERG3 see their position increase in value due to ongoing burns reducing total supply.

- **Mempool Stress Testing**: qx() successfully increased node mempool capacity to 3,000 transactions and executed multi-transaction consolidation burns (261+ TXs, 564 TXs estimated in largest test). Ergo handled 3,000 TX capacity "with EASE" according to testing feedback.

- **Rosen Bridge Status Updates**: Test bridge shut down after testing period concluded. EVM-chain R&D finalized with solutions ready; watchers bug discovered (not respecting minimum bridge fees). Cardano change address issue identified in cardano-serialization-lib with ongoing investigation.

- **Weak Blocks / Sub-block Naming Discussion**: Community brainstormed alternative terminology for "weak blocks" scaling mechanism. Suggestions included ephemereal blocks, remora blocks, grease blocks, compact blocks, lean blocks, hot blocks, lambo blocks. kushti cited similar academic terms (anchor, subchains, strong chain).

- **Paideia DAO Beta Release**: In-house beta testing progressing well with proposal creation and voting working on frontend. Public beta expected in "a few weeks" pending bug fixes; team anticipates seamless DAO deployment suite release.

- **Palmyra DEX Launch**: Desktop-only static app launched at Palmyra.app on 2023-08-26. Mobile temporary static temple deploying soon; full mobile version expected in couple months. Dan Friedman confirmed desktop launch, team effort acknowledged.

- **Oracle Pools and Dexy Gold**: Oracle Pool v1 operational with EF members and external participants. Oracle Pool v2 running for Dexy Gold with GORT reward distribution. Plans to build out native Ergo Oracle Pools with capital from token sale.

- **Ergo Mixer Complexity and UX**: Mixer requires local computation on users' machines; outsourceable mixing research ongoing for future "click-to-mix" functionality. Liquidity concerns raised; education about privacy tradeoffs needed for mainstream adoption.

- **ErgoHack VII Announcement**: Foundation announced ErgoHack VII: Future of Finance, with deadline and Ergo Summit following hackathon. Call for developers to build products in payments, investing, lending sectors.

## Important Decisions or Announcements

- [@HQΣr, msg#424114, 2023-08-21]: Bitpanda raffle fundraiser reached 100% completion at 8,575 ERG raised, with 215 total participants.

- [@qx(), msg#424553, 2023-08-22]: Ergo node successfully handled 3,000 TX mempool capacity, confirming protocol scalability beyond standard 1,000 TX limit.

- [@kushti, msg#424588, 2023-08-22]: Created additional ErgoHack VII incentive raffle (8,575 ERG goal) to fund developer participation; offered to share charity wallet seed phrase with trusted community member.

- [@Dan Friedman, msg#425321, 2023-08-26]: Palmyra.app desktop app officially launched; temporary static mobile temple coming soon, full mobile version in 2-3 months.

- [@Armeanio, msg#425402, 2023-08-27]: Developer Update delayed to Saturday 2023-08-26 due to travel to Denver for Palmyra support; CW assisted with broadcast.

- [Ergo NEWS, msg#424459, 2023-08-22]: Bitpanda raffle completion announced with community praise for solidarity; partnership confirmation emphasized ecosystem synergy.

- [Ergo NEWS, msg#424685, 2023-08-23]: SigmaUSD and Paideia update posted; Paideia public beta expected "in a few weeks."

- [Ergo NEWS, msg#425127, 2023-08-25]: Announcement of ErgoHack VII: Future of Finance and Ergo Summit, highlighting Rosen Bridge launch, Paideia beta, Spectrum DEX Cardano expansion, Quacks lending dApp, and ecosystem growth.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#423748): Will total ERG supply exceed 97,739,924 hard cap, or is that final limit?
  **A** (@kushti, msg#423805): In Ergo this would be extremely hard, so the limit is hard.

- **Q** (@Unknown, msg#424316): If GreasyCEX keeps burning HodlERG, doesn't that pump holders' bags? How much would 100 ERG → HodlERG be worth now?
  **A** (@qx(), msg#424317): Exactly, that's the plan of the mission; more hodl will burn in coming days.

- **Q** (@gg, msg#424338): Price of HodlERG3 always goes up against ERG price?
  **A** (@gg, msg#424339): "Mathematically proven" — if ERG dumps against USD, HodlERG price also dumps against USD; price of HodlERG always goes up against ERG price.

- **Q** (@Unknown, msg#424326): If ERG price goes up, does HodlERG3 price go up as well?
  **A** (@qx(), msg#424328): HodlERG3 price depends on how much hodl is being burned; currently 1 HODL is 1.021155 to mint.

- **Q** (@Unknown, msg#424928): What happens in 2044 when emission rate goes to zero regarding PoW?
  **A** (@Glasgow, msg#424933): [Linked to docs: https://docs.ergoplatform.com/mining/revenue/] — transition plan documented in mining revenue section.

- **Q** (@R, msg#425149): Is there liquidity issue with Ergo Mixer?
  **A** (@R, msg#425149): Never noticed liquidity issues; sent stuff to covert address, withdrew later — no rush, doesn't track time.
  **Counter:** (@Unknown, msg#425144-425145): Virtually zero liquidity makes bad impression on new users; chicken-and-egg problem.

- **Q** (@Unknown, msg#425184): Why can't mixer be added as button in Nautilus wallet?
  **A** (@Unknown, msg#425185): Not possible with current implementation; mixer must run locally on user's computer.
  **Research:** (@Unknown, msg#425189): Outsourceable mixing research ongoing for future "click-to-button" possibility.

- **Q** (@Luivatra, msg#424537): I thought mempool max was 1,000?
  **A** (@qx(), msg#424539): Increased to 3,000 on node; have hardware for it (56 cores, 128GB RAM).

- **Q** (@Luivatra, msg#424551): Was mempool 1,000 max because miner nodes have it at 1K?
  **A** (@qx(), msg#424553): Default is 1,000, but node supports higher. Ergo handled 3,000 with ease.

- **Q** (@Unknown, msg#424589): Why 250 ERG fee to send 3 transactions in raffle?
  **A** (@Glasgow, msg#424590): 250 ERG fee goes to random raffle supporter, not the OP (creator).

- **Q** (@Unknown, msg#425021): What are weak blocks?
  **A** (@kushti, msg#424922): Ephemereal blocks; lots of interest for community discussion on naming and mechanics.

- **Q** (@kushti, msg#425004): Why is Ergo better than Ethereum for contracts?
  **A** (@kushti, msg#425004): Ergo contracts are isolated; stateless and light clients possible. ETH stateful design causes re-entrancy issues; Ergo has natural account abstraction since day one. Low-level programming model tailored for programmable money, not injecting programs into a "computer."

## Links Shared

- [https://ergoraffle.com/raffle/show/bbf6d505f0bd9f10392d4e128f4fdb305b087bae301fcbd6c8f6396ddbb0b817]: Bitpanda listing fundraiser raffle (completed 100% @ 8,575 ERG).

- [https://ergo.aap.cornell.edu/en/addresses/9gXexEVopaqqUyXdyNBCBa3qRLN2UvSyjZZ9MmEbzUQY6jAizhG]: qx() payroll address for monitoring large consolidation burn transactions.

- [https://ergexplorer.com/]: New Ergo Explorer UI with improved interface.

- [https://ergoraffle.com/raffle/show/8a8c7f720051870368555604644b69a24a3bcd20502cd0b42dcd18dbab88fd23]: ErgoHack VII developer incentive raffle (separate from Bitpanda raffle).

- [https://rosen.tech/]: Rosen Bridge official site; test bridge now offline, production launch imminent.

- [https://github.com/rosen-bridge/coming-soon]: Rosen Bridge coming soon teaser repo.

- [https://bit.ly/45zCkrx]: ErgoHack VII announcement and registration (official Ergo Foundation hackathon).

- [https://docs.ergoplatform.com/mining/setup/join/#steps-to-start-mining]: Official mining setup and pool join documentation.

- [https://github.com/ErgoRaffle/raffle-documentation]: Ergo Raffle contract documentation and implementation details.

- [https://www.ergopad.io/staking]: ErgoPad staking options (ErgoPad, Paideia, Neta, AuctionHouse, EGIO receive rewards).

- [https://simpleswap.io/]: Non-KYC instant swap service; qx() tested for ETH/BTC/XLM → ERG DCA.

- [https://recovery.duckpools.io]: Old DuckPools version requiring migration to new version for yield.

- [https://duckpools.io]: New DuckPools v2 with active yield farming.

- [https://www.ergoforum.org/t/yet-another-mixing-protocol/3359/2]: Forum discussion on outsourceable mixing research.

- [https://Palmyra.app]: Palmyra DEX desktop application (launched 2023-08-26).

- [https://www.coingecko.com/en/coins/ergo#markets]: ERG trading market overview on CoinGecko.

- [https://recovery.duckpools.io/]: DuckPools old version recovery site.

- [https://phoenix.app or app.hodlcoin.co.in]: HodlERG3 minting interfaces (same contract, different UIs).

- [https://twitter.com/ERG_Armeanio/status/1695614584659591671]: Armeanio Twitter thread on ecosystem updates.

- [https://www.youtube.com/watch?v=zcOM9ucv0cs]: Andy L Developer Update video (2023-08-27).

- [https://www.youtube.com/watch?v=bRBwfJyBeoA]: qx() stream link for Ergo discussion.

- [https://twitter.com/HouseofChimera/status/1694711093497929873]: Discovery Episode 24 with kushti announcement.

## Unresolved Questions

- **Block naming convention**: Community debate ongoing on terminology for "weak blocks" / sub-blocks. Candidates: ephemereal, remora, grease, compact, lean, hot, lambo, optimal, stream, sync blocks. No final decision announced; kushti noted academic literature uses anchor/subchains/strong chain.

- **Mixer UX and adoption path**: How to achieve mainstream mixer usage without sacrificing privacy. Outsourceable mixing research ongoing but no timeline. Local computation requirement limits mobile/web wallet integration.

- **Bitpanda listing timeline**: ETA not confirmed; "soon" only official response. Raffle funds fully raised 2023-08-21, but actual listing date TBD.

- **Palmyra mobile release**: Desktop launched 2023-08-26, but mobile temporary template and full mobile version timeline not firmed beyond "couple months."

- **ERG mining post-2044**: Emission rate reaches zero in 2044; long-term miner incentive structure (storage rent implications) not detailed in chat, documentation linked.

- **Rosen Bridge EVM integration**: R&D finalized but integration timeline and mainnet launch date TBD. Cardano change address issue still under investigation.

- **Paideia public beta**: Expected "a few weeks" but exact release date not specified (as of 2023-08-27).

- **Duckpools performance**: Questions raised about slow page load speeds; root cause not identified in chat.

- **Oracle Pool v2 stability**: Watcher fee bug discovered; fix described as "simple and ongoing" but no fix completion date provided.