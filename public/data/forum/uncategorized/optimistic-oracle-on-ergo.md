---
title: Optimistic Oracle on Ergo
description: 'ErgoForum discussion: Optimistic Oracle on Ergo'
tags:
- addresses
- box
- collateral
- ergoforum
- eutxo
- native-tokens
- registers
- ring-signatures
- sigma-protocols
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/optimistic-oracle-on-ergo/5292
created: '2025-12-10'
last_activity: '2025-12-10'
posts_count: 1
views: 44
likes: 1
glossary_hits:
- Addresses
- Box
- Collateral
- Native tokens
- Registers
- Ring signatures
- Sigma protocols
- eUTXO
---

# Optimistic Oracle on Ergo

> **Forum thread:** [https://ergoforum.org/t/optimistic-oracle-on-ergo/5292](https://ergoforum.org/t/optimistic-oracle-on-ergo/5292)
> **Category:** Uncategorized | **Created:** 2025-12-10 | **Posts:** 1 | **Views:** 44

**Related concepts:** Addresses, Box, Collateral, Native tokens, Registers, Ring signatures, Sigma protocols, eUTXO

---

### Post #1 — @bob (2025-12-10)

I am proposing a design for a decentralized **Optimistic Oracle** on Ergo. While oracle-pools are excellent for continuous data (like price feeds), they are inefficient for “one-off” events needed by prediction markets, insurance protocols, and specialized betting dApps. Such an oracle would unlock many possibilities. There are other optimistic oracles in use we can learn from.

We need a system that can answer: *“Did the NY Knicks win yesterday?”* or *“Did address X receive 1000 tokens?”* without a centralized authority.

This proposal outlines a flexible, stake-based system where truth is established optimistically (assumed true unless disputed) and secured by a commit-reveal jury system. I am sharing this in hopes of gathering feedback and finding developers interested in bringing this primitive to life.

---

## Why Ergo?

* **eUTXO State Machines:** The oracle lifecycle (Proposed → Disputed → Final) maps perfectly to Ergo’s UTXO model. Each stage is a box with specific registers, making the state verifiable and secure.
* **Sigma Protocols:** We can implement “Commit-Reveal” voting schemes natively and cheaply to prevent juror bandwagoning, and use threshold signatures for the “Guardian” safeguard.

---

## The Core Concept

The system is **Optimistic**. This means anyone can propose an answer to a query. If that answer is not disputed within a “Liveness Window,” it becomes the finalized truth. This makes the vast majority of requests fast and cheap.

If an answer is disputed, it escalates to a **Staked Jury** mechanism.

### Key Roles

1. **Protocol/User:** Asks the question and funds the reward.
2. **Proposer:** Posts an answer + a **Bond**.
3. **Disputer:** Challenges an answer by posting a **matching Bond**.
4. **Jurors:** Users who stake ERG globally to be randomly selected to adjudicate disputes.
5. **Guardians (Optional):** A high-security threshold multisig that can trigger a one-time “Emergency Re-vote” in cases of obvious 51% attacks.

---

## How It Works (The Workflow)

The oracle is designed to be **parameter-agnostic**. A protocol (e.g., a betting dApp) defines its own security needs (speed vs. security vs. cost) by setting parameters like bond sizes, liveness windows, jury sizes or structure (how many disputes/juries).

### Phase 1: The Proposal

* A `QuestionUTXO` is created.
* A Proposer submits an answer and locks a `Proposal Bond` (e.g., 100 ERG).
* A timer starts (e.g., 24 hours).
* **Outcome A:** No one disputes. After 24h, the answer is final. Proposer gets their bond back + a small fee.
* **Outcome B:** A Disputer believes the answer is wrong. They lock a `Dispute Bond` (e.g., 100 ERG). The state moves to **Dispute**.

### Phase 2: The Jury (Round 1)

* A small jury (e.g., 7 jurors) is selected pseudo-randomly based on their stake weight.
* **Commit:** Jurors submit a hash of their vote + a secret salt (preventing others from seeing how they voted).
* **Reveal:** Jurors reveal their vote.
* **Result:** Majority rules. The loser (Proposer or Disputer) loses their bond. Losing jurors are slashed. The winner and the honest jurors share the bonds/stakes.

### Phase 3: Escalation (Round 2)

* If the loser of Round 1 believes the jury was bribed or wrong, they can post a larger `Appeal Bond`.
* A larger jury is formed (e.g., 17 jurors).
* The process repeats with higher stakes. This makes the “Cost of Corruption” extremely high.

### Phase 4: The Guardian Safety Valve (Optional)

* Guardians would be appointed by the protocol asking the question.
* In the rare event of a successful malicious takeover of the final jury, trusted “Guardians” can trigger a one-time **Emergency Re-vote** within a short window.
* They can ban specific compromised stakes/identities from the re-vote (limited to maybe 20%).
* This adds a layer of “social consensus” security without direct centralization, as Guardians cannot dictate the outcome, only force a clean re-vote.
* There is a trade-off of centralization and added security.

---

## Economic Security & Incentives

The security model relies on the premise that the **Cost of Corruption > Profit from Corruption**.  
The protocol using the service of the oracle would pay a fee based on security need, regardless of a vote being triggered. It would also fund the first proposal.  
All other rewards come from the losing side of bonds and votes.

* **For Jurors:** They earn yield on their ERG by staking/participating. If they vote against the majority (the truth), they are slashed.
* **For Attackers:** To force a wrong outcome, an attacker must bribe a majority of the jury.
  + *Example:* In a Grand Jury of 17, if an attacker owns 30% of the total stake pool, they still have a >95% chance of losing the vote.
* **Bonds:** The bonds scale with the value of the market. A high-value betting market would require a massive bond to propose/dispute, deterring spam and manipulation.

---

## Technical Architecture (Draft)

The system would likely rely on three main components:

1. **OracleQuestion UTXO:**
   * Stores `state` (Open, Disputed, Final).
   * Stores `parameters` (Bond sizes, Jury count).
   * Stores `hash` of the question/evidence (IPFS link).
2. **JurorPool Contract:**
   * Manages the global staking pool.
   * Handles “snapshots” (jurors must be staked *before* a question arises to prevent flash-loan attacks).
3. **JuryRound UTXO:**
   * Ephemeral box that handles the Commit/Reveal logic and payout distribution.

---

## Example Scenarios

### 1. Prediction Market (High Volume)

* **Question:** “Who won the US Election?”
* **Config:** Fast resolution (24h), High Bonds (prevent spam), Large Jury (high security).
* **Flow:** Bot proposes “Candidate A”. Disputer challenges. Jury votes “Candidate A”. Disputer loses bond. Market settles.

### 2. Parametric Insurance (Niche)

* **Question:** “Did Contract X get exploited for >$1M?”
* **Config:** Slow resolution (72h liveness to allow analysis), Evidence Required (Tx hashes on IPFS).
* **Flow:** Insured user proposes “Yes” with evidence. Insurer checks evidence. If valid, they do not dispute. Proposal passes. Payout occurs.

---

## Additional Considerations

* **Handling Ambiguity:** Include “VOID” (unclear/unanswerable) and “TOO EARLY” options? (“VOID” might trigger a refund of the protocol; “Too Early” triggers an automatic reset and allows new proposals).
* **Auto-Proposals:** A prediction market might want to automatically propose the most likely outcome. (It would instead reward the first dispute, if “correct”)
* **Inactivity Penalties:** Jurors might be de-staked if they fail to vote when selected, or lose yield opportunity.
* **Flash-Loan Resistance:** To prevent attacks, jurors likely need to be staked *before* a market is created - or at least for some time before voting.
* **Collateral Ratios:** How high should the bonds be relative to the Market Exposure? (e.g., 5% of the total potential payout)
* **The User Experience:** I envision a simple App that notifies jurors when their attention is needed and allows for easy participation. Discussion would happen off-chain (Discord/Forum).

**I am interested to hear your thoughts.**
