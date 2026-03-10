---
title: 'Comparing Lending Protocols: UTXO Model vs. Account Model'
date: '2024-05-20'
author: Ergo Platform
tags:
- addresses
- amm
- basics
- box
- collateral
- duckpools
- ergo-blog
- ergoscript-context
- eutxo
- liquidation
- native-tokens
- sigmafi
- state-machine
- transaction
category: blog
blog_tag: Basics
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Comparing-Lending Protocols-UTXO-Model-vs-Account
  Model
glossary_hits:
- AMM
- Addresses
- Box
- Collateral
- Duckpools
- ErgoScript context
- Liquidation
- Native tokens
- SigmaFi
- State machine
- Transaction
- eUTXO
---

# Comparing Lending Protocols: UTXO Model vs. Account Model

> **Published:** 2024-05-20 | **Author:** Ergo Platform | **Tag:** Basics | **Type:** blog

**Related concepts:** AMM, Addresses, Box, Collateral, Duckpools, ErgoScript context, Liquidation, Native tokens, SigmaFi, State machine, Transaction, eUTXO

---

Lending protocols are a cornerstone of decentralized finance (DeFi), enabling users to lend and borrow assets in a trustless environment. However, the underlying blockchain architecture significantly influences the design and functionality of these protocols. In this blog, we will compare lending protocols built on the Unspent Transaction Output (UTXO) model and the Account model, highlighting their respective strengths and challenges.

## Concept of Lending Protocols

In lending protocols, borrowers typically use their crypto assets as collateral. Once a loan is issued, the protocol secures this collateral until repayment. Lenders, on the other hand, can leverage the potential of their crypto assets and collect interest. For instance, if two users deposit ETH and USDC, respectively, the ETH depositor can borrow USDC, while the USDC depositor can borrow ETH.

To mitigate risks, especially if the collateral's value dips below the loan amount, most protocols encourage borrowers to over-collateralize. This means adding about 50% more than the loan value as collateral, resulting in an overcollateralization ratio of 150%. Overcollateralization ratios depend on the quality and volatility of the provided collateral. Some platforms, like Aave, also allow uncollateralized flash loans that must be repaid within a single transaction.

## Key Components of Lending Protocols

Smart Contracts: Automated, self-executing contracts with the terms of the agreement directly written into code. These eliminate the need for intermediaries, reducing costs and increasing trust.

- **Collateralization**: To mitigate the risk of default, borrowers must provide collateral that exceeds the value of the loan. This collateral is held in the smart contract and can be liquidated if the borrower fails to repay.
- **Interest Rates**: Determined algorithmically based on supply and demand dynamics within the protocol. This ensures competitive rates for both lenders and borrowers.
- **Liquidity Pools**: Lenders deposit their assets into liquidity pools, which are then made available for borrowers. This pooling mechanism enhances liquidity and ensures that there are always funds available for borrowing.

## The Account Model

The Account model, exemplified by Ethereum’s EVM, aggregates all funds under a single contract address for processing. This approach offers several advantages:

- **Ease of State Management**: The account model simplifies state management by maintaining balances and state changes within a single account. This centralization facilitates straightforward calculations and updates, making it easier to develop complex financial applications.
- **Intuitive Engineer Implementation**: In terms of engineering implementation, the Account Model is more intuitive as it handles all funds under a single contract address. 
- **Security**: In the Account model, assets are controlled by smart contracts. While this centralization simplifies management, it also presents a risk: if the liquidity pool contract is hacked, users could lose control of their assets. 

Example: Compound, Aave
Protocols like Compound and Aave leverage the account model to provide seamless lending and borrowing experiences. Users deposit assets into smart contracts, earning interest, while borrowers take loans against their collateral. The system’s ability to manage and update states efficiently ensures smooth operation and user experience.

- Compound: Allows users to earn interest or borrow assets against collateral with dynamic interest rates.
- Aave: Offers a wide range of assets for lending and borrowing, along with innovative features like flash loans.

## The UTXO Model

In contrast, the UTXO model, used by blockchains like Bitcoin, Ergo, and Nervos CKB, disperses funds across various users’ UTXOs/cells. This model presents unique advantages and far a different approach from the Accounts model:

Decentralized State Management: UTXO-based systems delegate the work of determining state transitions to the application layer. Each user signs off on the state transition, ensuring that no single entity can alter the transaction. This decentralization greatly enhances security and trustlessness, but also presents unique obstacles for the creation of a liquidity pool.

- **Complex Engineer Implementation**: Contrary to the Account Model, the UTXO model may require the creation of a special lock to help users secure dispersed funds. This lock ensures that the funds comply with specific rules during transactions. In the case of a blockchain like Ergo, the locks are akin to guard script smart contracts.
- **Security**: In the UTXO model, assets are directly controlled by the user rather than by a contract. This decentralized approach enhances asset security. Even if a contract is undeployed or compromised, users retain control over their assets, ensuring a higher level of protection.

## Examples of Smart Contract UTXO Blockhains

Nervos CKB’s lending protocols must navigate the dispersed nature of UTXOs. Developers construct special locks to manage and consolidate users’ funds. These locks enforce specific conditions, such as price relationships, ensuring that funds are used appropriately during lending and borrowing operations.

In the case of Ergo, its eUTXO (extended UTXO) design enables developers to create expressive and definitive smart contracts. With a commitment to open source development, paired with Ergo’s time tested Proof of Work security parameters, the network is capable of handling diverse liquidity pools and complex lending smart contracts. Currently, lenders and borrowers can take full advantage of two protocols on Ergo: [SigmaFi](https://sigmafi.app/#/) and [Duckpools](https://www.duckpools.io/).

With SigmaFi, users can create and/or agree to loan requests for differing native assets. Various amounts of collateral can be offered in the request, and the user interface allows prospective loaners to view which requests are undercollateralized.

Duckpools takes a slightly different approach by allowing users to borrow and lend within liquidity pools (where $ERG is needed for all loan collateral). Through the Duckpools website, users can identify which native asset they want to loan to a liquidity pool, while borrowers can similarly select a liquidity pool from which they want to take a loan. Borrowers can set their own collateral ratio, but the user interface gives recommended options of 130%, 150%, and 170%.

## Key Comparisons

- **State Management**: The account model centralizes state management, simplifying updates and calculations. In contrast, the UTXO model decentralizes state transitions, enhancing security but increasing complexity.
- **Engineer Implementation**: In terms of engineering implementation, the Account Model is more intuitive as it handles all funds under a single contract address. However, Ethereum’s Account model has been found to suffer from blockchain bloat and high gas fees.

In contrast, in the UTXO model, funds are dispersed across various UTXOs belonging to individual users, making it difficult to aggregate funds in one place. The UTXO model may require the creation of a special lock (or smart contract) to help users secure these dispersed funds. This lock ensures that the funds comply with specific rules during operations.
- **Security**: In the Lending protocol of the Account model, assets are controlled by smart contracts. While this centralization simplifies management, it also presents a risk: if the liquidity pool contract is hacked, users could lose control of their assets. In contrast, the UTXO model assigns control of assets directly to the user rather than to a contract. This decentralized approach enhances asset security. Even if a contract is undeployed or compromised, users retain control over their assets, ensuring a higher level of protection.

### Conclusion

Both the UTXO and Account models offer distinct advantages and challenges for lending protocols. By understanding these differences, developers can better design and implement lending protocols that leverage the strengths of their chosen blockchain architecture.

As the DeFi space continues to evolve, we can expect ongoing innovation and improvements in both models, ultimately enhancing the robustness and user experience of decentralized lending platforms.
