---
title: Smart Send Option
description: 'ErgoForum discussion: Smart Send Option'
tags:
- addresses
- data-input
- ergoforum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/smart-send-option/4088
created: '2022-12-16'
last_activity: '2023-02-16'
posts_count: 4
views: 650
likes: 9
glossary_hits:
- Addresses
- Data input
- Transaction
---

# Smart Send Option

> **Forum thread:** [https://ergoforum.org/t/smart-send-option/4088](https://ergoforum.org/t/smart-send-option/4088)
> **Category:** Uncategorized | **Created:** 2022-12-16 | **Posts:** 4 | **Views:** 650

**Related concepts:** Addresses, Data input, Transaction

---

### Post #1 — @mors (2022-12-16)

Hi.

First of all, I’m not a developer but I have an idea. An idea that might help in terms of speed in adoption. But please let me know if this idea is already existing in our blockchain.

Problem: it is always scary to send large amount of Erg to another wallet no matter how pro you are. Okay, test sending a small amount prior to full sending is a good practice. But even after doing so, you would still feel anxious before even hitting confirm send. No matter how pro we are, we could mess up big time especially if our coffee cup is still full.

That being said, newbies are more intimidated using such technology because #1,-you cant get your Erg back if you messed up on transferring. And #2,-there is no arbitration if you want to dispute the transaction.

Proposal: P2P Double Signature Transaction Option

With this, another extra layer of condition is added. Essentially, with this option, for a transfer to be considered complete, the receiver should also sign and accept the transaction.

By using “Smart Send” option, sender can set parameters like: PIN, cancel if not accepted within given timeframe, time lock and cancel transaction after x failed attempts.

The best part of this option is the ability of the sender to cancel the transaction when nobody is confirming on the receiving side.

My theory is… with this, it would build confidence in using the blockchain as a means of transfering currency from wallet to wallet. Making it also a little bit forgiving in a way that you dont get punished hard when you send something improperly.

It is double edged somehow as it may be used for activities other than the good ones but that shouldn’t outweigh the benefit.

Use cases and possibilities:

1. Remittances: normal people can confidently move Ergs to someone cross country confidently.

This could be done in multiple ways. But the one way I could think of in terms of parameters is sender has to set a pin code. No timeframe, no timelock.

The receiving party will receive a sign notification in their wallet, accepts it and enter the PIN code. (We need more than 4 to prevent brute force just in case).

2. Estate: i can send a transaction to my child pending indefinitely until my child accepts it and enter my 4 digit pin which my real-life agency will give him when I pass away. Maybe this can even be done by our on-chain oracle in the future.
3. Insurance: same with #2
4. With the involvement of an arbitration/oracle, and some “time parameters” we can even make P2P off-chain fiat to Erg transactions.
5. And also, Erg as a payment to a completed service. I can place the order of the service by sending it already to the address, then the arbitration dao/oracle will provide the PIN to receiver to complete the transaction.
6. In the future, it could also be used like an on-chain check! I dont know for sure but at least somehow.
7. Subscription payment method. One wallet will send to a wallet no PIN but with timeframe.
8. Payroll? Mortgage? And many many more. It would give us the power of centralized industries without centralized entities.

All these, just by adding parameters from the sender and from the receiver.

The million Erg question is HOW? That’s the part I need help with since im no blockchain developer. I have an idea but as we all know, we do things academically here in Ergo so I will digress from here.

If you are still reading, thank you for your time. I hope our Ergo team can make this happen, if not, I hope at least someone from our community. And that’s my 0.02 ERG.

---

### Post #2 — @Grayman (2022-12-16)

I don’t know either, but this is a great idea if it can be implemented without compromising other aspects of the network.

It feels like this idea is the guitar solo for the Bisq-like DEX idea discussed here: [A bisq-like dex to trade ERG for fiat or BTC and other cryptcurrencies - #3 by kushti](https://www.ergoforum.org/t/a-bisq-like-dex-to-trade-erg-for-fiat-or-btc-and-other-cryptcurrencies/4078/3)

By making the transaction contingent upon some kind of handshake, you could remove a huge amount of anxiety.

---

### Post #3 — @bigoogawoogla (2022-12-18)

I like your idea. I would use this, as I’m also wary sending large amounts.

---

### Post #4 — @mors (2023-02-16)

Introducing the Ergo Asset Locker - a secure and easy-to-use smart contract that allows you to lock an asset for a period of time and send it back to the original sender as soon as the lock period ends. With an added layer of security using a cryptographic PIN, the Ergo Asset Locker is a great solution for anyone looking to protect their assets.

The smart contract uses the ProveDlog function to generate a cryptographic key which is used to lock the asset. This key is passed as a parameter to the script when it is created and included in the transaction as a data input. The script checks that the data input matches the key used to lock the asset before allowing the transaction to be executed.

With the Ergo Asset Locker, you can be confident that your assets are safe from theft. Only the original sender can retrieve the asset from the smart contract, ensuring that it cannot be stolen.

We have already developed the HTML and CSS design, as well as the theoretical script for the asset. We are looking for a seasoned developer to help us tie it all together and bring the Ergo Asset Locker to life.  

[![Ergo Asset Locker](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/d/d9bfe0179c6c173086885358b0f8210fbf78d982.png)

Ergo Asset Locker719×565 11.3 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/d/d9bfe0179c6c173086885358b0f8210fbf78d982.png "Ergo Asset Locker")
