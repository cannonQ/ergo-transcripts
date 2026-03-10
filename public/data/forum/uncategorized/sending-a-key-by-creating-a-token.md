---
title: Sending a key by creating a token
description: 'ErgoForum discussion: Sending a key by creating a token'
tags:
- addresses
- eip
- ergoforum
- native-tokens
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/sending-a-key-by-creating-a-token/4244
created: '2023-03-08'
last_activity: '2023-10-12'
posts_count: 3
views: 456
likes: 3
glossary_hits:
- Addresses
- EIP
- Native tokens
- Transaction
---

# Sending a key by creating a token

> **Forum thread:** [https://ergoforum.org/t/sending-a-key-by-creating-a-token/4244](https://ergoforum.org/t/sending-a-key-by-creating-a-token/4244)
> **Category:** Uncategorized | **Created:** 2023-03-08 | **Posts:** 3 | **Views:** 456

**Related concepts:** Addresses, EIP, Native tokens, Transaction

---

### Post #1 — @Ladopixel (2023-03-08)

Some time ago I had a conversation with supERGeometry about creating and sending a token with an encrypted description and its key. The idea is to create a token that has the title and description encrypted and at the same time send the key so that it can be decrypted (without being visible to everyone of course).

An application to create a token with the encrypted information is finished (many improvements are missing but most of it is done):

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ladopixel/schedulERG)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/1/150092619f822e847ca81f8e9b4d8b00c65514f0_2_690x345.png)

### [GitHub - ladopixel/schedulERG: Create and query tokens on the Ergo blockchain...](https://github.com/ladopixel/schedulERG)

Create and query tokens on the Ergo blockchain by encrypting and decrypting the description with a password. - GitHub - ladopixel/schedulERG: Create and query tokens on the Ergo blockchain by encry...

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ladopixel/schedulERGweb)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/e/ea417da8c5942c11c86f2c649044cb317a854a35_2_690x345.png)

### [GitHub - ladopixel/schedulERGweb: Create and query tokens on the Ergo...](https://github.com/ladopixel/schedulERGweb)

Create and query tokens on the Ergo blockchain by encrypting and decrypting the description with a password. (Python Flask) - GitHub - ladopixel/schedulERGweb: Create and query tokens on the Ergo b...

Now the way to send the key to the target wallet is missing.

Do you think it is possible to get the key somehow?  
Ideas to make the key travel with the encrypted message?

---

### Post #2 — @Grayman (2023-03-08)

Would it be possible to require the receiver to sign a separate transaction to decrypt the key?

I mean, if someone else saw the transaction and wanted to decrypt the key, they would be unable without the ability to sign the transaction from the address that matches the receiver’s address…

---

### Post #3 — @blaire2b256 (2023-10-12)

Making my way through the forum and some (partial/incomplete) EIPs

This may be interesting: [eip-0032](https://github.com/ergoplatform/eips/blob/5a959f1e2a00732dbe46929ae0299a8af689325d/eip-0032.md)

[@Ladopixel](/u/ladopixel) have you seen this EIP? Or have you considered the problem further?
