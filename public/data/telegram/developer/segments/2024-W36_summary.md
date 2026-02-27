# Ergo Developer Chat — 2024-W36 Summary

## Key Topics Discussed

- **Bitget Node API Integration**: A Bitget blockchain engineer encountered issues with the `/wallet/transaction/generate` endpoint for payment requests, receiving validation errors related to transaction structure and input serialization. The solution involved using binary-encoded box bytes rather than box IDs in `inputsRaw` and increasing minimum fees to 1,000,000 nanoERG.

- **Testnet Infrastructure Issues**: qx() experienced persistent wallet scan failures on testnet after full node synchronization. The resolution involved carefully sequenced operations: full sync without indexing, wallet initialization/restoration before extra indexing was enabled, and deletion of stale index directories.

- **Sigma 6.0 Development**: Multiple PRs merged into the 6.0.0 candidate branch, currently polishing new Numeric methods and working toward UnsignedBigInt support. A devnet release with higher-order lambdas and new collection methods is planned for 7–10 days.

- **Sub-blocks Protocol Work**: kushti is implementing sub-block support, including P2P message processing (sub-block transmission, transaction requests, delivery) and Stratum proxy modifications needed to support posting sub-blocks to node APIs.

- **ChainCash Bug Fixes**: dusek identified testnet oracle and buyback NFT IDs incorrectly used in mainnet contracts and fixed the issue. Work ongoing on note redemptions.

- **Dexy Token Deployment**: All mainnet tokens issued; re-checking free mint action deployment.

- **Ergo 5.0.23 Testing**: Released with reworked thread dispatchers; seeking community testing coverage before official release.

- **Independent API Development**: Pgr456 (sigmaspace.io) working on independent chain indexer and explorer REST API with support for box size calculations to determine storage rent, aiming for compatibility but independence from ergoplatform explorer.

- **AppKit Dependency Management**: Aberg identified that sigmastate-interpreter depends on snapshot versions, requiring downstream projects to include sonatype snapshots repo. Requested scrypto release to resolve.

- **ErgoScript Inspection Tools**: Binary-to-AST decompilation support incomplete; kushti noted ErgoTree is already AST but needs pretty-printing support (PRs #812, #831) to be human-readable.

- **Multi-input Transaction Signing**: Aberg investigating whether reusing the same signature proof across multiple inputs with identical scripts is valid, particularly when signing with Ledger (which returns a single signature).

- **Satergo P2P Library**: Aberg confirmed that mewtoshi's p2p library lacks built-in deserialization for UTXO set snapshots and NIPoPoWs, but these can be added in user code.

- **Paideia Serialization Issue**: Context variable ordering differs between node (Scala) and sigma-rust implementations; workaround being explored to allow Nautilus to accept pre-serialized transaction bytes to avoid serialization roundtrips.

---

## Important Decisions or Announcements

- [@kushti, msg#29973, 2024-09-04]: Ergo 5.0.23 candidate released with reworked thread dispatchers; jar available for testing.

- [@kushti, msg#29973, 2024-09-04]: Sub-blocks implementation underway; initial 5.x-based devnet for throughput testing expected within weeks.

- [@kushti, msg#29979, 2024-09-04]: Block candidate regeneration PR bounty offered to pgr456 (DM address for details).

- [@Pgr456, msg#29971, 2024-09-04]: ergo-lib-go v0.28.0 released in sync with sigma-rust v0.28.0.

- [@Marc the Shark, msg#30006, 2024-09-04]: Sigmanauts Mining Pool running new MiningCore with active testing; bonus payment system in testing; lightweight dashboard prototyped; EF proposal submission pending.

- [@CannonQ, msg#30007, 2024-09-04]: "The Field" peer-to-pool pledging protocol MVP contracts completed; front-end integration functional; private testing active (betting on US Open finals).

- [@Aberg, msg#30044, 2024-09-06]: Requested new scrypto release due to sigmastate-interpreter snapshot dependency blocking downstream projects from building without sonatype snapshots repo.

- [@kushti, msg#30017, 2024-09-05]: Initial sub-blocks devnet for throughput testing expected within weeks; load testing and Stratum proxy modification help needed.

---

## Technical Q&A Worth Preserving

- **Q** (@nicolavon): Why does `/wallet/transaction/generate` return a 400 error with "Validation failed on ValidationRule(1012,For version greater than 0, size bit should be set.)"?
  
  **A** (@kushti, msg#29890): `inputsRaw` must contain binary-encoded box bytes (obtained via `/utxo/byIdBinary/{boxId}`), not box IDs. Additionally, `dataInputsRaw` can be omitted and fee should be ≥1,000,000 nanoERG.

- **Q** (@qx, msg#29914): Wallet scan not initiating on testnet despite full node sync, index sync, and wallet initialization all completing.
  
  **A** (@qx, msg#29952): Resolved by: (1) syncing node without index fully, (2) initializing/restoring wallet to trigger scan (or manually triggering scan from swagger), (3) shutting down and enabling extraIndex in config, (4) deleting `/history/extra` folder, (5) restarting node.

- **Q** (@Aberg, msg#30025): Can `treeBytes` be empty?
  
  **A** (@kushti, msg#30026): No, there will always be bytes even if the tree is not parseable.

- **Q** (@Aberg, msg#30064): Is there a method/API to convert bytes to "AST mixed with Scala code"?
  
  **A** (@kushti, msg#30063): Use `ErgoTreePredef` to construct and `toProposition(true)` to render as AST-like code. Pretty-printing PRs #812 and #831 are incomplete but would improve readability.

- **Q** (@Aberg, msg#30065): Why is a transaction failing to broadcast with error "Scripts of all transaction inputs should pass verification"?
  
  **A** (@dusek, msg#30077): For p2pk inputs, this error indicates an invalid signature (bytes-to-sign mismatch). Root cause is in transaction construction, not the JSON itself. Debug by compiling node with logging and submitting to local node.

- **Q** (@Aberg, msg#30080): Is it correct to reuse the same signature proof across multiple inputs with identical scripts?
  
  **A** (@dusek, msg#30079): This is unconventional; sigma-rust typically generates a new signature per input even if scripts are identical. Ledger returning a single signature per call suggests a signing architecture issue.

- **Q** (@kushti, msg#29995): How does Paideia submit transactions?
  
  **A** (@luivatra, msg#30003): Via context variables; ordering issues between Scala and Rust implementations being investigated. Possible workaround: allow Nautilus to accept pre-serialized transaction bytes for signing without serialization roundtrips.

---

## Links Shared

- [https://docs.ergoplatform.com/dev/p2p/network/](https://docs.ergoplatform.com/dev/p2p/network/): Ergo P2P protocol documentation (created by Aberg).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/972](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/972): Merged PR for Sigma 6.0 candidate.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/968](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/968): Merged PR for Sigma 6.0 candidate.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1015](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1015): Merged PR for Sigma 6.0 candidate.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1020](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1020): Merged PR for Sigma 6.0 candidate.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1017](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1017): Numeric methods polishing for Sigma 6.0.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/997](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/997): UnsignedBigInt implementation.

- [https://github.com/sigmaspace-io/ergo-lib-go/releases/tag/v0.28.0](https://github.com/sigmaspace-io/ergo-lib-go/releases/tag/v0.28.0): ergo-lib-go v0.28.0 release.

- [https://github.com/ergoplatform/ergo/blob/master/src/test/scala/org/ergoplatform/network/ErgoNodeViewSynchronizerSpecification.scala](https://github.com/ergoplatform/ergo/blob/master/src/test/scala/org/ergoplatform/network/ErgoNodeViewSynchronizerSpecification.scala): P2P test specification (flagged as messy, needs framework improvement).

- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/): Ergo Manifesto.

- [https://www.ergoforum.org/t/on-contractual-money/4848](https://www.ergoforum.org/t/on-contractual-money/4848): kushti's forum post on "Contractual money" with UTXO examples.

- [https://github.com/ergoplatform/ergo-appkit/pull/239](https://github.com/ergoplatform/ergo-appkit/pull/239): AppKit PR requiring merge (vulnerable dependency removal).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/812](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/812): ErgoTree pretty-printing support (incomplete).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/831](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/831): ErgoTree pretty-printing support (incomplete).

- [https://github.com/ChainCashLabs/chaincash-rs/issues/28#issuecomment-2337058792](https://github.com/ChainCashLabs/chaincash-rs/issues/28#issuecomment-2337058792): ChainCash issue discussion.

- [https://discord.gg/wa38bX57tY](https://discord.gg/wa38bX57tY): "The Field" (CannonQ's pledging protocol) Discord for collaboration.

---

## Unresolved Questions

- **Scrypto Release Blocking**: sigmastate-interpreter depends on an unreleased scrypto snapshot version (2.1.10), forcing downstream projects to include sonatype snapshots repo. A new scrypto release is needed but no timeline provided [@Aberg, msg#30044].

- **Sub-blocks Devnet Timeline**: kushti mentions sub-blocks devnet "in a few weeks" but exact release date unconfirmed [@kushti, msg#30017].

- **ErgoScript Decompiler**: Pretty-printing support for ErgoTree AST (PRs #812, #831) remains incomplete; no owner assigned to finish work [@kushti, msg#30063].

- **Paideia Context Variable Serialization**: Root cause of ordering differences between Scala and Rust implementations not yet identified; workaround (pre-serialized bytes) is being explored but not confirmed as solution [@luivatra, msg#30003].

- **Multi-input Signature Validity**: Unclear whether reusing a single Ledger-generated signature across multiple identical-script inputs is cryptographically valid or a protocol violation; Aberg's underlying transaction construction issue complicates diagnosis [@Aberg, msg#30080-30087].

- **Testnet Node Quality**: Possible bad testnet node distributing incomplete block height information (only 1,282,367 blocks reported when more exist), but root cause not identified [@qx, msg#29944].

- **Ergo 5.0.23 Stability**: Thread dispatcher rework testing ongoing; stability confirmation pending wider community testing [@kushti, msg#29974].