---
title: "Ergo Developer Chat — 2025-W02"
date_start: "2025-01-06"
date_end: "2025-01-12"
type: telegram_weekly
channel: developer
week: "2025-W02"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo Developer Chat — 2025-W02 Summary

## Key Topics Discussed

- **Sub-blocks (Input/Ordering Boxes)**: kushti reported initial draft ready in PR #2055 with prototyping code underway for implementing input/ordering boxes as a throughput optimization mechanism.

- **Ergo 6.0 Protocol Soft-fork**: dusek_ addressing versioning issues and type serialization; fixes include Global.decodeNBits BigInt overflow handling (issue #1044) and prohibition of new 6.0 types in registers/context extension vars for backward compatibility with <6 nodes. RC version planned after fixes with public testnet activation details.

- **Nautilus Wallet UI Redesign**: anon_BR completed Transaction History, Receive view, and address state filtering redesigns with fiat denomination support (PR #239 tracked).

- **SigmaUSD & Oracle Pool V2 Updates**: kushti working on contract deployment code, votes generation, and oracle pool update mechanisms. Plan to update only the update script to enable migration to Oracle Pool v2.

- **Mempool Server & ERGFI Integration**: c8e4d2a deployed channel-based subscriptions for transactions, oracle boxes, and SigmaUSD transactions; ERGFI switched from REST to socket subscriptions with stablecoin UI release planned within 2 weeks.

- **Crux & Paideia Improvements**: luivatra fixed dynamic price scaling for low-value tokens and restarted limit order/aggregator work. Paideia backend refactored change detection to use box_id instead of creation height to prevent state corruption from multi-block transactions.

- **Celaut Project & Sigma Reputation**: jossemii reported enhanced node fault tolerance via peer tree search, reputation visualization improvements, and Beene UI still in demo stage.

- **Cryptographic Seed Encoding (CodeUTXO)**: patato.55 migrated SHA-256 to SHAKE-256 (1024-bit), implemented BIP39 checksum validation against test vectors, added 132-bit cryptographic salt with OpenSSL RAND, and planning ARGON2ID migration pending OpenSSL 3.2 availability.

- **Keystone Hardware Wallet Integration**: Pgr456 completed transaction parsing/signing and UI integration on device with transaction summary QR parsing (screenshot shared).

- **P2P Anonymous Messaging Layer**: c8e4d2a advocated that next major Ergo dApps must include anon p2p message layer (e.g., Nym mixnet) to remain competitive; emphasized this requires preventing IP leakage and spam prevention mechanisms.

- **Satergo Development**: Aberg working on wallet format updates; Ergonodes.net upgraded OS with HTTPS support added.

## Important Decisions or Announcements

- [@kushti0978, msg#32457, 2025-01-07]: Weekly Ergo Developers chat scheduled Wednesday Jan 8th, 1PM UTC with focus on financial contracts, 6.0 soft-fork protocol update, input/ordering blocks EIP, and research topics.

- [@kushti0978, msg#32463, 2025-01-08]: Sub-blocks (input/ordering boxes) initial draft ready; prototyping code in progress on PR #2055.

- [@kushti0978, msg#32464, 2025-01-08]: 6.0 versioning issues found and being fixed; RC version release pending, followed by public testnet activation details announcement.

- [@arobsn, msg#32473, 2025-01-08]: Nautilus wallet prioritizing minimal mobile-friendly UI over additional features in current PR; feedback acknowledged for future iteration.

- [@c8e4d2a, msg#32477, 2025-01-08]: ERGFI roadmap: Dexy Gold planned after stablecoin mint release.

- [@patato.55, msg#32481-32482, 2025-01-08]: CodeUTXO seed encoding migrated to SHAKE-256 with BIP39 checksum compliance verified across Bitcoin and Nautilus wallet test vectors; Argon2ID migration planned.

## Technical Q&A Worth Preserving

- **Q** (@Lee #TabbyPOS, msg#32448): API endpoint `GET https://api.ergoplatform.com/api/v1/addresses/{address}/balance/total` returning zero values—is it functional?
  **A** (@Michael, msg#32450 / @HQΣr, msg#32451): Endpoint working; ensure address is not placed inside brackets syntax. (@Lee resolved msg#32454: API working, user error in parameter formatting.)

- **Q** (@c8e4d2a, msg#32476): Web wallet signing timeout (>30sec) rejects promise but provides no error UI hint; password input unresponsive afterward.
  **A** (@arobsn, msg#32478): Likely client-side Promise timeout; opening issue to investigate error signaling.

- **Q** (@kushti0978, msg#32469): What are the plans for ERGFI?
  **A** (@c8e4d2a, msg#32472): "Make people enjoy contract interactions"; next roadmap item is Dexy Gold after stablecoin mint.

- **Q** (@HQΣr, msg#32474): How is fiat price conversion happening in Nautilus—CoinGecko?
  **A** (@arobsn, msg#32475): CoinGecko for ERG; CoinGecko + Spectrum DEX for tokens.

- **Q** (@c8e4d2a, msg#32483): How are CoinGecko/Spectrum DEX API limits handled?
  **A** (@arobsn, msg#32484): Caching.

- **Q** (@jossemii, msg#32498): Can AppKit sign a message with wallet private key and verify with `verify(message, public_key)`? Currently implementing Schnorr signature but investigating if AppKit provides this.
  **A** (@kushti0978, msg#32512): Yes, use basic method from AppkitProvingInterpreter: `verify(env: ScriptEnv, ergoTree: ErgoTree, context: CTX, proof: Array[Byte], message: Array[Byte])`.

- **Q** (@patato.55, msg#32485): Security analysis of SHAKE-256 vs SHA-256 for seed encoding?
  **A** (@patato.55, msg#32490): SHAKE-256 (SHA-3 family, Keccak-based) provides 1024-bit output vs 256-bit SHA-256, yielding 4X entropy. Sufficient for 256-bit BIP39 seeds; next hardening step is ARGON2ID migration for memory-hard brute-force resistance.

- **Q** (@kushti0978, msg#32513): Why anon messaging in Ergo p2p network? For what purpose?
  **A** (@c8e4d2a, msg#32515-32519): Minimal working example with Nym mixnet for threshold multisig (web+native). Importance demonstrated via mobile smart wallet with centralized comms, then replace with anon protocol. Requires mixnet by default + WebRTC for trusted peers; spam prevention via L2 micro-payments; UX layer decides IP leak tolerance.

- **Q** (@jossemii, msg#32532): How to verify that Ergo address "9hV5btmWVVr8..." stored in R7 register as public key "038696f0..." after transaction upload? What transformations occur?
  **A** (@HQΣr, msg#32533-32536): Clarified intent is to convert public key to Ergo address or vice versa. (@Luivatra, msg#32540): Use `Address.create("9hhjjgxv...")` in AppKit.

## Links Shared

- [https://github.com/ergoplatform/ergodocs/blob/main/docs/doc/whitepaper.md]: Ergo whitepaper copied to docs repo pending server load & qx() access for site deployment.

- [https://github.com/ergoplatform/ergo/pull/2055/files#diff-3b625a79f97550190afbfef5c3c2aec8d1b5e83d6b74ab1b2b4fcf1844293072]: Sub-blocks (input/ordering boxes) PR with initial draft and prototyping code.

- [https://github.com/ergoplatform/sigmastate-interpreter/issues/1044]: Global.decodeNBits BigInt overflow fix for 6.0.

- [https://github.com/ergoplatform/sigmastate-interpreter/issues/1046]: Fix prohibiting new 6.0 types in registers/context extension vars.

- [https://github.com/ergoplatform/ergo/pull/2193]: Rollback processing PR deployed to testnet for review & release validation.

- [https://github.com/nautls/nautilus-wallet/pull/239]: Nautilus wallet UI redesign PR (Transaction History, Receive view, address filters, fiat denomination).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1047]: DeserializeContext/Register fix for 6.0 types.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1048]: Box.getReg fix.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1049]: Global.powHit returning UnsignedBigInt.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1036]: Addressed comments; additional pass requested by kushti.

- [https://www.youtube.com/watch?v=DDDjaIBTMUw]: kushti shared video link (content not specified in chat).

- [https://github.com/ergoplatform/sigma-rust/pull/800#pullrequestreview-2545515856]: Sigma Rust 6.0 PR with kushti approval and review notes.

- [https://veilid.com/chat/]: cafebedouin shared Veilid chat reference in p2p messaging discussion.

## Unresolved Questions

- **6.0 Testnet Activation Timeline**: RC release and public testnet activation details deferred until after versioning/type serialization fixes completed.

- **Dexy Gold Smart Contract Status**: Contract deployment state unclear; kushti asked if contracts deployed on testnet/mainnet (msg#32480) but c8e4d2a only confirmed no mainnet, all on testnet (msg#32486); specific Dexy Gold contract status TBD.

- **ERGFI Backend Requirements**: kushti asked what backend needed for Dexy Gold UI (msg#32479); no response logged.

- **Web Wallet Signing Error Handling**: Root cause of >30sec timeout → promise rejection without UI feedback still under investigation; issue to be opened by arobsn (msg#32478).

- **ErgoScript Print/Debug Support**: c8e4d2a queried progress on print/debug of ErgoScript values (msg#32522); no response recorded.

- **Celaut & Beene Integration**: Beene UI reported in demo stage; production readiness timeline not discussed.

- **P2P Messaging Protocol Selection**: c8e4d2a noted complexity of selecting messaging protocol, spam prevention, and IP leakage UX layer (msg#32517); no decision made on implementation approach.