---
title: Advice and help for first time (ever) Miners
description: 'ErgoForum discussion: Advice and help for first time (ever) Miners'
tags:
- addresses
- ergoforum
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/advice-and-help-for-first-time-ever-miners/1567
created: '2021-05-31'
last_activity: '2021-06-07'
posts_count: 7
views: 736
likes: 4
glossary_hits:
- Addresses
- Full node
---

# Advice and help for first time (ever) Miners

> **Forum thread:** [https://ergoforum.org/t/advice-and-help-for-first-time-ever-miners/1567](https://ergoforum.org/t/advice-and-help-for-first-time-ever-miners/1567)
> **Category:** Uncategorized | **Created:** 2021-05-31 | **Posts:** 7 | **Views:** 736

**Related concepts:** Addresses, Full node

---

### Post #1 — @MrUFOHunter (2021-05-31)

Hi All.

I am a first time ever miner, decided on ergo to get me started. After successfully setting up a full ergo node and wallet, which was pretty straight forward, Im somewhat embarrassed to say that I have run into some very frustrating issues with the mining software (mining.exe creation) to run alongside it.

I’ve downloaded and installed all the necessary software packages, Visual Studio etc, created the .json file, and the SSL.exe, but there are so many switching around of folders and comiling to do within command prompts which arent too clear which command prompts! please help!

---

### Post #2 — @Captain_Crazy (2021-06-01)

Hello!

Can you give some more information?

What OS are you running? What Gpu’s?

There are many “ready to mine” apps out there that you can just download, configure and start.

---

### Post #3 — @MrUFOHunter (2021-06-01)

Hi Captain Crazy, thank you for your reply.

I am running Windows 10 on a Dell XPS 15 laptop which although not ideal does have a Nvidia GTX 1050ti display adapter…

I followed an old Youtube video which showed how to setup the full node, that all went well. But I think I was referring to out dated pages giving advice on setting up the mining aspect. Installed Visual Studio, the SSL, and ran through all of the procedures.

I guess it would just be best as you say to go with a mining pool if my laptop can handle it?

---

### Post #4 — @Captain_Crazy (2021-06-02)

Hello!

Okay, I suggest a simple test .

First download and extract this miner - [Releases · NebuTech/NBMiner · GitHub](https://github.com/NebuTech/NBMiner/releases) (make sure to disable your antivirus!)

Once you’ve extracted the files look for this file - start\_ergo.bat, open the bat file with notepad and edit it this way -

nbminer -a ergo -o stratum+tcp://ergo.herominers.com:10250 -u YOUR\_ERGO\_WALLET\_ADDRESS.YOUR\_WORKER\_NAME  
pause

The wallet address is your ergo wallet address which you can find on the <http://127.0.0.1:9053/panel/wallet>

The worker name is anything you would like to call your rig.

Hope this helps?

---

### Post #5 — @MrUFOHunter (2021-06-02)

That’s very kind of you my friend. Thank you so much. I will run through your advice tonight and let you know how it goes! Thanks again!

---

### Post #6 — @MrUFOHunter (2021-06-02)

Captain Crazy, you are an absolute star. It appears to be working, with a hashrate of around 25 MH/s

One last noob question if you don’t mind, I assume I don’t need to run the ergo full node in order to run the mining activity? but to access the wallet only? is that right?

Thanks again dude!

---

### Post #7 — @Captain_Crazy (2021-06-07)

Hello!

So sorry for only replying now!

Although the node does not directly affect mining You will have to keep it running 24/7 in order to keep everything synced with the blockchain. This is really important.

Alternatively you can also have a look at Yoroi wallet. Much more user friendly.

Happy mining!
