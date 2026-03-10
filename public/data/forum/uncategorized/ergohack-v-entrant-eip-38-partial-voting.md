---
title: 'ErgoHack V Entrant: EIP 38 - Partial Voting'
description: 'ErgoForum discussion: ErgoHack V Entrant: EIP 38 - Partial Voting'
tags:
- eip
- ergoforum
- ergohack
- full-node
- storage-rent
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergohack-v-entrant-eip-38-partial-voting/4002
created: '2022-10-03'
last_activity: '2022-10-04'
posts_count: 3
views: 352
likes: 3
glossary_hits:
- EIP
- ERGOHACK
- Full node
- Storage rent
- Transaction
---

# ErgoHack V Entrant: EIP 38 - Partial Voting

> **Forum thread:** [https://ergoforum.org/t/ergohack-v-entrant-eip-38-partial-voting/4002](https://ergoforum.org/t/ergohack-v-entrant-eip-38-partial-voting/4002)
> **Category:** Uncategorized | **Created:** 2022-10-03 | **Posts:** 3 | **Views:** 352

**Related concepts:** EIP, ERGOHACK, Full node, Storage rent, Transaction

---

### Post #1 — @WilfordGrimley (2022-10-03)

As I mentioned in [this incubator post](https://discord.com/channels/668903786361651200/1025087028439814216), my team aims to explore the ramification of enabling partial voting, so that stratum pools (and future decentralised pools) can grant further power to their miners. For anyone with discord, please click through the the post to see my proposal that includes my motivations. For anyone without, let me know and I can upload the pdf somewhere.

My goals at the moment are:

* To determine how different methods of implementation, and levels of accuracy in vote reporting effect the block header size and the negative effects that would have on light clients (and potential benefits i.e. storage rent)
* Determine any risks to such a change.
* Find out what parts of the Ergo Node are actually involved in governance. The documentation I have looked over does not make it clear how the voting method itself can be changed via hardfork. (I expect the scanner is what I should be looking through, but I do not have a developer background, so parsing the code is a challenge for me)
* Build upon Cheese Enthusiast, AllCloudy, and ÅrÖhBê’s work on Smart Pools to produce at least one solution on the pool side that is compatible with the upgrade.  
  Ideally, explore a secondary solution also so that traditional stratum pool operators have an alternative to SmartPools that enable them to allow their miners governance.
* Work with a few pool operators to see how difficult it would be for them to make use of this change. (As I mentioned above, GetBlok’s smartpools can already do this, but not every pool operator is willing to use them, and if everyone is using the same stratum it is a security risk)
* Once I have solutions on the network and pool side I intend to spin up the testnet and test, test, test.

I welcome any discussion on this topic! ![:smile:](https://emoji.discourse-cdn.com/twitter/smile.png?v=12 ":smile:")

Do you see a need for such a change?

Do you have any questions about my proposal?

Can anyone point me in the right direction regarding any of the things I am researching above?

---

### Post #2 — @WilfordGrimley (2022-10-04)

A solution has been found that does not require any forking.

**No EIP required, rejoice!**

Using subpools and some hosting software like klubernetes we can create smart pools where miners can sign transactions to create or join subpools that match their voting preference.

When a miner indicates their intention to join such a subpool, if a matching subpool does not yet exist an ergo node is spun up and deployed and the subpool pointed toward the node with the matching voting parameters.

To reduce disincentive to voting against the majority, the parent smartpool and it’s daughter pools calculate shares for miner payment globally, and when any pool mines a block the smartpool and it’s subpools split the rewards according to their contribution.

In this way, miners can vote exactly how they like for both foundational and everyday changes, while also supporting other miners in their parent pool even if they do not agree on the changes to the network. This means that miners can earn consistent rewards as they can in a traditional pool, but they do not have to forgo governance power.

---

### Post #3 — @Muppensish (2022-10-04)

Great to see!  
I’ll be looking forward to hearing more about this implementation in the future.
