---
title: "Ergo General Chat — 2021-W13"
date_start: "2021-03-29"
date_end: "2021-04-04"
type: telegram_weekly
channel: general
week: "2021-W13"
source: telegram
message_count: 0
categories: [defi, wallet, technical, ecosystem, nft, mining, bridges, marketing, community, governance]
key_terms: [SigmaUSD, SigRSV, stablecoin, v2 launch, reserve ratio, bootstrapping period, CoinEx, withdrawal suspension, miner dust, deposit collection, network upgrade, mixer, privacy, SigUSD mixing, zero-join, anon2020s, KuCoin, exchange listing, Binance, Gate.io]
---
# Ergo General Chat — 2021-W13 Summary
**Period:** 2021-03-29 to 2021-04-04

---

## Key Topics Discussed

- **SigmaUSD v2 Launch & Reserve Ratio Mechanics**: SigmaUSD v2 went live on 2021-03-29 at sigmausd.io with new reserve ratio logic. The bootstrapping period (upper limit 800% RR not enforced) runs until block 460,000 (~Saturday 2021-04-03). After that point, no new SigRSV can be minted until reserve ratio drops below 800% (~160k ERG worth of SigUSD purchased). The system uses reserve ratio as a safeguard against dilution and risk, not as a direct price lever.

- **CoinEx Withdrawal Issues & Miner Dust**: CoinEx suspended ERG withdrawals for ~7 days due to wallet overload from mining pools sending frequent small dust deposits (0.00000234 ERG+). After the Autolykos v2 fork disabled outsourceability, pools were forced to send dust hourly to miners. CoinEx is now merge-collecting these inputs (address documented). Other exchanges (Gate.io, Hotbit, BIKI) operating normally; CoinEx fee is 0.1 ERG vs Hotbit 1 ERG.

- **Ergo Mixer v3.3.0 Release**: Privacy mixer released with new SigUSD/SigRSV mixing and direct mint functionality. UI/UX improvements added. Known defect: not compatible with Safari browser due to browser engine limitations on iOS.

- **Ledger Hardware Wallet Support**: kushti confirmed Ledger integration is in development. Trezor support not currently planned but similar implementation effort expected.

- **ErgoSwap/Spectrum DEX Status**: DEX contracts mostly ready. Simple interface (similar to swop.fi) planned for initial release. When Plutus launches on Cardano, dApp connector should enable ADA↔ERG conversion. Gravity protocol partnership with Waves to build Ergo gateways also in progress.

- **KuCoin Listing Application**: kushti confirmed application submitted ~20 days prior (mid-March). Exchange discussions covered by NDA. No timeline provided.

---

## Important Decisions or Announcements

- [@Dmitry Usov, msg#113752, 2021-03-31]: All Ergo dApps can be replicated on Cardano ecosystem due to both using UTXO model; current and future dApps portable.

- [@kushti, msg#113132, 2021-04-02]: Dev updates on protocol roadmap coming to forum (DEX, Ledger, gateways, and more).

- [@Glasgow, msg#113305, 2021-03-30]: Mixer available as one-liner install: `curl -s "https://getmixer.ergonaut.space/install.sh" | bash` (Windows users need WSL or equivalent).

- [@Angie H, msg#113805 onwards, 2021-03-31]: Marketing team launched community questionnaire to understand user interests, needs, and pain points. Responses will inform marketing strategy (not executive summary planned for public).

- [@kushti, msg#113597-113598, 2021-03-30]: Mixer UI fee for SigUSD/SigRSV is zero; only miner fees apply. First mixed stablecoin on eUTXO blockchain imminent.

- [@Glasgow, msg#114305, 2021-04-02]: Mixer v3.3.0 released. Changelog: SigUSD/SigRSV mixing, SigUSD/SigRSV direct mint, UI/UX improvements, minor bug fixes. Safari incompatibility flagged.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#113338): What is SigRSV and how will it affect ERG price?
  **A** (@Gazza, msg#113345-113346; @kushti, msg#113347): SigRSV holders take a leveraged long position on ERG price *and* protocol liquidity. If ERG rises 10%, RSV redemption can gain up to 10 ERG (subject to reserve caps). Without SigUSD adoption, RSV may be no better than HODLing. Formula is extremely complex; rashly entering RSV without USD liquidity unwise.

- **Q** (@Klaus, msg#113078): At what reserve ratio should SigRSV be purchased for optimal entry?
  **A** (@Klaus, msg#113078, detailed analysis): If reserve ratio stays constant and ERG price constant, the erg:SigRSV ratio is high (closer to 1:1) when RR is high. After cooling-off at block 460,000, when RR drops below 800%, you get much better ratios (v1 was ~1:930-960 vs current ~1:847). Better to wait for RR<800% before entering RSV long.

- **Q** (@Unknown, msg#114199): When reserve ratio gets lower, what does it mean?
  **A** (@Chris, msg#114202; @Glasgow, msg#114203): Lower RR usually means more SigUSD was bought, or SigRSV redeemed, or ERG price declined. Big changes visible when SigUSD is actively purchased. RR is an indicator of risk/dilution but not directly tied to SigRSV value.

- **Q** (@Unknown, msg#113128): What is Ergo's true functionality in Cardano ecosystem? Is it Chainlink equivalent?
  **A** (@Unknown, msg#113781 video link; @Glasgow, msg#113187; @Armeanio, msg#114420): Ergo is a testbed for eUTXO concepts that can later be ported to Cardano. Unique dApps (mixer, stablecoins, order books) demonstrate Cardano potential without risking Cardano mainnet. Concepts tested first on Ergo, then applied to Cardano.

- **Q** (@ivysauceda, msg#113232): Transaction left wallet but shows no transaction history in SigmaUSD dashboard. How to recover?
  **A** (@Glasgow, msg#113176-113181): Use refund endpoint: `https://assm.sigmausd.io/return/YOUR_ADDRESS/LONG_CONTRACT_ADDRESS`. Replace placeholders with actual addresses (found by clicking tx ID in Yoroi). Returns refund TX ID; funds return in minutes. Bug in node related to frequent oracle refresh being fixed.

- **Q** (@Mr. Goose, msg#114194): Is ErgoScript stack-based like Bitcoin Script?
  **A** (No explicit answer recorded, but context suggests ErgoScript is distinct from Bitcoin's stack model, using Sigma protocols instead).

- **Q** (@JayDee12Thr33, msg#114031): Does Ergo support multisig?
  **A** (@Unknown, msg#114070): Yes, link to Kushti's 2020 Twitter confirmation: https://twitter.com/chepurnoy/status/1230236923295346688

- **Q** (@Foeniculum, msg#114564): Can SpaceBudz' key-value UTxO mapping pattern (mint-on-payment) be translated to Ergo / Auction House?
  **A** (No direct response recorded; remains open discussion).

- **Q** (@$yuji, msg#114150): How will Ergo stay relevant as Ethereum transitions to PoS?
  **A** (@Glasgow, msg#114151; @Chris Ray, msg#114154; @welorio, msg#114156): See Reddit thread on PoW rationale. Don't get caught in "PoW=bad" narrative. Ergo willing to adopt best tech as it evolves, not stagnate. PoW is strategic benefit for Ergo (GPU-friendly, fair launch, energy-efficient via Autolykos).

- **Q** (@Unknown, msg#113611): SigmaUSD/RSV UI fees?
  **A** (@Spire Blockchain, msg#113312): 2% + UI fee (implemented to prevent front-running and promote long-term stability).

---

## Links Shared

- [https://www.youtube.com/watch?v=JULG1J8rvEM]: Emurgo/Ergo relationship explanation video (referenced msg#112781).

- [https://www.ergoforum.org/t/issues-with-centralized-exchanges-and-explorer/903/2]: CoinEx dust issue technical discussion and status updates.

- [https://sigmausd.io/#/]: Live SigmaUSD v2 interface (went live 2021-03-29).

- [https://explorer.ergoplatform.com/en/charts/total]: Total ERG supply tracker.

- [https://explorer.ergoplatform.com/en/oracle-pools-list]: Live oracle pools list.

- [https://veriumfellow.medium.com/introduction-to-ergos-sigmausd-stablecoin-risk-and-reward-mechanism-18690b52d672]: Comprehensive SigmaUSD v1 mechanics explainer (v2 largely unchanged; note typo flagged in msg#114577).

- [https://www.reddit.com/r/ergonauts/comments/mh3980/calling_all_developers_for_the_upcoming_hackathon/]: ErgoHack hackathon call for developers.

- [https://www.reddit.com/r/ergonauts/comments/mgpnb7/51_attack_possibilities/]: Technical discussion on PoW security & 51% attack resistance vs pooling.

- [https://www.reddit.com/r/ergonauts/comments/mh6icc/ergo_why_proof_of_work/]: PoW rationale and long-term viability discussion.

- [https://medium.com/wavesprotocol/waves-partners-with-ergo-to-foster-interoperability-solutions-via-gravity-e184bca91d71]: Gravity protocol partnership announcement.

- [https://ergoplatform.org/en/blog/2020_03_20_ergo_mixer/]: Ergo Mixer (Σ3) technical overview.

- [https://www.ergoforum.org/t/ergomixer-zerojoin-mixer-for-erg-and-tokens/318/17]: Mixer v3.3.0 release thread.

- [https://github.com/ergoMixer/ergoMixBack/releases/tag/3.3.0]: Mixer v3.3.0 GitHub release.

- [https://ergonaut.space/ErgoSwap]: ErgoSwap/DEX community documentation.

- [https://ergonauts.space/en/Cardano]: Ergo-Cardano relationship explainer.

- [https://bwayne193921.medium.com/why-cryptos-biggest-underdog-can-defi-all-odds-49a8fdfa8641]: "Why crypto's biggest underdog can DeFi all odds" — medium article on Ergo's technical advantages, retweeted by official Ergo account.

- [https://curiaregiscrypto.medium.com/bitcoin-vs-ergo-the-path-forward-66f3f868a68d]: Bitcoin vs Ergo comparison article (posted by Armeanio, msg#114611).

- [https://agora.ergonaut.space/]: Hosted IRC client for anarplex.net #ergo channel (IRC alternative to Telegram).

- [https://opaque.link/post/hcpp20-manifesto/]: Dark net pioneer manifesto (historical context on crypto philosophy).

- [https://ergoauctions.org]: Ergo Auction House (NFT marketplace) — multiple artist submissions shared during week.

---

## Unresolved Questions

- **SigRSV Value Determination**: Multiple users struggled to understand how SigRSV redemption value is calculated under different market conditions. @Glasgow and @Gazza conceded the mechanism is "too complex to simplify" and recommended reading forum posts/Medium articles instead of chat explanations. No single definitive explainer in chat.

- **Reserve Ratio vs SigRSV Price Relationship**: Debate remains whether reserve ratio *directly* impacts SigRSV purchase exchange rate. @Klaus argued it does (affects dilution incentives); @Glasgow said it's primarily an indicator of risk, not a direct lever. Consensus unclear.

- **Whale Motivation & Strategy**: Large trader ("whale") entered SigRSV position early, exited 9 hours later with ~1845 ERG profit, while holding 90% of position in long RSV. Whether whale is manipulating gate.io price to profit from shorting, or simply testing protocol robustness, remains speculated (@Gazza, @Glasgow, @Unknown, msgs#113489-113492).

- **CoinEx Dust Collection Timeline**: No ETA given for when CoinEx withdrawals/deposits will resume. Only status: "collecting deposits" and "working on it" (msgs#113743-113746).

- **Binance / Coinbase Listing**: kushti stated exchange discussions are NDA-covered. No timeline or probability given beyond "KuCoin in progress ~20 days ago." Community repeatedly asked; no answers provided.

- **Ergo Price Momentum**: Multiple users asked "when will Ergo moon/pump?" — consistent response from mods: go to #ERGtrading for price discussion. No technical catalyst discussed.

- **Marketing Strategy Execution**: Angie H (marketing) launched questionnaire but did not share results/summary during week. Impact of survey on future marketing approach TBD.

- **Ledger Integration ETA**: kushti mentioned Ledger in dev updates roadmap but no target date shared.

- **NFT Smart Contract Pattern Replication**: Foeniculum asked if SpaceBudz' key-value UTxO payment-triggered minting can be replicated on Ergo Auction House. No response recorded.

---

## Notable Community Sentiment

- **Frustration with Exchange Friction**: New and existing users expressed repeated annoyance at CoinEx withdrawal suspension, small exchange liquidity (gate.io), and high withdrawal fees (Hotbit 1 ERG). Perceived as marketing headwind preventing adoption.

- **Positive Reception of Mixer & SigmaUSD v2**: Users excited about first-ever mixed stablecoin on eUTXO blockchain and mixer's zero UI fee for SigUSD. Viewed as unique technical achievement vs. Tornado Cash / Monero.

- **Ergo as Cardano "Testbed"**: Growing acceptance that Ergo's primary role is proving eUTXO dApp concepts (order books, stablecoins, mixers) before porting to Cardano. Less emphasis on Ergo as standalone competitor; more as companion ecosystem.

- **Developer Interest Spiking**: Multiple full-stack/blockchain developers expressed interest in joining ecosystem or submitting to upcoming hackathon. Positioned as low barrier to entry relative to established chains.