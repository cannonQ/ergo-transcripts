---
title: 了解罗森跨链桥（Rosen Bridge）：用于安全价值转移的跨链桥
description: 'ErgoForum discussion: 了解罗森跨链桥（Rosen Bridge）：用于安全价值转移的跨链桥'
tags:
- ergoforum
- native-tokens
- rosen-bridge
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/rosen-bridge/4279
created: '2023-04-07'
last_activity: '2023-04-07'
posts_count: 1
views: 315
likes: 1
glossary_hits:
- Native tokens
- Rosen Bridge
---

# 了解罗森跨链桥（Rosen Bridge）：用于安全价值转移的跨链桥

> **Forum thread:** [https://ergoforum.org/t/rosen-bridge/4279](https://ergoforum.org/t/rosen-bridge/4279)
> **Category:** Uncategorized | **Created:** 2023-04-07 | **Posts:** 1 | **Views:** 315

**Related concepts:** Native tokens, Rosen Bridge

---

### Post #1 — @ergonautgcn (2023-04-07)

**了解** **罗森跨链桥（Rosen Bridge）** **：用于安全价值转移的跨链桥**

[![Understanding Rosen Bridge](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/6/6bf070eef9c230378638993d97dfe42f6f5f83a5_2_690x383.webp)

Understanding Rosen Bridge900×500 8.9 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/6/6bf070eef9c230378638993d97dfe42f6f5f83a5.webp "Understanding Rosen Bridge")

*随着区块链网络和数字资产数量的增加，对互操作性和跨链桥的需求变得更加明显。* *罗森跨链桥（Rosen Bridge）* *是一个很有前途的解决方案，可以在* *Ergo（尔格）* *区块链和其他* *许可* *链之间实现价值转移。 在本文中，我们将深入探讨* *罗森跨链桥（Rosen Bridge）* *的工作原理、其关键* *组成部分* *以及驱动该系统的激励措施。*

**罗森跨链桥（Rosen Bridge）** **概述**

罗森跨链桥（Rosen Bridge） 是一座允许用户在不同区块链网络之间转移数字资产的跨链桥。该跨链桥基于一个由双方Watcher（观察者）和 Guard（守卫）组成的系统，双方共同协作以确保安全地完成价值转移。罗森代币（Rosen Token）用于保值和支付交易手续费。

Watcher（观察者）充当预言机的替代品，并充当分布式消息传递服务，在提交交易以进行跨链结算时通知Guard（守卫）。Guard（守卫）是一组分布式的参与者，他们负责结算交易并确保系统的安全。他们负责验证交易并检查事件触发器。

罗森跨链桥（Rosen Bridge）在Ergo端使用多重签名钱包和合约，每个起源链都有自己的一组Watcher（观察者）。Watcher（观察者）将一些罗森代币（Rosen Token）锁定在Ergo上并铸造许可代币（Permit Token）。当事件发生时，Watcher（观察者）在Ergo上创建提交（Commitment）并创建事件触发框。事件结束后，将返还许可代币（Permit Token）。

Guard（守卫）锁定了一些罗森代币（Rosen Token），并在每条链上都有一个多重签名钱包。他们寻找事件触发框，单独且独立地验证报告的事件，并发起交易。他们还检查是否有足够的确认次数、消息验证、事件验证、双花以及针对部分未解决交易的保护。

**激励和奖励**

罗森跨链桥（Rosen Bridge）激励Watcher（观察者）和Guard（守卫）为系统的最佳利益行事。支付交易确认后，会产生奖励支付。Guard（守卫）设置奖励，奖励是收取的费用和罗森代币（Rosen Token）。如果Watcher（观察者）作恶，则会收走许可代币（Permit Token），且Watcher（观察者）会失去一些质押的罗森代币（Rosen Token）。

**安全** **措施**

罗森跨链桥（Rosen Bridge）设计有安全措施，以防止作恶者利用该系统。如有作恶，智能合约会强制收走许可代币（Permit Token），其他Guard（守卫）将重新组队并修改密钥。该系统还使用冷存储钱包，即每条链上具有不同密钥的多重签名钱包。资金被锁定在冷钱包中，直到交易需要它们才会解锁。

**结论**

罗森跨链桥（Rosen Bridge） 是一个很有前途的跨链价值转移解决方案，可确保安全性并激励参与者为系统的最佳利益行事。Watcher（观察者）和 Guard（守卫）共同协作来验证交易和事件，奖励是根据收取的费用和罗森代币（Rosen Token）来设置的。该系统还纳入了冷存储钱包和收走许可代币（Permit Token）等安全措施，以防止作恶者利用该系统。随着区块链网络的不断发展，罗森跨链桥（Rosen Bridge） 等解决方案对于互操作性和安全价值转移将变得越来越重要。

本文仅供学习区块链相关知识使用，不做投资建议！

原文链接：

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/3/360db83263e79cba7951e7ba15aa4495131aa0f1.png)
[Medium – 19 Mar 23](https://medium.com/@DemeterGroup/understanding-the-rosen-bridge-a-cross-chain-bridge-for-secure-value-transfer-7f0a82ada611 "07:46AM - 19 March 2023")

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/6/682bdadf345ed8a6e026f108f4a739775ebccba7.png)

### [Understanding the Rosen Bridge: A Cross-Chain Bridge for Secure Value Transfer](https://medium.com/@DemeterGroup/understanding-the-rosen-bridge-a-cross-chain-bridge-for-secure-value-transfer-7f0a82ada611)

With the increasing number of blockchain networks and digital assets, the need for interoperability and cross-chain bridges has become more…

Reading time: 3 min read
