---
title: "Ergo General Chat — 2022-W49"
date_start: "2022-12-05"
date_end: "2022-12-11"
type: telegram_weekly
channel: general
week: "2022-W49"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — Week 2022-W49 Summary

## Key Topics Discussed

- **Node 5.0 Activation & Protocol Efficiency**: Node v5.0 activated at block height 889,856 (~2022-12-05 00:30 UTC). The upgrade enables 5.x costing, which allows several times more transactions per block and improved script validation. Initial observations showed confirmed transactions appearing in mempool UI as a display issue, not a network problem. [@kushti, msg#352572]

- **Long-term Scalability & Full Node Security**: kushti outlined a bootstrapping roadmap involving UTXO set snapshots (verified without ~95% of blockchain) by February 2023, followed by NIPoPoWs bootstrapping, targeting 30-60 minute full-node sync on ordinary laptops. This enables stateless full clients without downloading genesis blocks. [@kushti, msg#352572]

- **6.0 Protocol Planning**: Started preliminary discussion on 6.0 roadmap; fokus on avoiding breaking changes for dApps while enabling new features for scalability, L2, and sidechains. Stub EIP to be created for community input. [@kushti, msg#352584]

- **Block Time & Speed Improvements**: Discussed faster confirmations, Lightning Network, sub-block confirmations. Noted that block height-dependent contracts would be affected by increased block speed, requiring careful consideration of timestamp vs. height dependencies. Multiple schema proposals (Bitcoin NG, Prism, Flux) under review. [@kushti, msg#352580; msg#353365]

- **Mixer Incentivization & Privacy**: ErgoMixer usage low in bear market. Proposals included ERG-based incentives, LP-style reward sharing, and fee accumulation for longer mixing rounds without introducing new tokens. No consensus reached. [@kushti, msg#353527-533; @Armeanio, msg#353534-536]

- **Oracle Pools & Cross-Chain Potential**: Oracle Pool v1 (EF-run + community), Oracle Pool v2 (running for Dexy Gold with GORT rewards). Discussion of expanding oracle data feeds to other UTXO alliance chains (Alephium, Cardano). Dependency risk identified: all ERG pairs currently USDT-based; if USDT depegs, oracle pricing affected. [@unknown, msg#353571-579; @Pulsarz, msg#353227-260; @Luivatra, msg#353266-267]

- **Palmyra & Rosen Bridge Ecosystem Integration**: Chainlink partnership for proof-of-reserve + Winter Protocol enabling on-chain warehouse receipts for decentralized trade financing. Multiple oracle strategy (Chainlink + Ergo oracles) planned. Integration of Rosen Bridge for cross-chain liquidity. [@Armeanio, msg#353575-588; @Dan Friedman, msg#353042]

- **Storage Rent Implementation**: kushti posted technical details on storage rent mechanism. [@kushti, msg#353222-223 linking to Twitter]

- **GetBlok Pool Shutdown**: GetBlok mining pool shut down due to insufficient profitability (~1% network hashrate). Infrastructure remains open-source; team staying in ecosystem. Reflects difficulty maintaining mining infrastructure in bear market. [@msg#352601-602; @Arcadian Computers, msg#353691]

- **Twitter Account Transition**: Ergo Foundation gifted Ethereum Classic Twitter account from Charles Hoskinson; converted to Sigmanauts community account. Community debate over appropriateness; discussion moved to Ergo_Debates channel. [@msg#352424-450]

- **Hardware Wallet Support**: Ledger Ergo app support delayed due to developer relocation (Ukraine war context), ledger review rejections, and competing priorities. Currently under review at Ledger again. Nautilus (Chrome) and Satergo (full-node wallet) recommended alternatives. [@MrStahlfelge, msg#352788; @msg#352481-501]

- **ChatGPT Integration & Code Understanding**: Community demonstrated that ChatGPT can understand Spectrum DEX swap contracts and explain ErgoScript logic accurately, raising questions about AI capabilities in smart contract analysis. [@msg#352364-365; @msg#352281-286]

## Important Decisions or Announcements

- [@kushti, msg#352572, 2022-12-06]: Node 5.0 successfully activated. Will focus on UTXO set snapshot + NIPoPoWs bootstrapping for February release to enable lightweight full-node security.

- [@Armeanio, msg#353027-030, 2022-12-08]: AMA held; thanks for community attendance. Requested follow-up on zenGate Discord for AMA questions.

- [@Dan Friedman, msg#353042, 2022-12-08]: zenGate AMA planned; community invited to submit questions to zenGate Discord.

- [@Koutelier, msg#353708-710, 2022-12-11]: COMET token lottery launched in beta at TheCometToken.com/Lottery; GitHub repo to be open-sourced; winner announced in next dev update.

- [@Cheese, msg#352601-602, 2022-12-07]: GetBlok mining pool ceasing operations; remained profitable at 1-2PH difficulty and $4-5 price (March–September 2022); team staying in ecosystem.

## Technical Q&A Worth Preserving

- **Q** (@Jack Σ, msg#352296): Can Ergo ensure small GPU miners remain profitable against professional operations? Proposal: reward scaling or operation size limits.
  **A** (@Kallo Shaman, msg#352304): Blockchain doesn't track hashrate, only block finder. Consensus-based security inherently favors larger operations.

- **Q** (@Klaus, msg#352590): Are there risks with UTXO set snapshot bootstrapping? Who generates snapshots?
  **A** (@kushti, msg#352652): Most full nodes provide snapshots; security equivalent to full-node security. Risks same as downloading full blockchain.

- **Q** (@Pulsarz, msg#353227-232): If USDT collapses, does SigmaUSD fail since oracles use USDT pairs?
  **A** (@MrStahlfelge, msg#353236): Coingecko API averages across all trade pairs. (@Luivatra, msg#353266-267): Oracle reports ERG in USD, not USDT; Coingecko should handle depeg, but centralized dependency exists. SigmaUSD remains at risk; Dexy Gold independent of USDT.

- **Q** (@Aberg Satergo dev, msg#352579): What's the current bottleneck for full-node sync?
  **A** (@Aberg, msg#352582-583): Downloads from multiple random peers; protocol improvements + hardware optimization both applicable.

- **Q** (@Aberg, msg#352593): Should Satergo include auto-update for nodes, and how to safely verify releases?
  **A** (@MrStahlfelge, msg#352609): Node signing with key verification (Maven Central pattern) recommended. (@Aberg, msg#352660): Combining signed releases + opt-in auto-update (disabled by default) optimal.

- **Q** (@Arbion Halili, msg#353615-617): How to prove knowledge of DH tuple without revealing it?
  **A** (@kushti, msg#353679-684): Exactly what ErgoMixer (zerojoin) checks; see proveDHTuple in https://eprint.iacr.org/2020/560.pdf. DH-based protocol specifics depend on use case.

- **Q** (@Ko6a!, msg#353410-414): What real-world applications can be built on Ergo immediately?
  **A** (@gg, msg#353415): Join @ErgoDevelopers on Discord. (@chrom, msg#353632): Join dev Discord #development; links to docs, GitHub, forum, ErgoScript tutorials.

- **Q** (@qx(), msg#353052-061): How to earn ERG through holding without selling in future?
  **A** (@Unknown, msg#353054-058): Staking returns are form of rent-seeking unless you provide labor; no way to stop wealth concentration except taxation.

- **Q** (@Rj, msg#353395): Explain significance of Trade House (order book DEX) vs. AMM.
  **A** (@qx(), msg#353481): Order books provide total transparency of depth/liquidity, full slippage control, no impermanent loss. Peer-to-peer matching allows partial fills. Spectrum (AMM) vs. Trade House serve different user needs.

- **Q** (@X, msg#353272): Bot manipulation on GateIO—how to mitigate?
  **A** (@HQΣr, msg#353273): Bots everywhere; more exchange listings decrease bot dominance. (@Unknown, msg#353275): Listing on additional exchanges improves price discovery.

- **Q** (@gg, msg#353542-545): Why should regular users care about the mixer?
  **A** (@CW, msg#353546-556): Scenarios: P2P sends, NFT purchases, DEX swaps all expose wallet balance on explorer. Mixer breaks address linking. Example: gifting ERG to nephew reveals uncle whale status on-chain. SafeW has integrated mixer. (@qx(), msg#353547): "Jimmy won't shut up about uncle's balance without mixing."

- **Q** (@MrStahlfelge, msg#353328): iOS notification support for wallet—why the blocker?
  **A** (@MrStahlfelge, msg#353334): iOS requires centralized server for push notifications (Apple's restrictions). (@qx(), msg#353343-349): Discussed location-change trigger workaround but impractical for continuous balance checks.

- **Q** (@Unknown, msg#353600-611): How does running a non-mining full node help the network?
  **A** (@Unknown, msg#353610): Non-mining nodes serve peers with blocks/transactions, validate independently, provide network redundancy. Distributes data fetching load away from centralized services.

## Links Shared

- [https://ergoplatform.org/en/blog/Ergo-Protocol-Reference-Client-5.0.0-A-Commitment-to-Continued-Progress](https://ergoplatform.org/en/blog/Ergo-Protocol-Reference-Client-5.0.0-A-Commitment-to-Continued-Progress): Official Node 5.0 release notes and technical details.

- [https://docs.ergoplatform.com/events/pdf/Ergo_Nation_final_report%20%281%29.pdf](https://docs.ergoplatform.com/events/pdf/Ergo_Nation_final_report%20%281%29.pdf): Ergo Nation report on digital IDs and governance initiatives.

- [https://eprint.iacr.org/2020/560.pdf](https://eprint.iacr.org/2020/560.pdf): zerojoin (ErgoMixer) protocol paper; covers proveDHTuple proof mechanism.

- [https://delphiproject.org/](https://delphiproject.org/): Oracle design framework referenced for cross-chain oracle standards.

- [https://blog.lopp.net/2021-altcoin-node-sync-tests/](https://blog.lopp.net/2021-altcoin-node-sync-tests/): Lopp node sync performance benchmarks; referenced for optimization comparison.

- [https://fleet-sdk.github.io/docs/](https://fleet-sdk.github.io/docs/): Fleet SDK documentation for developers building with Ergo.

- [https://www.reddit.com/r/ergonauts/comments/yyjqv4/nightowl_casino/](https://www.reddit.com/r/ergonauts/comments/yyjqv4/nightowl_casino/): Night Owl Casino launch delay discussion.

- [https://youtu.be/xutGmZ-4sWk](https://youtu.be/xutGmZ-4sWk): Mixer setup and usage tutorial video.

- [https://youtu.be/N3nj-kmkArg](https://youtu.be/N3nj-kmkArg): The Sigma Update (Episode 3) w/CW, qx(), MGPai.

- [https://youtu.be/qzOLkI8zFfg](https://youtu.be/qzOLkI8zFfg): Weekly Update & AMA (Thursdays 13 UTC).

- [https://youtu.be/-eM61_JzhkA](https://youtu.be/-eM61_JzhkA): Ergo Pulse (Ep 11) w/Dan Friedman, Armeanio, Liquid_Phase (Swamp.Audio, Terahertz).

- [https://youtu.be/hNP4ACNa3uo](https://youtu.be/hNP4ACNa3uo): Hash It Out — Ergo Fundamentals Moving Forward (w/CW, Armeanio, Noah).

- [https://youtu.be/1LAo_J2FnPo](https://youtu.be/1LAo_J2FnPo): Weekly Developer Update (core updates, Node 5.0.4, Oracles v2, Dexy, Sigma.JS, 6.0 planning).

- [https://github.com/spectrum-finance](https://github.com/spectrum-finance): Spectrum DEX source code and smart contracts.

- [https://ergo.watch/emission](https://ergo.watch/emission): Ergo emission schedule and block reward reduction tracker.

- [https://rankmywallet.com/](https://rankmywallet.com/): Wallet portfolio analytics tool.

- [https://t.me/Satergo](https://t.me/Satergo): Satergo wallet Telegram channel (light theme UI nearing completion).

- [https://t.me/NautilusWallet](https://t.me/NautilusWallet): Nautilus wallet Telegram community.

- [https://github.com/capt-nemo429/nautilus-wallet](https://github.com/capt-nemo429/nautilus-wallet): Nautilus wallet open-source repository.

- [https://ergoraffle.com/raffle/show/4999...b042](https://ergoraffle.com/raffle/show/4999...b042): Ergo Raffle — first sale: Ergo Explorer UX/UI mockups (15,000 ERG goal).

- [https://twitter.com/ergflip/status/1601579805551767553](https://twitter.com/ergflip/status/1601579805551767553): ErgoFlip new game launch — roll the dice.

- [TheCometToken.com/Lottery](https://TheCometToken.com/Lottery): COMET token lottery (beta launch, open-source forthcoming).

## Unresolved Questions

- **Block Time Reduction Trade-offs**: Discussion of faster blocks/microblocks vs. impact on timestamp-dependent contracts and security model. No consensus on specific changes; tests needed on 6.0 testnet. [@kushti, msg#353365]

- **Mixer Incentive Design**: Multiple proposals (ERG-based, LP-style, fee accumulation) debated but no final mechanism decided. "@kushti says still an open question." [@kushti, msg#353532; @Armeanio, msg#353534]

- **Layer 2 & Sidechain Timeline**: When will L2 solutions & sidechains be production-ready? Discussed as part of 6.0 but no dates given. [@msg#353502-504 asking 2023 vs. 2024]

- **Oracle Dependency on USDT**: Mitigated but not eliminated—if USDT collapses, all UTXO chains affected. Oracle Pool v2 + diversification planned but timing unclear. [@Pulsarz, msg#353252-253]

- **Ledger Support ETA**: Still in review at Ledger after rejection; timeline unknown. [@msg#352788]

- **Cross-Chain Oracle Adoption**: Theoretical interest in Cardano, Alephium consuming Ergo oracle data, but no RFPs or integration roadmap confirmed. [@msg#353571-579]

- **GetBlok Infrastructure Reuse**: Code open-sourced but no announced successor mining pool or subpooling implementation. guapswap mentioned as alternative but details sparse. [@msg#353665; @HQΣr, msg#353677]

- **NIPo