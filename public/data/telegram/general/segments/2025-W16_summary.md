# Ergo General Chat Summary — 2025-W16 (2025-04-14 to 2025-04-20)

## Key Topics Discussed

- **ErgoHACK X (10th Anniversary Edition)**: Announced May 25 – June 1, 2025 with $9,000 ERG prize pool and AI-on-Ergo theme. Registration open at ergohack.io.

- **Token Minting Platform with AI Integration**: @Arohbe announced development of a token minting dApp with integrated AI generation. Seeking 5-6 beta testers before public beta and potential ErgoHack submission.

- **Ergo Mainnet Stability & Speed Improvements**: kushti discussed potential optimizations (sub-blocks, sidechains, layer 2 solutions) post-Ergoversary, with community exploring testnet parameter tweaking. No consensus on implementation path yet.

- **CEX Listing Challenges**: qx() clarified Kraken integration barriers—L1 complexity, lack of token incentives for exchanges, and current market dynamics. Emphasized CEX access as temporary solution; long-term vision is "where we're going, we won't need ramps."

- **rsERG vs ERG Performance**: Discussion on why Rosen-backed ERG (rsERG) on Cardano outperforms native ERG on-chain—attributed to Ergo's 2-minute block time unsuitable for rapid DEX trading. Sub-blocks proposed as solution.

- **DeFi Protocol Maturity**: Discussion of Dexy Protocol (1:1 reserve design) scalability vs. SigmaUSD (4:1 / 3:1 designs), Oracle Pools v1 & v2, and trade financing use cases via Palmyra & Chainlink partnership.

- **Handshake DNS Integration**: Ergo ecosystem secured .ergo, .erg, .mew, .palmyra domains on Handshake (PoW-secured decentralized DNS). Positioned as disintermediation tool paralleling Ergo's role in money.

- **Ergo 6.0 Release Candidate**: Ergo protocol reference client v6.0.0-RC5 released. Audit continuing; mainnet voting height TBD.

- **Community Sentiment & Price Concerns**: User raised concerns about lack of tier-1 CEX listings, low volume, and Ergo's dependence on ADA pumps for momentum. Countered by builders emphasizing ecosystem development over price speculation.

- **Colchise Educational Project**: Chris Ray proposed structured course using open-source Ergo code to teach developers, with tokenized incentives (TGE distribution) for participants and contributors.

## Important Decisions or Announcements

- [@kushti khushi, msg#554734, 2025-04-14]: **ErgoHACK X announced** — May 25–June 1, 2025, $9,000 ERG prize pool, AI on Ergo theme. Registration: https://ergohack.io/register/

- [@kushti khushi, msg#555269, 2025-04-18]: **Ergo protocol reference client v6.0.0-RC5 released**. Audit continues; mainnet voting starting height pending final release.

- [@qx(), msg#555019, 2025-04-16]: **Ergo Meetup 2025 (Colorado Springs)** — GitHub signups live. Fork/PR based registration at https://github.com/andrehafner/ergo_meetup_2025/tree/main. Event structure: Friday evening → Saturday (lunch/dinner/activities) → Sunday (breakfast/checkout).

- [@🤝, msg#555372, msg#555373, 2025-04-19]: **Handshake domains secured** — .ergo, .erg, .mew, .palmyra registered; available for community building and experimentation.

- [@Arohbe, msg#554751, 2025-04-14]: **Token minting platform with AI generation in beta** — Seeking 5-6 beta testers; considering ErgoHack submission pending bug fixes and public beta readiness.

## Technical Q&A Worth Preserving

- **Q** (@Giufa Online): Are some transactions not appearing on Ergo blockchain scraper?
  **A** (@HQΣr): Canceled transactions or those not being scraped. DEX swaps are scraped across all exchanges (MewFinance, CruxFinance, etc.).
  
- **Q** (@Yulius Kristianto): Where is the Javanese translation file with errors?
  **A** (@qx()): Frontend Javanese translation has missing brackets. qx() has a working fixed version; suggested running through AI for final correction.

- **Q** (@Jack Σ): How would gamers mine Ergo passively when not using computers?
  **A** (@Jack Σ, @Dan Friedman via AMA): Suggestion to make mining attractive to gamers + innovative: in-game item/reward redemption for real mining contributions. Dan noted this could drive awareness and engagement.

- **Q** (@Bye H8er): Will there be ERG/Palmyra yield farming on Ergo DEX with ErgoName support?
  **A** (@HQΣr): (1) Dependent on Palmyra team building yield farm contracts. (2) Yes when ErgoNames are finished.

- **Q** (@Unknown): Does delayed oracle data impact Dexy Protocol?
  **A** (@Richi [MANA]): Key question flagged but deferred—AI-managed Dexy Bank interventions posited as longer-term solution.

- **Q** (@Chris Ray): Options for tracking demurrage opportunities on upcoming dashboard?
  **A** (@Marc the Shark, msg#555436): Marc working with pgr on fee estimation API integration to enable demurrage tracking.

- **Q** (@Ergochampion): If ERG sent to CoinEx during wallet maintenance, are funds lost?
  **A** (@GliTcH_, @cannon_q): Funds not lost if wallet not rotated; will be credited once maintenance ends. Contact support if needed.

## Links Shared

- [https://ergohack.io/register/](https://ergohack.io/register/): ErgoHACK X official registration (AI on Ergo, May 25–June 1, 2025)
- [https://github.com/andrehafner/ergo_meetup_2025/tree/main](https://github.com/andrehafner/ergo_meetup_2025/tree/main): Ergo Meetup 2025 (Colorado Springs) signup repo
- [https://www.youtube.com/live/uuSQNq6Mhqg](https://www.youtube.com/live/uuSQNq6Mhqg): Weekly Ergo AMA (April 17, 2025) — Kraken listing, gaming mining incentives, speed improvements discussed
- [https://x.com/ERG_Armeanio/status/1914052487482384392](https://x.com/ERG_Armeanio/status/1914052487482384392): Armeanio on AI compute & merge-mined PoW mining balance
- [https://x.com/digitalisdns/status/1913652545601392894?s=46](https://x.com/digitalisdns/status/1913652545601392894?s=46): Handshake DNS & Ergo domain announcement
- [https://hackathon.web3privacy.info/](https://hackathon.web3privacy.info/): Web3 Privacy-focused hackathon (separate from ErgoHACK X, fall 2025)
- [https://www.coincarp.com/id/currencies/peperg/](https://www.coincarp.com/id/currencies/peperg/): PEPERG listing on Coincarp
- [https://linktr.ee/peperg](https://linktr.ee/peperg): PEPERG Linktree (updated by Yulius)
- [https://www.alltrails.com/trail/us/colorado/paul-intemann-nature-trail](https://www.alltrails.com/trail/us/colorado/paul-intemann-nature-trail): Recommended hiking trail near Colorado Springs Ergo Meetup venue
- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC5](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC5): Ergo v6.0.0-RC5 release notes
- [https://mewfinance.com](https://mewfinance.com): MewFinance DEX & banking platform
- [https://bank.mewfinance.com](https://bank.mewfinance.com): MewFinance Bank (minimal SigmaUSD swap fees mentioned)

## Unresolved Questions

- **Sub-blocks implementation**: kushti indicated drafts, sketches, and PRs exist post-Ergoversary but no consensus path chosen between sub-blocks, sidechains, or layer 2. Community interested in testnet exploration; kushti seeking volunteers to lead effort.

- **Dexy Protocol long-term stability**: Richi flagged questions around delayed oracle data impact and AI-managed interventions as future research areas.

- **Ergo 6.0.0 mainnet voting timeline**: Final release pending audit completion; mainnet voting height still TBD.

- **Handshake domain utilization plan**: @🤝 indicated specifics "coming ASAP" but concrete roadmap for .ergo, .erg, etc. not yet detailed.

- **Colchise course structure & incentive model**: Chris Ray's proposed educational project flagged as "looking great" by Marc the Shark but full logistics (participant onboarding, TGE mechanics) deferred.

- **Tier-1 CEX integration feasibility**: Debate remains open on whether future protocol improvements (sub-blocks, sidechains) will attract major exchanges or whether rsERG on Cardano is the pragmatic short-term solution.

---

**Summary**: W16 was a high-activity week centered on ErgoHACK X launch, Ergo Meetup coordination, and substantive protocol discussions (speed improvements, DeFi stability). Community sentiment mixed: builders focused on ecosystem development; some investors concerned about CEX listings and price momentum tied to ADA. Key technical developments: v6.0.0-RC5 release, Handshake DNS integration, and renewed interest in testnet-driven optimization research.