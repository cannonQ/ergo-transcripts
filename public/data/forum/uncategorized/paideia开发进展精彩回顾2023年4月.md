---
title: Paideia开发进展精彩回顾（2023年4月）
description: 'ErgoForum discussion: Paideia开发进展精彩回顾（2023年4月）'
tags:
- avl-tree
- box
- ergoforum
- ergotree
- paideia
- sigma-rust
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/paideia-2023-4/4333
created: '2023-05-06'
last_activity: '2023-05-06'
posts_count: 1
views: 243
likes: 0
glossary_hits:
- AVL tree
- Box
- ErgoTree
- Paideia
- sigma-rust
---

# Paideia开发进展精彩回顾（2023年4月）

> **Forum thread:** [https://ergoforum.org/t/paideia-2023-4/4333](https://ergoforum.org/t/paideia-2023-4/4333)
> **Category:** Uncategorized | **Created:** 2023-05-06 | **Posts:** 1 | **Views:** 243

**Related concepts:** AVL tree, Box, ErgoTree, Paideia, sigma-rust

---

### Post #1 — @ergonautgcn (2023-05-06)

**Paideia** **开发进展精彩** **回顾** **（** **2023年4月** **）**

发布日期 2023 年 5 月 2 日

**23** **年4月5日**  Paideia最简化可行产品（MVP）Alpha测试：

部署了Paideia alpha 版本，由于质押合约的规模很大，在此过程中破坏了一堆 postgres 数据库。 很抱歉！

测试了通常的质押操作（创建质押、添加质押、取消质押、释放和组合（Compound））

测试了利润分成

测试了链下 AVL树（avltree）与链上数据的同步。

待测试：创建提案、投票并在提案通过后执行操作（从金库发送资金或更新DAO配置）

目前在尝试签署创建提案交易时遇到问题，反序列化 sigma-rust 中的 Coll[Box] 寄存器值时似乎出了点问题

Paideia MVP测试版：

到目前为止，在alpha期间没有出现大问题，所以几周应该足以让代码进入beta状态。

最值得注意待做的工作是将质押合约拆分成更小的模块

总而言之，一切都像我希望的那样进行，一路修复了很多错误，但没什么大不了的。

**23** **年4月12日**  Paideia beta

在暂停链上测试期间，我已着手改进合约并修复测试期间发现的问题

在此列表中完成的最大任务是将质押合约拆分为 6 个不同的合约。 一份主合约，它也在其寄存器中保存状态（avl 树，因此它实际上可以容纳无限数量的质押者）。 对于每种交易类型（创建质押、更改质押、组合等），一个单独的合约包含逻辑，并创建一个“虚拟”框以用作输入框。这将是 executeFromVar 的一个很好的用例（ergotree 字节散列可以由主合约验证），但现在“虚拟”框作为输入将起作用

许多较小的任务也已完成，进展顺利，希望在解决上述问题时使用 beta 代码完成，以便可以使用 beta 代码完成链测试

**23年4月19 日**  Paideia MVP：

与@greenhat 合作解决了类型为 Coll[Box] 的寄存器的问题。 现在好像一切都好了！

一直在努力让合约准备好进行测试。 我已经废弃了投票箱，所以用户现在可以直接使用他们的Stake key (质押密钥)进行投票。投票将像往常一样存储在提案中，但也会存储在用户的质押记录中。 这允许基于参与的质押奖励/利润分成。 如果一个 DAO 想要它，他们可以使用它来激励参与 DAO 治理，并阻止用户只是抵押他们的代币而不愿意投票。

希望在本周和下周完成测试合约并在下周部署。在我们考虑公开测试之前，我希望进行 2周的内部测试。

**23** **年4月26日**  Paideia Beta：

有点无聊的更新，只是在处理合约。 致力于优化 avl 树上的操作。 仍然期望下周在链上部署测试版。 如果链上测试进展顺利，我将开始致力于将前端连接到合约。

原文链接：

<https://app.paideia.im/paideia/discussion/paideia-development-recap-for-april-2023-64>
