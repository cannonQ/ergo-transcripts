---
title: "Ergo General Chat — 2020-W20"
date_start: "2020-05-11"
date_end: "2020-05-17"
type: telegram_weekly
channel: general
week: "2020-W20"
source: telegram
message_count: 1650
categories: [marketing, technical, wallet, mining, ecosystem, community]
key_terms: [CoinsBit, listing, airdrop, 25000 ERG, coinsbit.io, ErgoMix, ZeroJoin, mixing, privacy, non-interactive, CoinJoin, Cypra, wallet, SPV, atomic swaps, ErgoMix integration, SNICKER, mining pool, Jason Davies, PPS]
---
# Ergo General Chat — 2020-W20 Summary

## Key Topics Discussed

- **Ergo Mining Pool Launch**: Jason Davies announced beta testing of the first public Ergo mining pool with PPS (Pay Per Share) model and 5% pool fee. Miners receive full block rewards including fees when they find blocks. Pool expected to provide optimized miners soon, with RTX 2070 achieving ~61 MH/s with open-source miner, anticipated to reach ~100 MH/s with optimizations.

- **ErgoMix Non-Interactive Mixing**: Team finalized formal paper on ErgoMix protocol. Research paper "ZeroJoin: Combining ZeroCoin and CoinJoin" published to IACR ePrint (https://eprint.iacr.org/2020/560.pdf). Charles Hoskinson quickly identified strongest points of the scheme on Twitter. Mixing transactions already operational on mainnet with same-address but different-owner outputs.

- **Storage Rent Economic Model**: kushti emphasized storage rent activation on July 1, 2023 will fundamentally change Ergo's economics. Miners will be incentivized long-term to support applications that increase UTXO set size, creating sustainable mining rewards beyond emission.

- **Cypra Wallet Partnership**: New multi-currency SPV wallet announced supporting Bitcoin, Ergo, ZCash, USDT, EOS, ETH. Features include built-in atomic swaps, non-interactive SNICKER for BTC, ErgoMix for Ergo, decentralized indexing node network allowing users to earn fees, and mobile/desktop applications.

- **Hash Rate Growth**: Mining hash rate increased from ~3.3 TH/s to 4.56 TH/s during the week, indicating growing miner interest. kushti calculated airdrop recipients effectively receiving ~7 NVidia GPUs worth of daily mining work (potentially 10 GPUs as hashrate increases).

## Important Decisions or Announcements

- [@kushti, msg#27313, 2020-05-11]: General community chat scheduled for Wed, 13th May, 13:00 UTC in Discord "general" channel, rotating weekly between dev chat and general community chat.

- [@kushti, msg#28070, 2020-05-13]: Three announcements: (1) CoinsBit exchange listing with promotional campaign; (2) Partnership with Cypra wallet (https://cypra.io/); (3) Another partnership to be announced Thursday.

- [@kushti, msg#28128, 2020-05-13]: Jason Davies' mining pool opening for beta testing with PPS model and 5% pool fee, miners get full block reward including fees when finding blocks.

- [@kushti, msg#29496, 2020-05-13]: Ergo becomes member of The Blockchain Privacy, Security & Adoption Alliance (BPSAA): https://bpsaa.vision/new-member-announcement-ergo

- [@kushti, msg#31389, 2020-05-14]: Spanish-speaking Ergo group created: @ergoplatform_ES

- [@kushti, msg#32119, 2020-05-14]: Ergo Platform reference client v3.2.4 (minor update) finalized, release coming Monday.

- [@kushti, msg#32121, 2020-05-14]: Next exchange listing will be from top 10 exchanges. Most exchange listings paid nothing or just ERG tokens, avoiding greedy listing fees.

- [@kushti, msg#33073, 2020-05-16]: Documents page updated with ZeroJoin paper, website loading speed increased 10x.

- [@kushti, msg#33241, 2020-05-17]: Future airdrops will require running full-nodes rather than simple social media tasks.

## Technical Q&A Worth Preserving

- **Q** (@Bullish Teddy): What is storage rent?
  **A** (@kushti, msg#27430-27435): Most interesting things start after July 1, 2023 with storage rent. For Ergo miners, it's clearly profitable long-term to support applications on top of Ergo to increase UTXO set. Miners don't understand this yet.

- **Q** (@Community): Can you explain what bulletproofs are?
  **A** (@kushti, msg#27437-27448): Bulletproofs are zero-knowledge proof technique allowing specific statements to be proven without trusted setup, unlike SNARKs. Used in Monero for range proofs, can also prove generic statements. Goal is to have verification done in ErgoScript, enabling variety of zero-knowledge protocols alongside Ergo contracts, including compact Sigma protocols and Groth one-out-of-many proofs.

- **Q** (@Cheng.alph): Is Alephium known?
  **A** (@kushti, msg#29853-29877): Alephium is sharded blockchain with PoW + UTXO + sharding, currently in DevNet. Space is moving back to UTXO for intelligent cryptocurrencies due to immutability benefits.

- **Q** (@Bullish Teddy): What's best link to learn about mixing?
  **A** (@kushti, msg#30738-30740): Strawman article: https://ergoplatform.org/en/blog/2020_03_20_ergo_mixer/ and formal paper by @Scalahub recently finished.

- **Q** (@Boss Coss): Is Ergo a platform blockchain like Ethereum?
  **A** (@kushti, msg#32946): Ergo is Proof-of-Work cryptocurrency like Bitcoin, but also has rich contractual capabilities with approach very different from Ethereum. Generic but not like Ethereum - a different beast. Think mix of RavenCoin/Ethereum with unique crypto apps.

- **Q** (@Som sam): How much can I earn mining with 2080ti?
  **A** (@kushti, msg#33003-33008): RTX 2070 = 61 MH/s with open-source miner. Pool will provide optimized miners soon, expect ~100 MH/s. Check calculator: https://pool.plutomonkey.com/

## Links Shared

- [https://coinmarketcap.com/rankings/exchanges/liquidity/]: New CMC exchange liquidity rankings showing CoinDCX #3 (appears gameable)
- [https://www.slideshare.net/AlexChepurnoy/ergo-presentation-tokyo]: Ergo Asian Road-Show slides from Tokyo, Sept 2019
- [https://cointelegraph.com/news/charles-hoskison-reveals-his-9-favorite-crypto-projects]: Charles Hoskinson lists Ergo as #1 favorite project, calling it "one of the most revolutionary cryptocurrencies ever built"
- [https://cypra.io/]: Cypra wallet partnership announcement with multi-currency SPV design, built-in mixing, atomic swaps
- [https://bpsaa.vision/new-member-announcement-ergo]: Ergo joins Blockchain Privacy, Security & Adoption Alliance
- [https://eprint.iacr.org/2020/560.pdf]: "ZeroJoin: Combining ZeroCoin and CoinJoin" research paper
- [https://medium.com/@ergoplatform/zerojoin-combining-zerocoin-and-coinjoin-f9d0d51be111]: Medium article explaining ZeroJoin
- [https://explorer.ergoplatform.com/en/transactions/6f0832835e341cc8a7a294331899c6b5ab60ff74ffa987cbfeeded0ec7240c88]: Example mixing transaction showing same address with different owners
- [https://pool.plutomonkey.com/]: Mining profitability calculator
- [https://www.ergoforum.org/]: Ergo community forum
- [https://ergoplatform.org/en/documents/]: Documents page with scientific papers
- [https://discord.com/invite/kj7s7nb]: Ergo Discord for bi-weekly dev meetings

## Unresolved Questions

- Mining distribution remains centralized according to explorer hash rate distribution chart (msg#33204)
- Optimal block time/block speed adjustments discussed but no concrete parameters decided (msg#27312-27428)
- Scalability plan mentioned by kushti during Baltic beach walk but details to be published "soon(TM)" (msg#32140-32141)
- Next major exchange announcement timing and proper announcement strategy under discussion by Ergo Foundation and marketing team (msg#32935-32937)