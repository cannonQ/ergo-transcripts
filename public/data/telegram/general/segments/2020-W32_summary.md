# Ergo General Chat — 2020-W32 Summary

## Key Topics Discussed

- **ErgoMixer Token Support**: Anonymous developer delivered token mixing functionality with platform-specific binaries releasing August 8. Supports any token and improves mixer performance across various aspects.

- **Oracle Pools Specification**: Robert Kornacki released comprehensive video breaking down Oracle Pools theory and UTXO implementation details. First UTXO-based DApp specification released by EMURGO, highlighting advantages over Chainlink including native currency staking (no custom token), epoch-based incentives, governance mechanisms, and hierarchical datapoint structures via eUTXO.

- **Proof-of-Work Algorithm Discussion**: Extensive debate between kushti and Reuben on ASIC/FPGA resistance. Reuben (Zcoin team) shared empirical experience: Equihash easily optimized for ASICs, MTP failed despite memory-hardness recommendations, FPGAs problematic due to limited accessibility. ProgPow proposed as most promising direction. RandomX warned against unless committed like Monero.

- **Node Release 3.3.0**: Massive wallet rework with external application support. +4,720 lines, -1,929 lines. Final testing completed, merged to master for release.

- **Exchange Issues**: Tidex experienced DDoS or service unavailability (msg#42046-47). CitEx has disabled Ergo wallet and fake volume (msg#42118-26). Coinex withdrawal bugs with invalid transaction IDs (msg#42529-52).

- **Emission Schedule**: Emissions decrease after 11 months from launch (July 2019 = ~July 2020 confirmation pending). Max supply 97M ERG after 8 years. Currently ~50K ERG mined per day.

---

## Important Decisions or Announcements

- [@kushti, msg#42029, 2020-08-03]: "In 11 months emission will start to decrease yes"

- [@kushti, msg#42030, 2020-08-03]: "And at this point I'm pretty sure that Ergo will survive and explode sooner or later"

- [@kushti, msg#42256-57, 2020-08-05]: "3.3.0 is done, final tests... huge rework of the node wallet + support for external applications"

- [@kushti, msg#42400-401, 2020-08-07]: "Ergo protocol reference client 3.3.0 released... please check migration guide" (https://github.com/ergoplatform/ergo/releases/tag/v3.3.0)

- [@kushti, msg#42314-316, 2020-08-06]: ErgoMixer new version releasing August 8 with token mixing support, improved performance, platform-specific binaries

- [@Kookster, msg#42615-617, 2020-08-09]: Token mixer released; runs locally at http://localhost:9000/dashboard/mix

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#42003): "Can ergo contracts be easily formally verified? What makes them more secure? At first I thought we were going the non Turing route."  
  **A** (@Unknown, msg#42005-07): Non-Turing complete per transaction, but Turing complete across multiple transactions. Easier to formally verify (crowdfunding contract already verified). UTXO model allows parallelizing protocols into sub-protocols, referencing state from any contract trustlessly via data-inputs at near-zero cost.

- **Q** (@Unknown, msg#42015): "I guess I was speaking about ergo script being a non Turing language, not so much about the ability to halt. So now I understand that it is a non Turing language that can be made Turing over multiple txs."  
  **A** (@Unknown, msg#42093): "Yeah, precisely."

- **Q** (@Unknown, msg#42042): "Is citex leggit? Or are they faking volume?"  
  **A** (@Kookster, msg#42118-119): "The trading works but 99.9% is totally fake... also withdrawal / deposit has been disabled for erg for a long while"

- **Q** (@filippounits, msg#42110-115): Confirmation requirements across exchanges: HotBit 32 confirmations, Tidex & Probit 100 confirmations, Coinex 15 confirmations. High confirmation counts kill arbitrage windows and reduce exchange commissions, questioning necessity.

- **Q** (@Unknown, msg#42269): "Can someone just summarise what ergo is?"  
  **A** (@Unknown, msg#42269): "Multi-asset Proof-of-Work cryptocurrency with powerful financial contracts in extended UTXO model, unique flexible crypto-contracts based on Sigma protocols, storage rent, stateless and ultra-efficient SPV clients support and focus on long-term survivability."

- **Q** (@pepeblue, msg#42746): "If it seeks to remove the need to hold a custom token for oracle pools (LINK) then doesn't that mean ERGO coin itself can't gain much value?"  
  **A** (@Unknown, msg#42749-752): Detailed comparison showing Oracle Pools use native ERG (no custom token overhead), provide epoch-based incentive frameworks, flexible governance (internal via oracle votes or external DAO), sybil resistance via coordinated pool formation, eUTXO hierarchies for confidence scaling, near-zero access costs for datapoints making them public goods, passive funding via tiny UTXO outputs.

- **Q** (@Reuben, msg#42139): "Why do you guys do not consider Equihash?"  
  **A** (@Reuben, msg#42140, 143, 146-150): "Not FPGA/ASIC resistant even in variants... They made bad assumptions, not hardware people... MTP also their work. I have great respect for them as cryptographers but having dealt with MTP and its flaws... it doesn't achieve egalitarian mining at all."

---

## Links Shared

- [https://ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/]: Welcome to Smart Money - introductory blog post (posted multiple times as standard reference)

- [https://www.youtube.com/watch?v=7QpNqy2w5LY]: Robert Kornacki deep dive into Oracle Pools UTXO Specification (msg#41999, 42079)

- [https://www.ergoforum.org/t/ergo-platform-ecosystem-digest-july-2020/287]: Ergo Platform Ecosystem Digest July 2020

- [https://www.ergoforum.org/t/tokens-mixer-is-done/219/9]: ErgoMixer token mixing discussion and release notes (msg#42316)

- [https://github.com/ergoplatform/awesome-ergo]: Awesome Ergo resources collection

- [https://hub.docker.com/r/ergomixer/mixer]: ErgoMixer Docker image (msg#41985)

- [https://explorer.ergoplatform.com/en/addresses/9fPiW45mZwoTxSwTLLXaZcdekqi72emebENmScyTGsjryzrntUe]: Coinex main address on Ergo Explorer (msg#42052)

- [https://ergoplatform.org/en/exchanges/]: Official Ergo exchange list (msg#42647)

- [https://ergoplatform.org/en/blog/2019_05_20-curve/]: Emission curve explanation (msg#42552)

- [https://twitter.com/ergoplatformorg/status/1290964602625372165]: Twitter announcement regarding private cross-chain atomic swaps (msg#42246)

- [https://github.com/ergoplatform/ergo/releases/tag/v3.3.0]: Release notes for Ergo 3.3.0 (msg#42400)

- [https://github.com/ergoMixer/ergoMixBack/releases/tag/2.0.0]: ErgoMixer 2.0.0 token mixing release (msg#42616)

- [https://nipopows.com]: NIPoPoWs research resource (msg#42305)

- [https://twitter.com/chepurnoy/status/1289310311493722112]: kushti tweet on blockchain research (msg#42288)

---

## Unresolved Questions

- **Binance Listing**: "yes, but talks are going slooow" (@kushti, msg#42334, 2020-08-06) — no timeline confirmed

- **Ledger Support**: Still in progress as of msg#42610 (2020-08-08) — completion date TBD

- **Yoroi Wallet Integration**: Kookster estimated 1-2 months minimum (msg#42527, 2020-08-08) — no firm date

- **ERC-20 Bridge & Uniswap Listing**: Requested multiple times (msg#42406, 42613, 42730-31) — no response on feasibility or timeline

- **ProgPow Evaluation**: kushti asked if ProgPow is "light in regards with validation" and offered shared research (msg#42213-15) — Reuben agreed but no follow-up on implementation commitment

- **Rich List Feature**: Explorer missing richlist functionality noted as gap (msg#42507-508) — no timeline given

- **Coinex Withdrawal Bug**: Invalid transaction IDs generated for valid withdrawals (msg#42529-52) — issue attributed to Coinex bug, awaiting their resolution