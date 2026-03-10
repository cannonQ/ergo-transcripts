---
title: "Ergo General Chat — 2025-W06"
date_start: "2025-02-03"
date_end: "2025-02-09"
type: telegram_weekly
channel: general
week: "2025-W06"
source: telegram
message_count: 0
categories: [technical, community, defi, bridges, ecosystem, governance, mining, wallet, nft, marketing]
key_terms: [6.0 soft fork, sub-blocks, testnet voting, block propagation, performance, demurrage, emission reduction, miners incentives, money printing, long-term security, community town hall, monetary policy, miners rights, storage rent, ChainCash, agentic wallet, UTXO dapps, p2p design, proxy contracts, Rosen Bridge]
---
# Ergo General Chat — Week 2025-W06 Summary

## Key Topics Discussed

- **6.0 Soft Fork & Sub-blocks**: Voting for 6.0 is underway on public testnet (780,000 votes recorded). Sub-blocks will enable faster block production; public testnet expected in 10–12 weeks pending P2P layer support, stratum proxy modifications, and storage of sub-blocks DAG rather than best chains only.

- **Demurrage as Long-Term Security**: @LouisLibre ⚡️ reframed Ergo's demurrage mechanism: it is not a fee but a use-it-or-lose-it incentive that distributes profits to miners. Holders who mine break even net-net; those who don't mine experience dilution. This contrasts with Bitcoin where holders lose mining incentive over time.

- **Master Nodes Proposal Rejected**: @kushti comprehensively rejected hybrid masternode consensus, citing unclear security assumptions, lack of formal treatment, and risk of introducing oligarchic gatekeeping that contradicts Ergo's p2p values. If an implementation emerges, miners would need incentive to vote for it—which is unlikely.

- **eUTXO dApp Development UX & Cost**: @c8 outlined the path to dApp explosion: reduce development cost from ~$20–30k per dApp to $2–3k via reusable reference implementations, then to $200 via strong open source culture. Currently, eUTXO dApp design is underexplored; copy-paste replication economics will drive adoption.

- **ChainCash & Agentic Wallet Design**: @c8 proposed building wallets as "agents" that manage retry loops for tasks (e.g., swap ERG → SigmaUSD within parameters) rather than sign-and-send. This pattern suits UTXO models, enables private orders until execution, and removes reliance on proxy contracts for active processes.

- **Rosen Bridge Bitcoin Runes R&D Complete**: Research on integrating Bitcoin Runes with Rosen Bridge concluded; rate-limit concerns noted but development will proceed with more accurate estimations gathered during implementation. Monero bridge also in R&D; institutional investors in Dubai reportedly separating PoW from other asset classes.

- **Demurrage Parameters & Voting**: Current 3 ERG/block emission allows testing demurrage profit for years. If miners vote to increase demurrage, max cap is 2x current value. Additional soft-fork requirement proposed to distribute demurrage evenly (e.g., 1 ERG/block via separate emission contract) to avoid block-to-block variance.

- **NIPoPoWs & Light Client Progress**: @kushti noted Gluon Gold and NIPoPoWs clients recently delivered; these were on original 2017 roadmap.

- **P2P Protocol Neutrality**: @kushti stressed that core protocol should remain politically and geopolitically neutral—assets must be accessible regardless of US, China, EU actions. Only such neutral assets are suitable for national reserves. This principle extends to application neutrality (no censorship of non-threatening dApps).

## Important Decisions or Announcements

- [@kushti khushi, msg#544165, 2025-02-03]: **Ergo Community Town Hall scheduled** — Tuesday, Feb 4, 4pm UTC. Zoom ID: 976 3079 5812. Discussion topics: monetary innovation, algorithmic monetary policies, emission reduction/effects, miners' rights protocol, storage rent.

- [@kushti khushi, msg#544232, 2025-02-03]: **Roadmap items delivered**: Gluon Gold and NIPoPoWs clients already shipped; index funds announced recently in community.

- [@kushti khushi, msg#544639–640, 2025-02-06]: **Public testnet voting for 6.0 underway** — 780,000 votes recorded on public testnet.

- [@kushti khushi, msg#544693, 2025-02-06]: **Public testnet for 6.0 timeline** — ~10–12 weeks out, pending sub-blocks DAG storage, P2P layer support, and stratum proxy updates.

- [@kushti khushi, msg#544751, 2025-02-06]: **Demurrage cap confirmed** — miners can vote to increase demurrage, max 2x current default value.

- [@Armeanio, msg#544332, 2025-02-03]: **CoinEx outage resolved** — restoration completed after Chinese New Year holiday delay.

- [@c8, msg#545045–047, 2025-02-08]: **Development roadmap clarity** — reference implementations can be built solo to reach $2–3k dApp cost; open source culture required to reach $200. dApp explosion inevitable; blocks will fill naturally; L1 scaling possible before L2 needed.

## Technical Q&A Worth Preserving

- **Q** (@A P, msg#544347): "Can anyone explain the 6.0 soft fork like I'm 5 years old?"  
  **A** (@Snowman Jason, msg#544350): "It will speed up normal transaction speed like 100x"  
  **A** (@kushti khushi, msg#544353–354): 6.0 enables voting on sub-blocks count; sub-blocks deploy *after* 6.0. Sub-blocks DevNet already testable. [Forum link: https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005]

- **Q** (@kii, msg#544728): "If demurrage increases 2x, can miners vote another 2x in future? Or is 2x the absolute max?"  
  **A** (@kushti khushi, msg#544751): "Max stop limit is 2x"

- **Q** (@kii, msg#544730): "Are sub-blocks a sidechain or layer 2? Can people build on sub-blocks?"  
  **A** (implicit): Sub-blocks are neither; they are a block production optimization. People build on Ergo L1 regardless of sub-block deployment.

- **Q** (@Grayman, msg#544711): "Does sub-blocks introduce network latency concerns? What is max tolerable latency?"  
  **A** (@kushti khushi, msg#544712–718): Sub-blocks improve P2P propagation but increase forking and adversarial possibilities at sub-block level. Block reward must exceed sub-block rewards. Tighter limits on sub-block sizes/script cost likely needed. Verification dilemma and bribing attacks are risks.

- **Q** (@Grayman, msg#544702): "If we colonize Mars with 20+ minute comms delay, what then?"  
  **A** (@kushti khushi, msg#544706): "Could be some Mars committee consensus-based sidechain initially"

- **Q** (@Unknown, msg#544881): "Has anyone stored files on Ergo blockchain?"  
  **A** (@cannon_q, msg#544882): "Was a project that encrypted/decrypted music files, but it bailed"  
  **A** (@cafebedouin.org, msg#544885–896): Off-chain storage (IPFS, torrents) is appropriate. On-chain storage risks DOS via bloat; box size limits are small for this reason.

- **Q** (@kii, msg#544786): "Why does this bull market feel 'weird' and less intense than previous cycles?"  
  **A** (@kushti khushi, msg#544799): Waiting for bull market as a "cheat code" is wrong. Real demand for better money exists globally. Thousands of for-profit and philanthropic possibilities exist. Ergo season may happen independent of "crypto industry" state.

- **Q** (@c8, msg#545013): "What is the expected benefit of master nodes—more hash, faster UX, price pump?"  
  **A** (@c8, msg#545015): ASIC-based increases hash but damage price performance post-marketing. Sub-blocks provide UX improvement without oligarchic centralization.

- **Q** (@T F, msg#545108): "What does 'use it as your frontend' mean?"  
  **A** (@c8, msg#545109): Download indexed node, install nodeview.xyz frontend, see all blockchain activity locally without relying on Ergo Explorer website.

- **Q** (@kushti khushi, msg#544524): "How would an agentic wallet UI look?"  
  **A** (@c8, msg#544529): "EXACTLY the same, you would just have more advanced settings on 'slippage' and features like schedule, or execute as soon as [parameters met]"

- **Q** (@Grayman, msg#544713–714): "How far can the network stretch before breakdown under sub-blocks?"  
  **A** (@kushti khushi): Sub-blocks improve propagation but risk forking and adversarial attacks; block reward must exceed sub-block rewards; tighter limits on script costs likely needed.

- **Q** (@kushti khushi, msg#544559): "Are there decentralized solutions to unwrapping BTC?"  
  **A** (@kushti khushi, msg#544559–561): Lock/unlock on BTC is the problem; aggregated Schnorr signatures might enable unlock witnessed by hundreds of watchers + trustless relay. Aggregated sigs not yet deployed (Spectrum Network used them for Ergo vault demo).

## Links Shared

- [https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005]: Kushti's 6.0 soft fork proposal with technical details on sub-blocks voting.
- [https://docs.ergoplatform.com/documents/]: Core Ergo documentation archive.
- [https://youtu.be/nrF-r_sylsU]: Armeanio's old talk on roadmap origins.
- [https://ergoraffle.com/raffle/show/8c284f0aa6abc8899ce890b7ea099a29058e899fd0f2287e83f06c2779cd52f6]: Ergo raffle for fundraising (300 ERG collected, donations ongoing).
- [https://github.com/ergoplatform/eips/pull/93]: EIP draft on even demurrage distribution (Huginn, since 2022).
- [https://github.com/jellymlg/nodeview.xyz]: Frontend for indexed nodes as alternative explorer.
- [https://savonarolalabs.github.io/crystal-pool/#/]: C8's L1 real-time trading casino UI demo (Spectrum liquidity noted as one-way).
- [https://semianalysis.com/2023/05/04/google-we-have-no-moat-and-neither/]: Article on open source moats (shared re: AI/crypto parallels).
- [https://docs.ergoplatform.com/dev/Integration/guide/]: CoinEx/exchange integration guide.
- [https://x.com/ergo_platform/status/...]: Various Twitter/X Ergo platform announcements and recordings.

## Unresolved Questions

- **Sub-blocks DAG storage & best chain**: Implementation details ongoing; exact storage model TBD.
- **Stratum proxy modifications scope**: Changes needed for public testnet unclear; specifics to follow.
- **Sub-block script cost limits**: Whether tighter limits are needed—not yet finalized.
- **Demurrage even distribution mechanism**: Huginn's EIP draft (PR#93) not yet merged; implementation approach TBD.
- **Institutional investor interest in PoW**: Kushti mentioned Dubai sheikhs interested; no concrete partnerships announced.
- **Monero sidechain viability**: In R&D; feasibility and design still under investigation.
- **Bitcoin aggregated Schnorr deployment**: Technology not yet available; timeline unknown.
- **Rosen Bridge rate-limit solutions**: Implementation phase will provide more accurate estimations.
- **Master node formal security treatment**: No academic or formal analysis exists; debate remains philosophical.

---

**Chat Activity Summary**: 413 messages from 47 participants over Feb 3–9. Heavy participation from @kushti khushi (core dev Q&A), @c8 (dApp UX/architecture), @Armeanio (ecosystem/partnerships), and community members (@qx(), @CannonQ, @Glasgow, @Marc the Shark). Key themes: 6.0/sub-blocks timelines, demurrage mechanics, eUTXO dApp developer experience, and rejection of centralized consensus alternatives. Mostly on-topic technical and strategic discussion; minimal price/spam noise.