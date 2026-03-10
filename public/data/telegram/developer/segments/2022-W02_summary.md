---
title: "Ergo Developer Chat — 2022-W02"
date_start: "2022-01-10"
date_end: "2022-01-16"
type: telegram_weekly
channel: developer
week: "2022-W02"
source: telegram
message_count: 60
categories: [wallet, technical, defi, ecosystem, community]
key_terms: [mnemonic extension, bip39 password, passphrase, tooltip, UI terminology, ergotree, hash, contract, output box, profit sharing, python implementation, transaction confirmation, mempool, fee, priority, chained transactions, staking contract, ergopad, backend implementation, L1]
---
# Ergo Developer Chat Summary — 2022-W02

## Key Topics Discussed

- **BIP39 Mnemonic Passphrase Terminology**: Discussion of naming conventions for the optional BIP39 passphrase feature in wallets. Terms considered included "additional word," "custom word," and "mnemonic extension." Chosen terminology: "mnemonic extension" with tooltip explanation for clarity in Nautilus wallet.

- **ErgoTree Hash Verification in Contracts**: Technical discussion on using ErgoTree byte hashes to verify output box contracts in staking/profit-sharing scripts, with investigation into whether this approach reduces script size.

- **Arbitrary Message Signing in dApp Connector**: Current state is that arbitrary message signing is supported only in low-level interpreter API, not yet in Sigma Rust or the dApp connector. Future roadmap includes expanding dApp connector capabilities for message signing.

- **Transaction Confirmation Delays**: Investigation of a 24–30 minute transaction confirmation on mainnet; determined to be related to mempool fee market dynamics and transaction prioritization rather than network issues.

- **Wallet Fee Configuration**: User feedback that existing Ergo wallets lack UI controls for setting custom transaction fees per byte, forcing users to accept default fee rates.

- **Nautilus Wallet Drydock Program**: Armeanio announced a private testing/feedback group for Nautilus wallet stability and feature validation.

- **Documentation HTTPS Migration**: Glasgow announced SSL certificate completion for ergoplatform.com/docs.

- **Discord-Telegram Bridge for Development**: Glasgow initiated bridging of the Telegram #development channel to Discord #dev-support to serve developers not on Discord, with community support for this approach.

## Important Decisions or Announcements

- [@Capt. Nemo, msg#208, 2022-01-10]: Will use "mnemonic extension" terminology with tooltip explanation in Nautilus wallet.

- [@Armeanio, msg#258, 2022-01-23]: Nautilus Drydock private group launched for feedback on wallet stability; users invited to join and report issues.

- [@Glasgow, msg#259, 2022-01-26]: SSL certificate successfully deployed for ergoplatform.com/docs.

- [@Glasgow, msg#265–267, 2022-01-26]: Decision to bridge Telegram #development channel to Discord #dev-support (chosen over #development channel due to noise concerns).

## Technical Q&A Worth Preserving

- **Q** (@Ilya, msg#243): What can be signed with the dApp connector — arbitrary data or only UTXO transactions? Can a signed transaction JSON reveal which wallet ID signed it?
  
  **A** (@Luivatra, msg#246): All signing operations in Ergo are transactions. To change data in registers, you must spend the box and recreate it with new register values. The second question (wallet ID identification) remains unanswered (@Luivatra, msg#249).

- **Q** (@Luivatra, msg#211): Why does the ergoprofitsharing script use a hash of ErgoTree bytes to verify the output box contract — is this a script size optimization?
  
  **A** (@mhs_sam, implied context): This pattern is used in Ergo contracts for efficient contract verification; Luivatra planned to implement equivalent logic in Python.

- **Q** (@Luivatra, msg#238): Is the Radix L1 a sidechain or independent chain? Article says "watch out Solidity" implying EVM, but later text suggests independent chain.
  
  **A** (@Kevin, msg#239, 242): Radix is an independent L1 with proof of stake and sharding consensus; they developed their own language (Scrypto) similar to Ergo's approach with ErgoScript.

- **Q** (@Ilya, msg#215–216): Why did a simple transaction take 24–30 minutes to confirm?
  
  **A** (@Glasgow, msg#226): Mempool congestion and fee market competition; transactions with higher fee-per-byte achieved faster priority. Standard response: broadcast complaint to "speak to the manager" (blockchain metaphor).

- **Q** (@kushti, msg#253): Current status of arbitrary message signing in dApp connector?
  
  **A** (@kushti, msg#253): Signing arbitrary messages is supported only in low-level interpreter API, not yet in Sigma Rust or dApp connector. A stuck PR exists for Node API method; future contributor could finish this work.

- **Q** (@Kevin, msg#247): Where should a Vietnamese translation of Paper Wallet be submitted?
  
  **A** (unresolved): No answer provided in chat.

## Links Shared

- [https://explorer.ergoplatform.com/en/transactions/262e85b961c3a3325b5aa4427a0cb60a18ac783b8a3278b76600553ff24374e5]: Transaction example used in confirmation delay discussion (@Ilya, msg#215).

- [https://github.com/ergo-pad/ergopad/blob/staking-contracts/backend/app/contracts/staking.md]: ErgoPad staking contract documentation and implementation reference (@Luivatra, msg#228).

- [https://cointelegraph.com/news/watch-out-solidity-new-project-aims-to-tackle-downsides-of-coding-defi-projects]: Article comparing Radix L1 smart contract language design to Ergo's philosophy (@Kevin, msg#237).

- [https://www.reddit.com/r/cardano/comments/qdjpti/one_of_the_leading_upcoming_dexs_from_cardano/]: Cardano DEX discussion shared for comparison context (@Glasgow, msg#235).

- [https://t.me/+vae2xeSehFE2OWVh]: Nautilus Drydock private program group (Telegram) (@Armeanio, msg#258).

- [https://docs.ergoplatform.com/]: Official Ergo documentation now with SSL certificate (@Glasgow, msg#259).

- [https://twitter.com/ergomergoadargo/status/1484842664998707208]: Event announcement (referenced by Jennie D, msg#255; context not fully visible).

- [https://twitter.com/pjsstator/status/1489966875232686083]: Community event invitation (@Jennie D, msg#353).

- [https://twitter.com/DanielTetsuyama/status/1489971231692836864]: Community event or discussion link (@Jennie D, msg#354).

## Unresolved Questions

- **Wallet ID identification from signed transactions**: @Ilya asked whether a signed transaction JSON can reveal which wallet ID signed it; @Luivatra replied "No dont know that" (@Luivatra, msg#249).

- **Translation submission process**: @Kevin asked where to submit a Vietnamese translation of Paper Wallet; no answer provided.

- **Arbitrary message signing timeline**: @kushti indicated a PR for Node API message signing is "stuck" but did not provide ETA or next steps beyond inviting new contributors (@kushti, msg#253).

- **Custom fee UI in wallets**: @Ilya noted that existing Ergo wallets lack UI controls for per-byte fee configuration. No solution or roadmap commitment mentioned.