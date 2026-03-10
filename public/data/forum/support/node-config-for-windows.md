---
title: Node config for Windows
description: 'ErgoForum discussion: Node config for Windows'
tags:
- ergoforum
- ergoscript
- full-node
- scorex
- support
category: forum
forum_category: Support
source: ergoforum
source_url: https://ergoforum.org/t/node-config-for-windows/282
created: '2020-07-23'
last_activity: '2020-07-23'
posts_count: 2
views: 1114
likes: 5
glossary_hits:
- ErgoScript
- Full node
- Scorex
---

# Node config for Windows

> **Forum thread:** [https://ergoforum.org/t/node-config-for-windows/282](https://ergoforum.org/t/node-config-for-windows/282)
> **Category:** Support | **Created:** 2020-07-23 | **Posts:** 2 | **Views:** 1114

**Related concepts:** ErgoScript, Full node, Scorex

---

### Post #1 — @kushti (2020-07-23)

Here’s minimal working config for the Ergo node for Windows. With it you can unlock panel (and protected API calls in Swagger) by just “hello” string (not very secure option, so better change API key, see config).

```ergoscript
ergo {
    directory ="c:/ergo/"
    node {
        mining = false
    }
    wallet.secretStorage.secretDir = "c:/ergo/wallet/keystore"
}

scorex {
    restApi {
        # Hex-encoded Blake2b256 hash of an API key. 
        # Should be 64-chars long Base16 string.
        # below is the hash of the string 'hello'
        # replace with your actual hash 
        apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
    }
}
```

Thanks “Kst” discord user for testing it!

---

### Post #2 — @4SiteOnline (2020-07-23)

i think you might actually be Psychic
