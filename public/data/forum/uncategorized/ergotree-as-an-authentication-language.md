---
title: ErgoTree as an Authentication Language
description: 'ErgoForum discussion: ErgoTree as an Authentication Language'
tags:
- box
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- sigma-protocols
- sigma-rust
- sigmastate-interpreter
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergotree-as-an-authentication-language/274
created: '2020-07-12'
last_activity: '2020-08-31'
posts_count: 4
views: 1237
likes: 6
glossary_hits:
- Box
- ErgoScript
- ErgoScript context
- ErgoTree
- Sigma protocols
- Sigmastate interpreter
- Transaction
- sigma-rust
---

# ErgoTree as an Authentication Language

> **Forum thread:** [https://ergoforum.org/t/ergotree-as-an-authentication-language/274](https://ergoforum.org/t/ergotree-as-an-authentication-language/274)
> **Category:** Uncategorized | **Created:** 2020-07-12 | **Posts:** 4 | **Views:** 1237

**Related concepts:** Box, ErgoScript, ErgoScript context, ErgoTree, Sigma protocols, Sigmastate interpreter, Transaction, sigma-rust

---

### Post #1 — @kushti (2020-07-12)

While contract developers are using higher-level languages, such as ErgoScript (see its whitepaper: <https://ergoplatform.org/docs/ErgoScript.pdf> ), they are to be compiled into ErgoTree representation, which is stored on the blockchain. ErgoTree is not an assembly imperative language (like stack-based EVM assembly language), but a typed abstract syntax tree.

Roughly, a tree combines predicates of two kinds. Some predicates are about secret data, the simplest example is “ProveDlog(pk)” which means “check proof of knowledge of a secret corresponding to public key *pk*” (against a signature provided in a spending input.  
Other predicates are about blockchain context and also the spending transaction, e.g. “HEIGHT > 100”.

During transaction processing, the tree is being first reduced to a tree which contains only crypto-predicates (by evaluating context-predicated with context at the moment of spending), then crypto-tree being is checked against a signature stored in the spending input. If everything is fine, then the box (the UTXO) can be spent. The crypto-tree combines different predicates using AND / OR / k-out-of-n conjectures.

This approach can be reused for other context representations, in other cryptocurrencies, CBDCs (Central Bank Digital Currencies), or even non-monetary digital objects where smart access could be needed.

In this regards ErgoTree is a kind of authentication language aka “smart signature”, see this presentation by Christopher Allen (covering ErgoTree under earlier name, Sigma-State):

In regards with implementation, early sigma-interpreter tried to distinguish context and crypto predicates and make the former ones replaceable. Then this approach was lost, and the current code is monolithic about that. Let’s see how sigma-rust will be done.

---

### Post #2 — @morphic (2020-07-13)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> Then this approach was lost, and the current code is monolithic about that.

[@kushti](/u/kushti) he original design of Prover, Verifier and separation of reduceToCrypto from both proof generation and verification has never been changed. Please clarify your point.

What I see missing in both Verifier ans Prover is 1) the ability to generate proofs for for a given SigmaBoolean and 2) for a given SigmaBoolean perform verification.  
This is just a matter of adding two methods.

---

### Post #3 — @kushti (2020-07-14)

In very early days of the interpreter code it was “account” package, for example, an idea behind was about to get an interpreter for account-based cryptocurrency as well (similarly to initial design of smart contracts in Waves). However, we never had time to implement anything like that.

The idea of adding two methods sounds good to me, so then we can use sigma protocols we have for e.g signing an arbitrary message.

---

### Post #4 — @kushti (2020-08-31)

ok, signMessage / verifyMessage for an arbitrary message done! <https://github.com/ScorexFoundation/sigmastate-interpreter/pull/685>
