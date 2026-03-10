---
title: Ergo的西格玛协议是一种强大而灵活的零知识证明
description: 'ErgoForum discussion: Ergo的西格玛协议是一种强大而灵活的零知识证明'
tags:
- ergoforum
- schnorr-signatures
- sigma-protocols
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo/4392
created: '2023-06-27'
last_activity: '2023-06-27'
posts_count: 1
views: 222
likes: 1
glossary_hits:
- Schnorr signatures
- Sigma protocols
---

# Ergo的西格玛协议是一种强大而灵活的零知识证明

> **Forum thread:** [https://ergoforum.org/t/ergo/4392](https://ergoforum.org/t/ergo/4392)
> **Category:** Uncategorized | **Created:** 2023-06-27 | **Posts:** 1 | **Views:** 222

**Related concepts:** Schnorr signatures, Sigma protocols

---

### Post #1 — @ergonautgcn (2023-06-27)

[![ergo sigma](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/7/7b0a8999c372844eb557c871932d1fa356aa9aa4_2_690x345.jpeg)

ergo sigma1280×640 68.5 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/7/7b0a8999c372844eb557c871932d1fa356aa9aa4.jpeg "ergo sigma")

*Ergo的智能合约和DeFi功能基于* *西格玛协议（* *Sigma* *Protocol）* *——一种强大* *而* *灵活的零知识证明。详细了解* *它们* *为何如此重要，以及* *它们* *如何让* *Ergo* *在竞争中脱颖而出。*

密码学是一个令人着迷的领域，它提供的最令人激动且有趣的概念之一便是零知识证明（Zero-knowledge Proof）。简而言之，零知识证明允许某人证明他们知道问题的解，而无需实际透露解本身。

假设有人在酒吧里拾得一部手机。您可以通过隐藏屏幕、输入解锁代码并向发现它的人显示解锁的屏幕来证明它是您的。这是零知识证明的一个简单示例：您已经证明您拥有该手机，而没有泄露任何敏感信息。

在密码学中，大多数实际问题都与秘密相关。最流行的应用是数字签名，全世界每天都有数百万人在使用。本质上，这些内容涉及：“这条消息证明我知道与该公钥相关的私钥 - 但我不会泄露私钥本身”。（并非每个数字签名机制都使用零知识证明，但零知识证明却是最流行的。）

**西格玛协议**

在数百甚至数千个零知识协议中，有一个高效且可组合的知识证明协议的子类，称为西格玛协议（Sigma Protocol）。这类协议也称为“广义Schnorr证明（Generalized Schnorr Proof）”。西格玛协议可以直接表示为数字签名，因此我们可以有效地将它们视为区块链背景下的签名。

那么，Schnorr签名（Schnorr Signature）就是一种简单的西格玛协议签名。Schnorr签名[已被提议作为比特币当前签名的替代方案](https://en.bitcoin.it/wiki/Schnorr)。（它是最高效的签名机制之一，这就是为什么它对比特币有利。）

然而，还有数十种其他西格玛协议。它们的优点之一是它们是可组合的，使用简单的AND和OR逻辑。因此，您可以使用以下语句请求签名：“向我证明知道这个秘密或那个秘密”（这是二选一环签名）。 或者您可以问，“向我证明知道这三个秘密中的任意两个”（三选二环签名）。这只是两个简单的例子；还有更多，而且它们可能更复杂，更精密。

**Ergo：西格玛 + 区块链**

当与区块链结合时，这些可组合的证明可以实现一些非常强大的用例。证明的逻辑可以包括基于区块链状态的条件。例如，“如果达到了截止时间区块高度，Alice可以提供关于退款密钥的知识。”或者需要Alice和Bob的环签名才能花费原生币。”或者“如果该帐户至少持有100枚ERG，Alice或Bob可以移除超过该金额的资金。”

因此，可以使用安全、简单且高效的西格玛协议在Ergo上构建一些非常有趣且灵活的DeFi应用。

原文链接：

<https://ergoplatform.org/en/blog/2020_03_16_ergo_sigma/>
