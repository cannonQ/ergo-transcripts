---
title: "Ergo General Chat — 2025-W04"
date_start: "2025-01-20"
date_end: "2025-01-26"
type: telegram_weekly
channel: general
week: "2025-W04"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2025-W04 Summary

## Key Topics Discussed

### Sub-blocks Implementation Status
- kushti working on sub-blocks API for applications after adding best sub-block ID to node's /info endpoint. Sub-blocks expected to improve transaction reliability from ~2 minutes to ~2 seconds average, providing 17,900% UX improvement for DeFi interactions like SigmaUSD minting.

### Ergo 6.0 Soft-Fork Progress
- Audit for Ergo 6.0 is ongoing with all found issues fixed. Sigma Rust implementation and extra indexes work underway to simplify oracle and Rosen Watcher operations.

### Keystone Wallet Hardware Integration
- First Keystone SDK Rust PR submitted and under review by Keystone team. Integration expected to provide hardware wallet support for Ergo transactions. [msg#541232]

### MewFinance Trading Platform Launch
- Initial UI for trading.mewfinance.com went live with DEX functionality. SigmaUSD UI implementation (ergfi.xyz) also operational, with Dexy UI development reportedly started.

### Rosen Bridge Token Holdings Milestone
- Rosen Bridge has accumulated 4,331,552 ERG, surpassing Gate.io's holdings (4,324,641 ERG), demonstrating significant liquidity concentration in bridge infrastructure. [msg#541643-541644]

### Storage Rent (Demurrage) as Underrated Feature
- Storage rent mechanism prevents blockchain bloat by charging fees on boxes older than 4 years. Users can avoid fees through wallet consolidation tools. Demurrage identified as critical but underutilized aspect of Ergo design for long-term sustainability.

### Adaptive Blocksize Governance
- Miners can vote to change block size in Ergo; this has already occurred. Adaptive blocksize cited as another underrated miner governance feature alongside demurrage.

### DuckPools Improvements
- V2 reportedly allowing early withdrawal before term end (previously locked until maturity). DuckPools represents significant improvements in lending pool mechanics over V1.

### Dexy Gold / Oracle Pool v2
- Dexy Gold (Dexy Protocol integration with Gluon) expected soon with GORT reward distribution. Oracle Pool v2 running and operational alongside Oracle Pool v1 managed by EF members.

### Index Funds on Ergo
- anon-real preannounced index fund offerings, expanding passive investment options within ecosystem.

### DeFi UI Accessibility Issues
- Community concern raised about dApps like DuckPools and SigmaFI needing locally-runnable UIs (even if not pretty) in case main websites go down. Risk of forced liquidations if users cannot interact with contracts during emergencies. Devs acknowledged but implementation status unclear.

### Market Fragmentation Analysis
- Discussion of 36.4 million cryptos now on market vs. 500 in 2013/2014. Capital dilution makes "alt season" unlikely; only select projects with conviction and timing will benefit from liquidity inflows. [msg#541669-541670]

### ErgoDevs 2025 / Ecosystem Coordination
- kushti attempting to synchronize ErgoDevs 2025, Palmyra, anon-real's self-sovereign enterprise, Oracle Pools, and other initiatives. Landscape described as "messy" requiring better alignment. [msg#541558-541559]

### Narrative Building Tension
- Debate between building on solid foundations vs. forming narratives. kushti argues narratives needed; Armeanio emphasizes quality/p2p assumptions through time; qx() suggests resilience builds organic themes. [msg#541264-541270]

### US Exchange Access
- KuCoin removed US support in Aug 2023, deleted US accounts Dec 2024 (withdrawal-only). Xeggex available to US but low liquidity. NonKYC exchanges mentioned as alternative. Gate.io also blocking US users.

### Ergo's Competitive Position
- Large discussion on what differentiates Ergo in crowded market. Consensus points: PoW fairness, demurrage, eUTXO design, open-source ecosystem, DeFi protocols, proved stablecoins (SigmaUSD), trustless derivatives, sub-blocks speed improvements.

### Cyberverse (NFT Game) Ecosystem Impact
- Cyberverse >90% of NFT sales on Skyharbor; likely largest driver of new wallet creation past 30-60 days. Noted as underappreciated by own community despite cross-chain (Cardano) asset minting and player engagement. [msg#541781]

## Important Decisions or Announcements

- [@Ergo NEWS $ERG, msg#541141, 2025-01-21]: Audit for Ergo 6.0 soft-fork update ongoing with all issues fixed. Keystone integration PR in review. MewFinance trading.mewfinance.com UI live. c8 inviting SigUSD UI testing at ergfi.xyz with Dexy UI implementation started. anon-real preannounced index funds. Extra indexes PR for oracle/watcher improvement in progress.

- [@kushti khushi, msg#541469, 2025-01-23]: Sub-blocks update shared via tweet; best sub-block ID added to node's /info; API for apps being developed.

- [@TMR.ΣRG, msg#541473-541475, 2025-01-23]: P2P Podcast moved to new YouTube channel (Peer2PeerPodcast) with multiple episodes releasing over following week.

- [@cannon_q, msg#541415, 2025-01-23]: Ergo Ecosystem Bounties listing shows 100 open bounties, 27,512.25 ERG available (excluding Keystone). Bounties ranked: Scala 23,891.90 ERG, Rust 3,438.07 ERG, others smaller.

- [@kushti khushi, msg#541539-541549, 2025-01-23]: rsErg available on some CEXes but withdrawal/deposit to Cardano only. Native Ergo listing still limited despite wrapped version discussions.

- [@cannon_q, msg#541676, 2025-01-24]: Key Ergo differentiators summarized: PoW chain, demurrage, DeFi protocol, fair launch, lender-focused, p2p bonds, multi-chain pixel game, open bridge, p2p marketplace, stables, block time UX improvements, 6.0, Sigma Rust, L2s.

- [@HQΣr, msg#541815, 2025-01-25]: Acknowledged closed-source dApp UIs are shortcuts due to lack of structured developer infrastructure on Ergo (compared to other chains). Plans to use delegation for concert ticketing via on-chain access validation.

- [@qx(), msg#541762, 2025-01-25]: SigmaFI backend restored after downtime.

## Technical Q&A Worth Preserving

- **Q** (@Alex, msg#541940): How do sub-blocks work (ELI5)?
  **A** (@c8, msg#541952-541953): Today transactions wait in mempool ~2 min average before block confirmation. RBF (Replace By Fee) allows fee increases/cancellation, causing SigmaUSD mint failures when users compete. Sub-blocks reduce average reliable confirmation to ~2 seconds, providing 17,900% UX improvement over current 4+ minute failure window.

- **Q** (@Adaptive Blocksize Limit, msg#541523): Can user store data forever with single consolidation payment?
  **A** (@cannon_q, msg#541529): Yes, user sets calendar reminder to refresh wallet periodically via consolidation to avoid storage rent after 4 years.

- **Q** (@XX, msg#541956): Why weren't sub-blocks implemented years ago?
  **A** (@Luivatra, msg#541957): Sub-blocks are new technology; Cardano exploring similar approach (Leios).

- **Q** (@Alex, msg#541938): Why is SigmaUSD not usable enough?
  (No direct answer in chat; discussion deferred to broader stablecoin design topic.)

- **Q** (@Flying Pig, msg#541810, msg#541827): Why should dApps provide open-source UIs or local alternatives?
  **A** (@Flying Pig, msg#541827): If main website goes down (e.g., Duckpools), borrowers cannot repay loans and face forced liquidation. Open UI (even unglamorous) lets users interact with contracts locally. Spectrum/ErgoFi provide good precedent; DuckPools V2 promised open-source UI.

- **Q** (@c8, msg#541952-541954): How will sub-blocks affect SigmaUSD UX vs. other L1s?
  **A** (@c8, msg#541954): Currently ergfi.xyz is "okayish" vs. other slow L1s. Post sub-blocks, UX will be better than Solana's.

- **Q** (@cannon_q, msg#541520): How do users avoid storage rent?
  **A** (@cannon_q): Use wallet consolidation tool (built into Nautilus/mobile) to spend old boxes and create single new box with all contents. Simple refresh restarts 4-year clock.

- **Q** (@kii, msg#541215): Why do you group Monero, Ergo, Bitcoin together but exclude other coins?
  **A** (@kushti khushi, msg#541234): Other communities exist (bigger/smaller). Implies distinction based on protocol neutrality, community diversity, and p2p assumptions rather than just technical specs.

## Links Shared

- [trading.mewfinance.com]: MewFinance DEX trading interface live with order book functionality.
- [ergfi.xyz]: SigmaUSD operations UI by c8, with Dexy UI implementation underway.
- [tools.mewfinance.com]: MewFinance tools for transaction construction (mentioned as mobile-accessible via Chrome/Explorer).
- [playcyberverse.com]: Cyberverse NFT game; >90% of Skyharbor NFT volume; free-to-play with chat onboarding.
- [https://github.com/ErgoDevs/Ergo-Bounties]: Ergo Ecosystem Bounties board with 100 open bounties, updated with coding language tags.
- [https://www.youtube.com/@P2Pod]: Peer 2 Peer Podcast new YouTube channel (rebirth); seeking 100 subscribers for early episode drop.
- [https://vxtwitter.com/chepurnoy/status/1882459611774730681]: kushti's sub-blocks update tweet with node /info changes.
- [https://vxtwitter.com/KeystoneWallet/status/1881718401128616130]: Keystone Wallet integration progress update.
- [socketsupply.co/]: Cross-platform development tool recommended by c8 as superior to Flutter/React Native for Ergo apps.
- [https://www.ergoforum.org/latest]: Ergo Forum latest discussions/updates.
- [https://t.me/ErgoDevelopers]: Ergo Developers Telegram (weekly dev updates Wednesdays).

## Unresolved Questions

- **Sub-blocks rollout timeline**: Kushti working on API but no firm ETA announced. Audit/testing phase ongoing.
- **Keystone integration completion**: PR under review; Keystone team has limited resources; timeline uncertain post-holidays. [msg#541232]
- **DuckPools V2 early withdrawal implementation status**: Mentioned as coming in V2 but unclear if already live or still in development.
- **US CEX access path**: No clear relisting strategy emerged. KuCoin/Gate.io unlikely near-term. Xeggex/NonKYC mentioned but liquidity concerns remain.
- **Palmyra ecosystem alignment**: kushti seeking sync across ErgoDevs 2025, Palmyra, anon-real enterprise, Oracle Pools; described as "messy" with no resolution stated. [msg#541558-541559]
- **Narrative vs. foundations debate**: Ongoing tension between kushti (build narratives) and Armeanio/qx() (focus on quality/resilience). No consensus reached.
- **DApp UI accessibility requirements**: Community feedback on need for local/offline UIs acknowledged by devs but no formal adoption or standard proposed.
- **Dexy Gold/Protocol v2 launch date**: "Soon" mentioned but no specific timeline given.
- **Cross-chain adoption (Solana bridge, etc.)**: Discussion of potential but no announcement of active development or partnerships.

---

**Meta Notes:**
- Week featured significant technical progress updates (sub-blocks, Keystone, MewFinance), ecosystem coordination discussions, and US market access frustrations.
- Political discussion early in week (Trump memecoin) noted but community rule enforcement reminded members to avoid off-topic politics.
- Strong community focus on differentiators (PoW, demurrage, eUTXO) and underrated features (storage rent, adaptive blocksize, Cyberverse) vs. competing for attention with meme coins.