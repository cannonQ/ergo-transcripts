---
title: Ergo Playgrounds - run contracts + off-chain code in the browser
description: 'ErgoForum discussion: Ergo Playgrounds - run contracts + off-chain code
  in the browser'
tags:
- box
- ergo-playgrounds
- ergoforum
- sigmastate-interpreter
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-playgrounds-run-contracts-off-chain-code-in-the-browser/185
created: '2020-02-24'
last_activity: '2020-02-24'
posts_count: 1
views: 1050
likes: 2
glossary_hits:
- Box
- Ergo Playgrounds
- Sigmastate interpreter
- Transaction
---

# Ergo Playgrounds - run contracts + off-chain code in the browser

> **Forum thread:** [https://ergoforum.org/t/ergo-playgrounds-run-contracts-off-chain-code-in-the-browser/185](https://ergoforum.org/t/ergo-playgrounds-run-contracts-off-chain-code-in-the-browser/185)
> **Category:** Uncategorized | **Created:** 2020-02-24 | **Posts:** 1 | **Views:** 1050

**Related concepts:** Box, Ergo Playgrounds, Sigmastate interpreter, Transaction

---

### Post #1 — @kushti (2020-02-24)

Made by denyz, his message in discord (development channel) :

"  
I’ve being thinking of a REPL-like environment for contracts + off-chain code.  
Here what I was able to pull together as a Proof-of-Concept:  
Ergo Playgrounds  

![](https://github.githubassets.com/favicon.ico)
[GitHub](https://github.com/ergoplatform/ergo-playgrounds)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [ergoplatform/ergo-playgrounds](https://github.com/ergoplatform/ergo-playgrounds)

Run contracts + off-chain code in the browser. Contribute to ergoplatform/ergo-playgrounds development by creating an account on GitHub.

  
Run contracts + off-chain code in the browser.

1. Design and model a contract along with its off-chain counterpart in the same Scala environment.
2. Share and discuss the contract. Explain how it works.
3. Check different scenarios of contract execution.  
   Enjoy:

* seamless on-chain < - > off-chain code integration;
* immediate feedback.

Implementation-wise it’s a “low hanging fruit” kind of task.

* Scastie (ready);
* ErgoScala compiler (mostly ready);
* use Sigmastate interpreter for signing the transactions;
* start with a simplified UTXO model for blockchain simulation, and eventually use “live” code from Ergo (extracted into a library).

Run our DEX contracts in the browser - <https://scastie.scala-lang.org/greenhat/T2jSEv11QcWpXX1XrcHUdw/31>

It’s similar to Plutus Playground(Cardano).  
"
