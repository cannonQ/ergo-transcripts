---
title: Programmable Assets on Ergo
description: 'ErgoForum discussion: Programmable Assets on Ergo'
tags:
- addresses
- avl-tree
- box
- data-input
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- native-tokens
- registers
- sigma-protocols
- token-id-rule
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/programmable-assets-on-ergo/4037
created: '2022-11-04'
last_activity: '2023-12-07'
posts_count: 7
views: 586
likes: 10
glossary_hits:
- AVL tree
- Addresses
- Box
- Data input
- ErgoScript
- ErgoScript context
- ErgoTree
- Native tokens
- Registers
- Sigma protocols
- Token ID rule
- Transaction
---

# Programmable Assets on Ergo

> **Forum thread:** [https://ergoforum.org/t/programmable-assets-on-ergo/4037](https://ergoforum.org/t/programmable-assets-on-ergo/4037)
> **Category:** Uncategorized | **Created:** 2022-11-04 | **Posts:** 7 | **Views:** 586

**Related concepts:** AVL tree, Addresses, Box, Data input, ErgoScript, ErgoScript context, ErgoTree, Native tokens, Registers, Sigma protocols, Token ID rule, Transaction

---

### Post #1 — @CheeseEnthusiast (2022-11-04)

Am opening this conversation to talk about tokens and nfts using smart contracts rather than the base native asset system. Right now, all tokens on Ergo are using the native asset system. This system works well for almost all usecases, and ensures that unnecessary computation is not needed. However, I think that there is some interest in ERC-20 like systems, which require computation, but also allow for programmable assets.

Things that are not currently do-able on Ergo’s native asset system include:

* Enforcing NFT royalties outside of marketplaces (and other “on-spend” actions)
* Re-minting tokens with the same identifier (could be useful for options contracts, certain inflationary mechanics)
* Morphing on-chain data associated with a token over time.
* Unfortunately, certain entities such as those behind USDT and USDC may be unwilling to bridge onto Ergo if they lack the ability to freeze transfers between certain accounts.

ERC-20 Tokens are usually keeping some account state in their contracts, and providing functions that allow for asset transfers, etc. Obviously, Ergo’s programming model is much different, so let’s look at different designs for how to do this without requiring any forks to the current native asset system.

**Design 1: NFT-UTXO**

This design makes the most sense for NFTs. Simply have a singleton utxo under a contract which is holding the current owner of the NFT in R4 as a SigmaProp. Every transaction spending this box counts as an asset transfer, and must follow these rules:

* A new singleton with the same contract must exist in the outputs. It’s R4 may be different in order to signal an asset transfer.
* The current R4 of this box must be proven true in order for it to be spent.

Considering the number of NFTs that people make, this is probably bad in that tons of data must be kept on-chain for each NFT made this way.

**Design 2: ERC-20 Like**

This could work for NFT’s or Tokens. Each unique token id is represented by a unique contract + singleton box, which holds an account state within it. I would prefer to avoid using AVL Trees here to represent the state, the reason being that transfers would require synchronization with each unique token’s avl history to generate proofs. So in that case, we are either constrained to the 4096 bytes within the singleton utxo, or we can have some additional contract + set of utxos which is specifically storing the account state.

This is kind of a messy way to go about things. If we store address hash + a long, that is 40 bytes of data. Only ~100 balances can be stored within the singleton. Using an additional contract for state storage solves this problem, but feels like a dirty way handling things.

**Design-3: Asset-Focused L2 / AVL Solution**

This is probably the best option in terms of dataspace efficiency. AVL Trees can be used to store an account or even utxo state for holders of programmable tokens. At this level, it is best to have something relatively generalized, so that each token does not need it’s own tree to hold its state. This is probably the most complicated one to build, though it has scalability benefits over the others.

All of these designs probably break composability to some extent, though I’m not sure how to get around that. I think best option currently is design 2, because it is simplest and allows the utility of such assets to be extended to L1. I also would be interested in seeing variations of design 2 which are emulating utxo states instead of an account one.

---

### Post #2 — @CheeseEnthusiast (2022-11-06)

I have an idea for another design, which is about tying native tokens to utxos of some “token contract”. The token contract will ensure that whenever it is spent, all “on-spend” logic is executed, along with ensuring that the asset held by this token contract is only outputted in utxos of the same token contract. Ownership of tokens can be specified by either writing to a register as in design 1, or by using a contract constant. The token contract can also be used to specify burning and minting logic as well.

I am fond of this design as it is keeping the relative statelessness of the utxo model. It is similar to design 1, but I think it works much better for fungible tokens rather than NFTs.

---

### Post #3 — @Luivatra (2022-11-06)

How would this type of token interact with other contracts, fe. a dex?

---

### Post #4 — @CheeseEnthusiast (2022-11-06)

That’s the tough part of things, and why a standard is probably needed. Requiring on-spend actions / bundling with contracts inherently hurts composability between different protocols at the moment. If we look at design 1 / 4, we need ways to be able to transfer these tokens outside of their respective contracts.

This could probably be achieved with a config box used as a data input during spending of these assets. The config box could hold for example, a whitelist of valid contracts to spend towards, with the assumption that spending our token from these contracts would send it back towards the token’s contract. This assumption cannot be broken, or else people could receive the programmed token in their P2PK address. That could lead to people spending the token without executing the script that is supposed to be tied to it.

Design 2 would likely require that all transactions interacting with the programmable token will interact or reference the current token state. This is not very ideal, and forces all transactions with our token to be unparallelizable by nature of using an account system.

Design 3 would depend on the L2 design. One example could be bridging into and out of the L2. That process can be pretty specific to the L2 design, so I won’t go in depth into it here. The L2 could also support native execution of ErgoScript as well, so DEX’s could be bridged onto it easily.

---

### Post #5 — @kushti (2022-11-07)

One particular option is to have membership contract, which allows to create a box (e.g. associated with a membership token), and then a box has some number in its register instead of tokens.

An example is a LETS contract, e.g. trustless LETS contract [A Trustless Local Exchange Trading System | Ergo Platform](https://ergoplatform.org/en/blog/2019_05_29-exchange/)

---

### Post #6 — @run4usdx (2023-12-07)

Thanks for your info for this thread, i am coming from the “Script Slot” post.

here, I noticed kushti mentioned the membership contract.

in fact my idea is probably the same as the kushti’s idea but comes as more formal way.

in my mind, a membership contract comes like the way below:

```ergoscript
slot(0){
 //the main contract here
 ...
}
slot(1){
 //the first membership contract here
 ...
}
slot(2){
 //the second membership contract here
 ...
}
```

each slot’s ergoecript contract should be evaluated to be true so that this utxo box can be spent and all the slots share the same Registers and context Var.

the whole script should be compiled to serialized ergotree bytecode stored in R1. and there should be a specific opcode or bytecode for demiliter(I mean the seperator for each slot). and in ergoscript, R1.get will fetch all the ergotree bytecode and R1.\_1 will fetch the slot(0)'s bytecode.  
so in this design, we can access any slot of the script from any contract script.

and I hope the max number of script could be 16, which means its index is from 0 to 15. ofc, if the number of Register can be maximized to 16 is welcome since more registers may be needed in this design

---

### Post #7 — @run4usdx (2023-12-07)

I think a standard for script and the off-chain code for plugin in wallet both should be raised so that ERC20 and even more possibility can come true.
