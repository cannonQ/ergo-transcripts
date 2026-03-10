---
title: Secure User Entry/Bootstrap Funneling In Multi Stage Protocols
description: 'ErgoForum discussion: Secure User Entry/Bootstrap Funneling In Multi
  Stage Protocols'
tags:
- addresses
- bootstrapping
- box
- ergoforum
- multi-stage-contracts
- native-tokens
- registers
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/secure-user-entry-bootstrap-funneling-in-multi-stage-protocols/228
created: '2020-05-28'
last_activity: '2020-05-28'
posts_count: 1
views: 1040
likes: 4
glossary_hits:
- Addresses
- Bootstrapping
- Box
- Multi-stage contracts
- Native tokens
- Registers
---

# Secure User Entry/Bootstrap Funneling In Multi Stage Protocols

> **Forum thread:** [https://ergoforum.org/t/secure-user-entry-bootstrap-funneling-in-multi-stage-protocols/228](https://ergoforum.org/t/secure-user-entry-bootstrap-funneling-in-multi-stage-protocols/228)
> **Category:** Uncategorized | **Created:** 2020-05-28 | **Posts:** 1 | **Views:** 1040

**Related concepts:** Addresses, Bootstrapping, Box, Multi-stage contracts, Native tokens, Registers

---

### Post #1 — @robert (2020-05-28)

When creating more complex multi-stage protocols, enforcing that data can only be updated in certain ways is a key component. However one major issue is that when actors enter into a multi-stage protocol they don’t have any data/tokens locked under a stage/contract from the protocol, and thus can create a box at any stage themselves with any arbitrary data.

This is an inherent problem as it breaks guarantees the protocol designer encoded within the protocol and is due to the fact that in the UTXO model contracts are executed on spending of an input, not on creation of an output.

To prevent this you essentially need to build a bootstrapping funnel which users **must** go through in order to enter the protocol. This is done via minting a custom token for your on-chain instance of your protocol, and requiring that actors who take part have said token.

To acquire said token, one must go through the “bootstrap funnel” which can either be trusted or trustless.

In the trusted scenario, a single actor creates the tokens, and then themselves bootstrap users into the first stage(s) of the protocol by creating boxes which are owned/usable by said users. Each box has correct default values encoded in it’s registers which allows the users to start off from an initial valid state and start the protocol accordingly.

In the trustless scenario, said actor instead locks up the tokens in a “Token Withdrawal” contract which has one spending path (per stage to be bootstrapped into in the protocol) that allows users to withdraw a token (and thus join the protocol) if they create a box with the token inside, at a specific stage/contract address, and with specific default values. In essence this is an entry enforcement mechanism which ensures no one cheated while entering the protocol because they all went through a bootstrap funnel that guaranteed their initial state was fair.

Both trusted and trustless protocol bootstrap funnels are likely going to be useful for the vast majority of complex multi-stage protocols, and so I think this will end up being a very common design pattern.

An alternative way to phrase the above, is that smart contract protocols are made of one or more state machines/automata, and we must ensure that the user enters the protocol from an initial state rather than at any state they choose (or an invalid state due to being able to define the data/coins held).
