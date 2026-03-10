---
title: "Ergo General Chat — 2018-W22"
date_start: "2018-05-28"
date_end: "2018-06-03"
type: telegram_weekly
channel: general
week: "2018-W22"
source: telegram
message_count: 76
categories: [governance, mining, technical, ecosystem, bridges, marketing]
key_terms: [EFYT, token swap, "1:1 ratio", airdrop, Waves DEX, Σ-Data, Σ-Cash, emission curve, 8-year schedule, inflation, POW, mining rewards, node incentives, testnet1, testnet2, mainnet, POW finalization, september, whitepaper, one-pager]
---
# Ergo General Chat Summary — 2018-W22 (2018-05-28 to 2018-06-03)

## Key Topics Discussed

- **EFYT Token Purpose & Swap Mechanics**: EFYT tokens (1.5M+ supply) represent futures tied to the first year mining tax (~1.971M EFYT from 10% team allocation). Swap will be 1:1 to Σ-Data and Σ-Cash chains, with holders receiving 2 tokens per 1 EFYT. [@Unknown, msg#3029-3030]

- **Emission Curve & Long-term Security**: Design features steep upward issuance over 8 years (doubling annually until inflection ~year 4-5), raising questions about network incentives post-emission and miner participation after mining concludes. [@C S, msg#3004; @Unknown, msg#3020-3022]

- **TestNet Timeline**: TestNet1 launched on schedule (2018-05-31); TestNet2 with Proof of Work finalization and design refinements scheduled for September 2018, expected to serve as mainnet prototype. [@Dmitry, msg#3005; @Unknown, msg#3037]

- **Technical Foundation & Research**: Ergo built on novel academic research (stateless clients, new economic models); founder Alexander Chepurnoy holds part-time research role at IOHK and participates in Zcash grants and blockchain security commissions. [@Unknown, msg#3042, msg#3074]

- **Waves DEX Selection**: Choice to use Waves for EFYT issuance justified by Waves' previous Scorex version, asset-to-asset exchange with instant matching (non-custodial contracts), and network stability—not geography. [@Unknown, msg#3039]

- **Cross-Chain Atomic Swap Roadmap**: Atomic swap capability between Waves and Ergo testnets planned, leveraging contract support in both chains. [@Unknown, msg#3061]

## Important Decisions or Announcements

- [@Unknown, msg#3027]: Emission curve documentation published at `ergoplatform.org/news_emission_curve.html`
- [@Unknown, msg#3037]: TestNet2 scheduled for September 2018 with PoW finalization; mainnet launch timeline dependent on TestNet2 stability
- [@Unknown, msg#3070]: Live draft whitepaper (yellow paper) available at GitHub repository; simplified whitepaper promised post-launch
- [@Unknown, msg#3053, msg#3058]: Marketing focus deferred until mainnet launch; currently prioritizing testnet stability and protocol completion

## Technical Q&A Worth Preserving

- **Q** (@C S, msg#3004): What is the purpose of the 1.5M additional EFYT supply? Will they be sold on Waves DEX for dev funding or distributed via airdrops to IOHK/partners?
  
  **A** (@Unknown, msg#3029): EFYT represents 10% of first-year supply (team mining tax = ~1.971M EFYT). Swap will be 1:1 to Σ-Data and Σ-Cash chains; airdrop distribution intended to engage diverse participants (users, investors, developers) over extended periods.

- **Q** (@C S, msg#3004): Why is the first two years of emission so high? Won't this create excessive early inflation?
  
  **A** (@Unknown, msg#3020): Emission follows a steep upward curve (nearly doubling annually until inflection at ~4-5 years). The question of why rapid supply cap is necessary remains open but implies intentional design purposes.

- **Q** (@C S, msg#3004): What incentives exist for node operators and miners after the entire supply is mined at year 8?
  
  **A** (@Unknown, msg#3022): Incentive structures are critical; detailed implementation still under review. Community voting for governance (including founder removal) mentioned as part of long-term design.

- **Q** (@Unknown, msg#3026): Are EFYT coins discarded after mainnet launch, or is there a formal swap mechanism?
  
  **A** (@Unknown, msg#3029-3030): EFYT are futures contracts. Mainnet swap will convert EFYT 1:1 to tokens on Σ-Data and Σ-Cash chains (2 tokens per 1 EFYT), similar to Zcash's approach but public.

- **Q** (@Unknown, msg#3049): Is Ergo implementing or providing sharding solutions for other projects?
  
  **A** (@Unknown, msg#3050): Ergo plans both implementation and provision of sharding/stateless client solutions; actual adoption by other projects depends on their willingness and technical capacity.

## Links Shared

- [twitter.com/CryptographyRU/status/1000996035068645377](https://twitter.com/CryptographyRU/status/1000996035068645377): Cryptography community update (2018-05-28)
- [twitter.com/CryptographyRU/status/1001418743963058176](https://twitter.com/CryptographyRU/status/1001418743963058176): Follow-up announcement (2018-05-29)
- [twitter.com/ergoplatformorg/status/1002116968416268289](https://twitter.com/ergoplatformorg/status/1002116968416268289): Official project update (2018-05-31)
- [twitter.com/ergoplatformorg/status/1002502455060516864](https://twitter.com/ergoplatformorg/status/1002502455060516864): TestNet1 launch announcement (2018-06-01)
- [twitter.com/ergoplatformorg/status/1002575649431785472](https://twitter.com/ergoplatformorg/status/1002575649431785472): Technical update (2018-06-01)
- [twitter.com/DmitryMeshkov/status/1002581412405530624](https://twitter.com/DmitryMeshkov/status/1002581412405530624): Developer update from Dmitry Meshkov (2018-06-01)
- [twitter.com/ergoplatformorg/status/1002660238724648963](https://twitter.com/ergoplatformorg/status/1002660238724648963): Follow-up update (2018-06-01)
- [twitter.com/ergoplatformorg/status/1003260343659978753](https://twitter.com/ergoplatformorg/status/1003260343659978753): Project announcement (2018-06-03)
- [ergoplatform.org/news_emission_curve.html](https://ergoplatform.org/news_emission_curve.html): Emission curve technical documentation
- [umiacs.umd.edu/about-us/news/papamanthou-awarded-grant-study-security-blockchains-and-cryptocurrencies](https://umiacs.umd.edu/about-us/news/papamanthou-awarded-grant-study-security-blockchains-and-cryptocurrencies): Stateless client research grant (2018-06-03)
- [fc18.ifca.ai/bitcoin/papers/bitcoin18-final18.pdf](http://fc18.ifca.ai/bitcoin/papers/bitcoin18-final18.pdf): Bitcoin 2018 conference paper on new economic models
- [ergoplatform.org/tech.html](https://ergoplatform.org/tech.html): Technical resources and research papers index
- [github.com/ergoplatform/ergo/blob/master/papers/yellow/main.pdf](https://github.com/ergoplatform/ergo/blob/master/papers/yellow/main.pdf): Live yellow paper (whitepaper draft) in development

## Unresolved Questions

- **Emission length vs. security**: Is 8-year emission too short compared to Bitcoin and other PoW cryptocurrencies? How will network security be maintained after mining concludes? [@C S, msg#3004]

- **Post-emission incentive structures**: What concrete mechanisms will incentivize node operators and miners to continue operating after all ERG supply is issued? [@C S, msg#3004; @Unknown, msg#3022]

- **Swap ratio finalization**: Final swap ratio and timing for EFYT-to-ERG conversion still pending; referenced as "to be answered next week" but not resolved in this chat segment. [@C S, msg#3004; @Dmitry, msg#3005]

- **Whitepaper completion & simplification timeline**: Yellow paper is a live draft; simplified whitepaper promised "near launch" but specific dates TBD. [@Unknown, msg#3070, msg#3072]

- **Exchange listing strategy**: Beyond Waves DEX and atomic swaps, specific exchanges targeted for ERG listing at mainnet launch remain unannounced. [@Unknown, msg#3060-3062]

- **Community infrastructure**: Discord/Slack for public community deferred to post-mainnet; decision criteria for when formal infrastructure is needed unclear. [@Unknown, msg#3034]