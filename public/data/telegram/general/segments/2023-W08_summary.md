---
title: "Ergo General Chat — 2023-W08"
date_start: "2023-02-20"
date_end: "2023-02-26"
type: telegram_weekly
channel: general
week: "2023-W08"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2023-W08 Summary

## Key Topics Discussed

- **Spectrum Finance Yield Farming**: @Gazza initiated private testing of a new yield farming protocol (msg#368925). Focus on educating community about DeFi mechanics and impermanent loss risks. Round 2 testing launched with new farm (msg#369471).

- **Rosen Bridge Status**: Stress testing completed successfully with high transaction throughput. Race conditions and bottlenecks mostly resolved. Switched from Koios to Ogmios for reliability. First draft of tokenomics finalized (msg#369255, msg#369467).

- **Oracle Pools Activity**: Oracle Pool v1 and v2 operational. v2 being used in Dexy Gold beta with GORT rewards system. Off-chain voting improvements in progress to support more decentralized environments (msg#369246-248).

- **Wallet Migration from Yoroi**: End-of-February deadline announced for Yoroi Ergo support discontinuation. Community directed to migrate to Nautilus, SafeW, or Ergo Wallet (msg#369756, msg#370182).

- **ErgoNames Development**: Plasma scaling solution implementation in progress. Development activity ongoing but not yet live (msg#369050).

- **Spectrum Wallet UI Design**: Community provided feedback on Spectrum Wallet branding and design concepts, including horizontal vs. vertical layouts and logo placement (msg#368931-943).

- **MachinaFinance (Machina Finance) DEX**: Order book-based DEX announced as complement to AMM systems, enabling arbitrage opportunities and price transparency (msg#369739, msg#370003-370008).

- **NIPoPoWs Capability**: NIPoPoWs not yet enabled; discussed as future enhancement for light client scenarios (msg#369906-369907).

- **Mobile Node Running**: Confirmed feasible on Android via Termux with detailed setup scripts shared. Works on Android versions prior to 12 without issues (msg#370033-370049).

- **Ergo Platform Speed Improvements**: Community discussion initiated on potential optimizations including sub-blocks, sidechains, and faster confirmation protocols. 6.0 testnet planned with parameter tweaking (msg#369268-370007).

- **Nakamoto Coefficient Discussion**: Community questioned Ergo's hypothetical decentralization ranking; comparisons drawn to Bitcoin (7), Ethereum (2), Solana (32) (msg#369264-369268).

---

## Important Decisions or Announcements

- [@Gazza, msg#368925, 2023-02-20]: Spectrum Finance officially began private testing of yield farming protocol
- [@Glasgow, msg#369058, 2023-02-21]: ErgoHack VI deadline confirmed as midnight (end of Feb 21)
- [@Aberg, msg#369065, 2023-02-21]: Spectrum Wallet UI design round initiated with community feedback
- [@Glasgow, msg#369248, 2023-02-22]: Oracle Pools v1 always online; v2 in beta with Dexy Gold and court rewards
- [@HQΣr, msg#369255, 2023-02-22]: Rosen Bridge stress testing successful; race conditions resolved; tokenomics first draft ready
- [@Gazza, msg#369469-471, 2023-02-23]: Spectrum Finance yield farming released; Round 2 testing started with new farm
- [@Gazza, msg#369480-485, 2023-02-23]: ErgoDEX rebranded to Spectrum Finance months prior; name change clarified publicly
- [@CW, msg#369756, 2023-02-25]: Yoroi Ergo support ending by end of February; users must migrate
- [@Armeanio, msg#369997, 2023-02-25]: SigmaUSD contract update available via NFT key; community vote possible before key burn
- [@Gazza, msg#369595, 2023-02-24]: No fiat on-ramp planned within 60 days; Cardano DEX release expected soon

---

## Technical Q&A Worth Preserving

- **Q** (@TMR.ΣRG, msg#369268): How does MAV (Minimum Attack Value) differ from Nakamoto coefficient?
  **A** (@eπ, msg#369265-266): Discussed but not fully resolved; appears MAV measures different aspect of decentralization

- **Q** (@gg, msg#369906-907): Are NIPoPoWs already enabled or a future feature?
  **A** (@HQΣr, msg#369922-927): NIPoPoWs not currently enabled. Mobile nodes runnable now via Satergo without NIPoPoWs. Android/Termux setup possible with terminal emulator (msg#369928-929).

- **Q** (@Siavash, msg#370174): Is it dangerous to keep coins in Yoroi given upcoming sunset?
  **A** (@qx(), msg#370176-181): If seed phrase is known, restore to Nautilus, Ergo Wallet, or SafeW. Verify restore before removing Yoroi plugin. If not 100% sure of seed phrase, delay migration.

- **Q** (@Unknown, msg#370007): What is the difference between order book DEX and AMM?
  **A** (@qx(), msg#370007): Order book allows manual price setting and transparency of depth; buyers matched with sellers at posted prices. AMM uses mathematical curves to adjust price dynamically based on liquidity pool composition. Order books enable arbitrage when prices diverge between systems (msg#370003-370008).

- **Q** (@Unknown, msg#369999): What does "swap pairs" mean in DEX context?
  **A** (@TMR.ΣRG, msg#370000): Order book system where buy/sell offers are matched like stock markets, as opposed to AMM pools.

- **Q** (@Unknown, msg#369980-982): Is ErgoNames live and working?
  **A** (@Glasgow, msg#369050, msg#370103): Not yet live; plasma scaling solution in progress; check GitHub for development activity.

- **Q** (@Kallo Shaman, msg#369060): Is multichain wallet for Ergo and Cardano planned (like Yoroi but better)?
  **A** (@Gazza, msg#369063, msg#369065): Not anytime soon; Spectrum Wallet mentioned as planned Ergo-focused wallet with UI design underway.

- **Q** (@Unknown, msg#369145-148): How to connect local Ergo node to wallet on same device?
  **A** (@Unknown, msg#370168): Use `http://127.0.0.1:9053/` if node and wallet on same device. For remote devices, use local IP of node machine. Ensure node is fully synced.

---

## Links Shared

- [https://lun-us.icons8.com/d/fIazIQ_l20y1ofqf4UWrIg]: High-quality Ergo branding image (msg#369036)
- [https://www.figma.com/file/pd92vgB3xNFThaacIKodYs/ERGO]: Ergo design system Figma file with community assets (msg#369037)
- [https://ergo.watch/oracle-pools/ERGUSD]: Oracle Pools monitoring dashboard showing ERGUSD pool status (msg#369248)
- [https://github.com/ergoplatform/oracle-core/issues/173]: Off-chain voting code improvements for decentralized Oracle Pools (msg#369247)
- [https://github.com/ergoplatform/eips/pull/89]: EIP-23 update contract pull request for Oracle governance (msg#369247)
- [https://ergcube.com/index.php?do=static&page=tokens-dashboard]: Ergo ecosystem token price hub (msg#369075)
- [https://youtu.be/9SzKALqsQrk]: Proof of Ergo interview with Gazza on Spectrum Finance (msg#369568)
- [https://www.thebalancemoney.com/what-is-yield-farming-in-cryptocurrency-5272063]: General yield farming explainer (msg#369472)
- [https://github.com/rosen-bridge]: Rosen Bridge codebase (msg#370240)
- [https://youtu.be/9vZBfvGl-ZI]: Noah's video on port forwarding for Ergo node (msg#370180)
- [https://ergoplatform.org/en/news/Yoroi-to-End-Support-for-Ergo-Wallet/]: Official announcement of Yoroi Ergo support discontinuation (msg#370182)
- [https://ergoplatform.org/en/blog/2021-09-22-sigusd-and-sigrsv-a-how-to-guide/]: SigmaUSD and SigmaRSV risk guide (msg#370213)
- [https://youtu.be/3wIzeX42zfc]: Tutorial on running Ergo node on Android (msg#369929)
- [https://docs.ergoplatform.com/node/install/node-android/]: Android node installation documentation (msg#369930)
- [https://docs.ergoplatform.com/eco/ergomixer/mixer-android/]: Ergo Mixer on mobile documentation (msg#369931)
- [https://ergoplatform.org/en/blog/Earning-ERG-in-2023-and-Beyond/]: Blog post on ERG earning opportunities (msg#370222)
- [https://sigmaverse.io]: Ergo ecosystem overview dashboard (msg#370226)
- [https://ergonaut.space]: Ergo detailed technical documentation (msg#370248)
- [https://ergoplatform.org/en/get-erg/#Wallets]: Official Ergo wallet list (msg#368887)

---

## Unresolved Questions

- **ErgoNames Decentralization**: @Aberg raised concern about ErgoNames claiming decentralization while controlled by 12 key holders rather than truly distributed (msg#369051). Status unclear.

- **Speed Optimization Roadmap**: @kushti outlined potential improvements (sub-blocks, sidechains, faster confirmations) but community discussion deferred to future formal proposal. No consensus on which approach to pursue (msg#369268-370007).

- **Block Time vs. Timestamp Dependencies**: @kushti noted contracts relying on block height rather than timestamp would be affected by increased block speed, but whether this necessitates protocol-level constraints remains unresolved (msg#369268).

- **Fiat On-Ramp Timeline**: @Gazza stated no FIAT ramp within 60 days (msg#369595) but gave no longer-term roadmap. Community requested urgently (msg#369589).

- **Spectrum Network Layer 2**: Unclear if Spectrum Network will integrate with Rosen Bridge or operate independently. @Gazza mentioned "no UI integration" but mechanics remain TBD (msg#369607-369621).

- **SigmaUSD v2 Update Mechanism**: @Armeanio holds NFT key for contract update post-bearwhale exploit, but community vote process and timing not finalized (msg#369997).

- **Ergo's Decentralization Ranking**: No consensus on where Ergo would rank on Nakamoto coefficient scale relative to Bitcoin (7), Ethereum (2), Solana (32), etc. (msg#369264-369268).