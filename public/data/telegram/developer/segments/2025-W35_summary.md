---
title: "Ergo Developer Chat — 2025-W35"
date_start: "2025-08-25"
date_end: "2025-08-31"
type: telegram_weekly
channel: developer
week: "2025-W35"
source: telegram
message_count: 81
categories: [technical, bridges, wallet, ecosystem, defi, mining]
key_terms: [candidate regeneration, testing, "PR#2237", blockchain validation, 6.0 soft-fork, ordering blocks, sub-blocks, p2p layer, devnet testing, Sigma-SDK, sigmastate-interpreter, "PR#1061", "PR#1076", sub-blocks support, node sync, peer connection, NAT, blacklisting, connection reset, data folder]
---
# Ergo Developer Chat Summary — 2025-W35
**Period:** 2025-08-25 to 2025-08-31  
**Messages:** 81 | **Participants:** 7

---

## Key Topics Discussed

- **Sub-blocks development**: kushti working on p2p layer rework and devnet testing with Patato. Announced redeployment planned for Monday due to significant p2p layer changes. Initial testing showed improved syncing performance after fixes to ordering block downloading.

- **Sigma-SDK improvements**: PR #1061 merged into 6.0.3 candidate; PR #973 updated and under review. PR #1069 proposed as necessary for sub-blocks support. Next phase: polishing and proposal review.

- **Block candidate regeneration**: New test implemented extending existing test coverage to verify solution acceptance for previous candidates (PR #2237).

- **Peer synchronization issues**: Devnet node (213.239.193.208:9058) experienced multiple disconnection/blacklisting events related to invalid modifiers. Root cause analysis ongoing; unhandled exception caused database closure while node continued running.

- **Ergo AppKit DevNet compatibility**: AppKit enforces mainnet/testnet validation; DevNet nodes report as `devnet` causing type mismatch errors. Workaround discussed; fix proposed for next devnet deployment.

- **Nautilus Wallet development**: Keystone hardware wallet integration revealed 161 transient CJS dependencies doubling bundle size; lazy loading strategies required. Mempool tracker and chain object models under development.

- **Rosen Bridge feature delivery**: Bitcoin Runes integration 4/6 MRs under review; wallet integration (5th MR) in progress. Guard-service undergoing testing with Rosenet; Ergo Multisig package integration identified major bugs (now fixed).

- **Lithos Protocol progress**: Off-chain fraud proof code ~75% complete for simple proofs; 15/~25 fraud proof contracts finished. Unit tests and complex contract handling ongoing. Stratum mining software disconnection bug fixed.

- **Website performance overhaul**: ergoplatform.org Desktop performance improved 36→96, Mobile 52→81. LCP reduced from 5.6s→0.8s (desktop), 2.7s→1.1s (mobile). Machine translation rollout and language switcher UX improvements completed.

- **ChainCash wallet design**: Draft discussion ongoing in dedicated Telegram group.

- **Git Circles**: BroEtiquette completed offchain app stub and secured main branch commits.

---

## Important Decisions or Announcements

- [@kushti, msg#35622, 2025-08-26]: Weekly Ergo Developers chat scheduled for Wed, Aug 27th at 1PM UTC. Call for financial contracts feedback and discussion of 6.0 protocol soft-fork, input/ordering blocks, sidechains, and L2 research.

- [@kushti, msg#35633, 2025-08-27]: 100 ERG bounty issued for GitHub issue #2238 (peer disconnection/blacklisting bug).

- [@kushti, msg#35620, 2025-08-26]: EXLE offering 5k ERG bounty for completion of ~75% finished Svelte dApp project with end-to-end testing verification (point of contact: haskell_plus).

- [@kushti, msg#35690, 2025-08-28]: Call for contributors to peer-to-peer economy/free banking projects following ErgoForum action call. GitCircles already underway with bro_etiket and wishyoubalance.

- [@kushti, msg#35702, 2025-08-29]: DevNet node will report as `testnet` instead of `devnet` in next deployment to resolve AppKit compatibility issues.

- [@kushti, msg#35712, 2025-08-30]: Micronetwork redeployment planned for Monday; significant p2p layer changes accumulated since last deployment.

---

## Technical Q&A Worth Preserving

- **Q** (@Patato, msg#35616): Updated to 6.0.1-269-34052511-SNAPSHOT but node appears at higher height yet claims sync. Should history be deleted?  
  **A** (@kushti, msg#35617): Give nodes some time to sync naturally; deletion not necessary.

- **Q** (@Patato, msg#35663): Should I restart or delete node history? Still shows 0 peers and decoupled from seed.  
  **A** (@kushti, msg#35665): Check `/peers/blacklisted` endpoint first to see if seed node is listed; likely blacklisted due to misbehavior penalty.

- **Q** (@Patato, msg#35695): Ergo AppKit doesn't support DevNet—throws `java.lang.IllegalArgumentException: Network type of NodeInfo does not match the given networkType - null/testnet` when connecting to DevNet node.  
  **A** (@Pulsarz, msg#35698): Try using TESTNET enum. [@kushti clarification, msg#35702]: Real issue is DevNet node reports as `devnet` while AppKit only accepts mainnet/testnet; will address in next DevNet deployment.

- **Q** (@Patato, msg#35695): Need stress test scripts for DevNet transaction generation.  
  **A** (@kushti, msg#35705): Provided shell scripts using wallet REST API (`/wallet/payment/send`); simpler and more practical than AppKit approach. Example: curl POST with locked wallet unlock first, then loop send.sh with 1-second intervals.

- **Q** (@Patato, msg#35707): DevNet node stuck at height 4963; header sync at 100% but full blocks not syncing. Best block ID matches peer.  
  **A** (@kushti, msg#35708-#35709): Unhandled exception caused database closure; after restart node mining resumed and sync successful.

- **Q** (@Patato, msg#35711): Lost peer connection after transaction testing via panel and mempool monitoring via REST API. Logs show "Connection reset by peer" after reconnection attempt.  
  **A** (@kushti, msg#35712): Too many p2p layer changes since last deployment; simpler to redeploy micronetwork Monday and re-test. P2p message flood reduction underway (msg#35703).

---

## Links Shared

- [GitHub PR #2237](https://github.com/ergoplatform/ergo/pull/2237): Block candidate regeneration test extending coverage for previous candidate solution acceptance
- [GitHub PR #1061](https://github.com/ergoplatform/sigmastate-interpreter/pull/1061): Sigma-SDK approved and merged into 6.0.3 candidate
- [GitHub PR #1076](https://github.com/ergoplatform/sigmastate-interpreter/pull/1076): Sigma-SDK 6.0.3 candidate update
- [GitHub PR #973](https://github.com/ergoplatform/sigmastate-interpreter/pull/973): Sigma-SDK update (under review)
- [GitHub PR #1069](https://github.com/ergoplatform/sigmastate-interpreter/pull/1069): Sub-blocks support (under review)
- [GitHub Issue #2238](https://github.com/ergoplatform/ergo/issues/2238): Peer blacklisting/disconnection bug (100 ERG bounty)
- [DIY Hardware Wallet (EPMW)](https://github.com/epmw/epmw): DIY Ergo hardware wallet project; nitram147 discussing status with OGs
- [Sigmaverse Update Post](https://www.ergoforum.org/t/sigmaverse-update/5222): Josemi published Sigmaverse update; Cyberverse logic updates planned
- [Call for Action: P2P Economies](https://www.ergoforum.org/t/call-for-action-building-peer-to-peer-economies-and-free-banking-on-ergo/5221): Community call for contributors to peer-to-peer banking projects
- [ChainCash Discussion Group](https://t.me/chaincashtalks): Telegram group for wallet design draft collaboration
- [Ergo Node Configuration (DevNet)](https://gist.github.com/kushti/8f0753c454cab46244dbaee3b4d842c8): Example ergo.conf for DevNet testing
- [Ergo Docs - TestNet Setup](https://docs.ergoplatform.com/node/testnet/testnet-full/): Minimal ergo.conf reference for DevNet/TestNet
- [Termbin Log #xwro](https://termbin.com/xwro): Log excerpt showing peer blacklisting sequence
- [Termbin Log #9wuw](https://termbin.com/9wuw): Node sync failure logs with minimal ergo.conf

---

## Unresolved Questions

- **P2P peer blacklisting root cause**: Modifier `aaeb3cfc...` marked permanently invalid; investigation ongoing. Connection reset and blacklist cycles between DevNet and Patato's node persist across multiple sync attempts and network switching (including mobile hotspot). [@kushti, msg#35694, msg#35712]

- **DevNet/AppKit integration**: DevNet network type mismatch requires either node-side fix (report as testnet) or AppKit-side validation relaxation. Deferred to next DevNet deployment. Issue creation in AppKit repo requested [@kushti, msg#35716].

- **Micronetwork redeployment scope**: Details of p2p layer changes and updated configuration TBD pending Monday redeployment [@kushti, msg#35712].

- **Sigmaverse update strategy**: Josemi noted uncertainty whether to reuse existing Sigmaverse codebase or adopt MkDocs-style tooling for reputation system integration (msg#35651). Implementation plan pending.

- **Lithos Protocol fraud proofs**: ~10 remaining complex fraud proof contracts and rollup contract off-chain code; delivery timeline unclear [@Michael, msg#35657].