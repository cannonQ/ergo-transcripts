---
title: "Ergo General Chat — 2024-W05"
date_start: "2024-01-29"
date_end: "2024-02-04"
type: telegram_weekly
channel: general
week: "2024-W05"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat Summary — 2024-W05
**Period:** 2024-01-29 to 2024-02-04  
**Messages Processed:** 646 across 57 participants

---

## Key Topics Discussed

### Mining & Difficulty Adjustment Algorithm (DAA)
- **ASIC resistance vs. profitability** (@Glasgow, msg#470892-470894): Ergo aims to prevent ASICs from dominating the network without making them completely unprofitable; community can push for a hard fork if necessary. Discussion on whether fixed block times (3 min) would improve UX compared to variable ~2 min average with 10+ min spikes.
- **DAA optimization and variance reduction** (@kushti, msg#471442-471443): Backtesting static adversaries differs from adaptive real-world behavior; no breakthrough solutions yet. Discussion on comparing current DAA with alternative options, epoch length (currently 128 blocks per EIP-37), and potential sub-blocks implementation.

### Stablecoin & DeFi Products
- **SigmaUSD and Djed Alliance** (@Bruno Woltzenlogel Paleo, msg#471694, msg#471744): SigmaUSD is the first algorithmic stablecoin on a UTXO blockchain; Catalyst voting underway for Ergo-related proposals. Catalyst funding comes from Cardano treasury, not VC.
- **Duckpools lending mechanics** (@Misfit Toy, msg#471678-msg#471908): New vote to limit loan duration to 3 months (from 18+ months) to improve lender incentives. Discussion on rsERG collateral on Liqwid Finance with 0.04% APY lending vs. 3.56% borrowing spread.
- **SigmaFi & leverage strategies** (@Rj, msg#471897-471902): Users can mint SigmaUSD, lend on Duckpools, bridge to Cardano, borrow ADA, and stake on Liqwid—circular yield strategies possible.

### Bridge & Cross-Chain
- **Rosen Bridge EVM expansion** (@qx, msg#472284): Catalyst proposal targets 6 months post-funding; weekly updates provided. rsERG now usable as collateral on Liqwid Finance (Cardano).
- **Liquidity on Cardano** (@Richi, msg#472160-472165): rsERG/ADA LP on Spectrum yielded 4% APR in January despite 3:1→2.3:1 IL ratio; no farming rewards yet.

### Oracle Pools & Dexy Gold
- **Oracle Pool v1 & v2 structure** (@qx, msg#472306-472321): Gold Oracle Tokens (GOT) sold at 2k ERG bid; winners receive Ballot tokens and share GORT rewards (1 minimum per hour, up to 32 oracle participants' worth). Dexy Gold launch imminent; buyback contract will purchase GORT from DEX using swap fees.
- **Chainlink partnership for Palmyra** (@Dan Friedman via Armeanio, msg#471095): Proof of reserve via Chainlink functions for on-chain warehouse receipts; IoT devices (camera, weight/motion sensors) provide continuous asset verification for decentralized trade financing.

### Lithos Protocol (Mining)
- **Development start** (@Cheese, msg#471533): Lithos development "essentially just started this week" (as of 2024-01-31).
- **Collateral & mining yield** (@Misfit Toy, msg#471678-471681): "Lenders provide collateral to miners in return for fees"—unclear if this is a yield opportunity for ERG holders; no Lithos testnet/mainnet yet.

### Network Performance & Scalability
- **Block time variability UX** (@Rj, msg#471428-471432): 2 min average with 10+ min spikes causes new users stress; discussion on fixed vs. variable block times and sub-blocks feasibility.
- **SigmaSpace explorer launch** (@Pgr456, msg#471938-471976): Custom indexer/API written in Go; clean UI; dark mode coming soon. Built by individual developer over 1–2 years; technical details preserved in GitHub.

### Wallet & Mobile Integration
- **Mosaik framework in Ergo Mobile** (@qx, msg#471589-471611): Mosaik provides better UX than browser-inside-wallet; discussion on built-in dApp swaps (Spectrum, DuckPools, SigmaFi). iOS Terminus app re-submission to App Store underway.
- **Unconfirmed balance visibility** (@HQΣr, msg#471421-471429): Nautilus allows trading with unconfirmed balances; Ergo Wallet does not—99.99% success rate but dApp choice, not chain limitation.

### Marketing & Ecosystem Growth
- **Content & SEO gaps** (@0xPiracyData, msg#471628-471675): Broken links (e.g., Rosen bridge link on ecosystem page), outdated information, missing Beta phase column. Zealy quests outdated due to lack of maintenance; quest platforms (Galxe, Zealy, QuestN) underutilized.
- **Foundation restructuring & community oversight** (@kushti, msg#471098): No single marketing team; EF, Sigmanauts, and proposed DAO of core/ecosystem devs now govern. Weekly dev updates insufficient; marketing team updates requested.
- **Sigmanauts weekly strategy** (@qx via Glasgow, msg#471586): Focus on Paideia token distribution, treasury expansion, mobile app integrations (Terminus, dApp frameworks), market maker outreach, and DAO restructuring.

### GitHub & Content Contributions
- **PR for Ergo improvements** (@kushti, msg#472345): New contributor submitted quality PR (#2109); community encouraged to expand liquidity on NonKYC.io ERG/BTC and ERG/XMR pairs pre-Xeggex listing.

---

## Important Decisions or Announcements

- [@Glasgow, msg#471305, 2024-01-30]: Paideia in beta; DexyGold and SigmaGold nearing testnet launch; community discussing Kraken listing for rsERG.
- [@kushti, msg#471266, 2024-01-30]: **Satergo v1.7.0 released** — light node support, chained transactions, stealth address sending, improved design.
- [@glasgowm, msg#471585-471586, 2024-01-31]: **Ergo Foundation marketing updates**: website refresh (mobile accessibility), wallet integration via sigma-rust-mini, small exchange onramps (Moonpay, Mercado Bitcoin, Coinbase reapplication), ErgoSummit held (3.9K+ views), 6 blog drafts scheduled.
- [@qx via Glasgow, msg#471586, 2024-01-31]: **Sigmanauts weekly decisions**: Treasury expansion via bpaideia tokens for onboarding, EF restructuring with potential community seat, Terminus App Store resubmission, Mosaik dApp integration planning.
- [@kushti, msg#471719, 2024-01-31]: **Catalyst voting open** for Ergo-related proposals (Djed Alliance); community urged to vote via Catalyst mobile app.
- [@Yulius, msg#471691, 2024-01-31]: **Ergo now listed on CoinMarketLeague**.
- [@qx, msg#472299, 2024-02-04]: **Dexy Gold auction live** — 35 Gold Oracle Tokens (GOT) being auctioned; winners receive governance ballot tokens and GORT reward eligibility.

---

## Technical Q&A Worth Preserving

### Block Time & Difficulty Adjustment

- **Q** (@Shiv Chauhan, msg#470887): Is a 50/50 ASIC/GPU algorithm like Flux viable?  
  **A** (@HQΣr, msg#470891): Multiple algos on same chain chaos—how do you allocate transactions per algo?

- **Q** (@Rj, msg#471401): Why not fixed 3-min blocks instead of 2-min average with 10+ min spikes?  
  **A** (@kushti, msg#471418): Block time distribution is statistically symmetric on both sides; practically almost identical.

- **Q** (@Shiv Chauhan, msg#472054): Who secures Ergo—miners or node operators? Thought Bitcoin is node-secured.  
  **A** (@Glasgow, msg#472055-472066): Both PoW chains secured by miners; nodes only enforce consensus rules. Miners vote parameter changes; if not unanimous, fork occurs. Economic activity (who people use) ultimately matters.

### Oracle Pools & Gold Tokens

- **Q** (@Misfit Toy, msg#472315): What are GORT, ballot tokens, and GOT? How many were sold?  
  **A** (@qx, msg#472316-472321): **GORT** = contract-released rewards; **ballot tokens** = governance for oracle runners; **GOT** = the auctioned token you bid on (2k ERG). Ballot delivered with purchase; 1 GORT required in wallet (can be donated).

- **Q** (@Misfit Toy, msg#472307): Is Dexy Gold price fixed at 2k ERG?  
  **A** (@qx, msg#472309): Bid started at 2k; once Dexy Gold live, swap fees feed buyback contract buying GORT from DEX, creating upward pressure.

### DAA & Scalability

- **Q** (@R, msg#471790): How does Ravencoin achieve 1-minute blocks with minimal BTC-fork changes? Under attack or less DeFi complexity?  
  **A** (Unresolved but prompted discussion on DAA tradeoffs)

- **Q** (@kushti, msg#471743): Is any other DAA with 128-block epoch better, or should we study shorter epochs?  
  **A** (@CW, msg#471745): Reading EIP-37 again (feels long ago); further study needed.

### Liquidity & LP Strategy

- **Q** (@Richi, msg#472160): What was your LP yield in January on rsERG/ADA?  
  **A** (@Richi, msg#472160): 4% APR including massive IL (3:1→2.3:1 ratio); stayed profitable without farming rewards.

- **Q** (@TheStophe, msg#472173): How do I track impermanent loss on ERD/rsADA LP?  
  **A** (@Richi, msg#472174-472176): Find initial deposit TX, check Spectrum for current unstaked amount; calculate APR from numbers.

### Stablecoin Mechanics

- **Q** (@Shaina, msg#471909): Will lenders be liquidated after 3 months if Duckpools vote passes?  
  **A** (@Green_Diamond II, msg#471910): No; 3-month max duration only applies to *new* loans post-vote. Current loans unaffected.

### Wallet & Tax Reporting

- **Q** (@Silent Observer, msg#472089-472119): Is Spectrum Finance (SPF) to Ergo like PancakeSwap to Binance? Will Ergo pump SPF?  
  **A** (@Silent Observer replies): SPF is the native token for Spectrum L1, Spectrum DEX, and Splash (validator network); if ERG pumps, LPs with ERG/SPF pairs gain value.

- **Q** (@Unknown, msg#472124-472132): How do I export Ergo transactions for Koinly tax reporting?  
  **A** (@qx, msg#472130): Use `export-erg-transactions` Python script (GitHub: crystoll/export-erg-transactions); Koinly works for simple trades but struggles with staking/yield farming across multiple wallets.

---

## Links Shared

- [Satergo v1.7.0](https://satergo.com) — Light node, chained transactions, stealth address support (@kushti, msg#471266)
- [Ergo Platform Manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/) — Community values & philosophy (@CW, msg#471121)
- [ErgoCube dApp directory](https://ergcube.com) — Ecosystem overview (@Rj, msg#471123)
- [Sigma Rust Mini](https://github.com/aslesarenko/sigma-rust-mini) — Wallet integration library (@Glasgow, msg#471585)
- [Dexy Gold / Oracle Pools Testnet](https://x.com/ergo_platform/status/1752354963391418872?s=20) — Announced via Twitter Spaces (@qx, msg#471344)
- [SigmaSpace Explorer](https://sigmaspace.io/) — Custom indexer/API, Go-based (@Aco, msg#471968)
- [Catalyst Voting Proposals](https://twitter.com/DjedAlliance/status/1750676737782907329) — Ergo-related grants (@Bruno Woltzenlogel Paleo, msg#471695)
- [Ergo Forum - Contractual Money](https://www.ergoforum.org/c/community/high-level-discussions/12) — Use case discussion (@kushti, msg#471780)
- [Difficulty Adjustment Algo Docs](https://docs.ergoplatform.com/mining/difficulty/) — DAA technical spec (@Glasgow, msg#471791)
- [Liqwid Finance rsERG Market](https://x.com/liqwidfinance/status/1752405175543693555?s=46) — Cardano integration (@Unknown, msg#471369)
- [NonKYC.io](https://nonkyc.io) — Decentralized exchange; liquidity encouraged pre-Xeggex (@kushti, msg#471346)
- [Djed Alliance / Gluon Gold](https://x.com/ergo_platform/status/1754141087088754857?s=20) — Bruno Woltzenlogel Paleo recognition (@qx, msg#472217)
- [Ergo GitHub PR #2109](https://github.com/ergoplatform/ergo/pull/2109) — New contributor optimization (@kushti, msg#472345)

---

## Unresolved Questions

- **Sub-blocks ETA**: Repeatedly asked; @kushti indicates ongoing discussion but no timeline provided (msg#471883, msg#471401).
- **Lithos Protocol timeline**: Development just started; no testnet/mainnet ETA or detailed documentation shared (msg#471533, msg#471680).
- **Palmyra/ZenGate commercial details**: Partnership with Chainlink, warehouse receipt mechanics, and launch timeline remain vague (msg#471095, msg#471871).
- **DAA improvement strategy**: Which epoch length (64 vs. 128 blocks) safer? Should shorter epochs be studied? No consensus reached (msg#471743, msg#471745, msg#471789).
- **Watchers cap for Rosen**: Mentioned as capped at 77; when will more be added? Answer: "probably when they launch the bridge to EVM chain" (msg#472121-472122).
- **Xeggex listing confirmation**: @kushti mentioned "before Xeggex listing" but no official announcement or date provided (msg#472346, msg#472349).
- **EVM Rosen timeline**: 6 months post-Catalyst funding claimed, but Catalyst vote just began in late January (msg#472284, msg#472288).
- **Marketing budget allocation**: Community pressure on why marketing receives ~500 ERG/month salary (Armeanio); Kushti no longer EF member, cannot comment (msg#471052, msg#471075).
- **Zealy & quest platform adoption**: Community noted Zealy outdated; whether Sigmanauts will revive it unclear (msg#471657-471660).
- **SigmaSpace dark mode**: Committed by developer but no ETA given (msg#472036).

---

## Notes

- **Policy changes**: @kushti is no longer EF member (as of late January); governance transitioning to decentralized DAO structure with Sigmanauts and core devs.
- **Poll drama**: Kadena community accused of botting CoinGecko polls; Ergo community rallied votes. Treated as "entertainment while building" rather than serious conflict (msg#470937).
- **High