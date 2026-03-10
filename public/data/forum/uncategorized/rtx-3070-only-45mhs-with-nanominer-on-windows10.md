---
title: RTX 3070 - only 45MH/s with nanominer on Windows10
description: 'ErgoForum discussion: RTX 3070 - only 45MH/s with nanominer on Windows10'
tags:
- autolykos
- ergoforum
- ergoscript
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/rtx-3070-only-45mh-s-with-nanominer-on-windows10/1227
created: '2021-05-16'
last_activity: '2021-05-17'
posts_count: 3
views: 1154
likes: 1
glossary_hits:
- Autolykos
- ErgoScript
---

# RTX 3070 - only 45MH/s with nanominer on Windows10

> **Forum thread:** [https://ergoforum.org/t/rtx-3070-only-45mh-s-with-nanominer-on-windows10/1227](https://ergoforum.org/t/rtx-3070-only-45mh-s-with-nanominer-on-windows10/1227)
> **Category:** Uncategorized | **Created:** 2021-05-16 | **Posts:** 3 | **Views:** 1154

**Related concepts:** Autolykos, ErgoScript

---

### Post #1 — @Ergonomic (2021-05-16)

Hi. I am new here.

I just bought an RTX 3070 and want to do some ERGO mining, but seems that I can get only 45MH/s maximum, instead of 145MH/s as I do see to others.

I am using “nanominer-windows-3.3.5-cuda11” om a Windows10 PC.

My “config.ini” file looks like this:

```ergoscript
[autolykos]
wallet=my_wallet_address
coin=ERG
rigname=3070
email=PASSWORD
```

I don’t understand what I am doing wrong that I do get so low MH/s? Some help will be appreciated. Thank you.

---

### Post #2 — @Ergonomic (2021-05-16)

I found a solution to jump from 45MH/s to 170MH/s by downgrading the Nvidia drivers to v457.09.

---

### Post #3 — @Daytrader (2021-05-17)

I had more success tuning my 3070 using the Nicehash OCTuner than with afterburner. It locks in core speed and nets lower power consumption.

So as a config-workaround I open Nicehash quickminer which sets the min/max card parameters I already had set there, but don’t mine with it. Just leave it open in the background while mining with another miner app.  
The highest hash I was able to achieve was at 1650 core, max mem (8220 for me)  
Max efficiency was around 1400 core, Max  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/8b645fae9e319b81a90ed5ab3b19cfd8318b09ad_2_666x500.jpeg)

image2016×1512 1.65 MB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/8b645fae9e319b81a90ed5ab3b19cfd8318b09ad.jpeg "image")

  
mem.
