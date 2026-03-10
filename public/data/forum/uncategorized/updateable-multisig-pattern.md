---
title: Updateable Multisig Pattern
description: 'ErgoForum discussion: Updateable Multisig Pattern'
tags:
- box
- ergoforum
- ergohack
- ergoscript
- ergoscript-context
- ergotree
- native-tokens
- registers
- ring-signatures
- sigma-protocols
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/updateable-multisig-pattern/3356
created: '2022-02-12'
last_activity: '2022-02-20'
posts_count: 4
views: 778
likes: 10
glossary_hits:
- Box
- ERGOHACK
- ErgoScript
- ErgoScript context
- ErgoTree
- Native tokens
- Registers
- Ring signatures
- Sigma protocols
---

# Updateable Multisig Pattern

> **Forum thread:** [https://ergoforum.org/t/updateable-multisig-pattern/3356](https://ergoforum.org/t/updateable-multisig-pattern/3356)
> **Category:** Uncategorized | **Created:** 2022-02-12 | **Posts:** 4 | **Views:** 778

**Related concepts:** Box, ERGOHACK, ErgoScript, ErgoScript context, ErgoTree, Native tokens, Registers, Ring signatures, Sigma protocols

---

### Post #1 — @kushti (2022-02-12)

In the light of ErgoHack III going on, I am revising different known contracts regarding privacy.

One of the most unknown things still, unfortunately, is how treasury contract is done. And there are some interesting things here. One of them is *updateable threshold scheme*, which can be interesting per se.

Treasury contract is done in ErgoTree, as ErgoScript was not available back then. In ErgoScript, the general idea can be expressed as:

```ergoscript
{
  val selfOut = OUTPUTS(0)

  val sameScript = selfOut.propositionBytes == SELF.propositionBytes
 
  val sigScript = SELF.R4[SigmaProp].get
  sameScript && sigScript
}
```

So the script is ensuring that the template is stored (in OUTPUT #0), and a condition to spend the box is stored in register R4 actually. Register type is of [SigmaProp], which means a trivial boolean value (true/false) or a statement provable via a sigma protocol. In case of Treasury contract, the value is

```ergoscript
0e6f98040483030808cd039bb5fe52359a64c99a60fd944fc5e388cbdc4d37ff091cc841c3ee79060b864708cd031fb52cf6e805f80d97cde289f4f757d49accf0c83fb864b27d2cf982c37f9a8b08cd0352ac2a471339b0d23b3d2c5ce0db0e81c969f77891b9edf0bda7fd39a78184e7
```

which is AtLeast(2, Coll(Pk\_A, PK\_B, PK\_C)) condition, so threshold signature requirement, written into register as a byte array.

So currently the Treasury is protected by 2-out-of-3 signature , where ring members are initial core developers, but the protection can be updated.

Similarly, updateable protection can be useful for DAOs, offchain banks, and other contracts.

---

### Post #2 — @kushti (2022-02-12)

[Reserved for description of offchain part]

---

### Post #3 — @scalahub (2022-02-13)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> ```ergoscript
> {
>   val selfOut = OUTPUTS(0)
>
>   val sameScript = selfOut.propositionBytes == SELF.propositionBytes
>  
>   val sigScript = SELF.R4[SigmaProp].get
>   sameScript && sigScript
> }
> ```

Availability of `SigmaProp` type is indeed quite useful.

As a side note, to ensure that output does not become unspendable by mistake (if R4 is empty), it will be good to ensure that R4 has a SigmaProp simply by adding a line:

`val outProp = selfOut.R4[SigmaProp].get`

Need to test whether the above statement will actually be executed because script is generally evaluated lazily.

---

### Post #4 — @anon_real (2022-02-20)

[ErgoTeam](https://github.com/anon-real/ergo-team) will as well support updating spending conditions. Upon voting, the team will be able to change the voting token which is equivalent to changing spending conditions.
