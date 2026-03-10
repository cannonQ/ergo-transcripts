---
title: 'Cryptocurrency Bridges: The Future of Interoperability'
date: '2023-03-23'
author: Ergo Platform
tags:
- community
- ergo-blog
- native-tokens
- ring-signatures
- rosen-bridge
- transaction
category: blog
blog_tag: Community
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Cryptocurrency-Bridges-The-Future-of-Interoperability
glossary_hits:
- Native tokens
- Ring signatures
- Rosen Bridge
- Transaction
---

# Cryptocurrency Bridges: The Future of Interoperability

> **Published:** 2023-03-23 | **Author:** Ergo Platform | **Tag:** Community | **Type:** blog

**Related concepts:** Native tokens, Ring signatures, Rosen Bridge, Transaction

---

## Ergo’s Rosen Bridge: A New Way to Bridge

[Rosen Bridge](https://github.com/rosen-bridge) is an Ergo-centric bridge that allows users to send and receive coins and tokens between Ergo and other blockchains. To be clear, the Rosen Bridge prioritizes security over transaction speed. One of the benefits of using Rosen Bridge is that there is  
>“no need to deploy and utilize smart contracts on the other chains since the consensus on any action can be done on Ergo.”

This minimizes the attack vector of the bridge because there is no need to worry about the security assumptions of the other blockchain. Removing the need to interact with smart contracts on the other chain is one of the key innovations that sets Rosen apart from other bridges. 

It is important to note that Rosen Bridge is also a 2nd layer authentication bridge. This means that there are _two layers of security_ - in the form of watchers and guards.

>“In the first layer, watchers are monitoring and [reporting] the events on the networks. Upon reaching a consensus on a particular event, the second layer is being notified. In the second layer, Guards will verify the event and create/sign the required transaction for Ergo or chainX. Watchers monitor the chains, verify and report the events, and try to reach a consensus on the verified events. Then they notify the Guards of an approved event. Guards will verify the approved events and try to sign the required transaction. Watchers actively monitor the chains and trigger the events, while Guards only verify the approved events.”

In simplest terms, the watchers and guards have built-in redundancies, arming Rosen Bridge with multiple layers of security to protect users from potential exploits. It is also worth noting that any blockchain that supports multisignature or threshold signatures can be added to the Rosen Bridge network.

## What are Bridges?

A [bridge](https://www.coindesk.com/learn/what-are-blockchain-bridges-and-how-do-they-work/) is a tool that allows digital assets to be moved from one blockchain to another. As such, a cross-chain bridge acts as a layer of interoperability between one or more blockchains.

## Why do we Need Bridges?

Crypto bridges allow different blockchains to transfer digital assets between each other in a quick and efficient way. Alternative methods can be time consuming with users sometimes having to do multiple swaps between various exchanges in order to acquire their cryptocurrency of choice. Crypto bridges are also generally more decentralized than CEXs, which removes the need to trust a centralized entity. Trustless bridges are also attractive to many users since they do not require KYC.

## Types of Blockchain Bridges

Although there are a plethora of different bridges that have been built on top of several blockchains, in this article we will discuss the two main [categories](https://ethereum.org/en/bridges/#:~:text=Types%20of%20bridge,-Bridges%20have%20many&text=Generally%2C%20bridges%20fall%20into%20two%20categories%3A%20trusted%20and%20trustless%20bridges.&text=Trusted%20bridges%20depend%20upon%20a,using%20smart%20contracts%20and%20algorithms.) that all bridges fall under: **trusted bridges and trustless bridges**. Trusted bridges need a central entity or system to function reliably, whereas trustless bridges rely on smart contracts and concrete coding to operate independently (and are ideally decentralized). The Rosen Bridge on Ergo is classified as a trustless bridge because it is fully decentralized.

## Why Use a Blockchain Bridge?

For most people, the main use case of a bridge is for the seamless transfer of assets across multiple blockchain platforms. This removes the need for a central figure (like a CEX) to authorize the transfer of digital assets. For many within the industry (especially those who appreciate cypherpunk philosophy), the ability for blockchain technology to provide trustless systems and mitigate the need for centralized entities is a high priority. It allows the user to take their finances into their own hands. The need for trustless and decentralized technology is vital for users to have transparent trust assumptions when using a bridge. 

Another reason one might use a bridge is because a bridge’s fees could be lower than the transaction fees on a particular blockchain. This can potentially save the user money in gas fees. Bridges also enable users the ability to transfer their assets to a blockchain with less network congestion. A bridge ultimately gives the user much more flexibility and autonomy with regards to how they deploy their assets for their DeFi needs.

## What are the Risks of Using Bridges?

Although bridges are valuable and enable cross-chain interoperability, they can come with significant risks depending on the bridge you are using. It is important that the bridge’s code is open sourced so that security assumptions can be more transparent and trustworthy. Alarmingly, the biggest [risk](https://www.coinchange.io/blog/why-crypto-bridges-are-getting-hacked-and-how-to-secure-them#:~:text=Poor%20bridge%20security%20can%20result,close%20to%2015%20incidents%20reported.) with crypto bridges is that:

>“...poor bridge security can result in a hack and loss of user funds… According to the blockchain data platform, Chainalysis, almost $2 billion has been stolen from bridges over the past two years, with close to 15 incidents reported. This data from [Chainalysis](https://blog.chainalysis.com/reports/cross-chain-bridge-hacks-2022/) reveals that bridge hacks constitute a significant proportion of the total funds stolen in DeFi in 2022, amounting to an alarming 69% of the total.”

This technology is in its early stages within an industry that is still in its infancy. Historically, bridges come with a high degree of risk and users should take care to research any bridge they wish to use. 

## Rosen Bridge: Why It’s Different From Other Bridges?

From a technological standpoint, Rosen Bridge possesses many attributes that other bridges do not. Firstly, it is open source. This means that the community can verify the code to ensure that there are no vulnerabilities. Additionally, the Rosen Bridge relies only on Ergo’s smart contract capabilities - **no smart contracts are used on the other chain**. This feature is unique in the industry, and it lowers the attack vectors that bad actors could potentially use to steal funds.

Rosen Bridge allows for easy implementation with other blockchains. Any blockchain that has “multisignature or threshold signature support can be added to the [bridge](https://github.com/rosen-bridge) network.” It is also decentralized and trustless, offering users increased transparency and security.

#### Conclusion

Bridges are an essential part of a decentralized future. They not only enable an interoperable space, but they also allow users to maximize the unique properties of different blockchains. As this industry is still a new frontier, understanding the security assumptions of each bridge is crucial in keeping digital assets safe. With Rosen Bridge, we have a new standard in bridge innovation and design. Along with Ergo’s decentralization, security assumptions and open sourced code, Rosen Bridge has the potential to unify the crypto space as a major hub for interoperability, in a way this industry has not yet witnessed.
