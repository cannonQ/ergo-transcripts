---
title: "Ergo General Chat — 2022-W38"
date_start: "2022-09-19"
date_end: "2022-09-25"
type: telegram_weekly
channel: general
week: "2022-W38"
source: telegram
message_count: 3126
categories: [mining, technical, bridges, governance, ecosystem, community, defi, nft]
key_terms: [difficulty, EIP-37, DAA, epoch, hard fork, hashrate, merge, difficulty bomb, miners, profitability, node 5.0, JIT costing, activation, voting, bootstrapping, Rosen Bridge, soft launch, testnet, mainnet, Cardano]
---
# Ergo General Chat — 2022-W38 Summary

## Key Topics Discussed

- **Difficulty Adjustment Algorithm (DAA) Post-Merge**: The Ethereum merge caused a massive hashrate influx to Ergo (peaking ~200TH/s from ~25TH/s baseline), followed by rapid decline, resulting in severely prolonged block times (5-10+ minutes vs 2-minute target). Current DAA recalculates every 1024 blocks using least squares method over last 8 epochs, designed to prevent time-drifting attacks but struggles with extreme hashrate volatility. Community debated whether this constitutes a systemic problem requiring hard fork or temporary issue that will self-stabilize.

- **EIP-37 Proposal**: Kushti drafted EIP-37 proposing 128-block epochs (down from 1024), 50% max difficulty change per epoch, and hybrid approach combining current method with Bitcoin-style adjustment. Simulations show improved performance during hashrate swings while maintaining security. Would require hard fork with 90% miner vote threshold (921/1024 blocks). Release candidate expected Monday following community chat.

- **Mining Profitability Crisis**: GPU mining became unprofitable across all chains post-merge due to overcapacity and energy crisis. Getblok.io offered 25% bonus rewards for current and next epoch to incentivize hashrate support. Significant miner attrition and complaints about block times, though many argued difficulty adjustment won't solve fundamental profitability issues caused by macroeconomic conditions.

- **Node 5.0 Activation**: EIP-27 voting progressing successfully, activation expected late November. Node 5.0 brings JIT costing (5-10x throughput improvement for contracts), improved mempool handling, bootstrapping optimizations. Now successfully syncs on Raspberry Pi with no crashes.

- **Rosen Bridge Progress**: Final mainnet tests progressing on schedule, soft launch (mainnets with test tokens) imminent if no issues found in next 3-4 days. UI nearly complete, connecting to backend and dApp connectors. Many refactors and improvements discovered during testing.

- **Governance and Hard Fork Discussion**: Extensive debate about hard fork costs/benefits, threshold requirements, and activation mechanisms. Team exploring whether voting can be counted within single epoch then activated 256-512 blocks later to speed process while maintaining 90% threshold. Strong emphasis on miner-led governance rather than developer diktat.

- **DexyGold Announcement**: Kushti announced new algorithmic gold-pegged stablecoin project with dedicated Telegram group. Will utilize oracle pools, designed as commodity-backed alternative to SigmaUSD.

- **Man-Hour Token Airdrop**: Mysterious airdrop to top 5000 ERG holders completed. Token description: "One token = one Man-Hour", appears to be proof-of-concept for tokenized labor/contributions, creator and full purpose unclear.

## Important Decisions or Announcements

- [@kushti, msg#318432, 2022-09-20]: "Voting for 5.0 is going on successfully, we will see activation around late November likely."

- [@kushti, msg#322262, 2022-09-23]: Initial EIP-37 draft published at https://github.com/ergoplatform/eips/pull/79/files with simulations comparing current DAA to proposed 128-block epoch system.

- [@kushti, msg#323250, 2022-09-24]: "PR with EIP37 and its activation almost done"

- [@Armeanio, msg#323096, 2022-09-24]: "Team is checking if it's possible to count votes within an epoch, then we can activate in 256 or 512 blocks after current epoch if there is enough hashrate supporting it."

- [@kushti, msg#325008, 2022-09-25]: "Just created new group to discuss design and deployment of DexyGold, an algorithmic gold-pegged stablecoin, and corresponding oracle pool."

- [@mhs_sam, msg#322634, 2022-09-23]: Rosen Bridge final tests progressing, soft launch imminent: "If no major issue happens during the next 3-4 days, the tests will be finished."

- [@Armeanio, msg#325069, 2022-09-25]: "DexyGold needs a logo. Starting a short weeklong contest. Prize 25 ERG. Please email submissions to Team@ergoplatform.org"

## Technical Q&A Worth Preserving

- **Q** (@user): Why hasn't difficulty adjusted in days when hashrate dropped significantly?
  **A** (@kushti, @multiple): Difficulty recalculates every 1024 blocks, but with slower block times the calendar duration extends. Current system uses least squares method over last 8 epochs (8192 blocks). When hashrate drops, it takes longer to reach the 1024 blocks needed for adjustment, creating feedback loop.

- **Q** (@user): Can difficulty adjustment be changed via soft fork?
  **A** (@kushti, msg#320204): "Nope, for DAA change hard fork is needed"

- **Q** (@user): What attack vectors does current DAA prevent?
  **A** (@kushti, msg#320581): "It is an unusual time for ergo with the miner migration, these are temporary issues as i see it. There will be a community wide chat in here tomorrow about changing it though if your interested tune in." Current algo designed to prevent time-drifting attacks as documented in https://eprint.iacr.org/2017/731.pdf

- **Q** (@Benny, msg#322627): What does the total error number mean in EIP-37 simulations?
  **A** (@kushti): Error measures deviation from target block time - higher number = worse performance. EIP-37 shows lower total error than current system during hashrate swings.

- **Q** (@user): Why not adjust difficulty every block like some chains?
  **A** (@kushti, msg#320581): "Adjusting diff per block is insane, as timestamps are gameable a lot then. An epoch should be long enough to minimize effects of 20 mins probable cheating"

- **Q** (@Jonii, msg#323721): Can 10% of block rewards go to node operators for incentivization?
  **A** (@Aberg, msg#323763): Attack vector - could easily spin up 1000 nodes from same database with minimal resources to capture rewards unfairly.

- **Q** (@user): What's the process for community members to propose EIPs?
  **A** (@Armeanio): Write one up same as kushti did, draft the proposal with technical details and simulations. Team encouraged competing EIPs rather than single binary option.

- **Q** (@user): How does voting work for protocol changes?
  **A** (@multiple): Miners vote via blocks mined - each block contains yes/no vote. Over 1024-block epoch, votes counted. Requires 90% supermajority (921+ blocks) to pass. Solo miners have lower probability of vote counting due to fewer blocks found.

- **Q** (@MrStahlfelge, msg#324180): Could nodes with open APIs receive transaction fee rewards?
  **A** (@multiple): Interesting idea - nodes with open APIs are most valuable, could track transaction submissions to each node and distribute small rewards. Would incentivize node operators, needs careful design to prevent gaming.

## Links Shared

- [https://github.com/ergoplatform/eips/pull/79/files]: EIP-37 draft proposal for difficulty adjustment algorithm with simulations
- [https://curiaregiscrypto.medium.com/eip-37-update-5a4b7c289381]: Armeanio's EIP-37 explainer and update
- [https://curiaregiscrypto.medium.com/ergo-post-merge-community-discussion-difficulty-adjustment-f41e7dc972d7]: Summary of September 20 community discussion on difficulty adjustment
- [https://www.ergoforum.org/t/diff-adjustment-potential-design-tradeoffs/3875]: Forum thread for discussing difficulty adjustment design tradeoffs
- [https://www.ergoforum.org/t/hopping-monitoring-post-merge/3876]: Forum thread for tracking and documenting hashrate hopping post-merge
- [https://www.ergoforum.org/t/hard-fork-upgrades-wish-list/3888]: Forum thread collecting potential hard fork upgrade proposals
- [https://www.ergoforum.org/t/difficulty-adjustment-at-regular-time-intervals/3907]: Morphic's proposal for time-based difficulty adjustment intervals
- [https://read.cash/@jtoomim/bch-upgrade-proposal-use-asert-as-the-new-daa-1d875696]: Bitcoin Cash ASERT DAA proposal as alternative reference
- [https://eprint.iacr.org/2017/731.pdf]: Original paper on Ergo's difficulty adjustment algorithm and time-drifting attack prevention
- [https://cds.oette.info/ergo_diff.htm]: Live difficulty monitor with next epoch predictions
- [https://ergoplatform.org/en/blog/Ergo-Node-v.5.0-The-Next-Evolution-of-the-Ergo-Platform]: Node 5.0 feature announcement
- [https://github.com/ergoplatform/ergoMixBack/releases/tag/4.2.0]: ErgoMixer v4.2.0 release
- [https://t.me/dexygold]: New Telegram group for DexyGold stablecoin development
- [https://youtu.be/_lWA0gE3BJs]: Community chat video recording
- [https://www.reddit.com/r/ergonauts/comments/xmmm8l/airdrop_manhour_token_completed/]: Man-Hour token airdrop explanation

## Unresolved Questions

- Whether EIP-37 should be "lean" (difficulty adjustment only) or bundled with other improvements like NIPoPoW fixes, unsigned 256-bit numbers, Merkle tree types for ErgoScript
- Optimal epoch length: 128 blocks (EIP-37 proposal) vs 256 blocks vs other options, and whether to adjust number of historical epochs used in calculation
- Whether time-based interval adjustment (vs block-based) is feasible given timestamp manipulation risks, despite potential benefits
- How to properly incentivize node operators without creating gaming vulnerabilities
- Whether current situation constitutes systemic problem requiring hard fork or temporary post-merge volatility that will self-stabilize
- Activation timeline and mechanism for potential hard fork - fastest possible is 22 days but achieving 90% threshold uncertain
- How to balance miner governance representation between large pools and solo/small pool miners if epoch length changes
- Whether hashrate hopping/manipulation is actually occurring vs normal profit-mining behavior, data collection ongoing