---
title: "Ergo General Chat — 2020-W37"
date_start: "2020-09-07"
date_end: "2020-09-13"
type: telegram_weekly
channel: general
week: "2020-W37"
source: telegram
message_count: 0
categories: [wallet, mining, ecosystem, defi, community, bridges, technical, marketing, governance]
key_terms: [Magnum wallet, Yoroi, Coinbarn, wallet security, Ledger support, mining profits, daily emissions, hashrate, difficulty, miner dumps, halving schedule, Hotbit, exchange listing, Binance, KuCoin, liquidity, trading volume, USDT pair, oracle pools, Emurgo partnership]
---
# Ergo General Chat — Week 2020-W37 Summary

## Key Topics Discussed

- **Wallet Support & Integration**: Magnum wallet availability, discussion of Yoroi integration timeline, Coinbarn desktop wallet, and upcoming Ledger support. Magnum browser-based wallet has cache/syncing issues requiring periodic restoration.

- **Exchange Liquidity & Listing**: HotBit as primary exchange with thin order books and high spreads. Discussion of potential listings on Gate.io, KuCoin, OKEx, and Binance. Community concern about low liquidity limiting price discovery and large position entry/exit.

- **Emission Schedule & Mining Economics**: 67.5 ERG block reward halving schedule (3 ERG reduction every 3 months starting July 2021). Mining profitability analysis: ~$1.72/day for Radeon VII at 10 TH/s network hashrate; more profitable to mine ETH and swap. Discussion of large mining operations dumping daily (~25-40k ERG/day), with hashrate reaching 11.45 TH/s by end of week.

- **Oracle Pools Architecture**: Oracle Pools v1 run by EF members and external parties; Oracle Pools v2 running for Dexy Gold with GORT rewards. Discussion of trustless oracle design using Ergo's data-inputs and Sigma protocols, with Chainlink partnerships under consideration.

- **Node Setup & API Issues**: Users reporting difficulty with node API key configuration and "Bad API" errors. Fee estimation API exists but untested; standard fee is 0.001 ERG/kb, exchanges paying 0.01 ERG/kb.

- **Mixer & Privacy**: Non-interactive, non-custodial mixer (ErgoMixer) launched; first in space with potential for global public privacy guarantees over time. ZK Treasury client app demonstrated with 3-of-5 multisig spending condition.

- **Network Parameters & Speed Improvements**: Discussion of possible micro-blocks, sidechains, and layer-2 solutions. Block height vs. timestamp dependencies for dApps. Self-amending protocol allows miners to adjust parameters (block size, computational cost) without hard forks.

- **Stablecoin Development**: SigmaUSD stablecoin project pushed from October to December 2020 (end-of-year target). Expected to live on both Ergo and Cardano with interoperability features.

- **DEX & Order Book Design**: Trade House (order book DEX) vs. AMM-style pools. Order book advantages: total transparency, full control over slippage, partial fills. Comparison to MuesliSwap on Cardano (first DEX, order book model).

- **Cardano-Ergo Relationship**: Emurgo partnership (not IOHK directly). Ergo positioned as testbed for dApps due to architectural similarities and earlier road-readiness than Cardano pre-Goguen. Research-heavy but separate projects.

- **Rich List & API**: Live balances API endpoint deployed: `https://api.ergoplatform.com/addresses/balances` (in nanoERGs). P2S address encoding (prefix + script + checksum) unique to Ergo; shortest example: `4MQyML64GnzMxZgm` (true script, spendable by anyone).

- **Development Releases**: v3.3.2 finalized and released during week. Ledger implementation expected for testing "soon"; Ledger's audit timeline unknown.

---

## Important Decisions or Announcements

- [@kushti, msg#51710, 2020-09-10]: Reddit community channel created at `/r/ergoplatformorg` as official Ergo subreddit.

- [@kushti, msg#51612–51627, 2020-09-10]: Rich-list API call completed; balances accessible via browser at `api.ergoplatform.com/addresses/balances`. Top addresses: emission contract (locked), dev fund (~90% locked), HotBit, Tidex, Waves gateway, CoinEx, ProBit.

- [@kushti, msg#51733–51737, 2020-09-10]: v3.3.2 finalized and released within days. ErgoMixer and ZK Treasury highlighted as first applications with usable UI. Oracle Pools positioned as infrastructure. Roadmap focus: DEX protocols, stablecoins.

- [@kushti, msg#51862–51864, 2020-09-11]: v3.3.2 release announced via Twitter; GitHub release link provided.

- [@Unknown, msg#51989–51992, 2020-09-11]: "Real test for community is coming, can be even this or next week." Community cooperation required to "break that tier1 requirement together."

- [@Sebastien | Midnight / Starstream, msg#52426, 2020-09-13]: Yoroi Ergo integration delayed due to personal leave and Shelley hardfork upgrade. Remaining work: tx history backend and tx sending page. Updates to follow.

- [@Unknown, msg#52198, 2020-09-12]: Announcement of "3M in next few days" (reference unclear; likely refers to 3 million blocks or similar milestone).

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown): How do I store ERG on Waves?  
  **A** (@Kookster, msg#50793): "For waves there is a gateway" (WAVES-Ergo bridge available).

- **Q** (@Unknown): What is EFYT vs ERG?  
  **A** (@Kookster, msg#51236): "Efyt was airdropped prior to mainnet and later exchanged for Erg at 1:1" (Ergo First Year Token).

- **Q** (@Unknown): Why are emission contract and dev fund addresses so long?  
  **A** (@kushti, msg#51629–51630): They correspond to complex scripts directly; you can decode a script for the address (P2S encoding).

- **Q** (@Richi [MANA]): Is there 51% attack prevention and checkpoint usage? Concerns about 8-year emission window?  
  **A** (@Unknown, msg#51970): Honest mining assumption built-in; community can rewrite code if attacked. Emission schedule allows miner parameter adjustments without hard forks (self-amending protocol).

- **Q** (@Unknown): How do I set up a full node and generate an API key?  
  **A** (@Unknown, msg#51290): GitHub wiki at `https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node` provides hints. API key hash goes in quotes in config; node requires proper format.

- **Q** (@Unknown): What's the syncing time for a full Ergo node?  
  **A** (@ponte, msg#52113): "Mine took about 4 hours but I got a weak CPU and slow connection."

- **Q** (@Unknown): How do I buy ERG smartly on HotBit without premium?  
  **A** (@Damon AndTheSea, msg#52377): No market buy option; manually buy from order book. Thin books force buying up the book; hidden sell walls complicate entry. Limit orders possible but risk of non-fill.

- **Q** (@Gregg из Аризоны): Where is a compiled Ergo contract kept vs. Ethereum?  
  **A** (implied, msg#52446): Ergo contracts live in UTXOs (not at a single address); eUTXO model allows state distribution across chain.

- **Q** (@Unknown): Can I add ETH/USD oracle pair to Ergo oracle pools?  
  **A** (unresolved): Topic raised (msg#52447) but no answer recorded.

---

## Links Shared

- [https://github.com/coinbarn/coinbarn-extension]: Coinbarn wallet extension (noted as dead/no longer maintained).

- [https://ergo.kioskweb.org/]: Kiosk online instance for ErgoScript experimentation.

- [https://www.ergoforum.org/t/ergoscript-playground-using-kiosk/96/4]: ErgoScript Playground guide.

- [https://explorer.ergoplatform.com/en/addresses/4MQyML64GnzMxZgm]: Explorer view of shortest P2S address (true script).

- [https://ergoplatform.org/en/blog/2019_07_24_ergo_address/]: Blog post on Ergo address encoding and P2S.

- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263]: Oracle Pools design forum thread.

- [https://www.ergoforum.org/t/improved-distributed-signatures/366/4]: ZK Treasury client app example with multisig spending.

- [https://explorer.ergoplatform.com/en/blocks/afe8abfb478a561386ffc2bebfc55fb236fd1eef90fb1ebd69c0c69a21158432/transactions]: Joint spending transaction example from ZK Treasury.

- [https://www.ergoforum.org/t/simple-crowdfunding/70/19]: Crowdfunding discussion thread.

- [https://github.com/robkorn/ergo-crowdfunding-cli]: Crowdfunding CLI tool.

- [https://www.ergoforum.org/t/l0-l1-improvements-plan/374]: Layer 0/Layer 1 improvements roadmap discussion.

- [https://github.com/ergoplatform/eips/pull/23]: Yoroi Ergo integration proposal (EIP, MetaMask-like dApp connector).

- [https://iohk.io/en/blog/posts/2017/03/05/centralized-cryptocurrencies/]: IOHK blog post on centralized cryptocurrencies (cited as early reference supporting Ergo vision).

- [https://www.youtube.com/watch?v=QcNZYhAa2xU]: Cardano Effect podcast featuring Robert (Ergo). Community highlighted as excellent introduction to Ergo for broad audiences.

- [https://www.coingecko.com/en/coins/ergo]: CoinGecko Ergo page (markets, price data).

- [https://t.me/ergo_mining]: Official Ergo Mining Telegram channel.

- [https://t.me/ergo_news]: Ergo announcements channel (noted as not frequently updated).

- [https://api.ergoplatform.com/addresses/balances]: Live rich-list API (balances in nanoERGs).

---

## Unresolved Questions

- **YYoroi integration timeline**: Originally promised "this month" (September), then "2-3 months," then Seba (@Sebastien) moved it to Q4 (October–December). No firm date given.

- **Major exchange listing status**: Speculation about HotBit, KuCoin, Gate.io, OKEx, and Binance. Gate.io raid during week added uncertainty. No confirmed listings or timelines.

- **Hashrate concentration & mining cartel dynamics**: Large miner dumping ~25-40k ERG/day. BigEvilSoloMiner private optimizations not public. Debate over whether emissions are sustainable vs. miner sell pressure.

- **Stablecoin deployment date**: Originally October, moved to December 2020. Robert indicated "real test for community coming" but specifics unclear.

- **Chainlink vs. Ergo oracle partnership**: Dan mentioned utilizing Chainlink for Palmyra (trade financing), but also plans to build native Ergo oracles. Scope of Chainlink integration unclear.

- **"Tier 1 requirement" mentioned by Unknown (msg#51992)**: What does breaking this requirement mean? Context vague.

- **Magnum wallet cache issue**: Root cause (CCleaner interaction?) not definitively resolved; rebuilding with seed phrase a workaround but not root fix.

- **Sidechain constructions publication**: kushti mentioned intent to "publish sidechain constructions soon" for discussion and implementation (msg#51980–51981 context), but no timeline or forum link.

- **ETH/USD oracle pairs**: Whether custom pairs (beyond ERG/USD) can be added to oracle pools remains unaddressed.

- **dApp smart contract dynamic generation**: CryptoTeller asked if ErgoScript can dynamically generate contracts (loyalty tokens, etc.). No direct answer recorded, but general discussion of future tooling (game-engine-like GUI builders) mentioned.

---

## Notable Community Sentiment

- **Price volatility frustration**: Large market dump on 2020-09-10 (~200k ERG sold at 4,000 sats) triggered extended debate over miner dumping vs. profit-taking. Community split on cause and sustainability.

- **Exchange listing desperation**: Repeated calls for Binance, KuCoin, or larger venue listing. Consensus that HotBit liquidity insufficient for serious traders and price discovery.

- **Technical confidence high**: Despite price pressure, sentiment toward team, partnerships (Emurgo, Cardano), and technology remains strongly positive. Charles Hoskinson mention resonated with newcomers.

- **Schism on marketing**: Some argue for influencer promotion (YouTube shills); others defend organic, fundamental-driven growth model. No resolution; both views represented.

---

## Key Personnel Visible This Week

- **@kushti** (Alexander Chepurnoy): Core developer. Updates on releases, API features, hashrate milestones, roadmap.
- **@Sebastien | Midnight / Starstream**: Yoroi developer. Ergo integration progress and technical details.
- **@Unknown (likely Martin or team member)**: Provides detailed technical and philosophical commentary on mining, protocol design, partnerships.
- **@Damon AndTheSea**: Active community member with deep market and technical knowledge; explains price/liquidity dynamics.
- **@Robert (referenced via podcast)**: Emurgo developer; excellent at translating Ergo concepts to broad audiences per Cardano Effect podcast.