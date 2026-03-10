---
title: BBDD with Wallets
description: 'ErgoForum discussion: BBDD with Wallets'
tags:
- ergo-explorer
- ergoforum
- native-tokens
- token-id-rule
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/bbdd-with-wallets/3695
created: '2022-06-21'
last_activity: '2022-07-25'
posts_count: 3
views: 391
likes: 3
glossary_hits:
- Ergo Explorer
- Native tokens
- Token ID rule
---

# BBDD with Wallets

> **Forum thread:** [https://ergoforum.org/t/bbdd-with-wallets/3695](https://ergoforum.org/t/bbdd-with-wallets/3695)
> **Category:** Uncategorized | **Created:** 2022-06-21 | **Posts:** 3 | **Views:** 391

**Related concepts:** Ergo Explorer, Native tokens, Token ID rule

---

### Post #1 — @Ladopixel (2022-06-21)

One of the features I like most about blockchain is the ability to perform the functions of a transparent, decentralized database.

I understand that the word blockchain is tied to the word finance, although I try to see blockchain always avoiding finance in my mind.

Since I started playing with the Ergo blockchain, I try to build while avoiding the traditional database. Although the function that the identifiers have in the database seems incredible to me.

### BBDD with Wallets

The other day I was thinking and making some sketches to replicate a traditional database using wallets and tokens. Here's an example, let me explain better....

Imagine 1 database containing a table for your clients.

#### Table Clients

* id\_client
* name\_client
* tlf\_client

If we take this table to a wallet with tokens it would look like this.

#### Table with wallet and tokens

I create a wallet and as many tokens as I need. In this example I will create a table with 3 clients.
  
Wallet 1 is the Clients table and 3 tokens are 3 clientes.

[![wallet-tabla-1](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/8/8d1f6a13c669eb2dc8602cfb55332b286a31c379_2_603x500.png)

wallet-tabla-1608×504 26.1 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/8/8d1f6a13c669eb2dc8602cfb55332b286a31c379.png "wallet-tabla-1")

From each token I have to get the amount of tokens I need to relate to other tables. Since the token ID will act as a customer identifier and will need to be sent to the tables of orders, discounts, credits…  
So I have created these 3 tokens.

[![wallet-tabla-2](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/1/18d2585f4ee10a77d749a1874c9f28e1cb866e0c_2_690x200.png)

wallet-tabla-21065×309 42.6 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/1/18d2585f4ee10a77d749a1874c9f28e1cb866e0c.png "wallet-tabla-2")

To create a table of orders and relate it to a specific customer, we would only have to create a new wallet for orders and send 1 token of the customer to whom those orders will belong. This wallet would become a table with all the orders of a given customer. Each order would be another token (if we believe that this order could be related to another new table in the future, an amount greater than 1 will be created to send it to the new related wallet).

It would look something like this.

[![BBDD](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/1/12dfd43bb790daf9be4f944e26dc9eb4a85ee612_2_690x384.jpeg)

BBDD1673×933 184 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/1/12dfd43bb790daf9be4f944e26dc9eb4a85ee612.jpeg "BBDD")

  
↓

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/1/1d5be9ec8cffa79619e6de16783a890bb55ecb37.png)
[miro.com](https://miro.com/app/board/uXjVOt66jMw=/?share_link_id=497077666552)

![](https://miro.com/api/v1/boards/uXjVOt66jMw=/picture?etag=G&size=180)

### [BBDD](https://miro.com/app/board/uXjVOt66jMw=/?share_link_id=497077666552)

Blockchain

---

### Post #2 — @Ergosmergo (2022-07-25)

I like this idea really good work. Since some database entries would need to be kept private how could we protect from someone viewing the data in a block explorer by knowing the wallet ID?

---

### Post #3 — @Ladopixel (2022-07-25)

Thanks, glad you like it!

For records that should not be public you could encrypt the title and token description.  
Here you can see an example of token encryption.

[twitter.com](https://twitter.com/LadoPixel/status/1538981364367777794?s=20&t=Xsw3sBBZPGeUYaI3q2v_wQ)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/0/03cb0f5d1319ad28f9024f8bb7eb69ff058d9709_2_690x388.jpeg)

#### 

[@](https://twitter.com/LadoPixel/status/1538981364367777794?s=20&t=Xsw3sBBZPGeUYaI3q2v_wQ)

Following in the wake of schedulERG, it is now possible to create encrypted tokens and decrypt them. It makes me very nervous about the endless possibilities of this.
@ergoplatformorg + @PalletsTeam #Flask == ❤️
#openSource $ERG #Ergonauts #ThisIsErgo #Python
