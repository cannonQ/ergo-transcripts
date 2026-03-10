---
title: ErgoMixer Tokenization
description: 'ErgoForum discussion: ErgoMixer Tokenization'
tags:
- box
- data-input
- ergoforum
- ergomixer
- ergoscript
- ergoscript-context
- ergotree
- minimum-transaction-fee
- multi-stage-contracts
- native-tokens
- registers
- spv
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergomixer-tokenization/648
created: '2021-02-12'
last_activity: '2021-04-27'
posts_count: 12
views: 1792
likes: 15
glossary_hits:
- Box
- Data input
- ErgoMixer
- ErgoScript
- ErgoScript context
- ErgoTree
- Minimum transaction fee
- Multi-stage contracts
- Native tokens
- Registers
- SPV
- Transaction
---

# ErgoMixer Tokenization

> **Forum thread:** [https://ergoforum.org/t/ergomixer-tokenization/648](https://ergoforum.org/t/ergomixer-tokenization/648)
> **Category:** Uncategorized | **Created:** 2021-02-12 | **Posts:** 12 | **Views:** 1792

**Related concepts:** Box, Data input, ErgoMixer, ErgoScript, ErgoScript context, ErgoTree, Minimum transaction fee, Multi-stage contracts, Native tokens, Registers, SPV, Transaction

---

### Post #1 — @anon2020s (2021-02-12)

In order to have multiple shareholders and distribute the mixer’s income in a decentralized manner, we propose a fairly simple approach.

Let’s say we issue share tokens with the quantity of 1000, meaning that the mixer has 1000 shares. In this approach, shareholders keep their share tokens in their wallet (doesn’t matter where) and receive the mixer’s profit proportionate to their tokens every week for example.

The most important aspect of this approach is the income contract. A contract that mixer’s income will be sent to. In this contract, it is being enforced that the income (erg and token incomes) be distributed to all share token holders proportionately every 7000 blocks for example. To enforce the first part, the contract requires all boxes containing share tokens as data input. In other words, it requires the sum of share tokens in data input boxes to be some constant (the amount that we have issued, like 1000). Then, the rest is some simple mathematical calculation and enforcing the proper distribution to the same propositionBytes of the data input boxes.

In the mathematical calculations, only divisible amounts will be distributed and the rest will be kept for the next round. For example, if there are 1000 share tokens and 1500 USD tokens in the income box, then only 1000 USD tokens will be distributed and the rest 500 will be kept for the next time!

Also, there are some parts for the contract to allow the merging of the income boxes.

Moreover, an off-chain code is required to create the distribution tx periodically.

There is one potential issue for this approach; if someone burns some of his share tokens, then the protocol will stop functioning. To handle this, we propose two approaches, a simple one that will be used for v1 and a more generalized one for the future i.e., v2.

* V1: The amount of circulating share tokens is written in one of the registers of the income boxes. If someone intentionally or unintentionally burns some of the share tokens, then mixer developers can reduce that constant in the register with their private key. There some approaches to prevent the developers to do harm to the protocol; for example, the contract can allow anyone to increase this constant by providing proof that that amount of tokens exist (by providing boxes as data inputs)
* V2: The second generalized approach involves voting by shareholders. Shareholders can vote on parameter changes in the mixer (this also can involve other mixer’s parameters like current tx fee rate, mixing fee, …)

The main limitation of this approach can be that the distributing tx can be large due to data inputs and outputs of the tx. So the amount of issuing share tokens should be chosen conservatively.

Also, this approach has assumed that duplicate data inputs are not possible in transactions. If this is not the case, additional overhead must be added to the contract to avoid duplicates.

Any comments appreciated.

---

### Post #2 — @jasondavies (2021-02-13)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/anon2020s/48/309_2.png) anon2020s:

> Also, this approach has assumed that duplicate data inputs are not possible in transactions. If this is not the case, additional overhead must be added to the contract to avoid duplicates.

Duplicate data inputs are indeed possible in the current protocol.

---

### Post #3 — @kushti (2021-02-13)

Duplicate data inputs are possible , also, data input can refer to outputs created in the same block, thus it is possible to get profit twice by providing data input from UTXO set before the block, and also data input from an output created in the block (by spending the output in the block).

Made some notes on data inputs semantics: [Data Inputs Semantics](https://www.ergoforum.org/t/data-inputs-semantics/654)

---

### Post #4 — @anon_real (2021-02-13)

Even worse. With chained transactions one can take the whole profit for himself. So any ways to avoid such case?

---

### Post #5 — @jasondavies (2021-02-13)

You can add a check to make sure the referenced data input was created in an older block:

```ergoscript
dataInput.creationInfo._1 < HEIGHT
```

This would prevent referencing a data input created in the current block, but doesn’t prevent referencing an old data input which gets spent in the same block (prior to execution of the tx in question).

The ability to refer to a spent data input is completely surprising and unexpected, but I guess it’s impossible to change this without another hard fork. The best way forward would be to make sure this is very well documented to avoid any unpleasant surprises for smart contract developers.

---

### Post #6 — @kushti (2021-02-13)

`creationHeight` is user-chosen data (it can not be in the future but can be in the past), so the proposed fix wouldn’t work.

Ability to refer to boxes spent in the same block is okay I guess, if you consider SPV clients, which need to have ability to validate transactions without having full blocks (and thus they can’t decide what is spent in the same block).

---

### Post #7 — @jasondavies (2021-02-13)

Ah, good point. It would have to be combined with other restrictions in that case.

---

### Post #8 — @kushti (2021-02-13)

I think profit-sharing contract should be done differently.

For example, we can consider token staking. On staking action, receipt box with token box id and current height (using the timestamping service by [@scalahub](/u/scalahub) ) to be issued.

Then profit-taking transaction is being provided with token box as data-input, receipt box and profit-sharing box as inputs, and returns receipt box with updated height, rewards box (with script of the token box), and updated profit-sharing box.

The only issue is that token box must be stored with a special application, as Yoroi and other wallets will move the token on every Ergs transfer.

---

### Post #9 — @Zimulakra (2021-02-14)

Maybe it could be possible to have multiple reward staking, so that you could stake ERG and receive Stablecoin Reserve Coins as well as earning a profit-share on that same ERG being used in the mixer.

---

### Post #10 — @anon_real (2021-02-15)

Anyway, the proposed approach works with [Add inclusion height to ErgoTree · Issue #1214 · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/issues/1214) it seems. It can be very helpful for other applications as well. So will it be in v5.0.0?

---

### Post #11 — @root7Z (2021-04-26)

For tokenization, I think you can incentivize mixer users by enabling them to acquire tokens when using the protocol. Apart from initial shares of protocol devs, some part could be for further token mining of protocol and token distribution can be limited in a defined time epochs so that overacquisation of tokens by spamming the protocol can be prevented. If an actor use different wallets to acquire more tokens than community voting can be useful for slashing the malicious adresses. So in the end, regular users will get some iniciative in return and they will be more eager to use the protocol. This would be helpful for devs to get more attention to protocol also by giving users rewards. Tornado cash calls this anonimity mining but they are using transfer amount to decide how much a wallet will earn rewards in return. Sorry I don’t know about the implementation of idea but their token earn and governance article is this if it would help [Tornado.Cash Governance Proposal. Tornado.Cash has become the largest… | by Tornado Cash | Medium](https://tornado-cash.medium.com/tornado-cash-governance-proposal-a55c5c7d0703#2084)

---

### Post #12 — @root7Z (2021-04-27)

i guess kushti mentioned a similar incentive here [Provide incentive to create half-mix boxes in ErgoMixer - #3 by kushti](https://www.ergoforum.org/t/provide-incentive-to-create-half-mix-boxes-in-ergomixer/678/3)
