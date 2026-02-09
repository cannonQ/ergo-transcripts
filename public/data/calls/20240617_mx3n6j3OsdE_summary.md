# Ergo Community Call Summary: Trustless Bitcoin Relay on Ergo

**Call Date:** June 17, 2024  
**Presenter:** Alex Chepurnoy (kushti)  
**Topic:** ErgoHack VIII Project - Trustless Bitcoin Relay

## Executive Summary

Alex Chepurnoy presented his ErgoHack VIII project focusing on implementing a trustless Bitcoin relay on the Ergo blockchain. The relay functions as a minimal Bitcoin client implemented as smart contracts, capable of validating proof-of-work, storing Bitcoin block headers, and building the best chain. This infrastructure enables Ergo contracts to react to Bitcoin transactions and blockchain data, potentially making Ergo a smart contract layer for Bitcoin.

The implementation consists of two main contracts: a relay contract that manages Bitcoin headers and chain validation, and a transaction inclusion validation contract that proves Bitcoin transactions were included in blocks with sufficient confirmations. The project aims to address efficiency issues seen in previous Bitcoin relays on other blockchains like Ethereum, while opening possibilities for trustless cross-chain applications, Bitcoin hashrate derivatives, and protocols like RGB++.

## Key Discussion Points

- **Core Functionality**: Implementation of a trustless Bitcoin relay as smart contracts on Ergo, validating proof-of-work and maintaining Bitcoin block headers
- **Use Cases**: 
  - Trustless Bitcoin hashrate derivatives for miner hedging
  - Making Ergo a smart contract layer for Bitcoin
  - Potential trustless Bitcoin-to-Ergo bridging
  - Cross-chain decentralized exchanges
- **Technical Architecture**: Two-contract system with efficient fork resolution and Merkle proof validation
- **Efficiency Improvements**: Designed to be more cost-effective than existing Bitcoin relays on Ethereum
- **Historical Context**: Reference to previous Bitcoin relay implementations on Ethereum and Nervos blockchain
- **Future Development**: Need for transaction parsers, economic incentive models, and concrete applications like RGB++

## Decisions Made

- All code released in public domain for both commercial and non-commercial use
- Contracts successfully tested in simulated blockchain environment
- GitHub repository made publicly available for community development
- Invitation extended for developers to build applications on top of the relay infrastructure

## Notable Quotes

> "So basically it's a minimal Bitcoin client done as a contract on the Ergo blockchain, which is validating proof of work and storing Bitcoin block headers and building best chain out of them." - **kushti** (explaining the core concept)

> "So come and build and profit from building smart players for Bitcoin on Ergo." - **kushti** (encouraging community participation)

> "The question is how to send back in a trustless way, because we cannot build trustless relay for Ergo on the Bitcoin blockchain." - **kushti** (identifying limitations for bidirectional bridging)

## Participants

- **Alex Chepurnoy (kushti)** - Presenter and lead developer of the trustless Bitcoin relay project, ErgoHack VIII participant