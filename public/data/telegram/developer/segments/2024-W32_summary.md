# Ergo Developer Chat — 2024-W32 Summary

## Key Topics Discussed

- **Local Network Node Synchronization Issues**: Multiple configuration and synchronization problems reported when setting up local Ergo nodes. Key insight: nodes trying to sync with mainnet using custom magic bytes require `networkType = "devnet"` or a full fork with modified genesis parameters.

- **Fleet SDK Token Box Splitting & Size Limits**: The SDK splits change boxes when exceeding 120 tokens but doesn't account for max box size (4096 bytes), causing signing failures. Solution: use `TransactionBuilder#configure()` with `setMaxTokensPerChangeBox()` to set safer limits.

- **Sigma Rust Swift Bindings Documentation**: Swift bindings README outdated with old Xcode versions (v13 vs current v15) and missing critical compilation steps. Issue tagged with bounty https://github.com/ergoplatform/sigma-rust/issues/759

- **Rosen Bridge EVM Integration Progress**: Decimal drop logic refactoring underway, message sending delays in RoseBridge being addressed, and EVM chain transaction failure handling implemented.

- **Sub-blocks & Sidechaining Research**: kushti doing refactoring work on ErgoNodeViewHolder toward sub-blocks implementation, planning community discussion post-Ergoversary about block time improvements and sidechain constructions.

- **Wallet UI/UX**: Discussion on displaying wallet names vs change addresses; privacy concerns raised around wallet name exposure. Proposed permission-based approach where dApps can request wallet metadata via explicit checkboxes.

- **Node Mnemonic Signing Debate**: Disagreement over whether Ergo nodes should support mnemonic-based transaction signing (security vs convenience). Current consensus: private keys preferred; if mnemonics needed, implement via separate convenience layer (e.g., containerized solution).

## Important Decisions or Announcements

- [@kushti, msg#29261, 2024-08-06]: Weekly Ergo Developers chat scheduled for Wednesday, August 7th, 1 PM UTC.

- [@kushti, msg#29265, 2024-08-06]: First gold-denominated bounty attached to GitHub issue https://github.com/ergoplatform/ergo/issues/2174

- [@kushti, msg#29375, 2024-08-09]: **Sigma Rust 0.28 released** — breaking changes in release notes at https://github.com/ergoplatform/sigma-rust/releases/tag/ergo-lib-v0.28.0

- [@kushti, msg#29291, 2024-08-07]: 
  - Ergo node v5.0.22 released, v5.0.23 finalized and under testing
  - Multiple Sigma 6.0 PRs merged into candidate branch
  - README update proposed to eliminate "official" terminology and improve contributor attractiveness

- [@kushti, msg#29296, 2024-08-07]: Bounty created for sigma-rust Swift bindings documentation issue (initial bounty value 200, corrected to 20)

- [@mgPai, msg#29272-29279, 2024-08-06]: Configuration guidance for setting up local Ergo networks: only one node should mine initially until stable, others follow; block time <30s requires single miner to avoid forks.

- [@arobsn, msg#29304, 2024-08-07]: Nautilus Abyss v0.13.0-beta.1 released with performance improvements including optimized old UTxO lookup; Fleet SDK added exponential delay retrying, GraphQL URL override, and custom BigInt mapping.

- [@Marc the Shark, msg#29329, 2024-08-07]: Sigmanauts Mining Pool infrastructure updates — renamed backend to Sigs-Mining-Core, serial TX integration in progress, new server online pending pfx cert setup, new domain ergominers.com announced.

## Technical Q&A Worth Preserving

- **Q** (@Emilio, msg#29185): Two nodes on same local blockchain have different heights and wallet balances. How is this possible? Will they sync?
  **A** (@HQΣr, msg#29190-29192): Makes sense if one node is ahead. Wallet balances reflect the height difference. Let the wallet sync.

- **Q** (@Emilio, msg#29196-29197): Both nodes report "Node is synced" but are at different heights (1372 vs 1279).
  **A** (@Luivatra, msg#29199): If both are mining with only 2 nodes, they may be on different forks. [@mgpai, msg#29274-29279]: Only one node should mine initially; others follow. Block time <30s requires single miner to avoid forks.

- **Q** (@Flying Pig, msg#29221): Why can't Ergo nodes accept mnemonics for transaction signing, only private keys?
  **A** (@Pgr456, msg#29250): Mnemonic requires deriving multiple keys; private key for specific TX is more efficient and secure (limits key exposure). [@kushti, msg#29260]: Mnemonic also requires derivation path params.

- **Q** (@Aco, msg#29357): Fleet SDK splits change boxes at 120 tokens but doesn't account for max box size (4096), causing signing errors with many tokens.
  **A** (@arobsn, msg#29360): Use `TransactionBuilder#configure((s) => s.setMaxTokensPerChangeBox(100))` to set safer limit; will be default in future releases.

- **Q** (@Aberg, msg#29403): Why is `UnsignedTransactionBuilder` class present in both `org.ergoplatform.sdk` and `org.ergoplatform.appkit`?
  **A**: Unresolved — flagged as potential duplication requiring clarification.

- **Q** (@deathgripson, msg#29408): Does Nautilus have developer docs?
  **A** (@mgpai, msg#29415): See EIP-0012 at https://github.com/Emurgo/Emurgo-Research/blob/master/ergo/EIP-0012.md

- **Q** (@deathgripson, msg#29414): Can Nautilus be set up for testnet as a browser extension without command-line setup?
  **A** (@mgpai, msg#29418): Testnet builds available in releases (https://github.com/nautls/nautilus-wallet/releases/tag/v0.12.2), but [@deathgripson, msg#29419]: These require local clones; browser extension UI network switching (like MetaMask) would lower friction for non-dev testnet participation.

- **Q** (@Emilio, msg#29368-29373): Can a local mainnet fork be created? What happens if genesis block hash isn't changed?
  **A** (@kushti, msg#29372): "Mainnet" is a synonym for the public Ergo network parameters. Forking requires changing magic bytes AND genesis block hash to avoid network conflicts and user scams.

- **Q** (@kushti, msg#29281): How to define array of complex types (e.g., `Coll[(Coll[Byte], Int)]`) in Fleet SDK additional registers?
  **A**: Answered in Discord thread (msg#29286); @anon_br provided solution referencing separate thread context.

## Links Shared

- [https://github.com/ergoplatform/eips/blob/master/eip-0034.md]: Latest NFT standards (EIP-34)
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1002]: Sigma state interpreter PR for review
- [https://github.com/ChainCashLabs/chaincash-rs/issues/11]: ChainCash blockchain scanning implementation
- [https://github.com/ChainCashLabs/chaincash-rs/pull/47]: ChainCash CI/CD workflow
- [https://ergolui.com/gold-chart/]: Gold oracle values chart
- [https://github.com/SavonarolaLabs/gluongold]: Alternative Gluon Gold interface concept
- [https://github.com/ergoplatform/ergo/pull/2174]: First gold-denominated bounty issue
- [https://github.com/ergoplatform/ergo/pull/2177]: Node PR for review
- [https://github.com/ergoplatform/ergo/pull/2164]: Node PR for review (mining API & regeneration)
- [https://github.com/ergoplatform/ergo/pull/2179]: Node README update proposal
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/995]: Sigma 6.0 candidate
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1008]: Sigma 6.0 testing/polishing
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/972]: Sigma 6.0 testing/polishing (requires re-review msg#29374)
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/968]: Sigma 6.0 testing/polishing
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1006]: Sigma 6.0 (requires re-review msg#29374)
- [https://github.com/ergoplatform/sigma-rust/issues/759]: Swift bindings documentation bounty
- [https://github.com/ergoplatform/sigma-rust/releases/tag/ergo-lib-v0.28.0]: Sigma Rust 0.28 release notes
- [https://github.com/nautls/nautilus-wallet/issues/181]: Wallet name/change address privacy discussion
- [https://github.com/celaut-project]: CELAUT peer-to-peer network paradigm project
- [https://github.com/ergoplatform/ergo-appkit/pull/238]: AppKit PR pending merge
- [https://github.com/nautls/nautilus-wallet?tab=readme-ov-file#build-for-production]: Nautilus local testnet build instructions
- [https://github.com/nautls/nautilus-wallet/releases/tag/v0.12.2]: Nautilus v0.12.2 with testnet support
- [https://fleet-sdk.github.io/docs/wallet-interaction#connection-api]: Fleet SDK connection API docs
- [https://github.com/ergoplatform/ergo/compare/master...PhoenixErgo:sigmanet:master]: Configuration changes for custom Ergo networks (reference implementation)

## Unresolved Questions

- **Local node synchronization with custom parameters**: Emilio's nodes configured with custom magic bytes but using `--mainnet` flag wouldn't sync; resolved by switching to `--devnet`, but underlying UX issue remains: configuring truly independent forks requires recompilation and parameter changes unclear to users.

- **Wallet name privacy vs usability**: Debate between exposing wallet names for convenience vs privacy concerns. Proposed permission-based approach not yet implemented.

- **Mnemonic signing security stance**: Core team prefers private keys only; community questions consistency given other existing low-security endpoints (no HTTPS, API keys). Direction unclear — whether to add convenience layer or enforce stricter node isolation.

- **AppKit UnsignedTransactionBuilder duplication**: Two implementations in different packages (sdk and appkit). Purpose and whether consolidation is needed unclear.

- **Nautilus testnet browser extension support**: Feature request for switching networks in browser extension UI (like MetaMask) to lower friction for non-dev testnet participation. Status: not yet implemented.

- **Box size calculation before transaction finalization**: Aberg working on algorithm to predict box size using AppKit before transaction is built; initial success followed by breaking when token ID map timing unclear. Resolution pending.

---

**Chat Statistics:**
- 223 messages across 14 participants
- Primary focus: local node setup, SDK tooling, wallet UX, protocol R&D (sub-blocks, Sigma 6.0)
- Lowest activity period: 2024-08-08 to 2024-08-10 (mostly tooling discussions, IDE preferences)