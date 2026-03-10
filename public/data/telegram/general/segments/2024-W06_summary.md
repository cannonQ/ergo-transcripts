---
title: "Ergo General Chat — 2024-W06"
date_start: "2024-02-05"
date_end: "2024-02-11"
type: telegram_weekly
channel: general
week: "2024-W06"
source: telegram
message_count: 0
categories: [bridges, technical, ecosystem, marketing, wallet, governance, defi, nft]
key_terms: [Rosen Bridge, wrapped tokens, multisig, decentralized, Bitcoin, oracle pool, full node, index, GORTS rewards, Gold oracle, dApp development, mass adoption, disruptive applications, user experience, hackathon ideas, LETS, local currency, mutual credit, community exchange, accessible UI]
---
# Ergo General Chat — 2024-W06 Summary

## Key Topics Discussed

- **Rosen Bridge wrapped token security & decentralization**: Discussion of whether wrapped tokens bridged via Rosen Bridge maintain security and decentralization compared to traditional CEX custody, with focus on multisig wallet security on Bitcoin side.

- **Oracle Pool v2 and Dexy Gold integration**: Testnet Dexy UI access opened to Gold Cooperative; Gold Oracle Pool tokens distributed to participants; GORT rewards structure confirmed for Dexy Gold operations.

- **Market Maker (MM) selection process**: Community review of 5 MM proposals with different fee structures (flat monthly vs. percentage cuts, call options, T1 exchange access). Discussion of expected value analysis and MM necessity through 2026.

- **Xeggex listing fundraising**: Integration fee ($2,500) collected within 24 hours; raffle created and >50% of 2,200 ERG goal met by 2024-02-08.

- **Storage rent and emission reduction timeline**: Approaching Monero-style tail emission effect with 10% reduction in 2 months, further reductions (12%, 12.5%, 15%) following, with final halving ahead.

- **CEX liquidity and alternatives**: BitMart liquidity issues; discussion of arbitrage opportunities via Spectrum DEX; rsERG TVL growth on Cardano via Rosen Bridge.

- **Wrapped token acquisition paths**: Comparison of direct ERG purchases vs. ADA → rsERG → ERG bridge routes; simpleswap now less competitive than Spectrum for conversions.

- **dApp ecosystem discussion**: Questions on which projects to focus development efforts; LETS (local exchange trading system) potential for non-crypto mass adoption; discussion of "disruptive" dApps targeting non-blockchain-native users.

## Important Decisions or Announcements

- [@kushti khushi, msg#472987, 2024-02-07]: Xeggex listing fundraising started with 2,200 ERG goal.

- [@kushti khushi, msg#473018, 2024-02-07]: Proxy address refund method available for Xeggex raffle via ergoraffle.com/refund.

- [@kushti khushi, msg#473498, 2024-02-09]: Xeggex integration fee paid; listing process moves forward.

- [@kushti khushi, msg#473546, 2024-02-09]: Testnet Dexy UI access opened to Gold Cooperative; public access expected within days pending smooth testing.

- [@kushti khushi, msg#473450, 2024-02-09]: Meme contest announced with 1M comet prize for best meme on Monero emission effect; deadline 2024-02-16.

- [@chrom, msg#473580, 2024-02-09]: Ergo v5.0.20 released on GitHub.

- [@Mint LkV, msg#473740-742, 2024-02-11]: MEXC response received requiring official project team application via formal channels; price same for all projects.

- [@qx(), msg#473796, 2024-02-11]: Zoom chat held to discuss MM report with community; proposal creation to follow.

## Technical Q&A Worth Preserving

- **Q** (@Shiv Chauhan): Can Ergo be used as an oracle for other blockchains like Chainlink?  
  **A** (@HQΣr): Rosen Bridge enables this through wrapped tokens; decentralization approach is different but potentially more secure than traditional CEX bridges. Native Ergo oracles exist but building out tooling and ecosystem support is ongoing.

- **Q** (@Rj): Does bridging ERG to Cardano via Rosen decrease Ergo's TVL?  
  **A** (@Rj): Ergo is locked on mainchain; to retrieve it you must send wrapped token back from Cardano to Ergo chain, at which point lock is released.

- **Q** (@Misfit Toy): What node configuration is required to run Dexy Gold oracle and collect GORT rewards?  
  **A** (@qx() / @MGpai): Full node required; index parameter not strictly needed for oracle operation but wallet scan can be optimized via configuration.

- **Q** (@Misfit Toy): Is Gold oracle pool currently operational with hourly reward distribution?  
  **A** (@qx()): Initial 16 of 32 tokens distributed to testnet/early mainnet participants; first token sold; more being brought on.

- **Q** (@qx()): Can partial order fills be implemented on Trade House?  
  **A** (@qx()): Yes; when order partially filled, leftover created as new box with same parameters; supports peer-to-peer trading with granular control.

- **Q** (@vidicmu): What is the lowest-fee path to acquire ERG from ADA?  
  **A** (@Unknown): ADA → rsERG → ERG currently best; rsADA path has poor liquidity. Small orders (~1k rsADA) still cheaper than simpleswap; for 10k ADA swap, Spectrum + bridge fees now more profitable than simpleswap by ~300 ERG.

- **Q** (@Jack Σ): Can Ethereum or Bitcoin be pressured to delist Ergo bridges due to compliance concerns?  
  **A** (@lexymon): Ethereum and Ergo are platforms, not entities; different actors participate. Ergo is not controversial (Ethereum itself has mixers). Bridge participation is peer-to-peer, not platform-level decision.

- **Q** (@Rj): What fee structure for MM is preferable—flat monthly or percentage cut?  
  **A** (@Glasgow): Option 2 (flat known cost) allows fixed budgeting; percentage cuts risky if price drops. MM likely needed through 2026 until lowest block reward achieved.

## Links Shared

- [https://ergoraffle.com/raffle/show/59bc47ca841dc35c935e198812ccb075032589db562f5bd5f6b54a81a90da901]: Xeggex listing fundraising raffle.

- [https://www.ergoforum.org/t/usd-only-crypto-wallet/949]: Discussion of USD-only wallet concept with stablecoin focus on Ergo Forum.

- [https://www.ergoforum.org/t/bootstrapping-of-gold-oracle-pool-and-dexy/4660]: Dexy Gold bootstrapping progress and Oracle Pool coverage.

- [https://docs.ergoplatform.com/uses/lets/]: LETS (local exchange trading system) documentation and use cases.

- [https://docs.ergoplatform.com/events/ergohack/]: ErgoHack event history and unfinished project ideas.

- [https://docs.google.com/spreadsheets/d/1n4Y3FH3RdwLrkqMIHAHTB25czmYiY7CYEeTTvHslQhs/edit?usp=sharing]: Ergo ecosystem spreadsheet of dApps and projects.

- [https://docs.ergoplatform.com/uses/]: Ergo Platform official uses and ecosystem section.

- [https://ergoauctions.org/artwork/78263e5613557e129f075f0a241287e09c4204be76ad53d77d6e7feebcccb001]: Gold Pool Oracle Token auction (1 of 32).

- [https://ergoplatform.org/en/blog/2021-07-01-lets-start-the-discussion/]: LETS concept introductory blog post.

- [https://thecomettoken.com/ico]: Comet refundable ICO structure reference.

- [https://twitter.com/RunOnFlux/status/1755326437370810615]: Cross-chain Twitter Space with Flux, Ergo, Kadena, Alephium.

- [https://youtube.com/live/faBmQ_7y84o]: Weekly Ergo update and AMA live stream (2024-02-08).

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.20]: Ergo v5.0.20 release.

- [https://nonkyc.io/pool/ERG_BTC]: ERG/BTC liquidity pool on NonKYC DEX.

- [https://nonkyc.io/pool/ERG_XMR]: ERG/XMR liquidity pool on NonKYC DEX.

- [https://rankmywallet.com/]: Wallet ranking/whale detection tool.

- [https://kaironlabs.com/blog/ergo-partners-with-kairon-labs]: Kairon Labs partnership announcement (discontinued as of bear market due to lack of benefit).

- [https://youtu.be/2s-END_zXe8]: Weekly developer update video featuring Lithos Protocol discussion.

- [https://cornell.zoom.us/j/96191098460]: Zoom link for MM discussion chat (2024-02-11).

## Unresolved Questions

- **dApp development coordination**: Whether there is dedicated team coordinating ecosystem development priorities or if it is "free for all jungle mode" (@Alex, msg#472703). No clear governance structure confirmed.

- **Monero emission effect meme contest**: Unclear what specific messaging the community should emphasize; contest running 2024-02-09 to 2024-02-16 but no guidance on theme direction.

- **MM selection final decision**: Five proposals reviewed (msg#473796 onwards) but no final selection made as of 2024-02-11. Expected value analysis suggested needed but not completed in chat.

- **Kraken listing status**: @qx() confirmed contact with Kraken but timing and progress unknown (msg#473852). Community awaiting update.

- **LETS platform PoC status**: Discussed as "sexy" dApp concept but no active development confirmed; draft contracts available but previous hackathon work made private (msg#472830).

- **Ledger Ergo app issues**: Multiple users reporting Ledger app connection failures with Nautilus; workarounds mentioned (dev mode, reinstall) but no root cause identified (msg#472871-886).