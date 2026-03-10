---
title: "Ergo Developer Chat — 2022-W42"
date_start: "2022-10-17"
date_end: "2022-10-23"
type: telegram_weekly
channel: developer
week: "2022-W42"
source: telegram
message_count: 70
categories: [technical, ecosystem, wallet, defi]
key_terms: [v4.0.105, v5.0.0, v5.0.2, release, merged PRs, serialization, ErgoTransaction, sigma repo, breaking changes, security, token limit, box size, 100 tokens, 255 tokens, protocol limits, dumdumdum, twitter, backend, frontend, Flux deployment]
---
# Ergo Developer Chat — 2022-W42 Summary

## Key Topics Discussed

- **Ergo Protocol Release Pipeline**: v4.0.105 and v5.0.0 released during this period. v5.0.2 followed shortly after, with focus on addressing breaking changes and serialization soundness in ErgoTransaction handling.

- **Token Limit Per Box**: Discussion of wallet-level vs. protocol-level constraints. Protocol allows more tokens per box than the current 100-token wallet limit, which derives from a stricter 4KB box size constraint. Wallet implementations (ergo-wallet lib) enforced 100 tokens per box, with up to ~500 tokens possible across multiple boxes in a wallet.

- **Satergo Development**: Design beta 2 released. New project `stratum4ergo` created as both a library and tool for solo mining pool server infrastructure, to be integrated into Satergo.

- **Dexy Payout Contract**: scalahub working on payout contract implementation in Dexy Protocol after returning from leave.

- **Explorer Indexing Issue**: Block height 869219 caused explorers to stall with data type mismatch (`ClassCastException: [J cannot be cast to [B`), while nodes continued producing blocks normally.

- **Privacy-Friendly Explorer Tooling**: kushti shared spiral-rs library as utility for building privacy-preserving explorers.

## Important Decisions or Announcements

- [@kushti khushi, msg#7830, 2022-10-20]: v4.0.105 released
- [@kushti khushi, msg#7834–7835, 2022-10-21]: v5.0.0 released
- [@Aberg Satergo dev, msg#7993, 2022-10-26]: Satergo design beta 2 released; stratum4ergo project announced
- [@kushti khushi, msg#8242, 2022-11-02]: Ergo protocol reference client v5.0.2 released
- [@Flying Pig (™), msg#8360, 2022-11-06]: Explorer indexing failure at block 869219; nodes unaffected

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg#8048): How to fetch real-time token prices from Spectrum API for ergcube integration?  
  **A** (@MrStahlfelge, msg#8049): Reference implementation available in ergo-wallet-app repository: https://github.com/ergoplatform/ergo-wallet-app/tree/develop/common-jvm%2Fsrc%2Fmain%2Fjava%2Forg%2Fergoplatform%2Fapi%2Fergodex

- **Q** (@user, msg#8051): What is the maximum transaction size configuration?  
  **A** (@kushti khushi, msg#8060): Can set `maxTransactionSize = 200000` in node config, but note other nodes enforce standard limits; recommended for mining nodes only.

- **Q** (@user, msg#8067): Why was token limit per box lowered to 100?  
  **A** (@kushti khushi, msg#8094): Protocol allows up to ~4KB per box; wallet libraries conservatively enforce 100 tokens per box, but protocol permits higher counts per individual box and ~500 across multiple boxes in a wallet.

- **Q** (@user, msg#8051): Testing transaction handling with large wallets  
  **A** (@qx(), msg#8056–8057): Clarified whether testing on testnet or creating disposable wallets for stress testing.

- **Q** (@Flying Pig (™), msg#8364): Explorer stuck while nodes continue; what is the root cause?  
  **A** (@kushti khushi, msg#8373): Explorer-level issue; node versions (4.0.103, 4.0.105, 5.0.2) confirmed functioning normally. Likely data deserialization mismatch in explorer backend.

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/1867/files]: PR discussing Seq.empty vs. Nil changes (deemed unnecessary)
- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.105]: v4.0.105 release notes
- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.0]: v5.0.0 release notes
- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.2]: v5.0.2 release notes
- [https://github.com/ergoplatform/ergo-wallet-app/tree/develop/common-jvm%2Fsrc%2Fmain%2Fjava%2Forg%2Fergoplatform%2Fapi%2Fergodex]: Spectrum API integration reference implementation (ergo-wallet-app)
- [https://github.com/menonsamir/spiral-rs]: Privacy-friendly explorer building utility library

## Unresolved Questions

- **AppKit serialization breaking changes** [@kushti khushi, msg#7921]: Multiple breaking changes in ErgoTransaction serialization identified but root cause and mitigation strategy not fully detailed. kushti flagged need to rollback insecure changes and fix deserialization soundness.
- **Explorer data type mismatch** [@Flying Pig (™), msg#8364]: ClassCastException at block 869219 requires backend code review; no resolution provided by week end.
- **dumdumdum (Ergo Twitter) Frontend** [@kii, msg#7803]: Backend complete, frontend development ongoing, crowdfunding contracts targeted for end-of-week completion; status incomplete.