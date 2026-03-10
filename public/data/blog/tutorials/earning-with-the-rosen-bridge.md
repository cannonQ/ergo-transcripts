---
title: Earning With The Rosen Bridge
date: '2024-08-08'
author: Ergo Platform
tags:
- amm
- collateral
- duckpools
- ergo-blog
- ergoscript
- eutxo
- full-node
- liquidation
- native-tokens
- rosen-bridge
- sigma-protocols
- sigmafi
- spectrum
- transaction
- tutorials
category: blog
blog_tag: Tutorials, Community, Ecosystem, DeFi
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Earning-With-The-Rosen-Bridge
glossary_hits:
- AMM
- Collateral
- Duckpools
- ErgoScript
- Full node
- Liquidation
- Native tokens
- Rosen Bridge
- Sigma protocols
- SigmaFi
- Spectrum
- Transaction
- eUTXO
---

# Earning With The Rosen Bridge

> **Published:** 2024-08-08 | **Author:** Ergo Platform | **Tag:** Tutorials, Community, Ecosystem, DeFi | **Type:** blog

**Related concepts:** AMM, Collateral, Duckpools, ErgoScript, Full node, Liquidation, Native tokens, Rosen Bridge, Sigma protocols, SigmaFi, Spectrum, Transaction, eUTXO

---

Bitcoin has officially bridged to the Ergo ecosystem via Rosen Bridge! This newly built, decentralized infrastructure enables trustless transfers between BTC and Ergo, allowing Bitcoin to be deployed within Ergo’s growing DeFi ecosystem as rsnBTC. As a eUTXO blockchain, Ergo’s smart contracts are powered by ErgoScript and Sigma Protocols, enabling the development of powerful dApps that run on an extremely secure base layer – which can now use Bitcoin as collateral.

Let’s take a closer look at the Rosen Bridge, the trustless entities that secure it, and how you can earn income by participating in and driving forward this innovative element of Ergo’s infrastructure.

**Those who wish to move assets through Rosen Bridge can access it at [app.rosen.tech](https://t.co/SBhBAhWvWV). Currently, the bridge supports Ergo, Cardano, and Bitcoin assets, but the bridge will also support other chains in the near future, including EVM.**

## What Is The Rosen Bridge?

The Rosen Bridge is a cross-chain bridge that was custom-developed for the Ergo blockchain. It allows for the secure transfer of assets between different blockchains (initially Cardano and Ergo, and now Bitcoin too), enabling users to enjoy the benefits of multiple networks.

There are many different models for bridges, but in general, bridging technology has historically been a uniquely vulnerable element of the blockchain space. The complexity of bridges has often required numerous smart contracts to be executed in tandem between two or more blockchains. This means that bridges have often presented a particularly large attack surface, and, in the past, hackers have taken advantage of these vulnerabilities to extract and steal locked funds.

Ergo has taken a straightforward approach to minimize the role of smart contracts on the chains that Rosen bridges with. **It accomplishes this by limiting the execution of all smart contract functions to the Ergo blockchain only**, and the security model relies on two key parties: Watchers and Guards. 

Watchers monitor the target blockchains for key events. They then pass these to the Guards by creating a transaction on Ergo, who parse them, check for an accurate event and consensus, and execute transactions on the relevant blockchain. Rosen is designed to maintain security as it scales, with separate modules added for each new chain that are integrated into the ecosystem. 

It is important to note that Ergo was chosen as the hub for Rosen Bridge’s smart contracts because of the platform’s time tested security. As a network that encourages open source development, Ergo’s scripting language and smart contracts have been established as some of the most robust and secure in the entire industry. 

## Rosen Fees And The RSN Token

The fee for using the Rosen Bridge is 0.5% of the total transaction amount, or $10 USD - whichever is greater, plus network fees. Guards can collectively adjust the bridge fees, while network fees vary according to the blockchain platform (fees for Ergo are static).

Additionally, the RSN token plays an important role in ensuring the security of the bridge. Together, the fees and use of the RSN token offer a number of ways to earn by supporting the Rosen infrastructure.

### Watcher Fees

Watchers can be viewed as oracles, monitoring deposit events for their respective blockchains (Watchers are needed for each chain that is part of Rosen Bridge) and passing that information to Guards. Watchers provide a vital service, and together they form a decentralized p2p network of nodes, ensuring there is no single point of failure. 

Each Watcher set has no theoretical limit (currently a 999 soft limit), and 60% + 1 of these must agree on an event taking place before it is considered valid and communicated to the Guards. This parameter can be adjusted by the Guard set. Assuming a full set of Watchers, this requires 601 Watchers to agree, reducing the possibility of collusion. It is possible to have more than one Watcher set, though it is unlikely that more than two would be necessary in the long run.

Watchers receive 70% of transaction fees from the Rosen Bridge.

### Guard Fees

While Watchers collect and communicate information about their target network, Guards execute transactions in response to this information. The model is somewhat similar to the Bitcoin network’s infrastructure of full nodes, which ensure communication of reliable information around the network, and miners, which are tasked with security. In Bitcoin’s case, every mining node is a full node, but not every full node is a mining node.

The Guard set is a federated group of nodes with a collective responsibility for managing the Rosen core. Guards must lock a certain amount of funds as collateral, paid in RSN tokens, to help ensure their honesty. Should a Guard act maliciously, they will immediately have their collateral slashed. The Guard set can operate safely even if a number of Guards prove unreliable. Guards receive 30% of bridge transaction fees overall.

## Two More Ways To Earn

Ergo’s Rosen Bridge relies on accurate pricing of RSN and liquid markets. Including RSN in Ergo’s DeFi ecosystem is therefore vital for the smooth functioning of the service.

Users who own RSN can deposit their tokens to a [liquidity pool](https://app.spectrum.fi/ergo/liquidity) on Spectrum/Splash - Ergo’s main decentralized exchange. In order to do this, you will need ERG as well as RSN. Liquidity can be withdrawn at any time, but liquidity providers (LPs) need to be aware that they may be impacted by impermanent loss (IL). This occurs when the ratio of assets’ prices rises or falls after they have been deposited to the liquidity pool. If an LP withdraws their assets from the pool, they may receive less in dollar-equivalent terms than if they had simply held assets and not provided liquidity. The loss is described as “impermanent” because it is only crystallized upon withdrawal. If the LP waits and the price ratio returns to its starting point, they will be able to withdraw the initial value of the tokens. This occurs because LPs own a percentage of the pool, not an absolute number of tokens. 

To compensate users for the risk of impermanent loss, LPs receive a share of trading fees for the pool. They may also receive additional tokens, known as yield farming rewards. The current rate of return for LPs can be viewed on the [liquidity pool page](https://app.spectrum.fi/ergo/liquidity) for Spectrum/Splash.

Another option for earning with RSN is to loan tokens on [Duck Pools](https://www.duckpools.io/), Ergo’s lending protocol. As with depositing RSN to a liquidity pool, rates of return vary.

Additionally, interested parties can create bonds at [SigmaFi](https://sigmafi.app/#/) to lend or borrow Rosen. SigmaFi is unique in that there is no liquidation action until maturity and borrowers can set their own rates in the bond request. 

## Find Out More

You can learn more about the Rosen Bridge by reading [Ergo’s documentation](https://docs.ergoplatform.com/eco/rosen/), or gain further information about Ergo and its ecosystem from the [Ergo website](https://ergoplatform.org/).

Join the [Ergo Discord](https://discord.gg/ergo-platform-668903786361651200) to connect with the community and discuss the Rosen Bridge and DeFi opportunities with experts. Find out how to set up a Watcher or Guard, and explore how to use Ergo’s decentralized trading and lending applications.
