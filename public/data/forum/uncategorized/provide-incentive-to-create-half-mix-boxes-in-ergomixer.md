---
title: Provide incentive to create half-mix boxes in ErgoMixer
description: 'ErgoForum discussion: Provide incentive to create half-mix boxes in
  ErgoMixer'
tags:
- addresses
- box
- ergoforum
- ergomixer
- ergoscript-context
- native-tokens
- stealth-addresses
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/provide-incentive-to-create-half-mix-boxes-in-ergomixer/678
created: '2021-02-17'
last_activity: '2021-02-23'
posts_count: 3
views: 970
likes: 1
glossary_hits:
- Addresses
- Box
- ErgoMixer
- ErgoScript context
- Native tokens
- Stealth Addresses
---

# Provide incentive to create half-mix boxes in ErgoMixer

> **Forum thread:** [https://ergoforum.org/t/provide-incentive-to-create-half-mix-boxes-in-ergomixer/678](https://ergoforum.org/t/provide-incentive-to-create-half-mix-boxes-in-ergomixer/678)
> **Category:** Uncategorized | **Created:** 2021-02-17 | **Posts:** 3 | **Views:** 970

**Related concepts:** Addresses, Box, ErgoMixer, ErgoScript context, Native tokens, Stealth Addresses

---

### Post #1 — @scalahub (2021-02-17)

The usability of ergomixer is dependent on the existence of half-mix boxes.

However, creating such boxes has the effect of waiting till someone uses such boxes.

In order to provide incentive to create half-mix boxes, we can use the idea of [“stealth addresses”](https://www.ergoforum.org/t/stealth-address-contract/255) by [@kushti](/u/kushti)

Recall that both half-mix box and stealth address rely on some `g^x` for secret `x` known to the owner of the half-mix box.

Let some user, say Carol, be the one providing incentive. She will randomly pick some (or all) of the existing half-mix boxes and use their `g^x` to make stealth payments to all the owners.

The half-mix box owners can then accumulate and use those stealth payments in any way they choose; in particular they can use them to participate in the mix process again.

If some owners forget to pick such stealth payments, those boxes will be lying unspent and essentially wasted. In order to avoid this, Carol can make the stealth payments protected by the script:

`stealth_owner || (height > timeOut && Carol)`, which will allow Carol to collect such unused payments after some `timeOut` height. The timeOut is not really necessary… (she can just add `|| Carol`)

---

### Post #2 — @scalahub (2021-02-20)

Actually this is not a good idea from a privacy viewpoint. Such stealth payments can be used by Carol to deanonymize users because she knows which stealth payment boxes and which half-mix boxes are linked. Hence such stealth payments should never be spent by the mix participants and in particular should never be used in the mixing process.

---

### Post #3 — @kushti (2021-02-23)

I guess incentivization should be done a bit differently here. Assume that there’s some Privacy Reward Token (PRT). Then to get 1 PRT, you need to send to stealth pool, where withdrawal has additional optional contract with following conditions:

* box being spent after some time only (timestamping service would be useful here)
* box being spent to a mixing contract

Not sure if any conditions are needed for PRT.
