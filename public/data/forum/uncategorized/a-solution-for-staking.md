---
title: A solution for staking
description: 'ErgoForum discussion: A solution for staking'
tags:
- addresses
- box
- data-input
- ergo-playgrounds
- ergoforum
- ergomixer
- ergoscript
- ergoscript-context
- native-tokens
- registers
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/a-solution-for-staking/1057
created: '2021-04-23'
last_activity: '2021-06-07'
posts_count: 5
views: 6787
likes: 11
glossary_hits:
- Addresses
- Box
- Data input
- Ergo Playgrounds
- ErgoMixer
- ErgoScript
- ErgoScript context
- Native tokens
- Registers
- Transaction
---

# A solution for staking

> **Forum thread:** [https://ergoforum.org/t/a-solution-for-staking/1057](https://ergoforum.org/t/a-solution-for-staking/1057)
> **Category:** Uncategorized | **Created:** 2021-04-23 | **Posts:** 5 | **Views:** 6787

**Related concepts:** Addresses, Box, Data input, Ergo Playgrounds, ErgoMixer, ErgoScript, ErgoScript context, Native tokens, Registers, Transaction

---

### Post #1 — @kushti (2021-04-23)

This topic proposes a solution for staking, which is not relying on data inputs and also scalable (can support thousands of tokens).

We consider the case of ErgoMixer, with profit from the mixer to be collected in a box associated with some “funding NFT” first. Then payments done periodically, in epochs (say, 1 epoch = 1,024 blocks). Epoch number N+1 is going after epoch number N. During an epoch, each token being staked is getting rewarded with its part from all the funds received in this epoch and before.

The solution is based on interaction between two contracts.

* First contract (aka staking contract) is representing tokens being staked by one user. It allows for unstaking and getting rewards. Payment epoch is stored in a box associated with the contract.

However, the box can be created in a way that it contains epoch written down with malicious intent (to get paid twice per epoch and so on). So the box must be registered (stamped) by the second contract before getting any payments. Then the box can be used for getting payments. Registration is done with a special token given to the box.

* Second contract (aka master contract) is collecting funds, doing payment, and also doing registration (and getting back registration token on unstaking)

So first (staking) contract would be like [ErgoScript Playground | PlutoMonkey Wallet](https://wallet.plutomonkey.com/p2s/?source=Ly8gc3Rha2luZyBzY3JpcHQKewogIHZhbCBvd25lciA9IHByb3ZlRGxvZyhTRUxGLlI1W0dyb3VwRWxlbWVudF0uZ2V0KQoKICAvLyBFcmdvTWl4ZXIgdG9rZW4gaWQKICB2YWwgZW10SWQgPSBmcm9tQmFzZTU4KCI5Z3VKN2dHeTdMalJveHhONkRvM0VGY3pxNTRYTnZiNzViRFV4VGZSVUdzWTcyTXdBdUciKQoKICAvLyBTdGFraW5nIHJlZ2lzdHJhdGlvbiB0b2tlbiBpZAogIHZhbCByZWdJZCA9IGZyb21CYXNlNTgoIjlndUo3Z0d5N0xqUm94eE42RG8zRUZjenE1NFhOdmI3NWJEVXhUZlJVR3NZNzJNd0F1RyIpCgogIC8vIHJlZ2lzdHJhdGlvbiBzZXJ2aWNlIE5GVCBpZAogIHZhbCBwYXlvdXROZnRJZCA9IGZyb21CYXNlNTgoIjlndUo3Z0d5N0xqUm94eE42RG8zRUZjenE1NFhOdmI3NWJEVXhUZlJVR3NZNzJNd0F1RyIpIAogCiAvLyB0byB1bnN0YWtlLCBzdGFtcGluZyB0b2tlbiBtdXN0IGJlIHNlbnQgYmFjayB0byByZWdpc3RyYXRpb24gY29udHJhY3QgKGlkZW50aWZpZWQgYnkgTkZUIGhhdmluZyByZWdJZCkKICB2YWwgaXNVbnN0YWtlID0gewogICAgb3duZXIgJiYgT1VUUFVUUygwKS50b2tlbnMoMCkuXzEgPT0gcmVnSWQgJiYgT1VUUFVUUygwKS50b2tlbnMoMSkuXzIgPT0gKElOUFVUUygwKS50b2tlbnMoMSkuXzIgKyAxKSAgIAogIH0KCiAgLy8gcmVnaXN0cmF0aW9uIHBoYXNlCiAgdmFsIGlzUmVnaXN0ZXJlZCA9IHsKICAgIHZhbCBzZWxmT3V0ID0gT1VUUFVUUygxKQogICAgc2VsZk91dC52YWx1ZSA9PSBTRUxGLnZhbHVlICYmIHNlbGZPdXQucHJvcG9zaXRpb25CeXRlcyA9PSBTRUxGLnByb3Bvc2l0aW9uQnl0ZXMgJiYgU0VMRi50b2tlbnMuc2l6ZSA9PSAxICYmIHNlbGZPdXQudG9rZW5zLnNpemUgPT0gMiAmJiBzZWxmT3V0LnRva2VucygwKS5fMSA9PSBlbXRJZCAmJiBzZWxmT3V0LnRva2VucygwKS5fMiA9PSBTRUxGLnRva2VucygwKS5fMiAmJiBzZWxmT3V0LnRva2VucygxKS5fMSA9PSByZWdJZCAmJiBzZWxmT3V0LnRva2VucygxKS5fMiA9PSAxICYmIHNlbGZPdXQuUjRbSW50XS5nZXQgPT0gT1VUUFVUUygwKS5SNFtJbnRdLmdldCAmJiBTRUxGLlI1W0dyb3VwRWxlbWVudF0uZ2V0ID09IHNlbGZPdXQuUjVbR3JvdXBFbGVtZW50XS5nZXQKICB9CgogIHZhbCBpc1BhaWQgPSB7CiAgICB2YWwgc2VsZk91dCA9IE9VVFBVVFMoMSkgCiAgICB2YWwgc2VsZk9rID0gc2VsZk91dC52YWx1ZSA9PSBTRUxGLnZhbHVlICYmIHNlbGZPdXQucHJvcG9zaXRpb25CeXRlcyA9PSBTRUxGLnByb3Bvc2l0aW9uQnl0ZXMgJiYgc2VsZk91dC50b2tlbnMgPT0gU0VMRi50b2tlbnMgJiYgU0VMRi5SNVtHcm91cEVsZW1lbnRdLmdldCA9PSBzZWxmT3V0LlI1W0dyb3VwRWxlbWVudF0uZ2V0CiAgICB2YWwgcGFpZE9rID0gT1VUUFVUUygyKS5wcm9wb3NpdGlvbkJ5dGVzID09IG93bmVyLnByb3BCeXRlcyAmJiBPVVRQVVRTKDApLnRva2VucygwKS5fMSA9PSBwYXlvdXROZnRJZCAmJiBzZWxmT3V0LlI0W0ludF0uZ2V0ID09IE9VVFBVVFMoMCkuUjRbSW50XS5nZXQgJiYgU0VMRi5SNFtJbnRdLmdldCA8IHNlbGZPdXQuUjRbSW50XS5nZXQKICAgIHNlbGZPayAmJiBwYWlkT2sKICB9IAoKICBpc1Vuc3Rha2UgfHwgaXNSZWdpc3RlcmVkIHx8IGlzUGFpZAp9)

, and the master script would be like [ErgoScript Playground | PlutoMonkey Wallet](https://wallet.plutomonkey.com/p2s/?source=Ly9wYXlvdXQgc2NyaXB0CnsKIHZhbCBuZnRJZCA9IGZyb21CYXNlNTgoIjlndUo3Z0d5N0xqUm94eE42RG8zRUZjenE1NFhOdmI3NWJEVXhUZlJVR3NZNzJNd0F1RyIpCiB2YWwgZnVuZGluZ05mdElkID0gZnJvbUJhc2U1OCgiOWd1SjdnR3k3TGpSb3h4TjZEbzNFRmN6cTU0WE52Yjc1YkRVeFRmUlVHc1k3Mk13QXVHIikKCiB2YWwgc3Rha2luZ1NjcmlwdEhhc2ggPSBmcm9tQmFzZTU4KCI5Z3VKN2dHeTdMalJveHhONkRvM0VGY3pxNTRYTnZiNzViRFV4VGZSVUdzWTcyTXdBdUciKQoKIHZhbCBjdXJyZW50RXBvY2ggPSBTRUxGLlI0W0ludF0uZ2V0CiB2YWwgZXBvY2hMZW5ndGggPSAxMDI0CiB2YWwgYmFsYW5jZSA9IFNFTEYuUjVbSW50XS5nZXQKIHZhbCB0b3RhbFRva2VucyA9IDEwMDAKIHZhbCBzdGFraW5nQnl0ZXMgPSBmcm9tQmFzZTU4KCI5Z3VKN2dHeTdMalJveHhONkRvM0VGY3pxNTRYTnZiNzViRFV4VGZSVUdzWTcyTXdBdUciKQoKIHZhbCBwYXltZW50U2l6ZSA9IGJhbGFuY2UgLyB0b3RhbFRva2VucwoKIHZhbCByZWdUb2tlbklkID0gZnJvbUJhc2U1OCgiOWd1SjdnR3k3TGpSb3h4TjZEbzNFRmN6cTU0WE52Yjc1YkRVeFRmUlVHc1k3Mk13QXVHIikKCiB2YWwgc2VsZk91dCA9IE9VVFBVVFMoMCkKCiB2YWwgc2VsZk9rID0gU0VMRi5pZCA9PSBJTlBVVFMoMCkuaWQgJiYgc2VsZk91dC5wcm9wb3NpdGlvbkJ5dGVzID09IFNFTEYucHJvcG9zaXRpb25CeXRlcyAmJiBzZWxmT3V0LnRva2VucygwKS5fMSA9PSBuZnRJZCAmJiBzZWxmT3V0LnRva2VucygxKS5fMSA9PSByZWdUb2tlbklkCiAKIHZhbCBwYXltZW50T2sgPSBPVVRQVVRTKDEpLnByb3Bvc2l0aW9uQnl0ZXMgPT0gc3Rha2luZ0J5dGVzICYmIE9VVFBVVFMoMSkudG9rZW5zKDEpLl8xID09IHJlZ1Rva2VuSWQgJiYgT1VUUFVUUygyKS52YWx1ZSA9PSBwYXltZW50U2l6ZSAqIE9VVFBVVFMoMSkudG9rZW5zKDApLl8yICYmIChTRUxGLnZhbHVlIC0gT1VUUFVUUygyKS52YWx1ZSA9PSBPVVRQVVRTKDApLnZhbHVlKSAmJiAoYmFsYW5jZSAtIE9VVFBVVFMoMCkuUjVbSW50XS5nZXQgPT0gT1VUUFVUUygyKS52YWx1ZSkKCiB2YWwgZnVuZGluZ09rID0gKHNlbGZPdXQudmFsdWUgPT0gU0VMRi52YWx1ZSArIE9VVFBVVFMoMSkudmFsdWUpICYmIChzZWxmT3V0LnZhbHVlID09IGJhbGFuY2UpICYmIChzZWxmT3V0LlI0W0ludF0uZ2V0ID09IGN1cnJlbnRFcG9jaCArIDEpICYmIChIRUlHSFQgLyBlcG9jaExlbmd0aCA9PSBjdXJyZW50RXBvY2ggKyAxKQoKCiB2YWwgcmVnVG9rZW5zSW4gPSBTRUxGLnRva2VucygxKS5fMgogdmFsIHJlZ1Rva2Vuc091dCA9IHNlbGZPdXQudG9rZW5zKDEpLl8yCiB2YWwgcmVnRGVsdGEgPSByZWdUb2tlbnNPdXQgLSByZWdUb2tlbnNJbgogICAKIAogc2VsZk9rICYmIChpZihyZWdEZWx0YSA9PSAwKSB7CiAgIGlmKE9VVFBVVFMoMSkudG9rZW5zKDApLl8xID09IGZ1bmRpbmdOZnRJZCl7CiAgICAgZnVuZGluZ09rCiAgIH0gZWxzZSB7CiAgICAgcGF5bWVudE9rCiAgIH0KICB9IGVsc2UgewogICAgaWYocmVnRGVsdGEgPT0gMSkgewogICAgICAvLyByZWdpc3RyYXRpb24gICAKICAgICAgYmxha2UyYjI1NihPVVRQVVRTKDEpLnByb3Bvc2l0aW9uQnl0ZXMpID09IHN0YWtpbmdTY3JpcHRIYXNoICAgCiAgICB9IGVsc2UgewogICAgICAvLyBkZXJlZ2lzdHJhdGlvbgogICAgICByZWdEZWx0YSA9PSAtMQogICAgfQogIH0pIAp9)

And usage would be like:

* first, ErgoMixer folks create master contract with “master contract NFT”, staking contract registration token and initial epoch set.
* every new epoch they fund the master contract box once from a box with funding NFT (which collected mixer rewards during previous epoch). We can assume that the funding box is associated with just a public key of mixer service providers. Funding can be done by anyone
* then payments done, with master contract to be input #0 and output #0, and staking contract to be input #1 and output #1. Payments can be easily chained in the same block. Payment transaction can be done by anyone.

To get payments, one needs to send ErgoMixer tokens to staking contract P2S address (and the receiving box should contain owner pubkey to get payments too in register R5). Then registration can be done (again, by anyone) with a transaction having master contract as input #0 and output #0, and staking contract as input #1 and output #1.

Unstaking can be one with staking box owner signature to be presented only.

Contracts provided are just sketches. There’s a need to audit and likely fix some issues there, also, not sure they are AOT-costing. Auditing and Ergo playground is the next step to get done.

---

### Post #2 — @LuckyRainmaker (2021-05-31)

What’s the source of ERG for paying the delegators? In PoS coins they just issue new coins… But ERG needs to be mined.

---

### Post #3 — @kushti (2021-06-01)

The main motivation was about ErgoMixer tokens, when you stake the tokens to get ERG from mixer’s income flow

---

### Post #4 — @LuckyRainmaker (2021-06-01)

Ok. So the reward will be in the form of whatever income generated by assets included in the mixer. Right?

---

### Post #5 — @kushti (2021-06-07)

Yes, exactly. Some parts are missed in my prototype contracts, as they are about staking just.
