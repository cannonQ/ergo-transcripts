---
title: 'LIT: Long-term Investment of Trust'
description: 'ErgoForum discussion: LIT: Long-term Investment of Trust'
tags:
- addresses
- box
- eip
- eip-4
- ergoforum
- ergoscript
- ergoscript-context
- native-tokens
- paideia
- registers
- singleton-/-state-nft
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/lit-long-term-investment-of-trust/4358
created: '2023-05-25'
last_activity: '2023-05-31'
posts_count: 9
views: 638
likes: 20
glossary_hits:
- Addresses
- Box
- EIP
- EIP-4
- ErgoScript
- ErgoScript context
- Native tokens
- Paideia
- Registers
- Singleton / State NFT
- Transaction
---

# LIT: Long-term Investment of Trust

> **Forum thread:** [https://ergoforum.org/t/lit-long-term-investment-of-trust/4358](https://ergoforum.org/t/lit-long-term-investment-of-trust/4358)
> **Category:** Uncategorized | **Created:** 2023-05-25 | **Posts:** 9 | **Views:** 638

**Related concepts:** Addresses, Box, EIP, EIP-4, ErgoScript, ErgoScript context, Native tokens, Paideia, Registers, Singleton / State NFT, Transaction

---

### Post #1 — @lgd (2023-05-25)

## Introduction

I would like to preface that I am no expert in the intricacies of finance. Nothing in this post is profound, I just wanted to propose an idea I have had and was curious what the community might think of it. This is just a high-level overview and even though the logic is not that complicated, I currently do not have time to write the ErgoScript contracts.

Learning about the basics of the financial system has been quite underwhelming. I suppose this is one reason why I am here. I found it rather silly that the stock market is essentially a glorified game of musical chairs, and I have personally come to the conclusion, born out of confusion and frustration, that there can really only be one legitimate claim of ownership in a portion of a company: a right to its profits, either as an employee or an investor. Anything else is really just a game, and there is no glory or triumph in timing when the music stops - play stupid games, win stupid prizes.

As has previously been proposed and implemented in the Ergo ecosystem is the idea of profit sharing, which is great. However, this usually requires there to be a project token, which although we would all like to claim is not a security, our behaviour would sometimes suggest otherwise. For example, the all too frequent Twitter posts of token charts with the adage “token X is doing it’s thing," fervently waiting for exit liquidity. Now, do not get me wrong, I do have a sense of humour, but I don’t find this particularly funny, only sad. The token is not sentient, it’s not doing anything, someone else just bought or sold it.

In the spirit of Ergo and its mission of being a tool for economic empowerment, I want to propose an alternative to pure project tokens, to serve both as an investment for buyers and a method of raising funds for businesses. It makes use of the idea of smart-contract locked tokens, and could replace project tokens, or more practically used as an addition to them in order for raising development funds. I like the term “dynamic token,” which only means that a token is stored in a box guarded by a contract serving as a proxy representation for the token. The data in the box can change, but the token’s representation, the meaning inscribed to it, does not change. “Static token” would just refer to traditional native assets in a box, but unrelated to its contract or other contents, like a picture NFT or a token used as a singleton token identifier in a protocol.

## Overview

At a high-level, we want to combine the idea of profit-sharing with that of a traditional company share, minus the game of musical chairs. I would like to call this tool a long-term investment of trust (LIT). Trust is involved since we must ultimately put ours in the people working at the company to create and provide the service they claim to want to create and provide.

## Transactions

### LIT Issuance Tx

The LIT tokens, after being minted following EIP-4, will be sent to a box guarded by the LIT Issuance contract, which lets the investors buy tokens or sell tokens back.

### Buy LIT Tokens From Company Tx

The company now can sell their LIT tokens, each for a fixed unit price, and interested investors can buy them. Instead of the tokens being sent to a box with the buyer’s PK address, they will be sent to a box guarded by the LIT contract, containing the PK in one of the registers so the box can be directly associated with the buyer.

#### Inputs:

1. LIT Issuance
2. Buyer Proxy

#### Outputs:

1. LIT Issuance (recreated minus purchased LIT tokens)
2. Treasury (containing funds acquired for development from the buyer)
3. LIT box (containing the purchased LIT tokens)

### Profit Sharing Tx

Once the company raises money and wants to begin the first round of profit sharing, a corresponding Profit Issuance box holds the funds to distribute. Through a transaction, the correct amount of funds, based on the percentage of total LIT tokens the investor has, would be given.

#### Inputs:

1. Profit Issuance
2. LIT box

#### Outputs:

1. Profit Issuance (recreated)
2. LIT box (recreated)

### Redeem Tx

When the investors no longer want to hold onto their LIT tokens, they can sell them back to the LIT Issuance box, redeeming the funds stored in their box while their LIT tokens are returned to the LIT Issuance box. These returned LIT tokens can then be purchased again by another buyer.

#### Inputs:

1. LIT Issuance
2. LIT box

#### Outputs:

1. LIT Issuance (recreated)
2. Buyer PK box (with rewards from profit sharing)

#### To Sell State

Alternatively, suppose their are no more LIT tokens available or too few left, a LIT investor can place their LIT box up for sale so they can be purchased directly by another buyer. In order to do this, the state of the LIT box will be changed to a “sell-state” and the investor may also determine a sell-price. These would be parameters set in the registers of the recreated box.

#### Inputs:

1. LIT box (in the lit-state)

#### Outputs:

1. LIT box (recreated in the sell-state with updated registers)
2. Buyer PK (with rewards from profit sharing)

#### Buy From Seller

Once the LIT box is in the sell-sate, these boxes can be purchased by any valid PK buyer. The recreated LIT box will contain a new PK in its register, effectively transferring ownership of profit rights, and the original LIT investor receives the extra rewards from their list price.

#### Inputs:

1. LIT box (in the sell-state)
2. New Buyer Proxy

#### Outputs:

1. LIT box (recreated in the lit-state)
2. Seller PK (with extra rewards from list price)

### Remarks

I have neglected the design details of what one would actually need to implement the ErgoScript, but this should be a good enough outline.

### Advantages

1. No musical chairs game.
2. LIT tokens represent true ownership in profits of the business. This can perhaps serve as a better incentive for employees and investors, since profit is a more direct indication of a company’s success. An employee need not worry about stock price if they decide to hold their LIT tokens, only the true performance of the company defined by the quality of its products and services.
3. Investors need not worry about the stock price, no more “technical analysis.” There is no expectation that the price of the asset increases over time since it only represents an ownership right.
4. A simple way of raising funds for development.
5. This may or may not be a security.

### Disadvantages

1. This may or may not be a security.
2. Implementing this requires a LIT ui for minting, buying, redeeming, and selling.
3. No good way of tracking a specific box within a wallet, a LIT add-on to mobile wallet would be needed for example.
4. Not as potentially lucrative as traditional stocks, but perhaps more safe and sound.
5. Not clear how tokenomics should be handled to account for LIT tokens. In this model, it would make sense for the company to own a majority of the tokens.
6. Not obvious how viable this model is, how much of the profits can be given away every quarter while still making the business run properly?
7. Can only process one LIT box at a time with the design outlined above.

### Conclusion

Like I mentioned at the beginning, this is just an idea, probably not that novel, or even a good one. I personally would think this to be a less speculative way of investing in a company, with returns potentially more consistent, and no fear of “losing my money.” I am curious what anyone else might think of it.

---

### Post #2 — @Grayman (2023-05-29)

![](https://avatars.discourse-cdn.com/v4/letter/l/6bbea6/48.png) lgd:

> there can really only be one legitimate claim of ownership in a portion of a company: a right to its profits, either as an employee or an investor. Anything else is really just a game

Stocks determine ownership and control in a legal sense. Not typically for you or me, if we’re talking **public** companies… But in my own company I have a majority of shares and you can guess who gets to be the CEO as well as President. You may be underestimating the importance of governance and control in evaluating the worth of a stock. In my case it might have made the stock worthless!

![](https://avatars.discourse-cdn.com/v4/letter/l/6bbea6/48.png) lgd:

> In the spirit of Ergo and its mission of being a tool for economic empowerment, I want to propose an alternative to pure project tokens, to serve both as an investment for buyers and a method of raising funds for businesses.

Bravo.

![](https://avatars.discourse-cdn.com/v4/letter/l/6bbea6/48.png) lgd:

> Once the company raises money and wants to begin the first round of profit sharing, a corresponding Profit Issuance box holds the funds to distribute.

“Profit” needs more definition here, since raising money is hardly profitable… it takes a lot of work and then those folks expect a return on their investment. If you are talking about customers paying, then who decides when it has become profitable?

![](https://avatars.discourse-cdn.com/v4/letter/l/6bbea6/48.png) lgd:

> ### Advantages
>
> 1. No musical chairs game.

Please expand on what you mean by this analogy.

![](https://avatars.discourse-cdn.com/v4/letter/l/6bbea6/48.png) lgd:

> * A simple way of raising funds for development.
> * This may or may not be a security.

Simple is filing a declaration for an S-Corp or LLC at the closest department of the secretary of state… or whatever the equivalent process is for your province. That gets you limited liability, a degree of IP protection, and a hook to attach to all of the conventional business necessities (banking, insurance, employment, facilities, and customer credibility).

I’m not sure I fully understand what you are proposing, but I feel confident that it is a security.

![](https://avatars.discourse-cdn.com/v4/letter/l/6bbea6/48.png) lgd:

> ### Disadvantages
>
> 1. This may or may not be a security.

Definitely a security, but this is not necessarily a disadvantage. See my response above for why. I think in the crypto space there is a strong anti-tax/regulation stance, which is understandable. On the other hand, consider that standards are not securities. Linux is not a security. The Ergo Platform is not a security, neither is Cardano. These are open source systems. But companies formed to exploit these systems, with the purpose of making a profit, will need tax and regulation.

Regulation shouldn’t be scary, because it clarifies responsibilities. Standards are good. Taxes are always scary, but we as a community better start thinking about that one.

![](https://avatars.discourse-cdn.com/v4/letter/l/6bbea6/48.png) lgd:

> * Implementing this requires a LIT ui for minting, buying, redeeming, and selling.
> * No good way of tracking a specific box within a wallet, a LIT add-on to mobile wallet would be needed for example.

These seem like implementation and design problems, and you did well to mention them since they also present attack surface.

![](https://avatars.discourse-cdn.com/v4/letter/l/6bbea6/48.png) lgd:

> * Not as potentially lucrative as traditional stocks, but perhaps more safe and sound.
> * Not clear how tokenomics should be handled to account for LIT tokens. In this model, it would make sense for the company to own a majority of the tokens.

I’m not clear on the model, so it is hard to say how lucrative. I very much appreciate the idea of investing in an idea and specific team, and I appreciate the notion that the investment should be long term, based on trust in both the mission and certain people (which makes it a security). Usually this is called angel funding. In the good old days it was a small business loan.

I am trying to understand your bigger picture, rather than the specific inputs and outputs.

Again, I think you should be commended for rethinking the corporate financial structure, but I don’t fully understand the big picture consequences of what you propose.

The way that you have expressed this idea is definitely new to me. But I certainly have though about how to use Ergo/Cardano as a platform to replicate and automate the standard corporate ownership mechanisms attached to a way that it would simplify filing and proving compliance. The current system sucks.

I’ve thought about starting with something like GnuCash and bringing double-entry accounting systems to the blockchain, maybe work with the ErgoPOS folks and Zengate.

I heard your interview on sigma prism and I enjoyed your perspective. Keep doing what you think is right, you are the type the world needs. Change it.

---

### Post #3 — @lgd (2023-05-30)

Hey, thanks for replying. I will try to address each of your questions in order as they appear in your response.

1. I agree about the importance of governance with companies and this model would still work in that regard, since the amount of LIT tokens would also correspond to the amount of control one would have in terms of voting. This would only work if setup as a DAO for example with Paideia.
2. Yes, I realize the sentence is confusing. I should not have said “Once the company raises money” but once the company starts making money from customers. As you mentioned, a challenge is determining what counts as profit and deciding what percentage of the profits should be distributed. This would probably require some sort of threshold as well. Perhaps a better term would be excess cash, or whatever amount above what is necessary for the business to survive. This is the part of the idea that is somewhat similar to a dividend. These values could be something that is part of the project tokenomics.
3. What I meant by the “musical chairs” is that the current stock market works by people buying a share in a company and hoping that overtime the value of the share will increase. But the value only increases if more people buy shares. So only the people who sell their stocks make a profit while those still holding on to them at the end do not. And because they did not sell, their stocks are worth a lower amount. The analogy being that stocks are like the chairs and people selling at the right time is when the music stops and people try to get a seat. The people still holding on to their stocks are the ones remaining standing. So people are really only making money by taking from someone else who bought the shares after they did. This is dumb. I tried to inject some humour with this idea by calling it LIT, which you can find the definition here: [Urban Dictionary: lit](https://www.urbandictionary.com/define.php?term=lit)
4. I agree about the benefits of regulation, that’s why I put this point in the advantage and disadvantage section, since it would actually provide clarity but might not make some crypto people happy.
5. Like I mentioned at the beginning, there is nothing super novel about this idea other than the fact that it is a means of investing in a company whose monetary benefit comes not from profiting off of other people who simply bought shares after you did. It would not be as “lucrative” because due to profit sharing, the “gains” only come from the money the company actually makes, which, to me anyway, intrinsically seems more fair/logical. In some sense, this is a way of implementing on the blockchain private shares in a company without public markets, so not really that novel ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=12 ":slight_smile:") Since the tokens are locked in a contract, they cannot be sold directly, they must follow the rules of the contract - the tokens can only exist in a box with the specific LIT contract and not someone’s PK address.

Again, thanks for reading the original post and providing your feedback. I hope this answers your questions.

---

### Post #4 — @Grayman (2023-05-30)

Excellent, and I cannot give proper time now because it is family movie night.

You rock dude. I read it all and only felt uncomfortable about a little! But I still only feel comfortable about a little too!

I will return, but regarding item 3, Erg has no idea… we’re only on Kucoin, ffs! My spellcheck underlined that.

---

### Post #5 — @Grayman (2023-05-30)

1. Yes, LIT instead of shares, I get that. But the mechanics of how these are issued, advertised, sold, and resold, are all the bees knees. It could never stop at one hive.
2. The issue of profit plagues all systems I have studied with any care, including the one I work in… the issue that we don’t usually discuss, is expenses; Charles Hoskinson recently brought this up, elliptically. This is a fucking mess.
3. LIT will be subject to the same utterly stupid market dynamics if you put it into a fully tradable market. It will be something that can purchased at a premium based on seller, with custody managed by the middle party (to even make it happen). The point of long term trust is limited ownership, whether that leads to payouts or exhaust. Either way it gets sold for a loss or a gain.
4. Markets depend on participation. Government trumps economy. War definitely forces those truths, and diminishes the exceptions. Extralegal economies will always persist with the favor of the dominant economy, until it is the last challenger. Every cop is a criminal, and all the sinners are saints. The end result is one truth for settlement, and many bets for intermediaries. I am not interested in extralegal economies, but rather forcing the dominant paradigm into deterministic finance and free will for development.
5. Well, that first sentence makes no sense. People buy and sell shares for many reasons. Sometimes it is profitable, other times it is not. There are market balancing mechanisms, but you want that timescale extended, for obvious reasons on both the investor and project manager’s interests. I get that, and that is how private equity works, but it is quite personal, and not usually subject to a blockchain.

What you are discussing is decentralising private equity, and that make me itchy! All I will say for now is that this is clear cut cold cuts in the event that the folks realize it works.

---

### Post #6 — @Grayman (2023-05-30)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/grayman/48/1259_2.png) Grayman:

> I am not interested in extralegal economies, but rather forcing the dominant paradigm into deterministic finance and free will for development.

Well, talking about making no sense!

I meant free spending, but transparent history.

To me this concept is inevitable for any standard platform, regardless of mixing devices., or other tricks. There needs to be some general traceability, like bitcoin, to make the system viable.

Now what kind of traceability? That is a harder question, but also quite solvable. My preferred method would be rededication to the local community.

This is all new.

You are in a better position than most to impact the changes that happen, because you understand the consequences, so be brave and demand what is necessary.

---

### Post #7 — @lgd (2023-05-30)

Hey thanks for the thoughtful feedback, it helps me to think about it more clearly.

Yes, as you said it is sort of like decentralized private equity. Which I think would be cool to fully flesh out and implement. One thing I like about DAOs is the governance aspect but what I don’t like is that people with your tokens can decide the product direction based on proposals. This is good depending on the application, but other times I would rather have full control of the direction of the project/company while still letting people have some ownership and voting abilities, like with companies and traditional share/equity.

What I outlined in the first post, when someone buys LIT tokens, it does not increase the price of other LIT tokens. And when someone sells their LIT tokens it does not decrease the price of all other LIT tokens. The trade occurs in a p2p way. If the tokens were just normal project tokens that you held in your wallet then yes you could sell them on a secondary market and all the speculation games would apply. But because they must remain guarded in a box with a special contract, a secondary market only exists if a user wishes to transfer ownership of the box to another user, whereby they can set their own “list” price for the tokens. Since trades occur p2p, no speculation games can occur other than you putting your faith in the company and that the rewards from profit sharing will benefit you in the future. So there is no penalty for holding your share of LIT tokens in the long term, even if everyone else sells. In fact, if everyone else sells back to the LIT Issuance box, and you were the only holder of LIT tokens, you would get 100% of the profit sharing rewards.

Also, every time someone buys LIT tokens from the LIT Issuance box, the money goes directly to the company, so they don’t need to sell their tokens to raise development funds at the beginning or in the future as well. There is flexibility in this model too, since this could be a fixed amount for all LIT tokens or could be a tiered model too. Actually, something I had not considered, is for the p2p case, it could be added in the protocol to include something like a royalty fee that would go to the company if ownership is transferred to another user instead of directly being sold back to the LIT Issuance box.

This would be as you said decentralized private equity, but where anyone could theoretically be an investor.

---

### Post #8 — @Luivatra (2023-05-31)

If the LIT issuance is done to raise funds for development you can assume these funds get used (at least partially). So what guarantee is there that the Redeem tx can be fulfilled?

---

### Post #9 — @lgd (2023-05-31)

Yes I should have clarified that better. You would only be able to redeem once profit sharing begins. So what they are “redeeming” is their profit sharing reward. What should also be added in this tx is the option to redeem without giving up ownership of the LIT tokens.
