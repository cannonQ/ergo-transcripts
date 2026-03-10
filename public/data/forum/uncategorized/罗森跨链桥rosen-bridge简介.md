---
title: 罗森跨链桥（Rosen Bridge）简介
description: 'ErgoForum discussion: 罗森跨链桥（Rosen Bridge）简介'
tags:
- ergoforum
- native-tokens
- rosen-bridge
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/rosen-bridge/4281
created: '2023-04-08'
last_activity: '2023-04-08'
posts_count: 1
views: 342
likes: 1
glossary_hits:
- Native tokens
- Rosen Bridge
- SigmaUSD
---

# 罗森跨链桥（Rosen Bridge）简介

> **Forum thread:** [https://ergoforum.org/t/rosen-bridge/4281](https://ergoforum.org/t/rosen-bridge/4281)
> **Category:** Uncategorized | **Created:** 2023-04-08 | **Posts:** 1 | **Views:** 342

**Related concepts:** Native tokens, Rosen Bridge, SigmaUSD

---

### Post #1 — @ergonautgcn (2023-04-08)

**罗森跨链桥（Rosen Bridge）** **简介**

罗森跨链桥（Rosen Bridge）是一座以Ergo（尔格）为中心的跨链桥，使用户能够在Ergo和任何其他链之间发送和接收原生币（Coin）和代币（Token）。然而，另一条链，比如X链（chainX），应该支持多重签名交易或门限签名。

在该跨链桥中，不需要在其他链上部署和使用智能合约，因为任何行动的共识都可以由一组Guard（守卫）在Ergo平台上完成，从而促成签署交易（Ergo或X链的交易）。这些交易可以由包括Guard（守卫） 在内的任何参与方广播到另一条链。

请观看[此视频](https://www.youtube.com/watch?v=Xsiy-yPJQ6w)以了解视频介绍。

**概念和假设**

该跨链桥采用双层架构。在Layer 1，Watcher（观察者）正在监视和报告网络上的事件。在就特定事件达成共识后，将通知Layer 2。在Layer 2，Guard（守卫）将验证事件并为Ergo或X链（chainX）创建/签署请求的交易。

对于任何X链（chainX），Guard（守卫）都持有一个多重签名钱包的密钥（或用于阈值签名的密钥的一部分）。更复杂的方法是可行的，但不是必需的。另一方面，Watcher（观察者）没有任何密钥。

Guard（守卫）使用m-out-of-n阈值/多重签名机制。因此，除非至少“m”个Guard（守卫）遭到破坏，否则该跨链桥不会被破坏。

Watcher（观察者）监视各链，验证并报告事件，并尝试就已验证的事件达成共识。然后他们将已批准事件通知Guard（守卫）。 Guard（守卫）将验证已批准事件并尝试签署请求的交易。

Watcher（观察者）主动监视链并触发事件，而Guard（守卫）仅验证获批事件。这种方法允许该跨链桥在不增加Guard（守卫）计算的情况下进行扩展。 理论上，任何人都可以成为Watcher（观察者），一组预定义的实体将充当Guard（守卫）。Watcher（观察者）和Guard（守卫）成员可以随时间变化。

请注意，该跨链桥不依赖于Watcher（观察者）的安全性。如果 Watcher（观察者）发生故障或腐败，从而造成欺诈事件，由于Guard（守卫）正在单独验证事件，因此该跨链桥是稳健且健康的。

其他链的交易应该有消息/信息/元数据支持。

为了检测和避免硬分叉、双花、已知或未知的欺诈以及竞态条件，该跨链桥并没有为了速度而牺牲安全性。例如，Watcher（观察者）在触发事件之前等待一些确认，Watcher（观察者）需要经历几个Ergo区块才能达成共识，Guard（守卫）正在寻找更多的确认来验证事件。

乍一看，为其他链提供多重签名钱包可能看起来不充分或不够复杂，无法满足普通用户的需求。最后，所有这些复杂的方法都依赖于相同的假设，即腐败方的数量不超过阈值。另一方面，由于该跨链桥只使用Ergo的智能合约，整个过程都可以在Ergo上进行审计，且无需在使用不同假设的不同链上创建多个智能合约。 这使得罗森跨链桥（Rosen Bridge）比目前已知的跨链桥更易于审计且更安全。

添加新链就像为Guard（守卫）创建钱包、创建Watcher（观察者）和设置一些配置一样简单。

**行动**

**行动 1- 将代币从** **X链（** **chainX** **）** **转移到** **Ergo** **（例如，将BTC 锁定在BTC上/在** **Ergo** **上铸造rBTC）**

1- 用户将付款连同元数据 {目标Ergo地址} 一起发送到该跨链桥的多重签名钱包。此笔交易可以由用户界面生成。

Watcher（观察者）定期从多重签名钱包中寻找事件。

3- 如果收到的付款有足够的确认，每个Watcher（观察者）都会在Ergo上创建一个新的“事件盒子”。

4- 如果特定事件有足够的“事件盒子”，任何Watcher（观察者）都可以创建“已批准事件盒子”。

5- Guard（守卫）正在寻找“已批准事件盒子”。如果看到“已批准事件盒子”，每个Guard（守卫）都会验证事件在X链（chainX）上的有效性，并在有效的情况下在Ergo上签署相关交易。

6- 如果有足够的签名，交易将在Ergo上广播。

7- 用户在Ergo上收到他的rToken。

8- Guard（守卫）确保广播的交易正在被挖掘并收到足够的确认。

**行动 2- 将 rToken从** **Ergo** **转移到** **X链（** **chainX** **）** **（例如，** **销毁Ergo上的** **rBTC/** **解锁BTC** **上** **的** **BTC）**

1- Ergo用户将资金发送到银行（Bank）（或将他的盒子与银行盒子一起花费掉以创建一个新的银行盒子）。元数据 {目标X链地址} 与交易一起存在。

2-Watcher（观察者）定期寻找银行盒子的事件。

3- 如果是有足够确认次数的新付款，每个Watcher（观察者）都会在Ergo上创建一个新的“事件盒子”。

4- 如果特定事件有足够的“事件盒子”，任何Watcher（观察者）都可以创建“已批准事件盒子”。

5- Guard（守卫）正在寻找“已批准事件盒子”。如果看到“已批准事件盒子”，每个Guard（守卫）都会验证事件在Ergo上的有效性，并在有效的情况下为 X链（chainX）签署相关的交易。

6- 如果有足够的签名，交易将在X链（chainX）上广播。

7- 用户在X链（chainX）上收到他的代币。

8- Guard（守卫）确保广播的交易正在被挖掘并收到足够的确认。

**行动 3- 将** **Ergo** **代币转移到** **X链（** **chainX** **）** **（例如，** **将** **SigUSD** **锁定在Ergo上** **/在** **BTC** **上铸造 rSigUSD）**

与行动 2 非常相似。

**行动 4- 将rToken从** **X链（** **chainX** **）** **转移到** **Ergo** **（例如，** **销毁** **BTC上** **的** **rSigUSD/** **解锁Ergo上的** **SigUSD）**

与行动1非常相似。

**行动 5- 从** **X链（** **chainX** **）** **转移到** **Y链（** **chainY** **）** **（例如，** **将ADA锁定** **Cardano上/在以太坊上铸造rADA）**

不知何故，行动1之后是行动 3。此过程可以自动完成，无需额外的用户干预。

**跨链桥费用**

费用在Ergo这边扣除。

**粉尘收集**

在某些情况下，Ergo上的交易不会花费所有的“事件盒子”。在这些情况下，集尘器应定期花费这些盒子。可能还有其他粉尘盒子需要收走。

**新链整合**

任何具有多重签名或阈值签名支持的链都可以添加到该跨链桥网络中来。

对于每个新网络，应实现/部署以下内容：

Watcher（观察者）：获取有关多重签名钱包中所收到付款的信息。

Guard（守卫）的新钱包。

Guard（守卫）的交易验证机制。

Ergo上相关的银行盒子

**益处**

一座统治它们的跨链桥：结合Ergo，它可以用来桥接具有多重签名/阈值签名支持的任何链。新链的额外开发很简单。

费用低：几乎所有的共识交易都是在Ergo这边完成的。

启用冷钱包：另一条链上的合理数量的资金可以存储在多重签名冷钱包中（由一组单独的密钥保护）。如果资金不够，可以将资金发送到该跨链桥的热钱包。

安全性：由于共识是在Ergo这边达成的，因此该跨链桥在很大程度上不易受到其他链的漏洞影响。

易于整合：新链可以在不了解Ergo开发的情况下以最小的工作量与该跨链桥整合，如上所述。

可审计：几乎整个过程都存储在Ergo区块链上，任何人都可以审计。此外，由于仅使用Ergo智能合约，与为任何新链设有新代码和智能合约相比，该跨链桥的代码和合约以及开发新链整合更容易审计。

可扩展：Guard（守卫）仅验证已批准事件，不会浪费时间和资源来主动监视多个网络。另一方面，可以在不增加Watcher（观察者）计算成本的情况下为现有链和新链部署大量Watcher（观察者）。这使该跨链桥更具可扩展性，且面对DoS攻击时更加稳健。

**代币化**

在本节中，我们将简要介绍“Rosen”代币，它是该跨链桥的主要驱动力。更多详细信息将很快公布。

Guard（守卫）集是预定义的，由一些众所周知的不同实体组成。 但是，任何人都可以通过质押预定义数量的“Rosen”代币来成为Watcher（观察者）。

通过质押“Rosen”代币，Watcher（观察者）获得一定数量的“RosenEvent”代币。每个“事件盒子”都需要一个“RosenEvent”代币。该代币将在资产转移完成后发还给Watcher（观察者），或者如果事件是欺诈性生成的，则跨链桥将收走该代币。

Watcher（观察者）可以通过发还“RosenEvent”代币来取消质押其“Rosen”代币。 因此，由于欺诈性事件报告而丧失“RosenEvent”代币将导致质押的“Rosen”代币被罚没。这将激励Watcher（观察者）行事端正并惩罚作恶行为。同时，它作为一种机制来防止DoS攻击。

当 Guard（守卫）为用户创建最终交易时，他们会分享收取的费用并释放新的“Rosen”代币。因此，参与成功的事件报告将使Watcher（观察者）在两个方面受益：收取跨链桥费用和收到新的“Rosen”代币。

实际上，任何具有较高价值资产转移的跨链桥路径都会吸引更多的Watcher（观察者），直到费用和“Rosen”代币释放的份额缩小到较低使用路径变得更有利可图的水平。使用此机制可确保Watcher（观察者）在不同跨链桥路径之间的适当分布。

Watcher（观察者）需要独立行事，单独完成监视任务。在实践中，一些Watcher（观察者）可能会简单地回复其他诚实Watcher（观察者）创建的事件。为了避免这种情况，有一些众所周知的方法，其中最简单的方法是使用提交-显示机制（Commit-reveal Mechanism）。 然而，可以使用蜜罐方法（Honeypot Approach），其中，一些Watcher（观察者）和重放者（Replayer）正在发送虚假事件，当在蜜罐中发现他们时，他们将受到丧失“RosenEvent”代币的惩罚。

**附注** **：**

这是一个 WIP。 此设计的任何部分都可能在实现过程中发生调整。

请随时分享您的意见和想法，以改进此设计。

本文仅供学习区块链知识使用，不作投资建议！

原文来源：

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/rosen-bridge)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/0/042a9b5f5977e28874ac7722b6cf9f15ecda02b1.png)

### [rosen-bridge](https://github.com/rosen-bridge)

rosen-bridge has 13 repositories available. Follow their code on GitHub.
