---
title: RTX 3060 giving only from 60 to 75 mh
description: 'ErgoForum discussion: RTX 3060 giving only from 60 to 75 mh'
tags:
- box
- ergoforum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/rtx-3060-giving-only-from-60-to-75-mh/1832
created: '2021-06-21'
last_activity: '2021-09-12'
posts_count: 4
views: 5215
likes: 1
glossary_hits:
- Box
---

# RTX 3060 giving only from 60 to 75 mh

> **Forum thread:** [https://ergoforum.org/t/rtx-3060-giving-only-from-60-to-75-mh/1832](https://ergoforum.org/t/rtx-3060-giving-only-from-60-to-75-mh/1832)
> **Category:** Uncategorized | **Created:** 2021-06-21 | **Posts:** 4 | **Views:** 5215

**Related concepts:** Box

---

### Post #1 — @Ouroboros (2021-06-21)

Hello guys, i’m new to the forum and new to Ergo. How are you doing? Hope your mining goes great.

So i have 2 rtx3060 (not ti) and from what i heard they should be giving 100/120mh but mine are basically giving around 70mh.  
The miner is NBminer and i’m using herominers for the servers.

Oh and the cards are not from this new generation of 30’s, they don’t have the LHR (i’m not sure if this is how you call it, basically that thing that reduces the hash rate), they are new, totally fresh out of the box, but they are the old version.

---

### Post #2 — @Ouroboros (2021-06-21)

Update:

Ok guys i fixed it, sorry for the post.  
I will explain just for some noobs like me that have the same problem or even worse.

Download geforce drivers 470.05  
Use HDD, which is a driver uninstaller, in safe mode. Uninstall the geforce drivers and when the pc restarts remove internet (usually for mining an ethernet cable is used so pretty easy, just remove the cable).  
When the pc turns on install the 470.05 drivers and when it asks if you want drivers+Experience select only drivers.  
There you go, max hashrate unlocked for RTX 3060 12gb.

Overclock

* Core Clock: +0 (don’t touch it)
* Memory Clock: +1300
* Power Limit: 65
* Temp Limit: 68 (it goes to 68 automatically for me)
* Fan Speed: i set it to auto because the cards are new, i don’t need much fan speed.

Right now i have:

* 49 temperature (very good, it is summer here)
* hashrate per card 122.5
* Power consumption 110w (actually very good on 3060)
* Valid 591, invalid 0, stale 0

Hope this helps!!

---

### Post #3 — @rookie (2021-08-05)

I can’t install 470.05 on my windows, my OS: win 10 home.

whats yours? i have the same problem as like you.

---

### Post #4 — @RafaelTheHutt (2021-09-12)

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/3b1f1ded40a5aa32df9e3dcfba7254236ab5b5b8_2_690x118.png)

image1296×223 30.3 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/3b1f1ded40a5aa32df9e3dcfba7254236ab5b5b8.png "image")
