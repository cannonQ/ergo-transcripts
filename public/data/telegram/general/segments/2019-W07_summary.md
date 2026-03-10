---
title: "Ergo General Chat — 2019-W07"
date_start: "2019-02-11"
date_end: "2019-02-17"
type: telegram_weekly
channel: general
week: "2019-W07"
source: telegram
message_count: 54
categories: [governance, mining, technical, ecosystem]
key_terms: [EFYT, token supply, swap, 1.97M, 100M maximum supply, token conversion, mining, PoW, PoS, hash power, masternode, 75 Ergos per block, ERGO(cash), ERGO(data), dual chain, mining rewards, TestNet, CPU mining, node API, wallet]
---
# Ergo General Chat — Week 2019-W07 Summary

## Key Topics Discussed

- **Token Supply & Economics**: Discussion of EFYT-to-ERG conversion mechanics (1 EFYT = 1 ERG(cash) + 1 ERG(data)), total supply cap of 100M ERG, and mining reward distribution (75 ERG per block, 2-minute block interval). First-year supply projected at ~19.7M ERG including founder allocation (10% of mined supply).

- **Mining Availability**: GPU mining confirmed to be in development for post-mainnet release. CPU mining already available on testnet v1.9.1. Commitment made to support Linux mining software.

- **TestNet 2.0 Roadmap**: MainNet launch targeted for mid-March 2019 following TestNet 2.0 completion. No reward mechanism announced for testnet bug discovery at this stage.

- **Wallet & Node Setup**: Wallet functionality available via node API. Users can enable mining in node configuration file. EFYT trading possible via Waves platform built-in exchange.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ, msg#5949, 2019-02-18]: MainNet launch confirmed "around the corner" after TestNet 2.0 completion (targeted mid-March per msg#5964).

- [@Dmitry, msg#5923, 2019-02-13]: Linux mining software confirmed to be developed ("For sure").

- [@Kirill, msg#5920, 2019-02-13]: CPU mining functional on testnet with configuration flag; wallet accessible via node API.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#5901): Is mining the same as master nodes? Can you mine with master nodes?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ, msg#5902): No. Proof of Work mining is based on hash power; Proof of Stake (master nodes) is based on coin holdings — different mechanisms.

- **Q** (@Unknown, msg#5905): Is ERG(cash) the same as mining reward? How are they connected?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ, msg#5906): ERG(cash) is mining reward. ERG(data) comes from a separate chain. Both derive from EFYT conversion (1:1 ratio).

- **Q** (@Unknown, msg#5907): First-year supply calculation: 19.7M ERG from mining + 1.97M from EFYT swap = 21.67M?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ, msg#5908, #5910): No. Swap tokens are included in the 19.7M figure. Founders receive 10% of mined supply; full EFYT swap likely occurs gradually over time rather than immediately.

- **Q** (@Nikolai, msg#6011): How many seconds does a transaction take on Ergo blockchain?
  **A** (@Unknown, msg#6012): Depends on miners and different solutions built on top—no fixed time specified.

- **Q** (@𝖒𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ, msg#5966): Is there a reward for testnet? What configuration is required?
  **A** (@𝖒𝖊𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ, msg#5967): No specific reward mechanism in place yet on testnet unless significant bugs are found. Configuration details available in GitHub Wiki.

## Links Shared

- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46]: EFYT token statistics (supply, distribution, locked amounts).

- [https://bitcointalk.org/index.php?topic=2076657.msg44133595#msg44133595]: Detailed information on founder allocation (10% of mined supply) and token economics.

- [https://github.com/ergoplatform/ergo/releases/tag/v1.9.1]: TestNet v1.9.1 release with CPU mining enabled.

- [https://github.com/ergoplatform/ergo/wiki]: Node configuration and setup documentation.

- [https://wavesplatform.com]: Waves wallet for EFYT trading via built-in exchange.

- [https://twitter.com/ergoplatformorg/status/1096455156919615488]: Official announcement (context: countdown to mainnet launch).

## Unresolved Questions

- GPU mining timeline and specifications beyond "post-mainnet" commitment.
- Exact mechanisms for ERG(data) chain and how it integrates with ERG(cash) post-launch.
- Whether all 1.97M EFYT will be swapped immediately or phased over extended period—described as "likely over time" but not formally decided.