---
title: Attaching arbitrary conditions to unconfirmed transactions
description: 'ErgoForum discussion: Attaching arbitrary conditions to unconfirmed
  transactions'
tags:
- box
- context-extension
- ergo-foundation
- ergoforum
- ergoscript
- ergoscript-context
- mempool
- schnorr-signatures
- sigmastate-interpreter
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/attaching-arbitrary-conditions-to-unconfirmed-transactions/214
created: '2020-05-15'
last_activity: '2024-10-29'
posts_count: 4
views: 882
likes: 12
glossary_hits:
- Box
- Context extension
- Ergo Foundation
- ErgoScript
- ErgoScript context
- Mempool
- Schnorr signatures
- Sigmastate interpreter
- Transaction
---

# Attaching arbitrary conditions to unconfirmed transactions

> **Forum thread:** [https://ergoforum.org/t/attaching-arbitrary-conditions-to-unconfirmed-transactions/214](https://ergoforum.org/t/attaching-arbitrary-conditions-to-unconfirmed-transactions/214)
> **Category:** Uncategorized | **Created:** 2020-05-15 | **Posts:** 4 | **Views:** 882

**Related concepts:** Box, Context extension, Ergo Foundation, ErgoScript, ErgoScript context, Mempool, Schnorr signatures, Sigmastate interpreter, Transaction

---

### Post #1 — @jasondavies (2020-05-15)

This is motivated by the “Short-lived Unconfirmed Transactions: Paying for Coffee” example in section 2.1 of the “Advanced ErgoScript Tutorial”:

```ergoscript
alice && HEIGHT <= getVar[Int](1).get
```

This contract allows Alice to pick an expiry height when they create a spending transaction, by specifying it as part of the context extension.

To make things more interesting, consider the following script:

```ergoscript
SigmaAnd(ProveDlog(alice), DeserializeContext(0, SSigmaProp))
```

(Unfortunately, I don’t think the ErgoScript compiler frontend supports `deserializeContext` at the moment, so the above is in Scala.)

Now, this allows Alice to specify an *arbitrary script* at spend time, such that the script must evaluate to `true` for it to be mined in a particular block.

The conditions most likely to be attached are those relating to the block header e.g. the block height as per the coffee example, but note that a minimum height can be set instead of a maximum height if this is useful (I’m not sure if this case would be immediately rejected from the mempool, however). Alice can specify `true` if they do not want any conditions at all.

The original concept of setting an expiry height on transactions is quite good, and even Zcash has a [built-in nExpiryHeight](https://github.com/zcash/zips/blob/master/zip-0203.rst) (set to 20 blocks), the main motivation being to provide more certainty for users: if their transaction is not confirmed with 20 blocks, then they probably need to resend, possibly with a higher fee.

Allowing completely arbitrary conditions to be set (other than an expiry height) for a spending transaction to be mined is probably not particularly useful (and the execution cost is almost definitely higher), but I thought it would be interesting nonetheless.

---

### Post #2 — @jasondavies (2020-05-15)

Another condition that could be attached to unconfirmed transactions is that the miner places particular votes (bribery!). This wouldn’t work at the moment, since votes do not form part of the context used to validate transactions by the mempool.

---

### Post #3 — @scalahub (2020-05-20)

I believe supplying script at run-time can be useful. For the coffee case, Alice has to store funds in a specially created box. This approach allows Alice to store funds in a “generic” box where she can add other conditions. One condition would obviously be `HEIGHT <= 1234` as in the coffee case, and she could add `HEIGHT >= 1234`, where the box can only be spent after a certain height for a different use-case.

There should be more interesting use-cases of specifying the script at run-time. Not sure exactly what what scripts can be supported… For instance, you probably cannot call `DeserializeContext` within the new script.

---

### Post #4 — @kushti (2024-10-29)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/jasondavies/48/17_2.png) jasondavies:

> `SigmaAnd(ProveDlog(alice), DeserializeContext(0, SSigmaProp))`

I think it becomes more interesting in multi-party setting, so

```ergoscript
`SigmaAnd(ProveDlog(alice), ProveDlog(bob), DeserializeContext(0, SSigmaProp))`
```

Then Alice and Bob may have spending contract which is being changing over time. Could be a foundation for L2 protocols.

Even more, if “Bob” is representing aggregated Schnorr signature, we may have Alice’s script execution being controlled per her agreement with a (big) federation

And finally, “executeFromVar” is going to be landed in ErgoScript now, in sigmastate interpreter&compiler library 5.0.14 [Finish executeFromVar implementation by kushti · Pull Request #976 · ergoplatform/sigmastate-interpreter · GitHub](https://github.com/ergoplatform/sigmastate-interpreter/pull/976)
