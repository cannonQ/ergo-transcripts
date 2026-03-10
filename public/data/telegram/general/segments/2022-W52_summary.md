---
title: "Ergo General Chat — 2022-W52"
date_start: "2022-12-26"
date_end: "2023-01-01"
type: telegram_weekly
channel: general
week: "2022-W52"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W52 Summary
**Period:** 2022-12-26 to 2023-01-01  
**Messages analyzed:** 909

---

## Key Topics Discussed

- **Storage Rent Mechanism & UTXO Set Management**: Discussion of how storage rent reduces the active UTXO set by expiring dust boxes after 4 years, lowering node indexing load. Spam attacks would actually benefit miners by generating future storage rent collection. Pruning strategies (digest mode, UTXO set pruning, block pruning) are supported by protocol; NIPoPoWs will enable header pruning.

- **Node Bootstrapping & Synchronization Speed**: kushti demonstrated UTXO set snapshot downloading from multiple peers in ~15 minutes versus 5–6 hours of block processing. Current node size approximately 16–18 GB. Next steps: NIPoPoWs for near-instantaneous digest mode bootstrap (~30–45 min for full UTXO mode).

- **Mixer Privacy & Liquidity Incentives**: Multiple proposals for improved anonymity sets: long-tail fee structures (early rounds expensive, later rounds free), LP rewards without privacy leaks (tricky game-theoretically), and integration of mixing into dApps like Dexy. SigmaJoin improvements include multiple boxes per mix, outsourceable mixing, and exploration of incentivized mixing.

- **Rosen Bridge Mechanics & Cross-Chain Integration**: One-way locking/synthetic minting model: assets lock on origin chain, wrapped synthetic tokens mint on destination. No liquidity pools needed; 1:1 representation maintained. Intentionally slow to prioritize security over capital efficiency. Both ADA→Ergo and ERG→Cardano directions confirmed live/near-live.

- **SigmaUSD Status & Dexy Stablecoin**: SigmaUSD circulating supply collapsed from 7M to <600K due to low ERG price reducing collateralization incentives. Reserve Ratio at 365% (redemptions exceed minting). Dexy Gold mentioned as anticipated alternative with improved oracle refresh mechanisms and dynamic fees. Djed on Cardano uses signed exchange rate validity intervals to prevent oracle attack vectors.

- **Speed & Throughput Improvements**: Discussion of block time reduction, microblocks, sidechains, and layer 2 solutions. Consensus that concrete application set drives optimization choices. Bitcoin NG and Prism tradeoffs noted but not fully resolved. Faster blocks require careful consideration of timestamp-dependent contracts and emission schedules.

- **Order Book vs. AMM Trading Models**: Trade House (order book) provides transparency of depth and full slippage control vs. AMM's impermanent loss. Partial order fills supported on-chain with refund conditions. Spectrum (AMM) integration with order book DEXes discussed for liquidity sharing.

- **Ledger Hardware Wallet Support**: Ergo app development via custom tool (not Ledger Live native). Expected availability via Ledger Manager within "next couple weeks" pending approval. Works with Nautilus and SafeW. Nano S memory constraints delayed rollout.

- **Djed vs. SigmaUSD Oracle Design**: Djed uses paced liquidity, signed exchange rates with non-overlapping validity intervals, and signing/hashing to reduce fee pressure vs. query-based oracles. Bearwhale protections primarily through oracle configuration and dynamic fees, not intrinsic to protocol.

- **Merge-Mined Sidechains**: kushti mentioned BAP 301 (Bitcoin Improvement Proposal 301 equivalent) approach, trustless pegging via smart contracts, and rewards to mainchain miners for delivering sidechain data. Emission contracts manage reward flow. Improvements over Bitcoin's less-clear security model.

---

## Important Decisions or Announcements

- [@kushti, msg#357817, 2022-12-27]: **Ergo Raffle SkyHarbor funding fully funded** — Community raised target (16 ERG remaining goal was met the same day).

- [@Glasgow, msg#357358, 2022-12-31]: **Ledger Ergo App approval imminent** — "Should be available via ledger manager tho in the next couple weeks. Just waiting on approval."

- [@kushti, msg#358693–694, 2023-01-01]: **UTXO set snapshot bootstrapping live** — 15 minutes instead of 5–6 hours. Significant UX improvement for node operators.

- [@Spectrum/Gazza, msg#358073, 2022-12-29]: **Spectrum Finance AMA announced** — Reddit AMA 2022-12-29, YouTube link provided.

- [@CW, msg#358647, 2023-01-01]: **Community chat scheduled** — Exchange liquidity & grid bot discussion for Spectrum, 2023-01-03 17:00 UTC.

- [@kushti, msg#358751, 2023-01-01]: **ErgoUtils v5.0 airdrop tools re-enabled** — Trustless airdrop to 2,200 SigRSV holders in ~1 minute (~0.7 ERG cost). No fees.

---

## Technical Q&A Worth Preserving

- **Q** (@zhang zee, msg#357432–461): How does storage rent reduce blockchain size if transaction history remains?  
  **A** (@qx(), msg#357445–463): Storage rent doesn't shrink historical blocks. It reduces the *working set* (active UTXO index) by expiring dust boxes. Nodes only index spendable outputs; expired boxes are not part of the UTXO set. Fewer UTXOs = less RAM/indexing work for nodes.

- **Q** (@Rj, msg#357419): How do spam attacks on Ergo differ from Bitcoin/Litecoin?  
  **A** (@kushti, msg#357421): Storage rent enables miners to extract rent from untouched UTXOs after 4 years. Spammers create UTXOs that eventually become profitable to mine, so spam actually benefits miners long-term.

- **Q** (@Misfit Toy, msg#357919–936): Does Rosen Bridge require liquidity pools?  
  **A** (@qx() & @Armeanio, msg#357920–926): No. One side locks asset, other side mints synthetic. 1:1 wrapped representation never actually crosses. Optionally, community can create LP pairs post-bridge for swaps.

- **Q** (@Unknown, msg#357555): Do self-mixing UTXOs in empty mixer rings reveal the owner?  
  **A** (@qx(), msg#357566): Mixer knows boxes are yours. Self-mixing alone in a ring is traceable (one wallet → two mixes → ring). Once others join, self-mixing becomes less distinguishing. Preventing self-mixing would introduce its own traceable pattern.

- **Q** (@TMR.ΣRG, msg#357602): Must the entire blockchain be stored by at least one node?  
  **A** (@kushti, msg#358608): Network stays alive if all nodes prune with security-preserving suffixes. Archive of early blocks beneficial for transparency; Torrent-based distribution an option.

- **Q** (@Unknown, msg#357707–722): How to fund mixer liquidity providers without privacy leaks?  
  **A** (@kushti, msg#357728): Long-tail fee model promising: initial rounds expensive, subsequent rounds free. Short time-preference users subsidize long-term holders. Keeps anonymity set large without revealing LP funding.

- **Q** (@chris Ray, msg#358769): Support for signing arbitrary text messages attached to transactions?  
  **A** (@Wolf9466, msg#358775–782): OP_RETURNs exist but risk chain bloat. No current wallet support; consensus mechanisms should prevent abuse via fee-based resource limits, not by hiding capability.

---

## Links Shared

- [Ergo 2022 Year-in-Review Blog](https://ergoplatform.org/en/blog/Ergo-Platform-2022-Year-in-Review/) — Annual milestone summary.
- [Ergo.watch Emission Schedule](https://ergo.watch/emission) — Block reward reduction timeline.
- [Ergo Explorer Supply Composition](https://ergo.watch/metrics/supply-composition) — Treasury and non-mining contract breakdown.
- [DIRA Database RocksDB Discussion](https://www.reddit.com/r/ergonauts/comments/z53l3j/about_the_ergo_treasury_and_the_ef/) — Ergo Foundation treasury transparency.
- [SkyHarbor Ergo Raffle](https://ergoraffle.com/raffle/show/c82e86ed0329999cbc50e23f53ba81baa211424d3f5b00a8c988e790719945f5) — Funding campaign (fully funded 2022-12-27).
- [ErgoUtils Airdrop Tool](https://ergoutils.org/#/airdrop) — Trustless token distribution, v5.0 enabled 2023-01-01.
- [Rosen Bridge Testnet](https://soft.rosen.tech/#/bridge) — Live bridge UI for ADA ↔ ERG swaps.
- [Prof. Reyzin RealWorldCrypto 2017 Digest Mode Presentation](https://www.youtube.com/watch?v=PHY7JnLrK5o) — Technical explanation of UTXO pruning.
- [Ergo NIPoPoWs Documentation](https://docs.ergoplatform.com/dev/protocol/nipopow/logspace/) — Polylogarithmic data storage for bootstrapping.
- [SigmaJoin Off-Chain Mixer Documentation](https://docs.ergoplatform.com/eco/sigmajoin/) — Composable mixer improvements.
- [Spectrum Finance AMA on Reddit](https://www.reddit.com/r/SpectrumLabs/comments/zy3scl/spectrum_finance_team_ama_5pm_utc_29th_of_december) — 2022-12-29 live Q&A.
- [Spectrum Finance AMA YouTube](https://youtu.be/ZTgcd0dJJ1E) — Video recording.
- [Bitcoin Script Documentation](https://en.bitcoin.it/wiki/Script) — Reference for OP_RETURN and chain design principles.
- [Declaration of the Independence of Cyberspace](https://www.eff.org/cyberspace-independence) — Foundational crypto philosophy (shared by chrom).
- [Influencive Article on Ergo](https://www.influencive.com/106427-2/) — Coverage of Ergo and kushti's role (by Block Editor).
- [DuckPools SigUSD Pool Contracts](https://t.me/duckpools_updates) — Beta testing announced 2022-12-28.
- [Gate.io US Market Expansion](https://www.gate.io/article/29081/gate-us-obtained-licenses-for-digital-asset-trading-bringing-world-leading-crypto-exchange-services-to-the-us) — Potential US exchange access for ERG.

---

## Unresolved Questions

- **Mixer LP Economics**: How to sustainably reward liquidity providers without revealing funding sources or reducing anonymity set quality? Trade-offs between incentive structures and privacy still being explored.

- **Speed vs. Security**: Block time reduction proposals remain tentative. Exact parameters (microblock delay, emission impact, timestamp-contract compatibility) not finalized. Needs concrete application profiling.

- **Conceal Bridge Status**: Last known update (msg#365, 2022-12-31) cited Q3 2022 target; as of early January 2023, custodial version described; trustless version timeline unclear.

- **SigmaUSD Viability**: Circulating supply collapse and low Reserve Ratio raise questions about practical minting incentives. Will Dexy or alternative stablecoins replace it, or will conditions normalize?

- **Miner Governance Participation**: How to incentivize profit-focused miners to care about protocol health without forcing changes that would drive them to other coins? Structural problem acknowledged but unsolved.

- **OP_RETURN/Message Signing Policy**: Debate ongoing whether arbitrary message attachment should be wallet-native or require smart contracts. Chain bloat risk vs. user freedom tension unresolved.

- **Ledger Live Native Support**: Custom tool available but full Ledger Live integration timeline uncertain (mentioned as "next couple weeks" but dependent on upstream approval).

- **Prism, Bitcoin NG Evaluation**: kushti promised forum post on comparative analysis of layer 2 / consensus protocols but post not yet delivered by week-end.

- **EIP-41 Status**: [@Armeanio, msg#357706] asked for update; @kushti replied "need to check it" but no follow-up provided.

- **Djed vs. SigmaUSD Oracle Refresh**: Confusion about whether dynamic fees or oracle configuration delivers bearwhale protection; technical details of Djed's solution not fully explained in this chat.

---

**Meta-Notes:**
- Community sentiment improved mid-week after price stabilization; less "wen moon" noise post-12-28.
- kushti unusually active in main chat (noted by msg#358703 as refreshing post-bear-market exodus).
- Developer activity (DuckPools, ErgoUtils, Rosen, Ledger) proceeded despite price action.
- Strong emphasis on trustless design and first-principles philosophy throughout discussions.