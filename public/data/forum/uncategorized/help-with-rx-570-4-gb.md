---
title: Help with Rx 570 4 GB
description: 'ErgoForum discussion: Help with Rx 570 4 GB'
tags:
- autolykos
- ergoforum
- ergoscript
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/help-with-rx-570-4-gb/1304
created: '2021-05-19'
last_activity: '2021-08-05'
posts_count: 24
views: 14629
likes: 3
glossary_hits:
- Autolykos
- ErgoScript
---

# Help with Rx 570 4 GB

> **Forum thread:** [https://ergoforum.org/t/help-with-rx-570-4-gb/1304](https://ergoforum.org/t/help-with-rx-570-4-gb/1304)
> **Category:** Uncategorized | **Created:** 2021-05-19 | **Posts:** 24 | **Views:** 14629

**Related concepts:** Autolykos, ErgoScript

---

### Post #1 — @abigliazzi (2021-05-19)

Hello everybody !! i need your help with my gpus.

i have 5 Asrock RX 570 4gb with SK Hynix Memory.

I can’t get past 46 MH/S. The vBios is stock.

here I leave an image of my GPU configuration in Hiveos and the stock vbios

[![4](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/52e6181c32db7b3d5c42d8cab70ad14235455e8e_2_690x269.jpeg)

41563×610 173 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/52e6181c32db7b3d5c42d8cab70ad14235455e8e.jpeg "4")

---

### Post #2 — @connectedlv (2021-05-19)

Try config: CORE 1100, VDD 790, MEM 1950 , It works for me with 57th/s.

---

### Post #3 — @abigliazzi (2021-05-19)

Doesnt work for me, drops to 42MH/s

Any other idea ???

---

### Post #4 — @hesoyama (2021-05-19)

Core clk is too low.  
Here is my tuning (so far being tested):

rx 570

[![1](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/7c8be615bbf089988d3abf5d7ded357e211e7b61_2_689x329.png)

11209×578 98.7 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/7c8be615bbf089988d3abf5d7ded357e211e7b61.png "1")

You can read about Polaris tuning here for exemple:

[github.com](https://github.com/todxx/teamredminer/blob/master/doc/AUTOLYKOS_TUNING.txt)

#### [todxx/teamredminer/blob/master/doc/AUTOLYKOS\_TUNING.txt](https://github.com/todxx/teamredminer/blob/master/doc/AUTOLYKOS_TUNING.txt)

```ergoscript
Team Red Miner Autolykos2 (ERGO) Mining
=======================================
This document provides some quick pointers on how to tune the
autolykos2 algo used by ERGO.

General background
==================
Autolykos2 is a memory-intensive low/medium power algo. However, with
the small memory accesses involved the algo behaves more like algos
like verthash rather than ethash. Performance is tied to the core clk,
and for max speed (especially for Vegas) core clk needs to be higher
than ethash to support driving the mem controller on the gpu(s).

This algo accesses mem in 32 byte chunks. This means that RDNA
generation gpus (Navi, Big Navi) will not perform well. Their 128 byte
cacheline size means that 128 bytes are read for every 32 byte
request, effectively halving the available memory bandwidth compared
to GCN (which uses 64 byte cachelines).
```

This file has been truncated. [show original](https://github.com/todxx/teamredminer/blob/master/doc/AUTOLYKOS_TUNING.txt)

---

### Post #5 — @abigliazzi (2021-05-20)

Thank you very much, I got very good results modifying the memory timing with Polaris editor.

Now I’m mining at 67.5 MH / S (48% MORE) ![:star_struck:](https://emoji.discourse-cdn.com/twitter/star_struck.png?v=9 ":star_struck:") ![:star_struck:](https://emoji.discourse-cdn.com/twitter/star_struck.png?v=9 ":star_struck:") ![:star_struck:](https://emoji.discourse-cdn.com/twitter/star_struck.png?v=9 ":star_struck:")

Core 1275, VDDD 900 and 2100 MEM (100 W approx)

Here the results…

[![5](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/3e81b210825db8461d7076bd0864d19fa2f4a596_2_690x343.jpeg)

51238×617 127 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/3e81b210825db8461d7076bd0864d19fa2f4a596.jpeg "5")

---

### Post #6 — @rpereyra (2021-05-20)

Hola, puedes explicarme como lo lograste hacer tengo el mismo problema

---

### Post #7 — @cpit (2021-05-27)

Hi, that’s a really good rate, what mods did you make in Polaris editor?

---

### Post #8 — @wuttipong (2021-05-28)

Now I’m mining at 69.xx MH / S  

[![2021-05-28_12-48-34](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/f266492a925ba92652317607947447e6e304bf37_2_690x344.png)

2021-05-28\_12-48-341714×856 153 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/f266492a925ba92652317607947447e6e304bf37.png "2021-05-28_12-48-34")

---

### Post #9 — @grimgod (2021-06-02)

can you share OC settings

---

### Post #10 — @marctheshark (2021-06-11)

I just got 3 of these myself looking forward to similar results. What MOBO do you have?

---

### Post #11 — @Kcteby (2021-06-12)

Hello friends, I have a MSI rx570 4g (H5GQ4H24AJ HYNIX)  
In stock vbios makes 43 MHs  
With polaris patch 55 MHs  
I can’t get to 69 MHs!  
The weirdest thing is that if I raise the memory above 1750 the MHs starts to drop  
I have a Sapphire 580 that if it gives me 70 … I am with windows and NBminer.

---

### Post #12 — @lance2611 (2021-06-13)

I also have a rx570 4g with a hynix memory. I was getting about 53 MH/s on stock vbios. I’m now getting 68.6 MH/s @ 62W with this [PolarisBiosEditor](https://github.com/IndeedMiners/PolarisBiosEditor/releases/tag/1.7.5)

---

### Post #13 — @Kcteby (2021-06-13)

Thanks for the reply! Did you use the PRO version? with the free version it gives me 55mhs

---

### Post #14 — @Kcteby (2021-06-13)

This is how the memory times leave me (one click patch)

0:1500:777000000000000022AA1C00B56A6D46C0551017BE8E060C006006000C081420EA8900AB030000001B162C31C0313F17  
0:1625:777000000000000022AA1C00B56A6D46C0551017BE8E060C006006000C081420EA8900AB030000001B162C31C0313F17  
0:1750:777000000000000022AA1C00B56A6D46C0551017BE8E060C006006000C081420EA8900AB030000001B162C31C0313F17  
0:2000:777000000000000022AA1C00B56A6D46C0551017BE8E060C006006000C081420EA8900AB030000001B162C31C0313F17

---

### Post #15 — @sdcvoltaic (2021-06-19)

Make sure you’re using the newest polarisbioseditor, they have a one click patch that auto tunes the memory. As well check if you have enough power for the rx570 to go above 1750MHz. Last thing is your core clock speed matters in mining ergo, the higher the better unlike ETH

---

### Post #16 — @Happyjew (2021-06-19)

all 470,570 can go ~80 mh, all 480,580 can 82-85 mh…

---

### Post #17 — @sdcvoltaic (2021-06-19)

570 4gb? or 570 8gb you mean

---

### Post #18 — @Happyjew (2021-06-19)

4 gb @@@@@@@@@@@@@@@@@@@@!.

---

### Post #19 — @Arki83 (2021-06-20)

Can you provide anything other than the claim? This is well above anything I have seen on these cards. Even just a pic of them running at those speeds if you don’t want to share your secrets.

---

### Post #20 — @Happyjew (2021-06-20)

try to overclock core

---

### Post #21 — @Arki83 (2021-06-20)

That really doesn’t provide any proof. But thanks I guess.

---

### Post #22 — @Kcteby (2021-07-01)

The secret for me is in the mod bios, overclocking is something we all know.  
I finally managed to go from 43mhs to 69mhs with this memory value (H5GQ4H24AJ). paste in 1500 1625 1750 2000mhz  
999000000000000022559D0010DE5B4480551312B74C450A00400600750414206A8900A00200312010112D34A42A3816.  
The clock is 1325 and vram is 2000. And I don’t know why, but in the RADEON program you have to put the “memory synchronization” in LEVEL 2.  
I hope someone will find it useful …

---

### Post #23 — @leandrokjuru (2021-07-08)

what overs did you use to look like this?

---

### Post #24 — @TB087 (2021-08-05)

With which overclock and power drain you can recevie these hash results ? Can you provide more info, some real example ? 470 or 480 for example. Thx
