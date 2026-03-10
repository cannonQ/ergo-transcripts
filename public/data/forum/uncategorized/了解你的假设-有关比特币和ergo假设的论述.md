---
title: 了解你的假设-有关比特币和Ergo假设的论述
description: 'ErgoForum discussion: 了解你的假设-有关比特币和Ergo假设的论述'
tags:
- bootstrapping
- box
- emission-schedule
- ergoforum
- sigmausd
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo/4270
created: '2023-03-28'
last_activity: '2023-03-28'
posts_count: 1
views: 244
likes: 2
glossary_hits:
- Bootstrapping
- Box
- Emission schedule
- SigmaUSD
- Spectrum
- Transaction
---

# 了解你的假设-有关比特币和Ergo假设的论述

> **Forum thread:** [https://ergoforum.org/t/ergo/4270](https://ergoforum.org/t/ergo/4270)
> **Category:** Uncategorized | **Created:** 2023-03-28 | **Posts:** 1 | **Views:** 244

**Related concepts:** Bootstrapping, Box, Emission schedule, SigmaUSD, Spectrum, Transaction

---

### Post #1 — @ergonautgcn (2023-03-28)

**了解你的假设**

社区 高层次讨论

2023年1月31日 - 2月8日

Kushti

核心开发者

本主题将为加密货币行业中似乎基本上被忽略的几个重要问题提供肯定的答案，尽管这些问题是非常基本的问题，而且在我们看来，该行业的存在在很大程度上依赖于它们。 此外，我们将有关加密货币和DeFi协议所基于的假设的知识系统化。我们认为，了解协议所基于的显式或隐式假设对于正确了解协议的安全性和去中心化程度至关重要。

传统金融机构正在进行被称为了解您的客户/反洗钱（KYC/AML）实践的隐私侵入检查。 在由密码学驱动的去中心化金融的无银行世界中，很自然地期望控制权的恢复，也就是说，现在用户正在检查协议的特性，包括它们背后的密码和其他假设。  
然而，在公开环境中对它没有明确的概念。因此，我们想在去中心化货币和金融工具的世界中引入了解你的假设 (KYA) 实践作为 KYC/AML 实践的替代方案，在这里，是协议用户而非中心化实体确实拥有真正的权力，中心化实体强制用户通过提供隐私数据来遵守他们不断变化的规则，又总是在事后泄露这些数据。一些支持说明：

在传统金融中，投资总是不仅与预期利润相关，还与风险概况（Risk Profile）相关。相反，在DeFi中，只有APY（目前估计的年化收益率，通常没有足够长的时间平均，甚至没有从噪音中清除）被出售，而公众完全没有意识到风险。

因此，投资者希望通过不同协议（从L1区块链到复杂的DeFi堆栈和跨链桥）所基于的假设来快速比较各协议的安全性。

对于协议研究者和开发者，最好在他们的论文和说明书中明确说明他们的协议所依赖的假设。

这是很常见的，特别是在所谓的比特币最大化主义者周围，他们说，他们不相信中央权威，而是相信数学。然而，我们需要质疑这种说法。比特币协议只依赖数学吗？对数学的信任究竟意味着什么？

在密码学中，从20世纪80年代左右开始，要求所有构造的安全性可证明是很常见的，包括从理论原语（如单向函数和伪随机生成器）到非常复杂的协议。可证明的安全性基本上意味着构造的安全性目标以及构造所依赖的假设是正式定义的，然后有证据表明在假设成立的情况下目标确实得到满足。然后可以将经过验证的构造用作更高级别协议的假设。在核心中有一些我们无法归纳为其他假设的假设，因此现代密码学依赖于这样一种信念，即在世界上我们正在观察一些非常基本的假设成立，但这些假设经过了充分的检验，且几个世纪的数学经验并未将它们推翻。我们正试图在加密货币的跨学科领域采用这种方法，因此结果在理论上不会那么强大，但仍然有用。

我们从比特币开始，它是研究最透彻、可能也是最简单的加密货币。然后我们考虑Ergo以及基于它的一些应用程序，例如 ErgoDEX（现在是Spectrum）、SigUSD、预言机、Dexy等。

**作为数字黄金** **的** **比特币**

我们假设大多数比特币投资者可能认为比特币是有价值的数字商品，它同时具有*数字黄金* 和电子点对点现金的属性（即使有时这些概念是矛盾的）。

比特币的安全性基于以下假设：

哈希函数 SHA-256 没有被破坏。未被破坏是指任何哈希函数的已知安全属性，即抗碰撞性（Collision Resistance）、抗次原像性（Second Preimage Resistance）和抗原像性（Preimage Resistance）都成立。

数字签名机制没有被破坏。由于比特币中使用的数字签名机制在量子计算机存在的情况下是脆弱的，这意味着比特币协议也依赖于假设不会出现能求解出128位安全性椭圆曲线离散对数问题的量子计算机。

大多数挖矿算力是诚实的，即遵循比特币协议。这是最棘手的部分，因为该协议是通过参考客户端实现定义的，且不清楚对相当庞大的客户端代码库进行哪些修改会被视为不诚实。我们在这里能做的最好的事情就是使用协议的简化模型。最著名的一个出现在 GKL15论文[1]中。该论文首次在该领域表明，在哈希函数抗碰撞性且大多数（或考虑到公平属性，33%的） 哈希算力是诚实的假设下，基于类比特币工作量证明的协议可以实现一些形式化定义的属性，且协议定义了诚实的含义：对等点（Peer）须建立在最长的链上，使用协议的验证和输入贡献规则。然而，真正的比特币协议比GKL15模型复杂得多。比特币协议无法严格执行连续最长链。多年来，民间传说中有一个信条，认为这种行为只是最理性的选择，但后来一些论文确实表明，在某些情况下，理性行为可能与预期有很大不同（见 [2]、[3]、[4] ]）。此外，虽然在真实协议中遵循验证规则似乎是必要的（否则，挖矿节点的区块将被验证节点拒绝），甚至在公开环境中观察到过SPV挖矿[5]（且，理论上，当由于验证困境 [6]就增加区块大小的讨论正在发生时，SPV挖矿成为一个很大的问题）。对于输入贡献，很难说诚实行为会在哪里结束（特别是对于其他功能更丰富的协议，矿工可以从重新排序交易和其他游戏中获利很多[7]）。请注意，这个领域仍然不够成熟，所以我们对协议的偏差以及如何对它们做出反应知之甚少。 对于比特币协议的某些方面，例如 当每个区块的释放量会低得多时，矿工的行为，我们只能建立理论，但在相当遥远的未来观察到的现实可能会大不相同。

如您所见，即使对于比特币，假设也很棘手，而且很难说我们拥有的协议（以客户端代码的形式）如何成功地实现其安全属性，因为甚至基础还没有被完全了解。然而，由于比特币网络距离撰写本文时已经运行了13年多，许多理论问题在实践中并没有发生（因此可能不是一个问题），而未知的问题可能更多的是理论问题。请注意，如果假设成立，比特币有已知的释放时间表。因此，作为数字黄金的比特币可能比实物黄金更好，因为其生产硬度背后的实物黄金假设鲜为人知。因此，尽管假设确实成立，但比特币是完美的数字黄金。

**Ergo**

如上所述，比特币假设已经很棘手，但对于其他加密货币，情况更糟。他们可能有额外的密码学假设（例如ZCash中配对和可信设置方面的难题），或者关于节点行为或他们之间共识的更复杂的推理（我们可以在这里提到关于权益证明的无休止的争论）。对于Ergo来说，从第一天开始，重点就是从不太多的比特币假设集安全地实现可能的最大功能集，或者甚至更少地依赖这些假设。

基于点对点网络的加密货币假设可以在当今的商品硬件（例如中等价位的笔记本电脑）上运行协议客户端。还假设客户端应该允许成为自己的银行，这是为了在比特币的情况下验证来自创世纪的所有区块。验证所有区块可能会很昂贵，尤其是对于较大的区块大小和 UTXO 集大小[8]。 这限制了区块大小、合约的表达性等。Ergo允许一个节点无需验证所有区块，但拥有跟验证所有区块的另一节点同等的安全保证。更重要的是，还支持多种技术：

通过检查UTXO集转换的加密证明，Ergo节点可以在根本不存储UTXO集的情况下拥有全节点的安全保证。与后来出现的其他无状态加密货币（如Mina）不同，Ergo仅依赖基于哈希的经过身份验证的数据结构 [9]，因此引导（Bootstrapping）的安全性基于所使用的哈希函数的抗碰撞性，即没有引入新的假设。尽管如此，挖矿节点确实需要存储UTXO集以生成证明（否则，用户将需要生成附加到他们的交易的不可过期的证明，且为次，需要奇特的解决方案，通常还需要重型证明机制）。

Ergo节点可能会在下载区块头后下载UTXO集快照，然后只有在快照之后才下载并应用完整区块。这种引导方法已经是以太坊社区中最流行的方法，但对于Ergo（和其他工作量证明加密货币）来说，已知这种引导的安全性会降低到哈希函数的抗碰撞性[10]。

Ergo节点甚至可以避免下载所有区块头，改用NiPoPoW证明 （工作量证明之非交互式证明）[11]。与无状态客户端一起，这允许为区块链的所有部分 [12] 提供对数空间存储。NiPoPoW还依赖于哈希函数的抗碰撞性，且还假设对手（攻击NiPoPoW子协议）的算力不超过总挖矿算力的 1/3。考虑到新的假设，使用NiPoPoW引导非SPV客户端应该使用足够大的后缀来完成。

关于签名，Ergo在比特币使用的secp256k1曲线之上使用Schnorr签名（后者更简单，且其安全性已得到正式证明）。Ergo还允许基于Ergo协议所支持的Sigma协议将加密协议构建为应用程序。然后一些应用程序基于（比离散对数更强）DDH（决策性Diffie-Hellman）假设，但在实践中，少数UTXO的这种转变是次要的（安全性实际上是相同的）。

关于矿工的诚实行为，Ergo与这里的比特币几乎相同，但存储租金明显不同，这有望在未来简化矿工激励问题。

**参考文献**

[1] J. Garay, A. Kiayias, and N. Leonardos, “The bitcoin backbone protocol: Analysis and applications”

[2] M. Carlsten, H. Kalodner, S. M. Weinberg, and A. Narayanan, “On the instability of bitcoin without the block reward”

[3] K. Liao and J. Katz, “Incentivizing blockchain forks via whale transactions”

[4] A. Judmayer, N. Stifter, A. Zamyatin, I. Tsabary, I. Eyal, P. Gazi, S. Meiklejohn, and E. Weippl, “Sok: Algorithmic incentive manipulation attacks on permissionless pow cryptocurrencies”

[5] Some miners generating invalid blocks. Some Miners Generating Invalid Blocks 2

[6] L. Luu, J. Teutsch, R. Kulkarni, and P. Saxena, “Demystifying incentives in the consensus computer”

[7] S. Eskandari, S. Moosavi, and J. Clark, “Sok: Transparent dishonesty: front-running attacks on blockchain”

[8] Utxo uh-oh. . . . UTXO uh-oh… 3

[9] L. Reyzin, D. Meshkov, A. Chepurnoy, and S. Ivanov, “Improving authenticated dynamic dictionaries, with applications to cryptocurrencies”

[10] T. Duong, A. Chepurnoy, and H.-S. Zhou, “Multi-mode cryptocurrency systems”

[11] A. Kiayias, A. Miller, and D. Zindros, “Non-interactive proofs of proof-of-work”

[12] A. Kiayias, N. Leonardos, and D. Zindros, “Mining in logarithmic space”

原文来源：

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png)
[Know Your Assumptions](https://www.ergoforum.org/t/know-your-assumptions/4198) [High-Level Discussions](/c/community/high-level-discussions/12)

> This topic is going to provide affrmative answers to few important questions
> which seem to be largely ignored in the cryptocurrency industry, despite the
> fact that the questions are very basic ones, and, in our opinion, existence of
> the industry is heavily relying on them. Also, we systematize knowledge about
> assumptions cryptocurrency and DeFi protocols are based on. We suppose that
> understanding explicit or implicit assumptions protocols are based on is critical
> for understanding securit…
