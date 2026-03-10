---
title: "Ergo General Chat — 2023-W39"
date_start: "2023-09-25"
date_end: "2023-10-01"
type: telegram_weekly
channel: general
week: "2023-W39"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2023-W39 Summary

## Key Topics Discussed

- **NonKyc Exchange Listing & LP Setup**: Ergo listed on NonKyc.io with ERG/BTC, ERG/USDT, and ERG/XMR pairs live. Community members seeding liquidity; discussion around optimal pool sizes and initial price discovery (~$1 per ERG initially).

- **Oracle Pool v2 Launch**: Mainnet Oracle Pool for Dexy Gold (XAU/ERG) went live. Next milestones: GORT LP launch, buyback contract testing, testnet UI, then mainnet deployment. SigmaOptions allows 10 ERG call options on GORT tokens (strike 50 ERG, expires Oct 14).

- **Dexy Protocol Mechanics**: Dexy buyback contract will purchase Gold Oracle Reward Tokens (GORT) from LP pools using Dexy fee revenue, creating positive feedback loop between protocol fees and oracle operator incentives.

- **Block Speed & Scaling Proposals**: kushti discussing weak blocks (sub-blocks) for faster confirmations (20 sec target) as layer 1 optimization. Community debating naming: soft blocks, light blocks, flash blocks, candidate blocks, turbo blocks proposed. Relevant for Lilium POS and vending machine use cases.

- **Storage Rent & Wallet Optimization**: Discussion of minimum box sizes (360 nanoERG/byte, ~1,474.56 nanoERG minimum per 4KB box). Nautilus wallet optimization feature consolidates UTXOs and restarts demurrage clock.

- **Rosen Bridge Architecture**: Both Ergo and destination chain need watchers/guards. All smart contract logic on Ergo side; destination chain side uses multisig + oracle data feeds (e.g., weight/motion/camera sensors for trade finance via Chainlink integration).

- **SigmaUSD Liquidity Crunch**: Reserve ratio too low to mint new SigmaUSD; existing circulating supply insufficient for Spectrum pools. Dexy Gold positioning as alternative. Discussion around whether listings without adequate liquidity are useful.

- **Solana Block Production Outage**: Solana validator downtime incident. Community discussion of Ergo's advantages: flat P2P network, commodity hardware support, NIPoPoWs for light clients, merkle tree pruning enabling 100MB full historical verification vs. Solana's 100TB+ ledger.

- **Node Setup & Incentivization**: New node operators welcomed. Port 9030 for P2P, 9053 for mobile wallet. Discussion about incentivizing node runners for network resilience (proof of personhood DIDs, native token rewards proposed but unresolved).

- **ErgoHack VII Fundraising**: Raffle launched to fund additional prizes: TrustWallet WalletCore support, Blockly-based ErgoScript visual editor, Language Server Protocol, Metamask Snaps integration. 24.3% funded after one day.

- **Ergo Raffle Platform**: Community using Ergo Raffle for fundraising (youth soccer team kits, ErgoHack prizes). BBCode formatting issues noted; raffle creator tool needs UX update.

- **CoinGecko Listing Progress**: TabbyPOS (EPOS) achieved full CoinGecko listing (not just Token Preview). Ergo projects (ErgoPad, Spectrum) still on CMC but not CoinGecko tracked. Discussion about ecosystem section on tracker sites.

## Important Decisions or Announcements

- [@kushti, msg#434098, 2023-09-26]: Next Dexy milestones confirmed: (1) GORT LP launch, (2) buyback contract deployment & testing, (3) testnet UI testing, (4) mainnet launch. Items 1-2 and 3 can run in parallel.

- [@kushti, msg#434104, 2023-09-26]: GORT auction tokens launching in coming days; European call options on GORT live on SigmaOptions (10 ERG cost, 50 ERG strike, Oct 14 expiry). Auction ERGs bootstrap GORT/ERG LP.

- [@kushti, msg#434139-434140, 2023-09-29]: ErgoHack raffle 24.3% funded after 1 day (8-day window). Raffle: https://ergoraffle.com/raffle/show/b0af5ddb58f2a7d96049d4278d53b56773624e0c46e0742972ae8ecc77af3e91

- [@Unknown, msg#434052, 2023-09-26]: Mainnet oracle pool launched; deployed to explorer frontend same day.

- [@Unknown, msg#434076, 2023-09-26]: PolYx exchange listing fee reported as 10k (later clarified as Polyxchange, https://polyx.exchange).

- [@Dmitry Usov, msg#434083, 2023-09-26]: Oracle pool name updated from DEXYERG to XAU/ERG on explorer.

- [@HQΣr, msg#434292-434294, 2023-09-27]: TabbyPOS (EPOS) achieved full CoinGecko listing after paying $199 fee; first Ergo project with comprehensive CoinGecko data. ErgoPad/Spectrum Finance have not achieved full tracked status.

- [@Nautilus Team, msg#434322, 2023-09-27]: Nautilus wallet updated to v0.9.0 (live on Chrome store).

- [@Unknown, msg#434290, 2023-09-30]: Hoskytoken (Cardano) community concern: Ergo mentioned negatively in comparison thread (vxtwitter link shared for community awareness).

- [@qx(), msg#435365-435369, 2023-09-30]: Ergo meetup at Cardano Summit (Berlin assumed): Dan Friedman & Armeanio gave well-received talks on Palmyra/Rosen; stickers highly popular; Ergo Mobile Wallet praised vs. Eternl; prize wheel requiring wallet download generating interest.

- [@qx(), msg#435382-435384, 2023-10-01]: Auction House announced feature additions (exact features in vxtwitter links; community enthusiasm noted).

- [@kushti, msg#435392, 2023-10-01]: Planning to create auctions for oracle tokens (GORT/similar).

## Technical Q&A Worth Preserving

- **Q** (@qx, msg#433706): Is maximum box size 4096 bytes, so 0.00000147456 ERG minimum per box?
  **A** (@Glasgow, msg#433705): Max box size is 4096 bytes, max transaction size is 96 KB. Minimum calculation correct based on 360 nanoERG/byte.

- **Q** (@qx, msg#433710): What do Lilium and Spectrum send as minimum box amounts?
  **A** (@Flying Pig, msg#433714): Lilium sends 0.001 ERG, Spectrum sends 0.0002 ERG. Exact minimum is ~0.00003996 ERG (per box spec).

- **Q** (@blake starky, msg#433800): How to make an Ergo node public?
  **A** (@qx, msg#433801-433813): Open port 9030 (P2P) and 9053 (mobile wallet). Add `scorex.network.nodeName = "NAME"` to config, restart. Node appears on ergonodes.net/list within a day.

- **Q** (@United4life, msg#433903): How to prevent storage rent/demurrage charges?
  **A** (@qx, msg#433908-433911): Use Nautilus "wallet optimization" (four-box menu on far right). Sends all assets to themselves in new box, resetting demurrage clock.

- **Q** (@Gnawa Pirate, msg#434659-434680): Why does DEX pricing differ from CEX pricing? How is arbitrage done?
  **A** (@qx, msg#434667): Price balances via arbitrage. Send ERGs to DEX, sell, rebuy when drops. Spectrum prices driven by AMM slippage and CEX market; no direct correlation enforced.

- **Q** (@Giufa, msg#434600-434615): Mobile wallet throws "Malformed transaction: Every input of the transaction should be in UTXO" error on Spectrum swap.
  **A** (@HQΣr & @Gazza, msg#434603-634606): Node may be out of sync. Try consolidating UTXOs or changing node in settings. Issue resolved by switching nodes.

- **Q** (@kushti, msg#435025): Can contracts be attached to tokens on Ergo?
  **A** (@kushti, msg#435025-435027): No. Only opposite way works: tokens can be locked in a box with some contract. Contracts cannot be attached to tokens themselves.

- **Q** (@CW & discussants, msg#435162-435180): How much does Ergo blockchain data compress with pruning?
  **A** (@CW, msg#435165): NIPoPoWs + UTXO snapshot enables ~100 MB for full security assumptions of past history. Ergo can store entire ledger for few dollars of storage vs. Solana's ~100TB+ yearly growth rate.

- **Q** (@Me, msg#435171): With 20-second confirmations, can recipient spend funds in 20 seconds?
  **A** (@CW, msg#435173): In theory yes at the moment. Finality differs from confirmation; finality requires sufficient PoW work where reversal becomes implausible (msg#435177).

- **Q** (@Luivatra, msg#435613): How can Ergo oracles be used cross-chain on Cardano?
  **A** (@Luivatra, msg#435613): Data stored on-chain as inputs, spendable by any contract (no subscription model possible). Cross-chain requires Rosen-like setup: multi-sig storage of oracle data on Cardano, with oracle pool operations on Ergo (low fees). Operator incentive is unresolved challenge.

## Links Shared

- [https://nonkyc.io/asset/ERG](https://nonkyc.io/asset/ERG): NonKyc.io ERG listing (imminent in early week, live by mid-week).
- [https://nonkyc.io/market/ERG_BTC](https://nonkyc.io/market/ERG_BTC), [ERG_USDT](https://nonkyc.io/market/ERG_USDT), [ERG_XMR](https://nonkyc.io/market/ERG_XMR): Trading pairs.
- [https://ergoraffle.com/raffle/show/b0af5ddb58f2a7d96049d4278d53b56773624e0c46e0742972ae8ecc77af3e91](https://ergoraffle.com/raffle/show/b0af5ddb58f2a7d96049d4278d53b56773624e0c46e0742972ae8ecc77af3e91): ErgoHack VII prize raffle.
- [https://explorer.ergoplatform.com/en/oracle-pool-state/xauerg](https://explorer.ergoplatform.com/en/oracle-pool-state/xauerg): XAU/ERG oracle pool state (Dexy Gold oracle).
- [https://sigmao.cc](https://sigmao.cc): SigmaOptions platform (GORT call options).
- [https://ergoplatform.org/en/get-erg/#Exchanges](https://ergoplatform.org/en/get-erg/#Exchanges): Official exchange list.
- [https://ergonaut.space/en/Community/exchanges](https://ergonaut.space/en/Community/exchanges): Community-maintained exchange list.
- [https://ergonodes.net/list](https://ergonodes.net/list): Ergo node network list.
- [https://github.com/reqlez/ergo-easy-oracle](https://github.com/reqlez/ergo-easy-oracle): Oracle operator setup guide.
- [https://docs.ergoplatform.com/mining/governance/#current-network-settings](https://docs.ergoplatform.com/mining/governance/#current-network-settings): Network governance parameters.
- [https://twitter.com/ndaxio/status/1707085661055177094](https://twitter.com/ndaxio/status/1707085661055177094): NDAX listing poll (community asked to vote for Ergo).
- [https://x.com/stevemalexander/status/1706741783361679455](https://x.com/stevemalexander/status/1706741783361679455): Mining pool centralization concern (2miners dominance).
- [https://x.com/Dexy_Ergo/status/1706733795377136037](https://x.com/Dexy_Ergo/status/1706733795377136037): Dexy protocol announcement.
- [https://github.com/rustinmyeye/ErgoNodeAndroid](https://github.com/rustinmyeye/ErgoNodeAndroid): Ergo node on Android (Termux).
- [https://github.com/rustinmyeye/phonenodescriptsnshit](https://github.com/rustinmyeye/phonenodescriptsnshit): Phone node install script (one-command full node).
- [https://x.com/PaideiaDAO/status/1707461898432835772](https://x.com/PaideiaDAO/status/1707461898432835772): Paideia Developer Update (beta testing underway, kushti reviewing).
- [https://x.com/CruxFinance/status/1706534244510798282](https://x.com/CruxFinance/status/1706534244510798282): CruxFinance notifications & alerts feature.
- [https://x.com/SigmaOptions/status/1706756512444825751](https://x.com/SigmaOptions/status/1706756512444825751): SigmaOptions GORT calls announcement.
- [https://x.com/auction_house_/status/1708356832501326056](https://x.com/auction_house_/status/1708356832501326056): Auction House feature additions.
- [https://x.com/THz__fm/status/1707230678176440681](https://x.com/THz__fm/status/1707230678176440681): Terahertz (THZ) music distribution protocol.

## Unresolved Questions

- **Weak blocks naming**: Community debating terminology for sub-blocks / faster confirmations. Proposals included: soft blocks, light blocks, flash blocks, candidate blocks, turbo blocks, easy blocks. No consensus reached by week end.

- **Node incentivization structure**: Discussion of whether nodes should be incentivized (proof of personhood DIDs, native token rewards) unresolved. @Glasgow questioned "Money from where?" — no funding mechanism proposed.

- **SigmaUSD reserve recovery**: Reserve ratio too low to mint; existing supply insufficient for exchange liquidity. Dexy Gold positioned as alternative, but no concrete plan to restore SigmaUSD to utility.

- **Cardano oracle cross-chain incentives**: How to fairly incentivize oracle operators for Cardano integrations without subscription model (data inputs public-readable). Unresolved structural challenge per @Luivatra.

- **Mining pool decentralization**: 2miners dominance flagged as concern (msg#434108-434117). Proposed mitigations (exclude pool via ErgoScript, educate miners, incentivize other pools) lack concrete follow-up. Consensus: PoW permissionless, no ban possible.

- **Block time optimization bounds**: No consensus on optimal block time trade-off between speed, storage, security, decentralization. @Me questioned fastest safe block time; @CW noted it's always a compromise.

- **Metascan/Metamask integration timeline**: Raffle offering bounty for Metamask Snaps integration but no delivery timeline given.