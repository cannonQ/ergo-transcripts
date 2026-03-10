---
title: Ergo and post-quantum crypto?
description: 'ErgoForum discussion: Ergo and post-quantum crypto?'
tags:
- ergoforum
- sigma-protocols
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-and-post-quantum-crypto/257
created: '2020-06-23'
last_activity: '2020-09-15'
posts_count: 4
views: 970
likes: 12
glossary_hits:
- Sigma protocols
---

# Ergo and post-quantum crypto?

> **Forum thread:** [https://ergoforum.org/t/ergo-and-post-quantum-crypto/257](https://ergoforum.org/t/ergo-and-post-quantum-crypto/257)
> **Category:** Uncategorized | **Created:** 2020-06-23 | **Posts:** 4 | **Views:** 970

**Related concepts:** Sigma protocols

---

### Post #1 — @scalahub (2020-06-23)

We talk about “long-term” survivability of Ergo without considering potential development in quantum computers.

How will Ergo adapt as quantum computers evolve?

Probably we should start thinking about sigma protocol to replace `proveDlog` with some quantum-secure mechanisms (like lattices/LWE/etc), and a mechanism to switch to it when the need arises.

---

### Post #2 — @kushti (2020-06-25)

There are some post-quantum sigma-protocols AFAIK, at least for lattices. However. there are certain problems with LBC (and most of other PQ schemes): they usually got broken after some investigation, security parameters values for real-world usage not very well known , no standards etc.

---

### Post #3 — @runic (2020-09-15)

What are the barriers to implementing a Picnic scheme on Ergo?

Most important papers are here: <https://microsoft.github.io/Picnic/>

The primitives are simple and the hardness assumptions are more reasonable than many lattice-based imo.

Any thoughts, [@kushti](/u/kushti) / [@scalahub](/u/scalahub) ?

---

### Post #4 — @kushti (2020-09-15)

oh I’ve forgotten about this, thanks for the link! From abstracts it looks nice, need to check constructions and concrete numbers for efficiency and sizes.

So as a possible solution we maybe have a good candidate now it seems.
