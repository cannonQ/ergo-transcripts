---
title: 1060 3gb mining at 48 Mhs
description: 'ErgoForum discussion: 1060 3gb mining at 48 Mhs'
tags:
- ergoforum
- ergoscript
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/1060-3gb-mining-at-48-mhs/884
created: '2021-03-26'
last_activity: '2021-05-19'
posts_count: 5
views: 10618
likes: 0
glossary_hits:
- ErgoScript
---

# 1060 3gb mining at 48 Mhs

> **Forum thread:** [https://ergoforum.org/t/1060-3gb-mining-at-48-mhs/884](https://ergoforum.org/t/1060-3gb-mining-at-48-mhs/884)
> **Category:** Uncategorized | **Created:** 2021-03-26 | **Posts:** 5 | **Views:** 10618

**Related concepts:** ErgoScript

---

### Post #1 — @gearsog (2021-03-26)

hello I’m eth miner, but my friend have a 1060 3gb model, and he can not mine eth or rvn cause he’s using windows, so I found ergo, and after some tests he managed to get around 48 mhs, idk why or how

config: power limit 95, core clock +210, memory clock +830

with a 1060 he suppoed to get around 30 mhs is tha correct?, so any explains?

print screen: [Screenshot - e1f24fb40492ee936c62c8696d00e2da - Gyazo](https://gyazo.com/e1f24fb40492ee936c62c8696d00e2da)

---

### Post #2 — @V8Power (2021-04-12)

30MH/s is for ethash so Ethereum etc.  
With Ergo you get a lot higher hashrate. I’ve found that you get about double wich also makes sense for your 1060 3GB

---

### Post #3 — @wjzhweo (2021-05-13)

i tried your setting on raveOS but only get 43,6Mh/s  
1060 3G Micron vram

---

### Post #4 — @Ergo_Lassen (2021-05-19)

I’m getting 48-50 with a 1070

---

### Post #5 — @Freeman (2021-05-19)

```ergoscript
nbminer.exe -a ergo -o stratum+tcp://pool:0000 -u wallet.workername --mt 5
pause
```

palit gtx 1060 dual 3gb (vram samsung) = 50 MH/s  
core clock +0  
memory clock +300
