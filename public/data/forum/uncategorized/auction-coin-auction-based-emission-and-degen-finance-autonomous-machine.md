---
title: Auction Coin - auction-based emission and Degen Finance autonomous machine
description: 'ErgoForum discussion: Auction Coin - auction-based emission and Degen
  Finance autonomous machine'
tags:
- addresses
- amm
- bootstrapping
- ergoforum
- ergohack
- headless-dapp
- lp-tokens
- native-tokens
- sigmausd
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/auction-coin-auction-based-emission-and-degen-finance-autonomous-machine/4287
created: '2023-04-11'
last_activity: '2023-11-09'
posts_count: 14
views: 1998
likes: 39
glossary_hits:
- AMM
- Addresses
- Bootstrapping
- ERGOHACK
- Headless dApp
- LP tokens
- Native tokens
- SigmaUSD
- Spectrum
- Transaction
---

# Auction Coin - auction-based emission and Degen Finance autonomous machine

> **Forum thread:** [https://ergoforum.org/t/auction-coin-auction-based-emission-and-degen-finance-autonomous-machine/4287](https://ergoforum.org/t/auction-coin-auction-based-emission-and-degen-finance-autonomous-machine/4287)
> **Category:** Uncategorized | **Created:** 2023-04-11 | **Posts:** 14 | **Views:** 1998

**Related concepts:** AMM, Addresses, Bootstrapping, ERGOHACK, Headless dApp, LP tokens, Native tokens, SigmaUSD, Spectrum, Transaction

---

### Post #1 — @kushti (2023-04-11)

Emission done as an ordinary contract in Ergo opens possibility to use Ergo’s proof-of-work network as timestamping machine to issue other tokens via smart contracts. First natural extension is about emitting customs tokens every block via a contract similar to Erg emission contract , for example, see [Market-driven emission contracts - Research and Development - Ergo Community Forum](https://www.ergoforum.org/t/market-driven-emission-contracts/3749) .

But then we can use blockchain as clocks and existing decentralized contracts to issue a token in autonomous decentralized fashion, simulating a digital commodity (digital gold) in a bit less straightforward way, also, without rewarding miners in our example.

# Auction Coin

Let’s assume all the new Auction Coin (AC) tokens are locked in a contract, except few used to initialize a liquidity pool known to the contract. Then every, say, 2 days (1440) blocks, a fixed amount AC can be unlocked by creating an auction selling them. Auction has starting bid defined by the contract and lasts for 1 day (720 blocks).

Then every 20 days (so 10 auctions if all of them are successful) the contract is using accumulated Ergs to buy AC back from the liquidity pool (using a contract like in [Buying back tokens from liqudity pool - Research and Development - Ergo Community Forum](https://www.ergoforum.org/t/buying-back-tokens-from-liqudity-pool/4275) ) .

More, starting bid can go up by 1% if previous auction was successful, or down 1% otherwise.

This simple machine tries to accumulate as much ERG as possible and use accumulated ERGs to regularly pump AC in the pool. Predictable nature of the machine welcomes human beings to play with it in different ways, e.g. accumulate AC before the pump to dump after machine’s intervention. Pure degen finance (DegFi) on top of transparent machine and known assumptions.

---

### Post #2 — @deathgripson (2023-04-12)

So the strategy is to dump the native token into speculative yield pools? Do we really see no problem with this?

---

### Post #3 — @deathgripson (2023-04-12)

I have 2 major concerns.

1. The contract may be predictable but people deploying new tokens are not.  
   One may easily mint any token on this type of a protocol, buy 99% of the circulating supply from the contract, entice more people to buy it through the platform, then sell on top of everyone who ever buys. Just like regular centralized finance.
2. This “This simple machine tries to accumulate as much ERG as possible and use accumulated ERGs to regularly pump AC in the pool.” is a contradictory statement.  
   It’s either the contract attempts to accumulate ERG or it will accumulate shitcoins, if it sells the ERG at a fixed rate to buy these shitcoins then there is no accumulation of ERG you could say it simply uses ERG as an intermediary coin. (Not to mention it creates a predictable dump cycle for ergo which is not a healthy sign in a market)

Also, if the contract will buy-back these shitcoins will it also be selling them? At that rate does the contract become deciding factor behind the success or failure of these coins?

Tldr: this sounds economically painful to ERG itself, I would be interested to hear counterpoints to convince myself otherwise.

---

### Post #4 — @bigoogawoogla (2023-04-12)

[@kushti](/u/kushti) I think it’s time for “Ergohack VII: Degen Finance”  
We already have a 1500 SigmaUSD bounty for a DegFi project (latest proposal below). More, these sort of DegFi projects can onboard users and boost Ergo’s metrics like total value locked and transaction volume. Both are important for exchange listings.

By the way, if I funded your Auction Coin idea I would call it “Galaxy Brain Pump” (GBP, like the British fiat and also because the pump mechanics are simple but the market conditions are unpredictable). If someone wants to make a fully functioning version of this then name your development price and perhaps community members will come forward to fund it.

[@deathgripson](/u/deathgripson) This is DegFi.

[![Money Machine_ Fully decentralized certificate of deposit_Page_1](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/a/a031016c848d9b186e25f5b2bc5c9245302c7e2f_2_386x500.jpeg)

Money Machine\_ Fully decentralized certificate of deposit\_Page\_11700×2200 327 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/a/a031016c848d9b186e25f5b2bc5c9245302c7e2f.jpeg "Money Machine_ Fully decentralized certificate of deposit_Page_1")

  

[![Money Machine_ Fully decentralized certificate of deposit_Page_2](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/a/a90925cfb2b144294a0d53b4d7bc75f9b60894f6_2_386x500.jpeg)

Money Machine\_ Fully decentralized certificate of deposit\_Page\_21700×2200 390 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/a/a90925cfb2b144294a0d53b4d7bc75f9b60894f6.jpeg "Money Machine_ Fully decentralized certificate of deposit_Page_2")

  

[![Money Machine_ Fully decentralized certificate of deposit_Page_3](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/c/c5470336ecd441d3932349976efd62150583eb4e_2_386x500.jpeg)

Money Machine\_ Fully decentralized certificate of deposit\_Page\_31700×2200 21.9 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/c/c5470336ecd441d3932349976efd62150583eb4e.jpeg "Money Machine_ Fully decentralized certificate of deposit_Page_3")

---

### Post #5 — @deathgripson (2023-04-12)

I’m really only interested in a response to the specific concerns that I listed, your project in my opinion is a ponzi scheme. Projects that are not ponzi schemes generally do not have to specifically list that they are not ponzi schemes in the white paper. Smart people understand when something is or is not a ponzi scheme because they have already experimented with degenerate financial applications.

---

### Post #6 — @bigoogawoogla (2023-04-12)

Please clearly explain the dumpenomics (dump mechanics) of Money Machine. By the way, I think “Money Machine Token” (MMT, like modern monetary theory because it’s just as sound in design) is a good token name. What are your thoughts?

---

### Post #7 — @deathgripson (2023-04-12)

There is inflation from a central bank that is distributed to the largest stakers. These will obviously be the people first to the coins which will be the developers and then the same developers will be the bank. So immediately the people who collect the most inflation will be the bank itself.  
These devs will be forced to dump inflation to pay for things or over time one of them will simply rug pull the “bank” reserves. At that point there will be a bank run and very many users will be stuck holding a “CD” which is really an illiquid share that can be redeemed for 0 dollars.

---

### Post #8 — @bigoogawoogla (2023-04-12)

Sir, thank you for taking the time to respond. Here is my rebuttal:

> There is inflation from a central bank that is distributed to the largest stakers. These will obviously be the people first to the coins which will be the developers and then the same developers will be the bank. So immediately the people who collect the most inflation will be the bank itself.

^ The MMT token will be sold publicly. No founder allocation. Anyone (including me) will have the chance to buy MMTs at the exact same time. However, you are correct the the earliest and largest stakers get the most inflation. This is to incentivize early investors.

> These devs will be forced to dump inflation to pay for things or over time one of them will simply rug pull the “bank” reserves.

^Money Machine will be a headless dApp. It lives on the blockchain and can be interacted with through any front end developed by the community. The protocol will be immutable. No continued development of the machine, so no developer costs. That being said, the community will be responsible for making more front ends to play with the protocol in complex ways. The front end I will launch will be minimum viable product with the basic core functionality to interact with the protocol.

> At that point there will be a bank run and very many users will be stuck holding a “CD” which is really an illiquid share that can be redeemed for 0 dollars.

^This is one of the 2 improvements I’ve proposed over the Ethereum version of the project. Liquid staking! You can sell your stake keys.

---

### Post #9 — @deathgripson (2023-04-12)

> This is to incentivize early investors.

I would argue this only amplifies the pyramid scheme style of the project, not to mention that there is no way to prove that devs and founders are not buying the tokens, this is a pseudonymous blockchain.

> The protocol will be immutable. No continued development of the machine, so no developer costs.

This is completely naive, it represents that you are not familiar with what it takes to sustain a “headless dapp”.

> ^This is one of the 2 improvements I’ve proposed over the Ethereum version of the project. Liquid staking! You can sell your stake keys.

Although liquid staking is important and a good thing, it still is subject to the underlying economics of the protocol which can leave people with tons of liquid staked tokens that can not be traded for anything **OF VALUE** . This happened with LUNA I was left with billions of LUNA tokens that were untradable regardless of how liquid they were. Not to mention if the asset will just a be a liquid representation of an underlying inflation token it is actually less useful and less liquid than a incentivized LP liquid staked token which is a very common practice on active defi chains.

---

### Post #10 — @bigoogawoogla (2023-04-12)

Sorry to hear you got burnt with Luna ![:frowning:](https://emoji.discourse-cdn.com/twitter/frowning.png?v=12 ":frowning:")

> I would argue this only amplifies the pyramid scheme style of the project, not to mention that there is no way to prove that devs and founders are not buying the tokens, this is a pseudonymous blockchain.

^Money Machine will seek a trusted method for the launch of the MMT token. That means it can be verified that developers and founders don’t have an unfair advantage in the inflation mechanics of the game. I do anticipate that contributors to the project will buy into it. That seems reasonable and fair that they would want to be some of the first to invest.

> This is completely naive, it represents that you are not familiar with what it takes to sustain a “headless dapp”.

^ Please explain what it takes to maintain a headless dApp. I like the concept of a headless dApp, but I’m not a developer.

> Although liquid staking is important and a good thing, it still is subject to the underlying economics of the protocol which can leave people with tons of liquid staked tokens that can not be traded for anything **OF VALUE**

^ This is the risk of any token launched on Ergo. The free market can determine your tokens are worthless.

> Not to mention if the asset will just a be a liquid representation of an underlying inflation token it is actually less useful and less liquid than a incentivized LP liquid staked token which is a very common practice on active defi chains.

^Can you please explain this concept of an incentivized LP liquid staked token? When I’ve played with Spectrum Finance I appreciated that I can access my LP from a new wallet by sending the tokens representing the LP to a new address. Actually, I’ve considered using this mechanism for creating the initial liquidity pool for Money Machine.

Here is my current idea for the initial token sale. I would appreciate it if you could provide me feedback. It seems you know things I don’t…:  
–There is an initial token sale of 100,000 MMT.  
–The token sale collects 10,000 ERG (obviously cannot predict this number).  
–Player deathgripson invested 1000 ERG into the token sale.  
–50,000 MMT and 10,000 ERG is locked into a liquidity pool on Spectrum Finance for a set amount of time.  
–Player deathgripson receives an LP token representing 1000 ERG and 5000 MMT in the Spectrum Finance liquidity pool.  
–Player deathgripson receives 5000 MMT.

---

### Post #11 — @deathgripson (2023-04-12)

I appreciate the sympathy, I didn’t lose all that much but I sure learned a lot from the event.  
I think if you are honest in that you really have good intentions with this project you would be able to see along the way when building this the holes that leave it open to exploitation.  
There are really a lot of potential exploits I could come up with especially when the code for the project is not even defined. As cliche as it is the math behind the program is the only thing that matters and if there is no proof that it is sound one can assume there are exploits.  
As an extension to these concerns I want to say that frankly I feel as if the native token ERG is undervalued compared to its technical capabilities, but I don’t feel as if in it’s current stage that bringing degenerate activities will do good to increase our market cap. It will increase outflow behavior which large VC funded chains can only deal w by taking loans, leverage, or literally just eating investor money.  
It will also not help us get listed on major CEXs.  
I think this gets to the point which is that money needs to retain value and the value here would be derived from a very ponzi style hype dynamic which has proven in the past to be unsustainable.

---

### Post #12 — @kushti (2023-04-17)

1. The contract is releasing tokens slowly , in small portions every two days via auctions, so it would be hard to grab significant portion without attention. Premint is another issue, but can be checked by observing bootstrapping transactions.
2. The contract is accumulating ERG (or, possibly, something like SigUSD) buy selling AC in series of auctions and then using ERGs raised to inject into the pool (buy ACs back).

This will hopefully lock more and more ERG in the LP.

Also, very interesting from game-theoretical point of view question is whether price will converge to some value or not.

---

### Post #13 — @deathgripson (2023-04-27)

I am probably overthinking something, it sounds like relatively conservative assumptions.

---

### Post #14 — @kushti (2023-11-09)

First Auction Coin instantiation is live now ! @ <https://auctioncoin.app/>

There’s whitepaper published by anon-real there.

The first instantiation is based on decreasing price auctions. I think fixed-time auctions with increasing bids would be more interesting game.

=========================

And I think, similarly to Auction Coin , there could be OptionCoin.

That is, a contract is periodically issuing new tokens, and selling them via Ameican CALL options. taking exercise price from DEX. Funds from selling options, as well as from exercising contracts are going to buy OptionCoin tokens back from the DEX.
