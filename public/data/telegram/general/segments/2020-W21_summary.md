---
title: "Ergo General Chat — 2020-W21"
date_start: "2020-05-18"
date_end: "2020-05-24"
type: telegram_weekly
channel: general
week: "2020-W21"
source: telegram
message_count: 363
categories: [technical, marketing, mining, wallet, ecosystem, defi, community]
key_terms: [smart contracts, sigma protocols, UTXO model, non-outsourceable puzzles, zero-knowledge proofs, airdrop, Coinsbit, free coins, registration, bounty campaign, hash rate, difficulty, TH/s, miners, pool, GPU mining, CoinBarn, Magnum Wallet, Cypra, node API]
---
# Ergo General Chat — 2020-W21 Summary

## Key Topics Discussed

- **Ergo Mainnet Releases & Development**: Version 3.2.4 released with token burning support, transaction complexity limit raised to 250K. Versions 3.2.5 and 3.3.0 under review. Distributed signatures EIP finalizing.

- **Mining & Network Hash Rate**: Hash rate climbing from 4.55 TH/s to 5.30 TH/s over the week. Pool still in private testing mode, marketing push planned for mining communities once public.

- **DEX & Smart Contracts**: DEX contracts with multiple order matching ready. DEX matcher in progress. Tokens mixer completed and testing finished.

- **Airdrop Campaign Issues**: Coinsbit airdrop generated low-quality participants and spam. kushti expressed frustration with airdrops as ineffective growth tool; community consensus shifted toward dev bounties over token drops.

- **Wallet Ecosystem**: CoinBarn extension, Magnum Wallet available. Cypra (privacy & atomic swap wallet) in development. Ledger support and other wallets in stealth mode.

- **Project Positioning**: kushti emphasized Ergo as research-oriented, open-source movement focused on real economic applications (microloans, zero-interest loans, local exchange systems) rather than speculation. Charles Hoskinson (Cardano CEO) praised Ergo as "one of the most revolutionary cryptocurrencies ever built."

- **Community Growth vs. Quality**: Rapid influx of new members (many via Coinsbit) caused moderation concerns. Discord Research and Development channels identified as most valuable discussions. kushti disabled automatic member additions to prevent spam.

## Important Decisions or Announcements

- [@kushti khushi, msg#33456, 2020-05-18]: Finalizing Ergo 3.3.0 and EIP on distributed signatures.

- [@kushti khushi, msg#34021, 2020-05-20]: General devs meeting outcomes: pool in private testing, DEX contracts ready, 3.2.5 & 3.3.0 release candidates imminent, distributed signatures coming, explorer improvements ongoing.

- [@kushti khushi, msg#34123-34126, 2020-05-21]: Consensus decision to abandon airdrops ("no more stupid drops"). Focus shifted to rewarding node runners and dev bounties; Ergo is "for developing applications after all."

- [@kushti khushi, msg#33947, 2020-05-20]: Disabled automatic member additions due to spam concerns and low-quality airdrop participants.

- [@kushti khushi, msg#34240, 2020-05-22]: Privacy/swap wallet Cypra (https://cypra.io) announced, plus Ledger support and other wallets in stealth mode.

- [@kushti khushi, msg#34296, 2020-05-23]: Hash rate reached 5.25 TH/s; pool functionality imminent.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#34139): "Access to the Ergo REST API must be restricted to known hosts. I installed the jar and clicked public on firewall settings — is this a mistake?"
  **A** (@kushti khushi, msg#34144-34147): If you have a public IP, your node is accessible via ip:9053 (configurable port). Open ports expose your machine to potential DDoS via API queries. If on home internet, you likely lack a public IP; Node API is the exposed surface.

- **Q** (@Marek M, msg#34342-34343): "Is the Ergo full node configuration file valid JSON or what format?"
  **A** (@kushti khushi, msg#34346): HOCON (Human-Optimized Config Object Notation) variant: https://github.com/lightbend/config/blob/master/HOCON.md

- **Q** (@Unknown, msg#34099): "Why not add Ergo to Atomic Wallet for staking and rewards?"
  **A** (@kushti khushi, msg#34100): "How can you stake a Proof-of-Work cryptocurrency?" [Ergo uses PoW mining, not staking.]

- **Q** (@Unknown, msg#34364): "Can you explain what locking the price means? Why wouldn't a miner let price fall, buy, then sell higher?"
  **A** (@filippounits, msg#34370): Miners need to sell production immediately to cover: (1) electricity costs, (2) hardware ROI, (3) profit. Price uncertainty makes holding risky.

## Links Shared

- [https://ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/]: "Welcome to Smart Money" introductory article.

- [https://github.com/ergoplatform/awesome-ergo]: Curated Ergo resources and documentation index.

- [https://ergoplatform.org/en/exchanges/]: Official exchange listing (ProBit, HotBit, Tidex, Waves.exchange, CoinsBit).

- [https://www.ergoforum.org/c/research-and-development/7]: Forum R&D discussion section.

- [https://www.ergoforum.org/t/tokens-mixer-is-done/219]: Tokens mixer completion announcement and testing update.

- [https://github.com/ergoplatform/eips/pull/8]: EIP on distributed signatures support.

- [https://twitter.com/chepurnoy/status/1262467765388148736]: kushti's Twitter update on development progress.

- [https://tidex.com/exchange/erg/btc]: Tidex ERG/BTC trading pair.

- [https://www.hotbit.io/exchange?symbol=ERG_BTC]: HotBit ERG/BTC trading pair.

- [https://discord.com/invite/kj7s7nb]: Ergo Discord server (development & research channels).

- [https://explorer.ergoplatform.com/en/mempool]: Ergo blockchain explorer with mempool visibility.

- [https://cointelegraph.com/news/charles-hoskison-reveals-his-9-favorite-crypto-projects]: Cointelegraph interview featuring Charles Hoskinson's endorsement of Ergo.

- [https://www.ergoforum.org/t/proof-of-work-backed-tokens/224]: Forum discussion on PoW-backed tokens.

- [https://sistemkoin.com/pages/coin-vote]: SistemKoin listing vote for Ergo.

- [https://cypra.io]: Cypra privacy/swap wallet (in development).

- [https://github.com/hexresearch/ergvein]: Cypra wallet GitHub repository (early-stage).

- [http://bit.ly/bittubetvcryptorich]: kushti's video interview with Crypto Rich (BitTube).

- [https://www.youtube.com/channel/UCNZb8eUomqPYgrdVeOn4eZA]: Crypto Rich YouTube channel.

- [https://ergoplatform.org/en/blog/2019_12_22_mining_for_fun/]: Mining guide article.

## Unresolved Questions

- **Peer Explorer Implementation**: [@kushti khushi, msg#33666, 2020-05-20] flagged as "good question" — how to expose connected node count on the Ergo network. Planned for discussion in "general devs chat" but outcome not documented.

- **Cypra Release Timeline**: Multiple users asked for release dates; kushti invited Cypra developers for AMA (msg#34253-34254) but meeting outcome not recorded in this chat.

- **Pool Public Release**: Pool functionality repeatedly described as "coming soon" and "imminent" (msg#34306-34307) but exact launch date left ambiguous pending polish by Jason.

---

**Summary**: This week marked a critical pivot from airdrop-driven growth (now deprecated) to developer-focused ecosystem building. Mainnet development progressed smoothly (3.2.5/3.3.0 releases, DEX contracts finalized, tokens mixer complete), while mining infrastructure matured (5.3 TH/s, pool nearing public release). Community quality improved after disabling auto-adds, with Discord emerging as the hub for serious technical discussion. kushti's emphasis on Ergo as an applications platform—backed by Hoskinson's public endorsement—shifted narrative from speculation to fundamental research and use-case development.