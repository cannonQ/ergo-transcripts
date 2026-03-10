---
title: Ergo及生态7月进度报告：罗森跨链桥或于8月上线
description: 'ErgoForum discussion: Ergo及生态7月进度报告：罗森跨链桥或于8月上线'
tags:
- amm
- auction-house
- cruxfinance
- cyberverse
- dexy
- duckpools
- ergo-explorer
- ergoforum
- ergonames
- exle
- fleet-sdk
- full-node
- gluon
- lilium
- machina-finance
- native-tokens
- nipopow
- off-the-grid
- paideia
- phoenix-finance
- rosen-bridge
- satergo
- sigma-rust
- sigmafi
- sigmanauts
- sigmausd
- spectrum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-7-8/4425
created: '2023-08-05'
last_activity: '2023-08-05'
posts_count: 1
views: 313
likes: 2
glossary_hits:
- AMM
- Auction House
- CruxFinance
- Cyberverse
- Dexy
- Duckpools
- EXLE
- Ergo Explorer
- ErgoNames
- Fleet SDK
- Full node
- Gluon
- Lilium
- Machina Finance
- Native tokens
- NiPoPoW
- Off the Grid
- Paideia
- Phoenix Finance
- Rosen Bridge
- Satergo
- SigmaFi
- SigmaUSD
- Sigmanauts
- Spectrum
- sigma-rust
---

# Ergo及生态7月进度报告：罗森跨链桥或于8月上线

> **Forum thread:** [https://ergoforum.org/t/ergo-7-8/4425](https://ergoforum.org/t/ergo-7-8/4425)
> **Category:** Uncategorized | **Created:** 2023-08-05 | **Posts:** 1 | **Views:** 313

**Related concepts:** AMM, Auction House, CruxFinance, Cyberverse, Dexy, Duckpools, EXLE, Ergo Explorer, ErgoNames, Fleet SDK, Full node, Gluon, Lilium, Machina Finance, Native tokens, NiPoPoW, Off the Grid, Paideia, Phoenix Finance, Rosen Bridge, Satergo, SigmaFi, SigmaUSD, Sigmanauts, Spectrum, sigma-rust

---

### Post #1 — @ergonautgcn (2023-08-05)

欢迎来到Ergo生态系统的月度总结，我们为您带来社区内各项目的最新进展和成果。

作者：Ergo平台

2023年8月2日

[![38367ba8-55fe-4b5e-94e8-11a602d30d6b_1200x627(1)](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/6/64adf3c59ea894ac97eab7f0ef42de32667715da_2_690x360.jpeg)

38367ba8-55fe-4b5e-94e8-11a602d30d6b\_1200x627(1)1200×627 213 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/6/64adf3c59ea894ac97eab7f0ef42de32667715da.jpeg "38367ba8-55fe-4b5e-94e8-11a602d30d6b_1200x627(1)")

2023年7月，Ergo社区在一系列举措方面取得了重大进展，从协议更新和新功能发布到令人激动的协作和整合。

区块1,051,200标志着第一批区块可收取存储租赁费的期间。由于Spectrum的链下机器人运营者之一的运作方式出现错误，创建了多个“creationHeight = 0”的盒子，使他们立即承担存储租赁费。值得庆幸的是，为了体现Ergo社区的诚信，负责此错误的开发者设法向大部分到期的盒子收取了有价值的代币，并将它们归还给了合法的所有者！

按照Ergo的释放计划，在区块高度1,044,000时，区块奖励发生减产，每个区块减少3枚ERG，减至36枚ERG。这实际上是ERG从创世时的初始区块奖励开始**第一次减半** 。下一次减产将于[10月8日左右](https://ergo.watch/emission)进行。

Ergo四周年庆峰会于本月初结束，如果您还没有观看的话，这里有很多精彩视频可供观看！完整的播放列表链接如下：

![|548x313](file:///C:\Users\Sky\AppData\Local\Temp\ksohtml4176\wps2.jpg)

Sigmanauts Treasury（Sigmanaut金库）已获得5,000枚ERG资助！他们计划利用这些资金通过显着的推广活动来加强参与和推广，通过赏金计划奖励社区成员的努力，并报销与为Ergo的成功提供的服务相关的费用。此外，一位Sigmanaut还顺利完成了一个Raffle，旨在启动Ergo的TikTok帐户和管理人。

《[GeN3](https://gen3mag.com/)杂志》给Web 3行业中40岁以下的kushti以[荣誉](https://twitter.com/number3mag/status/1686395266826653696)！

核心开发者Alex Chepurnoy（又名 kushti）今天（译注：8月2日）将在Web3黎巴嫩开发者大会上发表题为“区块链时代通过信任或抵押品创造货币”的演讲！

Ergo击中了SlumdogeMillionairs的心房，他很快就爱上了Ergo 并开始[囤积](https://twitter.com/ProTheDoge/status/1685483808462643200)（译注：截止翻译时间，已屯17000多枚ERG）。

即使价格如此低，我们也一直在努力提高社区的可访问性。请密切关注一些众筹者正在帮助我们在一些更中心化的交易所上线。

**协议和参考客户端**

节点版本5.0.13的发布标志着Ergo网络的一个重要里程碑，引入了通过UTXO设置快照 NIPoPoW（工作量证明之非交互式证明）来引导链，带来了备受期待的增强功能，同步过程经历了革命性的转变，将数据需求大幅削减了95%。

NIPoPoW是生态系统的基石技术，在实现更快的同步时间和促进去中心化基础设施的更广泛参与方面发挥着关键作用。使用NIPoPoW进行优化的引导不仅可以降低进入门槛，还可以提高去中心化程度，Twitter上的用户会竞相启动和运行修剪版全节点。

在此版本中，对数空间客户端（NiPoPoW + 无状态客户端）将很快变成人人皆可参与的现实。

[今天就去设置一个修剪版全节点！](https://docs.ergoplatform.com/node/modes/pruned-full-node/)

**Sigma**

Morphic在Sigma 5.0.10 RC版方面取得了重大进展，目前正在等待审核。该团队致力于各个方面的工作，包括启用JavaScript交叉编译、实现未签名的交易构建器以及推进多重签名。这将是一个可以在JS中和JVM上重用的代码库（Library）。这个想法是让相同的实现交叉编译到JVM和JS项目。

**DeFi**

**罗森跨链桥（Rosen Bridge）**

七月，罗森跨链桥取得重大进展。社区热切期待着这一重要的互操作性解决方案的公开发布，该解决方案能够实现跟其他区块链的无缝跨链通信和互操作性！主要发布仍处于测试阶段且进展顺利。他们有望在未来几天内完成测试（如果不出意外的话）。此外，还有超过120个Cardano SPO（权益池运营者）申请成为Watcher（观察者）。 更多消息即将发布！

[![ERGO WRAPUP JULY 3](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/2/2c23e66c76f4b1cf7de8b8c3a29106aa064e7b41_2_645x499.webp)

ERGO WRAPUP JULY 31456×1128 101 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/2/2c23e66c76f4b1cf7de8b8c3a29106aa064e7b41.webp "ERGO WRAPUP JULY 3")

**duckpools**

[duckpools](https://duckpools.io/)将于[**8月15日** 正式启动](https://twitter.com/duckpools_io/status/1686348175194615808)！第一阶段的所有开发现已完成，标志着一个新时代的开始。Ergo上的借贷池即将上线，因此请做好准备，迎接Ergo DeFi激动人心的新篇章。

**Paideia**

Paideia在提案创建和投票方面取得了实质性进展。Paideia的后端已准备好进入测试阶段，而前端正在最终确定通知。距离最简可行产品（MVP）发布更近了一步。截至7月 31日：“前端已连接，只是一些小问题导致提案创建挂起，问题已找到，前端开发正在修复，然后我们准备进行内部测试”。请务必查看他们在[Catalyst Fund 10](https://twitter.com/PaideiaDAO/status/1678025046575710209)中的提案！

**DexyGold**

原定于7月底上线的测试网出现了一些延迟，但距离上线已经不远了。请继续关注，并查看最近的[社区聊天](https://t.me/ergoplatform/408731)以获取更多信息！

[![ergo wrap july 4](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/b/b175b605a1a38fd8fd0a20593abf01b2e41006f9_2_375x500.webp)

ergo wrap july 41456×1938 240 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/b/b175b605a1a38fd8fd0a20593abf01b2e41006f9.webp "ergo wrap july 4")

**Spectrum Finance**

Spectrum推出了[Cardano端的AMM](https://spectrumlabs.medium.com/cardano-amm-dex-protocol-powering-cardano-defi-with-transparency-1669e31af3ba)（自动做市商）、[LBSP](https://twitter.com/SpectrumLabs_/status/1683627046084173827)（流动性引导权益池）[和 ISPO SP](https://twitter.com/SpectrumLabs_/status/1683627046084173827)（首次权益池发售权益池），还推出了Spectrum Network跨链可编程消息协议[白皮书v1.0](https://spectrum.fi/spectrum_wp_v1.pdf)！

YouTube：[发现Ergo第6部分：设置AMM机器人](https://www.youtube.com/watch?v=_f2OHEYcmU8)

Twitter Spaces：[F10提案权益池运营者（SPO）收入来源，以及Zengate、罗森跨链桥和 Spectrum](https://twitter.com/i/spaces/1nAKErYZyNXGL)

**SigmaFi**

SigmaFi团队专注于测试ERG/USD基于抵押品的清算机制并开发**代币化债券** 合约。此外，他们在自动清算合约方面取得了进展，并被[整合到了DefiLlama中](https://twitter.com/DefiLlama/status/1678546415788650498)。

**THz.FM**

[Thz.fm](https://thz.fm/)在单页应用程序设计和前端方面取得了显着进展，包括单页应用程序版本、API端点以及音频NFT的成功铸造。Alpha预览已经可用，艺术家数据看板（Dashboard）已全面运行。目标是**十月初推出** 。

**Analog Ergo**

Swap（交换）功能经过了全面测试，他们目前正在努力增强用户体验（UX）功能，同时计划进行演示以突出基本功能。

**Lithos**

Lithos的后台开发已经开始，计划在[Nexus](https://www.ibm.com/garage/method/practices/deliver/tool_nexus/)上发布，用作自定义交易构建器。

**Crux Finance**

Crux Finance是Ergo生态系统内的一个用于投资组合管理和图表的一站式平台，将提供先进的数据利用功能、跟踪仓位和交易、分析利润、亏损和链上活动，以及易于使用且全面的图表工具。在此[Twitter Space](https://twitter.com/i/spaces/1YpKkgZnYAYKj)中了解Crux Finance的功能、优势以及它如何帮助改善您的生态系统体验或聆听他们的[介绍Twitter Space](https://twitter.com/CruxFinance/status/1674498969978695689)。

**Auction House**

[Auction House](https://ergoauctions.org/)团队的新版本在用户个人资料中为方便挂牌带来了更好的选择模式——显示特质稀有度（Trait Rarity）。在艺术品页面中选择一个特质，即可查看具有该特质以及更多优化的所有艺术品。下一个版本将为定时拍卖带来一口价选项。第一批利润也已分配给所有$AHT持有者；如果你还没有这样做，请检查你的钱包！

**Machina Finance & Ergomatic**

Machina Finance工作仍在继续，合约说明书（Contract Specification）已完成。还宣布了 Ergomatic，这是一种适用于Ergo机器人的通用链下执行框架。这是MachinaFinance的核心部分。他们希望制定一个新的开源标准，扩展Ergo生态系统中所有项目的功能。

**Off-The-Grid**

[Off the Grid](https://github.com/Telefragged/off-the-grid/)是一款基于Ergo区块链构建的去中心化应用程序，用于实现自动网格交易委托单，同时允许用户保留对其资金的控制权。它建立在kushti描述的网格交易合约的基础上，并实现一个执行机器人/批处理程序，可以在无需用户交互的情况下自动进行委托单匹配。

**EXLE**

WEQNT权益池在肯尼亚卡库马[成立了](https://twitter.com/DenicioBernier/status/1677018825873842176)第一个稳定的小额信贷合作社。与EXLE一起——为无银行账户的人提供银行服务！

**Gluon W±**

Djed/AgeUSD/SigmaUSD具有最小和最大储备金率参数，这会导致其行为的不连续性和用户体验问题（例如，储备金币持有者在某些情况下无法出售其储备金币）。Gluon旨在消除所有这些不连续性。

![|553x313](file:///C:\Users\Sky\AppData\Local\Temp\ksohtml4176\wps5.jpg)

**Phoenix & Hodlcoin**

更新后的Holdcoin合约的两个前端正在开发中，并在测试网上运行。[phoenixfi.app](https://phoenixfi.app/)和 [app.hodlcoin.co.in](https://app.hodlcoin.co.in/)强调了前端用户界面（UI）之间的一些良性竞争。它们都与后端的同一个Bank（银库）盒子进行交互，所以无论您使用哪一个都取决于您！

**NFT和游戏**

**BlitzTCG**

BlitzTCG团队专注于为BlitzTCG网站开发市场页面，并为下一次游戏测试活动做好准备。 如果您想了解截至2023年7月的Blitz项目工作情况，您可以阅读[这篇非常冗长的项目更新](https://www.reddit.com/r/ergonauts/comments/14xeky4/blitz_tcg_development_and_project_update_9/)。

**Bitmask**

C8通过网络用户界面更新和Cardano Breeding Scrolls铸造准备工作保持了势头。

**Lilium**

以社区为中心的NFT销售平台[liliumergo.io](https://www.liliumergo.io/)在主网上线！

**Cyberverse**

备受喜爱的[Cyberverse](https://cybercitizens.io/)游戏再次公开，并进行了[大量更新](https://twitter.com/CyberVerse_io/status/1683954731549356034)。

**工具**

**预言机池v2**

本月的工作是针对投票场景进行的，并在私人预言机池中进行了测试。对测试网上的黄金ERG预言机池进行了更新，包括引导新的预言机池。经过几次Beta测试后，第一个[候选版本现已推出](https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.0-rc1)！

**FleetSDK**

[Fleet SDK v0.1.3已发布](https://twitter.com/NautilusWallet/status/1682502973115576321)！该版本带来了ErgoScript编译器和“模拟链”包，让您可以使用Jest和Vitest等主流测试框架在模拟区块链环境中测试您的Ergo合约。他们还完成了交换插件实现，达到了100%的测试覆盖率，并添加了Ergo树类模型和编译器。开发适用于Age USD插件、编译器包和U Explorer的REST API说明书的Fleet SDK。

**TabbyPOS**

[TabbyPOS](https://www.tabbylab.io/)已获得[IoTeX](https://ecosystem.iotex.io/)的认可，并已纳入其生态系统。此外，他们还获得了一些补助金以进一步发展和加强他们的能力。接下来，我们将在他们的每周更新中添加一个新任务 - 通过W3bStream平台与IoTeX对接。在[这里](https://tabbylab.medium.com/tabbypos-weekly-update-02-aug-2023-cde7a6420151)查看他们最新的开发者更新。

**ZenGate**

ZengateGlobal正在与生产商、买家和监管机构合作，融入斯里兰卡茶叶行业。看看这个[提案](https://cardano.ideascale.com/c/idea/102821)，让他们构建必要的治理工具集。他们还[引入](https://twitter.com/ZengateGlobal/status/1683529137200467968)了冬季协议（Winter Protocol），这是一种改变游戏规则的开源可追溯性协议，旨在彻底改变Cardano生态系统。

在Ergo端，数据库设计已基本完成，Mgpai正在为Palmyra com dex开发NFT/资产查看器

![|552x316](file:///C:\Users\Sky\AppData\Local\Temp\ksohtml4176\wps6.jpg)

**Satergo**

[Satergo](https://satergo.com/) 1.6.0已发布，整合了ErgoPay！最新更新还包括DeFi/dApp支持、Windows用户的无缝安装流程、带法币换算功能的CoinGecko价格源、改进的钱包性能、添加用于用户控制的VM参数、增强的屏幕阅读器支持、固定节点日志级别功能以及改进了用户可访问性和翻译。

**GuapSwap**

[GuapSwap](https://github.com/GuapSwap)正在完成版本2发布用的合约，并在链下库代码方面取得进展。他们已经完成了Spectrum服务合约，并正在为矿工制定新的代理合约。

**ErgoNames**

[ErgoNames](https://www.ergonames.io/)在其开发方面取得了长足的进步。他们已经实现了端到端测试，为子域创建了合约，且几乎完成了UI渲染。 此外，他们还解决并修补了与抢先交易（Front-running）相关的任何问题，确保安全。该团队正在积极研究子域支持并继续致力于合约工作。

**ErgCube**

Ergo社区收到了令人激动的消息，[Ergcube](https://ergcube.com/)推出了其代币数据看板（Token Dashboard），提供对关键代币信息的开放和免费访问，例如价格图表、交换（Swap）、情绪分析、NFT、Sigmafi债券和质押奖励。注册用户可以利用其他功能，包括中心化ATM、个人交换选项卡和实时分配统计数据。Ergcube具有用户友好的界面，可确保所有用户获得流畅、愉快的体验。随着团队继续增强Ergo之旅，请继续关注更多更新。社区对 Ergcube 共同塑造Ergo的未来表示感谢！

**Ergo Meta**

ergo-meta是代币、合约和dApp的Ergo链下注册表。在最新的更新中，实现了TokenEntry 说明书和模式验证。该团队还使用不同的技术堆栈进行了测试，Deno成为CI验证和静态API构建的首选。

**uExplorer**

Pragmaxim致力于为用户通过REST API与uExplorer交互创建一种流畅、高效的方式。 他们还修复了与信息组织和访问方式相关的问题，使平台更快、更用户友好，并正在努力完成uExplorer后端到[“Zio 2”（WIP）](https://discord.com/channels/668903786361651200/669989266478202917/1128679619504111666)的迁移。

**ergexplorer**

**ergexplorer** 再次不断努力，添加了地址簿、过滤程序、排序和视觉增强功能的更新。升级了服务器并致力于地址的抓取和索引。[在这里阅读他们的完整开发更新](https://medium.com/@ergexplorer/erg-explorer-development-update-bots-finance-fe3b84b962db)。

**sigma-rust**

Go语言的sigma-rust的包装器的初步构建正在进行中，有可能进行扩展以支持不同的用例。

**Ergo同步节点**

存储库已更新至版本5.012，并更新了完全索引节点的快照，允许用户在30分钟内实现完全同步的节点。

**Ergonnection（P2P节点通信库）**

[Ergonnection](https://github.com/Satergo/Ergonnection)是一个Java 17+库，用于与[Ergo](https://ergoplatform.com/)网络的节点进行通信。本月他们支持P2P节点通信库中的区块头对象。

**代币**

**hodlCOMET NFT**

Koutelier与Lyson合作推出了新的ERG NFT系列，名为hodlCOMET。此外，他们正在开发一个新的Spectrum主题来吸引一些用户。

**GreasyCEX**

GreasyCEX团队在最近的努力中展示了一系列的成就。 他们在GCX项目上取得了重大进展，重点是完成Greasy使命并完成Greasy白皮书。 此外，他们还准备了NFT收藏品的铸造，并准备在Spectrum上上线。

**结论**

Ergo生态系统在2023年7月取得了显着进展，尽管价格低，但再次在研磨方面进行创新。令人激动的发展，例如引入通过NIPoPoW来引导链，以及罗森跨链桥和Duckpools 等DeFi项目的重大进步，凸显了社区的奉献和创新。游戏和NFT目也显示出可观的增长。 这个充满活力且才华横溢的社区不断突破区块链技术的界限。下个月的这个时候， Duckpools和罗森跨链桥应该会上线，Hodlcoin重新启动，DexyGold上线测试网，以及潜在的Paideia MVP 等等！

原文链接：

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/1/16a9bc033d6684538236974614c5633f383ab8b2.png)
[ergoplatform.substack.com](https://ergoplatform.substack.com/p/ergo-monthly-wrap-up-july)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/5/5983c3b0d4da5bdee359adef8cbb894a4e06df67_2_690x345.jpeg)

### [Ergo Monthly Wrap Up: July](https://ergoplatform.substack.com/p/ergo-monthly-wrap-up-july)

Welcome to the monthly wrap-up for the Ergo ecosystem, where we bring you the latest developments and achievements from various projects within the community.

欢迎转发
