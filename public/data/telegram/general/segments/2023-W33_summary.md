# Ergo General Chat — 2023-W33 Summary

## Key Topics Discussed

- **Centralized Exchange Access & KYC Requirements**: Community discussed the difficulty of buying ERG from US/Canadian users, with KYC requirements closing off exchanges like Kucoin. Solutions mentioned included DEX bridges (wrapped ERG on Uniswap via BSC bridge), peer-to-peer trades, and non-KYC CEXes (TradeOgre, SimpleSwap, CoinEx).

- **DuckPools Launch & Reception**: DuckPools (lending protocol using Quacks token as collateral) launched successfully with strong TVL growth. Community praised the working DeFi infrastructure with high APY rates (SigmaUSD loans at 51% APY on DuckPools, similar on SigmaFi). Noted as evidence of community confidence in Ergo ecosystem.

- **Block Propagation & Speed Improvements**: Discussion of whether to implement faster block times (sub-blocks vs. sidechains vs. layer 2 solutions). kushti noted that concrete application analysis is necessary before optimization; current contract set (GARD protocols, Rosen, Oracle Pools, Spectrum AMM, Trade House, lending contracts, stablecoins) provides sufficient real-world workload for benchmarking.

- **Ledger Hardware Wallet Support**: Ongoing work on second iteration of Ledger integration. Key blocker is 20-token limit; Merkle tree solution being explored. EIP-44 approval now open the path for arbitrary data signing capability.

- **Satergo Node Installer Improvements**: Aberg (Satergo dev) working on UI checkboxes for full node, NIPoPoW, and UTXO set snapshot configuration. Currently requires manual config file editing and `.ergo` directory deletion. Discussion of HOCON parsing complexity vs. regex-based approaches.

- **Rosen Bridge Testing & Mainnet Timeline**: Test bridge shutting down by Saturday 2023-08-16. Bridge team actively testing and fixing bugs, preparing Docker images and executables. Community asking for mainnet ETA; mid-October mentioned as probable.

- **Bitpanda Listing Raffle Campaign**: Community fundraiser for Ergo listing on Bitpanda raised 3560 ERG in 3 days with goal of 8575 ERG. Concerns raised about slow progress and community engagement; debate over whether fundraising indicates ecosystem strength.

- **GreasyCEX Development & Missions**: GreasyCEX NFT event and "greasy missions" driving community engagement and liquidity provision on decentralized exchanges. Comet wallet, MewMart, and related projects being incentivized through mission-based rewards.

- **Transaction Batching & Mempool Performance**: qx() successfully tested 600-transaction HODL burn chain, achieving ~1.0139 ERG per HODL token through coordinated multi-tx batches. Discussion of mempool limits (~1000 tx capacity), fee markets, and transaction chaining strategies for large distributions.

- **Hodlcoin Contract Incident**: Hodlcoin v1 had contract drainage incident; Luivatra noted DuckPools issue is less critical. Discussion about importance of testing protocols before release.

- **Marketing & Community Visibility**: Community debate about need for short, graphical explainer videos for major dApps (DuckPools, Machina Finance, Rosen Bridge) vs. reliance on long-form podcasts. Counter-argument that focus should be on real-world use cases and applications rather than pure marketing optics.

---

## Important Decisions or Announcements

- [@Glasgow｜WON'T DM, msg#422354, 2023-08-15]: Ledger integration second iteration specs in progress. Merkle tree solution for 20-token limit being explored; EIP-44 approval opens path for arbitrary data signing.

- [@kushti (kushti khushi), msg#422606, 2023-08-16]: Rosen Bridge status update — still testing and fixing bugs, preparing Docker images and executables. Current test bridge shutting down by Saturday; users advised to redeem tokens ASAP.

- [@Sam L, msg#422610, 2023-08-16]: Catalyst funding proposals from Ergo projects live: Spectrum, Paideia/ErgoPad, Rosen Bridge (with watcher set bootstrap), and zenGate (Palmyra). Voting deadline Friday 2023-08-18 for ADA holders.

- [@Ergo NEWS $ERG, msg#422067, 2023-08-14]: Bitpanda raffle campaign live with goal of 8575 ERG. Early progress: 3560 ERG raised in 3 days.

- [@Glasgow｜WON'T DM, msg#422726, 2023-08-17]: DuckPools added to DefiLlama. Ergo TVL exploding; Ergo at #68 overall with ~12x Mcap/TVL ratio, ahead of NEAR, DOT, and ONE.

- [@Aberg Satergo dev, msg#422129, 2023-08-14]: Satergo node installer improvements planned, including UI checkboxes for full node, NIPoPoW, and UTXO set snapshot when NIPoPoW support added to UI.

- [@Ergo NEWS $ERG, msg#422745, 2023-08-17]: Weekly update and AMA live stream scheduled for Thursday Aug 17 at 1 PM UTC on YouTube.

- [@Koutelier || WONT DM, msg#422184, 2023-08-19]: Comet Wallet v1.0.2 released with Bahasa Indonesia language support.

---

## Technical Q&A Worth Preserving

- **Q** (@Mike 💠, msg#422350, 2023-08-15): When will Ergo get full Ledger support? It's been awhile with only dev mode.
  **A** (@Glasgow｜WON'T DM, msg#422354): Specs for second iteration underway based on Ledger feedback. Merkle Trees being explored for 20-token limit; EIP-44 approval now open for arbitrary data signing.

- **Q** (@Mike 💠, msg#422356, 2023-08-15): Won't splitting 500+ tokens across 20-token transactions create excessive exchange withdrawal fees?
  **A** (@qx(), msg#422357): 20-token limit refers to distinct token types, not quantity. You can send 500+ ERG in one transaction; limit only applies when sending 20+ different token *types* together.

- **Q** (@MavΣrickBg (bober), msg#422119, 2023-08-14): How do I run the ergo-vanitygen tool for custom address generation?
  **A** (@Aberg Satergo dev, msg#422121): Install Java (adoptium.net recommended for Windows), download JAR from releases page, run the command. [GitHub link provided](https://github.com/jellymlg/ergo-vanitygen/releases/tag/v1.0)

- **Q** (@qx(), msg#422095-#422101, 2023-08-14): Is there a tool to pick specific seed phrase digits?
  **A** (@qx()): ergonames.io is in development; earlier lookup tools existed. Pulsarz identified it was built by Hailey (SafeW author). Tool handles first few digits via brute-force search.

- **Q** (@qx(), msg#422143, 2023-08-14): How to update HOCON config files programmatically in Satergo?
  **A** (@Aberg Satergo dev, msg#422147-#422155): Switched from regex to HOCON library parser due to multiple valid HOCON formats. New utility method handles read/write with format specification; simple one-call usage pattern.

- **Q** (@qx(), msg#422762, 2023-08-17): Has Herominers implemented storage rent utilization for pool participant payouts?
  **A** (@qx()): Inquiry pending response from Herominers; kushti has used storage rent concept for group lending with raffle component.

- **Q** (@lexymon, msg#422596, 2023-08-16): How to stabilize block time fluctuations (e.g., 15-minute blocks)?
  **A** (@Flying Pig (™), msg#422597; @Gazza ｜WON'T DM, msg#422600): Sub-blocks are the primary solution discussed. Random nature of PoW means more miners = faster average block discovery. @R (msg#422601) confirmed randomness based on miner probability.

- **Q** (@kushti khushi, msg#422593, 2023-08-16): Isn't miner voting (like Ergo's approach) more market-driven than hardcoded functions?
  **A** (@dayumbbbb, msg#422595): Miner voting is more democratic; dynamic block size functions are market-driven (demand-based). Ergo's voting is the more democratic approach.

- **Q** (@Koutelier || WONT DM, msg#422437-#422454, 2023-08-20): Can I go long/short on Comet? Where are options visible?
  **A** (@TMR.ΣRG, msg#423427): SigmaOptions platform provides options trading (call/put). Also mentioned: futures for degens (referred to as "futures for boomers" in community jokes).

- **Q** (@kushti khushi, msg#423451, 2023-08-20): Can anyone teach me options?
  **A** (@theta decay, msg#423647, 2023-08-20): "Happy to chat anytime." (Pending detailed response in other channel)

- **Q** (@Velvia, msg#422651, 2023-08-16): When will NIPoPoWs support arrive in mobile wallets?
  **A** (No direct response; Aberg noted planned Satergo UI improvements pending NIPoPoW addition to installer)

- **Q** (@qx(), msg#422403-#422424, 2023-08-15): What happened with the 244 transaction batch burn attempt?
  **A** (@qx()): Succeeded partially. Made it 213 of 244 transactions; final tx confirmed at ~1.0139 ERG for HODL token burn. Video documentation provided; mempool cleared and retry attempted.

---

## Links Shared

- [https://twitter.com/Twittosaurusre1/status/1690991588288221184](https://twitter.com/Twittosaurusre1/status/1690991588288221184): Polling on Ergo's definition re: CBDCs (Sovereign/Self-Sovereign/Decentralized Monetary System framings)

- [https://ergoplatform.org/en/news/Ergo-Crowdfund-Campaign-Promoting-Ergo-in-Partnership-with-Bitpanda/](https://ergoplatform.org/en/news/Ergo-Crowdfund-Campaign-Promoting-Ergo-in-Partnership-with-Bitpanda/): Bitpanda listing raffle campaign details and donation link

- [https://github.com/jellymlg/ergo-vanitygen](https://github.com/jellymlg/ergo-vanitygen): Ergo vanity address generator tool (custom seed phrase digit selection)

- [https://www.ergonames.io/home](https://www.ergonames.io/home): Ergo names project (in development for seed phrase digit picking)

- [https://github.com/Satergo/Satergo/blob/master/src/main/java/com/satergo/ergo/EmbeddedFullNode.java#L278](https://github.com/Satergo/Satergo/blob/master/src/main/java/com/satergo/ergo/EmbeddedFullNode.java#L278): HOCON config parsing utility pattern in Satergo

- [http://128.253.41.49:9012/frontendData](http://128.253.41.49:9012/frontendData): Oracle Pool v1 node feed example (ERG price from CEX feed)

- [https://defillama.com/chain/Ergo?currency=ERG](https://defillama.com/chain/Ergo?currency=ERG): DefiLlama Ergo chain TVL tracking (DuckPools added 2023-08-17)

- [https://defillama.com/chains](https://defillama.com/chains): DefiLlama chain rankings (Ergo at #68, 12x Mcap/TVL ratio)

- [https://spectrumlabs.medium.com/progress-update-36-cardano-launch-has-been-a-success-b38b648f49d5](https://spectrumlabs.medium.com/progress-update-36-cardano-launch-has-been-a-success-b38b648f49d5): Spectrum DEX progress update on Cardano launch

- [https://www.lidonation.com/en/project-catalyst/users/18479](https://www.lidonation.com/en/project-catalyst/users/18479): Spectrum Catalyst Fund 10 proposal

- [https://www.lidonation.com/en/proposals/paideia-dao-management-software-suite-f10](https://www.lidonation.com/en/proposals/paideia-dao-management-software-suite-f10): Paideia Catalyst proposal

- [https://www.lidonation.com/en/proposals/new-spo-revenue-streams-for-securing-bridge-infrastructure-f10](https://www.lidonation.com/en/proposals/new-spo-revenue-streams-for-securing-bridge-infrastructure-f10): Rosen Bridge + Spectrum watcher set bootstrap Catalyst proposal

- [https://www.lidonation.com/en/project-catalyst/users/18396](https://www.lidonation.com/en/project-catalyst/users/18396): zenGate (Palmyra) Catalyst Fund 10 proposals

- [https://arxiv.org/abs/2101.00378](https://arxiv.org/abs/2101.00378): ArXiv paper on block propagation speedups in Bitcoin (shared as backup for ResearchGate-unavailable resource)

- [https://twitter.com/CruxFinance/status/1691706768366190973](https://twitter.com/CruxFinance/status/1691706768366190973): Crux Finance TradingView advanced charts API integration announcement

- [https://app.hodlcoin.co.in/](https://app.hodlcoin.co.in/): HODLcoin staking platform (mentioned as alternative to traditional staking)

- [https://github.com/Luivatra/ergotipper-tokens](https://github.com/Luivatra/ergotipper-tokens): ErgoTipperBot supported token list

- [https://youtube.com/ErgoPlatform](https://youtube.com/ErgoPlatform): Ergo official YouTube channel

- [https://www.youtube.com/@Ergo_Clips/videos](https://www.youtube.com/@Ergo_Clips/videos): Ergo Clips YouTube channel (short-form content)

- [https://ergo.aap.cornell.edu/en/transactions/4c5a82c5eb0332b17236b1537d89e51df73a74521cabb1a5b1418c5d027dd1b4](https://ergo.aap.cornell.edu/en/transactions/4c5a82c5eb0332b17236b1537d89e51df73a74521cabb1a5b1418c5d027dd1b4): Final tx in 244-tx HODL burn chain (qx() demonstration of mempool limits)

- [https://t.me/GreasyCEX](https://t.me/GreasyCEX): GreasyCEX Telegram community and missions

- [https://twitter.com/Sigmanauts/status/1693463644820914473](https://twitter.com/Sigmanauts/status/1693463644820914473): qx() Sigmanauts giveaway (20 cards for Bitpanda raffle)

- [https://twitter.com/Sigmanauts/status/1693472098562228584](https://twitter.com/Sigmanauts/status/1693472098