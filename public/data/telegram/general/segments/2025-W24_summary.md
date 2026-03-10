---
title: "Ergo General Chat — 2025-W24"
date_start: "2025-06-09"
date_end: "2025-06-15"
type: telegram_weekly
channel: general
week: "2025-W24"
source: telegram
message_count: 482
categories: [ecosystem, mining, technical, defi, wallet, marketing, bridges]
key_terms: [ErgoHack, AI, innovation, hackathon, prize pool, storage rent, demurrage, snipe bots, pool operators, Sigmanauts, Banxa, Onramper, raffle, onboarding, fiat integration, ErgoScript, contract, emission, governance, token distribution]
---
# Ergo General Chat — 2025-W24 Summary

## Key Topics Discussed

- **Storage Rent Collection & Mining Pool Economics**: Multiple discussions around storage rent bots claiming fees from demurrage-eligible UTXOs, competitive dynamics between mining pools (Sigmanauts, HeroMiners, Herominers) implementing collection, and whether pools should prioritize their own transactions. HQ3rr and kushti clarified that miners can always include their own transactions first, and the market will decide pool competitiveness based on reward distribution.

- **Sandwich Bot Activity on Spectrum DEX**: Ongoing concerns about sandwich/snipe bots exploiting mempool ordering on Spectrum DEX, reducing user experience. cannon_q noted attempts to identify operators privately; qx() emphasized that permissionless systems inherently allow MEV but community can apply social pressure. kushti proposed building DEX with encrypted orders and Sigma protocols as mitigation.

- **Banxa/Onramper Integration Raffle**: Community-funded raffle reached 100% completion by 2025-06-15 with 158 contributors and 22k+ ERG collected. Critical for onboarding infrastructure; HQΣr noted matching incentives of 500 ERG deployed in final 24 hours.

- **ErgoHack X Results & AI Integration**: 10th iteration (2025-05-25 to 2025-06-01) with $9K ERG prize pool focused on AI × Ergo. Nine teams delivered: SigmaQuest (AI puzzle game), RustChain (proof-of-antiquity), CodeUTXO (natural language blockchain interaction), Pattern (multi-agent explorer), Game of Prompts, Pulse (decentralized chat), Cortex (GPU miner with ML tuning), SCypher (on-chain encryption), ErgoMempool Visualizer.

- **SigmaUSD V2 Pool Launch**: Beta v2 SigmaUSD pool ready with contract and off-chain bot; UI bugs pending fix before official launch. Expected imminent availability.

- **Fleet SDK & ergoc Releases**: Fleet SDK v0.10.0 added ErgoBox cloning, context extension merging, EIP-12 mock-chain support. ergoc v0.3.0 added template/contract hash reporting, lazy-loading compilation speedup.

- **Dexy Gold Minting**: kushti began minting Dexy Gold incrementally; Dexy Gold / SigmaUSD liquidity pool planned soon.

- **Proof of Merch Launch**: Aco announced crypto-native merchandise platform accepting SigmaUSD and stablecoins, launching in 2 weeks. Targeting creators, projects, and communities on Ergo and cross-chain.

- **Palmyra & Chainlink Partnership**: Armeanio detailed Palmyra's use of Chainlink proof-of-reserve + Winter Protocol for on-chain warehouse receipts and decentralized trade financing. Combination of IoT devices (cameras, weight/motion sensors) provides continuous proof-of-existence for commodity collateral. Plans to utilize Ergo oracles natively; considering funding from token sale to build out infrastructure.

## Important Decisions or Announcements

- [@DiscordBridge, msg#563432, 2025-06-11]: ErgoHack X recap published with nine competing projects and judging underway; winner announcements coming soon.

- [@kushti_ru, msg#563436, 2025-06-11]: Developers chat weekly at t.me/ErgoDevelopers; open to all interested in Ergo development or protocol updates.

- [@Andy L, msg#563442, 2025-06-11]: Weekly Update and AMA scheduled for 13UTC (YouTube Live 92S1h09xOUs).

- [@kushti_ru, msg#563551, 2025-06-12]: Joe Armeanio (Armeanio) appeared on AMA that day.

- [@qx(), msg#563559, 2025-06-12]: Working on documentation to allow mining pools to claim storage rent and distribute to rightful miners instead of developer bots.

- [@Aco Šmrkas, msg#563282, 2025-06-10]: Proof of Merch platform launching soon; accepting crypto payments including SigmaUSD; creators and projects welcome to onboard.

- [@kushti_ru, msg#563748, 2025-06-13]: Began minting Dexy Gold bit by bit; Dexy Gold / SigmaUSD liquidity pool launching soon.

- [@HQΣr, msg#563740, 2025-06-13]: Final warning to storage rent "abusers" (non-sharing bots); threat to send all collected rent to miners if unfair play continues.

- [@kushti_ru, msg#563750, 2025-06-13]: HeroMiners ERG mining pool now collecting storage rent, increasing miner yields.

- [@HQΣr, msg#563753, 2025-06-13]: "Cyberversewiki.com" raffle fully funded by 5 contributors.

- [@HQΣr, msg#564086, 2025-06-15]: Announced Telegram Web App ("twa") mini-games with leaderboard and Ergo wallet integration coming soon.

- [@HQΣr, msg#564092, 2025-06-15]: Banxa/Onramper Integration raffle fully funded by 158 contributors (22k+ ERG).

- [@kushti_ru, msg#564053, 2025-06-15]: Beta v2 SigmaUSD pool ready; off-chain bot complete; UI fixes in progress before launch.

- [@Aco Šmrkas, msg#564054, 2025-06-15]: Proof of Merch launching on Ergo in 2 weeks with Ergo-themed merch; inviting creators and community leaders.

## Technical Q&A Worth Preserving

- **Q** (@Marc the Shark, msg#563391): Reviewed AI-generated ErgoScript emission contract requesting feedback on code quality and design.
  **A** (@HQΣr, msg#563394): Fix governance to use proper signature verification instead of proposition hash comparison; explicitly validate ERG and token balances; add token balance check to ensure state output has SELF.tokens minus emission rate; define governance constraints; verify transaction inputs properly.

- **Q** (@Marc the Shark, msg#563392): Planning to open-source AI contract generation and host APIs for testing.
  **A** (@HQΣr, msg#563397): Declined hands-on testing ("I RETIRED SER"), but offered to provide APIs once hosted.

- **Q** (@iVacuum, msg#563702): Connection errors to Sigmanauts mining pool with "invalid peer certificate: Expired".
  **A** (@qx(), msg#563705): Marc redid certificate that morning; fixed by 2025-06-12T22:02 per msg#563733.

- **Q** (@Nick Hope, msg#563521): Investigating lost ERG from failed SigmaUSD V1/V2 swap transactions circa 2021; suspected funds stuck in proxy contract.
  **A** (@kushti_ru, msg#563525): Funds likely recoverable from proxy contract. Recovery process referenced; V1 shutdown details and timeframes provided by cannon_q.

- **Q** (@Flying Pig, msg#563838): Are storage rent rewards exclusive to mining pools?
  **A** (@Pgr456, msg#563839): No formal exclusivity; historically miners had priority due to ability to include transactions above others. With newer node versions, anyone can collect, but miners retain advantage via transaction ordering.

- **Q** (@Flying Pig, msg#563842): Do mining pools need to implement storage rent collection?
  **A** (@Flying Pig, msg#563843): As of 2025-06-13, rent now flowing directly to miners anyway, so no action needed immediately. However, pools implementing will capture rent rather than lose it to bot operators.

- **Q** (@Pgr456, msg#563844): Planning storage rent solution for miners?
  **A** (@Pgr456, msg#563854): Yes; considering API-based approach with potential developer fee (similar to mining software licensing).

- **Q** (@Luivatra, msg#563973): Pruned node compatibility with dApps (specifically Paideia AVL tree history requirements).
  **A** (@Luivatra, msg#563976): Depends on dApp; Paideia needs full history for AVL tree building. Many dApps work with pruned nodes; API endpoints vary—some unsupported on pruned nodes, depends on dApp implementation.

- **Q** (@Ioannis, msg#564099): What is SigmaUSD V2 protocol?
  **A** (Implied via context msg#564053): V2 pool design with contract and off-chain bot; details pending UI fixes and official launch.

## Links Shared

- [https://x.com/Sigmanauts/status/1932057103079731561]: Sigmanauts Twitter discussion prompt (2025-06-09).

- [https://x.com/ergo_platform/status/1932057558552064325]: Ergo Platform official post (2025-06-09).

- [https://coinmarketleague.com/coin/ergo]: Weekly voting for Ergo ranking; reset weekly (shared multiple times by Yulius Kristianto).

- [https://vxtwitter.com/erg_armeanio/status/...]: Armeanio Twitter threads (multiple posts 2025-06-09 to 2025-06-12).

- [https://youtu.be/50l1t0QlHTw?si=wDoj-EcHfsu9HJai]: Grayman YouTube link (context unclear; 2025-06-09).

- [https://proofofmerch.store]: Proof of Merch platform (Aco Šmrkas, msg#563282).

- [https://github.com/K-Singh/miningcore-SR/blob/master/src/Miningcore/Blockchain/Ergo/RPC/ErgoClient.cs]: MiningCore codebase reference (Marc the Shark, msg#563363).

- [https://github.com/The-Last-Byte-Bar/Token-Flight-On-chain]: Python Ergo AppKit deployment scripts for testnet (Marc the Shark, msg#563412).

- [https://bit.ly/4k4d1ot]: ErgoHack X recap with full project breakdowns (Ergo NEWS, msg#563432).

- [https://t.me/ErgoDevelopers]: Developers Telegram channel (kushti, msg#563436).

- [https://youtube.com/live/92S1h09xOUs]: Weekly Update and AMA livestream (Andy L, msg#563442).

- [https://test.crystalpool.cc/]: Crystal Pools testnet Dexy Gold swap interface (cannon_q, msg#563917).

- [https://github.com/kushti/ergo-book]: Ergo Book open-source repository (Grayman, msg#563899).

- [https://x.com/mrtn_ergo/status/1933524434817576989]: "Ergo Manifesto: A Philosophical Beacon" long-form philosophical post (mrtn, msg#563817).

- [https://x.com/mrtn_ergo/status/1933837595240239537]: "The Synergy of ASIC-Resistant GPU Mining and AI in the Ergo Platform" (mrtn, msg#563992).

- [https://deepwiki.com/rosen-bridge/rcs]: Rosen Bridge RCS integration documentation (cannon_q, msg#564078).

- [https://deepwiki.com/rosen-bridge/rosen-sdk]: Rosen Bridge SDK docs (cannon_q, msg#564081).

- [https://deepwiki.com/rosen-bridge/watcher]: Rosen Bridge Watcher documentation (cannon_q, msg#564081).

- [https://deepwiki.com/rosen-bridge/guard-service]: Rosen Bridge Guard Service documentation (cannon_q, msg#564081).

## Unresolved Questions

- **Storage Rent Bot Identity & Ethics**: cannon_q attempted to identify sandwich/storage rent collector operators privately; failed to locate. Debate ongoing on whether permissionless abuse vs. community enforcement should govern behavior. kushti's position: permissionless systems are inherently fair; community can apply social pressure but cannot enforce. No consensus reached.

- **Mining Pool Competitiveness & Storage Rent Implementation**: Multiple pools (Sigmanauts, HeroMiners, Herominers) now implementing collection; documentation to allow fair distribution in progress (qx()). Unclear which pools will implement vs. remain idle, and how competitive pressure will reshape pool economics.

- **SigmaUSD V1 Loss Recovery**: Nick Hope investigating ~900 ERG lost when SigmaUSD V1 shut down; kushti indicated recovery possible but process not fully clarified. Awaits specific proxy contract address and V1 launch date confirmation.

- **Ergo Book Contributor Access**: mrtn requested invitation to Ergo Book collaborative writing group; Grayman asked kushti for approval (msg#563898). Status of invitation unclear as of 2025-06-15.

- **Handshake (HNS) Bridge Integration**: 🤝 (user) exploring Rosen Bridge integration for Handshake token (UTXO-based PoW DNS chain); Armeanio offered to investigate bounty/side-quest opportunities. Complexity of RCS docs flagged; no formal commitment yet.

- **Developer Fee Licensing for Storage Rent Solutions**: Pgr456 developing storage rent collector tool; kushti asked whether developer fee will be included (similar to mining software). Pgr456 considering API-based licensing but no final decision announced.

- **Sandwich Bot Mitigation**: Discussion of whether setting slippage to 1% prevents front-running on Spectrum DEX (Patato, msg#563787). Consensus: slippage alone insufficient; encrypted orders + Sigma protocols proposed by kushti as longer-term solution. No implementation timeline given.

---

**Summary Statistics:**
- **Messages analyzed**: 482
- **Participants**: 47+
- **Date range**: 2025-06-09 to 2025-06-15
- **Key announcements**: 14
- **Technical exchanges**: 8
- **Unresolved items**: 7