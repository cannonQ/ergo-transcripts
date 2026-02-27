# Ergo General Chat — 2020-W19 Summary
**Period:** 2020-05-04 to 2020-05-10 | **Messages:** 285 | **Participants:** 23

---

## Key Topics Discussed

- **Atomars Exchange Voting Campaign**: Community mobilized to vote for Ergo listing on Atomars exchange. Multiple voting rounds possible per day. Ergo reached 3rd place in voting by mid-week. Outcome uncertain but potential for favorable listing conditions even without winning.

- **General Community Meeting Scheduled**: @kushti announced May 13th, 13:00 UTC community chat over Discord with ecosystem updates and quick AMA format. Marketing team preparing announcements regarding partnerships and exchange integrations.

- **Mixer Vulnerability Fix**: anon92048 publishing updated mixing web application with critical vulnerability fix previously reported by Jason Davies. Application will support both ERG and token mixing.

- **DEX Development Progress**: greenhat finalizing contracts; Ilya Oskin started matcher service. Exchange contracts and swap order tracking now visible in explorer.

- **MuSig Implementation on Mainnet**: Jason Davies completed first MuSig (aggregated multisignature scheme) on Ergo mainnet. Enables cross-chain private swaps appearing as ordinary transfers on-chain. Combined with token support and upcoming token mixing, Ergo could serve as privacy-friendly DEX for BTC ↔ USD pairs post-Schnorr support in Bitcoin.

- **Explorer Improvements**: New backend and frontend deployed. Interface now shows issued tokens and swap orders. Transaction output order and block transaction order preserved.

- **ErgoTree Reference Implementation**: greenhat working on reference ErgoTree interpreter in Rust; specification work underway.

- **AppKit Development**: morphic improving Ergo AppKit and working on JIT costing optimizations.

- **Wallet Options and Storage Security**: Discussion of Magnum Wallet, CoinBarn, fullnode encrypted keystore, and Ledger support (in progress). Institutional investors prefer hardware or offline solutions; fullnode support already audit-confirmed.

- **Throughput and Scalability Discussion**: Ergo supports flexible block size and computational cost limits. Miners already increased throughput ~50% since mainnet launch without protocol changes. Layer 2 solutions (Lightning Network, Rainbow Network, FastSwap, state channels) researched but not prioritized until blockchain load increases.

- **National/Regional Community Groups**: Established groups for Indonesia, Vietnam, India/Bangladesh, China, Russia, and Persia; separate mining group created.

---

## Important Decisions or Announcements

- [@kushti, msg#26917, 2020-05-05]: General developers meeting scheduled May 6th, 13:00 UTC over Discord development channel.

- [@kushti, msg#26927, 2020-05-05]: General community chat with updates scheduled for May 13th, 13:00 UTC.

- [@kushti, msg#27059, 2020-05-07]: **Development Digest** — anon92048 publishing mixer vulnerability fix; greenhat finalizing DEX contracts; Ilya Oskin started matcher service; explorer now showing tokens and swap orders; core 3.2.3 releasing Friday, 3.3.0 mostly complete; morphic optimizing AppKit and JIT costing; Jason Davies published first MuSig on mainnet; Dev Fund paying bounties to Jason Davies, gtklocker, knizhnik for 3.2.3 contributions.

- [@kushti, msg#27064-27065, 2020-05-07]: New regional community group established for Vietnam (@ErgoPlatform_Vietnam). Consolidated list of auxiliary groups published.

- [@kushti, msg#27298, 2020-05-10]: Ledger wallet support in development under DevFund grant; implementation to follow mining pool delivery.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown): What wallet should be used for secure ERG storage, particularly for institutional investors?  
  **A** (@kushti, msg#26997-27022): Magnum and CoinBarn store keys locally. Magnum offers downloadable backup; CoinBarn requires written mnemonic. Fullnode's encrypted keystore provides highest security for offline/airgapped storage. Fullnode wallet passed security audit (https://ergoplatform.org/en/blog/2020_01_12_security_audit/). European fund practices referenced: pre-2006 computers for transactions only (Intel backdoor concerns) + paper backups in safe.

- **Q** (@Buccoooo): Which is safer between Magnum/CoinBarn wallets and fullnode?  
  **A** (@kushti, msg#26997): If tech-comfortable, use fullnode for highest security.

- **Q** (@Unknown): Where can ERG be purchased given low liquidity?  
  **A** (@kushti, msg#26965-26973): Tidex and HotBit have no-KYC trading at ~2K sats. OTC desks have 400K ERG available at +5% premium. Integration with CMC top-20 liquidity exchange nearing completion (to be announced May 13th).

- **Q** (@Bullish Teddy 🧸): How many transactions per second can Ergo handle?  
  **A** (@kushti, msg#27294): Ergo is flexible—miners can increase throughput by raising block size limit or cumulative computational cost limit. Throughput already increased ~50% since mainnet launch.

- **Q** (@Rich): Will second-layer scaling solutions be implemented for instant finality in dApps?  
  **A** (@kushti, msg#27267): Yes, when needed. Ergo can support Lightning Network, Rainbow Network, FastSwap, and potentially state channels. Currently no urgency given low blockchain load; prioritizing basic DeFi on-chain applications first.

- **Q** (@Rich): Are 2-minute blocktimes considered long?  
  **A** (@kushti, msg#27268): No. Ergo targets 2 minutes average blocktime.

- **Q** (@Unknown): Could Ergo be made "Tether printing resilient"?  
  **A** (@kushti): No response recorded; question implies stablecoin resilience inquiry.

---

## Links Shared

- [https://atomars.com/currency-voting](https://atomars.com/currency-voting): Voting interface for Ergo exchange listing; voting possible multiple times daily.

- [https://discord.gg/kj7s7nb](https://discord.gg/kj7s7nb): Ergo Discord invite for general meeting.

- [https://www.coingecko.com/en/coins/ergo](https://www.coingecko.com/en/coins/ergo): CoinGecko ERG listing and exchange aggregator.

- [https://coinmarketcap.com/rankings/exchanges/liquidity/](https://coinmarketcap.com/rankings/exchanges/liquidity/): CMC exchange liquidity rankings (context: integration with top-20 liquidity exchange in progress).

- [https://coinmarketcap.com/coins/views/filter-non-mineable/](https://coinmarketcap.com/coins/views/filter-non-mineable/): Mineable-only coin filter (referenced to show Ergo's market position relative to sh*tcoins).

- [https://blog.plutomonkey.com/2020/04/ergomix-vulnerability/](https://blog.plutomonkey.com/2020/04/ergomix-vulnerability/): Public description of mixer vulnerability reported by Jason Davies.

- [https://www.ergoforum.org/t/tethering-a-token-to-usd-using-the-rate-oracle/118/9](https://www.ergoforum.org/t/tethering-a-token-to-usd-using-the-rate-oracle/118/9): Forum discussion on one-way convertible USD token (mainnet DeFi experiment).

- [https://ergoplatform.org/en/blog/2020_02_02/](https://ergoplatform.org/en/blog/2020_02_02/): Ergo Foundation minimum development plan.

- [https://ergoplatform.org/en/blog/2020_01_12_security_audit/](https://ergoplatform.org/en/blog/2020_01_12_security_audit/): Fullnode wallet security audit.

- [https://twitter.com/chepurnoy/status/1259584724487622660](https://twitter.com/chepurnoy/status/1259584724487622660): Tweet on throughput increase since mainnet launch.

- [https://eprint.iacr.org/2019/1296.pdf](https://eprint.iacr.org/2019/1296.pdf): State channels research paper referenced for future L2 development.

---

## Unresolved Questions

- **Institutional fund listing criteria**: Investor fund stated Ergo had "middle potential" with "low partnerships" and "low liquidity," making investment difficult despite technical merit. Condition placed on future exchange listings, partnership announcements, and volume growth. Waiting on May 13th updates to reassess.

- **Magnum Wallet stability**: @kushti advised backing up mnemonic/backup files after Magnum leadership departure announcement (msg#27269), but stated platform "probably still okay." Uncertainty around wallet future maintained.

- **Large transaction throughput**: Ergo's flexibility in block parameters leaves exact TPS ceiling undefined; depends on miner consensus and application demands.

- **Schnorr signature Bitcoin integration timeline**: MuSig PoC complete, but full cross-chain BTC ↔ USD private swap functionality contingent on Schnorr support landing in Bitcoin (no ETA given).

- **Marketing visibility**: Community noted Ergo has "nothing going for it marketing wise" (@Bullish Teddy 🧸, msg#27136) despite strong technical foundation. Marketing team activity ramping but concrete visibility improvements not yet detailed.