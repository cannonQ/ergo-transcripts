---
title: "Ergo General Chat — 2024-W44"
date_start: "2024-10-28"
date_end: "2024-11-03"
type: telegram_weekly
channel: general
week: "2024-W44"
source: telegram
message_count: 0
categories: [bridges, technical, nft, defi, ecosystem, wallet, marketing, governance, community]
key_terms: [Rosen, rsERG, Ethereum, liquidity, arbitrage, uniswap, RoseNet, p2p, decentralized, testing, guards, fault tolerance, Lilium, NFT, minting, pricing, logarithmic, collection standards, sigUSD, collateral]
---
# Ergo General Chat — 2024-W44 Summary

## Key Topics Discussed

- **Rosen Bridge Ethereum Integration**: Rosen is now processing transactions to and from Ethereum with growing rsERG/ETH liquidity pools on Uniswap and MewFinance. RoseNet, the new p2p communication layer, is in final testing stages and seeking global decentralized node participation to improve fault tolerance and scalability.

- **Ledger Hardware Wallet Integration**: Ergo integration into Keystone hardware wallet is progressing with address generation working. Kushti confirmed Ergo code will be sent to Ledger for functional testing (~2 weeks), followed by third-party audit before Ledger Live availability.

- **Node Configuration Governance**: DX Pool (>51% hashrate) is actively voting to increase storage rent (cost per output) from current 252 toward a 2021-era recommendation of 1000-1500, following proper governance procedures through mining pool proposals.

- **Kraken Listing Status**: Ergo is on Kraken's shortlist for listing review. Email transparency prompted discussion about CEX adoption strategy; community consensus favors public transparency over private negotiations to prevent insider manipulation.

- **ErgoHack IX Projects**: Nine projects submitted focusing on UI/UX: Community Liquidity Bootstrap, Stable Benefaction Platform, Last Byte Bar (NFT/token generation on block discovery), OnErgo (gamified engagement platform), Satergo Offline Vault, Minotaur (multi-sig improvements), OneStopShop (onboarding guide), Cup of Sugar (p2p local economy tracking), and 3D Explorer (UTXO visualization).

- **Storage Rent and Cost Per Output Governance**: Current cost per output is 252; miners voting to increase toward 1000-1500 historically recommended value. This affects airdrop transaction costs and reduces cheap output spam.

- **Palmyra/ZenGate Chainlink Partnership**: Decentralized trade financing using Chainlink proof-of-reserve and Winter Protocol for on-chain warehouse receipts. IoT devices (cameras, weight sensors, motion sensors) provide continuous proof of commodity existence. Plan includes building native Ergo oracles in addition to Chainlink integration.

- **Post-6.0 Development Directions**: kushti outlined major open questions: focus on Sigmachains, layer 2 solutions with stablecoin wallets for masses, or other directions. Sub-blocks progress is slow pending 6.0 finalization; 5.1.0 release targeted this week.

- **Meme Coin Applications**: Discussion of snek.fun-like dApps on Ergo. Consensus that 2-minute block time is unsuitable for high-frequency meme content; Sigmachains or layer 2 solutions suggested. kushti noted miners bear bandwidth/CPU costs for high-transaction-volume applications without corresponding rewards.

- **Fee Market and Spam Protection**: mempool minimum fee propagation can be configured per node to prevent low-fee spam. Reference client (v4.0.44+) has limits on transactions per peer. Fee estimation API exists but is untested in production applications; needs Bitcoin-wallet-style integration.

- **Collection Minting Standards on Lithos Protocol**: 0.4 ERG pricing is fair for collection standard minting using AVL Trees. HQΣr confirmed logarithmic pricing model and checked with multiple collection owners (CannonQ, Skyharbor, Auction House). Discussion of whether lower prices (e.g., 400 ERG) would encourage more minting.

- **MewFinance Escrow Service**: Escrow marketplace (mart.mewfinance.com) enables peer-to-peer trading of Ergo natives, Cardano (rsADA), rsETH, rsBTC, and Flux. No fiat support; only crypto-to-crypto. Allows sellers to restrict to specific buyers or open to public.

- **Bober DAO Proposal Success**: Bober YF: ErgExplorer proposal passed with 54.6% voting participation. Treasury funding to MewFinance approved for first 3 months of hosting/YF.

- **Charitable Response to Valencia Flooding**: HQΣr organizing community contributions (food, water, blankets) to support Valencia flood victims. Ordered water/milk pallets; exploring cross-chain fundraising through Ergo/Cardano ecosystem.

## Important Decisions or Announcements

- [@kushti, msg#523595, 2024-10-31]: 6.0 finalization ongoing; 5.1.0 release targeted this week. After 6.0, focus shifts to sub-blocks (slow progress) and major strategic question: Sigmachains vs. layer 2 solutions with mass-market stablecoin wallets.

- [@kushti, msg#523495, 2024-10-30]: Ledger integration moving to functional testing phase. Targeting ~2 weeks for Ledger testing; third-party audit phase TBD. Noted possibility of bringing back 2019 auditor who reviewed node, wallet, PoW, and cryptographic components.

- [@qx(), msg#523424, 2024-10-30]: Confirmed Kraken email is real; Ergo on official shortlist for review with no timeline committed.

- [@Glasgow, msg#523505, 2024-10-30]: ErgoHack IX deadline extended to November 1st midnight UTC.

- [@MavΣrickBg, msg#523720, 2024-10-31]: Bober DAO proposal vote successful (54.6% participation). Proceeding with Proposal v2: Treasury Bober funding to MewFinance + Development ERG for YF: ErgExplorer hosting (3 months).

- [@kushti, msg#523297, 2024-10-29]: Expressed highest confidence in Ergo's capabilities as programmable money and real-world financial impact, unlike 2019 uncertainty.

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Why is ERG priced at 3.3 SigmaUSD instead of expected 0.66 SigmaUSD? [msg#523161, 2024-10-28]
  **A** (@Unknown, @Luivatra): SigmaUSD v1 bank is outdated; v2 has different pricing. Users must use v2 for current rates. [msg#523163-165, 2024-10-28]

- **Q** (@Unknown): How does SigmaUSD minting work? [msg#522870, 2024-10-28]
  **A** (@Unknown): Protocol requires minimum 400% collateral before more SigmaUSD can be minted. SigmaRSV amount and ERG price directly impact collateral percentage. [msg#522870, 2024-10-28]

- **Q** (@Unknown): Does Rosen Bridge support Exodus wallet for receiving rsERG on Cardano? [msg#523193, 2024-10-29]
  **A** (@kushti, implicit): Yes, standard wallet support; any Cardano wallet can receive rsERG. [context from bridge operations discussion, 2024-10-29]

- **Q** (@Unknown): How will rsERG be listed on centralized exchanges? [msg#523216, 2024-10-29]
  **A** (@kushti): Only makes sense where ERC20 tokens can be listed free or cheaper than native tokens. ERG must be bridged to target chain first, then supplied to CEX. [msg#523213, 2024-10-29]

- **Q** (@cannon_q): Why aren't mempool operators worried about spam attacks costing them bandwidth? [msg#523636-648, 2024-10-31]
  **A** (@kushti): Reference client (v4.0.44+) has spam protection: limits transactions accepted per peer, preventing single-peer spam vectors. Node operators can also raise minimum propagation fee to filter low-fee spam before mempool acceptance. [msg#523199-210, 2024-10-29]

- **Q** (@Richi): Can snek.fun-style rapid-fire meme apps run on Ergo's 2-minute block time? [msg#523864, 2024-11-02]
  **A** (@kushti): No—2-minute blocks unsuitable for such transaction volume. Requires either Sigmachains or layer 2. High-frequency traffic burdens miners with bandwidth/CPU without proportional rewards. [msg#523871, 2024-11-02]

- **Q** (@Unknown): Is there a fee estimation API for wallets? [msg#523874 context, 2024-10-31]
  **A** (@kushti): Node has fee estimation API showing cost to enter next block(s), but API is untested in production and underutilized by applications. Should be integrated like Bitcoin wallets do. [msg#523874 implicit, 2024-10-31]

- **Q** (@cannon_q): Would node operators participate in solo mining if auto-mining algorithm rewarded individuals? [msg#523889, 2024-11-02]
  **A** (@cannon_q): Unlikely beyond Sigmanauts pool and few solo miners. Warthog algo (CPU+GPU) might prevent pools longer-term. Could work better on sidechains with individual-favoring incentives. [msg#523889, 2024-11-02]

## Links Shared

- [https://www.dextools.io/app/en/ether/pair-explorer/0x85bb44d0a6f2a5844975ef19149d9c4b0bb77b7d](Uniswap rsERG/ETH liquidity pool on Dextools): Growing rsERG liquidity on Ethereum bridge. [msg#522868, 2024-10-28]

- [https://github.com/rosen-bridge/rosenet/tree/feat/global-test/tests/global](RoseNet global test instructions draft): p2p network testing for Rosen Bridge guards. [msg#522868, 2024-10-28]

- [https://www.youtube.com/@ErgoPlatform/videos](ErgoHack IX video releases): Real-time project submissions. [msg#522868, 2024-10-28]

- [https://mewfinance.com/](MewFinance updated features): Supporting rsSNEK, Cardano natives, verified collections. [msg#522868, 2024-10-28]

- [https://ergo.watch/dashboards/network](Ergo Network Dashboard): Real-time node, mining, governance stats. [msg#523200, 2024-10-29]

- [https://sigmanauts.com/](Sigmanauts official page): Mining pool & governance hub. [msg#523677, 2024-10-31]

- [https://mart.mewfinance.com/explore](MewFinance Escrow Marketplace): Direct peer-to-peer trading interface. [msg#522880, 2024-10-28]

- [https://www.ergoforum.org/t/attaching-arbitrary-conditions-to-unconfirmed-transactions/214/4](Ergo Forum: Off-chain contract evolution): Alice & Bob spending contract design. [msg#523191, 2024-10-29]

- [https://x.com/Sigmanauts/status/1851631177334993039](Sigmanauts Twitter): Community governance announcements. [msg#523399, 2024-10-30]

- [https://x.com/ergo_platform/status/1853140079444926969](Ergo Platform Ronin Network Call-to-Action): Cross-chain partnership collaboration request. [msg#523943, 2024-11-03]

## Unresolved Questions

- **Sub-blocks/Sigmachains funding**: kushti denied EF involvement; clarified ErgoDevs DAO is in talks with entities, but nature and timeline of ASIC/hardware partnerships remain TBD. [msg#523599-603, 2024-10-31]

- **Layer 2 vs. Sigmachains priority**: kushti opened strategic question on post-6.0 focus (Sigmachains, layer 2 stablecoin wallets, or other). Community call proposed to resolve direction. [msg#523595, msg#523900, 2024-10-31 & 2024-11-02]

- **Fee market maturity on Ergo**: Fee estimation API exists but untested. Application integration and Bitcoin-wallet parity remain aspirational. [implicit, 2024-10-31]

- **Ledger Live timeline**: Functional testing ~2 weeks; audit phase duration unknown. No delivery date confirmed. [msg#523495-497, 2024-10-30]

- **Kraken listing condition & timing**: On shortlist but no commitment or timeline. Depends on Kraken's internal review backlog. [msg#523424-427, 2024-10-30]

- **rsERG/wETH vs. rsERG/ETH pool distinction**: Discussion noted wETH vs. ETH labeling discrepancy on Dextools vs. Uniswap; technical implications (wrapped vs. native) not fully clarified in chat. [msg#523828-833, 2024-11-02]

- **Ergo oracles native implementation**: Plan to build native Ergo oracles (Oracle Pool v1/v2 already exist) but scope, timeline, and capital allocation TBD. [msg#523899 context, 2024-10-29]