---
title: 6.0 Soft-Fork Proposal
description: 'ErgoForum discussion: 6.0 Soft-Fork Proposal'
tags:
- addresses
- autolykos
- context-extension
- difficulty-adjustment
- eip
- ergoforum
- ergoscript
- ergotree
- registers
- soft-fork
- state-machine
- sub-blocks
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/6-0-soft-fork-proposal/5005
created: '2024-11-25'
last_activity: '2024-11-25'
posts_count: 1
views: 884
likes: 8
glossary_hits:
- Addresses
- Autolykos
- Context extension
- Difficulty adjustment
- EIP
- ErgoScript
- ErgoTree
- Registers
- Soft fork
- State machine
- Sub-blocks
---

# 6.0 Soft-Fork Proposal

> **Forum thread:** [https://ergoforum.org/t/6-0-soft-fork-proposal/5005](https://ergoforum.org/t/6-0-soft-fork-proposal/5005)
> **Category:** Uncategorized | **Created:** 2024-11-25 | **Posts:** 1 | **Views:** 884

**Related concepts:** Addresses, Autolykos, Context extension, Difficulty adjustment, EIP, ErgoScript, ErgoTree, Registers, Soft fork, State machine, Sub-blocks

---

### Post #1 — @kushti (2024-11-25)

This thread is for discussing proposed 6.0 soft-fork before miners voting (reminder, 90+% of hashrate support over 32 epochs 1024 blocks each (~ 1.5 months) is needed for activation)

## Motivation

To the moment, ErgoTree features are still the same as of mainnet launch (July, 2019), with only JIT costing replacing  
AOT introduced in 5.0 soft-fork, along with minimal changes.

Within five years after mainnet launch, developers found many ways to improve expressiveness of scripts and make  
efficiently things which can be implemented in highly non-trivial way now. Some issues were found as well (happily, nothing critical).  
And finally, there are some features planned during Ergo testnets even (2018-19) but not landed in the mainnet.

To address developers’ feedback, and also fix known issues, we are proposing a soft-fork (  
with existing nodes validating scripts with old features and skipping scripts with new features) in this document.

Also, we propose to relax voteable parameters validation to support introducing new parameters to vote via soft-forks or  
even velvet forks. Also, we propose to add new blockchain parameter to vote since 6.0, namely, number of sub-blocks  
per blocks, to enhance upcoming sub-blocks implementation. This change is done in soft-fork way also, by disabling soft-forkable rule #215 via  
miners voting.

## Main Changes

The biggest proposed changes are:

* new UnsignedBigInt type, unsigned 256-bits integers tailored for cryptographic applications, with modular arithmetics
* support for serialization and deserialization in the scripts for all the existing types (including composite,  
  such as collection of optional block headers, `Coll[Option[Header]]` in ErgoScript)
* support for serialization and deserialization of instances of Option and Header types. It allows to store them in  
  register or context extension variables. Also, constructors for Option instances (`Global.some[T]()` and `Global.none[T]`  
  methods for any type `T`). Also, support for serialization and deserialization of SFunc type, which is providing  
  support for higher-order functions
* support for conversion from nbits-encoded number to big integer and back, to provide support to check difficulty for  
  Ergo (and Bitcoin) headers efficiently. Examples for checking PoW for Ergo and Bitcoin headers can be found in 6.0  
  tests.
* new methods to check proof of work for Ergo header (header.checkPow), and also to check PoW for custom variant of  
  Autolykos2 algorithm for arbitrary message
* possibility to read context variable from another input (useful to obtain state transition for a companion input)
* methods support for `Byte`, `Short`, `Int`, `Long` types, more methods for all the numeric types (`.toBytes`, `.toBits`,  
  `.shiftLeft`, `.shiftRight`, `bitwiseOr`, `bitwiseAnd`, `bitwiseXor` etc)
* more collection methods (`.get` to optionally get element if a collection contains it, `reverse`, `distrinct`,  
  `startsWith`, `endsWith`)

And also:

* possibility to propose voting for parameters not known to protocol client. It allows for introducing new voteable  
  parameters via soft or even velvet-forks
* new voteable parameter, number of sub-blocks per block (for further sub-blocks implementation)

To get implementation details , check EIP-50 draft @ [[WIP] EIP-50 - 6.0 Soft-Fork by kushti · Pull Request #100 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/100)
