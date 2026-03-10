---
title: Erg释放时间表以及跟efyt的关系
description: 'ErgoForum discussion: Erg释放时间表以及跟efyt的关系'
tags:
- box
- eip
- ergo-explorer
- ergo-foundation
- ergoforum
- native-tokens
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/erg-efyt/4546
created: '2023-11-07'
last_activity: '2023-11-07'
posts_count: 1
views: 250
likes: 1
glossary_hits:
- Box
- EIP
- Ergo Explorer
- Ergo Foundation
- Native tokens
---

# Erg释放时间表以及跟efyt的关系

> **Forum thread:** [https://ergoforum.org/t/erg-efyt/4546](https://ergoforum.org/t/erg-efyt/4546)
> **Category:** Uncategorized | **Created:** 2023-11-07 | **Posts:** 1 | **Views:** 250

**Related concepts:** Box, EIP, Ergo Explorer, Ergo Foundation, Native tokens

---

### Post #1 — @ergonautgcn (2023-11-07)

**ERG释放** **时间表**

Ergo的最大供应量上限为97,739,925枚ERG，预计到2045年全部释放完毕。根据EIP27提案，区块奖励将在2026年减少到3枚ERG。

您可以在[ergo.watch](https://ergo.watch/emission)上直观地查看释放时间表。

**ERGO开发之旅**

Ergo开发之旅始于2017年，最终于2019年7月成功启动主网。在主网启动前一年，一种名为“Ergo-First-Year-Token”（EFYT）的代币正在流通。

**尔格** **元年** **代币** **（** **EFYT** **）**

EFYT于2017年5月在Waves DEX上空投并分发，起始数量为100,000枚EFYT代币。分发EFYT 有双重目的，一是为Ergo建立一个由利益相关者和爱好者组成的早期社区，二是在主网启动之前为平台的开发和推广筹集资金。

注意：EFYT是Waves代币，与Ergo的原生币ERG不同。Ergo主网启动后，挖矿开始产生ERG原生币。

EFYT的最大供应量为1,970,945.0枚，相当于Ergo第一年代币释放量的10%。金库会收到同等数量的ERG，允许将EFYT转换为ERG。

以下是一些与EFYT相关的资源：

[资产分配报告](http://pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46)

[Waves Explorer 上的EFYT](https://wavesexplorer.com/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46?search=725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46)

**为什么是97,739,924** **枚** **ERG？**

97,739,924.5枚ERG的最大供应量由预先商定的控制Ergo释放的智能合约确定。目标是创建一条简单的释放曲线，总供应量有限，接近1亿枚ERG，并在8至10年内完成释放（译注：EIP27提案将释放期延长至2045年）。

选择这个特定数量是为了覆盖初始创世状态，包括：

一个带有非预挖证明的盒子（1枚ERG）

基金会金库目前持有4,330,791.5枚ERG（译注：该数据已过时，需要查看金库钱包地址获取最新数据）

矿工奖励币盒，其中包含根据释放计划的2,080,800个区块所需的ERG，直到奖励达到0且存储租赁费和EIP-27-reemission-box （EIP-27再释放币盒）接管（93,409,132枚ERG）

金库币盒受权属智能合约（Vesting smart contract）保护，确保初始解锁金额，然后释放ERG提供2.5年的资金，不超过流通量的10%。这些分配导致总供应量为 97,739,924.5 枚ERG。

对于非预挖证明，Ergo的创世前状态包含来自比特币和以太坊的区块哈希，以及主网启动前后《卫报》、《Vedomosti》和新华社等新闻来源的头条新闻。您可以在[mainnet.conf](#L11)文件中找到相关信息。

释放时间表的代码可以在[此处](#L24)找到。

**Ergo基金会**

Ergo 基金会是一个社区驱动的实体，重点关注：

促进Ergo平台协议的不间断开发。

鼓励Ergo平台及其原生代币 (ERG) 的广泛采用和使用。

开发围绕Ergo平台的生态系统。

促进Ergo平台和区块链技术的使用，造福社会。

支持真正去中心化的基础设施。

维护隐私作为一项基本人权。

为了支持平台的开发、推广、大型活动和其他活动，Ergo设立了一个金库。金库收到释放期间释放的4.43%的Erg。在主网启动后的头两年，金库每个区块收到了7.5枚Erg。

欲了解更多信息，您可以参考最新的[透明度报告](https://docs.ergoplatform.com/ergo-foundation-2022/)。

原文链接：[Emission - ErgoDocs](https://docs.ergoplatform.com/mining/emission/#ergo-foundation)
