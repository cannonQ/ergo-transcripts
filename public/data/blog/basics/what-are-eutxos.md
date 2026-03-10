---
title: What Are eUTXOs?
date: '2024-02-06'
author: Ergo Platform
tags:
- addresses
- basics
- box
- ergo-blog
- ergo-foundation
- ergoscript-context
- eutxo
- full-node
- minimum-transaction-fee
- transaction
category: blog
blog_tag: Basics
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/What-Are-eUTXOs
glossary_hits:
- Addresses
- Box
- Ergo Foundation
- ErgoScript context
- Full node
- Minimum transaction fee
- Transaction
- eUTXO
---

# What Are eUTXOs?

> **Published:** 2024-02-06 | **Author:** Ergo Platform | **Tag:** Basics | **Type:** blog

**Related concepts:** Addresses, Box, Ergo Foundation, ErgoScript context, Full node, Minimum transaction fee, Transaction, eUTXO

---

eUTXOs, or extended Unspent Transaction Outputs, offer a distinct way of creating smart contracts and building dApps on Bitcoin-like blockchains. The eUTXO model is fundamentally different from Ethereum’s Account-based model as well as many other smart contract chains, and it has various advantages and trade-offs.

## What Is A UTXO?

A UTXO is an Unspent Transaction Output, or a block of coins that are the result of a transaction and that have not subsequently been spent by the receiving address. UTXOs are an important concept for Bitcoin and similar blockchains, including Ergo. 

In such systems, the balance of an address is not stored on the blockchain as a single value. Instead, it is the sum of a collection of individual, spendable “outputs” from transactions into the address, with each representing a certain amount of coins. These individual outputs are the UTXOs. 

## How Do UTXOs Work?

UTXOs are a means of tracking balances on the blockchain. When a user initiates a transaction, they are essentially spending one or more UTXOs that they control in their wallet. The outputs of a transaction create new UTXOs for the recipients, and potentially a “change” balance of UTXO coins for the sender if there is anything left over.

For example, Alice wants to send Bob 20 ERG. Her address contains UTXOs of 15, 10, 7, 6, and 3 ERG. She selects the UTXOs of 15 and 6 ERG (it is important to note that this step is typically handled automatically by the crypto wallet, but can be done manually) and sends 20 ERG to Bob. Bob now has a UTXO of 20 ERG in his wallet, and Alice receives “change” in the form of a 1 ERG UTXO.

Alice could have combined any number of UTXOs totaling at least 20 ERG to send to Bob, but the more UTXOs that are used, the larger the amount of data that needs to be stored on the blockchain, and the higher the transaction fee.

The UTXOs sent in transactions are considered unspent until they are used in a future transaction. At this point, they become part of a new UTXO.

UTXOs are therefore a little like envelopes of money. A user may hold many such envelopes and can combine them in transactions. Any new change (funds in excess of the transaction amount) resulting from transactions go in a new envelope and are retained by the sender.

Users also pay a small transaction fee to miners, which is simply the difference between the total input and the total outputs, including change. (On Ergo, this is typically 0.0011 ERG for a simple transaction.)

Every coin on the blockchain therefore belongs to a UTXO. Any coin can be traced back through previous UTXO coin blocks, right back to the transaction in which it first came into existence (i.e. when it was mined).

This is how Bitcoin-like blockchains track balances and ensure the reliability of transactions. Each transaction must reference valid and unspent UTXOs to be considered legitimate. The UTXO model provides transparency and allows anyone to independently verify the ownership and validity of bitcoins by inspecting the blockchain.

UTXOs therefore represent the building blocks of ownership and transactions in Bitcoin-like systems. 

## What Is The Account-Based Model?

The main alternative to the UTXO model is the Account-based approach. This is used by many blockchains, including Ethereum. An account-based model works in a completely different way from UTXO chains for tracking blockchain state.

##How Does The Account-Based Model Work?

In an account-based blockchain, transactions are managed through accounts associated with addresses. Each user has an account with a balance, much like a bank account has a balance, and transactions involve debiting and crediting these balances. 

The state of the ledger is updated to reflect changes in account balances after transactions are executed. This model gives more granular control over user balances (since there is no need for change outputs) but has different properties, and various pros and cons.

## UTXOs Vs Accounts: Advantages And Disadvantages

Like any system, there are advantages and disadvantages to using either the UTXO model or account-based approach.

### Advantages of the UTXO model:

- Simplified state tracking: Each UTXO represents a specific amount of cryptocurrency and its ownership, making tracking blockchain state straightforward.
- Privacy: The UTXO model can enhance privacy if used properly, since individual transactions are not directly linked to user identities.
- Parallel processing: UTXOs can be processed in parallel, enabling faster verification and validation of transactions, potentially contributing to scalability.
- Clear ownership tracking: It is straightforward to trace the origin and current holder of a specific amount of coins.
- Reduced blockchain bloat: Since spent UTXOs are removed from the UTXO set, using the UTXO model can help in reducing blockchain bloat, leading to more efficient storage.

### Disadvantages of the UTXO model:

- Scripting challenges: Due to the nature of the UTXO model, scripting operates differently than Account-based platforms, so it can be harder to build dApps if developers are used to a more conventional approach.
- Less expressive smart contracts: The simplicity of the UTXO model may limit smart contract complexity, though there are ways to address this.
- Scalability: As the number of UTXOs held on the blockchain grows, scalability challenges may arise.
- Resource use: The UTXO model may lead to less efficient resource use, since spending coins involves consuming entire UTXOs, even if the transaction amount is low.

## What Are eUTXOs?

As explored above, in the standard UTXO model (such as Bitcoin uses), every transaction requires existing UTXOs as an input and creates new UTXOs as outputs. 

The extended UTXO or “eUTXO” model expands this concept by allowing UTXOs to contain additional information, such as complex scripting or smart contract logic. 

The benefit of this approach is that users can still enjoy the benefits of the UTXO model, including security and simplicity, but the platform can also provide smart contract capabilities. Cardano is one well-known blockchain that leverages the eUTXO model to enable smart contracts on its network. Ergo is another.

## How Do eUTXOs Work?

The eUTXO model extends the standard UTXO coin model in two ways:
- Addresses can contain additional logic in scripts that provide further conditions and information. When the transaction is mined by a node, the node checks and executes the script if the conditions are met.
- Outputs can include additional data, allowing for more powerful and flexible scripts.

All of this allows for complex logic that can contain many different conditions and information. This arbitrary logic is applied to a transaction by the validator and processed if the transaction is allowed to use a given input.

## eUTXO Advantages And Disadvantages

As can be seen from the overview above, using UTXOs as the basis for smart contracts has various implications. Some of these offer significant advantages over Account-based smart contracts, but as in any system, there are trade-offs.

One feature of the eUTXO model is that a transaction is validated based only on the transaction itself and its inputs, without requiring anything else on the blockchain. An interesting and useful implication of this is that a transaction can be checked for validity off-chain before the transaction is sent for validation. After it is checked, the transaction will be guaranteed to succeed (so long as another transaction has not consumed its inputs in the meantime). eUTXOs are therefore more predictable and reliable than Account-based smart contract transactions, which can fail while they are being processed. On Ethereum, for example, it is possible for a transaction to consume significant gas and still fail, costing the user without any benefit.

Another implication of this reliability is that all of the fees required for the transaction can also be calculated before the transaction is submitted. Ethereum and other Account-based systems are indeterministic, meaning not only can the transaction fail, but that even if it does succeed, the exact cost is not known. With the eUTXO model, fees are predetermined and predictable. 

Privacy tends to be better with the eUTXO model and transaction logic tends to be simpler because a UTXO can only be consumed once (and in its entirety). It also raises the possibility of parallel processing, since multiple UTXOs can be processed alongside each other (so long as they do not attempt to use the same input UTXO). The range of possible outcomes is far more limited than with an Account-based system, making execution more predictable and safe.

Against all this, the eUTXO model is quite different from an Account-based model, which is what most developers are familiar with (since Ethereum takes that approach). dApps that were created for Ethereum and similar blockchains cannot easily be adapted for use on eUTXO platforms.

## Key Differences Between eUTXO Vs UTXO Vs Account-Based Model

UTXOs represent simple unspent outputs that can be used in new transactions. This is a simple, secure accounting model used by the first-generation blockchain: Bitcoin. 

eUTXOs extend this approach and generalize it, so that validators can make a decision on whether a UTXO is spent based on a wide range of conditions – enabling far-reaching and expressive smart contracts to be built, while retaining the simplicity and security of the UTXO foundation.

Executing smart contracts on an Account-based system can be more complicated and potentially less secure, due to the way that data is stored and changes made.

In an eUTXO system, UTXO coins are either spent or not in their entirety. In an Account-based system, each account is mutable and smart contracts can modify their state during execution. This can lead to complex and occasionally hard-to-predict interactions between different contracts. Changes to the state of one smart contract can impact others, so there may be potential conflicts that need to be considered. This is not possible with the eUTXO model. Since UTXOs are independent, they are isolated and execution of smart contracts is more deterministic and safe - the changes to one part of the ledger do not directly affect others. Spending conditions are clear and easy to verify. Similarly, gas calculation is known and predictable.

Against all this, account-based blockchains generally offer greater flexibility for complex smart contracts and decentralized applications, since development is typically simpler and contracts can access and interact with other contracts easily – though this comes with greater risk and the possibility that vulnerabilities may inadvertently be introduced. An eUTXO-based approach is often preferable, all things being equal, for certain types of dApp.

#### Conclusion

eUTXOs offer a fundamentally different way of approaching smart contracts and decentralized applications than the prevailing Account-based model. While in some respects it may appear more limited, the eUTXO model is generally safer and more predictable, removing some of the most serious vulnerabilities associated with smart contracts.
