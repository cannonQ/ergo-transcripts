---
title: Ada's Vasil hardfork helps concurrency, but does ergo already have these issues
  figured out?
description: 'ErgoForum discussion: Ada''s Vasil hardfork helps concurrency, but does
  ergo already have these issues figured out?'
tags:
- data-input
- ergoforum
- ergoscript-context
- registers
- sigma-protocols
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/adas-vasil-hardfork-helps-concurrency-but-does-ergo-already-have-these-issues-figured-out/3817
created: '2022-08-29'
last_activity: '2022-09-05'
posts_count: 3
views: 372
likes: 7
glossary_hits:
- Data input
- ErgoScript context
- Registers
- Sigma protocols
---

# Ada's Vasil hardfork helps concurrency, but does ergo already have these issues figured out?

> **Forum thread:** [https://ergoforum.org/t/adas-vasil-hardfork-helps-concurrency-but-does-ergo-already-have-these-issues-figured-out/3817](https://ergoforum.org/t/adas-vasil-hardfork-helps-concurrency-but-does-ergo-already-have-these-issues-figured-out/3817)
> **Category:** Uncategorized | **Created:** 2022-08-29 | **Posts:** 3 | **Views:** 372

**Related concepts:** Data input, ErgoScript context, Registers, Sigma protocols

---

### Post #1 — @Seafarer (2022-08-29)

hey i know ada is similar to erg so will vasil have things ergo needs? cip 31 makes it so dapps dont have to spend outputs to read data. cip 32 attaches data to outputs and not just hashes. cip 33 allows reference scripts to be attached to outputs.

can ergo do all of this already? is this what trustless oracles help? or do we get there differently?

---

### Post #2 — @CheeseEnthusiast (2022-08-29)

Ergo can already do all of this pretty much.  
CIP-31 - Ergo Data Inputs are the exact same thing  
CIP-32 - Ergo registers already support this  
CIP-33 - Sigma Propositions allow for this, and in my opinion do it in a much more elegant way

---

### Post #3 — @ltuae1 (2022-09-05)

Not only does Ergo have all these things… The Ergo devs have been begging Cardano to implement these improvements for quite some time.

I don’t remember all the details but I’m sure you can find CIPs written by Ergo devs.
