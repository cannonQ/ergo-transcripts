---
title: "Ergo General Chat — 2022-W35"
date_start: "2022-08-29"
date_end: "2022-09-04"
type: telegram_weekly
channel: general
week: "2022-W35"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W35 Summary
**Period:** 2022-08-29 to 2022-09-04  
**Messages:** 1375 | **Participants:** 143

---

## Key Topics Discussed

- **Scam Airdrop Awareness**: Multiple cloned Telegram groups impersonating the official Ergo channel were spreading fake airdrop claims. Users were advised to verify group authenticity and report fraudulent channels.

- **Wallet Migration & Yoroi Deprecation**: Yoroi wallet is no longer actively maintained for Ergo. Users are being directed to Nautilus (browser), Ergo Mobile Wallet (Android), and Terminus Wallet (iOS, TestFlight→App Store). Restoration via seed phrase is the migration path.

- **Storage Rent Mechanism**: Community confusion about automatic 1 ERG deductions from idle UTXOs. Clarified as a feature (not a bug) that prevents state bloat by charging for UTXOs unused for 4+ years. Wallets will eventually surface reminders.

- **SigmaUSD Proxy Issues**: Users experiencing failed redemptions and refund failures due to insufficient ERG in proxy addresses. Solution: send 0.01 ERG to proxy address before attempting refund transactions.

- **Rosen Bridge Development**: Distributed signature generation successfully tested on Cardano testnet. Guard service deadlock issues identified and being fixed. P2P network bugs also being addressed. No ETA given but repos opening to public this week.

- **DuckPools Beta Launch**: Lending protocol went live at duckpools.io in beta with 0.5 ERG maximum deposits. Users advised to test with dummy tokens first and inspect transactions before signing (risk of token loss).

- **Price Pump & Miner Influx**: Significant price movement (~3.2–3.8 USD range) during week, attributed to Ethereum Merge catalyst and incoming miners from ETH pivot. Discussions on whether hashrate increases drive price or vice versa.

- **Ledger Integration In Progress**: Ergo app submitted for Ledger audit. Sideloading instructions released for Nano S Plus; Nano X sideload unlikely. Official release awaiting Ledger team approval.

- **Node 5.0 & Layer 2 Research**: Community interest in faster block times (60s vs. 2min) and L2 solutions. Consensus that L2s are the path for dApps requiring sub-2-minute finality, not mainchain tweaks. Research ongoing, no concrete roadmap.

- **Tier 1 Exchange Listing**: Persistent rumor of imminent listing by high-tier CEX (Binance speculation common but unconfirmed). Team under NDA; no official timeline available.

- **NIPoPoWs & Light Client Architecture**: Technical discussions on Non-Interactive Proofs of Proof-of-Work enabling trustless light wallets/apps without reliance on full nodes or third parties.

- **Transaction Size Limits**: 96 KB per transaction max enforced. Large transactions cannot be included unless solo-mined. Recent issue causing explorer crashes on oversized txs.

---

## Important Decisions or Announcements

- [@Koutelier, msg#302520, 2022-08-30]: Ergo Ledger app sideload guide posted to r/ledgerwallet for Nano S Plus users.

- [@MrStahlfelge, msg#303051, 2022-09-01]: Terminus Wallet officially released on iOS App Store (previously TestFlight only). Old version (Minotaur) will remain available for transition period.

- [@Gazza, msg#302916, 2022-08-31]: First successful cross-chain transaction between Ergo and Cardano testnet completed (wrapped ADA bridge test).

- [@ArØhβΣ @Arohbe, msg#302860, 2022-08-31]: GetBlock partnered with Ergo for infrastructure support.

- [@CW, msg#304537, 2022-09-04]: Ergo Twitter account reached 60,000 followers.

- [@CW, msg#303670, 2022-09-02]: ErgoHack 5 announced with focus on Mining and Minting.

- [@Unknown, msg#305001, 2022-09-04]: High School Jiu Jitsu Team raffle fully funded (350 ERG goal reached) via Ergo Raffle platform.

---

## Technical Q&A Worth Preserving

- **Q** (@koukarin, msg#302991): How does eUTXO model handle sending tokens with insufficient ERG for fees in the output box?  
  **A** (@Klaus, msg#302992): Minimum ERG amount per box is enforced; wallets manage this automatically to prevent creation of empty/unspendable boxes.

- **Q** (@zhang zee, msg#303333): Why does DuckPools require two blocks to show deposits?  
  **A** (@Luivatra, msg#303337): Off-chain bots execute contracts in second block. Can be optimized to one block if dApps account for mempool transactions.

- **Q** (@zhang zee, msg#303314): Why not reduce block time to 60s and halve rewards to maintain emission?  
  **A** (@Unknown, msg#303317): That's what L2s are for. Changing block time is a hard fork decision with complex implications for timestamp-dependent contracts.

- **Q** (@Bogs, msg#303780): How does block time affect TPS?  
  **A** (@Unknown, msg#304787–304792): Ergo supports ~50 TPS with 2-minute blocks. TPS is not solely a function of block time but of transaction throughput capacity and network load.

- **Q** (@STOMACHCRACKER, msg#304961): What's the Ergo Explorer URL?  
  **A** (@Unknown, msg#304963): https://explorer.ergoplatform.com/en/

- **Q** (@N, msg#305084): SigmaUSD redemption failed after 45 minutes with "minimal ERG" error.  
  **A** (@Glasgow, msg#305094): Send proxy wallet 0.01 ERG first, then retry refund. Proxy needs gas for transaction.

- **Q** (@sudo Scientist, msg#305230): Node config broken after update to 4.0.41.  
  **A** (Unresolved): No specific resolution provided in chat; likely requires forum/Discord support.

- **Q** (@Muad'Dib, msg#305157): Any DEX charting tools available?  
  **A** (@Unknown, msg#305161): Charts embedded in Spectrum swap page (icon next to settings).

---

## Links Shared

- [https://ergoplatform.org/en/get-erg/](https://ergoplatform.org/en/get-erg/): Official wallet and exchange list.
- [https://sigmaverse.io/all-projects/?category=All](https://sigmaverse.io/all-projects/?category=All): Ecosystem project directory with category filters.
- [https://www.opolo.io/](https://www.opolo.io/): Hardware wallet alternative (BPSAA member project).
- [https://ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/](https://ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/): Storage rent mechanism explainer.
- [https://docs.ergoplatform.com/node/install/](https://docs.ergoplatform.com/node/install/): Node installation guide (broken link reported).
- [https://docs.ergoplatform.com/documents/](https://docs.ergoplatform.com/documents/): Whitepaper and technical documentation.
- [https://ergoraffle.com/](https://ergoraffle.com/): Ergo Raffle platform for community fundraising.
- [https://duckpools.io/](https://duckpools.io/): DuckPools lending protocol (beta).
- [https://explorer.ergoplatform.com/en/](https://explorer.ergoplatform.com/en/): Ergo blockchain explorer.
- [https://2miners.com/erg-network-hashrate](https://2miners.com/erg-network-hashrate): Network hashrate monitoring.
- [https://ergo.watch/](https://ergo.watch/): Emission and network metrics dashboard.
- [https://www.coingecko.com/en/coins/ergo](https://www.coingecko.com/en/coins/ergo): CoinGecko market data (more reliable than CMC).
- [https://github.com/ergolabs/default-token-list/issues/13](https://github.com/ergolabs/default-token-list/issues/13): Spectrum DEX default token list discussion (Ogre token inclusion).
- [https://github.com/eeysirhc/sigmabot](https://github.com/eeysirhc/sigmabot): Open-source Telegram bot with `.help`, `.wallets`, `.projects` commands.
- [https://ergoplatform.org/en/blog/Ergo-Foundation-Announces-ErgoHack-5-Mining-and-Minting/](https://ergoplatform.org/en/blog/Ergo-Foundation-Announces-ErgoHack-5-Mining-and-Minting/): ErgoHack 5 announcement.
- [https://twitter.com/cyrilXBT/status/1565478920832647174](https://twitter.com/cyrilXBT/status/1565478920832647174): External commentary on Ergo (context unclear from logs).

---

## Unresolved Questions

- **Tier 1 Exchange Timeline**: Team under NDA; no public ETA for listing announcement. Speculation centers on September but unconfirmed.
  
- **Node 5.0 Block Time Optimization**: Community interest in faster blocks or micro-blocks exists, but no decision made on whether to pursue mainchain changes vs. L2-only approach.

- **aNetaBTC Wrapped Protocol Code Review**: Promised delivery to core dev "in a week or so" (msg#304976, early Sept). Status unconfirmed by week end.

- **Oracle Pool v2 Development**: V2 running for Dexy Gold with GORT rewards, but full roadmap and integration timeline not specified.

- **Babel Fee EIP Resolution**: Discussion proposed but no core developer decision reached; awaiting consensus-building on PR.

- **Ogre Token Spectrum Integration**: GitHub issue open on whether meme token should be added to default Spectrum token list; concerns raised about bot activity on Reddit.

- **Market Cap Discrepancy**: CoinGecko vs. CMC vs. KuCoin show different figures; community directed to use CoinGecko as more reliable source.

- **Spectrum DEX Performance**: User reports of slow loading and balance refresh issues; suspected Cloudflare rate-limiting on Explorer API causing cascading wallet delays.

---

## Community Highlights

- **Ergo Raffle Successfully Launched**: High School Jiu Jitsu Team fundraiser reached 100% funding (350 ERG) in ~5 days, demonstrating community support for charitable use cases.

- **Meme Token Culture**: Comet token organically grew to 10k Discord members in 3 days post-airdrop; Ogre token following similar trajectory. Community ambivalent on utility vs. fun/engagement value.

- **Mining Influx Sentiment**: Positive reception to Ethereum Merge pivot toward Ergo. Discussions on profitability, efficiency (3070 > 3080 Ti in MH/W), and longer-term viability if price doesn't appreciate proportionally.

- **Wallet Maturation**: Multiple wallets now available (Nautilus, Ergo Mobile, Terminus, Satergo). iOS support finally live, reducing friction for Apple users previously locked to Yoroi.

---

## Notable Issues & Resolutions

| Issue | Resolution |
|-------|-----------|
| Yoroi hanging/syncing | Migrate to Nautilus, Ergo Mobile, or Terminus |
| KuCoin withdrawal delays (Aug 31–Sept 2) | Likely wallet maintenance; resolved by Sept 2 |
| SigmaUSD refund failures | Send 0.01 ERG to proxy, retry refund |
| Explorer API rate-limiting | Affects wallet balance display; Cloudflare suspected |
| Spectrum DEX slow loading | Acknowledged; "turbo charge" requested (msg#304965) |