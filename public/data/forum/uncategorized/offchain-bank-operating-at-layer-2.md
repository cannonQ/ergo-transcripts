---
title: Offchain Bank operating at Layer 2
description: 'ErgoForum discussion: Offchain Bank operating at Layer 2'
tags:
- addresses
- avl-tree
- box
- ergoforum
- ergoscript
- ergoscript-context
- kiosk
- layer-scaling
- native-tokens
- registers
- sigma-protocols
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/offchain-bank-operating-at-layer-2/3367
created: '2022-02-16'
last_activity: '2022-03-16'
posts_count: 4
views: 2063
likes: 23
glossary_hits:
- AVL tree
- Addresses
- Box
- ErgoScript
- ErgoScript context
- Kiosk
- Layer scaling
- Native tokens
- Registers
- Sigma protocols
- Transaction
---

# Offchain Bank operating at Layer 2

> **Forum thread:** [https://ergoforum.org/t/offchain-bank-operating-at-layer-2/3367](https://ergoforum.org/t/offchain-bank-operating-at-layer-2/3367)
> **Category:** Uncategorized | **Created:** 2022-02-16 | **Posts:** 4 | **Views:** 2063

**Related concepts:** AVL tree, Addresses, Box, ErgoScript, ErgoScript context, Kiosk, Layer scaling, Native tokens, Registers, Sigma protocols, Transaction

---

### Post #1 — @scalahub (2022-02-16)

The following describes an “offchain bank”, a layer 2 solution for Ergo that stores compact digests on the blockchain and a majority of transactions are stored offchain. Credit for the idea goes to [@kushti](/u/kushti)

## Model

There is a bank that maintains an offchain ledger of (key, value) pairs, where the key is the (hash of) the public key of the account holder and value is the balance in some tokens issued by the bank.

Users perform offchain transactions with the bank and the ledger keeps changing. Occasionally, the  
bank publishes a compact snapshot of the ledger on the blockchain chain along with some quantity of bank tokens in a box. The quantity of tokens should be more than the sum of all user’s balances in the ledger. Users are assumed to have knowledge of the entire ledger and are able to verify the published information.

If the bank disappears for a while then users should be able to prove ownership of their tokens and withdraw that many tokens from the box.

## AVL Trees

The ledger is stored as an AVL tree, which is a balanced and sorted binary tree. The AVL trees in Ergo store data only at the leaves and intermediate nodes are used for assisting search.  
We use an AVL tree as an authenticated data structure such that a short root digest authenticates the entire tree. Given the root digest and some value *x*, it is possible to prove the following statements via short “proofs”:

1. One of the leaf nodes is *x*
2. None of the leaf nodes are *x*

The above are called “lookup” proofs

Additionally, given two root digests and some value *x*, it is possible to prove the following:

1. The second digest corresponds to a tree where *x* was inserted into a tree with the first digest.
2. The second digest corresponds to a tree where *x* was removed from a tree with the first digest.

For a tree with *n* leaves the proofs are of size *O(log(n))*.

## Design

A bank transacts in an Ergo token *T* and offers following services to users:

1. Users can enrol to bank by providing their public key, which is stored off-chain.
2. Users can deposit tokens to the bank on-chain.
3. Users can transfer tokens between themselves offchain.
4. Users can withdraw tokens from the bank on-chain.

The bank operates transparently in the sense that the entire ledger of (public-key, balance) pairs is known to every customer.

The bank is identified by unique box (containing an NFT).  
Periodically, say every 1000 blocks, the bank spends this box and recreates a copy with some *T* tokens (in addition to the NFT) along with a root digest in R4. The bank’s public key is stored in R5.

The quantity of *T* tokens is one more than the sum of the balances of all users.  
When the bank publishes the box, users can verify that the information is indeed correct.

If the bank has not spent the box for more than 1000 blocks, the bank is said to become “defunct”.  
In this state, users can directly withdraw funds from the box by proving their balance in the ledger,  
and then removing their entry from the ledger. Whether the bank is defunct or not is stored in R6.

Each user is represented by a *SigmaProp* indicating their public key. The bank ledger is stored off-chain as a sequence of pairs *(public-key, balance)*.

For computing the on-chain digest, the following steps are followed:

1. The public-keys are hashed to obtain a hash, which will be used as the key for searching the AVL tree
2. The *(hash, balance)* pair is used to compute the root digest

Observe that while the search is done only using the hash, the digests are computed on the entire *(hash, balance)* pair.

The bank contract has the following conditions:

1. Bank public key can spend the box in any way, but must keep creation height within an error margin. Additionally the resulting box must not be defunct.
2. If the creation height is 1000 less than current height then anyone can put the box in defunct mode by changing R6, while preserving the remaining registers.
3. If the box is defunct then customers can withdraw tokens by proving that their hash exists in the current digest and correct removal in the new digest.
4. Bank can return and make the box functional again by removing the defunct status and updating other values as well.

The following is the complete contract

```ergoscript
// this box
// R4 root hash (Coll[Byte])
// R5 bank pub key (GroupElement)
// R6 Int (if == 0 indicates bank is not defunct)

// tokens(0) = bankNFT
// tokens(1) = bank issues tokens
{
   val timeOut = $timeOut
   
   val inCreationHeight = SELF.creationInfo._1
   val inLedgerTree = SELF.R4[AvlTree].get
   val inBankPubKey = SELF.R5[GroupElement].get
   val inIsDefunct = SELF.R6[Int].get != 0
   
   val out = OUTPUTS(0)
   
   val outCreationHeight = out.creationInfo._1
   val outLedgerTree = out.R4[AvlTree].get
   val outBankPubKey = out.R5[GroupElement].get 
   // just access it to ensure there is a group element
	
   val outIsDefunct = out.R6[Int].get != 0
    
   val validSuccessor = {
     out.propositionBytes == SELF.propositionBytes &&
     out.value >= $minStorageRent                  &&
     out.tokens(0) == SELF.tokens(0)               &&
     out.tokens(1)._1 == SELF.tokens(1)._1
   }
   
   val validBankSpend = {
     ! outIsDefunct                  &&
     proveDlog(inBankPubKey)         && 
     outCreationHeight > HEIGHT - 10 
   }
   
   val makeDefunct = {
     ! inIsDefunct                        &&
     outIsDefunct                         &&
     inCreationHeight < HEIGHT - timeOut  &&
     outLedgerTree == inLedgerTree        &&
     out.tokens == SELF.tokens         
   }
   
   val isWithdraw = {
     val withdrawBox = OUTPUTS(1)
     val withdrawTokenId = withdrawBox.tokens(0)._1
     val withdrawValue = withdrawBox.tokens(0)._2
     val withdrawKey = blake2b256(withdrawBox.propositionBytes)

     val removeProof = withdrawBox.R4[Coll[Byte]].get
     val lookupProof = withdrawBox.R4[Coll[Byte]].get
     
     val withdrawAmtCollByte = inLedgerTree.get(withdrawKey, lookupProof).get
     
     val userBalance = byteArrayToLong(withdrawAmtCollByte)
     
     val removedTree = inLedgerTree.remove(Coll(withdrawKey), removeProof).get
       
     val correctAmount = withdrawValue == userBalance
     val correctBalance = out.tokens(1)._2 == SELF.tokens(1)._2 - withdrawValue 
     val correctTokenId = withdrawTokenId == SELF.tokens(1)._1 
     
     inIsDefunct                  && 
     outIsDefunct                 &&
     removedTree == outLedgerTree &&
     correctAmount                &&
     correctBalance               &&
     correctTokenId
   }
   
   sigmaProp((validBankSpend || makeDefunct || isWithdraw) && validSuccessor)
}
```

Details of the contract (including tests) are given [here](https://github.com/ergoplatform/ergo-jde/tree/main/kiosk/src/test/scala/kiosk/avltree/bank).

---

### Post #2 — @Ergosmergo (2022-02-16)

We need a way to scale that’s for sure. Often off-chain solutions can come with off-chain security limitations how can Ergo prevent any manipulation of layer 2?. Are there any downsides to holding a great lot of tokens in one box? who owns the tokens the bank or the customer?

---

### Post #3 — @KDfi (2022-02-17)

HI , Love the things you guys are doing. We are currently bridging our off chain client requests for on chain transactions manually. Looking to Ergo allot these days… Its the future.

kise.money

---

### Post #4 — @KDfi (2022-03-16)

how can Ergo prevent any manipulation of layer 2?.  
read allot of great mind article more here…[Preventing Layer 2 security threats](https://www.techtarget.com/searchnetworking/tip/Preventing-Layer-2-security-threats)

My 0.02 Sats…

One of the most common security threats in the Layer 2 domain, and one of those least likely to be detected, is the threat targeted at disabling the network or compromising network users with the purpose of gleaning sensitive information such as passwords.

So, I think 4 shields

Port Security : limit and identify the MAC addresses of the stations that allow access to the same physical port

DHCP Snooping to define trusted ports, which can send DHCP requests and acknowledgements, and untrusted ports, which can forward only DHCP requests.

MIM attack shield :Dynamic ARP Inspection (DAI), ensure that the access switch relays only “valid” ARP requests and responses. DAI intercepts every ARP packet on the switch, and verifies valid IP-to-MAC bindings before updating the local ARP cache or forwarding them to the appropriate destination

IP host spoof shielding: Create an IP Source Guard ion the network, an attacker cannot launch an attack by assuming a valid user’s IP address. This will only permit forwarding of packets that have valid source addresses that are consistent with the IP Source binding table.

AND

GAURD EVERY PORT

Are there any downsides to holding a great lot of tokens in one box?  
I think the Greatest downside is ( as for all in this space) Security.  
Aggregated “held n trust” on stage accounts make great targets for bad Actors.

who owns the tokens the bank or the customer?  
Best case perspective may be …  
The *Account holder* has an equity interest in the Token book and the bank has a debt interest (As a " servicing trustee\*) the *Account holders* equity position increases only Net of : ( less fees, disbursement, margins and maybe tax treatments due) …
