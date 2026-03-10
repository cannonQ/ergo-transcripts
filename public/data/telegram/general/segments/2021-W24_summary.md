---
title: "Ergo General Chat — 2021-W24"
date_start: "2021-06-14"
date_end: "2021-06-20"
type: telegram_weekly
channel: general
week: "2021-W24"
source: telegram
message_count: 1326
categories: [defi, technical, mining, wallet, marketing, ecosystem, community]
key_terms: [ErgoDex, launch, beta, Plutus, liquidity pools, Cardano, oracle pools, data accuracy, collusion resistance, sigma protocols, chainlink comparison, mining pools, Autolykos, difficulty, nanopool centralization, smart contracts, SigmaUSD, AgeUSD, collateral ratio, stablecoin]
---
# Ergo General Chat Summary — 2021-W24

## Key Topics Discussed

- **ErgoHack Results**: First experimental hackathon completed with several submissions. Results announced on June 20. Teams included Raffle, Notarize, and others; one team (Shrimp) withdrew due to scope complexity exceeding 48-hour window.

- **ErgoDex Launch Timeline**: Public testing phase underway, expected launch "this month" (late June 2021). Desktop Yoroi support mentioned; mobile version still in development. Two separate DEX implementations planned: one for Ergo mainnet, one for Cardano with native token support.

- **Oracle Pools Design & Security**: Extensive discussion on Oracle Pool v1 and v2. Community concern raised about adversarial attacks (single actor controlling 95% of oracles in a pool, Sybil attacks). Glasgow clarified pools use hierarchical structure and game-theoretic disincentives via collateral/slashing. Trust scores based on oracle reputation mentioned as critical defense. No cryptographic guarantee but "scaling accuracy" through layered pools.

- **Storage Rent Implementation**: Will start before full emission ends (year 3). Approximate cost: ~0.13 ERG every 4 years per idle wallet. Implementation allows impact assessment on miners before emission fully depletes.

- **Autolykos Pool Resistance**: Originally designed with non-outsourceability, but smart contracts enabled pooling bypass (paper: "Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts"). Feature disabled so larger players couldn't monopolize loophole. Focus shifted to memory hardness to prevent ASICs; Stratum 2 protocol improvements in development. Decentralized smart pools planned for future.

- **Scaling Plan**: Multi-layer approach (L0/L1/L2) discussed. Sidechains mentioned as future scaling mechanism. No immediate scaling urgency since current application set (SigmaUSD, Oracle Pools, Spectrum, Trade House, lending contracts) doesn't fill available blockspace. Parameters like block time/height tied to consensus; faster blocks require careful protocol review.

- **Sigma Protocols & Zero-Knowledge Proofs**: Bulletproofs for range proofs and generic zero-knowledge statements. ErgoScript verification possible, enabling diverse proof protocols (Groth one-out-of-many, etc.). Enables hybrid contracts combining on-chain execution with off-chain privacy-preserving proofs.

- **Chainlink Partnership (Palmyra)**: Using proof of reserve via Chainlink functions for decentralized trade financing. On-chain warehouse receipts via IoT sensors (cameras, weight sensors, motion sensors). Not zero-sum with other oracles (Plan B: build out native Ergo oracles with foundation + raised capital). Multiple oracle hierarchies planned.

- **Mining Efficiency**: Ergo far more efficient than Ethereum. GPU mining accessible (RTX 3070, 3060 viable). Difficulty adjustment algorithm causes profit fluctuations. Pool resistance via smart contracts bypassed; Nanopool historically >50% hashrate (sometimes 60%) — decentralized smart pools aim to eliminate this risk.

- **Ledger/Hardware Wallet Support**: Ledger integration expected July 2021. Trezor support considered but not confirmed. Mobile Yoroi Ergo support in development.

- **Cardano Interoperability**: Ergo partnership with Emurgo (Cardano's commercial arm). Alexander Chepurnoy (kushti) previously IOHK researcher. ErgoDex will serve Cardano native assets. Charles Hoskinson mentioned kushti as "smartest person in blockchain" in Lex Fridman podcast (~1:45:02 segment), praised zero-ego approach focused on solving hard problems.

## Important Decisions or Announcements

- [@kushti khushi, msg#152686, 2021-06-14]: ErgoHack results will be announced June 20th
- [@Armeanio, msg#153252, 2021-06-16]: Dev update published on Medium (Whats Going On Behind the Screens)
- [@Glasgow｜WON'T DM, msg#153702, 2021-06-18]: Welcome message and channel guidelines pinned; Hotbit withdrawal issues flagged
- [@Glasgow｜WON'T DM, msg#154036, 2021-06-19]: ErgoHack completed with experimental results; blog post published
- [@Autolykos Megistos, msg#154048, 2021-06-19]: ErgoHack final results with team renames and one withdrawal (Shrimp team)

## Technical Q&A Worth Preserving

- **Q** (@Tanner Benns, msg#152717): Do I need to mine the whole block before getting paid solo mining Autolykos?
  **A** (@WAGMILama, msg#152719): You need ~60 days with luck at your hashrate; better to join a pool. (@Unknown, msg#152721): Ask on @ergo_mining

- **Q** (@Unknown, msg#153617): How will Ergo address scalability concerns like Ethereum?
  **A** (@Armeanio, msg#153621): L0, L1, L2 scaling plan detailed in Medium article. (@Ron, msg#153620): eUTXO allows 1-to-many transactions (vs. Ethereum's 1-to-1), different accounting model

- **Q** (@J, msg#153663): Why did Ergo allow mining pools if originally designed pool-resistant?
  **A** (@Unknown, msg#153664): Smart contracts bypassed non-outsourceability design. (@Glasgow｜WON'T DM, msg#153668): Autolykos v1 had built-in non-outsourcability but smart contracts made pools inevitable; turned off to prevent only large players exploiting loophole. Reference paper "Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts" (WTSC 2020). Decentralized smart pools planned for future.

- **Q** (@Unknown, msg#153841): Is it accurate to say "Ergo can guarantee data accuracy" with its oracle solution?
  **A** (@Unknown, msg#153853): No cryptographic guarantee possible for off-chain data. (@Peppers CK, msg#153893): Game-theoretic disincentives + pooling/hierarchies required to control majority. (@Unknown, msg#153934): Algorithm calculates bribing cost to corrupt majority as deterrent.

- **Q** (@Chris, msg#153969): What's the new emission rate after block 525600?
  **A** (Not directly answered in chat)

- **Q** (@Unknown, msg#153638-153641): How does Ergo address energy consumption concerns?
  **A** (@Peppers CK, msg#153639): Ergo far more efficient than other UTXO models. (@Brandon, msg#153648): Reddit post with efficiency proof linked

- **Q** (@Kallo Shaman, msg#154024): Can DEXes work without CEXes if oracles use CEX prices?
  **A** (@Glasgow｜WON'T DM, msg#154021): DEXes would use DEX prices; they use CEX prices due to higher volume. (@A, msg#154050, msg#154052, msg#154053): AMM pools set prices via order depth; people won't trade at extreme prices; liquidity providers self-correct through arbitrage.

- **Q** (@Unknown, msg#154157): How is Ergo censorship-resistant with only 3 mining pools?
  **A** (@Autolykos Megistos, msg#154159-160): No developer response; feedback noted as important. (@Glasgow｜WON'T DM, msg#154166): Sigma protocols enable trustless LETS (local exchange trading systems)

- **Q** (@cyrill, msg#154232): Can I swap ADA to ERG in Yoroi wallet?
  **A** (@A, msg#154242-248): No; must use exchange (CoinEx, Gate.io). Binance not supported yet. Must use Yoroi desktop (mobile still in development). Ledger coming in ~1-2 months.

## Links Shared

- [Lex Fridman Podcast: Charles Hoskinson on Ergo, kushti (~1:45:02)](https://youtu.be/FKh8hjJNhWc): Charles praises kushti as "smartest person in blockchain" with zero ego, focused on solving hard problems. Ergo called "spiritual successor to Bitcoin"

- [Cardano & Ergo Interoperability Article](https://ergoplatform.org/en/blog/2021-04-08-heres-how-ergo-seeks-to-boost-interoperability-for-cardanos-eutxo-model/): Explains relationship and eUTXO compatibility

- [Ergo Efficiency Reddit Thread](https://reddit.com/r/ergonauts/comments/nbd4az/ergos_efficiency/): GPU mining efficiency compared to other PoW chains

- [Ergo Scalability Plan](https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226): Multi-layer approach documented

- [Oracle Pools Forum Discussion](https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263): Technical design of pooled oracles with hierarchies

- [Sigma Protocols & Zero-Knowledge Overview](https://ergoplatform.org/pl/blog/2020-08-31-ergos-oracle-pools-and-what-they-mean-for-the-ecosystem/): Discusses extended UTXO enabling aggregated oracles

- [Collective Spending (Zero Knowledge Treasury)](https://www.ergoforum.org/t/a-simpler-collective-spending-approach-for-everyone/476): Mentioned for LETS implementation via Sigma protocols

- [ErgoHack Results Blog](https://ergoplatform.org/en/blog/2021-06-19-ergohack/): First hackathon results and team submissions

- [Dev Update (Curiae Regis Crypto Medium)](https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-june-16th-8d67399ffa65): Weekly development status

- [Bearwhale Saga](https://ergoplatform.org/en/blog/2021-05-13-bearwhale-saga/): Historical event documentation

- [Ergo Manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/): Core philosophy and principles

- [Ergo Platform Roadmap](https://ergoplatform.org/en/blog/2021-05-09-ergo-platform-roadmap/): Development timeline and milestones

- [Waves & Ergo Partnership](https://medium.com/wavesprotocol/waves-partners-with-ergo-to-foster-interoperability-solutions-via-gravity-e184bca91d71): Cross-chain interoperability via Gravity protocol

- [GitHub: AlphaXCore 2.0 Mining Pool](https://github.com/AlphaX-Projects/alphaxcore): Community member seeking Ergo integration

- [Ergo Mining Guide (The Crypto Drip)](https://thecryptodrip.com/how-to-mine-erg-guide/): Practical mining setup guide

- [Ergo Explorer](https://explorer.ergoplatform.com/en/): On-chain metrics and block exploration

- [SigmaUSD Platform](https://sigmausd.io/#/): Stablecoin minting interface

- [Sigmaverse dApps Directory](https://sigmaverse.io/): Ecosystem projects and tools

## Unresolved Questions

- **Oracle Pool Sybil Attack Vulnerability**: Whether a single adversarial actor can covertly stand up >50% of oracles in a pool to corrupt data. Peppers CK flagged for developer review; no definitive technical answer provided. (@Unknown, msg#153937-153947)

- **Mining Pool Centralization Risk**: How Ergo prevents nanopool from maintaining >50% hashrate long-term. Decentralized smart pools mentioned as solution but status TBD. (@Unknown, msg#154157)

- **Block Time / Timestamp Dependencies**: What contracts rely on block height vs. timestamp, and cascading effects of faster blocks. Noted as needing protocol analysis but left open. (@Unknown, msg#153644-153679)

- **Zero Knowledge Treasury Implementation**: What makes it "zero knowledge" and advantages over regular treasuries. Flagged for developer docs but not explained. (@Unknown, msg#154143)

- **Cross-Chain Scope**: Whether Ergo interoperability limited to Cardano or extends deeper. Left for deeper research. (@Unknown, msg#154143)

- **ErgoDex Tokenomics**: Max supply, allocation details. Mentioned as "coming" but no specifics provided. (@Nimz, msg#154038)

- **Ledger Hardware Wallet Timeline**: Exact ETA beyond "July 2021" estimate. (@Unknown, msg#154129-154130)

- **New CEX Listings**: "4 CEXes" and "2 DEXes coming" mentioned but identities and timelines TBD. Ball stated to be on exchanges' side. (@Unknown, msg#153683-153684)

- **Emission Rate Post-Block 525600**: New block reward after fixed-rate period ends. Not answered. (@Chris, msg#153969)

---

**Summary Stats:**
- **Week Duration:** 2021-06-14 to 2021-06-20 (7 days)
- **Messages:** 1,326
- **Primary Focus:** ErgoHack results, ErgoDex launch prep, Oracle Pool security debate, Chainlink partnership, mining pool dynamics
- **Key Contributors:** kushti, Armeanio, Glasgow, qx() (Gazza), Autolykos Megistos, Peppers CK, Dmitry Usov, Ron