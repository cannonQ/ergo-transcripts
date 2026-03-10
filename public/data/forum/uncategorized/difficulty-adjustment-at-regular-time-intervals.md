---
title: Difficulty adjustment at regular time intervals
description: 'ErgoForum discussion: Difficulty adjustment at regular time intervals'
tags:
- difficulty-adjustment
- eip
- ergoforum
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/difficulty-adjustment-at-regular-time-intervals/3907
created: '2022-09-22'
last_activity: '2022-10-01'
posts_count: 10
views: 712
likes: 10
glossary_hits:
- Difficulty adjustment
- EIP
- Full node
---

# Difficulty adjustment at regular time intervals

> **Forum thread:** [https://ergoforum.org/t/difficulty-adjustment-at-regular-time-intervals/3907](https://ergoforum.org/t/difficulty-adjustment-at-regular-time-intervals/3907)
> **Category:** Uncategorized | **Created:** 2022-09-22 | **Posts:** 10 | **Views:** 712

**Related concepts:** Difficulty adjustment, EIP, Full node

---

### Post #1 — @morphic (2022-09-22)

One observation about diff adjustment.  
The main issue with the current diff adjustment is its *asymmetry* and not the algorithm (or specific formula).

It quickly adjusts to hash rate increase, but it is disproportionately long to adjust when miners leave. This is because the moment of recalculation depend on block number and the more miners leave, the longer we have to wait.

This creates strong incentive to jump in after Diff goes down and jump out after it gets high.

As long as we have the market of mineable coins, most hash power will chase the most profitable coin, so we cannot prevent coin-hopping (and I don’t think we should even try).

Profit aside, this asymmetry also becomes a weakness because performance depends on market conditions (throughput and latency both depend on block times, and they become disproportionately long). Performance-wise it may be even better when the blocks are fast. But when the blocks are slow, the throughput decreases proportionally and may become **unexpected** bottleneck.

What can we do?  
We don’t need to change the algorithm (or formula), we need to change the ***time***.  
Instead of using epoch boundaries, we need to use a *fixed time interval* of the recent block history (say 1 day, but can be adjusted by votes) based on block timestamps for the formula calculation.  
For fast adjustments we need to recalculate every K (e.g. 10) blocks so it will be easy to decide when the adjustment will take place and the adjustment will be more dynamic.

This is hybrid approach: 1) re-adjustments are frequent and fast and 2) every re-adjustment involves a sliding window of large number of blocks (e.g. 24 hours) to smooth the diff curve out.

UPDATE:  
One additional parameter can be added to avoid potential attacks. BlockOffset - is an offset of 24h sliding window of blocks used for recalculation of new difficulty.  
If TOP is the last on-chain block then the sliding window of blocks is [TOP - BlockOffset - 24h, TOP - BlockOffset].  
BlockOffset can be 1, 2, 3 etc.  
This parameter will allow to offset the window back into the history so that miners don’t have any influence on the adjustment algorithm.

---

### Post #2 — @kushti (2022-09-22)

A block could be accepted and propagated by a node if its timestamp is no more than 20 minutes in future from node’s local clocks. Thus you can not have K like 20 minutes (10 blocks), time window should be much bigger than max drift to avoid drifting attacks.

Any modelling results to share? Especially with current least squares method.

---

### Post #3 — @morphic (2022-09-23)

There are two parameters in the proposal above.

1. 24h sliding window of most resent blocks (based on timestamps). This window is used for next difficulty calculation. Similar formula to what is used now.
2. 10 blocks interval which is used to do regular re-adjustements.

The possible 20 minutes deviation of block timestamp is not a problem when we consider 24h window of blocks which are already in chain history.

---

### Post #4 — @kushti (2022-09-23)

I think the main drawback may be that this proposal could incentivize miners to exitat certain time till next time window, and then enjoying reduced difficulty by not doing any work on Ergo even (100% hashrate can exit, theoretically), thus hopping may be amplified.

---

### Post #5 — @Francos (2022-09-23)

I’m sry, but… it’s alredy like this.

That’s why hashrate now is so low

---

### Post #6 — @morphic (2022-09-23)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> incentivize miners to exitat certain time till next time window

The next time window is just 10 blocks (and this parameter can be reduced) vs 1024 blocks of the current algorithm.  
Note, this window is not used for calculations, it is the pace of the adjustments.

---

### Post #7 — @kushti (2022-09-23)

How does that help in mitigating the issue that you are allowing to lower diff without generating blocks ?

So if hashrate is rational, it can have amplified profit from coin-hopping, I guess you can reuse and extend model from <https://eprint.iacr.org/2017/731.pdf> to get more precise results on that.

---

### Post #8 — @morphic (2022-09-23)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> you are allowing to lower diff without generating blocks

Why you think it is the case, I don’t understand?

---

### Post #9 — @morphic (2022-09-23)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> I guess you can reuse and extend model from <https://eprint.iacr.org/2017/731.pdf> to get more precise results on that.

The model is based on using fixed number of previous epochs, where as proposed method relies on fixed time window into history (24 hours).  
And depending on hash rate this window will include different number of blocks.  
The proposed method don’t rely on epochs boundaries and epochs themselves.

---

### Post #11 — @TypoDaPsycho (2022-10-01)

What if the adjustment happened every 32 blocks (or 64) instead of 10 blocks like originally proposed? At what point is the ~~time window~~ adjument period considered big enough to avoid potential for drifting attacks?

This asymmetry described by morphic will still exist with EIP-37, or no? Why do we expand on Bitcoin model with boundaries being epochs, made of blocks; instead of using fixed time intervals (timestamps) as boundaries like is done with other modern DAAs?
