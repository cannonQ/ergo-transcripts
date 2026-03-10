---
title: Dexy USD - Simplest Stablecoin Design
description: 'ErgoForum discussion: Dexy USD - Simplest Stablecoin Design'
tags:
- amm
- bootstrapping
- collateral
- dexy
- eip
- ergoforum
- ergoscript-context
- oracle-pools
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/dexy-usd-simplest-stablecoin-design/1430
created: '2021-05-26'
last_activity: '2021-12-27'
posts_count: 11
views: 6581
likes: 38
glossary_hits:
- AMM
- Bootstrapping
- Collateral
- Dexy
- EIP
- ErgoScript context
- Oracle pools
- SigmaUSD
---

# Dexy USD - Simplest Stablecoin Design

> **Forum thread:** [https://ergoforum.org/t/dexy-usd-simplest-stablecoin-design/1430](https://ergoforum.org/t/dexy-usd-simplest-stablecoin-design/1430)
> **Category:** Uncategorized | **Created:** 2021-05-26 | **Posts:** 11 | **Views:** 6581

**Related concepts:** AMM, Bootstrapping, Collateral, Dexy, EIP, ErgoScript context, Oracle pools, SigmaUSD

---

### Post #1 — @kushti (2021-05-26)

SigmaUSD worked well during the recent cryptocurrency markets flash crash, however, with some shorters taking profit draining bank reserves. Other stablecoins were devalued, liquidations triggered etc. Thus still we are in search of stablecoin design resilient to market events.

Continuing the old topic with a simple but fuzzy and controversial design ( [A Simplest Stablecoin?](https://www.ergoforum.org/t/a-simplest-stablecoin/413) ) , I am going to propose another simple stablecoin design where stability is based on liquidity pool.

In short, the design is about two contracts:

* still, we need for a trusted oracle. It would be better to have an oracle reacting fast (not lagging one) now
* one contract is holding all the stablecoins (after bootstrapping the second contract) and doing one-way tethering, so selling stablecoins for ERGs , with some fee like 1%. ERGs received to be kinda burnt, e.g. sent to a contract paying to miners few years after.
* another contract is AMM DEX ERG/stablecoin liquidity pool bootstrapped just before the first contract with some amount of ERG and stablecoins such that the price is corresponding to oracles.

Now, if price on the DEX is going above $1 by more than 1% (+DEX fee), it is profitable for arbitrage traders to mint more $$$ and take quick profit. Also, with growing volume it would be profitable to mint $$$ and add liquidity to the pool.

But what if the price on the DEX is going below $1? We’re modifying known AMM DEX contract (from [EIP-0014: Decentralized Exchange Contracts by kushti · Pull Request #27 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/27)) by including oracle, and then there’re two options:

1. liquidity removal is prohibited if price is below X. Then liquidity providers need somehow to manage the issue (in the long-term at least). Here we rely on social consensus outside the blockchain.
2. if price is going below Y for some time, some amount of $$$ in the pool can be burnt, getting the peg back.

Both means can be combined, with different X and Y values (e.g. 0.95 and 0.9).

---

### Post #2 — @Armeanio (2021-05-26)

Dexy is a really interesting framework.

I am all for monetary plurality in stables, let them compete and see how each financial product performs in different situations.

I have a question for potentially hardening this framework.

Could the 1% go to a 3rd smart contract that accumulates fees?

Let’s call it (emergency reserve)

Liquidity removal is prohibited if price is below X. (At a certain threshold) Could the emergency reserve transfers funds to create liquidity? It might help prevent a situation where liquidity providers need to manage the issue

If the price is going below Y for some time (At some threshold), an amount of $$$ in the pool can be transferred to the emergency reserve to restore the peg and also harden the protocol if the price is below X.

---

### Post #3 — @kushti (2021-05-26)

It can be another stability gadget:

3. One-way tethering contract can accumulate all the ERGs, and they would be spendable on buying $$$ back from the liquidity pool if price is below some threshold. Or can be split between miners and emergency fund.

Gadgets (1) , (2), (3) can be combined.

Btw, for the gadgets lagging oracle pool would work better I guess.

---

### Post #4 — @Armeanio (2021-05-26)

Yeah I think a lag for the gadgets makes sense here.

Some combination fo 1,2,3 seems attractive to all parties.

Burning $$$ could work too… No Risk It, No Biscuit.

I do think some emergency fund is a good idea in the event of !oh shit! scenarios.

I guess it just depends on where the thresholds for the gadets are seems there is flexibility in the implementation here.

---

### Post #5 — @Bibipipi (2021-05-28)

Could there be any danger of a malicious actor trying to force the emergency fund to be released?

---

### Post #6 — @kushti (2021-06-07)

It could be the case, so maybe some delays are needed to let market to get back on the peg before an intervention

---

### Post #7 — @root7Z (2021-10-14)

the problem would be the lack of liquidity in dex pair. even though dapp peg don’t go below $1, dex peg can be more volatile with high volume trading

---

### Post #8 — @Vesi_Hiisi (2021-12-24)

Apologies for going a bit off topic here, but maybe some of this could be useful for the dexy usd design too.

I have been thinking about a stablecoin from maximum security and stability perspective. Here are the threats I see in sigmaUSD:

* Reliance on oracle price. Oracle needs maintenance, and it is an external risk to the stablecoin protocol. Also, oracle can never be fully real time. Even tradfi is frontrun with millisecond faster cables and geographical locations. This opens up the risk of reserve drain, though the problem can be well mitigated.
* Governance. Whichever way it is organized, there is always a risk that the protocol is threatened by human action. An immutable smart contract on chain would simply follow the code, which takes away the governance risk. The downside is that re-deployment would be needed for any improvements, which is not user friendly.
* Collateral providers. The capital tied to collateral depends on human decisions. It may move away if higher yield is promised elsewhere. Or run away in a crisis situation.

One possible solution for all of the risks above could be continuous auctions of the stablecoin. The price would be set by the markets at every auction, so oracle would not be needed. No need for oracle maintenance would mean that also governance could be removed. Finally, the reserve could be built up from the protocol fees. Those fees could be high until a sufficient reserve ratio is reached, and then be lowered even to zero. This would remove the whole collateral holder side from the equation. Users would only have two options: 1) bid in auction to buy stablecoin. 2) bid in auction to sell stablecoin.

Building up such reserves from protocol fees would of course take time. Also, the amount of stablecoin available for buy/sell in each auction would have to be proportional to the amount of reserves. So the TVL could not increase (or decrease) fast. Such limited usage would not be best for fast paced defi activities, but it could serve as an extremely safe and riskless option for diversifying assets out of crypto. The price could be pegged to gold, which will most likely outlive USD as a store of value.

---

### Post #9 — @balb (2021-12-25)

I don’t see the reliance on an oracle as a threat. I think that it is not possible to build such a product without an oracle (If you want to keep the product decentralized). For example, how would you access the prices of previous auctions without an oracle or a centralized provider?

---

### Post #10 — @Ergosmergo (2021-12-25)

Oracle is crucial as relying on data from within ERGO Eco system alone might not give the best results rather then relaying on an Oracle to provide that said data. Smart contracts would be very limited without an Oracle in place. Blockchains obtain their most valuable properties like strong consensus through on-chain code witch is kinda of ironic. The downside of oracles when they go offline or oracle is corrupted the smart contract could report incorrect. Its a tricky problem for sure to have a totally Oracle-less blockchain.

---

### Post #11 — @Vesi_Hiisi (2021-12-27)

Auctions would provide the price data on chain. For example, today we sell 1000 stablecoins, how much do you want to bid? The winning bid would get the stablecoins, and the price would be recorded in the bank protocol.

Oracles do make usage easier, but I am trying to think of a self standing system because oracles are not 100% reliable as Ergosmergo points out.
