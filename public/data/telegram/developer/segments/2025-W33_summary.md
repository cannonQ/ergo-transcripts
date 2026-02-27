# Ergo Developer Chat Summary — 2025-W33

## Key Topics Discussed

- **Sub-blocks Implementation**: kushti began reviewing PRs and optimizing code for sub-blocks, checking for DoS attack vectors. Testing on devnet is underway with public testnet deployment expected shortly. Adopting 6-byte hashes and high/low bandwidth modes from BIP152 compact block relay.

- **Ergo Node 6.0.1 Release & 6.0.3 Candidates**: Node 6.0.1 is live; SigmaSDK 6.0.2 released with 6.0.3 candidate PRs in review. Release process now aligned with Bitcoin's model. Several PRs pending review including NIPoPoWs deserialization support needed for sub-blocks.

- **Rosen Bridge Updates**: Event page UI refinements, Smart Search, sorting, and pagination implemented. Ergo network enhanced for asset handling and box selection. Watcher service v2 integrated all chains into scanner; rosen-service refactored with chain manager structure and health-check services.

- **Lithos Protocol Development**: Off-chain fraud proof and diff contracts in progress. Stratum code optimized for efficiency. Contracts being prepared for testnet deployment.

- **Nautilus Wallet Research**: Passwordless transaction signing research underway. Keystone integration final steps pending; last sigma-rust PR merged. Minotaur wallet 3.1.0 released with asset collapsing, Buy ERG button, color updates.

- **Sigmaspace & Spectrum DEX Transition**: Keystone working toward Nautilus integration. Sigmaspace added new API endpoints for ergoplatform explorer compatibility. Discussing community takeover of ergodex.io with potential DAO conversion.

- **Contract Testing & Development Tooling**: Debate on optimal contract debugging approaches—scastie vs. direct function compilation. mgPai demonstrated JSON UTXO conversion method for local testing. Fleet SDK mock-chain recommended for testing.

## Important Decisions or Announcements

- [@kushti, msg#35388, 2025-08-11]: Submitted first refactoring PR (#2180) toward sub-blocks implementation for review.

- [@kushti, msg#35409, 2025-08-13]: SigmaSDK 6.0.2 released; Ergo node 6.0.1 released; sub-blocks whitepaper in progress; DoS vector checking ongoing.

- [@kushti, msg#35410, 2025-08-13]: Early draft whitepaper for Braid (double merge-mined Bitcoin-Ergo sidechain) published at https://github.com/BetterMoneyLabs/braid/blob/master/whitepaper/whitepaper.pdf.

- [@Michael, msg#35412, 2025-08-13]: Lithos Protocol getting ready for testnet with cleaned-up stratum code and contract documentation improvements.

- [@vorujack (via DiscordBridge), msg#35463, 2025-08-14]: Minotaur wallet 3.1.0 released with asset collapse, Buy ERG button, color style updates, and dependency updates.

- [@kushti, msg#35471, 2025-08-16]: Sub-blocks adopting BIP152 compact block relay techniques (6-byte hashes, high/low bandwidth modes); devnet testing underway, public testnet deployment imminent.

## Technical Q&A Worth Preserving

- **Q** (@Josemi, msg#35457): Best practice for debugging ErgoScript contracts without repeated mainnet interaction? Compared scastie string-based vs. function-based approaches.
  **A** (@mgPai, msg#35461-35462): Convert input UTXO to JSON string, replace ErgoTree with custom compiled version (e.g., remove conditions for testing), evaluate locally. Works on already-deployed mainnet transactions too. Also using on Cardano.

- **Q** (@Josemi, msg#35464): Request for contract debugging video.
  **A** (@mgPai, msg#35460): Indicated availability to record.

- **Q** (@c8, msg#35468): Simple examples for Fleet SDK mock-chain?
  **A** (@anon_br, msg#35469): Simplest example in fleet-by-example package: https://github.com/fleet-sdk/fleet-by-example/blob/master/tests/timedFundContract.spec.ts

- **Q** (@kushti, msg#35435-36): Do we need more documentation on P2P messages?
  **A** (@kushti, msg#35437): Code is straightforward; Rust counterpart for deserializing NIPoPoWs messages may need Sigma 6.0.3 inclusion for sub-blocks support.

- **Q** (@HQΣr, msg#35418): When can VoltPay be added to Minotaur?
  **A** (Unresolved; no direct response recorded)

- **Q** (@yasha via DiscordBridge, msg#35473): Script to consolidate wallet from seed phrase/private key?
  **A** (@kushti via DiscordBridge, msg#35476): Suggest importing into Nautilus or using optimized walletInputs in node settings. Custom scripts existed in oracle pools context (qx() reference).

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2180]: Sub-blocks first refactoring PR (small, review needed)
- [https://github.com/BetterMoneyLabs/braid/blob/master/whitepaper/whitepaper.pdf]: Braid whitepaper (double merge-mined Bitcoin-Ergo sidechain)
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1076]: SigmaSDK release process alignment PR
- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.1]: Ergo node 6.0.1 release
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1061]: Sigma 6.0.3 candidate PR (jozinek)
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1070]: Colby Cellador pending PR (status requested)
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1069]: NIPoPoWs deserialization PR (needed for sub-blocks)
- [https://github.com/ergoplatform/ergo/issues/1554] and [https://github.com/ergoplatform/ergo/issues/1365]: NIPoPoWs-related issues (both marked implemented 2023, autoclose pending)
- [https://scastie.scala-lang.org/hntoyWvcSDazaxap0zqeag]: Contract string compilation Scastie example
- [https://scastie.scala-lang.org/DYmWz9EcSd2ZISfb2teC6w]: Contract function Scastie example
- [https://github.com/fleet-sdk/fleet/tree/master/packages/mock-chain]: Fleet SDK mock-chain package
- [https://github.com/fleet-sdk/fleet-by-example/blob/master/tests/timedFundContract.spec.ts]: Fleet-by-example timed fund contract test
- [https://bitcoinops.org/en/topics/compact-block-relay/]: BIP152 compact block relay reference
- [https://dioxuslabs.com]: Dioxus UI framework (feedback requested)
- [https://github.com/moon-miner/feeless-Ergodex-run-script]: Bash script for feeless Spectrum DEX setup

## Unresolved Questions

- **Sub-blocks DoS vector mitigation**: kushti flagged need for community help checking/mitigating DoS attack vectors affecting sub-block-supporting nodes. Testing can proceed on devnet/testnet in parallel. (@kushti, msg#35441)

- **NIPoPoWs autoclose**: Two GitHub issues (#1554, #1365) marked as implemented in 2023 but still open; autoclose mechanism may have failed. (@ntech/kushti discussion, msg#35431-35434)

- **VoltPay integration timeline in Minotaur**: Asked but no timeline provided. (@HQΣr, msg#35418)

- **Braid whitepaper feedback**: Early draft published; community feedback solicited but none recorded in this chat segment. (@kushti, msg#35410)

- **Spectrum DEX DAO conversion viability**: Discussing community takeover of ergodex.io; potential DAO structure mentioned but no formal decision recorded. (@Pgr456 via DiscordBridge, msg#35408)