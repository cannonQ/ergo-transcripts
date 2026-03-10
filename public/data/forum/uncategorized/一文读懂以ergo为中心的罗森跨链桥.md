---
title: 一文读懂以Ergo为中心的罗森跨链桥
description: 'ErgoForum discussion: 一文读懂以Ergo为中心的罗森跨链桥'
tags:
- ergo-foundation
- ergo-graphql
- ergoforum
- ergoraffle
- ergoscript
- ergoscript-context
- full-node
- minotaur-wallet
- native-tokens
- rosen-bridge
- scorex
- spectrum
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo/4607
created: '2023-12-24'
last_activity: '2023-12-24'
posts_count: 1
views: 307
likes: 1
glossary_hits:
- Ergo Foundation
- Ergo GraphQL
- ErgoRaffle
- ErgoScript
- ErgoScript context
- Full node
- Minotaur Wallet
- Native tokens
- Rosen Bridge
- Scorex
- Spectrum
---

# 一文读懂以Ergo为中心的罗森跨链桥

> **Forum thread:** [https://ergoforum.org/t/ergo/4607](https://ergoforum.org/t/ergo/4607)
> **Category:** Uncategorized | **Created:** 2023-12-24 | **Posts:** 1 | **Views:** 307

**Related concepts:** Ergo Foundation, Ergo GraphQL, ErgoRaffle, ErgoScript, ErgoScript context, Full node, Minotaur Wallet, Native tokens, Rosen Bridge, Scorex, Spectrum

---

### Post #1 — @ergonautgcn (2023-12-24)

[罗森跨链桥（Rosen Bridge）](https://rosen.tech/)是一个开源协议，正在开创跨链资产转账的未来。它目前处于Beta测试阶段，正在测试通往Cardano的第一座跨链桥。罗森跨链桥利Ergo的功能来促进 Ergo和其他区块链之间安全高效的原生币（Coin）和代币（Token）转账。

**最新动态**

罗森跨链桥预计即将推出，请加入[Rosen Telegram chat](https://t.me/rosenbridge_erg)以了解最新动态。

**主要特征**

罗森跨链桥是一个开源协议，主要专注于 Ergo，允许用户在Ergo和任何其他兼容区块链之间无缝转账原生币和代币。 另一条区块链（称为X链（chainX））的兼容性取决于其对多重签名交易或阈值签名的支持（译注：罗森跨链桥的设计也支持在除Ergo之外的其他两条链之间的跨链互操作，例如Cardano跟Bitcoin，因此，罗森跨链桥也是其他需要跨链解决方案的区块链的可选方案，特别是那些亟需安全跨链解决方案的公链所需要的，例如Cardano。换言之，罗森跨链桥以Ergo为中心，将来有可能将支持多重签名交易或阈值签名的任何其他区块链桥接起来，让上了这座桥的所有区块链之间实现互通有无，实现跨链资产转账等）。

该跨链桥的一个独特之处是它消除了在其他链上部署和使用智能合约的需要。这是因为任何行动的共识都是由一组称为[Guard](https://docs.ergoplatform.com/eco/rosen/rosen-guard/)的实体在Ergo平台上达成的。这些Guard生成签名交易（无论是针对Ergo还是X链），然后任何一方（包括Guard本身）都可以将该交易广播到其他链。

**结构** **：** 该跨链桥的结构由Watcher（观察者）和Guard（守卫）组成。[Watcher](https://docs.ergoplatform.com/eco/rosen/rosen-watcher/)负责监控区块链活动并向Guard报告。Guard处理这些事件并执行操作，从而确保高水平的安全性和功能性。

**减少智能合约：** 罗森跨链桥以Ergo为中心的逻辑显着减少了其桥接的各链上对智能合约的需求。

**RSN代币：** 罗森代币（RSN）在该跨链桥的运作中发挥着至关重要的作用。它充当女巫攻击抵抗机制、费用分配系统以及访问该跨链桥服务的手段。 （参见[代币经济学](https://docs.ergoplatform.com/eco/rosen/rosen-tokenomics/)部分）

**可扩展性和用户安全：** 罗森跨链桥的设计允许通过独立模块添加新链。它还通过等待足够数量的确认来优先考虑用户交易成功。

**罗森跨链桥** **的运作** **和特点**

**过桥费用** **结构是怎样的？**

最初，它是10 美元或交易价值的0.5%，二者中取较高者，加上网络费用，可由Guard Set（守卫组）调整。过桥费用（Bridge Fee）以Ergo上被转移的代币的形式收取。网络费用则各不相同：Ergo 和 Cardano 为静态费用，基于以太坊虚拟机（EVM）的网络则为动态费用。

**罗森跨链桥** **上的单笔交易有最高金额吗？**

没有固定的上限，但由于从冷钱包到热钱包的资金转账需要Guard人工干预，大额转账可能需要更长时间，从几小时到 1-2 天不等。

**系统内如何管理ADA来进行** **去** **Cardano** **的** **交易？**

以Ergo上交易代币支付的网络费用被发送到专用地址，用于覆盖不同链上的网络费用。 目前，罗森团队手动管理此操作，并计划未来实现自动化。

**各** **项目如何向** **该跨链桥** **添加新的代币选项？**

各项目向罗森基金支付上桥费，开源项目可能会享受折扣。这涉及铸造包装代币和更新代币映射。费用分配给Watcher和Guard。

**继ADA之后，下一个要添加的链是什么？**

中期路线图包括 BTC、BSC（EVM链）和狗狗币。代码重构的目的是促进添加新链，其中初始链是最具挑战性的。

**团队的规模和组成是怎样的？**

该团队包括8名开发者，部分前端和UI任务外包。此外，过去一年有2-3名开发者在几位顾问的支持下兼职工作。

欲了解更多信息，请参阅[团队](https://docs.ergoplatform.com/eco/rosen/rosen-team/)部分。

**罗森** **Watcher** **设置**

Watcher是罗森跨链桥不可或缺的一部分，充当跨链预言机。他们观察并向Ergo 报告网络上的存款事件，从而为该网络的安全和扩展做出贡献。

**Watcher** **设置指南**

**教程**

**先决条件**

有关设置本地节点以及最低硬件和软件要求的信息，请参阅[先决条件](https://docs.ergoplatform.com/eco/rosen/rosen-preq/)页面。 （泊坞窗(Docker)）

有一个General Watchers[（普通Watcher）应用教程播放列表](https://youtube.com/playlist?list=PLyQeADPK2PWgztdc9lCvAyqjknPaN9woQ&si=SNYxoZMv2iID610o)，以及针对每个可用平台的更多定制指南：

**Windows**

在QX的指导下完成 [Windows Watcher 安装](https://www.youtube.com/watch?time_continue=2&v=bQ2sviHtOQA&embeds_referring_euri=https%3A%2F%2Fwww.therefour.org%2F&embeds_referring_origin=https%3A%2F%2Fwww.therefour.org&source_ve_path=Mjg2NjY&feature=emb_logo)

[罗森跨链桥Watcher— Windows 设置指南](https://medium.com/@goatspark/rosen-bridge-watcher-windows-setup-guide-4040815e0a74)

**Mac**

[使用Mac的Rosen Watcher（Ergo教程）](https://ergotutorials.com/video/rosen-bridge)

**Linux**

mgpai 遍历 [Linux 和云中](https://www.youtube.com/watch?time_continue=1&v=1dpfLWdWMLs&embeds_referring_euri=https%3A%2F%2Fwww.therefour.org%2F&embeds_referring_origin=https%3A%2F%2Fwww.therefour.org&source_ve_path=MjM4NTE&feature=emb_title)的Watcher实例

下面您将找到一些常见问题以及常见问题和故障排除提示。

**Watcher** **常见问答**

**操作**

**角色和奖励**

Watcher对于准确报告至关重要，并获得70%的交易费用作为成功和准确报告的奖励。 （而剩下的30% 则分配给Guard Set）。 释放量的25% 还保留用于“基于事件的释放（奖励）”

**谁可以成为** **Watcher** **？**

任何人都可以。您可以通过成为Watcher来积极为罗森跨链桥的扩展和安全审计做出贡献。 Watcher因准确报告而获得奖励。

为您所需的网络配置并运行Watcher 应用程序（正在进行中，敬请期待！）。

最后添加足够的RSN和ERG。

放入抵押品并获得报告许可证。

尽情报告并获得奖励。

**Watcher数量** **有限制吗？**

实际上，有限制。最少需要Watcher总数的 70%+1才能触发事件，最多20个提交，可由Guard Set调整。

**我可以运行多个** **Watcher** **吗？**

可以，但它需要考虑财务因素以防止滥用。 每个实例都需要一个唯一的文件夹和 WATCHER\_PORT。

**抵押品、** **许可证** **和报告**

**抵押品要求**

每个实例需要800 枚ERG和30,000枚RSN作为抵押品。该抵押品可完全赎回，且金额可调。

**我** **该** **如何赎回我的抵押品？**

您可以在赎回最后一个许可证代币后赎回抵押品，但如果您有未解决的报告，则须等到这些许可证归还才行。

**取得** **许可证**

如要报告，Watcher须获得许可证，这需要额外花费3,000 枚RSN。报告并发事件需要多个许可证，如果发现报告欺诈，可能会扣押许可证。

**报告流程**

Watcher将存款事件报告为集体努力的一部分。

Watcher对事件达成共识会触发最终报告和Guard干预。

Guard根据这些报告采取必要的行动。

参与成功跨链结算的Watcher将获得奖励。

**如果我的报告成功** **了会怎样** **？**

您将获得奖励，且您的质押金额将被退还。

**如果我的报告不正确且未经证实怎么办？**

您将获得质押金退款，且不会受到任何额外处罚。

**报告中** **存在** **串通和欺诈** **会有什么** **后果？**

参与串通的Watcher将损失他们的质押金。

**是否已花费或抵押** **许可证** **用于报告？**

许可证是质押的，而不是花费的，且可以通过您的数据看板（Dashboard）进行管理。

**我可以调整我的** **许可证** **吗？**

可以，您可以随时增加或减少您的许可证，并在离开时兑换它们。

**并发报告需要多少** **许可证** **？**

该数量取决于跨链桥活跃度，每分钟报告一笔交易大约需要160个许可证。

**我还需要Ergo上的 RSN 才能成为另一条链上的** **Watcher** **吗？**

需要，所有的许可证操作都是在Ergo平台上进行的，罗森的逻辑也是基于Ergo的。

**操作**

**设置后我需要执行任何操作吗？**

您不需要手动观察和批准交易，软件会自动处理一切，您只需要确保Watcher保持运行即可。

1. 观察一个事件并稍等一下。
2. 使用报告许可证创建提交\*\*（\*\* **Commitment** **）** 。
3. 聚合所有参与Watcher的提交\*\*（\*\* **Commitment** **）** 到一个被称为事件触发器的东西中。
4. 等待Guard的东西，特别是目标链交易和奖励交易提交。
5. 获得奖励。

**与无头服务器交互**

如要与无头服务器交互，可以使用SSH（安全外壳）建立安全连接。您还可以转发端口以访问服务器上的特定服务。在下面的示例中，我们使用SSH将本地端口 3030 转发到服务器上的端口3030。这允许我们访问在服务器的3030 端口上运行的服务，就像它在我们的本地计算机上运行一样。

ssh -L 3030:127.0.0.1:3030 user@watcher-server

在此命令中：

ssh是启动SSH客户端程序的命令。

-L 3030:127.0.0.1:3030 指定本地端口 3030 应转发到服务器上的端口3030。 127.0.0.1 是回送IP地址，在此上下文中指的是服务器本身。

user@watcher-server 指定用户名和要连接的服务器。 将 user 替换为您的实际用户名，将 watcher-server 替换为您服务器的实际主机名或 IP 地址。

**故障排除**

**用户界面错误**

**扫描仪不同步**

您的扫描仪不同步。 您需要等到它扫描所有区块为止。 该服务每3分钟左右运行一次。根据它调用和生成区块的时间，它可能会在这里或那里丢弃区块同步，但在大多数情况下会赶上。

或者，您可以删除泊坞窗卷（Docker Volume）并使用更新的初始高度重新启动Watcher

那么它就不需要扫描那么多的区块来同步

docker compose down --volumes

然后更新local.yaml初始高度

然后重新运行Watcher

**许可证** **健康受损**

默认情况下，许可证健康警告参数设置为100。可以通过将以下内容添加到 local.yaml 并根据需要进行调整来在本地进行调整

healthCheck:

permit:

warnCommitmentCount: 1 # amount of permits left before giving a warning

criticalCommitmentCount: 0 # amount of permits left it is critical

根据需要调整数量。

当可用许可证（Permit）减少到指定数量时，warnCommitmentCount 会将警告更改为黄色。

当可用许可证减少到此数量时，criticalCommitmentCount将变为红色。

**watcher-db-1 不健康**

依赖项启动失败：容器watcher-db-1 不健康

您的 .env 文件可能丢失了？ 像视频中一样打开查看文件扩展名，您确定它是 .env 而不是 .env.txt？

使用当前的区块高度更新 local.yaml

作为最后的手段，一些 ssers 报告可以通过修剪现有镜像并重建来解决此问题

docker system prune -a

**只要您没有其他 docker 镜像需要担心。**

**锁定、解锁 500 错误**

如果您在尝试锁定或解锁 ERG 和/或 RSN 时收到 500 错误，则可能是由于链上的盒值不足。**该问题已在最新版本中修复，如果您尚未更新，请更新。**

更新为：

docker-compose pull

docker-compose down

docker-compose up -d

请先检查您的服务日志。 如果您看到一条警告，指示“盒值 BoxValue(1100000) 太低，盒子大小的最小值为…”

如要纠正这一问题，请将以下内容添加到 local.yaml 的“ergo:”部分，并缩进一个制表符。 （应与初始高度相同的缩进）。

minBoxValue: ‘2000000’

**UnhandeledPromiseRejection**

UnhandeledPromiseRejection，promise 被拒绝，原因是 Object…LifeCycle 脚本启动失败

ogmios 在分叉后向后滚动存在问题。修复工作正在进行中。

**请求** **镜像** **的平台 (linux/amd64) 与检测到的主机平台不匹配**

与Rasberry Pi 和中的某些 ARM 芯片不兼容（ARM mac mini m1 Asahi linux：请参阅[此拉取请求](https://github.com/rosen-bridge/operation/issues/6)（PR））

**配合使用 docker**

**检查日志**

{类型：信息，开放：假}

docker compose logs

///

/// details | Updating your watcher

{type: info, open: false}

```ergoscript
docker-compose pull

docker-compose down

docker-compose up -d

**重启你的Watcher**

您只需在存储docker-compose.yaml的同一文件夹中运行以下命令即可重启Watcher实例。

docker compose up -d

**未提供配置文件：未找到**

检查您是否位于正确的目录中。您应该从operation/watcher文件夹中执行 docker compose 命令

**转储数据库**

docker compose down

docker volume remove watcher_postgres-data

#---edit block height in YAML after this step

docker compose up -d

**清理卷**

您可能出于多种原因希望清除泊坞窗卷（Docker Volume），例如，更改 Initial_Height 以同步。 为此，请从 Watcher 目录运行以下 Docker 命令

docker compose down --volumes

如下重新启动Watcher

docker compose up -d

**干净的Slate**

如果您想删除所有内容并从头开始

docker ps -a

docker compose down

docker rm CONTAINERID1 CONTAINERID2 CONTAINERID3

然后删除该文件夹并重新开始

**罗森Watcher先决条件**

**推荐硬件要求**

**CPU：** 2核

**RAM：** 2 GB

**存储空间：** 20 GB

**Ergo节点**

如果您没有运行浏览器，则需要运行启用了 ExtraIndex 的节点。 如果此设置设置为真（True），则允许节点将所有交易、盒子和地址存储在索引中。 extraCacheSize 设置内存中保存的最近使用的额外索引的数量。

extraIndex = false

extraCacheSize = 500

你的完整配置看起来像这样:

ergo {

node {

mining = false

extraIndex = true

extraCacheSize = 500

}

}

scorex {

restApi {

# Note: you must set a unique password for your API!

apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"

}

}

**Docker Compose**

Docker Compose 是一个用于定义和运行多容器 Docker 应用程序的工具。 它使用 YAML 文件来配置应用程序的服务，并使用单个命令执行所有容器的创建和启动过程。Docker Compose 对于开发、测试和暂存环境以及 CI 工作流程特别有用。

安装 Docker Compose 的推荐方法是安装 Docker Desktop，其中包括 Docker Compose、Docker Engine 和 Docker CLI。 这些都是运行多容器 Docker 应用程序所必需的组件。

您可以从以下链接下载适用于您的特定操作系统的 Docker Desktop：[Docker Desktop](https://docs.docker.com/desktop/)

**Rosen Guard（罗森守卫）**

罗森（Rosen）是一座以Ergo为中心的跨链桥，具有多层安全保护。 在初始层中，Watcher监视网络活动并向后续层“Guard”报告与跨链桥相关的有效事件。 然后，这些Guard仔细处理报告的事件并执行所需的操作。 简而言之，Guard致力于安全维护和执行响应，而Watcher则专注于对活动的持续监控和透明报告。

Guard是管理 Rosen 核心的一组实体联盟。他们对罗森的权限受到多重签名合约和钱包的限制。只要大多数Guard都健康，Guard的失败或勾结是可以容忍的。每个Guard都有一定数量的资金被锁定作为抵押品，如果出现恶意行为，他们将立即失去所有资金。

Guard需要锁定 RSN 作为抵押品。如果跨链桥转账成功，资金将被发送到Guard Set（守卫组）和各相关Watcher。但是，如果出现恶意行为，资金将被削减/收走。 当 RSN 释放结束时，所有过桥费用将以RSN代币形式收取。持有RSN将获得项目特殊费用优惠。

**谁可以成为Guard？**

成为一名Guard是需要大量努力且基于许可证的，首先要选择已知的实体，然后由Guard Set承认。Guard购买RSN代币并将其锁定在多重签名钱包中，因不当行为或不活动而导致权益损失。

**当前Guard都是谁？**

Guard Set可以在[rosen.tech](https://rosen.tech/)上查看

**代币经济学**

罗森跨链桥旨在引导多个生态系统的流动性。罗森代币充当罗森框架的女巫攻击抵抗机制、费用分配机制以及访问罗森跨链桥服务的方法。

[Watcher](https://docs.ergoplatform.com/eco/rosen/rosen-watcher/)需要通过质押（Staking）的方式存入RSN 和 ERG形式的抵押品，这使他们能够获得报告许可证。 Guard需要锁定 RSN 作为抵押品。 如果跨链桥转账成功，资金将被发送到Guard Set和相关Watcher。 但是，如果出现恶意行为，资金将被削减/收取。当 RSN 释放结束时，所有过桥费用将以RSN 代币形式收取。持有RSN将获得项目特殊费用优惠。

只要满足参与所需的抵押品要求，任何用户都可以作为Watcher加入，并通过提供服务赚取奖励。

**概述**

**代币名称：** 罗森跨链桥代币（Rosen Bridge Token）

**代币代码：** RSN

**最大供应量：** 1,000,000,000枚RSN

**初始流动性引导：** 100,000,000枚RSN

**明细**

![|498x302](file:///C:\Users\CUTEBA~1\AppData\Local\Temp\ksohtml16992\wps1.jpg)

**资金**

罗森跨链桥完全是自筹资金，不涉及私人销售、风险投资或未来代币简单协议（SAFT协议），所有合约均自付费用开发，因为尚无释放。核心团队由6名主要开发者组成。

Ergo端的初始流动性占5%，存入Spectrum LP（流动性提供商）。没有涉及机器人或抢先交易。

我们与Zengate合作争取Catalyst，因为它涉及Cardano政策，这个领域属于他们的专业领域。

我们已成功完成并收到里程碑3的资金，并已提交里程碑4以获取F10资金。

**为什么需要 RSN 代币？#**

资金形成。开发是有成本的。而且还需要在市场上形成流动性。

创建激励措施（基于事件的释放）。

请参阅 Armeanio 在 2023 年 12 月 14 日的每周更新和 AMA 中的[回答](https://youtu.be/5p-xmILkS2c?t=1455)。

**罗森团队**

罗森团队由8名全职开发者和2-3名兼职开发者组成。 一些前端和 UI 任务采取外包。 在多位顾问的支持下，团队实力进一步增强。

罗森跨链桥完全依靠自筹资金运营，不涉及私人销售、风险投资或 SAFT 协议。 由于还没有释放，所有合约均是自付费用开发。 核心团队由6名主要开发者组成。

Ergo端的初始流动性占 5%，存入 Spectrum LP上面。 这个过程是在没有机器人或抢先交易的情况下进行的。（更多详细信息请参阅[代币经济学](https://docs.ergoplatform.com/eco/rosen/rosen-tokenomics/)部分）

团队跟Zengate建立了合作获取Catalyst，因为它涉及Cardano政策，这是他们专业领域内的领域。

团队已成功完成并收到里程碑3的资金，并已提交里程碑4以获得F10资金。

**历史**

罗森跨链桥团队最初是在Ergo首届黑客松大赛ERGOHACK I 期间组建的。在@mhs_sam的指导下，团队成员@RaaCT0R、@vorujack 和 @zargarzadeh 开发了ErgoRaffle。 这标志着他们对生态系统做出重大贡献的开始，其中包括[minotaur-wallet](https://docs.ergoplatform.com/eco/rosen/rosen-team/minotaur.md)和[ergo-faucet](https://docs.ergoplatform.com/eco/rosen/rosen-team/faucet.md)等项目。自 2021 年以来，跨链桥的概念一直是该团队的重点关注点，最初是[ErgoGravity](https://github.com/ErgoGravity)，这是一种连接虫洞跨链桥（Wormhole Bridge）的 Ergo 连接器。 然而，在虫洞跨链桥被破坏并导致损失 3.25 亿美元后，团队将重点转向开发以Ergo为中心的跨链桥。

**创始人**

**Mohammad Hasan Samadani (mhs_sam)** 是Ergo基金会荣誉董事会成员和罗森跨链桥创始人，拥有计算机科学博士学位，在安全和软件开发方面拥有超过 12 年的经验。 他为 Ergo 挖矿基础设施、Stratum服务器和ergopool做出了重大贡献。 他在产品所有权、研究和团队领导方面的专业知识对罗森跨链桥的发展发挥了重要作用。

**Joseph Armeanio** 是Ergo基金会的董事会成员兼董事，也是罗森跨链桥的创始人，自2013年以来一直涉足加密货币行业。他曾是Big Bear Investments的合伙人CIO，并一直是Universal Education Foundation 的董事会成员。 自 2008 年起成为 501(c)3 组织。Joseph对反经济框架和社会公益工具的热情推动了他在加密行业建立合作、教育合作和研究机会的工作，同时促进了Ergo工具在公共和非营利部门的采用。

**开发者**

[Mohammad Kermani](https://github.com/mkermani144)是一位软件工程师，拥有超过 7 年的经验，其中包括 5 年的行业经验。 他喜欢挑战构建以用户为中心的应用程序，且总是渴望学习新技术。

[Fateme Rahmani](https://github.com/fatemeh-ra)是罗森跨链桥团队的一名专门开发者，之前曾从事 Ergo Raffle 后端工作。

[Moein Zargarzadeh](https://github.com/zargarzadehm)之前曾参与开发ergo-faucet 和 Ergo Raffle等

[SepehrGanji ](https://github.com/SepehrGanji)之前参与开发FleetSDK、GraphQL

[RaaCT0R](https://github.com/RaaCT0R)

[Esmaeil Mohammed (vorujack)](https://github.com/vorujack)之前曾参与开发minotaur-wallet

**罗森跨链桥是否与Ergo或Ergo基金会有附属关系？**

罗森跨链桥虽然是由 Ergo 基金会成员发起，但独立运营。Ergo基金会不对罗森跨链桥施加任何管理或控制影响。然而，基金会以补助金（Grant）的形式向罗森跨链桥提供过支持，这是生态系统内项目的常见做法。基金会还将获得RSN总供应量的3%。 有关更多详细信息，请参阅[代币经济学](https://docs.ergoplatform.com/eco/rosen/rosen-tokenomics/)部分。

原文链接：

https://docs.ergoplatform.com/eco/rosen/
```
