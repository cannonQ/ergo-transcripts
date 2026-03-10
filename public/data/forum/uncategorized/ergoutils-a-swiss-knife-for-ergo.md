---
title: 'ErgoUtils: A Swiss Knife for Ergo'
description: 'ErgoForum discussion: ErgoUtils: A Swiss Knife for Ergo'
tags:
- addresses
- box
- ergo-explorer
- ergoforum
- ergomixer
- ergoscript
- ergoscript-context
- native-tokens
- oracle-pools
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergoutils-a-swiss-knife-for-ergo/522
created: '2020-12-28'
last_activity: '2021-05-20'
posts_count: 5
views: 1803
likes: 16
glossary_hits:
- Addresses
- Box
- Ergo Explorer
- ErgoMixer
- ErgoScript
- ErgoScript context
- Native tokens
- Oracle pools
- Transaction
---

# ErgoUtils: A Swiss Knife for Ergo

> **Forum thread:** [https://ergoforum.org/t/ergoutils-a-swiss-knife-for-ergo/522](https://ergoforum.org/t/ergoutils-a-swiss-knife-for-ergo/522)
> **Category:** Uncategorized | **Created:** 2020-12-28 | **Posts:** 5 | **Views:** 1803

**Related concepts:** Addresses, Box, Ergo Explorer, ErgoMixer, ErgoScript, ErgoScript context, Native tokens, Oracle pools, Transaction

---

### Post #1 — @anon_real (2020-12-28)

The aim of [ergoutils.org](http://ergoutils.org) is to provide useful utilities to be used by any wallet in a safe and trustless manner using the assembler service.  
It supported issuing tokens and artwork NFTs when announced. It now contains an Airdrop section; the goal is to have various options for airdropping including:

* To a list of addresses
* To a specific token holders

The former is implemented and the latter will be added soon.  
This functionality can be helpful in different situations. For example:

* To donate some ergs to a list of addresses, one will create the list, and every time he wants to donate to the list, he only selects it and specifies the amount.
* One can sponsor several oracle pools from the mixer in the same transaction.
* One can distribute the output of his mix to several addresses treating the functionality as a mixing hop.

[![1](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/ef3de8abad36b2845aeb4c808ff63cabdff17539_2_690x388.jpeg)

12016×1134 128 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/ef3de8abad36b2845aeb4c808ff63cabdff17539.jpeg "1")

[![2](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/14945cdeea0812dd2301cafcd33bc46560ddd306_2_690x421.jpeg)

22042×1248 152 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/14945cdeea0812dd2301cafcd33bc46560ddd306.jpeg "2")

The idea behind the contract that makes sure that the airdrop will be done properly and the assembler service won’t be able to cheat is explained [here](https://www.ergoforum.org/t/ergoscript-design-patterns/222/18).

Moreover, a Donation section is added to the app. Your donations are welcomed and appreciated.

---

### Post #2 — @scalahub (2020-12-28)

Is the source code available?

---

### Post #3 — @anon_real (2020-12-28)

Yeah, fully open-sourced: <https://github.com/anon-real/ErgoUtils>

---

### Post #4 — @Martin-mx (2020-12-30)

[twitter.com](https://twitter.com/ergoplatformorg/status/1343866208681123840)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/0fea12f26ac0062a3ada55601222f6700094f888.jpeg)

#### [Ergo (ergoplatformorg)](https://twitter.com/ergoplatformorg/status/1343866208681123840)

A tool for airdrops added to ErgoUtils https://t.co/oyakrHczXB , details on ErgoForum: https://t.co/IItQY0OAI4 . Ergo tokenomics is coming! $erg

[2:27 AM - 29 Dec 2020](https://twitter.com/ergoplatformorg/status/1343866208681123840)

 36

 13

---

### Post #5 — @anon_real (2021-05-20)

[ErgoUtils](https://ergoutils.org/) now support obfuscating entry points for [ErgoMixer](https://github.com/ergomixer) (not sure what they are called actually ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=9 ":slight_smile:")).  
Basically, when one withdraws his funds from the mixer to his wallet, it is obvious that that person has received some funds from the mixer and when he spends those boxes, it is also obvious that those boxes are from the mixer.

Those who care about privacy and use ErgoMixer, also probably care about not anyone being able to tell that they are using the mixer easily when they interact with their wallets. This tool is designed to address this issue.

Just create an (or more if you wish) obfuscating address with your desired `hop number` [here](https://ergoutils.org/#/others) and use it permanently. To use it, withdraw from the mixer to the address that is created for you; your received funds in that address will automatically go through some random addresses (randomly created outputs, both number of outputs and output amounts) and finally received in your wallet.

As an example, try to figure out if this [transaction](https://explorer.ergoplatform.com/en/transactions/9cf412c71fc49a53f7f6ae498f22730be474127436334e5a38da92ce0d40530b) is from the mixer or not - a lot harder to figure out.

As always, utilities in ErgoUtils are completely free to use!
