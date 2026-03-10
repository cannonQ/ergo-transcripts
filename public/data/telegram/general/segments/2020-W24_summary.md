---
title: "Ergo General Chat — 2020-W24"
date_start: "2020-06-08"
date_end: "2020-06-14"
type: telegram_weekly
channel: general
week: "2020-W24"
source: telegram
message_count: 572
categories: [ecosystem, wallet, technical, mining, marketing, defi, governance]
key_terms: [Emurgo, partnership, Yoroi wallet, DeFi solutions, research collaboration, Yoroi, Ledger support, wallet integration, signing protocol, Metamask-like functionality, EIP-11, distributed signatures, threshold signatures, zero-knowledge, API, hashrate, mining pools, collateral-based pools, hardware efficiency, Radeon VII]
---
# Ergo General Chat — 2020-W24 Summary

## Key Topics Discussed

- **Emurgo Partnership & Roadmap Implications** — Partnership announced June 9 with major implications for Ergo's roadmap. Yoroi wallet integration will provide Metamask-like signing for external dApps. Extended UTXO model research underway; stablecoin now planned for 2020 (previously not on roadmap).

- **Distributed Signatures (EIP-11) Implementation** — kushti testing threshold signatures with zero-knowledge preservation; unlike Bitcoin multisigs, blockchain observers cannot determine who signed. First 2-of-3 protected funds spent via API on mainnet.

- **Mixer Development** — Anonymous developer published improved ergomix with token-based fees, multiple ring support, auto-splitting, better UI/UX in React, and token mixing in development. Launching within days with binaries and improved statistics.

- **Wallet Ecosystem Expansion** — Yoroi (100K+ users, Cardano-focused) adding Ergo support within weeks. Cypra wallet (privacy-focused, supports BTC/Ergo/USDT, client-side BIP158 filters) AMA scheduled Monday 18:00 UTC. CoinBarn extension (open source, Ergo core dev contribution) and Magnum Wallet available.

- **Exchange Listings & Airdrops** — Ergo won Sistemkoin voting (listable reward: 20K ERG to voters). CoinsBit airdrop delayed pending fraud filtering (~30% addresses filtered). HotBit and Tidex primary liquidity sources; Tidex allows 2 BTC/day KYC-free, HotBit ~4 BTC/day.

- **Network Growth Metrics** — Hash rate progression: 6.52 TH/s (June 10, 04:30) → 7.28 TH/s (June 12, 14:35) → 7.52 TH/s (June 13, 05:44). CoinGecko top-300 achieved. Mining emission aggressive but locked collateral for DeFi CDPs expected to offset supply pressure.

- **Extended UTXO Model as Competitive Advantage** — Cardano's Goguen launch (post-Shelley) will implement similar model; Emurgo Research already published design patterns. Ergo community has 2+ years practical experience (testnets since 2018). Provides novel possibilities for stablecoins, privacy protocols, and hybrid contracts.

- **Consensus on Faster Block Speeds** — Community discussion on potential speedups (microblocks, sidechains, layer 2). Consensus that needs concrete application set to justify optimization; unresolved which path (sub-blocks vs. sidechains) to pursue first.

- **Protocol Immutability vs. Roadmap Flexibility** — kushti stated protocol "more or less set in stone" with only cosmetic hard-fork changes expected; development focus now on ecosystem applications rather than core protocol redesign.

## Important Decisions or Announcements

- [@kushti, msg#35834, 2020-06-09]: Emurgo partnership "changes a lot in the roadmap"
- [@kushti, msg#35857, 2020-06-09]: Yoroi will support external dApp signing protocol (Metamask for Ergo), 100K+ existing users
- [@kushti, msg#35907, 2020-06-09]: Wallets Yoroi and Cypra incoming; Ledger support coming
- [@kushti, msg#36137-36141, 2020-06-10]: Updated 2020 roadmap will include: mixer, DEX, crowdfunding platform, **stablecoin** (new addition via Emurgo partnership)
- [@kushti, msg#36519-36521, 2020-06-11]: Distributed signatures (threshold sigs) tested on mainnet; zero-knowledge property preserved (observers cannot identify signers)
- [@kushti, msg#36460-36464, 2020-06-11]: Anon dev published improved token mixer with multiple rings, auto-split, React UI, launching "in a few days"
- [@kushti, msg#36472-36473, 2020-06-11]: Sistemkoin voting **won** — ERG integration process starting
- [@kushti, msg#36629-36630, 2020-06-12]: Updated 2020 roadmap + 2021-23 sketch publishing next week; storage rent benefit explanation forthcoming (forum post)
- [@Unknown, msg#36665-36666, 2020-06-12]: Ergo mentioned in Blockfolio Signal digest
- [@kushti, msg#36743-36744, 2020-06-13]: Cypra wallet AMA Monday 18:00 UTC; supports BTC/Ergo/omni-USDT with decentralized mixer and atomic swaps
- [@kushti, msg#36752-36753, 2020-06-13]: CoinsBit airdrop list review in 2 days; payouts pending (30% filtered for fraud)
- [@kushti, msg#36908, 2020-06-14]: v3.2.7 finalized with new API method for incoming mining pools

## Technical Q&A Worth Preserving

- **Q** (@Rich, msg#35845): Why such aggressive distribution at launch rather than constant 100M emission?  
  **A** (@kushti, msg#35848-35852): Distribution may be aggressive for adoption level, but security peak around year 4 when applications create load; miners stabilized via storage rent + block rewards vs. Bitcoin's pure halving model; Ergo in better position than Bitcoin at year 8.

- **Q** (@Kookster, msg#35841): Does Yoroi integration mean Ledger support?  
  **A** (@kushti, msg#35846): Ledger support coming separately; Yoroi implications greater — external dApp signing protocol (Metamask paradigm).

- **Q** (@Unknown, msg#36046): What 3rd-party code in Yoroi integration?  
  **A** (@kushti, msg#36066): Yoroi will run private Ergo explorer; code inside Yoroi will be Emurgo's (not 3rd-party risk).

- **Q** (@Kookster, msg#36223): Timing for Binance vote?  
  **A** (@kushti, msg#36221-36222, implied): Too early; should time with Yoroi integration launch.

- **Q** (@Bullish Teddy, msg#36283-36291): Why market cap rising faster than price? Suggests rapid supply increase?  
  **A** (@Terri, msg#36294-36302): CMC tracking error pre-mainnet (Waves airdrop period); zoom to mainnet start; log chart shows normal; CMC supply registration still settling.

- **Q** (@Bullish Teddy, msg#36283): Lots of new ERG minted?  
  **A** (@kushti, msg#36316): Emission aggressive due to mining; DeFi demand (locked collateral in CDPs) will offset supply pressure.

- **Q** (@Unknown, msg#36787): Was NXT or PPC first pure PoS?  
  **A** (@kushti, msg#36794): PPC was hybrid; NXT was first pure PoS.

- **Q** (@Kookster, msg#36816): Why no mention of custom tokens in 1-pager?  
  **A** (@kushti, msg#36817): Good catch (acknowledged).

## Links Shared

- [Emurgo partnership press release](https://ergoplatform.org/en/blog/2020_06_09_press_release/): Official announcement of Emurgo Research collaboration on extended UTXO model
- [Emurgo Research GitHub](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/High%20Level%20Design%20Patterns%20In%20Extended%20UTXO%20Systems.md): Design patterns for extended UTXO systems (first research output)
- [CoinGecko Ergo page](https://www.coingecko.com/en/coins/ergo): Real-time price & market data (top-300 milestone)
- [Sistemkoin voting](https://sistemkoin.com/pages/coin-vote): Exchange listing vote (Ergo won)
- [Ergo mining guide](https://github.com/ergoplatform/ergo/wiki/Mining-Ergo-for-Fun-and-Profit): Hardware/software setup
- [CryptoRich interview Part 1](https://www.youtube.com/watch?v=nK2ZBsLCGIU): kushti interview (released June 8)
- [Daily Chain article](https://thedailychain.com/ergo-with-founder-alex-chepurnoy/): Founder interview (June 13)
- [Token mixer GitHub](https://github.com/anon92048/ergo-mixer-web): Anon dev's improved mixer (pull request #9 for token mixing)
- [Cypra wallet](https://cypra.io): Privacy-focused multi-currency wallet announcement
- [Gains Associates AMA announcement](https://twitter.com/GainsAssociates/status/1271181748609712128): Kushti + MX AMA, June 13, 16:00 UTC (quiz + $200 prize pool)
- [Blockfolio Signal digest](https://blog.blockfolio.com/this-week-in-blockfolio-signal-digibyte-cardano-iota-zilliqa-verge-ren-matic-bandchain-bc32faec40e2): Ergo mentioned in weekly roundup

## Unresolved Questions

- **Roadmap 2021-23 sketch:** Kushti stated "plans will be published later" (msg#36162); full 2021-24 roadmap not yet detailed in this period
- **Faster block speeds decision:** Multiple optimization paths discussed (microblocks, sidechains, layer 2) with no consensus on which to prioritize; kushti flagged need for "another round of discussion" post-Ergoversary
- **Cypra AMA timing:** Scheduled Monday 18:00 UTC but no follow-up confirmation in logs; day/time negotiation visible (msg#36642-36644)
- **Storage rent benefit modeling:** kushti announced forum post forthcoming on emission schedule and storage rent mechanics (msg#36630); not yet published in this period
- **CoinsBit airdrop completion:** Filtering and payouts pending as of June 13; kushti stated "2 days" for list review (msg#36752-36753) but no completion confirmation in logs
- **Mining pools development:** v3.2.7 API ready for "mining pools coming" but no launch date or pool implementation details provided (msg#36908)