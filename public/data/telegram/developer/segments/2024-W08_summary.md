---
title: "Ergo Developer Chat — 2024-W08"
date_start: "2024-02-19"
date_end: "2024-02-25"
type: telegram_weekly
channel: developer
week: "2024-W08"
source: telegram
message_count: 157
categories: [technical, governance, ecosystem, bridges, mining, defi, nft, community]
key_terms: [optimalInputs, dustLimit, unspent boxes, wallet rescan, input consolidation, mempool, explorer API, node sync, disk space, unconfirmed transactions, ErgoDevs DAO, "R&D organization", core development, transparency, contributor recruitment, PHP integration, payment gateway, dApp connector, Nautilus, ErgoPay]
---
# Ergo Developer Chat Summary — 2024-W08 (Feb 19–25)

## Key Topics Discussed

- **ErgoDevs DAO Formation**: kushti posted a formal proposal for a cyberspace-based R&D DAO to conduct research and development around Ergo protocol and maintain basic off-chain infrastructure functionalities. Multiple contributors expressed interest, with emphasis on recruiting more Rust developers.

- **Wallet Input Optimization**: Discussion on handling exchanges with excessive unspent boxes. kushti provided configuration guidance using `ergo.wallet.optimalInputs`, `/wallet/boxes/unspent` endpoints, and `dustLimit` settings to manage large input sets efficiently.

- **Explorer API Mempool Sync Issue**: Aco reported mempool transactions not appearing in official explorer API while visible in Sigmaspace. kushti identified root cause: one node behind explorer was out of disk space, and explorer was randomly selecting nodes instead of aggregating data.

- **PHP Payment Gateway Limitations**: Extended discussion on ERG payment integration for PHP-based websites. liquid_phase emphasized that FleetSDK (TypeScript) is the primary tooling; PHP lacks native support and requires custom integration per-use-case (authentication, validation, CMS signal). CryptocurrencyCheckout exists but is unmaintained.

- **Merged-Mined Sidechains R&D**: kushti reported progress on sidechain prototype including header verification code and transaction verification, with database stub mostly complete. NIPoPoWs-based trustless relay mechanism under development.

- **Dexy Protocol Testing**: Private testing feedback provided; dmitryusov working on fixes and improvements. Redemption proxy contract revisited by kushti.

- **Ephemeral Tokens (EIP 45)**: qx() introduced draft proposal for incentivized token burning with ephemeral smart contracts. Discussion on register allocation (R4–R6 per EIP-4) and cross-protocol interoperability via data inputs for ownership proofs.

- **Fleet SDK Token Burning Safeguards**: Community members noted that Fleet SDK enforces token burning checks (requiring explicit allowance), whereas ergo-lib-wasm and AppKit lack such checks. Aco reported learning this lesson via accidental token burn.

- **Scala 3 Migration & Typed Tags**: ccellado investigating type-tagged byte arrays in Scala 3 (Digest32/64). TypeTag removed; exploring macros and supertagged alternatives. Related scrypto PR merged with dirty but functional solution.

- **RocksDB PR Review**: kushti reviewing performance-related RocksDB pull request from fantaerik.

---

## Important Decisions or Announcements

- [@kushti, msg#25110, 2024-02-19]: **ErgoDevs DAO proposal posted** at https://www.ergoforum.org/t/ergodevs-r-d-dao-for-ergo-core/4663 with call for feedback and co-contributors.

- [@mgpai, msg#25222–25223, 2024-02-23]: **Proposed ErgoHack timing**: March 16–26 preferred; longer duration (2 weeks like Alephium) preferred over 3-day format for ecosystem projects to reach MVP.

- [@AngieHar, msg#25228, 2024-02-23]: **New ErgoHack format planned** for May (previously discussed); stay tuned for announcement.

- [@qx(), msg#25233, 2024-02-23]: **EIP 45 (Ephemeral Tokens) draft** released for discussion: https://github.com/ergoplatform/eips/pull/99/commits/20ba66fc9ce509ffe7928d08c2b1aad63ac6f422

- [@ccellado, msg#25179, 2024-02-21]: **Scala 3 type tagging solution merged** to scrypto (https://github.com/input-output-hk/scrypto/pull/108) with caveat that non-functioning test disabled; functioning test to be added later.

- [@stenolog_79565, msg#25230, 2024-02-23]: **Multiple PRs ready for review**: https://github.com/ergoplatform/ergo/pull/2116, https://github.com/ergoplatform/ergo/pull/2121 (kushti to review from weekend).

---

## Technical Q&A Worth Preserving

- **Q** (@peterpan0708, regarding exchange wallet with 5000+ unspent boxes): How to optimize transaction assembly with large input sets?
  **A** (@kushti, msg#25108): Use `ergo.wallet.optimalInputs = 80 or 100` with repeated self-transfers to consolidate; or manually via `/wallet/boxes/unspent` and `/wallet/transaction/send`. For many small-value inputs, set `ergo.wallet.dustLimit = 1000000000` (1 ERG), rescan, collect, then lower limit and rescan again. Exchange-specific node config available in docs.

- **Q** (@Aco, msg#25116): Why doesn't official explorer API show mempool transactions when Sigmaspace does?
  **A** (@kushti, msg#25120): One node behind explorer was out of disk space; explorer randomly selects nodes rather than aggregating, causing inconsistent mempool visibility.

- **Q** (@cannon_q, msg#25125): Can a standard PHP payment script be created, or is each smart contract inherently different?
  **A** (@liquid_phase, msg#25126): Ergopay requires JVM backend for serialization (inefficient for web stack). FleetSDK (TypeScript/wasm) is the standard; for PHP, use JavaScript frontend with Nautilus wallet connector. Backend validation (CMS signal, download authorization) remains app-specific and cannot be fully templated.

- **Q** (@Aco, msg#25199): Why can tokens be burned without using a dedicated function?
  **A** (@Pulsarz, msg#25200): FleetSDK enforces token burning checks and requires explicit allowance. ergo-lib-wasm and AppKit lack such safeguards; output validation is developer responsibility.

- **Q** (@Luivatra, msg#25235): If ephemeral tokens are minted into the contract, don't register requirements clash with EIP-4?
  **A** (@qx(), msg#25239): EIP-4 uses R4–R6; EIP 45 proposes R4 holds owner address (name), R5 holds burn height/amount (description). R6 reserved for decimals per EIP-4 spec. Data consolidation into R5 possible for multi-point use-case identification.

- **Q** (@mgpai, msg#25267): What is kushti's view on Vitalik's take on L1 consensus complexity and centralization risk?
  **A** (@kushti, msg#25268): His stance on L1 consensus failures alarming; would not recommend blockchains where core devs have appetite for endless centralization.

---

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2098]: Merged-mined sidechain header verification code (under kushti's review).
- [https://www.ergoforum.org/t/ergodevs-r-d-dao-for-ergo-core/4663]: ErgoDevs DAO proposal for protocol R&D and off-chain infrastructure.
- [https://docs.ergoplatform.com/dev/Integration/guide/#exchange-specific-node-settings]: Exchange-specific Ergo node configuration guide.
- [https://github.com/TremendouslyHighFrequency/ErgoDappConnector-PHP]: Open-source PHP dApp connector for Laravel (liquid_phase's fork).
- [https://github.com/TremendouslyHighFrequency/THzdAppConnectorLAMBDA]: Lambda deployment setup for PHP dApp connector.
- [https://cryptocurrencycheckout.com/coin/ergo]: CryptocurrencyCheckout Ergo integration (unmaintained; uses explorer API).
- [https://fleet-sdk.github.io/docs/]: FleetSDK documentation (primary TypeScript tooling for Ergo payments).
- [https://github.com/input-output-hk/scrypto/pull/108]: Scala 3 type-tagging solution (merged).
- [https://github.com/input-output-hk/scrypto/issues/111]: Open issue for functioning Tag test in scrypto.
- [https://github.com/ergoplatform/eips/pull/99/commits/20ba66fc9ce509ffe7928d08c2b1aad63ac6f422]: EIP 45 Ephemeral Tokens draft.
- [https://github.com/ergoplatform/ergo/pull/2116]: stenolog_79565 PR ready for review.
- [https://github.com/ergoplatform/ergo/pull/2121]: stenolog_79565 PR ready for review.
- [https://github.com/ergoplatform/ergo/pull/2113]: Message class refactoring PR (kushti to review).
- [https://github.com/rosen-bridge/guard-service/commit/7f17f28e82c19fa3ac9234c12d2329f9451a2a55]: Rosen Bridge guard-service updated for new contract version.
- [https://app.paideia.im/Sigmanauts/proposal/ergone-promotion-80aa77cd-6dd3-47c7-96d2-a6a16211a4c3]: Sigmanauts DAO proposal for ERG distribution to POCOP users.

---

## Unresolved Questions

- **Scala 3 TypeTag Alternatives**: Full type-safety for Digest32/64 in Scala 3 still uncertain; macro-based solutions being explored (ccellado investigating `quotes`). Test coverage incomplete.
- **Explorer API Aggregation**: Whether explorer will implement node aggregation (vs. random selection) for consistent mempool visibility not confirmed.
- **ErgoHack Format & Timing**: Exact duration and May launch details TBD (AngieHar to announce).
- **EIP 45 Cross-Protocol Compatibility**: How ephemeral tokens interact with protocols requiring direct token transfers (not just data-input proofs) — still under discussion (Luivatra raised concern).
- **PHP Payment Framework**: Whether community will develop standardized PHP template/library or remain custom per-integration (liquid_phase indicated no immediate solution planned).