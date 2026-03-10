---
title: ErgoScript Design patterns
description: 'ErgoForum discussion: ErgoScript Design patterns'
tags:
- addresses
- appkit
- auction-house
- bootstrapping
- box
- collateral
- context-extension
- ergo-playgrounds
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- eutxo
- native-tokens
- registers
- sigma-protocols
- singleton-/-state-nft
- stealth-addresses
- storage-rent
- token-id-rule
- transaction
- uncategorized
- zerojoin
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergoscript-design-patterns/222
created: '2020-05-20'
last_activity: '2023-07-04'
posts_count: 24
views: 5743
likes: 65
glossary_hits:
- Addresses
- AppKit
- Auction House
- Bootstrapping
- Box
- Collateral
- Context extension
- Ergo Playgrounds
- ErgoScript
- ErgoScript context
- ErgoTree
- Native tokens
- Registers
- Sigma protocols
- Singleton / State NFT
- Stealth Addresses
- Storage rent
- Token ID rule
- Transaction
- ZeroJoin
- eUTXO
---

# ErgoScript Design patterns

> **Forum thread:** [https://ergoforum.org/t/ergoscript-design-patterns/222](https://ergoforum.org/t/ergoscript-design-patterns/222)
> **Category:** Uncategorized | **Created:** 2020-05-20 | **Posts:** 24 | **Views:** 5743

**Related concepts:** Addresses, AppKit, Auction House, Bootstrapping, Box, Collateral, Context extension, Ergo Playgrounds, ErgoScript, ErgoScript context, ErgoTree, Native tokens, Registers, Sigma protocols, Singleton / State NFT, Stealth Addresses, Storage rent, Token ID rule, Transaction, ZeroJoin, eUTXO

---

### Post #1 — @scalahub (2020-05-20)

Based on the recent posts, I thought I’d start this thread listing the common design patterns we have seen in ErgoScript use-cases.

1. Singleton Token: Essentially a token which exists as a singleton (i.e., when token was issued in quantity one). The box in which token is stored can have other sophisticated scripts (see below).
2. Perpetual Token: This is a singleton token that cannot be destroyed (i.e., the box in which it is stored has a script that requires the spending transaction to output a box with identical contents). This is described in the post [“A perpetual token”](https://www.ergoforum.org/t/a-perpetual-token/205/10).
3. One-use-per-block Token: This is a perpetual token that can be spent at most once per block. In other words, the box containing this token must have at least one confirmation to be spent. This is described by [@jasondavies](/u/jasondavies) in [this blog post](https://blog.plutomonkey.com/2020/05/collateral-based-pool-for-ergo/).
4. Cyclic References: This is when **ScriptA** requires an output box to be protected by some guard **ScriptB**, and **ScriptB** requires an output box to be protected by **ScriptA**. The solution is discussed in [this forum post](https://www.ergoforum.org/t/a-perpetual-token/205/9).
5. Prove that a certain unspent box exists: This is done by including that box as data-input to a transaction.
6. Prove that out of two boxes, the other one has been spent. This is a special type of non-existence proof that can be done via tokens as explained in the paragraph “Identifying the second spender” in Section 4.4 of [the ZeroJoin paper](https://eprint.iacr.org/2020/560.pdf).
7. Requiring that the tx can only be mined by a particular user (Alice): This is done by adding the condition `minerPubKey == alice`, as discussed in [this post](https://www.ergoforum.org/t/creating-an-ergo-mining-pool/42/5). The credit for discovering the attack (for which this pattern was created) goes to one of the core Ergo developers (unfortunately, I cannot remember who and those logs are lost in #Slack somewhere).
8. Requiring that the transaction cannot be mined after a certain deadline has passed. The script contains the additional clause that `HEIGHT < getVar[Int](1).get`, which ensures that the transaction cannot be mined if the block height crosses the value in the first context variable (provided by the spender). This is quite a simple pattern but quite useful, and first appeared in the Advanced ErgoScript Tutorial, Section 2.1.
9. Generalizing above pattern, instead of hard-wiring the condition `HEIGHT < getVar[Int](1).get`, we could specify this (and any other) script at run-time, as described in [this thread](https://www.ergoforum.org/t/attaching-arbitrary-conditions-to-unconfirmed-transactions/214).

In case I have missed crediting anyone, please mention and I’ll update the post.

I have definitely missed many other interesting patterns currently known, and surely there are many more to be discovered. Hopefully others will add to the list (and I’ll update the OP).

---

### Post #2 — @scalahub (2020-05-20)

One more useful pattern, and part of Ergo from day 1 is the “emission box” pattern, used in emitting mining rewards. All the ergs to be ever emitted are locked in the emission box, and mining rewards are taken by unlocking certain amount of ergs and keeping the balance in a new copy of the destroyed emission box.

The idea of emission boxes is quite general and need not be used only for rewards. For instance, it has been reused in the [“fee-emission” boxes in ErgoMix](https://www.ergoforum.org/t/paying-fee-in-ergomix-in-primary-tokens/73).

---

### Post #3 — @kushti (2020-05-26)

Very generic meta-pattern, I guess, is “check the work done externally, instead of doing it in the script”.

As a particular pattern example, let’s consider the sorting pattern. Assume that inputs contain e.g. DEX orders (or oracle data), and they are needed to be sorted in the script (for matching in case of DEX, or removing extreme values in case of oracles). Then, instead of doing sorting in the script (expensive), the script checks for inputs to be sorted.

---

### Post #4 — @robert (2020-05-27)

More so meta design-patterns which pertains to the blockchain context (storage rent), rather than just ErgoScript, but:

1. When bootstrapping a box/contract that is expected to live on-chain for a long duration of time, it makes sense to include an extra “buffer” of Erg held by the box in case it lasts longer than the storage-rent timer.
2. Including a spending path to all long-lasting contracts (or for example boxes intended to hold data indefinitely) which allows users to “top-up” Erg into the box to prevent it being garbage collected by storage-rent. This spending path stipulates that all data/tokens/script must be equivalent in a single new output box, but tx can include extra input boxes which only hold Erg and as a result increase the total Erg held by the newly created box (while at the same time refreshing the storage-rent timer for one iteration).

---

### Post #5 — @robert (2020-05-27)

Another design pattern that I think will be very common in Ergo’s model is parallelizing actions in separate UTXOs and collecting all of the data/tokens together as inputs in a tx which folds the data/tokens down into one (or potentially more depending on the protocol) box.

This is in contrast to having 1 box that holds data pertaining to a dApp/protocol which everyone must sequentially spend in order to add their piece of data to. Instead all users can create their own box with the data in the registers (which can happen parallelized in the same block or across multiple) and once all have posted, then an accumulation transaction can be created which consumes all of them and produces a final box that has all of the data/tokens.

This is in essence how [data accumulation pools](https://www.ergoforum.org/t/efficient-global-context-claims-accumulators-in-blockchains/211) work but this is a general design pattern that allows for building more efficient dApp protocols that have the potential to scale (and potentially just work better for certain use cases).

---

### Post #6 — @jasondavies (2020-05-27)

This is probably so well-known it doesn’t really warrant a note, but just in case, the commit/reveal pattern is useful for many contracts.

In the context of prizes for solving puzzles, e.g. in [Mathematical Fun with ErgoScript](https://www.ergoforum.org/t/mathematical-fun-with-ergoscript/76), it is best to require that a commitment to the solution is mined first before the solution is revealed. Without a commitment, revealing the solution in an unconfirmed transaction is vulnerable to theft because the solution can be copied into a new transaction, and the reward sent somewhere else, assuming it gets mined.

---

### Post #7 — @scalahub (2020-06-03)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/jasondavies/48/17_2.png) jasondavies:

> In the context of prizes for solving puzzles, e.g. in [Mathematical Fun with ErgoScript](https://www.ergoforum.org/t/mathematical-fun-with-ergoscript/76), it is best to require that a commitment to the solution is mined first before the solution is revealed. Without a commitment, revealing the solution in an unconfirmed transaction is vulnerable to theft because the solution can be copied into a new transaction, and the reward sent somewhere else, assuming it gets mined.

In other examples, Namecoin uses this to prevent “front-running” attacks, where someone picks a domain and a miner steals that. And “rock papers scissors” in Ethereum and Ergo also use this to prevent second player from cheating.

It may be well known but people still fail to take this into account (see Section 4.2 attached paper).  
Hence, good to explicitly list it out.

[eprint.iacr.org](https://eprint.iacr.org/2015/460.pdf)

### [460.pdf](https://eprint.iacr.org/2015/460.pdf)

422.27 KB

---

### Post #8 — @scalahub (2020-06-21)

Another useful design pattern (developed upon ideas proposed by [@robert](/u/robert)) is the following.

To check that some given box (not necessarily `SELF`) was created **after** a certain height `h`:  
Check that `box.creationHeight > h` (creation height is stored in in R3 and the protocol requires that `creationHeight` be <= actual height when the box is mined).

It seems more tricky to check that some given box was created **before** some height `h`. Probably there is some solution in ErgoScript which I have missed.

---

### Post #10 — @scalahub (2020-09-08)

Another useful design pattern is to emulate `executeFromVar` or `executeFromRegister` in ErgoScript.

Currently ErgoScript does not support the above two instructions but ErgoTree does.

`executeFromVar` allows the box spender to specify some arbitrary script in a context var that will be executed.

`executeFromRegister` allows the box creator to specify some arbitrary script in a register of that box, which will be executed later on when the box is spent.

In order to emulate this in ErgoScript until it is supported at a later time, we can use the following logic:

If a box is given as part of the INPUTS array, the script in it will be executed  
(Note: if a box is given as part of the DATA-INPUTS array, the script in it will not be executed)

Let us look at `executeFromRegister` for some given box B where we want to execute the script in R4. Instead of the script, this box will now contain a hash of the script for compactness.

The condition of the script in B will be

`blake2b256(INPUTS(1).propositonBytes)) == SELF.R4[Coll[Byte]].get`

---

### Post #11 — @jasondavies (2020-09-09)

Some contracts might have some kind of “daily withdrawal limit”. This is easily implemented by keeping track of the remaining limit within the current 24-hour period (which can be based on block height i.e. every 720 blocks). Once a new period starts, the limit can be reset.

---

### Post #12 — @scalahub (2020-10-08)

Emulating context variables using registers:

In some situations, context variables may not be possible (for example, currently Appkit does not support them). We can achieve the same thing by encoding the data in context variables in a register of one of the outputs. For example, suppose we have the code

`val x = getVar(0)[Int].get`

This can be emulated by creating a new output box (or reusing an existing one) at some index, say 1, and storing that data in its register R4. Then the above code can be replaced by

`val x = OUTPUTS(1).R4[Int].get`

---

### Post #13 — @robert (2020-10-10)

To back up [@scalahub](/u/scalahub)’s point, we now have an example in the “ErgoScript By Example” that shows how to do this. Originally the Pin Lock script used a context variable, but then was switched to using R4 of the output: <https://github.com/ergoplatform/ergoscript-by-example/blob/main/pinLockContract.md>

Now that we have the above repo, I was thinking that we could also try to make many of these design patterns more approachable for new devs by making them into full fledged examples and submitting them to the repo. It’s a bit more effort on each of our parts, but I think it’d really help this become the go-to repo for all devs, and even be a good reference for any EUTXO blockchain potentially as well.

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergoscript-by-example)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [ergoplatform/ergoscript-by-example](https://github.com/ergoplatform/ergoscript-by-example)

Learn ErgoScript by reading example smart contracts powered by Ergo Playground. - ergoplatform/ergoscript-by-example

---

### Post #14 — @jasondavies (2020-10-23)

**Ensuring that each box protected by a particular script has its own output**

This is important in cases where a box requires that some condition is present on a specific output. Now, if two such boxes are spent as inputs to the same transaction, without careful attention, the condition may hold for both input boxes on the *same* output. This can be exploited in cases where the condition is something like `output.value >= SELF.value`.

Preventing this class of attack can be done by ensuring that each output has a register containing a value which is unique to each input.

In the [single chain swap](https://github.com/ergoplatform/ergoscript-by-example/blob/main/singleChainSwap.md) example, this is done using:

```ergoscript
output.R4[Coll[Byte]].get == SELF.id
```

It would use less space to use the input box index, which is an integer and is unique for each input box, but note that `selfBoxIndex` is currently broken (it always returns `-1`):

`output.R4[Int] == selfBoxIndex`

A workaround is to use:

```ergoscript
val selfIndex = getVar(0)[Int].get

INPUTS(selfIndex).id == SELF.id &&
output.R4[Int] == selfIndex
```

Thanks to [@kushti](/u/kushti) for the workaround suggestion.

---

### Post #15 — @scalahub (2020-10-24)

A slightly more compact way to write the last suggestion is to avoid `getVar` altogether:

```ergoscript
INPUTS(output.R4[Int].get).id == SELF.id
```

---

### Post #16 — @anon_real (2020-11-19)

## Proving that a box is created by a particular PK

The only thing that needs to be done is to issue a token in a transaction and put it in the output in which you want to prove you have created, also put the `INPUTS(0).bytes` in one of its registers!  
Obviously, the token id is equal to the id of the first input of the transaction, hence a contract can make sure that the box is created by a particular person (in this case “9gAKe…”) by:

```ergoscript
{
  val prev = INPUTS(0).R4[Coll[Byte]].get
  sigmaProp(INPUTS(0).tokens(0).id == blake2b256(prev) &&
    bytesToBox(prev).propositionBytes == PK("9gAKeRu1W4Dh6adWXnnYmfqjCTnxnSMtym2LPPMPErCkusCd6F3").propBytes)
}
```

`bytesToBox` is not a real function, please let me know the correct way to get `Box` from its serialized bytes (`box.bytes`).

The above does not necessarily make sure that `INPUTS(0)` is actually created by “9gAKe…” but makes sure that “9gAKe…” has participated in the chain of transactions leading to here!

The very use case that came to my mind and made me think about such a thing is for a particular person to give permission for some operation by following this design pattern (for example giving permission for spending some box to the assembler service), hence outsourcing it.  
In other words, in a well-designed system in which it doesn’t allow the token to get in the hands of an attacker, we can assume that the person is giving permission for some predefined operation because no one but her could have created such a box!

---

### Post #17 — @anon_real (2020-11-19)

However, how to prevent other tokens issued by that person to be interpreted as following this design pattern is kind of unsolved I think but I believe there are simple solutions to that as well.

---

### Post #18 — @anon_real (2020-12-28)

To make sure some assets are distributed properly among many addresses (useful for airdrops for example):

```ergoscript
  val properSending = {
    val imp = OUTPUTS.slice(1, OUTPUTS.size - 1)
    val appended = imp.fold(OUTPUTS(0).propositionBytes, {(x:Coll[Byte], b:Box) => {
      x ++ b.propositionBytes
    }})
    blake2b256(appended) == $outHash
  }
```

It both makes sure of proper outputs and preserves proper order. The same can be done for value.

---

### Post #19 — @scalahub (2020-12-28)

Interesting idea. Maybe to prevent computing a large byte array before hashing, it may be more efficient to compute hashes intermittently:

```ergoscript
val properSending = {
  val imp = OUTPUTS.slice(1, OUTPUTS.size - 2)
  val first = blake2b256(OUTPUTS(0).propositionBytes)
  val appended = imp.fold(first, {(x:Coll[Byte], b:Box) => {
    blake2b256(x ++ b.propositionBytes)
  }})
  appended == $outHash
}
```

---

### Post #20 — @anon_real (2020-12-28)

Yes. So maybe depends on the use-case. The classic memory vs computation tradeoff.

---

### Post #21 — @anon_real (2021-06-06)

Proof of token ownership:

This can be useful in various circumstances, for example, imagine a website that will let the user do a certain activity only if he owns the right token in his wallet. In order for the user to prove to the website that he owns the token, he can create a transaction and spend the box that contains the token (sending it to himself) and send the transaction (no broadcasting is needed) to the website, proving that he owns that token.

This was the simplest case possible; to make it practical, the website can send some randomness to the user and the user will have to put the randomness in one of the output’s registers, proving that he is providing the proof only for this specific interaction.

---

### Post #22 — @scalahub (2021-07-06)

*`proveDlog(h, a)`*

In ErgoScript (and ErgoTree), `proveDlog(a)` is defined for the default generator which is fixed in the protocol. If we want to use a different generator `h`, then we can emulate this using `proveDHTuple` as follows

`proveDlog(h, a) = proveDHTuple(h, h, a, a)`

An example of this is in the [Stealth Address Contract](https://www.ergoforum.org/t/stealth-address-contract/255)

---

### Post #23 — @kushti (2021-09-08)

Discovered by [@anon\_real](/u/anon_real) :  
As is it possible to store box in a register (and context extension of an input), it is also possible to prove that spent box had some properties. For that, we need to issue certificate NFT during spending, to check then that corresponding box had some properties (while certificate box is not spent). Used in auctions contracts by [@anon\_real](/u/anon_real) to get original author of NFT to pay royalty.

---

### Post #24 — @anon_real (2021-09-17)

Another use-case: [Some Details About Ergo Auction House - #36 by anon\_real](https://www.ergoforum.org/t/some-details-about-ergo-auction-house/428/36)

---

### Post #25 — @kushti (2023-07-04)

Kind of meta-pattern: check in a contract if it interacts with other contracts (e.g. LP with order contract, hodl pool with proxy etc) only state (outputs) related to the contract and leave checking other outputs to counter-parties. So in case of LP contract interacting with an order contract, LP would check only correctness of LP output, leaving checking user’s output(s) to the order contract.
