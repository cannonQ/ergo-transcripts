---
title: Invalid address pool closed connection?
description: 'ErgoForum discussion: Invalid address pool closed connection?'
tags:
- addresses
- autolykos
- ergoforum
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/invalid-address-pool-closed-connection/1575
created: '2021-06-01'
last_activity: '2021-06-01'
posts_count: 2
views: 1758
likes: 0
glossary_hits:
- Addresses
- Autolykos
- Full node
---

# Invalid address pool closed connection?

> **Forum thread:** [https://ergoforum.org/t/invalid-address-pool-closed-connection/1575](https://ergoforum.org/t/invalid-address-pool-closed-connection/1575)
> **Category:** Uncategorized | **Created:** 2021-06-01 | **Posts:** 2 | **Views:** 1758

**Related concepts:** Addresses, Autolykos, Full node

---

### Post #1 — @djeuro1981 (2021-06-01)

i keep getting this message when i try mine with SRBMiner

Invalid address [autolykos2]  
[2021-06-01 16:18:35] Pool unexpectedly closed the connection [autolykos2]  
[2021-06-01 16:18:35] Couldn’t login to pool… [autolykos2]  
[2021-06-01 16:18:35] Reconnecting to [hk.ergo.herominers.com:10250](http://hk.ergo.herominers.com:10250) in 3 seconds [autolykos2]  
[2021-06-01 16:18:38] Invalid address [autolykos2]  
[2021-06-01 16:18:38] Pool unexpectedly closed the connection [autolykos2]

continuelsy over and over, any help would be greatly appreciated

---

### Post #2 — @Tronox (2021-06-01)

I’m not experiencing any trouble with herominers and using nanominer in my case.

Were you mining normally before that error? Or you have never been able to mine Ergo before?

If you are using Nvidia i believe SRBMiner isn’t compatible, if you are using AMD, you should be fine.

Also you could try to mine directly to your ergo address of some exchange for determining if your node is the problem.

And I it were the pool’s problem, which i doubt, try to connect to other region of the pool, such as Singapore, if it works, your internet connection would be blocking hong kong for some reason.

I hope i have helped somehow.
