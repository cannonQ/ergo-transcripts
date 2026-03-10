---
title: 'Ergo Escrow: Craigslist improvement for real-fi'
description: 'ErgoForum discussion: Ergo Escrow: Craigslist improvement for real-fi'
tags:
- ergoforum
- native-tokens
- sigmafi
- tokenjay
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-escrow-craigslist-improvement-for-real-fi/4236
created: '2023-03-05'
last_activity: '2025-01-18'
posts_count: 4
views: 405
likes: 10
glossary_hits:
- Native tokens
- SigmaFi
- TokenJay
- Transaction
---

# Ergo Escrow: Craigslist improvement for real-fi

> **Forum thread:** [https://ergoforum.org/t/ergo-escrow-craigslist-improvement-for-real-fi/4236](https://ergoforum.org/t/ergo-escrow-craigslist-improvement-for-real-fi/4236)
> **Category:** Uncategorized | **Created:** 2023-03-05 | **Posts:** 4 | **Views:** 405

**Related concepts:** Native tokens, SigmaFi, TokenJay, Transaction

---

### Post #1 — @Grayman (2023-03-05)

I am just spit-balling here, but I think it would be useful to use the smart contract system in Ergo to make crypto escrow account, for settling accounts between buyer and seller for real world transactions.

I am inspired by the legendary platform known as Craigslist: the internet garage sale. Let’s say that a seller is done with some piece of equipment or asset. Buyer wants it, but has concerns about the transaction and wants assurance. Seller is looking for any serious offer, but doesn’t want to preclude other offers until a buyer is ready to commit. Currently this is mediated by the force: people talk and exchange cash and product at the point of sale: first come, first serve, and the transaction is final when both parties are satisfied. There are many potential security risks due to the nature of the P2P transaction, but people still use this system, with cash, to transact. Seller assumes the risk of their time and safety because the buyer might lowball and/or commit robbery. Buyer assumes the risk of carrying cash into the seller’s domain, also risking time and safety. What can we do?

Well, suppose that the tool for listing items for sale includes the ability to escrow funds, so that the transaction is dependent on a safe and successful completion. Suppose that the seller can insist on buyer to pay into an escrow account, at least a fraction of the total sale like 50%. Now the buyer can indicate their sincerity by putting money down into the escrow account, contingent upon a successful sale. The seller might entertain multiple potential buyers, and still only collect the escrow based on completion. Both the buyer and seller must sign the final transaction, including the rest of the price, in order to unlock that escrow account and add the necessary remainder to satisfy the terms of the deal.

The system would also need to profit, unlike Craigslist. In the event that the seller accepts an escrow bid, but the final sale goes to another customer with a different escrow bid and faster performance, then the seller would eat the transaction fees for the unsuccessful bids and the buyer would eat the transaction fees for a successful bid and completion of the sale. These fees should be a small percentage of the final sale, in order to encourage commerce – certainly less than the 3% a credit card transaction would need to make this happen. In an ideal world, sales tax or VAT would be folded into the final purchase for the successful purchase, shared equally by the buyer and seller, and then transferred automatically into the seller’s “account” with documentation for taxes owed. Seller is responsible for paying the tax, or facing the consequences based on implementation in the given jurisdiction: remember that the actual sale is local in nature, since the buyer and seller must meet to complete the sale.

What if the seller is misrepresenting junk, not worth the price? Well, if it is truly dogshit, then they will lose all the fees from the bidders, and the potential buyers will all get their money back: no sale. If it is overpriced, but a sale still happens at a lower total price, then the buyer will get the item, and sign the transaction to complete the sale, as normal, and the rest of the bidders will get their money back, to the small expense of the seller. The seller would get their lesser reward and pay the fees for the bidders that they accepted, as well as the taxes for the sale, such as it is.

What if the buyer is insincere, and attempts a low-ball sale? Then the seller can reject that sale, eat the fees for the escrow, and wait for a sincere offer. The failed buyer only wastes their time.

What if the buyer doesn’t show? What if they just bid on a bunch of stuff and never commit to complete the sale? Not good, because the escrow fees would go to the seller, but such activity should impose a negative rating on the buyer. It is important that the seller gets to accept or reject escrow backed bids, based on some recognition of the reputation of the buyer. Insincere buyers could create a new ‘account’ and keep scamming, but that would get tiring unless they set a bot to the task. Even if they do, that could be moderated by the mechanism for registering as a potential buyer.

What if the seller is setting a trap? Well it always best to meet at a public place to handle such transactions, but they would need to get medieval if they want to force the buyer to complete a sale by signing a transaction: much harder then conking them on the head and taking their cash.

What if the buyer is setting a trap? What if they intend to rob the seller, take the item, and not sign any transaction? Well, that is obviously illegal in almost any jurisdiction, and the seller could file a typical criminal complaint. But we might also set up the system such that the buyer has a veracity bond as a part of their reputation score, and allow for mediation and settlement on the part of the seller based on production of material evidence of a settled crime. This solution is tough to implement, and would require a human oracle… But simply folding such veracity bonds (as Mr. Hoskinson calls them) onto the system would deliver a good way for the seller to decide whether or not to accept a bid, and discourage insincere buyers from joining the system. Good buyers would have enough money locked up in a bond that they would be able to provide the full price for purchase.

Could this be tied into a tradition auction system, like eBay? Maybe, but that is not how most commerce actually works. People make offers, others take them or make a counter offer. The nature of the system I am proposing would naturally lead to a bidding system, since in the end both buyer and seller would need to agree on the final price, in the presence of other potential buyers. Why complicate the matter? Craigslist doesn’t on a bidding system.

There are a bunch of questions and potential problems about how to implement such a system, and it would probably require centralized systems, at least at the outset. On the other hand, like my Ergo on the Xbox solution, this is a way to get fingers in the cracks of real-fi. And like I said in that post: is this crazy? Does it make any sense? I am looking for a way for Ergo to meet the real market.

Please tell me your thoughts.

---

### Post #2 — @MaxBri (2023-03-05)

In my opinion, the hard part before finding a technical solution is why a user would go through the pain of web3 when he can just use web2, and what 5x better value it has to offer to make customers switch…

The main value that onchain can offer if it cannot be better on the UX side, is more trust.

In web3 we create more trust with transparency and consensus.  
To create more trust I would see this :

[![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/8/8ebcdc506eaa13f6b64fda97d54a0b7007d43b7f_2_624x291.png)

844×393 28.9 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/8/8ebcdc506eaa13f6b64fda97d54a0b7007d43b7f.png)

  
We see a similar system where a pro host hosts hundreds of apartments on Airbnb, allowing hosts with 0 reviews to find clients.

Letting off-chain actors choose the best way to ensure the transaction did happen.

They could if necessary put off-chain contracts in agreement with jurisdiction, and further by modifying this architecture, should be possible to do a permissionless Airbnb/Uber and other stuff who rely on reputation and a recommendation system on a front end.  
Tho IMO still seems too light to be 5x better.

A permissionless marketplace already exists it is called silk road or similar, and maybe they are the most on-point in these processes ( I have 0 knowledge of these ).

---

### Post #3 — @Grayman (2023-03-05)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/maxbri/48/1567_2.png) MaxBri:

> In my opinion, the hard part before finding a technical solution is why a user would go through the pain of web3 when he can just use web2, and what 5x better value it has to offer to make customers switch…

I would agree with that statement.

Welcome to the Ergo Forum.

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/maxbri/48/1567_2.png) MaxBri:

> A permissionless marketplace already exists it is called silk road or similar, and maybe they are the most on-point in these processes ( I have 0 knowledge of these ).

Ah yes… silk road. I guess I’m reinventing the wheel.

I just wanted something more mainstream, but to onboard new users it would still be necessary to convert their fiat, which would likely be a high fee transaction in the first place, eliminating most of the appeal of this proposal.

Thanks for the response.

---

### Post #4 — @cafebedouin (2025-01-18)

I think the [Tokenjay escrow contract](https://tokenjay.app/escrow.html) is worth mentioning. This allows for escrow exchange of Ergo tokens for some amount of Erg.

It would have to be modified for real world assets and Ergo tokens (like with SigmaFi), and it would probably need some kind of arbitration process. But, not too hard to imagine how to implement a system with this as a starting point.
