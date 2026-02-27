# Ergo Developer Chat Summary — 2023-W37

## Key Topics Discussed

- **UTXO Set Scanning Implementation**: @kushti identified implementing UTXO set scan as a significant task requiring separate threading to avoid blocking other threads during set modifications, with results needing injection into the block scan process. A bounty is being attached to incentivize contributors.

- **Storage Rent and Miner Behavior**: Discussion on how miners implementing storage rent can choose to include only their own transactions taking rent, though miners have always had this power in general.

- **Mempool Configuration and Transaction Rebroadcasting**: @Pulsarz detailed mempool settings including `rebroadcastCount` (default 3, determines how many transactions from mempool get rebroadcasted per block) and `mempoolCleanupDuration`, with recommendations to set `rebroadcastCount` around 500 and cleanup to 2 minutes for better performance. Default mempool limit is 1000 transactions; blocks typically include 400-500.

- **ErgoExplorer Performance Issues**: Public explorer lagged significantly during the week (stuck at block 72 while other nodes progressed). Root cause appeared to be heavy transaction loads (6k chained transactions in a single block) causing database processing bottlenecks.

- **Database Performance and Indexing**: @Luivatra explained that explorer's data model (separate tables for outputs/inputs) causes excessive joins when querying unspent outputs. Adding appropriate indexes can drastically improve query times (e.g., portfolio query improved from 3s to 0.5s with one index). Emphasized using query plans (`EXPLAIN` in PostgreSQL) to diagnose slow queries.

- **JVM vs. Rust for Blockchain**: @kushti and @Aberg debated language choice. @kushti noted JVM's garbage collection may be better for blockchain processing with periodic transaction classes, as modern GC outperforms manual memory management for small object churn. @kushti reviewed Kaspa's Rust code (August 2023) and found it "raw"; original implementation in Go is harder to judge.

- **Java Performance and GC Tuning**: @Aberg recommended ZGC and mentioned Shenandoah as competitive garbage collectors. @kushti emphasized always using latest JDK for performance improvements. Scaling TPS requires either bandwidth optimization or layer 2/sidechain solutions, not super-nodes (which sacrifice decentralization).

- **GreasyCEX Mission #2 Progress**: @Austen Milbarge reported "Greasy Royale" fundraiser advancement with 500 ERG grand prize, 5 confirmed mission sponsors, NFT artwork in production, and AMA scheduled for September 19th.

- **AppKit Context Variable Behavior**: @Luivatra noted issues with AppKit when not using consecutive indices in context variables; @kushti's explanation clarified the context.

## Important Decisions or Announcements

- [@Austen Milbarge // GreasyCEX, msg#17445, 2023-09-12]: Greasy Royale Mission (#2) paper released publicly; 5 mission sponsors confirmed; partnership announcement pending; AMA scheduled for September 19th to discuss participation and rewards.

- [@Aberg Satergo dev, msg#18410, 2023-09-16]: Proposed renaming public explorer to "legacy explorer" to distinguish it from newer ErgoExplorer UI/UX.

- [@kushti khushi, msg#17374, 2023-09-11]: Willing to attach bounty to UTXO set scanning contributor task.

## Technical Q&A Worth Preserving

- **Q** (@Flying Pig, msg#18268): Can mempool/rebroadcast settings be set directly in ergo.conf, or must they be amended in application.conf and rebuilt?
  **A** (@Luivatra, msg#18269): application.conf contains defaults; ergo.conf overrides. mainnet.conf comes between them in precedence.

- **Q** (@Luivatra, msg#18276, 2023-09-15): Is Rust beneficial for blockchain nodes, given Kaspa's performance gains?
  **A** (@Luivatra, msg#18277): If old code needed major refactoring anyway, rewriting in Rust is easier to justify than admitting old code was poor. Rust excels for low-resource microservices; no single language is best for everything.

- **Q** (@Aberg, msg#18391): What articles helped optimize database queries?
  **A** (@Luivatra, msg#18393–18398): Learn query plans (e.g., EXPLAIN in pgAdmin with timing enabled), identify slow operations, add indices. Work experience with MSSQL informed approach; principles translate across databases.

- **Q** (@HQΣr, msg#18356–18368, 2023-09-15): Could database snapshots at intervals allow recovery from specific block heights without full resync from genesis?
  **A** (Implicit from context): Not addressed directly, but @kushti and @HQΣr continued discussing recovery mechanics; appears unresolved.

- **Q** (@HQΣr, msg#18506, 2023-09-17): Do UTXO Alliance chains have core developers studying protocol improvements, or is that unique to Ergo?
  **A** (No explicit response recorded in segment.)

## Links Shared

- [https://github.com/ergoplatform/ergo/blob/0af9dd9d8846d672c1e2a77f8ab29963fa5acd1e/src/main/resources/application.conf]: Ergo node configuration defaults with descriptions for mempool, rebroadcast, and cleanup settings (@Pulsarz, msg#17596).

## Unresolved Questions

- **Database snapshot recovery strategy**: @HQΣr proposed incremental snapshots to allow recovery from specific block heights without full resync; @kushti did not directly address feasibility.

- **UTXO Alliance protocol innovation**: @HQΣr questioned whether other UTXO-based chains actively research protocol improvements; no response documented.

- **Scala breaking changes**: @Aberg flagged confusion over why Scala versions introduce breaking changes and require version-suffixed Maven artifacts; broader ecosystem question left open.

- **ErgoExplorer address loading performance**: @Aberg reported slow address loading with no loading indicator; flagged as beta feedback but no fix timeline given.