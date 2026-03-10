---
title: A perpetual token
description: 'ErgoForum discussion: A perpetual token'
tags:
- addresses
- box
- collateral
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- multi-stage-contracts
- native-tokens
- registers
- sigma-protocols
- sigmastate-interpreter
- singleton-/-state-nft
- token-id-rule
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/a-perpetual-token/205
created: '2020-04-23'
last_activity: '2025-10-02'
posts_count: 10
views: 2069
likes: 17
glossary_hits:
- Addresses
- Box
- Collateral
- Ergo Explorer
- ErgoScript
- ErgoScript context
- Multi-stage contracts
- Native tokens
- Registers
- Sigma protocols
- Sigmastate interpreter
- Singleton / State NFT
- Token ID rule
- Transaction
---

# A perpetual token

> **Forum thread:** [https://ergoforum.org/t/a-perpetual-token/205](https://ergoforum.org/t/a-perpetual-token/205)
> **Category:** Uncategorized | **Created:** 2020-04-23 | **Posts:** 10 | **Views:** 2069

**Related concepts:** Addresses, Box, Collateral, Ergo Explorer, ErgoScript, ErgoScript context, Multi-stage contracts, Native tokens, Registers, Sigma protocols, Sigmastate interpreter, Singleton / State NFT, Token ID rule, Transaction

---

### Post #1 — @jasondavies (2020-04-23)

In other words, a token which is guaranteed to exist forever, unless it gets garbage-collected!

```ergoscript
{
  val isPerpetual = {(b: Box) =>
    b.propositionBytes == SELF.propositionBytes && b.tokens == SELF.tokens
  }

  sigmaProp(OUTPUTS.exists(isPerpetual))
}
```

(Actually, this is a perpetual collection of tokens (possibly of size zero). But if you protect a singleton token with this script, then it guarantees the token will never be destroyed other than by garbage collection.)

---

### Post #2 — @robert (2020-04-23)

Nice example. Could be a cool idea to compile a list of short scripts like this one to to give people an idea of how to do basic design patterns which they could then utilize for their own more complex contracts.

---

### Post #3 — @jasondavies (2020-04-23)

Here it is in the real world: [3i6QAH4GMJDnicSdUo1UotuugYePfQTPDipHCZ67U7](https://explorer.ergoplatform.com/en/addresses/3i6QAH4GMJDnicSdUo1UotuugYePfQTPDipHCZ67U7)

---

### Post #4 — @scalahub (2020-04-24)

Preventing garbage collection is quite tricky. I guess you can add some more condition that amount is > some value (and maybe that value decreases over time). Other than that looks good.

Would be nice to have some use-cases for such a box. One (as you suggested elsewhere) is in protecting collateral in pooled mining. Perhaps elaborate a bit more on this?

---

### Post #5 — @jasondavies (2020-04-24)

Yes, in the case of mining pool collateral, I needed a singleton token (token with value 1) to prevent a particular edge case. If I add a condition that a specific token ID must be spent along with the collateral box, it prevents separate parallel transactions from being spent in the same block.

This perpetual token script could be used to ensure that the singleton token is not destroyed. There are no other conditions e.g. I could have ensured a minimum value as you suggested to prevent garbage collection. But I wanted to see if a minimal script would work. You can prevent garbage collection by spending the box frequently enough, which should be sufficient in the mining pool case.

---

### Post #6 — @kushti (2020-04-24)

I guess we need to start a topic with design patterns at some points. While working with [@scalahub](/u/scalahub) on “Multi-stage contracts…”, yAssets and so one, we discovered some patterns now mostly forgotten it seems ![:frowning_face:](https://emoji.discourse-cdn.com/twitter/frowning_face.png?v=9 ":frowning_face:")

---

### Post #7 — @scalahub (2020-05-14)

Yes, this is quite a useful design pattern and with possibly many interesting applications.  
we should add it to the “Ergo handbook of tricks” ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=9 ":slight_smile:")

I remember discussing with [@kushti](/u/kushti) a couple of the other design patterns, like “cyclic references” and “proof of non-existence of some boxes”.

---

### Post #8 — @jasondavies (2020-05-14)

What’s the cyclic reference design pattern?

---

### Post #9 — @scalahub (2020-05-14)

In multi-stage protocols, one script refers to the script of the next stage (example in `script1`, we have the statement `hash(OUTPUTS(0).propositionBytes) == script2Hash`).

But suppose we also want the `script2` to refer back to `script1`, (example we want `hash(OUTPUTS(0).propositionBytes) == script1Hash`), then its a cyclic reference.

One solution is to store `script1Hash` in register of the box containing `script2`. Additionally `script1` is modified to ensure that the corresponding register of any box containing `script2` equals `hash(SELF.propositionBytes)`.

EDIT: While the “vanilla” perpetual token is interesting, the more powerful one is the “max-once-per-block-use” perpetual token, which should be a separate design pattern.

---

### Post #10 — @kushti (2025-10-02)

Vibecoded an ErgoScript test suite based on perpetual token contract: [Perpetual token example by kushti · Pull Request #1082 · ergoplatform/sigmastate-interpreter · GitHub](https://github.com/ergoplatform/sigmastate-interpreter/pull/1082)
