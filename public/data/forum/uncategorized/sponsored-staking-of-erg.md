---
title: Sponsored staking of ERG
description: 'ErgoForum discussion: Sponsored staking of ERG'
tags:
- auction-house
- collateral
- difficulty-adjustment
- ergoforum
- ergopad
- ergoraffle
- native-tokens
- sigmajoin
- sigmausd
- soft-fork
- spectrum
- storage-rent
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/sponsored-staking-of-erg/3945
created: '2022-09-26'
last_activity: '2022-11-08'
posts_count: 16
views: 922
likes: 31
glossary_hits:
- Auction House
- Collateral
- Difficulty adjustment
- ErgoPad
- ErgoRaffle
- Native tokens
- SigmaUSD
- Sigmajoin
- Soft fork
- Spectrum
- Storage rent
- Transaction
---

# Sponsored staking of ERG

> **Forum thread:** [https://ergoforum.org/t/sponsored-staking-of-erg/3945](https://ergoforum.org/t/sponsored-staking-of-erg/3945)
> **Category:** Uncategorized | **Created:** 2022-09-26 | **Posts:** 16 | **Views:** 922

**Related concepts:** Auction House, Collateral, Difficulty adjustment, ErgoPad, ErgoRaffle, Native tokens, SigmaUSD, Sigmajoin, Soft fork, Spectrum, Storage rent, Transaction

---

### Post #1 — @mhs_sam (2022-09-26)

People are frequently asking about staking Erg and earning some Yield.  
By nature, Ergo is a PoW coin and you cannot stake it. On the other hand, people want to yield on their holding and it is a separate thing from securing the network by staking in PoS systems. I mean, if we can provide yield on staked Erg even without gaining any security benefit from staking, it can be attractive to some.

There are several things to consider here:

* This yield should come from somewhere. It’s not a PoS system to subsidize staking for securing the network. And therefore no coin emission for that. Obviously, it needs an external source.
* How much yield is reasonable and viable? It should not be so high and put dapps in danger, and it should be attractive enough for holders to stake. Currently, ADA is providing about a 3% yield for staking and people seem to be happy about staking.
* Staking yield is a reward for staking or a punishment for not staking? that is somehow irrelevant here, but might be good to think about.
* Is staking possible in Ergo? absolutely yes technically. [ergopad.io](http://ergopad.io) is doing it right now for ergo’s native tokens (not Erg itself) and [ProfitSharingDapp](https://github.com/mhssamadani/ErgoProfitSharingDapp) is a general solution to stake/reward any token on ergo (again no support for Erg staking). But, it can be changed to support Erg itself. No technical barrier here.
* The main question is not technical but economic. We can create a staking contract for Erg itself (a modified version of ProfitSharingDapp), but the question is how to provide the yield.

So, let’s discuss the economic options. To simplify things let’s assume that Erg can be staked and there is a ‘Pot’ that holds the yield to be distributed. Anything in this Pot will be distributed to staked holders proportional to their stake. It’s easy to distribute the Pot. The main question is how to fill this ‘Pot’. I can think of two options:

1. the staked Erg is being put to some work and this work generates the yield in the Pot. As of now, I cannot think about a possible option and I think any solution has a risk.
2. Sponsored Pot. We’ll put staked Erg “AT REST” and fully locked without doing anything with it. The yield should come from an external source and be sponsored.

I personally prefer the second option and I can think of a few different sponsorship options:

* We can run one or a few raffles to create and maintain the pot.
* Users can donate to the pot.
* Dapps can dedicate some portion of their profit or tokens to this pot. Note that Erg is staked, but pot can be Erg and different tokens. As an example, ErgoRaffle can send a percentage of its income to this pot.
* New tokens can set aside some tokens for the pot.
* Some liquidity pools can consider allocating some profit to this pot.
* NFT artists can allocate some shares of selling their works.
* Since Auction House v3 is adding several royalty options, one of them can be considered this pot.
* Merch can be sold to support the Pot.

Note that for 1M Erg staked the Pot needs to be at least 20k-30k Erg yearly. I think not a very big deal.  
On the other hand, staking will attract more people and we will have a simple answer to those who ask if Erg can be staked. Also, it locks a lot of Erg and probably has a proper price impact. Consider that in this method of staking, the staking only reduces the available Erg in the market, and unlike PoS the Erg supply is not increased by staking.

It could be a win-win situation for those who stake (earning the yield) and those who sponsor (Erg price appreciation).  
The Yield can be a minimum fixed rate + some unpredictable arbitrary rate.

---

### Post #2 — @Beta (2022-09-26)

Second type is more secure, but i do not think a 2-3% yield is possible. As of now the merch would be the only external source of income. I have no doubt 1.000.000 Erg would come together pretty fast. My idea is to have a mix of the two types. Nobody said that we need to put all erg in the pot to work. 10-15% is a reasonable number, in which we could use 1/3 for stablecoins holdings. 1/3 for yield opportunities and 1/3 for sigrsv. We can use stablecoins to buy erg at a discounted price and use sigrsv to get a yield on ergo.

---

### Post #3 — @Armeanio (2022-09-26)

Personally I think one of the most potentially interesting use case for this type of idea builds on SigmaJoin liquidity.

If mixing becomes out sourceable in a way that easily plugs into Dapps/Wallets and has a fee attached, things could be interesting.

I always approach it from the perspective of use/utility/service.

Getting paid to lock/unlock (stake/unstake) tokens may create some distortions that could potentially be gamed.

Not sure what the use/utility/service is in this sense other than potentially call it a type of network savings/vesting schedule that pulls a revenue stream that has to be built into and supported by multiple aspects of the ecosystem. I guess that would take Dapp ecosystem level participation.

Something i guess we could view that like a small fee or tax. Is it viable, would dapps etc support that… idk. ![:sweat_smile:](https://emoji.discourse-cdn.com/twitter/sweat_smile.png?v=12 ":sweat_smile:")

---

### Post #4 — @Hazey (2022-09-26)

Another possible revenue stream for the ‘pot’ is to allow a DAO of contributors to control the funds. They could vote on proposals similarly to Cardano’s Catalyst, and allocate loans to projects who are building within the ecosystem. The projects will then repay the loan with interest within a certain timeframe.

Trustlessly it is probably impossible to ensure repayment, but with community ownership and vesting of funds into the projects over time, risks could be mitigated.

---

### Post #5 — @CheeseEnthusiast (2022-09-26)

I think earning fees by collateralizing mining pools could be a good way to “synthetically” stake. Third party collateral can be used to help on-board new miners into decentralized mining pools using a fee structure miners are similar to. This ERG in turn helps decentralize the pool and miners on it.

---

### Post #6 — @mhs_sam (2022-09-26)

I agree but how much Erg can be collateralized using this? can it handle say 1-3M $ERG?

---

### Post #7 — @mhs_sam (2022-09-26)

yeah, interesting pov.  
Option 1 is the riskiest and option 2 is the completely risk-free option.  
There could be Option 3.

Option 3. Mixed method. Some locked Ergs can be used in a certain way to add more potential income for the pot. This can be considered as a Fund.

These liquid funds can be controlled by a DAO in different ways:

* Arbitrage in Dex
* Collateralizing mining pools ([@CheeseEnthusiast](/u/cheeseenthusiast)’s idea)
* SigUSD/SigRSV speculation
* Providing liquidity for dapps
* Providing liquidity in Dex
* Lending
* Speculation
* Investment in projects
* other usages

The main point here is that option 2 is zero-risk and option 3 has some risks and potentially more rewards.

We can create different staking pools:

* zero/low/medium/high risk
* fixed-rate/dynamic-rate
* general/mission-specific (that might help with utility [@Armeanio](/u/armeanio))
* short/long time staking

and each user is able to assess/speculate the potential risk/reward of each pool and stake with them.

p.s1. another income for the Pot can be early unstaking penalty.

---

### Post #8 — @CheeseEnthusiast (2022-09-26)

Good question. On an average day, we get 720 blocks of ERG, each at 48 ERG. Lets say the decentralized pool gets on average 100 blocks of ERG per day. It takes 24 hours for a block to mature, so let’s at least ensure that 2.5x the collateral exists to ensure the pool isn’t run dry on accident. So around 250 blocks of ERG should be kept as collateral. At 48 ERG a block, that’s 12000 ERG collateralized in total.

As the pool’s proportion of net hash increases, more block rewards are needed as collateral. As it goes down, less is needed. This also doesn’t take into account rewards from tx fees and storage rent which must also be collaterallized.

So, it can probably add value to ERG and approach the levels of a large LP on spectrum, but unlikely to be a significant form of staking ERG on its own unless all pools end up using such a method.

Something interesting to keep in mind is that collateral requirements go up as the network is used more (due to tx fees) and as storage rent kicks in more heavily. This will be fighting with the steady drop in emissions that will lower collateral requirements.

---

### Post #9 — @Francos (2022-09-26)

Sorry but i don’t like this, Ergo is Pow and should stay Pow only imho.

---

### Post #10 — @mhs_sam (2022-09-26)

We stay PoW, it has nothing to do with changing the consensus model.  
It’s just an application-level idea and a possible Defi application.

---

### Post #11 — @mhs_sam (2022-09-26)

Thanks, great clarification.  
May I say that at most 720 \* 50 \* 2.5 <100k Erg is required if all pools using it?  
(I considered 50 = emission + fee + storagerent as a static value even for the future)  
So, I conclude that about 30k-100k Erg is its potential capacity. right?  
It could fit properly into an Option 3 fund.  
How much is the potential yield here?

---

### Post #12 — @CheeseEnthusiast (2022-09-27)

I think 1-3% is a max yield assuming no additional tokens are given to miners. If additional tokens are added, it gets complicated quickly. These loans as I imagine them should be quite safe (withdrawable at any time, and paid back to lenders using the coinbase transaction so quite safe under normal assumptions).

With that in mind, I think a low yield makes sense for this. Miners are unlikely to be willing to give up more than that anyway.

---

### Post #13 — @WilfordGrimley (2022-09-27)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/mhs_sam/48/292_2.png) mhs\_sam:

> The main question is how to fill this ‘Pot’. I can think of two options:
>
> 1. the staked Erg is being put to some work and this work generates the yield in the Pot. As of now, I cannot think about a possible option and I think any solution has a risk.
> 2. Sponsored Pot. We’ll put staked Erg “AT REST” and fully locked without doing anything with it. The yield should come from an external source and be sponsored.

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/mhs_sam/48/292_2.png) mhs\_sam:

> So, I conclude that about 30k-100k Erg is its potential capacity. right?  
> It could fit properly into an Option 3 fund.

![](https://avatars.discourse-cdn.com/v4/letter/c/3e96dc/48.png) CheeseEnthusiast:

> So, it can probably add value to ERG and approach the levels of a large LP on spectrum, but unlikely to be a significant form of staking ERG on its own unless all pools end up using such a method.

It is possible that these collateral pools have a saturation target ratio between it’s live collateral and the current network difficulty. Should the pool’s collateral to network difficulty ratio rise above a threshold (we define this as our target saturation), the pool will automatically donate a percentage of it’s yield to a new collateral pool, or another collateral pool following the same guidelines but with a lower ratio (less saturated).

This allows collateral pools to act as both type 1, and type 2 ‘pots’, while simultaneously acting as a decentralising force, as there is a light disincentive for any one collateral pool to become over saturated.

My team touched on the concept of saturated collateralized smartpools in [this paper](https://eprint.iacr.org/2021/846). I think the biggest red herring from that paper is the hashrate oracle idea, as it weakens the security assumptions. The rest of the concepts can still safely be applied to collateralized pools.

---

### Post #14 — @mhs_sam (2022-11-03)

Based on the discussions, here is [ErgoWell](https://github.com/mhssamadani/ergowell). It’s a try to implement an instance for Option 3.

> ErgoWell is a project meant to be used for investing in ventures trying to raise money through crowdfunding. As an investor, you can search and find attractive projects, invest in them, and receive interest and rewards. As a venture owner, you can raise money for your project through crowdfunding.

As an example, someone can create a staking pool of 100K Erg (or any token) that provides 3% APY to its stakers. He configures the pool to be locked by 70% meaning that 70K Erg will be locked and 30K Erg will be sent to the pool creator. He should lock 2K Erg in the yield pot to be distributed to the stakers and he can lock some tokens (NFTs, Wrapped bitcoin, SigUSD, SigRSV, etc) in the collateral pot.

The tokens in the yield pot will be distributed to stakers in a monthly manner. At the end of the specified period, the pool creator must return at least 30k erg and if not, the collateral will be seized and distributed between stakers (manually with the help of ErgoWell’s DAO). He also can deposit more than 30k Erg to cover his liability and also provide additional yield for stakers.

As another example, someone can create a 100% locked pool that locks 100k Erg and provides a 2% APY of Erg or other tokens without any collateral.

Each pool will be activated if the funds are raised enough or will be refunded if not reach the staking goal in a specified period of time.

**ErgoWell is open for discussion, modification, and improvement. The structure of contracts is provided but not implemented. So, it would be open for anyone to catch the idea and implement the final dapp.**

---

### Post #15 — @WilfordGrimley (2022-11-06)

These contracts are going to be amazing for collateralized mining pools.

When combined with the subpooling framework we will be able to design many different models of decentralized mining pools.

Awesome awesome work!

---

### Post #16 — @pipo123 (2022-11-08)

Unless im missing something I think its a great idea that tx fees funds the staking. Wouldnt change block rewards, and as the network usage increases it would keep Erg locked and maybe done with just a softfork. It doesnt seem too complicated to implement.
