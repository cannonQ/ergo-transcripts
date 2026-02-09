# Ergo Community Call Summary - Blink: An Optimal Proof of Proof-of-Work

**Call Date:** July 2, 2024  
**Call Title:** Blink - An Optimal Proof of Proof-of-Work | Lukas Aumayr | Ergoversary Summit 2024

## Executive Summary

Lukas Aumayr presented a breakthrough research paper on "Blink," an optimal proof-of-work lite client protocol developed in collaboration with researchers from multiple institutions. The presentation addressed the critical challenge of enabling lightweight blockchain verification without requiring users to download entire blockchains (currently ~600GB for Bitcoin). Blink represents a significant advancement over existing solutions by providing constant communication complexity while maintaining security guarantees.

The Blink protocol works by having verifiers inject randomness into the blockchain and wait for provers to respond with a specific proof structure: k blocks before a randomness-containing block, followed by k more blocks (2k+1 total). This design prevents pre-mining attacks while ensuring the identified block is both stable and recent, making it suitable for applications like mobile wallets, cross-chain bridges, and fast blockchain bootstrapping.

## Key Discussion Points

• **Lite Client Necessity**: Current blockchain sizes make full node operation impractical for mobile devices and cross-chain applications, necessitating lightweight verification methods

• **Existing Solutions' Limitations**: 
  - SPV (Simplified Payment Verification) has linear communication complexity
  - NIPoPoWs require blockchain modifications for interlinking
  - Zero-knowledge proofs have high computational overhead for provers

• **Blink Protocol Innovation**: Uses randomness injection to force fresh mining while requiring 2k+1 blocks in a specific structure to prevent adversarial attacks

• **Security Analysis**: Demonstrated how naive approaches fail against minority adversaries who can exploit fork-and-switch attacks

• **Practical Applications**:
  - Fast blockchain bootstrapping (1.6KB vs 600GB download)
  - Mobile wallet verification
  - Cross-chain bridge construction
  - Historic transaction verification
  - State commitment verification

• **Optimistic Bridge Design**: Integration with smart contracts for trustless cross-chain asset transfers using dispute periods and on-demand proof generation

## Decisions Made

No specific decisions were made during this presentation, as it was a research presentation rather than a governance or development planning call.

## Notable Quotes

> "So this might be fine if I run a full node on my desktop computer, but if I'm on my phone, downloading and storing 600 gigabytes might not be feasible." - **Lukas Aumayr** on the practical necessity for lite clients

> "So indeed, a minority adversary can convince the light client of an invalid state of the blockchain. So indeed, this construction is not secure." - **Lukas Aumayr** explaining why naive approaches to lite clients fail

> "We have a light client construction that requires only a constant overhead in terms of communication. In particular, we require a proof of length 2k plus 1." - **Lukas Aumayr** summarizing the key achievement of optimal efficiency

## Participants

• **Lukas Aumayr** - Primary presenter and co-author of the Blink research paper
• **Co-authors mentioned**: Zeta Varikyoti, Matteo Maffei, Julius Gaffino, Dionysis Zindros (not present but credited)

*Note: This was a research presentation at the Ergoversary Summit 2024, with Lukas Aumayr as the sole speaker presenting to the Ergo community.*