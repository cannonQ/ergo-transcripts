---
title: "Ergo General Chat — 2024-W32"
date_start: "2024-08-05"
date_end: "2024-08-11"
type: telegram_weekly
channel: general
week: "2024-W32"
source: telegram
message_count: 747
categories: [defi, ecosystem, technical, bridges, mining, community, wallet]
key_terms: [Gluon Gold, GAU, GAUC, fission, fusion, transmute, reserve ratio, stablecoin, SigUSD, liquidations, duckpools, borrower safety, UI fees, user experience, minimal design, protocol fees, sustainability, essential tools, airdrop, token minting]
---
# Ergo General Chat Summary — 2024-W32

## Key Topics Discussed

- **Gluon Gold Soft Launch & Protocol Details**: Gluon Gold went live with fission/fusion/transmutation mechanics. Reserve ratio started at 268%, with dynamic transmutation fees (0.5%–50.5%). GAU (stablecoin) and GAUC (reserve token) paired to maintain system balance. Unlike SigmaUSD, Gluon has no hard minimum reserve ratio floor; instead, fees escalate to disincentivize risky transmutations.

- **UI/UX Concerns for Gluon & Ecosystem dApps**: Extended discussion on dApp design philosophy. Consensus emerged that Ergo dApps suffer from poor user experience—overly technical terminology (fission, transmute, etc.), non-intuitive flows, and 1990s-era aesthetics. Multiple contributors (Alex, HQ3r, Flying Pig) advocated for simpler, trader-friendly interfaces with clear onboarding and optional "technical mode" toggles.

- **Protocol Fees & Sustainability**: Bruno Woltzenlogel Paleo articulated Gluon's fee philosophy: decreasing protocol fees (0.5%→0%), perpetual oracle fees (0.1%), optional UI fees (0%–0.4%). Debate on whether mandatory UI fees discourage forking vs. whether free/low fees attract adoption. anon_real developing SDK to lower UI development friction.

- **SigmaUSD Liquidation Cascade (2024-08-05)**: After 15% ERG price drop, cascading liquidations in SigUSD pool. No malicious attack detected; rather, natural market downturn + off-chain bot congestion. Lenders profited 1.5% overall despite some liquidations at loss. duckpools prioritizing borrower safety dashboard, risk alerts, arbitrage bots, and educational guides for v2.

- **ChainCash Development**: kushti demonstrated first mainnet ChainCash reserve and note issuance using API. Project enables trust-based or collateralized note issuance in resource-constrained communities (e.g., LETS-style local currencies, commodity producer credit lines, BRICS clearing).

- **Sigma 6.0 Progress**: 95% conceptually complete. Targets: simpler cross-chain integration (e.g., trustless Bitcoin relay), rollups, improved blockchain structure access (e.g., for Lithos). Multiple PRs merged into 6.0 candidate; continued testing/versioning underway.

- **Rosen Bridge EVM Support**: EVM integration deployed on private testnet; test transactions expected imminent. Milestone toward Rosen becoming cross-chain interoperability hub for all cryptocurrencies.

- **ErgoExplorer VPS Fundraising**: Annual 2024 VPS fund goal 530 ERG; raised 339 ERG (63.96% funded) by 2024-08-10, 21 contributors.

- **Celaut Network Paradigm**: Jossemii reported progress on peer-to-peer Kubernetes-like service deployment framework. Node TUI, reverse proxy support (Ngrok), and EVM payment system implemented; Ergo integration for payment/reputation systems ongoing.

---

## Important Decisions or Announcements

- [@kushti, msg#506415, 2024-08-05]: Gluon Gold pool live; price 123.5 vs. oracle 119.5.

- [@HQΣr, msg#506419, 2024-08-05]: GAU/GAUC now tradeable on CruxFinance DEX.

- [@HQΣr, msg#507062–507078, 2024-08-06]: Essential Tools (token minting/airdrop/burn/consolidation utility) launched, promotional period with zero fees; first NETA token burn (74.97 NETA).

- [@kushti, msg#507198, 2024-08-06]: First gold-denominated bounty attached to GitHub issue #2174.

- [@kushti, msg#507436, 2024-08-07]: Node 5.0.22 released; 5.0.23 finalized; multiple PRs for 5.0.24 under review. Sigma 6.0 candidate PRs merged (#995, #1002); further testing on #1008, #972, #968, #965, #962.

- [@kushti, msg#507845, 2024-08-09]: Sigma Rust 0.28 released; breaking changes in release notes.

- [@qx(), msg#507849, 2024-08-09]: Bitcoin bridged to Ergo via Rosen Bridge live; rsnBTC deployed for DeFi.

- [@Aberg, msg#507960, 2024-08-10]: Satergo now supports multiple outputs from single transaction (UI improvement).

- [@CW, msg#508051, 2024-08-11]: Rosen Bridge EVM support deployed on private testnet; test transactions expected.

- [@kushti, msg#508029–508032, 2024-08-11]: First mainnet ChainCash reserve, note, and spending transaction created via API.

- [@kushti, msg#508046, 2024-08-11]: duckpools IDO reopens in 30 hours; core devs agree to complete phase 2.2 goals retroactively if funding falls short.

---

## Technical Q&A Worth Preserving

**Gluon Protocol Mechanics**

- **Q** (@Unknown): If I fission 50 ERG into GAU/GAUC, then price of gold rises, then I fuse back—do I get more ERG?
  **A** (@Bruno Woltzenlogel Paleo, msg#507575): No, you get back exactly same amount of ERG minus fees, assuming no other transmutations occurred. Gold price only affects transmutations, not fission/fusion. If you hold only one token (GAU or GAUC), price movement affects your balance.

- **Q** (@Unknown): Why can't I mint directly ERG→GAU or ERG→GAUC?
  **A** (@TMR, msg#507586): To maintain healthy reserve ratio. Simultaneous mint of both ensures balanced exposure, preventing one-sided reserve drain.

- **Q** (@Unknown): How do I calculate current reserve ratio?
  **A** (@kushti, msg#507220): Go to fission tab, pretend to fission 102 ERG (price of 1g gold from oracle). Divide 1 by GAU received. Example: 1 / 0.39 GAU = 256% reserve ratio.

**UI/UX for Gluon Fusion**

- **Q** (@Unknown, msg#507873): Why can't I input GAU/GAUC amounts in fusion tab, only ERG?
  **A** (@Bruno, msg#507908): By design. GAU/GAUC must be spent in precise proportion (determined by reserve ratio). Inputting ERG desired allows contract to calculate exact spend ratio. [@kii, msg#507929]: Root cause is complexity of fusion equation; MVP released to ship sooner; improved UX planned post-launch.

- **Q** (@Unknown, msg#507911): This is poor UX. Shouldn't I be able to input my balance and auto-fill?
  **A** (@Unknown, msg#507912): Opened GitHub issue. [@Bruno, msg#507917]: May require SDK changes; anon_real (SDK developer) not on Telegram—submit issue on GitHub.

**Sigma 6.0 Benefits**

- **Q** (@Man ish, msg#508004): What advantages does Sigma 6.0 offer non-devs?
  **A** (@kushti, msg#508044): Fixes and new operations targeting: simpler cross-chaining (e.g., trustless Bitcoin relay from ErgoHack VIII), rollups, better blockchain structure access (used in Lithos).

**ChainCash Use Cases**

- **Q** (@kushti, msg#508045): What are ChainCash's main use cases?
  **A** (@kushti): (1) Poor remote communities with labor/resources but no money—trade via collateralized notes, trust-based LETS internally. (2) Commodity producers issue notes backed by production instead of complex lending. (3) Multi-currency businesses (e.g., BRICS) need clearing, not unified currency.

**Node Configuration**

- **Q** (@Odiseus Me, msg#508006): Why does my reachable node have <30 peers after spinning up a second unreachable node with same public address?
  **A** (@Pulsarz, msg#508015–508016): Default `maxConnections` is 30 (outgoing). Public nodes can exceed this via incoming. Address may be tagged unreachable due to unreachable node; monitor after second node syncs.

**Mining Pool & Lithos**

- **Q** (@Marc the Shark, msg#508052): Can a mining pool running Lithos prioritize its own transactions in next block without solving PoW first?
  **A** (@qx(), msg#508053): Any mining pool chooses which TXs to include; requires solving PoW puzzle first. Pool finds blocks (e.g., 2/day) = 2 opportunities to prioritize custom TXs in those blocks.

**Yoroi Wallet Recovery**

- **Q** (@Riki, msg#508020): How to recover ERG from Yoroi wallet?
  **A** (@CW, msg#508021–508022): If seed phrase available, restore in another wallet. If no seed but Yoroi still installed, use recovery tool: https://github.com/satsen/yoroi-ergo-wallet-recover (uncertain if still functional). Otherwise impossible.

---

## Links Shared

- [Gluon Gold Documentation & Parameter Values](https://docs.stability.nexus/gluon-protocols/deployments): Fee structure, reserve ratio mechanics, oracle addresses.

- [Gluon Gold vs. Paxos Gold Analysis](https://news.stability.nexus/gluon-gold-vs-paxos-gold-understanding-the-dynamics-and-risks-81259cbaebe6): Risk dynamics comparison.

- [Gluon Reactor Address](https://explorer.ergoplatform.com/en/addresses/...): TVL and transaction count observable.

- [GAU Token ID](https://explorer.ergoplatform.com/en/token/886b7721bef42f60c6317d37d8752da8aca01898cae7dae61808c4a14225edc8): Circulation calculation formula included.

- [GAUC Token ID](https://explorer.ergoplatform.com/en/token/9944ff273ff169f32b851b96bbecdbb67f223101c15ae143de82b3e7f75b19d2): Reserve token tracking.

- [Gluon Gold Discord](https://discord.gg/aSuBYcrpVE): Official community.

- [Gluon Gold Telegram](https://t.me/GluonGold): Announcements & discussion.

- [Gluon Gold Twitter](https://x.com/GluonStable): Official updates.

- [Bruno's Gluon Deployment Talk (ErgoHack VIII)](https://youtu.be/lkyQMO5DZAQ): Video explanation of protocol mechanics.

- [Gluon-Ergo-WebUI GitHub Issues](https://github.com/DjedAlliance/Gluon-Ergo-WebUI/issues): Submit UI/UX feedback & bug reports.

- [Ergo Node GitHub PR #2177 & #2179](https://github.com/ergoplatform/ergo): Node releases 5.0.22/5.0.23, README update proposals.

- [Sigma-State-Interpreter PRs (#995, #1002, etc.)](https://github.com/ScorexFoundation/sigmastate-interpreter): Sigma 6.0 candidate tracking.

- [Sigma Rust 0.28 Release Notes](https://github.com/ergoplatform/sigma-rust/releases/tag/ergo-lib-v0.28.0): Breaking changes.

- [Rosen Bridge Bitcoin Live Announcement](https://x.com/ergo_platform/status/1821939580808974808): rsnBTC deployment confirmation.

- [ChainCash Repository](https://github.com/ChainCashLabs/chaincash-rs): Trust-based currency issuance framework.

- [CELAUT GitHub](https://github.com/celaut-project): Peer-to-peer service deployment paradigm.

- [Yoroi Ergo Wallet Recovery Tool](https://github.com/satsen/yoroi-ergo-wallet-recover): Legacy wallet recovery.

- [Duckpools IDO](https://dao.duckpools.io/ido): Phase 2.2 funding, retroactive dev compensation model.

- [ErgExplorer VPS Fundraiser](https://ergoraffle.com): Annual infrastructure crowdfunding.

---

## Unresolved Questions

- **Gluon UI/UX Clarity**: How to better communicate to users that fusion input-as-ERG (not GAU/GAUC) is intentional behavior, not a bug? GitHub issue open; SDK changes may be needed.

- **Alternative Gluon UI Fee Structure**: Should Gluon charge UI fee immediately (0.4%) to incentivize third-party UI development, or wait until adoption matures? Bruno asked @c8 for timeline preference; no consensus reached.

- **Ledger App Status**: Why has Ergo's Ledger app remained in dev mode for 1.5+ years? (@Aberg, msg#507718–507719) — no response provided.

- **Sigma 6.0 Non-Technical Benefits**: Simple explanation for community adoption impact still pending detailed marketing materials.

- **SigmaUSD Recovery Post-Liquidation**: What structural changes will prevent future cascading liquidations? duckpools proposing risk dashboard & alerts; full v2 feature set dependent on funding.

- **ChainCash Mainnet Adoption Path**: How to drive real-world community adoption (e.g., LETS networks, commodity producers)? kushti demonstrated API but no community coordination plan announced.

- **Celaut Ergo Integration Completion**: Payment and reputation systems on Ergo still under development; no ETA given (@kushti, msg#507498).

- **Node Performance Peering Issues**: Unreachable duplicate-address nodes causing peer discovery degradation—root cause and fix strategy unclear.

---

**Note on Data Quality**: This week featured heavy Gluon Gold discussion, dApp UX debate, and infrastructure updates. Price speculation, spam (post-SigRSV Coingecko listing), and unrelated job inquiries filtered out. Multiple technical deep-dives from Bruno Woltzenlogel Paleo and kushti preserved for developer reference.