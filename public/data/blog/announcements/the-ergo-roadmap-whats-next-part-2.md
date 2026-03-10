---
title: 'The Ergo Roadmap: What’s Next Part #2

  '
date: '2022-11-23'
author: Ergo Platform
tags:
- addresses
- announcements
- box
- eip
- eip-22
- ergo-blog
- ergo-foundation
- ergohack
- ergoscript-context
- eutxo
- layer-scaling
- native-tokens
- oracle-pools
- transaction
category: blog
blog_tag: Announcements
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/The-Ergo-Roadmap-What’s-Next-Part-2
glossary_hits:
- Addresses
- Box
- EIP
- EIP-22
- ERGOHACK
- Ergo Foundation
- ErgoScript context
- Layer scaling
- Native tokens
- Oracle pools
- Transaction
- eUTXO
---

# The Ergo Roadmap: What’s Next Part #2


> **Published:** 2022-11-23 | **Author:** Ergo Platform | **Tag:** Announcements | **Type:** blog

**Related concepts:** Addresses, Box, EIP, EIP-22, ERGOHACK, Ergo Foundation, ErgoScript context, Layer scaling, Native tokens, Oracle pools, Transaction, eUTXO

---

As we finish ErgoHack V and prepare for the upcoming Ergo Summit on November 26th, Ergo continues to march ahead, building and designing a Layer 1 blockchain for the future. Mass adoption is an ever present discussion in cryptocurrency circles, and the Ergo Foundation is working hard to promote the blockchain and its technology in line with the Ergo Manifesto. As we look at the second installment of Ergo’s Roadmap, we will highlight exchange listings and an improvement to the oracle pools. 

## Exchange Listings

Exchange listings are a topic that is frequently discussed by the community. They are vital to a project’s growth and success, and they promote accessibility to the casual investor. Currently, some of the most recognized exchanges that ERG is listed on are: Kucoin, Gate.io, Coinex, Hotbit, Tradeogre and Indodax. A major milestone for Ergo was reached earlier this year when the Ergo Foundation announced that the Tier-1 exchange, Huobi Global, would also be listing the ERG token.

During AMA events, the Ergo Foundation is often asked if additional exchanges are in the pipeline. Tier-1 exchanges will continue to be a priority for the Ergo Foundation. However, getting Ergo listed is much more complicated than a desire to have the token available on an exchange. Ergo is a truly unique Layer 1 blockchain. As an eUTXO model chain, new exchanges have to initially utilize significant software resources to properly integrate Ergo into their exchange platform. Numerous tokens that tend to be quickly listed are often ERC-20 tokens, or they are based off an already existing Layer 1 blockchain. Even Cardano’s eUTXO model differs from Ergo, so this is why it takes time and resources to properly integrate Ergo into new exchanges. That being said, community members can be assured that future Tier-1 exchange listings are a priority and the Ergo Foundation will continue to work hard to pursue new exchanges. 

## Oracles V2

Ergo offers pools of oracles that act to decentralize the provision of data, ensuring that both the process and the data itself are more reliable. The group of oracles within the pool agree on the data sources and each post their data points to the blockchain. This increases the reliability and validity of the data. At the end of an epoch, these data points are averaged, after removing outliers, in a final transaction which reads each data point. This results in the oracle pool producing a new finalized datapoint. 
	
Ergo is currently developing [oracle pools V2](https://ergoplatform.org/en/blog/2020-08-31-ergos-oracle-pools-and-what-they-mean-for-the-ecosystem/) which will provide improvements upon the existing technology. Oracle pools V2 differs from V1 in a variety of ways. For starters, there is a [single pool address](https://github.com/ergoplatform/eips/blob/3efd0c6d6fd72b640dcda3a256aba729d1d26679/eip-0022.md) on V2. On Github, the Ergo team goes into more detail by stating that, “Data-point boxes will be considered as inputs rather than data-inputs. These inputs will be spent, and a copy of the box with the reward will be created. [The] Rewards [will be] in tokens, not Ergs. The posting reward will be in the form of tokens, which can be redeemed separately. Reward[s] accumulated in data point boxes to prevent dust. We will not be creating a new box for rewarding each posting. Instead, the rewards will be accumulated in data-point boxes.” These methods will increase the oracle pools’ efficiency mainly through introducing a token, removing some bloat boxes/data-inputs and replacing them with simpler methods.

Stay tuned for the next installment of The Ergo Roadmap: What’s Next. We also invite you to participate in the Ergo Summit on November 26th, 2022. Subscribe to our Twitter and Telegram channels to stay up to date for all upcoming events.
