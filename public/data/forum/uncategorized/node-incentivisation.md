---
title: Node incentivisation
description: 'ErgoForum discussion: Node incentivisation'
tags:
- addresses
- duckpools
- ergoforum
- ergoscript-context
- full-node
- native-tokens
- phoenix-finance
- satergo
- spectrum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/node-incentivisation/4585
created: '2023-11-30'
last_activity: '2024-02-21'
posts_count: 2
views: 322
likes: 4
glossary_hits:
- Addresses
- Duckpools
- ErgoScript context
- Full node
- Native tokens
- Phoenix Finance
- Satergo
- Spectrum
---

# Node incentivisation

> **Forum thread:** [https://ergoforum.org/t/node-incentivisation/4585](https://ergoforum.org/t/node-incentivisation/4585)
> **Category:** Uncategorized | **Created:** 2023-11-30 | **Posts:** 2 | **Views:** 322

**Related concepts:** Addresses, Duckpools, ErgoScript context, Full node, Native tokens, Phoenix Finance, Satergo, Spectrum

---

### Post #1 — @glasgowm (2023-11-30)

> [@ergogo] I have an idea as well, regarding an **Incentivized Node Operation**.  
> Essentially, the longer your node is up and running, the more tokens you get, till you reach the maximum limit.
>
> This will encourage miners and people that want to support the network of doing so, we will get tons of marketing in the mining community, therefore adoption.
>
> There needs to be a mechanism that detects the IP address of the nodes, and only allow 1 node per IP.
>
> To incentivize the node operators (runners), there can be a token minted and stored on a SC, that will send out the rewards every 100 blocks (this can be adjusted, 100 blocks = 200mins = 3.33h), so there wont be network congestion.
>
> The limit can be 100, and when a node is launched online for the first time, it can start from 1, and increment every 100 blocks (this can be adjusted), till the limit of 100 is reached (it would take roughly 14 days of the node being online to reach the maximum reward possible). If a node is being offline, this counter can decrement 10 times faster, so from 100 to 0 in 1.4 days, or 33.3h.
>
> The utility of the token can be included in our DeFi dapps, locking it in hodlErg kind of game, creating a pool on spectrum, staking in duck pools etc… (more ideas need to be included and worked on).
>
> This is only a rough idea, and numbers, implementation or utility can and sure will change.
>
> From my understanding, this can be relatively easy to implement by the Satergo devs.
>
> To be 100% honest, this idea came to me from reading a tweet about ETCPOW, which I assume is doing something similar to this, if not the same, as I didn’t want to keep on digging about it so i don’t spoil the idea that came to my mind.

> [[@cafebedouin](/u/cafebedouin)] People will game the system and there are other problems. For example, what happens when I run a node from a dynamic IP address or have a VPN that randomly chooses a new server over some interval. Might also choose to run the same node and port forward it to different addresses or some other way to game it.
>
> Aberg, the Satergo dev, would be the one to talk to about it, but I’d start by phrasing it as a question: hey, Aberg, if you wanted to incentivize people to run nodes, how would you do it? Even there he might say that a full node wallet is the best choice and is self-incentivizing. Hard to predict how he will respond.

> [@ergogo] As far as I understand, from dynamic ip you cant connect to more than 30 nodes, ports wont be opened. For this you need a static ip address. So that can be included in the requirements for getting incentives.

> [@Glasgow] Yeah has been discussed a couple times before in here, think it’s a good idea. The tokens could also be used as a factor in some DID/PoP system.
>
> Couldn’t you just send it to the wallets of public nodes? Can only run 1 per ip:port anyway, no?

---

### Post #2 — @Ccgarant (2024-02-21)

Pretty neat idea, I like it.
