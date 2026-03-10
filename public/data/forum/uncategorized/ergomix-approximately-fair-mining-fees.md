---
title: 'ErgoMix: approximately fair mining fees'
description: 'ErgoForum discussion: ErgoMix: approximately fair mining fees'
tags:
- addresses
- box
- ergoforum
- ergoscript
- ergoscript-context
- full-node
- native-tokens
- registers
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergomix-approximately-fair-mining-fees/110
created: '2019-10-13'
last_activity: '2019-10-14'
posts_count: 5
views: 1093
likes: 14
glossary_hits:
- Addresses
- Box
- ErgoScript
- ErgoScript context
- Full node
- Native tokens
- Registers
- Transaction
---

# ErgoMix: approximately fair mining fees

> **Forum thread:** [https://ergoforum.org/t/ergomix-approximately-fair-mining-fees/110](https://ergoforum.org/t/ergomix-approximately-fair-mining-fees/110)
> **Category:** Uncategorized | **Created:** 2019-10-13 | **Posts:** 5 | **Views:** 1093

**Related concepts:** Addresses, Box, ErgoScript, ErgoScript context, Full node, Native tokens, Registers, Transaction

---

### Post #1 — @jasondavies (2019-10-13)

While participating in [@scalahub](/u/scalahub)’s [Let’s play with ErgoMix](https://www.ergoforum.org/t/lets-play-with-ergomix/108), we found that fees are a bit of an issue at the moment because nodes and miners will not accept zero-fee transactions into their mempools without a configuration change.

There are a few possibilities mentioned in section 3.3.3 of [Advanced ErgoScript Tutorial](https://ergoplatform.org/docs/AdvancedErgoScriptTutorial.pdf), but I came with a possible alternative which is similar to “approximate fairness” but I think can be done entirely with ERG:

Looking at ErgoMix boxes as a DAG and ignoring mining fees, nodes can be either {entry, halfMix, fullMix, exit}; where entry and exit nodes are non-mix boxes.

* halfMix nodes *must* include an “entry fee”, and this entry fee can *only* be spent on mining. This higher entry fee is required if the input is not a fullMix box, otherwise there needs to be at least 0.5 \* minimalFee for the fullMix box (assume halfMix can only be spent to fullMix).
* fullMix nodes would take the two input fee amounts and redistribute them equally between the two outputs to preserve indistinguishability.
* fullMix nodes would also require that the full remaining fee is spent on mining if they are spent on exiting ErgoMix. Otherwise the usual minimalFee can be spent on mining.

This is only approximately fair because Alice might have just entered the ErgoMix with a full entry fee, and then mixes with Bob who only has a small amount of fee left, and then ~50% of Alice’s fee will have been redistributed to Bob.

I think doing this entirely in ERG might simplify things a bit because it doesn’t require dealing with tokens (which I don’t know much about yet).

---

### Post #2 — @jasondavies (2019-10-13)

After further thought, the tricky part of doing this without tokens is that it’s not possible to enforce the “entry fee” requirement, at least as far as I can tell.

---

### Post #3 — @robert (2019-10-13)

Nice work on jumping into all of this. ErgoMix is one of the things I’ve been quite excited about ever since I read it in the whitepaper.

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/jasondavies/48/17_2.png) jasondavies:

> After further thought, the tricky part of doing this without tokens is that it’s not possible to enforce the “entry fee” requirement, at least as far as I can tell.

If I understand correctly, you are saying that Alice could create a halfMix box without providing an entry fee, and thus the only way it could be used is if Bob felt particularly giving and decided to create a halfMix box that has double the standard entry fee? In most cases Bob would never wish to do so, so Alice’s halfMix box would be unspendable, so it would be preferred to enforce the entry fee, correct?

If so, while it’s not a perfect solution, I imagine that the software build on top of ErgoMix can just enforce on the client-side that the entry fee is provided, and any documentation/written material about ErgoMix can clearly specify/warn that an entry fee is required else the halfMix box will likely never be used.

---

### Post #4 — @jasondavies (2019-10-13)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/robert/48/8_2.png) robert:

> If I understand correctly, you are saying that Alice could create a halfMix box without providing an entry fee, and thus the only way it could be used is if Bob felt particularly giving and decided to create a halfMix box that has double the standard entry fee?

The entry fee refers to a fee buffer (say 100 \* miningFee) that’s only required when creating your *first* halfMix (where the input is *not* a fullMix). This fee buffer is progressively reduced during subsequent mixing steps; i.e. halfMixes whose inputs are fullMixes do not require the full entry fee.

The issue is that Bob can skip paying the full entry fee and create a low-entry-fee halfMix, and then combine it any normal halfMix (including those with full entry fee) to create a fullMix. Blacklisting this fullMix would be unfair to normal users. If everyone created low-entry-fee halfMixes of course it would mean that only one mixing step would be possible as you could only combine with other low-fee halfMixes!

Another way of stating the issue: anyone can create a halfMix (in the UTXO model, anyone can send ERG to any address they want). The problem is that once it’s created, you cannot tell if it is an entry node or not because you cannot refer to its inputs to determine whether it was created from a fullMix or not.

I think using a token is probably the more elegant solution here but I was trying to see if there was a way to do without it.

---

### Post #5 — @scalahub (2019-10-14)

To elaborate more on what [@jasondavies](/u/jasondavies) said above, the problem is that in ErgoScript, we cannot access the transaction that created an input.

The issue can be roughly described as “identifying protocol boxes”… i.e., how to differentiate two input boxes with identical registers but one was created in a particular type of transaction and the other created in a different manner; for instance we may want to differentiate the cases when the second input to a mix transaction was the output of another mix transaction or was from “outside the system”.

There does not seem to be any way to do this without tokens.

The reason to require this in ErgoMix is due to the “approximate fairness rule” below.

Approximate Fairness Rule: Alice allows Bob to contribute fewer tokens (so that the outputs have an equal number of tokens without destroying any) as long as he originally had started with the “entry-fee” amount of tokens and lost them in subsequent mixes following this same approximate fairness rule. Thus, if Bob is providing less fee then he is compensating by providing “highly mixed coins”.

In the worst case, for n mixes, one would need to start with 2^n mixing tokens, because each mix can potentially halve the number of tokens. But if approximate fairness is enforced then the worst case will occur with very low probability (exact numbers have to be worked out).
