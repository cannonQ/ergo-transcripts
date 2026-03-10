---
title: SigUSD V 2.0 Launch
description: 'ErgoForum discussion: SigUSD V 2.0 Launch'
tags:
- addresses
- eip
- ergo-explorer
- ergo-foundation
- ergoforum
- ergoscript-context
- mev
- native-tokens
- sigmausd
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/sigusd-v-2-0-launch/912
created: '2021-03-30'
last_activity: '2021-05-04'
posts_count: 15
views: 2367
likes: 18
glossary_hits:
- Addresses
- EIP
- Ergo Explorer
- Ergo Foundation
- ErgoScript context
- MEV
- Native tokens
- SigmaUSD
- Transaction
---

# SigUSD V 2.0 Launch

> **Forum thread:** [https://ergoforum.org/t/sigusd-v-2-0-launch/912](https://ergoforum.org/t/sigusd-v-2-0-launch/912)
> **Category:** Uncategorized | **Created:** 2021-03-30 | **Posts:** 15 | **Views:** 2367

**Related concepts:** Addresses, EIP, Ergo Explorer, Ergo Foundation, ErgoScript context, MEV, Native tokens, SigmaUSD, Transaction

---

### Post #1 — @kushti (2021-03-30)

# Relaunch Details

SigmaUSD bank has been relaunched. Final contracts can be found in EIP-15 draft: [EIP-0015: SigmaUSD Contracts by kushti · Pull Request #28 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/28/files) . Cooling off height is set to 460,000 .

UI: <https://sigmausd.io/>  
old contract UI: [SigmaUSD](https://old.sigmausd.io/#/)

Update contract also deployed. 5 voting tokens issued, with 3 votes needed for an update. Update committee is following:

* [@cymatic](/u/cymatic)
* [@Armeanio](/u/armeanio)
* [@ponte](/u/ponte)
* Spire Staking [SPIRE]
* [@anon2020s](/u/anon2020s)

# The Whale

Our old (and not so good) whale came back immediately, now by jumping into reserves with 463K ERG: [Ergo Explorer](https://explorer.ergoplatform.com/en/transactions/4e8292c2a570643a9e0a0d2929eb2a6dbcc91992cf362ad9e2aef44c5312f57b) . Erg price was $2.65 back then

Later he started to profit from RSV in a truly hacker way by selling RSV to users sending buy requests via proxy contract, so via simulating a bank to the proxy contract. By doing that he was able to sell RSV with no protocol fee (he had to pay UI dev fee though). He sold RSV for ~38K ERG before proxy contract was fixed (previously proxy contract just checked that a user is getting what he paid for, now the contract is also checking that it is working with the bank). History: [Ergo Explorer](https://explorer.ergoplatform.com/en/addresses/9hyDXH72HoNTiG2pvxFQwxAhWBU8CrbvwtJDtnYoa4jfpaSk1d3) . He made ~600 ERG from frontrunning the bank (not counting fee for getting RSV price change though).

Finally, after the fix the whale jumped into SigUSD with ~38K ERG @ $2.65. Thus now he’s sitting with two positions opened @2.65, RSV with 425K ERG and USD with 38K ERG. Let’s see how it goes.

# Invest into RSV responsibly!

Please note that RSV is LONG position not for ERG price just, but also for (non-speculative) protocol liquidity. Without SigUSD adoption going into RSV is no better than HODLing likely.

Please invest responsibly! Honestly I am a bit confused with so many ERG put into RSV with no USD liquidity.

# Further steps

Now I guess SigUSD community should take steps to track the big actors trying to manipulate the bank (and the oracles behind), discuss possible updates and promote non-speculative SigUSD usage.

DEXes and gateways are coming, hopefully they will help. Mixer and auctions are going to support SigUSD. Please work on more applications for SigUSD (and SigRSV) if you can!

---

### Post #2 — @cymatic (2021-03-30)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> Honestly I am a bit confused with so many ERG put into RSV with no USD liquidity.

I think 98% of people still don’t understand the risk/reward mechanism and are simply thinking of SigRSV similar to staking rewards, i.e., “if you put it in there you’re guaranteed to make a profit down the line”.

FOMO is a BIG driver in all things crypto. The community has so much confidence in Ergo’s future and even when they don’t understand the technicals of a particular project, they don’t want to miss out on what they perceive to be an investment opportunity. There is still a perception with the SigUSD bank that there is an “early adopter” advantage and people don’t want to miss out on getting in early as a result.

---

### Post #3 — @Armeanio (2021-03-30)

Everyone who is supporting the stablecoin initially is creating a strong foundation for the DeX, as well as opens the potential for CeX support in the future.

This also gives token update holders the ability to adapt as needed to make any refinements before L2 applications are plugged into SigmaUSD.

Participation is appreciated but please manage the downside risks.

---

### Post #4 — @James (2021-04-02)

I’m guessing there isn’t much SigUSD because people are waiting for the utility to come? I bought a small amount of SigUSD but put almost all of my ERG into the reserve. I was tempted to wait to see if I could get a better deal but realised I wouldn’t be able to get in after the cooling down period with so much ERG in the reserve.

---

### Post #5 — @Kallo (2021-04-10)

There is sudden spike in SigmaUSD (suddenly 400% reserve ratio) - let’s see whatt happens next.

---

### Post #6 — @ZeroKnowledge (2021-04-10)

Any idea why it spiked? There is no use case for SigUSD currently (as far as I know).

---

### Post #7 — @Kallo (2021-04-10)

Can anyone find out whether it is the whale who manipulated price in past?

---

### Post #8 — @ZeroKnowledge (2021-04-10)

I don’t see how it’s possible to find this out. Whales can use fresh and anonymous wallets as well as using the mixer to hide his trails.

---

### Post #9 — @ZeroKnowledge (2021-04-10)

The smart contract/website seems to be broken. Every time I try to mint new RSV the website freezes. Redeeming SigUSD or RSV is not possible because the ratio is below 400% currently. Anyone knows what’s going on? [@kushti](/u/kushti)

---

### Post #10 — @master_of_doge (2021-04-12)

RSV minting broken please fix!!!

---

### Post #11 — @ZeroKnowledge (2021-04-12)

You will be able to mint your desired amount of RSV if you type out the amount separately (e.g. in an text editor), copy that number and paste it into the RSV minting field. Then spam click, wait and repeat (you need a LOT of patience). At some point the smart contract will ask you to send X ERG to the address. It works… It’s just a painful process right now. Should be fixed ASAP!

---

### Post #12 — @master_of_doge (2021-04-12)

thank you sir!!!

---

### Post #13 — @glasgowm (2021-04-14)

Was fixed a few days ago

---

### Post #14 — @thegeologist (2021-04-28)

As of this moment, the website freezing bug is still occurring when I enter a number into the “Purchase SigRSV” field

---

### Post #15 — @BHave (2021-05-04)

Hi, I’m struggeling with getting my Ergo back from SigmaUSD and RSV v.1. I tried yesterday several times without any luck. Is there a plan for automatic conversion to v.2?
