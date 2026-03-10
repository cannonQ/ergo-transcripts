---
title: "Ergo General Chat — 2024-W23"
date_start: "2024-06-03"
date_end: "2024-06-09"
type: telegram_weekly
channel: general
week: "2024-W23"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2024-W23 Summary

## Key Topics Discussed

- **Nautilus Wallet Abyss Release**: Canary distribution for testing new features before mainnet rollout. Major codebase changes requiring dApp developer testing against regressions. (@kushti, msg#495787)

- **Demurrage Automation & Fee Markets**: Discussion of pre-signed consolidation transactions and secondary markets for "future fee" tokens to automate demurrage avoidance without requiring active wallet management. Proposal explored wallet provider + mining pool cooperation model with on-chain proof of performance. (@dayumbbbb, msgs#495600–496316)

- **Atomic Swap Software (Analog Ergo)**: Bitcoin Lightning Network to Ergo testnet atomic swaps completed as PoC during ErgoHack VIII. Client and server state reloading nearly finished; public testnet launch planned after UI/price feed integration. (@kushti, msg#495856)

- **Sigma 6.0 Protocol Upgrade**: Targeting finalization July 5–15, testnet activation and review in August, mainnet voting proposal late August–early September, activation November–December. Enables Lithos Protocol, trustless Bitcoin relays, efficient rollups. (@kushti, msg#496342)

- **Dexy Launch Status**: Long overdue; blocked by finding parties willing to hold update keys and final reviews. Expected within weeks. (@kushti, msg#496342)

- **SigmaChains Development**: No external ETA; waiting for partnerships/investments/team formation. Kushti estimates months with dedicated dev team under guidance, but solely dependent on external factors. (@kushti, msgs#496282, msg#496344)

- **Mining Hardware Memory Requirements**: 4GB GPU cards no longer viable; 6GB cards struggling; 8GB+ cards required for near-term future. 6GB cards expected to remain viable ~2 years. Next emission reduction scheduled July. (@kushti, msgs#495982–495994)

- **DuckPools IDO Phase 2**: Launching June 10, 9PM UTC. QUACKS token at 10% market discount, 6-month weekly vesting. Purchase with ERG, SigmaUSD, SigmaRSV, or ADA. Target 2.2 ERG to complete DuckPools v2. (@kushti, msg#495980)

- **Gluon Gold SDK Raffle**: 4630 ERG goal; tracking toward 55%+ funding with 11 days remaining. Community support ongoing. (@kushti, msgs#495682, msg#495818, msg#496964)

- **Rosen Bridge Bitcoin Integration**: Double-layered multisig superior to custodial (WBTC) or atomic swap (Portal) solutions. No known trustless ERG↔BTC transfer method; potential MPC aggregation possible but practical advantage marginal. (@kushti, msgs#495977–495979)

- **Bitcoin Relay & Sidechain Design Publications**: Kushti publishing designs with applications this month under public domain. Commercial potential flagged; seeking contributors. (@kushti, msg#496342)

- **ChainCash Server**: Seeking Rust developer contributors; bounty-based compensation. Funding acquisition uncertain post-RAMICS. Test transactions planned. (@kushti, msg#496342)

- **ErgoHack VIII: Ergo as Smart Layer**: 9 submissions exploring Bitcoin functionality augmentation. Winners announced soon from 18k SigUSD pool (1st: 9k, 2nd: 5k, 3rd: 4k) plus 100k RSN, 1000 CKB, 8462 ERG. Judges include Mark Glasgow, morphic, Error404, rustinmyeye. (@Ergo NEWS, msg#495999)

- **RAMICS 2024 Conference**: Research paper "Money Creation with Elastic Supply via Trust and Blockchain Assets" accepted for full submission and oral presentation, Rome, November 6–8. Audience includes monetary theorists and central bankers. (@kushti, msgs#496141–496142, msg#496232)

- **DeFi Protocol Ecosystem**: Six DEX initiatives at various stages: Machina Finance, AASwap, Crystal Pool, Spectrum (cross-chain), community DEX concept, undisclosed project. Spectrum, CrooksSwap, Comet DEX currently operational. (@Man ish, msgs#495953–495957)

- **Node Synchronization & Network Monitoring**: Public node API discovery by dApps common; queryable via `/utxo/byid/` endpoints. Swagger and panel monitoring tools available at `localhost:9053/panel`. (@kushti, msgs#495327–495330; @Unknown, msg#496050)

- **Community Feedback: Developer Guides**: Multisig identified as "lowest hanging fruit" for new ErgoDevs tutorials. Request for community input on needed guides/tutorials. (@kushti, msg#496006)

---

## Important Decisions or Announcements

- [@kushti, msg#496342, 2024-06-09]: **Sigma 6.0 roadmap confirmed**: Finalization July 5–15, testnet activation + review August, mainnet voting proposal late August–early September, activation November–December. Will enable Lithos, Bitcoin relays, rollups.

- [@kushti, msg#495980, 2024-06-07]: **DuckPools IDO Phase 2 live June 10, 9PM UTC** with 10% market discount for QUACKS token, 6-month weekly vesting, open to all.

- [@kushti, msg#496141, 2024-06-08]: **RAMICS 2024 paper accepted** for oral presentation (November 6–8, Rome) on elastic supply money creation via blockchain.

- [@Ergo NEWS, msg#495999, 2024-06-07]: **ErgoHack VIII concluded** with 9 submissions; judges announced (Glasgow, morphic, Error404, rustinmyeye); 18k SigUSD prize pool + additional token rewards.

- [@qx(), msg#495393–495398, 2024-06-03]: **Community onboarding to YouTubers**: Adrián Sáenz offered promotional support; directed to ergoplatform.org, Sigmaverse dApp directory, and proposal submission process at qx@sigmanauts.com for compensation consideration.

- [@HQΣr, msg#495474, 2024-06-03]: **Ergo Raffle Alerts bot fixed** — bug fixes for missing image tracking; updated to latest code.

- [@kushti, msg#495511–495512, 2024-06-03]: **100 ERG tip to Aco Šmrkas** from Sigmanauts treasury as gift for community work.

- [@kushti, msg#496220, 2024-06-08]: **Dev update published** with emphasis on CrooksSwap ecosystem and CrooksWidget promotions.

---

## Technical Q&A Worth Preserving

- **Q** (@HelixEvo, msg#495327): Node receiving high volume of `/utxo/byid/` requests from volume6.de domain — malicious activity?
  **A** (@kushti, msg#495330): Likely a dApp that discovered your node's public API; common occurrence, not a problem.

- **Q** (@MavΣrickBg, msg#495331–495344): How to verify Satergo node is working?
  **A** (@Unknown, msgs#495339–495344): Check Swagger UI and admin panel at localhost; verify sync progress (100% = synced); can trigger with CrooksSwap Presale bot on desktop or mobile wallet.

- **Q** (@Patato, msg#495431): Android Termux Ergo node crashes after warnings; low-end device (2GB RAM, Helio A22). Pruned mode + 350MB heap specified.
  **A** (@Unknown): Insufficient details provided in chat; likely RAM/storage constraints on low-end hardware.

- **Q** (@Saphuza, msgs#496027–496030): What is an oracle box? Where is ID located?
  **A** (@qx(), msg#496031): Oracle box is UTXO holding collateral/tokens; ID is box ID. Can inspect via ErgoExplorer token interface.

- **Q** (@Danny Dogs, msgs#495763–495778): Hardware recommendations for mining Ergo; considering building rig from scratch. Free electricity available on industrial property.
  **A** (@cannon_q, msgs#495769–495778): 3070 (3060Ti) $200–300 per GPU from eBay; ~0.25 ERG/day per 3070. 8–10 GPUs + rig feasible for $3K budget = 2–2.5 ERG/day. Recommend checking hashrate.no for efficiency across GPU models. Consider renting hashrate vs. hardware purchase depending on electricity costs.

- **Q** (@HelixEvo, msg#495737): What hardware wallet recommended? Currently using old Ledger S.
  **A** (@qx(), msg#495742): Ledger works in dev mode (click button, restart, shows up in software). Documented on Ledger site; super easy.

- **Q** (@Pgr456, msgs#495605–495615): Pre-signed consolidation TXs for demurrage automation — feasibility and incentive structure?
  **A** (@dayumbbbb, msgs#495606–496316): Wallet recreates pre-signed TXs after each spend; kept in cache/provider. Pool sells "future option" token at premium; pool profits from fee collection today vs. waiting 4 years; user hedges against future fee inflation. Risk: wallet provider downtime, pool hashrate insufficient, pool exits business. Countervailing incentive: all non-honoring on-chain, future tokens worthless.

- **Q** (@BTCMini, msg#495969): How to explain Rosen Bridge superiority over WBTC / Portal?
  **A** (@Glasgow, msg#495971): WBTC is custodial; Portal is atomic swap (not bridge).
  **A** (@kushti, msgs#495977–495979): Double-layered multisig superior. No known trustless ERG↔BTC method; MPC aggregation theoretically possible but practical advantage marginal.

- **Q** (@JayDee12Thr33, msg#496280): Timeline for SigmaChains?
  **A** (@kushti, msg#496282): Armeanio seeking grants/investments/partners. Kushti publishing Bitcoin relay and sidechain designs this month. First sigmachain feasible in months with dedicated team; no ETA as dependent on external partnerships.

- **Q** (@Boy, msgs#496288–496299): Ergo Mobile wallet best practice — single vs. multiple addresses? Cold/hot wallet setup on old Android?
  **A** (@HQΣr, msgs#496289–496293): Depends on organization preference. Recommended: one wallet with cold wallet feature + separate daily-use hot wallet. Video guide provided.

- **Q** (@Son Nguyen, msg#496107): Is ergdex.com legitimate?
  **A** (@Aco Šmrkas, msg#496128): Low-effort clone; avoid.

- **Q** (@Jack Σ, msg#496113): Simple mining app desire — auto-select sidechain based on GPU performance, choose payout token, start on boot, pause when PC in use, no technical skills required. Feasibility when sidechains launch?
  **A** (@Unknown): No response in chat; feature discussed as aspirational post-sidechain deployment.

- **Q** (@Unknown, msg#496310): ETA transparency needed — months or years for SigmaChains?
  **A** (@kushti, msg#496344): Cannot provide ETA; solely depends on external factors (partnerships/investment).

---

## Links Shared

- [https://ergoplatform.org/en/](https://ergoplatform.org/en/): Official Ergo platform homepage.
- [https://sigmaverse.io/all-projects/?category=dApps](https://sigmaverse.io/all-projects/?category=dApps): Comprehensive dApp directory.
- [https://docs.ergoplatform.com/dev/protocol/why/](https://docs.ergoplatform.com/dev/protocol/why/): Protocol design documentation.
- [https://sigmanauts.com/mining/](https://sigmanauts.com/mining/): Sigmanauts mining pool guide.
- [https://dao.duckpools.io/ido](https://dao.duckpools.io/ido): DuckPools IDO Phase 2 portal.
- [https://ergoraffle.com/raffle/show/cf3cd40805f8f945a4d9b71cd0e296d1b4883781597c334d5752feff4d2d6304](https://ergoraffle.com/raffle/show/cf3cd40805f8f945a4d9b71cd0e296d1b4883781597c334d5752feff4d2d6304): Gluon Gold SDK raffle.
- [https://ramics-2024.sciencesconf.org/](https://ramics-2024.sciencesconf.org/): RAMICS 2024 conference (November 6–8, Rome).
- [https://app.ergodex.io/](https://app.ergodex.io/): ErgoDex active instance; no splash banner.
- [https://crooksmart.vercel.app](https://crooksmart.vercel.app): CrooksSwap dApp.
- [https://docs.ergoplatform.com/dev/start/](https://docs.ergoplatform.com/dev/start/): Developer quick-start guide.
- [https://chromewebstore.google.com/detail/nautilus-abyss/moaohjebjfiodfiegjnjkbnalepemcpf](https://chromewebstore.google.com/detail/nautilus-abyss/moaohjebjfiodfiegjnjkbnalepemcpf): Nautilus Wallet Abyss (canary) extension.
- [https://github.com/Luivatra/ergotipper-tokens](https://github.com/Luivatra/ergotipper-tokens): ErgoTipperBot supported token list.
- [https://youtube.com/live/UOdHCQekapQ](https://youtube.com/live/UOdHCQekapQ): Weekly Ergo AMA livestream (June 6, 1 PM UTC).
- [https://sigmanauts.com/podcast/](https://sigmanauts.com/podcast/): Ergo Podcast with developer updates.
- [https://t.me/ErgoSocials](https://t.me/ErgoSocials): Community marketing group (Kushti endorsement).
- [https://t.me/ergobullmoonhodling](https://t.me/ergobullmoonhodling): Separate trading/price discussion group.
- [https://t.me/CyberVersegame](https://t.me/CyberVersegame): Cyberverse game community.
- [https://t.me/ErgoRaffleAlerts](https://t.me/ErgoRaffleAlerts): Ergo Raffle Alerts bot channel.

---

## Unresolved Questions

- **SigmaChains ETA**: No timeline provided; entirely dependent on external partnerships and investment. (@kushti, msgs#496282–496344)

- **Throughput & Sub-blocks**: Discussion initiated on layer 2 vs. layer 1 optimizations (sub-blocks, sidechains, faster confirmations). Implementation dependent on community initiative to spin up testnet and run experiments; no committed roadmap. (@kushti, msgs#496342 mentions "will dedicate time" post-6.0 stable phase)

- **ChainCash Server Funding**: Seeking Rust contributors with bounty compensation; unclear if grants will materialize post-RAMICS. Test transaction timeline TBD. (@kushti, msg#496342)

- **Additional DEX Projects**: Six DEX initiatives mentioned; four (Machina Finance, AASwap, Crystal Pool, undisclosed) status unclear. No launch dates confirmed. (@Man ish, msg#495953)

- **Demurrage Automation Incentives**: Pool honoring "future fee" tokens depends on on-chain proof mechanisms; real-world adoption viability unresolved. (@dayumbbbb, msgs#495600–496316)

- **Spam Attack Prevention Mechanisms**: Discussion of fee estimation API not widely adopted by wallets/dApps; improvements