---
title: A bisq-like dex to trade ERG for fiat or BTC and other cryptcurrencies
description: 'ErgoForum discussion: A bisq-like dex to trade ERG for fiat or BTC and
  other cryptcurrencies'
tags:
- addresses
- avl-tree
- difficulty-adjustment
- eip
- ergo-foundation
- ergoauth
- ergoforum
- full-node
- ring-signatures
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/a-bisq-like-dex-to-trade-erg-for-fiat-or-btc-and-other-cryptcurrencies/4078
created: '2022-12-02'
last_activity: '2022-12-27'
posts_count: 4
views: 1475
likes: 20
glossary_hits:
- AVL tree
- Addresses
- Difficulty adjustment
- EIP
- Ergo Foundation
- ErgoAuth
- Full node
- Ring signatures
- Transaction
---

# A bisq-like dex to trade ERG for fiat or BTC and other cryptcurrencies

> **Forum thread:** [https://ergoforum.org/t/a-bisq-like-dex-to-trade-erg-for-fiat-or-btc-and-other-cryptcurrencies/4078](https://ergoforum.org/t/a-bisq-like-dex-to-trade-erg-for-fiat-or-btc-and-other-cryptcurrencies/4078)
> **Category:** Uncategorized | **Created:** 2022-12-02 | **Posts:** 4 | **Views:** 1475

**Related concepts:** AVL tree, Addresses, Difficulty adjustment, EIP, Ergo Foundation, ErgoAuth, Full node, Ring signatures, Transaction

---

### Post #1 — @MrStahlfelge (2022-12-02)

Ever since BTC came up, there is a problem in decentralization when it comes to trade it against  
fiat and, later, altcoins. Centralized exchanges are against the decentralized nature of real  
cryptocurrencies, but decentralized exchanges to trade cryptocurrencies for fiat or other  
cryptocurrencies are rare. One of such decentralized exchanges is bisq. In its core, it is a  
decentralized market place where anyone can make buy or sell orders. Others can take this orders.  
Because the system works on BTC, there are no smart contracts available. Orders are exchanged on an own p2p network layer, and the software can only observe BTC movements. For the fiat or altcoin movement, maker and taker both have to manually confirm the successful transaction.

To enforce the good behaviour of participants, both maker and taker of an offer have to deposit a  
certain amount. If the participants do not agree on the outcome of the fiat/altcoin transaction,  
the deposit is released to an arbitration DAO.

Technically, this is done on BTC the following way: When an order is taken, the deposit and BTC  
amount is moved to a 2-of-2 multisig address for maker and taker. At the same time, both clients  
generate a transaction to move the amount from the multisig address to the arbitration DAO which  
becomes valid after 10 days.

[Scheme of bisq transaction states](https://bisq.wiki/images/2/2b/Ntp-v12.png)

While this approach proved to work, it has some downsides:

* makers have to have the client running, otherwise their offers are not visible
* everyone needs to own BTC from the beginning, so there is a bootstrap difficulty
* besides the secrets involved with the BTC wallet, there are other secrets needed to be stored  
  safely for the second p2p layer

On Ergo Platform, we have more technical abilities than on BTC. A second p2p layer is not needed  
for successful trades:  
all information could be stored on chain. And running the client to publish an offer the whole time  
is not needed as well as the smart contracts on Ergo can ensure most of the logic that is ensured  
by the direct communication between the two participant’s client. Two of the three mentioned  
downsides could be solved.

The following text will describe in more detail how a bisq-like transaction could work on Ergo and  
is open for discussion of the downsides and shortcomings I might have overseen.

#### 1. Make an offer

When an offer is published, on bisq the participant defines the following information:

* alt currency (fiat or alt coin)
* min and max amount BTC to be traded
* price (for some pairs automated prices are possible)
* payment type for fiat (SEPA, face2face, mail, …)
* account/payment information (even when it is a BTC buy order)

The payment information is interesting: Even when it is a BTC buy order - or in our case an ERG  
buy order -, the payment information has to be defined. This is made to ensure that a buy was not  
made with a high-jacked account, and because of this an account has buy limits for two months  
after its first trade. Sellers are encouraged to not accept payments when money/altcoins were not  
sent from the correct payment account.

So we see this is an integral information to have in an order. To not reveal the real payment  
information to everyone for non-anonymous fiat payment information, but to be able to check if an  
account was used in older transactions, a hash can be used on Ergo.

All other information can be stored open on chain and in a contract that can accept takers to move  
it to the second stage. On Bisq, the client reserves the deposit without moving it. On Ergo, the  
contract for the first step can hold it with the ability for the maker to cancel the offer and pay  
back the deposit.

Open question: How to do automated prices?

#### 2. Take an offer

On bisq, someone taking the offer triggers the following actions:

* Taker defines the actual amount to sell/buy (within min/max bounds defined by maker)
* Deposits of both participants and BTC amount of BTC seller is moved to 2-of-2 multisig wallet as  
  described above, transaction to move everything to the arbitration DAO is signed and stored on both  
  clients
* Offer is closed even when amount bought is less than max amount
* Payment information is revealed to both participants

On Ergo, for fiat this had to be a two-step process (step 2.1/2.2) since payment information of maker  
is not available on chain. The offer is closed and moved to another contract 2a with the takers  
payment information stored encrypted only to be decrypted by the maker. Then the maker can move the  
contract to the second step 2.2 adding his encrypted payment information to be only decrypted by the  
taker. Note that the maker must move the contract, so this can cause some delay.  
For Altcoins, this is not needed and the taker can move to step 2.2 directly.

Open questions: how can the payment information be interchanged securely and on-chain so that only makers and takers can access it?

#### 3a. Make payment, accept payment

On bisq, after the payment information is exchanged, the buyer marks as paid within 24 hours.  
When received, the seller marks as received and the software of both participants sign a transaction  
releasing the deposit and BTC amount to be paid out.

On Ergo, this two-step process can be reproduced with a smart contract state movement or the payout  
to both participant’s p2pk addresses.

#### 3b. Chat, dispute

On bisq, when there is a problem the participants can chat to solve any problems in the process.  
This of course needs another layer of communication as, at the time of writing, there is no  
communication layer present on the Ergo Platform.

After some time of waiting, when the funds are released to the control of the DAO - which is not  
needed on Ergo as the smart contracts can handle this case without any movement -, both participants  
can also chat with an arbitrator.

Open question: what communication platform can be used?

#### Open questions

* bisq can do an automatic price shift. Offers can be maked for BTC/fiat pairs that are “current  
  price +/- x%” when the offer is taken. This could be done via an Oracle, but we only have ERG/USD.
* how can the payment information be interchanged securely and on-chain so that only makers and takers can access it?
* what communication platform can be used for chat in step 3b?
* how to form a DAO?

---

### Post #2 — @WilfordGrimley (2022-12-03)

![](https://avatars.discourse-cdn.com/v4/letter/m/74df32/48.png) MrStahlfelge:

> Open question: what communication platform can be used?

If we need this to be on chain, we could create a L2 that facilitates direct E2EE communication link between addresses using Matrix as a base.  
Ergo node operators can host purpose built matrix home servers that enable only address-address communication (Using ErgoAuth in our ‘Bisq’ client to identify clients.) We can store our encrypted messages in an AVL tree and charge a minimal fee for the L2 that the Bisq protocol can pay for on behalf of traders.

If Matrix+ErgoAuth can be made memory light enough, it could be incorporated into the Bisq protocol (and offchain bots for it) and the need for a L2 made redundant. (Although it may be worth pursuing separately)

![](https://avatars.discourse-cdn.com/v4/letter/m/74df32/48.png) MrStahlfelge:

> how can the payment information be interchanged securely and on-chain so that only makers and takers can access it?

I think Matrix could potentially solve this as well:  
The protocol could generate encrypted rooms that are populated as trades are created that are populated with relevent information. Our ‘Bisq’ client can read, and populate it without any 3rd party having access to any personal information.

---

### Post #3 — @kushti (2022-12-10)

![](https://avatars.discourse-cdn.com/v4/letter/m/74df32/48.png) MrStahlfelge:

> how can the payment information be interchanged securely and on-chain so that only makers and takers can access it?

Not hard to do Diffie-Hellman key exchange I guess. There is EIP draft on that by nitram [EIP-0032: Non-interactive encryption of TX-purpose messages by nitram147 · Pull Request #64 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/64) but I need to check it closely still

---

### Post #4 — @Ccgarant (2022-12-27)

I whole heartedly agree on using Matrix protocol for decentralized communication. ([Matrix.org](http://Matrix.org))

Ergo Foundation already has a Space setup.
