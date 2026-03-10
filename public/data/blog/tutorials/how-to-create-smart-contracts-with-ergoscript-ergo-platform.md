---
title: How To Create Smart Contracts With Ergoscript | Ergo Platform
date: '2024-02-20'
author: Ergo Platform
tags:
- addresses
- box
- deco-education
- ergo-blog
- ergo-playgrounds
- ergoscript
- ergoscript-context
- ergotree
- eutxo
- mempool
- minimum-transaction-fee
- multi-stage-contracts
- native-tokens
- registers
- ring-signatures
- sigmastate-interpreter
- transaction
- tutorials
category: blog
blog_tag: Tutorials, Tooling, Core
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/How-To-Create-Smart-Contracts-With-Ergoscript
glossary_hits:
- Addresses
- Box
- DeCo Education
- Ergo Playgrounds
- ErgoScript
- ErgoScript context
- ErgoTree
- Mempool
- Minimum transaction fee
- Multi-stage contracts
- Native tokens
- Registers
- Ring signatures
- Sigmastate interpreter
- Transaction
- eUTXO
---

# How To Create Smart Contracts With Ergoscript | Ergo Platform

> **Published:** 2024-02-20 | **Author:** Ergo Platform | **Tag:** Tutorials, Tooling, Core | **Type:** blog

**Related concepts:** Addresses, Box, DeCo Education, Ergo Playgrounds, ErgoScript, ErgoScript context, ErgoTree, Mempool, Minimum transaction fee, Multi-stage contracts, Native tokens, Registers, Ring signatures, Sigmastate interpreter, Transaction, eUTXO

---

Smart contracts are the backbone of decentralized finance (DeFi) and have been one of the primary pieces of utility for blockchain technology. Before we go over several facets of smart contracts on Ergo, let’s talk about what a smart contract is.

## What is a Smart Contract?

A smart contract is a self-executing piece of code that generally is found on a blockchain. A smart contract automatically enforces predefined contract terms when specific conditions are met. It operates without intermediaries and uses code to transparently and trustlessly execute specific actions. Some of these actions could include buying NFTs, transferring coins and tokens, or the borrowing or lending of assets. 

Ergo’s smart contracts are one of the many features that set it apart from other cryptocurrencies. Let’s take a look at why Ergo’s smart contracts are so special.

## Understanding ErgoScript

Ergo uses the programming language, ErgoScript, which is based off of Scala. [Ergo documentation](https://docs.ergoplatform.com/dev/scs/ergoscript/#simple-example) states that ErgoScript is a simplified form of Scala which serves as a high-level language translated into ErgoTree which in turn is a low-level language further translated into a cryptographic protocol during execution. This design enables Ergo to support various cryptographic protocols which include ring and threshold signatures. Unlike Bitcoin, ErgoScript accommodates complex financial contracts by incorporating self-replication which allows the creation of Turing-Complete processes on the blockchain while maintaining Bitcoin's security and privacy principles. In essence, ErgoScript makes it easier to build secure, complex dApps while maintaining privacy capabilities. 

## Prerequisites for Creating Smart Contracts

Due to Ergo being an eUTXO blockchain and having its own programming language, new developers need to familiarize themselves with a few of Ergo’s features first before creating smart contracts. One of these features is the concept of [‘boxes.’](https://docs.ergoplatform.com/dev/data-model/box/) In Ergoscript a 'box' is an adaptable version of a UTXO. It serves not only as a holder for a cryptocurrency linked to an address but also incorporates 'registers' for extra data. This data can vary from basic values to intricate structures which are usable in transactions and smart contract execution. This distinction sets Ergo's box apart from a typical UTXO which merely signifies an unspent cryptocurrency amount linked to a specific address. In UTXO-based cryptocurrencies, transactions use existing UTXOs as inputs and generate new ones as outputs, and the unspent outputs represent the coins available for spending in future transactions. 

Another important facet of coding new developers will need to know is a general understanding of the [ErgoScript Language Description](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md). This link will help new developers get started. Below is a picture of some of the facets of Ergoscript the user can familiarize themselves with.

![introduction (1).png](https://storage.googleapis.com/ergo-cms-media/introduction_1_e18c1050f5/introduction_1_e18c1050f5.png)

## How Can I Create a Smart Contract Using ErgoScript?

The first step to learning how to code smart contracts on Ergo is becoming familiar with ErgoScript. It is important to note once again that Ergo uses the UTXO model which is quite different from the traditional account model. A great example of how the eUTXO model fits in with smart contracts is in the Ergo documentation [here](https://deco-education.github.io/deco-docs/docs/into-the-woods/trail1-eutxo-n-nfts/eutxo-boxes-addresses). For example, with eUTXO specifically, creating a smart contract involves designating a transaction output as the contract. For instance, you might want to pay 10 digital coins to your friend if the temperature reaches 90 degrees Fahrenheit. This is represented as a pile in the digital piggy bank, attached to a script specifying the spending condition. If the condition is met, your friend can spend the money with proof of the fulfilled condition. Otherwise, the funds remain in the pile which would be visible to all participants. 

Smart contracts can be complicated and overwhelming for beginners and advanced developers alike. Fortunately, the Ergo ecosystem boasts a plethora of resources showing both how to learn Ergoscript and how to code smart contracts. [This resource](https://github.com/ergoplatform/ergoscript-by-example?tab=readme-ov-file) in particular takes the user to the [“Ergo Playground”](https://docs.ergoplatform.com/dev/scs/ergoscript/#simple-example) in which they can experiment with several difficulties of smart contracts. This [video](https://www.youtube.com/watch?v=8l2v1asHgyA&ab_channel=ErgoPlatform) by Robert Kornacki takes you through the beginning stages of creating a smart contract with a pin lock contract. 

![ergoscript_examples (1).png](https://storage.googleapis.com/ergo-cms-media/ergoscript_examples_1_5c17b61f9b/ergoscript_examples_1_5c17b61f9b.png)

Kornacki [states](https://github.com/ergoplatform/ergoscript-by-example/blob/main/pinLockContract.md) that “This is a simple smart contract which locks deposited funds under a pin number. When the pin number is initially provided by the user, it is hashed off-chain, and the hash itself is stored on-chain.

When the user wishes to withdraw his/her funds (spend the UTXO locked under this contract) he/she submits a withdrawTransaction with the actual pin number in a register of the output UTXO. The contract then executes and checks that when the newly provided pin number gets hashed, it is equal to the original hash held in the register of the box locked by the contract. If they are equal then the contract validates, and the transaction is accepted as being valid and added to the blockchain history.

Do note, this contract is purely intended to be used as an educational example. It is completely insecure and should never be used on-chain. Bad actors can scan the mempool to find the pin number when the withdrawTransaction is posted, and then front-run by posting a tx with a higher tx fee + the same pin number, thereby stealing your locked funds. That said, this is a great simple contract to wet your feet with.” 

This is a great smart contract to play around with in the beginning stages of Ergo development. This can aid new developers in getting used to working with Ergoscript. New developers can use this [link](https://scastie.scala-lang.org/KdWtOMjrTx2zb7wr2shPAA) to go directly to the Ergo Playground with the code already imported for them. **Once again, this code is insecure and should be used for educational purposes only. **

## The Future of Smart Contracts

The future of smart contracts represent endless possibilities of disrupting the traditional finance system and replacing it with trustless and transparent assumptions. Smart contracts reduce the need for legal paperwork, lawyers and trusted transactions. Smart contracts are also instant and much more efficient, which will allow companies, businesses and entrepreneurs to get more done in much less time. A couple of potential drawbacks of smart contracts is that they are generally irreversible and can possess potential code exploits which could result in the loss of user funds. This is why secure code is so vital when creating smart contracts. This is also one of the reasons why ErgoScript is so powerful. It is an extremely secure coding language when executed correctly.

#### Conclusion

ErgoScript is ultimately a coding language that sets itself apart due to the fact that it allows for the creation of dynamic and secure smart contracts on Ergo. It allows for developers to create complex and sophisticated dApps while seamlessly being much easier to build with than many other coding languages. The open source nature of Ergo also streamlines the process for developers to build their vision and create something special. 

For developers who either want to wet their feet in ErgoScript and smart contracts or desire more advanced smart contract knowledge, please consult the documentation below. The Ergo Discord also has a #development section in which like minded developers can interact and learn about ErgoScript on a deeper level.

#### Useful Links 

- [Learn ErgoScript via the Ergo Playground tutorial video](https://www.youtube.com/watch?v=8l2v1asHgyA&ab_channel=ErgoPlatform)
- [Pin-Lock Contract](https://github.com/ergoplatform/ergoscript-by-example/blob/main/pinLockContract.md)
- [Ergo Playground](https://scastie.scala-lang.org/KdWtOMjrTx2zb7wr2shPAA)
- [ErgoScript](https://docs.ergoplatform.com/dev/scs/ergoscript/#simple-example)
- [Boxes](https://docs.ergoplatform.com/dev/data-model/box/)
- [ErgoScript Language Description](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md)
- [eUTXO, Boxes, Addresses](https://deco-education.github.io/deco-docs/docs/into-the-woods/trail1-eutxo-n-nfts/eutxo-boxes-addresses/)
- [Various levels of Smart Contracts](https://github.com/ergoplatform/ergoscript-by-example?tab=readme-ov-file)
- [How do UTXO contracts work?](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md)
- [ErgoScript Whitepaper](https://storage.googleapis.com/ergo-cms-media/docs/ErgoScript.pdf)
- [Multi-stage transactions and smart contracts](https://deco-education.github.io/deco-docs/docs/category/trail-3-multi-stage-txs--smart-contracts)
