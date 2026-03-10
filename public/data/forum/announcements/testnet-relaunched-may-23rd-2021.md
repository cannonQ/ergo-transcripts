---
title: Testnet relaunched (May, 23rd, 2021)
description: 'ErgoForum discussion: Testnet relaunched (May, 23rd, 2021)'
tags:
- announcements
- ergo-explorer
- ergoforum
- ergoscript
- scorex
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/testnet-relaunched-may-23rd-2021/1395
created: '2021-05-23'
last_activity: '2021-05-23'
posts_count: 1
views: 1704
likes: 1
glossary_hits:
- Ergo Explorer
- ErgoScript
- Scorex
---

# Testnet relaunched (May, 23rd, 2021)

> **Forum thread:** [https://ergoforum.org/t/testnet-relaunched-may-23rd-2021/1395](https://ergoforum.org/t/testnet-relaunched-may-23rd-2021/1395)
> **Category:** Announcements | **Created:** 2021-05-23 | **Posts:** 1 | **Views:** 1704

**Related concepts:** Ergo Explorer, ErgoScript, Scorex

---

### Post #1 — @kushti (2021-05-23)

Testnet was relaunched recently. Explorer ( <https://testnet.ergoplatform.com/> ) will be updated soon. If you want to join, please use new magic bytes value, which is [2,0,0,2]. Example:

```ergoscript
scorex {
  network {
    magicBytes = [2, 0, 0, 2]
    bindAddress = "0.0.0.0:9020"
    nodeName = "ergo-testnet-4.0.11"
    nodeName = ${?NODENAME}
    knownPeers = [
      "213.239.193.208:9020",
      "37.156.20.158:9020"
    ]
  }
  restApi {
    # Hex-encoded Blake2b256 hash of an API key. Should be 64-chars long Base16 string.
    # Below is hash corresponding to API_KEY = "hello" (with no quotes)
    apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
  }
}
```

alternatively, just use upcoming 4.0.11, default testnet config updated there [Candidate for version 4.0.11 by kushti · Pull Request #1347 · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/pull/1347)
