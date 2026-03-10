---
title: What apps can you do on Ergo
description: 'ErgoForum discussion: What apps can you do on Ergo'
tags:
- amm
- appkit
- ergo-playgrounds
- ergoforum
- ergomixer
- ergoscript
- ergotree
- full-node
- headless-dapp
- native-tokens
- sigmausd
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/what-apps-can-you-do-on-ergo/819
created: '2021-03-10'
last_activity: '2021-03-10'
posts_count: 1
views: 2687
likes: 13
glossary_hits:
- AMM
- AppKit
- Ergo Playgrounds
- ErgoMixer
- ErgoScript
- ErgoTree
- Full node
- Headless dApp
- Native tokens
- SigmaUSD
---

# What apps can you do on Ergo

> **Forum thread:** [https://ergoforum.org/t/what-apps-can-you-do-on-ergo/819](https://ergoforum.org/t/what-apps-can-you-do-on-ergo/819)
> **Category:** Uncategorized | **Created:** 2021-03-10 | **Posts:** 1 | **Views:** 2687

**Related concepts:** AMM, AppKit, Ergo Playgrounds, ErgoMixer, ErgoScript, ErgoTree, Full node, Headless dApp, Native tokens, SigmaUSD

---

### Post #1 — @kushti (2021-03-10)

Before the mainnet launch and during first months we made some contracts to understand possibilities of Ergo contracts (ErgoTree / ErgoScript), with no offchain parts and UIs developed. Now with the stablecoin launch, ergoauctions doing well, ErgoMixer going to tokenization of its income flow, it is good to remind about possibilities for developers which are coming to the community now:

* Crowdfunding: the basic contract is described in the ErgoScipt whitepaper: <https://ergoplatform.org/docs/ErgoScript.pdf> , we made testing crowdfunding campaign using just the node: [Simple Crowdfunding](https://www.ergoforum.org/t/simple-crowdfunding/70) and then CLI tool was developed. No UI was done though, and CLI tool now needs to be updated for post-3.3.0 node API.
* Loans: we have interest-free loan contract example: [Interest-Free Loan Contract](https://www.ergoforum.org/t/interest-free-loan-contract/67) . With SigmaUSD loans can be attractive to miners and not only. Please also check targeted microloan contract from “Smart Contracts for the People” article: [Smart Contracts for the People - Alexander Chepurnoy](http://chepurnoy.org/blog/2018/10/smart-contracts-for-the-people/)
* Mining power derivatives: [Mining Power Derivatives - Two Tokens Approach](https://www.ergoforum.org/t/mining-power-derivatives-two-tokens-approach/277)
* Lotteries: [A lottery on top of Ergo](https://www.ergoforum.org/t/a-lottery-on-top-of-ergo/137) as a starting point.
* Profit-sharing schemes: [Running a business on top of ERGO](https://www.ergoforum.org/t/running-a-business-on-top-of-ergo/423)
* Email and paper clients for limited or blocked Internet: [(E)mail Client for Limited or Blocked Internet](https://www.ergoforum.org/t/e-mail-client-for-limited-or-blocked-internet/134)
* Local exchange trading systems and other community currencies: [A Local Exchange Trading System On Top Of Ergo | Ergo](https://ergoplatform.org/en/blog/2019_04_22-lets/) and [A Trustless Local Exchange Trading System | Ergo](https://ergoplatform.org/en/blog/2019_05_29-exchange/)
* Decentralized exchanges: we already have some team working on both orderbook-based DEX and AMM-based DEXes, but more contributors always welcome! (especially with UI dev).

There are many tools for developers now, such as Headless DApp Framework (by Emurgo) [GitHub - Emurgo/ergo-headless-dapp-framework: An easy to use framework for building Ergo headless dApps.](https://github.com/Emurgo/ergo-headless-dapp-framework) , ErgoAppKit (by [@morphic](/u/morphic) ): [GitHub - ergoplatform/ergo-appkit: Appkit: A Library for Polyglot Development of Ergo Applications](https://github.com/ergoplatform/ergo-appkit) , Ergo Playground for play with contracts (check ready examples at ErgoScript By Example repo: [GitHub - ergoplatform/ergoscript-by-example: Learn ErgoScript by reading example smart contracts powered by Ergo Playground.](https://github.com/ergoplatform/ergoscript-by-example) ), Ergo JS Template to make UI easily [GitHub - anon-real/ergo-js-template: A JS template for Ergo dApp development](https://github.com/anon-real/ergo-js-template) etc

Making applications on top of Ergo is not about fun and following proper first principles, but also can be profitable these days! So come and build on top of Ergo!
