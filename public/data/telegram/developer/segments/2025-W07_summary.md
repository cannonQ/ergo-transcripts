# Ergo Developer Chat Summary — 2025-W07

## Key Topics Discussed

- **Node stability and database improvements**: Ergo protocol reference client 5.0.25 released with extra indices support; 5.1.2 released using RocksDB instead of Java-based leveldb for improved stability on macOS and Windows. Memory usage reduced significantly (300MB vs 5GB+ previously).

- **SigmaSDK 5.0.15 feature additions**: New `executeFromVar` function for deserializing scripts from context extension variables; `bigInt` function for creating BigInt values from scripts; ContractTemplate JSON parsing and Box serialization/deserialization in JavaScript.

- **Sub-blocks implementation progress**: 6.0.0-RC2 released with sub-blocks per block parameter injection support; public testnet activated 6.0 soft-fork on 2025-02-14. Team working on out-of-order processing, delayed transactions, and fork resolution.

- **Oracle Pool v2 transition**: ERG/USD oracle pool operators successfully updated pool, enabling migration pathway to Oracle Pool v2. Update ceremony took ~20 minutes and was unnoticed due to efficient execution.

- **LLM-based contract auditing exploration**: kushti proposing use of large language models for automated contract analysis, focusing on recurring vulnerability patterns (box spending with same contract, forgotten register checks, premature box satisfaction).

- **Nautilus wallet UI refactoring**: Component architecture improvements including AddWalletIndexView, CreateWalletView, LedgerConnectView refactoring; added 24-word mnemonic generation support and UI polish.

- **Dexy mainnet deployment planning**: Active work on updated mainnet deployment strategy (implementation details TBD).

- **Rosen Bridge progress**: Binance integration planned for imminent release; Watcher V2 expanding observation status service with transaction pool, database, and scanner dependencies; public event status aggregation implementation underway in rosen-app.

- **ChainCash refinement**: Negative testing ongoing with AI assistance; merged PR removing refund actions and register complexity.

- **Dexy Gold widget development**: Swap widget completed; LP/bank widget in progress; ErgoPay integration ongoing; fake token swap testing targeted for end-of-week.

## Important Decisions or Announcements

- [@kushti khushi, msg#33000, 2025-02-14]: Ergo protocol reference client 5.1.2 released — changes identical to 5.0.25 but built on RocksDB for better stability.

- [@kushti khushi, msg#33007, 2025-02-14]: ERG/USD oracle pool successfully updated to enable Oracle Pool v2 migration. Update transaction: https://explorer.ergoplatform.com/en/transactions/164cce0f6e6d2162f2f249146c9256cce572c884a6e5a7a44ad51c56c06e826f

- [@kushti khushi, msg#33016, 2025-02-14]: 6.0 soft-fork activated in public testnet.

- [@moein_z, msg#32984, 2025-02-12]: Rosen Bridge planning Binance release in coming days.

- [@kushti khushi, msg#32994, 2025-02-13]: Created GitHub issue with bounty for rewriting ErgoTree-based Merklized Finite State Machine tests into ErgoScript (issue #1053).

## Technical Q&A Worth Preserving

- **Q** (@upwindstrategy): Can Satergo wallet start node automatically on system startup without requiring password confirmation or manual shortcuts? (msg#32987-32988)
  **A** (@kushti khushi): Feature request forwarded to Satergo group for evaluation (msg#32989).

- **Q** (@richhuze): What is the preferred commit history approach when submitting PRs with 50+ commits? (msg#32964)
  **A** (@dusek_): Squash commits before submitting PR (msg#32965).

- **Q** (@devjoe4ever): Can `executeFromVar` be called recursively within a script it deserializes? How to prevent infinite recursion? (msg#32990)
  **A** (@dusek_): Not possible. `executeFromVar` instances are replaced with expressions from ContextExtension before script evaluation—it functions like a macro. Recursion checking happens at compile-time (msg#32991, msg#32993).

- **Q** (@Aco Šmrkas): Node stuck with "Readers are not initialized yet" error on Ubuntu VPS. Solution? (msg#33012)
  **A** (@kushti khushi): Ensure no .ergo folder exists before launch; issue may be database initialization-related (msg#33013, msg#33015). Follow-up unresolved.

- **Q** (@Pulsarz): How to trigger node reindexing? (msg#33009)
  **A** (@Flying Pig): Delete `extra` folder in history directory (msg#33010).

- **Q** (@Pulsarz): Does updating to 5.1.2 trigger automatic reindexing? (msg#33005)
  **A** (@kushti khushi): No automatic reindexing, but manual reindexing recommended if feasible (msg#33006).

- **Q** (@richhuze): Is integration of Sigma SDK 5.0.15 into Fleet SDK compiler planned? (msg#32953)
  **A** (@arobsn): Yes, but will take some time; also flagged that using built-in JSON parser for large numbers is not recommended; Fleet typedefs are strict about numeric types (msg#32972, msg#32973).

- **Q** (@devjoe4ever): How are `executeFromVar` instances handled during contract compilation to prevent recursion? (msg#32990)
  **A** (@dusek_): They are replaced with ContextExtension expressions before evaluation, making this a macro-like mechanism where recursion is detected at compile-time, not runtime (msg#32991).

## Links Shared

- [Sigma SDK 5.0.15 release on Maven Central](https://central.sonatype.com/artifact/org.scorexfoundation/sigma-state_2.12/versions): SigmaSDK with `executeFromVar`, `bigInt`, JSON parsing, Box serialization features.

- [Ergo protocol reference client 5.0.25](https://github.com/ergoplatform/ergo/releases/tag/v5.0.25): Extra indices support recommended.

- [Ergo protocol reference client 5.1.2](https://github.com/ergoplatform/ergo/releases/tag/v5.1.2): RocksDB-based release for improved stability.

- [Ergo protocol reference client 6.0.0-RC2](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC2): 6.0 activation support with sub-blocks compatibility.

- [ChainCash PR #10](https://github.com/ChainCashLabs/chaincash/pull/10): Refund actions and registers removal merged.

- [Sigma Rust PR #809](https://github.com/ergoplatform/sigma-rust/pull/809): Under review by @kushti and @dusek_.

- [Sigma Rust CONTRIBUTING.md](https://github.com/ergoplatform/sigma-rust/blob/develop/CONTRIBUTING.md): Contributor guidelines.

- [Ergo GitHub issue #1053](https://github.com/ergoplatform/sigmastate-interpreter/issues/1053): Bounty-tagged issue for Merklized Finite State Machine test rewrite.

- [Satergo PR #30](https://github.com/Satergo/Satergo/pull/30): Indonesian, Javanese, Malaysian translation updates.

- [Rigel Mining Toolbox (Atomic Linux)](https://github.com/rhuze-emryk/rigel-mining-toolbox): Documentation for running Rigel in Fedora-based environments via Toolbox.

- [NodeView.xyz](http://nodeview.xyz): Added ErgoDex, Rosen Bridge, SigmaUSD, mining pool detection; moved from GitHub Pages to Cloudflare for HTTPS stability.

- [TabbyPOS Introduction](https://github.com/LEEKOHCHING/TabbyPOS-Introduction): Summary from @lkching7 on external project (Solidity-based, account model).

- [Deterministic Signatures (Paul Miller blog)](https://paulmillr.com/posts/deterministic-signatures): Cryptographic reference shared by @arobsn.

- [PoEM sorting mechanism (YouTube)](https://www.youtube.com/watch?v=r16nibO68E4): kushti exploring Proof of Elapsed Memory for input sub-block chain sorting.

- [Telegram: Ergo Fine-Tuning](https://t.me/ergofinetuning): Community group for LLM fine-tuning on Ergo context.

- [ERG/USD Oracle Pool Update Transaction](https://explorer.ergoplatform.com/en/transactions/164cce0f6e6d2162f2f249146c9256cce572c884a6e5a7a44ad51c56c06e826f): Successful Oracle Pool v2 upgrade ceremony transaction.

## Unresolved Questions

- **Node initialization failure on Ubuntu**: @Aco Šmrkas reports persistent "Readers are not initialized yet" error on DigitalOcean VPS despite using 5.1.2. Root cause not identified (msg#33012, msg#33022).

- **Dexy mainnet deployment specifics**: kushti noted "trying to figure out updated mainnet deployment plan" with no details provided (msg#32983).

- **Rosen Bridge PoC status**: @thekeyboard asked if a Rosen Bridge proof-of-concept exists for external parties (Beam Privacy); responders suggested contacting @armeanio, @cw.erg, or @mhs_sam but no concrete answer provided (msg#33017-33018).

- **Docker image for 5.1.2**: @Pulsarz noted Docker image missing for 5.1.2 release (msg#33011) — unclear if this is a known omission or oversight.

- **Fleet SDK Sigma 5.0.15 integration timeline**: @arobsn confirmed planned integration but no ETA provided (msg#32972).

- **Sub-blocks parameter activation mechanism**: While 6.0.0-RC2 supports sub-blocks, no details on mainnet activation timing or community signaling process shared.