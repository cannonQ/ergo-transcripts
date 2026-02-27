# Ergo General Chat — 2020-W36 (Aug 31 - Sep 6)

## Key Topics Discussed

- **Oracle Pools architecture and data sources**: Discussion of how Oracle Pools aggregate data from multiple sources to provide reliable price feeds, with stake slashing mechanism to penalize inconsistent data. Pool operators control datapoints off-chain via Oracle Core software, with 60-block submission windows and incentives for timely delivery. Current public pools: ERG/USD and ADA/USD.

- **DEX development status**: Orderbook-based DEX contracts ready, matcher mostly complete. Requires Rust developers to integrate DEX contracts into wallet, plus UI/frontend work. Command-line demo exists for developers. Team also exploring Uniswap-style AMM implementation. Target: 2020 release.

- **Wallet ecosystem expansion**: New desktop wallet in development with DEX integration planned. Yoroi integration in progress (added to Yoroi nightly but not syncing yet). Coinbarn and Magnum available as web/desktop options. Ledger support code nearly complete, will be submitted to Ledger soon.

- **Emission schedule and reduction**: Treasury emission reduces from 75 ERG/block to 0 over 9 months starting July 2021, with 3 ERG/block reduction every 3 months. More aggressive than Bitcoin halving. Ergo Foundation receives 10% of block rewards for first two years.

- **DeFi yield farming criticism**: Extended discussion of yield farming's impact on crypto markets, with concerns about scams (HOTDOG, POOP tokens) damaging industry credibility. Consensus that Ergo's approach focuses on economic value creation rather than gamified speculation.

- **Exchange listing challenges**: Community discussed low liquidity on current exchanges (Hotbit, Tidex, CoinEx) creating high spreads and price volatility. Citex identified as potential scam with disabled withdrawals for months. Major exchange listings require significant fees ($100k+ range, Binance >100 BTC). KuCoin identified as preferred mid-tier target.

## Important Decisions or Announcements

- [@kushti, msg#49424, 2020-09-02]: Ergo weekly developers chat scheduled for 1PM UTC on Discord
- [@kushti, msg#49717, 2020-09-03]: Published blog post on DeFi yield farming and proper open systems usage
- [@kushti, msg#49713, 2020-09-03]: Released Ergo Platform Ecosystem Digest for August 2020
- [@kushti, msg#50156, 2020-09-04]: Announced ZK Treasury on Ergo with 2K ERG testing fund from DarkSideOfBrrrrr
- [@kushti, msg#49995, 2020-09-04]: Updates coming on major exchange listings, team pushing for listings
- [@kushti, msg#50087, 2020-09-04]: DEX will be integrated into new desktop wallet (initially just holding/sending ERGs and tokens)
- [@kushti, msg#50101, 2020-09-04]: First wallet demo coming soon, DEX estimated for 2020 release
- [@kushti, msg#49877-49880, 2020-09-03]: Team actively seeking Scala/Rust developers and sysadmin for Jenkins migration

## Technical Q&A Worth Preserving

- **Q** (@Crypto Rich, msg#48965): Can you explain Oracle Pools in simple non-techie terms?
  **A** (@PK, msg#48992 & @Noah, msg#48995): Oracle Pools aggregate data feeds from multiple sources rather than single centralized datapoint. Sanction mechanism (stake slashing) validates data consistency across pools. See whitepaper: https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md

- **Q** (@Crypto2099, msg#49817): How do I run Oracle Pools for Cardano pools?
  **A** (@kushti, msg#49857-49862): For existing pools (ERG/USD, ADA/USD), contact Emurgo to get pool token for data delivery. For new pools, see Oracle Core repository. Easy to implement new connector for different data sources - just standard interface in Scala/Rust.

- **Q** (@Marco, msg#49872): If everyone pulls from same data sources, is it redundant?
  **A** (@kushti, msg#49873-49875): Easy to implement new connector to get data from other sources. Connector implements standard interface. Need more Scala/Rust developers for this work.

- **Q** (@mensrea, msg#50281): Will Ergo team focus on oracle market or is it just sample use case?
  **A** (not directly answered, but context suggests oracles are one of multiple core features alongside stablecoin, DEX)

- **Q** (@DoesGodPlayDice, msg#50242): With Ergo being proof-of-work, what will transaction time and fees be like?
  **A** (@Unknown, msg#50243): Directed to explorer: https://explorer.ergoplatform.com/en/ (2-minute block time, low fees observable on-chain)

- **Q** (@Ylly, msg#49254): How can you do DeFi with PoW and limited hashing power? What about 51% attacks?
  **A** (@kushti, msg#49255-49259): Ergo secure against rented hashpower via Autolykos (non-outsourceable PoW). Autolykos prefers professional mining teams with big farms but prevents 51% attacks from rental markets. Can be adjusted, no ideal PoW exists. Ergo uses self-amendable protocol allowing miners to change parameters like block size and computational cost daily.

- **Q** (@Zer0, msg#48603): How does Ergo adoption help price if tech is used but token is not?
  **A** (@Linky, msg#48605-48607 & @Unknown, msg#49299): Ergo is smart contract platform with oracles, DEX, stablecoin - all-in-one package. ERG pays transaction and storage fees to miners, provides incentives after emission. Used for collaterals in non-custodial DeFi. Custom tokens can be created on top but ERG remains base layer.

- **Q** (@Clint HodLer, msg#50611): Can't login to wallet anymore, not accepting password.
  **A** (@Unknown, msg#50612 & @Noah, msg#50615): Import your passphrase to restore access. Ensure using same browser (wallet set up on Firefox won't work on Chrome, etc.).

- **Q** (@Adrian, msg#50695): How does market buy work on exchanges with sell walls?
  **A** (@Unknown, msg#50703): Starts at lowest posted sell order and goes up through walls, not at displayed price.

## Links Shared

- [https://ergoplatform.org/en/blog/2020-08-31-ergos-oracle-pools-and-what-they-mean-for-the-ecosystem/]: In-depth article on Oracle Pools and key differentiating features
- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263]: Oracle Pools technical specification and ChainLink comparison
- [https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md]: Emurgo's Oracle Pools research paper
- [https://finance.yahoo.com/news/emurgo-releases-oracle-core-developers-124300554.html]: Yahoo Finance article on Oracle Core release
- [https://decrypt.co/40264/cardanos-stablecoin-will-be-better-than-makerdao-says-hoskinson]: Charles Hoskinson on Cardano/Ergo stablecoin
- [https://twitter.com/emurgo_io/status/1299357201186926594]: Emurgo announcement on Oracle Pools
- [https://twitter.com/Florian7788/status/1300434926014267392]: Community member sharing Ergo/Cardano oracle news
- [https://ergoplatform.org/en/blog/2020_05_20-curve/]: Ergo emission schedule and curve details
- [https://twitter.com/chepurnoy/status/1301593508105650178]: kushti tweet on Ergo developments
- [https://ergoplatform.org/en/blog/2020-09-03-some-thoughts-about-defi-yield-farming-and-how-open-systems-should-be-used/]: kushti's blog post critiquing current DeFi yield farming
- [https://ergoplatform.org/en/blog/2020-09-04-announcing-the-zk-treasury-on-ergo/]: ZK Treasury announcement with distributed signatures
- [https://www.ergoforum.org/t/app-on-distributed-signatures/342/8]: Forum discussion on distributed signatures application
- [https://explorer.plutomonkey.com/ergo/oracle/]: Jason Davies' live oracle pool price charts tracking CoinGecko data
- [https://github.com/ergoplatform/oracle-core/]: Oracle Core GitHub repository for pool operators
- [https://www.techrepublic.com/article/emurgo-ergo-partnerships-new-product-for-developers-oracle-core/]: TechRepublic coverage of Oracle Core
- [https://www.ergoforum.org/t/ergo-notary-command-line-tool/75]: Python utility for certifying files on blockchain
- [https://www.ergoforum.org/t/ergo-platform-ecosystem-digest-august-2020/361]: August 2020 ecosystem developments digest
- [https://twitter.com/ergoplatformorg/status/1300900191634063360]: Official Ergo Platform tweet on oracle pools
- [https://github.com/coinbarn/coinbarn-extension/releases]: Coinbarn wallet releases
- [https://magnumwallet.co/assets/erg/]: Magnum wallet for Ergo

## Unresolved Questions

- Timeline for Yoroi integration (mentioned as "this month probably" in early September but sync not working yet in nightly build)
- Exact listing fee amounts and funding sources for major exchanges (community crowdfunding discussed but no concrete plan)
- When/how anonymous developers' work (mixer, ZK treasury, potentially DEX) will be fully integrated and supported
- Whether Ergo will implement stealth addresses (forum discussion exists but no follow-up work mentioned)
- Partnership potential with Nym for mixnet/privacy enhancements
- Exact mechanism for trading pairs on upcoming DEX and whether community or anons will drive initial offerings
- Rich list feature for explorer (confirmed in development but no timeline)
- Binary releases for node to simplify wallet setup for non-technical users