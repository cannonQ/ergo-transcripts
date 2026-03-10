---
title: Some Details About Ergo Auction House
description: 'ErgoForum discussion: Some Details About Ergo Auction House'
tags:
- addresses
- auction-house
- box
- data-input
- eip
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- full-node
- native-tokens
- registers
- sigma-protocols
- sigmanauts
- sigmausd
- token-id-rule
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/some-details-about-ergo-auction-house/428
created: '2020-10-16'
last_activity: '2021-09-18'
posts_count: 37
views: 9026
likes: 102
glossary_hits:
- Addresses
- Auction House
- Box
- Data input
- EIP
- Ergo Explorer
- ErgoScript
- ErgoScript context
- Full node
- Native tokens
- Registers
- Sigma protocols
- SigmaUSD
- Sigmanauts
- Token ID rule
- Transaction
---

# Some Details About Ergo Auction House

> **Forum thread:** [https://ergoforum.org/t/some-details-about-ergo-auction-house/428](https://ergoforum.org/t/some-details-about-ergo-auction-house/428)
> **Category:** Uncategorized | **Created:** 2020-10-16 | **Posts:** 37 | **Views:** 9026

**Related concepts:** Addresses, Auction House, Box, Data input, EIP, Ergo Explorer, ErgoScript, ErgoScript context, Full node, Native tokens, Registers, Sigma protocols, SigmaUSD, Sigmanauts, Token ID rule, Transaction

---

### Post #1 — @anon_real (2020-10-16)

Hi community,

[Ergo Auction House](https://ergoauctions.org) is live!

I have started the first auction, everyone is welcomed to place bids and also start new auctions!  
The only wallet supported currently is the node’s wallet. Hopefully, soon support for other wallets like Yoroi will be added. I personally will add support for Yoroi when it is ready on Yoroi’s side but contributions are also very welcomed.

For some non-technical aspects, please see the FAQ page of the website. Below are some technical details about the app.

## Auction Contract

The auction contract is very similar to the discussion [here](https://www.ergoforum.org/t/auctions-on-ergo/122). A lot of the credit must go to [@robert](/u/robert) [@jasondavies](/u/jasondavies) [@kushti](/u/kushti) and [@scalahub](/u/scalahub) for their great discussion in that post which led to the current contract and app.

```ergoscript
{

  val seller = SELF.R4[Coll[Byte]].get
  val endTime = SELF.R5[Int].get
  val minBidDelta = SELF.R6[Long].get
  val currBidder = SELF.R8[Coll[Byte]].get
  val currBid = SELF.value

  val auctionLogic = if (HEIGHT < endTime) {
     val newSelf = OUTPUTS(0)
     val oldBidRefundBox = OUTPUTS(1)
     val newBid = newSelf.value

     newSelf.tokens(0) == SELF.tokens(0) &&
     newSelf.propositionBytes == SELF.propositionBytes &&
     newBid >= currBid + minBidDelta &&
     oldBidRefundBox.propositionBytes == currBidder &&
     oldBidRefundBox.value >= currBid &&
     newSelf.R4[Coll[Byte]].get == seller &&
     newSelf.R5[Int].get == endTime &&
     newSelf.R6[Long].get == minBidDelta &&
     newSelf.R9[Coll[Byte]] == SELF.R9[Coll[Byte]] &&
     newSelf.R7[Coll[Byte]] == SELF.R7[Coll[Byte]]

  } else {
     val winnerBox = OUTPUTS(0)
     val sellerBox = OUTPUTS(1)
     val feeBox = OUTPUTS(2)
     val dataInput = CONTEXT.dataInputs(0)
     val auctionFee = currBid / dataInput.R4[Int].get
     val feeTo = dataInput.R5[Coll[Byte]].get

     dataInput.tokens(0)._1 == auctionTwinToken &&
     feeBox.value >= auctionFee &&
     feeBox.propositionBytes == feeTo &&
     winnerBox.tokens(0) == SELF.tokens(0) &&
     winnerBox.propositionBytes == currBidder &&
     sellerBox.value >= currBid - auctionFee - maxFee * 2 &&
     sellerBox.propositionBytes == seller
  }
  sigmaProp(auctionLogic)
}
```

Where *auctionTwinToken* is “35f2a7b17800bd28e0592559bccbaa65a46d90d592064eb98db0193914abb563” and *maxFee* is 3000000 nano ERG.

## Business Aspect

There is a business aspect behind Ergo Auction House similar to one I have explained [here](https://www.ergoforum.org/t/running-a-business-on-top-of-ergo/423). When some auctioning is over, a small percentage of the final bid (2% currently) will go to the Ergo Auction House’s coordinator.

To elaborate more, the *auctionTwinToken* specified in the auction’s contract is the business’s token in a quantity of two. One of them is used to represent the data input, the other will be in hands of the business coordinator. One who has access to the second pair can receive the auction’s profit by modifying the data input. Here is the data input’s contract:

```ergoscript
{
  val isCoordinator = INPUTS(1).tokens(0)._1 == SELF.tokens(0)._1
  sigmaProp(isCoordinator && SELF.id == INPUTS(0).id)
}
```

This has some nice implications; For example, The coordinator can auction the second pair of the *auctionTwinToken* and hence auction the Ergo Auction House’s business.

## Some Security Aspects

The server is only being used to serve the app, Ergo Auction House will never send requests/info to the server.

The website is currently being served over HTTP since the node runs over HTTP and browsers don’t allow mixed-contents (HTTPS contexts to use HTTP requests). In order to participate in auctions or start new ones, one needs to have access to her node locally (or some kind of secure private network); Although it is possible to use node through the internet, I strongly advise against doing so.  
The app is completely open-sourced and accessible [here](https://github.com/anon-real/ErgoAuctionHouse).

Contributions are welcomed!

---

### Post #2 — @anon_real (2020-10-18)

The auction’s contract is updated to address an issue. Big thanks to [@jasondavies](/u/jasondavies) for reporting the bug. The fix is already done and is transparent for users!

---

### Post #3 — @anon_real (2020-10-19)

To address an issue raised by [@kushti](/u/kushti):  
“I think with strict deadline there’s a good strategy to get a better price: wait until few blocks before the end of an auction and then submit a slightly better price.  
So makes sense to prolong deadline for e.g. 30-60 blocks if bid made e.g. <= 10 blocks before the end.”

Here is the modified contract to take into account the time extension feature:

```ergoscript
{
  val seller = SELF.R4[Coll[Byte]].get
  val endTime = SELF.R5[Int].get
  val minBidDelta = SELF.R6[Long].get
  val currBidder = SELF.R8[Coll[Byte]].get
  val currBid = SELF.value

  val auctionLogic = if (HEIGHT < endTime) {
     val newSelf = OUTPUTS(0)
     val oldBidRefundBox = OUTPUTS(1)
     val newBid = newSelf.value
     val newEndTime = if (endTime - HEIGHT <= extendThreshold) endTime + extendNum
                      else endTime

     newSelf.tokens(0) == SELF.tokens(0) &&
     newSelf.propositionBytes == SELF.propositionBytes &&
     newBid >= currBid + minBidDelta &&
     oldBidRefundBox.propositionBytes == currBidder &&
     oldBidRefundBox.value >= currBid &&
     newSelf.R4[Coll[Byte]].get == seller &&
     newSelf.R5[Int].get == newEndTime &&
     newSelf.R6[Long].get == minBidDelta &&
     newSelf.R9[Coll[Byte]] == SELF.R9[Coll[Byte]] &&
     newSelf.R7[Coll[Byte]] == SELF.R7[Coll[Byte]]

  } else {
     val winnerBox = OUTPUTS(0)
     val sellerBox = OUTPUTS(1)
     val feeBox = OUTPUTS(2)
     val dataInput = CONTEXT.dataInputs(0)
     val auctionFee = currBid / dataInput.R4[Int].get
     val feeTo = dataInput.R5[Coll[Byte]].get

     dataInput.tokens(0)._1 == auctionTwinToken &&
     feeBox.value >= auctionFee &&
     feeBox.propositionBytes == feeTo &&
     winnerBox.tokens(0) == SELF.tokens(0) &&
     winnerBox.propositionBytes == currBidder &&
     sellerBox.value >= currBid - auctionFee - maxFee * 2 &&
     sellerBox.propositionBytes == seller
  }
  sigmaProp(auctionLogic)
}
```

Basically, the only change is in the first part of the contract where the R5 register (containing the end block height) must increase when tx is being mined within a threshold. The change is trivial but please audit to prevent potential holes.  
I think 15 and 20 for *extendThreshold* and *extendNum* respectively are potentially good choices.

Also, since some folks may care about the exact finishing height of their auction (either their auction is too competitive and the raised issue doesn’t happen or the seller just needs the money in time) I’m gonna make the option of whether to have this feature or not available when starting the auction; So basically, the app will support two auction’s contracts.

---

### Post #4 — @anon_real (2020-10-26)

Ergo Auction House is updated!  
It now supports auto extending auction’s duration if enabled:  

[![auto-extend](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/10852afbcb178eba93c0873b62d52ab3ab23a50f_2_690x328.png)

auto-extend806×384 25.4 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/10852afbcb178eba93c0873b62d52ab3ab23a50f.png "auto-extend")

  
Also, the update includes some minor UI improvements.

Please make sure the app is not cached by your browser in order to see the new version (use `ctrl+shift+R` or `cmd+shift+R` for force refreshing if needed)

---

### Post #5 — @robert (2020-10-27)

Nice job, great to see further updates.

---

### Post #6 — @anon_real (2020-11-05)

Here is the contract which allows the user’s funds to be spent only for a specific bid or returning to her. Please let me know if anything is overlooked.

```ergoscript
{
  val userAddress = PK("$userAddress")
  val bidAmount = $bidAmountL
  val endTime = $endTime
  val placeBid = {
    HEIGHT < endTime && INPUTS(INPUTS.size - 1).id == fromBase64("$auctionId") &&
      OUTPUTS(0).R8[Coll[Byte]].get == userAddress.propBytes && OUTPUTS(0).value == bidAmount
  }
  val returnFunds = {
    val total = INPUTS.fold(0L, {(x:Long, b:Box) => x + b.value}) - 4000000
    OUTPUTS(0).value >= total && OUTPUTS(0).propositionBytes == userAddress.propBytes
  }
  sigmaProp(placeBid || returnFunds)
}
```

---

### Post #7 — @anon_real (2020-11-08)

The Ergo Auction House is integrated with the [assember service](https://www.ergoforum.org/t/tx-assembler-service-bypassing-node-requirement-for-dapps/443) and is in the testing phase.  
It now supports any wallets for placing bids. I have created some test auctions in order to test both the new changes in the Auction House and the new assembler service before deploying it to [ergoauctions.org](http://ergoauctions.org) to make sure there are no issues with the assembler service.

You can find the new version [here](http://95.217.50.117:9000/). Please participate and spread the word to make sure all is ok for deploying.  
Report any issues here or on Github.

Just use the “Assember” option when configuring the wallet and you are good to go!  

[![assembler](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/f3868ac6348db63e44128041db9a6b50684f1b49_2_690x330.jpeg)

assembler2298×1102 197 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/f3868ac6348db63e44128041db9a6b50684f1b49.jpeg "assembler")

---

### Post #8 — @robert (2020-11-09)

Awesome work [@anon\_real](/u/anon_real), super cool to see this already coming to life after such a short span of time.

---

### Post #9 — @anon_real (2020-11-09)

Thanks, [@robert](/u/robert). I will be away for a few days and then I’ll write a detailed explanation of how the assembler service should be used for other dApp developers.

---

### Post #10 — @anon_real (2020-11-12)

The [Ergo Auction House](http://ergoauctions.org) is updated! It is now possible to use any wallet in a trustless and secure manner to place bids thanks to the [assembler service](https://www.ergoforum.org/t/tx-assembler-service-bypassing-node-requirement-for-dapps/443).  
Also, the update contains some improvements for interacting with the explorer.

Enjoy the Auction House with your favorite wallet!

---

### Post #11 — @kushti (2020-12-14)

Now running on HTTPS! <https://ergoauctions.org/#/auction/active>

---

### Post #12 — @Martin-mx (2020-12-16)

How To Issue An Artwork NFT Auction:

[![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a98e4641310598134ca2752fd11099bbc6f8e117.jpeg "How To Issue an Artwork NFT Auction - Ergo Blockchain")](https://www.youtube.com/watch?v=OAHFHrHq3Oc)

[twitter.com](https://twitter.com/ergoplatformorg/status/1338942493656821762)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/5/5afe809d1391a68333ae8736c48478567151efa5.jpeg)

#### [Ergo Sigmanauts](https://twitter.com/ergoplatformorg/status/1338942493656821762)

[@Sigmanauts](https://twitter.com/ergoplatformorg/status/1338942493656821762)

In less time it takes to make cereal, launch your NFT artwork auction on Ergo with any wallet - via [ergoutils.org](http://ergoutils.org) & the updated [ergoauctions.org](http://ergoauctions.org)!
Follow the guide attached! Kudos to Anon-real for dev & video, thanks to Yeti for vocals! [youtube.com/watch?v=OAHFHr…](https://www.youtube.com/watch?v=OAHFHrHq3Oc)

[8:22 PM - 15 Dec 2020](https://twitter.com/ergoplatformorg/status/1338942493656821762)

50

14

---

### Post #13 — @gmakri01 (2020-12-22)

Continuing the discussion from [Some Details About Ergo Auction House](https://www.ergoforum.org/t/some-details-about-ergo-auction-house/428/7):

Hi Anon- I was trying out the auction house for the first time today, actually won a bid for a small NFT. I entered a Yoroi wallet as it does say Yoroi supports tokens, however after winning the bid, i only see an incoming transaction to my yoroi wallet for 0.001 ERG. I’m sure I’m just not understanding but if someone can explain that would be helpful how I can confirm receipt of the NFT.

---

### Post #14 — @anon_real (2020-12-22)

Hi [@gmakri01](/u/gmakri01).  
Your NFT is safely stored in the Yoroi wallet but the UI currently doesn’t show it which will be added soon reportedly. So as long as you keep a little bit of erg in your Yoroi wallet, your NFT is safe and will be shown when UI supports it.

---

### Post #15 — @gmakri01 (2020-12-22)

Thanks so much for the quick response. Appreciate your help!

---

### Post #16 — @anon_real (2020-12-24)

Ergo Auction House now supports presenting the artwork!

As a part of the Artwork NFT standard, if the artwork’s URL is present in register R9 of the issuing box, then it will be detected and shown in the Auction House. To support that, [ergoutils.org](http://ergoutils.org) is updated to support uploading the artwork automatically without any further work needed by the user – this is optional and is helpful only for presenting the artwork.  
The only thing that needs to be done is to enable “Upload Artwork” when issuing the NFT and the rest will be taken care of automatically.  
However, this will be effective from now on and current active auctions can not be presented since they have not followed the above standard.  

[![ergoutils.org](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/b7acbc03ad2aad6cd0a67112b7b4d87c1c4bc99a_2_477x500.png)

ergoutils.org994×1040 62.8 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/b7acbc03ad2aad6cd0a67112b7b4d87c1c4bc99a.png "ergoutils.org")

Some test auctions are available here: <https://test.ergoauctions.org/#/auction/history>

---

### Post #17 — @anon_real (2021-03-03)

Hi Community!

I have received many requests for improving the UI/UX for Auction House. I have already addressed some of them but have been extremely busy with other stuff so couldn’t address some of them until now.

Since currently all of the auctions are Artwork auctions, I have updated the site to better fulfill the needs of artists.

First, the design for active auctions is completely changed:  

[![new-design](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/0ce14ab8f3c6afaefd1d077d66246e9444d089bb_2_517x323.jpeg)

new-design2880×1800 641 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/0ce14ab8f3c6afaefd1d077d66246e9444d089bb.jpeg "new-design")

Second, new filters have been added so that artist can follow the progress of their own artworks easier:  

[![new-filters](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/70325b0ee1a83cb9c5a2d88830907538a49491ad_2_322x250.jpeg)

new-filters1736×1344 280 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/70325b0ee1a83cb9c5a2d88830907538a49491ad.jpeg "new-filters")

So currently, Auction House is friendlier to artists but not others (for example those who want to sell ordinary tokens – there are none currently) so the code needs a lot of refactoring to generalize it again for all use-cases which I will do when I get some rest!

Please note that Auction House, unfortunately, has no other contributors and I have plenty of other, mostly more critical, things to do in the ecosystem. I will provide donations for those who are willing to contribute to the project and address users’ notes for improvements.

Enjoy!

---

### Post #18 — @anon_real (2021-03-08)

<https://ergoauctions.org> now supports audio NFTs - check it out [here](https://ergoauctions.org/#/auction/active?type=audio)!

You can issue your audio NFT using <https://ergoutils.org>.

---

### Post #19 — @anon_real (2021-03-08)

Please note that the link to audio has to be direct!  
When you paste the link in the field in ergoutils, you should be able to listen to the audio in the player that shows up, otherwise, your link is not direct.

---

### Post #20 — @anon_real (2021-08-15)

The auction house now supports artist page. Anyone can click on the artist address to see all his works.  

[![by](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/f7fc965cecea68bd896afb7d32a5b0deccef95ff_2_322x250.jpeg)

by736×570 88.4 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/f7fc965cecea68bd896afb7d32a5b0deccef95ff.jpeg "by")

Artists can share their page (all their artworks) on their socials. Example: [Ergo Auction House](https://ergoauctions.org/#/auction/active?type=picture&artist=9hX1nJkJu2hcsL2mQmwEtAsJUd94cyryzBFjXYSSzMdn6N87uDR,9fRR6Eopn68npaceuVHBunDRzmKeMDsTAu2GdZ6qYgo6pWHHvhg)

In general, if you for example have 3 addresses address1, address2, and address3 then your page will be: /#/auction/active?type=picture&artist=address1,address2,address3 - you can share your page to both present all your artworks and show authenticity of NFTs.

The artist of an artwork is determined by who has sent the necessary funds to issue the artwork. So I suggest to use a Yoroi wallet and use just a few addresses in that wallet for your artworks to be presentable easily,

---

### Post #21 — @Foeniculum_ERGnomes (2021-08-15)

This is honestly amazing, thank you so much!

---

### Post #22 — @anon_real (2021-08-17)

In this thread, I am going to discuss a solution for having NFT Royalty functionality on Ergo.  
Our goal is to pay the artist each time his artwork is auctioned and sold with some percentage of the amount.  
To achieve that, we can enforce the box with the same ID as the NFT to be provided to the auction contract. Then the contract can make sure that some percentage of the auction amount goes to the contract that is (was) protecting that box - that contract is the artist’s address or a proxy contract which is also spendable by the artist.

---

### Post #23 — @anon_real (2021-08-24)

The following is the new auction contract that supports custom tokens (e.g., SigUSD), royalties, and timestamp as auction duration:

```ergoscript
{
  val seller = SELF.R4[Coll[Byte]].get
  val endTime = SELF.R5[Long].get
  val minBidDelta = SELF.R6[Long].get
  val currBidder = SELF.R8[Coll[Byte]].get

  // auction currency can be any token like SigUSD
  val isCurrencyERG = SELF.tokens.size == 1
  val getAuctionCurrency = {(b: Box) => {
     if (isCurrencyERG) Coll[Byte]()
     else SELF.tokens(0)._1
  }}
  val getAuctionBid = {(b: Box) => {
     if (isCurrencyERG) b.value
     else SELF.tokens(0)._2
  }}
  val currBid = getAuctionBid(SELF)

  val extendThreshold = 30 * 60 * 1000L // 30 mins
  val extendNum = 40 * 60 * 1000L // 40 mins

  // this is a bid
  val auctionLogic = if (CONTEXT.preHeader.timestamp < endTime) {
     val newSelf = OUTPUTS(0) // new auction box
     val oldBidRefundBox = OUTPUTS(1) // refund box

     // we extend the auction end time if the bid is placed near the very end
     val newEndTime = if (endTime - HEIGHT <= extendThreshold) endTime + extendNum
                      else endTime

     // preserve auctioned tokens
     newSelf.tokens(0) == SELF.tokens(0) &&
     // correct value and contract for the new box
     getAuctionBid(newSelf) >= getAuctionBid(SELF) + minBidDelta &&
     newSelf.propositionBytes == SELF.propositionBytes &&
     // shouldn't be able to add tokens - will change the currency from ERG to a worthless token
     SELF.tokens.size == newSelf.tokens.size &&
     // currency must be the same
     getAuctionCurrency(SELF) == getAuctionCurrency(newSelf) &&
     // refund the previous bidder
     oldBidRefundBox.propositionBytes == currBidder &&
     getAuctionBid(oldBidRefundBox) >= currBid &&
     // preserve the auction config
     newSelf.R4[Coll[Byte]].get == seller &&
     newSelf.R5[Long].get == newEndTime &&
     newSelf.R6[Long].get == minBidDelta &&
     newSelf.R9[Coll[Byte]] == SELF.R9[Coll[Byte]] &&
     newSelf.R7[Coll[Byte]] == SELF.R7[Coll[Byte]]

  // auction has ended
  } else {
     val winnerBox = OUTPUTS(0)
     val sellerBox = OUTPUTS(1)
     val feeBox = OUTPUTS(2)

     val artistRoyalty = OUTPUTS(3)
     val originalIssuanceBox = artistRoyalty.R4[Box].get
     val dataInput = CONTEXT.dataInputs(0)
     val auctionFee = currBid / dataInput.R4[Int].get
     val feeTo = dataInput.R5[Coll[Byte]].get
     val artistShare = currBid / dataInput.R6[Int].get

     val artistGetsHisShare = {
       originalIssuanceBox.id == blake2b256(originalIssuanceBox.bytes) && // the box has integrity
       originalIssuanceBox.id == SELF.tokens(0)._1 && // the same ID as the NFT
       getAuctionBid(artistRoyalty) >= artistShare && // gets at least the percentage defined in the auction config box
       artistRoyalty.propositionBytes == originalIssuanceBox.propositionBytes // goes to the artist
     }

     dataInput.tokens(0)._1 == auctionTwinToken &&
     feeBox.value >= auctionFee &&
     feeBox.propositionBytes == feeTo &&
     winnerBox.tokens(0) == SELF.tokens(0) &&
     winnerBox.propositionBytes == currBidder &&
     sellerBox.value >= currBid - auctionFee - maxFee * 2 &&
     sellerBox.propositionBytes == seller &&
     artistGetsHisShare
  }
  sigmaProp(auctionLogic)
}
```

[@kushti](/u/kushti) [@scalahub](/u/scalahub) and others, please audit when you find the time - at least the changed/added parts.

---

### Post #24 — @Foeniculum_ERGnomes (2021-08-24)

Even royalties!! That is a godsend, thank you so much!  
A brief guide on how royalties will work would be greatly appreciated

---

### Post #25 — @anon_real (2021-08-24)

A predefined percentage of every auction will go to the original artist. The percentage is a global config and can be modified.

---

### Post #26 — @ZeroKnowledge (2021-08-27)

This is really great! I’m sure it will boost adoption of ergo NFTs ![:pray:t2:](https://emoji.discourse-cdn.com/twitter/pray/2.png?v=10 ":pray:t2:").

---

### Post #27 — @kushti (2021-08-30)

![](https://avatars.discourse-cdn.com/v4/letter/a/c68b51/48.png) anon\_real:

> The following is the new auction contract that supports custom tokens (e.g., SigUSD), royalties, and timestamp as auction duration:

Maybe it is worth to make an EIP out of it ?

---

### Post #28 — @root7Z (2021-08-30)

very good upgrade for artists

---

### Post #29 — @scalahub (2021-08-31)

As [@kushti](/u/kushti) said, will be good to have an EIP for this. Few details to be clarified:

1. What does R7 contain?
2. What is `tokens(1)` in non-Erg auctions? I am assuming `tokens(0)` is the NFT/tokens being auctioned and `tokens(1)` is the auction currency in non-Erg auctions

Can you add comments at the beginning of the code to explain? (example below)

```ergoscript
// R4 The seller's sigmaProp
// R5 The end time in millis
// R6 min bid delta
// R7 ...
// R8 Current bidder's sitmaProp
// R9 ...

// tokens(0) the tokens being auctions (if I understood correctly)
// tokens(1) the auction currency for non-erg auctions, otherwise empty

// dataInput(0) ...
```

This seems incorrect:

```ergoscript
// preserve auctioned tokens
newSelf.tokens(0) == SELF.tokens(0) && // tokens(0) preserved
// correct value and contract for the new box
getAuctionBid(newSelf) >= getAuctionBid(SELF) + minBidDelta &&
// tokens(0) not preserved above
```

because `getAuctionBid` operates on `tokens(0)` and so the tokens are preserved in one and not in the other line. This is related to next comment.

Also, the following seems incorrect:

```ergoscript
val getAuctionCurrency = {(b: Box) => {
   if (isCurrencyERG) Coll[Byte]()
   else SELF.tokens(0)._1
}}
val getAuctionBid = {(b: Box) => {
   if (isCurrencyERG) b.value
   else SELF.tokens(0)._2
}}
```

do you mean following?

```ergoscript
val getAuctionCurrency = {(b: Box) => {
   if (isCurrencyERG) Coll[Byte]()
   else b.tokens(1)._1 // should be b instead of SELF, and tokens(1)
}}
val getAuctionBid = {(b: Box) => {
   if (isCurrencyERG) b.value
   else b.tokens(1)._2 // should be b instead of SELF, and tokens(1)
}}
```

In preserving the auction config for a bid case, we also need to ensure that R8 is a `Coll[Byte]`, otherwise someone may set it to another type and make the box unspendable.

I’ll add more comments if any after the above is clarified

---

### Post #30 — @anon_real (2021-08-31)

Sure, will do that with addressing comments also.

---

### Post #31 — @Ergosmergo (2021-09-06)

Trying to list an NFT using Yoroi wallet is there any instructions thanks. NFT is an image

---

### Post #33 — @Zimulakra (2021-09-10)

Here you go! [@Ergosmergo](/u/ergosmergo)

How To Issue an Artwork NFT Auction

[![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a98e4641310598134ca2752fd11099bbc6f8e117.jpeg "How To Issue an Artwork NFT Auction - Ergo Blockchain")](https://www.youtube.com/watch?v=OAHFHrHq3Oc)

---

### Post #34 — @Ergosmergo (2021-09-11)

Thanks, I’ll check out the video here is an example of my NFT. I am also going to work with an artist to bring a limited collection of NFT if I get success with my first ERGO collection I will create more. Is there any option to add an IPFS hash to the image within the auction for the winning bidder so that the higher-res images can be downloaded?

Here is an example of what I can up with this is AI art generated by a neural network.

[![ergoimage13](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/9eefd97c8d046bf81648026bb05f1491152bc713_2_690x388.jpeg)

ergoimage131033×581 244 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/9eefd97c8d046bf81648026bb05f1491152bc713.jpeg "ergoimage13")

I am still thinking up some ideas. Since ETH blockchain is pricey for NFT I am pointing my artist friends more towards ERGO.

---

### Post #35 — @anon_real (2021-09-12)

Ergo Auction House and Ergo Utils now support IPFS.  
Any artwork (picture, audio) issued from now on, will be upload to IPFS.

Stay tuned for more updates.

---

### Post #36 — @anon_real (2021-09-17)

Another use-case for [recently found property](https://www.ergoforum.org/t/ergoscript-design-patterns/222/23) - using spent boxes as proof in ergo script:

An NFT collection is a category to which some NFTs belong. In the simplest case, an artist can have a “modern arts” collection and mint his modern arts in that collection. This way, an artist can have multiple collections to better present his artworks. This thread is a solution on how to handle collections in a decentralized way on Ergo.

Let’s consider each collection as an NFT on the blockchain with some properties like collection name, description, cover image, etc.  
The artist can create a collection NFT and own it in his wallet. Once he wants to mint an artwork in that collection, he can simply mint the NFT by putting the box containing the collection NFT in the first input of his minting transaction. The artwork NFT ID will be equal to the box ID containing the collection NFT. This way, not only it is possible to verify that artwork belongs to a specific collection off-chain, but also it is possible to do so in ergo script. The way to do that is by simply providing the spent collection box to the contract, then the artwork NFT ID must be equal to the provided box’s ID and the provided box must include the collection NFT. It is obvious that no one but the artist can mint artwork in that collection!

---

### Post #37 — @gagarin55 (2021-09-18)

Good idea, how we can calculate number of artwork tokens in a particular Collection ?

---

### Post #38 — @anon_real (2021-09-18)

If you mean off-chain, some app that cares (e.g., auction house) will keep track of collections. Then when an artwork is issued it is obvious that it is in one of the collections that we are keeping track of because the NFT ID is among the collection IDs.
