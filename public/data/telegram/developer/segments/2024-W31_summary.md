---
title: "Ergo Developer Chat — 2024-W31"
date_start: "2024-07-29"
date_end: "2024-08-04"
type: telegram_weekly
channel: developer
week: "2024-W31"
source: telegram
message_count: 0
categories: [technical, bridges, defi, wallet]
key_terms: [sigma-rust, "PR#758", release, 5.0.22, 5.0.23, svelte, sveltekit, vite, wasm, react, frontend, rosen-bridge, bounty, user interface, community, sigma 6.0, sigmastate-interpreter, protocol, "PR#972", "PR#968"]
---
# Ergo Developer Chat Summary — 2024-W31

## Key Topics Discussed

- **Sigma 6.0 Release Pipeline**: Multiple PRs under review (#972, #968, #965, #1008, #962) with focus on finalizing language features and documentation. EIP-50 draft updated with new PR statuses.

- **Sub-blocks Implementation**: Core protocol R&D moving beyond playground into production architecture, redefining basic algorithms and network messages. Contributors needed for testing and integration.

- **Mempool API & Query Patterns**: Discussion of efficient mempool tracking strategies, including transaction ordering (sorted by inclusion priority, not insertion order), offset/limit pagination limitations, and potential new endpoints for differential queries.

- **Frontend Framework Choices**: Svelte vs. React debate with technical breakdown: Svelte's compiler-based approach vs. React's framework-based structure. Comparison to other libraries (Vue.js) mentioned.

- **Nautilus Wallet Refactoring**: v0.13.0-beta.1 released with substantial performance gains (~40% memory reduction, ~60% faster loading). Performance profiling: peak memory down from 19.1MB to 10.7MB, load time from 511ms to 193ms.

- **ChainCash Development**: Server code review and API implementation in progress with @dusek_.

- **Dexy LP Operations**: LP mint deployed, LP redeem under review for deployment.

- **Gluon Buyback Testing**: Testing buyback action against deployed mainnet contract.

- **Paideia Contract Deployment**: New contract setup with users interacting directly with Paideia UTXOs (instead of proxy). Issue found in sigma-rust when signing with Nautilus, now fixed but pending deployment to Nautilus.

- **Crux Finance Token Filtering**: Fixed token filter endpoint applying paging incorrectly.

- **Rosen Bridge Updates**: Decimals drop refactor across watcher, scanner, chains, guard-service packages; updated assets API and UI logic; notification support for health check in code review.

- **Crystal Pool Mempool Monitoring**: Replaced problematic ZMQ setup with custom TCP connection via forked `ergo-node-tcppub`; working on deposit optimization.

- **Fleet SDK & Examples**: PR for file separation of contracts and tests (#2).

## Important Decisions or Announcements

- [@kushti, msg#29060, 2024-07-29]: Sigma 6.0 PRs approved; asking if release is ready pending mgpai testing confirmation.

- [@kushti, msg#29091-29092, 2024-07-31]: Weekly Ergo Developers chat held; protocol R&D updates shared including sub-blocks work and Sigma 6.0 finalization.

- [@kushti, msg#29106, 2024-07-31]: Calling for contributors to sub-blocks implementation; issues with bounties will be posted.

- [@arobsn, msg#29163, 2024-08-02]: Nautilus Abyss v0.13.0-beta.1 released for community dApp testing before main release.

- [@kushti, msg#29178, 2024-08-03]: Ergo protocol reference client 5.0.22 released.

- [@kushti, msg#29156, 2024-08-02]: Call for contributors to Sigma 6.0 (tests, DevNet testing with transactions) and sub-blocks work; bounties to be announced.

## Technical Q&A Worth Preserving

- **Q** (@mgpai, msg#29068): Any issues with Ergo development on Svelte?
  **A** (@c8, msg#29070): No issues but need to adjust config for WASM. Provided complete `vite.config.ts` example showing `vite-plugin-wasm`, `optimizeDeps` configuration for `ergo-lib-wasm-browser`, and `target: 'esnext'` requirement for WASM build. Noted that SvelteKit uses Vite instead of webpack.

- **Q** (@c8, msg#29095): Any plan to add socket subscription for new blocks, reorgs, sub-blocks, mempool events to the node?
  **A** (@kushti, msg#29096, 29099): No concrete plan yet. Suggested external wrapper approach: polling `/info` regularly and detecting changes via mempool count/blocks info, then calling API methods. Alternative: use p2p connections but harder to maintain and p2p behavior may change.

- **Q** (@c8, msg#29105): How do I get transaction count in the mempool?
  **A** (@kushti, msg#29107): `"unconfirmedCount": 7` field in `/info` endpoint response.

- **Q** (@c8, msg#29109, 29111, 29112): Does mempool transaction ordering guarantee reliable offset pagination for tracking new transactions? Are transactions ordered by insertion time or fee?
  **A** (@kushti, msg#29113-29114): Transactions sorted by inclusion priority (fee), not insertion order. Cannot rely on offset/limit for differential queries.

- **Q** (@c8, msg#29118): Good idea to add `GET /transactions/unconfirmed/ids` and `POST /transactions/unconfirmed/byTransactionIdList` endpoints?
  **A** (@kushti, msg#29121-29122): Yes, no big load. Custom sorting possible.

- **Q** (@arobsn, msg#29123): Can we have mempool-specific `lastSeenMessageTime` or `mempoolSnapshotHash` property in `/info` endpoint for efficient differential tracking?
  **A** (@kushti, msg#29127): Yes, can add last mempool update timestamp. Note: mempool transactions can be invalidated without p2p interactions in some cases.

- **Q** (@Luivatra, msg#29145): References on AVL+ being better than MPT?
  **A** (@kushti, msg#29146): https://eprint.iacr.org/2016/994.pdf, Section 4

- **Q** (@c8, msg#29176): Any plan to update outdated `ergo-lib-ios` for SwiftUI development? Is it deprecated?
  **A** (unresolved): No response recorded.

- **Q** (@anon_br, msg#29174): Why do dApp UI devs need to worry about wallet updates if there's a stable API?
  **A** (@anon_br, msg#29174-29175): dApp <> wallet bridge is specially hard to test. Better to give dApps time before release to avoid regressions (reference to past Yoroi issues).

## Links Shared

- [https://github.com/ergoplatform/sigma-rust/pull/758]: Sigma-rust PR under review by kushti.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/972, #968, #965, #1008, #962]: Sigma 6.0 finalization PRs under review.

- [https://github.com/rosen-bridge/ui/issues]: Rosen Bridge UI bounty program for community involvement.

- [https://learn.svelte.dev/tutorial/your-first-component]: Interactive Svelte tutorials (Introduction, Reactivity, Stores).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/965]: PR requiring review from morphic (ergomorphic).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1008]: Additional Sigma 6.0 PR for review.

- [https://github.com/Satergo/Ergonnection]: Ergonnection wrapper library for external p2p message broadcasting (service wrapping ergonnection-1.0.0.jar).

- [https://github.com/fleet-sdk/fleet-by-example/pull/2]: Fleet SDK file separation of contracts and tests.

- [https://github.com/cruxfinance/ergo-node-zmqpub]: Original ZMQ pub library forked by luivatra for Crystal Pool.

- [https://github.com/SavonarolaLabs/ergo-node-tcppub]: Custom TCP connection fork of ergo-node-zmqpub for mempool monitoring.

- [https://github.com/orgs/nautls/projects/1/views/1]: Nautilus GitHub project tracking mempool chaining support progress.

- [https://github.com/ergoplatform/ergo/issues/2174]: Issue opened by arobsn regarding mempool timestamp tracking for efficient differential queries.

- [https://api-testnet.ergoplatform.com/]: Testnet Explorer API (reported down with 404/500 errors).

- [https://github.com/ergoplatform/ergo/pull/2176]: OpenAPI YAML fixes for description issues.

- [https://eprint.iacr.org/2016/994.pdf]: Academic reference on AVL+ vs. MPT (Section 4).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/938]: Merged PR into 6.0.0 candidate branch.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/995]: Sub-constant substitution test with >5 elements.

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.22]: Ergo protocol reference client 5.0.22 release.

- [https://chromewebstore.google.com/detail/nautilus-abyss/moaohjebjfiodfiegjnjkbnalepemcpf]: Nautilus Abyss v0.13.0-beta.1 Chrome Web Store link.

- [https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-ios]: Ergo-lib-iOS bindings repository (outdated/deprecation status unclear).

## Unresolved Questions

- **RocksDB Status**: @mgpai asked for RocksDB rollout status (msg#29139-29140) but no response recorded. @kushti acknowledged planning related to LSM/B+ tree performance optimization (msg#29149) but no concrete timeline.

- **TestNet Explorer API Downtime**: @deathgripson reported testnet API returning 404/500 errors (msg#29136-29137); asked if anyone else running testnet explorer API but no resolution provided.

- **Ergo-lib-iOS Deprecation**: @c8 asked if ergo-lib-iOS is deprecated or planned for update (msg#29176-29177); no response recorded.

- **Plugin System for Node**: @kushti mentioned discussions about a plugin system for the node (2019) but noted "dev vector is different" (msg#29153); architectural direction unclear.

- **Testnet-Mainnet Sidechaining**: @kushti proposed sidechaining between testnet and mainnet for token appreciation in DEX LPs (msg#29158) but marked as discussion item, not confirmed plan.