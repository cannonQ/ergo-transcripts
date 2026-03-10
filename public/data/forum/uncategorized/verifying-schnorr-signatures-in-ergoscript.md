---
title: Verifying Schnorr Signatures in ErgoScript
description: 'ErgoForum discussion: Verifying Schnorr Signatures in ErgoScript'
tags:
- chaincash
- context-extension
- ergoforum
- ergoscript
- ergoscript-context
- kiosk
- schnorr-signatures
- scorex
- sigma-protocols
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/verifying-schnorr-signatures-in-ergoscript/3407
created: '2022-02-19'
last_activity: '2023-04-05'
posts_count: 2
views: 1305
likes: 11
glossary_hits:
- ChainCash
- Context extension
- ErgoScript
- ErgoScript context
- Kiosk
- Schnorr signatures
- Scorex
- Sigma protocols
- Transaction
---

# Verifying Schnorr Signatures in ErgoScript

> **Forum thread:** [https://ergoforum.org/t/verifying-schnorr-signatures-in-ergoscript/3407](https://ergoforum.org/t/verifying-schnorr-signatures-in-ergoscript/3407)
> **Category:** Uncategorized | **Created:** 2022-02-19 | **Posts:** 2 | **Views:** 1305

**Related concepts:** ChainCash, Context extension, ErgoScript, ErgoScript context, Kiosk, Schnorr signatures, Scorex, Sigma protocols, Transaction

---

### Post #1 — @scalahub (2022-02-19)

# Schnorr Signatures

There are several use-cases where we need to verify a Schnorr signature on-chain.  
This post describes how to do so in ErgoScript.

## Initial Setup

Ergo uses the same curve as Bitcoin (Secp256k1), which we call *G*. The curve also defines a default generator *g*.

1. Secret key is integer *x*
2. Public key is *Y = g^x*, an element of *G*

## Signing

Let the hash of the message to be signed be *M*. The signature is computed as follows:

1. Generate a random integer *r* and compute *U = g^r*.
2. Compute the integer *c = Hash(U || M)*
3. Compute *s = r - cx*.
4. Send the value *(c, s)* to the verifier as the “signature”

Note that the signature is a *pair of integers*.

## Verification

### Schnorr Identification

To understand verification, first consider a variant called “Schnorr identification”.  
In this, instead of *(c, s)*, the value *(U, s)* – a group element and an integer – is sent.

The verifier computes *c = Hash(U || M)* and accepts iff *g^s = U / Y^c*.

This works because LHS *= g^s = g^(r - cx) = g^r / (g^x)^c =* RHS.

### Schnorr Signature Verification

Given the signature *(c, s)*, we perform the “reverse” of the identification in some sense.

Recall that the verifier of the identification scheme computes *c* from *U* using *Hash* and then verifies some condition.

The verifier of the signature scheme instead computes *U* from *c* using the condition and then verifies *Hash*.

In other words, the verifier first computes *U = g^s \* Y^c* and accepts if *c = Hash(U || M)*.

## Verification in ErgoScript

We use the following setup in our example:

1. The public key *Y* is provided as a `GroupElement` in R4.
2. The message *M* is provided as a `Coll[Byte]` in R5.
3. The value *c* of the signature is provided as a `Coll[Byte]` (for convenience) in context variable 0.
4. The value *s* of the signature is provided as a `BigInt` in context variable 1.
5. The hash function is Sha256.

The following is the script.

```ergoscript
{
  // Checking Schnorr signature in a script
  val g: GroupElement = groupGenerator

  // Public key for a signature
  val Y = SELF.R4[GroupElement].get

  // Message to sign
  val M = SELF.R5[Coll[Byte]].get

  // c of signature in (c, s)
  val cBytes = getVar[Coll[Byte]](0).get
  val c = byteArrayToBigInt(cBytes)
  
  // s of signature in (c, s)
  val s = getVar[BigInt](1).get
  
  val U = g.exp(s).multiply(Y.exp(c)).getEncoded // as a byte array
  
  sigmaProp(cBytes == sha256(U ++ M))
}
```

The complete process of signature generation off-chain and verification on-chain is explained in [this test](https://github.com/ergoplatform/ergo-jde/blob/main/kiosk/src/test/scala/kiosk/schnorr/SchnorrSpec.scala).

---

### Post #2 — @kushti (2023-04-05)

The problem with verifying signatures on-chain is that there is only 256-bits big integer data type.

Thus better to reduce number of bigints used by using simpler textbook version of Schnorr validation (message details missed):

```ergoscript
{
    val message = ...
    // Computing challenge
    // a of signature in (a, z)
    val a = getVar[GroupElement](1).get
    val aBytes = a.getEncoded

    val holderBytes = holder.getEncoded

    val e: Coll[Byte] = blake2b256(aBytes ++ message ++ holderBytes) // strong Fiat-Shamir
    val eInt = byteArrayToBigInt(e) // challenge as big integer
         

     // z of signature in (a, z)
     val zBytes = getVar[Coll[Byte]](2).get
     val z = byteArrayToBigInt(zBytes)

     // Signature is valid if g^z = a * x^e
     val properSignature = g.exp(z) == a.multiply(holder.exp(eInt))
    
     sigmaProp(properSignature)
}
```

and then in offchain code we need to be sure that `z` big integer fits into 255 bits. The following code is simply iterating over signatures while one which can be provided used on the blockchain

```ergoscript
  def randBigInt: BigInt = {
    val random = new SecureRandom()
    val values = new Array[Byte](32)
    random.nextBytes(values)
    BigInt(values).mod(SecP256K1.q)
  }

  @tailrec
  def sign(msg: Array[Byte], secretKey: BigInt): (GroupElement, BigInt) = {
    val g: GroupElement = CryptoConstants.dlogGroup.generator

    val pk = g.exp(secretKey.bigInteger)

    val r = randBigInt
    val a: GroupElement = g.exp(r.bigInteger)
    val e = scorex.crypto.hash.Blake2b256(a.getEncoded.toArray ++ msg ++ pk.getEncoded.toArray)
    val z = (r + secretKey * BigInt(e)) % CryptoConstants.groupOrder

    if(z.bitLength <= 255) {
      (a, z)
    } else {
      sign(msg,secretKey)
    }
  }
```

Examples on building transactions can be found in ChainCash repository, e.g. this test <https://github.com/kushti/chaincash/blob/master/src/test/scala/kiosk/ChainCashSpec.scala>

\*\*Note, that previously insecure variant was published! Fixed now. Thanks dusek for reporting! \*\*
