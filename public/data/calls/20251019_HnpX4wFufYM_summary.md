# Ergo Community Call Summary - October 19, 2025

## Executive Summary

MGPai presented a comprehensive technical overview of implementing native token staking on UTXO-based blockchains, specifically focusing on adapting existing Ethereum/EVM staking models for Ergo's architecture. Drawing from his experience building a native token staking platform on Cardano, MGPai explained how Merkle trees and AVL trees can solve the scalability challenges inherent in UTXO staking systems. The presentation demonstrated how off-chain data storage combined with on-chain verification can create efficient staking mechanisms while maintaining decentralization.

The discussion highlighted the fundamental differences between account-based models (like Ethereum) and UTXO models (like Ergo and Cardano), particularly how staking requires constant-size data storage regardless of user count. MGPai's solution uses tree-based data structures to store user balances off-chain while keeping only a 32-byte root hash on-chain, enabling scalable staking without the massive node size requirements seen in Ethereum.

## Key Discussion Points

• **UTXO vs Account Model Challenges**: Explanation of why traditional EVM staking doesn't translate directly to UTXO chains due to data storage limitations and transaction bottlenecks

• **Merkle Tree Implementation**: Detailed walkthrough of how Merkle trees and Merkle Patricia Tries enable constant-size on-chain storage while maintaining data integrity

• **Off-chain Data Recovery**: Discussion of how users can recover their staking data by traversing historical blockchain transactions, eliminating trust requirements

• **Ergo's AVL Tree Advantage**: MGPai noted that Ergo's native AVL tree implementation is more efficient than Cardano's Merkle Patricia Trie, offering smaller proof sizes and cheaper transactions

• **Dynamic Emission Rates**: Introduction of flexible reward mechanisms that can adjust to market conditions without contract redeployment

• **Decentralization Concerns**: Comparison of truly decentralized protocols versus those with permissioned off-chain operators (common issue on Cardano)

• **Integration Possibilities**: Discussion of integrating staking directly into Nautilus wallet to eliminate front-end dependencies and security risks

## Decisions Made

• No specific decisions were made during this presentation, but several potential directions were identified:
  - Exploring integration of apps like HODLerg directly into Nautilus wallet
  - Potential future implementation of the staking system on Ergo (though no current plans exist)
  - Continued development of UTXO-based DeFi protocols using similar off-chain/on-chain verification patterns

## Notable Quotes

**MGPai**: *"The contract only does verification. It doesn't need to do all the data storage or anything. You provide the exact data that it needs, the least amount of data it needs to actually prove what you're doing is correct, and you're not providing false information."*

**MGPai**: *"In my basement, I can run an Ergo node, which has what, like 20 gigs, 30 gigs? It's nothing. Flash Drive has more storage than that... I can run plenty of these compared to just one Ethereum node."*

**MGPai**: *"Know your assumptions... Even on Cardano, if these projects are all open source, even if the off-chain is all open source, the website is all open source, it doesn't matter because you need the NFT to actually run the off-chain."*

## Participants

• **MGPai** - Primary presenter, developer who implemented native token staking on Cardano for ZenGate's Palm platform
• **Grayman** - Active community participant asking technical questions about data recovery and decentralization
• **Joe** - Mentioned as previous speaker from Sigmanauts (event sponsor)
• **Allison** - Nautilus wallet developer (present in audience)
• **Community members** - Various unnamed participants asking questions about technical implementation details
