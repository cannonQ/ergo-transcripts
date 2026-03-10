---
title: 华语社区AMA汇总——Ergo将永守PoW
description: 'ErgoForum discussion: 华语社区AMA汇总——Ergo将永守PoW'
tags:
- autolykos
- avl-tree
- box
- dexy
- eip
- emission-schedule
- ergo-explorer
- ergo-foundation
- ergoforum
- ergonames
- ergoscript
- ergoscript-context
- eutxo
- full-node
- getblok-plasma
- layer-scaling
- machina-finance
- nipopow
- oracle-pools
- rosen-bridge
- satergo
- sigma-chains
- sigmafi
- sigmanauts
- sigmao
- sigmausd
- soft-fork
- spectrum
- storage-rent
- sub-blocks
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ama-ergo-pow/4379
created: '2023-06-13'
last_activity: '2023-06-13'
posts_count: 1
views: 315
likes: 2
glossary_hits:
- AVL tree
- Autolykos
- Box
- Dexy
- EIP
- Emission schedule
- Ergo Explorer
- Ergo Foundation
- ErgoNames
- ErgoScript
- ErgoScript context
- Full node
- GetBlok Plasma
- Layer scaling
- Machina Finance
- NiPoPoW
- Oracle pools
- Rosen Bridge
- Satergo
- Sigma Chains
- SigmaFi
- SigmaO
- SigmaUSD
- Sigmanauts
- Soft fork
- Spectrum
- Storage rent
- Sub-blocks
- Transaction
- eUTXO
---

# 华语社区AMA汇总——Ergo将永守PoW

> **Forum thread:** [https://ergoforum.org/t/ama-ergo-pow/4379](https://ergoforum.org/t/ama-ergo-pow/4379)
> **Category:** Uncategorized | **Created:** 2023-06-13 | **Posts:** 1 | **Views:** 315

**Related concepts:** AVL tree, Autolykos, Box, Dexy, EIP, Emission schedule, Ergo Explorer, Ergo Foundation, ErgoNames, ErgoScript, ErgoScript context, Full node, GetBlok Plasma, Layer scaling, Machina Finance, NiPoPoW, Oracle pools, Rosen Bridge, Satergo, Sigma Chains, SigmaFi, SigmaO, SigmaUSD, Sigmanauts, Soft fork, Spectrum, Storage rent, Sub-blocks, Transaction, eUTXO

---

### Post #1 — @ergonautgcn (2023-06-13)

6月12日，Ergo核心开发者兼联合创始人Alex Chepurnoy （别名kushti）、Ergo基金会理事会成员Justin、Ergo基金会成员Glasgow做客Ergo华语电报社区进行AMA互动问答活动，就华语社区成员关心的问题做出了回答。本次AMA问答如下

Q1. Will Ergo support ASIC in the future?

Q1. 请问Ergo将来是否会放开对专业矿机的限制？

Autolykos, based on the Equihash algorithm, is memory-hard, requiring miners to use large amounts of memory, making it difficult for ASICs to perform efficiently, but whether the chain supports it in future is ultimately for the community to decide. Some reasons people may want to keep them is that:

Autolykos基于Equihash算法，具有内存高占用属性，需要矿工使用大量内存，导致ASIC难以高效运行，但Ergo链未来是否支持，最终还是由社区决定。人们可能想要保留它们的一些原因如下：

* FPGAs/ASICs signal support and, to some extent, unpreventable without constant HFs
* Keeping them out is most important when the emission is high.
* GPUs are better for decentralisation as they are easier to access, but FPGAs also have advantages for decentralisation as they result in strong validators.
* FPGAs efficiency benefits may make it the most favorable long-term option in light of energy concerns.
* FPGA/ASIC 信号支持，在某种程度上，如果没有恒定的哈希函数（HF），则无法避免
* 当释放量很高时，将它们拒之门外是最重要的。
* GPU 更适合去中心化，因为它们更容易获取，但FPGA （现场可编程门阵列）也有去中心化的优势，因为它们会产生强大的验证器。
* 鉴于能源问题，FPGA 的效率优势可能使其成为最有利的长期选择。

Q2. Will Ergo develop ecosystem compatibility and utilities just like what Ethereum is doing?

Q2. 请问Ergo能不能以ETH为标杆大力发展生态兼容性和实用性？

This is already happening. Just recently we have seen:

Large number of DeFi DAPPs deployed like Spectrum Finance (Ergodex), SigmaFi, SigmaO and more.

Others are in development like Rosenbridge which will soon bridge Ergo to Cardano and then other chains like BNB, ETH, etc. Also, there will be DexyGold so investors can own gold on the blockchain, transfer it easily, store it cheaply and use it in DeFi.

Moreover, there are many wallets of all types.

Lastly, it is up to the community to contribute more and do more development. Chinese developers are welcome to participate.

这已经在发生了。就在最近，我们看到：

部署了大量DeFi 去中心化应用（DAPP），如Spectrum Finance（原Ergodex）、SigmaFi、SigmaO等。

其他正在开发中，如罗森跨链桥（Rosen Bridge），它将很快将 Ergo 桥接到 Cardano，然后是BNB、ETH 等其他链。此外，还将有 DexyGold也在开发中，因此投资者可以在区块链上持有黄金，轻松转移它，低成本地存储它，并在 DeFi 中使用它。

此外，各种钱包种类繁多。

最后要靠社区多贡献，多开发。 欢迎华语开发者参与。

Q3. When will Ergo speed up the transactions? The UTXO-based chains like RXD features fast transaction speed. Is there a plan for speeding up transactions?

Q3. Ergo什么时候能速度快点，UTXO的模型类似代币也有很快的，比如说rxd。有没有提高Ergo交易速度的计划?

The general idea is that many transactions can happen in L1 or L2 and these transactions can be bundled and settled on the L0 layer of the Ergo blockchain using a single transaction. Thanks to the high flexibility of ErgoScript programming model, many different protocols are possible, each one solving scalability problem in a specific domain (like simple payment transactions). Ergo blockchain can be thought as common settlement layer for many L1/L2 protocols and applications.  
一般的想法是，许多交易可以在Layer 1或Layer2 中发生，且这些交易可以使用单笔交易在Ergo区块链的 Layer 0 层上捆绑和结算。由于ErgoScript 编程模型高度灵活，许多不同的协议成为可能，每个协议都解决特定领域的可扩展性问题（如简单的支付交易）。Ergo区块链可以被认为是许多 Layer 1/Layer 2协议和应用的通用结算层。

Sub-block confirmation protocols, as seen in Bitcoin-NG and Flux are an active topic for research.

子区块确认协议，如 Bitcoin-NG 和 Flux 中所见，是一个活跃的研究课题。

Q4. When will the L2 chain be launched on Ergo?  
Q4. Ergo的L2链什么时候可以出来？

Ergo is compatible with many Layer 2 solutions from other UTXO blockchains, such as Bitcoin’s Lightning Network, and can utilize multiple off-chain solutions, such as Hydra and sidechains, to compress blockchain bloat and provide similar benefits as ZK-rollups.

Ergo与其他UTXO区块链的许多Layer 2解决方案兼容，例如比特币的闪电网络，且可以利用多种链下解决方案（例如 Hydra 和侧链）来压缩区块链膨胀并提供与 ZK-rollup 类似的益处。

Ergo has native support for AVL trees, an efficient authenticated data structure that allows for proving the data’s various properties without knowing the entire set. You can use the Plasma Library to create *Plasma chains* and make a full L2 solution. Right now, it is mostly used for data compression and simplifying contracts, though Plasma chains are possible in future.

Ergo原生支持 AVL 树，这是一种高效的经过身份验证的数据结构，可以在不知道整个集合的情况下证明数据的各种属性。您可以使用 Plasma代码库创建 *Plasma 链* 并制作完整的 Layer 2 解决方案。目前，它主要用于数据压缩和简化合约，尽管Plasma链在未来是可能的。

Ultimately, the specific Layer 2 solutions that are implemented on Ergo will depend on the needs of the applications being built.

最终，在Ergo上实现的特定Layer 2解决方案将取决于正在构建的应用的需求。

Q5. Recently, I have often found that the size of the block that only contains dozens of transactions is more than 1Mb. Is the block data provided by Ergo’s Explorer accurate? Can Ergo process 2k transactions in one block of 1Mb size just like what is achieved by BTC? What factors resulted in so large space occupation by a single transaction? Can this issue be effectively improved in the future?

Q5. Ergo的explore区块浏览器数据是否正确，最近常会看到几十笔交易区块大小就已经超过了1Mb，ergo能否像btc那样1Mb大小的区块就可以处理两千笔交易？是什么原因导致单笔交易占用如此大的空间，后续能否有效改善？

Currently Ergo, is roughly estimated to be capable of 1 million txns per day. The calculation:

Average txn size 6kb.

Max block size 8Mb (ergo has no max size however and miners can increase/decrease it) – this maximum is set by miners gradually over time and an optimal maximum could actually be higher, while maintaining full decentralization.

Max txn per block ~8M/6kb ~1300.

Max daily txns ~1300\*720 ~1mm txns per day.

Max TPS therefore estimated at 11 currently.

目前 Ergo，粗略估计每天能够处理 100 万笔交易。计算如下：

平均交易大小6kb。

最大区块大小 8Mb（Ergo区块大小没有固定的最大值，但矿工可以增大/减小区块大小）——这个最大值是由矿工随着时间的推移逐渐设定的，最佳最大值实际上可能更高，同时保持完全去中心化。

每个区块的最大交易 ~8M/6kb ~1300。

每日最大交易笔数~1300\*720 ~100万笔/天。

因此，目前估计最大TPS为11。

However, the above is indicative only and actual amount maybe significantly higher. More importantly, Ergo is an adaptable protocol and many changes can be made be via soft fork only or miner on-chain voting. We already saw a significant boost to TPS with the release of Sigma 5.0.

然而，以上仅供参考，实际数额可能要高得多。更重要的是，Ergo是一种适应性强的协议，可以通过软分叉或矿工链上投票进行许多更改。随着 Sigma 5.0 的发布，我们已经看到了 TPS 的显着提升。

Lastly, we have seen single transactions with up to 15,000 outputs on Ergo, making it clear TPS is an overrated metric.

最后，我们在Ergo上看到了多达15,000个输出的单笔交易，这清楚地表明 TPS 是一个被高估的指标。

Q6. How will Ergo team introduce VCs to Ergo?

Q6. Ergo将如何引进资本?

This has been a key initiative of the Ergo Foundation recently and many VCs have been contacted. However, it is not easy because Ergo was built for grass roots finance and regular people and the current market for VC fund raising is also not as favorable as in 2021-2022. But we still have a lot of respect for VCs and would like to see them funding more projects in the ecosystem. From our side, it’s a matter of cultivating more projects to both be of high enough quality and interested in VC funding. VCs themselves though need to realize the potential of Ergo and projects built on it.

这是Ergo基金会最近的一项重要举措，已经联系了许多 VC。 然而，这并不容易，因为Ergo是为草根金融和普通人打造的，而目前的 VC 融资市场也不像 2021-2022 年那样有利。但我们仍然非常尊重VC，并希望看到他们为生态系统中的更多项目提供资金。从我们这边来说，这是培养更多优质且对VC筹资感兴趣的项目的问题。但VC自己也需要意识到Ergo和基于它的项目的潜力。

Community members who build on Ergo including Chinese community members should consider how they will approach VCs. Again, success with VCs is in the hands of the community but the Ergo Foundation would be keen to help.

基于Ergo进行构建的社区成员，包括华语社区成员，应该考虑他们将如何与VC接洽。 同样，与VC合作成功掌握在社区手中，但Ergo基金会很乐意提供帮助。

Q7: What is your opinion on the latest hot project, Kaspa (KAS)? Please compare the advantages and disadvantages between Ergo and Kaspa (KAS)?

Q7: 问他如何看待最近的kas币，并比较二者之间的优缺点。

Can’t comment too much on Kaspa or why it became so popular so quickly. We are busy with Ergo, not monitoring other projects. Would just say seems very little github development and no smart contract functionality. Also, it seems vast majority of coins were mined very early in the first year. But at this time, many people may not have heard of it or had access to it on exchanges.

无法就 Kaspa 或为什么它如此迅速地变得如此火热发表过多评论。我们忙于 Ergo，而不是监视其他项目。只是说他们github 开发似乎很少，也没有智能合约功能。 此外，似乎绝大多数币都是在第一年很早就开采的。 但在这个时候，很多人可能没有听说过它，也没有在交易所接触过它。

Ergo strived for fair distribution so had a 8-year fairly even mining period. Now, there is a long-tail post EIP-27 meaning distribution will go on even longer. Also, Ergo went through years of development before launch including painstakingly doing around a dozen iterations of testnet and launching with full smart contract functionality on day 1, July 1, 2019, when mainnet launched.

Ergo力求公平分配，因此有一个8 年相当平均的挖矿期。现在，有一个长尾 ，EIP-27 后意味着分配将持续更长时间。此外，Ergo在启动之前已经历了多年的开发，包括煞费苦心地进行了大约十几次测试网迭代，并在 2019 年 7 月 1 日（即Ergo诞生日）主网启动时推出了完整的智能合约功能。

Many people are not aware of this history or the thousands of hours of work that went into Ergo even before launch.

很多人都不知道这段历史，也不知道甚至在主网启动前的数千小时的工作。

Q8. Hope that the Ergo’s roadmap will be updated regularly.

Q8. 希望能够经常更新路线图

Ergo is not a centralized project so is difficult to have a comprehensive roadmap any longer. It is up to the community to build on Ergo and determines what happens next including the community members in this chat. People can monitor what is likely to happen next by using telegram, twitter and discord.

However, the roadmap on the website is updated with the latest known ongoings:

<https://ergoplatform.org/en/ecosystem/#Roadmap>

Ergo不是一个中心化的项目，因此很难再有一个全面的路线图。 由社区在Ergo上进行构建并决定接下来会发生什么，包括本次聊天中的社区成员。人们可以通过使用Telegram、Twitter和 Discord 来监视接下来可能发生的事情。

但是，网站上的路线图会根据最新的已知进展进行更新：

<https://ergoplatform.org/en/ecosystem/#Roadmap>

Q9. There are many dApp prototypes on Ergo that have not entered the practical stage, and these dApps have been put on hold. Is there any plan to continue them?

Q9. Ergo上有很多没有进入实用阶段的dApp原型，这些都被搁置了，有没有重新往下做的计划

Most are still building in the background. A few paused development due to funds like Spreadly and NightOwl which is inevitable in current market conditions. Others are just moving a bit slower (ErgoNames, Lithos) but making progress. As a grassroots movement, Ergo has the advantage that many are building out of passion. Ergo’s developer stats show a high retention and growing developer community with the price. We have a dozen dApps between private and public betas right now.

大多数仍在后台建设。由于资金问题， Spreadly 和 NightOwl等项目暂停了开发，这在当前市场条件下是不可避免的。其他项目只是进展缓慢（ErgoNames、Lithos）但正在取得进展。 作为一项草根运动，Ergo拥有许多人出于热情而建立起来的优势。 Ergo的开发者统计数据显示，高保留率和不断增长的开发者社区随价格变化。 我们现在私测版和公测版的 dApp累计有十几个了。

Q10. The development speed of some key dApps on Ergp is very slow. For example, can Ergo team to increase the development efforts of oracles to speed up the development of these key dApps?

Q10. Ergo上某些关键dApp开发速度很慢，比如Oracle 可否改变研发力度加快这些关键dapp的研发

This is a fair question and development has indeed taken some time for some key applications. However, it should be remembered that:

-Ergo is unlike any other blockchain ever created and built from the ground up.

-DeFi primitives and their structure on Ergo have never before been seen on any other blockchain. Oracle pools, SigmaUSD, SigmaDeFi and more are totally original models.

-No short cuts or compromises with decentralization are ever made in Ergo like may be present in other blockchains.

Therefore, despite the best efforts of the developers, some development can take longer than desired. Lastly, everything on Ergo is open source and development is transparent. The community is welcome to contribute, including the Chinese community. This may speed up development.

这是一个公平的问题，一些关键应用的开发确实需要一些时间。 但是，应该记住：

* Ergo不同于迄今为止已创建的任何其他区块链，它从头开始构建的。
* DeFi 原语及其在Ergo上的结构以前从未在任何其他区块链上出现过。预言机池、SigmaUSD、SigmaDeFi 等都是完全原创的模型。

-在Ergo中，没有像其他区块链中可能出现的那样，在去中心化方面有任何捷径或妥协。

因此，尽管开发者尽了最大努力，但某些开发时间可能比预期的要长。 最后，Ergo上的一切都是开源的，开发是透明的。 欢迎社区做出贡献，包括华语社区。 这可能会加快开发速度。

Q11. Can Ergo team make the Ergo-related supporting facilities simpler? For example, regarding how to establish an Ergo full node, an exe file is created for most people to use it. Another example is how to create the off-chain robot of DEX.

Q11. Ergo团队可否把Ergo的相关配套做的更简单些，比如建立Erg全节点，做成exe文件形式方便大多数人使用。还比如Dex的链下机器人。

For the full node you can install using a simple .exe file using Satergo. Off-chain bots are provided by the ecosystem projects. Machina Finance (a grid-based dex) is working on a general off-chain framework which should help unify previous methods.

对于全节点，您可以使用 Satergo 使用简单的 .exe 文件进行安装。链下机器人由生态系统项目提供。Machina Finance（一个基于网格的 去中心化交易所（DEX））正在开发一个通用的链下框架，这应该有助于统一以前的方法。

Q12. Some people say that Ergo has many disruptive innovative technologies. Some people also say that Ergo is just another blockchain that realizes many functions that a blockchain should have. All the functions that Ergo feature are available in other chains, and they are even better. What is your opinion about this?

Q12.有人说Ergo有很多颠覆性创新技术。也有人说Ergo只不过是又一个实现区块链众多应有功能的链上面所有功能别的链都有而且还更好 A神怎么看？

Other chains do not have Ergo’s access to discrete log-based zero-knowledge proofs, NiPoPoWs, the eUTXO model + multi-stage protocols. This well-researched combination provides arguably the most robust base for contractual money in the space. A space where we can reclaim the origins of crypto and build a truly open-source ecosystem.

其他链无法使用Ergo能用的离散、基于日志的零知识证明，也没有Ergo的工作量证明之交互式证明（NiPoPoW）、扩展UTXO 模型 + 多阶段协议。这种经过充分研究的组合可以说为合约币在这个领域提供了最稳健的基础，即一个我们可以找回一个加密货币的起源并构建真正开源生态系统的领域。

Q13. What is the significance of the current public blockchains like Ergo if they cannot be bound to real assets? Is there a plan that will bridge Ergo to real world businesses?

Q13. 如果不能和现实资产绑定，目前像Ergo这类公链的意义何在? 有无计划将Ergo将现实世界业务桥接起来？

Ergo was built with the sole purpose of providing solutions to real people in the real world. It was originally envisioned as contractual money (Ergo was designed before “DeFi” was even a term). This vision is embodied in various early DAPP frameworks envisioned by the developers such as LETS, Oracle Pools and many more.

构建Ergo的唯一目的是为现实世界中的真人提供解决方案。它最初被设想为合约币（Ergo是在“DeFi”成为一个术语之前设计的）。这一愿景体现在开发者设想的各种早期 DAPP 框架中，例如本地交易所交易系统（LETS）、预言机池（Oracle Pools） 等。

Oracle pools are a key DeFi primitive which will bridge gap between the real world and the blockchain world as they have already done in their first iteration being SigmaUSD. DexyGold is in an advanced stage of development. While the “gold” will purely on the blockchain, it can be envisioned to have many real world use cases such as exposure to gold, hedging, using gold in DeFi applications and much more. These are just a few examples.

预言机池是一个关键的 DeFi 原语，它将弥合现实世界和区块链世界之间的鸿沟，就像他们在 SigmaUSD 的第一次迭代中所做的那样。DexyGold正处于高级开发阶段。虽然“黄金”将纯粹存在于区块链上，但可以设想它有许多现实世界的用例，例如接触黄金、对冲、在 DeFi 应用中使用黄金等等。 这些只是一些例子。

Q14. Will Ergo have an incentive plan that supports its ecosystem building in the future? Current Ergo ecosystem is dominated by concepts. How will Ergo to attract regular people without technical knowledge to choose Ergo?

Q14. 未来Ergo有没有生态激励计划，以现有的生态，多数都是概念的状态下，如何吸引不懂技术的用户选择Ergo

Ergo is a new paradigm and cannot be compared to new chains launching who base of the many years of EVM development, everything has to be done from scratch, the fruits of this labour are now starting to appear with polished dApps like SigmaFi showing the strength of Ergo’s model.

Ergo 是一种全新范式，无法与基于多年以太坊虚拟机（EVM）开发成果的其他新链进行比较，一切都须从头开始，这一切努力现在终于开始开花结果了，像 SigmaFi类精心打造的 dApp 展示了 Ergo模式的优势。

Q15. A question about privacy issue. If superpowers such as the United States and China enact bills to completely ban privacy coins such as Monero, will Ergo still adhere to the concept of privacy?

Q15. 隐私问题，如果未来美国和中国等大国颁布法案，全面禁止门罗币等隐私币，Ergo是否还能坚持隐私概念？

Ergo is just a decentralized blockchain. Can be thought of as a tool but one with many functions and uses. Privacy is just one of them and is optional only. However, the privacy ethos seems deeply ingrained into the Ergo community so it seems unlikely it would ever abandon it.

Ergo只是一条去中心化的区块链。可以被认为是一种工具，但具有多种功能和用途。隐私只是其中之一，且只是可选的。然而，隐私精神似乎在Ergo社区中根深蒂固，因此它似乎不太可能放弃它。

Q16. Can Ergo team speed up the development of its ecosystem projects to increase the quantity and quality of these projects, and greatly improve the prosperity of the Ergo ecosystem and the launch and utilities of these ecosystem projects?

Q16. Ergo团队能不能加快生态项目的开发数量和质量，大力提高生态的繁荣度和落地实用性？

This can happen naturally as a strong economy develops in the Ergo ecosystem and more outside capital and resources enter the ecosystem. Community members are welcome to reach out to more potential Ergonauts to explain to them what makes Ergo special.

随着Ergo生态系统中强大的经济不断发展以及更多外部资本和资源进入生态系统，这可能会自然发生。欢迎社区成员接触更多潜在的 Ergonaut，向他们解释 Ergo 的与众不同之处。

Q17. What is most important is the project incentive mechanism. Has Ergo team noticed that the current storage rent rate cannot meet the requirements of the Project’s development and the promotion of the Ergo ecosystem prosperity, and is it looking for other constructive feasible solutions to explore the future of the Ergo Project? For example, ERG staking, PoS mining, or VC participation in Ergo for profit sharing.

Q17. 最重要的项目激励机制，项目方是否已经注意到现在的存储费率并不能满足项目的研发和对Ergo生态繁荣的促进，有没有在寻找其他有建设性的可行的方案来探索Ergo项目的未来。例如ergo币的质押stake，POS挖矿，或者请其他资本介入分成

The potential of rent is [being tracked and looks promising.](https://www.reddit.com/r/ergonauts/comments/13e8f8g/tracking_storage_rent_potential_3rd_ed/) The income from storage rent may surpass transaction fees by around 2025. Ergo is a fairly launched PoW blockchain, so PoS isn’t possible – if the community forked to support this, the resulting protocol should not be called “Ergo”. VCs can get involved with ecosystem projects launching now they are getting more exciting, which will help support the price and grow the ecosystem further.

正在跟踪存储租赁费的潜力，看起来很有希望。到 2025 年左右，存储租赁费的收入可能会超过交易手续费。Ergo是一个公平启动的 PoW 链，所以支持PoS 是不可能的——如果社区分叉支持PoS，由此产生的协议不应该被称为“Ergo”。VC 可以参与生态系统项目启动，现在它们变得越来越令人激动，这将有助于支撑价格并进一步发展生态系统。

In the long-term Ergo of course needs to grow in use and market capitalization to insure its security, decentralization and long-term success. This is true of any blockchain. It is the hoped that the key DeFi infrastructure being built now will enable Ergo to succeed.

从长远来看，Ergo当然需要在采用和市值方面有所增长，以确保其安全性、去中心化和长期成功。任何区块链都是如此。希望现在正在构建的关键 DeFi 基础设施将使Ergo获得成功。

Q18. I suggest increasing the budget of Ergo Foundation for marketing in the Chinese market, and forming a small team of 3-4 people to regularly organize online or offline events, to enhance Ergo’s visibility in the Chinese world, and attract more people to like and participate in Ergo.

Q18. 建议增加Ergo基金会在中文市场营销方面的预算，至少组建一个由3-4人组成的小团队，以便能定期举办一些线上或线下活动，提升ERGO在中文世界的知名度，吸引更多人喜欢并参与ERGO。

Q19. At present, Ergo smart contract seems to only support Ergoscript, hope it will support other languages soon. Cardano now has Aiken (Rust) and Opshin (Python)

Q19. 目前 Ergo 智能合约好像只是支持Ergoscript, 希望快点支持其他语言。Cardano 现在有 Aiken (Rust) 和 Opshin (Python)

Ergo has support for a subset of Scala language (ErgoScala), and you can use Scala language tooling for that, for example, formal verification was done for ErgoScala contracts. Other options are possible, e.g. Rust or Python based domain-specific languages.

Ergo已支持 Scala 语言的一个子集（ErgoScala），你可以使用 Scala 语言工具，例如，对 ErgoScala 合约进行了形式验证。 其他选项也是可能的，例如 基于 Rust 或 Python 的领域特定语言。

Q20. Can Ergo team including Alex be more active on Twitter?

Q20. Ergo是不是可以在推特上多活跃点，A神也活跃活跃？

There are plans in work to improve the reach of the main Twitter. But as a grassroots platform it’s up to the community to get the word out. We also have the @Sigmanauts account which the community can contribute posts too.

Kushti has his own account which he posts through too @chepurnoy but ideally he can spend all his time developing instead ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=12 ":slight_smile:")

正在制定计划以提高主要 Twitter 的覆盖范围。 但作为一个草根平台，主要靠社区来宣传。 我们还有@Sigmanauts 帐户，社区也可以在该帐户上发帖。

Kushti 有自己的帐户，他也通过@chepurnoy 发帖，但理想情况下，他可以将所有时间都花在开发上 ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=12 ":slight_smile:")

Q21. Hello, Glasgow. If the Ergo Foundation suddenly had an additional fund of 30 million dollars. What three things would you do with priorities?

Q21. 你好，Glasgow！ 假如突然Ergo基金会多了3000万美金的资金。你会做优先哪三件事情？

1. Development. Dev tooling, online tutorials, guides, playgrounds, etc.
2. Infrastructure. Improving the base infrastructure. Explorer, apis, etc.
3. Bigger promotional events. 1M hackathon.
4. 开发。开发工具、在线教程、指南、试验台等。
5. 基础设施。 完善基础设施、浏览器、API 等
6. 更大的推广活动。百万级黑客松。
