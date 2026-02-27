# Ergo Developer Chat Summary — 2025-W43

## Key Topics Discussed

- **Input Blocks & Forking**: kushti working on input blocks forking processing for the mempool and wallet support; whitepaper in progress. This is part of the 6.0 protocol soft-fork recently activated.

- **Contract Library Initiative**: kushti proposing a systematic effort to collect, test, and document design patterns and contracts from ErgoForum (since 2019) and ErgoHack events into an open-source library near the ErgoScript compiler. Examples include Perpetual Token, Daily Withdrawal Limit, Stealth Address, and Token with Whitelisted Transfers contracts, with additional work on Trustless Hashrate Oracle, Bulletproof range proof verification, and Schnorr signature verification.

- **Dexy/USE Stablecoin**: Paper submitted to Stability Workshop; extensive new contract tests and simulation improvements underway.

- **ChainCash/Basis**: Integration work with wallet and server components.

- **GitCircles Development**: PR for Ergo address parsing; domain acquired for website.

- **Lithos Protocol Performance & HiveOS Support**: Performance improvements for stratum on same machine as miner, bug fixes for Rigel miner integration, initial HiveOS compatibility work, contract improvements, and HTML panel UI refinements.

- **Mobile & Entertainment Layer**: HQ3rr developing new Telegram app with on-chain tasks, games, and presence features for mobile Sigmanauts; plans new token separate from MewFinance.

- **Oracle Modularity Discussion**: Pgr456 noted that launching new oracles for new data types requires external data integration; currently non-trivial without codebase-level support, though following existing patterns reduces difficulty.

- **Fleet SDK & Training Data**: mgPai suggesting library of Fleet SDK snippets for offchain code as training data, with focus on JS/TS developers coming from EVM backgrounds and mock chain testing.

- **Cyberverse Update**: Combat mechanics implemented with enemy attack/defense animations, real-time stat upgrades, and position escape logic.

## Important Decisions or Announcements

- [@kushti khushi, msg#36403, 2025-10-22]: Weekly Ergo Developers chat scheduled for Wednesday, October 22nd at 1PM UTC; encourages discussion of financial contracts development, 6.0 protocol soft-fork, input/ordering blocks, sidechains, L2, and AI research.

- [@kushti khushi, msg#36419, 2025-10-22]: First Basis reserve deployed to mainnet (tx: 9342f78bd290c8057632588b6dc908c71b19fb9a33e859716a0c323d1eb5a346).

- [@kushti khushi, msg#36429, 2025-10-23]: Tree version parameter bug in node API identified—will be fixed in upcoming release. Currently `treeVersion` 0 vs 1 produces same address despite being sent.

- [@kushti khushi, msg#36455, 2025-10-26]: PR #2242 open for review; two additional PRs for 6.0.2 release to be proposed later.

## Technical Q&A Worth Preserving

- **Q** (@Quibbix, msg#36423): Why do escript.online and node API `/script/p2sAddress` generate different addresses for the same ErgoScript lock script?
  
  **A** (@kushti khushi, msg#36425): The same ErgoTree but different versions (1 vs 0).
  
  **Follow-up Q** (@Quibbix, msg#36426): Changing version 0 to 1 in the node request produces the same address.
  
  **Follow-up A** (@kushti khushi, msg#36427-36429): Confirmed 6.0 node issue—tree version only used in execution, not address generation. Both v0 and v1 addresses are usable and execute correctly; version 1 includes tree size (better for light clients). Bug will be fixed in upcoming release.

- **Q** (@Quibbix, msg#36430): What do tree versions 0 and 1 represent? Are both addresses valid?
  
  **A** (@mgPai, msg#36431-36432): Yes, both work; must be consistent.
  
  **A** (@kushti khushi, msg#36433): Version is protocol version. New 6.0 features available only in v3 trees; v0 and v1 are equivalent; v1 includes tree size requirement (better for light clients).

- **Q** (@HQΣr, msg#36382): Silver Oracles or modular oracle system where anyone can bootstrap oracles on Ergo?
  
  **A** (@Pgr456, msg#36383): Silver oracles straightforward to finish; modular oracle harder because new datasources/API requests must be built for each type. Current codebase has some parsers implemented; following existing patterns is trivial via config files.

- **Q** (@HQΣr, msg#36424): Is one address from escript.online p2p and the other ErgoTree?
  
  **A** (@kushti khushi, msg#36425): Same tree, different versions.

## Links Shared

- [Watcher Monitor Deployment](https://mute-mouse-2cd2.rbmonitor.workers.dev/d/29S1sC6dImtgbSMmy0GOieUag3pkhUu1): Demo Watcher UI deployed on Cloudflare; use password `TestPass123Demo`. Local monitor taken offline to avoid exceeding free tier daily API quota.

- [Schnorr Signature Documentation (ErgoForum)](https://www.ergoforum.org/t/verifying-schnorr-signatures-in-ergoscript/3407): Preferred reference for Schnorr signature verification; official docs description flagged as potentially incorrect.

- [Perpetual Token Contract PR](https://github.com/ergoplatform/sigmastate-interpreter/pull/1082): Example of design pattern contracts being collected.

- [Daily Withdrawal Limit Contract PR](https://github.com/ergoplatform/sigmastate-interpreter/pull/1083): Example of design pattern contracts being collected.

- [Stealth Address Contract PR](https://github.com/ergoplatform/sigmastate-interpreter/pull/1084): Example of design pattern contracts being collected.

- [Token with Whitelisted Transfers PR](https://github.com/ergoplatform/sigmastate-interpreter/pull/1080): Example of design pattern contracts being collected.

- [Trustless Hashrate Oracle (WIP)](https://github.com/ergoplatform/sigmastate-interpreter/pull/1085): Work-in-progress hashrate coin contract.

- [Bulletproof Range Proof Verification (WIP)](https://github.com/ergoplatform/sigmastate-interpreter/pull/1079): Work-in-progress verification in ErgoScript.

- [Schnorr Signature Verification (WIP)](https://github.com/ergoplatform/sigmastate-interpreter): To be published.

- [GitCircles Address Parsing PR](https://github.com/GitCircles/GitCircles-Github/issues/11): In-progress work by Bro Etiket.

- [Game of Prompts Telegram Group](https://t.me/+xfGIN6e8k5U1YWQ0): Community group for Josemi's contract development project; currently no functional use.

- [Heads or Tails Contract Example](https://github.com/dungvn3000/ergo-fleet-sdk-example): Learning/sharing example by Dũng Nguyễn using Fleet SDK with clean mock chain tests.

- [Hermes Mempool Tracker Issue](https://github.com/ergoplatform/ergo/issues/2248): Flagged as necessary for Hermes development.

- [PR #2242 (6.0.2)](https://github.com/ergoplatform/ergo/pull/2242): Open for review; two additional 6.0.2 PRs pending.

- [Cyberverse Combat Update Video](https://xcancel.com/HeRo_Cyberverse/status/1982036606765732107): Enemy attack/defense animations, real-time CON stat upgrades, position escape mechanics.

## Infrastructure & Ops

- [@HQΣr, msg#36375, 2025-10-20]: SSL certificate on escript.online expired—flagged to c8 for renewal.

## Unresolved Questions

- Storage rent collection edge case: Pgr456 identified a box matching "anyone can spend" definition that defies normal storage rent collection (msg#36392). kushti requested error details; status of investigation unclear as of message #36397.

- Tree version address generation discrepancy: Root cause identified but fix status pending (msg#36429—"will be fixed in upcoming release").

- Modular Oracle Framework: How to structure oracle system so non-developers can easily launch new oracles remains open; requires architectural/design discussion beyond current incremental improvements (msg#36386-36387).