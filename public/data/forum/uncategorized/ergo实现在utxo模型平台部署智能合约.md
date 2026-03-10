---
title: Ergo实现在UTXO模型平台部署智能合约
description: 'ErgoForum discussion: Ergo实现在UTXO模型平台部署智能合约'
tags:
- auction-house
- autolykos
- ergoforum
- nipopow
- oracle-pools
- scorex
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-utxo/4253
created: '2023-03-09'
last_activity: '2023-03-09'
posts_count: 1
views: 276
likes: 2
glossary_hits:
- Auction House
- Autolykos
- NiPoPoW
- Oracle pools
- Scorex
---

# Ergo实现在UTXO模型平台部署智能合约

> **Forum thread:** [https://ergoforum.org/t/ergo-utxo/4253](https://ergoforum.org/t/ergo-utxo/4253)
> **Category:** Uncategorized | **Created:** 2023-03-09 | **Posts:** 1 | **Views:** 276

**Related concepts:** Auction House, Autolykos, NiPoPoW, Oracle pools, Scorex

---

### Post #1 — @ergonautgcn (2023-03-09)

# PoW公链难题破解——Ergo实现在UTXO模型平台部署智能合约

来源：金色财经  
发布日期： 2021/04/14

4月13日17:00，金色财经举行新一期「区块链·世界志」，邀请Ergo公链核心开发者Alexander做客直播间，一起探讨了Ergo在UTXO模型平台部署智能合约的方案。

如何在PoW公链UTXO模型平台上部署智能合约？Ergo提供了一个解决方案。

4月13日17:00，金色财经举行新一期[「区块链·世界志」](https://www.jinse.com/runLiveTopic?id=109697)，邀请Ergo公链核心开发者Alexander做客直播间，一起探讨了Ergo在UTXO模型平台部署智能合约的方案。

直播过程中，Alexander首先介绍了Ergo。他表示，Ergo采用的是EUTXO，即扩展UTXO，是对比特币UTXO模型的一种扩展。扩展UTXO系统支持完全成熟的图灵完备（跨交易）智能合约。这是一项新颖的创新，可以让最新一代的区块链重启比特币使用的原始模型。

ErgoScript让开发图灵完备的合约成为可能，该合约可完全绕开对任何Gas费的需求，同时还提供了其他外围优势，例如在执行之前估算脚本的复杂性，这一方面有助于主动防止DoS攻击。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/9/9db23b6d82aaf4d0c7d0f309e80b81db3942107c.jpeg)

600×300 35.3 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/9/9db23b6d82aaf4d0c7d0f309e80b81db3942107c.jpeg)

**以下为直播详情：**

**王瑜琨：** **Hello，Alexander Chepurnoy，请先介绍一下自己并谈谈Ergo背后技术团队。**

**Alexander Chepurnoy** \*\*：\*\*很高兴到这里做客，很感谢金色财经的邀请。我是Ergo公链的核心开发者Alexander Chepurnoy。我从2011年开始涉足加密货币领域，至今已有10年时间。我曾是未来币（NXT）的核心开发者，[smartcontract.com](http://smartcontract.com)（即现在Chainlink）的联合创始人，是Cardano（即ADA）背后创始单位之一IOHK的首批员工，曾参与Cardano开发工作。从2016年开始，我开始全身心投入Ergo开发，至今已超过4年时间。

Ergo技术团队拥有10年区块链理论研究和实战开发经验，由一群经验丰富的区块链开发者和研究员组成。团队在加密货币和区块链框架核心开发方面拥有坚实背景，参与过的项目包括未来币（NXT）、Hyperledger Scorex（现在它已经归入Hyperledger孵化器）、Cardano、[WAVES以及smartcontract.com](http://xn--WAVESsmartcontract-0j52a992e.com)（即现在Chainlink）。Ergo平台从2017年开始开发，于2019年7月主网上线开始挖矿，团队至今已投入3年多的精力。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/optimized/2X/a/a0c2d0b6c76c63c47b29be135a9711754c6c9d41_2_519x500.jpeg)

600×577 53.6 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/a/a0c2d0b6c76c63c47b29be135a9711754c6c9d41.jpeg)

**王瑜琨：** **Ergo是怎样的一条公链？其核心优势是什么？相对比特币有何继承和创新之处？尚处价值洼地的Ergo将如何脱颖而出？**

**Alexander** \*\*：\*\*Ergo平台是一个从头搭建的安全、适应力强、开放、无需许可、真正去中心化的DeFi应用底层公链平台，主要专注于提供一种高效、安全、简便的方式去实现金融合约。Ergo也是一个智能合约和合约币平台。Ergo不仅底层技术成熟，能支持各种dApp、智能合约、DeFi应用、NFT应用，生态上已推出ERG/USD预言机池、SigmaUSD算法稳定币、NFT市场Ergo Auction House等多个去中心化应用，不久还会在Ergo平台上推出ErgoSwap等去中心化交易所以及更多去中心化应用。

Ergo的核心优势有：

（1）Ergo始终将完全去中心化放在首位，同时保证网络安全性，同时将采取各种不同措施解决可扩展性问题，绝不会为了可扩展性牺牲去中心化和安全性。

（2）Ergo永远坚守PoW共识机制，永不抛弃矿工。Ergo基于PoW的奥托吕科斯（Autolykos）共识协议具有阻碍ASIC矿机的功能。PoW具有很高的安全性保证，对轻客户端友好，而且能支持NiPoPoW证明。

（3）NiPoPoW指工作量证明的非交互式证明，支持超轻客户端和跨链互操作性，将来可允许最终用户在手机等移动设备上使用Ergo。

（4）Ergo原生代币ERG最终供应量仅为97,739,925枚，不足1亿枚，永不增发，永不销毁，总量恒定不变，数量稀缺，兼具实用性。

（5）除了区块奖励和交易手续费外，Ergo首创了存储租赁费激励机制来提高矿工参与维护网络的积极性，增强网络安全性，让丢失的代币重新进入流通环节，避免ERG流通量下降。

（6）Ergo严格遵循长期可生存方法，结合存储租赁费机制，可防止Ergo随着时间推移发生性能下降，而且Ergo是一个可自我修正的协议，允许Ergo将来吸收新的思想并自我改进，让Ergo对环境变化极具适应力。

（7）Ergo采用的是扩展UTXO模型，兼具比特币UTXO模型的语言简单性优势和以太坊账户模型的智能合约表达性优势，支持图灵完备的智能合约。

（8）Ergo采用了西格玛协议，即高效、可组合的零知识证明协议这一子类。它是构建Ergo智能合约和DeFi功能的基础，安全、简单干脆、高效，能让Ergo实现其他方式根本无法做到、或者即使能做到但风险高、费用也高的任务。

（9）Ergo采用的智能合约语言是ErgoScript，它是一种用于加密货币的功能强大且协议友好的脚本语言。ErgoScript中的程序用于指定可以使用加密货币的条件。该语言支持一种称为西格玛协议的非交互式零知识证明，并且足够灵活，可支持环签名、多重签名、多种货币、原子交换、自复制脚本和长期计算。经证明，ErgoScript是图灵完备的。

Ergo目前确实处于价值洼地。如果我们根据网络效应、受欢迎程度和采用率将Ergo与比特币进行比较，就好比将教室后面的安静孩子与一些名人进行比较。就当前的社会、市场知名度和价格而言，这甚至不是一场激烈的竞争。实际上，与比特币相比，Ergo的潜在上行空间有14571倍。Ergo正在努力再创比特币已实现的网络效应、认可度和采用率。但几乎在每个技术方面，比特币则在尝试再创Ergo已经实现的目标。

Ergo相对比特币的继承表现在：Ergo坚守比特币的去中心化理念，始终坚持把完全去中心化放在首位，同时保证安全性，绝不会为了交易速度牺牲去中心化和安全性。比特币和Ergo都采用纯工作量证明（PoW）共识机制。[比特币](https://link.jinse.com/s/4gxEl2?coin_keyword=1&coin=bitcoin)和Egro都在用原创代码构建的自定义代码库上运行。比特币和Ergo都运行UTxO模型；比特币和Ergo启动时都没有预挖矿，也没有ICO。

目前，Ergo已经拥有可用的Schnorr签名（西格玛协议）、智能合约和隐私工具，其中SigmaUSD金库中的ERG超过140万。Ergo推出了自己的Schnorr签名版本。自Ergo主网于2019年启动以来，它就一直在运行。因此，比特币的最大升级使其与2019年的Ergo相当。比特币需要赶超Ergo方面包括：Schnorr签名、UTxO智能合约模型、隐私保护应用潜力、环签名、高效多重签名交易、混币器应用。Ergo上面已有但比特币还须考虑的其他主要解决方案包括：工作量证明的非交互式证明（NiPoPoW）、预言机数据方案、扩展UTxO智能合约方案、代币化治理、存储租赁费、阻碍ASIC矿机。

**王瑜琨：** **既然Ergo也是智能合约平台，它是如何破解UTXO模型平台无法上智能合约难题的？又是怎样破解以太坊当前Gas费用高昂和交易拥堵等问题的？**

**Alexander** \*\*：\*\*对，Ergo也是一个基于比特币UTXO（未花费交易输出）模型和以太坊类似功能的智能合约平台，它通过称为ErgoScript的语言提供这些功能。我们使用ErgoScript为多种协议创建智能合约，例如XOR游戏、剪刀石头布游戏、具有防盗功能的可逆地址，以及ErgoMix（隐私增强协议）等。具体而言，**Ergo采用的是EUTXO，即扩展UTXO，是对比特币UTXO模型的一种扩展,扩展UTXO系统支持完全成熟的图灵完备（跨交易）智能合约。这是一项新颖的创新，可以让最新一代的区块链重启比特币使用的原始模型，但现在具有更强大的功能。**

ErgoScript让开发图灵完备的合约成为可能，该合约可完全绕开对任何Gas费的需求，同时还提供了其他外围优势，例如在执行之前估算脚本的复杂性，这一方面有助于主动防止DoS攻击。因此，Ergo根本就不存在GAS费用高昂的问题，换言之，Ergo上的交易手续费很低。例如，大家目前可以前往Ergo平台上的Ergo Auction House（Ergo拍卖行）以很低的成本铸造NFT。普通人想玩DeFi不再受到高Gas费这道门槛的阻碍。

Ergo平台目前出块时间是平均2分钟左右一个区块。对于交易拥堵，我们的解决办法是：

（1）在Layer 0网络协议层，优化网络协议。

（2）在Layer 1区块链层，Ergo区块链层采用无状态客户端（Stateless Client），可以接收承载具体输入或输出相关交易的区块，而无需消耗该区块链上的全部交易，无状态客户端是高容量应用的理想选择，可以通过卸除服务器负荷来提高性能，并采用工作量证明的非交互式证明（NiPoPoW）允许轻客户端只需下载少于1兆字节的数据便可与网络同步，普通用户使用智能手机便可加入Ergo网络并开始使用Ergo上的服务，得到的安全保证与全节点相同，避免其他支持轻客户端环境的Layer 2解决方案用安全性换取功能的问题。此外，Ergo矿工可投票决定调整区块大小，这样便可增加每个区块的交易数量。还可通过velvet分叉或软分叉做类似于BitcoinNG的微区块、类似于Aspen的服务链或通用侧链来解决拥堵。Ergo目前正在跟Emurgo和IOG研究侧链。

（3）在Layer 2 链下协议层，Ergo将来可能会支持闪电网络（Lightning Network）或彩虹网络（Rainbow Network）、零知识有条件支付（ZKCP）协议、FairSwap/FastSwap协议，以及其他一些状态通道结构等。我们的这些解决方案届时会根据具体应用予以实现。

**王瑜琨：** **同为EUTXO公链，Ergo将带给Cardano什么?**

**Alexander** \*\*：\*\*尽管Ergo是PoW机制，Cardano是PoS机制，但由于二者都是eUTXO模型，因此兼容性很强。Ergo将把PoW具备的优势带给Cardano，例如支持超轻客户端和跨链互操作的NiPoPoW，因为NiPoPoW不适用于PoS，Cardano则无法直接使用它，需要借Ergo的PoW使用NiPoPoW支持超轻客户端等。另外，Cardano选择了Ergo的预言机池方案，而未选择Chainlink。预言机池模型的优势是不发预言机代币，最终用户使用预言机的成本极低，另一优势是数据源去中心化、更可靠。目前，Ergo预言机池用两个用例，即ERG/USD Oracle Pool和ADA/USD Oracle Pool。详情可参阅文章《深度解读：Ergo将带给Cardano什么》。

**王瑜琨：** **[您在前面提到您是原Smartcontract.com](http://xn--Smartcontract-282vfnj4pr5rzu5bda272njxl007x.com)（现更名为Chainlink）的联合创始人，我想您对预言机最为了解，请问Ergo的预言机池是怎样的一种预言机模型？跟Chainlink的主要区别是什么？**

**Alexander** \*\*：\*\*是的，我和我们团队拥有预言机方面的核心开发经验。预言机是区块链的核心基础设施，是连接区块链世界和现实世界的桥梁。Ergo预言机池是一种全新的预言机模型，旨在解决当今预言机方案缺乏透明度、问责和运行稳健性方面的问题，同时还提供其他新功能。一个预言池由一组决定采用同一数据段的预言机组成。相比Chainlink等发币预言机项目，Ergo预言机池最大的优势是不发预言机代币，旨在让预言机服务将来作为公共服务让普通人用以极低的费用便可使用预言机服务，例如，在非洲，人们显然无法承担预言机数据使用费，而且由于无预言机代币，人们在使用预言机数据时，还省去了将代币换成预言机代币的麻烦，让操作变得简单。此外，预言机池将会让数据源变得去中心化，确保过程和数据本身均更加可靠。预言机池的更多优势可以查阅文章《为何Cardano不选Chainlink而选Ergo预言机池》作进一步了解。

**王瑜琨：** **最近Ergo社区开发者启动了算法稳定币SigmaUSD，请问它有何特别之处？**

**Alexander** \*\*：\*\*SigmaUSD是Ergo平台上的首个算法稳定币，也是Ergo生态上的一个应用，它由Ergo开源社区开发者启动，旨在为世界提供稳定、简单和去中心化的稳定币。首先，与USDT、USDC等中心化稳定币相比，SigmaUSD是去中心化的，安全性更有保障。其次，与Maker DAO（即DAI）等依赖抵押债务头寸（CDP）的去中心化加密货币支持型稳定币相比，SigmaUSD可以避免使用抵押债务头寸（CDP），从源头上杜绝3.12大暴跌期间Maker DAO的CDP由于波动而触发清算这种情况发生。最后，SigmaUSD的底层智能合约是可以更新的，Ergo社区的治理代币持有者可进行此更新。还有就是SigmaUSD基于我们前面提到的Ergo预言机池，而与其他区块链上的传统预言机数据模型相比，Ergo预言机池去中心化程度更高，不仅如此，预言机池也有社区治理。SigmaUSD基于AgeUSD算法稳定币协议，换言之，SigmaUSD仅仅是AgeUSD协议的一个实例。Cardano也将基于AgeUSD协议推出他们自己的算法稳定币。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/1/1624148a0e064b34b261f9e8b14f7416375b5596.jpeg)

600×344 42.4 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/1/1624148a0e064b34b261f9e8b14f7416375b5596.jpeg)

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/b/bc417cf1d334973d8615a5455cec39cfba07ba47.jpeg)

600×364 46.3 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/b/bc417cf1d334973d8615a5455cec39cfba07ba47.jpeg)

Ergo最新路线图

**王瑜琨：** **Ergo现阶段的重点工作是什么？接下来的规划是什么？**

**Alexander** \*\*：\*\*继Ergo社区开发者启动算法稳定币SigmaUSD算法稳定币后，Ergo目前的重点工作是模拟去中心化交易所（DEX）交付、跨链门户（与Gravity合作）以及跟硬件钱包Ledger整合。去中心化交易所的合约已准备就绪，将于2021年上半年晚些时候推出ErgoSwap和其他去中心化交易所。另外，Ergo核心开发者正在提高客户端的效率，并致力于工具开发。开发者也正在做钱包、DApp桥、节点开发与研究。

**王瑜琨：** **Ergo的原生代币是什么？其代币分配机制是什么？目前Ergo已上哪些交易所？有什么福利值得用户期待吗？**

**Alexander** \*\*：\*\*Ergo的原生代币是ERG，无ICO、无私募、无预挖，其最终供应量仅为97,739,925枚，不足1亿枚，永不增发，永不销毁。跟最大供应量为2100万枚的比特币一样，ERG也是按长期价值存储型加密货币进行设计的，由于数量有限，跟黄金一样稀缺，有成为“数字黄金”的潜力。而且ERG具有实用性，因为在Ergo平台做任何运作都会用到ERG才能进行，所以将来对ERG的需求可能会大增，但ERG总量不变，不会增发，可能出现严重供不应求的局面，最终，ERG也会因此水涨船高，实现升值。

跟比特币一样，Ergo是无预挖的，自2019年7月1日Ergo主网上线，矿工挖出第一枚ERG才标志着ERG正式诞生，因此其增长自然是渐进的。但Ergo基金会会在挖矿开始后前面2.5年内从每个区块奖励中分得一小部分奖励，用来支持Ergo社区可持续发展和扩大，这不同于其他POS项目给自己预留很多代币。Ergo原生代币ERG已上交易所包括BiKi、BitMart、[Gate](https://link.jinse.com/s/zwMY01)io等，可前往下面的链接地址查询详情：

<https://ergoplatform.org/en/exchanges/>
