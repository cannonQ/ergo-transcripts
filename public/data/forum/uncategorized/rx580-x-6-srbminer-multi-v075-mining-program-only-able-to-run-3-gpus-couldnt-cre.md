---
title: RX580 x 6 - SRBMiner-Multi v0.7.5 (Mining program only able to run 3 GPUs)
  Couldn't create dataset on GPU
description: 'ErgoForum discussion: RX580 x 6 - SRBMiner-Multi v0.7.5 (Mining program
  only able to run 3 GPUs) Couldn''t create dataset on GPU'
tags:
- autolykos
- ergoforum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/rx580-x-6-srbminer-multi-v0-7-5-mining-program-only-able-to-run-3-gpus-couldnt-create-dataset-on-gpu/1413
created: '2021-05-25'
last_activity: '2021-05-31'
posts_count: 5
views: 1794
likes: 0
glossary_hits:
- Autolykos
---

# RX580 x 6 - SRBMiner-Multi v0.7.5 (Mining program only able to run 3 GPUs) Couldn't create dataset on GPU

> **Forum thread:** [https://ergoforum.org/t/rx580-x-6-srbminer-multi-v0-7-5-mining-program-only-able-to-run-3-gpus-couldnt-create-dataset-on-gpu/1413](https://ergoforum.org/t/rx580-x-6-srbminer-multi-v0-7-5-mining-program-only-able-to-run-3-gpus-couldnt-create-dataset-on-gpu/1413)
> **Category:** Uncategorized | **Created:** 2021-05-25 | **Posts:** 5 | **Views:** 1794

**Related concepts:** Autolykos

---

### Post #1 — @newbie (2021-05-25)

I just started mining Ergo with 6 x RX580 using SRB Miner latest version.

However, the mining program only able to read 3 GPUs instead of all 6.  
Error message given:  
Couldn’t create dataset on GPU5 [autolykos2]  
Couldn’t create dataset on GPU3 [autolykos2]  
Couldn’t create dataset on GPU2 [autolykos2]

Any idea why is this happening?

---

### Post #2 — @WERT420 (2021-05-29)

I’m not sure why you’re experiencing this issue but a good alternative for AMD cards is Team Red Miner. I mine with 7x Radeon VIIs and it works perfectly.

---

### Post #3 — @newbie (2021-05-30)

Thanks for the info, I guess I’ll have to try it out using Team Red Miner.

---

### Post #4 — @ergo_newbie (2021-05-30)

you may need increase virtual memory to 16000 or 32000

---

### Post #5 — @newbie (2021-05-31)

It is the virtual memory! Solved the problem!! Thanks!
