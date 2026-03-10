---
title: 拍卖币（Auction Coin）——基于拍卖的释放和Degen Finance自主机器
description: 'ErgoForum discussion: 拍卖币（Auction Coin）——基于拍卖的释放和Degen Finance自主机器'
tags:
- ergoforum
- native-tokens
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/auction-coin-degen-finance/4288
created: '2023-04-12'
last_activity: '2023-04-12'
posts_count: 1
views: 264
likes: 1
glossary_hits:
- Native tokens
---

# 拍卖币（Auction Coin）——基于拍卖的释放和Degen Finance自主机器

> **Forum thread:** [https://ergoforum.org/t/auction-coin-degen-finance/4288](https://ergoforum.org/t/auction-coin-degen-finance/4288)
> **Category:** Uncategorized | **Created:** 2023-04-12 | **Posts:** 1 | **Views:** 264

**Related concepts:** Native tokens

---

### Post #1 — @ergonautgcn (2023-04-12)

**拍卖币** **（Auction Coin）——** **基于拍卖的** **释放** **和** **Degen Finance** **自主机器**

作者：Kushti 核心开发者

在Ergo中作为普通合约完成的释放开启了使用Ergo的工作量证明网络作为时间戳机器以通过智能合约发行其他代币的可能性。第一个自然扩展是通过类似于ERG释放合约的合约在每个区块中释放自定义代币，例如，请参阅[市场驱动的释放合约 5](https://www.ergoforum.org/t/market-driven-emission-contracts/3749)。

但是我们可以使用区块链作为时钟和现有去中心化合约以自主去中心化的方式发行代币，以不太直接的方式模拟数字商品（数字黄金），而且在我们的例子中也没有奖励矿工。

**Auction Coin** **（** **拍卖币** **）**

让我们假设所有新的Auction Coin（拍卖币）（AC）代币都被锁定在一个合约中，除了少数代币用于初始化合约已知的流动资金池之外。 然后，每隔 2 天 (1440) 个区块，可以解锁固定数量的 AC，即通过创建拍卖卖掉它们。拍卖具有合约定义的起始出价，持续 1 天（720 个区块）。

然后每20天（即10次拍卖，如果全部拍卖成功）合约使用累积的ERG从流动性池中回购 AC（[使用类似于从流动性池中回购代币的合约](https://www.ergoforum.org/t/buying-back-tokens-from-liqudity-pool/4275) 2 ）。

此外，如果之前的拍卖成功，则起拍价可以上涨 1%，否则可以下跌1%。

这个简单的机器试图尽可能多地累积 ERG，并使用累积的 ERG 定期拉高流动性池中的AC。 机器的可预测性欢迎人类以不同的方式使用它，例如，在机器干预后，在拉高出货前，累积AC。透明机器和已知假设之上的纯Degens Finance（DegFi）。

原文链接：

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png)
[Auction Coin - auction-based emission and Degen Finance autonomous machine](https://www.ergoforum.org/t/auction-coin-auction-based-emission-and-degen-finance-autonomous-machine/4287) [Research and Development](/c/dev/research-and-development/7)

> Emission done as an ordinary contract in Ergo opens possibility to use Ergo’s proof-of-work network as timestamping machine to issue other tokens via smart contracts. First natural extension is about emitting customs tokens every block via a contract similar to Erg emission contract , for example, see [Market-driven emission contracts](https://www.ergoforum.org/t/market-driven-emission-contracts/3749) .
> But then we can use blockchain as clocks and existing decentralized contracts to issue a token in autonomous decentralized fashion, simulating a digital commodit…
