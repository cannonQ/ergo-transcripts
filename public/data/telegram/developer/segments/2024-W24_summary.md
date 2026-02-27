# Ergo Developer Chat Summary — 2024-W24
**Period:** 2024-06-10 to 2024-06-16

---

## Key Topics Discussed

- **`sign_data` Implementation & Optimization**: EIP-44 merged but issues persist. Dusek reported optimizations in sigma-rust reducing signing time for 1000 outputs from 8s to ~900ms in Rust, but C bindings and Go implementations (ergo-lib-go) showing much slower performance (50s+ for 1004 inputs). Issue being investigated with rustc optimizations (LTO, codegen-units) yielding 50% improvements.

- **Fleet & Nautilus Development**: Fleet SDK v0.4.2 released, replacing sigma-rust with SigmaJS as execution backend for mock-chain. Nautilus Abyss v0.10.2 released with dApp Connector improvements and Sigmanauts token blacklist support. Refactored Nautilus rolling out to main channel next week; developers urged to test dApps against Abyss first.

- **ErgoScript Blockly Editor**: C8 developing visual ErgoScript builder at escript.online/blockly, supporting multisig construction (&&, ||, AT_LEAST). Seeking EBNF grammar definition to enable two-way blockly ↔ ErgoScript conversion. UX improvements ongoing (tooltips, color fixes).

- **Block Time & Throughput Discussion**: Extended debate on faster blocks vs. security. DeathGripson raised concerns about decreased PoW difficulty reducing network security and hashrate. Kushti countered that 2-minute blocks already conservative given 8M execution cost/block and network propagation delays. Consensus: apply solutions at wallet/dApp layer (chained transactions, unconfirmed balance visibility) rather than consensus changes. Sub-blocks and sidechains discussed as future scalability options without immediate utility.

- **Palmyra & Chainlink Integration**: Dan (Ergo Foundation Advisor) detailed Palmyra's on-chain warehouse receipts for decentralized trade financing using Chainlink's proof of reserve oracles and IoT sensors (cameras, weight/motion sensors). Building native Ergo Oracle Pools (v1 & v2 for Dexy Gold) as alternative. Rosen Bridge positioning Ergo as DeFi supplier across chains; caution against tribalism when companies use subsets of ecosystem.

- **Trade House & Order Book DEX Design**: QX() advocating for order book model (Trade House) over AMM for transparency, slippage control, and partial fills. Contrasted with Spectrum (AMM), noting order books allow peer-to-peer matching without liquidity pooling impermanent loss concerns. Trade House supports multiple upgrade keys for operator flexibility.

- **Crystal Pool & Layer 2 Concepts**: C8 demonstrating offchain bank (Plasma-like) with timelock multisig contracts. Deposits collateralize trading; service matches orders offline, submits signed transactions on-chain. Timelock prevents fund hostage-taking. DeathGripson proposing atomic swap preimages for settlement guarantees; kushti sketching merge-mined sidechain with reduced P2PK scripts minimizing mainchain load.

- **Ergo 6.0 Protocol Development**: Kushti finalizing scope via EIP-50 draft. New collection methods (distinct, reverse) implemented, Bulletproofs range proof & circuit verification in progress. 5.0.22 deployed to 213 server, both 5.0.22 and 5.1.0 releasing end of next week. ChainCash paper accepted to RAMICS'24 conference.

- **Wallet Restore & Node Configuration Issues**: Michael troubleshooting address derivation differences when restoring wallets across node instances. Kushti advised skipping mnemonic password on restore; issue persists across 5.0.21 versions. Running multiple nodes on same machine requires port changes (9030, 9053) in ergo.conf; wallet folder deletion triggers rescanning, not full reindex.

- **Satergo Wallet Updates**: Transaction history optimization, price display error handling, replace-by-fee (RBF) support in progress. Exploring fundraiser for Android cold signer via Bluetooth, reusable by other wallets.

- **ErgoMonitor & Rosen Bridge**: Pulsarz added RocksDB-backed RosenBridge Bitcoin monitoring, refactored TX processing using tokenMap from GitHub.

---

## Important Decisions or Announcements

- [@kushti0978, msg#27442, 2024-06-10]: Assigned bounties: 300 ERG for sigmastate-interpreter #462, 200 ERG for #416, with EIP-50 implementation instructions (@ccellado, @s_megatron, others).

- [@kushti0978, msg#27447, 2024-06-10]: Ergo 6.0 issues nearly finalized in EIP-50 draft; all related PRs/issues consolidated.

- [@kushti0978, msg#27471, 2024-06-11]: Weekly Ergo Developers chat Wed, June 12th, 1PM UTC; developers invited to share updates.

- [@arobsn, msg#27493, 2024-06-12]: Nautilus Abyss v0.10.2 released; refactored main release rolling out next week—dApps must be tested against Abyss first.

- [@arobsn, msg#27497, msg#27497, 2024-06-12]: Fleet docs repo (https://github.com/fleet-sdk/docs) available for hosting community tutorials.

- [@kushti0978, msg#27565, 2024-06-12]: EIP-50 validation against Lithos, trustless relay, Bitcoin transaction parsing, Bulletproofs, and rollup constructions.

---

## Technical Q&A Worth Preserving

- **Q** (@owies, msg#27420): Is `sign_data` properly implemented? EIP-44 merged but same error persists.
  **A** (@dusek_, msg#27421): Try PR #752 (sigma-rust); achieved 8s → 900ms optimization on Rust benchmarks (1000 outputs). However, C bindings slower; ergo-lib-go showing 50s for 1004 inputs even with optimizations.

- **Q** (@justblake3911, msg#27425): Security of storing wallet address + assetId in DB, using Fleet dApp connector to verify ownership?
  **A** (@c8, msg#27426): Need three-step verification: (1) browser proves address ownership via signed message/transaction, (2) server verifies proof, (3) server checks valid "Login Key" asset at address. (@HQΣr, msg#27446): ErgoAuth provides "connect" without sending assets.

- **Q** (@justblake3911, msg#27427, msg#27429): Can bots circumvent wallet-signing captcha?
  **A** (@c8, msg#27431): Yes, bots can generate 1000 wallets and sign transactions; this doesn't add effort. (@c8, msg#27436): Better approaches: Google Captcha or require proof of non-spammy account (verified Twitter). (@c8, msg#27445): Signing message equivalent to signing transaction; ErgoAuth better.

- **Q** (@c8, msg#27482): How to test individual inputs in signed transaction with ergo-lib-wasm-node without external API?
  **A** (@dusek_, msg#27485): Use `validate_tx` for complete transaction or `verify_tx_input_proof` for single input proof validation.

- **Q** (@c8, msg#27483): Feedback on ErgoScript Blockly editor (escript.online/blockly)?
  **A** (@kushti0978, msg#27487): Looks nice. Can it combine only two inputs? (@c8, msg#27544): Designed to encourage valid constructs; AND/OR as AT_LEAST equivalents cause composability issues if AT_LEAST remains. Seeking better UX design proposals.

- **Q** (@Michael, msg#27499): Run 2 nodes on same PC without VM?
  **A** (@qx(), msg#27500): Change watcher port, PostgreSQL port, watcher health port. (@Flying Pig™, msg#27519): Change ports in ergo.conf; copy folder to skip sync. Delete wallet folder for new wallet. (@kushti khushi, msg#27533): Yes, multiple nodes possible; changed 9030 and 9053 ports.

- **Q** (@c8, msg#27567): Best approach today for working with unconfirmed state—using mempool for chaining?
  **A** (@c8, msg#27590): Crystal Pool service flow: (1) UI requests unsigned TX, (2) service provides TX from latest deposit UTXO, (3) UI validates, signs, (4) service adds multisig, submits. Timelock multisig prevents fund hostage-taking.

- **Q** (@c8, msg#27634): Does Ergo use secp256k1 and Curve25519?
  **A** (@kushti khushi, msg#27635): Only secp256k1.

- **Q** (@Michael, msg#27636): Restored seed shows different address each time; deleted wallet folder, restored again, another address appears.
  **A** (@HQΣr, msg#27637-27639): Use seedphrase + password, restore with same password. (@kushti khushi, msg#27643): Skip mnemonic password when restoring.

- **Q** (@c8, msg#27627): Keywords for learning signing math behind Ergo?
  **A** (@dusek_, msg#27628): Study Schnorr signatures (conduition.io post); note Ergo notation "a * G" equals "g^a" elsewhere. DLOG foundation.

- **Q** (@c8, msg#27622): Multisig signing failing; how to test each input in signed transaction?
  **A** (@dusek_, msg#27624): `getProof` incorrect; get proof directly (screenshot shows corrected method). Tests pass now. (@dusek_, msg#27625): Providing JSON as proof invalid; use direct proof extraction.

---

## Links Shared

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/752]: Sigma-rust optimization PR for `sign_data` performance.
- [http://147.182.244.219/ergobabelfees.html]: Instructions for using Babel Fees with Fleet.
- [https://github.com/ergoplatform/eips/pull/100]: EIP-50 implementation instructions for new methods.
- [https://github.com/ergoplatform/ergo/pull/2164]: Reduce transaction confirmation times by considering transactions in current block candidate.
- [https://conduition.io/cryptography/schnorr/]: Excellent Schnorr signature cryptography tutorial.
- [https://github.com/ergoplatform/sigma-rust/issues/753]: Multisig signing issue & working examples (resolved).
- [https://github.com/fleet-sdk/docs]: Fleet SDK docs repo for community tutorials.
- [https://savonarolalabs.github.io/crystal-pool/#/05-Smart-Contracts]: Crystal Pool smart contracts (deposit, swap, timelock multisig).
- [https://escript.online/blockly]: ErgoScript Blockly visual editor.
- [https://ergofaucet.org/]: ERG testnet faucet.
- [https://api-testnet.ergoplatform.com/api/v1/transactions/1a4525fc5a8b37ee5c0fe95b76d6b8fa1355d184ea3463df5a1e5ea164705113]: Testnet TX reference (box lookup error).

---

## Unresolved Questions

- **C bindings & Go implementation performance**: Dusek's Rust optimizations (900ms) not translating to ergo-lib-go (50s+ for similar input size). Root cause unclear; cloning in C bindings suspected but needs deeper investigation. (@Pgr456, msg#27479): Adding benchmark function to ergo-lib-go to track future improvements.

- **Blockly EBNF Grammar**: C8 seeking complete EBNF for ErgoScript to enable bidirectional blockly ↔ ErgoScript conversion. (@c8, msg#27484): "If someone comes up with a design that works better for new users, I'm happy to implement it."

- **Block Time Consensus**: Debate unresolved—faster blocks trade security (PoW difficulty, hashrate, emission acceleration) against UX. Consensus building toward wallet/dApp-layer solutions (chained transactions, unconfirmed visibility) rather than protocol change. Sub-blocks and L2 deferred until congestion justifies deployment.

- **Crystal Pool Trust Model**: DeathGripson proposed atomic swap preimages for settlement guarantees; C8 to implement app-layer demo to evaluate architecture fitness. Deeper cryptographic details TBD.

- **Satergo Cold Signer Fundraiser**: Aberg exploring Android-via-Bluetooth cold signer feature; demand assessment and fundraising goal TBD (@Aberg, msg#27492).

- **Michael's Wallet Restore Issue**: Address derivation changing across restores on Windows 5.0.21 nodes. Suggested skip mnemonic password, but issue persists. Root cause (config, mnemonic format, node version) still unclear. Kushti requested PM of config for debugging.

---