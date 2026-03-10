---
title: Governance for oracle pools and the SigmaUSD bank
description: 'ErgoForum discussion: Governance for oracle pools and the SigmaUSD bank'
tags:
- addresses
- autolykos
- bootstrapping
- eip
- ergo-explorer
- ergo-foundation
- ergoforum
- ergomixer
- ergoscript-context
- full-node
- mempool
- native-tokens
- nautilus
- oracle-pools
- ring-signatures
- sigma-rust
- sigmausd
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/governance-for-oracle-pools-and-the-sigmausd-bank/786
created: '2021-03-05'
last_activity: '2021-03-26'
posts_count: 45
views: 4145
likes: 115
glossary_hits:
- Addresses
- Autolykos
- Bootstrapping
- EIP
- Ergo Explorer
- Ergo Foundation
- ErgoMixer
- ErgoScript context
- Full node
- Mempool
- Native tokens
- Nautilus
- Oracle pools
- Ring signatures
- SigmaUSD
- Transaction
- sigma-rust
---

# Governance for oracle pools and the SigmaUSD bank

> **Forum thread:** [https://ergoforum.org/t/governance-for-oracle-pools-and-the-sigmausd-bank/786](https://ergoforum.org/t/governance-for-oracle-pools-and-the-sigmausd-bank/786)
> **Category:** Uncategorized | **Created:** 2021-03-05 | **Posts:** 45 | **Views:** 4145

**Related concepts:** Addresses, Autolykos, Bootstrapping, EIP, Ergo Explorer, Ergo Foundation, ErgoMixer, ErgoScript context, Full node, Mempool, Native tokens, Nautilus, Oracle pools, Ring signatures, SigmaUSD, Transaction, sigma-rust

---

### Post #1 — @kushti (2021-03-05)

(This post represent my personal thoughts and not Ergo Foundation opinion)

I think at this point we need to seriously consider community control over ERG/USD pool and also the stablecoin bank.

The stablecoin bank had possibility of contract upgrade initially, however, with anonymous guys deploying it giving update possibilities to them did look too dangerous, and no one else expressed a wish to have a governance token. It seems interest to the SigmaUSD was heavily underestimated.

Oracle pools participants have governance tokens, but we hadn’t chance to publish their list and so on.

So now we have some time to discuss governance. We can start with some committee of trusted (anonymous and not so) members and then switch to some broader participation or switching updates off after some bootstrapping time.

Please let me know what do you think about that and how can you be involved. It seems SigmaUSD can have large and thriving community, we need to seed it properly now.

---

### Post #2 — @cymatic (2021-03-05)

Very interesting!

For a community member that might get involved, what would that involvement potentially look like? What are the actual needs that a community member could fill?

---

### Post #3 — @JimmyH (2021-03-05)

I think transparency is paramount if you a wanting to produce a financial product, that say , a business could use to settle an account or someone could send home money from there hard earned wages from 1 side of the world to another, then you absolutely need transparency, and be able to show governance and a transparent and publicly available reasoning behind technological and operational decisions. For example, just now there had been a “fault in the system” having a systematic way to report, assess, and action a remedy to the fault, that is accepted by the community,

---

### Post #4 — @kushti (2021-03-05)

You will hold a token allowing you to vote for a stablecoin protocol update. You need to vote responsibly! (so to understand contracts or trust people who can do that)

---

### Post #5 — @Jason (2021-03-05)

Thoughts that come to my mind, which I think make for a good governance. Participation/Involvement and knowledge/experience, transparency, and decentralization of course. Guidelines for communications their location to facilitate transparency(like this forum or discord). Guidelines for how people make decisions how votes are weighed. How to know that people are educated and not just superficial and gaming the system. What are the specific decisions to be made, this is good to help find the people to fit the roles.

Then tokenomics…

Can we adopt an established system of governance like cardano catalyst. Or any other? Dash or?

---

### Post #6 — @adanorthpool (2021-03-05)

Well for me it is how to we give maximum liberties with minimal duties. Does a stable coin need much governance ? If so what kind of metrics are the most interesting? Some things of the top of the head:

1. Oracles should it be a curated list or anyone and the data validation happens in the aggregate of the oracles only?
2. How can we maximize equality from the community? Would it be a voted list of people or randomly drawn from the users of the stable coin to make a vote? Do we boostrap it and then go towards a bigger community to have a say?
3. Collaborations - should people who have an important vested interest in the sucess of the stable coin contract like UI runners - collaborating other stable coins and exchanges have a say and how do we align theyre interest to the stable coins interest (fees should they be used for more than just the redistribution of founds to the stabel coin holders) ?
4. Liabilities. An autonomous contract has no liabilities but a vote that then causes damage in such a contract might. How do we protect the voters so they will vote freely what they believe is in best interest? I think we could look to insurance sector for inspiration to this.

For me at this point in time I think you start simple and you start with oracles. There should be more oracles in the system so that it is not dependant on the few.

---

### Post #7 — @cymatic (2021-03-05)

I like that. Consider me available if I can be of any service.

---

### Post #8 — @JimmyH (2021-03-05)

Starting with the Oracle’s,  
how do we have the highest quality/secure input to the contract, at the quickest possible speed, would be my first question.  
as we saw with in the first iteration, when the markets made sudden movements, the input to the contract wasn’t sufficient for a real world tradable product.  
What is the simplest way to rectify this.

---

### Post #9 — @Nautilus (2021-03-05)

I agree with you Kushti.

Open transparent governance is critical for community trust.

The ability for the community to iterate, update and improve the contract over time is critical for solid development.

Even though I took a hit in SigmaRSV, I appreciate that the foundation did what it did, when it did.

Personally, I think this type of contract is critical infrastructure and should have some ZK treasury attached that insure sustainability as well as incentivizes the creation of value.

What that would look like is up to the community and token holders, but it should definitely be conservative, open and transparent.

AdaNorthPool brings up great points that all require deep thought.

The basic framework of AgeUSD has great bones, let’s work together and make it uniquely Ergos.

---

### Post #10 — @Armeanio (2021-03-06)

I appreciate your personal thoughts on the matter kushti.

In mid-February on Discord, you had mentioned ongoing discussions regarding the DAOization of the Treasury.

It was regarding expanding the multisig capacities, creating a mixture of delegates from the community, core devs and EF members.

Is this related or separate from the governance developments you are proposing here?

---

### Post #11 — @James (2021-03-06)

The solution isn’t taking pool updates from 60 to 30 minutes and increasing the fee.

Using a “Moving Average,” either SMA or EMA, would smooth things out, and increasing the updates to be as close to realtime as possible would be useful. Fixing the Oracle issue should eliminate the need to increase the fees, which is a bitter pill just to thwart a weakness in the oracle.

---

### Post #12 — @Nautilus (2021-03-06)

There are a lot of potential Oracle/fee models to discuss and play with.

It would be interesting to see if we could compile and use the transactional data from the first SigmaUSD iteration to test different parameters.

That is a lot of work/time but long term could be valuable.

---

### Post #13 — @ergo101 (2021-03-06)

As a non-dev community member that understands contracts I would love to be involved and support better governance in anyway I can.

---

### Post #14 — @Arcturus (2021-03-06)

Perhaps it would be helpful to pull from the research and work being done for Voltaire over at Cardano? If they’ve already gone to the trouble of breaking down the various constructs for governance it might save some time to piggy back off their research rather than starting from scratch. Just a thought. I suppose I would rather see a governance system based the work of experts in the field rather than an ad hoc solution. Of course if there are already experts internal to this project then it would just be a matter of setting forth some proposals for discussion and voting…

---

### Post #15 — @veriumfellow (2021-03-06)

**Using Oracles for better Governance.**  
Maybe another idea to add more security to the smart contract, and regarding the high demand would be to have a reserve ratio between 800 and 1600%. If the fees are 2x higher, the interest in the contract should be the same, as investors in SigRSV probably came for the share of the fees and not to take a risk. And if investors are paying 2% fees, they will probably want to stay in the contract for the long term, which means that they also don’t want to be to vunerable to negative price changes over the long term. The price could at any time be divided by 8, so that really the maximum risk that the contract should allow people to enter in the contract. That would then also “lock” more ERGs out of circulation, which would be benficial for the price. With fees of 2.5%, you could even go to 1000%-2000% minimal reserve and still get the same interest from investors and still have a lot better prices than competitors on Ethereum. The governance token could then adjust the fees at a later stage if needed, but as market conditions regarding fees, interest rates and anything else could change drastically. Probably that the best solution would be to have a mix between oracles and governance token. For example oracles must answer Yes to the question if there is a problem with parameters X, and the if yes, the voting can occur only on parameter X. Oracles could also be used to validate that there is no known hacking or conflict of interest occuring during the voting process, or it is stopped and delayed.

The smart contract needs real world data adapted to real world situations which are infinitly different and complex, but the smart contract must have the ability to categorise them, simplify them into some parameters and decisions and have the ability to update or even auto-update later on each parameter once we have more experience. Upgradability in any form, even to a new smart contract respecting some very precise conditions like reserve ratios could also help to keep the smart contract valuable over the long term.  
So the process would be to first ask vote through a minimum threshold, then asking validation from oracles that there is really a problem, then vote on the specific improvement proposal.  
Once ERG market cap is a lot higher, we might also use this advantage to reduce the fees, as it will be more difficult for anyone to manipulate the price.

---

### Post #16 — @Nautilus (2021-03-06)

I agree developing the long term the ability to take Oracle pool data, create market benchmarks, and developing a mechanism that uses these benchmarks to flexibly price risk could offer huge benefits to ageusd and defi in general.

---

### Post #17 — @ollsanek (2021-03-06)

Hi all!  
In my opinion, Governance for oracle pools and the Sigma USD bank MUST be separated and independent. Oonly in this way we may create few “banks”, “dex” or other smart contracts reused the same data and call this an “ecosystem”.

Orecles should publish actual data ASAP, and then all other contracts independently decide what to do with this data.

about “frontrun” avoidance. Why sigma-bank can’t operate in the same way as frontrunner? just look to the current published oracle date and correct contract trade-rate immediately?

---

### Post #18 — @Armeanio (2021-03-07)

Does the Ergo Foundation have a collective opinion on how best to proceed? What is the consensus?

---

### Post #19 — @kushti (2021-03-08)

So many awesome proposals here! Based on them I would like to propose the following initial recovery plan:

1. [@scalahub](/u/scalahub) is testing updates for stablecoin bank now. Then we can have testing deployment and then testing update ceremony with [@cymatic](/u/cymatic) [@Armeanio](/u/armeanio) [@ergo101](/u/ergo101) , who else is willing to be there?
2. there will be new oracles pool with more frequent updates and some smoothening. Who is willing to be there?

We can start with 2% fee and maybe higher min reserve ratio (as proposed by [@veriumfellow](/u/veriumfellow) ), and also shorter cooling-off period. Then we can go for updated governance schemes, also tracking how SigmaUSD performs.

---

### Post #20 — @James (2021-03-08)

Here’s an idea that I don’t care for because I think using an increased fee will be a barrier to adoption, but I’ll mention it anyway:

Attrition could be applied to the fee in either direction. For the first moments after the epoch, the fee is higher and it slides downwards as the pricing data becomes stale.

---

### Post #21 — @cymatic (2021-03-08)

Looking forward to it!

---

### Post #22 — @Armeanio (2021-03-08)

I would be happy to help test the update.

---

### Post #23 — @ergo101 (2021-03-08)

Excited to help anyway I can.

---

### Post #24 — @kushti (2021-03-09)

After talking with devs, the plan is following it seems:

* new oracle pool will be 3-4x faster, with 0.5% price change cap, so a whale needs to dump and hold for 2+ hours in order to take profit (with 2% stablecoin bank fee). Testing already started. A real pool will be launched in few days. Participants will be announced around the launch. Some guys will come from the old pool, but we also need for new participants. Participating in the oracle pool will bring some profit even (like few ERG / month but still).
* First, testing stablecoin will be launched, then its update will be tested with update tokens holders, then real contract will be launched.
* UI will support redemption from the old contract for long time.

I like [@Nautilus](/u/nautilus) idea of development fund very much, and would like to contribute a bit.

I think a lot of things around community will be reshaped now. The launch of SigmaUSD with $6M put into the bank in 36 hours was pretty shocking. During the few days after the launch I’ve witnessed a lot: shorting whale (with modified software), mempool wars, anon-real announcing donations for UI devs, attacks on proxy contracts etc.

Ergo is not small anymore, especially after the Hardening Upgrade. There are hundreds or even thousands small miners around ( [Ergo (ERG) Autolykos | Mining Pools](https://miningpoolstats.stream/ergo) ), new devs are joining and will join with successful launch of apps, exchange listings coming regularly now, some big guys are going in (it seems), and so on.

---

### Post #25 — @kukz (2021-03-09)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> UI will support redemption from the old contract for long time.

That recovers my initial shock. Great to see you being talkative; now i consider to stay. Thanks!

---

### Post #26 — @kushti (2021-03-10)

And I did talk about [sigmausd.io](http://sigmausd.io) , as UI is fully open-sourced, you can always self-host UI.

The contract is fully autonomous so will live like forever.

Please note that SigmaUSD incident is quite different from DAO hack etc:

* Contract works as prescribed, and has no problems per se
* Oracle pool worked as prescribed also
* The problem lies in interaction between the pool and the stablecoin contract, and also parameters of the contract.

Thus with new oracle pool, updated fee, and more flexibility we’re going ahead.

Still, please invest responsibly, consider different strategies (LONG/SHORT), combine trading SigmaUSD bank with trading on CEXes etc.

---

### Post #27 — @cymatic (2021-03-11)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> Some guys will come from the old pool, but we also need for new participants.

I am quite interested in running an oracle (and/or eventually pool) but before I get started building, I know that Robert recently said in the Discord oracle-pools channel that anyone can follow the repo instructions to build an oracle, but acceptance into the current pool is not guaranteed and is only open to trusted parties (not surprisingly). I am fairly new to the community overall so I wasn’t sure what it would take to become a trusted party and able to participate. Also, as a second question, if I do end up with the opportunity to assist with the governance on any level, will that present a conflict of interest if I was also running an oracle?

---

### Post #28 — @kushti (2021-03-12)

Current oracle operators:

greenhat - ergo-lib (aka sigma-rust) developer  
scalahub - core R&D fellow  
andyceo - small miner, worked as sysadmin for testnet and other servers in 2017-19  
spirestaking - Cardano stake pool operators  
psychomb - Cardano stake pool operators (<https://stakhanovite.io/>)  
Moein Zargarzadeh - reference miners developer  
[@Kst20](/u/kst20) - guy made video tutorials on running the node and the ErgoMixer on Windows  
ollsanek - notable Russian community member  
Marek Mahut from Five Binaries

We have like 3-5 tokens more.

For stablecoin bank update, current quorum is about [@cymatic](/u/cymatic) , [@Armeanio](/u/armeanio) , [@ergo101](/u/ergo101) , [@anon2020s](/u/anon2020s) .

Please let me know what do you think about that.

---

### Post #29 — @qualle (2021-03-13)

Maybe we can get incontact with the whale who caused all this. He has informations on how we could have prevented his actions. What we could have done to make his actions worthless, or at least inattractive.  
He seems to be a specialist in finding flaws, and he didnt act illegally, although i lost a couple grant ergs because of him…we would just need to code Ergomail, to send messages to ergo addresses…![:wink:](https://emoji.discourse-cdn.com/twitter/wink.png?v=9 ":wink:")

---

### Post #30 — @kushti (2021-03-16)

It would be awesome to talk with the whale, but I am not sure that he will appear.

---

### Post #31 — @kushti (2021-03-16)

Current status:

* we’re testing oracle pools with shorter data delivery (15-20 mins on average) ([@scalahub](/u/scalahub) is leading those efforts)
* we’re reviewing bank update contracts. They were done and tested back in November, but anyway.
* Currently we have 13 folks for an upcoming oracle pool. 1 or 2 more slots available. You need to run a node and also node software (compile it from Rust sources first).
* For bank update, we need for 1-2 more folks running the nodes and more or less known in the community.
* Contracts are now put into an EIP draft: [EIP-0015: SigmaUSD Contracts by kushti · Pull Request #28 · ergoplatform/eips · GitHub](https://github.com/ergoplatform/eips/pull/28)

---

### Post #32 — @Armeanio (2021-03-16)

Would a message via NFT Name/Description, that then deposited into his wallet would be the best way to try to establish contact?

Thanks for the status update.

---

### Post #33 — @adanorthpool (2021-03-16)

Would love to assist with either an oracle node or node to help bank. I am also curious if we would try with a raspberry pi 8gb for any of these projects or if I should use my more serious hardware (64gb ECC 8 core etc / 2 fiber / backup power for redundancy / mellanox datacenter network cards).

---

### Post #34 — @Nautilus (2021-03-16)

+1 vote adanorthpool for the bank contract.

---

### Post #35 — @Armeanio (2021-03-16)

* 1 for Adanorthpool

He is an active member of the community, brings skills/experience to the table. He would be an asset for the bank update.

[![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/9227fa12ae56584d9fce15a1a4f9de0ec2cc2f95.jpeg "ADA North pool first new years update: Ergo mining")](https://www.youtube.com/watch?v=u3mtGr4hoDI)

---

### Post #36 — @kushti (2021-03-18)

8gb raspy should be enough. There is a guy in the community running a node with specific settings on Raspy 3 with 1GB RAM, and only 512 MB given to the node.

---

### Post #37 — @kushti (2021-03-18)

Updates:

* We’ve come to a simplified update contract (1 transaction instead of 2, simpler security).
* Tests for a pool with quicker data delivery done
* We’re testing oracle pool and then stablecoin bank (with [@DarkSideOfBrrrrr](/u/darksideofbrrrrr) ) with the simplified update contract

Then oracle pool launch and stablecoin bank launch, after testing an update for the testing bank contract.

---

### Post #38 — @kushti (2021-03-19)

Updates:

* testing contract deployed by [@DarkSideOfBrrrrr](/u/darksideofbrrrrr)
* new oracle pool update contract is successfully tested

So we’re going to test an update for a stablecoin bank and then establishing a real oracle pool and the stablecoin bank,

---

### Post #39 — @cymatic (2021-03-19)

In the [new bank contract](https://github.com/ergoplatform/eips/pull/28/files#), it looks like the min/max reserve ratio is going to stay the same at 400/800%. I know there was some discussion about making those values higher so I just wanted to confirm that they will be staying at 400/800.

Also, it looks like the cooling off height is still at 455,000, will that be extended or stay at 455,000?

---

### Post #40 — @kushti (2021-03-20)

For the testing contract it is 455,000. For a real one, not sure but maybe 455,000 would be good also (if the launch will be on Mon or Tue).

400/800 still yes, what are other options?

---

### Post #41 — @kushti (2021-03-20)

Updates:

* new oracle pool is running. Next, we’re testing bank contract update tomorrow and then re-launch on Mon or Tue!

---

### Post #42 — @cymatic (2021-03-21)

Further up in this discussion the idea of 800/1600 was proposed, but 400/800 feels right to my intuition.

We should cross block 455,000 almost exactly a week from now, so if we roll out the new contract Monday or Tuesday that would give 4 or 5 days for people to buy in unrestricted until the ratios kick in. I don’t think we’ll see the initial flood that we saw with v1, but I could be wrong.

---

### Post #43 — @kushti (2021-03-26)

Deployed version has 400/800% and cooling off height is set to 460,000. Compilable (to P2S address you can check on explorer) script: <https://tinyurl.com/fwu5z34d>

---

### Post #44 — @kushti (2021-03-26)

So the contract deployed, now UI and update contract will be deployed, and voting tokens will be sent out!

---

### Post #45 — @cymatic (2021-03-26)

Cooling off height of 460,000 is almost exactly one week which sounds good.
