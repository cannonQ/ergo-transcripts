---
title: Any plan for deterministic signatures?
description: 'ErgoForum discussion: Any plan for deterministic signatures?'
tags:
- ergoforum
- sigmastate-interpreter
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/any-plan-for-deterministic-signatures/4490
created: '2023-09-20'
last_activity: '2023-09-22'
posts_count: 3
views: 235
likes: 9
glossary_hits:
- Sigmastate interpreter
---

# Any plan for deterministic signatures?

> **Forum thread:** [https://ergoforum.org/t/any-plan-for-deterministic-signatures/4490](https://ergoforum.org/t/any-plan-for-deterministic-signatures/4490)
> **Category:** Uncategorized | **Created:** 2023-09-20 | **Posts:** 3 | **Views:** 235

**Related concepts:** Sigmastate interpreter

---

### Post #1 — @scalahub (2023-09-20)

Is there any plan for deterministic signatures in Ergo similar to RFC6979 for DSA? If I’m not mistaken, this can mitigate vulnerabilities in flawed implementations that reuse secrets.

---

### Post #2 — @deathgripson (2023-09-22)

If it isn’t already being used to generate nonces then it probably should be.  
<https://www.rfc-editor.org/rfc/rfc6979>

However this is something generally done at the cryptographic protocol level, meaning this would need to be an update to sigmastate interpreter.

For reference Bitcoin core has had this since version 0.10.0 and their cryptographic library lib-secp256k1 implements this as a standard for nonces.

The RFC describes the hash of the private-key and the message as a valid nonce.

Source: <https://bitcoin.stackexchange.com/questions/59083/why-the-signature-of-the-same-message-changes-in-some-wallets-but-not-all>

---

### Post #3 — @kushti (2023-09-22)

I think this is interesting feature to be considered. Implementation would touch DLogInteractiveProver,firstMessage() and DiffieHellmanTupleInteractiveProver.firstMessage(), and also require for some refactoring to pass message to the methods.
