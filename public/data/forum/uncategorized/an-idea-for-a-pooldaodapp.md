---
title: An idea for a pool/DAO/DApp
description: 'ErgoForum discussion: An idea for a pool/DAO/DApp'
tags:
- amm
- box
- collateral
- dexy
- ergoforum
- ergomixer
- ergopad
- lp-tokens
- native-tokens
- paideia
- sigmausd
- skyharbor
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/an-idea-for-a-pool-dao-dapp/4161
created: '2023-01-18'
last_activity: '2023-01-18'
posts_count: 1
views: 254
likes: 1
glossary_hits:
- AMM
- Box
- Collateral
- Dexy
- ErgoMixer
- ErgoPad
- LP tokens
- Native tokens
- Paideia
- SigmaUSD
- SkyHarbor
- Spectrum
- Transaction
---

# An idea for a pool/DAO/DApp

> **Forum thread:** [https://ergoforum.org/t/an-idea-for-a-pool-dao-dapp/4161](https://ergoforum.org/t/an-idea-for-a-pool-dao-dapp/4161)
> **Category:** Uncategorized | **Created:** 2023-01-18 | **Posts:** 1 | **Views:** 254

**Related concepts:** AMM, Box, Collateral, Dexy, ErgoMixer, ErgoPad, LP tokens, Native tokens, Paideia, SigmaUSD, SkyHarbor, Spectrum, Transaction

---

### Post #1 — @JayDee12Thr33 (2023-01-18)

Hey guys,

The last few weeks I been wondering about this idea. With the emergence of Lithos the last couple of days I would like to propose it here as I think it could be a nice effort. Maybe some of you care to read it and take it further. I am not a developer so it would have to be others who take it up anyway. Since it might benefit the community immensely, this would ideally be a community effort. The naming scheme is optional.

The idea is to form a DAO that helps strengthen the Ergo ecosystem. It does this by allowing miners to mine DAO tokens at a rate 1:1 in exchange for ERG. The DAO token can be exchanged at a DEX or burned via a smart contract. This smart contract guarantees the following (I will call the DAO token TBC henceforth, ‘The Block Creator DAO’).

1 TBC = 1/∑TBC \* ∑ ERG in treasury + 1/∑TBC\*(∑protocols Liquidity - ∑protocols liquidity only accessible with NFT)

The protocol guarantees that the treasury holds at least 50 % and at soft maximum of 100% of the outstanding TBC debt in ERG. So, for every new TBC that is mined 0.5 ERG are send to the treasury. Various actions lead to ERG going to the treasury without TBC being mined for it (smart contract interaction fees etc.). This should lead to the treasury reaching full collateralization over time. Since it is not allowed to hold more than 1 ERG per outstanding TBC debt less ERG would be sent to the treasury. The other 0.5 ERG (or more if the treasury is filed) from every new TBC are invested into LP positions, strengthening decentralized protocols by providing them with liquidity (SigUSD/SigRSV, Dexy etc) or provide funding for projects like Paideia for DAO infrastructure, Guapswap for swap automation, Spectrum finance for market access. A venture arm could build positions via Ergopad, if TBC holders voted for it. The treasury could be used to provide liquidity to the ErgoMixer and Lithos for fees. These fees would still accumulate the treasury even if it was at maximum capacity.

The DAO would have different subpools and a miner can connect to several in the percentages that he chooses. E.g. he would split his hashrate

20 % PAD/SigRSV-LP in exchange for TBC

10 % ERG/SigUSD-LP in exchange for TBC and a work NFT

For these pools 50 % ERG is mined to the treasury, 25 % invested in the pool token and put into a LP position on spectrum with 25 % ERG or another pool token, the NFT represents the share of work that was done for an epoch (e.g. 10 blocks the DAO discovers). It works as a key to the share of 50 % of the LP that was mined in that epoch (25 % of the work). The LP accumulates fees/yield overtime. You can opt out of the NFT then the LP is mined into protocol liquidity. All possible pools must be whitelisted by the DAO.

1 TBC = 0.5 ERG + (0.125 ERG|0.125 ERG(SigRSV)) + ((NFT|0.125 ERG|0.125 ERG(SigRSV)))

5 % SigRSV in exchange for TBC

10 % SigUSD in exchange for TBC and a work NFT

For these pools 50 % ERG is mined to the treasury, 50 % invested in the pool token. The NFT represents the share of work that was put into the position and corresponds with 50 % of the pool token at the average price point of the epoch. Here the NFT works as a key to 25 % of the reward that is exchanged for SigUSD. The SigRSV is completely mined to protocol liquidity.

30 % ERG

20 % TBC at least 20 % of a miners hashrate must go directly to TBC

Redemption for miner A who mined SigUSD in epoch 1 with a work NFT would look like this:

1 TBC + SigUSD NFT epoch 1 = 1/∑TBC \* ∑ ERG in treasury + 1/∑TBC\*(∑protocols liquidity - ∑protocols liquidity only accessible by NFT + A’s NFT SigUSD pool shares in epoch 1/ ∑ all NFT SigUSD pool shares in epoch 1 \* SigUSD mined in epoch 1 with NFT active) This could also be done via a box that the NFT holds a key to.

For a LP-position the perk would be fee accumulation.

The NFT might very likely be redeemed with more than 1 TBC. If you contributed a total of 10 ERG in exchange for TBC to a pool than the NFT would have to be redeemed with 2.5 TBC (5 ERG to treasury, 2.5 to protocol liq and 2.5 connected to the NFT). A contract could split the NFT into FTs that would correspond to 1 TBC (or you start with a FT). Alternatively, a contract could attach the necessary TBC to a NFT so that it can be redeemed directly. Several NFTs could be put together via a contract. A dashboard could show how much ERG a certain NFT could be redeemed for with the burning smart contract.

The 20 % of ERG that are exchanged completely into TBC are split up according to the following scheme that can only in parts be changed by DAO vote.

50 % treasury

25 % to help keep TBC at protocol value

25 % according to DAO vote. This position would account for maintaining the mining infrastructure and other expenses. Excess funds can be voted on to invest.

1 TBC token gives you 1 DAO vote.

The mechanism to keep TBC at protocol value takes what the protocol is worth to people without NFTs

1 TBC = 1/∑TBC \* ∑ ERG in treasury + 1/∑TBC\*(∑protocols Liquidity - ∑protocols liquidity only accessible with NFT)

Every block the protocol determines the current worth 1 TBC has and bootstraps the liquidity on the TBC/ERG pool on Spectrum. 5 % of the ERG of every block are used to bring the market price closer to this equilibrium.

If TBC trades below its worth the protocol uses the ERG to buy TBC from the market, burns them and puts the redeemed ERG and LP tokens into the treasury and protocol liquidity. If the treasury is at 100 % the ERG is invested according to DAO vote.

If TBC trades at a premium compared to what it is worth if redeemed without NFT then the mechanism would be allowed to mint new TBC. These newly minted TBCs must be put into the liquidity pool on Spectrum. They are collateralized not at protocol parameters but at the current price point and there can never be more TBC than miner mined ERG into the protocol.

With 4 ERG mined and a TBC price of 2 ERG 1 TBC could be minted. 2 ERG are needed to collateralize the new TBC debt at this price and 2 ERG are needed as the other side of the LP position.

1 TBC = Collateral for TBD debt (1 ERG into Treasury+ 1 ERG into DAO LP) + 2 ERG for DEx LP

If no more TBC can be minted and TBC trades at a premium, then the ERG are put into the treasury. If the soft cap of 100% ERG backing for TBC is exceeded the excess ERG is invested according to DAO vote.

If any interference would worsen the situation the ERG is put into a fund that is excluded from the protocols liquidity and needs to be voted on by the DAO at the end of next epoch.

Since TBC is needed to unlock the FT/NFT accessible position miners can not sell every TBC they mine or they speculate of falling prices. They can sell their NFTs. Maybe in a special section of skyharbor.

Miner could use different strategies to mitigate the risks involved with mining. The DAO allows to easily switch between stable coin and more volatile assets while also leveraging LP positions. It has the ability to have different revenue streams with ERG, TBC and TBC + work NFT that can be sold or burned. It gives miners the ability to make beneficial decisions while letting the DAO take necessary counter positions. DAO miners might for example be able to mint SigUSD because the DAO mints the necessary SigRSV in a chained transaction. Because part of it could be LP positions the DAO might still benefit from It in the long run.

In the meantime, miners might get TBC at a 1:1 exchange rate with ERG but only be able to sell/burn TBC for less than 1 ERG because the protocols liquidity is worth less than 0.5 ERG. So, there would be incentives to keep the DAO liquidity healthy. Since miners mining SigUSD with the DAO would also mine 25 % of their rewards exchanged to SigUSD to the protocol liquidity the risk of the strategy might be further mitigated.

The boxes of the treasury could be used in the ErgoMixer protocol to provide liquidity and make this infrastructure more useful for the ecosystem and provide collateral for Lithos in exchange for fees.

If the DAO would be successful the situation could be something like this. The DAO liquidity is worth more than the ERG that were invested into it. So Miners get TBC 1:1 for ERG and sell at a profit/burn TBC for the positions/ERG. If TBC then trades lower that protocols worth the burn mechanism burns TBC and buyers are incentivized to buy and burn or hold.

Miner/buyers need enough TBC to be able to redeem the work NFT vouchers. This creates upwards pressure. Since the TBC price is calculated without the value only accessible with NFTs, TBC might be more valuable for some market participants.

The DAO would enable miners to profit from providing liquidity to the ecosystem in an easy way. This would strengthen the various decentral protocols which would in turn benefit the whole Ergo ecosystem which again would benefit miners greatly. Being able to easily switch between strategies while DAO takes necessary counter risks might bring different revenue streams to miners. A position build with an NFT could rise in value while profits in ERG diminish and vice versa.

At the beginning there is need to be some kind of moratorium to not burn the token and build some DEx liquidity.

Anyway, that is my idea. Feel free to pick it up and use it if you please.
