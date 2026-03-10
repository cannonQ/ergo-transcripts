---
title: "Ergo General Chat — 2025-W26"
date_start: "2025-06-23"
date_end: "2025-06-29"
type: telegram_weekly
channel: general
week: "2025-W26"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2025-W26 Summary

## Key Topics Discussed

- **Ergo Protocol 6.0.0 & 6.1.0 Releases**: kushti released version 6.0.0 on 2025-06-23 with voting for sub-blocks set to begin at block height 1,561,601 (~11.5 days from release). RocksDB optimization deployed in 6.1.0 (2025-06-26) for improved node performance.

- **Storage Rent Collection**: HeroMiners and Sigmanauts Mining Pool both activated automated storage rent collection. Recent block rewards showed 17.314 ERG in rent payouts, demonstrating the mechanism is functioning as designed.

- **Dexy Protocol Progress**: DexyGold reserves growing faster than LP size; kushti arbitraging between bank and LP while improving protocol health. Next steps include updating USD pool to v2 and launching GluonUSD and DexyUSD.

- **Rosen Bridge Treasury Proposal**: Armeanio published proposal for 5% incentive allocation to encourage Rosen bridge contribution and adoption across multiple chains (non-KYC requirement emphasized).

- **ErgoHack X Showcase**: Community showcasing five projects (CodeUTXO, Cortex, SCypher, RustChain, SigmaQuest, Game of Prompts, Pulse) with voting approaching. Projects span AI mining, encrypted chat, seed phrase security, and decentralized games.

- **Ergo Infrastructure DAO Launch**: InfraDAO announced to decentralize node, explorer, API, and GraphQL endpoint hosting. Load-balanced P2P endpoints live (6.1.0 RocksDB nodes). DAO aims to raise ~$800/year for Cloudflare costs and distribute infrastructure globally.

- **Stealth Addresses & Privacy**: Grayman raised concerns about privacy tooling for business activity, noting stealth addresses enable statistical analysis but need better UX. Discussion on mixing, demurrage implications for tokens on stealth addresses, and local wallet implementations (Satergo, Graphene OS).

- **Sub-Blocks Development**: kushti shared WIP specification for sub-blocks (input blocks) to improve throughput via frequent, lower-difficulty block candidates pruned after inclusion in summary blocks. Invited feedback from community.

- **Ergo Meetup 2025**: Community organizing October meetup in Colorado Springs with anticipated attendance from kushti, Armeanio, Dan Friedman, qx(), and Chris Ray.

## Important Decisions or Announcements

- [@kushti, msg#564712, 2025-06-23]: Ergo protocol reference client 6.0.0 released.
- [@kushti, msg#564717-718, 2025-06-23]: Voting start height set to 1,561,601; majority miner updates expected to trigger voting ~11.5 days after release.
- [@Armeanio, msg#564723, 2025-06-23]: Working on Rosen treasury proposal to add incentives for developer polish and adoption.
- [@HeroMiners & Sigmanauts, msg#564869, 2025-06-23]: Storage rent collection now active and automated on both mining pools.
- [@kushti, msg#565021, 2025-06-25]: DexyGold performing well; next phase includes v2 USD pool update and launch of GluonUSD and DexyUSD.
- [@qx(), msg#565648, 2025-06-29]: InfraDAO announced with load-balanced community-run explorers, nodes, APIs, and GraphQL endpoints. Membership open; ~$800/year budget for Cloudflare.
- [@Andy L, msg#565677, 2025-06-29]: Ergoversary (6-year anniversary) AMA scheduled for Tuesday, July 1st at 13UTC with kushti, Armeanio, Dan Friedman, and qx().
- [@kushti, msg#565258, 2025-06-26]: Ergo protocol reference client 6.1.0 released (6.0.0 with RocksDB).

## Technical Q&A Worth Preserving

- **Q** (@Dmitriy B., msg#565036): Why is Ergo working so fast today and slower yesterday during dApp testing?
  **A** (@qx(), msg#565047): Block time averages 2 minutes; you see variance between fast and slow blocks. Use indexed node for better dApp performance.
  **A** (@kushti, msg#565050): Consider chaining in the mempool if your app needs predictability.

- **Q** (@DrTwentyOne, msg#565273): Does Ledger Nano S still support Ergo?
  **A** (@Glasgow, msg#565281): Ledger phased out Nano S support years ago. Use Nautilus wallet with Ledger Nano X or Plus.

- **Q** (@Shai Deshe, msg#565623): Which protocol concept to study: Sigma chains or Autolykos?
  **A** (@kushti, msg#565627): Ergo currently follows Bitcoin-style PoW with ASIC-resistant Autolykos. Sub-blocks (input blocks) WIP to improve throughput; draft spec available at GitHub. Invited collaboration on specification review.

- **Q** (@Grayman, msg#565737-751): How to implement default privacy wallet with stealth address management and demurrage protection?
  **A** (@TMR.ΣRG, msg#564767): Simple approach: mix funds into fresh wallet, spend, repeat when depleted. Satergo is example of local wallet capable of running mixer.
  **A** (@qx(), msg#564768): Mixer has been run on phones; scripts available but taken down; Termux installation possible on Android.

- **Q** (@Johnno, msg#564798-846): Why can't I swap rsERG on Splash or MinSwap?
  **A** (@kushti, msg#564838-846): Issue is on Cardano wallet side, not Ergo. Check Cardano wallet support. Trading occurs on TapTools; problem specific to your wallet.
  **A** (@HQΣr, msg#564821): Can bridge to Ergo and swap for rsADA at MewDex instead.

- **Q** (@Velvia, msg#565409-412): Does ErgoPay QR work on Spectrum DEX?
  **A** (@kushti, msg#565410): Works on MewFinance; ErgoDex issue unresolved.

- **Q** (@Flying Pig, msg#565504-523): Network error on Paideia when submitting long comment; how to avoid?
  **A** (@qx(), msg#565508-509): Always copy text first; use clean wallet; sometimes dirty wallets cause timeouts. Paideia is now community-maintained.

- **Q** (@Sarge, msg#565530-557): What is demurrage and UTXO consolidation?
  **A** (@cannon_q, msg#565536-549): Demurrage (storage rent) charged after 4 years inactivity; consolidate via Nautilus wallet > optimize > costs ~0.0011 ERG; merges boxes into single transaction.

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0]: Ergo protocol reference client 6.0.0 release.
- [https://github.com/ergoplatform/ergo/releases/tag/v6.1.0]: Ergo protocol reference client 6.1.0 release (RocksDB).
- [https://app.paideia.im/rosenguardsetv1/proposal]: GARD's DAO proposal interface for community voting.
- [https://app.paideia.im/rosenguardsetv1/discussion/5-rosen-treasury-proposal-5efced89-bc5b-4bf4-83c8-1fe794b7e188]: Rosen Treasury Proposal 5 discussion (incentives for bridge contributions).
- [https://curiaregiscrypto.medium.com/rosen-treasury-proposal-5-incentives-for-rosen-contribution-stardards-9f5cabeed7f9]: Armeanio's Medium article on Rosen treasury incentive proposal.
- [https://sigmanauts.com/application/]: Sigmanauts mining pool application form.
- [https://github.com/ergoplatform/ergo/blob/8c973c5d0542c5d438690c6d4d0164b2395640fa/papers/inputblocks/inputblocks.md]: Sub-blocks (input blocks) specification draft.
- [https://www.docdroid.net/mcoitvK/ergopow-pdf]: Autolykos PoW function description.
- [https://explorer-p2p.ergoplatform.com]: InfraDAO load-balanced Ergo Explorer.
- [https://graphql-p2p.ergoplatform.com]: InfraDAO load-balanced GraphQL endpoint.
- [https://api-p2p.ergoplatform.com]: InfraDAO load-balanced API endpoint.
- [https://node-p2p.ergoplatform.com/panel]: InfraDAO load-balanced node panel.
- [https://youtu.be/cb22Sd95Rg4]: CodeUTXO demo (ErgoHack X).
- [https://youtu.be/TxAoBu6I8kQ]: Cortex AI GPU miner demo (ErgoHack X).
- [https://youtu.be/tUsw5NZdwmw]: SCypher seed phrase encryption demo (ErgoHack X).
- [https://youtu.be/l5Qd0NTcuAU]: RustChain Proof-of-Antiquity demo (ErgoHack X).
- [https://youtu.be/AlPaMbVyt4k]: SigmaQuest AI puzzle game demo (ErgoHack X).
- [https://youtu.be/ApeN_hckNKs]: Game of Prompts AI logic demo (ErgoHack X).
- [https://youtu.be/S1e6fTpj0TE]: Pulse decentralized chat demo (ErgoHack X).
- [https://youtube.com/live/Ku3fHTUagEs]: Ergoversary (6-year) AMA scheduled Tuesday, July 1st, 13UTC.
- [https://coinmarketleague.com/coin/ergo]: CoinMarketLeague Ergo voting page.

## Unresolved Questions

- **Sub-blocks specification feedback**: kushti invited community review and collaboration on input blocks spec (msg#565627); timeline and consensus process TBD.
- **DexyGold to DexyUSD scaling**: Richi noted DexyGold testers differ from real-world DexyUSD users; protocol behavior at scale unknown (msg#565025).
- **InfraDAO static IP requirement**: Static IP requirement for node operators unclear (msg#565669).
- **MEXC withdrawal suspension timeline**: MEXC working on dust collection issues; exact reopening date unknown (msg#565620-621).
- **Paideia UX issues**: Network errors on comment submission unresolved; root cause (node, wallet state, or application) TBD (msg#565504-523).
- **ErgoPay compatibility with Spectrum DEX**: Why ErgoPay fails on Spectrum but works on MewFinance not determined (msg#565409-412).