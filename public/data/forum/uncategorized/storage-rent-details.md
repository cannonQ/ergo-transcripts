---
title: Storage rent details
description: 'ErgoForum discussion: Storage rent details'
tags:
- addresses
- bootstrapping
- box
- context-extension
- emission-schedule
- ergoforum
- ergoscript
- ergoscript-context
- minimum-transaction-fee
- native-tokens
- registers
- soft-fork
- storage-rent
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/storage-rent-details/256
created: '2020-06-22'
last_activity: '2023-06-27'
posts_count: 7
views: 3381
likes: 9
glossary_hits:
- Addresses
- Bootstrapping
- Box
- Context extension
- Emission schedule
- ErgoScript
- ErgoScript context
- Minimum transaction fee
- Native tokens
- Registers
- Soft fork
- Storage rent
- Transaction
---

# Storage rent details

> **Forum thread:** [https://ergoforum.org/t/storage-rent-details/256](https://ergoforum.org/t/storage-rent-details/256)
> **Category:** Uncategorized | **Created:** 2020-06-22 | **Posts:** 7 | **Views:** 3381

**Related concepts:** Addresses, Bootstrapping, Box, Context extension, Emission schedule, ErgoScript, ErgoScript context, Minimum transaction fee, Native tokens, Registers, Soft fork, Storage rent, Transaction

---

### Post #1 — @kushti (2020-06-22)

In this post I am going to reveal some details about storage rent.

Ergo has pretty aggressive emission curve with all the ergs being emitted in just 8 years. To provide stability after the emission being done, Ergo is introducing storage rent, which is pretty flexible and sophisticated. There are two basic mechanisms in regards with the storage rent:

* It is impossible to create a box holding less ergs than some minimum value per byte (of the box). Value by default is 360 nanoergs per byte. Miners can set a value in a range [0, 10000] (nanoergs per byte, inclusive) by voting on value 2 (to increase) or -2 (to decrease), per-epoch step is 10 nanoergs/byte (so if majority of miners vote to increase the default value per an epoch 1,024 blocks, on next epoch the value will be 370 nanoergs/block).
* every four years a miner can charge storage rent fee by spending the box and recreating it with all the registers preserved except of R0 (holding monetary value) and R3 (holding creation height and reference to transaction identifier and output index where the box was created). Storage rent fee is defined by network consensus by voting on storage rent fee per byte value. The default value for the parameter is 1,250,000 nanoergs / byte. Miners can vote on changing this parameter within [0…2,500,000] range by voting for 1 or -1, the step is 25,000.

**Modelling the storage rent**

There’s FeeSimulator.scala runnable application printing some modelling results to the console.

In particular, it is calculating “standard box” size by averaging sizes of two P2PK-protected boxes, one holding only ergs, another one additional asset also. Then:

Box size: 105 B  
Storage fee for ordinary box: 0.13125

So a simple box will pay ~0.13 ergs every four years.

Then the big question is how miners will tie transaction fees with the storage fee. For example, consider that they will require transaction to pay for input boxes byte proportionally to their lifetimes. Then miners will get from UTXO set of constant size a constant reward for 4 years, and then reward from block will be perOutputFee \* (numberOfBoxes / (4 \* BlockPerYear)). Considering Ergo UTXO set size to be like Bitcoin’s (~60M), we’re getting

```ergoscript
Reward per block: 7.49 Erg + tx fees
```

**Storage period to be changed?**

Storage period is set in stone and can not be changed via voting or soft-fork. However , withe 8 years emission and storage period of 4 years time around emission end could be messy, as near year 8 a miner will charge only boxes created around years 4. In case of storage period equal to 2 years, the miner will charge boxes created around years (2,4,6). So if HF will be performed I would like to propose to decrease the storage period to 2 years.

**How expired outputs being spent**

It is possible to spend a box if height from *preheader* (so height of upcoming block) exceeds reported creation height of the box by storage fee period at least (and a box with creation height more than the current height can not be included into a block, so a user can’t cheat by reporting a height from future in order to save on storage fee):

```ergoscript
context.preHeader.height - context.self.creationHeight >= Constants.StoragePeriod
```

(ErgoInterpreter, line 64)

Also, to spend the expired box, spending proof must be empty.

Then, anyone can spend the expired box by providing in context extension variable #127 (stored in input) an index of a recreated box (or index of any box of the expired box hasn’t enough to pay for the storage fee).

---

### Post #2 — @scalahub (2020-06-22)

Thanks for the write up. A couple of things I could glean from this:

1. Contracts depending on R0 or R3 may break so we need to avoid using these and hard-wiring their values.
2. We should set `creationHeight` to be as high as possible (I was thinking of keeping 0 as default value, but that won’t be good), and should set it to be as close to the expected height.

---

### Post #3 — @robert (2020-06-22)

I think the largest points of contention are that lowering the storage rent period worsens the UX in general and limits the potential for protocols that require long-lasting boxes with a specific given id. Both of these aren’t deal breakers, but it’s something to consider.

I think I would be more comfortable with a 3 year storage rent period, rather than 2, as this also posses a bit of a problem for people keeping track of their non-Erg token boxes to make sure they don’t get deleted. 2 years is still workable, but 3-4 is a duration where most people can definitely update boxes within even with a long stretch of hiatus.

To clarify, storage rent does not begin until emission is over right?

And one last thought, that I believe [@catena](/u/catena) made in Discord, is that this is a permanent measure in an attempt to fix a singular problem/event of when emission stops and is essentially tied to the bootstrapping of the blockchain. Imo, I think it could be a good idea to also consider new measures instead of storage rent period change to address this lull period. We have a lot of years (7) to go before this becomes an issue, and I feel that we may end up coming up with solutions down the line which don’t require worsening the UX.

Random idea I’m throwing out for example, maybe we can create an initiative on the smart-contract level to essentially build off of the crowdfunding contracts, but instead for miners post emission stop. Not sure what the best way would be to encode the logic, but say if the last two blocks generated have no rewards, then the miner of the current block has the right to redeem X Ergs from boxes under the miner fee crowdfund contract. We could then encourage popular dApps to add a small bit of logic where users of said dApp end up also creating an extra output of 0.05 Ergs (for example) to the miner crowdfund contract allowing for a hefty chunk of change to develop over the years which can act as an on-chain buffer for miners anytime that storage rent may not suffice.

This could be an active effort by the community to ensure proper operation of the blockchain, and may be a reasonable “2nd layer” to ensure rewards stability past just storage rent.

---

### Post #4 — @kushti (2020-06-26)

3 years also okay. Storage rent will be charged before emission is over, basically, since year 3 miners will get something (so community will have time to estimate how well loss of subsidies from emission will be covered by the storage rent).

There are many additional measures we can consider:

1. changing emission curve to prolong emission , but that’s pretty ugly solution likely
2. miners will confiscate non-native tokens put into expired boxes. In few years we’ll find how much could be that about
3. some new tokens can be distributed (partly of fully) to miners via contracts like Ergo emission contract
4. community-driven contracts proposed by Robert in the post above or even fee contracts (to pay some part of the fee now and put the rest into a lock for few years).

---

### Post #5 — @bigoogawoogla (2021-05-27)

So just to confirm, the store fee is paid once every four years, and it doesn’t increase over time?

Also:  
What about the ability to pay a fee so you can rent out your wallet for longer? Like be able to pay to store longer, and maybe even pay less than the actual storage fee would be?

---

### Post #6 — @kushti (2021-06-04)

Fee is to be paid every four years, and proportional to number of bytes a coin is consuming, so *price\_per\_byte \* size*. *price\_per\_byte* can be changed via miners voting, but max value is just 2x from the default one (and min value is 0).

For ordinary unspent output (like you have in Yoroi, if no tokens there) storage rent would be 0.12 ERG (if the coin is not touched for 4 years).

---

### Post #7 — @kushti (2023-06-27)

> Then, anyone can spend the expired box by providing in context extension variable #127 (stored in input) an index of a recreated box (or index of any box of the expired box hasn’t enough to pay for the storage fee).

Output is encoded as a short (16-bits) integer, as usually for inputs and output indices.

As a test vector, for output #0 serialized context extension would be *017f0300* , where *01* encodes number of key-value pair in context extension, *7f* is storage-rent key id and *0300* is encoded output index (0).

Please note that context extension value id *7f* can be used for storage rent only, so unavailable to applications.
