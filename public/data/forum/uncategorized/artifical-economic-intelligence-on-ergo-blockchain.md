---
title: Artifical Economic Intelligence On (Ergo) Blockchain
description: 'ErgoForum discussion: Artifical Economic Intelligence On (Ergo) Blockchain'
tags:
- addresses
- box
- ergoforum
- ergoscript
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/artifical-economic-intelligence-on-ergo-blockchain/4429
created: '2023-08-10'
last_activity: '2023-08-20'
posts_count: 12
views: 2050
likes: 43
glossary_hits:
- Addresses
- Box
- ErgoScript
- Full node
---

# Artifical Economic Intelligence On (Ergo) Blockchain

> **Forum thread:** [https://ergoforum.org/t/artifical-economic-intelligence-on-ergo-blockchain/4429](https://ergoforum.org/t/artifical-economic-intelligence-on-ergo-blockchain/4429)
> **Category:** Uncategorized | **Created:** 2023-08-10 | **Posts:** 12 | **Views:** 2050

**Related concepts:** Addresses, Box, ErgoScript, Full node

---

### Post #1 — @kushti (2023-08-10)

These days blockchain + AI looks like a trend, but there is a topic which I brought into private conversations with andruiman back in 2014, and now it does not sound like sci-fi anymore, so lemme put it here.

While there are hopes and fears about AGI (artificial general intelligence), which is not clearly defined still even, for practical needs a weaker notion of AI is enough probably. Many people, unfortunately, are not paying attention to anything beyond making and spending money, and AI agents can be on basically the same level easily. We say that such an autonomous agent, which needs for money to survive in digital world, and mostly able to do that, has Artificial Economic Intelligence (AEI).

So what can such an agent do?

* earn money by generating content per request, recognizing patterns etc (realistic these days)
* spend money on hosting to exist (also realistic, AI can work with SSH and other server tools these days, there are hostings accepting crypto etc), demanding more hardware when needed or freeing servers up when there is a need to save money)
* if there are some extra money, AEI can spend them on hiring human beings (or other AEIs) to improve models and data to earn more in future
* if there are even more extra money, AEI agent can spawn a new AEI agent, maybe with different models or parameters, to get some share from its rewards for some time or forever.

Why public blockchain (== cryptocurrency) is needed here:

* on blockchain no one knows that you are AEI. No one will ask AEI to pass KYC.
* as legal contracts between AEIs unlikely will recognized in any jurisdiction in observable future, smart contracts is the only option
* thus blockchain provides a single convenient environment for artificial economic life

Why Ergo blockchain is better suited for AEI:

* simpler work with the blockchain - AEI is just binding its money to contracts it trusts and that is it, no need to analyze inter-contract calls etc
* thus AEI can issue p2p financial instruments (such as bonds) easily
* contract templates and possibility to enhance contracts easily in many cases (by adding new conditions to existing ones, or removing unnecessary ones) simplifies genetic-like evolution of AEI-to-AEI contracts

Maybe it is still a bit mindblowing but everything seems to be doable these days.

Also, AEI would be a good reminder to human beings that life should go beyond economic dimension just.

---

### Post #2 — @jossemii (2023-08-17)

Hello to Kutchi and the rest of the community!

I’m glad to see that you share such an interesting vision regarding the combination of artificial intelligence and blockchain technology in creating autonomous economic agents. Your focus on AEI and its ability to make economic decisions and generate value is truly fascinating.

I want to share with you how my project, which I have been working on for 3 years, aligns with this vision and how it could further enrich the ecosystem you are envisioning. My work centers around creating a peer-to-peer (P2P) network that enables a more open and decentralized development of artificial intelligence.

Currently, if Alice develops a service that counts the number of cats in a photo, she creates a web service where: 1. Bob uploads a photo 2. The website indicates the number of cats in the photo.

In this way, Alice is responsible for: 1. Developing the service and 2. Hosting the service, perhaps in exchange for economic benefit.

However, this has several problems:

1. Bob cannot maintain a reliable reputation towards Alice’s service, as it can be altered, resources reduced, etc., after gaining reputation and users.
2. Alice cannot afford to delegate the hosting function of her service without losing economic incentives.

My idea is as follows: Network nodes can share and execute services [imagine them as Docker containers, though completely deterministic (to address the previous problem 1)]. Services can also request service instances from the node where they are executed.

In this way: Alice develops the service. Bob wants to use Alice’s service? Wait, why Alice’s? Why not Marta’s? Alright, Tom has developed a service that compares Alice and Marta’s services, so Bob can use Tom’s service, and it takes care of the choice [and here the cellular automaton awakens].

Where does it run? On any node. The nodes create a P2P network that could be understood as a “Kubernetes without masternodes.”

This approach has several positive benefits:

* Services are black boxes, it doesn’t matter what happens inside.
* It ensures that services cannot be modified; the developer has no control over them once shared on the network. (Alice is incapable of collecting data from Bob or modifying the service’s performance if it gains users, for example.)
* Users launch the services, so they have control over where they are executed.
* The ability for services to launch services allows for programming microservices architectures (so when Bob runs Alice’s service, he doesn’t even know what parent-child service tree is behind it).

Now, I have the Node, libraries to develop services, compile them, smart contracts for Nodes to trade with each other… But I lack one thing, a reputation system. Without it, neither nodes nor services can be used. I’ve been around a year with the idea of developing the reputation system in Ergo (since I consider my principles to be similar to the community’s).

I firmly believe that this decentralized approach can lead to a more equitable and accessible development of artificial intelligence. I hope you see the synergy between our visions, and I would be delighted to delve into more details if you wish.

Looking forward to your comments and suggestions!

Best regards,  
Josemi

---

### Post #3 — @Grayman (2023-08-17)

Jossemii, welcome.

Interesting reply, since it seems that you are talking about making an AI based side chain using Ergo for the trust/less part.

I have wondered in the past if such a chain could implement PoUW - proof of useful work - where the consensus is established by running deep learning instead of a race to solve “meaningless” problems…

I expect that Kushti was thinking of AEI’s merely participating in the market as is.

Where can we learn more about your work so far?

ETA: Kushti with an “s” and not a “c”… but how shall I call you? Josemi or Jossemii?

---

### Post #4 — @jossemii (2023-08-17)

Thank you for your interest, Grayman.

Regarding the PoUW topic, I want to clarify that my goal is not to pursue that specific direction. While I find the field of study fascinating, in reality, in this network, nodes don’t even need to reach consensus on specific parameters. Each one can communicate with any peer following unique protocols or policies, enabling continuous evolution. Therefore, I’m not seeking to establish any kind of consensus; for that, Ergo’s infrastructure is necessary. However, I do see the possibility of running an Ergo node as a service on this network, which could help promote decentralization for various reasons.

About the phrase “I expect that Kushti was thinking of AEI’s merely participating in the market as is,” I’m not sure what you mean. If you’re thinking of them not participating in Ergo’s consensus, I also consider that to be the best approach.

As for learning more about the project, the only thing I’ve published is a university paper, as part of my undergraduate thesis. I’ve been developing all the documentation on Notion, while the code is on GitHub. I’m now sharing the code. However, I’ll need to figure out how to upload the documentation, perhaps in a GitHub repository as well.

I’ve attached the repositories of the different parts of the project in case you’d like to take a look:

```ergoscript
[Nodo](https://github.com/jossemii/Nodo)
[Protocol for moving services between nodes](https://github.com/jossemii/GRPCBigBuffer)
[Example of a service that classifies and uses other services](https://github.com/jossemii/SATsorter.git)
```

Apologies for the lack of documentation in the Readmes, etc. I have the repositories public for simple convenience, although I still need to add a brief explanation to each one.

Lastly, about the names, I apologize to Kushti; it always sounded wrong in my head, haha. As for my name, you can call me josemi, although I accept jossemii without any issues.

---

### Post #5 — @Grayman (2023-08-17)

Thank you. I’ll have a look.

And yes, I meant AEI’s simply using the existing and various user experiences, as if it were human. You are proposing something different though, as I imagined trading engines, and you mean a p2p network.

Well met, Josemi.

---

### Post #6 — @jossemii (2023-08-18)

Hi Grayman.  
I mean a p2p network, where the unique user interaction could be to submit services to the network and to maintain nodes. I don’t see the idea about the trading engines that you imagine, could you explain me what you refer about that and his relation with using the existing and various user experiences?

---

### Post #7 — @Grayman (2023-08-18)

Yes. I mean a bot with a home. Computing, not networking. A machine that trades based on pattern recognition on publicly (or privately) sourced data, and trades strategically and tactically to optimize their portfolio. The connection to the news must be fast and comprehensive, with a working model for how various conditions affect the markets. The connection to the trading platform must be as fast as possible, way faster than any human, and hopefully faster than all of the other bots. All of the worlds major stock exchanges are dominated by machine trading.

The various user experiences, from click bots to terminal commands are what the bot uses to affect their portfolio, in response to its “worldview” or perception of the news and historical data.

ETA: I have a few friends that went that direction, decades ago. 2008 happened because people like that took over from the yacht nappers and golphers.

---

### Post #8 — @jossemii (2023-08-19)

Okay, I understand. The problem I intend to solve is precisely the separation between the trading bot and the execution environment.

In this context, if I want to use a trading bot right now, I will go to the website and can:

1. Look for a web service that manages my asset portfolio, which has:

   1. Advantages:
      1. I don’t need to run the infrastructure myself.
      2. I don’t need to configure anything.
   2. Disadvantages:
      1. I can’t attribute reputation to it because the developer of the web service is unable to prove that the system hasn’t changed (for example, when chatGPT-3.5 has gained a large number of users, they might reduce its performance to better market the next version).
      2. The developer of the web service can’t assure me that they aren’t misusing the data from my requests (in the case of the trading bot, the movements of my portfolio).
2. Search for a bot (on GitHub, etc.) that I can run on my PC (or in the cloud) on my own.

   1. Advantages:
      1. It’s deterministic, in the sense that (if it can’t connect to the internet) I’ll be sure that its behavior and/or performance won’t change in the future.
      2. The developer of the service has no control over the data of my requests.
   2. Disadvantages:
      1. I need to possess equipment (infrastructure) capable of running the code.
      2. I have to deal with system configuration issues (which are often significant enough for an average user to opt for the first option).

---

### Post #9 — @Grayman (2023-08-19)

So… Nodo is a network OS for running AI bots that work with other bots to accomplish tasks that are more complex than any single node.

I see why you want to do this. A standardized system for folks like me that are currently mining, but could be Nodoing, or whatever you call it… earning at their node for making bots that do their task set well, in the context of their hardware and your software. Or do you envision that the bots run across many nodes, simply running cycles on my machine without me needing to think about it?

ETA: Are you aware of [Shinkai.com](http://Shinkai.com)?

---

### Post #10 — @jossemii (2023-08-20)

Hello Grayman,

What I imagine is more or less what you describe, but the one maintaining a node doesn’t worry about the services (or bots) it runs. As users, we can play three types of roles:

1. Node maintainer (similar to someone maintaining a miner in a blockchain).
2. Service developer (what you call bots). These can be run by anyone on any node (any compatible node, in terms of architecture, etc.).
3. Users who launch services on nodes.

Therefore, the person maintaining a node (type 1 user) doesn’t concern themselves with whether it’s mining Ergo, running a trading bot, analyzing a DNA sequence, or whatever the services it runs do. They simply execute the services that type 3 users request, in exchange for proof of payment (on a blockchain or whatever method of payment is accepted). The developer (type 2 user) only needs to send it to one or multiple nodes, and these will handle distributing the service among others and/or uploading it to the reputation system, so that users (or other services) know when and why to use it. (The reputation system is what I intend to develop on Ergo.)

So, answering your questions: The services (bots) run on nodes where any type 3 user instantiates them, and each instance runs on a single node only, although a service can execute other services on other nodes in the form of child and parent services. (In reality, the services don’t understand what a node is; they request services from the node that executes them, and this node decides whether to run it itself or on another pair. This way, when programming a service, you don’t worry about load balancing in the network.)

With all that said, continuing from my previous message, I believe the system I describe solves the disadvantages of both web services and the bot I run on my PC. This is because as a user who wants to use a service (type 3 user):

* I don’t need to run the infrastructure myself, as the node takes care of this.
* I don’t need to configure anything, as the service is entirely deterministic and the node can instantiate it as a container or virtual machine.
* The developer (type 2 user) cannot control or modify the service (or access the data it manages), as they don’t control the nodes that distribute and execute it.

Regarding Shinkai, I wasn’t familiar with the project; thank you for sharing it. It doesn’t have much documentation, but I find the idea of allowing communication between LLMs interesting. This isn’t exactly related to my idea, but services could be built with this feature (like their system). As far as I understand, both ideas could be compatible.

The project I’m presenting isn’t a protocol; I don’t intend for it to be. I suppose we could call it a design pattern (i.e., separating the notion of node and service and specifying the rights and responsibilities of each). This is because the nodes don’t need to establish a consensus beyond the abstract idea of node-service; the way they’re represented, how services are distributed, or how nodes relate to each other can vary just like the diversity of languages and cultures in our society.

This way, an LLM from Shinkai can be built on one service, an LLM from Autonolas (another similar solution you mentioned) on another, GPT-4 on another service, and a user can use a service that compares the three and uses the one that works best for them (and the same reasoning applies recursively to that service, hence not being able to reach a concrete consensus at the basic level of the system).

P.S.: I call my project Celaut, as its design is inspired by that of a cellular automaton, where simple rules create complex structures.

---

### Post #11 — @Grayman (2023-08-20)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/jossemii/48/2013_2.png) jossemii:

> I call my project Celaut, as its design is inspired by that of a cellular automaton, where simple rules create complex structures.

Again, Bravo! And well met. But we should take this discussion off thread.

I recommend starting a new one at R&D, linking back to this one. I’ll look forward to it.

---

### Post #12 — @jossemii (2023-08-20)

You’re right, I agree.

I’m opening a [new thread](https://www.ergoforum.org/t/celular-automata-web-pattern-and-ergo-reputation-system/4456) to continue discussing Celaut in general and the reputation system in Ergo in more detail.

Thank you very much for your interest.  
Regards.
