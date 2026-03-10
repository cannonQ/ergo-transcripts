---
title: '"New Video! Check out EMURGO''s Robert Kornacki give an overview of our research
  work around smart contracts based on Extended UTXO."'
description: 'ErgoForum discussion: "New Video! Check out EMURGO''s Robert Kornacki
  give an overview of our research work around smart contracts based on Extended UTXO."'
tags:
- box
- collateral
- ergoforum
- eutxo
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/new-video-check-out-emurgos-robert-kornacki-give-an-overview-of-our-research-work-around-smart-contracts-based-on-extended-utxo/254
created: '2020-06-18'
last_activity: '2020-06-29'
posts_count: 4
views: 479
likes: 11
glossary_hits:
- Box
- Collateral
- eUTXO
---

# "New Video! Check out EMURGO's Robert Kornacki give an overview of our research work around smart contracts based on Extended UTXO."

> **Forum thread:** [https://ergoforum.org/t/new-video-check-out-emurgos-robert-kornacki-give-an-overview-of-our-research-work-around-smart-contracts-based-on-extended-utxo/254](https://ergoforum.org/t/new-video-check-out-emurgos-robert-kornacki-give-an-overview-of-our-research-work-around-smart-contracts-based-on-extended-utxo/254)
> **Category:** Uncategorized | **Created:** 2020-06-18 | **Posts:** 4 | **Views:** 479

**Related concepts:** Box, Collateral, eUTXO

---

### Post #1 — @Martin-mx (2020-06-18)

[![]( " - YouTube")](https://www.youtube.com/watch?v=-3jRSgjLMzU)

---

### Post #2 — @robert (2020-06-19)

Thanks Martin. And here’s the direct link to the piece on github for cataloguing purposes/if anyone wants to read it him/herself: [High Level Design Patterns In Extended UTXO Systems](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/High%20Level%20Design%20Patterns%20In%20Extended%20UTXO%20Systems.md)

---

### Post #3 — @scalahub (2020-06-28)

Very cool ideas… A little confused how the last one (“outsourced computation”) would work. Can you give more details, maybe using a real world example of such a computation?

---

### Post #4 — @robert (2020-06-29)

Any case where you need a prolonged central state can utilize outsourced computation. So for example, a leaderboard of sorts for the RPS example could utilize this design pattern to have a central UTXO which keeps track of the state of the leaderboard, but multiple people can start a RPS match by spending the leaderboard and create a new UTXO which starts the RPS protocol. This could be useful if for example collateral or a fee payment is required to take part in the leaderboard. This is obviously a rather arbitrary example, but it’s the most relevant example to the document itself.
