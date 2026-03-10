---
title: Mandatory Dapp Fee
description: 'ErgoForum discussion: Mandatory Dapp Fee'
tags:
- addresses
- dev
- dexy
- ergoforum
- ergoscript-context
- full-node
- gluon
- native-tokens
- ring-signatures
- sigmanauts
- sigmausd
category: forum
forum_category: Development
source: ergoforum
source_url: https://ergoforum.org/t/mandatory-dapp-fee/5110
created: '2025-03-01'
last_activity: '2025-03-16'
posts_count: 8
views: 213
likes: 11
glossary_hits:
- Addresses
- Dexy
- ErgoScript context
- Full node
- Gluon
- Native tokens
- Ring signatures
- SigmaUSD
- Sigmanauts
---

# Mandatory Dapp Fee

> **Forum thread:** [https://ergoforum.org/t/mandatory-dapp-fee/5110](https://ergoforum.org/t/mandatory-dapp-fee/5110)
> **Category:** Development | **Created:** 2025-03-01 | **Posts:** 8 | **Views:** 213

**Related concepts:** Addresses, Dexy, ErgoScript context, Full node, Gluon, Native tokens, Ring signatures, SigmaUSD, Sigmanauts

---

### Post #1 — @c8e4 (2025-03-01)

## The Race to the Bottom: Why Missing UI Fees Hurt Builders

Decentralized protocols like Dexy Gold, SigmaUSD, and Gluon Gold create a race to the bottom by lacking UI fees. This makes it risky and unpredictable for developers to invest time in building high-quality interfaces. Instead of fostering sustainable development, it incentivizes one-time token sales, which often result in value loss for users and ecosystem-wide devaluation.

### Token Sales vs. UI Fees

* **Token Sales:** Provide an immediate influx of funds but are unsustainable, leading to price crashes, loss of trust, and short-termism.
* **UI Fees:** Enable a fair, ongoing revenue model for developers, ensuring continuous improvement while aligning incentives for open-source collaboration.

### The Cost of Closed Source

* **Closed source leads to more closed source.** Developers shift towards stealth development, avoiding public collaboration to protect their work.
* **Missing UI fees discourage ecosystem growth.** Without sustainable funding, quality interfaces stagnate, and innovation slows down.

### Why Open P2P Apps Can’t Hide Premium Features

Unlike websites where premium functionality can be hidden on the server, open P2P apps must expose their features publicly. This means that without built-in UI fees, developers have no reliable way to monetize, pushing them towards proprietary solutions or unsustainable funding models.

---

### Post #2 — @Richi (2025-03-05)

UI fees are not a sustainable concept. If you are a competitive DeFi user, you want to minimize your fees. In trading, equal conditions are essential—if one trader pays lower fees, they gain an advantage.

In Ergo, we face a paradoxical situation where developing smart contracts and backend systems is cheaper than developing the frontend.

Ideally, fees should be embedded into smart contracts, creating a level playing field for all users of a dapp.

I don’t mind paying some UI fees to support developers on Ergo, but in the long run, we need to:

1. Lower the cost of frontend development as well as more open source
2. Transition to a commercial model where the project is developed end-to-end by a single team, with fees integrated into the smart contract structure

---

### Post #3 — @c8e4 (2025-03-05)

![](https://avatars.discourse-cdn.com/v4/letter/r/6f9a4e/48.png) Richi:

> UI fees are not a sustainable concept.

UI fees are pointless. Even if some contract has 10% UI fees, those can be forwarded as additional output to the user.

> Ideally, fees should be embedded into smart contracts

Yes, that is a natural next step. Gluon Gold did this. Here is how it played out so far:  
One group developed Gluon Gold.  
An outsider that wants to build a new UI. Now he needs to make a deal with that Group.  
→ permissionless innovation is killed/impossible.

Base layer defi fees are a bug and not a feature. People on cardano are starting to figure it out: <https://x.com/__fallen_icarus/status/1887193404804673794>

What are your thoughts on neutral base layer defi protocols?

---

### Post #4 — @Richi (2025-03-06)

How about the protocol developer includes a fee for protocol usage, which is sent to a multisig / DAO address? After that, the protocol dev is tendering a fixed-cost contract for UI development from a reputable team. Essentially, the protocol developer manages a treasury that supports UI development, exchange listings, and other expenses. If they do not want to manage the treasury, they can sell DAO tokens or airdrop them to protocol users

if SigUSD had 0.1% protocol fee and basic governance it would be much-much better protocol than now.  
Maybe it is still worth considering since we control keys. You get fixed cost payment for developing ErgFI. SigUSD protocol users get airdrop.

---

### Post #5 — @c8e4 (2025-03-06)

> You get fixed cost payment for developing ErgFI.

So far the burn is $30k collected fees about $300. Let’s say community pays that amount. How quickly does it run out of funds?  
Community doesn’t pay $30k - not viable to build nice things.

From experiments like polkadot we learned that you can’t pay people to care.

So what incentive do builders have to take 99% loss on their capital investement beyond ideology. We don’t rely on ideology when we design stress resistant systems. We disintermediate trust.

The only viable game-theory i have come up with so far:

* base layer defi protocols 0% fee for network effect
* **protect and enforce 100% open source stack** (you can’t build closed auditable p2p apps anyway)
* auditability → security
* increased agency and freedom for users
* solves “examples” problem for builders (everything is a realword example, just git clone and run it)
* allows to run applications on p2p hardware → more active ergo nodes
* solves “marketing” - turns developers into developer advocates
* makes the system noob-friendly (mid/skilled devs have no issue to reverse and copy)
* equal opportunity for all skill levels to fork each others work

Unlike the GNU movement, where people sacrifisied years of their life and got nothing from it besides some insider recognition. Fixed supply crypto allows a buy-in and benefit.

---

### Post #6 — @jossemii (2025-03-09)

" **protect and enforce 100% open source stack** (you can’t build closed auditable p2p apps anyway)"

That is precisely my goal with Celaut… to be able to build closed software but auditable. As you mentioned in the case of the GNU movement, I don’t see that open-source software always provides the right incentives in every case.

In Bene, for example, I defended the idea of not using a server, so all the code, in addition to being open, runs on the user’s computer. But not in all cases can development happen with the same incentives. If your work is open, how do you expect to generate a benefit equivalent to the real development cost? Anyone can take your code and replicate it. I understand and share that free software brings benefits, but I don’t think defending 100% open-source is a good idea.

---

### Post #7 — @c8e4 (2025-03-12)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/jossemii/48/2013_2.png) jossemii:

> In Bene, for example, I defended the idea of not using a server

A server is fine, if the architechture is such that each user can run his own. But the need for a server is only there if it enhances node capabilities or does adds additional state for perfomance.  
But you are correct almost everything can be done inside the dapp. if it’s a dapp. otherwise it’s a fancy website.

> If your work is open, how do you expect to generate a benefit equivalent to the real development cost?

It’s a chicken and egg problem. For financial benefit the production cost must be low. For low production cost of dapps there have to be plenty of financially viable open projects.

Does Open Code enable more people to innovate and collaborate as much faster pace? **Yes**

Do closed Dapps protect from copy? **No**  
The rumor that it somehow helps is spread by low skill individuals, who want to keep other low skill beginners out. Effectively creating a barrier to entry.  
The irony behind that is that the work of those low skills was fully enabled by open source apps that came before them.

Now to the question, so what prevents from simply copy paste?  
Answer: people in the community who are active on social media. It’s the job of the Sigmanatus to protect their own proclaimed values. And call out grifts.  
But somehow the Sigmanatus are destructive the open dapps movement. They think that they can just fund some more open dapps and it will be fine.

Funding open dapps helps. But it doesn’t come even close to offset the damage that they case by their support of closed source forks.

The problem is not that new low skills are coming and creating closed products. The problem is that people endorse and fund this behaviour, instead of educating new people on why these values are in place :  
([Mission Statement - Sigmanauts](https://sigmanauts.com/mission/))

* Decentralization
* Open-Source coding
* Long-Term Focus & Adaptability
* Education & Empowerment
* Honesty & Transparency
* Collaboration
* Inclusivity
* Accountability

---

### Post #8 — @jossemii (2025-03-16)

I agree that closed-source code is not completely resistant to copying, but it is undoubtedly more resistant than open-source code. Denying this would be ignoring a fundamental difference between the two approaches.

From my perspective, neither model should be moralized or demonized, as both have their pros and cons. Open-source fosters innovation, collaboration, and trust, while closed-source can enable sustainable business models and protect certain development investments.

If open-source is truly competitive in quality and innovation speed compared to closed-source, then the latter simply won’t be able to compete. Users will naturally prefer open solutions due to their transparency and zero cost, which might even push some closed projects to open their code to stay relevant.

However, if the community focuses on demonizing closed-source without ensuring that open-source can match its quality and functionality, it will end up embracing self-destructive moral principles. History has shown this in cases where societies rejected trade or private property for ideological reasons, only to harm themselves in the process.

There are cases where open-source makes more sense, especially when developers seek reputation and contribute without expecting direct financial compensation. And that’s great.

But there are also situations where trust is not a critical factor, users are willing to pay for a closed solution, and developers can make a living from their work. And that’s also great.

In the end, what matters is that both models can coexist without prejudice, allowing each project to choose the approach that best fits its needs and those of its users.
