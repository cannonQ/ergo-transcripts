---
title: "Ergo General Chat — 2021-W16"
date_start: "2021-04-19"
date_end: "2021-04-25"
type: telegram_weekly
channel: general
week: "2021-W16"
source: telegram
message_count: 1816
categories: [technical, defi, governance, wallet, bridges, nft, marketing, community, ecosystem]
key_terms: [withdrawal, locked funds, miner dust, hotbit, coinex, sigmausd, sigrsv, reserve ratio, bearwhale, v2, ergodex, sigmadex, naming, branding, cardano interoperability, yoroi, dapp connector, auction house, sigmausd integration, catalyst]
---
# Ergo General Chat — 2021-W16 (2021-04-19 to 2021-04-25)

## Key Topics Discussed

- **Marketing and Messaging Strategy**: Extended discussion on how to position Ergo for broader adoption. Community debated whether to emphasize privacy features, DeFi capabilities, or relationship with Cardano. Consensus emerged around "Private DeFi with internal Oracle Pools" as a differentiator, avoiding pure privacy coin marketing due to regulatory concerns while highlighting unique smart contract capabilities.

- **Exchange Listing Progress**: Multiple withdrawal issues reported on Hotbit due to miner dust problems. kushti confirmed engagement with Hotbit technical team. NDAs confirmed for exchange negotiations (likely KuCoin), with community discussing preferences to avoid Binance in favor of more decentralized options.

- **SigmaUSD v2 and Reserve Dynamics**: Discussion of how reserve ratio responds to price movements. Ratio drops as ERG price drops even without circulation changes. Users noted difficulty minting SigRSV when ratio exceeds 400%, and challenges with v1 redemptions.

- **ErgoMixer Technical Capabilities**: Detailed explanation of ErgoMixer as first non-custodial, non-interactive mixer with programmable features. Can mix tokens (not just ERG), supports covert addresses for automatic mixing at thresholds, includes TOR integration. Described as enabling "Monero-like privacy" on top of smart contract platform.

- **Yoroi "Send All Assets" Issue**: Multiple users accidentally sent SigRSV tokens to exchanges by clicking "Send All Assets" in Yoroi, thinking it would only send ERG. CoinEx demanding 10% fee to return trapped tokens. Community calling for UI improvements and warnings.

- **NFT Activity on Ergo Auction House**: Active bidding on ERGnomes 420-themed NFTs. Discussion of minting process issues with certain .GIF files. Yoroi dApp connector integration announced for auction house by anon_real.

## Important Decisions or Announcements

- [@kushti, msg#120526, 2021-04-20]: Announced "Speeding up community-driven ecosystem development" forum post with focus on accelerating ecosystem growth over next 3 years (until July 1, 2024 — 5 years of mainnet).

- [@Armeanio, msg#121399, 2021-04-22]: Published weekly dev update covering progress across multiple workstreams.

- [@kushti, msg#122062/122074, 2021-04-23]: Confirmed ErgoDex testing visible on-chain via transaction analysis, tokens being used indicate AMM testing phase.

- [@kushti, msg#121505-121506, 2021-04-22]: Announced two developers working on Yoroi dApp connector integration — anon_real adding to auction house, ErgoDex team integrating for DEX.

- [@kushti, msg#122334, 2021-04-23]: Posted "A solution for staking" on forum — liquidity provision to ErgoMixer as staking alternative for PoW chain.

- [@Glasgow, msg#122480-122481, 2021-04-24]: Posted comprehensive exchange listing strategy update on forum addressing community questions about binance and listing priorities.

- [@Glasgow, msg#121202, 2021-04-22]: Shared simple ErgoFund contract and playground for community funding mechanism.

- [@kushti, msg#122561, 2021-04-24]: Announced ErgoScript by Example repository with 200 ERG bounty for each accepted example submission.

## Technical Q&A Worth Preserving

- **Q** (@user): What can I read to understand Schnorr signature schemes and why they're important?
  **A** (@c8, msg#120991): Watch first 15 mins of MIT OCW Cryptocurrency Engineering lecture on signatures — covers basics of good vs bad signature schemes. Also linked video directly addressing Schnorr specifically.

- **Q** (@Ys, msg#122283-122284): What makes PoW better than PoS? What does ErgoScript allow that Cardano cannot do?
  **A** (@Marek M + @Klaus, msg#122298-122307): PoW is battle-proven, requires minimal bootstrap, enables NIPoPoWs for mobile. PoS can face security issues with DeFi — higher liquidity pool returns vs staking could centralize stake power with DeFi providers. ErgoMixer uses underlying base asset (ERG) in reserves, similar concern exists for AgeUSD reserves on Cardano using ADA.

- **Q** (@user, msg#122224): Can ErgoScript create NFTs? Can a buyer open a package and get random NFT?
  **A** (@c8, msg#122226): Yes, depending on use case. For art NFTs it's much easier without script. Randomized package opening would require script.

- **Q** (@claeys, msg#122436): Do we know how many exchanges have started conversations besides the one under NDA?
  **A** (@Glasgow, msg#122438): Need to "give your first born for Coinbase" but heard they're considering adding more alts after ADA success. Detailed exchange strategy posted on forum.

- **Q** (@user, msg#122229): What are returns for providing liquidity via SigRSV?
  **A** (@Klaus, msg#122231-122232): Depends on future contract usage, no one can seriously predict. Join @SigmaUSD for discussions.

- **Q** (@Ys, msg#122295-122296): Are Oracle Pools built into Ergo like API3, chain agnostic?
  **A** (@Marek M, msg#122297): Yes, Oracle Pools on Ergo are awesome, decentralized from start unlike Chainlink.

- **Q** (@user, msg#121851): How to describe Ergo Oracle Pools as part of ecosystem since they're not outside chain "integrated"?
  **A** (@user, msg#122142-122143): "Private DeFi without the need of outside Oracles" or "Private DeFi with internal Oracle Pools for lowest cost."

## Links Shared

- [https://ergoplatform.org/en/blog/2021-04-19-youtube-video-competition/]: YouTube video competition announcement
- [https://thecryptodrip.com/ergo-deep-dive/]: Deep dive article by Mr. Goose
- [https://youtu.be/O3hPEp3tzoU]: AgeUSD tutorial video by Jesse (DroppinShorts)
- [https://cardano.ideascale.com/a/dtd/ErgoDex-Plutus-Port/352410-48088]: ErgoDex Plutus Port Catalyst proposal
- [https://ergoplatform.org/en/blog/2021-04-21-wrapassets-announces-integration-with-ergodex/]: WrappedAssets integration announcement
- [https://ergonaut.space/ergodex.pdf]: ErgoDex presentation document (multiple versions)
- [https://cryptoslate.com/exploring-the-idea-of-interoperability-between-cardano-and-litecoin/]: Article on Cardano-Litecoin interoperability via NIPoPoWs
- [https://nipopows.com]: NIPoPoWs resource site
- [https://www.ergoforum.org/t/a-solution-for-staking/1057]: kushti's staking solution proposal via ErgoMixer liquidity
- [https://www.ergoforum.org/t/speeding-up-community-driven-ecosystem-development/1033]: Ecosystem acceleration roadmap post
- [https://www.ergoforum.org/t/discuss-desired-future-exchange-listings/808]: Exchange listing strategy discussion
- [https://github.com/ergoplatform/ergoscript-by-example]: ErgoScript by Example repository with bounties
- [https://github.com/anon-real/DistributedSigsServer]: Distributed signatures server for OTC escrow
- [https://africa.cardano.org]: Cardano Africa initiative page (Ergo logo visible)
- [https://ab6x.com/nft/]: NFT viewer for Ergo tokens
- [https://ergnomes.io/]: ERGnomes project website

## Unresolved Questions

- **ErgoDex Naming**: Debate between "ErgoDex" vs "SigmaDex" for branding. Final decision announced as "ErgoDex" but early confusion from multiple names across channels (GitHub, Reddit, ideascale) noted as needing consistency.

- **Cardano Africa Involvement**: Community asked if Ergo would have any announcements at Cardano Africa event on April 29. No confirmation provided.

- **Hotbit SigRSV Recovery**: Multiple users with trapped SigRSV tokens on exchanges awaiting resolution. CoinEx demanding 10% fees, some v1 tokens stuck for 2+ months.

- **Scalability Strategy**: Questions raised about how Ergo/Cardano will handle congestion and high fees like ETH/BSC/TRON. Response mentioned eUTXO model allows scaling, but specifics on sharding and performance need further explanation.

- **PoS DeFi Security**: Discussion of how higher DeFi yields could drain staking participation on Cardano, reducing security. Liqwid mentioned as potential solution allowing staking while providing liquidity, but mechanism not fully explained.

- **Token Registry**: User asked how to check registry/list of native Ergo tokens besides NFTs. No comprehensive registry exists yet for fungible tokens.

- **Charles Hoskinson Involvement**: Community discussed getting CH to help with exchange listings and promotion. Video evidence of his promise to help Ergo grow shared, but no concrete commitments on exchange advocacy.