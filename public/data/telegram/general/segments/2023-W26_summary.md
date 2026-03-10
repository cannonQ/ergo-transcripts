---
title: "Ergo General Chat — 2023-W26"
date_start: "2023-06-26"
date_end: "2023-07-02"
type: telegram_weekly
channel: general
week: "2023-W26"
source: telegram
message_count: 0
categories: []
key_terms: []
---
## Key Topics Discussed

- **KuCoin KYC Requirements (2023-06-26 onwards)**: KuCoin announced mandatory KYC for all users starting July 15, with US users unable to deposit or complete KYC legitimately. Community discussed alternatives including TradeOgre, SevenSeas, CoinEx, and Bitrue for non-KYC trading, with most agreeing bridges (especially Rosen) will be critical for liquidity access once live.

- **Storage Rent Activation (July 20, 2023)**: Storage rent collection begins at block 1,051,200 on July 20th. Boxes older than 4 years with insufficient ERG to cover ~0.14 ERG per 4-year rent can be claimed by miners. Analysis shows ~13k ERG in 304 boxes eligible over next 6 months, though most mining reward boxes will take 1928 years to fully collect rent. Concerns raised about NFTs with insufficient ERG in loan boxes on SigmaFi.

- **0-conf Transaction Security Discussion**: Extended technical discussion on implementing safer 0-confirmation transactions for better UX. Arthur proposed mempool policy changes to reject conflicting transactions and broadcast double-spend alerts, with optional collateral attachments. kushti noted challenges with mempool consistency across nodes and miner incentives, suggesting miner-signed transaction commitments or risk-buyer models as alternatives.

- **HODLcoin Launch (July 2, 2023)**: Degenerate game-theory token launched by Pulsarz, Bruno, and kushti. 3% fee on redemption redistributes to remaining holders, creating prisoner's dilemma dynamics. Reached 61k+ ERG TVL within hours with ~48 unique holders. Site: app.hodlcoin.co.in. Community created Spectrum LP pools and discussed SigmaFi bonds using HODLERG as collateral.

- **Dexy Stablecoin Protocol**: kushti presented Dexy design at Ergoversary—simpler than SigmaUSD reserve shares model, uses rate limiting against bear whales, gold-backed with oracle pool v2. GORT reward token for oracles will receive buyback fees from Dexy transactions via ERG/GORT LP. Mainnet depends on oracle pool v2 audit completion, targeting late July for UI/LP launch.

- **Oracle Pool v2 Status**: Testing continues on testnet with contract voting mechanisms. Recently bootstrapped again after voting tests. Will power Dexy and SigGold, with plans to update SigmaUSD eventually. Reward tokens from DexyGold will have LP for distribution. Anyone can bootstrap pools following docs.

- **Ergoversary Summit Content**: Multi-day video release with technical presentations covering Rosen Bridge, Dexy, HODLcoin, gaming on Ergo, wallet tutorials, and more. qx() handled most hosting/editing with OpenAI Whisper for captions. Community praised production quality and technical depth.

- **NIPoPoWs Node Bootstrap Support**: kushti announced NIPoPoWs support for node bootstrapping coming in v5.0.13, with PR proposed during summit. Proof generation/verification already supported. Light wallets using NIPoPoWs discussed as future development goal requiring significant work.

- **SigmaUSD vs Dexy vs Rosen Wrapped Assets**: Discussion on security assumptions—SigmaUSD has years of battle-testing and simple/clear peg assumptions, Dexy more efficient for bootstrapping DeFi without wrapped asset liquidity/fees but potentially vulnerable to oracle manipulation, Rosen provides real BTC/ADA liquidity but requires trust in federated watchers/guards.

## Important Decisions or Announcements

- [@kushti, msg#402204, 2023-06-30]: Storage rent collection begins July 20, 2023 at block 1,051,200. First demurrage rewards for miners.

- [@kushti, msg#402206, 2023-06-30]: Dexy bank UI and LP targeting late July launch. Mainnet deployment depends on oracle pool v2 launch and full audit of Dexy contracts, oracle pool v2 contracts, and GORT buyback contract.

- [@kushti, msg#402285, 2023-06-30]: NIPoPoWs support for node bootstrapping coming in v5.0.13, PR will be proposed for review during summit.

- [@CW, msg#402843, 2023-07-02]: Ergoversary Summit Day 2 video releases begin. Full playlist available on ErgoPlatform YouTube.

- [@Glasgow｜WON'T DM, msg#402713, 2023-06-30]: Community Chat scheduled Friday June 30, 8AM-10PM UTC for 4th year recap and 5th year discussions.

- [@Glasgow｜WON'T DM, msg#402175, 2023-06-30]: Paideia MVP contracts optimized and finalized, team focusing on frontend integration for beta launch.

- [@Glasgow｜WON'T DM, msg#402176, 2023-06-30]: DuckPools ready for private testing in Discord, starting with ERG pool then SigUSD, SigRSV, and QUACKS pools.

- [@Pulsarz, msg#403371, 2023-07-02]: HODLcoin site restored after Cloudflare migration issues. Contract uses 3% redemption fee hardcoded.

## Technical Q&A Worth Preserving

- **Q** (@Allen): Is AgeUSD the same as SigmaUSD?
  **A** (@Glasgow｜WON'T DM, @kushti): AgeUSD was the original design name. SigmaUSD v1/v2 both implement "Minimal Djed" from the paper. COTI named their instantiation "Djed" (causing confusion), so Bruno is rebranding newer protocol versions to "Gluon". SigGold will explore improvements to the AgeUSD/Minimal Djed design.

- **Q** (@Arthur): What happens to tokens in 4-year-old boxes with ERG less than storage rent?
  **A** (@qx(), @kushti): Entire box including tokens goes to miners. Minimum box creation is 0.0001 ERG but rent is ~0.14 ERG per 4 years. Boxes with insufficient rent become claimable by anyone, though miners choose which to include. NFTs with complex data (~4KB) cost several ERG in rent.

- **Q** (@Arthur): Can 0-conf transactions be made secure for instant UX?
  **A** (@kushti): No "the mempool" exists—each node's mempool differs. Mempool consistency requires separate consensus protocol that doesn't scale independently of node count. Block generator's mempool could differ from merchant's node. Miner-signed transaction commitments or risk-buyer intermediaries are alternative approaches.

- **Q** (@MavΣrickBg): Why does HODLcoin website link differ from video?
  **A** (@MavΣrickBg): Correct link is app.hodlcoin.co.in (found in Telegram). Video had outdated URL initially.

- **Q** (@Pluto): Is HODLcoin mobile compatible?
  **A** (@Pulsarz): Currently Nautilus desktop only. Mobile support planned.

- **Q** (@Arthur): Can HODLcoin redemption fee be changed?
  **A** (@qx()): Hardcoded in smart contract. Would require new contract deployment with different fee.

- **Q** (@Arthur): What's the profit mechanism for HODLcoin holders?
  **A** (@Daskre): When someone exits paying 3% fee, price increases for remaining holders. Enter with 100 ERG, wait until position worth >103.3 ERG (100 + 3% fee + 0.3% dev fee) from others exiting, then profit when exiting. Zero-sum game—last holders take loss unless ERG price appreciation covers fee.

- **Q** (@miwal): Is there a decentralized way to move from ADA directly to ERG yet?
  **A** (@lexymon): In 1-2 months with Rosen Bridge. Will enable ADA bridging to Ergo, then swapping rADA for ERG on Spectrum.

- **Q** (@HQΣr): Can anyone create storage rent collection transactions or only miners?
  **A** (@kushti, @Glasgow): Anyone can collect rent on expired boxes, but only miners choose which to include in blocks and only miners can create transactions >96KB limit if needed for many boxes.

- **Q** (@@dayumbbbb): Are boxes really limited to 4KB?
  **A** (@kushti, @Maritsa): Script is part of box, so 4KB limit for everything. Tricks exist to store more depending on use case. Discussed variant in #development discord supporting up to 95KB, but not yet implemented for NFTs. Recursive NFT composition also possible.

## Links Shared

- [https://ergoraffle.com/raffle/show/1c7afc6e6c8ceea827f98d2b26fa1795c1632b58ea518948c7ba394ccb63c159]: Grassroots marketing raffle, kushti donated, collected over 1000 ERG

- [https://sigmafi.app/#/]: Crypto bonds platform for lending/borrowing with collateral

- [https://hackernoon.com/bridging-ai-and-blockchain-developing-a-plugin-for-chatgpt]: Article on ChatGPT plugin for Ergo node queries

- [https://feedback.koinly.io/integrations/p/integrate-ergo-native-tokens]: Koinly integration request for Ergo native tokens in beta testing

- [https://docs.google.com/spreadsheets/d/1ZVy643BcjlEOgPiPZ5pbXhQTycY2rQNVqMiSYaNOggg/edit?usp=sharing]: Snapshot of tokens claimable via storage rent (~15K ERG worth, 10K is NETA/SigRSV)

- [https://github.com/ergoplatform/oracle-core/blob/develop/docs/how_to_bootstrap.md]: Guide to bootstrap oracle pool v2

- [https://testnet.ergoplatform.com/en/oracle-pool-state/dexyerg]: Testnet oracle pool for DexyERG

- [https://github.com/rigelminer/rigel/releases/tag/1.6.0]: Rigel miner v1.6.0 now supports Ergo mining (Nvidia only), plus ERG+RXD and ERG+RXD+ZIL dual/triple mining

- [https://app.hodlcoin.co.in/]: HODLcoin application interface (corrected URL)

- [https://github.com/FlyingPig69/Ergo_Explorer_Queries/blob/main/data_outputs/unspent_boxes_to_1_jan_2020.csv]: CSV of unspent boxes older than Jan 1, 2020 (13k ERG in 304 boxes for next 6 months)

- [https://github.com/FlyingPig69/Ergo_Explorer_Queries/blob/main/Unspent_Boxes_by_date.sql]: SQL query for unspent boxes by date

- [https://www.youtube.com/watch?v=eDhZ14_72c8]: Ergo weekly AMA/update livestream June 29

- [https://www.reddit.com/r/ergonauts/comments/14m4fgd/ergo_ama_ask_us_anything/]: Ergoversary weekend AMA on Reddit

- [https://www.reddit.com/r/ergonauts/comments/13e8f8g/tracking_storage_rent_potential_3rd_ed/]: Three-part series tracking storage rent potential

- [https://royalsocietypublishing.org/doi/10.1098/rsos.180817#d1e2995]: "Another coin bites the dust" research paper on UTXO dust problem and storage rent importance

- [https://github.com/ZephyrProtocol/zephyr]: Zephyr Protocol—untraceable Minimal Djed fork of Monero

- [https://blueskyweb.xyz/]: Bluesky federated social platform by Jack Dorsey

- [https://www.binance.com/en/live/video?roomId=2141980]: Binance livestream where notmork discussed COMET token

- [https://t.me/CruxFinance]: Crux Finance Telegram channel

- [https://youtube.com/@ErgoPlatform]: Ergo Platform YouTube channel with Ergoversary Summit playlist

## Unresolved Questions

- **Spectrum/CoinGecko API Listing**: CoinGecko told Spectrum they're "extremely busy" and no response likely means rejection with no explanation given despite weeks of API development. CMC requested additional API work which was completed, now waiting again. Native token price tracking critical for ecosystem.

- **HODLcoin Endgame Dynamics**: Debate on whether HODLcoin is truly "can only win" or a zero-sum game where last holders lose. Question of what happens when no one wants to exit anymore—do holders get stuck with 3.3% loss if ERG price doesn't appreciate enough? Arbitrage opportunities with Spectrum LP pools unexplored.

- **US Exchange Access Post-KuCoin**: Uncertainty around reliable US on-ramps after KuCoin KYC. Gate.io, CoinEx, Bitrue, TradeOgre all have various limitations or regional restrictions. SevenSeas has low liquidity. Community consensus is Rosen Bridge to Cardano/Bitcoin will be critical but still 1-2 months away.

- **Oracle Pool v2 Timeline to Mainnet**: Currently on testnet with voting mechanism testing. kushti stated "late July" for Dexy bank UI/LP but mainnet depends on full audit completion (Dexy contracts + oracle pool v2 + GORT buyback contract). No firm date given for audit completion.

- **Storage Rent NFT Protection**: Maritsa flagged that SigmaFi UI should warn about insufficient ERG in boxes for rent if loan term extends past rent collection date. On-chain NFTs can require 5+ ERG in rent. No response on whether this will be implemented.

- **Mobile Wallet 0-conf/Chaining Support**: Discussion whether wallets/dApps (Spectrum, SigmaUSD, etc.) properly handle unconfirmed transactions. Arthur reported having to wait for confirmations on all 3 transactions (swap, add liquidity, stake LPs) despite chaining being possible. Unclear if this is wallet limitation or dApp design choice for safety.

- **SigmaUSD Future vs Dexy/Rosen**: Debate on whether SigmaUSD will lose liquidity providers to Dexy once launched, creating "bad cycle" where minting becomes impossible due to insufficient SigRSV. Allen concerned about SigmaUSD becoming stuck without improvements. Counterargument that different use cases and security assumptions will keep both relevant. SigGold protocol improvements mentioned but still conceptual.