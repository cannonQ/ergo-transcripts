# Ergo General Chat — 2022-W46 Summary

## Key Topics Discussed

- **Rosen Bridge Launch**: Bridge went live on Ergo and Cardano in soft launch mode on Nov 14. Framework enables multi-signature transactions across chains. Watchers monitoring both blockchains, creating commitments and payment transactions. Public release planned for coming weeks with at least two weeks of private testing required.

- **Babel Fees Implementation**: Transaction fee payment in alternative tokens (e.g., love token) now functional. MrStahlfelge planning automatic Babel fee detection in wallet app when user has insufficient ERG. TokenJay supporting creation of Babel fee boxes.

- **Node 5.0.3 Release**: Protocol Reference Client 5.0.3 released. Node 5.0 activation pending (approximately 20k blocks remaining at week's end). EIP-27 emission schedule change completed (extended tail emission, extending mining incentive timeline from ~8 years to ~40 years).

- **SigmaUSD and Dexy Stablecoins**: SigmaUSD (collateralized) and Dexy (seigniorage-based) positioned as separate stablecoin designs. Dexy Gold reference implementation in development. Both expected to coexist; community expects multiple stablecoin options on Ergo.

- **Storage Rent (Demurrage)**: Users need to consolidate UTXO boxes every ~4 years to reset storage rent timer. Simple transaction to self sufficient. Rent prevents blockchain bloat by incentivizing active wallet maintenance.

- **FPGA Mining Landscape**: At least 6 FPGA software implementations exist; approximately 20k FPGAs available but ERG not attractive option currently. Wolf9466 reports E300 at ~570MH/s (240W) and C1100 at ~190MH/s (85-90W). No threat to decentralization currently; GPU mining remains primary.

- **AppKit 5.0 and Fleet SDK**: AppKit v5.0 (Scala/Java) and Fleet SDK (TypeScript/JavaScript) provide similar functionality. Capt. Nemo implementing reduced transactions via sigma.js for mosaik-style off-chain code. Both support dApp development.

- **Ledger Integration Status**: Official Ledger Live integration still in development (reviewed by Ledger team; not in 1.0 state). Sideloading available on Nano S/S+ with custom Docker setup. Nano X cannot sideload. Alternative: second-hand phones (iPhone 6S at £75-80 or Samsung S5) as cold wallets with better cost/security profile than Ledger.

- **Cold Wallet Setup (Phone-based)**: Factory-reset old phone + Terminus/Ergo Wallet in airplane mode = offline signing device. Uses QR code exchange: hot phone generates unsigned TX QR → cold phone scans + confirms with seed → generates signed TX QR → hot phone broadcasts. Seed phrase written on paper as backup. Works for UTXO-based chains.

- **ErgoHack V Results & Transparency**: Community concerns raised about judging criteria and ErgoNames project evaluation (developed 7 months pre-hackathon, minimal work during event). Marketing planning release of feedback scores and evaluation details. Kushti notes personal ratings differed from announced results due to multiple judges' average. Forum discussion encouraged for challenge process.

- **DuckPools Lending Protocol**: GitHub repository published. Airdrop campaign launched. Development ongoing.

- **Spectrum DEX on Cardano**: Testnet progressing well. Will enable multi-chain dApp presence (Ergo + Cardano). Integration with Rosen Bridge planned for true multi-chain capability.

- **CyberVerse IDO Adjustments**: Token burning (unsold staker/seed rounds), 40% team token reduction, 80% advisor token reduction, 60% liquidity reduction announced due to lower-than-planned contributions in bear market.

- **Degenerate Options/SigmaBonds Protocol**: Cheese Enthusiast released ~80% complete decentralized P2P bond protocol supporting ERG/token/NFT collateralization. No UI planned; incentive structure for UI builders (0.4% fee via context variables). Awaiting Node 5.0 for full functionality.

- **Privacy & Midnight (Cardano)**: Charles announced Cardano privacy sidechain "Midnight" using Scorex, with "Dust" as native token. Discussion on whether Ergo could integrate similar privacy layer. Non-fungible NFTs require privacy L2 for true anonymity.

- **IPv6 Network Support**: Aberg requesting community nodes broadcast on IPv6 (zero currently available). Users with IPv6-only networks cannot join. Configuration via `scorex.network.declaredAddress` property.

## Important Decisions or Announcements

- [@kushti, msg#346470, 2022-11-17]: Expecting ~90% of AMA questions about SBF (FTX), hoping community focuses on Ergo updates instead
- [@CW, msg#346415-346420, 2022-11-17]: EIP-27 required 90%+ supermajority mining vote; total supply unchanged, emission method modified to extend miner incentives
- [@Glasgow, msg#346840, 2022-11-15]: Dexy uses seigniorage (alternative to SigmaUSD's collateralization); DexyGold first implementation; wants multiple stablecoins on Ergo
- [@Armeanio, msg#346309-346310, 2022-11-16]: Emphasizes first principles discussion important; open source benefits key differentiator vs. closed-source ecosystems
- [@MrStahlfelge, msg#346681, 2022-11-17]: Abandoned centralized token list consensus; now using TokenJay endpoint with decentralized verification protocol; wallet app users can change endpoints in expert settings
- [@CW, msg#346783, 2022-11-17]: Ergo Mini Summit scheduled for Saturday, Nov 26 showcasing ErgoHack V proposals and core team videos
- [@chrom, msg#346993, 2022-11-18]: SigmaBonds smart contracts released by Cheese Enthusiast; ~80% complete; requires Node 5.0

## Technical Q&A Worth Preserving

- **Q** (@713 Rajesh Dhiman, msg#347381): How to add ERG contract address to Trust Wallet?  
  **A** (@HQΣr, msg#347391): Discouraged; ecosystem has "plenty of good and trusted wallets" — Ergo wallets (Nautilus, Terminus, Minotaur) recommended instead.

- **Q** (@Michael (Walrus DAO), msg#345600): How to get list of NFT holders?  
  **A** (@qx(), msg#345605-346641): Ergo NFTs lack policy ID system; must search Ergo Explorer by token name or scrape issuing wallet transactions. Azorus dApp in alpha testing will enable UI-based querying by mint address and token name.

- **Q** (@Ian Lee, msg#346432): Does paper wallet QR code contain seed phrase?  
  **A** (@Unknown, msg#346437): No; QR is for scanning and sending. Seed phrase must be written separately on paper.

- **Q** (@SJ, msg#347354): Must transfer from KuCoin → hot wallet → cold wallet?  
  **A** (@Kallo Shaman, msg#347357-360): No. Cold device generates seed phrase and corresponding public address. Send directly from KuCoin to cold wallet's public address. Only cold device stores seed; hot device runs in read-only mode with public address only.

- **Q** (@SJ, msg#347339): Does cold wallet concept work for all coins/blockchains?  
  **A** (@Kallo Shaman, msg#347341-343): Works specifically for UTXO-based chains (Bitcoin, Ergo, Cardano). Account-model chains (Ethereum) differ. Ergo advantage: no need to download blockchain state to sign offline.

- **Q** (@johnjones, msg#347477): Is Samsung Galaxy J5 compatible for offline Android wallet?  
  **A** (@Unknown, msg#347479): Requires Android 7+. If J5 meets requirement, sideloading possible; otherwise incompatible.

- **Q** (@Unknown, msg#346878): Should different wallets derive addresses in same order from same seed?  
  **A** (@Haileypdll, msg#346879, @MrStahlfelge, msg#346896): Yes; all should follow BIP-44 standard for inter-wallet compatibility. Same seed should produce identical derived addresses across wallets.

- **Q** (@Kozz/Lejandao, msg#347016): How to check personal wallet ranking/average ERG holdings?  
  **A** (@Unknown, msg#347100): Use rankmywallet.com for wallet analysis (similar to Bitcoin rich lists).

- **Q** (@blake starky, msg#346709): Why aren't Ergo/ADA listed on Glassnode's "Active Addresses" chart?  
  **A** (@Unknown, msg#346909): Assets listed can bridge to BTC transaction model; unclear if Rosen Bridge completion will enable listing.

- **Q** (@Unknown, msg#346860): Transaction fails despite sufficient balance. First troubleshooting step?  
  **A** (@Gazza, msg#346865-867): Consolidate UTXOs; refresh page second.

## Links Shared

- [ergoplatform.org/en/news/Ergo-Launches-Rosen-Bridge-to-Cardano](https://ergoplatform.org/en/news/Ergo-Launches-Rosen-Bridge-to-Cardano): Official Rosen Bridge launch announcement
- [soft.rosen.tech/#/bridge](https://soft.rosen.tech/#/bridge): Rosen Bridge soft-launch interface (private testing only)
- [github.com/ergoplatform/ergo-jde/blob/main/kiosk/src/test/scala/kiosk/dexy/Dexy.md](https://github.com/ergoplatform/ergo-jde/blob/main/kiosk/src/test/scala/kiosk/dexy/Dexy.md): Dexy stablecoin specification
- [ergoforum.org/t/dexy-usd-simplest-stablecoin-design](https://www.ergoforum.org/t/dexy-usd-simplest-stablecoin-design/): Dexy protocol forum discussion
- [ergo.watch/emission](https://ergo.watch/emission): EIP-27 emission timeline and estimates
- [github.com/K-Singh/SigmaBonds](https://github.com/K-Singh/SigmaBonds): SigmaBonds (decentralized bond protocol) repository
- [duckpools/lending-protocol](https://github.com/duckpools/lending-protocol): DuckPools lending protocol GitHub
- [github.com/minotaur-ergo/minotaur-wallet](https://github.com/minotaur-ergo/minotaur-wallet): Minotaur multisig wallet (v1.1.0 with multi-sig notes)
- [youtube.com/watch?v=7q3Jq_OvhKY](https://www.youtube.com/watch?v=7q3Jq_OvhKY): Cold wallet phone setup tutorial (QR-based signing)
- [github.com/jpg-store/contract-v2](https://github.com/jpg-store/contract-v2): JPEGStore smart contracts (Cardano; open source)
- [my.ergoport.dev](https://my.ergoport.dev): Ergo/Cardano price spike/dip notifier (checks every 5 min, alerts on 10%+ changes)
- [github.com/ergoplatform/ergodocs](https://github.com/ergoplatform/ergodocs): Ergo documentation repository (open for PRs)
- [ergoplatform.org/en/ecosystem/#Roadmap](https://ergoplatform.org/en/ecosystem/#Roadmap): Ergo ecosystem roadmap
- [youtu.be/644P1Yc9EBQ](https://youtu.be/644P1Yc9EBQ): Weekly Developer Update video (Nov 20, 2022)

## Unresolved Questions

- **Ledger Official Integration Timeline**: No specific release date confirmed; still under Ledger review. Community frustrated (~1 year+ of discussions). Status: awaiting Ledger's decision and resources.

- **Cold Wallet Documentation Format**: @Kallo Shaman offered to document phone-based cold wallet setup; @HQΣr requested written documentation instead of video-only. @MrStahlfelge notes schema graphic would help. Status: documentation in-progress, graphic design needed.

- **Mobile Wallet UI Redesign**: Design proposal by Nadi exists (from July 17); @MrStahlfelge prefers default iOS elements but open to polishing. @HQΣr offered to create "much simpler, clean and useful" design with NFT/dApp integrations. Status: design discussion ongoing; limited developer capacity for UI work vs. core features (dApp support prioritized).

- **Storage Rent Edge Cases (EIP-33)**: Concerns raised about security implications for unique token collections facing storage rent. No solution announced. Status: TBD.

- **ErgoHack V Judging Transparency**: @Pavel C. formally requested evaluation scores and judge comments for projects. @Glasgow confirmed marketing article forthcoming; judges' reasoning not yet public. Status: evaluation details pending publication.

- **Nym Integration / Hawala**: @Abu Salih proposed Nym (privacy project) integration; mainnet launched in 2022. @Glasgow notes mx interested since 2020. Status: no commitment or roadmap item announced.