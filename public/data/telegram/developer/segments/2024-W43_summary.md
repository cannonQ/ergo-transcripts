---
title: "Ergo Developer Chat — 2024-W43"
date_start: "2024-10-21"
date_end: "2024-10-27"
type: telegram_weekly
channel: developer
week: "2024-W43"
source: telegram
message_count: 0
categories: [technical, wallet, defi, bridges, community, nft, ecosystem]
key_terms: [ergonnection, p2p, sigmastate-interpreter, maven central, serialization, sigma 6.0, protocol upgrade, PR review, nautilus, 0-conf, experimental feature, backend, paideia, dao, mainnet, treasury, sigmanauts, rosenet, rosen bridge, p2p layer]
---
# Ergo Developer Chat Summary — 2024-W43
**Period:** 2024-10-21 to 2024-11-03  
**Participants:** 17 developers and community members  
**Message Count:** 128

---

## Key Topics Discussed

- **Ergo 6.0 Protocol Development**: kushti advancing multiple PRs toward 6.0 activation including unsigned BigInt support, sub-blocks infrastructure (input vs. ordering block processing), and Sigma protocol enhancements. Multiple PRs merged and under review in sigmastate-interpreter.

- **Nautilus Wallet 0-Conf Support**: anon_br released v0.15.0-beta.0 with zero-confirmation enabled on Abyss channel (pending Google review). Fixed DEX LP creation bug via hardened token metadata parser. Ledger integration for Stax/Flex devices finalized; Nano S support removed; token limit per transaction increased from 20 to 100.

- **Fleet SDK Chained Transaction Building**: New feature allowing indefinite chaining of TransactionBuilder instances for complex multi-step transaction workflows, simplifying code compared to prior patterns.

- **Paideia DAO Mainnet Launch**: Mainnet deployed on-chain with basic functionality tested via API. Sigmanauts DAO created as free test instance. Web2 backend deployed; frontend deployment pending to run parallel with beta for treasury migration support.

- **Rosen Bridge RoseNet P2P Layer**: Final testing phase for new p2p communication layer. Community call for global decentralized test nodes (8GB RAM, 8+ CPU cores preferred) to validate fault tolerance and scalability before production. Test duration ~24 hours.

- **Satergo Wallet Updates**: Windows installation auto-update added. Ergonnection (p2p node communication library) v0.0.1 ready; awaiting sigmastate-interpreter release. Wallet format security hardening in progress (password testing iterations to prevent brute-force).

- **Dexy Protocol**: kushti updating whitepaper and reviewing contracts toward audit completion. Discussion of LP contracts with Luca ongoing.

- **Crux Finance Backend**: Fixed PostgreSQL null character (0x00) handling in token description fields. Paideia off-chain vote replay bug identified and fix in progress.

- **MewFinance Ecosystem (HQΣr)**: CLB (Community Liquidity Bootstrap) launched with Richie. MewDex bridged Cardano natives to Ergo and built initial LPs. MewMart implementing verified collections (EIP standards). MewStore in talks with Keystone and Italian art gallery; listed rsSNEK as payment asset.

- **Cyberverse Patch Updates**: MusicPlayer UI improvements, Chat UI repositioned, User Profile redesign (Twitch integration, expanded emoji favorites to 24). Halloween NFT minting event integration.

- **Keystone Hardware Wallet Integration**: Pgr456 received Keystone 3 PRO device; address generation working, wallet connection and transaction signing in progress. Swift/Sigma Rust README improvement ticket pending since July (noted as stalled).

- **Token Flight Vesting Contract (Marc the Shark)**: Generic linear vesting pattern tested on testnet with 1-week distribution. Multiple distribution mechanisms implemented: Linear, Quadratic, Exponential, Logarithmic. Planning integration into ErgoHack 9 submissions.

- **Sigmanauts Mining Pool**: 11.11 Mining Swap release enabling Miner ID minting and ERG→native token rewards. Token Flight contract for bonus reward distribution.

- **Celaut Project (jossemii)**: P2P service execution paradigm using Nodo nodes. Services run in containerized environments (Docker, microVMs planned); node RPC handles StartService(ServiceInterface) requests. Load balancing via supply/demand. No consensus needed; services default to blocking external connections unless specified. Post-ErgoHack video tutorial planned.

- **Sigma Rust iOS Development**: README/documentation improvements blocked for 3 months (issue #759). Pgr456 acknowledged distraction but committed to prioritization.

---

## Important Decisions or Announcements

- [@Armeanio, msg#31011, 2024-10-27]: RoseNet testing recruitment announcement — seeking global community nodes for 24-hour decentralized test phase.

- [@Glasgow｜WON'T DM, msg#30985, 2024-10-23]: ErgoHack 9 registration deadline: October 23, 2024 (deadline passed).

- [@kushti khushi, msg#30977, 2024-10-22]: Weekly Ergo Developers chat scheduled Wed Oct 23, 1PM UTC covering 6.0 protocol update, ErgoHack, financial contract feedback, and research topics.

- [@kushti khushi, msg#31021, 2024-10-28]: Merged Ergo AppKit PR #241 (pending specifics in archive).

- [@Aberg Satergo dev, msg#31082, 2024-10-30]: Maven Central release for Ergonnection delayed pending sigmastate-interpreter release (expected November).

- [@anon_br Σ, msg#31113, 2024-11-03]: Nautilus v0.15.0-beta.0 pending Google Manifest v3 review (slow process). Ledger Stax/Flex implementation in ledger-app-ergo#19; Nano S support removed; token limit increased to 100.

- [@Aberg Satergo dev, msg#31112, 2024-11-03]: Satergo wallet token limit will be updated to 100 to match Ledger changes.

---

## Technical Q&A Worth Preserving

- **Q** (@jossemii via DiscordBridge, msg#30969): Getting "DataCloneError: Failed to execute 'postMessage' on 'MessagePort': #<Promise> could not be cloned" error even on successful transaction signing — how to debug?  
  **A** (@arobsn via DiscordBridge, msg#30967): Remove `await` from submit.ts line 75 to resolve (though questioner reported persistent issues after applying).

- **Q** (@Jeanmay, msg#31033): How to implement Ergo wallet login in Android app?  
  **A** (@mgpai via DiscordBridge, msg#31039): Use ErgoPay. Followed by documentation links to EIP-20 and ErgoPay tutorial (@Glasgow, msgs#31051-31052).

- **Q** (@imgruntw via DiscordBridge, msg#31042): Sigma Rust Swift README improvement ticket (issue #759) stalled for 3 months — needed for iOS app development.  
  **A** (@Pgr456, msg#31043): Acknowledges distraction; committed to addressing soon.

- **Q** (@Luivatra, msg#31045): Sending ModifierRequest with ErgoTransaction type crashes socket connection; Header type works fine.  
  **A** (@Aberg Satergo dev, msgs#31059-31072): Identified deserialization error in byte-skipping logic (changed to strict validation). Fixed by reverting to lenient skip method; also uncovered misinterpreted socket exceptions.

- **Q** (@MGpai, msg#31025): How to build fat jar for Ergonnection testing?  
  **A** (@Aberg Satergo dev, msg#31076): Use Gradle Shadow plugin (id 'com.gradleup.shadow' v8.3.4) and run `./gradlew shadowJar`; alternatively use local Maven repo via `./gradlew publishToMavenLocal`.

- **Q** (@Odiseus Me, msg#31007): Satergo node on Raspberry Pi 5 stuck at block 1382062, header sync shows 94.94%, repeated "Can't yet apply persistent modifier" error with parent header undefined.  
  **A** (@cannon_q, msg#31009): Recommended GitHub repo from @thestophe for RPi setup; @thestophe offers DM support on Telegram (msg#31014).

- **Q** (@kushti via DiscordBridge, msg#31053): How does Nodo relate to Celaut? What is a service interface?  
  **A** (@jossemii, msgs#31063-31064): Nodo is a Celaut node implementation; services are containerized binaries with specified file system, entry point, port interfaces, and network access rules. Nodes execute services or delegate via RPC StartService(). Load balancing follows supply/demand; no consensus required. Services run per-user; default blocks external connections unless specified.

- **Q** (@kushti via DiscordBridge, msg#31084): How is Celaut's P2P network structured?  
  **A** (@jossemii, msgs#31086-31087): Two elements (Nodes, Services) with minimal rules inspired by cellular automata. Nodes balance load based on supply/demand or arbitrary criteria. Services can request child services. No consensus on node reputation; trust is optional per user request.

- **Q** (@Aberg Satergo dev, msg#31114): Should Satergo require wallet to be opened with same Ledger device type (e.g., Nano S+) it was created with?  
  **A** (@anon_br Σ, msg#31115): Not technically necessary; wallet check at login prevents accidental mismatches. Token limit increase (20→100) only applies to newer Ledger app versions not yet listed.

---

## Links Shared

- [https://github.com/ergoplatform/sigmastate-interpreter/issues/1030]: Issue opened by Aberg (msg#30970).

- [https://github.com/ergoplatform/sigmastate-interpreter/issues/1031]: Issue opened by Aberg (msg#30970).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/976]: Sigma-5.0.14 update PR; kushti finishing tests (msg#30976).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1011, #1008, #1016, #1026, #997]: Multiple 6.0 protocol PRs merged/under review by kushti (msg#30981).

- [https://ergohack.io/register/]: ErgoHack 9 registration (deadline passed Oct 23) (msg#30985).

- [https://github.com/0xf965/benefaction-platform/blob/master/src/lib/submit.ts#L75]: Benefaction platform submit.ts with DataCloneError context (msg#30967).

- [https://github.com/ergoplatform/ergo/pull/2177#issuecomment-2306694190]: Mempool tracking improvement PR requiring @zackbalbin attention (msg#31055).

- [https://github.com/ergoplatform/ergo/pull/2115]: PR requesting review from mgpai, pgr456, fantaerik, ccellado, ergomorphic (msg#31099).

- [https://github.com/celaut-project/paradigm/blob/master/README.md]: Celaut paradigm documentation (msg#31063).

- [https://github.com/celaut-project/nodo/blob/master/docs/USAGE.md]: Nodo usage documentation (msg#31053).

- [https://github.com/ergoplatform/sigma-rust/issues/759]: Sigma Rust Swift README improvement ticket (stalled 3 months) (msg#31042).

- [https://docs.ergoplatform.com/dev/wallet/payments/standards/eip20/#option-1-dapp-provides-url-request-for-ergopaysigningrequest-information]: EIP-20 ErgoPay documentation (msg#31051).

- [https://docs.ergoplatform.com/dev/wallet/payments/ergopay/ep-tutorial/]: ErgoPay tutorial (msg#31052).

- [https://github.com/cruxfinance/ergo-node-zmqpub/tree/main/lib]: Crux ergo-node-zmqpub library (msg#31027).

- [https://github.com/ergoplatform/ergo-appkit/pull/241]: Ergo AppKit PR merged by kushti (msg#31021).

- [https://github.com/ergoplatform/ergo-appkit/pull/240]: Ergo AppKit PR approved/merged by kushti (msg#31022).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1029]: 6.0 activation PR in progress (msg#31049).

- [https://www.ergoforum.org/t/attaching-arbitrary-conditions-to-unconfirmed-transactions/214/4]: Ergo Forum discussion on multi-party offchain protocols (msg#31049).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/965]: PR ready for review by kushti (msg#31060).

---

## Unresolved Questions

- **Keystone Hardware Wallet Integration Status** (@Pgr456): Wallet connection and transaction signing not yet complete; awaiting additional info from Keystone team (msg#30988, msg#31016).

- **Sigma Rust Swift README Improvement** (@imgruntw): iOS app development blocked by 3-month stalled ticket #759; Pgr456 acknowledged but no ETA given (msg#31042-31043).

- **Sub-blocks Input vs. Ordering Block Processing** (@kushti): Still "working slowly" on block candidate caching and field processing differentiation; no timeline specified (msg#30981).

- **Satergo Wallet Format Security Hardening**: Cryptographic iteration strategy for password testing still under research; completion date unclear (msg#31058).

- **Ergonnection Maven Release**: Blocked on sigmastate-interpreter release "hopefully in November" with no confirmed date (msg#31082).

- **Nautilus 0-Conf User Experience**: Zero-confirmation marked as experimental feature pending proper backend implementation; design/flow finalization deferred (msg#31050).

- **Fee Market / Mempool Behavior**: Query efficiency improvements identified but broader fee market dynamics and edge cases not fully explored (msg#31055, msg#31099 pending review).

- **Ledger Nano S+ Device Binding**: Unresolved whether Satergo should enforce device-type matching for wallets created on specific Ledger models (msg#31114-31115).

---

**Archive Notes:**
- Low-volume week (128 messages) with steady technical progress on core protocol (6.0), wallet infrastructure (Nautilus, Satergo, Keystone), and ecosystem projects (Paideia, MewFinance, Crux, Celaut).
- No major consensus-breaking debates; technical issues resolved constructively.
- ErgoHack 9 in active submission phase; multiple teams leveraging Token Flight and other new infrastructure.