---
title: 'Machina Finance: Off-Chain Execution, On-Chain Trust'
date: '2025-09-01'
author: Ergo Platform
tags:
- amm
- avl-tree
- box
- ecosystem
- ergo-blog
- ergonames
- eutxo
- grid-trading
- machina-finance
- native-tokens
- off-chain-bot
- transaction
category: blog
blog_tag: Ecosystem
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Machina-Finance-Off-Chain-Execution-On-Chain-Trust
glossary_hits:
- AMM
- AVL tree
- Box
- ErgoNames
- Grid trading
- Machina Finance
- Native tokens
- Off-chain bot
- Transaction
- eUTXO
---

# Machina Finance: Off-Chain Execution, On-Chain Trust

> **Published:** 2025-09-01 | **Author:** Ergo Platform | **Tag:** Ecosystem | **Type:** blog

**Related concepts:** AMM, AVL tree, Box, ErgoNames, Grid trading, Machina Finance, Native tokens, Off-chain bot, Transaction, eUTXO

---

[Machina Finance](https://github.com/nautls/machina-finance) is an innovative, bot-driven decentralized exchange (DEX) being developed on the Ergo blockchain. Its core innovation lies in a peer-to-peer (P2P) trading model that uses off-chain execution with on-chain verification, providing automated precision without sacrificing decentralized security.

## How It Works: A Hybrid Approach

Instead of relying on shared liquidity pools like a traditional Automated Market Maker (AMM), Machina Finance uses a system of grid order contracts. The execution logic for these trades is handled by off-chain bots, but every critical step is verified and secured by smart contracts on the Ergo blockchain. This hybrid approach delivers both speed and trust in a single package.

For traders, this means you can set up a "grid" of buy and sell orders across a desired price range. Off-chain agents (bots) then monitor the market in real-time. When a trigger price is hit, the bot initiates the trade, and the transaction is processed and validated on-chain via a smart contract. This ensures that every trade is a direct, peer-to-peer interaction, fully transparent and secure.

## Why It Matters: A Shift in DEX Mechanics

Traditional grid trading tools often operate on centralized, opaque platforms. Machina Finance moves this functionality directly onto Ergo's blockchain, anchoring strategies in its powerful smart contracts. This provides significant advantages:

- **P2P Trades:** It enables direct trades between users without the need for shared liquidity pools, reducing counterparty risk.
- **Execution Speed:** The off-chain bot logic allows for rapid, automated trade execution, which is crucial for capturing price movements in volatile markets.
- **Decentralized Security:** The use of Ergo's eUTXO smart contracts ensures that every order is validated on-chain before settlement, providing a built-in layer of trust and transparency.

## Development and Progress

The project has been in active development since at least late 2023. Key milestones have included:

- **Q4 2023:** Initial work on foundational smart contracts, including the ```
execution box``` and ``` SettingsBox``` contracts.

- **Q2 2025:** The team added the ERG <> Token auto-compoundable and partially fillable grid contract and the Token to Token grid contract, followed by final optimizations. Work began on limit order contracts and a real-time order aggregation backend in Rust.
- **July 2025:** AVL Tree serializations were completed, as requested by the ErgoNames project. Grid contracts complete and reviews underway, exploring ways for a quick bootstrap and working on Machina real-time order aggregation backend in rust. 

## Considerations for Traders

While Machina Finance offers a powerful tool for automated trading, its performance depends on a well-designed strategy. Spacing the grid too widely can lead to missed opportunities, while a grid that is too narrow may reduce efficiency. The system is particularly well-suited for range-bound markets, but extreme volatility can cause price jumps that bypass set orders. Since it is native to Ergo, it is most seamless for traders within the Ergo ecosystem. For those interested in tracking market data, external tools can provide additional visibility. 

## How It Works: A Technical Summary

- **Grid Setup:** A trader defines a range and price intervals for their buy and sell orders.
- **Bot Monitoring:** An off-chain bot watches the market for price alignment.
- **Triggered Trades:** When a price trigger is hit, the bot prepares a transaction.
- **On-Chain Verification:** The transaction is sent to the Ergo network, where smart contracts validate the trade conditions before execution.
