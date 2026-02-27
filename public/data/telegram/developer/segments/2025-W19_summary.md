# Ergo Developer Chat Summary — 2025-W19

## Key Topics Discussed

- **Ergo Protocol Reference Client v5.1.3 & RocksDB Issues**: Multiple node operators (Pulsarz, Pgr456) reported SIGSEGV crashes and database corruption errors after upgrading from v5.1.1 to v5.1.3. The issue appears linked to RocksDB update from 8.x to 9.x, though kushti could not reproduce it locally. Clean Docker deployments worked on kushti's side but failed for others, suggesting environment-specific dependencies (kernel versions, JRE versions).

- **Sub-blocks Development**: kushti reported fixed candidate generation with proper transaction distribution and AVL+ tree recalculation, now focusing on efficient announcement of ordering blocks to minimize broadcast traffic of previously unsent transactions.

- **Dexy Protocol**: Contract review and phased mainnet deployment underway.

- **Nautilus v1.3.0**: Released with internationalization support and automatic llms.txt file generation for documentation.

- **Fleet SDK Enhancement**: Box and Transaction deserialization support added; discussion ongoing about implementing ErgoScript-oriented AVL tree support for advanced use cases (e.g., limit orderbook design).

- **Rosen Bridge Expansion**: Active development on Runes address support, Doge network integration (partial and combined networks to bypass rate limits), and Doge-specific tests. Bitcoin multisig design finalized, implementation pending. UI/Guard/Watcher App improvements include theme refinement and error reporting enhancements.

- **Celaut P2P Architecture**: Josemi detailed gRPC-based transport with custom protocol for efficient service transfer, manual peer introduction via `connect ip:port`, and planned on-chain reputation proofs for autonomous peer discovery.

- **Keystone Hardware Wallet Integration**: Pgr456 finalized secp256k1 dependency switch (from k256) and implemented custom ErgoTree serialization scheme to keep tree unparsed during device transfer. All Keystone team requests submitted for review.

- **Nostr for Wallet ↔ dApp Communication**: anon_br investigating Nostr as transport layer (forking relay for Ergo-specific events like `connect`, `get_utxos`, `sign_tx`) with PoW spam protection. Parallel to EIP-12 but adapted for Ergo and avoiding Lightning-specific constraints.

- **AVL Tree & Order Book Design Trade-offs**: c8 raised tension between one-UTXO-one-order (true P2P, parallel execution) vs. centralized control with off-chain AVL trees. Discussion touched on Crystal Pools multisig design (time-limited, preventing double spends but fragmenting liquidity) and atomic exchange contracts (GreenHat's approach with per-token price precision).

- **Node Indexing & Explorer Reliability**: Flying Pig raised repeated concern about dApps over-reliance on Explorer APIs (sigmaspace GraphQL, ergoplatform) rather than indexed nodes. Issue: no user-friendly bug reporting system; developers lack visibility into failures occurring in Telegram/Discord chats. Indexed nodes have their own issues (current investigation into missing extra indices).

- **Missing Token Index Bug**: Colby Cellador reported two token IDs missing from multiple indexed nodes and explorers but present in ergoplatform API, suggesting indexer inconsistency. kushti flagged "Unknown box used as input" and "Skipping block" patterns as alarming.

## Important Decisions or Announcements

- [@kushti, msg#34203, 2025-05-06]: **Ergo Protocol Reference Client v5.0.26 released** — https://github.com/ergoplatform/ergo/releases/tag/v5.0.26
- [@kushti, msg#34211, 2025-05-06]: **Ergo Protocol Reference Client v5.1.3 released** — https://github.com/ergoplatform/ergo/releases/tag/v5.1.3 (with reported RocksDB-related issues)
- [@kushti, msg#34204, 2025-05-06]: **Weekly Ergo Developers chat scheduled** for Wed, May 7th, 1PM UTC; focus on 6.0 protocol soft-fork, input/ordering blocks EIP, Sigmachains, L2, and financial contract feedback
- [@kushti, msg#34202, 2025-05-06]: **sigma-rust PR #823 approved** by kushti
- [@kushti, msg#34261, 2025-05-07]: **sigma-rust PR #820 approved** by dusek
- [@kushti, msg#34308, 2025-05-09]: **sigma-rust PR #826 approved** by dusek (with review notes pending)
- [@Pgr456, msg#34273, 2025-05-08]: **Fixed sigmaspace node** that was unresponsive; sigmaspace confirmed >99% uptime historically, now Nautilus default
- [@Pgr456, msg#34260, 2025-05-07]: **Keystone integration complete** — all requested changes finalized and submitted for review

## Technical Q&A Worth Preserving

- **Q** (@Michael, msg#34205): Is it possible to integrate Ergo to WalletConnect?
  **A** (@Michael, msg#34210): No equivalent standard currently; most dApps use custom ErgoPayserver. A unified WalletConnect-style standard would reduce dev friction.

- **Q** (@Pulsarz, msg#34212): To rebuild extra indexes, do I delete the extra folder or the index?
  **A** (@Flying Pig, msg#34213): It's the extra folder only.

- **Q** (@Pulsarz, msg#34214 onwards): Why does v5.1.3 crash with RocksDB SIGSEGV on fresh data?
  **A** (@kushti, msg#34228, msg#34230, msg#34254): JAR v5.1.3 works on 5.1.0 database and clean Docker states on kushti's kernel (6.11.0-25-generic). Issue likely environment-specific (JRE version, RocksDB native lib mismatch). Suggests newer RocksDB (10.x) or JRE versions may help; needs Docker build tweaks.

- **Q** (@Michael, msg#34248): Why do v5.1.1, v5.1.2, v5.1.3 still report "5.1.0" in node info?
  **A** (@kushti, msg#34255): All 5.1.x releases branch from single 5.1.0 base with no inter-version changes except master merges post-5.0.x. Version number reflects this.

- **Q** (@kb, msg#34270): Should Nautilus auto-switch GraphQL servers if one is down? Also, is sigmaspace more reliable than ergoplatform?
  **A** (@Pgr456, msg#34274): sigmaspace was/is more reliable (>99% uptime), now Nautilus default. However, reported downtime was actually the backing node, not GraphQL. Auto-detection would be nice but not yet implemented.

- **Q** (@Flying Pig, msg#34275): Why can't dApps use indexed nodes instead of relying on Explorer APIs?
  **A** (@kushti, msg#34279): They can in most cases. Explorer API was first solution for extra data not in basic indexes; many apps remain dependent. Indexed nodes have own issues (currently debugging missing extra indices).

- **Q** (@c8, msg#34263): Are there JavaScript options for ErgoScript-oriented AVL support today?
  **A** (@MGpai, msg#34267, msg#34268): Possible with bindings; done for Ergo Names in frontend. Fleet SDK would be ideal but not yet implemented.

- **Q** (@c8, msg#34266): How do I create AVL trees with custom data, add/remove, and interact with contracts handling proofs in JS?
  **A** (@MGpai, msg#34267): Possible with current bindings.

- **Q** (@Flying Pig, msg#34280): Why should dApps shift from Explorer to indexed nodes?
  **A** (@kushti, msg#34284): Reporting infrastructure is the blocker. Most issues are GraphQL server failures, not Explorer instances. End users avoid GitHub issues; many dApps lack proper support channels. Rosen Bridge's Discord ticket system is exception but cumbersome.

- **Q** (@kushti, msg#34242): How is P2P network done in Celaut?
  **A** (@Josemi, msg#34258): Uses gRPC with custom protocol for efficient service transfer (avoids re-sending parts already present). Peer introduction manual (`connect ip:port`). Planned: on-chain reputation proofs enable autonomous discovery (connect to nodes with reputation > x on startup).

- **Q** (@kushti, msg#34265): How could Nostr be used in wallet ↔ dApp communication?
  **A** (@anon_br, msg#34287): Fork Nostr relay for Ergo-specific events (connect, get_utxos, sign_tx, etc.). Wallets act as Nostr clients. Prevents spam via simple PoW schema. Inspired by NIP-47 (Lightning) but adapted for Ergo without Lightning constraints.

- **Q** (@iospore, msg#34294, msg#34298): How do AVL trees solve orderbook design? If tree is off-chain, who updates it? What's the benefit?
  **A** (@c8, msg#34297, msg#34301, msg#34302): AVL tree serves as off-chain list of all orders; tree hash stored on-chain, updates via proofs. Recreate + update order list by transaction history. One-UTXO-one-order enables parallel execution (not centralization); Crystal Pools example: all UTXOs multisigned, neither user nor "CEX" solo-transacts, prevents double spends. Time limits prevent fund freeze but create UX friction.

- **Q** (@iospore, msg#34306, msg#34307): How do GreenHat's atomic exchange contracts work? Risk of freeze?
  **A** (@iospore, msg#34307): Per-token price + per-token fee model. Anyone offering required price/fee claims it; no pool, no multisig, pure P2P chaos. Original precision limited to 1 nanoErg/token; can be made fractional. Node advances confirmed tx; potential for freeze unknown without multisig analysis.

- **Q** (@Colby Cellador, msg#34310): Why are two token IDs missing from indexed nodes but present in ergoplatform API?
  **A** (@kushti, msg#34311): Unknown; requires weekend investigation. Questions whether UTXO disappears or never indexed, and whether "Skipping block" warnings are blockchain reorg vs. indexer failure.

## Links Shared

- [https://www.ergoforum.org/t/basis-a-foundational-on-chain-reserve-approach-to-support-a-variety-of-offchain-protocols/5153]: Basis — kushti's foundational on-chain reserve contracts for supporting variety of off-chain protocols; developer reward tool in development
- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.26]: Ergo Protocol Reference Client v5.0.26 release
- [https://github.com/ergoplatform/ergo/releases/tag/v5.1.3]: Ergo Protocol Reference Client v5.1.3 release (RocksDB 9.x, reports of SIGSEGV on some environments)
- [https://walletconnect.network/]: WalletConnect — standard wallet integration protocol (EVM-focused; no Ergo equivalent yet)
- [https://github.com/Alesfatalis/sigma-rust-mini/pull/3]: Custom ErgoTree serialization for Keystone hardware wallet
- [https://github.com/ergoplatform/sigma-rust/pull/823]: sigma-rust PR #823 (approved)
- [https://github.com/ergoplatform/sigma-rust/pull/820]: sigma-rust PR #820 (approved)
- [https://github.com/ergoplatform/sigma-rust/pull/826]: sigma-rust PR #826 (approved with review notes)
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1062]: Rebase request toward develop (from jozinek)
- [https://github.com/ergoplatform/ergo/issues/2210]: Missing extra indices issue; Colby Cellador communicating with kushti
- [https://github.com/ergoplatform/ergo/pull/2212]: PR fixing missing extra indices (kushti asking for help)
- [https://github.com/fleet-sdk/fleet-by-example/pull/1]: Limit order examples using AVL trees (c8 reference)
- [https://api.ergoplatform.com/api/v1/boxes/unspent/byTokenId]: ergoplatform API (has token IDs missing from indexed nodes)
- [http://159.89.116.15:11088/blockchain/box/unspent/byTokenId/]: Indexed node endpoint (token IDs not found)
- [http://213.239.193.208:9053/blockchain/box/unspent/byTokenId/]: Indexed node endpoint (token IDs not found)
- [https://node.sigmaspace.io/blockchain/box/unspent/byTokenId/]: sigmaspace indexed node (token IDs not found)
- [https://node.ergopool.io/blockchain/box/byTokenId/]: ergopool indexed node (token IDs not found)

## Unresolved Questions

- **RocksDB SIGSEGV Crashes in v5.1.3**: Root cause unclear; affects some Docker environments but not others. Possible JRE/RocksDB native lib mismatch, kernel dependency, or eclipse-temurin base image. Pulsarz suggests testing RocksDB 10.x or alternate JRE. Status: kushti investigating over weekend.

- **Missing Token Index Bug**: Two token IDs present in ergoplatform API but absent from all tested indexed nodes (sigmaspace, ergopool, custom nodes). Question: Do UTXOs disappear from indexes, or were never indexed? Is "Skipping block" a reorg or indexer failure? Status: kushti flagged for investigation.

- **Extra Indices Corruption**: Colby Cellador and kushti working to reproduce deterministic bug via blackbox/whitebox testing. Logs show "Unknown box used as input" (UTXO not indexed) and "Skipping block" warnings. Status: In progress.

- **WalletConnect for Ergo**: No equivalent standard exists. Michael asking if integration is feasible. Trade-off: unified standard vs. app-specific ErgoPayserver. Status: Not discussed beyond naming the gap.

- **AVL Tree Orderbook UX**: c8 notes Crystal Pools' unresolved timelock transition issue: "seamless transition of timelock periods that keeps user safe AND doesn't disrupt real-time order flow." Status: Not finished due to liquidity fragmentation risk.

- **Atomic Exchange Contract Freeze Risk**: iospore unclear whether GreenHat's per-token-price model (no multisig, no pool) has fund freeze potential vs. one-UTXO-one-order. Status: Unresolved; requires deeper contract analysis.

- **Explorer API Reliability & Reporting**: Flying Pig raises every 6 months. Status quo: end users don't file GitHub issues, dApps lack support channels, developers unaware of failures. Rosen Bridge's Discord tickets noted as exception. Status: Acknowledged but no systematic solution proposed.

- **Nostr for Wallet Communication**: anon_br's Nostr relay fork for Ergo events early-stage idea. Open: PoW spam threshold tuning, event schema standardization, relay network topology. Status: "Will try to find time to implement."

- **AVL Tree Support in Fleet SDK**: anon_br committed to implementation. Open: API design for ErgoScript-oriented tree operations. Status: "Will try to find time."