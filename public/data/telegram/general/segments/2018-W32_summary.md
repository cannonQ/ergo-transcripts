---
title: "Ergo General Chat — 2018-W32"
date_start: "2018-08-06"
date_end: "2018-08-12"
type: telegram_weekly
channel: general
week: "2018-W32"
source: telegram
message_count: 56
categories: [governance, technical, wallet, marketing, ecosystem]
key_terms: [EFYT, ERGO, token swap, mainnet launch, airdrop, Q4, UTXO, transaction model, mixing protocols, transaction chaining, flexibility, Sigma language, smart contracts, Turing-complete, sigmastate-interpreter, unbounded loops, account model, address reuse, privacy, WAVES wallet]
---
# Ergo General Chat — 2018-W32 Summary

## Key Topics Discussed

- **EFYT-to-ERG Token Swap Mechanics**: Community inquired about the planned token swap between EFYT (testnet token) and ERG. Swap is scheduled post-mainnet launch, with conversion rate of 1 EFYT = 1 ERGOcash + 1 ERGOdata. Token holders on WAVES wallet need clarification on where tokens must be held for the swap.

- **UTXO Model Advantages**: Ergo's preference for the UTXO model over account-based systems was discussed, emphasizing flexibility for multi-user transactions, mixing protocols, and transaction chaining without forward dependencies.

- **Smart Contract Language Design**: Discussion of Ergo's approach to making the smart contract language Turing-complete without unbounded loops or unpredictable runtime costs, referenced against academic work on the topic.

- **Sigma Protocol Documentation**: Current state of Sigma language/protocol documentation was clarified — not yet finalized but LaTeX sources available in the codebase.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4145, 2018-08-11]: Token swap scheduled for "Christmas night" (implied Q4 2018).

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4172, 2018-08-15]: Confirmed 1 EFYT = 1 ERGOcash + 1 ERGOdata conversion ratio.

- [@Kaichao | Keyring, msg#4203, 2018-08-19]: Build configuration issue identified and PR submitted to fix missing build.sbt reference.

## Technical Q&A Worth Preserving

- **Q** (@LLB, msg#4173): Why does Ergo prefer the UTXO model?
  **A** (@Dmitry, msg#4174): It is more flexible.

- **Q** (@hawky, msg#4175): Could you provide an example of this improved flexibility?
  **A** (@Dmitry, msg#4176): Transactions from many users to many users, required for various mixing protocols.

- **Q** (@hawky, msg#4175): [Follow-up on UTXO flexibility]
  **A** (@Dmitry, msg#4178): UTXO allows chaining transactions more easily — you can create tx1→tx2 such that tx2 is only valid if tx1 was processed first.

- **Q** (@Komninos, msg#4182): Is there any documentation about the Sigma language?
  **A** (@Dmitry, msg#4183): Not finalized yet, but current version (LaTeX sources) available at https://github.com/ScorexFoundation/sigmastate-interpreter/tree/master/docs/wpaper

- **Q** (@LLB, msg#4184–4185): Can you emulate an account-oriented system using UTXO with a single address reused many times (Ethereum-like), and will the transaction model impose restrictions?
  **A** (@Dmitry, msg#4190): You can do it, however from a privacy perspective it is as bad as the account model.

- **Q** (@Kaichao | Keyring, msg#4201): Running Scorex with `sbt run` produces a null pointer exception; what did I miss?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4202): Is your config file correct?

## Links Shared

- [https://arxiv.org/pdf/1806.10116.pdf]: Academic paper on making Ergo smart contract language Turing-complete without unbounded loops.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/tree/master/docs/wpaper]: Sigma language documentation (LaTeX sources).

- [https://twitter.com/ergoplatformorg/status/1029766801612255232]: Official Ergo project Twitter (2018-08-15).

- [https://twitter.com/DmitryMeshkov/status/1030350969350119424]: Dmitry's Twitter (2018-08-17).

- [https://twitter.com/ergoplatformorg/status/1030421631498366976]: Official Ergo project Twitter (2018-08-17).

## Unresolved Questions

- **Exact mainnet launch date**: Only "Christmas night" (Q4 2018) provided as target; no precise date confirmed.

- **Token swap logistics**: Clarification needed on whether tokens must be moved from WAVES wallet to a specific wallet type/location before the swap occurs.

- **Sigma protocol finalization timeline**: No ETA given for when the Sigma language specification will be finalized.

---

**Note**: This week was primarily early-stage community onboarding with modest activity. Most messages were informational clarifications about tokenomics and basic technical architecture rather than major feature development or controversy.