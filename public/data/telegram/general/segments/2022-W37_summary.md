# Ergo General Chat — 2022-W37 Summary
**Period:** 2022-09-12 to 2022-09-18

---

## Key Topics Discussed

- **Post-Ethereum Merge Hashrate Dynamics**: Ergo network experienced dramatic hashrate fluctuation following ETH merge, spiking from ~20-30 TH/s to peaks reported around 170-230 TH/s before settling around 80-120 TH/s. This caused significant difficulty adjustment issues with block times ranging from <1 minute during the spike to 5+ minutes afterward. The difficulty adjustment algorithm (averaging last 8 epochs of 1024 blocks each) was debated extensively; kushti and others defended the conservative design as protection against drift/manipulation attacks while acknowledging short-term pain.

- **Difficulty Adjustment Algorithm Debate**: Extended discussion about whether Ergo's difficulty adjustment (updating every 1024 blocks based on 8-epoch average) should be changed via hardfork. Concerns raised about miner profitability swings and block time volatility. Defenders noted the algorithm protects against coin-hopping attacks and maintains miner governance integrity; faster adjustment (like Ethereum's per-block) would centralize power in large pools. Consensus leaned toward waiting for ecosystem to stabilize rather than rushing hardfork.

- **Mining Pool Centralization Concerns**: 2miners exceeded 50% of network hashrate at points during the week (including solo pool), raising 51% attack concerns. Community pushed for miners to distribute to smaller pools like GetBlok, Herominers, and others. kushti and others noted that while not ideal, actual attack unlikely as pools have incentive to maintain reputation. Hashrate later became more distributed as profitability dropped.

- **Miner Profitability Crisis**: GPU mining became unprofitable across all major coins post-merge. Miners with electricity costs above ~$0.10-0.12/kWh reported mining at loss. Discussions about miners needing to hold/accumulate rather than sell, and various incentive mechanisms like GetBlok's subpools (mining additional tokens like NETA, COMET, ErgoPad). Community emphasized Ergo's unique PoW+smart contract ecosystem compared to RVN/ETC.

- **SigmaUSD Oracle Issues**: Oracle pool updates slowed during high hashrate/slow block periods, with price stuck at $3.69 for extended period. Explained that oracle can only adjust ~2% per epoch (6 blocks), and with 4-minute block times this created delays. Discussion about oracle reliability being tied to block time, and whether this coupling should be reconsidered for sidechain/L2 applications.

- **Ledger Hardware Wallet Status**: Ledger team requested additional changes (displaying recipient addresses) despite previous approvals. @nemo429 and team working on solutions within memory constraints, also hoping to remove max token per transaction limit. No definite release timeline but progress being made. Side-loading version available for advanced users.

- **Ergo Manifesto and Post-Merge Strategy**: Community discussion (organized by kushti) on Sept 17 covered Ergo's positioning post-merge as censorship-resistant PoW alternative. Topics included: external stablecoin risks (USDC/USDT centralization vs SigmaUSD), PoW-backed NFTs/tokens as anti-sybil mechanisms, avoiding Ethereum's path toward regulatory capture, and importance of building true decentralized DeFi infrastructure.

- **Mining Incentives and Token Economics**: Discussions about ways to retain miners included: minting SigmaUSD to fix profits, GetBlok subpools for additional token rewards, potential "miner loyalty" tokens based on time mining, and exploration of market-driven emission contracts. Block reward reduction from 48 to 45 ERG approaching in ~9k blocks during this period.

- **Developer Tooling Updates**: Fleet SDK (JavaScript/TypeScript SDK) progressing to be kept parallel with AppKit, making ErgoScript development more accessible. DeCO providing free ErgoScript courses. Efforts to replicate Ethereum's developer experience while maintaining Ergo's security properties. Node v4.0.43 released with improved memory management for low-resource devices (Raspberry Pi focus).

- **Ecosystem Growth and #DiscoverErgo Campaign**: Sept 15 #DiscoverErgo social media campaign executed with ~$4,500 prize pool, 50 winners selected based on engagement + random selection. Goal was ecosystem education for incoming miners. Significant community participation across Twitter, with projects like ErgoPad and Paideia contributing. Follow-up discussions about making it recurring monthly event.

- **Rosen Bridge Development**: Community excitement about upcoming Rosen Bridge for cross-chain (especially Cardano) connectivity. Clarified that smart contracts are Ergo-side only, other chains just need multisig wallets. Not dependent on Cardano Vasil hardfork (that's for Spectrum DEX on Cardano). Expected to bring significant liquidity and utility expansion.

- **Scaling Solutions Discussion**: Various L2/scaling approaches mentioned: Plasma (GetBlok implementation), Hydra compatibility, rollups, sidechains. Kushti confirmed sidechains with merge-mining coming, with constructions to be published soon. Discussion about PoUW (Proof of Useful Work) potentially on Ergo sidechains as experimental/research direction. No immediate L1 changes planned.

- **Wallets and User Experience**: Nautilus v0.5.3 released with custom GraphQL server support. Terminus wallet (iOS name for Ergo Mobile) emphasized as good option. Yoroi deprecated/not recommended due to sync issues and lack of development. Discussion about integrating ErgoMixer into mobile wallets (technical challenges with needing local execution). 

- **Oracle Pools v2 Development**: Progress on optimized oracle pools mentioned by Armeanio, should be "a lot more efficient" than v1 (live since March 2020). Running for Dexy Gold with GORT rewards. Interest in expanding oracle data beyond price feeds (sports betting, real-world events discussed but uncertain timeline).

- **Upcoming Projects and Launches**: Night Owl Casino targeting mid-October launch (will drive SigmaUSD utility). DuckPools collateralized lending approaching. Auction House IDO announced on ErgoPad. ErgoLend active in Kenya with grants and exploring multisig for cooperatives. Paideia demo coming soon. ErgoHack V (Mining and Minting theme) registration open.

- **GuapSwap Profit-Switching and Fiat On/Off-Ramps**: GuapSwap highlighted as solution for miners to get paid in ADA or other bridged assets via Rosen. Also discussed as on/off-ramp for fiat (running locally, open source). Positioned as key infrastructure for miner support and broader ecosystem access.

---

## Important Decisions or Announcements

- [@kushti_ru, msg#315898, 2022-09-17]: Published sidechains construction coming "soon" with merge-mining support and trustless pegging via smart contracts; better than BIP 301 approach, will enable additional earnings for mainchain miners delivering sidechain data.

- [@Armeanio, msg#315582, 2022-09-17]: Will appear on YouTube channels next week and working with larger pools for additional exchange listings/market access.

- [@kushti_ru, msg#315732, 2022-09-17]: Confirmed Ergo staying on PoW with no plans to switch to PoS; impossible to enforce such change on miners anyway. Emphasized Ergo's unique position with contracts + dApps already deployed.

- [@Ergo_NEWS, msg#315677, 2022-09-16]: Community chat on post-merge crypto landscape scheduled for Sept 17, 5 PM UTC (executed successfully).

- [@kushti_ru, msg#316753/754/755, 2022-09-18]: Ergo protocol reference client v4.0.43 released with significant stability improvements, especially for low-memory devices like Raspberry Pi.

- [@Armeanio, msg#315306, 2022-09-16]: Community post-merge discussion scheduled for Sept 17, 5 PM UTC in both Telegram and Discord.

- [@Capt_Nemo, msg#309814, 2022-09-15]: Ledger team found solution to display recipient addresses within memory limitations; also good chance to remove max tokens per transaction limit. Development continues.

- [@Glasgow, various, 2022-09-15]: Kucoin increased confirmation requirements from 10 to 60 blocks due to hashrate instability; Armeanio confirmed this is protective measure during chaotic post-merge period and actually helps prevent 51% dump attacks.

- [@HQΣr, msg#315829/316423, 2022-09-17/18]: ErgCube video portal seeking community content creators for beginner guides (How to mine, What is Ergo, Wallets) in multiple languages (English, Spanish, Arabic, Chinese, French, Russian, Hindi). Raffle for funding active.

---

## Technical Q&A Worth Preserving

- **Q** (@Foeniculum_NFTs): What are pros and cons of having difficulty update every X hours/days instead of more frequently like other PoW coins?
  **A** (@kushti_ru, msg#315801): Ergo's design is conservative; 2-min blocks and 1024-block epochs are reserves in system parameters. Minimizes additional security assumptions beyond Bitcoin while allowing innovations like mixer/stealth addresses with plausible assumptions (DDH). Protects against drift attacks.

- **Q** (community): Why does Ergo use 8-epoch averaging for difficulty instead of faster adjustment?
  **A** (@kushti_ru, @Armeanio, @Glasgow, multiple): Faster adjustment (Ethereum-style) destroys miner governance by shortening voting periods, giving large pools disproportionate control over protocol changes. Conservative adjustment prevents manipulation and coin-hopping attacks. Trade-off between short-term convenience and long-term security/decentralization. Ethereum's adjustment was potentially gamed by F2Pool.

- **Q** (community): Can difficulty adjustment algorithm be changed?
  **A** (@Flying_Pig, msg#316966): It's in the code and would require a hardfork. Miners control the chain and could propose changes via forum, but significant governance and security considerations must be weighed.

- **Q** (@several): What happens with minting SigmaUSD during oracle delays?
  **A** (@Pulsarz, multiple): Oracle can only adjust ~2% per epoch (6 blocks), and epochs take longer when block times are slow. With 4-minute blocks, updates take ~24 minutes vs normal ~12 minutes. This is by design to prevent manipulation, but creates temporary lag during hashrate volatility.

- **Q** (community): How does hashrate increase affect block rewards and miner earnings?
  **A** (@Flying_Pig, @TMR.ΣRG, multiple): Ergo releases 48 ERG per block (dropping to 45 in ~9k blocks). When hashrate doubles and blocks come faster, each miner makes less per block but there are more blocks per day. When difficulty adjusts up, blocks slow down and miners make even less. System balances over time but creates volatility during adjustment periods.

- **Q** (@HelixEvo, @several): How do I get started mining Ergo and which pool?
  **A** (community consensus): Recommended pools: GetBlok (smartpool with subpool rewards for NETA, COMET, ErgoPad), Herominers, Woolypooly, Enigmapool, Nanopool. Avoid 2miners due to centralization (>50% at times). For software: NBMiner or T-Rex for Nvidia, TeamRedMiner or lolMiner for AMD. Dual mining with ZIL possible on some pools.

- **Q** (@Velvia, msg#315846): When wallet with integrated mixer?
  **A** (@kushti_ru, msg#315859): SafeW already has integration. For mobile, mixer must run locally (can't be "lite" or defeats privacy purpose). Possible as dApp in Mosaik or plugin but requires local execution. Outsourceable mixing still in R&D phase.

- **Q** (@several): Is Proof of Useful Work being considered for Ergo?
  **A** (@Armeanio, @kushti_ru, @Unknown, multiple): PoUW research interesting but experimental, not ready for mainchain. Could potentially be tested on Ergo sidechain in future. Would require massive computing need + valuable/secure chain design. Not current priority vs building out existing ecosystem. Ergo avoiding premature hardforks for unproven concepts.

- **Q** (community): Why is Yoroi wallet not recommended?
  **A** (@MrStahlfelge, @Unknown, multiple): Yoroi has significant syncing problems and hasn't been developed much to keep pace with Ergo ecosystem growth. Recommended alternatives: Nautilus (desktop/browser, best for dApp interaction), Terminus/Ergo Mobile (mobile), Satergo (full node wallet).

- **Q** (@several): How does storage rent work and when will it be collected?
  **A** (@Glasgow, msg#309705): If you receive ERG in multiple boxes (e.g., 20×50 ERG) and send 5 ERG, 19 boxes remain unmoved with old rent timers, only the spent box (45 ERG output) has rent timer reset. To reset all rent timers, send entire balance to yourself in one transaction to consolidate into single box. Storage rent not actively collected yet but boxes age. Future mechanism will allow anyone to collect rent from old boxes.

- **Q** (community): What exchanges list Ergo and which are best?
  **A** (community): Major listings: Kucoin, Gate.io, Huobi (Tier 1), CoinEx, TradeOgre (no-KYC). Binance listing being worked on but requires volume/liquidity. For US: CoinEx popular. Always check `.exchanges` bot command for current list.

---

## Links Shared

- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: Ergo Manifesto - core philosophy document, referenced multiple times during post-merge discussions
- [https://sigmaverse.io/]: Comprehensive list of all Ergo dApps and projects, recommended for newcomers
- [https://cds.oette.info/ergo_diff.htm]: Real-time difficulty monitoring and prediction tool, heavily referenced during hashrate volatility discussions
- [https://miningpoolstats.stream/ergo]: Accurate network hashrate and pool distribution statistics
- [https://ergo.watch/]: Network statistics, emission schedule, SigmaUSD metrics, oracle pool status
- [https://explorer.ergoplatform.com/]: Ergo blockchain explorer
- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.43]: Node v4.0.43 release with memory optimizations
- [https://ergohack.io/]: ErgoHack V registration and information (Mining and Minting theme)
- [https://ergoraffle.com/]: Decentralized raffle platform, used for community fundraising
- [https://storage.googleapis.com/ergo-cms-media/docs/CBT_2020_ZeroJoin_Combining_Zerocoin_and_CoinJoin_v3.pdf]: ZeroJoin whitepaper (ErgoMixer technical foundation)
- [https://www.ergoforum.org/t/proof-of-work-backed-tokens/224]: PoW-backed tokens proposal for anti-sybil mechanisms
- [https://www.ergoforum.org/t/market-driven-emission-contracts/3749]: Market-driven emission contracts ideas for mining incentives
- [https://github.com/ergoplatform/eips/blob/eip16/eip-0016.md]: EIP-16 SigmaUSD oracle update mechanism specification
- [https://allquantor.at/blockchainbib/pdf/meshkov2017revisiting.pdf]: Academic paper on difficulty adjustment algorithms
- [https://docs.ergoplatform.com/dev/protocol/scaling/]: Ergo scaling documentation
- [https://www.reddit.com/r/ergonauts/comments/tsiwr5/autolykos_difficulty_adjustment_is_frustrating/]: Previous community discussion (2021) on difficulty adjustment issues
- [https://medium.com/nikoin/coin-hopping-attack-what-after-a-month-of-bitcoin-hardfork-f5a92151fb7b]: Article explaining coin-hopping attacks that Ergo's difficulty algorithm protects against
- [https://www.youtube.com/watch?v=hx2Qj20IUz4]: ErgoScript course by DeCO for developers
- [https://www.youtube.com/watch?v=CzGqYAlQRWQ]: "What does Ergo do?" introductory video
- [https://github.com/GuapSwap]: GuapSwap open source profit-switching/fiat on-ramp code
- [https://ergcube.com/]: ErgCube video portal for aggregating Ergo educational content
- [https://rankmywallet.com]: Fun tool showing ERG wallet rankings (shrimp/fish/whale etc.)
- [https://discord.gg/pqT4kYnJ]: Ergo Raspberry Pi node Discord community
- [https://curiaregiscrypto.medium.com/sigmausd-vs-the-competition-e70b23fe37a3]: Article comparing SigmaUSD to other stablecoins, discusses CBDC risks
- [https://t.me/ErgoSocials]: Community marketing coordination channel
- [https://t.me/+euA-tOXpQeE1ZTI1]: cNFTcon Vegas fireside chat topic planning group (Dan Friedman)
- [https://www.theregister.com/2021/09/21/sec_cannabis_crowdfunding/]: Article about SEC crackdown on crypto crowdfunding
- [https://rss.com/podcasts/erg/621764/]: Ergo developer update podcast (Sept 18 episode)
- [https://www.huobi.co.tz/en-us/live/detail/h5?id=1663]: Huobi livestream with Ergo (Sept 16)
- [https://twitter.com/pool2miners/status/1570383242704072706]: 2miners statement about hashrate reporting issues
- [https://decrypt.co/109803/ethereum-classic-ravencoin-ergo-hash-rate-soar-post-merge]: Media article on post-merge hashrate distribution
- [https://twitter.com/chepurnoy/status/1570424123884728322]: Kushti tweet on Ergo ecosystem resilience
- [https://www.ergoforum.org/en/]: Ergo forum for governance discussions and proposals

---

## Unresolved Questions

- **Difficulty adjustment hardfork**: Community divided on whether to propose hardfork to change difficulty algorithm. Consensus leaned toward "wait and see" as hashrate stabilizes, but if hopping remains severe issue, formal proposal process through forum remains possibility. Miners control decision via governance. @Benny suggested interim solution: work with WhatToMine and calculators to show longer-term profitability rather than instant snapshots.

- **Oracle pool reliability during high volatility**: Acknowledged that oracle price updates are coupled to block time (slower blocks = slower updates), which creates issues during hashrate swings. @Green_Diamond raised question whether this coupling appropriate for sidechain/L2 applications that may need more frequent price data regardless of mainchain block time. No solution proposed yet.

- **2miners centralization**: Despite community pushback, 2miners maintained >40-50% hashrate for much of week (including solo pool). No technical solution proposed; relies on miner education and choice. Long-term question whether protocol-level incentives could be added to discourage pool centralization (e.g., decreasing rewards as pool size increases, though this creates other issues).

- **Ledger official release timeline**: Still uncertain after multiple review cycles. Latest request (recipient address display) being worked on. No firm ETA provided. Community workaround (side-loading) works but not ideal for mainstream adoption.

- **Binance listing timeline**: Armeanio and team "working on it" with progress mentioned but no specifics. Community noted organic growth preferable to paid listings. Volume/liquidity still seen as barrier. Second "Tier 1" listing in Q4 hinted at but unconfirmed.

- **#DiscoverErgo sustainability**: Successful one-time event with ~$4,500 prize pool from donations. Question raised whether it could be monthly recurring campaign. Concerns about funding sustainability without continuous donations. @kushti_ru offered to donate to future raffles. No formal decision on frequency/structure.

- **Miner retention mechanisms**: Various ideas floated (loyalty tokens, improved subpools, direct SigmaUSD payouts) but nothing concrete implemented beyond GetBlok's existing subpool system. Question remains how to keep miners engaged during unprofitable periods without changing core protocol.

- **Night Owl Casino regulatory risk**: @Unknown raised concern about potential US regulatory action against mixer and raffle creators (referencing Tornado Cash arrests). @Glasgow noted ErgoMixer creator anonymous and no hosting point of failure. Raffle more gray area; ultimate liability question "up to DAO." No formal risk assessment or mitigation plan discussed.

- **Proof of Useful Work research**: IOG published Ofelimos paper on PoUW. Community interested in Ergo exploring this (possibly on sidechain) but kushti noted it requires concrete computing need and careful design. Coordination with Cardano suggested but no active initiative. Left as "interesting future research direction."

- **Sports betting oracles**: Multiple mentions of interest (World Cup coming up, NightOwl Casino potentially adding sports betting, Spreadly project in early dev) but no clear timeline or technical solution for getting sports data on-chain reliably. Left as "we'll see" for ErgoHack V.

- **Scaling solution priorities**: Various L2 approaches mentioned (Plasma, Hydra, rollups, sidechains) but no clear roadmap on which will be prioritized or when. Kushti confirmed sidechains with merge-mining coming "soon" but details pending. Spectrum discussing layer 2 for their DEX. No unified scaling strategy communicated.

- **Mining after emission reduction**: Block reward drops from 48 to 45 ERG in ~9k blocks (approaching during this week). Question raised what happens to miner profitability/retention. In ~4 years drops to 3 ERG. Long-term sustainability relies on transaction fees + storage rent + sidechain opportunities, but concrete models not fully explored. Community acknowledged this as critical but distant concern.

- **AnetaBTC code review status**: @Frosty said code not yet shared with Sam (core dev reviewer), timeline uncertain. Community waiting for transparency. No update on completion by end of week.

- **#DiscoverErgo prize distribution**: Winners not announced by end of week. @HQΣr noted team analyzing data to select 50 winners (25 by engagement, 25 random). Multiple people asked about timeline; marked as "soon."