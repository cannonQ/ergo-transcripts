---
title: "Ergo Developer Chat — 2025-W28"
date_start: "2025-07-07"
date_end: "2025-07-13"
type: telegram_weekly
channel: developer
week: "2025-W28"
source: telegram
message_count: 74
categories: [technical, wallet, ecosystem, defi]
key_terms: [sidechains, merged-mining, Rust, framework, sidechain spec, testnet, wallet, scanning, synchronization, EIP-27, node configuration, rollbacks, finality, block confirmation, double-spending, security, Nautilus, multi-transaction, chaining, Fleet SDK]
---
# Ergo Developer Chat — Week 2025-W28 Summary

## Key Topics Discussed

- **Merged-mined sidechains framework**: kushti shared R&D progress on implementing merged-mined sidechains in Rust, with empty repos ready for contributions. A spec draft was promised for the following week. AutoJanitor (RustChain project) expressed interest in contributing, noting the PoW design wouldn't impact Ergo mining performance.

- **Sub-blocks implementation**: Ongoing work on todos in sub-blocks code, mostly small fixes and optimizations as part of protocol R&D.

- **Git Circles specification**: A friend of kushti completed a spec; kushti received it and planned to publish shortly.

- **Testnet wallet synchronization bug (EIP-27)**: Testnet node experienced wallet scanning failures reverting to height 0. Root cause identified as old EIP-27 token injection height settings in the config. Once the EIP-27 height was passed, nodes recovered without updates.

- **AVL Tree operations in JavaScript**: anon_br inquired whether Sigma State correctly exports AVL Tree operations to JS for use in dApps. kushti confirmed they should be available and offered ErgoScript examples.

- **Multi-transaction signing via Nautilus**: MGpai asked if Nautilus supports submitting chained transactions with a single signature. anon_br noted this is planned but not yet implemented; referenced GitHub issue #213 and noted Fleet SDK already supports chaining unsigned transactions.

- **Token distribution across multiple UTXOs in mint transactions**: MGpai asked if a single mint transaction can distribute tokens to multiple UTXOs. Cheese Enthusiast confirmed it's possible but may not follow certain EIP standards.

- **Rollback probabilities and finality guarantees**: MGpai asked about Ergo rollback frequency and block confirmation guarantees. kushti referenced Satoshi's paper and Pass-Seeman-Shelat (2016) for probabilistic analysis, noting Ergo follows Bitcoin's model. c8 noted finality is cost-based (e.g., $1B = ~1 week on Bitcoin).

## Important Decisions or Announcements

- [@kushti, msg#34892, 2025-07-09]: Merged-mined sidechains framework repos created in Rust; spec draft to be published following week.
- [@qx(), msg#34930, 2025-07-12]: Testnet node restored to operational status; miners should update mining node IP to `128.253.41.110:9052` (with `74.69.167.57:9052` as backup).
- [@kushti, msg#34931, 2025-07-12]: EIP-27 token injection height config issue identified as root cause of testnet wallet scanning failure; no updates required after height is passed.
- [@anon_br, msg#34919, 2025-07-10]: Multi-transaction signing with single signature in Nautilus planned but not yet prioritized; can be elevated if needed.

## Technical Q&A Worth Preserving

- **Q** (@MGpai, msg#34885): How frequent are rollbacks on Ergo, and what block depth guarantees no rollbacks?
  **A** (@kushti, msg#34886): Ergo follows Bitcoin's model; refer to Satoshi's paper and Pass-Seeman-Shelat (2016) for rollback probabilities.

- **Q** (@MGpai, msg#34887): For Cardano you have guarantee of 36 hours—does Ergo have similar finality guarantees?
  **A** (@c8, msg#34889): Finality is cost-based, not time-based. Example: $1B transaction on Bitcoin requires ~1 week of cost to make double-spending uneconomical.

- **Q** (@MGpai, msg#34908, reply to finality question): What rollback depth does Spectrum DEX assume?
  **A** (inferred from chat): Spectrum appears to use 256 blocks as maximum rollback depth.

- **Q** (@MGpai, msg#34917): Is it possible to submit multiple chained transactions with only one signature via Nautilus?
  **A** (@anon_br, msg#34919): Not yet, but planned. Referenced GitHub issue #213. Alternatively, Fleet SDK supports easy chaining of unsigned transactions: https://github.com/fleet-sdk/fleet/blob/62b7f170645987f9a3830b86f92a58dcaa4ef797/packages/core/src/models/ergoUnsignedTransaction.spec.ts#L120

- **Q** (@anon_br, msg#34942): Are AVL Tree operations correctly exported to JavaScript in sigmastate?
  **A** (@kushti, msg#34944): Yes, they should be there. Offered to provide ErgoScript examples for testing.

- **Q** (@MGpai, msg#34947): Is it possible to distribute tokens to multiple UTXOs in the same mint transaction?
  **A** (@Cheese Enthusiast, msg#34950-34951): Yes, possible but may not follow certain EIP standards.

## Links Shared

- [https://github.com/ergoplatform/sigma-rust/pull/790]: Sigma Rust PR #790 approved by dusek with bounty attached.
- [https://x.com/0xnidhii/status/1941888936613175334]: Tweet shared by kushti (content not specified in chat).
- [https://github.com/nautls/nautilus-wallet/issues/213]: GitHub issue tracking multi-transaction signing with single signature feature request.
- [https://github.com/fleet-sdk/fleet/blob/62b7f170645987f9a3830b86f92a58dcaa4ef797/packages/core/src/models/ergoUnsignedTransaction.spec.ts#L120]: Fleet SDK example demonstrating chaining of unsigned transactions.
- [Discord config link, msg#34935]: qx() shared node configuration fix for testnet mining setup (requires Discord access).

## Unresolved Questions

- **Wallet scanning regression root cause depth**: While EIP-27 config was identified as the immediate cause, deeper investigation into why the wallet service enters infinite rescan loop may warrant follow-up.
- **Spectrum DEX rollback depth rationale**: The 256-block assumption needs clarification on whether this aligns with Ergo's security model or represents conservative application design.
- **AVL Tree JS export completeness**: anon_br's original concern about whether exports are complete or partial remains unconfirmed; depends on ErgoScript examples kushti offered.
- **EIP compliance for multi-UTXO token minting**: Which EIP standards are violated or not followed by multi-UTXO mint transactions requires clarification.

---

**Activity Level**: Moderate. 74 messages over 6 days; primarily protocol R&D updates, infrastructure troubleshooting, and targeted technical Q&A from active developers (kushti, anon_br, MGpai, c8, qx()). AutoJanitor's RustChain project (hybrid PoW + AI) introduced new collaborator interest in merged-mined sidechains.