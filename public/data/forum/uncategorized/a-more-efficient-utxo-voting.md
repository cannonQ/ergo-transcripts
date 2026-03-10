---
title: A more efficient UTXO voting
description: 'ErgoForum discussion: A more efficient UTXO voting'
tags:
- addresses
- box
- data-input
- ergoforum
- ergoscript
- ergoscript-context
- lp-tokens
- native-tokens
- registers
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/a-more-efficient-utxo-voting/3144
created: '2021-12-20'
last_activity: '2022-03-23'
posts_count: 13
views: 1587
likes: 20
glossary_hits:
- Addresses
- Box
- Data input
- ErgoScript
- ErgoScript context
- LP tokens
- Native tokens
- Registers
- Transaction
---

# A more efficient UTXO voting

> **Forum thread:** [https://ergoforum.org/t/a-more-efficient-utxo-voting/3144](https://ergoforum.org/t/a-more-efficient-utxo-voting/3144)
> **Category:** Uncategorized | **Created:** 2021-12-20 | **Posts:** 13 | **Views:** 1587

**Related concepts:** Addresses, Box, Data input, ErgoScript, ErgoScript context, LP tokens, Native tokens, Registers, Transaction

---

### Post #1 — @anon_real (2021-12-20)

Let’s say we have a voting contract or a joint-spending contract similar to [here](https://www.ergoforum.org/t/a-simpler-collective-spending-approach-for-everyone/476). In this setting voters have some specific token that allows them to have a specific “voting power”. For example, if there are a total of `100` of token `x` and Alice owns `15` `x` then she has `15%` of the entire voting power.

We’d like to have an efficient way of voting. Voting is a general concept and many applications can be reduced to it, e.g., joint-spending, changing parameters of some dApp, etc.

Without the loss of generality, let’s consider the joint-spending case where there are some funds protected by a joint-spending contract similar to the idea [here](https://www.ergoforum.org/t/a-simpler-collective-spending-approach-for-everyone/476). How can we allow Alice to participate in a voting while:

* There may be many proposals for her to decide and vote on.
* Tokens that she owns may not be specifically issued for joint-spending and voting and she may want to keep them in her wallet because of other functionalities, e.g., LP tokens or governance tokens.

When we consider these realistic assumptions, we won’t be able to use naive approaches for voting.  
For example, one naive approach is for Alice to put his tokens in some special contract that is showing that she has voted “yes” for some proposal. But how long does she have to wait for other voters to cast their votes and a decision be made for the proposal for her tokens to be released? What if she wants to participate in other proposals as well? What if she needs to have the tokens in her wallet for some reason?

In this post, I propose a solution to the outlined issues above. Particularly, I propose a solution which:

* Let’s Alice keep her tokens in her wallet all the time and hence allowing her to participate in as many simultaneous votes as she desires while having the luxury of tokens not leaving her wallet!
* Preventing Alice from double voting. Double voting is a side effect of not keeping her tokens in a special contract that makes sure she doesn’t use them multiple times.

This solution is a combination of already found design patterns [here](https://www.ergoforum.org/t/ergoscript-design-patterns/222/16) and [here](https://www.ergoforum.org/t/ergoscript-design-patterns/222/23). Here is the procedure:

* Alice creates a transaction where the voting tokens (`x` in the example above) are in the first input.
* Alice can simply decide the number of tokens she wants to include in the input which shows how much of her power she wants to use for voting.
* In that transaction, Alice issues a token which by definition will have the same ID as the box containing the voting tokens in the first input.
* Additional information may be placed in the registers of this output and it may also be protected by some special contract. These details are application-dependant and do not influence this proposal.
* Now it can easily be proven to the voting contract that Alice has voted for a specific proposal:
  + Provide the issued token’s box as data input and the spent input (that contained the voting tokens) to the contract.
  + With this information, the contract can first make sure that the vote is legit using [here](https://www.ergoforum.org/t/ergoscript-design-patterns/222/23) and also can know the number of cast votes.
  + The voting contract also needs to make sure that this is not a double vote. This can be easily achieved by providing the current Alice’s unspent box(es) that contains her voting tokens as data inputs. Then the contract can check the spent box’s address is the same as the boxes that currently have the tokens. This only can be achieved if Alice keeps the tokens in the same address as she used for issuing the token. This requirement in practice is not limiting if the change address is used for issuing the token.

Some details are left out but the main idea should be clear! The limitation of this approach is that the final transaction that is collecting votes is going to be big if we have many voters. This remains to be solved!

---

### Post #2 — @Ergosmergo (2021-12-20)

Will there be a maximum voting power amount? assuming a user has a lot of ERG it might open up recipe for abuse by washing out smaller holders if Alice holds to much voting power. While I do think users with more tokens should hold a little more voting power then user with a low amount of tokens. I do also think everyone should have equal voting rights no matter how large or small the holdings.

---

### Post #3 — @anon_real (2021-12-21)

That is application-dependent. Having equal voting power is a special case of what I’ve outlined here.

---

### Post #4 — @sandor (2021-12-21)

Does Alice need to keep the tokens in her box? What if Alice votes, then Alice sells half of her tokens?

---

### Post #5 — @anon_real (2021-12-21)

As long as Alice keeps the tokens in her address, this method works fine.

---

### Post #7 — @esot321c (2022-01-13)

You mention that alice can choose to use a portion of her voting power, then it is tracked based on spend box’s addresses. Does this change if alice then sends the tokens somewhere, or to herself? Could alice send all her tokens to another address after and then vote again with them? If that’s the case, the vote could require that the tokens aren’t transferred before the vote is counted, or it is disqualified.

When someone sends a transaction from their wallet, often a lot of their assets are included in the new UTXO. Would this cause a transaction to break the tracking of the votes if the tokens were including in a tx accidentally?

---

### Post #8 — @anon_real (2022-01-13)

As long as her tokens are in the same address, this method works. That is why the address should be chosen to be her change address. This way, the only way tokens end up in a different address is when Alice specifically sends them to another address.  
So, it is ok for the tokens to end up in a different UTXO (i.e., box) but they must be protected with the same address for her vote to be valid. This, in particular, is trying to prevent Alice from using her tokens multiple times for the same vote. However, it is quite inefficient and I am thinking about optimizing it.

---

### Post #9 — @esot321c (2022-01-13)

On some platforms, to make a vote you have to “stake” your tokens on that vote. They are locked there until the vote time-frame is complete. That seems like it would drastically simplify the process. Often, a governance token is separate from a utility token

For example:

[docs.lovelace.world](https://docs.lovelace.world/lace-token/governance)

![](https://app.gitbook.com/share/space/thumbnail/-Mgg0g1iY5L9eov3K1ik.png?color=%23A44EED&logo=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-Mgg0g1iY5L9eov3K1ik%252Ficon%252F8Uh1tPNGHwnIWitlo0hw%252Flogo_lovelace_icon.png%3Falt%3Dmedia%26token%3D844dd35b-cf75-428f-8c7c-2fc55f3ec7ec&theme=none)

### [Governance](https://docs.lovelace.world/lace-token/governance)

---

### Post #10 — @esot321c (2022-01-13)

There are also various types of voting mechanisms to consider when developing this:

### Single choice voting

Voters can allocate their entire voting power to one choice

### Approval voting

Voters may select multiple choices, and their voting power is spread equally between each choice.

### Quadratic voting\* (default)

![](https://ergoforum.org/uploads/default/original/2X/1/19022847d38261d27004ca30a7d6ea0afa3ea015.png)
[wtfisqf.com](https://www.wtfisqf.com/)

![](https://ergoforum.org/uploads/default/optimized/2X/c/c6d1c1ce368e77eaebbe661747812296e72426a2_2_690x362.jpeg)

### [WTF is Quadratic Funding?](https://www.wtfisqf.com/)

Quadratic Funding (QF) is a crowd-funding mechanism that amplifies available resources by inviting community members to make donations (big or small) that act as votes on where to allocate funds. The broader the support, the bigger the match!

Quadratic voting uses a calculation to optimize voting power so that if 10 donors donate $1 each, that will count for more than if 1 voter donated $10. This works well for DAOs to prevent wealthy whales from controlling all the decisions.

“[The] number of contributors matters more than [the] amount funded. This pushes power to the edges, away from whales & other central power brokers, [which] creates more democracy in public goods funding decisions! ![:unicorn:](https://ergoforum.org/images/emoji/twitter/unicorn.png?v=15 ":unicorn:")”

### Ranked choice voting (IRV)

Voters rank their favorite option as first choice and then indicate their second and additional back-up choices in order of preference. Votes are counted in a series of rounds to ensure that as few votes as possible are wasted.

In each round, one of two things happen: either a winner is found, in which case all votes in excess of the requirement to win will be redistributed to each voter’s second choice, or no winner is found and the lowest voted candidate is removed, in which case those voter’s votes are redistributed to the next choice on their list.

The election threshold (how many votes required for victory) is determined mathematically based on the guarantee that that candidate can’t lose.

Eg: three candidates to be elected would make the winning threshold 25%, since if one candidate had more than 25% of the vote, it’s impossible for three other candidates to get more votes than them, because that would add up to more than 100% of the votes. With four candidates, it’s 20%, and 17% for 5, and so on.

Any candidates that exceed the election threshold will be elected that round. Any votes above that threshold go to the totals of the next candidate on those voter’s lists.

If no candidate has more votes than that threshold, the one with the fewest votes is removed and the next candidate on those voter’s lists is used in the next round of counting.

[![](https://ergoforum.org/uploads/default/optimized/2X/5/51c299cbd0b4f160c302ee78c9bd753fad8b80b4_2_624x297.png)

827×394 36.7 KB](https://ergoforum.org/uploads/default/original/2X/5/51c299cbd0b4f160c302ee78c9bd753fad8b80b4.png)

### Weighted voting

Each voter may choose how to spread voting power across any number of choices. This voting method was first introduced by Float Protocol with <https://scattershot.page> (a fork of Snapshot).

---

### Post #11 — @anon_real (2022-01-13)

The aim of this proposal is exactly to avoid staking for the reasons explained in the post.

---

### Post #12 — @glasgowm (2022-03-11)

Seems it would be a lot simpler with staking and an internal solution to allow votes on multiple proposals. Not seeing much benefit to being able to keep them in your wallet (why would you use LP tokens or governance tokens as DAO tokens instead of issuing a new one?)

---

### Post #13 — @anon_real (2022-03-23)

In the simplest case, if someone wants to vote on two different things with staking that is not possible. You will have to stake your voting tokens and won’t be able to use them for anything else until the voting process is finished.

---

### Post #14 — @polkownik (2022-03-23)

Straight road to break 51% rule and give few big minners voting oportunity on everything.
