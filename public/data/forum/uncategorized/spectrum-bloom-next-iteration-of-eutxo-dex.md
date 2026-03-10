---
title: 'Spectrum Bloom: Next iteration of eUTxO DEX'
description: 'ErgoForum discussion: Spectrum Bloom: Next iteration of eUTxO DEX'
tags:
- addresses
- box
- ergoforum
- ergoscript
- ergoscript-context
- eutxo
- full-node
- mev
- registers
- soft-fork
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/spectrum-bloom-next-iteration-of-eutxo-dex/4468
created: '2023-08-29'
last_activity: '2023-11-10'
posts_count: 6
views: 654
likes: 26
glossary_hits:
- Addresses
- Box
- ErgoScript
- ErgoScript context
- Full node
- MEV
- Registers
- Soft fork
- Spectrum
- Transaction
- eUTXO
---

# Spectrum Bloom: Next iteration of eUTxO DEX

> **Forum thread:** [https://ergoforum.org/t/spectrum-bloom-next-iteration-of-eutxo-dex/4468](https://ergoforum.org/t/spectrum-bloom-next-iteration-of-eutxo-dex/4468)
> **Category:** Uncategorized | **Created:** 2023-08-29 | **Posts:** 6 | **Views:** 654

**Related concepts:** Addresses, Box, ErgoScript, ErgoScript context, Full node, MEV, Registers, Soft fork, Spectrum, Transaction, eUTXO

---

### Post #1 — @oskin1 (2023-08-29)

I’ve compiled a few ideas I’ve come up with recently in an article which I attach below.  
Looking forward to hear your feedback.  
[Spectrum Bloom](https://spectrum.fi/spectrum_bloom_wp.pdf)

---

### Post #2 — @oskin1 (2023-08-29)

Spectrum Bloom TLDR:

In this article we discuss the limitations of early attempts at decentralized exchanges (DEXes) built on eUTxO blockchains like Ergo and Cardano. These early attempts lacked transparency, composability, and performance. We then propose the Spectrum Bloom framework, which addresses these weaknesses by focusing on principles of decentralization, transparency, and sustainability.

The framework introduces several concepts:

1. **Explicit Order Routing:** Off-chain executors register their public keys, allowing users to specify which executors can execute their orders. This enhances transparency and allows users to track off-chain executor performance.
2. **Green Orders:** On-chain orders are eliminated by encoding them as off-chain messages relayed to designated executors. An “Autonomous Account” on the blockchain validates and releases funds for execution without on-chain overhead.
3. **Universal Orders:** Introduces universally composable orders that can be fulfilled from any liquidity source. This reduces fragmentation and promotes transparent execution.
4. **Autonomous Accounts (AA):** A versatile primitive supporting non-interactive, on-chain execution of various applications beyond just DEXes. AA stores approved validator hashes, enabling dynamic application support without modifying the protocol.

The framework aims to improve the efficiency, transparency, and composability of DEXes and other decentralized applications while minimizing undesirable practices like frontrunning.

---

### Post #3 — @lgd (2023-09-01)

Cool stuff, nice job. I have some questions so I can understand better:

1. So does this mean using proxy boxes is always obsolete now?
2. The network used to relay messages could be used for any dapp or would it need to be dapp specific?
3. How would a bot/node setup look like for different types of dapps? Would a dapp need to make a special AA?
4. Since no proxy box, would the AA need to then return an unsigned tx back to the user to sign in order to actually execute an order? How does the AA spend a wallet utxo if not?

---

### Post #4 — @oskin1 (2023-09-19)

1. With AA becoming a widely adopted standard - yes.
2. Again it depends on standardization, if the community manages to come up with a single standard used across different dapps we can make a powerful ecosystem out of relays with its own agents acting there and profiting from serving the ecosystem.
3. Bot/Node setup is beyond the scope of the protocol, so it can have any shape.  
   AA, in my opinion, should also be standardized, audited and be re-used across various apps in the ecosystem. No need to build essentially the same thing over and over again.
4. Nope, AA permits transaction itself on-chain.

---

### Post #5 — @blaire2b256 (2023-09-19)

Am I correct in understanding Autonomous Accounts (AA) as a universal/generalized proxy box? In this concept, rather than predefining the spending conditions in the script, a message or ‘intent’ (which sets the conditions for how and by whom the box is spent) is signed by the owner and executed by an actor authorized by that signed intent. The AA script then merely validates that the outputs align with the specifications provided by the message, and ensures that the message was signed by the owner and executed by an approved party.

Is such a functionality possible in the current version of ErgoScript, or would it necessitate a soft fork, hopefully not a hard fork?

---

### Post #6 — @oskin1 (2023-11-10)

Right. Generally it’s possible to implement on ergo rn, but for better efficiency some mechanism to delegate validation to other scripts is needed (in Cardano it’s minting scripts for instance).
