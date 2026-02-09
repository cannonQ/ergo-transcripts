# Ergoversary Summit 2024: Sigma Trees Community Call Summary

**Call Date:** July 1, 2024  
**Presenter:** Alexander Chepurnoy (kushti)  
**Topic:** Sigma Trees - A Rational Foundation for Smart Money

## Executive Summary

Alexander Chepurnoy delivered a comprehensive technical presentation on Sigma Trees, the foundational technology underlying Ergo's smart contract system, during the blockchain's fifth anniversary celebration. He traced the evolution of Ergo's contractual layer from its initial development in 2016-2017 through to the current 6.0 version in development. The presentation explained how Sigma Trees unify all blockchain operations under a single tree-based model, where both signatures and smart contracts are encoded uniformly, eliminating the need for separate account types like other blockchains.

Chepurnoy demonstrated how the system has enabled numerous applications including Ergo Mixer, decentralized exchanges, stablecoins, lending protocols, and trustless bridges. He outlined the technical architecture where contracts compile to serialized sigma trees stored on the blockchain, which are then reduced to signature statements during execution using blockchain context. The presentation concluded with forward-looking applications for merge-mined sidechains, enhanced layer 2 solutions, and potential non-blockchain implementations like digital smart cash systems.

## Key Discussion Points

• **Historical Development Timeline**: Evolution from initial 2016-2017 design through mainnet launch in 2019 to current 6.0 development
• **Unified Contract Model**: How Ergo eliminates the distinction between accounts and contracts by encoding everything as sigma trees
• **Sigma Protocol Integration**: Use of zero-knowledge preserving signatures with complex AND/OR/threshold combinations
• **Real-World Applications**: Comprehensive overview of existing Ergo ecosystem applications built on sigma trees
• **Technical Architecture**: Compilation process from ErgoScript to sigma trees and execution via blockchain context reduction
• **Future Extensions**: Potential applications in merge-mined sidechains, layer 2 solutions, and non-blockchain environments
• **Costing Evolution**: Transition from ahead-of-time costing to just-in-time costing in version 5.0
• **Development Tools**: Visual tooling and Blockly for constructing signature statements without coding

## Decisions Made

• Version 6.0 activation planned for late 2024 pending miner support
• Continued focus on non-breaking development of the contractual layer
• Exploration of enhanced layer 2 solutions using augmented sigma trees

## Notable Quotes

> "And in Ergo everything is a contract and I'm going to explain how is it possible. And why Sigma trees is the best known choice for smart money?" - **kushti** on Ergo's unified approach

> "So we don't have accounts, contracts, whatever, so we just have trees where both signature statements and programs are encoded in the same way. They're living under the same tree." - **kushti** explaining the unified model

> "Because after all, this tree model is naturally answering the question, can a digital coin be spent at the moment and with signatures provided or not." - **kushti** on the natural fit for digital cash systems

## Participants

• **Alexander Chepurnoy (kushti)** - Ergo founder and lead developer, presenter of the technical overview on Sigma Trees architecture and applications