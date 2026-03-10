---
title: Sigmaverse Update
description: 'ErgoForum discussion: Sigmaverse Update'
tags:
- addresses
- ergo-explorer
- ergo-foundation
- ergoforum
- ergoscript-context
- full-node
- gluon
- mew-finance
- native-tokens
- ring-signatures
- sigmanauts
- sigmausd
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/sigmaverse-update/5222
created: '2025-08-25'
last_activity: '2025-08-27'
posts_count: 4
views: 116
likes: 7
glossary_hits:
- Addresses
- Ergo Explorer
- Ergo Foundation
- ErgoScript context
- Full node
- Gluon
- Mew Finance
- Native tokens
- Ring signatures
- SigmaUSD
- Sigmanauts
- Transaction
---

# Sigmaverse Update

> **Forum thread:** [https://ergoforum.org/t/sigmaverse-update/5222](https://ergoforum.org/t/sigmaverse-update/5222)
> **Category:** Uncategorized | **Created:** 2025-08-25 | **Posts:** 4 | **Views:** 116

**Related concepts:** Addresses, Ergo Explorer, Ergo Foundation, ErgoScript context, Full node, Gluon, Mew Finance, Native tokens, Ring signatures, SigmaUSD, Sigmanauts, Transaction

---

### Post #1 — @jossemii (2025-08-25)

## Sigmaverse Update: Towards a More Transparent Ergo Ecosystem

Summary

Currently, applications within the Ergo ecosystem that share similar missions, such as *Bene* and *MewFund*, operate under radically different trust models. *Bene* is a trustless and P2P protocol, whereas *MewFund* is based on a centralized system that requires trust in its developers as intermediaries. This fundamental difference is not apparent to the average user, creating a potential risk.

The current practice of including “Know Your Assumptions” (*KyA*) pop-ups in applications is insufficient, as it suffers from potential developer bias and causes information overload fatigue for the user.

This proposal advocates for revitalizing *Sigmaverse*, under the stewardship of the Ergo Foundation, to become a neutral and community-managed source of truth. Through a system of public Pull Requests (PRs) and a visual quality standard with icons (the **Sigmaverse Quality Standard**), we can offer users a quick and reliable way to understand the trust assumptions of each application, fostering a more transparent and secure ecosystem.

## **Context**

I am one of the developers of *Bene*, a fundraising campaign platform from Stability Nexus, an organization known for protocols like *Djed (SigmaUSD)* and *Gluon (GluonGold)*.

A brief explanation of contribution campaigns: In a typical model, someone creates a campaign by defining a base token (e.g., SigUSD) and a contribution token. Those who wish to support the project send the base token and, in return, receive the contribution token at a fixed exchange rate. There is usually a minimum funding goal; if it is not reached by a deadline, contributors get their funds back.

Mew Finance, one of the most used applications in the ecosystem, launched *MewFund* shortly before we launched *Bene*. It is a similar application but with more features and functionality. After almost a year, I have investigated how *MewFund* works by exploring the traceability of a fundraising campaign and speaking with its lead developers, who very kindly answered all my questions.

Following this conversation, I have confirmed that *MewFund* does not have any type of smart contract in its architecture. The collected funds are sent to a P2PK address belonging to the Mew developers, and on the other hand, the campaign creator holds custody of the contribution tokens until they need to be sent. The Mew team acts as a trusted intermediary throughout the process, in addition to providing the tools to facilitate usability for both contributors and campaign creators.

Furthermore, being a centralized system, there is a risk that the developers could block access to the funds or the platform at any time during a campaign, either due to an unintentional error or a malicious action in their own self-interest.

*Bene*, on the other hand, is a much more limited protocol in terms of features, but it requires no server, and each contribution campaign is controlled by an on-chain script (smart contract), which allows for zero trust in the developers. It is a purely P2P application that only connects to an Ergo node and the explorer.

It is clear that although these applications appear to serve the same purpose, they are fundamentally different and have distinct pros and cons:

* **MewFund** requires trusting the developers and the campaign creator (even though the traceability of funds can be followed), but it offers a wider range of options due to its low implementation cost.
* **Bene** requires no trust in the developers or the campaign creator (as they have no control over the funds at any point), but its range of features is limited due to the high cost of covering all assumptions in trustless scenarios.

Depending on the use case, one application may be more suitable than the other. A similar case is the difference between algorithmic and fiat-backed stablecoins, or between trustless and centralized bridges.

Within the community, there has been an effort to add a “Know Your Assumptions (*KyA*)” message at the start of applications, usually as a pop-up that the user must accept. These texts should clearly state the assumptions the user agrees to when using the application. *MewFund* does not currently have a *KyA*, but the developers informed me that they would inform users by adding one somewhere in their application.

## **The Problem**

On-application *KyAs*, while a step in the right direction, present certain issues:

* **Potential Bias:** They are presented by the application’s own developer, who may not be incentivized to display all of the application’s assumptions with full transparency and associated risks.
* **Cognitive Overload:** Exhaustively detailing all assumptions requires presenting too much information to the user. This creates a counterproductive effect known as information overload or cognitive fatigue, as a wall of text discourages reading and, therefore, genuine understanding of the risks.

## **Proposed Solution**

A simple option that can solve this problem in the short term is to “dust off” *Sigmaverse*, a somewhat outdated website that lists the ecosystem’s applications and tools. *Sigmaverse* is a project maintained and hosted, as I understand it, by the Ergo Foundation or by Sigmanauts—institutions reputable enough to carry out its mission fairly (a completely trustless solution would be excessively complex to implement in the short term).

My proposal is to update *Sigmaverse* to allow for the following:

1. **To solve developer bias (Problem 1):**

   * **Become a community-managed source of truth:** *Sigmaverse* should contain the trust assumptions for each application, allowing anyone—not just the project’s developers—to open a Pull Request (PR) on its repository to propose updates.
   * **Foster peer review:** Invite all users and developers in the ecosystem to contribute to these *KyAs*. This creates a system where the community can verify that the assumptions are correct and complete. It allows other developers to investigate third-party solutions, judge their assumptions, and, if necessary, initiate a technical discussion through the Github PR itself to reach a consensus.
2. **To solve information overload (Problem 2):**

   * **Create the “Sigmaverse Quality Standard”:** Based on other quality standards, we can agree on certain key characteristics associated with visual icons. These labels would be displayed prominently, facilitating a quick understanding of the most important assumptions.

### **Sigmaverse Quality Standard - Specification (DRAFT)**

#### **Core Principle: Action-Centric Analysis**

The standard operates under the **Principle of Action-Centric Analysis**. A system is broken down into its fundamental actions (e.g., “create proposal,” “claim funds”). Each action is analyzed across two dimensions: the **Trust Category** of the process that authorizes it and the **Access Category** required to execute it, each with a numerical level.

#### **Trust Categories**

Ranked numerically, where a lower level indicates greater decentralization and less reliance on external actors.

* Level 1: Direct Contract Validation (Trust-Minimized)  
  The action’s validity is exclusively determined by the immutable rules encoded in the smart contract script. Permission is entirely contained within the verifiable logic of the contract itself. Any actor who can construct a transaction that satisfies these rules can execute the action, without needing the intervention or permission of an external mediator.
* Level 2: Action Mediated by a Crypto-economic Actor (Crypto-economic Security)  
  The execution or validity of the action depends on the intervention of an external actor from a dynamic and permissionless set (e.g., oracles, keepers, validators). Confidence that these actors will behave honestly is based on explicit economic incentives, such as rewards for correct behavior or penalties (slashing) for malicious behavior.
* Level 3: Action Mediated by a Fiduciary Actor (Requires Fiduciary Trust)  
  The execution or validity of the action depends on the intervention of an external actor from a static and permissioned set (e.g., the developer’s address, a multisig council, a governance committee). Trust is placed in the reputation, identity, or integrity of this specific group, as there are no direct crypto-economic mechanisms to guarantee their behavior.

#### **Access Categories**

Ranked numerically, where a lower level indicates greater user sovereignty.

* Level 1: Verifiable Artifact  
  The action is executed via a software artifact (e.g., a desktop app, a command-line interface, a client-side web app) that the user downloads and runs in their own environment. The user has full control and does not depend on a third-party service to interact with the blockchain.
* Level 2: Centralized Service Dependency  
  The action’s execution depends on a service hosted and operated by a third party (e.g., a project’s website, a centralized API). The availability and integrity of this service are necessary for the user to interact with the protocol.

#### **Final Scores**

For a quick summary, two final scores are calculated from the detailed analysis matrix of the application.

* **Weakest Link Score:** This score reflects the single greatest risk in the system, determined by the highest numerical level found in either the Trust or Access categories across the entire system.
* **Average Risk Score:** This score offers a holistic view of the system’s overall design, calculated as the average of all numerical levels assigned to all critical actions.

---

This standard allows the average user to quickly identify an application’s key properties through scores and icons and, if interested, delve deeper by reading the detailed assumptions in a structured matrix.

It is important to emphasize that the information on *Sigmaverse* should be exclusively formal and technical, keeping any commercial or advertising commentary separate. The best way to proceed would be to establish very specific guidelines on what a *KyA* should and should not contain.

### **Proposed Structure for Sigmaverse Guides**

To implement this proposal in an orderly and standardized manner, I would like to suggest a basic structure for each application’s guide on *Sigmaverse*. We can consider each application as a “brand” (name, logo, etc.) that encompasses a set of technical components.

For each application, the following should be documented:

* **Category and Subcategories:** This allows for grouping applications with similar missions (e.g., “DeFi > DEX,” “Crowdfunding,” “Tools”) to facilitate search and comparison.
* **General Information:** This would include the brand (name, logo), a clear description of its purpose, a basic user guide, and official access points (links to the website, GitHub, social media).
* **Features:** A list of the functionalities and services the application offers the user. This section focuses on “what it does.”
* **Trust Assumptions:** A transparent breakdown of the trust vectors and potential points of failure, aligned with the **Sigmaverse Quality Standard**. This is where questions are answered, such as: Who or what must the user trust? Which parts are centralized? What could go wrong? This analysis will culminate in the calculation of the application’s final scores: the **Weakest Link Score** (highlighting the biggest risk) and the **Average Risk Score** (reflecting the overall system design).

Following this structure, our previous example would be perfectly framed. Both *MewFund* and *Bene* would be in the same “Crowdfunding” category. Each would have its general information, and when it comes to comparison, a user could see clearly—almost like in a product comparison table—that *MewFund* excels in the “Features” section with its wide range of options, while *Bene* excels in the “Trust Assumptions” section due to its high scores under the **Sigmaverse Quality Standard**.

## **Final Words**

To be clear, this is not a criticism of the ecosystem or the Mew team. I believe their contribution has been and will continue to be very positive. However, failing to maintain clear and accessible trust assumptions greatly disincentivizes developers who are striving to build truly decentralized solutions.

People reason with ideas, and many users come and will come to Ergo precisely because of the trust assumptions it offers: a P2P system, more secure thanks to its smart contracts, and a model that encourages stateless applications.

Users must be clear about these same assumptions within the ecosystem. Otherwise, the exploitation of one of these centralized trust vectors (for example, a security failure or abuse by an intermediary) would not only harm the affected users but would damage the reputation and brand of the entire Ergo ecosystem.

---

### Post #2 — @jossemii (2025-08-25)

## **Example with Bene: Proof-of-Funding Platform**

### **Category and Subcategories**

* **Primary Category:** Crowdfunding
* **Subcategories:** Decentralized Finance (DeFi)

---

### **General Information**

*Bene* is a decentralized application (DApp) on the Ergo blockchain that allows projects to create trust-minimized fundraising campaigns. It enables creators to raise funds (in ERG) by offering project tokens in return. The entire process, from contribution to fund withdrawal or refund, is governed by on-chain smart contracts, eliminating the need for trusted intermediaries.

* **Website:** <https://bene.stability.nexus>
* **GitHub:** [GitHub - StabilityNexus/BenefactionPlatform-Ergo: Fundraising Platform based on the Bene Proof-of-Funding Protocol](https://github.com/StabilityNexus/BenefactionPlatform-Ergo)

---

### **Features**

* **Campaign Creation:** Project owners can define fundraising goals, deadlines, and token exchange rates.
* **Decentralized Contributions:** Anyone can contribute ERG to a campaign and receive a temporary Auxiliary Project Token (APT).
* **Automated Refunds:** If a campaign fails to meet its minimum funding goal by the deadline, contributors can automatically claim a full refund by exchanging their APTs back for ERG.
* **Secure Fund Withdrawal:** Project owners can only withdraw the collected ERGs after the funding goal has been successfully met.
* **Token Management:** Owners can add more tokens to a campaign or withdraw any unsold tokens.
* **Final Token Exchange:** Once a campaign is successful, contributors can exchange their temporary APTs for the final Proof-funding Tokens (PFTs).

---

### **Trust Assumptions (Sigmaverse Quality Standard Analysis)**

This analysis breaks down *Bene*’s core actions to evaluate its trust and access requirements.

#### **Action-Centric Analysis Matrix**

Based on the protocol’s description, all critical user and owner actions are governed by immutable on-chain logic. Users interact directly with the smart contract without depending on a centralized service for transaction execution.

| Critical Action | Trust Category | Access Category | Justification |
| --- | --- | --- | --- |
| **Token Acquisition** | **Level 1** (Trust-Minimized) | **Level 1** (Verifiable Artifact) | The exchange rate and logic are enforced by the smart contract. The user can create the transaction client-side. |
| **Refund Tokens** | **Level 1** (Trust-Minimized) | **Level 1** (Verifiable Artifact) | Refund conditions are checked exclusively by the on-chain script. |
| **Withdraw ERGs** | **Level 1** (Trust-Minimized) | **Level 1** (Verifiable Artifact) | Withdrawal is only possible if the funding goal is met, a rule enforced by the contract. The owner initiates this. |
| **Exchange (APT → PFT)** | **Level 1** (Trust-Minimized) | **Level 1** (Verifiable Artifact) | The exchange is permitted by the contract only after the campaign’s success is confirmed on-chain. |

#### **Final Scores**

* **Weakest Link Score: 1**
  + This score reflects the highest risk level found in the system. A score of **1** indicates that no single action depends on a trusted third party or centralized service.
* **Average Risk Score: 1.0**
  + This score provides a holistic view of the protocol’s design. An average of **1.0** signifies an exceptionally robust and decentralized architecture across all its functions.

#### **Detailed Assumptions and Risks (KyA)**

The scores confirm that ***Bene*** **operates as a fully trust-minimized protocol at the technical level**. However, using the application involves several layers of assumptions and risks that users must understand, extracted directly from the platform’s “Know Your Assumptions” (KyA).

**1. Protocol-Level Assumptions (On-Chain Logic)**

* **Smart Contract Risk:** You are trusting that the smart contract code, while public and auditable, is free of bugs or vulnerabilities. There is no guarantee against errors.
* **Immutable Rules:** The campaign conditions are enforced by the code and cannot be altered once launched:
  + **Refunds:** A refund is *only* possible if **both** conditions are met: the deadline has passed **and** the minimum funding goal has not been reached.
  + **Withdrawals:** Project owners can *only* withdraw funds if the minimum funding goal has been reached.
* **Developer Fee:** A 5% developer fee is automatically applied to all successfully funded projects. This fee is sent to a designated address when the project owner withdraws the funds.

**2. Project-Level Assumptions (Human Trust)**

* **No Guarantee of Fulfillment:** The most significant off-chain risk is trusting the project creator. Even if a project is successfully funded, the *Bene* protocol provides **no guarantee** that the project owners will deliver on their promises or use the funds as described. *Bene* is a neutral tool, not an escrow service that vets or endorses projects.

**3. User-Level Responsibilities & Blockchain Realities**

* **Self-Custody:** You are solely responsible for managing your own wallet, passwords, and private keys. No assistance can be provided if you lose access to your funds.
* **Irreversibility:** All transactions on the Ergo blockchain are final and irreversible once confirmed.
* **Privacy:** While the website does not collect personal data, all your transactions are publicly viewable on the blockchain explorer.
* **Use At Your Own Risk:** By using the platform, you acknowledge and agree that you are using it at your own risk and are solely responsible for your assets.

---

### Post #3 — @jossemii (2025-08-25)

The current Sigmaverse code or the same framework used in the Ergo documentation (MkDocs) could be utilized, but it’s strictly necessary that it be hosted by a neutral community member (EF/Sigmanauts). Otherwise, a more complex p2p solution would be required.

---

### Post #4 — @glasgowm (2025-08-27)

I’m finishing up some changes on the main site right now, but once that’s done I can pick this up. I agree making Sigmaverse a proper community-managed source of truth with visual scoring is the way to go. Technically it already is community managed, but the move to a CMS kind of hid that process. Maybe it would be better to go back to Git, or even set up a submission forum or voting system.

I think InfrastructureDAO was planning to take over hosting for Sigmaverse, and there had also been talk of an “auditDAO” that could handle assigning ratings like these.

Thanks for putting this together! I’ll circle back once my current tasks are wrapped up.
