---
title: "Ergo General Chat — 2023-W43"
date_start: "2023-10-23"
date_end: "2023-10-29"
type: telegram_weekly
channel: general
week: "2023-W43"
source: telegram
message_count: 822
categories: [bridges, technical, ecosystem, governance, defi, wallet]
key_terms: [RSN token, bridge launch, liquidity pools, IDO, Cardano integration, storage rent, demurrage, Gesell economics, circulation-secured money, monetary policy, Huobi withdrawal suspension, KYC restrictions, exchange access, US listings, liquidity sources, node release, protocol updates, network improvements, SigmaUSD, admin keys]
---
# Ergo General Chat — 2023-W43 Summary

## Key Topics Discussed

- **Rosen Bridge Launch**: RSN token launched with initial liquidity pair live on Spectrum DEX. Watchers and guards infrastructure being phased in over 1-2 weeks before full bridge activation. Initial liquidity for RSN/ERG created with significant community participation.

- **Storage Rent & Demurrage Theory**: Extended discussion on Silvio Gesell's demurrage economics and how Ergo's storage rent mechanism (4-year cycle, ~0.14 ERG fee) compares to Austrian economics vs. Freiwirtschaft principles. Debate on fixed 4-year demurrage speed vs. adjustability; consensus that speed is fixed but storage rent rate is adjustable within caps.

- **SigmaUSD Admin Key Risk**: Community raised concerns about centralized admin keys in SigmaUSD (held by Armeanio and others) and Rosen guards' full custody model, highlighting economic incentives for key holders to sell privileges as TVL grows. Discussion of protocol upgrade paths to burn keys or move to decentralized governance.

- **Scaling & Block Speed Research**: Kushti announced testnet availability for community-driven research into faster blocks, sub-blocks, and sidechains. No hard timeline; implementation depends on concrete application patterns and willingness of motivated community members to lead testing.

- **Palmyra (formerly ZenGate) & Chainlink Partnership**: Dan Friedman detailed on-chain warehouse receipts for decentralized trade financing using Chainlink oracles + Winter Protocol + IoT devices for continuous proof of reserve. Plan to build native Ergo oracles alongside Chainlink integration.

- **Market Maker Inquiry (Efficient Frontier)**: Ben from Efficient Frontier pitched Loan & Offer (L&O) market-making service to improve ERG liquidity across CEXes. Discussed fee structure, alignment incentives, and potential US exchange connections. Inquiry escalated to EF leadership.

- **Order Books vs. AMMs**: qx() comparison of Trade House (order book DEX) benefits over AMM-based Spectrum — total transparency of depth/liquidity, full slippage control, partial fills, peer-to-peer execution without impermanent loss.

- **Spectrum & dApp Immutability**: Clarified that Spectrum has no admin keys; value is locked in immutable smart contracts. Proxy contracts can be updated for fees, but users can always interact directly with underlying SCs or build alternative UIs. Same true for DuckPools, Sigmafi, ErgoPad/Paideia.

- **Exchange Access Issues**: Huobi suspended ERG withdrawals (storage rent broke their systems, now resolved). Community discussing non-KYC alternatives (Simpleswap, TradeOgre, CoinEx) and Rosen Bridge as future liquidity solution.

- **Node & Fee Market Spam Protection**: Reference client v4.0.44+ has mempool spam limits (won't download too many TXs from single peer). Fee estimation API exists but not tested/documented. qx() recommended increasing minimum propagation fee to block spammers; elevated transaction fees (0.002 ERG) suggested during network congestion.

## Important Decisions or Announcements

- [@Glasgow｜WON'T DM, msg#442090, 2023-10-24]: Auctions scheduled on auctioncoin.app with weekly batch releases.

- [@Armeanio, msg#442218, 2023-10-25]: Storage rent rate is adjustable but capped; demurage speed (every 4 years) is fixed. Miners can adjust supply-side transacting costs but must maintain network competitiveness.

- [@Armeanio, msg#442287-288, 2023-10-25]: Rosen initial pair live; 1-2 weeks needed to phase watchers/guards/system before bridge goes live. System does not have a switch (not Solana-style instant).

- [@kushti khushi, msg#442295, 2023-10-25]: Ergo Raffle auction ongoing with 3 days remaining.

- [@Glasgow｜WON'T DM, msg#442603-604, 2023-10-26]: Scala learning resources available at docs.ergoplatform.com; developers not restricted to Scala (unless contributing to reference client itself).

- [@Glasgow｜WON'T DM, msg#442718-719, 2023-10-26]: Paideia opening beta to everyone next week; multiple UI bugfixes and completed positions endpoint logic.

- [@Armeanio, msg#443619-620, 2023-10-28]: Committed to burning SigmaUSD admin keys; acknowledges collusion risks exist in all systems (mining pools, PoS validators, treasuries) and transparency is key.

- [@kushti khushi, msg#443551, 2023-10-28]: All auctions worth >2000 ERG sold. Interesting interaction between auctions and LP discovered. Next batch starts in 1 day.

## Technical Q&A Worth Preserving

- **Q** (@Buccoooo, msg#442714): Can USDT swapped on Spectrum Finance be sent to Kraken/Binance?
  **A** (@Glasgow｜WON'T DM, msg#442718): USDT on Ergo is a native token, not ERC-20. Cannot send to centralized exchanges directly; would need to bridge or use cross-chain swap services.

- **Q** (@Hassen | Launch imminent, msg#441965): What is storage rent?
  **A** (@Glasgow｜WON'T DM, msg#441966-969): Small fee (~0.14 ERG) levied on unspent UTXO after 4 years; also called "on-chain garbage collection" or demurrage. Prevents network bloat.

- **Q** (@Ian Lee, msg#441986): Why does Ledger show "pending ledger review" for ERG?
  **A** (@Glasgow｜WON'T DM, msg#441988): App not released from dev mode yet.

- **Q** (@TMR.ΣRG, msg#442077): Will scaling methods (sub-blocks, Lightning, sidechains, etc.) each be implemented to test, or only research?
  **A** (@Glasgow｜WON'T DM, msg#442081): Varied. Implemented as needed based on what works elsewhere. dApps and community devs may implement some; Kushti may propose others like weak blocks. Protocol will support them.

- **Q** (@Me, msg#442909): How does Bitcoin's demurrage soft fork compare to Ergo's?
  **A** (@dayumbbbb, msg#442030-037): Bitcoin soft fork would tax spenders; Ergo's opt-out demurrage is softer. Bitcoin considering it but less likely to implement than hard fork equivalent.

- **Q** (@Me, msg#442624): Does 5 ERG bridging fee on Rosen also go to watchers?
  **A** [Unresolved in chat; @Armeanio indicated fee structure under discussion]

- **Q** (@Me, msg#442628): How can Sigmanauts (a group) run one Rosen guard with significant collateral requirement?
  **A** [Unresolved; unclear if Sigmanauts treasury pooled collateral or received special status]

- **Q** (@Unknown, msg#443129): Is watcher requirement 1000 RSN or $1000 worth of RSN?
  **A** (@Glasgow｜WON'T DM, msg#443140, 443145): 1000 ERG + 1000 USD worth of RSN (each, not combined).

- **Q** (@Unknown, msg#443154): What happens if ERG/RSN price drops below $1000 while running a watcher?
  **A** (@Glasgow｜WON'T DM, msg#443156): Requirements will likely be set to specific amounts after price discovery period; unclear if dynamic adjustment planned.

- **Q** (@Buccoooo, msg#443009): What is difference between farming and liquidity provision on Spectrum, and what are the risks?
  **A**: Deferred to @Spectrum_labs_community Telegram.

- **Q** (@Saphuza, msg#443181-184): What is a "Space Pile" hodl box mechanic?
  **A** (@Saphuza, msg#443181-184): Users deposit ERGs to spaceship NFT; get ERGs back until certain price threshold. Spaceship tokens airdropped on exit. Locked tokens can be bought/piled for multiplied gains; small pile fee for site maintenance.

- **Q** (@Lyndon, msg#443549): How long after Rosen to add additional bridges?
  **A** (@CW, msg#443553-555): UTXO chains (BTC) fast; EVM soft estimate year-end but not guaranteed. Framework composable with Ergo-centric SCs; no per-chain SC deployment needed. Matter of configuring watchers/guards, testing, organizing liquidity.

- **Q** (@Mint LkV, msg#443558): Who would be guards/watchers for ETH or BTC chains?
  **A** (@Pulsarz, msg#443560-562): Same guards across chains. Watchers just need to monitor TXs on additional chain; very lightweight addition.

## Links Shared

- [https://ergoplatform.org/en/get-erg/#Exchanges]: Exchange listing page with KYC/non-KYC options
- [https://ergonaut.space/en/Community/exchanges]: Community comparisons of exchange access/limits
- [https://simpleswap.io/]: No-KYC swap service recommended for US users
- [https://auctioncoin.app/]: Auction Coin auction schedule
- [https://rosen.tech/]: Rosen Bridge main page with tokenomics & watcher/guard info
- [https://cruxfinance.io/tokens]: CruxFinance token price tracker (used for RSN/ERG charting)
- [https://sigmao.cc/]: SigmaOptions on-chain options trading (GORT call options example)
- [https://ergopad.io/projects/palmyra]: Palmyra IDO page on ErgoPad
- [https://docs.ergoplatform.com/mining/rent/]: Storage rent documentation
- [https://docs.ergoplatform.com/dev/lang/scala/]: Scala learning resources for Ergo development
- [https://github.com/ThierryM1212/ewc]: Ergo Wallet CLI open-sourced
- [https://ergoauctions.org/]: Ergo Auctions platform (for gold oracle token auction)
- [https://node.sigmaspace.io/]: Public node for Terminus users experiencing connection issues
- [https://ergopad.medium.com/palmyra-ido-details-on-ergopad-75d7405c9b6d]: Palmyra IDO details article
- [https://mises.org/library/free-money-miracle]: Historical article on 1930s Austrian demurrage (Stamp Scrip)
- [https://de.wikipedia.org/wiki/Freiwirtschaft]: German Wikipedia on Freiwirtschaft economic theory
- [https://x.com/ergo_platform/status/1717247655326167210]: Official Ergo support for Rosen launch
- [https://t.me/rosenbridge_erg]: Rosen Bridge Telegram group
- [https://defillama.com/chain/Ergo]: DefiLlama Ergo TVL tracker

## Unresolved Questions

- **Demurrage adjustability**: Is the 4-year cycle truly immutable or could it be adjusted via soft/hard fork? Armeanio clarified it's fixed, but no discussion of governance process for potential future changes.

- **SigmaUSD upgrade timeline**: Armeanio proposed burning keys but no ETA given. How long until "SigmaUSD V2" or alternative stablecoin emerges?

- **Block speed testnet leadership**: Kushti invited motivated community to lead 6.0 testnet but no specific coordinator assigned or timeline set.

- **Watcher collateral dynamics**: If price of ERG or RSN falls below $1000, do watchers get slashed/liquidated or is requirement time-adjusted? Glasgow indicated future clarification pending price discovery.

- **Rosen multi-chain timeline**: Soft estimate of year-end 2023 for EVM bridge explicitly disclaimed as "by no means hard." Bitcoin (UTXO) estimated faster but no concrete date.

- **US listing via Efficient Frontier**: Offer contingent on EF securing legal opinion that ERG is not a security. No timeline given; legal team involvement required.

- **Spectrum alternative UIs**: qx() referenced someone building a Spectrum UI without fee, but link/repo not provided. Decentralization verified but discoverability unclear.

- **Palmyra capital raise**: Dan mentioned "capital raised" for building Ergo oracles but did not disclose amount or current status.

- **Sigmanauts as Rosen guard**: How collateral requirement met for group entity remains unclear; may be treasurer-held or pooled, but not explicitly stated.

---

**Notes on Week Quality:**
Week 2023-W43 was high-activity with significant ecosystem developments (Rosen launch, Palmyra details, market maker inquiry, storage rent theory deep-dive). However, much discussion was price/trading speculation, off-topic tangents (festivals, music, personal anecdotes), and moderation conflicts. Substantial technical content preserved above; price action and social drama omitted per guidelines.