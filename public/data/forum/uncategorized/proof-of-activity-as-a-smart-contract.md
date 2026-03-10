---
title: Proof-of-Activity as a Smart Contract
description: 'ErgoForum discussion: Proof-of-Activity as a Smart Contract'
tags:
- box
- data-input
- ergoforum
- ergoscript-context
- full-node
- native-tokens
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/proof-of-activity-as-a-smart-contract/132
created: '2019-11-20'
last_activity: '2022-07-24'
posts_count: 3
views: 1110
likes: 10
glossary_hits:
- Box
- Data input
- ErgoScript context
- Full node
- Native tokens
---

# Proof-of-Activity as a Smart Contract

> **Forum thread:** [https://ergoforum.org/t/proof-of-activity-as-a-smart-contract/132](https://ergoforum.org/t/proof-of-activity-as-a-smart-contract/132)
> **Category:** Uncategorized | **Created:** 2019-11-20 | **Posts:** 3 | **Views:** 1110

**Related concepts:** Box, Data input, ErgoScript context, Full node, Native tokens

---

### Post #1 — @kushti (2019-11-20)

Proof-of-Activity (a lottery which is using randomness from PoW output to select winners among UTXO holders) was first proposed (AFAIK) by Bentov et al. in with a goal to reward for running the nodes in the following paper <https://allquantor.at/blockchainbib/pdf/bentov2014proof.pdf> . Conceptually, PoA is close to PoS (e.g. Nxt is about also about a lottery which is using PoS chain to obtain randomness, see <http://chepurnoy.org/blog/2014/10/inside-a-proof-of-stake-cryptocurrency-part-2/> )

However, instead of tweaking a consensus protocol, we can reward people running nodes via a smart contract. Let me describe the contract in general.

For random seed we can use id of the last block header (but in execution context 10 last blocks available, so the seed could be e.g. XOR of last few block ids).

Then lottery box contract contains a *target* value. A reward could be withdrawn from the lottery box if a pseudo-random *hit* is less than the *target*. Hit value of a *box* can be calculated as e.g. blake2b256(header.parentId || box.id) \* box.value .

The contract readjusts the target with aim to have a hit every N blocks.

The lottery box then has the following conditions:

* input index of the box is e.g. 0, hit box input e.g. 1
* output index of the updated lottery box e.g. 0
* outs[0].R4 = HEIGHT
* newTarget = ins[0].R5 \* (outs[0].R4 - ins[0].R4) / 10
* outs[0].R5 = newTarget
* blake2b256(header.parentId || box.id) < newTarget \* box.value
* proper amount is taken from the lotter box (it could be fixed amount or proportional to time elapsed from previous hit)

The tricky question is whether to require the box to be spent (like in the example above) or not (in this case the box would be provided as a data input). In the former case wallet must be open all the time (which is not the most secure option) while in the latter one the participation in the lottery becomes outsourceable.

Such a lottery could be used for airdropping tokens to people running the nodes.

---

### Post #2 — @Ulmo (2022-06-17)

Could this be used in combination with the Ergo Nation IDs?

We were thinking about integrating information on people running nodes to the IDs. It would boost their reputation and encourage projects to engage them. Seeing this old thread, it seems like you had thought about this idea long ago already.

The IDs also solve the tricky question at the end of you text. It would prove that the person running a node is a unique person with a reputation in the ecosystem.

Does running a node reveal anything about the person doing it? Like location or something? If it is a threat to the anonymity, then the information of running a node AND having an ID could also be combined with a zk-proof possibly.

---

### Post #3 — @Ergosmergo (2022-07-24)

It’s a good idea as it will keep node operators incentivized by airdropping but security is first and foremost wallets shouldn’t need to be open all the time. I’m not a massive fan of POS to begin with.
