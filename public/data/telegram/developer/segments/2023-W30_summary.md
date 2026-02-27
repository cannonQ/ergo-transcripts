# Ergo Developer Chat — 2023-W30
## Summary (2023-07-24 to 2023-08-06)

---

## Key Topics Discussed

- **Ergonnection P2P Library Development**: Aberg released a peer-to-peer node communication library with support for block header objects. Testing revealed issues with Blake2b256 dependency management and connection timeouts after 10 minutes of inactivity, both addressed through modifier request messages and reconnection logic.

- **Node Mempool and Transaction Behavior**: Aco raised concerns about transactions being dropped from mempool, particularly during rapid redemptions on ErgoPad. Root cause identified as application-level timing issue rather than protocol flaw — nodes don't receive previous transactions before new ones are submitted with already-spent inputs.

- **NIPoPoWs and Full Block Pruning**: kushti clarified that NIPoPoWs only make sense with full block pruning (e.g., utxoBootstrap), and noted testnet genesis block ID can be fixed in subsequent releases.

- **Token Registry Centralization**: Discussion of EIP-0021 token registry governance; marked as centralized, with nemo reportedly working on alternative decentralized approaches.

- **Autolykos Mining Optimization**: Extended debate on whether Autolykos memory bandwidth requirements could be increased to reduce core power usage while maintaining ASIC resistance. Consensus that any algorithm change requires hard fork consideration and miner/developer alignment; no decision made.

- **Satergo v1.6.0 Release**: Windows installer, ErgoPay dApp/DEX support (e.g., Spectrum DEX swaps), fiat conversions via CoinGecko, improved transaction history, and new language translations (Indonesian, Malaysian).

- **Erg Explorer Updates**: Financial data for tokens, 24h volume/gain/loss tracking, transaction confirmation notifications, Nautilus wallet integration, and planned telegram bots for alerts.

- **Ergasia Job Board**: Decentralized job board in beta (WordPress frontend temporarily), with full production frontend in Next.js, backend/database under active development. Seeking ErgoScript developers for smart contract work.

- **GreasyCEX Mission Launch Preparation**: Near-completion of Mission #1 paper, website, NFT minting, and mission stage infrastructure. AMA planned via Twitter Spaces before launch.

---

## Important Decisions or Announcements

- [@Aberg Satergo dev, msg#15808, 2023-07-26]: Ergonnection added support for block header objects; seeking external testing before Maven Central publication.

- [@Aberg Satergo dev, msg#15948, 2023-08-02]: **Satergo v1.6.0 released** — DeFi/dApp support via ErgoPay, Windows installer, fiat currency conversions, improved node logging, Indonesian/Malaysian translations.

- [@Unknown, msg#15935, 2023-08-02]: Ergasia decentralized job board beta launching this week (centralized for initial UX learning), full decentralized version in development.

- [@Austen Milbarge // GreasyCEX, msg#15974, 2023-08-01]: GreasyCEX Mission #1 paper finalized; mission launch expected 5–7 days post-release. Twitter Spaces AMA scheduled to discuss mission details and gather community feedback.

- [@Aco Šmrkas, msg#15921, 2023-08-02]: Erg Explorer development update published with roadmap for dedicated ERG info page and community guides.

---

## Technical Q&A Worth Preserving

- **Q** (@Luivatra, msg#15748): `java.lang.NoClassDefFoundError: org/bouncycastle/jcajce/provider/digest/Blake2b$Blake2b256` when using Ergonnection  
  **A** (@Aberg Satergo dev, msg#15750): JAR must include transitive dependencies (bouncycastle, sigmastate). Solutions: (1) copy dependency declarations from ergonnection into your project; (2) publish to Maven Local with `maven-publish` plugin; (3) use `shadow` plugin to build fat JAR with dependencies.

- **Q** (@Luivatra, msg#15767): Socket connection closes after ~10 minutes of inactivity  
  **A** (@Aberg Satergo dev, msg#15771–15772): Requesting modifiers solves timeouts. However, peer eviction may occur unpredictably—implement reconnection logic. Optional: check if node settings allow permanent peer connections.

- **Q** (@Luivatra, msg#15781): Frequent "incorrect magic bytes" errors when connecting through own node  
  **A** (@Aberg Satergo dev, msg#15785–15786, @kushti khushi, msg#15790): Unless client explicitly connects to random peers, your node's peer connections are independent. Seen 0–2 times per ergonodes.net scan; likely broken nodes or outdated software. Root cause requires message byte inspection.

- **Q** (@kii, msg#15859): Code examples for serialization in Ergonnection?  
  **A** (@Aberg Satergo dev, msg#15860): `SigmaSerializer.startReader(bytebuffer, offset)`

- **Q** (@CW, msg#15889): Request for node dashboard/panel stats (UTXO snapshots, NIPoPoWs, state size)  
  **A** (@HQΣr | Wont Dm, msg#16017): Aberg's API not yet counting Lite nodes in stats.

- **Q** (@kushti khushi, msg#15996): Should warning with extra confirmation replace disabled restore feature (PR #1417)?  
  **A**: Implied open for community feedback; implementation pending.

- **Q** (@Aco Šmrkas, msg#15913): Why do transactions disappear from mempool? Never happens on other blockchains.  
  **A** (@Luivatra, msg#15917–15918): Not a chain issue—application-level. When rapid transactions submitted before previous ones reach the node, subsequent TXs use already-spent inputs and fail. ErgoPad code is outdated; needs update.

- **Q** (@Pulsarz, msg#16071 et seq.): Can Autolykos efficiency gains reduce power consumption while maintaining ASIC resistance?  
  **A** (@Pulsarz, msg#16072–16114): Algorithm efficiency alone doesn't improve per-hash profitability (difficulty adjusts). Only solution: increase memory bandwidth dependency to reduce core power. Hard fork required; consensus that miner/developer collaboration is necessary but sometimes lacking. No current ASICs justify change; decision deferred to miners.

---

## Links Shared

- [https://github.com/Satergo/Ergonnection](https://github.com/Satergo/Ergonnection): P2P node communication library (Java) with block header support.

- [https://github.com/AcoSmrkas/ErgExplorer](https://github.com/AcoSmrkas/ErgExplorer): Erg Explorer source code.

- [https://medium.com/@ergexplorer/erg-explorer-development-update-bots-finance-fe3b84b962db](https://medium.com/@ergexplorer/erg-explorer-development-update-bots-finance-fe3b84b962db): Erg Explorer development update (financial data, token tracking, notifications, bot integration).

- [https://github.com/ergoplatform/eips/blob/master/eip-0021.md](https://github.com/ergoplatform/eips/blob/master/eip-0021.md): EIP-0021 token registry specification (centralized model; nemo developing alternative).

- [https://github.com/ergoplatform/ergo/issues/1407](https://github.com/ergoplatform/ergo/issues/1407): Issue tracking restore feature pending decision on warning + confirmation vs. full disable.

- [https://github.com/ergoplatform/ergo/pull/1417](https://github.com/ergoplatform/ergo/pull/1417): PR disabling restore (subject of kushti's decision question).

- [https://docs.ergoplatform.com/eco/hodlcoin/](https://docs.ergoplatform.com/eco/hodlcoin/): HODLcoin documentation (user requested more accessible guides/paper).

- [ergonodes.net](https://ergonodes.net): Node statistics dashboard (reachability, peer count tracking).

---

## Unresolved Questions

- **Magic byte errors in Ergonnection**: @Luivatra encountering frequent `[31, -4, 74, -43]` vs `[1, 0, 2, 4]` mismatches; kushti requested message byte details for diagnosis (msg#15790). Root cause unconfirmed; possibly outdated node software.

- **Node restore feature**: kushti proposing warning + confirmation flow instead of full disable (PR #1417). Community feedback or final decision not captured.

- **Autolykos memory optimization**: Whether increasing bandwidth dependency reduces core power while preserving ASIC resistance remains open design question. Pulsarz noted technical feasibility but raised hard fork cost and miner coordination concerns (msg#16071–16114). No roadmap commitment.

- **Token registry decentralization**: EIP-0021 marked as centralized; nemo developing alternative, but no timeline or spec shared (msg#15898).

- **HODLcoin documentation**: User unable to locate detailed project paper or user-friendly guides; pinned messages in hodlcoin chat suggested but not confirmed accessible (msg#16199–16207).

---

## Activity Summary

**17 participants** across 140 messages over 14 days. Heavy focus on Ergonnection library testing/feedback, mempool transaction behavior (resolved as app-level issue), mining algorithm optimization debate (unresolved, requires consensus), and ecosystem releases (Satergo, Erg Explorer, Ergasia, GreasyCEX). One troll (apfelschmaus) disrupted final day; minimal off-topic noise otherwise.