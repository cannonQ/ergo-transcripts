---
title: Updatable Oracle Pool Contract
description: 'ErgoForum discussion: Updatable Oracle Pool Contract'
tags:
- addresses
- box
- data-input
- ergoforum
- ergoscript
- ergoscript-context
- kiosk
- native-tokens
- oracle-pools
- registers
- sigma-protocols
- singleton-/-state-nft
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/updatable-oracle-pool-contract/707
created: '2021-02-23'
last_activity: '2021-02-23'
posts_count: 1
views: 862
likes: 4
glossary_hits:
- Addresses
- Box
- Data input
- ErgoScript
- ErgoScript context
- Kiosk
- Native tokens
- Oracle pools
- Registers
- Sigma protocols
- Singleton / State NFT
---

# Updatable Oracle Pool Contract

> **Forum thread:** [https://ergoforum.org/t/updatable-oracle-pool-contract/707](https://ergoforum.org/t/updatable-oracle-pool-contract/707)
> **Category:** Uncategorized | **Created:** 2021-02-23 | **Posts:** 1 | **Views:** 862

**Related concepts:** Addresses, Box, Data input, ErgoScript, ErgoScript context, Kiosk, Native tokens, Oracle pools, Registers, Sigma protocols, Singleton / State NFT

---

### Post #1 — @scalahub (2021-02-23)

Recently a new version of the ERG-USD Oracle-Pool was launched. The only difference from the earlier one is that this version has an *updatable contract*.

### What is an Updatable Contract?

Recall that Ergo has the concept of “contractual money”, which implies to Ergs (primary assets) and tokens (secondary assets) on the Ergo blockchain. Contractual money is essentially assets locked in  
contracts that restrict their free flow. Such contracts require that the assets be spent only in certain ways and can only be stored in boxes protected by certain contracts and containing certain data in their registers. One such example of contractual money is the oracle-pool box. An oracle-pool box contains a token that can only be stored in either a “live epoch box” or a “epoch preparation box” with additional conditions on the register values.

Such contracts make the system trustless. However, they also make it inflexible. For instance, if we want to change the oracle pool to allow higher deviation percent in the submitted rates, we cannot do it because the max deviation is hardcoded into the contract.

An updatable contract is one that can be updated based on some predefined voting mechanism.  
In order to change contract parameters, sufficient votes agreeing to the change must be cast.

### Update Requirements

We define the following requirements of our oracle-pool contract:

1. Update the script (address) of the epoch-preparation box
2. Preserve the registers of the bank box
3. Preserve the tokens of the bank box

### Voting Mechanism

In order to allow an update, we will require at least a certain minimum threshold number of holders of a certain token (the “ballot” token) to agree to the new script. Currently we have the following parameters.

1. Total number of ballot tokens: 12
2. Threshold for successful vote: 6

To cast a vote, each token holder just needs to compute the hash of (the ergo-tree of) the new address and store that value in R4 of a box along with a ballot token at the first index.

### Update Contract

The voting and update mechanism is managed by another box, called the *update box*. This box also hardwires the voting parameters mentioned above and is protected by the update contract. In particular this contract has the following actions (spending paths)

1. **Collect votes**: To finalize the new oracle pool epoch preparation box script via the hash stored in R4 of the ballot boxes. This preserves everything in the update box except R4, which will contain the hash of the new oracle-pool box.
2. **Update**: to perform the actual update of the oracle-pool (epoch preparation) box address while preserving its tokens and registers, and preserving everything in the update box

This update box is uniquely identified by a singleton token, the *update NFT*.

### Oracle-Pool Contract

The update will happen in the epoch preparation box, whose contract remains the same as before with  
an additional spending path pertaining the the update action above. This is encoded as

`originalPath || <second input contains the update NFT>`

The alternate spending path enforces no additional conditions apart from the requirement that the second input contains the update NFT. The various update constraints (such as preserving the registers  
and tokens) are enforced by the update contract instead.

### Actual Contracts

The following are the actual contracts taken from [here](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/kiosk/oraclepool/v5/OraclePool.scala)

Only epoch preparation and update contracts given, since these are the only contracts affected by this change

#### Epoch Preparation Contract

```ergoscript
{
  // This box:
  // R4: The finalized data point from collection
  // R5: Height the epoch will end

  val canStartEpoch = HEIGHT > SELF.R5[Int].get - $livePeriod
  val epochNotOver = HEIGHT < SELF.R5[Int].get
  val epochOver = HEIGHT >= SELF.R5[Int].get
  val enoughFunds = SELF.value >= $minPoolBoxValue

  val maxNewEpochHeight = HEIGHT + $epochPeriod + $buffer
  val minNewEpochHeight = HEIGHT + $epochPeriod

  val poolAction = if (OUTPUTS(0).R6[Coll[Byte]].isDefined) {
    val isliveEpochOutput = OUTPUTS(0).R6[Coll[Byte]].get == blake2b256(SELF.propositionBytes) &&
                            blake2b256(OUTPUTS(0).propositionBytes) == liveEpochScriptHash
    ( // start next epoch
      epochNotOver && canStartEpoch && enoughFunds &&
      OUTPUTS(0).R4[Long].get == SELF.R4[Long].get &&
      OUTPUTS(0).R5[Int].get == SELF.R5[Int].get &&
      OUTPUTS(0).tokens == SELF.tokens &&
      OUTPUTS(0).value >= SELF.value &&
      isliveEpochOutput
    ) || ( // create new epoch
      epochOver &&
      enoughFunds &&
      OUTPUTS(0).R4[Long].get == SELF.R4[Long].get &&
      OUTPUTS(0).R5[Int].get >= minNewEpochHeight &&
      OUTPUTS(0).R5[Int].get <= maxNewEpochHeight &&
      OUTPUTS(0).tokens == SELF.tokens &&
      OUTPUTS(0).value >= SELF.value &&
      isliveEpochOutput
    )
  } else {
    ( // collect funds
      OUTPUTS(0).R4[Long].get == SELF.R4[Long].get &&
      OUTPUTS(0).R5[Int].get == SELF.R5[Int].get &&
      OUTPUTS(0).propositionBytes == SELF.propositionBytes &&
      OUTPUTS(0).tokens == SELF.tokens &&
      OUTPUTS(0).value > SELF.value
    )
  }
  
  val updateAction = INPUTS(1).tokens(0)._1 == updateNFT && CONTEXT.dataInputs.size == 0
  
  sigmaProp(poolAction || updateAction)
}
```

#### Update contract

```ergoscript
{ // This box:
  // R4 the "control value" (such as the hash of a script of some other box)
  //
  // ballot boxes (data Inputs)
  // R4 the new control value
  // R5 the box id of this box

  val isUpdate = INPUTS(0).tokens(0)._1 == poolNFT
  val updateBoxIn = if (isUpdate) INPUTS(1) else INPUTS(0)
  val updateBoxOut = if (isUpdate) OUTPUTS(1) else OUTPUTS(0)
  val validIn = SELF.id == updateBoxIn.id

  val voteSuccessPath = {
    val newValue = updateBoxOut.R4[Coll[Byte]].get
    val oldValue = updateBoxIn.R4[Coll[Byte]].get

    val validOut = updateBoxOut.propositionBytes == updateBoxIn.propositionBytes &&
                   updateBoxOut.value >= $minStorageRent &&
                   updateBoxOut.tokens == updateBoxIn.tokens &&
                   newValue != oldValue

    def validBallotSubmissionBox(b:Box) = b.tokens(0)._1 == ballotTokenId &&
                                          b.R4[Coll[Byte]].get == newValue && // ensure that vote is for the newValue
                                          b.R5[Coll[Byte]].get == SELF.id  // ensure that vote counts only once

    val ballots = CONTEXT.dataInputs.filter(validBallotSubmissionBox)

    val ballotCount = ballots.fold(0L, { (accum: Long, box: Box) => accum + box.tokens(0)._2 })

    val voteAccepted = ballotCount >= $minVotes

    validOut && voteAccepted
  }

  val updatePath = {
    val epochPrepBoxIn = INPUTS(0)
    val epochPrepBoxOut = OUTPUTS(0)

    val storedNewHash = SELF.R4[Coll[Byte]].get
    val epochPrepBoxOutHash = blake2b256(epochPrepBoxOut.propositionBytes)

    val validPoolBox = epochPrepBoxIn.tokens(0)._1 == poolNFT && // epochPrep box is first input
                       epochPrepBoxIn.tokens == epochPrepBoxOut.tokens &&
                       storedNewHash == epochPrepBoxOutHash &&
                       epochPrepBoxIn.propositionBytes != epochPrepBoxOut.propositionBytes &&
                       epochPrepBoxIn.R4[Long].get == epochPrepBoxOut.R4[Long].get &&
                       epochPrepBoxIn.R5[Int].get == epochPrepBoxOut.R5[Int].get &&
                       epochPrepBoxIn.value == epochPrepBoxOut.value

    val validUpdateBox = updateBoxIn.R4[Coll[Byte]].get == updateBoxOut.R4[Coll[Byte]].get &&
                         updateBoxIn.propositionBytes == updateBoxOut.propositionBytes &&
                         updateBoxIn.tokens == updateBoxOut.tokens &&
                         updateBoxIn.value == updateBoxOut.value

    validPoolBox &&
    validUpdateBox 
  }

  sigmaProp(
    validIn && (
      voteSuccessPath ||
      updatePath
    )
  )
}
```

#### Tests

Please refer to the following tests for the update mechanism

1. [Voting spec](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/kiosk/oraclepool/v5/VotingSpec.scala) for testing the voting mechanism
2. [Update spec](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/kiosk/oraclepool/v5/UpdateSpec.scala) for testing the update mechanism
