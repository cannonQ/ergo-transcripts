---
title: Braiding Lunarpunk and Solarpunk through Merged Mining
date: '2025-09-02'
author: Ergo Platform
tags:
- addresses
- box
- dexy
- ergo-blog
- ergoscript-context
- eutxo
- native-tokens
- registers
- sigma-chains
- sigmausd
- stealth-addresses
- tooling
- transaction
category: blog
blog_tag: Tooling
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Braiding-Lunarpunk-and-Solarpunk-through-Merged-Mining
glossary_hits:
- Addresses
- Box
- Dexy
- ErgoScript context
- Native tokens
- Registers
- Sigma Chains
- SigmaUSD
- Stealth Addresses
- Transaction
- eUTXO
---

# Braiding Lunarpunk and Solarpunk through Merged Mining

> **Published:** 2025-09-02 | **Author:** Ergo Platform | **Tag:** Tooling | **Type:** blog

**Related concepts:** Addresses, Box, Dexy, ErgoScript context, Native tokens, Registers, Sigma Chains, SigmaUSD, Stealth Addresses, Transaction, eUTXO

---

The question is simple. Can Lunarpunk and Solarpunk both survive when the security story bakes a form of mutually assured destruction into the design. The answer can be yes. The path runs through merged mining and a sidechain architecture that treats energy as the shared rope that binds two different value systems.

Lunarpunk values privacy first. The goal is freedom from surveillance and censorship. Users want real anonymity. They want credible resistance to capture.
Solarpunk values openness with rules. The goal is social scale with safety. Users want privacy from the public and accountability to known stewards inside a clear legal frame.

A Braid sidechain for Ergo can host both modes at once. One set of rails favors Lunarpunk privacy. Another set of rails favors Solarpunk transparency with controls. Merged mining ties both rails to the same proof of work energy. Each mode benefits from the other because both draw security from the same base.

## How the Braid sidechain works at a glance

Ergo uses an extended UTXO model. Each output carries registers that hold data for smart rules. The sidechain keeps that model.
- Boxes hold tokens and data.
- Special tokens mark governance boxes.
- Scripts read registers and enforce rules on spending.
- New boxes appear from consumed boxes and inherit clear instructions.

This model gives precise control over token flows. A rule can allow movement to a set of approved addresses. A rule can freeze a supply after a given height. A rule can check a proof before value moves.

## Merged mining as the braid of energy

Merged mining lets miners commit work to Ergo and to the sidechain in the same step. A single hash search advances both chains. The main chain attracts a broad set of miners. The sidechain borrows that strength. This creates a credible cost for an attacker across both systems. A strike against one faces the same wall of work that secures the other.

The result is a living form of mutual assured destruction in economic terms. Attackers meet a shared defense that draws from one energy pool. The cost of breaking one rail rises because the other rail raises the floor of required work.

## Assumptions that shape user outcomes

### Lunarpunk assumptions

- Anonymity is absolute unless a user shares proof by choice.
- The network resists censorship because miners validate proofs and do not need to read contents.
- The base chain has enough hash power to crush attacks.

### Solarpunk assumptions

- Public privacy remains intact. Stewards with viewing keys can see details as policy requires.
- Rules can stop transfers to barred addresses and can check identity proofs without public leaks.
- Audits run fast and at low cost through zero knowledge checks.

## Benefits to each camp

### Benefits in Lunarpunk mode
- Strong privacy in hostile settings.
- Room for open innovation in finance that does not rely on intermediaries.
- Censorship resistance that inherits the main chain defense.

### Benefits in Solarpunk mode
- Fit with regulated markets and enterprise needs.
- Lower manual overhead through automated proofs.
- Clear paths for stablecoin and cash like tokens that need rule checks.

## Built for Stablecoins and Real-World Assets
[Braid is engineered with a clear focus: stablecoins, real-world assets (RWAs), and Bitcoin-backed DeFi. ](https://twitter.com/ErgoHunter/status/1945928477317665017?utm_source=chatgpt.com) Out of the box, it offers: 
- **Multi-asset fees:** Pay transaction fees in the asset you’re using, USD-pegged tokens, gold tokens, you name it.
- **Trustless bridges:** Two-way pegging with Ergo and Bitcoin from day one, plus connectivity to Ethereum, Binance Smart Chain, and Cardano.
- **Financial primitives:** DEXs, lending pools, bonds, auctions, and proven stablecoin frameworks like SigmaUSD, DexyGold, and GluonGold.

## Global Transfer Policies: Compliance Without Compromise
[Braid introduces Global Transfer Policies (GTPs)](https://curiaregiscrypto.medium.com/braids-global-transfer-policies-vs-evm-a-simpler-more-flexible-approach-to-blockchain-control-50fce2bdff65), a flexible governance layer for token transfers. Issuers can define exactly how a token can be used, enabling whitelists, blacklists, jurisdiction-specific rules, or even Islamic finance compliance structures. 

Policies can be:
- Updated by a single entity, multi-signature setup, DAO vote, or timed schedule.
- Combined with privacy features, like stealth addresses and hidden amounts via Bulletproofs++, to balance compliance with confidentiality.

With GTPs, issuers can adapt to any regulatory climate without locking the whole network into one rulebook.

## Dark Circuits, Private Assets

Braid supports **dark tokens** and **private transaction circuits**, allowing assets to flow between transparent and private states as needed. For example:
- A stablecoin could remain fully transparent in the U.S. market.
- Once transferred to an EU-compliant gateway, it could move into a privacy-preserving circuit.

This flexibility empowers both open-market and privacy-conscious use cases without fragmenting liquidity.

## Programmability Without Limits

[Leveraging Ergo’s extended UTXO model, Braid enables contracts to directly reference both Bitcoin and Ergo blockchains.](https://docs.ergoplatform.com/uses/sidechains/sigma-chains/?utm_source=chatgpt.com) Combined with **RGB-like protocols** for Bitcoin metadata commitments, developers can build advanced DeFi tools: trustless Bitcoin-backed derivatives, algorithmic stablecoins, or tokenized RWA insurance contracts, on top of Bitcoin’s security layer.

## A quiet rebellion inside a cooperative garden

The world moves toward automated control. AI will audit. Rules will grow. A Braid sidechain on Ergo can keep space for privacy that does not bend. The same design can support transparent finance that serves markets and laws. Merged mining holds both with one rope of energy.

The braid can carry both stories. Shadow for those who need it. Sunlight for those who choose it. Strength for both because each draws from the same well. If we hold to narrow powers, strong proofs, and community checks, then Lunarpunk and Solarpunk can both survive. The result reads as quiet defiance inside a working civic garden.

See the full article from Armeanio [Exploring merged mining](https://curiaregiscrypto.medium.com/exploring-merged-mining-af087b566e6d) for more information on design, assumptions and trade-offs, or check out [the whitepaper directly](https://github.com/BetterMoneyLabs/braid/blob/master/whitepaper/whitepaper.pdf)!
