---
title: "Ergo General Chat — 2023-W52"
date_start: "2023-12-25"
date_end: "2023-12-31"
type: telegram_weekly
channel: general
week: "2023-W52"
source: telegram
message_count: 0
categories: [bridges, technical, community, defi, ecosystem, nft, mining, wallet]
key_terms: [Rosen Bridge, cross-chain, Cardano, wrapped assets, rsERG, rsADA, watchers, permits, RSN collateral, 77 watcher slots, permit requirements, transaction bottleneck, ErgoSanta, NFT prizes, mempool issues, coal tokens, COMET rewards, 10M COMET grand prize, SigmaFi, SigUSD collateral]
---
# Ergo General Chat Summary — 2023-W52 (Dec 25-31)

## Key Topics Discussed

- **ErgoSanta Event**: Community-run holiday NFT chest opening game with donated prizes (tokens, NFTs, coal). Faced mempool congestion issues with zombie transactions blocking reward distribution. ~2530 keys submitted for 10M COMET grand prize. [@HQΣr, @Aco Šmrkas, @qx(), multiple msgs 462xxx]

- **Rosen Bridge Launch**: Cross-chain bridge between Ergo and Cardano went live Dec 30, 2023. Initial UI launch followed backend availability. Transaction queue backlog due to permit scarcity — watchers need 3000 RSN per permit, creating bottleneck. [@Armeanio, @CW, multiple msgs 463xxx-464xxx]

- **Watcher Infrastructure Issues**: 77 watcher slots filled on both Ergo and Cardano sides. Low permit counts among some watchers (1-7 permits) preventing transaction confirmation majority (requires 60%+1). Updates released (v1.0.9) to fix commitment ordering. [@Mint LkV, @Crypto Quokka, @E M, msgs 464xxx]

- **Permit Economics**: Community debated whether 3000 RSN per permit cost is sustainable or should be reduced to lower barrier to entry and increase permit availability. No formal decision announced. [@Rj, @Marty ErgoPad, @E M, msgs 464174-464245]

- **Spectrum Network & DEX Tokens**: SPF token design clarified — will be native token for Spectrum Network cross-chain layer 1, distinct from Splash (Cardano DEX token). ErgoDEX will not have its own token. [@Gazza, msg 463371]

- **SigmaFi Lending Protocol**: 1:1 peer-to-peer lending contracts where users can borrow ERG by collateralizing SigmaUSD/SigmaRSV or propose custom loan terms. Interest rates negotiable. Examples shown: borrow against collateral to buy more ERG, or borrow RSN to run watchers. [@qx(), msgs 462843-462847]

- **rsADA Babel Box Integration**: Nautilus wallet integrated rsADA (Cardano-wrapped ADA) into Babel boxes for DeFi strategies on Ergo. Example: borrow rsADA against ERG collateral on Sigmafi, then execute strategies. [@qx(), msg 464167]

- **Auction House vs. SkyHarbor**: Community discussion on offer functionality for NFTs. SkyHarbor has higher traffic but lacks collection/individual offers. ErgoAuctions supports offers. [@Unknown, msgs 462006-462013]

- **Emissi​on Schedule & Storage Rent**: High emission phase continues until March 2026, after which effects of miner selling will diminish significantly. Storage rent mining pools coming online to support miners. [@qx(), msg 463460]

- **Mining Parameter Governance**: Miners can vote to change transaction fees via config parameter (no EIP required, simple majority needed). Documentation and tools for this (Ergo Hack V project) exist but awareness is low. [@Pulsarz, @CW, @Glasgow, msgs 463641-463656]

## Important Decisions or Announcements

- [@Mint LkV, msg#463266, 2023-12-28]: Rosen Bridge UI release expected within 30 minutes (announcement made 14:11 UTC)
- [@HQΣr, msg#464341, 2023-12-31]: Watcher operators must update watcher-service to v1.0.9 immediately via Docker compose pull/down/up to fix commitment order and add job for older not-triggered events
- [@Armeanio, msg#463813, 2023-12-30]: Rosen Bridge UI went live "in like 30 mins" (announced 11:56 UTC)
- [@Armeanio, msg#464004-464005, 2023-12-30]: 100% of bridge transaction proceeds will be locked as liquidity on Ergo and Cardano DEXes; same mechanism will apply for ETH bridge launch
- [@Crypto Quokka, msg#464048, 2023-12-30]: SkyHarbor backend updates in progress; feature additions (like offers) will be possible after upgrade completion

## Technical Q&A Worth Preserving

- **Q** (@Ian Lee, msg#462415): Where to learn ErgoScript from scratch?
  **A** (@Unknown, msg#462417-462420): YouTube channel: https://www.youtube.com/channel/UCYOIxD7YSHN5QwLIulOWrew (DECO), docs: https://docs.ergoplatform.com/dev/scs/ergoscript/, GitHub examples: https://github.com/ergoplatform/ergoscript-by-example

- **Q** (@Ian Lee, msg#462424): Can knowledge of VB, VB Script, SQL, Python help with ErgoScript?
  **A** (@qx(), msg#462425): Any programming language foundation helps. For building dApps interacting with chain (not writing smart contracts): Java, C#, Python frameworks available. See frameworks doc and ErgPy library.

- **Q** (@Scoobs, msg#462478): Can I set up same Ergo wallet on multiple devices using seed phrase? Will first device become obsolete?
  **A** (@Rj, msg#462479): Yes, you can use same seed phrase on different wallets (Nautilus, Satergo, etc.). All devices access same wallet; nothing becomes obsolete.

- **Q** (@Bye H8er, msg#463280-463298): How does SigmaFi lending work? Can I use tokens in liquidity farming as collateral without removing? Do shorter timeframes grant lower interest rates?
  **A** (@qx(), msg#462843-462847): No, tokens in LP cannot be used as collateral. Must provide SigmaUSD/SigmaRSV collateral (135-170% of borrow amount). Interest rates are peer-negotiated; shorter terms may get better rates depending on lender.

- **Q** (@€rgonauta, msg#462598-462625): Why does wallet API crash with many transactions? How to fix sync with Koinly?
  **A** (Multiple): Check Satergo Telegram for support (@mewtoshi). If 4000+ transactions in single wallet, API can fail. No direct solution offered; workaround is to split into multiple wallets.

- **Q** (@Ling, msg#464289): How to set logging level on Ergo node? How to configure as systemd service?
  **A** (Unresolved): Question asked but no response in chat segment.

- **Q** (@Bye H8er, msg#464528-464531): Why would a bear whale suppress ERG price if it keeps their own bags down?
  **A** (@CW, msg#464533): Could be entity scared of competition, or just antagonism. (@qx(), msg#464550): Suggested getting analysis out for counter-trading opportunities.

## Links Shared

- [https://ergoplatform.org/en/get-erg/](https://ergoplatform.org/en/get-erg/): Official wallet list and purchase options
- [https://www.youtube.com/channel/UCYOIxD7YSHN5QwLIulOWrew](https://www.youtube.com/channel/UCYOIxD7YSHN5QwLIulOWrew): DECO ErgoScript tutorials
- [https://docs.ergoplatform.com/dev/scs/ergoscript/](https://docs.ergoplatform.com/dev/scs/ergoscript/): ErgoScript documentation
- [https://github.com/ergoplatform/ergoscript-by-example](https://github.com/ergoplatform/ergoscript-by-example): ErgoScript examples
- [https://docs.ergoplatform.com/dev/stack/introduction/#frameworks](https://docs.ergoplatform.com/dev/stack/introduction/#frameworks): Ergo development frameworks (Java, C#, Python)
- [https://github.com/mgpai22/ergopy](https://github.com/mgpai22/ergopy): ErgPy library for Python
- [https://docs.ergoplatform.com/dev/stack/fleetsharp/](https://docs.ergoplatform.com/dev/stack/fleetsharp/): FleetSDK for C#
- [https://docs.ergoplatform.com/eco/lithos/](https://docs.ergoplatform.com/eco/lithos/): Lithos Protocol documentation
- [https://app.rosen.tech/](https://app.rosen.tech/): Rosen Bridge application
- [https://app.rosen.tech/events](https://app.rosen.tech/events): Rosen Bridge transaction event dashboard
- [https://docs.ergoplatform.com/mining/governance/](https://docs.ergoplatform.com/mining/governance/): Mining governance and parameter voting
- [https://docs.ergoplatform.com/node/conf/conf-voting/](https://docs.ergoplatform.com/node/conf/conf-voting/): Node configuration voting
- [https://app.spectrum.fi/cardano/liquidity/97549e46bedc9ceedf4f881e4f6f35c14acc321bf07612966d32cb0c.727352534e5f4144415f4e4654](https://app.spectrum.fi/cardano/liquidity/97549e46bedc9ceedf4f881e4f6f35c14acc321bf07612966d32cb0c.727352534e5f4144415f4e4654): rsRSN liquidity pool on Spectrum/Cardano
- [https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=04b95368393c821f180deee8229fbd941baaf9bd748ebcdbf7adbb14&tokenNameB=7273455247](https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=04b95368393c821f180deee8229fbd941baaf9bd748ebcdbf7adbb14&tokenNameB=7273455247): rsERG trading on Minswap
- [https://app.dexhunter.io/rserg](https://app.dexhunter.io/rserg): rsERG price aggregator
- [https://www.taptools.io/charts/token?pairID=6af394732c1cae400a6b845f871a79ffbd2e0dadc2a0db7532965882.72734552475f4144415f4e4654](https://www.taptools.io/charts/token?pairID=6af394732c1cae400a6b845f871a79ffbd2e0dadc2a0db7532965882.72734552475f4144415f4e4654): rsERG chart on Taptools
- [https://simpleswap.io/](https://simpleswap.io/): Non-KYC swap service for purchasing ERG (US users)
- [https://github.com/rosen-bridge/watcher/releases/tag/1.0.9](https://github.com/rosen-bridge/watcher/releases/tag/1.0.9): Watcher v1.0.9 release
- [https://t.me/Satergo](https://t.me/Satergo): Satergo wallet Telegram for support
- [https://ergexplorer.com/addresses#9gozTPkWPv8G4Fuk7cQNvaRGjwoU9gRSZEYoR8KUMVR2qJ4GoPm&offset=0](https://ergexplorer.com/addresses#9gozTPkWPv8G4Fuk7cQNvaRGjwoU9gRSZEYoR8KUMVR2qJ4GoPm&offset=0): ErgoSanta prize chest address
- [https://ergoauctions.org/collection/8d22868e70b475b2b4535693f33eb13c4c98a18d0cab1f67cc026c25ddeb09d1](https://ergoauctions.org/collection/8d22868e70b475b2b4535693f33eb13c4c98a18d0cab1f67cc026c25ddeb09d1): ErgoFans GreasyCex Trading Cards collection on Auction House

## Unresolved Questions

- **Watcher Permit Pricing**: Should minimum permit requirement be enforced (proposed 10-20 range) to prevent low-capacity watchers from blocking transaction confirmations? No formal policy announced. [@Mint LkV, @Benny, @E M, msgs 464232-464243]

- **Transaction Priority Mechanism**: Multiple participants suggested allowing higher-fee transactions to skip queue, but no decision made on implementation. [@Marty ErgoPad, msg#464213, @Vinicius, msg#464218]

- **Ergo Node Logging Configuration**: How to set stdout logging level and configure systemd service for Ergo node — asked by @Ling (msg#464289) with no response.

- **SPF Token Launch Timeline**: When will SPF farming pools launch on Spectrum Network? [@Bye H8er, msg#464297] — unresolved.

- **Cardano DEX Token (Splash)**: Specific details on Splash token integration into Cardano DEX functionality mentioned but not elaborated. [@Gazza, msg 463371]

- **Bear Whale Identity & Motivation**: Community suspects price suppression via large dumps at $1.80, but no investigative analysis offered or addresses identified. [@Rj, msgs 464526-464527]

- **SkyHarbor Offers Feature Timeline**: When will collection/individual offer functionality ship after backend updates? [@Crypto Quokka, msg#464048] — no ETA given.

---

**Summary Notes:**

This week was dominated by **Rosen Bridge launch** logistics and **infrastructure teething issues** (watcher permits, transaction backlog, mempool congestion). **ErgoSanta** provided community goodwill but revealed Telegram/network spam vulnerabilities. **SigmaFi**, **rsADA Babel boxes**, and **cross-chain strategy integration** showed ecosystem composability maturing. Mining governance documentation exists but lacks visibility. Most critical unresolved issue: **watcher permit scarcity limiting bridge throughput** — community consensus emerging that 3000 RSN minimum should be reduced, but no formal proposal enacted by week end.