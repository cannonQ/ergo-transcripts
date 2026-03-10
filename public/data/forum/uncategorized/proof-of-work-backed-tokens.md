---
title: Proof-of-Work Backed Tokens
description: 'ErgoForum discussion: Proof-of-Work Backed Tokens'
tags:
- box
- context-extension
- difficulty-adjustment
- ergoforum
- ergoscript-context
- native-tokens
- registers
- token-id-rule
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/proof-of-work-backed-tokens/224
created: '2020-05-21'
last_activity: '2020-05-22'
posts_count: 4
views: 2123
likes: 12
glossary_hits:
- Box
- Context extension
- Difficulty adjustment
- ErgoScript context
- Native tokens
- Registers
- Token ID rule
- Transaction
---

# Proof-of-Work Backed Tokens

> **Forum thread:** [https://ergoforum.org/t/proof-of-work-backed-tokens/224](https://ergoforum.org/t/proof-of-work-backed-tokens/224)
> **Category:** Uncategorized | **Created:** 2020-05-21 | **Posts:** 4 | **Views:** 2123

**Related concepts:** Box, Context extension, Difficulty adjustment, ErgoScript context, Native tokens, Registers, Token ID rule, Transaction

---

### Post #1 — @kushti (2020-05-21)

In Ergo, one token per transaction can be issued, and the token id must be the same as id of the box of the first input.

Thus if you have generated a box you know id of the future token. And this id is calculated via hashing.

Thus via iterating over a register (e.g. R4) used as a nonce, you can create a token with specific id properties, e.g. starting with certain number of zeroes. So some work could be required in order to make such a token. Something like VanityGen-adress in Bitcoin, but now VanityGen token )

Then some contracts may accept such PoW-backed NFTs only.

I haven’t thought about use-cases though. Maybe some related to filtering out spam.

---

### Post #2 — @morphic (2020-05-21)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> Maybe some related to filtering out spam.

This is how useful proof of work can be implemented. When combined with service tokens.  
And looks like the idea can be extended to not just tokens but any hash in registers can be used as a nonce. And then once obtained can be checked in contracts.

Very cool.

---

### Post #3 — @robert (2020-05-21)

Great idea [@kushti](/u/kushti).

Thinking a bit out there, one potential use case could be a decentralized way for generating NFTs that represent an identity for 1st/2nd layer protocols that inherently provide sybil attack resistance natively. The higher the PoW required to generate a given NFT, the more value that was placed in generating said identity NFT, and thus you likely can award a higher default reputation score to said id.

A market could come about which sells higher-difficulty identities for more money, thereby having a way to funnel out participants in protocols based off of how much they are willing to spend on an id.

All that would be needed would be some sort of algorithm that goes from token id -> Unique human readable name.

---

### Post #4 — @scalahub (2020-05-22)

Very interesting idea for spam filtering and other uses (vanity tokens seems to be a good one).

Perhaps I’m missing something but why only restrict to tokens? Could we not have “proof-of-work backed outputs”, where `hash(box.R4[Coll[Byte]].get)` starts with certain number of zeros, or even “proof-of-work backed inputs”, where `hash(getVar[Coll[Byte]](1))` must start with certain number of zeros?
