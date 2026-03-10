---
title: Decentralized Mining and Non-Interactive Share Proofs
description: 'ErgoForum discussion: Decentralized Mining and Non-Interactive Share
  Proofs'
tags:
- difficulty-adjustment
- ergoforum
- ergohack
- nipopow
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/decentralized-mining-and-non-interactive-share-proofs/4860
created: '2024-09-16'
last_activity: '2024-09-16'
posts_count: 1
views: 231
likes: 4
glossary_hits:
- Difficulty adjustment
- ERGOHACK
- NiPoPoW
---

# Decentralized Mining and Non-Interactive Share Proofs

> **Forum thread:** [https://ergoforum.org/t/decentralized-mining-and-non-interactive-share-proofs/4860](https://ergoforum.org/t/decentralized-mining-and-non-interactive-share-proofs/4860)
> **Category:** Uncategorized | **Created:** 2024-09-16 | **Posts:** 1 | **Views:** 231

**Related concepts:** Difficulty adjustment, ERGOHACK, NiPoPoW

---

### Post #1 — @CheeseEnthusiast (2024-09-16)

As I continue to develop Lithos, it was suggested to me to make a discussion on the future of decentralized mining and Non-Interactive Share Proofs (NISPs). As per the paper I wrote for ErgoHack V, NISPs seem to be the most optimal way to approach a smart-contract based mining pool. However specific details regarding parameters along with more data and testing is required. To those unfamiliar, NISPs are some limited selection of shares produced from the total set of shares a miner creates while performing Proof-of-Work. To qualify as a NISP, each share present within the proof must qualify as a “super-share”, akin to how certain blocks are treated as “super-blocks” in the context of NiPoPoWs. Super-shares are distinguishable by their high difficulty compared to normal shares. Following the spirit of NiPoPoWs, NISPs use these high difficulty shares to represent the total work performed by the miner over a period of time.

**Decentralized Mining Protocol**  
In the context of a decentralized pool, miners are aiming to prove that they mined a constant *N* number of shares at a certain target *d* in some window of time *W* before the block was mined. Miners will commit to a certain mining difficulty before a block is mined. Upon finding a successful block solution, miners will post a share proof, a limited set of super-shares whose difficulty is much higher and proportional to *d*.

**Remaining Question**

* Like NiPoPoWs, NISPs are evaluated based on their “goodness”. “Goodness” is essentially the idea that within a given set of shares produced over a period of time, there exists some some subset of super-shares at a higher difficulty. The size of this subset is inversely proportional to it’s level, which is simply a minimum difficulty threshold proportional to *d* which separates super-shares from normal shares. However, more research is needed on how to divide a set into different levels. NiPoPoWs use powers of 2 to separate blocks into different levels, with each level containing half as many super-blocks with minimum difficulties which are 2x larger. In my earlier NISP Research Paper, I divided super-shares into levels based on factors of *N*. For example, a NISP pool which requires miners to mine 100,000 shares would accept 1 share at a difficulty 100,000 times *d*, 2 shares at a difficulty 50,000 times *d*, 3 shares at a difficulty 33,333 times *d*, etc. More research is needed into different leveling schemes and whether or not they meaningfully effect the probability of creating a valid share proof.
* Finding good parameters which scale well into real world use is also an important topic. Understanding whether changing the value of *N* changes the probability of creating a share proof for a given miner would be helpful for setting the parameter in a real decentralized pool. Likewise, finding a good value for *W* which prevents abuse of the protocol is important. We can think of *W* as being a reminiscent of the share-window used in PPLNS payment schemes.
* Finally, ensuring that proofs remain succinct and that the protocol remains scalable is important for a decentralized mining pool. The current plan for Lithos is to use an optimistic rollup, where miners post share proofs to the rollup after a block is made. Before being paid, proofs are evaluated off-chain. If a proof is found to be invalid, a fraud proof is posted to the rollup to ensure the adversarial miner is not paid for the invalid work. Other research into scalability options would be useful here. Along with L2 protocols, finding ways to further compress share proofs would also be helpful.

As I do more research, more insight into NISPs and other potential constructions will be posted here.
