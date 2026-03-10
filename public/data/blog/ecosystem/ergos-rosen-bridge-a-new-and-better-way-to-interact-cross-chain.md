---
title: 'Ergo’s Rosen Bridge: A New and Better Way to Interact Cross-Chain'
date: '2023-04-04'
author: Ergo Platform
tags:
- ecosystem
- ergo-blog
- eutxo
- native-tokens
- ring-signatures
- rosen-bridge
- transaction
category: blog
blog_tag: Ecosystem
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Ergo’s-Rosen-Bridge-A-New-and-Better-Way-to-Interact-Cross-Chain
glossary_hits:
- Native tokens
- Ring signatures
- Rosen Bridge
- Transaction
- eUTXO
---

# Ergo’s Rosen Bridge: A New and Better Way to Interact Cross-Chain

> **Published:** 2023-04-04 | **Author:** Ergo Platform | **Tag:** Ecosystem | **Type:** blog

**Related concepts:** Native tokens, Ring signatures, Rosen Bridge, Transaction, eUTXO

---

## What is a Bridge in Cryptocurrency?

A [bridge](https://www.coindesk.com/learn/what-are-blockchain-bridges-and-how-do-they-work/) is a tool that allows digital assets to be moved from one blockchain to another. As such, a cross-chain bridge acts as a layer of interoperability between one or more blockchains. If you are active in cryptocurrency communities, you are no doubt aware of discussions about projects and their ability to be multi-chain. What does this mean? 

Within the industry, there tends to be a segment of cryptocurrency users that hold a maximalist philosophy - the idea that only one particular blockchain will be necessary in the future. There are numerous blockchain projects that will probably fade into the history books as a footnote, but maximalist thinking is quite restrictive and short-sighted. After all, there are so many blockchain projects that are building effective projects, and each of these will provide their own unique utility. To dismiss them with maximalist philosophy is to limit the potential of the industry as a whole. Instead of dismissing blockchains that offer different tooling, it is much more advantageous to find ways to develop interoperability between different chains. That way, developers and users can maximize the usage of their assets while extracting the most value out of each blockchain.

A bridge allows for this. Ergo’s newly created Rosen Bridge will offer a new standard of bridge innovation in the cryptocurrency industry, and it is positioned to usher in a new type of multi-chain interoperability. Before we explore Rosen bridge, let’s take a look at some other notable bridges and the importance of security when performing cross-chain transactions. 

## Crypto Bridges and Security Assumptions 

Although the concept of a multi-chain bridge sounds appealing, it does not come without some concerns and security assumptions. Each blockchain protocol is designed differently, therefore it makes sense that there are unique complexities to creating each bridge. To quote Frank Zappa: “One size does not fit all.”

There are currently over 20,000 cryptocurrencies and the industry continues to grow. Many bridges have already been built between various chains, but security issues and recent exploits have created some hesitation when interacting with bridges. If bridges are to be the gateway to multi-chain interoperability, then a new standard in security assumptions is necessary.

## Harmony One - Horizon Bridge

Harmony One’s bridge, [Horizon](https://techcrunch.com/2022/06/24/harmony-blockchain-crypto-hack/), was hacked for approximately $100M USD on June 23, 2022. This particular bridge’s security assumptions hinged on the fact that its [multi-sig wallet](https://ergoplatform.org/en/blog/Ergo-Multisig-Wallet-What-is-it-and-How-to-Create-One/) only had four (4) people in control of the wallet. Furthermore, the wallet only needed two (2) signings to initiate a transaction. The founder of crypto venture fund Chainstride Capital, who goes by the handle _Ape Dev_, [stated](https://techcrunch.com/2022/06/24/harmony-blockchain-crypto-hack/) at the time: “So all in all, if two of the four multisig signers are compromised, we’re going to see another nine-figure hack.” He went on to say that “Considering all that’s been going on lately, it’d be interesting to hear some details from Harmony Protocol on how these [externally owned accounts] are secured.” In this instance, the lack of transparency with the bridge as well as any sort of code should be a red flag for future investors. Open sourced code and transparent security assumptions are a must when dealing with DeFi finances.

## Axie Infinity - Ronin Bridge

Axie Infinity’s bridge, [Ronin](https://cointelegraph.com/news/the-aftermath-of-axie-infinity-s-650m-ronin-bridge-hack), was hacked for approximately $650M USD on March 23, 2022. Centralization, human error and a lack of security assumptions were the primary culprit of this hack. [Cointelegraph](https://cointelegraph.com/news/the-aftermath-of-axie-infinity-s-650m-ronin-bridge-hack) reported that:

“The official report from the company noted that the hackers managed to get access to private keys to validator nodes resulting in the compromise of five validator nodes, which is also the threshold required to approve a transaction. The Ronin chain currently consists of nine validator nodes and the hacker managed to get access to four of them along with a third-party validator run by decentralized autonomous organization (DAO) Axie DAO. The root cause for the exploit could be traced back to last year when Axie DAO gave access to Sky Mavis to sign off on transactions on its behalf to mitigate user volume. However, this access was never revoked, which eventually led to backdoor access by hackers resulting in the $600 million hacks.”

In essence, the hackers were able to steal users’ digital assets because the hackers were actually able to approve fraudulent transactions.

## Wormhole Bridge

Yet another massive hack occurred when [Wormhole](https://techcrunch.com/2022/02/03/blockchain-bridge-wormhole-confirms-that-exploiter-stole-320-million-worth-of-crypto-assets/) lost $320M USD worth of crypto assets on February 2, 2022. Wormhole was a bridge between Ethereum and Solana, and it was used quite frequently within those ecosystems. The hack resulted from an update to the project’s GitHub repository, which showed a fix to a bug that had not yet been implemented to the project itself. The old code was still in effect and the hacker was able to exploit the bridge using the information in the GitHub repository.

## Avalanche Bridges

When looking at bridges that offer positive cross-chain functionality, the Avalanche network offers a glimpse at how an open source bridge can bring immense value. Just [last month](https://www.coindesk.com/markets/2023/03/03/record-btcb-mint-lifts-bitcoin-on-avalanche-tally-above-8k/), Avalanche’s BTC.b (essentially wrapped BTC) supply grew by over $44 million USD. This particular bridge is open source and uses a Pay-To-Witness-Public-Key-Hash transaction on Bitcoin. This particular bridge uses only one smart contract to bridge assets.

Another Avalanche Bridge (AVAX - ETH bridge) has brought over [$2.1 billion USD in Ethereum assets](https://li.fi/knowledge-hub/avalanche-bridge-a-deep-dive/) to the Avalanche network. This particular bridge uses wardens to sign off on approved bridge transactions. However, these [wardens are overseen](https://li.fi/knowledge-hub/avalanche-bridge-a-deep-dive/) by Intel SGX and are part of a “private enclave” (Ava Labs, Halborn, BwareLabs, and Avascan) that must be trusted in this scenario. Three out of four wardens are needed to approve bridge transactions. If the wardens “were to collude or get hacked,” it creates a unique attack vector through which funds could be compromised.

## Rosen Bridge: A Simpler Way to Bridge

[Rosen bridge](https://github.com/rosen-bridge) is an Ergo-centric bridge that allows users to send and receive coins and tokens between Ergo and other blockchains. **To be clear, the Rosen bridge prioritizes security over transaction speed.** One of the benefits of using Rosen bridge is that there is “no need to deploy and utilize smart contracts on the other chains since the consensus on any action can be done on Ergo.” This minimizes the attack vector of the bridge because there is no need to worry about the security assumptions of the other blockchain. Removing the need to interact with smart contracts on the other chain is one of the key innovations that sets Rosen apart from other bridges. 

It is important to note that Rosen Bridge is also a 2nd layer authentication bridge. This means that there are _**two layers of security**_ - in the form of watchers and guards.

>“In the first layer, watchers are monitoring and [reporting] the events on the networks. Upon reaching a consensus on a particular event, the second layer is being notified. In the second layer, Guards will verify the event and create/sign the required transaction for Ergo or chainX. Watchers monitor the chains, verify and report the events, and try to reach a consensus on the verified events. Then they notify the Guards of an approved event. Guards will verify the approved events and try to sign the required transaction. Watchers actively monitor the chains and trigger the events, while Guards only verify the approved events.”

In the simplest terms, the watchers and guards have built in redundancies, arming Rosen bridge with multiple layers of security to protect users from potential exploits. It’s also worth noting that any blockchain that supports multisignature or threshold signatures can be added to the Rosen bridge network.

When dealing with financial assets, it is imperative that security is the first priority. As has been noted, depending on the structure and security assumptions, bridges have been prone to hacks. Rosen bridge ushers in a new era for bridge interaction. Coupled with Ergo’s robust and time tested security assumptions, its unique innovations offer a new standard for multi-chain bridge design. Ergo is built to offer secure financial transactions. It is designed to be a haven for research and open source coding, where like-minded developers can build dApps and tools that benefit the average person. The Ergo Platform did not pre-allocate tokens, and the coin has had one of the fairest launches since Bitcoin. Just take a look under the hood and see the engine that drives this blockchain. Ergo has been innovating since its inception, developing secure financial contracts on the eUTXO model and pushing the limits of Proof of Work to new heights. 

Rosen bridge is just the latest innovation in a long line of DeFi tools and products on Ergo. Cross-chain interoperability is the future of the cryptocurrency space, and with Rosen bridge, we have a new standard in bridge security. Security should never be sacrificed for speed when it comes to ensuring the safety of your money. By minimizing potential attack vectors through watchers and guards, as well as the exclusive use of smart contracts on Ergo, funds will be more secure and cross-chain interoperability will have an opportunity to flourish in new ways.

To learn more about Rosen Bridge, please consult [GitHub](https://github.com/rosen-bridge) and this [video](https://www.youtube.com/watch?v=Xsiy-yPJQ6w&ab_channel=ErgoPlatform) by Joseph Armenio.
