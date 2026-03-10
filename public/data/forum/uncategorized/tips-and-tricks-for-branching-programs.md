---
title: Tips and Tricks for branching programs
description: 'ErgoForum discussion: Tips and Tricks for branching programs'
tags:
- box
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- kiosk
- native-tokens
- registers
- sigma-protocols
- singleton-/-state-nft
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/tips-and-tricks-for-branching-programs/447
created: '2020-10-30'
last_activity: '2020-10-30'
posts_count: 1
views: 466
likes: 4
glossary_hits:
- Box
- ErgoScript
- ErgoScript context
- ErgoTree
- Kiosk
- Native tokens
- Registers
- Sigma protocols
- Singleton / State NFT
- Transaction
---

# Tips and Tricks for branching programs

> **Forum thread:** [https://ergoforum.org/t/tips-and-tricks-for-branching-programs/447](https://ergoforum.org/t/tips-and-tricks-for-branching-programs/447)
> **Category:** Uncategorized | **Created:** 2020-10-30 | **Posts:** 1 | **Views:** 466

**Related concepts:** Box, ErgoScript, ErgoScript context, ErgoTree, Kiosk, Native tokens, Registers, Sigma protocols, Singleton / State NFT, Transaction

---

### Post #1 — @scalahub (2020-10-30)

Currently ErgoTree (and ErgoScript) programs are interpreted in a “not-so-lazy-way” to ensure fail-safe cost evaluation and prevent some attacks in the AOTC model. This could change in future if JITC is used. This issue is also referenced [here](https://github.com/ergoplatform/ergo/issues/1097) and [here](https://www.ergoforum.org/t/registers-and-types/220).

Due to this, certain programs with branches may not execute as intended. For instance, if one branch requires a register to be of type `Long` and another branch requires it to be of type `Coll[Byte]`, then one branch may become unspendable. As an example the following code has the issue:

```ergoscript
sigmaProp{
   val condition = OUTPUTS(0).R4[Int].get == 1
   val data = CONTEXT.dataInputs(0)

   if (condition) {  // assume data.R4 has Long type
     data.R4[Long].get <= SELF.value
   } else {  // assume data.R4 has Coll[Byte] type
     data.R4[Coll[Byte]].get != SELF.propositionBytes
   }
}
```

If `condition` is true, the AOT coster will still try to read `data.R4` as `Coll[Byte]` even if that branch is not going to be executed. Consequently, no matter what we do, the execution in the true branch will always fail.

There are two approaches to get around this:

## 1. Use different registers

```ergoscript
sigmaProp{
   val condition = OUTPUTS(0).R4[Int].get == 1
   val data = CONTEXT.dataInputs(0)

   if (condition) {  // assume data.R4 has Long type
     data.R4[Long].get <= SELF.value
   } else {  // assume data.R5 has Coll[Byte] type  (different register)
     data.R5[Coll[Byte]].get != SELF.propositionBytes 
   }
}
```

In the above approach, irrespective of the branch, we would need to have both registers of `data` populated with values of the correct types, even though we use only one. In most approaches this should be sufficient. However, if the contract is complex with multiple branches or if there is a dearth of registers, then then second approach can be used.

## 2. Use different boxes

This approach allows us to use only a single register, `data.R4` that can contain different types at the cost of increased complexity. The idea is the observation that the code in each input of a transaction is executed. Hence we will keep the code of a branch in its own box. The original box is modified to require that the second input has the script matching the code we desire in each branch. For efficiency, we will in fact require that the second input has the script whose hash matches the hash of the code we desire.

```ergoscript
sigmaProp{
  val thisIsFirstInput = SELF.id == INPUTS(0).id
  val codeHash = blake2b256(INPUTS(1).propositionBytes)
  val condition = OUTPUTS(0).R4[Int].get == 1

  val correctCodeInSecondInput = if (condition) {
    codeHash == leftBranchBytesHash
  } else {
    codeHash == rightBranchBytesHash
  }
  
  thisIsFirstInput && correctCodeInSecondInput
}
```

The values `leftBranchBytesHash` and `rightBranchBytesHash` are hashes of the below scripts respectively:

```ergoscript
sigmaProp{
  val data = CONTEXT.dataInputs(0)
  data.R4[Long].get <= INPUTS(0).value
}
```

and

```ergoscript
sigmaProp{
  val data = CONTEXT.dataInputs(0)
  data.R4[Coll[Byte]].get != INPUTS(0).propositionBytes
}
```

Please see the working example [here](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/kiosk/nonlazy/Split.scala).

Note a few differences from the original logic:

1. The main box needs to ensure that it is the first input
2. The code box needs to apply the condition to the first input rather than to `SELF`.

Regarding the second approach, it will probably be a good idea to use a NFT (aka “singleton token”) to ensure that the branch boxes cannot be independently spent:

```ergoscript
sigmaProp{
  val data = CONTEXT.dataInputs(0)
  data.R4[Long].get <= INPUTS(0).value && 
  INPUTS(0).tokens(0)._1 == NFT
}
```

The same is done for the other branch box and the main box now also has the NFT.
