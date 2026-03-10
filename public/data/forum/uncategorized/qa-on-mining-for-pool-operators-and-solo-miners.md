---
title: Q&A on mining (for pool operators and solo miners)
description: 'ErgoForum discussion: Q&A on mining (for pool operators and solo miners)'
tags:
- addresses
- ergo-explorer
- ergoforum
- ergoscript-context
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/q-a-on-mining-for-pool-operators-and-solo-miners/587
created: '2021-02-01'
last_activity: '2021-02-01'
posts_count: 1
views: 4023
likes: 4
glossary_hits:
- Addresses
- Ergo Explorer
- ErgoScript context
- Full node
---

# Q&A on mining (for pool operators and solo miners)

> **Forum thread:** [https://ergoforum.org/t/q-a-on-mining-for-pool-operators-and-solo-miners/587](https://ergoforum.org/t/q-a-on-mining-for-pool-operators-and-solo-miners/587)
> **Category:** Uncategorized | **Created:** 2021-02-01 | **Posts:** 1 | **Views:** 4023

**Related concepts:** Addresses, Ergo Explorer, ErgoScript context, Full node

---

### Post #1 — @kushti (2021-02-01)

This Q&A is for pool operators and solo miners mostly.

**Why are mining rewards going to some strange addresses?**

> Mining rewards are going to UTXOs associated with special scripts which are locking rewards to miner public keys for 720 blocks (72 in the testnet). Examples of such scripts are *mPdcmQkPPvyJZtvwyc2ZFboEue1X1uMw729UbUhe5ZoQJAQsWyKmLckLx9bRX1YU33uJTq5mCdGdG6Sb* (testnet), *88dhgzEuTXaQ3tvkG8KeHesmXdvVomxHoHK5ExawGuxhs3nwBKkoQTxZogna6Dx9Jbu7KG2Wor22Uy73* (mainnet).

Such UTXOs do not belong to the node wallet before the locking height, thus wallet does not include them into balance. However, such UTXOs are stored in a special node application with id = 9 (wallet application id = 10), thus they can be found via /scan/unspentBoxes/9 (so /scan/unspentBoxes node API method with id = 9).

After enough confirmations (720 for the mainnet, 72 for the testnet) wallet shows mined rewards even if they still associated with long scripts, not short P2PK addresses.

**How to find if some block is mine?**

Before enough confirmations (720 for the mainnet, 72 for the testnet), you can find reward UTXOs with /scan/unspentBoxes/9 API call, after that you can find rewards in the wallet.

Also, you can get mining rewards with /mining/rewardAddress API call, getting something like:

> {  
> “rewardAddress”: “mPdcmQkPPvyMGoCDNg9oiasLyPpKJhHjgjpt89uJZE1oN9PJ9fKbdKDcfomtWoy3d1E7RFLTUbXbt1AS”  
> }

as result. Then you can check rewards with e.g. explorer as [Ergo Explorer](https://testnet.ergoplatform.com/en/addresses/mPdcmQkPPvyMGoCDNg9oiasLyPpKJhHjgjpt89uJZE1oN9PJ9fKbdKDcfomtWoy3d1E7RFLTUbXbt1AS) .

Also, you can get “raw” public key of miner via /mining/rewardPublicKey, getting something like>

> {  
> “rewardPubkey”: “03aa53abda9e6c958ed6046e6092b901662a26a01a2029c417b1c3f29b4b1c2799”  
> }

And then check block headers (“pk” field) for this public key.
