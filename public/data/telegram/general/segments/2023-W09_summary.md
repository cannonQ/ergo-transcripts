# Ergo General Chat — 2023-W09 Summary

## Key Topics Discussed

- **Spectrum DEX vs. Machina Finance vs. SigmaFi**: Clarification that Spectrum is a DEX, SigmaFi is a lending/DeFi protocol, and Machina Finance is a peer-to-peer DEX concept still in planning. ([@HQΣr, msg#370262])

- **Version 5.0 Performance**: Discussion that the major gain in 5.0 was optimization for complex transactions rather than raw TPS. Current load is ~6k transactions/day, with theoretical capacity to fit an entire day's transactions in a single block if max cost is increased. ([@Luivatra, msgs#370293–370297])

- **Rosen Bridge Status & Timeline**: Stress testing passed; malicious edge cases under testing. Public testnet launch expected ~2 weeks from Mar 1 (so mid-March). Beta fee is 10%, likely to be reduced for mainnet. EVM chain connectors (Ethereum, rollups) planned after Cardano connector. ([@HQΣr, msg#370693]; [@Glasgow, msg#370998])

- **UTXO Snapshot & NIPoPoWs**: Kushti demonstrated bootstrapping a full node on a mid-spec laptop in ~30 minutes using UTXO snapshot. NIPoPoWs expected within ~2 months. This will enable light-client security on limited devices. ([@Gazza, msgs#370299, 371303]; [@qx(), msg#370602])

- **SigmaUSD/SigmaRSV Reserve Status**: During reserve ratio below 400%, secondary market premiums/discounts appear on Spectrum DEX (10–15% SigmaRSV discount, 6–7% SigmaUSD premium observed). Discussed trustworthiness vs. opaque stablecoins; over-collateralized and open-source. ([@Thomas Eh, msg#370369]; [@qx(), msg#370371])

- **ErgoScript & eUTXO Conceptual Model**: Developers clarified that ErgoScript is a guard script (evaluates to true/false), not deployed like EVM contracts. All possible scripts already "exist"; boxes with script guards are created only when UTXOs are sent to that address. Understanding eUTXO model is more important than ErgoScript syntax. ([@Pulsarz, msgs#371065–371071]; [@Luivatra, msg#371073])

- **Box Data Limits**: Confirmed max box size is 4 KB (not 100 KB as initially asked). ([@theta decay, msg#371151]; clarified by conversation context)

- **Djed (Cardano Stablecoin) Flash Crash FUD**: Reports of Djed dropping to $0.12 were false or limited to DEX LP slippage events. Djed itself remains over-collateralized; no actual peg failure occurred. ([@Luivatra, msg#371057]; [@Glasgow, msg#371084])

- **Binance Listing Costs & Strategy**: Community discussion that Binance does not charge listing fees but requests charitable donations (amount undisclosed). Ergo Foundation has limited treasury (~4% of total supply allocated). Cross-chain bridge strategy (via Rosen Bridge to Cardano, then to CEXes) positioned as alternative to direct CEX listings. ([@Glasgow, msg#370921]; [@HQΣr, msg#370845])

- **Storage Rent Mechanism**: Users clarified that wallets without spending password or seed phrase recovery are effectively donations to miners via storage rent—no access mechanism exists. ([@CW, msg#370449])

- **Fee Market & Spam Protection**: Discussion of mempool behavior during spam events: low-fee transactions eventually time out after 10–20–30+ blocks if not picked up. Reference client v4.0.44+ includes spam limits per peer. Node operators can raise minimum propagation fee rates to block spammers. ([@kushti, msgs#370319–370402])

- **Palmyra (formerly ZenGate) & Chainlink Integration**: Dan Friedman outlined on-chain warehouse receipts for decentralized trade financing, using Chainlink proof-of-reserve plus IoT sensors (camera, weight/motion sensors) to verify commodity deposits. Plans to invest in native Ergo Oracle Pools (v1 & v2) for future ecosystem use. ([@Armeanio / Dan, msg#370971 area context])

- **Auction House & Trade House**: qx() discussed benefits of order-book DEXes (Trade House) over AMMs (Spectrum): total transparency of depth, full slippage control, partial fills, peer-to-peer matching. Compared to MuesliSwap on Cardano. ([@qx(), context around msg#370779])

- **Minotaur Wallet Multisig**: Secret data storage during multisig process improved—UI refresh pending to allow closing communication page without losing state. ([@HQΣr, msg#370739])

- **Sidechaining & Merged Mining**: kushti discussing BIP 301–style sidechain constructions, merge-mined sidechains, and trustless pegging mechanisms. Better security properties than Bitcoin's BIP 301 approach due to smart contract verification. ([@kushti, context in #370299+])

- **Community Marketing & Accessibility**: Debate on whether Ergo's accessibility (wallet setup, dApp interaction) differs from other chains. Consensus: Ergo is equally accessible; barrier is user education, not technical complexity. Community members highlighted low CEX accessibility vs. strong DEX + non-custodial tooling. ([@qx(), @Glasgow, msgs#370732–370786])

- **Paideia DAO Toolkit**: Discussed as on-chain business automation and auditing tool; positioned alternative to traditional corporate structures. ([@CW, msg#370566])

- **Batch Conversion & Swapping Flows**: Users struggled with multi-step conversion (ADA → USDT → ERG) on centralized exchanges like KuCoin; differences in UX vs. simple Yoroi delegation noted. ([@Unknown, msgs#371311–371354])

---

## Important Decisions or Announcements

- **ErgoHack VI: Cypherpunk Finance Community Vote Live** ([@CW, msg#371150, 2023-03-03]): 1000 ERG prize pool (500/300/200 split), voting closes Mar 13, 12 PM UTC. Voting anonymous, max 3 selections.

- **ErgoPad x Grand Gambit Partnership** ([@Grand Gambit, msg#371125, 2023-03-03]): ErgoPad now listed at Grand Gambit; joint giveaway campaign launched.

- **Weekly AMA Schedule** ([@CW, msg#370897, 2023-02-28]): Thursdays 1 PM UTC, YouTube + Twitter Spaces broadcast. Hosts include Armeanio and Dan Friedman.

- **Rosen Bridge Public Testnet ETA ~2 weeks** ([@HQΣr, msg#370693, 2023-03-01]): Private stress testing passed; tokenomics in progress; server configuration pending.

- **Nautilus Wallet Update Pending** ([@HQΣr, msg#370739, 2023-03-01]): Multisig secret data persistence in DB, UI improvements coming soon.

- **Yoroi Support Ending Mar 28, 2023** ([@CW, msg#370450, 2023-02-28]): Users advised to migrate funds off Yoroi; no exact time announced.

- **Lithos Protocol (formerly LETS) Telegram Revival** ([@HQΣr, msg#371414, 2023-03-05]): @LITHOS_Protocol channel restored.

- **Sigs Meeting with Open Community Agenda** ([@qx(), msg#371355, 2023-03-04]): Invitation for community input on agenda items; voting member onboarding discussed.

---

## Technical Q&A Worth Preserving

- **Q** (@TMR.ΣRG, msg#370284): How has performance improved since version 5.0?
  **A** (@Luivatra, msg#370293): TPS is irrelevant; the biggest gain in 5.0 was optimization for complex transactions. Current system handles ~6k txns/day; entire day could fit in a single block if max cost increased.

- **Q** (@TMR.ΣRG, msg#370387): Is it possible to have a wallet that functions as single-user OR n-of-n multisig with social recovery?
  **A** (@TMR.ΣRG, msg#370398): n-of-n preferred because signers don't need to know about each other. Time-lock risky due to accidental triggers and urgency conflicts.

- **Q** (@Unknown, msg#370418): How do non-mining nodes help the network?
  **A** (@Unknown, msg#370427): Personal security benefit; near future Satergo will add ErgoPay integration for full node + DeFi usage.

- **Q** (@Cristian Nagy, msg#370568): Can I use ErgoMixer yet?
  **A** (implicit): Yes, documented at ergoplatform.org; GitHub available. (@CW provided links msg#370583–370585)

- **Q** (@Unknown, msg#370418): Does a non-mining node contribute to network resilience?
  **A** (@Unknown, msg#370431): Mainly fault tolerance. Satergo + ErgoPay integration will make full nodes more practical. (@Unknown, msg#370428)

- **Q** (@Pulsarz, msg#371065): How is ErgoScript actually deployed on-chain?
  **A** (@Pulsarz, msgs#371065–371071): ErgoScript is converted to ErgoTree, then to an address. You don't deploy it; you send a TX to that address with appropriate inputs and registers. All addresses on Ergo are scripts.

- **Q** (@Flying Pig, msg#371063): How do I deploy an ErgoScript contract once written?
  **A** (@Luivatra, msg#371073): All possible ErgoScripts already exist on-chain; they don't need deployment. A box with the script becomes "active" only when it receives a UTXO.

- **Q** (@Unknown, msg#371078–371079): How does deploying a guard script on UTXO work?
  **A** (implicit): Guard script verification happens when the box becomes an input in the next transaction. No "initial deployment" process; just send ERG to the script address.

- **Q** (@TMR.ΣRG, msg#371086): What is the data limit for a box?
  **A** (@TMR.ΣRG, msg#371087): 4 KB (not 100 KB). Confirmed: box size is 4 KB max. ([@theta decay, msg#371151] clarified further)

- **Q** (@Unknown, msg#371314): Is the UTXO snapshot the entire UTXO set without blocks/headers?
  **A** (@TMR.ΣRG, msg#371316): UTXO snapshot captures point-in-time state using selected block headers (NIPoPoWs). Headers allow verification of the full chain; you sync quickly without downloading all blocks.

- **Q** (@chrom, msg#370887): Will ADA staked on Cardano side still earn rewards when locked via Rosen Bridge?
  **A** (unresolved): Not discussed in detail; topic flagged as worth revisiting. ([@chrom, msg#370887])

- **Q** (@Flying Pig, msg#371406): If I mint an NFT image, where is it stored?
  **A** (@Glasgow, msg#371471): IPFS via Auction House, or on-chain if ≤4 KB. ([@Flying Pig, msg#371472] noted constraint)

- **Q** (@Wayan Adam, msg#371501): Is ERGO only supported on Ledger in dev mode, or normal ops now?
  **A** (unresolved): Not answered in chat; needs follow-up.

- **Q** (@Unknown, msg#370295): Have we tested the claimed ~50 TPS on Ergo yet?
  **A** (@TMR.ΣRG, msg#370296): Theoretically possible; we can fit an entire day's transactions in a single block. ([@Luivatra, msg#370297] caveat: requires max cost increase)

---

## Links Shared

- [https://ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/](https://ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/): Storage rent mechanism explainer. ([@CW, msg#370452])

- [https://ergoplatform.org/en/blog/2021-05-12-ergomixer/](https://ergoplatform.org/en/blog/2021-05-12-ergomixer/): ErgoMixer documentation. ([@Unknown, msg#370583])

- [https://github.com/ergoMixer/ergoMixBack](https://github.com/ergoMixer/ergoMixBack): ErgoMixer backend source. ([@Unknown, msg#370584])

- [https://youtu.be/xutGmZ-4sWk](https://youtu.be/xutGmZ-4sWk): ErgoMixer video tutorial. ([@CW, msg#370585])

- [https://vitalik.eth.limo/general/2023/02/28/ux.html](https://vitalik.eth.limo/general/2023/02/28/ux.html): Vitalik post on UX; community noted Ergo addresses most points. ([@TMR.ΣRG, msg#370389])

- [https://t.me/sigmafi](https://t.me/sigmafi): SigmaFi Telegram. ([@Glasgow, msg#370565])

- [https://ergcube.com/index.php?do=static&page=socials](https://ergcube.com/index.php?do=static&page=socials): Ergo ecosystem project socials directory. ([@HQΣr, msg#370661])

- [https://docs.ergoplatform.com/](https://docs.ergoplatform.com/): Official Ergo documentation. ([@qx(), msg#371110])

- [https://sigmaverse.io/](https://sigmaverse.io/): Sigmaverse info portal. ([@qx(), msg#371110])

- [https://ergonaut.space/en/Ergo/Contributing/Sigmanauts](https://ergonaut.space/en/Ergo/Contributing/Sigmanauts): Sigmanauts handbook. ([@qx(), msg#371110])

- [https://soft.rosen.tech/#/bridge](https://soft.rosen.tech/#/bridge): Rosen Bridge testnet UI. ([@Glasgow, msg#371394])

- [https://github.com/rosen-bridge](https://github.com/rosen-bridge): Rosen Bridge GitHub. ([@Aberg, msg#371382])

- [https://strawpoll.com/polls/poy9WkABpgJ](https://strawpoll.com/polls/poy9WkABpgJ): ErgoHack VI Community Vote (closes Mar 13, 12 PM UTC). ([@CW, msg#371150])

- [https://ergoplatform.org/en/blog/ErgoHack-6-Updates/](https://ergoplatform.org/en/blog/ErgoHack-6-Updates/): ErgoHack VI project updates. ([@chrom, msg#371497])

- [https://docs.ergoplatform.com/events/ergohack/#ergohackvi_1](https://docs.ergoplatform.com/events/ergohack/#ergohackvi_1): ErgoHack VI docs. ([@chrom, msg#371497])

- [https://www.youtube.com/watch?v=OWn8wKS2qMk](https://www.youtube.com/watch?v=OWn8wKS2qMk): Weekly AMA – Mar 2, 2023. ([@chrom, msg#371497])

- [https://youtu.be/DRAnTYlnsy0](https://youtu.be/DRAnTYlnsy0): Ergo Pulse Ep 12 