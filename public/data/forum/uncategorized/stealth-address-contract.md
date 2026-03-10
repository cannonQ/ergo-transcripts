---
title: Stealth Address Contract
description: 'ErgoForum discussion: Stealth Address Contract'
tags:
- addresses
- box
- ergoforum
- ergomixer
- registers
- stealth-addresses
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/stealth-address-contract/255
created: '2020-06-21'
last_activity: '2021-05-25'
posts_count: 5
views: 2719
likes: 22
glossary_hits:
- Addresses
- Box
- ErgoMixer
- Registers
- Stealth Addresses
- Transaction
---

# Stealth Address Contract

> **Forum thread:** [https://ergoforum.org/t/stealth-address-contract/255](https://ergoforum.org/t/stealth-address-contract/255)
> **Category:** Uncategorized | **Created:** 2020-06-21 | **Posts:** 5 | **Views:** 2719

**Related concepts:** Addresses, Box, ErgoMixer, Registers, Stealth Addresses, Transaction

---

### Post #1 — @kushti (2020-06-21)

Another solution for improving privacy is using stealth addresses. A stealth address preserves recipient privacy without per-transaction interaction needed (so receiver published an address e.g. on its website, and then sender can obtain some unique one-time address from it). This could be useful for privacy-preserving commerce, private donations and crowdfunding campaigns etc.

A solution in Ergo can be based on non-interactive Diffie-Hellman key exchange again (like the non-interactive mixing). So a merchant, for example, is publishing its public key g^x corresponding to the secret x. Then the buyer with public key g^y obtains shared secret (g^x)^y = (g^y)^x , then the box created by the buyer could be protected by prove\_dlog(g^xy for generator g^y). Unfortunately, Ergo does not have prove\_dlog with a custom generator, but it can be bypassed via proveDHTuple(g^y, g^y, g^xy, g^xy) (a little bit weird trick but okay). To have one-time keys, buyer can use one-time secret g^r.

Then the stealth address application could be as follows: <https://wallet.plutomonkey.com/p2s/?source=ewogIHZhbCBneSA9IFNFTEYuUjRbR3JvdXBFbGVtZW50XS5nZXQKICB2YWwgZ3h5ID0gU0VMRi5SNVtHcm91cEVsZW1lbnRdLmdldAoKICBwcm92ZURIVHVwbGUoZ3ksZ3ksZ3h5LGd4eSkKfQ==> , so single address covering all the stealth transfers. However, the merchant needs to listen to all the payments to this address and to try to resolve every transfer (not so high load though)

---

### Post #2 — @scalahub (2020-06-21)

Very cool idea. I was playing with it and came up with a slightly different variation.

Alice posts her public key `u = g^x` on her website.

Bob wants to make stealth payment to Alice. He selects random secrets `r` and `y` and creates a box protected by the script:

`proveDHTuple(g^r, g^y, u^r, u^y)`.

Alice then scans the below address:  
<https://wallet.plutomonkey.com/p2s/?source=ewogIHZhbCBnciA9IFNFTEYuUjRbR3JvdXBFbGVtZW50XS5nZXQKICB2YWwgZ3kgPSBTRUxGLlI1W0dyb3VwRWxlbWVudF0uZ2V0CiAgdmFsIHVyID0gU0VMRi5SNltHcm91cEVsZW1lbnRdLmdldAogIHZhbCB1eSA9IFNFTEYuUjdbR3JvdXBFbGVtZW50XS5nZXQKCiAgcHJvdmVESFR1cGxlKGdyLGd5LHVyLHV5KQp9>  
and selects those boxes where `ur = gr^x` and `uy = gy^x`.

However, compared to earlier approach, the box is larger (needs 4 registers instead of 2). The only advantage will be that the stealth payment box looks more like a “normal box”. instead of one trying to do `proveDlog(g^x, g^xy)` using `proveDHTuple`, which Alice may not want to reveal when spending the box later.

---

### Post #3 — @kushti (2020-06-25)

I see, so then stealth address contract is hidden within all the (simple) proveDHTuple use-cases, this is nice (if there will be more use-cases).

---

### Post #4 — @scalahub (2020-09-16)

One possible use of stealth address is as follows:

Alice is a merchant who wants to receive 10 Erg payment from Bob to her private key `x`. She gives `g^x` to Bob or can even publish it on her website.

Bob has lot of boxes of 1 Erg which are output of ErgoMixer, and he wants to use say 10 of them to pay Alice. If he spends all 10 in one transaction or sends it to the same receiver, it may leak some information (e.g., all 10 boxes belong to same person and Alice is receiving funds from that).

Instead Bob generates 10 new random stealth addresses using one of the above techniques (or a mix of them) to send to Alice in 10 different transactions, each to a different stealth address. Thus, the above leak is prevented.

---

### Post #5 — @rfPeixoto (2021-05-25)

This would provide so many possibilities that I can’t even imagine xD. I strongly support it.
