# Ergo General Chat — 2018-W30 Summary
**Period:** 2018-07-23 to 2018-08-04  
**Participants:** 9  
**Focus:** Testnet progress, node configuration, mainnet roadmap, EFYT-to-ERG conversion mechanics

---

## Key Topics Discussed

- **Node Configuration & Deployment:** Community confirmed that nodes can be configured standalone (not just via Docker) by downloading config files and running the JAR directly.

- **Testnet Status & Mainnet Timeline:** Team reported steady TestNet progress with each feature being validated. Mainnet release targeted for Q4 2018. Weekly progress updates being published on Bitcointalk.

- **Mining Pools & Solo Mining Incentives:** Pools will operate on mainnet, but a mechanism is being designed to incentivize solo mining to increase network decentralization. Temporary downtime for this work was resolved within the week.

- **ScoreX Framework Evolution:** Scorex 2.0 final version expected Autumn 2018, with Scorex 3.0 planned later with less drastic changes than the 1.x → 2.0 transition.

- **Mobile Wallet Development:** Mobile wallet announced in development.

- **EFYT-to-ERG Conversion Mechanics:** Swap details and conversion rate discussion flagged as under review; founders meeting scheduled to finalize mechanics. No firm schedule for EFYT distribution announced—distribution depends on community support and development needs rather than a predefined timeline.

- **Ergo's Design Philosophy:** Team emphasized focus on long-term survivability, correct-by-design blockchain avoiding regular hard forks, soft-forking governance, and ASIC-resistant proof of work via Autolykos.

- **Zero-Knowledge & Smart Contracts:** Ergo will use Sigma-State language based on zero-knowledge proofs for flexible, safe smart contracts. Support for sidechains (via NIPoPoWs) enabling cross-chain value transfer (e.g., ErgoCash ↔ ErgoData).

- **Governance via Miner Voting:** Multi-layer approach proposed where miners can vote to adjust protocol parameters (block size, computational cost limits, instruction costs) per 256-block epoch, with additional income streams for miners.

- **Stateless Client Roadmap:** AVL+ tree solution targeted for early 2019 (no hard fork) enabling most clients and miners to operate without storing full state.

---

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4033, 2018-08-01]: **AirDrop(s) will be completed before MainNet release.**

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4040, 2018-08-02]: **Pools will operate on mainnet; mechanism under development to incentivize solo mining for decentralization.**

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4053, 2018-08-03]: **MainNet release targeted for Q4 2018. Currently on TestNet validating all features.**

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4054, 2018-08-03]: **Scorex 2.0 final version coming Autumn 2018; Scorex 3.0 planned later with less significant changes.**

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖓𝖙կշօ, msg#4056, 2018-08-03]: **Mobile wallet in development.**

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4057 & msg#4059, 2018-08-03]: **EFYT ↔ Ergo transfer details to be announced "next Friday hopefully"** (one week later). Significant progress reported; following weeks packed with more developments.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4108, 2018-08-04]: **4-5 new team members to be announced on website shortly.**

- [@Unknown, msg#4110, 2018-08-04]: **Emission curve applies to both ErgoCash and ErgoData chains. 1 EFYT converts 1:1 to both (1 ErgoCash + 1 ErgoData).**

---

## Technical Q&A Worth Preserving

- **Q** (@Mihai, msg#4025): "Right now the only way to configure a node via Docker?"  
  **A** (@hawky, msg#4028): "Just download the config file, configure it, download the jar and run it..." (standalone configuration supported)

- **Q** (@LLB, msg#4031): "What is the planned fate of the ScoreX framework given Ergo's soft-forking approach? Is version 3.0 expected?"  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4054): "Scorex 2.0 final version will be out Autumn 2018. Later, Scorex 3.0 will likely happen, with not so drastic changes as between 1.x and 2.0."

- **Q** (@Unknown, msg#4083): "What is the EFYT to Ergo conversion rate and what will Ergo's supply be after year 1?"  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4087): "(1) Conversion rate under discussion, answer expected in coming days. (2) Refer to emission curve: https://www.ergoplatform.org/news_emission_curve.html"

- **Q** (@Unknown, msg#4090): "Will remaining EFYT be distributed before or after mainnet launch?"  
  **A** (@Unknown, msg#4094): "No schedule; distribution based on development needs, not predefined timeline. Full number secures first-year mining tax. Previous distribution rewarded early supporters who funded team growth."

- **Q** (@Unknown, msg#4102): "How is Ergo implementing and using Proofs of Proof-of-Work (NIPoPoWs)?"  
  **A** (@Unknown, msg#4103): "Ergo uses Sigma-State language (zero-knowledge based) for smart contracts. NIPoPoWs enable sidechains, allowing value transfer between chains (e.g., ErgoCash ↔ ErgoData) via built-in sidechain support."

- **Q** (@Unknown, msg#4106): "Will stateless clients be supported?"  
  **A** (@Unknown, msg#4106): "AVL+ tree solution planned for early 2019 (no hard fork required). Most clients and miners will not need to store state."

---

## Links Shared

- [https://github.com/ergoplatform]: Main Ergo repository (commits, pull requests, issues tracked)
- [https://github.com/ergoplatform/ergo/pull/362]: Pull request #362 (weekly fixes)
- [https://bitcointalk.org/index.php?topic=2076657.msg43421022#msg43421022]: Weekly update post with progress summary
- [https://t.co/nOuSyc9FWV]: Dmitry's presentation on EFYT-to-Ergo conversion (referenced for clarity)
- [https://github.com/ergoplatform/ergo/tree/master/papers/yellow]: Yellow paper draft (available at time of chat)
- [https://www.ergoplatform.org/news_emission_curve.html]: Ergo emission curve details
- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46]: EFYT circulation tracker
- [http://fc18.ifca.ai/bitcoin/papers/bitcoin18-final18.pdf]: Research paper on miner voting mechanisms
- [https://nipopows.com]: NIPoPoWs (Non-Interactive Proofs of Proof-of-Work) reference
- [https://www.ergoplatform.org/team.html]: Team roster page

---

## Unresolved Questions

- **EFYT-to-ERG Conversion Rate:** Under discussion at time of chat; founders meeting scheduled to finalize. (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4071)
- **EFYT Distribution Schedule:** No schedule announced; timing dependent on development priorities rather than fixed milestones. (@Unknown, msg#4094)
- **Yellow Paper Release Timing:** Draft available, but final version targeting Q4 2018 with mainnet launch. (msg#4104)
- **Pool Implementation Details:** Decentralization incentive mechanism details still being finalized. (@𝖒𝖊𝖓𝖙𝖆𝖚𝖘𝖙կշօ, msg#4040)

---

## Summary

This was a light-activity week focused on clarifying development roadmap and community concerns around token conversion. No major protocol changes were proposed; discussion centered on tooling (node configuration, mobile wallet), governance frameworks (miner voting, yellow paper scope), and administrative items (team expansion, EFYT mechanics). The team demonstrated responsiveness to community questions but maintained flexibility on timelines, emphasizing "things in Ergo happen on the fly" rather than rigid schedules. Mainnet Q4 2018 remains the key milestone.