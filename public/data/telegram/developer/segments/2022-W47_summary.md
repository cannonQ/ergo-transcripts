---
title: "Ergo Developer Chat — 2022-W47"
date_start: "2022-11-21"
date_end: "2022-11-27"
type: telegram_weekly
channel: developer
week: "2022-W47"
source: telegram
message_count: 71
categories: [technical, defi, wallet, nft, ecosystem]
key_terms: [Dexy, LP contracts, Intervention contracts, testing, kiosk, double-spend, input contract, height, v2, betting game, World Cup, oracle, Spreadly, pools, IPFS, R9, gateway, standardization, cid, node API]
---
# Ergo Developer Chat Summary — 2022-W47

## Key Topics Discussed

- **Dexy Protocol Testing**: @scalahub working on LP and Intervention contract testing with public GitHub branch documenting progress.

- **ErgoScript Auditability & ErgoTree**: Discussion on whether deployed smart contracts can be publicly audited. Consensus: ErgoScript source is not directly visible on-chain; only ErgoTree (compiled bytecode) is stored. Decompilation is theoretically possible but difficult due to parameter variations. Developers must publish code separately for auditing.

- **Scalability Planning**: @kushti shared forum post on Ergo scalability updates, indicating ongoing architectural discussions.

- **API DoS Concerns**: @kushti flagged potential DoS attacks against nodes running open APIs, especially those with advertised endpoints.

- **Mempool & Fee Market Behavior**: Discussion of transaction replacement, fee estimation, spam protection mechanisms, and node-level filters (introduced in v4.0.44) to limit peer flooding.

- **Block Speed & Timestamp Dependencies**: Discussion on feasibility of faster block times; concern raised that many on-chain contracts depend on block height or timestamp, making changes non-trivial.

- **Satergo Development**: IPv6 support added to satergo.com and ergonodes.net; UI redesign nearing completion.

- **Betting/Prediction Market Feasibility**: Inquiry about creating a football World Cup betting pool using obolflip-style mechanics. Answer: requires trustworthy oracle source; someone expected to launch similar project in 2023.

- **Wallet Signing & HTML Rendering**: Discussion of NFT display in wallets; consensus that rendering HTML/CSS in wallet apps introduces bloat and privacy/security risks. Suggested alternative: server-hosted URLs or decentralized hosting.

## Important Decisions or Announcements

- [@kushti, msg#8951, 2022-11-28]: Will tweak bandwidth limits in 5.0.4 branch to ~10MB per peer—restrictive enough to prevent single peer from monopolizing bandwidth without being overly limiting.

- [@Aberg, msg#9001, 2022-11-30]: Satergo redesign finalizing; final small changes remain before release. ergonodes.net chart UI improved; dark theme enhancements deployed.

- [@kushti, msg#9058, 2022-11-29]: Scalability plan update posted to forum (https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/4).

- [@HQΣr, msg#9120, 2022-12-04]: Advised external project to hire developers for NFT feature implementation; project suggested to launch on both Cardano and Ergo.

## Technical Q&A Worth Preserving

- **Q** (@zhang zee, msg#9003): When a smart contract is deployed on-chain, is there any way to review the ErgoScript other than the developer publishing it?  
  **A** (@anon_br / kushti, msg#9008-9019): ErgoTree is the compiled, unreadable bytecode stored on-chain. To enable public auditing, developers must publish the source code separately. Unlike some blockchains, Ergo does not auto-display source; Cardano has similar behavior. Decompilation is theoretically possible but difficult due to parameterized contracts producing different ErgoTree hashes.

- **Q** (@HQΣr, msg#8837): Is it hard to create a simple betting game for the World Cup using pools and coin-flip mechanics?  
  **A** (@Luivatra, msg#8839): Need a trustworthy oracle source. (@Flying Pig, msg#8840): Someone expected to launch similar project in 2023.

- **Q** (@HQΣr, msg#8877): What tools can auto-fill CSV files from form submissions and export to MySQL?  
  **A** (@qx, msg#8879-8881): Better to write form data directly to MySQL backend, defaulting entries to "disabled" and only displaying those manually enabled.

- **Q** (@zhang zee, msg#9011): Can ErgoScript be publicly audited?  
  **A** (@kushti): Only if developers publish source code; on-chain only contains compiled ErgoTree.

- **Q** (@kii, msg#9079): How can Nautilus be helped to support signing reduced transactions?  
  **A** (unresolved in thread—flagged for developer attention).

## Links Shared

- [https://github.com/ergoplatform/ergo-jde/tree/main/kiosk/src/test/scala/kiosk/dexy](https://github.com/ergoplatform/ergo-jde/tree/main/kiosk/src/test/scala/kiosk/dexy): Dexy LP and Intervention contract test suite.
- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/4](https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/4): Ergo scalability roadmap discussion.

## Unresolved Questions

- **Block speed feasibility**: Whether to implement faster blocks (via sub-blocks or other mechanisms) remains open; depends on audit of all contracts using HEIGHT or timestamp, which is non-trivial.
- **Nautilus reduced transaction signing**: @kii flagged the need for wallet support but no implementation timeline or approach confirmed.
- **IPFS standardization for ErgoScript**: @anon_br set convention (R9 = `ipfs://{cid}`) but noted not natively supported by all browsers; standardization status unclear.
- **EIP process adoption**: External developers preferring Twitter complaints over formal EIP proposals; no mechanism change suggested but friction noted by @MrStahlfelge and @Luivatra.