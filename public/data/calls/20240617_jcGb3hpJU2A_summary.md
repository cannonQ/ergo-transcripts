# Sigmanauts Mining Pool Community Call Summary

**Date:** June 17, 2024  
**Topic:** Permissionless Pool Parameters & Reward Swapping (ErgoHack VIII Project)

## Executive Summary

The call featured qx() and Marc the Shark presenting their ErgoHack VIII winning project called "Permissionless Pool Parameters and Reward Swapping" (PPRS). The team demonstrated an innovative mining pool system that allows miners to swap their ERG rewards for other tokens (like Rosen BTC) without requiring centralized web interfaces or manual intervention. Their solution builds on top of the existing Sigmanauts mining pool infrastructure, using creative workarounds to avoid modifying MiningCore while enabling advanced features like automatic token swaps, customizable minimum payouts, and NFT-based configuration management.

The project represents a significant step toward decentralized mining pool operations, where miners can set preferences through blockchain-based methods rather than traditional web dashboards. The team successfully implemented PPLNS calculations for token swaps and created a mirrored database system that processes mining data without disrupting the core mining infrastructure.

## Key Discussion Points

• **Sigmanauts Mining Pool Background**: Community-driven educational mining pool with automated bonus payments, notification bots, and stress testing infrastructure

• **Technical Architecture**: Built a mirrored server system with APIs that pull data from MiningCore without modifying the core software, allowing for token swap calculations

• **PPLNS Implementation**: Detailed explanation of Pay Per Last N Shares calculation for token swaps, with visual demonstration of how mining rewards are distributed proportionally

• **NFT Configuration System**: Future implementation will use NFTs to store miner preferences (token ratios, minimum payouts, wallet addresses) in a permissionless, on-chain manner

• **Token Swap Mechanism**: Miners can designate token preferences through rig names, with automatic swapping from ERG to desired tokens like Rosen BTC

• **Database Design**: Custom tables track Rosen balances, token preferences, and payout thresholds while maintaining compatibility with existing MiningCore infrastructure

• **Future Integrations**: Plans for DuckPools integration, grid bot trading, hash rate rentals, and smart contract implementation

• **Security Considerations**: NFT validation ensures only wallet owners can modify their own mining configurations

## Decisions Made

• The project will remain in alpha testing with limited access to prevent issues during development
• Only designated testers (Marc, CannonQ) will receive payouts during the testing phase
• Future development will focus on automating the ERG-to-token swap process on Spectrum DEX
• The team will transition from the current mirrored database approach to direct MiningCore integration once NFT system is implemented

## Notable Quotes

**qx():** "If the ethos of Ergo is that I can point my miner to a pool and make decisions on a blockchain by supporting the pool that's supporting a new configuration, then why can't we utilize that kind of technique with wallets and what's on-chain to do that why are we relying on a web server in the amazon cloud or something to set preferences"

**Marc the Shark:** "It'd be great if we could have some type of system that allows the miners to interact with, and then they can essentially look at our code, see how that works, and then have this NFT essentially be the middleman until we have a smart contract type of layer"

**qx():** "We can actually gamify that we can say look we see the price dropping and we know in one week we spent you know people suck out a thousand Rosen tokens so why don't we buy that now as Rosen is dipping you know if it's going to spike so you can you can do these kind of calculations"

## Participants

• **qx()** - Sigmanauts Mining Pool operator and lead developer
• **Marc the Shark** - Co-developer and mining pool collaborator  
• **CannonQ** - Team member and tester (mentioned)

*Note: This project won first place in ErgoHack VIII*