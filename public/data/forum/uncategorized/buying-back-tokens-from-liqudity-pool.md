---
title: Buying back tokens from liqudity pool
description: 'ErgoForum discussion: Buying back tokens from liqudity pool'
tags:
- amm
- box
- context-extension
- dexy
- eip
- ergoforum
- ergoscript
- ergoscript-context
- gort
- native-tokens
- oracle-pools
- registers
- sigma-protocols
- sigmausd
- slippage
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/buying-back-tokens-from-liqudity-pool/4275
created: '2023-04-06'
last_activity: '2023-04-06'
posts_count: 1
views: 601
likes: 5
glossary_hits:
- AMM
- Box
- Context extension
- Dexy
- EIP
- ErgoScript
- ErgoScript context
- GORT
- Native tokens
- Oracle pools
- Registers
- Sigma protocols
- SigmaUSD
- Slippage
- Spectrum
- Transaction
---

# Buying back tokens from liqudity pool

> **Forum thread:** [https://ergoforum.org/t/buying-back-tokens-from-liqudity-pool/4275](https://ergoforum.org/t/buying-back-tokens-from-liqudity-pool/4275)
> **Category:** Uncategorized | **Created:** 2023-04-06 | **Posts:** 1 | **Views:** 601

**Related concepts:** AMM, Box, Context extension, Dexy, EIP, ErgoScript, ErgoScript context, GORT, Native tokens, Oracle pools, Registers, Sigma protocols, SigmaUSD, Slippage, Spectrum, Transaction

---

### Post #1 — @kushti (2023-04-06)

As a motivating example, let’s consider a stablecoin protocol, which is using an oracle pool to get reserve asset value to ensure peg (such as SigUSD or Dexy). Security of the protocol is based on security of the oracle pool, and as the latter depends on oracles incentivization, it would be desirable to redirect part of fees (e.g. minting fee) to oracles.

In oracle pools 2.0 rewards are done in custom reward tokens, let’s call it GORT (gold oracle reward token). Let’s assume that there is ErgoDEX(Spectrum) liquidity pool with a contract from [EIP draft](https://github.com/ergoplatform/eips/pull/27).

Then we can use a contract to buy GORT tokens back from the liquidity pool and send them back to oracles pool (pools everywhere ![:grinning:](https://emoji.discourse-cdn.com/twitter/grinning.png?v=12 ":grinning:")) . The stablecoin minting contract pays part of a minting fee to the contract.

However, similar contract may be useful in different scenarios to buy tokens back from liquidity pool.

Contract is

```ergoscript
{
  // GORT (Gold Oracle Reward Token) buyback script
  //
  // It is accepting ERGs (via top-up action), swapping them in ERG/GORT LP pool to get GORT, and gives GORT back
  // to oracle pool. See detailed description of the actions below.
  //
  // Tokens:
  //  - buyback NFT
  //  - gort
  //
  //  Registers:
  //    None
  //
  // Swap:
  //
  //   Input         |  Output        |   Data-Input
  // -----------------------------------------------
  // 0 LP            |  LP            |
  // 1 BuyBack       |  BuyBack       |
  //
  // Top-up:
  //
  //   Input         |  Output        |   Data-Input
  // -----------------------------------------------
  // 0 mint action   |  mint action   |
  // 1 Bank          |  Bank          |
  // 2 BuyBack       |  BuyBack       |
  //
  // Give back:
  //
  //   Input         |  Output        |   Data-Input
  // -----------------------------------------------
  // 0 Pool          |  Pool          |
  // 1 Refresh       |  Refresh       |
  // 2 BuyBack       |  BuyBack       |

  val action = getVar[Int](0).get

  if (action == 0) {
    // swap path
    // the contract is buying back GORTs from ERG/GORT LP here
    val buybackNft = SELF.tokens(0)._1

    // checking that swap inputs provided
    val poolInput = INPUTS(0)
    val lpCorrect = poolInput.tokens(0)._1 == fromBase64("$gortLpNFT")

    // checking that gort tokens are in LP and buyback outputs only
    // we consider other outputs are fee and maybe change,
    // and change output could not have tokens, offchain logic needs to ensure that
    def noTokens(b: Box) = b.tokens.size == 0
    val outputsCorrect = OUTPUTS.slice(2, OUTPUTS.size).forall(noTokens)

    val selfOut = OUTPUTS(1)
    val selfOutCorrect = selfOut.tokens(0)._1 == buybackNft &&
                          selfOut.tokens(1)._1 == fromBase64("$gortId")

    val price = poolInput.value / poolInput.tokens(2)._2
    val gortObtained = selfOut.tokens(1)._2 - SELF.tokens(1)._2
    val maxErgDelta = price * gortObtained / 100 * 105 // max slippage 5%
    val ergDelta = SELF.value - selfOut.value
    val poolOutput = OUTPUTS(0)
    val swapCorrect = gortObtained > 0 && ergDelta <= maxErgDelta && poolOutput.value - poolInput.value == ergDelta

    sigmaProp(lpCorrect && outputsCorrect && selfOutCorrect && swapCorrect)
  } else if(action == 1) {
    // top-up path
    // we allow to add Ergs while preserving contract and tokens
    val selfOut = OUTPUTS(2)
    val topUp = selfOut.tokens == SELF.tokens &&
                selfOut.propositionBytes == SELF.propositionBytes &&
                SELF.value < selfOut.value
    sigmaProp(topUp)
  } else {
    // return path
    // we allow to return GORT tokens to oracle pool
    // hovewer, oracle pool contract does not have dedicated top-up action,
    // but it allows to add tokens when paying rewards to oracles.
    // Thus we need to copy reward logic from oracle pool contract here to be sure the contract
    // is receiving all the tokens deducted from this box

    // starting copying from oracle pool contract
    val minStartHeight = HEIGHT - $epochLength
    val poolIn = INPUTS(0)

    def isValidDataPoint(b: Box) = if (b.R6[Long].isDefined) {
        b.creationInfo._1    >= minStartHeight &&
        b.tokens(0)._1       == fromBase64("$oracleTokenId") &&
        b.R5[Int].get        == poolIn.R5[Int].get
    }  else false

    val dataPoints = INPUTS.filter(isValidDataPoint)
    val rewardEmitted = dataPoints.size * 2
    // finishing copying from oracle pool contract

    val selfGort = SELF.tokens(1)._2
    val properGiving =  poolIn.tokens(0)._1 == fromBase64("$oracleNFT") &&
                        OUTPUTS(0).tokens(1)._2 >= poolIn.tokens(1)._2 + selfGort - rewardEmitted

    val giveback = OUTPUTS(2).tokens(0) == SELF.tokens(0) &&
                   OUTPUTS(2).propositionBytes == SELF.propositionBytes &&
                   SELF.value == OUTPUTS(2).value &&
                   properGiving

    sigmaProp(giveback)
  }
}
```

, and testing transactions can be found in <https://github.com/kushti/dexy-stable/blob/master/src/test/scala/dexy/BuybackSpec.scala>
