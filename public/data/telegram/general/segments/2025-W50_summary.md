---
title: "Ergo General Chat — 2025-W50"
date_start: "2025-12-08"
date_end: "2025-12-14"
type: telegram_weekly
channel: general
week: "2025-W50"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2025-W50 Summary

## Key Topics Discussed

- **Sub-blocks (Matrix Protocol)**: kushti deployed updated sub-block devnet nodes and outlined deployment strategy. Initial rollout targets mining pools and solo miners forming peer-to-peer sub-networks, with lock-in voting at 90%+ hashrate support. Extension fields become necessary once protocol adoption reaches threshold. Whitepaper expected in coming days.

- **Algorithmic Stablecoins & Collateralization**: Discussion on backing stablecoins with diverse asset baskets rather than sole ERG collateral. Bruno shared article on challenges of multi-asset backing; DuckPools v2 update enables any asset as collateral, raising questions about integration with Dexy, SigmaUSD, and Gluon.

- **Autolykos Sponsorship for Academic Work**: Shai Deshe proposed dedicating extended section in proof-of-work book to Autolykos algorithm. kushti countered with suggestion to prioritize sub-blocks documentation instead, noting Bitcoin Cash's TailStorm shares similar motivation and Ergo's approach could apply to Bitcoin forks.

- **Oracle Pool Singular Events Design**: bob posted forum discussion on optimistic oracle design for singular events (non-Oracle Pool use cases). Acknowledged Oracle Pools insufficient for event-based decisions; proposed design avoids additional token, offers flexibility, and uses SigmaUSD or USE as collateral.

- **Rosen Bridge & Multi-Chain Partnerships**: Continued emphasis on Rosen Bridge enabling EVM and cross-chain settlement. Discussed importance of not being tribalistic about multi-chain usage—companies may use only partial aspects of Ergo ecosystem, and this benefits overall positioning.

- **Lithos GPU Mining Protocol**: Mentioned as interesting advancement. Grayman raised concerns about ASIC resistance given recent failures of ASIC-embracing blockchains (Kadena reference). No detailed technical discussion completed.

- **USE Stablecoin Integration**: MewFinance deployed native USE liquidity pool on MewDex; added liquidity deposit/redeem functionality. Ergopay support flagged as coming soon.

- **Web Wallet Development**: HQΣr building web wallet with integrated MewFinance services; consulted on design patterns using Ronin as reference (side panel instead of popup).

---

## Important Decisions or Announcements

- [@kushti khushi, msg#584964, 2025-12-08]: Deployed updated sub-blocks devnet node at http://213.239.193.208:9058/info for continued testing.

- [@CannonQ, msg#584961, 2025-12-08]: Website development had long break; wrapped up background work and resuming this week with ~2-week completion target.

- [@kushti khushi, msg#585069, 2025-12-10]: Sub-blocks implementation 90% complete; whitepaper release imminent (pending travel). Added pruning test coverage.

- [@kushti khushi, msg#585018, 2025-12-09]: Dropped Community Marketing Playbook for Ergo covering coordinated content strategy across CT, Reddit, Telegram, and more.

- [@kushti khushi, msg#585014, 2025-12-09]: Will attend Stability Workshop in person (in-person event, Jaipur, India) and give opening speech at unstoppable hackathon.

- [@kushti khushi, msg#585218, 2025-12-11]: First Stability Workshop scheduled December 15 at LNM Institute, Jaipur. Program available at https://workshop.stability.nexus/#program.

- [@kushti khushi, msg#585220, 2025-12-11]: Direct Spectrum pool swaps now available on CruxFinance with $0.25 fee per swap in ERG or $0.125 in Crux token.

- [@Aco Šmrkas, msg#585456, 2025-12-14]: MewFinance DEX now supports native swaps using USE liquidity pool via 'USE - Native LP'.

- [@Aco Šmrkas, msg#585469, 2025-12-14]: MewFinance DEX added native liquidity deposit and redeem for USE pool; Ergopay support coming soon.

- [@kushti khushi, msg#585434, 2025-12-13]: Proposed Twitter Spaces on "algorithmic stablecoins: past, present and future" December 14 @ 3 PM UTC with Bruno.

- [@kushti khushi, msg#585459, 2025-12-14]: Next iteration of no-code Blockly-based tool started by C8 being advanced by hackathon team.

---

## Technical Q&A Worth Preserving

- **Q** (@Eramehr, msg#585040): "What do we do? Should stop mining ergo?"  
  **A** (@kushti khushi, msg#585041): Check pinned message for current actions; no directive to stop mining.

- **Q** (@Eramehr, msg#585049): Mining returns slow (every 2-3 days); what should I mine?  
  **A** (@cannon_q, msg#585046): Mining is speculative. Each miner calculates own risk/reward before committing electricity.

- **Q** (@Shai Deshe, msg#585050): Requested sponsorship for extended Autolykos section in PoW book, outlining academic rigor level.  
  **A** (@kushti khushi, msg#585070): Counter-proposed prioritizing sub-blocks documentation instead; TailStorm (Bitcoin Cash) has similar motivation, and Ergo approach reusable for Bitcoin/forks.

- **Q** (@DiscordBridge/fireman625, msg#585010): "Has anyone created decentralized insurance on ergo yet? Would work well with oracle pools"  
  **A** (@bob, msg#585289): Posted forum design for optimistic oracle handling singular events; acknowledged Oracle Pools unsuitable for that use case.

- **Q** (@cannon_q, msg#585481): Can Dexy, SigmaUSD, or Gluon accept any asset as collateral like DuckPools v2 update?  
  **A** (@Bruno Woltzenlogel Paleo, msg#585485): Shared article on challenges of multi-asset backing; answered in referenced piece (https://news.stability.nexus/the-challenges-and-problems-of-backing-by-a-basket-of-assets-8211ce8362ba).

- **Q** (@HQΣr, msg#585162-163): Web wallet reference examples for feature design; planning to integrate all Mew services directly.  
  **A** (@cannon_q, msg#585166): Ronin not terrible; suggested side panel instead of small popup for UX pattern.

---

## Links Shared

- [http://213.239.193.208:9058/info]: Sub-blocks devnet node deployed for testing (kushti).

- [https://ergoblockchain.org/start/community/marketing]: Community Marketing Playbook for coordinated content strategy (kushti).

- [https://workshop.stability.nexus/#program]: First Stability Workshop program, December 15, Jaipur (kushti).

- [https://www.coincarp.com/currencies/ergoplatform/]: Ergo listing updated on CoinCarp with links to ErgoExplorer and ergoblockchain.org (Yulius Kristianto).

- [https://coincodex.com/crypto/ergo/]: Ergo profile with updated social links and explorer references (Yulius Kristianto).

- [https://coincheckup.com/coins/ergo]: Updated with SigmaSpace and ErgoExplorer links (Yulius Kristianto).

- [https://www.livecoinwatch.com/price/Ergo-ERG]: Ergo listing with official YouTube channel and explorer links (Yulius Kristianto).

- [https://ergoforum.aap.cornell.edu/t/optimistic-oracle-on-ergo/5292]: Optimistic oracle design for singular event posting on Ergo (bob).

- [https://news.stability.nexus/the-challenges-and-problems-of-backing-by-a-basket-of-assets-8211ce8362ba]: Technical article on multi-asset stablecoin backing challenges (Bruno).

- [https://dune.com/gedion08/usdt-bans-2025]: Dashboard showing ~1.8% of USDT supply frozen historically across ETH/Tron (Armeanio).

- [https://shai-deshe.gitbook.io/pow-book/part-1-blockchains-and-blockdags/chapter-1-bft-vs.-pow/how-pow-works]: Shai Deshe's PoW book outline with sponsorship model (Shai Deshe).

---

## Unresolved Questions

- **Sub-blocks Matrix deployment timeline**: Whitepaper promised "coming days" (modulo travel) but no firm release date as of 2025-12-14.

- **Multi-asset collateral for stablecoins**: Question whether Dexy, SigmaUSD, or Gluon will adopt DuckPools v2 model left open; Bruno's article identifies challenges but no commitment made.

- **Optimistic oracle for singular events**: bob's forum post proposed design but flagged it as seeking community builders—no committed developer assigned.

- **EVM sidechain status**: bob asked "when (EVM) sidechain?" with kushti responding "But why"—discussion deferred, no timeline discussed.

- **Livestream/Twitter Spaces schedule**: kushti proposed Dec 14 @ 3 PM UTC "algorithmic stablecoins" Twitter Spaces but no confirmation of broadcast completion or recording availability mentioned in final messages.

- **Hackathon participant support**: kushti flagged busy with reviewing submissions by msg#585468 but no final results or notable project summaries shared by week end.

---