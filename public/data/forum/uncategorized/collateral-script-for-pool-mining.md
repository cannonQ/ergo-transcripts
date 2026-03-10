---
title: Collateral script for pool mining
description: 'ErgoForum discussion: Collateral script for pool mining'
tags:
- addresses
- box
- collateral
- ergoforum
- ergoscript
- ergoscript-context
- multi-stage-contracts
- native-tokens
- sigma-protocols
- singleton-/-state-nft
- storage-rent
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/collateral-script-for-pool-mining/200
created: '2020-04-16'
last_activity: '2021-06-10'
posts_count: 11
views: 1843
likes: 9
glossary_hits:
- Addresses
- Box
- Collateral
- ErgoScript
- ErgoScript context
- Multi-stage contracts
- Native tokens
- Sigma protocols
- Singleton / State NFT
- Storage rent
- Transaction
---

# Collateral script for pool mining

> **Forum thread:** [https://ergoforum.org/t/collateral-script-for-pool-mining/200](https://ergoforum.org/t/collateral-script-for-pool-mining/200)
> **Category:** Uncategorized | **Created:** 2020-04-16 | **Posts:** 11 | **Views:** 1843

**Related concepts:** Addresses, Box, Collateral, ErgoScript, ErgoScript context, Multi-stage contracts, Native tokens, Sigma protocols, Singleton / State NFT, Storage rent, Transaction

---

### Post #1 — @jasondavies (2020-04-16)

As some of you know, I’ve been working on my own collateral-based mining pool. This will just be another option along with [@mhs\_sam](/u/mhs_sam)’s pool. I thought I would post my collateral box script here for public review, in case I’ve missed any obvious issues:

```ergoscript
{
  val poolReward = 67500000000L
  {
    // Case 1: block was mined by alice.
    // Either: (a) we have 1 output of value poolReward,
    // or: (b) we have 2 outputs, 1st is poolReward, 2nd goes to self.
    decodePoint(CONTEXT.minerPubKey) == alice &&
    HEIGHT > SELF.creationInfo._1 &&
    OUTPUTS(0).value == poolReward && {
      OUTPUTS.size == 1 || {
        OUTPUTS.size == 2 &&
        OUTPUTS(1).propositionBytes == SELF.propositionBytes &&
        OUTPUTS(1).creationInfo._1 == HEIGHT
      }
    }
  } || {
    // Case 2: anyone can top-up with more collateral funds.
    OUTPUTS(0).propositionBytes == SELF.propositionBytes &&
    OUTPUTS(0).creationInfo._1 >= SELF.creationInfo._1 &&
    OUTPUTS(0).value > SELF.value
  } || {
    // Case 3: alice can withdraw collateral at any time.
    proveDlog(alice)
  }
}
```

*Edit: fixed a bug that would have allowed chained spends in a single block.*

The main limitation of this approach is that only one unspent collateral box should exist at any time for a given miner public key, otherwise a pool can spend more than one box in the same block and claim a multiple of the reward. However, I think this is reasonable and it becomes too complex if miners have to create special signatures to avoid this. The top-up mechanism (case 2) allows anyone to top-up a given collateral box.

Another small point is that the pool reward could be adjusted to be a bit under 67.5 ERG to provide additional incentives, though I would note that the miner already gets to keep all the fees if they mine a block.

This collateral mechanism was proposed here by [@scalahub](/u/scalahub) back in July 2019!

![](https://avatars.discourse-cdn.com/v4/letter/s/838e76/48.png)
[Creating an Ergo mining pool](https://www.ergoforum.org/t/creating-an-ergo-mining-pool/42) [Pools](/c/mining/mining-pools/26)

> I want to propose the following idea for creating a mining pool in Ergo.
> For starters, we consider a centralized pool like in Bitcoin, which collects shares and pays to miners based on how many shares they submitted. The pool has a fixed address.
> Each miner creates blocks with at least two transactions as follows:
> One transaction paying the reward (67.5 Ergs) to any address of choice.
> One transaction paying 65 Ergs to the pool address. (pool transaction)
> A share is valid if it is created fo…

The paper by [@kushti](/u/kushti) and [@scalahub](/u/scalahub) is [here](https://eprint.iacr.org/2020/044).

---

### Post #2 — @jasondavies (2020-04-16)

One additional note: it might seem that (case 2) is unnecessary, since alice can spend their own collateral box to itself whenever they want. However, the case allows *anyone* to top up the collateral box, including the pool.

For simplicity, my pool will automatically send all pool payments to each user’s collateral. They can withdraw all or part of the collateral at any point, and this means they don’t have to keep remembering to top it up manually.

---

### Post #3 — @jasondavies (2020-04-16)

Update: I found a flaw! Thanks to a discussion with [@robert](/u/robert) for helping me realise this. The above script doesn’t prevent a chain of transactions that repeatedly spend the collateral box in the same block. We need to enforce a constraint on height to ensure that it strictly increases every time the box is spent.

```ergoscript
HEIGHT > SELF.creationInfo._1
```

---

### Post #4 — @jasondavies (2020-04-16)

Someone can correct me if I’m wrong, but I think the “creation height” for a given box is specified by the creator of that box, and this is not necessarily the height of the block in which it is a mined. So an additional constraint is required to enforce a correct “creation height” to prevent chained spends.

---

### Post #5 — @kushti (2020-04-20)

The top-up part is interesting addition to initial versions of the script!

on “creation height”, it is specified by the creator indeed, what’s checked by the protocol is that creationHeight <= HEIGHT . Creation height is used in storage rent.

To solve the problem of chained transactions, you can store HEIGHT of last pool-withdrawal or top-up operation in R4, and then check that HEIGHT > SELF.R4, or require for ```  
OUTPUTS(1).creationInfo.\_1 == HEIGHT. However, please note that the check is needed for both the pool-withdrawal and top-up cases, as otherwise an attacker can insert top-up operation (w small amount) in order to clear R4 or “creationHeight”, thus creating chained pool-withdrawal -> top-up -> pool-withdrawal -> … operations .

---

### Post #6 — @jasondavies (2020-04-20)

I think the current script should protect against chaining (multiple spends in one block):

1. When the pool claims a reward, the input box must have been created in a previous block `HEIGHT > SELF.creationInfo._1`, and the output box with remainder (change) must have `OUTPUTS(1).creationInfo._1 == HEIGHT`.
2. In the top-up case, we don’t really mind if somebody chains these in a single block, as long as the height is never reduced, `OUTPUTS(0).creationInfo._1 >= SELF.creationInfo._1`.

Am I missing something?

---

### Post #7 — @kushti (2020-04-20)

Oh you’re right, I missed the `OUTPUTS(0).creationInfo._1 >= SELF.creationInfo._1` check

---

### Post #8 — @jasondavies (2020-04-23)

I thought of a way to prevent a pool from taking a multiple of its reward in the case where a user has inadvertently created more than one collateral box. The problem with multiple collateral boxes for the same `minerPubKey` is that they can be spent in parallel transactions by the pool, since the only condition for spending them is that the block was mined by the specified `minerPubKey`.

Note that we already prevent “chained” transactions, so we just need a way to prevent “parallel” transactions, i.e. transactions that do not depend on each other.

The solution is to introduce a singleton token (a token with a value of 1) and require that one of the inputs contains this token when collecting the pool reward. A “perpetual” token would be ideal for this purpose:

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/jasondavies/48/17_2.png)
[A perpetual token](https://www.ergoforum.org/t/a-perpetual-token/205) [Research and Development](/c/dev/research-and-development/7)

> In other words, a token which is guaranteed to exist forever, unless it gets garbage-collected!
> {
> val isPerpetual = {(b: Box) =>
> b.propositionBytes == SELF.propositionBytes && b.tokens == SELF.tokens
> }
> sigmaProp(OUTPUTS.exists(isPerpetual))
> }
> (Actually, this is a perpetual collection of tokens (possibly of size zero). But if you protect a singleton token with this script, then it guarantees the token will never be destroyed other than by garbage collection.)

---

### Post #9 — @thegeologist (2021-06-04)

Wanted to share this recent interest in smart contract mining pools from reddit. Would be great for someone knowledgeable to chime in on discussion, and I have directed the user to this forum.

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a70ab5d077374748901898cfcd9c7a09b8a303a9.png)
[reddit](https://www.reddit.com/r/ergonauts/comments/nqn96n/why_are_mining_pools_preferable_to_smart_contract/)

### [r/ergonauts - Why are Mining Pools preferable to Smart Contract Pools?](https://www.reddit.com/r/ergonauts/comments/nqn96n/why_are_mining_pools_preferable_to_smart_contract/)

35 votes and 5 comments so far on Reddit

---

### Post #10 — @WilfordGrimley (2021-06-10)

Oh hey, that is my post!

I am trying to learn as much as I can and build something functional for the Hackathon right now. I have an entry and am researching hard. The project is very much in infancy, as I am unsure of a lot of ErgoScript but in theory it should all be possible.

Here is my [overview on GitHub](https://github.com/WilfordGrimley/ErgoSmartPools). (no code yet.)

My thinking is that by making crowdfunding an option for pool creation, and automating pool creation with a saturation function participants can have very clear economic incentive to provide actual SECURITY to the network rather than just hoping on the biggest pool and creating a bunch of risk.

---

### Post #11 — @WilfordGrimley (2021-06-10)

If any of you want to join the official team for the hackathon join the ErgoPlatform discord and I’ll invite you. Registration ends tonight I believe. I am very very happy to share any potential rewards ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=9 ":slight_smile:")
