---
title: "Ergo Developer Chat — 2023-W52"
date_start: "2023-12-25"
date_end: "2023-12-31"
type: telegram_weekly
channel: developer
week: "2023-W52"
source: telegram
message_count: 59
categories: [technical]
key_terms: [registers, p2p decryption, encrypted data, transaction design, mempool, explorer api, load balancing, zombie transactions, node api, .NET 8.0, AOT, WASM, performance optimization, mempool retrieval, unspent boxes, guardscript, address derivation, user signing, wallet implementation, indexed nodes]
---
# Ergo Developer Chat Summary — 2023-W52

## Key Topics Discussed

- **Mempool consistency & state:** Multiple explorer instances are load-balanced, causing mempool queries to return inconsistent results across calls. Direct node queries are recommended as a more reliable alternative. [@Pulsarz, msg#23355-23357]

- **Zombie transactions & eviction:** Unconfirmed transactions that conflict with confirmed ones remain in mempool temporarily before being evicted after a timeout period (hours). [@Pulsarz, msg#23449]

- **Node API query optimization:** The `/blockchain/box/unspent/byTokenId` endpoint supports large batch limits (up to 16,384 boxes per request), significantly improving performance over incremental 100-item pagination. [@qx(), msg#23437; @Flying Pig, msg#23438]

- **Public indexed node availability:** Limited public node capacity; qx()'s node (128.253.41.49:9053) is used as backup but may have latency/specs constraints depending on geographic distance. [@qx(), msg#23410-23412]

- **Storage rent mechanism:** Storage rent claims spend the UTXO; register contents are not guaranteed to be identical across invocations. [@Luivatra, msg#23470-23471]

- **Transaction replacement & fee markets:** Replace-by-fee (RBF) behavior depends on fee-per-byte; identical transactions compete on propagation speed to miner mempool. Reduced transaction size can help contract-enforced fixed fees win conflicts. [@Pulsarz, msg#23446, msg#23453]

- **Guard script address derivation:** Addresses derived from guard scripts cannot be user-controlled directly; user signing must be implemented as a condition within the guard script itself, requiring wallet-level support. [@Luivatra, msg#23367-23368]

- **P2PK Schnorr signature (R1) properties:** R1 is never null in P2PK contexts (message #23379-23380). [@Pulsarz]

---

## Important Decisions or Announcements

- [@Pulsarz, msg#23392, 2023-12-27]: **FleetSharp & hodlcoin UI releases**
  - FleetSharp migrated to .NET 8.0
  - hodlcoin UI migrated to .NET 8.0, disabled AOT (significant WASM size reduction + faster initial load)
  - hodlcoin switched from full mempool retrieval + explorer queries to single node endpoint `/blockchain/box/unspent/byTokenId`

- [@Flying Pig, msg#23438, 2023-12-28]: **Node explorer optimization complete**
  - Identified batch query bottleneck (100-item pagination was resource-intensive)
  - Successfully implemented 16,384-item batch limits
  - Re-enabled qx()'s node for most token queries; SPF rich list (50k boxes) still exceeds Vercel 10-second limit on larger instances

---

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg#23333): Can registers be used for peer-to-peer encrypted data storage with transaction-based messaging, where only address owners can decrypt?
  **A**: Not directly preserved in chat; question acknowledged but not fully answered in segment.

- **Q** (@Aco, msg#23354-23360): Why does mempool API sometimes show different transactions on repeated calls? When do zombie transactions get evicted?
  **A** (@Pulsarz, msg#23355-23357): Multiple load-balanced explorer instances cause inconsistent state. Direct node mempool queries are more reliable. (@Pulsarz, msg#23449): Conflicting transactions are evicted after timeout (hours).

- **Q** (@Flying Pig, msg#23409): Are there public indexed nodes available besides node 213?
  **A** (@qx(), msg#23410-23412): qx()'s node (128.253.41.49:9053) is available; used by backup explorer and some ErgoExplorer queries. Caveat: may have latency depending on geographic distance.

- **Q** (@Flying Pig, msg#23416): Why is rich list query timing out on public node?
  **A** (@Flying Pig, msg#23438): Identified root cause—batch pagination of 100 items was resource-intensive. Switching to 16,384-item limit via `/blockchain/box/unspent/byTokenId` endpoint resolved issue. SPF rich list (50k boxes) still exceeds Vercel 10-second constraint.

- **Q** (@Flying Pig, msg#23426-23432): What is the maximum safe batch limit for byTokenId queries?
  **A** (@qx(), msg#23437): Can use 16,384 for limit on this query at once.

- **Q** (@Pulsarz, msg#23442): Is there an API endpoint to retrieve the highest indexed transaction/box global index number?
  **A**: Not answered in segment.

- **Q** (implicit, msg#23451): Why do conflicting transactions both attempt to spend the same input?
  **A** (@Pulsarz, msg#23452-23453): Box already spent; transaction becomes invalid. Contract-enforced fixed fees can be won by reducing transaction size to improve fee-per-byte ratio.

---

## Links Shared

- `http://213.239.193.208:9053/blockchain/box/unspent/byTokenId/9a06d9e545a41fd51eeffc5e20d818073bf820c635e2a9d922269913e0de369d?offset=0&limit=100` — Example byTokenId endpoint query with pagination; demonstrates load balancing & performance testing context. [@Flying Pig, msg#23426]

---

## Unresolved Questions

- Can peer-to-peer encrypted register-based messaging be implemented with address-owner decryption? Implementation feasibility and wallet integration requirements not addressed. [@HQΣr, msg#23333]

- Is there an API method to retrieve the highest global index for transactions/boxes? [@Pulsarz, msg#23442]

- Why does qx()'s node (128.253.41.49:9053) underperform relative to node 213 despite faster single-hit queries? Potential server spec/load variance suspected but not confirmed. [@Flying Pig, msg#23417, msg#23422]

- SPF rich list (50k boxes) cannot fit within Vercel's 10-second execution limit. Workaround status unclear. [@Flying Pig, msg#23438]

---

**Activity Level:** Low-to-moderate; 59 messages over 5 days, primarily technical troubleshooting and API optimization discussions. No protocol-level decisions or ecosystem announcements.