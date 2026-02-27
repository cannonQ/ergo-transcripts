# Ergo Developer Chat Summary — 2025-W04

## Key Topics Discussed

- **Dexy Gold Integration & UI Development**: c8e4d2a is porting Scala unit tests to JavaScript for the Dexy UI, minting fake tokens/NFTs for mainnet testing, and working through contract understanding. Major blocker: Int.MaxValue serialization mismatch between Scala and JavaScript (resolved in Fleet v0.8.2).

- **Input/Ordering Blocks (EIP)**: kushti made progress on linking between input blocks per EIP spec, with transactions packed as they arrive. Exploring feasibility of making contracts dependent on input blocks for sidechains/rollups; security assumptions still being documented.

- **ChainCash Reserve Architecture**: kushti identified reserve refund-related register preservation gaps and is implementing a fix via note token issuance tracking with timestamp validation. Exploring layer 2 note transfer for p2p offchain cash backed by onchain reserves.

- **Sigma Protocol & Zero-Knowledge Proofs**: bulletproofs being integrated for ErgoScript verification; enables trustless alternatives to SNARKs. Research ongoing for applying to verifiable credentials and generic statements beyond range proofs.

- **Socket Service APIs for Real-Time UX**: c8e4d2a and kushti discussing need for efficient mempool/sub-block streaming to web UIs. Proposed APIs: `subblocks/byIndexRange`, `/transactions/unconfirmedNotInSubblock`, and `/info` field `lastSubBlockIndex`.

- **Random Number Generation on-chain**: c8e4d2a's approach uses NFT + future block headerID to avoid third-party trust, but requires 2-block wait. References to `ergo-randgen` and multiparty alternatives (hashmon) noted but deprioritized post-Dexy Gold.

- **Rosen Bridge Watcher & TSS Updates**: Rosen team completed 100% of Parallel Events QA scenario tests, 70% of invalid 'to-address' scenario. Finalized sign cache and integrating new TSS packages for bridge stability. UI/UX improvements in target address labeling and responsive text wrapping.

- **Nautilus Wallet Redesigns**: Major overhaul of AssetInfoDialog, ExportPublicKeyDialog, SettingsView, AppConnections components. Added side panel expanded view for Chrome/Firefox, JSON token description parsing, minor UI fixes.

- **Satergo Wallet File Format**: Aberg finalizing wallet file format changes; awaiting sigma-state v5.0.15 for AppKit improvements before merging branches and release.

- **Paideia DAO Creation Flow**: Removed obsolete fields post-beta upgrade, added tooltips to Create DAO flow to improve UX and reduce user friction for DAO launches.

- **Keystone Hardware Wallet Integration**: First PRs submitted for review; Keystone team limited on resources pre-holidays. Using interim time to complete remaining tasks and SDK work for simultaneous review post-holidays.

## Important Decisions or Announcements

- [@kushti0978, msg#32673, 2025-01-21]: Weekly Ergo Developers chat scheduled **Wed, Jan 22nd, 1PM UTC** — feedback requested on financial contract development, 6.0 protocol soft-fork, input/ordering blocks EIP, L2 and research topics.

- [@c8e4d2a, msg#32682, 2025-01-22]: ergfi (https://ergfi.xyz/) now focusing on Dexy Gold integration; Scala unit tests 30% ported to JavaScript; thanks to community for SigUSD UI testing.

- [@arobsn, msg#32737, 2025-01-24]: **Fleet SDK v0.8.2 released** with serialization fix for Int.MaxValue (2147483647) handling in JavaScript.

- [@cannon_q, msg#32713, 2025-01-22]: **Ergo Ecosystem Bounties board updated**:
  - 100 total open bounties
  - 27,512.25 ERG in open bounties (excluding Keystone integration)
  - Added coding language metadata (Rust, Scala, Svelte, TypeScript)
  - Old 2022–2023 issues flagged as uncertain re: active bounty status

- [@mgpai, msg#32705, 2025-01-22]: **Destiny Protocol** (traditional prediction markets → vault-based dynamic markets) SDK development for Ergo side seeking interested developers; reach out to mgpai or @b.wp.

## Technical Q&A Worth Preserving

- **Q** (@c8e4d2a, msg#32669): Is there a way to set contextVars in mockchain?
  **A** (@arobsn, msg#32670): Wrap input object with `ErgoUnsignedInput` class and use `setContextExtension()`. [Fleet spec example](https://github.com/fleet-sdk/fleet/blob/6d96b6be024210043061821aa1f136b11a522030/packages/core/src/models/ergoUnsignedInput.spec.ts#L26-L32)

- **Q** (@c8e4d2a, msg#32694): Different buffer values (2, 3, 5) in Dexy contracts—do they have special meaning? Can they all be equal?
  **A** (@kushti0978, msg#32695): Can set to 3 everywhere, means TX must be included in one of next 3 blocks to be valid.

- **Q** (@c8e4d2a, msg#32709): Scala `Int.MaxValue` (2147483647) serializes to `"04feffffffffffffffff01"` but JavaScript SInt produces `"04feffffff0f"`, causing box parsing errors.
  **A** (@arobsn, msg#32734-737): JavaScript's 53-bit Number precision limitation. Fixed in Fleet v0.8.2 released 2025-01-24.

- **Q** (@Pgr456, msg#32696): Are input blocks held in RAM like mempool? Or else disk I/O would be high with block frequency and indexer polling.
  **A** (@kushti0978, msg#32697-699): Stored in RAM and pruned after 2 ordering blocks. Current blocks serve as compaction/pruning mechanism with input blocks.

- **Q** (@c8e4d2a, msg#32700): How can socket services efficiently fetch unconfirmed transactions? Can input boxes be pre-included in unconfirmed transaction JSON?
  **A** (@kushti0978, msg#32702-703): Augmenting transaction JSON with input boxes is possible. Proposed additional APIs: `subblocks/byIndexRange`, `/transactions/unconfirmedNotInSubblock`, and `/info` field `lastSubBlockIndex` (msg#32718).

- **Q** (@kii, msg#32719): Did we figure out random numbers on contract?
  **A** (@c8e4d2a, msg#32722-732): Write futureHeight to UTXO, then after block with that height mints, use block headerID (sum hex digits mod element count). Improved distribution by combining NFT tokenID + headerID instead of headerID alone. Requires 2-block wait, avoids third-party trust (vs. multiparty schemes like hashmon).

- **Q** (@c8e4d2a, msg#32739-741): Is there an open-source Ergo Rust wallet?
  **A** (@Glasgow, msg#32742; @Pgr456, msg#32745): Sigma-rust includes wallet code at `ergo-lib/src/wallet`. For transaction building, reference oracle-core's `publish_datapoint.rs` using `tx_builder` and `box_builder`. Keystone firmware example shows deriving secrets from seed (msg#32745 links).

## Links Shared

- [Dexy Stable repo](https://github.com/kushti/dexy-stable): Main Dexy contract development (test failures addressed msg#32655).
- [Dexy Payout Contract](https://github.com/kushti/dexy-stable/blob/f87399dfa3d5905a1a9d02f143953231daff30a1/contracts/bank/payout.es#L22): Buffer and threshold parameter questions (msg#32694).
- [ChainCash Issue #7 & PR #8](https://github.com/ChainCashLabs/chaincash/issues/7): Reserve refund-related register preservation fix in progress.
- [ChainCash Issue #9](https://github.com/ChainCashLabs/chaincash/issues/9): Alternative reserve design (mint/redeem vs. refund actions) discussion.
- [Sigmastate-interpreter PR #1036](https://github.com/ergoplatform/sigmastate-interpreter/pull/1036): 5.0.15 release needed for AppKit improvements; waiting for additional review round.
- [Sigmastate-interpreter PR #1050](https://github.com/ergoplatform/sigmastate-interpreter/pull/1050): 6.0 issue fixes.
- [Sigmastate-interpreter PR #1043](https://github.com/ergoplatform/sigmastate-interpreter/pull/1043): Tree-versioned serialization for new types.
- [Ergo-node-interface-rust PR #23](https://github.com/ergoplatform/ergo-node-interface-rust/pull/23): Needs review from @dusek_ and @pgr456.
- [Fleet SDK v0.8.2 PR #164](https://pkg.pr.new/@fleet-sdk/serializer@164): Int.MaxValue serialization fix (tested msg#32744).
- [Sigma-rust wallet module](https://github.com/ergoplatform/sigma-rust/tree/develop/ergo-lib/src/wallet): Reference for Rust wallet implementation.
- [Oracle-core publish_datapoint.rs](https://github.com/ergoplatform/oracle-core/blob/develop/core/src/pool_commands/publish_datapoint.rs): Transaction building example with signing.
- [Keystone firmware Ergo app](https://github.com/KeystoneHQ/keystone3-firmware/blob/0ebc758dded5f2348bddcfc4398ee68632b9c34c/rust/apps/ergo/src/transaction.rs#L22-L40): Seed derivation and wallet construction example.
- [Ergo-randgen repo](https://github.com/noob77777/ergo-randgen): On-chain random number generation reference.
- [Ergo-randgen explainer video](https://www.youtube.com/watch?v=flJWESKXOug): Multiparty random number scheme.
- [Ergo Node PR #2191](https://github.com/ergoplatform/ergo/pull/2191): Parameter playground (mgpai seeking example usage msg#32736).
- [Ergo Bounties Board](https://github.com/ErgoDevs/Ergo-Bounties): Updated with 100 bounties, language metadata, 27,512.25 ERG total.
- [Ergo Bounties Repos](https://github.com/ChainCashLabs/chaincash): Additional repos with bounties added (msg#32712).
- [ergfi.xyz](https://ergfi.xyz/): Dexy Gold integration UI in progress.
- [Paideia DAO Creation](https://app.paideia.im/creation): Improved UX post-upgrade.

## Unresolved Questions

- (**Old bounties status**, msg#32713, @cannon_q): Are 2022–2023 issues still eligible for active bounties? Unclear if bounties should be reopened or closed.

- (**Input block pruning & persistence**, msg#32696-699, @Pgr456): Storage mechanism for input blocks after 2-ordering-block pruning window not detailed. Clarification needed on indexer/API long-term data access.

- (**Tuple serialization in 6.0**, msg#32688-689, @kushti0978, @dusek_): Distinction between Constant Tuple and Expr Tuple opcode serialization unclear; needs resolution in PR #1047 discussion.

- (**Socket service API design**, msg#32714-718, @c8e4d2a & @kushti0978): Final API shape for sub-block streaming still being discussed; no confirmation on `lastSubBlockIndex` field adoption yet.

- (**Dexy payout threshold**, msg#32694, @c8e4d2a): Whether `payoutThreshold = 100000000000000L` should be removed from payout contract; kushti deferred pending recheck.

- (**Keystone integration timeline**, msg#32701, @Pgr456): Pending Keystone team resource availability post-holidays for PR review and testing.

- (**Sigmafi.app domain**, msg#32746, @cafebedouin.org): Domain reregistration flagged; awaiting @nemo429 follow-up.