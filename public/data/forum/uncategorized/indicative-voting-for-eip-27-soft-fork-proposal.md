---
title: Indicative voting for EIP-27 soft-fork proposal
description: 'ErgoForum discussion: Indicative voting for EIP-27 soft-fork proposal'
tags:
- autolykos
- eip
- emission-schedule
- ergoforum
- ergoscript
- full-node
- native-tokens
- soft-fork
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/indicative-voting-for-eip-27-soft-fork-proposal/3259
created: '2022-01-17'
last_activity: '2022-04-05'
posts_count: 21
views: 3907
likes: 45
glossary_hits:
- Autolykos
- EIP
- Emission schedule
- ErgoScript
- Full node
- Native tokens
- Soft fork
---

# Indicative voting for EIP-27 soft-fork proposal

> **Forum thread:** [https://ergoforum.org/t/indicative-voting-for-eip-27-soft-fork-proposal/3259](https://ergoforum.org/t/indicative-voting-for-eip-27-soft-fork-proposal/3259)
> **Category:** Uncategorized | **Created:** 2022-01-17 | **Posts:** 21 | **Views:** 3907

**Related concepts:** Autolykos, EIP, Emission schedule, ErgoScript, Full node, Native tokens, Soft fork

---

### Post #1 — @kushti (2022-01-17)

Dear Ergo miners!

It seems after the hard-fork no changes in parameters were done, maybe because it was not known to the new generation of miners how to do that. Back in 2019, I provided some instructions on how to change block-related limits (see e.g. [[Voting proposal] Increasing maximum computational cost for block](https://www.ergoforum.org/t/voting-proposal-increasing-maximum-computational-cost-for-block/179) ).

Voting on parameters also was used before for indicative voting on fixing memory-hardness of the Autolykos algorithm, see [[Voting Proposal] Opinion on Memory-Hardness hard-fork](https://www.ergoforum.org/t/voting-proposal-opinion-on-memory-hardness-hard-fork/189) .

Let’s use the same trick to have indicative voting on EIP-27 emission soft-fork proposal ( [EIP-0027: Emission Soft-Fork by kushti · Pull Request #52 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/52) ). So if you support as a miner or a pool EIP-27, please vote also for increasing (non-significantly) computational cost limit per block (from current 7M to 8M). From observing the voting, we will get hashrate support %%.

For that, please put following “voting” section in your configs:

```ergoscript
voting {
    4 = 8000000
  }
```

under “ergo”, e.g.

```ergoscript
ergo {
  node {
    mining = true
  }

  voting {
    4 = 8000000
  }
}
```

---

### Post #2 — @herominers (2022-01-18)

We will follow the decisions of the ERGO miners and community.

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/8/8f1dc41eeb8a4ef5f82bdc02041d4363f2c2054d.png)
[ergo.herominers.com](https://ergo.herominers.com)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/7/7fe009dbbf12350254d48f8e1d23f9b89cc35c0c.png)

### [Ergo ERG Mining Pool - HeroMiners](https://ergo.herominers.com)

Ergo ERG Mining Pool. Features: PPS+ and PROPX Payment System, SOLO Mining, Exchange Wallet Support. Regions: Europe, US, Canada, Asia

---

### Post #3 — @666pool (2022-01-18)

[666pool.com](http://666pool.com) will support this softfork

---

### Post #4 — @mcergs (2022-01-18)

![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/9/915a5fab3a72a021eb97db3917e8970a3ed11490.png)  
did i configure correctly?

---

### Post #5 — @kushti (2022-01-18)

should be just

```ergoscript
ergo {
  node {
    mining = true
  }

  voting {
    4 = 8000000
  }
}
```

along with other settings you might have

---

### Post #6 — @Mason (2022-01-20)

We ordinary miners don’t know how to vote.

---

### Post #7 — @renato (2022-01-20)

I second Mason’s comment

---

### Post #8 — @bigoogawoogla (2022-01-20)

seems like a big issue [@kushti](/u/kushti)

---

### Post #9 — @glasgowm (2022-01-20)

Delegate your hash to GetBlok and use their vote tokens.

---

### Post #10 — @Ergosmergo (2022-01-22)

If you mining in a pool then the pool operator would be able to cast your vote if they really wanted to but I’d imagine most reputable mining pools would remain neutral on the re-emissions proposal but rather provide the miners with the correct tools to vote in a convenient manner. To keep things fair a lot of pools have implemented proof-of-vote that will let traditional pool miners cast their vote from the pool directly rather than needing a full node. Voting should remain as trustless as possible.

---

### Post #11 — @goodmorning911 (2022-02-05)

I’m confused on how to vote (yes or no) on EIP-0027?

---

### Post #13 — @Yikes (2022-02-06)

Hey! Since nobody else answered you, I can let you know what I know.

I asked about this in <https://www.reddit.com/r/erg_miners/comments/sjpl07/voting_is_too_convoluted/>

Basically you need to find out what the different mining pools will vote (by public announcement or similar), and then mine to one of the pools that supports your opinion (yes or no). An overview here: <https://www.reddit.com/r/ergonauts/comments/s6ixer/indicative_voting_for_eip27_softfork_proposal/>

Your hash rate contributes to the collective hash rate of the pool, which is used to strengthen that vote.  
Overly simplified; if one pool votes for “yes” with 3 TH power, and another votes for “no” with 2 TH, the yes vote will win because it has more hash power.

That’s how I understood it at least. Maybe someone can correct me if I’m wrong.

Another way is to use [Getblok.io](http://Getblok.io) 's mining pool to get voting tokens. See how it works with this nice little twitter picture: <https://pbs.twimg.com/media/FJrhx09XsAIehgU?format=jpg&name=small>

---

### Post #14 — @Ergosmergo (2022-02-06)

![](https://avatars.discourse-cdn.com/v4/letter/g/9dc877/48.png)
[Indicative voting for EIP-27 soft-fork proposal](https://www.ergoforum.org/t/indicative-voting-for-eip-27-soft-fork-proposal/3259/9) [Proposals](/c/mining/miner-proposals/25)

> Delegate your hash to GetBlok and use their vote tokens.

<https://www.getblok.io/getblok-proof-of-vote-ergo-eip0027/>

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/c/cabef48b14937b7caeee6e2dd48631674860b57a_2_690x387.jpeg)

image1024×575 104 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/c/cabef48b14937b7caeee6e2dd48631674860b57a.jpeg "image")

If you are mining from a full node you need to change some config in your Ergo full node.

---

### Post #15 — @goodmorning911 (2022-02-07)

Hi, thanks for your response however I’m running a full node and need the actual setting to change in the config file. I guess my mistake for not being clear

---

### Post #16 — @goodmorning911 (2022-02-07)

are you aware of what to change in the config file?  
I see 4 = 8000000 in this thread however isn’t that just related to increasing the memory?  
I don’t see what I need to change in order to vote for EIP-0027

---

### Post #17 — @Ergosmergo (2022-02-07)

From my understanding adding the following code below to your full node config will essentially vote yes and if you don’t change your config you are essentially saying no to the re-emission proposal.

```ergoscript
ergo {
  node {
    mining = true
  }

  voting {
    4 = 8000000
  }
}
```

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/typodapsycho/48/1374_2.png)
[Voting for a soft-fork in Ergo](https://www.ergoforum.org/t/voting-for-a-soft-fork-in-ergo/2958/8) [Research and Development](/c/dev/research-and-development/7)

> From my limited understanding, continuing to run a full node without increasing protocol version number text, like example above is essentially voting no.
> Voting is something that is only possible within node, and there’s no parameter within mining software to change & vote. Meaning you can’t change a line in your Team Red Miner or Trex miner .bat file to vote, you have to be operating a full node.
> And not increasing protocol version while running node, and not running a node at all are not th…

---

### Post #18 — @glasgowm (2022-02-07)

Increasing the memory is used as an indicative way to vote. But unless you are solo mining and finding blocks you should use [GetBlok.io](http://GetBlok.io) to vote.

---

### Post #19 — @Ergosmergo (2022-02-07)

<https://ergo.getblok.io/vote/>

#### Place Your Vote

#### Use your GBGT to help GetBlok decide on the **EIP-0027** Soft-Fork vote!

---

### Post #20 — @sandor (2022-02-09)

Hi, it would be nice to know the consensus of the other mining pools like nano. Do they support this soft fork?

---

### Post #22 — @polkownik (2022-04-02)

So the vote was agains EIP-27 and it not pass, but russians making ergo - puting eip-27 anyway into network… so FOR WHAT WAS THE VOTE?

---

### Post #23 — @glasgowm (2022-04-05)

GetBlok voted within their pool at a 51% Majority. The SF requires a 90% super-majority which all major pools are onboard with. There’s a final epoch of voting before activation. (The previous vote was indicative as stated).
