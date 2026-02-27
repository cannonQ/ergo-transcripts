# Ergo Developer Chat Summary — 2023-W24

## Key Topics Discussed

- **Ergo Protocol Reference Client 5.0.12 Release**: kushti released v5.0.12 of the Ergo protocol reference client ([msg#14324](https://github.com/ergoplatform/ergo/releases/tag/v5.0.12)). This is a standard maintenance/feature release for the core node implementation.

- **Ergo Explorer NFT and Contract Features**: Aco expanded Ergo Explorer with NFT search improvements (case-insensitive, type filtering), smart contract transaction summaries, and token data rescaping with burn status tracking ([msg#14388](https://medium.com/@ergexplorer/erg-explorer-development-update-more-is-enough-c051593a8e27)).

- **DuckPools Private Testing Launch**: DuckPools completed security audit testing and advanced to private testing phase, beginning with ERG pool contracts, followed by SigmaUSD and SigRSV pools ([msg#14401](https://discord.gg/s9YAR8Sm)).

- **Edge Framework and Ergo AppKit Abstraction**: kii presented Edge, a Scala library that simplifies ErgoAppKit abstractions for faster backend development (4x efficiency gain on crowdfund project), plus ergo-play-boilerplate as a starter template. Both repos lack documentation and active maintenance ([msg#14453](https://github.com/Ergo-Lend/edge)).

- **ErgoTree Template Indexing Limitation**: Ilya Oskin identified a technical debt issue where ergo_tree_template_hash indexing prevents filtering p2pk scripts without forcing user migration to ergo_tree_template field ([msg#14455](https://github.com/ergoplatform/ergo/issues)).

- **ErgPy Library Discoverability**: User noted ErgPy is not prominently linked in main GitHub documentation despite existing at ergoplatform.com docs ([msg#14418](https://docs.ergoplatform.com/dev/stack/ergpy/)).

- **IPFS Content Provider Limitations**: Aco investigated IPFS as alternative to Cloudflare-IPFS but determined VPS constraints (512MB) insufficient for data pinning without third-party hosting ([msg#14311](https://github.com/AcoSmrkas/ErgExplorer)).

## Important Decisions or Announcements

- [@kushti khushi, msg#14324, 2023-06-14]: Ergo protocol reference client 5.0.12 released.

- [@Unknown, msg#14401, 2023-06-21]: DuckPools ready for private testing; testing begins with ERG pool, then SigmaUSD (~1.5 weeks later), then SigRSV and QUACKS pools.

- [@kii, msg#14453, 2023-06-25]: Edge and ergo-play-boilerplate frameworks proposed for ecosystem adoption; seeking maintainers and documentation contributors.

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg#14285): Why hasn't [EIP-76 contract](https://github.com/ergoplatform/eips/pull/76) been implemented?
  **A** (@MrStahlfelge, msg#14288): Lack of community review and perceived low interest prevented implementation despite availability of time.

- **Q** (@Aco Šmrkas, msg#14305): Any recommendations for reliable IPFS content provider alternatives to Cloudflare-IPFS?
  **A** (@Luivatra, msg#14310 / @Aco, msg#14311): Running local IPFS possible but constrained by VPS data limits; pinning only own content doesn't solve bandwidth/storage bottleneck.

- **Q** (@Aco Šmrkas, msg#14438): What do `maxBlockGix` and `maxTxGix` represent in `/api/v1/networkState` endpoint?
  **A** (@Luivatra, msg#14439-441): They represent global indices; `maxTxGix` equals total transaction count, `maxBlockGix` equals total box count.

- **Q** (@Unknown, msg#14416): Why doesn't Ergo have a Python SDK in the main repository?
  **A** (@kushti khushi, msg#14418): ErgPy library exists at https://docs.ergoplatform.com/dev/stack/ergpy/ but may require security audit before GitHub promotion.

- **Q** (@Aco Šmrkas, msg#14321): What browser shows correct "bull" formatting in Ergo Explorer?
  **A** (@Aberg, msg#14322): It's a font rendering issue, not browser-dependent.

## Links Shared

- [https://github.com/ergoplatform/eips/pull/76]: EIP-76 contract proposal (status: not yet implemented)
- [https://medium.com/@ergexplorer/erg-explorer-development-update-all-about-that-nft-25ac9d85e6e3]: Ergo Explorer NFT search and contract summary improvements
- [https://medium.com/@ergexplorer/erg-explorer-development-update-more-is-enough-c051593a8e27]: Ergo Explorer dollar values, staking info, and ASCII art token updates
- [https://github.com/AcoSmrkas/ErgExplorer]: Ergo Explorer repository
- [https://github.com/zkastn/reduced-transactions]: GitHub repository (context unclear from chat)
- [https://github.com/Ergo-Lend/edge]: Edge framework for ErgoAppKit abstraction
- [https://github.com/kii-dot/ergo-play-boilerplate]: Ergo Play boilerplate for Scala Play + ErgoAppKit development
- [https://docs.ergoplatform.com/dev/stack/ergpy/]: ErgPy library documentation
- [https://discord.gg/s9YAR8Sm]: DuckPools Discord server for private testing signup
- [https://t.me/ergoplatform]: Main Ergo community Telegram

## Unresolved Questions

- EIP-76 contract implementation timeline and priority unclear; requires community interest/review to proceed.
- IPFS-based content delivery for Ergo Explorer remains unsolved; third-party provider needed.
- ErgPy promotion to main GitHub repository blocked pending security audit (timeline unknown).
- ErgoTree template indexing migration path (ergo_tree_template_hash → ergo_tree_template) not yet decided; transition costs/smoothness uncertain.