---
title: "Ergo Developer Chat — 2022-W30"
date_start: "2022-07-25"
date_end: "2022-07-31"
type: telegram_weekly
channel: developer
week: "2022-W30"
source: telegram
message_count: 60
categories: [technical, defi, ecosystem]
key_terms: [node release, v4.0.35, STDOUT logging, ProcessBuilder, pty4j, logback configuration, terminal-less process, java.lang.Process, PTY library, inheritIO, bytecode generation, 5.0 testnet, testnet launch, mainnet, protocol upgrade, peer dropping, v4.0.35 regression, peer removal, delivery checks, node banning]
---
# Ergo Developer Chat Summary — 2022-W30

## Key Topics Discussed

- **Ergo Node v4.0.35 Release & Logging Issues**: Reference client 4.0.35 released with STDOUT/logging configuration problems when running from terminal-less Java processes; workaround identified using PTY libraries but underlying logger reconfiguration issue flagged for investigation.

- **5.0 Testnet Launch**: 5.0 testnet officially launched with details posted to Ergo Forum; appears to be active testing phase.

- **Peer Management & Node Stability (v4.0.35)**: Version 4.0.35 introduced more aggressive peer removal on delivery failures, causing nodes to drop peers rapidly. Multiple users downgraded to v4.0.34 after experiencing connection losses (dropping from 100+ to <10 peers). Issue appears transient but reproducible.

- **Market-Driven Emission Contracts**: kushti sketched design concept for market-driven emission contracts on forum; architecture not detailed in chat.

- **Optimistic Rollups Using Trees**: kushti indicated Merkle trees can be used for optimistic rollup designs; promised forum sketch but not elaborated in chat.

- **Decentralized Grid Trading**: Forum post opened on grid trading mechanics on Ergo; details deferred to forum.

- **Storage & File Hashing**: Discussion on whether to store full files on-chain vs. hashes only; kushti clarified files only needed if used in downstream contracts; hash-only preferred for pure storage use cases.

- **IP Address Reporting (169.254.x.x)**: Aberg flagged that many nodes report reserved-range IPs (169.254.x.x) when `declaredAddress` not set; flagged as potential bug in peer discovery/reporting logic.

- **Testnet Faucet Gating**: Testnet faucet blocking new addresses claiming they've already received ERG despite never using the wallet; likely a session/state issue.

- **P2S Address Simplification**: kushti suggested separating constants to allow single pay-to-script address for simplified scanning.

- **Sigma-Rust WebAssembly & dApp Integration**: Sigma-Rust available as WebAssembly for dApp UI integration; noted as standard for most dApps on Ergo.

## Important Decisions or Announcements

- [@kushti khushi, msg#4425, 2022-07-25]: Ergo protocol reference client v4.0.35 released: https://github.com/ergoplatform/ergo/releases/tag/v4.0.35

- [@kushti khushi, msg#4432, 2022-07-25]: 5.0 testnet launched with forum details posted.

- [@Armeanio, msg#4735, 2022-07-31]: Flux attempting to onboard Ergo infrastructure; seeking community interest (contact via DM).

- [@Aberg Satergo dev, msg#4872–4873, 2022-08-06]: Naming caution — avoid "decentralization" terminology in project naming; flagged "ErgoTeam" as poor naming choice.

## Technical Q&A Worth Preserving

**Q** (@Aberg Satergo dev, msg#4445): Why is the node not runnable from a terminal-less process? Running with `java.lang.Process` caused issues; had to use a PTY (pseudo-terminal) library.

**A** (@kushti khushi, msg#4453): After the initial INFO log line, logger is being reconfigured; need to check logging configuration in startup sequence.

---

**Q** (@Aberg Satergo dev, msg#4454): Does PTY library fix the STDOUT issue?

**A** (@Aberg Satergo dev, msg#4454): Confirmed — using pty4j library shows STDOUT correctly with `ptyProcess.getInputStream().transferTo(System.out)`.

---

**Q** (@Flying Pig (™), msg#4682): V4.0.35 node dropping peers rapidly; public node down to 30 connections (normally 100+). Same issue across multiple nodes and reported by others in community.

**A** (@Luivatra, msg#4693): V4.0.35 likely introduced more aggressive peer removal on delivery failure.

**A** (@Flying Pig (™), msg#4694): Downgraded to v4.0.34 — now running fine with normal peer counts. Issue may be fluke but reproducible timing suggests v4.0.35 peer management change.

---

**Q** (@Aberg Satergo dev, msg#4657–4659): Why do many nodes report 169.254.x.x IP addresses? These are reserved IPs; appears to be assigned when node lacks `declaredAddress` config.

**A** (@Aberg Satergo dev, msg#4659): 169.254.x.x IPs are IANA-reserved (link-local); flagged as potential bug in peer discovery reporting.

---

**Q** (@Aberg Satergo dev, msg#4843–4845): Testnet faucet broken — claims user already received ERG but address is brand new and never used.

**A** (@Moein Zargarzadeh, msg#4846): Requested address for investigation; issue resolved manually (msg#4850).

---

**Q** (@scalahub, msg#4774): What is the default oracle participant count configuration?

**A** (@scalahub, msg#4774): Default is 4 in Oracle Pool v2.0 (depends on use case).

---

**Q** (@Aberg Satergo dev, msg#4913): Is WebAssembly support available for sigma-rust?

**A** (@Aberg Satergo dev, msg#4913): Yes; sigma-rust WebAssembly is available and used on most dApp user interfaces.

---

**Q** (@Unknown, msg#4710–4711): How to configure peer management behavior?

**A** (@Unknown, msg#4711): Configuration setting in node config file or terminal launch parameters (specific option not named).

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.35]: Ergo reference client v4.0.35 release notes and binaries.

- [https://www.ergoforum.org/t/5-0-testnet-launched/3713/2]: 5.0 testnet announcement with details and testing instructions.

- [https://www.ergoforum.org/t/market-driven-emission-contracts/3749]: Market-driven emission contracts design sketch by kushti.

- [https://www.ergoforum.org/t/decentralized-grid-trading-on-ergo/3750]: Decentralized grid trading mechanics discussion.

## Unresolved Questions

- **Logger Reconfiguration in v4.0.35**: Root cause of STDOUT/logging loss after initial INFO line not fully diagnosed; kushti flagged for deeper investigation but no fix confirmed.

- **Peer Dropping Root Cause**: Aggressive peer removal in v4.0.35 causing widespread connection loss; workaround is downgrade but issue not formally resolved; may be by design but user feedback suggests it's unintended.

- **Flux Infrastructure Integration**: Armeanio seeking interest in Flux-hosted Ergo infrastructure (Docker support); no decision made in this week's chat; risk/performance assessment pending.

- **Optimistic Rollup & Grid Trading Designs**: kushti promised forum sketches for both topics but details not available in chat; these remain pending technical specifications.

- **P2S Scanning Optimization**: kushti suggested constant separation for single P2S address; no implementation status or formal proposal follow-up in chat.

---

**Chat Activity**: Low-to-moderate technical depth; mostly developer troubleshooting and infrastructure discussion. One major issue (v4.0.35 peer management) reproducible but not resolved in-week.