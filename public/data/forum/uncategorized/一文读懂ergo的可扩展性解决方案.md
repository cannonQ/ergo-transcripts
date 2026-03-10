---
title: 一文读懂Ergo的可扩展性解决方案
description: 'ErgoForum discussion: 一文读懂Ergo的可扩展性解决方案'
tags:
- box
- eip
- ergo-explorer
- ergoforum
- ergoscript
- eutxo
- full-node
- getblok-plasma
- layer-scaling
- mempool
- nipopow
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo/4419
created: '2023-07-31'
last_activity: '2023-07-31'
posts_count: 1
views: 266
likes: 3
glossary_hits:
- Box
- EIP
- Ergo Explorer
- ErgoScript
- Full node
- GetBlok Plasma
- Layer scaling
- Mempool
- NiPoPoW
- Transaction
- eUTXO
---

# 一文读懂Ergo的可扩展性解决方案

> **Forum thread:** [https://ergoforum.org/t/ergo/4419](https://ergoforum.org/t/ergo/4419)
> **Category:** Uncategorized | **Created:** 2023-07-31 | **Posts:** 1 | **Views:** 266

**Related concepts:** Box, EIP, Ergo Explorer, ErgoScript, Full node, GetBlok Plasma, Layer scaling, Mempool, NiPoPoW, Transaction, eUTXO

---

### Post #1 — @ergonautgcn (2023-07-31)

[![ergo scaling](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/f/f428fc29466458af35b21f3fb200cdb64517484c_2_690x345.jpeg)

ergo scaling1920×960 188 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/f/f428fc29466458af35b21f3fb200cdb64517484c.jpeg "ergo scaling")

**扩展Ergo区块链技术**

构建可扩展的区块链基础设施并非易事。Ergo凭借十年的研究、细致的测试和持续的开发，已经证明能够应对此难题。本文将带您了解Ergo先进的可扩展性功能。

区块链可扩展性不可或缺的三大因素：

**加密经济激励模型：** 该框架确保矿工因扩展区块链而产生的各种成本获得适当的奖励，其中可能包括状态相关成本的增加。

**共识模型：** 根据所选模型，某些可扩展性解决方案可能可行，也可能不可行。例如，权益证明（PoS）共识模型不支持工作量证明之非交互式证明（NiPoPoW）。

**记账模型（** **Accounting Model** **）** **：** 指在区块链内管理交易和操作的方式。比特币采用未花费交易输出（UTXO）模型，而以太坊则采用账户模型（Account Model）。

这些方面为Ergo的可扩展性创新方法奠定了基础，使其有别于其他区块链技术。与以太坊的账户模型在代码执行期间在链上处理存储更改和有效性检查不同，Ergo的[扩展UTXO](https://docs.ergoplatform.com/dev/protocol/eutxo/)（eUTXO）则采用不同的策略，即交易在链下创建，有效性检查在链上执行。

该系统最大限度地减少了网络中每个节点的运行需求，从而提高了整体效率。利用交易图的不可篡改性，我们可以进一步优化这一过程，以提高每秒处理的交易数量。此外，轻量验证节点（Light-verifying node）的纳入提升了Ergo网络的可扩展性和可访问性。

为了更深入地了解Ergo的可扩展性，请探索此过程中各层的作用：

[Layer 0](https://docs.ergoplatform.com/dev/protocol/scaling/layer0/)：网络层或P2P（点对点）层

[Layer 1](https://docs.ergoplatform.com/dev/protocol/scaling/layer1/)：核心区块链层

[Layer 2](https://docs.ergoplatform.com/dev/protocol/scaling/layer2/)：链下层

各层协同发挥作用以提升Ergo的可扩展性，使其成为开发者和用户等强大的通用选择。这种合作模式使Ergo能够提供稳健的可扩展解决方案，以满足全球扩张的需求。

**Layer 0（网络层）**

Layer 0被称为网络层或点对点（P2P）层，允许[节点](https://docs.ergoplatform.com/node/install/)以去中心化的方式相互通信。

P2P层旨在方便数据和信息在整个区块链网络上的传输，使节点能够共享和验证交易、区块和其他数据。该层是一个关键组件，因为它使网络参与者能够直接相互交互，而无需依赖中央机构或中介。

**客户** **端**

[轻客户端](https://docs.ergoplatform.com/dev/protocol/nipopow/nipopow_nodes/)：在Ergo中，您无需存储完整的UTXO集便可获得全节点保证，从而实现卓越的引导体验并缩短区块验证时间。

在开发中使用[NIPoPoW](https://docs.ergoplatform.com/dev/protocol/nipopows/)证明和UTXO集快照进行快速引导

[对数空间挖矿](https://docs.ergoplatform.com/dev/protocol/nipopow/logspace/)允许*轻矿工* *端（Light Miner）* 。与轻客户端类似，轻矿工端可以使用区块头进行引导，而无需下载整个区块链。通过丝绒分叉（软分叉）可以将对数空间挖矿整合到Ergo中；请观看雅典大学Dionysis Zindros的这段视频，了解[相关介绍和迄今为止的进展](https://www.youtube.com/watch?v=s05ypkSC7gk)。

**膨胀**

**状态膨胀** ：Ergo在扩展时的主要优势之一是在不影响功能的情况下避免膨胀。

持久可更新存储是可行的，更新由区块链合约检查。然而，无论数据集大小如何，只有经过身份验证的数据结构的摘要（以及一些附加字节，小于40）存储在UTXO 集中。

Ergo利用[存储租赁费](https://docs.ergoplatform.com/mining/rent/)来防止垃圾信息并重新循环未使用的数据字节（称为“灰尘”）。 存储租赁费有助于净化网络污染，鼓励用户更加活跃。

**矿工** **可** **调整参数**

**区块大小：** 区块大小等参数并不是一成不变的，矿工可以对其进行调整。因此，经历过完整区块验证时间较短的矿工（因为硬件会随着时间和软件改进而改进），他们可能会提议或投票增加区块大小。当前设置为8MB。

**交易大小：** 从节点4.0.23开始，内存池（Mempool）的交易大小限值为96kb。较大的交易只能由矿工人工纳入。

有关更多信息，请参阅[治理](https://docs.ergoplatform.com/mining/governance/)部分。

**Layer 1（链上）**

Layer 1指区块链系统的基础协议层。该基础层处理基本功能，包括交易处理、共识机制和安全协议的实现。

**主网5.0激活** ：节点V5 中引入的“[*即时成本* *核算*](https://docs.ergoplatform.com/eips/JITC/)”更新将区块容量增大了约5-10倍。提高了网络的交易处理能力和整体吞吐量。

**未来研究**

**分片**

Ergo的Layer 1为通过分片（Sharding）等技术提升可扩展性铺平了道路。

**分片** 将区块链数据库分成更小的分区，称为“分片”。每个分片都配备了独立处理交易和智能合约的功能。通过促进多笔交易的并行处理，该技术大大提升了区块链的可扩展性。虽然目前尚未整合到Ergo中，但分片代表了未来发展的一个有希望的方向。

有关分片的更详细研究，请考虑论文“[区块链分片的安全性和性能](https://eprint.iacr.org/2021/1276)”。您还可以浏览[关于Ergo上分片和原子可组合性](#sharding-and-atomic-composability)的页面以获取更多背景信息。

**子** **区块** **确认协议和微** **区块**

Ergo可扩展性的另一个关键方面来自在各区块内的*扩展部分* ，它们可以容纳**强制和任意的键值数据** 。这些部分中嵌入的特定锚点可以创建让人想起Bitcoin-NG模型的微区块。 此外，通过丝绒分叉（Velvet fork）或软分叉生成Aspen式的服务链或通用侧链成为可能。

[Bitcoin-NG](https://www.usenix.org/system/files/conference/nsdi16/nsdi16-paper-eyal.pdf)和[Flux](https://www.usenix.org/system/files/atc20-li-chenxing.pdf)等平台展示了微区块和子区块确认协议。通过利用Ergo的*扩展部分* ，这些策略可以显着提高区块链的吞吐量。微区块允许更短的区块生成时间，从而提高交易吞吐量。

截至2023年，这些主题将继续激发深入的研究。如需更深入的了解，请考虑论文[Flux：重新访问工作量证明区块链的邻近区块](https://eprint.iacr.org/2018/415.pdf)。

**解读Layer 2解决方案（链下）**

Layer 2指在[Layer 1](https://docs.ergoplatform.com/dev/protocol/scaling/layer1/)区块链协议上构建的补充协议或框架。Layer 2解决方案的主要目标是通过启用*链下* 交易或计算来提升底层区块链的效率、可扩展性和功能。

Ergo跟比特币闪电网络等其他UTXO区块链的各种Layer 2解决方案广泛兼容。此外，Ergo还可以采用多种链下解决方案，例如[Hydra](https://iohk.io/en/research/library/papers/hydrafast-isomorphic-state-channels/)和侧链。这些工具有助于减少区块链拥堵，同时提供与ZK-rollup类似的好处。

将特定Layer 2解决方案纳入Ergo是由正在构建的应用程序的需求驱动的。

加入关于Layer 2的[Telegram](https://t.me/ErgoLayer2)或[Discord](https://docs.ergoplatform.com/dev/protocol/scaling/layer2/)参与讨论。

**ErgoScript的力量**

ErgoScript的灵活设计使大部分交易能够在Layer 2上执行，然后通过单笔交易在Ergo区块链上进行结算。例如，开发者有效地利用扩展UTXO模型将原生代币[同时空投到 10,000个地址](https://explorer.ergoplatform.com/en/transactions/e2c4954665ccf87791f42983ae4f7031205c2e719709907cbf2ff09e5489d4b8)。

ErgoScript拥有多项增强功能，例如时间加权数据、图灵完备性、只读数据输入、多阶段合约、西格玛协议、NIPoPoW等。这些增强功能为Layer 2上的无数协议铺平了道路，每个协议都以自己独特的方式解决可扩展性问题。

**因此，** **Ergo** **可以被视为多个** **Layer 2** **协议和应用程序的** **公共** **结算层。**

**拥抱Plasma**

Ergo本质上支持[AVL树](https://docs.ergoplatform.com/dev/protocol/avl/)，这是一种有效的经过身份验证的数据结构，允许在不访问整个数据集的情况下证明数据的不同属性。

使用[**Plasma**](https://docs.ergoplatform.com/dev/lib/plasma/)将账本作为AVL树进行维护。用户借助银库（Bank）进行链下交易，致使账本发生变化。银库定期在区块链上发布账本的紧凑快照。

[Plasma代码库](https://docs.ergoplatform.com/dev/lib/plasma/)可用于构建*Plasma链* ，从而形成全面的L2解决方案。目前，它主要用于数据压缩和简化合约，尽管Plasma链的发展前景广阔。

**利用NIPoPoW**

[工作量证明之非交互式证明（NiPoPoW）](https://docs.ergoplatform.com/dev/protocol/nipopows/)通过促进不同区块链网络的互操作性而具有可扩展性的潜力。此功能可以通过将负载分配到多个网络来减轻单个链的负载。

一种实际应用可能涉及较小、安全性较低的区块链利用较大、较成熟的区块链的安全性。 例如，较小的区块链可以定期向较大的链提交工作量证明，将其区块链锚定到较大的网络。这种方法不仅可以提高较小区块链的安全性，而且可以在没有中心化中介的情况下实现链间资产转移。

NiPoPoW可以进一步提高Layer 2解决方案（例如，侧链或状态通道）的可扩展性。通过使这些解决方案能够更安全、更高效地进行通信，NiPoPoW可以减少主区块链网络上的负载并提高交易吞吐量。

**探索其他可能性**

一些有前途的Layer 2解决方案即将出现：

**闪电网络**

闪电网络（Lightning Network）通过一个系统运行，两个参与者将资金汇聚到特定类型的联合多重签名钱包中。该钱包使他们能够创建和执行链下协议。网络本身由这些互连的渠道组成，允许跨多个渠道构建链下支付，类似于算盘。

**彩虹网络**

彩虹网络（Rainbow Network）是一个链下非托管交易和支付网络，支持双方可以就价格预言机达成一致的任何资产。彩虹网络使用户能够完全在链下交易、借贷和支付合成资产，尽管只有一个由单一资产抵押的链上支付渠道。更多详细信息可以在[此论文](http://research.paradigm.xyz/RainbowNetwork.pdf)中找到。

**Rollup**

Rollup（上卷）通过AVL树实现是可行的。Rollup涉及捆绑交易组，主要关注的是链上数据发布，而非验证。

扩展采用的*Rollup* 主要有两种类型。

**Optimistic Rollup** **（** **乐观上卷** **）** 处理与主链兼容的平行链上的交易。这个模型是乐观的，因为它依赖于防欺诈原则，聚合商不会主动验证Layer 2，而是在出现欺诈纠纷时进行干预。更多信息可以在[这篇Ergo论坛帖子](https://www.ergoforum.org/t/optimistic-rollups-and-fraud-proofs-in-ergo/3819)中找到。

**ZK-Rollup** **（** **零知识上卷** **）** 利用[zkSNARK](https://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell/)（简洁非交互式零知识证明）通过将数百个链下转账捆绑到单笔交易中来减少网络负载。尽管它们的实现比混合方法更具挑战性，但许多项目正在朝这个方向进行尝试。

**Hydra** **（** **九头蛇** **）**

**状态通道（Hydra）** 是一种*点对点* 签名*模型* ，非常适合简单应用程序的支付通道。然而，一个潜在的限制是，状态通道在启动时预先定义了参与者，这使得每次新参与者希望使用该通道时都需要部署新的合约。尽管提供了很高的隐私性和安全性，但它对于开放系统来说灵活性有限。IOHK推出了[Hydra：同构状态通道](https://iohk.io/en/research/library/papers/hydrafast-isomorphic-state-channels/)，它使用链上和链下计算，由扩展UTXO设计提供支持，以促进多方状态通道。其他新颖的状态通道结构也是可能的，且可以在ErgoMixer等工具中找到应用。

**零知识或有付款**

付款可以设计成只有当收款人以去信任的方式披露一些知识时才会释放，这样付款人和收款人都不能耍赖。这是通过结合Hash-locked transaction（哈希锁定交易）和外部协议来实现的，以确保在哈希锁定释放中揭示正确的数据。

**FairSwap（公平交换）/FastSwap（快速交换）协议**

这些协议详见[此论文](https://eprint.iacr.org/2019/1296)。

**币池（Coinpool）**

[此论文](https://discrete-blog.github.io/coinpool/)阐述了UTXO模型的另一种可能的Layer 2解决方案。

**评估交易速度**

交易速度，通常称为TPS（每秒交易数），是区块链的关键性能指标。该指标量化了区块链处理交易的速率，以每个区块每秒的交易量来衡量。

以下是一些知名区块链的TPS估计值：

比特币（BTC）- 约 7 TPS（Gobbel，2017）。

以太坊（ETH） - 约 15 TPS（Clincy等人，2019）

瑞波（XRP）- 约 1500 TPS（Clincy等人，2019）

卡尔达诺（ADA） - 约 7 TPS（受控测试中约为250）（Stamoulis，2021）。

波卡（DOT）- 约1500 TPS（Hiemstra等人，2021）

然而，标准TPS指标仅展示了Ergo的部分功能。重要的不仅仅是交易数量；每个区块的交易权重和计算成本限制也发挥着关键作用。这些因素受到各种动态因素的影响，包括网络规模和矿工的硬件资源。

[节点v5](https://docs.ergoplatform.com/node/jitc/)已上线，Ergo的原始TPS约为**47.5笔交易/秒** ，且有可能进一步优化。要全面了解该数字的计算方式，请参阅[此报告](https://github.com/ergoplatform/ergo/blob/d3d95e19b37c83b98de13bdf71d6d62b398e8f0d/metrics/Report.ipynb)。

Ergo的交易管理系统采用了扩展未花费交易输出（eUTXO）模型，在效率和通用性方面超越了传统的UTXO模型。该模型支持一笔交易中有多个输出，每个输出可能携带不同的代币（译注：UTXO模型一笔交易可包含多个输出，例如Ergo上一笔交易包含10000个输出，相当于以太坊等账户模型上10000笔交易）。 此外，Ergo可以容纳复杂的DeFi交易，在网络内培育广泛的DeFi应用。通过处理每个交易输出的多种代币类型并允许在一个区块内并发执行复杂交易，Ergo有效地提升了其区块链的性能和可扩展性。

在扩展Ergo时，目标必须是提高TPS，同时保持通常与区块链技术相关的核心假设和保证。

**原子可组合性**

**原子可组合性的重要性**

DeFi由于其开源性质而拥有强大的力量，允许去中心化应用程序（dApp）重用、修改并整合到现有应用程序中。这种可组合性为整个生态系统增加了价值。然而，实现原子可组合性对于某些涉及闪贷（Flash loan）和即时套利的DeFi应用至关重要。**原子可组合性指所有相关** **交易** **要么成功执行，要么根本不执行的属性。** 一些扩展解决方案，例如分片和Layer 2平台，可能会引入复杂性并阻碍可靠的原子可组合性。

**原子可组合性** **带来的** **扩展挑战**

区块链技术面临的挑战不仅是可扩展性，还在于维持大规模的原子可组合性。Ergo的目标不是实现未经考验的技术，而是通过更智能地利用资源来利用传统区块链平台中的可用“空间”。

**扩展解决方案和原子可组合性**

扩展解决方案通常涉及将平台划分为多个子部分，例如分片或在基础层之上引入新层。 然而，这些解决方案的不当实现可能会阻碍平台不同部分的资产和应用程序之间的无缝交互。

**在Ergo中实现原子可组合性**

在Ergo中，原子可组合性是通过扩展UTXO 模型、ErgoScript、Layer 2解决方案和其他提议技术的组合来实现的。

**扩展** **UTXO模型和ErgoScript**

[扩展UTXO](https://ergoplatform.org/docs/utxo/)模型与ErgoScript智能合约语言一起，可以在单个交易中以原子方式执行复杂的多阶段交易。多阶段协议确保交易的所有部分都被执行或不被执行，这是原子可组合性的基础。ErgoScript有助于创建和执行复杂的智能合约，对其结果充满信心，同时利用UTXO模型的优势，例如无状态、更好的并行性和更可靠的数据处理。

**Layer 2** **解决方案** **——** **Hydra状态通道#**

[Hydra状态通道](https://ergoplatform.org/docs/hydra/)等Layer 2解决方案也支持原子可组合性。Hydra支持跨头通信（Cross-head Communication），允许跨不同的头以原子方式执行复杂的操作，即使涉及多个状态通道参与者也是如此。

**ACE（复杂智能合约的异步并发执行）**

通过实现[异步并发执行（ACE）](https://eprint.iacr.org/2019/835.pdf)等想法，Ergo可以进一步提升其执行复杂且可组合的智能合约的能力。ACE建议将智能合约分解为更小的并发任务，这些任务可以独立执行，从而提高整体性能和吞吐量。它使一个合约能够安全地调用由一组不同服务提供商执行的另一个合约，从而通过灵活的信任假设促进交互式智能合约的链下执行，并增强原子可组合性。

**分片和原子可组合性**

**分片** **释义**

分片（Sharding）是一种将区块链网络划分为称为分片（Shard）的较小部分的技术，以提高可扩展性。每个分片独立处理交易的子集。然而，在分片环境中，确保原子可组合性（即多步骤交易的所有部分都执行或不执行）可能具有挑战性。

**在分片中保持原子可组合性的策略**

以下是分片时保持原子可组合性的潜在策略：

**跨分片交易**

实现分片之间安全高效通信的机制，赋能跨分片交易。此机制确保多步骤交易的所有部分都被提交或回滚，即使跨越多个分片也是如此。

**锁定机制**

引入锁定机制，防止跨分片交易期间双花和欺诈。暂时锁定相关资产直到交易完成有助于保持原子可组合性。

**两阶段提交协议**

利用[两阶段提交协议](https://docs.ergoplatform.com/dev/protocol/scaling/layer2/)来协调跨分片交易。第一阶段，分片试探性地执行交易并锁定相关资产。第二阶段，当所有分片确认交易后，交易被提交，锁定资产被释放。如果任何分片未能确认，交易将被回滚，锁定的资产将被释放。

**乐观执行**

假设分片之间的依赖关系已解决，则允许分片乐观地执行交易。如果稍后出现冲突，则可以回滚交易，且网络可以从冲突中吸取经验教训以防止类似问题发生。

**状态通道或侧链**

使用状态通道或侧链在链下处理交易，将最终状态送回主链完成结算。这些链下解决方案可以支持复杂的多步骤交易，而无需直接涉及多个分片，从而保持原子可组合性。

这些策略提供了在分片区块链环境中维护原子可组合性的通用框架。具体实现细节将取决于尚未出现的dApp的要求和设计。

**扩展路线图**

有关扩展的讨论，请加入讨论Layer 2的Telegram或Discord。

**时间线**

目前，我们的重点是整合UTXO集快照和工作量证明之非交互式证明（NiPoPoW）以实现超快速引导。这种方法将提供具有相同安全级别的快速同步，就好像他们处理的是自创世以来的每个区块一样。在将此实现成功稳定后，我们建议矿工考虑再次加大区块限值。

（待定）Node V6规划和可扩展性改进

（WIP） SPV客户端

（WIP）使用UTXO集进行引导

[节点V5](https://docs.ergoplatform.com/node/jitc/)已发布。

GetBlok发布[Plasma代码库](https://docs.ergoplatform.com/dev/lib/plasma/)

Plasma教程已发布。

原文链接：[Scaling - ErgoDocs](https://docs.ergoplatform.com/dev/protocol/scaling/)
