---
title: "Ergo General Chat — 2025-W47"
date_start: "2025-11-17"
date_end: "2025-11-23"
type: telegram_weekly
channel: general
week: "2025-W47"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2025-W47 Summary

## Key Topics Discussed

- **Lithos Protocol testnet launch**: Sub-blocks implementation being tested on devnet with mining peers. kushti testing reworked sub-blocks implementation locally before public devnet relaunch. Collateral requirements and detailed README instructions published.

- **Rosen Bridge updates**: Bitcoin-Runes watcher support now live. Watcher operators required to update to versions 6.0.0 and 3.5.0. Collateral requirement: 50K RSN and 10 ERG per Bitcoin-Runes watcher. Cardano Ogmios watchers require cbor output flag for raw-data storage compatibility.

- **USE stablecoin (algorithmic)**: Community townhall and AMA held November 20 (7pm UTC). Launch event details published with vision and design documentation.

- **Infrastructure and node incentives**: Discussion of decentralized infrastructure incentive mechanisms. Proposals to reward node operators beyond monetary incentives. InfraDAO concept revisited following Cloudflare outages. Satergo wallet integrated node implementation as accessibility solution.

- **Privacy wallet development**: Community member (Velvia) offering bounty for privacy-focused wallet implementing transaction mixing and stealth addresses on Ergo.

- **Mahadex DEX architecture**: Project pivoting to anti-censorship infrastructure using Handshake domains and web3 naming. Evaluating Helium-like mesh networks and radio-based transmission. Planning integration of ChainCash and Basis for local currency mechanisms.

- **Degens.World launch**: Arohbe released 4 demo dApps on Ergo: Artifact Arena (NFT generation), Ergo Labs (AI ErgoScript generation), MemeVSMeme (AI meme battles with voting), Minted (HTML5 game NFT minting to IPFS).

- **MewFinance lending**: Live at lend.mewfinance.com with own smart contracts audited by Lui and kushti. ErgoPay support enabled. Early testing phase with creative lending offers requested.

- **Gluon Gold (Gluon Protocol)**: Frontend bug fix for GAU pricing calculation (was incorrectly dividing kg oracle price by 1000). GAU = 1 gram of gold. GAUC provides leveraged exposure (~1.94x at present). Both tokens minted together to maintain ratio. Redeemable at any time unlike locked SigmaRSV.

- **Blockchain state querying for historical verification**: Discussion of archival node functionality for vote count and airdrop eligibility verification at specific block heights. Extra indices required; ergo.watch API provides single-address balance lookups; qx() developed Python script using GPHL for pagination-aware balance queries.

- **Sub-blocks and block time optimization**: kushti clarified that applications relying on block height (not timestamp) would be unaffected by block speed increases. Testnet invitation pending for community contributors interested in testing parameter changes (difficulty, block time).

- **Ham radio and NIPoPoWs for internet-free blockchain sync**: Discussion of using ham radio (500kbps capable) to broadcast NIPoPoWs and sync Ergo without internet. Enables isolated communities (villages, islands) to use Ergo as trustless banking layer with local Basis-based off-chain activity.

- **Cardano fork concerns**: Armeanio flagged 846-block reorg on Cardano exceeding Rosen Bridge's confirmation thresholds. Required Rosen to shut down Bitcoin-Cardano bridge path to prevent double-spend exploitation. Highlighted PoS consensus risks vs PoW.

- **Storage rent and post-AGI economies**: kushti positioned Ergo as ideally suited for machine-to-machine commerce; storage rent solves blockchain bloat from 10B+ AI agents spamming micro-transactions 24/7. Ergo as reserve asset for both human and machine p2p interactions.

- **Community website launch**: ergoblockchain.org launched as community-run builder hub with onboarding resources, marketing playbook, and ecosystem documentation. Yulius Kristianto updated CoinGecko with new links (YouTube, Medium, Discord, whitepaper).

- **Explorer localization**: Javanese translation for Ergo Explorer frontend in review (PR #198, open since Sept 2024) with pending bounty reward. String translation improvements being iterated on.

- **VoltPay prepaid cards**: Swype prepaid cards available again on VoltPay allowing ERG-to-card conversion for in-store spending with international payment fees.

---

## Important Decisions or Announcements

- [@Armeanio, @ArØhβΣ @Arohbe 🍪, msg#581836, 2025-11-17]: Lithos Protocol v1.0-test client released with updated README instructions.

- [@ArØhβΣ @Arohbe 🍪, msg#581844, 2025-11-17]: New and more detailed Lithos client instructions added to GitHub README.

- [@qx(), msg#581845-581846, 2025-11-17]: Congratulated Lithos team on testnet launch.

- [@kusth, msg#581866, 2025-11-17]: Testing reworked sub-blocks implementation in local devnet; public devnet relaunch imminent.

- [@kushti, msg#581930-581931, 2025-11-18]: Ergo Development fundraiser completed (9000 ERG raised, 100% funded across 5 contributors). Spending to be discussed in dev group.

- [@Aco Šmrkas, msg#581938, 2025-11-18]: Rich list page added to ErgoExplorer (https://ergexplorer.com/rich-list).

- [@kushti, msg#581958, 2025-11-18]: Sub-blocks devnet relaunched at http://213.239.193.208:9058/info; mining peer to be added within hours; contributor invitations pending.

- [@ArØhβΣ @Arohbe 🍪, msg#582098, 2025-11-18]: Degens.World officially launched with 4 functional demo dApps and announcement post.

- [@HQΣr, msg#582347, 2025-11-20]: MewFinance lending platform live at lend.mewfinance.com with own audited smart contracts.

- [@Bruno Woltzenlogel Paleo, msg#582368, 2025-11-20]: Gluon Gold frontend GAU pricing bug fixed by MDMTXO; reserve ratio frontend display improvements in progress.

- [@Bruno Woltzenlogel Paleo, msg#582371, 2025-11-20]: Issue 51 (wallet reconnection bug on frontend reload) resolved by Arkadia and Etherex.

- [@kushti, msg#582373, 2025-11-20]: Small bounty offered for bug fix submitted by MDMTXO.

- [@T Mas, msg#582920, 2025-11-17]: Mahadex project update: SILENT anonymity protocol refined; onboarded dark web marketplace design experts; funding discussions with small entities ongoing; seeking advisors and community creators.

- [@T Mas, msg#581925-581929, 2025-11-17]: Mahadex reconsidering infrastructure; evaluating anti-ISP censorship via Handshake domains and web3 naming; identified potential security flaw in anti-censorship system.

- [@T Mas, msg#582430-582434, 2025-11-20]: Mahadex DEX helpers from PulseChain/HNS/Ergo communities. Planning local currency swap using ChainCash/Basis. Noted Binance bolivar arbitrage scam.

- [@T Mas, msg#582443, 2025-11-20]: Large thanks to HNS for supplying .mahadex domain.

- [@kushti, msg#582581-582582, 2025-11-22]: Bitcoin-Runes watcher update required (v6.0.0 service, v3.5.0 app). Collateral changed to 50K RSN + 10 ERG. Cardano Ogmios requires cbor output flags.

- [@Yulius Kristianto, msg#582691-682693, 2025-11-23]: Updated CoinGecko with ergoblockchain.org, YouTube, Medium, Discord, and whitepaper links (request ID CU2311250008).

- [@cannon_q (Discord), msg#582694-582695, 2025-11-23]: DuckPools test.duckpools.io updated with v1 pool stats, smarter proxy contracts removing slippage issues. Desktop recommended; mobile update early December.

---

## Technical Q&A Worth Preserving

- **Q** (@Jordan Mack, msg#582590): Does Ergo node support archival node functionality for querying state at specific block heights? What's the correct way to get state snapshots?
  **A** (@cannon_q via bot, msg#582593): Yes. Archival nodes store full UTXO set from genesis. Use `/blocks/at/{blockHeight}` endpoints. Enable extra indexing with `ergo.node.extraIndex = true` for advanced `/blockchain` path API endpoints via Swagger UI.

- **Q** (@Jordan Mack, msg#582614): Need to verify blockchain state snapshots for vote count and airdrop eligibility verification.
  **A** (@kushti, msg#582613): Extra indices should be sufficient. (@qx(), msg#582617-632): ergo.watch provides fast single-address balance at height API. For multi-address queries, qx() created Python script using GPHL with pagination support.

- **Q** (@Ich Binsnicht, msg#582020): What motivates people to run nodes besides direct payment? Are NFTs viable incentives?
  **A** (@kushti, msg#582026): Being your own bank is the motivation. (@Armeanio, msg#582028-582030): Security is the incentive—only way to trustlessly verify you own assets. (@ArØhβΣ @Arohbe 🍪, msg#582036-581984): Node incentive discussion occurs frequently in chat. Working on tool that scores node uptime and active handshakes; needs further development.

- **Q** (@qx(), msg#581870): Why don't CEXes support UTXO chains?
  **A** (@kushti, msg#581879): CEXes periodically collect dust; they're lazy with UTXO-based chains requiring more complex wallet handling vs account-based systems.

- **Q** (@DiscordBridge—yea.ok, msg#582150-582183): How does Gluon Gold (GAU/GAUC) work? Is minting profitable given price discrepancies?
  **A** (@Joe, @DiscordBridge): You always get both GAU and GAUC when minting to maintain ratio. GAU + GAUC ≈ 1000 ERG input. GAUC can be converted to GAU with fees. Bug in frontend was showing inflated GAU prices; fixed by MDMTXO.

- **Q** (@HQΣr, msg#582218): How to pump FAKU without dumping it?
  **A** (@Grayman, msg#582246): Distribute it for acts of valor (FAKU like GTA3 respect system).

- **Q** (@T F, msg#582045): Non-technical user hesitant about running a node due to port configuration and command-line complexity.
  **A** (@T Mas, msg#582046-582048, 582050): Ergo Foundation's ergoblockchain.org planning tutorials. YouTube videos from community members available. Terminus wallet on old Android phones + FUD wallet linkage via Ergo wallet app is easy entry point.

- **Q** (@B B, msg#582675): Load-balanced node endpoint giving inconsistent balance results.
  **A** (@Aco Šmrkas, @HQΣr, msg#582676): Escalated to dadreboi for investigation.

---

## Links Shared

- [GitHub—Lithos Client v1.0-test](https://github.com/Lithos-Protocol/Lithos-Client/releases/tag/v1.0-test): Reference client implementation with deployment instructions.

- [Lithos GitHub README](https://github.com/Lithos-Protocol/Lithos-Client): Updated with detailed instructions.

- [Ergo Community Marketing Playbook](https://ergoblockchain.org/start/community/marketing): Coordinated marketing strategy across CT, Reddit, Telegram.

- [Degens.World](https://degens.world/): Cross-chain collaboration platform with 4 functional Ergo dApps.

- [Degens.World Blog—Welcome](https://degens.world/blog/welcome-to-degens-world): Vision and overview.

- [Artifact Arena on IPFS](https://ipfs.io/ipfs/QmbyyZiu6ZEbqmTX7KJj4KDtctQukMyFesSA38U5Yi4UMr): Three.js random NFT artifact generator (Lovable hackathon origin).

- [MewFinance Lending](https://lend.mewfinance.com): Live lending platform with ErgoPay support.

- [MewFinance Smart Contracts GitHub](https://github.com/AcoSmrkas/mew-smart-contracts): Own audited contracts by Lui and kushti.

- [Deep Wiki—Dexy Protocol](https://deepwiki.com/kushti/dexy-stable): AI-powered Q&A on Dexy repo.

- [Ergo Forum—Unified Node Incentive Approach](https://www.ergoforum.org/t/a-unified-approach-to-incentivizing-ergo-nodes-depin-p2p-networks-ai-tasks-and-so-on/5286): kushti's proposal on indirect incentives via features, Hermes, indexed nodes.

- [Ergo Forum—Generosity dApp Idea](https://www.ergoforum.org/t/generosity-dapp-idea-a-commons-well/5277): Commons well concept for post-AGI M2M commerce.

- [IEEE Spectrum—Building Long-Distance Data Networks with Ham Radio](https://spectrum.ieee.org/build-a-longdistance-data-network-using-ham-radio): Reference for radio-based blockchain sync feasibility.

- [IACR ePrint—2024/692](https://eprint.iacr.org/2024/692): NIPoPoWs variant presented at ErgoSummit Summer 2024 (better than standard NIPoPoWs for low-bandwidth sync).

- [Ergo Explorer Rich List](https://ergexplorer.com/rich-list): New feature tracking top addresses.

- [Ergo Community Hub](https://ergoblockchain.org/): Community-run website with resources and ecosystem links.

- [CoinGecko Ergo Updates](https://coinmarketleague.com/coin/ergo): Voting and community engagement.

- [VoltPay](https://voltpay.store): Non-KYC swap and Swype prepaid card integration.

- [Rosen Watcher Release v6.0.0](https://github.com/rosen-bridge/watcher/releases/tag/6.0.0): Bitcoin-Runes support with updated collateral requirements.

- [Rosen Watcher UI v3.5.0](https://github.com/rosen-bridge/ui/releases/tag/watcher-app-3.5.0): Updated watcher app.

- [Rosen Operation Docs—Watcher Deploy](https://github.com/rosen-bridge/operation/blob/dev/docs/watcher/deploy-docker.md): Docker deployment and configuration.

- [ErgoChats (on-chain chat)](https://ergochats.vercel.app/): Decentralized, moderation-free chat alternative.

- [qx() Balance Query Script](msg#582632-635): Python script for historical address balances using GPHL and node endpoint (pagination fixed version).

- [USE Stablecoin—Medium Article](https://medium.com/@manastaking/use-new-algorithmic-stablecoin-8dfcb43172f6): Launch event details and vision.

- [Ergo Explorer—Javanese Translation PR](https://github.com/ergoplatform/explorer-frontend/pull/198): Open since Sept 2024; bounty pending.

- [Ergo Wallet App PR](https://github.com/ergoplatform/ergo-wallet