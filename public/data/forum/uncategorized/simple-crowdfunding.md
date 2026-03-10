---
title: Simple Crowdfunding
description: 'ErgoForum discussion: Simple Crowdfunding'
tags:
- addresses
- box
- eip
- ergo-explorer
- ergo-foundation
- ergoforum
- ergoscript
- ergoscript-context
- full-node
- sigmastate-interpreter
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/simple-crowdfunding/70
created: '2019-08-28'
last_activity: '2019-12-28'
posts_count: 22
views: 3808
likes: 35
glossary_hits:
- Addresses
- Box
- EIP
- Ergo Explorer
- Ergo Foundation
- ErgoScript
- ErgoScript context
- Full node
- Sigmastate interpreter
- Transaction
---

# Simple Crowdfunding

> **Forum thread:** [https://ergoforum.org/t/simple-crowdfunding/70](https://ergoforum.org/t/simple-crowdfunding/70)
> **Category:** Uncategorized | **Created:** 2019-08-28 | **Posts:** 22 | **Views:** 3808

**Related concepts:** Addresses, Box, EIP, Ergo Explorer, Ergo Foundation, ErgoScript, ErgoScript context, Full node, Sigmastate interpreter, Transaction

---

### Post #1 — @kushti (2019-08-28)

I’ve played a little bit with a crowdfunding campaign corresponding to the example provided in the  
[ErgoScript White Paper (page 6)](https://docs.ergoplatform.com/ErgoScript.pdf) and found that it could be  
done even with current wallet API. This post is about how to do crowdfunding on top of Ergo. The post is also proposing a concrete campaign to fund post-EIP1 crowdfunding script development.

If you want to get into details, please read next section, “The Script”. Otherwise, just read “How To Donate” and “Crowdfunding Project Proposal” sections below.

## The Script

The simplest crowdfunding script, according to the  
[ErgoScript White Paper (page 6)](https://docs.ergoplatform.com/ErgoScript.pdf), is “a script for the following crowdfunding situation: a project backer (with key *backerPubKey*) wishes to give money to a project (with key *projectPubKey*), but only if the project raises enough money (at least *minToRaise*) from other sources by a deadline (expressed in terms of *HEIGHT*). To give money to the project, the backer will create an output box protected by the following script. The script contains two conditions: one for the case the deadline has passed (enabling the backer to get the money back) and one for the case it succeeded (enabling the project to spend the money if the amount is at least *minToRaise* before the deadline). In order to ensure enough money has been raised,  
the script will search the output collection for a box with a sufficient value going to the *projectPubKey*. To check where the value of the output box is going, the script will read the script protecting the output box and compare it to the script corresponding to *proveDlog(projectPubKey)* ; this script can be obtained by*projectPubKey.propBytes*.”

As currently API does not support embedding of custom environment variables (only predefined like *HEIGHT*), the only way to compile the script is to replace such variables in the script from the white-paper with concrete values. For example, consider that a crowdfunding campaign is successful if it is raising 500 Ergs before block number 50,000. For *backerPubKey* and *projectPubKey* we can use *PK()* function which accepts only *P2PK* serialized keys at the moment. Then the modified script from the WhitePaper becomes the following:

```ergoscript
 {
   val backerPubKey = PK("9h7DHKSDgE4uvP8313GVGdsEg3AvdAWSSTG7XZsLwBfeth4aePG")
   val projectPubKey = PK("9gBSqNT9LH9WjvWbyqEvFirMbYp4nfGHnoWdceKGu45AKiya3Fq") 
    
   val deadline = 50000
   val minToRaise = 500L * 1000000000 
   
   val fundraisingFailure = HEIGHT >= deadline && backerPubKey
   val enoughRaised = {(outBox: Box) =>outBox.value >= minToRaise 
                              && outBox.propositionBytes == projectPubKey.propBytes
                      }
        
   val fundraisingSuccess = HEIGHT < deadline && projectPubKey && OUTPUTS.exists(enoughRaised)
   fundraisingFailure || fundraisingSuccess                     
 }
```

## How To Donate

First of all, JSON is not supporting multi-line strings, so you need to replace line breaks with *\n*.  
Also, quotes are to be escaped, so use *"* instead of *"*. The resulting JSON will be sent to */script/p2sAddress*.  
To donate to a project, first get your address from */wallet/addresses*, take e.g. first of them. Put the address  
into the *backerPubKey*, so a request to */script/p2sAddress* will be like following after this step:

```ergoscript
 {"source": "{ val backerPubKey = PK(\"9...\") \n val projectPubKey = PK(\"9gBSqNT9LH9WjvWbyqEvFirMbYp4nfGHnoWdceKGu45AKiya3Fq\") \n val deadline = 50000 \n val minToRaise = 500L * 1000000000 \n val fundraisingFailure = HEIGHT >= deadline && backerPubKey \n val enoughRaised = {(outBox: Box) => outBox.value >= minToRaise && outBox.propositionBytes == projectPubKey.propBytes} \n val fundraisingSuccess = HEIGHT < deadline && projectPubKey && OUTPUTS.exists(enoughRaised) \n fundraisingFailure || fundraisingSuccess }"}
```

with your address instead of *“9…”*.

Send the string to */script/p2sAddress* to get some a response like:

```ergoscript
{
  "address": "GB3kh2izpWKvyZfMboQwsEscjPaZcz9WrzGqZB4ZrkzRreiFMV6HZYWXGMK3rqCjDCoPgWGNzfnYSUhivW4a1VRYPE7uZXwKnBcqWcRkiuTx6QW55EcPcWeELUsumwdtKoFtWY583nWnKZff"
}
```

Copy address string (*GB3…* in our example) and send money to it via */wallet/payment/send* , a request to the API method to send 10 Ergs (10 Billion nanoErgs) will be like following:

```ergoscript
[
 {
   "address": "GB3kh2izpWKvyZfMboQwsEscjPaZcz9WrzGqZB4ZrkzRreiFMV6HZYWXGMK3rqCjDCoPgWGNzfnYSUhivW4a1VRYPE7uZXwKnBcqWcRkiuTx6QW55EcPcWeELUsumwdtKoFtWY583nWnKZff",
   "value": 10000000000
 }
]
```

That’s all!

Now wallet will automatically find the box on the blockchain, as it contains public key which belongs to the wallet in the refund condition. The wallet then periodically checks whether the box is spendable by constructing a simplest transaction with the box as an input and just one output (to the same address). After refund height (50,000 in our example) the wallet will be able to spend the box and so box value will be added to /wallet/balances.

Please note that this will be not the case after [EIP-1](https://github.com/ergoplatform/eips/blob/master/eip-0001.md) implementation as wallet will use narrow recognition patterns by then.

## How To Collect Donations

Wallet which is associated with the project public key will find incoming boxes on the blockchain. However, it will failto make sure that boxes are spendable, as wallet currently is using a simplest transaction for that, and script is failing for such spending transaction.

Before */wallet/boxes/uncertain* method being implemented, the only way for project to find incoming boxes. Then */wallet/transaction/send* with manually provided (in “inputsRaw”) serialized boxes (use */utxo/byIdBinary* to get serialized box by its identifier).

I did it by myself and got this transaction <https://explorer.ergoplatform.com/en/transactions/3d5a1102296b6159754097f33e780cae2692d9a2ec2b6daf26219651bcc2ae48>.

Please note that [EIP-1](https://github.com/ergoplatform/eips/blob/master/eip-0001.md) will break this workflow as well.

## Crowdfunding Project Proposal

So I propose to raise *500* Ergs before block *50,000* for developing command-line scripts (in Python) for organizing and participating in crowdfunding campaigns after EIP-1 implementation. Command-line scripts are more suitable than doing requests manually, and also could be used for building graphic interfaces on top of them.

The treasury provides half of the funds, so others need to give other 250 collectively. In case of campaign failure refunds will be got automatically. As collecting pledges is not trivial at the moment, I will lead the project role, so please use the key *9gBSqNT9LH9WjvWbyqEvFirMbYp4nfGHnoWdceKGu45AKiya3Fq* (controlled by me).

To give money, please follow “How To Donate” section above with replacing *backerPubKey* with your public key, and pledge amount with a proper value (please note that it is in nanoErgs, 1 Erg = 1000000000 nanoErgs).

---

### Post #2 — @robert (2019-08-28)

This seems like a great first focus for getting people to use smart contracts on the network.

I’d be interested in taking this project up and writing this crowdfunding CLI app, though doing so in Rust. Given that it’ll be compiled/cross-platform/able to be converted to WASM and thus used easily in JS and overall improve interoperability, I think it’s a good choice and will make it easier down-the-line to put a GUI on top if it ends up finding a good amount of usage.

I should be able to spare some time on the weekends, and given this isn’t too large of a project, I believe it shouldn’t take too long to get a functioning version once EIP-1 is implemented.

---

### Post #3 — @kushti (2019-09-02)

A pledge of 250 Ergs by Foundation has been done <https://explorer.ergoplatform.com/en/transactions/2fc882792b94f8210e4378f2f5bab90896523e212d927ed16600170d76f46ac9>

---

### Post #4 — @kushti (2019-09-05)

The crowdfunding is already successful!

<https://explorer.ergoplatform.com/en/transactions/555c5a3d07f8627f4b3e3b93f119d832df5dcfb9cdc5751b9fbf14061a067dd4>

Successfully gathers two boxes, one of 250 Ergs (from foundation), another of ~357 Ergs, thus ~607 Ergs in total.

There’s also unspent pledge box of 10 Ergs created by the following transaction : <https://explorer.ergoplatform.com/en/transactions/f6725cab9e734cd03bfe6917b9b7e9562ec4b5f6bbb47236a8bab6e9451f6b5f> . It requires for 1000 Ergs to be collected by spending transaction, thus could not be spent at the moment.

---

### Post #5 — @robert (2019-09-05)

This is great to hear. I would like to say thanks to the community and if anyone wishes to keep up with progress on the development of the crowdfunding CLI feel free to check out the github repo:  

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/robkorn/ergo-crowdfunding-cli)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/58989f714bb45ea9f8253c3d033f7d6c755f5c20.jpeg)

### [robkorn/ergo-crowdfunding-cli](https://github.com/robkorn/ergo-crowdfunding-cli)

CLI tool which enables participating and interacting with Crowdfunding Campaigns on Ergo - robkorn/ergo-crowdfunding-cli

---

### Post #6 — @jasondavies (2019-09-06)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> val enoughRaised = { (outBox: Box) => outBox.value >= minToRaise && outBox.propositionBytes == projectPubKey.propBytes }

Just a note to say that this could be simplified by removing the constraint that the output must go to the project owner, since there is already a constraint further down that requires the transaction is signed by the project owner:

> projectPubKey && OUTPUTS.exists(enoughRaised)

In other words, the project owner can already send the funds anywhere they want in the next transaction, so the script could be simplified by letting them send the funds wherever they want as soon as the threshold is met prior to the deadline.

The simplified condition looks like this:

> val enoughRaised = { (outBox: Box) => outBox.value >= minToRaise }

---

### Post #7 — @jasondavies (2019-09-06)

I’ve created a [P2S web tool](https://wallet.plutomonkey.com/p2s/?source=ewogIHZhbCBiYWNrZXJQdWJLZXkgPSBQSygiLi4uIikKICB2YWwgcHJvamVjdFB1YktleSA9IFBLKCI5Z0JTcU5UOUxIOVdqdldieXFFdkZpck1iWXA0bmZHSG5vV2RjZUtHdTQ1QUtpeWEzRnEiKQoKICB2YWwgZGVhZGxpbmUgPSA1MDAwMAogIHZhbCBtaW5Ub1JhaXNlID0gNTAwTCAqIDEwMDAwMDAwMDAKCiAgdmFsIGZ1bmRyYWlzaW5nRmFpbHVyZSA9IEhFSUdIVCA+PSBkZWFkbGluZSAmJiBiYWNrZXJQdWJLZXkKICB2YWwgZW5vdWdoUmFpc2VkID0geyAob3V0Qm94OiBCb3gpID0+IG91dEJveC52YWx1ZSA+PSBtaW5Ub1JhaXNlIH0KCiAgdmFsIGZ1bmRyYWlzaW5nU3VjY2VzcyA9IEhFSUdIVCA8IGRlYWRsaW5lICYmIHByb2plY3RQdWJLZXkgJiYgT1VUUFVUUy5leGlzdHMoZW5vdWdoUmFpc2VkKQogIGZ1bmRyYWlzaW5nRmFpbHVyZSB8fCBmdW5kcmFpc2luZ1N1Y2Nlc3MKfQ==) to help bookmark and share these types of contracts; if you click on this [link](https://wallet.plutomonkey.com/p2s/?source=ewogIHZhbCBiYWNrZXJQdWJLZXkgPSBQSygiLi4uIikKICB2YWwgcHJvamVjdFB1YktleSA9IFBLKCI5Z0JTcU5UOUxIOVdqdldieXFFdkZpck1iWXA0bmZHSG5vV2RjZUtHdTQ1QUtpeWEzRnEiKQoKICB2YWwgZGVhZGxpbmUgPSA1MDAwMAogIHZhbCBtaW5Ub1JhaXNlID0gNTAwTCAqIDEwMDAwMDAwMDAKCiAgdmFsIGZ1bmRyYWlzaW5nRmFpbHVyZSA9IEhFSUdIVCA+PSBkZWFkbGluZSAmJiBiYWNrZXJQdWJLZXkKICB2YWwgZW5vdWdoUmFpc2VkID0geyAob3V0Qm94OiBCb3gpID0+IG91dEJveC52YWx1ZSA+PSBtaW5Ub1JhaXNlIH0KCiAgdmFsIGZ1bmRyYWlzaW5nU3VjY2VzcyA9IEhFSUdIVCA8IGRlYWRsaW5lICYmIHByb2plY3RQdWJLZXkgJiYgT1VUUFVUUy5leGlzdHMoZW5vdWdoUmFpc2VkKQogIGZ1bmRyYWlzaW5nRmFpbHVyZSB8fCBmdW5kcmFpc2luZ1N1Y2Nlc3MKfQ==) you should get the above ErgoScript contract for which you will need to modify to include your `backerPubKey` refund address.

*[Note: as I noted in my previous comment, I’ve removed the constraint that the project owner must send the funds to their own address, which simplifies the contract slightly.]*

Click on “Get P2S Address” to generate the P2S address for a valid contract, otherwise it will show the error information.

As you edit the contact, it should automatically update the URL, so you can bookmark it and/or share (note that the URL can get quite long for longer contracts).

Obviously, use at your own risk etc. since you are trusting my node and trusting that my server hasn’t been hacked.

---

### Post #8 — @robert (2019-09-07)

That’s a good point on the redundant check. Currently I am using the original script for the CLI app, but I’ll look into making the edit tomorrow.

Edit: Just thinking about it, having to withdraw all funds to the project/campaign address could be a good way to really make it easy later on to see whether or not a campaign was successful and easier to track how the funds are spent later on since it all gets moved into a new box at the campaign address. I’ll keep it as is for now, but if people overwhelmingly prefer without this restriction then it can be changed.

---

### Post #9 — @robert (2019-09-07)

After getting a bit excited to see this proceed forward I’ve pulled a couple late nights and pushed aside a few more responsibilities than maybe I should have, but nonetheless I bring you the Ergo Crowdfund CLI App in an early alpha yet functional form. (As such please take some time to test it first before trusting it with serious funds. It should all be relatively safe, but this is bleeding edge software after all.)

What currently works:

1. Creating a local campaign/saving the data related to it
2. Exporting said created campaign and sharing it with others via file
3. Importing/tracking campaigns created by others and saving those campaigns locally.
4. Backing/sending funds to tracked (locally stored) campaigns. (The app automatically fills out the crowdfund script, generates the P2S address, and then sends the specified number of Ergs to the P2S address via node wallet api)
5. Saves data about backed campaigns (how many Erg you previously sent, and the tx id of said spend)

In the future, especially after EIP-1, tracking campaigns on-chain and seeing how they are progressing/the result will be implemented, and also the ability for a campaign creator (or technically the owner of the address a campaign is set up for) to be able to withdraw funds if the campaign was successful.

There’s an extensive readme/instructions, and for now you have to compile it yourself, but if you have any questions feel free to ask.

<https://github.com/robkorn/ergo-crowdfunding-cli>

---

### Post #10 — @kushti (2019-09-13)

There’s another box of 42 Ergs boxId: 1dc4f025cbf3331849bcb06e16fc46d7ce53938eef2d54299d915695f0a1c9a4 , transaction Id: [6e9a5544fae833dd2deb52b4a2203b3f50c322967d7542acb7bbc690b26dc59a](https://explorer.ergoplatform.com/en/transactions/6e9a5544fae833dd2deb52b4a2203b3f50c322967d7542acb7bbc690b26dc59a) . Unfortunately, I spent time around block #50,000 on the road mostly, not without some problems, thus was not able to collect the box ![:frowning:](https://emoji.discourse-cdn.com/twitter/frowning.png?v=9 ":frowning:") Will compensate 42 Ergs from my ergs then.

Respective owners of the two boxes above, please, withdraw them.

[@robert](/u/robert) will contact you directly to send the funds.

Now as we have a tool for the crowdfunding, what else can we crowdfund?

---

### Post #11 — @jasondavies (2019-09-13)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> Unfortunately, I spent time around block #50,000 on the road mostly, not without some problems, thus was not able to collect the box ![:frowning:](https://emoji.discourse-cdn.com/twitter/frowning.png?v=12 ":frowning:") Will compensate 42 Ergs from my ergs then.

Don’t worry, that was me! I’ve forwarded the 42 ERG to your projectPubKey: [fc30c618c5f6bce72bc8e7806d0d526ca553b7d945d72e323a2853beb16224c4](https://explorer.ergoplatform.com/en/transactions/fc30c618c5f6bce72bc8e7806d0d526ca553b7d945d72e323a2853beb16224c4)

---

### Post #12 — @jasondavies (2019-09-13)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> Now as we have a tool for the crowdfunding, what else can we crowdfund?

I’ve been looking into implementing the necessary primitives to support signing transactions and messages on Ledger (the hardware wallet). Still not quite sure how much work it will be, but I think this would be a good candidate.

---

### Post #13 — @jasondavies (2019-09-13)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> Respective owners of the two boxes above, please, withdraw them.

I think you forgot to link to the second donation that you weren’t able to claim:

* boxid: b8a6a4b5ed10af873ce56f4e65feb99a600b82d04361291c0990545c0ae952e5
* txid: [f6725cab9e734cd03bfe6917b9b7e9562ec4b5f6bbb47236a8bab6e9451f6b5f](https://explorer.ergoplatform.com/en/transactions/f6725cab9e734cd03bfe6917b9b7e9562ec4b5f6bbb47236a8bab6e9451f6b5f)
* but in a strange twist, I think this donation was from your own address (9gBSqNT9LH9WjvWbyqEvFirMbYp4nfGHnoWdceKGu45AKiya3Fq) - and I’ve just realised you mentioned it earlier in the thread; it is only spendable if the crowdfund total ≥ 1000 ERG.

---

### Post #14 — @robert (2019-09-13)

Thanks to you both.

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/jasondavies/48/17_2.png) jasondavies:

> I’ve been looking into implementing the necessary primitives to support signing transactions and messages on Ledger (the hardware wallet).

I think that’s a great idea for crowdfunding. I’m sure a number of people would be interested in supporting that.

I would recommend that we have somewhat of a standard for crowdfunding campaigns to make it easy for people to find them, read about them, and back them. A separate category (or sub-category) on the forum which is specifically for crowdfunding campaigns would allow for easy cataloguing, and in the title having tags such as [Ongoing] or [Complete] or [Ended] would be a plus.

On top of that I think providing users with both the exported campaign file which they can download + import as well as a 1 liner for tracking the campaign which people can copy + paste to track the campaign locally would be ideal.  
(ie. `./ergo_cf track "First Ergo Crowdfund" 9gBSqNT9LH9WjvWbyqEvFirMbYp4nfGHnoWdceKGu45AKiya3Fq 50000 500`)

---

### Post #15 — @robert (2019-09-13)

After a week of updates from my previous post and the fact that users will be wanting to use the CLI tool in the near future for new campaigns, I decided to go ahead and officially release v0.1.0 of the tool and provide precompiled binaries for Linux x86, Linux ARM, and Windows.

If there is demand I can reasonably easily cross-compile for Android or other non-mac targets reasonably easily. If anyone runs into any issues please let me know.

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/robkorn/ergo-crowdfunding-cli/releases/tag/v0.1.0)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/58989f714bb45ea9f8253c3d033f7d6c755f5c20.jpeg)

### [robkorn/ergo-crowdfunding-cli](https://github.com/robkorn/ergo-crowdfunding-cli/releases/tag/v0.1.0)

CLI tool which enables participating and interacting with Crowdfunding Campaigns on Ergo - robkorn/ergo-crowdfunding-cli

---

### Post #16 — @kushti (2019-09-14)

> I’ve been looking into implementing the necessary primitives to support signing transactions and messages on Ledger (the hardware wallet). Still not quite sure how much work it will be, but I think this would be a good candidate.

I think this is a perfect candidate for next candidate, and the Foundation can secure its success.

[@robert](/u/robert) played with the tool, well done!

---

### Post #17 — @kushti (2019-09-15)

650 Ergs (250 + 357 + 42 = 649, and I’ve added 1 Erg) have been sent to [@robert](/u/robert) !

<https://explorer.ergoplatform.com/en/transactions/3d9280861dc2e4ea259960ef906fda96b8c1c434ff3466e064de53df3e02f7d7>

---

### Post #18 — @robert (2019-09-15)

Thank you once again to everyone that supported the project. I’ll be looking forward to passing some of these Ergs I just got on to others in the community to support new interesting crowdfunding campaigns as they pop up.

---

### Post #19 — @robert (2019-10-02)

Thought it was worth posting here, about a month ago there were some properties of the crowdfunding smart contract which were formally verified which you can [check out on github here](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/1f65d90cdab0388acc73bfa43797e39d3d9e32bc/contract-verification/src/main/scala/sigmastate/verification/contract/CrowdFundingContractVerification.scala)

This means that currently one can argue that crowdfunding campaigns on Ergo are one of the most secure crowdfunding methods currently available just 3 months after launch of main net. Quite exciting.

---

### Post #20 — @scalahub (2019-10-03)

Sounds really nice! Could you elaborate on how the verification works and the theory behind it? What exactly does this allow us to claim? (in particular, does it test for all inputs?)

---

### Post #21 — @robert (2019-10-04)

![](https://avatars.discourse-cdn.com/v4/letter/s/838e76/48.png) scalahub:

> Could you elaborate on how the verification works and the theory behind it? What exactly does this allow us to claim?

In short they are using a scala library called [Stainless](https://github.com/epfl-lara/stainless) which is a verification framework which allows for formally proving things about scala programs which use a certain functional subset of scala. This library then plugs into the [Z3 Theorem Prover](https://github.com/Z3Prover/z3) which is one of the most used automated theorem provers/SMT solvers.

To get a better understanding of how it works I’d recommend just taking an hour or two and digging into some material on SAT/SMT solvers online for how they go about proving theorems automatically.

---

### Post #22 — @scalahub (2019-12-28)

Very interesting. So in theory, we could even create similar to [TheDAO](https://medium.com/@ogucluturk/the-dao-hack-explained-unfortunate-take-off-of-smart-contracts-2bd8c8db3562) contract of Ethereum and additionally prove that it is bug-free.
