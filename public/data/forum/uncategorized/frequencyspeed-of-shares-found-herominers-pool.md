---
title: Frequency/Speed of Shares Found (Herominers Pool)
description: 'ErgoForum discussion: Frequency/Speed of Shares Found (Herominers Pool)'
tags:
- difficulty-adjustment
- ergoforum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/frequency-speed-of-shares-found-herominers-pool/1705
created: '2021-06-10'
last_activity: '2021-06-18'
posts_count: 3
views: 1254
likes: 2
glossary_hits:
- Difficulty adjustment
---

# Frequency/Speed of Shares Found (Herominers Pool)

> **Forum thread:** [https://ergoforum.org/t/frequency-speed-of-shares-found-herominers-pool/1705](https://ergoforum.org/t/frequency-speed-of-shares-found-herominers-pool/1705)
> **Category:** Uncategorized | **Created:** 2021-06-10 | **Posts:** 3 | **Views:** 1254

**Related concepts:** Difficulty adjustment

---

### Post #1 — @0R8174L (2021-06-10)

I currently have 2 machines that are mining Ergo via nanominer. (Herominers pool)

**Machine 1** has a single RTX 2070 that gets about **80 mh/s** consistently.

**Machine 2** has two RTX 3070s that show about **337 mh/s** consistently.

In the same amount of time (approx 14.5 hrs) that Machine 1 shows 1000 total shares found, Machine 2 will only show about 2000 total shares found. Shouldn’t this number be much higher? The mh/s is quadruple. What am I missing?

**1x RTX 2070:**  
![Screenshot 2021-06-10 152046](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/c855b1dd9d54a702c667b867877f5cbb033cb73b.png)

**2x RTX 3070s:**  

[![Screenshot 2021-06-10 152021](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/abf4a8d96ab2317583f4743a9e99bd2bbdb2816d.png)

Screenshot 2021-06-10 152021737×262 24.3 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/abf4a8d96ab2317583f4743a9e99bd2bbdb2816d.png "Screenshot 2021-06-10 152021")

---

### Post #2 — @Ho7bl4ck (2021-06-13)

Not sure about nanominer, but NB miner adjusts difficulty per you hashrate. If both were, say mining at a 4.00G difficulty level, then yes you would be correct. It changes your difficulty dynamically to keep your production at an optimal rate per difficulty. Default, I think is 4.00G, and it moves up or down from there. My 4 3070 rig fluctuates from 4.00G at first, all the way to 60.95G depending on my luck in finding shares. Usually it’s around 20 ish.

You produce less shares as your difficulty goes up, but you get paid more per share. Thats the bottom line I guess. Look at your yield in ERG over a couple days per rig. That will tell you the real story.

---

### Post #3 — @0R8174L (2021-06-18)

Thank you for that information!
