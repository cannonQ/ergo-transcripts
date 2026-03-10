---
title: Mining setup will not support multiple two 3060 GPU's. Please help
description: 'ErgoForum discussion: Mining setup will not support multiple two 3060
  GPU''s. Please help'
tags:
- autolykos
- ergoforum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/mining-setup-will-not-support-multiple-two-3060-gpus-please-help/1561
created: '2021-05-31'
last_activity: '2021-10-08'
posts_count: 7
views: 1440
likes: 2
glossary_hits:
- Autolykos
---

# Mining setup will not support multiple two 3060 GPU's. Please help

> **Forum thread:** [https://ergoforum.org/t/mining-setup-will-not-support-multiple-two-3060-gpus-please-help/1561](https://ergoforum.org/t/mining-setup-will-not-support-multiple-two-3060-gpus-please-help/1561)
> **Category:** Uncategorized | **Created:** 2021-05-31 | **Posts:** 7 | **Views:** 1440

**Related concepts:** Autolykos

---

### Post #1 — @khan (2021-05-31)

Ok so I recently bought two 3060’s and plugged them both into my PC.  
One of the cards reads 100mh/s and the other 50mh/s (ergo mining) using NBMiner although the result is the same on NanoMiner.

If I have just one of my 3060’s and my old 1060, then I get 103mh/s and 34mh/s.  
But if I put both of my 3060’s and no 1060 then I get the above mentioned hashrate.  
Ive tried moving the gpus around and they both work normally when paired with my 1060.  
They even all work if I have all 3 cards in at normal has rates (100mh/s for the 3060’s and 30mh/s for the 1060) but I dont have a riser and they overheat quickly. Only tried this once.

My previous setup was just one EVGA 1060 6gb for gaming.  
Now IF I have all 3 cards plugged in together, the hash rates are normal!  
BUT, if I have only my two 3060’s in then the hash rates go all wonky and my wattage goes up and down like a yoyo.

I have tried literally everything I can think of for over a week now.

* Uninstalled drivers a billion times
* Searched for BIOS settings nothing works
* Tried every configuration in my actual PC to see if its a hardware issue

Windows 10  
Zotac 12gb 3060 - **Driver** 27.21.14.6172  
Asus 12gb TUF 3060 - **Driver** 27.21.14.6172

MOBO - Asus P10-WS \*\* Most recent driver and BIOS\*  
RAM - 16gb G SKill - 3200mhz  
CPU - i7 7700k  
M.2 drive  
1000w Power

Also, when I try to overclock them, it actually lowers my hash rate and ive read that my memory clock timing is off or something.  
At this point ive probably spent about 20 hours searching every possible thing I can imagine with no progress.

Iv’e come to a conclusion that it is a software issue but cant find anything anywhere to solve this.  
Any ideas?

Thank you!!!

---

### Post #2 — @Tronox (2021-06-01)

As far as i know Nvidia restricted the 3060 for mining, dropping the hashrate to the half after a few minutes.

It was solved with some drivers you may actually have, but even with them i have read many posts which claim when mining with more than one 3060 at once the restrictions are only skipped for the first one.

I thought it only affecfed ethash, but maybe it’s happening with autolykos as well.

I may be wrong but try mining with the 3060s in different rigs, maybe it could solve your problem.

I’m using 3070s so i can’t help you much.

Good luck.

---

### Post #3 — @ryansukardi (2021-06-02)

[![Screenshot_2021-06-02-13-52-27-294_com.anydesk.anydeskandroid](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/ec50a0464d218d0079b90cc0ac87db0137d94553_2_690x345.jpeg)

Screenshot\_2021-06-02-13-52-27-294\_com.anydesk.anydeskandroid2160×1080 393 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/ec50a0464d218d0079b90cc0ac87db0137d94553.jpeg "Screenshot_2021-06-02-13-52-27-294_com.anydesk.anydeskandroid")

check your motherboard pcie support, is it running at x8 or x4 if you plug 2 gpu  
and use nvidia 470.05 driver  
I’m using asrock x79 extreme3, and it can run at x8 with 3 gpu so im fine

---

### Post #4 — @Hoholok (2021-06-18)

У меня стоят 7 штук rtx 3060ю Копаю ERGO/ Все стабильно работает. Драйвера 470.05

---

### Post #5 — @Noctilux50mm (2021-06-18)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/khan/48/537_2.png) khan:

> P10

Your motherboard doesn’t have enough PCIE lanes available if you’re using a M.2 since they are connected through PCIE. Your MB also does not come with a PLX chip so I think you’re limited to only 16 or 20 lanes

---

### Post #6 — @Geeon (2021-10-07)

I know how you feel. I was mining eth using a gtx 1660ti on a Win PC and then I bought a new rtx 3060. I have 2 pcie slots so I moved the new 3060 into pcie 2 and the old 1660 into pcie 3. It improved the hash rate for the 1660 but the 3060 keeps crashing no matter what! It’s interesting that MS task manager can read the temp of the 1660 but does not notice that it’s 100% busy, although it does see activity on the 3060,

---

### Post #7 — @Ergosmergo (2021-10-08)

Do away with the M.2 save yourself a little bit of lane bandwidth try using an SSD or USB stick and see if the issue goes the issue of hash deviations could also be with Nvidia restricting hash rates kind of a shitty move from Nvidia to limit a product true ability. I was going to buy some cards from Nvidia until the news came of the mining restrictions now I am focused on mainly buying older cards like RX series and 1060, 1070, 1080 I’m trying to stay away from the RTX series unless I find them cheap and I will focus on getting some Vega 56 in the future if any come up at a good price.
