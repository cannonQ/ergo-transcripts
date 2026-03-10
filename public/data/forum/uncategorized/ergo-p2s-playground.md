---
title: Ergo P2S Playground
description: 'ErgoForum discussion: Ergo P2S Playground'
tags:
- addresses
- ergoforum
- ergoscript
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-p2s-playground/77
created: '2019-09-06'
last_activity: '2020-06-04'
posts_count: 6
views: 1428
likes: 14
glossary_hits:
- Addresses
- ErgoScript
- Full node
---

# Ergo P2S Playground

> **Forum thread:** [https://ergoforum.org/t/ergo-p2s-playground/77](https://ergoforum.org/t/ergo-p2s-playground/77)
> **Category:** Uncategorized | **Created:** 2019-09-06 | **Posts:** 6 | **Views:** 1428

**Related concepts:** Addresses, ErgoScript, Full node

---

### Post #1 — @jasondavies (2019-09-06)

It’s really just a simple web tool at the moment, and there’s much more I’d like to add, but I thought I would share the [Ergo P2S Playground](https://wallet.plutomonkey.com/p2s/?source=ewogIHZhbCBhID0gZ2V0VmFyW0JpZ0ludF0oMSkuZ2V0CiAgdmFsIGIgPSBnZXRWYXJbQmlnSW50XSgyKS5nZXQKICB2YWwgYyA9IGdldFZhcltCaWdJbnRdKDMpLmdldAoKICBhICogYSAqIGEgKyBiICogYiAqIGIgKyBjICogYyAqIGMgPT0gNDIKfQ==) with the community now and get early feedback.

You can input a contract in ErgoScript, and then click “Get P2S Address” to compile into a P2S address. Or, if there are errors, it will show an error trace.

As you type, the URL automatically updates, so you should be able to bookmark and/or share your contract with others.

*Use at your own risk etc. since you are trusting my Ergo node to compile the script honestly, and you are trusting that my server hasn’t been hacked.*

---

### Post #2 — @robert (2019-09-07)

Nice work. Good to lower the barrier of entry for testing P2S addresses. Furthermore this could be a good tool to use for confirmation if one gets a P2S address from somewhere else and wants to do a quick double check.

In regards to removing trust in your node, maybe you can offer an option to have the website make requests to the user’s local node and the user simply needs to input the api key? That should be reasonably simple to add I would imagine and could offer both convenience for those who wish, and more safety when someone wishes to actually deploy.

---

### Post #3 — @jasondavies (2019-09-07)

Good idea. I always like to err on the side of caution and make sure users realise they who/what they are trusting, in particular if money is involved.

---

### Post #4 — @scalahub (2020-05-23)

Great tool. Sort of like scastie for ErgoScript ![:smiley:](https://emoji.discourse-cdn.com/twitter/smiley.png?v=9 ":smiley:")

---

### Post #5 — @thx1138 (2020-06-04)

I’m trying to do the simplest script, as described in section 2.1 in the docs, that is, a public key to which to send a payment (pk). How would I encode that with your web based tool?

---

### Post #6 — @jasondavies (2020-06-04)

You can do something like [this](https://wallet.plutomonkey.com/p2s/?source=ewogIFBLKCI5aDdkYVREanBBYTgxVkZOaldxRkg5bWV2QnBnZkN3RjZGQ0drakZQOHcxcXJHYlg5ZmYiKQp9):

```ergoscript
{
  PK("9h7daTDjpAa81VFNjWqFH9mevBpgfCwF6FCGkjFP8w1qrGbX9ff")
}
```

I’ve got some major updates in the works that should make things *much* easier. Watch this space!
