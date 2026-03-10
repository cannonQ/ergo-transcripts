---
title: Diff Adjustment (Potential Design/Tradeoffs)
description: 'ErgoForum discussion: Diff Adjustment (Potential Design/Tradeoffs)'
tags:
- addresses
- box
- difficulty-adjustment
- eip
- emission-schedule
- ergo-explorer
- ergoforum
- ergoscript-context
- full-node
- liquidation
- native-tokens
- nipopow
- sigmaspace
- soft-fork
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/diff-adjustment-potential-design-tradeoffs/3875
created: '2022-09-20'
last_activity: '2022-10-05'
posts_count: 58
views: 5611
likes: 113
glossary_hits:
- Addresses
- Box
- Difficulty adjustment
- EIP
- Emission schedule
- Ergo Explorer
- ErgoScript context
- Full node
- Liquidation
- Native tokens
- NiPoPoW
- Sigmaspace
- Soft fork
- Transaction
---

# Diff Adjustment (Potential Design/Tradeoffs)

> **Forum thread:** [https://ergoforum.org/t/diff-adjustment-potential-design-tradeoffs/3875](https://ergoforum.org/t/diff-adjustment-potential-design-tradeoffs/3875)
> **Category:** Uncategorized | **Created:** 2022-09-20 | **Posts:** 58 | **Views:** 5611

**Related concepts:** Addresses, Box, Difficulty adjustment, EIP, Emission schedule, Ergo Explorer, ErgoScript context, Full node, Liquidation, Native tokens, NiPoPoW, Sigmaspace, Soft fork, Transaction

---

### Post #1 — @Armeanio (2022-09-20)

This is a thread to start a community discussion. Also potentially education about diff adjustments in general.

---

### Post #2 — @TypoDaPsycho (2022-09-20)

I’d like to hear the opinion from someone knowledgeable on ASERT Difficulty Adjustment Algorithm (aserti3-2d), which was implemented by BCH after major issues with their previous DAA.

This is original proposal I believe, includes a lot of commentary and tests against other DAAs:

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/7/7d6021371be8c4eb23c37483e6390ac982c733ef.png)
[read.cash](https://read.cash/@jtoomim/bch-upgrade-proposal-use-asert-as-the-new-daa-1d875696)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/3/3285fcf4d991038029e5e18c498a8ba788b74ea1_2_690x325.png)

### [BCH upgrade proposal: Use ASERT as the new DAA](https://read.cash/@jtoomim/bch-upgrade-proposal-use-asert-as-the-new-daa-1d875696)

Abstract The current BCH difficulty adjustment algorithm (DAA) allows for a switch miner to extract a large amount of profit from constant-hashrate miners. This strongly discourages constant-hashrate...

Further info:

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/c/cce98ee681797cb0735ac139c3b2831e2997ee2f.png)
[GiveLotus](https://docs.givelotus.org/specs/difficulty-adjustment/#rationale-and-commentary-on-requirements--design-decisions)

### [Lotus - The Token of Appreciation](https://docs.givelotus.org/specs/difficulty-adjustment/#rationale-and-commentary-on-requirements--design-decisions)

Home of Lotus Documentation

To be clear, I’m not convinced Ergo’s DAA is worth a hardfork. These links show how complex implementing such a choice would be.

---

### Post #3 — @Vertergo (2022-09-20)

Adjust difficulty based on average block times between “super blocks.” I was reading up on NiPoPoWs and it made me think of this idea. This would randomize when difficulty adjustments occur. Difficulty adjustments would happen more quickly when hash rates spike as it will be more likely to hit a “super block”. When things slow down, it’ll take more time to decrease block times. Similar to how things are now, but would adjust more quickly and with added randomness which will prevent gaming the system. Thoughts?

---

### Post #4 — @TypoDaPsycho (2022-09-20)

![](https://avatars.discourse-cdn.com/v4/letter/v/a87d85/48.png) Vertergo:

> down

Superblocks happen too infrequently, if difficulty is adjusted high (like current situation) this would greatly lengthen the time before it’s adjusted back down.

Add that to the fact that block times can end up multiples higher than target (like in current situation) and you’d only be making a bad situation worse.

---

### Post #5 — @Lsji07 (2022-09-20)

Could use dark gravity wave.

---

### Post #6 — @Vertergo (2022-09-20)

There are different types of “super blocks” of varying frequency.  
Extract from, <https://eprint.iacr.org/2019/1444.pdf>, “We measured the superblock distribution in the mainnet Bitcoin blockchain. Our results are illustrated in Figure 1. As expected, half the blockchain blocks are 1-superblocks, 1/4 of blocks are 2-superblocks and generally approximately 2^−µ of the blockchain blocks are µ-superblocks.”

So we could potentially use a type 4-superblock (every 16 blocks on average) or something that occurs more or less frequently but at random.

---

### Post #7 — @TypoDaPsycho (2022-09-20)

Hmmmm, interesting idea. Thanks for the follow up!

---

### Post #8 — @Vertergo (2022-09-20)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/lsji07/48/1406_2.png) Lsji07:

> dark gravity wave

I’m not sure why, but I think Kushti is against difficulty retargeting every block. If we understood his reasoning, it could help generate ideas.

---

### Post #9 — @Lsji07 (2022-09-20)

![:+1:](https://emoji.discourse-cdn.com/twitter/+1.png?v=12 ":+1:")

Honestly with the amount of gpu hash floating around after the merge it makes sense to have the difficulty adjust based on the most recent previous blocks.

Miners will be swapping to the most profitable algo no doubt.

A large enough sample of blocks is need imo to slow the rate of change down based on recent blocktimes to the desired average.

After all that is what is desired. A stable regular block interval of 2 mins.

Hence my suggestion of dark gravity wave with a look back at the previous say 100 blocks, or 200 mins, and that will adjust the difficulty up or down as needed. The difficulty adjustment period can of course be adjusted to whatever parameters are preferred.

Ravencoin adopted DGW with a 180 block look behind early on in their lifecycle when it became gpu mineable and profit algos the miners use were causing the rvn network difficulty spikes. I know. I was there for it.

Their difficulty and hash follow each other pretty nicely now. Just offering suggestions.

Be interested to know why block difficulty targeting is not on the table as well technically. ![:pray:](https://emoji.discourse-cdn.com/twitter/pray.png?v=12 ":pray:")

---

### Post #10 — @JayDee12Thr33 (2022-09-20)

Would it be possible to have a softfork that sends a percentage of the block rewards to a box when block time is under a certain threshold? The box empties again during slower blocks. It would help smooth out the overpayment of erg in the first part of a sudden extreme hashrate spike and save some for later to help keeping miners to stick around. My guess would be that something like that would be doable by softfork since the diff adjustment itself remains untouched.

---

### Post #11 — @WilfordGrimley (2022-09-20)

This is similar to my thinking, but we don’t require any forks, just smartpools.

We can create smartpools that include a slush fund that pays out to miners when a sharp and sustained increase in difficulty is detected on the network.

The slush fund can be funded both or either by a constant fee on the mining pool, say 2-3% additional to dev fee; and by an opposite rule when the difficulty drops quickly (Say 20-50% of the block reward.)

This combined with a PPLNS reward model ( or at least one that can track loyalty over a long period of time, pre difficulty increase) will enable miners to see smoother rewards as the difficulty rises and falls WITHOUT decreasing the security of the network or removing voting power from miners.

---

### Post #12 — @Vertergo (2022-09-20)

Yes and the smart pool would have to track each miner as the extra rewards given during longer blocktimes should only be given to those miners that contributed during the shorter block time periods.

The above being said, I don’t think such a pool will attract miners as there is a lot more to gain by just hopping on when difficulty is low and hopping off after a large difficulty increase; either to save electricity or to mine something else.

---

### Post #13 — @WilfordGrimley (2022-09-20)

Such a pool would attract loyal miners, the ones with a long term focus that are not chasing short term profits but the ethos of the Ergo Manifesto.

---

### Post #14 — @Vertergo (2022-09-21)

I think this could potentially work, just need to figure out what percentage (fixed or variable) and how to apply it. A potential problem I forsee with this is that it may force constant or near-constant difficulty, which wouldn’t necessarily be a good thing as it would facilitate 51% attacks.

Variable: Percentage determined by “distance” from the ideal 120 second block time. Example: If hashrate increases and block times decrease by 12 seconds adjust reward being sent to box by 10% (if 48 ERG mining reward, send 4.8 erg to re-distribution box). If hashrate decreases and block times increase by 12 seconds then pay out from box to increase rewards by 10% (if 48 ERG mining reward, send additional 4.8 ERG).

This would essentially remove any incentive for the additional hashrate… which would keep difficulty constant. It would facilitate 51% attack.

Fixed: Probably better than variable but what thresholds would be used? Example: If block times less than 100 seconds send 10% of reward to re-distribution box. If block times greater than 140 seconds, pay out extra 10% from re-distribution box. This could dampen/partially mitigate the problem but would not resolve it. Once the re-distribution box is empty then what?

---

### Post #15 — @WilfordGrimley (2022-09-21)

![](https://avatars.discourse-cdn.com/v4/letter/v/a87d85/48.png) Vertergo:

> Fixed: Probably better than variable but what thresholds would be used? Example: If block times less than 100 seconds send 10% of reward to re-distribution box. If block times greater than 140 seconds, pay out extra 10% from re-distribution box. This could dampen/partially mitigate the problem but would not resolve it. Once the re-distribution box is empty then what?

A redistribution box need not ever empty, it could award miners a percentage of it’s remaining ERG. Mining pools can charge a higher fee when block time is lower than target (on a scale as you suggest in the variable example) and the repay it to those original miners when block time is higher than target.

![](https://avatars.discourse-cdn.com/v4/letter/v/a87d85/48.png) Vertergo:

> This would essentially remove any incentive for the additional hashrate… which would keep difficulty constant. It would facilitate 51% attack.

In a zero sum situation where every miner pool hops, and coin hops, sure. The loyal miners that mine to secure the network, the ones mining now, the ones that can afford to mine and hold; those miners will always have incentive to increase their hash rate provided they can afford their electricity.

If we kick the can with a 2nd global remission contract including a variable or fixed tax as you describe, we risk miner transaction censorship and another potential hard fork as we did during EIP 27.

If we avoid soft forks and stick to voluntary smart contract mining pools, miners can choose their risk based on any combination of your variable and fixed solutions with numbers tweaked to fit their needs.

By keeping things voluntary, miners that want to coin hop for the quickest short term profit as Ergo’s difficulty rises and falls are not disincentivized, and miners that stay loyal to Ergo can see smoother rewards should they choose to participate in a pool offering such a scheme.

If something like this is implemented and the long haul miners migrate over to pools offering smooth rewards, there will still exist profit for coin-hoppers to play around our long difficulty adjustment time until such time that Ergo represents a majority of potential hashrate in the world.

There will always be incentive to increase hashrate/ secure the network for long term holders of a fixed supply asset.

---

### Post #16 — @Vertergo (2022-09-21)

![](https://avatars.discourse-cdn.com/v4/letter/w/779978/48.png) WilfordGrimley:

> A redistribution box need not ever empty, it could award miners a percentage of it’s remaining ERG. Mining pools can charge a higher fee when block time is lower than target (on a scale as you suggest in the variable example) and the repay it to those original miners when block time is higher than target.

True, but it can approach 0, which would essentially be the same as being empty; diminishing rewards with time.

---

### Post #17 — @WilfordGrimley (2022-09-21)

Diminishing returns from a fixed supply is a very common distribution model in crypto. Bitcoin does it, and Ergo recently adopted it with EIP 27.

The existing difficulty adjustment formula should protect such an emission box from being emptied as long as it is funded by a percentage of every block reward, but I agree that a combination of fixed and variable would be ideal.

---

### Post #18 — @run4usdx (2022-09-21)

can you give more design detail on this idea? seems intersting and maybe useful. randomness+periodical=better solution, I think

---

### Post #19 — @CheeseEnthusiast (2022-09-21)

Re-adjustment using super-blocks is NOT safe. The NiPoPoW paper explains ways that an adversary can easily mess with the distribution of super-blocks while still controlling less than 50% of the hashrate. The distribution of super-blocks is only guaranteed under the assumption that all miners are honest. The NiPoPoW paper explains ways to mitigate this effect in the context of proofs, but such techniques would not work in regards to difficulty adjustment.

Smart Pool based diff relief does sound interesting, I will look over some of the ideas posted here and give my own feedback in regards to this after some thought.

---

### Post #20 — @Uziyamada (2022-09-21)

The redistribution box system seems like an interesting option, also avoiding HF?

What about the current system? Why was it chosen, how was it tested, what are the key pros? How do the key pros rank in evaluation, like the list mentioned in the conclusion of the BCH DAA article? How about the key cons & evaluation? Regarding the BCH DAA article, DAA system simulation with existing data (especially now with the Merge event last week) seems essential to evaluate how any proposed system change behaves in real-life stress tests.

Sorry for mostly asking questions, just scratching the surface of the topic today.

---

### Post #21 — @TypoDaPsycho (2022-09-21)

[eprint.iacr.org](https://eprint.iacr.org/2017/731.pdf)

### [731.pdf](https://eprint.iacr.org/2017/731.pdf)

325.96 KB

That’s the paper by Ergo devs describing the reason behind DAA choice. I agree with you on that last point, I really think we need to utilize the tons of research and testing done by BCH on this matter (along with any others that can help), and then test test test before all else.

The soft fork options from what I’ve seen so far are FAR from simple, personally rather HF and address any other changes we seek while doing so, than SF following complex and unproven method to change DAA.

---

### Post #22 — @glasgowm (2022-09-21)

Second thread here

Hard-Fork Upgrades Wish List

![](https://avatars.discourse-cdn.com/v4/letter/s/35a633/48.png)
[Hard-Fork Upgrades Wish List](https://www.ergoforum.org/t/hard-fork-upgrades-wish-list/3888) [Ecosystem Development](/c/dev/ecosystem-development/9)

> We all know Hard Forking is a last resort option, but if the time ever comes, which upgrades would you like to see implemented?
> This list could also be looked back on periodically to see if there’s enough appeal for a Hard Fork.

Summary thread (pre-community discussion):

[twitter.com](https://twitter.com/AGlasgow12/status/1572221760711585792)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/b/b5636105872d0f90e653d7568c230f473ba64032.jpeg)

#### [Glasgow](https://twitter.com/AGlasgow12/status/1572221760711585792)

[@ERG\_Glasgow](https://twitter.com/AGlasgow12/status/1572221760711585792)

🧵 A thread for the [#mERGe](https://twitter.com/search?q=%23mERGe)
As ETH mining vanished into the ether, Ergo hash went 10x before the difficulty started to kick in. We've seen a huge influx of new [#ergonauts](https://twitter.com/search?q=%23ergonauts) across socials, and I'm sure many will stick around. Equally, many miners are unhappy with low rewards.

[1:50 PM - 20 Sep 2022](https://twitter.com/AGlasgow12/status/1572221760711585792)

170

48

[Article from Armeanio - Ergo Post Merge Community Discussion: Difficulty Adjustment](https://curiaregiscrypto.medium.com/ergo-post-merge-community-discussion-difficulty-adjustment-f41e7dc972d7)

Community discussion from yesterday

* [Telegram](https://t.me/ergoplatform/318432)
* [Discord](https://discord.com/channels/668903786361651200/668903786902847502/1021828463864332289)

---

### Post #23 — @Vertergo (2022-09-21)

I’ll have to read into how adversaries can mess with the distribution of super-blocks and whether there is any incentive to do so with regards to adjusting difficulty.

---

### Post #24 — @augustov (2022-09-21)

Hello guys. Isn’t there a reason why the dampening of the difficulty downwards time can’t be made shorter?

My take is that from this event we can observe due to the delay in diff adjustment (down) a sudden drop down in hashrate creates (1) longer block times which creates (2) less profitability for miners that (3) causes more miners to leave which (4) drops the hashrate even more.

I understand the design according to the paper is to prevent coin hopping attacks, but the current event is less desirable.

What is the downside of reducing the adjustment time?

---

### Post #25 — @Uziyamada (2022-09-21)

Reading the paper “Revisiting Difficulty Control for Blockchain Systems” gave some sense to the reasons why the current DAA was chosen. With the delayed difficulty adjustment, hopping between coins makes less sense. However, as augustov above mentioned, reducing the difficulty is very slow, as block time and difficulty adjustment time are related in a linear way. This also means that if the difficulty falls too low, it should be quick to pick up, as seen lately.

My question is; is it possible / detrimental to detach difficulty adjustment (reduction) time from block time? For example, use the target block time instead of current block time? Is there a benefit to keeping this attachment? Naturally it’s only a part of the solution, but this would surely help; the next difficulty adjustment wouldn’t be so far away in the current situation.

---

### Post #26 — @Zimulakra (2022-09-21)

Is it possible/beneficial to have an additional difficulty temporarily added for new miners when the block times are faster than normal?

---

### Post #27 — @WilfordGrimley (2022-09-21)

That would be against the manifesto’s commitment to avoid censorship imo.

---

### Post #28 — @Marlberg (2022-09-21)

Is it possible to vary the block reward on the fly? We could leave the difficulty per epoch moving average as it is and drop the block reward by x amount during a spike in hashrate of y and increase the block reward by x amount when the hashrate drops below some target amount y. A large farm or pool entering the network spikes the hashrate block reward drops by from 10% to up to 90% once the spike is detected. Same end result except that now the short term profitability prediction wont be accurate enough for large farmers that coin hop to rely on to know when to jump in unless they were in for the long term

---

### Post #29 — @kushti (2022-09-21)

Security analysis (for both NiPoPoWs and classic blockchain security properties from GKL15) would be complicated in this case, if doable at all

---

### Post #30 — @kushti (2022-09-21)

I made some modelling and it seems making epoch length shorter just would make difficulty more bumpy. I am looking into smoothing it something like following:

1. Calculate least square method based difficulty as it is done now
2. Made simple diff readjustment as done in Bitcoin
3. Calculate average

For most of epochs results are similar (difference with current algo is within 10%), but during turbulent times (after HF and now) this method is catching up with reality at a faster pace.

For epoch length, I guess, 128 blocks is the safest option from short ones.

---

### Post #31 — @MPrintem.HashCartel (2022-09-22)

My main thing as a small miner is not profitability. The mining community has, for a long while, known that we would enter this mining profitability wasteland post-merge. As such the concerns and suggestions I mention are not coming from a place of delusion, believing that even if the network hardforked, we’d still be unprofitable/barely profitable for the foreseeable future (1 year+ or until the macro outlook reverses course)

So my desire to have something to done regarding the current difficulty adjustment mechanics stems from my being someone who wants to see Ergo win and also invests (DCA) in Ergo beyond the simple $ERG denominated revenue my 6 card rig generates.

As it stands, the GPU mining landscape is much akin to a John Carpenter-esque, PvE, dystopian jungle. The degree to which the PvE raider mining practices occur increases proportionate to the $$$ amount of overhead any one mining actor has to sustain.

I mention this, because I have seen several tweets conveying a message effectively saying: “Don’t worry, this is the first week, give it time, it’ll sort itself out.”

I think anyone holding this perspective doesn’t fully appreciate the degree to which the GPU mining economy has been destabilized by Ethereum’s transition to PoS.

Mining is now a wholly nomadic enterprise and should continue to be so for the next few years when factoring current macro conditions, with the reality of the long road that faces any PoW L1 chain seeking to build an economy of Ethereum’s magnitude, constituent popularity, developer ecosystem and associated coin/token value.

Understanding that this is the state of GPU mining, that even if actors want to exit the game, there are few eager to buy the hardware that the myriad operations of varying scale may before long seek to liquidate, that there is no “ol’ reliable” to fall back on to keep the lights on anymore, entails that any difficulty adjustment mechanics that *can* be gamed to the benefit of a few miners, *will* be gamed, health of the network be-damned. Vampirism and self-preservation are running the show.

The problem with Ergo’s current difficulty adjustment mechanics is that which it is quick to increase difficulty, it is slow to decrease it.

What we just days ago was the network inundated with hashrate, the difficulty skyrocketed (as it should) rapidly due the significantly decreased block times accelerating the network’s march to the next epoch. Then, once the difficulty had adjusted to never before seen levels, a mass exodus of hashrate began as the network profitability plummeted.

The problem the remaining Ergo miners were left with was that our relief, the next difficulty adjustment, would be slow to come as the checkpoints for difficulty adjustment are governed by a naked block count not factoring for passage of time in the real world. When the hashrate exodus occurred after the difficulty spike, with difficulty so high and hashrate gutted, block times increased significantly.

I would very much like to see more dynamic difficulty adjustment mechanics explored, mechanics that by whatever suitable means, account for avg block times and increase or decrease the # of blocks to next diff adjustment accordingly with a target average blocktime being used to guide the development of the rule set.

Profitability is a lost cause. What I care about is the stability of the Ergo network both from a security standpoint and an end user UX perspective. What kind of UX is being delivered if the network is only fast one day a week and reliably sluggish the other 6 days until we adjust back down; rinse and repeat. When somebody buys a piece of this network in the form of $ERG, is this what they want to hold?

Fortunately, we saw no issues from this initial hashrate cycle surrounding blocktimes being too fast, but it is a technical possibility.

Again, my desire here is to mature and harden the network, to enhance its resilience where possible. For me this is all about design optimization. Good enough is good enough until it isn’t. This instance shined a light on something that, without such novel circumstances, may never have been discussed. I say we take this opportunity to fully explore the potential benefit to the network of entertaining alternative difficulty adjustment mechanics in earnest.

Lastly, maybe the chain hopping dies off soon. However, I am very dubious. There are few serious GPU Mineable projects in the market lineup and there will continue to be *plenty* of attention on Ergo in the years ahead. As currently, it is exceptionally easy to monitor and time the next difficulty adjustment to exploit as the block times between are at a crawl. A more dynamic adjustment mechanic would mean that actors would have to expend more time and effort trying to time and game the difficulty producing an increasingly diminishing return on investment for mercenary miners the more effectively dynamic the adjustment mechanism selected is.

Regards,

MintemPrintem.HashCartel

---

### Post #32 — @WilfordGrimley (2022-09-22)

Would a hard fork be required, or could voluntary mining contracts of constant hashrate (hashrate present pre and post merge) be enough to get close to 10% without an autoritative change?

---

### Post #33 — @Uziyamada (2022-09-22)

Thanks a lot for this!

Is it possible to see how different epoch lengths would play on the current situation, for example last week? To see the bumpiness, adjustment time etc. If you have the models, of course. Thanks again!

---

### Post #34 — @morphic (2022-09-22)

A hybrid algorithm which leaves the current formula unchanged, but makes the curve more symmetric.

![](https://avatars.discourse-cdn.com/v4/letter/m/48db29/48.png)
[Difficulty adjustment at regular time intervals](https://www.ergoforum.org/t/difficulty-adjustment-at-regular-time-intervals/3907) [Research and Development](/c/dev/research-and-development/7)

> One observation about diff adjustment.
> The main issue with the current diff adjustment is its asymmetry and not the algorithm (or specific formula).
> It quickly adjusts to hash rate increase, but it is disproportionately long to adjust when miners leave. This is because the moment of recalculation depend on block number and the more miners leave, the longer we have to wait.
> This creates strong incentive to jump in after Diff goes down and jump out after it gets high.
> As long as we have the ma…

---

### Post #36 — @Francos (2022-09-22)

Really great post. I wish the same things as you.

Right now, the system rewards the big miners, and punish the home miners who love and support the network. I think this is not fair, feels like to do the hard part of the job for rich people.

---

### Post #37 — @kushti (2022-09-22)

It is hard to simulate shorter epochs, as we do not have blockchain data for points between every 1024 blocks. So I used 1024 blocks long epoch and compared with what we do have with the current algo.

I published some modelling code in [Diff modelling by kushti · Pull Request #1842 · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/pull/1842) , the code is garbage though, and you need to have a local blockchain db to work it,

I also discovered that epoch length was 256 initially, but then was changed to 1024, likely as initially it was the same setting for difficulty and voting epoch, then the setting split into two but the diff epoch value remained intact.

---

### Post #38 — @kushti (2022-09-22)

Hard fork is required.

---

### Post #39 — @kushti (2022-09-22)

Rewarding is done via a smart contract, so it would hard to change anything there.

---

### Post #40 — @Uziyamada (2022-09-23)

Aha yes of course, thanks for the clarification.

---

### Post #41 — @Francos (2022-09-23)

I had an idea, ofc i don’t know if it’s possible to do it, but… typing it’s free so…

Leave everything like now, but with one modify, If block time > 4 min, run again a difficulty check  
if block time < 40 sec, run again difficulty check.

The fact is, i don’t know if we can change difficulty and do a difficulty check in the middle of the epoch ![:open_mouth:](https://emoji.discourse-cdn.com/twitter/open_mouth.png?v=12 ":open_mouth:")

Sry if i said somentingh totally wrong, i’m new here ![:open_mouth:](https://emoji.discourse-cdn.com/twitter/open_mouth.png?v=12 ":open_mouth:") The fact is the epoch drifted one day and a half, in less than one day… we don’t have much time unlickely…

---

### Post #42 — @Flying_Pig (2022-09-23)

I’m not a mathmetician and there are people on here that are infinitly more clever than I am but I’ll give it a go…

Could the difficulty logic be amended to use a flexible number of blocks if block time goes above a certain time?

Target the block time to 2 minutes as today and have the epoch length at 1024.

BUT, if block time is more than >4 minutes the difficulty epoch length changes…

If block time is >4 minutes last 1024 blocks then new difficuty wil be calculated every 720 blocks  
If block time is >8 minutes last 720 blocks then difficulty will be calculated every 360 blocks  
If block time is >16 minute last 360 blocks then difficulty will be calculated every 160 blocks  
And so on…I’m sure there’s even a formula that could be used to make the change even smoother than set times or # of blocks.

IF we get a sudden spike of hashrate the blocktime pain should be a lot less. Of course, it won’t prevent coin hopping, but people will do that regardless.

I’m sure this proposal has some flaws, but i throw my hat into the mix ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=12 ":slight_smile:")

---

### Post #43 — @Francos (2022-09-23)

it’s + - what i said 3 hours ago lol

---

### Post #44 — @Flying_Pig (2022-09-23)

I read yours but I understood that to rerun the difficulty check at the point it’s more than 4 minutes, e.g. cap it at 4 minutes.

I was thinking more a scaled approach which alters the difficulty epoch length based on the block time for the last X (variable) blocks.

---

### Post #45 — @Crypto_1D.10.T (2022-09-23)

Pretty new and dont know many proper mining terms etc here so take it easy on me.  
Can the Ergo devs not do something like ScaleHashing?  
New word definition, yes i just made it up.  
Maybe theres something like this out there already but heres what i was thinking.

Example:  
Implement an average hash limit increase for all individual miners of say… 500MH per 24 hr period. Could keep track via ip or addresses or accounts or something.  
So, for any huge mining operations, they can only add 500MH to the network, would have to wait 24hr until they could add another maximum of 500MH to the network.  
So itd be harder or hopefully impossible for any mining op to slap 40 GH or whatever on the network and jump off the same day.

Im crap at explaining, but i hope people understand.  
Would something like this be viable and effective in preventing or at the very least extremely reducing the current issue ERG is facing?  
Does something like this exist?  
Would this negatively impact erg supporters in anyways?

I dont know, any constructive criticism is welcome.  
Just a random lunch break thought i had.

Keep on Keepin’ on.

---

### Post #46 — @Mfminer (2022-09-23)

How about making ergo a multi algo blockchain? We have a GPU algo, but why not also have CPUs secure the network?

Pros:  
Big gpu farms wont be able to manipulate.  
For times like now, blocks found on cpus will move the epoch forward without impacting gpu mining difficulty.  
since the daa is epoch based, it shouldnt matter if blocks are found on gpus or cpus.  
DAA wouldnt need to change.  
Will give the cpu mining crowd exposure to ergo and all it has to offer.

Cons:  
Crypto jackers can take advantage of the new algo on vps potentially.  
Some portion of rewards (half?) would be taken from gpu miners.  
Would require a hard fork.

Overall i think pros outweigh the cons but im no expert and i could be dead wrong on this. What does everyone think? Did i miss any pros/cons?

---

### Post #47 — @Francos (2022-09-23)

[![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/e/eb948494557044f80b41f291a3623bee90b061c5.jpeg "ERGO EIP-37")](https://www.youtube.com/watch?v=n0DC3_NBfuw)

This seems the right direction to me^^

---

### Post #48 — @Glitch01 (2022-09-23)

Problem I’ve seen with cpu miners, they tend to flock to one pool & you end up having over 50% hash rate on a single pool.

---

### Post #49 — @bigoogawoogla (2022-09-24)

Hm, this gives me socialist vibes.

---

### Post #50 — @bigoogawoogla (2022-09-24)

Does adjusting difficulty more frequently open us up to malicious network interference?

---

### Post #51 — @TypoDaPsycho (2022-09-24)

Mining is unrestricted & permissionless with Ergo on vast majority/possibly all of the Ergo mining pools.

Meaning miners don’t have to create an account for mining pool participation, no KYC requirements, and IP addresses can easily be routed and changed through VPN proxy.

This idea would require pools developer a way to label/authenticate, and track individual miners. I know IP tracking is used to change payout thresholds on many pools, but IP addresses can be easily changed/rerouted (VPN) or camouflaged (Tor), both of which are easily accessible for most people.

Even if such tracking was possible to enforce, it goes against the spirit of PoW mining and Ergo’s ethos, which emphasize individual rights to privacy, with a special emphasis on financial privacy.

And even if you could restrict large changes in hashrate at the individual level (efficiently and without causing much controversy), it wouldn’t do anything to limit changes in hashrate during rare events like the mERGe- where majority of hashrate change comes from groups of miners flocking to or from Ergo.

I also think trying to control hashrate by restricting miners is the wrong way to do it, *even if you could*. The protocol needs to be able to adjust to external forces, not try to control external forces, which at their core are generally uncontrollable by nature.

You could look into bonded mining for a DAA that is somewhat similar. But instead of limiting hashrate increases by individuals, bonded mining penalizes miners who don’t remain loyal and committed to coin.

Scholarly paper that introduced the concept of bonded mining: [[1907.00302] Bonded Mining: Difficulty Adjustment by Miner Commitment](https://arxiv.org/abs/1907.00302)

> We present Bonded Mining, a proactive DAA that works by collecting hash rate commitments secured by bond from miners. The difficulty is set directly from the commitments and the bond is used to penalize miners who deviate from their commitment.

---

### Post #52 — @Haskell_plus (2022-09-24)

Would it be worthwhile to consider a L2 with similarities to the Lightning Network before putting a lot of time and effort into a protocol change and a Hardfork?

Would seem to me that if a Lightning Network could be introduced instead of a change as a knee jerk reaction to difficulty its possible that such a L2 could benefit miners if a L2 was built as a sidechain and required some standard of mining to ensure the security, with batching possible a Lightning like network could possibly batch transactions before moving them to the Ergo chain which would make the financial side of things make sense.

I have not really seen anyone looking at utilizing a sidechain or L2 solution concerning the merge migration of hashrate and the problems it has exposed, however, it seems that maybe we could look at that so that we can satisfy miners, should at least be a part of the discussion before a fork is considered imo, would be good to look at all available options before going through a hardfork without considering them.

---

### Post #53 — @TypoDaPsycho (2022-09-25)

![](https://ergoforum.org/letter_avatar_proxy/v4/letter/m/b4bc9f/48.png) MPrintem.HashCartel:

> The problem the remaining Ergo miners were left with was that our relief, the next difficulty adjustment, would be slow to come as the checkpoints for difficulty adjustment are governed by a naked block count not factoring for passage of time in the real world. When the hashrate exodus occurred after the difficulty spike, with difficulty so high and hashrate gutted, block times increased significantly.
>
> I would very much like to see more dynamic difficulty adjustment mechanics explored, mechanics that by whatever suitable means, account for avg block times and increase or decrease the # of blocks to next diff adjustment accordingly with a target average blocktime being used to guide the development of the rule set.

This is the entire issue right here I believe. We aren’t referencing a target block time with our model. Because we try to improve on Bitcoins DAA model.

GPU minable altcoins shouldn’t model their DAA off Bitcoin’s DAA. Even, if we didn’t model after it, we shouldn’t compare our replacement DAA against Bitcoin’s. Bitcoin is its own beast with its own assumptions.

No other PoW chain is comparable to Bitcoin in this regard. Satoshi was very lucky, because that DAA model is a less than *ideal* choice for most PoW altcoins Not saying it couldn’t work good enough, just that there’s better options. And if you’re a bitcoin fork or a GPU dominated chain like Ergo, the Bitcoin DAA is a bad model to use as the benchmark.

Here are the basic pseudocode for well documented alternative DAAs that have significantly lower error rate % for popular attacks like selfish mining and general timestamp attacks: You can look at asert results on BCH and see even it results in high block times in some cases, but nothing like our current situation.  
Edit: BCH needs to handle significant hashrate flucutations since it’s a fork of BTC-sharing the same SHA-256 hashing scheme.

## wtema DAA

next\_target = prior\_target / (IDEAL\_BLOCK\_TIME \* alpha\_recip)  
next\_target \*= block\_time + IDEAL\_BLOCK\_TIME \* (alpha\_recip - 1)

## asert DAA

target\_timestamp = (height + 1 - activation\_height)\*IDEAL\_BLOCK\_TIME  
next\_target = target\_at\_activation \* 2^((last\_timestamp − target\_timestamp)/tau)

Both reference target times. If we don’t reference target times, we need some sort of failsafe that if block isn’t solved in X seconds that difficulty decreases X%.

> DISCLAIMER: This is all just initial opinion based on reading some things, I couldn’t even tell you what the DAA math means even in the pseudocode versions I copied and pasted. I didn’t even know pseudocode was a word until 2 days ago. I’m just sharing my current view, my uneducated perspective formed over a few days, based on google search results. Remember I didn’t even know pseudocode was a word.

Please tell me where I’m wrong in my general thought process and/ or provide more links for me to read ![:grimacing:](https://ergoforum.org/images/emoji/twitter/grimacing.png?v=15 ":grimacing:")

---

### Post #54 — @Uziyamada (2022-09-26)

It’s a very informative input, thank you.  
However, could someone able write some examples (with example values, to ensure the reader which parameters are being discussed) about adjustments made using the wtema & asert DAAs? Thank you! And the mentioned failsafe sounds great, I think that’s really important for black swan events.

---

### Post #55 — @TypoDaPsycho (2022-09-26)

Please everybody, check out my comment on the Hard Fork wishlist thread. One thing I bring up (foundational change activation period) is an area we can (should IMHO) modify when changing DAA with a hard fork.

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/typodapsycho/48/1374_2.png)
[Hard-Fork Upgrades Wish List](https://www.ergoforum.org/t/hard-fork-upgrades-wish-list/3888/15) [Ecosystem Development](/c/dev/ecosystem-development/9)

> One thing I’d like to see with hard fork, is the DAA to become something that can be altered via soft-fork in future. Either miner votes can adjust parameters, or better yet, miners supermajority can replace DAA totally via soft fork. I have a feeling this is not possible. But, IMO it would be a good idea to explore, with the goal of better future-proofing network and prevention of future hard forks.
> Another Idea is to introduce a CRITICAL function that reduces block number required before …

---

### Post #56 — @TypoDaPsycho (2022-09-26)

This would be amazing! I would recommend this link to read about ASERT and the results on BCH. The graphs may help visualize results, and there’s good commentary that even low-level plebs like myself can understand, at least to some degree.

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/4/4ca747b31ab8bca47aad7867771b494294a6de64.png)
[Bitcoin Cash Research – 24 Feb 21](https://bitcoincashresearch.org/t/asert-before-and-after/312/2 "12:59PM - 24 February 2021")

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/e/e4005bd92d477105e422c00e605361599e4134d7_2_690x277.png)

### [ASERT: Before and After](https://bitcoincashresearch.org/t/asert-before-and-after/312/2)

Before we look deeper, I want to post some of the charts and figures out there. This retrospective across BCH existence from 2017 until today, from bitinfocharts.com gives a nice overview. I’ve added bars to delineate the various algorithms in use...

---

### Post #57 — @Meo (2022-09-28)

Hello all,

I share my quick thinking about the problem just in case it can help or inspire a new Ergo own way to manage things.  
Forgive my bad English if it is not clean ![:hugs:](https://emoji.discourse-cdn.com/twitter/hugs.png?v=12 ":hugs:")

let’s say target block time is 2 minutes and we want a steady network.  
let’s say the POW with Diff(X) is finding a word so added to the block then the hash of the block begins with X Zeros (for general idea but it can be finer grained than 2^X)

1. rule 1: any block validated less than 1.5 minutes after its parent is invalid
2. rule 2: after 1.5 minutes Diff(X) POW is accepted
3. rule 3: after 4 minutes Diff(X-1) POW is accepted
4. rule 4: any block competition for one given height needs at least partial consensus resolution and gives possibly feedback information opportunity to adjust difficulty (many solutions proposal early => probably diff is too low for hash-rate, many proposal after 4 minutes => probably not far OK etc.)
5. rule 5: to sort conflicting propagated block solutions, POW (within adequate propagation time) with the most starting Zeros (then most tailing 1 or whatever deterministic arbitrary secondary game based on hash result) is preferred
6. rule 6: once chosen the block is timestamped and the difference between nominal average block time (2 minutes) and the measured one from its parent is added to sum\_DeltaT’s in the block, also the sum\_DeltaErg compared to nominal emission rate (optional number of temporary “uncles/orphans” too)
7. rule 7: if DeltaT(Validated/legit longuest chain) > Threshold\_too\_slow(dist\_current\_height\_\_legit\_top) => diminish\_diff(DeltaErg)
8. rule 8: if DeltaT(Validated/legit longuest chain) < Threshold\_too\_fast(dist\_current\_height\_\_legit\_top) => raise\_diff(DeltaErg)
9. rule 9: the POW diff should be set very slightly over/under depending the ergDelta sign -/+ and calculated to balance over a very long time ~2-3 months or even more

on the miner/pool side the goal will be to find the best possible Diff(X) candidate while storing Diff(X-1) if it finds one solution… during 1.5 minutes minimum… can even stop once one found and happy of the solution, or search for better Diff(Y >= X)

on the node side the tricky thing is certainly to handle/sort “uncles/orphans” when diff is too low… the diff game should help about that… setting a primary necessary goal to validate if alone but also a secondary quality game in case of competition to validate the block… the propagation event will close the current block game somehow.

Also Idk if “uncles/orphans” are kept inside database after the longest chain is judged legitimate else it may be needed to cleanup the mess from DB because it may possibly generate a lot, and that’s the main problem I see.

If it can work within consensus (Idk) then advantages would be:

* even a large hashrate bump can’t benefit more than +33% indue revenue (not 3x or such that would need being compensated later with crippling the network)… you would hit 1.5 minute/ 2minutes ~all the time… but 1.5 minute is ok, waste is limited not being too fast, and lets room for random fluctuations that can average to nominal on the long run.  
  It would let opportunity to detect such scenario too  
  And this amount would be smoothed later on in a very diffuse way… but the coin mass delta to compensate will be at least an order of magnitude lower. We don’t care if block time is 2.1 minutes over 2-6 months, but we care if it’s 10 minutes over small period of time that keeps increasing and snowballing with progressive capitulation of ergo supporters while users suffering a terrible experience at the same time.
* being time constrained, as a miner you want to improve your solution proposal to increase your odds of wining the prize… so miner by himself raises its virtual difficulty to be a better candidate while always keeping its best previous puzzle solution in memory (in case of fallback or minimum valid solution). It keeps at work to improve its revenue. Also quality of solutions to the puzzle put in relation to time to parent is a way to estimate the current hash-rate.
* also in case of large hash-rate leaving the network there is a fallback with lower difficulty so block time doesn’t inflate exponentially with supporters capitulation (that can snowball) and stays in control.
* random deviation may be smoothed etc. but block time will fluctuate within a range of decent nominal bandwidth for user experience… overall the network may turn being more efficient compared to blocks that can be generated at any time… in such case possibly near empty and impacting the average tx bandwidth negatively… that’s kind of letting time to fill the pint of beer, a pint with nothing to drink is useless ![:smiley:](https://emoji.discourse-cdn.com/twitter/smiley.png?v=12 ":smiley:")
* also smoothing ergDelta on very long period with slight instantaneous impact gives the frequent hopping hashrate a chance to clean his own mess later on without even realizing it ![:smiley:](https://emoji.discourse-cdn.com/twitter/smiley.png?v=12 ":smiley:") or reduce the frequency of on purpose attacks drastically  
  long-term supporters are less impacted having to fix a huge mess, and price less likely to fall.  
  nominal emission rates will be preserved on the long run, more consistent with less up/downs

I don’t know all the drawbacks, attack vectors etc. but the current problem we are facing will stick to the network and others as well… at best it will cripple the network growth at my opinion… because any excitement+price up will provoke an attack as long there is enough hash-rate ready to turn on… **at best**  
at worse it will keep the prices low enough so an attack is not worth it or until breaking faith of good fellows/devs… sadly Ergo will be one of the primary targets without Eth.

There are other good projects but they are Asic friendly so Ergo is the one that is Asic resistant with best value to small miners eyes.  
It will be the 1rst to be attacked if gaining value and showing low relative difficulty…  
To grow freely this problem has to be solved so stable supporters are rewarded fairly or at least take the minimal pain to remain happy to support.  
And IMHO I think it cannot handle the same way BTC & likes do, the threat not being exactly the same amount, nor volatility, with more agile/diverse hash-rate etc.

that’s it about my own idea, who knows if it can help then I’m happy… anycase I woulda tryed ![:laughing:](https://emoji.discourse-cdn.com/twitter/laughing.png?v=12 ":laughing:")

cheers guys

---

### Post #58 — @TypoDaPsycho (2022-10-01)

Wow nice post! it must be even more tedious since English isn’t your preferred language. Thanks for taking the time to share your ideas!

I think the difficult part (and unfortunately the part that *really* matters) isn’t describing a better alternative way to adjust the difficulty. The important part is being able to translate those words into actual code. Code that can be rigorously tested and then possibly implemented securely at the protocol level.

Several good ideas have been described so far in this thread. But ideas that can be simulated/tested (and therefore have a real chance to be implemented), are few and far between.

[EIP 37](https://github.com/ergoplatform/eips/pull/79) looks increasingly likely to have the support needed to pass the voting process.

<https://votes.sigmaspace.io/>

If so, EIP 37 can be expected to be the new method Ergo uses to adjust difficulty. That doesn’t mean this DAA topic is settled for Ergo though.

I *really* hope alternative DAAs (like the one you describe) are explored further in the coming months and years. I don’t mean to de-legitimize or unfairly dismiss the idea you’ve shared. Rather, I’d like to motivate you to expand on it with further research and work. So that one day, you can hopefully share workable code that we can test or even implement on chain.

Edit: I’m sorry I shouldn’t have replied specifically to you with that last part. Everyone is presenting their idea & yours is just as legit as anybody else’s in the thread. And you’re describing something similar to how I’ve seen Eth’s DAA described…i think.?

---

### Post #59 — @TypoDaPsycho (2022-10-05)

I emailed one of the top experts on difficulty adjument algorithms, zawy12 to get his opinion on EIP37 and I want to get visibility on his response without causing FUD, read his comment here:  
[EIP-37: Tweaking Difficulty Adjustment Algorithm by kushti · Pull Request #79 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/79#issuecomment-1267802517)

Edit: I encourage everyone to read his newest comment:

[github.com/ergoplatform/eips](https://github.com/ergoplatform/eips/pull/79#issuecomment-1271861593)

#### Comment by [zawy12 zawy12](https://github.com/zawy12) to [EIP-37: Tweaking Difficulty Adjustment Algorithm](https://github.com/ergoplatform/eips/pull/79#issuecomment-1271861593)

`ergoplatform:master` ← `ergoplatform:eip37`

TL;DR: If you develop oscillations, just change difficulty every block with the[…](https://github.com/ergoplatform/eips/pull/79) current math. If you start suffering attacks with timestamp manipulation due to timestamps being allowed too far into the future or due to the 50% cap, read the following.
Your monotonic stamps prevents a lot of problems.
Nodes that mine should know that their clock is approximately correct. Other nodes don't matter. Their maximum error plus the allowed future time limit on timestamps should be a small fraction of the difficulty averaging window so that the most recent timestamp should not be capable of having a large effect on difficulty if honest miners are >50% hashrate.
By suggesting N = 512 for WTEMA to mimic your current "averaging window" of 1024 blocks, I'm estimating a similar response speed and stability but with higher precision. The manipulation of difficulty that's possible from the most recent timestamp being far in the future should be about the same or a lot less with WTEMA. For example, if the future time limit & local time error are not correctly limited, and if the previous timestamp were allowed to be 1024 block times into the future, a simple moving average would cut the difficulty in half. For ASERT and WTEMA, it would be about a 65% reduction. With epochs, the cheat isn't fixed for 128 blocks whereas rolling methods can mostly correct it in the next honest timestamp. The attacker can't reliably expect to get the next block to benefit from the manipulation on rolling methods, but with 128 block epochs he can expect to get some. This shouldn't be important because the future time limit and local time error should be smallish compared to 1024 block times. But with doubleweight on most recent 128 blocks and prediction, a timestamp only 128 blocks into the future might have a large effect. This isn't a reason to implement a 50% cap, but to make the difficulty adjustment slower or to reduce the future time limit to implement the 50% cap in a different way. There's a crucial difference in using the clock instead of code to implement a 50% limit. PoW is only as secure as the clock. The clock and therefore allowed timestamps must be more secure than the consensus mechanism (PoW). You can find this statement in the original Byzantine paper and even earlier in the late 1970's. The only way for the clock to be more secure than PoW is for node operators to know what time it is without asking peers. When you enforce a 50% cap on difficulty in code instead of with the clock, you're over-riding the objective measurement of current hashrate (consensus) with a prior belief about what "should be". Code going against the objective measurement of consensus always allows attacks on the consensus.
I saw your difficulty chart and it looks like the new method was implemented 4 days ago and it looks a lot better. It's possibly very close to being like ASERT, WTEMA, and LWMA, except for the epochs causing a 128 block delay. I believe you could it change difficulty every block and average block time would still be accurate. The reason to do the change is that delaying adjustment is what usually ends up in oscillations. Since it appears you didn't have catastrophic oscillations with the older method of 1024 blocks per change (as I would have expected even before the merge), I think you'll be OK with the current method. But if oscillations return, adjusting every block is the fix.

His tldr; changes noticably over the course of this discussion. I personally sum it up with these two paragraphs:

> TL;DR: you develop oscillations, just change difficulty every block with the current math. If you start suffering attacks with timestamp manipulation due to timestamps being allowed too far into the future or due to the 50% cap, read the following.
>
> Your monotonic stamps prevents a lot of problems  
> …

And what I believe is a later update:

> I saw your difficulty chart and it looks like the new method was implemented 4 days ago and it looks a lot better. It’s possibly very close to being like ASERT, WTEMA, and LWMA, except for the epochs causing a 128 block delay. I believe you could it change difficulty every block and average block time would still be accurate. The reason to do the change is that delaying adjustment is what usually ends up in oscillations. Since it appears you didn’t have catastrophic oscillations with the older method of 1024 blocks per change (as I would have expected even before the merge), I think you’ll be OK with the current method. But if oscillations return, adjusting every block is the fix.

I encourage you to read his full comments, above is short part of EIP37 comments by zawy12.

kushti’s comment + seeing actual results of EIP 37 = what led to zawy12 posting that ![:point_up:](https://emoji.discourse-cdn.com/twitter/point_up.png?v=12 ":point_up:") which then, led me to this point where I can honestly say,

**While I still think there are better DAA models available, EIP 37 is a big improvement on original least squares method, everyone can look at the Epoch monitor and recent blocks on explorer to see that. I’m happy I’m not losing any sleep over it like I was a few days ago. Edit2: Sorry don’t mean to sound all dramatic, and to be clear my own ignorance is what led me to worrying needlessly ![:blush:](https://emoji.discourse-cdn.com/twitter/blush.png?v=12 ":blush:") .**

*Please remember, I’m not great at math or an expert on any of this stuff.* Just sharing my thoughts.
