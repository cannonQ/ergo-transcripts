---
title: "Ergo Developer Chat — 2026-W03"
date_start: "2026-01-12"
date_end: "2026-01-18"
type: telegram_weekly
channel: developer
week: "2026-W03"
source: telegram
message_count: 80
categories: [technical, governance, defi, nft, ecosystem, community]
key_terms: [rust-node, sync speed, rocksdb tuning, block syncing, performance, AutolykosV2, PoW validation, mining, storage rent, integer overflow, hardfork, scala implementation, u64, Basis, ChainCash, AVL+ proof, signature, redemption, note signature, release]
---
# Ergo Developer Chat Summary — 2026-W03
**Period:** 2026-01-12 to 2026-01-18  
**Participants:** 11  
**Message Range:** #37819–#37913

---

## Key Topics Discussed

- **Rust Node Implementation & Sync Performance**  
  Luivatra working on an Ergo Rust node with significant performance tuning; achieved 200k+ blocks synced in 15 minutes, though stability not yet guaranteed. RocksDB tuning prioritized disk-friendly indexing. Issue raised: u64 storage rent calculation differs from Scala reference implementation, risking hardfork-like divergences.

- **Sub-blocks (Input Blocks) API & DevNet Testing**  
  kushti added OpenAPI description for input block related API methods, deployed to devnet seed node. Testing ongoing with two mining peers; devnet experiencing issues under extreme settings; not yet ready for additional peer nodes.

- **Basis Server & ChainCash Development**  
  Moving note signature-by-tracker functionality to note layer; AVL+ proof generation, signatures, and redemption data preparation being tested and refined. Help needed on offchain server components.

- **Schnorr Signature Message Signing**  
  PR #2290 opened to implement Schnorr-signing a message with a pubkey from node wallet. Targeted for release 6.0.4.

- **Sidechains & Braid Framework**  
  kushti proposing sidechains development starting with Braid whitepaper generalization. Rust vs. Scala implementation choice pending; community feedback suggests Rust (easier Python/TypeScript integration).

- **Node Release Planning: 6.0.2 → 6.0.3 → 6.0.4**  
  Assembling 6.0.2 with multiple PRs including AppKit updates. PR #2244 under review. 6.0.3 and 6.0.4 roadmap already populated.

- **AI-Assisted Coding (Vibe-Coding) Discussion**  
  Community chat held Jan 15, 5pm UTC. Fitz D contributed thesis: vibe-coding makes execution cheap, shifting competitive moat to legitimacy, credible neutrality, and durable security incentives—path-dependent properties determined at launch (Ergo's no-ICO, no-premine, open PoW from block one cited as relevant design choice).

- **Testnet Sync & Explorer Infrastructure**  
  qx() resynced testnet node and explorer; currently synced and reading new blocks. Noted: 60 GB free space, two Docker panics in two days with lost logs. API timeout issues flagged for p2p and main explorer.

- **Cyberverse NFT/FT Viewer Tool**  
  cannon_q released cyberverse-viewer.vercel.app with real-time data for 12 collections (18,923 NFTs/FTs), wallet PKs, floor pricing across Ergo/Ronin/Cardano, and sales analytics. Historical sales from SkyHarbor and MewMart; open-sourcing planned after feedback window.

- **Game of Prompts (Algorithmic Trading Competition)**  
  Josemi finishing on-chain and off-chain contracts for Game of Prompts; planning first test competition with Snake game (minimal ERG entry), NFT prize, judge reputation system. Future work: algorithmic trading–themed games.

- **Degens.world & USE Stable Coin**  
  Arohbe working on Stable Miner; pushed USE direct mint from node and autoswap. Local DEX testing in progress; AMM integration under exploration. USE stablecoins added to DefiLlama as pegged assets.

- **Lithos 3.0 Development**  
  Cheese completed Lithos 3.0; now focusing on AppKit 6.0 PR.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#37839, 2026-01-12]: Release plan: 6.0.2 with two PRs plus earlier work, then assemble 6.0.3 and 6.0.4.

- [@kushti khushi, msg#37856–#37860, 2026-01-14]: Ergo protocol R&D updates: input block API methods in openapi.yaml, improved error handling, Schnorr message-signing API method in progress. Basis/ChainCash: AVL+ proof fixes, redemption testing. Help needed on offchain Basis server.

- [@kushti khushi, msg#37862, 2026-01-14]: Propose starting sidechains development with Braid whitepaper framework; solicit Scala vs. Rust preference.

- [@kushti khushi, msg#37873, 2026-01-15]: Called for PR reviews on #2244; node 6.0.2 release in progress.

- [@Cheese, msg#37880, 2026-01-15]: Completed Lithos 3.0; ready to focus on AppKit 6.0 PR.

- [@qx(), msg#37886–#37890, 2026-01-16]: Testnet node resynced and synced; explorer reading new blocks. Testnet stability good thanks to Lithos testers running nodes.

---

## Technical Q&A Worth Preserving

- **Q** (@Pgr456, msg#37831): Mining on a Rust implementation using u64 for storage rent calculation lacks integer overflow handling present in Scala, risking invalid transactions and hardfork divergence.  
  **A** (@Luivatra, msg#37832): Acknowledged; capturing as issue for tracking.

- **Q** (@kushti khushi, msg#37836): Are you using sigma-rust? It has known and unknown hardfork-ish divergences from the reference interpreter.  
  **A** (@kushti khushi, msg#37834): Confirmed many hardfork-ish differences exist; will take time to ensure complete parity.

- **Q** (@qx(), msg#37830): Why not do parallel block grabbing like torrents instead of sequential sync?  
  **A** (@Luivatra, msg#37833): Parallel retrieval is a choice; sequential was chosen to avoid disk thrashing on slow drives. RocksDB tuning mitigates bottleneck. Indexing could theoretically be parallelized but might be excessive.

- **Q** (@Aco Šmrkas, msg#37893, #37896): Is the API timeout issue fixed for p2p and main explorer?  
  **A** (@qx(), msg#37894–#37900): Testnet is separate. Main explorer and p2p both timing out; p2p nodes have half the RAM and slower disk than main explorer. Likely needs new indexing to help.

- **Q** (@Josemi, msg#37872): What are you working on these days?  
  **A** (@Josemi, msg#37901–#37902): Finishing Game of Prompts; planning first test Snake game competition with minimal entry fee, NFT prize, and judge reputation earning. Future: algorithmic trading–themed games.

---

## Links Shared

- [https://x.com/chepurnoy/status/2010743115599266098]: kushti's X post (context not provided in chat).

- [https://github.com/arkadianet/chaincash/tree/basis-tests-issue-11]: arkadia's Basis server test branch for issue #11.

- [https://x.com/ergo_platform/status/2010806325194998067]: Ergo Platform announcement for weekly developer chat (2026-01-13).

- [https://github.com/BetterMoneyLabs/braid/blob/master/whitepaper/whitepaper.pdf]: Braid sidechain whitepaper referenced for sidechains framework generalization.

- [https://cyberverse-viewer.vercel.app/]: cannon_q's Cyberverse NFT/FT viewer tool (12 collections, real-time wallet value, sales analytics).

- [https://github.com/ergoplatform/ergo/pull/2244]: Node PR under review for 6.0.2 release.

- [https://github.com/ergoplatform/ergo/pull/2290]: Schnorr message-signing PR (targeted 6.0.4).

- [https://github.com/BetterMoneyLabs/chaincash/pull/19]: ChainCash PR #19 (approved and merged by kushti on 2026-01-16).

- [https://github.com/DefiLlama/peggedassets-server/pull/700]: USE stablecoins PR to DefiLlama (merged).

- [https://t.me/+xfGIN6e8k5U1YWQ0]: Game of Prompts Telegram group link (shared 2026-01-16).

- [https://x.com/AllCyberpunkCom/status/2007439386443387267]: X post shared by kushti (context not provided).

---

## Unresolved Questions

- **Scala vs. Rust for Sidechain Framework:**  
  kushti posed question whether Braid generalization should target Scala or Rust; community feedback (Josemi) suggested Rust, but no final decision recorded in this week's chat.

- **Complete Parity Between Rust & Scala Implementations:**  
  Multiple hardfork-ish divergences noted (u64 storage rent, sigma-rust interpreter differences). Luivatra stated "will take a bit to ensure complete parity" but no timeline given.

- **Basis Server Offchain Help:**  
  kushti flagged "a lot of help needed likely" on offchain Basis server; no specific volunteers committed in this chat segment.

- **API Timeout Resolution for Main Explorer & P2P:**  
  Aco flagged persistent timeout on main explorer and p2p nodes; qx() noted resource constraints (half RAM, slower disk) and hypothesized need for new indexing. No fix timeline established.

- **Docker Panic Root Cause (Testnet Explorer):**  
  qx() reported two Docker panics in two days with lost logs on testnet explorer machine. Cause unknown; awaiting investigation.