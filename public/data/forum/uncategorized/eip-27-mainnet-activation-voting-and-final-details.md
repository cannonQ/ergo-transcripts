---
title: EIP-27 Mainnet Activation Voting and Final Details
description: 'ErgoForum discussion: EIP-27 Mainnet Activation Voting and Final Details'
tags:
- addresses
- box
- eip
- emission-schedule
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- fair-launch
- full-node
- native-tokens
- soft-fork
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/eip-27-mainnet-activation-voting-and-final-details/3585
created: '2022-05-03'
last_activity: '2022-07-25'
posts_count: 6
views: 3599
likes: 31
glossary_hits:
- Addresses
- Box
- EIP
- Emission schedule
- Ergo Explorer
- ErgoScript
- ErgoScript context
- Fair launch
- Full node
- Native tokens
- Soft fork
- Transaction
---

# EIP-27 Mainnet Activation Voting and Final Details

> **Forum thread:** [https://ergoforum.org/t/eip-27-mainnet-activation-voting-and-final-details/3585](https://ergoforum.org/t/eip-27-mainnet-activation-voting-and-final-details/3585)
> **Category:** Uncategorized | **Created:** 2022-05-03 | **Posts:** 6 | **Views:** 3599

**Related concepts:** Addresses, Box, EIP, Emission schedule, Ergo Explorer, ErgoScript, ErgoScript context, Fair launch, Full node, Native tokens, Soft fork, Transaction

---

### Post #1 — @kushti (2022-05-03)

After successful testnet activation of EIP-27 ( discussed at [Emission Soft-Fork Proposal](https://www.ergoforum.org/t/emission-soft-fork-proposal/2996) , and before at [Ergo Emission: details, retargeting via a soft-fork](https://www.ergoforum.org/t/ergo-emission-details-retargeting-via-a-soft-fork/2778) ), which was done with the help of few miners, now mainnet setup is done.

Full details can be found in text of the upcoming EIP: [EIP-0027: Emission Soft-Fork by kushti · Pull Request #52 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/52) . Most important details and information for mining pools and solo miners are in this post below.

EIP-27 activation height: 777,217 .

EIP-27 will be activated at that height if enough support from mining power will be expressed before the height. Enough support here means at least 888 blocks out of 1024 blocks in a voting epoch to vote for EIP-27 before the EIP-27 activation height. For voting, we’re using parameter *8* now, which is used for output cost (so how costly for a transaction to have one output).

So to vote for EIP-27, please put the following setting into node config:

```ergoscript
ergo {
  voting {
    8 = 1000
  }
}
```

Voting can be done with any node version.

If support for EIP-27 expressed before the activation height, and EIP locks in, */info* API request will return *eip27Supported: false* in its output.

To check EIP-27 rules after successful activation, the following setting is needed, which is off by default but needed for mining nodes (to be on proper chain in case of chain-split where old nodes can generate blocks not compatible with EIP-27):

```ergoscript
ergo {
  chain {
    reemission {
      checkReemissionRules = true
    }
  }
}
```

To make proper EIP-27 compatible transactions in the presence of re-emission tokens in the node wallet, another setting is needed:

```ergoscript
ergo {
  wallet {
    checkEIP27 = true
  }
}
```

So combined setting could be like:

```ergoscript
ergo {
  networkType = "mainnet"
  node {
    mining = true
  }
  voting {
    8 = 1000
  }
  chain {
    reemission {
      checkReemissionRules = true
    }
  }
  wallet {
    checkEIP27 = true
  }
}
```

the node will do emission contract box modification (tokens injection) automatically on activation height, and will do block candidates generation, blocks validation and payments correctly with those settings.

Please use EIP27-RC2 version of the node to test things on the testnet [Release EIP-27 Experimental Release Candidate 2 (RC2) · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/releases/tag/eip27-rc2) , it can be used on the mainnet as well, but still under review.

You can get emission for a block via */emission/at* API method, or just use original emission with subtracting 12 ERG when emission 15 ERG or more, or X - 3, where X is original emission, when 3 < X < 15.

---

### Post #2 — @kushti (2022-06-02)

EIP-27 got locked in on the mainnet: there was an epoch already with more than 888 votes out of 1024 (actually , there were few epochs with more than 92% hashrate support).

Thus this is mandatory for miners to check EIP-27 rules by using this setting:

```ergoscript
ergo {
  chain {
    reemission {
      checkReemissionRules = true
    }
  }
}
```

otherwise, a node may adopt non-EIP27 compliant

This should be done before EIP-27 activation which will take place @ block #777,217 . And again, nodes paying to miners must have this setting on:

```ergoscript
ergo {
  wallet {
    checkEIP27 = true
  }
}
```

---

### Post #3 — @kushti (2022-06-22)

EIP-27 got successfully activated @ block # 777,217 . Now the biggest question for pools and miners is how to handle rewards and payments.

In the first place, note that emission in Ergo is done via a contract (releasing ERGs each block according to a schedule set in the contract). After EIP-27 soft-fork, re-emission tokens are attached to mining rewards outputs, where 1 re-emission token is about 1 nanoERG (to be sent to re-emission contract via a proxy pay-to-reemission contract).

So now mining reward transaction looks like this:

`https://explorer.ergoplatform.com/en/transactions/65511db3eeecf5e0c0b6b3499a2a58b8064760a22e9b6cc53329e3be9875f640`

So get pure ERG reward from miner’s outputs, it is needed to subtract reemission tokens ( **d9a2cc8a09abfaed87afacfbb7daee79a6b26f10c6613fc13d3f3953e5521d1a** tokens) from miner’s output value (in nanoERGs), and in this example we’re getting 51 ERG reward.

The node has `emission/at` method to get mining reward for block at given height:

`curl -X GET "http://213.239.193.208:9053/emission/at/777400" -H "accept: application/json"`

returns:

```ergoscript
{
  "height": 777400,
  "minerReward": 51000000000,
  "totalCoinsIssued": 56449788000000000,
  "totalRemainCoins": 41290137000000000,
  "reemitted": 12000000000
}
```

If you use the node for payouts, please set

```ergoscript
ergo {
  wallet {
    checkEIP27 = true
  }
}
```

and the wallet will automatically handle re-emission tokens. Otherwise, burn re-emission tokens when you have them in (mining rewards) inputs, and send the same number of nanoERGs to pay-to-reemission contract (it P2S address is `6KxusedL87PBibr1t1f4ggzAyTAmWEPqSpqXbkdoybNwHVw5Nb7cUESBmQw5XK8TyvbQiueyqkR9XMNaUgpWx3jT54p` for the mainnet).

---

### Post #4 — @bigoogawoogla (2022-06-23)

[@kushti](/u/kushti) [@Armeanio](/u/armeanio)

> emission in Ergo is done via a contract (releasing ERGs each block according to a schedule set in the contract)

Is this different that BTC? My understanding is that on Bitcoin mining creates new BTC, rather than releasing BTC from a contract. What is the rationale behind this emission design difference between Bitcoin and Ergo?

I’m writing a community blog post on differences between Ergo and Bitcoin, this looks like a critical design difference…

---

### Post #5 — @Armeanio (2022-06-23)

Afaik a few benefits.

One benefit is avoiding potential inflation bugs.

The other is verifiable proof of no premine via viewing the emission box.

Emission via functional logic, and with eip27 we see the ability to retarget emissions via soft fork.

---

### Post #6 — @kushti (2022-07-25)

Tend to agree with [@Armeanio](/u/armeanio) .

* having emission contract externalized from the code improves its visibility, especially for developers not familiar with Scala (language the reference client built with) , and gives possibility to try to hack the contract to like anyone (who can play with Ergo contracts). This helps to prevent emission bugs (like Ravencoin had)
* it is easier to soft-fork emission. Proposals to soft-fork Bitcoin emission (to prolong it) e.g. from [Bitcoin Optech Newsletter #209 | Bitcoin Optech](https://bitcoinops.org/en/newsletters/2022/07/20/) are much more complex (if possible at all)
* for tokens on top of Ergo, it is pretty easy to use emission contract like the native token has, or modify it to satisfy specific token needs. This provides a prossibility for fair (PoW based) distribution for the token
