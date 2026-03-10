---
title: Mathematical Fun with ErgoScript
description: 'ErgoForum discussion: Mathematical Fun with ErgoScript'
tags:
- addresses
- box
- context-extension
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- full-node
- mempool
- registers
- sigmastate-interpreter
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/mathematical-fun-with-ergoscript/76
created: '2019-09-06'
last_activity: '2020-10-20'
posts_count: 15
views: 2531
likes: 21
glossary_hits:
- Addresses
- Box
- Context extension
- Ergo Explorer
- ErgoScript
- ErgoScript context
- ErgoTree
- Full node
- Mempool
- Registers
- Sigmastate interpreter
- Transaction
---

# Mathematical Fun with ErgoScript

> **Forum thread:** [https://ergoforum.org/t/mathematical-fun-with-ergoscript/76](https://ergoforum.org/t/mathematical-fun-with-ergoscript/76)
> **Category:** Uncategorized | **Created:** 2019-09-06 | **Posts:** 15 | **Views:** 2531

**Related concepts:** Addresses, Box, Context extension, Ergo Explorer, ErgoScript, ErgoScript context, ErgoTree, Full node, Mempool, Registers, Sigmastate interpreter, Transaction

---

### Post #1 — @jasondavies (2019-09-06)

Just for fun, I decided to see how hard it would be to create a “bounty” protected by some mathematical problem. I was inspired by today’s [announcement](https://aperiodical.com/2019/09/42-is-the-answer-to-the-question-what-is-80538738812075974%c2%b3-80435758145817515%c2%b3-12602123297335631%c2%b3/) that 42 can be written as the sum of three cubes:

> 42 = (−80538738812075974)^3 + 80435758145817515^3 + 12602123297335631^3

I created the following trivial contract:

```ergoscript
{
  val a = getVar[BigInt](1).get
  val b = getVar[BigInt](2).get
  val c = getVar[BigInt](3).get

  a * a * a + b * b * b + c * c * c == 42
}
```

I converted this to a P2S address using a [simple P2S web tool](https://wallet.plutomonkey.com/p2s/?source=ewogIHZhbCBhID0gZ2V0VmFyW0JpZ0ludF0oMSkuZ2V0CiAgdmFsIGIgPSBnZXRWYXJbQmlnSW50XSgyKS5nZXQKICB2YWwgYyA9IGdldFZhcltCaWdJbnRdKDMpLmdldAoKICBhICogYSAqIGEgKyBiICogYiAqIGIgKyBjICogYyAqIGMgPT0gNDIKfQ==) that I’m working on, which gave me this P2S address:

> [YUgUAFeNudkkLfjWcnXfg6HphUDaWdaR88yTQHeP6oozcvvwbM74SRZPW1R3WrqYmyp5vM4PhC2SuTfMA](https://explorer.ergoplatform.com/en/addresses/YUgUAFeNudkkLfjWcnXfg6HphUDaWdaR88yTQHeP6oozcvvwbM74SRZPW1R3WrqYmyp5vM4PhC2SuTfMA)

I sent 42 ERG to this address ready for testing.

Now, in order to claim the “bounty”, I created an unsigned transaction with the three values above included in the `extension` field under `spendingProof`. No signature was necessary, of course, just the correct values that solve the puzzle. I successfully claimed the bounty and sent it on to the [crowdfunding CLI project](https://www.ergoforum.org/t/simple-crowdfunding/70)!

Notes:

* It would be good to have better documentation for ErgoScript; in particular, I was confused about BigInt and whether it represented 256-bit integers as noted [here](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/9169e8f594f61942862383425c4837bfb42680ab/docs/LangSpec.md), or arbitrary-precision integers due to the use of `java.math.BigInteger` internally – it has now been confirmed to represent 256-bit integers.
* It would have been nice to test the script properly somehow in a standalone manner e.g. write test cases for it. I know that this is possible in Scala but maybe a tutorial on this would be good (or even better for non-Scala developers - some way to more easily work with ErgoScript outside of Scala?)
* The explorer doesn’t currently show extension data, so I was a bit disappointed you couldn’t really see the solution to the puzzle in the explorer very well.

Any feedback is welcome!

---

### Post #2 — @robert (2019-09-06)

This is really a cool/fun experiment.

Also would you mind pasting the request body filled out for this scenario? I probably can jump into the ErgoScript paper to get a refresher/figure it out, but it’ll probably be useful for other people as well to see how one would go about doing the same thing.

(And thank you for forwarding it onto the the crowdfunding project. It’s very much appreciated)

---

### Post #3 — @jasondavies (2019-09-06)

Certainly! It’s a shame the explorer / the explorer API doesn’t seem to fully show these values at the moment. The transaction that I generated in order to solve the puzzle and claim the “bounty” looks like this:

```ergoscript
{
   "outputs" : [
      {
         "additionalRegisters" : {},
         "creationHeight" : 48410,
         "ergoTree" : "100504a08d0608cd0355e3409b35892e2b916a6362a93f742d06ce1726e2eaa688738b34b652d1142a04a08d0608cd02dada811a888cd0dc7a0a41739a3ad9b0f427741fe6ca19700cf1a51200c96bf70580a094a58d1deb02ea02d192a373007301ea02ea02d18fa373027303d1aea5d901016392c172017304",
         "value" : 41999000000,
         "assets" : []
      },
      {
         "creationHeight" : 48410,
         "additionalRegisters" : {},
         "assets" : [],
         "value" : 1000000,
         "ergoTree" : "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304"
      }
   ],
   "dataInputs" : [],
   "inputs" : [
      {
         "boxId" : "98adf7b8d2fd1f3d2b348a1f131a3c4c455ccecd946ea1e67e5a952d98238f21",
         "spendingProof" : {
            "extension" : {
               "1" : "0620fffffffffffffffffffffffffffffffffffffffffffffffffee1de719a72c03a",
               "2" : "0620000000000000000000000000000000000000000000000000011dc3e557854bab",
               "3" : "0620000000000000000000000000000000000000000000000000002cc5907a8da94f"
            },
            "proofBytes" : ""
         }
      }
   ]
}
```

Serialisation of extension values is the same as for ErgoTree. In our case, we want to serialise our 3 BigInt values. The first byte is the type of the value (`06` is for BigInt); then for BigInt, the serialisation follows that of a byte array with the next byte being the number of bytes (32) followed by 32 bytes, big-endian (two’s complement for negative values). ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=9 ":slight_smile:")

~~Edit: originally I thought BigInts had to be 256 bits as noted [here](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/9169e8f594f61942862383425c4837bfb42680ab/docs/LangSpec.md), but looking at the code more closely I believe they are in fact supposed to be arbitrary precision, so overflow should not be an issue.~~

---

### Post #4 — @robert (2019-09-07)

Thanks for the explanation, rather simple besides the need to serialize the data. I imagine doing so will become easier as more tooling as we’re making will supports all of this.

---

### Post #5 — @morphic (2019-09-07)

Nope, operations with BigInt values are limited to 256 bits.  
It is checked during the transaction deserialization and on every BigInt operation, which may overflow.

---

### Post #6 — @kushti (2019-09-08)

This example is truly exciting!

How did you get unsigned transaction?

As JSON codecs for typed values are ready ([Mathematical Fun with ErgoScript](https://www.ergoforum.org/t/mathematical-fun-with-ergoscript/76/4)), we can do a method in Ergo node, like /script/encodeValue to get serialized constant values for registers and context extensions. [@jasondavies](/u/jasondavies) what do you think on that?

Explorer should be improved, for sure, made an issue on that <https://github.com/ergoplatform/ergo-explorer/issues/47> .

---

### Post #7 — @jasondavies (2019-09-08)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> How did you get unsigned transaction?

I created the above JSON manually with the serialised extension fields, and left the `proofBytes` field empty.

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> we can do a method in Ergo node, like /script/encodeValue to get serialized constant values for registers and context extensions.

I think that would be a very useful utility for external developers.

---

### Post #8 — @kushti (2019-09-08)

> I created the above JSON manually with the serialised extension fields, and left the `proofBytes` field empty.

Not so simple, so we need a method to create unsigned transaction as well I guess

---

### Post #9 — @jasondavies (2019-09-09)

![](https://avatars.discourse-cdn.com/v4/letter/m/48db29/48.png) morphic:

> It is checked during the transaction deserialization and on every BigInt operation, which may overflow.

Can you link to the code that checks for overflow on every BigInt operation?

---

### Post #10 — @morphic (2019-09-10)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/jasondavies/48/17_2.png) jasondavies:

> ![](https://avatars.discourse-cdn.com/v4/letter/m/48db29/48.png) morphic:
>
> > It is checked during the transaction deserialization and on every BigInt operation, which may overflow.
>
> Can you link to the code that checks for overflow on every BigInt operation?

[Here](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/sigma-impl/src/main/scala/special/sigma/TestBigInt.scala#L35). Despite its name this class is inherited by CBigInt and used in production. So the name is misleading and should be changed.

---

### Post #11 — @jasondavies (2019-09-13)

One potential problem with this puzzle script is that an adversary can steal the bounty: the solution is broadcast in the clear and it would then be a race to see whose transaction gets mined first (the adversary could use a higher mining fee, for example).

A workaround, suggested by [@kushti](/u/kushti), is to introduce an intermediate stage where you claim that you have solved the puzzle, but you don’t reveal the solution yet. Anyone can do this for a set fee, say 1 ERG. Once you are in this state, you then have to reveal the solution within a certain number of blocks, but only you will be allowed to claim the bounty.

Potential downsides:

* Denial-of-service attack, but this costs 1 ERG every time you want to prevent someone else from claiming the bounty.
* The “claim fee” should probably just be added to the bounty. However, it might be better to burn the claim fee or send it elsewhere so that an adversary cannot ever get their money back. For example, they might be incentivised to continuously deny service while they work on solving the puzzle, and then claim all of their fees back at the end.

For *this specific* puzzle (sum of cubes) it should be theoretically possible to provide a zero knowledge proof, but I’m entirely not sure about the details.

---

### Post #12 — @robert (2019-09-14)

I’m thinking out loud here as so this idea may have an inherent issue, but maybe we could change this intermediate stage to require that the person who claims to know the solution post a hash of the answer first rather than a mere empty claim. (Say all the required input variables fed through a 1-way hashing function, then appended together, and once again hashed). Others are not prevented from posting other hashes of what they deem to be the answer, but for the next X blocks (say 1000) no one else except the person who first claimed to have the answer with said hash is allowed to submit the answer together with that hash in order to withdraw. (When someone wishes to withdraw from the script it would redo the hashing on the answer in order to check for equivalence with the originally submitted hash)

This way you likely won’t have the puzzle be as easily DoS attacked. It is possible that someone is willing to scan the mempool and copy/post every single hash anyone ever submits, not to mention then keeping that up every X blocks afterwards to keep the DoS “renewed” so to speak, but that at the very least makes attacking much more costly.

I’m not entirely sure how to best make this fit within ErgoScript (would need to do more thinking), and I’m about to board my flight, but I think this idea may be an improvement on the current design you two have thought of.

---

### Post #13 — @jasondavies (2019-09-14)

I appreciate your creativity and out-loud thinking!

However, I’m not sure this is an improvement: a DoS attack could simply involve posting random hashes to keep the contract in the “solution claimed but not yet revealed” state (you wouldn’t even need to know the preimages because you never claim the prize during the DoS attack; or you could use random values as preimages). Once you have the real solution, you can of course use it as a preimage for the intermediate step and claim the prize in the final step. Am I missing something?

Note that in [@kushti](/u/kushti)’s proposal, when someone finds a solution and the contract enters the intermediate state, they also provide their public key. When they reveal the solution in the final step, the reward can only be paid to that public key.

---

### Post #14 — @robert (2019-09-14)

Right, valid point. I was thinking more on my flight last night on how to structure the hash/answer submission and I think I came up with a (maybe somewhat overly complex) alternative.

There could be 2 states (or scripts/contracts) which the prize coins are locked under and go back and forth between. `Hash Submission` & `Answer Submission`.

Originally the prize solution coins are locked under the `Hash Submission` script. This script merely states that it can be spent (after X blocks to provide time for people to post hashes) to produce a box with the `Answer Submission` script and requires at least 1 extra other input box too. These extra inputs are boxes posted by individuals who are claiming to have solved the puzzle and which hold data (likely in registers) such as the claimed hash answer and the pk of the user who submit the claim. The creator of the locked coins will have to make the spending tx and collect all of those inputs to move the contract forward after the block deadline is over.

Now in the `Answer Submission` contract, all of the individuals who submitted hashes and were chosen as inputs now have a time period (say a week) to submit the answer that matches the hash as I explained in my previous post. If the user with the PK which made the hash submission now submits the correct answer, they have the exclusive right to withdraw the coins. The week time period should (hopefully) stop anyone from even thinking about trying to delay the answer being accepted in a block as it should theoretically cost way more to fill every single block to the max for that time period. If no one submits the correct answer in the 1 week, then the owner of the locked coins can spend that box and “recurse” it back to being locked under the `Hash Submission` script.

This makes it more challenging to do DoS attacks as the individual who locked the coins will have to select the inputs which are chosen during the `Hash Submission` phase. Theoretically you could do a Sybil attack of sorts where if you manage to figure out the correct hash you can always create a new keypair and try to get your box accepted over someone who actually knows the answer. This is likely to be quite rare, and even then could be taken care of by leveraging reputation.

An individual could put up their reputation publicly, say here on the forum, and clearly identify their pk and state that they have the answer which will then entice the prize owner to select their input. If they fail to provide the answer in the `Answer Submission` phase, then they also take a hit publicly which helps to dis-incentivize such behaviour.

The contracts should be able to infinitely recurse and keep going as long as the prize owner is willing to continue managing/progressing the contracts. I don’t think this is a particularly ideal solution, but this is my first attempt at clarifying what I originally posted with a more palpable setup.

---

### Post #15 — @scalahub (2020-10-20)

[Here is another example](https://github.com/ergoplatform/ergo/issues/1214#issuecomment-708605504) using a puzzle for addressing the same issue (DoS attacks). The idea works assuming that DEPTH is available.

```ergoscript
{ 
  val x = OUTPUTS(0).R4[Coll[Byte]].get
  val y = OUTPUTS(0).R5[Coll[Byte]].get

  val commitmentBox = CONTEXT.dataInputs(0) // can also be input
  val commitmentX = commitmentBox.R4[Coll[Byte]].get
  val commitmentY = commitmentBox.R5[Coll[Byte]].get
  val commitmentOwnerPubKey = commitmentBox.R6[Coll[Byte]].get      

  val validCommitment = blakeb256(x) == commitmentX && 
                        blakeB256(y) == commitmentY

  val validReward = OUTPUTS(0).value = SELF.value && 
                    OUTPUTS(0).propositionBytes == commitmentOwnerPubKey

  // puzzle's goal is to find x != y such that sha256(x) == sha256(y)
  sha256(x) == sha256(y) && x != y && 
  validCommitment && 
  commitmentBox.DEPTH > 100 && 
  validReward
}
```

If DEPTH is not available (it isn’t yet unfortunately), there are other workarounds such as those suggested in the thread: “[A trustless timestamping service for boxes](https://www.ergoforum.org/t/a-trustless-timestamping-service-for-boxes/432)”
