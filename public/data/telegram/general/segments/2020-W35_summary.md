---
title: "Ergo General Chat — 2020-W35"
date_start: "2020-08-24"
date_end: "2020-08-30"
type: telegram_weekly
channel: general
week: "2020-W35"
source: telegram
message_count: 1817
categories: [defi, ecosystem, wallet, governance, technical, mining, marketing, community]
key_terms: [oracle pools, Emurgo, mainnet, Robert Kornacki, ADA/USD, ERG/USD, Chainlink, hierarchies, stake slashing, threshold signatures, HotBit, Tidex, CoinEx, KuCoin, Binance, liquidity, listing fees, Yoroi, wallet integration, Daedalus]
---
# Ergo General Chat — 2020-W35 (Aug 24-30, 2020)

## Key Topics Discussed

- **Oracle Pools mainnet launch**: Emurgo and Ergo released Oracle Pools on mainnet with off-chain "Oracle Core" software, smart contracts, and a frontend integrated into the block explorer. Initial pools include ADA/USD and ERG/USD. The system uses UTXO-based architecture, stake slashing (planned), and hierarchical pool structures to resist Sybil attacks differently than Chainlink.

- **Yoroi wallet integration**: ERG support is being added to Yoroi wallet. ERG option appears in Yoroi Nightly but doesn't sync with blockchain yet. Expected completion soon, likely within weeks. This will give ERG exposure to the Cardano community as the only non-ADA asset in Yoroi initially.

- **Exchange liquidity and listings**: The project suffers from low liquidity on current exchanges (Hotbit, Tidex, ProBit, Waves, CoinEx). Community discussed need for tier-1 exchange listings but acknowledged high listing fees ($300k-500k). Ergo Foundation is in ongoing talks with exchanges. CoinEx experienced deposit/withdrawal issues during this period.

- **Zero-Knowledge Treasury**: kushti demonstrated and tested a ZK treasury implementation using threshold signatures, allowing anonymous multi-sig operations on-chain. Community member offered to donate 2k ERG to test the system. This appears to be first public blockchain with ZK multi-sig capability.

- **Hard fork planning**: First Ergo network hard fork announced for late 2020. It will include: (1) PoW memory-hardness fix, (2) security fixes (non-critical), (3) support for updating contractual layer via soft-fork in future. No new tokens or swaps required; should be invisible to non-node-operators.

- **Wallet options**: Discussion of available wallets: Magnum (closed-source, mobile), CoinBarn (open-source desktop), full node wallet (requires setup). Ledger integration in development by @jasondavies, expected autumn 2020. Community eagerly awaiting Yoroi integration.

- **Mining profitability and distribution**: Daily emission approximately 50k ERG. Hash rate distribution shows good decentralization. Miners appear to be largely holding rather than selling, contributing to low liquidity. Mining requires substantial GPU setup (100+ GPUs to be competitive).

- **Stablecoin development**: Emurgo and Ergo Foundation are developing a stablecoin for Ergo, with plans to potentially deploy on Cardano as well. Details not yet announced but mentioned to potentially use basket of national currencies as collateral.

- **Fee market and spam resistance**: Node version 4.0.44 includes mempool limits to resist spam attacks. Ergo has no "free market" fee mechanism like Bitcoin yet, but fee estimation API exists (untested). Transactions typically clear in 5 minutes with minimal fees.

- **Community growth**: Significant influx of new members from Cardano community following Oracle Pool announcement. Cointelegraph published article (incorrectly describing Ergo as "Cardano-based project"). IOG tweeted acknowledgment of the work.

## Important Decisions or Announcements

- [@kushti, msg#45665, 2020-08-25]: First Ergo hard fork will be minimal and hopefully last one, containing PoW memory-hardness fix, security fixes, and support for updating contractual layer via soft-fork. No new tokens or swaps required.

- [@bobertk, msg#46087, 2020-08-28]: Oracle Pools officially live on mainnet with all code, instructions, and frontend available. ADA/USD and ERG/USD pools operational. Frontend integrated into explorer at https://explorer.ergoplatform.com/en/oracle-pools-list

- [@kushti, msg#45606-45609, 2020-08-25]: Published "A Quick Primer on ErgoScript" by @devx (ScalaHub) on GitHub wiki: https://github.com/ergoplatform/ergo/wiki/ErgoScript-Overview

- [@bobertk, msg#46566, 2020-08-28]: Current Oracle Pool version doesn't yet implement governance or stake slashing, but protocols designed with both in mind for easy future upgrade with no restructuring.

- [@kushti, msg#45785, 2020-08-26]: Weekly Ergo developers chat scheduled for Wed, Aug 26, 1PM UTC on Discord.

- [@mx, msg#48181, 2020-08-30]: ErgoCast podcast will officially continue from September with PK and others hosting.

## Technical Q&A Worth Preserving

- **Q** (@Damon AndTheSea): What is the primary driver of value appreciation in the Ergo ecosystem, besides speculation?
  **A** (@bobertk): Permissionless DeFi with in-built privacy capabilities on top of UTXO model that offers capabilities to streamline and improve the whole experience of both crypto and DeFi for the average user. Certain things aren't possible (or aren't easy/aren't economical) on account-based models, like allowing anyone else to spend a UTXO you "own".

- **Q** (@Unknown): How do oracle pools get funded/incentivized?
  **A** (@bobertk): With UTXO model, large dApps can enforce that users pay out a single output with very small % fee which goes to Oracle Pools automatically. Well-used dApps fund key oracle pools via usage with almost no one feeling the cost. More specialized data may require direct funding, but key datapoints like ERG/USD will be core infrastructure available for everyone.

- **Q** (@Unknown): Will threshold signatures reduce fees 99% like rumored for Chainlink?
  **A** (@bobertk): Ergo already has threshold signatures and could implement similar approach if better. However, on-chain provides game theoretic benefits like stake slashing which aren't possible off-chain with threshold-sigs. Ergo doesn't have tx congestion and plans sidechains for scaling, so on-chain approach gets more benefits and remains cheap.

- **Q** (@Jason Davies): Where are oracles getting their data from?
  **A** (@bobertk): Pools source both signed data (e.g., from CoinBase) and unsigned data from various sources, decreasing chance of corrupting any one source. Working on more complex schemes using additional game theory, may release details by EOY.

- **Q** (@S. Dbros): How to setup API key for node wallet?
  **A** (@Cheng.alph): Linux users can use automated script: https://github.com/ergoplatform/ergo/blob/master/ergo-installer.sh. Check hidden folders starting with "." in config folder. Restart node after changing config file.

- **Q** (@Jonesy): What will first hard fork mean for holders?
  **A** (@kushti): Update will be totally painless and invisible for those not running full nodes. No snapshot or swap needed—it's designed for soft-forkability to allow significant protocol changes while keeping old nodes operational.

- **Q** (@Hans Maulwurf): Can you explain basic utility of ERG token vs LINK token?
  **A** (@mx): ERG provides transaction fees and storage rent to miners, creating incentive structure even after emission ends. Enables non-interactive and non-custodial DeFi with more advanced, powerful scripting and privacy. First-class citizen tokens can be created on Ergo without needing additional tokens for core dApp functionality, so ERG will likely be used for collaterals.

- **Q** (@Zer0): Does Ergo benefit at all from adoption of their oracle tech, or only the tokens in the pools?
  **A** (community): Oracle data is posted on Ergo blockchain, so usage drives network activity and fees. DApps using oracle data will likely be built on Ergo, increasing ERG utility and demand.

- **Q** (@bkauii_ensō): Will Daedalus support Ergo in future?
  **A** (@Unknown): The DEX itself will likely be integrated into Daedalus, so yes.

- **Q** (@Unknown): What are possible use cases for compact NIPoPoW proofs of oracle data outside Ergo blockchain?
  **A** (@kushti): Oracle data on Ergo can have compact representation via NIPoPoW proofs for applications outside the Ergo blockchain.

- **Q** (@Unknown): How will merge-mined sidechains work for miners?
  **A** (@kushti): Miners will deliver sidechain data and do trustless pegging using smart contracts (similar to but better than BIP 301). Emission contract will reward mainchain miners for delivering sidechain data. Sidechain should recognize mainchain blocks, maybe natively, with trustless relay to update sidechain data and get rewards. This is Ergo-specific construction that improves on Bitcoin sidechaining with clearer security.

## Links Shared

- [https://ergoplatform.org/en/blog/2020-08-28-transcript-of-first-q-a-session-with-robert-kornacki/]: Full transcript of Robert Kornacki Q&A session on Oracle Pools
- [https://emurgo.io/blog/emurgo-releases-oracle-core-for-developers]: Official Emurgo announcement of Oracle Core release
- [https://explorer.ergoplatform.com/en/oracle-pools-list]: Live Oracle Pools frontend in Ergo Explorer showing ADA/USD and ERG/USD pools
- [https://github.com/ergoplatform/oracle-core/]: Oracle Core repository with code, tooling, and smart contracts
- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263]: Original Oracle Pools design proposal and discussion
- [https://www.ergoforum.org/t/app-on-distributed-signatures/342]: Zero-Knowledge Treasury discussion and implementation details
- [https://github.com/ergoplatform/ergo/wiki/ErgoScript-Overview]: "A Quick Primer on ErgoScript" by @devx
- [https://cointelegraph.com/news/a-new-cardano-based-project-is-handling-oracles-a-lot-differently-than-chainlink]: Cointelegraph article (incorrectly describes Ergo as "Cardano-based")
- [https://twitter.com/chepurnoy/status/1298675018797395969]: kushti tweet showing ZK treasury testing
- [https://twitter.com/emurgo_io/status/1299357201186926594]: Official Emurgo announcement tweet
- [https://twitter.com/InputOutputHK/status/1299441579409707009]: IOG shoutout acknowledging the work
- [https://github.com/ergoplatform/ergo/wiki/Mining-Ergo-for-Fun-and-Profit]: Mining guide
- [https://ergoplatform.org/en/blog/2019_05_20-curve/]: Ergo emission schedule and treasury distribution
- [https://github.com/ergoplatform/ergo/blob/master/ergo-installer.sh]: Linux node setup automation script
- [https://boards.4channel.org/biz/thread/21994618]: Active /biz/ thread discussing Ergo (archived, had unusually good reception)
- [https://emurgo.io/blog/emurgo-to-partner-with-ergo-and-build-blockchain-based-decentralized-financial-solutions]: Original Emurgo partnership announcement

## Unresolved Questions

- Timeline for Yoroi integration completion: "Soon" but no specific date given. ERG option exists in Yoroi Nightly but doesn't sync yet.

- Exchange listings: Foundation in ongoing talks with exchanges but no confirmed listings announced. Community discussed Binance, KuCoin, Huobi as targets. Listing fees of $300k-500k for tier-1 exchanges are barrier.

- Ledger integration timeline: @jasondavies working on it, expected "autumn 2020" but no specific date.

- Interoperability with Cardano: Research ongoing into cross-chain compatibility. Team working with IOG on making blockchains talk to each other. Mentioned possibility of wrapped ADA (wADA) in privacy-preserving smart contracts on Ergo.

- Governance and stake slashing for Oracle Pools: Designed into protocol but not yet implemented. Will be future upgrade.

- Rich list / top accounts: @andyceo created snapshot many months ago but no current version available. @jasondavies offered to create one if people interested.

- CMC circulating supply error: Team contacted CMC 4+ times about incorrect market cap calculation (deducting full treasury amount instead of only released portion) but still not fixed. CoinGecko has correct stats.

- Ergo subreddit status: r/ErgoPlatform exists but appears to not be public. Community wasn't aware it existed.

- How many fake Sergey Navarovs exist on Telegram: kushti wondered, crypto scammers prevalent. One fake "CryptoZombie" attempted scam in chat.

- Whether EFYT→ERG swap still possible: @Madefi's asked if can still swap, no clear answer given in logs.

- Whether Ergo will appear in Daedalus: Speculation that DEX will be integrated into Daedalus but no official confirmation.

- Community naming: Discussion started about community identity ("Ergonauts", "ErgoScholars", "Ergonation") but no official decision made.