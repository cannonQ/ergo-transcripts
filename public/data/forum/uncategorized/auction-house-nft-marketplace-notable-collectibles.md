---
title: Auction House - NFT Marketplace - Notable Collectibles
description: 'ErgoForum discussion: Auction House - NFT Marketplace - Notable Collectibles'
tags:
- addresses
- auction-house
- box
- difficulty-adjustment
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- full-node
- native-tokens
- soft-fork
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/auction-house-nft-marketplace-notable-collectibles/429
created: '2020-10-16'
last_activity: '2021-09-17'
posts_count: 25
views: 2685
likes: 33
glossary_hits:
- Addresses
- Auction House
- Box
- Difficulty adjustment
- Ergo Explorer
- ErgoScript
- ErgoScript context
- Full node
- Native tokens
- Soft fork
- Transaction
---

# Auction House - NFT Marketplace - Notable Collectibles

> **Forum thread:** [https://ergoforum.org/t/auction-house-nft-marketplace-notable-collectibles/429](https://ergoforum.org/t/auction-house-nft-marketplace-notable-collectibles/429)
> **Category:** Uncategorized | **Created:** 2020-10-16 | **Posts:** 25 | **Views:** 2685

**Related concepts:** Addresses, Auction House, Box, Difficulty adjustment, Ergo Explorer, ErgoScript, ErgoScript context, Full node, Native tokens, Soft fork, Transaction

---

### Post #1 — @Martin-mx (2020-10-16)

Hello community,

Thanks to the huge support of our anon developers, [Ergo Auction House](https://ergoauctions.org/) is now live!

[![auctionhouse](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/03fa78de91a5840253739afa4fead19daf28092f.jpeg)

auctionhouse1200×596 28.2 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/03fa78de91a5840253739afa4fead19daf28092f.jpeg "auctionhouse")

Details can be found on the [blog](https://ergoplatform.org/en/blog/2020-10-16-announcing-the-auction-house-nft-marketplace-on-ergo/) and in this [thread](https://www.ergoforum.org/t/some-details-about-ergo-auction-house/428).

The first auction is live and it is a very special one: “By anon\_real; [The very first PoW-backed NFT issued on Ergo](https://explorer.ergoplatform.com/en/transactions/e8eb1f45619ea4e2ab631f5459212bfcc7c5208443a07626273f7e207c4cda98). Contains “ergo” in base16 (6572676f). Also, the first NFT auctioned on Ergo Auction House!”. At the same time, It is a good occasion to support anon developers and win nice collectible! You can follow the progress of auctions [here](http://ergoauctions.org/#/auction/active).

Any community member is free to create their own auctions(requires full node at the moment). If you are willing to do so and have some nice ideas in mind, please post them in this thread.

Enjoy ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=9 ":slight_smile:")

---

### Post #2 — @Martin-mx (2020-10-20)

![](https://ergoplatform.org/favicon.svg)
[ergoplatform.org](https://ergoplatform.org/en/blog/2020-10-19-the-first-ergo-nft-auction-is-under-way/)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/786f3a577f857677c432122a9392068ef9ccdffb.jpeg)

### [The First Ergo NFT Auction Is Under Way!](https://ergoplatform.org/en/blog/2020-10-19-the-first-ergo-nft-auction-is-under-way/)

The first ever PoW-backed NFT …

---

### Post #3 — @Zimulakra (2020-12-27)

I have some notes to improve on the Auction House.  
Is feedback of interest to anybody and if so is this the best place to post it?

---

### Post #4 — @anon_real (2020-12-28)

Sure. You can:

* Open issues here: <https://github.com/anon-real/ErgoAuctionHouse/issues>
* Send me DM in discord
* Post your notes here

---

### Post #5 — @Zimulakra (2020-12-28)

Here are some ideas and notes

1. That would be nice to be able to sort/filter the current auctions by different values - like sort by lowest or highest price first. Maybe the default sorting should be which ever auction is ending first
2. Maybe have artwork images visible on the main page, so that bidders can quickly scan rather than having to click into each auction to see an image.
3. I am currently seeing a little white bar at the bottom of each artwork image in the popup window
4. It might be beneficial to have a url for individual artwork so that links to the auction for that specific work could be sent to a friend or promoted on social media
5. It would be great to be able to combine the minting/auction setup into one step so that there is less pasting of addresses and amounts between the windows of Ergo Utils and Ergo Auction House
6. It could be helpful to have a preview of exactly how the auction will look before it goes live.

That’s all i’ve got at the moment. Thank you for listening

---

### Post #6 — @anon_real (2021-01-03)

All your notes seem good to me except the number 5. The current approach is a workaround because wallets generally don’t support token issuance currently, so can’t do anything about it.

Since I’m busy with some other stuff as well, I’ll work on your suggestions gradually. For now, I have added a specific link for each auction to make it possible to promote.

![specific_link](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/4ce5d35db6294e5e71cdab8b367feb0f5a79a15a.png)

---

### Post #7 — @Zimulakra (2021-01-06)

A “buy it now” option could be nice

---

### Post #8 — @anon_real (2021-01-17)

Sorting is also done.

[![sort](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/c6a9a7349860b3eb2277cee1c786dc3f2130651a_2_248x250.png)

sort574×578 28 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/c6a9a7349860b3eb2277cee1c786dc3f2130651a.png "sort")

---

### Post #9 — @Zimulakra (2021-01-22)

I think this sorting function is a huge help!  
Thank you

I had a few more thoughts on useful features.

• A “buy it now” price could be nice for both the bidder and the seller  
• Being able to set the auction to end on a specific block or at a specific time could be nice  
• Maybe a sort by most recent bids so you can see what has been bid on most recently

---

### Post #10 — @anon_real (2021-01-22)

* “buy it now” option requires a change in the smart contract which may take some time to do right.
* If you don’t enable “Auto Extend” then your auction will be finished on a specific block.
* Sure.

---

### Post #11 — @Zimulakra (2021-01-23)

I’m just throwing out ideas of what might be useful as I come across them. I’m not sure if it is easy to do updates one at a time or in groups.

• Visual flag to indicate if you are winning one of the auctions  
• Visual flag to indicate if you have been outbid  
• Sort by auctions you are winning/bid on

---

### Post #12 — @Zimulakra (2021-01-29)

I feel like it would be really great to have images of the NFTs visible without having to click into them. I think it would boost engagement a lot.

---

### Post #13 — @anon_real (2021-02-04)

Sure. I’m busy with some other stuff currently. Will do this after.

---

### Post #14 — @Zimulakra (2021-02-08)

• would be helpful to display the minimum cost to place the next bid without having to click in

---

### Post #15 — @Zimulakra (2021-02-14)

I’m not sure why blocks were recently mined so fast, but it might be more predictable for users to tie the auctions ending to a timestamp rather than a block.

---

### Post #16 — @kushti (2021-02-14)

We had mining difficulty drop today as a consequence of the protocol upgrade. So we had a lot of blocks today. Now things are getting back to normal.

Using timestamp is possible, requires for contracts update though.

---

### Post #17 — @anon_real (2021-02-15)

[@Zimulakra](/u/zimulakra) drastic changes in block mining rarely happens (hopefully never again).

[@kushti](/u/kushti) how is it possible to check the timestamp in contracts? using external services like [A trustless timestamping service for boxes - #9 by scalahub](https://www.ergoforum.org/t/a-trustless-timestamping-service-for-boxes/432/9)?

---

### Post #18 — @kushti (2021-02-15)

Just read timestamp from last block header

---

### Post #19 — @Zimulakra (2021-02-25)

I think having artwork images visible on the front page would greatly increase the user experience on the auction house and help high quality work gain momentum.

If load times are an issue, maybe when the auction is created there could be a user input area to link to a smaller image for the thumbnail.

Thank you ![:pray:](https://emoji.discourse-cdn.com/twitter/pray.png?v=9 ":pray:")

---

### Post #20 — @crandano (2021-02-25)

^That would be awesome. Is there also a way for a separate area or way to differentiate for music?

---

### Post #21 — @thaturbo (2021-03-01)

**Hello, Ergonauts,**  
I did not saw in auction any encrypted link option will be uploaded/llinked from seeller with it’s unique digital art and opened when item is bought where the buyer will get the original (non preview) art from decrypted at auction item time-or-block end point? In a shorter sentence:  
<> Item Description;  
<> One link/upload slot for preview;  
<>One link for encrypt original art file untill end of item auction to receive from buyer.  
?

Greetings from StefanKov

---

### Post #22 — @scalahub (2021-03-02)

That service also depends on block height so it won’t work here. Just checking block timestamp as kushti said will probably work

---

### Post #23 — @Zimulakra (2021-03-14)

I’m trying to make bids on a bunch of NFT’s but it seems I can only make one bid per block.

Is there a good way to make multiple bids at the same time to speed up the process?

Right now i’m paying from Yoroi, and I get this warning message.  
“Cannot send a new transaction while an existing one is still pending.”

---

### Post #24 — @Dergler (2021-04-01)

I’ve experienced that too, the auction house is a fantastic start to building the NFT community but could use some more support from us! I’d love to keep building the nft community. Wanna start? There’s some awesome things to sort out. Tons of opportunities. Auction house brought me into ergo and now I want to build up.

Anyways, while I’m not a dev I’m sensing that the NFT community that’s forming could come together and start identifying where we want to take NFTs on Ergo. There’s great tech here to build up on!

Royalties of some kind?  
P2P trading platform, with ergoscript backed escrow?  
Multi bids?  
Allowing more competitive bidding? (I’ve been blocked out by another collector out bidding me, then a pending transaction hits my wallet. You could block someone out for a loooong time with this method)

Metadata standards? All great things to build.

---

### Post #25 — @rxthepharmtech (2021-09-17)

My buddy & I made a video presentation of how to improve Audio NFTs & NFTs in general. Perhaps expanding the auction house to include a licensing marketplace similar to “Envato (audiojungle)/Motion Array” will help it grow. As far as we’ve seen, this has yet to be done by any platform. Huge task indeed but the more options the better!

[![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/0/0458e4bd0fa8e55c88cf03d47b5bba89e48b21cb.jpeg "Audio NFT Presentation - Problems & Possible Solutions")](https://www.youtube.com/watch?v=ygn2JsFIx1E)
