---
title: "Ergo General Chat — 2024-W48"
date_start: "2024-11-25"
date_end: "2024-12-01"
type: telegram_weekly
channel: general
week: "2024-W48"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2024-W48 Summary

## Key Topics Discussed

- **Ergo Protocol 6.0 Soft Fork & EIP-50**: kushti published the 6.0 soft fork proposal and EIP-50 writeup on the forum, with discussion of protocol-level changes. Functional review passed for Ledger integration; security audit pending.

- **Sub-blocks Implementation**: Discussion of scalability through sub-blocks as a path to increased throughput. kushti confirmed next focus is sub-blocks EIP after EIP-50 publication. Timeline and parameter tweaking remain open for community testnet participation.

- **SigmaUSD Protocol Governance**: Extended debate over whether to burn SigmaUSD bank keys (held for ~4 years without protocol updates) versus keeping them for future adjustments. Forum thread opened for community input; trade-offs between stability protocol maturity and decentralized governance discussed.

- **Rosen Bridge Expansion**: Rosen Bridge testing Binance Smart Chain (BSC) and Dogecoin (DOGE) integrations. RoseNet integration into guard-service underway. Support added for 20+ new tokens including MEW, CYPX, ErgOne, Paideia, QUACKS, and cross-chain stablecoins.

- **MewFund Alpha Launch**: HQΣr announced MewFund Alpha with initial meme tokens (Pumperino, Hodlerino). Campaign setup cost now 10 ERG (to become $10-denominated). Supports crowdfunding, Mint+LP, multi-asset LP, and ERG+asset LP creation on MewDex.

- **Fee Markets & Mempool Spam Resilience**: kushti clarified fee setting is decentralized—miners and nodes independently set minimum propagation fees. No central fork needed; markets and peer interactions determine transaction ordering. Spam protection via configurable minfee filters implemented in reference client v4.0.44+.

- **Transaction Size Limits & Batch Capacity**: qx() and Marc the Shark discussed maxTransactionSize limit (98304 bytes), with record of ~10-15k recipients on mainnet pre-adjustment. Current rule of thumb: ~1k unique outputs; 1.5k outputs sometimes achievable. Chained transactions bypass single-TX limits.

- **Palmyra & Chainlink Oracle Integration**: Dan Friedman (on behalf of Zengate/Palmyra) outlined use of Chainlink's proof-of-reserve for on-chain warehouse receipts supporting decentralized trade financing. IoT sensors (weight, motion, camera) provide continuous proof-of-existence. Plan to build native Ergo oracles with capital from token sale.

- **Storage Rent & Emission**: cafebedouin confirmed subblocks not yet live; only Sigmanauts mining pool currently collects storage rent. kushti noted emission runout in ~28 years; unclear how ordering block rewards function post-emission.

- **Order Book DEX vs AMM**: qx() explained Trade House order book advantages over AMM: full transparency of depth/liquidity, control over slippage, partial order fills, peer-to-peer matching on-chain. Contrasted with Spectrum DEX's AMM model.

- **Ledger Integration Status**: Functional review passed on Ledger side; security audit now underway. kushti confirmed developer mode use is safe until official release.

- **ErgoHack VII Winners**: Winners still with judges; expected announcement by Monday (Dec 2).

- **Demurrage Philosophy Debate**: @LouisLibre criticized custody-fee models emerging on Bitcoin layer 2s as inverse demurrage (fees without ecosystem benefit). Arief Cry countered demurrage as genius solution aligning individual incentives with ecosystem security. kushti remained neutral on design choices.

- **Tournament Code & Smart Contracts**: c8e4d2a released retail options concept (CC0 license) and began EXLE UI rework for loan dApp UI.

---

## Important Decisions or Announcements

- [@kushti, msg#528759, 2024-11-25]: Finalizing EIP-50 for 6.0 soft fork protocol update
- [@kushti, msg#528793, 2024-11-25]: [6.0 Soft-Fork Proposal](https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005) published; inviting miners to review and consider voting
- [@kushti, msg#528929, 2024-11-26]: [EIP-5 writeup published](https://www.ergoforum.org/t/ergoscript-and-contract-templates-why-how-eip-5/5006) on forum (ErgoScript and contract templates)
- [@kushti, msg#528937, 2024-11-26]: Ledger functional review passed; audit phase commencing
- [@Ergo NEWS $ERG, msg#528689, 2024-11-25]: Ergo protocol reference client 6.0.0-RC1 released for testnets only
- [@Ergo NEWS $ERG, msg#528689, 2024-11-25]: Ergo node 5.0.25 finalized, release pending review
- [@Ergo NEWS $ERG, msg#528689, 2024-11-25]: [c8e4d2a released retail options concept](https://github.com/SavonarolaLabs/options) (CC0 license)
- [@Ergo NEWS $ERG, msg#528689, 2024-11-25]: [MewFund Alpha launched](https://fund.mewfinance.com) with Pumperino and Hodlerino tokens
- [@Armeanio, msg#529119, 2024-11-27]: Watcher service v4.0.4 and UI v3.0.0 released; operators requested to update
- [@HQΣr, msg#529532, 2024-11-30]: MewFund campaign creation successfully integrated; initial cost 10 ERG (to become $10)
- [@kushti, msg#529725, 2024-12-01]: EIP-50 published; sub-blocks EIP is next priority
- [@Glasgow, msg#529355, 2024-11-28]: ErgoHack VII winners expected by Monday with judges

---

## Technical Q&A Worth Preserving

- **Q** (@Jayson, msg#529241): Is there any incentive for sub-blocks now? Are there rewards for miners?
  **A** (@cafebedouin, msg#529246): "Miners are getting tx fees and storage rent from input (sub) blocks, constant reward from (ordering) blocks." See [scalability plan forum discussion](https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/11). Post-emission reward mechanism (~28 years out) unspecified.

- **Q** (@Marc the Shark, msg#528879): What's the record for most recipients and tokens sent in a single transaction?
  **A** (@qx(), msg#528883-528904): Before adjustment, someone sent to 10k–15k people at once on mainnet. Current rule: ~1k unique outputs typical; 1.5k achievable with single token. Max transaction size limit is 98304 bytes. Chained transactions bypass single-TX limits.

- **Q** (@Misfit Toy, msg#528755): Why is Ergo uniquely difficult to list on centralized exchanges like Kraken?
  **A** (@kushti, msg#528765; @Luivatra, msg#528765-528766): Listing queue is the biggest factor. Timeline ranges "from one day to few months" depending on CEX priority. No inherent technical barrier; mostly scheduling.

- **Q** (@cafebedouin, msg#529157): How do adaptable chain parameters help in a 1 trillion market cap scenario?
  **A** (@kushti, msg#529205): "Ideally, chain design should be the same in 1 trillion per ERG scenario"—parameters must scale without redesign.

- **Q** (@gg, msg#529442): Could ve(3,3) tokenomics model work on proof-of-work like Ergo?
  **A** (@gg, msg#529455): ve(3,3) would allow hodlers to earn fees and gain voting power while locking ERG—"real utility while locking Erg." No formal response from kushti; flagged as open design discussion.

- **Q** (@Michael CP, msg#528963): How to reach out for media coverage?
  **A** (@Koutelier, msg#528964): "For free? You are so kind"—implies paid media is expected; no official media contact provided.

- **Q** (@Just Art, msg#529638): Where can I read how lending on SigmaFi works?
  **A** (no response given in chat)

- **Q** (@cafebedouin, msg#529690): There are tokens of value on Ergo beyond ERG, correct?
  **A** (implicit agreement)—discussion centered on Rosen Bridge holding ~2000+ holders of cross-chain tokens, not just raw ERG.

---

## Links Shared

- [GitHub: Ergo 6.0.0-RC1 Release](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC1): Testnet-only release candidate with ErgoScript-level changes documented in LangSpec diff.
- [GitHub: SigmaState Interpreter PR #930 Diff](https://github.com/ergoplatform/sigmastate-interpreter/pull/930/files#diff-672dc1399323f190357860798748cda2ac580ec2e29cc243fd60e0b71ec9edca): ErgoScript changes for 6.0.
- [Ergo Forum: 6.0 Soft-Fork Proposal](https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005): Proposal for miners' review and voting.
- [Ergo Forum: EIP-5 (ErgoScript and Contract Templates)](https://www.ergoforum.org/t/ergoscript-and-contract-templates-why-how-eip-5/5006): Design spec for template system.
- [GitHub: Retail Options Concept](https://github.com/SavonarolaLabs/options): CC0-licensed options contract; EXLE UI rework in progress.
- [MewFund Alpha](https://fund.mewfinance.com): Crowdfunding and token launch platform; supports Mint+LP, multi-asset LP, crowdfunding campaigns.
- [GitHub: Rosen Bridge Watcher v4.0.4](https://github.com/rosen-bridge/watcher/releases/tag/4.0.4): Changelog includes 20+ new token support (MEW, CYPX, ErgOne, GluonW, Paideia, etc.).
- [GitHub: Rosen Watcher UI v3.0.0](https://github.com/rosen-bridge/ui/releases/tag/watcher-app-3.0.0): Dynamic title feature, favicon, design system refactor.
- [Sigmanauts Podcast](https://sigmanauts.com/podcast): Ergo community podcast; latest episode links to Spotify and Apple Podcasts.
- [Ergo Explorer BitMart Integration](https://www.bitmart.com/trade/en-US?r=VDMKKS&symbol=ERG_USDT): Confirmed ERG/USDT trading pair active (contrary to delisting concerns).
- [Ergo Forum: SigmaUSD Bank Update Discussion](https://www.ergoforum.org/t/sigmausd-bank-contract-update-and-keys-burning/4874): Forum thread on key burning and protocol updates.
- [Ergo Forum: Scalability Plan & Sub-blocks](https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/11): Discussion of storage rent, ordering block rewards, and sub-block mechanics.
- [X/Twitter: House of Chimera Spaces](https://x.com/HouseofChimera/status/1862182934884561268): kushti Twitter Spaces session hosted by Diederick; recorded for Sigmacast podcast.
- [Ergo GitHub: Awesome Ergo (Logo & Graphics)](https://github.com/ergoplatform/awesome-ergo/tree/master/graphics/Logo): Official logo assets (SVG).
- [Hummingbot GitHub: Pattern Tech](https://github.com/pattern-tech/hummingbot-site): Rosen Bridge planning hummingbot integration channel (Dec 15 start estimate).
- [Woot Computers: Mac Mini Sale](https://computers.woot.com/offers/apple-mac-mini-32gb-128gb-2018z-7): Server hardware promo (qx() shared for USA community).
- [Bluesky: Ergo Platform Posts](https://bsky.app/profile/ergoplatform.org): Community updates on Bluesky cross-posted from X.

---

## Unresolved Questions

- **Sub-blocks Timeline & Testnet Participation**: kushti invited community to lead testnet experimentation (tweaking parameters, scientific observations) but no concrete launch date or formal testnet schedule announced. Anyone interested asked to DM kushti.

- **SigmaUSD Key Burning**: Governance path unclear. Richi advocates immediate burning; Luivatra and cannon_q prefer protocol version 2 with gradual liquidity migration. Forum discussion ongoing—no decision made.

- **Ledger Audit Timeline**: Security audit commenced but no target completion date provided (msg#528937).

- **Palmyra/Winter Protocol Status**: kushti noted "checking its contracts these days" (msg#529325) but no completion or launch date specified. Chainlink integration design discussed but implementation timeline TBD.

- **Post-Emission Block Rewards**: cafebedouin flagged that ordering block reward mechanism after ~28-year emission runout is unspecified. No kushti clarification given.

- **ve(3,3) Feasibility on PoW**: gg proposed ve-style tokenomics for Ergo but received no formal kushti response. Design remains exploratory.

- **MewFund Extension Priorities**: HQΣr asked "I am not sure what I will move on too..... Need extensions ideas" (msg#529233). Community suggestions not captured in chat.

- **AI Protocols on Ergo**: Richi asked if any AI protocols run on blockchains (msg#529218); no response documented.

- **Fee Estimation API Usage**: kushti noted fee estimation API exists but "it's not used by applications as far as I know" and "not even tested." Opportunity flagged but no owner assigned.

---