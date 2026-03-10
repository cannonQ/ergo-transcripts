---
title: Market-driven emission contracts
description: 'ErgoForum discussion: Market-driven emission contracts'
tags:
- amm
- box
- data-input
- emission-schedule
- ergoforum
- ergoscript
- ergoscript-context
- native-tokens
- registers
- sigma-protocols
- slippage
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/market-driven-emission-contracts/3749
created: '2022-07-25'
last_activity: '2022-07-25'
posts_count: 2
views: 693
likes: 12
glossary_hits:
- AMM
- Box
- Data input
- Emission schedule
- ErgoScript
- ErgoScript context
- Native tokens
- Registers
- Sigma protocols
- Slippage
---

# Market-driven emission contracts

> **Forum thread:** [https://ergoforum.org/t/market-driven-emission-contracts/3749](https://ergoforum.org/t/market-driven-emission-contracts/3749)
> **Category:** Uncategorized | **Created:** 2022-07-25 | **Posts:** 2 | **Views:** 693

**Related concepts:** AMM, Box, Data input, Emission schedule, ErgoScript, ErgoScript context, Native tokens, Registers, Sigma protocols, Slippage

---

### Post #1 — @kushti (2022-07-25)

It is widely known that Ergo has emission done via a contract. Such approach then can be easily used by other tokens. And while ERG token’s emission schedule in the contract depends on time only (like for other cryptocurrencies), for other tokens contracts may be more involved.

For example, an emission contract may use data from reference market , such as a liquidity pool (provided as a read-only data input), to readjust emission based on current price in the pool (price on other markets will supposedly be about the same due to arbitrage).

For example, some token may have emission schedule which is starting with some initial reward per block, but then:

* if price in the pool is below some target price, reduce emission (by X %)
* if no reductions made for Y consecutive blocks (means for Y blocks price in the market is not less than the target), increase target price by Z%

Thus the contract will reduce emission when the price is below target price which is also being moved up with time (when market price is above it).

Hard to say how this design is secure in the presence of actors trying to maximize profit (in whether tokens or base asset). Could be a funny experiment after all.

---

### Post #2 — @CheeseEnthusiast (2022-07-25)

NETA emission contract uses something quite similar mentioned here. The goal I was given for the NETA emission contract was this:

“Emit tokens so that the number of tokens emitted is equal to the price in NETA of the entire block reward minus pool fees, multiplied by a set additional percentage rate. The total ERG block reward must be sent as an output to the operator of the pool (anetaBTC Team), while the emitted tokens must be sent to miner holding contracts to be distributed afterwards.”

For example, let’s say pool fee is 3%, additional percentage rate is 10%, and block reward is 48 ERG.

Total amount to swap would be (48 - (48 \* 0.03)) or 46.56 ERG. The current rate of ERG / NETA means that this would equal 18,600 NETA. With additional percentage rate, this would equal  
(18600 + (18600 \* 0.10)) or 20460 NETA per block reward.

To get the current price of NETA, the LP box is included as a data input. This makes for some interesting token emissions, as the number of tokens emitted is always pegged to the price of NETA in ERG + the additional percent rate.

So if NETA price goes down, more tokens are emitted to guarantee that the percent increase is pegged to the price of NETA. If NETA price goes up, then number of emitted tokens goes down as less tokens are needed to hit the percent increase on the price of NETA. This is actually the opposite of what you have above (where emission rate goes down when token price goes down, and vice versa).

In short, miners always receive more NETA than they would if they had mined ERG and swapped for it.  
One day, I would really like to make a graph of the amount of NETA a single miner receives per block, as there are many factors that go into each miner’s payout (miner hashrate, pool hashrate, and price of NETA at time of emission)

ErgoScript for the contract can be found here:

[github.com](https://github.com/GetBlok-io/Subpooling/blob/mainnet_plasma/conf/scripts/ExchangedEmissions.ergo)

#### [GetBlok-io/Subpooling/blob/mainnet\_plasma/conf/scripts/ExchangedEmissions.ergo](https://github.com/GetBlok-io/Subpooling/blob/mainnet_plasma/conf/scripts/ExchangedEmissions.ergo)

```ergoscript
{
  // Exchanged Emissions - Kirat Singh
  // This contract takes the block reward (sum of all other input boxes value in ERG), removes a fee from it, and
  // then performs a simulated swap and adjusts the output using the given percentage value.
  // This output value represents the tokens taken from the emission box, and represents the miner's
  // block reward, which must be distributed amongst holding contracts

  // Constants
  val shareOperator: SigmaProp  = const_shareOpPK
  val poolOperator:  SigmaProp  = const_poolOpPK
  val LPToken:       Coll[Byte] = const_LPTokenId
  val distToken:     Coll[Byte] = const_distTokenId
  val holdingBytes:  Coll[Byte] = const_holdingBytesHashed
  val slippage:      Int        = 1 // Assume 1% slippage
  val minHoldingBoxVal: Long    = 1000L * 1000L * 10 // Up to 10 members in each subpool, so make sure enough ERG is in holding
                                                    // To potentially hold tokens for all of them
  val poolFeeDenom:  Long       = 100000L
  // SELF Assets & Registers
  val emToken:       Coll[Byte] = SELF.tokens(0)._1 // emission NFT
  val distTokenAmnt: Coll[Byte] = SELF.tokens(1)._2
```

This file has been truncated. [show original](https://github.com/GetBlok-io/Subpooling/blob/mainnet_plasma/conf/scripts/ExchangedEmissions.ergo)
