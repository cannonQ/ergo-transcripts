---
title: A trustless timestamping service for boxes
description: 'ErgoForum discussion: A trustless timestamping service for boxes'
tags:
- addresses
- box
- data-input
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- kiosk
- minimum-transaction-fee
- native-tokens
- oracle-pools
- registers
- scorex
- sigma-protocols
- storage-rent
- token-id-rule
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/a-trustless-timestamping-service-for-boxes/432
created: '2020-10-18'
last_activity: '2020-10-21'
posts_count: 9
views: 1366
likes: 18
glossary_hits:
- Addresses
- Box
- Data input
- Ergo Explorer
- ErgoScript
- ErgoScript context
- ErgoTree
- Kiosk
- Minimum transaction fee
- Native tokens
- Oracle pools
- Registers
- Scorex
- Sigma protocols
- Storage rent
- Token ID rule
- Transaction
---

# A trustless timestamping service for boxes

> **Forum thread:** [https://ergoforum.org/t/a-trustless-timestamping-service-for-boxes/432](https://ergoforum.org/t/a-trustless-timestamping-service-for-boxes/432)
> **Category:** Uncategorized | **Created:** 2020-10-18 | **Posts:** 9 | **Views:** 1366

**Related concepts:** Addresses, Box, Data input, Ergo Explorer, ErgoScript, ErgoScript context, ErgoTree, Kiosk, Minimum transaction fee, Native tokens, Oracle pools, Registers, Scorex, Sigma protocols, Storage rent, Token ID rule, Transaction

---

### Post #1 — @scalahub (2020-10-18)

The following post describes a trustless timestamping service.

**Motivation:**

The Ergo protocol currently has “expected height” as an integer field in R3 (accessed as `creationInfo._1`), which must be less than or equal to the actual height at which the box was created.

It is important for smart contract developers to realize that this value in R3, say **x**, does not give the actual height at which the box was created but rather it gives a range (**x** to **now**) during which the box could have been created.

Thus, if we want to verify that `box` was created **after** a height **x**, we can use the condition `box.creationInfo._1 >= x`, which will be true only if the box was indeed created at or after height **x**.

On the other hand, if we want to check that `box` was created **before** height **x**, we cannot use `box.creationInfo._1 <= x`, because even a box that gets mined **now** could have set `creationInfo._1` equal to `x`.

A future version of Ergo may add the actual inclusion height into the box (see this [issue](https://github.com/ergoplatform/ergo/issues/1214)).

However, until then we need an alternative to decide if a box has obtained a certain number of confirmations.

For this, the timestamping service is proposed. This is a trustless 3rd party service on the Ergo blockchain that allows anyone to use this to reliably timestamp a box. Let Alice be the service provider, who may earn some profits but cannot cheat.

The service consists of two types of boxes

1. A **master** box that contains a large number of tokens **t** and this can only be used to generate a **timestamp emission box** containing 1000 **t** tokens.  
   The other output must be a copy of this box with the remaining number of tokens and the same number of Ergs.
2. A large number of **timestamp emission** boxes with below script:

   * If Alice is spending that she may withdraw any amount of *Ergs only* ensuring that min storage rent is kept. The output must be an identical box with the same number of tokens
   * Otherwise, anyone can spend to timestamp another box **b** provided as data input. The output will be a **timestamp box** with an unspendable script (example `false`) and the following:
     + The boxId of **b** in R4
     + The HEIGHT in R5
     + One **t** token locked in the first index.
     + Some min number or Ergs that allow the timestamp box to remain in UTXO set for few years (or decades, depending on application).

The script in the timestamp emission box may require the spender to pay some Ergs as a “fee” that Alice could later claim.

Then anyone can use the token id **t** as a generic timestamping token without much extra code as follows:

```ergoscript
val timestampBox = CONTEXT.dataInputs(0)
val timestamp = timestampBox.R5[Int].get
val timestampBoxId = timestampBox.R4[Coll[Byte]].get
val token = timestampBox.tokens(0)._1

box.id == timestampBoxId && timestamp <= x &&  token == t
```

The above will be true only if `box` was created at or before height **x**

One thing we need to ensure that that all **t** tokens are locked up in such boxes. This can be done off chain before I write my contract… The easiest way is to check that the transaction that created the tokens stored all of them in a single **master** box.  
There are probably some ways to verify this on chain (topic for future research).

---

### Post #2 — @robert (2020-10-19)

Ah, pretty cool.

So if I understand this correctly, when you spend the timestamp emission box you must put the current height in R5. This would mean that if a miner doesn’t include your tx in a block, you have to recreate a new tx right? I guess this would require off-chain code that ensures the tx gets accepted/recreates + reposts if not.

Hmm, wouldn’t it potentially be a better service from an end-user perspective if the timestamping was automatic? So rather than people creating their own timestamp boxes, we effectively reuse the epoch structure from oracle pools and have a service which posts timestamped boxes with the exact current height (no buffer like in oracle pools).

This service then has one or more timestamp emission boxes, and anyone can spend one of these emissions boxes to withdraw a token if they use the time stamp epoch box as a data-input and take the HEIGHT value and put it in a register of their protocol UTXO.

This would move the burden of ensuring the current height gets included in R5 off the end-user which is a bit better UX, but I guess does add a lot of complexity.

---

### Post #3 — @scalahub (2020-10-19)

Good point… A simpler solution would be what we had in oracle pools, that is, use a buffer (say 5 blocks) and modify the contract to accept if the HEIGHT is within the limits specified by the buffer.

Also a 3rd party website to take care of this will be useful…so we just submit a box and fee and get the timestamp after sometime

Regarding your other suggestion to use the “epoch structure”, not fully clear but it seems that in your model the emission box itself is “timestamped” and then we just spend that to get a timestamp for that epoch? Seems like an alternative approach… need a bit more details though

---

### Post #4 — @scalahub (2020-10-19)

[@robert](/u/robert) thinking more about the epoch structure, only thing is we would need someone to keep the “protocol” box up to date but that is not a major issue… Seems to be a good alternative

---

### Post #5 — @kushti (2020-10-19)

There’s another solution I can propose. Last 10 block headers are available in verification context via “CONTEXT.headers” variable. Thus timestamp emission box script can require something like `CONTEXT.headers.exists({ (h: Header) => h.height == timestampBox.R5[Int] })`  . Not sure ErgoScript supports Header datatype atm (ErgoTree does), need to check.

---

### Post #6 — @scalahub (2020-10-20)

The height of the last 10 headers is going to be `HEIGHT - 10, HEIGHT - 9, ..., HEIGHT - 1` so wouldn’t a simpler solution be to use current height and check that its within 10 units of `timestampBox.R5[Int].get`?

---

### Post #7 — @kushti (2020-10-20)

You’re right, that’s simpler indeed.

---

### Post #8 — @scalahub (2020-10-21)

Here is a basic implementation of the above

[github.com](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/kiosk/timestamp/v1/Timestamp.scala)

#### [scalahub/Kiosk/blob/master/src/test/scala/kiosk/timestamp/v1/Timestamp.scala](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/kiosk/timestamp/v1/Timestamp.scala)

```ergoscript
package kiosk.timestamp.v1

import kiosk.encoding.ScalaErgoConverters.{getAddressFromErgoTree, getStringFromAddress}
import kiosk.script.{KioskScriptCreator, KioskScriptEnv}
import scorex.crypto.hash.Blake2b256
import kiosk.ergo._

object Timestamp {

  val env = new KioskScriptEnv()
  val scriptCreator = new KioskScriptCreator(env)

  val buffer: Int = 5 // blocks
  val minStorageRent: Long = 1500000L

  val timestampScript = "sigmaProp(false)"
  val timestampErgoTree = scriptCreator.$compile(timestampScript)

  env.setCollByte("timestampScriptBytes", timestampErgoTree.bytes)
```

This file has been truncated. [show original](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/kiosk/timestamp/v1/Timestamp.scala)

I used a buffer period of 5 blocks which allows for delays

Please review the code. If all ok, I’ll launch the service with some tokens.

---

### Post #9 — @scalahub (2020-10-21)

The timestamping service has been launched.

The final contract has been tweaked a bit:

1. There is no timestamping fee and the service is free. Spender just has to pay tx fee
2. There is a buffer of 5 blocks, so the timestamp must be considered to have an error margin of 5

Please see [this page](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/kiosk/timestamp/v1/Timestamp.scala) for the contracts actually used.

## Overview

The timestamp is a proof to the claim that a box with a given Id indeed existed on the blockchain at some height `h`. The proof works even after the box has been spent, as long as the timestamp remains in the blockchain (which is at least several years or more depending on how much storage rent was provided).

This has many applications:

1. It can emulate the `DEPTH` instruction
2. It can be used a notarisation service for an arbitrary document. Store the document in R4 of some box and then generate a timestamp of that box. The notarisation is valid even if the original box gets spent
3. DEX orderbooks to sort equal-rate orders by time (with a period to allow disputes)

## Bootstrap

The bootstrap tx for the master box is [this](https://explorer.ergoplatform.com/en/transactions/e8168c7baf17d5a53b4ecc78cf745d0aab9ffa1a9d19b85642daad3f33c7f226)

The master box address is `2vTQnMx5uFfFfJjL6ucuprpWSUeXHAqbyPLkW46DfMgw7ENGFbGBVPHJPVXwJWg5e1DdqPv28syDEJQGQy5vss2Wvh6Srrd98fSSTVfkEb5VcehCqhoGD8826imCkAfC2mDhGcTuYKcFvy4JrC8GoAbx6NZomHZAmESCL8QyQ2utraCF7TebrZGudEDehwho4AMQkq9oDkaVdyQ2NNuYQ8NwtQcBrfCZRFSGGeitPmnoCQgK8vQDxBifiQcW1avYexPYdb9CXHGT8EtKaRj5JXcqcuwwsXp5GXfG`

It can be checked that there are exactly 100000000000 tokens minted with id `dbea46d988e86b1e60181b69936a3b927c3a4871aa6ed5258d3e4df155750bea`

Based on the contracts and the above observation, we can conclude that if a box contains the above token id and has the address `4MQyMKvMbnCJG3aJ` (corresponding to the script `sigmaProp(false)`), then it is guaranteed that the box is a valid timestamp box.

## First emission box

The first “timestamp emission box” (or simply, the “emission box”) creation tx is [this](https://explorer.ergoplatform.com/en/transactions/7292dd18e83493df1541fa31fef701d6d5ab6647ab6d099b3abb9d6075ebcd06).

The timestamp emission box address is `2z93aPPTpVrZJHkQN54V7PatEfg3Ac1zKesFxUz8TGGZwPT4Rr5q6tBwsjEjounQU4KNZVqbFAUsCNipEKZmMdx2WTqFEyUURcZCW2CrSqKJ8YNtSVDGm7eHcrbPki9VRsyGpnpEQvirpz6GKZgghcTRDwyp1XtuXoG7XWPC4bT1U53LhiM3exE2iUDgDkme2e5hx9dMyBUi9TSNLNY1oPy2MjJ5seYmGuXCTRPLqrsi`

## First timestamp

The first timestamp was generated for box Id `d2b9b6536287b242f436436ce5a1e4a117d7b4843a13ce3abe3168bff99924a1` in [this transaction](https://explorer.ergoplatform.com/en/transactions/daec90ca59267eb25fc6cd4d898e457960bc1627e2e7453b7697defc816d6039)

Incidentally, this box was also spent in the same transaction that timestamped it (thus, Ergo allows us to have the same box both as a data input and normal input in a transaction)

The timestamp box Id is `b59ba88bb706439615bfe5035abcd6c248a027c70a82d4587d90350c15919191`. This has an unspendable script, so it should remain in the blockchain until garbage collected.

## How to use

In order to use timestamps the following code snippet should be used

```ergoscript
val box: Box = ... // some box whose timestamp is to be checked
val timestampBox = CONTEXT.dataInputs(0) 
val boxId = timestampBox.R4[Coll[Byte]].get
val token = timestampBox.tokens(0)._1
val script = timestampBox.propositionBytes

val validTimestamp = box.id == boxId && 
                     token == timestampToken &&
                     script == timestampScript

val timestamp = timestampBox.R5[Int].get
// use timestamp for any purpose, including DEPTH

validTimestamp && // other condition
```

The value of `timestampToken` is already given. The serialized hex of `timestampScript` is `10010100d17300` which corresponds to the address `4MQyMKvMbnCJG3aJ` and the script `sigmaProp(false)`.
