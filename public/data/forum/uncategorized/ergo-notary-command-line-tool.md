---
title: Ergo Notary Command-Line Tool
description: 'ErgoForum discussion: Ergo Notary Command-Line Tool'
tags:
- box
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- registers
- storage-rent
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-notary-command-line-tool/75
created: '2019-09-06'
last_activity: '2019-09-06'
posts_count: 2
views: 1146
likes: 7
glossary_hits:
- Box
- Ergo Explorer
- ErgoScript
- ErgoScript context
- Registers
- Storage rent
- Transaction
---

# Ergo Notary Command-Line Tool

> **Forum thread:** [https://ergoforum.org/t/ergo-notary-command-line-tool/75](https://ergoforum.org/t/ergo-notary-command-line-tool/75)
> **Category:** Uncategorized | **Created:** 2019-09-06 | **Posts:** 2 | **Views:** 1146

**Related concepts:** Box, Ergo Explorer, ErgoScript, ErgoScript context, Registers, Storage rent, Transaction

---

### Post #1 — @kushti (2019-09-06)

Folks from " Sininen Taivas" have developed a simple notary command-line script for Ergo. It is available at <https://github.com/sininen-taivas/ergo-notary>. I kindly asked them to do some documentation. But, simply, *notarize.py* takes a file as input, calculates its SHA-256 hash value and writes this value into a register of an unspendable box.

This would be useful for proofs of authorship, notarization of documents etc.

An example on how to call it to write hash of “mytext.txt” file contents on the Ergo blockchain:

```ergoscript
python3 notarize.py mytext.txt --mainnet --server 127.0.0.1:9053 --api-key 7yaASMijGEGTbttYHg1MrXnWB8EbzjJnFLSWvmNoHrXV
```

In case of success, the script creates “mytext.txt.nt.json” file with contents like:

```ergoscript
{"boxId": "6cec418777b0ea0aa82be56e5eb03a3f8889fccdc0496133b6f73bb70ee2b5ec", "transactionId": "ec78378c4c1f6e6b0118124f36231f7077ea916921567a08a190b971187084aa", "updated": 1567779147.703096}
```

(time format looks strange, Python standard? will make an issue about that)

Then there is another script, *check.py* , which is checking whether transaction is confirmed (got into the blockchain). Example:

```ergoscript
python3 check.py --server 127.0.0.1:9053 check.py.nt.json
```

In case of the transaction being confirmed, the mytext.txt.nt.json file being updated with confirmation time, e.g.

```ergoscript
{'boxId': '6cec418777b0ea0aa82be56e5eb03a3f8889fccdc0496133b6f73bb70ee2b5ec', 'transactionId': 'ec78378c4c1f6e6b0118124f36231f7077ea916921567a08a190b971187084aa', 'updated': 1567779410.799707, 'confirmed': 1567779410.799699}
```

Transaction in the explorer: <https://explorer.ergoplatform.com/en/transactions/ec78378c4c1f6e6b0118124f36231f7077ea916921567a08a190b971187084aa>

Please note that one of the outputs of the transaction is locked by “4MQyMKvMbnCJG3aJ” script, which is P2S (Pay-to-Script) representation of “false” condition, i.e. the box is unspendable. Hash is written into R4 register of the box, in the explorer it looks like “0e2047ee2cbd52be01e0876c3e0b989a0d4d5f8955200b1fab0e6eeb2b182555c2fb”, where “0e” is type descriptor (byte array), “20” is bytestring length (0x20 in hex = 32), “47ee2cbd52be01e0876c3e0b989a0d4d5f8955200b1fab0e6eeb2b182555c2fb” is the hash of the file.

Locked amount is .001 Erg, according to current storage fee the box will live for ~4 years only.

---

### Post #2 — @jasondavies (2019-09-06)

It’s nice how the storage fee model sets a time limit for these types of boxes. You could easily set a higher fee if you wanted the notarisation to live for a much longer period.
