---
title: A proposal for a public good stablecoin
description: 'ErgoForum discussion: A proposal for a public good stablecoin'
tags:
- collateral
- ergo-foundation
- ergoforum
- ergoscript-context
- mev
- oracle-pools
- sigmausd
- soft-fork
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/a-proposal-for-a-public-good-stablecoin/3432
created: '2022-03-07'
last_activity: '2022-05-15'
posts_count: 8
views: 1768
likes: 22
glossary_hits:
- Collateral
- Ergo Foundation
- ErgoScript context
- MEV
- Oracle pools
- SigmaUSD
- Soft fork
- Transaction
---

# A proposal for a public good stablecoin

> **Forum thread:** [https://ergoforum.org/t/a-proposal-for-a-public-good-stablecoin/3432](https://ergoforum.org/t/a-proposal-for-a-public-good-stablecoin/3432)
> **Category:** Uncategorized | **Created:** 2022-03-07 | **Posts:** 8 | **Views:** 1768

**Related concepts:** Collateral, Ergo Foundation, ErgoScript context, MEV, Oracle pools, SigmaUSD, Soft fork, Transaction

---

### Post #1 — @Vesi_Hiisi (2022-03-07)

**Summary**

We propose a design for an extremely resilient decentralized algorithmic stablecoin. It has two major differences compared to the current stablecoins in the cryptomarket. First, no governance. Contrary to common intuition, relying on human judgement in a time of crisis is not a source of stability. Instead, a clear transparent code is something that people can rely on. Second, no external collateral providers. External collateral providers have an incentive to minimize the amount of collateral relative to stablecoins in circulation because it maximizes their yield. The yield race extends risk taking in the market until the protocol breaks. The alternative is to build up the collateral from protocol fees over time. This is a slow, but a robust process. The collateral is fully owned by the protocol, and it is coded not to care about having low yield. In longer term, it has the added benefit of not owing anything to protocol owners. It has no owners, and therefore income from the fees does not exit the protocol, only strengthens it.

Minimum amount of risk factors and an extremely high collateral ratio will most likely ensure high demand for the stablecoin. The main problem is building up the liquidity. Waiting for the collateral to accumulate from fees could take years. Such no-profit stablecoin is a public good. Therefore, some community effort, marketing and donations could be used to scale it up faster.

SigmaUSD can be used as a base code for implementing the protocol. We give initial suggetions on parameter settings, and possible modifications. However, these details need to be discussed in more detail. Especially the most resilient way of generating a price feed needs further improvements.

**1. Motivation**

The economic field of literature is in wide agreement that stability of a monetary system is conducive for strong and sustainable economic development. People are more likely to invest, trade and trust each other, when they don’t have to worry about strong fluctuations in their asset values. A monetary policy is most stable, when it is transparent, predictable and independent of other goals than price stability. This is why central banks device rules (e.g. gold standard) or complicated models to justify their decisions. However, they always retain the right to use human judgement to override those rules. Superficially, it seems like a good idea to have room to maneuver in times of crisis, but history has proven this intuition wrong every time. Gold has outlived every man-made currency. Stability stems from the fact that no one entity can change the monetary policy of gold. The lack of human judgement is exactly what makes it predictable and stable. Therefore, those who want to govern a stable monetary policy have it all backwards. Human judgement is not the source of stability in turbulent times. It is the source of instability.

**2. Stablecoins risks**

Fiat currencies can’t be used in blockchains, which is why many have developed decentralized algorithmic stablecoins that are often pegged to the value of 1 US dollar. The stablecoins have seen wide adoption in otherwise highly volatile cryptocurrency markets. Despite branding themselves stable, their desings are packed with risks for two general reasons.

First, they all repeat the sin of the central banks by including some form of governance. This goes against the main advantage of the decentralized blockchain technology, which is that applications can run without governance. This is not to say that governance in all crypto project is bad practice. The technology is developing rapidly, which necessitates governance for applications that have to keep up to date. Making changes on the fly is much easier for the developers and users than always re-deploying and migrating to a new immutable system. However for a stablecoin, the immutability is a feature, not a bug. No governance means full transparency in the monetary policy, which makes it predictable and stable. A beacon of trust in times of crisis.

The second driver of risk in stablecoins is that they are competing on the level of yield offered for the money in the system. The liquidity in the market moves to the highest yield with acceptable risk. For stablecoins, the most objective measure of risk is the collateral ratio. How many dollars of collateral is in the reserve to cover the circulating stablecoin supply? If it is over 100%, then everyone could redeem at the same time without any problems. Currently the largest decentralized algorithmic stablecoins operate around 100% collateral or less. The collateral usually includes other volatile cryptocurrencies, which means that a market downturn leads to a reduction in the collateral ratio. If the collateral ratio goes below 100%, then stablecoin holders have to believe some narrative on why the system will hold up. The narrative could be for example an arbitrage mechanism, dynamic collateral supply or promise of higher gains in the future. Those narratives work well when the sentiment is positive, but they contain a seed of destruction. In times of fear, the trust in the narrative may fail. This gives each stablecoin holder an incentive to go redeem their part of the collateral before others. The stability mechanisms that sounded genious in a bull market don’t matter, when someone first mentions a bank run and the effects of mass-psychology take over.

From the stablecoin user perspective, a higher collateral ratio is always better. However, someone has to provide the service of guaranteeing the stability by providing collateral. Those collateral suppliers have an incentive to push the collateral ratio as low as possible because it increases their yield. Taken together this means that overall risk in the system is dictated by equilibrium of supply and demand in the market. When it comes to risk taking in financial markets, the historical record can easily demonstrate that the market forces repeatedly overextend the risk. Not necessarily personal risk, but the risk of the system as a whole. So is the case in stablecoins too. Collateral at around 100% is not sustainable in the long term.

**3. Solutions**

A truly decentralized algorithmic stablecoin that is built to be maximally resilient should be built with immutable smart contract, and be self-sustaining in providing the collateral. We use SigmaUSD as a base reference, because it would be the easiest existing design to modify for our purpose.

**3.1 No governance**

The current SigmaUSD (V2) contract is subject to governance. The community members who hold the keys, can change fee parameters and oracle provider. For our proposed stablecoin, those permissions could be removed from the smart contract or the keys could be burned. For the reasons discussed above, no-governance is the superior option for a stablecoin. However, it is not an easy choice because the gains only manifest in longer time-frame. It is very much possible that the system fails due to some unforeseen circumstances. Then the road forward is to fix the problem and re-deploy. This is painful for the users, if they have to migrate, or especially if they lose their money. However, over time the iterative process of trial and error generates a truly resilient system. With governance, such resiliency can never be achieved. A less extreme approach would be to keep the protocol open for changes for some testing perioid before burning the keys. This way could minimize the damage, if there are any early bugs. However, the commitment to burn the keys has to be serious and well communicated in advance.

**3.2 No external collateral providers**

The current SigmaUSD design has collateral providers. Those functions could be turned off for our proposed stablecoin. This would leave only two possible actions for users, buy or sell the stablecoin. A fee would be collected for each transaction, and the fee would be added to the collateral. Therefore, the collateral would accumulate from the stablecoin usage. The collateral that accumulates into the protocol reserve belongs to the protocol. The protocol has no incentive to hunt for a better yield. Therefore, the safe collateral ratio can be set to any arbitrarily high number. New stablecoins would be released into circulation only when the collateral ratio is above the safe threshold.

**3.3 Collateral accumulation**

The main drawback of building collateral from usage fees is that it will be very slow. For example, lets start with 10 000$ stablecoins in circulation, and 50 000$ in collateral value. The user sells the stablecoins, which generates 20$ of fees. Now the collateral is 40 200$. The next user can mint a maximum of 10 040$ stablecoins. As a result there are 10 040$ stablecoins in circulation and 50 400.8$ in collateral value. Using these parameters of collateral ratio and fees it would require roughly 90 full circulating supply turnovers to double the collateral. In other words, the accumulation is very slow. The parameter choices can trade off safety to accumulation speed. We will discuss optimal parameter settings later.

The advantage of this slow approach is that it builds an extremely strong foundation from the usage fees. It does not build on promises of future profits, like most other crypto projects. It means that there is no obligation to siphon profits out of the protocol in the future. This is a strong competitive price advantage compared to competitors who owe profits to platform owners. It could even be programmed, that the fees drop after some supersafe collateral ratio threshold. Still the main competitive advantage is the immutability, transparency and very high collateral ratio. Rational stablecoin holders should always opt for a stablecoin with higher collateral ratio. Even though the crypto markets are not very rational, and stablecoin use cases matter, we believe that the demand for this extremely safe stablecoin would be strong. Additionally, the demand is expected to only grow stronger over time. Once a large enough liquidity builds up, then it will become extremely difficult for any competitor to catch up.

The main problem of such a system is building up the liquidity without making promises of future profits. We list a few options for kickstarting the initial liquidity:

* Brand the stablecoin as a public good. All fees are used for the protocol, no one else. This approach may attract voluntary donations.
* Create an option for people to lock up collateral for a fixed period of time (e.g. 3 month, 6 month, 1 year). Having more collateral at the start allows for larger sums to flow in and out, which accumulates the permanent collateral faster. Call it a “forced hodl service”, and market it as a favor to the ecosystem and the public good. The unwinding of forced hodl positions needs to be thought out carefully. Only a small fraction should unlock at a given time. Otherwise the collateral ratio might drop to a dangerous level.
* Find partner projects to reward forced hodlers. Ecosystem projects can support the public good by airdropping to forced hodlers, which is also good publicity for them.

**4. Parameter settings and risks**

**4.1 Backing**

The SigmaUSD is backed by Ergo. The proposed stablecoin could be also be backed by ERG, or possibly by the wrapped AnetaBTC. The main advantage in BTC is that it has lower volatility than ERG. The collateral ratio is less likely to fall under 100% even in crash scenario. Another advantage is that the circulating supply of the stablecoin is miniscule, when compared to BTC market cap. No one has the incentive to manipulate BTC price to drain collateral from the protocol. From SigmaUSD (V1) we saw that this can be an issue for smaller market cap collateral coins (see bearwhale saga). The disadvantage of using AnetaBTC is that it adds an additional layer of risk. It would rely on wrapped AnetaBTC systems to run smoothly.

**4.2 Pegging**

We find it weird that crypto markets have converged into using dollar pegged stablecoins. Dollar is not stable. Hyperinflation, or failure of dollar is a distinct risk. If dollar hyperinflates, then less collateral is needed to cover the circulating stablecoin supply. As a result the collateral ratio shoots up. Every stablecoin holder can exit without a problem, and the only damage would be that the collateral remains locked in the contract. We believe it would make much more sense to peg the price to an ounce or gram of gold. However, there are also practical reasons for picking dollar. The demand for it is much stronger, and the price feed is easier to attain. But hey, maybe they could both have distinct demands in the future.

**4.3 Collateral ratio**

At 200% collateral ratio, if BTC price drops more than 50%, then the collateral ratio drops below 100% and peg is lost (ceteris paribus). At 1000% collateral ratio, if BTC price drops more than 90%, then the collateral ratio drops below 100% and peg is lost (c.p.). Historically BTC has dropped more than 50% on multiple occasions. In 2017-2018 there was a 84% drop, so it can’t be completely ruled out. However, the market is quite different in 2022. Institutional money is less prone to hype cycles. Also, a collateral increasing dynamic comes into play near 100% collateral ratio. At 125% people might get afraid of the stablecoin losing its peg. When they withdraw, then the collateral ratio is actually pushed up. Even if the collateral ratio goes below 100%, the sigmaUSD design allows people to withdraw their fair share. For example at 90% collateral ratio, redeeming one stablecoin would give 0.9$ worth of collateral.

SigmaUSD aims to keep the collateral ratio between 400% and 800%. It has not been at any risk of falling below 100% even though Erg price has dropped from 20$ to 4$. (Though the dynamics are not exactly the same because of people being able to add collateral in SigmaUSD). Anyway, we would recommend choosing a safe threshold of at least 600% for the collateral ratio. It is large enough to be called extremely safe and it is large enough to give people time to exit if needed.

Optionally, the threshold could be made dynamic. For example, it could vary between 600% and 1200%. If the circulating stablecoin supply is not at maximum capacity, then the threshold could start slowly moving toward the higher end. When all available stablecoins are in circulation, then the threshold could move slowly back to 600% to speed up the collateral accumulation. This would add flexibility to the risk-accumulation trade-off, but it would also require more coding work.

**4.4 Fees**

The size of the fees for minting and redeeming stablecoins is difficult to optimize for long term sustainability. Unnecessarily high fees reduce demand, while low fees make the protocol vulnerable for exploitation. Also, the vulnerability does not only depend on the fees, but also the interaction with the price feed. SigmaUSD had to bumb the fees up to 2.5% to drive out manipulators. This could be a reasonable starting point. However, the fees could be made dynamic as well. For example, if the collateral ratio is very high, then the fees could gradually drop to 0.5% or so. This might open a possibility of draining the collateral, but then the fees would be bumbed back up as the collateral ratio decreases. This is a minor draw back in the dynamic fee approach. The gain is much larger. The stablecoin is not only extremely stable, but the fees are also extremely competitive.

**4.5 Price feed**

This is the most problematic immediate risk to the protocol. Oracles are the most common choice, but also the most common source of stablecoin exploitations. It is also external to the protocol, which means in case of oracle failure, there is no way to update the price feed without governance. The oracle pools in Ergo are governed, which would mean that the stablecoin protocol falls under their governance too. This would be the easiest, but risky option. A more resilient way would be to somehow internalize the price mechanism. The best idea we had so far, would be to have some sort of auction for sales and purchases of the stablecoin. However, this is where we lack any good practical ideas. Solving this issue requires more reading and discussion. The most important thing is to ensure that the collateral can’t be drained. As long as fees accumulate, the protocol will grow stronger in the long run.

**4.6. Djed**

The research paper on Djed recognizes some further improvements that could be considered for the SigmaUSD code. The paper, its summary, and implications for SigmaUSD can be found here:

![](https://avatars.discourse-cdn.com/v4/letter/v/a3d4f5/48.png)
[Lessons for sigmausd from the DJED paper](https://www.ergoforum.org/t/lessons-for-sigmausd-from-the-djed-paper/2345) [Research and Development](/c/dev/research-and-development/7)

> Dear all,
> DJED paper:
> TLDR
> minimal djed = sigmausd
> Extended djed seeks to correct the following shortcomings: Reserve draining attack (read bearwhale), wholesale discount (buying in one tx is cheaper than the same amount with multiple tx, because the price changes in between), Zero equity (at 100% reserve ratio, reservecoin is worthless), rigid fees (can be changed to incentivize optimal reserve ratio), stablecoin loss of peg at <100% (mechanism to cover the losses) and bank runs (reserveco…

**5. Final thoughts**

This proposal is meant to be a start of a discussion. All details require much more deliberation. At this stage, it is good to hear feedback on the high level design, before digging more into detail.

---

### Post #2 — @Grayman (2022-03-08)

![](https://avatars.discourse-cdn.com/v4/letter/v/a3d4f5/48.png) Vesi\_Hiisi:

> The best idea we had so far, would be to have some sort of auction for sales and purchases of the stablecoin. However, this is where we lack any good practical ideas.

I don’t have any practical ideas either, but I have a couple of comments. I’m sorry if these come off as crazy!

Lending creates dollars. Defaults destroy dollars. Repayment of loans also removes dollars from circulation, but they quickly get loaned back out. Theoretically all of this happens on a free market basis, but we all know how that goes. It did work well for decades though, in the days before computers…

I guess that is because dollars were redeemable for gold, and necessary to pay taxes. Also they were used for real world goods and services.

I suppose most people are considering the application of stablecoins to defi trading or yield farming. So maybe this is covered in that realm.

Rather than an auction, you would need a dex with the stable coin built in - a marketplace in which it can flourish. Lending and defaults would need to be a part of that valuation. House would need to win, but not by much. Good lenders would need to be rewarded. Those that repay need to be rewarded. This all would probably require identity, though. having said that, what I really want to see is a replacement for Visa/Mastercard, not another dex.

ETA:

Another idea would be to crowd source the price feed - at a much slower tempo - only allowing trading at certain times each day. That way an oracle pool of publicly available sources could be crosschecked for consistency. If you slowed trade tempo to daily, pending price data confirmation of the market close value of Au per Oz, for example, then it should be easy to confirm the price from multiple sources in a widely distributed way.

Sorry if that one is even crazier.

---

### Post #4 — @kushti (2022-03-22)

I appreciate efforts to find simple stablecoin design. And I agree that in the long-term governance could be (and tends to be) problematic.

The problem with this design is that bank reserves are not necessarily increasing. Even more, if traders can be successful in draining bank reserves (by minting around top levels and then redeeming around bottom), then bank will have reserves decreasing. So this design assumes that traders playing against the bank will lose, and this assumption does not look convincing.

---

### Post #5 — @Vesi_Hiisi (2022-03-23)

You are right that the model assumes profitability. First, the reserves have to grow in the long term from fees (even if some reserves get drained). Second, there has to be a large enough buffer of reserves to overcome the short term volatility. If these conditions are met, then the protocol will never fail due to reserves being depleted. In comparison to sigmausd, the proposed model does not (yet) propose improvements against reserve drain. However, it does improve on the volatility assumption, because it can sustain a higher reserve ratio.

The success of those assumptions depends on the design of the fees, and measures to mitigate reserve drain. If you think that the current sigmausd settings are not good enough to build reserves, then sigmausd will fail too. People will not provide collateral at scale, if they are not making profit.

I think the current fee and drain-mitigation design can be improved, but it is not far from long term sustainable profitability.

---

### Post #6 — @ehri (2022-03-23)

Access needs improvement. If a sophisticated “hacker” has an advantage, when reaching trigger reserve ratio, then there is less incentive for normal users. And a lot of incentive for the hacker “Bearwhale” to frontrun and manipulate.

Soft Fork coming. What if new block rewards also implements a direct small fee going into collateral SigRSV? Long term reserve hodlers need more reward prospective.

---

### Post #7 — @Vesi_Hiisi (2022-03-23)

A hacker has an advantage, if they can front run everyone else (MEV in Ethereum). This happens in tradfi too (High Frequency Trading). This is a fundamentally difficult problem, which is why I would like to see mechanisms that do not depend on being first. Exploring the idea of auctions could be worth it.

The reserve drain is a separate problem, and can happen via normal trading or manipulation. If traders would not have an advantage, then there is no way they could beat the 2% fees and drain the reserves. However, they do have an advantage because of the lagging oracle price. The external prices will always move faster than the oracle price (because oracles take the price info from the external prices). Then the question is, if the fee or other mechanisms are high enough to beat the traders anyway. Theoretically, there is certainly a price level or set of mechanisms, where the reserves are not drained.

This can also be manipulated. With large enough stack, one can dump external prices, and take advantage of the contract. This problem will never fully go away (Soros manipulating pound), but large size reduces the amount of people who have big enough stack and willingness to do it.

If the price in the contract would be set by market forces, instead of an oracle, then both, manipulation and trading advantage, could be avoided. In addition, the text describes how the oracle is an external vulnerability. Therefore, I am frantically trying to figure out a way to remove the oracle, and let the markets set the prices internally.

I would not divert external funds into the sigmausd collateral. If it is not profitable, then you are just subsidizing the hackers/traders/manipulators. If the protocol is profitable, then I would rather use external funds to bootstrap the liquidity in my proposed model.

---

### Post #8 — @sandor (2022-05-13)

Is sigUSD not safe enough?

---

### Post #9 — @Vesi_Hiisi (2022-05-15)

I think sigUSD is safe enough. Nothing is 100% safe, but aiming for 400% - 800% collateral ratio (CR) is much safer than any other decentralized stablecoin out there. Also the incentives push the CR higher, if it goes near 100% in a crash. Even in case of <100% CR, people will get paid back a fair amount of what is left in the reserve.

The problem is that it is difficult to attract rsv holders with such high CR. The fees generate yield, which benefits the rsv holders. If the CR is 200%, then 1 ERG worth of rsv gets larger share of the fees, than 1 ERG worth of rsv at 800% CR. This means that yield chasers tend to go after the riskier stablecoins. In a booming market they don’t care that much about the stability.

So far rsv has not been an attractive investment. This could change though. When there are more use cases, and not just speculative use draining the reserves, then the profitability will increase. Also, the strength shown in the current crash will convince people about the safety of sigmausd. People can accept low yields too, if they are convinced that the risks are low.

That being said, I think the proposed public good stablecoin could be even safer. It could push the CR even higher. The problem is that the accumulation of collateral from the fees is a slow process. So scaling is an issue, but somewhere in the future it could be bigger, cheaper and safer.
