---
title: Ergo Mainnet 3.3.6 Release
description: 'ErgoForum discussion: Ergo Mainnet 3.3.6 Release'
tags:
- announcements
- ergoforum
- scorex
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-3-3-6-release/454
created: '2020-11-05'
last_activity: '2020-11-05'
posts_count: 1
views: 519
likes: 1
glossary_hits:
- Scorex
---

# Ergo Mainnet 3.3.6 Release

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-3-3-6-release/454](https://ergoforum.org/t/ergo-mainnet-3-3-6-release/454)
> **Category:** Announcements | **Created:** 2020-11-05 | **Posts:** 1 | **Views:** 519

**Related concepts:** Scorex

---

### Post #1 — @Martin-mx (2020-11-05)

Ergo Protocol Reference Client 3.3.6. It includes:

* [#1231](https://github.com/ergoplatform/ergo/pull/1231) : fix for peers discovery
* [#1234](https://github.com/ergoplatform/ergo/pull/1234) : Fix for docker build failing because of sbt-1458
* /peers/status API method which returns time of last message received from p2p network as well as current network time

Scorex dependency got updated with following changes:

* Logic for closing connection reworked ( [ScorexFoundation/Scorex#381](https://github.com/ScorexFoundation/Scorex/pull/381) )
* Explicit inactiveConnectionDeadline setting added ( [ScorexFoundation/Scorex#380](https://github.com/ScorexFoundation/Scorex/pull/380) )

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.3.6)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/46a3c2d015b23d114fafd4756ea7c173fad09cb2.png)

### [Release Ergo Protocol Reference Client 3.3.6 · ergoplatform/ergo](https://github.com/ergoplatform/ergo/releases/tag/v3.3.6)

Ergo Protocol Reference Client 3.3.6. It includes:
#1231 : fix for peers discovery
#1234 : Fix for docker build failing because of sbt-1458
/peers/status API method which returns time of last mes...
