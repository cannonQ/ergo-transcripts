---
title: Universal USD Equivalent (uUSD) Provider Contract
description: 'ErgoForum discussion: Universal USD Equivalent (uUSD) Provider Contract'
tags:
- box
- collateral
- ergoforum
- liquidation
- native-tokens
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/universal-usd-equivalent-uusd-provider-contract/197
created: '2020-03-29'
last_activity: '2020-04-01'
posts_count: 4
views: 632
likes: 4
glossary_hits:
- Box
- Collateral
- Liquidation
- Native tokens
---

# Universal USD Equivalent (uUSD) Provider Contract

> **Forum thread:** [https://ergoforum.org/t/universal-usd-equivalent-uusd-provider-contract/197](https://ergoforum.org/t/universal-usd-equivalent-uusd-provider-contract/197)
> **Category:** Uncategorized | **Created:** 2020-03-29 | **Posts:** 4 | **Views:** 632

**Related concepts:** Box, Collateral, Liquidation, Native tokens

---

### Post #1 — @kushti (2020-03-29)

With DEX coming, gateways become the next critical step in building alternative financial systems, especially gateways for stablecoins (they will probably be needed  
for mutual credit systems, for example). In this post a scheme for creating and burning somewhat collateralized tokens equivalent to USD (in value only) is proposed.  
These tokens are called Universal USD (UUSD) Equivalent in this post. The scheme proposed allows to minimize trust in concrete gateways operating with the UUSD tokens.  
Nevertheless, gateways are needed in order to have stable UUSD rates and liquidity.

The smart contract proposed in this post is minting new UUSD tokens and also consuming them in order to provide gateways and other relatively big players with liquidity.  
Another job of the contract is to provide some security for a user for the case when a gateway is not serving the user (e.g. the gateway is down or refusing to serve the user).  
However, another gateway can serve the user, if they are both are sharing the same UUSD token, but in the worst case the user needs for some fallback option, even if this option is  
not perfect.

The UUSD contract is using an oracle, and the oracle should be secure. The oracle is delivering ERG/USD price. There are implementations for such oracles already (e.g.  
<https://github.com/sininen-taivas/ergo-oracle> ). The UUSD contract is having locked UUSD tokens. Then the UUSD contract is about the following functions:

* Mint: user sends Ergs and get UUSD, according to the oracle rate minus fee. Fee should be high enough~(say, 5%), and minimum amount to be minted should be big also (say, $2,000).
* Burn: user sends UUSD to get Ergs. Useful for gateways mostly (please note that number of requests to the contract should be minimized, as it is in the UTXO model). Fee should be high~(5-10%), minimum amount should be relatively high also (say, $1,000).

For lower fees, a user will use gateways to swap UUSD for Dai / USDN / USDT or fiat USD. Thus the contract will be used by gateways to get liquidity, or in extreme cases by users.

Note that UUSDs issued are not necessarily fully backed by Ergs because of possible ERG/USD price decline after minting. For security, there should be many gateways, and most of UUSDs should be on their side. In future, UUSDs will be also consumed by mutual credit systems and other applications.

Another issue is that there could be too much Ergs backing UUSDs. In this case (e.g. if collateralization is more than 300-400%), the contract can allow oracles or miners to withdraw rewards.

---

### Post #2 — @Martin-mx (2020-03-30)

Looks interesting from another usecase for ERG side but it will need pretty big network and many more restrictions, why everyone is running away from old good fiat token backed 1:1 by real money where only entry and exit point needs to be controlled? probably because real money doesn`t generate huge volume. “To swap UUSD for Dai / USDN / USDT or fiat USD” - all these things are pretty much different, i would leave stablecoins, algos and fiat backing to people doing it already and try to convince them to use Ergo to host their tokens. Creating it strictly for mutual credit systems, makes more sense.

---

### Post #3 — @jasondavies (2020-04-01)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> Note that UUSDs issued are not necessarily fully backed by Ergs because of possible ERG/USD price decline after minting. For security, there should be many gateways, and most of UUSDs should be on their side. In future, UUSDs will be also consumed by mutual credit systems and other applications.

Can you explain why undercollateralisation is not a problem? It seems to me that during a decline in ERG/USD, if someone wanted to redeem all of their UUSD for ERG it would not be possible.

---

### Post #4 — @kushti (2020-04-01)

Well, the idea is that in most cases gateways will back tokens by exchanging them (for profits), so (possibly undercollateralized) fund is the tool of the last resort. That’s why fees are high for using the fund.
