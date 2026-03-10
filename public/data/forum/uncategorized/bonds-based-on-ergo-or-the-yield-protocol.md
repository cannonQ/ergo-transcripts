---
title: Bonds based on Ergo (or the "Yield protocol")
description: 'ErgoForum discussion: Bonds based on Ergo (or the "Yield protocol")'
tags:
- box
- collateral
- ergoforum
- ergoscript
- ergoscript-context
- kiosk
- liquidation
- native-tokens
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/bonds-based-on-ergo-or-the-yield-protocol/128
created: '2019-11-09'
last_activity: '2021-05-07'
posts_count: 2
views: 2693
likes: 7
glossary_hits:
- Box
- Collateral
- ErgoScript
- ErgoScript context
- Kiosk
- Liquidation
- Native tokens
---

# Bonds based on Ergo (or the "Yield protocol")

> **Forum thread:** [https://ergoforum.org/t/bonds-based-on-ergo-or-the-yield-protocol/128](https://ergoforum.org/t/bonds-based-on-ergo-or-the-yield-protocol/128)
> **Category:** Uncategorized | **Created:** 2019-11-09 | **Posts:** 2 | **Views:** 2693

**Related concepts:** Box, Collateral, ErgoScript, ErgoScript context, Kiosk, Liquidation, Native tokens

---

### Post #1 — @scalahub (2019-11-09)

**EDIT**: Full code available [here](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/org/sh/kiosk/ergo/YieldProtocol.scala).

The following idea is motivated by the paper [“The Yield Protocol: On-Chain Lending With Interest Rate Discovery”](http://research.paradigm.xyz/Yield.pdf) which uses the Ethereum model.  
I think the same thing can be implemented in Ergo in a possibly easier way.

The following uses the idea of “zero-coupon bonds”, which are essentially tokens issued by a company at a discounted value (at 0.9 USD per token, for example) and redeemable at 1:1 rate after some future date.

While in the real world, such bonds are backed by the trust of the company that issues them, in Ergo, we can remove the trust and make the bonds backed by collateral in Ergs. The benefit for the issuer is the potential to profit if the price of Ergs goes up, and the benefit of the buyer is the potential to benefit if the price of ergs goes down, along with the trustless nature because of collateral that can be instantly liquidated in a margin call.

While the tokens are themselves exchangeable using only the contract that issued them, we can have another contract that functions as a decentralized exchange (DEX) on top that allows them to be fully fungible. This is a topic for another post.

The following describes a bond for a singler user, Alice.  
The bond is represented using two boxes. The first is a “bond box”, which stores the tokens used as the bond, along with the collateral in Ergs. The second is a “liquidated box”, that stores the collateral in Ergs after the bond box is liquidated. A box is liquidated either when the bond expires or in the event of a margin call. Alice can prevent a margin call by topping up the box with Ergs. This is one place where “trust” comes into the picture; if people trust Alice to top up the box, then her tokens can potentially be valued higher. However, since we can instantly liquidate the box and then purchase new tokens (at a possibly discounted rate) this is not a major issue.

Since the bond box references the liquidated box, we describe the latter first.

```ergoscript
{ // liquidatedBoxSource
  val bondOwner = proveDlog(alice)

  val fixedRate = SELF.R4[Long].get // nanoErgs per usdCent at time of liquidation
  val maxRedeemTime = SELF.R5[Int].get

  val tokenID = SELF.tokens(0)._1 // tokenID that maps to bonds
  val tokenNum = SELF.tokens(0)._2 // how many bond tokens left

  val newBox = OUTPUTS(0)
  val newBoxTokenID = newBox.tokens(0)._1
  val newBoxTokenNum = newBox.tokens(0)._2 // how many bond tokens left
  val bondDiff = newBoxTokenNum - tokenNum
  val ergsDiff = SELF.value - newBox.value
  
  val validNewBox = newBox.propositionBytes == SELF.propositionBytes &&
                    newBoxTokenID == tokenID &&
                    bondDiff >= 10000 && // at least 100 USD difference (prevent micro tx)
                    ergsDiff <= bondDiff * fixedRate &&
                    newBox.R4[Long].get == fixedRate &&
                    newBox.R5[Int].get == maxRedeemTime
  
  (bondOwner && 
    (HEIGHT > maxRedeemTime)
  ) || validNewBox
}
```

The bond box is defined using the script:

```ergoscript
{ // bondBoxSource
  val numBonds = SELF.R4[Long].get // how many bonds issued (one bond = 1 USD cent)
  val tokenID = SELF.tokens(0)._1 // tokenID that maps to bonds
  val tokenNum = SELF.tokens(0)._2 // how many bond tokens left
  
  val newBox = OUTPUTS(0)
  val newBoxTokenID = newBox.tokens(0)._1
  val newBoxTokenNum = newBox.tokens(0)._2 // how many bond tokens left
  val validNewBoxToken = tokenID == newBoxTokenID
  
  val rateBox = CONTEXT.dataInputs(0)
  val rate = rateBox.R4[Long].get // nanoErgs per usdCent
  val validRateBox = rateBox.tokens(0)._1 == rateTokenID
  
  val lockedErgs = SELF.value // nanoErgs
  val neededErgs = numBonds * rate
  
  val insufficientErgs = lockedErgs * 10 >= neededErgs * 11  // at least 10 percent margin
  
  if (HEIGHT > endHeight || insufficientErgs) {
     // bond ended or margin call
     blake2b256(newBox.propositionBytes) == liquidatedBoxScriptHash &&
     validNewBoxToken && newBoxTokenNum == tokenNum &&
     newBox.R4[Long].get == rate &&
     newBox.R5[Int].get >= HEIGHT + withdrawDeadline
  } else {
     // purchase bonds
     val numTokensReduced = tokenNum - newBoxTokenNum
     val numNewBonds = newBox.R4[Long].get
     val numBondsIncreased = numNewBonds - numBonds
     val ergsIncreased = newBox.value - SELF.value
  
     val validErgsIncrease = ergsIncreased >= numBondsIncreased * rate
  
     newBox.propositionBytes == SELF.propositionBytes &&
     numBondsIncreased >= minBondsToPurchase &&
     numBondsIncreased == numTokensReduced &&
     validErgsIncrease &&
     numNewBonds <= maxBonds
  }
}
```

The environment variables used above are:

1. `rateOracleTokenID` is id of oracle that publishes rate
2. `alice` is a group element representing issuer pub key
3. `liquidatedBoxScriptHash` is hash of liquidated box script
4. `maxBonds` is maximum number of bonds to be issued. Note that one bond is equivalent to 1 USD cent.
5. `minBondsToPurchase` is minimum number of bonds in one purchase
6. `endHeight` is height at which the bond expires (and can be redeemed)
7. `withdrawDeadline` is the minimum amount issuer must wait after liquidation before he can keep the balance.

---

### Post #2 — @Snowman (2021-05-07)

Anyone want to put this on catalyst to help get funding and afford more devs to help progress it?
