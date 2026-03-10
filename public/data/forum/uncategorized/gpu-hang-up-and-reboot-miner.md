---
title: GPU Hang Up and reboot miner
description: 'ErgoForum discussion: GPU Hang Up and reboot miner'
tags:
- ergoforum
- ergoscript-context
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/gpu-hang-up-and-reboot-miner/2465
created: '2021-09-10'
last_activity: '2021-09-11'
posts_count: 2
views: 638
likes: 0
glossary_hits:
- ErgoScript context
---

# GPU Hang Up and reboot miner

> **Forum thread:** [https://ergoforum.org/t/gpu-hang-up-and-reboot-miner/2465](https://ergoforum.org/t/gpu-hang-up-and-reboot-miner/2465)
> **Category:** Uncategorized | **Created:** 2021-09-10 | **Posts:** 2 | **Views:** 638

**Related concepts:** ErgoScript context

---

### Post #1 — @Din (2021-09-10)

Hi,

I am new to ergo mining and can’t stabilized my rig

I have 5 x rx580 4gb

Radeon RX 580 4096 MB · Sapphire  
Elpida EDW4032BABG · 113-1E3871U-O46

I have tried stock and moded bios, same issue

One of them reboot the miner sporadically every 10- 20 minutes.

I’ve tried many OC Under volts with no success

2021-Sep-10 18:10:32: GPU 3 hung up  
2021-Sep-10 18:10:32: Miner has not been restarted before  
2021-Sep-10 18:10:32: Calling reboot script (./reboot.sh)…

---

### Post #2 — @Ergosmergo (2021-09-11)

What mining software are you running? is it always GPU3 that hangs? check that the riser card has not gone bad. I had a similar problem with a rig a while back that was restarting its self every 20 minutes and it turned out to be one of the riser cards. Try another riser with the GPU that is hanging

When it comes to finding problems in a mining rig cross elimination is key. It could be best to remove the GPU causing issues and see if the mining rig is stable without that GPU installed.
