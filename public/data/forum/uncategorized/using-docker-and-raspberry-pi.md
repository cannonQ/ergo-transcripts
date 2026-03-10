---
title: Using docker and Raspberry Pi
description: 'ErgoForum discussion: Using docker and Raspberry Pi'
tags:
- ergoforum
- ergomixer
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/using-docker-and-raspberry-pi/1238
created: '2021-05-17'
last_activity: '2021-08-08'
posts_count: 3
views: 1312
likes: 1
glossary_hits:
- ErgoMixer
- Full node
---

# Using docker and Raspberry Pi

> **Forum thread:** [https://ergoforum.org/t/using-docker-and-raspberry-pi/1238](https://ergoforum.org/t/using-docker-and-raspberry-pi/1238)
> **Category:** Uncategorized | **Created:** 2021-05-17 | **Posts:** 3 | **Views:** 1312

**Related concepts:** ErgoMixer, Full node

---

### Post #1 — @JimmyH (2021-05-17)

Hej guys,  
Am I correct in thinking that the easiest way to run an Ergo node and apps like the Ergo mixer on a Raspberry Pi or similar SBC is going to be by utilising docker?  
All feedback and advice welcomed.

Jimmy H

---

### Post #2 — @kushti (2021-06-01)

For Raspberry Pi, running jar is preferred I guess. If the device is limited in RAM:

* use *state = “digest”*, process and store just limited number of full-blocks, so config would be like in this gist (where only ~4 days of full-blocks are kept): [light.conf · GitHub](https://gist.github.com/kushti/e323d880d3a633f4183dd69686f72336)
* launch as

> java -jar -Xmx1G ergo-4.0.11.jar --mainnet -c light.conf

to limit the node with 1GB RAM (you can try smaller values even, e.g. -Xmx512m for max 512 MB to be consumed

---

### Post #3 — @esot321c (2021-08-08)

You can use docker on your R-pi, but at the moment the premade docker is not for arm devices. Even the .jar file doesn’t work. You’ll have to clone the ergo node repo and build you own .jar from scratch using SBT.
