---
title: "Ergo General Chat — 2022-W05"
date_start: "2022-01-31"
date_end: "2022-02-06"
type: telegram_weekly
channel: general
week: "2022-W05"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat Summary — 2022-W05
**Period:** 2022-01-31 to 2022-02-06  
**Messages Processed:** 885  
**Focus:** Technical discussions, ecosystem updates, wallet/exchange issues

---

## Key Topics Discussed

- **CoinEx Maintenance Issues**: Extended wallet maintenance blocked ERG deposits and withdrawals from Jan 30 onwards. Users advised to mine to personal wallets instead and use alternative exchanges (KuCoin, Gate.io, TradeOgre, Hotbit). Issue persisted through the entire week unresolved.

- **Nautilus Wallet Development**: Private beta dApp connector in progress. Initially unable to sign transactions with Spectrum DEX, but rapid iteration expected. TestFlight iOS version available; Chrome extension on webstore. ErgoPay implementation announced to enable mobile dApp interaction.

- **ErgoDex Status & Liquidity**: Spectrum DEX passed $2M TVL. Order book model explained as superior to AMM for transparency, slippage control, and partial fill support. Only Yoroi Nightly wallet connected at week's end; Nautilus dApp connector testing imminent.

- **v5.0 Soft Fork & Performance**: Expected to deliver 4–6x throughput boost via faster script engine and more accurate cost prediction. Estimated potential throughput ~45 tx/sec (extensible to 5–10x via parallelization). Detailed performance report prepared by kushti.

- **Block Time & Speed**: Discussion of potential sub-block/microblock implementations as scaling path. Acknowledged complexity: changes to block-height-dependent contracts, timestamp dependencies, and security tradeoffs in worst-case scenarios require careful design.

- **Bridge Security (Wormhole/SuSy)**: Solana Wormhole exploit analyzed: bug fixed in Solana, patch posted to GitHub, attacker exploited before deployment. Ergo's Rosen Bridge (forked from Wormhole) patched on Jan 16; not yet deployed. Community reassured about additional security layers.

- **Mining & Pools**: 2Miners remained operational throughout. GetBlok launched new mining pool with Proof-of-Vote system for EIP-27 soft fork proposal. Discussions of hardware efficiency (GPU vs. ASIC resistance via Autolykos), merge-mined sidechains, and CPU mining opportunities flagged.

- **Wallets & Security**: Comparison of Ergo Node Wallet, Yoroi (criticized for slowness/sync issues), mobile wallets (Android/iOS). Mobile wallets deemed most secure if device not rooted. Paper wallets suitable for holding; ErgoPay enables dApp interaction with cold wallets.

- **SigmaUSD Upgrade**: Reminder to migrate legacy SigmaUSD on old.sigmausd.io to updated version.

- **ErgoLend (Lending DAO)**: Anonymous lending with social collateral, community review, and insurance mechanisms under exploration. Multiple real-world pilots in Kenya and Nigeria discussed. Emphasis on DAO governance for loan approval.

- **Regulatory Clarity**: Ergo obtained US legal opinion confirming non-security status.

---

## Important Decisions or Announcements

- [@Glasgow, msg#252483, 2022-02-01]: v5.0 soft fork roadmap: post coming soon. Costing optimization and script engine improvements enable ~45 tx/sec potential (5–10x via parallelization). Performance report available on GitHub.

- [@MrStahlfelge, msg#253012, 2022-02-04]: ErgoPay (dApp connector for mobile) released on Android open beta; Nautilus dApp connector testing "very soon."

- [@Glasgow, msg#252855, 2022-02-03]: Ergo acquired US legal opinion confirming non-security status.

- [@Glasgow, msg#252857, 2022-02-03]: Rosen Bridge patched Jan 16; SuSy not yet deployed. Additional security layers implemented.

- [@ArØhβΣ @Arohbe, msg#253319, 2022-02-05]: GetBlok Proof-of-Vote community poll starts tomorrow; runs until EIP-27 formal voting begins.

- [@Andy L, msg#253325, 2022-02-05]: Ergo Pulse Episode (Feb 7, Monday): Dan, Armeanio, and Rob (GetBlok) discuss smart pools, Proof-of-Vote, and ecosystem potential.

- [@Ergo Boy, msg#252983, 2022-02-03]: ErgoPay released; ErgoDex mobile support now possible via ErgoPay.

- [@Glasgow, msg#252462, 2022-02-01]: Ergo Pulse scheduled for first Monday of month.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#252479): What is the best scaling solution for Ergo? Hydra mentioned for regular transactions—what about smart contracts?  
  **A** (@Glasgow, msg#252480, msg#252483): v5 soft fork brings 4–6x speed boost. No clear L2 winner yet; active research in Plasma, Hydra, others. v5.0 targets ~45 tx/sec; report available on GitHub with performance analysis vs. v4.0.

- **Q** (@Unknown, msg#252486): Is "parallelization of transaction verification" equivalent to sharding?  
  **A** (@Glasgow, msg#252487): Sharding is one type of transaction parallelization, but not all parallelization is sharding.

- **Q** (@Unknown, msg#252481): When v5 soft fork? Does "speed" mean constant TPS or finalization/settlement time?  
  **A** (@Glasgow, msg#252483): "Soon"—post being drafted. Speed = throughput; actual practical number depends on transaction composition.

- **Q** (@Gazza, msg#252716): When comparing block size/memory with Cardano, do we have more room for scripts per block? Will v5 help?  
  **A** (@Gazza, msg#252719): Block size visible on Ergo Explorer; adjustable by miners. Cardano may separate block size metric from script capacity metric differently.

- **Q** (@Unknown, msg#252811): How do I know if I have legacy SigmaUSD needing upgrade?  
  **A** (@Glasgow, msg#252812): Check https://old.sigmausd.io/#/ — if balance present, upgrade needed.

- **Q** (@Marco, msg#253079): Why did my 50-input transaction exist when 2 inputs seemed sufficient?  
  **A** (@Glasgow, msg#253089): Looks like mining rewards (dust consolidation). Mining rewards generate many small outputs; wallet optimization depends on coin selection algorithm.

- **Q** (@Unknown, msg#253041): How do I use the /tip command?  
  **A** (@ERGO TIP BOT, msg#252635): Quote the message from user you want to tip and enter amount. Example: `/tip 1`

- **Q** (@kushti, msg#252705): Is Hydra only for simple payments or can it support complex contracts?  
  **A** (@kushti, msg#252705, msg#252706): Hydra good for some contracts (e.g., poker games in paper). Current heavy dApps (DEX, lending, staking) need L2 scaling via dedicated protocols.

- **Q** (@Chris Ray, msg#253341): How does ErgoLend address anonymous lending without collateral risk?  
  **A** (@Chris Ray, msg#253341): Options include: social collateral (community reputation/vouching), borrower community support for project visibility, lender-specified requirements (experience, identity verification, progress updates), insurance mechanisms under exploration, DAO governance for loan scrutiny.

---

## Links Shared

- [https://ergoplatform.org/en/basics/](https://ergoplatform.org/en/basics/): Ergo fundamentals including Autolykos consensus, PoW security, storage rent, Sigma Protocols.

- [https://docs.ergoplatform.com/dev/protocol/scaling/](https://docs.ergoplatform.com/dev/protocol/scaling/): Scaling solutions (Plasma, Hydra, L2 research).

- [https://github.com/ergoplatform/ergo/blob/d3d95e19b37c83b98de13bdf71d6d62b398e8f0d/metrics/Report.ipynb](https://github.com/ergoplatform/ergo/blob/d3d95e19b37c83b98de13bdf71d6d62b398e8f0d/metrics/Report.ipynb): v5.0 performance analysis report vs. v4.0, tx throughput estimation.

- [https://ergo.nodespyder.io/](https://ergo.nodespyder.io/): Ergo node tracker (tracks nodes behind web servers only).

- [https://docs.ergoplatform.com/node/swagger/](https://docs.ergoplatform.com/node/swagger/): Node configuration and API documentation.

- [https://ergoplatform.org/en/wallets/](https://ergoplatform.org/en/wallets/): Official wallet list (mobile, desktop, browser).

- [https://ergoplatform.org/en/exchanges/](https://ergoplatform.org/en/exchanges/): Exchange list for ERG acquisition.

- [https://explorer.ergoplatform.com/en/charts/block-size](https://explorer.ergoplatform.com/en/charts/block-size): Block size metrics, adjustable by miners.

- [https://chrome.google.com/webstore/detail/nautilus/gjlmehlldlphhljhpnlddaodbjjcchai](https://chrome.google.com/webstore/detail/nautilus/gjlmehlldlphhljhpnlddaodbjjcchai): Nautilus Wallet Chrome extension.

- [https://testflight.apple.com/join/MRyG2qfm](https://testflight.apple.com/join/MRyG2qfm): Ergo Wallet iOS TestFlight beta.

- [https://www.reddit.com/r/ergonauts/comments/sikp3a/check_out_and_try_ergopay_the_dapp_connector_for/](https://www.reddit.com/r/ergonauts/comments/sikp3a/check_out_and_try_ergopay_the_dapp_connector_for/): ErgoPay dApp connector announcement.

- [https://old.sigmausd.io/#/](https://old.sigmausd.io/#/): Legacy SigmaUSD balance check and migration.

- [https://twitter.com/kelvinfichter/status/1489041221947375616](https://twitter.com/kelvinfichter/status/1489041221947375616): Wormhole/Solana bridge exploit analysis.

- [https://thecoinperspective.com/compare/ergo](https://thecoinperspective.com/compare/ergo): Market cap calculator for price scenarios.

---

## Unresolved Questions

- **CoinEx Withdrawal Timeline**: No official resolution date announced. Issue marked as "under maintenance" without ETA. Community advised to use alternative exchanges.

- **Yoroi Performance & Official Fix**: Multiple reports of sync failures, slowness, extension crashes. No official acknowledgment or fix roadmap from Yoroi team in chat (issue persists across week).

- **Nautilus Nightly & Spectrum DEX Integration**: Partially resolved—Yoroi Nightly works via Kiwi Browser desktop mode; Nautilus dApp connector timeline marked "very soon" but not committed.

- **Ergodex Cardano Token Support & Testnet Launch**: Mentioned as "coming" but no specific date provided. Cross-chain token support still in planning.

- **EIP-27 (Reduced Emission) Voting Outcome**: GetBlok Proof-of-Vote poll launched; formal voting timeline and pass probability not yet public.

- **Tier-1 Exchange Listing (Binance, Coinbase)**: Discussed as future goal; no partnership announcements or timelines given.

- **Plasma & L2 Protocol Specifics**: Active research flagged but no prototype or milestone dates confirmed.

---

## Notable Community Sentiment

- **Bullish on Ecosystem**: ErgoDex TVL growth ($2M+), ErgoHack III spawn of new projects (SkyHarbor, GetBlok, etc.), multiple wallet improvements (ErgoPay, Nautilus beta) seen as concrete progress.

- **Frustration with Wallets**: Yoroi slowness and sync issues repeatedly criticized. Nautilus adoption viewed as relief pending dApp connector maturity.

- **Bear Market Resilience**: Mining community active despite price pressure. Consensus that Ergo "born in bear market" with strong fundamentals; price secondary to development velocity.

- **Privacy & Decentralization as Differentiator**: Sigma Protocols, built-in mixer, peer-to-peer DeFi highlighted as unique vs. Solana/Ethereum VC-heavy, premine-heavy models.