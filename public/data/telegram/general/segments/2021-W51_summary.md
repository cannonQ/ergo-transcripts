# Ergo General Chat Summary — Week 2021-W51

## Key Topics Discussed

- **Emission Soft Fork Proposal**: Miners voted on extending ERG emissions from ~6 years to ~18 years. Community discussion focused on block height vs. timestamp dependencies, timing of reduction phases, and miner voting thresholds (90% required to avoid chain split). Poll showed sentiment favoring shorter extension options.

- **Exchange Listings**: Team actively working with CoinSwitch Kuber, WazirX, and CoinCDX to meet their requirements. Discussions noted WazirX is Binance subsidiary; unclear if shared liquidity exists. NDA prevents date disclosure but foundation committed to multi-tier listing strategy.

- **Ledger Integration**: Development side completed; awaiting Ledger team approval. Community expressed frustration as this has become most-requested feature after Twitter tipper bot and Djed stablecoin.

- **iOS Ergo Wallet Release**: MrStahlfelge released iOS wallet v1.0 via TestFlight (ergoplatform.org/en/mobile_wallets/). Android wallet already available. Both are light clients using remote nodes, not full nodes.

- **Susy Bridge (Solana ↔ Ergo)**: Technical integration progressing; 7-10 day timeline to mainnet deployment pending oracle finalization and guardian arrangement (3 Ergo side, 3 Solana/Susy side). Address format VAA adaptor being built by Susy.

- **ErgoHack III Announcement**: Privacy & Security themed hackathon; deadline Jan 31. Community brainstorming included improved mixer UX, verifiable credentials, zero-knowledge protocols in ErgoScript.

- **Storage Rent & Mining Post-Emission**: Confirmed miners will earn from transaction fees and storage rent after emissions end (~2080800 block height). Discussion on economic sustainability and re-emission contracts flagged as future consideration.

- **SigmaUSD / Dexy Stablecoin Ecosystem**: SigmaRSV risk distribution and scarcity discussed; Dexy protocol expected to provide additional stablecoin option. Lending/borrowing and bridges identified as needed for sigUSD utility expansion.

- **ErgoDex Status**: Technical updates shared; dApp connector obsolete (integrated into Yoroi Nightly). Transaction signing UI bug on nightly build documented (zoom-out workaround: Win + -).

- **Sigma Valley Metaverse NFT Project**: Community-driven DAO-style NFT land marketplace launched mid-week; model: buy NFTs and upload custom 3D models on map.

## Important Decisions or Announcements

- [@kushti, msg#240000, 2021-12-23]: Confirmed data storage on eUTXO level (boxes); up to 4kb typed data per box. Transactions aggregate inputs from different owners.

- [@Glasgow, msg#239071 + msg#240162, 2021-12-20]: Hindi translation of Manifesto available at ergonaut.space/hi-in/home. Updated emission schedule posted; recommend ergo.watch/emission for exact figures.

- [@MrStahlfelge, msg#239679 & msg#239682, 2021-12-22]: iOS Ergo Wallet TestFlight link updated; preview text now available (was Android-only). Download via ergoplatform.org/en/mobile_wallets/

- [@Andy L, msg#240087, 2021-12-23]: Christmas AMA scheduled Dec 24, 13:00 UTC (YouTube: Ergo Platform channel). Christmas-themed questions encouraged.

- [@Glasgow, msg#240085 + msg#240215, 2021-12-23]: Community sentiment poll on emission options completed. Shortest extension option (to ~18 years) won. Miner vote expected ~1 month out.

- [@MHS_SAM, msg#239846, 2021-12-22]: Testnet node sync issue resolved; outdated miner fixed. Testnet faucet operational again.

- [@Dani, msg#240664, 2021-12-26]: ErgoHack III registration video released (YouTube).

- [@Armeanio, msg#239177 & msg#239184, 2021-12-20]: Actively negotiating with Indian exchanges (CoinSwitch Kuber, WazirX, CoinCDX); listing requirements documented internally but timing confidential.

- [@Glasgow, msg#239833, 2021-12-22]: New Telegram for developers launched: https://t.me/ErgoDevelopers (bridges Discord eventually).

- [@Ron, msg#240479 & msg#240482, 2021-12-25]: Ergo Merch store (ergomerch.com) relaunched. Erdoge.biz updated for first time in months (warning: "do not buy").

- [@J (TheRealErgoGod), msg#240485 onwards, 2021-12-25]: Distributed ~75+ ERG in 25-ERG tips to active community members on Christmas; emptied tip wallet by end of day.

## Technical Q&A Worth Preserving

- **Q** (@Ilya, msg#240175): Is there a way in Ergo to have metadata transactions on a blockchain, similar to Cardano?
  **A** (@kushti, msg#240417): Data storage is done on boxes (outputs/UTXO) level, allowing individual control. Up to 4kb of typed data can be stored in a box. Transactions aggregate inputs from potentially different owners.

- **Q** (@Sheen, msg#239652): What is NIPoPoWs short for?
  **A** (@theodork, msg#239653): Non-Interactive Proofs of Proof-of-Work.

- **Q** (@Sheen, msg#239823): Is it a realistic goal for this project to overtake Ethereum's dominance?
  **A** (@Unknown, msg#239827): Ergo was built with L2 solutions in mind. (@Gazza, msg#239828): Transaction fees are set by miners via voting (no gas); eUTXO is lighter on-chain and hence more scalable.

- **Q** (@Aberg, msg#239789 onwards): Testnet ERG faucet not working.
  **A** (@MHS_SAM, msg#239846): Testnet nodes weren't including transactions due to outdated miner. Fixed by deploying current miner to testnet; faucet operational again.

- **Q** (@Dani, msg#240430): How does "chaining" of contracts work as mentioned in Whitepaper?
  **A** (@Armeanio, msg#240431-432): Chaining is batching transactions into single block; enables complex contract execution. ErgoDex transaction bot already implements this pattern. This was Ergo's solution before Cardano's concurrency debate.

- **Q** (@PalaZ, msg#240796): Can ERG be burned?
  **A** (@Armeanio, msg#240801): Burn mechanism could be set up intentionally, but ERG is recycled via storage rent instead of permanently removed from circulation.

- **Q** (@Andrew, msg#239940-941): Transaction rejected when swapping ERG to SigRSV via dApp connector.
  **A** (@Gazza, msg#239992): dApp connector is obsolete; use Yoroi Nightly which has integrated connector. Workaround: clear browser cache, open Yoroi Nightly in separate tab, refresh page. Known UI bug on nightly: zoom out (Win + -) to see transaction signing window.

- **Q** (@Ordep, msg#239739): Stuck on "sign transaction" in ErgoDex via Yoroi Nightly.
  **A** (@Glasgow, msg#239744): Zoom out (Win + -) to reveal signing UI. (@Gazza, msg#239748): Or manually pull down TX signing window from bottom.

- **Q** (@Slobafrancuz, msg#239687 onwards): 5 ERG sent from mining pool to Hotbit address; payment shows confirmed but not received.
  **A** (@Glasgow, msg#239693 & #239707): Verify address matches exactly (copy from Hotbit deposit, paste in pool). Open support with Hotbit. Check blockchain for TXID on ErgoExplorer. If no TXID found, contact sending platform (mining pool).

- **Q** (@Unknown, msg#240168): Can token supply be minted in multiple tranches using ErgoUtils? (Like SLP mint capability)
  **A**: No direct answer provided; complex tokenomics question remains open.

## Links Shared

- [ergoplatform.org/en/wallets/](https://ergoplatform.org/en/wallets/): Official wallet guide
- [ergoplatform.org/en/blog/2021-12-21-ios-ergo-wallet-how-to-guide/](https://ergoplatform.org/en/blog/2021-12-21-ios-ergo-wallet-how-to-guide/): iOS TestFlight setup
- [ergonaut.space/hi-in/home](https://ergonaut.space/hi-in/home): Hindi Manifesto translation
- [ergo.watch/emission](https://ergo.watch/emission): Real-time emission schedule
- [testflight.apple.com/join/MRyG2qfm](https://testflight.apple.com/join/MRyG2qfm): iOS wallet TestFlight link
- [reddit.com/r/ergonauts/comments/rlnw5p/community_chat_8pm_utc_this_thursday_emission/](https://reddit.com/r/ergonauts/comments/rlnw5p/community_chat_8pm_utc_this_thursday_emission/): Emission soft-fork community discussion thread
- [ergoforum.org/t/emission-soft-fork-proposal/2996/61](https://ergoforum.org/t/emission-soft-fork-proposal/2996/61): Technical emission proposal with formula details
- [reddit.com/r/ergonauts/comments/rfrq6g/apply_for_the_sigmanaut_training_programme_help/](https://reddit.com/r/ergonauts/comments/rfrq6g/apply_for_the_sigmanaut_training_programme_help/): Sigmanauts application form
- [discord.gg/EC25ZVSz](https://discord.gg/EC25ZVSz): Ergo Developer Discord (legacy link)
- [discord.gg/SnTHHkcR6x](https://discord.gg/SnTHHkcR6x): Ergo Developer Discord (current)
- [t.me/ErgoDevelopers](https://t.me/ErgoDevelopers): Ergo Developers Telegram
- [t.me/ergodex_community](https://t.me/ergodex_community): ErgoDex Community Telegram
- [sigmaverse.io/](https://sigmaverse.io/): Ergo dApp & project directory
- [ergoplatform.org/en/blog/2021-11-24-roadmap/](https://ergoplatform.org/en/blog/2021-11-24-roadmap/): Official roadmap
- [ergonaut.space/en/roadmap](https://ergonaut.space/en/roadmap): Community roadmap resource
- [ergonaut.space/en/Mining](https://ergonaut.space/en/Mining): Mining guide with technical links
- [ergonaut.space/en/sigma-protocols](https://ergonaut.space/en/sigma-protocols): Sigma Protocols & scripting documentation
- [docs.ergoplatform.org/uses/lottery/](http://docs.ergoplatform.org/uses/lottery/): Lottery dApp template
- [dav009.medium.com/learning-ergo-101-blockchain-paradigm-eutxo-c90b0274cf5e](https://dav009.medium.com/learning-ergo-101-blockchain-paradigm-eutxo-c90b0274cf5e): eUTXO paradigm explainer
- [dav009.medium.com/learning-ergo-101-development-workflow-aa17dd63ef6](https://dav009.medium.com/learning-ergo-101-development-workflow-aa17dd63ef6): Development workflow guide
- [github.com/Balbin-Labs/ergodomainservice-backend](https://github.com/Balbin-Labs/ergodomainservice-backend): Sigma Domains (.erg address service) project
- [github.com/ergoplatform/sigma-rust/pull/511](https://github.com/ergoplatform/sigma-rust/pull/511): Sigma-Rust data type exposure PR (Susy Bridge)
- [youtube.com/watch?v=HlEZOm61oMY](https://youtube.com/watch?v=HlEZOm61oMY): Ergo Platform AMA Dec 24, 13:00 UTC
- [youtube.com/watch?v=5UL0tvnCTu0](https://youtube.com/watch?v=5UL0tvnCTu0): ErgoHack III announcement video
- [ergoauctions.org](https://ergoauctions.org): Auction House (NFT & token sales)
- [app.ergodex.io](https://app.ergodex.io): ErgoDex AMM DEX interface
- [sigmavalley.org](https://sigmavalley.org): Sigma Valley metaverse project
- [ergomerch.com](https://ergomerch.com): Ergo merchandise store
- [erdoge.biz](https://erdoge.biz): Erdoge meme token (warning posted mid-week)

## Unresolved Questions

- **Storage rent mechanism & sustainability**: Discussion of how storage rent will incentivize miners post-emission remains theoretical; no formal implementation timeline given.

- **Ledger timeline**: Community frustration ongoing; exact approval date from Ledger team unknown. Last status: "waiting on Ledger side for approval" (msg#240013, msg#240341).

- **Solana Bridge VAA adaptor**: Susy team building custom ERG address handler; deployment timeline 7-10 days stated but dependent on guardian coordination (non-technical delays possible).

- **Token metadata on Ergo**: Question raised whether Cardano-style on-chain transaction metadata possible; answer clarified storage is at UTXO level with 4kb limit, but use-case comparison not fully addressed.

- **Emission re-evaluation cadence**: Proposal extends to ~18 years, but mechanism for re-voting if conditions change not documented.

- **Hardware wallet (Trezor)**: No active development mentioned; Ledger integration takes priority.

- **Certified / verified token standard**: Discussion of token verification tool for fraud prevention flagged as potential ErgoHack III submission but not formalized.

- **Network upgrade timeline for microblocks / L2 sidechains**: Speed improvement ideas discussed (microblocks, sidechains) but no concrete roadmap or PoC timeline communicated.

---

**Message Count**: 1,298 | **Participants**: 121+ | **Week Sentiment**: Positive (holiday cheer, major release, bridge progress, community gifting)