---
title: Ergo Addresses Details
description: 'ErgoForum discussion: Ergo Addresses Details'
tags:
- addresses
- box
- ergoforum
- native-tokens
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-addresses-details/40
created: '2019-07-16'
last_activity: '2019-08-09'
posts_count: 6
views: 1897
likes: 6
glossary_hits:
- Addresses
- Box
- Native tokens
- Transaction
---

# Ergo Addresses Details

> **Forum thread:** [https://ergoforum.org/t/ergo-addresses-details/40](https://ergoforum.org/t/ergo-addresses-details/40)
> **Category:** Uncategorized | **Created:** 2019-07-16 | **Posts:** 6 | **Views:** 1897

**Related concepts:** Addresses, Box, Native tokens, Transaction

---

### Post #1 — @kushti (2019-07-16)

An address is a short string corresponding to some script used to protect a box. Unlike (hex-encoded) binary representation of a script, an address has some useful characteristics:

* Integrity of an address could be checked, as it is incorporating a checksum.
* A prefix of address is showing network and an address type. In particular, the network prefix prevents you from mistakenly sending mainnet tokens to the testnet address.
* An address is using an encoding (namely, Base58) which is avoiding similarly l0Oking characters, friendly to double-clicking and line-breaking in emails.

An address is encoding network type , address type, checksum, and enough information to watch for a particular scripts.

Possible network types are:  
Mainnet - 0x00  
Testnet - 0x10

Address types are (semantics described below):

* 0x01 - Pay-to-PublicKey(P2PK) address
* 0x02 - Pay-to-Script-Hash(P2SH)
* 0x03 - Pay-to-Script(P2S)

For an address type, we form content bytes as follows:

P2PK - serialized (compressed) public key  
P2SH - first 192 bits of the Blake2b256 hash of serialized script bytes  
P2S - serialized script

Address examples for testnet:

* 3 - P2PK (3WvsT2Gm4EpsM9Pg18PdY6XyhNNMqXDsvJTbbf6ihLvAmSb7u5RN)
* 8 - P2SH (8UmyuJuQ3FS9ts7j72fn3fKChXSGzbL9WC, 8LnSX95GAWdbDZWJZQ73Uth4uE8HqN3emJ)
* ? - P2S (imdaM2NzX, z4hAmfvfSnQJPChMWzfBzJjpB8ei2HoLCZ2RHTaNArMNHFirdJTc7E)

for mainnet:

* 9 - P2PK (9fRAWhdxEsTcdb8PhGNrZfwqa65zfkuYHAMmkQLcic1gdLSV5vA)
* 2 - P2SH (25qGdVWg2yyYho8uC1pLtc7KxFn4nEEAwD, 23NL9a8ngN28ovtLiKLgHexcdTKBbUMLhH)
* ? - P2S (7bwdkU5V8, BxKBaHkvrTvLZrDcZjcsxsF7aSsrN73ijeFZXtbj4CXZHHcvBtqSxQ)

Prefix byte = network type + address type  
checksum = leftmost\_4\_bytes(blake2b256(prefix byte || content bytes))  
address = prefix byte || content bytes || checksum

---

### Post #2 — @robert (2019-07-19)

Good to see a lot of the technical details are now coming out in more detail ![:+1:](https://emoji.discourse-cdn.com/twitter/+1.png?v=9 ":+1:")

I think it’d be useful to have an explanation for why both P2SH and a P2S exist as separate address schemes and what are the use cases for each.

---

### Post #3 — @kushti (2019-07-22)

Thanks!

For example, sending 10 Ergs to a P2PK address usually means that a corresponding transaction  
will contain a box in which 10 Ergs are locked by a public key encoded in the P2PK address. Similarly,  
in case of a P2S address the box will be locked by a script encoded in the address. In the most complicated case of a P2SH script, the box will be protected by a special predefined script which is taking first 192 bits of Blake2b256 hash value for a script which should be shown by an input spending the box. P2PK and P2SH in Ergo are pretty similar to Bitcoin, while P2S in unique.

---

### Post #4 — @kushti (2019-07-24)

Updated version is published on the blog <https://ergoplatform.org/en/blog/2019_07_24_ergo_address/>

---

### Post #5 — @scalahub (2019-08-05)

I think it will be good to give some use-cases where P2S addresses are necessary and P2SH won’t be sufficient (to motivate the need for such addressing scheme).

---

### Post #6 — @kushti (2019-08-09)

For P2SH, some off-chain knowledge of a script which is the P2SH preimage is needed, for P2S not so. P2S could be useful for non-interactive protocols and contracts where you do not quite know a recipient. Maybe mixing could be a good case for that.
