---
title: "Ergo General Chat — 2018-W49"
date_start: "2018-12-03"
date_end: "2018-12-09"
type: telegram_weekly
channel: general
week: "2018-W49"
source: telegram
message_count: 87
categories: [governance, mining, community, technical, ecosystem, wallet, marketing]
key_terms: [mainnet, launch, January 2019, TestNet, version 1.8, version 1.9, GPU mining, equihash, 2GB memory, testnet2, PoW, CPU mining, mining firm, Community Common Goods Pool, mining rewards, launch support, testnet 1.8, GitHub release, v1.8.0, developers]
---
# Ergo General Chat — 2018-W49 Summary

## Key Topics Discussed

- **MainNet Launch Timeline**: TestNet progressing on schedule with version 1.8 released. MainNet expected January 2019 pending successful TestNet 1.9 and 2.0 completion with no major bugs.

- **Mining Specifications**: Base algorithm is Equihash, GPU-friendly. Minimum 2GB GPU memory required. GPU miner implementation scheduled to begin after TestNet 1.8 release. CPU mining available on TestNet now but highly inefficient.

- **Developer Team Expansion**: Core team includes kushti, Dmitry, and oskin1 on main Ergo repository. Additional contributors across ScorexFoundation repositories (ergomorphic, greenhat, VictorMikheev). Two new developers confirmed to be hired for formal code verification work.

- **Web3 / Wallet Integration**: Web3-like functionality and MetaMask equivalent planned post-TestNet 2 but not required for MainNet launch. Timeline independent from MainNet deployment.

- **Exchange Listing Strategy**: Goal to achieve principle agreement with major exchange for listing immediately after MainNet launch (left-to-right timeline, not before MainNet).

## Important Decisions or Announcements

- [@Dmitry, msg#5320, 2018-12-06]: TestNet 1.8 with updated proof of work released — https://github.com/ergoplatform/ergo/releases/tag/v1.8.0

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#5285, 2018-12-03]: MainNet launch timeline revised to January 2019 (conditional on TestNet 1.9/2.0 stability)

- [@Dmitry, msg#5409, 2018-12-22]: Two additional developers confirmed for hire, focusing on formal code verification

- [@Dmitry, msg#5405, 2018-12-21]: Exchange listing strategy clarified — principle agreement before MainNet, actual listing after MainNet start

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#5307): Where can I find mining requirements?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#5308): Base algorithm is Equihash (GPU-friendly). Details to be published with code release.

- **Q** (@Unknown, msg#5315): Any power consumption tests done yet?
  **A** (@Dmitry, msg#5318): Not yet; 1.8 release with updated proof of work coming, GPU miner implementation to follow immediately after.

- **Q** (@NamystiukO, msg#5322): Can I mine Ergo on AMD GPU RIG with Hive now?
  **A** (@Dmitry, msg#5323): GPU miner not yet implemented.

- **Q** (@Unknown, msg#5406): Team size concerns — only 2 active devs on GitHub?
  **A** (@Dmitry, msg#5407): Ergo spread across multiple repositories with distributed contributors (kushti, oskin1 on main repo; ergomorphic, greenhat on sigmastate-interpreter; VictorMikheev on scorex-util).

- **Q** (@Unknown, msg#5413): Will Ergo have web3 or MetaMask equivalent?
  **A** (@Dmitry, msg#5417): Work planned post-TestNet 2, but not required for MainNet. Goal is ASAP, independent from MainNet timeline.

- **Q** (@Kaichao | Keyring, msg#5419): Do you accept remote work?
  **A** (@Dmitry, msg#5420): Yes, team already distributed globally.

## Links Shared

- https://bitcointalk.org/index.php?topic=2076657.msg48358603#msg48358603 — Official BitcoinTalk thread for updates

- http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46 — Current token asset tracker (pre-MainNet)

- https://github.com/ergoplatform/ergo/releases/tag/v1.8.0 — TestNet 1.8 release with updated proof of work

- https://github.com/ergoplatform/ergo — Main Ergo repository

- https://github.com/ScorexFoundation/sigmastate-interpreter — Sigma state interpreter

- https://github.com/ScorexFoundation/scorex-util — Scorex utility library

- https://www.meetup.com/ru-RU/genesisblockhk/events/257300607/ — Hong Kong presentation event scheduled January 2019

- RadicalxChange(dot)org — External organization aligned with Ergo's collective organization mission; conference in Detroit, MI March 2019

## Unresolved Questions

- Exact timing of TestNet 2.0 completion not specified (@Dmitry notes "hopefully we'll release 1.8 version today (or tomorrow)" but TestNet 2 remains undefined)

- Power consumption specifications for mining not yet available (to be published with GPU miner)

- Whether web3 functionality will be ready before or after MainNet launch (stated as "not required for mainnet launch" but timeline unclear)

- Specific technical details on how smart contracts will be implemented (@Dmitry mentions "a guy who is working on smart contracts" with examples "hope to see...soon")