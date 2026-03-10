---
title: Decentralized grid trading on Ergo
description: 'ErgoForum discussion: Decentralized grid trading on Ergo'
tags:
- addresses
- amm
- box
- eip-31
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- full-node
- grid-trading
- native-tokens
- sigma-protocols
- sigmausd
- spectrum
- token-id-rule
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/decentralized-grid-trading-on-ergo/3750
created: '2022-07-26'
last_activity: '2022-11-10'
posts_count: 5
views: 3177
likes: 39
glossary_hits:
- AMM
- Addresses
- Box
- EIP-31
- Ergo Explorer
- ErgoScript
- ErgoScript context
- Full node
- Grid trading
- Native tokens
- Sigma protocols
- SigmaUSD
- Spectrum
- Token ID rule
---

# Decentralized grid trading on Ergo

> **Forum thread:** [https://ergoforum.org/t/decentralized-grid-trading-on-ergo/3750](https://ergoforum.org/t/decentralized-grid-trading-on-ergo/3750)
> **Category:** Uncategorized | **Created:** 2022-07-26 | **Posts:** 5 | **Views:** 3177

**Related concepts:** AMM, Addresses, Box, EIP-31, Ergo Explorer, ErgoScript, ErgoScript context, Full node, Grid trading, Native tokens, Sigma protocols, SigmaUSD, Spectrum, Token ID rule

---

### Post #1 — @kushti (2022-07-26)

Continuing old idea of “smart orders” (see [DEX orders with buyback guarantee, smart-order based DEXes](https://www.ergoforum.org/t/dex-orders-with-buyback-guarantee-smart-order-based-dexes/486) , [New Ergo Smart DEX Orders with buyback guarantees | Ergo Platform](https://ergoplatform.org/en/blog/2020-12-02-new-ergo-smart-dex-orders-with-buyback-guarantees/) ) , we can do decentralized grid trading on Ergo (which is automatically compatible with existing DEXes, such as ErgoDEX LP pools and babel fees). Grid trading is a good way to make profits from volatility , and many CEXes offer it.

So for a grid element, let’s say grid cell order, a contract would be like:

* could be withdrawn at any time by one who can sign with pubkey PK
* if this is sell order, could be spent if corresponding buy order created at a lower price (e.g. price of the order \* 0.99, so 1% lower), and the buy order is bound to PK. Similarly, buy order can be spent if corresponding sell order is created.

To create a grid then, just create as many orders as you want.

Similarly to ErgoDEX, offchain bots can make profits by executing grid orders (matching them with AMM LPs or other orders). Then it is enough to create grids once and then go offline. Unlike CEXes, funds will be SAFU.

---

### Post #2 — @kushti (2022-08-18)

possible order contract draft.

```ergoscript
{
    // decentralized grid order contract for token/ERG trading, with ERG accumulation 

    val tokenId = fromBase58("") //todo: put real token id here, 
    
    // script of order owner
    val ownerScript = SELF.R4[SigmaProp].get

    // token price, in nanoErg per token 
    val tokenPrice = SELF.R5[Long].get

    //our order side, TRUE == buy, false == sell
    val side = SELF.R6[Boolean].get  

    val orderSize = SELF.R7[Long].get

    val outIndex = 1 // TODO: check composability

    val recreatedBox = OUTPUTS(outIndex)

    val newPrice = if(side){
      tokenPrice * 112 / 100 // if our order is buy, we are going to sell in a new order, 12% above 
    } else {
      tokenPrice * 9 / 10 // if our order is sell, we rebuy @ 10% lowel level
    }

    // check conditions not related to trading here
    val orderRecreated = (
        recreatedBox.propositionBytes == SELF.propositionBytes &&
        recreatedBox.R4[SigmaProp].get == SELF.R4[SigmaProp].get &&
        recreatedBox.R5[Long].get == newPrice &&
        recreatedBox.R6[Boolean].get != side  && //side is flipped
        recreatedBox.R7[Long].get == orderSize  && 
        // protection from spending multiple orders with the same output
        recreatedBox.R8[Coll[Byte]].get == SELF.id 
    )
      
    val nanoErgsDifference = if(side) {
      // we are buying token - should be more ERG in our order than in child 
      SELF.value - recreatedBox.value
    } else {
      // we are selling token - so should be more in child order than ours
      recreatedBox.value - SELF.value
    }

    val tokensCheck = if(!side) {
      // if we're selling tokens, we sell all of them
      recreatedBox.tokens.size == 0 
    } else {
      // check ID and amount of token we're buying
      recreatedBox.tokens(0)._1 == tokenId && recreatedBox.tokens(0)._2 == orderSize
    } 

    val exchangeOK = orderSize * SELF.R5[Long].get >= nanoErgsDifference

    // no fee condition here, but we allow to make arbitrage profit in exchangeOK instead
    
    sigmaProp(
        ownerScript ||
        (
            orderRecreated && exchangeOK && (nanoErgsDifference > 0) && tokensCheck 
        )
    ) 
}
```

Could be compiled with:

<https://wallet.plutomonkey.com/p2s/?source=ewogICAgLy8gZGVjZW50cmFsaXplZCBncmlkIG9yZGVyIGNvbnRyYWN0IGZvciB0b2tlbi9FUkcgdHJhZGluZywgd2l0aCBFUkcgYWNjdW11bGF0aW9uIAoKICAgIHZhbCB0b2tlbklkID0gZnJvbUJhc2U1OCgiIikgLy90b2RvOiBwdXQgcmVhbCB0b2tlbiBpZCBoZXJlLCAKICAgIAogICAgLy8gc2NyaXB0IG9mIG9yZGVyIG93bmVyCiAgICB2YWwgb3duZXJTY3JpcHQgPSBTRUxGLlI0W1NpZ21hUHJvcF0uZ2V0CgogICAgLy8gdG9rZW4gcHJpY2UsIGluIG5hbm9FcmcgcGVyIHRva2VuIAogICAgdmFsIHRva2VuUHJpY2UgPSBTRUxGLlI1W0xvbmddLmdldAoKICAgIC8vb3VyIG9yZGVyIHNpZGUsIFRSVUUgPT0gYnV5LCBmYWxzZSA9PSBzZWxsCiAgICB2YWwgc2lkZSA9IFNFTEYuUjZbQm9vbGVhbl0uZ2V0ICAKCiAgICB2YWwgb3JkZXJTaXplID0gU0VMRi5SN1tMb25nXS5nZXQKCiAgICB2YWwgb3V0SW5kZXggPSAxIC8vIFRPRE86IGNoZWNrIGNvbXBvc2FiaWxpdHkKCiAgICB2YWwgcmVjcmVhdGVkQm94ID0gT1VUUFVUUyhvdXRJbmRleCkKCiAgICB2YWwgbmV3UHJpY2UgPSBpZihzaWRlKXsKICAgICAgdG9rZW5QcmljZSAqIDExMiAvIDEwMCAvLyBpZiBvdXIgb3JkZXIgaXMgYnV5LCB3ZSBhcmUgZ29pbmcgdG8gc2VsbCBpbiBhIG5ldyBvcmRlciwgMTIlIGFib3ZlIAogICAgfSBlbHNlIHsKICAgICAgdG9rZW5QcmljZSAqIDkgLyAxMCAvLyBpZiBvdXIgb3JkZXIgaXMgc2VsbCwgd2UgcmVidXkgQCAxMCUgbG93ZWwgbGV2ZWwKICAgIH0KCiAgICAvLyBjaGVjayBjb25kaXRpb25zIG5vdCByZWxhdGVkIHRvIHRyYWRpbmcgaGVyZQogICAgdmFsIG9yZGVyUmVjcmVhdGVkID0gKAogICAgICAgIHJlY3JlYXRlZEJveC5wcm9wb3NpdGlvbkJ5dGVzID09IFNFTEYucHJvcG9zaXRpb25CeXRlcyAmJgogICAgICAgIHJlY3JlYXRlZEJveC5SNFtTaWdtYVByb3BdLmdldCA9PSBTRUxGLlI0W1NpZ21hUHJvcF0uZ2V0ICYmCiAgICAgICAgcmVjcmVhdGVkQm94LlI1W0xvbmddLmdldCA9PSBuZXdQcmljZSAmJgogICAgICAgIHJlY3JlYXRlZEJveC5SNltCb29sZWFuXS5nZXQgIT0gc2lkZSAgJiYgLy9zaWRlIGlzIGZsaXBwZWQKICAgICAgICByZWNyZWF0ZWRCb3guUjdbTG9uZ10uZ2V0ID09IG9yZGVyU2l6ZSAgJiYgCiAgICAgICAgLy8gcHJvdGVjdGlvbiBmcm9tIHNwZW5kaW5nIG11bHRpcGxlIG9yZGVycyB3aXRoIHRoZSBzYW1lIG91dHB1dAogICAgICAgIHJlY3JlYXRlZEJveC5SOFtDb2xsW0J5dGVdXS5nZXQgPT0gU0VMRi5pZCAKICAgICkKICAgICAgCiAgICB2YWwgbmFub0VyZ3NEaWZmZXJlbmNlID0gaWYoc2lkZSkgewogICAgICAvLyB3ZSBhcmUgYnV5aW5nIHRva2VuIC0gc2hvdWxkIGJlIG1vcmUgRVJHIGluIG91ciBvcmRlciB0aGFuIGluIGNoaWxkIAogICAgICBTRUxGLnZhbHVlIC0gcmVjcmVhdGVkQm94LnZhbHVlCiAgICB9IGVsc2UgewogICAgICAvLyB3ZSBhcmUgc2VsbGluZyB0b2tlbiAtIHNvIHNob3VsZCBiZSBtb3JlIGluIGNoaWxkIG9yZGVyIHRoYW4gb3VycwogICAgICByZWNyZWF0ZWRCb3gudmFsdWUgLSBTRUxGLnZhbHVlCiAgICB9CgogICAgdmFsIHRva2Vuc0NoZWNrID0gaWYoIXNpZGUpIHsKICAgICAgLy8gaWYgd2UncmUgc2VsbGluZyB0b2tlbnMsIHdlIHNlbGwgYWxsIG9mIHRoZW0KICAgICAgcmVjcmVhdGVkQm94LnRva2Vucy5zaXplID09IDAgCiAgICB9IGVsc2UgewogICAgICAvLyBjaGVjayBJRCBhbmQgYW1vdW50IG9mIHRva2VuIHdlJ3JlIGJ1eWluZwogICAgICByZWNyZWF0ZWRCb3gudG9rZW5zKDApLl8xID09IHRva2VuSWQgJiYgcmVjcmVhdGVkQm94LnRva2VucygwKS5fMiA9PSBvcmRlclNpemUKICAgIH0gCgogICAgdmFsIGV4Y2hhbmdlT0sgPSBvcmRlclNpemUgKiBTRUxGLlI1W0xvbmddLmdldCA+PSBuYW5vRXJnc0RpZmZlcmVuY2UKCiAgICAvLyBubyBmZWUgY29uZGl0aW9uIGhlcmUsIGJ1dCB3ZSBhbGxvdyB0byBtYWtlIGFyYml0cmFnZSBwcm9maXQgaW4gZXhjaGFuZ2VPSyBpbnN0ZWFkCiAgICAKICAgIHNpZ21hUHJvcCgKICAgICAgICBvd25lclNjcmlwdCB8fAogICAgICAgICgKICAgICAgICAgICAgb3JkZXJSZWNyZWF0ZWQgJiYgZXhjaGFuZ2VPSyAmJiAobmFub0VyZ3NEaWZmZXJlbmNlID4gMCkgJiYgdG9rZW5zQ2hlY2sgCiAgICAgICAgKQogICAgKSAKfQ==>

This contract is accumulating ERGs, fully selling fixed amount of tokens after buying at buy price plus 12%, and re-buying after selling with 10% discount ( thus the grid is slowly moving up, could be useful for tokens which price is likely going up with time against ERG).

Interestingly, we can allow profit to be extracted from the contract, and used for some activities. For example, some DAO can use profit from grid-trading its token for funding its activities.

---

### Post #3 — @kushti (2022-09-28)

We can extend this contract, such that it will reinvest part of its profits, and also will distribute some profit to a Good Things DAO, which goal is to spend funds on adoption and improving image of Ergo and its tooling, for example:

* reward active community based marketing group members
* provide grants for development of tools and interesting dapps
* provide interest-free loans to farmers in Kenya and other places

and so on.

For DAO, ErgoTeam or Paidea can be used

---

### Post #4 — @kushti (2022-10-19)

Wanted to hack a bit around hackathon, making steps toward practical implementation of decentralized grids:

* made a version of contract with stable P2S address, for ERG/SigUSD pair:

```ergoscript
{
    // decentralized grid order contract for token/ERG trading, with ERG accumulation

    val tokenId = fromBase64("P68ssyny6Q1tI7WNkbu2wEaqFDJhzCH1L74oJL/L8E") // SigUSD

    // script of order owner
    val ownerScript = SELF.R4[SigmaProp].get

    // token price, in nanoErg per token (so nanoErg per USD cent)
    val tokenPrice = SELF.R5[Long].get

    //our order side, TRUE == buy, false == sell
    val side = SELF.R6[Boolean].get

    //how many tokens we are buying or selling
    val orderSize = SELF.R7[Long].get

    // how higher or lower price in recreated order in comparison with
    val targets = SELF.R8[(Byte, Byte)].get

    val outIndex = 1 // TODO: check composability

    val recreatedBox = OUTPUTS(outIndex)

    val newPrice = if(side) {
      tokenPrice * targets._1 / 100 // if our order is buy, we are going to sell in a new order, 12% above
    } else {
      tokenPrice * targets._2 / 100 // if our order is sell, we rebuy @ 10% lowel level
    }

    // check conditions not related to trading here
    val orderRecreated = (
        recreatedBox.propositionBytes == SELF.propositionBytes &&
        recreatedBox.R4[SigmaProp].get == SELF.R4[SigmaProp].get &&
        recreatedBox.R5[Long].get == newPrice &&
        recreatedBox.R6[Boolean].get != side  && //side is flipped
        recreatedBox.R7[Long].get == orderSize  &&
        recreatedBox.R8[(Byte, Byte)].get == SELF.R8[(Byte, Byte)].get  &&
        // protection from spending multiple orders with the same output
        recreatedBox.R9[Coll[Byte]].get == SELF.id
    )

    val nanoErgsDifference = if(side) {
      // we are buying token - should be more ERG in our order box than in child
      SELF.value - recreatedBox.value
    } else {
      // we are selling token - so should be more in child order than ours
      recreatedBox.value - SELF.value
    }

    val tokensCheck = if(!side) {
      // if we're selling tokens, we sell all of them
      recreatedBox.tokens.size == 0
    } else {
      // check ID and amount of token we're buying
      recreatedBox.tokens(0)._1 == tokenId && recreatedBox.tokens(0)._2 == orderSize
    }

    val exchangeOK = orderSize * tokenPrice >= nanoErgsDifference

    // no fee condition here, but we allow to make arbitrage profit in exchangeOK instead

    sigmaProp(
        ownerScript ||
        (
            orderRecreated && exchangeOK && (nanoErgsDifference > 0) && tokensCheck
        )
    )
}
```

* to track boxes with DEX LP and decentralized grid orders, it seems it is possible to use custom scans in the node just:

for ErgoDEX ERG-SigUSD LP box:

```ergoscript
{
  "scanName": "ERG-SigUSD DEX LP tracker",
  "walletInteraction": "off",
  "removeOffchain": false,
  "trackingRule": {
    "predicate": "containsAsset",
    "assetId": "9916d75132593c8b07fe18bd8d583bda1652eed7565cf41a4738ddd90fc992ec"
  }
}
```

for grid orders:

```ergoscript
{
  "scanName": "ERG-SigUSD grid orders",
  "walletInteraction": "off",
  "removeOffchain": false,
  "trackingRule": {
    "predicate": "equals",
    "value": "0e87021007040205c80105c8010500040004000e1f3faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf0d807d601e4c6a70408d602b2a5730000d603e4c6a70601d604e4c6a70856d605e4c6a70505d606e4c6a70705d60795720399c1a7c1720299c17202c1a7eb027201d1ededededededededed93c27202c2a793e4c672020408720193e4c6720205059572039d9c72057e8c7204010573019d9c72057e8c72040205730294e4c672020601720393e4c672020705720693e4c672020856720493e4c67202090ec5a7929c720672057207917207730395ef720393b1db630872027304d801d608b2db63087202730500ed938c7208017306938c7208027206"
  }
}
```

Next, offchain matching engine is needed, working on that.

---

### Post #5 — @kushti (2022-11-10)

There are some issues with contracts above, current version with fixes done (for ERG/SigUSD pair):

```ergoscript
{
    // decentralized grid order contract for token/ERG trading, with ERG accumulation

    val tokenId = fromBase64("A/ryyzKfLpDW0jtY2Ru7bARqoUMmHMIfUvvigkv8vwQ=") // SigUSD

    // script of order owner
    val ownerScript = SELF.R4[SigmaProp].get

    // token price, in nanoErg per token (so nanoErg per USD cent)
    val tokenPrice = SELF.R5[Long].get

    //our order side, TRUE == BUY, false == SELL
    //BUY means we are buying tokens with ERGs, SELL means we sell tokens for ERGs
    val side = SELF.R6[Boolean].get

    //how many tokens we are buying or selling
    val orderSize = SELF.R7[Long].get

    // new price targets for buy and sell actions, respectively
    val targets = SELF.R8[Coll[Byte]].get

    val outIndex = 1 // TODO: check composability

    val recreatedBox = OUTPUTS(outIndex)

    val newPrice = if(side) {
      tokenPrice * targets(0) / 100 // if our order is buy, we are going to sell in a new order, 
    } else {
      tokenPrice * targets(1) / 100 // if our order is sell, we rebuy @ lower price
    }

    // check conditions not related to trading here
    val orderRecreated = (
        recreatedBox.propositionBytes == SELF.propositionBytes &&
        recreatedBox.R4[SigmaProp].get == SELF.R4[SigmaProp].get &&
        recreatedBox.R5[Long].get == newPrice &&
        recreatedBox.R6[Boolean].get != side  && //side is flipped
        recreatedBox.R7[Long].get == orderSize  &&
        recreatedBox.R8[Coll[Byte]].get == SELF.R8[Coll[Byte]].get  &&
        // protection from spending multiple orders with the same output
        recreatedBox.R9[Coll[Byte]].get == SELF.id
    )

    val nanoErgsDifference = if(side) {
      // we are buying token - should be more ERG in our order box than in child
      SELF.value - recreatedBox.value
    } else {
      // we are selling token - so should be more in child order than ours
      recreatedBox.value - SELF.value
    }

    val tokensCheck = if(!side) {
      // if we're selling tokens, we sell all of them
      recreatedBox.tokens.size == 0
    } else {
      // check ID and amount of token we're buying
      recreatedBox.tokens(0)._1 == tokenId && recreatedBox.tokens(0)._2 == orderSize
    }

    val exchangeOK = if(side) {
      nanoErgsDifference <= orderSize * tokenPrice
    } else {
      nanoErgsDifference >= orderSize * tokenPrice
    }

    // no fee condition here

    sigmaProp(
        ownerScript ||
        (
            orderRecreated && exchangeOK && (nanoErgsDifference > 0) && tokensCheck
        )
    )
}
```

Its P2S address:

```ergoscript
3STRfQkJvGgMQ9JrSpvAwMPABQrRidwYCCPadHtzHcrpyUJBeA6o6Ua3fb7xGr5z4Cxhp56oqERn8H97ewp1PPemqDEkqM3MQ9pXXhjHnxJEayFQPdobNB829duPZeRj9zDRKTHQ97tEXFgZwCcveDXMQYdt4w8rYm7SVURCUK2PimkM5PgvaRT7DdxjVefGGzcHRXfSyQkUSWrmJb5mUuyPz4LGSofRaksNZG7yKMtrBqDniG1KfE5cFZhMEFRnUgSBnZqn6vxfzXtJEFdhdJPemg3XKKDAoAiTrcsWgbTzuoqDsu3MCm54fy4adVFJG9E6ENujSrW1UgYt1c8uBbJhqMZDHPaBRsECWd4cNVb6Z92T6S5zgvLfwLs2rFvHmfTA3NsW5
```

And thus custom tracking rule for grid orders:

```ergoscript
{
  "scanName": "Grid orders",
  "walletInteraction": "off",
  "removeOffchain": false,
  "trackingRule": {
    "predicate": "equals",
    "value": "0e9b0210090402040005c801040205c8010500040004000e2003faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04d807d601e4c6a70408d602b2a5730000d603e4c6a70601d604e4c6a7080ed605e4c6a70505d606e4c6a70705d60795720399c1a7c1720299c17202c1a7eb027201d1ededededededededed93c27202c2a793e4c672020408720193e4c6720205059572039d9c72057eb272047301000573029d9c72057eb2720473030005730494e4c672020601720393e4c672020705720693e4c67202080e720493e4c67202090ec5a79572039072079c720672059272079c72067205917207730595ef720393b1db630872027306d801d608b2db63087202730700ed938c7208017308938c7208027206"
  }
}
```

So I made offchain part which is working with the node just, and was able to do trades against Spectrum’s AMM LP : [Ergo Explorer](https://explorer.ergoplatform.com/en/addresses/3STRfQkJvGgMQ9JrSpvAwMPABQrRidwYCCPadHtzHcrpyUJBeA6o6Ua3fb7xGr5z4Cxhp56oqERn8H97ewp1PPemqDEkqM3MQ9pXXhjHnxJEayFQPdobNB829duPZeRj9zDRKTHQ97tEXFgZwCcveDXMQYdt4w8rYm7SVURCUK2PimkM5PgvaRT7DdxjVefGGzcHRXfSyQkUSWrmJb5mUuyPz4LGSofRaksNZG7yKMtrBqDniG1KfE5cFZhMEFRnUgSBnZqn6vxfzXtJEFdhdJPemg3XKKDAoAiTrcsWgbTzuoqDsu3MCm54fy4adVFJG9E6ENujSrW1UgYt1c8uBbJhqMZDHPaBRsECWd4cNVb6Z92T6S5zgvLfwLs2rFvHmfTA3NsW5)

I will open-source offchain part at some point, at the moment it is dirty and UI is creepy )

![grid](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/4/469f68363eddbe80b6fe1db1adc6ccfe99b3b1ea.png)

Decentralized grid orders can be seen as a first example of *smart* orders, so orders which can requirements additional to just fulfillment (in this case, an order is requiring for an order in opposite direction to be created).

I am thinking to play a bit more and then ask some whales from around to put money into a grid, such as the grid will assume price growth with time (for SigUSD bought, selling price would be e.g. +6%, after selling price to re-buy will be -4%). Accumulated ERG profits will be shared with a treasury for community-based marketing machine, thus whales and community based marketing group will work towards the same goal, with transparency and agreement enforcement (most critical parts of it) to be done on-chain.
