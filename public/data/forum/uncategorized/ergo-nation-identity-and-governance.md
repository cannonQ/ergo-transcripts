---
title: 'Ergo Nation: Identity and Governance'
description: 'ErgoForum discussion: Ergo Nation: Identity and Governance'
tags:
- addresses
- ergo-foundation
- ergoforum
- ergohack
- native-tokens
- registers
- token-id-rule
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-nation-identity-and-governance/3560
created: '2022-04-25'
last_activity: '2022-06-05'
posts_count: 6
views: 1185
likes: 20
glossary_hits:
- Addresses
- ERGOHACK
- Ergo Foundation
- Native tokens
- Registers
- Token ID rule
- Transaction
---

# Ergo Nation: Identity and Governance

> **Forum thread:** [https://ergoforum.org/t/ergo-nation-identity-and-governance/3560](https://ergoforum.org/t/ergo-nation-identity-and-governance/3560)
> **Category:** Uncategorized | **Created:** 2022-04-25 | **Posts:** 6 | **Views:** 1185

**Related concepts:** Addresses, ERGOHACK, Ergo Foundation, Native tokens, Registers, Token ID rule, Transaction

---

### Post #1 — @Ulmo (2022-04-25)

**TLDR for Ergohack**

*Ergo nation enables decentralized on-chain governance by a community that shares the ideals in the [Ergo manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/).*

Currently the default governance token models in crypto do not align with the ideals because they lead to governance by the wealthy. This is problematic for any project that would like to have decentralized governance by the community.

The solution is to have unique on-chain identities for the community members. We propose a way to create the identities in a decentralized way. People verify themselves by taking part in events, which are designed to exclude bots and use of multiple accounts. A successful participation leaves a trace on-chain. The historical on-chain trace allows for anyone to check the reputation of any identity.

The on-chain identity is a pseudonym that is never linked to the true identity of a community member. It protects the individual from harassment and coercion. It also protects the integrity of the governance system from corruption, lobbying, bribes and politics.

The list of the identities is a representation of active community members who align with the values expressed in the Ergo manifesto. People on the list can be asked by any project to vote on a governance decision. This is a valuable addition for projects that truly care about decentralized governance by the community. Currently they only have access to governance by investors. The interests of the investors and community ideals do not align well. This is evident in the lack of decentralization across the whole crypto space. The pseudonymous on-chain identities enable governance that not only improves current models in crypto, but also democratic processes outside of crypto.

Ergo nation strives to make no compromises on the ideals. For the sake of minimizing corruption and maximizing decentralization, there will be no permanent team or treasury.

**We are looking for Ergohack contributions in the following tasks:**

* Design a simple game. (or implement an open source game)
* Scrape on-chain data for a set of Ergo addresses. Process the data to find successful event participations and governance contributions.
* Build a front end for displaying the list of identities and their records.
* Discussions. If you have any ideas on bringing the Ergo spirit into project governance, the game design, governance models, or anything else, then please join the discussion. This is a raw proposal with plenty of room to improve.
* (Possibly start work on an anonymous forum that uses zk-proofs to link contributor badges to the IDs)

**Full proposal**

**Introduction**

We propose a pseudonymous on-chain identity solution that identifies active contributors in the Ergo ecosystem. Based on those IDs, any project has access to decentralized governance that aligns with the values described in the Ergo manifesto. Furthermore, having unique IDs with reputation on-chain enables improving not only crypto governance token models, but also traditional direct or representative democratic models.

The default solution for a crypto project is to distribute governance tokens, which usually leads to plutocracy. The model pretends decentralization, but in reality it is just a way to bootstrap attention and liquidity for a new project. No matter how fair the governance token distribution is, the tokens are accumulated by the wealthy stakeholders over time. This is mainly due to the fact that those with a higher stake have a higher incentive to buy governance power. It is in their interest to pay higher price for the tokens than what small stake holders are willing to pay. Once the whales have acquired enough power, they can shape the rules of platform in their own favor. Those rules can be the opposite of the decentralized crypto ideals that the project was aiming to achieve. This is evident in the lack of decentralization in all long running projects that deployed governance tokens.

Governance by the wealthy also has a dynamic effect that leads to more centralization. Governing in their own interest allows them to make more money, which then again allows them to buy more governance power. This cycle of increasing inequality is related to the traditional governance and finance. There too, money can buy influence over democratic processes. The only difference is that the traditional governance at least pretends to have an equal power distribution with a “one person one vote” system. This is where on-chain governance using pseudonymous identity can improve things. It diminishes the influence of money in the community driven- and democratic governance models.

The main challenge in identifying unique people on-chain is that anyone is able to set up multiple accounts or use bots to take part in governance votes. A popular choice in other decentralized identification projects is to have some off-chain verification, like national ID or twitter account. This however, is decentralized in marketing speech only, because it relies on the centralized ID platforms and a centralized verifier. In this proposal we explore a simple way of providing engaged community members with a unique pseudonymous identity, and a governance platform that can’t be corrupted with multiple accounts, money or bots. We aim for simplicity, because it is an advantage for a decentralized system. Complex structures create elitism by obfuscation.

**A unique on-chain identity**

The solution to avoid multiple accounts is to have events, where people are able to prove identity for one account only. For example, a game once per month, which requires human attention for 10 minutes. The game should take enough active engagement so that one player can’t play the game on multiple machines or tabs simultaneously. This prevents one person from creating multiple identities. The game is revealed only at the start of the event, which prevents bots. At the end of the game, a player receives a verification code number, which is sent as an ERG transaction to a platform address. The transaction leaves a trace on-chain and proves that the player has completed the game. Verification code transactions that arrive after 15 minutes are disqualified to prevent people from playing the game multiple times in a row. If the system is good enough to prevent exploits, then the on-chain identities can only be obtained by people, and no one person can have more than one. Successful code verification on-chain gives a successful mark of attendance for an event.

**A list of ecosystem contributors**

As a result of people taking part in the monthly events, we will have a list of addresses from engaged community members in the Ergo ecosystem. After three months, they might have 0,1,2 or 3 successful event participations. Now, when another project in Ergo is interested in being governed by the community, it can use the ID list. It can set up a singular vote, or votes on an ongoing basis. Choosing a threshold for identifying active people is up to the partner projects. For example, they can engage people who have at least two successful event participations in the last three months. The events are not the only way to identify contributors. If a person is taking part in a partner project’s governance, then they can receive contributor NFTs. Those badges give further indication on who are actively contributing in the ecosystem.

**Pseudonymity**

If a person in a governance vote is known, then they can be approached with bribes to sell their vote, or they can be coerced to vote against their will. This is why pseudonymous on-chain identity can not only improve the governance in crypto projects, but also in the traditional models of governance.

In practice, people are required to set up a new Ergo address. They then retrieve ERG from a faucet, and send a small transaction to the platform address. This will register their address as a new participant. **This address is the pseudonymous identity, and it should never be connected to the participant’s real identity.** It should also not be used to sell votes or any other malicious activity. In such cases, we encourage all partner projects and community members to exclude the malicious addresses in their votes, reward distributions and other engagements. However, the malicious actions can’t be verified on-chain. It means that they can’t be excluded from the ID list. It is up to the community to identify addresses that are not adhering to the rules. Setting up a centralized body for monitoring off-chain activities would be against the principles of the decentralized identity system. It is up to the community to stay vigilant and protect the integrity of the platform.

**On-chain verification**

All of the actions on the platform and the history has to be verifiable on-chain. This will make sure we don’t rely on any trusted party to keep the records. The design to keep a verifiable historical record of the events is as follows: An event starts by minting a NFT into the platform address. That NFT contains the address where the game is hosted. It can be simultaneously published on the front end to make it more convenient, but the NFT leaves a starting moment mark on-chain.

After the participants complete their game successfully, they receive the verification code. The code should be related to the participant’s pseudonymous address with some logic. For example, it could be the first 3 numbers in the address multiplied by 3. For an address 1h23….k1d3 the first three numbers are 123, and multiplied by 3 we get 369 as the verification code. The code should always be derived from the participant’s address, but the transformation logic should change for every event. Also, the logic should not be too simple. If it were just the first three numbers of an address, then a participant could easily deduce the logic, and send the code from multiple addresses in the same event.

After the game ends, a second NFT will be minted. It reveals the logic on how the address is transformed into the verification code for that event. With this setup, it is possible to verify actions and timings of all participants for each event on-chain. The history shows when the game started, who sent the verification code within the time limit, and was the code correct according to the logic published in the second NFT.

**Decentralization**

So far the design leaves open two major threats for exploiting the system. The first is that the people who develop the game know how it works, and could use bots to play it with multiple addresses. The second is that the organizers will know the logic for generating the verification code before it is published. This makes it possible to just send the code from multiple addresses without even playing the game.

For the first three games, the founding team will have control of the game development and producing the verification code. Thereafter, it would be better to start rotating the game development and logic publishing roles between community members and partner projects. With the rotations in place, even if one team decides exploit the system, they will only get one successful event marker. The next time they wont be able to successfully complete the game for the multiple addresses. If projects choose a threshold of two or three successful markers for a governance vote, then the multiple accounts wont be able to participate in governance.

Another problem for decentralization is the maintenance of the user interface. Those in charge could manipulate the data on the front end. To avoid this, we plan to make the front end fully open source. This also applies to the code that retrieves the data from the blockchain for all addresses and events to build the ID list. If the team disappears or takes action that is not accepted by the community, then anyone can fork the code and keep the platform alive. Also the platform address, where the NFTs are published, could be lost or hijacked. If the community agrees that the old address is corrupt, then they can switch to a new one. In other words, the organizing team can only operate as long as it is trusted by the community.

**The game**

The game itself does not have to be fun or fancy. What should be maximized is active engagement, inclusiveness and robustness. The active engagement has to be enough, so that one person can’t play two games simultaneously. Apart from that, the game should be very easy, so that people succeed as long as they play actively. The best game design would also allow participation regardless of disabilities or language barriers. Robustness is important, because there is only one chance per month to show attendance. If many users fail to play the game because some device is not functioning properly, then they will probably abandon the platform.

For the first game, we would suggest a simple quiz, where participants answer 10 questions. Each question first gives 30 seconds time to read a small text. After that a question appears. After 10 second multiple answer categories appear. Then the participant has 20 seconds to answer before the next question. Timers are shown at each step. There could be a pool of more than 10 questions, and they could be picked in a random order for each participant. After 10 questions, 10 minutes has passed. If a participant got five questions right, then the verification code is revealed. The participant then has to send it as a transaction on the Ergo blockchain to the platform address. The verification code amount could be added for example after 3 decimals in the transaction value to keep the costs of the game minimal. So for example, if your code is 369, then you would send 0.000369 ERG to the platform address.

A quiz might not be the most engaging game, which might make it exploitable. However, it would be easy to develop as the first game. We would not expect many exploiters in the first event. In any case, the games should change and improve to counter possible exploits for future events.

**Governance**

The pseudonymity and trustless blockchain technology enables us to improve on traditional governance models. A few examples:

* Direct democracy. Pseudonymity mitigates the problem of bribing and coercing voters. Blockchain removes the problem of tampering with vote calculations.
* Representative democracy. A random sample of representatives can be chosen from the full pseudonymous ID list or based on their merits. This saves the efforts that representatives spend on gathering votes, puts the focus on merits instead of a popularity contest, mitigates corruption and removes lobbyism. (For more information, please see [sortition](https://www.youtube.com/watch?v=-FsOH4KQp54))
* Governance token. Current crypto governance token models often aim to be community driven and decentralized. They fail because the tokens accumulate in the hands of a few wealthy investors over time. Model improvements (e.g. quadratic voting) try to give less weight for big investors, but it is trivial to divide the tokens into multiple wallets. Another innovation (e.g. ve model) has focused on aligning the financial interests of the investors and the platform. This ignores any other than financial interests of the community, and leaves the problem of centralized power. Having a unique ID for investors allows for the improvements like quadratic voting to work as intended.
* Governance as a service. Community oriented projects might want to employ trusted people for big or small governance tasks. For example, a decentralized exchange (DEX) will have a problem of deciding which token pairs are displayed or verified on the user interface. Deciding it themselves would be centralized gating, voting on social media could be botted, and voting with governance tokens could be tiring for most of the holders. Using the list of pseudonymous IDs, the DEX could offer a bounty for all who vote on verifying a token pair. The DEX could even track the success of the voters in not picking scam tokens as an additional filter. The voters have their reputation at stake, financial incentive and established history of caring about the partner projects and ecosystem as a whole. Their motivations go beyond short term profit maximizing, which is enables building with a more sustainable and idealistic drive.

These are just the most common examples. Having the ability to combine ecosystem, project community and investor preferences in governance will probably produce completely new models. For example, a project could require approval from all those stakeholders to pass an important decision.

**Deliberation**

Having the list of unique pseudonymous IDs is just the basic requirement for governance improvements. Other tools can be developed to improve the governance process, and streamline the use for individuals and partner projects.

An important module to support governance would be an anonymous forum and chat. Deliberation on the votes at hand can help in making well informed decisions. This can’t be done using the pseudonyms or social media chats like Telegram or Discord. We need new tools to protect the real identity of the participants for the reasons discussed earlier. This could be facilitated for example by a chat room, where a small participants get access by zk-proof of holding the pseudonymous ID. For this one session the participant then gets a random anonymous ID. The anonymity improves the discussion by setting ego aside. It is easier to focus on making arguments about the topic. At the end of discussion, the participants can evaluate whether others were contributing or just turned in to say “good project”. These notes can again be linked back to the pseudonymous ID via zk-proof. They enable building much more credible reputations, which make it easier for partner projects to spot serious contributors.

**Value and Compensation**

Decentralization and governance are valuable. The value of decentralization is evident in projects that give out tokens for free just to be able to claim the decentralization. Those tokens may hold governance power or entitle to a share of profits. These perks would traditionally belong to investors only.

Governance work is valuable too. A good contributor needs to have expertise, take time to learn, and deliberate on each vote. They might be partly motivated by passion, but many would agree that they deserve a fair compensation for their contributions.

The novel value-add for crypto projects is that the ID list can represent interests of the community. Those interests are not well aligned with the interests of profit seeking investors. For example, centralization can increase profits and investors might want to pursue it against the will of the community. Such development is evident all across crypto. In contrast, governance based on the ID list can provide a vote that aligns with the interest of the community. That decision is a valuable service for projects that truly care about being governed by the community in a decentralized fashion. Such votes are currently simply not available on-chain.

Because the community and the service are valuable, the pseudonymous ID addresses may be receiving compensations, or even airdrops to catch the attention of the community. (Please call them contributor rewards instead of the bot army triggering A-word.) Those compensations can dilute the signal of community interests in the governance. At one extreme, people contribute for free out of passion for ideals, which gives a pure signal. The other extreme is pure noise of people mechanically doing the clicks and commentary just to score reputation points.

The noise destroys the value-add, which is why the community has to actively fight the exploitation and reward meaningful contribution. The ID list enables people to start building reputation as contributors, but it is difficult to filter out reward farmers. Addition of the forums and feedback from governance discussions will substantially improve recognition of valuable contributions. It is also helpful that the community can continuously come up with new ways to find the true contributors. There is no standard model for partner projects to use the on-chain repuation in targeting votes and rewards. They can always come up with new filters for finding the set of IDs that they need for their vote.

**The Vision**

A community that gathers around a set of guiding principles has a strong foundation. For Ergo, those ideals are expressed in the [Ergo manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/). Its spirit is that financial, governing and other blockchain enabled tools should be decentralized and equally accessible by everyone. The Ergo blockchain itself is of course open for anyone, and does not make any value judgements. However, for the projects and people who do want to adhere to the spirit of Ergo, we provide a way to let the community govern.

The governance provided by the identified contributors is not completely safe from corruption. Nothing is. A contributor with a long and spotless reputation could use it to take bribes from projects. The community might not step up against reward farmers. These are just a few examples of how the platform could lose its status as a representative of Ergo ideals. The unique pseudonymous ID design mitigates those problems better than real world governance models, but it is up to the community to exclude malicious actors. If it doesn’t, then it loses its value as a representative of the Ergo spirit. Fortunately, the tools to correct course, or fork into a true manifestation of Ergo community values is always available.

As a platform that gathers the community sharing a common ideal, the governance begins to exceed any singular project. People might not only think what is best for a particular project, but also reflect on how it affects the ecosystem as a whole. Through engagement people start to have more responsibility in the ecosystem. That responsibility is earned by contributing, which is in stark contrast to the power earned by money and popularity contests in the old world. What starts to emerge, is a nation. For this reason we propose the platform to be called Ergo Nation. Not just a governance tool for singular projects, but a backbone of the Ergo ecosystem formed by people gathering around an ideal.

**The next steps**

Setting up the on-chain infrastructure for this project is trivial. Some knowledge of minting NFTs and sending automated transactions back to registered addresses might be required. Nothing difficult at this stage. The bulk of the work would be to develop and test the game, and build the open source front end. For that it would be necessary to employ a developer, unless some volunteer shows up. Based on the discussion here, we could refine this proposal, and apply for funding from the good whale or dark fund.

We welcome contributions from developers and non-developers alike. Also interested partner projects are welcome to indicate their interest.

Further down the line, there could be additional module for pseudonymous governance forum, which allows deliberation.

The platform will have a top priority of decentralizing all maintenance and development. This means that the role of organizing the events should rotate. No official social media. The development of additional tools will rely on voluntary contributions. The platform will not have any treasury or a permanent team. Those are a threat to the integrity of the platform. Furthermore, having a team and funds creates an expectation that they will take care of the platform. Instead of demanding improvements from someone else, the community members should see the problems as opportunities to contribute.

(This text is mostly based on a previous [post](https://www.ergoforum.org/t/a-proposal-for-a-public-good-pseudonymous-on-chain-identity/3438/2). With the approval of the original poster, we have expanded the idea for the purpose of using it in the upcoming Ergohack.

---

### Post #2 — @Ergosmergo (2022-05-01)

I like this idea but from my understanding, the user would need to be online and take part in an event since a lot of users have different time zones it wouldn’t be convenient unless the event was held over a multitude of time zones it’s harder then you may think getting users to show in the same place at the same time. In the current system voting is miner based on your proposal I think you’re saying the vote should be down to the users rather than the miners? See you can’t manipulate hash rate but it would be easy to have multiple bots take part in an event AI is becoming ever so troublesome when it comes to voting mechanisms.

---

### Post #3 — @Ulmo (2022-05-01)

Thank you for the feedback. The problem with the time zone is significant. We have not yet come up with a great solution to it. At least we should rotate the event time to make it fair for people across the globe. This means that people won’t have full attendance, so we can encourage partner projects to take that into account when setting thresholds. For example, show activity in last 3 out 5 events to qualify for a governance decision.

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/ergosmergo/48/898_2.png) Ergosmergo:

> it’s harder then you may think getting users to show in the same place at the same time.

I believe you. Any further ideas to make it easier to onboard people are welcome. As such, if the IDs are in high demand, I think people do attend. Look at the NFT minting craze for example. Instead of attending an event every day to mint, you only need to do it once a month, and then use the ID to mint. (this is not the main benefit of the ID, but it does solve distribution issues too).

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/ergosmergo/48/898_2.png) Ergosmergo:

> it would be easy to have multiple bots take part in an event AI is becoming ever so troublesome

The whole event is designed to prevent bots. It will also be improved on a continuous basis. If it becomes impossible to distinguish AI from humans online, then you are right. I don’t think this is currently the case. Furthermore, the dynamic adaptation of the event + reputation requirements should make Ergo Nation resilient.

---

### Post #4 — @Ulmo (2022-05-01)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/ergosmergo/48/898_2.png) Ergosmergo:

> I think you’re saying the vote should be down to the users rather than the miners?

This deserves a separate reply, which I will use for FAQ purposes. Based on the feedback, the main text does not do a good enough job in explaining purpose of the Ergo Nation.

**The Ergo Nation enables people to have unique ID and reputation attached to it. This enables projects in the ecosystem to use the list of IDs for governance, discussion, whitelisting, token distribution, product testing, doing tasks, etc. The Ergo nation can’t enforce any set of values or rules, but it encourages people to act in the Spirit of the Ergo manifesto.** This will be even more true, if we are successful in decentralizing the maintenance. No team, only organic dynamic shaping the community of people and projects.

This means that people on the ID list will not be a homogeneous group. The amount of people who act in support of decentralization could be 90% or 10%. It is up to the projects that use the list to decide which subset of the list they want to use. If they don’t care, they can use the whole list. If they do, they can filter for IDs that have a reputation of acting in support of decentralization. The projects are not unilaterally doing the exclusion. Also the people have the ability to boycott projects that they don’t want to support.

To answer your question about miners vs. users making decisions. That is up to whoever initiates the vote. (This is not just decisions about Ergo blockchain, but all projects on the chain too). If they think it should be miners, then they should ask miners. If they think it should be users, then the Ergo Nation enables them to have that option. For some decisions they could even ask both. The Ergo Nation does not forcefully replace any existing systems, it enables new types of governance.

Please let me know, if this makes sense. Some version of this question is coming up a lot, and it needs refinement.

---

### Post #5 — @bigoogawoogla (2022-05-04)

The importance of identity cannot be understated. That’s part of why I like this forum: it clearly displays a user’s level of participation.

I would like to see a cross-platform identity solution that is as simple as plugging a yubico into the usb-c port on a phone and pressing a button.

---

### Post #6 — @sab (2022-06-05)

![](https://avatars.discourse-cdn.com/v4/letter/u/bbe5ce/48.png) Ulmo:

> plutocracy

As we get closer to the date of the first event, it is becoming apparent we have an issue with the time zones. There must be some way to be able to distribute this type of game over a longer period of time, say over a 24 hour period instead of just a 15 minute one. Still, very exciting to be moving forward
