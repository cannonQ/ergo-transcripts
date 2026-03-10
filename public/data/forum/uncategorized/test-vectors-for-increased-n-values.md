---
title: Test vectors for increased N values
description: 'ErgoForum discussion: Test vectors for increased N values'
tags:
- autolykos
- ergoforum
- ergoscript
- ergoscript-context
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/test-vectors-for-increased-n-values/2887
created: '2021-10-30'
last_activity: '2021-11-02'
posts_count: 4
views: 3314
likes: 7
glossary_hits:
- Autolykos
- ErgoScript
- ErgoScript context
---

# Test vectors for increased N values

> **Forum thread:** [https://ergoforum.org/t/test-vectors-for-increased-n-values/2887](https://ergoforum.org/t/test-vectors-for-increased-n-values/2887)
> **Category:** Uncategorized | **Created:** 2021-10-30 | **Posts:** 4 | **Views:** 3314

**Related concepts:** Autolykos, ErgoScript, ErgoScript context

---

### Post #1 — @kushti (2021-10-30)

On block 614,400 memory requirements of Autolykos2 will be increased. Miners are talking about “DAG size increase”, however, in case of Ergo this is not about a DAG, rather, a table.

Dear miner software developers, please check the following test vector for valid PoW solutions for height 614,400 (with low diff of 16,384):

```ergoscript
height: 614400
N: 70464240
msg: 548c3e602a8f36f8f2738f5f643b02425038044d98543a51cabaa9785e7e864f
b: 7067388259113537318333190002971674063283542741642755394446115914399301849
solution: {
  "pk" : "03bedaee069ff4829500b3c07c4d5fe6b3ea3d3bf76c5c28c1d4dcdb1bed0ade0c",
  "n" : "0000000000003105"
}
```

---

### Post #2 — @Ergosmergo (2021-11-01)

How much will the table increase by ?

---

### Post #3 — @kushti (2021-11-02)

By 5%, so will be about 2.03 GB, thus 3GB cards will still be in the game.

Ergo’s PoW is about finding 32 numbers in a big table, each of 31 bytes, such as hash of their sum is less than target (a variant of hard *k-sum problem*, where k = 32) . Table size is 67,108,864 (2^26) elements initially, which is about 2,013,265,920 bytes (roughly 2GB). Algorithm is trying to enforce storing the table in RAM (and currently miners are storing it fully). Starting from block #614,400 the table is being increased by 5% every 51,200 blocks (~71 days). Simple calculations show that 3 GB cards will be in the game for 9 epochs ( [2013265920 - Wolfram|Alpha](https://www.wolframalpha.com/input/?i=2013265920+)*+%281.05+%5E+n%29+%3C+3*1024*1024*1024 )

---

### Post #4 — @danandbeard (2021-11-02)

a few of us made this a while back to help estimate table size over time…rough estimates, but hopefully still useful [autolykos table size math](https://docs.google.com/spreadsheets/d/1RTkYzu114NV9OL2yKs3Pp3Sq0BPlK1t-CvVGmfEoZaM/edit#gid=0)
