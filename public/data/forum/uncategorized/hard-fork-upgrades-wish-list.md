---
title: Hard-Fork Upgrades Wish List
description: 'ErgoForum discussion: Hard-Fork Upgrades Wish List'
tags:
- addresses
- box
- collateral
- difficulty-adjustment
- eip
- ergoforum
- ergohack
- full-node
- getblok-plasma
- minimum-transaction-fee
- native-tokens
- registers
- sigmastate-interpreter
- soft-fork
- token-burning
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/hard-fork-upgrades-wish-list/3888
created: '2022-09-21'
last_activity: '2022-09-29'
posts_count: 22
views: 1102
likes: 23
glossary_hits:
- Addresses
- Box
- Collateral
- Difficulty adjustment
- EIP
- ERGOHACK
- Full node
- GetBlok Plasma
- Minimum transaction fee
- Native tokens
- Registers
- Sigmastate interpreter
- Soft fork
- Token burning
---

# Hard-Fork Upgrades Wish List

> **Forum thread:** [https://ergoforum.org/t/hard-fork-upgrades-wish-list/3888](https://ergoforum.org/t/hard-fork-upgrades-wish-list/3888)
> **Category:** Uncategorized | **Created:** 2022-09-21 | **Posts:** 22 | **Views:** 1102

**Related concepts:** Addresses, Box, Collateral, Difficulty adjustment, EIP, ERGOHACK, Full node, GetBlok Plasma, Minimum transaction fee, Native tokens, Registers, Sigmastate interpreter, Soft fork, Token burning

---

### Post #1 — @SteelStrike (2022-09-21)

We all know Hard Forking is a last resort option, but if the time ever comes, which upgrades would you like to see implemented?

This list could also be looked back on periodically to see if there’s enough appeal for a Hard Fork.

---

### Post #2 — @Uziyamada (2022-09-21)

As KK mentioned, it could be a good idea to add Soft Fork updates as well. Is it also possible to draw a more clear line between what requires HF and what doesn’t? Could assist in getting suggestions from a wider audience.

A current HF/SF topic is surely the DAA (difficulty adjustment algorithm). The last week has shown that the current DAA system function is less than optimal, with the difficulty remaining high despite the extreme hashrate spike tapering down fairly rapidly. Looking at the relevant thread on that topic, suggestions avoiding HF and going for SF instead are emerging, I suppose attempting to update via SF should be a key priority?

---

### Post #3 — @TypoDaPsycho (2022-09-21)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/uziyamada/48/1408_2.png) Uziyamada:

> Looking at the relevant thread on that topic, suggestions avoiding HF and going for SF instead are emerging

can you please point me to the thread you’re referring to? I didn’t think that was possible.

Edit: Nevermind lol ![:sweat_smile:](https://emoji.discourse-cdn.com/twitter/sweat_smile.png?v=12 ":sweat_smile:") I found it

---

### Post #4 — @WilfordGrimley (2022-09-21)

I’d like to turn non-outsourceable PoW back on and rely on collateralized smart contract pools in lieu of traditional ones.

I recognize that comes with weaker security assumptions (for those mining to such pools would need to rely on another method to determine their hashrate/shares if they are all mining solo).

I beleive I am in the minorty in wanting this, and know that collateralized smartpools must proce themselves onchain before we consider (needlessley) forking back into non-outsourcability.

---

### Post #5 — @TypoDaPsycho (2022-09-22)

That’s one thing I always appreciate about you, you’ll share your thoughts even if you know you are in the minority.

IMO collateralized pools naturally leads to more centralization because you have to have the funds to be able to participate in mining pool. Even if the collateral cost is something most of us would consider cheap, there’s going to be those that cannot afford it. So, even if it only prevents some small percentage from mining, if that percentage would have mined without the collateral requirement and now they can’t, then that technically hurts decentralization.

By the way, glad to see you posting! Been a while.

---

### Post #6 — @CheeseEnthusiast (2022-09-22)

Interesting dilemma here actually, we can create fully decentralized smart pools that use third party collateral to allow miners with no ERG to participate in the pool.

The catch is that the only way to do this trustlessly is to allow outsourceable puzzles!

---

### Post #7 — @see (2022-09-22)

Remove re emissions contract but keep the modified monetary policy of eip 27.

---

### Post #8 — @ReChanfle (2022-09-23)

Hi, i am what anyone could say, a little miner, from my point of view, if can be implemented in any way, ban the superfarms(up to 1 th/s) they centralices the hashrate and manipulate the price at will.

Best Regards. Love Ergo.

---

### Post #9 — @Francos (2022-09-23)

More Ergo for loyal miners, less ergo for big farms coin hopers

---

### Post #10 — @WilfordGrimley (2022-09-23)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/typodapsycho/48/1374_2.png) TypoDaPsycho:

> IMO collateralized pools naturally leads to more centralization because you have to have the funds to be able to participate in mining pool. Even if the collateral cost is something most of us would consider cheap, there’s going to be those that cannot afford it. So, even if it only prevents some small percentage from mining, if that percentage would have mined without the collateral requirement and now they can’t, then that technically hurts decentralization.

As u/CheeseEnthusiast points out, collateralized pools can utilized third party collateral (i.e. miner takes out a loan on chain from other miners in the pool) This means collateralized pools can bootstrap themselves with more hashrate by incentivizing more miners to join with competitively priced loans.

In addition, nothing prevents miners from solo mining in the scheme I propose. Decentralization can always be increased, and can be incentivized further than it is currently using collateralized pools in this way.

---

### Post #11 — @WilfordGrimley (2022-09-23)

Could we not get around the need for outsourcable puzzles by creating an economic deterrent to cheating?

Miners in the pool must post collateral, or have their rewards garnished until they meet collateral. Different pools can have different risk tolerances: some allowing miners (identified by their addresses or nft keys) to earn a higher percentage of potential rewards while pool mining. The higher the collateral and loyalty to the pool, the higher the rewards.

A pool with a higher tolerance for risk may allow miners to join with no collateral, or give keys away for free to bootstrap hashrate. (The risk being that the miner front-runs the pool and does not pay.)

Pool can vote on their tolerance level using on chain voting, and have it adjusted by smart contract.

---

### Post #12 — @WilfordGrimley (2022-09-23)

Banning high hashrate miners is not healthy for the chain and welcomes double spending attacks.

It would be healthier for the network to create additional economic incentive for small miners that large actors see diminishing returns on.

That would not require a hard fork though, it can be done using smart contracts.

---

### Post #13 — @SteelStrike (2022-09-23)

From Omnia on Discord, ‘add some instruction supporting zk-rollup.’

---

### Post #14 — @CheeseEnthusiast (2022-09-24)

I guess it is a different way of achieving things. I am scared of potentially telling new miners that their rewards will be significantly smaller in the beginning, because I think that will encourage them to use centralized options or other chains instead. And I think that allowing any uncollateralized mining at all is something that will be abused by bad actors.

On the other hand, your idea allows for outsourceablility to be turned off. So it is better in that sense and partially removes the problem of centralized options.

At this point, the question is about weighing benefits and drawbacks of both methods. Also a good questions is whether or not turning off outsourceability has opened pandoras box. Will miners used to this form of pooled mining ever vote to turn it off again?

---

### Post #15 — @TypoDaPsycho (2022-09-26)

* One thing I’d like to see with hard fork, is the DAA to become something that can be altered via soft-fork in future. Either miner votes can adjust parameters, or better yet, miners supermajority can replace DAA totally via soft fork. I have a feeling this is not possible. But, IMO it would be a good idea to explore, with the goal of better future-proofing network and prevention of future hard forks.
* Another Idea is to introduce a CRITICAL function that reduces block number required before activation of foundational changes (forks). This activation period occurs after EIPs have successfully been approved by a supermajority of miners. If, and only *if* the EIP is clearly categorized CRITICAL, either in text body or is designated CRITICAL in title by placing a label in proposal title. Like, EIP-0037-CRITICAL.

Below are the values currently, enforced as system constants, which prompted this suggestion:

> **System constants:**
>
> **Voting epoch length** = `1024` blocks.
>
> **Voting epochs per foundational change** = `32`
>
> **Voting epochs before approved foundational change activation** = `128`

Or instead of introducing an optional CRITICAL designation, each EIP could specify activation details from a small group of preset choices. For instance-

Activation period (# of voting epochs): CRITICAL=16, RAPID=64, STANDARD= 128

The reason is obvious if you calculate the activation period in place. As currently enforced, foundational changes take 131072 blocks to be activated.

With optimal block times, that’s roughly 182 days. With high block times averaging 10 mins, that’s roughly 910 days before activation. After being approved by supermajority (>90%) of miners!

This is concerning when facing emergency situations that need fast resolution. The current DAA situation isn’t the only time the network could face such emergency scenarios in future, and we need to make changes to activation period to better prepare us for those possible scenarios.

Thanks for reading and please share your thoughts in this area.

---

### Post #16 — @MrStahlfelge (2022-09-26)

* Part of tx fee going to the node owner the tx was submitted on the first time
* Changing isDefined on registers [Change semantics of accessing registers · Issue #783 · ScorexFoundation/sigmastate-interpreter · GitHub](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/783)
* Token burning only with explicit opt-in

---

### Post #17 — @WilfordGrimley (2022-09-26)

A more realistic and attainable hard fork than re-enabling non-outsourcability that I would like to champion is partial voting. I intend to formalize an EIP for this change for ErgoHack V.

Enabling partial voting would enable miners to vote for foundational or daily changes, as they can presently, while also allowing them to vote partially in support of them. (85.99% in favor of EIP37 for example)

This would help to maximise miner governance and further decentralize the network. This change will enable pools that gather accurate votes on foundational and daily changes to give voice to their miners with much higher precision than currently possible.

A perfect example of why this would be helpful is the on chain voting that GetBlok held for EIP27:  
In a democratic effort, GetBlok awarded their miners a governance token for most of the time period that indicitive voting was taking place for EIP 27. They designed smart contracts that would allow their miners to vote for our against the change. (This was the greatest effort that any pool made, and it should be applauded.) They also held a poll on Telegram that anyone (hashrate or no) could vote for what percentageof the on chain vote would be required to suppor the change, choices being 50% majority, 60% (or 70?), and 90%. The 90% requirement being truest to the requirements of the chain.  
The 90% requirement did not win, and an amount (albeit small) of censorship took place, as miners who were not in favor of EIP 27 voted with the pool in favour of it.

GetBlok’s effort was the closest to democratic, but was still not true to the democratic values of the base chain: a 90% supermajority. By enabling partial voting, we enable all pools to submit their miners votes directly as they come in, without censorship. One of the largest downsides of outsourcabilty can be made irrelevant.

---

### Post #18 — @TypoDaPsycho (2022-09-27)

I thought about this when voting with getblok governance tokens during eip27 indicative voting period. Didn’t understand why the entire pool was voting with the simple majority ( >50%) of miners on pool. I wasn’t aware that a poll by getblok is what decided that.

One thing to consider (if I’m understanding your idea correctly) is each pool will need to voluntarily participate and implement voting like you describe in your post above.

And traditional mining pools won’t necessarily have subpooling framework in place, right? Means many (vast majority) of Ergo mining pools may lack the technical ability to record and verify each miner’s exact contribution to a block. Most pools only estimate an individual’s valid shares submitted per block, and per block solved.

So if a pool wishes to voluntarily participate in voting like this, that in no way means they have the technical capability to do so.

Unless I’m missing something here.

---

### Post #19 — @TypoDaPsycho (2022-09-27)

![](https://avatars.discourse-cdn.com/v4/letter/w/779978/48.png) WilfordGrimley:

> Enabling partial voting would enable miners to vote for foundational or daily changes, as they can presently, while also allowing them to vote partially in support of them. (85.99% in favor of EIP37 for example)

Should this be worded “would enable *mining pools* to vote for…” ?

Well I guess your original wording is technically correct now that I think about it, since the only true “miners” to the protocol are miners that solve blocks.

---

### Post #20 — @WilfordGrimley (2022-09-27)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/typodapsycho/48/1374_2.png) TypoDaPsycho:

> So if a pool wishes to voluntarily participate in voting like this, that in no way means they have the technical capability to do so.

You are correct of course, but at least with a hardfork passed on the issue, it no longer becomes a matter of the pools not being allowed, just whether or not they are willing.

GetBlok’s stratum, plasma, subpools, and smart contracts are all open source afaik. There is nothing stopping other pools from implementing GetBlok’s framework.

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/typodapsycho/48/1374_2.png) TypoDaPsycho:

> Well I guess your original wording is technically correct now that I think about it, since the only true “miners” to the protocol are miners that solve blocks.

Yeah, actor may be more correct yet. You get my meaning though.

---

### Post #21 — @SteelStrike (2022-09-28)

Would it be possible to implement a Soft-fork system that allows miners to vote on Hard-fork upgrades individually and for the code to stay dormant? Once there’s enough upgrades to warrant a Hard-fork we could vote for one, and if it’s approved, all those upgrades activate along with the Hard-fork.

---

### Post #22 — @TypoDaPsycho (2022-09-29)

not with current set-up I don’t believe, but kushti mentions needing to look at a system that allows voting for multiple upgrades in parallel on [discord here](https://discord.com/channels/668903786361651200/669989266478202917/1024310144718344222)
