# Lithos: The Future of Proof-of-Work Mining — Community Call Summary

## Executive Summary

Cheese Enthusiast presented Lithos, a decentralized mining pool protocol designed to bring transparency and decentralization to proof-of-work mining on Ergo and other blockchains. The protocol addresses centralization issues in traditional mining pools through novel technologies including Non-Interactive Share Proofs (NISPs) and collateralized mining, with a testnet launch planned for the week of November 2nd.

## Key Topics Discussed

• **Mining Pool Centralization Issues** - Problems with traditional pools having complete control over payments and block production
• **Non-Interactive Share Proofs (NISPs)** - Novel compression technique to prove mining work using ~10 high-difficulty shares instead of millions
• **Collateralized Mining Pools** - System allowing third-party ERG holders to provide block rewards in exchange for fees
• **Censorship Resistance** - Ensuring miners maintain control over block production and transaction selection
• **Blockchain Agnostic Design** - Ability to create decentralized pools for Bitcoin, Litecoin, and other PoW chains using Ergo smart contracts
• **MEV and Storage Rent** - Additional revenue opportunities for miners through transaction ordering and storage rent collection
• **Lithos Token Economics** - Proposed token system to incentivize participation and create a PoW economy
• **Testnet Architecture** - Local stratum implementation supporting Rigel Miner and NB Miner initially
• **Difficulty Selection** - Miners can choose their own difficulty levels, affecting payment frequency vs. amount

## Notable Announcements or Decisions

• **Testnet Launch**: Planned for the week of November 2nd, 2025
• **Miner Support**: Initial testnet will support Rigel Miner and NB Miner, with plans to add Team Red Miner and SRB Miner
• **HTML UI Development**: Working on web-based interface to replace terminal-only client
• **Cross-Chain Mining**: Future support for mining Bitcoin/Litecoin through Ergo smart contracts using Rosen Bridge integration

## Technical Concepts Explained

• **Non-Interactive Share Proofs (NISPs)**: Compression technique using concepts from NIPoPoWs to prove mining work with minimal on-chain storage
• **Optimistic Rollups**: Layer-2 scaling solution for efficient NISP validation using fraud proofs
• **Collateralization Process**: How lenders provide ERG equal to block rewards, enabling instant miner payouts while avoiding 720-block confirmation wait
• **Local Stratum**: Client-side stratum implementation eliminating stale shares and enabling miner-controlled block production
• **Difficulty-Based Rewards**: System where miners choose difficulty levels, trading payment consistency for potential reward amounts

## Action Items or Follow-ups Mentioned

• Complete HTML UI development for the Lithos client
• Finalize off-chain code integration for testnet
• Release testnet installation instructions by end of October
• Expand mining software support beyond initial Rigel/NB Miner compatibility
• Develop MEV integration features for mainnet
• Define Lithos token economics and distribution mechanisms

## Suggested Tags

`lithos`, `decentralized-mining`, `mining-pools`, `nisps`, `collateralization`, `censorship-resistance`, `testnet`, `proof-of-work`, `mev`, `storage-rent`