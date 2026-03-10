---
title: Scalable, On-Demand NFT Minting
description: 'ErgoForum discussion: Scalable, On-Demand NFT Minting'
tags:
- addresses
- avl-tree
- box
- eip
- eip-24
- eip-4
- ergoforum
- ergopad
- ergoscript-context
- getblok-plasma
- native-tokens
- registers
- singleton-/-state-nft
- token-id-rule
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/scalable-on-demand-nft-minting/3770
created: '2022-08-10'
last_activity: '2022-08-18'
posts_count: 10
views: 793
likes: 15
glossary_hits:
- AVL tree
- Addresses
- Box
- EIP
- EIP-24
- EIP-4
- ErgoPad
- ErgoScript context
- GetBlok Plasma
- Native tokens
- Registers
- Singleton / State NFT
- Token ID rule
- Transaction
---

# Scalable, On-Demand NFT Minting

> **Forum thread:** [https://ergoforum.org/t/scalable-on-demand-nft-minting/3770](https://ergoforum.org/t/scalable-on-demand-nft-minting/3770)
> **Category:** Uncategorized | **Created:** 2022-08-10 | **Posts:** 10 | **Views:** 793

**Related concepts:** AVL tree, Addresses, Box, EIP, EIP-24, EIP-4, ErgoPad, ErgoScript context, GetBlok Plasma, Native tokens, Registers, Singleton / State NFT, Token ID rule, Transaction

---

### Post #1 — @CheeseEnthusiast (2022-08-10)

I was discussing different ways to make mass NFT minting and sales more scalable with a few other devs (like MGPai, lgd, Ilya). Currently, if you want to mint and sell 1000 NFTs, you need to do 1000 NFT minting transactions, and then over time do 1000 sale transactions.

To make this more efficient, one could use an AVL Tree. Lets say the tree holds sequential, serialized long values as it’s keys. In it’s values it holds 1000 unique metadata’s for different potential NFTs. We insert this pre-filled tree into a Mint&Sale box in R4.

Whenever someone wants to buy an NFT from the Mint&Sale box, a key is selected (For simplicity’s sake we’ll say the user selects the NFT, other selection methods are possible but might require some changes). Once selected, a lookup is performed on the key. A serialized `Coll[Byte]` representing all of the NFT metadata is then returned. This `Coll[Byte]` is then parsed and placed into the registers of `OUTPUTS(0)` according to EIP-04 standards. A new NFT is then minted and also placed into `OUTPUTS(0)`. Finally, the Mint&Sale box is remade in `OUTPUTS(1)` so that other sales may occur. If re-use of metadata is an issue, then the used key may be deleted from the tree existing in `OUTPUTS(1)`

At the same time, the sale is also performed. The ERG provided by the buyer in one of the inputs goes to the artist. In this way, the sale and minting of the NFT is combined into a single transaction. NFTs are only minted when a user wants to buy them, so there is no need to pre-mint 1000 NFTs before the sale.

I believe this would help scale NFT minting and sales considerably, though I don’t have the time to implement it myself.

---

### Post #2 — @lgd (2022-08-11)

I might implement this for ErgoPad as well. One could imagine using what you outlined if someone wanted to only mint NFTs, while the more complex protocol with the pre-minting would be used if tokens needed to be minted.

---

### Post #3 — @lgd (2022-08-11)

Wouldn’t you need a chained tx to send the NFT to the buyer?

---

### Post #5 — @CheeseEnthusiast (2022-08-11)

I don’t see why one would be needed. Just set the EIP-04 registers on the box holding the NFT. That box’s prop bytes will be the prop bytes of the buyer.

---

### Post #6 — @lgd (2022-08-16)

damn, just looked over v2 of the artwork standard (v2 of EIP4), it uses up all the registers in the issuer box.

---

### Post #7 — @CheeseEnthusiast (2022-08-16)

Yeah I discussed this with MgPai, it requires some slight changes (making a separate contract as the issuer box in INPUTS(0)) but in general should still work if done correctly.

---

### Post #8 — @Hazey (2022-08-18)

I think this is great! But it may have a bunch of issues.

1. Assumption that an NFT sale happens ‘over time’ is kinda hopeful, this has to handle every single NFT being sold in a minute flat.
2. If tx is user-initiated, users can cancel a mint and get a different nft by re-spending their input
3. If the first P2PK found in mint chain is a box originating from the buyer, they’re the mint address. With the collection EIP this could be mitigated, but imo it’s gonna cause issues with the existing ‘mint address is the authenticity prover’ method  
   I suppose you can avoid this by the first input into minting tx being the mint box, BUT that presents another issue, described below.
4. Currently the mint address is first P2PK addr found in the chain of boxes which led to the nft mint issuance.  
   In this model, you would send some erg from a P2PK to form the contract’s box. The first mint would be done by spending this box, creating an NFT and a new, second mintSaleBox.

Finding the mint address for nft 1 is just checking the tx which issued the mintSaleBox, then checking each input box, and you have the mint addr. 1 api call.

For nft 2, you have to check the tx issuing mintSaleBox2, check input (mintSaleBox1) check tx that issued, check input boxes addresses, you’re at mint address. (2 api calls)

For nft 1000, you’d be performing 1000 API calls to find a mint address - a nightmare for apps to cope with.

---

### Post #9 — @CheeseEnthusiast (2022-08-18)

1. The same principles used in liquidity pools to deal with concurrency can be dealt with here. That is, proxy contracts and chaining transactions together, possibly using bots for full decentralization
2. This can also be solved with proxy contracts and bots / centralized service
3. Yeah this issue was brought to me by MGPAI as well. A separate issuer contract is needed, however that has some other problems (traits being assigned on the issuer contract)
4. This one is tough to handle, MgPai also brought it up to me as well. Not really sure how to fix this easily, if we require multiple set up transactions to create multiple issuer boxes, then we have not solved the problem, because 1000 set up transactions are now needed (while the old problem was 1000 minting transactions).

One possible way to fix this is to put a singleton token on the Sale&Mint box. Then find the transaction that mints this singleton token, and use its 0’th input as the minting address for the entire collection. But to be honest I don’t know much about this side of NFT’s, the most I know is EIP-04 ![:sweat_smile:](https://emoji.discourse-cdn.com/twitter/sweat_smile.png?v=12 ":sweat_smile:")

If the above solution isn’t viable, then maybe something else could be done?

---

### Post #10 — @lgd (2022-08-18)

I guess for point 4, with your idea we would need to change the standard. Seems like the standard is limiting case. Or it would force the need that if you wanted to mint multiple NFTs you would need to make them part of a collection and mint a collection token beforehand. The standard doesn’t scale lol.

---

### Post #11 — @lgd (2022-08-18)

So you would need four api calls I think, anyone please correct me if I’m wrong:

1. to see which tx the nft came from, in order to check for the issuer box input that contains the collection token
2. to find the minting tx of the collection token issuer box
3. to find the tx which created the nft collection issuer box, whose input is the user’s proxy address box
4. to find the pk which sent money to the proxy

For mass token minting (i.e. pre-mint, not on-demand nft sale), since mass minting occurs using many tx chain “modules” (each chain having it’s first “chain input” being the output of the same initial tx) this can scale for however many tokens you want to mint. 1K/10K/100K/100M etc. Using Plasma of course ![:wink:](https://emoji.discourse-cdn.com/twitter/wink.png?v=12 ":wink:")

I guess you could also make the NFT collection issuer box the proxy contract as well, so reducing the calls to 3 only. Then make the user sign a ReducedTxBytes so the output box could be created/formatted properly beforehand.
