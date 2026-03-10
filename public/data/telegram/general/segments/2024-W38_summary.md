---
title: "Ergo General Chat — 2024-W38"
date_start: "2024-09-16"
date_end: "2024-09-22"
type: telegram_weekly
channel: general
week: "2024-W38"
source: telegram
message_count: 417
categories: [technical, bridges, mining, ecosystem, defi, wallet, community]
key_terms: [storage rent, percentage-based fees, ledger state cleanup, garbage collection, NIPoPoWs, superblocks, difficulty levels, block propagation, input blocks, Rosen Bridge, Ethereum, sigUSD, Bitcoin Runes, cross-chain, Lithos, NISP, decentralized mining pools, MEV, collateralized pool, ErgoNames]
---
# Ergo General Chat — Week 2024-W38 Summary

## Key Topics Discussed

- **Storage Rent Philosophy & Design**: Discussion on why storage rent is a fixed fee rather than percentage-based, with kushti explaining it charges for space in the replicated ledger state and garbage cleanup, not to incentivize wallet fragmentation. [msg#514456]

- **NIPoPoWs Superblocks & Difficulty Targeting**: Detailed technical exchange on how superblock levels work—each level targets 2x lower frequency than the previous, with difficulty adjusted accordingly. Level 1 superblocks occur ~2x less often than normal blocks on average. Miners don't know block role until PoW output is computed. [msg#514474–514507]

- **Sub-blocks & Network Propagation Under Lithos**: Patato raised concerns about orphan sub-blocks at global scale with many distributed Lithos mining nodes; kushti clarified that sub-block count per block averages the same regardless of hashrate or miner count. Discussion touched on network propagation collisions with 1-second target times. [msg#514510–514664]

- **Rosen Bridge Ethereum Integration**: Final tests underway for Ethereum joining the bridging network. Native token listings, Bitcoin Rune support, and potential Doge support planned. [msg#515176]

- **Speed Improvements & Block Parameters**: kushti outlined discussion channel for testing faster blocks on devnet—tweaking difficulty, block time, and other parameters. Emphasized need for scientific observations; noted some dApps rely on block height/timestamp, so changes require careful analysis. Testnet ready for motivated community members. [msg#514506–515006]

- **Order Book vs AMM DEXes**: qx() explained Trade House (order book DEX) advantages: total transparency of depth/liquidity, full slippage control, peer-to-peer matching, and support for partial fills—contrasted with AMM designs. Highlighted visual tooling and arbitrage opportunities. [msg#514819 context]

- **ErgoNames Contract Development**: mgpai reported contracts nearly complete; ran first end-to-end minting on testnet over weekend. [msg#515264]

- **Lithos Decentralized Mining**: Cheese Enthusiast working on NISP contracts using 6.0 devnet, researching different NISP constructions and MEV support. Forum post available. [msg#514927]

- **Peer-to-Peer Finance & Alternative Monetary Systems**: kushti discussed building peer-to-peer economies on p2p networks using blockchain tooling (Lightning, ChainCash, smart contracts, trustless derivatives). Raised ROSCAs, unstealable donations, and FBDC (free banking digital currencies) as use cases. Referenced Stokvel (South African rotating credit systems) as real-world model. [msg#515397–515418]

- **Fee Markets & Mempool Spam Protection**: Detailed analysis of how spam attacks work—low-fee txs timeout in mempool after ~hours if miners ignore them; fee estimation APIs exist but underutilized by wallets. Mention of reference client v4.0.44+ spam limits. [msg#514518 context, full discussion in dev chat]

- **Exchange Listings & Standards**: Lbank (rank 17, $1.5B daily volume) proposed listing with 40k total fee (20k USDT + 20k tokens). kushti noted Ergo already listed on free exchanges (Bitmart, Bitrue) with healthy orderbooks; questioned model. [msg#515361–515423]

## Important Decisions or Announcements

- [@kushti khushi, msg#514624, 2024-09-16]: Will write several Medium posts covering Rosen Bridge intent, design, and hoped-for user/project benefits. Community-based marketing efforts encouraged via ErgoSocials Telegram group.

- [@kushti khushi, msg#514672, 2024-09-17]: Watcher service operators requested to update to version 3.2.2 (fixes ogmios parallel connections issue and health check threshold). Docker pull/down/up commands provided.

- [Ergo NEWS $ERG, msg#514681, 2024-09-17]: Ergo Foundation approved $12K grant for Cyberverse gaming project for marketing, community engagement, and ecosystem expansion.

- [@kushti khushi, msg#514793, 2024-09-17]: Next 6.0 devnet release scheduled for Thursday (2024-09-19).

- [@Armeanio, msg#514808, 2024-09-17]: Ethereum deployment nearing completion—UI done and tested, under final review. "Less than two weeks" to go live. [qx() noted this an unusually specific timeline from Armeanio.]

- [@kushti khushi, msg#514927, 2024-09-18]: Lithos developer Cheese Enthusiast published forum post on Decentralized Mining and Non-Interactive Share Proofs; team researching NISP constructions and MEV support on 6.0 devnet.

- [@kushti khushi, msg#515264–515265, 2024-09-19]: mgpai update on ErgoNames (contracts nearly done, testnet minting successful) and Keystone hardware wallet (breaking up tasks for bounties).

- [Ergo NEWS $ERG, msg#515608, 2024-09-22]: **Weekly Ecosystem Update:**
  - Nautilus wallet v0.14.0 with Transaction History support released
  - Ergo Foundation: $12K grant to Cyberverse
  - Ergo reference client 6.0.0-alpha1 for devnets released
  - MewFinance v1 whitepaper published
  - Fleet SDK 0.7.0 with new features released
  - Sigmaspace.io working on Explorer API (3 endpoints implemented)
  - TradeHouse (orderbook DEX) and Gluon (ERG-backed stablecoin) in production
  - **Next emission reduction in 14 days** (2024-10-06)

- [@Yulius Kristianto, msg#515501 & msg#515529, 2024-09-21]: Added Javanese language support to Ergo Explorer and Satergo wallet.

## Technical Q&A Worth Preserving

- **Q** (@Patato, msg#514474): What is the NIPoPoWs superblocks target time/difficulty (how many normal blocks until a superblock on average)?
  **A** (@kushti khushi, msg#514475–msg#514487): Superblocks exist at different levels. Level 1 superblocks come ~2x less often on average. Each next level is 2x less frequent. Within short periods, you may see same pattern due to probability variance. Difficulty targets maintain this schedule. [Reference: nipopows.com]

- **Q** (@Patato, msg#514488): Is level 3 difficulty target = level 2 difficulty × 3?
  **A** (@kushti khushi, msg#514490): No, every next level is ×2, not ×3.

- **Q** (@Patato, msg#514510): With Lithos mining nodes spread globally, won't sub-block propagation cause many orphans and problems?
  **A** (@kushti khushi, msg#514662): Number of sub-blocks per block on average stays the same regardless of hashrate or miner count. Orphaning risk does not scale with decentralization in the way described.

- **Q** (@Patato, msg#514512–msg#514513): How does Lithos work exactly—is it like solo mining where each miner configures their node independently but shares rewards?
  **A** (@cannon_q, msg#514514): Sounds like a collateralized pool where several can input shares (doesn't necessarily have to be solo). [Incomplete answer; Lithos whitepaper/forum should be consulted for full details.]

- **Q** (@Patato, msg#514664): Won't 1-second sub-block target time cause significant collisions on a global network with thousands of mining nodes?
  **A** (@kushti khushi): [Acknowledged the concern but deferred detailed response; implies further discussion warranted.]

- **Q** (@qx(), about faster blocks, general context): What about applications that rely on block height/timestamp for logic?
  **A** (@kushti khushi, msg#515001–msg#515004): Some dApps (emission contracts) are tied to block height and timestamp. Changing block time would affect these; need careful analysis of worst-case scenarios and security implications. Not all can be instantly optimized.

- **Q** (@cannon_q, msg#515391): What's Lbank's MM requirement and does it address a gap vs. existing exchanges (Gate, KuCoin, MEXC, Coinex, HTX)?
  **A** (@Killian Mexc, msg#515393 & msg#515423): MM required: 10k USDT + 10k token value (tokens redeemable anytime; USDT redeemable 1 month post-listing). Lbank currently #17 on CMC/CG with $1.5B+ daily volume, higher than KuCoin, Bitget, Kraken, Bitmart today. [Implies liquidity/volume advantage; specific gap vs. existing Ergo listings not directly answered.]

- **Q** (@kushti khushi, msg#515367, to Killian Mexc): Why charge listing fees when users & other people can provide liquidity and the exchange profits from trading fees naturally?
  **A** (@Killian Mexc, msg#515373): This is standard practice; all exchanges charge listing fees. [@kushti countered that Ergo listed free on Bitmart and Bitrue with healthy orderbooks, questioning the necessity.]

- **Q** (@Shiv Chauhan, msg#515472): Error: "transaction exceeds input boxes limit" when transferring ERG.
  **A** (@HQΣr, msg#515476): Consolidate your boxes using tools.ergexplorer.com.

- **Q** (@ThatOtherFella, msg#515460): What are the Sigmanauts tokens that were airdropped to me?
  **A** (@cannon_q, msg#515461): No one knows. They are not from the Sigmanauts DAO. [Later corrected as a misunderstanding by participants.]

## Links Shared

- [https://sigmanauts.com/podcast/](https://sigmanauts.com/podcast/): Dev update as audio podcast
- [https://nipopows.com/](https://nipopows.com/): NIPoPoWs technical reference (kushti recommended for superblock details)
- [https://curiaregiscrypto.medium.com/rosen-bridge-origins-understanding-problems-frustrations-with-current-gateways-and-gatekeepers-751900d19b9c](https://curiaregiscrypto.medium.com/rosen-bridge-origins-understanding-problems-frustrations-with-current-gateways-and-gatekeepers-751900d19b9c): Medium post on Rosen Bridge origins, problems with gateways
- [https://t.me/ErgoSocials](https://t.me/ErgoSocials): Community-based marketing group
- [https://github.com/rosen-bridge/watcher/releases/tag/3.2.2](https://github.com/rosen-bridge/watcher/releases/tag/3.2.2): Watcher service 3.2.2 release (ogmios, health check fixes)
- [https://www.ergoforum.org/t/decentralized-mining-and-non-interactive-share-proofs/4860](https://www.ergoforum.org/t/decentralized-mining-and-non-interactive-share-proofs/4860): Lithos/Cheese Enthusiast forum post on Decentralized Mining and NISP
- [https://api.sigmaspace.io/docs#/](https://api.sigmaspace.io/docs#/): Sigmaspace Explorer API (compatible with ergoplatform explorer API)
- [https://ergoauctions.org/trade](https://ergoauctions.org/trade): TradeHouse orderbook DEX
- [https://www.gluon.gold/](https://www.gluon.gold/): Gluon ERG-backed stablecoin
- [https://ergo.watch/dashboards/emission](https://ergo.watch/dashboards/emission): Emission reduction dashboard
- [https://github.com/ergoplatform/explorer-frontend/pull/198](https://github.com/ergoplatform/explorer-frontend/pull/198): Ergo Explorer language support PR (Javanese added by Yulius)
- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-alpha1](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-alpha1): Ergo 6.0.0-alpha1 devnet release
- [https://x.com/Mew_finance/status/1835727821123014968](https://x.com/Mew_finance/status/1835727821123014968): MewFinance v1 whitepaper announcement
- [https://www.investopedia.com/terms/r/rotating-credit-and-savings-association.asp](https://www.investopedia.com/terms/r/rotating-credit-and-savings-association.asp): ROSCA explanation (referenced for peer-to-peer finance use case)
- [https://en.m.wikipedia.org/wiki/Stokvel](https://en.m.wikipedia.org/wiki/Stokvel): Stokvel (South African rotating credit system)
- [https://tools.ergexplorer.com](https://tools.ergexplorer.com): Box consolidation tool

## Unresolved Questions

- **Sub-block propagation at scale**: Patato raised detailed concerns about orphan sub-blocks when Lithos achieves thousands of globally distributed nodes; kushti provided high-level reassurance but deeper technical analysis/simulation results not provided in chat.

- **Faster block times & application compatibility**: Discussions on speeding up Ergo identified applications tied to block height/timestamp but concrete path forward (which apps to modify, feasibility, timeline) left open. Community testnet channel created but no committed volunteers named.

- **Language localization strategy**: Yulius added Javanese support to Ergo Explorer and Satergo; Giufa proposed electing "Ergo representatives for each linguistic territory" to scale community engagement beyond English. kushti acknowledged but no formal decision announced.

- **Kraken listing status**: Multiple users asked about Kraken listing; kushti stated no public info released before exchange announcement, but ongoing status unclear. [msg#515254, msg#515082]

- **Fee market dynamics under higher throughput**: Detailed spam/mempool discussion raised but no clear Ergo-specific roadmap for fee estimation API adoption by wallets or protocol changes.

- **VC investment contact**: Khalid Hasan asked who handles VC deals; HQΣr suggested shooting offer to them, but no formal ecosystem investment function/process clarified. [msg#515569–msg#515597]

---

**Chat Quality Notes:**
Week had significant off-topic/personal philosophy threads (msgs #514588–#514748 re: German labor market, social systems, etc.) and spam from user "Simon" discussing Bitcoin hacks and YouTube subscribers. These were muted by kushti. Core technical discussions were high-value; community engagement on localization, marketing, and ecosystem expansion active.