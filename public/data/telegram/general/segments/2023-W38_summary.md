---
title: "Ergo General Chat — 2023-W38"
date_start: "2023-09-18"
date_end: "2023-09-24"
type: telegram_weekly
channel: general
week: "2023-W38"
source: telegram
message_count: 709
categories: [defi, bridges, ecosystem, mining, technical, nft, governance, wallet, marketing, community]
key_terms: [Dexy Gold, oracle pool, gold price feed, stablecoin, buyback mechanism, Rosen, Catalyst Fund 10, 850k ADA, cross-chain bridge, SPO toolkit, CoinEx hack, KYC requirements, Bitpanda, SimpleSwap, USDT pairs, Sigmanauts, DAO mining pool, storage rent, 1% fee, ergoport dashboard]
---
# Ergo General Chat — 2023-W38 Summary

## Key Topics Discussed

- **Dexy Gold Oracle Pool Launch**: The Dexy Gold stablecoin oracle pool is ready for mainnet deployment. Kushti is performing final checks on the buyback contract before launch. Reward tokens (GORT) are distributed to oracle operators, with positive feedback loops where Dexy fees buyback GORT on open market LPs.

- **Rosen Bridge Catalyst Funding**: Rosen Bridge secured 850k ADA from Cardano's Catalyst Fund 10, along with Spectrum DEX and Palmyra (ZenGate). The funding supports SPO documentation, tooling, and cross-chain infrastructure development. Additional funding accelerates rather than gates core delivery.

- **Palmyra (ZenGate) Tokenized Commodities**: Palmyra platform uses Chainlink oracles + Winter Protocol for on-chain warehouse receipts and decentralized trade financing. IoT devices (cameras, weight sensors, motion sensors) provide proof-of-existence for commodity reserves. Multiple oracle providers (including Ergo oracles) will be integrated over time.

- **Sigmanauts DAO Mining Pool**: Community is testing a DAO-controlled mining pool with MiningCore, currently targeting 5-15 GH hashrate. Pool charges 1% fee to Sigmanauts Treasury. Storage rent mining implementation planned within weeks by Cheese Enthusiast.

- **SigmaUSD Minting Lock**: SigmaUSD minting is temporarily locked (bank out of mint range). Dexy Gold provides unrestricted stablecoin minting alternative. Discussion of Mehen fiat stablecoin launch on Ergo in 2024.

- **Artificial Economic Intelligence (AEI)**: Extended theoretical discussion of autonomous AI agents operating on blockchain, earning/spending money, issuing financial instruments. Ergo's contract model better suited for AEI than alternatives due to simplified blockchain interaction and p2p instrument issuance.

- **Exchange & Listing Challenges**: CoinEx suspended services for server upgrade; BitPanda now offers EU on-ramp with KYC (deposit/withdrawal launching Q4/Q1). SimpleSwap and alternative non-KYC swaps discussed as interim solutions. India's largest crypto app (MahatmaCrypto/CoinSwitch) polled for next listing—community promoted Ergo.

## Important Decisions or Announcements

- [@kushti khushi, msg#431839-431840, 2023-09-19]: Need to recheck buyback contract for Dexy Gold before pool launch; "just in case."

- [@qx(), msg#431952, 2023-09-20]: Sigmanauts DAO mining pool officially launched testing with 5-15 GH hashrate, 1% treasury fee, storage rent mining in pipeline.

- [@Unknown, msg#431961, 2023-09-20]: Ergo Foundation launching comprehensive audience research survey to understand community needs and shape development roadmap.

- [@Armeanio, msg#432713, 2023-09-22]: Rosen Bridge funding "additional funding just helps to refine development and tooling for SPOs and everyone else" — core delivery was contingent-free.

- [@glasgowm, msg#432321-322, 2023-09-21]: Dexy Gold oracle uses USD/XAU price feeds from Coingecko and Bitpanda.

- [@Chris Ray, msg#433250, 2023-09-23]: Launching NFT-based Material Test Record (MTR) tracking for construction/manufacturing supply chain verification on Ergo; seeking team for 6-month pre-build phase.

## Technical Q&A Worth Preserving

- **Q** (@XtraKt, msg#431527): Should small miners sell ERG to SigUSD contract to help price, or does it have same effect as selling on CEX for USDT?
  **A** (@Unknown, msg#431534): SigUSD minting is locked; not possible at moment. Selling to Dexy when operational provides more ecosystem benefit than CEX sales.

- **Q** (@Richi [MANA], msg#431861-867): Can each oracle price feed (GORT, USORT, etc.) share a single reward token, or must each have unique token? Isn't single token more efficient for liquidity?
  **A** (@Unknown, msg#431866-868): Each oracle will have own reward token due to fixed epoch-based distribution. Different protocol fee accruals (e.g., Dexy vs. SigUSD v2) reward operators differently; separate tokens prevent cross-subsidy issues.

- **Q** (@athirai, msg#431876): Route to change SigmaUSD to ERC-20 USDT on ETH without CEX?
  **A** (@gg, msg#431878-879): No direct route currently. SimpleSwap is closest option (though still CEX-adjacent). Rosen Bridge could enable SigmaUSD-USDT pair once live.

- **Q** (@qx(), msg#432394-401, 2023-09-21): How does Cardano Catalyst voting hide results during balloting if votes recorded on-chain? Does voter knowledge of request amounts affect strategy?
  **A** (@Unknown, msg#432405-406): Catalyst uses private sidechain, not transparent on-chain. Catalyst results show over-budget proposals can be skipped despite votes if funding exhausted by higher-ranked proposals.

- **Q** (@Daniel, msg#433485-493): Initialized Ergo node wallet by mistake; can't restore old address with mnemonic. What options remain?
  **A** (@Pulsarz, msg#433486-492): Initialize creates new mnemonic; Restore with same seed should recover old address. If address remains new, mnemonic password must match original exactly.

- **Q** (@qx(), msg#432379-389): Are Cardano Catalyst votes recorded on-chain with visible tallies, or hidden until reveal?
  **A** (@Unknown, msg#432405): Private sidechain used; not on-chain transparency claimed.

## Links Shared

- [https://vxtwitter.com/auction_house_/status/1703528302802063766]: Auction House reference (Kushti tweet thread).

- [https://x.com/paideiadao/status/1703701003390898298]: Paideia DAO governance testing—proposal to change daily staking emissions.

- [https://x.com/pnxgrp/status/1702814797249618283]: "ERG #1" reference (context unclear).

- [https://ergopad.io/projects/zengateglobal]: ZenGate (Palmyra) IDO schedule and information.

- [https://github.com/kushti/dexy-stable/blob/master/spec/spec.md]: Dexy Gold specification document.

- [https://github.com/kushti/dexy-stable/blob/master/spec/gort.md#gold-cooperative]: GORT (Gold Oracle Reward Token) cooperative design spec.

- [https://my.ergoport.dev/cgi-bin/mining/mining_all.html]: Sigmanauts DAO mining pool raw dashboard / testing stats page.

- [https://github.com/ergoplatform/oracle-core/blob/04007eccf390fd0182feb24419ac4776a8c7e42d/core/src/datapoint_source/erg_xau.rs#L38-L57]: Oracle-core ERG/XAU price feed sources (Coingecko, Bitpanda).

- [https://simpleswap.io/static/SimpleSwapCoin_Whitepaper.pdf]: SimpleSwap whitepaper (criticized as vague by Sergey Antonov).

- [https://reddit.com/r/ergonauts/comments/16p7f31/catalyst_fund_10_spectrum_zengate_and_rosen_all/]: Catalyst Fund 10 results summary.

- [https://twitter.com/sigmanaut/status/1704653375579816439]: Sigmanauts DAO mining pool official announcement.

- [https://twitter.com/i/spaces/1DXxyjmZlgNKM]: ZenGate AMA with ErgoPad on Twitter Spaces.

- [https://anchor.fm/thesigmacast/episodes/qx-hosts-an-ama-with-GreasyCex-e29nk5o]: Sigma Podcast episode: qx() AMA with GreasyCex.

- [https://spotify.link/gUMqUDgFmDb]: Ergo Podcast multi-platform link.

- [https://bsky.app/profile/did:plc:ti2oihhnfplmmcyeweqnpksb/feed/Ergo]: Ergo Bluesky feed.

## Unresolved Questions

- **Dexy v2 Fee Allocation**: If oracle rate exceeds LP rate during Dexy Gold operation, exactly how ERG buyback mechanics work and slippage impact on minters vs. redeemers remains implementation-dependent; Pulsarz requested technical clarification from kushti.

- **Rosen Bridge Timeline**: "Very soon" stated multiple times (msg#431646, 432854); no specific date provided. Gold pool launch contingent on final buyback contract review.

- **SigmaFi Liquidity**: Low uptake on SigmaFi loans noted (msg#431709); reason for community hesitation unresolved.

- **Paideia Catalyst Failure**: Why Paideia DAO funding proposal did not pass Catalyst Fund 10 despite being a decentralized governance system. Proposed as surprising given Cardano's governance emphasis.

- **Material Test Record (MTR) NFT Legal Status**: Chris Ray's proposed blockchain MTR system for construction materials—regulatory pathway and liability framework for on-chain document control not discussed in detail.

- **Listing Strategy (Binance vs. Coinbase/Kraken)**: Community divided on whether Ergo should pursue major CEX listings vs. focus on ecosystem/project maturity; no EF official stance confirmed.

- **Storage Rent Mining Implementation**: Cheese Enthusiast assigned to code storage rent mining in Sigmanauts pool; "few weeks" timeline stated (msg#431952) but no milestone tracking visible.

---

**Week Summary**: W38 focused heavily on oracle infrastructure scaling (Dexy v2 launch prep, Catalyst funding for Rosen/Palmyra), community mining pool activation, and exchange accessibility challenges post-CoinEx suspension. Theoretical discussion of AEI underscored Ergo's contract design advantages. No major protocol updates; most activity in dApp layer and ecosystem partnerships.