---
title: Large Crowdfunding Campaigns
description: 'ErgoForum discussion: Large Crowdfunding Campaigns'
tags:
- ergoforum
- ergoscript-context
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/large-crowdfunding-campaigns/83
created: '2019-09-13'
last_activity: '2019-09-13'
posts_count: 1
views: 464
likes: 1
glossary_hits:
- ErgoScript context
- Transaction
---

# Large Crowdfunding Campaigns

> **Forum thread:** [https://ergoforum.org/t/large-crowdfunding-campaigns/83](https://ergoforum.org/t/large-crowdfunding-campaigns/83)
> **Category:** Uncategorized | **Created:** 2019-09-13 | **Posts:** 1 | **Views:** 464

**Related concepts:** ErgoScript context, Transaction

---

### Post #1 — @jasondavies (2019-09-13)

I was thinking about how to handle the case where more than ~22,000 individual pledges are made to a campaign. In this case, it’s not possible to collect all pledges in one spending transaction, since the maximum number of inputs is ~22,000. This could potentially be an issue, as the script requires that the spending transaction claims at least the target amount.

Worst case scenario: the campaign is in fact fully funded, but the target amount cannot be achieved in one spending transaction; for example a target amount of 10,000 ERG and 100,000 pledges of 0.1 ERG.

One workaround could be for the project owner to temporarily donate an additional amount as part of the first spending transaction (along with ~22,000 other inputs) to achieve the target for that transaction, and then withdraw this temporary amount afterwards.

Of course, it’s much more likely that the largest pledges can be claimed first and they will achieve the target amount in the first spending transaction.

Note that subsequent spending transactions can then “re-spend” this first claimed target amount while including the smaller pledges.
