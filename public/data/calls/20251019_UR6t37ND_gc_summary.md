# Machina Finance: eUTXO-Native P2P DEX on Ergo — Community Call Summary

**Call Date:** 2025-10-19  
**Presenter:** Alisson Robson (anon_BR)

## Executive Summary

Alisson Robson presented Machina Finance, a P2P decentralized exchange built natively for Ergo's eUTXO model. Unlike traditional DEXs that emulate EVM contracts, Machina treats each order as an individual contract, enabling true P2P trading with grid-based orders and no intermediaries.

## Key Topics Discussed

• **Machina DEX Architecture** - eUTXO-native P2P exchange using individual contracts per order instead of liquidity pools
• **Grid Trading Strategies** - Auto-compounding and cumulative trading strategies based on kushti's grid contract concepts  
• **Contract Optimization** - Highly optimized ErgoScript contracts fitting 219-290 orders per transaction
• **Hermes Streaming Tool** - Real-time UTXO streaming service with mempool awareness for the broader ecosystem
• **Nautilus Wallet Integration** - Built-in batching mechanism to enable user-controlled transaction batching
• **Throughput Calculations** - Analysis showing 3,750+ orders per block capacity in worst-case scenarios

## Notable Announcements or Decisions

• **No Protocol Fees** - Machina will be a public good with no built-in protocol fees, similar to SigmaUSD
• **Roadmap Timeline** - Contracts under review now, Hermes completion by end of 2024, Machina SDK Q1 2025, mainnet beta Q2 2025
• **GraphQL Deprecation** - Acknowledged GraphQL implementation was unsuccessful, Hermes will replace it in Nautilus
• **Open Source Commitment** - All components will be open source and available for community use

## Technical Concepts Explained

• **eUTXO-Native Design** - Each order exists as individual contract rather than emulating account-based models
• **Grid Orders vs Liquidity Pools** - Users become their own market makers with controlled risk exposure
• **Contract Composability** - Ability to combine Machina orders with other protocols (SigmaFi, pools) in single transactions
• **Self-Custodial Trading** - Users maintain full control of assets without proxy contracts or intermediaries
• **Mempool Awareness** - Transaction chaining capability without waiting for confirmations

## Action Items or Follow-ups Mentioned

• Complete community review of smart contracts (in progress)
• Finish Hermes development by end of 2024
• Release Machina SDK in Q1 2025 to enable community integration
• Launch full mainnet beta in Q2 2025
• Replace GraphQL with Hermes in Nautilus wallet

## Suggested Tags

`machina-finance`, `p2p-dex`, `grid-trading`, `hermes`, `nautilus-wallet`, `fleet-sdk`, `contract-optimization`, `utxo-native`, `batching`, `mempool-streaming`