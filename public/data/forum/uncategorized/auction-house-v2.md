---
title: Auction House V2
description: 'ErgoForum discussion: Auction House V2'
tags:
- auction-house
- eip-12
- ergoforum
- ergoraffle
- full-node
- native-tokens
- sigmausd
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/auction-house-v2/2931
created: '2021-11-09'
last_activity: '2022-08-11'
posts_count: 4
views: 1608
likes: 17
glossary_hits:
- Auction House
- EIP-12
- ErgoRaffle
- Full node
- Native tokens
- SigmaUSD
- Spectrum
- Transaction
---

# Auction House V2

> **Forum thread:** [https://ergoforum.org/t/auction-house-v2/2931](https://ergoforum.org/t/auction-house-v2/2931)
> **Category:** Uncategorized | **Created:** 2021-11-09 | **Posts:** 4 | **Views:** 1608

**Related concepts:** Auction House, EIP-12, ErgoRaffle, Full node, Native tokens, SigmaUSD, Spectrum, Transaction

---

### Post #1 — @anon_real (2021-11-09)

Ergo auction house has come a long way. At the start, it only supported the node as a wallet and no artworks, only ordinary tokens. Along the way, many features and standards were introduced which resulted in some adoption. Auction house V1 experienced more than 17000 transactions (bids and auctions) which is pretty impressive.  
However, it is time for more fundamental improvements with AH V2.

Here are only some of the new features:

* Much easier user experience for issuing artworks, starting auctions, and placing bids for both buyers and artists. This is done by supporting the Yoroi dapp connector (currently only works with Yoroi Nighty) and ErgoWallet Android (by easy QR codes)
* Many UI improvements including notifications, in the AH artwork issuance page, owned artworks section, and more.
* Supporting other currencies alongside ERG. Currently, the AH supports ERG, SigUSD, SigRSV, and kushti token (in [@kushti](/u/kushti)’s honor) as currencies.
* Royalty feature – artists can set royalty percentages for secondary sales upon issuance.
* Video NFTs.
* Audio NFTs with cover.
* Instant buy option.
* Better design for minimum bid which allows sellers to set the minimum bid amount as high as they wish without actually placing the first bid themselves.

And many other minor improvements.

In order to end the ongoing scams once and for all, the NFT copy detector (implemented by the community member Luivatra) has been directly integrated with the AH V2. Also, to decrease the chance of junk auctions, a starting fee for auctions has been introduced which is currently set to 0.1 ERG. This starting fee is a global config stored on the blockchain and will be increased/decreased accordingly with the price of ERG. Any remaining related issues will be solved with the introduction of verified artists to the AH (soon).

V1 auctions will be available on <https://v1.ergoauctions.org/>.

There are a lot more that can and should be done for the AH to be truly competitive with any other AH on other blockchains and I am aware of them. The next round of changes will focus more on fancier features that other auction houses like Opensea offer and it begins right after the release of V2.

Also, if you are an artist, you should read [this](https://www.ergoforum.org/t/artist-guideline/2929).

Last but not least, I’d like to thank [@Zimulakra](/u/zimulakra), @quokka, [@Foeniculum\_ERGnomes](/u/foeniculum_ergnomes), [@glasgowm](/u/glasgowm), and others for helping with the testing of AH V2.

---

### Post #2 — @Foeniculum_ERGnomes (2021-11-09)

Thanks so much for listening to both collectors & artists’ requests and for implementing them with such speed.

As you said, there’s still room for improvement but the current state of the auction house is already extremely competitive for a <1b project like Ergo, so we should be extremely proud of what we’ve built so far

Looking forward to further developing the Ergo NFT space! Exciting times ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=10 ":slight_smile:")

---

### Post #3 — @BKay (2021-11-19)

[@anon\_real](/u/anon_real) Great update! I have a question since you noted the other currencies that the Auction House will support. I created a new token on Ergo and it has a budding community behind it already. I’m working on getting it listed on ErgoDEX. When it gets listed, is there a process or application for getting it to be an accepted currency for the AH? I’m working on improving the use case and this would go a very long way into helping us develop!

My discord name is bkay if that’s an easier mode of communication for you. Thanks again!

---

### Post #4 — @anon_real (2022-08-11)

## Ergo Auction House and Ergo Team Development Support

Hi, community!

First I’d like to thank you all for your support in the [previous raffle](https://ergoraffle.com/raffle/show/cb7230b98005e4d381bbdae60167c26dc1862d9c5977be31cf1359d669966466). You can track the progress for both Auction House and ErgoTeam in the dev channel in Discord.

We have been building no matter the market conditions. However, these past few months have been rough on me to provide monthly salary to the team working on AH and Ergo Team. I’d like to kindly ask the community to provide any help they can for August’s salary for the team.

[Please consider supporting this raffle with any amount you can.](https://ergoraffle.com/raffle/show/648ac70eb11400e684ad3367825941e01a1ec536e4fd1f8478cf9ae94bab9b19)

We appreciate it!
