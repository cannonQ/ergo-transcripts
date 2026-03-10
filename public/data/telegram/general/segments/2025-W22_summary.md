---
title: "Ergo General Chat — 2025-W22"
date_start: "2025-05-26"
date_end: "2025-06-01"
type: telegram_weekly
channel: general
week: "2025-W22"
source: telegram
message_count: 0
categories: [governance, technical, bridges, ecosystem, defi, community, wallet, marketing]
key_terms: [6.0 soft fork, voting, miners, protocol update, subblocks, pruning, UTXO set snapshots, testnet, devnet, Rosen Bridge, Handshake, cross-chain, 5000 ERG bounty, integration kit, ErgoHack, AI-based projects, hackathon, submissions, 70% AI code, live streams]
---
# Ergo General Chat — 2025-W22 Summary
**Period:** 2025-05-26 to 2025-06-01 | **Messages:** 850 | **Participants:** 51

---

## Key Topics Discussed

- **Sub-blocks Implementation & Testing**: kushti confirmed sub-blocks are being tested on DevNet with security and efficiency aspects under review. Pruning mechanism stores only last ~4 years of history (1,051,200 blocks); older blocks stored on archival nodes or DHT. (@kushti khushi, msg#561001, msg#561066, msg#561710-713)

- **Sigma 6.0 Soft Fork Voting**: Pool operators and miners invited to review and vote on 6.0 protocol update; final testnet resync underway with voting height discussion ongoing with pools. (@kushti khushi, msg#561014, msg#561702)

- **Rosen Bridge Expansion Kit (RCS-003)**: New framework for integrating blockchains into Rosen Bridge; discussion of incentive alignment via fee distribution to external development teams. (@Armeanio, msg#561601-603, msg#561588)

- **Palmyra & Winter Protocol Integration**: Dan Friedman discussing trade financing using Chainlink oracles for on-chain warehouse receipts; smart contracts written in ErgoScript; plan to build out Ergo Oracle Pools (v1 & v2 for Dexy Gold). (@msg#561010-561066)

- **ErgoHack X Theme (AI-Based)**: Hackathon running through June 1; ~70% of code already AI-generated in some submissions; emphasis on legitimate ecosystem projects rather than AI novelty. (@HQΣr, msg#561948, msg#561961)

- **Community Development & Tooling**:
  - **Pulse Chat Client**: HQΣr building minimal Pulse chat running locally with seedphrase, Nautilus, and ErgoPay support; no repeated signing per TX. (@msg#561562, msg#561612-619)
  - **Satergo v1.9.2**: Bug fix for Offline Vault released. (@kushti khushi, msg#560965)
  - **Satergo Website HTML**: Clean HTML/CSS version in development; discussion of donation button integration using Fleet SDK and Nautilus. (@c8, msg#561882-885, msg#561980-561987)
  - **Ergochats Livestream Aggregator**: Live stream tipping widget with character-based ERG values (tiger=1 ERG, dolphin=2 ERG); winner selection mechanisms for raffle integration discussed. (@HQΣr, msg#560928-561016)

- **Storage Rent & UTXO Consolidation**: Users only need last 4 years of history to trace UTXO creation; full history still required for mining origin tracing. Storage rent avoided by re-sending to same address or using wallet consolidation. (@kushti khushi, msg#561709-713; msg#561880-881)

- **Ledger Integration Effort**: Keystone wallet team reviewed and merged latest Ergo changes; Nautilus integration for full transaction/wallet end-to-end test planned post-vacation (2 weeks). (@kushti khushi, msg#561403)

- **Ergo vs. Cardano Comparison**: Grayman provided detailed breakdown covering PoW vs. PoS, fair launch, storage rent/demurrage, NIPoPoWs, node sync efficiency, and community technical culture. (@msg#561839-850)

- **Community Governance & DAO Tooling**: Discussion of multisig complexity (no user-facing solution on any chain yet), role-based voting for contribution valuation, and coordination failures with oracle-based governance. (@c8, msg#561473-561503)

---

## Important Decisions or Announcements

- [@kushti khushi, msg#561014, 2025-05-27]: Voting proposal for miners on 6.0 soft fork protocol update published on Ergo Forum; suitable voting height being discussed with pools.

- [@kushti khushi, msg#561064, 2025-05-28]: Sub-blocks DevNet ETA was met; code and seed node available for community testing and contribution.

- [@kushti khushi, msg#561066, 2025-05-28]: Sub-blocks mainnet ETA requires: 6.0 lock-in (miner voting dependent), security model informal review, implementation polish and testnet testing, and miner acceptance—broad consensus needed before precise ETA can be given.

- [@Armeanio, msg#561601-603, 2025-05-30]: Rosen Bridge Expansion Kit (RCS-003) released; proposed incentive model: outgoing fee % distribution to external integration teams to drive non-linear ecosystem growth.

- [@kushti khushi, msg#561093, 2025-05-28]: ErgoRaffle v2 repository made public.

- [@kushti khushi, msg#561421, 2025-05-29]: Weekly Update & AMA scheduled for May 29, 2025 at 13 UTC; Dan Friedman and kushti hosting.

- [@HQΣr, msg#561135, 2025-05-28]: Pulse marketing push planned for 2 weeks (post-Night Owl completion).

- [@TMR.ΣRG, msg#562127-130, 2025-06-01]: Raffle/prize pool release scheduled for Wednesday post-hack closure; spreading awareness for community participation.

- [@kushti khushi, msg#561693-694, 2025-05-31]: Comments on Proof of Useful Work published in Russian media (Forklog).

---

## Technical Q&A Worth Preserving

- **Q** (@anon_br): Does sub-blocks need to be stored after ordering box is found?  
  **A** (@kushti khushi, msg#561983): Pruned after few blocks. Current full blocks act as pruning mechanism for sub-blocks; higher-order pruning via NIPoPoWs and UTXO set snapshots available. (@msg#561983)

- **Q** (@HQΣr): Will sub-blocks implementation provide more endpoints in explorer infrastructure or just node?  
  **A** (@kushti khushi, msg#561966): Need to update explorers (Ergo Explorer, SigmaSpace, etc.) in parallel to make endpoints available for developers to test. (@msg#561966)

- **Q** (@Patato): Is storage rent only 4 years of blockchain history needed to operate?  
  **A** (@kushti khushi, msg#561710): Yes—all UTXOs created in last 4 years. Tracing creation back to miner UTXO requires full history; for most cases, former is sufficient. Blocks prior to 4 years can be stored on archival nodes or DHT. (@msg#561710-713)

- **Q** (@HQΣr): How can random winner selection be implemented on-chain for streaming participation?  
  **A** (@kushti khushi, msg#560985-988): Reuse logic from Ergo Raffle; see winner selection section in raffle documentation. (@msg#560987-988)

- **Q** (@Grayman): Is there such a thing as a private DEX (mixer + Spectrum DEX combo)?  
  **A** (@Patato): Ergomixer integration into Satergo feasible—embed existing Ergomixer software launched/stopped from wallet UI with localhost web interface, or run all locally but separately (Ergodex & Ergomixer). (@msg#561745-756)

- **Q** (@Patato): Is it possible to have a sidechain not merge-mined but instead using hash of block included in mainchain block, same block time?  
  **A** (Unresolved, msg#562148): Interesting conceptual question about merged block purposes (privacy, data focus); no immediate response in logs.

- **Q** (@c8): How do we assign monetary value to PR contributions without relying on lines of code?  
  **A** (@kushti khushi, msg#561512-513): Create recognizable value through code review (like existing OS projects). Alternative: rolling basic income—if merged N PRs into master in M months, receive newly minted tokens regularly. (@msg#561512-513)

- **Q** (@Sheetoshi): Will Ledger update supported coins list to include ERG?  
  **A** (@Pulsarz, msg#561426): ERG should be in Ledger Live list; unclear current status. Ledger Live support differs from hardware Ledger support. (@msg#561424-427)

- **Q** (@David Wong): How to install Ergo on Ledger Nano S (discontinued)?  
  **A** (@anon_br, msg#560922): Restoring Ledger mnemonic on Nautilus works fine; no need for Ledger app. (@msg#560922); alternatively, use Ledger Nano S Plus or Nano X with seed. (@Glasgow, msg#560914)

- **Q** (@c8): Does Satergo website HTML donation button need Fleet SDK integration?  
  **A** (@c8, msg#561899): Unclear if FleetSDK available via CDN with Nautilus donation support for vanilla JS. (@msg#561899); later: Patato implemented with Fleet SDK (~1.3k lines), but original goal was simpler popup without wallet integration. (@msg#561896, msg#562062-096)

---

## Links Shared

- [https://www.ergoforum.org/t/voting-proposal-for-miners-6-0-soft-fork-protocol-update/5157](https://www.ergoforum.org/t/voting-proposal-for-miners-6-0-soft-fork-protocol-update/5157): Miners voting proposal for Sigma 6.0 soft fork.

- [https://github.com/rosen-bridge/rcs](https://github.com/rosen-bridge/rcs): Rosen Bridge specifications including RCS-003 (Bridge Expansion Kit).

- [https://github.com/ErgoRaffle/raffle-documentation](https://github.com/ErgoRaffle/raffle-documentation): Raffle Winner selection mechanism documentation.

- [https://github.com/ErgoRaffle/raffle-v2](https://github.com/ErgoRaffle/raffle-v2): ErgoRaffle v2 public repository.

- [https://www.ergoforum.org/t/git-circles-framework-to-create-currencies-for-online-communities-around-open-source-projects/5160](https://www.ergoforum.org/t/git-circles-framework-to-create-currencies-for-online-communities-around-open-source-projects/5160): Git Circles community currency framework discussion.

- [https://savonarolalabs.github.io/crystal-pool/#/README](https://savonarolalabs.github.io/crystal-pool/#/README): Crystal Pools hackathon project (off-chain exchange with Basis).

- [https://satergo.com](https://satergo.com): Satergo wallet home (v1.9.2 with Offline Vault bug fix).

- [https://github.com/SavonarolaLabs/satergo-html](https://github.com/SavonarolaLabs/satergo-html): Clean HTML/CSS Satergo website in development.

- [https://ergochats.vercel.app/](https://ergochats.vercel.app/): Live stream aggregator with chat, tipping, escrow, and gift functionality.

- [https://scypher.vercel.app/](https://scypher.vercel.app/): SCypher tool for secure key derivation and cold wallet workflows.

- [https://forklog.com/exclusive/vyhod-za-predely-blokchejna-poleznyj-majning-i-kontseptsiya-proof-of-useful-work](https://forklog.com/exclusive/vyhod-za-predely-blokchejna-poleznyj-majning-i-kontseptsiya-proof-of-useful-work): Russian media article on Proof of Useful Work featuring kushti's comments.

- [https://coinmarketleague.com/coin/ergo](https://coinmarketleague.com/coin/ergo): Voting page for Ergo ranking (Ergo reached #5 during week).

- [https://www.coindesk.com/markets/2018/03/21/how-much-should-a-blockchain-cost-the-compelling-case-for-higher-fees](https://www.coindesk.com/markets/2018/03/21/how-much-should-a-blockchain-cost-the-compelling-case-for-higher-fees): Historical CoinDesk article on blockchain fees featuring kushti (2018).

---

## Unresolved Questions

- **Sub-blocks Exact Deployment Timeline**: While 6.0 soft fork voting height and testnet are underway, precise mainnet deployment ETA depends on miner consensus and security review completion. No fixed date stated. (@kushti khushi, msg#561001, msg#561066)

- **Exchange Confirmation Period Shortening**: Unclear if exchanges will adopt shorter deposit confirmation periods (3 min like ETH) with sub-blocks; depends entirely on exchange policy, not protocol capability. (@cannon_q, msg#561684; @Pulsarz, msg#561685-686)

- **Satergo Donation Button Final Implementation**: Fleet SDK integration vs. simpler popup approach still under discussion; code review pending decision on complexity trade-offs. (@c8, msg#561882-896, msg#562062-096)

- **Multisig User-Facing Solution**: No proper user-facing multisig solution exists on Ergo or other chains; identified as major gap in DAO tooling but remains unaddressed. (@c8, msg#561499, msg#561502)

- **Ergo Foundation Current Focus**: Exact activities and priorities of EF unclear; originally focused on development, infrastructure, and marketing per 2016 introduction, but current state unconfirmed. (@kushti khushi, msg#561105-107)

- **Kaspa Integration into Rosen Bridge**: Discussion of rsKAS utility on Ergo vs. Kaspa L1 smart contracts; no formal decision yet. (@kushti khushi, msg#561930, msg#561935)

- **Pulse Mixer/Privacy Features**: Discussion of adding mixer functionality to Pulse raises regulatory concerns; no concrete path forward decided. (@msg#561128-137)

---

## Community Notes

- **ErgoHack X AI Theme**: ~70% of submissions AI-generated; legitimacy of AI-assisted projects in hackathon evaluated on utility and merit, not novelty. Winners announced after June 1.

- **Ledger Nano S Deprecation**: Hardware support ended; users must restore seed to hot wallet (Nautilus) or upgrade to Nano S Plus/X. (@msg#560889-922)

- **Telegram Ban in Vietnam**: Telegram blocked in Vietnam; users reported needing VPN; potential impact on Southeast Asian community communication. (@msg#560799-801)

- **Pricing Momentum**: Ergo ranked #5 on CoinMarketLeague during week; community encouraged voting participation (without VPN for integrity).

- **Developer Contributions Recognition**: Tension around valuation of developer work (e.g., Ledger integration bounty vs. time/complexity); proposed DAO-based role voting for contribution assessment. (@msg#561504-537)