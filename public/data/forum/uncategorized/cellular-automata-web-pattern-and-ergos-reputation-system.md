---
title: Cellular Automata Web Pattern and Ergo's Reputation System
description: 'ErgoForum discussion: Cellular Automata Web Pattern and Ergo''s Reputation
  System'
tags:
- ergoforum
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/cellular-automata-web-pattern-and-ergos-reputation-system/4456
created: '2023-08-20'
last_activity: '2023-08-20'
posts_count: 1
views: 310
likes: 3
glossary_hits:
- Full node
---

# Cellular Automata Web Pattern and Ergo's Reputation System

> **Forum thread:** [https://ergoforum.org/t/cellular-automata-web-pattern-and-ergos-reputation-system/4456](https://ergoforum.org/t/cellular-automata-web-pattern-and-ergos-reputation-system/4456)
> **Category:** Uncategorized | **Created:** 2023-08-20 | **Posts:** 1 | **Views:** 310

**Related concepts:** Full node

---

### Post #1 — @jossemii (2023-08-20)

Hello everyone. I’m creating this thread to [continue the discussion](https://www.ergoforum.org/t/artifical-economic-intelligence-on-ergo-blockchain/4429/12) about a system that combines AI and smart contracts and its potential implementation in Ergo.

The main idea behind the system is to separate where and who runs a service (an app, an automata, a bot …) and who develops it. On this way, it aims to improve the descentralization of software development, particullarly on AI due to its potential impact on our society.

[Here](https://www.ergoforum.org/t/artifical-economic-intelligence-on-ergo-blockchain/4429/2) is a brief explanation about it.

> In this way, I will summarize a bit of what was mentioned in the previous thread.
>
> Taking [the example of a trading bot](https://www.ergoforum.org/t/artifical-economic-intelligence-on-ergo-blockchain/4429/9), if I want to use one right now, I will go to the web and can:
>
> 1. search for a web service that operates on my asset portfolio, which has:  
>    a. advantages:  
>    -. I don’t have to run the infrastructure myself.  
>    -. I don’t have to configure anything.  
>    b. disadvantages:  
>    -. I can’t attribute reputation to it because the developer of the web service is unable to prove that the system hasn’t changed *(for example, when chatGPT-3.5 has gained a large number of users, they might reduce its performance to better market the next version.)*  
>    -. The developer of the web service can’t assure me that they aren’t misusing the data from my requests (in the case of the trading bot, the movements of my portfolio).
> 2. search for a bot (on GitHub, etc.) to run on my PC (or in the cloud) on my own:  
>    a. advantages:  
>    -. It’s deterministic, in the sense that (if it can’t connect to the internet) I will know for sure that its behavior and/or performance won’t change in the future.  
>    -. The developer of the service has no control over my request data.  
>    b. disadvantages:  
>    -. I need to possess equipment (infrastructure) capable of executing the code.  
>    -. I need to deal with system configuration issues (which are often significant enough that an average user might opt for the first option).
>
> [In contrast](https://www.ergoforum.org/t/artifical-economic-intelligence-on-ergo-blockchain/4429/10), the system I intend to defend allows for:
>
> * I don’t need to personally manage the infrastructure, as the node handles this.
> * I don’t need to set up any configurations, as the service is completely predictable, and the node can create instances of it as a container or virtual machine.
> * The developer cannot manipulate or alter the service (or access the data it handles), as they don’t have control over the nodes that distribute and execute it.

My intention is to develop the reputation system (essential to provide trust among the parties of the system) in Ergo due to the nature of the network and the principles of the community. Therefore, I hope to be able to describe and document my idea here to receive some feedback before developing the reputation system.
