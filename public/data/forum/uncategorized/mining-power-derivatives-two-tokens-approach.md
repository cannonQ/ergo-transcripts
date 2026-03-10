---
title: Mining Power Derivatives - Two Tokens Approach
description: 'ErgoForum discussion: Mining Power Derivatives - Two Tokens Approach'
tags:
- difficulty-adjustment
- ergoforum
- native-tokens
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/mining-power-derivatives-two-tokens-approach/277
created: '2020-07-20'
last_activity: '2020-07-20'
posts_count: 1
views: 881
likes: 2
glossary_hits:
- Difficulty adjustment
- Native tokens
---

# Mining Power Derivatives - Two Tokens Approach

> **Forum thread:** [https://ergoforum.org/t/mining-power-derivatives-two-tokens-approach/277](https://ergoforum.org/t/mining-power-derivatives-two-tokens-approach/277)
> **Category:** Uncategorized | **Created:** 2020-07-20 | **Posts:** 1 | **Views:** 881

**Related concepts:** Difficulty adjustment, Native tokens

---

### Post #1 — @kushti (2020-07-20)

The following idea was published on the Discord by “nyzblossom”. I’m posting it here for archival purposes since mining power derivatives can be popular at some point of Ergo Platform development:

==============

I have been following this project and have some idea for app , I am not developer .  
The idea of the app is to create derivative market on the difficulty of the network .

How it will work ?

* two tokens will be created  
  Up token and down token
* smart contract will be created  
  The user will be able to send erg coins to the contract and get up and down tokens

Example : first user who send the coins is the creator of the market so he gets 1 up and 1 down token for each coin and the contract records the difficulty of the block at which the market created for this two tokens.

Note : there can be multiple time frames for the market determined by the user or by some kind of contract operator .

Then anyone who sends coins gets up and down tokens propotionally to the difference between the difficulty at the time of the market creation and the time at which the user sends more coins to the contract.  
So if diff at block at time zero ( once the first user the creator of the market sends coins ) is 100 and user sends 10 coins he will get 10 up and 10 down tokens . Then another user after some time sends 10 coins and the difficulty at the block he send coins is 110 he will get 11 down tokens and 9 up tokens become the difference between 100 and 110 is 10% .

Note : once the market is created a time experation period is diturmend  
For example one month , represented in amount of blocks during one month .

Users have this actions to do :

1. Get up and down tokens - sending coins to the contract .
2. redeem coins - sending tokens to the contract and getting propotional amount of coins .  
   For example :  
   There are currently 22 wining tokens ( up tokens for this meter as currently the difficulty is above the difficulty at block at time zero ) and user send 4 up tokens he has to the contract then he will get 4/22 the amount of coins in the contract .
3. Claim coins - same as redeem only difference is that it’s possible only after the expiration period of the contract.  
   Note : this contract should work fine for trading the difficulty of the network but can be more even better if there was something like balancer, uniswap or curve ( as on ethereum ) where the up and down tokens can be traded and have automatic market making functions for providing market liquidity collecting trading fees , generating yeld and so on …

Wrote this  
<https://diffdapp.gitlab.io/dd/source.sol>  
<https://diffdapp.gitlab.io/dd/>  
It’s kind of first version of the idea
