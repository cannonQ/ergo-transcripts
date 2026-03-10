---
title: Ergo Ecosystem Development Updates
description: 'ErgoForum discussion: Ergo Ecosystem Development Updates'
tags:
- amm
- eip
- ergo-explorer
- ergo-foundation
- ergoforum
- full-node
- native-tokens
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-ecosystem-development-updates/961
created: '2021-04-07'
last_activity: '2021-04-15'
posts_count: 5
views: 1630
likes: 13
glossary_hits:
- AMM
- EIP
- Ergo Explorer
- Ergo Foundation
- Full node
- Native tokens
- SigmaUSD
---

# Ergo Ecosystem Development Updates

> **Forum thread:** [https://ergoforum.org/t/ergo-ecosystem-development-updates/961](https://ergoforum.org/t/ergo-ecosystem-development-updates/961)
> **Category:** Uncategorized | **Created:** 2021-04-07 | **Posts:** 5 | **Views:** 1630

**Related concepts:** AMM, EIP, Ergo Explorer, Ergo Foundation, Full node, Native tokens, SigmaUSD

---

### Post #1 — @kushti (2021-04-07)

As a tech secretary of Ergo Foundation, I am going to provides weekly updates for ecosystem developments, based on weekly chats happening over Discord (every Wed @ 1 PM UTC).

Current focus for Ergo Foundation is about stimulating delivery of DEX, cross-chain gateways (w. Gravity), and Ledger integration. However, as usually, other actors can deliver some other applications (it happened before already).

**DEX**

* Contracts for both orderbook-based and AMM (automatic market-maker) DEXes are ready and in EIP-14 draft
* Orders matcher is ready (actually, delivered many weeks ago)
* However, for orderbook-based DEX good UI is hard. Thus AMM DEXes were chosen due to popularity and simple UI.

**Gravity** (by [@mhs\_sam](/u/mhs_sam) ): "

* Contracts for nebula and Gravity are published: [gravity-core/nebula.scala at dev · mhssamadani/gravity-core · GitHub](https://github.com/mhssamadani/gravity-core/blob/dev/contracts/ergo/nebula.scala) , [gravity-core/gravity.scala at dev · mhssamadani/gravity-core · GitHub](https://github.com/mhssamadani/gravity-core/blob/dev/contracts/ergo/gravity.scala)
* Gravity is in Golang. in order to provide functionalities, communications and offchain logic, we’re making a Gravity\_Ergo\_Proxy in Scala:  
  [Gravity-Ergo-Proxy/ApiController.scala at dev · mhssamadani/Gravity-Ergo-Proxy · GitHub](https://github.com/mhssamadani/Gravity-Ergo-Proxy/blob/dev/app/controllers/ApiController.scala)  
  This proxy will reside between gravity and ergo node and do the jobs seamlessly.
* Functionalities required by gravity is adding to this project gradually "

**Ledger**

* Previous developer hasn’t delivered Ledger. Now a new contractor (a small company) is found, all the details pre-agreed, wait for an announcement and Ledger integration to be done in 3 months.

In next updates more on wallets, DApp bridge, node development and research.

---

### Post #2 — @ZeroKnowledge (2021-04-08)

Awesome, I’m very much looking forward to the DEX and especially Ledger Integration ![:pray:t2:](https://emoji.discourse-cdn.com/twitter/pray/2.png?v=9 ":pray:t2:").

---

### Post #3 — @Team (2021-04-10)

could you please give an approximate time of when the SigmaUSD pair will be available for trading in exchange?

---

### Post #4 — @master_of_doge (2021-04-12)

please sir [@kushti](/u/kushti) fix RSV minting…

---

### Post #5 — @kushti (2021-04-15)

More development updates (from yesterday’s chat):

Node:

* 4.0.9 released [Release Ergo Protocol Reference Client 4.0.9 · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/releases/tag/v4.0.9) with few performance optimizations and fixes, 4.0.10 is on the way

DEX:

* Development of offchain parts is going on (ergo-lib is wrapped into TypeScript, AMM pool actions being implementing in ergo-dex-sdk-js repository (in progress))
* UI development is going on

Also:

Check new NFTs and tokens explorer made by community member LadoPixel : <https://ab6x.com/nft> and <https://ab6x.com/tokens>
