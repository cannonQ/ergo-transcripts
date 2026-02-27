## Key Topics Discussed

- **EFYT to ERG Token Swap**: Discussion of the EFYT token migration to ERG, including swap mechanics on Waves DEX and confusion about whether the swap would be automatic on exchanges.

- **Ergo Node Sync and Wallet Issues**: Users reported wallet balance not updating despite confirmed on-chain transactions. Solution involved full node resync from genesis with patience during CPU-intensive header validation (~8 minutes for headers, ~28 minutes for full sync).

- **GPU Mining Optimization**: Community sharing hashrate results for Nvidia and AMD GPUs. Reports included 5x 1070 setup at ~101 MH/s and 13x RX Vega setup at ~280 MH/s. Discussion of HiveOS compatibility fixes and optimization of multi-GPU configurations.

- **Exchange Listings and Gateway Operations**: GJ.com (Chinese exchange) announced plans to list ERG with 400,000 user base. Multiple users reported delays in Waves DEX gateway transfers to Tidex (timeframe: 17+ hours), with gateway temporarily experiencing withdrawal issues. Confirmation that coins remain safe during gateway processing delays.

- **Crowdfunding CLI Application**: Alpha version released on GitHub for Ergo crowdfunding CLI tool written in Rust, with extensive documentation provided.

## Important Decisions or Announcements

- [@Haiyan, msg#13408-13409, 2019-09-02]: GJ.com exchange plans to launch ERG trading in mid-September with potential AMA and airdrop collaboration to build Chinese community.

- [@Dmitry, msg#13450, 2019-09-04]: Waves DEX withdrawal issues were acknowledged and stated to be "should be fixed soon."

- [@Unknown, msg#13513, 2019-09-06]: First "alpha" version of Ergo crowdfunding CLI application released on GitHub with comprehensive documentation.

## Technical Q&A Worth Preserving

- **Q** (@NC, msg#13304): Ergo node (v3.0.7) not seeing recent incoming transactions despite valid confirmations on block explorer and correct block height in /info endpoint. Wallet /balances endpoint stuck at height 16855 and transaction missing from /wallet/transactions.
  **A** (@reb0rn21, msg#13305-13307): Resync blockchain and wallet state from genesis. Wait several hours after sync completes for CPU usage to drop before checking balance. Do not interact with wallet during sync—only unlock at startup and let it complete.

- **Q** (@Madefi's 🦴, msg#13440): How long does a gateway transaction take to send ERG from Waves DEX to external address? Transfer not appearing after 35 minutes.
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#13441, 13448): Tidex requires ~100 confirmations if using original settings. Transaction will not appear on Ergo explorer until gateway releases coins. Actual time varies; consider possible maintenance downtime on gateway side managed by Waves.

- **Q** (@Madefi's 🦴, msg#13456): Gateway still showing errors after 17 hours with deposit not received.
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#13453): Coins are safe on the gateway despite delays; wait for resolution.

- **Q** (@KJSDNGlksdnnds, msg#13364-13368): How to donate to Ergo without running a full node? Installation complexity is a barrier.
  **A**: No direct answer provided in thread; topic left unresolved.

- **Q** (@Unknown, msg#13375): Hashrate expectations for Nvidia 1080 Ti on Ergo? Better performance with Nvidia or AMD?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖈𝖑𝖎𝖘𝖙կշօ, msg#13376): Provided hashrate examples: 5x 1070 = ~101 MH/s total; 13x RX Vega = ~280 MH/s. Directed to #amdminer channel and @ergo_mining for optimization details.

## Links Shared

- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46](http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46): EFYT token asset information
- [https://www.ergoforum.org/](https://www.ergoforum.org/): Ergo community forum (mentioned as alternative to Reddit)
- [https://twitter.com/ergoplatformorg/status/1166380590955995137](https://twitter.com/ergoplatformorg/status/1166380590955995137): Ergo Platform announcement (date: 2019-08-27)
- [https://twitter.com/ergoplatformorg/status/1169711147991347202](https://twitter.com/ergoplatformorg/status/1169711147991347202): Ergo Platform announcement regarding Iranian conference (date: 2019-09-05)
- [https://github.com/robkorn/ergo-crowdfunding-cli](https://github.com/robkorn/ergo-crowdfunding-cli): Alpha release of Ergo crowdfunding CLI application in Rust

## Unresolved Questions

- **Non-custodial donation mechanism**: How to participate in Ergo without running a full node remains unclear; installation complexity identified as barrier for participation.

- **Testnet coin distribution**: @Jason Davies requested spare testnet coins but received no response in thread.

- **Pool mining availability**: Early discussion of whether Ergo mining had pool options or remained solo-only; no definitive answer provided in visible thread.

- **Reddit community location**: Directory/link to Ergo subreddit not provided; only forum alternative mentioned.