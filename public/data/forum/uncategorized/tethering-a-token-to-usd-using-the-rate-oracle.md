---
title: Tethering a token to USD using the rate oracle
description: 'ErgoForum discussion: Tethering a token to USD using the rate oracle'
tags:
- addresses
- box
- collateral
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- native-tokens
- singleton-/-state-nft
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/tethering-a-token-to-usd-using-the-rate-oracle/118
created: '2019-10-22'
last_activity: '2020-04-26'
posts_count: 9
views: 2790
likes: 31
glossary_hits:
- Addresses
- Box
- Collateral
- Ergo Explorer
- ErgoScript
- ErgoScript context
- Native tokens
- Singleton / State NFT
- Transaction
---

# Tethering a token to USD using the rate oracle

> **Forum thread:** [https://ergoforum.org/t/tethering-a-token-to-usd-using-the-rate-oracle/118](https://ergoforum.org/t/tethering-a-token-to-usd-using-the-rate-oracle/118)
> **Category:** Uncategorized | **Created:** 2019-10-22 | **Posts:** 9 | **Views:** 2790

**Related concepts:** Addresses, Box, Collateral, Ergo Explorer, ErgoScript, ErgoScript context, Native tokens, Singleton / State NFT, Transaction

---

### Post #1 — @scalahub (2019-10-22)

Request feedback on the following idea.

**Goal**: To create a trustless token tethered to USD so that anyone can buy and sell the token.

Alice creates, say, 10000000 tokens and stores them in a box protected by the following script:

```ergoscript
(alice && HEIGHT > 10000) || { 
	
	val usdTokenValue = SELF.tokens(0)._2
	
	val out = OUTPUTS(0)

	val dataInput = CONTEXT.dataInputs(0) // rate oracle box
	val rate = dataInput.R4[Long].get
	
	val isValidRateToken = dataInput.tokens(0)._1 == rateTokenID
	
	val isValidUsdToken = out.tokens(0)._1 == SELF.tokens(0)._1
	
	val tokenDiff = out.tokens(0)._2 - SELF.tokens(0)._2
	val ergsDiff = SELF.value - out.value
	
	val isValidExchange = tokenDiff * rate == ergsDiff
	
	val isValidBox = out.propositionBytes == SELF.propositionBytes
	
	isValidBox && isValidExchange && 
	isValidRateToken && isValidUsdToken
}
```

Some Questions/thoughts

* What would be the incentive for Alice to create such a box?  
  (After height 10000, Alice can claim whatever ergs are in the box)
* In order to avoid spam/DDoS, the buy and sell rates should be slightly different
* This can be used anywhere we need to deal with USD/Erg (example, repayment of the [“interest-free” loan](https://www.ergoforum.org/t/interest-free-loan-contract/67))
* How to handle fluctuations. For instance, if Erg drops, we may end up with a box with almost 0 Ergs and less than 10000000 tokens.

---

### Post #2 — @jasondavies (2019-10-23)

I suppose the incentive for Alice should be that a small profit in ERG is gained for every trade, and this will accumulate over time?

Regarding fluctuations, I agree this is a serious problem. Let’s say I bought 10 tokens for 10 ERG, and later they are worth 100 ERG (so the value of each ERG is 0.1 tokens). Suppose the box only contains the original 10 ERG that I paid at this point; then there won’t be sufficient ERG to exchange for my 10 tokens.

Of course, this is not a trivial problem to solve, and this is why there are many stablecoins out there with varying degrees of success (e.g. DAI). Even if you take active measures to maintain the peg, it’s a tricky problem to solve. For instance, active measures might include selling the ERG for various USD stablecoins on the open market in order to hedge against fluctuations.

---

### Post #3 — @kushti (2019-10-23)

Difference between buy and sell rates will also solve incentive problems ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=9 ":slight_smile:")

On fluctutations, the simplest option is to have overcollateralization, it is not fully solving the problems though. Maybe it is better to use fungible synthetics, like in the Yield protocol? ( <http://research.paradigm.xyz/Yield.pdf> )

---

### Post #4 — @scalahub (2019-10-23)

I think *one-way conversion* is a more useful primitive.

This can be used in the loan application for example (will elaborate in a different post).

The one-way convertible token is defined as follows:

Bob can create a “token box” with a large number of “USD tokens” that can be exchanged for Ergs at the current rate in USD/Erg. The contract in the token box only allows changing Ergs to tokens and not the other way round.

So Bob could create a box with 1 trillion tokens such that anyone can pay ergs and purchase tokens at the inverse rate of USD/ergs. If the rate is 10 USD/Erg, then anyone can purchase X number of tokens by paying X/10 Ergs.

Bob promises to consider these tokens equivalent to USD. In particular, Bob promises:

1. To give physical USD in exchange for tokens at 1:1 rate.
2. To accept tokens in lieu of USD at 1:1 rate.

(In our interest free loan example, we only need property 2, though 1 may be useful for other applications)

Bob only sells those tokens via the token box whose code is given below.

```ergoscript
 {
  val newSelf = OUTPUTS(0)
  val bobOut = OUTPUTS(1)
 
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
 
  // rate gives nanoErgs per USDCent
  // Thus, bobNanoErgs NanoErgs will cost bobNanoErgs / rate usd cents
 
  val usdCDiff = bobNanoErgs / rate
 
  tokenDiff <= usdCDiff && validRateBox && validNewSelf && validBobBox
 }
```

In the interest free loan example, Bob can offer Alice a loan of, say, 100 physical USD in an offchain transaction in return for a box with some collateral in Ergs locked.  
Let this be the “loan box”

The loan box says that every month Alice must pay 10 usd tokens and if she misses payment, Bob can initiate a recovery process using her collateral. If all goes well and Alice has paid 100 USD tokens then she can take back her collateral.

Bobs incentive would be to sell the tokens at a slightly higher rate than the current rate.

---

### Post #5 — @kushti (2020-04-08)

Made one-way conversion script box by using the following script (using an oracle I’m running): <https://wallet.plutomonkey.com/p2s/?source=ewogIHZhbCBuZXdTZWxmID0gT1VUUFVUUygwKQogIHZhbCBib2JPdXQgPSBPVVRQVVRTKDEpCiAKICB2YWwgYm9iTmFub0VyZ3MgPSBib2JPdXQudmFsdWUKICB2YWwgdmFsaWRCb2JCb3ggPSBib2JPdXQucHJvcG9zaXRpb25CeXRlcyA9PSBQSygiOWlIV2NZWVNQa2dZYm5DNmFIZlpjTFpyS3Jya3BGek0yRVRVWjJpa0ZxRndWQUIyQ1U3IikucHJvcEJ5dGVzCiAKICB2YWwgc2VsZlRva2VuSUQgPSBTRUxGLnRva2VucygwKS5fMQogIHZhbCBzZWxmVG9rZW5BbXQgPSBTRUxGLnRva2VucygwKS5fMgogCiAgdmFsIG5ld1NlbGZUb2tlbklEID0gbmV3U2VsZi50b2tlbnMoMCkuXzEKICB2YWwgbmV3U2VsZlRva2VuQW10ID0gbmV3U2VsZi50b2tlbnMoMCkuXzIKICB2YWwgdmFsaWRUb2tlbklEID0gc2VsZlRva2VuSUQgPT0gbmV3U2VsZlRva2VuSUQKICB2YWwgdmFsaWRQcm9wID0gbmV3U2VsZi5wcm9wb3NpdGlvbkJ5dGVzID09IFNFTEYucHJvcG9zaXRpb25CeXRlcwogCiAgdmFsIHRva2VuRGlmZiA9IHNlbGZUb2tlbkFtdCAtIG5ld1NlbGZUb2tlbkFtdAogIHZhbCB2YWxpZE5ld1NlbGYgPSB2YWxpZFRva2VuSUQgJiYgdmFsaWRQcm9wCiAKCiAgdmFsIHJhdGVCb3ggPSBDT05URVhULmRhdGFJbnB1dHMoMCkKICB2YWwgcmF0ZSA9IHJhdGVCb3guUjRbTG9uZ10uZ2V0CiAgdmFsIHZhbGlkUmF0ZUJveCA9IHJhdGVCb3gudG9rZW5zKDApLl8xID09IGZyb21CYXNlNTgoIjc4TVQxTkdIZGlZeVE5WTJjdjM5QXJqeENIV3hDTkc3YkVnOWdrUEd0MXZwIikKIAogIC8vIHJhdGUgZ2l2ZXMgbmFub0VyZ3MgcGVyIFVTRENlbnQKICAvLyBUaHVzLCBib2JOYW5vRXJncyBOYW5vRXJncyB3aWxsIGNvc3QgYm9iTmFub0VyZ3MgLyByYXRlIHVzZCBjZW50cwogCiAgdmFsIHVzZENEaWZmID0gYm9iTmFub0VyZ3MgLyByYXRlCiAKICB0b2tlbkRpZmYgPD0gdXNkQ0RpZmYgJiYgdmFsaWRSYXRlQm94ICYmIHZhbGlkTmV3U2VsZiAmJiB2YWxpZEJvYkJveAogfQ==>

Test tokens sent to this script: <https://explorer.ergoplatform.com/en/addresses/BVntgK9Li5QpXt4eobmAjKynGQ6iwSX3DgMhC9rsDvXya8A2pdJERB6mR5B1HsvbLqcfr9C2X73hd53W1PJrDXCybVtbuPMXCH2w5otmsqSc4NXUg7eyCUpkJWwCaAKQQm82R2g2sNCnHMZzXoTkms9AUQCNtxS6dP12yhENsWXeoGoA67283i7JBT2ZQH1PaJkj2ZtjnUV13iKGdJx9n6H85hWFaBWQZaRcKMTZLok8Ugp1ApPLFCN1KkFyNSKffy7SKpFBX9H>

The problem I have now is that API does not support data (read-only) inputs(possible to use lower-level tools but I’m lazy for that), made issue and going to add them: <https://github.com/ergoplatform/ergo/issues/1084> , then will continue )

---

### Post #6 — @jasondavies (2020-04-08)

This is great! I was able to successfully buy a token from this contract by referencing your oracle.

I used my (still unpublished) transaction signing API to reference a dataInput. I really should finish it and open a PR.

---

### Post #7 — @jasondavies (2020-04-09)

Just for fun, I extracted the rate information from your oracle and plotted it over time:

[![visualization (3)](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a96bd8c5cf5f8c7e3dea24cc500144f63d46e6a7.png)

visualization (3)886×578 14.6 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a96bd8c5cf5f8c7e3dea24cc500144f63d46e6a7.png "visualization (3)")

---

### Post #8 — @jasondavies (2020-04-09)

Unfortunately it looks like the oracle is tracking the price of ERG in USD (with a multiplier of `1e7`), which means the contract is incorrect as it should multiply by the rate (to convert ERG to USD) instead of dividing by it.

---

### Post #9 — @kushti (2020-04-26)

Another attempt:

An oracle associated with singleton token 1b26f80bb93977e85ffda7b54572e31a68d77295fc4c8a1b762071a44350bad6 now tracking price of USD in nanoErgs (based on CoinMarketCap data).

Slightly modified script:

<https://wallet.plutomonkey.com/p2s/?source=ewogIHZhbCBuZXdTZWxmID0gT1VUUFVUUygwKQogIHZhbCBib2JPdXQgPSBPVVRQVVRTKDEpCiAKICB2YWwgYm9iTmFub0VyZ3MgPSBib2JPdXQudmFsdWUKICB2YWwgdmFsaWRCb2JCb3ggPSBib2JPdXQucHJvcG9zaXRpb25CeXRlcyA9PSBQSygiOWlIV2NZWVNQa2dZYm5DNmFIZlpjTFpyS3Jya3BGek0yRVRVWjJpa0ZxRndWQUIyQ1U3IikucHJvcEJ5dGVzCiAKICB2YWwgc2VsZlRva2VuSUQgPSBTRUxGLnRva2VucygwKS5fMQogIHZhbCBzZWxmVG9rZW5BbXQgPSBTRUxGLnRva2VucygwKS5fMgogCiAgdmFsIG5ld1NlbGZUb2tlbklEID0gbmV3U2VsZi50b2tlbnMoMCkuXzEKICB2YWwgbmV3U2VsZlRva2VuQW10ID0gbmV3U2VsZi50b2tlbnMoMCkuXzIKICB2YWwgdmFsaWRUb2tlbklEID0gc2VsZlRva2VuSUQgPT0gbmV3U2VsZlRva2VuSUQKICB2YWwgdmFsaWRQcm9wID0gbmV3U2VsZi5wcm9wb3NpdGlvbkJ5dGVzID09IFNFTEYucHJvcG9zaXRpb25CeXRlcwogCiAgdmFsIHZhbGlkTmV3U2VsZiA9IHZhbGlkVG9rZW5JRCAmJiB2YWxpZFByb3AgCgogIHZhbCByYXRlQm94ID0gQ09OVEVYVC5kYXRhSW5wdXRzKDApCiAgdmFsIHJhdGUgPSByYXRlQm94LlI0W0xvbmddLmdldCAvIDEwMAogIHZhbCB2YWxpZFJhdGVCb3ggPSByYXRlQm94LnRva2VucygwKS5fMSA9PSBmcm9tQmFzZTU4KCIycHpVUExleHRwaXE4Ump5ZW11YTJCWVg1eUtMWlByUUV6NGpwVW5DUk52SCIpCiAKICAvLyByYXRlIGdpdmVzIG5hbm9FcmdzIHBlciBVU0RDZW50CiAgLy8gVGh1cywgYm9iTmFub0VyZ3MgTmFub0VyZ3Mgd2lsbCBjb3N0IGJvYk5hbm9FcmdzIC8gcmF0ZSB1c2QgY2VudHMKIAogIHZhbCB0b2tlbkRpZmYgPSBzZWxmVG9rZW5BbXQgLSBuZXdTZWxmVG9rZW5BbXQKICB2YWwgdXNkQ0RpZmYgPSBib2JOYW5vRXJncyAvIHJhdGUKIAogIHRva2VuRGlmZiA8PSB1c2RDRGlmZiAmJiB2YWxpZFJhdGVCb3ggJiYgdmFsaWROZXdTZWxmICYmIHZhbGlkQm9iQm94CiB9>

Finally, transaction where Alice is buying $1.00 (so 100 cents) from Bob:

<https://explorer.ergoplatform.com/en/transactions/ae93067cb5190e784050bb00f2ea8668070f04520da88ccfcb22a0a8a049b4ad>

Unfortunately, explorer currently shows outputs in arbitrary order. Proper order of outputs is as follows:

out-0: box protected by the USD tokens selling script (Q56…)  
out-1: Bob getting 1 USD in Ergs (9iHWcYYSPkgYbnC6aHfZcLZrKrrkpFzM2ETUZ2ikFqFwVAB2CU7)  
out-2: Alice getting 1 USD (100 cents, so 100 units of the 9aa1765314c4b2b18a10ce10ebfe08d5923a6486872c321099479c2763da1db7 token) (9gmNsqrqdSppLUBqg2UzREmmivgqh1r3jmNcLAc53hk3YCvAGWE)  
out-3: fee
