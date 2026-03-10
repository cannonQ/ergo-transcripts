---
title: 'Rosen Bridge Update: Expansion of Watcher Infrastructure'
date: '2024-03-12'
author: Ergo Platform
tags:
- collateral
- ecosystem
- ergo-blog
- native-tokens
- rosen-bridge
- transaction
category: blog
blog_tag: Ecosystem, DeFi
type: news
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Rosen-Bridge-Update-Expansion-of-Watcher-Infrastructure
glossary_hits:
- Collateral
- Native tokens
- Rosen Bridge
- Transaction
---

# Rosen Bridge Update: Expansion of Watcher Infrastructure

> **Published:** 2024-03-12 | **Author:** Ergo Platform | **Tag:** Ecosystem, DeFi | **Type:** news

*Since the launch of Rosen Bridge, more than 1 million $ERG have been bridged to the Cardano blockchain. Additionally, there has been extensive liquidity from Cardano back to the Ergo network. A testament to the power of decentralized infrastructure, Rosen Bridge is primed to set a new standard in cross-chain DeFi with the upcoming additions of the Bitcoin and EVM chains.*

**Related concepts:** Collateral, Native tokens, Rosen Bridge, Transaction

---

As the team prepares to onboard these additional chains, they have made significant strides in developing the coding for the new bridges while also upgrading the current bridge design. As such, an important update is coming for the deployment of Watchers.

Those who have been (or are interested in) participating as a Watcher, will no longer need to worry about the system capping the number of Watchers per chain. Previously, there was a maximum of 77 Watchers observing each blockchain. Going forward, as long as someone has a computer and the required bridge collateral (30k $RSN and 800 $ERG), they will be able to deploy a Watcher for any of the bridged chains. Once their Watcher is online, they will be able to operate as many permits (3k $RSN each) as they desire on their Watcher.

In a recent announcement, the Rosen Bridge team outlined the following upgrades and changes to Rosen Bridge:

>“- New config tokens and contracts will be created and deployed (new tokens are internal system tokens and is not something you should care about)
>- Guards will block [the creation] of new event triggers in the network by updating some parameters. As a result, current watchers cannot create commitment and event triggers for a while.
>- during this time, user events will get stuck in the bridge [until the] new version is up, then all of [the] stuck txns will be processed (so users should expect an 5-6 hours of delay during this phase)
>- Rosen App (UI) will be in maintenance mode for a few hours in order to prevent users from sending new transactions.
>- Guards will update their service to v2.
>- Watchers will update their services and migrate to v2. Instructions are easy and will be provided later. (simply it is Unlock -> Update -> Lock)
>- As soon as [there are] a few watchers on v2, the txn processing will [resume].
>- Rosen App will be updated to allow new txns.”

For additional information on Rosen Bridge, please visit the [official website](https://rosen.tech/) and [X account](https://twitter.com/RosenBridge_erg).
