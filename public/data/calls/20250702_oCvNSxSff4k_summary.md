# Ergo Community Call Summary: Lithos Mining Pool Protocol

**Call Date:** 2025-07-02  
**Call Title:** Lithos | Cheese Enthusiast | Ergoversary 2025

## Executive Summary

This community call featured an in-depth presentation by Cheese Enthusiast on Lithos, a decentralized mining pool protocol for the Ergo blockchain. The presentation focused specifically on preparing miners for the upcoming testnet launch, with particular emphasis on the difficulty parameter and how it affects mining rewards. Lithos represents a significant innovation in mining pool technology, using smart contracts to ensure fairness and transparency while giving miners complete control over block production, including transaction selection and storage rent claiming.

The core technical discussion centered around Lithos's unique payment system based on non-interactive share proofs, which differs fundamentally from traditional mining pool payment methods. Cheese Enthusiast explained how miners can adjust difficulty parameters to control payment frequency and amounts, though emphasized that higher difficulty settings don't guarantee more earnings over time - they simply change payment consistency patterns while maintaining proportional rewards based on hash rate contribution.

## Key Discussion Points

• **Lithos Protocol Overview**: Decentralized mining pool using smart contracts for fairness and transparency
• **Miner Control Features**: Complete control over block production, transaction selection, and storage rent claiming  
• **Collateralized Mining**: System allows both miners and non-miners to earn ERG through pool collateralization
• **Difficulty Parameter Control**: Detailed explanation of how local difficulty settings affect payment frequency vs. amount
• **Payment System Innovation**: Non-interactive share proofs replace traditional PPS/PPLNS payment methods
• **Testnet Preparation**: Guidance for miners on what to expect and test during the upcoming testnet phase
• **MEV and Transaction Selection**: Features available in protocol but not yet integrated into testnet UI
• **Demurrage Collection**: Automatic collection feature to be included in testnet client

## Decisions Made

• Testnet will launch with difficulty adjustment and demurrage collection features
• MEV and transaction selection features will not be included in initial testnet UI (manual implementation possible)
• Default difficulty will be automatically set based on individual miner hash rates
• Community encouraged to extensively test difficulty parameter adjustments during testnet phase

## Notable Quotes

> "Lithos uses a new system based on non-interactive share proofs... the important part for miners is that changing the difficulty inside this payment system changes how you are paid and how much you're paid." - **Cheese Enthusiast**

> "So as you can see, increasing the difficulty doesn't necessarily guarantee you more ERG. Instead, it changes the consistency of your payments, and it changes the local instability in the amount of ERG you get for a small period of time." - **Cheese Enthusiast**

> "Lithos doesn't let you cheat to get more ERG than you're deserved, right? If you have 500 mega hashes and you're mining at a 700M difficulty, you're not going to get more ERG per time." - **Cheese Enthusiast**

## Participants

• **Cheese Enthusiast** - Lithos protocol developer and presenter, responsible for testnet development and miner education