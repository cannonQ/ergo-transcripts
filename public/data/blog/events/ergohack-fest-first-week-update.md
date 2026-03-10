---
title: 'ErgoHack Fest: First Week Update

  '
date: '2022-05-17'
author: Ergo Platform
tags:
- addresses
- amm
- bootstrapping
- box
- eip
- ergo-blog
- ergo-explorer
- ergohack
- ergoscript
- events
- full-node
- ido
- layer-scaling
- native-tokens
- oracle-pools
- sigma-rust
- spectrum
- transaction
category: blog
blog_tag: Events
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/ErgoHack-Fest-First-Week-Update
glossary_hits:
- AMM
- Addresses
- Bootstrapping
- Box
- EIP
- ERGOHACK
- Ergo Explorer
- ErgoScript
- Full node
- IDO
- Layer scaling
- Native tokens
- Oracle pools
- Spectrum
- Transaction
- sigma-rust
---

# ErgoHack Fest: First Week Update


> **Published:** 2022-05-17 | **Author:** Ergo Platform | **Tag:** Events | **Type:** blog

*We are already through the first week of ErgoHack Fest, and the teams are hard at work on their respective projects and proposals. This hackathon features eightteen different competitors! We have received updates from almost all of the teams, so with today’s blog, we will guide you through the work that those teams have accomplished so far. *

**Related concepts:** AMM, Addresses, Bootstrapping, Box, EIP, ERGOHACK, Ergo Explorer, ErgoScript, Full node, IDO, Layer scaling, Native tokens, Oracle pools, Spectrum, Transaction, sigma-rust

---

## Projects

### Azorus
The team behind Azorus is designing a web3 data intelligence suite that will provide ledger data for all UTXO blockchains. During the first week of the hackathon they worked on the outline for their prototype and designed a roadmap while setting their goals for the next couple of weeks. They reported that “ENG work has started,” with a completed wireframe and some mock designs. For their next steps, they will “sync full Ergo node, deploy [their] own explorer instance, set up dApp platform security, and begin assembling together the backend/frontend components.”

### Dark Lord of Programming - Ruby NFTs
For the first week, this team has been working on the development of Ruby Bindings. Going forward, they will finish that work for Sigma-Rust with the hope that they can be used in other projects. The goal of this project is to provide C Ruby bindings for Sigma-Rust and a Ruby NFT Minter.

### LETS Team
The LETS team is working on the design for a Local Exchange Trading System. This dApp would create a localized trading system where people list offers and needs, creating an economy around the exchange of services. During the first week of the hackathon, the applicants solidified their team and worked on smart contract design. For the rest of the hackathon, they will set goals, release the project's roadmap v1, whitepaper v1, identify development objectives, and get the dev node online. 

### Ergo Nation
Ergo Nation is a non-profit entity that is committed to Ergo’s first principles and ideals.
They have entered the hackathon to work on a project focused on decentralized ID’s and governance. During the first week of the hackathon they did a lot of brainstorming work. Going forward they will be working on “identifying ID addresses and their actions using explorer API.” In the interim, they are still looking to attract front end and game developers to work on the project. If you or someone you know is interested in this project, please contact the team through the Ergo discord.

### ErgoSphere
ErgoSphere aims to bring an ‘Umbrel’ type solution (see getumbrel.com) to Ergo and allow easy node setup. After a week of work, the team has reported that they are “building [the] framework for application management in Java and [have] started work on web interface.” Going forward in the competition, they will be focused on finalizing the framework while starting testing.

### MetaDEXfi
The team at MetaDEXfi are working hard at what they are calling “ErgoDex 2: Tokyo Drift.” Their work also appears to have something to do with centipedes. After the first week, the team has reported that they have “figured roughly out where to start; ran ergo-js-template, [and] currently figuring out how to include ergo-wasm* in next.js (ts version).” Over the rest of the hackathon, they plan to continue figuring out using ergo-wasm* in ts next.js and working with ergo-js-template.

### Swamp.Audio
Swamp.Audio is a digital music label formed in 2013 and they have a catalogue of over 40 music releases. They are looking to build a Layer 2 musician launchpad on the Ergo platform. Over the first week, the team behind the project has launched their site. They have also created the backend CRUD, developed an NFT mint flowchart, recorded their first podcast episode, and have invited their existing music label roster to test the beta. Going forward, the team will be integrating the Ergo node and will be creating a “user-only area to test the system before it goes public.” They are also exploring ErgoScript and smart contracts for implementing the content-pack NFT mint flow. Future goals in the hackathon also include exploring “oracle-based contract terms, oracle based sales interaction, YAML NFTs referencing ownership and conditions for locking NFTs into release agreements.”

### ColivingDAO
The team behind ColivingDAO entered ErgoHack Fest to facilitate the creation, development, and operations of an ecosystem of coliving projects all over the world. During the first week of the hackathon, the developer offered the following:

“I made progress mapping a ColivingDAO Ecosystem Diagram, and a Coliving Smart Contract. The ColivingDAO Ecosystem diagram shows the relationship between the humans, tokens and smart contracts within the system I aim to build. Whereas the Coliving Smart Contract Diagram goes into some detail of one contract. This is the prototype contract I hope to build over the next two weeks.”

For the remainder of the hackathon, the developer plans to build and explore executing the contract functionality on Ergo.

### dAppStep
The dAppStep team is working on developing interactive tutorials for dApp developers with nodejs/javascript stack. Their work over the first week included researching the right stack. They also deployed a prototype of an interactive tutorial as well as a  documentation site (dappstep.com + play.dappstep.com). Over the coming weeks, the team will add a transaction preview so that devs can better understand how a transaction will occur with the smart contract. They will also add “more contracts/mini dApps, preferably real life contracts to allow devs to use it as a starting point for their developments.”

### Ergrow
This project is combining a passion for Ergo and gardening. During the first week, the team “sprouted seeds, photographed and cataloged NFT media.” They have also been working on hardware for the dev box and it is almost completed. More to come for this project as it becomes available. 

### Oracle-Pools V2
This team has set a goal to implement oracle pool bootstrapping from a single command. If completed, they plan to run a pool on the testnet and implement some of the other transactions described in the EIP. After a week of work, the team is working on completing an existing task on the oracle pool: https://github.com/ergoplatform/oracle-core/pull/19. The developers have been getting familiar with the coding and some of the existing contracts. Going forward, they will proceed with working on the bootstrapping.

### SentientNFT
The SentientNFT team is building an ERG-EVM bridge/DEX with the goal of implementing an “AMM mechanism utilizing probability distribution function over a continuum in N dimensions (N=2: Token0, Token1).” They will use the PoW consensus on Ergo to secure the bridge. During the first week, the team reported identifying “the need for a truly decentralized DEX.” Their main focus is on the AMM DEX protocol and building a bridge to EVM (their focus is on building a bridge to Ethereum first). Some of the work they have outlined that needs to be addressed includes:
- “Building a DEX frontend to be more in line with Coinbase/uniswap formatting
- Develop the DEX token $SENTS contract on Ergo and Ethereum ($SENTS will have governance; one wallet = one vote)
- Develop the bridge contract
- Develop wERG ERC20 on ETH
- Develop bETH on Ergo
- Build LP factory contract
- Establish an AMM mechanism that improves off Uniswap V3. Uniswap V3 favors large bag holders who can move their LP positions with gas having less effect on their profit. This is not the way. We propose a quantized AMM liquidity protocol that utilizes probability distribution function over a continuum in N (2 {token 0, token1}) dimensions.”

<br> 

The team has already developed a basic UI and their goal going forward in the hackathon is to “work on the front end as well as get preliminary contracts written for the DEX.” They will also take the steps to produce a whitepaper “outlining the benefits of our novel AMM mechanism over other AMM mechanisms used in the crypto space.”
