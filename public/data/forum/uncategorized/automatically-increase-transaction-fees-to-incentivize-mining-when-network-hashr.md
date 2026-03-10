---
title: Automatically increase transaction fees to incentivize mining when network
  hashrate is low
description: 'ErgoForum discussion: Automatically increase transaction fees to incentivize
  mining when network hashrate is low'
tags:
- difficulty-adjustment
- ergoforum
- ergoscript-context
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/automatically-increase-transaction-fees-to-incentivize-mining-when-network-hashrate-is-low/3950
created: '2022-09-26'
last_activity: '2022-10-02'
posts_count: 3
views: 272
likes: 2
glossary_hits:
- Difficulty adjustment
- ErgoScript context
- Transaction
---

# Automatically increase transaction fees to incentivize mining when network hashrate is low

> **Forum thread:** [https://ergoforum.org/t/automatically-increase-transaction-fees-to-incentivize-mining-when-network-hashrate-is-low/3950](https://ergoforum.org/t/automatically-increase-transaction-fees-to-incentivize-mining-when-network-hashrate-is-low/3950)
> **Category:** Uncategorized | **Created:** 2022-09-26 | **Posts:** 3 | **Views:** 272

**Related concepts:** Difficulty adjustment, ErgoScript context, Transaction

---

### Post #1 — @lara (2022-09-26)

First I want to say that I won’t be able to develop this solution myself, so if the community likes it, other people will have to step up to help carry it forward.

I think Ergo is very solid overall, yet perhaps one of the biggest potential threats is a 51% attack. In order to avoid a 51% attack, it would help if Ergo could maintain a minimum amount of network hashrate. It would not completely remove the possibility, but it would decrease it. Perhaps Ergo should be changed so that the transaction fees increase if the network hashrate gets below an IMNH (incentivized minimum network hashrate). The increase in the fee would be paid to miners. Ideas on what number the IMNH should be and how it can self adjust over time are welcome. It should be set to something that is above the desired minimum so as to leave a protective buffer after the incentives kick in.

Transaction fees would remain as they are now when the network hashrate remains at or above the IMNH, which it should most of the time. This will allow the transaction fees to be as low as possible for the users. As soon as the hashrate is below the IMNH, transaction fees would increase a little. They would keep increasing the longer the hashrate remains below the IMNH.

Users will prefer the lowest possible transaction fees, but they also benefit from the increased security that results from any increase in fees they have to pay due to the IMNH.

Basing the increase in fees on the hashrate rather than the coin price, mining difficulty, or the profitability of mining seems like the right approach. Ergo does not need to support an infinite number of miners, and each miner has different profitability requirements based on differing circumstances. But if the network hashrate gets too low, this would be bad for everyone, as it greatly decreases the financial cost a bad actor would incur in order to attempt a 51% attack.

Even if the incentives work in maintaining a minimum network hashrate, it is still possible to perform a 51% attack. We don’t know how much of the hashrate is controlled by a single miner, farm, or pool. But I will leave that to be addressed in other ways if necessary, perhaps by rewarding all loyal miners such as is being discussed elsewhere. I don’t think there is an accurate and simple way to only incentivize decentralized hashrate that can be incorporated into this idea, or if there is, it can wait until a future proposal/change. I think the scope of this idea is about where it should be should it eventually become a proposal.

---

### Post #2 — @Ergosmergo (2022-10-02)

In Ergo the fees are based on per tx or execution of smart contracts cost a fixed fee of 0.0011 ERG. Messing with this fee alters the monetary policy and could cause havoc with the ecosystem. Ergo is not like Ethereum and it shouldn’t be.

---

### Post #3 — @lara (2022-10-02)

My idea is that these extra fees would only kick in if the hashrate was getting dangerously low. If the hashrate gets too low, it makes Ergo fundamentally insecure and undesirable to use or support, since there is no extra type of 51% attack protection in place. My idea is different than Ethereum where there are always transaction fees + gas fees and the gas fees go up as usage goes up. The increase in fees in this idea is certainly undesirable if it can be avoided (if the hashrate stays high enough), but if it cannot be avoided (if the hashrate gets too low), an automatic increase in fees would be better than having an insecure network. I’m not sure what the hashrate minimum should be, or how this can be calculated automatically. The mining incentivizing fees would automatically be removed as soon as the hashrate reached a safe level again.

If something like this was ever built into Ergo, the hope is it would never actually get used as the hashrate will always hopefully stay high enough. This would provide added peace of mind for exchanges or merchants that are considering adding or using Ergo, but uncertain about the possibility of a 51% attack.
