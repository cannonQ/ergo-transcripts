---
title: "Ergo Developer Chat — 2023-W23"
date_start: "2023-06-05"
date_end: "2023-06-11"
type: telegram_weekly
channel: developer
week: "2023-W23"
source: telegram
message_count: 70
categories: [wallet, ecosystem, defi, technical, community]
key_terms: [Satergo, ErgoPay, beta, dApp integration, testing, Yoroi, wallet recovery, seed phrase, password decryption, Erg Explorer, smart contracts, NFT previews, token search, UI improvements, DuckPools, contract testing, Ergo v5, proxy contracts, refunds, indexed node API]
---
# Ergo Developer Chat Summary — 2023-W23
**Period:** 2023-06-06 to 2023-06-10  
**Participants:** 9 developers (Aberg, Aco, HQΣr, qx(), kushti, Luivatra, Koutelier, Flying Pig, Unknown)

---

## Key Topics Discussed

- **Satergo wallet ErgoPay integration**: [@Aberg, msgs #14131–14133] Released beta test version with ErgoPay support for dApp/DeFi interaction (Spectrum, Ergopad, etc.). Running from source; ergopay link handling requires manual copy-paste into Satergo window.

- **Yoroi Ergo wallet recovery tool**: [@Aberg, msgs #14130, #14150, #14152] Published tool to help users with broken Yoroi wallets recover funds using spending password, decrypt wallet seed, and transfer to new wallet. Addresses Yoroi's complete Ergo functionality breakdown.

- **Ergo Explorer development**: [@Aco, msg #14135] Smart contract transaction summaries, NFT previews, token icon integration, and improved search. Raffle fully funded. Next: better token search filtering and advanced options.

- **DuckPools contract testing**: [@Unknown, msg #14149] Halfway through testing checklist after overcoming Ergo v5 limitations, contract redesign, and refund proxy issues. Private testing to follow once checklist complete.

- **All-addresses API endpoint problem**: [@HQΣr, msgs #14156–#14203] Needed comprehensive p2pk address list (currently ~850k addresses) to query Spectrum DEX order history, but ergowatch API caps at 10k. Explored alternatives: custom node scan, DEX addresses API endpoint on Spectrum repo.

- **Explorer database schema & SQL querying**: [@qx(), msgs #14206–#14223] Working on deduplicating address records and enabling direct database queries. Snapshot strategy: capture address balances every 3 days for ~2-week trend visibility.

- **UTXO size & contract design patterns**: [@kushti, msg #14261] Recommended pattern for multi-event contracts: store events in separate UTXOs labeled with NFTs; main contract enumerates NFT labels. Dexy bank uses this pattern to handle complexity within UTXO size limits.

- **Ethereum pre-merge layer-0 attack immunity**: [@kushti, msg #14281] Ergo reference client immune to two novel attacks on ETC/EthPoW; uses no random PoW validation, different ghost sidechain processing, no master peer.

---

## Important Decisions or Announcements

- [@Aberg, msg #14131, 2023-06-06]: **Satergo ErgoPay beta released** — available on GitHub branch `ergopay`; requires Java 20 and Git; new release pending.

- [@Aberg, msg #14130, 2023-06-06]: **Yoroi Ergo Wallet Recover tool released** — addresses Yoroi's complete breakdown for Ergo; allows decryption via spending password.

- [@Aco, msg #14135, 2023-06-07]: **Ergo Explorer raffle fully funded** — community support successful; next priorities include advanced token search filters.

- [@qx(), msg #14228, 2023-06-09]: **All unique addresses dataset generated** (850k+) — published as CSV; schema discovery underway for filtered queries (e.g., min 0.01 ERG balance).

---

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg #14156): How to get all p2pk addresses to query DEX order history without 10k API limit?
  
  **A** (@Aberg, msgs #14160–#14161): Use indexed node API — paginate `/blockchain/transaction/range?offset=?&limit=?` to get all TX IDs, then fetch `/blockchain/transaction/byId/{txId}` and extract addresses from transactions.

- **Q** (@qx(), msg #14171): Is there a ranged UTXO API call available? Sorting all transactions is inefficient.
  
  **A** (@Aberg, msg #14172): Confirmed gap — no UTXO range endpoint exists currently. Direct database query recommended.

- **Q** (@HQΣr, msg #14181): Can I get a simple API endpoint returning all p2pk addresses as a string?
  
  **A** (@qx(), msg #14228, #14235): Generated dataset of 850k+ unique addresses; working on SQL schema to filter by balance (e.g., min 0.01 ERG).

- **Q** (@qx(), msg #14230): Where are table indices documented?
  
  **A** (@Flying Pig, msg #14251): Shared SQL example query (`contracts_TVL.sql`) as reference; note: full address scans will be slow. Can modify to include all addresses by removing last 4 filter lines.

- **Q** (@Luivatra, msg #14257): What's the max contract UTXO size?
  
  **A** (@Luivatra, msg #14257–#14258): Must stay below max UTXO size with room for registers. If needed, split contract logic across multiple UTXOs labeled with NFTs.

- **Q** (@kushti, msg #14261): How to handle contracts with many possible events?
  
  **A** (@kushti, msg #14261): Recommended pattern — store events in separate UTXOs labeled with NFTs; main contract enumerates NFT labels. Dexy bank implements this pattern.

---

## Links Shared

- [https://github.com/satsen/yoroi-ergo-wallet-recover](https://github.com/satsen/yoroi-ergo-wallet-recover): Yoroi Ergo wallet recovery tool for users with broken Yoroi instances.

- [https://github.com/Satergo/Satergo.git](https://github.com/Satergo/Satergo.git): Satergo wallet source; switch to `ergopay` branch for beta test (requires Java 20).

- [https://adoptium.net/temurin/releases/?version=20](https://adoptium.net/temurin/releases/?version=20): Java 20 installer for Satergo ErgoPay beta compilation.

- [https://medium.com/@ergexplorer/erg-explorer-development-update-above-and-beyond-d8ad095ac96b](https://medium.com/@ergexplorer/erg-explorer-development-update-above-and-beyond-d8ad095ac96b): Ergo Explorer development update (smart contracts, NFT previews, token icons, search improvements).

- [https://github.com/AcoSmrkas/ErgExplorer](https://github.com/AcoSmrkas/ErgExplorer): Ergo Explorer repository.

- [https://api.spectrum.fi/v1/docs/#operation/Orders%20history](https://api.spectrum.fi/v1/docs/#operation/Orders%20history): Spectrum DEX API documentation for order history queries.

- [https://appliedcrypto.ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/appliedcrypto/research/TavernaPaterson-SnappingSnapSync.pdf](https://appliedcrypto.ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/appliedcrypto/research/TavernaPaterson-SnappingSnapSync.pdf): Paper on layer-0 attacks on pre-merge Ethereum/ETC clients; Ergo ref client immune.

- [https://github.com/FlyingPig69/Ergo_Explorer_Queries/blob/main/contracts_TVL.sql](https://github.com/FlyingPig69/Ergo_Explorer_Queries/blob/main/contracts_TVL.sql): Example SQL query for explorer database (contracts + TVL); can be modified for all-addresses export.

---

## Unresolved Questions

- **API endpoint automation** [@HQΣr, msg #14238, #14240]: Request to create persistent API endpoint for all p2pk addresses that auto-updates with new addresses — @qx() flagged need to finalize SQL schema first.

- **Database schema documentation** [@qx(), msg #14230]: No formal table index reference found; team discovering schema through trial and SQL exploration.

- **Multi-parameter custom function issues** [@Luivatra, msg #14270]: Reported intermittent failures with multi-parameter functions in some cases; root cause undetermined.

---

## Context Notes

- **Activity level:** Moderate; development-focused with emphasis on tooling (wallet recovery, explorer, address APIs).
- **DuckPools progress:** Actively testing; v5 compatibility issues resolved but still on the checklist before private testing phase.
- **Community tooling:** Strong ecosystem work on recovery tools and data infrastructure (address snapshots, SQL queries) to support downstream dApp development.