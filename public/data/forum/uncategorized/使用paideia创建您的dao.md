---
title: 使用Paideia创建您的DAO
description: 'ErgoForum discussion: 使用Paideia创建您的DAO'
tags:
- ergoforum
- native-tokens
- paideia
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/paideia-dao/4307
created: '2023-04-25'
last_activity: '2023-04-25'
posts_count: 1
views: 288
likes: 2
glossary_hits:
- Native tokens
- Paideia
---

# 使用Paideia创建您的DAO

> **Forum thread:** [https://ergoforum.org/t/paideia-dao/4307](https://ergoforum.org/t/paideia-dao/4307)
> **Category:** Uncategorized | **Created:** 2023-04-25 | **Posts:** 1 | **Views:** 288

**Related concepts:** Native tokens, Paideia

---

### Post #1 — @ergonautgcn (2023-04-25)

**使用Paideia创建您的DAO**

作者：LIBERLION 发布日期：2023年4月11日 阅读时长：6分钟 暂无评论

[![Create Your DAO With Paideia_cn](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/4/4ac10241afe79a9d98ae9ee144fac50a764b62e6_2_690x431.png)

Create Your DAO With Paideia\_cn800×500 202 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/4/4ac10241afe79a9d98ae9ee144fac50a764b62e6.png "Create Your DAO With Paideia_cn")

去中心化自治组织（DAO）是根据通过智能合约编写的规则在区块链协议上完全自主运行的系统。通过免除人工干预或中心化协调，DAO通常被称为“去信任”系统。

**什么是Paideia**

Paideia是一个基于Web3的软件DAO管理工具，它将支持治理代币分发、筹款、金库管理、支出或治理提案的创建、利益相关者讨论所有想法和提案的论坛，以及轻松部署资金以实现他们的目标。

其开发者表示，技术目标是任何人都可以利用安全、开放、易于使用、费用便宜且可以在任何环境中使用的DAO工具集发起一个DAO，进而可以使用各种方法分发代币，创建提案和收集选票，从而有助于安全、公平地共享资金。

所有开发都将是开源的，任何人都可以为代码库做出贡献。

Paideia正在Ergo和Cardano两条公链上进行构建，因为这两条公链都是采用的扩展UTXO结构，他们认为这比基于以太坊虚拟机（EVM）的智能合约具有多项优势。

该团队表示，智能合约将由独立的第三方进行审查，以确保它们符合最佳实践。此外，智能合约将接受大量测试，以确保资金安全以及计票公平、透明且防篡改。

**DAO的创建**

DAO的创建须解决诸如治理结构、投票系统和代币经济学等问题。

DAO可能会遇到可扩展性和适应性问题，且有不同的方法来解决这些问题。

可扩展性是指参与决策制定的成员人数。

要求大量DAO成员给予太多关注，系统会变得低效，导致他们发展壮大后决策效率降低。随着DAO成员人数和范围的增长，治理结构必须恰当。

但是，通过要求很少的成员支持各个决策，这些决策很可能不会很好地符合多数人的意见。这便是适应性。

为了在这些权衡项之间找到平衡，Paideia将提供各种治理结构。

当Paideia启动时，有两个选项将是**仲裁票数** **投票** **（Quorum Voting）** 或**乐观治理** **（Optimistic Governance）** 模式。

**乐观治理** 是一个只有白名单上的人才能创建提案的系统，除非受到代币持有者的质疑，否则所有提案都将默认获得批准。如果提案受到质疑，所有DAO成员都可以投票决定是否批准该提案。

默认投票系统将由基于代币的仲裁票数（Token-based Quorum）进行投票。仲裁票数是指需要最少数量的可用投票才能通过。一旦达到仲裁票数阈值，得票最多的决策将获胜。默认和典型的投票机制将是**单一选择投票** **（Single Choice Voting）** ，其中投票者将他们所有的投票权分配给一个选项。

降低仲裁票数百分比以提高可扩展性需要更少的投票者来批准提案。在这种情况下，适应性会降低，从而很容易提出恶意或构思不当的提案。

Paideia将具有平衡的默认值，但如果DAO发现其配置无法正常工作，可以通过启动后提案对其进行调整。

**二次方投票（** **Quadratic Voting** **）** 系统，可以在DAO创建之初或之后通过提案选择它。 它使用计算来限制投票权，其中每个投票者都有一定的投票权作为他或她的份额的“信用”，并计算为分配给每次投票表决的“信用”的平方根。

该模式保护少数群体，遵循“利益绑定”标准并帮助平衡权力以对抗鲸鱼，与基于代币的投票相比，可以更好地分散社区情绪。

您可以在我最后留下的文章\*(2)\* 中阅读有关此系统的更多信息。

DAO的创建者将在该平台上设计代币经济学，然后他们将能够选择以各种方式发行代币：

直接销售（FCFS）

该机制使用报名表，用户可在此表中同意为项目出资以换取代币。 一旦获得批准，将提供一份出资表，用户将能够发送特定加密货币以换取所发售的代币。 DAO可以确定权属期（Vesting Period）和其他参数。

**交互式** **代币发售（Interactive Token Offering）**

这种拍卖方法将允许用户设置他们愿意购买代币的最低和最高市场限额。使用算法，一旦达到平衡，价格将被确定，出价最高的人将享有以确定价格购买代币的优先机会。

**空投** **（Airdrop）**

DAO可以通过空投向任意数量的用户提供代币。该名单可以手动添加，也可以上传一个简单的“.csv”文件。

**可退款ICO**

这种方法，即首次代币发售（ICO），将使各个DAO可以选择允许向其出资者退款。可能有不同的参数，例如时间范围、里程碑等来设置退款。一个例子是为开发某个软件而成立的DAO，并为具有周期性里程碑的可交付成果建立路线图，并为每个里程碑支付相应的资金。如果代币持有者认为DAO没有履行其义务，他们可以选择以初始上市时的初始购买价格退还剩余的代币。

**Paideia** **治理**

Paideia将采用乐观DAO治理形式，初期由开发团队管理。

创建者表示，这种治理形式将使DAO迅速地发展壮大，让受信任的高管能够专注地行动，而不会因每个决策的不必要投票过程而陷入困境。高管们仍将无法做出自私或不公平的决策，因为利益相关者将始终有机会质疑他们的提案并强制投票。

随着项目的发展，Paideia DAO将转变为一个完全自治的实体，任何剩余的管理角色将由DAO选出的合格人员担任。

决策将由DAO投票做出，以维持项目的去中心化治理。 代币持有者将能够在既定时间范围内对提案提出质疑，如果出现质疑，所有代币持有者将能够投票决定提案是通过还是不通过。

**代币经济学**

该项目将拥有IDO（初始去中心化交易所发售）代币。

DAO的生成和功能的使用会有相关费用，这些费用将由Paideia的DAO和Paideia代币的创建者分摊。

最大供应量为2亿枚Paideia代币，分配如下：

[![Create Your DAO With Paideia_cn2](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/2/2ae9f04abd75ebda3131959881fa0c5f0d428fe0_2_649x500.webp)

Create Your DAO With Paideia\_cn2886×682 16.8 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/2/2ae9f04abd75ebda3131959881fa0c5f0d428fe0.webp "Create Your DAO With Paideia_cn2")

[白皮书](https://docs.paideia.im/tokenomics)

**路线图**

其[网站](https://www.paideia.im/about)上的文章显示了以下工作时间表：

**2022年第一季度**

开始用户体验（UX）开发，制作原型以向社区展示 ![:white_check_mark:](https://emoji.discourse-cdn.com/twitter/white_check_mark.png?v=12 ":white_check_mark:")已完成

完成白皮书 ![:white_check_mark:](https://emoji.discourse-cdn.com/twitter/white_check_mark.png?v=12 ":white_check_mark:") 完成

创建社交媒体帐户，并开始社区外展 ![:white_check_mark:](https://emoji.discourse-cdn.com/twitter/white_check_mark.png?v=12 ":white_check_mark:")已完成

筹款轮 ![:white_check_mark:](https://emoji.discourse-cdn.com/twitter/white_check_mark.png?v=12 ":white_check_mark:") 已完成

开始智能合约和项目后端代码的工作 ![:white_check_mark:](https://emoji.discourse-cdn.com/twitter/white_check_mark.png?v=12 ":white_check_mark:") 已完成

前端设计：与用户体验团队和图形设计师一起为 Figma原型进行前端设计 ![:white_check_mark:](https://emoji.discourse-cdn.com/twitter/white_check_mark.png?v=12 ":white_check_mark:") 已完成

**2022年第二季度**

代币生成事件（TGE）和IDO （

> Blockquote

首次去中心化交易所发售）![:white_check_mark:](https://emoji.discourse-cdn.com/twitter/white_check_mark.png?v=12 ":white_check_mark:") 已完成

质押V1 ![:white_check_mark:](https://emoji.discourse-cdn.com/twitter/white_check_mark.png?v=12 ":white_check_mark:") 已完成

前端代码：完成dApp和网站的前端代码

**2022年第三季度**

前端和后端整合：各团队将协作创建必要的API端点并获得前端功能

Alpha测试：开始测试平台的工作方式。测试用户流。如果智能合约准备就绪，请使用测试代币进行试用。

**2022年第四季度**

公开最简化可行产品（MVP）发布 一旦测试和代码审计完成，启动该平台的MVP

额外功能：开发者现在可以着手开发白皮书中概述的其他功能，包括新的治理结构

代币发售开发：在MVP中，代币发售只是空投。开始添加允许种子基金的功能，为DEX添加流动性，以及其他分配方式。

**2023年及以后**

跨链功能：在Ergo、Ada 和其他UTXO区块链之间实现跨链功能，以允许各个DAO 持有多资产金库。

独立的工具：构建用户可以在本地机器上运行的软件，这样他们就可以轻松地与各个DAO交互，而无需Paideia网站保持在线。

社区外展：尽可能利用资金，并在将从加密货币治理解决方案中获益最多的领域探索外展计划

慈善基金会：建立一个非营利基金会，可以使用 Paideia工具集对发展中国家的人们进行教育和赋能

Tweet

团队

Paideia的创始人兼首席执行官Marty C. 及其首席技术官 Leif Erickson 领导着一个由 8 名成员组成的团队，您可以在这里见到他们。

网址：<https://www.paideia.im/>

. . .

(1) [去中心化自治组织 (DAO)：简史、挑战和经验教训](https://adapulse.io/decentralized-autonomous-organization-dao-the-brief-history-challenges-and-lessons-learned/)

(2) [二次方投票的简单指南](https://blog.tally.xyz/a-simple-guide-to-quadratic-voting-327b52addde1)

原文链接：

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/0/0bad43f903cc23bfd248d2932f1f924c85868352.png)
[adapulse.io](https://adapulse.io/create-your-dao-with-paideia/)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/6/6b8d62e57bebe7c91a8e676343c040ae31d1ce9c_2_690x347.jpeg)

### [Create Your DAO With Paideia – ADAPULSE](https://adapulse.io/create-your-dao-with-paideia/)
