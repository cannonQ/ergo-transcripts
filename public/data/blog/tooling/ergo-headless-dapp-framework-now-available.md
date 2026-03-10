---
title: Ergo Headless dApp Framework Now Available
date: '2020-12-08'
author: Guy Brandon
tags:
- box
- eip
- eip-6
- ergo-blog
- headless-dapp
- oracle-pools
- tooling
category: blog
blog_tag: Tooling
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/2020-12-08-ergo-headless-dapp-framework-now-available
glossary_hits:
- Box
- EIP
- EIP-6
- Headless dApp
- Oracle pools
---

# Ergo Headless dApp Framework Now Available

> **Published:** 2020-12-08 | **Author:** Guy Brandon | **Tag:** Tooling | **Type:** blog

**Related concepts:** Box, EIP, EIP-6, Headless dApp, Oracle pools

---

*This new development will have a number of implications for the Ergo ecosystem and developers, making it far easier to build applications on Ergo.*

In a recent article, we looked at the idea of [‘Headless’ dApps](https://ergoplatform.org/blog/2020-11-27-an-introduction-to-headless-dapps/): portable dApp off-chain code that can be used by anyone to ship dApps easily by plugging different components together and adding an interface. 

On 30 November, a new release was made from the Emurgo code repository: the [Ergo Headless dApp Framework (HDF)](https://github.com/Emurgo/ergo-headless-dapp-framework)!

**What is the Ergo Headless dApp Framework?**

Ergo HDF is a Rust framework for building Ergo Headless dApps. It provides developers with the very first portable UTXO-based headless dApp development framework on any blockchain.

The Ergo HDF project makes it easy for developers who are new to blockchain to create dApps without understanding smart contracts in detail, but has a number of goals:

1. Enable developers to write their off-chain logic only once, using the HDF to create their own headless dApps, thereby allowing them to target all platforms (desktop, web, mobile) easily.
2. Provide developers with an easy experience to go from [Ergo dApp Specifications](https://github.com/ergoplatform/eips/blob/master/eip-0006.md) to headless dApps with greater assurance and a straightforward implementation path.
3. Separate dApps’ off-chain logic from frontend logic, thereby allowing reusability no matter what application or front-end is attempting to integrate a headless dApp.
4. Provide easy-to-use methods for front-end developers to access the current state of the dApp protocol, without having to understand how any of it works.
5. Abstracting the concept of defining and acquiring input UTXOs for a headless dApp by using a novel design pattern, specifying a ‘BoxSpec’ for each required input UTXO.
6. Enabling scripts, trading bots, and other software to be trivially built on top of multiple headless dApps created with the HDF, thereby offering a standardised interface and high degree of composability.

To give one example, the Ergo HDF makes it really easy to acquire data points from [Ergo’s oracle pools](https://ergoplatform.org/blog/2020-08-31-ergos-oracle-pools-and-what-they-mean-for-the-ecosystem/), without needing to understand how they work in depth.

A tutorial series is being created, providing a step-by-step guide to developing your own headless dApp. Check out the first lesson: the [Math Bounty Headless dApp](https://github.com/Emurgo/ergo-headless-dapp-framework/blob/main/tutorials/Math_Bounty/1-math-bounty-dApp-getting-started.md).

To find out more about Emurgo’s work and view the Ergo HDF, see the [Headless dApp Framework on the Emurgo code repo](https://github.com/Emurgo/ergo-headless-dapp-framework).
