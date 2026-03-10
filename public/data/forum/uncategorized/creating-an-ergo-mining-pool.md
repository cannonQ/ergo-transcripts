---
title: Creating an Ergo mining pool
description: 'ErgoForum discussion: Creating an Ergo mining pool'
tags:
- addresses
- box
- collateral
- difficulty-adjustment
- ergoforum
- ergoscript
- ergoscript-context
- native-tokens
- singleton-/-state-nft
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/creating-an-ergo-mining-pool/42
created: '2019-07-16'
last_activity: '2019-12-20'
posts_count: 10
views: 9442
likes: 15
glossary_hits:
- Addresses
- Box
- Collateral
- Difficulty adjustment
- ErgoScript
- ErgoScript context
- Native tokens
- Singleton / State NFT
- Transaction
---

# Creating an Ergo mining pool

> **Forum thread:** [https://ergoforum.org/t/creating-an-ergo-mining-pool/42](https://ergoforum.org/t/creating-an-ergo-mining-pool/42)
> **Category:** Uncategorized | **Created:** 2019-07-16 | **Posts:** 10 | **Views:** 9442

**Related concepts:** Addresses, Box, Collateral, Difficulty adjustment, ErgoScript, ErgoScript context, Native tokens, Singleton / State NFT, Transaction

---

### Post #1 — @scalahub (2019-07-16)

I want to propose the following idea for creating a mining pool in Ergo.  
For starters, we consider a centralized pool like in Bitcoin, which collects shares and pays to miners based on how many shares they submitted. The pool has a fixed address.

Each miner creates blocks with at least two transactions as follows:

* One transaction paying the reward (67.5 Ergs) to any address of choice.
* One transaction paying 65 Ergs to the pool address. (pool transaction)

A share is valid if it is created for a block with the above structure.

Miners submit such shares to the pool. In the basic version, the entire block is submitted as a share.  
The pool then distributes the rewards received on the pool address as per the shares submitted.

Some thoughts/improvements:

* Instead of sending entire blocks, the miner can send header and the pool transaction along with a proof of inclusion of that transaction.
* The miner makes 2.5 Ergs for each block in addition to the reward for shares submitted. This will be an incentive for the miner to join the pool.
* The miner must have 65 Ergs ready to spend for each block mined, while the mined rewards become spendable only after 720 blocks. To overcome this drawback, the pool can incentivize miners more by reducing the amount for the pool transaction to make it more lucrative, say by making it only 60 Ergs. (the actual number should be based on the economics of pool operation)
* Another improvement would be to make the rewards mechanism also decentralized. Currently, only the block header generation is decentralized.

Would appreciate some feedback and improvements on this as well as more proposals for pooled mining.

---

### Post #2 — @kushti (2019-07-17)

Dear scalahub, some notes and questions of mine:

1. Efficient proof of membership for a transaction is possible, as the block header is committing to the Merkle tree of transactions within the block
2. What is a contract behind the pool transaction?

---

### Post #3 — @scalahub (2019-07-21)

Hi kushti,

Thanks for reviewing it. Let me first add some more details before going to your response.  
Ideally, we would keep the reward output and the pool output of the same amount. I think even such a system will work because of the benefits of regular income in pools.

Since a miner must have enough ergs already to cover the pool output, this could be a deterrent for new miners. To avoid this, we can follow two approaches.

1. The first is to give miner an extra amount of ergs (say 2.5) if a block is found, which could cover any interest on loans to start mining (see next point).
2. For helping new miners, a loan system could be created. Lenders create “loan boxes” to be used in a pool output by a borrower, with the promise that after 720 blocks the loan is paid back with the extra amount (from Point 1).  
   If will be useful if the reward transaction can have additional inputs and outputs (apart from the emission and reward boxes), to help create some pooling/loan contracts. Is this possible?

Coming back to your comments:

1. What would be the minimum size of data to be sent to a centralized pool to verify that it defines a valid share? A few kb’s per share is manageable.
2. Pool transaction would probably be best done using a singleton token box that must be spent and recreated for it to be a valid share. In the centralized model, the contract of this token box could be something like:  
   `(poolOperatorPubKey || out.value == SELF.value + 65) &&`  
   `out.propositionBytes == SELF.propositionBytes && outContainsToken`  
   The `outContainsToken` is a statement that `out` contains the singleton pool token.

If will be useful to extend the above to a decentralized system like P2Pool. Hopefully, others will be able to add to the discussion.

---

### Post #4 — @kushti (2019-07-22)

So It seems that a miner needs to put a pledge of 65 Ergs in order to mine within a pool (which could be named just as “association” actually) and then gets 67.5 Ergs of block rewards with no conditions. Thus the scheme is not exactly Pay-Per-Share, but Pay-Per-Share + 2.5 Ergs per block.

“What would be the minimum size of data to be sent to a centralized pool to verify that it defines a valid share? A few kb’s per share is manageable.” - I imagine even for 1,000 transactions in a block, the proof would be of 32 \* 10 (Merkle Proof) + transaction of 300-400 bytes + block header of ~200 bytes, so no more than 1 kb, which is definitely manageable.

---

### Post #5 — @scalahub (2019-07-26)

There is an attack that we need to solve before this becomes pratical:

How to protect the transaction paying the mining pool? Since once the transaction becomes public, anyone else can broadcast it and miner will lose the ergs. Looking for suggestions on how to prevent it.

One solution seems to guard the pool funding input using a script that fixes the miner public key:

```ergoscript
minerPubKey == <myPubKey>
```

We can make it more usable by allowing to withdraw the funds as well:

```ergoscript
minerPubKey == <myPubKey> || <myPubKey>
```

---

### Post #6 — @kushti (2019-07-27)

Yes, so miner is creating a box which is protected by "MinerPubKey == || ", and then he’s mining a block which transfers money from the box into another one paying to the “poolPubKey”. A share should contain a proof of membership for the transaction.

---

### Post #7 — @scalahub (2019-08-12)

So, in summary, the following approach for a mining pool would work:

1. Every share of Alice should correspond to a block that includes a pool transaction that pays some fixed amount (67.5 or some slightly lower) to the pool address.
2. The reward will be paid to some public key chosen by Alice. say, `alice`.
3. The pool transaction must be funded from a box (i.e., UTXO) protected by the script  
   `minerPubKey == alice|proveDLog(alice)`.

---

### Post #8 — @scalahub (2019-09-05)

Assume Alice is mining in the pool.

We can use an idea similar to the “[fee emission box for mixing](https://www.ergoforum.org/t/paying-fee-in-ergomix-in-primary-tokens/73)” to create a token-based mining pool solution by extending the above idea. This allows Alice to join the pool without having any Ergs to start with.

Someone, (say Bob) is willing to loan the Ergs to Alice in exchange for collateral in Bitcoin

Bob will create an “emission box” containing several Ergs. The box will contain a script allowing the Ergs to be exchanged with some token designated by Bob at the rate of 1 Ergs per token.

Bob will sell these tokens separately, which Alice will buy using Bitcoin.  
She will store these tokens in a box protected by the script “minerPubKey == alice” to protect against the broadcast attack discussed above.

When mining, Alice will spend this token box along with Bob’s emission box, exchanging the tokens  
for the Ergs to go in the pool transaction.

Since we would like Alice to be able to get back her Bitcoins at a later date, as long as she pays back Bob the loan, we can make a provision for the tokens to be purchased back by Alice after the reward becomes spendable. She can then exchange the tokens back for Bitcoins.

---

### Post #9 — @kushti (2019-12-20)

And concrete scheme how to implement a pool with collaterals:

"This code shows how to do a client checking a Merkle-tree based membership proof against an incomplete header (so header without a proof-of-work solution). This could be useful for a decentralized pool with collaterals, where the pool checks shares from miners, and a share includes proof that a corresponding block contains a certain transaction (paying to the pool).

For example, an implementation for a decentralized pool could be as follows:  
1. A miner is creating a transaction which is paying to the pool  
(posting of the tx by the pool outside the block should be impossible)  
2. The miner is creating block candidate with the tx included (via calling “mining/candidateWithTxs”).  
The result would be like the following:  
{  
“msg” : “6cb37d0a202bc2984f43de003cbc5558804db45798d0fc8faae7390b96d42d15”,  
“b” : 748014723576678314041035877227113663879264849498014394977645987,  
“pk” : “0278011ec0cf5feb92d61adb51dcb75876627ace6fd9446ab4cabc5313ab7b39a7”,  
“proof” : {  
“msgPreimage” : “01fb9e35f8a73c128b73e8fde5c108228060d68f11a69359ee0fb9bfd84e7ecde6d19957ccbbe75b075b3baf1cac6126b6e80b5770258f4cec29fbde92337faeec74c851610658a40f5ae74aa3a4babd5751bd827a6ccc1fe069468ef487cb90a8c452f6f90ab0b6c818f19b5d17befd85de199d533893a359eb25e7804c8b5d7514d784c8e0e52dabae6e89a9d6ed9c84388b228e7cdee09462488c636a87931d656eb8b40f82a507008ccacbee05000000”,  
“txProofs” : [{  
“leaf” : “642c15c62553edd8fd9af9a6f754f3c7a6c03faacd0c9b9d5b7d11052c6c6fe8”,  
“levels” : [  
“0139b79af823a92aa72ced2c6d9e7f7f4687de5b5af7fab0ad205d3e54bda3f3ae”  
]}]}}

3. The miner is mining the block using “msg”, “b”, “pk” as it happens now. If block is found, the miner is posting the transaction to the network. However, if real difficulty of the solution is not enough to form a block but enough for a share, then the miner can post the share to the pool. The share consists of “msg”, “b”, “pk”, solution and the “proof”.
4. The pool checks that the share is valid. In particular, the pool checks that:

   a) the “msgPreimage” (which is a header without a PoW solution) along with the PoW form a valid header with enough difficulty  
   b) the header contains transaction by using “proof”

---

### Post #10 — @kushti (2019-12-20)

Another interesting question is how to create decentralized and efficient pool like P2Pool or SmartPool for Ergo (these two pools are not efficient).
