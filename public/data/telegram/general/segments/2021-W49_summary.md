---
title: "Ergo General Chat — 2021-W49"
date_start: "2021-12-06"
date_end: "2021-12-12"
type: telegram_weekly
channel: general
week: "2021-W49"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2021-W49 Summary

## Key Topics Discussed

- **Emission Soft Fork Proposal**: Community discussion around reducing block emission rewards at block 700,000 to improve long-term network security. Most participants expressed support, though debate continued about whether this would address short-term price pressure. Miners will make the final vote.

- **Ledger Support Integration**: Front-end binding library complete; UI layer remains. Implementation planned via Yoroi (similar to Cardano's Ledger integration), not Ledger Live.

- **Kairon Labs Market Making Partnership**: Kairon performs liquidity arbitrage across exchanges (balancing price differences between Gate, KuCoin, etc.) and provides strategic guidance on which exchanges add real value. Working on KuCoin first; future expansion to Gate planned. Goal is foundation for Tier-1 exchange listings.

- **Ergo Foundation Singapore Incorporation**: Documentation submitted to ACRA; approval still under review. Expected to unlock formal regulatory standing and support larger exchange partnerships.

- **Version 5.0 Upgrade (JIT Costing)**: Transition from Ahead-of-Time (AOT) to Just-In-Time (JITC) fee calculation. Expected to provide 5-6x processing boost and ease node syncing. Under development since 2020.

- **Palmyra & Dexy Gold**: Dan Friedman outlined on-chain warehouse receipt system using Chainlink oracles + IoT sensors to enable decentralized trade financing. Plan to build out native Ergo Oracle Pools as alternative.

- **Consensus Failure & Network Incidents**: December 6 DDoS/spam attack discussed; reference client v4.0.44+ includes spam protection limits (won't download excessive transactions from single peer). Fee market mechanisms discussed as mitigation.

- **ErgoDex on Cardano**: First cross-chain DEX capability. Multiple references to order book vs AMM design; ErgoDex designed for full control over slippage (unlike AMM pools with impermanent loss). Spectrum DEX live on Ergo mainchain.

- **LETS (Local Exchange Trading System)**: Trustless LETS identified as Ergo-specific use case requiring zero-knowledge-preserving Schnorr signatures. Eliminates need for entry committees typical of traditional LETS. GitHub documentation available.

- **Sidechain Constructions & Merge Mining**: kushti confirmed sidechain constructions under review; merge-mined sidechains technically feasible with proper emission and relay mechanisms. BIP 301 parallels discussed.

- **ErgoPad Seed Sale**: Sold out in minutes; next phase December 20. Multiple ecosystem projects (Gluon, MewFinance, Machina Finance, etc.) in development; ErgoPad positioning as launchpad for Ergo dApps.

## Important Decisions or Announcements

- [@glasgowm, msg#236467, 2021-12-09]: Ergo Foundation incorporation announced as complete (Singapore ACRA still processing company approval).

- [@kushti, msg#236150, 2021-12-08]: Docs sent to Singapore authorities; awaiting approval.

- [@Glasgow｜WON'T DM, msg#235591, 2021-12-06]: #ERGCCXContest artwork winner announced: @sotiris_oiko.

- [@Frosty, msg#235483, 2021-12-06]: NETA Community Airdrop Fund went live.

- [@Gazza｜WON'T DM, msg#236675, 2021-12-10]: ErgoDex partnership announcement (likely Genius Yield, though tweet later deleted per [msg#236975]).

- [@Andy L, msg#235775 & msg#236508, 2021-12-07/10]: Ergo Pulse Episode 1 published; weekly video series launched.

- [@Chris, msg#236125, 2021-12-08]: Ergo.watch metrics dashboard deployed (real-time emission, TVL, oracle pool, SigmaUSD data).

- [@Gazza｜WON'T DM, msg#236161, 2021-12-08]: Removed ~40 scam/impersonator accounts from Telegram.

- [@Vince, msg#236219 & msg#236435, 2021-12-09]: ErgoPad announcing seed tokenomics & new opportunities December 9.

## Technical Q&A Worth Preserving

- **Q** (@Ilya, msg#235544): Is Nimiq's light client implementation using NIPoPoWs like Ergo?
  **A** (@glasgowm, msg#235568 & msg#235570): Nimiq is using macro/micro blocks + ZK-SNARKs for light clients, not NIPoPoWs (which are PoW-specific; Cardano is PoS and cannot use them).

- **Q** (@A, msg#236269): What does v5.0 upgrade mean in non-technical terms?
  **A** (@glasgowm, msg#236271-272): Fee calculation changes from ahead-of-time (AOT) costing to just-in-time (JITC); should give 5-6x processing boost. Also eases node syncing.

- **Q** (@CW, msg#236126): Can ergo.watch add number of nodes metric?
  **A** (@CW, msg#236134): Use `/peers/all` API endpoint to retrieve all known peers.

- **Q** (@Unknown, msg#236637): Is there a way to earn passive income from ERG?
  **A** (@J, msg#236643): Providing liquidity, but beware impermanent loss. [Also referenced: Ergo Profit Sharing dApp under review per msg#236651]

- **Q** (@Grandify, msg#236279): Can Oracle Pools monetize user data points (shopping, location, social)?
  **A** (@glasgowm, msg#236280-281): Oracle Pool design enforces trust (each oracle must have identical data). Broadcasting such varied data would be more appropriate for big data, not oracle feeds.

- **Q** (@Unknown, msg#236846): Is there a way to make unlimited tokens on Ergo like $SLP?
  **A** (@Marty ErgoPad, msg#235853-855): You must manually add liquidity & speak to devs at this stage. Software UI for adding custom tokens coming later.

- **Q** (@Olli Tiainen, msg#236056 ff.): What is Ergo's unique market positioning? How does it avoid being 1.5x better at everything?
  **A** (@Glasgow｜WON'T DM, msg#236062 ff.): Trustless LETS is a key differentiator requiring zero-knowledge-preserving Schnorr signatures. Goal is decrypting Ergo's language/branding via comms firms; additional use cases documented at [ergoplatform.org/uses/](http://docs.ergoplatform.org/uses/).

- **Q** (@sparehead, msg#235653): Failed SigmaUSD redemption; getting "Minimal erg" error on refund.
  **A** (@MrStahlfelge, msg#235704): Need to send ~0.005 ERG extra; SigmaUSD site does not advertise this requirement.

- **Q** (@Unknown, msg#236291): Will Ergo be prepared if Ethereum kills GPU mining (post-Merge)?
  **A** (@Gazza｜WON'T DM, msg#236291): We are prepared for that anyway!

- **Q** (@Unknown, msg#236448-456): Impersonator scam ("Evline") attempting social engineering.
  **A** (@Glasgow｜WON'T DM, msg#236449-460): Blocked. Reminder: admins will not DM first; watch for broken English, fake photos.

- **Q** (@K Chan, msg#236876): Paper wallet addresses not found on Ergo Explorer.
  **A** (@Glasgow｜WON'T DM, msg#236901): Need to send a transaction to the address first to "register" it. Try sending smallest amount.

## Links Shared

- [http://docs.ergoplatform.org/dev/protocol/](http://docs.ergoplatform.org/dev/protocol/): Protocol documentation overview.
- [http://docs.ergoplatform.org/uses/](http://docs.ergoplatform.org/uses/): Ergo use cases & applications (LETS, Oracles, privacy, timed operations, etc.).
- [https://github.com/Emurgo/age-usd/tree/main/docs](https://github.com/Emurgo/age-usd/tree/main/docs): SigmaUSD documentation.
- [https://github.com/ergoplatform/ergo/wiki/A-Trustless-Local-Exchange-Trading-System](https://github.com/ergoplatform/ergo/wiki/A-Trustless-Local-Exchange-Trading-System): Trustless LETS design proposals.
- [https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md](https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md): Oracle Pools specification.
- [https://ergo.watch/metrics](https://ergo.watch/metrics): Real-time Ergo metrics dashboard (emission, TVL, developer/user growth).
- [https://sigmaverse.io/](https://sigmaverse.io/): Ergo dApps ecosystem directory.
- [https://www.ergoforum.org/t/emission-soft-fork-proposal/2996](https://www.ergoforum.org/t/emission-soft-fork-proposal/2996): Emission soft fork discussion.
- [https://www.ergoforum.org/t/analysis-of-network-incindent-on-dec-6th-2021/3071](https://www.ergoforum.org/t/analysis-of-network-incindent-on-dec-6th-2021/3071): Technical analysis of December 6 network incident (DDoS/spam).
- [https://ergoplatform.org/en/exchanges/](https://ergoplatform.org/en/exchanges/): List of supported exchanges (KuCoin, Gate, CoinEx, Changelly, Bitcoin.com, etc.).
- [https://curiaregiscrypto.medium.com/reddit-response-too-long-t-6fbb61f40a17](https://curiaregiscrypto.medium.com/reddit-response-too-long-t-6fbb61f40a17): Armeanio's extended vision statement on Ergo's differentiation.
- [https://cafebedouin.org/2021/12/09/why-ergo/](https://cafebedouin.org/2021/12/09/why-ergo/): Community perspective on Ergo's value proposition.
- [https://github.com/mhssamadani/ErgoProfitSharingDapp](https://github.com/mhssamadani/ErgoProfitSharingDapp): Ergo Profit Sharing dApp (passive income, under review).
- [https://ergopad.medium.com/ergopad-developer-update-2-67c44ad763e](https://ergopad.medium.com/ergopad-developer-update-2-67c44ad763e): ErgoPad Developer Update #2.
- [https://kaironlabs.com/services/crypto-market-making.html](https://kaironlabs.com/services/crypto-market-making.html): Kairon Labs market-making services overview.
- [https://www.reddit.com/r/ergonauts/comments/rbrjyl/dev_update/](https://www.reddit.com/r/ergonauts/comments/rbrjyl/dev_update/): Reddit dev update thread.
- [https://www.reddit.com/r/ergonauts/comments/qsgw8u/trustless_lets_as_a_unique_use_case_for_the_ergo/](https://www.reddit.com/r/ergonauts/comments/qsgw8u/trustless_lets_as_a_unique_use_case_for_the_ergo/): Trustless LETS use case explanation.
- [https://www.reddit.com/r/ergonauts/comments/qyczj4/announcing_ergolearn_come_learn_the_beginnings_of/](https://www.reddit.com/r/ergonauts/comments/qyczj4/announcing_ergolearn_come_learn_the_beginnings_of/): ErgoLearn pioneer program announcement.
- [https://testflight.apple.com/join/MRyG2qfm](https://testflight.apple.com/join/MRyG2qfm): iOS Ergo wallet beta via TestFlight.
- [https://github.com/ergoMixer/ergoMixBack/releases/download/3.3.5/ergoMixer-3.3.5.dmg](https://github.com/ergoMixer/ergoMixBack/releases/download/3.3.5/ergoMixer-3.3.5.dmg): Ergo Mixer v3.3.5 for macOS.

## Unresolved Questions

- **Tier-1 Exchange Listing Timeline**: Multiple participants asked for ballpark estimation. @Unknown (msg#237102) guessed "at least 1 Tier-1 within 1 year," but no official timeline confirmed. [@Glasgow｜WON'T DM, msg#236830]: Next concrete step is Kairon on Gate + US legal opinion (timeline TBD).

- **US Legal Opinion Timeline**: [@OxCapitulation, msg#236833]: Asked for rough timeline; [@Kevin, msg#237113] responded that team working with "top legal agency" but no specifics given.

- **L2 Scaling Research Direction**: kushti and Armeanio mentioned hiring/considering L2 research (kushti moving from Dexy Gold to L2; Amitabh (Scalan) also involved). No concrete spec or timeline announced.

- **Node Count Metrics**: @Chris acknowledged difficulty tracking active nodes; suggested "active miner addresses" as proxy but incomplete solution (msg#236127).

- **V5.0 (JITC) Deployment**: Described as "worked on since 2020" but no release timeline or block height target specified beyond "coming soon."

- **Ledger Live vs. Yoroi Integration**: Confirmed as Yoroi path only (msg#237076), but some discussion on whether Ledger Live support might come later—no commitment made.

- **Emission Soft Fork Vote Mechanism**: While community sentiment appears supportive, exact voting procedure and weight given to miners vs. general community unclear. [@Glasgow｜WON'T DM, msg#236560-561]: "Not a binding vote, just for people to gauge sentiment; miners who vote."

- **ErgoDex/Cardano Launch Readiness**: Multiple participants expressed interest in ErgoDex launch date on Cardano; no concrete date announced (SundaeSwap in testnet, ErgoDex live on Ergo mainchain for comparison).

---

**Week Summary**: W49 was moderately active with strong technical and strategic discussions around protocol upgrades (v5.0, emission soft fork), regulatory incorporation (Singapore), and partnerships (Kairon, Chainlink/Palmyra). Significant community growth visible in dApp announcements (ErgoPad, ErgoDex), but also persistent scam activity requiring admin oversight. Market sentiment remained bearish, with price discussion relegated to trading channel. Key ecosystem gaps identified: clearer public roadmaps, faster developer onboarding materials for eUTXO paradigm.