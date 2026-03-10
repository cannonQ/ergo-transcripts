---
title: Know Your Assumptions
description: 'ErgoForum discussion: Know Your Assumptions'
tags:
- bootstrapping
- box
- dexy
- emission-schedule
- ergoforum
- ergoscript
- full-node
- nipopow
- schnorr-signatures
- sigma-protocols
- sigmausd
- spectrum
- spv
- storage-rent
- transaction
- uncategorized
- utxo-set-snapshot
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/know-your-assumptions/4198
created: '2023-01-31'
last_activity: '2023-11-02'
posts_count: 6
views: 3158
likes: 29
glossary_hits:
- Bootstrapping
- Box
- Dexy
- Emission schedule
- ErgoScript
- Full node
- NiPoPoW
- SPV
- Schnorr signatures
- Sigma protocols
- SigmaUSD
- Spectrum
- Storage rent
- Transaction
- UTXO Set Snapshot
---

# Know Your Assumptions

> **Forum thread:** [https://ergoforum.org/t/know-your-assumptions/4198](https://ergoforum.org/t/know-your-assumptions/4198)
> **Category:** Uncategorized | **Created:** 2023-01-31 | **Posts:** 6 | **Views:** 3158

**Related concepts:** Bootstrapping, Box, Dexy, Emission schedule, ErgoScript, Full node, NiPoPoW, SPV, Schnorr signatures, Sigma protocols, SigmaUSD, Spectrum, Storage rent, Transaction, UTXO Set Snapshot

---

### Post #1 — @kushti (2023-01-31)

This topic is going to provide affrmative answers to few important questions  
which seem to be largely ignored in the cryptocurrency industry, despite the  
fact that the questions are very basic ones, and, in our opinion, existence of  
the industry is heavily relying on them. Also, we systematize knowledge about  
assumptions cryptocurrency and DeFi protocols are based on. We suppose that  
understanding explicit or implicit assumptions protocols are based on is critical  
for understanding security and degree of decentralization of protocols properly.

* Traditional financial institutions are doing privacy invasive checks known as KYC/AML practices. In bankless world of cryptographically-powered decentralized finance it is natural to expect reversion of control, that is, now users are checking protocols for their properties, including cryptographic and other assumptions behind them.  
  However, there is no explicit notion of it in the wild. Thus we would like to introduce Know-Your-Assumptions (KYA) practices as an alternative to KYC/AML practices in the world of decentralized money and financial tools, where users of the protocols do have real power, not centralized entities enforcing users to comply with their always-changing rules by giving out private data (always being leaked after). Some supporting notes:
* In traditional finance, an investment is always associated with not  
  just a projected profit, but also with risk profile. In opposite, in DeFi only  
  APY (estimated yearly interest rate at the moment, usually not averaged over long enough period and not cleared from noise even) is being sold, while the public is totally unaware about risks.
* As a consequence, it would be desirable for investors to quickly compare security of different protocols (from L1 blockchains to complicated DeFi stacks and inter-chain bridges) by assumptions they are based on.
* For protocol researchers and developers, it would be good to explicitly state assumptions their protocols are relied on in their papers and specifications.
* It is common, especially around so-called Bitcoin maximalists, to say, that, instead of trust in central authority, they trust math. However, we need to challenge that saying. Is Bitcoin protocol relies on math only? What does trust in math mean exactly?

In cryptography, starting from around 1980s, it is common to require provable security for all the constructions, starting from theoretical primitives, like one-way functions and pseudorandom generators, to very complex protocols. Provable security basically means that security goals of a construction are defined formally, as well as assumptions the construction is relied on, and then there is a proof that goals are indeed satisfied while assumptions hold. A proven construction can be then used as an assumption for a higher level protocol. In the very core there are some assumptions we can not reduce to other ones, so modern cryptography relies on a belief that in the world we are observing some very basic assumption holds, but those assumptions are well tested and centuries of math experience have not disproven them. We are trying to follow this approach in the inter-disciplinary field of cryptocurrencies, thus results would be not so theoretically strong, but nevertheless, useful.

We start with Bitcoin, the most well-studied and probably simplest cryptocurrency. Then we consider Ergo as well as some applications on top of it, such as ErgoDEX (now Spectrum), SigUSD, oracles, Dexy etc.

**Bitcoin As A Digital Gold**

We suppose that most of Bitcoin investors likely believe that Bitcoin is valuable digital commodity which has properties of *digital gold*, and electronic peer-to-peer cash at the same time (even if sometimes these concepts are contradicting).

Security of Bitcoin is based on following assumptions:

* Hash function SHA-256 is not broken. By being not broken we mean that known security properties of any hash function, namely collision resistance, second preimage resistance, and preimage resistance do hold.
* Digital signature scheme is not broken. As digital signature scheme used in Bitcoin is vulnerable in the presence of quantum computers, it means that the Bitcoin protocol also relies on assumption that quantum computers capable to solve Discrete Log Problem for an elliptic curve of 128-bit security will not appear.
* Majority of mining hashrate is honest, i.e. following the Bitcoin protocol. This is the most tricky part, as the protocol is defined via a reference client implementation, and it is not very clear what modification of pretty massive client codebase could be considered as dishonest. The best thing we can do here is to work with simplified models of the protocol. The most famous one is presented in GKL15 paper [1]. For the first time in the space, the paper had shown that the Bitcoin-like Proof-of-Work based protocol can achieve some formally defined properties under assumptions of hash function collision-resistance and also majority (or 33% for fairness property) of hashrate power being honest, and the protocol defines what does it mean to be honest: a peer must build on a longest chain, use protocol’s validation and input contribution rules. Real Bitcoin protocol, however, is much more complex than the GKL15 model. Continuing longest chain could not be strictly enforced by the Bitcoin protocol. For many years there was a tenet in the folklore that this behavior is just the most rational choice, but then some papers did show that rational behavior could be quite different from expected in some scenarios (see [2], [3], [4]). Also, while in the real protocol following validation rules seems to be necessary (otherwise, a mining node’s block will be rejected by validating nodes), SPV mining was observed in the wild even [5] (and, theoretically, is a big concern when talks about increasing block size are happening, due to validation dilemma [6]). For input contribution, it is hard to say where honest behavior ends (especially for other protocols which are more feature-rich, where miners can profit a lot from reordering transactions and other games [7]). Please note that the field is still pretty green, so we do not know a lot about deviations from the protocol and how to react to them. And for some aspects of the Bitcoin protocol, e.g. miners behavior when emission per block will be much lower, we can only build theories, but then the reality which will be observed in pretty distant future could be quite different.

As you can see, even for Bitcoin assumptions are tricky, and then it is hard to say how successfully the protocol we have (in form of client code) may achieve its security properties, as even basis is not fully understood yet. However, as Bitcoin network works for more than 13 years to the moment of writing this treatise, many theoretical issues do not happen in practice (so maybe not of a concern), and issues that are not known likely are even more theoretical. Note that Bitcoin has known emission schedule if assumptions hold. Thus Bitcoin as a digital gold can be better than physical gold, as for physical gold assumptions behind hardness of its production are less known. Thus *while assumptions do hold*, Bitcoin is perfect digital gold.

**Ergo**

Bitcoin assumptions, as shown above, are already tricky, but for other cryptocurrencies situation is even worse. They may have additional cryptographic assumptions (such as hard problems in pairing and trusted setup in ZCash), or more complex reasoning about peers behavior or consensus among them (we can refer to endless disputes about Proof-of-Stake here). For Ergo, since day one the focus was on achieving possible maximum set of features securely from modest Bitcoin’s set of assumptions, or even to rely on less.

A peer-to-peer network based cryptocurrency assumes that it is possible to run protocol client on commodity hardware of today (e.g. a mid-priced laptop). It is also assumed that client should allow to be an own bank, which is in case of Bitcoin is about validating all the blocks from genesis. Validating all the blocks could be expensive, especially with larger block size and UTXO set size [8]. This puts limits on block size, expressiveness of contracts etc. Ergo allows a node to have security guarantees of a node which validates all the blocks but without doing that. Even more, there are multiple techniques supported:

* Ergo node may have full security guarantees without storing UTXO set at all, by checking cryptographic proofs of UTXO set transformations. Unlike other stateless cryptocurrencies appeared later, such as Mina, Ergo relies only on hash-based authenticated data structures [9], so security of bootstrapping is based on collision-resistance of hash function used, i.e. no new assumptions introduced. Still, mining nodes do need to store UTXO set to generate proofs (otherwise, users would need to generate non-expirable proofs attached to their transactions, and for that exotic solutions, usually with heavy proving machinery, are required).
* Ergo node may download UTXO set snapshot after downloading block headers, and then download and then apply full-blocks only after the snapshot. This bootstrapping method is the most popular in Ethereum community already, but for Ergo (and other Proof-of-Work cryptocurrencies), there is known reduction of security of such bootstrapping to collision-resistance of a hash function [10].
* Ergo node may avoid downloading all the headers even, using NiPoPoW proofs instead [11]. Along with stateless clients, this allows for log-space storage for all the parts of the blockchain [12]. NiPopoWs are also rely on collision-resistance of a hash function, and also on assumption that adversary (attacking NiPoPoW sub-protocol) has no more than 1/3 of total mining hashrate. With new assumption in mind, bootstrapping non-SPV client with NiPoPoWs should be done with large enough suffix.

In regards with signatures, Ergo is using Schnorr signatures (which are simpler, and their security is formally proven) on top of secp256k1 curve used in Bitcoin. Ergo also allows for building cryptographic protocols as applications, based on sigma protocols supported by the Ergo protocol. Then some applications are based on (stronger than discrete logarithm) DDH (decisional Diffie-Hellman) assumption, but in practice this shift for minority of UTXOs is minor (security is literally the same).

In regards with honest behavior of miners, Ergo is pretty much the same as Bitcoin here, with notable exception of storage rent, which will hopefully simplify issues with miners incentivization in future.

**References**  
[1] J. Garay, A. Kiayias, and N. Leonardos, “The bitcoin backbone protocol: Analysis and applications”  
[2] M. Carlsten, H. Kalodner, S. M. Weinberg, and A. Narayanan, “On the instability of bitcoin without the block reward”  
[3] K. Liao and J. Katz, “Incentivizing blockchain forks via whale transactions”  
[4] A. Judmayer, N. Stifter, A. Zamyatin, I. Tsabary, I. Eyal, P. Gazi, S. Meiklejohn, and E. Weippl, “Sok: Algorithmic incentive manipulation attacks on permissionless pow cryptocurrencies”  
[5] Some miners generating invalid blocks. [Some Miners Generating Invalid Blocks](https://bitcoin.org/en/alert/2015-07-04-spv-mining)  
[6] L. Luu, J. Teutsch, R. Kulkarni, and P. Saxena, “Demystifying incentives in the consensus computer”  
[7] S. Eskandari, S. Moosavi, and J. Clark, “Sok: Transparent dishonesty: front-running attacks on blockchain”  
[8] Utxo uh-oh. . . . [UTXO uh-oh…](http://gavinandresen.ninja/utxo-uhoh)  
[9] L. Reyzin, D. Meshkov, A. Chepurnoy, and S. Ivanov, “Improving authenticated dynamic dictionaries, with applications to cryptocurrencies”  
[10] T. Duong, A. Chepurnoy, and H.-S. Zhou, “Multi-mode cryptocurrency systems”  
[11] A. Kiayias, A. Miller, and D. Zindros, “Non-interactive proofs of proof-of-work”  
[12] A. Kiayias, N. Leonardos, and D. Zindros, “Mining in logarithmic space”

---

### Post #2 — @lgd (2023-01-31)

What does “suffix” mean in “With new assumption in mind, bootstrapping non-SPV client with NiPoPoWs should be done with large enough suffix.”?

---

### Post #3 — @Hans (2023-02-08)

Thank you for interesting post!

I would also mention the additional assumption for both Ergo and Bitcoin that the communication network must remains synchronous:

* Messages between miners are delivered in a bounded delay.

The network assumption affects the honest majority assumption:

* An increase in the network delay gradually decreases the allowed dishonest mining power in the honest majority assumption, up to 0 allowed dishonest miners if the delay is infinite.

In practice this assumption is hard to break without strong control over internet infrastructure and packet delivery (or some kind of network partition by targeting undersea cables).

---

### Post #4 — @kushti (2023-06-10)

So to bootstrap the node with NiPoPoWs and UTXO set snapshot, we choose a block which is deep enough, download NiPoPoW for its header (lets call it "key header), download all the headers after to be sure enough work is done after, download and apply UTXO set snapshot corresponding to the key header, and then download and apply full-blocks after the snapshot. Suffix is the initial length of headers-chain after key header. Then, simplty, for security, suffix should be long enough.

---

### Post #5 — @kushti (2023-06-10)

True, this bounded delay assumption must be hold. It is mentioned in the GKL15 paper [1] in my references, and then PSS16 paper ( <https://eprint.iacr.org/2016/454.pdf> ) is indeed showing decreasing allowed dishonest mining power with delay increase.

---

### Post #6 — @blaire2b256 (2023-11-02)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png)[Verifying Schnorr Signatures in ErgoScript](https://www.ergoforum.org/t/verifying-schnorr-signatures-in-ergoscript/3407/2)

> Please note that Schnorr here is using weak Fiat-Shamir transformation, but that should not be a problem as public key is fixed.

Is it worth noting under which circumstances weak FS transformation is safe to use and when it isn’t…

Or do the findings in [Weak Fiat-Shamir Attacks on Modern Proof Systems](https://eprint.iacr.org/2023/691.pdf) not change any our assumptions?
