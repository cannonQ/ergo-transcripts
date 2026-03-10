---
title: An Informal Approach To Specifying Multi-Stage Contracts
description: 'ErgoForum discussion: An Informal Approach To Specifying Multi-Stage
  Contracts'
tags:
- addresses
- appkit
- box
- collateral
- ergoforum
- ergoscript
- ergoscript-context
- flowcards
- multi-stage-contracts
- native-tokens
- registers
- singleton-/-state-nft
- state-machine
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/an-informal-approach-to-specifying-multi-stage-contracts/202
created: '2020-04-18'
last_activity: '2020-04-21'
posts_count: 4
views: 1004
likes: 7
glossary_hits:
- Addresses
- AppKit
- Box
- Collateral
- ErgoScript
- ErgoScript context
- FlowCards
- Multi-stage contracts
- Native tokens
- Registers
- Singleton / State NFT
- State machine
- Transaction
---

# An Informal Approach To Specifying Multi-Stage Contracts

> **Forum thread:** [https://ergoforum.org/t/an-informal-approach-to-specifying-multi-stage-contracts/202](https://ergoforum.org/t/an-informal-approach-to-specifying-multi-stage-contracts/202)
> **Category:** Uncategorized | **Created:** 2020-04-18 | **Posts:** 4 | **Views:** 1004

**Related concepts:** Addresses, AppKit, Box, Collateral, ErgoScript, ErgoScript context, FlowCards, Multi-stage contracts, Native tokens, Registers, Singleton / State NFT, State machine, Transaction

---

### Post #1 — @robert (2020-04-18)

Hey there everyone. After taking a stab at designing oTokens recently, I ended up thinking about what the best way to informally write a spec for a multi-stage contract would be. As such, this piece is the result. Please do note that the hyperlinking seems not to work in the forum, but if you check it out [on github](https://github.com/robkorn/blockchain-ruminations/blob/master/An%20Informal%20Approach%20To%20Specifying%20Multi-Stage%20Contracts.md) then you can get the full experience.

---

# An Informal Approach To Specifying Multi-Stage Contracts

[Multi-stage contracts](https://link.springer.com/chapter/10.1007/978-3-030-31500-9_16) are a fascinating tool for implementing complex protocols on a UTXO-based system. They allow for great expressiveness and are generally approachable due to the fact that different phases of a protocol are cleanly separated into their own sub-contracts.

With that said, multi-stage contracts are extremely nascent as a model. This means that though they may be simpler when compared to alternatives, complexity is still going to be present when dealing with protocols that require numerous stages. Furthermore, we could benefit from conveying to others how a protocol is supposed to be implemented and/or work without writing a single line of code. As such it would be quite handy to have a framework to informally define specifications for our multi-stage contracts that is understandable, easily traversable, and can be used as a guide for eventually writing both the on-chain and the off-chain code.

With those being the outlined goals at hand, I will present a schema down below which uses plain english together with markdown to produce an informal specification for multi-stage contracts. But first, let us look at an example informal specification which uses said schema to define an NFT Auction Multi-Stage Contract.

---

# NFT Auction Multi-Stage Contract

This contract allows for a user to initiate an on-chain auction for a NFT/singleton token which accepts bids in Ergs. This informal specification is based off of the discussion/original design from [this Ergo Forum thread](https://www.ergoforum.org/t/auctions-on-ergo/122).

## ToC

1. [Bootstrap Stage](#Bootstrap%20Stage)
2. [Auction Stage](#Auction%20Stage)

## Bootstrap Stage

This stage allows a user to initiate the auction. It requires that they provide their NFT and a box with Erg which represents the starting bid. There are no hard-coded values, registers, or path conditions because this is the bootstrap stage and thus there is no contract yet.

### List Of Paths

* [Initiate Auction Path](#Initiate%20Auction%20Path)

### Initiate Auction Path

#### Inputs

1. Box which holds the NFT that is to be put up for auction.
2. Box with Ergs equivalent to the starting bid price.

#### Outputs

1. A box locked under the Auction contract/stage that holds the NFT and Ergs from the inputs, which also stores the auction holder’s public key in register R4.

#### Leads To

[Auction Stage](#Auction%20Stage)

---

## Auction Stage

In this stage the NFT is held up for auction and anyone who has enough Ergs can place a bid before the auction ends. All new bids must increment by at least 0.5 Erg.

### Hard-coded Values

* Auction holder’s public key
* Auction end block height

### Registers

* R4: The current highest bidder’s public key

### List Of Paths

* [Bid Path](#Bid%20Path)
* [Conclude Auction Path](#Conclude%20Auction%20Path)

### Bid Path

This path recurses the box back into the Auction stage with the new Ergs held inside and the current winning bidder in R4 updated.

#### Inputs

1. The auction box.
2. Box(es) owned by the bidder which has enough Ergs to total the previous bid + 0.5 Erg.

#### Outputs

1. A new box locked under the Auction contract again which has the new bidder’s public key in R4, the NFT, and the Ergs for the bid.
2. A box owned by the previous bidder which gives them back the Ergs which they bid.

#### Path Conditions

1. The current block height must be less than the auction end block height hard-coded into the contract.
2. The first output box must be locked under the Auction contract and holds the bidder’s public key in R4, the NFT, and Ergs totalling at least 0.5 Erg more than the previous bid.
3. The second output box is owned by the previous bidder and has a total number of Ergs equal to their bid.

#### Leads To

[Auction Stage](#Auction%20Stage)

### Conclude Auction Path

This path allows for the NFT and the funds to be redeemed to the auction winner and holder respectively once the auction finish height has been reached. If no one bid on the auction then the auction holder still has their public key in register R4, and therefore can redeem both their NFT and their Ergs to themselves.

#### Inputs

1. The auction box.

#### Outputs

1. A box owned by the address stored in R4 which holds the NFT.
2. A box owned by the auction holder which receives all of the Ergs bid.

#### Path Conditions

1. The current block height must be grater than the auction end block height hard-coded into the contract.
2. The first output box must hold the NFT and be owned by the pub key stored in R4.
3. The second output box must hold all of the Ergs and be owned by the auction holder.

#### Leads To

Exit

---

# How Informal Multi-Contract Specs Are Written

As you can see above, the stages of the whole contract are laid out separately, each with their own paths for how to spend them (perform an action). These paths then further specify the expected inputs/outputs together with the contract logic required (path conditions). Lastly, each path specifies whether it leads to another stage (which is hyperlinked) or if it is an exit path (meaning that the contract has completed and the tokens/data can move out of the multi-stage contract).

Clearly writing out the inputs + outputs as well as the path conditions can feel a little verbose, however this is on purpose. One only needs to look at the required inputs + outputs when writing off-chain code setting up the transaction for a given path. On the flip side, when writing code which will live on-chain (the contracts), one only needs to pay attention to the path conditions of a given stage.

Every stage, path, and the contract itself also has room for a preamble/explanation of what is going on in the given section. This allows for the spec writer to add extra comments and/or make clarifications so that it is painfully clear how the multi-stage contract is supposed to work when sharing with others.

Using markdown we get the benefit of being able to hyperlink the stages in the ToC, the paths for each stage, and where each exit path leads to. This provides us with a reasonable interface for going through informal specifications and understanding how the different stages are inter-linked. With both an eagle’s eye view using the ToC as well as with a targeted/sequential view via following path hyperlinks, we have the ability to dig into how the parts and the whole of any given informal specification work.

With all of that said, let’s look at the markdown of these informal specs to understand how they are written (also can be found here in it’s own file).

```ergoscript
# Contract Name
Contract preamble

## ToC
1. [Bootstrap Stage](<#Bootstrap Stage>)
2. [X Stage](<#X Stage>)

## Bootstrap Stage
Preamble of how the contract is bootstrapped. There are no hard-coded values, registers,
or path conditions because this is the bootstrap stage and thus there is no contract yet.

### List Of Paths
- [Y Path](<#Y Path>)
 
### Y Path
Preamble

#### Inputs
1. ...
2. ...
3. ...

#### Outputs
1. ...
2. ...
3. ...

#### Leads To
[X Stage](<#X Stage>)

---

## X Stage
Preamble

### Hard-coded Values
- ...

### Registers
- R4: ...
- R5: ...

### List Of Paths
- [Y Path](<#Y Path>)
 
### Y Path
Preamble

#### Inputs
1. ...
2. ...
3. ...

#### Outputs
1. ...
2. ...
3. ...

#### Path Conditions
1. ...
2. ...

#### Leads To
`Hyperlinked name of next stage` OR `Exit`

---
```

Alternatively if the list format above is too crowded for inputs/outputs/conditions, the following format is available as well for more complicated contracts which have a lot of registers and/or tokens.

```ergoscript
#### Inputs 
##### Input #1
...
##### Input #2
...

#### Outputs
##### Ouput #1
...
##### Ouput #2
...

#### Path Conditions
##### Condition 1
...
##### Condition 2
...
```

This allows you to use lists within each given input/output/condition section, which can be used for explaining logic related to registers for example.

# Conclusion

This is a first attempt at creating an easy-to-use informal scheme for specifying multi-stage contracts on the Ergo blockchain. It is not even close to perfect and likely can have a number of improvements in readability and traversability.

That said, there is great utility in using a scheme like this. We currently do have a great alternative that is more formal and visual called [FlowCards](https://github.com/ergoplatform/ergo-appkit/blob/design-contracts/docs/design-contracts/design-contracts.md), however it is considerably more complex to get started using compared to writing a spec in plain english.

The markdown-based schema outlined in this document provides the writer the freedom to easily change what they’ve written as if they were writing an essay rather than the clunky feeling of writing compiled code (or a more formal spec). This flexibility is useful when one is working on figuring out how to implement a protocol and has the need to move fast/make edits quickly as previous ideas become obsolete/are found to be broken. Once an informal spec has been finalized, it can be a great idea to more formally specify it using FlowCards and gain the benefit of visualization (and potentially use it as an implementation tool if FlowCards eventually can compile down to ErgoScript).

If you have any thoughts/ideas for how to improve on the current scheme please feel free to make a suggestion.

---

### Post #2 — @kushti (2020-04-20)

I think both approaches (FlowCard / informal description) can be (formally) unified via foundational concept of finite state machine (interacting FSMs in general case). The informal description is close to FSM description, and FlowCard looks like flow charts arisen in different contexts (such as webflows, see, for example Spring Webflow framework). FSMs also allows for well-studied verification techniques, such as model checking (I played a bit with SPIN / NuSMV tools like 10 years ago), standardized descriptions, DSLs (such as Ragel), and so on. Also FSMs were proposed many times (in different settings) for financial contracts, see e.g. <https://www.financialresearch.gov/working-papers/files/OFRwp-2015-04_Contract-as-Automaton-The-Computational-Representation-of-Financial-Agreements.pdf> and <https://www.researchgate.net/publication/321325321_Designing_Secure_Ethereum_Smart_Contracts_A_Finite_State_Machine_Based_Approach>

However, there are many models in FSMs, and I am not sure that FlowCard is representing a most useful one (and usefulness function should be defined in the first place). I think formalized models (like FlowCard) should be checked with non-trivial examples (yAssets, o Tokens, complex financial contracts, maybe even one from the first paper above) and for non-trivial properties (such as impossibility to spend in the same block for the pool collateral contract).

Thus I suppose that initially it would be better to stick with informal description in order to collect a library of contract descriptions, issues, and motivations. Then it will be more clear which FSM model and tooling are better suited for Ergo contracts.

---

### Post #3 — @robert (2020-04-20)

Right, we are in essence diving into the world of automata theory/FSMs. I agree that what I wrote above and FlowCards are essentially informal/formal specs of FSMs, though specifically targeting the Ergo Multi-Stage Contract context.

I think one point to consider is what the usefulness of fitting into existing models of FSMs actually provide us for all of the effort. Existing tooling for writing formal specifications for automatons are general and would require some effort (in writing up some sort of library for the language itself and extensions to the tooling) that allow us to actualy be able to specify/model Multi-Stage Contracts and furthermore to cleanly show the data we desire in the visual representations (stack traces, labelled transition system graphs, …) in a clean and understandable way.

We can use formal specification languages and their tooling like [TLA+](https://lamport.azurewebsites.net/tla/tla.html) or [mCRL2](https://www.mcrl2.org/web/user_manual/index.html), which I’ve used before and are both great at what they do, but it will not be trivial to encode the model of smart contracts we are using in their languages. Furthermore it won’t be a great selling point of requiring individuals to learn both the given formal specification language, and then our library as the front-end interface for writing the spec itself.

The only major benefit I see from utilizing such tooling is that we can write specs formally, then write invariants for the protocol, and thus do model checking (verification) of the spec itself. Later when a user writes the actual contract, since we have Stainless, we can then specify the exact same invariants to then guarantee that the contract matches the formal specification.

However the fact that FlowCards are specific to our use case is actually a big plus. It won’t be trivial at all to automatically generate ErgoScript from general formal specifications languages, but it is considerably more plausible to do so from FlowCards. This means that theoretically we could write informal specs which informally define invariants required, create the FlowCard spec, generate the ErgoScript code, and then encode the same invariants via Stainless to essentially perform both stages of verification at once (that our formal specification keeps said invariants, and that the generated ErgoScript code does as well since it’s generated out of the formal spec).

My personal opinion would be for us to keep going our current route of designing languages/tooling which is useful for our context and then only utilize the useful parts of generic existing tooling. If they are indeed full fledged FSMs, then we should be able to go from FlowCard specs into LTS(Labelled Transition Systems) and utilize great existing tooling like [LTSmin](https://ltsmin.utwente.nl/) to then have access to the bleeding edge of automated formal verfication of our specifications (and visualisations as well once we hvae the LTS). From the LTSmin website:

> Implementing support for a new language module is in the order of 200–600 lines of C “glue” code, and automatically yields tools for standard reachability checking (e.g., for state space generation and verification of safety properties), reachability with symbolic state storage (vector set), fully symbolic (BDD-based) reachability, distributed reachability (MPI-based), and multi-core reachability (including multi-core compression and incremental hashing).

I think it’s great to fit into existing formal models/tooling if it provides us with a lot of benefits, but if we don’t assess the benefits then it can just get in the way of creating something practically useful without much to show for it.

In summary what I think the long-term optimal workflow for high-assurance contracts would be:

1. Create an easily-readable informal spec.
2. Create a formal spec that can be visualized automatically, formally verified against invariants, and converted into executable contract code/txs.
3. Have the auto-generated contract code from the formal spec verfied once again via stainless to guarantee that it keeps all expected invariants and still exhibits the properties initially stipulated within the spec.

This won’t be easy to implement, but I think it could be a long-term goal for deciding on the optimal formal spec language/format (FlowCards, or something else?), and then building all of the parts to make something like this work.

---

### Post #4 — @morphic (2020-04-21)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/robert/48/8_2.png) robert:

> However the fact that FlowCards are specific to our use case is actually a big plus. It won’t be trivial at all to automatically generate ErgoScript from general formal specifications languages, but it is considerably more plausible to do so from FlowCards.

Right. That was the idea, to capture Ergo’s transaction model explicitly and get benefits from domain-specific constructs. Ergo’s model is fixed and not supposed to change and there is typically a trade-off between generalization and optimizations (in all senses, performance, space, usability etc). Every FlowCard can be interpreted as FSM, but not every FSM is valid FlowCard. The general FSM tools don’t know about FlowCard specific semantics. The domain-specific semantics/constraints of FlowCards can be translated to the semantics/constraint language of more generic FSM tool. Those constraints would otherwise be tedious to specify manually without more high-level FlowCard specification.
