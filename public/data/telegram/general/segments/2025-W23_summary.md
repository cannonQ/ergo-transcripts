---
title: "Ergo General Chat — 2025-W23"
date_start: "2025-06-02"
date_end: "2025-06-08"
type: telegram_weekly
channel: general
week: "2025-W23"
source: telegram
message_count: 0
categories: [technical, bridges, ecosystem, defi, community, mining, governance, marketing]
key_terms: [Node 6.0, RC6, sub-blocks, sigma chains, testnet, Rosen Bridge, Bitcoin, Cardano, rsBTC, watchers, liquidity, fiat onramp, Banxa, Onramper, Nautilus wallet, USD access, raffle, DexyUSD, DexyGold, stablecoin]
---
# Ergo General Chat Summary — 2025-W23
**Period:** 2025-06-02 to 2025-06-08  
**Messages:** 712 | **Participants:** 53

---

## Key Topics Discussed

- **Node 6.0 Release Candidate (RC6)**: @kushti released v6.0.0-RC6 (msg#562656). Core focus on testing and polishing before mainnet deployment. Sub-blocks and sigma chains mentioned as upcoming features.

- **Rosen Bridge Activity & Integrations**: Rosen team in contact with Kaspa community for integrations (msg#562865). Multiple bridge transactions flowing (rsBTC, rsSigmaUSD). Watchers receiving compensation for work.

- **Dexy Protocol Testing & Liquidity**: Active testing of Dexy UI in private groups (msg#562356). Dexy Gold swap operations visible on-chain. Protocol UI refinement ongoing before broader release.

- **Sigma Chains & Merge Mining**: Conceptual discussion of sigma chains as computational layer portability across different PoW consensus mechanisms. Merge mining enables value capture for multiple chains simultaneously without separate mining infrastructure.

- **Lithos Protocol Development**: Decentralized mining pools under development. Originally Autolykos v1 prevented pooling; v2 allowed pools via smart contracts. Lithos aims to bring back decentralized principles while enabling efficient mining.

- **NIPoPoWs Use Cases**: Light clients, UTXO set snapshots, and mobile node synchronization. Enabling devices like Samsung phones to sync full Ergo nodes in minutes.

- **Storage Rent (Demurrage)**: 4-year consolidation period chosen as "non-annoying" and longer than lifetime of most perpetual contracts (msg#562581). Design prevents blockchain bloat without excessive friction.

- **Fiat On-Ramp Raffle**: Onramper & Banxa integration fundraising goal 21,820 ERG (~$19.6k USD). Enables direct USD/credit card entry/exit for retail users and dApp integration. Progress: 33.45% funded by 52 contributors (msg#563174).

- **DAO Governance & Reputation Systems**: Discussion of effective DAO structures without centralized leadership. Ray Dalio's "dot collector" reputation framework proposed for Ergo (msg#562884–#562887). Paideia DAO emission engine rewards engagement with vote token accumulation.

- **EVM vs. eUTXO Design Philosophy**: Extended critique of EVM adoption in 2025 as vulnerable and marketing-driven. eUTXO model (Ergo, Alephium) preferred for security and flexibility. Bitcoin vs. Ergo positioning as core long-term comparison.

- **Privacy & Orderbook DEXes**: Private order books requested for DEX functionality. @HQ3r integrated Banxa into PULSE messaging platform; HQ3r mentions proof-of-work-backed tokens planned (msg#563007).

- **Hardware Wallet Support**: Keystone Pro 3 compatibility questions raised (msg#563078). ERG not yet native on Keystone (per msg#562641–#562642 Twitter ref), but integration being pursued.

---

## Important Decisions or Announcements

- [@kushti, msg#562656, 2025-06-05]: Released Ergo node **v6.0.0-RC6** on GitHub for testing.

- [@kushti, msg#562665, 2025-06-05]: **Ergo Raffle LIVE**: Fiat on-ramp crowdfunding ($20k goal). Onramper & Banxa integration with co-funding from Ergo Foundation.

- [@Armeanio, msg#562607, 2025-06-04]: Working to line up speakers for **Colorado Springs Ergo Meetup**. Event-specific liquor license in review; live recording planned.

- [@Armeanio, msg#562575, 2025-06-04]: **Lithos Protocol next milestone**: testnet launch announced.

- [@TMR.ΣRG, msg#563048, 2025-06-06]: **Game postponed** due to security issues discovered; rescheduling TBD.

- [@qx(), msg#562708, 2025-06-05]: Published comprehensive list of **Ergo Explorers, GraphQL endpoints, and APIs** with redundancy recommendations.

- [@qx(), msg#562992–#562999, 2025-06-06]: **Ergomonitor bot upgraded**—transaction click-through to multiple explorers now functional.

- [@HQ3r, msg#563155, 2025-06-08]: **Banxa integration on PULSE complete**; awaiting main integration and credentials from Banxa team.

---

## Technical Q&A Worth Preserving

- **Q** (@Shai Deshe, msg#562524): What does Ergo use NIPoPoWs for? Pruning?
  **A** (@Pulsarz, msg#562531): Light clients. (@TMR.ΣRG, msg#562541): UTXO set snapshots; lite node sync on Android devices in minutes; examples of nodes running on Samsung phones/refrigerators.

- **Q** (@Shai Deshe, msg#562533): Autolykos prevents pooling—is that miner governance?
  **A** (@TMR.ΣRG, msg#562534): Miners can vote with hashpower. (@mrtn, msg#562539–#562542): Autolykos v1 had outsourcable puzzle (deactivated v2). Lithos protocol re-introduces decentralized principles; blockchain-agnostic.

- **Q** (@Shai Deshe, msg#562527): By sigma protocols you mean 3-round ZK?
  **A** (@kushti, msg#562583): Ergo contracts based on mixed ZK sigma-protocols with predicates over blockchain context. Whitepaper II describes design well.

- **Q** (@TMR.ΣRG, msg#562433): Difference between sidechain, sigma chain, and layer 2?
  **A** (@Armeanio, msg#562434–#562440): Sigma chain = porting computational layer (Sigma) across new consensus/Sybil-resistance layers. Sidechains share computational layer but separate consensus. L2 = separate consensus AND computational layers; requires bridges. Merged mining philosophically interesting for Sigma chains.

- **Q** (@Patato, msg#562710): Why does Sigmaspace API return full token descriptions but others don't?
  **A** (@qx(), msg#562713–#562714): Ergexplorer and Sigmaspace account for long descriptions; others truncate. Staying under 425 characters safe across all APIs.

- **Q** (@K Chan, msg#563090): UTXO has insufficient ERG for storage rent but holds valuable tokens—how handled?
  **A** (@cannon_q, msg#563094): Known feature since genesis. Consolidate wallet every 4 years to avoid; not unreasonable for storing value on p2p ledger.

- **Q** (@TMR.ΣRG, msg#562424–#562427): For game contract: AI usage allowed? Transaction structure?
  **A** (@TMR.ΣRG): First game doesn't require AI; second benefits from note-taking; third has 2 hard math problems solvable with AI but game designed not to be AI-solvable. Each game costs 1 TX (10 ERG); first gives 10 messages, second/third play until death/win.

---

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC6](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC6): Node 6.0.0-RC6 release.

- [https://ergoplatform.org/en/blog/Ergo-Onramper-Banxa/](https://ergoplatform.org/en/blog/Ergo-Onramper-Banxa/): Fiat on-ramp raffle details & blog post.

- [https://ergoraffle.com/raffle/show/ccf1fb1949cfbba4a00e9134b8325eaa1f52afb7bc8e6255c62b46da90d8445f](https://ergoraffle.com/raffle/show/ccf1fb1949cfbba4a00e9134b8325eaa1f52afb7bc8e6255c62b46da90d8445f): Active Banxa/Onramper raffle contract.

- [https://webui.codeutxo.com/cgi-bin/mempool_visualizer.pl](https://webui.codeutxo.com/cgi-bin/mempool_visualizer.pl): CodeUTXO mempool visualizer; updated with oracle/DEX/CEX color coding (msg#563061).

- [https://sigmaexplorer.org/network_chart](https://sigmaexplorer.org/network_chart): Sigma Explorer difficulty chart.

- [https://cds.oette.info/ergo_diff.htm](https://cds.oette.info/ergo_diff.htm): Real-time difficulty dashboard.

- [https://docs.ergoplatform.com/mining/governance/](https://docs.ergoplatform.com/mining/governance/): Miner Governance documentation.

- [https://docs.ergoplatform.com/mining/autolykos/](https://docs.ergoplatform.com/mining/autolykos/): Autolykos mining algorithm docs.

- [https://github.com/Hq3r/PULSE](https://github.com/Hq3r/PULSE): HQ3r's minimal p2p messaging on-chain; supports mempool integration & instant messages.

- [https://principlesus.com/dot-collector-real-time-feedback/](https://principlesus.com/dot-collector-real-time-feedback/) & [https://www.youtube.com/watch?v=tUu-6UxuGr8](https://www.youtube.com/watch?v=tUu-6UxuGr8): Ray Dalio dot collector reputation framework reference.

- [https://github.com/reputation-systems/sigma-reputation-panel](https://github.com/reputation-systems/sigma-reputation-panel): Sigma Reputation Panel GitHub (potential DAO reputation base layer).

- [https://storage.googleapis.com/ergo-cms-media/docs/ErgoScript.pdf](https://storage.googleapis.com/ergo-cms-media/docs/ErgoScript.pdf): ErgoScript Whitepaper II (Leo Reyzin).

- [https://docs.ergoplatform.com/events/ergohack/#ergohack-10-ai-on-the-ergo-blockchain](https://docs.ergoplatform.com/events/ergohack/#ergohack-10-ai-on-the-ergo-blockchain): ErgoHack 10 summary (11 projects).

- [https://ergone.io](https://ergone.io): Ergone social media promotion tool (POCOP token rewards).

---

## Unresolved Questions

- **Sigma Chain Testnet Readiness**: When will sigma chain construction specification be published and testnet available? (@Armeanio, msg#562575 flagged as "next milestone").

- **Private Orderbook DEXes**: Timeline for private order books on Ergo DEXes (Spectrum)? Mentioned as "from forever" on roadmap (msg#562444).

- **Keystone Hardware Wallet Support**: Will ERG be added as native support on Keystone Pro? Currently not supported per Twitter reference (msg#562641).

- **Fiat On-Ramp Raffle Completion**: Will 21,820 ERG fundraising goal be met? Currently 33.45% funded (msg#563174). No firm deadline stated.

- **Dexy Gold Mainnet Deployment**: Stable algo gold still on testnet as of 5 months prior (msg#563114). ETA for mainnet not provided.

- **Game Security & Timeline**: @TMR.ΣRG paused game due to security issues (msg#563048). Rescheduled date unknown.

- **Oracle Pool Decentralization**: How can oracle pools source from truly diverse (non-centralized) sources? Discussion opened but consensus not reached on implementation (msg#562917–#562927).

- **Research Funding Model**: How should Ergo fund research given free-riding problem? Bruno raised concern about other chains using Ergo-funded research results without contribution (msg#562810).

---

## Community Notes

- **Ergo Rank #1 on Coinmarketleague voting** for week 22 (msg#562760).
- **Weekly AMA/Update**: Held Wednesdays at 13:00 UTC; recordings posted; transcription/summarization suggestion made (msg#562669).
- **Scam Alerts**: Fake "Anastasiia" impersonator reported (msg#563081–#563089); community reminded not to impersonate Ergo team.
- **Spam/Moderation**: Ongoing Discord/Telegram bridge discussions re: ban appeals, scam filtering, and community standards (msg#562155–#562173).