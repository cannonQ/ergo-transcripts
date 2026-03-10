---
title: Ergo Mainnet 4.0.0 Release - Please update your nodes
description: 'ErgoForum discussion: Ergo Mainnet 4.0.0 Release - Please update your
  nodes'
tags:
- announcements
- autolykos
- difficulty-adjustment
- ergoforum
- ergotree
- full-node
- sigmastate-interpreter
- soft-fork
- transaction
category: forum
forum_category: Announcements
source: ergoforum
source_url: https://ergoforum.org/t/ergo-mainnet-4-0-0-release-please-update-your-nodes/553
created: '2021-01-18'
last_activity: '2021-01-18'
posts_count: 1
views: 784
likes: 1
glossary_hits:
- Autolykos
- Difficulty adjustment
- ErgoTree
- Full node
- Sigmastate interpreter
- Soft fork
- Transaction
---

# Ergo Mainnet 4.0.0 Release - Please update your nodes

> **Forum thread:** [https://ergoforum.org/t/ergo-mainnet-4-0-0-release-please-update-your-nodes/553](https://ergoforum.org/t/ergo-mainnet-4-0-0-release-please-update-your-nodes/553)
> **Category:** Announcements | **Created:** 2021-01-18 | **Posts:** 1 | **Views:** 784

**Related concepts:** Autolykos, Difficulty adjustment, ErgoTree, Full node, Sigmastate interpreter, Soft fork, Transaction

---

### Post #1 — @Martin-mx (2021-01-18)

[Release Ergo Protocol Reference Client 4.0.0 · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/releases/tag/v4.0.0)

**This 4.0.0 release represents “The Hardening” protocol upgrade and thus contains breaking changes!** .

The Hardening protocol upgrade will be activated on block # 417,792. Initial difficulty for the block is set to “6f98d5555555” (in hex), which is corresponding to ~ 1TH/s hashrate.

# Major changes

* Autolykos 2 PoW scheme. It has non-outsourceability being switched off, table size growing with time, possible memory optimizations fixed.
* Merkle tree of transactions now also committing to transaction witnesses (a SegWit-like construction).
* possibility to enhance header structure via velvet forks added

Also, sigma-interpreter (ErgoTree interpreter) dependency updated to 4.0. Full details: [ScorexFoundation/sigmastate-interpreter#712](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/712) , most important for the Ergo protocol are:

* activatedScriptVersion field added to execution context (ErgoLikeContext)
* ErgoTree interpreter is now skipping validation for scripts if activated script version is higher than interpreter supports (so old nodes are skipping validation on soft-forks when 90+% mining power activated the ErgoTree upgrade). See changes in Interpreter.verify()
* v4.0 can support AOT -> JIT switch as v5.0 soft-fork

# Upgrade Notes

**Upgrade from 3.3.4 and on** - just replace old jar with the new one.  
**3.3.0 - 3.3.3** - full resync is needed for MacOS X (leave /wallet/keystore folder where encrypted seed is stored). Also, please see upgrade notes for 3.3.4 if you are restoring pre-3.3.4 mnemonic [Release Ergo Protocol Reference Client 3.3.4 · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/releases/tag/v3.3.4)  
**3.2.x** - unlock wallet on the first 4.0.0 node run and do wallet rescan with /wallet/rescan API call  
**3.0.x && 3.1.x** - full resync is needed (leave /wallet/keystore folder where encrypted seed is stored)

[Release Ergo Protocol Reference Client 4.0.0 · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/releases/tag/v4.0.0)
