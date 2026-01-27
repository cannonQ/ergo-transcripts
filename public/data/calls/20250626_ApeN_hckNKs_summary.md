# Game of Prompts (GOP) - ErgoHack 10 Community Call Summary

**Call Date:** 2025-06-26  
**Presenter:** Josemi  
**Topic:** Game of Prompts Platform Demonstration

## Executive Summary

Josemi presented Game of Prompts (GOP), an innovative platform that combines AI development with blockchain technology under the slogan "AI challenges, blockchain solutions." The platform is built on two core technologies: Celaut (ensuring immutable and isolated service execution) and the Ergo blockchain (providing transparent reward distribution and result verification). GOP transforms AI development into an open, competitive environment where creators can design AI challenges as game services, and a global community of developers can submit solver services to compete for prizes.

The demonstration showcased a complete workflow using a Snake game AI challenge, from service creation and packaging through local execution to blockchain-based score validation and prize distribution. The platform uses cryptographic commitments to keep scores secret during competition while ensuring verifiable fairness through smart contracts. This approach addresses centralization issues in current AI development by making it more accessible, transparent, and collaborative.

## Key Discussion Points

• **Platform Architecture**: GOP combines Celaut's immutable, isolated service execution with Ergo's transparent blockchain ledger
• **Core Components**: Game services (AI benchmarks), solver services (participant AI models), GopWeb portal (central hub), and Ergo blockchain (secure ledger)
• **Workflow Process**: Creators design challenges and generate secrets, players develop AI solutions, local testing occurs in isolated environments, and blockchain validates results
• **Cryptographic Security**: Uses commitment schemes to hide scores during competition while enabling post-deadline verification
• **Live Demonstration**: Complete walkthrough of Snake game AI challenge creation, solver development, testing, and prize distribution
• **Future Applications**: Platform designed for diverse AI challenges including algorithmic trading, scientific discovery, resource optimization, and natural language processing
• **Trust Mechanisms**: Immutable services prevent tampering, isolated execution ensures fair testing, and smart contracts automate prize distribution

## Decisions Made

• Platform is currently in alpha version with recommendation to use virtual machines for testing
• Snake demo serves as proof of concept with plans for more complex AI challenges
• Game creators receive 20% commission from total prize pool
• Participants can download game services through Celaut network or centralized mirrors (IPFS, Google Drive, etc.)
• Score lists include real score plus decoys to encourage participation until deadline

## Notable Quotes

> **Josemi**: "AI challenges, blockchain solutions. GOP is a new platform designed to help AI development become more open and collaborative."

> **Josemi**: "So GOP aims to get more diverse solutions by opening up challenges to everyone. It makes building and testing AI models more distributed, transparent and accessible."

> **Josemi**: "If an AI's performance on a task can be quantifiably scored, and if its environment can be built as a third-party game service, it can be a Game of Proms challenge."

## Participants

• **Josemi** - Project lead and presenter, demonstrated the complete GOP platform workflow including technical implementation details and future vision

*Note: This was a solo presentation/demonstration format rather than a discussion-based community call*