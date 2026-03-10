---
title: Recent Token Burns - a discussion on how loss can be avoided as the community
  grows
description: 'ErgoForum discussion: Recent Token Burns - a discussion on how loss
  can be avoided as the community grows'
tags:
- box
- ergo-explorer
- ergoforum
- ergopad
- full-node
- native-tokens
- nautilus
- sigma-rust
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/recent-token-burns-a-discussion-on-how-loss-can-be-avoided-as-the-community-grows/3738
created: '2022-07-15'
last_activity: '2022-08-01'
posts_count: 7
views: 460
likes: 12
glossary_hits:
- Box
- Ergo Explorer
- ErgoPad
- Full node
- Native tokens
- Nautilus
- Spectrum
- Transaction
- sigma-rust
---

# Recent Token Burns - a discussion on how loss can be avoided as the community grows

> **Forum thread:** [https://ergoforum.org/t/recent-token-burns-a-discussion-on-how-loss-can-be-avoided-as-the-community-grows/3738](https://ergoforum.org/t/recent-token-burns-a-discussion-on-how-loss-can-be-avoided-as-the-community-grows/3738)
> **Category:** Uncategorized | **Created:** 2022-07-15 | **Posts:** 7 | **Views:** 460

**Related concepts:** Box, Ergo Explorer, ErgoPad, Full node, Native tokens, Nautilus, Spectrum, Transaction, sigma-rust

---

### Post #1 — @NoahErgo (2022-07-15)

Hello.

A few months ago I was testing a new centralized exchange app that integrated nautilus for swaps. I discovered that this app was not programmed properly due to it being built off [an outdated library](https://github.com/ergoplatform/ergo-js) that had not been deprecated. The developer saw this library, didn’t fully understand how native tokens worked and assumed that they would be default be sent to change box.

This is not the case, and all of my native token assets were burned as a result. Total value was worth roughly $15k at time of burn (many ergopad vesting, staking keys, NETA, some NFTs, etc.)

Nautilus integrated a burn warning and I was happy with this, life went on.

Now, last week another user accidentally burned 200+ NFTs totaling $30k in value due to an overflow bug in sigma rust. This issue has been patched and is being integrated now. Additionally, Nautilus is adding transaction overview to the send transaction form so that users can see what their wallet is doing.

This is all well and good, but I think there needs to be a serious conversation about what the end game is here. Currently as things stand, there is very little standing in the way of uneducated users and developers from making mistakes and losing a ton of value. Especially as new developers come into the community, I anticipate this continuing to happen if nothing is changed.

The issue that has been identified in the dev channel discussions on discord is that currently, the Node has an explicit “Assets To Burn” function where you have to specifically tell it you want to burn something. The explorer on the other hand does not have this functionality. If you don’t specify that you want some tokens routed to change, they will be burned by default. There is no safeguard for those tokens like what exists in the node.

I know Ilya from Ergodex team, and others, have proposed adding some changes to the explorer but I don’t know if this has been pursued yet. To me this seems like a major safety concern for the community - people are scared of losing their assets. If this can be changed in an elegant way, it should be.

---

### Post #2 — @Ergosmergo (2022-07-24)

In Ergo tokens cant be burnt the tokens would be reemitted later as part of the reemissions contract. There are lots of threads discussing this.

---

### Post #3 — @NoahErgo (2022-07-24)

You are missing the point. These were unintended burns causing people to lose value.

And anyway, you are not correct. In these cases the tokens were not directed to a new box - they are burned completely and will not be reemitted later.

---

### Post #4 — @Ergosmergo (2022-07-25)

Where do the burnt tokens go? It’s definitely an issue if the coins won’t be reemitted later. Could any security be put in place to stop outdated libraries from being used? there should definitely be a safeguard in place and I understand what your saying the burn is due to an error.

---

### Post #5 — @NoahErgo (2022-07-25)

They vanish. They don’t go anywhere. This is why I raised the issue as it presents a serious vulnerability when bugs/dev error arises.

---

### Post #6 — @Ergosmergo (2022-07-28)

yes, that is very serious thanks for raising this issue.

---

### Post #7 — @TypoDaPsycho (2022-08-01)

This needs to get more attention, I don’t want to panic anyone but there needs to be clear warnings on every social channel IMO.

I’m sure there’s better safeguards against these accidental token burns on the way. But until they arrive, we need to be making a concentrated effort to warn the community.
