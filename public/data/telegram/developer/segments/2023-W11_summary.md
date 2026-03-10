---
title: "Ergo Developer Chat — 2023-W11"
date_start: "2023-03-13"
date_end: "2023-03-19"
type: telegram_weekly
channel: developer
week: "2023-W11"
source: telegram
message_count: 57
categories: [defi, wallet, technical, nft, ecosystem]
key_terms: [Djed, SigmaUSD, Gresham's law, reserve assets, metastablecoin, liquidity pool, Ledger, developer mode, pending review, installation, approval timeline, storage rent, dust, bloat, UTXO, blockchain size, Satoshi wallet, oracle pool 2.0, XAU oracle, testnet explorer]
---
# Ergo Developer Chat Summary — 2023-W11
**Period:** 2023-03-15 to 2023-03-26  
**Participants:** 9 | **Messages:** 57  
**Activity Level:** Low-to-moderate; primarily technical Q&A and ecosystem updates

---

## Key Topics Discussed

- **Multiple Reserve Assets in Djed/SigmaUSD**  
  [@kushti, msg#11656–11658]: Gresham's law creates vulnerability when multiple reserve assets exist—tendency for "better" assets to be withdrawn, leaving only "worse" assets. Proposed solution: deploy separate single-asset Djed/SigmaUSD instances, then create a metastablecoin backed by a basket of these stablecoins with multi-asset liquidity pool mechanics to manage ratio drift.

- **Storage Rent Mechanism & Long-Dormant UTXOs**  
  [@Flying Pig, msg#11845–11849]: Analysis of ~307 boxes from Jul 2019–Jan 2020 totaling >13k ERG; one box contains 1,400 ERG (would take centuries to be collected by storage rent). Discussion of whether storage rent multiplier needed or if current design adequately prevents dust/bloat.

- **Ledger Integration for Ergo**  
  [@Glasgow, msg#11702; Flying Pig, msg#11703–11704]: Ergo now has full Ledger hardware wallet access; app installable without developer mode but shows "Pending review" in UI. Requires new Ledger review cycle to remove prompt from code.

- **Oracle Pool v2 & XAU Reserve Asset**  
  [@kushti, msg#11736]: Testnet explorer now displays state of XAU oracle pool powered by Oracle Pools 2.0.

- **Network Fork/Rollback Event**  
  [@kushti, msg#11758–11760]: 8 of 11 nodes affected by rollback; partial network received and then rolled back a block while other nodes did not.

- **Spectrum DEX API & Historic Price Data**  
  [@qx(), msg#11860–11867]: Spectrum's pool API provides historic price data via charts endpoint. Example: querying with epoch timestamp returns token count per 1 ERG for that period.

---

## Important Decisions or Announcements

- [@kushti, msg#11736, 2023-03-20]: **Testnet XAU Oracle Pool Live**  
  Oracle Pool v2 powering XAU reserve asset now visible on testnet explorer.

- [@Glasgow, msg#11702, 2023-03-18]: **Ledger Ergo App Fully Released**  
  Ergo app installable from Ledger store without developer mode; multiple users successfully installed.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#11663): What programming experience and languages are you familiar with?  
  **A** (@Unknown, msg#11665): Suggested contributing to FleetSDK as a path forward.

- **Q** (@HQΣr, msg#11728, 2023-03-19): Do SkyHarbor smart contracts respect Auction House royalties?  
  *(No explicit response recorded)*

- **Q** (@Flying Pig, msg#11845, 2023-03-25): Analysis: ~307 boxes from first 6 months of mainnet history (Jul 2019–Jan 2020) total >13k ERG; one contains 1,400 ERG. Is a storage rent multiplier needed for long-dormant boxes?  
  **A** (@Luivatra, msg#11848): Storage rent goal is to avoid dust and bloat; a 1k ERG box is neither dust nor bloat.

- **Q** (@Flying Pig, msg#11849): Isn't storage rent also meant to prevent "Satoshi-wallet" scenarios (1M BTC held and out of circulation)?  
  **A** (@Unknown, msg#11850): Primary purpose is to clean up waste UTXOs so the network doesn't get bogged down (UTXO set bloat, not blockchain size).

- **Q** (@Aberg, msg#11851, 2023-03-25): If collected UTXOs still exist in blockchain history, how does storage rent reduce "clutter"?  
  **A** (@Aberg, msg#11855): Clarified the distinction—storage rent targets UTXO set size, not historical blockchain bloat.

- **Q** (@Unknown, msg#11871, 2023-03-26): Why are wallet address rescan results showing balances across multiple addresses?  
  **A** (@Unknown, msg#11872, msg#11875): Multiple addresses active in wallet; must add all addresses from Nautilus address history to ensure proper balance aggregation.

- **Q** (@Aberg, msg#11689, 2023-03-17): What was Darkpool?  
  **A** (@HQΣr, msg#11691–11692): A game project (ergogames.io/darkpool).

---

## Links Shared

- [https://spreadly.org/](https://spreadly.org/): Spreadly—IDO platform discussed as potential Ergo launchpad during 2022 bull market; status unclear after market downturn.

- [https://www.ergogames.io/darkpool](https://www.ergogames.io/darkpool): Darkpool game project (no longer active).

- [https://airtable.com/shrqrpH9y9VRorS4J/tblw7wsOQj5Fb2UzA/viwtozCLZv7cRYFCi/recijl1tVAXaQBWJA](https://airtable.com/shrqrpH9y9VRorS4J/tblw7wsOQj5Fb2UzA/viwtozCLZv7cRYFCi/recijl1tVAXaQBWJA): Development status tracker (project in developer mode).

- [https://www.reddit.com/r/ergonauts/comments/11udwdm/ergo_has_full_ledger_access/](https://www.reddit.com/r/ergonauts/comments/11udwdm/ergo_has_full_ledger_access/): Reddit discussion of Ledger Ergo app full release.

- [https://tinyvg.tech/](https://tinyvg.tech/): TinyVG—proposed format candidate for on-chain NFTs.

- [https://testnet.ergoplatform.com/en/oracle-pool-state/dexyerg](https://testnet.ergoplatform.com/en/oracle-pool-state/dexyerg): Testnet explorer showing XAU Oracle Pool v2 state.

- [https://www.reddit.com/r/ergonauts/comments/xeke0b/discover_ergos_storage_rent_potential/](https://www.reddit.com/r/ergonauts/comments/xeke0b/discover_ergos_storage_rent_potential/): Storage rent analysis and rationale discussion.

- [https://api.spectrum.fi/v1/amm/pool/7d2e28431063cbb1e9e14468facc47b984d962532c19b0b14f74d0ce9ed459be/chart?from=1658000000000](https://api.spectrum.fi/v1/amm/pool/7d2e28431063cbb1e9e14468facc47b984d962532c19b0b14f74d0ce9ed459be/chart?from=1658000000000): Spectrum pool API historic price data (NETA/ERG example from mid-July onwards).

---

## Unresolved Questions

- **SkyHarbor & Auction House Royalties** (@HQΣr, msg#11728, 2023-03-19): Whether SkyHarbor smart contracts respect Auction House royalty enforcement—no answer provided.

- **Ledger "Pending Review" Prompt Removal** (@Flying Pig, msg#11704, 2023-03-18): Code-level prompt removal requires new Ledger review cycle; timeline uncertain (HQΣr joked "6 months" at msg#11705; Aberg replied "Optimist").

- **Storage Rent Multiplier for Ultra-Dormant Boxes** (@Flying Pig, msg#11846, 2023-03-25): Proposed idea of exponential/multiplier-based rent for boxes untouched for multiple collection periods—not formally addressed or rejected.

---

## Additional Notes

- Week had relatively low technical depth; most exchanges were clarifications and API documentation rather than protocol design discussions.
- Main substantive topic: multireserve stablecoin design via composable single-asset Djed/SigmaUSD instances (proposal by Bruno via kushti).
- No merge-mined sidechains, ErgoScript, or NIPoPoWs discussion this week.