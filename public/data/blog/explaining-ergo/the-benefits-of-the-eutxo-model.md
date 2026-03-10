---
title: The Benefits of the eUTXO Model
date: '2023-06-07'
author: Ergo Platform
tags:
- addresses
- box
- eip-31
- ergo-blog
- ergoscript-context
- eutxo
- explaining-ergo
- layer-scaling
- minimum-transaction-fee
- multi-stage-contracts
- native-tokens
- transaction
category: blog
blog_tag: Explaining Ergo
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/The-Benefits-of-the-eUTXO-Model
glossary_hits:
- Addresses
- Box
- EIP-31
- ErgoScript context
- Layer scaling
- Minimum transaction fee
- Multi-stage contracts
- Native tokens
- Transaction
- eUTXO
---

# The Benefits of the eUTXO Model

> **Published:** 2023-06-07 | **Author:** Ergo Platform | **Tag:** Explaining Ergo | **Type:** blog

**Related concepts:** Addresses, Box, EIP-31, ErgoScript context, Layer scaling, Minimum transaction fee, Multi-stage contracts, Native tokens, Transaction, eUTXO

---

Ergo is a layer-1, proof of work blockchain that utilizes the eUTXO model. eUTXO stands for extended unspent transaction output and is used by several other notable blockchains such as Cardano, Komodo and Nervos Network. By comparison, the Ethereum network uses the Account model as the framework for recording transactions on the blockchain.

Ergo’s eUTXO model continues to bring new innovations to the cryptocurrency industry, and in this article we will explore several of the various eUTXO benefits.

## Babel Fees

Babel fees represent a flexible way of paying for transactions. On Ergo, fees are currently 0.001 ERG to complete a transaction. Instead of using ERG however, Babel fees allow a user to pay transaction fees using Ergo native tokens. This can be useful if one does not want to spend their ERG or if they do not have any ERG in their wallet.

## Chained Transactions

Chained transactions are one of the biggest benefits that the eUTXO model provides to a blockchain. When using the eUTXO model, transactions create funds that are left over (called UTXOs) which can be used in future transactions. In essence, the UTXO represents the change after you pay for something. When it comes to chained transactions, we are referring to multiple transactions linked into one transaction.

Ergo’s record for chained transactions was the execution of 10,000 outputs in a single transaction. Chained transactions are beneficial because they can be used to send ERG, multiple NFTs, or multiple native tokens all at once. For example, if you wanted to send 50 NFTs to somebody, you could actually complete this in one transaction instead of having to execute 50 separate transactions. This saves a lot of time, and the transaction fee on Ergo stays the same at 0.001 ERG.

## Off-Chain Computation

The eUTXO model allows for greater flexibility with smart contracts through off chain computation. When comparing the Account model to [eUTXO](https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/), the Account model executes all smart contract logic on chain. This can lead to scalability issues as the blockchain grows and the number of transactions increase. However, the eUTXO model overcomes this issue by moving most of the smart contract logic off chain. It only executes the validation process on the blockchain, thereby improving the efficiency and scalability of the blockchain. 

An Account model blockchain can face severe congestion as well as high fees with an increase in the number of users. “The issue of [scalability](https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/) is one of the main reasons Ethereum is attempting to push transactions to Layer 2/Sidechain scaling solutions that are governed by off-chain code. In essence, the solutions Ethereum is exploring in order to address its scalability concerns mimic the eUTXO model in practice.” It is important to note that Ergo has no gas fees, making it an ideal blockchain for scaling. On Ergo, the transaction fee is stable at 0.001 ERG and is predictable as the price potentially appreciates. 

## Metadata

With the eUTXO model, metadata can be attached to transactions to provide additional information. Two types of metadata are generally used. Firstly, transaction metadata, which describes the transaction as a whole. Secondly, output metadata, which describes specific outputs. Transaction metadata is stored in the transaction itself, while output metadata is stored in the output's lock script. This provides greater flexibility for transactions and supports more complex use cases.

## Benefits of the UTXO Model and How it Differs from the eUTXO Model

The [UTXO](https://docs.ergoplatform.com/dev/protocol/eutxo/#utxo) model offers numerous benefits to a blockchain. Some of these benefits include improved privacy through the use of one-time objects which can allow for the identification and management of privacy leaks. In simpler terms, when one says UTXOs act as one-time objects it means that they are a bit like special tokens or units of value that can only be used once. This unique characteristic of UTXOs helps with privacy leaks by providing a way to identify and manage them effectively. It enhances scalability by enabling parallel transaction processing while also promoting interoperability with off-chain and sidechain protocols. Another benefit of the UTXO model is that it facilitates transaction cost predictability by eliminating the need for intricate gas calculations. 

As mentioned earlier, Ergo uses the eUTXO model which is based on Bitcoin's original model, but it offers increased functionality through the deployment of smart contracts. With the eUTXO model, smart contracts can utilize UTXOs as input data without requiring any modifications. Therefore, nodes can primarily verify transactions rather than focus on balance checks - which distinguishes it from Ethereum's Account model. It is important to note as well that Ergo's multi-stage UTXO model allows for the implementation of turing-complete smart contracts. The eUTXO model allows for more flexibility and complexity when utilizing smart contracts on the blockchain. 

## Conclusion

When it comes to scalability and efficiency, the eUTXO model provides flexibility and greater output power. Even if ERG went to $1000 per coin, the transaction fee would still be just $1. The fact that multiple transactions can be linked within one transaction makes Ergo’s fees sustainable with massive growth. With any future blockchain adoption, the technology needs to easily adapt to massive growth and scalability. Ergo solves this.
