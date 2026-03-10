---
title: Emission Soft-Fork Proposal
description: 'ErgoForum discussion: Emission Soft-Fork Proposal'
tags:
- addresses
- auction-house
- box
- collateral
- difficulty-adjustment
- eip
- emission-schedule
- ergo-explorer
- ergo-foundation
- ergoforum
- ergoscript-context
- eutxo
- full-node
- layer-scaling
- minimum-transaction-fee
- native-tokens
- phoenix-finance
- sigma-chains
- sigmausd
- soft-fork
- spectrum
- storage-rent
- token-burning
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/emission-soft-fork-proposal/2996
created: '2021-11-24'
last_activity: '2023-04-22'
posts_count: 111
views: 10947
likes: 194
glossary_hits:
- Addresses
- Auction House
- Box
- Collateral
- Difficulty adjustment
- EIP
- Emission schedule
- Ergo Explorer
- Ergo Foundation
- ErgoScript context
- Full node
- Layer scaling
- Minimum transaction fee
- Native tokens
- Phoenix Finance
- Sigma Chains
- SigmaUSD
- Soft fork
- Spectrum
- Storage rent
- Token burning
- Transaction
- eUTXO
---

# Emission Soft-Fork Proposal

> **Forum thread:** [https://ergoforum.org/t/emission-soft-fork-proposal/2996](https://ergoforum.org/t/emission-soft-fork-proposal/2996)
> **Category:** Uncategorized | **Created:** 2021-11-24 | **Posts:** 111 | **Views:** 10947

**Related concepts:** Addresses, Auction House, Box, Collateral, Difficulty adjustment, EIP, Emission schedule, Ergo Explorer, Ergo Foundation, ErgoScript context, Full node, Layer scaling, Minimum transaction fee, Native tokens, Phoenix Finance, Sigma Chains, SigmaUSD, Soft fork, Spectrum, Storage rent, Token burning, Transaction, eUTXO

---

### Post #1 — @kushti (2021-11-24)

I have implemented some simulation code and even some verification-related code in regards with emission soft-fork (discussion was started @ [Ergo Emission: details, retargeting via a soft-fork](https://www.ergoforum.org/t/ergo-emission-details-retargeting-via-a-soft-fork/2778) )

So let’s assume that starting from block 700,000 (better to take something related to mining or emission epochs, but okay for starters), emission reduction is done via following rules:

* if block reward is not less than 24 ERG, send 21 ERG from it to the reemission contract
* otherwise, block reward R is less than 24 ERG, send R - 3 ERG from it to the reemission contract

With following rules, starting from block # 1,562,400 , effective emission will be 3 ERG.

Total reemission fund then would be about 23,553,600 ERG.

Considering that re-emission contract will pay 3 ERG per block also (starting from 2,080,800) , thus creating a long tail starting from block # 1,562,400, we are getting ~29.88 more years of stable rewards (so ~38 years of emission in total, starting from mainnet launch), so before year 2057 miners will have stable part of income.

Please provide your feedback!

---

### Post #2 — @Sviat17 (2021-11-24)

I’m for it ![:+1:](https://emoji.discourse-cdn.com/twitter/+1.png?v=10 ":+1:")  
Good for miners and slow down an emission

---

### Post #3 — @PackOfMarlboro100 (2021-11-25)

sounds good to me Kushti, healthy overall for both original supporters and longevity of mining. The current emmission was always scary in many ways, if it is changed to 30 years many objections towards the blockchain dissapear, also much more time to develope storage fee system.

---

### Post #4 — @HelixEvo (2021-11-25)

How safe if this contract that will be holding a hefty sum of ERG from potential hacks?

I’m all for extending the mining timeline. Will help with the price I’d imagine.

However to propose the change, are you saying the storage rent is thought to no longer keep incentive high enough for miners to participate after all coins mined?

---

### Post #5 — @WilfordGrimley (2021-11-25)

Rather than create a re-emission contract with it’s own token that is burned for ERG and requires a soft-fork, could a crowdfunded contract (or several) not be created?

Contracts could be programmed to airdrop donated rewards (Pure ERG ideally, rather than alternative tokens) via a set emission schedule.

In this way everything is consent driven and no soft-fork should be required.

dApps could even reward donators with some airdrops of their own tokens, (as they require the network to be secure to function, encouraging or requiring users to donate to network security is in everyone’s best interest.)

Would also pave the way for more mature iterations of SmartPools. ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=10 ":slight_smile:")

---

### Post #6 — @Overshrink (2021-11-25)

I think its a fantastic idea

---

### Post #7 — @sandor (2021-11-25)

My question might be simple and stupid but I think many people can have it.

We need miners for the function of the network and also to secure the network, and also we need to reward miners for it.

Now the emission is very radical, and we want to expand the emission. This means that miners will get less ERG for their rewards.

At the current price of ERG, changing the emission means that the rewards will become less, and the profitability will fall. We need to keep the miners’ profitability high.

So my question is what will happen to profitability? I guess that it is expected that the ERG price will rise, but what will happen if this never happens? Shouldn’t the rewards be adapted to the profitability?

---

### Post #8 — @Meinhof (2021-11-25)

Do you have a graph that compare current emission vs proposed? Not 100% sure how this proposal is gonna affect current emission

---

### Post #9 — @glasgowm (2021-11-25)

Please see additional discussions [here](https://www.reddit.com/r/ergonauts/comments/r1jk4p/emission_softfork_proposal_research_and/)

Here’s a graph from Richi [MANA]  

[![photo_2021-11-25 09.53.28](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/5/5084446f7928c5efb86b8b3a3305ae0a821a990e_2_690x399.jpeg)

photo\_2021-11-25 09.53.281280×742 46.4 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/5/5084446f7928c5efb86b8b3a3305ae0a821a990e.jpeg "photo_2021-11-25 09.53.28")

---

### Post #10 — @HelixEvo (2021-11-25)

Yes, if block rewards were to be massively cut now and the token price also keep around its current level, then miners will leave the network.

This in turn would leave it more probable of a big share of hash hack maybe?

As a miner myself, I like ERG, so that’s why I mine it, making rewards along the way to help with energy costs and up keep of the hardware.

Do I like the idea of all this ERG being taken from the rewards and put into a contract somewhere that’s opens up potential of it being open to bad actors, then no, that makes me nervous.

---

### Post #11 — @_CW (2021-11-25)

Whilst I prefer that a change not be required, I can see the need for the emission proposal as the market conditions currently stand.

~50k ERG currently entering supply daily has a significant impact on price and mining profitability with current liquidity levels and adoption.

Its hard to predict what the future will hold. Many potential factors such as miner migration, dapp adoption, significant liquidity increase, proven storage rent modelling, side-chain mining incentives etc could all alleviate the need for this proposal though nothing is certain.

Due to this uncertainty, I believe ensuring the security of the protocol by retaining and increasing miner numbers is of upmost importance. If extending the emission schedule as proposed ensures at a minimum, miners will continue to be rewarded in future years, then it has my support.

Prolonging emissions for miners to continue to secure the protocol while the ecosystem matures and incentives are continuously added, whilst limiting the sell pressure of many coins coming into circulation every day and increasing liquidity and adoption, I think is a good compromise for miners and investors to both benefit.

---

### Post #12 — @upyerkilt67 (2021-11-25)

I think the majority would agree to extending the tail however, I think extending it by ~30 years is a bit much. You’ll be having pretty much a halving of emissions come March and that could lead to problems in the short to mid term.

A shorter tail extension and a less severe reduction in the block rewards would be better.

---

### Post #13 — @WilfordGrimley (2021-11-25)

Could be done in 6 year blocks (or 9 if there is to be some overlap for smoothing) with a smaller amount of ERG initially. Could revisit as required.

---

### Post #14 — @Nick (2021-11-25)

I agree with kushti’s Emission Soft-Fork Proposal and I don’t see what could be done even better.

As another fundamentally important problem, It would be good to consider protection from 51% attacks that pose a great danger now that ethereum is moving to POS. Maybe something like Modified Exponential Subjective Scoring (MESS) could be implemented. 51% attacks can significantly damage the reputation of coin and the trust of users and investors.

---

### Post #15 — @Armeanio (2021-11-26)

I can see the benefits of the proposed changes and am happy to see some engagement and discussion on the matter. The long-term crypto economic security of the network needs to be taken into account.

The reduction proposed is aggressive and most likely needs to be met with an equally aggressive plan to increase market access to maintain profitability for miners if we roll over the adjustment cliff.

It does potentially solve the issue of over-aggressive emissions but could also potentially create a short-term challenge to support the cost adjustment needed to maintain miner profitability. I will do what I can to help offset that risk.

There seems to be a decent community consensus in support of this adjustment.

Probably the hot conversation about mining is the potential to change the adjustment period/epoch length.

I am curious how one change here could affect the other.

There has been discontent among smaller miners for difficulty/block time swings. I think it might be something to address or at least think about.

How could the proposed changes could potentially impact coin hopping and difficulty adjustments?

Kushti, what is your impression on how the proposed changes to emissions could impact the short-term profitability of mining ERG, and do you see any additional risk with the difficulty adjustment rotation we have been seeing?

Wanting to stay on the ergo network is admirable, but I guess it needs to be balanced with paying electric bills. I hope these will be growing pains that will stabilize as the network grows, and I would like to avoid a HF.

---

### Post #16 — @TypoDaPsycho (2021-11-26)

I believe, whether you support or oppose the general proposal, we need to have a clear, detailed policy regarding emissions and forks going forward.

Please share your thoughts on my idea for such policy and critique of my example policy here. [Update Erg Emission and Hardforks Policy](https://www.ergoforum.org/t/update-erg-emission-and-hardforks-policy/3015)

---

### Post #17 — @L4STWISHES (2021-11-27)

[@kushti](/u/kushti) I think idea is good. It will help to become hodlers od Ergo more rich. Did You disscussed IT with miners on groups like Reddit? If You take from miners possibility to earn money like Ethereum Devs moving to PoS they would be very angry and may leave Ergo network.

As a miner I am also holder so from both perspective I think that You need to connect this lower emission rate with some big announcement.

You also need to think which time exactly You should lower emission. We may have eth difficulity bomb so it would be hard time for miners if You also cut revenues from mining Ergo at the same time…

So I don’t know if lowered emission should take place before Ethereum going to PoS or after.

---

### Post #18 — @TC_Montague (2021-11-28)

Miner here, I contribute a small farm of 5 GH/s to the network. I’m a believer in this project and I am grateful to see how fair the distribution of ∑ has been so far.

I like the idea of being able to mine Ergo for the next 30 years but I’m concerned how this will collide with Eth moving to POS. I watched the impact of EIP-1559 on the ergo network, and while the short-term price action was great, the difficulty and block rewards were a bit painful. If the move to POS for Eth colides with the reduction of block rewards and doesn’t produce a sustainable price of Erg for miners it may be catastrophic to the network.

With no other real POW coin on the horizon, a mass influx of hash combined with a reduction of block rewards will push out all but the most effecient/industrial farms who have access to cheap electricity.

Is there perhaps a compromise of a shorter time period, say 10-15 years that has a smaller impact on block reward? Thanks for listening. -TC

---

### Post #19 — @kushti (2021-11-29)

> How safe if this contract that will be holding a hefty sum of ERG from potential hacks?

Funds will be sent to re-emission contract, which is a simplified version of the current emission contract (emission in Ergo is made via a contract, so not hardcoded into the protocol).

> However to propose the change, are you saying the storage rent is thought to no longer keep incentive high enough for miners to participate after all coins mined?

Storage rent will remain the same , however, we may consider smoothing rewards from it by requiring spending it fully or partially to a form re-emission contract . However, no rush here, investigation and modelling can be done later.

---

### Post #20 — @kushti (2021-11-29)

Sounds nice, but I can’t imagine miners doing donations.

---

### Post #21 — @WilfordGrimley (2021-11-30)

Miners already indirectly donate a percentage of their earnings to closed source mining software developers (in the form of fees) and to pool hosters.

[EnigmaPool](https://enigmapool.com/) has been running a miner funded block bounty for a while. Myself and many other miners happily donate a percentage of our earnings to encourage decentralization.

The advantages of Ergo’s programmability, and scalability can make donating to it’s security incredibly cost efficient for large dApps or sidechains.

I fear for small but dedicated miners if emissions are heavily prolonged. The everyday people that Ergo is designed for.

---

### Post #22 — @Viler (2021-11-30)

Im very small miner, so my oppinion dont have same weight but I think that with current aggresive emmision ERGO will be on the edge of death during bearmarket. 50k ergs daily for such small community is too much. Price is even now holded by few rich people. When sentiment drop and price with it, you who need to sell to pay bills etc. will leave and there will stay again only rich miners who are able to hold till next cycle. Yes you are mainly care about yourself I totally got it but withot buyers will be your mining ded too, increasing price will bring attention and pump will come hand in hand.

---

### Post #23 — @kushti (2021-11-30)

As there are some concerns about too aggressive nature of the proposal, here are alternative ones. Still , we consider following rules:

* if block reward is not less than X ERG, send X-3 ERG from it to the reemission contract
* otherwise, block reward R is less than X ERG, send R - 3 ERG from it to the reemission contract

, and consider that re-emission contract paying 3 ERG.

Then for different X we have (where X=21 described in the initial post):

* for X = 12, 3 ERG emission will be started at block # 1756800, total reemission is 14625600 ERG, total reemission is enough for: 4875200 blocks (18.55) years
* for X = 15, 3 ERG emission will be started at block # 1692000, total reemission is 17796000 ERG, total reemission is enough for: 5932000 blocks (22.57) years
* for X = 18, 3 ERG emission will be started at block # 1627200, total reemission is 20772000 ERG, total reemission is enough for: 6924000 blocks (26.34) years

Now we need to talk with miners, and I am starting an EIP with concrete details, activation etc

---

### Post #24 — @ryan69plank (2021-11-30)

I have been mining ergo for 6 months and love this project so much. I just want to say thank you for this opportunity. I am in total support for the idea of extending the mining for longer I think this will widely help grow the mining community much larger and also the people behind ergo will extend and grow larger through this proposal. You have my support on this idea. I think it’s fantastic and healthy that the mining will be extended will help the little guys out more and will be a fun experience for younger people like myself who will get into computers and mining in the future. I love how energy efficient ergo is on my GPUs I have 8 rx 580s running on ergo and I’m going to save up to get some Nividia cards to get going on ergo to. More time the better ![:grin:](https://emoji.discourse-cdn.com/twitter/grin.png?v=10 ":grin:")

---

### Post #25 — @TC_Montague (2021-11-30)

I like this proposal, 18 years in tech is practically an eternity. Much can happen before then. Thanks for listening, I believe a compromise here will be a win for everyone. -TC

---

### Post #26 — @Louisberlin (2021-12-02)

Hi,

I want to start by saying that this proposal is very good and I am in full support of it. Thanks so much Alex for preparing it.

**Proposal additions**  
I have some proposal additions. I propose we add another measure.

* Taking surplus money out of circulation.

**increasing confidence to for ecosystem growth**

Ergo is experiencing inflation. This is not good for the ecosystem growth.

The price is a sign of market confidence. The inherent value and engineering quality is undermined in by this situation.

Over supply of currency is a contributor due to the emissions schedule. oversupply of money is never a good position. In our case it destabilises expansion and affects the future of the project. Low confidence has a knock on effect of development and growth. Sadly the mc is the result of tokenomics and not engineering quality, so needs to be patched in several areas.

**Inflation reduction**

The current proposal is the equivalent of turning off the tap of quantitive easing off. But because there was such an aggressive mining schedule there is now major imbalance in the economics of the project. The impact of this imbalance will be felt as demand for token does not match supply in circulation.

I believe we need a monetary reduction measures need to be put in place quite quickly to a find ways to take surplus money out of circulation.

**To burn or not to burn? That is the question.**

It is not possible to burn tokens on ergo, because any burnt will be put into a smart contract in turn these will be redistributed at a later date as storage rent.

perhaps this is a good reason that burning tokens on ergo is ethical.

Burning tokens:

* Actively reduces tokens and squares the projects economics.
* Create a reserve for future distribution when storage rent when it comes into action.

Therefore burning tokens simultaneously solves current inflation issues and future storage rent issues.

I think this approach will mofe adequately distributing the funds in relation to need and use and a more realistic ecosystem expansion.

IMO. Right now we have effectively already mined a lot of future ergo - we need a way of putting this erg back to the future *cue back to the future themesong*

Because of this I believe that an effort to reduce surplus should be enacted - and the equivalent to burning ergo should be seriously considered.

\*\* Second layer token burning\*\*

A token burn doesn’t need to happen at layer one to be effective either.

One suggestion is that some layer two dapps like ergodex and ergo auction house could be asked kindly to burn an amount of tokens whenever the service is used, this may not impact on profit and would be a small price increase.

This would mean that big projects contribute a lot more to the ecosystem than just the service they offer by reducing surpluses as they grow.

I can predict that at a certain point we will reach an equilibrium.

For example: an agreement to burn tokens as part of this could be the perfect prerequisite for using ‘ergo’ name before any dapp. the individual organisation benefits from the image of the name or brand, then this kind of action recognises and supports the ecosystems long term future growth.

**Burning**  
I am by not any kind of major advocate of token burning. But I think its important part of monetary policy. I do think that any economic system needs to at least attempt to relate the supply of a currency at any given time to the goods and services available, else the currency becomes undervalued and incentives become imbalanced.

The ergo ecosystem has a good design. But burning tokens would Simultaneously solving our current oversupply issues, and future mining rewards v storage rent concerns.

**Soft or hard policy?**

I also realise this probably can’t be a hard policy. But maybe it’s a cultural policy, normalising this among certain key ecosystem dapps.

---

### Post #27 — @veriumfellow (2021-12-04)

Good idea. We need to balance things towards less inflation and longer mining rewards. Win-win for miners and holders.

Besides, a higher price will also be good for Ergo Fund value and for attracting more projects on Erg - which is necessary to switch as fast as possible to a model where transaction fees pay for mining rewards.

---

### Post #28 — @TypoDaPsycho (2021-12-04)

Great post!

Can you elaborate on how token burning on L2 “may not impact on profit” ?

Are you saying if token burning leads to increase in price, profit may not be impacted?

Also, correct me if I’m wrong but such a L2 token burn method is outside possible scope of this proposal, or a similar proposal.

Since this is an L1 proposal, unless we “burn” a % of erg re-emissions contract by sending the % to a separate dead/ “burn” address?

Edit: also it’s not like Ergo has some crazy high Total supply number at ~97 million. Compare that with many others, 97 million is a rather conservative amount IMO.

---

### Post #29 — @sandor (2021-12-06)

Are there any news regarding this proposal? Since the forum is not very active, I am wondering what’s happening behind the scenes.

---

### Post #30 — @Armeanio (2021-12-07)

Personally, I am not a fan of burns.

Instead of burning tokens, locking them to reward miners in the future is a much better option IMO.

There is a question an open question how does a network incentivize miners after a tokens emission period?

There isn’t a clear answer for POW.

I think this would be more useful if it is ever needed.

---

### Post #31 — @Nick (2021-12-07)

After about 20 years as kushti proposed, the block rewards could fall from 3 to 0.3, for example, and stay 0.3 for next 30 years. Better something than nothing. This would make the miners feel more secure and loyal to the blockchain. This is especially important because it is a POW. Miners in the future may be reluctant to mine ERG when they know that only a few years earlier the block reward was 70 and they are mining 3 ERG per block. We need to somehow motivate future miners. One way is a satisfactory block reward and the other, MUCH MORE INFLUENTIAL, way is the good development and popularity of the ERGO ecosystem that will affect the high price of ERG so that miners are profitable by mining 3 and 0.3 ERGs per block.

ETH is not profitable for mining because of the big block reward, but ETH is profitable because of the high price, good marketing, development and because the whales do not sell it.

---

### Post #32 — @Ergosmergo (2021-12-07)

The difficulty bomb in Ethereum is a good example of how blockchains can become coercive. Accepting obsolete node client software so that it is always supported like in Bitcoin is something I think ERGO should follow. Forcing nodes to update could be a bad thing and cause coercive effects forced compliance is never a good thing.

---

### Post #33 — @Josh66 (2021-12-07)

I don’t think people would give up guaranteed erg for chance at an airdrop. Most people in ergo ecosystem will want to hold erg as it is the native token.

---

### Post #34 — @Josh66 (2021-12-07)

Curving emission is great for price. It’s why bitcoin had those supply shocks every 4 years. The shock to the issuance of ergo cause low supple and the price shoots up. The price of erg at the moment is being heavily diluted with its linear emission schedule.

---

### Post #35 — @Josh66 (2021-12-07)

We know what emission curve does. Bitcoin has emission curve, it has a halving every 4 years and that’s usually when whole market has bull run. The supply shock causes the price to shoot up. Also they are proposing this because they don’t know exactly if the storage rent will be enough at the moment. So emission curve gives it longer runway time to build.

---

### Post #36 — @Louisberlin (2021-12-07)

Thanks a lot for the response!

This is a response to Gabe, Armenio and others than have shared comments. Thanks for taking the time to reply.

I have got some further thoughts and clarifications to build on above post building on your thoughts.

**Circulation ammount:**  
I agree that the total released into circulation is conservative. But this is over the projects lifespan. I think there is a general feeling that there are be too many tokens in circulation at this point in time specifically. This is due to the short release schedule.

**History of release schedule:**  
Satoshi released tokens over a larger period, this is allowed a pattern of organic growth. This halved the amount every few years, which effectively built scarcity in line with growth in users over time.

In ergo the change of release schedule means there is an acknowledgement of an oversupply right now. This also means the storage rent strategy needs some time to mature. I think this is a positive thing.

**Wen Storage?**  
I think the storage rent is fundamentally a good idea. But i can see the levels of complexity behind implementing it. The issue with the storage rent implementation seems to be that there are a lot of known unknowns.

Some of these include:

-how many people will avoid storage rent by moving tokens regularly?

-how many dead tokens will there really be?

-At what point in time and maturity of the project does this storage rent become feasible as a strategy because there are enough dead tokens in the ecosystem. how do you identify the sweet spot for the transition as we are writing right now without information from the future available now. When could we have enough data available to us to confidently implement storage rent?

-How does the crypto savviness of todays users affect ammount of dead tokens compared to early days of Bitcoin?

And so on.

**There are a few options:**

Having a ‘burnt’ reserve helps us confidently transition to the storage rent strategy in the future whilst navigating the worst of these known unknowns. It gives the network some security by increasing ‘dead tokens’ in the network in a planned and considered way.

I can also see some vulnerabilities in storage rent too. all it would take is for some smart developer made a ‘rent free’ wallet that automatically moves tokens to a new wallet every few years, and for this to gain popularity at a later date in network growth to undermine the system. So for a successful transition I feel like we would need some artificial method low lower unseen risks.

**The cycle of token reincarnation**  
I proposed it being linked to dapps because it could connect to network growth. For example, being part of the dapp ecosystem would create a positive feedback loop.

-the more dapp ecosystem is used  
-the more the asset gets scarce,  
-the more demand for the network.  
-the more that is put in storage,  
-the higher probability the ecosystem can sustain itself for longer post storage rent transition.

It’s a very good mechanism for price growth, ecosystem growth and longevity simultaneously.

**Burning or storing? Phoenix proposal?**  
I think that the word ‘burning’ has some conceptual baggage. in Ergo’s instance maybe we coin a different word for it, maybe it’s more like a Phoenix, where tokens are burnt but re-emerge handsomely at a later date.

At its heart what I’m taking about is really a process to reduce supply whilst making sure some of the tokens emitted now can be used at a later date. To think about a golden point between scarcity, overwhelming the market, and growth of users in the network.

**Layer 2 v layer 1:**  
Agre about this discussion for layer two. I think they might be separate parts but they are essentially part of the same system, so that’s why I mention it here.

On layer one: There might be some parameter introduced, just like you suggested. For example I could see a script that sends tokens to an array of randomly generated keyless wallets purely to slowly be mined in the future, solving any concerns about storage rent. Or there might even be a very radical solution like you could just decide not to change emissions schedule at all and make 90% of all mined tokens go directly to storage. Something that might have the same effect but speed is up to storage rent transition.

But my proposal is that you make it some kind of obligation to have a burn function on dapps.

**Dapp income model/profit:**  
When I used the word profit, I was referring to income the dapps generate when providing their service

I’m aware that each L2 dapp may have a different financial sustainability model. From what I understand a portion of the income from, say, the sigusd contract goes towards developer or some other pot.

The fees to use dapps on ergo are highly competitive and cheap already. I am proposing that maybe there is a way to charge very slightly more to include (auto or not) a token burn.

**Separate discussion or no?**  
Just wanted to chip in and share ideas where they might be useful! Thanks again for all of the amazing work with the ergo platform.

Internal team and developers are the experts on ergo. I am really behind whatever is decided. thanks for taking some of this time to take feedback from the community and listen to some of my ideas.

I also believe that changes need to happen really fast. So whatever is best for the ecosystem.

Thanks a lot,  
Louis

---

### Post #40 — @Louisberlin (2021-12-08)

(Deleted posts because the above because it was the same post, but it appeared several times)

---

### Post #41 — @midiablo (2021-12-08)

Sounds good … good good

---

### Post #42 — @MADFYSH (2021-12-08)

As a miner, I approve of the extended emissions. This should bring the price up and allow Ergo mining to stay profitable for a long time.

---

### Post #43 — @Armeanio (2021-12-08)

I think it needs to be taken into consideration that the mining paradigm has changed. Non-outsourceable puzzles were basically forced solo mining. They were bypassed and the chain was forked to prevent hashrate dominance, however, the underlying emission has yet to catch up with that change.

The initial goal was to create incentivized infrastructure (which EUTXO naturally needs for concurrency, as well as off-chain infrastructure) and storage rent to create eventually create a mining pool-like (small reward) system, and have the potential to hit a block solo and unlock a large reward. Mining with non-outsourceable puzzles brought in miners who had more skin in the game because rewards were irregular.

Being that we are now mining pool friendly and the underlying incentive attracts the average miner to pool, which does bring a different type of miner, I do think an adjustment to emissions to reflect the fork is a good idea.

---

### Post #44 — @thegeologist (2021-12-08)

Not a miner but active community member - I see the emission adjustment as positive for near- and long-term adoption of Ergo. From discussions I have read here, in Reddit, Telegram, and Twitter, sentiment agrees that a lowering of emissions is favored by most. I will defer to you technical experts on the best approach, and fully support!

---

### Post #45 — @JtheErgoGod (2021-12-08)

In favor of Kushti’s proposal. One suggestion - could we have some third party career experts in tokenomics / economics take a look and audit the proposal as well?

---

### Post #46 — @TypoDaPsycho (2021-12-09)

“At its heart what I’m taking about is really a process to reduce supply whilst making sure some of the tokens emitted now can be used at a later date. To think about a golden point between scarcity, overwhelming the market, and growth of users in the network.”

That’s essentially at the heart of the proposal.

it’s not possible to “pseudo-burn” Erg already in circulation, unless people or dapps volunteer to send % of their Erg to burn address or re emissions contract.

But if this proposal passes, we can start storing a % of upcoming block rewards, and distribute those stored Erg as rewards to miners, at a later date.

What is being proposed will slow down emissions and should achieve what you are talking about to some degree. In near future, circulating supply will be lower if this proposal passes. But total supply will not change.

~97 million Erg is total supply and cannot be changed according to kushti. So the question is, how quickly do we want those ~97 million to be put into circulation?

And how fast this can go into effect depends on the community coming to a clear consensus. Once finalized & introduced, the proposal will be available for passage for a limited time.

Kushti’s last proposal (to reduce storage rent period from 4 to 3 years) failed. Probably one reason kushti says he wants community votes to occur, before voting on proposal by nodes happens. Also why IMO we can’t add additional mechanics to the proposal, because I highly doubt a super majority of those running full nodes will vote in favor of a more complex proposal.

& Thank you for contributing to this discussion!

-Gabe

---

### Post #47 — @Justin (2021-12-09)

I am not a miner. However, I strongly support Kushti’s proposal and think it is in the entire community’s interest including miners.

Firstly, it is absolutely essential to insure the long-term security of the network and nothing is more important than that.

But secondly, I think the proposal will bring other great benefits to the community in terms of adoption and price. We all know about Bitcoin’s halving cycles and the incredible impact that has had on Bitcoin’s price performance over the years. Well, Ergo has a very aggressive emission and this is a big reason why price has been under pressure. A reduction in inflation will lead to higher prices, more users and investors and more adoption and development in a virtuous feedback loop just as we have seen in Bitcoin. This helps Ergo grow and will increase the profits to miners and make Ergo a more competitive coin versus PoS and other non-PoW platforms. This is very important for miners who are seeing less and less good mining options with Ether moving to PoS and most other new layer 1s embracing exotic non-PoW consensus models. Ergo has the potential to lead the PoW pack in my opinion and hopefully miners will see setting off this virtuous cycle is also in their interest.

Thirdly, extending the emission out for many years, even possibly more than are absolutely necessary from a security stand point will lessen the dependence on transaction fees in the long-term and give the miners more room to vote to raise block size and increase throughput when Ergo is super popular enhancing Ergo’s utility in the decades to come.

So I not only support Kushti’s proposal but I support a relatively aggressive version with X=18 and 26.34 years more emission. Hope the community and miners can get behind it and make it a reality ASAP.

---

### Post #48 — @Vesi_Hiisi (2021-12-09)

I am no expert on the mining things, so I talk my economist view in general:

Reading the comments it seems that pretty much everyone agrees that the change in the emission is fundamentally better. All of the concerns revolve around profitability and price action.

In general, when decision makers try to please the markets, it is a race to the bottom. Markets extract their short term profits, but then move on, because the fundamentals got weaker.

Therefore, I think the price impact should not be driving the decision. It is impossible to model the market reactions anyway.

What is best for Ergo’s fundamentals and sustainability, should be the decisive factor. Markets will align.

Edit: Ergo has also been consistent in communicating its dedication to sustainability and strong fundamentals. I believe that this is what the markets (or whale supporters) also expect. Therefore, trying to please the markets might even lead to a lower price. In reality, there is no way to know for sure. Which is why the price concerns should not drive the decision.

---

### Post #49 — @ll.crypto (2021-12-09)

Hi all,

I have been watching Ergo project for a few months and took small part (~1Gh) in the mining too to get some skin in the game.

From what I read, Kushti’s proposal is to smooth out the mining reward which is a good thing for sustained incentive over longer period of time. We all know that Ergo needs more time to flourish and build the ecosystem out.

I have seen a lot of discussions about price actions. No one can predict how the future may play out and I believe we should focus on the fundamentals. A healthy ecosystem (working products, community involvement, publicity, sound tokenomics) will eventually drive healthy price over the long term. Yes there may be bad days with mining profitability hitting floors and some people may choose to leave for that reason. No only Ergo may undergo such a painful process, Eth and other POW project has gone through similar process in the past.

With concerns over the excessive PoW hash power from Eth, it is going to be likely a bloodbath regardless Ergo’s reward change. Unless something comes up to suck up these hash power, it will bring a huge impact on Ergo and any other PoW projects. I don’t think Ergo should concern the long term reward scheme with some inevitable short-term event like Eth PoS migration.

Looking forward to see more details on EIP from Kushti.

cheers,  
llcrypto  
/end-my-first-post

---

### Post #50 — @glasgowm (2021-12-09)

More discussions here

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a70ab5d077374748901898cfcd9c7a09b8a303a9.png)
[reddit](https://www.reddit.com/r/ergonauts/comments/rce3i1/how_would_you_vote_on_the_emission_softfork/)

### [r/ergonauts - How would you vote on the emission soft-fork proposal?...](https://www.reddit.com/r/ergonauts/comments/rce3i1/how_would_you_vote_on_the_emission_softfork/)

59 votes and 38 comments so far on Reddit

---

### Post #51 — @LaVieDeReve (2021-12-09)

It mean less reward for miners ![:confused:](https://emoji.discourse-cdn.com/twitter/confused.png?v=10 ":confused:")

---

### Post #52 — @bigoogawoogla (2021-12-10)

Your perspective is on point.

---

### Post #53 — @bigoogawoogla (2021-12-10)

I oppose this proposal.

I oppose it simply because it’s what every other chain would do, which isn’t aligned with the ethos of calculated **risk** for unrealized gain. There are already great dapps on our L1. As interoperability increases, the transactions will only increase from there. Leave the emissions as is, and let the network naturally evolve.

We already had our baptism by sea during crypto winter. I think we stay the course and wait for the baptism by fire when a big market correction hits in a couple bitcoin cycles.

The beautiful thing about this experiment is that it’s open source. If we fail the lessons we learn can be used to create something better.

---

### Post #54 — @HelixEvo (2021-12-10)

OK, so what has come to light in order for the current emission rate to no longer serve purpose? The adoption of pools I guess?

Unfortunely what I see is also a lot of pool hoping and rented hash power. How can this be challenged, as if the reward per block is cut to say 3 ERG, and the price does not start to enter the ball park of ETH price, then the majority of smaller miners/farms wont be able to continue with suplying hash.

ERG is on the same page as ETH when it comes to power, a bit better, but not a lot.

So say a miner has ~5GHs. At current diff that would get them approx 13 ERG a day right now… Cut the reward to 3 ERG a block and I would estimate they would be down to 0.6 ERG a day.  
Going on ATH price, that still is not going to be covering the cost of power for many small miners and not much profit for big ones either.

There are so many variables we currently do not know right now, especially how much hash is coming this way in the next 6-8 months and what that is going to do to the difficulity.

I dont know, it feels rushed to me… Also maybe the calcs are way off, but thats how I see it right now.

P.s. I tried solo mining on a solo pool with 8GHs for two days. Got nothing, most of the blocks found by rented hash power.

---

### Post #55 — @TypoDaPsycho (2021-12-11)

I agree. The short term price concerns are not reflective of Ergo’s ethos and vision, not in the slightest.

This cannot revolve around short term price, this is about network security and Ergo’s survivability years, and possibly decades from now.

I’m starting to see the benefits of node only voting for protocol changes/EIPs.

---

### Post #56 — @HelixEvo (2021-12-11)

I agree, you can’t knee jerk on the short term price, but we can’t tell the future of what the price will do.

You mention security…

Well if the profit balance for miners is not great, then you will have security concerns because of the lack of decentralised consensus and a low network hash being easier to rent and get control of.

I personally just don’t think planning ahead not knowing price is a good idea.

Say you make that change today. My view would be that you kill the network until price rises, as all miners that need to recoup hardware costs etc will want a good profit coin, some that own the hardware and have low energy costs may hedge their bets and stock up.

Considering energy prices and policies being pushed through, I would not count my chickens just now on energy prices keeping low even in the cheap countries as a safe bet right now either.

---

### Post #57 — @Haskell_plus (2021-12-12)

I have not yet seen any research with clear indicators that a soft fork is required for any purpose concerning emissions, no simulations, no evidence that one is required for any purpose, no examples introduced from other project’s, and no guarantee of protocol security after introducing such a soft-fork.

The community that has adopted Ergo and its fundamentals has done so considering the current emission schedule, myself included, with this in mind it should be important to weigh the growth and adoption of Ergo before the emission schedule was brought forward as a ‘possible issue’ concerning security and miner reward when the current schedule ends - which let me remind you looked like a good option at the conception of the mainnet.

Let me be clear on my own position - I am not opposed to a Soft-Fork if this is something miners need to ensure the security of the protocol after the currently scheduled emission’s, I am however involved in a DeFi project that is Ergo centered that began before this emission conversation started and honestly I believe that if given enough time our community ( that has grown 10x in less than a year) will continue to bring value to Ergo through contributing in many many way’s some seen and some unseen, the [sigmaverse.io](http://sigmaverse.io) page has exploded recently, the EF has a legal identity, we see recent projects like ErgoDex creating value for SigUSD and integrating with other chains, we see plans for wbtc on Ergo, plans for Bridges to privacy chains, bridges with Solana and more!  
All of this started before the emission schedule conversation!  
There are people working toward creating pathways for protocol security and ensuring the success of the initial design of the protocol emissions if you just look into all the projects involved in Ergo, imo there is no way for any 1 person to understand all of the developments in our space so good luck if you make the attempt to.

I want to encourage miners that are actively mining to consider the growth of the last year, and set aside every other protocol you know of and think about what it means to be a part of the Ergo ecosystem, and how a non-inflationary currency that you are mining will have opportunity to prove to the world that we do not need inflation to be a part of economic policy’s.

---

### Post #58 — @sandor (2021-12-12)

The emissions proposal is introduced because transaction fees and storage rent is not enough to secure the participation of miners in the network, at least not in the current state.

This was already the issue before because Alex tried to introduce storage rent every 3 years but it failed, so another way must be introduced.

The emissions soft fork only exists to add more time for the network to mature. More time so means more research towards storage rent and more time for Ergo to show it’s value to the world.

It is true that Ergo has evolved a lot the last year, however which coin didn’t? Also, have you seen the volume? Low number of transactions mean low income for miners for transaction fees.

Overall, I don’t think that the proposal has negative intention. However I do think there is a big risk at the time of the emissions change.

---

### Post #59 — @Haskell_plus (2021-12-13)

![](https://avatars.discourse-cdn.com/v4/letter/s/dc4da7/48.png) sandor:

> The emissions proposal is introduced because transaction fees and storage rent is not enough to secure the participation of miners in the network, at least not in the current state.

Let me highlight your words here : “at least not in the current state”

If you think Ergo will be in the same state a year from now as it is today you obviously do not give any credit to the projects that are working towards building value for Ergo, I am personally offended and disgusted that anyone would disregard my own ambitions to build out a lending platform that not only drives value for Ergo but also has the oppotunity to change the world on many levels.  
I agree the proposal has no negative intention and I have also committed to support the vote the miners decide , yet a vote for a longer emission tail through utilizing a smart contract imo is a vote against the projects that are currently building on Ergo - To this date all projects building on Ergo have obviously adopted the current emission schedule, count those projects yourself, let me know what you come upwith…  
Without clear research about why the emission schedule should change I see no good need for it, personal argument is not enough for me, show me the facts, if you cannot show me facts than shut up and stop arguing for the emission extension  
Or give a personal opinion about why it will help anything - I will then compare it to a lack of clear research and see which position holds the most weight.

---

### Post #60 — @HelixEvo (2021-12-13)

In essence nothing is changing regarding the time to mint all tokens right. It’s just a vast majority of them will be held in this smart contract.

I know Alex explained already the working of this, but I still feel a little anxious that ~21 million ERG is going to be sitting in a contract somewhere. Like a honey pot attracting the bees.

As a miner, I don’t mind it happening, although saying that, if it’s changed and the price does not do much, then I’ll be hashing to another token, and I’m sure I won’t be the only one. This in itself is a risk to the network as I’ve previously said.

It’s a risk in my view, but the coders are a lot smarter than me, so…… What will happen, will happen.

---

### Post #61 — @kushti (2021-12-21)

It seems the softest option is the most popular. I made like 90% of the code I believe, need to cover it with tests and also test in a devnet, then in the testnet.

I also just made EIP draft public [[WIP] EIP-0027: Emission Soft-Fork by kushti · Pull Request #52 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/52/files)

And we will have community chat on Thu, Dec, 23rd, 8PM UTC over Reddit (/r/ergonauts), please join!

Thanks for the discussions, a lot of good thoughts to consider really.

---

### Post #62 — @glasgowm (2021-12-21)

<https://www.reddit.com/r/ergonauts/comments/rlnw5p/community_chat_8pm_utc_this_thursday_emission/>?

---

### Post #63 — @Oleg (2021-12-27)

Changing the emission or supply cap is against the fundamentals:

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a70ab5d077374748901898cfcd9c7a09b8a303a9.png)
[reddit](https://www.reddit.com/r/ergonauts/comments/rpmejl/vote_no_on_emission_change_eip0027_monetary/?sort=new)

### [r/ergonauts - Vote NO on emission change (EIP-0027). Monetary policy cannot...](https://www.reddit.com/r/ergonauts/comments/rpmejl/vote_no_on_emission_change_eip0027_monetary/?sort=new)

2 votes and 33 comments so far on Reddit

---

### Post #64 — @haumeris28 (2021-12-29)

I like this idea, I think this will benefit the Ergo ecosystems long-term growth and stability - Lukas

---

### Post #65 — @WilfordGrimley (2021-12-30)

If an extension to emissions is to take place, it is in the best interest the Ergo platform for it to be done in such a way as to avoid manipulating the original emission contract and reject this fork as proposed.

A similar emission curve can be achieved using a crowdfunding contract and require no forking.

From Ergo’s Social Contract:

> …Anyone can join the network and participate in the protocol without permission. Unlike the traditional financial system, **no bailouts, blacklists, or other forms of discrimination should be possible on the core level of Ergo protocol.** Insider advantage should be minimized…

And again from the Social Contract:

> This might be referred to as “Ergo’s Social Contract”.
>
> **In case of intentional violation of any of these principles, the resulting protocol should not be called Ergo.**

If this change is pushed, miners that are unwilling will have their transactions effectively censored. A fork should occur: real Ergo will be the one that did not accept EIP 0027, those that accept the change will lose the right to the name as per the social contract.

[u/fantoboyXX9](https://www.reddit.com/user/fantoboyXX9)’s claims about censorship are valid: If a miner who does not accept this change later (after reduced emmisions) mines a block and them attempts to spend the ERG in the emission box, nodes that accept EIP 27 will ignore that miners transaction.

Accepting this proposal is accepting censorship at the core level, it is accepting an existential fork: the resulting blockchain will not be Ergo as outlined in it’s Core Principals/Social Contract. It will have to choose a new name.

I am still in support of the extension of emissions, but not hastily, and not such that the original emission contract is modified. This proposal is not something that miners should need consider or that warrants a soft fork; extending emissions is possible using crowdfunding.

---

### Post #66 — @WilfordGrimley (2021-12-30)

Crowdfunded re-emission could follow a similar proposed emission curve and include simple incentivization for donors. It would serve the same purposes of incentivizing network security in the long term, reducing the total available supply for a long period, while at the same time providing the everyday people Ergo is designed to benefit access to a long position.

Incentivizing donors could be done a few ways, I think awarding them anywhere between 0.01% to ~4.4% (same as the foundation) of future emissions from their crowdfund could be fair.

In this scheme a secondary token is created representing the stake of their donation in relation to the entire donated sum (similar to a liquidity token). Call it xERG or EFD (Ergo Futures Donation) or something. xERG is automatically burnt as the re-emission contract awards block rewards (to miners and donors).

If the future token is designed to be fungible using a centralized re-emission contract or some standard defining factors, it would inherent some useful properties:

* It could be used as collateral in a collateralized smart contract mining pool as outlined in [this research paper](https://eprint.iacr.org/2021/846.pdf) from Ergo’s first Hackathon, and as proven by [Bypassing Non-Outsourceable Proof-of-Work  
  Schemes Using Collateralized Smart Contracts](https://eprint.iacr.org/2020/044.pdf).
* It could be used by any other dApps that would like to provide loans, or prove their long term commitment to the health of their dApp and the Ergo Platform.

With such a scheme, crowdfunds could be created as often as the market/community deemed it adequate to prolong the emission of ERG. **There is no need for a fork, Ergo can already support this prolonging of emissions.**

As a miner, my hashrate will not be in favour of this existential change to the network and abolishment of fundamentals.

As an ERG holder, I would happily donate to a futures fund that pays for prolonged block reward emissions. I recognise that the long term value of the asset I am holding is dependant on the profitability of miners. I also recognize that it will be essentially worthless if EIP 27 is accepted and it is forces to change it’s name to notERG as per the social contract.

---

### Post #67 — @Oleg (2022-01-01)

The problem with the EIP-0027 proposal is that on close inspection it is shown to infringe on some very basic principles laid out in the [Manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/). I urge the community to pay close attention to this. This is not a small change. It’s fundamental to what ergo is about. It is not a change to be taken lightly.

# It introduces censorship and the freezing of coins

This soft-fork cannot be compared to soft forks as seen in the Bitcoins’ ‘SegWit’ soft-fork. Unlike that one, this one actually **forces** non-upgraded nodes to **send their money** against their will. This is much, much worse.

> *"Ergo protocol does not* ***restrict or limit any categories of usage*** *. This is necessary to remain resilient. We certainly can advocate cooperation,* ***trade*** *, and human values; however,* ***we do not enforce them.*** *" -* [Ergo Basic Principles](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/)

‘Mining’ is a form of **trade** . Miners offer work and in return get a payment as stipulated in Section 6.1 of the White paper. The soft fork introduces new consensus rules which will **force all miners** (even those that don’t want) to enter a **trade** in the form of a new contract which some may not voluntarily wish to enter.

This creates **censorship** . The soft fork makes it so that if a miner refuses to participate in the new **trade/contract,** he is punished by having his entire reward from the original issuance contract censored by **the network** if it is confirmed that he “dared” make a transaction that ignores the new contract.

From the perspective of this (" *I’m free to not enter contract* ") miner, the second he finds a solution, he now has a claim to 67.5 ERG inside the emission box. it’s his right to send 67.5 from the box to his address, ***It’s his money*** , Just as it would be his right to send 10 ERG from any other address he controls. If the network rejects the sending of one’s money (in the name of ’ **forced** ’ trade) it is **censorship** .

In my opinion, this puts the whole concept of coin ownership on the platform in jeopardy. We shouldn’t touch people’s money. We shouldn’t infringe on ***coin ownership.***

Ergo should first and foremost be a **safe and reliable** place to store one’s money. Let’s keep it that way.

# It makes ERG no longer ‘public money’

> “Ergo is committed to being **a tool for Regular People** . Ergo is a platform for **ordinary people** , and their interests should not be infringed upon in favor of big parties.” - [Ergo Basic Principles](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/)

Ergo is meant for regular people. Not just “community members”, *regular people* i.e. the **public** .

If the money is to remain **public** , it must not deviate from the issuance contract that was first **publicly announced** . If it doesn’t follow the contract, **as law** , and is later changed by the ‘community’ it becomes “managed money”.

If the core developers can “renegotiate” the contract with the community, then the contract is no longer between the public and devs at all, it is now a private matter between devs and ‘community members’ and thus, the money - **ERG** is not public anymore. From the perspective of the public, the money is now “privately managed”

**community managed money** means you need to trust the community members to manage the money wisely. This can involve researching the hierarchy (who’s " *popular* " who’s the " *leader* ") to learn who has the most influence on the money and whether it is safe to put one’s savings on the platform.

I believe Ergo should be just like Bitcoin (in terms of *money reliability* ). Nobody “manages” monetary policy in bitcoin. There is no “community” that “tweaks” the supply curve. Bitcoin is ***public,*** that’s the ***point.***

---

Looking at everything together, (EIP-0027) is going to turn ERG from a reliable, stable, and ‘public’ form of money that respects *ownership* and the *right of free trade* into a *community-managed money* where the money is not public and not contractual, but simply managed privately by a community who may even **restrict or freeze** the trading of one’s money based on some “community majority votes” and other internal considerations.

It would be very sad if that happens. Let’s keep Ergo a ***reliable*** , **safe** , ***fair*** , and ***stable*** platform for money. That’s what people want! The **public** wants **public money,** not private money **.**

# There are alternatives to the *EIP-0027 soft-fork*

I believe that if the community gets together while sticking to the core ‘Ergo Basic Principles’ we can come up with something much better while preserving ERG as reliable stable money.

The best way to do so would be to create an entirely new emission contract with a **new token** of some kind.

This new contract should be a ’ *voluntary open public contract* ’ just like the original emission contract.

For this new emission to not be considered inflation, the new emission must ‘emit’ something that is sufficiently different in terms of ***utility*** and ***meaning*** from the platform’s main token (ERG).

This is where we get creative. This new token can be for anything! We just need to think of some ***new usage*** that will require a new token.

I’ve personally thought about NFTs. What if we have NFT’s that can be mined and are supported by Proof of Work. This will create real scarce NFT’s backed by the real physical world, how about that? That doesn’t exist anywhere as far as I know.

Or maybe this new token will be needed for some application or service on the Ergo platform. Something cool and innovative. I’m sure we can find something.

We can also attempt to reduce the current supply of ERG by offering the miners **something new and valuable in the future** if they voluntarily (as individuals) each, on their own, agree to lock up ERG tokens in a contract.

At the end of the day, The miners don’t need ERG specifically. All they need is some type of reward with a monetary value. Let’s not ruin ERG’s value to fix the emission curve, let us instead create a new value on top of ERG in the form of something new that the Miners can be rewarded with.

---

### Post #68 — @WilfordGrimley (2022-01-01)

I agree with everything that you have said here, [@Oleg](/u/oleg).

The censorship implied by this EIP is the core issue. It is more like a delayed hard-fork than a soft fork. As you have said, nodes that do not upgrade will have their transactions censored. The first time a miner attempts to claim their block reward after they *should have* sent 12 ERG of it to a different box we will have two different chains: The original chain with the right to the name Ergo (as per the manifesto) and the new chain that accepts EIP 27.

I don’t want to see this community split in half over fear that the emission contract is too aggressive, and I don’t want to see any devs leave or have to split their resources to support two different chains.

There is so much room within the time frame of the next ~6 years for us to find better solutions for Ergo.

Sidechains, crowdfunded block bounties, new tokens, Smart Pools features any of these things…

Lets build the tools we need, and have the discussions we need to have to make Ergo work.

When I wrote (with a lot of help) [this paper](https://eprint.iacr.org/2021/846.pdf) on Crowdfunded Smart Contract Pools for Ergo, I did so inspired by the unique need to creatively prolong emissions. We don’t need to destroy what ERG is, and what Ergo represents.

If anyone after reading the entirety of this thread is still convinced that EIP 27 is the best or only way to prolong emissions I will beg you to instead consider attempting to fork Ergo directly. Make a new chain, make a new asset, I’ll mine both because I know the tech is good. Ergo comes with a social contract, it is of vital importance that we work within it.

---

### Post #70 — @Oleg (2022-01-03)

Yes, it’s sad to see people just throw law and consistency out the window. They don’t seem to understand why it is important.

That said, I just thought about something concerning. Doesn’t this soft-fork create a persistent reward and reason to 51% the chain? Right now if you 51% attack, at most you may be able to double spend. But with this fork, you could 51% out of the re-emission contract and get a ***higher reward per block!*** The “attacker/saver” could even claim he is not “attacking” but simply collecting his miners’ reward as stated in the White paper.

So this fork creates both a ***reward*** and ***legitimacy*** for attacking/saving the chain by 51% work. We could be seeing constant chain splits all the time due to this soft-fork.

This debate may not even end at block 699,393, it could be ongoing, with one side claiming “*principles*” and “*no censorship*” and the other claiming “majority vote” amongst other reasons; and the chain keeps splitting…

This could hurt stability. Just because a consensus may be reached now, doesn’t mean it will remain so in the future. The supply curve could literally be shaped by community back and forth conflicts.

Going further, this could also make actual *malicious 51% reorg attacks* more feasible. We are literally funding the attacking side with more money than the honest network. This allows him to spend more on hardware and electricity than the main network. The attacker could calculate that if he wins, the community and miners on the “anti-censorship” side may join in, since it is an opportunity to abounded the re-emission contract. This is bad security design. It breaks a key aspect of PoW security.

---

### Post #71 — @AmazeQ (2022-01-05)

There should not be need of extending emission if project believes in their initial-vision values. Drastic reduction at this magnitude in rewards will be only attractive for early adopters or ergo foundation members as they will be holding large volumes and price rise will help them but NO ONE ELSE.

Do you think Bitcoin would have gathered the same amount of trust that it has if Bitcoin has, one day, drastically deviated from its supply and emission schedule just to raise price for short term?

Ergo foundation should stick to it’s foundational stones and should start working out storage rent economy rather than TRYING TO FIX WHICH IS NOT BROKEN, and not to mention, end up creating havoc and uncertainty towards whole project and their believers.

---

### Post #72 — @sandor (2022-01-06)

I can’t see how changing the emissions schedule with a soft fork changes the values of Ergo. I can’t see how they relate.

Only half of the coins are in circulation and people can still mine it. The reduction is not drastic at all (minus 12 erg). This coin can be perfectly distributed among all society without any issues. I don’t get your point. It might even distribute better later as more miners will join.

It will take a many more months to be listed in major exchanges so less people have access to Ergo now. If we slow down the emissions more people will be able to access it while still on emissions.

Also, Ergo will be the first PoW coin to have to solve the problem of after emissions even with the soft fork. Not many papers exist targeting this issue and real-life conditions are often different than experiment models. Ergo took example of Bitcoin and it seemed like storage rent would work. However Bitcoin is a completely different case being the first cryptocurrency so all the calculations are on a wrong basis.

Also it’s good to notice that it is not “one dev” that does any changes. It is a proposal and in the end it is the miners they will decide the outcome.

---

### Post #73 — @AmazeQ (2022-01-06)

Not the miners, pools mining Ergo will vote not individuals.  
How come it doesn’t reflect foundational values? Supply and emission does not come under foundational values of project? Foundations on which Ergo went public, now what developers no longer believe in that?  
Bitcoin is the first crypto currency but Ergo is not, It had studied and see many crypto projects and learned from them, so why extending emission schedule by more than 3 times came up now after 2+ years?

How come emission schedule went 29+ years from 8 years is not radical and drastic? is more than 3 times change does not qualify it for drastic?

Rather than changing emission 3 times and cheap middle-out, they will be focusing on finding answers for storage rent structure in next 6 years and prove their mettle as unique crypto solution in the world.

---

### Post #74 — @sandor (2022-01-06)

Ergo is following a research based path but there is no research about alternative ways of rewarding miners.

Right now all the developers are focused on the growth of the ecosystem and not on research. Dapps, dexes, smart contracts, bridges, wallets, marketing, listing on exchanges, partnerships etc. This will go on very intensively for at least one year or maybe more. The ecosystem must expand during this year.

If we don’t have all that there is no point researching rewarding of miners after emissions end. To not be pressured about emissions and focus on other things, this soft fork proposal helps. As long as there are emissions, there will be miners.

I find the proposed SF to be quite mild. The reduction is by 12 ergo. I don’t think we will have any price impact as it is too low. We would have this reduction in a few months anyway. Then when we reach 15 erg we will have a standard reward of 3 ERG.

As for the values, the tokenomics don’t change. The percentage is the same, the public distribution is the same but in more length.

Although I see your point, I also see that Ergo needs to focus on other things right now than trying to find a solution for a problem that is not yet here. There are other things that need to be focused on in order to reach adoption.

---

### Post #75 — @TypoDaPsycho (2022-01-08)

Full node is required for voting & is not limited to only mining pool operators.

Anyone can run a full node if they wish.

---

### Post #76 — @Ergosmergo (2022-01-08)

I think users should never be beholden to developers or miners while I respect all Core Dev team and their decisions. I think we should leave the re-emissions the way it is to not disturb monitory policy as a lot of users I have spoken to about the re-emissions believe if its that easy to change the monitory policy it would also be as easy to enlarge or lower the overall supply cap. Ergo was advertised for a long time as a short tail emissions block chain and if a long tail emissions schedule is added it goes against one of Ergos core fundamentals.

Ergo Foundation - " Economically Sustainable

Unlike Bitcoin, where block reward is halved every four years - which leads to a long tail of emissions - Ergo block reward will fall to zero after 8 years. After 8 years, a max supply (100 million) will be set for good.

Miners will be paid from transaction fees and storage fees once the block reward falls to zero in 8 years after launch date."

---

### Post #77 — @alpha-bravo (2022-01-09)

I’m a miner and created an account just to reply to this topic.

I say that Ergo current emission is very high, the emission curve is very unusual, I say that if nothing is done and there is no buying force soon (and there won’t be) the price will go below $1 in some months, as miners need to miner and pay costs, so some who stopped believing in the long-term project and started dumping their mined coins months ago, I myself have hundreds of coins on hold believing in a rally, but looking at In the current scenario, with the current issuance of ergo per mined block, I see prices going down further until the tier 1 exchange listing is seen (and it will take a year and a half yet).

In addition to being a miner, I was a Dev of some crypto coins and I say that the emission line is the key to the success of the coin, coins with low supply for example tend to appreciate more, coins with low emission per mined block also have more chances of success when there is buying force, Ergo is making mistakes in having a very abrupt emission line, with many reward coins per mined block, the miners will take this and sell it as soon as they receive the reward to pay their costs, mainly with electricity, don’t blame the miners for this as they always do this in any currency, if you find this wrong then it’s good to leave the world of cryptocurrencies as miners have a lot of work, costs and problems just like anyone else has (just like traders ).

If you sit there and think that only development and good news are relevant to the project, I say you will fail, the emission line of this coin has to be changed, lower the current ergo amount to 5 per mined block, this in short period of time will have a huge impact on prices, as fewer miners will have ergo and less ergo in the market which will lead to a rise in prices when there is buying force (when erg is listed on a new exchange), I am a miner and I am in favor of a reduction in the emission of ergo per block mined, I will earn less coins mining but these few coins will have a value much higher than before and therefore, there will be no changes for me, but for the market this will be very good, remember the law of supply x demand.

I have seen people commenting here without really understanding the process that leads to success, I suggest that those who understand little do not have an opinion as they can manipulate other people who do not understand also to make a bad decision, so it is good to see people well qualified interacting here, and another point, changes are important, don’t be afraid, soft-fork or hard-fork is inevitable over time, bitcoin is an example.

Greetings from Brazil to the world.

---

### Post #78 — @ErgoPrism (2022-01-09)

Thanks for your reply. Good read. It seems that most are in favor of the soft-fork proposal and the major consideration is the immediate block reward reduction amount and the subsequent pace that it’ll support with the 3 month reward taper moving downward. Now that the Foundation does not receive any more Ergo from block rewards, this is the perfect time to consider this type of proposal and the implementation of a vote as soon as possible to make it happen. Excited and optimistic about the results. This is the best thing to do for Ergo short and long-term. Best of both worlds. A movement in the right direction while keeping miners’ voices front-and-center. Emission right now is aggressively inflationary (about 47,520ERG/per day currently) and it is diluting the value of each token already in circulation. That creates a dangerous situation in terms of profitability for miners as you said. Emit the tokens at a better, slower pace to match the natural expansion of this diverse ecosystem that is being fostered. I think most people are on the same page that this is necessary and imperative to do as soon as possible.

---

### Post #79 — @AmazeQ (2022-01-09)

I don’t agree with you and how are you able to decide most are in favor? Based on what?  
If you ask me, I see more people are against it (Including miners). So don’t pass judgements.  
Ergo was built and advertised with tagline of no long tail emission-small carbon footprint etc. And question needs to be asked now, Why as soon as contribution to dev foundation ended they want to go from small-tail to long-tail emission? Just increase price of their gathered volume? Why didn’t dev team thought of this 2 years ago and implemented it?

This play which is happening to just bump the price, will gonna turn out to be quite bad in long term for Ergo as people will not put trust and faith in projects which changes their fundamentals at “Convenient times”.

Value can also be achieved by implementing use-cases which drives mass adoption and generate user activity via DeFi, NFTs, Interoperability, Smart contracts, So much more. Instead of diverting efforts of implementation team to rather UNWANTED and RADICAL ideas like changing fundamental core principal on which Ergo was created.

I am seeing people who are supporting soft fork are mostly those who already gathered ton of ERGO and now want price appreciation AT ANY COST.

Stop supporting them blindly!

---

### Post #80 — @alpha-bravo (2022-01-10)

Well, you don’t understand what a long emission line is capable of providing a coin, but you see, the ergo emission line is currently very abrupt, it will end in a few years, after which miners will survive on transaction fees and other things that the Devs do, but that won’t be enough, as when the ergo emission ends there will be millions and millions of supply in the market and it will likely smudge all possible markets causing along the emission curve a steep drop in prices like we see today, what happens with expanding supply and insufficient purchasing force causes prices to fall, people seeing prices fall and soon will think there is something wrong (people are emotional), when prices fall and miners have that surviving with network transaction fees, doing a quick calculation, will cause massive drop in network hashrate and as a consequence and other unstable things, or even centralization of miners where only the big ones will manage to survive, as a long emission line of decades makes mining remain decentralized and there are small miners with few GPUs, in addition to stability and security for the network as a decentralized network in mining is effective in keeping away possible attacks from 51%.

in addition to all that mentioned, when you have a long emission curve, there will be less coins being mined and as a consequence there will be price appreciation even if there is a weak buying force, remember the law of supply x demand, what is happening with Prices on ergo today is that there is a lot of supply (many ergo per block mined) and little demand (more coins than available buyers) and this causes an eviction of coins from exchanges as miners are forced to sell their coins to pay expenses.

3 to 5 ergo per mined block will cause prices to recover in a short period (only news of this occurs I predict prices at US$10) and will provide greater long-term reliability in the network as we will have a protected and reliable network for decades with the long issuance line, so Devs don’t have to worry about ways to reward miners who will be leaving the network because the transaction fee is not enough for them to pay their costs and the Devs have to increase the transaction fee just to try to increase it. the profitability of the miners, in addition to the possible problems with new storage technologies (which will not work well).

I’d rather follow Bitcoin and be predictable when it comes to networking and mining than being an ethereum of life that I don’t know if the future will work or not (and it won’t work for them, the POS will destroy them, you’ll see what I’m talking about year next, and vitalik will suffer a lot kkkkk)

---

### Post #81 — @alpha-bravo (2022-01-10)

Ergo needs to be predictable, just like Bitcoin, keep POW where it’s always worked, forget about this carbon emission and global warming bullshit, keep developing good, good community relationships, continue expanding (new listings even if it’s small/medium exchanges, having new technologies mainly in the metaverse (where will be the future, the occult elite wants this).

I won’t say anything more about the proposal, I say that I am in favor as a miner and trader, and I end my opinion here.

In short: **I am in favor of increasing the ergo emission line, which as a consequence will decrease and reward per mined block, either by the proposed way (soft-fork) or even by more difficult ways (hard-fork**, actually it is not so difficult so, i’ve dealt with this in cryptonight algorithms, as i said, i was a DEV a few years ago, now holding back from being a trader and miner).

Greetings from Brazil to the world.

---

### Post #82 — @renato (2022-01-11)

I don’t know if this has been mentioned before, but wouldn’t it be much simpler to not have a re-emission schedule at all and just soften the emission rate to extend the emission schedule up to the desired network height?

Not only much simpler to implement but also much simpler to explain to the current community and to new miners and user entering our space.

What am I missing?

---

### Post #83 — @sandor (2022-01-12)

This requires a hard fork, which we want to avoid.

---

### Post #84 — @AmazeQ (2022-01-12)

I can see, you hold Ergo in large volume and just need price appreciation in short period of time (As you mentioned $10 in wake of news only). So don’t act as you care or understand about Ergo future (or for that matter Eth future). You will support anything which drives prices go up in short period, even though it will breaks credibility of project and it’s uniqueness which makes it stand out in 7000+ projects.

I don’t need to say more who just needs to make money.

---

### Post #85 — @alpha-bravo (2022-01-12)

Money? if i think about money in the short term i would be mining ravencoin or ethereum, but i am betting half my mining power with ergo because i see that this coin project has a future.

So don’t say what you think is right, because you were wrong on this point.

---

### Post #86 — @sandor (2022-01-12)

The soft fork corresponds in about ~20% rise in price if miners want to get the same reward. In crypto world the 20% is literally nothing, especially since Ergo is more than 75% down since ATH.

If Ergo wanted to have real short time gains as you say, it would use other mechanisms such as halving or coin burning, which would be much more beneficial than this soft fork. However, it doesn’t. Why? Because the goal of the soft fork is to prolong emissions for several years to allow more research in this field and not to make the price pump.

---

### Post #87 — @Stalker (2022-01-12)

As a miner, I don’t like this initiative.  
This is a very crude initiative!  
At current value, this would be a loss.  
If this initiative were considered together with specific development plans = marketing, which would give reason to expect an increase in the price of the coin, then it would still be possible to somehow positively evaluate this initiative.  
In this way, like initiative posted, I am against.

---

### Post #88 — @Ergosmergo (2022-01-12)

I’m not a massive fan of burns personally, In ERGO I don’t think coin burning can be done in ERGO in the traditional sense due to the the storage rent mechanism and would most likely end up in a re-emissions contract sometime down the line ?. correct me if I am wrong.

---

### Post #89 — @glasgowm (2022-01-13)

Community polling puts it at ~90% support.

This SF is not related to price as has been reiterated, the reduction is negligible (~20%). Especially considering the Puell Multiple. (Miners tend to sell fewer coins as price dips). It’s solely for ensuring the ecosystem has enough time to mature as the first storage rent payment takes from 2023 and that is cutting it fine.

This has been discussed for years by the devs. Previous SF proposal to change the storage rent period was rejected and the soft-fork governance paper used describes this exact scenario (and so does [the thread where storage rent was first posted](https://www.ergoforum.org/t/storage-rent-details/256))

---

### Post #90 — @Ergosmergo (2022-01-13)

Will mining pool operators be able to abuse the voting by voting on behalf on individual miners ?. Voting should be as trust-less as possible. I believe mining pool operators have to much power over swaying the vote in the current proposal. I am aware mining pool [Getblok.io](http://Getblok.io) adding Proof-of-vote to avoid voting being abused. Voting should be counted correctly via recording box’s.

Voting mechanisms past and present have always had their flaws. Will there be access to vote tally within the blockchain to ensure votes are counted correctly. Technological complications will bar some people from voting and that is one of my main concerns are we given to much power to miner vote rather then user vote and in the current vote I see pools having a lot of leverage over the vote.

![](https://i0.wp.com/www.getblok.io/wp-content/uploads/2021/10/GETBLOKIO-FINAL-06-1.png?fit=32%2C22&ssl=1)
[GetBlok.io – 9 Jan 22](https://www.getblok.io/getblok-proof-of-vote-ergo-eip0027/ "05:03AM - 09 January 2022")

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/7/770808cf98914e7bde9f631280adeca429720bc5_2_690x430.png)

### [Ergo Emissions Soft-Fork and Proof-Of-Voting Tokens](https://www.getblok.io/getblok-proof-of-vote-ergo-eip0027/)

Ergo Emissions Soft-Fork and Proof-Of-Voting Tokens From the GetBlok.io Team  January 8, 2021  Background  Lately, there has been lots of talk in regards to a new soft-fork on the Ergo blockchain, …

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a70ab5d077374748901898cfcd9c7a09b8a303a9.png)
[reddit](https://www.reddit.com/r/ergonauts/comments/rzz87w/getblokio_is_launching_proof_of_vote_pov_tokens/)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/9/9864d4bafc735d2355714c48db4ebfa32ee59647_2_666x500.jpeg)

### [r/ergonauts - GetBlok.io is launching Proof of Vote (PoV) tokens to support...](https://www.reddit.com/r/ergonauts/comments/rzz87w/getblokio_is_launching_proof_of_vote_pov_tokens/)

39 votes and 8 comments so far on Reddit

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/5/585fee1a8040b36bda6a7356c78d13f3b31ff028.png)
[The Conversation](https://theconversation.com/blockchain-voting-is-vulnerable-to-hackers-software-glitches-and-bad-id-photos-among-other-problems-122521)

![](https://images.theconversation.com/files/297192/original/file-20191015-98640-irfz02.jpg?ixlib=rb-1.1.0&rect=12%2C355%2C4148%2C2071&q=45&auto=format&w=1356&h=668&fit=crop)

### [Blockchain voting is vulnerable to hackers, software glitches and bad ID...](https://theconversation.com/blockchain-voting-is-vulnerable-to-hackers-software-glitches-and-bad-id-photos-among-other-problems-122521)

Blockchain technology can address some weaknesses in voting systems, but not all of them – and it opens new potential vulnerabilities, too.

---

### Post #92 — @glasgowm (2022-01-13)

Only pools & solo miners actually vote and (at their own discretion). As you said, GetBlok is launching voting tokens, some other pools performed internal polls.

Users vote by switching their hash rate to GetBlok or any pools that agree with their view on the proposal. If 10%+ disagrees they need to participate. I don’t think that is too high a bar all things considered.

---

### Post #93 — @Oleg (2022-01-14)

Seriously, doesn’t this community value the principles of hard money?

If you can play around with emission it’s no longer *hard money*, it’s “artificial”. This can make ERG appear less reliable as a long-term store of wealth.

The original emission was introduced to the public ***as a promise.*** If Ergo wants to be taken seriously as hard money this should never change.

An **honest miner** who solves the puzzle should be allowed to collect the full reward, *as is his right,* from the emission box, as stated in the White paper. No majority should be allowed to change that, just as no majority should be allowed to steal money from an address.

---

### Post #94 — @Oleg (2022-01-14)

What’s worse, is that in Ergo, the emission is basically a smart contract that is no different than any other smart contract in the system. This soft-fork is effectively censoring a smart contract by rejecting blocks where an honest miner withdraws the full amount to his personal address. This is extremely concerning and goes against basic principles.

No smart contract on Ergo should ever be censored. Such a thing destroys the value of the network, this should be obvious.

Also, this soft fork creates a terrible economic incentive to fork the chain in order to collect the original full emission. This destroys a key security assumption of PoW. Are we trying to encourage 51% attacks?

---

### Post #95 — @DarkCastle21 (2022-01-19)

I’m only concerned about what will happen when all ERG runs out. We should be more focused on alternatives to the Storage Rent and Transactions Fees rewards. I read [@kushti](/u/kushti) 's feedback about this proposal but I’m not totally agree about disregards Proof of Stake. It should be considered as an alternative solution if the network can’t be able to survive with rent and fees. I’m not agree about what [@Oleg](/u/oleg) is saying, cause time passes and decisions could changes if is necessary. Perpetual Proof of Work could be a great goal but to realize it we have at least 4 years (for now) to study a solution. We shouldn’t consider alternatives until we couldn’t find solutions. Alternatives are fixes, not solutions.

So I really hope we will be able to adopt hybrid approaches where Proof of Stake and Proof of Work could live together. This is my proposal:

Miners could be rewarded with a little portion of ergs (30% of Storage Rent and TXS fees for example) and some fidelity tokens which allows them to switch to Proof of Stake when they will got all tokens necessaries to be Validators. The necessary fidelity token quantity will increase gradually with Validators growth.

A Validator could earns through the remains rents and txs fees (70% in this case). Through this method Proof of Work and Proof of Stake could lives together and the distribution could be more profitable for miners who are incentivized to become a Validator, and for Validators who will earn fees and rents without electricity costs.

---

### Post #96 — @bigoogawoogla (2022-01-20)

Almost exactly 6 years ago Donald Trump became president of the US.  
What will the future hold in another 6 years?  
What will the future hold in 36 years?

If blockchain is going to make a different in the world, and this blockchain will be part of that difference, then it won’t take 36 years. This change is drastic. Maybe consider something less severe?

---

### Post #97 — @LuckyRainmaker (2022-01-20)

Apologies. I don’t understand why this proposal needs to be so drastic.

From a layman perspective, there are other ways if you want to prolong the reward to miners without messing with emission. One idea that comes to mind is to accumulate current tx fee into a re-emission contract (instead of distributing it to the miners), and distribute it as mining reward after emission ends. As erg tx fee is quite low right now, if you want you can increase the tx fee to provide higher contribution to the re-emission contract.

If you want to change the emission, what stopping you to mint additional coins (let’s say 2.3m coins - to make it even 100m) for the tail end mining rewards?

Thanks.

---

### Post #98 — @DarkCastle21 (2022-01-20)

I’m only concerned about what will happen when all ERG runs out. We should be more focused on alternatives to the Storage Rent and Transactions Fees rewards. I read [@kushti](/u/kushti) 's feedback about this proposal but I’m not totally agree about disregards Proof of Stake. It should be considered as an alternative solution wether the network can’t be able to survive with rent and fees. I’m not agree about what [@Oleg](/u/oleg) is saying, cause time passes and decisions could changes if is necessary. Perpetual Proof of Work could be a great goal but to realize it we have at least 4 years (for now) to study a solution. We shouldn’t consider alternatives until we couldn’t find solutions. Alternatives are fixes, not solutions.

So I really hope we will be able to adopt hybrid approaches where Proof of Stake and Proof of Work could live together. This is my proposal:

Miners could be rewarded with a little portion of ergs (30% of Storage Rent and TXS fees for example) and some fidelity tokens which allows them to switch to Proof of Stake when they will got all tokens necessaries to be Validators. The necessary fidelity token quantity will increase gradually with Validators growth.

A Validator could earns through the remains rents and txs fees (70% in this case). Through this method Proof of Work and Proof of Stake could lives together and the distribution could be more profitable for miners who are incentivized to become a Validator, and for Validators who will earn fees and rents without electricity costs.

---

### Post #99 — @Ergosmergo (2022-01-21)

Adding that 2.3m coins would cause inflation and would go against the monetary policy that’s in place. There is a set number of tokens and this number should not change based on the original agreement that’s been set.

---

### Post #100 — @LuckyRainmaker (2022-01-21)

Fully understood. And I agree that we should keep the monetary policy intact. That’s why my main point is to find another way to solve the post-emission reward issue without changing the existing emission schedule.

---

### Post #101 — @Ergosmergo (2022-01-21)

Blockchain technology has changed so much over time. In the last couple of years, we have seen so many changes to cryptocurrency and I think it’s set to change a lot more. I say we hold off a little on the re-emmisions to get our heads around any upcoming changes. Also, I agree that maybes charging a little more transaction fee to around double what it currently is half going to re-emissions box and a half to the miners could work better than the current proposal. There are other coins I have been studying that run POS and POW systems. There is often some infighting with miners feeling like they have less control over the security of the blockchain or vice versa where validators who have put down a lot of money to become validators often feel like small miners are getting better rewards without locking up their coins. While POW/POS system is good to protect against a 51% attack I think ERGO should always stick to the plan it first laid out and that is to remain a short-tail POW blockchain.

---

### Post #102 — @bigoogawoogla (2022-01-21)

Your idea sounds good, but it is against the ethos of the project. 1 gpu = 1 vote

---

### Post #103 — @polkownik (2022-02-15)

the “value” is always a value - the proposal of EIP-0027 is not a solution, is taking part of the income.

The value of ERGO was? or IS? it’s solutions to the network?

betther than taking income from miners, spreading it into unreal future is to GIVE SOMETHING.

**so my proposal is: no taking that X or R or whatever… use already writed software and ADD tokens, that can be exchangable in future ERGO2 project with bigger emmision, and those who will be mining, can use thos tokens to get new ERGO based currency, connect those two blockchains make them dependable.**

EIP-0027 should be shuted down. Better is to give than taking. **Use the brand that the company has developed for new project, connect those projects. part of current emmision as You proposed for next 7 years, can be tokens for that new project currency for miners**

Find new function for ERGO-1 after emission ends. As software tokens, as keys for something. Something useable.

Hope I helped. I do not agree with taking reward minus X, I vote for giving that part as tokens for future ergo project.

ERGO IS also A BRAND, I think you all forgot about it…

---

### Post #104 — @polkownik (2022-02-15)

my point is that extending the emission of coins will not work. because the Competition on market will be increasing anyway.

Instead of taking some of the coins, from the rewards it is better to add a token that you as a miner will exchange - - for an ERG2 coin (as a successor to the ERG project) in the next ~ 7 years.

**You increase the expectation and at the same time build a new project - with a new coin emission. making positive hype, no one is mining two coins at the same time. Now ERG and future ERG2**

**ERGO is a brand, not only a currency.** There will be some other usability for it after the end of the current emission.

---

### Post #105 — @ErgoPrism (2022-02-16)

(post deleted by author)

---

### Post #106 — @ErgoPrism (2022-02-16)

[@polkownik](/u/polkownik) ^ No. This is probably the worst idea imaginable. Let’s be reasonable and remember the history of hard-forks away from Bitcoin, that ultimately proved unsuccessful (Bitcoin Cash, SV, etc). This soft-fork is a necessary adjustment simply to ensure the maturing of this ecosystem that is still in its early stages. The pros outweigh the cons. Those opposing the change need to vote accordingly as miners. 10% isn’t a lot to ask. 90% is a supermajority. Even Bitcoin soft-forks including the Lightning Network had its critics. This is normal where free speech is allowed. Vote with your hashpower, not your keyboard text.

---

### Post #107 — @Cupierjack (2022-02-23)

Solution: . Each project that is implemented in Ergo should pay commissions for example 10% of its profits to maintain an Ergo bank to pay miners, new projects and votes. That revenue coupled with a storage rent increase could be enough forever. I would also propose that the payment for storage be exponential, since if someone loses the keys forever, the Ergos should return to the network within 2 years. To do this could be al like so:  
1 year - 1 Ergo per wallet.  
6 months - 2 Ergo  
3 months - 4 Ergo  
45 days- 8 Ergo  
23 days- 16 Ergo  
11 days- 32 Ergo  
6 days- 64 Ergo  
3 days - 128 Ergo  
36 hours- 256 Ergo …until wallet holdings are exhausted if no activity.

---

### Post #108 — @Ergosmergo (2022-02-26)

[@Cupierjack](/u/cupierjack) Storage rent is a little controversial to start with even at the rate proposed. I think storage rent is a good idea as dust that’s never going to be used could be recycled back and this is healthy for the network. There is no way of knowing that someone has lost their keys unless they say it directly and even then they could be lying it would be dangerous to put the rates you prepose in place. We have got to remember the purpose of why storage rent is implemented and not to abuse it. Storage rent should be set at a conservative rate there is a difference between charging a little bit of storage rent and draining one’s wallet in a short amount of time due to inactivity.

Someone should be able to store an adequate amount of Ergo over a long period of time for a small agreed-upon storage rent fee.

---

### Post #109 — @TypoDaPsycho (2022-02-28)

Increasing storage rent fees to this degree or altering 4 year fee schedule would require hardfork.

It’s important to remember that non-Erg tokens can also be consumed and redistributed to mining network in form of storage rent.

If an address or “box” has been inactive for 4 years, and can’t pay full storage fee, the box is destroyed and all other tokens held in box are rewarded to miner.

Will probably take quite a while for the non-Erg tokens to become large part of storage fees, but eventually they’ll likely be significant part of storage fees/ mining rewards. Since these tokens can include wrapped assets like tether, USD, ADA, eth, BTC (anetaBTC), etc.

---

### Post #110 — @kushti (2022-03-09)

EIP-27 was activated on the testnet today @ block # 180,384 ( [Ergo Explorer](https://testnet.ergoplatform.com/en/blocks/ce3e9e73638a6c1880a2516d76791f71b8f52696f445f87f2eb737247306f203/transactions) ) . EIP draft updated: [[WIP] EIP-0027: Emission Soft-Fork by kushti · Pull Request #52 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/52/files#diff-eb0e60aa144423c2084fcb3108924ff3a3a2c4a30e90691c50999cf12ddf45b8) .

Let’s have a community chat on mainnet activation over the telegram [Telegram: Contact @ergoplatform](https://t.me/ergoplatform) , on March, 10th, 2022, 2 PM UTC

---

### Post #111 — @polkownik (2022-04-02)

The answer of the miners is clear. ERG mining hashrate is lowest from month and will falling down more

[ERG actual total mining hashrate](https://miningpoolstats.stream/ergo)

---

### Post #112 — @polkownik (2022-04-02)

So if you have money in the bank, bank shoud take it , just because you not spending them all for a while?

No confidence by that to any wallet or network you will earn…

not bad, Stupid idea.

---

### Post #113 — @Ergosmergo (2022-05-01)

Since it takes a lot of compute-heavy work to keep the ledger constantly updated it makes sense that miners should be incentivized and know they won’t be cast aside in the future when the block reward goes or gets smaller.

---

### Post #114 — @Ergosmergo (2022-05-02)

Instability of Bitcoin Without the Block Reward

[cs.princeton.edu](https://www.cs.princeton.edu/~arvindn/publications/mining_CCS.pdf)

### [mining\_CCS.pdf](https://www.cs.princeton.edu/~arvindn/publications/mining_CCS.pdf)

1374.12 KB

---

### Post #115 — @Grayman (2022-05-02)

I read the abstract. This is a pickle.

When Ergo mining rewards eventually get whittled down to transaction fees and storage rent, what will save us from miners being similarly incentivized to cause havoc for the security model?

When the staking rewards for Cardano are no longer significant, do they suffer the same problem of the SPO’s being overcome by bad actors?

The rest of the article reminded me of the good old days, may they return, when I will read such articles with the time available to do the read proper justice.

---

### Post #116 — @Cupierjack (2023-04-22)

Put your money in Switzerland and in 5 years without moving it you have 80% left. That without counting that the bank does not break.
