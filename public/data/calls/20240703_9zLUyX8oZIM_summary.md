# Ergo Community Call Summary - July 3, 2024

## Executive Summary

This community call featured Cipher presenting a comprehensive overview of the RGB++ protocol, positioned as a "complete edition" that aims to provide native programmability and scalability solutions for Bitcoin. The protocol leverages Bitcoin's native features (PoW and UTXO model) rather than adopting Ethereum-style solutions like account models and PoS consensus. The RGB++ protocol implements client-side validation by attaching off-chain data and execution logic to Bitcoin UTXOs, with verification handled by the CKB blockchain.

The presentation outlined a three-part solution: Layer 1 programmability through isomorphic binding between Bitcoin and CKB transactions, cross-chain "leap" functionality that enables asset transfers without bridges, and a scalability extension that supports UTXO-based Layer 2 solutions with PoS consensus. Cipher's team is developing the UTXO Stack, described as an "OP Stack plus EigenLayer for Bitcoin" that maintains UTXO nativity without EVM compatibility or bridge requirements.

## Key Discussion Points

• **Four main Bitcoin scalability approaches**: Sidechains (multisig bridges + EVM), Rollups (BitVM-based, likely 4+ years away), Lightning Network (mature but limited to payments), and Client-side validation (RGB, Taproot Assets, RGB++)

• **RGB++ Protocol Core Concept**: Attaching extra data and program logic to Bitcoin UTXOs through isomorphic binding with CKB blockchain transactions

• **Cross-chain Leap Technology**: Enables asset transfers between different UTXO-based chains without traditional bridges by transferring ownership while keeping assets on CKB

• **Complete Edition Components**: Layer 1 programmability, cross-chain leap functionality, and Layer 2 scalability with UTXO+PoS architecture

• **Security Model**: Layer 1 security matches Bitcoin's PoW, Layer 2 security similar to optimistic rollups with challenging periods and staking mechanisms

• **Ecosystem Development**: Multiple projects including fungible/non-fungible token marketplaces, JoyID wallet, stablecoin projects, and asset wrapping tools for BRC-20, ORC-20, and Runes

## Decisions Made

No specific decisions or action items were mentioned in this presentation-style call. The content focused on explaining the protocol rather than making operational decisions.

## Notable Quotes

• **"We are going to build some native programmability and scalability solution for Bitcoin with a native way... So when we call the native, means we use the native feature of Bitcoin itself, which is PoW and UTXO"** - Cipher, explaining the fundamental approach

• **"We mix programmability directly on Bitcoin Layer 1. And with this programmability, we do the extension on Layer 2 to make it scalable."** - Cipher, describing the core solution architecture

• **"We are not BitVM, and we are not EVM, and we are not Rollup, and there's no bridge needed."** - Cipher, differentiating RGB++ from other Bitcoin scaling solutions

## Participants

• **Cipher**: Primary presenter, representing the RGB++ protocol development team and UTXO Stack solution company

*Note: This appears to be a presentation-style call with Cipher as the main speaker. Other participants may have been present but did not speak during the recorded portion.*