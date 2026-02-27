# Ergo Developer Chat Summary — 2024-W35

## Key Topics Discussed

- **Context Extension Serialization Order Issue**: Transaction serialization in sigma-rust differs from the Ergo reference implementation due to HashMap ordering in context variables. The order changes between unsigned and signed transactions when passing through Nautilus, causing transaction ID mismatches (msg#29741–29758).

- **6.0.0 Alpha Release**: kushti released 6.0.0-alpha0 with successful transaction submission tests and node signer fixes. DevNet activation is planned (msg#29756, msg#29759).

- **LevelDB Dependency Problem**: Ergo's dependency on `leveldbjni-all` from Ethereum fork is problematic because the Spring repository (source) is no longer public. Alternatives being explored: Maven Central, GitLab registry, or waiting for full RocksDB migration (msg#29780, msg#29823–msg#29844).

- **Node UI HTTP Server Thread Crashes**: Indexer and API share the same thread pool, causing indexer to displace API threads over time, leading to UI lockups. Fix being tested for 5.0.23 release (msg#29879).

- **Merkle Batch Proofs & 6.0 Protocol Testing**: kushti seeking helpers for Merkle batch proof tests and cross-version (5.x/6.0) transaction compatibility tests (msg#29850).

- **Celaut Project (Distributed LLM Inference)**: Basic reputation system integration complete; payment system and architecture docs in progress. Considering LLM inference services as marketing and application use case (msg#29811).

- **"The Field" (Pledge Protocol DAO)**: MVP contracts completed with redemption logic; semi-private testing of pledges underway; marketing/content assistance needed soon (msg#29848).

- **Nautilus Wallet**: v0.13.0 released; Transaction History tab still in development. Context extension ordering issue under investigation (msg#29804).

- **Fleet SDK**: Released `@fleet-sdk/blockchain-providers@0.6.2` with `take`/`skip` parameter support for streaming methods (msg#29804).

- **Sigmanauts Mining Pool**: Bonus rewards mechanism on new server; Mining Core integration pending; beta testing scheduled (msg#29818).

## Important Decisions or Announcements

- [@kushti, msg#29756, 2024-08-26]: 6.0.0-alpha0 release available with successful 6.0 transaction submission; requests feedback on any issues needed.
- [@kushti, msg#29881, 2024-08-30]: RocksDB release confirmed for version 5.0.23 (final).
- [@arobsn, msg#29804, 2024-08-28]: Nautilus v0.13.0 released on stable channel.
- [@Marc the Shark, msg#29818, 2024-08-28]: Sigmanauts Mining Pool bonus rewards live; Mining Core integration expected within ~24 hours.
- [@kushti, msg#29850, 2024-08-28]: Seeking community help for Merkle batch proof tests and 6.0-specific cross-version transaction validation.
- [@Pgr456, msg#29843, 2024-08-28]: Published `leveldbjni-all` to GitLab public Maven registry as temporary solution until RocksDB release.

## Technical Q&A Worth Preserving

- **Q** (@dusek_): Why does transaction serialization order differ between sigma-rust and Ergo reference implementation for context variables?
  **A** (@kushti): sigmastate-interpreter uses a HashMap for context variables, making order dependent on insertion order and HashMap size; SigmaMap implementation (Scala HashMap optimized for context extension) was started but remains unfinished; switching to SigmaMap would require a hard fork (msg#29741–msg#29768).

- **Q** (@Luivatra): Can context extension order be preserved through Nautilus signing?
  **A** (@unknown): Nautilus sorts inputs before signing (likely causing reordering). Investigation needed on whether JSON serialization or sigma-rust prover is reordering variables (msg#29758–msg#29760).

- **Q** (@arobsn): Do you have the unsigned transaction ID from AppKit?
  **A** (@Luivatra): `32e61415b2d95b25df9021ede1f7a0af501830e40ac4703297695a9c225477d1` (msg#29815, msg#29817).

- **Q** (@Paul): How to properly escape single quotes in Swagger UI derivation path field?
  **A** (@Pgr456): Use backslash escaping: `"m\/44'\/429'\/0'\/0"` (msg#29772). Note: Users report this still doesn't generate matching keys in Node wallet vs. Nautilus (msg#29773, msg#29775).

- **Q** (@dusek_): Can context extension switch to SigmaMap via soft-fork without breaking old nodes?
  **A** (@kushti): No, because soft-fork cannot change serialization format; old nodes would reject new transaction serialization (msg#29768).

- **Q** (@deathgripson): Node process randomly stops without error. Running with session script directly (no nohup).
  **A** (@kushti): Likely receiving SIGHUP at session end. Use `nohup ./start.sh &` to prevent signal delivery (msg#29786–msg#29788).

- **Q** (@Michael): What causes node UI to become unresponsive, requiring restart?
  **A** (@kushti): Indexer and API threads share same thread pool; indexer eventually displaces API threads. Fix being tested for 5.0.23 (msg#29876–msg#29879).

- **Q** (@Paul): Node wallet derivation path `"m/44'/429'/0'/0"` doesn't match Nautilus keys.
  **A** (@Pgr456): REST API may be parsing escape sequences incorrectly; internally the node likely uses correct path. Potential API endpoint parsing bug (msg#29773–msg#29778).

- **Q** (@Paul): Can node operators wipe mempool and set minimum propagation fees to combat spam?
  **A** (@kushti): Yes, mempool filters exist; can raise `propagation fee rates` parameter to block low-fee spammers from even entering local mempool. Also has fee estimation API (not widely used by applications) (referenced in earlier week context).

## Links Shared

- [https://github.com/ergoplatform/sigma-rust/issues/763](https://github.com/ergoplatform/sigma-rust/issues/763): Context extension serialization ordering issue in sigma-rust (msg#29740).
- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-alpha0](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-alpha0): 6.0.0 Alpha0 release (msg#29756).
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/951](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/951): SigmaMap implementation PR (incomplete) (msg#29766).
- [https://github.com/nautls/nautilus-wallet/blob/5e1e9c43dc9dd5d8715014657c07b5f1a2de51ff/src/chains/ergo/transaction/prover.ts#L104](https://github.com/nautls/nautilus-wallet/blob/5e1e9c43dc9dd5d8715014657c07b5f1a2de51ff/src/chains/ergo/transaction/prover.ts#L104): Nautilus input sorting in prover (msg#29760).
- [https://gitlab.com/sigmaspace/leveldbjni/-/packages/28681056](https://gitlab.com/sigmaspace/leveldbjni/-/packages/28681056): leveldbjni-all published to GitLab Maven registry (msg#29796).
- [https://repo.softmotions.com/repository/softmotions-public/org/ethereum/leveldbjni-all/1.18.3/](https://repo.softmotions.com/repository/softmotions-public/org/ethereum/leveldbjni-all/1.18.3/): Original source for Ethereum fork dependency (msg#29796).
- [https://mvnrepository.com/artifact/org.ethereum/leveldbjni-all/1.18.3](https://mvnrepository.com/artifact/org.ethereum/leveldbjni-all/1.18.3): Maven Central listing (requires Spring auth, unavailable) (msg#29835).
- [https://github.com/ergoplatform/ergo/pull/2183](https://github.com/ergoplatform/ergo/pull/2183): PR pending review for node improvements (msg#29861).
- [https://discord.gg/wa38bX57tY](https://discord.gg/wa38bX57tY): "The Field" (pledge protocol DAO) testing server (msg#29848).
- [https://sigmaspace.io](https://sigmaspace.io): Alternative Ergo Explorer (recommended for reliability) (msg#29872).
- [https://x.com/ergo_platform/status/1829847784679235663](https://x.com/ergo_platform/status/1829847784679235663): Twitter announcement (msg#29882).

## Unresolved Questions

- **JSON Serialization Order Guarantee**: Is context extension order preservation guaranteed by JSON standard? If not, should EIP-12 be extended to define canonical ordering? (msg#29806–msg#29808, msg#29812).
- **Node Wallet Derivation Path**: Why does Node REST API derivation endpoint produce different keys than Nautilus for same derivation path `"m/44'/429'/0'/0"`? API parsing issue or intentional difference? (msg#29773–msg#29778).
- **LevelDB Replacement Timeline**: When will RocksDB fully replace LevelDB to eliminate `leveldbjni-all` dependency? (Confirmed for 5.0.23 but no broader migration timeline given, msg#29881).
- **Faster Block Time Trade-offs**: Implementation details for faster blocks/Tailstorm sub-blocks proposal still under discussion; no consensus on timestamp vs. block-height dependencies reached (msg#29800–msg#29802).
- **Paideia Context Extension Fix**: Will Nautilus maintain context extension order from unsigned transaction JSON through signing, or is this a sigma-rust limitation? (msg#29803–msg#29808).
- **Thread Pool Isolation Fix Status**: What is the exact nature of the thread pool separation fix in 5.0.23? (msg#29879 indicates testing but no implementation details shared).