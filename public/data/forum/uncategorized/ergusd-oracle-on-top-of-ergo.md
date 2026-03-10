---
title: ERG/USD Oracle on top of Ergo
description: 'ErgoForum discussion: ERG/USD Oracle on top of Ergo'
tags:
- addresses
- box
- data-input
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- native-tokens
- registers
- singleton-/-state-nft
- token-id-rule
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/erg-usd-oracle-on-top-of-ergo/119
created: '2019-10-24'
last_activity: '2020-04-09'
posts_count: 6
views: 3174
likes: 12
glossary_hits:
- Addresses
- Box
- Data input
- Ergo Explorer
- ErgoScript
- ErgoScript context
- Native tokens
- Registers
- Singleton / State NFT
- Token ID rule
- Transaction
---

# ERG/USD Oracle on top of Ergo

> **Forum thread:** [https://ergoforum.org/t/erg-usd-oracle-on-top-of-ergo/119](https://ergoforum.org/t/erg-usd-oracle-on-top-of-ergo/119)
> **Category:** Uncategorized | **Created:** 2019-10-24 | **Posts:** 6 | **Views:** 3174

**Related concepts:** Addresses, Box, Data input, Ergo Explorer, ErgoScript, ErgoScript context, Native tokens, Registers, Singleton / State NFT, Token ID rule, Transaction

---

### Post #1 — @kushti (2019-10-24)

Finally, “Sininen Taivas” finished an oracle (started by lorien) publishing ERG/USD price from CoinMarketCap (CMC) on the Ergo blockchain. Then the price can be used in contracts, e.g. loan or bond contracts.

Scripts for starting a new oracle box, updating a box with CMC price and cleaning the working state can be found at <https://github.com/sininen-taivas/ergo-oracle> and are described below.

# Starting New Oracle

To start new oracle, a new singleton token is to be issued. Contracts then can use identifier of this token to authenticate the oracle box.

To create a new oracle token and an oracle box, run `issue.py` like following:

```ergoscript
python3 issue.py --api-key 7yaASMijGEGTbttYHg1MrXnWB8EbzjJnFLSWvmNoHrXV --name ERGUSD_1 --description "Ergo to USD Oracle (nanoergs to cent)" --mainnet
```

In case of success, the script will print nothing, just creating new files in the folder where it resides, namely, `address.id`, `token.id` and `box.id`. The files are containing just identifiers.

The oracle box contains token issuance data according to the [upcoming standard](https://www.ergoforum.org/t/asset-issuance-standard-and-oracles/43), see e.g. last output of <https://explorer.ergoplatform.com/en/transactions/333d0b0cdcda34e5b4d8f87022e3c19b2ba6a02ea04bfefe3737501fc94dd786>

# Updating The Oracle

To update the price in the oracle box, `update.py` should be called like:

```ergoscript
python3 update.py --api-key 7yaASMijGEGTbttYHg1MrXnWB8EbzjJnFLSWvmNoHrXV --cmc-key 562...... --mainnet
```

The script prints output like:

```ergoscript
2019-10-24 16:44:27,449 [INFO] CMC price: 0.598898592381
2019-10-24 16:44:27,450 [INFO] Address: 9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96cKtNn9tvPh5XUyCisr
2019-10-24 16:44:27,450 [INFO] Box ID: bf85ebdf242a983d5aa11ef19cef1e05cd2d863effb06392c6a38103183abc5a
2019-10-24 16:44:27,451 [INFO] Token ID: c402cee951b3f0f1efcfd6b9328db14b1212845efffbfa8cd1ab48479992d16a
2019-10-24 16:44:27,451 [INFO] Encoded Price: 05f289db05
2019-10-24 16:44:27,515 [INFO] Second Box ID: 550a0090261a94f0f1901b338c5f24a9eb5baa3a37fa937fac0f56b19a5c5082
```

The script will add identifier of the new box (containing updated price) to the `box.id` file.

Please note that there’s no guarantee that the updating transaction will get into the blockchain.

Thus there’s another script `clean.py` which is tracking status of both boxes. If new box has enough confirmations (30, this number is hard-coded), the first line of the `box.id` file (identifier of the old box) is to be removed. With the `--stop` flag the script stops tracking the new box and removing it. With one line in `box.id` the `update.py` script can work again (it works only when `box.id` has one line).

Scripts can be called from crontab, e.g. with a schedule like:

```ergoscript
15 */4 * * * /path/update.py --api-key <API-KEY> --cmc-key <COINMARKETCAP APIKEY> --mainnet
*/30 * * * * /path/clean.py --api-key <API-KEY> --mainnet
10 */4 * * * /path/clean.py --api-key <API-KEY> --stop --mainnet --stop
```

# How To Use Oracle Data

First, how data is encoded. In our example, `CMC price: 0.598898592381`, which is about 5988985 nanoErgs per US cent. This value is encoded using VLQ + Zigzag, and also type descriptor (64-bit signed number which type is encoded as 0x05). You can use `vlq.py` script to check encoding as `python3 vlq.py 5988985` which gives `05f289db05`.

Now how to use the oracle. It contains price in the register R4. Then the oracle box should be provided as data (i.e. read-only) input, and to read the price and to check it is provided by a certain party, the following code (from the [USD token box contract](https://www.ergoforum.org/t/tethering-a-token-to-usd-using-the-rate-oracle/118/3)) could be useful:

```ergoscript
  val rateBox = CONTEXT.dataInputs(0)
  val rate = rateBox.R4[Long].get
  val validRateBox = rateBox.tokens(0)._1 == rateTokenID
```

---

### Post #2 — @sogekingu (2020-01-17)

I’m more interested in an high level view on how this actually works, with after that deep technical explanation possibly, is there any good source to read about this?

---

### Post #4 — @kushti (2020-01-19)

Ergo transaction, like in Bitcoin can spend many inputs and create many outputs, but (unlike Bitcoin and all the Bitcoin descendants I know about) it also can have read-only inputs. This creates an efficient mechanism to refer to unspent coins and so create applications like oracles with no much cost.

A coin in Ergo is not just about a nominal and a protecting script, like in Bitcoin, it also can contain additional registers which contain typed data to be used in scripts. Thus we’re talking about “boxes”, not “coins” in Ergo. More information can be found in this topic: [Ergo terminology: a Box and a Register](https://www.ergoforum.org/t/ergo-terminology-a-box-and-a-register/32) .

Thus this Oracle tool is creating boxes with pricing data which can be read by different scripts.

For scripting capabilities of Ergo, really good introduction to ErgoScript (high-level language, kind of Solidity of Ergo) is here <https://ergoplatform.org/docs/ErgoScript.pdf> , there are some examples on this forum which are using oracles, e.g. interest-free loan contract [Interest-Free Loan Contract](https://www.ergoforum.org/t/interest-free-loan-contract/67) .

---

### Post #5 — @jasondavies (2020-04-09)

[![visualization (1)](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/e99a0e808e503ed5470ab26dc4aae70d3ebb93d2.png)

visualization (1)769×564 11.7 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/e99a0e808e503ed5470ab26dc4aae70d3ebb93d2.png "visualization (1)")

---

### Post #6 — @jasondavies (2020-04-09)

I wonder if it’s worth protecting oracles from accidental destruction (accidental burning of the singleton token). This could be achieved with a simple check to ensure the oracle token cannot be burned.

We should also make sure that any contracts that rely on oracles have some ability to handle the case where the oracle stops updating (e.g. if the oracle owner loses their key).

---

### Post #7 — @jasondavies (2020-04-09)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> First, how data is encoded. In our example, `CMC price: 0.598898592381` , which is about 5988985 nanoErgs per US cent.

I think this is incorrect: this is the price of ERG in USD (with a multiplier `1e7`).
