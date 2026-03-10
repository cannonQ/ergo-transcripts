---
title: "Ergo General Chat — 2025-W28"
date_start: "2025-07-07"
date_end: "2025-07-13"
type: telegram_weekly
channel: general
week: "2025-W28"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2025-W28 Summary

## Key Topics Discussed

- **Ergo 6.0 Soft Fork Activation**: The 6.0 soft fork reached 92.97% miner support and entered the activation phase. Voting period is 32 epochs (~45 days), followed by 32 epochs for node updates. Expected activation around October 2025 during the Ergo Meetup in Colorado. Sub-blocks and improved protocol fundamentals are contingent on this upgrade.

- **Sub-blocks Development Timeline**: devnet is currently running with sub-blocks support. Testnet injection of sub-blocks-supporting mining nodes planned for July 2025, followed by August polish and formal security research, with mainnet deployment considered thereafter.

- **Block Reward Emission Reduction**: Block reward dropped from 15 ERG to 12 ERG on 2025-07-07, reducing daily new supply to 8,640 ERG (down from 10,800). Rewards will fall by 3 ERG every 3 months until reaching 3 ERG in April 2026.

- **Rosen Bridge Treasury Proposals**: Five pivotal proposals submitted by Armeanio covering RSN liquidity, RSN utility (Hodl Game+), Cardano SPO rewards, ecosystem expansion & tooling, and developer incentives. Community governance feedback solicited.

- **DuckPools v2 Launch**: Due to slow funding and development delays, core team set October 30, 2025 as beta launch date for v2 with all planned features. Phases 2.3 and 2.4 funding will be used for backpay and operational costs post-launch. Governance contracts and DAO upgrades deferred to Phase 2.5.

- **Watcher v5.0.0 & UI v3.4.0 Update**: Critical update released. Watcher operators must update or risk missing event rewards. Doge/rsDoge integration now live; rsDOGE went live on 2025-07-13.

- **Merged-Mined Sidechains**: Miners can mine both Ergo and sidechain tokens simultaneously with marginal GPU cost (only sidechain block validation overhead). kusht confirmed emission contracts reward mainchain miners for delivering sidechain data, enabling trustless pegging.

- **Privacy & DeFi Trends**: Discussion of Dark DeFi sidechain potential, full chain membership proofs (FCMPs) from Monero research, and curve trees as trustless alternative to SNARKs in Ergo contracts.

- **MewFinance Ecosystem Expansion**: Multiple tools launched/in-progress: `fund.mewfinance.com`, `tools.mewfinance.com`, `pump.mewfinance.com` (soon), `bank.mewfinance.com` (SigmaUSD trade offers), `payment.mewfinance.com`. Proof-of-Merch store live with SigmaUSD payments and automatic backend swaps planned.

- **Banxa On-Ramp Integration**: kushti exploring Banxa fiat integration for `proofofmerch.store` and potential MewFinance Payment integration to enable off-ramp without touching CEXes.

- **Git Circles Framework**: Proposed mechanism for issuing community-specific tokens tied to open-source project contributions, validated via GPG key server. Airdrops to developers for retroactive contributions considered for token bootstrapping.

- **Mining Profitability & Hashrate Analysis**: Current profitability marginal; 3070 GPUs near break-even at 11¢ electricity. GPU depreciation outpaces daily earnings for most. Hashrate declining due to Ethereum Merge GPU exodus and algorithm difficulty adjustments, but natura equilibrium forming. Older 30-series cards still functional on Autolykos v2.

- **Mobile Wallet Security Stance**: kushti reaffirmed security concerns with mobile financial transactions; recommends PC + Ledger (offline signing via second device) or hardware wallets. Acknowledged user demand for mobile access conflicts with security best practices.

- **User Experience & Marketing Gaps**: Developers focused on feature completeness over UI/UX design and user onboarding. SigmaFi UI complexity and Gluon design "afterthought" noted. MewFinance praised for clarity. Recommendation: 15-20% of funding should go to marketing/design to attract new users.

- **MEXC ERG Withdrawal Suspension**: Caused by 15k UTXO dust accumulation from unmaintained cold wallet. kushti offered assistance to MEXC developers; community advised to ping support repeatedly for UTXO consolidation.

## Important Decisions or Announcements

- [@kushti khushi, msg#566397, 2025-07-07]: Proof-of-Merch store launched with SigmaUSD payments (20% off promotion active) at `proofofmerch.store`

- [@Ergo NEWS $ERG, msg#566437, 2025-07-07]: Block reward reduction milestone announced — dropped to 12 ERG; daily supply now 8,640 ERG

- [@kushti khushi, msg#566514, 2025-07-08]: Watcher operators required to update to v5.0.0 and UI v3.4.0 immediately before Doge/rsDoge UI opens, or miss event rewards

- [@Glasgow｜WON'T DM, msg#566524, 2025-07-08]: DuckPools v2 launch date set for October 30, 2025 (beta) with all features included; Phases 2.3–2.4 funding deferred to post-launch operations

- [@Ergo NEWS $ERG, msg#566739, 2025-07-09]: Five pivotal Rosen Bridge treasury proposals released for community governance feedback

- [@DiscordBridge, msg#566763, 2025-07-09]: rsDOGE integration confirmed live on Rosen Watcher

- [@Dan Friedman / Armeanio discussion, msg#566566ff, 2025-07-07–08]: Palmyra + Chainlink partnership leveraging proof of reserve and on-chain warehouse receipts for decentralized trade financing; Ergo oracles v1 & v2 running; planning native Ergo oracle network expansion

- [@kushti khushi, msg#566426, 2025-07-07]: Devnet running; testnet sub-blocks injection planned July 2025; August polish/security formalization; mainnet deployment TBD

- [@HQΣr | Wont Dm 🐾 ⚡, msg#566403–405, 2025-07-07]: MewFinance tooling suite live: `fund.mewfinance.com`, `tools.mewfinance.com`, `pump.mewfinance.com` (upcoming)

## Technical Q&A Worth Preserving

- **Q** (@Ergochampion, msg#566452): Does merged-mining sidechains cause additional GPU wear, or do they reuse Ergo's PoW security at no extra cost?
  **A** (@kushti khushi, msg#566455): Marginal cost to miners—only sidechain block validation overhead. No additional computational burden beyond verification.

- **Q** (@Richi [MANA], msg#566409–420): If 6.0 voting finishes early, must we wait the full 32-epoch voting window before moving to the update period?
  **A** (@kushti khushi, msg#566417–419): Only difficulty recalculation uses the same epoch measure. Voting epoch unchanged. Good timing to reach agreement on node updates important for security.

- **Q** (@dfdgrfr, msg#566776): Can in-browser nodes be implemented in Ergo?
  **A** (@AwesomeQA/Pluno, msg#566778): Yes, Ergo's UTXO set authentication via Merkle tree structure enables lightweight full nodes in-browser.

- **Q** (@Ioannis, msg#567043): How is declining hashrate good?
  **A** (@cannon_q, msg#567045–050): One PoW (Flux) transitioning to PoS. Ergo's hashrate reflects card availability shifts post-Ethereum Merge and algorithm parameter adjustments—not weakness. $/MH profitability averaging, not at lows. Autolykos v2 function description: https://www.docdroid.net/mcoitvK/ergopow-pdf

- **Q** (@Ioannis, msg#567055): Current mining profitability?
  **A** (@cannon_q, msg#567056–062): 3070 GPUs break-even at 11¢ electricity with bonus tokens; hardware depreciation faster than daily earnings for most. ROI 5–10 years for new dedicated mining setups.

- **Q** (@Ioannis, msg#567049): Why does Ergo have less hashrate than before Ethereum Merge if PoW is valuable?
  **A** (@kushti khushi, msg#567051–053): Hardware mix changed (no 4GB cards). Algorithm parameters readjust every 3 months. Hard to compare hashrate years apart due to shifting PoW function and hardware assumptions.

- **Q** (@Flying Pig ™, msg#566563–590): Why is mobile DeFi adoption critical if security concerns exist?
  **A** (@kushti khushi, msg#566574–594): Mobile is insecure for financial transactions. Recommended: offline signing via second device or hardware wallet with Bluetooth. Acknowledged users demand mobile access regardless; PC remains best practice for holdings.

## Links Shared

- [https://ergoplatform.org/en/blog/Ergos-Block-Reward-Drops-to-12-ERG/]: Block reward emission schedule details
- [https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005]: Ergo 6.0 soft fork specification and voting process
- [https://proofofmerch.store]: Proof-of-Merch merchandise store (SigmaUSD payments)
- [https://fund.mewfinance.com]: MewFinance fundraising platform
- [https://tools.mewfinance.com]: MewFinance tooling suite
- [https://bank.mewfinance.com]: MewFinance Bank with SigmaUSD trade offers
- [https://payment.mewfinance.com]: MewFinance Payment processor
- [https://store.mewfinance.com]: MewFinance merchandise store (oils, apparel)
- [https://t.me/rosenbridge_erg]: Official Rosen Bridge Telegram support
- [https://www.ergoforum.org/t/git-circles-framework-to-create-currencies-for-online-communities-around-open-source-projects/5160]: Git Circles framework proposal
- [https://curiaregiscrypto.medium.com/rosen-treasury-proposal-1-77c3849ed71e]: Rosen Treasury Proposal 1 (RSN Liquidity)
- [https://curiaregiscrypto.medium.com/rosen-treasury-proposal-2-f702bea21b6d]: Rosen Treasury Proposal 2 (RSN Utility)
- [https://curiaregiscrypto.medium.com/rosen-treasury-proposal-3-rewarding-our-spo-partners-and-growing-ergo-and-rosen-bridge-visibility-aa6900fcb7f0]: Rosen Treasury Proposal 3 (Cardano SPO Rewards)
- [https://curiaregiscrypto.medium.com/rosen-treasury-proposal-4-investing-for-expansion-and-tooling-0ba9f7498ccd]: Rosen Treasury Proposal 4 (Ecosystem Expansion & Tooling)
- [https://curiaregiscrypto.medium.com/exploring-merged-mining-af087b566e6d]: Merged-mining security exploration by Armeanio
- [https://www.docdroid.net/mcoitvK/ergopow-pdf]: Autolykos PoW function specification
- [https://whattomine.com/coins/340-erg-autolykos/stats_history]: Historical profitability data (1-year+ timeframes)
- [https://miningpoolstats.stream]: Mining pool statistics with hashrate history
- [https://calc.ergominers.com/]: Ergo Mining Calculator tool
- [https://demurrage.fun]: PHP (demurrage token) tracker and info
- [https://letsexchange.io]: LetsExchange DEX (Ergo now live with 5,000+ trading pairs)

## Unresolved Questions

- **Sub-blocks Usability Timeline**: When will sub-blocks be "generally adopted by community"? Answer given as "next year" but specificity lacking on rollout phases post-testnet.

- **Curve Trees & FCMPs in Ergo**: Implementation status of curve trees for full chain membership proofs? kusht mentioned "still need to figure out how FCMPs are derived from them" but no timeline provided.

- **Native Ergo Oracles Expansion**: How quickly can Ergo Foundation fund and deploy native Ergo oracle network (v1 & v2 currently running)? Dan flagged intent to "build that out" but no concrete timeline or budget announced.

- **SigmaFi Loan Offers Feature**: Will SigmaFi introduce loan *offers* (lender-initiated) vs. current loan *requests* (borrower-initiated)? Debate ongoing; no decision documented.

- **Mobile Wallet Security Trade-off**: Will Ergo ecosystem find middle ground between mobile accessibility and security best practices (e.g., Ergo Pay offline signing via companion device)? Design effort needed but not resourced.

- **Marketing & Design Funding Allocation**: Will future dApp fundraising enforce 15–20% allocation for marketing/UX, or continue grassroots development model? Policy question left open.

- **MEXC UTXO Consolidation Status**: Did MEXC development team receive kusht's assistance request to consolidate 15k UTXOs? Resolution unknown as of 2025-07-13.

- **Merged-Mining Sidechain Security Formalization**: Which sidechain constructions will be formally published on Ergo Forum as canonical designs? kusht mentioned "research driven approach" but specifics deferred to post-Ergoversary discussion.

---

**Meta-Notes:**
- Week was moderately active (465 messages); 6.0 soft fork and DuckPools v2 timeline were dominant narratives
- Price speculation was actively redirected to trading groups (kushti, HQΣr moderation)
- Community sentiment generally positive on 6.0 upgrade and Rosen bridge governance proposals
- Tension noted between mobile UX demand and security best practices; unresolved design philosophy