---
title: Ergo Mining - Unstable power (random peaks)
description: 'ErgoForum discussion: Ergo Mining - Unstable power (random peaks)'
tags:
- autolykos
- ergoforum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mining-unstable-power-random-peaks/1207
created: '2021-05-15'
last_activity: '2021-06-22'
posts_count: 15
views: 4226
likes: 6
glossary_hits:
- Autolykos
---

# Ergo Mining - Unstable power (random peaks)

> **Forum thread:** [https://ergoforum.org/t/ergo-mining-unstable-power-random-peaks/1207](https://ergoforum.org/t/ergo-mining-unstable-power-random-peaks/1207)
> **Category:** Uncategorized | **Created:** 2021-05-15 | **Posts:** 15 | **Views:** 4226

**Related concepts:** Autolykos

---

### Post #1 — @Gurdil (2021-05-15)

Hi all,

I mined Ergo for few days now and I saw somthing strange : my power conumption is not stable and there are random power peaks. When it’s stable, the rig can run aroung 360 W, and sometimes it raise to 500 W for few minutes or seconds, and each cards go from 60W to 85/90 W… Hashrate stay always stable.  
The problem is : my objectif is to set more cards (~60W / card) and these power peaks could exceed my PSU max power… I tried to set max power to 70W but not applcable for AMD RX I guess.  
I tried with Nanopool & HeroMiners, same problem. When I mine ETC, power stay stable. See below :  

[![Power Ergo](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/2b7e9275c9978dec06693bec7eb8c76faa35cccf_2_668x500.jpeg)

Power Ergo1239×927 182 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/2b7e9275c9978dec06693bec7eb8c76faa35cccf.jpeg "Power Ergo")

Thanks for your help !

---

### Post #2 — @LKL (2021-05-15)

Hi! I having the same problem with the same gpu’s. Could you solve it?

---

### Post #3 — @V8Power (2021-05-15)

I think its just higher load when generating the DAG

---

### Post #4 — @Gurdil (2021-05-18)

So everybody has this kind of peaks and unstable power when mining ?  
It mean you need almost 40% higher PSU just for several seconds per day ?!

---

### Post #5 — @whirleyes (2021-05-19)

try teamredminer. i just recently switch to it so now monitoring the stability of it.

with srbminer, my rig occasionally have the power spike but hashrate was constant. as with trm, the power become constant but hasrate now got fluctuation. hasrate reported at pool did not change much

---

### Post #6 — @hesoyama (2021-05-19)

I started mining ERGO a few hours ago with teamredminer on nanopool and noticed the same problem. I noticed that the power peak occurs for a split second only during the generation of the table. Apparently, this is a feature of the autolykos algorithm and there is nothing you can do about it.

normal mining

[![normal](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/4840b173cc3f60aadb7f0034b5e06935758c41f6.png)

normal994×828 31.3 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/4840b173cc3f60aadb7f0034b5e06935758c41f6.png "normal")

generating table

[![generating table](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/4726c63243f05bde50688b513e680f9fa49e1ade.png)

generating table1040×827 30.3 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/4726c63243f05bde50688b513e680f9fa49e1ade.png "generating table")

(temporary tuning)

*Edit.*  
By the way, I do not think that such sharp temperature changes are harmless for the GPU chip (about 5-7 degrees there and back in a couple of seconds several times an hour). I would like the developers to pay attention to this.

*UPD.*  
I tested with all available miners and pools - the result is the same.  
Not cool. My cards are no longer young and I am worried about their health.

*UPD2.*  
I found the parameter --autolykos\_slowdown=[0-100] for TRM in the discord TRM chat, it helped to solve the problem, but the average hashrate may drop a little. Anyway, now I’m happy.

---

### Post #7 — @sdcvoltaic (2021-06-07)

Yeah I think the same thing

---

### Post #8 — @sdcvoltaic (2021-06-07)

![](https://avatars.discourse-cdn.com/v4/letter/h/7ba0ec/48.png) hesoyama:

> –autolykos\_slowdown=[0-100]

If you dont mind me asking what cards are you using to mine and what are the OC settings you’re using?

---

### Post #9 — @0R8174L (2021-06-08)

Would Nvidia GPUs do the same thing?

---

### Post #10 — @hesoyama (2021-06-14)

My final stable tuning for each card  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/70b52399eff2cde75ec65144aba145b5c1ba0a78_2_690x373.png)

image1213×657 104 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/70b52399eff2cde75ec65144aba145b5c1ba0a78.png "image")

---

### Post #11 — @sdcvoltaic (2021-06-17)

I noticed all GPUs have different undervolts, is that a HiveOS feature? or did you manually go through each? I use SMOS currently

---

### Post #12 — @Arki83 (2021-06-17)

The slight temp spike on the cards shouldn’t really be an issue as long as you are not exceeding the safe temps for the card, which based on your pic you are well below. For the RX 4xx/5xx cards, it is 80ºc.

---

### Post #13 — @hesoyama (2021-06-20)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/sdcvoltaic/48/663_2.png) sdcvoltaic:

> or did you manually go through each?

I tuned the minimum voltage for each card, on which they are able to work without errors and falls.

![](https://avatars.discourse-cdn.com/v4/letter/a/e19b73/48.png) Arki83:

> For the RX 4xx/5xx cards, it is 80ºc.

I know, but sharp and frequent temperature changes are the most destructive for chips, no matter how high or low they are. Without the –autolykos\_slowdow parameter, the temperature changes by 5-7 degrees for a few seconds each time the table is rebuilt (a new block is found), that is, approximately every 2 minutes. My cards are over 3 years old and I want to extend their life as long as possible, so I try to keep them around 55 degrees without any drops.

---

### Post #14 — @sirvok (2021-06-21)

Hi could you please share your value for –autolykos\_slowdow parameter ?

---

### Post #15 — @hesoyama (2021-06-22)

–autolykos\_slowdown=30 is fine for me
