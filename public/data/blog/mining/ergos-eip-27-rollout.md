---
title: Ergo’s EIP-27 Rollout
date: '2022-05-18'
author: Ergo Platform
tags:
- eip
- emission-schedule
- ergo-blog
- full-node
- mining
- native-tokens
- scorex
- transaction
category: blog
blog_tag: Mining, Core
type: news
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Ergo’s-EIP-27-Rollout
glossary_hits:
- EIP
- Emission schedule
- Full node
- Native tokens
- Scorex
- Transaction
---

# Ergo’s EIP-27 Rollout

> **Published:** 2022-05-18 | **Author:** Ergo Platform | **Tag:** Mining, Core | **Type:** news

*Alex Chepurnoy Releases Ergo Reference Client 4.0.29 with EIP27 Support*

**Related concepts:** EIP, Emission schedule, Full node, Native tokens, Scorex, Transaction

---

Over the last several months, there has been a lot of work undertaken to implement a plan that would adjust the emission schedule of ERG (Ergo’s native token). Until recently, the emission of ERG would have ended after 8 years (from mainnet launch). However, out of a concern for ensuring the long term crypto-economic security of the blockchain, core developer, Alex Chepunoy, proposed extending the emission schedule, while maintaining a fixed supply of 97,739,925 ERG.

That proposal (EIP27) entails a calculated reduction to block rewards, where the subtracted ERG are stored in a smart contract. The ERG in that contract will then pay mining rewards for an additional ~17.38 years. If you are new to EIP27, please read this article for a complete and comprehensive breakdown of the proposal.

In order for EIP27 to be implemented, it requires the support of the mining community (with a 90% pass vote). Recently, the various Ergo mining pools indicated their initial support for the proposal, and the core developer team began work on preparing the necessary data to fully implement EIP27.

Just yesterday, Chepurnoy released Ergo Protocol Reference Client 4.0.29 and it contains important information for EIP27 support. In addition to several downloadable assets, Chepurnoy highlighted the following settings that need to updated:

_The following is quoted from Chepurnoy’s Github post:_

To vote for EIP-27, use the following setting:

```
ergo {
  voting {
    8 = 1000
  }
}
```

To check EIP-27 rules after successful activation, the following setting is needed, which is off by default but needed for mining nodes (to be on proper chain in case of chain-split where old nodes can generate blocks not compatible with EIP-27):

```
ergo {
  chain {
    reemission {
      checkReemissionRules = true
    }
  }
}
```

To make proper EIP-27 compatible transactions in the presence of re-emission tokens in the node wallet, another setting is needed:

```
ergo {
  wallet {
    checkEIP27 = true
  }
}
```

So combined config (for a pool node also doing payments) could be like:

```
ergo {
  networkType = "mainnet"
  node {
    mining = true
  }
  voting {
    8 = 1000
  }
  chain {
    reemission {
      checkReemissionRules = true
    }
  }
  wallet {
    checkEIP27 = true
  }
}
```

Also, this release has a new setting to switch peer discovery off (discovery is on by default), for that, use the following setting:

```
scorex {
  network {
    peerDiscovery = true
  }
}
```

### Conclusion
It is important for all parties that operate Ergo mining operations (and anyone else who deploys an Ergo node) to check these updates and implement them for the successful activation of EIP27. Currently, EIP27 is scheduled to go live at block #777217 - near the end of June 2022. Be sure to keep an eye on Ergo’s social media channels for more important updates on EIP27 as they unfold.
