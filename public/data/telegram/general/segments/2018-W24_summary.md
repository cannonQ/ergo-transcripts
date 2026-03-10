---
title: "Ergo General Chat — 2018-W24"
date_start: "2018-06-11"
date_end: "2018-06-17"
type: telegram_weekly
channel: general
week: "2018-W24"
source: telegram
message_count: 77
categories: [ecosystem, technical, governance, mining, community, marketing]
key_terms: [emission, inflation, hyper-inflationary, 8-year schedule, economic model, EFYT supply, mainnet launch, EFYT, 1.97M supply, private investors, airdrops, token burn, 100K coins, dev team rewards, Equihash, ASIC-resistant, Z9 antminer, PoW function, proof-of-data-possession, Testnet2]
---
# Ergo General Chat Summary — 2018-W24
**Period:** 2018-06-12 to 2018-06-16  
**Participants:** 6 (mostly unknown/community members, with Dmitry translating for kushti)

---

## Key Topics Discussed

- **EFYT Token Supply & Distribution**: 1.97M EFYT max supply (10% of first-year ERG emission). ~3M EFYT burned to match emission curve. Half distributed before mainnet, remainder burned after year one. Private investors received tranches of 100K, 200K, 100K coins; team/contributors receive ~150K annually.

- **Emission Curve & Economic Model**: 100M ERG emitted over 8 years with declining rate after year two. High early inflation offset by transaction fees and storage rent incentives for miners post-halving. Economic model paper in development; simulations underway to model demand scenarios.

- **Post-Emission Security Model**: Miners transition from block rewards to two income sources: (1) **storage rent** (per paper: http://fc18.ifca.ai/bitcoin/papers/bitcoin18-final18.pdf), and (2) optional fees for script execution cost estimation. Governance voting system proposed to expose tens of parameters (block size, computational cost limits) to miner adjustment per epoch.

- **Light Client Architecture**: Two full-node modes: Bitcoin-like (store UTXO set) for miners; lightweight mode (verify proofs of UTXO transformations) for users per https://eprint.iacr.org/2016/994. Enables "Run a fullnode to be your own bank" on consumer devices.

- **PoW Algorithm Direction**: Currently Equihash (like ZCash), but parameters under review. Before Testnet2, switching to PoW based on proof-of-data-possession research (https://arxiv.org/pdf/1603.07926.pdf) with priority on fighting pooling/outsourceability. ASIC resistance remains goal but acknowledged as ongoing arms race with no formal security guarantees yet.

- **Scalability & Layer 2**: No Ethereum-style sharding planned. Second/third/fourth layer protocols and sidechains to be supported via flexible ErgoScript, not mandated. Bitcoin-NG rejected due to added protocol complexity vs. limited long-term benefit.

- **Governance Structure**: Three-layer approach: (1) miner voting on protocol parameters per 256-block epoch; (2) soft-fork compatibility to avoid hard forks; (3) Foundation-organized polls among dev, miner, stakeholder, business, and user representatives.

- **Team Size & Hiring**: Currently 7 full-time + 1 part-time in R&D, plus external collaborators. Additional hiring planned in coming weeks.

---

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3332, 2018-06-12]: Confirmed 100M ERG + 100M ERG data (200M total, not shared pool).

- [@Dmitry, msg#3354-3360, 2018-06-14]: kushti confirmed 1:1 swap ratio EFYT → ERG is fixed, not negotiable.

- [@Dmitry, msg#3358, 2018-06-14]: Yellow Paper (specification) targeted for September completion; White Paper to follow. Current draft available at https://github.com/ergoplatform/ergo/blob/master/papers/yellow/main.pdf (noted as "raw").

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3408, 2018-06-15]: 3,029,000 EFYT burned to align supply with emission curve (tx: BLruST2C4jAhkzTMZZwe8YASovVGPtqR5pqfrVzbiGHt).

- [@Unknown, msg#3397, 2018-06-14]: Q&A sessions to be held regularly; next session after Testnet1.5, post-July 1st.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#3330-3331): Are the 100M coins split as 50M ERG + 50M data, or 100M each?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3332): 100 million each.

- **Q** (@Unknown, msg#3340): (1) What incentives exist for users, miners, and full-node operators? (2) What is the governance structure?
  **A** (@Dmitry, msg#3356, 3367): Miners earn storage rent and optional script execution fees. Light-node operators gain sovereignty without mining. Three-layer governance: miner parameter voting per epoch, soft-fork compatibility, Foundation-organized multi-stakeholder polls.

- **Q** (@Unknown, msg#3334): Why is the economic model not published before the Q&A?
  **A** (@Unknown, msg#3335): Founders unlikely to describe papers in few sentences beforehand.
  [Note: kushti confirmed economic model paper in development per msg#3375.]

- **Q** (@Unknown, msg#3342): Is Ergo a hybrid of Waves, Ardor, and Bitcoin?
  **A** (@Unknown, msg#3342): Self-characterization: hybrid of Waves, Ardor, Bitcoin with highly adaptable ErgoScript, underpinned by memory-light validation protocol for ultra-light full nodes.

- **Q** (@Unknown, msg#3366): Given deflation as a PoW ideal, why adopt hyper-inflationary emission?
  **A** (@Dmitry, msg#3375): Hyper-inflation only occurs with constant demand. Economic simulations underway to model demand scenarios.

- **Q** (@Unknown, msg#3340): Why prioritize interoperability and scalability over other aspects?
  **A** (@Dmitry, msg#3370): Long-term survivability is the core focus. Includes state size management and user base growth, not just TPS. Goal: correct-by-design blockchain avoiding regular hardforks and centralized development.

- **Q** (@Unknown, msg#3340): What are the incentives for running a full node?
  **A** (@Dmitry, msg#3372): Bitcoin-like mode (store UTXO set) required for miners. Lightweight mode (verify UTXO transformation proofs) allows users to "be your own bank" without mining. Only miners' activities are directly incentivized.

- **Q** (@Unknown, msg#3366): Why has Bitcoin-NG gained little traction? Do you believe in second-layer protocols?
  **A** (@Dmitry, msg#3374): Bitcoin-NG adds protocol complexity without solving sufficient long-term problems. Second-layer solutions are not silver bullets. ErgoScript flexibility allows community to experiment with second/third/fourth layer protocols and sidechains.

- **Q** (@Unknown, msg#3371): Are you aware of the Equihash vulnerability (ZenCash private blocks injection)? Will Ergo be ASIC-resistant?
  **A** (@Dmitry, msg#3369, 3371): Currently using Equihash with parameter review. Before Testnet2, will adopt PoW based on proof-of-data-possession research (https://arxiv.org/pdf/1603.07926.pdf) with pooling resistance. ASIC resistance is a goal, but a typical ongoing battle with no formal security guarantees yet.

- **Q** (@Unknown, msg#3403): How many developers does Ergo need for successful development?
  **A** (@Dmitry, msg#3367): Currently 7 full-time + 1 part-time in R&D, plus external collaborators. Additional hiring planned in coming weeks.

- **Q** (@Unknown, msg#3340): What happens to network security once all ERG is mined?
  **A** (@Dmitry, msg#3356): Miners transition to storage rent and optional script execution fees, similar to Ethereum's model. These are the intended replacement for block rewards.

---

## Links Shared

- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46]: EFYT distribution tracker on Waves.
- [http://fc18.ifca.ai/bitcoin/papers/bitcoin18-final18.pdf]: Storage rent paper.
- [https://github.com/ergoplatform/ergo/blob/master/papers/yellow/main.pdf]: Yellow Paper (draft, noted as raw).
- [https://eprint.iacr.org/2016/994]: Lightweight full-node validation protocol.
- [https://arxiv.org/pdf/1603.07926.pdf]: Proof-of-data-possession PoW research.
- [https://github.com/ergoplatform/ergo/issues/218]: Pooling resistance discussion.
- [https://ergoplatform.org/news_emission_curve.html]: Emission curve visualization.
- [https://youtu.be/z1PSbDmV8Gw]: Video linked by mentalist (2018-06-13, context unclear from transcript).
- [http://wavesexplorer.com/tx/BLruST2C4jAhkzTMZZwe8YASovVGPtqR5pqfrVzbiGHt]: EFYT burn transaction (3M tokens).

---

## Unresolved Questions

- **Economic Model Details**: Specific demand-supply simulations and long-term viability of storage rent + execution fees remain under development. Full paper pending (target September 2018).
- **PoW Final Parameters**: Equihash parameters subject to review; final PoW function not locked before Testnet2.
- **ASIC Resistance**: Ongoing research; no consensus on practical, formally-secure ASIC-resistant algorithm yet.
- **One-Pager/Marketing Materials**: Acknowledged as long-standing gap; no timeline provided.
- **Testnet Issues**: Connectivity problems reported for testnet since Saturday (2018-06-12); investigation status unclear after Q&A.

---

## Notes

- Dmitry served as translator for kushti during the Q&A session.
- Community sentiment: cautious optimism on technology, skepticism on inflation model pending economic paper. One participant noted "Understated approach is reassuring in nascent stages" (msg#3379).
- "Technology first" approach confirmed as development philosophy (msg#3383).