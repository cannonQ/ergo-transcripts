---
title: What can Ergo helps Cardano?
description: 'ErgoForum discussion: What can Ergo helps Cardano?'
tags:
- collateral
- ergoforum
- eutxo
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/what-can-ergo-helps-cardano/980
created: '2021-04-11'
last_activity: '2021-04-26'
posts_count: 2
views: 1080
likes: 10
glossary_hits:
- Collateral
- eUTXO
---

# What can Ergo helps Cardano?

> **Forum thread:** [https://ergoforum.org/t/what-can-ergo-helps-cardano/980](https://ergoforum.org/t/what-can-ergo-helps-cardano/980)
> **Category:** Uncategorized | **Created:** 2021-04-11 | **Posts:** 2 | **Views:** 1080

**Related concepts:** Collateral, eUTXO

---

### Post #1 — @Team (2021-04-11)

I just read this difficult article ^^" [Here’s how Ergo seeks to boost interoperability for Cardano’s eUTxO model | Ergo](https://ergoplatform.org/en/blog/2021-04-08-heres-how-ergo-seeks-to-boost-interoperability-for-cardanos-eutxo-model/)  I’m not much of a tech guy but I’m trying to understand it. I have a question on the last section of the article which is “Ergo is the first to adopt a smart contract language in the same eUTxO model as Cardano” in the first and second paragraph they says:

> "Although PoS is a very secure protocol, some smart contracts may require the consensus-theoretic security features of PoW for some part of their execution. The fully Cardano-compatible PoW can make significant contributions to all developers in the Cardano ecosystem; Ergo facilitates this PoW compatibility.
>
> The larger a dApp is if it is doing collateralized DeFi, the larger the stake it has at its disposition, and since this is not yet fully resolved in the Proof of Stake consensus, it is a weak point."

Can someone please explain to me in beginner level of what is the weak point of Cardano Pos that ergo can help? can someone also please give some example in practical to demonstrate the usefulness that Ergo can provide to some type of DApp?

please explain step by step beginner friendly ^^" I’m a newbie

---

### Post #2 — @root7Z (2021-04-26)

In PoS consensus, security of the blockchain relies on assets stakes on the main protocol thus Proof of Stake. However if you want to use your assets in DeFi platforms such as liquidity providing, lending protocols or staking them as collateral to take loans it means that you are not providing security to main blockchain. If you think that you can earn %10-12 from DeFi platforms than you will have less incentive to stake it for %6 in consensus staking and when this happens at larger scale then security of system will become weaker. In PoW you do not have such fear because proof relies on miners’ participation. That’s why it may be useful for a PoS platform to use PoW currency for supplying liquidity in DeFi platforms. Ergo’s contracts have similar language with Cardano so Cardano may benefit from implementing ERG as a liquid asset in their own blockchain. This is the main argument for cooperation between Cardano and Ergo in the article you mentioned
