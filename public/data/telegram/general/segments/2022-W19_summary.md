---
title: "Ergo General Chat — 2022-W19"
date_start: "2022-05-09"
date_end: "2022-05-15"
type: telegram_weekly
channel: general
week: "2022-W19"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W19 Summary
**Period:** 2022-05-09 to 2022-05-15  
**Messages Reviewed:** 807

---

## Key Topics Discussed

- **SigmaUSD vs UST Comparison**: Multiple discussions comparing SigmaUSD's design (overcollateralized 400-800%, transparent on-chain reserves, forced minting limits) against UST's failed seigniorage model. SigmaUSD demonstrated resilience during Terra Luna collapse, maintaining ~250% reserve ratio while UST depegged catastrophically.

- **Stablecoin Design Frameworks**: Extensive technical debate on different stablecoin architectures—asset-backed vs. algorithmic (per Nevin Freeman's taxonomy), reserve collateralization mechanisms, governance risks, and whether SigmaUSD qualifies as "algorithmic" (it doesn't follow seigniorage shares model; it's overcollateralized).

- **Dexy Protocol Development**: kushti outlined a new analytical solution for Dexy linking bank reserves to liquidity pools transparently (without a separate reserve instrument like SigRSV), enabling reserve ratio transparency similar to SigmaUSD but with different risk profile.

- **Protocol Version 5.0 & Transaction Sorting**: kushti announced v5.0 will include AOT (Just-In-Time) costing for aggressive cost estimation in multi-branch contracts, UTXO set snapshot bootstrapping, and potential complexity limit increases. Discussion of tx sorting by ERG/complexity ratio to prevent ErgoPad contract spam blocking regular transactions.

- **EIP-27 Reemission Vote**: Announced vote running until June 21st on re-emission parameters and mining reward structure; [@Unknown, msg#276121, 2022-05-14] shared roadmap blog post.

- **Ledger Hardware Wallet Support**: Beta testing ongoing for Nano S devices; approval process expected to take weeks once beta completes. No mainnet launch date confirmed.

- **Mining Pool Split Incident** (2022-05-10): Nanopool and GetBlok appeared on different chain forks/block heights (746557-558 vs 746585), resolved within hours; kushti confirmed invalid blocks hadn't restarted nodes or were older versions.

- **Wallet Ecosystem Issues**: Yoroi wallet backend structurally broken for Ergo; community directed users to Nautilus, SAFEW, Ergo Mobile instead. Kucoin withdrawal delays (2-9 hours) on 2022-05-11/12, attributed to exchange-side issues.

- **ErgoHack Fest Activity**: Multiple projects announced; notable mentions include Night Owl Casino objectives, derivatives contracts, and ecosystem growth during bear market.

---

## Important Decisions or Announcements

- [@Glasgow, msg#274718, 2022-05-09]: Marketing inquiries directed to `team@ergoplatform.org`

- [@Glasgow, msg#274920, 2022-05-10]: Ledger Nano S beta testing underway; approval process expected to take weeks post-beta

- [@Unknown, msg#274911, 2022-05-10]: ErgoLend seed round whitelist snapshot May 10 @ 14:00 UTC; ErgoPad staking (25k tokens) enables early access @ 13:00 UTC

- [@Glasgow, msg#275129, 2022-05-11]: Forum proposal for "public good stablecoin" framework linked: https://www.ergoforum.org/t/a-proposal-for-a-public-good-stablecoin/3432

- [@kushti, msg#276036, 2022-05-14]: Found analytical solution linking Dexy bank reserves to liquidity pool with transparent reserve ratio (no separate reserve instrument); details forthcoming

- [@Brandon, msg#276121, 2022-05-14]: EIP-27 vote wraps by June 21st block; blog post: https://ergoplatform.org/en/blog/Ergos-Reemission-Vote-EIP27-A-Path-to-Sustained-Growth/

- [@Glasgow, msg#275577, 2022-05-12]: Twitter link to SigmaUSD @SigmaUSD account (context: promoting reserve ratio monitoring)

---

## Technical Q&A Worth Preserving

- **Q** (@Koutelier, msg#274742): Is SigmaUSD truly stable if it keeps dipping on Spectrum DEX?  
  **A** (@Glasgow, msg#274744, 274748): SigmaUSD is stable if held; dips reflect secondary market pricing on Spectrum DEX AMM. Redeeming on SigmaUSD.io or TokenJay shows correct 1:$1 USD ratio.

- **Q** (@Man ish, msg#275268): Can SigmaUSD face Luna/UST-style collapse?  
  **A** (@Ile, msg#275269): At 80% collateral ratio, 1 SigmaUSD = $0.80. Transparent on-chain collateral visibility incentivizes redemption before peg loss, restoring reserves. All data visible at sigmausd.io vs. UST's opaque design.

- **Q** (@J_beliy, msg#274715): Can we see real-time hashing power voting for/against proposals?  
  **A**: Not directly answered; implies voting mechanism exists but dashboard visibility unclear.

- **Q** (@Koutelier, msg#275115): Can SigmaUSD mature into USDC/USDT scale?  
  **A** (@Glasgow, msg#275118): Anything possible. Sees stablecoins maturing with different use-cases: SigmaUSD for long-term stability, Dexy for quick/cheap stability.

- **Q** (@Marty, msg#275596): Is SigRSV like bonds—can people buy during crashes and profit when recovered?  
  **A** (@Ile, msg#275601): Not directly. SigRSV profitable share growth depends on SigmaUSD usage/fees, not narrative recovery bets like Luna bonds. Buying at low reserve ratio gives higher future fee share.

- **Q** (@Shiv Chauhan, msg#275569): Can eUTXO help Ergo act as layer 2 for Bitcoin?  
  **A**: Not directly answered in chat; implies deeper discussion needed.

- **Q** (@kushti, msg#275628, reply to Ile's protocol-owned collateral idea): Can bank be drained via profitable shorting?  
  **A** (@kushti, msg#275629, 275643): Bank reserves restore peg; USD burn in pool as last resort. Conversion only at liquidity pool, not direct bank redemption (bank intervenes when peg below target for extended time).

- **Q** (@Ile, msg#275645): Why wouldn't users convert SigmaUSD from liquidity pool if reserves < circulating supply?  
  **A** (@kushti, msg#275643): Bank intervention and peg restoration mechanism; reserves + pool liquidity combined protect against bank runs.

- **Q** (@Marty, msg#275724): What scaling plans prevent network slowdown (e.g., ErgoPad contracts congestion)?  
  **A** (@kushti, msg#276037, 275897, 275899): v5.0 includes AOT costing for aggressive estimation, UTXO snapshot bootstrapping, then complexity limit increase feasible. Multiple optimizations planned before raising limits securely.

- **Q** (@Luivatra, msg#275662, reply Cheese): Will low-fee txs fill mempools without execution?  
  **A** (@Luivatra, msg#275663): Possible; JIT costing helps contracts with multiple paths. Miners sorting by ERG/complexity ratio would solve issue.

- **Q** (@Unknown, msg#276074): Easiest way to interact with dApp on testnet if Nautilus lacks testnet switch?  
  **A** (@Unknown, msg#276080): Check transaction ID on explorer; if nonexistent, never picked up into block. Check pending txs in wallet; if none, wallet never successfully sent.

- **Q** (@miwal, msg#276222): Does SigmaUSD follow Luna's seigniorage shares model?  
  **A** (@Glasgow, msg#276223): No. SigmaUSD does not use seigniorage. (Links: twitter.com/spencernoon/status/1524752048121466883 and GitHub PDF on AgeUSD)

- **Q** (@Unknown, msg#275983, reply #275982): How does ErgoNameService work—key-value store or more complex?  
  **A** (@Glasgow, msg#275684): Mints on-chain NFT with identifier. Video: youtube.com/watch?v=G7glbtnAnMY. Still in development; team has SDK for wallet integration.

---

## Links Shared

- [ergoplatform.org](https://ergoplatform.org): Official platform site; wallets, documentation, blog
- [ergoplatform.org/en/get-erg](https://ergoplatform.org/en/get-erg): Wallet and exchange options
- [ergo.watch/sigmausd](https://ergo.watch/sigmausd): SigmaUSD reserve ratio graph monitoring
- [sigmausd.io](https://sigmausd.io): SigmaUSD redemption and monitoring
- [tokenjay.app](https://tokenjay.app/app/#ageusd): Mobile-friendly SigmaUSD redemption tool
- [ergonaut.space/en/Guides/yield](https://ergonaut.space/en/Guides/yield): Staking guides
- [ergopad.io](https://ergopad.io): ErgoPad token staking and seed round contributions
- [app.ergodex.io](https://app.ergodex.io): Spectrum DEX token trading
- [github.com/ergonames](https://github.com/ergonames): ErgoNameService repository
- [youtube.com/watch?v=G7glbtnAnMY](https://youtube.com/watch?v=G7glbtnAnMY): ErgoNameService explanation video
- [github.com/ergoplatform/eips/blob/fd3b7c3181580244ffabc984b716b58c3e5c47a5/eip-0030.md](https://github.com/ergoplatform/eips/blob/fd3b7c3181580244ffabc984b716b58c3e5c47a5/eip-0030.md): Dexy Protocol EIP-30 design notes
- [twitter.com/spencernoon/status/1524752048121466883](https://twitter.com/spencernoon/status/1524752048121466883): SigmaUSD vs. seigniorage model comparison
- [github.com/Emurgo/age-usd/blob/main/docs/A%20Pegged%20and%20Crypto-Backed%20Algorithmic%20Stablecoin...](https://github.com/Emurgo/age-usd/blob/main/docs/A%20Pegged%20and%20Crypto-Backed%20Algorithmic%20Stablecoin%20Slides%20-%20Bruno%20Woltzenlogel%20Paleo%20-%20Ergo%20Summit%202021.pdf): AgeUSD whitepaper/slides (Bruno Woltzenlogel Paleo)
- [youtu.be/86URGgqONvA](https://youtu.be/86URGgqONvA): Seigniorage explanation video
- [www.ergoforum.org/t/a-proposal-for-a-public-good-stablecoin/3432](https://www.ergoforum.org/t/a-proposal-for-a-public-good-stablecoin/3432): Forum discussion on protocol-owned stablecoin collateral
- [www.ergoforum.org/t/voting-for-a-soft-fork-in-ergo/2958](https://www.ergoforum.org/t/voting-for-a-soft-fork-in-ergo/2958): Miner voting mechanism for soft-forks
- [ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/](https://ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/): Storage rent mechanics explainer
- [ergoplatform.org/en/blog/Ergos-Reemission-Vote-EIP27-A-Path-to-Sustained-Growth/](https://ergoplatform.org/en/blog/Ergos-Reemission-Vote-EIP27-A-Path-to-Sustained-Growth/): EIP-27 reemission proposal and vote timeline
- [miningpoolstats.stream/ergo](https://miningpoolstats.stream/ergo): Mining pool statistics (showed May 10 fork visibility)
- [reddit.com/r/ergonauts/comments/unc2hs/how_wouldve_sigusd_held_up_with_this_whole_luna/](https://reddit.com/r/ergonauts/comments/unc2hs/how_wouldve_sigusd_held_up_with_this_whole_luna/): Detailed Reddit comparison of SigmaUSD vs. UST collapse scenario
- [nubits.com/NuWhitepaper.pdf](https://nubits.com/NuWhitepaper.pdf): NuBits whitepaper (historical algo stablecoin that failed)
- [medium.com/reserve-currency/the-end-of-a-stablecoin-the-case-of-nubits-dd1f0fb427a9](https://medium.com/reserve-currency/the-end-of-a-stablecoin-the-case-of-nubits-dd1f0fb427a9): Post-mortem on NuBits collapse
- [youtu.be/FikKRmkSU-4](https://youtu.be/FikKRmkSU-4): Weekly AMA (May 13, 2022) with Daniel Friedman, Joseph Armeanio, Marty from ErgoPad
- [youtu.be/v5RImLhz0_0](https://youtu.be/v5RImLhz0_0): Video referenced in context of partnerships/ecosystem (likely Flux integration discussion)
- [youtu.be/Ks_QAbetTg4](https://youtu.be/Ks_QAbetTg4): ErgoHack Fest video—kushti & Armeanio discussing DeFi state
- [youtu.be/LyyD-clUvyI](https://youtu.be/LyyD-clUvyI): Interview with Armeanio and Ryan Matta (referenced Flux collaboration)
- [feedback.koinly.io/integrations/p/integrate-ergo-native-tokens](https://feedback.koinly.io/integrations/p/integrate-ergo-native-tokens): Koinly native token integration proposal (voting encouraged)
- [twitter.com/getblok_io/status/1523497846758158338](https://twitter.com/getblok_io/status/1523497846758158338): GetBlok announcement
- [twitter.com/ergofoundation/status/1524380370497593346](https://twitter.com/ergofoundation/status/1524380370497593346): Ergo Foundation update on Luna/UST collapse
- [ergoplatform.org/en/mobile-wallets/](https://ergoplatform.org/en/mobile-wallets/): Mobile wallet options (Ergo Mobile, SAFEW, etc.)

---

## Unresolved Questions

- **Ledger Mainnet Timeline**: Exact launch date for Ledger support beyond beta remains unconfirmed; "a few weeks" from approval mentioned but no hard date.

- **Dexy v. SigmaUSD Trade-offs**: Ile raised concerns about Dexy's bank run resilience (what CR% triggers panic?); kushti promised detailed analysis but details not yet posted mid-week.

- **Protocol-Owned Collateral Feasibility**: Ile proposed protocol accumulating stablecoin collateral via fee capture and perpetual minting/burning cycles. Multiple mechanisms floated (ergodex fee subsidies, charity NFT royalties, staggered locking) but viability/