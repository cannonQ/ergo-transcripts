---
title: Decentralized P2P options contracts on Ergo
description: 'ErgoForum discussion: Decentralized P2P options contracts on Ergo'
tags:
- addresses
- box
- ergoforum
- ergoscript
- ergoscript-context
- exle
- registers
- sigma-protocols
- sigmausd
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/decentralized-p2p-options-contracts-on-ergo/3763
created: '2022-08-05'
last_activity: '2022-08-13'
posts_count: 2
views: 969
likes: 15
glossary_hits:
- Addresses
- Box
- EXLE
- ErgoScript
- ErgoScript context
- Registers
- Sigma protocols
- SigmaUSD
- Spectrum
- Transaction
---

# Decentralized P2P options contracts on Ergo

> **Forum thread:** [https://ergoforum.org/t/decentralized-p2p-options-contracts-on-ergo/3763](https://ergoforum.org/t/decentralized-p2p-options-contracts-on-ergo/3763)
> **Category:** Uncategorized | **Created:** 2022-08-05 | **Posts:** 2 | **Views:** 969

**Related concepts:** Addresses, Box, EXLE, ErgoScript, ErgoScript context, Registers, Sigma protocols, SigmaUSD, Spectrum, Transaction

---

### Post #1 — @kushti (2022-08-05)

Options contracts can be useful in many situations for profitable trading, reducing risks, hedging portfolio etc. It is desirable to have on-chain options contracts where writing and trading options contracts do not involve additional security risks (in comparison with e.g. trading on ErgoDEX).

In this post I am going to sketch a solution for doing options on top of Ergo, which could be useful in other applications, thus can be considered as a DeFi design pattern. Our solution creates fully p2p decentralized options contracts, following idea of self-sovereign DeFi. UTXO nature of the Ergo blockchain makes the solution truly elegant.

Below we consider European-style options, as American would be even simpler. Futures also could be implemented in a similar way I guess. For European-style we consider settlement period (for example, of ~1 day which is about 720 blocks). For example, we consider a right to sell ERG for USD, then options writer is locking SigUSD in the contract, and options buyer may sell ERG during settlement period.

We consider options contract as an optional trade settlement contract, where right to perform the trade is tradeable per se. Thus we break its implementation into two entities and operations on top of them.

One entity is swap contract, which is like simplest swap contract from ErgoScript tutorial, but non-tradeable and non-refundable before the settlement period, during the settlement the swap could happen if contract NFT (see below) is present in inputs, and swapped asset (ERG in our example) is going to an address associated with NFT. After the settlement period funds locked in swap contract are refundable to options contract writer.

Another entity is NFT, which represents right to execute options contract during the settlement period, and issued in the same transaction (options contract scanner can just skip other options). To settle a trade, NFT should be locked in a receipt box, where register R4 contains a script (as SigmaProp) which swapped asset will be locked with (I guess receipt box is a simplest way to implement it). Before being locked in receipt box, NFT is not locked anywhere so freely tradeable.

---

### Post #2 — @Haskell_plus (2022-08-13)

I lately explored the idea of P2P options, and similar to how ErgoLend will allow users to set terms of a loan requested I thought it would be a good idea to allow for owner of xtoken they offer options for others to invest in to set terms of the options contract, just as you might see in traditional finance.  
The contracts would seem to be complicated to me as the buyer of the options would need payout if xtoken increased in price at end of agreed time of contract, could probably be done utilizing a guapswap style of Dex trade, this would allow for the owner of xtoken to only need put up the xtoken option to make payout to the buyer of the option.  
I am glad to see you exploring it and hope that sometime in the near future such a project materializes, I personally believe that options are better DeFi instruments than synthetic assets, my personal opinion aside - even synthetics could be utilized very well in P2P options contracts.
