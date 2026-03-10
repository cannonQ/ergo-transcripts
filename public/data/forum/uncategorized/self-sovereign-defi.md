---
title: Self-Sovereign DeFi
description: 'ErgoForum discussion: Self-Sovereign DeFi'
tags:
- bootstrapping
- box
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/self-sovereign-defi/260
created: '2020-06-26'
last_activity: '2020-06-27'
posts_count: 3
views: 883
likes: 7
glossary_hits:
- Bootstrapping
- Box
- ErgoScript
- ErgoScript context
- ErgoTree
- Transaction
---

# Self-Sovereign DeFi

> **Forum thread:** [https://ergoforum.org/t/self-sovereign-defi/260](https://ergoforum.org/t/self-sovereign-defi/260)
> **Category:** Uncategorized | **Created:** 2020-06-26 | **Posts:** 3 | **Views:** 883

**Related concepts:** Bootstrapping, Box, ErgoScript, ErgoScript context, ErgoTree, Transaction

---

### Post #1 — @kushti (2020-06-26)

Some time ago I expressed an idea that Ergo can be good for “self-sovereign” DeFi without a clear explanation what could be that about. I still do not have a concrete definition, but let me show an example which I have in my mind.

So let’s take the crowdfunding pledge contract from the ErgoScript whitepaper:

```ergoscript
{
  val fundraisingFailure = HEIGHT >= deadline && backerPubKey

  val enoughRaised = {(outBox: Box) =>
    outBox.value >= minToRaise &&outBox.propositionBytes == projectPubKey.propBytes
  }
  val fundraisingSuccess = HEIGHT < deadline &&projectPubKey && OUTPUTS.exists(enoughRaised)

  fundraisingFailure || fundraisingSuccess
}
```

Which is basically saying that a box protected by the pledge contract can be spent before a *deadline* if a spending transaction collects *enoughRaised* nanoergs.

This contract has two crowdfunding-related parameters then, deadline, and amount the project has to raise in order to get the pledge. But these parameters can be individual! Even more, if a user is willing to support the project unconditionally, he may send funds via just simple transfer.

Consider Alice doing fundraising. Bob is constructing such a pledge contract that he contributes if Alice is raising at least 100 ergs before height = 300K. Carol’s contract is about 50 ergs and 350K. Dave is sending 75 ergs unconditionally.

Then Alice can claim Carol’s pledge before deadline as well. She can claim Bob’s funds before Alice’s pledge deadline if Carol’s pledge is not less than 25 ergs.

Pledge contracts may be more complex as well, e.g. encode pledge size as a function of time.

Thus different users can set different pledge contracts, and still a joint action (the crowdfunding in our example) may take place. That’s what self-sovereign DeFi could be about. And surely a lot of new complexities come in regards with UX etc.

---

### Post #2 — @robert (2020-06-26)

Right, what you are describing really is one of the cool facets of UTXO smart contracts. Multiple UTXOs can have custom/unique spending conditions, yet if the output of each of the individual conditions is the same (or to a valid stage in a protocol) then they are all valid in the DeFi dApp.

Another lens to look at your example through; Essentially Bob, Carol, and Dave are bootstrapping themselves into the DeFi protocol with custom initial stages. These custom initial stages all lead to a predefined stage part of the protocol. As of now, we’ve only really envisioned smart contract protocols with a finite set of stages (all logic/spending condition predefined), but what you are hinting at is that we have untapped potential in dApp design via allowing custom bootstrapping into protocols.

Very interesting, a lot to think about with this going forward.

---

### Post #3 — @kushti (2020-06-27)

Right, going forward from the simple example we contracts getting into pre-agreed stage in any way. That sounds a bit mind-boggling , but useful application will occur around that eventually I think.
