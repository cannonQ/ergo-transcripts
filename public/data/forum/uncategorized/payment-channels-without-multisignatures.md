---
title: Payment channels without multisignatures
description: 'ErgoForum discussion: Payment channels without multisignatures'
tags:
- box
- context-extension
- data-input
- ergoforum
- ergoscript-context
- ergotree
- full-node
- native-tokens
- schnorr-signatures
- singleton-/-state-nft
- token-id-rule
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/payment-channels-without-multisignatures/2219
created: '2021-08-20'
last_activity: '2021-08-21'
posts_count: 4
views: 737
likes: 7
glossary_hits:
- Box
- Context extension
- Data input
- ErgoScript context
- ErgoTree
- Full node
- Native tokens
- Schnorr signatures
- Singleton / State NFT
- Token ID rule
---

# Payment channels without multisignatures

> **Forum thread:** [https://ergoforum.org/t/payment-channels-without-multisignatures/2219](https://ergoforum.org/t/payment-channels-without-multisignatures/2219)
> **Category:** Uncategorized | **Created:** 2021-08-20 | **Posts:** 4 | **Views:** 737

**Related concepts:** Box, Context extension, Data input, ErgoScript context, ErgoTree, Full node, Native tokens, Schnorr signatures, Singleton / State NFT, Token ID rule

---

### Post #1 — @scalahub (2021-08-20)

Below is a method to create a payment channel similar to Bitcoin using the “replace by higher value” strategy, but without using multisignatures.

This is a one-way channel where Alice sends payment to Bob. We can get symmetric channels by having two one-way channels.

There are two types of boxes:

1. **Bob’s box** which can be created by anyone, with *n* “Bob’s tokens” (token id **bob**). Additionally, Alice needs to ensure that there are exactly *n* **bob**-tokens in existence. The box has the following script.

   * Any number (up to *n*) of **bob**-tokens can be sent to Bob and only to Bob, and that too only in a single tx
   * The remaining **bob**-tokens will be burned
   * Only Alice can spend this box
2. **Alice’s box** created by Alice containing *n* quantity of assets (maybe Ergs) using which to pay to Bob. The box has the following script:

   * Alice can spend the box after a certain block height **h**. The payment channel is considered closed after that height. Before that height the box spending condition is as follows:
   * Bob can spend the box by burning some amount, say *x*, of **bob**-tokens. In return exactly *x* assets must be sent to Bob. The remaining assets must be sent to Alice

The channel works as follows:

1. Bob’s box is created and a payment channel of value *n* from Alice to Bob is requested.
2. Alice verifies that Bob’s box has the correct script and *n* **bob**-tokens. Additionally, there are no more **bob**-tokens anywhere.
3. Alice’s box is created by Alice, whose details are verified by Bob.
4. Bob assumes that the payment channel is setup,
5. Over the course of the channel, Alice makes multiple off-chain payments to Bob by sending multiple un-broadcasted Tx to Bob, each spending Bob’s box and releasing *x* **bob**-tokens from it (to Bob), the value of *x* is incremented each time, accumulating earlier payments.
6. Finally Bob decides to close the channel, well before height *h*. He does so by first spending Bob’s box claiming **bob**-tokens using the off-chain tx from Alice releasing the highest number of such tokens. Then he claims the same quantity of assets by burning those **bob**-tokens and spending Alice’s box in a second tx.

[EDIT] protocol has been modified. See post below.

---

### Post #2 — @Brodax (2021-08-21)

Nice information thank u so much ![:ok_hand:t2:](https://emoji.discourse-cdn.com/twitter/ok_hand/2.png?v=10 ":ok_hand:t2:")

---

### Post #3 — @JOFLITO (2021-08-21)

Does Bob have any way to know if Alices tx is valid before broadcasting it?

---

### Post #4 — @scalahub (2021-08-21)

[@JOFLITO](/u/joflito) 's query: Bob can verify Alice’s tx. Since Bob’s box already enforces the script of Alice’s tx output. He only needs to check:

1. script in the output box is correct
2. tx is accepted as valid by node without broadcasting (can also be mocked via app-kit)

## Analysis and Fixes

Consider the following possible attacks for the original proposal:

1. From Bob’s point of view, Alice should not be able to broadcast an older tx and get away with it.
2. From Alice’s point of view, Bob should not be able to broadcast an older tx and blame Alice for it.

(in case I missed any, please let me know)

Attack 1. can be prevented in the same approach as in standard payment channels, using a dispute mechanism. However, it doesn’t prevent 2.

In order to prevent 2 and to have an trustless dispute resolution, the following modification is proposed:

## Trustless dispute resolution

Bob’s box script is modified as follows:

1. Instead of multiple **bob**-tokens, we instead have a singleton token, an NFT (called **bob**-NFT) to identify the box.
2. When spending the box, the NFT must be stored in an unspendable **Receipt box**. Unspendable implies that its script is simply the proposition `false`.
3. The Receipt box’s R4 contains the Schnorr signature of Alice on the value *x*, which is the value being transferred.
4. The spender is Alice

Alice’s box script is modified as follows (for the path before height *h*):

1. There is a data input with script `false` and **bob**-NFT
2. The context variable 0 contains a Schnorr signature on some value *x* by Alice.
3. Exactly *x* assets are sent to Bob and remaining to Alice
4. The spender is Bob.

Considering the attacks again, if Alice broadcasts an older tx, with less amount, it does not matter because while spending Alice’s box, Bob should provide the newer Schnorr signature in the context variable, which is set by the spender.

Bob cannot later blame Alice because he is responsible for providing the correct signature at the time of spending
