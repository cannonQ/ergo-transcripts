---
title: "Ergo General Chat — 2024-W07"
date_start: "2024-02-12"
date_end: "2024-02-18"
type: telegram_weekly
channel: general
week: "2024-W07"
source: telegram
message_count: 558
categories: [defi, governance, bridges, marketing, wallet, community, ecosystem, technical]
key_terms: [stablecoin, USD peg, gold backing, Dexy, Gluon, Kraken listing, crowdfunder, market makers, XBTO Global, Xeggex, MEXC, Rosen bridge, Bitcoin, Ethereum, cross-chain, rsERG, marketing, social media, Farcaster, visibility]
---
# Ergo General Chat — 2024-W07 Summary

## Key Topics Discussed

- **Market Making & CEX Listings**: Community discussion on deploying market makers to support CEX listings (Kraken, MEXC, Xeggex). Proposals include hiring third-party MMs or running community-operated Hummingbot instances with metrics gathering.

- **Stablecoin Frameworks**: Interest in Dexy (Dexy Gold) and Gluon Gold as alternatives to USD-pegged stablecoins. Discussion of gold-backed digital assets as a hedge against fiat currency debasement.

- **Rosen Bridge Adoption**: Rosen Bridge positioning for cross-chain liquidity; rsERG/ADA LP yielding 8.18% ROI on Spectrum DEX. Mentions of Chainlink partnership potential via Palmyra project.

- **Protocol Improvements**: Sub-blocks mentioned as forthcoming UX improvement. Faster block times and block height vs. timestamp implications discussed but deferred pending testnet community research.

- **Wallet & Infrastructure Updates**: Nautilus wallet issues (malformed transaction, box size errors) troubleshot. Minotaur v2.0-rc1 released. Ledger integration being ported to new SDK (expected ~2 weeks).

- **Application Ecosystem**: Cyberverse NFT minting, Paideia DAO funding (200K ADA from Catalyst), DuckPools lending, CruxFinance (Crooks dApp), CoinCarp/MEXC listings for community tokens (Comet).

- **Token Volume & Analytics**: Discussion of CoinGecko distinguishing rsERG volume from native ERG; proposal to handle wrapped tokens on multi-chain listings like other projects do.

## Important Decisions or Announcements

- [@kushti_ru, msg#474352, 2024-02-14]: Xeggex listing status: "Soon as we have ironed out everything"
- [@kushti_ru, msg#475120, 2024-02-17]: Xeggex listing live with 5K ERG liquidity requirement ($200 one-time fee for advanced MM service available)
- [@qx(), msg#474571, 2024-02-15]: Announced CW as Chief Meme Officer (CMO) with community backing; clarified role as funded by Armeanio personally, not EF
- [@glasgowm, msg#474073, 2024-02-13]: Ergo support on Ledger being ported to new SDK; expected within ~2 weeks
- [@qx(), msg#475266, 2024-02-18]: MM strategy recap: (1) Run Hummingbot with community members for metrics; (2) Narrow 3rd-party MM options to 1–3 by week's end and initiate negotiations
- [@MHS_SAM, msg#475303, 2024-02-18]: Minotaur wallet v2.0-rc1 release candidate launched (testing phase, not production-ready)
- [@kushti_ru, msg#475119, 2024-02-17]: Xeggex listing proposal publicly posted with community discussion link

## Technical Q&A Worth Preserving

- **Q** (@MavΣrickBg, msg#474420): Nautilus wallet throwing "[GraphQL] Malformed transaction: Every input of the transaction should be in UTXO" error on all transaction signing attempts.
  **A** (@qx(), msg#474421–441): Check which node server you're using (tried switching to multiple nodes); attempt sending single 1 ERG to yourself first to isolate the issue. If using Cyberverse or NFT-heavy wallet, LP and Farm tokens may be in same UTXO causing box size limits; send them to yourself in separate transaction to split boxes.

- **Q** (@Ben, msg#474383–391): ADA transferred to Trezor shows no funds available to exchange or send.
  **A** (@Green_Diamond, msg#474388, 397): This is Cardano-specific, not Ergo. Direct to Cardano support: https://forum.cardano.org/c/english/communitytechnicalsupport/7

- **Q** (@qx(), msg#475117–118): How to transfer entire wallet to another address when tokens present?
  **A** (@qx(), msg#475117–118): Send all tokens along with ERGs. Tokens require minimum ~0.0001 ERG in same UTXO to be transferred; moving both together allows full wallet sweep.

- **Q** (@OxCapitulation, msg#475305–307): Why not fully decentralize MM via scaled grid bots on DEX with fee incentives to LPs instead of third-party MM hiring?
  **A** (@qx(), msg#475308–316): Limited by secure smart contract implementation capability at present. First phase: gather Hummingbot metrics this week; refine proposal for decentralized alternative in parallel.

- **Q** (@lexymon, msg#474385, 394): Article claims sub-blocks already introduced to protocol; comparisons to Kaspa/Alephium missing tradeoff discussion.
  **A** (implicit): Sub-blocks not yet live; articles may be aspirational or outdated. Kaspa/Alephium speed comparisons should highlight protocol tradeoffs, not just performance.

- **Q** (@Patato, msg#475326): Pruned full node sync time claimed as 11 minutes.
  **A** (@qx(), msg#475327): Encouraged submission to CW's competition/benchmark (no further details provided in chat).

## Links Shared

- [https://ergoraffle.com/](https://ergoraffle.com/): Ergo Raffle for CEX listing fundraisers (Kraken, MEXC)
- [https://t.me/ErgoKrakenFundraiser](https://t.me/ErgoKrakenFundraiser): Kraken crowdfunding group
- [https://t.me/crooksfi](https://t.me/crooksfi): CruxFinance (Crooks) dApp launch group; airdrop for early participants
- [https://docs.google.com/document/d/1bNlYZtCUlGB07Kpa0uGfDT4rSA6pl6aO57h9UwBQWeA/edit](https://docs.google.com/document/d/1bNlYZtCUlGB07Kpa0uGfDT4rSA6pl6aO57h9UwBQWeA/edit): Community MM proposal (baked outline, work in progress)
- [https://cornell.zoom.us/j/96198769294?pwd=RkZnN0xoMVJ1RTI2TkxEcXBxeWVIUT09](https://cornell.zoom.us/j/96198769294?pwd=RkZnN0xoMVJ1RTI2TkxEcXBxeWVIUT09): Sigmanauts meeting Zoom link (2024-02-18, 15:30 UTC)
- [https://github.com/minotaur-ergo/minotaur-wallet/releases/tag/v2.0.0-rc1](https://github.com/minotaur-ergo/minotaur-wallet/releases/tag/v2.0.0-rc1): Minotaur wallet v2.0-rc1 release
- [https://t.me/minotaur_ergo](https://t.me/minotaur_ergo): Minotaur wallet Telegram group
- [https://ergonaut.space/hi-in/Ghoshanapatra](https://ergonaut.space/hi-in/Ghoshanapatra): Hindi localization page (URL bug noted: site incorrectly adds `/en/` prefix to Hindi URLs)
- [https://api.ergo.aap.cornell.edu/api/v1/boxes/unspent/byAddress/](https://api.ergo.aap.cornell.edu/api/v1/boxes/unspent/byAddress/): API to inspect UTXO boxes by address (replace `ADDRESSHERE`)
- [https://x.com/rosenbridge_erg/status/1757104592410833064](https://x.com/rosenbridge_erg/status/1757104592410833064): Rosen Bridge announcements
- [https://twitter.com/DjedAlliance/status/1756227214029250742](https://twitter.com/DjedAlliance/status/1756227214029250742): Djed Alliance updates

## Unresolved Questions

- **MM Engagement Timeline**: Third-party MM negotiations narrowed to 1–3 candidates by end of week (2024-02-18), but final pricing, terms, and go-live date not confirmed in chat.
- **Sub-blocks Testnet Roadmap**: Community interest in running 6.0 testnet with sub-blocks and faster block parameters. kushti invited interested parties to DM, but no formal call-out or dedicated channel announced.
- **CoinGecko rsERG Listing**: HQΣr flagged issue that CoinGecko refuses to count rsERG volume as native ERG volume and wants separate listing. Status of resolution unclear.
- **MEXC Raffle Launch**: Multiple inquiries about MEXC raffle timing and marketing strategy (msg#475318–324); @qx() deferred details to another working group but no date or announcement link provided.
- **Dexy/Gluon Launch Timeline**: Mentioned as "upcoming" and "exciting" but no release date or dev status shared in this week's chat.
- **Palmyra Chainlink Partnership Details**: Dan Friedman's presentation on Palmyra + Chainlink oracles was discussed in prior weeks; follow-up implementation milestones not repeated here.

---

**Note**: This week featured high community engagement (558 messages, 59 participants) but was dominated by meme content and tip spam. Technical substance concentrated in MM discussions, wallet troubleshooting, and infrastructure updates. The chat reflects active ecosystem development but limited core protocol announcements.