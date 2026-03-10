---
title: Improved distributed signatures
description: 'ErgoForum discussion: Improved distributed signatures'
tags:
- addresses
- box
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- full-node
- registers
- ring-signatures
- schnorr-signatures
- sigmastate-interpreter
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/improved-distributed-signatures/366
created: '2020-09-09'
last_activity: '2020-09-21'
posts_count: 11
views: 1339
likes: 22
glossary_hits:
- Addresses
- Box
- Ergo Explorer
- ErgoScript
- ErgoScript context
- ErgoTree
- Full node
- Registers
- Ring signatures
- Schnorr signatures
- Sigmastate interpreter
- Transaction
---

# Improved distributed signatures

> **Forum thread:** [https://ergoforum.org/t/improved-distributed-signatures/366](https://ergoforum.org/t/improved-distributed-signatures/366)
> **Category:** Uncategorized | **Created:** 2020-09-09 | **Posts:** 11 | **Views:** 1339

**Related concepts:** Addresses, Box, Ergo Explorer, ErgoScript, ErgoScript context, ErgoTree, Full node, Registers, Ring signatures, Schnorr signatures, Sigmastate interpreter, Transaction

---

### Post #1 — @kushti (2020-09-09)

Initial implementation of distributed signatures support in the node worked well in simple cases, and ZK Treasury built on top of it. However, in complex cases it has some problems:

* hints generated (such as commitments) were not tied to a position of a sub-expression in a sigma-expression. For example, for statement like “atLeast(2, Coll(pkAlice, pkBob, pkCharlie)) && (pkBob || pkDiana)”, the same commitment would be generated for Bob. Which is improper and insecure at all - a signature would reveal Bob’s secret key (as the same randomness used twice for different challenges in Schnorr protocols).
* similarly, hints generated were not tied to inputs.

This is fixed with new API introduced in distributed-sigs branch. Now all the hints tied with input indexes and also with positions in sigma-tree after script reduction with current context. Also, API is now simpler-to-use I suppose.

So let me provide a new tutorial on collective signing. Like in the previous tutorial, first we pay to 2-out-of-3 spending script (with keys stored in registers):

```ergoscript
{
val pkA  = SELF.R4[GroupElement].get
val pkB  = SELF.R5[GroupElement].get
val pkC  = SELF.R6[GroupElement].get

atLeast(2, Coll(proveDlog(pkA), proveDlog(pkB), proveDlog(pkC)))
}
```

Then, when a transaction is confirmed (<https://explorer.ergoplatform.com/en/transactions/71aa67f95e96827193bdf711f6ccf41b30ef8bbbdaef63ed672dfb7420a4c314>) , we get output bytes via /utxo/byIdBinary/{boxId} . Then we generate an unsigned transaction by providing inputs directly, in our example, by providing the following input to /wallet/transaction/generateUnsigned :

```ergoscript
{
  "requests": [
    {
      "address": "4MQyML64GnzMxZgm",
      "value": 999000000
    }
  ],
  "fee": 1000000,
  "inputsRaw": [
"8094ebdc0310010404987300830308cde4c6a70407cde4c6a70507cde4c6a706079a8f1300030702b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f070354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380070235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d71aa67f95e96827193bdf711f6ccf41b30ef8bbbdaef63ed672dfb7420a4c31400"
  ],
  "dataInputsRaw": [ 
  ]
}
```

Then Alice generates commitments for the unsigned transaction by sending it to the NEW /wallet/generateCommitments (additional secrets to be used along with wallet’s can be provided also), and in the output she’s getting both secret and public hints:

```ergoscript
{
  "secretHints": {
    "0": [
      {
        "type": "dlog",
        "a": "03c855c50d173f1b0e2797390b71d82023dcb8e12950e4fa0b9ae3be17bacca2a1",
        "pubkey": {
          "op": -51,
          "h": "02b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f"
        },
        "position": "0-0",
        "hint": "cmtWithSecret",
        "secret": "..."
      }
    ]
  },
  "publicHints": {
    "0": [
      {
        "type": "dlog",
        "a": "03c855c50d173f1b0e2797390b71d82023dcb8e12950e4fa0b9ae3be17bacca2a1",
        "pubkey": {
          "op": -51,
          "h": "02b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f"
        },
        "position": "0-0",
        "hint": "cmtReal"
      }
    ]
  }
}
```

(secret randomness is omitted to avoid private key extraction).

Then Alice must store secret hints locally and provide public to Bob. Bob is signing using Alice’s hints by sending a request to /wallet/transaction/sign like:

```ergoscript
{
  "tx": {
  "id": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
  "inputs": [
    {
      "boxId": "9bcbbce28b19132c28b2e088ddea03f792673e9c4509a239145c241c891ca4b9",
      "extension": {}
    }
  ],
  "dataInputs": [],
  "outputs": [
    {
      "boxId": "5bb78563af3843e5bf816c9dd50bd7c0a0b09c7fd2da2da075a8e5d8f545cb7f",
      "value": 999000000,
      "ergoTree": "10010101d17300",
      "assets": [],
      "creationHeight": 313682,
      "additionalRegisters": {},
      "transactionId": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
      "index": 0
    },
    {
      "boxId": "b5a1a069015f94bf7daaec46fc121044607603c844d1c6d6a8e9b2322379b375",
      "value": 1000000,
      "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
      "assets": [],
      "creationHeight": 313682,
      "additionalRegisters": {},
      "transactionId": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
      "index": 1
    }
  ]
},
  "inputsRaw": [
"8094ebdc0310010404987300830308cde4c6a70407cde4c6a70507cde4c6a706079a8f1300030702b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f070354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380070235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d71aa67f95e96827193bdf711f6ccf41b30ef8bbbdaef63ed672dfb7420a4c31400"
  ],
  "dataInputsRaw": [
    
  ],
  "secrets": {
    
  },
  "hints": {
  "secretHints": {
    
  },
  "publicHints": {
    "0": [
      {
        "type": "dlog",
        "a": "03c855c50d173f1b0e2797390b71d82023dcb8e12950e4fa0b9ae3be17bacca2a1",
        "pubkey": {
          "op": -51,
          "h": "02b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f"
        },
        "position": "0-0",
        "hint": "cmtReal"
      }
    ]
  }
}
}
```

and sending signed (but invalid) transaction to Alice (he can send hints generated on the next step instead).

Now Alice is extracting commitment from Bob and Carol from the transaction, by sending a request to /script/extractHints like:

```ergoscript
{
  "transaction": {
  "id": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
  "inputs": [
    {
      "boxId": "9bcbbce28b19132c28b2e088ddea03f792673e9c4509a239145c241c891ca4b9",
      "spendingProof": {
        "proofBytes": "7d64cd47d3dc8bc5c336297e494f48d601c586175b37da228a54a77f52eb1ce307c22c7541368b73307bf37be4051406b49e989b4aee9f27789de0c426a8231fead96178544cbb54b37286f2630dcd9d5794ae9905697e8eeb0d03540d4cb8352a0734187d5e84b6d0825f12e3fcf287ee24e48d3a2a6dfb56471c41767ef88a3279e8fdc70274d85baf16686b641eaa",
        "extension": {}
      }
    }
  ],
  "dataInputs": [],
  "outputs": [
    {
      "boxId": "5bb78563af3843e5bf816c9dd50bd7c0a0b09c7fd2da2da075a8e5d8f545cb7f",
      "value": 999000000,
      "ergoTree": "10010101d17300",
      "assets": [],
      "creationHeight": 313682,
      "additionalRegisters": {},
      "transactionId": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
      "index": 0
    },
    {
      "boxId": "b5a1a069015f94bf7daaec46fc121044607603c844d1c6d6a8e9b2322379b375",
      "value": 1000000,
      "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
      "assets": [],
      "creationHeight": 313682,
      "additionalRegisters": {},
      "transactionId": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
      "index": 1
    }
  ],
  "size": 313
},
  "real": [
    {
      "op": -51,
      "h": "0354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380"
    }
  ],
  "simulated": [
    {
      "op": -51,
      "h": "0235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d"     
    }
  ]
}
```

and then she adds her secret hint to generate valid signed transaction, a request to /wallet/transaction/sign would be like:

```ergoscript
{
  "tx": {
  "id": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
  "inputs": [
    {
      "boxId": "9bcbbce28b19132c28b2e088ddea03f792673e9c4509a239145c241c891ca4b9",
      "extension": {}
    }
  ],
  "dataInputs": [],
  "outputs": [
    {
      "boxId": "5bb78563af3843e5bf816c9dd50bd7c0a0b09c7fd2da2da075a8e5d8f545cb7f",
      "value": 999000000,
      "ergoTree": "10010101d17300",
      "assets": [],
      "creationHeight": 313682,
      "additionalRegisters": {},
      "transactionId": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
      "index": 0
    },
    {
      "boxId": "b5a1a069015f94bf7daaec46fc121044607603c844d1c6d6a8e9b2322379b375",
      "value": 1000000,
      "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
      "assets": [],
      "creationHeight": 313682,
      "additionalRegisters": {},
      "transactionId": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
      "index": 1
    }
  ]
},
  "inputsRaw": [
"8094ebdc0310010404987300830308cde4c6a70407cde4c6a70507cde4c6a706079a8f1300030702b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f070354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380070235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d71aa67f95e96827193bdf711f6ccf41b30ef8bbbdaef63ed672dfb7420a4c31400"
  ],
  "dataInputsRaw": [
  ],
  "secrets": { 
  },
  "hints": {
  "secretHints": {
    "0": [
      {
        "type": "dlog",
        "a": "03c855c50d173f1b0e2797390b71d82023dcb8e12950e4fa0b9ae3be17bacca2a1",
        "pubkey": {
          "op": -51,
          "h": "02b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f"
        },
        "position": "0-0",
        "hint": "cmtWithSecret",
        "secret": "...."
      }
    ]
  },
  "publicHints": {
    "0": [
      {
        "type": "dlog",
        "a": "02b6c2b73e59ad061211cebb37a7d9b238b9388cdb0c3b96ae2152ba174f67de90",
        "pubkey": {
          "op": -51,
          "h": "0235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d"
        },
        "position": "0-2",
        "hint": "cmtSimulated"
      },
      {
        "hint": "proofSimulated",
        "challenge": "e39924c725e1aee0cb705ce18a15d5425148939b7739e628",
        "pubkey": {
          "op": -51,
          "h": "0235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d"
        },
        "proof": "e39924c725e1aee0cb705ce18a15d5425148939b7739e628ee24e48d3a2a6dfb56471c41767ef88a3279e8fdc70274d85baf16686b641eaa",
        "position": "0-2"
      },
      {
        "type": "dlog",
        "a": "0323bd7f1b87280aa2b7cb2a374da1897ef7d5fae7ab3948440907d303427740ba",
        "pubkey": {
          "op": -51,
          "h": "0354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380"
        },
        "position": "0-1",
        "hint": "cmtReal"
      },
      {
        "hint": "proofReal",
        "challenge": "69cd83b8770ab203ccb27094cb235e31613360e0933cf22e",
        "pubkey": {
          "op": -51,
          "h": "0354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380"
        },
        "proof": "69cd83b8770ab203ccb27094cb235e31613360e0933cf22e5794ae9905697e8eeb0d03540d4cb8352a0734187d5e84b6d0825f12e3fcf287",
        "position": "0-1"
      }
    ]
  }
}
}
```

(secret randomness omitted again)

And now generated signed valid transaction can be broadcasted.

[@anon\_real](/u/anon_real) please update ZK Treasury accordingly and check it with complex statements.

---

### Post #2 — @anon_real (2020-09-09)

[@kushti](/u/kushti)  
In the previous API, generating commitments had nothing to do with the wallet’s secret or external secret but it its not the case in the new API. Can you please elaborate on this?

---

### Post #3 — @anon_real (2020-09-09)

Also currently, unsigned transaction is being generated after approval (so after commitments are generated). So I suppose this behavior has to change since tx is needed in generating commitment? or it is still possible to generate commitment by providing public key let’s say?

---

### Post #4 — @anon_real (2020-09-10)

![](https://avatars.discourse-cdn.com/v4/letter/a/c68b51/48.png)
[Zero-Knowledge Treasury on Top of ERGO](https://www.ergoforum.org/t/zero-knowledge-treasury-on-top-of-ergo/354/8) [Ecosystem Development](/c/dev/ecosystem-development/9)

> I have updated the ZK Treasury according to the new API explained [here](https://www.ergoforum.org/t/improved-distributed-signatures/366) by [@kushti](/u/kushti).
> As kushti has explained, the previous implementation had some problems with complex statements which is resolved in the improved version.
> Here is a joint spending created by ZK Treasury client apps:
> <https://explorer.ergoplatform.com/en/transactions/c3b9b47285c88ca709226e61f9f1dbf6a3c6e9261dafcd3ff82dd5faa740c913>
> Funds were protected by the following statement:
> 3-of-(A, B, C, D, E) && 1-of-(B, F)

---

### Post #5 — @kushti (2020-09-10)

In previous version commitments were tied to public key just, however, this can be critically insecure for statements where a public key is presented more than once.

It is possible to get previous API method back, but then a client needs to do all the work to obtain positions for the commitments in sigma-trees.

New method is much simpler then, it is expecting an unsigned transaction (and also externally stored secrets) only.

---

### Post #6 — @DarkSideOfBrrrrr (2020-09-10)

perfect guys, lets start a fund [@kushti](/u/kushti) can you run a server?

---

### Post #7 — @kushti (2020-09-10)

[@anon\_real](/u/anon_real) is it a good time to install a private (for now) server for a bigger circle ?

---

### Post #8 — @anon_real (2020-09-10)

Yes, private seems good for now.  
Let me finalize the code in 1-2 days first, will let you know.

---

### Post #9 — @kushti (2020-09-15)

BTW, with distributed signatures and ZK treasuries done, we can now have a lot of applications to be built on top, such as committee-based local exchange trading systems <https://ergoplatform.org/en/blog/2019_04_22-lets/> or jointly controlled fund for providing targeted financial help <http://chepurnoy.org/blog/2018/10/smart-contracts-for-the-people/>

---

### Post #10 — @scalahub (2020-09-18)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> This is fixed with new API introduced in distributed-sigs branch. Now all the hints tied with input indexes and also with positions in sigma-tree after script reduction with current context. Also, API is now simpler-to-use I suppose.

Can you please add a link to the code that implements the fix?

---

### Post #11 — @kushti (2020-09-21)

The fix mostly in sigma part: <https://github.com/ScorexFoundation/sigmastate-interpreter/pull/682> , already merged!

For Ergo part, some polishing is needed still: <https://github.com/ergoplatform/ergo/pull/1118>
