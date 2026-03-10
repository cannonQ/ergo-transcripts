---
title: Explorer API in Python
description: 'ErgoForum discussion: Explorer API in Python'
tags:
- addresses
- ergo-explorer
- ergoforum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/explorer-api-in-python/1418
created: '2021-05-25'
last_activity: '2021-10-22'
posts_count: 10
views: 889
likes: 11
glossary_hits:
- Addresses
- Ergo Explorer
- Transaction
---

# Explorer API in Python

> **Forum thread:** [https://ergoforum.org/t/explorer-api-in-python/1418](https://ergoforum.org/t/explorer-api-in-python/1418)
> **Category:** Uncategorized | **Created:** 2021-05-25 | **Posts:** 10 | **Views:** 889

**Related concepts:** Addresses, Ergo Explorer, Transaction

---

### Post #1 — @rfPeixoto (2021-05-25)

Hey guys! Good night, how are you?

So, I got to know the project this afternoon. I really liked what I saw, the ecosystem is very robust and friendly to developers, regardless of the level of experience. I didn’t have time to research if there is already a Python adaptation of the API, so I started to create a very simplified one. It is very minimalist, but fully functional. Anyone interested can see the code on [Github](https://github.com/rf-peixoto/ergo_py/).

Nice to meet you all. ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=9 ":slight_smile:")

---

### Post #2 — @oskin1 (2021-05-26)

Good job! Please consider adding APIv1 as well ([Redoc](https://api.ergoplatform.com/api/v1/docs/)). V1 methods are more convenient to use in most cases. And of course feel free to ask for a help if needed.

---

### Post #3 — @rfPeixoto (2021-05-26)

Some terms I still don’t understand well, but by testing and studying the structure of transactions and the network in general I can manage. I’m already updating, thank you very much. xD

---

### Post #4 — @kushti (2021-06-01)

Address for donations you’ve provided used for getting mining rewards and locking received funds for 720 blocks. Please consider to use “normal” P2PK address (starting with 9…)

---

### Post #5 — @rfPeixoto (2021-06-01)

Sorry, my fault. I have corrected it, thanks for the warning. ![:smile:](https://emoji.discourse-cdn.com/twitter/smile.png?v=9 ":smile:")

---

### Post #6 — @rfPeixoto (2021-06-06)

**Update.**  
I’ve included some links to the website, forums, repository, etc. Maybe it helps for some community integrations. But I didn’t found an RSS feed or similar to connect with the official blog and news page. Would be very helpfull to get notifications, for example. Is there a especific API for the website? Or am I allowed to scrapy on the news/blog pages?

---

### Post #7 — @kushti (2021-06-07)

Is it possible to pull updates from git ? [website/content/en at master · ergoplatform/website · GitHub](https://github.com/ergoplatform/website/tree/master/content/en)

---

### Post #8 — @rfPeixoto (2021-06-07)

A little bit tricky compared to the website itself, but yes. I’m waiting a mod say anything. Maybe they have a news-bot on Discord/Telegram or something like that I can use.

---

### Post #9 — @rfPeixoto (2021-06-11)

Sorry for commenting again so quickly, but partially resolved. I embedded Coingecko’s API in the code (temporarily) until I found a better solution. The advantages are that using it you can already check the current ERG price in any other currency (usd, eur, brl, jpy, btc…). It is also possible to retrieve the price history also in any currency. For those who will use it, remember that CoinGecko’s API only allows 100 requests per hour.

Requirement: `pip install pycoingecko`

---

### Post #10 — @rfPeixoto (2021-10-22)

Someone donated 0.01 ERG to this project. And I didn’t made anything in this code for a while. I do not know who you are, but that was the first donation I ever received, and I’m creating content/stuff for a long time to remember. Thank you very much, this really motivates people. ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=10 ":slight_smile:")
