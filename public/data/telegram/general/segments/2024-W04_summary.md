---
title: "Ergo General Chat — 2024-W04"
date_start: "2024-01-22"
date_end: "2024-01-28"
type: telegram_weekly
channel: general
week: "2024-W04"
source: telegram
message_count: 0
categories: [technical, bridges, defi, governance, marketing, community, wallet, ecosystem]
key_terms: [Fleet, Sigma Rust, AppKit, ergpy, Python wrapper, Rosen Bridge, rsERG, rsADA, cross-chain, Watchers, RSN tokens, SigUSD, SigRSV, minting, reserve ratio, treasury, AgeUSD, Spectrum Finance, ERG/SPF pool, ERG/SigRSV]
---
# Ergo General Chat Summary — 2024-W04 (2024-01-22 to 2024-01-28)

## Key Topics Discussed

- **Developer tooling availability**: Fleet SDK, Sigma Rust, AppKit, and ErgoPy wrapper for Python confirmed as available; ErgoPy noted as unmaintained but functional, with a rewrite planned for next iteration.

- **kushti's transition from Ergo Foundation**: Core developer Alexander Chepurnoy stepping down from EF management to focus full-time on protocol development, teaching, and content (ChainCash, merged-mined sidechain presentations, contractual money theory). Still remains core to Ergo as a developer.

- **SigmaUSD / SigmaRSV mechanics**: Discussion of reserve ratios, treasury dynamics, and how SigRSV holders benefit from SigUSD minting demand and ERG price appreciation; impermanent loss and treasury depletion when redeeming SigUSD clarified.

- **Rosen Bridge liquidity and UX**: Limited liquidity pools identified (rsERG/ADA ~287k ADA TVL, rsRSN/ADA ~56k ADA TVL); slippage concerns noted for large swaps; bridge fees (~0.5%) and trustless asset movement discussed as advantages over centralized exchange swaps.

- **Spectrum Finance farming**: SPF pool ending February; moving to ERG/SigRSV farming discussed; higher yields observed in SigRSV pools vs SPF historically.

- **DuckPools lending platform**: Strong adoption signal (70k+ SigUSD locked pre-article, $5k more deposited post-Binance article); interest rate yields quantified at ~26% APY at current rates; perceived as legitimate open-source platform despite community doubts.

- **Ergo Explorer community redesign**: New sleek, user-friendly interface deployed by Aco (Satergo dev); community-built improvement replacing older version.

- **Twitter engagement poll (L1 bracket)**: Ergo vs Kadena finals; bot vote accusations on both sides; community mobilization effort with ~1.5k votes cast by Ergo community; final results disputed but Ergo declared winner.

- **Chainlink partnership potential**: Dan Friedman (Palmyra lead) discussing proof-of-reserve and IoT-sensor warehouse receipt issuance for decentralized trade financing; using Chainlink oracles but planning to build native Ergo Oracle Pool infrastructure.

- **Comet token**: Listed on CoinGecko during week; community sentiment positive.

- **Merged-mined sidechains**: kushti planning presentations on Ergo-specific sidechain constructions, trustless pegging, and improved sidechaining vs Bitcoin BIP 301; not yet published but expected post-Ergoversary.

## Important Decisions or Announcements

- [@kushti khushi, msg#470046, 2024-01-26]: Announced departure from Ergo Foundation to dedicate full time to protocol development and developer education. Confirmed continued core developer role and upcoming ChainCash and sidechain presentations.

- [@glasgowm, msg#469730, 2024-01-25]: Launched @Ergo_Chats directory for all Ergo ecosystem Telegram groups, Discord, Matrix, and communication platforms.

- [@glasgowm, msg#469737-738, 2024-01-25]: New dedicated yield strategy discussion channel @ErgoYield created.

- [@Me, msg#469868-870, 2024-01-26]: Published DuckPools SigUSD lending guide on Binance Feed for 50 USDT; resulted in $5k additional SigUSD lockup; negotiated lower rates (20-30 USDT) mentioned for future articles.

- [@Me, msg#469905-907, 2024-01-26]: Second Binance article published for 25 USDT on additional Ergo topic.

- [@Yulius Kristianto, msg#469821-822, 2024-01-25]: Comet Token listed on CoinGecko.

- [@Ergo NEWS, msg#469912, 2024-01-26]: Rosen Bridge liquidity pools and Watcher infrastructure detailed; expansion to Ethereum forthcoming.

- [@CW, msg#470827, 2024-01-28]: NIPoPoWs implementation video/guide mentioned in context of ongoing development.

## Technical Q&A Worth Preserving

- **Q** (@Bye H8er, msg#469511): How can one "mint" SigmaUSD?  
  **A** (@Unknown, msg#469546 et seq): SigmaUSD is minted by depositing ERG into the AgeUSD bank contract, which maintains a reserve ratio. Redemption removes both SigUSD and ERG from treasury proportionally.

- **Q** (@Bye H8er, msg#469513): Is SigmaUSD held in a mobile wallet like Minotaur?  
  **A** (Implicit): Yes; Minotaur and other Ergo wallets support SigmaUSD as a UTXO-based token.

- **Q** (@Bye H8er, msg#469521): How is SigmaRSV similar to HODLcoin and how is it different?  
  **A** (@Rj, msg#469524): HODLcoin forces holding; SigmaRSV does not. SigmaRSV can be sold without loss outside of price action. MM bot automatically trades SigRSV on Spectrum when price trends upward.

- **Q** (@Ivan Bezdomny, msg#469587 et seq): Recovering Yoroi wallet to Nautilus wallet fails with "Tag mismatch" error.  
  **A** (@Unknown, implied resolution): Encryption/decryption issue with Yoroi backup; assistance provided off-thread.

- **Q** (@Rj, msg#469773): Duckpools lending mechanism — is it legitimate or a scam?  
  **A** (@Rj, msg#469773): Open-source code; yields working as expected on-chain; personal experience borrowing and lending confirms functionality.

- **Q** (@Gareth, msg#470711): Does DuckPools generate lending rewards separately or as part of withdrawal amount?  
  **A** (@Me, msg#470719): Rewards compound into the withdrawal amount; rewards are not displayed separately in UI but included in total withdrawable.

- **Q** (@Phillip Scheindlinger, msg#470495): How many years before UTXO consolidation required due to storage rent?  
  **A** (@Rj, msg#470501): Approximately every 4 years; depends on transaction frequency. TokenJay app in Ergo Mobile Wallet shows exact timeline.

- **Q** (@Renshi, msg#470259 et seq): Rosen Bridge slippage for large swaps vs Spectrum Simple Swap vs CoinEx.  
  **A** (@qx(), msg#470237-257): Simple Swap ~4% slippage on 5k ERG test; Rosen removes slippage dependency on LP depth but has ~0.5% bridge fee; Spectrum slips significantly on large amounts; for swaps, Simple Swap preferable; for asset movement without slippage, Rosen Bridge preferable.

- **Q** (@qx(), msg#470214): Are Sigmanauts mining pool demurraging yet?  
  **A** (@qx(), msg#470215): Not yet.

## Links Shared

- [https://www.reddit.com/r/CryptoCurrency/s/bPLGKoNeih](https://www.reddit.com/r/CryptoCurrency/s/bPLGKoNeih): Reddit thread on L1 blockchains with no Ergo mention; sparked call for developer outreach.

- [https://x.com/ergo_platform/status/1749588505288749566](https://x.com/ergo_platform/status/1749588505288749566): Ergo Platform Twitter post (context not specified in chat).

- [https://m.youtube.com/watch?v=tnvm1we6xts](https://m.youtube.com/watch?v=tnvm1we6xts): Gluon Gold ecosystem video (Bruno Woltzenlogel Paleo related).

- [https://github.com/mgpai22/ergpy](https://github.com/mgpai22/ergpy): ErgoPy Python wrapper repository.

- [https://twitter.com/sigmanaut/status/1749693868537520339](https://twitter.com/sigmanaut/status/1749693868537520339): Sigmanauts Twitter post.

- [https://twitter.com/HouseofChimera/status/1749782481329418695](https://twitter.com/HouseofChimera/status/1749782481329418695): House of Chimera updated introduction thread on Ergo ecosystem.

- [https://youtu.be/n7fdzbkSK_E](https://youtu.be/n7fdzbkSK_E): Ergo Weekly Developer Update (SigmaUSD/SigmaRSV focus with Cafe Bedouin).

- [https://www.binance.com/en/feed/post/3215659823114](https://www.binance.com/en/feed/post/3215659823114): DuckPools SigmaUSD lending guide published on Binance Feed.

- [https://www.binance.com/en/feed/post/3030387098410](https://www.binance.com/en/feed/post/3030387098410): Earlier Binance Feed article example (50 USDT publishing cost noted).

- [https://www.binance.com/en/feed/post/3270228074449](https://www.binance.com/en/feed/post/3270228074449): Second Binance article (cost 25 USDT).

- [https://www.coingecko.com/en/coins/comet-token](https://www.coingecko.com/en/coins/comet-token): Comet Token CoinGecko listing.

- [https://www.ergoforum.org/t/core-developer-kushti-is-leaving-ergo-foundation/4648](https://www.ergoforum.org/t/core-developer-kushti-is-leaving-ergo-foundation/4648): kushti's Ergo Forum announcement of EF departure.

- [https://thesphynx.co/](https://thesphynx.co/): Sphinx project (mainnet integration proposal context, unclear exact project).

- [https://tokenjay.app/escrow.html](https://tokenjay.app/escrow.html): Token Jay escrow service for peer-to-peer swaps.

- [https://x.com/inputoutputhk/status/1751248946977194485](https://x.com/inputoutputhk/status/1751248946977194485): Input Output HK Twitter post (context not specified).

- [https://www.ergoforum.org/t/duckpools-sigusd/4647](https://www.ergoforum.org/t/duckpools-sigusd/4647): DuckPools SigmaUSD guide in Chinese on Ergo Forum.

- [https://m.youtube.com/watch?si=Fh1M5KszVfs05L49&t=583&v=UzuncaLxCU0&feature=youtu.be](https://m.youtube.com/watch?si=Fh1M5KszVfs05L49&t=583&v=UzuncaLxCU0&feature=youtu.be): Max Maher praising Ergo community (timestamp 583s).

- [https://twitter.com/norellyrain/status/1750585794274660700](https://twitter.com/norellyrain/status/1750585794274660700): Norelly Rain Twitter post.

- [https://twitter.com/norellyrain/status/1751661796660769006](https://twitter.com/norellyrain/status/1751661796660769006): Norelly Rain follow-up tweet.

- [https://x.com/ergo_platform/status/1751669819458327024](https://x.com/ergo_platform/status/1751669819458327024): Ergo Platform Twitter post (late week).

- [https://x.com/erg_armeanio/status/1751790663132217652](https://x.com/erg_armeanio/status/1751790663132217652): Armeanio proposal for contest type engagement.

- [https://twitter.com/BlackstarsMKTCR/status/1750701709444124965](https://twitter.com/BlackstarsMKTCR/status/1750701709444124965): L1 blockchain bracket poll (Ergo vs KDA finals).

- [https://twitter.com/BlackstarsMKTCR/status/1751083479612170567](https://twitter.com/BlackstarsMKTCR/status/1751083479612170567): Bracket poll update.

- [https://twitter.com/BlackstarsMKTCR/status/1751816444143149376](https://twitter.com/BlackstarsMKTCR/status/1751816444143149376): Ergo declared winner of semifinals.

- [https://twitter.com/BlackstarsMKTCR/status/1751822905116160098](https://twitter.com/BlackstarsMKTCR/status/1751822905116160098): Finals announcement (Ergo vs KDA).

- [https://twitter.com/BlackstarsMKTCR/status/1751823669922341053](https://twitter.com/BlackstarsMKTCR/status/1751823669922341053): Finals voting period begins.

- [https://ergexplorer.com/](https://ergexplorer.com/): Community-built Ergo Explorer with redesigned interface (Aco/Satergo).

- [https://twitter.com/sigmanaut/status/1751782182472052744](https://twitter.com/sigmanaut/status/1751782182472052744): Sigmanauts Twitter post on NIPoPoWs or related feature.

- [https://twitter.com/hodl_pepe/status/1751760492622647497](https://twitter.com/hodl_pepe/status/1751760492622647497): Community sentiment on poll integrity.

## Unresolved Questions

- **Merged-mined sidechain construction details**: kushti announced forthcoming presentations on Ergo-specific merged-mined sidechain constructions and trustless pegging mechanisms, but no publication date fixed; expected post-Ergoversary.

- **Ergo Oracle Pool v2 timeline**: Dan mentioned thinking of v2 and funding native Ergo Oracle infrastructure, but no concrete roadmap provided; depends on capital availability.

- **Rosen Bridge Ethereum expansion ETA**: Announced as "coming soon" but no specific date given (@Ergo NEWS, msg#469912).

- **Storage rent demurrage activation**: @qx() confirmed not yet active on Sigmanauts mining pool; no activation timeline provided.

- **Faster block/sidechain implementation path**: kushti indicated multiple approaches under discussion (microblocks, sidechains, layer 2 solutions) but noted need for concrete applications before optimization path chosen; no decision finalized.

- **Spectrum Finance SPF pool succession**: Confirmed moving to ERG-only farming in February, but specifics of future incentive structure not detailed.

- **HTX ERG withdrawal/deposit restoration**: @kushti confirmed deposits and withdrawals reopened as of msg#470045, but prior constraints not fully explained.

---

**Notes:**
- Significant community activity around DuckPools adoption and yield farming strategies.
- kushti's EF transition received strong positive sentiment; no concerns raised about protocol continuity.
- Twitter engagement poll served primarily as marketing/awareness driver; poll integrity questioned by both sides but treated as lower-priority than community mobilization.
- Chat experienced bot spam attack mid-week (msg#470317-470639 range); moderation handled by HQΣr and W || Mafia with tips distributed to new accounts.