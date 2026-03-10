---
title: Asset Issuance Standard and Oracles
description: 'ErgoForum discussion: Asset Issuance Standard and Oracles'
tags:
- box
- ergo-explorer
- ergoforum
- ergoscript-context
- native-tokens
- registers
- singleton-/-state-nft
- storage-rent
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/asset-issuance-standard-and-oracles/43
created: '2019-07-16'
last_activity: '2019-07-24'
posts_count: 4
views: 1138
likes: 9
glossary_hits:
- Box
- Ergo Explorer
- ErgoScript context
- Native tokens
- Registers
- Singleton / State NFT
- Storage rent
- Transaction
---

# Asset Issuance Standard and Oracles

> **Forum thread:** [https://ergoforum.org/t/asset-issuance-standard-and-oracles/43](https://ergoforum.org/t/asset-issuance-standard-and-oracles/43)
> **Category:** Uncategorized | **Created:** 2019-07-16 | **Posts:** 4 | **Views:** 1138

**Related concepts:** Box, Ergo Explorer, ErgoScript context, Native tokens, Registers, Singleton / State NFT, Storage rent, Transaction

---

### Post #1 — @kushti (2019-07-16)

Ergo supports custom tokens as first class citizens. Namely, a special register (R2) of a box contains (tokenId -> amount) pairs. Hard limit for number of tokens per box or per transaction is pretty liberal, namely, there could be up to 255 secondary tokens in a transaction or a box, however, there are indirect limits (box could be no more than of 4 kilobytes, and also tokens add to estimated computational cost of the transaction).

Erg amount is written directly (with no identifier) as a number into register R0. There are more significant differences between Ergs and other tokens:

* Ergs can not be burnt: total amount of ergs in transaction inputs should be equal to total amount of the outputs. Unlike ergs, other tokens can be burnt: total amount for a token in transaction inputs should be no less than amount of the outputs.
* Storage rent (see Sec 5 of the whitepaper) could be paid only in Ergs.

Tokens can represent shares, complementary currency units etc. In the UTXO model a token issued with amount of exactly 1, which we call the singleton token, could also be used to imitate long-living accounts existing in Waves, Ethereum Classic etc. Namely, a transaction spends an old box with the singleton token, and creates a new one, and script of the old box can demand the new box to have certain properties (e.g. a particular script, or a particular amount). Thus the smart account marked with the token can live and have its state changed as prescribed by the smart account contract through a transaction chain.

A particular case for a singular token is an oracle. One can create a token for e.g. ERG/EUR exchange rates oracle. Then a box which contains the token has exchange rate encoded in a certain register. As the oracle is long-living account, contracts can know oracle token identifier in advance, and refer to it.

How new asset could be created? There is a notable exception to the weak preservation rule (total amount in inputs is no less than total amount in outputs), namely, a transaction can create out-of-thin-air tokens in its outputs if asset identifier is equal to the identifier of the first input box of the transaction. As box identifier is cryptographically unique, there’s no chance to have second asset with the same identifier while hash function being used is collision-resistant (and it surely is). This rule also means that only one new asset per transaction can be created.

Ergo reference implementation wallet is using certain registers in a certain way, though this is not required by the protocol:

* R4 - verbose name
* R5 - description
* R6 - number of decimal places
* additional registers (R7, R8, R9) could be used for asset-specific information

This convention can be used by applications, however, again, the protocol is not enforcing it.

Should we have specific conventions for oracles as well?

---

### Post #2 — @robert (2019-07-17)

I think in regards to conventions around oracles, it would be good to have a standard so especially down the line people can have an easy time integrating. With that said, there will probably be edge-cases where the standard doesn’t fit, so having it not be strictly enforced would make sense.

Maybe creating a v1 of an oracle standard, making a few examples and getting people to try to make/use some on their own for some duration of time, and then maybe regrouping and seeing if a new v2 standard could improve would make sense?

---

### Post #3 — @kushti (2019-07-18)

Thanks, Robert! Yes, I think it is reasonable to first make some v1 standard, then play a bit with it and decide which improvements make sense.

A common standards could be good not just for integration, but also for block or application explorers. I think Waves Oracles Explorer is a good example of such an explorer: <https://oracles.wavesexplorer.com/>

---

### Post #4 — @lorien (2019-07-24)

Guys, I am going to implement few oracles that let you get Ergo pricing. Will update you about progress.
