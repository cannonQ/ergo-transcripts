---
title: "Ergo General Chat — 2022-W45"
date_start: "2022-11-07"
date_end: "2022-11-13"
type: telegram_weekly
channel: general
week: "2022-W45"
source: telegram
message_count: 1274
categories: [technical, bridges, defi, ecosystem, mining, wallet, marketing, community]
key_terms: [babel fees, token fees, transaction costs, tokenjay, EIP-0031, rosen bridge, cardano, cross-chain, soft launch, test tokens, grid trading, concentrated liquidity, decentralized, spectrum, FTX, SBF, exchange risk, custody, self-custody, bitmain]
---
# Ergo General Chat — 2022-W45 Summary
**Period:** 2022-11-07 to 2022-11-13  
**Total Messages:** 1,274 across 104 participants

---

## Key Topics Discussed

- **Babel Fees (Transaction Fee Payment in Alternative Tokens)**
  Babel Fees went live on mainnet, allowing users to pay transaction fees using any token instead of ERG via smart contract pools. Integrated into Nautilus wallet; TokenJay provides liquidity provision UI. First mainnet transaction using SigmaUSD fees confirmed.

- **Rosen Bridge Soft Launch**
  Bridge deployed on Ergo and Cardano mainnets in private test phase. First cross-chain transfer (Ergo→Cardano) processed with test tokens. Public testnet coming with test token distribution; users warned not to use with real funds yet.

- **Grid Trading (Decentralized)**
  kushti implemented first decentralized grid trading on Ergo—allows placing buy/sell orders at multiple price levels to capture volatility spreads. Initial testing in both directions; UI refinement pending before public release. Discussed as automated liquidity provision alternative to traditional AMMs.

- **Ledger App Development Status**
  Ledger Ergo app in development with Tessaract (third-party contractor). Ledger not directly involved—only approves once complete. No specific release date; ongoing bottleneck with Tessaract (Ukraine-based, limited recent updates).

- **FTX Contagion & CEX Risk**
  Community discussion centered on systemic CEX failures (FTX implosion, Crypto.com cold storage incident, KuCoin uncertainty). Emphasis reinforced: "do not hold on CEXes." Self-custody wallets (Nautilus, Terminus, Satergo) promoted. Rosen Bridge positioned as trustless cross-chain alternative to centralized exchange wraps.

- **Spectrum DEX Cardano Testnet**
  Spectrum launched public testnet on Cardano; users can test swap tADA and other test token pairs. Highlights cross-chain liquidity strategy and Ergo-Cardano composability.

- **Node 5.0 & JIT Costing Upgrade**
  Node v5.0 introduces improved EIP-42 JIT costing mechanism—more efficient bytecode execution, higher transaction throughput without changing block rewards. EIP merged as official standard.

---

## Important Decisions or Announcements

- [@Glasgow｜WON'T DM, msg#343622, 2022-11-08]: Rosen Bridge launching "in the next few days (with test tokens)." Also lists pending deliverables: NightOwl, LightSPV Clients, Babel Fees Oracles v2/Dexy Gold, DAOs, mixer tokenization, lending, Spectrum L2.

- [@Capt. Nemo, msg#344545, 2022-11-11]: First mainnet transaction with fees paid using SigmaUSD confirmed. UI fine-tuning ongoing; public testing announcement forthcoming.

- [@MrStahlfelge, msg#344922, 2022-11-12]: TokenJay UI improvements deployed—reduced decimal places, corrected "receive" → "pay" labeling for Babel Fee pools.

- [@Armeanio, msg#343818–343819, 2022-11-08]: Bitmain invited Armeanio to speak; submitting video instead of attending in person. Focus: programmability and ecosystem overview.

- [@Chris Ray, msg#344827, 2022-11-11]: Sigmanauts governance formalized with main Twitter account for discussions and action records. First Sigmanauts Gov meeting notes published.

- [@Luivatra, msg#343413, 2022-11-07]: Declined payment offer; prefers focusing on Paideia DAO development.

---

## Technical Q&A Worth Preserving

- **Q** (@Flying Pig, msg#343514): What are bulletproofs?
  **A** (@Flying Pig, msg#343514–343515): Form of multisig but simpler, faster, more secure—aggregates multiple parties' signatures into one final signature. Used in Ergo for zero-knowledge proofs and range proofs; alternative to SNARKs with no trusted setup.

- **Q** (@Şerafettin Bayrakdar, msg#343527): Is there a place to see blocks found daily?
  **A** (@qx(), msg#343528–343529; @Şerafettin Bayrakdar, msg#343550): Ergo Explorer stats page shows daily block count (~718 blocks/day), average mining time (2.01 min), daily coin emission (32,310 ERG ≈ $64K).

- **Q** (@Unknown, msg#344419): Explain grid trading in one sentence (ELI5).
  **A** (@Unknown, msg#344419): "Grid trading is basically buying the spread on market volatility and trying to make a small percentage profit in each trade."

- **Q** (@qx(), msg#344646): Could Azorus track Babel LP data to show which tokens people use most for tx fees?
  **A** (@Unknown, msg#344700): "If it's onchain we can query, track and visualize it."

- **Q** (@Unknown, msg#344880): How are Babel Fee transactions created? How does Nautilus identify and use the funds?
  **A** (@error, msg#345049): Detailed information in EIP-0031: https://github.com/ergoplatform/eips/blob/master/eip-0031.md

- **Q** (@MrStahlfelge, msg#344689): Will Terminus/Mosaik wallet have Babel fee token selling integrated?
  **A** (@MrStahlfelge, msg#345123, 2022-11-13): "Currently thinking how to do it best." User requested feature in GitHub issue #158.

- **Q** (@HQΣr, msg#345117): Documentation on SigmaUSD? Can't convert due to reserves.
  **A** (@Glasgow, msg#345119): FAQ in wallet menu explains the reserves system.

- **Q** (@Unknown, msg#344836): Can fiat/crypto exchange happen on a DEX?
  **A** (@Glasgow, msg#344846): Yes, via Bisq—Ergo already listed. Also native P2P solutions possible via Rosen Bridge (trustless, no intermediary needed).

- **Q** (@Grand Gambit, msg#345250): Easiest way to make transactions with JavaScript?
  **A** (@Glasgow, msg#345252): Fleet library. GitHub: https://github.com/fleet-sdk/core

- **Q** (@Abdulkrem, msg#345071): If whale loses keys to 50K ERG, who gets storage rent fees?
  **A** (@Unknown, msg#345074): Miners receive storage rent. At current fees, would take ~1.6 million years to burn 50K ERG in rent.

---

## Links Shared

- [Rosen Bridge Soft Launch UI]: https://soft.rosen.tech (test tokens only; do not use real funds)
- [Decentralized Grid Trading Discussion]: https://www.ergoforum.org/t/decentralized-grid-trading-on-ergo/3750
- [Babel Fees (EIP-0031)]: https://github.com/ergoplatform/eips/blob/master/eip-0031.md
- [TokenJay Babel Fee Pools]: https://tokenjay.app/app/#purchases
- [Spectrum DEX Cardano Testnet]: https://app.spectrum.fi/cardano/swap
- [Ledger Ergo App Issue #158]: https://github.com/ergoplatform/ergo-wallet-app/issues/158
- [Minotaur Wallet v1.1.0 (First Multisig)]: https://github.com/minotaur-ergo/minotaur-wallet/releases/tag/v1.1.0
- [Ergo Node v5.0 Release Notes]: https://ergoplatform.org/en/blog/Ergo-Node-v.5.0-The-Next-Evolution-of-the-Ergo-Platform
- [Ergo Explorer Stats]: https://explorer.ergoplatform.com/en/stats
- [Armeanio Bitmain Summit Talk]: https://youtu.be/bLSXYDpKOgk (timestamp ~5612s)
- [Weekly Ergo AMA (Thursdays 1PM UTC)]: https://youtu.be/yiE8Zq-k4XM
- [Fleet SDK]: https://github.com/fleet-sdk/core
- [Bisq P2P Exchange]: https://bisq.network/getting-started/

---

## Unresolved Questions

- **Ledger Nano S Plus Support**: Confirmed not working "at this moment" (msg#345097). Timeline unclear; Tessaract team unresponsive for months.

- **LightSPV Client Status**: Listed as "nearing completion" (msg#343622) but no specific release date or GitHub milestone shared beyond API tracking.

- **Dexy Gold (Oracle Pool v2) Finalization**: Status mentioned as in-development; no launch date confirmed.

- **NightOwl Casino Launch**: One bug blocking release; "very close to be finished" as of 2022-11-11, but no ETA. Previous radio silence caused concern.

- **Mixer Tokenization Airdrop Details**: Will occur after Tornado Cash mix-related concerns; TBD on specific token mechanics and distribution.

- **Spectrum L2 Design**: Mentioned as "nearing completion" but architectural details and mainnet launch window not finalized in this week's chat.

- **Speed Improvement Discussions (Microblocks vs. Sidechains)**: kushti flagged multiple competing proposals revived after Ergoversary; no decision made on which path forward. Community interest exists but no committed implementer assigned.

- **Quwin Developer Status**: One user noted inactivity ("haven't seen him much since" mid-week); no update from him or team on current work.

---

## Community Notes

- **Wallet Migration**: Multiple users migrating from Yoroi (now defunct/unmaintained) to Nautilus and Terminus. Restoration via seed phrase confirmed working across wallets.

- **Babel Fee Innovation Celebrated**: Community praised the feature as a breakthrough—first user to pay tx fee in LOVE token, creating humorous "proof of concept" for alternative fee tokens.

- **Sigmanauts DAO Governance Launch**: First formal Gov meeting held; main Twitter account (@Haskell_plus leading notes publication) established for transparency.

- **YouTube Influencer Recruitment**: Ad-hoc discussion about bringing content creators into AMAs; qx() incentivized community members to reach out ("1 ERG per YouTuber who does full show").

- **Storage Rent as Feature, Not Bug**: Clarified that lost keys = miner gain; long-term (millions of years) to deplete through rent alone.