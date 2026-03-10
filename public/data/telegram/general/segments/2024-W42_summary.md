---
title: "Ergo General Chat — 2024-W42"
date_start: "2024-10-14"
date_end: "2024-10-20"
type: telegram_weekly
channel: general
week: "2024-W42"
source: telegram
message_count: 542
categories: [bridges, ecosystem, technical, defi, wallet, governance, marketing, community]
key_terms: [Rosen bridge, ETH bridge, cross-chain, wrapped assets, rsETH, ErgoHack 9, hackathon, UI/UX, mining tools, user experience, sub-blocks, protocol 6.0, soft-forking, block parameters, finality, Mew Finance, Mew Kitties, DEX, NFT membership, profit sharing]
---
# Ergo General Chat — 2024-W42 Summary

## Key Topics Discussed

- **Rosen Bridge Ethereum Integration**: The ETH bridge went live on 2024-10-19, allowing cross-chain asset transfers. Note: ADA-to-ETH bridging was not immediately available and required a 1-2 day update cycle for watcher/guard services [@HQΣr, msg#520810, 2024-10-19].

- **Ergo 6.0 Activation & Sub-blocks**: Development progressing on soft-fork support for new parameters, including adjustable sub-blocks per block via miner voting. Existing clients will skip validation of new voting parameters [@kushti, msg#520411, 2024-10-16].

- **Freezable Stablecoin Risk in Bridges**: Discussion of which bridged stablecoins (USDC, USDT, etc.) have freeze/seize functions. Alternatives identified: FRAX, LUSD, CRVUSD (all decentralized, unfreezable). Consensus that bridges should avoid bringing home regulated assets unless necessary [@Armeanio, Aberg, Pulsarz, msg#520489–521012, 2024-10-16–10-19].

- **Ledger Hardware Wallet Support**: Ledger dropped Nano S support (device EOL); Stax and Flex UI support completed. Keystone integration bounty at ~8k ERG to add Ergo support [@Pulsarz, Aberg, msg#520784–798, 2024-10-19].

- **Real-World Asset Integration**: Cup of Sugar store launched on MewFinance, selling raw honey for ERG, SigmaUSD, and wrapped Cardano assets. Demonstrates practical p2p commerce on Ergo [@kushti, msg#520967–521104, 2024-10-19–10-20].

- **Paideia DAO Progress**: Workaround deployed for map ordering issue; proposals and voting successfully tested; infrastructure readied for quiet mainnet launch [@kushti, msg#520510, 2024-10-16].

- **MewFinance Tier 6 Membership & NFTs**: Mew Kitty NFTs unlock Tier 6 membership (requires Tier 5 first). Tier 6 grants free trading and 5% profit sharing from Mart + DEX ERG fees [@Aco, HQΣr, msg#521078–1082, 2024-10-20].

- **Ethereum Speed Race & Sub-blocks**: Discussion that Ethereum pursuing faster finality (12s slots); Ergo's sub-block design positions it competitively for speed while maintaining decentralization [@LouisLibre, msg#520627–633, 2024-10-17].

- **ErgoHack IX Launch**: Registration closes October 23rd; hackathon runs October 25–30 with focus on UI/UX improvements and mining innovations [@Ergo NEWS, msg#520257, 2024-10-15].

---

## Important Decisions or Announcements

- [@Armeanio, msg#520397, 2024-10-16]: Watcher operators must update to Ethereum integration; versions 4.0.0 (watcher) and 2.4.1 (UI) released with decimal drop refactor and Ethereum health checks.

- [@kushti, msg#520411, 2024-10-16]: Soft-forking support for new parameters (including sub-blocks per block) is done; existing clients skip validation; further testing needed.

- [@HQΣr, msg#520810, 2024-10-19]: **Rosen Bridge Ethereum is now live**; ADA-to-ETH bridging to be added in 1–2 days.

- [@Bruno, msg#520394, 2024-10-16]: Gluon SDK published; developers can build custom frontends. Next step: update gluon.gold frontend to use SDK instead of backend.

- [@kushti, msg#520717, 2024-10-18]: ErgoDevs DAO fundraising event #1 for Ledger hardware wallet audit fully funded (210 ERG from 3 contributors).

- [@kushti, msg#520510, 2024-10-16]: Paideia contracts deployed with workaround; small bugs fixed; mainnet launch infrastructure ready.

---

## Technical Q&A Worth Preserving

- **Q** (@Marc the Shark): "are block times faster on testnet by chance? or still a cool 2 mins?" [@msg#520583, 2024-10-17]  
  **A** (@qx): "i think it's set to 30 seconds" with testnet explorer at https://testnet.ergoplatform.com/en/ [@msg#520595–596, 2024-10-17]

- **Q** (@Kozz/Lejandao): "does Ergo have a way in-chain to convert ERGs to ETH or BNB? or using some cross/side chain" [@msg#519915, 2024-10-14]  
  **A** (@HQΣr): "Cardano and BTC currently" (implying cross-chain bridges to those networks; now Ethereum is live).

- **Q** (@Jack Σ): "Is there some risk involved regarding minting all the supply on ETH? I mean rsERG is not as secure as original ERG right?" [@msg#519984, 2024-10-14]  
  **A** (@HQΣr): "Cold wallet with more than 5 signatures to validate any hijack... kind of not risk" [@msg#519990–521, 2024-10-14].

- **Q** (@Marc the Shark): "I made a locked contract for 10 blocks 🙈" (realized block time was longer than expected) [@msg#520589, 2024-10-17]  
  **A** (@HQΣr): "Check the height in initial TX sign and then compare to current when signing?" [@msg#520591, 2024-10-17].

- **Q** (@Man ish): "Will be excellent if we are able to choose from normal block confirm or sub-block confirm for each TX separately in every dApp" [@msg#520641, 2024-10-18]  
  **A** (@Luivatra): "All p2p by default will have sub-blocks... dApps using chained transactions can assume instant finality because the chain breaks if the start falls away" [@msg#520648–651, 2024-10-18].

- **Q** (@Shiv Chauhan): "What will be best market interest rate to borrow SigmaUSD with rsbtc as collateral?" [@msg#521053, 2024-10-20]  
  **A** (@cannon_q): "It's trial and error. See what market will bear. Best might be swap BTC to ERG, then borrow SigmaUSD from Duckpools.io at 6.8% currently" [@msg#521059, 2024-10-20].

- **Q** (@Shiv Chauhan): "I am not able to understand the liquidation penalty which is 30% on DuckPools and how liquidation works" [@msg#521064, 2024-10-20]  
  **A** (@cannon_q): "Point of DuckPools is to keep lenders whole. Borrower must over-collateralize; if collateral value drops below threshold, loan is liquidated. Wise to keep at 140%+ if 130% is threshold" [@msg#521065, 2024-10-20].

---

## Links Shared

- [https://github.com/ergoplatform/explorer-frontend/pull/198](https://github.com/ergoplatform/explorer-frontend/pull/198): Explorer frontend PR approved by kushti (@msg#519948, 2024-10-14).

- [https://ergohack.io/register/](https://ergohack.io/register/): ErgoHack IX registration (closes Oct 23; event Oct 25–30) (@msg#520257, 2024-10-15).

- [https://ergoraffle.com/raffle/show/4ccdfec7e133c57195b7deae74708e24889d32842db88c77a0ac8f7cd57e36bd](https://ergoraffle.com/raffle/show/4ccdfec7e133c57195b7deae74708e24889d32842db88c77a0ac8f7cd57e36bd): ErgoDevs DAO fundraising for Ledger 3rd-party audit (@kushti, msg#520717, 2024-10-18).

- [https://app.rosen.tech/](https://app.rosen.tech/): Rosen Bridge Ethereum interface (live as of Oct 19) (@Ergo NEWS, msg#521111, 2024-10-20).

- [https://github.com/rosen-bridge/watcher/releases/tag/4.0.0](https://github.com/rosen-bridge/watcher/releases/tag/4.0.0): Watcher 4.0.0 release notes with Ethereum support (@Armeanio, msg#520397, 2024-10-16).

- [https://github.com/rosen-bridge/ui/releases/tag/watcher-app-2.4.1](https://github.com/rosen-bridge/ui/releases/tag/watcher-app-2.4.1): Watcher UI 2.4.1 (@Armeanio, msg#520397, 2024-10-16).

- [https://gluon.gold](https://gluon.gold): Gluon stablecoin frontend (to be updated to use SDK) (@Bruno, msg#520394, 2024-10-16).

- [https://github.com/ergoplatform/ergo-wallet-app/pull/183](https://github.com/ergoplatform/ergo-wallet-app/pull/183): Ergo Wallet App PR awaiting merge (@Yulius, msg#520381, 2024-10-15).

- [https://github.com/ergoplatform/ledger-app-ergo/pull/19](https://github.com/ergoplatform/ledger-app-ergo/pull/19): Ledger Stax/Flex UI support merged (@Ergo NEWS, msg#521111, 2024-10-20).

- [https://sigmanauts.com/podcast/](https://sigmanauts.com/podcast/): The Ergo Podcast RSS feeds and archives (@rustinmyeye, msg#520611, 2024-10-17).

- [https://testnet.ergoplatform.com/en/](https://testnet.ergoplatform.com/en/): Ergo testnet explorer (30-second block time) (@qx, msg#520596, 2024-10-17).

- [https://store.mewfinance.com/explore?seller=9fRyQfr7c889pFF5A4waw3jH5zmqQT3qdrF7zeHuAttuNUQbLTE](https://store.mewfinance.com/explore?seller=9fRyQfr7c889pFF5A4waw3jH5zmqQT3qdrF7zeHuAttuNUQbLTE): Cup of Sugar store on MewFinance (@HQΣr, msg#520999, 2024-10-19).

- [https://iohk.io/en/blog/posts/2024/10/11/the-11-blockchain-tenets-towards-a-blockchain-bill-of-rights/](https://iohk.io/en/blog/posts/2024/10/11/the-11-blockchain-tenets-towards-a-blockchain-bill-of-rights/): IOHK blog on blockchain principles (triggered discussion on Ergo's alignment) (@T F, msg#520001, 2024-10-14).

- [https://vitalik.eth.limo/general/2024/10/14/futures1.html](https://vitalik.eth.limo/general/2024/10/14/futures1.html): Vitalik post on Ethereum finality improvements (relevance to Ergo sub-blocks) (@LouisLibre, msg#520624, 2024-10-17).

- [https://curiaregiscrypto.medium.com/sigmausd-on-ergo-a36e0cdff743](https://curiaregiscrypto.medium.com/sigmausd-on-ergo-a36e0cdff743): Medium article on SigmaUSD principles (cited in freeze/seize discussion) (@Armeanio, msg#520489, 2024-10-16).

- [https://www.pokernow.club/mtt/bober-poker-night-23-RRh50mURwe](https://www.pokernow.club/mtt/bober-poker-night-23-RRh50mURwe): Poker night event Oct 23 @ 7pm UTC (@MavΣrickBg, msg#520760, 2024-10-19).

---

## Unresolved Questions

- **Ledger Live Integration Status**: @Unknown asked about Ledger Live support timeline; @cannon_q noted "In progress, seems closer than ever" but no firm ETA given [@msg#521013–1015, 2024-10-19].

- **Keystone Integration Timeline**: Bounty at ~8k ERG posted; @Pulsarz noted Keystone lacks Ergo support yet. Status unclear whether work has started [@msg#520793–798, 2024-10-19].

- **Sub-block Finality & dApp Adoption**: @Man ish asked whether dApps can offer per-TX choice between normal and sub-block confirmation; @Luivatra clarified all p2p goes through sub-blocks first, but dApp-level UX integration details remain TBD [@msg#520641–651, 2024-10-18].

- **ADA-to-ETH Bridging Completion**: Announced as 1–2 day update but no confirmation of completion by week's end [@HQΣr, msg#520810, 2024-10-19].

- **Poker Night NFT/Token Sales**: @MavΣrickBg flagged complexity in automating chip distribution and ERG collection via NFT marketplace; no clear resolution proposed [@msg#520763–764, 2024-10-19].

- **Forum Activity & Knowledge Preservation**: @kushti noted "need to compile list of works done on last 10 years" and republish "Smart Contracts for the People" (2018); no action items assigned [@msg#520042–044, 2024-10-14].