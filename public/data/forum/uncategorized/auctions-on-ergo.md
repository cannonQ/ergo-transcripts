---
title: Auctions On Ergo
description: 'ErgoForum discussion: Auctions On Ergo'
tags:
- addresses
- auction-house
- box
- collateral
- data-input
- eip
- ergoforum
- ergoscript
- ergoscript-context
- kiosk
- mempool
- native-tokens
- registers
- singleton-/-state-nft
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/auctions-on-ergo/122
created: '2019-10-29'
last_activity: '2020-12-14'
posts_count: 11
views: 2518
likes: 30
glossary_hits:
- Addresses
- Auction House
- Box
- Collateral
- Data input
- EIP
- ErgoScript
- ErgoScript context
- Kiosk
- Mempool
- Native tokens
- Registers
- Singleton / State NFT
- Transaction
---

# Auctions On Ergo

> **Forum thread:** [https://ergoforum.org/t/auctions-on-ergo/122](https://ergoforum.org/t/auctions-on-ergo/122)
> **Category:** Uncategorized | **Created:** 2019-10-29 | **Posts:** 11 | **Views:** 2518

**Related concepts:** Addresses, Auction House, Box, Collateral, Data input, EIP, ErgoScript, ErgoScript context, Kiosk, Mempool, Native tokens, Registers, Singleton / State NFT, Transaction

---

### Post #1 — @robert (2019-10-29)

I was speaking with [@kushti](/u/kushti) and he mentioned the idea that auctions are a potentially valuable unsolved problem in a UTXO system with a contract language like ErgoScript. I think I’ve come up with a pretty basic setup and thought it’d be good to give it some more form in a post here so others can poke at it and see if there’s any glaring obvious holes. (Do note I’ll be hand waving the actual script since I don’t have time to write it currently)

**How It Would Work**

Alice wishes to start an auction for a super special singleton token she created on top of Ergo. She decides that the auction is supposed to end on block #5000 and the winner of the auction is allowed to withdraw the won special token and pay out the winning auction bid Erg back to Alice (this is encoded in the script as the spending action allowed after block #5000).

R4 is the pre-defined registry which holds the current bidder address.  
R5 is the pre-defined registry which holds the current bid amount.

To start the auction Alice creates a box locked under this script with the super special token as input, her own address in R4, the value *0.1* in R5, and provides an input with 0.1 erg as the “base bid”.

Now before the auction end block(5000 in this case), anyone is allowed to spend the box given that they:

1. Keep the script the same
2. Increase the bid by putting a number greater than the previous bid in R5 (and locking an equivalent amount of Erg in the new box from one of their own inputs)
3. Return the previous locked Erg to the address that was previously held in R4

Anyone who wishes to take part in the auction can do so by spending the box and making a new bid up until block 5000. After the end block no more bids can be made and thus the address that is in R4 is officially the winner of the auction. They now have the right to withdraw the super special token which Alice originally locked in the box, and must pay out the final bid value that is in R5 to Alice’s address by sending the Erg locked in the box to Alice.

The situation above was just to make it easier to understand how it would work, but essentially it should be possible to encode any sort of “auction success” condition depending on if it’s a token that’s being bid on, a physical product, or anything else.

If no one bids on the auction, then Alice’s address is the final one that is in R4, and thus Alice can withdraw her locked initial bid + her super special token.

Using EIP-001 and maybe having some sort of internal auction ID encoded within the script (or a token? some standard can be set for this pretty easily) can make it easy for wallets to follow along with the progression of the auction.

In general this seems like a pretty simple setup to me, and one that should work without too many issues. I’d like to hear some feedback from you guys, especially if I’m missing out on a clear hole and/or attack vector that makes this a bad solution. Otherwise this shouldn’t be too complicated to implement in ErgoScript, just the complexity of the auction success condition may be the most challenging depending on the given usecase.

---

### Post #2 — @jasondavies (2019-10-30)

One improvement would be to allow Alice to withdraw the final bid value (with the condition that the token must be spent to the auction winner at the same time). This prevents the auction winner from failing to collect their winnings (either deliberately or accidentally) and depriving Alice of the final bid value.

---

### Post #3 — @kushti (2019-10-30)

The solution is surprisingly simple and straightforward, I need to say!

The withdrawal part:

> They now have the right to withdraw the super special token which Alice originally locked in the box, and must pay out the final bid value that is in R5 to Alice’s address by sending the Erg locked in the box to Alice.

could be made triggerable by anyone (not just auction winner) I guess, with withdrawal to be done to the predefined address.

---

### Post #4 — @robert (2019-10-30)

Ah, that is indeed a good point [@kushti](/u/kushti) [@jasondavies](/u/jasondavies), likely allowing anyone to trigger the success spend while forwarding the bid to the the auction creator and the token to the winner is an important improvement.

---

### Post #5 — @scalahub (2019-11-02)

The following is the code based on the original post.  
The full code is [here](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/org/sh/kiosk/ergo/Auction.scala).

Note that the code has some small differences The bid amount is directly stored in Ergs and bidder in R4. Let me know if any bugs … better still make a PR.

```ergoscript
{
  val endTime = 5000 // auction end
  val minBidDelta = 1000000 // nano ergs
  val currBidder = SELF.R4[GroupElement].get
      val currBid = SELF.value

  if (HEIGHT < endTime) {
     val newSelf = OUTPUTS(0) // new box created as a replica of current box
     val oldBidRefundBox = OUTPUTS(1)
     val newBid = newSelf.value
     val newBidder = newSelf.R4[GroupElement].get // just access it to ensure that it exists

     newSelf.tokens(0)._1 == SELF.tokens(0)._1 &&
     newSelf.tokens(0)._2 == SELF.tokens(0)._2 &&
     newBid >= currBid + minBidDelta &&
     oldBidRefundBox.propositionBytes == proveDlog(currBidder).propBytes &&
     oldBidRefundBox.value >= currBid
  } else {
     val winnerBox = OUTPUTS(0)
     val sellerBox = OUTPUTS(1)

     winnerBox.tokens(0)._1 == SELF.tokens(0)._1 &&
     winnerBox.tokens(0)._2 == SELF.tokens(0)._2 &&
     winnerBox.propositionBytes == proveDlog(currBidder).propBytes &&
     sellerBox.value >= currBid &&
     sellerBox.propositionBytes == proveDlog(alice).propBytes
  }
}
```

Suppose Alice wants to start with minimum bid of 0.001 ergs, she will create the auction box with that many ergs and store and her address in R4. This requires Alice to invest the initial amount. We could make the script a bit more advanced by allowing Alice to start with a small amount of Ergs and then requiring that the output’s ergs be >= some amount in addition to the current condition.

The current price is in Ergs and we can enhance this by allowing the bid to be in tokens (mapped to, for example, USD) and then require the new box to contain the ergs based on the rate oracle, while the refund box has the same amount in ergs as used in the bid (irrespective of rate).  
Feel free to add to the code for these features.

---

### Post #6 — @robert (2019-11-02)

Awesome work [@scalahub](/u/scalahub). Thanks for taking the time to implement the design into code.

I do wonder if having a variable-rate USD auction is attractive for auctions given that it could be abused by just one big market sell right before an important auction ends, which causes the USD value to plummet, which then allows potentially undercutting the final auction value (in Erg) substantially and winning while paying less Erg in total. Especially when the liquidity is not very great like now in the system, this could be abused (though I don’t think we’ll have a major influx of auctions suddenly on Ergo for the near future), so at the very least it’s something to think about.

---

### Post #7 — @scalahub (2019-11-08)

Hi Robert, yes there are some potential issues with usd token and sudden price drops. But this problem is in most applications based on rate.

Btw ergo auctions are a great idea… hopefully some real world use will be seen

---

### Post #8 — @jasondavies (2020-01-16)

A minor attack vector for this auction approach, which I think is quite easy to fix with some tweaks:

Essentially, it might be vulnerable to repeated small-increment bids by a malicious actor. They can ensure their small-increment bids get prioritised in the mempool by choosing a higher mining fee than anyone else. This is effectively a type of DoS/spam attack, exploiting the fact that only one bid can be made per block, and the bid with the highest mining fee will be mined in each block.

Of course, this creates a separate bidding war for mining fees, and this alone limits the potential attack depending on the size of funds involved, because for an N-block auction, the attacker must spend `N * fee`, and any interested bidders only need to outspend the attacker’s mining fee once to raise the bid and make it unprofitable for the attacker.

A potential solution could be to force the mining fee to be a function of the bid amount so that higher bids always get prioritised in the mempool. I don’t really like the idea of setting fixed mining fees because it’s brittle in situations where the blocks are full and the mining fees are raised, and no-one can participate in the auction because the fixed fees are too low. But this seems fairly unlikely and fees can always be adjusted for any particular auction.

Another idea could be to enforce each bid to be a certain amount higher than the previous one (or % based), so it would be too expensive to bid in every single block. Probably simpler than the mining fee solution.

---

### Post #9 — @scalahub (2020-01-19)

Interesting attack, and one that is not very obvious.  
I have not thought in detail but perhaps one solution would be to use “sealed bids”, where initially there is a *registration phase* where each party “registers a bid” by putting in a commitment to their bids and use the auction box as data input, so multiple transactions can use the same box.

Once the registration phase ends, the *bidding phase* starts, where any party may “complete the bid” by opening the commitment and spending the auction box to generate a new auction box with the corresponding ergs locked as collateral. The only rule in completing a bid is when your bid is higher than the existing bid. There should be enough time between end of registration phase and end of bidding phase, so that the highest bidder will have time to complete the bid.

---

### Post #10 — @kushti (2020-01-23)

I think both solutions proposed by Jason, so forced mining fee and minimum step are working but make a scheme dependent on concrete numbers during an instantiation. Minimum step is simpler and widely used in many real-world auctions AFAIK (for the same reason?).

solution by [@scalahub](/u/scalahub) as given has the same problem as the original proposal IMHO, as spam attacker can create a lot of spam boxes the registration phase and then perform the same spam attack as before during the bidding phase.

---

### Post #11 — @kushti (2020-12-14)

We have an implementation now! [Some Details About Ergo Auction House](https://www.ergoforum.org/t/some-details-about-ergo-auction-house/428)
