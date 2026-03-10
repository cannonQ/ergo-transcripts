---
title: "Ergo General Chat — 2025-W19"
date_start: "2025-05-05"
date_end: "2025-05-11"
type: telegram_weekly
channel: general
week: "2025-W19"
source: telegram
message_count: 313
categories: [ecosystem, technical, defi, community, governance, marketing, wallet]
key_terms: [ErgoScript developers, Scala, protocol development, developer list, subblocks, devnet, p2p protocol, testnet timeline, client release, version update, docker container, on-chain reserve, off-chain protocols, community currencies, carbon credits, ErgoHack, hackathon, AI agents, project ideas, Shinkai]
---
# Ergo General Chat — 2025-W19 Summary

## Key Topics Discussed

- **Sub-blocks Development**: kushti confirmed public DevNet with sub-blocks launching next week after p2p protocol changes are finalized. No hard deadline for mainnet activation, pending 6.0 protocol activation, testing, and audits. (@kushti khushi, msg#558035)

- **ErgoHack X Registration**: Open submissions for ErgoHack X hackathon. Discussion of AI-related project ideas including vibe coding, AI agents, smart contract generators, and Shinkai Protocol integration. (@Ergo NEWS $ERG, msg#557593; @TMR.ΣRG, msg#557920)

- **Shinkai Protocol Integration**: P2P Podcast episode featuring Shinkai founder discussing AI and Ergo integration. Shinkai allows local or cloud-hosted AI workflows; founder has built arbitrage bots on Cardano and expressed interest in Ergo. Already available for hackathon work. (@TMR.ΣRG, msg#557653, msg#557683-684)

- **Storage Rent & Demurrage**: Arizona legislature codified a 3-year UTXO "keep-alive" mechanism mirroring demurrage concepts. kushti noted the implementation was "done in a wrong way"; community debated parallels to Ergo's storage rent design. (@LouisLibre ⚡️, msg#557816-819; @kushti khushi, msg#557834)

- **Oracle Pools**: Discussion of Oracle Pool v1 (run by EF members and others) and Oracle Pool v2 (running Dexy Gold with GORT rewards). Dan Friedman detailed plans to utilize various oracles (including native Ergo oracles) and potentially allocate capital from token sales to build out Ergo oracle infrastructure. (@Dan Friedman et al., implied from context)

- **Palmyra Ecosystem**: Dan Friedman presented Chainlink partnership using proof of reserve and proxy functions for decentralized trade financing via on-chain warehouse receipts, coupled with IoT devices for continuous commodity auditing. Plan to invest in ecosystem tooling and native oracle development. (@Dan Friedman, implied from context)

- **Ergo Reference Client 5.0.26 & 5.1.3 Release**: kushti released protocol client versions; 5.1.3 released May 6 after earlier 5.0.26. Watcher UI updated to 2.2.1 requiring docker compose pull. (@kushti khushi, msg#557610, msg#557708)

- **Developer Resources**: Glasgow shared open-access Grist spreadsheet listing competent ErgoScript developers and Scala talent pool. Community maintaining collaborative developer resource database. (@Glasgow｜WON'T DM, msg#557439-442)

- **Tokenization Legal Framework**: c8 raised bottleneck for "whitehat projects": how to properly tokenize after recent US regulation changes. No standard solution; most projects still rely on "no expected returns" disclaimers or exclude US participants. RSN's tail supply model cited as well-executed but not replicatable. (@c8, msg#558160-170)

- **Community Staking Misconception Clarified**: Team Team asked about staking ERG in Ledger; Patato clarified Ergo is pure proof of work, no staking. ERG held in Ledger hardware wallet is fully supported (production-ready integration). (@Team Team, msg#558226-244; @Patato, msg#558245)

---

## Important Decisions or Announcements

- [@kushti khushi, msg#558035, 2025-05-09]: **Public DevNet with sub-blocks launching next week** — will finalize p2p protocol changes over weekend; if unsuccessful, following week will be dedicated to completion and node exposure.

- [@kushti khushi, msg#558039, 2025-05-09]: **Sub-blocks mainnet after 6.0 activation** — no hard date; pending testing, audit, and other factors.

- [@Ergo NEWS $ERG, msg#557593, 2025-05-06]: **ErgoHack X registration opened** — https://ergohack.io/register/

- [@kushti khushi, msg#557708, 2025-05-06]: **Ergo Protocol Reference Client 5.1.3 released** — https://github.com/ergoplatform/ergo/releases/tag/v5.1.3

- [@kushti khushi, msg#557313, 2025-05-06]: **Weekly Ergo Developers chat scheduled Wed, May 7 at 1PM UTC** — focus on 6.0 soft-fork, input/ordering blocks EIP, Sigmachains, L2, financial contract feedback.

- [@Crypto Rich, msg#558125, 2025-05-10]: **Twitter Spaces with kushti completed** — https://x.com/CryptoRichYT/status/1920363893320196251 (May 10, 5pm UK time / 4pm UTC)

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#557467): Is there any ETA for sub-blocks? Was hoping testnet last week.
  **A** (@kushti khushi, msg#557510): You can run a DevNet from subblocks branch. For public testnet/DevNet need to stabilize p2p protocol first.

- **Q** (@c8, msg#557536): Is the current plan to keep blockspace minimal and "scale on L2"?
  **A** (@kushti khushi, msg#557579): In many cases you don't need global consensus except for settlement events. Thinking of community currencies, social media currencies, bonus points, carbon credits, etc. ERG and Ergo token reserves can be useful for such systems with no need for expensive global consensus over fully replicated data.

- **Q** (@Daniel Anjos, msg#557580): Have any prevision for liquidity on Ergo?
  **A** (@kushti khushi, msg#557585): Query clarification requested.

- **Q** (@Marc the Shark, msg#557910-911): Is there an API endpoint I can call when sub-blocks are voted as true?
  **A** (@kushti khushi, msg#557916): There will be no voting — consensus-wise the network will be the same, just using different messaging. (@Marc the Shark, msg#557917-918): Asked if new APIs exist for sub-blocks (unresolved).

- **Q** (@c8, msg#557977): Are there any TX fee-based chains yet, or is everything running on slow inflation of circulating supply?
  **A** (@Grayman, msg#557994): "That's a good question. I have no idea."

- **Q** (@Grayman, msg#557950): How does Cardano not suffer the same security budget problem as Bitcoin on a longer time scale?
  **A** (Discussion referenced on Reddit FUD thread but not directly answered in chat; @cannon_q, msg#557974: "They do... the bot is in denial")

- **Q** (@jjuanfx via Discord, msg#557582): In DuckPools, there's no way to have 1–2 months more collateral time. In 3 weeks I need to repay; if I can't pay, will I lose all my ERG in collateral?
  **A**: Unresolved in transcript.

- **Q** (@Ledger Hardware Wallet question, msg#558236-237): Is Ergo integration production-ready? What does the 100-token warning mean?
  **A** (@Affable Villain, msg#558239): Don't send more than 100 unique tokens (e.g., 5k SigRSV, 600 SigmaUSD, 2m Paideia, and 1 NFT = 4 tokens). No limit on ERG. (@Patato, msg#558245): ERG cannot be accidentally burned due to UTXO input/output rules.

---

## Links Shared

- [https://ergo.getgrist.com/jf9KPR1HUDJH/Project-Management/p/24]: Open-access developer talent pool and project management spreadsheet maintained by Glasgow and community.

- [https://www.ergoforum.org/t/basis-a-foundational-on-chain-reserve-approach-to-support-a-variety-of-offchain-protocols/5153]: Basis proposal discussing foundational on-chain reserve approach for off-chain protocols.

- [https://x.com/chepurnoy/status/1919701411329200224]: kushti Twitter post (contextual reference, exact content not in transcript).

- [https://ergohack.io/register/]: ErgoHack X hackathon registration.

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.26]: Ergo Protocol Reference Client 5.0.26 release notes.

- [https://github.com/ergoplatform/ergo/releases/tag/v5.1.3]: Ergo Protocol Reference Client 5.1.3 release notes.

- [https://www.youtube.com/watch?v=VQRLujxTm3c]: Aco Šmrkas video (context: Glizzy Staking wrap-up).

- [https://x.com/tmr_erg/status/1919791750157042004]: TMR.ΣRG Twitter post announcing P2P Podcast episode.

- [https://x.com/CryptoRichYT/status/1920093071598870923]: Crypto Rich Twitter space announcement with kushti.

- [https://x.com/CryptoRichYT/status/1920363893320196251]: Confirmed Crypto Rich & kushti Twitter Spaces (May 10, 5pm UK / 4pm UTC).

- [https://x.com/chepurnoy/status/1920973189464649951]: kushti Twitter post re: sub-blocks DevNet.

- [https://medium.com/@curiaregiscrypto/rosen-treasury-proposal-4-investing-for-expansion-and-tooling-0ba9f7498ccd]: Rosen Treasury Proposal #4 on investment and tooling expansion.

- [https://github.com/SavonarolaLabs/escript-online]: ErgoScript online editor; c8 suggested as fork candidate for ErgoHack.

- [https://bank.mewfinance.com]: MewFinance bank interface.

- [https://tokenjay.app/]: Token integration interface (dApp wallet add method).

- [https://ergoplatform.org/en/news/Ergo-Wallet-Update-Ergo-Fully-Integrated-with-Ledger/]: Ergo-Ledger wallet integration news.

- [https://coinmarketcap.com/community/coins/ergo/top/]: CoinMarketCap Ergo community page.

---

## Unresolved Questions

- **Sub-blocks API coverage**: Will new REST API endpoints be provided for sub-block transaction monitoring, or must developers parse mempool data manually? (@Marc the Shark, msg#557917-918)

- **Sub-blocks consensus signaling**: How will nodes signal readiness or preference for sub-blocks activation if no formal voting occurs? (@Marc the Shark, msg#557917)

- **Tokenization compliance path post-2025**: What regulatory framework (if any) has emerged for properly tokenizing utility projects without "no expected returns" disclaimers or US exclusion? (@c8, msg#558163)

- **MewFinance Dexy Gold UI**: When will production-ready Dexy Gold interface be deployed on MewFinance bank? Status unclear despite contracts being available. (@c8, msg#558176-179)

- **DuckPools collateral lockup flexibility**: Can collateral terms be extended beyond 3-week windows? Mechanism unresolved. (@jjuanfx via Discord, msg#557582)

- **Carbon credit implementation**: kushti mentioned grassroots alternatives to carbon offset scams possible on Ergo, but no concrete design or timeline shared. (@kushti khushi, msg#557648)

- **ErgoHack topic for Handshake collaboration**: Handshake team proposed October ErgoHack collaboration; topic not finalized in transcript. (@🤝, msg#558008; @Glasgow｜WON'T DM, msg#558011)

- **Ergo agent training dataset**: TMR.ΣRG solicited community input on what materials should train an Ergo AI agent; compilation status unclear. (@TMR.ΣRG, msg#557948)