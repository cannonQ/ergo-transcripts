---
title: Voting for a soft-fork in Ergo
description: 'ErgoForum discussion: Voting for a soft-fork in Ergo'
tags:
- difficulty-adjustment
- emission-schedule
- ergoforum
- ergoscript
- full-node
- soft-fork
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/voting-for-a-soft-fork-in-ergo/2958
created: '2021-11-17'
last_activity: '2021-12-30'
posts_count: 7
views: 1708
likes: 12
glossary_hits:
- Difficulty adjustment
- Emission schedule
- ErgoScript
- Full node
- Soft fork
---

# Voting for a soft-fork in Ergo

> **Forum thread:** [https://ergoforum.org/t/voting-for-a-soft-fork-in-ergo/2958](https://ergoforum.org/t/voting-for-a-soft-fork-in-ergo/2958)
> **Category:** Uncategorized | **Created:** 2021-11-17 | **Posts:** 7 | **Views:** 1708

**Related concepts:** Difficulty adjustment, Emission schedule, ErgoScript, Full node, Soft fork

---

### Post #1 — @kushti (2021-11-17)

Ergo is being used currently by a lot of exchanges, services, wallets, mining pools, and so on, and there are hundreds of nodes in the network.  
Thus changing the protocol via a hard-fork (when old nodes will stop syncing after a turning point) is painful and often controversial (as agreement from all the community is needed, and it is hard to obtain it usually).

Thus it is usually much less controversial then to do protocol upgrades via soft-forks, when old nodes can process blocks after switching to a new protocol version. Ergo protocol has support for voting for a soft-fork and automatic activation in case of supportive super-majority since mainnet launch. In some cases there can be other ways to perform soft-forks which are more efficient, but usually the in-built soft-forking protocol would be enough.

Every header contains three bytes to store votes. Up to 2 bytes can be used to vote for changing network parameters (such as block size), and vote for soft-fork is also going there. Every parameter to vote on has an identifier, and there is a special identifier for indicating a vote for soft-fork(120).

To start voting, a miner needs to put the identifier at the first block of an epoch. Voting epochs are the same as difficulty readjustment epochs,  
one epoch is about 1,024 blocks.

When the reference client is used by a miner, proper data will be put into headers automatically, what the miner’s node needs is that certain value in the config, but in case of voting for a soft-fork proper config is provided with the client.

Specifically, for the next soft-fork, we need for *ergo.node.protocolVersion* parameter to be set to *3* :

```ergoscript
  ergo{
    chain{
      protocolVersion = 3
     }
  }
```

Then miner will start voting or vote automatically. The value above will be provided with node version 5.+.

The voting for soft-fork lasts for 32 epochs (32,768 blocks ~ 46 days), 90+% support is needed to activate the protocol upgrade.

After voting, there is activation period of 32 epochs (32,768 blocks as well). The block version will be increased after the activation period, and increased block version will be considered during blocks validation.

---

### Post #2 — @Haskell_plus (2021-11-18)

So this is the layout miners need to understand when a proposal for the Ergo Emission retargeting proposal is introduced right? Is there an expected time frame that the emission proposal might come forward?  
I hope it is sooner than later personally as I think it would be good for everyone to have more time to digest and think about the emission retargeting than less time and respond with a knee jerk reaction.

---

### Post #3 — @kushti (2021-11-24)

This is for “5.0” soft-fork as well (which main point is simplified Just-in-Time contracts costing).

The in-built mechanism is similar to Bitcoin’s “isSuperMajority” rule, used to activate soft-forks till 2015. Then they switched to more complicated “version bits” protocol allowing to vote on different proposals in parallel, which is still not finalized AFAIK. Thus in principle soft-forks can be activated in different ways in Ergo as well, but in-build mechanism is usually good I believe,

---

### Post #4 — @Overshrink (2021-11-27)

What will be the ETA for the vote?

---

### Post #5 — @Ergosmergo (2021-12-05)

Like Bitcoin I think Ergo should accept obsolete node client software so that it is always supported on old nodes in the future. I like would like ERGO to avoid hard folks if possible. After a long time user could start up the same full node software and use the Ergo wallet without any upgrades to the full node software. Backwards compatibility will ensure ERGO’s protocol is not coercive. Since Hard folks can force compliance. I think its often better to look into soft folks to fix any issues. The difficulty bomb in Ethereum is a good example of how blockchains can become coercive. Ethereum’s difficulty bomb causes violent force on physical mining property. I wouldn’t like to see the re-emissions schedule compared with Ethereum difficulty bomb. Soft folks can assure the strongest user rights compared with hard folks. Miners should never be beholden to developers. Ergo to follow Bitcoin and levates users above developers and miners.

---

### Post #6 — @Ergosmergo (2021-12-27)

[@kushti](/u/kushti) I have a couple of questions on voting to vote yes on the proposal I understand the parameter should be identifier 3 inside the the config. If I am voting no do I add a parameter for no or simply not add nothing and simply not vote? also is the config added in the full node software or is it added in the config of mining software?.

---

### Post #8 — @TypoDaPsycho (2021-12-30)

From my limited understanding, continuing to run a full node without increasing protocol version number text, like example above is essentially voting no.

Voting is something that is only possible within node, and there’s no parameter within mining software to change & vote. Meaning you can’t change a line in your Team Red Miner or Trex miner .bat file to vote, you have to be operating a full node.

And not increasing protocol version while running node, and not running a node at all are not the same. As passing of proposal requires certain % of nodes to update header to new proposed protocol version #.

Tldr: must be running full node to vote. Making no change to protocol version in header= voting no. Not running a full node= not voting at all.

Edit: The more knowledgeable among us, please correct or add to this in any way possible!

Gabe
