---
title: How is the P2P Network Implemented in Celaut?
description: 'ErgoForum discussion: How is the P2P Network Implemented in Celaut?'
tags:
- addresses
- box
- ergoforum
- ergoscript-context
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/how-is-the-p2p-network-implemented-in-celaut/5154
created: '2025-05-12'
last_activity: '2025-05-12'
posts_count: 1
views: 44
likes: 2
glossary_hits:
- Addresses
- Box
- ErgoScript context
- Full node
---

# How is the P2P Network Implemented in Celaut?

> **Forum thread:** [https://ergoforum.org/t/how-is-the-p2p-network-implemented-in-celaut/5154](https://ergoforum.org/t/how-is-the-p2p-network-implemented-in-celaut/5154)
> **Category:** Uncategorized | **Created:** 2025-05-12 | **Posts:** 1 | **Views:** 44

**Related concepts:** Addresses, Box, ErgoScript context, Full node

---

### Post #1 — @jossemii (2025-05-12)

## How is the P2P Network Implemented in Celaut?

The P2P network in Celaut is implemented through three main components:

### 1. Transport and Communication

* A custom protocol called [`bee-rpc`](https://github.com/bee-rpc-protocol/bee-rpc) is used, built on top of `gRPC` and `HTTP/2`.
* Services (full specification and metadata) are transmitted in `chunks` using bidirectional `Protobuf` streaming, which is a widely used, simple binary serialization system.
* To optimize bandwidth, services are sent in chunks, and groups of chunks can be marked as blocks, which have identifiers and a hash. The receiver checks whether it already has the corresponding block using the hash; if so, it instructs the sender to skip all chunks belonging to that block.
* The protocol is minimalist, with no built-in retries, integrity checks, or version control.
* The receiving node decides which parts of the service to load into memory and which to write to disk.

### 2. Identification, Querying, and Service Requests

* **Identification:** A service is defined by its full specification ([API, container, and networks](https://github.com/celaut-project/paradigm?tab=readme-ov-file#how-a-service-is-specified)). It is uniquely identified by computing multiple `hashes` over the entire specification. Each identifier is a tuple `(Algorithm ID, hash value)`, where the algorithm ID is `hash(hash(empty_value))`. Metadata includes all generated `hashes` and optionally reputation proofs.
* **Cost Query:** To request the execution of a service on a node, the hashes are sent first and, if the receiver does not abort the transmission, the complete specification is sent via an `RPC` call. This call returns the initial and maintenance cost to run an instance. The receiving node may forward this query (including the service) to other nodes without the original requester knowing, enabling cost discovery across the network without direct connection to all peers.
* **Query Optimization (Optional):** Some nodes may have policies to handle cost queries by sending only the service identifiers (`hashes`) instead of the full specification to save bandwidth in this initial phase. This means the receiving nodes must explicitly request the full service specification using only the identifiers.
* **Execution Request:** Once the costs of different nodes are known, one is chosen for execution (or the service is executed locally). Another `RPC` call is made to the chosen node, sending again the hashes and, if not stored previously, the complete service specification.
* **Explicit Specification Request:** Nodes have a mechanism (another `RPC` function) to request the complete service specification from their peers using the identifiers (`hashes`). Obtaining the specification this way may incur a cost, but it can be useful if there’s demand for the service and the full specification hasn’t been received yet.

### 3. Peer Introduction (Discovery)

* **Manual Connection:** The `connect <ip:port>` command is used. Nodes exchange information about supported interfaces (e.g., `bee-rpc`), payment gateways (e.g., `Ergo` addresses), capabilities (`CPU`, `RAM`), and their own reputation proofs. It is important to note that the list of available services is not shared in this initial exchange.
* **Reputation-Based Automatic Discovery:** Nodes publish their reputation (self-opinions and opinions about others) on the Ergo blockchain. Clients search for and automatically connect to nodes filtered by this reputation. The publication frequency is configurable. It’s important to understand that each reputation proof is an entirely independent box—there are no central boxes controlling a global state or anything similar. More info about reputation [here](https://github.com/reputation-systems/sigma-reputation-panel).

---

[Previous post](https://www.ergoforum.org/t/how-are-computations-metered-and-pricing-determined-on-celaut/5140)
