---
title: "Ergo Developer Chat — 2025-W51"
date_start: "2025-12-15"
date_end: "2025-12-21"
type: telegram_weekly
channel: developer
week: "2025-W51"
source: telegram
message_count: 67
categories: [technical, community, ecosystem, defi, wallet]
key_terms: [testnet explorer, server migration, p2p package, UI updates, "PR #2287", "PR #2255", sbt assembly, test compilation, testnet branch, weekly chat, development updates, dapp development, research topics, SigmaProp, P2PK prefix, proposition bytes, transaction verification, mockchain vs on-chain, sigmastate-interpreter, sigma-book]
---
# Ergo Developer Chat Summary — 2025-W51

## Key Topics Discussed

- **Sub-blocks Whitepaper**: kushti announced work-in-progress on sub-blocks specification, positioning this as a key protocol improvement for discussion alongside sidechains and layer 2 solutions [@kushti khushi, msg#37489, 2025-12-17].

- **ChainCash/Basis Development**: kushti presented ChainCash paper at the 1st Stability Workshop and continued testing tracker box updates in the Basis tracker [@kushti khushi, msg#37492, msg#37495, 2025-12-17].

- **Unstoppable Hackathon Impact**: Bene Wallet received 50+ PRs from hackathon participants; four PRs examined contracts for potential bugs (all false positives but demonstrated community engagement) [@Josemi, msg#37490, 2025-12-17].

- **Lithos Protocol v2.2.0 Release**: Cheese released Lithos v2.2.0 with multi-threaded sync, individual rollup/NISPTree syncing, and database error fixes [@Cheese, msg#37500, 2025-12-17].

- **ErgoScript Language Server & Compiler**: Luivatra developed a vibe-coded ErgoScript compiler with LSP support, type inference, and error reporting; also created a Zed editor extension [@Luivatra, msg#37521-37523, 2025-12-19].

- **Ergo P2P Library in Go**: mgPai implemented ergo P2P protocol in Go, using the Java implementation as reference [@DiscordBridge (MGpai), msg#37514, 2025-12-19].

- **Testnet Infrastructure Consolidation**: qx() migrated testnet explorer services (testnet.ergoplatform.com, api-testnet, gql-testnet) from old Hetzner host to locally-hosted instance (128.253.41.110) with ~30-minute sync time [@DiscordBridge (qx()), msg#37527-37529, 2025-12-19].

- **Ergo Explorer UI Enhancements**: qx() added "Other Explorers" and "Community" sections to testnet explorer, planning a "Commercial" category for dApps like MewFinance and Rosen Bridge [@DiscordBridge (qx()), msg#37530, msg#37539-37540, 2025-12-19].

- **Degens.World Launches**: Arohbe launched ΣTokenBoard (native token leaderboard) and ErgoTrace (transaction visualization), plus released Context.md v1.2 with local LLM file support and contract audit examples [@ArØhβΣ @Arohbe 🍪, msg#37501, 2025-12-17].

- **Tor-over-UTXO Privacy Study**: x10zyn initiated investigation into fully anonymous Ergo node support via Tor, asking about BIP 155-style variable-length address support in P2P protocol and Tor Controller integration [@DiscordBridge (x10zyn), msg#37505, 2025-12-18].

## Important Decisions or Announcements

- **Testnet Explorer Migration Complete**: qx() successfully migrated testnet infrastructure and requested cleanup of old 195.201.82.115 server [@DiscordBridge (qx()), msg#37529, 2025-12-19].

- **Explorer PR Review Pending**: qx() requested review from kushti on stored testnet server state before decommissioning [@DiscordBridge (qx()), msg#37529, 2025-12-19].

- **Game of Prompts Near Completion**: Josemi plans to finish Game of Prompts contract and interface before year-end with plans for small test competition [@Josemi, msg#37490, 2025-12-17].

- **Crux Dexy LP Integration**: Luivatra added dynamic Dexy LP swapping support, extracting swap NFT token IDs and fees directly from ErgoTree constants [@DiscordBridge (Luivatra), msg#37496, 2025-12-17].

- **Ergo Explorer Token Tracking**: kushti added USE and Dexy Gold LP swap tracking to Ergo Explorer [@kushti khushi, msg#37493, 2025-12-17].

- **Nautilus Wallet PRs Merged**: Multiple ErgoPay integrations merged into Nautilus, Safew via Bene Wallet UI library PRs [@kushti khushi, msg#37504, 2025-12-18].

## Technical Q&A Worth Preserving

- **Q** (@Josemi, msg#37483): ErgoScript failing with `winnerAuth || resolverAuth` but working with just `winnerAuth` (where winnerPK == resolverPK). Script validates authorization for both resolver and winner using P2PK prefix detection and box spending. MockChain passes, mainnet fails.
  
  **A** (@kushti khushi, msg#37485): Asked for clarification on P2PK prefix value.
  
  **A** (@Josemi, msg#37486): P2PK prefix is `0008cd`. resolverPK and winnerPK are proposition_bytes; prefix indicates whether proveDlog can be performed or if authenticity must be proven by spending an input.
  
  *(Note: Root cause unresolved; transaction verification error suggests issue with OR logic in sigma protocol composition.)*

- **Q** (@x10zyn, msg#37505): Does Ergo P2P protocol support variable-length addresses (e.g., Tor v3 .onion addresses) without hard fork? Has BIP 155 (addrv2) or Tor Controller integration been discussed?
  
  **A** (@kushti khushi, msg#37518): PeerSpec appears to support variable-sized addresses flexible enough for onion addresses. Asked for details on Tor Controller auto-configuration concept.
  
  **A** (@DiscordBridge (x10zyn), msg#37519): Proposed user-friendly Tor support: ADD_ONION creates hidden service at runtime, auto-discovers SOCKS port, persists keys across restarts, handles Tor restarts automatically. User sets `tor.enabled = true` and node handles rest. Referenced Bitcoin's torcontrol.cpp implementation.

- **Q** (@DiscordBridge (x10zyn), msg#37513): How should hackathon PRs with obvious issues be handled? Should non-reviewers add comments?
  
  *(No resolution provided in chat.)*

- **Q** (@Luivatra, msg#37516): Is MGpai's ergo P2P Go implementation equivalent to the existing Java version?
  
  **A** (@DiscordBridge (MGpai), msg#37525): Used Java implementation as direct reference for Go port.

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2287]: Cheese PR with test fixes, jar assembly compilation successful.
- [https://github.com/ergoplatform/ergo/pull/2255]: Additional PR for testnet branch merge.
- [https://github.com/BetterMoneyLabs/chaincash/blob/master/docs/conf/conf.pdf]: ChainCash paper presented at Stability Workshop.
- [https://ergexplorer.com/token/a55b8735ed1a99e46c2c89f8994aacdf4b1109bdcf682f1e5b34479c6e392669]: USE token tracking on Ergo Explorer.
- [https://ergexplorer.com/token/6122f7289e7bb2df2de273e09d4b2756cda6aeb0f40438dc9d257688f45183ad]: Dexy Gold LP swap tracking on Ergo Explorer.
- [https://zutxo.github.io/sigma-book/]: x10zyn's Sigma State interpreter learning documentation (Zig implementations with links to Sigma Rust and SigmaState-Interpreter source).
- [https://github.com/Lithos-Protocol/Lithos-Client/releases/tag/v2.2.0-test]: Lithos v2.2.0 release with multi-threaded sync.
- [https://github.com/ArOhBeK/Ergo-Context/releases/tag/v1.2]: Context.md v1.2 with local LLM files and contract audit examples.
- [https://ergotokenboard.degens.world/]: ΣTokenBoard — native token leaderboard dApp.
- [https://ergotrace.degens.world/]: ErgoTrace — transaction visualization tool.
- [https://github.com/mgpai22/ergonnection-go]: ergo P2P protocol implementation in Go.
- [https://x.com/willmcgugan/status/2001945209522081881?s=46]: Issue submission approach (requires discussion before submission).
- [https://github.com/bitcoin/bitcoin/blob/master/src/torcontrol.cpp]: Bitcoin Tor Controller reference implementation.
- [https://github.com/Luivatra/ergoscript-compiler-lsp]: Vibe-coded ErgoScript compiler and LSP with EIP5 support.
- [https://github.com/Luivatra/ergoscript-zed-extension]: Zed editor extension for ErgoScript LSP.
- [https://github.com/andrehafner/p2p-explorer-TESTNET]: Modified P2P explorer UI for testnet (forked for testnet.ergoplatform.com).
- [https://altstore.io/]: AltStore — alternative app distribution for iOS (mentioned in context of Ergo wallet mobile distribution).
- [https://gitlab.com/fdroid/fdroiddata/blob/master/CONTRIBUTING.md]: F-Droid contribution guidelines (referenced for Android wallet distribution).
- [https://github.com/ergoplatform/explorer-frontend/pull/198]: Ergo Explorer frontend PR.
- [https://github.com/nautls/nautilus-wallet/pull/317]: Nautilus Wallet PR.
- [https://github.com/nautls/nautilus-wallet/pull/316]: Nautilus Wallet PR.
- [https://github.com/ergoplatform/ergo-wallet-app/pull/183]: Ergo Wallet App PR.
- [https://github.com/anon-real/sigma-usd/pull/71]: SigmaUSD PR.

## Unresolved Questions

- **ErgoScript Sigma Protocol OR Logic Bug** (msg#37483-37486): Why does `winnerAuth || resolverAuth` fail verification while `winnerAuth` alone succeeds, despite both being valid SigmaProps? MockChain passes but mainnet fails—potential bug in Sigma protocol OR composition or serialization.

- **Tor Variable-Length Address Support Path** (msg#37505, msg#37518-37520): Unclear whether implementing Tor v3 address support requires protocol changes beyond current PeerSpec flexibility; x10zyn flagged as TBD pending deeper integration study with ergo-core/Scorex.

- **Hackathon PR Review Standards** (msg#37513): No explicit guidance provided on whether non-reviewer community members should comment on PRs with obvious quality issues, or if formal review is required.

- **Multiple LSP Implementations Status** (msg#37510-37511): Luivatra asked if any complete ErgoScript LSP projects exist beyond hackathon submissions; no definitive answer provided in thread.

---

**Summary**: 2025-W51 was moderately active with infrastructure work (testnet migration), language tooling progress (ErgoScript LSP/compiler), and protocol research (sub-blocks, Tor privacy). Hackathon follow-up remains a coordination gap. No major protocol decisions finalized.