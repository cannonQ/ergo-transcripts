---
title: "Ergo General Chat — 2020-W53"
date_start: "2020-12-28"
date_end: "2021-01-03"
type: telegram_weekly
channel: general
week: "2020-W53"
source: telegram
message_count: 0
categories: [technical, defi, ecosystem, wallet, marketing, community, mining, governance, nft]
key_terms: [oracle pool, ADA/USD, price feed, underfunded, data sources, stablecoin, algorithmic, "1:1 backed", AgeUSD, protocol upgrade, Gate.io, Bittrex, FTX, listing fees, liquidity, KYC requirements, Yoroi, desktop extension, mobile version, ADA integration]
---
# Ergo General Chat — 2020-W53 Summary
**Period:** 2020-12-28 to 2021-01-03  
**Message Count:** 776  
**Participants:** 50+

---

## Key Topics Discussed

- **Oracle Pool Funding & Replacement**: Oracle Pool v1 is underfunded; a better replacement will launch before the stablecoin goes live. Current oracle price feeds (e.g., ADA/USD) show discrepancies across sources (CoinGecko, CryptoCompare, Ergo Oracles).

- **Stablecoin Launch**: AgeUSD (algorithmic stablecoin) will launch ~1 week after the hard fork on 2021-01-27. Charles Hoskinson mentioned he holds ERG; partnership with IOHK and Emurgo confirmed.

- **Hard Fork / Protocol Upgrade (2021-01-27)**: Scheduled at block #414,720. Enables better mining and supports stablecoin deployment. Pool resistance strategy changed to enable mining pools for broader participant access.

- **Mining Pool Support**: After Jan 27 hard fork, traditional mining pools will be available. This replaces pool resistance strategy to attract small miners who cannot run hardware independently.

- **Wallet Support**: Yoroi extension for desktop now supports ERG. Mobile Yoroi for ERG in development; Ledger and Trezor integrations being worked on.

- **ERGDex / Spectrum Integration**: DEX GUI targeted for Q1 2021. Integration into Yoroi wallet expected Q3 2021. Order-book model (vs. AMM) allows partial fills and full user control.

- **Exchange Listings**: Gate.io listing used voter rewards (ERG from EF) rather than explicit fees. FTX, MXC, HitBTC under consideration. No Binance or Coinbase listing confirmed. Kraken contact exists but "not very significant."

- **EFYT Token Swap**: Ergo Waves token (EFYT) must be swapped for ERG by 2021-07-01 at 1:1 ratio on Waves DEX.

- **NIPoPoWs & Zero-Knowledge Proofs**: Bulletproofs being integrated for zero-knowledge verification in ErgoScript. Enables range proofs, verifiable credentials, and hybrid on-chain/off-chain contracts without data disclosure.

- **Rosen Bridge**: Chainlink partnership for proof-of-reserve; on-chain warehouse receipts for decentralized trade financing. Non-exclusive with Ergo oracles; plan to build native Ergo oracle infrastructure.

- **Speed Improvements (TBD)**: Microblocks, sidechains, layer 2, and faster confirmations discussed but no consensus path chosen yet. Block time changes would impact timestamp-dependent contracts.

- **NFTs & Auctions**: ErgoAuctions.org live with growing activity. Song/audio NFT support TBD; requires standardization and ErgoUtils update.

---

## Important Decisions or Announcements

- [@kushti, msg#72231, 2020-12-28]: EFYT swap deadline July 1, 2021; ERG token is fine to hold.

- [@kushti, msg#72310, 2020-12-28]: "Things will change after protocol upgrade" (Jan 27).

- [@kushti, msg#72546-72547, 2020-12-29]: Current oracle pools will be replaced with better option before stablecoin launch.

- [@Richi, msg#72817, 2020-12-31]: Charles Hoskinson will attend Ergo Summit (Jan 23, 2021); expected to speak based on his prior ETC summit attendance.

- [@V, msg#72968, 2021-01-01]: Commemorative NFTs being released for Ergo Summit 21; holders advised to set up ErgoAuctions.org wallets.

- [@Dmitry, msg#73119, 2021-01-03]: Mining pools will be available after hard fork on Jan 27.

- [@kushti, msg#73128-73129, 2021-01-03]: Pool resistance strategy replaced after months of discussion; pools now standard approach.

---

## Technical Q&A Worth Preserving

- **Q** (@matiwinnetou, msg#72438-72443): ADA/USD oracle price on Ergo is $0.162 but market shows $0.178+. Why is Ergo Oracle so far from reality?  
  **A** (@Matgee, @Unknown): Oracle provides three sources; two are close to reality. Take average or use majority sources. Pool may be underfunded. [@kushti, msg#72545]: Pool is underfunded; will be replaced before stablecoin.

- **Q** (@Tri Origin, msg#72869-72870): What prevents double-spend in Ergo blockchain? Any security measures?  
  **A** (@kushti, msg#72876): "Ergo is classic proof of work blockchain" (relying on PoW consensus).

- **Q** (@Unknown, msg#72454): If I win an NFT auction on ErgoAuctions.org, can I resell it later? Can I prove rarity (e.g., "4/100")?  
  **A** (@kushti, msg#72552): "Surely you can resell later! No restrictions for those tokens."

- **Q** (@Unknown, msg#72972-72973): When will Yoroi mobile support ERG?  
  **A** (@chrom, msg#72664): "Believe it is being worked on for mobile. Ledger and Trezor is being worked on as well."

- **Q** (@CryptoTeller, msg#73120): Is pool resistance no longer the strategy?  
  **A** (@kushti, msg#73129): "Yeah, after many months of discussions" pool infrastructure now standard. [@CryptoTeller, msg#73139]: "Good move tbh. Pool infrastructure can slot right in and invites the small time miner."

- **Q** (@chrom, msg#72824): How to create music/song NFT on ErgoAuctions?  
  **A** (@kushti, msg#72884): "Anon real should do standard for NFTs, new code for songs and then support in ErgoUtils. Not so much work though."

- **Q** (@Unknown, msg#72996): Is stablecoin 1:1 backed or algorithmic? I heard first one is 1:1, then algorithmic later?  
  **A** (@Richi, msg#72997): "He won't tell the answer until the ES" (Ergo Summit). [@Unknown, msg#73002]: "Its algo. Talked about it earlier." (Conflicting intel; Charles mentioned both scenarios historically.)

---

## Links Shared

- [ergosummit.org](https://ergosummit.org/): Jan 23, 2021, 2pm UTC / 9am EST.
- [ergoauctions.org](https://ergoauctions.org/): NFT auction platform live with growing activity.
- [ergoutils.org/#/airdrop](https://ergoutils.org/#/airdrop): Airdrop tool for token distribution.
- [explorer.ergoplatform.com](https://explorer.ergoplatform.com/): Ergo Explorer; oracle pool state viewable.
- [ergoplatform.org/en/exchanges/](https://ergoplatform.org/en/exchanges/): Current exchange listings (HotBit, Gate.io, etc.).
- [ergoplatform.org/en/blog/2020_04_04_building_ergo_oracles/](https://ergoplatform.org/en/blog/2020_04_04_building_ergo_oracles/): Oracle fundamentals.
- [waves.exchange](https://waves.exchange/): EFYT/ERG swap available here (1:1).
- [ergoforum.org/t/ergo-platform-ecosystem-digest-december-2020/531](https://www.ergoforum.org/t/ergo-platform-ecosystem-digest-december-2020/531): Monthly ecosystem digest.
- [bitcoinmagazine.com/articles/snicker-how-alice-and-bob-can-mix-bitcoin-with-no-interaction](https://bitcoinmagazine.com/articles/snicker-how-alice-and-bob-can-mix-bitcoin-with-no-interaction): Non-interactive mixing reference (cited by kushti).

---

## Unresolved Questions

- **Stablecoin Design**: Is AgeUSD 1:1 backed or algorithmic? Charles mentioned both scenarios; final decision TBD until summit.
- **Speed Improvements Path**: Microblocks, sidechains, layer 2, faster block time all proposed but no consensus decision made. Block time changes have complex implications for timestamp-dependent contracts.
- **Binance Listing**: High demand but no ETA. Kushti noted Binance requires large leverage and market conditions align poorly.
- **Coinbase / Kraken Listing**: Possible but not confirmed. Kraken contact exists but "not very significant."
- **Music NFT Standard**: Standard for song/audio NFTs on ErgoAuctions not yet finalized; flagged as needing work by kushti.
- **Ergo Oracle Infrastructure**: Plan to build native Ergo oracle pools exists but timeline and funding (post-Palmyra raise) TBD.
- **Storage Rent Implementation**: Mentioned in passing but no detailed discussion of deployment timeline.

---

## Community Sentiment & Context

- **Charles Hoskinson Endorsement**: Multiple messages note Charles holds ERG and spoke highly of kushti ("one of the smartest people he has ever met"). This significantly raised community confidence mid-week.
- **Mining Pool Pivot**: Removal of pool resistance was contentious but framed as inclusive for small miners; Cardano SPO interest emerging.
- **Wallet Adoption**: Yoroi integration accelerating; mobile still in development. Many new users joining after Charles mention.
- **New Year Energy**: Strong community activity spike around 2021-01-01. Ergo Summit (Jan 23) treated as major catalyst event.
- **Exchange Friction**: HitBTC reputation poor; Gate.io seen as good pragmatic choice; FTX viewed as fast-moving but costly.