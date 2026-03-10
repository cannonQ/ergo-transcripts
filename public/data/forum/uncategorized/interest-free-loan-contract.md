---
title: Interest-Free Loan Contract
description: 'ErgoForum discussion: Interest-Free Loan Contract'
tags:
- box
- collateral
- ergoforum
- ergoscript
- ergoscript-context
- kiosk
- native-tokens
- singleton-/-state-nft
- token-id-rule
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/interest-free-loan-contract/67
created: '2019-08-25'
last_activity: '2021-04-13'
posts_count: 3
views: 3453
likes: 13
glossary_hits:
- Box
- Collateral
- ErgoScript
- ErgoScript context
- Kiosk
- Native tokens
- Singleton / State NFT
- Token ID rule
- Transaction
---

# Interest-Free Loan Contract

> **Forum thread:** [https://ergoforum.org/t/interest-free-loan-contract/67](https://ergoforum.org/t/interest-free-loan-contract/67)
> **Category:** Uncategorized | **Created:** 2019-08-25 | **Posts:** 3 | **Views:** 3453

**Related concepts:** Box, Collateral, ErgoScript, ErgoScript context, Kiosk, Native tokens, Singleton / State NFT, Token ID rule, Transaction

---

### Post #1 — @kushti (2019-08-25)

This example is motivated by rising popularity of over-collateralized loans. BlockFi startup just raised $18M from VCs to do them. However, Ergo is more about people and small ventures doing simpler business because of simple templatized contracts.

Let’s assume that Alice has mined some Ergs. She is not willing to sell them. But she wants to buy more GPU cards (to mine Ergo, for sure), and she needs for, say, Euros for that. For example, she is willing to borrow 10K Euros. So she is willing to use Ergs as collateral.

While borrowing in fiat using a cryptocurrency for collateral is not new thing and there are services for that, I am going to show a new scheme for that. Also in our example the loan will be interest-free.

## The Borrowing Process

Alice and Bob can avoid a trusted arbiter if they meet in person, or if they somehow have fiat micropayments (so they can have payment-channel like construction to fund the loan incrementally). Otherwise, some trusted arbiter is needed. In any case, Alice and Bob creates a box which contains Alice’s collateral and also newly issued “loan tokens”, where 1 token = 1 unit of a loan currency. For example, assume that Alice is borrowing 10,000 Euros, then the box contains 10,000 loan tokens. Assume that market price now is about 10 Euro per 1 Ergo, then full collateral is about 1,000 Erg. However, the loan should be over-collateralized to avoid margin call in case of Ergo price decline. For example, assume than the collateral is about 1,200 Ergs.

Please note that Ergo/Euro price is needed for the contract, thus the contract is using a pricing oracle, and the oracle singleton token identifier is known in advance.

Also please note that the loan is interest-free.

## Paying Off The Loan

Alice is paying off periodically, for example, 200 Euro per month. To record the payment on the blockchain, Alice and Bob are co-signing a transaction which creates a box with reduced loan tokens amount.

## Ergo Price Is Going Up

As stated above, the load is interest-free. Then, how Bob can be incentivized in giving his money to Alice? Well, there is resource Alice has, namely, Ergs, so Bob can profit from co-riding the Ergs in case the price is going up. For our example, assume that the Ergo price had been surged almost immediately after loan contract being started, so before the first payment. Assume that current Ergo price is about 20 Ergs, thus collateral price is 24,000 Euros. However, as before, Alice and Bob would be ok with having just an equivalent of 12,000 Euros. Thus the surplus of 600 Ergs (equivalent of 12,000 Euros) could be withdrawn and split as considered in the loan contract. For example, let’s assume that Bob is getting half of the withdrawal, so 300 Ergs (equivalent of 6,000 EUR), and still waiting for 10,000 Euros to be paid by Alice.

This profit fix withdrawal could be be cosigned by Alice and Bob, or be performed automatically, with withdrawal amount to be not less than some minimum (to have fees small in comparison with it).

## Ergo Price Is Going Down

When price is going down and the collateral is not covering loan tokens amount anymore, margin call happens so Bob can withdraw all the Ergs in the box.

In more complicated case, Bob can withdraw Ergs not immediately but when his loss is at some level. By playing with this level according to estimated probabilities of pricing in the future, Bob can still have profit.

## Refunds

When the loan is fully paid, Alice can withdraw the collateral.

If Alice is not paying for some period of time (e.g.) two years, Bob can withdraw the collateral.

An interesting open question is what to do in situation when Bob is refusing to get Euro payments from Alice in order to get Ergs claiming to the contract that Alice is not paying.

## Conclusions

In this proposal an interest-free contract has been considered, where Alice and Bob are participating in the loan contract. The contract gives Bob possibility to buy Alice’s Ergs for a cheaper price (in case of margin call), or to profit from Alice’s Ergs price going up. For riding on Alice’s Ergs, Bob is providing interest-free Euro loan to Alice.

## Implementation

There is no implementation at the moment, but it looks pretty straightforward and doable with current Wallet API even. However, there is no support for multi-signatures at the moment, but in such cases singleton tokens (e.g. one for Alice, another for Bob) can be used instead of signatures.

---

### Post #2 — @scalahub (2019-10-31)

Based on the above description and some small changes, one variant of the loan contract is given at [this link](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/org/sh/kiosk/ergo/InterestFreeLoan.scala)

```ergoscript
{
      val dataInput = CONTEXT.dataInputs(0)
      val rate = dataInput.R4[Long].get // rate (how many nano-Erg for 1 USD cent)
    
      // Check 1: CORRECT RATE ORACLE (has the correct token id)
      val correctRateOracle = dataInput.tokens(0)._1 == rateOracleTokenID
    
      val out = OUTPUTS(0) // should be same box script
      val currentUSD = SELF.R4[Long].get // how many USD owed to Bob
    
      val lastPaymentHeight = SELF.R5[Int].get // what height last payment was made
      val thisPaymentHeight = out.R5[Int].get // what the current height is
    
      // Check 2: CORRECT HEIGHT (within a day of current HEIGHT and higher than previous height)
      val correctHeight = thisPaymentHeight <= HEIGHT &&
                          thisPaymentHeight >= HEIGHT - 720 && // within a day
                          thisPaymentHeight > lastPaymentHeight
    
      // Check 3: CORRECT SCRIPT
      val correctScript = out.propositionBytes == SELF.propositionBytes
    
      val outUSD = out.R4[Long].get
      val usdDiff = currentUSD - outUSD
      val ergsDiff = SELF.value - out.value
      val correctErgsDiff = usdDiff * rate == ergsDiff
    
      // Check 4: CORRECT Ergs difference
      val correctDiff = usdDiff == emi && correctErgsDiff
    
      val correctTx = correctDiff && correctScript && correctRateOracle && correctHeight
    
      // Four different ways box can be spent
      //
      //   1. Alice makes 10 Euro payment within 35 days of last payment
    
      val bobBox = OUTPUTS(1) // this is the box where Alice will pay to Bob
      val correctBobAmt = bobBox.tokens(0)._1 == usdTokenID && bobBox.tokens(0)._2 == emi
      val correctBobScript = bobBox.propositionBytes == proveDlog(bob).propBytes
      val correctBobBox = correctBobAmt && correctBobScript
      val payment = correctTx && proveDlog(alice) && correctBobBox
    
      //   2. Alice does not make payment within 35 days of last payment. Bob takes out due himself
      val nonPayment = correctTx && proveDlog(bob) && ((HEIGHT - lastPaymentHeight) > (oneMonth + fiveDays))
    
      //   3. Price drops anytime (margin call)
      val marginCall = (currentUSD * rate > SELF.value) && proveDlog(bob)
    
      //   4. Price increases anytime (profit sharing)
      val reqd = currentUSD * rate * 12 / 10
      val profit = (SELF.value - reqd)/2
      val ergPriceHigh = profit > 0
      val profitSharing = ergPriceHigh && correctScript && out.value == reqd && usdDiff == 0 &&
      OUTPUTS(1).propositionBytes == proveDlog(bob).propBytes && OUTPUTS(1).value == profit &&
      OUTPUTS(2).propositionBytes == proveDlog(alice).propBytes && OUTPUTS(2).value == profit &&
      lastPaymentHeight == thisPaymentHeight
    
      anyOf(
        Coll(
          profitSharing,
          marginCall,
          payment,
          nonPayment
        )
      )
    
    }
```

This is based on the **One-Way USD Token** idea described in [this post](https://www.ergoforum.org/t/tethering-a-token-to-usd-using-the-rate-oracle/118/4), and whose code is given [here](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/org/sh/kiosk/ergo/OneWayUSDToken.scala).

To quote from that post:

> The one-way convertible token is defined as follows:
>
> Bob can create a “token box” with a large number of “USD tokens” that can be exchanged for Ergs at the current rate in USD/Erg. The contract in the token box only allows changing Ergs to tokens and not the other way round.
>
> So Bob could create a box with 1 trillion tokens such that anyone can pay ergs and purchase tokens at the inverse rate of USD/ergs. If the rate is 10 USD/Erg, then anyone can purchase X number of tokens by paying X/10 Ergs.

**One-way USD token** (1USD) allows Alice to pay the loan back without Bob’s intervention and takes care of the cheating Bob scenario discussed above, where Bob refuses to acknowledge Alice’s repayment.

The other way Bob could attack the system is to make the 1USD tokens unavailable for purchase. This can be handled by keeping a large number of tokens that can never be exhausted using the available ERGs. The code of 1USD token is reproduced below

```ergoscript
{
    val newSelf = OUTPUTS(0) // new box created as a replica of current box
    val bobOut = OUTPUTS(1) // box paying to Bob
  
    val bobNanoErgs = bobOut.value
    val validBobBox = bobOut.propositionBytes == proveDlog(bob).propBytes
  
    val selfTokenID = SELF.tokens(0)._1
    val selfTokenAmt = SELF.tokens(0)._2
  
    val newSelfTokenID = newSelf.tokens(0)._1
    val newSelfTokenAmt = newSelf.tokens(0)._2
    val validTokenID = selfTokenID == newSelfTokenID
    val validProp = newSelf.propositionBytes == SELF.propositionBytes
  
    val tokenDiff = selfTokenAmt - newSelfTokenAmt
    val validNewSelf = validTokenID && validProp
  
    val rateBox = CONTEXT.dataInputs(0)
    val rate = rateBox.R4[Long].get
    val validRateBox = rateBox.tokens(0)._1 == rateTokenID
  
    // rate gives nanoErg per USDCent 
    // Thus, bobNanoErgs NanoErgs will cost bobNanoErgs / rate usd cents
  
    val usdCDiff = bobNanoErgs / rate
  
    tokenDiff <= usdCDiff && validRateBox && validNewSelf && validBobBox
}
```

---

### Post #3 — @ZeroKnowledge (2021-04-13)

Awesome, I love this idea. Will definitely bring value to our ecosystem and users who will use interest free loans, truly a Cryptocurrency for the people! ![:pray:t2:](https://emoji.discourse-cdn.com/twitter/pray/2.png?v=9 ":pray:t2:")
