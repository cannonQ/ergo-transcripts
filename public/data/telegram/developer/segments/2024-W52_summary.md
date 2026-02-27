# Ergo Developer Chat Summary — 2024-W52

## Key Topics Discussed

- **Sigma State Interpreter Versioning (6.0 RC)**: Tree-based versioning implementation completed and tested. Fixed issue where 6.0 nodes incorrectly counted already-replaced rules as replacements again. Preparing for public testnet activation with voting parameter consideration (90%+ hashrate required).

- **Sub-blocks / Input Blocks Implementation**: Linked chain structure finalized. Complex transaction packing into input blocks and UTXO set commitment updates now in progress—identified as one of the most involved parts of the implementation.

- **SigmaUSD Update Script Rework**: Step 1 completed—contract now checks only NFT in update output to allow new token injection. Step 2 (update script testing) pending testnet deployment. Consideration given to updating bank contract to itself to allow V2 detail refinement.

- **Node 5.1.1 Release & Sync Performance**: Reference protocol client 5.1.1 released. Sync times with extraIndex vary significantly by hardware: 20 hours (20 threads, 8GB, mirrored NVMe) to 60 hours (4 cores, 8GB, VPS). Configuration file permission issues can silently prevent indexing—no error logging currently.

- **Fleet SDK & Nautilus Wallet Development**: Blake2b function added to crypto package. Nautilus UI redesign ongoing with dark theme support, NFT/Assets view consolidation, and removal of Emurgo's bloated cip4-js dependency.

- **Keystone Hardware Wallet Integration**: SDK and firmware integration in draft PR stage. Focus now on transaction/signing data display and signing process testing.

- **Paideia DAO Platform State Fixes**: Critical off-chain code bug discovered where mempool filtering corrupts state when chained transactions spend UTXOs before confirmation. General fix merged to reduce state corruption probability. Stake contracts successfully returned exploited assets via proposal (no backdoor).

- **Rosen Bridge Updates**: Multiple fixes deployed: "Use All" button amount display correction, transaction dialog responsiveness, Binance Chain scanner event integration, permit check fixes, guard-service and watcher database transaction conflict resolution.

- **Beene First Version Complete**: Initial version finished; first fundraising project launching soon.

- **Celaut Reputation System**: Node reputation proof sharing now works with zero ERG balance, enabling "launch with one command and zero configuration." JSON content viewing added to reputation proofs for upcoming tutorial.

- **Lithos Protocol Optimistic Rollup Design**: Last NISP contracts being finalized. Fraud proof contract interaction model designed for optimistic rollup.

- **Gluon SDK Architecture Critique**: Mixed state throughout makes SDK unusable for pure mathematical operations. Proposal: separate pure function core (gluon-calc.js), parser, and serializer rather than mixing math with chain data.

- **Verifier's Dilemma Research**: Paper "Nakamoto Consensus under Bounded Processing Capacity" (2023) shared, showing teasing strategy attack exploits network congestion worse than Nakamoto's private attack; PoS equivocation exacerbates this at high block rates.

## Important Decisions or Announcements

- [@kushti, msg#32319, 2024-12-25]: Ergo protocol client v5.1.1 released with versioning fixes and input blocks progress.

- [@kushti, msg#32285, 2024-12-23]: Tree-based versioning passing tests; planning devnet functional testing then public testnet update.

- [@jossemii, msg#32321, 2024-12-26]: Beene first version finished; first fundraising project launching soon.

- [@luivatra, msg#32322, 2024-12-26]: Paideia stake contracts returned exploited assets via proposal. Critical state corruption fix from mempool filtering bug merged.

- [@Cheese, msg#32350, 2024-12-27]: Lithos optimistic rollup design and fraud proof contract interaction model finalized.

- [@kushti, msg#32301, 2024-12-24]: Free time announced for Dec 25th; dev chat paused for Christmas break.

## Technical Q&A Worth Preserving

- **Q** (@thestophe, via DiscordBridge): Does anyone have a good script or reference for reading wallet transaction data and parsing it to aggregate Rosen Bridge accounting?
  **A** (@kushti, msg#32283): Use /wallet API methods. Output is JSON; command-line JSON parsing tools exist. Can also use blockchain/transactions/byAddress endpoint directly.

- **Q** (@mgpai, msg#32297-32298): Synced 5.1.0 with extra index in 60 hours on 4-core VPS with 8GB RAM. What storage type?
  **A** (@mgpai, msg#32299-32300): SSD on VPS, but other programs running may have slowed it.

- **Q** (@Pulsarz, msg#32302): Took only 20 hours with mirrored NVMe. What specs for mgpai's setup?
  **A** (@Pulsarz, msg#32307): 20 threads, 8GB RAM, mirrored NVMe disks. (@error, msg#32313): Best practice is sync first, then enable indexing.

- **Q** (@Luivatra, msg#32328-32332): Has indexing config changed in 5.1? Node doesn't index despite isExplorer=true and same config.
  **A** (@Pulsarz, msg#32329): Config works fine (isExplorer=true, token info fetches). (@Luivatra, msg#32342-msg#32344): Found it was a file permission issue on ergo.conf—node silently ignores unparseable configs. (@kushti, msg#32345): Configuration merges three files (application.conf, mainnet.conf from jar, user-provided conf), ignoring inaccessible ones without error.

- **Q** (@JustALittleBetter, msg#32352): ELI5 explanation of bounded processing capacity consensus research?
  **A** (@kushti, msg#32353): Deferred pending full review.

- **Q** (@kushti, msg#32354): Should we update SigmaUSD bank contract to itself to allow more time for V2 details?
  **A** (@Luivatra, msg#32360): Yes, let's do it.

- **Q** (@c8e4d2a, msg#32369): How to get input boxes of mempool transactions?
  **A** (@mgpai, msg#32370): Additional queries or index all nodes beforehand.

## Links Shared

- [https://vxtwitter.com/chepurnoy/status/1871113386135826497]: kushti's public updates (specific content unclear from logs).

- [https://github.com/ergoplatform/ergo/pull/2152]: Tree-based versioning PR for node implementation.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1043]: Sigma State Interpreter versioning fix (counting already-replaced rules correctly in 6.0).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1040]: Merged sigma 6.0 RC preparation.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1013]: Additional versioning work.

- [https://github.com/ergoplatform/ergo/releases/tag/v5.1.1]: Ergo reference protocol client 5.1.1 release.

- [https://github.com/KeystoneHQ/keystone-sdk-rust/pull/105]: Keystone SDK Rust integration (draft).

- [https://github.com/KeystoneHQ/keystone3-firmware/pull/1427]: Keystone firmware integration.

- [https://cdn.discordapp.com/attachments/669989266478202917/1321484503100690564/...]: Nautilus UI redesign screenshot (dark theme).

- [https://cdn.discordapp.com/attachments/669989266478202917/1321484503394287658/...]: Nautilus Assets view screenshot.

- [https://github.com/kushti/sigmausd/commit/3b73671e8f3b6863ce5a47747cf5ae4eda5a7c93]: SigmaUSD step (1) contract changes.

- [https://iacr.steepath.eu/2023/381-NakamotoConsensusunderBoundedProcessingCapacity.pdf]: Academic paper on consensus under bounded processing capacity.

- [https://github.com/rosen-bridge/ui/commit/df17a94d0650c564ca3b36afd05627bf8e56e67e]: Rosen Bridge Binance Chain scanner integration.

- [https://github.com/rosen-bridge/health-check/commit/4adaf0335fd4678c4f61ba31451d12d35ec69607]: Rosen health-check permit fix.

- [https://github.com/rosen-bridge/guard-service/commit/568f63e78a9adeec4b8da0299c7ca726492de430]: Rosen guard-service database transaction conflict fix.

- [https://github.com/rosen-bridge/watcher/commit/9d71ff54e5da1d40d3833fb31f3fe4803110871f]: Rosen watcher database transaction conflict fix.

- [https://github.com/rosen-bridge/watcher/tree/bugfix/required-commitment-count]: Rosen watcher required commitment count calculation fix.

- [https://docs.ergoplatform.com/]: Ergo Platform documentation (proposed explainer bot addition).

## Unresolved Questions

- **Testnet Mining Participation** (@kushti, msg#32320): Who is actively mining the testnet? Needed to assess 6.0.0 candidate and determine voting parameter threshold (90%+ hashrate).

- **SigmaUSD V2 Details**: Pending decision on whether updating bank contract to itself is sufficient to allow more refinement time, or if additional time mechanisms are needed.

- **Gluon SDK Pure Function Separation**: Discussion flagged need for architectural refactor (pure math core vs. chain integration) but no implementation plan assigned.

- **Ergo Oracle Pool v2 Activation**: V2 running for Dexy Gold with GORT rewards, but broader activation timeline not discussed.

- **Indexing Performance Optimization**: Timeouts observed when fetching input boxes even on indexed nodes—root cause not resolved; potential infrastructure or query inefficiency.