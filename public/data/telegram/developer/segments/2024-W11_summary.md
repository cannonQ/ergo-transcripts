# Ergo Developer Chat Summary — 2024-W11
**Period:** 2024-03-11 to 2024-03-17  
**Messages Reviewed:** 261  
**Participants:** 13 core + bridge participants

---

## Key Topics Discussed

- **Git Standards and Development Process**: Extensive discussion on whether Ergo's core repositories should adopt standardized git rules (commit squashing, PR templates, issue templates). Tension between centralizing development standards and maintaining decentralization. [@kushti, @stenolog, multiple msgs 2024-03-11 to 2024-03-12]

- **Monotonic Height Rule (v5.0 consensus soft-fork)**: Creation height of output boxes must now be ≥ max height of input boxes (consensus rule since Autumn 2022). Prevents boxes from being created with height 0 and claimed immediately by storage rent. [@dusek_, @Luivatra, msgs #25701-#25707, 2024-03-12]

- **P2SH Address Encoding and ErgoTree Versioning**: Question of whether P2SH addresses should encode ErgoTree version to ensure tracker compatibility across tree versions. Two proposed solutions: document tracking procedure or embed version in P2SH encoding. [@ergomorphic, @kushti, msgs #25803-#25812, 2024-03-13]

- **Rosen Bridge EVM Integration**: Scanner now includes EVM observation extractor; Bitcoin Esplora network implementation complete; ErgoChain change box creation improved to generate multiple boxes per event. [@zzzzbye, msg #25813, 2024-03-13]

- **Sigmanauts (SIG) Mining Pool Updates**: Pool migrated to hosted/cloud server with improved ping times; TLS/SSL connections in development; storage rent harvesting capabilities coming soon. [@wombo22, msg #25814, 2024-03-13]

- **Paideia DAO Contracts**: Moving toward MVP readiness by cutting unfinished features, hardening config values to prevent DAO self-locking, implementing storage rent protection, adding dedicated update transactions. [@luivatra, msg #25815, 2024-03-13]

- **SigmaUSD v2 Minting Limits**: New bank contract variant with 0.5% minting limit per oracle epoch. Update key holders and community to decide on adoption. [@kushti, msg #25754, 2024-03-12]

- **Cardano vs. Ergo Developer Experience**: Comparison of developing on both eUTXO chains; Aiken (Plutus language) offers features Ergo lacks (debugging, property-based testing); ErgoScript simpler but missing serialize/deserialize for composite types and IDE tooling. [@mgpai, @Luivatra, msgs #25856-#25875, 2024-03-14]

- **ErgoScript Tooling Gaps**: Missing features: import system, automated JSON compilation output (like Cardano), VS Code extensions, auto-formatting, build checks, functions with multiple parameters. [@mgpai, msg #25873]

- **Storage Rent and creationHeight Semantics**: Discussion on whether lower bounds should exist for box creation heights; consensus that current protocol allows any height between max(input heights) and current block height, creating potential issues for long-lived contracts. [@krasaviceblasen, @dusek_, msgs #25694-#25707, 2024-03-12]

- **ErgoNode HTTP/2 Support**: Attempts to enable HTTP/2 for Ergo API server to handle millions of parallel requests without file descriptor exhaustion; standard Akka configuration flags not working; "Unsupported HTTP method: PRI" error. [@dusek_, msg #25908, 2024-03-15]

- **SafeW Wallet Secret Export Format**: Mnemonic phrases encrypted with AES-256 using password + fixed salt (`vtvfAKubpNuc6Vn648TTUjh3KmuC8u`); mode CBC with PKCS7 padding via CryptoJS defaults. [@haileypdll, msgs #25832-#25843, 2024-03-13]

- **Repository Organization**: Proposal to consolidate scattered core repositories (sigmastate-interpreter, scrypto, etc.) under single `ergoplatform` org instead of multiple orgs (Scorex, etc.). Not finalized. [@omniawaha, @Aberg, msgs #25798-#25802, 2024-03-13]

- **Minotaur Wallet v2.0.0-rc2/rc3**: Release candidate versions available; 3/5 multisig capability needed. [@kushti, multiple msgs 2024-03-11 to 2024-03-12]

---

## Important Decisions or Announcements

- [@kusthti, msg #25668, 2024-03-11]: Bounty issued for documentation update and removal of unused code in sigmastate-interpreter (issue #955)

- [@kushti, msg #25677, 2024-03-12]: Minotaur v2.0.0-rc2 required for wallet functionality; later updated to rc3 [@ccellado, msg #25762, 2024-03-12]

- [@kushti, msg #25754, 2024-03-12]: Update keys being distributed (3-of-5 multisig for protocol updates); sketched SigmaUSD v2 bank contract with minting limits (0.5% per oracle epoch)

- [@kushti, msg #25755, 2024-03-12]: Weekly Ergo Developers chat scheduled for Wednesday, March 13th at 1PM UTC

- [@kushti, msg #25816, 2024-03-13]: Ergo 5.0.21 RC approved for release; 5.1.0 can be released as experimental pre-release (avoiding Docker/Satergo automatic updates)

- [@liquid_phase, msg #25824, 2024-03-13]: THz.FM team looking for code-oriented front-end developer (not design-only); Degens & Dragons game mapping complete, seeking team members

- [@dark_erdoge, msg #25967, 2024-03-17]: DarkErdoge miner rewarder went live; 100 daily DErdoge rewards for 1000 days to incentivize hashrate decentralization and Ergo mining

- [@ccellado, msg #25960, 2024-03-16]: Integration tests PR ready for review; now runs without sudo requirement

---

## Technical Q&A Worth Preserving

### Storage Rent & Box Creation Heights

- **Q** (@krasaviceblasen, msg #25694, 2024-03-12): Is there a protocol lower bound for `creationHeight` on boxes? Could an attacker send UTXOs with creationHeight=0 that get immediately claimed by storage rent?
  
  **A** (@Luivatra, msg #25696; @dusek_, msg #25701): Since v5.0 soft-fork (Autumn 2022), consensus rule enforces that output box creation height ≥ max(input box heights). Before this, contracts had to guard against height-0 boxes. Mainnet has historical examples of boxes wrongly created with height 0 that were subsequently claimed as storage rent.

### P2SH Address Encoding Strategy

- **Q** (@kushti, msg #25804, 2024-03-13): If P2SH addresses don't encode ErgoTree version, how will multi-year trackers know which version's tree to monitor when ErgoTree versions evolve?
  
  **A** (@ergomorphic, msg #25806): Trackers can monitor ErgoTree bytes excluding the first byte (which contains version), since version is the only difference between trees across versions. However, enforcement across ecosystem tools unclear.
  
  **Kushti's resolution** (msg #25811): Two paths proposed: (1) update P2SH documentation everywhere with tracking guidance, or (2) add tree version to P2SH encoding (requires documentation updates either way).

### ErgoScript Feature Gaps vs. Cardano

- **Q** (@Luivatra, msg #25847, 2024-03-14): What's the biggest difference developing on Ergo vs. Cardano?
  
  **A** (@Luivatra, msg #25846-#25847): Both eUTXO; main difference is resources—Ergo has 1 person solving problems where Cardano has 20+, reducing incentive for generic tooling. Missing in Ergo: deserialize/serialize types in ErgoScript for composite types (structs); Aiken offers this elegantly.

### SafeW Secret Export Format

- **Q** (@kushti, msg #25831, 2024-03-13): What's the standard for working with secrets exported from SafeW wallet (JSON backup with encrypted mnemonic)?
  
  **A** (@haileypdll, msg #25832): Mnemonic phrase encrypted with AES-256; key derived from `<wallet_password> + "SAFEW_PASSWORD_SALT"` where salt is hardcoded as `vtvfAKubpNuc6Vn648TTUjh3KmuC8u`; mode CBC with PKCS7 padding (CryptoJS defaults).

### RocksDB Node Wallet Functionality

- **Q** (@mgpai, msg #25791-#25792, 2024-03-12): Is the RocksDB node wallet supposed to be functional yet?
  
  **A** (@kushti, msg #25793): Yes, supposed to work. Confirmed by @filippounits (msg #25794) running smoothly on Raspberry Pi, but @mgpai (msg #25796) reports ARM64 issues: `libstdc++.so.6` missing in JNI library path.

### HTTP/2 Support for ErgoNode API

- **Q** (@dusek_, msg #25908, 2024-03-15): How to enable HTTP/2 for Ergo node API server to handle millions of parallel requests? Tried `akka.http.server.enable-http2 = on` and preview flags; getting "Unsupported HTTP method: PRI" (HTTP/2 connection preface).
  
  **A**: Unresolved. Standard Akka HTTP configuration not enabling HTTP/2 protocol negotiation on this server.

### Cardano CIP-780 Validation Zones vs. Sigma Protocols

- **Q** (@Christophe Garant, msg #25942, 2024-03-15): Cardano's new CIP-780 "Validation Zones" proposal sounds similar to Ergo's Sigma Protocol capabilities. How do they compare?
  
  **A** (@kushti, msg #25947): Validation Zones are a new blockchain abstraction for transaction containers (unclear purpose). Sigma protocols are cryptographic building blocks for applications—different layers of abstraction.

---

## Links Shared

- [sigmastate-interpreter issue #955](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/955): Documentation update and unused code removal bounty

- [kushti's SigmaUSD v2 bank contract](https://gist.github.com/kushti/3f34ed7d70cc6919c29f5bc65772b02e): Minting limit implementation (0.5% per epoch), lines 75-94

- [Rosen Bridge scanner EVM extractor](https://github.com/rosen-bridge/scanner/commit/f05c57452bd948eb167d83423fbc0d84dbdbc2e2): EVM observation implemented

- [Bitcoin Esplora network for Rosen](https://github.com/rosen-bridge/rosen-chains/commit/7aae00bdc5eb42a70144572ec735680e855f933d): Bitcoin chain integration

- [Paideia DAO GitHub](https://app.paideia.im/Sigmanauts/proposal): Sigmanauts proposals including MEXC slayer vote

- [mgpai's miner-rewarder](https://github.com/mgpai22/miner-rewarder): DarkErdoge distribution system

- [mgpai's miner-rewarder backend wallet (WASM)](https://github.com/mgpai22/miner-rewarder/blob/main/src/rust/BackendWallet.ts): Example of WASM-signed transactions for Ergo

- [Ergo vs. Cardano comparison doc](https://docs.ergoplatform.com/dev/protocol/eutxo/ergo_vs_cardano/): Draft developer documentation (needs feedback on Policy ID section)

- [GORT specification](https://github.com/kushti/dexy-stable/blob/master/spec/gort.md): Reward token for Dexy Gold oracle

- [EIP-5 (ErgoTree versioning)](https://github.com/ergoplatform/eips/blob/master/eip-0005.md): Protocol enhancement proposal

- [SafeW wallet encryption](https://github.com/ThierryM1212/SAFEW/blob/1fcf4a9e28c3e61ff259d90fcd742770ad288bf6/src/utils/walletUtils.js#L132): `changePassword` function showing AES encryption/decryption

- [Cardano CIP-780 (Validation Zones)](https://github.com/cardano-foundation/CIPs/pull/780): New Cardano proposal discussion

- [Ergo RocksDB node wallet issue](https://ergexplorer.com/transactions#b2267ad942053c3a7121af8c26971d3636bf55d238b1b7637b95cb1238bb81fd): Historical example of height-0 box creation before v5.0 rule

---

## Unresolved Questions

- **Repository Organization**: Should all core repos (sigmastate-interpreter, scrypto, ergo, etc.) be consolidated under single `ergoplatform` org? Discussion ongoing, no decision made. [@omniawaha, @Aberg, 2024-03-13]

- **Git Standards Enforcement**: How should code review standards (squash commits, PR templates, issue templates) be established without centralizing authority around one developer? Kushti insisted on documented processes before enforcement; stenolog proposed forum discussion. Open. [@kushti, @stenolog, 2024-03-11 to 2024-03-12]

- **HTTP/2 for ErgoNode API**: Akka HTTP configuration flags not enabling HTTP/2 protocol negotiation; root cause and solution unclear. [@dusek_, 2024-03-15]

- **ARM64 RocksDB Support**: Native library dependency (`libstdc++.so.6`) missing on ARM64 systems; blocking RocksDB node deployment on some platforms. [@mgpai, 2024-03-12]

- **Extra Indices Stuck**: Multiple nodes reporting `additional indices` stuck at block 1212378; need investigation and node restarts. [@kushti, msg #25899, 2024-03-14]

- **OpenAPI Spec CI Breakage**: Docker image (`open-api-checker`) no longer in registry; CI pipeline failing. Solution suggested: host custom image or build Dockerfile locally. [@ccellado, msgs #25955-#25956, 2024-03-16]

- **Developer Onboarding Documentation**: Should Ergo have dedicated "why develop on Ergo" page and simplified developer handbook (like Rust Handbook)? Proposed but not finalized. [@kii, @kushti, 2024-03-14 to 2024-03-15]

- **DeepRollbackSpec Test Redesign**: Integration test appears to duplicate ForkResolutionSpec functionality after recent modifications; unclear if current approach is correct. [@ccellado, msg #25958, 2024-03-16]

---

## Notable Administrative Issues

- **stenolog Account Muted**: User muted for "heated messages instead of producing useful contributions" after extended debate on development centralization. [@kushti, msg #25786, 2024-03-12]

- **Dark Erdoge Icon PR Pending**: PR to add Dark Erdoge icon to Nautilus wallet pending review for 3 months, even after miner rewarder went live. [@dark_erdoge, msg #25966, 2024-03-17]