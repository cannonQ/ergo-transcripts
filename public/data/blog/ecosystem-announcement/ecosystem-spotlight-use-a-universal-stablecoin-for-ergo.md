---
title: 'Ecosystem Spotlight: USE, a Universal Stablecoin for Ergo'
date: '2025-11-24'
author: Ergo Platform
tags:
- amm
- bootstrapping
- collateral
- dexy
- dort
- ecosystem-announcement
- ergo-blog
- lp-tokens
- mew-finance
- native-tokens
- nautilus
- ring-signatures
- slippage
category: blog
blog_tag: Ecosystem Announcement
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Ecosystem-Spotlight-USE-a-Universal-Stablecoin-for-Ergo
glossary_hits:
- AMM
- Bootstrapping
- Collateral
- DORT
- Dexy
- LP tokens
- Mew Finance
- Native tokens
- Nautilus
- Ring signatures
- Slippage
---

# Ecosystem Spotlight: USE, a Universal Stablecoin for Ergo

> **Published:** 2025-11-24 | **Author:** Ergo Platform | **Tag:** Ecosystem Announcement | **Type:** blog

*USE (Universal Stablecoin for Ergo) is a planned USD-linked stablecoin on Ergo. It aims to give the ecosystem a simple dollar unit for trading, saving, and cross-chain activity, while keeping the rules transparent on-chain and the base protocol safe.*

**Related concepts:** AMM, Bootstrapping, Collateral, DORT, Dexy, LP tokens, Mew Finance, Native tokens, Nautilus, Ring signatures, Slippage

---

With the protocol nearing deployment, the **Community Liquidity Bootstrapping (CLB) event is set to begin on November 25th**, allowing users to contribute liquidity and earn CLB tokens ahead of the full launch.

At a high level, USE focuses on:
- Simple everyday use on Ergo.
- Clear, predictable rules in smart contracts.
- Good pairing with other assets, including bridged stablecoins such as USDT.

USE is built on the same Dexy framework that powers DexyGold, which already runs on Ergo mainnet and tracks the gold price through oracles and smart contracts.

## How the Design Works

USE uses a simple structure that many DeFi users will recognise.

1. **The Bank contract**
- The Bank holds ERG reserves and uses an ERG/USD oracle.
- Users can send ERG to the Bank and mint USE at the oracle price, plus a small fee.
- The Bank can use its ERG reserves to buy USE when the price is weak, or sell USE when the price is high.
- The Bank controls when new USE is created and how reserves move.

2. **The Liquidity Pool (LP)**
- The LP is a trading pool on Ergo DEXs that holds ERG and USE.
- Traders swap ERG and USE, similar to a Uniswap v2 style pool.
- The pool price moves with supply and demand.
- Safety rules can limit some actions if the pool price drifts far from the oracle price, which protects reserves in obvious stress events.

3. **Arbitrage keeps the price close to 1 USD**

Arbitrage traders compare the oracle price, the LP price, and the Bank minting price.
- If USE trades above 1 USD, they can mint at the Bank and sell into the LP.
- If USE trades below 1 USD, they can buy from the LP and benefit when conditions normalise.

This profit loop keeps the price close to the target without a central controller that can freeze balances.

## Key Parameters and Safety (Planned Launch Setup)

The team treats the following as the planned initial configuration for launch. Parameters can still change based on testing and simulations.

- **Token and fees:** USE uses 6 decimals (like USDT/USDC). Fees aim to be low, targeting 0.1% for bridge routes and ~0.05% for core stable-swap markets.
- **Governance:** A 3-of-5 multisig committee will initially adjust parameters, with a plan to burn keys or transition to a DAO structure after roughly 6 months.
- **Free Minting**: Allowed when the peg is healthy and reserves are comfortable. Capped at 1% of LP size every 360 blocks (~12 hours).
- **Arbitrage Minting:** Activates if USE trades above ~$1.01 for ~1 hour.
- Interventions: The Bank can buy/sell USE in the LP (max 2% slippage) to support the peg, with a minimum delay between actions.
- **Payouts**: If reserves become very high (well above 100% collateral), the protocol can pay out a maximum of 0.5% of reserves per week, prioritizing long-term solvency.

“Extract-to-the-Future” (Under Review)

The team is reviewing a last-resort feature where, during extreme stress, the system could pull USE from the LP to lift prices. Users would be able to return that extracted USE once conditions improve. This may or may not be active at launch depending on final testing.

## Launch Details: The CLB Event

The launch quality of USE depends on starting liquidity. To achieve this, the project is hosting a **Community Liquidity Bootstrapping (CLB) event**.

### Event Timeline
- **Phase 1 (Contribution)**: Nov 25 (19:00 UTC) – Nov 28 (19:00 UTC)
- **Phase 2 (Minting)**: Nov 28 – Dec 1
- **Phase 3 (Airdrop**): Starts Dec 1 (19:00 UTC)

## How it Works

Instead of a traditional sale, users contribute liquidity to bootstrap the protocol.

1. **Contribution**: Users can contribute **ERG** (on Ergo) or **rsERG** (bridged ERG on Cardano).
2. **Liquidity Lock**: All contributed funds are paired to create the initial USE/ERG liquidity pool. The LP tokens for this pool are **locked for 2 years** in a smart contract.
3. **The CLB Token**: Contributors receive **CLB tokens**. These are liquid, tradeable tokens that represent your share of the locked liquidity pool plus the accumulated trading fees (0.3% fee tier) generated over the 2-year period.
4. **Incentives**: In addition to the CLB tokens, participants will share a bonus airdrop pool of **200,000 DORT** (Oracle reward token) and **125,000 MEW** (Mew Finance token).

**Important Note**: Do not send funds from an exchange. You must use a non-custodial wallet (like Nautilus or Ergo Wallet App) to receive your CLB and airdrops.

For full participation details, step-by-step guides, and disclaimer, please read the official launch article by Richi TP:

👉 USE — [Launch Event Details](https://medium.com/@manastaking/use-launch-event-details-4957d1db1dac?postPublishedType=repub)

## Community & Resources

**X Spaces Recording**: [Vision, design, and launch event](https://x.com/i/spaces/1djGXWAOaXdKZ)
**Telegram:** [t.me/USE_stablecoin](https://t.me/USE_stablecoin)
**Dexy Protocol Reference**: [Dexy stablecoin framework on Ergo Forum](https://www.google.com/search?q=https://www.ergoforum.org/t/dexy-gold-design/3835)
**Dexy**:[ A Seigniorage-Based Stablecoin](https://docs.ergoplatform.com/eco/dexy/)

_This article is an overview. Final launch docs and on-chain contracts will determine the exact rules of the system._
