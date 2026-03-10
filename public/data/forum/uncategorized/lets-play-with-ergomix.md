---
title: Lets play with ErgoMix
description: 'ErgoForum discussion: Lets play with ErgoMix'
tags:
- addresses
- box
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- full-node
- kiosk
- mempool
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/lets-play-with-ergomix/108
created: '2019-10-10'
last_activity: '2020-05-12'
posts_count: 7
views: 1936
likes: 18
glossary_hits:
- Addresses
- Box
- Ergo Explorer
- ErgoScript
- ErgoScript context
- ErgoTree
- Full node
- Kiosk
- Mempool
- Transaction
---

# Lets play with ErgoMix

> **Forum thread:** [https://ergoforum.org/t/lets-play-with-ergomix/108](https://ergoforum.org/t/lets-play-with-ergomix/108)
> **Category:** Uncategorized | **Created:** 2019-10-10 | **Posts:** 7 | **Views:** 1936

**Related concepts:** Addresses, Box, Ergo Explorer, ErgoScript, ErgoScript context, ErgoTree, Full node, Kiosk, Mempool, Transaction

---

### Post #1 — @scalahub (2019-10-10)

This requires the reader to be familiar with ErgoMix, which is defined in the [whitepaper](https://ergoplatform.org/docs/AdvancedErgoScriptTutorial.pdf) and one variant is given [here](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/org/sh/kiosk/ergo/ErgoMix.scala).

The idea is as follows:

Using her secret x, Alice creates a box containing (g, g^x)

Bob spends this box with one or more of his own boxes and his secret y to create two boxes, one with (g, g^x, g^y, g^xy) and the other with (g, g^x, g^xy, g^y) without revealing which is which.

One of them is spendable by Alice and the other by Bob. Only Alice and Bob know which, and no outsider can guess this with better than 50% (i.e., random guessing).

The scripts are given at the above link. I have created the half-mix box on behalf of Alice. We need someone to take on Bob’s role and create the output boxes.

Here are the steps I used to create the transaction via Kiosk:  
(Alice)

1. Get (P2PK) address  

   [![%20getAddresses](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/8bbfc61c71a8114642a4c7fbac750e7124f58342_2_690x298.png)

   1. getAddresses.png802×347 43.4 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/8bbfc61c71a8114642a4c7fbac750e7124f58342.png "1. getAddresses.png")
2. Get public key from P2PK address  

   [![%20getAlicePubKey(gX)](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/edcb4e243e573b9af354052e8364ccb3906131e7_2_690x261.png)

   2. getAlicePubKey(gX).png1096×415 43.4 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/edcb4e243e573b9af354052e8364ccb3906131e7.png "2. getAlicePubKey(gX).png")
3. Set group element gX as with above public key in environment  

   [![%20setGroupElement(gX)](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/85682cd246ea53a3339cf4e44ff3ecf4c0097401_2_690x289.png)

   3. setGroupElement(gX).png1228×516 56.5 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/85682cd246ea53a3339cf4e44ff3ecf4c0097401.png "3. setGroupElement(gX).png")
4. get default generator (g) by setting the exponent as 1  

   [![%20getDefaultGenerator(g)](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/e7daf10cd3040c1dc6e58de694ae8e7ed457b790_2_690x269.png)

   4. getDefaultGenerator(g).png928×362 33.3 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/e7daf10cd3040c1dc6e58de694ae8e7ed457b790.png "4. getDefaultGenerator(g).png")
5. Set default generator (g) in environment  

   [![%20setDefaultGen(g)](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/d61a17a6f95085328d70c53733e2c1c0257cc896_2_690x285.png)

   5. setDefaultGen(g).png1230×509 55.9 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/d61a17a6f95085328d70c53733e2c1c0257cc896.png "5. setDefaultGen(g).png")
6. get full mix script hash using above environment variables  

   [![%20getFullMixScriptHash](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/263e6abe6c8dcb8b933317b497e1b784e0cd1765_2_690x351.png)

   6. getFullMixScriptHash.png945×481 51 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/263e6abe6c8dcb8b933317b497e1b784e0cd1765.png "6. getFullMixScriptHash.png")
7. update the environment with the above script hash  

   [![%20setFullMixScriptHash](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/2ec6c02794bc67c2a97b9dcc5302ddaf10901f65_2_689x274.png)

   7. setFullMixScriptHash.png1293×514 45.2 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/2ec6c02794bc67c2a97b9dcc5302ddaf10901f65.png "7. setFullMixScriptHash.png")
8. Get the P2S address of Alice’s half-mix box  

   [![%20getHalfMixBoxAddress](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/485ec94ae134a65ac8ea39476f39aa5880677a95_2_690x287.png)

   8. getHalfMixBoxAddress.png1246×519 66 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/485ec94ae134a65ac8ea39476f39aa5880677a95.png "8. getHalfMixBoxAddress.png")
9. Send transaction using the swagger API (can also be done via Kiosk)  

   [![%20sendToAliceAddress](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/4dd7b53d85112b718e9bec91ec733c723875f28a_2_690x388.png)

   9. sendToAliceAddress.png1920×1080 191 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/4dd7b53d85112b718e9bec91ec733c723875f28a.png "9. sendToAliceAddress.png")

Here is the transaction on the blockchain  
<https://explorer.ergoplatform.com/en/transactions/de621059f2c969e5b3c11fb3ff3eb9db3d678a1938373b3399abf87106aa66e8>

I believe the current API is insufficient to create Bob’s transaction in a simple way, but Ergo itself definitely supports it.  
So until the API is further enhanced, I probably cannot spend it myself.

I’ll update this post if I manage to spend this. Others are also invited to try.

---

### Post #2 — @jasondavies (2019-10-12)

I need a bit of help to get this transaction mined, as it has no fee! If you have a mining node, you should be able to set:

```ergoscript
ergo {
  node {
    minimalFeeAmount = 0
  }
}
```

This should allow your mempool to accept zero-fee transactions. Furthermore, you will then need to POST this JSON to `/transactions` in order to get it into your mempool:

```ergoscript
{
  "id" : "52ba7476f4cadd2c25b53d235ae7cad06fd7c79860c521435032c1d4001e4538",
  "inputs" : [
    {
      "boxId" : "2a68a194e602ced36b34f887b7e1fd35bb6f5edbb2118c2434cc72c1740b922c",
      "spendingProof" : {
        "proofBytes" : "c9fd5a478449c99336a8b54021404c5f930b7ae5b8a791324828036adc6eb7bfb8f9a15618a6cb4a1a54087cf31622f47dc713a049a78c57adc6ff3f477df4345d5a5593dfe583f561c47b30cab50f872c99c4753ad14d64c9a21152638aaee947eecb20f4043f5fbcb334c950cfc9d6",
        "extension" : {}
      }
    },
    {
      "boxId" : "432f78bdedbdbfff29d098c5e9ea746db4bca016d1dac1d038a0826596aedce2",
      "spendingProof" : {
        "proofBytes" : "cf98c93064903aefac2ec03ed86cb8fc8943eb7936aa01c2df4263750dda65c963052db14103d5721d693348003bf0d997ec0290d17e6020cd6537ad509c6585bd7dfa4aafc502a8fc262d5d0f092418ff6cf70fa5d8b8f72fbf9f46c0028151c93c03832d7d41fb7f47b9f58137e790",
        "extension" : {}
      }
    }
  ],
  "dataInputs" : []
  "outputs" : [
    {
      "boxId" : "28c4ad213fc011f2878b11cf6241abd8574577eeca4848fee7691b29bfb63215",
      "value" : 1000000,
      "ergoTree" : "1002070279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798070249c9a2fb6e42dad1239c7a8fcf57abe24ab88a7f477aefdc2aabf8bb8530daf2d801d601e4c6a70507eb02cd7201ce7300e4c6a7040773017201",
      "assets" : [],
      "creationHeight" : 74337,
      "additionalRegisters" : {
        "R4" : "070273696783e094afeb7e175e85067d2fc4b28c7f5a21a7569c8c106a50b988cc74",
        "R5" : "07024c159afec53895ab5bb91586e31c68fc8875b846c8ec2294f463f56b27fd8f59"
      }
    },
    {
      "boxId" : "bfbb3f5cc02bf5fd7bbefd8c7bdc67ae57667aef29d65cb0b4aff95da75c8a9f",
      "value" : 1000000,
      "ergoTree" : "1002070279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798070249c9a2fb6e42dad1239c7a8fcf57abe24ab88a7f477aefdc2aabf8bb8530daf2d801d601e4c6a70507eb02cd7201ce7300e4c6a7040773017201",
      "assets" : [],
      "creationHeight" : 74337,
      "additionalRegisters" : {
        "R4" : "07024c159afec53895ab5bb91586e31c68fc8875b846c8ec2294f463f56b27fd8f59",
        "R5" : "070273696783e094afeb7e175e85067d2fc4b28c7f5a21a7569c8c106a50b988cc74"
      }
    }
  ],
  "size" : 640
}
```

It should then be impossible for you to tell which of the two output boxes are spent by [@scalahub](/u/scalahub) or me as they are indistinguishable to anyone else.

---

### Post #3 — @jasondavies (2019-10-13)

Yes! It’s been mined! Look how beautifully indistinguishable the two outputs are: [52ba7476f4cadd2c25b53d235ae7cad06fd7c79860c521435032c1d4001e4538](https://explorer.ergoplatform.com/en/transactions/52ba7476f4cadd2c25b53d235ae7cad06fd7c79860c521435032c1d4001e4538).

Now it should be possible for [@scalahub](/u/scalahub) and me to spend one output each (potentially to do further mixing).

---

### Post #4 — @scalahub (2019-10-14)

Great work!! Indeed, they look indistinguisbable ![:smiley:](https://emoji.discourse-cdn.com/twitter/smiley.png?v=9 ":smiley:")  
For real world use, it will be good if we automate this allowing several rounds. Somewhat like a blackbox where we put in 10 ergs and take them out after a few rounds without any human involvement.

---

### Post #5 — @scalahub (2019-10-15)

Here are a few thoughts and some interesting observations from this trial run of ErgoMix. Let us refer to the code of `halfMixScript` given below.

```ergoscript
  {
    val c1 = OUTPUTS(0).R4[GroupElement].get
    val c2 = OUTPUTS(0).R5[GroupElement].get
  
    OUTPUTS.size == 2 &&
    OUTPUTS(0).value == SELF.value &&
    OUTPUTS(1).value == SELF.value &&
    blake2b256(OUTPUTS(0).propositionBytes) == fullMixScriptHash &&
    blake2b256(OUTPUTS(1).propositionBytes) == fullMixScriptHash &&
    OUTPUTS(1).R4[GroupElement].get == c2 &&
    OUTPUTS(1).R5[GroupElement].get == c1 && {
      proveDHTuple(g, gX, c1, c2) ||
      proveDHTuple(g, gX, c2, c1)
    }
  }
```

1. One immediate thing to notice is that because we have the line `OUTPUTS.size == 2`, there cannot be a fee or change output.
2. Since Ergs cannot be destroyed, this additionally requires that the half mix box has to be spent with one or more boxes whose total value is exactly the same as the half mix box.
3. It is difficult to get a transaction mined without fee. Hence a practical implementation of ErgoMix must handle fee.
4. The above code allows two half mix boxes with the same `gX` and value to be spent together, as was done in the mix transaction. It is possible that Alice generates two such boxes and Bob spends both to claim one output. This flaw must be addressed.

---

### Post #6 — @scalahub (2020-01-31)

It looks like both boxes have been spent. Let others guess which was was mine ![:smiley:](https://emoji.discourse-cdn.com/twitter/smiley.png?v=9 ":smiley:")

---

### Post #7 — @scalahub (2020-05-12)

![](https://avatars.discourse-cdn.com/v4/letter/s/838e76/48.png) scalahub:

> 1. The above code allows two half mix boxes with the same `gX` and value to be spent together, as was done in the mix transaction. It is possible that Alice generates two such boxes and Bob spends both to claim one output. This flaw must be addressed.

For the record the credit for discovering the above “flaw” (of allowing two identical half mix boxes to be spent together) goes to [@jasondavies](/u/jasondavies).

The fix was to require that the half-mix box is the first input of the the mix transaction.
