# Ergo General Chat — 2024-W01 Summary

## Key Topics Discussed

- **Rosen Bridge Operations & Expansion**: The ERG-Cardano bridge launched operationally during this week. Discussion centered on liquidity depth, permit/watcher bottlenecks, ETH bridge timeline (estimated 4–6 months), and token expansion (rsHOSKY added).

- **Mining Pressure & Price Suppression**: Community speculation about coordinated sell pressure from miners or competing ASIC chains (Kaspa, Bitmain). Debate over whether suppression is intentional or market-driven, with recognition that tail emissions (down to 3 ERG) will reduce miner pressure long-term.

- **Exchange Listings**: Recognition that ERG lacks presence on major centralized exchanges (Binance, Kraken, etc.). Barriers include volume thresholds, regulatory friction, and community preference for self-custody reducing on-exchange liquidity. Huobi suspension withdrawal still pending after kushti chased them.

- **Sub-blocks & Protocol Scaling**: Roadmap proposal published for sub-blocks implementation (1-second block times), with discussion of parameters (128th difficulty for 10 confirmations), security implications, and testnet activation. Community enthusiasm; questions about reorg risk and economic incentives for sidechain validators.

- **Oracle Pools v2 & Stablecoins**: Oracle Pool v2 operational in Dexy with GORT rewards. SigmaGold (similar to SigmaUSD but with fission/fusion mechanics) in development; collateral ratio and TVL absorption still TBD. Discussion of Chainlink partnership for Palmyra warehouse receipt oracles.

- **Spectrum DEX & AMM Design**: Community interest in order book–based trading (Trade House) vs. AMM pools; discussion of impermanent loss, Spectrum liquidity pools, and partial order fills on-chain.

- **SigmaFi Lending & Permits**: rsADA lending (up to 200k rsADA) offered with 10–20% interest. Questions about term-length UI bugs and Watcher permit costs (800 ERG + 30k RSN hardcoded). Permit distribution and bottleneck concerns raised regarding Rosen Bridge throughput.

- **Node & Wallet Updates**: Ergo node v5.0.17 → v5.0.18 releases with bug fixes; no reindex required for v5.0.18. Watcher UI 2.2.1 released. Users experiencing indexing issues after full reindex; manual TX refund of permits still pending for bridge incident.

- **Comet Token Listing Campaign**: Successful push to list Comet on CoinGecko, Livecoinwatch, and other aggregators. Yulius Kristianto led outreach; Comet now featured on CoinCarp pending CoinGecko verification.

- **Cardano Integration & rsERG**: rsERG/ERG price parity reached (~$1.81). rsERG/ADA pool liquidity still shallow; community discussing necessity of minswap verified token status and deeper LP incentives to reduce slippage (52% reported for large swaps).

- **Palmyra Ecosystem & Use Cases**: Dan Friedman outlined Oracle Pool v1/v2 integration, zero-knowledge proof verifiable credentials, and proof-of-reserve for decentralized trade financing (warehouse receipts on-chain). Emphasis on ecosystem neutrality—Palmyra not requiring Ergo exclusivity.

- **Bulletproofs & Zero-Knowledge Protocols**: kushti discussed bulletproofs as trustless alternatives to SNARKs, Sigma protocols, and potential for ErgoScript verification of zero-knowledge proofs. Groth one-out-of-many and Zcoin examples mentioned.

---

## Important Decisions or Announcements

- [@Armeanio, msg#464626, 2024-01-01]: Ethereum's PoW hashrate was impressive; miners were "rugged" by the Merge.

- [@Glasgow, msg#465113, 2024-01-02]: Oracle Pools v2 used in Dexy and planned for SigmaGold and Mehan. Oracle framework is open; Ergo oracles underutilized vs. Chainlink.

- [@Dan Friedman (via Armeanio/glasgowm), msg#465474–465487, 2024-01-04]: Rosen Bridge ETH addition groundwork "already started"; estimate ~4–6 months for ETH bridge operationalization.

- [@CML_Bee, msg#465666–465672, 2024-01-05]: CoinMarketLeague agreed to list Ergo blockchain as parent network; green light given by kushti.

- [@filippounits, msg#465711, 2024-01-05]: **Core Development Roadmap (2024):**
  - **Node:** sub-blocks, p2p optimizations, signature re-validation skip, bootstrap improvements, RocksDB migration, modularization for sidechains
  - **Sigma:** v6.0 implementation, validation context extension investigation
  - **Sigma-Rust:** JIT costing, v6.0 feature parity

- [@Glasgow, msg#465703, 2024-01-05]: rsHOSKY wrapped token issued on Rosen Bridge (1B tokens).

- [@Yulius, msg#465804, 2024-01-05]: Spectrum Finance now listed on CoinGecko under Paideia Token Exchanges.

---

## Technical Q&A Worth Preserving

- **Q** (@Ian_Lee, msg#464819): Is there a DEX design that eliminates impermanent loss entirely?
  **A** (@Rj, msg#464820–464822): IL only occurs if asset prices diverge. Mathematically, any exchange requires balanced value—if one asset is taken, equivalent value must be returned. No trustless solution exists without external mechanisms (e.g., oracle-based rebalancing or collateralization).

- **Q** (@Unknown, msg#464918): How does eUTXO compare to other smart contract systems (Reddit discussion)?
  **A** (@HQΣr, msg#464919): Implied recommendation to ask @Avalakta for deeper eUTXO analysis.

- **Q** (@Vinicius, msg#465253): Do I need to reset and reindex my node?
  **A** (@Glasgow, msg#465256): Usually, if restart doesn't help.

- **Q** (@Vinicius, msg#465770–465787): Node stuck in same state after 2-day rescan. Running v5.0.17?
  **A** (@Pulsarz, msg#465782–465784): v5.0.17 reindexed and introduced a bug; v5.0.18 fixed it without requiring reindex. Upgrade to v5.0.18.

- **Q** (@Vinicius, msg#465776): How to drop extra indices without full rescan?
  **A** (@Pulsarz, msg#465778–465779): Delete `history/extra` folder; backup `history` first as precaution.

- **Q** (@Unknown, msg#465198–465212): Current block time is 2 minutes; how is 128th difficulty yielding 1 block/second for sub-blocks? Wouldn't 120th work?
  **A** (@Unknown, msg#465204): 128th likely conservative estimate based on sub-block propagation speed. 1-second sub-blocks feasible for dApps needing fast confirmation (e.g., BlitzTCG) with limited reorg attack incentive for low-value assets.

- **Q** (@Unknown, msg#465241–465242): Do sub-blocks have built-in protocol incentive, or must each sidechain emit new tokens?
  **A** (@Mint_LkV, msg#465247): Implies 100 different tokens needed per sidechain.

- **Q** (@TMR.ΣRG, msg#465724–465732): What metric shows current chain capacity? 12k TXs/day—how much headroom?
  **A** (@Glasgow, msg#465732): ~1M TXs/day at full blocks. Variables (block size, etc.) adjustable as needed.

- **Q** (@Me, msg#465898): SigmaFi loans showing term lengths WAY longer than actual. UI bug?
  **A** (@qx(), msg#465902): Mine showing fine. Which metric is off—block time or month time? [Issue resolved by msg#465919: "Weird... showing correct now."]

- **Q** (@Benny, msg#465942): When bridging rsn to Cardano, received 3 ADA in wallet—feature or accident? Does ERG bridge transfer include ERG for fees?
  **A** (No response recorded in segment.)

- **Q** (@Unknown, msg#465960): Does Ergo Watch have token rich lists?
  **A** (@HQΣr, msg#465963–465964): No, but RankMyWallet dApp is based on that data.

---

## Links Shared

- [https://spectrumxnet.medium.com/spectrum-network-roadmap-2024-d7076650bdec](https://spectrumxnet.medium.com/spectrum-network-roadmap-2024-d7076650bdec): Spectrum Network 2024 roadmap
- [https://www.taptools.io/charts/token?pairID=...](https://www.taptools.io/charts/token?pairID=6af394732c1cae400a6b845f871a79ffbd2e0dadc2a0db7532965882.72734552475f4144415f4e4654): rsERG/ADA pair chart (reached parity ~$1.81)
- [https://t.me/rosenbridge_erg](https://t.me/rosenbridge_erg): Rosen Bridge Telegram
- [https://zeamerch.com/collections/ergo](https://zeamerch.com/collections/ergo): Ergo merchandise store
- [https://www.redbubble.com/shop/?query=ergo%20crypto](https://www.redbubble.com/shop/?query=ergo%20crypto): Redbubble Ergo apparel
- [https://www.cryptee.co/collections/ergo-apparel](https://www.cryptee.co/collections/ergo-apparel): Cryptee Ergo apparel
- [https://tokenjay.app/escrow.html](https://tokenjay.app/escrow.html): TokenJay escrow service (mentioned for wallet sales)
- [https://vxtwitter.com/cometmooning/status/1741900125637644473](https://vxtwitter.com/cometmooning/status/1741900125637644473): Comet community showcase
- [https://www.reddit.com/r/ergonauts/s/vTb0ytmMIe](https://www.reddit.com/r/ergonauts/s/vTb0ytmMIe): Reddit post on Ergo (link to comments)
- [https://t.me/ErgoPlatformCommunity](https://t.me/ErgoPlatformCommunity): Ergo Platform Community supergroup
- [https://t.me/ErgoDevelopers](https://t.me/ErgoDevelopers): Ergo Developers group
- [https://t.me/Ergo_Chats](https://t.me/Ergo_Chats): Master list of Ergo community chats
- [https://www.sigmao.cc/](https://www.sigmao.cc/): SigmaOptions dApp
- [https://ergcube.com/index.php?do=static&page=main2](https://ergcube.com/index.php?do=static&page=main2): ErgoCube p2p marketplace
- [https://twitter.com/MachinaFinance/status/1742085338275680515](https://twitter.com/MachinaFinance/status/1742085338275680515): Machina Finance (Nautilus team) announcement
- [https://sarcophagus.io/](https://sarcophagus.io/): Sarcophagus dead-man's-switch protocol (referenced as inspiration for Ergo equivalent)
- [https://root7z.medium.com/ergo-smart-contracts-partial-review-d45366036913](https://root7z.medium.com/ergo-smart-contracts-partial-review-d45366036913): Orhan's Ergo Smart Contracts Partial Review
- [https://rss.com/podcasts/erg/1291310/?listen-on=true](https://rss.com/podcasts/erg/1291310/?listen-on=true): Ergo Dev Update podcast
- [https://ergoraffle.com/raffle/show/4e036a2cf60e29fd8501b30243da495ee72513e638176b5699dd37568dcec434](https://ergoraffle.com/raffle/show/4e036a2cf60e29fd8501b30243da495ee72513e638176b5699dd37568dcec434): Ergo Raffle (TMR.ERG sponsored)
- [https://www.livecoinwatch.com/price/COMET-_COMET](https://www.livecoinwatch.com/price/COMET-_COMET): Comet listing on LiveCoinWatch

---

## Unresolved Questions

- **ETH Bridge Timeline:** 4–6 month estimate given; dependency on developer funding and Ethereum vault/watcher setup clarification needed.
- **SigmaGold Collateral Ratio:** Not yet finalized; Glasgow mentioned "could be lower than SigmaUSD with improvements."
- **Sub-blocks Economic Incentives:** Mechanism for rewarding sub-block validators (sidechain token emission vs. protocol native) not fully specified.
- **Exchange Listings (Binance, Kraken, etc.):** Barriers (volume requirements, regulatory friction, cost) acknowledged but no concrete timelines provided. ERG volume on decentralized venues needs to increase.
- **Huobi Withdrawal Suspension:** Status still pending after kushti's outreach mid-week.
- **Rosen Bridge Watcher Scaling:** Permit distribution and bottleneck mitigation strategy unclear; potential hard-coding of costs (800 ERG + 30k RSN) noted as constraint.
- **Spectrum Finance & Babel Fees:** Community asked whether Spectrum will implement Babel fee abstraction; no response recorded.
- **SigmaFi Term-Length UI Bug Root Cause:** Resolved spontaneously by user report end (#465919), but underlying cause not documented.
- **Cardano MinSwap rsERG Verification:** Listed but awaiting MinSwap team to add to verified tokens for discoverability.

---

## Notes

- **Community Sentiment:** Bullish on protocol innovation (sub-blocks, sidechains, Rosen Bridge), but frustrated by exchange listing delays and marketing gaps. Self-custody ethos reduces CEX liquidity—noted as both strength (security) and weakness (trading volume).
- **Activity Level:** Moderate to high; mix of technical discussions, price/trading chatter (filtered), ecosystem announcements, and bot spam attacks (deflected by moderators).
- **Participant Diversity:** Core contributors (kushti, Armeanio, Glasgow, qx(), mgPai), ecosystem builders (Dan, Luca, Orhan), and active community (miners, traders, dApp users).