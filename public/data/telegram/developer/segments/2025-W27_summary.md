---
title: "Ergo Developer Chat — 2025-W27"
date_start: "2025-06-30"
date_end: "2025-07-06"
type: telegram_weekly
channel: developer
week: "2025-W27"
source: telegram
message_count: 76
categories: [technical, nft, defi, wallet, mining, ecosystem, governance, research]
key_terms: [subblocks, devnet, seed node, "PR #2055", optimization, NFT, minting, image format, IPFS, Lighthouse, Pinata, mewfinance, 6.0.1, protocol update, sonatype publishing, sigma-rust, consensus, merged mined, sidechains, Bitcoin]
---
# Ergo Developer Chat Summary — 2025-W27

## Key Topics Discussed

- **Sub-blocks Devnet Testing**: kushti reported significant fixes and optimizations to sub-blocks implementation with a stable devnet seed node, inviting community testing ahead of public testnet release (msg#34818).

- **Protocol 6.0 Update & Release**: Version 6.0.0 had sonatype publishing issues and upcast AST node strip serializer bugs; 6.0.1 planned to address these non-consensus-critical items (msg#34818). Voting for 6.0.0 began as of 2025-07-06 (msg#34843).

- **Merge-Mined Sidechains**: kushti announced it is a good time to start implementation in Rust, beginning with concrete sidechains such as double merge-mined Bitcoin + Ergo sidechain; roadmap to follow (msg#34819–34820).

- **Oracle Pool v2 & Stablecoin Updates**: Dexy Gold performing well; time to update USD oracle pool to v2 and launch GluonUSD and DexyUSD. A Telegram group for v2 oracle operators is being formed; testnet testing help needed (msg#34821).

- **Machina Finance Grid & Limit Orders**: anon_BR (arobsn) added final optimizations to grid contracts and is working on limit order contracts with focus on bytecode minimization (msg#34817).

- **Nautilus Wallet Improvements**: Fixed a non-Ledger wallet rendering bug on dApp Connector (msg#34817).

- **keystone-ergo-js Release**: Released v0.1.0 with custom serialization schema (msg#34817).

- **Sigma Rust Roadmap**: kushti discussing roadmap with dusek (msg#34818).

- **Gluon UI Beta**: New Gluon beta UI deployed at https://gluon-ergo-ui.vercel.app/ and gluon.gold (msg#34830–34831).

- **Sigmanauts Mining Pool Distribution & Node Integration**: Testing MRP (Mining Reward Pool) distribution with feedback on payment frequency; Sigmanauts Mega Core creating local UI for mining pool operators; outreach to cheese about integrating custom node into 6.0 to support sub-blocks voting (msg#34828–34829).

- **NFT Minting Image Metadata**: Resolved issue where NFT images not displaying; Pinata uploads work but Lighthouse IPFS is preferred for faster discovery; tools.mewfinance.com recommended for EIP-34 compliant minting (msg#34796–34807).

- **ChainCash Optimization**: kushti shared example of blake2b256 script hash checking to avoid full tree comparison (msg#34833).

- **RocksDB Performance Investigation**: anon_BR experiencing slow 6.1 (RocksDB) node sync (24h at 39% with 93 peers on Intel i7, SSD with LUKS encryption); switching back to leveldb for comparison; kushti investigating on his end (msg#34853–34878).

- **Wallet Address Derivation Bug**: Flying Pig reported identical addresses at positions 2 and 3 when restoring wallet on 6.0 node; kushti reviewing (wallet logic untouched for months) (msg#34840–34842).

- **Artifact Arena & Procedural Generation**: Cortex working on minting, battle arena gamification, AI-based procedural 3D model generation with Blender/ThreeJS integration; beta expected within a week (msg#34839).

- **Netnotes Data Layer**: iospore updating base data structure from JSON to integer-addressed bytes for improved storage efficiency (msg#34838).

## Important Decisions or Announcements

- [@kushti, msg#34843, 2025-07-06]: Voting for 6.0.0 has been started.

- [@kushti, msg#34818, 2025-07-02]: Ergo protocol 6.0.1 release planned with sonatype and serializer fixes; sub-blocks devnet seed node updated with stability improvements.

- [@kushti, msg#34819, 2025-07-02]: Merge-mined sidechains implementation to start in Rust; concrete example: double merge-mined Bitcoin + Ergo sidechain.

- [@kushti, msg#34821, 2025-07-02]: Oracle Pool v2 update planned with GluonUSD and DexyUSD launches; Telegram group forming for v2 oracle operators; testnet testing help requested.

- [@HQΣr, msg#34796, 2025-07-01]: Recommend tools.mewfinance.com for NFT minting (EIP-34 compliant).

- [@Glasgow, msg#34830, 2025-07-02]: New Gluon beta UI available at gluon-ergo-ui.vercel.app and gluon.gold.

## Technical Q&A Worth Preserving

- **Q** (@Anastasia Polozova, msg#34795): What image format does ergoauctions.org expect for NFT minting?
  **A** (@Aco Šmrkas, msg#34807): Most Ergo services use Lighthouse IPFS. Your Pinata upload was found by ErgoExplorer. Use tools.mewfinance.com for minting—it uploads images to Lighthouse automatically for faster discovery.

- **Q** (@arobsn, msg#34823): Is there an optimized way to compare different Sigma proposition tree versions without manual byte slicing?
  **A** (@kushti, msg#34825): You can strip the first byte and we can add a shortcut ErgoScript function in 6.0.2 without touching protocol. Example: `blake2b256(receiptOutputErgoTree.slice(1, receiptOutputErgoTree.size))` from ChainCash contracts (msg#34833).

- **Q** (@arobsn, msg#34853): Why is 6.1 (RocksDB) node syncing so slowly (24h at 39% with 93 peers, CPU at 100%)?
  **A** (@kushti, msg#34855–34876): RocksDB performs better on SSDs; LUKS encryption may be a factor despite AES offloading on Intel; suggests checking OS driver dependencies. @Pulsarz reported opposite experience with RocksDB (faster sync on ZFS RAID1). @arobsn switched to 6.0 (leveldb) for comparison (msg#34877).

- **Q** (@Flying Pig, msg#34840): Wallet address derivation bug: addresses at positions 2 and 3 are identical after restore on 6.0.
  **A** (@kushti, msg#34841): Wallet logic untouched for months; will investigate where identical addresses appear (swagger `/wallet/addresses` or node wallet UI).

## Links Shared

- [https://gist.github.com/kushti/8f0753c454cab46244dbaee3b4d842c8]: Sub-blocks devnet config
- [https://github.com/ergoplatform/ergo/pull/2055]: Sub-blocks implementation branch (latest commit)
- [http://213.239.193.208:9058/info]: Sub-blocks devnet seed node API
- [https://ergexplorer.com/token#bbd0aee4246f2048abebfd07544a806058d4000a5a2defee791719e11f872e97]: Example NFT with Pinata image metadata
- [https://gluon-ergo-ui.vercel.app/]: Gluon beta UI
- [https://github.com/topling/toplingdb]: Chinese RocksDB fork claiming 8x speedup (kushti flagged: claims look too good, needs scenario verification)
- [https://github.com/ergoplatform/sigmastate-interpreter/issues/1075]: ErgoScript proposition comparison optimization GitHub issue

## Unresolved Questions

- **RocksDB Performance Regression**: anon_BR experiencing significantly slower node sync with 6.1 RocksDB vs. 6.0 leveldb on encrypted SSD. Root cause unclear (LUKS encryption, driver, or RocksDB tuning). Investigation ongoing.

- **Wallet Address Derivation Bug**: Duplicate addresses at positions 2–3 after restore on 6.0. Cause unknown; kushti investigating.

- **RocksDB 8x Speedup Claim**: ToplingDB fork performance claims need validation on actual Ergo workload.

- **Oracle Pool v2 Operator Group**: Telegram group for running v2 oracles being formed; membership status TBD (msg#34821, #34824, #34827).