---
title: App on Distributed Signatures
description: 'ErgoForum discussion: App on Distributed Signatures'
tags:
- ergo-explorer
- ergo-foundation
- ergoforum
- full-node
- ring-signatures
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/app-on-distributed-signatures/342
created: '2020-08-20'
last_activity: '2020-08-29'
posts_count: 9
views: 1953
likes: 32
glossary_hits:
- Ergo Explorer
- Ergo Foundation
- Full node
- Ring signatures
- Transaction
---

# App on Distributed Signatures

> **Forum thread:** [https://ergoforum.org/t/app-on-distributed-signatures/342](https://ergoforum.org/t/app-on-distributed-signatures/342)
> **Category:** Uncategorized | **Created:** 2020-08-20 | **Posts:** 9 | **Views:** 1953

**Related concepts:** Ergo Explorer, Ergo Foundation, Full node, Ring signatures, Transaction

---

### Post #1 — @anon_real (2020-08-20)

Dear Ergo Community,

In this post, I would like to explain a project on top of Ergo’s Distributed Signatures capability. This idea has arisen from the discussion [here](https://www.ergoforum.org/t/lets-sign-collectively-distributed-signatures-api/259) on the forum by Kushti.

It was cool to see a working example of distributed signatures But the process to sign such transactions collectively is somehow complex for non-technical people and even tedious for technical ones. The aim of this project is to make this process as user-friendly and automated as possible to make it usable by everyone.

After some discussion with Kushti over email on what is potentially needed, I started developing. Now after several weeks, the code is almost ready for a demo.

This project contains two separate apps, server, and client.

The server is accessible by everyone who can propose ideas and ask for funds from a team.

[![Screenshot 2020-08-20 at 2.11.58 PM](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/3e87d32ca775e040934d1f341b42e95b86852a88_2_690x431.png)

Screenshot 2020-08-20 at 2.11.58 PM2880×1800 275 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/3e87d32ca775e040934d1f341b42e95b86852a88.png "Screenshot 2020-08-20 at 2.11.58 PM")

*Proposal page of the server, anyone can propose ideas by creating a proposal for a specific team*

On the other hand, every team member has to set up the client app which will be in charge of interacting with their secret, node, explorer, and server to create the necessary proofs for approved proposals.

[![Screenshot 2020-08-20 at 2.38.25 PM](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/bb4d47da3132e2bca3986a0ca9d9a19772b66ff7_2_690x431.png)

Screenshot 2020-08-20 at 2.38.25 PM2880×1800 271 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/bb4d47da3132e2bca3986a0ca9d9a19772b66ff7.png "Screenshot 2020-08-20 at 2.38.25 PM")

*Client app interface, members can approve or reject each proposal*

If a proposal is marked as fully approved (enough approvals have been collected based on the team’s signature), then client apps will generate necessary proofs and transactions in the background without needing any intervention by members.

[![Screenshot 2020-08-20 at 2.40.55 PM](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/e805a30e56cbf4e190683c224c313f1727277a7a_2_345x108.png)

Screenshot 2020-08-20 at 2.40.55 PM1250×394 30.3 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/e805a30e56cbf4e190683c224c313f1727277a7a.png "Screenshot 2020-08-20 at 2.40.55 PM")

[![Screenshot 2020-08-20 at 2.42.37 PM](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/363e17f6d5179b2d6e0717f89c3aa33cede531d4_2_690x67.png)

Screenshot 2020-08-20 at 2.42.37 PM2342×228 21.5 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/363e17f6d5179b2d6e0717f89c3aa33cede531d4.png "Screenshot 2020-08-20 at 2.42.37 PM")

*some logs in client app for generating tx, simulating and assembling the final tx*

Proposing entities can follow their proposal’s status in the server web pages.

[![Screenshot 2020-08-20 at 3.04.25 PM](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/91292216e512ef068e696ec464ab309dd85f331d_2_690x431.png)

Screenshot 2020-08-20 at 3.04.25 PM2880×1800 251 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/91292216e512ef068e696ec464ab309dd85f331d.png "Screenshot 2020-08-20 at 3.04.25 PM")

*proposal page of Ergo Foundation team, one proposal is approved and paid automatically by client apps*

The above pictures are real processes of approving one proposal which was done in literally a few seconds. The generated tx can be found [here](https://explorer.ergoplatform.com/en/transactions/b9a72935880004bb955e044c1dea247da133c71dd79e240e8f8b474dacbc4271) which is an example of 4-out-of-6 threshold signature.

The code is not fully complete and needs improving but I welcome everyone for testing. You can find the server app [here](https://github.com/anon-real/DistributedSigsServer), and the client app [here](https://github.com/anon-real/DistributedSigsClient).

I have tried to keep the app and the whole process as simple and easy-to-use as possible to make it practical for real-world scenarios. I appreciate any suggestions on how to improve.

---

### Post #2 — @kushti (2020-08-26)

I’ve set up a server, made some testing multisig-protected treasuries, finally, made a 2-out-of-3 approved spending: <https://explorer.ergoplatform.com/en/transactions/1e844ef99f37fe342f4f0cc88791eb9bd4af8686940384da989659a7831df422> .

[![server](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/bfd2cc70685483b448aeca38403ff0668b287aab_2_690x198.png)

server1115×321 12.7 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/bfd2cc70685483b448aeca38403ff0668b287aab.png "server")

Works nice! I would like to test with someone else now )

---

### Post #3 — @anon_real (2020-08-26)

I can test with you ![:smiley:](https://emoji.discourse-cdn.com/twitter/smiley.png?v=9 ":smiley:")  
Should I give you a public key to generate the signature, or?

---

### Post #4 — @DarkSideOfBrrrrr (2020-08-26)

Just discovered this, its like a breathe of fresh crypto-air! I’m so happy that I’m witnessing early days of Ergo and developments like this.

If someone can set up a server, I would like to create a testing fund and donate 2,000 ergs, with a goal to develop more privacy-friendly tools on Ergo. [@Martin-mx](/u/martin-mx) kushti [@anon\_real](/u/anon_real) do you guys want to be in a committee?

---

### Post #5 — @Martin-mx (2020-08-26)

I approve any donations to anons, the only team developing privacy-friendly tools on Ergo so far, [@anon\_real](/u/anon_real) in this case ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=9 ":slight_smile:") Please test with [@kushti](/u/kushti) and [@anon\_real](/u/anon_real) and any other developers if possible at the moment as they will most probably eliminate the majority of bugs and bring improvements in the meantime. Foundation of course itself will deliver grants for these developments, also looks like the ZK treasury enables different experiments for the foundation to support ecosystem development in more public and exciting way. Let`s see.

---

### Post #6 — @kushti (2020-08-26)

I would be happy to participate) I think first we need to do some more testing with [@anon\_real](/u/anon_real) though. Lemme check if I can do a server

---

### Post #7 — @robert (2020-08-26)

That’s really generous of you [@DarkSideOfBrrrrr](/u/darksideofbrrrrr) for giving to the community.

I would recommend putting in only a smaller percentage for now initially, just to be sure before the contracts/off-chain code has been carefully inspected in case some edge case bugs still exist.

---

### Post #8 — @DarkSideOfBrrrrr (2020-08-27)

True, that’s why I’m starting with 2,000 Ergs. After testing, next fund will be bigger. I was lucky enough to grab some heavy bags around 2K sats.

Hopefully, other whales and miners will follow. I do not care much about that though.

---

### Post #9 — @anon_real (2020-08-29)

Please continue the discussions [here](https://www.ergoforum.org/t/zero-knowledge-treasury-on-top-of-ergo/354).
