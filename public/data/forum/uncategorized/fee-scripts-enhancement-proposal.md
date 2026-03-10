---
title: Fee Scripts Enhancement Proposal
description: 'ErgoForum discussion: Fee Scripts Enhancement Proposal'
tags:
- eip
- ergoforum
- minimum-transaction-fee
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/fee-scripts-enhancement-proposal/669
created: '2021-02-16'
last_activity: '2021-02-16'
posts_count: 2
views: 603
likes: 2
glossary_hits:
- EIP
- Minimum transaction fee
- Transaction
---

# Fee Scripts Enhancement Proposal

> **Forum thread:** [https://ergoforum.org/t/fee-scripts-enhancement-proposal/669](https://ergoforum.org/t/fee-scripts-enhancement-proposal/669)
> **Category:** Uncategorized | **Created:** 2021-02-16 | **Posts:** 2 | **Views:** 603

**Related concepts:** EIP, Minimum transaction fee, Transaction

---

### Post #1 — @kushti (2021-02-16)

Transaction fee script is not enforced by the Ergo protocol. Currently, default block assembly (everyone is still using) looks for script which is is allowing to spend to (miner’s pubkey && 720 blocks lock).

With non-outsourceability switched off, there’s no need for such script I guess. So I propose to do EIP and modify block assembly to allow for TRUE script also.

This allows to save some space on the chain and do faster verification.

However, old script will be supported also.

---

### Post #2 — @robert (2021-02-16)

Makes sense, good idea.
