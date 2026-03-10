---
title: Ergo Raffle Lotteries for Ergo Network Emission Donations & for Mineable Smart
  Contracts
description: 'ErgoForum discussion: Ergo Raffle Lotteries for Ergo Network Emission
  Donations & for Mineable Smart Contracts'
tags:
- addresses
- box
- emission-schedule
- ergoforum
- ergoraffle
- ergoscript-context
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-raffle-lotteries-for-ergo-network-emission-donations-for-mineable-smart-contracts/4634
created: '2024-01-13'
last_activity: '2024-01-17'
posts_count: 2
views: 346
likes: 10
glossary_hits:
- Addresses
- Box
- Emission schedule
- ErgoRaffle
- ErgoScript context
---

# Ergo Raffle Lotteries for Ergo Network Emission Donations & for Mineable Smart Contracts

> **Forum thread:** [https://ergoforum.org/t/ergo-raffle-lotteries-for-ergo-network-emission-donations-for-mineable-smart-contracts/4634](https://ergoforum.org/t/ergo-raffle-lotteries-for-ergo-network-emission-donations-for-mineable-smart-contracts/4634)
> **Category:** Uncategorized | **Created:** 2024-01-13 | **Posts:** 2 | **Views:** 346

**Related concepts:** Addresses, Box, Emission schedule, ErgoRaffle, ErgoScript context

---

### Post #1 — @Ccgarant (2024-01-13)

This idea proposes an [Ergo Raffle](https://ergoraffle.com/) like lottery where there is a winner reward distribution, service, fee, but the **unique** part is the proceeds are:

1. Donated back to the Ergo Network mineable supply to extend emissions and/or
2. Sent to a mineable smart contract(s) with variable difficulties (optional)

It would be the perfect mix of rewarding miners, extending network security, and altruistic degenery.

## Inspiration

It occurred to me thru a [tweet](https://x.com/Pledditor/status/1744168276991545740?s=20) where someone sent 26 bitcoin to Satoshi’s address to burn the coins (or for trolling), that it would be a good idea to send Ergo back to the “Network Supply” as a donation.

It then occurred to me this would be the perfect use case for an Ergo Raffle Lottery rewarding altruistic degenery to all.

## Problem

In the Ergo Emission Curve, at block height 2,000,000 the inflation really flat lines and the supply will be mostly “flat”. This should really increase the Ergo demand for everyone including Miners.

[![Screenshot_20240113_084409-1](https://ergoforum.org/uploads/default/optimized/2X/1/12d6816b6fd71ffbcec886634fce9d8f89c68f1b_2_690x276.png)

Screenshot\_20240113\_084409-11373×551 42.9 KB](https://ergoforum.org/uploads/default/original/2X/1/12d6816b6fd71ffbcec886634fce9d8f89c68f1b.png "Screenshot_20240113_084409-1")

At the long-tail emission time, Miners will get rewards from these sources:

1. Emissions
2. Fees & Rent
3. **Network Donations (new)**

## Proposal

### Altruistic Donations

One can donate and send Erg to an Ergo Network Donation address to basically add to a mineable supply and help incentivize network security by keeping miners well fed.

The donation address is likely some kind of mineable smart contract box, if the coins can be sent to the Network Supply outright.

### Altruistic Lottery

It’s much more likely DeFi in the form of a Lottery is the more sustainable and fun option.

One can create or donate to an Ergo Raffle where the donation proceeds are sent to the Ergo Network Donation Address which is a mineable smart contract (or the supply itself).

One could also create stand-alone custom donation address mineable smart contracts with custom difficulties (or random to create a lotter in itself) [Ref 1: @Hq3r idea]

## Challenges

Is it possible to have mineable smart contract (box)? It appears yes per [@CheeseEnthusiast](/u/cheeseenthusiast), and I believe the genesis supply is in a “mineable box”.

It would be best for the lottery to have an [exponential decay](https://en.wikipedia.org/wiki/Exponential_decay) winner reward distribution option, this way it could range from a one winner take all to a long “fair” distribution based on risk/reward.

It would be best to have an Ergo Network Donation Address outright, not sure how this could be done (easy or hard?). Perhaps donation proceeds are sent right to the [Miner Reward Box](https://ergexplorer.com/addresses#2Z4YBkDsDvQj8BX7xiySFewjitqp2ge9c99jfes2whbtKitZTxdBYqbrVZUvZvKv6aqn9by4kp3LE1c26LCyosFnVnm6b6U1JYvWpYmL2ZnixJbXLjWAWuBThV1D6dLpqZJYQHYDznJCk49g5TUiS4q8khpag2aNmHwREV7JSsypHdHLgJT7MGaw51aJfNubyzSKxZ4AJXFS27EfXwyCLzW1K6GVqwkJtCoPvrcLqmqwacAWJPkmh78nke9H4oT88XmSbRt2n9aWZjosiZCafZ4osUDxmZcc5QVEeTWn8drSraY3eFKe8Mu9MSCcVU) [Ref 2].

Disclosure: This idea may already exist or in piece parts. I haven’t done thorough research yet.

---

### References & Related

* [1] @Hq3r & [@CheeseEnthusiast](/u/cheeseenthusiast) for prior ideas and the discussion in Lithos
* [2] [Miner Reward Box](https://ergexplorer.com/addresses#2Z4YBkDsDvQj8BX7xiySFewjitqp2ge9c99jfes2whbtKitZTxdBYqbrVZUvZvKv6aqn9by4kp3LE1c26LCyosFnVnm6b6U1JYvWpYmL2ZnixJbXLjWAWuBThV1D6dLpqZJYQHYDznJCk49g5TUiS4q8khpag2aNmHwREV7JSsypHdHLgJT7MGaw51aJfNubyzSKxZ4AJXFS27EfXwyCLzW1K6GVqwkJtCoPvrcLqmqwacAWJPkmh78nke9H4oT88XmSbRt2n9aWZjosiZCafZ4osUDxmZcc5QVEeTWn8drSraY3eFKe8Mu9MSCcVU) from [Ergo Platform Emission Documentation](https://docs.ergoplatform.com/mining/emission/)
* [Fee distribution, defi, raffle combination](https://www.ergoforum.org/t/fee-distribution-defi-raffle-combination/4030) by [@Dddlll](/u/dddlll)
* [Simple Crowdfunding - Ecosystem Development - Ergo Community Forum](https://www.ergoforum.org/t/simple-crowdfunding/70)
* [A lottery on top of Ergo - Research and Development - Ergo Community Forum](https://www.ergoforum.org/t/a-lottery-on-top-of-ergo/137)

---

### Post #2 — @Ccgarant (2024-01-17)

Great presentation [@kushti](/u/kushti)

Curious your thoughts on lotteries right to the Mineable Reward Box when the Erg emission curve dies down?

Looks like emission contracts are a very exciting development area for sure.

[![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/c/cc3fd0d982e818ca20c4cf67d13cc6d45316d280.jpeg "Future of Finance | Alex Chepurnoy | Ergo Summit: Ways of Adoption")](https://www.youtube.com/watch?v=aZW1beIZreg)
