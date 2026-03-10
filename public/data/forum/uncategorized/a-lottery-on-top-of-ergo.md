---
title: A lottery on top of Ergo
description: 'ErgoForum discussion: A lottery on top of Ergo'
tags:
- box
- difficulty-adjustment
- ergoforum
- ergoscript
- full-node
- native-tokens
- nipopow
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/a-lottery-on-top-of-ergo/137
created: '2019-11-27'
last_activity: '2021-08-18'
posts_count: 6
views: 1837
likes: 19
glossary_hits:
- Box
- Difficulty adjustment
- ErgoScript
- Full node
- Native tokens
- NiPoPoW
---

# A lottery on top of Ergo

> **Forum thread:** [https://ergoforum.org/t/a-lottery-on-top-of-ergo/137](https://ergoforum.org/t/a-lottery-on-top-of-ergo/137)
> **Category:** Uncategorized | **Created:** 2019-11-27 | **Posts:** 6 | **Views:** 1837

**Related concepts:** Box, Difficulty adjustment, ErgoScript, Full node, Native tokens, NiPoPoW

---

### Post #1 — @scalahub (2019-11-27)

**First some background**

The idea in this post is motivated from the post about [Proof-of-Activity as a Smart Contract](https://www.ergoforum.org/t/proof-of-activity-as-a-smart-contract/132).

The goal of “proof of activity” is to reward members for their “activity” (i.e., for running a full node).  
Without going into details, the approach essentially is based on “proof-of-stake” such that people who are active receive larger rewards than inactive people holding similar stake. The purpose is to discourage people having stake but not actively participating in the network.

The key method behind all proof of stake and proof of activity is *follow-the-satoshi*, which picks a random satoshi from all the generated ones and then the holder of that satoshi is eligible for the reward. If the satoshi is selected unformly then this is similar to a lottery system.

**The Lottery**

The goal of this post is not to have a proof of stake or proof of activity. Rather it is about emulating the follow-the-satoshi protocol to have a provably fair lottery system.

The lottery that we will create emulates the following physical lottery:

1. Company generates lottery tickets in sequential serial numbers
2. There is only one place to buy the tickets
3. Tickets can only be purchased in sequential serial numbers using the “next available serial number” rule, (starting from serial number 0).
4. After the lottery is closed (so that no more tickets can be sold), the first unsold serial number ***n*** is noted.
5. A random number ***r*** is generated between 0 and ***n***-1 (both inclusive).
6. The holder of ticket with serial number ***r*** is the winner.

We can emulate this with Ergo as follows.

The lottery owner creates a “lottery box” containing tokens and the current available serial number in **R4**. This is protected by a script that sells tokens and the balance tokens are kept in an identical box with the serial number appropriately incremented. Furthermore the purchased tokens are to be kept in a “purchase box” box containing in **R4** and **R5** respectively, the start and end serial numbers of purchased tokens. We additionally require the script in the purchase box to “lock” these values, so they cannot be altered by the buyer.

After the lottery ends, the last serial number ***n***is stored in **R4** of the lottery box. Using this, winner is decided using, say taking randomness from the previous block header to generate a number uniformly between 0 and ***n*** to decide the winner. The winner can use his purchase box to take the rewards.

The rewards can be stored in the lottery box itself and each ticket purchased contributes to the reward.

While this works in a fair way, it is not deterministic as it depends on the last block header.

Since each “previous block” decides a different winner for the same ***n***, this also can be used as a proof of activity because the current winner must be onlline.

---

### Post #2 — @robert (2019-11-28)

Nice, good to see work being developed off of previous ideas.

One issue with this however is that using the previous block to determine randomness is liable to “stake grinding” attacks in PoS systems, which is why they typically avoid doing so. As in, the block producer of block n-1 can figure out how to deterministically create his block in order to increase his chances of being selected.

Obviously in our PoW example, this is a bit harder, as someone who is in the lottery would have to expend more resources (ex. rent a ton of hashing power) in the 2 minute period of block n-1 in order to be become the block producer, but given enough money on the line in the lotteries, this probably isn’t that pricey or hard of an attack theoretically.

In order to mend this (this idea just came to me so bare with me if there’s some obvious major fault), maybe we can take advantage of the fact that we are in essence shoving PoS with PoW together, and take some inspiration from NiPoPoWs.

In NiPoPoWs, we have the concept of superblocks, where we look for blocks that have substantially greater difficulty than required which are used to generate proofs. Instead, for our given usecase, we can look at the difficulty of block n-1 and use it as a standard to find other “nearblocks” (as in blocks in the past that have a level of difficulty that is within a certain margin) and construct a list of all (or say a predefined number n of blocks, say 10) of these nearblocks which then can be used to deterministically generate randomness.

Why would this be less liable to attacks? The requirement of having to construct not just 1 block, but n blocks in the past as well (how many nearblocks you set) means it costs n times more to try and gain an advantage just to start. Furthermore, every single block you produce must have a difficulty within a certain margin in order for it to be part of the “nearblock chain”, which isn’t very easy meaning the attacker has to put sufficient resources behind it to attempt to create all n nearblock before the auction ends. On top of this others may generate nearblocks, which then ruins the ability for the attacker in being able to deterministically effect the randomness in his/her favour.

Lastly, even if the attacker has a long period of time (ex. weeks) to set up all the nearblocks for the auction (and no one else generated a near-block), the attacker must be the individual who produces block n-1 before the auction ends. What this means is that significant computing power must be thrown at producing the final nearblock in n-1 from auction end block, and this nearblock must be produced and submitted before anyone else gets a chance to submit their own block, thus limiting the attacker to an on average 2 minute period to do so with all the sunk costs to lose if someone submits a block before the attacker does.

Now I’ll admit, this may be a bit over the top for simple auctions (probably not efficient/may be quite costly to encode if possible at all in ErgoScript?), but I think something like this can be used in general on top of PoW blockchains to generate deterministic randomness that from an economic/game theoretical perspective, may be reasonably secure and very hard to game (as it should be pretty easy to detect when a block producer is building a nearblock chain + anyone can also “counter-attack” a planning attacker by creating their own nearblocks which ruin the attackers pre-structured “nearblock chain”).

Anyways, the thought just came to me since we were talking about NiPoPoWs a couple days back with the email/offline idea, and the idea of using block difficulty in various ways seemed kind of novel and interesting. I don’t have too much time to think this over right this moment, but I think I’ve articulated my thought well enough for others to poke holes into, so please do so.

---

### Post #3 — @kushti (2019-12-18)

There is a good paper [PW18] showing how an adversarial miner can manipulate blockchain entropy.

In Ergo, 10 last block headers available in execution context, and it is better to use not the latest block but a deepest one available, and mix randomness from it with a randomness committed to before (e.g. by a lottery organizer) . Still could be gamed by a miner with significant share of mining power though.

PW18: <https://hal.archives-ouvertes.fr/hal-01364045/file/paper.pdf>

---

### Post #4 — @tanbeige (2021-06-09)

Is it possible to create a random number generator oracle and use this to supply the random number to select the winner? We just need some number to mod by n-1.

---

### Post #5 — @scalahub (2021-08-10)

Could the following strategy work?

Let an “n-superblock” be a block with n extra zeros.  
Once the lottery is over and it’s time to decide a winner, the first 16-superblock is used to generate the randomness.

Most likely the above won’t be supported in Ergo, so the following variant may work:

Once the lottery is over and at least 10 blocks have been mined, we can decide the randomness using the first 16-superblock in the last 10 headers.

I used the value 16; we can use higher.

---

### Post #6 — @kushti (2021-08-18)

I guess 16-superblock can be used I guess, a contract would be heavy though.
