# Ergo Developer Chat Summary — 2023-W47
**Period:** 2023-11-20 to 2023-12-03  
**Participants:** 8 | **Messages:** 120

---

## Key Topics Discussed

- **Token Blacklisting and eUTXO Constraints**: Discussion of whether tokens can be blacklisted in Ergo. Consensus emerged that peer-to-peer transactions cannot be prevented on-chain; enforcement requires dApp participation and singleton NFTs, representing a fundamental design trade-off in eUTXO systems.

- **Node Synchronization and Bootstrap Config**: Reports of slow node sync times even with UTXO and NIPoPoWs bootstrap enabled. kushti offered to investigate locally with provided configs.

- **AppKit API Design and Internals**: Aberg raised questions about accessing private fields (e.g., `InputBoxImpl.getExtension()`) and converting between `OutBox` and `ErgoBox` instances. Confirmed that casting to implementation classes is necessary for some use cases, though officially unsupported.

- **BIP 32 Derivation Path Parameters**: Discussion of whether to use signed `int` (32-bit) or `long` (64-bit) for BIP 32 path components in Java. kushti confirmed Ergo uses `Seq[Int]` in Scala, with no reported issues despite hardened components appearing as negative values.

- **ErgoScript Compilation and Evaluation Benchmarking**: Pulsarz inquired about porting ErgoTree evaluation to alternative languages. kushti identified `ergotree-ir` and `ergotree-interpreter` from sigma-rust as starting points.

- **AppKit Scala Version Dependencies**: Aberg questioned whether to use appkit-2.11, 2.12, or 2.13. No clear guidance provided; MrStahlfelge noted 2.12 has Android/Proguard compatibility issues.

- **Java Language Evolution and Ergo Tooling**: Discussion of modern Java features (Loom, VarHandles, GraalVM Native Image, pattern matching) and potential Scala 3 migration blockers. Aberg advocated for Java rewrites to improve contributor availability.

- **Mnemonic/Seed Recovery Issues**: HQΣr reported that seed restoration from node wallet produces incorrect addresses and API key resets after page refresh. kushti suggested mnemonic passphrase may not be configured correctly.

- **Node API Token Information Gaps**: Flying Pig reported that some tokens (e.g., B Paideia, remission tokens) cannot be found via the Node API `/blockchain/token/byId` endpoint, even on indexed nodes.

- **Modifier Parsing and Peer Penalties**: Luivatra observed repeated "Failed to parse modifier" warnings and misbehavior penalties from a single peer IP (15.235.13.47). Node was upgraded from 5.0.14 to 5.0.15 to investigate.

- **Solo Mining Pool Feature Testing**: Aberg solicited testers for Satergo's solo mining pool feature on the `solo-mining-pool` branch, requiring full node wallet setup.

- **ChainCash Rust Bounties**: kushti announced bounties on issues in the ChainCash server repository for Rustaceans.

---

## Important Decisions or Announcements

- [@kushti, msg#22267, 2023-12-01]: Bounties attached to ChainCash server repo issues; Rustaceans invited to contribute.

- [@Aberg, msg#21830–21832, 2023-11-25]: Seeking community testers for Satergo solo mining pool feature on testnet and mainnet.

- [@kushti, msg#22158, 2023-11-30]: Acknowledged Sigma protocol bug and committed to fix.

- [@MrStahlfelge, msg#22345–22347, 2023-12-03]: Clarified that ergo-wallet-mobile is OSS; design decisions prioritized smallest effort and best runtime stability; invited community rewrites/rebases.

---

## Technical Q&A Worth Preserving

- **Q** (@Luivatra, msg#21519): How do you force the inclusion of a dataInput in every transaction a certain token is in?  
  **A** (@Pulsarz, msg#21520–21521): You cannot force inclusion; the workaround uses a singleton NFT, but p2p transactions still cannot be prevented on-chain.

- **Q** (@Aberg, msg#21764): How to obtain `ErgoBox` instances from `UnsignedTransaction` outputs instead of `OutBox`?  
  **A** (@Aberg, msg#21767): `OutBox` API is more natural; casting to `InputBoxImpl` for low-level access works but is unofficial.

- **Q** (@Aberg, msg#21838–21839): Should BIP 32 path components be `int` (32-bit) or `long` (64-bit) in Java?  
  **A** (@kushti, msg#21840): Use `Seq[Int]` as in Scala's `DerivationPath.scala`; no reported issues despite hardened components appearing negative.

- **Q** (@Aberg, msg#21769): Why does `InputBox` not expose `getExtension()` when `InputBoxImpl` does?  
  **A** (@Aberg, msg#21771): It is not public API; casting to implementation classes is the workaround, though risks future breakage on updates.

- **Q** (@Pulsarz, msg#22009–22011): What parts of sigma-rust should be examined to port ErgoTree evaluation to another language?  
  **A** (@Pulsarz, msg#22020): Start with `ergotree-ir` and `ergotree-interpreter` from sigma-rust.

- **Q** (@HQΣr, msg#21863): Mnemonic restoration from node wallet produces different address; derived addresses not visible.  
  **A** (@kushti, msg#21864, msg#21866): Likely mnemonic passphrase not set correctly; passphrase should be skipped if not used.

- **Q** (@Flying Pig, msg#21625–21626): Node API cannot find certain tokens (B Paideia, remission tokens) despite confirmed blocks.  
  **A** (Unresolved): Issue confirmed on local indexed and remote nodes; likely indexing or API bug.

- **Q** (@Luivatra, msg#21645): Why do confirmed modifiers sometimes disappear from the node?  
  **A** (Unresolved): kushti investigating; may relate to parser or state management.

- **Q** (@MrStahlfelge, msg#22360): Why does Scala 2.12 not work on Android with Proguard?  
  **A** (@MrStahlfelge, msg#22360, msg#22362–22363): Scala 2.12 bytecode incompatibility; requires full release build testing with TX signing, not just compilation.

---

## Links Shared

- [https://github.com/Satergo/Satergo](https://github.com/Satergo/Satergo): Satergo wallet repo; solo mining pool feature on `solo-mining-pool` branch.
- [http://213.239.193.208:9053/blockchain/token/byId/0040ae650c4ed77bcd20391493abe84c1a9bb58ee88e87f15670c801e2fc5983](http://213.239.193.208:9053/blockchain/token/byId/0040ae650c4ed77bcd20391493abe84c1a9bb58ee88e87f15670c801e2fc5983): Example B Paideia token lookup (returns 404).
- [https://central.sonatype.com/search?q=ergo-appkit](https://central.sonatype.com/search?q=ergo-appkit): Maven repository search for Ergo AppKit versions.
- [https://github.com/ChainCashLabs/chaincash-rs](https://github.com/ChainCashLabs/chaincash-rs): ChainCash server Rust implementation; bounties available.
- [https://minborgsjavapot.blogspot.com/2023/01/java-21-performance-improvements.html](https://minborgsjavapot.blogspot.com/2023/01/java-21-performance-improvements.html): VarHandles for efficient byte-to-primitive conversions (JDK 9+).
- [https://github.com/google/desugar_jdk_libs/blob/master/CHANGELOG.md](https://github.com/google/desugar_jdk_libs/blob/master/CHANGELOG.md): Android desugaring library; supports modern Java features on older targets.

---

## Unresolved Questions

- **Node Sync Speed**: HQΣr reports bootstrap config yields slow sync; kushti agreed to investigate with provided config, but resolution not documented in this segment.

- **Token API Gaps**: Why B Paideia and remission tokens cannot be found via Node API despite confirmed blocks—suspected indexing bug, not investigated in this chat.

- **Modifier Parsing Failures**: Root cause of repeated "Failed to parse modifier" warnings from peer 15.235.13.47; Luivatra planned to test 5.0.15 upgrade but outcome not provided.

- **AppKit Version Guidance**: No definitive answer on which Scala version (2.11, 2.12, 2.13) to use for AppKit; trade-offs undocumented.

- **Confirmed Modifier Disappearance**: Luivatra observed modifiers disappearing after confirmation; kushti initiated reproduction but resolution not provided.

- **ChainCash Node HTTP Address and Private Key Access**: Unknown user asked for clarification; no response provided.