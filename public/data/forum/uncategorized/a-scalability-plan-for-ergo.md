---
title: A Scalability Plan for Ergo
description: 'ErgoForum discussion: A Scalability Plan for Ergo'
tags:
- bootstrapping
- box
- difficulty-adjustment
- eip
- ergoforum
- full-node
- getblok-plasma
- mempool
- nipopow
- sigma-chains
- soft-fork
- spv
- storage-rent
- sub-blocks
- transaction
- uncategorized
- utxo-set-snapshot
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/a-scalability-plan-for-ergo/226
created: '2020-05-26'
last_activity: '2024-07-22'
posts_count: 11
views: 6542
likes: 71
glossary_hits:
- Bootstrapping
- Box
- Difficulty adjustment
- EIP
- Full node
- GetBlok Plasma
- Mempool
- NiPoPoW
- SPV
- Sigma Chains
- Soft fork
- Storage rent
- Sub-blocks
- Transaction
- UTXO Set Snapshot
---

# A Scalability Plan for Ergo

> **Forum thread:** [https://ergoforum.org/t/a-scalability-plan-for-ergo/226](https://ergoforum.org/t/a-scalability-plan-for-ergo/226)
> **Category:** Uncategorized | **Created:** 2020-05-26 | **Posts:** 11 | **Views:** 6542

**Related concepts:** Bootstrapping, Box, Difficulty adjustment, EIP, Full node, GetBlok Plasma, Mempool, NiPoPoW, SPV, Sigma Chains, Soft fork, Storage rent, Sub-blocks, Transaction, UTXO Set Snapshot

---

### Post #1 — @kushti (2020-05-26)

We need to think how to tackle with scalability issues even when blockchain is not full at all like now. However, it is hard to predict what applications will have demand for, so it is better to understand for now what is doable for the Ergo Platform protocol (with no breaking changes), and start implementations only when needed.

So let’s consider solutions on different levels:

1. L0 (networking protocol): Networking protocol in Ergo is done naively and not optimized at all. I think to start commenting and documenting it, and around August-October do optimized version (would be good to have a help here for sure). I think bootstrapping time and traffic consumed (when a node is synced) can be reduced by few times pretty easily.
2. L1 (blockchain level): Ergo Platform is one of the most sophisticated protocols here with stateless clients (for real full-nodes), NiPoPoWs (for light clients), possibility for bigger blocks (when miners okay to vote for them) and so on.

But also an Ergo block has extension section with mandatory and arbitrary key-value data, By putting certain anchors there it is possible to do BitcoinNG-style microblocks, Aspen-like service-chains or generic sidechains with just velvet or soft forks.

3. L2 (offchain protocols): Ergo has possibility to support Lightning Network, also Rainbow network ( <http://research.paradigm.xyz/RainbowNetwork.pdf> ) , Zero-Knowledge Contingent Payments, and likely FairSwap/FastSwap protocols ( e.g. <https://eprint.iacr.org/2019/1296> ), likely some other state channel constructions possible as well. It would be good to apply offchain techniques to certain applications, such as mixer maybe.

So Ergo Platform has the scalability plan, but its implementation will depend on applications.

---

### Post #2 — @kushti (2020-06-11)

CoinPools, another L2 solution for the UTXO model to consider: <https://discrete-blog.github.io/coinpool/>

---

### Post #3 — @kushti (2021-05-25)

Update:

* A lot of improvements in the node are done (starting from 4.0.8), some going on. We are going to count every memory allocation and every operation. I guess 20-50x improvements are still possible by just optimizing the node code.
* Implementations for bootstrapping with NiPoPoW proofs and UTXO set snapshots are planned.

Then we can think about sub-block confirmation protocols and L2.

---

### Post #4 — @kushti (2022-11-29)

As of November’22, a lot of improvements done this year

* bootstrapping is now running smoothly, after few fixes
* mainnet 5.0 activation will happen in few days, will increase block capacity by like 5-10x
* mempool protection done in recent releases, now the node is pulling transactions it can realistically process between blocks. After 5.0 we can continue work on protecting mempool from possible spam issues and avoiding script recalculation when it is not needed (by introducing transaction classes , see [Protecting mempool from computationally heavy transactions](https://www.ergoforum.org/t/protecting-mempool-from-computationally-heavy-transactions/231) )

And right now I am working on bootstrapping with UTXO set snapshot and then NiPoPoWs. That would mean ultra-fast bootstrapping with the same security guarantees as processing all the blocks since genesis, for nodes with fresh wallets. After stabilized implementation being released, miners can be asked about rising block limits again.

As a parallel effort, it is proper time to start 6.0 features planning, including scalability improvements.

---

### Post #5 — @kushti (2023-08-23)

As of August’23, there is significant progress in lighter clients. In 5.0.12 and 5.0.13 (June/July’23) reference client releases support for bootstrapping with UTXO set snapshots and NiPoPoWs was added.

The most hot topic now is another round of L0 optimizations, avoiding broadcasting transaction twice, like was done in Compact Blocks BIP in Bitcoin Core.

At the same time, there is demand for faster transaction confirmations, so would be good to jump on that, finally (implementing Bitcoin-NG was in the initial roadmap from 2017, then it was abandoned due to competing proposals and hope to implement a best option when the landscape is set via a soft-fork).

There are many claims in the space about improving scalability in comparison with classic proof-of-work blockchain, such as Bitcoin or Ergo.  
Often attempts to improve are about switching to Proof-of-Stake or other Proof-of-X consensus algorithms or issuing blocks more frequently along with adopting DAG.

However, with the same peer-to-peer network (L0), replacing timestamping method for L0 transactions (means L1 consensus mechanism) is leading to  
higher TPS (transactions per second) rate is possible only if a new consensus mechanism is creating less network messages, and Proof-of-Work is already optimal in this regard (no any messages needed to create a block). DAG structure is also not a scalability solution, obviously, as more frequent blocks are leading to more collisions, so more network messages, thus TPS rate is becoming worse even.

Thus real scalability efforts are about:

* improving propagation around peer-to-peer network. Like in Bitcoin before compact blocks implementation, in Ergo currently a new block is to be propagated in full. That means the network is busy when a new block is generated and then underutilized before next block. This was motivation for Bitcoin-NG paper [1], which is proposing to have microblocks created after empty PoW block which becomes just an indication of leader election. The paper shows better utilization of p2p network overall. More frequent blocks~(until significant increase in collisions rate) also helping with network utilization. However, compact blocks achieve similar results, and some alternative improvements of block chunks propagation, such as [2] are claiming results like 100x TPS increase.
* unloading L0, which is necessary after all, as improvements there are limited, especially if we do care about decentralization, so aim to preserve flat peer-to-peer network. There are different techniques here, such as L2 protocols (where progress can be made offchain after initial commitments on L1, and scalability comes from the fact only protocol users exchange L0 transactions involved in L2), sidechains (where progress in a certain application, in case of application sidechains, such as Aspen [3], or in general domain case done on a dedicated chain, and scalability comes from the fact only consensus parties of a sidechain do need to handle its L0 transactions), plasma (where a trusted party is processing state updates offchain and publishing only short state commitments on chain, with some exit protocol exists for the case when trusted party ceased to exist), rollups(when contracts data is written on L1, and execution is happening outside, and L0 transactions are processed by rollup maintainers), etc.

The rough plan for the moment is as follows:

* instead of microblocks, use weak-blocks (block candidates with lower difficulty). For example, w. weak-block diff of 1/128 of normal block’s diff, there will be 1 weak-block per second on average. A weak
* weak-blocks are sent around the network along with new (since prev weak-block) transaction ids, in cut-through way similarly to [2]. This will make the network optimally utilizing bandwidth
* after having enough confirmations from majority hashrate, a transaction can be considered as weakly confirmed, in practice for the current network it would be done under ~20 secs.
* for incentivizing weak blocks reporting, they can commit to sidechains, thus making fast sidechains possible and miners will get rewards from that.

References:

[1] I. Eyal et al. Bitcoin-NG: A scalable blockchain protocol  
[2] L. Zhang et al. Speeding up block propagation in Bitcoin network: Uncoded and coded designs  
[3] A. Gencer et al. Service-oriented sharding with Aspen

---

### Post #6 — @Essaias (2023-08-23)

Any ETA for the proposed changes to become available?

---

### Post #7 — @ngoluuduythai (2023-08-23)

**I see many blockchains increasing scalability with sharding, can Ergo develop in the direction of sharding?**

---

### Post #8 — @Ccgarant (2023-08-23)

Kushti, maybe already covered, but have you reviewed BIP-300/301 for drivechains? Anything to consider there?

---

### Post #9 — @Hans (2023-08-24)

Thank you for the updates Kushti!

> DAG structure is also not a scalability solution, obviously, as more frequent blocks are leading to more collisions, so more network messages, thus TPS rate is becoming worse even

I am not sure this is accurate and could rule out promising directions, depending on what you mean by DAG structure (I don’t like the DAG term as technically any blockchain is a DAG). The simple act of decoupling transactions blocks from longest chain ordering blocks counts as a DAG but has been shown to drastically improve TPS, without necessarily increasing the block generation of the main chain and hence collisions.

What does “decoupling transactions blocks from longest chain ordering blocks” mean? :

* transaction blocks with an easier difficulty are generated by miners (say every ~5sec) and link to the last “ordering block” header.
* Ordering blocks are the equivalent of current “regular” blocks, generated slowly (~2min) to avoid collisions. However they include references to transaction blocks instead of simply transactions, drastically increasing the amount of transactions per committed block.  
  The transaction blocks add more network messages, but collisions are not an issue since the ordering blocks still work like the standard longest chain.

References with such an approach:

* Pass, Rafael, and Elaine Shi. “Fruitchains: A fair blockchain.”
* Abraham, Ittai, et al. “Colordag: An Incentive-Compatible Blockchain.”
* Yang, Lei, et al. “Prism: Scaling bitcoin by 10,000 x.”
* IOG Research, Ouroboros Leios

Other “DAG” attempts such as GHOST have indeed caused security issues because of not having different types of blocks and therefore losing the benefit of a slower main chain to refer to.

Propagation improvements like cut-through blocks are even more beneficial when many transaction blocks are being generated (once again, collisions are irrelevant unless the ordering block collide amongst each other).

Weak-blocks (every ~1s) and transaction blocks (~5 s) used together would provide weak-confirmation for the previous ordering block in 20s, as you outlined, and that ordering block references around 24 transaction blocks (120s / 5s), which may or may not be full depending on usage. Since the next ordering block comes in ~2 minutes, collisions are still unlikely while TPS is theoretically ~24x higher on average (assuming same block sizes) and latency for weak confirmation is ~20s. Block generation numbers can be tweaked depending on practical considerations ofc.

This is all long-term stuff and the improvements you presented naturally take priority.

---

### Post #10 — @kushti (2024-03-27)

Sorry for the long reply, just discovered the proposal. It looks interesting! Why not to combine weak-blocks and transaction blocks then ? I need to re-check the papers but I guess needed modifications to block structure are doable via a soft-fork.

In general, at this point it is better to have non-breaking protocol updates via soft-forks. Which, for observable future, means:

* Sigma 6.0 update to add new instructions and types (and update will be done similarly to 5.0 so with old clients downgrading to SPV security on new blocks)
* sub-blocks (transaction blocks?)

Non-breaking protocol development is needed to avoid breaking projects on top of Ergo, forks, and so community splits, and also to polish Ergo as a kind of digital gold.

---

### Post #11 — @kushti (2024-07-22)

Ok, so after re-checking Prism and checking some new papers (such as new parallel PoW paper <https://iacr.org/submit/files/slides/2024/eurocrypt/eurocrypt2024/482/slides.pdf> ), I think, it makes sense to split blocks into input blocks and ordering blocks with some new block validation rules introduced via SF, however, with rich context available during script execution, there are some complexities which are not covered in the papers and we have to bypass:

assume number of sub-blocks (input blocks) per (ordering) block is equal to 128 (but it can be adjustable via miners voting):

* an ordering block is defined as block in Ergo now, hash(block) < Target
* input block is defined as sub-block , Target <= hash(block\_header) < Target \* 128, actually, 2-for-1 PoW option (so reverse(hash(block\_header)) < Target \* 128)  
  from GKL15 / parallel PoW papers is likely better but need to check what is needed from pools to support that

thus we have blockchain like

(ordering) block - input block - input block - input block - (ordering) block - input block - input block - (ordering) block

* transactions are broken into two classes, for first one result of transaction validation can’t change from one input block to other , for the second, validation result can vary (this is true for transactions relying on block timestamp, miner pubkey, timestamp).
* only transactions of the first class (about 99% of all transactions normally) can be included in input (sub) blocks only. Transactions of the second class can be included in both kinds of blocks.
* as a miner does not know in advance, he is preparing for both options by:
  + setting Merkle tree root of the block header to transactions seen in the last input block and before that (since the last ordering block) plus new second-class transactions  
    setting 3 new fields in extension field of a block:
  + setting a new field to new transactions included
  + setting a new field to removed second-class transactions (first-class cant be removed)
  + setting a new field to reference to a last seen input block (or Merkle tree of input blocks seen since last ordering block maybe)
* miners are getting tx fees and storage rent from input (sub) blocks, constant reward from (ordering) blocks. For tx fees to be collectable in input blocks, fee script should be changed to “true” just (I have early draft of such EIP for long time, this script would be good to make transactions more lightweight as well)

This should provide fast and quite reliable confirmations for most of transactions.

And only mining nodes update would be needed, while older nodes can receive ordinary block transactions message after every ordering block.

And all the new rules will be made soft-forkable.
