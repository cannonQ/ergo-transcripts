---
title: Tokenomics and Emission
date: '2021-03-31'
author: Ergo Platform
tags:
- autolykos
- core
- eip
- emission-schedule
- ergo-blog
- ergo-foundation
- fair-launch
- native-tokens
- storage-rent
- token-id-rule
- transaction
category: blog
blog_tag: Core
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/emission
glossary_hits:
- Autolykos
- EIP
- Emission schedule
- Ergo Foundation
- Fair launch
- Native tokens
- Storage rent
- Token ID rule
- Transaction
---

# Tokenomics and Emission

> **Published:** 2021-03-31 | **Author:** Ergo Platform | **Tag:** Core | **Type:** blog

**Related concepts:** Autolykos, EIP, Emission schedule, Ergo Foundation, Fair launch, Native tokens, Storage rent, Token ID rule, Transaction

---

Overview

Ergo’s native token is called ERG and its emission schedule may be of keen interest to users and miners of the platform. Ergs also have some unique characteristics which are highlighted in this post. Most basically and leaving out technical details, Ergo has a 

**Key Points**

- The Ergo block interval is 2 minutes
- All tokens are mined through an ASIC-resistant Proof-of-Work (“PoW”) algorithm called Autolykos. Therefore, there were 0 Ergs in existence at launch of mainnet as there was no ICO nor pre-mine. 
- Erg has a strictly limited supply of 97,739,925 Ergs.  
- The amount of Ergs going to the Treasury comprised a total of only 4,330,791.5, or 4.43% of the total monetary base, and was completed in just 2.5 years.
- There will be no additional inflation and the Erg monetary base will remain fixed. The Emission Chart below illustrates this. 
- Originally there was an 8-year emission schedule but this was extended to ~2045 with [EIP-0027](https://github.com/ergoplatform/eips/blob/master/eip-0027.md). 

## Tokenomics and Emission

As a Proof of Work blockchain, Ergo has a defined emission schedule for the release of ERG tokens. When Ergo launched in 2019, there was no ICO (initial coin offering), no pre-mine and no pre-allocation of tokens to any founders or venture capitalists. During the first two and a half (2.5) years, the emission schedule sends a small portion of each block to the Ergo Foundation Treasury - for the purposes of funding promotion and development on Ergo. After two and a half years, the Ergo Foundation ceased to receive any rewards from having recieved 4.43% of the total ERG supply.

## The Original Emission Schedule

Ergo currently mines blocks every two minutes. For the first two years, each block was set to release 75 ERG into circulation. At the end of the 2nd year, the emission rate was set to drop by 3 ERG/block with a schedule that would see block rewards further reduced by 3 ERG every three months. After eight years, the total supply of ERG would have been completely mined and the mining protocol would be reliant on transaction fees and Storage Rent alone to reward miners.

## EIP27 and the Adjustment of Ergo’s Emission Schedule

Recently, the Ergo Foundation undertook the initiative to ensure the long-term sustainability of the mining protocol by proposing an amendment to the emission schedule. As the blockchain is still in the early stages of focusing on promotion and development, there was a concern that the ecosystem may need more time before the end of the eight-year emission schedule. If there are not enough dApps and users in the ecosystem at the end of the original emission schedule, there may not be enough transactions to incentivize miners to maintain the network.

Ergo’s co-founder, Alex Chepurnoy, proposed a solution to this possible scenario. The proposal, EIP27, would see Ergo emissions extended by 20 years, thereby offering the time to develop the necessary crypto-economic security for the blockchain. On Ergo, miners enjoy the ability to suggest and vote on proposed changes to the network. With EIP27, the proposal required a 90% pass vote in order to be scheduled for implementation. The mining community voted over 90% in favor of this proposal and the new emission schedule is slated for deployment after testing has been completed on the testnet. 

Once EIP27 is activated on the mainnet, the block reward will be reduced by 12 ERG. Since new blocks currently produce 66 ERG/block, the new emission would start producing 54 ERG/block. Following this, block rewards will reduce by 3ERG/block at regular intervals until new blocks mint 3 ERG/block. From that point onwards, the emission will remain at 3 ERG/block until all of the ERG have been minted. 

The code for the emission schedule can be found [here](https://github.com/ergoplatform/ergo/blob/e6086e23ecd45f1e01a3e4c0344f003cec1a5b11/src/test/scala/org/ergoplatform/mining/ErgoMinerPropSpec.scala#L24)

## The Ergo First Year Token (“EFYT”)

EFYT was airdropped and distributed on [Waves DEX](https://wavesplatform.com/) starting with a 100,000 EFYT airdrop 2 years ago in May, 2017. EFYT served the dual purposes of helping to build an early community of stake holders and enthusiasts for Ergo and of raising a small amount of funds for the platform before launch to fund development, promotion etc. EFYT is strictly a Waves token and is not the same as an Erg, which is the Ergo mainnet native token mined after Ergo’s mainnet launch.

EFYT will be swapped with a fraction of the Ergs mined within the first 1 year post mainnet launch. The planned mechanism for executing the swap is first, a new payment gateway will be set up on Waves for Ergo’s mainnet token, Erg. More on Waves payment gateways can be found [here](https://blog.wavesplatform.com/waves-launches-cryptocurrency-payment-gateway-framework-d37c1bb2fe1b). After the gateway is set up, as the Ergo Treasury receives Ergs from the mining reward, the Treasury will deposit these Ergs to Waves via the gateway, at which time, the Treasury will make a bid in the market at fixed price of 1.00 ERG / 1.00 EFYT and owners of EFYT can then swap their EFYTs for Ergs and do as they wish with their Ergs including holding them on Waves, trading on Waves or transferring their Ergs out of Waves via the gateway to their own wallet for use elsewhere. All EFYT purchased by the Treasury in this process will be burned.

The current distribution of EFYT can be found [here](http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46). It should be noted that the max supply of EFYT is 1,970,945.0. This is 10% of the first year of Ergo token emission and the same number of Ergs that the Treasury will receive, meaning that the Treasury will have received 1,970,945.0 Ergs during year 1, sufficient to swap the max supply of EFYT for Erg.
