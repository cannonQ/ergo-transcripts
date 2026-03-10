---
title: Tx Builder - Interact with dApps without writing code
description: 'ErgoForum discussion: Tx Builder - Interact with dApps without writing
  code'
tags:
- addresses
- appkit
- box
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- kiosk
- native-tokens
- registers
- sigma-rust
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/tx-builder-interact-with-dapps-without-writing-code/484
created: '2020-11-20'
last_activity: '2020-11-20'
posts_count: 1
views: 721
likes: 5
glossary_hits:
- Addresses
- AppKit
- Box
- Ergo Explorer
- ErgoScript
- ErgoScript context
- Kiosk
- Native tokens
- Registers
- Transaction
- sigma-rust
---

# Tx Builder - Interact with dApps without writing code

> **Forum thread:** [https://ergoforum.org/t/tx-builder-interact-with-dapps-without-writing-code/484](https://ergoforum.org/t/tx-builder-interact-with-dapps-without-writing-code/484)
> **Category:** Uncategorized | **Created:** 2020-11-20 | **Posts:** 1 | **Views:** 721

**Related concepts:** Addresses, AppKit, Box, Ergo Explorer, ErgoScript, ErgoScript context, Kiosk, Native tokens, Registers, Transaction, sigma-rust

---

### Post #1 — @scalahub (2020-11-20)

### Motivation

Currently, to craft a transaction, we need to use Kiosk, sigma-rust, Appkit or some other tool, which makes the entry barrier quite high.  
Motivated from [@anon\_real](/u/anon_real)’s Tx Assembler and other proposals, I had been working on a tool to automate tx building for the off-chain components of an Ergo dApp.

The tool, called simply “Tx Builder” can be used to create transactions for participating in several Ergo application protocols. The goal of Tx Builder is to allow people with just knowledge of Json to craft a transaction following certain rules.

### Documentation

There is a very short introduction [here](https://github.com/scalahub/Kiosk/blob/master/src/main/scala/kiosk/offchain/readme.md).  
For further details, please refer to the source code [here](https://github.com/scalahub/Kiosk/tree/master/src/main/scala/kiosk/offchain) and the examples [here](https://github.com/scalahub/Kiosk/tree/master/src/test/scala/kiosk/offchain).

More details will follow soon.

### Example Script

As an example, the [following Json](https://github.com/scalahub/Kiosk/blob/master/src/test/scala/kiosk/offchain/timestamp.json) can be used for creating a timestamp using the service described [here](https://www.ergoforum.org/t/a-trustless-timestamping-service-for-boxes/432/9)

```ergoscript
{
  "constants": [
    {
      "name": "myBoxId",
      "type": "CollByte",
      "value": "ae57e4add0f181f5d1e8fd462969e4cc04f13b0da183676660d280ad0b64563f"
    },
    {
      "name": "emissionAddress",
      "type": "Address",
      "value": "2z93aPPTpVrZJHkQN54V7PatEfg3Ac1zKesFxUz8TGGZwPT4Rr5q6tBwsjEjounQU4KNZVqbFAUsCNipEKZmMdx2WTqFEyUURcZCW2CrSqKJ8YNtSVDGm7eHcrbPki9VRsyGpnpEQvirpz6GKZgghcTRDwyp1XtuXoG7XWPC4bT1U53LhiM3exE2iUDgDkme2e5hx9dMyBUi9TSNLNY1oPy2MjJ5seYmGuXCTRPLqrsi"
    },
    {
      "name": "timestampAddress",
      "type": "Address",
      "value": "4MQyMKvMbnCJG3aJ"
    },
    {
      "name": "myTokenId",
      "type": "CollByte",
      "value": "dbea46d988e86b1e60181b69936a3b927c3a4871aa6ed5258d3e4df155750bea"
    },
    {
      "name": "minTokenAmount",
      "type": "Long",
      "value": "2"
    },
    {
      "name": "one",
      "type": "Long",
      "value": "1"
    },
    {
      "name": "minStorageRent",
      "type": "Long",
      "value": "2000000"
    }
  ],
  "dataInputs": [
    {
      "id": {
        "value": "myBoxId"
      }
    }
  ],
  "inputs": [
    {
      "address": {
        "value": "emissionAddress"
      },
      "tokens": [
        {
          "index": 0,
          "id": {
            "value": "myTokenId"
          },
          "amount": {
            "name": "inputTokenAmount",
            "value": "minTokenAmount",
            "filter": "Ge"
          }
        }
      ],
      "nanoErgs": {
        "name": "inputNanoErgs"
      }
    }
  ],
  "outputs": [
    {
      "address": {
        "value": "emissionAddress"
      },
      "tokens": [
        {
          "index": 0,
          "id": {
            "value": "myTokenId"
          },
          "amount": {
            "value": "balanceTokenAmount"
          }
        }
      ],
      "nanoErgs": {
        "value": "inputNanoErgs"
      }
    },
    {
      "address": {
        "value": "timestampAddress"
      },
      "registers": [
        {
          "value": "myBoxId",
          "num": "R4",
          "type": "CollByte"
        },
        {
          "value": "HEIGHT",
          "num": "R5",
          "type": "Int"
        }
      ],
      "tokens": [
        {
          "index": 0,
          "id": {
            "value": "myTokenId"
          },
          "amount": {
            "value": "one"
          }
        }
      ],
      "nanoErgs": {
        "value": "minStorageRent"
      }
    }
  ],
  "binaryOps": [
    {
      "name": "balanceTokenAmount",
      "first": "inputTokenAmount",
      "op": "Sub",
      "second": "one"
    }
  ]
}
```

### Using with KioskWallet

The above script was used to automatically generate [this transaction](https://explorer.ergoplatform.com/en/transactions/da441606b7933de8e87bbd439b4fbe1888c1403f58682c5bcddcbc488ee99773) using [KioskWallet](https://kioskweb.org/session/#kiosk.Wallet).

Please refer to the screenshot for details  

[![Screenshot from 2020-11-21 03-50-22](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/2fbfdb63f43b6c1d72134314bf3952a18520786b_2_413x499.png)

Screenshot from 2020-11-21 03-50-221485×1797 232 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/2fbfdb63f43b6c1d72134314bf3952a18520786b.png "Screenshot from 2020-11-21 03-50-22")
