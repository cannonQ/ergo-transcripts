# Ergo Developer Chat Summary — 2025-W22

## Key Topics Discussed

- **ergoc CLI Compiler**: anon_br released v0.1.2 with watch mode, full compiler flags, Base16/Base58 output options, and ~55% cold compilation speedup via fullOpt sigmastate-interpreter builds. Next priority: script constant placeholders support.

- **Fleet SDK v0.9.0**: Released with additional registers merging on OutputBuilder. Discussion of EIP-5 JSON support for ErgoScript template output — anon_br flagged that SigmaTemplateCompiler unavailability in JS output requires further investigation.

- **Rosen Bridge Progress**: WalletConnect (Ethereum/Binance), Xverse wallet (Bitcoin/Ledger) integration in progress. Bitcoin Runes integration underway (2/6 MRs complete). Doge testnet milestone complete; rate limiting performance improvements tested. Bridge Expansion Kit document published.

- **Ergo 6.0 & Protocol Development**: EIP-50 finalized. Sub-blocks devnet testing ongoing with issue fixes. Input/ordering blocks EIP, Sigmachains, L2 research and roadmap refactoring in progress.

- **Dexy Protocol**: Private UI testing phase; public release after confidence threshold met in testing group.

- **Sigmachains Roadmap**: Refactoring roadmap for sigma and reference client code needed for sidechains/Sigmachains launch.

- **ChainCash/Basis**: Presentation given on offchain cash options; forum post publication planned.

- **MGpai's Offchain Executor Framework**: Go-based resilient transaction executor using actor model for planned/WIP Ergo projects. Discussion of future interpreter possibilities.

- **Satergo v1.9.2**: Bug fix for Offline Vault feature (Android app unchanged).

- **Keystone Hardware Wallet**: Nautilus integration being worked on for end-to-end transaction/wallet testing post-vacation (2 weeks).

- **Git Circles**: kushti published framework for creating community currencies around open-source projects using Proof-of-Work based programmable assets.

## Important Decisions or Announcements

- [@arobsn, msg#34474, 2025-05-28]: ergoc v0.1.2 released; watch mode added; compilation times reduced 55% (cold) and 30% (hot)
- [@arobsn, msg#34474, 2025-05-28]: Fleet SDK v0.9.0 released with additional registers merging support
- [@kushti, msg#34476, 2025-05-28]: EIP-50 finalized and polished for 6.0; indexer PRs under review for 5.0.27 release
- [@Aberg, msg#34489, 2025-05-28]: Satergo v1.9.2 released with Offline Vault bug fix
- [@MGpai, msg#34497, 2025-05-28]: New offchain executor framework in Go announced for planned/WIP projects
- [@kushti, msg#34504 (via Captain Hook), 2025-05-28]: Git Circles framework published for community currency creation
- [@ZzZzBYE, msg#34480, 2025-05-28]: Rosen Bridge Expansion Kit document published; Doge testnet milestone complete
- [@arobsn, msg#34528, 2025-06-01]: New bounty posted for Ledger App Ergo issue #24

## Technical Q&A Worth Preserving

- **Q** (@arobsn, msg#34442, 2025-05-26): Can transaction deserialization work for arbitrary ErgoScript boxes?
  **A** (@arobsn): Only boxes with ErgoTrees having size flag enabled (plus P2PK and Miner Fee trees) can be deserialized via `deserializeTransaction` function due to current limitations.

- **Q** (@Luivatra, msg#34481, 2025-05-28): Can ergoc support EIP-5 output (JSON file)?
  **A** (@arobsn, msg#34482): Yes, will implement. However, SigmaTemplateCompiler is unavailable in JS output — requires closer investigation. Also asked for EIP-5 JSON examples to better understand const reconstruction (@msg#34483).

- **Q** (@Luivatra, msg#34486, 2025-05-28): How to safely reconstruct ErgoTree from EIP-5 JSON with many constants?
  **A** (@arobsn, msg#34487): The `expressionTree` field likely contains param placeholders + other constants + expression tree root. Need test vectors for lightweight ErgoTree template assembler on Fleet.

- **Q** (@HQΣr, msg#34509, 2025-05-29): Does Fleet SDK support mnemonic import and signing?
  **A** (@Moein Zargarzadeh, msg#34510): Yes, using Fleet to import mnemonic and sign transactions. Code example provided by MGpai (@msg#34512).

- **Q** (@elduko5029, msg#34514, 2025-05-30): Mobile wallet shows "node out of sync" error despite balance visible in explorer.
  **A** (@kushti, msg#34516): Try node `213.239.193.208:9053`; original node has storage issue being fixed.

- **Q** (@HQΣr, msg#34521, 2025-06-01): How to solve ~1 minute lag in Explorer API mempool after transaction submission?
  **A** (@Aco, msg#34522): Use node directly. (@Pulsarz, msg#34523 & @Aco, msg#34524): Bad practice to rely on Explorer API; decentralized approach preferred.

- **Q** (@dusek, msg#34508, 2025-05-29): Can feature be added to sigma-rust?
  **A** (@dusek): Yes, possibly behind a feature flag.

## Links Shared

- [https://github.com/ergoplatform/sigma-rust/pull/827]: dusek PR approval (msg#34441)
- [https://github.com/ergoplatform/sigma-rust/pull/830]: dusek PR approval (msg#34443)
- [https://x.com/Alisovsky/status/1927125504353501329]: anon_br "cooking something" teaser (msg#34444)
- [https://x.com/Alisovsky/status/1927152185390838143]: ergoc watch mode for realtime contract feedback (msg#34445)
- [https://github.com/ergoplatform/ergo/pull/2219]: PR pending review for 5.0.27 release (msg#34446)
- [https://github.com/ergoplatform/sigma-rust/pull/829]: dusek PR approval (msg#34447)
- [https://github.com/Satergo/satergo.com]: Satergo frontend repository (msg#34458)
- [https://github.com/ergoplatform/eips/pull/100]: EIP-50 finalization (msg#34476)
- [https://github.com/ergoplatform/ergo/issues/2214]: Issue fixed in protocol dev (msg#34476)
- [https://github.com/ergoplatform/ergo/pull/2215]: Indexer PR for 5.0.27 (msg#34476)
- [https://github.com/ergoplatform/ergo/pull/2216]: Indexer PR for 5.0.27 (msg#34476)
- [https://github.com/ergoplatform/sigma-rust/pull/804]: dusek PR approval (msg#34492)
- [https://github.com/arobsn/ergoc/issues/1]: ergoc issue for community review (msg#34490)
- [https://github.com/paideiadao/paideia-sdk/blob/dev/src/main/resources/ergoscript/ActionSendFundsBasic/1.0.0/ActionSendFundsBasic.json]: EIP-5 JSON example (msg#34484)
- [https://github.com/mgpai22/sigusd-ballot/blob/main/src/utils/transaction-helper.ts#L59]: Fleet SDK mnemonic import & signing example (msg#34512)
- [https://github.com/ergoplatform/ledger-app-ergo/issues/24]: New bounty for Ledger App Ergo (msg#34528)

## Unresolved Questions

- **SigmaTemplateCompiler JS availability** (@arobsn, msg#34482): Whether SigmaTemplateCompiler is available in JS output for EIP-5 support remains unconfirmed; closer investigation needed.
- **Explorer API mempool lag** (@HQΣr, msg#34521): Architectural concern about Explorer API lag (~1 min) versus node directness; community consensus favors node usage but Explorer improvement flagged as nice-to-have.
- **Keystone Nautilus integration timeline** (@Pgr456, msg#34505): End-to-end transaction testing to begin after 2-week vacation; no confirmed date.
- **Dexy UI public release**: Private testing group confidence threshold undefined; public release date TBD.