---
title: "Ergo Developer Chat — 2023-W43"
date_start: "2023-10-23"
date_end: "2023-10-29"
type: telegram_weekly
channel: developer
week: "2023-W43"
source: telegram
message_count: 169
categories: [technical, wallet, mining, governance, defi]
key_terms: [v5.0.15, protocol, release, client, seed, mnemonic, private key, keystore, encrypted, stratum, mining pool, port, testnet mining, ErgOne, voting, content incentives, rewards, ergpy, token directory, verification]
---
# Ergo Developer Chat Summary — 2023-W43
**Period:** 2023-10-23 to 2023-11-05  
**Activity Level:** Moderate — mostly infrastructure, node operations, and tooling discussions

---

## Key Topics Discussed

- **Ergo Protocol Reference Client 5.0.15 Release**: Core node update released with improvements to disk storage, tree segment offloading, and general maintenance.

- **Explorer API Reliability Issues**: Multiple instances of the official Ergo Explorer GraphQL endpoint timing out or serving stale state data, affecting downstream dApps like Spectrum DEX via Nautilus wallet integration.

- **Node Configuration & Indexing**: Discussion of `extraIndex` setting and its incompatibility with pruned node mode; full resync required to enable indexing.

- **Mempool Management & Spam Mitigation**: Node operators can adjust mempool cleanup duration (default 20m) and set minimum propagation fee rates to filter spam; reference client v4.0.44+ includes limits on transactions per peer.

- **Satergo Solo Mining Pool Feature**: New unreleased feature for testnet and mainnet solo mining; Java 21 required for compiled pool program, Java 17 sufficient for source compilation.

- **ErgOne Protocol Voting Cycle Update**: Shifted voting period from first to last day of each month; free submission points (1 point) for all registered users, but 0 free points for voting to prevent cheating.

- **STuple Export Bug in Fleet SDK**: Bug discovered and fixed — `STuple` was not being exported from serializer library, affecting UTXO manipulation in TypeScript/JavaScript contracts.

- **AppKit & Java Version Compatibility**: Questions about which AppKit version (2.12 vs 2.13) for Java 21 projects and modularization support for excluding ErgoScript parser.

- **Testnet GraphQL Availability**: New testnet GraphQL endpoint deployed at `https://gql-testnet.ergoplatform.com/` to support Nautilus and other dApps on testnet.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#20270, 2023-10-23]: Ergo protocol reference client **5.0.15 released** — https://github.com/ergoplatform/ergo/releases/tag/v5.0.15

- [@koukarin - Σ, msg#20324, 2023-10-25]: **ErgOne voting period change**: Shifted from first to last day of month to reduce complexity; free 1-point submission allowance for all registered users (0 free points for voting); October rewards distribution planned for next week with 3-month validation window.

- [@anon_br Σ, msg#20458, 2023-10-29]: **STuple export bug fix** committed to Fleet SDK serializer library.

- [@Ilya Oskin, msg#20554, 2023-11-01]: **Explorer Backend & Spectrum updates**:
  - Emission calculation updated per EIP-27
  - On-chain vaults transitions work-in-progress for large committees (>500 nodes)
  - Spectrum bloom implementation in progress

- [@kushti khushi, msg#20546, 2023-11-01]: **Testnet GraphQL endpoint** made available — `https://gql-testnet.ergoplatform.com/`

- [@Aberg Satergo dev, msg#20687, 2023-11-02]: **Satergo solo mining pool feature** (unreleased, GitHub branch: `solo-mining-pool`) seeking testers for mainnet and testnet; Java 21 required for Satergo integration, Java 17 for standalone pool.

---

## Technical Q&A Worth Preserving

**Seed & Mnemonic Storage**
- **Q** (@Aberg Satergo dev, msg#20283): Is the mnemonic phrase actually stored in the wallet, or only the derived private key?
  **A** (@kushti khushi, msg#20285): Seed derived from mnemonic is stored, not the mnemonic itself. The term "mnemonic" is now avoided because it suggests memorization is needed.

**Node Indexing Configuration**
- **Q** (@Flying Pig (™), msg#20498): What settings in conf enable node indexing? (GitHub has no mention)
  **A** (@Glasgow｜WON'T DM, msg#20500): See https://docs.ergoplatform.com/node/indexed-node/
  (@Flying Pig (™), msg#20502): Setting is `ergo.node.extraIndex = true`
  **A** (@Glasgow｜WON'T DM, msg#20505): `extraIndex` is incompatible with pruned node mode; must start fresh sync.

**Mining Pool Configuration**
- **Q** (@Aberg Satergo dev, msg#20310): What is the standard port for stratum mining pools?
  **A** (No explicit answer; context suggests 3333 is common, but not confirmed in thread)

- **Q** (@Aberg Satergo dev, msg#20664): Why does providing `miningPubKeyHex` in conf prevent the HTTP server from starting?
  **A** (@Pulsarz, msg#20668-674): Address must be in hex format via `utils/addressToRaw` endpoint, not base58.

- **Q** (@Aberg Satergo dev, msg#20676): Miner fails with "Miner is waiting for wallet initialization" even with external miner and hex address.
  **A** (@Aberg Satergo dev, msg#20681): User had accidentally set `useExternalMiner=false`; issue resolved when corrected to `true`.

**AppKit Version & Java Compatibility**
- **Q** (@Aberg Satergo dev, msg#20651): Should Java 21 projects use `ergo-appkit_2.12` or `ergo-appkit_2.13`? Is modularization complete to exclude ErgoScript parser?
  **A** (No explicit answer provided in chat segment; flagged as unresolved)

**Mempool Cleanup**
- **Q** (@Flying Pig (™), msg#20529): How to speed up mempool cleanup of invalidated transactions spending the same boxes?
  **A** (@Pulsarz, msg#20530-531): Adjust `mempool.cleanupDuration` (default 20m); set to 2m for recheck every block. Reference: https://github.com/ergoplatform/ergo/blob/85dfd1a39700ef4ff6a45766fc103e624873f652/src/main/resources/application.conf#L83C16-L83C16

**STuple Serialization**
- **Q** (@Unknown, msg#20450): `STuple` is undefined even when imported from `/serializer`
  **A** (@anon_br Σ, msg#20458): `STuple` was not being exported by serializer lib; fix pushed.

**Explorer API Issues**
- **Q** (@Aco Šmrkas, msg#20415): Is the official Explorer API down?
  **A** (@Pulsarz, msg#20422-425): Some instances are down; balances revert to old states, affecting Spectrum dApp which relies on Nautilus → GraphQL endpoint chain.

**Testnet Explorer Status**
- **Q** (@Aberg Satergo dev, msg#20646): Is `tn-ergo-explorer-api` dead?
  **A** (@HQΣr | Wont Dm 🐾 ⚡, msg#20647): Original developer stopped mainnet explorer; (@Aberg Satergo dev, msg#20648): Developer indicated testnet would remain, but appears to have changed plans.

**Transaction Fee Dynamics**
- **Q** (@Austen Milbarge // GreasyCEX, msg#20351): Would Ergo need higher flat fees (e.g., 0.002 ERG) instead of current 0.001 ERG when ERG price reaches $100?
  **A** (@Austen Milbarge // GreasyCEX, msg#20365): No explicit resolution; acknowledged the fee structure would need reevaluation at significantly higher token price.

**Node Database Corruption**
- **Q** (Implicit from context, msg#20843): How to recover from database corruption errors?
  **A** (@Pulsarz, msg#20843-845): Resync required; corruption usually caused by improper node shutdowns.

---

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.15]: Ergo protocol reference client 5.0.15 release notes

- [https://docs.ergoplatform.com/node/indexed-node/]: Official documentation for indexed node configuration

- [https://github.com/fleet-sdk/fleet/blob/d05b74df98079c7eaa88ef712543bd7bf0dc0dfd/packages/serializer/src/sigmaConstant.spec.ts#L224]: Fleet SDK test showing `STuple` usage

- [https://gql-testnet.ergoplatform.com/]: Testnet GraphQL endpoint

- [https://github.com/ergoplatform/ergo/blob/85dfd1a39700ef4ff6a45766fc103e624873f652/src/main/resources/application.conf#L83C16-L83C16]: Ergo node mempool configuration reference

- [https://github.com/Satergo/Satergo/tree/solo-mining-pool]: Satergo solo mining pool feature branch

- [https://github.com/Satergo/stratum4ergo]: Standalone stratum mining pool for Ergo

- [https://ergada.io]: Ergada Club invitation for developers

- [https://wixtoolset/wix3/releases/tag/wix3112rtm]: WiX 3 installer toolkit (required for building Satergo Windows installer)

---

## Unresolved Questions

- **AppKit modularization**: Can ErgoScript source code parser be excluded from Ergo AppKit builds? Which version (2.12 vs 2.13) should be used for Java 21 projects? (@Aberg Satergo dev, msg#20651-652)

- **Mining pool stratum port standard**: Confirmed discussion of whether standard port exists, but no definitive answer given (@Aberg Satergo dev, msg#20310)

- **Light testnet node sync**: Aberg reports light testnet node did not sync after finishing headers; unclear if architectural issue or specific configuration problem (@Aberg Satergo dev, msg#20760)

- **Explorer API state inconsistency**: Root cause of stale state being served by some Explorer instances remains undiagnosed; affects Spectrum and Nautilus integration (@Pulsarz, msg#20424-425)

- **Token directory verification**: Proposal for LP token verification checkmarks or sign on DEX tickers; no decision on implementation approach (@HQΣr | Wont Dm 🐾 ⚡, msg#20382)