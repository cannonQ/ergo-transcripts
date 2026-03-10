---
title: How are computations metered and pricing determined on Celaut?
description: 'ErgoForum discussion: How are computations metered and pricing determined
  on Celaut?'
tags:
- addresses
- box
- ergoforum
- full-node
- native-tokens
- registers
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/how-are-computations-metered-and-pricing-determined-on-celaut/5140
created: '2025-04-22'
last_activity: '2025-04-22'
posts_count: 2
views: 72
likes: 4
glossary_hits:
- Addresses
- Box
- Full node
- Native tokens
- Registers
- Transaction
---

# How are computations metered and pricing determined on Celaut?

> **Forum thread:** [https://ergoforum.org/t/how-are-computations-metered-and-pricing-determined-on-celaut/5140](https://ergoforum.org/t/how-are-computations-metered-and-pricing-determined-on-celaut/5140)
> **Category:** Uncategorized | **Created:** 2025-04-22 | **Posts:** 2 | **Views:** 72

**Related concepts:** Addresses, Box, Full node, Native tokens, Registers, Transaction

---

### Post #1 — @jossemii (2025-04-22)

Each node keeps a record of its clients (other Celaut nodes or external users) and the amount of gas each one has acquired. Gas is an internal unit that represents the node’s resources and has a specific value in ERG depending on the node.

## Information Published by Each Node

* Address of its Ergo wallet
* Price per unit of gas (in ERG)
* Amount of gas assigned per unit of resource and time
* Other data, such as supported architectures

## Registration and Gas Acquisition

* A client registers through an endpoint that provides them with a unique identifier.
* Then, they request a **deposit token**.
* Using that token (added on a Ergo box registry), they perform a transaction on Ergo.
* The node verifies the transaction, assigns the corresponding gas, and marks the transaction as processed.

Clients are incentivized to adjust their behavior based on the node’s reputation: with low reputation, they make smaller, more frequent transactions; with high reputation, they make fewer, higher-value transactions to reduce Ergo network fees.

## Gas Usage and Service Execution

* With gas available, the client can request the execution of services.
* Part of the gas is transferred from the client’s gas account to the gas account of the service instance.
* The node periodically deducts gas from the instance’s gas account based on the resources consumed.
* If the client does not replenish gas for the service instance, the node will stop it.
* Endpoints are available to query and manage gas.

Each client is responsible for managing their gas and services separately on each node. However, to simplify this management, more sophisticated mechanisms can be implemented that are less dependent on direct P2P relationships, as mentioned in [this thread on the Ergo forum](https://www.ergoforum.org/t/credit-and-computation/5013/10).

## Load Balancing Between Nodes

When a node evaluates whether to execute a service instance locally or delegate it to a peer, it compares the gas cost. Since it already acts as a client on its peer nodes and has acquired gas from them through Ergo transactions, it can launch instances where it is more cost-effective.

For example, if a client requests Node-A to execute a service, Node-A can decide to delegate it to Node-B if it proves more efficient. The client is unaware of this delegation. Node-A pays the cost using its own gas (gas-b) on Node-B, and deducts the equivalent from the client’s gas account (gas-a) in its own internal registry.

---

[Prev post](https://www.ergoforum.org/t/cellular-automata-web-pattern-and-ergos-reputation-system/4456)  
[Next post](https://www.ergoforum.org/t/how-is-the-p2p-network-implemented-in-celaut/5154)

---

### Post #2 — @jossemii (2025-04-22)

More info. about payment wallets management [nodo/docs/ERGO.md at master · celaut-project/nodo · GitHub](https://github.com/celaut-project/nodo/blob/master/docs/ERGO.md#payment-system-implementation)

More concepts info. here: [GitHub - celaut-project/paradigm: A paradigm for software design and distribution.](https://github.com/celaut-project/paradigm/) and [docs/tutorials/celaut\_basics at master · celaut-project/docs · GitHub](https://github.com/celaut-project/docs/tree/master/tutorials/celaut_basics)
