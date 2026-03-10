---
title: ChainCash - a spender-signed currency on Ergo
description: 'ErgoForum discussion: ChainCash - a spender-signed currency on Ergo'
tags:
- addresses
- avl-tree
- box
- chaincash
- collateral
- dexy
- ergo-foundation
- ergoforum
- eutxo
- layer-scaling
- native-tokens
- rosen-bridge
- sigmausd
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/chaincash-a-spender-signed-currency-on-ergo/4015
created: '2022-10-07'
last_activity: '2023-02-21'
posts_count: 9
views: 3525
likes: 25
glossary_hits:
- AVL tree
- Addresses
- Box
- ChainCash
- Collateral
- Dexy
- Ergo Foundation
- Layer scaling
- Native tokens
- Rosen Bridge
- SigmaUSD
- Transaction
- eUTXO
---

# ChainCash - a spender-signed currency on Ergo

> **Forum thread:** [https://ergoforum.org/t/chaincash-a-spender-signed-currency-on-ergo/4015](https://ergoforum.org/t/chaincash-a-spender-signed-currency-on-ergo/4015)
> **Category:** Uncategorized | **Created:** 2022-10-07 | **Posts:** 9 | **Views:** 3525

**Related concepts:** AVL tree, Addresses, Box, ChainCash, Collateral, Dexy, Ergo Foundation, Layer scaling, Native tokens, Rosen Bridge, SigmaUSD, Transaction, eUTXO

---

### Post #1 — @kushti (2022-10-07)

Currently, DeFi space has a lot of issues. Stablecoin protocols are requiring solid overcollateralization or depend on external actors to preserve peg (such as Luna Foundation Guard). No any framework to combine collaterals and trust has been proposed to the moment. As a result, DeFi is not widely used outside of cryptocurrency users circles. I am going to propose a possible solution for DeFi which can be useful in the real world.

There is long-standing interest in grassroots financial systems in the Ergo community, such as Local Exchange Trading Systems (LETS). I am going to revive less popular alternative p2p monetary system in this post, which could be more appropriate and powerful to the needs of the real world probably when backed by the Ergo blockchain. As will be shown later, this design, a spender signed currency, is allowing to issue money in form of collectively backed IOU notes with flexibility in collateralization, trust, and thus cooperation (or, otherwise, sovereignity), as well as other properties.

The idea of spender-signed currency initially was described in the paper “Peer-to-Peer Money: Free Currency over the Internet” by Kenji Saito [1], but we are adopting it to the Ergo blockchain setting. Here is the short description of the idea. Anyone can create an IOU note (for starters, let’s assume fixed denomination of 1000 JPY). If owner is going to spend it (and a receiver is going to accept the note), the owner is signing the banknote. In turn, the receiver may spend the note, and he is also obliged to sign it on spending. Thus every note in the system has a chain of signatures of ones who ever spent it. Then, if someone is willing to redeem a note it holds, he reaching last signer first, then in case of last signer’s default, a signer before the last one, and so on. Thus the more signatures a note has, the better reserves behind it are (on average), and it is receiver responsibility to accept a note or not, by observing signatures on it and making a conclusion after (unlike state money or LETS notes, which must be accepted within specified circle or area).

We adopt this idea in the following way. First, a receiver may redeem against any previous holder immediately (so not the last signer first). Second, instead of signatures we have reserve boxes, protected by a contract (single signature, multi-signature in case of DAO, and so on).  
A reserve box may hold collateral in different forms (ERG, SigUSD, DexyGold, wrapped ADA tokens from Rosen etc, Comet tokens, options, NFTs, etc). A reserve box is associated with some unique (NFT) token. It is possible to withdraw from reserve boxes, but refund must be done in two-steps way, so initially announced, and after enough time (e.g. 1 month) completed, to give enough time for others to redeem.

Then every note has the same note contract, and also a commitment to previous signers (in form of AVL tree which contains unique ids of reserve box tokens), and id of current holder (next signer in the history), in form of current holder’s reserve box id. To spend a note, one needs to prove ownership for the reserve box (by satisfying reserve box protecting contract). It is not hard to support arbitrary denominations for notes (so during transfer we can have payment note output and change note output).

Then during the payment it is receiver’s responsibility to obtain history of notes, read reserve boxes and estimate backing (possibly consider some whitelists as well, so a note from a friend or known charity may be accepted with no anything backing it even). Complexity of this process could be reduced with software (its default settings or a risk profile to be chosen by user).

Interestingly, this design is about UTXO subcurrency, so monetary system encoded in UTXOs residing in Ergo UTXO set. Thus, unlike e.g. SigUSD, design here is truly eUTXO oriented. And the design is minimizing on-chain storage and decision-making. Also, I guess notes can be done on L2, even more, L1 and L2 notes can be combined (then it is up to processing software which kinds of note contracts to support, the same is true for reserve contracts).

I think *ChainCash* could be a good name for an implementation, but this question is open.

References:

1. Kenji Saito. Peer-to-Peer Money: Free Currency over the Internet <https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.98.7726&rep=rep1&type=pdf>

---

### Post #2 — @Hans (2022-10-08)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> It is possible to withdraw from reserve boxes, but refund must be done in two-steps way, so initially announced, and after enough time (e.g. 1 month) completed, to give enough time for others to redeem.

What is the definition of “withdraw” and “refund” here?

---

### Post #3 — @Dddlll (2022-10-10)

I had thoughts on something vaguely similar. This idea was more of an autonomous / independent layer to sit on top of an existing chain using nfts.

The idea was for a user to lock an amount into a smart contract eg 1000 ergo or £1000 and they would receive a single dynamic nft with that value represented as an image with a qr code. The qr code would act as a super lite wallet and give details of the nfts authenticity, spend address, top up address etc.

The nft should then be divisible into smaller value nfts eg if I was to spend 650 then the nft should dynamically update to a new value of 350 on my side and the receiver now has a 650 value nft.

At any point a holder of an nft should be able to burn the nft to receive the original backing collateral in whatever currency was used.

I’m not sure if something like this already exist?

---

### Post #4 — @Grayman (2022-10-16)

Bank notes were created because it would be difficult to carry and transact with large amounts of gold or silver, and much more secure to store the metal in the bank’s vault.

In the case of cryptocurrencies like Ergo, physical security is not an issue. The problem is that fixed quantity assets like ERG are deflationary (assuming growing adoption), and therefor not useful for commerce.

So I recognize your proposal as an alternative to a stable coin, where the collateral is widely distributed but accounted for in the system. Everyone can literally be their own bank, and issue certificates based on their own holdings. Fascinating. You are proposing to decentralize collateralized lending and spending to the max.

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> Complexity of this process could be reduced with software (its default settings or a risk profile to be chosen by user).

Making it simple to use would be critical to success. The problem with bank notes was the proliferation of many types, and the cost associated with recovering the original collateral when necessary. It was only by standardization on a central bank note that the paper dollar became truly useful as a universal currency.

Here we would need a standardized method of collateralization and issuance, as well as some standardized names and values for future transactions. One for dollars, one for yen, etc.

I really appreciate this idea, and I hope to see it play out, because this seems much more organic than relying on oracles and stability algorithms.

ETA name ideas:

PastCash  
PaidFore  
CashCycle

There would need to be a fast and low fee way to redeem in ERG, if desired… there also needs to be a way to cash out, for a larger fee.

ETA 2, left for clarity, **but this is a bad idea**: In the long run, with adoption, this is good to replace cash… In the short to mid term, it would be better to tie to other assets, like gold or such.

If I have 1000 ERG on contract, can I loan a quarter ounce of gold, and expect payment back in similar value in the future, especially if ERG appreciates compared to gold? Or more to the point, spend a quarter once of gold and the seller can expect to receive that back from their vendors?

ETA 3: Nah, forget that. It should just be for cash and cash equivalents. Gold is just another lock up, why spend collateral against collateral? This is for cash, and should be used to buy coffee or services of some sort.

---

### Post #5 — @Grayman (2022-10-29)

This sounds like running an account model on top of the UTXO chain using something resembling a debit card arrangement.

But are you proposing to spend ERG? Because the problem is that nobody really wants to spend ERG, ADA, BTC, or any other layer 1 asset. The beauty of this idea is that it lets you lock up value to create a cash like cryptographic certificate that you can spend with the expectation that it represents a dollar of value. Moreover, the recipient can do the same, or redeem it.

---

### Post #6 — @Grayman (2022-11-03)

You, know, the ones that really need this tech are the Night Owl folks…

Nobody wants to spend or **bet** ERG, ADA, BTC, etc. They just want to **save** them, and spend them only in special circumstances (to participate).

So, users of the casino would post ERG to a smart contract as collateral to bet against the house or other users, in $ or quid, or pesos, or whatever.

Is anyone else here a fan of the show Deadwood?

ETA (Sorry I think slowly): Imagine betting those gold coins… new name suggestion:

AureaCatena - “Golden Chain” in Latin.

---

### Post #7 — @Grayman (2023-02-15)

The paper you referenced by Kenji Saito is absolutely remarkable.

The ideas of a copyright/patent system, spam free email, it’s great. I guess thes would be side chains.

I thought more about the structure of this and LETS, and I must say I am thrilled to hear that you will be working on ChainCash in the hackathon.

I look forward to seeing the results.

---

### Post #8 — @bigoogawoogla (2023-02-20)

I propose

NAME: **P2P Cash**

---

### Post #9 — @Grayman (2023-02-21)

That’s good.

I bought a couple of domains:  
chaincash.app  
[aureacatena.com](http://aureacatena.com)

P2Pcash.app and P2P.cash were taken. So was chain.cash.

If the EF wants either of those domain names, I am willing to transfer them, [@Armeanio](/u/armeanio).
