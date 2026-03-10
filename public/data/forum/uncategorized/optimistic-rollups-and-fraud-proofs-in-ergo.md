---
title: Optimistic Rollups and Fraud Proofs in Ergo
description: 'ErgoForum discussion: Optimistic Rollups and Fraud Proofs in Ergo'
tags:
- addresses
- avl-tree
- box
- collateral
- ergo-foundation
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- eutxo
- layer-scaling
- minimum-transaction-fee
- multi-stage-contracts
- native-tokens
- oracle-pools
- registers
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/optimistic-rollups-and-fraud-proofs-in-ergo/3819
created: '2022-08-29'
last_activity: '2022-12-10'
posts_count: 11
views: 1430
likes: 10
glossary_hits:
- AVL tree
- Addresses
- Box
- Collateral
- Ergo Foundation
- ErgoScript
- ErgoScript context
- ErgoTree
- Layer scaling
- Minimum transaction fee
- Multi-stage contracts
- Native tokens
- Oracle pools
- Registers
- Transaction
- eUTXO
---

# Optimistic Rollups and Fraud Proofs in Ergo

> **Forum thread:** [https://ergoforum.org/t/optimistic-rollups-and-fraud-proofs-in-ergo/3819](https://ergoforum.org/t/optimistic-rollups-and-fraud-proofs-in-ergo/3819)
> **Category:** Uncategorized | **Created:** 2022-08-29 | **Posts:** 11 | **Views:** 1430

**Related concepts:** AVL tree, Addresses, Box, Collateral, Ergo Foundation, ErgoScript, ErgoScript context, ErgoTree, Layer scaling, Minimum transaction fee, Multi-stage contracts, Native tokens, Oracle pools, Registers, Transaction, eUTXO

---

### Post #1 — @Quwin (2022-08-29)

# Optimistic Rollup Design in Ergo

###### Summary on the bottom

### Upgrading scalability while maintaining functionality

  

     
Layer 2 Scaling solutions have long been touted as a solution to scalability problems, allowing for transactions to take place off-chain or to be "rolled-up" into a single larger transaction. This means that individual transactions will take less computation power, and the same safety guarantees of the Layer 1 network apply.
  
      
This post concerns Optimistic Rollups, a Layer 2 Solution which has two main points:

* Optimistic - Assumes all transactions are valid by default, and they need to be proven wrong
* Rollup - Batches together multiple transactions (refered to here as subTx) into a single, larger one (refered to here as mainTx)

  

### An Optimistic Rollup in Ergo

  

     
Designing an Optimistic Rollup in Ergo has vast differences than an Optimistic Rollup in Ethereum, for better and worse. The environment is completely different, from the structure of tokens, with Ergo having native tokens, to the structure of transactions and data itself due to the eUtxo model vs the Account-based model, and the scripting language of ErgoScript vs Ethereum's Solidity.
  
      
Modifying and applying the structure of an Optimistic Rollup is not harder due to these changes, however. Key to the application of a rollup on Ergo, and any Layer 2 scaling solution on Ergo in general, is the [AvlTree](https://en.wikipedia.org/wiki/AVL_tree).

#### What is an AvlTree?

     
An AvlTree is a Binary Tree, able to efficiently hold a large number of Keys + Values. This type is also natively implemented in ErgoScript, allowing all ErgoScript contracts to utilize AvlTrees. In AvlTrees, getting values require having a Key + Proof of the action, calculated off-chain. Because the proof of an action is calculated off-chain, any actions interacting with an AvlTree on-chain can be optimized greatly, looking up only necessary values within a single transaction. Data storage within an AvlTree is also highly efficient, as not all of the data within an AvlTree needs to be accessed for any transaction.
  
      
The root hash of an AvlTree, its Digest, is an Array of 33 Bytes which holds the data for **ALL** data within the AvlTree. Through this digest, an AvlTree which holds hundreds of thousands of Bytes of data can be stored with only 33 Bytes.
  
      
Looking up values within an AvlTree is also highly effecient: the size of a proof grows logarithmically with the number of Keys within an AvlTree. For example, looking up a value from an AvlTree with around 1 million values takes a Proof of ~775-800 + the size of the Value's Bytes.

#### How would an Optimistic Rollup be stored?

     
An Optimistic Rollup in Ergo would be represented by a Box, holding two AvlTrees necesarry for the Layer 2 network:

* A main state AvlTree, listing all pseudoBoxes on the network
:   - Stores a list of pseudoBoxes (fake Boxes because they're on Layer 2), which are represented by the digest of an AvlTree with the pseudoBox's contents
* A unconfirmed transaction AvlTree, listing the past 5000 (subject to change) rollup transaction digests (the mainTx)
:   - Each mainTx can further be broken up into many subTxs (also an AvlTree Digest), an individual transaction submitted by any user
:   - SubTxs provide the past state before the subTx, the state after the subTx, and all of the pseudoBoxes used as an input and output

### Fraud Proofs in Ergo

  

     
Key to the usage of Optimistic Rollups are Fraud Proofs, essentially the proof that a given transaction is invalid. Because Optimistic Rollups default that any given transaction is valid, it is required that other users govern the rollup ecosystem, and prevent any invalid transactions from surviving the 5000 transactions to become accepted in the permanent state. Because verifying that an entire transaction is valid, whether through ZK SNARKs or ZK STARKs, is troublesome on Ergo (and I don't know much in that area), I have been working on a Fraud Proof that requires full knowledge, and goes through each step in full.

#### Isn't this very computationally expensive?

     
In short, both yes and no. Because a fraud proof only requires that a subTx or mainTx is proven wrong instead of right, a Fraud Proof is naturally much smaller than a Validation Proof. It's easier to show that a single rule was broken than that 100 rules were followed. However, without applying ZK SNARKs/STARKs, the size and computation necessary for a proof is larger than possible, and in fact regularly is much more than can be done in a single transaction, due to computation limits and the 95kb data limit. While submitting a fraud proof for an average subTx, with up to ~50 pseudoBoxes and somewhat simple scripts can be done in a single transaction, that is not good enough. To be a true Layer 2 Network, it has to be capable of supporting DeFi, large-scale payments, and all aspects which are available on Ergo's Layer 1.

#### Multi-stage Fraud Proofs

     
While only ~50 pseudoBoxes can be (in)validated if all aspects are handled within a single transaction, that does not need to be the case. One key aspect of Ergo, both a limitation and a blessing, is its use of Multi-stage Contracts. In short, ErgoScript as a scripting language is not Turing complete. Lacking basic programming functions as setting variables within the script, infinite loops, and other useful items, ErgoScript seems very limited from a first view. However, by creating Multi-Stage Contracts, ErgoTree scripts are able to achieve Turing completeness across multiple transactions while increasing the scalability of transactions which do not require multiple stages.
  
      
Multi-stage Contracts are smart contracts which, as the name implies, have multiple stages. By utilizing a required token(s) as a proof the multi-stage contract is being followed, ensuring that the token is only accessed with a valid starting condition, Multi-Stage contracts can prevent malicious actors from arbitrarily creating a starting point with their own data. Because ErgoTree scripts are limited, Box registers can act as variables, loops can occur by looping through the stage itself, and can span across as many or as few transactions as necessary. Multiple stages of a single contract can also be fulfilled within a single transaction, so Multi-stage Contracts do not negatively-affect scalability.
  
      
By splitting up a Fraud Proof throughout multiple stages, a Fraud Proof can get as large or as small as possible, and is not limited by a single transaction if necessary. A Fraud Proof for a subTx with ~50 pseudoBoxes can still be done within a single transaction, and a Fraud Proof for a subTx with ~100,000 pseudoBoxes can take one transaction or up to 850 transactions across 1-5 blocks, depending on where the fraud occured.

#### Note:

     
A currently planned maximum pseudoBoxes per subTx will be 100k pseudoBoxes, although 1 mil+ is possible. However, as Fraud Proofs become less efficient as the number of pseudoBoxes (and subTxs within a mainTx) increases, a limit is beneficial, not to mention strain on submitters to ensure every mainTx with 1 mil+ subTxs, and 1mil+ pseudoBoxes per subTx, that they're submitting is valid.
  
      
In addition, requiring more complex Fraud Proofs will either congest the main network due to requiring more mainnet transactions in a short period of time, or slow down the Layer 2 network as it waits for the fraud proof to be submitted and the state rolled back, and so strong incentives are required to prevent incorrect Txs, especially extremely complex incorrect Txs, are submitted.

### Conclusion

     
By utilizing the data storage capabilities of AvlTrees and the nearly unlimited power of Multi-stage Contracts, an Optimistic Rollup on the Ergo Network is viable if not inevitable way to provide scalability to Ergo. If this topic interests you, I am currently working on bringing this design into reality, although I lack the time and skills to do it all myself. As such, anyone with experience in or willing to learn Blockchain Tech (for the Layer 2), ZK SNARK/STARK cryptography, ErgoScript, Frontend dev work, Graphic design work, or anything they think might help is more than welcome. I also would like to form a dedicated team if possible, as I think my design and initial implementations are ready to go further.
  
      
Please contact me on Discord at Quwin#6226, or send me a message here!

---

### Post #2 — @CheeseEnthusiast (2022-08-29)

I think in general this makes a lot of sense. I myself am working on an optimistic rollup (though it is much more application specific than this one). A few questions that I have though:

* You mention pseudoBoxes a lot. What is your exact plan of dealing with them? Will they simply be bytes that are parsed and then handled during fraud proofs (and within smart contracts)?
* As I understand, subTxs here are equivalent to normal transactions on Ergo? Is this correct?
* You mention a limit of 100,000(!) inputs per subTx. This seems rather large. In the end, verifiers will have to perform off-chain computation on all transactions to ensure their validity. Do you think that off-chain verification will be too much for most verifiers to handle this kind of limit?
* subTxs are avl trees in your design. What is the structure of the avl tree (keys, values)?

And my last point / question:

As I understand, the main points of failures for rollups are “data withholding attacks”, in which sequencers (the ones posting rollups onto Ergo) can easily decide to not include / censor certain transactions. The main solution to this that I see is to ensure that sequencers are as decentralized as possible so that at least one honest sequencer exists.

You mentioned a limit of 100,000 input boxes. Besides the potential computation that verifiers must perform on this, sequencers themselves must also verify these transactions (in order to not have their rewards slashed from verifiers). Moreover, sequencers must store ALL of this data off-chain into multiple databases.

My biggest worry here is that this inherently centralizes the set of sequencers by requiring large amounts of hardware and storage. This in turn, provides sequencers an easier way to perform data withholding attacks. So in my question is, how do you plan on dealing with this problem, and what is your plan to decentralize sequencers (PoW, PoS, something else)?

All in all, great read, and very excited to have someone working on a general rollup that uses the Sigma State Interpreter for smart contracts ![:slightly_smiling_face:](https://emoji.discourse-cdn.com/twitter/slightly_smiling_face.png?v=12 ":slightly_smiling_face:")

---

### Post #3 — @Quwin (2022-08-30)

Thanks for the questions, the post was getting really big so handling these topics in the comments will be better.

1.PseudoBoxes are also going to be AvlTrees, or their digests to be specific. From a data storage standpoint that is the most efficient way to store a Box’s data as you won’t need access to all registers at once for a Fraud Proof. The Keys/Values would go as follows:

* blake2b256(“boxId”.toByteArray) | “idOfBox”
* blake2b256(“value”.toByteArray) | 1000000
* blake2b256(“creationHeight”.toByteArray) | 80808
* blake2b256(“numberOfScripts”.toByteArray) | 2
* blake2b256(“script”.toByteArray) | script.propositionBytes
* blake2b256(“script2”.toByteArray) | script2.propositionBytes
* tokenId1 | 1200000
* tokenId2 | 23000
* tokenId3 | 900000  
    
    
  Basically the keys for things all Boxes should have like an id (more on this later), at least 1 script, value in Erg, and creation height are known, and just are embedded within any Fraud Proofs which need those values. For Tokens, the Key is the token’s ID and the register the the number of that token. Box Registers can have their Keys freely chosen, but it can’t mess with the box’s Tokens or they’ll cause an invalid transaction. (I probably need to work on this)

2. Yeah a subTx is the equivalent of a normal transaction on Ergo.
3. First, one point i’d like to make was that the 100k number was for both Inputs and Outputs. But beyond that, I’m honestly not sure! I’m not very well versed in this area, and this was a key point in which I was looking for someone who understands Blockchain tech (maximizing decentralization while improving scalability) could help.  
        My understanding was that a subTx with such an excessive amount of pseudoBoxes was going to be an abnormality, and very rare. After all, there must be a valid reason for having such a large subTx, because the transaction fee will scale with the computation required for a transaction. As such, even if the transaction size was limited, it would end up occurring anyways, just across 2+ subTxs. And then because transactions are rolled up, computing everything at once is more efficient anyways.  
        I’m not sure about the time/computation power needed to validate such large transactions, but there shouldn’t be too many issues as a mainTx only needs to be submitted every block at most. (But again I’m not sure)
4. The Keys/Values would go as follows:

* blake2b256(“numberOfInputs”.toByteArray) | 10
* blake2b256(“numberOfOutputs”.toByteArray) | 10
* blake2b256(“startingState”.toByteArray) | startingMainState.digest
* blake2b256(“endingState”.toByteArray) | endingMainState.digest
* blake2b256(“box1”.toByteArray) | box1.digest
* blake2b256(“box2”.toByteArray) | box2.digest  
  … to box20  
    
    
  Also you didn’t ask but the mainTx is structured the exact same with but also with a transaction height, and subTxs instead of Boxes/Inputs/Outputs

5. Data Withholding Attacks are one of the biggest issues, and one which, as you said, is solved by opening up transactions to allow as many sequencers as possible, since only 1 honest sequencer is needed to prevent censoring. About data storage, I don’t see how that is a huge issue. The size of the Main State AvlTree shouldn’t be too large as it is optimized to only hold BoxIds + Digests, and data stored for validating new transactions shouldn’t be held for too long.  
        As each subTx only needs to be validated by them once, and can be validated in a vacuum independently from any other subTxs, sequencers should only have to store the data of a single subTx until they have confirmed it is valid. After that point, the data can freely be overwritten, and only the latest state needs to be continuously stored. In the event a subTx is found to be incorrect, it should be thrown out. Or, in the case of another sequencer’s transaction being found to be invalid, the sequencer (or anyone really) is free to submit a fraud proof.  
        As for the network itself, I was planning on having a PoS network to reduce computation power, and because having a PoW Layer 2 might pull hashrate from the Layer 1 itself. I don’t think having the Layer 2 mining compete would be wise, especially if Layer 2 transactions take a lot of computation power. One idea I had to get as much decentralization as possible, and increase security for Layer 1 as well, would be to give a set % of emissions to sequencers, another small % of emissions to Ergo MIners, and a last very small % of emissions to a foundation. In this way, a premine can be avoided despite being a PoS network, as emissions to Ergo miners can begin before the Layer 2 is even live.

---

### Post #4 — @CheeseEnthusiast (2022-08-30)

We discussed this in the L2 chat but the bigger problem now seems to be that holding transactions (and likely other data such as the script of an eUTXO) in an AVL Tree won’t work. I’d be interested in hearing your approach on how to fix that problem, specifically how you plan on compressing tx data down.

---

### Post #5 — @Seafarer (2022-08-30)

idk anything about code, but as for disincentivizing bad behavior couldn’t you require they put up collateral and that this gets slashed upon witholding attacks? otherwise they will get a fee, just like with oracle pools? proving they withheld info is up to someone else to figure out. idk if that makes your dapp too expensive to use tho…

---

### Post #6 — @Quwin (2022-08-30)

(post deleted by author)

---

### Post #7 — @Quwin (2022-08-30)

Yeah the biggest issue with that is proving that information was withheld, in a reasonable amount of data. If the full proof for all transaction data must be posted, then the size gets very large, so I’m working on possible compression techniques

---

### Post #8 — @CheeseEnthusiast (2022-08-30)

That’s pretty hard to prove that information was withheld. And how do you know the difference between withheld information and transactions that simply didn’t make it up into the rollup this time (due to congestion)? There might be ways to do this but it’d take a bit of thought. Slashing collateral is already used in optimistic rollups so I get where you’re coming from but the actual part about proving whether a transaction was withheld or not gets complicated.

---

### Post #9 — @Seafarer (2022-08-30)

oracle poool can select x # of addresses to release funds to every week or month. now this info can just get posted on a website

---

### Post #10 — @Seafarer (2022-08-31)

with big enough incentives for both oracle pools and sequencers eventually an honest one would come about. wouldnt it be proven if one person out of 9 other sequences didnt withhold? if rewards are not large enough then no one would look for this opportunity, or too few.

anyways, what i want to ask is why is this better than ergo’s ability to send to multiple addresses in a single transaction?

i also read kushti say he wants lightning network implemented, but that is an attack on network post emissions as miners dont get fees.

merchants with customer balances, something like patreon or youtube for example, could just wait to send out payments to content creators once they get 100 ppl qued up. that’s a reduction in tx fees by 99%. at a thousand ppl these get reduced bty 99.9%. both platforms have the volume. the business just needs volume and it seems to me we don’t need this stuff. even at 10 ppl tx fees get effectively reduced by 90% as they’re spread out. if they’re a smaller business they can throw their employees into the same que to help speed it up.

can a smart contract send out to multiple addresses in a single tx?

---

### Post #11 — @PGWAD (2022-12-10)

So Data availability is a necessary along with Data sampling.

I have been working on an approach from Prof David Tse using Asynchronous Verifiable Information Dispersal (AVID).  
Pls read this paper “Information Dispersal with Provable Retrievability for Rollups”

This approach is different from some of the existing approaches that use probabilistic sampling of data. This is not probabilistic sampling but deterministic sampling. I have some ideas on how to take this design and bring trustlessness in this.

If there is interest in this then we can discuss.
