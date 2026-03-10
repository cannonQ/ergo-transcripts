---
title: Ergo’s Oracle Pools V2 - An Innovative Design
date: '2023-06-04'
author: Ergo Platform
tags:
- addresses
- box
- ecosystem
- ergo-blog
- eutxo
- full-node
- native-tokens
- oracle-pools
- transaction
category: blog
blog_tag: Ecosystem, Tooling
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Ergo’s-Oracle-Pools-V2-An-Innovative-Design
glossary_hits:
- Addresses
- Box
- Full node
- Native tokens
- Oracle pools
- Transaction
- eUTXO
---

# Ergo’s Oracle Pools V2 - An Innovative Design

> **Published:** 2023-06-04 | **Author:** Ergo Platform | **Tag:** Ecosystem, Tooling | **Type:** blog

**Related concepts:** Addresses, Box, Full node, Native tokens, Oracle pools, Transaction, eUTXO

---

[Oracle pools](https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263) represent an innovative piece of technology that are essential for bridging the gap between blockchain and the real world by providing access to external data sources. An oracle pools’ purpose is to reliably forward data to the blockchain (relevant to the needs of a dApp or other product) and promote the validity and accuracy of that data.

Dapps are the backbone of blockchain ecosystems, and solid oracle frameworks are essential in facilitating a thriving ecosystem. Ergo developers have placed a high priority on the development of dependable oracles.

## What are Oracle Pools and How Do They Work?

Ergo offers pools of oracles that act to decentralize the provision of data, ensuring that both the process of obtaining the external data, and the data itself, is more reliable. The group of oracles within the pool agree on the data sources, and each post their data points to the blockchain. This increases the reliability and validity of the data. At the end of an epoch, these data points are averaged (after removing outliers) in a final transaction which reads each data point. This results in the oracle pool producing a new finalized datapoint. The reason why oracles are so vital for a crypto ecosystem is because they enable dApps to be able to interact with real-world events and execute smart contracts based on real-time data. They can also enhance the security and reliability of applications by verifying and authenticating external information. For example, one major application of oracles is enhancing the DeFi experience for users. This could be by providing accurate price feed and market data information which is crucial for borrowing/lending protocols and decentralized trading on DEXs. 

## Oracles: Ergo Vs Chainlink 

Currently, Chainlink is the leader in oracles by market capitalization, but Ergo has been developing improvements on existing oracle frameworks for several years now. 

There are many [differences between Chainlink and Ergo oracle technology](https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263). The [$LINK](https://cointelegraph.com/learn/what-is-chainlink-a-beginners-guide-to-the-cross-chain-interoperability-protocol#:~:text=The%20Chainlink%20(LINK)%20DON%20is,and%20application%20user%20interfaces%20securely.) token is an important part of Chainlink because it acts as a token that enables users to access its oracle services. Users pay for the data the oracle gets from external sources in $LINK, which can then be used in smart contracts. LINK tokens essentially serve as incentives for node operators to contribute accurate and reliable data, ensuring the dependability and trustworthiness of the Chainlink ecosystem.

Ergo’s oracle pools operate differently in a variety of ways. Firstly, Ergo’s oracle pools utilize the native cryptocurrency of the blockchain ($ERG) for payments, eliminating the need for an additional oracle token (like $LINK). As a result, users do not need to purchase an additional token to use blockchain services. 

Ergo’s oracle pools use epochs to ensure regular data updates and discourage collusion, making the data feeds more reliable. Oracles in these pools are required to post external data points within specific time intervals which creates stronger incentives for timely updates. These incentives include earning rewards for accurate data updates while also building a strong reputation within the pool. This attracts more users and maintains the integrity and reliability of the oracle pool. An oracle pools’ goal is to essentially forward external data reliably and promote validity and accuracy within that data.

It is also important to note that the eUTXO model allows the user to easily create hierarchical oracle datapoint structures, including pools of pools. This enables scaling accuracy and makes the oracles more efficient. Chainlink's design does not support this feature because the oracles in Chainlink act individually and cannot be combined together.

## Oracle Pools V2

Ergo is currently developing [Oracle Pools V2](https://docs.ergoplatform.com/eco/oracles-v2/) which is building improvements upon the existing technology. One key improvement is the ability to gather data from multiple sources, including CoinGecko, CoinMarketCap, XAU, and more. This expanded data collection enhances the accuracy and reliability of the oracle pools, providing comprehensive data feeds for smart contracts.

Ergo’s Oracle Pools V1 were an extremely valuable piece of technology but developers are continually finding ways to improve upon the existing technology. With Oracle Pools V1, there were challenges such as generating excessive dust as rewards, low rewards, and it had trouble managing the complexity associated with two types of pool boxes. Oracle Pools V2 introduces significant changes and improvements upon that system. These improvements include:
- consolidating the pool address into a single entity;
- integrating an epoch counter within the pool box to support advanced decentralized applications (dApps);
- separating the pool box from pool management logic for smoother operations;
- transitioning from ERG to tokens as rewards;
- enabling the transferring of both oracle tokens.

While these improvements are implemented, the update mechanism and the role of the pool box in other dApps remain similar to the previous oracle pool version. What this means is that although Oracle Pools V2 have introduced improvements, the base function for updates and the pool box's role in other decentralized applications (dApps) remain mostly the same.

Ergo's Oracle Pools V2 is bringing intriguing advancements to oracle technology. These technological improvements aim to overcome the limitations of Oracle Pools V1 and establish a more resilient and efficient oracle framework.

To delve deeper into Ergo’s core oracle frameworks, consult the [GitHub](https://github.com/ergoplatform/oracle-core) as well as this [educational video](https://www.youtube.com/watch?v=CzGqYAlQRWQ&t=445s&ab_channel=HashitOutw%2FCW) on all things Ergo (time index 11:30 for oracle pool information).
