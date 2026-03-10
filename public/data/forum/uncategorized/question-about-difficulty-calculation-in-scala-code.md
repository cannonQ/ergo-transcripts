---
title: Question about difficulty calculation in Scala code
description: 'ErgoForum discussion: Question about difficulty calculation in Scala
  code'
tags:
- difficulty-adjustment
- ergo-explorer
- ergoforum
- ergoscript
- sigmastate-interpreter
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/question-about-difficulty-calculation-in-scala-code/3487
created: '2022-03-30'
last_activity: '2022-04-01'
posts_count: 2
views: 385
likes: 3
glossary_hits:
- Difficulty adjustment
- Ergo Explorer
- ErgoScript
- Sigmastate interpreter
---

# Question about difficulty calculation in Scala code

> **Forum thread:** [https://ergoforum.org/t/question-about-difficulty-calculation-in-scala-code/3487](https://ergoforum.org/t/question-about-difficulty-calculation-in-scala-code/3487)
> **Category:** Uncategorized | **Created:** 2022-03-30 | **Posts:** 2 | **Views:** 385

**Related concepts:** Difficulty adjustment, Ergo Explorer, ErgoScript, Sigmastate interpreter

---

### Post #1 — @android17 (2022-03-30)

Hi, I’ve been reviewing the Scala code related to solution verification and particularly how the diffculty is calculated.

I found that for a recent block:  
<https://explorer.ergoplatform.com/en/blocks/5571af507c19d938e53bb8520df26fc314dd61f5395011a842f7b7aa9ab3c28d>

The “nBits” are: 117968545 which is hex: 0x7080ea1  
This value is passed to the method RequiredDifficulty.decodeCompactBits which look like it returns the “difficulty” which for this block is: 2267884466208768 which is hex: 0x80EA100000000.

Then in AutolykosPowScheme.scala this code divides “q” by the difficulty but “q” is not defined anywhere I can find:

```ergoscript
204   /**
205     * Get target `b` from encoded difficulty `nBits`
206     */
207   private[mining] def getB(nBits: Long): BigInt = {
208     q / RequiredDifficulty.decodeCompactBits(nBits)
209   }
```

Can anyone tell me what “q” is?

I’m looking for an example of the 32 byte value “b” from AutolykosPowScheme.validate(). Thanks!

---

### Post #2 — @jozinek (2022-04-01)

You can see its definition [here](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/fada073b82a16a928c457693b888da4c0310aca6/sigmastate/src/main/scala/sigmastate/basics/BcDlogGroup.scala#L23). It is part of elliptic-curve parameters (namely “n”). More details in dependent lib [here](https://people.eecs.berkeley.edu/~jonah/bc/org/bouncycastle/asn1/x9/X9ECParameters.html).
