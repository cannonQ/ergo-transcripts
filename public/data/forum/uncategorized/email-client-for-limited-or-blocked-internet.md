---
title: (E)mail Client for Limited or Blocked Internet
description: 'ErgoForum discussion: (E)mail Client for Limited or Blocked Internet'
tags:
- box
- difficulty-adjustment
- ergoforum
- ergoscript-context
- full-node
- nipopow
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/e-mail-client-for-limited-or-blocked-internet/134
created: '2019-11-23'
last_activity: '2023-10-11'
posts_count: 9
views: 5208
likes: 32
glossary_hits:
- Box
- Difficulty adjustment
- ErgoScript context
- Full node
- NiPoPoW
- Transaction
---

# (E)mail Client for Limited or Blocked Internet

> **Forum thread:** [https://ergoforum.org/t/e-mail-client-for-limited-or-blocked-internet/134](https://ergoforum.org/t/e-mail-client-for-limited-or-blocked-internet/134)
> **Category:** Uncategorized | **Created:** 2019-11-23 | **Posts:** 9 | **Views:** 5208

**Related concepts:** Box, Difficulty adjustment, ErgoScript context, Full node, NiPoPoW, Transaction

---

### Post #1 — @kushti (2019-11-23)

There are two motivations for this post

1. Some countries, such as China and Belarus are already blocking Tor. We can expect that in future some countries will try to block cryptocurrency protocols in a similar way.
2. [Internet just being restored in Iran after week-long shutdown](https://netblocks.org/reports/internet-restored-in-iran-after-protest-shutdown-dAmqddA9) caused by unrest. Previously there were partial or complete shutdowns in Egypt, Ethiopia, Sudan, Turkey.

However, people have right to store value available, whether the value is under threat from monetary policies, political instability, or war. Happily, with digital communications and digital gold this problem could be solved.

As possible solution for Bitcoin, [Blockstream satellite network](https://blockstream.com/satellite/) could be used, however, satellite signal could be jammed. Another workaround which I am going to propose is to use e-mail (which is last to be blocked usually) or other low-bandwidth and not very interactive means of communication (fax, modem call over a landline to a bulletin board system, mail).

So assume Alice is willing to buy *X* ergs from Bob (paying with cash), but internet is very limited or does not working in their area. Bob owns a box protected by a public key (stored locally). Then the protocol could be as follows.

1. Bob is creating transaction from his box which is creating a new box where *X* ergs are locked by the condition “Before deadline: Bob’s signature and spending transaction has an output of *X* ergs which belongs to Alice’s public key; After deadline: Bob’s signature”. I will refer to the new box as to the “deal box” further. Please note that for a signed transaction outputs with respective identifiers are known.
2. Bob sends the transaction over (e)mail to a gateway. Gateway sends efficient [NiPoPoW](https://nipopows.com/) proof for a header having enough confirmations + proof of box membership against state digest from the header. This proof is small, tens of kilobytes. for better security, Bob may ask another gateway for header proof as well.
3. Bob shows proofs to Alice. Alice checks proofs and also that deadline will not likely met when a new transaction with their deal will reach the Ergo blockchain. Bob signs the new transaction which is spending the deal box created on step 1 and creating the output box for Alice.
4. Now Alice sends the transaction signed by Bob to the gateway and gets the proof of inclusion from it.

With proofs of such size (tens of kilobytes), email / fax / ADSL modem or even paper work fine as means of communication between the users and the gateways.

---

### Post #2 — @robert (2019-11-26)

This is a pretty interesting use of NiPoPoW, and shows there’s a lot of potential with such things.

The specific way this situation is laid out, this would only be useful if at some later point in time Alice could regain access to the internet to send her Ergs, right? I am sure this would still be quite useful in a lot of situations where a person’s local currency might be heavily depreciating and they are looking for a way to store their value with the hope that in the next few months/years/… they’ll be able to get out and then be able to spend said funds.

---

### Post #3 — @kushti (2019-11-26)

Right, in most cases Alice will buy to hold until better times, or to relocate with value stored in safe digital haven, as I can imagine

---

### Post #4 — @scalahub (2020-01-07)

Interesting use of NiPoPoWs as Robert said. The goal is to have people without Internet access, or at least so limited access that they cannot run a node. So this is for “nodeless” people I might say.

I might be missing something or perhaps there is a typo in the original post?

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> * Bob shows proofs to Alice. Alice checks proofs and also that deadline will not likely met when a new transaction with their deal will reach the Ergo blockchain. Bob signs the new transaction which is spending the deal box created on step 1 and creating the output box for Alice.

Did you mean?

> * Bob shows proofs to Alice. Alice checks proofs and also that deadline *will likely be met* when a new transaction with their deal will reach the Ergo blockchain. Bob signs the new transaction which is spending the deal box created on step 1 and creating the output box for Alice.

I presume you want Bob to put the coins in some sort of an escrow (emulated by the deal box) such that Bob can take it back after the deadline, and Alice has some assurance that she will be able to perform Step 4 before the deadline expires, otherwise Bob can double-spend the deal box. Is this correct?

Does it protect from a cheating gateway that is running a private blockchain with reduced difficulty?

---

### Post #5 — @kushti (2020-01-08)

Yes, the “deal” escrow box prevents double-spending (within certain time-window).

On attacks from malicious mining power, the protocols (IPoPoW / NIPoPoW) assume multiple provers, with at least on of them being honest. Similarly, Alice for better security should use several gateways with at least one of them being honest.

---

### Post #6 — @Ccgarant (2021-05-27)

Hello, in light of recent events (renewed China Ban, India, etc), I came across this very interesting post. I’m not in the weeds, but curious, have there been updates to this effort? An update or renewed post on this topic would be appreciated. Keep up the good fight! Cheers

---

### Post #7 — @kushti (2021-05-29)

We had no implementations for NiPoPoW prover and verifier functionalities and API back then. Now it is going to be in the upcoming 4.0.12 release: <https://github.com/ergoplatform/ergo/pull/1352> , and Merkle proofs for transactions also done some time ago: [API method to get Merkle proof for transaction added by semyonoskin · Pull Request #1288 · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/pull/1288) . So now it is good time to start microclients for areas with very limited connectivity and protocols on top of them. Could be a good topic for the upcoming hackathon.

---

### Post #8 — @rfPeixoto (2021-06-04)

Very interesting, good luck with that!

---

### Post #9 — @blaire2b256 (2023-10-11)

This seems quite relevant currently to protect the ordinary innocent citizens who find their lives disrupted by war and oppressive regimes.

Is there anyone working on an implementation of this?

It seems the necessary components are already available.
