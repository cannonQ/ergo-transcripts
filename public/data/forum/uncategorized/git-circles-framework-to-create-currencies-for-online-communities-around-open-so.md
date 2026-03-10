---
title: 'Git Circles: Framework to Create Currencies for Online Communities Around
  Open Source Projects'
description: 'ErgoForum discussion: Git Circles: Framework to Create Currencies for
  Online Communities Around Open Source Projects'
tags:
- amm
- ergoforum
- native-tokens
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/git-circles-framework-to-create-currencies-for-online-communities-around-open-source-projects/5160
created: '2025-05-28'
last_activity: '2025-05-31'
posts_count: 3
views: 170
likes: 9
glossary_hits:
- AMM
- Native tokens
---

# Git Circles: Framework to Create Currencies for Online Communities Around Open Source Projects

> **Forum thread:** [https://ergoforum.org/t/git-circles-framework-to-create-currencies-for-online-communities-around-open-source-projects/5160](https://ergoforum.org/t/git-circles-framework-to-create-currencies-for-online-communities-around-open-source-projects/5160)
> **Category:** Uncategorized | **Created:** 2025-05-28 | **Posts:** 3 | **Views:** 170

**Related concepts:** AMM, Native tokens

---

### Post #1 — @kushti (2025-05-28)

I think the mass adoption for global neutral Proof-of-Work based programmable asset is about empowering community currencies by interconnecting them. And while community currencies are usually considered local in terms of geography, we may have digital community currencies for people sharing some vision or work.

In this post, I describe Git Circles, a solution to create community currencies for open source project communities.

Basic actions could be seen in the following example:

* Git oracle is posting commit id, its author, and number of lines of code in the commit, along with oracle’s signature. Via this action new tokens are minted, N lines of code provides N project tokens
* There could be services which are providing services for tokens (e.g. computing outsourcing services like Celaut, AI services etc)
* One special kind of service is sponsorship, which is about exchanging tokens for stablecoins (Gold or USD denominated) / ERG / rsBTC (bridged BTC) etc via [Basis, a foundational on-chain reserve approach to support a variety of offchain protocols](https://www.ergoforum.org/t/basis-a-foundational-on-chain-reserve-approach-to-support-a-variety-of-offchain-protocols/5153) . A sponsor may spend tokens obtained on services, so may be “sponsorship” would not be the most appropriate term (depending on services economy)

Note, every project (repository or a set of coupled repositories) has its own token. For example, Linux tokens is different from Java tokens or Rust tokens. Potentially Linux and Java ecosystems have different service providers and sponsors. Both systems use Ergo blockchain though.

Ideally, I think the digital currency should be offchain, with on-chain reserves to be on Ergo only. But for starters it could be done via on-chain oracle and tokens, and then DeFi tools (such as AMM liquidity pools) can be used to sponsor a project.

There are some people willing to contribute to the project , if you’re interested, please lemme know! Rust devs are needed in the first place.

---

### Post #2 — @jossemii (2025-05-29)

This seems very interesting!

* The tokens minted seems that follows the CAT idea, right? [CATs | Stability Nexus](https://docs.stability.nexus/about-us/the-stable-order/cats) Or they could be partially on DEX liquidity too?
* What do you think with “providing services for tokens”? What type of services?

---

### Post #3 — @kushti (2025-05-31)

In on-chain implementation, they can be on DEXes too. Lemme re-check CAT in details!

In regards with services, I think, OSS community, roughly, has following three phases (if not dies on the way):

* a guy is starting to work during evening on some idea. At some point it is getting attention from friends or like minded people over the Internet
* a small community now has few contributors, still working from time to time, and also few first users or fans. Here it makes sense to start producing tokens (as units of contribution), and supporters may provide services to devs, eg computing, for tokens.
* pretty big community is getting sponsorship or doing business via selling something. Here reserves (or liquidity pool) maybe created, to exchange contribution tokens for more widely recognizable forms of money (cryptocurrencies / stablecoins).
