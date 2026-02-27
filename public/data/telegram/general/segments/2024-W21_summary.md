# Ergo General Chat — 2024-W21 Summary

## Key Topics Discussed

- **ErgoHack VIII Launch & Prize Pool**: ErgoHack VIII ("Ergo as a Smart Layer") officially began 2024-05-24 with a substantial prize pool: $9k first place, $5k second, $4k third, plus 500 ERG from kushti's raffle (total 8,462 ERG raised), 100k RSN, and 1,000 CKB tokens from Nervos CKB for a special task on UTXO-based lending protocols. Registration extended through 2024-05-25. [@kushti khushi, msg#493767, 2024-05-24]; [@Ergo NEWS $ERG, msg#493749, 2024-05-24]

- **Binance Listing Application**: Ergo Foundation began formal application process to Binance under their new framework supporting small/medium-cap projects. Multiple applications submitted to Kraken, Coinbase, and Binance. [@Glasgow｜WON'T DM, msg#493226, msg#493421, msg#493425, 2024-05-21 to 2024-05-22]; [@Armeanio, msg#493416 et seq, 2024-05-22]

- **Rosen Bridge Multi-Sig Development**: Milestone 3 submitted for Cardano Catalyst Fund 11 covering multi-sig mechanisms via ECDSA/TSS for Ethereum and EVM bridges. [@CW, msg#493776, 2024-05-24]

- **Bitcoin Validation in ErgoScript**: kushti shared draft PR for Bitcoin PoW validation implementation in ErgoScript, advancing trustless Bitcoin relay capabilities on Ergo. [@kushti khushi, msg#493987, 2024-05-26]

- **"Forever Money" Narrative**: Community consensus-building around positioning Ergo as "Forever Money"—a blockchain with fixed supply (100M) and shrinking UTXO set over time, contrasting with Bitcoin's inflationary tail and Ethereum's unbounded supply. [@dayumbbbb, msg#493873 et seq, 2024-05-25]

- **Wallet Privacy and Spending Controls**: Discussion of wallet options; Minotaur Wallet noted for superior privacy-preserving spending controls vs. Nautilus, with Ergopay highlighted as smooth payment solution. [@Unknown, msg#493084, msg#493130, 2024-05-20]

- **ChainCash Development Request**: kushti solicited developers to build UTXO note spending transaction builder for ChainCash as ErgoHack project. [@kushti khushi, msg#493542, 2024-05-22]

- **Palmyra Token Launch Timing & Structure**: PALM token to be Cardano native asset (bridged to Ergo via Rosen Bridge) launching mid-2025. Compliance requirements drove pivot from Ergo Pad IDO to Cardano. 2-year vesting period noted. [@Glasgow｜WON'T DM, msg#493729 et seq, 2024-05-24]; [@Bye H8er, msg#493724-726, 2024-05-24]

- **Nervos CKB Partnership & Developer Concerns**: Nervos CKB contributed $1,000 USD bounty for UTXO-based lending protocol task within ErgoHack. Community debate over whether this represents resource dilution vs. productive cross-chain collaboration. [@Flying Pig (™), msg#493271, msg#493279, 2024-05-21]; [@Unknown, msg#493268-297, 2024-05-21]

- **CBDC Threat & Alternative Payment Systems**: Extended discussion on CBDCs approaching 6-month MVP milestone, emphasizing need for decentralized payment alternatives. Ergo positioned as hedge against monetary surveillance. [@Unknown, msg#493624-638, 2024-05-22]

- **UTXO-Based Lending Protocol Analysis**: Ergo NEWS published article contrasting UTXO vs. Account model for lending, highlighting DuckPools and SigmaFi as Ergo's advanced solutions. [@Ergo NEWS $ERG, msg#493687, 2024-05-23]

- **Sidechain Constructions for Bitcoin Integration**: kushti noted Anon_BR cooking trustless Bitcoin relay and Ergo sidechain relay explorations, continuing prior sidechains research. [@kushti khushi, msg#493537, msg#493538, msg#493540, 2024-05-22]

---

## Important Decisions or Announcements

- [@Glasgow｜WON'T DM, msg#493226, 2024-05-21]: Ergo Foundation began filling out Binance application form under new merit-based framework.

- [@CW, msg#493604, 2024-05-22]: Rosen Bridge Catalyst Fund 11 Milestone 1 completed (EVM/Ethereum bridging research and design); Milestone 3 (multi-sig mechanisms) submitted.

- [@Ergo NEWS $ERG, msg#493239, 2024-05-21]: Nervos CKB announced co-hosting ErgoHack VIII with $1,000 CKB prize pool for lending protocol task; Error404 (CKB DevRel) designated as mentor/judge.

- [@Ergo NEWS $ERG, msg#493749, 2024-05-24]: ErgoHack VIII prize pool finalized: $9k/$5k/$4k top prizes + 500 ERG raffle + 100k RSN + 1,000 CKB.

- [@kushti khushi, msg#493663, 2024-05-23]: Community member Itaggergaard completed Terminal TUI installer for Ergo nodes (reduces manual .conf editing).

- [@HQΣr | Wont Dm 🐾 ⚡, msg#493415, 2024-05-22]: Announced onchain ninja first lottery testing in CruxFinance Playground.

- [@Glasgow｜WON'T DM, msg#493421, msg#493425, 2024-05-22]: Kraken and Binance applications submitted; Coinbase application sent.

- [@kushti khushi, msg#493987, 2024-05-26]: Shared draft PR for Bitcoin PoW validation in ErgoScript ([GitHub PR #962](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/962)).

---

## Technical Q&A Worth Preserving

- **Q** (@Şerafettin Bayrakdar, msg#493170): Accidentally sent 417 CYPX more than required for Cyberverse login—how to recover tokens?
  **A** (@Unknown, msg#493180): Export seed phrase from ErgoTipperBot (via DM), restore in preferred wallet, send to any address; connect that wallet address to Cyberverse for in-game transfer. [@qx(), msg#493184, 2024-05-20]

- **Q** (@Aco Šmrkas, msg#493755): Is it possible to mint multiple tokens in a single transaction?
  **A** (@Pulsarz, msg#493757): No, but there is [GitHub issue #2013](https://github.com/ergoplatform/ergo/issues/2013) discussing pros/cons. [@Aco Šmrkas & @Pulsarz, 2024-05-24]

- **Q** (@Son Nguyen, msg#493649-655): Does Ergo Watch figure 197,198 represent all addresses holding Ergo? Are DEX addresses included?
  **A** (@HQΣr | Wont Dm 🐾 ⚡, msg#493652, msg#493656): Total addresses ~197k (including dust <0.01 ERG); ~26k unique DEX user addresses; ~26k estimated actual Ergo owners. [@Son Nguyen & HQΣr, 2024-05-23]

- **Q** (@Pulsarz, msg#493742-744): How to fetch transaction JSON for testnet with scripting details?
  **A** (@Pulsarz & @Luivatra, msg#493751-754): Transaction ID = box ID of first input; token ID needed; testnet explorer API returns extra metadata; cannot find public testnet node with extra indexing enabled. [@Pulsarz et al., 2024-05-24]

- **Q** (@Unknown, msg#493953, 2024-05-26): Can Ergo be used to tokenize real-world assets (RWA)?
  **A** (@Glasgow｜WON'T DM, msg#493954): Yes; refer to [EF RWA documentation](https://docs.ergoplatform.com/uses/rwa/). (Implicit response from resource link)

---

## Links Shared

- [Ergo Auctions](https://ergoauctions.org/new-item): NFT minting interface. [@qx(), msg#493059, 2024-05-20]

- [ErgoUtils Token Tool](https://ergoutils.org/#/token): Token creation/minting utility. [@qx(), msg#493059, 2024-05-20]

- [kushti's Twitter/X Bitcoin validation draft](https://vxtwitter.com/Luivatra/status/1792634980994052375): Working on Palmyra templates. [@kushti khushi, msg#493152, 2024-05-20]

- [Binance Project Applicant Framework](https://www.binance.com/en/support/announcement/calling-for-project-applicants-95b023902fef42e6a630425170460656): Official listing criteria & application portal. [@Z J, msg#493077, 2024-05-20]

- [Sigmanauts Mining DAO ErgoHack Fundraiser](https://x.com/Sigmanauts/status/1792794030662918438): Call for donations to ErgoHack additional prizes. [@qx(), msg#493196, 2024-05-21]

- [Ergo Raffle ErgoHack VIII Prize Pool](https://ergoraffle.com/raffle/show/91547b4f55a049553dc8629c246431dd904ed16565a1ed859b59f7cbe6e92514): kushti's 500 ERG raffle (70% funded by 2024-05-22). [@kushti khushi, msg#493389, 2024-05-22]

- [Sigmanauts Weekly Podcast](https://sigmanauts.com/podcast/): Listen to latest Ergo AMA/updates. [@Unknown, msg#493674, 2024-05-23]

- [Ergo Testnet Explorer Blocks](https://testnet.ergoplatform.com/en/): Public testnet block/transaction explorer. [@Pulsarz, msg#493737 et seq, 2024-05-24]

- [GitHub Issue #2013: Multiple Token Minting](https://github.com/ergoplatform/ergo/issues/2013): Technical discussion on batching token creation. [@Pulsarz, msg#493757, 2024-05-24]

- [ErgoHack VIII Official Site](https://ergohack.io/): Registration, task details, mentor/judge bios. [@CW, msg#493889, 2024-05-25]

- [Nervos CKB Developer Resources](https://github.com/ckb-ecofund/CKB-Developer-Resource/blob/main/README.md): Learning materials for UTXO lending task. [@Ergo NEWS $ERG, msg#493239, 2024-05-21]

- [Rosen Bridge Catalyst Fund 11 Milestone 3](https://x.com/RosenBridge_erg/status/1794155885167869974): Multi-sig (ECDSA/TSS) implementation for EVM. [@CW, msg#493776, 2024-05-24]

- [Bitcoin PoW Validation in ErgoScript (Draft PR #962)](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/962/files): Trustless Bitcoin validation code. [@kushti khushi, msg#493987, 2024-05-26]

- [EF RWA Documentation](https://docs.ergoplatform.com/uses/rwa/): Real-world asset tokenization guidance. [@Glasgow｜WON'T DM, msg#493954, 2024-05-26]

- [Ergo CBDC Use Cases](https://docs.ergoplatform.com/uses/cbdc/): Design patterns for CBDC alternatives. [@Glasgow｜WON'T DM, msg#493625, 2024-05-22]

- [EF Exchange Listing Scope & Requirements](https://docs.ergoplatform.com/ef/ef-scope/#exchange-listings): Formal listing criteria (volume, liquidity, MM engagement). [@Glasgow｜WON'T DM, msg#493352, 2024-05-22]

- [Itaggergaard's Ergo Node TUI Installer](https://github.com/Itaggergaard/Ergo-node-TUI-installer): Automated node setup without manual .conf editing. [@kushti khushi, msg#493663, 2024-05-23]

- [Ergo Weekly AMA/Update Stream](https://youtube.com/live/j-eD4xdXVE4): Thursday 1 PM UTC live Q&A. [@Ergo NEWS $ERG, msg#493669, 2024-05-23]

- [ErgoHack VIII Kickoff Interview (kushti & cannon_q)](https://youtu.be/RjcRMZOmPhg): Core developer discussion on Bitcoin smart layer vision. [@Ergo NEWS $ERG, msg#493818, 2024-05-25]

---

## Unresolved Questions

- **Exchange listing timeline**: Applications submitted to Binance, Kraken, Coinbase under respective frameworks (May 2024), but no official timeline or success indicators provided. [@Glasgow｜WON'T DM, msg#493351-358, msg#493421, msg#493425, 2024-05-22]

- **Rosen Bridge to Ethereum go-live date**: Referenced as "coming" and "around the corner" ([@Man ish, msg#493805, 2024-05-25]), but no confirmed mainnet launch date announced during this period.

- **Palmyra (PALM) token public sale details**: Confirmed mid-2025 launch as Cardano native asset, but specific sale format, pricing, and allocation remain TBD. [@Glasgow｜WON'T DM, msg#493729, 2024-05-24]; [@Spencer - a Space Wizard, msg#493962, 2024-05-26]

- **Block time reduction feasibility**: kushti acknowledged trade-offs (block height vs. timestamp dependencies, difficulty adjustment complexity) but deferred technical decision to community working group (no timeline provided). [@kushti khushi, msg#493537-538 et al., 2024-05-22]

- **Ergo Oracle Pool v2 (Dexy Gold) reward distribution model**: Referenced as "running for Dexy Gold with GORT rewards" but exact mechanics and launch timing unclear. [@Armeanio, msg#493419-420, 2024-05-22]

- **Nervos CKB Bitcoin Bridge Timeline**: Questioned but not answered during week. [@Man ish, msg#493348, 2024-05-22]

- **"Forever Money" positioning strategy**: Framed as community narrative, but no formal Foundation or marketing directive shared regarding institutional adoption of this messaging. [@dayumbbbb, msg#493873 et seq, 2024-05-25]

- **Gate.io suspicious trading activity**: Multiple users reported 2% +/- spreads and fake liquidity on Gate; cannon_q acknowledged cannot verify/login personally; no technical investigation or exchange response documented. [@cannon_q, msg#493714, msg#493717, msg#493931; @DrTwentyOne, msg#493715, 2024-05-23]

---

**Archive Status**: Week 2024-W21 contained significant ecosystem activity (ErgoHack VIII launch, Binance listing applications, Rosen Bridge progress, Bitcoin validation draft). Community discourse reflected maturing narrative positioning ("Forever Money") and healthy skepticism toward centralized exchange practices. No critical protocol issues or breaking changes announced.