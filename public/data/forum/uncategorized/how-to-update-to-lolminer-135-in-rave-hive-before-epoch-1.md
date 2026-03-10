---
title: How to update to lolMiner 1.35 in Rave & Hive before Epoch 1
description: 'ErgoForum discussion: How to update to lolMiner 1.35 in Rave & Hive
  before Epoch 1'
tags:
- ergoforum
- ergoscript
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/how-to-update-to-lolminer-1-35-in-rave-hive-before-epoch-1/2912
created: '2021-11-07'
last_activity: '2021-11-07'
posts_count: 1
views: 675
likes: 0
glossary_hits:
- ErgoScript
---

# How to update to lolMiner 1.35 in Rave & Hive before Epoch 1

> **Forum thread:** [https://ergoforum.org/t/how-to-update-to-lolminer-1-35-in-rave-hive-before-epoch-1/2912](https://ergoforum.org/t/how-to-update-to-lolminer-1-35-in-rave-hive-before-epoch-1/2912)
> **Category:** Uncategorized | **Created:** 2021-11-07 | **Posts:** 1 | **Views:** 675

**Related concepts:** ErgoScript

---

### Post #1 — @Lolliedieb (2021-11-07)

Hey guys,

sadly I did not see RaveOs and HiveOs pushing the new update of the miner yet, but all old versions will just stop working or throw invalids when the epoch 1 hits us. Therefore here is the manual update guide how to upgrade an existing lolMiner 1.34a installation to 1.35 without needing to wait for the usual update procedure on your mining os.

Both codes are one-liner that need to be copied as one long line into the shell / console and executed.

For RaveOS:

```ergoscript
stop && cd /tmp && wget https://github.com/Lolliedieb/lolMiner-releases/releases/download/1.35/lolMiner_v1.35_Lin64.tar.gz && tar -xvf lolMiner_v1.35_Lin64.tar.gz && cd 1.35 && cp lolMiner /app-data/miners/lolminer-1.34 && cp lolMiner /app-data/miners/lolminer-1.34a &&  start
```

For HiveOS:

```ergoscript
miner stop && cd /tmp && wget https://github.com/Lolliedieb/lolMiner-releases/releases/download/1.35/lolMiner_v1.35_Lin64.tar.gz && tar -xvf lolMiner_v1.35_Lin64.tar.gz && cd 1.35 && cp lolMiner /hive/miners/lolminer/1.34 && cp lolMiner /hive/miners/lolminer/1.34a && miner restart
```

Sorry for the inconveniences, but I did ping both way before to be ready for the update - yet they seem not to hurry with it ![:confused:](https://emoji.discourse-cdn.com/twitter/confused.png?v=12 ":confused:")
