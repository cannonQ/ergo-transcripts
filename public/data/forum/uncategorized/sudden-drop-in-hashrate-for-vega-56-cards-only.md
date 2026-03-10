---
title: Sudden drop in Hashrate for Vega 56 cards only
description: 'ErgoForum discussion: Sudden drop in Hashrate for Vega 56 cards only'
tags:
- autolykos
- ergoforum
- ergoscript-context
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/sudden-drop-in-hashrate-for-vega-56-cards-only/2914
created: '2021-11-07'
last_activity: '2021-11-23'
posts_count: 8
views: 1845
likes: 2
glossary_hits:
- Autolykos
- ErgoScript context
---

# Sudden drop in Hashrate for Vega 56 cards only

> **Forum thread:** [https://ergoforum.org/t/sudden-drop-in-hashrate-for-vega-56-cards-only/2914](https://ergoforum.org/t/sudden-drop-in-hashrate-for-vega-56-cards-only/2914)
> **Category:** Uncategorized | **Created:** 2021-11-07 | **Posts:** 8 | **Views:** 1845

**Related concepts:** Autolykos, ErgoScript context

---

### Post #1 — @tarnwyn (2021-11-07)

Hello ran in to a weird problem today

Have a mixed rig with some polaris, 3060ti and vega 56 cards.

rebooted the rig today, had been running well for a few days. all of a sudden my vega 56 cards had a sudden drop in max hashrate, down from 180-170 to 130-120. the low hashrate is stable and i have absolutely no idea why.

have tried updating hiveos image and resetting oc’s, tried in both NBminer and teamredminer

anyone had any issues like this?

---

### Post #2 — @SRBeen (2021-11-08)

Autolykos changed some things especially reflects on Vegas. I had on 11 Vegas arround 190±7, now 135±7… Probably will move to ETH

---

### Post #3 — @TypoDaPsycho (2021-11-08)

There was a slight increase to memory requirement on Ergo, some miners weren’t prepared (although they were notified well-in-advance), TRM pushed an emergency update to account for this change and Vegas have been negatively impacted.

TRM is actively working on a fix & hopefully Vegas will be back hashing normally soon.

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png)
[Test vectors for increased N values](https://www.ergoforum.org/t/test-vectors-for-increased-n-values/2887) [Research and Development](/c/dev/research-and-development/7)

> On block 614,400 memory requirements of Autolykos2 will be increased. Miners are talking about “DAG size increase”, however, in case of Ergo this is not about a DAG, rather, a table.
> Dear miner software developers, please check the following test vector for valid PoW solutions for height 614,400 (with low diff of 16,384):
> height: 614400
> N: 70464240
> msg: 548c3e602a8f36f8f2738f5f643b02425038044d98543a51cabaa9785e7e864f
> b: 7067388259113537318333190002971674063283542741642755394446115914399301849…

---

### Post #4 — @tarnwyn (2021-11-08)

Wow ok, thanks so much for the info.

Well i guess im happy its not my hardware.

Have moved vegas to eth in the meantime. Hopefully there is an update soon.

---

### Post #5 — @TypoDaPsycho (2021-11-09)

Unfortunately, from what I’m now reading such update isn’t likely. At least not one that’ll restore Vegas to previous 185-200+ MH/s.

From what I understand, Vegas could pre-create & store four 2gb DAG tables, having 8gb memory. With the increase of Ergo’s table size above 2 gb this is no longer possible.

Screenshot from TRM discord channel

[![Screenshot_20211109-165931](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/e/e59db0596ced64c9c07e59cb1e90a61a5e34b2bd_2_236x500.png)

Screenshot\_20211109-165931720×1520 193 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/e/e59db0596ced64c9c07e59cb1e90a61a5e34b2bd.png "Screenshot_20211109-165931")

---

### Post #6 — @tarnwyn (2021-11-10)

Wow, what a shame. I bought a few vegas off ebay for the sole purpose of mining ergo. Guess I’ll go back to picking up 3060ti’s.

Oh well guess they are staying in the Eth rig for now. Getting about 51 Mh/s on eth. That’s about the max they are capable of right?

cheers for the info.

---

### Post #7 — @TypoDaPsycho (2021-11-15)

From what I’ve read, yes around there is max for Vegas on eth. Only ever mined Ergo myself though, so don’t rely on me for that info.

And yeah it sucks, whole strategy has to change and 3060ti is what I’m looking at now, instead of watching Vegas 24/7.

Vegas still good performers but market prices need to adjust accordingly (-30% roughly) for me to consider buying more.

One positive is my watts dropped from ~148 to ~122 according to HiveOS and TRM, I was able to restore some hashrate by increasing core further but the drop in efficiency wasn’t worth it to me.

---

### Post #8 — @lllllllllll (2021-11-23)

I never mined at the 180-200MH on the vegas, just 150MH, but the hashrate drop was still huge to me. The best I can do is bring them up to 129MH with higher core clocks, using the same < 100w power usage, which is still pretty great when you compare other cards on ergo. I was going to wait and see if team red miner could update and bring back the old hash rates, but I might just see what I need to do to get back at 150MH, regardless of the power usage, it is winter so
