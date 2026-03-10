---
title: A Simpler Collective-Spending Approach for Everyone!
description: 'ErgoForum discussion: A Simpler Collective-Spending Approach for Everyone!'
tags:
- addresses
- box
- ergoforum
- ergoscript
- ergoscript-context
- full-node
- minimum-transaction-fee
- native-tokens
- ring-signatures
- sigma-protocols
- sigmausd
- token-id-rule
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/a-simpler-collective-spending-approach-for-everyone/476
created: '2020-11-15'
last_activity: '2021-06-11'
posts_count: 4
views: 1682
likes: 16
glossary_hits:
- Addresses
- Box
- ErgoScript
- ErgoScript context
- Full node
- Minimum transaction fee
- Native tokens
- Ring signatures
- Sigma protocols
- SigmaUSD
- Token ID rule
- Transaction
---

# A Simpler Collective-Spending Approach for Everyone!

> **Forum thread:** [https://ergoforum.org/t/a-simpler-collective-spending-approach-for-everyone/476](https://ergoforum.org/t/a-simpler-collective-spending-approach-for-everyone/476)
> **Category:** Uncategorized | **Created:** 2020-11-15 | **Posts:** 4 | **Views:** 1682

**Related concepts:** Addresses, Box, ErgoScript, ErgoScript context, Full node, Minimum transaction fee, Native tokens, Ring signatures, Sigma protocols, SigmaUSD, Token ID rule, Transaction

---

### Post #1 — @anon_real (2020-11-15)

The aim of this post is to provide another approach for having and working with threshold signatures like 3-of-5 or any other using [the assembler service](https://www.ergoforum.org/t/tx-assembler-service-bypassing-node-requirement-for-dapps/443)!

## Why Not ZK-Treasury

Currently, using threshold signatures and collective signing is possible using the ZK-Treasury, however, users need to set up their own nodes and also run the ZK-Treasury app!  
By using this approach, users can use any wallet capable of managing tokens to simply spend assets collectively. Only the user’s wallet and the assembler service will be enough for this approach to work, meaning, no separate app, node, or server is needed!

## The New Approach

Let’s suppose a group of 10 people want to manage some assets together (for any reason) with 6 out of 10 of them being able to spend the assets.  
They will first issue a token with the quantity of 10 and distribute between each other, this is simply possible using the assembler service!  
Then they will send their assets to the p2s address derived from the following contract:

```ergoscript
{
  val inTokens = INPUTS.fold(0L, {(x:Long, b:Box) => {
      val cur = b.tokens.fold(0L, {(y:Long, t:(Coll[Byte], Long)) => y + {
          if (t._1 == tokenId) t._2 else 0L
        }})
      x + cur
    }
  })
  sigmaProp(inTokens >= 6)
}
```

The above contract simply counts the number of valid tokens in the transaction’s input and let the box be spent if there are at least 6! It is obvious that a box protected by the above contract is only spendable if at least 6 of the 10 members participate.

The next thing needed is a contract which guarantees that if a member sends her token to it, it will be used only for the input of the transaction spending group’s assets (protected by the mentioned contract) and then return the token to the same user in the same transaction. This contract can also guarantee a specific transaction, hence, a predefined usage of assets so that it won’t be used to spend the assets in a way that the user didn’t agree to.  
Basically, such a contract is mostly like the one explained [here](https://www.ergoforum.org/t/some-details-about-ergo-auction-house/428/6) and the aim of it is to prevent misusage of user’s assets. This contract is skipped as it is mostly trivial.

Now, using the assembler service, if a member wants to participate in some collective spending, then she can use her favorite wallet and send her token to the explained contract; her token will be returned to her in the same transaction that spends the assets.  
For using this approach, members need a platform for communication maybe!

Many details are skipped and some other minor works are needed for the above approach to actually work without any barriers, nevertheless, I thought it was worth sharing!

---

### Post #2 — @kushti (2020-11-16)

Using membership tokens for joint spendings can be simpler indeed, also, there are some new interesting properties that tokens have while secret keys not, e.g. they are easily transferable.

I guess the script can be done without *fold* (*fold* is heavy), otherwise, good.

Maybe we can build some anonymization schemes with similar approaches, would be good to think about that.

---

### Post #3 — @anon_real (2020-11-16)

[@kushti](/u/kushti) the inner *fold* can be eliminated in fact. The outer *fold* is necessary as we don’t know how many of the members will participate since each will participate independently and their box’s contract will guarantee that their token will be returned to them in the same tx.

---

### Post #4 — @anon_real (2021-06-11)

Complete contract protecting a team’s funds:

```ergoscript
{
  // request details
  val reqId = INPUTS(1).R4[Coll[Byte]].get     // some random request ID designed to distinguish between different payments
  val ergAmount = INPUTS(1).R5[Long].get       // asked ERG amount
  val tokenId = INPUTS(1).R6[Coll[Byte]].get   // asked token ID, e.g, SigUSD's ID
  val tokenAmount = INPUTS(1).R7[Long].get     // asked token amount, e.g., 10000 for $100
  val recipient = INPUTS(1).R8[Coll[Byte]].get // fund recipient
  val fee = INPUTS(1).R9[Long].get             // transaction fee which will be deducted from teams' funds

  val copyFunds = OUTPUTS(0)
  val reqBox = OUTPUTS(1)

  // first input is fund's box
  // second to the end is participant boxes
  val participants = INPUTS.slice(1, INPUTS.size).fold(0L, {(x:Long, b:Box) => {
      val curToken = b.tokens(0)
      if (curToken._1 == membershipToken) x + curToken._2 // one can have more than one vote (higher weight)
      else x
    }
  })

  // making sure participants agree upon the request
  val sameReqParticipants = INPUTS.slice(2, INPUTS.size).forall({(b:Box) => {
      b.R4[Coll[Byte]].get == reqId &&
        b.R5[Long].get == ergAmount &&
        b.R6[Coll[Byte]].get == tokenId &&
        b.R7[Long].get == tokenAmount &&
        b.R8[Coll[Byte]].get == recipient &&
        b.R9[Long].get == fee
    }
  })

  // sending proper ERG and token amount to the right recipient
  val sendingProperFunds = {
    reqBox.value == ergAmount &&
      reqBox.propositionBytes == recipient && {
        val outToken = reqBox.tokens.getOrElse(0, (tokenId, 0L))
        outToken._1 == tokenId &&
          outToken._2 == tokenAmount
      }
  }

  // remaining funds must be protected by the same signature
  val properCopy = {
    val inToken = SELF.tokens.filter({(token: (Coll[Byte], Long)) => token._1 == tokenId})
    val outToken = copyFunds.tokens.filter({(token: (Coll[Byte], Long)) => token._1 == tokenId})

    val inOtherTokens = SELF.tokens.filter({(token: (Coll[Byte], Long)) => token._1 != tokenId})
    val outOtherTokens = copyFunds.tokens.filter({(token: (Coll[Byte], Long)) => token._1 != tokenId})

    val properOutToken = inToken(0)._2 == tokenAmount || (outToken(0)._2 == inToken(0)._2 - tokenAmount)
    val properOtherTokens = inOtherTokens.size == outOtherTokens.size &&
      inOtherTokens.indices.forall({(ind: Int) => inOtherTokens(ind) == outOtherTokens(ind)})

    properOutToken && properOtherTokens &&
      copyFunds.propositionBytes == SELF.propositionBytes &&
      copyFunds.value == SELF.value - ergAmount - fee
  }

  sigmaProp(participants >= threshold && sameReqParticipants && sendingProperFunds && properCopy)

}
```

[@kushti](/u/kushti) [@scalahub](/u/scalahub) [@robert](/u/robert) [@jasondavies](/u/jasondavies) and others, can you please audit?
