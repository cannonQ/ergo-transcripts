---
title: 'EIP: Democratic Governance - Users, Devs & Miners'
description: 'ErgoForum discussion: EIP: Democratic Governance - Users, Devs & Miners'
tags:
- addresses
- eip
- eip-4
- ergo-foundation
- ergoforum
- ergohack
- ergoscript-context
- full-node
- getblok-plasma
- native-tokens
- paideia
- registers
- soft-fork
- spectrum
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/eip-democratic-governance-users-devs-miners/4019
created: '2022-10-08'
last_activity: '2022-10-14'
posts_count: 11
views: 762
likes: 18
glossary_hits:
- Addresses
- EIP
- EIP-4
- ERGOHACK
- Ergo Foundation
- ErgoScript context
- Full node
- GetBlok Plasma
- Native tokens
- Paideia
- Registers
- Soft fork
- Spectrum
- Transaction
---

# EIP: Democratic Governance - Users, Devs & Miners

> **Forum thread:** [https://ergoforum.org/t/eip-democratic-governance-users-devs-miners/4019](https://ergoforum.org/t/eip-democratic-governance-users-devs-miners/4019)
> **Category:** Uncategorized | **Created:** 2022-10-08 | **Posts:** 11 | **Views:** 762

**Related concepts:** Addresses, EIP, EIP-4, ERGOHACK, Ergo Foundation, ErgoScript context, Full node, GetBlok Plasma, Native tokens, Paideia, Registers, Soft fork, Spectrum, Transaction

---

### Post #1 — @cafebedouin (2022-10-08)

I thought I’d start a conversation on Ergo Democratic Governance in a forum that lends itself to long form discussion, and possibly an EIP. I don’t have any experience writing an EIP. So, I would love to hear any suggestions on how you might improve this initial draft and what kinds of proposals might work in the context of the Ergo blockchain.

I’m also adding this to [Reddit](https://www.reddit.com/r/ergonauts/comments/xz2ruz/eip_democratic_governance_users_devs_miners/). If we can come up with something coherent, I’ll be happy to submit it as an EIP. Regardless, this is a discussion we should be having.

P.S. This is not about Twitter. This is about coming up with a model of democratic governance that works for Ergo’s various stakeholders.

DEMOCRATIC GOVERNANCE  
Author: X

Status: Proposed

Created: 08-Oct-2022

Last edited: 08-Oct-2022

License: CC0

Forking: not needed

Motivation  
“…it is going back to debates whether it is miners, users or devs who control the protocol.” -kushti khushi (@kushti\_ru), Telegram, 09-Sep-2022

There is a well-defined protocol for miners to vote on an Ergo Improvement Proposal (EIP) that impacts them, such as EIP-0037. It also appears that soft forks can be implemented based on their technical merits and Ergo developer consensus, such as the implementation of audio and video standard for the platform in EIP-0004.

In the future, as more developers join the ecosystem and different technical trade-offs need to be considered where there may be disagreement, there will need to be a more formal decision-making process.

This problem already exists in Ergo’s user population, whose only recourse to influence Ergo’s protocol and other decisions not directly related to the blockchain itself is to take to social media - such as Telegram, Discord, Reddit, Twitter, etc. There is no means to determine the user consensus, and this has shown repeatedly in the passing of the EIP-0027 soft-fork to the renaming of the eth\_classic Twitter account to Ergo\_Platform.

As Mark Glasgow puts it: “Everybody drawn to Ergo is very principled, some more utilitarian or opportunistic than others; and everyone should try a wee bit harder to be respective of differing opinions rather than trying to convince one side they’re ‘bad’ and the other stupid.”[3]

The issue is that it is difficult to be respectful of other positions when there is no decision-making process. Without it, communication from differing points of view turns into a race to the bottom to try to shout down opposing points of view.

There are many ways to implement a system that takes into account the preferences of users. Further, any system that is developed has the potential to also benefit both the growing developer community and miners that wish to have a greater say beyond pointing their hash rate at a particular pool or some future option from mining smart pools, such as GetBlok.

## References

1. [Telegram: View @ergoplatform](https://t.me/ergoplatform/321872)
2. <https://twitter.com/eth_classic/status/1578133771647610880?s=20&t=74O08uxxxS44_E_FZxjSSw>
3. [Telegram: View @ergoplatform](https://t.me/ergoplatform/336185)

---

### Post #2 — @cafebedouin (2022-10-08)

One thought that occurs to me is that you could randomly drop voting tokens to people that have recently used the chain. One address per block, over X number of blocks, and with a defined voting period. Those people can send the token to some address for various poll options (in a direct democracy system), they could send to some person, who can then turn around and vote with the votes they have recieved (representative model). I’m not so sure about the technical details about implementing either, but they seem plausible.

---

### Post #3 — @WilfordGrimley (2022-10-08)

I am working on [an EIP, EIP-0038](https://github.com/WilfordGrimley/eip38PartialVoting/blob/master/eip38.md) for the Ergohack going on at the moment to increase miner governance!

The solution I think I have settled on that will have the most impact is to add additional logic to voting such that miners can indicate partial support for any given change. This (when combined with subpools, smartpools, snisp’s and cyti contracts) will enable miners to join a pool to maximise the odds that their vote is counted, but enable those pools to accurately report to the blockchain what percentages of their hashrate are in favour of any particular change.

This will negate one of the largest drawbacks that disabling non-outsourcabilty had on the chain: That pools must censor their miners votes.

While similar effects can be achieved by siphoning off miners into smaller pools (with their own nodes) of miners with whom they agree using subpools; that solution reduces the odds that miners with a minority viewpoint will have their vote counted.

The solution that enables partial voting at the protocol level will be most effective in increasing miner governance, and actually provide a solid incentive for pooled mining. It can be combined with versions of the second solution, but the first is prefferable.

If you would like to help out at all and join the discussion, please pop over to the team’s [discord channel](https://discord.com/channels/668903786361651200/1026546841103388773) for the Hackathon. ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=12 ":slight_smile:")

---

### Post #4 — @CheeseEnthusiast (2022-10-09)

If I am being honest, I am not keen on changing Ergo’s current chain governance method in terms of who may influence it (Though I am okay with a newly improved voting protocol / mechanism like Wilford is proposing). Miners have the power to vote in changes, and developers(technically anyone, but usually devs) have the power to make and propose them to the mining community. But maybe I am biased here, considering I am both a miner and a dev.

If this governance you’re speaking of has anything to do with soft-forks, hard-forks, and chain parameters then it makes little sense to put that power into people who may just passively use the chain. In that sense, I think the governance of the Ergo blockchain already works well on its own.

If this governance you’re speaking of is more leaning towards social activities, marketing, or general actions that are not influencing the blockchain itself, then I am much more open to this discussion. Right now, Ergo Foundation is controlling those aspects entirely on their own, so I can empathize with those wishing to assert more power over the ecosystem in that way. I also think that such things can involve input from general members of the community, rather than just miners or devs.

EDIT: Another thing to keep in mind, implementing a general governance system for the blockchain itself would almost certainly require a HF, in order to influence things such as chain parameters. I imagine that this HF would be quite contentious, and would have to be voted in by miners.

Then, remember that there is a reason most blockchain governance systems converge onto PoW or PoS mechanisms, and that simple airdrops are almost always vulnerable to sybil attacks. ErgoNation-esque proof of humanity would be cool here, but again I struggle to see how that may be implemented cleanly at a protocol level. Makes more sense to be done for things which are not so rooted in code, like governance of EF decisions, EF elections, marketing teams, etc.

---

### Post #5 — @cafebedouin (2022-10-09)

I’d like to think a bit about both [WilfordGrimley](https://www.ergoforum.org/u/WilfordGrimley) and your response before responding more fully. But, I did want to make a quick comment.

I agree that making technical choices is not something that should be done democratically, with people that aren’t qualified to have an option chiming in. But, I can see two scenarios.

1. Let’s imagine that the developer community grows to, say, 1,000 or 10,000. How will decisions that might be contentious be handled? How will you determine who is, or isn’t a developer, with expertise to chime in? How will choices be handled? Right now, a few core developers say what is and isn’t possible. But, it’s easy to imagine a multitude of L2 implementations that want different things from the base protocol. How will the developer community choose between them? Right now, there’s Plasma, Spectrum’s L2, and presumably many more are on the way, and at some point, the interests of these different solutions will diverge, and decisions will have to be made about what gets supported and what doesn’t as the base protocol level?

My question is aimed at this kind of governance. Right now, the community is small, and kushti is trusted to make the call. It works. But, it is easy to imagine a future where the current way of doing it might not work.

2. It is possible to imagine that you may want input from users. Let’s say there’s a technical choice to be made, and there are good reasons to go one way, or another, but they are mutually exclusive in some way, and the choice impacts the people actually using the chain. Some kind of mechanism for them to register their preference might be smart to have, at least as something for the development community to consider.

The same is true of miners. Maybe it would be good to get their input, but maybe it is not something that requires an EIP and approval with node and hash rate. I don’t know what that would be, and I’m mostly abstracting and applying it to different stake holders. But, it seems logical that getting these kinds of inputs will be important, at some future stage of development.

I also think that there needs to be discussion about governance beyond implementing technical changes via soft and hard forks. The decision to co-opt ETCs twitter account, no matter how you look at it, you have to acknowledge that it poses reputation risk to the chain, and if we used the same thresholds we do for making soft forks, of say 90% agreement, we wouldn’t have done it. The reason why it was done is because there is no mechanism, or explicit threshold, to elicit some kind of input from stakeholders that care about the issue. As a consequent, the Ergo Foundation did whatever they thought was a good idea, with no input from the community. It was just dropped during a crypto conference, probably with the intention that it would “just blow over”. That’s not a good way to run the non-technical considerations of the chain.

I don’t know what the answer is here. Is this a question of dApps using Paideia or ErgoTeams? Maybe. But, I’ve never seen any discussion about these tools being deployed to govern the entire chain. But, perhaps they should be. This is the question I’m raising.

---

### Post #6 — @CheeseEnthusiast (2022-10-10)

So let me analyze the two scenarios here and I’ll give my thoughts:

Scenario 1:  
This is an interesting point. I think a distinction to make here is that this governance of the dev community, and that base protocol changes would still be proposed to miners for them to vote in or not. The problem here is more about what the dev community shall be proposing. I personally think that a developer DAO here could be helpful. But then the problem is, how do you distinguish between developers and users and where that line is crossed. Maybe require each user has completed at least one bug bounty? I’ve expressed the desire for an EIP website before which makes the process of making EIPs simpler, something similar could be of use here.

2. I think here a mechanism for using ERG to vote would be helpful. Once again this would likely require a DAO.

I think I understand more of what you are suggesting now. So it seems the question isn’t about how forks (and other changes) are activated, but more about how they are proposed. In general, I think the simplest way would be a DAO using Paideia or ErgoTeam. These are already using PoS-like mechanisms to prevent voting attacks, and are probably the easiest way to go about this. I also agree that more governance over EF decisions is a good thing, but once again I think waiting until a DAO framework is ready seems like the best choice here.

---

### Post #7 — @cafebedouin (2022-10-10)

The problem is scale. How do you get a DAO to the point where it represents the interests of all stake holders?

For instance, one option I raised is that you could run a representative poll, same way you do blocks, and have one random address per block receive a voting token - maybe batch sent daily. Voting tokens could be sent by those random addresses using the chain to an address of their choice, that represents a vote, same as with getblok.

This strikes me as a similar mechanism as what is used to approve hardforks, except this would represent active users of the chain.

It’s one idea. I can imagine others. Voting tokens are sent to addresses that met some criteria: total value, number of transactions, owners of NFTs with links to IPFS, etc. You could segment the way you do it that is relevant to the question at hand and determine who should get a say.

Then, you’d have to come up with some way to make representation fair. Again, you could do a lottery system, which would cut down on various forms of gaming. Of course, a sample is not the population, so there’s a trade-off with this approach, but I could see a number of use cases.

Same ideas could be applied to mining pool payouts, accounts that have done something dev related (such as a having a smart contract once deployed on testnet appearing on mainnet, where the groups producing more smart contracts have more of a say) and so forth and so on.

I think what we need here is more imagination. I don’t understand how the Ergo Blockchain can be used to segment users, developers and miners in this way - but know you and others do and could come up with much better ideas than what I’m getting at here.

---

### Post #8 — @cafebedouin (2022-10-10)

I looked a bit at your Hack-a-Thon Discord, and as soon as I saw you were getting into node internals, I start thinking you were somewhere way beyond my depth, my friend. =)

---

### Post #9 — @Grayman (2022-10-13)

I read the discussion here after posting on this other thread: [On Network Security and Number of Honest Actors Assuming a Finite Potential Hashrate - #5 by Grayman](https://www.ergoforum.org/t/on-network-security-and-number-of-honest-actors-assuming-a-finite-potential-hashrate/4014/5)

I appreciate the nuanced conversation and thought, folks. I think that you are onto something important, and it needs to be hammered out over time. I transmit my comment here to join the discussion:

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/grayman/48/1259_2.png)[On Network Security and Number of Honest Actors Assuming a Finite Potential Hashrate](https://www.ergoforum.org/t/on-network-security-and-number-of-honest-actors-assuming-a-finite-potential-hashrate/4014/5)

> Maybe it should work like this:
>
> Anyone can propose changes to the platform in the form of a provisional EIP (pEIP), here in this forum.
>
> After a period of discussion, the terms of such an EIP could be put to a vote among the users of the blockchain. Users that wish to spend their governance tokes on the pEIP may do so, and vote for or against the pEIP.
>
> If the pEIP reaches a certain threshold of upvotes, then the concerned parties should develop an EIP, work with the core devs to implement it, and then the miners vote on implementation as always.
>
> The governance tokens would get distributed via a pseudo-randomized weighting of the volume of transactions between various wallets, with some anti-spam tactics. I also think such governance tokens should expire after a time.

So, no changes can be proposed to the platform without community discussion and consensus… but no changes can be implemented to the platform without the miners voting it in. This is a conservative approach, but gives a proper voice to the people I think…

---

### Post #10 — @WilfordGrimley (2022-10-14)

I am sincerely of the opinion that the governance power of a PoW blockchain should rest nearly solely with the miners.

It makes good sense for a PoS secured consensus model, or a DAO to enable voting for stakeholders. I think Cardano’s Catalyst does a great job of this.

While miners should listen to the communities opinions and ideally be active in the community, they ultimately bear the risk and responsibility for network security; and as such should be responsible for governance.

If community members should desire to hold a ‘token’ that increases the power of their governance, they can invest in mining hardware, host a mining pool, or subpool.

As I said above, I think DAOs are great for governance, and I would love to see Smart Pool DAOs develop in the future to enable participating miners to vote on how their pool implements changes.

---

### Post #11 — @Grayman (2022-10-14)

Well, as far as Catalyst goes, the next era in the Cardano Roadmap is dedicated to bringing the governance on-chain, as I understand it.

I hear and respect your opinion that miners should hold the final say in how the protocol works, because it depends on our work and participation. That is why I emphasize that the proposed governance tokens should be for voting on introducing provisional EIP’s, and not affecting the current process for voting upon and implementing the final EIP’s.

It’s a bit meta, I admit. But the only power the miners would lose is the ability to make changes that would be disagreeable to the community of users, including themselves. As users, miners would be free to suggest, discuss, and vote on provisional pEIP’s, just like everyone else. And, if one passes, the miners will have final say on whether or not the resulting EIP is actually implemented.

Now, [@cafebedouin](/u/cafebedouin) might object that this is not a sufficient power to grant users for their contribution to the value of the network. But this small concession on the part of miners actually could resolve many of the problems that we are discussing with regards to twitter, reddit, and whatnot. Having a formal process for introducing ideas to change the blockchain, discuss those ideas, and ultimately vote on implementing those ideas, would channel a lot of unproductive energy into productive and inclusive discussions. Bad ideas would be easy to reject. Half-baked ideas could be improved and re-proposed. Good ideas that are not appropriate for the blockchain could be redirected to the EF governance DAO, or whatever…

And maybe OP’s idea (with or without my adaptations) belongs off chain. The miners will decide this in the current system. I’m proposing that it does belong on chain, and I believe therefore that I am siding with [@cafebedouin](/u/cafebedouin) here.
