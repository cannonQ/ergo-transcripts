# Ergo General Chat — 2022-W36 Summary

## Key Topics Discussed

- **Huobi Exchange Listing (Sept 7-9)**: Ergo officially listed on Huobi exchange on September 8, 2022 with ERG/USDT and ERG/BTC trading pairs. Initial deposits required 80 confirmations (later reduced to 25 following community feedback). Huobi offered promotional staking at 50% APY for up to 200 ERG per user for 30 days (~8.3 ERG rewards). Trading volumes reached ~$300k within hours of launch. Some community debate about whether Huobi qualifies as "Tier 1" exchange, but it ranks #5-7 by trading volume on CoinGecko.

- **CMC Circulating Supply Correction**: CoinMarketCap finally corrected Ergo's circulating supply data after long-standing errors, though the retroactive chart update created a misleading spike. CoinGecko data remains more accurate. The correction should improve Ergo's visibility and ranking metrics.

- **Ethereum Merge Preparation and Mining Migration**: Community discussed expected hashrate influx post-ETH merge (scheduled Sept 15). Concerns raised about Ergo's difficulty adjustment algorithm (8 epochs × 1028 blocks) potentially causing painful long block times if large hashrate enters then exits. Armeanio confirmed team has discussed faster difficulty adjustment but any change requires hard fork and miner voting. Hashrate already showing volatility with some pools seeing significant increases. New pools like RichPool appearing. Discussion of profitability challenges, especially with European energy prices.

- **Ledger Hardware Wallet Support Progress**: Ledger app for Ergo progressing through final review stages. Community hopeful for approval by end of next week. GitHub PR merged fixing issues. Currently only sideloadable on Nano S Plus, but full release pending official Ledger approval.

- **Zelcore Wallet Integration**: Flux's Zelcore wallet now supports Ergo including ability to interact with Ergo dApps (Spectrum, ErgoPad, NFT markets) and swap FLUX/ERG via Fusion feature. Not open-source which raised some community concerns, but expands wallet options.

- **SigmaUSD Dynamics and "Bearwhale"**: Continued monitoring of large holder ("bearwhale") converting between ERG and SigmaUSD. Whale minted maximum SigmaUSD allowed (down to 400% reserve ratio), profited ~600 ERG on the trade. Discussion of SigmaUSD as algorithmic stablecoin experiment, differentiation from failed models like Luna/UST. Reserve ratio mechanics working as designed.

- **Difficulty Adjustment and Block Time Volatility**: Technical discussion of how Ergo's difficulty adjusts every 8 epochs (8192 blocks). With hashrate volatility, blocks can be faster when hashrate spikes (before difficulty adjusts up) or painfully slow when hashrate drops (before difficulty adjusts down). This creates challenges for dApps and user experience. Faster adjustment discussed but requires consensus change. Current design was intentional for democratic voting with solo mining, but pools change that calculus.

- **Fee Market and Miners**: Reddit discussion explored dynamic fee adjustment tied to network security needs rather than fixed fees. Current minimum 0.001 ERG adjustable by miner vote. At $250 ERG, fees still only $0.25 but users would bid higher for priority. EIP-27 helps by reducing emission inflation. Miners must balance profitability with network health; higher fees during low security periods could incentivize miners but hurt users.

- **Node v5.0 Activation**: Mentioned that increased hashrate post-merge will accelerate reaching v5.0 activation block height. Voting progressing but exact blocks remaining not specified.

- **dApp Development Progress**:
  - Spectrum DEX: Working toward Cardano testnet relaunch in 1-2 weeks. Discussed possibility of sharing liquidity between Spectrum pools and Trade House orders.
  - Trade House: Order book DEX allowing partial fills, transparent depth/liquidity, peer-to-peer trading. Multiple orders possible, no impermanent loss if single-sided. Developed by C8.
  - Ergcube: Community project for multimedia portal aggregating videos, podcasts, blogs, dApp info. Raffle for 600 ERG funding failed (17/60 tickets sold). Developer will continue project regardless.
  - Rosen Bridge: Testing progressing well with successful Ergo-to-Cardano transfers. Working on attack/fault scenario testing and p2p connection management. Workflow diagram nearing completion. No release date announced.

- **Storage Rent Mechanics**: Clarified that storage rent only applies to boxes with no transactions for 4 years, not a concern for active users.

- **Oracle Pools**: Discussion of Oracle Pool v1 (run by EF members and community) vs v2 (running for Dexy Gold with GORT rewards). Dan Friedman mentioned potentially using capital from token sale to build out Ergo oracle network infrastructure to reduce reliance on centralized oracles like Chainlink (used in Palmyra for proof-of-reserve).

- **Proof of Useful Work**: Community questions about implementing PoUW (as discussed by Charles Hoskinson). Confirmed possible as sidechain but no mainchain plans. Current focus on Autolykos v2 stability and security.

- **Zero-Knowledge Support**: ErgoScript has Sigma protocols built into core (hence the logo). Support for bulletproofs being explored for verification in ErgoScript, which would enable similar capabilities to SNARKs but without trusted setup. Opens possibilities for verifiable credentials, privacy features, hybrid contracts (some data verified on-chain, sensitive data proven without disclosure).

## Important Decisions or Announcements

- [@Glasgow, msg#307307, 2022-09-07]: Huobi listing official announcement: deposits open Sept 7 13:00 UTC, trading when deposit volume meets demand, withdrawals open Sept 9 13:00 UTC. Link: https://www.huobi.co.no/support/en-us/detail/84916865954917

- [@Armeanio, msg#307755, 2022-09-07]: Confirmed working with Huobi to reduce confirmation requirement from 80 blocks (too conservative for Ergo's security model).

- [@Armeanio, msg#308471, 2022-09-09]: In discussion with Huobi about opening door for listing native Ergo tokens (like ErgoPad) in future.

- [@Glasgow, msg#307747, 2022-09-08]: Ledger app approval expected end of next week if review goes okay.

- [@Glasgow, msg#307131, 2022-09-08]: Promotional offers for ERG trading on Huobi to be announced soon (50% APY staking revealed later).

- [@Glasgow, msg#307131, 2022-09-08]: Announced Zelcore wallet officially adds Ergo support including dApp connectivity. Blog post: https://ergoplatform.org/en/blog/Zelcore-Wallet-Officially-Adds-Ergo-Token-Support/

- [@Armeanio, msg#308005, 2022-09-08]: Confirmed exchanges often have "marketing fees" rather than "listing fees" — same thing, new name.

- [@Armeanio, msg#308739, 2022-09-10]: Changing difficulty adjustment algorithm not simple, would require hard fork and is up to miners. Has given opinions on potential improvements in past videos.

- [@J, msg#307763, 2022-09-08]: #DiscoverErgo social media campaign day set for September 15, 2022. Contributors list for Twitter fund rewards closing.

## Technical Q&A Worth Preserving

- **Q** (@Shiv Chauhan, msg#308208): Can we transfer ERG from Ergo wallet to Zelcore Flux wallet, or is Flux-Ergo parallel asset something different?
  **A** (@curbsideprophetz, msg#308221): Yes, should be possible. Zelcore supports native Ergo.

- **Q** (@alh, msg#308185): If mining reward decreases when more miners come?
  **A** (@Pulsarz, msg#308263): Emission is constant. More hashrate = same coins distributed among more miners = less profit per miner until difficulty adjusts.

- **Q** (@MS, msg#308016): What's the channel to ask about mining Ergo?
  **A** (@TMR.ΣRG, msg#309021): https://t.me/ergo_mining

- **Q** (@Han, msg#307517): Do we have any plan or projects to build zero knowledge layer on Ergo?
  **A** (@Glasgow, msg#307556): It has Sigma protocols built into the core, hence the logo. L2 work just getting started.

- **Q** (@Manolo, msg#309338): Can you sideload Ledger support for Ergo onto a Ledger X?
  **A** (Community via .ledger bot): Sideloading currently only works on Nano S Plus. Official release pending Ledger approval.

- **Q** (@DrTwentyOne, msg#308543): Is there any wallet that lets me extract/import a private key of an address or sign a transaction offline?
  **A** (@MrStahlfelge, via video link): Ergo Android Wallet supports offline transaction signing. Video shows how: https://www.youtube.com/watch?v=5gAEdU71nJw. Note: Version 2.0.2214 had bug with single-page QR codes, fixed in 2217.

- **Q** (@NAHAN, msg#309259): What happens when all Ergo coins are mined?
  **A** (@Pulsarz, msg#309263): Transaction fees and storage rent will incentivize miners.

- **Q** (@Technical Support, msg#308982): Can I delegate through TrustWallet or MetaMask?
  **A** (@curbsideprophetz, msg#308989): Ergo is not proof-of-stake (no delegation). Those wallets don't support Ergo. See .wallets for compatible options.

- **Q** (@Arc, msg#308245): When will ETH mining actually stop?
  **A** (Community, msg#308249): https://bordel.wtf/ shows countdown. Merge scheduled ~Sept 13-15.

- **Q** (@O Javier, msg#309183): Where to stake what I mined? (2GH/s for 45 days)
  **A** (Implied community response): Ergo is PoW, no native staking. Can provide liquidity on Spectrum DEX or use Huobi promotional staking (200 ERG max).

- **Q** (@Dennis TheMenace / community, msg#308785): Is mining profitable in Europe with energy crisis?
  **A** (@Dennis, msg#308905): Depending on contracts, still possible even profitable with solar energy. Things tight though. Unclear next few months with potential business energy regulations.

- **Q** (@Crypto is the future, msg#307542): Where to find hashrate? When halving?
  **A** (@curbsideprophetz, msg#307543-307544): Emission info (not halving, Ergo doesn't do this) at https://ergo.watch/emission. Hashrate at https://explorer.ergoplatform.com/

- **Q** (@RP, msg#309595): Huge % of Ethereum development relies on Infura. Doesn't that defeat decentralization purpose?
  **A** (@T M, msg#309596): Pokt is biggest Infura competitor and fully decentralized. (Topic not fully resolved)

- **Q** (@Unknown, msg#308940): When do you get your ERG back when someone outbids you in an auction?
  **A** (@curbsideprophetz, msg#308946): Can take a while but it will arrive eventually.

- **Q** (@Fernando Wildemann, msg#309486): Why so slow to do a swap on Spectrum? ERG-SigUSD
  **A** (@Gazza, msg#309488): Average 2 minute block time. How long did it take?

- **Q** (@Shiv Chauhan, msg#308342): Is it possible to completely change mining algorithm on blockchain when needed?
  **A** (@Glasgow, msg#308347): Can be implemented as sidechain. Previous community discussions searchable in chat history.

- **Q** (@Unknown, msg#306707): What is the purpose of miners? To remain profitable? No, it is to secure the network. So the fee could increase to incentivize more miners when security starts to get low, and go down when security starts to get high. (Proposed dynamic fee adjustment)
  **A** (@cafebedouin, msg#306720, and @curbsideprophetz, msg#306708): Miners can vote on increasing fees. Node may not support automatic security-based adjustment currently but interesting idea for governance proposal.

## Links Shared

- [https://www.huobi.co.no/support/en-us/detail/84916865954917]: Official Huobi listing announcement with deposit/trading/withdrawal schedule
- [https://www.huobi.com/en-us/assetactivity/newlisting/flashback-detail?activityId=319&source=candydrop]: Huobi 30k ERG airdrop via Candy Drop (requires "crystals" earned by trading ~$300)
- [https://www.huobi.com/support/en-us/detail/44916960013648]: Huobi promotional staking details (50% APY, 200 ERG cap, 30 days)
- [https://explorer.ergoplatform.com/]: Ergo blockchain explorer (circulating supply, hashrate)
- [https://ergo.watch/emission]: Ergo emission schedule (not halving-based)
- [https://ergo.watch/metrics/cexs]: Centralized exchange holdings tracking
- [https://miningpoolstats.stream/ergo]: Ergo hashrate and pool distribution charts
- [https://github.com/tesseract-one/ledger-app-ergo/pull/9]: Ledger app GitHub PR merged
- [https://apps.apple.com/us/app/terminus-wallet-ergo/id1643137927]: Terminus wallet official App Store link
- [https://chrome.google.com/webstore/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai]: Nautilus wallet Chrome extension
- [https://ergoplatform.org/en/blog/Zelcore-Wallet-Officially-Adds-Ergo-Token-Support/]: Official blog post about Zelcore integration
- [https://www.ergoforum.org/t/decentralized-p2p-options-contracts-on-ergo/3763]: Forum discussion of options trading contracts on Ergo
- [https://www.getblok.io/smartpools/]: GetBlok smart pools documentation
- [https://api.tokenjay.app/ageusd/info]: SigmaUSD/SigRSV price API
- [https://tokenjay.app/app/#ageusd]: SigmaUSD interface with formatted pricing
- [https://babygrenade.github.io/ergo-tokenautics-frontend/?token=SigRSV]: Tokenautics visualization tool (example with SigRSV)
- [https://twitter.com/IOHK_Charles/status/1566911407957938179]: Charles Hoskinson tweet recommending Ergo for PoW miners post-merge
- [https://twitter.com/coinesper/status/1568847762560622592]: Coinesper exchange listing poll (vote for Ergo)
- [https://twitter.com/guardarian_com/status/1567840056773050369]: Guardarian exchange listing poll (vote for Ergo)
- [https://twitter.com/NiceHashMining/status/1569035982497878018]: NiceHash poll on which algo to support (concerns about botted votes favoring RVN)
- [https://bordel.wtf/]: Ethereum merge countdown
- [https://twitter.com/paideiaDAO/status/1567234881708507136]: Paideia DAO overview thread
- [https://twitter.com/ergoplatformorg/status/1567451463546466305]: Official Ergo announcement of Huobi listing
- [https://twitter.com/AGlasgow12/status/1568156529026555905]: CMC ranking explanation (why Ergo on page 3 despite market cap)
- [https://twitter.com/rustinmyeye/status/1568984578249080832]: Community member sharing Ergo content
- [https://www.youtube.com/watch?v=Qf4CelswFGk?t=44]: DeCo Layman final presentations - Tensile Decentralized Derivatives on Ergo
- [https://youtu.be/smRH7fYwGxE]: Weekly developer update video
- [https://youtu.be/gcMl9Obgxt8]: Kushti interview with Ergo Prism (recommended for community)
- [https://ergoraffle.com/raffle/show/e2ba4b8ec69593ffbdf4ca34438ba4de01e71d9f7ceb8494f4d38c2affadc7c9]: Ergcube multimedia portal raffle (failed at 17/60 tickets)
- [https://ergoraffle.com/raffle/show/6b4c9159bc885885aba67d8e800e9735193b8c2d2d4e8469e2bbc8db5b9666c9]: ErgoTutorials.com translations raffle (community support requested)
- [https://sigmaverse.io]: Ecosystem project directory (undergoing database migration)
- [https://www.youtube.com/watch?v=5gAEdU71nJw]: Video guide for offline transaction signing with Ergo Android Wallet

## Unresolved Questions

- Exact timeline for Rosen Bridge mainnet launch (testing progressing well but no date announced)
- Whether Binance or other top-3 exchanges will list Ergo (ongoing discussions, NDAs prevent transparency)
- Impact of Ethereum merge on Ergo hashrate and difficulty (speculation but won't know until Sept 15+)
- Long-term viability of mining profitability post-merge given energy costs and difficulty dynamics
- Whether difficulty adjustment algorithm will be modified via hard fork (discussed but no proposal or timeline)
- Exact date for Ledger official app approval (hopefully end of week after Sept 9 but pending review)
- FTX native listing vs perpetuals-only (FTX announced 41 new perpetuals including memecoins but not native Ergo spot trading)
- Optimal confirmation count for exchange deposits (Huobi reduced from 80 to 25, Gate uses 20, debate continues)
- Whether Oracle Pool v2 token sale will proceed to fund network expansion (Dan mentioned possibility)
- Timeline for options trading platform on Ergo (requires JIT v5.0 and Spectrum Network, estimated Q1/Q2 2023)
- Community debate on whether airdrop/promotional tactics (like Huobi's 30k ERG candy drop) align with Ergo philosophy