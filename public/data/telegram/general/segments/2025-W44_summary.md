---
title: "Ergo General Chat — 2025-W44"
date_start: "2025-10-27"
date_end: "2025-11-02"
type: telegram_weekly
channel: general
week: "2025-W44"
source: telegram
message_count: 0
categories: [technical, ecosystem, defi, mining, bridges, community, wallet, marketing, nft]
key_terms: [storage rent, spam filter, recycled ERG, secondary emissions, Banxa, KYC, fiat conversion, onramp, Voltpay, mewfinance, LP tokens, locking, redemable NFTs, peer-to-peer, node operators, Lithos, distributed block production, subblocks, Bitcoin TPS, layer 2]
---
# Ergo General Chat — 2025-W44 Summary

## Key Topics Discussed

- **Storage Rent as Spam Filter & Ecosystem Metric** [@Armeanio, msg#579497; @HQΣr, msg#579500]: Storage rent collected (~16.64M ERG from 201K boxes) represents a unique anti-spam mechanism across PoW chains. Discussion centered on quantifying secondary emissions and comparing with other chains—no comparable implementation found elsewhere.

- **Emission Reduction vs. Network Security** [@2ndTL Mining, msg#579527; @Armeanio, msg#579542]: Concern that emission reduction may eventually make attacks cheaper than extractable value. Merged mining proposed as long-term security subsidy without relying solely on transaction fees.

- **USE Stablecoin Launch & Dexy Protocol** [@cannon_q, msg#579760; @Affable Villain, msg#579724]: USE (distinct from SigmaUSD) launching mid/late November. Community Liquidity Bootstrapping (CLB) via Rosen Bridge will aggregate rsERG from multiple chains (e.g., Cardano) as collateral.

- **P2P Network Resilience & Infrastructure Standardization** [@kushti, msg#579442-579446; @Armeanio, msg#579449-579451]: PoW blockchain needs classic global p2p, trustless derivatives (algo stablecoins, HODLcoin), native tokens, and local trade tooling. Fragmented lite-wallet ecosystem problematic; need unified node-centric stack standards (Umbrel-like pattern for Ergo).

- **Redeemable NFTs & Time-Locked ERG Escrow** [@bmfink, msg#579332-579340; @Grayman, msg#579367-msg#379]: Design pattern: NFT locked to smart contract releasing ERG after X days. Seller retains claim-back right for dispute period; buyer gets ERG price appreciation optionality. Escrow duration becomes pricing variable (120-day unlock cheaper than 30-day).

- **Babel Fees Implementation** [@HQΣr, msg#579507; @Glasgow, msg#592]: Documentation exists at https://docs.ergoplatform.com/dev/protocol/tx/babel-impl/ but no active contract examples available yet.

- **Rosen Bridge Liquidity & Cross-Chain Stable Baskets** [@Jayedii, msg#579929-579932; @impulse, msg#579935]: Proposed rsUSD basket-backed stablecoin collateralizing multiple bridged stables (USDC, USDT, etc.) via Dexy + SigmaUSD. Reduces censorship risk through redundancy; can serve as risk-off treasury for flatcoin designs.

- **Block Time Speed Improvements Discussion** [@kushti, msg#579423; @qx, msg#579759]: Ergo adjusts difficulty every 4 hours vs Bitcoin's 2 weeks. Speed improvements require reviewing: sub-blocks, sidechains, transaction profiles, and impact on timestamp-dependent contracts. Community testnet (6.0) available for parameter tweaking.

- **Order Book DEX vs AMM Trade-offs** [@qx, msg#579682 context (Trade House)]: Order books enable granular slippage control, depth visibility, and peer-to-peer settlement but require matching logic. Partial fills and upgrade-key governance differ from constant-product AMMs.

- **NIPoPoWs & Stateless Client Use Cases** [@HQΣr, msg#579501; @Armeanio, msg#579503]: Questioned deployment timeline for NIPoPoWs in dApps and stateless client functionality—no definitive roadmap given, but recognized as valuable long-term infrastructure.

## Important Decisions or Announcements

- [@kushti, msg#579347, 2025-10-27T11:40]: Community chat scheduled for 8 PM UTC (3 hrs 20 min from message time).

- [@Armeanio, msg#579406, 2025-10-27T15:08]: Matrix paper progress update requested (no details provided in segment).

- [@kushti, msg#579458, 2025-10-27T15:54]: Developer talks moved to https://t.me/ErgoDevelopers (Wednesday, 1 PM UTC); considering time shift for US accessibility.

- [@kushti, msg#579462, 2025-10-27T15:58]: ErgoBook efforts to be revived after sub-blocks whitepaper published.

- [@kushti, msg#579464, 2025-10-27T16:00]: New community-authored website incoming, "cyberpunk-ish and radical free markets" style.

- [@qx, msg#579682, 2025-10-29T12:34]: Nautilus GQL v0.5.5 deployed; load balancers updated; outdated API node fixed (circulation calculation bug).

- [@cannon_q, msg#579760, 2025-10-30T08:01]: Requested $USE stablecoin discussion during community chat (mid/late November launch expected).

- [@Pgr456, msg#579537-579538, 2025-10-27T18:27-18:30]: Storage rent data: 201,017 boxes charged, 16.640626 ERG collected (factor: 1,250,000). Asset values difficult to query due to random token/NFT mix.

- [@qx, msg#579937, 2025-10-31T12:12]: Portal completed.

- [@Andy L, msg#579752-579753, 2025-10-30T07:03]: Weekly Community Chat Oct 30, 13:00 UTC; YouTube live + Zoom participation; developer updates + open discussion format.

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg#579507): How to create Babel boxes? Code needed for MewMart integration.
  **A** (@Glasgow, msg#579592): https://docs.ergoplatform.com/dev/protocol/tx/babel-impl/

- **Q** (@bmfink, msg#579430): Is HTTPS possible for node API? Are others using it?
  *(No direct answer provided in segment; implied private setup feasible)*

- **Q** (@bmfink, msg#579336, msg#579340): If CC payments via Square used, does MewFinance provide backend infrastructure?
  **A** (@HQΣr, msg#579338-579339): CC payments require centralized backend + KYC registration—risky. MewFinance only provides minting/locking; merchant takes payment risk on own website.

- **Q** (@Luca D'Angelo, msg#579410): Can underwater sea cables be censored/intercepted?
  **A** (@Grayman, msg#579413, msg#579466, msg#579471): Repeaters can be inserted at undersea cable repair points but would likely be detected. YouTube link on cable repair: https://www.youtube.com/watch?v=eXjmr2AXIWk

- **Q** (@bmfink, msg#579386): How to acquire ERG if Banxa identity verification fails?
  **A** (@bmfink, msg#579386 solution): Traditional route CB → ADA (Lace) → Swap rsERG via Rosen Bridge (home to Ergo).

- **Q** (@impulse, msg#579815): Are there flatcoin plans for Ergo?
  **A** (@Grayman, msg#579828): DexyGold fulfills gold-peg use case; flatcoin would require dual treasuries (risk-on: ERG/RWA; risk-off: SigmaUSD/stables) + keeper bots for macro monitoring.

- **Q** (@rdot1477, msg#579888): Quantum threat to Ergo (re: Nic Carter post)?
  **A** (@kushti, msg#579889): Theoretically possible but practically distant—no quantum computer capable of breaking 128-bit dlog observed in foreseeable future.

- **Q** (@matt, msg#579893-579895): What is "decrypted" in zero-knowledge proof quantum threat context?
  **A** (@TMR.ΣRG, msg#579896): Private keys can be brute-forced with quantum computing; no "leak"—straight attack on cryptography.

- **Q** (@bob, msg#579912): Could Zcash-style privacy pool work on Ergo with covert addresses?
  *(Question raised; no response in segment)*

- **Q** (@Willemjan, msg#579916): When Keystone integration?
  **A** (@Pgr456, msg#579922): Awaiting reviews for final testing; everyone busy; hopefully soon.

- **Q** (@cnftharvey, msg#580041): Would "zap-in" feature (single-token liquidity provision) work on Ergo?
  **A** (@🤝, msg#580048): Explained Cardano zap-in pattern; @cannon_q (msg#580067) suggested service could implement; noted thin pools may cause issues (msg#580080).

- **Q** (@Ollie, msg#580060): Can Ergo be added to CoinGecko privacy filter?
  **A** (@HQΣr, msg#580062-580063): "Can try"; tagged @Gazza_SPF for follow-up.

## Links Shared

- [https://youtu.be/lnvuLwmGCwk](https://youtu.be/lnvuLwmGCwk): (msg#579289, Armeanio) — no description provided
- [https://x.com/cenazcenaz15326/status/1982806001007956000](https://x.com/cenazcenaz15326/status/1982806001007956000): (msg#579311, Fu.∑rg) — no description provided
- [https://x.com/erg_armeanio/status/1982851887683731712](https://x.com/erg_armeanio/status/1982851887683731712): (msg#579351, Armeanio) — no description provided
- [https://x.com/HQ3r_erg/status/1982851754594283647](https://x.com/HQ3r_erg/status/1982851754594283647): (msg#579353, HQΣr) — no description provided
- [https://meshtastic.org](https://meshtastic.org): (msg#579424, kushti) — mesh networking for lightweight monetary systems
- [https://bitcoinmagazine.com/technical/can-bitcoin-survive-an-apocalypse](https://bitcoinmagazine.com/technical/can-bitcoin-survive-an-apocalypse): (msg#579403, kushti) — discussion on Bitcoin resilience; prompted local payment system thoughts (Basis tracker)
- [https://x.com/erg_armeanio/status/1982923959663505426](https://x.com/erg_armeanio/status/1982923959663505426): (msg#579496, Armeanio) — storage rent as spam filter context
- [https://x.com/StableUSE/status/1983650600698179817](https://x.com/StableUSE/status/1983650600698179817): (msg#579713, kushti) — USE stablecoin announcement
- [https://blog.3iq.io/news-insights/the-cycles-of-network-narratives-in-crypto](https://blog.3iq.io/news-insights/the-cycles-of-network-narratives-in-crypto?utm_source=linkedin&utm_medium=social): (msg#579715, Luca) — network narrative cycles; historical vs. decentralization focus
- [https://x.com/mattkvi/status/1983702530036265151](https://x.com/mattkvi/status/1983702530036265151): (msg#579751, kushti) — no description provided
- [https://youtu.be/8GntIgG82DY](https://youtu.be/8GntIgG82DY?si=HAbHhNtoFKngBRg1): (msg#579731, Grayman) — no description provided
- [https://www.youtube.com/watch?v=eXjmr2AXIWk](https://www.youtube.com/watch?v=eXjmr2AXIWk): (msg#579471, Grayman) — undersea cable repair technique context
- [https://x.com/chepurnoy/status/1981318308696903910](https://x.com/chepurnoy/status/1981318308696903910): (msg#579696, kushti) — "no company owned blockchain" (Ergo ethos)
- [https://x.com/ERG_Armeanio/status/1983935342005952928](https://x.com/ERG_Armeanio/status/1983935342005952928): (msg#579786, Armeanio) — COMET cross-chain bridging via Rosen
- [https://x.com/HQ3r_erg/status/1983084197662150729](https://x.com/HQ3r_erg/status/1983084197662150729): (msg#579586, HQΣr) — no description provided
- [https://x.com/HQ3r_erg/status/1983211544319062052](https://x.com/HQ3r_erg/status/1983211544319062052): (msg#579598, HQΣr) — no description provided
- [https://x.com/nameshakereg/status/1984585711740469642](https://x.com/nameshakereg/status/1984585711740469642): (msg#580051, 🤝) — .erg, .ergo, .pulse, .mew domain names
- [https://www.youtube.com/watch?v=OKXSGNxO7SQ&t=52s](https://www.youtube.com/watch?v=OKXSGNxO7SQ&t=52s): (msg#580053, 🤝) — domain/email integration context
- [https://docs.ergoplatform.com/dev/protocol/tx/babel-impl/](https://docs.ergoplatform.com/dev/protocol/tx/babel-impl/): (msg#579592, Glasgow) — Babel fees implementation documentation
- [https://www.autolykos.io/tokenomics](https://www.autolykos.io/tokenomics): (msg#579857, Grayman) — Autolykos DAO venture capital cooperative structure
- [https://x.com/chepurnoy/status/1983901782867628321](https://x.com/chepurnoy/status/1983901782867628321): (msg#579767, kushti) — request for content review on community Ergo website
- [https://x.com/StableUSE/status/1983650600698179817](https://x.com/StableUSE/status/1983650600698179817): (msg#579713, kushti) — USE stablecoin launch
- [https://x.com/ERG_Armeanio/status/1985006607110173062](https://x.com/580136, kushti) — no description provided

## Unresolved Questions

- **Babel Fees Deployment**: Implementation documented but no active contract examples or dApp integration timeline given (@HQΣr msg#579507).

- **NIPoPoWs & Stateless Client Use Cases**: Timeline and specific dApp integration scenarios not defined (@HQΣr msg#579501, @Armeanio msg#579503).

- **Sub-blocks Roadmap**: Speed improvement discussions ongoing but no firm decision on whether to pursue sub-blocks vs. sidechains vs. layer-2 solutions (@kushti msg#579759).

- **ErgoBook & Community Website Status**: Revival announced after sub-blocks WP but no timeline or public draft shared (@kushti msg#579462, msg#579770 notes website "not public yet").

- **Rosen Bridge Liquidity Strategy**: CLB mechanism planned but funding post-Catalyst shortfall ($480K ADA request unsuccessful) leaves bridge scope uncertain (@DiscordBridge msg#579513).

- **Flatcoin Design**: Impulse proposed dual-treasury model but no commitment to development; discussion remained exploratory (@impulse