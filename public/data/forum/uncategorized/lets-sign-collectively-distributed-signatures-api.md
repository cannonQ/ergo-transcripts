---
title: Let's sign collectively! Distributed signatures API
description: 'ErgoForum discussion: Let''s sign collectively! Distributed signatures
  API'
tags:
- addresses
- box
- eip
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- full-node
- registers
- ring-signatures
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/lets-sign-collectively-distributed-signatures-api/259
created: '2020-06-24'
last_activity: '2020-07-14'
posts_count: 8
views: 1512
likes: 16
glossary_hits:
- Addresses
- Box
- EIP
- Ergo Explorer
- ErgoScript
- ErgoScript context
- ErgoTree
- Full node
- Registers
- Ring signatures
- Transaction
---

# Let's sign collectively! Distributed signatures API

> **Forum thread:** [https://ergoforum.org/t/lets-sign-collectively-distributed-signatures-api/259](https://ergoforum.org/t/lets-sign-collectively-distributed-signatures-api/259)
> **Category:** Uncategorized | **Created:** 2020-06-24 | **Posts:** 8 | **Views:** 1512

**Related concepts:** Addresses, Box, EIP, Ergo Explorer, ErgoScript, ErgoScript context, ErgoTree, Full node, Registers, Ring signatures, Transaction

---

### Post #1 — @kushti (2020-06-24)

It is well-known (among hardcore Ergonauts) that Ergo Platform has support for variety of composeable and efficient zero-knowledge proofs of knowledge in its authentication language. In particular, it provides possibility for ring and threshold signatures preserving zero-knowledge, so, for example, by observing 2-out-of-3 threshold signature associated with public keys of (Alice, Bob, Carol) on the blockchain, it is not possible to figure out who were those two parties who signed.

While Ergo Platform protocol supports threshold and ring signatures since day one, concrete applications doing signing were not available eventually. First, the ErgoMix implementations (by [@anon92048](/u/anon92048) and then [@anon2020s](/u/anon2020s) ) are using kind of ring signature hiding a spending path. And recently [EIP-11](https://github.com/ergoplatform/eips/pull/8) was introduced which is about adding support for distributed signing to the reference client (and not only). The implementation of EIP-11 is mostly done in [this PR](https://github.com/ergoplatform/ergo/pull/1118) and in I’m going to explain how to use new API method

First, let’s make a script for a box protected with 2-out-of-3 threshold signature. One option is about to hardcode public keys in the script, I’ve chosen another way, namely, to put public keys of signers into registers:

```ergoscript
{
val pkA  = SELF.R4[GroupElement].get
val pkB  = SELF.R5[GroupElement].get
val pkC  = SELF.R6[GroupElement].get

atLeast(2, Coll(proveDlog(pkA), proveDlog(pkB), proveDlog(pkC)))
}
```

.  
Then we need to lock money with concrete keys. It seems the node Swagger API is the most convenient way to do that, e.g. by posting the following payment request to /wallet/payment/send:

```ergoscript
[
    {
      "address": "umRXw8E7PmdHbswncxFe3jmE51oGFzL4CqfZYfiRr4aL",
      "value": 1000000000,    
      "registers": {
          "R4": "0702b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f",
          "R5": "070354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380",
          "R6": "070235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d"
      }
    }
]
```

(use /utils/addressToRaw/{address} method to get encoded points from P2PK addresses shown by the wallet and prepend group element type descriptor “07” then).

Thus we’re getting the following box, for example (output #0): <https://explorer.ergoplatform.com/en/transactions/0ffc5ba326262f25016c59c58a34b2f7fed2ea1b69f8f007d270f6ef07bced49> . We can get binary representation of unspent box via /utxo/byIdBinary API method, e.g. utxo/byIdBinary/f1892011ed31b8e51f3f3ae44f6d9132070343a7bf6db61b3342696a7873a085 gives us:

“8094ebdc0310010404987300830308cde4c6a70407cde4c6a70507cde4c6a70607abdd0f00030702b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f070354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380070235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d0ffc5ba326262f25016c59c58a34b2f7fed2ea1b69f8f007d270f6ef07bced4900”

We use first two keys for signing (as it is 2-out-of). Please note that members of the signing ring know (and choose) who’s signing and who will be simulated.

Let’s assume that the first key belongs to Alice, and the second key belongs to Bob. The the signing procedure could be as follows:

First, Alice generates secret randomness and public commitment to it by posting the following request to /script/generateCommitment :

```ergoscript
{
  "op": -51,
  "h": "02b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f"
}
```

result is :  
{  
“r”: “…”,  
“a”: “02c103443ab26655a1ef36f44643700cc5f4730a2a1830085dda1072ccfb30940f”  
}

(“r” is omitted to avoid private key recovery)  
She sends then “a” value to Bob along with unsigned transaction generated via /wallet/transaction/generateUnsigned.

Now Bob is generating invalid (partial) signature by sending the following signing request to /wallet/transaction/sign with Alice’s commitment included as hint:

```ergoscript
{
  "tx": {
  "id": "ebafdd3a00bd3d9aa26be4056c4f742e9cb0702cce9864567aa4e34cda185d54",
  "inputs": [
    {
      "boxId": "f1892011ed31b8e51f3f3ae44f6d9132070343a7bf6db61b3342696a7873a085",
      "extension": {}
    }
  ],
  "dataInputs": [],
  "outputs": [
    {
      "boxId": "49974195f916dcc95e94c72bcf6e90200bbf2c06e5cc7a22a505bad1da77927d",
      "value": 999000000,
      "ergoTree": "10010101d17300",
      "assets": [],
      "creationHeight": 257748,
      "additionalRegisters": {},
      "transactionId": "ebafdd3a00bd3d9aa26be4056c4f742e9cb0702cce9864567aa4e34cda185d54",
      "index": 0
    },
    {
      "boxId": "096192e25b691697b5afdd4a5cf39c69b84fba8b483f475c2e2d3cf47758abb1",
      "value": 1000000,
      "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
      "assets": [],
      "creationHeight": 257748,
      "additionalRegisters": {},
      "transactionId": "ebafdd3a00bd3d9aa26be4056c4f742e9cb0702cce9864567aa4e34cda185d54",
      "index": 1
    }
  ]
},
  
  "secrets": {
    "dlog": [      
    ],
    "dht": [     
    ]
  },

  "hints": [
    {
      "hint": "cmtReal",
      "type": "dlog",
      "pubkey":{
         "op": -51,
         "h": "02b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f"
      },
      "a": "02c103443ab26655a1ef36f44643700cc5f4730a2a1830085dda1072ccfb30940f"  
    }
  ]
}
```

Bob is sending transaction with invalid signature to Alice. First, she extracts Bob’s and Carol’s (simulated by Bob actually) commitments and partial signatures by feeding Bob’s invalid transaction and Bob’s and Carol’s pubkeys into /script/extractHints :

```ergoscript
{
  "transaction": {
  "id": "ebafdd3a00bd3d9aa26be4056c4f742e9cb0702cce9864567aa4e34cda185d54",
  "inputs": [
    {
      "boxId": "f1892011ed31b8e51f3f3ae44f6d9132070343a7bf6db61b3342696a7873a085",
      "spendingProof": {
        "proofBytes": "2c429642fba49717349dbeafb5c4a0725d012e901352fdcc390d53103824fcadb82553ddef404d69794679327c976bc3195dc78926c8161437d595a0a04dac8d3fe08d999d3c70f18c92cddaa1260d3a564c7431c478825d52bd28673637d986f545e871bd07a99cf6c3e04c2342da40f4608fb322f213c2b1f9166ad526cb7d7a931b02b8966f6ba4cc98aa435156f4",
        "extension": {}
      }
    }
  ],
  "dataInputs": [],
  "outputs": [
    {
      "boxId": "49974195f916dcc95e94c72bcf6e90200bbf2c06e5cc7a22a505bad1da77927d",
      "value": 999000000,
      "ergoTree": "10010101d17300",
      "assets": [],
      "creationHeight": 257748,
      "additionalRegisters": {},
      "transactionId": "ebafdd3a00bd3d9aa26be4056c4f742e9cb0702cce9864567aa4e34cda185d54",
      "index": 0
    },
    {
      "boxId": "096192e25b691697b5afdd4a5cf39c69b84fba8b483f475c2e2d3cf47758abb1",
      "value": 1000000,
      "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
      "assets": [],
      "creationHeight": 257748,
      "additionalRegisters": {},
      "transactionId": "ebafdd3a00bd3d9aa26be4056c4f742e9cb0702cce9864567aa4e34cda185d54",
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

and then she adds a hint with her commitment and randomness and produces transaction. A request to /wallet/transaction/sign is as follows:

```ergoscript
{
  "tx": {
  "id": "ebafdd3a00bd3d9aa26be4056c4f742e9cb0702cce9864567aa4e34cda185d54",
  "inputs": [
    {
      "boxId": "f1892011ed31b8e51f3f3ae44f6d9132070343a7bf6db61b3342696a7873a085",
      "extension": {}
    }
  ],
  "dataInputs": [],
  "outputs": [
    {
      "boxId": "49974195f916dcc95e94c72bcf6e90200bbf2c06e5cc7a22a505bad1da77927d",
      "value": 999000000,
      "ergoTree": "10010101d17300",
      "assets": [],
      "creationHeight": 257748,
      "additionalRegisters": {},
      "transactionId": "ebafdd3a00bd3d9aa26be4056c4f742e9cb0702cce9864567aa4e34cda185d54",
      "index": 0
    },
    {
      "boxId": "096192e25b691697b5afdd4a5cf39c69b84fba8b483f475c2e2d3cf47758abb1",
      "value": 1000000,
      "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
      "assets": [],
      "creationHeight": 257748,
      "additionalRegisters": {},
      "transactionId": "ebafdd3a00bd3d9aa26be4056c4f742e9cb0702cce9864567aa4e34cda185d54",
      "index": 1
    }
  ]
},
 

  "hints": [
    {
      "hint": "cmtWithSecret",
      "type": "dlog",
      "pubkey": {
         "op": -51,
         "h": "02b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f"
      },
      "a": "02c103443ab26655a1ef36f44643700cc5f4730a2a1830085dda1072ccfb30940f" ,
      "secret": "..." 
    },
     {
    "type": "dlog",
    "a": "035e5bcc7edcf47454fc41bf4b824e7357cb1b6a95df89c79d10cf867713d2d5ac",
    "pubkey": {
      "op": -51,
      "h": "0235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d"
    },
    "hint": "cmtSimulated"
  },
  {
    "hint": "proofSimulated",
    "challenge": "e0556372b3c893e1fdf34bc8850577c9d6cba5c697eb4189",
    "pubkey": {
      "op": -51,
      "h": "0235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d"
    },
    "proof": "e0556372b3c893e1fdf34bc8850577c9d6cba5c697eb4189f4608fb322f213c2b1f9166ad526cb7d7a931b02b8966f6ba4cc98aa435156f4"
  },
  {
    "type": "dlog",
    "a": "0277755feea497330c74d6442dfe9895e8de037a6b4e0d96e555b13f0f17d8869c",
    "pubkey": {
      "op": -51,
      "h": "0354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380"
    },
    "hint": "cmtReal"
  },
  {
    "hint": "proofReal",
    "challenge": "d95830628bec6f4c45d618156a453aa0af8ddcf4eb7c2a4a",
    "pubkey": {
      "op": -51,
      "h": "0354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380"
    },
    "proof": "d95830628bec6f4c45d618156a453aa0af8ddcf4eb7c2a4a564c7431c478825d52bd28673637d986f545e871bd07a99cf6c3e04c2342da40"
  }
  ]
}
```

(“secret” aka “r” skipped again)

As result, we’re getting JSON-encoded transaction which can be broadcasted via POST request to /transactions to get the transaction on the blockchain.

Still, the code is not finalized (“op”: -51 looks ugly, however, it was done previously) and not user-friendly, so as a next step, some applications working with the API are needed.

---

### Post #2 — @robert (2020-06-24)

Very cool to see that distributed signatures (with zero knowledge) are now about to be usable on mainnet. Great work.

---

### Post #3 — @anon_real (2020-07-03)

So is it possible to use blockchain to avoid off-chain interaction between group members? Sth like the following:

1. A group member proposes a transaction by putting her request to a specified box’s registers accessible by group members (they can use a shared box spendable by all group members to produce such a box with desired registers in order to avoid identity disclosure).
2. Group members see the request and if they agree, they produce commitment and put it on blockchain like before.
3. When reaching the threshold, one can simulate other commitments and do the same thing as before.
4. One of the group members can generate the valid transaction.

---

### Post #4 — @kushti (2020-07-08)

Using blockchain only is possible, the only problem is to decide who will be a real signer and who will be simulated, and also who will simulate (the latter can be decided deterministically once real signers set is decided, e.g. a signer with the first key from the real keys sorted alphabetically will sign).

So the problem is reducible to anonymous share: there’s a group which is willing to share some data (real signer indexes) on-chain without revealing the data. I think the problem is solvable for Ergo but solution is to be found.

---

### Post #5 — @anon_real (2020-07-08)

Let’s assume one who requested the payment will simulate. She can provide a public key (one time usage) with her request, others can use her pk to put their encrypted pk alongside with their commitments as before on blockchain as state before.  
This way only one who requested the payment will know who is participating as real signers and not even other members.

---

### Post #6 — @scalahub (2020-07-09)

Quite an interesting proposal. In fact I recall discussing with [@kushti](/u/kushti) the possibility of 2-out-of-3 signature with on-chain interaction only.

However, for on-chain, I think threshold signatures are not really needed, unless we require the zero-knowledge property.

Someone will create a box with some ergs locked and R4 containing “unused” public keys A, B, C, … and R5 containing 0, the count of “used” public keys.

The script says that:

1. Any of the unused keys in R4 can spend the box.
2. If the number in R5 >= threshold then funds can be sent to X address.
3. If the number in R5 < threshold then output must be a box with identical script AND its R4 is R4 of this box minus spending key AND its R5 is R5 of this box plus 1 AND its value is >= value of this box.

---

### Post #7 — @kushti (2020-07-10)

Right, lets consider the following things:

* Do we need for zero-knowledge
* Is it okay to have some off-chain setup, or all the interactions happen on-chain?

With clear setting it is easier to develop a protocol )

---

### Post #8 — @kushti (2020-07-14)

I think some offchain interaction would be needed anyway, at least to share unsigned transaction bytes. Maybe the best solution would be some public bulletin board where encrypted content can be posted along with non-encrypted labels. Maybe there’s something like that on top of IPFS?
