---
title: "ErgoHack VI: Updates \n"
date: '2023-02-27'
author: Ergo Platform
tags:
- addresses
- box
- chaincash
- collateral
- ergo-blog
- ergo-explorer
- ergohack
- ergopad
- ergoraffle
- ergoscript
- events
- fleet-sdk
- full-node
- lilium
- native-tokens
- nautilus
- ring-signatures
- sigmao
- sigmausd
- spectrum
- token-id-rule
- transaction
category: blog
blog_tag: Events
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/ErgoHack-6-Updates
glossary_hits:
- Addresses
- Box
- ChainCash
- Collateral
- ERGOHACK
- Ergo Explorer
- ErgoPad
- ErgoRaffle
- ErgoScript
- Fleet SDK
- Full node
- Lilium
- Native tokens
- Nautilus
- Ring signatures
- SigmaO
- SigmaUSD
- Spectrum
- Token ID rule
- Transaction
---

# ErgoHack VI: Updates 


> **Published:** 2023-02-27 | **Author:** Ergo Platform | **Tag:** Events | **Type:** blog

**Related concepts:** Addresses, Box, ChainCash, Collateral, ERGOHACK, Ergo Explorer, ErgoPad, ErgoRaffle, ErgoScript, Fleet SDK, Full node, Lilium, Native tokens, Nautilus, Ring signatures, SigmaO, SigmaUSD, Spectrum, Token ID rule, Transaction

---

As [ErgoHack VI: Cypherpunk Finance](https://ergohack.io/) enters its adjudication period, the [judges](https://ergoplatform.org/en/blog/Meet-Your-Judges-ErgoHack-6/) have the unenvious task of picking winners from a group of very skilled developers and visionaries. Prizewinners will be chosen based on a criteria of innovation, quality of code, and completed implementation. With a prize pool of 18k $SigUSD and 300K $ERGOPAD (plus a [successfully funded raffle](https://ergoraffle.com/raffle/show/b312c002a0b1671a0089fabc2d1a028e5938d46b1b2180d7e480e760526408ce) for community choice awards worth an additional 1,000 ERG) on the line, let's take a look at what the contestants have accomplished thus far. 

### Analog Ergo

This project aims to use cryptographic primitives (well established, low level algorithms) as the basis for a cross-chain peer-to-peer marketplace. It will enable users to set and agree to listing prices and other parameters in a private and fungible manner, without the involvement of intermediaries.

**Update from the team:** _Commendable progress has been made towards creating a decentralized atomic order book on Ergo. Proof of concept Solidity contracts have been [successfully tested](https://goerli.etherscan.io/address/0xc5a8ab3a59627120e02041c9783cf8dc20a79f43#code). Initial ErgoScript implementation looks promising with [testnet transactions](https://tn-ergo-explorer.anetabtc.io/en/transactions/a9d32f4b38350301b09a64f0847370a9fe871395c49874c64caa59fb7f56c4f1) having been completed, and contracts currently need to be updated to reflect elliptic curve differences between Solidity and ErgoScript. _

### ChainCash

With an insatiable need to continually improve and build new innovations on Ergo, powerhouse developers Kushti and Scalahub have decided to submit a proposal to ErgoHack VI (while excluding themselves from the prize pool). The goal of ChainCash is to create a peer-to-peer monetary system, utilizing [spender-signed currency](https://www.ergoforum.org/t/chaincash-a-spender-signed-currency-on-ergo/4015) with decentralized issuance and an elastic supply.

**Update from the team:** _With ErgoScript contracts complete, mainnet transactions have been successfully tested [creating reserves](https://explorer.ergoplatform.com/en/addresses/2yJgWs3wJGHYECtp9p4kzg4DUxpY283jvsRLgfUs5QFYSqnQZctqBYpZr4khWY3t6kURo3mbYJBPgPW3UqJQ9zpLN4fQcSWayjPrQUtD5iGD6e4oS8JWFn57ovg9Sh8V1q4Nfr3aazA9mszLt57cEAMfxRznENG1jUFdrUqtjG9C2h8bmwP2iEoKCGYnEnh87M9jPk7QgdjPQvydczCxeEu4aX6wck6Cv7RYwYC5E89qzVH6R7EteHvfy3AuLWuR1z1VsUB6DWP4Egn6k7AyXtZT18PVP7RfroPmSAGBE7AJcFbH8ZEgKd8F4ztL6hf1sxLoZQbw6pVH212HhwjiXBQdEnNTjqcXdC3X2iqWm5Fojmr9q1mAuySozFX82v4UR2zdqbNCbg2bRJaKiZBDKkQoL1eHPwK85Ag), as well as [issuing](https://explorer.ergoplatform.com/en/addresses/QfHohuFF4u3mRHnxqCcwPFMB8fqgseztg7jfKy4VivdgW2vCGNHLANAcPXhJLC6941BNnqhf14eLPoiDuYQRheJu6s8SMZRJjAmWQqgra4awgHWXybKNyrST1XqZMZb9BdFmfmq3cnyYULGxqnyhWCxeW95c19PWwaUWuaDYx4YXa1WJnTkzusM5ks6Ku1SFbHZ9kZd8JaKR5CW7BS7mxkYfWew5HNCQo2QuJaoXupdUdWtHHkKrJ3iYRkfESsGHVV7xGQ2PSChisVBpdBsuiaeAEFF619ELGMfct4ihWc785ozS8oAfkoiyx7eDBN8iQcEbNeat8K2gJmuKZUspWXcKRVVDn4zgbBQfpSSavui7VEKB5TM4opraHg6uvPPB15eS98EQkAMnVqY9Y2) and [spending notes](https://explorer.ergoplatform.com/en/transactions/307696f33cc8b03ac731616f025cb33555f854ddb3ab58cfd8af884c59225cd1). A to-do list of what’s still needed for overall project completion, and an early whitepaper draft have been made available for [reference](https://github.com/kushti/chaincash)._

### Ergo Stats

Ergo Stats is creating an iOS application that will allow users to more conveniently monitor blockchain statistics on mobile devices.

**Update from the team:** _The [ErgoStats iOS app](https://github.com/ach2swift/ErgoStats) has been completed and submitted to the Apple App Store for review. TestFlight launch has also been requested so that eager Ergonauts can start to experience Ergo statistics in the palms of their hands._

### Ergo Tizen

Initially using Samsung’s open source TizenOS, Ergo Tizen aims to allow the operation of Ergo nodes on any number of smart devices, such as televisions, refrigerators, smart phones, watches, et cetera.

**Update from the team:** _A basic, yet functional dashboard has been created in TizenOS to demonstrate the viability of running an Ergo node on smart devices. “[Ergode](https://github.com/ross-weir/ergode)” is successfully operating on a TV emulator, communicating with its testnet peers. A video demonstration can be viewed [here](https://clipchamp.com/watch/wDZ9t0Hq3tp)._

### Explorer-UI 

The team at Spectrum Labs has thrown their hat into the ring with a proposal to update the Ergo explorer design. Their proposal aims to simplify the visual representation of the UTXO model to improve the user experience and increase ecosystem adoption.

**Update from the team:** _Providing clear [examples and feedback](https://twitter.com/_yashablack/status/1628066492322312193) of their vision, Spectrum is offering a number of improvements to the existing Ergo explorer experience, including a simplified transaction list, a more intuitive interface, and dark mode._

### Lithos

The Lithos team will be using this ErgoHack as an opportunity to showcase the collateralization side of their [Lithos Protocol](https://github.com/Lithos-Protocol/LitePaper). In doing so, they hope to provide a low risk opportunity for lenders to earn yield on their ERG by providing collateral to mining pools, while promoting increasingly decentralized block production in the process.

**Update from the team:** _Collateral contracts have been completed. Also, the ability of miners to directly insert necessary [transactions](https://tn-ergo-explorer.anetabtc.io/en/transactions/7efbc232622a0db6c602042a20a2022486a3b757e22fd1cc5fecb0ba98680f21) into blocks has been successfully demonstrated._

### Lilium

Lilium seeks to create decentralized NFT minting, distribution, and sales infrastructure capable of being seamlessly integrated into business applications and programs.

**Update from the team:** _A Lilium V1 MVP (minimum viable product) has been delivered, with UI design complete and contracts audited. Front end work continues._

### Netnotes

Proposing a method of base level file communication, [Netnotes](https://github.com/networkspore/Netnotes/blob/main/Netnotes%20-%20ergohack%20VI.pdf) is working to enable “hybrid interaction” between a web browser and an Ergo node (while still allowing the node to maintain its boundaries). 

**Update from the team:** _An initial framework has been established and the process of integrating a user interface has begun. The web application being used for testing will be the [Arcturus](https://github.com/networkspore/arcturus) project, a tabletop role-playing game wherein assets can be traded._

### OpenBoard 

The goal of OpenBoard is to create an uncensorable message board of sorts, allowing authors to pin boxes of text on the Ergo blockchain. Once operational, messages will be updateable with a simple transaction. Using an app, messages will be fetched from an Ergo node and displayed locally.

**Update from the team:** _Sometimes life has plans for us that inconveniently coincide with ErgoHack. Though OpenBoard won't be submitting anything further for review during this event, progress will continue and we look forward to future developments._

### Sigma’O

The goal of [Sigma’O](https://github.com/ThierryM1212/SigmaO) is to create a permissionless and fully hedged smart contract, effectively allowing for call and put options on Ergo tokens.

**Update from the team:** _Sigma’O has delivered a working product and entered [public beta](https://www.sigmao.cc/)! UI improvements are ongoing._

### SigmaStamp

An idea born during the very first ErgoHack and resurrected for Cypherpunk Finance, SigmaStamp is building open source tooling to enable Ergo users to add timestamp verification to their created works and documents. The process of “stamping” will insert file data in the form of a hash into the blockchain and provide the “stamper” with an NFT for verification purposes.

**Update from the team:** _We were able to complete the fully working Proof of Concept of our application. We were also able to make a brief explanation on the "proof of concept" wiki which explains how our application works and how it can be used. The technology itself is completed. However, the UI experience, and the whole "explain like I'm five" explanation, needs to be provided (wiki needs to be much more extended) in order for ordinary computer users to be able to understand all of the security assumptions and guarantees of this project. Feel free to try the application at:_ www.sigmastamp.ml/

### Sigma Subscriptions

Making use of [FleetSDK](https://github.com/fleet-sdk/fleet), Sigma Subscriptions intends to build a framework that will allow for the creation, management, and integration of subscription services on Ergo.

**Update from the team:** _[Sigma Subscriptions](https://github.com/cornbelt-dev/sigma-subscriptions) has finished the contracts necessary to perform all actions related to subscription management, as well as created a simple Fleet plugin and frontend to demonstrate functionality._

### Single-TX-Swap

Late entrants to ErgoHack VI, this team is building a trustless escrow service aimed at Discord users who wish to swap NFTs. Making use of [multisig wallets](https://ergoplatform.org/en/blog/Ergo-Multisig-Wallet-What-is-it-and-How-to-Create-One/), users will be able to view one another’s wallet contents and construct trades that, if agreed upon, will execute a swap in a single transaction (without the need for smart contracts).

**Update from the team:** _A public beta of [Single-TX-Swap](https://www.single-tx-swap.com/) has been made available. Interacting with this version requires a pre-release download of [Nautilus Wallet](https://github.com/capt-nemo429/nautilus-wallet/releases/tag/v0.8.0-alpha.0)._

### SIPS

ErgoHack VI judge Joseph Armeanio is contributing to the fun as well (while excluding himself from the prize pool). Numerous _SigmaUSD Improvement Proposals_ have been gathered together, and his submission will put forward a multitude of potential improvements that aim to improve resiliency and better balance the protocol’s economics

**Update from the team:** _The [discussion](https://github.com/ergoplatform/sips/discussions/17) around SigmaUSD Improvement Proposals continues with various potential improvements and methods of implementation being collected and considered._

### What’s Next?

Although the official contribution period has concluded, plenty of excitement still lies ahead as winners are to be decided. So be sure to keep an eye on Ergo’s social media channels for the latest announcements!
