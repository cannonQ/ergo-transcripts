---
title: Oracle Pools - A New Oracle Model
description: 'ErgoForum discussion: Oracle Pools - A New Oracle Model'
tags:
- box
- collateral
- ergo-explorer
- ergo-foundation
- ergoforum
- ergoscript-context
- eutxo
- native-tokens
- oracle-pools
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/oracle-pools-a-new-oracle-model/263
created: '2020-06-28'
last_activity: '2020-09-03'
posts_count: 4
views: 8250
likes: 20
glossary_hits:
- Box
- Collateral
- Ergo Explorer
- Ergo Foundation
- ErgoScript context
- Native tokens
- Oracle pools
- eUTXO
---

# Oracle Pools - A New Oracle Model

> **Forum thread:** [https://ergoforum.org/t/oracle-pools-a-new-oracle-model/263](https://ergoforum.org/t/oracle-pools-a-new-oracle-model/263)
> **Category:** Uncategorized | **Created:** 2020-06-28 | **Posts:** 4 | **Views:** 8250

**Related concepts:** Box, Collateral, Ergo Explorer, Ergo Foundation, ErgoScript context, Native tokens, Oracle pools, eUTXO

---

### Post #1 — @robert (2020-06-28)

As a part of Emurgo Research, and the new partnership between Emurgo & Ergo Foundation, we have released a new piece called [Oracle Pools](https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md). This is a brand new model for oracles which utilizes a number of the key benefits of UTXO systems. We will be implementing oracle pools on top of Ergo first, and more details will be released in the coming weeks.

[Click here to read the research doc.](https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md)

**Oracle Pool Graphs**

[![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/5ab2371519f0317d1f31e73f8803e7836d0b6359_2_690x448.jpeg)

6668×4334 1.12 MB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/5ab2371519f0317d1f31e73f8803e7836d0b6359.jpeg)

[![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/b806708b0f9b16a1d9407384c97a93d9338217f7_2_690x448.jpeg)

6668×4334 1.72 MB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/b806708b0f9b16a1d9407384c97a93d9338217f7.jpeg)

[![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/4355d453a4c869dfd42f5ce384b8843331c5e89b_2_690x448.jpeg)

6667×4334 2.12 MB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/4355d453a4c869dfd42f5ce384b8843331c5e89b.jpeg)

People have also been wondering what the difference between ChainLink and Oracle Pools are, and so I have compiled a list for anyone that is curious:

**ChainLink Vs. Oracle Pools**

* Oracle Pools use the base cryptocurrency of the blockchain for funds/payments/stake. This means they do not require anyone to purchase of use an extra token like LINK which provides no value to either end users or the oracles themselves, but instead makes adoption needlessly more complex.
* By design, oracle pools divide time into epochs where oracles must post within. This provides a framework for building a lot stronger incentives for ensuring datafeeds are updated on a schedule, making collusion less profitable, and thereby allowing for more trustworthy datafeeds.
* Similarly, epochs provide a perfect way to implement disincentives, such as stake slashing (oracles joining a pool have to put up collateral to join). ChainLink aggregators do not have this at all currently (with only promises that it will be implemented), and their design makes it more challenging to encode them. Oracle pools are designed specifically to improve the assurance of oracle data, thus incentives and disincentives fit in perfectly. We have already started to write informal specifications (and contracts soon) making them a palpable reality rather than just an idea in someone’s head. (Also all stake is in the blockchain’s native currency, rather than a custom token like LINK)
* An oracle’s job inside of a pool is to source and guarantee that external data is posted onto the blockchain in timely manner. This is a job that has actual value, and makes 3rd parties who aren’t the source of the data actual valuable participants. This is a consequence of the epoch design of oracle pools which doesn’t exist in ChainLink. Thus for datafeeds, ChainLink oracles are effectively useless middlemen that simply take a cut, which in Oracle Pools the oracles themselves are performing the equivalent of a timely delivery service.
* Oracle pools have multiple approaches for incorporating governance (ChainLink has none). Furthermore oracle pool governance is very flexible and has a stronger impact than ChainLink’s passive reputation system. This means that oracle pools can use internal governance where individual oracles (who all have a game theoretic incentive to act well in order to earn money) vote on parameters/the list of oracles, or an external governance DAO which distributes the responsibility to a large number of DAO members can be used too. Due to the longevity of oracle pools, an external reputation system isn’t required, but instead direct action can be taken through the governance mechanism to immediately improve the quality of data and remove bad actors. This direct approach provides immediate effects which has a much greater impact for the end-user (furthermore a reputation system can still additionally be built on top if so desired, where if any oracle is kicked out of one pool their global reputation decreases).
* Oracle pools provide greater sybil attack resistance and general assurance because the individual oracles part of the pool willingly co-ordinate and come together in order to launch their oracle pool. ChainLink’s more individualized approach to oracles tied with a bidding process is akin to hiring mercenaries/thugs who have no allegiances and are prone to mutiny at the drop of a dime if it benefits them (and in this case you can’t tell if the different groups of thugs you’ve hired aren’t actually conspiring together and/or the same person). Oracle pools in this point of view, can be viewed more as a cooperative of oracles who know each other and have aligned incentives together with a common goal. They are significantly more likely to perform their job as expected, but if they don’t, disincentives and governance are in place to ensure they are severely penalized and removed. This is a shift in core philosophy of how oracles are chosen with a focus on using market dynamics *between competing oracle pools*, rather than competing individual oracles. And with this, a lot more assurance is provided to the end users.
* Thanks to extended UTXO, we can construct arbitrarily large oracle datapoint hierarchies of confidence easily which make it possible to have pools of pools (continuing to higher tiers as well) and thereby scale accuracy upwards at the cost of price/speed. This isn’t possible with ChainkLink’s design, because oracles are inherently sole actors, and there is no design for aggregating aggregators, and having that scale. Furthermore, the lack of the UTXO model prevents such hierarchies from working well at all. The accumulation of data upwards through the hierarchy and the dispersal of funds from the top downwards are both an order of magnitude more complex to perform (and likely more prone to bugs/errors), which translates to higher costs and making it an open question whether it is viable at all on an account-based model.
* Furthermore, datapoints generated by an Oracle Pool (on a UTXO system with data-inputs) are accessible by anyone at next to no extra cost. This means that they can be used by any dApp on the blockchain easily, thereby making oracle pools much more like a public good. Thus even small “p2p” smart contracts between two individuals (say in Africa who can’t afford paying for oracle data explicitly) can still have access to vital oracle datafeeds. This is something extremely novel, and quite exciting in my book.
* It is trivial for a dApp to use datapoints from multiple oracle pools in a single tx. Allows for more complex DeFi dApps to come about while still being reasonably priced.
* Because oracle pool datapoints can be used by anyone on the chain after they are produced, that means everyone on the blockchain has an incentive to submit funds to said oracle pool to keep the datafeed going. Thanks to the UTXO model, this can be very done very easily in a passive manner where dApps require users to create an extra output UTXO in their tx which goes to an oracle pool and contains a very small amount of funds (ex. $0.05 equivalent). These tiny amounts are barely felt by the users, yet they accumulate quickly and provide a steady stream of funds for the oracle pool to ensure it continues to run smoothly. Thus oracle pools provide us with a whole new experience, where users passively fund oracle pools and thereby produce datafeeds that essentially become a public good.
* Because oracle pools have longevity and are easy to fund, the blockchain ecosystem can focus on building key permanent oracle pools with incentives/disincentives in place, together with baked-in governance for parameters + entry into the oracle pool (which aids in ensuring sybil attack resistance by actors involved). Thus we can create trustworthy oracle datafeeds that anyone on the blockchain can use. This is a vastly different vision than what ChainLink is attempting to build, and in my opinion much more exciting. Our approach is more targeted/opinionated, and together with the extended UTXO model, provides a number of benefits that are completely novel.

---

### Post #2 — @robert (2020-07-20)

And for reference, here is the overview video we released which summarizes the above research:

[![]( " - YouTube")](https://www.youtube.com/watch?v=NfSrNxA-MPo)

---

### Post #3 — @mobybit (2020-09-01)

[@robert](/u/robert) great article! What do you think about also re-posting this as a blog article in <https://ergoplatform.org/en/blog/>?

---

### Post #4 — @jasondavies (2020-09-03)

The oracle pool charts that I keep sharing are now live ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=9 ":slight_smile:")

<https://explorer.plutomonkey.com/ergo/oracle/>

[![visualization (9)](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/9bf687b99ef9b75d4980ee46e45701624146edca.png)

visualization (9)1008×678 16.9 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/9bf687b99ef9b75d4980ee46e45701624146edca.png "visualization (9)")
