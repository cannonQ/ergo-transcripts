---
title: Tx Assembler Service - Bypassing Node Requirement For dApps
description: 'ErgoForum discussion: Tx Assembler Service - Bypassing Node Requirement
  For dApps'
tags:
- addresses
- appkit
- auction-house
- box
- data-input
- ergoforum
- ergoscript
- ergoscript-context
- full-node
- multi-stage-contracts
- registers
- sigma-rust
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/tx-assembler-service-bypassing-node-requirement-for-dapps/443
created: '2020-10-28'
last_activity: '2020-11-20'
posts_count: 10
views: 3455
likes: 27
glossary_hits:
- Addresses
- AppKit
- Auction House
- Box
- Data input
- ErgoScript
- ErgoScript context
- Full node
- Multi-stage contracts
- Registers
- Transaction
- sigma-rust
---

# Tx Assembler Service - Bypassing Node Requirement For dApps

> **Forum thread:** [https://ergoforum.org/t/tx-assembler-service-bypassing-node-requirement-for-dapps/443](https://ergoforum.org/t/tx-assembler-service-bypassing-node-requirement-for-dapps/443)
> **Category:** Uncategorized | **Created:** 2020-10-28 | **Posts:** 10 | **Views:** 3455

**Related concepts:** Addresses, AppKit, Auction House, Box, Data input, ErgoScript, ErgoScript context, Full node, Multi-stage contracts, Registers, Transaction, sigma-rust

---

### Post #1 — @anon_real (2020-10-28)

## The Problem

Currently, with libraries like ergo-appkit, ergo-lib (aka sigma-rust), and ergo-ts, development on Ergo has become a lot more convenient and is becoming easier with further developments of ergo-lib.  
However, there are some big barriers for dApps to be extensively used by ordinary users. One of the main ones is that users can’t use their assets to participate in dApps because current wallets don’t support some key features needed by dApps like:

* specifying input boxes
* p2s protected boxes in inputs
* specifying output registers
* and simply not supporting dApp requests

These issues will be resolved in the future for sure with wallets like Yoroi, but not so soon maybe!  
In this situation, dApps have no workarounds other than requiring users to have their node running or implement kind of a wallet themselves and ask users to trust and deposit there! The former is the case with Ergo Auction House which prevents it from being extensively used by everyone!

Specifically, the problem that this topic is going to address is to bypass the node requirements by having an off-chain service to assemble arbitrary transactions for dApps.

## A Solution

The off-chain service will allow dApps to register some requests by proving an address (which user will deposit her assets to) and some other specifications.  
This topic is just for getting feedback and I still haven’t designed the APIs to provide concrete examples, however:

```ergoscript
{
  "address":"address which user deposits to", // p2s address explained in Trusting Issues section
  "returnTo":"address to return assets to in case of failure",
  "startWhen":{ // start assembling when all needed assets are deposited maybe with multiple transactions
    "erg":1002000000,
    "d01bdce3959ff6b675f7ab40ec2479ca5ce1edf3ae6314631f09c0f9807752aa":71
  },
  "txSpec":{
    "requests":[
      {
        "address":"MFrQp7bsMkG9u1AQT33hn5ydUAcrqNMxhocS1RvvJqmUcHaiyXcCE3Sg7DbphepEXHXPkhEBzC6Kqw7jzQDzd4a9SX9M96b4NV8vTVp1zJGepnX41yuLzdWPzbB3k1XRTCUe7An26NDozTD3L5brAu5Nu5Pxkk28kNiFMtfG76n4yfF5YB1wbzXrfoaM9qVTFKhjLTRpJ1pwFZgzPnDC3LXEDyk4EPRjqnRe4WSnMhqa6ngfdGG79J4ZphMuDtamsJY7RD1PoWwxvidk9by7iQrQ3v9EGn1QkrtpxFN9Di7nsyKzUzQS6vxhpdcGXTRBhghaZPMnqRyzdhtspJxiYewSB14Q2cF1uR7vz3m6cqLuS7Fw8jKMpfsY9wXLRaHqUnzfJtEf7LTJfGHtCxifo2iuiHowkLWtwgZDNjH5UAiwAXubSuCzFVSZaDDyxdA5mqBSSRbSC8LoZvQwPcfFLvjjnx2nNznokdG6vA7LU8BbmXrnVXR",
        "value":1000000000,
        "assets":[
          {
            "tokenId":"d01bdce3959ff6b675f7ab40ec2479ca5ce1edf3ae6314631f09c0f9807752aa",
            "amount":71
          }
        ],
        "registers":{
          "R4":"0e240008cd02d84d2e1ca735ce23f224bd43cd43ed67053356713a8a6920965b3bde933648dc",
          "R5":"04bacf2a",
          "R6":"0580a8d6b907",
          "R7":"0e0131",
          "R8":"0e240008cd02d84d2e1ca735ce23f224bd43cd43ed67053356713a8a6920965b3bde933648dc",
          "R9":"0e1c313030303030303030302c313030303030303030302c333439313433"
        }
      }
    ],
    "inputs":[
      "$userIns",
      "boxId1",
      "boxId2",
      "..."
    ],
    "dataInputs":[
      "boxId1",
      "..."
    ],
    "fee":2000000
  }
}
```

The above is a potential request that Ergo Auction House can register to the service which will start a new auction! So the Ergo Auction House app will ask the user to deposit the required assets to the *address* (will discuss what this *address* actually is in the next sections) using their favorite wallet and registers the request to the service.

After such a request, the service will follow the *address* and when the conditions are met, assembles the tx and makes sure it will be mined. In case of failures, assets will be returned to the user; for example if the tx is for placing a bid and someone else places a bid before us!

Note that all input and data input boxes are in ids and no input raw will be required, makes it safe for dApps to avoid running nodes for themselves, or use random nodes in the network to get raw inputs.

Also, note that the above approach doesn’t solve the problem of finding necessary boxes (e.g. in case of placing a bid, the auction box) for dApps and it isn’t the aim of this topic as well!

Furthermore, the *txSpec* is pretty raw, can be improved so that the service encodes the register to make it easier for dApps, but with the mentioned libraries around, I don’t see it as a problem for dApps to encode registers themselves.

With some improvements on the node’s side, the service can be very fast and effective by using chained transactions to avoid wasting time for the deposits to be mined! So basically it will be like the user is running a node and is generating the tx directly without intermediate operations.

Last but not least, the service will of course provide some other APIs for dApps to see the result of their registered requests.

## Trusting Issues

How dApps and users should trust such a service is still a big problem. Several solutions:

* With the service being open-sourced and maybe being provided by a trusted party
* dApps can run the service for themselves, resolving the trust issue for at least themselves
* Using well-designed p2s addresses to prevent the service from stealing

Although one can argue that the first two options can work under some circumstances, the last option is the one which I think is applicable for most use-cases and doesn’t require trust!  
For example, the Ergo Auction House can use p2s addresses which will allow the assets to be spent only for placing a specific bid, and the user’s address being specified as auction’s bidder in the auction box and register it to the service!

## Service Provider Incentives

Although I personally don’t have plans to make profits out of the service, one can have multiple options and plans to make some profits with the service. For example, the service can follow the registered request for some minutes for free and after that remove the request if the conditions are not met to assemble the transaction, then dApps can pay the service to follow the request longer!

Until the dApp bridge in wallets is built, I think such a service will help a lot for the growth of dApps. Even after some wallets provide APIs for dApps, users still can benefit from such service by using any wallet they wish!  
Please let me know if something is overlooked.

---

### Post #2 — @anon_real (2020-10-29)

How to handle spam registrations is yet unsolved.

---

### Post #3 — @robert (2020-10-29)

Very cool, glad to see you’ve tried to generalize the approach as much as possible.

I imagine the more targeted approach is the best way to go with “well-designed p2s addresses” as you called them. I think the three challenging parts of solving this are:

1. Creating contracts & compiling them down to p2s addresses that guarantee the user’s funds are safe.
2. Transmitting the tx request to the assembler service after depositing the funds. (What is the messaging medium)
3. Acquiring the UTXOs (which is non trivial, but I am currently working on that problem with the Ergo Protocol framework)

These are all solvable, but are somewhat open questions which we need to address.

Nonetheless, this is a great start ![:+1:](https://emoji.discourse-cdn.com/twitter/+1.png?v=9 ":+1:")

---

### Post #4 — @anon_real (2020-10-29)

Thanks!

1. Right, dApp developers have to design this part so that the funds are spendable only for their use-case or returning to the user; I don’t think this part can be generalized, however, I think this will not be a problem for dApp developers with a little bit of consulting.  
   EDIT: on your other point about creating and compiling the contract: dApps can have the template of the designed p2s and just replace necessary constants based on the request; Also, the service can provide API for compiling contracts for dApps.
2. The service will follow the p2s to find out whether funds are deposited or not, no need to transmit the tx to the service - So the p2s address should be unique per interaction
3. Right, the combination of these two will be great!

---

### Post #5 — @kushti (2020-10-29)

I’m for welldesigned P2S approach also if possible, requires for careful audit for each app though.

On node’s support, will give ETA soon after an investigation

---

### Post #6 — @anon_real (2020-11-08)

The assembler service is up and running. Ergo Auction House is already integrated to use the service in order to bypass the node requirement for placing bids.

Just to mention one more time what the service means for dApp development ecosystem, dApp developers can basically assume their users are running a node and register any transaction generation request to the service; then the user can use his favorite wallet and sends the necessary funds to the dedicated address. This process is fairly fast since it does not require user’s funds to be mined, it uses unconfirmed boxes to generate the requested transaction.

This is just the case with the Ergo Auction House; since it already supported node, integrating it with the service was a matter of few lines of code!

The code is open source [here](https://github.com/anon-real/ergo-assembler); I’m going to write a detailed description of how to use the service in the coming days on Github. I hope to see new dApps using the service and become usable for all the community, not just the techy ones with node.

---

### Post #7 — @anon_real (2020-11-12)

I have started to document the service usage [here](https://github.com/anon-real/ergo-assembler). A proper explanation takes a lot of time actually, so I will update the doc step by step in the coming days.  
Feel free to ask about any specs meanwhile.

---

### Post #8 — @robert (2020-11-12)

So from what I understand, a user must be able to compile a contract into a P2S address with their own hardcoded values so that we can guarantee that the service won’t be able to trick the user by compiling for them.

Then once that is finished, the json request is registered with the service, which then acts upon the request. Am I correct in understanding this?

Overall, seems like a neat solution of trustless outsourcing tx creation, nice work.

---

### Post #9 — @anon_real (2020-11-12)

* [@robert](/u/robert) Good point! Yes, in order for it to be completely trustless, dApps should be able to compile the script themselves. Currently, there is a `/compile` endpoint in the assembler for this purpose and Auction House is using it; should be changed when there is compiling functionalities in `ergo-lib`.
* Right, there are also some other parts to hint the assembler about when to assemble the transaction.

---

### Post #10 — @anon_real (2020-11-20)

The documentation of the assembler service is done finally )  
I think the assembler service has reached a point to be used by other dApp developers so I have released the first version [here](https://github.com/anon-real/ergo-assembler/releases/tag/v0.1.0).  
However, there are some future works that should be done so that the service becomes fully “general” and scalable; I have listed some of the important ones [here](https://github.com/anon-real/ergo-assembler#future-works).

I look forward to seeing it being used by other dApps and would be happy to help with that – please reach out to me if needed!
