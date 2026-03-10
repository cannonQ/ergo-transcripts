---
title: 'EIP37 Hard Fork

  '
date: '2022-10-04'
author: Ergo Platform
tags:
- addresses
- difficulty-adjustment
- eip
- ergo-blog
- ergo-foundation
- ergohack
- full-node
- mining
category: blog
blog_tag: Mining, Core
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/EIP37 Hard Fork
glossary_hits:
- Addresses
- Difficulty adjustment
- EIP
- ERGOHACK
- Ergo Foundation
- Full node
---

# EIP37 Hard Fork


> **Published:** 2022-10-04 | **Author:** Ergo Platform | **Tag:** Mining, Core | **Type:** blog

**Related concepts:** Addresses, Difficulty adjustment, EIP, ERGOHACK, Ergo Foundation, Full node

---

After the Ethereum Merge, the crypto mining industry witnessed an impressive reorientation of hashing power across several Proof of Work blockchains. The Ergo network experienced sudden and drastic spikes in the overall network hashrate. Although the addition of new miners was a welcomed event, the network difficulty also increased greatly. As the waters calmed, it became clear that former Ethereum miners were joining and testing out different networks for their hardware. With the sudden spike in Ergo’s hashrate, the network difficulty also increased. As miners left, the hashrate lowered. However, the difficulty did NOT lower proportionally with the decrease in network hashrate. This is because of certain features that were in place to protect network security. In an effort to protect the network, network difficulty would only change with each new epoch. As a result of this scenario, many loyal Ergo miners were left with extremely large block times and far fewer mining rewards. 

## A Solution to the Problem: EIP37

After consulting a sampling of the mining community, the Ergo Foundation released an immediate reference client to address this issue. EIP37 aimed to decrease the amount of time between epochs to 128 blocks, while also capping any change in network difficulty to no more than 50%.

The Ergo Foundation’s Core Developer, Alex Chepurnoy (aka Kushti) published the following about [EIP37 on the Ergo Github](https://github.com/ergoplatform/eips/pull/79/files):

“We propose to make current difficulty readjustment more reactive and smoother by shortening epoch length, amplifying weight of the last epoch and put some limits on difficulty change as follows.

1. Epoch length to be set to 128 blocks.
2. We calculate ‘predictive’ difficulty according to 8 epochs, 128 blocks each, and ‘classic’ difficulty as done in Bitcoin. We limit predictive difficulty change so that it never can be changed by more than 50% per epoch. Then we take the average from classic and predictive difficulties.
3. We limit change so that difficulty never can be changed by more than 50% per epoch.”

## Governance: The Mining Community Votes on EIP37

Since the Ergo Platform is run by miners, any changes (including the EIP37 hard fork proposal) need to be voted on by the mining community. Once voting began, a 90% super majority was required to pass the vote and initiate the EIP37 hard fork. The following is a breakdown of how miners and mining pools were able to vote.

There are four separate reference clients that voters needed to be aware of:

**4.0.100**: This version supported the new difficulty adjustment algorithm and activation. Miners who mine with a full node (and used this version) needed to set a value of “6 = 2400” in the client config. For more details on how these instructions were outlined, please see the full instructions on the Ergo Github.

**4.0.101**: This version auto-voted for EIP37 implementation.

**4.0.102**: This version allowed users to specify their vote during the previous epoch.

**4.0.103**: This version auto-voted for EIP37 during the last epoch. 

Reference clients 4.0.100 and 4.0.101 would have started to calculate votes at the beginning of the current epoch (started at 844800), whereas versions 4.0.102 and 4.0.103 allowed for immediate voting. 

The reference client contained a mechanism that scanned the chain for votes, and once the necessary 90% super majority vote was achieved, the hard fork was activated.

## The Future of Ergo Mining

Miners are highly encouraged to participate in discussions that affect the future of Ergo and the mining protocol. If you are interested in participating, these discussions primarily take place on the Ergo Github. As for the future, Ergo Foundation Board Member, Joseph Armeanio, hinted at some plans in a recent [interview with Hobbyist Miner](https://www.youtube.com/watch?v=UIvCHM7UxmQ&ab_channel=TheHobbyistMiner). He indicated that the Ergo Foundation is discussing plans for research grants that will explore GPU mining improvements as the network and ecosystem grows.

EIP37 has officially passed and the network difficulty has lowered significantly from a peak of 22.67P (just after the Ethereum merge) to 7.25P. Meanwhile, Ergo’s network hashrate has grown steadily over the last few days and now sits at approximately 50TH/s.

The mining protocol is showing encouraging stability and the ecosystem continues to show positive growth. If you are new to Ergo, be sure to check out ErgoHack V which is currently underway. This latest hackathon is primarily focused on participants building tools and dApps that focus on mining and minting. Stay tuned to our social media channels for all the details!
