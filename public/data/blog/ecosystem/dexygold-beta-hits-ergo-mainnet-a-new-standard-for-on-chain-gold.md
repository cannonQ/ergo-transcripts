---
title: 'DexyGold Beta Hits Ergo Mainnet: A New Standard for On-Chain Gold

  '
date: '2025-07-15'
author: Ergo Platform
tags:
- amm
- collateral
- dexy
- ecosystem
- ergo-blog
- ergo-explorer
- gluon
- mempool
- multi-stage-contracts
- native-tokens
- nautilus
- oracle-pools
- rosen-bridge
- sigmausd
- transaction
category: blog
blog_tag: Ecosystem, DeFi
type: news
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/DexyGold-Beta-Hits-Ergo-Mainnet-A-New-Standard-for-On-Chain-Gold
glossary_hits:
- AMM
- Collateral
- Dexy
- Ergo Explorer
- Gluon
- Mempool
- Multi-stage contracts
- Native tokens
- Nautilus
- Oracle pools
- Rosen Bridge
- SigmaUSD
- Transaction
---

# DexyGold Beta Hits Ergo Mainnet: A New Standard for On-Chain Gold


> **Published:** 2025-07-15 | **Author:** Ergo Platform | **Tag:** Ecosystem, DeFi | **Type:** news

**Related concepts:** AMM, Collateral, Dexy, Ergo Explorer, Gluon, Mempool, Multi-stage contracts, Native tokens, Nautilus, Oracle pools, Rosen Bridge, SigmaUSD, Transaction

---

### A Milestone for Ergo DeFi

DexyGold’s public mainnet beta is live and already moving real value. The coin targets the USD price of one troy ounce of gold, relying on two core contracts:

* **Bank Contract** — mints DexyGold when users deposit ERG at the oracle price.
* **AMM Liquidity Pool** — lets traders discover a market rate and enforces guardrails that protect reserves.

Both contracts use the new [**Gold v2 oracle feed**](https://explorer.ergoplatform.com/en/oracle-pool-state/xauerg), which updates faster and adds extra protections against manipulation. With DexyGold doing well, the community is now preparing to update the USD oracle pool to v2 and launch **GluonUSD** and **DexyUSD**. A Telegram group is forming for people who want to run v2 oracles, and help testing the oracle pool update on testnet is much needed too.

---

### Why Aim at Gold, Not Dollars?

Gold sidesteps single-government risk and has kept ahead of long-term inflation for centuries. A gold-pegged stablecoin rounds out Ergo’s DeFi stack, giving users a hedge that complements USD trackers such as SigmaUSD.

---

### Under the Hood

| Engine Part        | Role in the Peg                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bank Contract**  | Mints DexyGold for ERG at the oracle price. Supply only grows when users add ERG.                                                                                 |
| **Liquidity Pool** | Publishes a live DexyGold / ERG price. Pool math mirrors Uniswap V2 and blocks LP-token redemption if the oracle price slips more than 10 % below the pool price. |
| **Arbitrage Loop** | *Oracle > Pool* → users mint DexyGold and sell to the pool. *Oracle < Pool* → the bank spends idle ERG and buys DexyGold after a 50-block delay.                  |
| **Safety Valves**  | Time-locks on fresh DexyGold, ERG locks in the bank, and an automatic mint-pause when profits look excessive.                                                     |

---

### How to Try DexyGold Today

1. **Install [Nautilus](https://nautiluswallet.io/)** and choose the mainnet network.
2. **Add a modest ERG balance** via exchange, miner payout, or the [Rosen bridge](https://app.rosenbridge.io/).
3. **Open [Crystal Pool](https://crystalpool.cc)**—the only place to mint DexyGold and trade it. Mint in the Bank UI, provide liquidity, or place limit orders.
4. **Start small:** Contracts are live and hold real value while audits and parameter tuning continue. Orders settle on-chain in seconds.

#### Crystal Pool in Focus

Crystal Pool is a new Layer-1 DEX on the Ergo blockchain focused on direct smart contract interaction with the best available on-chain liquidity. It offers:

* Direct Order Matching on-chain without off-chain order books
* Multi-Token, Multi-Seller Trades in a single transaction
* Real-Time Transaction Chaining, enabling seamless trading for hundreds of users in parallel
* Integrated Charting and Trade History, showing your deals directly on price charts

Coming later in 2025: Limit Order Liquidity Pools, enabling deeper market-making strategies.

Crystal Pool aims to become the core liquidity layer for Ergo DeFi—simple, fast, and transparent.

---

### DexyGold Roadmap

* **Second Audit Pass** to stress-test the arbitrage loop and improve parameter tuning.
* **Collateral Ratio Target** above 150 percent as minting fees build reserves in the bank.
* **USD Oracle Pool v2** rollout with community operators and testing on testnet.
* **GluonUSD and DexyUSD** launches after the USD oracle feed upgrade, expanding the stablecoin suite.

---

### Gold v2 Oracle Adoption Grows

DexyGold is the second project to adopt the Gold v2 feed. The first, **gluon.gold**, recently unveiled a [refreshed beta front-end](https://gluon.gold/reactor) that tracks fees, reserve ratio, TVL, volume, and pending transactions with greater clarity—a testament to how quickly the new oracle is becoming the backbone of Ergo’s gold-based products.

---

### Join the Conversation

Read the draft Dexy white paper, share feedback on **r/ergonauts**, and join the community on [Telegram](http://t.me/dexygold) or [Discord](https://discord.gg/xjfnk9A2cU). Your real-world testing and bug reports will help shape the final parameters of a resilient gold-and dollar-backed stablecoin family on Ergo.
