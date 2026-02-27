# Ergo General Chat — Week 2025-W45 Summary

## Key Topics Discussed

- **PoW Project Transparency Initiative**: CannonQ building a PoW tracker (cannonq.github.io/pow-tracker-site/) to document and compare premine allocations, Genesis block distributions, and mining yields across PoW projects. Open-source contribution model like DeFiLlama.

- **Network Infrastructure Issues**: Multiple explorer and API endpoint failures on 2025-11-03, traced to Hetzner service disruptions. Community identified workarounds via backup endpoints (Cornell, CodeUTXO, SigmaSpace).

- **Privacy Protocol Architecture**: kushti clarified Ergo's privacy-as-apps approach (not hardcoded core features) to avoid hard forks when new schemes are discovered. Supports bulletproofs, Sigma protocols, stealth addresses, ring signatures, threshold signatures with real zero-knowledge proofs.

- **Kintsugi Campus Currency System** ([@qx(), msg#580574-580587]): Deployed institutional blockchain-based recognition and procurement system at Cornell with 77 staff members. Uses BRICK token for campus supply store, print center, and peer-to-peer recognition with automatic wallet top-ups via Nautilus. Storage rent will reclaim unused tokens after ~3.5 years from student wallets.

- **RWA Hub Fundraising**: [@T Mas, msg#580563-580570] proposing native on-chain RWA hub integrating VoltPay and Banxa for fiat-to-RWA conversions. Seeking 2.5-5k funding round with 20% ROI to investors via hub fees, plus 2.5-5k advertising budget.

- **Commons Well / Generosity Protocol Concept** ([@Federico, msg#580631, msg#580865]): Community discussion on gift-economy dApp with demurrage-decaying allowances and Sybil-attack resistance (via BrightID). Proposed using merge-mined sidechain for underlying asset value while keeping generosity tokens non-tradable.

- **Flatcoin / TVI (Treasury Value Index)** ([@impulse, msg#580846-580848]): Dual-function CD mechanism using time-locked collateral, dual pools (risk on/off), and weighted-average oracle switching. Yield generation from SigmaUSD + ERG backed pools.

- **Mixer and Privacy Wallet Safety**: Discussion around Samourai wallet developer sentencing (5 years) and implications for privacy wallet developers. qx() emphasized Ergo Mixer puts control in user hands (not custodial like Tornado Cash). SafeW has mixer integrated locally.

- **Sub-blocks / Input-Ordering Blocks**: kushti leading community discussion on faster block production. Parameters like block time and difficulty tunable on testnet. Weak blocks → sub-blocks terminology debate ongoing.

- **Rosen Bridge Standard Adoption**: kushti announced three L1s now building/exploring Rosen contribution standards for cross-chain interoperability.

## Important Decisions or Announcements

- [@kushti, msg#580166, 2025-11-03]: Explorer/API services back online after Hetzner incidents; community directed to backup endpoints.

- [@cannon_q, msg#580157, 2025-11-03]: PoW Tracker project open for community contributions (PR-based data submission model); closing all clients this week to focus development.

- [@Andy L, msg#580368, 2025-11-05]: Weekly Community Chat format confirmed for Thursday 2025-11-06 13:00 UTC, combining developer updates + community discussion on Zoom + YouTube.

- [@Yulius Kristianto, msg#580347, 2025-11-05]: Ergo ranked #3 on CoinGecko Top 10 Most Voted Blockchain projects (Week 44).

- [@qx(), msg#580557, 2025-11-06]: Kintsugi wallets seeded and funded for 77 Cornell staff; transaction documented on-chain.

- [@TMR.ΣRG, msg#580809-580810, 2025-11-08]: SigmaQuest game launches in <24 hours (community engagement game).

- [@T Mas, msg#580831-580842, 2025-11-08]: RWA hub development recruitment starting end of month; 1k SigmaUSD initial budget for 2-3 developer contractors.

## Technical Q&A Worth Preserving

- **Q** (@The Horticulturalist, msg#580165): "Is there any update on the explorer issue?"
  **A** (@kushti, msg#580166-172): Infrastructure issues traced to Hetzner; shared comprehensive list of backup explorers and APIs (Cornell, CodeUTXO, SigmaSpace endpoints) with GraphQL alternatives.

- **Q** (@Nikan, msg#580208): "How much ergo max tps?"
  **A** (@kushti, msg#580209-214): "For what?" — clarified TPS depends on use case. Privacy protocols heavy, simple transfers lightweight, DeFi mid-range. Sometimes optimal to have heavier protocols on L1 (ERG/tokenized reserves) with ultra-performant offchain local payment systems on top. Referenced upcoming announcement.

- **Q** (@Ollie, msg#580276-280): Can Ergo be filtered as privacy coin on CoinGecko?
  **A** (@kushti, msg#580280-291): Ergo has protocols (stealth addresses, ring signatures, threshold signatures with real ZK) implemented as apps rather than hardcoded. Before, distancing measures taken when privacy coins delisted from CEXes. Crypto trends around privacy classification are "insane"; community has to maneuver between pressures.

- **Q** (@Nabz, msg#580513): "How well does the Ergo Mixer work?"
  **A** (@qx(), msg#580514): "Mixer is great, just depends on how many people are mixing at that time." User controls mixing themselves (non-custodial), unlike Tornado Cash. Difference is responsibility on user for operational security (@TMR.ΣRG, msg#580534).

- **Q** (@G on Discord, msg#580750): "Thoughts on a hotwallet with a mixer integrated? Or a fee added to transactions to add privacy?"
  **A** (@Glasgow on Discord, msg#580767): SafeW has mixer integrated; ergomixer needs to run locally.

- **Q** (@bob, msg#580857): TVI token redemption model critique — doesn't proportional redemption value bleed the treasury over time?
  **A** (Unresolved): impulse acknowledged but no follow-up response in logs.

- **Q** (@Panda on Discord, msg#580872): "single-tx-swap.com seems to be down, is that new?"
  **A** (@kushti, msg#580873): "Old ergohack project." Alternative: [@HQ3rr, msg#580876] noted MewMart (mart.mewfinance.com) has escrow service.

- **Q** (@Federico, msg#580865): Could community collectively decide which asset fills the Well in Commons Well protocol?
  **A** (Partial): cannon_q mentioned demurrage mechanics affect boxes with <0.14 ERG; suggested Ergo Forum (ergoforum.org) for detailed design work. Federico committed to drafting proposal.

## Links Shared

- [https://lithos.work]: Lithos Protocol landing page with GitHub and X links.

- [https://cannonq.github.io/pow-tracker-site/]: PoW project transparency tracker (work in progress; verifying data).

- [https://explorer.ergoplatform.com/, https://explorer-p2p.ergoplatform.com/, https://ergo.aap.cornell.edu/, https://ergobackup.aap.cornell.edu/, https://explorer.codeutxo.com/, https://ergexplorer.com/, https://sigmaspace.io/]: Primary and backup Ergo explorers.

- [https://api.ergoplatform.com/api/v1/docs/, https://api-p2p.ergoplatform.com/api/v1/docs/, https://api.ergo.aap.cornell.edu/api/v1/docs/, https://api.ergobackup.aap.cornell.edu/api/v1/docs/, https://api.codeutxo.com/api/v1/docs/]: REST API documentation for explorer endpoints.

- [https://gql.ergoplatform.com/, https://graphql-p2p.ergoplatform.com/, https://graphql.ergo.aap.cornell.edu/, https://graphql.ergobackup.aap.cornell.edu/, https://graphql.codeutxo.com/]: GraphQL endpoints.

- [https://x.com/chepurnoy/status/1985391715436626427]: kushti tweet on ErgoScript whitepaper reference.

- [https://x.com/chepurnoy/status/1985445463160713513]: Additional kushti reference.

- [https://explorer.ergoplatform.com/en/transactions/18dd4650a1821305675d12aeaed7e68856830511e1ffeeacb62539a5b789976d]: Kintsugi wallet funding transaction on-chain.

- [https://powhub-nine.vercel.app/]: HQ3rr's PoW Hub dashboard (early stage).

- [https://powhub-nine.vercel.app/chains/ergo]: Ergo-specific overview on PoW Hub.

- [https://tools.mewfinance.com/]: MewFinance tools portal.

- [https://wallets.mewfinance.com/]: MewFinance paper wallet tool.

- [https://youtu.be/Nwjuhv-yK6Q]: HQ3rr shared SingleTxSwap reference (atomic swap).

- [https://www.ergoforum.org/t/please-provide-ideas-on-agorism-and-peaceful-counter-economics/3515]: Historical Ergo Forum discussion on agorism/gift economy (referenced by Grayman).

- [https://discord.com/channels/668903786361651200/871678874403110933]: Ergo Agora Discord channel.

- [https://cardano-lightning.org/]: Cardano Lightning Network approach (compared unfavorably to Ergo sub-blocks/Braid by TheStophe).

- [https://github.com/danieloravec/ergo-token-swap]: ErgoHack project for peer-to-peer token swapping.

- [https://mart.mewfinance.com/]: MewMart escrow service for trades.

- [https://sigmaquest.lovable.app/]: SigmaQuest game portal (launched 2025-11-09).

- [https://x.com/tmr_erg/status/1986239107089965561?s=20]: TMR.ΣRG SigmaQuest announcement.

- [https://www.ergoforum.org/]: Ergo Forum for detailed protocol design discussions.

- [https://www.tradingview.com/script/PkfLCPYI-Mandelbrot-Fibonacci-Cascade-Vortex-MFCV/]: T Mas shared fractal trading tool (off-topic but mentioned).

- [https://ergone.io/manifesto]: Ergo manifesto reference (shared by Giufa).

## Unresolved Questions

- **Storage rent implications for Kintsugi**: qx() raised concern about regret over not including decimals in BRICK token; storage rent reclamation timeline (~3.5 years) assumed but not formally modeled.

- **TVI (Treasury Value Index) bank-run risk**: bob's critique of proportional redemption bleed remains unanswered by impulse (msg#580857).

- **Commons Well asset sourcing**: Federico's question about community-decided asset (merge-mined token vs. ERG vs. stables) deferred to forum design work (msg#580865-867).

- **Sub-blocks terminology / marketing naming**: TheStophe asked for "sexy marketing name" for sub-blocks (msg#580777-780); suggestions (soft blocks, weak blocks) made but no official decision recorded. Armeanio joked "weak blocks so all uphill from there."

- **Samourai wallet implications for Ergo privacy**: T Mas raised question about legal clarity for privacy wallet developers post-Samourai sentencing (msg#580807-808); community noted Ergo Mixer is open-source/non-custodial but broader DOJ precedent remains ambiguous.

- **Demurrage mechanics for Commons Well**: If demurrage only triggers on boxes <0.14 ERG, how to prevent whale hoarding? Federico's AI suggestion about decay + caps + demurrage not validated.

- **Kintsugi parent credit card fiat on-ramp**: qx() flagged "implications of a private fiat on-ramp" (msg#580601) without resolution.

- **Merge-mined sidechain value flow**: How does value from merge-mined sidechain automatically flow to Commons Well collateral? Technical mechanism unspecified.

---

**Note**: This week (W45) contained significant infrastructure disruptions, strong community engagement on novel economic models (Commons Well, flatcoin, RWA hubs), and continued focus on privacy protocols and scaling (sub-blocks). No major protocol changes announced, but several community fundraising initiatives and educational projects progressed.