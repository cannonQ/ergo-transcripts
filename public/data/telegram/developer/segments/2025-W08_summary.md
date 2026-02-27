# Ergo Developer Chat Summary — 2025-W08

## Key Topics Discussed

- **Ergo 6.0 Protocol & Input Blocks**: kushti conducting final audit and code cleaning for 6.0 codebase. Input blocks work in progress, specifically addressing out-of-order blocks and fork resolution mechanisms.

- **Nautilus Wallet Redesign**: Main interface ported to new design system. Four medium-complexity components remain for dApp Connector. Recovery phrase support expanded (12–24 words). Beta release targeted for following week. Debate ongoing on feature priority: internationalization, headless wallet library (nautilus.ts), password caching vs. mobile build delay.

- **Dexy Gold Alpha UI**: ErgFi (Savonarola Labs) targeting end-of-week alpha release. Swap UI complete, history/mempool_server integration/design/ergopay work in progress.

- **Rosen Bridge Pre-Launch Testing**: Manual wallet testing phase underway before public site opening. Watcher V2 completed observationStatus and permitCheck services. Guard/Watcher/Rosen app design updates applied.

- **Sigmanauts Mining Pool Revamp**: ergominers.com back online (110 GH/s reported). Miner ID UI embedded into dashboard. Distributed 29.7 ERG weekly storage rent (demurrage). Fundraised 190 ERG for LLM-generated smart contract auditor fees; LLM trained on DRPO methodology.

- **NodeView.xyz Expansion**: Added popups for Spectrum DEX swaps, SigmaUSD swaps, and Rosen Bridge events. Improved box query efficiency for price chart. Node connection timeout handling added.

- **Node Configuration & Sync Issues**: Discussion around UTXO set database corruption recovery. Node name configuration required placement under `scorex.network.nodeName` bracket (not `scorex.restApi.nodeName`). Testnet sync issues resolved via peer bouncing (74.69.128.24:9022 producing blocks reliably; CH at 1623891).

- **dApp Architecture & Mempool Access**: Discussion on centralization risks of traditional explorer-backed dApps. Proposal for lightweight mempool_server socket abstraction layer (stateless, Elixir-based) allowing dApps to query node directly without introducing centralization. Can run on local node for offline capability.

---

## Important Decisions or Announcements

- [@kushti, msg#33053, 2025-02-17]: Weekly Ergo Developers chat scheduled for Wed, Feb 19th, 1PM UTC. Focus on financial contracts feedback, 6.0 soft-fork, input/ordering blocks EIP, L2 and research topics.

- [@kushti, msg#33066, 2025-02-19]: ERG/USD oracle pool updated; update script now allows migration to v2.

- [@Armeanio, msg#33048, 2025-02-17]: Clarified node naming is not his (addressing speculation).

- [@Nautilus/arobsn, msg#33071 & 33085, 2025-02-19]: Recovery phrase backup verification will be optional feature in future release; internationalization support will be evaluated post-redesign beta.

- [@Marc the Shark (Sigmanauts), msg#33094, 2025-02-19]: Sigmanauts pool distributed largest weekly storage rent collection (29.7 ERG). Miner ID UI rework in progress. Pool hash 110 GH/s. LLM training completed for smart contract generation; UI built for local model execution.

- [@cannon_q, msg#33127, 2025-02-21]: Ergo Bounties snapshot: 99 open issues, 35,017.73 ERG total bounties. 0 cleared this week, 3 claimed, 1 submitted for review. Notable: Keystone Wallet Integration (3,000 ERG), Fleet SDK Tutorials (775 SigUSD).

---

## Technical Q&A Worth Preserving

- **Q** (@Aco Šmrkas, msg#33035): Node /info endpoint returns incorrect version number ("ergo-mainnet-5.1.0" instead of deployed 5.1.2); `scorex.restApi.nodeName` param ineffective.
  **A** (@Glasgow, msg#33038): Correct parameter is `scorex.network.nodeName` under network configuration bracket, not restApi section. See: https://docs.ergoplatform.com/node/conf/conf-scorex/#network-configuration

- **Q** (@Aco Šmrkas, msg#33033): UTXO set db corruption ("readers not initialized") during node initialization.
  **A** (@kushti, msg#33052): Identified as UTXO set database corruption; resolved by copying .ergo directory from stable system. Resultant RAM usage ~620 MB.

- **Q** (@novamon_25735, msg#33090): Should issue #1318 be fixed with tests added to prevent regression?
  **A** (@novamon_25735): Yes, tests should verify issue, pinpoint problem, and maintain watch on fix.

- **Q** (@jozinek, msg#33092): Best practice for getting attention on PRs in scorex-util and scrypto when GitHub notifications unreliable?
  **A** (@Glasgow, msg#33093): Don't hesitate to tag relevant developers; GitHub notifications are poor, direct Telegram/Discord mention more effective.

- **Q** (@Luivatra, msg#33112): Should dApps normalize ability to choose own node instead of relying on centralized explorers?
  **A** (@c8e4d2a, msg#33113–33124): Direct node queries lead to poor dApp experience. Propose lightweight stateless mempool_server socket abstraction (open source, runs on local node); dApp then queries socket, not node directly. Allows offline local execution if website goes down: "open source + works with local node → dapp; closed source → website."

---

## Links Shared

- [https://docs.ergoplatform.com/node/conf/conf-scorex/#network-configuration]: Scorex network configuration documentation for node naming.

- [https://github.com/ErgoDevs/Ergo-Bounties]: Ergo Bounties GitHub tracking open issues and bounty pool (35,017.73 ERG total, Feb 21).

- [https://github.com/savonarolalabs/mempool_server]: c8e4d2a's lightweight mempool server abstraction for dApp socket-based node queries.

- [https://ergfi.xyz/]: ErgFi (Savonarola Labs) — Dexy Gold UI in development; open-source dApp running on mempool_server.

- [https://vxtwitter.com/chepurnoy/status/1892615394654855244]: kushti's post (content not in chat transcription, link only).

- [https://x.com/HQ3r_erg/status/1893332347010871506]: HQ3r announcement on mempool live socket integration with Ergo Explorer Addressbook (allows tracking oracle feeds, DEX swaps, treasury movements, Rosen Bridge events, etc.).

- [GitHub PRs pending review]:
  - https://github.com/ScorexFoundation/scorex-util/pull/31
  - https://github.com/input-output-hk/scrypto/pull/112
  - https://github.com/ScorexFoundation/scorex-util/pull/32
  - https://github.com/ergoplatform/sigmastate-interpreter/pull/789
  - https://github.com/ScorexFoundation/debox/pull/6 (v0.11.0 release candidate)

---

## Unresolved Questions

- **Nautilus Feature Prioritization** (@arobsn, msg#33074–33077): How much delay is acceptable for mobile build to add multi-recipient transactions, origin address selection, private key import, and extended mnemonic support? Trade-off between feature completeness and market readiness acknowledged but no decision finalized.

- **Box Selection UI Priority** (@Flying Pig, msg#33098 vs. @cannon_q, msg#33075): Debate on whether advanced wallet features (box selection) should be backlog priority vs. mobile-first UX copying Solana/Ethereum ecosystem wallets. Consensus leaning toward mobile usability over power-user features, but unresolved.

- **Internationalization Implementation** (@c8e4d2a, msg#33081–33088): Whether i18n support in Nautilus requires refactor. arobsn initially deemed it "non-trivial," deferred post-beta; exact scope and timeline not committed.

- **dApp Architecture Long-Term** (@Pulsarz, msg#33117–33119): Whether socket abstraction layer introduces new centralization risks (vs. centralized explorer). Partially addressed (can self-host mempool_server), but tension between website convenience and decentralization not fully resolved.

- **Input Blocks Implementation** (@kushti, msg#33065): Fork resolution and out-of-order handling still WIP; no completion timeline provided for 6.0 soft-fork.