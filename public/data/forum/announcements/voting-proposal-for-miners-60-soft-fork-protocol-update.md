---
title: 'Voting proposal for miners: 6.0 soft-fork protocol update'
description: 'ErgoForum discussion: Voting proposal for miners: 6.0 soft-fork protocol
  update'
tags:
- addresses
- announcements
- eip
- ergoforum
- ergoscript-context
- ergotree
- full-node
- soft-fork
- sub-blocks
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/voting-proposal-for-miners-6-0-soft-fork-protocol-update/5157
created: '2025-05-27'
last_activity: '2025-05-27'
posts_count: 1
views: 273
likes: 6
glossary_hits:
- Addresses
- EIP
- ErgoScript context
- ErgoTree
- Full node
- Soft fork
- Sub-blocks
---

# Voting proposal for miners: 6.0 soft-fork protocol update

> **Forum thread:** [https://ergoforum.org/t/voting-proposal-for-miners-6-0-soft-fork-protocol-update/5157](https://ergoforum.org/t/voting-proposal-for-miners-6-0-soft-fork-protocol-update/5157)
> **Category:** Announcements | **Created:** 2025-05-27 | **Posts:** 1 | **Views:** 273

**Related concepts:** Addresses, EIP, ErgoScript context, ErgoTree, Full node, Soft fork, Sub-blocks

---

### Post #1 — @kushti (2025-05-27)

Dear miners!

First of all, thanks for supporting the network during the six years past the mainnet launch, lets continue altogether this amazing journey to providing powerful unstoppable financial tooling to everyone, hopefully joyful and profitable for miners as well.

We, developers, continue to make updates to the protocol (but only soft ones), reference client, libraries and infrastructure. Among them, most important recent and upcoming updates for miners are:

* recently released [reference client 5.0.26](https://github.com/ergoplatform/ergo/releases/tag/v5.0.26) is introducing periodic rebuilding of block candidate (every 60 sec by default). Please check how can new behavior affect your infrastructure (in our imagination should be good always).
* 6.0 client is ready, only voting height is not set, and it depends on miners! See below.
* Early sub-blocks devnet is launched, update to sub-blocks will be about soft-fork update, somewhere in the second half of 2025. EIP is coming, current draft can be found at <https://github.com/ergoplatform/ergo/pull/2055/files#diff-1486bd567ce1b0f024d158c212eb5be9769407f8c79baa0deca66893e0f37ec2R1>

## 6.0 update and voting

To the moment, ErgoTree features are still the same as of mainnet launch (July, 2019), with only JIT costing replacing AOT introduced in 5.0 soft-fork, along with minimal changes.

Within five years after mainnet launch, developers found many ways to improve expressiveness of scripts and make efficiently things which can be implemented in non-trivial ways only now. Some issues were found as well (happily, nothing critical). And finally, there are some features planned during Ergo testnets even (2018-19) but not landed in the mainnet.

To address developers’ feedback, and also fix known issues, we are proposing a soft-fork (with existing nodes validating scripts with old features and skipping scripts with new features, pretty much like e.g. SegWit update in Bitcoin).

Details may be found [in the EIP draft](https://github.com/ergoplatform/eips/pull/100/files#diff-d571937e809dd775e6c1efc368f07e6503a7bd4ffa818efe3800bab9c0554481).

As with previous protocol updates, for 6.0 activation 90+% hashrate support for 32 epochs (~45.5 days) since the beginning of voting is needed. To vote for the update, there is need to set certain parameter in config and then the node will start voting automatically at a predefined block height.

**Dear miners (pool operators), please tell (here or via private channels) when can you update the nodes to 6.0 (which is including 5.0.26 as well with regular block candidate regeneration), based on that voting height will be set, the current plan is to set it around June 15th-25th.**
