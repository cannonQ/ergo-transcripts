---
title: Decentralization on top of decentralization!
description: 'ErgoForum discussion: Decentralization on top of decentralization!'
tags:
- box
- data-input
- ergoforum
- ergoscript
- ergoscript-context
- native-tokens
- registers
- sigma-protocols
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/decentralization-on-top-of-decentralization/3767
created: '2022-08-06'
last_activity: '2022-08-19'
posts_count: 6
views: 845
likes: 20
glossary_hits:
- Box
- Data input
- ErgoScript
- ErgoScript context
- Native tokens
- Registers
- Sigma protocols
- SigmaUSD
---

# Decentralization on top of decentralization!

> **Forum thread:** [https://ergoforum.org/t/decentralization-on-top-of-decentralization/3767](https://ergoforum.org/t/decentralization-on-top-of-decentralization/3767)
> **Category:** Uncategorized | **Created:** 2022-08-06 | **Posts:** 6 | **Views:** 845

**Related concepts:** Box, Data input, ErgoScript, ErgoScript context, Native tokens, Registers, Sigma protocols, SigmaUSD

---

### Post #1 — @anon_real (2022-08-06)

Decentralized apps tend to update over time. Either it is because of adding a new feature that requires protocol change (major changes in contracts) or finding a bug, etc. One example could be SigUSD V1 which was updated because of some known issues.

In a truly decentralized dapp, the community should have a vote on whether the dapp should change or not. Putting that big power in only the devs hand (possibly only one guy) doesn’t seem to be aligned with decentralization.

This is where ErgoTeam comes in! ErgoTeam will support arbitrary changing proposals for some box that is being managed by a team. This team can be a big community of users or even a small group of devs that wish to divide the power.

To have a more concrete example, let’s say a dapp stores one of the dapp’s contracts in a register of a box as SigmaProp, let’s call this box dappManager. This box can be used as dataInput in other dapp contracts that make sure the stored SigmaProp gets executed:

```ergoscript
{
  val dappManager = CONTEXT.dataInputs(0) 
  val dapContract = dappManager.R4[SigmaProp].get
  dappContract && otherConditions
}
```

This dappManager box can easily be managed by ErgoTeam and be changed in an arbitrary way upon proper voting. This way, not only the deployed dapp is decentralized but also any significant changes that require a change in the protocol can be decentralized.

Who can vote and how to distribute voting tokens and to whom is not addressed here and needs separate discussions.

---

### Post #2 — @lgd (2022-08-07)

So is the stored SigmaProp in the dappManager box or the second box where the dappManager is used as data input? Because I am a bit confused by the example ErgoScript and the description which are not the same.

---

### Post #3 — @anon_real (2022-08-07)

Yes, in the dappManager box.

---

### Post #4 — @lgd (2022-08-07)

So SELF is the dappManager box?

---

### Post #5 — @anon_real (2022-08-08)

Sorry it was a typo, fixed.

---

### Post #6 — @Luivatra (2022-08-19)

I was just excitedly explaining this brilliant idea I had regarding SigmaProp’s in dao config boxes just for lgd to mention this thread ![:joy:](https://emoji.discourse-cdn.com/twitter/joy.png?v=12 ":joy:")
