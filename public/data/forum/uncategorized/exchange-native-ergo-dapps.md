---
title: Exchange-Native Ergo dApps
description: 'ErgoForum discussion: Exchange-Native Ergo dApps'
tags:
- addresses
- appkit
- eip
- ergo-explorer
- ergoforum
- ergopay
- ergoscript
- ergotree
- fleet-sdk
- headless-dapp
- layer-scaling
- mosaik
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/exchange-native-ergo-dapps/516
created: '2020-12-22'
last_activity: '2020-12-25'
posts_count: 10
views: 950
likes: 7
glossary_hits:
- Addresses
- AppKit
- EIP
- Ergo Explorer
- ErgoPay
- ErgoScript
- ErgoTree
- Fleet SDK
- Headless dApp
- Layer scaling
- Mosaik
- Transaction
---

# Exchange-Native Ergo dApps

> **Forum thread:** [https://ergoforum.org/t/exchange-native-ergo-dapps/516](https://ergoforum.org/t/exchange-native-ergo-dapps/516)
> **Category:** Uncategorized | **Created:** 2020-12-22 | **Posts:** 10 | **Views:** 950

**Related concepts:** Addresses, AppKit, EIP, Ergo Explorer, ErgoPay, ErgoScript, ErgoTree, Fleet SDK, Headless dApp, Layer scaling, Mosaik, Transaction

---

### Post #1 — @morphic (2020-12-22)

Every Exchange is a fintech business in a highly competitive market. As a result they have to develop new products beyond deposit/trade/withdraw cycle.

Ergo has a unique yet still unrealized opportunity for exchanges to go beyond “just exchange” and implement a new category of apps for their users.

We can call them Exchange-Native dApps - applications running on the IT infrastructure of exchange and yet fully utilizing unique Ergo contractual capabilities.

The idea comes naturally from the following observations:

1. Every Ergo dApp consists of two parts on-chain and off-chain.
2. On-chain part consists of the assets on the blockchain and ErgoScript contracts which manage those assets (this part is executed on Ergo nodes).
3. Off-chain part is executed outside of the Ergo nodes. It typically consists of:  
   a) the user facing GUI  
   b) application code that monitors (scans) the blockchain for relevant data and events  
   c) application code that creates new transactions
4. Exchange doesn’t need to keep user keys thanks to [ReducedTransaction](https://github.com/ergoplatform/eips/blob/master/eip-0043.md) and [ErgoPay](https://github.com/ergoplatform/eips/blob/master/eip-0020.md) so Exchange-Native dApps can be as secure as dApps hosted elsewhere.
5. Off-chain part can run on the infrastructure of exchange and benefit from native access to the other exchange services like 24/7 availability, address book, messaging etc.

Thus, any exchange can essentially become a hosting environment for execution of Ergo dApps.  
This idea resonates well with the idea of having unified dApp framework a notable example of which is [Appkit](https://github.com/ergoplatform/ergo-appkit) and [Fleet](https://github.com/fleet-sdk).

This also brings us back to [Mosaik](https://docs.ergoplatform.com/dev/stack/mosaik/intro/) and additionally motivates it.

Going even further, once we have

1. an established Ergo dApps standard (like Mosaik)
2. more than one exchange hosting Ergo Exchange-Native dApps,

then some dApps (like multi-sig, Auction, etc) can be standardized by themselves.  
This will lead us to what we may call *Ergo App Listing* in which a standardized Ergo dApp is hosted on many exchanges and the Ergo blockchain serves as medium of asset transfer between those exchanges and their users.

Note, that nothing prevent any one to design and develop their own standalone Ergo dApp hosting service using Ergo Headless dApp framework or whichever other tools.  
But the main point of this *Exchange-Native dApps* post is to highlight the opportunity for exchanges to reuse their existing hosting, IT infrastructure and exchange features to bring new unique features to their users which only exchanges can do.

---

### Post #2 — @robert (2020-12-22)

This is a very cool idea, but I do wonder what the implementation overhead would be for exchanges and if they have the resources/desire to go through and implement these dApps. I suppose as you mentioned, we could reuse headless dApps and offer for them to create a frontend and serve it to their users, but I believe selling exchanges on a lot of upfront work may be a hard sell.

---

### Post #3 — @mobybit (2020-12-23)

Seems like a great idea (at least from my non tech perspective). Maybe as part of a listing deal Ergo dev(s) (who in turn could be given an Ergo grant) could offer to build (or perhaps even just consult and trouble shoot) an Exchange-Native dApp or two.

I wonder if someone could talk to Binance or Bitfinex about this idea, run it by them to gauge interest and see what they think, see what specific ideas they might have for the first Exchange-Native dApp. Then use that information to write a custom proposal for that exchange.

---

### Post #4 — @morphic (2020-12-23)

Yeah, the standardization and the tooling/framework support is the key for reducing the overhead, I think.

Ideally for strong selling point we need to have:

1. the Ergo dApp Standard Specification
2. a cross platform reference implementation of the standard (probably Rust based library)
3. Hosting technology adaptation wrappers (like JNI wrappers around Rust reference implementation to host dApps inside Java/Scala stack)
4. a prototype dApp implementation (e.g. Multi-sig or Treasury)
5. a prototype of the Ergo dApp Hosting Service (probably based on the technology stack used currently by Explorer)

This is pretty much all the key components, we need to have in a working PoC prototype of the design.

Choosing Rust for reference implementation seems well motivated here as well, because it can be embedded in pretty much every hosting environment out there.

---

### Post #5 — @morphic (2020-12-23)

For selling this to exchanges I sink we should clearly describe the concept (as a Whitepaper probably) and a roadmap.

It should be clear for everybody how one can engage in the process and which roles they can play (Hosting, dApps Developers, Technology Partner).

This can also be a kind of public initiative of EF, for which we need a couple of early partner exchanges, contributing on their side in pushing PoC prototype towards production v1.0 release (but, we need to have PoC prototype first, otherwise the communication will eat up all the time)

The incentive for early partners is to collect Service Fee from the dApps and having dominance in their niche. For example Hotbit (with 90% of the volume) now dominates Ergo trading now, and they were early lister.

The same can happen with dApps, the first one who will engage, dedicate resources and become EF partner will have direct support from core devs and EF etc. Other will have to wait until the first release will come out of the early partners.

---

### Post #6 — @kushti (2020-12-23)

Before a whitepaper, it would be good to consider motivating examples showing how exchanges and users will benefit.

---

### Post #7 — @morphic (2020-12-23)

This should be a section in the WP.

---

### Post #8 — @mobybit (2020-12-24)

[@morphic](/u/morphic) So if I understand you correctly, it seems there should first be a “developer friendly App Platform/Framework - a single, consistent and feature complete portable library which can be used for Web, Mobile and desktop apps” as per your 12/22/2020 post in Discord/Exchanges (<https://discordapp.com/channels/668903786361651200/668921579928813587/790890222229389312>)

Then after we have the “Developer Friendly App Platform/Framework”, we could better approach exchanges with an “Exchange-Native Ergo dApps” proposal and/or Whitepaper. And of course the Developer Friendly App Platform/Framework, in addition to being useful for approaching exchanges, would have extremely high utility for the Ergo ecosystem. So it seems having the Developer Friendly App Platform/Framework should be a top priority, regardless of whether or not we would use it to approach exchanges. Is my understanding correct?

What needs to happen to make the Developer Friendly App Platform/Framework a reality?

---

### Post #9 — @morphic (2020-12-24)

Yes, that is correct. It seems Developer Friendly App Platform/Framework is a “must have” when looking from many perspectives.  
I see it as the main entry point for any developer willing to use Ergo in their app.

This was also my motivation for creating Appkit. It was relatively easy to implement, since I was able to reuse the whole Sigma and some ergo-wallet code directly. Also I hoped to run it cross platform using GraalVM, but it didn’t work out well in practice, too heavy weight and complex.  
Using Rust solves the portability problem, but implies full rewrite of ErgoTree interpreter in order to be feature-complete.

So, talking about Developer Friendly App Platform/Framework and based on Appkit experience I think we need to have 2-layered framework:

Layer 1: A non-opinionated cross-platform library which provides full access to Ergo blockchain (what ergo-lib can hopeful become over time)

Layer 2: A high-level, but also more opinionated framework for creating multi-stage dApps, which is built on top of Layer-1. (I put Ergo Headless dApp framework in this category)

From this perspective we already doing the right steps, and I’m quite happy we have both layer-1 and layer-2 prototypes already.

So, back to the question “what needs to happen…” I see the following milestones:

1. ergo-lib need to become mature enough to support key smart contracts (DEX, Multi-sig, Treasury, Auction, Oracle-Pools, etc). It doesn’t need to be feature complete, but it should be design-complete, so that the design can be documented and understood by external developers.
2. dApp Standard/Protocol should be designed and specified, so that participating exchanges be able to use either our reference implementation or their own implementation
3. Ergo Headless dApp framework needs to support all the same apps (DEX, Multi-sig, Treasury, Auction, Oracle-Pools, etc) and also serve as reference implementation of Ergo dApp Standard. Again it doesn’t need to be feature complete, but should be design-complete. What is also important is that all the same app are supported on all layers.
4. PoC prototype of a standalone dApp hosting service is implemented, in order to  
   a) run the above mentioned dApps  
   b) demonstrate an example of how the dApps can be integrated into hosting technology stack (i.e. Java/Scala stack)
5. Whitepaper is written which introduces the basic concepts, defines investment thesis  
   (why exchanges should put their money in and what they can expect), roadmap, etc

Despite of the logical ordering between these milestones they all can be implemented in parallel.  
While point 1 and 3 already in progress (there are repos and commits there), others are not started yet.

So, before selling this topic to exchanges, we need to have a full package of the above five artifacts unless there are early partners (like Emurgo) who want to participate (for example fully take care of the point 4 from the above list)

---

### Post #10 — @mobybit (2020-12-25)

Excellent explanation, thanks. Very detailed and helpful for seeing how the things fit together, especially for a non programmer like me.
