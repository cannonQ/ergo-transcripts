---
title: Bootstrapping of gold oracle pool and Dexy
description: 'ErgoForum discussion: Bootstrapping of gold oracle pool and Dexy'
tags:
- addresses
- amm
- bootstrapping
- box
- data-input
- dev
- dexy
- eip
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- gort
- native-tokens
- oracle-pools
- registers
- transaction
category: forum
forum_category: Development
source: ergoforum
source_url: https://ergoforum.org/t/bootstrapping-of-gold-oracle-pool-and-dexy/4660
created: '2024-02-07'
last_activity: '2024-05-01'
posts_count: 4
views: 708
likes: 18
glossary_hits:
- AMM
- Addresses
- Bootstrapping
- Box
- Data input
- Dexy
- EIP
- Ergo Explorer
- ErgoScript
- ErgoScript context
- ErgoTree
- GORT
- Native tokens
- Oracle pools
- Registers
- Transaction
---

# Bootstrapping of gold oracle pool and Dexy

> **Forum thread:** [https://ergoforum.org/t/bootstrapping-of-gold-oracle-pool-and-dexy/4660](https://ergoforum.org/t/bootstrapping-of-gold-oracle-pool-and-dexy/4660)
> **Category:** Development | **Created:** 2024-02-07 | **Posts:** 4 | **Views:** 708

**Related concepts:** AMM, Addresses, Bootstrapping, Box, Data input, Dexy, EIP, Ergo Explorer, ErgoScript, ErgoScript context, ErgoTree, GORT, Native tokens, Oracle pools, Registers, Transaction

---

### Post #1 — @kushti (2024-02-07)

This post is about bootstrapping of tokens and contracts related to Gold oracle pool and Dexy. New additions will be added to this post as bootstrapping goes on.

Oracle pool was bootstrapped with contracts from [EIP-0023 Oracle pool 2.0 by scalahub · Pull Request #41 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/41) . Tokens data can be found @ [Ergo Explorer](https://explorer.ergoplatform.com/en/oracle-pool-state/xauerg) . There were different oracle token and ballot token initially, and then after testing pool updates they are changed.

Oracle tokens are currently regularly sold on AuctionHouse, e.g. <https://ergoauctions.org/artwork/78263e5613557e129f075f0a241287e09c4204be76ad53d77d6e7feebcccb001> . Initially, 17 tokens were distributed to testnet pool members and USD pool operators.

---

### Post #2 — @kushti (2024-03-21)

Initially, 2M GORT tokens were unlocked, others locked. Then those 2M were burnt, and instead, dev emission contract was introduced.

Contract code can be found at [dexy-stable/contracts/gort-dev/emission.es at master · kushti/dexy-stable · GitHub](https://github.com/kushti/dexy-stable/blob/master/contracts/gort-dev/emission.es) .

In short, the contract has following actions:

* top-up , where it is accepting GORTs (at least 1 GORT per call)
* withdrawal, where it is possible to withdraw to treasury address (stored in register R5), but not more than 1 GORT per block (last payout block number is stored in register R4), and could be increased to any value no more than current height, and up to the same number of GORTs can be withdrawn. Treasury address for next withdrawal can be updated in this action.

Withdrawal action is similar to treasury contract from pre-genesis state, but the latter was done in ErgoTree, while the current contract is available in ErgoScript.

Hopefully emission to treasury contract may be useful for other applications as well.

contract deployment transaction: [Ergo Explorer](https://explorer.ergoplatform.com/en/transactions/a1a7af36bcece3d8b6b5fb602f3bdad40236511338a14975f28c681bc67501da)

This contract is using along with oracle pool’s refresh contract. The refresh contract is allowing to withdraw up to 2 \*(number of active oracles) GORTs, and oracle demands for at least 1 GORT. So the dev emission contract can take up to (number of active oracles) GORTs per epoch. Currently the offchain is done in the way that the leading oracle is getting 2 GORTs per epoch, other oracles 1 GORT per epoch, and dev emission contract is getting (number of active oracles) GORTs. This is not enforced via oracle pool data refresh contract atm, but such enforcement could be done.

---

### Post #3 — @kushti (2024-03-27)

Buyback contract token issued: *bf24ed4af7eb5a7839c43aa6b240697d81b196120c837e1a941832c266d3755c*

3 tokens issued to make parallelization of actions easier (so would be simpler to do top-up and buyback at the same time), and all the tokens are bound to buyback contract:

<https://explorer.ergoplatform.com/en/addresses/43xhWcMKGeNA8eJ1oFuJGzcCyiBH84t5ViuMLx5BddqmAew1JjhEXkiL5bJsdBktBhvFkpyFb5WJ5m24jT1Kz978h8Mb9Z61feYbCZjLTuF2skSCfQWvsrXpcsTGY2pnVpZn4fe32CijGymD2M4UKdc1YMU8fh6TRJJUfHCra9xkX98cajwsrWUE6aFC7Ck7y4rKA9vNSNsBr1sCFt2i5dj7Cci5Ez3F8QZ8xMkZioAGh6MCvupHuPefnkPXtqBtZxwZ6ve5Nk24oudcRagnepk3ipTMRyxA57sfaNwXAij98doHk2mBU7Li51TD3REpjifjUPmA6DX1U3UMCnuDgAZzdSkdgxanPWzRbxbxEoDyxrieN7TQyirHK9dBpp6iJjaE6ave1Y8TZWCizBvWUsXcEuLWGZczDumdstzDs6zvLk4f8MWTVRSkqorwFfvDRSYK26TbsUbD5dLUw4QW8QCYVzER542syvMKp1MNUyM8bo9kRD2Vtb75V3eZV1Camr1h46nMQLLw3bUq2T9P1wRqCHb7kfqKpR1hDLMqmpEeNNig4WJ6BVnBqzfT7MVesYinRco881NDvJnVi22JNx7CXdFKjWm88fG3UcjmBpG8LWedKiybSv3GxZdf9reZrigTZpMyBgwc5YWN4uF9pKWVr25ZHMnqZK8r5FdbrW5x4k8bW1hoLCe5aXLKXzBYyBNt1wZk33qCE4gJ5qu4dyD9eR1F32vY787vBYbSXrsNiF5iN1MhSJysFy4pQVvePMrxePQTEuqYytJCDGFxbaMiU3mai1GwJVTgnQysQWceSE959HgYBxALsTGisWGCjjfYN7QxnjPbbD36ybsei9VhYXu6>

---

### Post #4 — @kushti (2024-05-01)

Most of actions in the bank contracts, and also LP redemption are relying on liquidity pool’s price to oracle price ratio. To avoid relying in such actions on two data inputs (which would probably mean a lot of failed txs as the inputs are constantly being updated), and also to extract common functionality from multiple contracts, we use tracking contracts here.

A tracker is like a monitor that triggers an alarm when an event occurs. The alarm continues to “ring” until the tracker resets the alarm, which can only happen after the event has ended. Thus, if the alarm is in a “triggered” state, we can be sure that the event is ongoing (i.e., not yet ended). In our case, the event we are monitoring is the ratio of LP rate and Oracle rate going below (or above) some value. The registers define the ratio to monitor (R4, R5) and whether we are monitoring above or below (R6), along with the height at which the trigger occurred (R7). The value in R7 will be “infinity” if the event has ended.

This box is be spent whenever tracker state must change i.e., move from trigger to reset or vice versa. This box can only be be spent if the tracker state changes.

Tracking contract source code: [dexy-stable/contracts/tracking.es at master · kushti/dexy-stable · GitHub](https://github.com/kushti/dexy-stable/blob/master/contracts/tracking.es)

And tracking contracts are just deployed on the mainnet!

* 95% tracking deployment transaction:  
  [Ergo Explorer](https://explorer.ergoplatform.com/en/transactions/4c14e7a493ef49f6b9924ef2c9071a2f018098fd4e55079cad74a64a920f6077)
* 98% tracking deployment transaction:  
  [Ergo Explorer](https://explorer.ergoplatform.com/en/transactions/4e87315a08162bb63d8b7cd7cc8e0f01928c21bd1c21e12af4d98ac0dd89cba5)
* 101% tracking deployment transaction:  
  [Ergo Explorer](https://explorer.ergoplatform.com/en/transactions/f15bbae3f3def0e2f825bc656a232fdbe678048969f3a059c1d35713fbde3240)
