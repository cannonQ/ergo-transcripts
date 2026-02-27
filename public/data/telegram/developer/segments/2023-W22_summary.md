# Ergo Developer Chat Summary — 2023-W22
**Period:** 2023-05-29 to 2023-06-04  
**Participants:** 8 (Aberg, Aco, HQΣr, Luivatra, koukarin, kushti, qx(), Unknown)  
**Message Count:** 54

---

## Key Topics Discussed

- **Mobile Wallet URI Scheme for Token Transfers**  
  Discussion of proper ErgoScript URI format for sending ERG and tokens via mobile wallets. Correct syntax is `ergo:recipientaddress?amount=X&token-TOKENID=AMOUNT`, with pagination required for API queries.

- **Ergo Explorer Development**  
  Aco released updates implementing issued token lists, block/token detail views, and search by token ID and block ID. Roadmap includes NFT previews, improved smart contract transaction visualization, and light theme support.

- **Comet dApp Updates**  
  Offchain bot template and ErgoAuth (mobile wallet) integration in development. Experimental Babel fee mechanism allowing sigmaUSD swaps via UTXO state transitions; code to be open-sourced.

- **ErgBass Token Mechanics**  
  Community completed first three fishing pond rounds. Max catch per cast reduced to 0.0077777 with halving implemented. All Sigma rewards (minus dev fee) locked in Spectrum LP for 100 years.

- **Ergo Protocol v5.0.11 Release**  
  [@kushti khushi, msg#14063, 2023-06-01]: Reference client release published.

- **Satergo Integration Considerations**  
  [@Aberg, msg#14065]: Evaluating node index support for Satergo compatibility; awaiting feedback on specific issues.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#14063, 2023-06-01]: Ergo protocol reference client version 5.0.11 released — https://github.com/ergoplatform/ergo/releases/tag/v5.0.11

- [@Unknown, msg#13972, 2023-05-31]: Comet project shipping ErgoAuth tutorial (mobile wallet support) next week; Babel fee mechanism for sigmaUSD→ERG swaps entering user testing phase.

- [@Unknown, msg#13973, 2023-05-31]: ErgBass fishing pond: max catch per cast set to 0.0077777; halving mechanism implemented; Spectrum LP locked 100 years.

- [@Aco Šmrkas, msg#13955, 2023-05-31]: Ergo Explorer development update — token list, block/token details, and search-by-ID implemented; NFT previews and light theme in roadmap.

---

## Technical Q&A Worth Preserving

- **Q** (@koukarin - Σ, msg#13916): How to construct mobile wallet URI for token transfers similar to ERG-only syntax?  
  **A** (@Aberg, msg#13921): Use format `ergo:recipientaddress?amount=X&token-TOKENID=AMOUNT` (first amount is always ERG, optional `&description=` supported).

- **Q** (@HQΣr, msg#13928): Can API limit for address transactions be increased beyond 500?  
  **A** (@Aberg, msg#13929): Use pagination via `?page=X&limit=500` parameters per API docs.

- **Q** (@HQΣr, msg#14034): Can node be run locally as backup if public API goes down?  
  **A** (@HQΣr self-resolved, msg#14034): Feasible but requires adequate hardware; exploring as contingency.

- **Q** (@Luivatra, msg#14020): Does FleetSDK already support URI scheme construction?  
  **A** (@Aberg, msg#14035): Library is outdated; FleetSDK preferred alternative (developed by Nautilus maintainer).

- **Q** (@Luivatra, msg#14092): How is operator fee vs. miner reward distributed in offchain bot?  
  **A** (@Luivatra, msg#14092): Smart contract enforces maximum; bot operator decides split between miner and operator share.

---

## Links Shared

- [https://medium.com/@ergexplorer/erg-explorer-development-update-charting-the-course-75062b6f291c]: Erg Explorer development update — token lists, block details, search-by-ID implemented.

- [https://github.com/AcoSmrkas/ErgExplorer]: Erg Explorer open source repository.

- [https://github.com/fleet-sdk/fleet]: FleetSDK repository (recommended for mobile URI/transaction construction).

- [https://github.com/ThierryM1212/blobs-topia/blob/main/front-end/src/ergo-related/explorer.js]: Explorer integration example code.

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.11]: Ergo protocol reference client v5.0.11 release.

- [https://testnet.ergoplatform.com/en/transactions/9c241a0703147d6595082da918e3f0c176096e4ce07704526b7c9d4adcb3d190]: Example testnet transaction.

- [ErgBass.xyz]: ErgBass redesigned site with token charts and fishpaper.

---

## Unresolved Questions

- Spectrum DEX API endpoint for token swaps (`/v1/history/order`) returned 404; status unclear [@HQΣr, msg#13934].
- Ergo.watch API stability ongoing issue [@HQΣr, msg#13956, 2023-05-31].
- Node index support for Satergo pending feedback on specific compatibility issues [@Aberg, msg#14065].
- Exact halving schedule for ErgBass fishing pond not detailed in chat; reference to forthcoming "fishpaper update."