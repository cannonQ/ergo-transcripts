# Crystal Pool | c8 | ErgoHack VIII - Community Call Summary

**Date:** June 17, 2024

## Executive Summary

This Ergo blockchain community call featured a comprehensive technical presentation by c8 about Crystal Pools, an innovative DEX (Decentralized Exchange) solution that aims to bridge the gap between centralized and decentralized trading. The presentation demonstrated how Crystal Pools enables instant, trustless trading on the Ergo blockchain while maintaining user control over their assets throughout the entire process.

C8 walked through a live demonstration showing users "Dark Mode Bob" and "Light Mode Alice" conducting Bitcoin trades that appear to function like a centralized exchange but are actually powered by real Ergo transactions happening in the background. The solution employs sophisticated smart contracts, Time Limited Multisig technology, transaction caching, and built-in wallet functionality to deliver the speed of centralized exchanges with the security and trustlessness of decentralized systems.

## Key Discussion Points

• **Live Trading Demo**: Demonstration of seamless Bitcoin trading between two users with instant order execution and notifications
• **Technical Architecture**: Deep dive into the 6-step process that occurs when creating sell orders, involving transaction creation, validation, signing, and submission
• **Smart Contract System**: Four core contracts (Deposit, Buy, Sell, Swap) utilizing Time Limited Multisig technology
• **Time Limited Multisig**: Innovative approach preventing fund hostage situations while enabling instant transactions
• **Transaction Caching**: Solution for mempool limitations and trading volume spikes
• **Built-in Wallet Security**: Analysis of security trade-offs and mitigation strategies
• **Distribution Strategy**: Desktop app availability and upcoming mobile application

## Decisions Made

• Desktop application build has been completed and is ready for distribution
• Mobile application development is planned for future release
• Native app distribution chosen over web-based solution to mitigate security risks
• Documentation and feature lists made available on Crystal Pools GitHub repository

## Notable Quotes

> "The cool part about this is that everything happens trustlessly. Bob and Alice interacted through a swap contract, each in control of their tokens during this whole time." - **c8**

> "Crystal Pools model aims to offer instant trading while keeping the user in control of his funds and settling all transactions on layer 1." - **c8**

> "After the blockchain advances to a certain height, the user automatically gains full access over deposited funds and the Crystal Pools service loses its veto right." - **c8**

## Participants

• **c8** - Primary presenter and Crystal Pools developer/technical lead

*Note: This appears to be a technical demonstration/presentation rather than a traditional discussion-based community call, with c8 as the sole identified speaker presenting the Crystal Pools project.*