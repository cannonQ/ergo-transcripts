---
title: Yet Another Mixing Protocol
description: 'ErgoForum discussion: Yet Another Mixing Protocol'
tags:
- box
- ergoforum
- ergomixer
- ergoscript
- ergoscript-context
- kiosk
- native-tokens
- registers
- transaction
- uncategorized
- zerojoin
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/yet-another-mixing-protocol/3359
created: '2022-02-14'
last_activity: '2022-08-30'
posts_count: 4
views: 2642
likes: 18
glossary_hits:
- Box
- ErgoMixer
- ErgoScript
- ErgoScript context
- Kiosk
- Native tokens
- Registers
- Transaction
- ZeroJoin
---

# Yet Another Mixing Protocol

> **Forum thread:** [https://ergoforum.org/t/yet-another-mixing-protocol/3359](https://ergoforum.org/t/yet-another-mixing-protocol/3359)
> **Category:** Uncategorized | **Created:** 2022-02-14 | **Posts:** 4 | **Views:** 2642

**Related concepts:** Box, ErgoMixer, ErgoScript, ErgoScript context, Kiosk, Native tokens, Registers, Transaction, ZeroJoin

---

### Post #1 — @scalahub (2022-02-14)

Below is an idea for mixing coins motivated from ErgoMixer (aka zerojoin). Hence, some basic idea of ErgoMixer will be useful in understanding the motivation.

## Motivation

The primary motivation is to develop a better variant of ErgoMixer.

1. *Mix more than 2 boxes*: In ErgoMixer, we can mix only two boxes at a time and it will be good to have a solution that works for more than 2 boxes
2. *Make it more non-interactive*: In ErgoMixer, Bob can mix coin of Alice without interaction. However, to remix, Alice must be online. We want a variant where Alice’s (and Bob’s) box can be remixed multiple times without Alice’s intervention.

## Basic idea

The following describes the high level idea for mixing two boxes at a time. The same idea can be trivially extended to mix three, four, etc boxes, which will not be described below.

The primary issue with ErgoMixer is that we cannot remix a full-mix box directly half the time; when playing Alice’s role, we need to create a half-mix box, and for that we need to be online. Additionally, the half-mix box is a kind of “bloat”. It will be good if we can operate with “full-mix” boxes only (called just “mix-boxes”).

The idea is to start with two boxes having a script of type *proveDlog(\*, \*)* for the owners and have the mix process generate two boxes also of type *proveDlog(\*, \*)* for each owner.

**Note**: We are considering the generic variant of *proveDlog* that takes in two parameters: base and the value to take log of. Ergo’s *proveDlog* has a fixed base *g* (the same as the one in Bitcoin’s curve) and takes only one parameter. Ergo, however, has the *proveDHTuple* instruction that can be used to emulate what we want using the rule: *proveDlog(a, b) = proveDHTuple(a, a, b, b)*.

## Details

Since we have only one type of box, we will have only one type of participant, which we will call Alice.

At any time, a mix box has two registers used:

* R4 contains group element *h*, which is to be considered the base for discrete logs
* R5 contains group element *w*, which is the value whose discrete log is in question

The owner of the mix box has to prove the statement: *proveDlog(h, w) = proveDlog(R4, R5)*

To start, Alice (and many others) select a secret *x*, compute *w = g^x*.  
Her first box is created with R4 = *g* and R5 = *w*.

At any time, a mix is done by selecting Alice’s and another mix box along with a secret *y*. Then the transformation *(h, w) → (h^y, w^y)* is applied to Alice’s box (along with a similar transformation to the other box). The transformation preserves’s Alice’s secret exponent *x*, ensuring her ability to spend the box anytime. This is also called “re-randomising” the public key.

To ensure the transformation is correct, Alice must ensure that *y != 0* and that the new box preserves her secret exponent between R4 and R5. This is ensured in the rest of the contract of the mix box.  
Note that just requiring R4 != R5 for the new boxes ensures that y != 0. The remaining part is handled by proveDHTuple. The [complete contract](https://wallet.plutomonkey.com/p2s/?source=eyAgCiAgIHZhbCBoID0gU0VMRi5SNFtHcm91cEVsZW1lbnRdLmdldCAgICAgLy8gY3VycmVudCBiYXNlIGZvciBkTG9nCiAgIHZhbCB3ID0gU0VMRi5SNVtHcm91cEVsZW1lbnRdLmdldAogICAKICAgdmFsIG93bmVyID0gcHJvdmVESFR1cGxlKGgsIGgsIHcsIHcpICAvLyA9IHByb3ZlRGxvZyhoLCB3KQogICAKICAgdmFsIG1peCA9IHsKICAgICB2YWwgb3V0MSA9IE9VVFBVVFMoMCkKICAgICB2YWwgb3V0MiA9IE9VVFBVVFMoMSkKICAgICAKICAgICB2YWwgaE91dDEgPSBvdXQxLlI0W0dyb3VwRWxlbWVudF0uZ2V0CiAgICAgdmFsIGhPdXQyID0gb3V0Mi5SNFtHcm91cEVsZW1lbnRdLmdldAogICAgIAogICAgIHZhbCB3T3V0MSA9IG91dDEuUjVbR3JvdXBFbGVtZW50XS5nZXQKICAgICB2YWwgd091dDIgPSBvdXQyLlI1W0dyb3VwRWxlbWVudF0uZ2V0CiAgICAgCiAgICAgdmFsIHZhbGlkT3V0cyA9IG91dDEucHJvcG9zaXRpb25CeXRlcyA9PSBTRUxGLnByb3Bvc2l0aW9uQnl0ZXMgJiYKICAgICAJICAgICAJICAgICBvdXQyLnByb3Bvc2l0aW9uQnl0ZXMgPT0gU0VMRi5wcm9wb3NpdGlvbkJ5dGVzICYmCiAgICAgCSAgICAgCSAgICAgb3V0MS52YWx1ZSA9PSBTRUxGLnZhbHVlICYmIAogICAgIAkgICAgIAkgICAgIG91dDIudmFsdWUgPT0gU0VMRi52YWx1ZSAmJgogICAgIAkgICAgIAkgICAgIGhPdXQxICE9IHdPdXQxICYmIC8vIHJ1bGUgb3V0IHBvaW50IGF0IGluZmluaXR5CiAgICAgCSAgICAgCSAgICAgaE91dDIgIT0gd091dDIgICAgLy8gcnVsZSBvdXQgcG9pbnQgYXQgaW5maW5pdHkgICAgICAgIAoJCSAgICAgICAKICAgICB2YWwgdmFsaWRXID0gcHJvdmVESFR1cGxlKGgsIHcsIGhPdXQxLCB3T3V0MSkgfHwgCiAgICAgCSAgICAgCSAgcHJvdmVESFR1cGxlKGgsIHcsIGhPdXQyLCB3T3V0MikKCiAgICAgLy8gdmFsaWRXIGVuc3VyZXMgdGhhdCBhdCBsZWFzdCBvbmUgb2YgdGhlIG91dHB1dHMgCiAgICAgLy8gaGFzIHRoZSByaWdodCByZWxhdGlvbnNoaXAgYmV0d2VlbiBpdHMgKFI0LCBSNSkKICAgICAgCiAgICAgdmFsaWRXICYmIHZhbGlkT3V0cwogICB9CiAgIAogICBtaXggfHwgb3duZXIKfQ==) is given below:

```ergoscript
{  
   val h = SELF.R4[GroupElement].get     // current base for dLog
   val w = SELF.R5[GroupElement].get
   
   val owner = proveDHTuple(h, h, w, w)  // = proveDlog(h, w)
   
   val mix = {
     val out1 = OUTPUTS(0)
     val out2 = OUTPUTS(1)
     
     val hOut1 = out1.R4[GroupElement].get
     val hOut2 = out2.R4[GroupElement].get
     
     val wOut1 = out1.R5[GroupElement].get
     val wOut2 = out2.R5[GroupElement].get
     
     val validOuts = out1.propositionBytes == SELF.propositionBytes &&
     	     	     out2.propositionBytes == SELF.propositionBytes &&
     	     	     out1.value == SELF.value && 
     	     	     out2.value == SELF.value &&
     	     	     hOut1 != wOut1 && // rule out point at infinity
     	     	     hOut2 != wOut2    // rule out point at infinity        
		       
     val validW = proveDHTuple(h, w, hOut1, wOut1) || 
     	     	  proveDHTuple(h, w, hOut2, wOut2)

     // validW ensures that at least one of the outputs 
     // has the right relationship between its (R4, R5)
      
     validW && validOuts
   }
   
   mix || owner
}
```

A mix is done is follows:

1. Pick two boxes with above contract and then generate two mixed boxes as follows:
2. Generate secret bit *b* and use that to decide ordering of outputs
3. Generate secrets *y* for re-randomising inputs. Use different secret for each input.
4. Compute *R4^y* and *R5^y* for each input. These are the new R4 and R5 respectively for the outputs. (which output depends on the secret bit *b*)
5. Use secret *y* to generate *proveDHTuple* proofs for both boxes

Any output box is can be remixed simply by picking it up and doing Step 1 to 5 again, without needing the secret protecting the funds.

See the mock tests [here](https://github.com/ergoplatform/ergo-jde/blob/main/kiosk/src/test/scala/kiosk/mixer/MixSpec.scala) for details of mixing and withdraw.

## Analysis

From Alice’s point of view in regards to security, no one should be able to spend the box other than for mixing. Secondly, Alice should always be able to spend her box. Both are guaranteed by ensuring the exponent relationship between R4, R5 of at least one of the box in the mix, and additionally requiring R4 to be not O (the point at infinity).

With regards to privacy, no outsider should be able to guess with an advantage, which output corresponds to which input. An outsider is anyone other than the inputs’ owners and the mixer (which can also be an input’s owner).

Let (R4, R5) of the two inputs contain *(h1, w1), (h2, w2)* respectively.  
Then the transformation from inputs to outputs for secrets *y1, y2* is:

* For first input: *(h1, w1) → (h1^y1, w1^y1)*
* For second input: *(h2, w2) → (h2^y2, w2^y2)*

If the DDH problem is hard then it is hard to distinguish the two outputs.

## Future Work

* The above idea is for two boxes at a time, but this number can be increased to three (and any *fixed* value) simply by adding the same constraints for the 3rd output along with an additional *proveDHTuple* clause.
* We have the same issue of fee as in ErgoMixer, and a similar solution (using mixing tokens) should work here as well. Other solutions can be considered as well, for instance using 3rd party who takes up the task of mixing for a fee, which can be paid initially.

Finally, note that this is only a high level idea that needs to be further analysed, so please don’t experiment with large funds.

---

### Post #2 — @scalahub (2022-04-12)

Discussing a few extensions of the above protocol.

# Outsourceable mixing

Observe that the mix can be done by a 3rd party, not necessarily the owner of a mix box.  
This allows us to design more traditional mixers in a non-custodial manner. The mix will be done as follows:

1. Create a mix box and add it to the pool
2. Send the box id along with processing fee to a mixer.

This allows us to elegantly handle fee as well; the fee is simply paid by the 3rd party mixer from an independent pool of funding boxes, unrelated to the owners of the mix-boxes.

To avoid the bottleneck of depending only on a single mixer, we could use several of them in succession, hoping that at least one of them will provide privacy.

The positives of using a mixer is:

1. A mixer can plan the sequence of transaction as they have bigger picture of the participants. Thus an honest mixer will provide stronger anonymity than mixing by self.
2. Handling mining fee becomes very easy when using a mixer. The alternative approach, followed in ErgoMix uses mixing tokens which is a fairly complex mechanism involving several smart contracts interacting with each other.

One problem we have with this solution is the mixer can lose track of the box being mixed. Since anyone has the ability to mix, while a box is being processed by a mixer, another user may spend the same box, after which the mixer will lose track of the box to process (it can only guess with 50% chance assuming DDH is hard). To overcome this, we can put a time-lock in the box that allows the mixer to spend the box immediately and anyone else after a timeout. The mixer is determined by a group element (public key) stored in R6, which can be different in each mix for stronger privacy.

so the condition for mix will be something like

```ergoscript
validW && validOuts && (proveDlog(r6) || HEIGHT > timeOut)
```

---

### Post #3 — @scalahub (2022-04-12)

# Stealth Transfers

The usual approach of the above protocol is to deposit a box to the pool, perform many mixes and then withdraw from the pool.

This allows us to distinguish mix transactions from ordinary “transfer of value” transactions.  
However, we can use “sigma Or” to hide transfer of value transactions within mix transactions.

This can be done by joining the zero-knowledge clause with the `owner` clause in the mix

```ergoscript
 val validW = proveDHTuple(h, w, hOut1, wOut1) || 
  	     	  proveDHTuple(h, w, hOut2, wOut2) ||
              owner
```

This allows the owner to also create a mix-like transaction that is actually a transfer of value.

After this change, there is no particular need to withdraw from the pool, except in unusual use-cases.

We call this technique of hiding transfer of value within mix transactions as **Stealth Transfers**

---

### Post #4 — @Seafarer (2022-08-30)

is it realistic to think in 20 or 30 years a mixer could be made that not even a gov ai could know you are using?
