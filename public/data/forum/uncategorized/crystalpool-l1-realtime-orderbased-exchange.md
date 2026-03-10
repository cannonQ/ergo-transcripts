---
title: 'CrystalPool: L1 Realtime Orderbased Exchange'
description: 'ErgoForum discussion: CrystalPool: L1 Realtime Orderbased Exchange'
tags:
- addresses
- box
- ergoforum
- ergoscript
- ergoscript-context
- layer-scaling
- minimum-transaction-fee
- native-tokens
- ring-signatures
- sigma-protocols
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/crystalpool-l1-realtime-orderbased-exchange/4783
created: '2024-05-22'
last_activity: '2024-06-03'
posts_count: 4
views: 343
likes: 9
glossary_hits:
- Addresses
- Box
- ErgoScript
- ErgoScript context
- Layer scaling
- Minimum transaction fee
- Native tokens
- Ring signatures
- Sigma protocols
- Transaction
---

# CrystalPool: L1 Realtime Orderbased Exchange

> **Forum thread:** [https://ergoforum.org/t/crystalpool-l1-realtime-orderbased-exchange/4783](https://ergoforum.org/t/crystalpool-l1-realtime-orderbased-exchange/4783)
> **Category:** Uncategorized | **Created:** 2024-05-22 | **Posts:** 4 | **Views:** 343

**Related concepts:** Addresses, Box, ErgoScript, ErgoScript context, Layer scaling, Minimum transaction fee, Native tokens, Ring signatures, Sigma protocols, Transaction

---

### Post #1 — @c8e4 (2024-05-22)

**L1 Realtime Orderbased Exchange**

Concept inspired by “[**Offchain Bank operating at Layer 2**](https://www.ergoforum.org/t/offchain-bank-operating-at-layer-2/3367)**”**.

**Value Proposition**

Self custodial Exchange with CEX-like UX and clear KYA.

**Model**

A service “CrystalPool” enables realtime exchange transactions on L1. First questions, how is it possible to have **real time** transaction with **self custody**?  
**self custody** comes with time limited multisig smart contracts (see full source below). Before time limit each operation is signed by userPK and poolPK. After the time limit userPK is in full control.  
Real time UX: the realtime balance/state is provided by the CrystalPool service. Each trading action creates a new transaction. CrystalPool maintains and extends a chain of temporary unpublished, signed transactions. The publishing process happens asynchronously in the background.

Example:

Bob puchases rsBTC for 1k Erdoge from Alice. Exchange price 1 Erdoge = 1 sat

Steps:

1. Bob deposits 1k Erdoge, 0.01ERG to DEPOSIT\_CONTRACT (signed by bobPK)
2. Bob creates a rsBTC/Erdoge SWAP\_CONTRACT order (signed by bobPK && poolPk)
3. Alice deposits 0.00001 rsBTC, 0.01ERG to DEPOSIT\_CONTRACT (signed by alicePK)
4. Alice swaps 0.00001 rsBTC for 1k Erdoge from SWAP\_CONTRACT to to DEPOSIT\_CONTRACT (signed by alicePK && poolPk)
5. Alice withdraws 1k Erdoge (signed by alicePK && poolPk)
6. Bob withdraws 0.00001 rsBTC (signed by bobPK && poolPk)

Given example only demonstrates a minimal life cycle from deposit to withdraw without highlighting the core proposition of real time trading between Alice and Bob, that can occur between deposit and withdraw.

Transactions:

1. Bob deposits 1k Erdoge

```ergoscript
┌─────────────────────────┐              ┌─────────────────────────┐   
│  address: BOB           │              │  address: DEPOSIT       │   
│  value: 0.1Erg          │              │  value: 0.0989Erg       │   
│  assets:[{              │              │  assets:[{              │   
│   tokenId: Erdoge       │  ────┬────►  │   tokenId: Erdoge       │   
│   amount:  1000         │      │       │   amount:  1000         │   
│  }]                     │      │       │  }]                     │   
└─────────────────────────┘      │       │  additionalRegisters:{  │   
                                 │       │   R4: [BOB,POOL]        │   
                                 │       │   R5: unlockHeight      │   
                                 │       │  }                      │   
                                 │       └─────────────────────────┘   
                                 │       ┌─────────────────────────┐   
                                 │       │  address: BOB           │   
                                 ├────►  │  ...                    │   
                                 │       └─────────────────────────┘ 
                                 │       ┌─────────────────────────┐   
                                 │       │  address: FEE           │   
                                 └────►  │  value: 0.0011Erg       │   
                                         └─────────────────────────┘
```

2. Bob creates a swap order

```ergoscript
┌─────────────────────────┐              ┌─────────────────────────┐   
│  address: DEPOSIT       │              │  address: SWAP          │   
│  value: 0989Erg         │              │  value: 0978Erg         │   
│  assets:[{              │              │  assets:[{              │   
│   tokenId: Erdoge       │  ────┬────►  │   tokenId: Erdoge       │   
│   amount:  1000         │      │       │   amount:  1000         │   
│  }]                     │      │       │  }]                     │   
│  additionalRegisters:{  │      │       │  additionalRegisters:{  │   
│   R4: [BOB,POOL]        │      │       │   R4: [BOB,POOL]        │   
│   R5: unlockHeight      │      │       │   R5: unlockHeight      │   
│  }                      │      │       │   R6: [Erdoge,rsBTC]    │
└─────────────────────────┘      │       │   R7: swapRate          │
                                 │       │   R8: DEPOSIT           │  
                                 │       │  }                      │
                                 │       └─────────────────────────┘   
                                 │       ┌─────────────────────────┐   
                                 │       │  address: FEE           │   
                                 └────►  │  value: 0.0011Erg       │   
                                         └─────────────────────────┘
```

3. Alice deposits 0.00001 rsBTC

```ergoscript
┌─────────────────────────┐              ┌─────────────────────────┐   
│  address: ALICE         │              │  address: DEPOSIT       │   
│  value: 0.1Erg          │              │  value: 0.0989Erg       │   
│  assets:[{              │              │  assets:[{              │   
│   tokenId: rsBTC        │  ────┬────►  │   tokenId: rsBTC        │   
│   amount:  0.00001      │      │       │   amount:  0.00001      │   
│  }]                     │      │       │  }]                     │   
└─────────────────────────┘      │       │  additionalRegisters:{  │   
                                 │       │   R4: [ALICE,POOL]      │   
                                 │       │   R5: unlockHeight      │   
                                 │       │  }                      │   
                                 │       └─────────────────────────┘   
                                 │       ┌─────────────────────────┐   
                                 │       │  address: ALICE         │   
                                 ├────►  │  ...                    │   
                                 │       └─────────────────────────┘ 
                                 │       ┌─────────────────────────┐   
                                 │       │  address: FEE           │   
                                 └────►  │  value: 0.0011Erg       │   
                                         └─────────────────────────┘
```

4. Alice swaps 0.00001 rsBTC for 1k Erdoge

```ergoscript
┌─────────────────────────┐              ┌─────────────────────────┐   
│  address: SWAP          │              │  address: DEPOSIT       │   
│  value: 0.0978Erg       │              │  value: 0.0978Erg       │   
│  assets:[{              │              │  assets:[{              │   
│   tokenId: Erdoge       │  ──┐   ┌──►  │   tokenId: Erdoge       │   
│   amount:  1000         │    │   │     │   amount:  1000         │   
│  }]                     │    │   │     │  }]                     │   
│  additionalRegisters:{  │    │   │     │  additionalRegisters:{  │   
│   R4: [BOB,POOL]        │    │   │     │   R4: [ALICE,POOL]      │   
│   R5: unlockHeight      │    │   │     │   R5: unlockHeight      │   
│   R6: [Erdoge,rsBTC]    │    │   │     │  }                      │
│   R7: swapRate          │    ├───┤     └─────────────────────────┘
│   R8: DEPOSIT           │    │   │     ┌─────────────────────────┐
│  }                      │    │   │     │  address: DEPOSIT       │
└─────────────────────────┘    │   │     │  value: 0.0978Erg       │
┌─────────────────────────┐    │   │     │  assets:[{              │
│  address: DEPOSIT       │    │   │     │   tokenId: rsBTC        │
│  value: 0.0989Erg       │  ──┘   ├──►  │   amount:  0.00001      │
│  assets:[{              │        │     │  }]                     │
│   tokenId: rsBTC        │        │     │  additionalRegisters:{  │
│   amount:  0.00001      │        │     │   R4: [BOB,POOL]        │
│  }]                     │        │     │   R5: unlockHeight      │
│  additionalRegisters:{  │        │     │   R6: [Erdoge,rsBTC]    │
│   R4: [ALICE,POOL]      │        │     │  }                      │
│   R5: unlockHeight      │        │     └─────────────────────────┘
│  }                      │        │     ┌─────────────────────────┐
└─────────────────────────┘        │     │  address: FEE           │
                                   └──►  │  value: 0.0011Erg       │
                                         └─────────────────────────┘
```

5. Alice withdraws 1k Erdoge

```ergoscript
┌─────────────────────────┐              ┌─────────────────────────┐   
│  address: DEPOSIT       │              │  address: ALICE         │   
│  value: 0.0978Erg       │              │  value: 0.0967Erg       │   
│  assets:[{              │              │  assets:[{              │   
│   tokenId: Erdoge       │  ────┬────►  │   tokenId: Erdoge       │   
│   amount:  1000         │      │       │   amount:  1000         │   
│  }]                     │      │       │  }]                     │   
│  additionalRegisters:{  │      │       └─────────────────────────┘   
│   R4: [ALICE,POOL]      │      │       ┌─────────────────────────┐   
│   R5: unlockHeight      │      │       │  address: FEE           │   
│  }                      │      └────►  │  value: 0.0011Erg       │
└─────────────────────────┘              └─────────────────────────┘
```

5. Bob withdraws 0.00001 rsBTC

```ergoscript
┌─────────────────────────┐              ┌─────────────────────────┐   
│  address: DEPOSIT       │              │  address: ALICE         │   
│  value: 0.0978Erg       │              │  value: 0.0967Erg       │   
│  assets:[{              │              │  assets:[{              │   
│   tokenId: Erdoge       │  ────┬────►  │   tokenId: Erdoge       │   
│   amount:  1000         │      │       │   amount:  1000         │   
│  }]                     │      │       │  }]                     │   
│  additionalRegisters:{  │      │       └─────────────────────────┘   
│   R4: [ALICE,POOL]      │      │       ┌─────────────────────────┐   
│   R5: unlockHeight      │      │       │  address: FEE           │   
│  }                      │      └────►  │  value: 0.0011Erg       │
└─────────────────────────┘              └─────────────────────────┘
```

**Smart Contracts:**

DEPOSIT

```ergoscript
{
	def getSellerPk(box: Box)              = box.R4[Coll[SigmaProp]].get(0)
	def getPoolPk(box: Box)                = box.R4[Coll[SigmaProp]].get(1)
	def unlockHeight(box: Box)             = box.R5[Int].get
	
	if(HEIGHT > unlockHeight(SELF)){
		getSellerPk(SELF)
	}else{
		getSellerPk(SELF) && getPoolPk(SELF)
	}
}
```

SWAP

```ergoscript
{	
	def getSellerPk(box: Box)              	= box.R4[Coll[SigmaProp]].getOrElse(Coll[SigmaProp](sigmaProp(false),sigmaProp(false)))(0)
	def getPoolPk(box: Box)                	= box.R4[Coll[SigmaProp]].getOrElse(Coll[SigmaProp](sigmaProp(false),sigmaProp(false)))(1)
	def unlockHeight(box: Box)             	= box.R5[Int].get
	def getSellingTokenId(box: Box)        	= box.R6[(Coll[Byte],Coll[Byte])].getOrElse((Coll[Byte](),Coll[Byte]()))._1
	def getBuyingTokenId(box: Box)         	= box.R6[(Coll[Byte],Coll[Byte])].getOrElse((Coll[Byte](),Coll[Byte]()))._2
	def getRate(box: Box)                  	= box.R7[Long].get
	def getSellerMultisigAddress(box: Box)  = box.R8[Coll[Byte]].get

	def tokenId(box: Box) = box.tokens(0)._1
	def tokenAmount(box: Box) = box.tokens(0)._2
  	def sumTokenAmount(a:Long, b: Box) = a + tokenAmount(b)
  	def sumTokenAmountXRate(a:Long, b: Box) = a + tokenAmount(b) * getRate(b)   

	def isSameContract(box: Box) = 
		box.propositionBytes == SELF.propositionBytes

	def isSameTokenPair (box: Box) = 
		getSellingTokenId(SELF) == getSellingTokenId(box) &&
		getBuyingTokenId(SELF)  == getBuyingTokenId(box)

	def hasSellingToken(box: Box) = 
		getSellingTokenId(SELF) == getSellingTokenId(box) &&
		box.tokens.size > 0 &&
		getSellingTokenId(SELF) == tokenId(box)

	def hasBuyingToken(box: Box) = 
		getBuyingTokenId(SELF) == getBuyingTokenId(box) &&
		box.tokens.size > 0 &&
		getBuyingTokenId(SELF) == tokenId(box)

  	def isGreaterZeroRate(box:Box) =
		getRate(box) > 0

	def isSameSeller(box: Box)   = 
		getSellerPk(SELF) == getSellerPk(box) &&
		getPoolPk(SELF) == getPoolPk(box)

  	def isSameUnlockHeight(box: Box)  = 
		unlockHeight(SELF) == unlockHeight(box)

 	def isSameMultisig(box: Box)    =
		getSellerMultisigAddress(SELF) == getSellerMultisigAddress(box)

	def isLegitInput(box: Box) =
		isSameContract(box) &&
		isSameSeller(box) &&
		isSameUnlockHeight(box) && 
		isSameTokenPair(box) &&
		hasSellingToken(box) &&
		isGreaterZeroRate(box) &&
		isSameMultisig(box)

	val maxSellRate: Long = INPUTS
		.filter(isLegitInput)
		.fold(0L, {(r:Long, box:Box) => {
			if(r > getRate(box)) r else getRate(box)
		}})

  	def hasMaxSellRate(box: Box) =
		getRate(box) == maxSellRate

  	def isLegitSellOrderOutput(box: Box) =
	  	isLegitInput(box)&&
	  	hasMaxSellRate(box)

	def isPaymentBox(box:Box) =
		isSameSeller(box) &&
		isSameUnlockHeight(box) &&
		hasBuyingToken(box) &&
		getSellerMultisigAddress(SELF) == box.propositionBytes

	def sumSellTokensIn(boxes: Coll[Box]): Long = boxes
		.filter(isLegitInput) 
		.fold(0L, sumTokenAmount)

	def sumSellTokensOut(boxes: Coll[Box]): Long = boxes
		.filter(isLegitSellOrderOutput)
		.fold(0L, sumTokenAmount)

	def sumBuyTokensPaid(boxes: Coll[Box]): Long = boxes
		.filter(isPaymentBox) 
		.fold(0L, sumTokenAmount)
  
  	val tokensSold = sumSellTokensIn(INPUTS) - sumSellTokensOut(OUTPUTS)
  	val tokensPaid = sumBuyTokensPaid(OUTPUTS)

	val inSellTokensXRate = INPUTS
		.filter(isLegitInput) 
		.fold(0L, sumTokenAmountXRate)

  	val outSellTokensXRate = OUTPUTS
		.filter(isLegitSellOrderOutput)
		.fold(0L, sumTokenAmountXRate)

	val sellTokensXRate = inSellTokensXRate - outSellTokensXRate
	val expectedRate = sellTokensXRate / tokensSold   

  	val isPaidAtFairRate = tokensPaid/tokensSold >= expectedRate

	if(HEIGHT > unlockHeight(SELF)){
		getSellerPk(SELF)
	}else{
		getSellerPk(SELF) && getPoolPk(SELF) || sigmaProp(isPaidAtFairRate) && getPoolPk(SELF)
	}
}
```

BUY

```ergoscript
{	
	def getBuyerPk(box: Box)               = box.R4[Coll[SigmaProp]].getOrElse(Coll[SigmaProp](sigmaProp(false),sigmaProp(false)))(0)
	def getPoolPk(box: Box)                = box.R4[Coll[SigmaProp]].getOrElse(Coll[SigmaProp](sigmaProp(false),sigmaProp(false)))(1)
	def unlockHeight(box: Box)             = box.R5[Int].get
	def getTokenId(box: Box)               = box.R6[Coll[Byte]].getOrElse(Coll[Byte]()) 
	def getBuyRate(box: Box)               = box.R7[Long].get
	def getBuyerMultisigAddress(box: Box)  = box.R8[Coll[Byte]].get

	def tokenId(box: Box) = 
		box.tokens(0)._1
	def tokenAmount(box: Box) = 
		box.tokens(0)._2

	def isSameContract(box: Box) = 
		box.propositionBytes == SELF.propositionBytes

	def isSameTokenId (box: Box) = 
		getTokenId(SELF) == getTokenId(box)

	def includesToken(box: Box) = 
		getTokenId(SELF) == getTokenId(box) &&
		box.tokens.size > 0 &&
		getTokenId(SELF) == tokenId(box)

  	def isGreaterZeroRate(box:Box) =
		getBuyRate(box) > 0

	def isSameBuyer(box: Box)   = 
		getBuyerPk(SELF) == getBuyerPk(box) &&
		getPoolPk(SELF) == getPoolPk(box)

  	def isSameUnlockHeight(box: Box)  = 
		unlockHeight(SELF) == unlockHeight(box)

  	def isSameMultisig(box: Box)    =
		getBuyerMultisigAddress(SELF) == getBuyerMultisigAddress(box)

	def isLegitBuyOrderInput(box: Box) =
		isSameBuyer(box) &&
		isSameUnlockHeight(box) && 
		isSameTokenId(box) &&
		isGreaterZeroRate(box) &&
		isSameMultisig(box) &&
		isSameContract(box)

	val minBuyRate = INPUTS
		.filter(isLegitBuyOrderInput)
		.fold(0L, {(r:Long, box:Box) => {
			if(r < getBuyRate(box)) r else getBuyRate(box)
		}})

  	def isLegitBuyOrderOutput(box: Box) =
		isLegitBuyOrderInput(box)&&
		minBuyRate == getBuyRate(box)

	def isPaymentBox(box:Box) =
		isSameBuyer(box) &&
		isSameUnlockHeight(box) &&
		includesToken(box) &&
		getBuyerMultisigAddress(SELF) == box.propositionBytes

	def sumValuesIn(boxes: Coll[Box]): Long = boxes
			.filter(isLegitBuyOrderInput) 
			.fold(0L, {(a:Long, b: Box) => a + b.value})

	def sumValuesOut(boxes: Coll[Box]): Long = boxes
		.filter(isLegitBuyOrderOutput) 
		.fold(0L, {(a:Long, b: Box) => a + b.value})

	def sumAmountsIn(boxes: Coll[Box]): Long = boxes
		.filter(isLegitBuyOrderInput) 
		.fold(0L, {(a:Long, b: Box) => a + b.value/getBuyRate(b)})

	def sumAmountsOut(boxes: Coll[Box]): Long = boxes
		.filter(isLegitBuyOrderOutput) 
		.fold(0L, {(a:Long, b: Box) => a + b.value/getBuyRate(b)})

  	val valuesIn: Long  = sumValuesIn(INPUTS)
  	val amountsIn: Long = sumAmountsIn(INPUTS)

  	val valuesOut: Long = sumValuesOut(OUTPUTS) 
  	val amountsOut: Long = sumAmountsOut(OUTPUTS) 

  	val deltaAmounts = amountsIn - amountsOut
  	val deltaValues = valuesIn - valuesOut

  	def tokensBought(boxes: Coll[Box]): Long = boxes
		.filter(isPaymentBox) 
		.fold(0L, {(a:Long, b: Box) => a + tokenAmount(b)})

  	val sentToBuyer = tokensBought(OUTPUTS)
  	val isBuyerPaid = deltaAmounts <= sentToBuyer 

	if(HEIGHT > unlockHeight(SELF)){
		getBuyerPk(SELF)
	}else{
		getBuyerPk(SELF) && getPoolPk(SELF) || sigmaProp(isBuyerPaid) && getPoolPk(SELF)
	}
}
```

SELL

```ergoscript
{	
	def getSellerPk(box: Box)              = box.R4[Coll[SigmaProp]].getOrElse(Coll[SigmaProp](sigmaProp(false),sigmaProp(false)))(0)
	def getPoolPk(box: Box)                = box.R4[Coll[SigmaProp]].getOrElse(Coll[SigmaProp](sigmaProp(false),sigmaProp(false)))(1)
	def unlockHeight(box: Box)             = box.R5[Int].get
	def getTokenId(box: Box)               = box.R6[Coll[Byte]].getOrElse(Coll[Byte]()) 
	def getSellRate(box: Box)              = box.R7[Long].get
	def getSellerMultisigAddress(box: Box) = box.R8[Coll[Byte]].get

 	def tokenId(box: Box) = box.tokens(0)._1
	def tokenAmount(box: Box) = box.tokens(0)._2
  
	def isSameContract(box: Box) = 
		box.propositionBytes == SELF.propositionBytes
  
	def isSameToken(box: Box)    = 
	  	getTokenId(SELF) == getTokenId(box) &&
	  	box.tokens.size > 0 &&
		getTokenId(SELF) == tokenId(box)

  	def isGreaterZeroRate(box:Box) =
    	getSellRate(box) > 0
  
	def isSameSeller(box: Box)   = 
    	getSellerPk(SELF) == getSellerPk(box) &&
    	getPoolPk(SELF) == getPoolPk(box)

  	def isSameUnlockHeight(box: Box)  = 
    	unlockHeight(SELF) == unlockHeight(box)

  	def isSameMultisig(box: Box)    =
    	getSellerMultisigAddress(SELF) == getSellerMultisigAddress(box)

	def isLegitInputBox(b: Box) = {
	    isSameContract(b) && 
    	isSameToken(b) && 
    	isSameMultisig(b) && 
    	isSameSeller(b) && 
    	isGreaterZeroRate(b)
	}
  
	def isPaymentBox(box:Box) = {
		isSameSeller(box) &&
    	isSameUnlockHeight(box) &&
		getTokenId(SELF) == getTokenId(box) &&
		getSellerMultisigAddress(SELF) == box.propositionBytes
	}
  
	def sumTokensIn(boxes: Coll[Box]): Long = boxes
		.filter(isLegitInputBox) 
		.fold(0L, {(a:Long, b: Box) => a + b.tokens(0)._2})
  
	val tokensIn: Long = sumTokensIn(INPUTS)
  
	val avgRateInputs: Long = INPUTS
    	.filter(isLegitInputBox)
    	.fold(0L, {(a:Long, b: Box) => {
    	  a + getSellRate(b)*tokenAmount(b)
    	}}) / tokensIn 
	
	val maxSellRate = INPUTS
    	.filter(isLegitInputBox)
    	.fold(0L, {(r:Long, box:Box) => {
		    if(r > getSellRate(box)) r else getSellRate(box)
		}})
  
	def sumTokensInAtMaxRate(boxes: Coll[Box]): Long = boxes
		.filter(isLegitInputBox)
		.filter({(b: Box)=> getSellRate(b) == maxSellRate})
		.fold(0L, {(a:Long, b: Box) => a + tokenAmount(b)})
  
	def isMaxRateChangeBox(box: Box) = {
		isSameSeller(box) &&
		isSameUnlockHeight(box) &&
		isSameToken(box) &&
		maxSellRate == getSellRate(box) &&
		isSameMultisig(box) &&
		isSameContract(box)
	}
  
	def tokensRemaining(boxes: Coll[Box]): Long = boxes
		.filter(isMaxRateChangeBox)
		.fold(0L, {(a:Long, b: Box) => a + tokenAmount(b)}) 
	
	val tokensBack: Long = tokensRemaining(OUTPUTS)
	val tokensSold: Long = tokensIn - tokensBack
  
	val nanoErgsPaid: Long = OUTPUTS
		.filter(isPaymentBox)
		.fold(0L, {(a:Long, b: Box) => a + b.value})
  
  	val valueOfSoldTokens: Long  = tokensIn * avgRateInputs - tokensBack * maxSellRate
  	val amountOfSoldTokens: Long = tokensIn - tokensBack
	val avgTokenPrice: Long =  valueOfSoldTokens / amountOfSoldTokens

	val tokensInputAtMaxRate = sumTokensInAtMaxRate(INPUTS) 
	val sellOrderChangeBoxIsFine = tokensInputAtMaxRate > tokensBack 
	val sellerPaid: Boolen = tokensSold * avgTokenPrice <= nanoErgsPaid
  
	val orderFilled = sellerPaid && sellOrderChangeBoxIsFine
  
	if(HEIGHT > unlockHeight(SELF)){
		getSellerPk(SELF)
	}else{
		getSellerPk(SELF) && getPoolPk(SELF) || sigmaProp(orderFilled) && getPoolPk(SELF)
	}
}
```

**PART II Built-in-Wallet**

To make the User Experience seemless we need to introduce a built in wallet. Open Source Exchange UI maintains a simple headless wallet that manages user balance based on his **DEPOSIT, SWAP, BUY, SELL** Boxes.

**1 click swap order:**  
When user Bob creates a swap order (see example above), the following background process is executed:

1. Bob sends a swap order request to CrystalPool
2. CrystalPool creates a multisig transaction with a public commitment
3. Bob receives an unsigned swap tx + commitment
4. Bob’s built in wallet partially signs swap tx and sends his hints bag to CrystalPool
5. CrystalPool signs swap tx and updates Bobs balance based on latest known unspent Boxes

**KYA**

All transactions are settled on L1 and thus require a transaction fee

CrystalPool maintains a public set of yet unsubmitted transactions

User balance is calculated in real time based on the latest known state of all unsubmitted transactions

CrystalPool cannot move user balance, each transaction requires userPK.

If CrystalPool service shuts down, the user can withdraw his deposits/oders after unlockHeight.

Riskvectors and metigations:

1. **Smart Contracts**

potential bugs in DEPOSIT, SWAP, BUY, SELL can cause a loss of user funds

2. **Built-in-wallet**

Note that Bob can run his own verified instance of the UI to protect himself against mallicios web interface updates. Bob also could enable explicit transaction signing either via built in or external wallet to increase his confidence/security. Bugs in the wallet/ui code are a potential risk factor.

3. **CrystalPool maintans unsubmited transactions**

All new unsubmitted Transactions are publicly available, users can maintain a copy of those to metigate the risk of losing latest balance changes due to service shutting down for ever.

4. **Multisig spending path requires poolPK to move funds**

If CrystalPool refuses to sign transactions at any point, at worst the user is forced to hodl until unlockHeight. After unlockHeight user is in full control of his funds.

---

### Post #2 — @kushti (2024-05-23)

Looks good overall !

What does

![](https://avatars.discourse-cdn.com/v4/letter/c/eb9ed0/48.png) c8e4:

> `getSellerPk(SELF) && getPoolPk(SELF)`

mean in the swap contract ?

---

### Post #3 — @c8e4 (2024-05-23)

`getSellerPk(SELF) && getPoolPk(SELF)`is a 2 out of 2 `sellerPK && poolPK` Multisig. `seller` in this case is the creator of this swap order, `pool` is the CrystalPool service.

This spending path has 3 use cases:

1. Cancel order: if the user wants to cancel his swap order we need to make sure that the pool service is aware of it.
2. Update unlockHeight: let’s assume that the swap order was created with an unlock height of a `initialHeight` + 30 days, after 29 pass this order needs to be updated with a new `unlockHeight` of `initialHeight` + 60 days to remain executable by the pool service.
3. Cancel Order and Withdraw (**main reason** for this spending path): when a user wants to withdraw his balance from DEPOSIT\_ADRESS to his PK address, all swap/buy/sell order can be canceled seamlessly in the same transaction as the withdrawal.

Attack vector:  
This spending path introduces an attack vector for a rogue pool service in which the seller has background transaction signing enabled and the pool service creates a stealing transaction. However similar scenario can occur in the when user withdraws his funds. Making background transaction signing in the user interface fully trustless without breaking UX is worth exploring!

Mitigation:  
Displaying a **simple** transaction summary, specially designed for each interaction with a confirm button is currently the best known option in terms of UX/Security trade-off.

---

### Post #4 — @c8e4 (2024-06-03)

I think there is a reasonably secure way to sign all transactions in the background without any user interactions with the wallet or any kind of transaction summaries (again we are talking about a built-in wallet). The key solution lies in the client environment:  
while impossible to achieve in a webUI, it’s pretty easy in a native app, an app that prohibits updates to it’s code in the background. Once the user has verified that the client code is secure, he can rely on internal transaction validation based on his actions.  
Please note that i believe it’s impossible to build a secure app with electron, but there is a great solution for turning WebUIs into native apps, called SocketSupply.
