---
title: 一文读懂DeFi应用底层公链Ergo
description: 'ErgoForum discussion: 一文读懂DeFi应用底层公链Ergo'
tags:
- auction-house
- autolykos
- box
- ergo-explorer
- ergo-playgrounds
- ergoforum
- ergoscript
- eutxo
- full-node
- headless-dapp
- native-tokens
- oracle-pools
- scorex
- sigma-protocols
- spectrum
- storage-rent
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/defi-ergo/4228
created: '2023-03-02'
last_activity: '2023-03-02'
posts_count: 1
views: 563
likes: 1
glossary_hits:
- Auction House
- Autolykos
- Box
- Ergo Explorer
- Ergo Playgrounds
- ErgoScript
- Full node
- Headless dApp
- Native tokens
- Oracle pools
- Scorex
- Sigma protocols
- Spectrum
- Storage rent
- Transaction
- eUTXO
---

# 一文读懂DeFi应用底层公链Ergo

> **Forum thread:** [https://ergoforum.org/t/defi-ergo/4228](https://ergoforum.org/t/defi-ergo/4228)
> **Category:** Uncategorized | **Created:** 2023-03-02 | **Posts:** 1 | **Views:** 563

**Related concepts:** Auction House, Autolykos, Box, Ergo Explorer, Ergo Playgrounds, ErgoScript, Full node, Headless dApp, Native tokens, Oracle pools, Scorex, Sigma protocols, Spectrum, Storage rent, Transaction, eUTXO

---

### Post #1 — @ergonautgcn (2023-03-02)

# 一文读懂DeFi应用底层公链Ergo及区块链元老级技术大牛Alex

来源：金色财经

Ergo是一个开放、无需许可的综合性DeFi公链平台，ERG总供应量非常有限，不足一亿枚。该平台基于PoW机制和UTXO模型构建，遵守的原则跟比特币一样，但它的功能比比特币多得多。换言之，如果比特币是数字黄金，那么ERG就是“可编程数字黄金”。Ergo将于2021年2月1日进行硬分叉，将开启一个新的时代，向所有人开放挖矿，同时将允许矿池存在，拥有2GB或以上内存的GPU矿工都可来挖ERG。

笔者花了20天时间研读数万单词的Ergo相关英文材料，最后于2020年12月15日完成本文的编译。全篇内容取材于Google能检索到的英文资料和Ergo平台官网英文资料，笔者是专注于区块链技术翻译的职业翻译和区块链技术爱好者。

欢迎区块链技术爱好者、区块链技术开发者、矿工、加密货币持有者以及愿意了解区块链技术和加密货币的圈外人士认真阅读此文，只有认真研读区块链技术才能判断项目是否有价值，有发展潜力。建议大家从判断公链能否解决不可能三角问题（即去中心化、可扩展性（即交易速度）、安全性）的角度去分析，另外，还要看公链项目是如何解决跨链互操作性、可持续性和预言机等问题。希望大家阅读此文后有所收获，并做出正确的判断。

目录

* Ergo平台——去中心化的DeFi应用底层公链 3
* 愿景——做一个能让你用一辈子的金融合约平台 3
* 真正去中心化——从挖矿、治理与开发以及服务等方面杜绝中心化 4
* 极具适应力、可长期生存——将来无需“核心开发者”团队干预 4
* 原生代币ERG——不搞ICO和风投，数量稀缺，可作价值存储 4
* 全新PoW共识机制Autolykos——包括普通人在内的所有人均可参与挖矿 5
* 西格玛协议——能保护隐私，再也不担心身份泄漏 6
* 全新“存储租赁费”激励机制——全部代币挖完还能继续挖，增强网络安全性 7
* 原创脚本语言ErgoScript——让Ergo实现复杂金融合约的能力远超对手 7
* NiPoPoW支持跨链和轻客户端——交易速度快，在智能手机上就能使用Ergo 8
* 技术框架——Scorex框架 9
* 自定义代币享头等公民待遇——在Ergo平台上交易不用ERG支付手续费也行 9
* 适用范围广——图灵完备，可防止DoS攻击和阻止程序停机 9
* Ergo与Emurgo寻求合作共赢 10
* Yoroi钱包——现已支持ERG，将开启用户进入Ergo生态系统的门户 10
* DeFi合作——求同存异，优势互补，相互成就 11
* 携手打造具有革命性意义、让数据源去中心化的预言机池 12
* 构建将优于Maker DAO的美元稳定币——解决稳定币中心化和波动的问题 13
* 跟Gravity和Waves合作——解决跨链互操作性问题 15
* 同行评价——前以太坊联合创始人兼Cardano创始人Charles非常看好Ergo 16
* 近期活动——请重点关注硬分叉，硬分叉后所有人都能参与挖矿 17
* 硬分叉介绍 17
* 新的开发者工具介绍 18
* Ergonaut拍卖与NFT 19
* 2020-2021最新路线图 22
* 技术团队及区块链元老级人物Alex——10年区块链理论研究和实战开发经验 23
* Ergo官方链接 25

**Ergo平台——去中心化的DeFi应用底层公链**

Ergo平台（亦称“尔格平台”）是一个安全、适应力强、开放、无需许可、去中心化的DeFi应用底层公链平台，主要专注于提供一种高效、安全、简便的方式去实现金融合约，也是一个合约币和智能合约平台。其背后技术团队拥有10年区块链理论研究和实战开发经验，Ergo将以此为基础构建高级加密功能和全新DeFi功能。Ergo现有实例涉及众筹、预言机、去中心化交易所、稳定币、拍卖等。其联合创始人兼CTO是区块链元老级人物Alexander Chepurnoy，他也是Ergo的核心开发者。

早在2017年DeFi概念未火之时，就已将Ergo设计用于DeFi。Ergo是一个PoW机制的加密货币，是基于久经考验的科学研究和经同行评审的论文进行设计的，具有开放、无需许可、去中心化等特点，Ergo是为普通人搭建的，任何人都可以在Ergo平台上面搭建应用。另外，比特币所具备的开放、无需许可等特点，正如前面所提到的，Ergo也有，而且Ergo的功能比比特币多得多。Ergo采用扩展UTXO（Extended UTXO或EUTX）系统，能实现在比特币上无法实现的很多功能。扩展UTXO，即扩展未花费交易输出，是对比特币UTXO模型的一种扩展，它支持实质更具表达性的验证脚本，包括实现一般状态机和执行各完整交易链之间的不变量的脚本，EUTXO兼具比特币UTXO模型的语言简单性优势和以太坊账户模型的智能合约表达性优势。任何人都可以在Ergo平台上发行自定义代币。此外，在Ergo平台上搭建去中心化交易所（Dex）非常容易，目前已有一个或更多Dex正在开发中。

**愿景——做一个能让你用一辈子的金融合约平台**

由于区块链领域发展停滞不前，Ergo平台应运而生。经过数年研究和原型实现后，Ergo平台开发于2017年正式开始。它将实现各种现成技术和经济思想去增加价值同时不会削弱区块链系统的已知优势。正如本文开篇所述，Ergo平台主要专注于提供一种高效、安全的方式去实现金融合约，即区块链技术最广泛使用的应用。创建Ergo平台的初衷是为了提供一种简便的方式方便普通人使用金融合约，而且能够在无需任何第三方介入的情况下以去中心化的方式使用金融合约。与传统金融体系不同，Ergo协议的核心层上没有救助、黑名单或其他形式的歧视。Ergo协议被设计成可长期生存下去，有利于一人一辈子都可以在Ergo上面实现合约，也有利于Ergo原生代币ERG成为不错的价值存储。

**真正去中心化——从挖矿、治理与开发以及服务等方面杜绝中心化**

Ergo是一个从头搭建的真正去中心化底层公链，不依附于任何其他区块链，将从各个层面杜绝中心化。Ergo采用的工作量证明（PoW）算法，可有效减少专业矿机ASIC和普通硬件的差距，允许普通人参与挖矿，有利于实现区块链真正去中心化。另外，Ergo的金库系统（Treasury System）可防止治理与开发中心化。轻节点具有很高的安全性保证，还可防止服务中心化。

**极具适应力、可长期生存——将来无需“核心开发者”团队干预**

Ergo平台吸收了久经考验且在科学论文中形式化的现有思想，主要专注于提供一种高效、安全、简单的方式去实现金融合约，这将非常有用，可让Ergo长期生存下去。同时，对轻节点的扩展支持让Ergo对终端用户非常友好，允许Ergo在手机等普通设备上运行合约，无需信任。Ergo严格遵循长期可生存方法，结合全新的存储租赁费（Storage Fee/Rent）激励模式，可防止Ergo随着时间推移发生性能下降。Ergo是一个可自我修正的协议，允许Ergo将来吸收新的思想并自我改进。Ergo非常注重长期可生存性（即可持续性）和可自我修正性，正是这两大特性让Ergo对环境变化极具适应力。

为了能长期生存下去，Ergo首选久经考验的解决方案。如果某个问题没有久经考验的解决方案，则我们自己做研究，Ergo开发团队已发表大量经同行评审的论文。适应力强的网络应该适应不断变化的环境，无需受信方（例如“核心开发者”团队）进行干预。Ergo链上矿工投票协议允许逐渐修改大量参数，包括最大区块大小、存储租赁费系数等。对于更多的根本变化，Ergo将遵循软分叉方法——如果网络的大部分人接受一个新的功能，则将激活该功能，但不升级的旧节点将继续正常运行，跳过该功能确认即可。因此，Ergo网络中应无需具有破坏性的硬分叉。

**原生代币ERG——不搞ICO和风投，数量稀缺，可作价值存储**

Ergo平台的原生代币叫做ERG（中文：尔格币），由于采取了严格限制，ERG的最大供应量很低，最终供应量仅为97,739,925枚，不足1亿枚，永不增发，永不销毁。跟最大供应量为2100万枚的[比特币](https://link.jinse.com/s/4gxEl2?coin_keyword=1&coin=bitcoin)一样，ERG也是按长期价值存储型加密货币进行设计的，由于数量有限，跟黄金一样稀缺，有成为“数字黄金”的潜力。因为在Ergo平台做任何运作都会用到ERG才能进行，所以将来对ERG的需求可能会大增，但ERG总量不变，不会增发，可能出现严重供不应求的局面，最终，ERG也会因此水涨船高，实现升值。

反观同类项目，例如，Algorand、Cardano、Polkadot等PoS公链项目的原生代币最大供应量分别为100亿枚ALGO、450亿ADA、1,016,539,140枚DOT，最少的也是10亿枚，而即将从PoW机制转为PoS机制的以太坊的原生代币ETH的最大供应量则没有查到确切数据，供应量上限未知。

即使首次代币发售（ICO）业已诞生，但ERG仍坚守比特币的传统，不搞ICO，不搞风险投资（VC），只是通过金库奖励募集少量资金到Ergo基金会。ERG也不搞预挖矿。如果对很大一部分ERG进行预挖矿或将其预留用于ICO，则很难同时做到确保项目筹措到充足资金又不会对后来的用户造成不利。为了解决这个难题，Ergo采取了一种经其他加密货币验证、颇有成效的做法，即从每个区块奖励中抽取一定比例的ERG用于开发和市场推广。

就Ergo而言，这些从每个区块奖励中抽取的ERG被称作基金会代币，由内置于协议中的一份智能合约进行管理。在挖矿开始后的前面两年，每个区块奖励的10%，即7.5枚ERG将分配到金库（Treasury），剩余67.5枚ERG则分配给矿工。前面两年结束后区块链奖励开始减少，基金会会继续抽取每个区块奖励超出67.5枚ERG的部分到金库，总共持续2.5年。换言之，在挖矿开始后前面两年半的时间，每个区块奖励超出67.5枚的部分会分配到金库，为Ergo开发提供资金支持，两年半结束后，将停止分配ERG到金库。

**全新PoW共识机制Autolykos——包括普通人在内的所有人均可参与挖矿**

Ergo是将DeFi改善到极致的比特币典范，也可以说是继承比特币衣钵。Ergo的共识协议是奥托吕科斯（Autolykos），跟比特币一样，它基于众所周知的工作量证明（“PoW”）共识算法。选择PoW主要是因为对PoW协议的研究更广泛，PoW具有很高的安全性保证，对轻客户端友好等。

Autolykos却又不同于比特币的PoW，主要表现在Autolykos采用了内存困难计算，这种计算会缩小ASIC矿机与普通硬件GPU之间的差距，让普通人也能参与挖矿，维护网络安全并获得奖励。另外，尽管现在是阻碍矿池，但即将到来的硬分叉后 （进入新的时代） 谁都能参与挖矿。由于现在Cardano、Algorand和Polkadot等许多公链项目均采用的是PoS共识机制，以太坊也即将从PoW转为PoS机制，意味着以太坊PoW机制下的矿工将被抛弃。这些PoW矿工将何去何从呢？Ergo永远坚守PoW共识机制，这无疑是给这些矿工提供了一条新的出路。

预计Ergo将于2021年2月1日进行首次硬分叉，完成硬分叉后，Ergo将向所有人开放挖矿，不再阻碍ASIC，届时所有2GB及以上的GPU硬件可参与ERG挖矿。鉴于ERG的代币分配方式，不搞ICO，不搞风投，也不进行预挖矿，换言之，2019年7月1日，Ergo平台主网上线之前是没有一枚ERG的，主网上线才开始挖矿，前面两年每个区块奖励75枚ERG，每2分钟出块一个，两年后，每个区块奖励每3个月会减少一次，每次每个区块奖励减少3枚ERG，总共97,739,925枚ERG将在8年内释放完毕。截止写稿之时ERG流通量为28,371,075 ERG。越早参与，挖到的区块奖励越多。请大家密切关注硬分叉最新消息，不要错过早期挖矿红利！实时流通量查询，请登录网址/[Ergo Explorer](https://explorer.ergoplatform.com/en%E6%9F%A5%E8%AF%A2%E3%80%82%E5%85%B3%E4%BA%8E%E6%8C%96%E7%9F%BF%E9%A1%BB%E7%9F%A5%EF%BC%8C%E8%AF%B7%E7%99%BB%E5%BD%95https://ergoplatform.org/cn/blog/2019_04_03_mining/%EF%BC%88%E5%8D%9A%E6%96%87%E5%86%85%E5%AE%B9%E5%8F%AF%E8%83%BD%E5%90%8E%E6%9C%9F%E4%BC%9A%E6%9C%89%E6%9B%B4%E6%96%B0%EF%BC%89%E3%80%82)

**西格玛协议——能保护隐私，再也不担心身份泄漏**

零知识证明协议种类、数量繁多，其中，高效、可组合的零知识证明协议这一子类被称作西格玛协议（Sigma Protocol）。西格玛协议是构建Ergo智能合约和DeFi功能的基础，具有安全、简单干脆、高效的特点。西格玛协议考虑了一类高效零知识协议，正是这些协议，让我们可实现其他方式根本无法做到、或者即使能做到但风险高、费用也高的任务。

例如，西格玛协议可让我们在币盒（即Ergo中的UTXO）外实施环签名和阈值签名。假如你打算创建一份‘环花费合约（Ring Spending Contract）’，即我们当中任何一人都可以从同一地址进行一笔交易，还可以做到不让其他任何人知道我们当中是谁支出了这些资金。比特币无法做到这点，以太坊也能做到这点，但缺点是费用高昂，而且很复杂，特别是环规模需达到10-20位成员才能使交易隐私得到稳健保护。

由于Ergo整合了西格玛协议在核心组件中，使用Ergo创建这类应用就非常容易，可实现自主应用层隐私保护：可运用无需信任的脚本来使用可隐藏转账发送方的混币器（Mixer）或其他功能，根本就不需要第三方参与。如需进一步了解西格玛协议，请登录[https://ergoplatform.org/en/blog/2020\_03\_16\_ergo\_sigma/。](https://ergoplatform.org/en/blog/2020_03_16_ergo_sigma/%E3%80%82)

**全新“存储租赁费”激励机制——全部代币挖完还能继续挖，增强网络安全性**

关于矿工激励机制，除了采挖总共97,739,925枚ERG来对矿工进行奖励外，在所有ERG被挖完后，矿工们可以通过收取交易手续费赚取奖励。为了对现有区块链技术解决方案的激励模式做出改进，Ergo还特别设计了让矿工针对四年或更长时间未移动代币的币盒（UTXO）收取存储租赁费（即存储空间租用费）。存储租赁费对Ergo的稳定性起着重要作用，即如果保持输出状态4年而没有移动，则矿工可以针对保持该状态的每个字节收取一小笔费用。该想法类似于常规云存储服务，但将该想法运用到区块链系统会带来这样一些好处。

首先，存储租赁费激励机制会增加矿工收入来源，提高矿工参与维护网络的积极性，从而增强网络安全性，Ergo挖矿也会一直保持稳定，不会像比特币和其他PoW代币那样，原生代币释放完后挖矿就会变得不稳定。其次，将围绕状态存储在Ergo形成一种经济，即矿工存储状态，获得奖励，同时将确保矿工获得合理报酬，受到激励后继续存储状态，从而提高网络安全性。第三，矿工通过从过期币盒收取存储租赁费可让丢失的代币重新进入流通环节，从而避免因密钥丢失而导致ERG流通量稳定下降。最后，尽管预计Ergo公链上会发行大量非原生代币，以获益于Ergo的高度安全性和去中心化特性以及合约币功能，但Ergo的原生代币ERG是Ergo公链上唯一可以用来支付存储租赁费的代币，存储租赁费机制也算是为ERG建立了一个长期独特用例。

**原创脚本语言ErgoScript——让Ergo实现复杂金融合约的能力远超对手**

Ergo还对现有区块链技术解决方案实施了各种技术改进。ErgoScript原创脚本就是其中之一。ErgoScript是Ergo专门设计的一种对加密协议和应用友好、功能强大的全新加密货币脚本语言，比比特币脚本功能强大很多。它基于西格玛协议（Σ-protocol），支持非交互式零知识证明，而且十分灵活，可用于环签名、多重签名、多种货币、原子交换、自我复制脚本和长期计算。

Ergo中的每个代币均有一个用ErgoScript编写的程序对其进行保护，ErgoScript能够规定一枚代币的使用条件。简单情况下，一位私钥所有者可以使用一枚代币，但更为复杂的花费条件可规定多名持币者、花费时间、向谁或什么群组花费等等。这使得Ergo实现复杂金融合约的技术能力远超现有其他安全分布式区块链。

**NiPoPoW支持跨链和轻客户端——交易速度快，在智能手机上就能使用Ergo**

NiPoPoW是工作量证明的非交互式证明的英文缩写，其含义是电脑程序会检查的短小而独立的字符串，以确认事件确实已在基于工作量证明的区块链上发生，而无需连接到区块链网络，也无需下载所有区块头。例如，NiPoPoW可以证明加密货币已完成支付。

NiPoPoW允许创建运行非常高效的移动钱包——SPV钱包，这种钱包相对于全节点而言，已是非常轻量，因为它只需要下载区块头，而不是整条区块链。当SPV客户端需要下载50万个区块头时，NiPoPoW钱包只需下载小样本量约250个区块头。随着区块链逐年增大，甚至在累积数十年的数据后，该样本量需做出调整，但大小不会增大。

NiPoPoW允许不同区块链之间通信并互操作，即支持跨链，例如API。因为运行区块链的矿工不监测其他区块链网络，不用短小的证明这是很难做到监测的。如果某条区块链支持诸如以太坊的智能合约，则写出一份合约来验证NiPoPoW，从而检查确认某件事情在另一区块链上确实已经发生并对它作出反应。例如，在以太坊经典上发生的支付可能会促使以太坊智能合约释放一笔付款。

只有某区块链在其区块中支持NiPoPoW才会产生该区块链的这类证明。Ergo等加密货币从其创世以来就已添加NiPoPoW支持。这意味Ergo也可以创建高效运行的移动钱包——SPV钱包，还可以轻易整合侧链，支持跨链，进行区块链互操作，比如API。换言之，NiPoPoW有利于非常高效地进行跨链操作。

不借助于受信第三方，要使用现有加密货币基本上是不可能的。如要以无需信任的方式接收小额代币，客户须下载并处理数十亿字节的数据才能与网络同步，即使在高端硬件上也可能需要数周时间，更不用提在移动设备上操作是何体验。因此，难怪大多数用户更喜欢使用钱包、交易所、区块浏览器的受信解决方案。

从去中心化的意义上讲，Ergo的设计最大程度地对用户友好。PoW的一个重要特性是无需载完整区块链它便可验证所完成的工作。Ergo区块支持NiPoPoW，即允许轻客户端只需下载少于1兆字节的数据便可与网络同步。此外，Ergo使用经过身份验证的状态，对于包含的任何交易，客户端都可下载关于其正确性的证明。因此，无论区块链大小如何，普通用户使用智能手机便可加入网络并开始使用Ergo，得到的安全保证与全节点相同。

**技术框架——Scorex框架**

从Ergo核心开发者Alex的履历可以看到，Alex是Scorex负责人，对Scorex是再熟悉不过的了。Ergo平台采用的技术框架正是Scorex框架。Scorex框架现已升级到Scorex 2版本，它是一个模块化区块链框架，采用的Scala语言，允许使用各种设计进行免费无限次实验。Scorex 2是对Scorex框架的彻底重写，具有这些特点：紧凑的功能代码、具有细粒度的模块化设计、Scala语言、基于TCP的异步网络层、JSON API、被具体化为单独scrypto框架的密码学原语。Scorex 2的最终1.0版本尚未完成，但也快了。目前正在优化和审查代码库，以供发布使用。请点击链接[https://github.com/input-output-hk/Scorex了解详情。](https://github.com/input-output-hk/Scorex%E4%BA%86%E8%A7%A3%E8%AF%A6%E6%83%85%E3%80%82)

**自定义代币享头等公民待遇——在Ergo平台上交易不用ERG支付手续费也行**

Ergo平台上的自定义代币享有头等公民待遇，ERG能做的事情，自定义代币也能做。与以太坊不同，在Ergo平台上，甚至允许使用自定义代币支付手续费，无需将ERG存入钱包中。

**适用范围广——图灵完备，可防止DoS攻击和阻止程序停机**

Ergo去中心化应用（DAPP）和链下协议由于是在轻客户端上运行，将以真正去中心化方式实现，然而，这些DAPP和协议需用灵活、安全的智能合约语言进行编写。Ergo智能合约基于类似比特币的UTXO模型，即每个输出都受到某个脚本的保护。如果脚本语言足够丰富，它就可以编写图灵完备合约，同时避免采用针对程序停机的定制解决方案，例如，以太坊中的燃料（Gas）机制。

跟比特币脚本相比，ErgoScript明显用途更广泛，它还包含允许在执行前准确估计脚本复杂性的操作，从而防止各种DoS攻击和“停机”问题。然而，这个指令集仍然足以编写任何可能的程序；经证明，ErgoScript是图灵完备的。ErgoScript的加密部分基于西格玛协议，自然是支持阈值m-of-n签名、环签名等。请牢记这一切，预计ErgoScript和Ergo的设计能够让ERG作为合约币产生独特作用，适用于无数应用。

合约币（Contractual Money）指被合约绑定的ERG（和二级代币）。这适用于Ergo平台已有的所有代币，因为装有内容（ERG、其他代币和数据）的任何币盒均受合约绑定。

**Ergo与Emurgo寻求合作共赢**

Ergo常与Emurgo合作，包括共同构建DeFi解决方案，将ERG整合到Yoroi钱包，共同打造全新预言机模式——预言机池，构建去中心化的美元稳定币等。Emurgo是一家全球性的区块链技术公司，专注于为开发者、初创公司、企业和政府提供解决方案。Emurgo也是全球公认PoS公链项目Cardano的创始成员单位。

最近，由社区驱动的Ergo基金会迎来了一位新成员，他就是Emurgo的研发负责人Robert Kornacki，Robert的加入将有助于Ergo平台及其原生代币ERG的生态开发、推广、广泛采用和使用。还有更多成员被提名加入Ergo基金会，每个人都可以申请加入。

**Yoroi钱包——现已支持ERG，将开启用户进入Ergo生态系统的门户**

Yoroi钱包是一款由Emurgo开发用于Cardano生态系统的旗舰型加密货币轻钱包，具有很高的安全性，可在台式设备和移动设备上使用。ERG是继Cardano原生代币ADA之后首个被整合到Yoroi钱包中的加密货币，现已支持ERG！换言之，目前，Yoroi钱包被用作ADA和ERG的多币种钱包，可以安全地储存和交易您的加密货币。笔者已在使用Yoroi钱包进行ERG的收付款，交易确认速度非常快。

后面会做进一步开发，让Ergo整合到Yoroi钱包中。届时，Yoroi钱包将成为用户进入Ergo生态系统的门户，Ergo生态系统将由西格玛协议驱动的DAPP组成。尽管Ergo是功能极其强大的底层公链平台，ErgoScript能够开发复杂但仍然安全的智能合约和DAPP，但仍在可使用性方面仍存在障碍。Yoroi则将解决这个问题，它将扮演浏览器扩展程序的角色，用户可通过Yoroi钱包跟Ergo上面的DAPP以及区块链赋能网站进行互动，这跟以太坊的MetaMask钱包非常相似。

由于Ergo使用的是扩展UTXO（"EUTXO”）模型，Ergo采用的智能合约方法完全不同。西格玛协议的实现将让在以太坊上无法做到或行不通的用例变得可行。Ergo已经有第一批这类应用已完成并正在运行，例如高效、无需信任的ErgoMixer和零知识数字签名应用 ZKTreasury。Yoroi钱包将允许开发者使用无缝用户界面为许多用例在Ergo平台上构建网页DAPP，例如去中心化交易所、基于代币的项目（NFT）以及稳定币等其他关键应用。最后，Yoroi还将允许任何人无需掌握大量技术专长便可使用许多重要的DeFi服务。非常期待Ergo接下来将跟Yoroi的举措。

**DeFi合作——求同存异，优势互补，相互成就**

2020年6月9日，Emurgo宣布跟Ergo合作，共同构建基于区块链的去中心化金融解决方案。此次合作协议的范围包括共同探讨稳定币的研发和提供去中心化金融服务应用，双方将发挥各自专长，即Cardano的技术结构和使用基于UTXO的智能合约做到的隐私保护。

Emurgo选择跟Ergo开展战略合作也是为了满足对定制去中心化金融（DeFi）解决方案日益增长的需求，从而推动行业向前发展。由于当前整个区块链行业对构建去中心化金融服务的兴趣不断增加，此次合作将进行深入研究并开发DeFi解决方案，满足大家的需求。这些解决方案将采用Ergo的智能合约。而Ergo的智能合约是与隐私功能一并嵌入的，还能与Cardano的大型全球网络进行互操作。反过来，这将方便开发者、投资者和有关利益方灵活使用Ergo的功能。

另外，ERG已整合到Yoroi钱包中，这也很好地说明，要让DeFi发展壮大需要的是合作，而非竞争。开源系统之间可相互取长补短，求同存异，共谋发展，而非一味地想着如何搞死对方，它们是可以相互成就的，还可接入对方的网络，而非要脱离对方，自我封闭。

通过Yoroi钱包可与基于Ergo的DAPP以及Cardano生态系统进行互动。同时，Ergo已实现的功能（例如NiPoPoW）和将来会实现的功能，即使不能直接导入Cardano和其他区块链中，也可以为它们提供先例。

由于Emurgo是Cardano的创始成员单位之一，谈到区块链合作共赢，不得不将Cardano与Ergo比较一番。

尽管Cardano与Ergo分别采用完全不同的方法进行DeFi和区块链开发，但二者之间也存在明显重叠的方面。这便为两个不同的公链项目进行大量合作提供了可能，有利于惠及两个不同的生态系统，从而促进整个区块链行业的发展。

两个项目的社区也对Cardano创始成员单位Emurgo与Ergo建立合作关系做出了积极回应，主要是因为合作有利于将各自资源汇集在一起，有利于对新出现的重要方面进行研究，同时允许两个项目分享它们以各自方式获得的见解。

Cardano是PoS公链，使用Haskell进行开发，其智能合约使用基于Haskell的定制Plutus语言进行编写。而Ergo则是PoW公链，基于Ergo核心开发者Alex原创的Scorex框架，其智能合约则使用从Scala提取功能的原创脚本ErgoScript进行编写。

两个公链平台的智能合约都是基于扩展UTXO模型，这是相当新的想法。像以太坊等平台则使用的是含义完全不同的账户模型（Account Model）。扩展UTXO系统有利于实现完全成熟且图灵完备（交易间）的智能合约。这是一种崭新的创新，将允许最新一代的区块链改造比特币使用过的原始模型，但比现在拥有的功能会强大许多。UTXO模型将对智能合约带来革命性影响，而且两个项目进行合作发现的成果无疑将对Cardano和Ergo产生重大价值。

**携手打造具有革命性意义、让数据源去中心化的预言机池**

2020年6月30日，Ergo官方博客发文称，Ergo与Emurgo将在Ergo稳定币上实现双方关于预言机池的共同研究。Ergo与Emurgo共同打造将具有革命性意义的预言机池。Ergo的UTXO模型能够对预言机系统提供先前无法提供的益处。预言机池将会让数据源变得去中心化，确保过程和数据本身均更加可靠。预言机池内有一组预言机会对数据源达成共识，每个预言机会以各自的UTXO向区块链公布各自的数据点。预言机池是核心区块链基础设施，它将作为一项公共服务运行，任何DAPP和开发均可在使用点自由访问预言机池。预言机池将首先在Ergo平台上使用，然后在Cardano公链上使用。

区块链目前就像是一座孤岛，与世隔绝，自我封闭，如何让区块链跟现实世界连接起来，预言机（Oracle）就是负责解决这个问题的。它是DeFi基础设施的关键要素，是连接区块链与现实世界数据的桥梁，因此，对DeFi发挥其最大潜力起着至关重要的作用。DAPP必须要访问可靠数据才能有效、安全地执行。而稳定币和借贷平台等主要用例的诚信将取决于它们所用的预言机。

尽管预言机在向DAPP提供实时数据更新服务（Data Feed）方面起着非常重要的作用，但研究表明，现如今的预言机方案缺乏透明度、可问责性以及运行稳健性。这会造成这些预言机方案成为可能的单点故障，从而威胁到依赖于这些预言机方案的任何软件的安全性。对于稳定币而言，现有预言机方案存在的这些问题可能会造成稳定币脱钩，变得不稳定，从而失去价值，而且可能会让稳定币遭遇攻击和漏洞利用。

鉴于以上问题，专门为Ergo的扩展UTXO智能合约模型设计了预言机池（Oracle Pool）这一概念。预言机池是一种试图解决上述问题的全新预言机模式，它还将提供更多新的功能。使用此全新预言机模式，可开启很多种可能：保证数据发布时间表，纳入游戏理论奖惩机制、内置治理、可能动态输入，以及构建具有保密性的预言机数据点分层等等。

预言机池会涉及到多个预言机同时运行的情况，各预言机在预言机池中所占的份额不同，它们会根据各自所提供数据的可靠程度获得奖励。为了确定数据的“真实性”，会剔除异常值并求数据点的平均值。如要加入预言机池，预言机需要提供质押，若不能准时提供优质数据，就会受到惩罚。因此，在PoW共识机制中，诚实的预言机就会获得奖励，而弄虚作假或不可靠的预言机则会浪费自己的资源。

提到预言机，大家很容易想到Chainlink，因为这个预言机项目今年确实很火。但笔者在整理Ergo技术团队核心灵魂人物Alexander Chepurnoy的履历时发现，Alexander Chepurnoy是smartcontract.com的联合创始人，而根据Google检索到的英文资料，smartcontract.com就是现在的Chainlink。这样看来，区块链极客圈还是真是小，感觉到处都能碰到熟人。因此，Ergo预言机池背后技术团队的实力应该也是不容小觑的。

**构建将优于Maker DAO的美元稳定币——解决稳定币中心化和波动的问题**

目前，Emurgo正在Ergo平台上构建优于Maker DAO的美元稳定币，以解决当前稳定币中心化和波动的问题，该美元稳定币将于明年1月至2月之间发布。

稳定币是DeFi的一个主要用例，但却表现为不同形式。稳定币领域目前尚未成熟，提供的服务也不周全，但它变化很快。

稳定币是最重要也是最受欢迎的DeFi产品之一，它为用户在区块链上进行套期保值和存储价值提供了方便，无需借助于交易所或其他中心化提供商。Ergo作为智能合约和DeFi平台，就非常适合构建包括稳定币在内的各种DAPP。

稳定币是一种与美元或欧元等法币锚定的加密货币，其作用就是保持价值稳定。稳定币种类繁多，一种就是以USDT为代表的支持型稳定币。USDT这种稳定币就是在银行账户中存入美元然后再为每一美元发售一枚USDT等代币。它虽然为用户存储和转移价值提供了方便，无需使用交易所便可完成，但弊端是中心化严重。泰达公司就是因为不透明和拒绝接受正常审计而出名的。如果监管机构冻结其账户，USDT这种稳定币就可能会跟着完蛋。

市场上类似于USDT的支持型稳定币还有很多，包括USDC、TUSD等，尽管这些稳定币透明度提高很多，银行合作伙伴也是多个，但还是存在一定程度的中心化以及风险，因为银行合作伙伴的账户也是可能遭到冻结、关闭和突袭的。

为此，以为Maker 协议为代表的其他稳定币项目应运而生，试图解决这个问题。Maker是一个建立在以太坊上的无需许可的借贷平台，它负责创建第一个去中心化的稳定币：DAI。Maker的DAI是一种算法型稳定币，与有美元支持的USDT、USDC和其他稳定币不同，这种稳定币是无真实美元支持的“合成”美元。

DAI是从由加密货币质押品（大多数时候是ETH）支持的保险库（Vault）中发出的。智能合约和预言机（去中心化喂价）系统确保每一枚DAI至少质押有1.5美元；如果比值下降到太低，保险库关闭，并自动回购DAI。这种系统非常复杂，但也令人印象深刻。

DAI作为领先的算法型稳定币，曾经做得非常好。它的宗旨是采用去中心化的货币政策，保持“软”锚定，如果市场条件把DAI价格推得太远，它就会强制性关门将价格拉回1美元。通常来说，它做得是非常成功的。但是今年3.12大跌的时候，我们见证了每种法币资产和加密资产都出现大量抛售，导致市场剧烈波动，DAI的价格也发生严重偏离，稳定币也不再稳定。

综上所述，USDT等支持型稳定币存在中心化的问题，而DAI等算法抵押型稳定币虽然能用喂价和去中心化货币政策解决稳定币中心化的问题，但遇到巨大行情波动时也会变得不稳定。可以说它们各有优劣。

Ergo即将在2021年1月至2月之间推出自己的稳定币。截止写稿时，Ergo未透露更多细节。但在Google中检索发现一则Dexplain于2020年9月2日发布的新闻，Cardano创始人Charles Hoskinson，宣布IOHK、Emurgo和Ergo将合作共同推出一种算法稳定币。该稳定币将明显优于Maker DAO。

**Ergo即将跟Cardano实现互操作性**

Ergo官方透露，Ergo将即将实现跟Cardano进行互操作性，Cardano当前市值接近50亿美元、是Ergo当前市值的500倍。用于Cardano的预言机解决方案将发布来自Ergo预言机池的数据，将预先处理过的数据视作可信的来源，以便自己记录在区块链上。

今年8月底，Ergo公布了预言机池（Oracle Pool），这是一种以Ergo扩展UTXO模型为技术驱动的全新预言机方案。相较于现有预言机模式，这些预言机有很多益处，正式这些益处才可以创建新型的DAPP。

目前，Cardano的一个预言机正在使用Ergo预言机池提供的数据。Cardano权益池运营者Marek为Cardano创建了一个简单的解决方案。来自Ergo预言机的信息将通过tx metadata发布到Cardano公链上。

NUST预言机目前正服务于六个数据流，可在nut.link找到该预言机。它有2个用于ERG/USD的数据源：Coingecko和Ergo预言机池。这两个数据源也用于ADA/USD价格。此外，NUST还记录ADA/EUR和特斯拉股价。

另外，受Ergo预言机池方法的启发，NUTS采用融资机制，这将让外部数据造福于公众，且可免费获取。

这是一次巨大的发展和进步。至少有两个原因，首先，它重复利用了Ergo预言机池已经做好的工作——因此，能便于Cardano已更高的效率发布可靠的喂价。以这种方式分享数据将会让两条公链在将来受益，因为一旦建立起可靠的预言机，任何其他平台都可以使用改数据，额外经常性支出相对很少。

其次，这是两个公链平台之间建立互操作性走出的第一步。Cardano与Ergo现在共享关于加密货币的同一数据源。这将为双方之间进行更多合作和跨链互动开辟了一条道路，从而加强了两条公链之间的联系。

最后，此功能可支持复杂的DeFi解决方案，例如，Ergo-Cardano原子交换，它具有跨链流动性池和由双方约定预言机数据决定的定价。

**跟Gravity和Waves合作——解决跨链互操作性问题**

Gravity协议是一个跨区块链的预言机系统，将在单个统一结构中支持区块链与外部世界之间的通信、跨链通信和侧链。当前，Gravity网络成员包括我们所熟悉的Waves、Tron、Solano、Ontology等，Ergo也是Gravity网络的成员之一，如下图所示。通过Gravity，Ergo以后跟许多加密货币进行互操作。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/0/0a1c2194af41454ea8cfb978603dba013d233c9d.jpeg)

414×210 12.2 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/0/0a1c2194af41454ea8cfb978603dba013d233c9d.jpeg)

Waves是一个面向Web3.0应用及分布式解决方案的开发区块链协议和开发者工具集。Waves于2020年10月26日在媒体平台Medium上发文称，Waves通过Gravity与Ergo建立合作关系，共同寻求互操作性解决方案。Ergo基金会已跟Waves达成合作协议，协议规定将把Ergo作为Gravity目标区块链进行整合，同时合作研发专注于去中心化金融（DeFi）和去中心化预言机的跨链解决方案。Ergo原生代币ERG首发于Waves区块链。现在，ERG已上去中心化交易所Waves.Exchange。

Alex表示，Ergo与Gravity进行整合，不单是一项有趣的技术挑战，它还带来了一个机遇，即将Ergo区块链向大量数字资产开放，这些数字资产来自与Gravity整合的区块链网络，从而为在Ergo平台上开发DeFi打下了一个稳定基础。双方合作将把Ergo公链整合到Gravity这个跨区块链网络，同时创建Ergo公链与Gravity其他目标链之间的跨链门户。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/0/0a593f2ba14b9ae1053d7cc69537ff48e77d9c7b.jpeg)

394×207 11 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/0/0a593f2ba14b9ae1053d7cc69537ff48e77d9c7b.jpeg)

**同行评价——前以太坊联合创始人兼Cardano创始人Charles非常看好Ergo**

IOHK首席执行官兼Cardano创始人Charles Hoskinson一直都很支持Ergo，它曾于2017年公开称Ergo是区块链行业中最有意思、最令人激动的区块链项目之一，他非常乐于看到Ergo发展起来并不断完善。另外，Ergo拥有一支备受尊敬的团队，Facebook的Libra白皮书中曾提到过Ergo的开发者。

据国外区块链媒体报道，Charles曾表示，Ergo是至今已建成或在建的最具革命性的加密货币之一。它拥有很多疯狂的想法，例如不可外包的拼图和西格玛协议，修剪区块链和滚子链等，甚至还有无预挖矿证明。

Ergo创始人Alex曾参与Charles创立的Cardano的开发，是Charles最喜欢的技术开发者。想必它对Ergo的评价也是基于对Alex能力的认可。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/3/30aa3126ddf26b5e1e39dd927210c8c1a2607bf4.jpeg)

553×107 14.4 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/3/30aa3126ddf26b5e1e39dd927210c8c1a2607bf4.jpeg)

**近期活动——请重点关注硬分叉，硬分叉后所有人都能参与挖矿**

1. Ergo已整合到Yoroi钱包中。很快Yoroi就能跟所有Ergo DAPP进行互动并用作Ergo的Meta-mask.
2. Emurgo正在Ergo平台上构建美元稳定币，该稳定并将在2021年1月至2月之间发布.
3. Emurgo将在2020年1月23日举办线上峰会；
4. Ergo预计将在2021年2月1日进行首次硬分叉，很快所有GPU矿工都可以参与ERG挖矿。
5. 即将发布新的开发者工具

**硬分叉介绍**

Ergo正在试图尽量避免硬分叉。代币释放、工作量证明、交易模式基础以及其他核心的东西是不能修改的，因为这些核心设计部分发生任何修改，就意味着Ergo公链不再是Ergo公链，而是另外一条区块链。但是，如果且只有下列情形发生时，开发者才可提出硬分叉：

* 硬分叉仅仅是关于安全修复的。这次唯一例外是关于产生特定指令的费用，该费用可通过矿工投票表决进行调整，目前只是做了计划但尚未在当前主网中实现。
* 该硬分叉获得90%以上矿工的支持；且
* 该硬分叉不会破坏旧有合约，不会冻结或移动任何资金。

然而，从Ergo主网上线后的一年半内，发现使用Ergo当前的PoW机制（Autolykos v1）时存在一些关键问题，为了解决这些问题，将在近期进行硬分叉，以实现Autolykos v2。这些问题如下：

* 算力中心化，算力集中在一些专门从事挖矿的大矿工手里，他们利用精密复杂的专有软件占尽挖矿优势，导致小矿工无法分得挖矿的一杯羹，这显然违背了Ergo真正去中心化的初衷。
* Ergo是面向普通人的，但小矿工由于缺乏优化的软件和缺乏矿池以致无法参与挖矿，因为矿池提供商不向小矿工提供该专门软件。
* Ergo主网上线后不久还发现，即使Ergo使用了不可外包（Non-outsourceability）功能但还是可能会形成矿池，因为小矿工为了确保他们遵守矿池规则可能会提供质押，而且这种做法已在Ergopool中付诸实践。

上述问题表明， Autolykos v1无法保证网络的长期安全性，事实上，还可能妨碍了安全性。因此，社区决定进行一次硬分叉来消除不可外包性并允许有矿池，这样一来，所有矿工都可以参与ERG挖矿。所以，现在，矿工们可以准备好参与ERG挖矿，感兴趣的任何矿池和矿工请联系Ergo团队和社区，了解在硬分叉后如何参与该网络。

Ergo计划在2021年2月1日进行硬分叉，完成硬分叉后，Ergo将得到重生。届时，Ergo将向所有矿工开放，进而出现大规模矿工使用Ergo进行挖矿的场面，改善委托簿，增加流动性，分享更多想法。

**新的开发者工具介绍**

Ergo核心团队和Emurgo正忙着发布下列新的开发者工具，以帮到开发者：

Ergo Playground（Ergo学习园地）是一个供开发者们学习ErgoScript的场所，它将提供智能合约范例供开发者们研读，从而学会如何使用ErgoScript。每个合约范例均包括一个Ergo Playground链接，将方便您立即编辑并运行你的浏览器内的智能合约代码。详情请参见链接：[GitHub - ergoplatform/ergoscript-by-example: Learn ErgoScript by reading example smart contracts powered by Ergo Playground.](https://github.com/ergoplatform/ergoscript-by-example)

Ergo Node Interface Library（Ergo节点接口库）是一个Rust库，将让跟Ergo节点进行互动和使用Ergo节点变得简单。它采用了绝佳的Ergo-Lib（原Sigma Rust），以解析来自Ergo节点的ErgoBox和其他Ergo相关数据类型。详情请参见链接：

<https://crates.io/crates/ergo-node-interface>

Assembler Service（组合服务）指一种链下服务，用于组合DAPP的任意交易，从而绕开节点需求。详情请参见链接：·<https://twitter.com/chepurnoy/status/1329849350252539910?s=20>;

![](https://ergoforum.org/uploads/default/original/2X/b/b79f8a677d2f6b58ac6a695ab00973a1d588ec3b.png)
[Ergo Community Forum – 20 Nov 20](https://www.ergoforum.org/t/tx-assembler-service-bypassing-node-requirement-for-dapps/443/10 "04:33PM - 20 November 2020")

![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/1X/58347d43e6c0ad97a8fc426347191c5c35765d2e.svg)

### [Tx Assembler Service - Bypassing Node Requirement For dApps](https://www.ergoforum.org/t/tx-assembler-service-bypassing-node-requirement-for-dapps/443/10)

Development

Research and Development

The documentation of the assembler service is done finally ) I think the assembler service has reached a point to be used by other dApp developers so I have released the first version here. However, there are some future works that should be...

Headless DAPP（无头DAPP）是一种用于DAPP开发的全新技术与商务模型，它刚开始在更广泛的区块链行业立足。简而言之，无端头DAPP是一种纯粹的便携式独立逻辑，用于阅读并参与链上智能合约协议。

换言之，无头DAPP是软件的一部分，该部分让复杂的链上协议接触链下世界，设有一个简化的使用界面，任何人都可以在该界面上进行搭建。关键的是，无头DAPP正如字面含义所示，这些DAPP上是没有构建前端的。详情请参见链接：·[ergo-utilities-rust/ergo-headless-dapp-framework at EPF-v0.2 · ergoplatform/ergo-utilities-rust · GitHub](https://github.com/robkorn/ergo-utilities-rust/tree/EPF-v0.2/ergo-headless-dapp-framework#what-are-headless-dapps%EF%BC%9Bhttps://ergoplatform.org/en/blog/2020-11-27-an-introduction-to-headless-dapps/)

新的DAPP：随着新工具的推出且易于整合到Emurgo中，可能会更多新的应用推出。可通过SigmaVerse轻松访问这些应用。请参考链接[http://sigma.ergoplatform.org/。](http://sigma.ergoplatform.org/%E3%80%82)

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/d/d16bc4ba4e7efa75adcd1284fcd9ed6c8dc5241b.jpeg)

248×136 3.23 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/d/d16bc4ba4e7efa75adcd1284fcd9ed6c8dc5241b.jpeg)

**Ergonaut拍卖与NFT**

Ergonaut拍卖将持续到2021年1月中旬，目前正在第一批Ergo DAPP之一Ergo Auction House（Ergo拍卖行）上进行。

**Ergonaut吉祥物拍卖**

Ergo基金会正在进行吉祥物Ergonaut的NFT拍卖！

此次重大拍卖将为由我们匿名开发者进行的开发工作筹措资金，由于更新后的Auction House（拍卖行）与任何Ergo钱包协同工作，这为了任何人见证Ergo历史性一刻提供了机会！

发布Ergo的Auction House （拍卖行）是Ergo平台的一个重大里程碑。Ergo平台上的NFT提供的功能比其他区块链上的NFT提供的更多，我们的拍卖可追溯至10月份，已卖出第一个PoW支持的NFT，为开发者募集资金。卖出该NFT换到了1027枚ERG。

当时，你只有运行自己的节点才可以参与竞拍，这使得社区的大部分人难以参与竞拍。

现在，Ergo正在发起另一场拍卖，再次为我们的匿名开发者筹措资金，他们已经做了很多出色的工作。此时，一项新的服务意味着可以使用任何钱包！

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/5/5ccdb337078588cd7062fd0e2e218b6d1b91d6bb.jpeg)

406×203 9.18 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/5/5ccdb337078588cd7062fd0e2e218b6d1b91d6bb.jpeg)

**与此NFT关联的Ergonaut吉祥物**

此次拍卖有点难。此NFT将代表我们新的Ergo吉祥物，即Ergonaut。该吉祥物包含未来的多个工具，到时候我们将看到该角色更多的一面。我们打算卖掉该图象，以将Ergonaut介绍给社区，标志着拍卖行的最新动态。

跟Ergonaut关联的此NFT将包含以下信息：

* 匿名开发者的数字标志。此代币id从一个币盒构建而来，该币盒在其注册时就包含该字符串“anon\_92048 | anon2020\* | anon\_real”。匿名开发者已对Ergo生态做出许多贡献，包括ErgoMixer、ZK Treasury和Auction House。
* 32位工作量（代币id：000000002306564c7b03a78b76a2ce1d9d4e748ddf462cb73cc30b48e43e6e44）
* 代币发送币盒包含图像哈希“059c321fad7e0b2bb474ebea46c8978d1957eb1b5f11c589e52f129d14b3bde4”，它位于8号登记簿。

此次拍卖获得的所有资金将分发给我们的匿名开发者，以激励他们继续为Ergo生态构建炫酷的新功能。

如果你未运行自己的节点，还是可以使用交易组合服务（Transaction Assembler Service）参与此次竞拍。可前往ErgoForum了解交易组合服务更多详细内容。点击Auction（拍卖）网站右上角的“Configure Wallet（配置钱包）”，点击“Any Wallet（任何钱包）”，填写你的钱包地址。

投标后，你将收到一个钱包地址，方便你将ERG发送到该地址。标准规则是：如果你的竞拍价格被其他人超过，会立即自动将你的ERG退还给你。

**Ergo平台上的NFT**

Ergo平台允许用户安全、轻松地卖出Ergo平台上的NFT代币，这是不断壮大的DeFi运动的一次重大发展。

NFT的英文全称是Non-fungible Token，中文译法有多种，包括非同质化代币、不可替代代币和不可互换代币。NFT是一种特殊的加密代币，代表具有唯一性的事物，是不可拆分、具有唯一性、或限量版的代币，可代表实物或数字物品，例如，它可以代表一套房子或一辆小汽车，也可以代表一件数字艺术品、一系列图像、一件游戏装备或一件其他收藏品。它具有不可互换性、不可替代性、不可拆分性和唯一性，应用领域涉及加密艺术品、加密收藏品、加密游戏等。

NFT并非一项新的发展，但随着DeFi领域的崛起，NFT也获得越来越多的重视并发现愈来愈多的新用例。NFT已然是区块链行业正在蓬勃发展的一个领域，预计未来几年将会继续迅速发展壮大。

Ergo平台上的NFT采用的方法不同于以太坊等平台上传统NFT所采用的方法。扩展UTXO（EUTXO）应用于Ergo生态系统的很多领域，NFT也是采用了EUTXO模型，它将给NFT领域带来各种益处，并提供全新的用例。

Ergo Auction House（Ergo拍卖行）将允许用户安全、轻松地卖出NFT，即将NFT以拍卖的方式卖给出价最高的竞拍者。

用户需要运行全节点才能连接到NFT市场，但在适当的时候就可以通过Yoroi钱包进入该市场了。

首先，NFT市场为通常缺乏流动性的市场提供了流动性。例如，由于各种原因，是很难进入实物艺术品市场的。这意味着是要对画作进行估值是很难的。一件作品的价值取决于买家愿意花多少钱买它。如果能够参与竞拍的买家寥寥无几，就无法充分发现作品的价值。将画作（或数字图像）进行代币化（或者通证化）并在网络上安全将其卖出，将向全球参与者市场开启了这一过程。

这可结合通过传统去中心化交易所进行NFT买卖来进行。艺术家可能最初在拍卖会上卖出其作品，以赚取最高价，但如果该艺术家后面变得非常有名，作品买家便可在二级市场上交易该作品，此功能非常实用。

有两种市场可用于治理代币的首次和后续分配。治理代币是一种用来对影响着项目生态的决定进行表决的代币。例如，一项新的DeFi项目可能会铸造100枚NFT，每一枚NFT代表对该项目享有的1%表决权，并将此平台收入的1%分配给该枚代币的持有者。首次分配时，这些NFT代币可能会以拍卖形式卖出。如果代币所有者需要或打算卖出其在该项目中的权益，则他们可以在一个高效的全球市场上卖出。

NFT及其市场还有许多其他潜在用例。许多平台整合了有趣且有价值的功能，例如，允许NFT原创者（比如艺术家）在将来每次卖出作品时获得收入的功能，这在现实世界这是无法做到的。

点击连接

[https://ergoauctions.org/#/auction/active，](https://ergoauctions.org/#/auction/active%EF%BC%8C)

进一步了解Ergo Auction House（Ergo拍卖行），这里也是一个NFT市场。如果你打算运行自己的NFT市场，还可以在这里找到源代码和安装说明。

**2020-2021最新路线图**

2020年11月13日，Ergo官方发布最新路线图，表示正在谈：区块链拍卖、稳定币整合、Ledger整合、原子交换、ErgoDEX。然而，由于实际进度不同于计划进度，首次硬分叉的具体时间不同于该路线图给出的时间。英文路线图链接：

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/optimized/2X/a/a32c58ebd0e6f173deb226dc1dd68d769eeb79c2_2_690x391.jpeg)

1280×726 78.8 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/a/a32c58ebd0e6f173deb226dc1dd68d769eeb79c2.jpeg)

  

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/8/813bf0575f8d1a42013f5800d0486d7c38a0fe94.jpeg)

552×305 35 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/8/813bf0575f8d1a42013f5800d0486d7c38a0fe94.jpeg)

**技术团队及区块链元老级人物Alex——10年区块链理论研究和实战开发经验**

正如文章开头所提到的，Ergo的技术团队拥有10年区块链理论研究和实战开发经验，由一群经验丰富的开发者和研究员组成，在加密货币、编译原理、区块链技术和加密电子现金领域，他们有发表过相关论文且拥有博士学位。该团队在加密货币和区块链框架核心开发方面拥有坚实背景，参与过的项目包括未来币（NXT）、Scorex、公链项目Cardano和2020牛币之一波币（WAVES）。详情请登录[https://ergoplatform.org/en/hall\_of\_fame/。](https://ergoplatform.org/en/hall_of_fame/%E3%80%82)

Ergo技术团队的核心灵魂人物是Alexander Chepurnoy（以下简称“Alex”）。Alex是一位才华与颜值齐飞的区块链技术奇才，颜值以照片为证，才华得从他2011年涉足比特币开始说起。也就是从2009年1月3日比特币正式诞生算起，Alex大概在两年后踏入了加密货币和区块链这两个前所未有的新兴领域，至今已有近10年的区块链开发经验。而比特币诞生也仅仅才11年有余。换言之，我们将Alex称为“区块链元老级人物”也不为过，而且是“最帅气的元老”。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/6/6bde21958ede38c6b7854b986f3c144e9d5de90a.jpeg)

279×418 26.4 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/6/6bde21958ede38c6b7854b986f3c144e9d5de90a.jpeg)

Alex拥有15年以上软件开发经验，是Ergo的联合创始人兼CTO，也是Ergo的核心开发者。自2011年以来，Alex一直活跃于区块链开发和智能合约领域，致力于加密货币相关软件的开发工作。他曾被称作第二代虚拟货币代表的未来币（NXT）的核心开发者，也是smartcontract.com的联合创始人，而smartcontract.com正是当前异常火爆的预言机项目Chainlink。发现这一层关系，大概能明白Cardano为什么会选择跟Ergo合作，让其预言机直接采用Ergo预言机池（Oracle Pool）提供的数据。Alex参与过Cardano的开发工作，是以太坊联合创始人、Cardano创始人Charles Hoskinson最喜欢的区块链技术开发者。

此外，Alex也是一位认真搞学术研究的“区块链学术专家”，他曾是Cardano创始公司之一IOHK聘请的第一批员工，当时是IOHK的研究员，也是团队Scorex负责人。目前，他已经攥写并发表了20余篇区块链学术论文。谷歌学术搜索（Google Scholar）已收录20篇Alexander Chepurnoy的区块链技术论文。Research[gate](https://link.jinse.com/s/zwMY01)已收录12篇。这些论文大部分都是发表在经过同行评审的刊物上的。而Ergo的论文也秉承了接受同行评审的这一优良传统，正好彰显了Alex做事严谨认真、一丝不苟、乐于接受同行考验的态度。也许正是这种态度，才让Cardano创始人Charles Hoskinson偏爱Alex，同时也非常看好Ergo这个项目。

[![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/8/86ad45d1477d70bab3f439f9bc5b094e19fec8a0.jpeg)

437×309 22.3 KB](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/original/2X/8/86ad45d1477d70bab3f439f9bc5b094e19fec8a0.jpeg)

Alex在接受国外区块链媒体The Daily Chain的采访时表示，他之所以将此项目取名为Ergo，是因为Ergo在拉丁语中的含义是“因此”，即因果的果，在希腊语中的含义是劳动、工作。他更喜欢后者，即劳动、工作，但两个含义都不错。正所谓种瓜得瓜，种豆得豆，只有付出劳动，努力工作才能做出真正的好东西。由此可以看出，Alex属于实干派，是一个非常务实的区块链技术开发者。Ergo早先的一个座右铭是“Ergo是AAA级工作量证明区块链（Ergo is AAA class of Proof-of-Work blockchains）”，由此可以看出，Alex是决心要把Ergo平台打造成顶级DeFi应用底层公链平台。

经查证，笔者还发现Alex出席过一场线上加密货币研讨会，题为“Gap加密2.0线上研讨会（Gap crypto 2.0 virtual seminar）”，于2015年5月5日召开，[当时他是以Nxt开发者和smartcontract.com](http://xn--Nxtsmartcontract-sk2zzh586f4kdt49e9qbry2feebq650b.com)（即现在的Chainlink）联合创始人的身份出席该研讨会，并作为主题发言人发言，当时以太坊创始人V神（Vitalik Buterin）也参加了该研讨会，排名在Alex后面。详情请登录[https://www.factom.com/conferences/factom-at-mind-the-gap-expo/。Alex在区块链技术极客心中地位之高可想而知，这让我们看到Alex在区块链技术领域的实力、地位以及影响力是绝对不容小觑的。](https://www.factom.com/conferences/factom-at-mind-the-gap-expo/%E3%80%82Alex%E5%9C%A8%E5%8C%BA%E5%9D%97%E9%93%BE%E6%8A%80%E6%9C%AF%E6%9E%81%E5%AE%A2%E5%BF%83%E4%B8%AD%E5%9C%B0%E4%BD%8D%E4%B9%8B%E9%AB%98%E5%8F%AF%E6%83%B3%E8%80%8C%E7%9F%A5%EF%BC%8C%E8%BF%99%E8%AE%A9%E6%88%91%E4%BB%AC%E7%9C%8B%E5%88%B0Alex%E5%9C%A8%E5%8C%BA%E5%9D%97%E9%93%BE%E6%8A%80%E6%9C%AF%E9%A2%86%E5%9F%9F%E7%9A%84%E5%AE%9E%E5%8A%9B%E3%80%81%E5%9C%B0%E4%BD%8D%E4%BB%A5%E5%8F%8A%E5%BD%B1%E5%93%8D%E5%8A%9B%E6%98%AF%E7%BB%9D%E5%AF%B9%E4%B8%8D%E5%AE%B9%E5%B0%8F%E8%A7%91%E7%9A%84%E3%80%82)

据国外区块链媒体报道，数年前，NXT在这个行业是处于领先地位的，当Alex在将资产进行通证化（或者代币化）和设计去中心化交易平台（DEX）之际，V神还在给《比特币杂志（Bitcoin Magazine）》写文章和等着从大学退学。
