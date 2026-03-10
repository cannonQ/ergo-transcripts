---
title: A modified version of ergomix and transaction with threshold signature
description: 'ErgoForum discussion: A modified version of ergomix and transaction
  with threshold signature'
tags:
- addresses
- box
- ergo-explorer
- ergoforum
- ergomixer
- ergoscript-context
- full-node
- native-tokens
- ring-signatures
- token-id-rule
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/a-modified-version-of-ergomix-and-transaction-with-threshold-signature/239
created: '2020-06-11'
last_activity: '2020-06-22'
posts_count: 12
views: 798
likes: 26
glossary_hits:
- Addresses
- Box
- Ergo Explorer
- ErgoMixer
- ErgoScript context
- Full node
- Native tokens
- Ring signatures
- Token ID rule
- Transaction
---

# A modified version of ergomix and transaction with threshold signature

> **Forum thread:** [https://ergoforum.org/t/a-modified-version-of-ergomix-and-transaction-with-threshold-signature/239](https://ergoforum.org/t/a-modified-version-of-ergomix-and-transaction-with-threshold-signature/239)
> **Category:** Uncategorized | **Created:** 2020-06-11 | **Posts:** 12 | **Views:** 798

**Related concepts:** Addresses, Box, Ergo Explorer, ErgoMixer, ErgoScript context, Full node, Native tokens, Ring signatures, Token ID rule, Transaction

---

### Post #1 — @Martin-mx (2020-06-11)

**“A modified version of ergomix is ready to launch on mainnet”**

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/anon2020s/48/309_2.png)
[Tokens mixer is done](https://www.ergoforum.org/t/tokens-mixer-is-done/219/6) [Ecosystem Development](/c/dev/ecosystem-development/9)

> A modified version of ergomix is ready to launch on miannet.
> Thanks to the great contribution of [@anon92048](/u/anon92048) and based on his code, we improved the code and will launch the improved mixer in a few days.
> key features are:
> Token-based fee support. No sponsored fee is needed.
> Token-based fee model is completely transparent for the user and is handled automatically by smart contracts.
> Adaptable token pricing scheme. token emission contract support selling different batches. price parameters are s…

<https://twitter.com/ergoplatformorg/status/1271121753746612233>

**Transaction with threshold signature**

Unlike Bitcoin, threshold signatures in Ergo preserve zero-knowledge: not possible to get who were those two guys who actually signed the spending.

<https://explorer.ergoplatform.com/en/transactions/5cfc583391c79aa8816712ceb1fea060d8b3213a86c307ec9ee47143188d477d>

<https://twitter.com/ergoplatformorg/status/1271174453242859524>

---

### Post #2 — @anon2020s (2020-06-15)

the mixer is almost ready to be launched. code and binary will be released by June 16.  
[sneak peek](https://explorer.ergoplatform.com/en/addresses/335p5LAhvgYiQJRRYgWxkpmhRxfDn6axj9jSzALE2HN8oWgaChxu9iBabSp5wtrTkMVok7nETtmnrN4fGPbxbYKU4ypAJjqBe5HPfUqRBSKCKz9byMJ4BgmpKSCBGYAZ8FdewPVJXtV1FHqqKhvmB9NMrZx5VgzBNYeuAm831dWnQ2gGRyAJWSypzMGviLPi5emFFB4K2u8zeGkoox1TAxWLUEsvmCzd3BwAa9EM5fR882Vw6W2Uojtpw1RQoPK5yoUNJwWjMsryL1nDtDUdvsDZxhA9t3B4UsgZq4ok7mdXyMB1ZiaDSbYGfVw1D4UwzB3MrEsBMtzGBAbxxtNoK6voHhkDGFmfp72tbJtzuXV)

---

### Post #3 — @Martin-mx (2020-06-15)

<https://twitter.com/ergoplatformorg/status/1272644044158631936>

---

### Post #4 — @anon2020s (2020-06-18)

Ergomixer v1.0.0 is available for download!  
binary: <https://github.com/ergoMixer/ergoMixBack/releases/download/1.0.0/ergoMixer-1.0.0.jar>  
source code: <https://github.com/ergomixer>

support for token mixing is coming.

---

### Post #5 — @anon2020s (2020-06-18)

docker image is available too: <https://hub.docker.com/r/ergomixer/mixer>

---

### Post #6 — @Martin-mx (2020-06-18)

<https://twitter.com/ergoplatformorg/status/1273540224111521793>

---

### Post #7 — @anon2020s (2020-06-20)

Starting a new mix is out of service for a few minutes due to a vulnerability in the token emission box contract!  
This issue has nothing to do with user’s deposits/half-boxes/full-boxes and only concerns owners’ boxes.  
Already in progress mixes can continue to work with no problem; only starting a new mix requires you to update to the new code/binary.  
Even if you have mixes in progress, You can update to the new code/binary. Your mixes will continue to work with no problem after the update.  
By using this vulnerability, in some cases, one could spend more than one of our token boxes and only provide a single copy of the token box in the outputs of the spending transaction. one could send token boxes’ ergs to her own address but could not have more tokens than she was supposed to have.  
Btw, no attack was performed usign this vulnerability!  
Fixed code/binary will be ready to be used in just a few minutes.

Also, support for token mixing will be added soon.

---

### Post #8 — @anon2020s (2020-06-20)

ErgoMixer is updated and ready to use.  
please update your ergoMixer to the latest version (v1.0.1):  
<https://github.com/ergoMixer/ergoMixBack/releases/download/1.0.1/ergoMixer-1.0.1.jar>  
<https://hub.docker.com/r/ergomixer/mixer>

---

### Post #9 — @robert (2020-06-20)

Very cool. I have a small question about this ErgoMix implementation. How does it end up submitting txs without requiring an unlocked wallet? Is it due to the fact that the P2S contracts require no signature and so you can simply craft a valid tx (with the secret required held locally/privately) and post it to the network via any node?

And if there is no signing, could this be susceptible to a MitM attack? My memory of ErgoMix is a bit fuzzy (and I haven’t read the contracts), but seeing as the withdrawal address is editable and the tx (I believe?) is unsigned, can’t someone copy the payload, change the withdrawal address, submit a larger fee, and withdraw your coins first?

I’m probably missing something since I’m inferring a bit since there explanation for this implementation hasn’t been written yet, but if you could respond that would be great [@anon2020s](/u/anon2020s)

---

### Post #10 — @anon92048 (2020-06-20)

[@anon2020s](/u/anon2020s) Good job buddy! I leave mixer for you then. And after taking some rest I will likely deliver something new for privacy.

---

### Post #11 — @anon92048 (2020-06-20)

[@anon2020s](/u/anon2020s) 's mixer is based on mine. And mine is based on ErgoAppKit. The latter has signing functionality, then the mixer is not using the node in order to form and sign the transactions, it also keeps secrets locally (a lot of one-time secrets being used, one new secret per each step of mixing). The node is used only for broadcasting.

---

### Post #12 — @robert (2020-06-22)

Ah cool, thanks for answering my questions.
