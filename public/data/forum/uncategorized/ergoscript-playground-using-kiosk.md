---
title: ErgoScript playground using Kiosk
description: 'ErgoForum discussion: ErgoScript playground using Kiosk'
tags:
- appkit
- box
- context-extension
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- full-node
- kiosk
- registers
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergoscript-playground-using-kiosk/96
created: '2019-09-29'
last_activity: '2020-09-06'
posts_count: 5
views: 2162
likes: 11
glossary_hits:
- AppKit
- Box
- Context extension
- Ergo Explorer
- ErgoScript
- ErgoScript context
- Full node
- Kiosk
- Registers
- Transaction
---

# ErgoScript playground using Kiosk

> **Forum thread:** [https://ergoforum.org/t/ergoscript-playground-using-kiosk/96](https://ergoforum.org/t/ergoscript-playground-using-kiosk/96)
> **Category:** Uncategorized | **Created:** 2019-09-29 | **Posts:** 5 | **Views:** 2162

**Related concepts:** AppKit, Box, Context extension, Ergo Explorer, ErgoScript, ErgoScript context, Full node, Kiosk, Registers, Transaction

---

### Post #1 — @scalahub (2019-09-29)

I created a tool called Kiosk that allows one to play with ErgoScript using a basic web-based UI. In particular, we can do the following:

1. Define boxes with arbitrary ErgoScript code and register values
2. Create transaction outputting some predefined boxes

URL: <https://github.com/scalahub/Kiosk>

Kiosk is opensource and written in Scala. To run it from source, first, clone the repository and do  
`sbt run` (requires [SBT](https://www.scala-sbt.org/release/docs/Setup.html) to be installed). The web-interface will open in <http://localhost:8080>

Kiosk requires a fully configured Ergo node running and by default assumes that its REST API is available at <http://localhost:9052>. This can be changed by calling the method `org.sh.kiosk.ergo.ErgoAPI.setUrl` from the web-UI.

A precompiled jar is available [here](https://github.com/scalahub/Kiosk/releases/tag/0.1), which can be run using `java -jar <jarfile>`.  
You can generate the jar from sources by issuing the command `sbt assembly`.

Use it as follows:

1. Set the environment to use in ErgoScript. This is a map of (key, value) pairs where keys will be referenced within ErgoScript code and also for setting registers of boxes. See the first image.  

   [![kiosk0](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/8b39794f0f0b2494c263baea9727e9a3f423a481_2_496x500.png)

   kiosk0.png845×851 49.9 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/8b39794f0f0b2494c263baea9727e9a3f423a481.png "kiosk0.png")
2. Define one or more boxes using ErgoScript code and some registers if needed. See the second image.  

   [![kiosk1](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/a599ef03d80c273ed4c1bc206075d912a6d4a31e_2_384x500.png)

   kiosk1.png799×1039 55 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a599ef03d80c273ed4c1bc206075d912a6d4a31e.png "kiosk1.png")
3. Create and send a transaction with some given boxes defined earlier in Step 2. See the third image.  

   [![kiosk3](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/069e65593f3c3649948caac2e6e11072bafd6444_2_690x272.png)

   kiosk3.png1339×529 53.1 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/069e65593f3c3649948caac2e6e11072bafd6444.png "kiosk3.png")

The final output will be txid of the transaction along with the request that was made to the Ergo node’s API.

Please provide suggestions for improvement and feel free to contribute.

---

### Post #2 — @kushti (2019-10-04)

It seems Kiosk is the most powerful tool to work with the scripts right now. Unlike other tools it is supporting context variables. Will play with it more in coming days.

---

### Post #3 — @scalahub (2019-10-07)

Sent a transaction using Kiosk on mainnet [fb8261828d8955c15d9ff6d7e1e0c3d6935228ff3c0af5effd95ce08018ecc76](https://explorer.ergoplatform.com/en/transactions/fb8261828d8955c15d9ff6d7e1e0c3d6935228ff3c0af5effd95ce08018ecc76) The last two boxes are protected by the script “1<2” (one P2SH and one P2S). Anyone reading this, feel free to spend.

Please use release 0.2 or higher, since 0.1 is broken.

---

### Post #4 — @jasondavies (2019-10-08)

I was able to claim the P2S box (it was quite straightforward as no additional information was required to spend the box, since the script already evaluates to `true`).

However, I’m having trouble spending the P2SH box. My script matches the expected blake2b-256 hash. But I get the following error:

`Malformed transaction: Scripts of all transaction inputs should pass verification. 6ab7e2e0d8bb2c62b2209c80dec88227f6af83f6ccfdb61ff3df864933e1acca: #1 => Failure(org.ergoplatform.validation.ValidationException: Validation failed on ValidationRule(1000,Deserialized script should have expected type) with args WrappedArray(DeserializeContext(1,SSigmaProp), ConstantNode(Coll(-1),Coll[SInt$])))`

It’s possible I’m not serialising the context variable correctly and I’m missing some kind of wrapper. Or perhaps there’s a bug in the P2SH contract?

---

### Post #5 — @scalahub (2020-09-06)

As follow up, an online instance of Kiosk for experimental use is deployed at <https://ergo.kioskweb.org/>  
This is running the exact code at <https://github.com/scalahub/Kiosk>  
Please use the above instance only for experiments and not for transferring any large amounts.  
For actual use, run your local instance as explained below.

To run you own copy (which is the right way to use it), you must clone the project and then do one of the following.

1. Run sbt using the command `sbt`  
   Then inside sbt prompt type the following `jetty:start`  
   This will run the project using built in jetty web server on port 8080 which you can access at <http://localhost:8080>
2. Compile the war file using `sbt package`. (the file is in `target/scala-2.12` folder in my case). Then run the war file as you would run any other J2EE app.

Kiosk currently depends only on ergo-appkit and uses the public explorer to post transactions. In particular it does not require a local running Ergo node.

Signing is performed via Appkit, which replicates a large part of the Ergo node wallet’s functionality locally. after all both are JVM based).

Kiosk is “multi-tenant” because each URL corresponds to a private copy of the script environment and box storage. Hence you can bookmark a URL and visit it later, and your declared variables and boxes should be present. Without the same URL, no one else will be able to see or modify your environment.
