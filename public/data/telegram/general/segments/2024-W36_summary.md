# Ergo General Chat — 2024-W36 Summary

## Key Topics Discussed

- **ChainCash Redemption & API**: Redemption support merged into ChainCash Server with API documentation published. First testnet redemption transaction confirmed, indicating progress toward a working debt-note and collateralized asset system.

- **6.0 Devnet Testing**: Ergo 6.0 DevNet node stability confirmed by testers. Next release (7-10 days out) will support higher-order lambdas, unsigned big int type, and new numeric/collection methods. RocksDB as alternative to LevelDB being evaluated for database backend switching.

- **Gluon Gold SDK Fundraising**: Raffle successfully funded at 99.22% with 44 contributors raising 6896 ERG. Gluons distributed as Contribution Accounting Tokens (CATs) to benefactors proportional to contributions. Clarified that EF gluons stem from SigmaUSD development funding (benefaction, not grant), and The Stable Order has received separate marketing grant from EF without gluon exchange.

- **Sigmanauts Mining DAO Pool Launch**: Mainnet launch with Cheese Enthusiast coding, qx() pool operations, and Marc the Shark on UI/server infrastructure. Pool governance via Paideia DAO voting for miners; fees go to DAO treasury with on-chain vote required for distribution. Storage rent collection dashboard (sigmaspace.io) being finalized with 58 boxes awaiting collection.

- **Block Candidate Responsivity & Lithos**: Noted that Lithos Protocol will move block candidate generation responsibility from pool to miners, requiring safeguards against censorship or manipulation (e.g., storage rent prioritization).

- **Sub-blocks Research**: kushti indicated initial 5.x-based DevNet for throughput testing could release in few weeks; calls for help with load testing and stratum proxy modification. Sub-blocks design (vs. microblocks, sidechains, layer 2) remains under discussion for speed improvements without abandoning security model.

- **Rosen Bridge & Runes**: Runes on Rosen design published (serializing Bitcoin UTXOs across multiple outputs). Rosen DAO pool running for Dexy Gold with GORT rewards; v2 planning underway. Trustless relay feasibility confirmed for Bitcoin→Ergo direction; discussed tradeoffs between wrapped assets (AMM liquidity) vs. atomic swaps (P2P simplicity).

- **BlocX Autolykos 2 Implementation**: BlocX adopted Autolykos PoW algorithm with direct code/header/DAA port from Ergo. kushti flagged license change (public domain→MIT, allowed but noted), obsolete code copies, and suggested outreach for donations to improve documentation, sidechaining research, and DAA refinements.

- **Community Literacy & Monetary Theory**: kushti emphasized need for education on mainstream vs. alternative monetary theories, Gresham's law implications for non-inflationary currencies, and barriers to adoption ("never touch the money system" mentality). Discussed language/meme design for ordinary people onboarding.

- **Node Database Corruption**: Patato encountered LevelDB corruption when copying databases across operating systems (PC↔mining rig). kushti indicated binary format differences make cross-OS copies problematic; RocksDB PR #2115 offered as alternative.

- **Trade House / Order Book DEX**: qx() promoted Trade House (order book model) vs. AMM pools—advantages include total transparency of depth/liquidity, full slippage control, partial order fills, and peer-to-peer matching without impermanent loss. Contrasted with Spectrum's AMM and noted Crystal Pools support for both models.

- **Fee Market & Spam Protection**: Discussion of mempool behavior during spam events (DDoS-like low-fee transaction flooding). Reference client v4.0.44+ includes spam limits; node operators can configure minimum propagation fee rates. Fee estimation API exists but underutilized; BIP 301 merge-mining analogies explored.

---

## Important Decisions or Announcements

- [@kushti, msg#512005, 2024-09-03]: Gluon Gold SDK funding update: 24.06% funded (1672 ERG of 6950 goal, 24 contributors).

- [@kushti, msg#512408-512410, 2024-09-05]: Initial 5.x-based DevNet for sub-blocks TPS testing "could be released in few weeks"; calls for load testing help and stratum proxy modification.

- [@qx(), msg#512694, 2024-09-06]: Sigmanauts Mining DAO pool moving to mainnet this weekend; Cheese Enthusiast and qx() deploying code, pointing Sigs hash at pool.

- [@qx(), msg#512700-512706, 2024-09-06]: Sigmanauts Mining DAO governance via Paideia: miners receive voting tokens; fees go to treasury with on-chain votes for distribution; possible monthly storage rent collection votes.

- [@Σddie Lin & @qx(), msg#513258-513272, 2024-09-08]: Gluon Gold SDK raffle fully funded (100% at 6896 ERG, 45 contributors). Community funded the final 54 ERG to complete second half of SDK development.

- [@qx(), msg#513409-513410, 2024-09-08]: MiningCore storage rent live on mainnet; Sigmanauts Mining DAO hash pointing to it. Challenge: winning a block to collect rent.

- [@kushti, msg#513414, 2024-09-08]: ChainCash Server redemption support merged; API docs PR #57 created with endpoint documentation.

---

## Technical Q&A Worth Preserving

- **Q** (@Jack Σ, msg#511874): Can blocks be less than full; can miners add transactions to unfinished block candidates as time passes?
  **A** (@Cheese, msg#511877): Yes, miners can always generate new block candidates for same height with new/additional transactions. Each hash with new nonce is separate solution attempt; no "lost progress" from generating new candidate.

- **Q** (@Jack Σ, msg#511884): Block candidate responsibility in Lithos—won't individual miners have incentive to censor or manipulate candidates (e.g., increase storage rent room)?
  **A** (implicit from @Cheese, msg#511884): Requirements exist for block candidate contents; discussed but not fully detailed. Requires protocol-level safeguards.

- **Q** (@Jack Σ, msg#511886): Composability on Ergo—why, how, where, different levels, examples, improvements vs. other blockchains?
  **A** (No direct response; flagged as potential explanation video topic by @Cheese).

- **Q** (@Patato, msg#511908-512067): Node stuck syncing at same height for 6+ hours; copied database from PC to mining rig, got "Corruption: CURRENT file does not end with newline" error.
  **A** (@kushti, msg#511964 & msg#512070-512076): LevelDB binary formats differ across operating systems. Suggest trying RocksDB-based node instead (PR #2115), or generate database from scratch on target device.

- **Q** (@Patato, msg#512050, 512058): Docker container fails with "ergo.conf file missing" and `--mainnet` flag error on v5.1.0 branch.
  **A** (@kushti, msg#512076): v5.1.0 Docker image is not published; user built from source. Config issue likely stems from unpublished devnet state. Use released image instead.

- **Q** (@qx(), msg#512716): Can miners include zero-fee transactions in blocks?
  **A** (@Pulsarz, msg#512720-512724): Yes, miners can include any transactions respecting consensus rules, including zero-fee TXs. MEV mechanisms (bribing miners for priority) work similarly on PoW chains; if you mine own blocks, you control TXs.

- **Q** (@Patato, msg#512973): Why does hashrate fluctuate on miner screen vs. pool dashboard?
  **A** (@Patato self-answer, msg#512975): Miner screen: GPUs pause hash generation to prebuild DAG for next block candidate. Pool dashboard: pool measures hashrate from submitted shares over time window; mining is statistically distributed, so short-term average ≠ nominal rate. Long-term converges to nominal.

---

## Links Shared

- [https://single-tx-swap.com]: Single Tx Swap—trustless P2P multisig escrow service for peer-to-peer swaps.

- [https://www.youtube.com/watch?v=Nwjuhv-yK6Q]: Single Tx Swap Cypherpunk Ergo Hackathon video.

- [https://curiaregiscrypto.medium.com/runes-on-rosen-serialized-bridging-data-across-multiple-utxos-60337bed1fe6]: Runes on Rosen—serialized bridging data across multiple Bitcoin UTXOs.

- [https://github.com/BLOCXTECH/BLOCX]: BlocX GitHub repo with Autolykos 2 implementation (code/header/DAA ported from Ergo).

- [https://docs.ergoplatform.com/ErgoPow.pdf]: Ergo PoW specification document referenced by BlocX implementation.

- [https://github.com/ergoplatform/ergo/pull/2115]: PR for RocksDB-based Ergo node as alternative to LevelDB.

- [https://github.com/DeCo-Education/ErgoScript-Developer-Course]: DeCo Education ErgoScript Developer Course—Class 1 materials and AppKit flow examples.

- [https://github.com/ChainCashLabs/chaincash-rs/pull/57]: ChainCash Server redemption support PR with API documentation.

- [https://www.youtube.com/watch?v=mx3n6j3OsdE]: Trustless relay presentation video referenced in Oracle/bridge discussion.

- [https://projectcatalyst.io/funds/12/f12-cardano-use-cases-product/bitcoin-runes-on-cardano-via-rosen-bridge]: Catalyst Fund 12 proposal for Bitcoin Runes on Cardano via Rosen Bridge with milestones.

- [https://ergonaut.space/id/home]: Ergo Wiki Bahasa Indonesia—fully translated and maintained by Yulius Kristianto (chris45new).

- [https://www.kompasiana.com/chris45/66d9e659ed6415651d64ede2/ergo-vs-platform-blockchain-lainnya-bedanya-apa]: Indonesian-language Ergo platform overview article on Kompasiana.

- [https://docs.stability.nexus/about-us/the-stable-order/code-of-honor]: The Stable Order Code of Honor (no free-riding principle for Gluon distribution).

- [https://docs.stability.nexus/about-us/the-stable-order/grantors-sponsors-and-donors]: The Stable Order benefaction/grant/sponsorship/donation/investment classification framework.

- [https://github.com/develsoftware/GMinerRelease/releases]: GMiner releases (GPU miner supporting Nvidia/AMD, some AMD GPUs excluded).

- [https://t.me/+TPc9MRparGFjZjYx]: Sigmanauts Mining DAO Telegram group.

- [https://sigmaspace.io]: sigmaspace.io storage rent dashboard (Sigs Mining DAO).

- [https://x.com/ergo_platform/status/1831504306102792198]: Ergo Platform Twitter Spaces announcement (qx(), msg#512380).

- [https://x.com/ergo_platform/status/1832612113166037052]: Ergo Platform Twitter update (qx(), msg#513088).

- [https://x.com/Sigmanauts/status/1832947008476225918]: Sigmanauts Twitter update on storage rent collection (qx(), msg#513420).

---

## Unresolved Questions

- **Sub-blocks Design Decision**: Whether to implement sub-blocks, microblocks, sidechains, or layer 2 solutions for speed improvements remains open. kushti flagged that choices depend on concrete application profile and should avoid premature optimization without dApps to drive demand.

- **EF Budget & Sustainability**: How to make ecosystem sustainable without EF subsidies during bootstrapping phase? kushti flagged concern that EF has limited runway (4 months at current burn rate). Debate on whether EF should invest in projects for returns vs. pure infrastructure support unresolved; qx() countered with EF's track record funding Sigs DAO (successful community-run org).

- **Gluon Distribution to EF**: Clarified by Bruno (msg#513421) that EF gluons stem from SigmaUSD benefaction (not arbitrary), but current EF members may not know this rationale. Tension remains between decentralized funding model and EF's role in early-stage projects.

- **Block Time & Height-Based Contracts**: kushti noted contracts tied to block height (not timestamp) would require adjustment if block time decreases. Impact on emission schedules, storage rent timing, and consensus rules not fully scoped.

- **Ergo Oracles Native Build**: kushti indicated intent to build out native Ergo oracles (currently 1-2 pools running) using capital from token sale, but timeline and prioritization unclear vs. other infrastructure needs.

- **Marketing & Growth**: HQΣr repeatedly flagged need for shillers, market makers, and visibility campaigns. Noted that GPU mining ecosystem and "sticky" applications (games, NFTs, meme coins) drive adoption, but Ergo lacks these relative to competitors.

---

## Notable Community Developments

- **Yulius Kristianto (chris45new)** completed Indonesian-language Ergo wiki translation and published Ergo platform overview on Kompasiana (local blogging platform). Community recognized as MVP for grassroots localization.

- **Patato** (new miner) demonstrated persistence in troubleshooting node setup issues; received tips and encouragement. Represents conversion of miners into engaged Sigmanauts.

- **Sigs DAO Mining Pool** launched with governance structure: miners vote on treasury distribution, fee allocation, and pool direction via Paideia DAO. qx() detailed extensive EF support for bootstrapping (funding, representation, tooling).

- **ErgoTipperBot** tipping infrastructure stable with various token support (ERG, SigmaUSD, SigRSV, meme tokens). Aberg experienced tip failures with 1000+ UTXOs; issue resolved. Bot sees active use for community recognition.

- **Storage Rent Collection on MiningCore**: First mainnet implementation; 58 boxes awaiting collection. Sigs Mining DAO will attempt to win blocks and collect rent (proof-of-concept for Ergo's demurrage mechanism).