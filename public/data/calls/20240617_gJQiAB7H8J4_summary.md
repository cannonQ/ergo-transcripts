# Ergo Community Call Summary: Option Pools for ErgoHack VIII

**Date:** June 17, 2024  
**Presenter:** Quokka (KrasaviceBlasen team)

## Executive Summary

The KrasaviceBlasen team presented their ErgoHack VIII submission, Option Pools - a pool-to-peer options trading AMM protocol built on Ergo's layer 1. The project addresses critical issues plaguing DeFi options markets, which currently represent only 0.2% of total DeFi TVL due to high risk, poor liquidity, and performance constraints. Their solution leverages Ergo's UTXO model and superior performance to implement Black-Scholes options pricing directly on-chain, something too computationally expensive for other L1 networks like Ethereum.

The team successfully demonstrated live on-chain options trading using their ERG-USD pool, showing both call and put option purchases with real-time pricing that responds to market demand. By building on Ergo's layer 1, they minimize attack surfaces and risk assumptions while achieving the computational complexity needed for sophisticated options pricing. The vision is to make Ergo the hub of DeFi options through integration with existing protocols like DuckPools for enhanced liquidity.

## Key Discussion Points

• **Current DeFi Options Problems**: Risk (complex L2 implementations, oracle dependencies), liquidity (capital inefficiency vs. CeFi), and performance (computational constraints on L1 networks)

• **Ergo's Advantages**: Layer 1 implementation reduces risk assumptions, UTXO model minimizes attack surfaces, superior performance enables complex on-chain calculations

• **Technical Implementation**: Black-Scholes pricing model implemented directly on-chain with mathematical functions (logs, exponentials, square roots) built in ErgoScript

• **Live Demonstration**: Successful trading of call and put options through ERG-USD pool with dynamic pricing based on market demand

• **Pool Design Features**: Dual-asset pools (ERG/SigmaUSD), configurable ratios for different market sentiments, dynamic pricing responding to volume

• **Future Expansion**: Bitcoin options pools planned with Rosen Bridge launch, integration with DuckPools for enhanced liquidity

• **Community Contributions**: Mathematical functions and volatility oracle made freely available to Ergo developer community

## Decisions Made

• Focus future development on Delta and Vega neutral pools after code refactoring
• Clean up and audit code before mainnet deployment
• Integrate with DuckPools for liquidity solutions in future versions
• Make mathematical functions and volatility oracle available as public utilities for other developers

## Notable Quotes

> "On Ergo, we can build option pools directly on layer 1, minimizing the set of risk assumptions. By leveraging the UTXO model, we minimize potential attack surfaces as our AMM moves away from computation and instead towards verification." - **Quokka**

> "We just purchased an option directly on-chain on Ergo using Black-Scholes on the layer 1. This is some pretty cool stuff." - **Quokka**

> "Because once data is on-chain, it's like public property, free for anyone to use. So we think these contributions will be valuable to the community." - **Quokka**

## Participants

**Quokka** - Lead presenter from KrasaviceBlasen team, demonstrated the Option Pools protocol and provided technical explanations

---
*For questions about Option Pools, the team can be reached via the DuckPools Discord. Code and technical documentation are available on GitHub.*