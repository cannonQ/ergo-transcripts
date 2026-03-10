---
title: A proposal for a public good pseudonymous on-chain identity
description: 'ErgoForum discussion: A proposal for a public good pseudonymous on-chain
  identity'
tags:
- addresses
- ergo-foundation
- ergoforum
- native-tokens
- registers
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/a-proposal-for-a-public-good-pseudonymous-on-chain-identity/3438
created: '2022-03-09'
last_activity: '2022-04-25'
posts_count: 3
views: 1094
likes: 12
glossary_hits:
- Addresses
- Ergo Foundation
- Native tokens
- Registers
- Transaction
---

# A proposal for a public good pseudonymous on-chain identity

> **Forum thread:** [https://ergoforum.org/t/a-proposal-for-a-public-good-pseudonymous-on-chain-identity/3438](https://ergoforum.org/t/a-proposal-for-a-public-good-pseudonymous-on-chain-identity/3438)
> **Category:** Uncategorized | **Created:** 2022-03-09 | **Posts:** 3 | **Views:** 1094

**Related concepts:** Addresses, Ergo Foundation, Native tokens, Registers, Transaction

---

### Post #1 — @Vesi_Hiisi (2022-03-09)

**Introduction**

We propose a pseudonymous on-chain identity platform that enables novel governance models for projects in the Ergo ecosystem. Many crypto projects would like to have a community driven governance model, but they fail to achieve it.

The default solution for a project is to distribute governance tokens, which usually leads to plutocracy. The model pretends decentralization, but in reality it is just a way to bootstrap attention and liquidity for a new project. No matter how fair the governance token distribution is, the tokens are accumulated by the wealthy stakeholders over time. This is mainly due to the fact that those with a higher stake have a higher incentive to buy governance power. It is in their interest to pay higher price for the tokens than what small stake holders are willing to pay. Once the whales have acquired enough power, they can shape the rules of platform in their own favor. This allows them to make more money, which then again allows them to buy more governance power. This cycle of increasing inequality is related to the traditional governance and finance. There too, money can buy influence over democratic process. The only difference is that the traditional governance at least pretends to have an equal power distribution with a one person one vote system. This is where on chain governance using pseudonymous identity can improve things. It diminishes the influence of money in the community driven or democratic governance models.

The main challenge in identifying unique people on-chain is that anyone is able to set up multiple accounts or use bots to take part in governance votes. Popular choice in other decentralized identification projects is to have some off-chain verification, like national ID or twitter account. This however, is decentralized in marketing speech only, because it relies on the centralized ID platforms and a centralized verifier. In this proposal we explore a simple way of providing engaged community members with a unique pseudonymous identity, and a governance platform that can’t be exploited with multiple accounts, money or bots. We aim for simplicity, because it is an advantage for a decentralized system. Complex structures create elitism by obfuscation.

**A unique on-chain identity**

The solution to avoid multiple accounts is to have events, like a game once per month, which requires human attention for example for 10 minutes. The game should take enough active engagement so that one player can’t play the game on multiple machines or tabs simultaneously. This prevents one person from creating multiple identities. The game is revealed only at the start of the event, which prevents bots. At the end of the game, a player receives a verification code number, which is sent as an ERG transaction to a platform address. The transaction leaves a trace on-chain and proves that the player has completed the game. Verification code transactions that arrive after 15 minutes are disqualified to prevent people from playing the game multiple times in a row. If the system is good enough to prevent exploits, then the on-chain identities can only be obtained by people, and no one person can have more than one. Successful code verification on-chain gives a successful mark of attendance for an event.

**A list of ecosystem contributors**

As a result of people taking part in the monthly events, we will have a list of addresses from engaged community members in the Ergo ecosystem. After three months, they might have 0,1,2 or 3 succesful event participations. Now, when another project in Ergo is interested in being governed by the community, it can use the list on the platform. It can set up a singular vote, or votes on an ongoing basis. Choosing a threshold for identifying active people is up to the partner projects. For example, they can engage people who have at least two successful event participations in the last three months. The list can also be used for airdrops to catch the attention of the community, or to share profits to ecosystem contributors. However, we would advice projects to only do this retroactively to avoid a flood of airdrop hunters, who are not interested in supporting the ecosystem. Note that governance and profit sharing do not have to reside in one token. Projects could still issue their own tokens for profit sharing and not care how centralized it becomes, as long as they let the community do the decentralized governance.

The events are not the only identifiers of activity. If a person is taking part in partner project’s governance, then they can receive contributor NFTs. They can give further indication on who are actively contributing in the ecosystem.

**Pseudonymity**

If a person in a governance vote is known, then they can be approached by bribes to sell their vote, or coerced to vote against their will. This is why pseudonymous on-chain identity can not only improve the governance in crypto projects, but also in the traditional models of governance.

In practice, people are required to set up a new ergo address. They then retrieve ERG from a faucet, and send a small transaction to the platform address. This will register their address as a new participant. This address is the pseudonymous identity, and it should never be connected to the participant’s real identity. It should also not be used to sell votes or any other malicious activity. In such cases, we encourage all partner projects and community members to exclude the malicious addresses in their votes, reward distributions and other engagements. However, the malicious actions can’t be verified on chain, which means that they can’t be excluded from the list. It is up to the community to identify addresses that are not adhering to the rules. Setting up a centralized body for monitoring off-chain activities would be against the principles of the decentralized identity system. Only the community can stay vigilant and protect the integrity of the platform.

**On-chain verification**

All of the actions on the platform and the history has to be verifiable on-chain. This will make sure we don’t rely on any trusted party to keep the records. The design to keep a verifiable historical record of the events is as follows. An event starts by minting a NFT into the platform address. That NFT contains the address where the game is hosted. It can be simultaneously published on the front end to make it more convenient, but the NFT leaves a starting moment mark on-chain.

After the participants complete their game successfully, they receive the verification code. The code should be related to the participant’s pseudonymous address with some logic. For example, it could be the first 3 numbers in the address multiplied by three. For an address 1h23….k1d3 the first three numbers are 123, and multiplied by 3 we get 369 as the verification code. The code should always be derived from the participant’s address, but the transformation logic should change for every event. Also, the logic should not be too simple. If it were just the first three numbers of an address, then a participant could easily deduce the logic, and send the code from multiple addresses in the same event.

After the game ends, a second NFT will be minted. It reveals the logic on how the address is transformed into the verification code for that event. With this setup, it is possible to verify actions and timings of all participants for each event on-chain. The history shows when the game started, who sent the verification code within the time limit, and was the code correct according to the logic published in the second NFT.

**Decentralization**

So far the design leaves open two major threats for exploiting the system. The first is that the people who develop the game know how it works, and could use bots to play it with multiple addresses. The second is that the organizers will know the logic for generating the verification code before it is published. This makes it possible to just send the code from multiple addresses without even playing the game.

For the first three games, the founding team will have control of the game development and producing the verification code. Thereafter, it would be better to start rotating the game development and logic publishing roles between community members and partner projects. With the rotations in place, even if one team decides exploit the system, they will only get one succesful event marker. The next time they wont be able to successfully complete the game for the multiple addresses. If projects choose a threshold of two or three succesful markers for a governance vote, then the multiple accounts wont be able to participate.

Another problem for decentralization is the maintenance of the user interface. Those in charge could manipulate the data on the front end. To avoid this, we plan to make the front end fully open source. This also applies to the code that retrieves the data from the blockchain for all addresses and events to build the list of platform participants. If the team disappears or takes action that is not accepted by the community, then anyone can fork the code and keep the platform alive. Also the platform address, where the NFTs are published, could be lost or hijacked. If the community agrees that the old address is corrupt, then they can switch to a new one. In other words, the organizing team can only operate as long as it is trusted by the community.

**The game**

The game itself does not have to be fun or fancy. What should be maximized is active engagement, inclusiveness and robustness. The active engagement has to be enough, so that one person can’t play two games simultaneously. Apart from that, the game should be very easy, so that people succeed as long as they play actively. The best game design would also allow participation regardless of disabilities or language barriers. Robustness is important, because there is only one chance per month to show attendance. If many users fail to play the game because some device is not functioning properly, then they will probably abandon the platform.

For the first game, we would suggest a simple quiz, where participants answer 10 questions. Each question first gives 30 seconds time to read a small text. After that a question appears. After 10 second multiple answer categories appear. Then the participant has 20 seconds to answer before the next question. Timers are shown at each step. There could be a pool of more than 10 questions, and they could be picked in a random order for each participant. After 10 questions, 10 minutes has passed. If a participant got five questions right, then the verification code is revealed. The participant then has to send it as a transaction on the Ergo blockchain to the platform address. The verification code amount could be added for example after 3 decimals in the transaction value to keep the costs of the game minimal. So for example, if your code is 369, then you would send 0.000369 ERG to the platform address.

A quiz might not be the most engaging game, which might make it exploitable. However, it would be easy to develop as the first game. We would not expect many exploiters in the first event. In any case, the games should change and improve to counter possible exploits for future events.

**The Vision**

The pseudonymous on-chain identity governance allows for new on-chain governance models. Some projects might prefer democracy among community members. Others might want to pick those who are specialized in NFT projects. One could also experiment with alternative models, like sortition. It takes a random sample of a governing population to deliberate and vote on issues at hand ([Sortition - doing democracy differently | Brett Hennig | TEDxDanubia - YouTube](https://www.youtube.com/watch?v=-FsOH4KQp54)).

A community that gathers around a set of guiding principles has a strong foundation. For Ergo, those ideals are expressed in the Ergo manifesto ([The Ergo Manifesto | Ergo](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/)). Its spirit is that financial, governing and other blockchain enabled tools should be equally accessible by everyone. The Ergo blockchain itself is of course open for anyone, and does not make any value judgements. However, for the projects and people who do want to adhere to the spirit of Ergo, we provide a way to let the community govern.

As a platform that lists the community sharing a common ideal, the governance begins to exceed any singular project. People might not only think what is best for a particular project, but also reflect on how it affects the ecosystem as a whole. Through engagement people start to have more responsibility in the ecosystem. That resbonsibility is earned by contributing, which is in stark contrast to the power earned by money and popularity contests in the old world. What starts to emerge, is a nation. For this reason we propose the platform to be called Ergo Nation. Not a governance tool for singular projects, but a backbone of the Ergo ecosystem formed by people gathering around an ideal.

(I am aware that Ergo Foundation suggests not using “Ergo” in new project names. However, in case of such public good, we are proposing it anyway. If the platform fails to meet the vision, we will gladly rebrand to “Airdrop hunter pudding club”. We are also open to any other name suggestions)

**The next steps**

Setting up the on-chain infrastructure for this project is trivial. Some knowledge of minting NFTs and sending automated transactions back to registered addresses might be required. Nothing difficult at this stage. The bulk of the work would be to develop and test the game, and build the open source front end. For that it would be necessary to employ a developer, unless some volunteer shows up. Based on the discussion here, we could refine this proposal, and apply for funding from the good whale or dark fund.

We welcome contributions from developers and non-developers alike. Also interested partner projects are welcome to indicate their interest.

Further down the line, there could be additional module for pseudonymous governance forum, which allows deliberation.

---

### Post #2 — @Ergonaut_Alpha (2022-03-18)

Awesome solution.

The implementation of games can also be used to gather market data from the community. essentially like polling i would imagine

---

### Post #3 — @Vesi_Hiisi (2022-04-25)

Please continue discussion on this idea here: [Ergo Nation: Identity and Governance](https://www.ergoforum.org/t/ergo-nation-identity-and-governance/3560)
