---
title: Running a business on top of ERGO
description: 'ErgoForum discussion: Running a business on top of ERGO'
tags:
- box
- data-input
- ergoforum
- ergomixer
- ergoscript
- ergoscript-context
- native-tokens
- sigma-protocols
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/running-a-business-on-top-of-ergo/423
created: '2020-10-13'
last_activity: '2020-12-27'
posts_count: 4
views: 1014
likes: 9
glossary_hits:
- Box
- Data input
- ErgoMixer
- ErgoScript
- ErgoScript context
- Native tokens
- Sigma protocols
---

# Running a business on top of ERGO

> **Forum thread:** [https://ergoforum.org/t/running-a-business-on-top-of-ergo/423](https://ergoforum.org/t/running-a-business-on-top-of-ergo/423)
> **Category:** Uncategorized | **Created:** 2020-10-13 | **Posts:** 4 | **Views:** 1014

**Related concepts:** Box, Data input, ErgoMixer, ErgoScript, ErgoScript context, Native tokens, Sigma protocols

---

### Post #1 — @anon_real (2020-10-13)

Hi community,

We know that ErgoMixer is already making some small profits in a decentralized manner. The aim of this topic is to introduce a raw idea about having a generalized form of running a business on top of ERGO.  
As I said, this is certainly a raw idea and I’m unaware if there is already some well-defined approach for this.

Let’s suppose a business is going to have `N` shares and hence `M <= N` shareholders. The business is making some profits (just like ErgoMixer), the aim is to have an approach to distribute this profit among shareholders in a decentralized manner.

## TLDR;

The business will issue a token with the quantity of `N` representing shares.  
Also, we need a data input in which it is specified that who are the current shareholders, the proportion of profit distribution, and possibly some other parameters specifying fee params! When having such data input, the business’s contract that is in charge of getting fees from its users can use that data input and enforce the proper profit distribution.

## Data input contract

The contract is minimal to just show the idea. It certainly also needs some other logic.

```ergoscript
{
  val curLocked = SELF.R4[Coll[Coll[Byte]]].get // ids of boxes locking shares
  val selfCp = OUTPUTS(0)
  val nextLocked = selfCp.R5[Coll[Coll[Byte]]].get

  val lockLogic = { // one wishes to lock his shares to receive his profit proportionately
    val lockingBox = OUTPUTS(1)
    val nextLockedLogic = nextLocked.size == curLocked.size + 1 && nextLocked.slice(0, nextLocked.size - 1) == curLocked &&
      nextLocked(nextLocked.size - 1) == lockingBox.id // box id of the locking box must be added and others untouched

    INPUTS.size == 2 && INPUTS(0).id == SELF.id && blake2b256(INPUTS(1).propositionBytes) != lockHash &&
        lockingBox.tokens(0)._1 == businessTokenId && blake2b256(lockingBox.propositionBytes) == lockHash &&
        lockingBox.R5[Coll[Byte]].get == blake2b256(SELF.propositionBytes) && nextLockedLogic
  }

  val unlockLogic = { // one wishes to unlock his shares for any reason, for example to sell them
    val nextLockedLogic = nextLocked.size == curLocked.size - 1 &&
      nextLocked == curLocked.filter({(id: Coll[Byte]) => id != INPUTS(1).id}) // box id must be removed

    INPUTS.size == 2 && INPUTS(0).id == SELF.id && blake2b256(INPUTS(1).propositionBytes) == lockHash && nextLockedLogic
  }

  sigmaProp(lockLogic || unlockLogic) // needs other logic of course like selfCp must have the same value, tokens, etc.
}
```

The idea is for the shareholders to lock their tokens (shares) to receive profit. We will see the locking contract soon but when they do so, id of the box that locks their tokens is added to the data input. So now the contract in charge of getting fees from users can use this data input and enforce the usage of all locking boxes as its other data inputs and distribute the profit proportionately!  
As it is obvious in the contract, there is also an unlocking logic that lets shareholders to unlock their tokens for any reason, probably to sell them!

## Locking contract

```ergoscript
{
  val sharesOwner = SELF.R4[GroupElement].get
  val dataInputHash = SELF.R5[Coll[Byte]].get
  proveDlog(sharesOwner) && sigmaProp(blake2b256(INPUTS(0).propositionBytes) == dataInputHash)
}
```

The box that is locking shares will have PK of its owner in R4 to specify who can spend it and also where the profit must go to. Also in R5, the hash of the data input contract is placed so that the only way to spend the box is to include the data input as the first input, hence enforcing the removal of box id from the data input box. Also, of course, the amount of shares is identifiable with the token quantity in the assets of the box.

So in summary with these two contracts, there is an approach to identify the shareholders and distribute the profit to them. Also, they have the chance to unlock their shares and sell/auction them without causing any trouble for the business and other shareholders.  
Some other things are needed, for example, the data input itself must contain an NFT to be distinguishable from fake ones!

---

### Post #2 — @robert (2020-10-14)

Very cool [@anon\_real](/u/anon_real). Great work. This is also a generalized approach to rewarding users of a protocol who have staked a given token, whether that is with fees, or with other tokens as a reward as well.

Just a heads up for clarity, a NFT(non-fungible token) means a token which has been generated with a total amount == 1 (meaning it is non fungible because it is entirely unique with only 1 in existence). Thus shares in your above protocol are tokens, but not NFTs.

---

### Post #3 — @anon_real (2020-10-14)

[@robert](/u/robert) Thanks for the heads up. Updated the post!

---

### Post #4 — @anon_real (2020-12-27)

Just some thoughts:  
For use cases where holding share tokens for a specific amount of time is not important, distribution can be made a lot easier.  
Basically, in order to distribute profits, it is possible to design a contract that makes sure the profit will be distributed properly (proportional to the number of share tokens a person has) to the current token holders. So there is no need to lock tokens and the fact that someone is storing the share tokens in her wallet is enough for her to receive her profit!  
So one just holds her share tokens in her wallet and receives her share of profits in the same wallet!
