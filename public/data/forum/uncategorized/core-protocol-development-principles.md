---
title: Core protocol development principles
description: 'ErgoForum discussion: Core protocol development principles'
tags:
- autolykos
- ergoforum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/core-protocol-development-principles/4866
created: '2024-09-29'
last_activity: '2024-10-01'
posts_count: 2
views: 223
likes: 3
glossary_hits:
- Autolykos
---

# Core protocol development principles

> **Forum thread:** [https://ergoforum.org/t/core-protocol-development-principles/4866](https://ergoforum.org/t/core-protocol-development-principles/4866)
> **Category:** Uncategorized | **Created:** 2024-09-29 | **Posts:** 2 | **Views:** 223

**Related concepts:** Autolykos

---

### Post #1 — @kushti (2024-09-29)

I think it is utterly important to stick to principles in core development as well, otherwise, development would be just a meaningless race for hypish nonsense on top of people’s wallets, and without respecting security of those even. And principles of core development should continue basic values and principles provided in the Ergo Manifesto.

And those principles are:

* flat p2p network (at least in theory, miners etc can do auxiliary networks like done in Bitcoin)
* non breaking and research driven protocol development
* prioritizing non consensus (eg p2p layer) developments over consensus, especially when outcomes are the same or similar
* avoid introducing new security or trust assumptions in the core protocol (new cryptographic primitives, especially with stronger assumptions etc)

---

### Post #2 — @kushti (2024-10-01)

And as a consequence of non-breaking protocol development, and also to allow free markets to be built around known core protocols, nature of consensus protocol (proof-of-work), and also Proof-of-Work function (Autolykos 2) should be untouched.
