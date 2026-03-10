---
title: '"Unlocking The Potential Of The UTXO Model" by Emurgo Research'
description: 'ErgoForum discussion: "Unlocking The Potential Of The UTXO Model" by
  Emurgo Research'
tags:
- box
- data-input
- ergoforum
- ergoscript
- ergoscript-context
- eutxo
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/unlocking-the-potential-of-the-utxo-model-by-emurgo-research/377
created: '2020-09-14'
last_activity: '2020-09-14'
posts_count: 1
views: 495
likes: 3
glossary_hits:
- Box
- Data input
- ErgoScript
- ErgoScript context
- Transaction
- eUTXO
---

# "Unlocking The Potential Of The UTXO Model" by Emurgo Research

> **Forum thread:** [https://ergoforum.org/t/unlocking-the-potential-of-the-utxo-model-by-emurgo-research/377](https://ergoforum.org/t/unlocking-the-potential-of-the-utxo-model-by-emurgo-research/377)
> **Category:** Uncategorized | **Created:** 2020-09-14 | **Posts:** 1 | **Views:** 495

**Related concepts:** Box, Data input, ErgoScript, ErgoScript context, Transaction, eUTXO

---

### Post #1 — @Martin-mx (2020-09-14)

[github.com](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md)

#### [Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking The Potential Of The UTXO Model.md](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md)

```ergoscript
# Unlocking The Potential Of The UTXO Model

- Author: Robert Kornacki
- Released: September 14 2020
- Topics: Smart Contracts, UTXOs, Data-Inputs, Scaling, Contract Updates, Context Claims

Introduction
---

The extended UTXO model empowers smart contract writers with a robust and flexible base to build on top of. In contrast to the account model, UTXO-based smart contracts have no concept of a function which you call within a transaction in order for state transitions to take place. Instead UTXOs use a much more functional approach where every time one is spent, the old UTXO is destroyed and a new output is created.

In this process of spending a UTXO, the smart contract executes in order to verify that this transaction is valid. Thus rather than looking at smart contracts as autonomous entities which act, it is much more valid to consider them as guards who mandate truthful & accurate execution.

While a little bit counterintuitive, this is in fact a very useful distinction. Rather than having an unscalable mess of a system which is trying to achieve the impossible goal of "becoming a world computer", we can instead be realistic and optimize the design of smart contracts to make them as scalable and powerful as possible.

By being clear in our expectation of what smart contracts are meant to do, we also unlock the ability to discover new untapped potential. This is what is offered to us by the extended UTXO model.

In this write-up we will touch upon a number of such new innovations that are only possible thanks to the concept of data-inputs on UTXO systems.
```

This file has been truncated. [show original](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md)

[twitter.com](https://twitter.com/emurgo_io/status/1305522352118259712)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/d33b5474c66d3a0fcf614b187a5b5de8b965e9b0.png)

#### [EMURGO (emurgo\_io)](https://twitter.com/emurgo_io/status/1305522352118259712)

New Research release! 🏆 Unlocking the Potential of the #UTXO model - How "Data Inputs" empower UTXO systems.
Learn about data inputs and the truly novel innovations they bring to UTXO-based Blockchains by reading the latest research by #EMURGO here: https://t.co/Pxkc5DU2ut

[8:02 AM - 14 Sep 2020](https://twitter.com/emurgo_io/status/1305522352118259712)

 74

 26
