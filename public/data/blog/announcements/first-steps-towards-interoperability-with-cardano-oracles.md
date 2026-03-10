---
title: First steps towards interoperability with Cardano oracles
date: '2020-11-09'
author: Guy Brandon
tags:
- announcements
- atomic-swaps
- box
- ergo-blog
- oracle-pools
category: blog
blog_tag: Announcements
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/2020-11-09-first-steps-towards-interoperability-with-cardano-oracles
glossary_hits:
- Atomic swaps
- Box
- Oracle pools
---

# First steps towards interoperability with Cardano oracles

> **Published:** 2020-11-09 | **Author:** Guy Brandon | **Tag:** Announcements | **Type:** blog

**Related concepts:** Atomic swaps, Box, Oracle pools

---

*The oracle solution for Cardano will post data from Ergo’s oracle pools, treating the pre-processed data as a trusted source for its own records to the blockchain.*

Back at the end of August, we announced [Oracle Pools](https://ergoplatform.org/blog/2020-08-31-ergos-oracle-pools-and-what-they-mean-for-the-ecosystem/): a new approach to oracles, powered by Ergo’s extended-UTXO model. The benefits of these oracles over existing models are considerable, and they allow the creation of new types of dApp.

Now, one of Cardano’s oracles is using data provided by Ergo’s oracle pools. Marek, a Cardano Stake Pool operator, has created a simple solution for Cardano. Information from Ergo’s oracle is posted onto the Cardano blockchain via tx metadata.

The NUTS oracle, which you can find at [nut.link](https://nut.link/), currently serves six data streams. It has two sources of data for ERG/USD: Coingecko, and Ergo oracle pools. These two sources are also used for ADA/USD price. Additionally, NUTS records ADA/EUR and the price of TSLA shares. 

Furthermore, NUTS uses a funding scheme inspired by Ergo’s approach to oracle pools, which treats external data as a public good to be made freely available. You can follow NUTS on Twitter at [@stakenuts](https://twitter.com/stakenuts).

**Connecting chains**

This is a great development, for at least two reasons. Firstly, it reuses work already done by Ergo’s oracle pools – thereby enabling Cardano to post a reliable price feed more efficiently. Sharing data in this way will benefit both chains in the future, since once reliable oracles have been established, any other platform can use that data with relatively little extra overhead.

Secondly, this provides the first steps in building interoperability between the two platforms. Both Cardano and Ergo now share the same source of data about the same cryptos. This opens the way for greater collaboration and cross-chain interaction, solidifying the connection between the two chains.

Ultimately, this functionality might power complex DeFi solutions such as Ergo-Cardano atomic swaps, with cross-chain liquidity pools and pricing decided by mutually-agreed oracle data. While that’s some way down the line, it does demonstrate what should one day be possible.

In the meantime, stay tuned for a new update on oracle pools, and further research from Emurgo that will develop interoperability between Cardano and Ergo.
