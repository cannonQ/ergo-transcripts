---
title: 'ErgoHack Fest: Second Week Update

  '
date: '2022-05-24'
author: Ergo Platform
tags:
- addresses
- amm
- autolykos
- bootstrapping
- box
- deco-education
- eip
- ergo-blog
- ergo-explorer
- ergo-graphql
- ergohack
- ergoscript-context
- events
- full-node
- ido
- layer-scaling
- native-tokens
- oracle-pools
- ring-signatures
- sigma-rust
- transaction
category: blog
blog_tag: Events
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/ErgoHack-Fest-Second-Week-Update
glossary_hits:
- AMM
- Addresses
- Autolykos
- Bootstrapping
- Box
- DeCo Education
- EIP
- ERGOHACK
- Ergo Explorer
- Ergo GraphQL
- ErgoScript context
- Full node
- IDO
- Layer scaling
- Native tokens
- Oracle pools
- Ring signatures
- Transaction
- sigma-rust
---

# ErgoHack Fest: Second Week Update


> **Published:** 2022-05-24 | **Author:** Ergo Platform | **Tag:** Events | **Type:** blog

*ErgoHack Fest is well into the third week now, and our competitors are hard at work on their projects. With today’s news updates, we provide a breakdown of the updates for each competitor. If you missed the ErgoHack Fest Week 1 Update, you can read it here*

**Related concepts:** AMM, Addresses, Autolykos, Bootstrapping, Box, DeCo Education, EIP, ERGOHACK, Ergo Explorer, Ergo GraphQL, ErgoScript context, Full node, IDO, Layer scaling, Native tokens, Oracle pools, Ring signatures, Transaction, sigma-rust

---

## Projects

### Ergo Family Banners
The team behind Ergo Family Banners aims to mobilize and utilize the existing Ergo community talent, thereby allowing all Ergonauts to actively engage in the building and support of the Ergo ecosystem, regardless of expertise. As this is there first update since the beginning of ErgoFest Hack, they have offered the following:

“Working around permissions and handling nvidia so far with mining and everything streamed into async outputs. Fans controlled from app. Everything wired up and working. Need to find a way around permissions without a shell script permission escalation hack. Have begun my wallet end for my pkgd product. Still need to include an L2 swap to be paid out in L2's which will then swap to ADA as well.”

Going forward, the developer has reported that they will add more modules for future implementations, as well as finish up issues with the wallet, deliver MVP (using .bats at the moment), safety killswitches, and much more. They will work on Radeon next week and “design wallet end and package everything into a decent MVP design for release 0.0.0.”

### LETS Team
The LETS team is working on the design for a Local Exchange Trading System. This dApp would create a localized trading system where people list offers and needs, creating an economy around the exchange of services. For their second week update, they are reporting that they are working on guard scripts (https://github.com/arkan294/LETS-backend/tree/scripts-draft/scripts) and that basic tests have been completed for some of those scripts. Their next steps include working on the off-chain code, integrating with ScalaTest and making a basic test for all of the scripts.

### ErgoSphere
ErgoSphere aims to bring an ‘Umbrel’ type solution (see getumbrel.com) to Ergo and allow easy node setup. After a second week of work, the team is reporting that the Web interface is nearly complete and that they are finishing up the node management backend. Going forward, they will work to finish the web interface and “test projects (explorer, mixer, offchain bots…) with ErgoSphere.”

### SentientNFT
The SentientNFT team is building an ERG-EVM bridge/DEX with the goal of implementing an “AMM mechanism utilizing probability distribution function over a continuum in N dimensions (N=2: Token0, Token1).” They will use the PoW consensus on Ergo to secure the bridge.

For their second week update, the team has reported that they have “forked ergo and parsed through the code to determine which variables needed to be changed to implement PoLW. [They] also made the github repo more amenable to contributors.” As they continue in the competition, they will launch the master node to attempt a test transaction, as well as deploy a PoLW autolykos2 mining algorithm that allows miners to mine ERG and SENT. It is their goal to develop “a fully decentralized exchange that is secured by PoW. Since Ergo already has governance built into the block chain we will implement the Ergo Governance model to essentially make the DEX a DAO.”

### Oracle-Pools V2
This team has set a goal to implement oracle pool bootstrapping from a single command. If completed, they plan to run a pool on the testnet and implement some of the other transactions described in the EIP. During their second week, the team reported having made good progress. They merged https://github.com/ergoplatform/oracle-core/pull/19 and have “almost completed writing the chain-transaction that mints the necessary tokens for the oracle-pool bootstrap (just need to create the refresh box).” As they head into the third week of ErgoHack Fest, they will work on completing “the oracle bootstrap, run a pool on testnet and time permitting, work on the reward extraction described here: https://github.com/ergoplatform/oracle-core/issues/24.”

### Tensile
The team behind Tensile is building a decentralized, open source and non-custodial trading platform. It will offer derivative contracts, as well as trading with leverage and market hedging for assets offered on the Ergo blockchain.

The team's developers offered the following update after their second week of the competition: “My DeCo group partners and I are preparing our final presentations that explain the chosen derivative contracts. There is some code to back it up, but not much.” Work is still quite preliminary at this point for the project. 

### dAppStep
The dAppStep team is working on developing interactive tutorials for dApp developers with nodejs/javascript stack. Following their week two work, the dAppStep team has been working on more complex contracts and they have released a blog/tutorials website: dappstep.com. They also “have a first version of a transaction visualization for better understanding how transactions have to be built.” Their next steps will be to improve the overall experience, including feedback/compilation errors, cheat sheet, best practices and more.

### Ergo-graphql
The Ergo-graphql team has “finished the schema mapping and added some security guardrails. Going forward, they will “add complex queries and caching support.”

### Swamp.Audio
Swamp.Audio is a digital music label formed in 2013 and they have a catalogue of over 40 music releases. They are looking to build a Layer 2 musician launchpad on the Ergo platform. The team provided extensive updates on their work over the second week. Here is what they reported:

“Front end UI for version 1 completed, video update filmed and shared - Developing the artist dashboard now. Filmed other demo video showing the NFT album/asset package minting flow. Submitted PR to EIP004 proposing YAML files as a new type of NFT to work with serialized data referencing ownership/hierarchies of multiple objects and people. Began developing the 'starter kit' for open sourcing the platform. Began working on tokenomics research for the layer two 'managed' distribution model. Discussed with Capt. Nemo the possibility of wallet app recognizing YAML NFT content and displaying it as a hierarchy of folders and files from the yaml data. First episode of 'The Green Room' podcast edited and uploaded, submitted to podcast aggregators and is available on spotify, google podcasts, podchaser, sticher, and soon apple podcasts. Created high level company goals list and timeline for post-ergohack activities. Bringing on a front-end UI dev specializing in javascript and potentially a marketing manager.”

As they enter the final week of the hackathon, the swamp.audio team has a lot that they plan to execute in their plans:

“Setup server object caching for optimal performance. Setup DNS ddos mitigation/protection. Finish Artist Dashboard user area. Integrate ergo payment using public node, setup full node internally if time allows. Draw out more flow charts for YAML NFT use cases (displaying and organizing data on the layer two through flat file CMS, all benefits of JSON plus more, etc).”

### Ergo Nation
Ergo Nation is a non-profit entity that is committed to Ergo’s first principles and ideals.
They have entered the hackathon to work on a project focused on decentralized ID’s and governance. So far, the Ergo Nation team has developed an event framework, built out a game (for the first event), and has begun work on outlining the instructions for participants. Entering the third week of ErgoHack Fest, Ergo Nation will begin testing the game and complete the instructions. They will also announce their first event and “prepare code for getting the ID list from explorer API after the first event.”

### Azorus
The team behind Azorus is designing a web3 data intelligence suite that will provide ledger data for all UTXO blockchains. Their second week report included the following information:

“Launched multiple full nodes and explorer instances to handle future heavy loads on data querying and retrieval. Began building frontend UI components and storing Coingecko market data to be used on the Azorus platform. Started research on UTXO blockchains and how to integrate their infrastructure into the future vision of Azorus platform.”

For the final week of ErgoHack Fest, the Azorus team will “complete the assembly of all primary UI components, connect web interface with backend data infrastructure, [and] run [their] first Azorus report!”

### Dark Lord of Programming - Ruby NFTs
This team's entry for ErgoHack Fest will work on the development of Ruby Bindings. After their second week, they have announced that they “finished Ruby bindings to Sigma-Rust and open sourced the repository.” They then “packaged it up into a 'Ruby Gem' so other Ruby projects can use it.” Part of their work included drafting the installation instructions. For the third week of ErgoHack Fest, the team will “add documentation to Ruby bindings [and] open source another ruby Project that uses the Ruby bindings.”

### Multisig
The team behind Multisig is exploring the development of a new multi-sig wallet. So far in the competition, they have worked on creating the wallet, while also deriving a new address for each completed wallet. For the final week, they will work on completing the signing process “using file transfer between wallets.” Following that, they will “create a message passing server to communicate between wallets.”
