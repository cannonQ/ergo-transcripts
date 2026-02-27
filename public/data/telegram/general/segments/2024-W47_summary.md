# Ergo General Chat — Week 2024-W47 Summary

## Key Topics Discussed

- **Ergo 6.0.0 Release Candidate**: kushti released v6.0.0-RC1 with massive ErgoScript changes (~16k lines of code touched). RC1 is testnet-only; mainnet compatibility unknown. Documented changes in LangSpec.md via sigma-state-interpreter PR #930.

- **Sub-blocks Implementation**: Sub-blocks under active discussion as potential throughput improvement. kushti exploring what to do post-sub-blocks; community debating merits vs. complexity (block height/timestamp dependencies, parameter tuning).

- **Rosen Bridge Multi-Chain Expansion**: BSC testing configured on Pandora; RoseNet integration underway. Dogecoin integration under review. New token additions from Ergo and Cardano planned. Large transfer alert: 460,376 rsERG ($641,257) Cardano→Ergo.

- **MewFinance Platform Development**: MewFund Alpha launched with token sale + LP mechanism. MewFund #1 completed; LP tokens airdropped. Mewpad UI being built; gridbot and hummingbot (with arbitrage between DEXes/CEXes) in development.

- **Keystone Hardware Wallet Integration**: Public key derivation, communication layer, and TX parsing mostly done. sigma-rust compilation for Keystone environment blocking final signing implementation (dusek working on PR #781). 3k bounty available via ErgoDevs.

- **Storage Rent & Demurrage Discussion**: Debate over storage rent auction mechanics, consolidation on demurrage, and long-term incentive alignment for miners. LouisLibre emphasizing fixed supply with infinite liquidity; Patato proposing automatic wallet consolidation when storage rent triggers.

- **Chainlink Partnership via Palmyra**: Dan (Palmyra lead) detailing on-chain warehouse receipts for decentralized trade financing using Chainlink proof-of-reserve + Winter Protocol. Oracle Pools v1 (EF members + external) and v2 (Dexy Gold with GORT rewards) operational; plans to invest in native Ergo oracles.

- **Developer Experience & Tooling**: Discussion of fee estimation API (underutilized), spam protection in reference client v4.0.44, mempool filters, and node consolidation tools.

- **Kraken Listing Momentum**: Mark Greenberg (former Kraken listings head) confirmed as Ergo fan; community grassroots engagement on Twitter noted; "we're shortlisted" per qx().

## Important Decisions or Announcements

- [@kushti khushi, msg#527216, 2024-11-18]: Ergo protocol reference client **6.0.0-RC1 released** — testnet only; hard to predict mainnet db breakage.

- [@kushti khushi, msg#528030, 2024-11-22]: **ErgoScript 6.0 changes documented** in LangSpec.md; changes "quite massive" per PR diff.

- [@Andy L, msg#527608, 2024-11-20]: **Weekly AMA scheduled** with Dan & qx() at 13 UTC; link provided.

- [@HQΣr | Wont Dm 🐾 ⚡, msg#527309, 2024-11-18]: **MewFund Alpha launched** with Pumperino meme token via fund.mewfinance.com; 0.5 ERG entry.

- [@HQΣr | Wont Dm 🐾 ⚡, msg#527669, 2024-11-20]: **MewFund #1 fulfilled**; LP launched; LP token distribution underway; staking pool launch at CruxFinance.

- [@Armeanio, msg#528412, 2024-11-23]: **Rosen Bridge Update**: BSC Pandora testing this week; RoseNet integration in guard-service; DOGE first TX created; new Ergo/Cardano tokens planned.

- [@kushti khushi, msg#528295, 2024-11-23]: **Twitter Spaces with House of Chimeira** scheduled Nov 29, 5 PM UTC (announcement coming).

- [@Pgr456, msg#528035, 2024-11-22]: **Keystone app status**: Public key derivation & TX parsing ~done; sigma-rust compilation blocking; dusek on PR #781.

- [@kushti khushi, msg#528063, 2024-11-22]: **SigmaUSD bank reserve ratio >700%**; recommendation to hedge with SigUSD lending via SigmaFi/DuckPools.

## Technical Q&A Worth Preserving

- **Q** (@Mki, msg#527703, 2024-11-20): Why does Gate.io offer 20% APR for borrowing ERG vs. 3-7% for other assets?
  **A** (@Glasgow｜WON'T DM, msg#527705): Supply and demand dynamics.

- **Q** (@Unknown, msg#527855, 2024-11-21): Could storage rent utxos be auctioned, with proceeds to miners if no bids?
  **A** (@Unknown, msg#527858): Would require hard fork; interesting guard rail for users around storage rent.

- **Q** (@Teque, msg#527585, 2024-11-20): If HodlBox unlock date passed, does it unlock automatically or require manual TX?
  **A** (@HQΣr | Wont Dm 🐾 ⚡, msg#527586): Manual TX required to unlock.

- **Q** (@LAKAY, msg#528384, 2024-11-23): If I hold ERG on wallet 3+ years without touching, can miners take my ERG via storage rent?
  **A** (@cafebedouin.org & others, msg#528386–388): Only dormant (untouched 4 years) boxes with insufficient ERG to cover demurrage are charged; sending a TX or consolidating resets clock; holdings won't disappear unless box sits dormant and falls below storage rent threshold.

- **Q** (@Unknown, msg#527512, 2024-11-20): Could NFTs serve as proof of wallet ownership?
  **A** (@HQΣr | Wont Dm 🐾 ⚡, msg#527519): Finish it and we can market it.

- **Q** (@c8, msg#527624, 2024-11-20): Working on options; need ERG/SigmaUSD pool — anyone interested?
  **A** (@The Horticulturalist, implicit interest in msg#527625): Discussion of short-term money market pools for miners' LP'd SigmaUSD.

- **Q** (@Pgr456, msg#528029, 2024-11-22): What's the progress on Keystone Ergo integration?
  **A** (@Pgr456, msg#528035): Public key derivation video posted in dev updates; TX parsing done; sigma-rust compilation on Keystone remains blocker (dusek on PR #781); review by Keystone team post-completion; volunteer-based so hard to estimate.

- **Q** (@cannon_q, msg#527725, 2024-11-20): Hashrate settings for RTX 3060 mining ERG?
  **A** (@cannon_q, msg#527728): Reported 100 MH at 71W; depends on settings (core offset ~30-40% hit); mine to Sigmanauts pool; see hashrate.no for starting points.

- **Q** (@Ergochampion, msg#527764, 2024-11-20): Best way to buy ERG in US without exchange KYC?
  **A** (@cannon_q, msg#527769): CoinEx ($10k daily withdraw limit), TradeOgre, Xeggex, or nonkyc.io. Or buy ADA on any CEX and swap for rsERG via Splash.trade.

- **Q** (@Richi [MANA], msg#528590, 2024-11-24): Any Splash DEX issues today?
  **A** (@Richi [MANA], msg#528590): All fine; ensure 5 ADA in wallet for Cardano fees (2-hour completion).

- **Q** (@Unknown, msg#528143, 2024-11-22): rsERG ETH pool only has 800 ERG left — did it fail?
  **A** (@Rj, msg#528145): No; low conversion demand because x-potential higher on Ergo mainnet; ETH holders should add ETH + buy ERG to boost pool.

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC1](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC1): Ergo v6.0.0-RC1 release with sigma-state changes.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/930/files](https://github.com/ergoplatform/sigmastate-interpreter/pull/930/files): ErgoScript 6.0 LangSpec.md diff showing ~16k lines of changes.

- [fund.mewfinance.com](https://fund.mewfinance.com): MewFund Alpha launch (closed after fulfillment).

- [tools.mewfinance.com/consolidate](https://tools.mewfinance.com/consolidate): UTXO consolidation tool.

- [mart.mewfinance.com](https://mart.mewfinance.com): P2P marketplace for NFTs; multiple payment assets (ERG, SigmaUSD, rsETH, rsADA, etc.).

- [mewfinance.com](https://mewfinance.com): MewFinance dApp hub.

- [dex.mewfinance.com](https://dex.mewfinance.com): MewFinance DEX frontend.

- [app.splash.trade](https://app.splash.trade): Splash DEX (Cardano↔Ergo rsERG swaps; same team as Spectrum).

- [ergoauctions.tradehouse](https://ergoauctions.tradehouse): Trade House order book DEX; limit orders.

- [cruxfinance.io/portfolio](https://cruxfinance.io/portfolio): CruxFinance portfolio dashboard.

- [ergo.watch/dashboards/emission](https://ergo.watch/dashboards/emission): Ergo emission tracking (78.5M circulating / 97.74M cap).

- [rosen.tech](https://rosen.tech): Rosen Bridge documentation.

- [https://docs.ergoplatform.com/eco/hodlbox/](https://docs.ergoplatform.com/eco/hodlbox/): HodlBox documentation.

- [https://savonarolalabs.github.io/hodlbox-xyz](https://savonarolalabs.github.io/hodlbox-xyz): HodlBox dApp.

- [https://youtube.com/live/TFwgK4nCAqE](https://youtube.com/live/TFwgK4nCAqE): Weekly AMA with Dan & qx() (2024-11-21).

- [hashrate.no/gpus/3060/ERG](https://hashrate.no/gpus/3060/ERG): ERG GPU mining hashrate reference for RTX 3060.

- [https://x.com/marklg/status/1858901299514761507](https://x.com/marklg/status/1858901299514761507): Mark Glasgow post (referenced in context of community attention).

- [https://x.com/NeuralYogi/status/1860042175830196355](https://x.com/NeuralYogi/status/1860042175830196355): NeuralYogi live coding on Twitter/X.

- [https://github.com/ergoplatform/sigma-rust/pull/781](https://github.com/ergoplatform/sigma-rust/pull/781): sigma-rust PR for Keystone non-standard environment compilation.

- [https://discord.com/channels/1149394330981773393/1184792797484683314](https://discord.com/channels/1149394330981773393/1184792797484683314): Official Rosen Bridge Discord support channel.

## Unresolved Questions

- **Storage rent auction proposal**: Feasibility of auction mechanism for demurraged boxes remains open; would need hard fork per @Unknown (msg#527858).

- **Sub-blocks timeline & parameter tuning**: Interest exists but no committed roadmap. Block height/timestamp dependencies and mining incentive dynamics need community consensus. Testnet volunteer group forming (kushti inviting interested parties, msg#527821–858).

- **Post-sub-blocks roadmap**: kushti flagged deciding what to work on after sub-blocks; community suggestions include CPU/small GPU sidechain, information distribution (whistleblowing, encrypted messaging, dead man switch), improved developer experience, stable coins, and chain cash (msg#527815–825).

- **Keystone integration ETA**: No firm date; blocked on sigma-rust compilation; volunteer-based (msg#528035).

- **Ledger integration status**: @Pulsarz asked for ledger dev mode update; no response recorded (msg#528017).

- **Hardware wallet adoption incentives**: Nano X 3× price of Nano S; Keystone cost vs. ledger trade-offs discussed but no recommendation issued (msg#528006–026).

- **Kraken listing requirements**: "Shortlisted" status confirmed, but specific conditions or timeline not disclosed (msg#528099).

- **rsERG/Cardano bridge imbalance**: ETH pool at 800 ERG; mechanism to incentivize ETH→Ergo conversion discussed but no solution proposed (msg#528143–145).

- **SigmaUSD/SigRSV hedge strategy**: kushti noted SigUSD RR >700% as profitable moment; optimal exit points/hedging ratio not formalized (msg#528063).

---

**Summary Notes:**
- **Development velocity high**: 6.0 (16k LOC), MewFinance ecosystem (alpha→fund completion), Rosen multi-chain, Keystone progress, community tooling (consolidation, fee estimation).
- **Ecosystem expanding**: Palmyra/Chainlink integration, DuckPools/SigmaFi lending, Trade House limit orders, arbitrage bots in pipeline.
- **Listing momentum**: Kraken shortlisted; community-driven Twitter engagement; Mark Greenberg (ex-Kraken) publicly supportive.
- **Known friction points**: Hardware wallet integration slow; sub-blocks post-roadmap unclear; storage rent UX still "primitive" per discussion.