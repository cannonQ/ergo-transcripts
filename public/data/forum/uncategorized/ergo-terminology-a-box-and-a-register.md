---
title: 'Ergo terminology: a Box and a Register'
description: 'ErgoForum discussion: Ergo terminology: a Box and a Register'
tags:
- box
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- native-tokens
- registers
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-terminology-a-box-and-a-register/32
created: '2019-07-11'
last_activity: '2020-06-21'
posts_count: 2
views: 2240
likes: 5
glossary_hits:
- Box
- ErgoScript
- ErgoScript context
- ErgoTree
- Native tokens
- Registers
- Transaction
---

# Ergo terminology: a Box and a Register

> **Forum thread:** [https://ergoforum.org/t/ergo-terminology-a-box-and-a-register/32](https://ergoforum.org/t/ergo-terminology-a-box-and-a-register/32)
> **Category:** Uncategorized | **Created:** 2019-07-11 | **Posts:** 2 | **Views:** 2240

**Related concepts:** Box, ErgoScript, ErgoScript context, ErgoTree, Native tokens, Registers, Transaction

---

### Post #1 — @kushti (2019-07-11)

Ergo has Bitcoin-like UTXO transactional model: a transaction is spending one-time objects and creating new one-time objects. We call this object a box. A box is immutable object which could be only created or removed. A box is not simply a coin, rather, it is contains registers with data (and code). Even more, there’s nothing in box but registers. There are four predefined registers, with monetary value, protecting script, and identifier of a transaction which created the box and output index in the transaction (and also creation height). Because data of transaction which created the box is included into it, the box has unique contents and thus unique id. A box is first-class citizen in the Ergo protocol. Active boxes set is authenticated via a hash-based data structure, which allows to build lightweight full-nodes (as described in <https://eprint.iacr.org/2016/994>). A box may have up to six additional registers with typed data. A script may access its registers (as well as registers of input and output boxes of the spending transaction).

Example of a box (proof-of-no-premine from Ergo genesis state, which contains last block ids from Bitcoin and Ethereum at the moment of launch, and also latest news headlines):

```ergoscript
 {
"boxId": "b8ce8cfe331e5eadfb0783bdc375c94413433f65e1e45857d71550d42e4d83bd",
"value": 1000000000,
"ergoTree": "10010100d17300",
"assets": [],
"creationHeight": 0,
"additionalRegisters": {
  "R5": "0e42307864303761393732393334363864393133326335613261646162326535326132333030396536373938363038653437623064323632336337653365393233343633",
  "R6": "0e464272657869743a20626f746820546f727920736964657320706c617920646f776e207269736b206f66206e6f2d6465616c20616674657220627573696e65737320616c61726d",
  "R8": "0e45d094d0b8d0b2d0b8d0b4d0b5d0bdd0b4d18b20d0a7d0a2d09fd09720d0b2d18bd180d0b0d181d182d183d18220d0bdd0b02033332520d0bdd0b020d0b0d0bad186d0b8d18e",
  "R7": "0e54e8bfb0e8af84efbc9ae5b9b3e8a1a1e38081e68c81e7bbade38081e58c85e5aeb9e28094e28094e696b0e697b6e4bba3e5ba94e5afb9e585a8e79083e58c96e68c91e68898e79a84e4b8ade59bbde4b98be98193",
  "R4": "0e4030303030303030303030303030303030303031346332653265376533336435316165376536366636636362363934326333343337313237623336633333373437"
}
```

}

I’m currently working on API methods to get a box representation in JSON or binary form, and also genesis boxes: <https://github.com/ergoplatform/ergo/pull/835>

---

### Post #2 — @scalahub (2020-06-21)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> predefined registers, with monetary value, protecting script, and identifier of a transaction which created the box and output index in the transaction (and also creation height).

Slight correction here:  
R0 = monetary value  
R1 = protecting script  
R2 = tokens <— this was missed  
R3 = identifier of a transaction which created the box and output index in the transaction (and also creation height).
