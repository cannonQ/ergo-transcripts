---
title: "Ergo General Chat — 2021-W50"
date_start: "2021-12-13"
date_end: "2021-12-19"
type: telegram_weekly
channel: general
week: "2021-W50"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2021-W50 Summary

## Key Topics Discussed

- **Wallet Support & Infrastructure**: Multiple wallet developments discussed including iOS beta launch via TestFlight, Yoroi Nightly for ErgoDex, and work on Ledger integration. Nautilus wallet mentioned as potential "Ergo MetaMask" with built-in mixing features.

- **ErgoDex Naming & Branding**: Extended discussion (msgs #238029-#238096) about whether ErgoDex naming confuses Ergo with Cardano. kushti expressed preference against dApps using "Ergo" prefix; community debate on SEO benefits vs. brand clarity.

- **SigmaUSD/SigmaRSV Protocol Incentives**: Richi raised concerns (msg #238868) about SigmaRSV holder economics being unprofitable at current fee structure (2% minting). Proposed fee restructuring to lower minting fees (encourage TVL growth) while raising redemption fees. Protocol lacks active custodian maintenance post-launch.

- **Scaling Solutions & L1 Optimization**: kushti confirmed (msgs #238250-#238277) computational cost limit increased from 1M to ~7M since mainnet launch; block size increased from 512kb to >1mb. Discussed potential for 30-50x TPS improvements via non-sharding solutions (lighter clients, Bitcoin NG-like subblock confirmations, stateless clients). Sharding as soft fork possible but security research still ongoing.

- **Rosen Bridge to Solana**: Bridge to Solana mainnet imminent (~2 weeks per msg #238703). Will support SOL token and other native Solana tokens once wrapped on Ergo. ErgoMixer positioned as key value proposition (first non-custodial token mixer supporting any token).

- **Oracle Pools Framework**: Clarified that Ergo Oracle Pools are framework any developer can run; not limited to eUTXO chains but native operation requires eUTXO architecture. Waves Enterprise partnership announced with focus on on-chain warehouse receipts and trade financing via proof of reserve.

- **Layer 2 Solutions in Development**: Plasma rollups being researched rather than sharding for L2. kushti indicated rollups and other scaling approaches more promising than sharding due to composability concerns.

- **ErgoMixer UX & Privacy Infrastructure**: Community consensus that ErgoMixer needs improved UI/UX for mainstream adoption. Nautilus wallet integration with built-in mixing to improve approachability. Discussion of ErgoMixer as cross-chain privacy infrastructure once bridges live.

- **Emission Softfork Timing**: Softfork development finished per kushti; vote timing TBD (msgs #237932, #238807).

- **Twitter Tip Bot**: Luivatra launched @ergotipperbot on Twitter (msg #238160). Resolved timeout issues; remaining issue is Twitter's random DM permissions. Bot works across Telegram, Discord, Reddit, and Twitter with shared seed phrases via password restoration.

## Important Decisions or Announcements

- [@MrStahlfelge, msg#238833, 2021-12-15]: iOS wallet beta released via TestFlight; full App Store release pending Ergo Foundation account setup.

- [@glasgowm, msg#238703, 2021-12-17]: Solana bridge launching within ~2 weeks; Cardano follows later.

- [@kushti khushi, msg#238869, 2021-12-19]: Susy team working on Ergo integration; progress update expected next week in @susybridge_community.

- [@Armeanio, msg#238911, 2021-12-19]: Dev update video released explaining recent progress and future work (referenced by @Jennie D, msg#238909).

- [@Chris Ray, msg#239018, 2021-12-19]: ErgoLearn launched flagship ErgoScript laymans class with 5 approved students; Jan 6 cohort starting.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#238513): If miners can vote on block size, what incentivizes them not to keep blocks small to maintain congestion and high fees?
  **A** (@Unknown): No direct answer recorded; topic flagged as technical economics question.

- **Q** (@Unknown, msg#238718): What is the actual computational cost of a transaction? Is there a deterministic formula?
  **A** (@kushti, msg#238284): Cost limit has no concrete formula—depends on hardware miners have, network size, etc. Unlike Bitcoin's strict limit, Ergo uses flexible approach as hardware/bandwidth improve over time.

- **Q** (@Hasnain, msg#238244): What does "computational cost limit per block" mean in simple terms?
  **A** (@glasgowm, msg#238245): Similar to gas limit per block in Ethereum—allows more transactions to be loaded into each block.

- **Q** (@Unknown, msg#238260): Is 30-50x improvement specifically TPS (transactions per second)?
  **A** (@kushti, msg#238263): Not specifically TPS; depends on application profile. Other solutions include L2, Bitcoin NG-like subblock confirmation protocols, and fully stateless clients.

- **Q** (@Ilya, msg#237718): How do Ergo NFTs work for identity/verification compared to Cardano's policy IDs? Can I check if a wallet holds an NFT from my project?
  **A** (@Unknown, msg#237719-#237721): Ergo uses token IDs (unique per token). All instances of same token share same token ID, similar to Cardano's policyId for collections.

- **Q** (@Adano, msg#237647): Can oracles other than Ergo use Ergo Oracle Pools?
  **A** (@glasgowm, msg#237663): Any chain can utilize price feeds. Native pool operation only on eUTXO chains due to data input requirements (msg#237665).

- **Q** (@Unknown, msg#238587): How is ErgoMixer unique compared to Ethereum mixers?
  **A** (@glasgowm, msg#238590): ErgoMixer was first non-custodial/non-interactive mixer. Ethereum has zk-SNARK-based mixers with downsides: trusted ceremonies, bug-prone, incentives for bad actors.

- **Q** (@T C, msg#238855): Should I buy SigmaRSV if bullish on Ergo long-term? Is buying on ErgoDex same as minting?
  **A** (@Mint LkV, msg#238859): No—SigmaRSV collects fees from SigmaUSD minting/withdrawal. At low volume (~1M), dumps can severely drain RSV. Token price pumps don't offset fee losses.

- **Q** (@T C, msg#238860): ErgoDex not confirming transactions with Yoroi Nightly—no confirmation button visible.
  **A** (@Tu Nguyen, msg#238865): Maximize dApp connector window; confirmation button will appear.

## Links Shared

- [https://ergoplatform.org/en/wallets/]: Official wallet list including Yoroi, Nautilus, Ergo Mobile.
- [https://ergoplatform.org/en/exchanges/]: Exchange listing page.
- [https://explorer.ergoplatform.com/en/]: Ergo Explorer.
- [https://explorer.ergoplatform.com/en/issued-tokens]: Token search/issued tokens page (added by Dmitry Usov, msg#237447).
- [https://github.com/mhssamadani/ErgoProfitSharingDapp]: Proof-of-concept profit-sharing dApp for PoW staking simulation.
- [https://ergoplatform.org/en/blog/2021-04-27-chainlink-oracles-vs-ergo-oracle-pools/]: Blog post comparing Ergo Oracle Pools to Chainlink.
- [http://docs.ergoplatform.org/uses/oracles/]: Oracle documentation.
- [https://www.ergoforum.org/t/proof-of-work-backed-tokens/224]: Proof-of-work NFT discussion.
- [http://docs.ergoplatform.org/uses/]: General use cases documentation.
- [https://ergonaut.space/en/ErgoMixer]: ErgoMixer reference page.
- [https://sigmaverse.io]: Ergo dApps aggregator.
- [https://ergo.watch/metrics/utxos]: UTXO metrics dashboard.
- [https://ergo.watch/emission]: Emission schedule tracker.
- [https://eprint.iacr.org/2021/1276]: Sharding research paper referenced by kushti.
- [https://ergofaucet.org]: Ergo testnet faucet.
- [https://www.ergoforum.org/t/lessons-for-sigmausd-from-the-djed-paper/2345]: Djed paper vs SigmaUSD comparison (msg#238895).
- [https://www.ergoforum.org/t/ergo-tokenomics-tvl/3061]: Richi's blog post on Ergo tokenomics and SigmaUSD TVL issues (msg#238896).
- [https://dav009.medium.com/learning-ergo-101-blockchain-paradigm-eutxo-c90b0274cf5e]: Medium article on eUTXO and boxes (msg#238822).
- [https://twitter.com/ErgoPadOfficial/status/1472707262422552576]: ErgoPad AMA recording (msg#239021).
- [https://t.me/SatergoWallet]: Satergo wallet Telegram.

## Unresolved Questions

- **Block size voting mechanics**: What prevents miners from keeping blocks small? Who specifically votes on computational cost limits and how often? (msgs #238513-514)

- **SigmaRSV fee restructuring**: No consensus on optimal fee ratios. Richi proposed 2% minting (lowered from current) + higher redemption; community awaits formal proposal. No timeline given. (msgs #238898-901)

- **Emission softfork vote timing**: When will vote occur? kushti indicated development finished but vote timing remains TBD. (msgs #237932, #238807)

- **Ledger integration timeline**: Multiple users asking about Ledger support. @Foeniculum indicated "today's weekly devs update" would discuss (msg#238840), but no concrete timeline released. (msgs #237837, #238729)

- **Sharding feasibility**: kushti indicated "Aspen-like sharding" possible via soft fork but security research "not finalized." Open whether this will actually be pursued. (msgs #238252, #238261)

- **ErgoMixer UX improvements**: Community consensus it needs better UI for mainstream use, but no concrete team assignment or timeline. Nautilus integration mentioned as partial solution but status unclear. (msgs #238606-631)

- **SigmaUSD protocol governance**: Richi raised concern that 7 key holders "were given keys for sake of decentralization" but lack motivation to maintain protocol. Who exactly holds keys and will they implement fee changes? (msgs #238871-906)

- **Solana bridge token support**: Confirmed USDT first; unclear how many other native Solana tokens will be wrapped or when. (msgs #238588, #238591)

- **Cross-chain oracle availability**: Unclear when Ergo oracles will be available for non-Ergo chains via bridges, or whether each chain needs custom oracle setup. (msgs #238696-703)

---

## Context Notes

- **Market conditions**: Week dominated by bearish price action (ERG fell from ~$9 → $5). Community discussion of Cardano correlation, Binance listing unlikely near-term, and adoption as priority over price speculation.

- **Community sentiment**: Strong technical confidence in protocol; frustration with marketing/branding (ErgoDex naming debate), wallet fragmentation (multiple wallets in development), and slow dApp maturation. Engagement high in technical discussions but volume concerns around SigmaUSD/RSV usage.

- **Ecosystem maturity**: ErgoDex live but analytics tools pending. ErgoPad launching IDO platform. Nautilus and Satergo wallets in active development. Bridge infrastructure (Rosen) progressing. Mining community stable.