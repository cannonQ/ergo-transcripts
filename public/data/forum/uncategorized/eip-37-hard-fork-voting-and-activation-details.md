---
title: EIP-37 hard-fork voting and activation details
description: 'ErgoForum discussion: EIP-37 hard-fork voting and activation details'
tags:
- difficulty-adjustment
- eip
- ergoforum
- ergoscript-context
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/eip-37-hard-fork-voting-and-activation-details/3989
created: '2022-09-28'
last_activity: '2022-09-29'
posts_count: 3
views: 1011
likes: 7
glossary_hits:
- Difficulty adjustment
- EIP
- ErgoScript context
---

# EIP-37 hard-fork voting and activation details

> **Forum thread:** [https://ergoforum.org/t/eip-37-hard-fork-voting-and-activation-details/3989](https://ergoforum.org/t/eip-37-hard-fork-voting-and-activation-details/3989)
> **Category:** Uncategorized | **Created:** 2022-09-28 | **Posts:** 3 | **Views:** 1011

**Related concepts:** Difficulty adjustment, EIP, ErgoScript context

---

### Post #1 — @kushti (2022-09-28)

After a lot of talks in the community about difficulty adjustment and EIP-37 (alternative difficulty adjustment algorithm, more reactive and not so bumpy , [EIP-37: Tweaking Difficulty Adjustment Algorithm by kushti · Pull Request #79 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/79) ), two new reference protocol client versions were released, supporting possible hard-fork if miners will vote for it:

* 4.0.100 supporting new difficulty adjustment algorithm (DAA) described in EIP-37, and its activation. It is possible to vote for new DAA with setting a value “6 = 2400” in the client config
* 4.0.101 is auto-voting for EIP-37 (as some pools asked for such a release)

For activation, voting for parameter #6 (input cost) is used. Please note that voting for a parameter may be started only every 1,024 blocks (on block with height % 1024 == 0). The closest height at the moment of writing when the voting  
may be started is 844,800 then. Please note that the voting will be started only if the first block (so 844,800) will contain the vote for EIP-37 activation (so vote for 6 in its header). The 4.0.1xx client is checking votes every 128 blocks(on a block with height % 128 == 1) and activates EIP-37 immediately if at least 232 blocks out of last 256 are supporting EIP-37 (by having vote for parameter #6 in a header). Thus earliest block where activation may happen (in case of >= 90.625% support) is #845,057 .

---

### Post #2 — @MrStahlfelge (2022-09-29)

How can API clients determine if a client is EIP37 compliant?

Checking appVersion is not explicit enough in my opinion, we should at least add a eip37Supported flag like we have eip27Supported

---

### Post #3 — @kushti (2022-09-29)

It seems that the protocol is not strict in regards with votes validation except for the first block of a voting epoch. Thus it is possible to vote even first vote in a voting epoch is not proposing it. The only thing needed is tweaking block candidate generation, so only miners willing to start voting in the middle of an epoch need to update.
