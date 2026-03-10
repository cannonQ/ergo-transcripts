---
title: How The eUTXO Model Is Revolutionizing Blockchain
date: '2024-04-21'
author: Ergo Platform
tags:
- addresses
- box
- ergo-blog
- ergoscript-context
- eutxo
- explaining-ergo
- full-node
- transaction
category: blog
blog_tag: Explaining Ergo
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/How-The-eUTXO-Model-Is-Revolutionizing-Blockchain
glossary_hits:
- Addresses
- Box
- ErgoScript context
- Full node
- Transaction
- eUTXO
---

# How The eUTXO Model Is Revolutionizing Blockchain

> **Published:** 2024-04-21 | **Author:** Ergo Platform | **Tag:** Explaining Ergo | **Type:** blog

**Related concepts:** Addresses, Box, ErgoScript context, Full node, Transaction, eUTXO

---

_The extended Unspent Transaction Output (eUTXO) model used by Ergo and a small number of other smart contract blockchain platforms offers specific advantages over the Account model._

Extended Unspent Transaction Outputs (eUTXOs) offer a different model for smart contracts and dApps than the Account-based model used by Ethereum and many other blockchains. While there are pros and cons to each approach, eUTXOs offer certain benefits that are particularly noteworthy. When there are clear challenges facing the blockchain sector, these benefits are more important than ever.

## eUTXOs: A Short Primer

Bitcoin and Bitcoin-like blockchains (including Ergo) use a UTXO model to track users’ balances. Each UTXO is like a bag of money. These bags can be combined into larger bags or split into smaller bags when a new transaction is created. Every address that contains any coins consists of one or more of these bags.

This is quite different to the Account model used by Ethereum and similar chains, where an address’s balance is just updated (similar to a bank balance) when a transaction is made. While this sounds easier, the UTXO model actually offers a more secure means of accounting - all coins are traced right back to the transaction from which they were first created before they are sent. Specific “inputs” to a transaction must be selected from existing UTXOs, and those inputs are checked before the transaction can be added to the blockchain.

The eUTXO model extends the use of UTXOs beyond simple accounting and enables them to hold further information, including smart contract instructions. What this means in practice is that users gain additional benefits through blockchain scripting and dApps on top of the existing properties of UTXOs. As well as containing normal UTXOs, an address can hold additional transaction logic attached to eUTXOs. When a transaction that uses an eUTXO is submitted to the network, a mining node checks it and executes the script it includes as it adds it to the blockchain. 

[Read more about UTXOs and eUTXOs](https://ergoplatform.org/en/blog/What-Are-eUTXOs/).

## The Revolutionary Benefits of eUTXOs

eUTXOs therefore offer the simplicity and security of the UTXO model, with the flexibility that comes with the ability to include arbitrary logic and spending conditions. 

There are a number of benefits to this approach. Here are three examples for Ergo users:

### 1. Guaranteed transaction success

Smart contract transactions on Ethereum do not always execute reliably. The reason for this is that the complexity of the transaction is not known until it is processed by a validator. 

The cost of Ethereum gas is a little like taking a journey in a car. The route taken by the car and the amount of gas required to get to the destination is like the execution of the transaction on the blockchain, while the price per liter of gas is like the cost of Ethereum gas in gwei (a giga-wei or gwei is 1 billion of the smallest possible division of an ETH - gas is measured in these units).

In practice, the “journey” (execution of transaction instructions) may be more complex than the user realizes. This can mean the gas limit, or maximum amount of gas that can be allocated to the transaction is used up before the transaction is completed. The gas still has to be paid because the miners still do some of the work of processing the transaction, but the transaction fails because there are not enough funds to complete it.

This is something that cannot happen on Ergo or other eUTXO chains. Transactions are validated based on their inputs and attached instructions. It’s a simpler approach, and it means that the transaction can be checked off-chain before it is submitted to the network. At which point, it is guaranteed to be confirmed successfully.

### 2. Known transaction costs

Another benefit of the eUTXO approach is that smart contract transactions have predetermined complexity and therefore known costs at the outset. Indeterministic systems like Ethereum don’t have this property. Transactions can fail. Even if they do not fail, the cost of executing the transaction is unknown in advance. Users are forced to rely on an estimate.

### 3. Predictable and safe execution

Finally, eUTXOs offer a more discrete and predictable model for smart contract transactions. A UTXO can be used only once, and it is completely used up when it is included in a transaction. There is a more limited range of possible outcomes with Ergo than for Account-based systems, so dApps do not tend to have the same kind of vulnerabilities that they do on Ethereum. It’s simple, safe, and secure.

If you’re interested in trying out some Ergo dApps and finding out how the eUTXO model works in practice, check out the [Sigmaverse](https://sigmaverse.io/all-projects/?category=dApps). There, you will find wallets, DeFi dApps, NFT marketplaces, DAO platforms, games, and more.
