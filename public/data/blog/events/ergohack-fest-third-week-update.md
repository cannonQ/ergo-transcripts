---
title: 'ErgoHack Fest: Third Week Update

  '
date: '2022-05-30'
author: Ergo Platform
tags:
- amm
- bootstrapping
- box
- deco-education
- eip
- eip-12
- ergo-blog
- ergo-explorer
- ergo-graphql
- ergohack
- ergopay
- ergoscript
- ergoscript-context
- events
- full-node
- ido
- layer-scaling
- minotaur-wallet
- native-tokens
- nautilus
- oracle-pools
- ring-signatures
- token-id-rule
- transaction
category: blog
blog_tag: Events
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/ErgoHack-Fest-Week-3-Update
glossary_hits:
- AMM
- Bootstrapping
- Box
- DeCo Education
- EIP
- EIP-12
- ERGOHACK
- Ergo Explorer
- Ergo GraphQL
- ErgoPay
- ErgoScript
- ErgoScript context
- Full node
- IDO
- Layer scaling
- Minotaur Wallet
- Native tokens
- Nautilus
- Oracle pools
- Ring signatures
- Token ID rule
- Transaction
---

# ErgoHack Fest: Third Week Update


> **Published:** 2022-05-30 | **Author:** Ergo Platform | **Tag:** Events | **Type:** blog

*ErgoHack Fest has officially concluded its 3-week schedule and the adjudicators will now deliberate and award the various prizes to the winning teams. As the jury reviews each participant's work to help make their decisions, we provide a final update on the progress of each team from the final week. *

**Related concepts:** AMM, Bootstrapping, Box, DeCo Education, EIP, EIP-12, ERGOHACK, Ergo Explorer, Ergo GraphQL, ErgoPay, ErgoScript, ErgoScript context, Full node, IDO, Layer scaling, Minotaur Wallet, Native tokens, Nautilus, Oracle pools, Ring signatures, Token ID rule, Transaction

---

## Projects

### LETS
The LETS team is working on the design for a Local Exchange Trading System. This dApp would create a localized trading system where people list offers and needs, creating an economy around the exchange of services. During the third week of ErgoHack Fest, the LETS team has reported that they have completed contracts and the necessary testing. In addition, the off-chain ErgoPay code and frontend development is progressing nicely. They have also completed diagrams of transactions to help explain “the LETS creation and value transfer process.”

### SentientNFT
The SentientNFT team is building an ERG-EVM bridge/DEX with the goal of implementing an “AMM mechanism utilizing probability distribution function over a continuum in N dimensions (N=2: Token0, Token1).” They will use the PoW consensus on Ergo to secure the bridge. The team provided the following update for the end of ErgoHack Fest:

“This week our team was able to successfully fork Ergo and implement our token emission parameters. Moreover, we set up a static IP master Node on a raspberry pi 4G and were able to mine blocks. However, as of right now we have yet to run a test transaction. The plan is to run a test transaction tomorrow if we don’t get the opportunity to finish it tonight. Additionally, we were able to build a mobile raspberry pi that has similar specs to the Nintendo Switch (costing ~250$USD). This establishes proof of concept for a handheld blockchain gaming device that also works as a node overcoming two major obstacles in blockchain gaming: running a full client node on a small device and circumventing companies like Apple who actively disparage/ban blockchain games from their app store. These handheld gaming devices will not only add more nodes to the network (more peers => faster confirmations => more confirmation per min, thus increasing security) but will also put blockchain technology in the hands of the next generation in a fun and easy to understand fashion.”

### Ergo Family Banners
The team behind Ergo Family Banners aims to mobilize and utilize the existing Ergo community talent, thereby allowing all Ergonauts to actively engage in the building and support of the Ergo ecosystem, regardless of expertise. After the team's third week of work, they offered the following updates:

“Mining from the app with dynamic selections. Clocking - fans - power - temp limits - mapping outputs from both rig data and internal gpu data. Ability to control 3 fans and both drivers where the official nvidia software isn't even proper. Analytics from mining - etc. [Anyone] with a gpu can mine on my tool without hassle. Possibly a built in wallet by 12 pm MTN for quick mining yet you would need to point at a node of your choice [to] keep it modular and microservice based to give computation to mining."

### Ergo-graphql
For the third week of ErgoHack Fest, Captain Nemo (of Nautilus Wallet) reported that they reached “parity in terms of functionality with [the] current explorer API and did lots of code refactoring and [optimizing].” Going forward, they plan to “fine tune SQL queries and improve [the] caching mechanism to reach even better performance and response times.”

### ErgoSphere
ErgoSphere aims to bring an ‘Umbrel’ type solution (see getumbrel.com) to Ergo and allow easy node setup. In the final week of the hackathon, the developer reported that they continued to work on the updates and developments from the previous week. They have all of the necessary components but just need more time to continue to develop the project. 

### Multisig
The team behind Multisig is exploring the development of a new multi-sig wallet. Last week, they worked on completing the ability to sign a multisig transaction using a QRCode. They provided the link to the transaction for people to witness: https://testnet.ergoplatform.com/en/transactions/7bee9e557b81b47617ada7c8cd9e9dd6b9f89483bd4f00c2e38398ebf1d94f2e.

Following the successful transaction, they focused on developing a server for communicating data between wallets. The server is complete and was used to generate a multi-sig transaction. Following this, the developer will be releasing a video showing how to use multi-sig in Minotaur. 

### Night Owl
Night Owl is the team behind the creation and deployment of a decentralized casino on the Ergo Platform. During the third week of ErgoHack Fest, they were “able to finish roulette, complete two novel RNG models, and create a dapp connector react package.” They also created a live demo and a working swap feature. Going forward, the team will continue to develop and test their work, with the goal of aiming for a September launch.

### Tensile
The team behind Tensile is building a decentralized, open source and non-custodial trading platform. It will offer derivative contracts, as well as trading with leverage and market hedging for assets offered on the Ergo blockchain. For the end of ErgoHack Fest, they reported:

“In the final week, we presented our results in DeCo's final Layman and Ergoscript Course. @ahrnsetido was so kind to provide all the code for the Future derivative contract that is shown in the second presentation.”

After the hackathon, the developer reports that they will continue to develop Tensile but is going to take time to further develop their skills with ErgoScript. 

### Oracle-Pools V2
This team has set a goal to implement oracle pool bootstrapping from a single command. If completed, they plan to run a pool on the testnet and implement some of the other transactions described in the EIP. The team behind this project had an extensive list of updates to report after the final week. They submitted the following:

“Made lots of code contributions this week. I completed the bootstrap operation [Bootstrap command](https://github.com/ergoplatform/oracle-core/pull/32) as well as the reward extraction operation ([Extract reward(tokens) commands](https://github.com/ergoplatform/oracle-core/pull/36)). I also made ancillary improvements to the codebase: [Mock datapoint source in `test_subsequent_publish_datapoint`](https://github.com/ergoplatform/oracle-core/pull/39) and [Remove the data point value from PoolCommand::PublishDataPoint(i64)](https://github.com/ergoplatform/oracle-core/pull/35). Finally I have some draft PRs open on the repo for [Transfer oracle token command](https://github.com/ergoplatform/oracle-core/pull/37) and [Remove side-effects from `main`](https://github.com/ergoplatform/oracle-core/pull/41). I was unable to get a working testnet pool working in time for the deadline though. I have 2 working ergo nodes on testnet, but have been having trouble with the node rejecting my requests to sign transactions (`request content was malformed`).”

Even though the hackathon is complete, the developer is planning to continue to build out Oracle-Pools V2 with the assistance of greenhat (another developer). The next goal is to get a working pool operational on testnet. 

### Swamp.Audio
Swamp.Audio is a digital music label formed in 2013 and they have a catalogue of over 40 music releases. They are looking to build a Layer 2 musician launchpad on the Ergo platform. During the third week, the team reported that they “accomplished all of the minimum viable goals'' that were laid out at the start of the hackathon. They have built out a new website and added “a dynamic backend system allowing artists to upload/control media.” They also reported that they are “setting up the server for object caching, flat file (no-db) functionality using yaml files as indexers, [and] setting up both fiat payment functionality (snipcart) and ergo (ergopay) to be able to purchase music.”

Their next steps include creating a discord server, implementing the tokenomics, “[utilizing] other open source APIs to scrape artist bio data and generate waveform images for uploaded media.” Ultimately, they plan to turn the “system into a streaming platform for IPFS.”

### dAppStep
The dAppStep team is working on developing interactive tutorials for dApp developers with nodejs/javascript stack. For the final week of ErgoHack Fest, the team reported that they “published [the] NFT rent contract with the whole flow and [completed] 4 different transactions to interact with the contract.” After the hackathon, they will work on “moving the code of tx building to an external library” while continuing to work on ErgoScript.js - this will allow them to work on a “mock contract in js project to debug, troubleshoot, and test.”

### Ergo Nation
Ergo Nation is a non-profit entity that is committed to Ergo’s first principles and ideals.
They have entered the hackathon to work on a project focused on decentralized ID’s and governance. During the third week of the hackathon, the team reported that they successfully tested the first event and have “prepared materials to run the first event about a week after Ergohack ends.” Going forward, they will start to hold events and “equip people with IDs.” They will reach out to other projects that might be interested in the ID list and will try to “attract [a] large enough community to make Ergo Nation self-sustaining and fully decentralized.”

### Dark Lord of Programming - Ruby NFTs
This team's entry for ErgoHack Fest will work on the development of Ruby Bindings. After their third week of work, the team “finished sigma_rb gem with complete documentation.” The next steps include using it in “a very simple app.”

### Azorus
The team behind Azorus is designing a web3 data intelligence suite that will provide ledger data for all UTXO blockchains. For the conclusion of ErgoHack Fest, the Azorus team created a prototype demo that they have already shared with the Ergo community (https://www.youtube.com/watch?v=SD8bDf-nxTQ). After the hackathon, the team plans to “build the MVP version, seek funding, research integration with other UTXO blockchains and soft outreach to their communities.”

Although the official festivities for ErgoHack Fest are over, we still have to announce the winners! Make sure to keep an eye on Ergo’s social media channels for all the details when the prizes are announced.
