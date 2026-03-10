---
title: Issues with centralized exchanges and explorer
description: 'ErgoForum discussion: Issues with centralized exchanges and explorer'
tags:
- addresses
- ergo-explorer
- ergoforum
- ergoscript-context
- full-node
- support
- transaction
category: forum
forum_category: Support
source: ergoforum
source_url: https://ergoforum.org/t/issues-with-centralized-exchanges-and-explorer/903
created: '2021-03-29'
last_activity: '2021-04-05'
posts_count: 6
views: 986
likes: 11
glossary_hits:
- Addresses
- Ergo Explorer
- ErgoScript context
- Full node
- Transaction
---

# Issues with centralized exchanges and explorer

> **Forum thread:** [https://ergoforum.org/t/issues-with-centralized-exchanges-and-explorer/903](https://ergoforum.org/t/issues-with-centralized-exchanges-and-explorer/903)
> **Category:** Support | **Created:** 2021-03-29 | **Posts:** 6 | **Views:** 986

**Related concepts:** Addresses, Ergo Explorer, ErgoScript context, Full node, Transaction

---

### Post #1 — @kushti (2021-03-29)

This thread is for documenting issues with centralized exchanges and the explorer, starting from late March, 2021. The goal is to inform interested users about what developers know from talking with the exchange and also collect knowledge to improve integration guides and FAQs.

---

### Post #2 — @kushti (2021-03-29)

Coinex:

for some reason they didn’t collect incoming deposits enough, so the wallet is working extremely slow now with ~59,000 inputs to be collected. Exchange logic is using node wallet partially, also, own scripts for assembling withdrawal transactions and processing deposits (with sending deposited inputs to exchange main address soon after withdrawal, but now that part is broken). We’re ready to ship certain new features to wallet APIs (e.g. pagination) to make API fast enough, they’re already done (in an experimental branch), but now the question is how deposit logic will be compliant with it.

---

### Post #3 — @kushti (2021-03-30)

Coinex started to merge deposits [Ergo Explorer](https://explorer.ergoplatform.com/en/addresses/9fPiW45mZwoTxSwTLLXaZcdekqi72emebENmScyTGsjryzrntUe) , so deposits and withdrawals will be opened soon hopefully.

---

### Post #4 — @samfei (2021-03-31)

Thank you. Hope they opened soon. I’ve been wait for 5 days. They even did not give us the update progress.

---

### Post #5 — @kushti (2021-04-05)

They finished dust collection few hours ago.

<https://explorer.ergoplatform.com/en/addresses/9fPiW45mZwoTxSwTLLXaZcdekqi72emebENmScyTGsjryzrntUe>

So deposits and withdrawals will be l opened soon I guess .

It seems by ERG balance Coinex is not much behind HotBit now

---

### Post #6 — @kushti (2021-04-05)

Coinex opened deposits and withdrawals
