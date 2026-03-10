---
title: 'SigmaChains Pt.1 : Chain Commitments'
description: 'ErgoForum discussion: SigmaChains Pt.1 : Chain Commitments'
tags:
- autolykos
- box
- ergoforum
- ergohack
- registers
- sigma-chains
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/sigmachains-pt-1-chain-commitments/4817
created: '2024-07-16'
last_activity: '2024-07-16'
posts_count: 1
views: 197
likes: 6
glossary_hits:
- Autolykos
- Box
- ERGOHACK
- Registers
- Sigma Chains
- Transaction
---

# SigmaChains Pt.1 : Chain Commitments

> **Forum thread:** [https://ergoforum.org/t/sigmachains-pt-1-chain-commitments/4817](https://ergoforum.org/t/sigmachains-pt-1-chain-commitments/4817)
> **Category:** Uncategorized | **Created:** 2024-07-16 | **Posts:** 1 | **Views:** 197

**Related concepts:** Autolykos, Box, ERGOHACK, Registers, Sigma Chains, Transaction

---

### Post #1 — @kushti (2024-07-16)

In this series of forum posts, I am going to uncover Ergo-specific sidechaining solutions discovered during ErgoHack VII and after.  
Chains deploying such techniques and based on Ergo’s Sigma contracts are called *SigmaChains*, regardless their consensus and relationship with the Ergo blockchain (merge-mined sidechains, dedicated PoW blockchains, dedicated hybrid or non-PoW blockchains etc).

In the first post, I am going to provide possible constructions for trust-minimized or trustless ways to deliver state of another chain, for different scenarios (main- and side-chain, dedicated chains with different consensus mechanisms etc). Data of another chain posted on blockchain of interest is what we are calling **chain commitment**. Chain commitments can be used then for trustless transfers, cross-chain contracts etc.

* the simplest option is merged-mined sidechain, where (some) Ergo miners are mining another blockchain at the same time. In such setting miners trivially deliver main chain commitments on sidechain (as Ergo chain header is a part of a sidechain header), and to deliver sidechain commitment on Ergo blockchain we post sidechain block data in a box associated with NFT which can be updated by Ergo block miner only, and update logic can be combined with emission logic. Then sidechain block header would be made of Ergo block header, box proof and box data, where sidechain state and transactions are committed via box registers. Update contract draft was done during ErgoHack VII and available at [ergohack-sidechain/contracts/MainChain/SideChainState.es at main · ross-weir/ergohack-sidechain · GitHub](https://github.com/ross-weir/ergohack-sidechain/blob/main/contracts/MainChain/SideChainState.es)
* for dedicated chains, we need to build trustless relay on both main and sidechains. Building relay on a sidechain could be trivial with Ergo header support in Sigma. Building trustless relay on Ergo for sidechain also not hard for Autolykos2-based sidechain, simple PoWs (such as sha256). Another option (which can be used for rewarding posting sidechain blocks via trustless relay as well) is incentivizing miners with part of emission rewards (like BIP-301 in Bitcoin, but with constant rewards from sidechain emission economic security here looks better than in BIP301). So we can have emission contract on the sidechain which is (using relay) rewarding mainchain miners for posting correct sidechain data on the mainchain. Thus part of sidechain emission is going to mainchain miners. Sidechain in this case could be on PoS or other non-PoW consensus even.
