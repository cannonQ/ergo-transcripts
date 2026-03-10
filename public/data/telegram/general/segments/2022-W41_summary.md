---
title: "Ergo General Chat — 2022-W41"
date_start: "2022-10-10"
date_end: "2022-10-16"
type: telegram_weekly
channel: general
week: "2022-W41"
source: telegram
message_count: 0
categories: [wallet, technical, ecosystem, defi, bridges, community, mining]
key_terms: [Ledger, 16kb memory constraint, 10 token limit, UX issues, Nano S, emission, block reward, 45 erg, mining incentive, KuCoin, withdrawals disabled, 60k UTXOs, dusty node, box consolidator, ErgoHack V, 14 teams, hackathon, mining, minting, NightOwl]
---
# Ergo General Chat — 2022-W41 Summary

## Key Topics Discussed

- **Ledger Hardware Wallet Integration**: Limited by 16KB memory constraint on Nano S. Ledger working on workarounds; Nano S+ and X not affected. Beta expected couple of months away, currently sideloadable on Nano S/S+ [msg#337508, #338001].

- **KuCoin ERG Withdrawal Suspension**: Deposits/withdrawals disabled following network upgrade; described as "dusty node, work in progress" [msg#337785]. Users reporting prolonged delays without clear timeline for resolution [msg#338749, #338866].

- **Mining Difficulty Adjustment & Hopping**: 128-block interval confirmed as minimum for security/efficiency tradeoff [msg#338605, #338659]. Discussion of large miners exploiting epoch-based difficulty changes; consensus that ASIC resistance keeps system decentralized but enables this behavior [msg#338249-#338294].

- **NIPoPoWs (Non-Interactive Proof of Proof of Work)**: Not the focus of 5.0 release; lumped with other scalability research directions (Sigma Protocols, eUTXO, sidechains) [msg#338221].

- **NightOwl Beta Launch**: Decentralized gambling/betting platform launching October 18 on Ergo mainnet [msg#338109]. Will boost SigmaUSD circulation; cross-chain possibilities unclear [msg#338106-#338110].

- **DuckPools Collateralized Lending**: In beta at duckpools.io; enables miners to earn yield without selling, improving ecosystem TVL and miner incentives [msg#338034, #338058]. Not the same as uncollateralized lending (Exle) [msg#338032].

- **ErgoHack V: Mining and Minting**: 14 teams registered; projects focus on mining infrastructure, no cross-chain projects noted [msg#337878, #338003]. Progress reports expected after couple weeks.

- **Rosen Bridge vs AnetaBTC**: Rosen (led by mhs_sam) uses on-chain contracts + multi-sig, guardians, watchers for safety; AnetaBTC brings wrapped Bitcoin to Ergo/Cardano with NETA rewards [msg#338846-#338847].

- **Palmyra/ZenGate Chainlink Partnership**: On-chain warehouse receipts using proof of reserve; IoT devices (camera, weight/motion sensors) provide continuous verification for decentralized trade financing [msg#338367-#338424]. Oracle Pool v1 (EF + external members) and v2 (running Dexy Gold) established; plan to build native Ergo oracles and tooling [msg#338879-#338989].

- **Block Time & Speed Improvements**: Discussion deferred post-Ergoversary; block height-based logic complicates faster block times; testnet available for parameter tweaking (difficulty, block time). Needs passionate community lead to coordinate [msg#338008, #338237-#338281].

- **Storage Rent & UTXO Consolidation**: Miners sending fractional payments to exchange wallets without consolidation creates dust problems at scale, slowing exchange withdrawal systems [msg#338521-#338527].

- **Address Derivation**: Ergo addresses derived from master key (extended public key), not simply from main address [msg#338498, #338747, #338776].

- **Auction House (AHT)**: Seed round contribution form live Oct 13-14; staker whitelisting opened Oct 14 [msg#338040, #338461-#338464, #338688].

---

## Important Decisions or Announcements

- [@CW, msg#337989, 2022-10-11]: EIP-37 implemented; further research ongoing.

- [@Flying Pig (™), msg#338591-#338592, 2022-10-15]: Ledger app couple months away; some bugs to fix; can sideload on Nano S/S+ now.

- [@Glasgow｜WON'T DM, msg#338452, 2022-10-14]: Ledger still consolidating UTXOs before resuming normal withdrawals.

- [@Foeniculum NFTs, msg#338109, 2022-10-12]: NightOwl beta opens October 18 on Ergo mainnet.

- [@Benny, msg#338034, 2022-10-11]: DuckPools development underway; collateralized lending protocol will significantly boost ecosystem TVL and miner holding incentives.

- [@Armeanio, msg#338367-#338373, 2022-10-13]: Pursuing PoW Alliance for unified messaging on proof-of-work benefits; Twitter account situation deferred to third party for clarity; no current conspiracy with Cardano/IOG.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#338470): On Ergo, can anyone derive sub-addresses from the main address, or do you need more information?
  **A** (@MrStahlfelge, msg#338498): Simplified explanation: addresses derived from master key (extended public key), not simply from main address.

- **Q** (@Unknown, msg#338119): What is difference between full node and lite node?
  **A** (@Glasgow｜WON'T DM, msg#338120): Lite node downloads less information (e.g., digest mode). Can create light full-node using 2-party authenticated dynamic dictionary on UTXO set. [Docs: https://docs.ergoplatform.com/node/modes/#light-full-node-mode]

- **Q** (@A, msg#338676): What is non-interactive share proof all about (ErgoHack project)? Can you pinpoint which GPU discovered the block?
  **A** (@ArØhβΣ @Arohbe 🍪, msg#338681): Algorithm to verify miner work on-chain. Enables SmartPool hosting + SNISP collateralization for decentralized mining with shared block rewards.

- **Q** (@gg, msg#338222): What does Ergo compatibility with Lightning Network mean? Can we use native BTC on Ergo?
  **A** (@Unknown, msg#338231): [Link to scaling solutions doc]: https://ergoplatform.org/en/blog/2021-10-29-ergo-ecosystem-scaling-solutions/

- **Q** (@Unknown, msg#338130): Is there a hashed timelock contract to lock ERG away for a set period?
  **A** (@Unknown, msg#338143): Spectrum has a locking liquidity feature preventing withdrawal for a period; ERG/SigRSV pair suggested to minimize impermanent loss risk.

- **Q** (@Cheese, msg#338286): Why wouldn't large solo miner just hop on established pool to get full rewards?
  **A** (@Cheese, msg#338291): Pool operator shows as miner of block, not individual miner; pool already established so reduced-reward rule wouldn't apply. Not possible to track individual miners at protocol level.

- **Q** (@A, msg#338249-#338257): Is it possible to penalize "new" miners with slightly less reward first epoch to stop large miners hopping on/off?
  **A** (@Cheese, msg#338284-#338293): Would disincentivize decentralized solo mining & new pools, hurt decentralization. Hard to implement at protocol level (pool operator always registered as miner).

---

## Links Shared

- [Ledger Integration Docs](https://docs.ergoplatform.com/node/modes/#light-full-node-mode): Light node implementation details.
- [Scaling Solutions Article](https://ergoplatform.org/en/blog/2021-10-29-ergo-ecosystem-scaling-solutions/): Layer 2 & sidechain options including Lightning compatibility.
- [ErgoHack V Participants](https://docs.ergoplatform.com/events/ergohack/#ergohackv): 14 teams and project descriptions.
- [Rosen Bridge Explainer](https://www.youtube.com/watch?v=Xsiy-yPJQ6w): Armeanio video on Rosen architecture.
- [AnetaBTC vs Rosen Analysis](https://medium.com/@anetaBTC/rosen-bridge-vs-interlay-an-analysis-on-wrapping-bitcoin-c9ae84da0e9d): Comparative breakdown.
- [ErgoPad Auction House Contribution Form](https://www.ergopad.io/contribute/auctionhouse/seed): Seed round contributions Oct 13-14.
- [SNISP Non-Interactive Share Proof](msg#338683): Technical reference (linked in chat, details preserved in Q&A).
- [Ergo Gulag Telegram](https://t.me/ErgoGulag): Community discussion channel (purged periodically).
- [Ergo Platform Chats](https://t.me/Ergo_Chats): Alternative Telegram grouping.
- [SigmaUSD Discussion Group](https://t.me/SigmaUSD): Dedicated SigRSV/SigmaUSD strategy chat.
- [ZenGate Website](https://www.zengate.global/): Palmyra platform.

---

## Unresolved Questions

- **KuCoin Withdrawal Timeline**: No clear ETA given for ERG deposit/withdrawal re-enablement beyond "dusty node, work in progress" [msg#337785, #338866].

- **Block Time Speed Improvements**: Post-Ergoversary discussion needed; testnet parameter tweaking depends on community volunteer to lead coordination [msg#338008, #338237].

- **Binance Listing**: Multiple requests; consistent response: "all exchanges have been contacted at some point" [msg#338009, #338013, #338017, #338121]; no specific timeline disclosed.

- **NightOwl Cross-Chain Support**: Unclear if cross-chain gambling options planned beyond Ergo mainnet [msg#338108-#338110].

- **Ledger App Timeline Specificity**: "Couple months" from mid-October gives December target; some bugs remaining [msg#338591-#338592].

- **Rosen Bridge Launch Date**: Mentioned as upcoming but no firm date; depends on testing completion [msg#338769].

---