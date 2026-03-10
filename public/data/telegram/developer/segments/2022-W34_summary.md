---
title: "Ergo Developer Chat — 2022-W34"
date_start: "2022-08-22"
date_end: "2022-08-28"
type: telegram_weekly
channel: developer
week: "2022-W34"
source: telegram
message_count: 52
categories: [technical, governance]
key_terms: [ANSI codes, Windows, logging, akka, node log, v4.0.41, release, byte allocation, efficiency, 5.0, voting, consensus, activation, mainnet, epochs, explorer, indexes, API methods, load balancing, configurable indexes]
---
# Ergo Developer Chat Summary — 2022-W34

## Key Topics Discussed

- **ANSI Logging Issues on Windows**: Ergo and/or the Akka library are producing ANSI escape codes (`\033[31m` for red, `\033[0K` for erase-to-end-of-line) in logs on Windows, likely originating from logging configuration rather than frontend compilation.

- **Explorer Node Architecture Redesign**: Ilya Oskin proposed splitting explorer nodes into "light" (minimal indexes for essential API methods) and "full" (extensive indexes) variants, with routing logic to distribute load efficiently. dApp developers were asked to identify which API methods are essential for their applications.

- **Address vs. ErgoTree Indexing Trade-off**: Discussion on whether to drop address index in favor of ErgoTree index (or vice versa), balancing API compatibility (APIv1 assumes address lookups), encoding cost, and performance. Capt. Nemo suggested decoding addresses on-demand using ErgoTree index to reduce index footprint.

- **Protocol Version 5.0 Voting & Activation Timeline**: Voting for version 5.0 commenced on mainnet with 32 epochs (1024 blocks each) for voting and 32 epochs delay before activation—total ~64×1024 blocks until activation if ≥90% support achieved.

- **Testnet Configuration Challenges**: 5-second block time on testnet is too aggressive under current settings; non-standard delay configurations are causing propagation issues. Testnet reset under discussion.

- **Reference Client Release**: Ergo protocol reference client v4.0.41 released with minor byte allocation optimizations.

## Important Decisions or Announcements

- [@kushti, msg#5818, 2022-08-25]: Ergo protocol reference client v4.0.41 released with minor byte allocation optimizations in a few places.
  
- [@kushti, msg#5828, 2022-08-26]: Voting for protocol version 5.0 started on mainnet.

- [@kushti, msg#5833–5834, 2022-08-26]: 5.0 voting window: 32 epochs (1024 blocks each); activation requires ≥90% support plus 32 epoch delay; estimated activation in slightly less than 64×1024 blocks if approved.

- [@Ilya Oskin, msg#5830, 2022-08-26]: Proposed explorer backend redesign with configurable indexes; split official explorer nodes into "light" and "full" variants with intelligent routing; requested dApp developers identify essential API methods.

## Technical Q&A Worth Preserving

- **Q** (@Aberg): What is `\033[31m` appearing in logs on Windows?  
  **A** (@Aberg): `\033[31m` is the ANSI code for red text; related code `\033[0K` erases from cursor to end of line. Both suggest Akka logging or Ergo's logging configuration is emitting ANSI escape sequences on Windows, a platform that typically doesn't handle them well.

- **Q** (@Capt. Nemo): Could address index be dropped in favor of ErgoTree index, with addresses decoded on-demand by the API?  
  **A** (@Ilya Oskin & @Capt. Nemo): Feasible but requires APIv1 compatibility changes; address index is compact and decoding cost roughly equals ErgoTree encoding cost. Trade-off between breaking APIv1 vs. reducing index footprint remains unresolved. (@Capt. Nemo noted GraphQL server can be adapted.)

- **Q** (@Luivatra): Confirmed transactions appearing and disappearing on explorer—node issue?  
  **A** (@Ilya Oskin): Mempool tracking is a separate issue; will check node sync status. (@Ilya Oskin, msg#5854): All nodes confirmed at same block height—root cause unclear.

- **Q** (@kushti): Why is protocol 5.0 marked as consensus-requiring if the fix doesn't need consensus activation?  
  **A** (implicit): No direct response; consensus marking appears to be a design choice not explained in chat.

- **Q** (@kushti): What are "bloknet" properties in testnet configuration?  
  **A**: No answer provided; context suggests it relates to block parameters in testnet setup.

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.41]: Ergo protocol reference client v4.0.41 release notes.

- [https://github.com/ergolabs/ergo-dex]: Spectrum DEX (formerly ErgoDex) repository; referenced as resource for dApp integration patterns and API usage.

## Unresolved Questions

- Should address index or ErgoTree index be the primary indexing strategy for explorer? Trade-offs in API compatibility, encoding cost, and performance remain unresolved.

- What is causing confirmed transactions to intermittently appear and disappear on the explorer, despite all nodes being synced?

- Is testnet reset needed due to 5-second block time being too aggressive, and what configuration would be viable?

- Why are developers using mainnet scripts that fail to propagate on testnet?