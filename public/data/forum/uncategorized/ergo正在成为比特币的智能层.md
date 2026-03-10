---
title: Ergo正在成为比特币的智能层
description: 'ErgoForum discussion: Ergo正在成为比特币的智能层'
tags:
- atomic-swaps
- box
- duckpools
- ergoforum
- ergohack
- ergoraffle
- ergoscript
- native-tokens
- rosen-bridge
- sigmanauts
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo/4800
created: '2024-06-16'
last_activity: '2024-06-16'
posts_count: 1
views: 182
likes: 2
glossary_hits:
- Atomic swaps
- Box
- Duckpools
- ERGOHACK
- ErgoRaffle
- ErgoScript
- Native tokens
- Rosen Bridge
- Sigmanauts
---

# Ergo正在成为比特币的智能层

> **Forum thread:** [https://ergoforum.org/t/ergo/4800](https://ergoforum.org/t/ergo/4800)
> **Category:** Uncategorized | **Created:** 2024-06-16 | **Posts:** 1 | **Views:** 182

**Related concepts:** Atomic swaps, Box, Duckpools, ERGOHACK, ErgoRaffle, ErgoScript, Native tokens, Rosen Bridge, Sigmanauts

---

### Post #1 — @ergonautgcn (2024-06-16)

作者：Ergo 平台

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/7/76db060e9aaf988257ecf7de570f14f9d64d4c1e_2_690x345.png)

image865×433 75.2 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/7/76db060e9aaf988257ecf7de570f14f9d64d4c1e.png "image")

自2019年Ergo网络启动以来，历届ErgoHack（Ergo黑客松）已成为Ergo社区年度重大活动。这些黑客松为社区开发者提供了集中精力开发特定项目的机会。虽然ErgoHack最初被认为是竞赛活动，但它们已演变为与经验丰富的导师合作的机会，并为开发构成Ergo生态系统核心基础设施的基本工具和去中心化应用程序 (dApp) 做出了重大贡献。

当前黑客松[ErgoHack VIII](https://ergohack.io/)的主题是**Ergo** **是比特币的智能层** ，将于5月25日至6月2日举行。目的是利用Ergo的独特功能（例如扩展UTXO模型和西格玛协议）来构建DeFi应用，从而帮助将 Ergo 定位为扩展比特币自身功能的一种举措。

参赛者（无论是单人还是最多六人的团队）都有机会展示他们的技能，与其他开发者合作，并为生态系统的发展做出贡献。活动包括在区块链、人工智能、金融和项目开发方面的行业专家的指导下规划、设计和研讨提案。

以下是各参赛者正在构建的一些关键项目。

**Lightning Swaps** **（闪电交换）（** **Analog Ergo** **）**

Atomic Swap Software 团队正在为比特币的闪电网络和Ergo之间的原子跨链交换进行概念证明（Proof-of-concept）集成。

他们的解决方案将使用闪电网络“Submarine Swaps（潜交换）”，它使用HTLC或哈希时间锁定合约来实现闪电网络BTC和主网BTC之间的交换。Atomic Swap Software 团队已经使用EC点时间锁定合约在Ergo上实现了类似的系统。他们的主要目标是修改Ergo合约以与闪电网络的哈希原像系统兼容。未来与PTLC（点时间锁定合约）兼容可允许更广泛地使用他们现有的闪电网络交换合约。此外，他们还计划实现Reverse Submarine Swaps（反向潜交换），以确保集成链双向流动性路径畅通。

该团队已经在Sepolia EVM测试网和测试网Ergo之间实现了单向交换，目前正在开发关键的安全功能，以备公开测试和主网发布。闪电链接将充当其市场网络的次要流动性路径。

**CrystalPool**

CrystalPool团队计划为自托管交易所提供概念证明，该交易所提供与传统中心化交易所类似的实时用户体验。他们的目标是开发一个用于交易的用户界面、一个委托单簿管理系统以及用于处理未提交交易链的核心功能。关键组件包括交易处理系统、用于多重签名的通信协议、集成钱包功能以及用于委托单创建和余额跟踪的用户界面。

CrystalPool使用时间有限的多重签名智能合约和无头钱包来促进Layer 1上的实时交易所交易。交易所通过要求用户和用户池的公钥签署操作来确保自我托管，用户在指定的时间限制后获得完全控制权。集成钱包提供实时余额更新和无缝交易处理。

该团队已经在 ErgoScript 中为 Black-Scholes 模型、定价看涨期权和双重资产交换实现了数学函数。即将执行的任务包括完善各个期权行使阶段、支持各种执行价和执行日以及进一步增强用户界面（UI）。

**Cup of Sugar**

Cup of Sugar寻求在现实世界环境中使用区块链，促进 LETS（本地交换交易系统）的创建。LETS是微观经济体，其中商品和服务可以交换为本地或当地货币。（该项目已经向社区成员的钱包空投了一些 $COS 代币。）

Cup of Sugar 提供农场新鲜且可追溯产品，以促进当地农业发展。然而，该项目打算走得更远，即为想要使用相同方法的微型杂货店和咖啡店提供蓝图。

**OptionPools** **(Duckpools)**

该计划旨在创建高流动性的期权市场，利用Ergo的独特功能和Rosen Bridge（罗森跨链桥）将该网络建立成加密货币期权交易中心。

OptionPools已将复杂的数学函数集成到 ErgoScript 中，以开发链上 Black-Scholes 期权定价模型。这包括对数、指数和平方根函数，以及累积分布函数（CDF）的粗略实现。该模型已通过定价和出售双资产期权池中的看涨期权在链上进行了测试。正在进行测试资产交换。

**Ephemeral Token Messaging** **（短暂代币消息传递）**

该项目旨在创建一个私人消息传递系统，该系统使用Ergo区块链和内存池传递消息，向Ergo 矿工支付支持费用。

alpha PoC（α版概念证明）旨在为所有操作系统提供安全的即时消息传递桌面应用程序。该应用程序从内存池读取消息以提高速度，并使用智能合约确保支付矿工的资产不会被篡改。此版本使用“creationHeight”参数来表示消息到期时间。链下机器人会销毁智能合约中的代币，并将ERG发送到 Sigmanauts Mining 奖金支付钱包。

如要使用该服务，用户需要输入地址并输入消息。提交后，后端会使用该消息创建一个 NFT，并将其与大约 0.01 ERG 一起发送到智能合约。creationHeight 参数设置用于确定消息到期时间。该应用程序监控智能合约的内存池，并在用户友好的对话窗口中显示来自 NFT 的消息。

这项服务优先考虑隐私，为公共账本上的加密消息传递奠定了基础。它为dApp提供了潜在的用例，例如促进交易、贷款和安全信息交换。

**Moria Finance**

Moria Finance 提供了一套用于管理资金的新工具，包括**已通过\*\*\*\*Rosen (rsBTC)** **桥接到** **Ergo** **的比特币。**

比特币本身的脚本功能有限，尽管有几个平台试图直接在比特币网络上实现智能合约，但这些平台因各种原因而备受争议，并且存在许多缺点。

Moria针对比特币的初始解决方案将包括时间锁定钱包，用于控制资金的发往钱包地址和发送时间；受第三方监督的可逆地址；以及使用多重签名地址简化对团体资金的处理。

**Reputation System** **（声誉系统）**

正在开发和测试两个基于比特币Runes协议的声誉系统实现。

第一个实现是简化版本，而第二个实现结合了Sigma Script以实现更大的多功能性。这个版本名为“Sigma Runes”，虽然基于Runes协议，但并未在每个细节上都遵循该协议，因为声誉证明在每种情况下都有不同的用途。

尚待完成的工作包括将比特币网络添加到Sigma Reputation Panel（西格玛声誉面板）界面，实现连接到比特币RPC的服务器（类似于原始 Runes 的“Ord”库），以及创建其他文档和视频。

**Mining BTC Swap** **（** **BTC** **挖矿交换）**

该项目旨在创建一个无需许可的链上系统，允许矿工配置池并将挖矿奖励交换成其他代币。

该服务使用智能合约来保存代币，当达到支付门槛时，这些代币将被发送到Ergo地址。NFT用于定义池参数，后端机器人负责执行维护。

**RNG** **（随机数生成器）**

随机数生成器在区块链中有许多应用，包括游戏、彩票和 NFT，但创建高水平的可靠随机性很困难。该项目拟解决Ergo上的这一差距，旨在确保强大的安全性和防篡改的提交-披露协议，以确保无法利用的公正结果。

**Sigma Wallet** **（** **Sigma** **钱包）**

该项目将创建一个新的React Native和Rust手机钱包。目的是提供一种不同类型的用户界面/用户体验，灵感来自Green Wallet、Kaspium和Mutiny等钱包。理想情况下，这将是一个对每个人都友好的钱包，但仍然保留了一些更复杂和小众的“密码朋克”功能，包括不可重复使用的地址，以提高隐私性。

**Space Wallet** **（** **Space** **钱包）**

Space Wallet的概念证明（PoC）将是一个跨平台（手机、桌面和理想的网络）钱包，它使用NiPoPoW（工作量证明之非交互式证明）与区块链同步并提供连接到 dApp 的基本功能。另一个目标是将多个操作链接在一起，而无需使用内存池支出等待下一个区块。使用的技术将是Flutter（用于用户界面）和Sigma-Rust（用于钱包功能）。

**Trustless Relays** **（无需信任中继器）**

该项目将实现无需信任的传输，促进RGB++等进步，并支持在Ergo上创建无需信任的比特币哈希率衍生品。

**Wallet Wonderland**

此处的计划是为热门钱包创建视觉指南和教程，提供可以持续维护的详细文档。

Ergo目前有多个钱包在使用，但一些主要钱包的开发已停止，或更新不频繁。很难知道哪种钱包，甚至哪种类型的钱包（手机、节点、浏览器插件等钱包）最适合不同的用户，包括新手、游戏、dApp用户、开发者等。

Wallet Wonderland旨在提供有关可用不同选项的全面信息，每个选项提供的内容以及用户需要了解的一些关键条款和问题。这些包括了解种子短语、冷钱包的创建和使用、钱包恢复、多重签名地址、UTXO 和合并、Ergo 的滞期费（即存储租赁费）等等。

除了收集现有文档外，Wallet Wonderland团队还将采访 25-30 名社区成员，了解他们对钱包使用的偏好和技巧，并咨询钱包开发者以获得进一步的见解。结果将是一套视觉指南和视频教程。

**Huangians**

这是康奈尔大学一组计算机科学专业学生的迟到作品。进一步的细节将在适当的时候确认。

**Rosen Port**

Rosen Port旨在以较低的费用促进跨链桥接，特别是使小基金受益。通过启用批量桥接，这种方法允许小资金持有者参与桥接过程并探索Ergo生态系统而无需支付高额费用。他们的目标是建立一个包容性的系统，让每个人都可以使用Rosen Bridge，无论他们持有多少代币，从而增加采用率。

**了解更多**

ErgoHack VIII 有望成为社区的一次宝贵活动——创建新软件，将Ergo的益处带给更广泛的受众——以及 Ergo 开发者。Ergo 基金会捐赠了18,000 美元的奖金。Rosen 团队还捐赠了100,000枚 RSN，价值约9,000美元，[社区又筹集](https://ergoraffle.com/raffle/show/91547b4f55a049553dc8629c246431dd904ed16565a1ed859b59f7cbe6e92514)了8,462枚ERG 来奖励参赛者。这意味着总奖池约为40,000美元！

您可以通过加入[Ergo Discord](https://discord.gg/EPCUjAV5)了解有关这些项目的更多信息！每个小组在ERGOHACK类别中都有自己的频道。

祝所有参赛者好运！

欢迎转发此文！

<https://ergoplatform.org/en/blog/ErgoHack-8-Ergo-As-A-Smart-Layer/>
