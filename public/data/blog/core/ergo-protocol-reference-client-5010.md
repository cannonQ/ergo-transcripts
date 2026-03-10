---
title: 'Ergo Protocol Reference Client 5.0.10

  '
date: '2023-05-09'
author: Ergo Platform
tags:
- bootstrapping
- box
- core
- ergo-blog
- ergoscript
- ergotree
- full-node
category: blog
blog_tag: Core
type: news
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Ergo-Protocol-Reference-Client-5.0.10
glossary_hits:
- Bootstrapping
- Box
- ErgoScript
- ErgoTree
- Full node
---

# Ergo Protocol Reference Client 5.0.10


> **Published:** 2023-05-09 | **Author:** Ergo Platform | **Tag:** Core | **Type:** news

*With each subsequent Protocol Reference Client update, the Ergo Platform continues to improve blockchain efficiency. The release of Reference Client 5.0.10 presents significant upgrades, offering several advancements and bug fixes to the node client. *

**Related concepts:** Bootstrapping, Box, ErgoScript, ErgoTree, Full node

---

### What’s New in Ergo Protocol Reference Client 5.0.10?

The new reference client provides important updates to the bootstrapping process, additional indexes, a new API method, and more. 

Bootstrapping is the process whereby the reference client is set up on one’s computer. Since bootstrapping can oftentimes be a time consuming procedure, the new update saves time by taking a snapshot of all of the unspent coins in a UTXO set. This snapshot allows the client to start up without having to do everything from scratch, thereby greatly improving the efficiency and speed of this process. 

The new reference client has also been updated with a new API method that allows users to obtain their private key bytes for a particular public key. This feature is only accessible if the user's wallet has the private key and is unlocked.

Additional updates include improved efficiency with the ErgoTree interpreter and Ergoscript compiler. Furthermore, fixes in additional indexes have been made - this includes fixes in paging for blockchain endpoints. 

For the complete breakdown on the updates in Ergo Protocol Reference Client 5.0.10, please consult the open source [GitHub](https://github.com/ergoplatform/ergo/releases/tag/v5.0.10).
