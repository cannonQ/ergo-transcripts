---
title: "Ergo General Chat — 2021-W41"
date_start: "2021-10-11"
date_end: "2021-10-17"
type: telegram_weekly
channel: general
week: "2021-W41"
source: telegram
message_count: 1914
categories: [ecosystem, defi, community, governance, technical, mining, wallet, nft, bridges]
key_terms: [Cardano Summit, Chainlink, oracle pools, partnership, ErgoDEX, launch date, Cardano integration, October, November, logo contest, foundation branding, submissions, deadline, SigmaUSD, SigRSV, stablecoin, AgeUSD protocol, reserve tokens, emission schedule, soft fork]
---
# Ergo General Chat — 2021-W41 Summary
## Period: 2021-10-11 to 2021-10-17

---

## Key Topics Discussed

- **Chainlink and Cardano Oracle Partnership**: Community discussed the announcement of Chainlink partnering with Cardano for oracles. Clarification provided that this does not exclude Ergo Oracle Pools, which will be available once Cardano adds data inputs. Ergo oracles remain operational and available for any developer to use.

- **Emission Retargeting Proposal**: kushti introduced a detailed proposal for retargeting Ergo's emission schedule via soft-fork to extend mining rewards beyond the original 8-year schedule. The proposal involves miners contributing part of block rewards to a re-emission contract that would fund rewards after initial emission ends, preserving total supply while extending miner incentivization. Discussion focused on cryptoeconomic security, storage rent modeling, and miner acceptance.

- **Post-ETH 2.0 Mining Landscape**: Extensive discussion about hashrate migration after Ethereum's transition to Proof of Stake. Estimated that 30-series GPU miners (approximately 393 TH/s) could migrate to Ergo. Community discussed potential competition from other coins, mining profitability requirements, and infrastructure needs. Emphasis on timing emission changes relative to ETH 2.0 transition.

- **Storage Rent Economics**: Discussion of storage rent as a long-term miner incentive mechanism. Current parameters: 0.14 ERG per UTXO box per 4 years. Debate over whether to increase storage rent fees, implement annual fees, or adjust parameters to ensure adequate miner rewards post-emission.

- **Logo Competition for Ergo Foundation**: Community members submitted logo designs for the Ergo Foundation. Multiple entries discussed, including animated proposals. Deadline extended discussion, with final submissions due October 15th at midnight UTC.

- **ErgoDEX Launch Timeline**: Confirmed that ErgoDEX is live on Ergo blockchain with full UI expected late October 2021. Cardano deployment targeted for early November 2021, pending final development completion.

- **ErgoHack II Update**: Announcement that ErgoHack II winners would be announced around October 20th. Project teams continuing development post-hackathon, with progress updates shared in weekly dev updates.

---

## Important Decisions or Announcements

- [@kushti, msg#218042, 2021-10-15]: Posted formal proposal for emission retargeting via soft-fork at block 640,000, proposing to reduce immediate block rewards (67 ERG - 24 ERG) while extending emission timeline to support long-term miner incentivization.

- [@Armeanio, msg#217631, 2021-10-14]: Published Ergo Weekly Dev Update (October 13th) covering emission discussions, ErgoDEX progress, Oracle Pool developments, and ecosystem project updates.

- [@kushti, msg#218310, 2021-10-16]: Confirmed ErgoHack II winners announcement scheduled for approximately October 20th.

- [@kushti, msg#218311, 2021-10-16]: Confirmed Treasury contract will finish at block number 655,200 (a few months from date), after which the Foundation will rely on previously collected treasury funds and UI fees from dApps.

- [@Glasgow, msg#218400, 2021-10-16]: Updated welcome/pinned message with new Ergo Tip Bot supporting Telegram, Discord, Reddit, and Twitter with native token support. Users instructed to migrate from @ergotip_bot to @ergotipperbot.

---

## Technical Q&A Worth Preserving

- **Q** (@unknown): What happens when the network is congested on Ergo?
  **A** (@unknown, @Glasgow): eUTXO model allows most smart contract logic to be executed off-chain, with only validation performed on-chain. This architectural difference provides significant scalability advantages over account-based models where all logic is on-chain.

- **Q** (@Aberg): Why does Ergo have such a short emission schedule (8 years vs Bitcoin's ~140 years)? Concerned about miner incentives after emission ends.
  **A** (@Glasgow, @kushti): Storage rent provides recurring revenue stream for miners. Additionally, soft-fork proposal under discussion would extend emission by diverting portion of current block rewards to re-emission contract, preserving total supply while extending miner incentivization timeline.

- **Q** (@unknown): How does storage rent work? Will I lose my coins?
  **A** (@Glasgow, @Armeanio): Storage rent is 0.14 ERG per UTXO box per 4 years. Simply move your ERG once every 4 years to reset the timer. Designed to recycle lost coins and fund miners, not penalize active users. Wallets will implement simple "renew" functions.

- **Q** (@unknown): Can Trust Wallet hold ERG?
  **A** (@Glasgow): No. ERG is not an ERC-20 token, it's a native coin on its own blockchain. Use Yoroi (desktop), Ergo Mobile Wallet (Android), or ViaWallet (iOS).

- **Q** (@BOTNIQ): Why can't I interact with my SigmaRSV on ErgoDEX?
  **A** (@Glasgow): SigmaRSV from before May 2021 is V1, incompatible with current V2 system. Old contract at old.sigmausd.io is locked until someone who bought V1 SigmaUSD withdraws. New users should only use V2 at sigmausd.io.

- **Q** (@unknown): What is the TPS of Ergo?
  **A** (@Glasgow): TPS alone doesn't convey much meaning for eUTXO chains, as thousands of transactions can be bundled into single blocks. Actual throughput depends on transaction size and complexity. Scaling and throughput improvements are active development priorities.

- **Q** (@unknown): How would emission retargeting be enforced? What prevents miners from not remitting to re-emission contract?
  **A** (@kushti): If majority of miners are on updated rules, blocks with improper payments to re-emission contract would be rejected by the network. In practice, pools use the node's wallet which handles complexities automatically.

- **Q** (@theta decay): Is Ergo Wallet recommended over Yoroi?
  **A** (@Ian Lee, @unknown): Yoroi for desktop, Ergo Mobile Wallet (by MrStahlfelge/Benjamin Schultz) for Android. Mobile wallet is smooth, lightweight, and supports native assets including NFTs.

---

## Links Shared

- [Ergo Emission Retargeting Proposal](https://www.ergoforum.org/t/ergo-emission-details-retargeting-via-a-soft-fork/2778): kushti's detailed technical proposal for extending emission via soft-fork
- [Long-term Vision for Ergo](https://www.ergoforum.org/t/long-term-vision-for-ergo/2629): Discussion of emission schedule concerns and long-term sustainability
- [Bearwhale Saga](https://ergoplatform.org/en/blog/2021-05-13-bearwhale-saga/): Explanation of SigmaUSD V1 to V2 transition
- [Storage Rent Positioning](https://ergoplatform.org/en/blog/2020_04_21_ergo_positioning/): Storage rent mechanics and philosophy
- [UTXO Alliance](https://utxo-alliance.org/): Standards organization for eUTXO blockchains including Ergo, Cardano, Nervos, Topl
- [Off-Chain Logic and eUTXO](https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/): Technical explanation of eUTXO scalability advantages
- [Ergo AgeUSD Protocol: SigRSV and SigUSD](https://ergoplatform.org/en/blog/2021-07-30-ergos-ageusd-protocol-sigrsv-and-sigusd/): Explanation of algorithmic stablecoin system
- [LETS Discussion](https://ergoplatform.org/en/blog/2021-07-01-lets-start-the-discussion/): Local Exchange Trading System proposal for Ergo
- [Koru Whitepaper (LETS)](https://docs.google.com/document/d/1qCoQ5Z5KQKQ0ZnQTGfMJNU8_8MUeM20jz0q6VF70HMg/edit): Draft whitepaper for LETS implementation
- [EIP-4345](https://eips.ethereum.org/EIPS/eip-4345): Ethereum difficulty bomb delay, indicating ETH 2.0 delays
- [ErgoHack II Update](https://reddit.com/r/ergonauts/comments/q6jn65/ergohack_ii_update/): Progress report on hackathon projects
- [Weekly Dev Update October 13](https://reddit.com/r/ergonauts/comments/q7ujw6/whats_going_on_behind_the_screens_ergo_weekly_dev/): Comprehensive development update
- [Ergo Deep Dive](https://reddit.com/r/CryptoCurrency/comments/q563f2/ergo_deep_dive/): Community-created detailed Ergo analysis on r/CryptoCurrency
- [Ergo Tutorials](https://ergotutorials.com/): Community-maintained tutorial site
- [Ergo Wallets](https://ergoplatform.org/en/wallets/): Official wallet documentation
- [Android Wallet Page](https://ergoplatform.org/en/android_wallet/): New documentation page for mobile wallet
- [Cardano Summit UTXO Alliance Announcement](https://twitter.com/InputOutputHK/status/1449002266753736705): Official announcement of collaboration between Ergo, Cardano, Nervos, and Topl
- [Max Maher Ergo Coverage](https://www.youtube.com/watch?v=ss13m9gi4jQ): YouTube video mentioning Ergo in crypto portfolio (440k subscribers, timestamp 6:20)
- [HiveOS Mining Statistics](https://hiveos.farm/statistics/): Public statistics showing GPU distribution across mining operations
- [Ergo Contributors Donation List](https://www.ergoforum.org/t/ergo-contributors-donation-list/295/26): Community donation addresses for supporting development

---

## Unresolved Questions

- Optimal parameters for emission retargeting: Community discussion ongoing about specific block reward reduction amounts, timeline for implementation relative to ETH 2.0 transition, and modeling of long-term storage rent revenue.

- Miner acceptance of reduced block rewards: Debate over whether miners would accept reduced immediate rewards in exchange for extended emission timeline. Concerns about competitive disadvantage versus other GPU-minable coins post-ETH 2.0.

- Storage rent parameter adjustments: Discussion about whether current 0.14 ERG per 4 years is sufficient for long-term miner incentivization, or if parameters should be increased. No consensus on timing or magnitude of potential changes.

- Ledger hardware wallet integration timeline: Multiple community inquiries about Ledger support. Confirmed in development (being integrated into Yoroi) but no specific release date provided beyond "soon."

- Binance listing timeline and requirements: Community inquiries about Binance listing. Team confirmed discussions under NDA but no timeline provided. Foundation incorporation status mentioned as potential requirement.

- Desktop wallet (ergowallet.io) maintenance status: Confirmed as unmaintained/deprecated. Users experiencing sync issues advised to use Yoroi desktop or Android wallet instead. Full node wallet still available but challenging for average users.

- Ergo oracle integration with Cardano: Timing depends on Cardano adding data inputs support. No specific timeline provided beyond "soon."

- Atomic swaps with Monero: Community member (@Jad) suggested implementing atomic swaps between Ergo and Monero, noting UTXO model compatibility. Proposed pursuing funding through both Ergo and Monero CCS systems. No official response or commitment.

- Mixer tokenization and profit-sharing: References to mixer tokenization and profit-sharing dApp on GitHub but limited details provided in chat.

- Intel GPU mining impact: Mentioned as potential factor for post-ETH 2.0 mining landscape but discounted due to unknown hashrate performance, supply, and adoption timeline.

---

**Notes:**
- Treasury contract ending at block 655,200 marks significant transition for Foundation funding model
- ErgoDEX NFT giveaway announced: Epic Cypherkicks NFT + real branded sneakers, winner selected October 31st
- ergofaucet.org now distributing ErDoge and Kushti test tokens alongside existing test tokens
- Ergo platform Spanish translation (ergoplatform.org/es) completed by community member Dani
- Scammer activity noted impersonating admins (particularly @glasgowm); standard warnings about never responding to DMs or sharing seed phrases
- Community size discussions: Ergo Telegram ~30k members versus Cardano ~60k, with emphasis on organic growth over purchased followers
- Mining profitability discussions moved to dedicated mining channel as per community guidelines