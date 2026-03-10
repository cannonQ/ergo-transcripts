---
title: 深度解读：Ergo将带给Cardano什么
description: 'ErgoForum discussion: 深度解读：Ergo将带给Cardano什么'
tags:
- amm
- auction-house
- autolykos
- bootstrapping
- box
- ergoforum
- eutxo
- nipopow
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-cardano/4251
created: '2023-03-09'
last_activity: '2023-03-09'
posts_count: 1
views: 205
likes: 2
glossary_hits:
- AMM
- Auction House
- Autolykos
- Bootstrapping
- Box
- NiPoPoW
- eUTXO
---

# 深度解读：Ergo将带给Cardano什么

> **Forum thread:** [https://ergoforum.org/t/ergo-cardano/4251](https://ergoforum.org/t/ergo-cardano/4251)
> **Category:** Uncategorized | **Created:** 2023-03-09 | **Posts:** 1 | **Views:** 205

**Related concepts:** AMM, Auction House, Autolykos, Bootstrapping, Box, NiPoPoW, eUTXO

---

### Post #1 — @ergonautgcn (2023-03-09)

# 深度解读：Ergo将带给Cardano什么

来源：金色财经  
发布日期：2021/02/27  
<https://www.jinse.com/news/blockchain/1007370.html>

### **为什么Ergo对Cardano的成功至关重要?**

**[![Fight Club, Tyler Durden HD Wallpapers / Desktop and Mobile Images & Photos](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/0/02440023a3d9c1361094fb368177387e645fb0dd.jpeg)

Fight Club, Tyler Durden HD Wallpapers / Desktop and Mobile Images & Photos600×338 24.7 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/0/02440023a3d9c1361094fb368177387e645fb0dd.jpeg "Fight Club, Tyler Durden HD Wallpapers / Desktop and Mobile Images & Photos")**

**1** **）** **Ergo** **将把工作量证明（** **PoW** **）的所有优势带给** **Cardano** **生态系统的用户**

我们来看看与Cardano完全兼容的PoW区块链Ergo可以为Cardano生态系统的所有开发者带来哪些优势：

**工作量证明的非交互式证明（** **NIPoPoW** **）**，尽管如今尚未被广泛使用，但提供了一些独有的加密功能，稍后将进行讨论。顾名思义，工作量证明的证明在权益证明（PoS）机制上是不可用的。

**轻松自举（** **Easy Bootstrapping** **）**，无需检查点，自创始起自举明显速度更快。这还启用了一些独有功能，这些功能将在后面讨论。

**聚合计算能力**（特别是具有ASIC抵抗能力），可以使用户访问大型超级计算机（而您使用PoS则无法做到这点），因为PoS协议还不够先进，不足以利用超级计算机。

**一种不同的安全性方法**：尽管PoS本身现在可能已经是一种非常安全的协议，且比以往任何时候都更甚，但是某些智能合约可能在执行某些部分需要PoW的博弈论安全性功能（例如，避免通过智能合约收集权益），而其他一些部分则可以更自然地在PoS协议上运行（例如，用于投票）。目前，当您拥有可将接受权益委托的权益池中心化的智能合约时，安全模型是什么尚未久经考验。dApp越大，如果您正在进行抵押DeFi，该dApp所拥有的权益就越大，因此这需要大量研究，但尚未完全弄清，这本质上是权益证明的一个弱点。Ergo带来了久经考验的PoW安全性，因此开发者可以放心，他们将在通用UTXO模型之上为所有最复杂的dApp实现找到足够的安全性，而不必尝试将PoW固有、非常自然的加密概念转换为PoS，PoS协议的博弈论含义完全不同。

### **您需要知道的有关** **NIPoPoW** **的更多信息**

在工作量证明区块链中，超级区块（哈希在统计上罕见易于识别的区块）在构建紧凑型区块链证明中起着重要作用，这允许将PoW区块链压缩为所谓的工作量证明的非交互式证明（NIPoPoW）。这些证明对于构建超轻客户端至关重要，超轻客户端是区块链钱包，与传统的SPV客户端（“简化支付验证”客户端，通常与“运行全节点”形成对比）相比，前者同步速度呈指数级增长。

工作量证明的非交互式证明（NIPoPoW）可以极其快速地验证区块链上的数据，而无需下载所有区块头。

这可以做到以下几点：

-**效率**：非常高效的轻量钱包（与SPV钱包相比轻了2000倍），但同时具有全节点的安全性

-**可扩展性**：即使区块链的大小不断增大，验证区块链所需的区块头样本仍然很少

-**互操作性**：这些简短的证明可实现与侧链的高效通信，因为在侧链上发生的事件不需要矿工对侧链进行全面监视。

-**离线交易**：NIPoPoW使交易发送方能够证明交易已在区块链上完成，而仅向接收方传输少量数据。

-\*\*存储：\*\*交易费用一次收取，数据永久保存在那里，无限地扩展状态空间

-\*\*无需信任的侧链：\*\*您在一条链上做某件事，在另一条链上发送证明，并保证事件已发生。这可实现100%基于证明的互操作性，而在两者之间没有任何中心化或联盟实体。

-\*\*隐私应用：\*\*只有使用PoW时才能使用某些特定应用，因为PoS依赖各参与方公开其权益。例如，今年已有与其他基于Schnorr的加密货币进行隐私交换，进而与比特币（在其软分叉之后）进行隐私交换。

NIPoPoW是Emurgo和Ergo研究团队发现的一项新技术，可释放工作量证明的能力。例如，它们启用了一些令人激动的功能，例如，跨链兼容性（Cross-chain compatibility）。Ergo从创世起就实现了NIPoPoW。

NIPoPoW最初是被对可快速启动的超轻客户端的需求所驱动，但它们还具有另一个令人激动的功能：**互操作性**。

如果没有NIPoPoW，则全节点须下载所有区块并逐个验证它们，这会占用大量存储空间、计算能力和时间（通常按天计）。愿景是，鉴于Ergo的PoW共识协议——Autolykos，NIPoPoW可用于使前述过程变得超快且呈低数据密集度，同时在协议层级提供数据存储租赁费功能，使Ergo成为从一开始就从协议层级考虑到长期生存能力的唯一区块链，这将使其特别适合管理这些应用。

超级区块取样技术不适用于PoS。压缩权益链的协议是基于时段（Epoch）的，因此不可能进一步压缩，因为PoS协议对权益如何随时间变化进行了权益假设，验证者需要知道谁持有该权益，以便他们可以验证签名并说出这是大部分权益已正确签名的区块，这需要知道权益演变，如果您将权益演变限制在每个时段一定的范围内，说明每个时段一个样本就足够了，但您不能压缩得更多。这就是为什么目前没有超轻PoS客户端的原因。对此有一些尝试将零知识证明构造与SNARK（简洁的非交互知识论证）结合使用（一次尝试称为Coda），但是存在一些问题，例如，在这些设置中我们希望避免使用必需的受信设置，因此PoW协议的优点在于简化了工作量证明方程式的工作方式以及挖矿的工作方式，且由于实际上没有密钥，也没有能力琢磨这些超级区块，因此这些超级区块实际上很自然地跳出了协议。而在权益证明机制下，您找不到同等的优点。

其他互操作性：

Ergo正在致力于支持Gravity协议，该协议是一种互操作性协议，它不会采用基于证明的方式，因为这种方式更为复杂且不易与多条区块链整合，而是采用了一种使用关系到声誉的联盟方法。这将打开与币安智能链、Solana与整个Cardano和Ergo生态系统的互操作性。

**2** **）跟** **Cardano** **一样，** **Ergo** **采用的也是** **UTXO** **模型，** **Ergo** **将是第一个在** **UTXO** **模型上采用智能合约语言的区块链，将与工作量证明的兼容性提升到一个全新水平**

以太坊采用的账户模型面临可扩展性的难题，这对以太坊

来说是一个问题，因为生态系统的增长转化为高昂的Gas手续费。对智能合约使用分片进行扩展尚未得到真正解决，因为智能合约位于单个分片上，因此它并不是真正扩展dApp。

Ergo是第一个采用扩展UTXO（EUTXO）模型的区块链，EUTXO模型在[比特币](https://link.jinse.com/s/4gxEl2?coin_keyword=1&coin=bitcoin)使用的标准UTXO模型之上添加了数据和强大的智能合约语言。以太坊采用的账户模型无法扩展那么多。对智能合约使用分片进行扩展尚未得到真正解决，因为每个智能合约将位于单个分片上，因此它无助于扩展dApp。

[![R8XeiDMMzcNbPepIffSH03QYZOK05BL27NTld8Ic.png](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/0/033a93380a7588720d0cf5b063cc4c44831fb45e.jpeg)

R8XeiDMMzcNbPepIffSH03QYZOK05BL27NTld8Ic.png553×414 43 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/0/033a93380a7588720d0cf5b063cc4c44831fb45e.jpeg "R8XeiDMMzcNbPepIffSH03QYZOK05BL27NTld8Ic.png")

UTXO模型允许更复杂的逻辑，因为它清楚地区分了金融系统的每个关键组成部分：

* 数据（代表现实世界中应用了商业逻辑的事件）
* 智能合约（代表商业逻辑）
* 数字资产（代表所有权）

它是开发高级dApp的关键基本构成要素。

这为拥有头等公民身份的原生资产打开了大门，这意味着如果矿工接受该等资产，您可以使用该资产支付交易手续费。

[![YsCjPADebZSXLYkWqEY1Rout6n8r8Of753ck8oky.png](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/optimized/2X/3/387adeb7f1b965636d3b178b5e1a8f94a03d386b_2_547x500.jpeg)

YsCjPADebZSXLYkWqEY1Rout6n8r8Of753ck8oky.png553×505 106 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/3/387adeb7f1b965636d3b178b5e1a8f94a03d386b.jpeg "YsCjPADebZSXLYkWqEY1Rout6n8r8Of753ck8oky.png")

**ERGO** **对扩展** **UTXO** \*\*的创新是只读数据输入：\*\*无需花费UTXO，也无需创建新的UTXO。

这样可以：

* 扩展更好
* 降低计算复杂度/成本
* 可重用性
* 没有垃圾邮件攻击
* 链下创建交易和查找最新UTXO，操作简单
* 区块中任何交易并行读取
* 计算协议外包
* 没有额外的输出可降低存储租赁费
* dApp的吞吐量增加
* 提高安全性（循序计算）
* 自我更新能力
* UTXO外包
* 治理协议外包
* 无需许可的dApp保险
* 无需许可/无需信任的预测市场
* 在复杂协议中使用构建块
* 多阶段智能合约子协议
* 纳入自定义博弈论激励

**UTXO** **模型还启用了外包** **UTXO** **币盒：**

外包UTXO币盒将提供来自以下方面的预处理数据：

* 数据挖矿：数据集（收集、清理、分类、建模）
* 人工智能与深度学习
* 决策：DAO和专家小组
* 统计和分析工具
* 算法/计算逻辑/无头dApp
* 现实世界中的事件
* 预言机和预言机池及其层级结构
* 具有自己治理机制的其他dApp的输出
* 从给定的dApp或协议外部的自举UTXO或代币数据

**3** **）具有** **dApp** **并行能力的** **dApp** **长期可扩展性**

您只可用稳定币或其他代币进行付款的整个钱包只有在扩展UTXO（EUTXO）模型可行。

EUTXO模型的所有这些优势，经过精心设计成可在其协议层级本身对区块链产生真正积极影响的模式，将不会被所有其他区块链复制。但是由于互操作性，其他项目或dApp，即使它们存活在其他区块链上，也可以通过将其代币引入Ergo平台的方式来借用这些独特的益处，进行一些头等代币经济（First-class Tokenomics），然后可以返回去。由于每种方法都有其优缺点，所以互操作性很重要。

**4** **）采用西格玛协议的加密技术更高级：高度灵活且可组合的加密签名**

可以在西格玛协议的基础上构建许多更高层级的东西：

实用的dApp已在Ergo平台上运行或在其上构建：Auction House（拍卖行）、NFT、众筹应用、去中心化交易所（DEX）、混币器（Mixer）、算法稳定币（第一个基于UTXO的稳定币）、链上零知识金库（一个控制一定数量资金的迷你DAO，并借助西格玛协议，投票者可以在保护隐私的情况下进行投票，即使它在链上也是如此）。

**5** **）** **Ergo** **无头** **dApp** **框架**

这个想法是将dApp的前端与智能合约和链下代码分开。这使得不同的去中心化实体可以在智能合约上构建经济，这将通过去中心化应用构建者的开放经济中不同资源相互补充的市场，使后端和前端开发者更容易变现，而不必成为一个团队。应用组件的去中心化是下一层级的去中心化，这将使Ergo和Cardano平台上的DeFi成为一个丰富的开发者生态系统，这些开发者具有各种技能，可以构建自己的最终应用大厦，且每个人都可以从中受益。

Ergo平台上的去中心化应用具有一些基本的设计原语：

-**可移植性（** **Portability** **）**：Rust语言可在任何设备上编译。支持Scala、Rust Blossom（可在移动设备和任何平台上编译的Javascript）的开发者工具：这将赋能Web dApp和移动dApp

-**可组合性（** **Composability** **）**

-前端创建的**去中心化**：去中心化和更多竞争，以使用户受益

-**通过做到变现来付报酬给前端开发者的变现能力**：与前端营销分开使智能合约逻辑开发变现的能力

-**可更新的** **dApp**：将核心协议逻辑与治理、资金提供和其他重要dApp功能分离

**6** **）预言机池—具有偏差检查共识的分层预言机池之池打开了一个全新的应用世界**

**预言机池对于所有金融应用来说都是必不可少的，并且远远超出了金融的范畴**，因为运行应用将需要各种数据输入。

这将为诸如无需信任保险之类的新App打开大门，还有许多尚待发现的应用，但这些应用都是非常有希望和令人激动的。

**7** **）** **Ergo** **平台上的本地交易所交易系统**

本地交易所的基础将是名为AgeUSD的新稳定币协议，AgeUSD是第一个基于UTXO的稳定币协议，为流动性机器（Liquidity Machine）提供了动力（需要某些应用堆栈将流动性带入Ergo区块链之上并使用Ergo平台上发行的其他代币的流动性运行dApp），去中心化交易所（Decentralized Exchanges）和ErgoSwap（自动做市商（AMM），允许任何人在Ergo平台上以无需信任的方式交易代币，并在不同类型的去中心化交易所（DEX）甚至更高级的全新代币机制交易所之间共享流动性；并与Gravity合作让Ergo代币上其他区块链，提供各种互操作性解决方案以及门户。

基本上，它是在Ergo区块链之上很好地复制Ripple想法，因为将开发标准的DeFi堆栈（借贷、期权、债券、差价合约（ CFD）、预测市场等）。

**作为合作的一部分，** **Emurgo** **为该生态系统提供了许多研究和开发者工具，并研究如何利用** **Ergo** **和** **Cardano** **的优点，以便随着** **Cardano** **进入** **Goguen** **的发展，我们开始看到如何兼顾两者的优点** **并使其可互操作。**

**凭借这些独特的加密功能，** **Ergo** **将相对** **Cardano** **享有竞争优势，因为开发者将寻求成熟的解决方案来构建其** **dApp** **。**

**作者简介：**

Verium fellow

我有点像一只在加密世界的无限空间中徘徊的加密猫。我可能会写一些关于Verium、Cardano、Ergo和Quant的东西。
