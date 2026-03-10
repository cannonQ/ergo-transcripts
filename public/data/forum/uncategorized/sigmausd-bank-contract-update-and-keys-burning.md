---
title: SigmaUSD bank contract update and keys burning
description: 'ErgoForum discussion: SigmaUSD bank contract update and keys burning'
tags:
- addresses
- box
- ergo-explorer
- ergoforum
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/sigmausd-bank-contract-update-and-keys-burning/4874
created: '2024-10-08'
last_activity: '2025-02-04'
posts_count: 7
views: 395
likes: 29
glossary_hits:
- Addresses
- Box
- Ergo Explorer
- SigmaUSD
---

# SigmaUSD bank contract update and keys burning

> **Forum thread:** [https://ergoforum.org/t/sigmausd-bank-contract-update-and-keys-burning/4874](https://ergoforum.org/t/sigmausd-bank-contract-update-and-keys-burning/4874)
> **Category:** Uncategorized | **Created:** 2024-10-08 | **Posts:** 7 | **Views:** 395

**Related concepts:** Addresses, Box, Ergo Explorer, SigmaUSD

---

### Post #1 — @kushti (2024-10-08)

After checking update script box of SigmaUSD bank ( [Erg Explorer - Ergo blockchain explorer](https://ergexplorer.com/addresses#VLyjpv3dse3PbatT83GnDkBQasGqY52dAEdi9XpXhuSUn1FS1Tm7XxtAgmBiqY9pJXtEAsDKwX9ygSjrFu7vnUQZudhC2sSmxhxqgD3ZxJ2VsGwmPG77F6EiEZhcq71oqEq31y9XvCCXL5nqqszdENPAVhu7xT296qZ7w1x6hmwdh9ZE89bjfgbhfNYopoqsCaNLWYHJ12TDSY93kaGqCVKSu6gEF1gLpXBfRCnAPPxYswJPmK8oWDn8PKrUGs3MjVsj6bGXiW3VTGP4VsNH8YSSkjyj1FZ9azLsyfnNJ3zah2zUHdCCqY6PjH9JfHf9joCPf6TusvXgr71XWvh5e2HPEPQr4eJMD4S96cGTiSs3J5XcRd1tCDYoiis8nxv99zFFhHgpqXHgeqjhJ5sPot9eRYTsmm4cRTVLXYAiuKPS2qW5) ), it seems there is need to use it , otherwise it will be storage-rented in ~6.5 months (so DarkSide didnt think about putting enough Ergs to the box, most likely, deployment script by scalahub was done in that way).

Current update key holders are:

* Luivatra
* anon-real
* anon2020s
* mgpai
* kushti

And then, there is need to decide what to bring to the update. Possible options are:

* update to the same code just , put something like 100 ERG into update script box to have in untouched for next 500 years (just in case), optionally, burning update keys as well
* update to the code without update functionality (similar to burning update keys)
* update to version with minting limits [sigmausd/contracts/v2/bank.es at master · kushti/sigmausd · GitHub](https://github.com/kushti/sigmausd/blob/master/contracts/v2/bank.es)
* any other options?

Let’s vote, update in the testnet and then in the mainnet!

---

### Post #2 — @Luivatra (2024-10-09)

History has proven that the current setup is not beneficial to sigrsv holders. You could argue that they should not just mint and hold but it is too easy to be outplayed by whale games at the moment. I vote for the version with minting limits.

---

### Post #3 — @anon_real (2024-10-11)

I’m for the third option, putting a limit for each oracle epoch.

---

### Post #4 — @mgpai (2024-10-13)

I vote for the third option of putting a limit.

---

### Post #5 — @anon2020s (2024-10-16)

I vote for the third option to put minting limits,  
and propose burning update keys after ~6 months.

---

### Post #6 — @Richi (2024-11-27)

I’m in favor of burning keys with no changes to the protocol (add a few ERGs to the updated script box).

Do you like living in societies where the government wants to regulate everything? I don’t. This is definitely against the crypto ethos.  
Are you afraid of attacks? Use an alternative, much safer design. I think this extra babysitting is harmful and goes against Ergo’s ethos about knowing your assumptions.

---

### Post #7 — @Richi (2025-02-04)

The current SigUSD is an interesting DeFi protocol—I see plenty of people playing with it. I don’t believe it makes sense to turn it into a full-fledged stablecoin protocol given the myriad of issues it presents. Instead, it should remain an alternative DeFi protocol for those who are interested. The more such protocols we have in the ecosystem, the richer our DeFi experience becomes.

One parameter I would change is the fee for SigRSV. Currently, both SigUSD and SigRSV incur a 2% fee for minting and redeeming, but these fees are not equivalent in effect. With reserves starting at around 400%, the initial conditions for long and short positions are unbalanced. For a short position on SigUSD to break even, the price of ERG would need to drop by 4% (2% + 2%). In contrast, a long position (minting SigRSV) would require the ERG price to rise by 16% (calculated as (2% + 2%) × 4) or sometimes even more.

Since the protocol is designed to incentivize reserve accumulation, these fee settings are fundamentally flawed. I recall posting on a forum a while back about the need to lower the fee for SigRSV. If the fee were reduced to 0.75% instead of 2%, the break-even point for longs would be a 6% price change. Although this is still higher than that for short positions, it would at least encourage more participation in the protocol.

In summary, as an experimental protocol, SigUSD is difficult to transform into a fully functional stablecoin. Its design lacks scalability, and its implementation is fraught with problems. However, by improving the conditions for long positions, the protocol could become more engaging—and, more importantly, a fairer DeFi experiment—by truly encouraging participants to take risks. Under the current parameters, SigRSV holders have little hope beyond relying on passive income and betting on short-sellers to fail. There is significant potential to make the protocol much more exciting.

Additionally, consider burning the keys and reducing the Reserve Ratio from 400% to 300%—this change would also benefit longs. If these adjustments are simply a matter of updating parameters rather than overhauling the system, then the proposed changes are as follows:

* Change the RR from 400% to 300%
* Reduce the minting/redeeming fee for SigRSV from 2% to 0.75%
* Burn the keys

With these modifications, even the sluggish oracle would become a feature rather than a bug. Overall, these changes would make the protocol more engaging—and, most importantly, fairer.
