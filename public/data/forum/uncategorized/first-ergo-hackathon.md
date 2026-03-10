---
title: First Ergo Hackathon
description: 'ErgoForum discussion: First Ergo Hackathon'
tags:
- addresses
- appkit
- ergo-explorer
- ergoforum
- ergohack
- ergoscript
- ergotree
- full-node
- headless-dapp
- oracle-pools
- schnorr-signatures
- stealth-addresses
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/first-ergo-hackathon/1015
created: '2021-04-16'
last_activity: '2021-05-11'
posts_count: 6
views: 1567
likes: 23
glossary_hits:
- Addresses
- AppKit
- ERGOHACK
- Ergo Explorer
- ErgoScript
- ErgoTree
- Full node
- Headless dApp
- Oracle pools
- Schnorr signatures
- Stealth Addresses
- Transaction
---

# First Ergo Hackathon

> **Forum thread:** [https://ergoforum.org/t/first-ergo-hackathon/1015](https://ergoforum.org/t/first-ergo-hackathon/1015)
> **Category:** Uncategorized | **Created:** 2021-04-16 | **Posts:** 6 | **Views:** 1567

**Related concepts:** Addresses, AppKit, ERGOHACK, Ergo Explorer, ErgoScript, ErgoTree, Full node, Headless dApp, Oracle pools, Schnorr signatures, Stealth Addresses, Transaction

---

### Post #1 — @kushti (2021-04-16)

We are thinking about organizing a hackathon, likely in May. The topic would be " **Completing the Basics** ", so improving basic infrastructure needed for building the DApps, (also, to profit from them)

The following topics are proposed:

* Improvements to ErgoScript (not all the ErgoTree features are projected into it)
* Improvements to Ergo AppKit (basic library for constructing transactions and building offchain logic on top of for Java and JVM languages)
* Improvements to Ergo Node Interface and - [Ergo Headless dApp Framework](https://github.com/Emurgo/ergo-headless-dapp-framework) (basic library for constructing transactions and building offchain logic with Rust)
* [Ergo Crowdfunding](https://github.com/robkorn/ergo-crowdfunding-cli) apps/UI
* Visual tool for constructing multi-signatures (could be a good first step for visual tools to construct more complex scripts)
* Tokenization schemes
* Tools for NFTs
* Applications for data notarization and names registration
* Stealth addresses pool implementation
* Applications on top of mixer API
* More data connectors for the oracle pools
* Private swaps with other chains on Schnorr signature (Bitcoin Cash, Litecoin (?), Komodo (?))

Everyone participating will be rewarded for delivering anything that is improving thecurrent state of the ecosystem. More details on rewards and prizes will be provided later.

---

### Post #2 — @root7Z (2021-04-25)

[![erg](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/4ef7fdd5488a0458e555c52c5e851f2d7d897c94_2_467x500.jpeg)

erg736×787 107 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/4ef7fdd5488a0458e555c52c5e851f2d7d897c94.jpeg "erg")

so some research algorithms are vital for later expansion of platforms. this is an example on eth [Projects on Dune](https://duneanalytics.com/projects)

and also a strong explorer is needed. I found this very user friendly <https://rvn.cryptoscope.io/>

---

### Post #3 — @axhue (2021-05-10)

I just got here from the Ergo blog post, is this is still happening? discord group perhaps? I can help with setup if needed.

Very excited to participate ![:smiley:](https://emoji.discourse-cdn.com/twitter/smiley.png?v=9 ":smiley:")

---

### Post #4 — @Haskell_plus (2021-05-10)

Ya this is happening, marketing is working on a few things for it, looking forward to more of info myself ![:sunglasses:](https://emoji.discourse-cdn.com/twitter/sunglasses.png?v=9 ":sunglasses:")

---

### Post #5 — @DR-Love (2021-05-11)

Make more available exchanges added to wallet if possible will be great + Ergo Virtual credit card in the wallet that can be unlocked over 10,000-5000 Ergo , now that will be EPIC ![:wink:](https://emoji.discourse-cdn.com/twitter/wink.png?v=9 ":wink:") ![:green_apple:](https://emoji.discourse-cdn.com/twitter/green_apple.png?v=9 ":green_apple:")

A screenshot for motivation ![:sun_with_face:](https://emoji.discourse-cdn.com/twitter/sun_with_face.png?v=9 ":sun_with_face:")![:sunglasses:](https://emoji.discourse-cdn.com/twitter/sunglasses.png?v=9 ":sunglasses:")  

[![Screenshot_2021-05-11-11-49-28-173_com.realvnc.viewer.android](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/3ab2fbb965406b0b8eefd8df12aca3377ea101a9_2_690x310.jpeg)

Screenshot\_2021-05-11-11-49-28-173\_com.realvnc.viewer.android1600×720 180 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/3ab2fbb965406b0b8eefd8df12aca3377ea101a9.jpeg "Screenshot_2021-05-11-11-49-28-173_com.realvnc.viewer.android")

---

### Post #6 — @scalahub (2021-05-11)

I have released the first version of Ergo-JDE ([GitHub - ergoplatform/ergo-jde](https://github.com/ergoplatform/ergo-jde)).

The hackathon topics could also include some tasks related on JDE such as:

1. Improve JDE documentation
2. Create scripts for xyz, where xyz can be any of the following (and more):
   * Improved stable coin and reserve coin minting ([current scripts](https://github.com/ergoplatform/ergo-jde/tree/main/sample-scripts) don’t check reserve ratio, so post conditions for the same can be added)
   * Oracle pool operations such as data point submission and collection
   * Ergo-Dex transactions
3. Improve JDE to add missing capabilities such as:
   * Looping constructs
   * Aggregate operations such as sorting
