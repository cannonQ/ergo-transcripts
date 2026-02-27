# Ergo General Chat — 2025-W13 Summary

## Key Topics Discussed

- **Sub-blocks (Microblocks) Mining**: Discussion of sub-block creation, whether they generate rewards without transactions, and their impact on solo miners (~120x increased chances). Clarified that sub-blocks are created even with zero transactions in DevNet. [@Flying Pig (™), msgs#552494-552505; @Richi [MANA], msg#552478; @kushti, msg#552499]

- **Storage Rent / Demurrage Service**: Configuration and deployment of storage rent service for mining pools. Code referenced at https://github.com/K-Singh/SR-Service with node-level and MiningCore configuration requirements. [@qx(), msgs#552626-552629; @Marc the Shark, msg#552618]

- **MEW Bank Launch**: Live AgeUSD protocol operations platform supporting SigmaUSD/SigmaRSV minting, redemption, trading, and ErgoPayment integration. [@HQΣr, msg#552318]

- **Rosen Bridge & Cross-Chain Arbitrage**: Arbitrage opportunities between Ergo and Cardano assets via Rosen Bridge; feature incomplete (price feeds still being built). [@Misfit Toy, msgs#552371-552389; @HQΣr, msgs#552372-552378]

- **Palmyra & Chainlink Partnership**: Programmable reserve assets using proof of reserve via Chainlink proxy functions and Winter Protocol; on-chain warehouse receipts for decentralized trade financing. Intent to build native Ergo Oracle Pools (v1 & v2 with Dexy Gold rewards). [@qx(), msg#552536 tagged @DanielTetsuyama; msg#552539 link shared by Armeanio]

- **Ergo Speed Improvements (6.0 Testnet)**: Discussion of possible microblocks, sidechains, or layer 2 solutions. Community testnet active for parameter tweaking (difficulty, block time). Block timestamp vs. height dependencies flagged. [@kushti, msgs#552516-552528; @qx(), msg#552526]

- **Mining Hardware & ASIC History**: Reflection on GPU mining survival (2014 scrypt ASIC era), market dynamics, and Ergo-specific rigs. [@Major Popsicle, @kushti, msgs#552814-552839]

- **Wallet & Node Updates**: Nautilus 1.1.0, Satergo 1.9.1 (with Ledger support), Ergo reference client 6.0.0-RC3, Keystone integration 90% complete. [@Ergo NEWS, msg#552250]

## Important Decisions or Announcements

- [@Ergo NEWS, msg#552250, 2025-03-25]: **Public testnet Dexy UI available** at https://test.ergfi.xyz/ (use Nautilus for Testnet); first Duckpools v2 pool live at https://test.duckpools.io.

- [@kushti, msg#552231, 2025-03-24]: PR for feature not yet merged; will follow up with Rust contributors.

- [@HQΣr, msg#552318, 2025-03-25]: **MEW Bank live** — comprehensive AgeUSD protocol platform at https://bank.mewfinance.com/

- [@qx(), msg#552330-552331, 2025-03-25]: Live dev update streamed; recording available via Spotify and YouTube.

- [@qx(), msg#552470, 2025-03-26]: Weekly AMA/townhall scheduled (YouTube + Twitter Spaces format).

- [@HQΣr, msg#552554, 2025-03-27]: Blob game planned with sub-blocks integration.

- [@Snowman Jason, msg#552710, 2025-03-29]: **Palmyra TGE delayed to April** (repeated delay).

## Technical Q&A Worth Preserving

- **Q** (@J. P. Costa, msg#552306): How do I change my node's peer name for identification on ergonodes.net?
  **A** (@Unknown, msg#552309): Set `nodeName` in scorex network configuration section of your config file. Reference: https://docs.ergoplatform.com/node/conf/conf-scorex/#network-configuration

- **Q** (@Flying Pig (™), msg#552494): Will sub-blocks be created even with no transactions in mempool?
  **A** (@kushti, msg#552499): Yes, they are created even in the current DevNet with zero transactions.

- **Q** (@Flying Pig (™), msg#552500): So miners get zero reward if a sub-block has no transactions?
  **A** (Implied but unresolved; @Richi clarified msg#552478 that sub-blocks allow solo miners to collect transaction fees and storage rent, but mechanism for zero-tx case unclear.)

- **Q** (@Richi [MANA], msg#552523): Can Bitcoin forks like Litecoin introduce sub-blocks via soft fork?
  **A** (@qx(), msg#552524): Indicated he would ask on the AMA call; answer not recorded in this segment.

- **Q** (@🤝, msg#552615): Are there docs for running storage rent on a pool?
  **A** (@Marc the Shark, msg#552618): No docs yet; code on GitHub; help available from @dadreboi and himself. (@qx() provided service link: https://github.com/K-Singh/SR-Service)

- **Q** (@🤝, msg#552622): Link to storage rent code?
  **A** (@qx(), msg#552626-552629): Service at https://github.com/K-Singh/SR-Service; needs MiningCore config + node config + potentially custom node jar build.

- **Q** (@Giufa, msg#552351): Has CoinGecko deleted ERG pairs from Spectrum API?
  **A** (@Yulius Kristianto, msg#552352-353): Yes, possible; suggests renaming Spectrum to "Ergodex" on CoinGecko to resolve. (@Giufa noted ERGONE/ERG and ERGONE/SigmaUSD pairs deleted, but NonKYC pairs still available.)

- **Q** (@Misfit Toy, msg#552375): How do I identify which cross-chain assets have worthwhile arbitrage opportunities?
  **A** (@HQΣr, msg#552378): Feature partially implemented; user must check manually. Arbitrage amounts appear small/incomplete.

## Links Shared

- [https://test.ergfi.xyz/]: Public testnet Dexy UI (requires Nautilus for Testnet)
- [https://test.duckpools.io]: First DuckPools v2 pool for testing
- [https://bank.mewfinance.com/]: MEW Bank live — AgeUSD operations (mint/redeem/trade SigmaUSD/SigmaRSV)
- [https://mart.mewfinance.com/]: MewMart with updated stats
- [https://store.mewfinance.com/]: Mew Store — Ergo merchandise
- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC3]: Ergo protocol reference client 6.0.0-RC3
- [https://iturkmining.com/#ergo1]: ITurkMining pool — Ergo support added (SOLO/PPLNS)
- [https://docs.ergoplatform.com/node/conf/conf-scorex/#network-configuration]: Scorex network config docs (for nodeName)
- [https://github.com/K-Singh/SR-Service]: Storage rent / demurrage service code
- [https://github.com/ERGnomes/ergo-basic-template]: Developer template for new Ergo projects (feedback sought)
- [https://www.youtube.com/watch?v=FRSG7XYHpRc]: Weekly AMA/townhall video (2025-03-27)
- [https://sigmanauts.com/podcast/]: Ergo Podcast recordings (Spotify + direct download)
- [https://ergoraffle.com/raffle/show/850d0c68a883b1d6822148fc20708948e0aa97a768fb976ce3b20fad878ef89a]: Security audit crowdfunding for 6.0.0 (completed)
- [https://x.com/i/spaces/1jMJgkWDMVyJL/peek] and [https://open.spotify.com/episode/2LsOdHjeslLwthApVjNW7Z]: "Programmable Reserve Assets on Ergo" Twitter Spaces recording
- [https://ergonodes.net/list]: Ergo node tracker (shows peer names)
- [https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai]: Nautilus 1.1.0 release (Chrome Web Store)
- [https://satergo.com]: Satergo 1.9.1 release (Ledger support, offline vault)

## Unresolved Questions

- **Sub-block reward mechanics**: Exact mechanism for transaction fee / storage rent distribution to sub-block miners vs. main chain miners remains unclear. [@Flying Pig (™), @kushti exchange msgs#552494-552505]

- **Bitcoin fork soft-fork compatibility**: Whether Bitcoin forks (Litecoin) can adopt sub-blocks via soft fork—question raised but answer not documented. [@Richi, msg#552523; @qx(), msg#552524 deferred to AMA]

- **CoinGecko pair recovery**: Process and timeline for restoring deleted ERG/ERGONE pairs on CoinGecko unclear. Renaming Spectrum to Ergodex suggested but not confirmed as solution. [@Giufa, @Yulius msgs#552351-552359]

- **Arbitrage feature completion**: MEW Bank Rosen Bridge arbitrage feature incomplete; price feeds being built. Scope and ETA not stated. [@Misfit Toy, @HQΣr msgs#552371-552389]

- **Palmyra TGE delays**: Repeated delays announced; reasons and new timeline not discussed in this chat segment. [@Snowman Jason, @Unknown, msgs#552709-552710; @Major Popsicle skepticism msgs#552736-552740]

- **Storage rent pool deployment**: Full config details (scorex, MiningCore, node jar build) still need to be documented. [@qx(), msg#552628 flagged as TBD]

- **Block time parameter changes**: Whether decreasing block time affects timestamp-dependent contracts/dApps and what mitigation exists still debated. [@kushti, msgs#552516-552528; questions about "worst-case scenarios"]