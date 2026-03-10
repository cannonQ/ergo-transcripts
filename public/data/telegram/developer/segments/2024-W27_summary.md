---
title: "Ergo Developer Chat — 2024-W27"
date_start: "2024-07-01"
date_end: "2024-07-07"
type: telegram_weekly
channel: developer
week: "2024-W27"
source: telegram
message_count: 117
categories: [technical, wallet, defi, bridges, ecosystem, marketing]
key_terms: [byAddress endpoint, transaction sorting, indexer, API paging, sliced storage, Sigma 6.0, sigmastate-interpreter, unsigned big ints, Bulletproofs, range proof verification, HTTP API crash, indexer threadpool, timeout exception, node startup, BlockchainApiRoute, Nautilus Wallet, ergoConnector, isConnected, isAuthorized, performance improvements]
---
# Ergo Developer Chat Summary — 2024-W27

## Key Topics Discussed

- **Node API transaction ordering issue**: Explorer node 213 returning transactions in unexpected order due to recent database slicing changes. Transactions stored in ascending order by insertion but should be returned in descending order for `/blockchain/transactions/byAddress` endpoint. [@kushti, msg#28257]

- **Nautilus Wallet v0.11.0 & performance improvements**: Released with `ergoConnector.isConnected()` and `ergoConnector.isAuthorized()` methods; ergo-ledger-js now 100% test coverage; significant speed improvements reported by users. [@arobsn, msg#28233, msg#28260]

- **Sigma 6.0 protocol development**: Multiple PRs completed for unsigned big integers, bulletproofs range proof verification, and variable difficulty setting. Still working on in-memory cache sorting for transaction ordering. [@kushti, msg#28234]

- **Dexy bootstrapping**: LP launch expected this week; ongoing discussions with community members on token initialization parameters. [@kushti, msg#28234]

- **Crystal Pool deposit feature**: Mobile wallet deposit proxy contract completed (~30% feature done); dynamic transaction fee compilation per user. [@c8, msg#28235]

- **Paideia DAO improvements**: Treasury consolidation, long-living contract with automatic UTXO refresh after 2 years, and voting time window bug fixes. [@luivatra, msg#28236]

- **Crux generalized DEX backend**: Now supports multiple DEXes with websocket live updates endpoint. [@luivatra, msg#28236]

- **Rosen Bridge p2p improvements**: Completed scaled testing for large messages (~100kB), working on retry mechanisms and dial issues in burst scenarios. [@vorujack, msg#28247]

- **HTTP service thread pool contention**: Indexer and API sharing same thread pool causing service failures on indexed nodes; fix merged into 5.0.22 candidate. [@kushti, msg#28282]

- **ErgoTree encoding discrepancies**: User reported differences between compiled ErgoTree and on-chain version; may be first-byte version difference or AppKit encoding issue. [@deatgripson, msg#28224-238]

- **Contract parameter limits**: Possible issue when contracts have 5+ parameters; script reduces to false unexpectedly. [@luivatra, msg#28278]

## Important Decisions or Announcements

- [@arobsn, msg#28233, 2024-07-03]: Nautilus Wallet v0.11.0 released with improved connector API
- [@arobsn, msg#28260, 2024-07-04]: Nautilus Abyss v0.12.0-beta1 released with major connection script injection performance improvements; public release expected by Saturday
- [@kushti, msg#28234, 2024-07-03]: Sigma 6.0 PRs #1014, #1015, #1016 completed; focus shifting to activation code and unsigned big integer verification after current work completes
- [@Glasgow｜WON'T DM, msg#28190, 2024-07-01]: Ergo Foundation rebooted LinkedIn page for developer recruitment; target 3 posts daily
- [@Koutelier, msg#28244, 2024-07-04]: New Nautilus Wallet landing page frontend created (not official dev work)

## Technical Q&A Worth Preserving

- **Q** (@Flying Pig): Why does `/blockchain/transactions/byAddress` return transactions in ascending order instead of descending (newest first)?
  **A** (@kushti, msg#28257): Transactions stored in ascending order by insertion/height; recent database slicing change requires fetching from end for descending order. Ordering should be fixed in latest build [@msg#28210].

- **Q** (@deatgripson): Does compiled ErgoTree differ from on-chain version? Process: compile contract with AppKit, get `.bytesHex()`, deploy to testnet.
  **A** (@kushti, msg#28231-232): Could be ErgoTree version difference (first byte). Check if only first byte differs; if multiple bytes differ, may be AppKit/ErgoPy encoding issue.

- **Q** (@Flying Pig): New database structure with transaction slices — are transactions sorted descending within each slice?
  **A** (@flyingpig69, msg#28258): Yes, slices are segments of transactions sorted in descending order within each slice (change from old single-slice structure).

- **Q** (@HQΣr): Can I build custom UI on Crux's new DEX live updates endpoint (websocket)?
  **A** (@luivatra, msg#28239): Yes, but API may be closed to subscription-based access if demand appears. "Not sure when you will be rugged."

- **Q** (@Michael): Is it possible to move SigmaUSD oracle to v2 and add buyback fee to contract?
  **A**: No response recorded; topic left open.

- **Q** (@luivatra): Are there limits to contract template parameters? Script reduces to false with 5 parameters but works fine with 4 + hardcoded value.
  **A**: No response recorded; still investigating.

- **Q** (@zkastn): Who uses c-bindings for sigma-rust?
  **A** (@Pgr456, msg#28273): Yes, using it; available for consultation on issues.

- **Q** (@HQΣr): Seeing "attempt to postmessage on disconnect port" error on dApps (CruxMart with Firefox) — Firefox issue or general?
  **A**: No response recorded.

- **Q** (@c8): Are Trade House limit order contracts open source?
  **A** (@luivatra, msg#28269): Not yet.

## Links Shared

- [kushti/sigmausd test branch](https://github.com/kushti/sigmausd/tree/master/src/test/scala/sigmausd): SigmaUSD bank update tests awaiting review
- [OpenSSH exploit script](https://gist.github.com/dzyphr/ca8910a103113ce64d2598d73652958b): Update script for CVE-2024-6387 (Ubuntu Linux)
- [Proof-of-Work-Based Consensus in Expected-Constant Time](https://eprint.iacr.org/2023/1663.pdf): Lukas Aumayr's Blink paper on O(1) light clients
- [Blink reference implementation](https://github.com/scaffino/Blink): Example Blink implementation in Scala
- [SigmaTrees video](https://youtu.be/deXi73K4Z0k): Technical explanation by kushti
- [Ergoversary video](https://youtu.be/r16nibO68E4): Discussion on variable difficulty and fork choice rules
- [Nautilus Landing Page](https://nautilus-landing-six.vercel.app/): New frontend by Koutelier
- [Nautilus GitHub](https://github.com/Koutelier/Nautilus-Landing): Frontend source
- [Rosen Bridge GitHub commits](https://github.com/rosen-bridge/rosenet/commit/2aa4234be38ec8bb818028f664a54a52cb8af1d3): Scaled message testing completion
- [EIP-0046 PR review](https://github.com/ergoplatform/eips/pull/101#pullrequestreview-2161639498): mgPai feedback on proposal
- [Sigma Rust PR #752](https://github.com/ergoplatform/sigma-rust/pull/752): Approved; needs additional review

## Unresolved Questions

- Transaction ordering: Confirmed fixed in latest build, but needs testing on 213 to verify descending order restored [@msg#28212-214]
- ErgoTree encoding discrepancy: Root cause not confirmed; could be version byte, AppKit, or ErgoPy encoding [@msg#28226-238]
- HTTP service failure on indexed nodes: Timeout exception during startup; increased timeout merged in 5.0.22 candidate but needs testing [@msg#28282-299]
- Contract parameter limits: Whether 5+ parameter limit is real or user-side issue [@msg#28278]
- SigmaUSD oracle v2 migration with buyback fee: Feasibility unknown [@msg#28254]
- Trade House contracts: Open-sourcing timeline not discussed [@msg#28264-269]
- DiscordBridge message history deletion: 14k messages from DiscordBridge user deleted (acknowledged as accidental) [@msg#28301-313]