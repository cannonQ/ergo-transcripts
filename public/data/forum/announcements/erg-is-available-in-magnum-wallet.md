---
title: ERG is available in Magnum Wallet
description: 'ErgoForum discussion: ERG is available in Magnum Wallet'
tags:
- addresses
- announcements
- ergoforum
- ergoscript-context
- full-node
- transaction
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/erg-is-available-in-magnum-wallet/33
created: '2019-07-11'
last_activity: '2019-07-11'
posts_count: 2
views: 1256
likes: 2
glossary_hits:
- Addresses
- ErgoScript context
- Full node
- Transaction
---

# ERG is available in Magnum Wallet

> **Forum thread:** [https://ergoforum.org/t/erg-is-available-in-magnum-wallet/33](https://ergoforum.org/t/erg-is-available-in-magnum-wallet/33)
> **Category:** Announcements | **Created:** 2019-07-11 | **Posts:** 2 | **Views:** 1256

**Related concepts:** Addresses, ErgoScript context, Full node, Transaction

---

### Post #1 — @Martin-mx (2019-07-11)

“We are glad to release the support of $ERG coins in our Magnum Wallet! ![:clap:](https://emoji.discourse-cdn.com/twitter/clap.png?v=9 ":clap:") We welcome users of the Ergo platform and hope they will enjoy our product!”

<https://twitter.com/Magnum_Wallet/status/1148948899618598915>

[![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/3ad6e04a0205514c1e1ec29808a902538a1d8e78.jpeg)

D\_HMwjDX4AEkyn0.jpg1200×675 68.7 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/3ad6e04a0205514c1e1ec29808a902538a1d8e78.jpeg "D_HMwjDX4AEkyn0.jpg")

---

### Post #2 — @kushti (2019-07-11)

Dear miners, please note that the Magnum Wallet currently can recognize funds associated with P2PK (Pay-to-Public-Key) addresses. Since mining rewards are going to special P2S (pay-to-script, where the script is locking funds for 720 blocks etc), Magnum Wallet do not recognize them despite the fact both addresses are about the same secret behind (this is the current limitation of ergo-js Javascript library, node wallet with enhanced capabilities does not have this issue). So you need to send money via node wallet to a P2PK address (to e.g. self, so address got from /wallet/addresses), and then Magnum will recognize the funds. We will also write a script to scan the blockchain and form withdrawal transactions to just sign them in the node wallet.
