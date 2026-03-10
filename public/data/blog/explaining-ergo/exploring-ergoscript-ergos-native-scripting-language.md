---
title: 'Exploring ErgoScript: Ergo’s Native Scripting Language'
date: '2024-03-26'
author: Ergo Platform
tags:
- addresses
- atomic-swaps
- box
- ergo-blog
- ergoscript
- ergoscript-context
- explaining-ergo
- native-tokens
- sigma-protocols
- transaction
category: blog
blog_tag: Explaining Ergo, Tooling, Core
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Exploring-ErgoScript-Ergo’s-Native-Scripting-Language
glossary_hits:
- Addresses
- Atomic swaps
- Box
- ErgoScript
- ErgoScript context
- Native tokens
- Sigma protocols
- Transaction
---

# Exploring ErgoScript: Ergo’s Native Scripting Language

> **Published:** 2024-03-26 | **Author:** Ergo Platform | **Tag:** Explaining Ergo, Tooling, Core | **Type:** blog

**Related concepts:** Addresses, Atomic swaps, Box, ErgoScript, ErgoScript context, Native tokens, Sigma protocols, Transaction

---

## Blockchain Programming Languages
 
The world of computer programming highlights an expansive and diverse range of coding languages. There is no one size fits all, and each language offers varying degrees of pros and cons. If you are familiar with coding, you have no doubt heard of JavaScript, Python, Java, C#, C++, Solidity, Rust, and many more.
 
When it comes to blockchain design, several of these languages have been used in constructing prominent cryptocurrency networks.
 
![Снимок экрана 2024-03-27 в 21.36.36.png](https://storage.googleapis.com/ergo-cms-media/Snimok_ekrana_2024_03_27_v_21_36_36_1a3a819277/Snimok_ekrana_2024_03_27_v_21_36_36_1a3a819277.png)

## The Ergo Platform: A New Paradigm in Scripting and Proof of Work Blockchain
 
When Alex Chepurnoy (aka kushti) and Dmitry Meshkov set out to design a new 3rd generation smart contract blockchain, they wanted to create a network that combined Bitcoin’s Proof of Work and UTXO design with expressive smart contracts. Essentially, the goal was to marry Bitcoin’s time-tested model with Ethereum’s ability to produce smart contracts and decentralized applications. At the heart of this endeavor was a desire to build a blockchain for everyone. One that prioritizes products that improve the lives of the average citizen. From this endeavor, they created and launched the Ergo Platform.
 
To build Ergo, they needed to create a programming language that met their unique needs. Together, kushti and Meshkov developed a new scripting language, ErgoScript, so that they could write flexible and secure smart contracts on the Ergo Platform.
 
## What is ErgoScript?
 
ErgoScript is the programming language used for writing smart contracts on the Ergo blockchain. It is particularly noted for its ability to create advanced financial instruments and decentralized applications (dApps) with a focus on security and scalability. Its design is derived from Scala, which is a multi-paradigm programming language designed to express common programming patterns in a concise, elegant, and type-safe way. From the Ergo Whitepaper, ErgoScript is described as:
 
>“…a powerful and protocol-friendly scripting language for cryptocurrencies. Programs in ErgoScript are used to specify the conditions under which currency can be spent. The language supports a type of non-interactive zero-knowledge proofs called Σ(Sigma)-protocols and is flexible enough to allow for ring-signatures, multi signatures, multiple currencies, atomic swaps, self-replicating scripts, and long-term computation.”
 
Key characteristics of ErgoScript include:
 
1. Based on Sigma Protocols: ErgoScript is built on Sigma Protocols (or Σ-protocols), a type of cryptographic protocol. This basis allows for the creation of flexible and highly secure smart contracts.
2. Declarative Approach: Unlike imperative languages where you describe how to do something, in ErgoScript, you describe what conditions must be met. It's a declarative language where the state of the blockchain determines if a script is valid or not.
3. Off-Chain Code: Ergo allows for complex operations to be performed off-chain, reducing the load on the blockchain. ErgoScript is used to ensure that these operations adhere to the agreed-upon rules when they are committed to the blockchain.
4. Flexibility and Security: The language is designed to provide a high degree of flexibility in creating contracts, while also ensuring a strong level of security. This is particularly important in the context of financial contracts and decentralized finance (DeFi) applications on the Ergo Platform.
5. Cost-Effective: Ergo's design, combined with ErgoScript, aims to minimize the computational cost of smart contracts. This is crucial for maintaining a scalable and efficient blockchain system.
6. Integration with Ergo’s Features: ErgoScript takes advantage of Ergo's unique features like box storage model, where data and tokens are stored in "boxes" on the blockchain, and complex conditions can be set regarding how these boxes can be transformed and used.
 
## ErgoScript Code: An Example
 
The following script contains a condition for spending a transaction output:
 
{
  val condition = HEIGHT > 1000 && OUTPUTS(0).propositionBytes == fromBase64("yourBase64EncodedPublicKey")
  sigmaProp(condition)
}
 
1. HEIGHT > 1000: This checks if the current block height of the blockchain is greater than 1000. `HEIGHT` refers to the height of the blockchain at the time of the transaction. This condition ensures that the output can only be spent after the blockchain has reached a certain height, effectively creating a time lock.
 
2. OUTPUTS(0).propositionBytes == fromBase64("yourBase64EncodedPublicKey"): This part of the script checks if the first output (`OUTPUTS(0)`) of the transaction has a specific public key. The public key is encoded in Base64 format in the script. This condition ensures that the output can only be spent by a transaction that sends it to an address (or public key) that you specify.
 
3. sigmaProp(condition): This is the ErgoScript way of stating that the condition defined must evaluate to true for the script to be satisfied. sigmaProp is a function that converts a Boolean expression into a Sigma proposition.
 
When this script is attached to an unspent transaction output (UTXO) on the Ergo blockchain, it imposes the conditions that the blockchain must have progressed beyond block height 1000, and the output must be sent to the specified public key for it to be spent. This kind of script can be used for time-locked contracts or to ensure that funds are only sent to a particular recipient.
 
If you are a developer and are curious about how the Ergo Platform may be viable for a product you want to build, it is recommended that you explore the [Getting Started](https://docs.ergoplatform.com/dev/get-started/) section of the Ergo Documentation.

#### Conclusion
 
While ErgoScript offers several advantages, it's important to note that the "best" language for blockchain construction can vary depending on the specific needs and goals of a project. However, ErgoScript is particularly well-suited for projects that require high security, advanced contract functionality, and efficiency in transaction processing. Over time, it has proven to be a time-tested and essential tool for developers working within the Ergo ecosystem, providing a robust framework for building a wide range of decentralized solutions.
