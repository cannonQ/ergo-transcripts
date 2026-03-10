---
title: "Ergo General Chat — 2018-W20"
date_start: "2018-05-14"
date_end: "2018-05-20"
type: telegram_weekly
channel: general
week: "2018-W20"
source: telegram
message_count: 72
categories: [ecosystem, mining, technical, wallet]
key_terms: [Waves, airdrop, Scorex framework, exchange listing, mainnet, ASIC resistance, pools resistance, computational cost, GPU, FPGA, stateless clients, NiPoPoW, energy consumption, Bitcoin mining, renewable energy, sustainability, solar power, testnet1, testnet2, Sigma-State]
---
# Ergo General Chat — 2018-W20 Summary
**Period:** 2018-05-15 to 2018-05-27  
**Message Count:** 72  
**Active Participants:** 7

---

## Key Topics Discussed

- **Waves Platform for Airdrop**: Ergo chose Waves for token distribution because it was built on the Scorex framework (developed by kushti in 2015 before joining IOHK), has a secure codebase, and includes a built-in exchange to enable trading before mainnet launch without external listing delays.

- **ASIC Resistance & Mining**: Community discussed energy consumption comparisons with Bitcoin, ASIC resistance as a core design goal, and alternative mining approaches (CPU, GPU, FPGA). NIPoPoWs and stateless clients were highlighted as research priorities for decentralized and mobile mining.

- **Block Interval Design (2 minutes)**: The 2-minute block time was chosen to minimize chain reorganizations and orphan blocks while remaining fast enough for network propagation. Lower intervals risk network failure to reach consensus; future NG implementation could enable faster transaction confirmation without changing block time.

- **Testnet Timeline & Sigma-State**: Testnet1 (with Sigma-State language) scheduled for ~June 1, 2018. Testnet2 planned for autumn 2018 as a mainnet prototype. Mainnet launch target: winter 2018.

- **Node Requirements**: Minimum 3-4 GB RAM/core for testnet nodes; specifications expected to change with testnet1 release.

- **Academic Collaboration**: University of Maryland + Ergo initiative mentioned as positive example of academic support for blockchain research.

---

## Important Decisions or Announcements

- [@Unknown, msg#2963, 2018-05-21]: ERGO token conversion from Waves to native tokens will be possible during the first year after mainnet launch, following mainnet launch and initial mining.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2921, 2018-05-18]: Weekly updates now published on BitcoinTalk forum.

- [@Unknown, msg#2972, 2018-05-22]: Mainnet release confirmed for winter 2018.

- [@Unknown, msg#2976, 2018-05-22]: Ergo will use proof of work (PoW), not proof of stake.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#2910): Is there a relationship with Waves developers through IOHK that made Waves the obvious distribution choice?
  
  **A** (@Unknown, msg#2913): No relationship exists between Ergo/IOHK and Waves developers. Waves uses an older Scorex version. The first Scorex version was created by kushti in 2015 before he joined IOHK's research team. Waves built asset-to-asset exchange with instant matching as transaction types without contracts, creating a safe and fast DEX.

- **Q** (@Unknown, msg#2932): How does Ergo's mining process compare to Bitcoin's energy consumption?
  
  **A** (@Unknown, msg#2933): Miners use electricity proportional to perceived value. Ergo can learn from Bitcoin's "power issues" and provide alternative approaches. A testnet node ran on solar power, demonstrating potential for adjustment before mainnet. ASIC resistance is a major objective.

- **Q** (@Unknown, msg#2966): What are minimum RAM/core specifications for running a node?
  
  **A** (@Unknown, msg#2968): Currently 3-4 GB; specifications expected to change with testnet1 release (June 1, 2018).

- **Q** (@Unknown, msg#2985): Why was 2 minutes chosen as the block interval? Does the number seem arbitrary?
  
  **A** (@Unknown, msg#2987): 2 minutes minimizes chain reorganizations and orphan blocks. Lower intervals risk network failure to reach consensus and slower size growth on unpopular networks. Future NG implementation could enable few-second transaction confirmation without changing block time.

- **Q** (@Unknown, msg#2975): Will Ergo's oracle implementation use proof of stake?
  
  **A** (@Unknown, msg#2976): Ergo will use proof of work. Testnet1 will be the first to include Sigma-State language with oracle examples; more specifications will be available before release.

---

## Links Shared

- [https://www.ergoplatform.org/qa_2018_02_06.html](https://www.ergoplatform.org/qa_2018_02_06.html): Q&A resource for early Ergo information
- [https://bitcointalk.org/index.php?topic=2076657.msg37697206#msg37697206](https://bitcointalk.org/index.php?topic=2076657.msg37697206#msg37697206): Weekly update (2018-05-18)
- [https://bitcointalk.org/index.php?topic=2076657.msg38542227#msg38542227](https://bitcointalk.org/index.php?topic=2076657.msg38542227#msg38542227): Weekly update (2018-05-25)
- [https://bitcointalk.org/index.php?topic=2076657.80](https://bitcointalk.org/index.php?topic=2076657.80): BitcoinTalk thread index for weekly updates
- [https://blog.sia.tech/the-state-of-cryptocurrency-mining-538004a37f9b](https://blog.sia.tech/the-state-of-cryptocurrency-mining-538004a37f9b): Industry post on mining and ASIC adoption challenges
- [https://youtu.be/IzuasLM3U5o](https://youtu.be/IzuasLM3U5o): Video on mining/ASIC topic

---

## Unresolved Questions

- Exact specifications for testnet1 and testnet2 marked as pending release (~June 1 and autumn 2018 respectively)
- Details on Sigma-State language examples deferred until testnet1 launch
- Long-term roadmap for NG implementation and its interaction with block time