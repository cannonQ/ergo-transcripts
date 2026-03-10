---
title: Tokens mixer is done
description: 'ErgoForum discussion: Tokens mixer is done'
tags:
- box
- ergoforum
- ergomixer
- mempool
- native-tokens
- registers
- token-id-rule
- transaction
- uncategorized
- zerojoin
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/tokens-mixer-is-done/219
created: '2020-05-19'
last_activity: '2020-08-09'
posts_count: 9
views: 2584
likes: 31
glossary_hits:
- Box
- ErgoMixer
- Mempool
- Native tokens
- Registers
- Token ID rule
- Transaction
- ZeroJoin
---

# Tokens mixer is done

> **Forum thread:** [https://ergoforum.org/t/tokens-mixer-is-done/219](https://ergoforum.org/t/tokens-mixer-is-done/219)
> **Category:** Uncategorized | **Created:** 2020-05-19 | **Posts:** 9 | **Views:** 2584

**Related concepts:** Box, ErgoMixer, Mempool, Native tokens, Registers, Token ID rule, Transaction, ZeroJoin

---

### Post #1 — @anon92048 (2020-05-19)

Hello guyz! Discord is asking for phone number verification and all the online SMS inboxes I have found banned there. So I am going to continue here.

Tokens mixer is ready. I am testing it now and then it will be on GitHub within few days.

Then I would like to ask for help with improving UX, doing pools etc. I will probably do binaries and then take a break for some time. Cheers!

---

### Post #2 — @Martin-mx (2020-05-19)

Hey,

Will share link in social channels. Great news!

Cheers!

---

### Post #3 — @Martin-mx (2020-05-19)

[twitter.com](https://twitter.com/ergoplatformorg/status/1262850415412031493)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/841241c0542986c94b7829642295e0ed2d8a8fbf.jpeg)

#### [Ergo (ergoplatformorg)](https://twitter.com/ergoplatformorg/status/1262850415412031493)

"Tokens mixer is done" https://t.co/zbeeqiYFik

[1:59 PM - 19 May 2020](https://twitter.com/ergoplatformorg/status/1262850415412031493)

 4

 1

<https://bitcointalk.org/index.php?topic=5150971.msg54463274#msg54463274>

---

### Post #4 — @anon92048 (2020-06-03)

Uploaded: <https://github.com/anon92048/ergo-mixer-web/pull/9>

So ergs mixer in the master branch; tokens mixer in the tokens branch.

Next steps are runnable binaries, better UI, different rings, settings, mint-pour support etc. I would be happy if someone can do this! I am very limited with my day job currently. See readme and issues.

Please use it or modify it in any way. No rights reserved. Privacy is a basic human right!

---

### Post #5 — @Martin-mx (2020-06-03)

<https://bitcointalk.org/index.php?topic=5150971.msg54554738#msg54554738>

<https://twitter.com/ergoplatformorg/status/1268190088938369026>

---

### Post #6 — @anon2020s (2020-06-11)

A modified version of ergomix is ready to launch on miannet.  
Thanks to the great contribution of [@anon92048](/u/anon92048) and based on his code, we improved the code and will launch the improved mixer in a few days.  
key features are:

* Token-based fee support. No sponsored fee is needed.
* Token-based fee model is completely transparent for the user and is handled automatically by smart contracts.
* Adaptable token pricing scheme. token emission contract support selling different batches. price parameters are stored in its registers to be easily adaptable. Also, it supports entering fee which is a percentage of pool amount.
* Multiple Pool (ring) support.
* Auto splitting any amount of erg in pools.
* Configurable parameters (DB parameters, job intervals, fee, and …).
* Manual withdraw capability in all stages (deposit, half-box, full-box).
* Better handling some rare but important cases. like transactions missing.
* More statistics. like number of mixes in each pool in the last 24h.
* Decrease double-spending probability with considering the mempool.
* Better UI and UX using react.
* Token mixing is under development

I will keep you posted in a few days on where to download the code and binaries.

---

### Post #9 — @Martin-mx (2020-06-11)

<https://bitcointalk.org/index.php?topic=5150971.msg54603183#msg54603183>

<https://twitter.com/ergoplatformorg/status/1271121753746612233>

---

### Post #10 — @anon2020s (2020-08-06)

The new version of ErgoMixer will be released on Aug 8.  
This version will support token mixing; you can start mixing any tokens, also you can ask us to add a token to our list so that everyone using ErgoMixer can see and mix it more user-friendly!  
Also, mixer’s performance has been improved in various aspects so you will have a smoother mixing experience in this version.  
Please consider finishing your current mixes by Aug 8 and start using the new version.  
We also will release platform-specific binaries for this version.

---

### Post #11 — @anon2020s (2020-08-09)

Created a new topic to cover the news about ergomixer and will not post here in the future. plz keep posted in the following thread:

# [:::ErgoMixer::: ZeroJoin Mixer for ERG and Tokens](https://www.ergoforum.org/t/zerojoin-mixer-for-erg-and-tokens/318)
