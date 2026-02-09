# Ergo Community Call Summary - June 17, 2024

## Executive Summary

This community call featured a presentation by the Atomic Swap Team on their ErgoHack VIII project: Ergo-Bitcoin Lightning Atomic Swaps. The team successfully demonstrated a proof-of-concept implementation that enables atomic swaps between Ergo testnet and Bitcoin Lightning Network using hash preimages as secrets. This represents a significant technical advancement in cross-chain interoperability, moving from their previous point-based swaps (PTLCs) to hash-based swaps (HTLCs) to leverage Lightning Network's native hash preimage system.

The implementation involved establishing Bitcoin testnet and Lightning environments, modifying existing ErgoScript atomic swap contracts to use SHA-256 preimages instead of curve points, and successfully executing a live demonstration of the swap process. The team created comprehensive tooling and documentation, making their work accessible for future development and testing.

## Key Discussion Points

• **Technical Implementation**: Modified ErgoScript contracts to use SHA-256 hash preimages instead of curve points, leveraging Lightning Network's native invoice system
• **Security Model**: Explained how SHA-256 preimage resistance provides security for time-locked contracts, with proper randomness preventing rainbow table attacks
• **Lightning Integration**: Detailed how Lightning invoices automatically generate SHA-256 preimages that can serve as atomic swap secrets
• **Development Environment**: Created Bitcoin Regtest Tooling with helper scripts for easy setup of Bitcoin and LND nodes
• **Live Demonstration**: Successfully executed a complete atomic swap between Ergo testnet and Lightning regtest, showing the entire process from invoice generation to fund claiming
• **Future Plans**: Announced upcoming public testnet launch and ongoing development of the Atomic Analog Swap project

## Decisions Made

• Public testnet launch planned for the near future to allow community participation and testing
• Project will continue development with regular updates posted on both Atomic Analog Swap Discord and Ergo Discord
• Team is actively seeking community contributions and new ideas for the project
• All tooling and documentation made available through GitHub repositories for open development

## Notable Quotes

> "Hash algorithms such as SHA-256 are built to be preimage attack resistant. Difficulty in cracking the preimage allowed it to be used as a secure secret in the atomic swap protocol." - **deathgripson**

> "Since it was implemented very generally, then it's allowed to be used as a secret in Atomic Swaps, basically." - **deathgripson** (referring to Lightning's preimage system)

> "We're planning on launching a public testnet soon. So yeah, anyone who wants to participate in the public testnet will be able to do so very, very soon." - **deathgripson**

## Participants

• **deathgripson** - Lead presenter and developer from the Atomic Swap Team, demonstrated the Ergo-Bitcoin Lightning atomic swap implementation and provided technical explanations throughout the presentation