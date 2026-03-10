---
title: 'Ergo Emission: details, retargeting via a soft-fork'
description: 'ErgoForum discussion: Ergo Emission: details, retargeting via a soft-fork'
tags:
- auction-house
- box
- difficulty-adjustment
- emission-schedule
- ergo-foundation
- ergoforum
- ergoscript
- ergoscript-context
- ergotree
- ido
- mempool
- native-tokens
- nipopow
- oracle-pools
- sigma-chains
- sigmastate-interpreter
- soft-fork
- spectrum
- storage-rent
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-emission-details-retargeting-via-a-soft-fork/2778
created: '2021-10-15'
last_activity: '2021-11-11'
posts_count: 22
views: 7226
likes: 32
glossary_hits:
- Auction House
- Box
- Difficulty adjustment
- Emission schedule
- Ergo Foundation
- ErgoScript
- ErgoScript context
- ErgoTree
- IDO
- Mempool
- Native tokens
- NiPoPoW
- Oracle pools
- Sigma Chains
- Sigmastate interpreter
- Soft fork
- Spectrum
- Storage rent
- Transaction
---

# Ergo Emission: details, retargeting via a soft-fork

> **Forum thread:** [https://ergoforum.org/t/ergo-emission-details-retargeting-via-a-soft-fork/2778](https://ergoforum.org/t/ergo-emission-details-retargeting-via-a-soft-fork/2778)
> **Category:** Uncategorized | **Created:** 2021-10-15 | **Posts:** 22 | **Views:** 7226

**Related concepts:** Auction House, Box, Difficulty adjustment, Emission schedule, Ergo Foundation, ErgoScript, ErgoScript context, ErgoTree, IDO, Mempool, Native tokens, NiPoPoW, Oracle pools, Sigma Chains, Sigmastate interpreter, Soft fork, Spectrum, Storage rent, Transaction

---

### Post #1 — @kushti (2021-10-15)

## Ergo emission contract

There are no magic rules in the Ergo code about emission / Treasury, thus both emission and Treasury are simply boxes created before a genesis block and associated with corresponding contracts.

Emission contract appeared early, probably before ErgoScript compiler was done. Thus the contract done in ErgoTree directly, with some code generation done in Scala. Main function (using some code-generating helper function is *emissionBoxProp* in *ErgoScriptPredef.scala* (in Sigmastate repository, [sigmastate-interpreter/sigmastate/src/main/scala/org/ergoplatform/ErgoScriptPredef.scala at bd1906e3a0a4f93039a357c8d3ca4343b135dcf2 · ergoplatform/sigmastate-interpreter · GitHub](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/bd1906e3a0a4f93039a357c8d3ca4343b135dcf2/sigmastate/src/main/scala/org/ergoplatform/ErgoScriptPredef.scala#L84) )

Basically, the contract, for the mainnet settings is allowing to spend on every block to special script timelocking for 720 blocks to miner’s pubkey, according to a schedule. The schedule is following:

* if height of a block is less that 525,600 + 2 \* 64,800 = 655,200, then constant reward of 67.5 ERG paid
* starting from block 655,200 , reward per block is defined as 75 ERG minus number of epoch multiplied by 3 ERG, where number of epoch is defined (as block height minus 525,600 ) / 64,800 + 1. (division is integer)

For example, for height 655,200, reward = 75 - 3 \* ((655,200 - 525,600) / 64,800 + 1) = 66

for height 1,000,000 reward = 75 - 3 \* ((1,000,000 - 525,600) / 64,800 + 1) = 27 ERG

similarly, for block #2,080,799 reward is 3 ERG, for block #2,080,800 reward is 0

## Soft-forking Ergo emission

There are a lot of concerns about emission to be over in less than 6 years from now. UTXO set growth is quite good these days, but storage rent economy is still not clear.

As total supply must be preserved AT ANY COST, and hard-forks must be avoided, we need for a soft-fork way to prolong the emission. There is no very easy way to do that, but there’s a way possible with a soft-fork (only mining nodes will need to update):

* new re-emission contract to be launched, which is starting paying from block # 2,080,800 and paying 3 ERG per block (or even less, e.g. 2 or 1 ERG per block).
* we inject new tokens into current emission box (possible, as there are no contract checks for tokens there). tokens show how much ERGs should be passed to the re-emission contract
* starting from some height (e.g. 640,000), when miner is taking ERG from the emission box, he should take (in the same box) re-emission tokens according to a schedule (could be simple flat, e.g. 24 ERG per block, end re-emission tokens then to be issued while emission is not less than 27 ERG per block).
* when miner is spending rewards box, he must send amount of ERGs corresponding to re-emission tokens to re-emission contract, and burn the re-emission tokens.

Last two rules can’t be done via a contract (as the emission contract is set in stone), thus we need to impose the rules via the nodes agreement. However, only mining nodes do really need to check those rules, other clients may run the old code. Thus the change is soft-forking.

Later on, via a soft-forking change we can require storage rent to go to re-emission contract as well, for smooth storage rent payments.

---

### Post #2 — @Motomotes (2021-10-15)

I’m a miner and sure some miners would like to utilize their mining equipment for longer or have it retain its resale value for longer, and slowing emissions could help the price of Ergo, yet I personally think Ergo will continue to grow in market share and adoption with the emissions remaining as is, but as an alternate idea for remissions one could maybe make the remission of mining rewards entirely voluntarily, make it so that remitting to the re-emission contract causes some re-emission tokens to be given to one, and then once emissions would be zero, have it so that miners with re-emission tokens can claim emissions from the re-emission contract by sending the tokens back to the re-emission contract along with mining a new block, then after 720 blocks if the new block is still confirmed then the re-emission contract sends them a re-emission, so they only get re-emissions if they have been saving re-emission tokens to collect them.

To further incentivize storing re-emissions by miners, one could make it so that storage fees went into the re-emission contract as stated above, and make it so that all storage fees go to holders of re-emission tokens until all the re-emission tokens are burnt. This could make it so that re-emissions tokens could be very valuable in case a report of a large amount Ergo is claimed to be lost etc. Also, maybe make re-emission tokens non-linear in distribution, so that those that defer first are given more than those that defer towards the end of the original emissions curve.

Also, this system could be sustainable as even once re-emissions occur one could still be given the possibility to defer to the re-emission contract to receive new re-emissions tokens for mining a block instead of receiving a re-emission, so one could mine for re-emissions tokens, which could rise in value in the event that a large amount of Erg is lost and the remaining re-emission pool greatly expands.

I think this voluntary scheme would be a profitable model for miners and sustained Ergo adoption with healthy long term growth.

---

### Post #3 — @JayDee12Thr33 (2021-10-16)

I like the idea of smoothening rewards from storage rent and tx fees through a re-emission contract.  
But if I am not mistaking this would rule out a volountary participation in that re-emission contract.  
Because if the problem of insufficient rewards after emission becomes true then once emission ends miners eligible for re-emission rewards might be over competitiv. It could shut off the influx of new miners and limit potential miners to those who will have mined Erg during the next 5 years and were smart enough to participate in re-emission contract. A barrierer of entry like that is not really in line with what Ergo stands for.

---

### Post #4 — @PulseQ8 (2021-10-16)

I think early adopter advantage is inevitable, and actually sometimes it’s only fair.

People who mined ERG since last year are likely in huge profit now, expand their rigs with the profit, and have more advantage over new miners. Those early adopters took a risk for mining ERG rather than other coins, and in the end got rewarded for it.

Likewise, I think it’s normal, and perhaps fair, for today’s loyal miners to be rewarded more than miners that come much later. As for how much more they should be rewarded, I think should be studied to find a sweet spot, it shouldn’t be too aggressive.

Just my humble opinion.

---

### Post #5 — @PackOfMarlboro100 (2021-10-17)

I like this, rewarding the early miners via the protocol is an interesting idea. Normally only POS early adopters (the rich investors) are rewarded, this is a very cool idea to reward those that helped paved the way for initial security, while also giving them a good reason to continue providing security post mining emissions.

---

### Post #6 — @kushti (2021-10-18)

Early miners already rewarded well I guess ?

[@Motomotes](/u/motomotes) [@JayDee12Thr33](/u/jaydee12thr33) sending to re-emission contract voluntarily while anyone who has found a block can spend from it unlikely fair, and no one will provide funds to re-emission then probably.

On storage rent, I think storage rent can be sent to a second re-emission contract, from which a miner can spend e.g. up to 1/100,000 of current amount.

---

### Post #7 — @Motomotes (2021-10-19)

Yeah, I tend to think just hardforking the emissions curve to lower the present reward so that rewards last longer would be more acceptable at large than a involuntary re-emissions program labeled as a softfork, because a hardfork of the emissions curve is really one’s goal, so it were better to plainly state that.

But, I also think it is better to keep the emissions as they are.

I have been thinking about a way to provide miners some extended use of their equipment and I think making Ergo dApps that perform GPU accelerated curve fitting and dataset prediction services using Ergo Oracles would be a great idea.

Like, have ErgoPredictor dApp that is essentially an auction house for returning extrapolations of different oracle pools, users could submit a bid for a prediction with a margin of error, expiration date, and price for prediction of course.

For instance, a bid would be like “Prediction for the pirce of Ergo within +/-10% for tomorrow for 1 ERG” and other users could take up this contract and submit a prediction, and when the time comes for the prediction to be validated the first user to submit a prediction within the margin of error gets the 1 ERG for making the prediction.

Then, miners could run gpufit software (open source Levenberg-Marquardt non-linear GPU curve fitter) that could monitor the ErgoPredictor market and possibly pause or partially pause some of their GPUs to attempt to be the first to make a robust prediction. This prediction market would also provide GPU owners a source of revenue after mining ended.

Of course gpufit predictor executables that were compatible with Ergo GPU miners would need to be programmed, but they could be developed similar to how miners are developed, maybe some miner programmers would integrate them directly and allow end users to tweak the model parameters or choose the fit model to use to make their predictions more accurate, that would be the job the miner to also learn about curve fitting specifics to make their GPUs more useful to them. But, the software could also track the likelihood of the prediction being correct based on the chosen fit model and do some calculations to determine whether pausing mining to predict is likely to be profitable or not based on the price of open market bids for predictions.

I had this idea rolling in my head all day, so I just wanted to mention it, I think it serves at least as a good example of how there may be better ways to extend the usefulness of miners than extending the emission curve.

---

### Post #8 — @Haskell_plus (2021-10-19)

One of us is misunderstanding the proposal, your post confused me honestly.

Miners of the next 5 years by my understanding will not have an advantage at the end of the original emission cycle just cause they participated in the re-emission contract, the only thing the re-emission contract serves is to fill the re-emission box to extend the time frame of emissions.

please correct me if I am wrong.

---

### Post #9 — @veriumfellow (2021-10-19)

I’m brainstorming, my idea is probably very far fetched and far from doable, but maybe it could give you some interesting ideas on which to build your own.  
Maybe part of the solution could be to decompose difficulty in order to alllow for difficulty composability:

* Basic mining difficulty ( for the moment only this one is taken into account - but this could be a key to open further doors  
  => the miner getting the right to make a block could also the right later on (during a set period of time) to have priority rights to provide services and get fees for these services that could be in a “service mempool” waiting to be executed: so that the right to make a block could grant more value than just the block reward as it provides business such as:
* Participation in storage rent paid in storage fees
* Execution difficulty of various on/off-chain applications demanding a certain provable difficulty paid in transaction fees: maybe there’s a way to quantify the need of ressources that a user would like to delegate to the miner - maybe with zero knowledge proofs?
* Execution of AI scripts
* NiPoPow generation services
* Basically anything requiring quantifiable computational or storage power or anything cryptographic that can’t be achieved without some work  
  => All these fees being known by the blockchain, they could be used as input for smart distribution of block creation. The fees of these services can be used to assess the quantity of “effort” someone has put at the service of Ergo in the previous epoch of time, which could then in a second stage be the input of a function evaluation to get the perfect mix of distributing block production to a diversified set of stakeholders which business is provided by Ergo end-users.

So we start with a service of mining paid in inflation and we tend to want to go to a model of services runing on the blockchain, which in turn open the right to create blocks. And the protocol could adjust the perfect mix, go back and forth back to get the right balance of “basic mining difficulty” when there’s not much services in the “service mempool” to a full fees model where basic mining could be kept at minimum, but the total difficulty would still be provably high.

In this case, if the target block reward is already reached with transaction and service fees, we could even be able to never reach the total supply, as the algorithm would be leaning most of the time toward fees from service providing. This would be a way to delay the rewards from coinbase, but not touching the total revenue of miners as the coinbase rewards would compensate for transaction fees being not high enough.

This model could leverage further the network effect while Ergo gets more and more use cases, as less emission would also increase the value of Ergo.

---

### Post #10 — @JayDee12Thr33 (2021-10-19)

You are correct. I should have been more clear that I was responding to Motomotes idea of a voluntary participation in re-emission.

To the topic of re-emission via soft fork. I think it is a good idea.  
There are a few questions though.  
What would be the key dates? Would we spread rewards from 8 years to 10 years or 12 or even more?  
I think 12 years might be a good starting point because it gives 3 full storage rent cycles.  
When and at what schedule would rewards start to diminish?  
Do we stick to linear reduction but make it faster (e.g. 6 instead of 3 Ergs every 3 month) or do we introduce a halving event with a very big drop in rewards at a certain point (Where do we put this point). We could even combine both approaches.

---

### Post #11 — @TypoDaPsycho (2021-10-27)

![](https://avatars.discourse-cdn.com/v4/letter/b/e9bcb4/48.png)
[Storage rent details](https://www.ergoforum.org/t/storage-rent-details/256/5) [Research and Development](/c/dev/research-and-development/7)

> So just to confirm, the store fee is paid once every four years, and it doesn’t increase over time?
> Also:
> What about the ability to pay a fee so you can rent out your wallet for longer? Like be able to pay to store longer, and maybe even pay less than the actual storage fee would be?

Going from this post in 2020 as far as I understand storage rent will begin 4 years into emission so in 2023?

“Fee is to be paid every four years, and proportional to number of bytes a coin is consuming, so price\_per\_byte \* size. price\_per\_byte can be changed via miners voting, but max value is just 2x from the default one (and min value is 0).”

But previous comment 8 days prior says

“3 years also okay. Storage rent will be charged before emission is over, basically, since year 3 miners will get something (so community will have time to estimate how well loss of subsidies from emission will be covered by the storage rent).”

Either way beginning at 3 or 4 years, the storage rent fee is currently set to reward miners directly as soon as it’s implemented? If so, I would think a good portion or likely all of the storage fees charged prior to emissions end should be collected for rewards post emission. And the same with transaction fees.

Maybe 100% of storage rent and a portion (20-80%) of transaction fees to be saved for post emission rewards. And transaction fees can be “saved” in non linear fashion e.g. 100% saved for remission at first, decreasing every X months to only 20% saved for re emission in the final 3-6 months of emission. Maybe it’d be best to do the same with storage rent, still pay portion of storage rent directly to miners in last stages of emission schedule.

The real question to me is not if we should do this but when and how far do we think we should spread re emission rewards post emissions end at 8 years.

I’m trying to look at this as a what’s best for network security and long term health of the network. And not a guy who’s concerned with ROI on my small but overpriced 375mh/s rig.

Also, could storage rent fee be increased beyond 2x via soft fork?

---

### Post #12 — @kushti (2021-10-27)

Hardforks are usually cleaner indeed, but in Ergo emission done via a smart contract, and modifying it via hardfork would be not cleaner likely.

DApps and sidechains will provide revenue to miners (and it provides very good value to Ethereum miners), but we can’t predict how things will go.

---

### Post #13 — @kushti (2021-10-27)

You’re right, I need to bring a detailed proposal now

---

### Post #14 — @root7Z (2021-11-02)

emission change idea may lead some problems, personal view, it’s just unpredictable and disincentivize newcoming miners. it is very dependent on coin price tho, i think even the voting phase should be later than eth pos for not losing miners to other chains. It is plausible for holders but also raise some issues on the “immutability” of the platform. There can be FUD about - if emission rate can be changed, why not hard-capped supply? Just some questions about core principles of platform but yeah non-outsourceable puzzles were also non-existant before.

---

### Post #15 — @Motomotes (2021-11-02)

Outsourceable puzzles were non-existent, yet they exist now.

I think it is important not to be too democratic though, or else all will turn to rot and ruin, disaster of the commons.

Ergo is strong because of core principles of key players, and they should continue to grow the direction of Ergo that has profited it so far, the reason this works is because their core principles have been to help others use and benefit from the possibilities of Ergo within win-win relationships.

I think that is the spirit of the idea for extending the emissions as well, to bring in more people in the long run before the storage fee model is tested, helping hodlers and new miners.

However, I think the core economic principles should be respected as well, and a fixed supply and fixed long standing emission curve are central to the economic soundness of the coin. So, I would prefer to invent some other scheme beside emission curve change to continue to keep a frontier for miners.

It is important to understand the metaphor of frontier and settled incentives, the mining itself is a frontier incentive, transaction fees are a “settled” incentive. These settled incentives cause greedy gaming mining behavior which could lead to “sister blocks” to steal transaction fees, to avoid this the miners need a frontier incentive instead, something new to do with some reward to conquer from chaos and nothing.

I propose ErgoIntel, which would be a new way to confirm transactions after emissions naturally end. ErgoIntel would be a community bot that received input models from GPU miners that were designed to predict the price of Ergo on the upcoming ErgoDEX.

ErgoIntel would take the storage fees and transaction fees and would invest them in trading pairs on the ErgoDEX (which would likely then garner more traiding pairs) in order to day trade in an automated fashion based on the models of the miners, averaging the investment strategy to the average prediction of the models. Miners would get a score for submitting models that were correct and their future submissions would be weighted according to their past success as to how much “influence” they had on the model and that weight would determine their proportion of the payout from successful investments. If the bot losses money it simply waits until enough storage fees or transaction fees have accumulated to begin investing again.

I think this idea would be awesome, it would be up to the GPU operator to determine the type of model he wished to use, parabolic, sinusoidal, exponential, etc, to submit to the ErgoIntel to be measured for its success, and the ErgoIntel app would invest based on the weighted average of all models and reward participants based on how close their predictions prove to be.

Then, the blockchain could be changed to build a block based on “mining” a prediction that proves to be true and generates a payout from ErgoIntel, also the blocks should still be able to be built by the traditional puzzle but with no block reward, the incentive will be if ErgoIntel goes broke because of adverse market conditions and bad predictions then miners could mine for “free” in order to accumulate transaction fees so that ErgoIntel can commence investing again.

This would make ErgoIntel successful prediction blocks like “brother blocks” on the blockchain, and would prevent sister blocks (or blocks which split the chain) from forming by greedy miners seeking to maximize their transaction fees because they would all go to ErgoIntel instead, and ErgoIntel would generate more profits for all the miners of true predictions or “brother blocks” (or blocks that keep the chain safe and profitable).

---

### Post #16 — @TypoDaPsycho (2021-11-08)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/root7z/48/743_2.png) root7Z:

> emission change idea may lead some problems, personal view, it’s just unpredictable and disincentivize newcoming miners. it is very dependent on coin price tho, i think even the voting phase should be later than eth pos for not losing miners to other chains. It is plausible for holders but also raise some issues on the “immutability” of the platform. There can be FUD about - if emission rate can be changed, why not hard-capped supply? Just some questions about core principles of platform but yeah non-outsourceable puzzles were also non-existant before.

It’s definitely a complex subject, I wish the Erg mining community was actively debating/voting or at least talking about it amongst themselves. Hopefully some type of community consensus will form prior to changes being implemented.

The issue with waiting for Eth POS is two-fold. First, the longer we wait the less Erg we save/reserve to be used for post emission mining rewards. Second, nobody knows (with certainty) when ETH POS will actually happen.

Let’s just at least be glad that these types of changes require voting by nodes & Ergo is built in a decentralized way, with no single entity controlling the future of the project.

---

### Post #17 — @JayDee12Thr33 (2021-11-09)

I had a few ideas regarding the reemission. The numbers and dates provided are solely for your entertainment. I dont know if a later voting about the usage of the fund is possible.

1. I think we should have like a halvening event/ phase of higher reduction (maybe around 4th birthday) that takes a predefined amount of Erg out of circulation (e.g.15 Mio.) After the amount is set aside we could return to the old emission.
2. A predefined amount of Erg (e.g. 10 Mio.) is contracted to provide mining rewards
3. A maximum of maybe 1 Mio. Erg is allowed to be airdroped equally to every adress holding Erg. This should incentivice the creation of UTXOs and guarantee storage rent. When these airdrops take place is subject to Erg holder voting.
4. The remaining 4 Mio. Erg are subject to a vote by all Erg holders to decide an allocation schedule. Possible usage would be mining rewards (possibly through adding to storage smoothening), Ergo Foundation, funding of a DAO/ Launchpad (that airdrops its tokens to Erg holders and finances projects of Ergo) etc.  
   Direct airdrops would be prohibited for this fund.

---

### Post #18 — @glasgowm (2021-11-09)

Some more discussions here

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a70ab5d077374748901898cfcd9c7a09b8a303a9.png)
[reddit](https://www.reddit.com/r/ergonauts/comments/qpzzcl/kushtis_proposal_for_slower_emission_schedule/)

### [r/ergonauts - Kushti’s Proposal for Slower Emission Schedule](https://www.reddit.com/r/ergonauts/comments/qpzzcl/kushtis_proposal_for_slower_emission_schedule/)

65 votes and 34 comments so far on Reddit

---

### Post #19 — @kushti (2021-11-10)

I guess the problem here is that most of miners do not like complex games, they are willing to just mine for income which can be known (with high probability) in advance.

---

### Post #20 — @kushti (2021-11-10)

In general, airdrops and spamming the blockchain should be incentivized ) via some applications likely

---

### Post #21 — @Motomotes (2021-11-11)

You are correct. I believe this is insightful as to the motives that move miners, still I think it would be awesome to have a prediction market making program like ErgoIntel to make transaction fees less needed, but I guess first people will probably use their GPUs for themselves in the markets for a couple of decades before a public prediction will emerge.

Anyway, I thought of another idea to create an infinite supply token used to perform high speed DB operations which is to be perpetually burnt whenever it is used\spent. This incentives miners by providing a fixed income in this secondary token. The inflation/deflation will be determined by the success of acquiring clients\companies to use this newly proposed feature, ErgoCache, I wrote about it here: <https://www.reddit.com/r/ergonauts/comments/qpzzcl/kushtis_proposal_for_slower_emission_schedule/hk57m3b/>

---

### Post #22 — @bigoogawoogla (2021-11-11)

I like that you have so many ideas. Interesting to consider.
