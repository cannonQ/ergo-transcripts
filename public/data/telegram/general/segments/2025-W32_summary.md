---
title: "Ergo General Chat — 2025-W32"
date_start: "2025-08-04"
date_end: "2025-08-10"
type: telegram_weekly
channel: general
week: "2025-W32"
source: telegram
message_count: 0
categories: [technical, wallet, ecosystem, marketing, defi, mining, bridges, governance, community, nft]
key_terms: [sub-blocks, testnet, miners, performance, security audit, Keystone, Nautilus, integration, serialization, sigma-rust, Spectrum Network, ErgoDex, SPF, liquidity pools, domain transfer, marketing, adoption, community effort, influencers, grassroots]
---
# Ergo General Chat — 2025-W32 Summary

## Key Topics Discussed

- **Sub-blocks Development**: kushti reported completion of security audit and optimization work on sub-blocks code. Public testnet supporting miners expected after 6.0.1 release. Discussion of implications for block time, timestamp-based contracts, and real-world application use cases (e.g., instant door access).

- **Spectrum Network Wind-down**: Spectrum Network (cross-chain bridge project) announced closure and fund return to SPF holders. ErgoDex frontend and pools remain operational via ErgoDex.io, MewFinance, and CrystalPool. Source code stays open-source.

- **Better Money Labs Initiative**: kushti announced Better Money Labs as a for-profit entity (alongside Bruno and VCs from major Korean funds) focused on building Ergo Treasury and supplying ERG to large institutional players. Whitepaper published at https://github.com/BetterMoneyLabs/whitepaper

- **ErgoCapital Token Launch**: Community member M B launched ErgoCapital token backed by investment fund model. Proposed using fund profits for ERG buyback, token burn, marketing, and REIT investments (Dubai focus). Raised discussion about treasury structures, DAO governance, and sustainable funding models.

- **Marketing & Adoption Discussion**: Extended debate on whether Ergo needs "professional" marketing vs. grassroots/organic growth. Consensus that centralized top-down marketing is misaligned with Ergo ethos but community-coordinated efforts (Sigmanauts DAO, mining pools, local IRL events) are viable. kushti emphasized p2p boom and grassroots finance as natural use cases.

- **Keystone Hardware Wallet Integration**: Glasgow reported Keystone integration progressing. After sigma-rust build updates, serialization fix and PR against Nautilus repo expected, followed by full integration tests.

- **Lithos Protocol Updates**: kushti reported difficulty contract completion, off-chain fraud proof work, stratum performance improvements, and share storage optimization for NISPs.

- **Protocol 6.0.1 Release**: Reference client 6.0.1 released at https://github.com/ergoplatform/ergo/releases/tag/v6.0.1

- **P2P Infrastructure DAO Progress**: First community member successfully set up node, explorer, and nginx/certs. Successfully added to load balancer; GitHub instructions improved based on feedback.

- **Celaut (formerly Xelato) Node Simplification**: Single-command installation for Celaut node announced to enable easy p2p network participation. Manual setup option also available.

- **DeFi Contract Landscape**: kushti outlined current on-chain contracts: GARD protocols, Rosen Bridge, Oracle Pools, Spectrum AMM pools, Trade House order books, and lending contracts. Discussion of whether speed improvements (sub-blocks or sidechains) are prerequisites for scaling DeFi.

- **Mining DAO & Community Contributions**: CannonQ shared mining DAO framework document (open for community comments) as potential model for coordinated marketing and outreach efforts. Sigmanauts to review and potentially adapt framework.

- **Ergo v. Multi-chain Approach**: kushti argued Ergo ecosystem should remain Ergo-native rather than chase multi-chain liquidity. EF not positioned to fund cross-chain LP pairs (would require dumping ERG). Community initiatives (like Rosen watcher rewards) are alternative mechanisms.

## Important Decisions or Announcements

- [@kushti, msg#570061, 2025-08-05]: Lithos update: difficulty contract finished, fraud proof work completed, stratum optimizations for TRM users and NISPs.

- [@kushti, msg#570063, 2025-08-05]: Sub-blocks ready for public testnet (supporting miners) after 6.0.1 release. Security audit, optimization, and code cleanup underway.

- [@kushti, msg#570783, 2025-08-09]: Ergo protocol reference client 6.0.1 released.

- [@HQΣr, msg#570198-570200, 2025-08-07]: ErgoDex is public good; source code open. UI will be hosted for some time. Domain ownership may transfer to EF. Spectrum Labs fees redirected to InfraDAO revenue stream. ErgoDex available on multiple frontends (dex.mewfinance.com, etc.).

- [@M B, msg#570434, 2025-08-08]: ErgoCapital token launched on Ergo Raffle; donations campaign started for investment fund.

- [@kushti, msg#570449, 2025-08-08]: Better Money Labs will build Ergo Treasury using Ergo tech. Whitepaper published. Room for hundreds/thousands of other treasuries and players.

- [@qx(), msg#570721, 2025-08-08]: First p2p InfraDAO user successfully set up node, explorer, nginx/certs. Integrated into load balancer testing. GitHub instructions improved.

- [@kushti, msg#570691, 2025-08-08]: Better Money Labs announcement with whitepaper link.

- [@Glasgow, msg#570052, 2025-08-05]: Keystone integration PR expected after sigma-rust serialization fix completion.

- [@cannon_q, msg#571110, 2025-08-10]: Mining DAO framework document open for edits. Sigmanauts meeting discussed using framework for broader Ergo marketing.

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg#570031): How is GPU usage going?  
  **A** (@kushti, msg#570158): [shared X link about GPU work]

- **Q** (@tobgoblin/Discord, msg#570044): Can I get Keystone wallet yet?  
  **A** (@Glasgow/Discord, msg#570052): After latest sigma-rust build, serialization fix will be completed, then PR to Nautilus repo, then full integration tests between Keystone and Nautilus.

- **Q** (@Jubair Islam, msg#570377): Swapped on ErgoDex but ERG transferred out without receiving swap token. Why?  
  **A** (@HQΣr, msg#570378): Probably slippage. Try swapping on dex.mewfinance.com instead.

- **Q** (@Ruben, msg#570347-349): Can locked ERG (e.g., 10-year lock) be put to work without risking funds? Any representative staking or DAO-controlled usage?  
  **A** (@Luca D'Angelo, msg#570352): HODLerg and phoenixfi.app offer representative staking for locked ERG.

- **Q** (@Giufa, msg#570637): What does Spectrum closing imply for liquidity pools? Anything to prepare?  
  **A** (@HQΣr, msg#570638): No change. All LP is on-chain. Use MewFinance or other frontends to interact with pools. (@kushti, msg#570639-640): ErgoDex.io and CrystalPool also available.

- **Q** (@JL, msg#570632): Is running Rosen watchers profitable currently?  
  **A** (@kushti, msg#570635): Rosen users can comment on profitability.

- **Q** (@Richi, msg#570420-422): Can SigmaFi support loan offers (not just borrow requests)? With customizable collaterals, liquidations, and duration?  
  **A** (@HQΣr, msg#570425): MewFinance has MewLending already built out; can explore integration.

- **Q** (@JL, msg#571112): Why did educated miners leave Ergo after ETH Merge? Wasn't DAA an issue?  
  **A** (@kushti, msg#571114): Have you provided feedback on EIP-37 proposal? [Ongoing discussion unresolved due to lack of technical details from miner.]

## Links Shared

- [https://github.com/BetterMoneyLabs/whitepaper/blob/master/better.pdf]: Better Money Labs whitepaper — outlines vision for Ergo Treasury and p2p finance infrastructure.

- [https://www.ergoforum.org/t/p2p-currencies-digital-free-banking-and-better-money-labs-role-in-moving-things-forward/5217]: Ergo Forum discussion on p2p currencies, digital free banking, and Better Money Labs role.

- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.1]: Ergo protocol reference client v6.0.1 release.

- [https://github.com/celaut-project/paradigm]: Celaut project GitHub (paradigm repository).

- [https://lock.mewfinance.com]: MewLock service for locking ERG tokens.

- [https://github.com/BetterMoneyLabs/whitepaper]: Better Money Labs whitepaper repository.

- [https://docs.google.com/document/d/1EFmCqzO0-vScOsAv_-t-OaH7g5Zhv-_QBAzAdpUoWL0/edit?usp=sharing]: Sigmanauts mining DAO framework document (open for community edits/suggestions).

- [https://x.com/spectrumxnet/status/1953448470360084926]: Spectrum Network wind-down announcement.

- [https://x.com/chepurnoy/status/1953517852369002529], [https://x.com/chepurnoy/status/1953517122090414543], [https://x.com/chepurnoy/status/1953518292800254371]: kushti's X threads on Spectrum/ErgoDex situation.

- [https://ergoraffle.com/raffle/show/4a577b31b15934c857786708248cb098a4ddbb2e01b0e7ae7b2730cf0b009b46]: ErgoCapital token raffle.

- [https://store.mewfinance.com]: MewFinance merchandise store.

- [https://mart.mewfinance.com]: MewMart (MewFinance marketplace).

- [https://youtu.be/YUGNLQ6n8BA], [https://youtu.be/DnSW8fsegGk]: YouTube videos shared by kushti.

- [https://t.me/ergoplatform_ES]: Ergo Spanish Telegram channel.

- [https://t.me/rosenbridge_erg]: Rosen Bridge Telegram channel.

- [https://cornell.zoom.us/j/94845730251?pwd=807LoJQ3R8pT0mO4bIa6LVSvOwGlWR.1]: Community AMA Zoom link (2025-08-07).

- [https://www.youtube.com/live/x-gTulAcJOE?si=B2mkYskVZKTCsY2-]: Community AMA YouTube stream link.

## Unresolved Questions

- **Sub-blocks real-world UX impact**: HQΣr wants sub-second confirmation for applications like instant door access. kushti countered that p2p economics don't justify storing trivial data across hundreds of peers. Whether sub-blocks will solve practical UX constraints without compromising decentralization remains debated.

- **EIP-37 (Difficulty Adjustment) feedback**: kushti repeatedly asked JL for specific technical feedback on EIP-37 proposal. JL flagged DAA as "messed up since ETH Merge" but declined to engage further citing non-developer status. No concrete proposal text or forum link provided; issue unresolved.

- **Marketing coordination & measurement**: Multiple proposals for marketing (ErgoCapital fund, Sigmanauts campaigns, mining pool articles, KOL outreach) lack clear success metrics, budget allocation, or unified coordination mechanism. Debate over "professional" vs. grassroots marketing continues without resolution.

- **Rosen watcher profitability**: JL asked if Rosen watcher operations are currently profitable. kushti deferred to Rosen users but no specific answer provided in chat.

- **EF cross-chain LP funding**: Rj proposed EF fund Rosen liquidity pairs (rsERG-BNB, etc.) to improve user swap experience. kushti questioned whether EF should dump ERG to buy BNB/ETH/DOGE. No decision made; structural tension between ecosystem support and EF treasury management unresolved.

- **Foe/ERGnomes project status**: Community debate over whether Foe's disappearance from ERGnomes/Auction Gnomes project constitutes a scam or acceptable personal withdrawal. No official statement; reputational damage discussed but no resolution.

- **Celaut auto-installation limitations**: Josemi noted Celaut auto-install requires sudo access; switched to manual mode. WSL2 custom distro workaround mentioned but full cross-platform automation status unclear.

- **MewLending loan offers feature**: Richi requested SigmaFi loan offer functionality. HQΣr noted MewLending exists but feature parity and timeline not confirmed.

- **SigmaLok + Paideia DAO integration**: qx() proposed locking SigmaLok unlock keys inside Paideia DAO to enable DAO-controlled fund access. Concept interesting but implementation details and security considerations not elaborated.