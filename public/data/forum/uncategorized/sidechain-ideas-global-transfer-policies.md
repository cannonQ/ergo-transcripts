---
title: '[Sidechain Ideas] Global Transfer Policies'
description: 'ErgoForum discussion: [Sidechain Ideas] Global Transfer Policies'
tags:
- addresses
- avl-tree
- box
- chaincash
- context-extension
- data-input
- eip
- eip-4
- ergoforum
- ergoscript-context
- native-tokens
- registers
- soft-fork
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/sidechain-ideas-global-transfer-policies/5199
created: '2025-07-09'
last_activity: '2025-08-01'
posts_count: 4
views: 219
likes: 10
glossary_hits:
- AVL tree
- Addresses
- Box
- ChainCash
- Context extension
- Data input
- EIP
- EIP-4
- ErgoScript context
- Native tokens
- Registers
- Soft fork
- Transaction
---

# [Sidechain Ideas] Global Transfer Policies

> **Forum thread:** [https://ergoforum.org/t/sidechain-ideas-global-transfer-policies/5199](https://ergoforum.org/t/sidechain-ideas-global-transfer-policies/5199)
> **Category:** Uncategorized | **Created:** 2025-07-09 | **Posts:** 4 | **Views:** 219

**Related concepts:** AVL tree, Addresses, Box, ChainCash, Context extension, Data input, EIP, EIP-4, ErgoScript context, Native tokens, Registers, Soft fork, Transaction

---

### Post #1 — @kushti (2025-07-09)

A lot of conversations in Ergo (and then Cardano) were about native tokens not having possible transfer policies, which caused, in particular, issues with centralized stablecoin issuers. However, for Ergo-like blockchain there is possibility to have multiple programmable transfer policies for the same token or even a box in relatively simple way. This can be implemented in a sidechain (at least, for starters).

As a reminder, contractually-wise, Ergo is about:

* UTXO model. A transaction has potentially many inputs and outputs. We unify those entities in Ergo, so say that a transaction is creating some boxes and eliminates some boxes. A current state of the network then is a set of active boxes then.
* Registers: each box is made of registers (and registers only), where a register contains a typed value. There are registers with predefined values, such as locking script, monetary value, natively supported tokens, reference to transaction where the box was created. In addition to four predefined registers, there could be up to six registers with arbitrary values.

And for a sidechain, we may want to augment Ergo contractual capabilities with Global Transfer Policies, set of programmable spending conditions for a box, which may be propagated via transactions.

A **Global Transfer Policy** is set in a box, which needs to have a special NFT for identification. A policy box has locking script, like every box, which is allowing to change policies as well as locking script itself. A policy box should also have following registers:

* R4 - spending policy - any computation (getting the same context avaiable to a locking script, aside of mining pubkey and votes). Should return true or false. If true, the box may be spent, otherwise, not.
* R5 - propagation policy - also computation - returns number of inputs which should have the same policy

Then we add another special register in a sidechain, and this register may contain multiple NFT ids. Boxes with such NFTs must be provided as read-only inputs of a transaction. An input can be spent if for all of its policies spending and propagation sub-policies satisfied.

Then centralized stablecoin issuer can, for example, create a box with a policy containing black list or white list condition, and propagation policy would require to attach same policies to outputs with the stablecoin during spending. But there are could be much more flexible options, for example, in ChainCash some reserve holders may require for some spending policies, while others may issue notes without such.

---

### Post #2 — @jossemii (2025-07-10)

**Would this be possible directly on the Ergo main chain?** If StableCoin X is distributed as a token, I understand that currently we cannot enforce these policies because they’re stored in boxes with simple spending contracts. But what’s the issue with requiring that they always belong to a contract that enforces certain policies in addition to containing the owner’s spending address? As I see it, the only problem is not conforming to the EIP-0004 standard; so isn’t this more of a UI issue?

---

### Post #3 — @kushti (2025-07-10)

Possible to do on the mainchain, even without considering native token, for example, you can consider records in registers or under AVL+ tree of registry box as “tokens”, would require for UI support though, support from all the dapps etc.

---

### Post #4 — @kushti (2025-08-01)

It seems that it is possible to introduce global transfer policies on Ergo via a soft-fork just in a following way:

we designate special context input extension variable id, for example, #120, and a box which is a subject to GTP must have script of the following form `blake2b256()getVar[Coll[Byte]](120)) == XXX && other\_conditions`, where XXX is hash of GTPs which should be provided in context extension, concatenated NFT ids. Older, non-GTP supporting clients will just check equality, newer clients will check that boxes with such NFT ids provided as read-only inputs, and check spending and propagations policies written there. For outputs which are subject to GTPs propagation must, again, have script corresponding to the the `blake2b256()getVar[Coll[Byte]](120)) == XXX && other\_conditions` form.
